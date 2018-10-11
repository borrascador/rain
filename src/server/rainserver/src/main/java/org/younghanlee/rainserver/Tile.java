package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Tile {
	// Position
	private int id;
	private int x;
	private int y;
	
	private HashMap<String, Integer> layers;
	private HashMap<String, Integer> events;
	private HashMap<Integer, Integer> crops;
	private HashMap<String, Integer> habitats;
	
	private int waterDepth = 10;
	
	private double wildlife; // How over-hunted is the tile
	
	private Player owner;
	private HashSet<Player> visitors;
	
	public Tile(int id) {
		this.id = id;
		this.x = id % World.getWidth();
		this.y = (id - x)/World.getWidth();
		this.layers = new HashMap<String, Integer>();
		this.events = new HashMap<String, Integer>();
		this.crops = new HashMap<Integer, Integer>();
		this.visitors = new HashSet<Player>();
		this.habitats = new HashMap<String, Integer>();
		
		wildlife = 1.0; 

	}
	
	public void addLayer(String name, int value) {
		this.layers.put(name, value);
	}
	
	public void addHabitat(String name, int id) {
		habitats.put(name, id);
	}
	
	public boolean hasHabitat(String name) {
		return habitats.containsKey(name);
	}
	
	public int getHabitat(String name) {
		return habitats.get(name);
	}
	
	
	public void addVisitor(Player p) {
		visitors.add(p);
		updateNeighbors(p, 1);
	}
	
	public void removeVisitor(Player p) {
		System.out.println("BEFORE REMOVE " + visitors);
		visitors.remove(p);
		System.out.println("REMOVE " + visitors);
		updateNeighbors(p, 1);
	}
	
	public ArrayList<Player> getVisitors(Player exclude) {
		ArrayList<Player> otherVisitors = new ArrayList<Player>();
		for (Player v : visitors) {
			if (v != exclude) {
				otherVisitors.add(v);
			}
		}
		return otherVisitors;
	}
	
	public JSONArray getVisitorsArray(Player exclude) {
		JSONArray ja = new JSONArray();
		for (Player v : visitors) {
			if (v != exclude) {
				JSONObject jo = new JSONObject();
				jo.put("name", v.getName());
				jo.put("xCoord", v.getX());
				jo.put("yCoord", v.getY());
				ja.put(jo);
			}
		}
		return ja;
	}
	
	public boolean occupied() {
		return !visitors.isEmpty();
	}
	
	public JSONObject toJSONObject(Player exclude) {
		JSONObject jo = new JSONObject();
		jo.put("id", id);
		jo.put("x", x);
		jo.put("y", y);
		
		JSONObject layersJO = new JSONObject();
		for (HashMap.Entry<String, Integer> entry : this.layers.entrySet()) {
			layersJO.put(entry.getKey(), entry.getValue());
		}
		jo.put("layers", layers);
		jo.put("visitors", getVisitorsArray(exclude));
		
		JSONArray crops = new JSONArray();
		for (HashMap.Entry<Integer, Integer> entry : this.crops.entrySet()) {
			JSONObject crop = new JSONObject();
			int id = entry.getKey();
			crop.put("id", id);
			crop.put("name", World.getItem(id).getName());
			int stage = entry.getValue();
			if (stage > 1) {
				stage = 1; 
			}
			crop.put("stage", stage);
			crops.put(crop);
		}
		jo.put("crops", crops);
		
		
		for (String habitatName: habitats.keySet()){
			jo.put(habitatName, World.getHabitat(habitats.get(habitatName)).getPublicType());
		}
		return jo;
	}
	
	public int getID(int x, int y) {
		return x * World.getWidth() + y;
	}
	
	public int distance(Tile t) {
		return Math.abs(y-t.y) + Math.abs(x-t.x);
	}
	
	public ArrayList<Integer> inSight(int sight) {
		ArrayList<Integer> tiles = new ArrayList<Integer>();
		// System.out.println("Center:" + x + "," + y);
		
		int ymin = y - sight;
		int ymax = y + sight;
		if (ymin < 0) {
			ymin = 0;
		}
		if (ymax >= World.getHeight()) {
			ymax = World.getHeight()- 1;
		}
		
		for (int i = ymin; i<= ymax; i++) {
			int yabs = Math.abs(i-y);
			
			int xmin = x-(sight-yabs);
			int xmax = x + sight - yabs;
			if (xmin < 0) {
				xmin = 0;
			}
			if (xmax >= World.getWidth()) {
				xmax = World.getWidth() - 1;
			}
			for (int j = xmin; j <= xmax; j++) {
				// System.out.println(i + "," + j);
				tiles.add(getID(i,j));
			}
		}
		return tiles;
	}
	
	// Return whether or not move is allowed
	public boolean legalMove (int newTile, int range) {
		return true; 
	}
	
	// n is the player that is triggering the update
	// We don't need to send an update to this player.
	public void updateNeighbors(Player p, int range) {
		for (int i: inSight(1)) {
			Tile t = World.getTile(i);
			for (Player v: t.getVisitors(p)) {
				if (distance(t) <= v.getSight()) {
					v.addToBuffer(id);
				}
			}
		}
	}
	
	public JSONObject plant (int seed_id, Player p) {
		int n = p.getQuantity(seed_id);
		if (n >= 1) {
			int yield_id = World.getItem(seed_id).getYield();
			
			JSONObject inventory_change = World.getItem(seed_id).change(seed_id, -1, p, true);
			JSONArray inventory_changes = new JSONArray();
			inventory_changes.put(inventory_change);

			this.crops.put(yield_id, 10);
			updateNeighbors(null, 0);
			JSONObject payload = new JSONObject();
			payload.put("inventory", inventory_changes);
			return Message.EVENT_RESPONSE(payload);
		} else {
			return Message.ERROR(312, "Missing" + World.getItem(seed_id).getName());
		}
	}
	
	public JSONObject harvest(int crop_id, Player p) {
		if (!this.crops.containsKey(crop_id)) {
			return Message.ERROR(313, "There is no crop " + World.getItem(crop_id).getName() +" here");
		} 
		if (this.crops.get(crop_id) > 0){
			return Message.ERROR(314, World.getItem(crop_id).getName() +" is still growing");
		}
		int yield = 2 + Util.randomInt(10);
			
		JSONObject inventory_change = World.getItem(crop_id).change(crop_id, yield, p, false);
		JSONArray inventory_changes = new JSONArray();
		inventory_changes.put(inventory_change);
			
		this.crops.remove(crop_id);
		updateNeighbors(null, 0);
		
		JSONObject payload = new JSONObject();
		payload.put("inventory", inventory_changes);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public void decGrowthStage(int i) {
		for (HashMap.Entry<Integer, Integer> entry : crops.entrySet()) {
			int key = entry.getKey();
			int n = entry.getValue();
			// System.out.println(key + ": " + n);
			if (n > 0) {
				crops.put(key, n-1);
			}
			if (n-1 == 0) {
				updateNeighbors(null, 0);
			}
		}
	}
	
	public int getDepth() {
		return waterDepth;
	}
	
	public double getWildlife() {
		return wildlife;
	}
	
	public static void main(String[] args){
		
	}
}