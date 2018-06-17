package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

public class Tile {
	// Position
	private int id;
	private int x;
	private int y;
	
	// Layers
	private int base;
	private int middle;
	private int top;
	
	private Player owner;
	private Player[] visitors;
	
	public Tile(JSONObject jo) {
		this.id = jo.getInt("id");
		this.x = jo.getInt("x");
		this.y = jo.getInt("y");
		this.visitors = new Player[0];
		
		JSONObject layers = jo.getJSONObject("layers");
		if (layers.has("base")) {
			this.base = layers.getInt("base");
		}
		if (layers.has("middle")) {
			this.middle = layers.getInt("middle");
		}
		if (layers.has("top")) {
			this.top = layers.getInt("top");
		}
		
	}
	
	public JSONObject toJSONObject() {
		JSONObject jo = new JSONObject();
		jo.accumulate("id", id);
		jo.accumulate("x", x);
		jo.accumulate("y", y);
		
		JSONObject layers = new JSONObject();
		layers.accumulate("base", base);
		layers.accumulate("middle", middle);
		layers.accumulate("top", top);
		jo.accumulate("layers", layers);
		
		jo.accumulate("visitors", visitors);
		
		return jo;
	}
	
	public int getID(int x, int y) {
		return x * Constants.MAPWIDTH + y;
	}
	
	public JSONArray inSight(int sight) {
		JSONArray tiles = new JSONArray();
		System.out.println("Center:" + x + "," + y);
		
		int ymin = y - sight;
		int ymax = y + sight;
		if (ymin < 0) {
			ymin = 0;
		}
		if (ymax > Constants.MAPHEIGHT) {
			ymax = Constants.MAPHEIGHT;
		}
		
		for (int i = ymin; i<= ymax; i++) {
			int yabs = Math.abs(i-y);
			
			int xmin = x-(sight-yabs);
			int xmax = x + sight - yabs;
			if (xmin < 0) {
				xmin = 0;
			}
			if (xmax > Constants.MAPWIDTH) {
				xmax = Constants.MAPWIDTH;
			}
			for (int j = xmin; j <= xmax; j++) {
				System.out.println(i + "," + j);
				Tile t = World.getTile(getID(i,j));
				tiles.put(t.toJSONObject());
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