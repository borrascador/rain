package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class Decision {
	
	public String story; // Story text to be shown to player
	
	// static map with all possible choices (except party selection)
	public static HashMap<String, IChoice> choiceMap; 
	public static HashMap<String, IChoice> partyMap;
	
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
	
	public Decision(IChoice [] choices, String story) {
		this.story = story;
		this.choices = choices;
		this.choiceMultipliers = new ArrayList<ArrayList<Multiplier>>();
		for (int i=0; i<choices.length; i++) {
			choiceMultipliers.add(null);
		}
	}
	
	public static void addChoice(String s, IChoice c) {
		choiceMap.put(s, c);
	}
	
	public static void addPartyChoice(String s, IChoice c) {
		partyMap.put(s, c);
	}
	
	public JSONObject choose(Player p, int n) {
		// Each IChoice object has a method result(Player p, ArrayList<Multiplier> multipliers)
		// This is what is evaluated when you pick this choice.
		return choices[n].result(p, choiceMultipliers.get(n));
	}
	
	public static void createDecisionHashMap() {
		choiceMap = new HashMap<String, IChoice>();
		partyMap = new HashMap<String, IChoice>();
		choiceMap.put("respawn", respawn);
		choiceMap.put("newParty", newParty);
		choiceMap.put("joinParty", joinParty);
		
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
					JSONArray party = tribe.generateParty(p, World.getTribe(index).getRespawnPosition());
					
					JSONObject payload = new JSONObject();
					JSONObject story = new JSONObject();
					story.put("text", "You have chosen " + World.getTribe(index).getName());
					payload.put("story", story);
					payload.put("inventory", inventory);
					payload.put("party", party);
					Member member = World.getMember(p.getMember());
					payload.put("tiles", member.inSightTiles());
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
	
	public static IChoice newParty = new IChoice() {
		public String getText(Player p) {
			return "Create a new party";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			String [] choiceNames = new String[World.numTribes()];
			for (int i=0; i<World.numTribes(); i++) {
				choiceNames[i] = "selectTribe"+ i;
			}
			String story = "Choose your tribe.";
			Decision d = new Decision(choiceNames, story, p);
			p.setDecision(d);
			JSONObject payload = d.payload(p);
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice joinParty = new IChoice() {
		public String getText(Player p) {
			return "Join an Existing Party";
		}
		Decision d;
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			if (partyMap.isEmpty()) {
				String[] choiceNames = new String[]{"newParty"};
				String story = "No parties exist. Create your own party.";
				d = new Decision(choiceNames, story, p);
				p.setDecision(d);
			} else {
				IChoice[] choices = partyMap.values().toArray(new IChoice[partyMap.size()]);
				String story = "Choose a party to join";
				d = new Decision(choices, story);
				p.setDecision(d);
			}
			JSONObject payload = d.payload(p);
			return Message.EVENT_RESPONSE(payload);
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
		System.out.println(choices.length);
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