package org.younghanlee.rainserver;

import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class Decision {
	
	public interface Choice{
		String getText(Player p);
		JSONObject result(Player p);
	}
	
	public String story;
	public static HashMap<String, Choice> choiceMap;
	
	private Choice[] choices;
	
	
	public Decision(String[] choiceNames, String story) {
		this.story = story;
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
		
		for (int i=0; i<World.numTribes(); i++) {
			final int index = i;
			Choice t = new Choice() {
				public String getText(Player p) {

					return World.getTribe(index).toString();
				}
				public JSONObject result(Player p) {
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
			};
			choiceMap.put("selectTribe"+ i, t);
		}
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
			p.removeDecision();
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
	
	public void setStoryText(String story) {
		this.story = story;
	}

	public String getStoryText() {
		return story;
	}
	
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