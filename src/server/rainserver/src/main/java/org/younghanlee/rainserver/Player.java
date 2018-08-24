package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Player {
	
	private String name;
	private String email;
	private String passwordHash;
	private String passwordSalt;
	
	private boolean online;
	private int position;
	private int x;
	private int y;
	
	private int pace;
	private int speed;
	private int rations;
	
	private int sight;
	private HashSet<Integer> tilesSeen;
	
	private HashSet<Integer> party;
	private HashMap<Integer, Integer> backpack;
	
	private Animal hunting;
	private Decision decision;
	
	private HashSet<Integer> buffer;
	
	public static int randomInt(int max) {
		return (int)(Math.random() * (max + 1));
	}

	
	public Player(String name, String email, String password) {
		this.name = name;
		this.passwordSalt = Password.generateSalt();
		this.passwordHash = Password.multiHash(password, passwordSalt);
		
		this.sight = 2;
		
		// Player is offline upon registration. Call Login afterwards
		this.online = false;
		
		this.x = randomInt(Constants.MAPWIDTH/2);
		this.y = randomInt(Constants.MAPHEIGHT - 1);
		this.position = Constants.MAPWIDTH * y + x;	
		Tile t = World.getTile(position);
		this.tilesSeen = t.inSight(sight);	
		
		this.party = new HashSet<Integer>();	
		addMember("test", Player.randomInt(3));
		
		this.backpack = new HashMap<Integer, Integer>();
		// Give stick
		setQuantity(10, 1);
		// Give potatos
		setQuantity(2, 100);
		// Give beans
		setQuantity(8, 100);
		// Give tomato seeds
		setQuantity(1, 100);
		
		
		this.decision = null;
		
		this.buffer = new HashSet<Integer>();
	}
	
	public String getHash() {
		return passwordHash;
	}
	
	public String getSalt() {
		return passwordSalt;
	}
	
	public void login(Connection connection) {
		this.online = true;
		World.onlineInc();
		connection.setPlayer(this);
		Tile t = World.getTile(position);
		t.addVisitor(this.name);
		t.updateNeighbors(this.name, Constants.MAXSIGHT);
	}
	
	public JSONObject logoff(Connection connection) {
		this.online = false;
		World.onlineDec();
		Tile t = World.getTile(position);
		t.removeVisitor(this.name);
		t.updateNeighbors(this.name, Constants.MAXSIGHT);
		stopHunting();
		decision = null;
		connection.setPlayer(null);
		return Message.LOGOUT_RESPONSE();
	}
	
	public void addToBuffer(int n) {
		buffer.add(n);
	}
	
	public void flushBuffer(Connection connection) {
		if (!buffer.isEmpty()) {
			JSONArray tiles = new JSONArray();
			// Copy buffer
			ArrayList<Integer> list = new ArrayList<Integer>(buffer);
			
			for (Integer i: list) {
				buffer.remove(i);
				tiles.put(World.getTile(i).toJSONObject());
			}
			System.out.println(Message.TILE_UPDATE(tiles).toString());
			connection.send(Message.TILE_UPDATE(tiles).toString());
		}
		return;
	}
	
	public boolean legalMove(int range, int x, int y) {
		boolean xl = x >= 0;
		boolean xu = x < Constants.MAPWIDTH;
		boolean yl = y >= 0;
		boolean yu = x < Constants.MAPHEIGHT;
		int dist = Math.abs(this.x - x) + Math.abs(this.y - y);
		return xl && xu && yl && yu && dist <= range && dist > 0;
	}
	
	public boolean move(int range, int destination) {
		int x = destination % Constants.MAPWIDTH;
		int y = (destination - x)/Constants.MAPWIDTH;
		if (legalMove(range, x, y)) {
			System.out.println("Legal Move");
			this.x = x;
			this.y = y;
			
			// Remove this player from source tile
			Tile source = World.getTile(position);
			source.removeVisitor(this.name);
			
			// Tell players you are leaving range
			source.updateNeighbors(this.name, Constants.MAXSIGHT);
			
			// Add it to destination tile
			this.position = destination;	
			Tile dest = World.getTile(destination);
			dest.addVisitor(this.name);
			
			this.tilesSeen.addAll(dest.inSight(sight));
			
			// Tell players you are in range
			dest.updateNeighbors(this.name, Constants.MAXSIGHT);
			
			return true;
		} else return false;
	}
	
	public boolean isOnline() {
		return online;
	}
	
	public String getName() {
		return name;
	}
	
	public int getPosition() {
		return position;
	}
	
	public int getSight() {
		return sight;
	}
	
	public int getPace() {
		return pace;
	}
	public void setPace(int n) {
		pace = n;
	}
	
	public int getRations() {
		return rations;
	}
	public void setRations(int n) {
		rations = n;
	}
	
	public Animal getHunting() {
		return hunting;
	}
	
	public String stopHunting() {
		if (hunting != null) {
			String name = hunting.getName();
		}
		hunting = null;
		return name;
	}

	
	public Animal hunt(int item_id) {
		hunting = World.getAnimal();
		decision = new Decision(this, 2);
		decision.addAttackChoice(0);
		decision.addEscapeChoice(1);
		return hunting;
	}
	
	public int fish (int item_id) {
		System.out.println("test");
		int depth = World.getTile(position).getDepth();
		decision = new Decision(this, 2);
		decision.addFishDeepChoice(0);
		decision.addFishShallowChoice(1);
		System.out.println("test");
		return depth;
	}
	
	public Decision getDecision() {
		return decision;
	}
	
	public JSONArray tilesSeenArray() {
		JSONArray ja = new JSONArray();
		for (int ts: tilesSeen) {
			ja.put(World.getTile(ts).toJSONObject());
		}
		return ja;
	}
	
	public JSONArray inSightArray() {
		JSONArray ja = new JSONArray();
		for (int ts: World.getTile(position).inSight(sight)) {
			ja.put(World.getTile(ts).toJSONObject());
		}
		return ja;
	}
	
	public void setQuantity(int itemID, int quantity) {
		if (quantity > 0) {
			backpack.put(itemID, quantity);
		} else {
			backpack.remove(itemID);
		}
	}
	
	public int getQuantity(int itemID) {
		if (backpack.containsKey(itemID)){
			return backpack.get(itemID);
		} else return 0;
	}
	
	public JSONArray backpackToJSONArray() {
		JSONArray ja = new JSONArray();
		for (int i: backpack.keySet()) {
			Item item = World.getItem(i);
			ja.put(item.toJSONObject(i, backpack.get(i)));
		}
		return ja;
	}
	
	public void addMember(String name, int icon) {
		Member m = new Member(name, icon);
		int id = World.addMember(m);
		party.add(id);
	}
	
	public JSONArray partyToJSONArray() {
		JSONArray ja = new JSONArray();
		for (int id: party) {
			ja.put(World.getMember(id).toJSONObject(id));
		}
		return ja;
	}
	
	
	public String toString() {
		return "NAME:" + name + "   ONLINE:" + online + "   POSITION:"  + position;
	}
	
	public static void main(String[] args) {
		
	}
}