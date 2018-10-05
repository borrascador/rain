package org.younghanlee.rainserver;

import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Item {
	private String name;
	// If this is a seed what fruit does it yield
	private int yield;
	HashSet<String> tags;
	
	public Item(String name, int yield) {
		this.name = name;
		if (yield != -1) {
			this.yield = yield;
		}
		this.tags = new HashSet<String>();
	}
	
	public String getName() {
		return this.name;
	}
	
	public int getYield() {
		return this.yield;
	}
	
	public void addTag(String s) {
		tags.add(s);
	}
	
	public boolean hasTag(String s) {
		return tags.contains(s);
	}
	
	// id, name, new_quantity, change
	public JSONObject change(int id, int change, Player p, boolean requireFull) {
		JSONObject jo = new JSONObject();
		
		int quantity = p.getQuantity(id);
		
		int actual_change = change;
		
		if (quantity + change < 0) {
			if (requireFull) {
				return null;
			} else actual_change = -quantity;
		}

		// Case when we add an item not yet owned
		if (quantity == 0 && change >=0 ) {
			jo.put("yield", yield);
			JSONArray tagArray = new JSONArray();
			for (String s: tags) {
				tagArray.put(s);
			}
			jo.put("tags", tagArray);
		}
		
		jo.put("id", id);
		jo.put("name", name);
		
		quantity += actual_change;
		p.setQuantity(id, quantity);
		
		jo.put("quantity", quantity);
		jo.put("change", actual_change);
		return jo;
	}
	
	
	public JSONObject toJSONObject(int id, int quantity) {
		JSONObject jo = new JSONObject();
		jo.put("id", id);
		jo.put("name", name);
		jo.put("quantity", quantity);
		jo.put("yield", yield);
		JSONArray tagArray = new JSONArray();
		for (String s: tags) {
			tagArray.put(s);
		}
		jo.put("tags", tagArray);
		return jo;
	}
	
}