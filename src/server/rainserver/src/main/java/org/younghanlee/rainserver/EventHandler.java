package org.younghanlee.rainserver;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class EventHandler {
	public static void handleRequest (JSONObject event, Connection connection){
		String event_type = event.getString("eventType");
		Player p = connection.getPlayer();
		Tile t;
		int id, quantity;
		JSONObject story;
		JSONObject payload;
		JSONObject response;
		switch (event_type) {
			case "plant":
				id = event.getInt("id");
//				response = World.getTile(p.getPosition()).plant(id, p);
//				connection.sendJSON(response);
				break;
			case "harvest":
				id = event.getInt("id");
//				response = World.getTile(p.getPosition()).harvest(id, p);
//				connection.sendJSON(response);
				break;
			case "move":
				id = event.getInt("id");
				int xPos = event.getInt("xPos");
				int yPos = event.getInt("yPos");
				int xCoord = event.getInt("xCoord");
				int yCoord = event.getInt("yCoord");
				int ts = World.getTileSize();
				int x = ts * xPos + xCoord;
				int y = ts * yPos + yCoord;
				
				if (World.getMember(id).move(x, y)) {
					payload = new JSONObject();
					payload.put("xCoord", xCoord);
					payload.put("yCoord", yCoord);
					payload.put("xPos", xPos);
					payload.put("yPos", yPos);
					payload.put("pace", 1);
					response = Message.EVENT_RESPONSE(payload);
				} else {
					response = Message.ERROR(308, null);
				}
				connection.sendJSON(response);
				break;
			case "pace":
				int pace = event.getInt("id");
				p.setPace(pace);
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
			case "start_hunt":
				p.startHunting();
				payload = new JSONObject();
				payload.put("hunting", true);
				response = Message.EVENT_RESPONSE(payload);
				connection.sendJSON(response);
				break;
			case "stop_hunt":
				p.stopHunting();
				payload = new JSONObject();
				payload.put("hunting", false);
				response = Message.EVENT_RESPONSE(payload);
				connection.sendJSON(response);
				break;
			case "decision":
				if (p.getDecision() != null) {
					id = event.getInt("id");
					response = p.getDecision().choose(p, id);
					connection.sendJSON(response);
				} else {
					connection.sendJSON(Message.ERROR(305, "Player does not have decision"));
				}
				break;
			case "pick_up":
				id = event.getInt("id");
				quantity = event.getInt("quantity");
				int srcPosition = event.getInt("position");
				String srcType = event.getString("type");
				if (srcType == "party") {
					srcPosition = p.indexOfPartyMember(srcPosition);
				}
				response = p.pickUp(id, quantity, srcPosition, srcType);
				connection.sendJSON(response);
				break;
			case "put_down":
				id = event.getInt("id");
				quantity = event.getInt("quantity");
				int destPosition = event.getInt("position");
				String destType = event.getString("type");
				response = p.putDown(id, quantity, destPosition, destType);
				connection.sendJSON(response);
				break;
			default:
				connection.sendJSON(Message.ERROR(304, "Unrecognized event type"));
				break;
		}
	}
}