package org.younghanlee.rainserver;

import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Item {
	private String name;
	HashSet<String> tags;
	
	public Item(String name) {
		this.name = name;
		this.tags = new HashSet<String>();
	}
	
	public String getName() {
		return this.name;
	}
	
	public void addTag(String s) {
		tags.add(s);
	}
	
	public boolean hasTag(String s) {
		return tags.contains(s);
	}
	
	public JSONObject toJSONObject(int id, int quantity) {
		JSONObject jo = new JSONObject();
		jo.put("id", id);
		jo.put("name", name);
		jo.put("quantity", quantity);
		JSONArray tagArray = new JSONArray();
		for (String s: tags) {
			tagArray.put(s);
		}
		jo.put("tags", tagArray);
		return jo;
	}
	
}