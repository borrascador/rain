package org.younghanlee.rainserver.mapGen;

import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;
import org.younghanlee.rainserver.Util;

public class MapTile {
	private int habitat;
	private int elevation;
	private int position;
	private int x;
	private int y;
	private HashMap<Integer, Integer> trees;
	
	public MapTile(int habitat, int elevation, int position, int x, int y) {
		this.habitat = habitat;
		this.elevation = elevation;
	}
	
	public void generateTrees(double plant_density, HashMap<Integer, Double> plant_frequencies) {
		trees = new HashMap<Integer, Integer>();
		for (int i = 0; i<4096; i++) {
			double r = Math.random();
			if (r < plant_density) {
				int plant_id = Util.intChoice(plant_frequencies);
				trees.put(i, plant_id);
			}
		}
	}
	
	public JSONObject toJSONObject() {
		JSONObject jo = new JSONObject();
		jo.put("habitat", habitat);
		jo.put("position", position);
		jo.put("x", x);
		jo.put("y", y);
		jo.put("elevation", elevation);
		JSONArray treesArray = new JSONArray();
		for (int i: trees.keySet()) {
			JSONObject subTile = new JSONObject();
			subTile.put("position", i);
			subTile.put("id", trees.get(i));
			treesArray.put(subTile);
		}
		jo.put("trees", treesArray);
		return jo;
	}
	
}