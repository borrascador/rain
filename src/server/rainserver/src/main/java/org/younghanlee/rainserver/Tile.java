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
	
	private Player owner;
	private HashSet<String> visitors;
	
	public Tile(int id) {
		this.id = id;
		this.x = id % Constants.MAPWIDTH;
		this.y = (id - x)/Constants.MAPWIDTH;
		this.layers = new HashMap<String, Integer>();
		this.events = new HashMap<String, Integer>();
		this.crops = new HashMap<Integer, Integer>();
		this.visitors = new HashSet<String>();
	}
	
	public void addLayer(String name, int value) {
		this.layers.put(name, value);
	}
	
	public void addEvent(String name, int value) {
		this.events.put(name, value);
	}
	
	public void addVisitor(String name) {
		this.visitors.add(name);
	}
	
	public void removeVisitor(String name) {
		this.visitors.remove(name);
	}
	
	public HashSet<String> getVisitors() {
		return visitors;
	}
	
	public boolean occupied() {
		return !visitors.isEmpty();
	}
	
	public JSONObject toJSONObject() {
		JSONObject jo = new JSONObject();
		jo.accumulate("id", id);
		jo.accumulate("x", x);
		jo.accumulate("y", y);
		
		JSONObject layersJO = new JSONObject();
		for (HashMap.Entry<String, Integer> entry : this.layers.entrySet()) {
			layersJO.accumulate(entry.getKey(), entry.getValue());
		}
		jo.accumulate("layers", layers);
		jo.accumulate("visitors", occupied());
		
		JSONArray crops = new JSONArray();
		for (HashMap.Entry<Integer, Integer> entry : this.crops.entrySet()) {
			JSONObject crop = new JSONObject();
			int id = entry.getKey();
			crop.accumulate("id", id);
			crop.accumulate("name", World.getItem(id).getName());
			int stage = entry.getValue();
			if (stage > 1) {
				stage = 1; 
			}
			crop.accumulate("stage", stage);
			crops.put(crop);
		}
		System.out.println(crops.toString());
		jo.put("crops", crops);
		System.out.println(jo.toString());
		
		return jo;
	}
	
	public int getID(int x, int y) {
		return x * Constants.MAPWIDTH + y;
	}
	
	public int distance(Tile t) {
		return Math.abs(y-t.y) + Math.abs(x-t.x);
	}
	
	public HashSet<Integer> inSight(int sight) {
		HashSet<Integer> tiles = new HashSet<Integer>();
		// System.out.println("Center:" + x + "," + y);
		
		int ymin = y - sight;
		int ymax = y + sight;
		if (ymin < 0) {
			ymin = 0;
		}
		if (ymax >= Constants.MAPHEIGHT) {
			ymax = Constants.MAPHEIGHT - 1;
		}
		
		for (int i = ymin; i<= ymax; i++) {
			int yabs = Math.abs(i-y);
			
			int xmin = x-(sight-yabs);
			int xmax = x + sight - yabs;
			if (xmin < 0) {
				xmin = 0;
			}
			if (xmax >= Constants.MAPWIDTH) {
				xmax = Constants.MAPWIDTH - 1;
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
	
	// name is the player that is triggering the update
	// We don't need to send an update to this player.
	public void updateNeighbors(Player p, int range) {
		for (int i: inSight(Constants.MAXSIGHT)) {
			Tile t = World.getTile(i);
			for (String name: t.getVisitors()) {
				if (!p.getName().equals(name)) {
					Player p2 = World.getPlayer(name);
					if (distance(t) <= p2.getSight()) {
						p2.addToBuffer(id);
					}
				}
			}
		}
	}
	
	public JSONObject plant (int seed_id, Player p) {
		int n = p.getQuantity(seed_id);
		if (n >= 1) {
			p.setQuantity(seed_id, n - 1);
			this.crops.put(seed_id, 10);
			updateNeighbors(p, 0);
			return Message.EVENT_RESULT(p, "inventory", Arrays.asList(seed_id));
		} else return null;
	}
	
	public JSONObject harvest(int seed_id, Player p) {
		int n = p.getQuantity(seed_id);
		int yield = Player.randomInt(10);
		p.setQuantity(seed_id, n + yield);
		this.crops.remove(seed_id);
		updateNeighbors(p, 0);
		return Message.EVENT_RESULT(p, "inventory", Arrays.asList(seed_id));
	}
	
	public void decGrowthStage(int i) {
		for (HashMap.Entry<Integer, Integer> entry : crops.entrySet()) {
			int key = entry.getKey();
			int n = entry.getValue();
			crops.put(key, n-1);
			if (n-1 == 0) {
				updateNeighbors(null, 0);
			}
		}
	}
	
	public static void main(String[] args){
		
	}
}