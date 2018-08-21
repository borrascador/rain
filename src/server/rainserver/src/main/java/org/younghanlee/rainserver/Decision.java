package org.younghanlee.rainserver;

import org.json.JSONArray;
import org.json.JSONObject;

public class Decision {
	
	public interface Choice{
		String getText();
		JSONObject result(Player p);
	}
	
	private Choice[] choices;
	
	
	public Decision(Player p, int n) {
		this.choices = new Choice[n];
	}
	
	public JSONObject choose(int n, Player p) {
		return choices[n].result(p);
	}
	
	public static Choice attack = new Choice() {
		public String getText() {
			return "attack";
		}
		public JSONObject result(Player p) {
			Animal a = p.getHunting();
			if (Player.randomInt(100) > a.getAggression()) {
				return a.fight(p);
			} else {
				return a.flee(p);
			}
		}
	};
	
	public static Choice escape = new Choice() {
		public String getText() {
			return "escape";
		}
		public JSONObject result(Player p) {
			String name = p.stopHunting();
			JSONObject story = new JSONObject();
			story.put("text", "You have escaped from: "+ name);
			return Message.EVENT_RESPONSE(null, null, null, null, story);
		}
	};
	
	public static Choice fishDeep = new Choice() {
		public String getText() {
			return "Fish in Deeper waters";
		}
		public JSONObject result(Player p) {
			JSONObject story = new JSONObject();
			story.put("text", "Success");
			return Message.EVENT_RESPONSE(null, null, null, null, story);
		}
	};
	
	public static Choice fishShallow = new Choice() {
		public String getText() {
			return "Fish in Shallow waters";
		}
		public JSONObject result(Player p) {
			JSONObject story = new JSONObject();
			story.put("text", "Success");
			return Message.EVENT_RESPONSE(null, null, null, null, story);
		}
	};
	
	public void addAttackChoice(int index) {
		choices[index] = attack;
	}
	
	public void addEscapeChoice(int index) {
		choices[index] = escape;
	}
	
	public void addFishShallowChoice(int index) {
		choices[index] = fishShallow;
	}
	
	public void addFishDeepChoice(int index) {
		choices[index] = fishDeep;
	}
	
	public JSONArray buttons () {
		JSONArray buttonArray = new JSONArray();
		for (int i=0; i<choices.length; i++) {
			JSONObject button = new JSONObject();
			button.put("text", choices[i].getText());
			button.put("id", i);
			buttonArray.put(button);
		}
		return buttonArray;
	}
	
	public static void main(String[] args){
		
	}
}