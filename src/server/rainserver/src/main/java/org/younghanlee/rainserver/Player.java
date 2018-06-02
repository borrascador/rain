package org.younghanlee.rainserver;
public class Player {
	
	private String name;
	private String player_class;
	private boolean online;
	private Tile tile;
	
	public Player(String name, String player_class) {
		this.name = name;
		this.player_class = player_class;
		this.online = true;
	}
	
	public void move(int newTile) {
		
	}
	
	public String toString() {
		return name + " " + player_class + " " + online;
	}
	
	public static void main(String[] args) {
		
	}
}