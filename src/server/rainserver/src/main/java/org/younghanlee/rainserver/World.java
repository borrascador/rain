package org.younghanlee.rainserver;
import java.util.HashMap;
import java.util.HashSet;
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
	private static HashMap<Integer, Item> items;
	private static HashMap<Integer, Member> members;
	
	private static int mapWidth;
	private static int mapHeight;
	private static int numTiles;
	private static Tile[] map;
	
	private static int itemID;
	private static int memberID;
	
	World() {
		
		// Read map.json
		JSONObject m = null;
		try {
			m = new JSONObject(new String(Files.readAllBytes(Paths.get("map.json"))));
		} catch (IOException e) {
			System.out.println("Map file "+ "map.json" + " not found.");
			System.exit(1);
		}
		
		// Read items.json
		JSONArray itemList = null;
		try {
			itemList = new JSONArray(new String(Files.readAllBytes(Paths.get("items.json"))));
		} catch (IOException e) {
			System.out.println("Map file "+ "map.json" + " not found.");
			System.exit(1);
		}
		
		// All users, online or offline
		players = new HashMap<String, Player>();
		emails = new HashMap<String, String>();
		
		// Item and party member registry
		items = new HashMap<Integer, Item>();
		members = new HashMap<Integer, Member>();
		
		// indexing
		itemID = 0;
		memberID = 0;
		
		numPlayers = 0;
		online = 0;
		
		JSONObject itemObject;
		for (int i = 0; i < itemList.length(); i++) {
			itemObject = itemList.getJSONObject(i);
			Item it = new Item(itemObject.getString("name"));
			JSONArray tags = itemObject.getJSONArray("tags");
			for (int j = 0; j < tags.length(); j++) {
				 it.addTag(tags.getString(j));
			}
			addItem(it);
		}
		
		// Map dimensions
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
	
	public static void addItem(Item i) {
		items.put(itemID, i);
		itemID++;
	}
	
	public static int addMember(Member m) {
		members.put(memberID, m);
		memberID++;
		return memberID - 1;
	}
	
	public static Item getItem(int id) {
		return items.get(id);
	}
	
	public static Member getMember(int id) {
		return members.get(id);
	}
	
	public static int numItems() {
		return itemID;
	}
	
	public static HashSet<Integer> itemByTag(String tag) {
		HashSet<Integer> hs = new HashSet<Integer>();
		for (int id: items.keySet()) {
			if (items.get(id).hasTag(tag)) {
				hs.add(id);
			}
		}
		return hs;
	}
	
	public static void dump() {
		System.out.println("REGISTERED USERS:" + numPlayers);
		System.out.println("PLAYERS ONLINE:" + online);

		// List all players (Including)
		for (Player p : players.values()) {
		    System.out.println(p.toString());
		}
		
		// List all tiles containing players
		System.out.println("OCCUPIED TILES:");
		for (int i=0; i<numTiles; i++) {
			Tile t = map[i];
			if (t.occupied()) {
				System.out.println("  " + i + " " + t.getVisitors().toString());
			}
		}
		
		System.out.println();
	}
	
	public static Player getPlayer(String name) {
		if (players.containsKey(name)) {
			return players.get(name);
		} else return null;
	}
	
	public static HashMap<String, Player> getPlayers(){
		return players;
	}
	
	public static void plantGrowth() {
		for (int i=0; i<numTiles; i++) {
			World.getTile(i).decGrowthStage(1);
		}
	}
	
	public static JSONObject addPlayer(String user, String email, String player_class) {
		
		// Check if username is taken
		if (players.containsKey(user)) {
			return Message.ERROR(106, "username "+ user + "taken");
		} 

		// Check if email is taken
		if (emails.containsKey(email)) {
			return Message.ERROR(108, "email " + email + " taken");
		} 
		// Otherwise add player
		else {

			players.put(user, new Player(user, email));
			emails.put(email, user);
			numPlayers++;
			return Message.REGISTER_RESPONSE();

		}
	}
	
	public static void main(String[] args) {
	}
}
