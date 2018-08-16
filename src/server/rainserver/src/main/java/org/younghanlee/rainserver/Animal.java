package org.younghanlee.rainserver;

import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Animal {

	private String name;
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
		this.name = jo.getString("name");
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
	
	public String getName() {
		return this.name;
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
	
	public JSONObject fight(Player p) {
		JSONObject story = new JSONObject();
		if (Player.randomInt(100) > strength) {
			story.put("text", "You defeated " + name);
			return Message.EVENT_RESPONSE(null, rollDrop(p), null, null, story);
		} else {
			story.put("text", name + "has injured your party members");
			return Message.EVENT_RESPONSE(null, null, null, null, story);
		}	
	}
	
	public JSONObject flee(Player p) {
		JSONObject story = new JSONObject();
		if (Player.randomInt(100) > speed) {
			story.put("text", "You defeated " + name);
			return Message.EVENT_RESPONSE(null, rollDrop(p), null, null, story);
		} else {
			story.put("text", name + "has escaped");
			return Message.EVENT_RESPONSE(null, null, null, null, story);
		}
	}
	
	public JSONArray rollDrop(Player p) {
		JSONArray items = new JSONArray();
		for(Drop d : drops) {
			if (Math.random() < d.rarity) {
				int item = d.id;
				int value = Player.randomInt(d.max - d.min) + d.min;
				JSONObject itemObject = World.getItem(item).change(item, value, p);
				items.put(itemObject);
			}
		}
		return items;
	}
	
}