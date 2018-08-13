package org.younghanlee.rainserver;
import org.json.JSONObject;

public class EventHandler {
	public static void handleRequest (JSONObject event, Connection connection){
		String event_type = event.getString("type");
		Player p = connection.getPlayer();
		int id;
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
			default:
				System.out.println("Error: uncrecognized event type");
				break;
		}
	}
	
	public static void handleDecision (JSONObject event, Connection connection){
	}
}