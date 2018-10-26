package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Collections;
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
	private Integer position; // Which tile
	private int x; // x coordinate within tile
	private int y; // within tile
	private int tribe; 
	
	private int pace;
	private int speed;
	private int rations;
	private HashMap<String, Integer> capacity;
	
	private int sight;
	private ArrayList<Integer> tilesSeen; // Tiles to send upon login
	
	private ArrayList<Integer> party; // id of party members
	private HashMap<Integer, ArrayList<ItemStack>> inventory; // item id, position in inventory 
	private HashMap<String, ArrayList<Boolean>> occupied;
	
	private Move move; // Initialize with move(), stop with stopMoving()
	private Hunt hunt; // Initialize with startHunting(), stop with stopHunting()
	private Decision decision;
	
	private IRandomEvent randomEvent;
	private String trigger;
	
	private HashSet<Integer> buffer; // Which tiles require updates sent in next tick

	
	public Player(String name, String email, String password) {
		this.name = name;
		this.passwordSalt = Password.generateSalt();
		this.passwordHash = Password.multiHash(password, passwordSalt);
		
		sight = 1;
		
		// Player is offline upon registration. Call Login afterwards
		online = false;
		position = null;	
		
		// Empty data structures
		tilesSeen = new ArrayList<Integer>();
		party = new ArrayList<Integer>();	
		inventory = new HashMap<Integer, ArrayList<ItemStack>>();
		// Which backpack slots are occupied
		capacity = new HashMap<String, Integer>();
		capacity.put("PARTY", 0);
		capacity.put("BACKPACK", 20);
		capacity.put("EATING", 3);
		
		occupied = new HashMap<String, ArrayList<Boolean>>();
		occupied.put("BACKPACK", new ArrayList<Boolean>(Collections.nCopies(capacity.get("BACKPACK"), false)));
		occupied.put("PARTY", new ArrayList<Boolean>(Collections.nCopies(capacity.get("PARTY"), false)));
		occupied.put("EATING", new ArrayList<Boolean>(Collections.nCopies(capacity.get("EATING"), false)));
		
		pace = 0;
		speed = 4;
		rations = 1;
		
		hunt = null;
		move = null;
		
		// First decision is choose tribe. Create and attach this decision to this player.
		String [] choiceNames = new String[World.numTribes()];
		for (int i=0; i<World.numTribes(); i++) {
			choiceNames[i] = "selectTribe"+ i;
		}
		String story = "Choose your tribe.";
		Decision d = new Decision(choiceNames, story, this);
		this.decision = d;

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
		if (position != null) { // Check if player has chosen tribe yet
			Tile t = World.getTile(position);
			t.addVisitor(this);
			t.updateNeighbors(this, 1); // Reveal player to everyone in range
		}
	}
	
	public JSONObject logoff(Connection connection) {
		this.online = false;
		World.onlineDec();
		Tile t = World.getTile(position);
		t.removeVisitor(this);
		t.updateNeighbors(this, 1);
		connection.setPlayer(null);
		return Message.LOGOUT_RESPONSE();
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
	
	// Called every tick
	// Return payload to be used in UPDATE message
	public void playerTick(Connection connection, int tick) {
		JSONObject payload = new JSONObject();
		
		// If player has a target, move towards it
		if (move != null) {
			payload = move.tick(this);
		}
		
		// Check tiles buffer
		if (!buffer.isEmpty()) {
			JSONArray tiles = new JSONArray();
			// Copy buffer
			ArrayList<Integer> list = new ArrayList<Integer>(buffer);
			
			for (Integer i: list) {
				buffer.remove(i);
				tiles.put(World.getTile(i).toJSONObject(this));
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
		
		if (randomEvent != null && trigger == null) {
			connection.sendJSON(Message.UPDATE(randomEvent.result(this)));
			randomEvent = null;
		}
		return;
	}
	
	public void setPosition(int position) { // Also edit tile visitors appropriately
		if (this.position != null) {
			World.getTile(this.position).removeVisitor(this);
		}
		this.position = position;
		World.getTile(position).addVisitor(this);
		
	}
	
	public boolean legalMove(int destination, int x, int y) {
		return true;
	}
	
	public boolean move(int destination, int x, int y) {
		if (legalMove(destination, x, y)) {
			move = new Move(destination, x, y, this);
			return true;
		} else return false;
	}
	
	public void stopMoving() {
		move = null;
	}
	
	public boolean isOnline() {
		return online;
	}
	
	public String getName() {
		return name;
	}
	
	public Integer getPosition() {
		return position;
	}
	
	public int getX() {
		return x;
	}
	
	public void setX(int x) {
		this.x = x;
	}
	
	public int getY() {
		return y;
	}
	
	public void setY(int y) {
		this.y = y;
	}
	
	public int getSpeed() {
		return speed;
	}
	
	public JSONObject respawn() {
		Tribe t = World.getTribe(tribe);
		int rp = t.getRespawnPosition();
		setPosition(rp);
		setX(Util.randomInt(31));
		setY(Util.randomInt(32));
		JSONObject payload = new JSONObject();
//		tilesSeen = World.getTile(rp).inSight(sight);
		JSONArray newParty =  t.generateParty(this);
		JSONArray newInventory = t.generateInventory(this);
		payload.put("xCoord", x);
		payload.put("yCoord", y);
		payload.put("position", rp);
		payload.put("party", newParty);
		payload.put("inventory", newInventory);
		payload.put("tiles", inSightArray());
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
		if (move != null) {
			move.setPace(n);
		}
	}
	
	public int getRations() {
		return rations;
	}
	
	public void setRations(int n) {
		rations = n;
	}
	
	public void startHunting(String huntOrFish, int weapon, int habitat_id) {
		hunt = new Hunt(huntOrFish, this, weapon, habitat_id);
	}
	
	public void removeDecision() {
		decision = null;
	}
	
	public String stopHunting() {
		String s =  hunt.huntOrFish();
		hunt = null;
		return s;
	}
	
	public Hunt getHunt(){
		return hunt;
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

	public void setRandomEvent(IRandomEvent r) {
		this.randomEvent = r;
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
			ja.put(World.getTile(ts).toJSONObject(this));
		}
		return ja;
	}
	
	public JSONArray inSightArray() {
		JSONArray ja = new JSONArray();
		for (int ts: World.getTile(position).inSight(sight)) {
			ja.put(World.getTile(ts).toJSONObject(this));
		}
		return ja;
	}
	
	public JSONArray setQuantity(int itemID, int quantity) {
		JSONArray ja = new JSONArray();
		// If quantity is 0 remove all stacks 
		if (quantity <= 0) {
			if (inventory.containsKey(itemID)){
				
				for (int item : inventory.keySet()) {
					for (ItemStack stack : inventory.get(item)) {
						occupied.get(stack.getType()).set(stack.getPosition(), false);
						ja.put(stack.change(0, null, null));
					}
					inventory.remove(item);
				}
			}
			return ja;
		} else {
			int count = getQuantity(itemID);
			int difference = quantity - count;
			if (difference > 0) {
				return add(itemID, difference);
			} else {
				return subtract(itemID, difference, false);
			}
		}
	}
	
	public int getOpenPosition(String type) {
		for (int i=0; i<capacity.get(type); i++) {
			ArrayList<Boolean> slots = occupied.get(type);
			if (!slots.get(i)) {
				return i;
			}
		}
		return -1;
	}
	
	public JSONArray add(int itemID, int quantity) {
		JSONArray ja = new JSONArray();
		int maxStack = World.getItem(itemID).getMaxStack();
		int left = quantity;
		if (inventory.containsKey(itemID)){
			// Top off existing stacks
			for (ItemStack itemstack : inventory.get(itemID)) {
				int stackSize = itemstack.getQuantity();
				if (stackSize < maxStack) {
					int difference = maxStack - stackSize;
					if (difference <= left) {
						ja.put(itemstack.change(stackSize + left, null, null));
						return ja;
					} else {
						left -= difference;
						ja.put(itemstack.change(maxStack, null, null));
					}
				}
			}
		}
		// Create new stacks if necessary
		while (true) {
			int p = getOpenPosition("BACKPACK");
			occupied.get("BACKPACK").set(p, true);
			System.out.println("test");
			if (maxStack >= left) {
				ItemStack stack = new ItemStack(itemID, left, p, "BACKPACK");
				ja.put(stack.toJSONObject());
				return ja;
			} else {
				left -= maxStack;
				ItemStack stack = new ItemStack(itemID, left, p, "BACKPACK");
				ja.put(stack.toJSONObject());
			}
		}
	}
	
	public JSONArray subtract(int itemID, int quantity, boolean requireFull) {
		JSONArray ja = new JSONArray();
		int maxStack = World.getItem(itemID).getMaxStack();
		int left = quantity;
		if (inventory.containsKey(itemID)){
			// Top off existing stacks
			for (ItemStack itemstack : inventory.get(itemID)) {
				int stackSize = itemstack.getQuantity();
				if (stackSize < maxStack) {
					int difference = maxStack - stackSize;
					if (difference <= left) {
						ja.put(itemstack.change(stackSize + left, null, null));
						return ja;
					} else {
						left -= difference;
						ja.put(itemstack.change(maxStack, null, null));
					}
				}
			}
		}
		// Create new stacks if necessary
		while (true) {
			int p = getOpenPosition("BACKPACK");
			occupied.get("BACKPACK").set(p, true);
			if (maxStack <= left) {
				ItemStack stack = new ItemStack(itemID, 0, p, "BACKPACK");
				ja.put(stack.change(left, null, null));
				return ja;
			} else {
				left -= maxStack;
				ItemStack stack = new ItemStack(itemID, 0, p, "BACKPACK");
				ja.put(stack.change(maxStack, null, null));
			}
		}
	}
	
	public int getQuantity(int itemID) {
		if (inventory.containsKey(itemID)){
			int quantity = 0;
			for (ItemStack itemstack : inventory.get(itemID)) {
				quantity += itemstack.getQuantity();
			}
			return quantity;
		} else return 0;
	}
	
	public JSONArray emptyInventory() {
		JSONArray ja = new JSONArray();
		for (String type: occupied.keySet()) {
			for (int i=0; i<capacity.get(type); i++) {
				occupied.get(type).set(i, false);
			}	
		}
		
		for (int item : inventory.keySet()) {
			for (ItemStack stack : inventory.get(item)) {
				ja.put(stack.change(0, null, null));
			}
			inventory.remove(item);
		}
		return ja;
	}
	
	public JSONObject moveStack(int itemID, int srcPosition, int destPosition, String srcType, String destType) {
		JSONObject payload = new JSONObject();
		JSONArray ja = new JSONArray();
		String type = null;
		if (!srcType.equals(destType)) {
			type = destType;
		}
		
		for (ItemStack stack : inventory.get(itemID)) {
			if (srcPosition == stack.getPosition() && srcType.equals(stack.getType())) {
				ja.put(stack.change(null, destPosition, type));
			}
		}
		
		// Swap if there is an item at the destination
		if (occupied.get(destType).get(destPosition)) {
			for (ItemStack stack : inventory.get(itemID)) {
				if (destPosition == stack.getPosition() && destType.equals(stack.getType())) {
					ja.put(stack.change(null, srcPosition, type));
				}
			}
		} else {
			occupied.get(destType).set(destPosition, true);
			occupied.get(srcType).set(srcPosition, true);
		}
		payload.put("inventory", ja);
		return payload;	
	}
	
	public JSONArray inventoryToJSONArray() {
		JSONArray ja = new JSONArray();
		for (int item: inventory.keySet()) {
			for (ItemStack itemstack: inventory.get(item)) {
				ja.put(itemstack.toJSONObject());
			}
		}
		return ja;
	}
	
	// First add member to global members in World
	// Then add its id to party
	public int addMember(String name, int icon) {
		Member m = new Member(name, icon);
		int id = World.addMember(m);
		party.add(id);
		return id;
	}
	
	public void removeMember(Integer id) {
		party.remove(id);
	}
	
	public int partySize(){
		return party.size();
	}
	
	public int getPartyMember(int index) {
		return party.get(index);
	}
	
	public JSONArray partyToJSONArray() {
		JSONArray ja = new JSONArray();
		for (int id: party) {
			ja.put(World.getMember(id).toJSONObject(id));
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
		for (Integer id: party) {
			Member m = World.getMember(id);
			int health = m.getHealth();
			if (health < 5) {
				if (tick % m.getRegen() == 0) {
					partyArray.put(m.change(id, this, 1, 0, null, null, null));
				}
			}
		}
		return partyArray;
	}
	
	
	public String toString() {
		return "NAME:" + name + "   ONLINE:" + online + "   POSITION:"  + position;
	}
	
	public static void main(String[] args) {
		
	}


}