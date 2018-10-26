package org.younghanlee.rainserver;

import org.json.JSONArray;
import org.json.JSONObject;

public class ItemStack {

	private int id;
	private int quantity;
	private int position;
	private String type;
	
	public ItemStack (int id, int quantity, int position, String type){
		this.id = id;
		this.quantity = quantity;
		this.position = position;
		this.type = type;
		
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
	
	public Item getItem() {
		return World.getItem(id);
	}
	
	public JSONObject toJSONObject() {
		JSONObject jo = World.getItem(id).toJSONObject();
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
			this.position = position;
			jo.put("position", position);
			
			if (type != null) {
				this.type = type;
				jo.put("type", type);
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