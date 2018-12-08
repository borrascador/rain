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
	private HashMap<String, ArrayList<ItemStack>> occupied;
	private ItemStack drag;
	
	private Move move; // Initialize with move(), stop with stopMoving()
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
		
		// Player is offline upon registration. Call Login afterwards
		online = false;
		position = null;	
		
		// Empty data structures
		tilesSeen = new ArrayList<Integer>();
		party = new ArrayList<Integer>();	
		inventory = new HashMap<Integer, ArrayList<ItemStack>>();
		// Which backpack slots are occupied
		capacity = new HashMap<String, Integer>();
		capacity.put("PARTY", 3);
		capacity.put("BACKPACK", 20);
		capacity.put("EATING", 3);
		
		occupied = new HashMap<String, ArrayList<ItemStack>>();
		occupied.put("BACKPACK", new ArrayList<ItemStack>(Collections.nCopies(capacity.get("BACKPACK"), null)));
		occupied.put("PARTY", new ArrayList<ItemStack>(Collections.nCopies(capacity.get("PARTY"), null)));
		occupied.put("EATING", new ArrayList<ItemStack>(Collections.nCopies(capacity.get("EATING"), null)));
		
		drag = null;
		
		pace = 0;
		speed = 4;
		rations = 1;
		
		move = null;
		hunting = false;
		randomEvent = null;
		randomEventFlag = false;
		
		// First decision is choose tribe. Create and attach this decision to this player.
		String [] choiceNames = new String[World.numTribes()];
		for (int i=0; i<World.numTribes(); i++) {
			choiceNames[i] = "selectTribe"+ i;
		}
		String story = "Choose your tribe.";
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
		if (drag != null) {
			putBackItem();
		}
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
		
		if (randomEventFlag) {
			randomEventFlag = false;
			switch (trigger) {
				case "move":
					if (move != null) {
						JSONObject result = randomEvent.result(this);
						result.put("pace", 0);
						stopMoving();
						connection.sendJSON(Message.UPDATE(result));
					}
					break;
					
				case "hunting":
					if (hunting && move != null) {
						JSONObject result = randomEvent.result(this);
						if (result != null) {
							connection.sendJSON(Message.UPDATE(result));
						}
					}
					break;
					
				default:
					connection.sendJSON(Message.UPDATE(randomEvent.result(this)));
					break;
			}
			randomEvent = null;
		}
		return;
	}
	
	public void setEventArg(String key, Object value) {
		eventArgs.put(key, value);
	}
	
	public Object getEventArg(String key) {
		return eventArgs.get(key);
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
			pace = n;
			move.setPace(n);
		}
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
						occupied.get(stack.getType()).set(stack.getPosition(), null);
						ja.put(stack.change(0, this));
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
			ArrayList<ItemStack> slots = occupied.get(type);
			if (slots.get(i) == null) {
				return i;
			}
		}
		return -1;
	}
	
	public ItemStack findStack(int itemID, int position, String type) {
		if (!inventory.containsKey(itemID)) {
			return null;
		}
		for (ItemStack stack : inventory.get(itemID)) {
			if (position == stack.getPosition() && type.equals(stack.getType())) {
				return stack;
			}
		}
		return null;
	}
	
	public JSONObject addStack(int itemID, ItemStack stack) {
		JSONObject jo = new JSONObject();
		if (inventory.containsKey(itemID)) {
			inventory.get(itemID).add(stack);
		} else {
			ArrayList<ItemStack> list = new ArrayList<ItemStack>();
			list.add(stack);
			inventory.put(itemID, list);
		}
		jo = stack.toJSONObject(this);
		int position = stack.getPosition();
		occupied.get(stack.getType()).set(position, stack);
		if (stack.getType() == "party") {
			Member m = World.getMember(party.get(position));
			m.equip(stack);
		}
		return jo;
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
					if (difference >= left) {
						ja.put(itemstack.change(stackSize + left, this));
						return ja;
					} else {
						left -= difference;
						ja.put(itemstack.change(maxStack, this));
					}
				}
			}
		}
		// Create new stacks if necessary
		while (true) {
			int p = getOpenPosition("BACKPACK");
			if (maxStack >= left) {
				ItemStack stack = new ItemStack(itemID, left, p, "BACKPACK");
				if (maxStack == 1) {
					stack.setDurability(100);
				}
				addStack(itemID, stack);
				occupied.get("BACKPACK").set(p, stack);
				ja.put(stack.toJSONObject(this));
				return ja;
			} else {
				left -= maxStack;
				ItemStack stack = new ItemStack(itemID, maxStack, p, "BACKPACK");
				if (maxStack == 1) {
					stack.setDurability(100);
				}
				addStack(itemID, stack);
				occupied.get("BACKPACK").set(p, stack);
				ja.put(stack.toJSONObject(this));
			}
		}
	}
	
	public JSONArray subtract(int itemID, int quantity, boolean requireFull) {
		JSONArray ja = new JSONArray();
		int maxStack = World.getItem(itemID).getMaxStack();
		return ja;
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
				occupied.get(type).set(i, null);
			}	
		}
		
		for (int item : inventory.keySet()) {
			for (ItemStack stack : inventory.get(item)) {
				ja.put(stack.change(0, this));
			}
			inventory.remove(item);
		}
		return ja;
	}
	
	public JSONObject reduceDrag(int quantity) {
		JSONObject jo = new JSONObject();
		int newQuantity = drag.getQuantity() - quantity;
		if (newQuantity == 0) {
			jo.put("quantity", newQuantity);
			drag = null;
		} else {
			drag.setQuantity(newQuantity);
			jo.put("quantity", newQuantity);
		}
		jo.put("position", 0);
		jo.put("type", "DRAG");
		return jo;
	}
	
	public void deleteStack(ItemStack stack) {
		occupied.get(stack.getType()).set(stack.getPosition(), null);
		inventory.get(stack.getId()).remove(stack);
	}
	
	public JSONObject pickUp(int itemID, int quantity, int srcPosition, String srcType) {
		JSONObject payload = new JSONObject();
		if (drag != null) {
			String error_message = "pick_up: Already dragging an item.";
			return Message.ERROR(330, error_message);
		} else {
			ItemStack stack = findStack(itemID, srcPosition, srcType);
			if (stack == null) {
				String error_message = "pick_up: Could not find item " + itemID;
				error_message += " at " + srcType + ", " + srcPosition;
				return Message.ERROR(332, error_message);
			}

			drag = stack.copy(quantity);

			
			if (quantity > stack.getQuantity()) {
				String error_message = "pick_up: Not enough of item " + itemID;
				error_message += ". (" + stack.getQuantity() + "/" + quantity;
				return Message.ERROR(331, error_message);
			} else {
				if (quantity == stack.getQuantity()) {
					deleteStack(stack);
					if (srcType == "party") {
						Member m = World.getMember(party.get(srcPosition));
						m.unequip(stack);
					}
				}
				
				JSONArray ja = new JSONArray();
				JSONObject jo = new JSONObject();
				jo.put("position", 0);
				jo.put("type", "DRAG");
				jo.put("quantity", quantity);
				jo.put("id", itemID);
				ja.put(jo);
				
				JSONObject source = new JSONObject();
				if (srcType == "party") {
					source.put("position", party.get(srcPosition));
				} else {
					source.put("position", srcPosition);
				}
				
				source.put("type", srcType);
				source.put("id", itemID);
				source.put("quantity", stack.getQuantity() - quantity);
				stack.setQuantity(stack.getQuantity() - quantity);
				ja.put(source);
				
				payload.put("inventory", ja);
				return Message.EVENT_RESPONSE(payload);
			}
		}
	}
	
	public JSONObject putDown(int itemID, int quantity, int destPosition, String destType) {
		int q = drag.getQuantity();
		
		if (itemID != drag.getId()) {
			String error_message = "put_down: " + itemID + " does not match id " + drag.getId();
			return Message.ERROR(335, error_message);
		}
		
		if (quantity > q) {
			String error_message = "put_down: tried to put down " + quantity;
			error_message +=	 ". Only have " + q + " in hand";
			return Message.ERROR(336, error_message);
		}
		
		if (!World.getItem(itemID).canPutDown(destType)) {
			String error_message = "put_down: tried to put down item: " + World.getItem(itemID).getName();
			error_message +=	 " in " + destType;
			return Message.ERROR(337, error_message);
		}
		
		JSONArray updates = new JSONArray();
		ItemStack targetStack = occupied.get(destType).get(destPosition);
		// Target slot has something in it
		if (targetStack != null) {
			int maxStack = targetStack.getItem().getMaxStack();
			int targetQuantity = targetStack.getQuantity();
			// Target stack has same item ID
			if (targetStack.getId() == itemID) {
				int space = maxStack - targetQuantity;
				// Enough space for all in target stack
				if (quantity <= space) {
					updates.put(targetStack.change(targetQuantity + quantity, this));
					updates.put(reduceDrag(quantity));
				} else {
				// Not enough space for all in target stack
					updates.put(targetStack.change(maxStack, this));
					updates.put(reduceDrag(space));
				}
			// Target stack has different item ID
			} else {
				JSONObject pickUpTarget = new JSONObject();
				pickUpTarget.put("position", 0);
				pickUpTarget.put("type", "DRAG");
				pickUpTarget.put("quantity", targetQuantity);
				pickUpTarget.put("id", targetStack.getId());
				inventory.get(targetStack.getId()).remove(targetStack);
				updates.put(addStack(itemID, drag));
				drag = targetStack;
				updates.put(pickUpTarget);
			}
			
		} else {
		// Target slot has nothing in it	
			// Put down full stack
			if (quantity == q) {
				drag.setPosition(destPosition);
				drag.setType(destType);
				updates.put(addStack(itemID, drag));
				updates.put(reduceDrag(quantity));
			// Put down part of stack
			} else {
				updates.put(reduceDrag(quantity));
				ItemStack split = drag.copy(quantity);
				split.setPosition(destPosition);
				split.setType(destType);
				updates.put(addStack(itemID, split));
			}
		}
		JSONObject payload = new JSONObject();
		payload.put("inventory", updates);
		return Message.EVENT_RESPONSE(payload);
	}
	 
	public void putBackItem() {
		System.out.println("TEST");
		int position = drag.getPosition();
		String type = drag.getType();
		int quantity = drag.getQuantity();
		ItemStack stack = occupied.get(type).get(position);
		System.out.println("TEST");
		if (stack != null) {
			int newQuantity = stack.getQuantity() + quantity;
			stack.setQuantity(newQuantity);
		} else {
			addStack(drag.getId(), drag);
		}
		System.out.println("TEST");
		drag = null;
	}
	
	public JSONArray degrade() {
		JSONArray ja = new JSONArray();
		for (ItemStack i: occupied.get("PARTY")) {
			if (i != null) {
				ja.put(i.degrade(5, this));
			}
		} 
		if (ja.length() > 0){
			return ja;
		} else {
			return null;
		}
	}
	
	public JSONArray inventoryToJSONArray() {
		JSONArray ja = new JSONArray();
		for (int item: inventory.keySet()) {
			for (ItemStack itemstack: inventory.get(item)) {
				ja.put(itemstack.toJSONObject(this));
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
	
	public int indexOfPartyMember(int id) {
		return party.indexOf(id);
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