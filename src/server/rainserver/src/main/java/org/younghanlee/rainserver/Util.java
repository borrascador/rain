package org.younghanlee.rainserver;

import org.json.JSONArray;

public class Util{
	public static int randomInt(int max) {
		return (int)(Math.random() * (max + 1));
	}
	
	public static int randomRoll(int base, float multiplier) {
		return Math.round(randomInt(base) * multiplier);
	}
	
	public static int randomRoll(int base, float multiplier, int max) {
		int r =  Math.round(randomInt(base) * multiplier);
		if (r > max) {
			r = max;
		}
		return r;
	}
	
	public static JSONArray concat(JSONArray a1, JSONArray a2) {
		JSONArray ja = a1;
		for (int i=0; i<a2.length(); i++) {
			ja.put(a2.get(i));
		}
		return ja;
	}
	
}