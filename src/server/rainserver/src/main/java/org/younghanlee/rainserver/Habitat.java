package org.younghanlee.rainserver;

import java.util.HashMap;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
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
	
	public static HashMap<Integer, Habitat> readFile() {
		JSONArray ja = null;
		try {
			ja = new JSONArray(new String(Files.readAllBytes(Paths.get("json/habitats.json"))));
		} catch (IOException e) {
			System.out.println("Habitats file "+ "habitats.json" + " not found.");
			System.exit(1);
		}
		HashMap<Integer, Habitat> habitats = new HashMap<Integer, Habitat>();
		JSONObject habitatObject;
		for (int i = 0; i < ja.length(); i++) {
			habitatObject = ja.getJSONObject(i);
			int id = habitatObject.getInt("id");
			habitats.put(id, new Habitat(habitatObject));
		}
		return habitats;
	}
	
	public int getId() {
		return id;
	}
	
	public String getPublicType() {
		return public_type;
	}
	
	public double getAnimalRarity(int id){
		return animals.get(id);
	}
	
	public int randomAnimal() {
		return Util.intChoice(animals);
	}
	
	// Return animal ids in a random order
	public ArrayList<Integer> getAnimals(){
		ArrayList<Integer> list = new ArrayList<Integer>(animals.keySet());
		Collections.shuffle(list);
		return list;
	}
}