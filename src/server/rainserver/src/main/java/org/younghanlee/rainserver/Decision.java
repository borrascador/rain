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
		choiceMap.put("process", process);
		choiceMap.put("discard", discard);
		choiceMap.put("stopHunting", stopHunting);
		choiceMap.put("continueHunting", continueHunting);
		choiceMap.put("fishDeep", fishDeep);
		choiceMap.put("fishShallow", fishShallow);
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
	
	public static IChoice stopHunting = new IChoice() {
		public String getText(Player p) {
			String huntOrFish = p.getHunt().huntOrFish();
			return "Stop " + huntOrFish;
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			p.removeDecision();
			JSONObject story = new JSONObject();
			story.put("text", "You have stopped " + p.stopHunting());
			JSONObject payload = new JSONObject();
			payload.put("story", story);
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice continueHunting = new IChoice() {
		public String getText(Player p) {
			String huntOrFish = p.getHunt().huntOrFish();
			return "Continue " + huntOrFish + " in " + p.getHunt().publicHabitat();
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			return p.getHunt().getNext();
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			ArrayList<Multiplier> multipliers = new ArrayList<Multiplier>();
			Multiplier hunting = new Multiplier("hunting", 0, p.getHunt().huntingMultiplier());
			multipliers.add(hunting);
			Multiplier tracking = new Multiplier("tracking", 0, p.getHunt().trackingMultiplier());
			multipliers.add(tracking);
			return multipliers;
		}
	};
	
	public static IChoice process = new IChoice() {
		public String getText(Player p) {
			return "Process";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			return p.getHunt().processFish();
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice discard = new IChoice() {
		public String getText(Player p) {
			return "Discard";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			return p.getHunt().discardFish();
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice fishDeep = new IChoice() {
		public String getText(Player p) {
			return "Fish in Deeper waters";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			Tile t = World.getTile(p.getPosition());
			int habitat_id = t.getHabitat("fishing");
			p.startHunting("fishing", 0, habitat_id);
			return p.getHunt().getNext();
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			ArrayList<Multiplier> multipliers = new ArrayList<Multiplier>();
			Multiplier fishing = new Multiplier("fishing", 0, Hunt.fishingMultiplier(p));
			multipliers.add(fishing);
			return multipliers;
		}
	};
	
	public static IChoice fishShallow = new IChoice() {
		public String getText(Player p) {
			return "Fish in Shallow waters";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			Tile t = World.getTile(p.getPosition());
			int habitat_id = t.getHabitat("fishing");
			p.startHunting("fishing", 0, habitat_id);
			return p.getHunt().getNext();
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			ArrayList<Multiplier> multipliers = new ArrayList<Multiplier>();
			Multiplier fishing = new Multiplier("fishing", 0, Hunt.fishingMultiplier(p));
			multipliers.add(fishing);
			return multipliers;
		}
	};
	
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
	
	public static void main(String[] args){
		
	}
}