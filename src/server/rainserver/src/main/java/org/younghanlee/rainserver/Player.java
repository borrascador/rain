package org.younghanlee.rainserver;

import java.util.*;

import org.java_websocket.WebSocket;
import org.json.JSONArray;
import org.json.JSONObject;

public class Player {
	
	private String name;
	private String email;
	private String player_class;
	private boolean online;
	private int position;
	private int x;
	private int y;
	
	private int sight;
	private HashSet<Integer> tilesSeen;
	
	private HashMap<Integer, Member> party;
	private HashMap<Integer, Integer> backpack;
	
	private HashSet<Integer> buffer;
	
	public static int randomInt(int max) {
		return (int)(Math.random() * (max + 1));
	}

	
	public Player(String name, String email, String player_class) {
		this.name = name;
		this.player_class = player_class;
		this.sight = 2;
		
		// Player is offline upon registration. Call Login afterwards
		this.online = false;
		
		this.x = randomInt(Constants.MAPWIDTH/2);
		this.y = randomInt(Constants.MAPHEIGHT - 1);
		this.position = Constants.MAPWIDTH * y + x;	
		Tile t = World.getTile(position);
		t.addVisitor(name);
		this.tilesSeen = t.inSight(sight);	
		
		this.party = new HashMap<Integer, Member>();		
		
		this.backpack = new HashMap<Integer, Integer>();
		
		this.buffer = new HashSet<Integer>();
	}
	
	public void login(Connection connection) {
		this.online = true;
		World.onlineInc();
		connection.setPlayer(this);
		Tile t = World.getTile(position);
		t.addVisitor(this.name);
		t.updateNeighbors(this, Constants.MAXSIGHT);
	}
	
	public JSONObject logoff(Connection connection) {
		this.online = false;
		World.onlineDec();
		Tile t = World.getTile(position);
		t.removeVisitor(this.name);
		t.updateNeighbors(this, Constants.MAXSIGHT);
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
			this.x = x;
			this.y = y;
			
			// Remove this player from source tile
			Tile source = World.getTile(position);
			source.removeVisitor(this.name);
			
			// Tell players you are leaving range
			source.updateNeighbors(this, Constants.MAXSIGHT);
			
			// Add it to destination tile
			this.position = destination;	
			Tile dest = World.getTile(destination);
			dest.addVisitor(this.name);
			
			this.tilesSeen.addAll(dest.inSight(sight));
			
			// Tell players you are in range
			dest.updateNeighbors(this, Constants.MAXSIGHT);
			
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
	
	public JSONArray partyToJSONArray() {
		JSONArray ja = new JSONArray();
		for (Member m: party.values()) {
			ja.put(m.toJSONObject());
		}
		return ja;
	}
	
	
	public String toString() {
		return "NAME:" + name + "   CLASS:" + player_class + "   ONLINE:" + online + "   POSITION:"  + position;
	}
	
	public static void main(String[] args) {
		
	}
}