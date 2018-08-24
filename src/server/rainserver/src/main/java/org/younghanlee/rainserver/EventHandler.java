package org.younghanlee.rainserver;
import org.json.JSONArray;
import org.json.JSONObject;

public class EventHandler {
	public static void handleRequest (JSONObject event, Connection connection){
		String event_type = event.getString("type");
		Player p = connection.getPlayer();
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
					response = Message.EVENT_RESPONSE(null, null, tiles, destination, null);
				} else {
					response = Message.ERROR(308, null);
				}
				connection.send(response.toString());
				break;
			case "hunt":
				id = event.getInt("id");
				Animal a = p.hunt(id);
				story = new JSONObject();
				story.put("text", "You have spotted animal: "+ a.getName());
				story.put("buttons", p.getDecision().buttons());
				response = Message.EVENT_RESPONSE(null, null, null, null, story);
				connection.send(response.toString());
				break;
			case "fish":
				id = event.getInt("id");
				int depth = p.fish(id);
				story = new JSONObject();
				story.put("text", "You estimate the water here to be at least 5m deep.");
				story.put("buttons", p.getDecision().buttons());
				response = Message.EVENT_RESPONSE(null, null, null, null, story);
				connection.send(response.toString());
				break;
			case "decision":
				id = event.getInt("id");
				response = p.getDecision().choose(id, p);
				connection.send(response.toString());
			default:
				System.out.println("Error: unrecognized event type");
				break;
		}
	}
}