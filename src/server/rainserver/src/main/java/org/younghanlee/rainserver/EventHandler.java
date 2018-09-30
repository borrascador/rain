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
		JSONObject payload;
		JSONObject response;
		switch (event_type) {
			case "plant":
				id = event.getInt("id");
				response = World.getTile(p.getPosition()).plant(id, p);
				connection.sendJSON(response);
				break;
			case "harvest":
				id = event.getInt("id");
				response = World.getTile(p.getPosition()).harvest(id, p);
				connection.sendJSON(response);
				break;
			case "move":
				int destination = event.getInt("id");
				int range = 1;
				
				if (p.move(range, destination)) {
					tiles = p.inSightArray();
					payload = new JSONObject();
					payload.put("position", destination);
					payload.put("tiles", tiles);
					response = Message.EVENT_RESPONSE(payload);
				} else {
					response = Message.ERROR(308, null);
				}
				connection.sendJSON(response);
				break;
			case "pace":
				int pace = event.getInt("id");
				p.setPace(pace);
				HashMap<String, Integer> paceHashMap = new HashMap<String, Integer>();
				payload = new JSONObject();
				payload.put("pace", p.getPace());
				response = Message.EVENT_RESPONSE(payload);
				connection.sendJSON(response);
				break;
			case "rations":
				int rations = event.getInt("id");
				p.setRations(rations);
				payload = new JSONObject();
				payload.put("rations", p.getRations());
				response = Message.EVENT_RESPONSE(payload);
				connection.sendJSON(response);
				break;
			case "hunt":
				id = event.getInt("id");
				t = World.getTile(p.getPosition());
				if (t.hasHabitat("hunting")){
					int habitat_id = t.getHabitat("hunting");
					p.startHunting("hunting", id, habitat_id);
					response = p.getHunt().getNext();
					connection.sendJSON(response);
				}
				break;
			case "fish":
				id = event.getInt("id");
				t = World.getTile(p.getPosition());
				if (t.hasHabitat("fishing")){
					int depth = t.getDepth();
					story = new JSONObject();
					String[] choiceNames = {"fishDeep", "fishShallow"};
					String storyText = "You estimate the water here to be at least " + depth +" deep.";
					Decision d = new Decision(choiceNames, storyText);
					p.setDecision(d);;
					story.put("text", storyText);
					story.put("buttons", p.getDecision().buttons(p));
					payload = new JSONObject();
					payload.put("story", story);
					response = Message.EVENT_RESPONSE(payload);
					connection.sendJSON(response);
				}
				break;
			case "decision":
				id = event.getInt("id");
				response = p.getDecision().choose(p, id);
				connection.sendJSON(response);
				break;
			case "add_food":
				payload = new JSONObject();
				payload.put("eating", p.add_food(new Integer(event.getInt("id"))));
				response = Message.EVENT_RESPONSE(payload);
				connection.sendJSON(response);
				break;
			case "remove_food":
				payload = new JSONObject();
				payload.put("eating", p.remove_food(new Integer(event.getInt("id"))));
				response = Message.EVENT_RESPONSE(payload);
				connection.sendJSON(response);
				break;
			default:
				System.out.println("Error: unrecognized event type");
				break;
		}
	}
}