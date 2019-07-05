package org.younghanlee.rainserver.mapGen;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;
import org.younghanlee.rainserver.Habitat;
import org.younghanlee.rainserver.Util;

public class Map {
	private int width;
	private int height;
	private static HashMap<Integer, HashMap<Integer, Double>> plant_frequencies;
	private static HashMap<Integer, Double> plant_densities;
	private static ArrayList<MapTile> tiles;
	
	public Map(String superMapFile, int width, int height) {
		this.width = width;
		this.height = height;
		plant_frequencies = new HashMap<Integer, HashMap<Integer, Double>>();
		plant_densities = new HashMap<Integer, Double>();
		tiles = new ArrayList<MapTile>();
		readHabitats();
		JSONArray ja = null;
		try {
			ja = new JSONArray(new String(Files.readAllBytes(Paths.get(superMapFile))));
		} catch (IOException e) {
			System.out.println("Super-Map file "+ superMapFile + " not found.");
			System.exit(1);
		}
		for (int i = 0; i < ja.length(); i++) {
			JSONObject tileObject = ja.getJSONObject(i);
			int habitat = tileObject.getInt("habitat");
			int elevation = tileObject.getInt("elevation");
			int position = tileObject.getInt("position");
			int x = tileObject.getInt("x");
			int y = tileObject.getInt("y");
			MapTile mt = new MapTile(habitat, elevation, position, x, y);
			mt.generateTrees(plant_densities.get(habitat), plant_frequencies.get(habitat));
			tiles.add(mt);
		}
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
			if (habitatObject.has("plants") && habitatObject.has("plant_density")) {
				JSONArray plantArray = habitatObject.getJSONArray("plants");
				for (int j = 0; j < plantArray.length(); j++) {
					JSONObject plant = plantArray.getJSONObject(j);
					plants.put(plant.getInt("id"), plant.getDouble("rarity"));
				}
				plant_frequencies.put(id, plants);
				plant_densities.put(id, habitatObject.getDouble("plant_density"));
			}
		}
	}
	
	public void export(String filename) {
		try {
			BufferedWriter writer = new BufferedWriter(new FileWriter("map/" + filename));
			writer.write("{\nwidth: " + width);
			writer.write(",\nheight: " + height + ",\ntiles: ");	
			writer.write("[\n");
			MapTile mt;
			int i;
			for (i=0; i< tiles.size()-1; i++) {
				mt = tiles.get(i);
				writer.write(mt.toJSONObject().toString() + ",\n");
			}
			writer.write(tiles.get(i).toJSONObject().toString() + "\n");
			writer.write("]");
			writer.write("}");
			writer.close();
		} catch (Exception e) {
			System.out.println(e);
		}
	}
	
	public static void generateSuperMap(String filename, int width, int height) {
		JSONArray superMap = new JSONArray();
		for (int h=0; h<height; h++) {
			for (int w=0; w<width; w++) {
				JSONObject tile = new JSONObject();
				int position = h*width + w;
				tile.put("position", position);
				tile.put("x", w);
				tile.put("y", h);
				tile.put("elevation", 500 - Util.randomInt(100));
				if (position < 5) {
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
		generateSuperMap("superMap.json", 3, 3);
		Map m = new Map("map/superMap.json", 3, 3);
		m.export("map.json");
	}
}