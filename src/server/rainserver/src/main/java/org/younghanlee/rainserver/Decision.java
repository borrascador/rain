package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class Decision {
	
	
	public String story;
	public static HashMap<String, IChoice> choiceMap;
	
	private IChoice[] choices;
	private ArrayList<ArrayList<Multiplier>> choiceMultipliers;
	
	
	public Decision(String[] choiceNames, String story, Player p) {
		this.story = story;
		int n = choiceNames.length;
		this.choices = new IChoice[n];
		this.choiceMultipliers = new ArrayList<ArrayList<Multiplier>>();
		for (int i=0; i<n; i++) {
			this.choices[i] = choiceMap.get(choiceNames[i]);
			this.choiceMultipliers.add(choiceMap.get(choiceNames[i]).generateMultipliers(p));
		}
	}
	
	public static void addChoice(String s, IChoice c) {
		choiceMap.put(s, c);
	}
	
	public JSONObject choose(Player p, int n) {
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
					Tile t = World.getTile(p.getPosition());
					for (int i : t.inSight(p.getSight())) {
						p.addTilesSeen(i);
					}
					t.addVisitor(p.getName());
					t.updateNeighbors(p.getName(), Constants.MAXSIGHT);
					
					JSONObject payload = new JSONObject();
					JSONArray tiles = p.inSightArray();
					payload.put("position", p.getPosition());
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
			Multiplier fishing = new Multiplier("fishing", 0, p.getHunt().fishingMultiplier());
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
			Multiplier fishing = new Multiplier("fishing", 0, p.getHunt().fishingMultiplier());
			multipliers.add(fishing);
			return multipliers;
		}
	};
	
	public static IChoice respawn = new IChoice() {
		public String getText(Player p) {
			return "Start over from " + p.getTribe().getName();
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
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
		System.out.println("test");
		JSONArray ja = new JSONArray();
		ArrayList<Multiplier> ms = choiceMultipliers.get(index);
		if (ms != null) {
			for (Multiplier m : ms) {
				ja.put(m.toJSONObject());
			}
			return ja;
		} else return null;
	}
	
	
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