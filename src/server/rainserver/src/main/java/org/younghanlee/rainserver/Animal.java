package org.younghanlee.rainserver;

import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Animal {

	private int strength;
	private int aggression;
	private int speed;
	private Drop[] drops;
	
	private class Drop {
		int id;
		int rarity;
		int min;
		int max;
		
		public Drop(int id, int rarity, int min, int max) {
			this.id = id;
			this.rarity = rarity;
			this.min = min;
			this.max = max;
		}
	}
	
	public Animal(JSONObject jo) {
		this.strength = jo.getInt("strength");
		this.aggression = jo.getInt("aggression");
		this.speed = jo.getInt("speed");
		
		JSONArray dropsArray = jo.getJSONArray("drops");
		int l = dropsArray.length();
		this.drops = new Drop[l];

		for (int i=0; i<l; i++) {
			JSONObject d = dropsArray.getJSONObject(i);
			int id = d.getInt("id");
			int rarity = d.getInt("rarity");
			int min = d.getInt("min");
			int max = d.getInt("max");
			drops[i] = new Drop(id, rarity, min, max);
		}
	}
	
	public int getStrength() {
		return this.strength;
	}
	
	public int getAggression() {
		return this.aggression;
	}
	
	public int getSpeed() {
		return this.speed;
	}
	
	
	public JSONArray rollDrop(Player p) {
		JSONArray items = new JSONArray();
		for(Drop d : drops) {
			if (Math.random() < d.rarity) {
				JSONObject jo = new JSONObject();
				int item = d.id;
				int value = Player.randomInt(d.max - d.min) + d.min + p.getQuantity(item);
				p.setQuantity(item, value);
				jo.put("id", item);
				jo.put("name", World.getItem(item).getName());
				jo.put("quantity", value);
				items.put(jo);
			}
		}
		return items;
	}
	
}