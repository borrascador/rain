package org.younghanlee.rainserver;

import org.json.JSONArray;
import org.json.JSONObject;

public class ItemStack {

	private int id;
	private int quantity;
	private int position;
	private String type;
	private Integer durability;
	
	public ItemStack (int id, int quantity, int position, String type){
		this.id = id;
		this.position = position;
		this.type = type;
		this.quantity = quantity;
		this.durability = null;
	}
	
	public int getId() {
		return id;
	}
	
	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}
	
	public int getQuantity() {
		return quantity;
	}
	
	public void setPosition(int position) {
		this.position = position;
	}
	
	public int getPosition() {
		return position;
	}
	
	public void setType(String type) {
		this.type = type;
	}
	
	public String getType() {
		return type;
	}
	
	public void setDurability(int durability) {
		this.durability = durability;
	}
	
	public int getDurability(){
		return durability;
	}
	
	public Item getItem() {
		return World.getItem(id);
	}
	
	public ItemStack copy(int new_quantity) {
		ItemStack stack = new ItemStack(id, new_quantity, position, type);
		if (durability != null) {
			stack.setDurability(durability);
		}
		return stack;
	}
	
	public JSONObject toJSONObject(Player p) {
		JSONObject jo = World.getItem(id).toJSONObject();
		if (durability != null) {
			jo.put("durability", durability);
		}
		jo.put("quantity", quantity);
		jo.put("id", id);
		if (this.type == "party") {
			jo.put("position", p.getPartyMember(this.position));
		} else {
			jo.put("position", this.position);
		}
		jo.put("type", type);
		return jo;
	}
	
	public JSONObject degrade(int amount, Player p) {
		JSONObject jo = toJSONObject(p);
		durability -= amount;
		if (durability <= 0) {
			jo = change(0, p);
			p.deleteStack(this);
		} else {
			jo.put("durability", durability);
		}
		return jo;
	}
	
	public JSONObject repair(int amount, Player p) {
		JSONObject jo = toJSONObject(p);
		durability += amount;
		if (durability > 0) {
			durability = 100;
		}
		jo.put("durability", durability);
		return jo;
	}
	
	public JSONObject change(Integer quantity, Player p) {
		JSONObject jo = new JSONObject();
		
		if (quantity != null) {
			int change = quantity - this.quantity;
			jo.put("change", change);
			this.quantity = quantity;
			jo.put("quantity", quantity);
			if (this.type == "party") {
				jo.put("position", p.getPartyMember(this.position));
			} else {
				jo.put("position", this.position);
			}
			jo.put("type", this.type);
		}
		
		jo.put("id", id);
		return jo;
	}

}