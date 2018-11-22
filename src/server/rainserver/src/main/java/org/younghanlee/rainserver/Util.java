package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;

public class Util{
	public static int randomInt(int max) {
		return (int)(Math.random() * (max + 1));
	}
	
	public static int choice(int[] array) {
		int index = randomInt(array.length);
		return array[index];
	}
	
	public static String choice(String[] array) {
		int index = randomInt(array.length - 1);
		return array[index];
	}
	
	public static IRandomEvent choice(ArrayList<IRandomEvent> array) {
		int index = randomInt(array.size() - 1);
		return array.get(index);
	}
	
	public static int intChoice(HashMap<Integer, Double> odds) {
		ArrayList<Integer> ids = new ArrayList<Integer>();
		ArrayList<Double> cumulative_odds = new ArrayList<Double>();
		double sum = 0;
		
		double total = 0.0;
		for (double entry : odds.values()) {
			total += entry;
		}
		
		for (HashMap.Entry<Integer, Double> entry: odds.entrySet()) {
			int id = entry.getKey();
			double o = entry.getValue();
			if (o > 0) {
				ids.add(id);
				sum += o;
				cumulative_odds.add(sum/total);
			}
		}
		
		double r = Math.random();
		for (int i=0; i<cumulative_odds.size(); i++) {
			if (r<cumulative_odds.get(i)) {
				return ids.get(i);
			}
		}
		return -1;
	}
	
	public static String stringChoice(HashMap<String, Double> odds) {
		ArrayList<String> ids = new ArrayList<String>();
		ArrayList<Double> cumulative_odds = new ArrayList<Double>();
		
		double total = 0.0;
		for (double entry : odds.values()) {
			total += entry;
		}
		
		double sum = 0.0;
		
		for (HashMap.Entry<String, Double> entry: odds.entrySet()) {
			String id = entry.getKey();
			double o = entry.getValue();
			if (o > 0.0) {
				ids.add(id);
				sum += o;
				cumulative_odds.add(sum/total);
			}
		}
		
		double r = Math.random();
		for (int i=0; i<cumulative_odds.size(); i++) {
			if (r<cumulative_odds.get(i)) {
				return ids.get(i);
			}
		}
		return "";
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
		JSONArray ja;
		if (a1 == null) {
			if (a2 == null) {
				return null;
			} else {
				return a2;
			}
		} else {
			ja = a1;
			for (int i=0; i<a2.length(); i++) {
				ja.put(a2.get(i));
			}
			return ja;
		}
	}
	
}