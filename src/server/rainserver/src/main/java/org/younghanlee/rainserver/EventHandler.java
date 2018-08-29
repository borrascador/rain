package org.younghanlee.rainserver;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class EventHandler {
	public static void handleRequest (JSONObject event, Connection connection){
		String event_type = event.getString("type");
		Player p = connection.getPlayer();
		Tile t;
		int id;
		JSONArray tiles;
		JSONObject story;
		JSONObject response;
		switch (event_type) {
			case "plant":
				id = event.getInt("id");
				response = World.getTile(p.getPosition()).plant(id, p);
				connection.send(response.toString());
				break;
			case "harvest":
				id = event.getInt("id");
				response = World.getTile(p.getPosition()).harvest(id, p);
				connection.send(response.toString());
				break;
			case "move":
				int destination = event.getInt("id");
				int range = 1;
				
				if (p.move(range, destination)) {
					tiles = p.inSightArray();
					HashMap<String, Integer> positionHashMap = new HashMap<String, Integer>();
					positionHashMap.put("position", destination);
					response = Message.EVENT_RESPONSE(null, null, tiles, positionHashMap, null);
				} else {
					response = Message.ERROR(308, null);
				}
				connection.send(response.toString());
				break;
			case "pace":
				int pace = event.getInt("id");
				p.setPace(pace);
				HashMap<String, Integer> paceHashMap = new HashMap<String, Integer>();
				paceHashMap.put("pace", p.getPace());
				response = Message.EVENT_RESPONSE(null, null, null, paceHashMap, null);
				connection.send(response.toString());
				break;
			case "rations":
				int rations = event.getInt("id");
				p.setRations(rations);
				HashMap<String, Integer> rationsHashMap = new HashMap<String, Integer>();
				rationsHashMap.put("rations", p.getRations());
				response = Message.EVENT_RESPONSE(null, null, null, rationsHashMap, null);
				connection.send(response.toString());
				break;
			case "hunt":
				id = event.getInt("id");
				t = World.getTile(p.getPosition());
				if (t.hasHabitat("hunting")){
					int habitat_id = t.getHabitat("hunting");
					p.startHunting("hunting", id, habitat_id);
					response = p.getHunt().getNext();
					connection.send(response.toString());
				}
				break;
			case "fish":
				id = event.getInt("id");
				t = World.getTile(p.getPosition());
				if (t.hasHabitat("fishing")){
					int depth = t.getDepth();
					story = new JSONObject();
					String[] choiceNames = {"fishDeep", "fishShallow"};
					Decision d = new Decision(choiceNames);
					p.setDecision(d);;
					story.put("text", "You estimate the water here to be at least " + depth +" deep.");
					story.put("buttons", p.getDecision().buttons(p));
					response = Message.EVENT_RESPONSE(null, null, null, null, story);
					connection.send(response.toString());
				}
				break;
			case "decision":
				id = event.getInt("id");
				response = p.getDecision().choose(p, id);
				connection.send(response.toString());
				break;
			default:
				System.out.println("Error: unrecognized event type");
				break;
		}
	}
}