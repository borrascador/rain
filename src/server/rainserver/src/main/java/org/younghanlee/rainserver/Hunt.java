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
		
		JSONObject payload = new JSONObject();
		payload.put("drops", drops);
		payload.put("story", story);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public JSONObject discardFish() {
		String[] choiceNames = {"stopHunting", "continueHunting"};
		Decision d = new Decision(choiceNames);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", "You discard " + catchAmount + " x " + animal.getName());
		story.put("buttons", d.buttons(p));
		
		queue.remove(queue.size()-1);
		
		JSONObject payload = new JSONObject();
		payload.put("story", story);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public JSONObject attack() {
		String[] choiceNames = {"stopHunting", "continueHunting"};
		Decision d = new Decision(choiceNames);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("buttons", d.buttons(p));
		JSONArray drops;
		JSONArray party;
		String death = "";
		JSONArray tiles = null;
		JSONObject payload = new JSONObject();
		
		// if (Player.randomInt(100) < animal.getAggression()) {
		if (true) {
			if (animal.fight(p)) {
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
					if (Math.random() > 0.6) {
						members_injured++;
						int health_loss = -1 * (Player.randomInt(2) + 1);
						JSONObject jo = m.change(id, p, health_loss, 0);
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
					story.put("text",  animal.getName() + " has fought back, but you manage to retreat safely.");
				} else {
					party = damage;
					String plural = "s";
					if (members_injured == 1) {
						plural = "";
					}	
					story.put("text",  animal.getName() + " has fought back and injured your party member" + plural + ". " + death);
				}
			}
		} else {
			if (animal.flee(p)) {
				story.put("text", animal.getName() + " attempts to flee " + "but you chased it down");
				drops = animal.rollDrop(p, 1);
				party = null;
			} else {
				story.put("text",  animal.getName() + " has escaped your party");
				drops = null;
				party = null;
			}
		}
		
		if (Math.random() < rarity) {
			Collections.shuffle(queue);
		} else {
			queue.remove(queue.size()-1);
		}
		
		payload.put("drops", drops);
		payload.put("story", story);
		payload.put("party", party);
		payload.put("tiles", tiles);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public JSONObject escape() {
		
		String[] choiceNames = {"stopHunting", "continueHunting"};
		Decision d = new Decision(choiceNames);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", "You have escaped " + animal.getName());
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
					catchAmount = 1 + Player.randomInt(animal.getNumber() - 1);
					String[] choiceNames = {"process", "discard"};
					Decision d = new Decision(choiceNames);
					p.setDecision(d);
					JSONObject story = new JSONObject();
					story.put("text", "Fishing in habitat: " + h.getPublicType() +"\n\nYou catch " + catchAmount + " x " + animal.getName());
					story.put("buttons", d.buttons(p));
					JSONObject payload = new JSONObject();
					payload.put("story", story);
					return Message.EVENT_RESPONSE(payload);
				} else {
					String[] choiceNames = {"attack", "escape"};
					Decision d = new Decision(choiceNames);
					p.setDecision(d);
					JSONObject story = new JSONObject();
					story.put("text", "Hunting in habitat: " + h.getPublicType() + "\n\nYou encounter a wild " + animal.getName());
					story.put("buttons", d.buttons(p));
					JSONObject payload = new JSONObject();
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