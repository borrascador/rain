package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Tile {
	private int position;
	private int xPos;
	private int yPos;
	
	private HashMap<Integer, Integer> trees;
	private HashMap<Integer, Integer> crops;
	private int habitat;
	private int elevation;
	
	private Player owner;
	
	public Tile(JSONObject tileObject) {
		this.position = tileObject.getInt("position");
		this.xPos = position % World.getWidth();
		this.yPos = (position - xPos)/World.getWidth();
		this.trees = new HashMap<Integer, Integer>();
		this.crops = new HashMap<Integer, Integer>();

	}
	
	public JSONObject toJSONObject() {
		JSONObject jo = new JSONObject();
		jo.put("xPos", xPos);
		jo.put("yPos", yPos);
		jo.put("habitat", habitat);
		jo.put("elevation", elevation);
		
//		JSONArray crops = new JSONArray();
//		for (HashMap.Entry<Integer, Integer> entry : this.crops.entrySet()) {
//			JSONObject crop = new JSONObject();
//			int id = entry.getKey();
//			crop.put("id", id);
//			crop.put("name", World.getItem(id).getName());
//			int stage = entry.getValue();
//			if (stage > 1) {
//				stage = 1; 
//			}
//			crop.put("stage", stage);
//			crops.put(crop);
//		}
//		jo.put("crops", crops);
//		
		return jo;
	}
	
	public int getID(int x, int y) {
		return x * World.getWidth() + y;
	}
	

	
	public JSONObject plant (int seed_id, Player p) {
		int n = p.getQuantity(seed_id);
		if (n >= 1) {
			int yield_id = World.getItem(seed_id).getYield();
			
			JSONArray inventory_changes = p.subtract(seed_id, 1, true);

			this.crops.put(yield_id, 10);
			JSONObject payload = new JSONObject();
			payload.put("inventory", inventory_changes);
			return Message.EVENT_RESPONSE(payload);
		} else {
			return Message.ERROR(312, "Missing" + World.getItem(seed_id).getName());
		}
	}
	
	public JSONObject harvest(int crop_id, Player p) {
		if (!this.crops.containsKey(crop_id)) {
			return Message.ERROR(313, "There is no crop " + World.getItem(crop_id).getName() +" here");
		} 
		if (this.crops.get(crop_id) > 0){
			return Message.ERROR(314, World.getItem(crop_id).getName() +" is still growing");
		}
		int yield = 2 + Util.randomInt(10);
		
		JSONArray inventory_changes = p.add(crop_id, yield);
			
		this.crops.remove(crop_id);
		
		JSONObject payload = new JSONObject();
		payload.put("inventory", inventory_changes);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public void decGrowthStage(int i) {
		for (HashMap.Entry<Integer, Integer> entry : crops.entrySet()) {
			int key = entry.getKey();
			int n = entry.getValue();
			// System.out.println(key + ": " + n);
			if (n > 0) {
				crops.put(key, n-1);
			}
			if (n-1 == 0) {
			}
		}
	}
	
	public static void main(String[] args){
		
	}
}