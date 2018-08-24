package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Map.Entry;

import org.json.JSONArray;
import org.json.JSONObject;

public class Hunt{
	private int weapon;
	private Habitat h;
	private Animal animal;
	private int catchAmount;
	private double rarity;
	private double wildlife;
	private Player p;
	
	private ArrayList<Integer> queue;
	
	public Hunt(Player p, int weapon, int habitat_id) {
		this.h = World.getHabitat(habitat_id);
		this.weapon = weapon;
		this.p = p;
		Tile t = World.getTile(p.getPosition());
		wildlife = t.getWildlife();
		queue = h.getAnimals();
	}
	
	public String huntOrFish() {
		if (h.getId() < 1000) {
			return "hunt";
		} else {
			return "fish";
		}
	}
	
	public JSONObject processFish() {
		JSONArray drops =  animal.rollDrop(p, catchAmount);
		String[] choiceNames = {"stopHunting", "continueHunting"};
		Decision d = new Decision(choiceNames);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", "You filet " + catchAmount + " x " + animal.getName());
		story.put("buttons", d.buttons(p));
		
		if (Math.random() < rarity) {
			Collections.shuffle(queue);
		} else {
			queue.remove(queue.size()-1);
		}
		
		return Message.EVENT_RESPONSE(null, drops, null, null, story);
	}
	
	public JSONObject discardFish() {
		String[] choiceNames = {"stopHunting", "continueHunting"};
		Decision d = new Decision(choiceNames);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", "You discard " + catchAmount + " x " + animal.getName());
		story.put("buttons", d.buttons(p));
		
		queue.remove(queue.size()-1);
		
		return Message.EVENT_RESPONSE(null, null, null, null, story);
	}
	
	public JSONObject attack() {
		String[] choiceNames = {"stopHunting", "continueHunting"};
		Decision d = new Decision(choiceNames);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("buttons", d.buttons(p));
		JSONArray drops;
		
		if (Player.randomInt(100) < animal.getAggression()) {
			if (animal.fight(p)) {
				story.put("text", "You have defeated " + animal.getName());
				drops = animal.rollDrop(p, 1);
			} else {
				story.put("text",  animal.getName() + " has fought back and injured your party member");
				drops = null;
			}
		} else {
			if (animal.flee(p)) {
				story.put("text", animal.getName() + " attempts to flee " + "but you chased it down");
				drops = animal.rollDrop(p, 1);
			} else {
				story.put("text",  animal.getName() + " has escaped your party");
				drops = null;
			}
		}
		
		if (Math.random() < rarity) {
			Collections.shuffle(queue);
		} else {
			queue.remove(queue.size()-1);
		}
		
		return Message.EVENT_RESPONSE(null, drops, null, null, story);
	}
	
	public JSONObject escape() {
		
		String[] choiceNames = {"stopHunting", "continueHunting"};
		Decision d = new Decision(choiceNames);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", "You have escaped " + animal.getName());
		story.put("buttons", d.buttons(p));
		
		queue.remove(queue.size()-1);
		
		return Message.EVENT_RESPONSE(null, null, null, null, story);
		
	}
	
	public JSONObject getNext() {
		System.out.println("test");
		while (!queue.isEmpty()) {
			int last = queue.size()-1;
			int id = queue.get(last);
			rarity = h.getAnimalRarity(id) * wildlife;
			//System.out.println(id + ":" + rarity);
			//System.out.println(queue);
			if (Math.random() < rarity) {
				animal = World.getAnimal(id);
				if (animal.isFish()) {
					catchAmount = 1 + Player.randomInt(animal.getNumber() - 1);
					String[] choiceNames = {"process", "discard"};
					Decision d = new Decision(choiceNames);
					p.setDecision(d);
					JSONObject story = new JSONObject();
					story.put("text", "You catch " + catchAmount + " x " + animal.getName());
					story.put("buttons", d.buttons(p));
					return Message.EVENT_RESPONSE(null, null, null, null, story);
				} else {
					String[] choiceNames = {"attack", "escape"};
					Decision d = new Decision(choiceNames);
					p.setDecision(d);
					JSONObject story = new JSONObject();
					story.put("text", "You encounter a wild " + animal.getName());
					story.put("buttons", d.buttons(p));
					return Message.EVENT_RESPONSE(null, null, null, null, story);
				}
			} else {
				queue.remove(last);
			}
		}
		JSONObject story = new JSONObject();
		story.put("text", "You fail to find anything and conclude your " + huntOrFish() + "ing endeavor." );
		return Message.EVENT_RESPONSE(null, null, null, null, story);
	}

}