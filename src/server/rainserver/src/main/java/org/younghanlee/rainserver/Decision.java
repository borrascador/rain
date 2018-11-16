package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class Decision {
	
	public String story; // Story text to be shown to player
	
	// static map with all possible choices (in the entire game)
	public static HashMap<String, IChoice> choiceMap; 
	
	// choices for this decision only
	private IChoice[] choices;
	
	// multipliers to be shown for each choice
	// choiceMultipliers[i] corresponds to choices[i]
	private ArrayList<ArrayList<Multiplier>> choiceMultipliers;
	

	public Decision(String[] choiceNames, String story, Player p) {
		this.story = story;
		int n = choiceNames.length;
		this.choices = new IChoice[n];
		this.choiceMultipliers = new ArrayList<ArrayList<Multiplier>>();
		for (int i=0; i<n; i++) {
			// For each choice name in choiceNames, use the string as a key
			// to look it up in the static choiceMap
			this.choices[i] = choiceMap.get(choiceNames[i]);
			// Each IChoice object has a method generateMultipliers(Player p)
			this.choiceMultipliers.add(choiceMap.get(choiceNames[i]).generateMultipliers(p));
		}
	}
	
	public static void addChoice(String s, IChoice c) {
		choiceMap.put(s, c);
	}
	
	public JSONObject choose(Player p, int n) {
		// Each IChoice object has a method result(Player p, ArrayList<Multiplier> multipliers)
		// This is what is evaluated when you pick this choice.
		return choices[n].result(p, choiceMultipliers.get(n));
	}
	
	public static void createDecisionHashMap() {
		choiceMap = new HashMap<String, IChoice>();
		choiceMap.put("respawn", respawn);
		
		// Adding a IChoice object for each tribe
		for (int i=0; i<World.numTribes(); i++) {
			final int index = i;
			IChoice t = new IChoice() {
				public String getText(Player p) {

					return World.getTribe(index).toString();
				}
				public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
					p.removeDecision();
					p.setTribe(index);
					Tribe tribe = World.getTribe(index);
					JSONArray inventory = tribe.generateInventory(p);
					JSONArray party = tribe.generateParty(p);
					
					p.setPosition(World.getTribe(index).getRespawnPosition());
					p.setX(Util.randomInt(31));
					p.setY(Util.randomInt(31));
					Tile t = World.getTile(p.getPosition());
					for (int i : t.inSight(p.getSight())) {
						p.addTilesSeen(i);
					}
					t.addVisitor(p);
					t.updateNeighbors(p, 1);
					
					JSONObject payload = new JSONObject();
					JSONArray tiles = p.inSightArray();
					payload.put("position", p.getPosition());
					payload.put("xCoord", p.getX());
					payload.put("yCoord", p.getY());
					payload.put("tiles", tiles);
					JSONObject story = new JSONObject();
					story.put("text", "You have chosen " + World.getTribe(index).getName());
					payload.put("story", story);
					payload.put("inventory", inventory);
					payload.put("party", party);
					return Message.EVENT_RESPONSE(payload);
				}
				public ArrayList<Multiplier> generateMultipliers(Player p){
					return null;
				}
			};
			choiceMap.put("selectTribe"+ i, t);
		}
	}

	
	public static IChoice respawn = new IChoice() {
		public String getText(Player p) {
			return "Start over from " + p.getTribe().getName();
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			p.removeDecision();
			return p.respawn();
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public void setStoryText(String story) {
		this.story = story;
	}

	public String getStoryText() {
		return story;
	}
	
	
	public JSONArray multipliersToJSONArray(int index) {
		JSONArray ja = new JSONArray();
		ArrayList<Multiplier> ms = choiceMultipliers.get(index);
		if (ms != null) {
			for (Multiplier m : ms) {
				ja.put(m.toJSONObject());
			}
			return ja;
		} else return null;
	}
	
	// Each IChoice has a method getText()
	// Create a JSONArray of buttons
	public JSONArray buttons (Player p) {
		JSONArray buttonArray = new JSONArray();
		for (int i=0; i<choices.length; i++) {
			JSONObject button = new JSONObject();
			button.put("text", choices[i].getText(p));
			JSONArray multipliers = multipliersToJSONArray(i);
			if (multipliers != null) {
				button.put("multipliers", multipliersToJSONArray(i));
			}
			button.put("id", i);
			buttonArray.put(button);
		}
		return buttonArray;
	}
	
	public JSONObject payload(Player p) {
		JSONObject payload = new JSONObject();
		JSONObject storyObject = new JSONObject();
		storyObject.put("text", story);
		storyObject.put("buttons", buttons(p));
		payload.put("story", storyObject);
		return payload;
	}
	
	public static JSONObject payload(String s) {
		JSONObject payload = new JSONObject();
		JSONObject storyObject = new JSONObject();
		storyObject.put("text", s);
		payload.put("story", storyObject);
		return payload;
	}
	
	public static void main(String[] args){
		
	}
}