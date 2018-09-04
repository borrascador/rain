package org.younghanlee.rainserver;

import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class Decision {
	
	public interface Choice{
		String getText(Player p);
		JSONObject result(Player p);
	}
	
	public static HashMap<String, Choice> choiceMap;
	
	private Choice[] choices;
	
	
	public Decision(String[] choiceNames) {
		int n = choiceNames.length;
		this.choices = new Choice[n];
		for (int i=0; i<n; i++) {
			this.choices[i] = choiceMap.get(choiceNames[i]);
		}
	}
	
	public JSONObject choose(Player p, int n) {
		return choices[n].result(p);
	}
	
	public static void createDecisionHashMap() {
		choiceMap = new HashMap<String, Choice>();
		choiceMap.put("attack", attack);
		choiceMap.put("escape", escape);
		choiceMap.put("process", process);
		choiceMap.put("discard", discard);
		choiceMap.put("stopHunting", stopHunting);
		choiceMap.put("continueHunting", continueHunting);
		choiceMap.put("fishDeep", fishDeep);
		choiceMap.put("fishShallow", fishShallow);
	}
	
	public static Choice attack = new Choice() {
		public String getText(Player p) {
			return "attack";
		}
		public JSONObject result(Player p) {
			return p.getHunt().attack();
		}
	};
	
	public static Choice stopHunting = new Choice() {
		public String getText(Player p) {
			String huntOrFish = p.getHunt().huntOrFish();
			return "Stop " + huntOrFish;
		}
		public JSONObject result(Player p) {
			JSONObject story = new JSONObject();
			story.put("text", "You have stopped " + p.stopHunting());
			JSONObject payload = new JSONObject();
			payload.put("story", story);
			return Message.EVENT_RESPONSE(payload);
		}
	};
	
	public static Choice continueHunting = new Choice() {
		public String getText(Player p) {
			String huntOrFish = p.getHunt().huntOrFish();
			return "Continue " + huntOrFish + " in " + p.getHunt().publicHabitat();
		}
		public JSONObject result(Player p) {
			return p.getHunt().getNext();
		}
	};
	
	public static Choice process = new Choice() {
		public String getText(Player p) {
			return "Process";
		}
		public JSONObject result(Player p) {
			return p.getHunt().processFish();
		}
	};
	
	public static Choice discard = new Choice() {
		public String getText(Player p) {
			return "Discard";
		}
		public JSONObject result(Player p) {
			return p.getHunt().discardFish();
		}
	};
	
	public static Choice escape = new Choice() {
		public String getText(Player p) {
			return "escape";
		}
		public JSONObject result(Player p) {
			return p.getHunt().escape();
		}
	};
	
	public static Choice fishDeep = new Choice() {
		public String getText(Player p) {
			return "Fish in Deeper waters";
		}
		public JSONObject result(Player p) {
			Tile t = World.getTile(p.getPosition());
			int habitat_id = t.getHabitat("fishing");
			p.startHunting("fishing", 0, habitat_id);
			return p.getHunt().getNext();
		}
	};
	
	public static Choice fishShallow = new Choice() {
		public String getText(Player p) {
			return "Fish in Shallow waters";
		}
		public JSONObject result(Player p) {
			Tile t = World.getTile(p.getPosition());
			int habitat_id = t.getHabitat("fishing");
			p.startHunting("fishing", 0, habitat_id);
			return p.getHunt().getNext();
		}
	};

	
	public JSONArray buttons (Player p) {
		JSONArray buttonArray = new JSONArray();
		for (int i=0; i<choices.length; i++) {
			JSONObject button = new JSONObject();
			button.put("text", choices[i].getText(p));
			button.put("id", i);
			buttonArray.put(button);
		}
		return buttonArray;
	}
	
	public static void main(String[] args){
		
	}
}