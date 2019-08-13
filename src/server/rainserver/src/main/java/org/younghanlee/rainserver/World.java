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
	private static HashMap<Integer, Party> parties;
	
	private static int mapWidth;
	private static int mapHeight;
	private static int numTiles;
	private static int tileSize;
	private static Tile[] map;
	
	private static int memberID;
	private static int partyID;
	
	public World() {
		
		// Read map.json
		JSONObject m = null;
		JSONArray tilesArray = null;
		try {
			m = new JSONObject(new String(Files.readAllBytes(Paths.get("map/map.json"))));
		} catch (IOException e) {
			System.out.println("Map file "+ "map.json" + " not found.");
			System.exit(1);
		}
		
		mapWidth = m.getInt("height");
		mapHeight = m.getInt("width");
		tileSize = m.getInt("tileSize");
		tilesArray = m.getJSONArray("tiles");
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
		
		parties = new HashMap<Integer, Party>();
		
		Decision.createDecisionHashMap();
		new RandomEvents();
		
		FindItem.addAll();
		Skeleton.addAll();
		AnimalEncounter.addAll();
		
		System.out.println("Added all choices");

		
		// indexing
		memberID = 0;
		partyID = 0;
		
		numPlayers = 0;
		online = 0;
		
		map = new Tile[numTiles];
		for (int i=0; i<numTiles; i++) {
			map[i] = new Tile(tilesArray.getJSONObject(i));
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
	
	public static int getMapSize() {
		return numTiles;
	}
	
	public static int getTileSize() {
		return tileSize;
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
	
	public static int createParty(Party p) {
		parties.put(partyID,  p);
		partyID++;
		return partyID - 1;
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
	
	public static Party getParty(int id) {
		return parties.get(id);
	}
	
	public static void dump() {
		System.out.println("REGISTERED USERS:" + numPlayers);
		System.out.println("PLAYERS ONLINE:" + online);

		// List all players (Including)
		for (Player p : players.values()) {
		    System.out.println(p.toString());
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
	
	public static synchronized JSONObject addPlayer(String user, String email, String password) {
		
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
