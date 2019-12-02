package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONArray;

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
		for (ItemStack itemstack: loot) {
			ja.put(itemstack.toJSONObject(null));
		}
		return ja;
	}
}
