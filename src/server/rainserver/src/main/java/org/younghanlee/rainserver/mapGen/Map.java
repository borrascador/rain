package org.younghanlee.rainserver.mapGen;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;
import org.younghanlee.rainserver.Habitat;

public class Map {
	private static HashMap<Integer, HashMap<Integer, Double>> habitats;
	
	public Map() {
		habitats = new HashMap<Integer, HashMap<Integer, Double>>();
	}
	
	public static void readHabitats() {
		JSONArray ja = null;
		try {
			ja = new JSONArray(new String(Files.readAllBytes(Paths.get("json/habitats.json"))));
		} catch (IOException e) {
			System.out.println("Habitats file "+ "habitats.json" + " not found.");
			System.exit(1);
		}
		JSONObject habitatObject;
		for (int i = 0; i < ja.length(); i++) {
			HashMap<Integer, Double> plants = new HashMap<Integer, Double>();
			habitatObject = ja.getJSONObject(i);
			int id = habitatObject.getInt("id");
			JSONArray plantArray = habitatObject.getJSONArray("plants");
			for (int j = 0; j < plantArray.length(); j++) {
				JSONObject plant = plantArray.getJSONObject(j);
				plants.put(plant.getInt("id"), plant.getDouble("odds"));
			}
			habitats.put(id, plants);
		}
	}
	
	public static void export(String filename) {
		
	}
	
	public static void generateSuperMap(String filename) {
		JSONArray superMap = new JSONArray();
		int width = 10;
		int height = 10;
		for (int h=0; h<height; h++) {
			for (int w=0; w<width; w++) {
				JSONObject tile = new JSONObject();
				int position = h*width + w;
				tile.put("position", position);
				tile.put("x", w);
				tile.put("y", h);
				if (position < 69) {
					tile.put("habitat", 1);
				} else {
					tile.put("habitat", 15);
				}
				superMap.put(tile);
			}
		}
		try {
			BufferedWriter writer = new BufferedWriter(new FileWriter("map/" + filename));
			System.out.println(superMap.length());
			writer.write("[\n");
			int i;
			for (i=0; i<superMap.length() - 1; i++) {
				writer.write(superMap.getJSONObject(i).toString() + ",\n");
			}
			writer.write(superMap.getJSONObject(i).toString() + "\n");
			writer.write("]");
			writer.close();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public static void main(String[] args) {
		generateSuperMap("superMap.json");
	}
}