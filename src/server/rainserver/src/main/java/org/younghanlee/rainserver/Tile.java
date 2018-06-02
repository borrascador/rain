package org.younghanlee.rainserver;

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
	
	public void claim(Player p) {
		
	}
	
	// Return whether or not move is allowed
	public boolean legalMove (int newTile) {
		return true; 
	}
	
	public static void main(String[] args){
		
	}
}