package org.younghanlee.rainserver;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class Tribe {

	private String name;
	private int partySize = 3;
	private int respawnPosition;
	private HashMap<Integer, Integer> skills;
	private HashMap<Integer, Integer> items;
	
	public Tribe(JSONObject jo) {
		name = jo.getString("name");
		respawnPosition = jo.getInt("location");
		skills = new HashMap<Integer, Integer>();
		items = new HashMap<Integer, Integer>();
		JSONArray skillsArray = jo.getJSONArray("skills");
		for (int i=0; i<skillsArray.length(); i++) {
			JSONObject skill = skillsArray.getJSONObject(i);
			int chance = skill.getInt("chance");
			int id = skill.getInt("id");
			skills.put(id, chance);
		}
		JSONArray itemsArray = jo.getJSONArray("items");
		for (int i=0; i<itemsArray.length(); i++) {
			JSONObject item = itemsArray.getJSONObject(i);
			items.put(item.getInt("id"), item.getInt("quantity"));
		}
	}
	
	public static HashMap<Integer, Tribe> readFile() {
		JSONArray ja = null;
		try {
			ja = new JSONArray(new String(Files.readAllBytes(Paths.get("json/tribes.json"))));
		} catch (IOException e) {
			System.out.println("Tribes file "+ "tribes.json" + " not found.");
			System.exit(1);
		}
		
		HashMap<Integer, Tribe> tribes = new HashMap<Integer, Tribe>();
		JSONObject tribeObject;
		for (int i = 0; i < ja.length(); i++) {
			tribeObject = ja.getJSONObject(i);
			int id = tribeObject.getInt("id");
			tribes.put(id, new Tribe(tribeObject));
		}
		return tribes;
		
	}
	
	public String getName() {
		return name;
	}
	
	public int getRespawnPosition() {
		return respawnPosition;
	}

	public JSONArray generateParty(Player p, int position) {
		JSONArray partyArray = new JSONArray();
		int w = World.getWidth();
		int xPos = position % w;
		int yPos = (position - xPos)/w;
		int ts = World.getTileSize();
		Party party = new Party();
		int index = World.createParty(party);;
		p.setParty(index);
		String partyName = "";
		for (int i=0; i<partySize; i++) {
			int x = xPos * ts + ts/2 + Util.randomInt(10) - 10;
			int y = yPos * ts + ts/2 + Util.randomInt(10) - 10;
			int member_id = p.addMember("NPC " + i, Util.randomInt(2), x, y);
			if (i==0) {
				p.setMember(member_id);
				World.getMember(member_id).setPlayer(p);
				partyName = "Party" + index;
			} else {
				party.addMember(member_id);
			}
			HashMap<Integer, Integer> newSkills = new HashMap<Integer, Integer>();
			for (int id: skills.keySet()) {
				if (Util.randomInt(100) < skills.get(id)) {
					newSkills.put(id, 1);
				} 
			}
			
			Member m = World.getMember(member_id);
			JSONObject memberObject = m.change(member_id, p, 0, 0, newSkills, null, null);
			partyArray.put(memberObject);
		}
		party.setName(partyName);
		IChoice partyChoice = new IChoice() {
			public String getText(Player p) {
				return party.getName() + "\n  Size:" + party.partySize() + "      Open spots:"  + party.emptySpaces();
			}
			public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
				p.removeDecision();
				
				
				JSONArray partyArray = p.partyToJSONArray();
				
				JSONObject payload = new JSONObject();
				JSONObject story = new JSONObject();
				story.put("text", "You have joined " + p.getParty().getName());
				payload.put("story", story);
// 				payload.put("inventory", inventory);
				payload.put("party", partyArray);
					return Message.EVENT_RESPONSE(payload);
			}
			public ArrayList<Multiplier> generateMultipliers(Player p){
				return null;
			}
		};
		Decision.addPartyChoice("partyChoice" + partyName, partyChoice);
		return partyArray;
	}

	
	public JSONArray generateInventory(Player p) {
		System.out.println("Generating inventory");
		JSONArray inventory = new JSONArray();
		for (int id: items.keySet()) {
			Util.concat(inventory, p.add(id, items.get(id)));
		}
		return inventory;
	}
	
	public String toString() {
		String s =  name +"\n  Guaranteed skills: ";
		for (int id : skills.keySet()) {
			if (skills.get(id) == 100) {
				s += World.getSkill(id).getName() + "  ";
			}
		}
		s+= "\n";
//		s+= "\n  Starting items: ";
//		for (int id : items.keySet()) {
//			s += World.getItem(id).getName() + "  ";
//		}
		return s;
	}
}