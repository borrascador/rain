package org.younghanlee.rainserver;

public class World {
	private static int numPlayers;
	private static int online;
	
	private static Player[] players;
	
	private static int mapWidth;
	private static int mapHeight;
	private static int numTiles;
	private static Tile[] map;
	
	World() {
		players = new Player[Constants.MAX_PLAYERS];
		numPlayers = 0;
		online = 0;
		mapWidth = 20;
		mapHeight = 20;
		numTiles = mapWidth * mapHeight;
		for (int i=0; i<numTiles; i++) {
			map[i] = new Tile(i, mapWidth);
		}
	}
	
	public static void dump() {
		System.out.println("Registered users:" + numPlayers);
		System.out.println("Players online:" + online);

		
		for (int i = 0; i<numPlayers; i++) {
			System.out.println(players[i].toString());
		}
		System.out.println();
	}
	
	public static void addPlayer(String name, String player_class) {
		for (int i=0; i<Constants.PLAYER_CLASSES.length; i++) {
			if (player_class.equals(Constants.PLAYER_CLASSES[i])){
				players[numPlayers] = new Player(name, player_class);
				numPlayers++;
				online++;
				return;
			}
		}
	}
	
	public static void main(String[] args) {
	}
}
