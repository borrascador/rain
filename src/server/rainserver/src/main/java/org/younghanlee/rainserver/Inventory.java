package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class Inventory {
	private HashMap<Integer, ArrayList<ItemStack>> inventory;
	private HashMap<String, ArrayList<ItemStack>> occupied;
	private HashMap<String, Integer> capacity;
	private ItemStack drag;
	private Player player;
	
	public Inventory(Player p) {
		player = p;
		inventory = new HashMap<Integer, ArrayList<ItemStack>>();
		occupied = new HashMap<String, ArrayList<ItemStack>>();
		// Which backpack slots are occupied
		capacity = new HashMap<String, Integer>();
		capacity.put("PARTY", 3);
		capacity.put("BACKPACK", 20);
		capacity.put("EATING", 3);
		
		occupied.put("BACKPACK", new ArrayList<ItemStack>(Collections.nCopies(capacity.get("BACKPACK"), null)));
		occupied.put("PARTY", new ArrayList<ItemStack>(Collections.nCopies(capacity.get("PARTY"), null)));
		occupied.put("EATING", new ArrayList<ItemStack>(Collections.nCopies(capacity.get("EATING"), null)));
		
		drag = null;
		
	}
	
	public JSONArray setQuantity(int itemID, int quantity) {
		JSONArray ja = new JSONArray();
		// If quantity is 0 remove all stacks 
		if (quantity <= 0) {
			if (inventory.containsKey(itemID)){
				
				for (int item : inventory.keySet()) {
					for (ItemStack stack : inventory.get(item)) {
						occupied.get(stack.getType()).set(stack.getPosition(), null);
						ja.put(stack.change(0, player));
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
		jo = stack.toJSONObject(player);
		int position = stack.getPosition();
		occupied.get(stack.getType()).set(position, stack);
		if (stack.getType() == "party") {
			Member m = World.getMember(player.getPartyMembers().get(position));
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
						ja.put(itemstack.change(stackSize + left, player));
						return ja;
					} else {
						left -= difference;
						ja.put(itemstack.change(maxStack, player));
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
				ja.put(stack.toJSONObject(player));
				return ja;
			} else {
				left -= maxStack;
				ItemStack stack = new ItemStack(itemID, maxStack, p, "BACKPACK");
				if (maxStack == 1) {
					stack.setDurability(100);
				}
				addStack(itemID, stack);
				occupied.get("BACKPACK").set(p, stack);
				ja.put(stack.toJSONObject(player));
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
				ja.put(stack.change(0, player));
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
						Member m = World.getMember(player.getPartyMembers().get(srcPosition));
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
					source.put("position", player.getPartyMembers().get(srcPosition));
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
					updates.put(targetStack.change(targetQuantity + quantity, player));
					updates.put(reduceDrag(quantity));
				} else {
				// Not enough space for all in target stack
					updates.put(targetStack.change(maxStack, player));
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
				ja.put(i.degrade(5, player));
			}
		} 
		if (ja.length() > 0){
			return ja;
		} else {
			return null;
		}
	}
	
	public void logoff() {
		if (drag != null) {
			putBackItem();
		}
	}
	
	public JSONArray ToJSONArray() {
		JSONArray ja = new JSONArray();
		for (int item: inventory.keySet()) {
			for (ItemStack itemstack: inventory.get(item)) {
				ja.put(itemstack.toJSONObject(player));
			}
		}
		return ja;
	}
	
	public ArrayList<ItemStack> toArrayList(){
		ArrayList<ItemStack> al = new ArrayList<ItemStack>();
		for (int item: inventory.keySet()) {
			for (ItemStack itemstack: inventory.get(item)) {
				al.add(itemstack);
			}
		}
		return al;
	}
}
