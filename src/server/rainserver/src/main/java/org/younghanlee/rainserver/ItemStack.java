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
		return new ItemStack(id, new_quantity, position, type);
	}
	
	public JSONObject toJSONObject() {
		JSONObject jo = World.getItem(id).toJSONObject();
		if (durability != null) {
			jo.put("durability", durability);
		}
		jo.put("quantity", quantity);
		jo.put("id", id);
		jo.put("position", position);
		jo.put("type", type);
		return jo;
	}
	
	// returns JSONObject containing id, srcPosition, destPosition, srcType, destType, quantity, change
	public JSONObject change(Integer quantity, Integer position, String type) {
		JSONObject jo = new JSONObject();
		if (type != null || position != null) {
			jo.put("srcPosition", this.position);
			this.position = position;
			jo.put("destPosition", position);
			
			if (type != null) {
				jo.put("srcType", this.type);
				this.type = type;
				jo.put("destType", type);
			}
		}
		
		if (quantity != null) {
			int change = quantity - this.quantity;
			jo.put("change", change);
			this.quantity = quantity;
			jo.put("quantity", quantity);
		}
		
		jo.put("id", id);
		return jo;
	}

}