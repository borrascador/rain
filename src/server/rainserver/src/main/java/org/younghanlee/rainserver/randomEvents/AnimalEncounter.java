package org.younghanlee.rainserver.randomEvents;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Random;

import org.json.JSONArray;
import org.json.JSONObject;
import org.younghanlee.rainserver.*;

public class AnimalEncounter{
	public static IChoice animalEncounter_attack = new IChoice() {
		public String getText(Player p) {
			return "attack";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			return attack(p);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			ArrayList<Multiplier> multipliers = new ArrayList<Multiplier>();
			Multiplier hunting = new Multiplier("hunting", 0, huntingMultiplier(p));
			multipliers.add(hunting);
			return multipliers;
		}
	};
	
	public static IChoice animalEncounter_escape = new IChoice() {
		public String getText(Player p) {
			return "escape";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			return escape(p);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static float huntingMultiplier(Player p) {
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
	
	public static float trackingMultiplier(Player p) {
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
	
	public static IChoice stopHunting = new IChoice() {
		public String getText(Player p) {
			return "Stop Hunting";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			p.removeDecision();
			p.stopHunting();
			JSONObject story = new JSONObject();
			story.put("text", "You have stopped hunting.");
			JSONObject payload = new JSONObject();
			payload.put("story", story);
			payload.put("hunting", false);
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice continueHunting = new IChoice() {
		public String getText(Player p) {
			return "Continue hunting";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			JSONObject payload = new JSONObject();
			payload.put("hunting", true);
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			ArrayList<Multiplier> multipliers = new ArrayList<Multiplier>();
			Multiplier hunting = new Multiplier("hunting", 0, huntingMultiplier(p));
			multipliers.add(hunting);
			Multiplier tracking = new Multiplier("tracking", 0, trackingMultiplier(p));
			multipliers.add(tracking);
			return multipliers;
		}
	};
	
	public static JSONObject attack(Player p) {
		Animal animal = (Animal) p.getEventArg("animalEncounter");
		
//		String[] choiceNames = {"stopHunting", "continueHunting"};
//		Decision d = new Decision(choiceNames, "", p);
//		p.setDecision(d);
		JSONObject story = new JSONObject();
//		story.put("buttons", d.buttons(p));
		JSONArray drops;
		JSONArray party;
		JSONArray tiles = null;
		JSONObject payload = new JSONObject();
		String death = "";
		String storyText = "";
		if (Util.randomInt(100) < animal.getAggression()) {
			if (animal.fight(p, huntingMultiplier(p))) {
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
					if (Util.randomInt(20) > 5) {
						members_injured++;
						int health_loss = -1 * (Util.randomInt(2) + 1);
						JSONObject jo = m.change(id, p, health_loss, 0, null, null, null);
						if (jo.getInt("health") == 0) {
							if (p.partySize() == 0) {
								death += "Your last member " + m.getName() + " has perished.";
								drops = p.emptyInventory();
								p.setDecision(new Decision(new String[]{"respawn"}, null, p));
								story.put("buttons", p.getDecision().buttons(p));
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

		story.put("text", storyText);
		p.getDecision().setStoryText(storyText);
		// Item degradation
		JSONArray inventory = Util.concat(drops, p.degrade());
		if (inventory != null) {
			payload.put("inventory", inventory);
		}
		payload.put("story", story);
		payload.put("party", party);
		payload.put("tiles", tiles);
		return Message.EVENT_RESPONSE(payload);
	}
	
	public static JSONObject escape(Player p) {
		Animal animal = (Animal) p.getEventArg("animalEncounter");
		
		String[] choiceNames = {"stopHunting", "continueHunting"};
		String storyText = "You have escaped " + animal.getName();
		
		Decision d = new Decision(choiceNames, storyText, p);
		p.setDecision(d);
		JSONObject story = new JSONObject();
		story.put("text", storyText);
		story.put("buttons", d.buttons(p));

		JSONObject payload = new JSONObject();
		payload.put("story", story);
		return Message.EVENT_RESPONSE(payload);
		
	}
	
	public static IRandomEvent animalAttack = new IRandomEvent () {
		public double generateChance(Player p) {
			return 20;
		}
		public JSONObject result(Player p) {
			Tile t = World.getTile(p.getPosition());
			Habitat h = World.getHabitat(t.getHabitat("hunting"));
			Animal animal = h.randomAnimal(50);
			if (animal == null) {
				return null;
			}
			p.setEventArg("animalEncounter", animal);

			String[] choiceNames = {"animalEncounter_attack", "animalEncounter_escape"};
			String storyText = "You have been attacked by a wild " + animal.getName();
			Decision d = new Decision(choiceNames, storyText, p);
			p.setDecision(d);
			JSONObject story = new JSONObject();
			story.put("text", storyText);
			story.put("buttons", d.buttons(p));
			JSONObject payload = new JSONObject();
			payload.put("story", story);
			return payload;
		}
	};
	
	public static IRandomEvent animalHunt = new IRandomEvent () {
		public double generateChance(Player p) {
			return 100;
		}
		public JSONObject result(Player p) {		
			Tile t = World.getTile(p.getPosition());
			Habitat h = World.getHabitat(t.getHabitat("hunting"));
			Animal animal = h.randomAnimal(0);
			p.setEventArg("animalEncounter", animal);

			String[] choiceNames = {"animalEncounter_attack", "animalEncounter_escape"};
			String storyText = "Hunting in habitat: " + h.getPublicType() + "\n\nYou encounter a wild " + animal.getName();
			Decision d = new Decision(choiceNames, storyText, p);
			p.setDecision(d);
			JSONObject story = new JSONObject();
			story.put("text", storyText);
			story.put("buttons", d.buttons(p));
			JSONObject payload = new JSONObject();
			payload.put("story", story);
			return payload;
		}
	};
	
	public static void addAll() {
		Decision.addChoice("animalEncounter_attack", animalEncounter_attack);
		Decision.addChoice("animalEncounter_escape", animalEncounter_escape);
		Decision.addChoice("continueHunting", continueHunting);
		Decision.addChoice("stopHunting", stopHunting);
		RandomEvents.addRandomEvent(animalHunt, "hunting");
		RandomEvents.addRandomEvent(animalAttack, "random");
	}
}