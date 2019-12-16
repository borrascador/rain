package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

public class LootPile {
	private ArrayList<ItemStack> loot;
	
	public LootPile(ArrayList<ItemStack> list) {
		loot = list;
	}
	
	public LootPile(Inventory inventory) {
		loot = inventory.toArrayList();
	}
	
	public JSONArray toJSONArray() {
		JSONArray ja = new JSONArray();
		int counter = 0;
		for (ItemStack itemstack: loot) {
			JSONObject i = itemstack.toJSONObject(null);
			i.put("position", counter);
			i.put("type", "LOOT");
			ja.put(i);
			counter++;
		}
		return ja;
	}
}
