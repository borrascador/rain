package org.younghanlee.rainserver;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
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
	
	public static HashMap<Integer, Item> readFile() {
		JSONArray ja = null;
		try {
			ja = new JSONArray(new String(Files.readAllBytes(Paths.get("json/items.json"))));
		} catch (IOException e) {
			System.out.println("Itmes file "+ "items.json" + " not found.");
			System.exit(1);
		}
		
		HashMap<Integer, Item> items = new HashMap<Integer, Item>();
		JSONObject itemObject;
		for (int i = 0; i < ja.length(); i++) {
			itemObject = ja.getJSONObject(i);
			String name = itemObject.getString("name");
			Integer yield = null;
			if (itemObject.has("yield")) {
				yield = itemObject.getInt("yield");
			} else {
				yield = -1;
			}
			int id = itemObject.getInt("id");
			Item it = new Item(name, yield);
			JSONArray tags = itemObject.getJSONArray("tags");
			for (int j = 0; j < tags.length(); j++) {
				 it.addTag(tags.getString(j));
			}
			items.put(id, it);
		}
		return items;
		
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