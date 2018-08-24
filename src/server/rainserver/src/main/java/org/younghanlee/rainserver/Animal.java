package org.younghanlee.rainserver;

import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Animal {
	
	private String name;
	
	private boolean fish;
	
	private int number;
	
	private int strength;
	private int aggression;
	private int speed;
	private Drop[] drops;
	
	private class Drop {
		int id;
		float rarity;
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
		if (jo.has("number")){
			fish = true;
			this.number = jo.getInt("number");
		} else {
			fish = false;
			this.number = 1;
			this.strength = jo.getInt("strength");
			this.aggression = jo.getInt("aggression");
			this.speed = jo.getInt("speed");
		}
		
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
	
	public boolean isFish() {
		return fish;
	}
	
	public String getName() {
		return this.name;
	}
	
	public int getNumber() {
		return number;
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
	
	public boolean flee(Player p) {
		return Player.randomInt(100) > speed;
	}
	
	public boolean fight(Player p) {
		return Player.randomInt(100) > strength;
	}
	
	public JSONArray rollDrop(Player p, int n) {
		JSONArray items = new JSONArray();
		for(Drop d : drops) {
			int item = d.id;
			int value = 0;
			// roll n times
			for (int i=0; i<n; i++) {
				if (Math.random() < d.rarity) {
					value += Player.randomInt(d.max - d.min) + d.min;
				}		
			}
			if (value > 0) {
				JSONObject itemObject = World.getItem(item).change(item, value, p);
				items.put(itemObject);
			}
		}
		return items;
	}
	
}