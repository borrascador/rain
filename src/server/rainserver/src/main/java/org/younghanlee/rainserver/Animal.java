package org.younghanlee.rainserver;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;
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
	
	public static HashMap<Integer, Animal> readFile() {
		JSONArray ja = null;
		try {
			ja = new JSONArray(new String(Files.readAllBytes(Paths.get("json/animals.json"))));
		} catch (IOException e) {
			System.out.println("Animals file "+ "animals.json" + " not found.");
			System.exit(1);
		}
		
		HashMap<Integer, Animal> animals = new HashMap<Integer, Animal>();
		JSONObject animalObject;
		for (int i = 0; i < ja.length(); i++) {
			animalObject = ja.getJSONObject(i);
			int id = animalObject.getInt("id");
			animals.put(id, new Animal(animalObject));
		}
		return animals;
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
		return Util.randomInt(100) > speed;
	}
	
	public boolean fight(Player p, float multiplier) {
		int partySize = p.partySize();
		int base = 0;
		for (int i=0; i<partySize; i++) {
			base += World.getMember(p.getPartyMember(i)).getStrength();
		}
		int value = Util.randomRoll(base, multiplier);
		return value > strength;
	}
	
	public JSONArray rollDrop(Player p, int n) {
		JSONArray items = new JSONArray();
		for(Drop d : drops) {
			int item = d.id;
			int value = 0;
			// roll n times
			for (int i=0; i<n; i++) {
				if (Math.random() < d.rarity) {
					value += Util.randomInt(d.max - d.min) + d.min;
				}		
			}
			if (value > 0) {
				JSONObject itemObject = World.getItem(item).change(item, value, p, false);
				items.put(itemObject);
			}
		}
		return items;
	}
	
}