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
	
	private static int lootPileRarity = 20;
	
	private HashMap<Integer, Integer> trees;
	private HashMap<Integer, Integer> crops;
	private HashMap<Integer, ArrayList<Member>> members;
	private HashMap<Integer, LootPile> loot;
	private int habitat;
	private int elevation;
	
	private Player owner;
	
	public Tile(JSONObject tileObject) {
		this.position = tileObject.getInt("position");
		this.xPos = position % World.getWidth();
		this.yPos = (position - xPos)/World.getWidth();
		this.trees = new HashMap<Integer, Integer>();
		this.members = new HashMap<Integer, ArrayList<Member>>();
		this.loot = new HashMap<Integer, LootPile>();
		
		int ts = World.getTileSize();
		for (int t=0; t<ts*ts; t++) {
			if (Util.randomInt(lootPileRarity+1) > lootPileRarity) {
				ItemStack itemstack = new ItemStack(Util.randomInt(40), 1, 0, "LOOT");
				ItemStack itemstack2 = new ItemStack(Util.randomInt(40), 1, 0, "LOOT");
				ArrayList<ItemStack> list = new ArrayList<ItemStack>();
				list.add(itemstack);
				list.add(itemstack2);
				LootPile lootpile = new LootPile(list);
				loot.put(t, lootpile);
			}
		}
		
		JSONArray treeSet = tileObject.getJSONArray("trees");
		for (int i=0; i<treeSet.length(); i++) {
			JSONObject treeObject = treeSet.getJSONObject(i);
			int treePosition = treeObject.getInt("position");
			int treeId = treeObject.getInt("id");			
			trees.put(treePosition, treeId);
			
		}
		this.crops = new HashMap<Integer, Integer>();

	}
	
	public JSONObject toJSONObject(ArrayList<Integer> inSight) {
		JSONObject jo = new JSONObject();
		jo.put("xPos", xPos);
		jo.put("yPos", yPos);
		jo.put("habitat", habitat);
		jo.put("elevation", elevation);
		int xCoord, yCoord;
		int ts = World.getTileSize();
		
		JSONArray treesArray = new JSONArray();
		for (int subTile: inSight) {
			if (trees.containsKey(subTile)) {
				JSONObject tree = new JSONObject();
				int position = subTile;
				int id = trees.get(subTile);
				xCoord = position % ts;
				tree.put("xCoord", xCoord);
				yCoord = (position - xCoord)/ts;
				tree.put("yCoord", yCoord);
				tree.put("id", id);
				treesArray.put(tree);
			}
		}
		jo.put("trees", treesArray);
		JSONArray lootArray = new JSONArray();
		for (int subTile: inSight) {
			if (loot.containsKey(subTile)) {
				JSONObject lootObject = new JSONObject();
				int position = subTile;
				xCoord = position % ts;
				lootObject.put("xCoord", xCoord);
				yCoord = (position - xCoord)/ts;
				lootObject.put("yCoord", yCoord);
				lootArray.put(lootObject);
			}
		}
		jo.put("loot", lootArray);
		
		
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
	
	public static int getID(int x, int y) {
		return x * World.getWidth() + y;
	}
	
	public static int getSubtile(int x, int y) {
		int ts = World.getTileSize();
		return y%ts * ts + x%ts;
	}
	
	public void changeMemberPosition(Integer prevPosition, Integer newPosition, Member m) {
		if (prevPosition != null) {
			ArrayList<Member> prevList = members.get(prevPosition);
			prevList.remove(m);
		}
		if (newPosition != null) {
			ArrayList<Member> newList = members.get(newPosition);
			if (newList == null) {
				newList = new ArrayList<Member>();
				newList.add(m);
				members.put(newPosition, newList);
			} else {
				newList.add(m);
			}
		}
	}
	
	public ArrayList<Member> subTileMembers(int subTile){
		if (members.containsKey(subTile)) {
			return members.get(subTile);
		} else return null;
	}
	
	public void addLoot(int position, LootPile lp) {
		loot.put(position, lp);
	}
	
	public JSONObject plant (int seed_id, Player p) {
		Inventory inventory = p.getInventory();
		int n = inventory.getQuantity(seed_id);
		if (n >= 1) {
			int yield_id = World.getItem(seed_id).getYield();
			
			JSONArray inventory_changes = inventory.subtract(seed_id, 1, true);

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
		
		JSONArray inventory_changes = p.getInventory().add(crop_id, yield);
			
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