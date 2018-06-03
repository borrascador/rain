package org.younghanlee.rainserver;
public class Player {
	
	private String name;
	private String player_class;
	private boolean online;
	private int position;
	
	public int randomInt(int max) {
		return (int)(Math.random() * (max + 1));
	}
	
	public Player(String name, String player_class) {
		this.name = name;
		this.player_class = player_class;
		this.online = true;
		int x = randomInt(Constants.MAPWIDTH/2);
		int y = randomInt(Constants.MAPHEIGHT - 1);
		this.position = Constants.MAPWIDTH * y + x;	
	}
	
	public void move(int newTile) {
		
	}
	
	public String toString() {
		return name + " " + player_class + " " + online + " "  + position;
	}
	
	public static void main(String[] args) {
		
	}
}