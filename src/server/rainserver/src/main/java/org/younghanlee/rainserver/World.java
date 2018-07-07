package org.younghanlee.rainserver;
import java.util.HashMap;
import java.util.Iterator;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;

import org.java_websocket.WebSocket;
import org.json.JSONArray;
import org.json.JSONObject;

public class World {
	private static int numPlayers;
	private static int online;
	
	private static HashMap<String, Player> players;
	private static HashMap<String, String> emails;
	
	private static int mapWidth;
	private static int mapHeight;
	private static int numTiles;
	private static Tile[] map;
	
	World() {
		JSONObject m = null;
		try {
			m = new JSONObject(new String(Files.readAllBytes(Paths.get("map.json"))));
		} catch (IOException e) {
			System.out.println("Map file "+ "map.json" + " not found.");
			System.exit(1);
		}
		
		players = new HashMap<String, Player>();
		emails = new HashMap<String, String>();
		
		numPlayers = 0;
		online = 0;
		mapWidth = Constants.MAPWIDTH;
		mapHeight = Constants.MAPHEIGHT;
		numTiles = mapWidth * mapHeight;
		
		// Initialize tiles without layers
		map = new Tile[numTiles];
		for (int i=0; i<numTiles; i++) {
			map[i] = new Tile(i);
		}
		
		// Add layers
		JSONArray layers = m.getJSONArray("layers");
		for (int i=0; i< layers.length(); i++) {
			JSONObject layer = layers.getJSONObject(i);
			JSONArray data = layer.getJSONArray("data");
			String layerName = layer.getString("name");
			if (layer.getBoolean("visible")) {
				// Add layer
				for (int j=0; j<data.length(); j++) {
					int value = data.getInt(j);
					if (value != 0) {
						map[j].addLayer(layerName, value); 
					}
				}
			} else {
				// Add event
				for (int j=0; j<data.length(); j++) {
					int value = data.getInt(j);
					if (value != 0) {
						map[j].addEvent(layerName, value); 
					}
				}
			}
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
	
	public static JSONObject addPlayer(String user, String email, String player_class) {
		
		// Check if username is taken
		if (players.containsKey(user)) {
			return Message.REGISTER_ERROR("0001");
		} 

		// Check if email is taken
		if (emails.containsKey(email)) {
			return Message.REGISTER_ERROR("0002");
		} 
		// Otherwise add player
		else {
			for (int i=0; i<Constants.PLAYER_CLASSES.length; i++) {
				if (player_class.equals(Constants.PLAYER_CLASSES[i])){
					players.put(user, new Player(user, email, player_class));
					emails.put(email, user);
					numPlayers++;
					return Message.REGISTER_RESPONSE();
				}
			}
			return Message.REGISTER_ERROR("0000");
		}
	}
	
	public static void main(String[] args) {
	}
}
