package org.younghanlee.rainserver;

import java.util.ArrayList;
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
	
	private Player owner;
	private HashSet<String> visitors;
	
	public Tile(int id) {
		this.id = id;
		this.x = id % Constants.MAPWIDTH;
		this.y = (id - x)/Constants.MAPWIDTH;
		this.layers = new HashMap<String, Integer>();
		this.events = new HashMap<String, Integer>();
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
		
		jo.accumulate("visitors", visitors);
		
		return jo;
	}
	
	public int getID(int x, int y) {
		return x * Constants.MAPWIDTH + y;
	}
	
	public HashSet<Integer> inSight(int sight) {
		HashSet<Integer> tiles = new HashSet<Integer>();
		System.out.println("Center:" + x + "," + y);
		
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
				System.out.println(i + "," + j);
				tiles.add(getID(i,j));
			}
		}
		return tiles;
	}
	
	// Return whether or not move is allowed
	public boolean legalMove (int newTile, int range) {
		return true; 
	}
	
	public static void main(String[] args){
		
	}
}