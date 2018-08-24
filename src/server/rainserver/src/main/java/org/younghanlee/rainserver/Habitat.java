package org.younghanlee.rainserver;

import java.util.HashMap;

import java.util.ArrayList;
import java.util.Collections;

import org.json.JSONArray;
import org.json.JSONObject;
import java.util.Map.Entry;

public class Habitat {
	private int id;
	private String public_type;
	private HashMap<Integer, Double> animals;
	
	public Habitat(JSONObject jo) {
		this.id = jo.getInt("id");
		this.public_type = jo.getString("public type");
		this.animals = new HashMap<Integer, Double>();
		JSONArray ja = jo.getJSONArray("animals");
		for (int i=0; i<ja.length(); i++) {
			JSONObject animal = ja.getJSONObject(i);
			animals.put(animal.getInt("id"), animal.getDouble("rarity"));
		}
	}
	
	public int getId() {
		return id;
	}
	
	public double getAnimalRarity(int id){
		return animals.get(id);
	}
	
	public ArrayList<Integer> getAnimals(){
		ArrayList<Integer> list = new ArrayList<Integer>(animals.keySet());
		Collections.shuffle(list);
		return list;
	}
}