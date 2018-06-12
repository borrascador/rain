package org.younghanlee.rainserver;
import java.util.HashMap;
import java.util.Iterator;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.json.JSONArray;
import org.json.JSONObject;

public class World {
	private static int numPlayers;
	private static int online;
	
	private static HashMap<String, Player> players;
	
	private static int mapWidth;
	private static int mapHeight;
	private static int numTiles;
	private static Tile[] map;
	
	World() {
		JSONArray a = null;
		try {
			a = new JSONArray(new String(Files.readAllBytes(Paths.get("tiles.json"))));
		} catch (IOException e) {
			System.out.println("Map file "+ "tiles.json" + " not found.");
			System.exit(1);
		}
		
		players = new HashMap<String, Player>();
		numPlayers = 0;
		online = 0;
		mapWidth = Constants.MAPWIDTH;
		mapHeight = Constants.MAPHEIGHT;
		numTiles = mapWidth * mapHeight;
		
		map = new Tile[numTiles];
		for (int i=0; i< a.length(); i++) {
			JSONObject jo = a.getJSONObject(i);
			map[i] = new Tile(jo);
		}
	}
	
	public static Tile getTile(int id) {
		return map[id];
	}
	
	public static void onlineInc() {
		online++;
	}
	
	public static void onlineDec() {
		online--;
	}
	
	public static void dump() {
		System.out.println("Registered users:" + numPlayers);
		System.out.println("Players online:" + online);

		
		for (Player p : players.values()) {
		    System.out.println(p.toString());
		}
		
		System.out.println();
	}
	
	public static Player getPlayer(String name) {
		return players.get(name);
	}
	
	public static void addPlayer(String name, String player_class) {
		for (int i=0; i<Constants.PLAYER_CLASSES.length; i++) {
			if (player_class.equals(Constants.PLAYER_CLASSES[i])){
				players.put(name, new Player(name, player_class));
				numPlayers++;
				return;
			}
		}
	}
	
	public static void main(String[] args) {
	}
}
