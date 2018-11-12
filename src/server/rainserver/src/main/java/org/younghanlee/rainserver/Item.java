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
	private int maxStack;
	
	public Item(String name, int yield, int maxStack) {
		this.name = name;
		if (yield != -1) {
			this.yield = yield;
		}
		this.tags = new HashSet<String>();
		this.maxStack = maxStack;
	}
	
	public static HashMap<Integer, Item> readFile() {
		JSONArray ja = null;
		try {
			ja = new JSONArray(new String(Files.readAllBytes(Paths.get("json/items.json"))));
		} catch (IOException e) {
			System.out.println("Items file "+ "items.json" + " not found.");
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
			int maxStack = itemObject.getInt("max");
			Item it = new Item(name, yield, maxStack);
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
	
	public int getMaxStack() {
		return maxStack;
	}
	
	
	public JSONObject toJSONObject() {
		JSONObject jo = new JSONObject();
		jo.put("name", name);
		jo.put("yield", yield);
		JSONArray tagArray = new JSONArray();
		for (String s: tags) {
			tagArray.put(s);
		}
		jo.put("tags", tagArray);
		return jo;
	}
	
}