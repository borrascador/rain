package org.younghanlee.rainserver;
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
	
	public Tile(int id, int mapWidth) {
		this.id = id;
		this.x = id % mapWidth;
		this.y = (id - x)/mapWidth;
		this.visitors = new Player[0];
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