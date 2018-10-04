package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Map.Entry;

import org.json.JSONArray;
import org.json.JSONObject;

public class Hunt{
	private String huntOrFish;
	private int weapon;
	private Habitat h;
	private Animal animal;
	private int catchAmount;
	private double rarity;
	private double wildlife;
	private Player p;
	
	private ArrayList<Integer> queue;
	
	public Hunt(String huntOrFish, Player p, int weapon, int habitat_id) {
		this.huntOrFish = huntOrFish;
		this.h = World.getHabitat(habitat_id);
		this.weapon = weapon;
		this.p = p;
		Tile t = World.getTile(p.getPosition());
		wildlife = t.getWildlife();
		queue = h.getAnimals();
	}
	
	public String huntOrFish() {
		return huntOrFish;
	}
	
	public String publicHabitat() {
		return h.getPublicType();
	}
	
	public float huntingMultiplier() {
		float multiplier = 1.0f;
		for (int i=0; i<p.partySize(); i++) {
			Member m = World.getMember(p.getPartyMember(i));
			if (m.hasSkill(0)){
				multiplier += m.skillRank(0) * .05;
			}
			multiplier += m.getJeito() *.005;
		}
		return multiplier;
	}
	
	public float trackingMultiplier() {
		float multiplier = 1.0f;
		for (int i=0; i<p.partySize(); i++) {
			Member m = World.getMember(p.getPartyMember(i));
			if (m.hasSkill(1)){
				multiplier += m.skillRank(1) * .05;
			}
			multiplier += m.getJeito() *.005;
		}
		return multiplier;
	}
	
	public float fishingMultiplier() {
		float multiplier = 1.0f;
		for (int i=0; i<p.partySize(); i++) {
			Member m = World.getMember(p.getPartyMember(i));
			if (m.hasSkill(3)){
				multiplier += m.skillRank(3) * .05;
			}
		}
		return multiplier;
	}
	
	public JSONObject processFish() {
		JSONArray drops =  animal.rollDrop(p, catchAmount);
		String[] choiceNames = {"stopHunting", "continueHunting"};
		String storyText = "You filet " + catchAmount + " x " + animal.getName();
		Decision d = new Decision(choiceNames, storyText);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", storyText);
		story.put("buttons", d.buttons(p));
		
		if (Math.random() < rarity) {
			Collections.shuffle(queue);
		} else {
			queue.remove(queue.size()-1);
		}
		
		JSONObject payload = new JSONObject();
		payload.put("inventory", drops);
		payload.put("story", story);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public JSONObject discardFish() {
		String[] choiceNames = {"stopHunting", "continueHunting"};
		String storyText = "You discard " + catchAmount + " x " + animal.getName();
		Decision d = new Decision(choiceNames, storyText);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", storyText);
		story.put("buttons", d.buttons(p));
		
		queue.remove(queue.size()-1);
		
		JSONObject payload = new JSONObject();
		payload.put("story", story);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public JSONObject attack() {
		String[] choiceNames = {"stopHunting", "continueHunting"};
		Decision d = new Decision(choiceNames, "");
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("buttons", d.buttons(p));
		JSONArray drops;
		JSONArray party;
		JSONArray tiles = null;
		JSONObject payload = new JSONObject();
		String death = "";
		String storyText = "";
		
		if (Util.randomInt(100) < animal.getAggression()) {
			if (animal.fight(p, huntingMultiplier())) {
				story.put("text", "You have defeated " + animal.getName());
				drops = animal.rollDrop(p, 1);
				party = null;
			} else {
				drops = null;
				party = null;
				int members_injured = 0;
				JSONArray damage = new JSONArray();
				for (int i=0; i<p.partySize(); i++) {
					int id = p.getPartyMember(i);
					Member m = World.getMember(id);
					if (Util.randomInt(20) > m.getStrength()) {
						members_injured++;
						int health_loss = -1 * (Util.randomInt(2) + 1);
						System.out.println("test4");
						JSONObject jo = m.change(id, p, health_loss, 0, null, null, null);
						System.out.println("test5");
						if (jo.getInt("health") == 0) {
							if (p.partySize() == 0) {
								death += "Despite all odds, your last member " + m.getName() + " manages to survive and return home.";
								payload.put("position", p.respawn(id));
								tiles = p.inSightArray();
								jo.put("health", 1);
								story.remove("buttons");
							} else {
								death += m.getName() + " has perished. ";
							}
						}
						damage.put(jo);
					}
				}
				if (members_injured == 0) {
					storyText = animal.getName() + " has fought back, but you manage to retreat safely.";
				} else {
					party = damage;
					String plural = "s";
					if (members_injured == 1) {
						plural = "";
					}	
					storyText = animal.getName() + " has fought back and injured your party member" + plural + ". " + death;
				}
			}
		} else {
			if (animal.flee(p)) {
				storyText = animal.getName() + " attempts to flee " + "but you chased it down";
				drops = animal.rollDrop(p, 1);
				party = null;
			} else {
				storyText = animal.getName() + " has escaped your party";
				drops = null;
				party = null;
			}
		}
		
		if (Math.random() < rarity) {
			Collections.shuffle(queue);
		} else {
			queue.remove(queue.size()-1);
		}
		
		story.put("text", storyText);
		p.getDecision().setStoryText(storyText);
		payload.put("inventory", drops);
		payload.put("story", story);
		payload.put("party", party);
		payload.put("tiles", tiles);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public JSONObject escape() {
		
		String[] choiceNames = {"stopHunting", "continueHunting"};
		String storyText = "You have escaped " + animal.getName();
		Decision d = new Decision(choiceNames, storyText);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", storyText);
		story.put("buttons", d.buttons(p));
		
		queue.remove(queue.size()-1);

		JSONObject payload = new JSONObject();
		payload.put("story", story);
		return Message.EVENT_RESPONSE(payload);
		
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
					catchAmount = 1 + Util.randomInt(animal.getNumber() - 1);
					String[] choiceNames = {"process", "discard"};
					String storyText = "Fishing in habitat: " + h.getPublicType() +"\n\nYou catch " + catchAmount + " x " + animal.getName();
					Decision d = new Decision(choiceNames, storyText);
					d.addMultiplier("fishing", fishingMultiplier());
					p.setDecision(d);
					JSONObject story = new JSONObject();
					story.put("text", storyText);
					story.put("buttons", d.buttons(p));
					JSONObject payload = new JSONObject();
					story.put("multipliers", d.getMultipliers());
					payload.put("story", story);
					return Message.EVENT_RESPONSE(payload);
				} else {
					String[] choiceNames = {"attack", "escape"};
					String storyText = "Hunting in habitat: " + h.getPublicType() + "\n\nYou encounter a wild " + animal.getName();
					Decision d = new Decision(choiceNames, storyText);
					d.addMultiplier("hunting", huntingMultiplier());
					d.addMultiplier("tracking", trackingMultiplier());
					p.setDecision(d);
					JSONObject story = new JSONObject();
					story.put("text", storyText);
					story.put("buttons", d.buttons(p));
					JSONObject payload = new JSONObject();
					story.put("multipliers", d.getMultipliers());
					payload.put("story", story);
					return Message.EVENT_RESPONSE(payload);
				}
			} else {
				queue.remove(last);
			}
		}
		JSONObject story = new JSONObject();
		story.put("text", "You fail to find anything and conclude your " + huntOrFish() + " endeavor." );
		JSONObject payload = new JSONObject();
		payload.put("story", story);
		return Message.EVENT_RESPONSE(payload);
	}

}