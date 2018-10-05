package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONObject;

public interface IChoice{
	String getText(Player p);
	JSONObject result(Player p);
	ArrayList<Multiplier> multipliers = new ArrayList<Multiplier>();
	public static void addMultiplier(Multiplier m) {
		multipliers.add(m);
	}
}