package org.younghanlee.rainserver;
import org.younghanlee.rainserver.randomEvents.*;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class World {
	private static int numPlayers;
	private static int online;
	
	private static HashMap<String, Player> players;
	private static HashMap<String, String> emails;
	private static HashMap<Integer, Item> items;
	private static HashMap<Integer, Animal> animals;
	private static HashMap<Integer, Member> members;
	private static HashMap<Integer, Habitat> habitats;
	private static HashMap<Integer, Skill> skills;
	private static HashMap<Integer, Tribe> tribes;
	
	private static int mapWidth;
	private static int mapHeight;
	private static int numTiles;
	private static Tile[] map;
	
	private static int memberID;
	
	public World() {
		
		// Read map.json
		JSONObject m = null;
		try {
			m = new JSONObject(new String(Files.readAllBytes(Paths.get("json/map.json"))));
		} catch (IOException e) {
			System.out.println("Map file "+ "map.json" + " not found.");
			System.exit(1);
		}
		
		mapWidth = m.getInt("height");
		mapHeight = m.getInt("width");
		numTiles = mapWidth * mapHeight;
		
		// All users, online or offline
		players = new HashMap<String, Player>();
		emails = new HashMap<String, String>();
		
		items = Item.readFile();
		members = new HashMap<Integer, Member>();
		animals = Animal.readFile();
		habitats = Habitat.readFile();
		skills = Skill.readFile();
		tribes = Tribe.readFile();
			
		System.out.println("Finished reading json files");
		
		Decision.createDecisionHashMap();
		new RandomEvents();
		
		FindItem.addAll();
		Skeleton.addAll();
		AnimalEncounter.addAll();
		
		System.out.println("Added all choices");

		
		// indexing
		memberID = 0;
		
		numPlayers = 0;
		online = 0;
		
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
				// Add habitat
				for (int j=0; j<data.length(); j++) {
					int value = data.getInt(j);
					if (value != 0) {
						map[j].addHabitat(layerName, value - 76); 
					}
				}
			}
		}
	}
	
	public static Tile getTile(int id) {
		return map[id];
	}
	
	public static Tile[] getMap() {
		return map;
	}
	
	public static int getHeight() {
		return mapHeight;
	}
	
	public static int getWidth() {
		return mapWidth;
	}
	
	public static void onlineInc() {
		online++;
	}
	
	public static void onlineDec() {
		online--;
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
		return items.size();
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
	
	public static Animal getAnimal(int id) {
		return animals.get(id);
	}
	
	public static Habitat getHabitat(int id) {
		return habitats.get(id);
	}
	
	public static Skill getSkill(int id) {
		return skills.get(id);
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
				System.out.println("  " + i + " " + t.getVisitors(null).size());
			}
		}
		
		System.out.println();
	}
	
	public static Player getPlayer(String name) {
		if (players.containsKey(name)) {
			return players.get(name);
		} else return null;
	}
	
	public static Tribe getTribe(int id) {
		return tribes.get(id);
	}
	
	public static int numTribes() {
		return tribes.size();
	}
	
	public static HashMap<String, Player> getPlayers(){
		return players;
	}
	
	public static void plantGrowth() {
		for (int i=0; i<numTiles; i++) {
			World.getTile(i).decGrowthStage(1);
		}
	}
	
	public static JSONObject addPlayer(String user, String email, String password) {
		
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

			players.put(user, new Player(user, email, password));
			emails.put(email, user);
			numPlayers++;
			return Message.REGISTER_RESPONSE();

		}
	}
	
	public static void main(String[] args) {
	}
}
