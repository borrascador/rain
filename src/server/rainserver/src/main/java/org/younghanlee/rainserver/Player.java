package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Player {
	
	private Connection connection;
	
	private String name;
	private String email;
	private String passwordHash;
	private String passwordSalt;
	
	private boolean online;
	private Integer tribe; 
	
	private int pace;
	private int speed;
	private int rations;
	
	private int sight;
	private ArrayList<Integer> tilesSeen; // Tiles to send upon login
	
	private Integer party; 
	private Integer member;
	private Inventory inventory; // item id, position in inventory 
	private Boolean hunting;
	private Decision decision;
	
	private IRandomEvent randomEvent;
	private boolean randomEventFlag;
	private String trigger;
	private HashMap<String, Object> eventArgs;
	
	private HashSet<Integer> buffer; // Which tiles require updates sent in next tick
	
	public Player(String name, String email, String password) {
		this.name = name;
		this.passwordSalt = Password.generateSalt();
		this.passwordHash = Password.multiHash(password, passwordSalt);
		
		sight = 1;
		member = null;
		tribe = null;
		
		// Player is offline upon registration. Call Login afterwards
		online = false;
		
		// Empty data structures
		tilesSeen = new ArrayList<Integer>();
		party = null;
		
		inventory = new Inventory(this);
		
		pace = 0;
		speed = 4;
		rations = 1;
		
		hunting = false;
		randomEvent = null;
		randomEventFlag = false;
		
		// First decision is choose tribe. Create and attach this decision to this player.
		String [] choiceNames = new String[2];
		choiceNames[0] = "newParty";
		choiceNames[1] = "joinParty";
		String story = "Welcome to RainForest Trail";
		Decision d = new Decision(choiceNames, story, this);
		this.decision = d;


		this.buffer = new HashSet<Integer>();
		eventArgs = new HashMap<String, Object>();
	}
	
	public String getHash() {
		return passwordHash;
	}
	
	public String getSalt() {
		return passwordSalt;
	}
	
	public synchronized boolean login(Connection connection) {
		if (!this.online) {
			this.online = true;
			this.connection = connection;
			World.onlineInc();
			connection.setPlayer(this);
			if (party != null) {
				World.getParty(party).login(member);
			}
			return true;
		}
		else return false;
	}
	
	public JSONObject logoff(Connection connection) {
		this.online = false;
		this.connection = null;
		World.onlineDec();
		// Tile t = World.getTile(position);
		//t.removeVisitor(this);
		// t.updateNeighbors(this, 1);
		inventory.logoff();
		World.getParty(party).logout(member);
		connection.setPlayer(null);
		return Message.LOGOUT_RESPONSE();
	}
	
	public void send(JSONObject jo) {
		connection.sendJSON(jo);
	}
	
	// When a player logs back in after logging out in the middle of a decision
	public void sendDecision(Connection connection) {
		if (decision == null) {
			return;
		}
		JSONObject payload = new JSONObject();
		JSONObject story = new JSONObject();
		story.put("text", decision.getStoryText());
		story.put("buttons", decision.buttons(this));
		payload.put("story", story);
		connection.sendJSON(Message.UPDATE(payload));
	}
	
	public void addToBuffer(int n) {
		buffer.add(n);
	}
	
	public Inventory getInventory() {
		return inventory;
	}
	
	// Called every tick
	// Return payload to be used in UPDATE message
	public void playerTick(Connection connection, int tick) {
		JSONObject payload = new JSONObject();
		
		// Check tiles buffer
		if (!buffer.isEmpty()) {
			JSONArray tiles = new JSONArray();
			// Copy buffer
			ArrayList<Integer> list = new ArrayList<Integer>(buffer);
			
			for (Integer i: list) {
				buffer.remove(i);
				// tiles.put(World.getTile(i).toJSONObject(this));
			}
			payload.put("tiles", tiles);
		}
		
		// Eat food
//		if (tick % 60 == 0) {
//			ArrayList<Integer> copy = new ArrayList<Integer>();
//			for (Integer i: eating) {
//				copy.add(new Integer(i));
//			}
//			JSONArray inventory = eat(copy);
//			if (inventory.length() > 0) {
//				payload.put("inventory", inventory);
//			} 
//			if (copy.size() > eating.size()) {
//				JSONObject story = new JSONObject();
//				String message = "";
//				// Find out which food ran out and remove from eating
//				for (int i: copy) {
//					if (!eating.contains(i)) {
//						message += "You don't have enough " + World.getItem(i).getName() + " left to eat. ";
//					}
//				}
//				payload.put("eating", eatingToJSONArray());
//				story.put("text", message);
//				payload.put("story", story);
//			}
//		}
		
//		JSONArray partyArray = regen(tick);
//		if (partyArray.length() > 0) {
//			payload.put("party", partyArray);
//		}
		
		if (payload.length() > 0) {
			connection.sendJSON(Message.UPDATE(payload));
		}
		
//		if (randomEventFlag) {
//			randomEventFlag = false;
//			switch (trigger) {
//				case "move":
//					if (move != null) {
//						JSONObject result = randomEvent.result(this);
//						result.put("pace", 0);
//						stopMoving();
//						connection.sendJSON(Message.UPDATE(result));
//					}
//					break;
//					
//				case "hunting":
//					if (hunting && move != null) {
//						JSONObject result = randomEvent.result(this);
//						if (result != null) {
//							connection.sendJSON(Message.UPDATE(result));
//						}
//					}
//					break;
//					
//				default:
//					connection.sendJSON(Message.UPDATE(randomEvent.result(this)));
//					break;
//			}
//			randomEvent = null;
//		}
//		return;
	}
	
	public Integer getMember() {
		return member;
	}
	
	public void setMember(int m) {
		this.member = m;
		World.getMember(m).setName(this.name);
	}
	
	public Party getParty() {
		return World.getParty(party);
	}
	
	public void setParty(int p) {
		this.party = p;
	}
	
	public ArrayList<Integer> getPartyMembers() {
		if (party != null) {
			return World.getParty(party).getPartyMembers();
		} else {
			return new ArrayList<Integer>();
		}
	}
	
	// Are any members moving?
	public boolean hasMove() {
		for (int id : getPartyMembers()) {
			Member m = World.getMember(id);
			if (m.getMove() != null) {
				return true;
			}
		}
		return false;
	}
	
	public void playerMoveTick(Connection connection, int moveTick) {	
		// If player has a target, move towards it
		if (hasMove()) {
			JSONArray updates = new JSONArray();
			for (int id : getPartyMembers()) {
				Member m = World.getMember(id);
				Move move = m.getMove();
				if (move != null) {
					JSONObject moveResult = move.tick(m);
					if (moveResult != null) {
						moveResult.put("id", id);
						updates.put(moveResult);
					}
				}
			}
			// Check if moves actually happened or waiting on this tick
			if (updates.length() > 0) {
				JSONObject payload = new JSONObject();
				payload.put("party", updates);
				connection.sendJSON(Message.UPDATE(payload));
			}
			System.out.println("moveTick:" + moveTick);
		}
	}
	
	public void setEventArg(String key, Object value) {
		eventArgs.put(key, value);
	}
	
	public Object getEventArg(String key) {
		return eventArgs.get(key);
	}
	
//	public void setPosition(int position) { // Also edit tile visitors appropriately
//		if (this.position != null) {
//			// World.getTile(this.position).removeVisitor(this);
//		}
//		this.position = position;
//		// World.getTile(position).addVisitor(this);
//		
//	}
	
	public boolean isOnline() {
		return online;
	}
	
	public String getName() {
		return name;
	}

	public int getSpeed() {
		return speed;
	}
	
	public JSONObject respawn() {
		JSONObject payload = new JSONObject();
		JSONArray newInventory = new JSONArray();
		payload.put("inventory", newInventory);
		// payload.put("tiles", inSightArray());
		return Message.EVENT_RESPONSE(payload);
	}
	
	public int getSight() {
		return sight;
	}
	
	public void setSight(int sight) {
		this.sight =  sight;
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
	
	public void startHunting() {
		hunting = true;
	}
	
	public void stopHunting() {
		hunting = false;
	}
	
	public void removeDecision() {
		decision = null;
	}
	
	public void setDecision(Decision d) {
		decision = d;
	}
	
	public Decision getDecision() {
		return decision;
	}
	
	public IRandomEvent getRandomEvent() {
		return randomEvent;
	}
	
	public boolean hasRandomEvent() {
		return randomEventFlag;
	}

	public void setRandomEvent(IRandomEvent r) {
		this.randomEvent = r;
		randomEventFlag = true;
	}
	
	public String getTrigger() {
		return trigger;
	}

	public void setTrigger(String trigger) {
		this.trigger = trigger;
	}
	
	public void addTilesSeen(int t) {
		tilesSeen.add(t);
	}
	
	public JSONArray tilesSeenArray() {
		JSONArray ja = new JSONArray();
		for (int ts: tilesSeen) {
			// ja.put(World.getTile(ts).toJSONObject(this));
		}
		return ja;
	}
//	
//	public JSONArray inSightArray() {
//		JSONArray ja = new JSONArray();
//		for (int ts: World.getTile(position).inSight(sight)) {
//			tilesSeen.add(ts);
//			ja.put(World.getTile(ts).toJSONObject(this));
//		}
//		return ja;
//	}
//	

	
	// First add member to global members in World
	// Then add its id to party
	public int addMember(String name, int icon, int x, int y) {
		Member m = new Member(name, icon, x, y);
		int id = World.addMember(m);
		m.setId(id);
		World.getParty(party).addMember(id);
		return id;
	}
	
	public void removeMember(int id) {
		World.getParty(party).removeMember(id);
	}
	
	public int partySize(){
		return World.getParty(party).partySize();
	}
	
	public int getPartyMember(int index) {
		return getPartyMembers().get(index);
	}
	
	public int indexOfPartyMember(int id) {
		return getPartyMembers().indexOf(id);
	}
	
	public JSONArray partyToJSONArray() {
		JSONArray ja = new JSONArray();
		for (int id: getPartyMembers()) {
			ja.put(World.getMember(id).toJSONObject(id, this));
		}
		return ja;
	}
	
//	public int Portion(int id) {
//		return - rations * 6/eating.size();
//	}
//	
//	public JSONArray eat(ArrayList<Integer> copy) {
//		JSONArray changes = new JSONArray();
//		for (Integer id: copy) {
//			JSONObject item = World.getItem(id).change(id, Portion(id), this, false);
//			if (item.getInt("quantity") == 0) {
//				eating.remove(id);
//			}
//			
//			changes.put(item);
//		}
//		return changes;
//	}

	
	public void setTribe(int id) {
		tribe = id;
	}
	
	public Tribe getTribe() {
		return World.getTribe(tribe);
	}
	
	public JSONArray regen(int tick) {
		JSONArray partyArray = new JSONArray();
		for (Integer id: getPartyMembers()) {
			Member m = World.getMember(id);
			int health = m.getHealth();
			if (health < 5) {
				if (tick % m.getRegen() == 0) {
					partyArray.put(m.change(this, 1, 0));
				}
			}
		}
		return partyArray;
	}
	
	
	public String toString() {
		return "NAME:" + name + "   ONLINE:" + online;
	}
	
	public static void main(String[] args) {
		
	}


}