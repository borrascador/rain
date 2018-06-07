package org.younghanlee.rainserver;

import org.java_websocket.WebSocket;

public class Player {
	
	private String name;
	private String player_class;
	private boolean online;
	private int position;
	private WebSocket connection;
	
	public int randomInt(int max) {
		return (int)(Math.random() * (max + 1));
	}
	
	public Player(String name, String player_class) {
		this.name = name;
		this.player_class = player_class;
		
		// Player is offline upon registration. Call Login afterwards
		this.online = false;
		
		int x = randomInt(Constants.MAPWIDTH/2);
		int y = randomInt(Constants.MAPHEIGHT - 1);
		this.position = Constants.MAPWIDTH * y + x;	
	}
	
	public void login(WebSocket connection) {
		this.online = true;
		World.onlineInc();
		this.connection = connection;
	}
	
	public void logoff() {
		this.online = false;
		World.onlineDec();
		this.connection = null;
	}
	
	public void move(int newTile) {
		
	}
	
	public String toString() {
		return name + " " + player_class + " " + online + " "  + position;
	}
	
	public static void main(String[] args) {
		
	}
}