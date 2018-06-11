package org.younghanlee.rainserver;
import org.json.JSONArray;
import org.json.JSONObject;
import org.java_websocket.WebSocket;

public class MessageHandler {

	public static void handle (String message, WebSocket connection){
		System.out.println(message);
		JSONObject jo = new JSONObject(message);
		if (!jo.has("type")){
			System.out.println("No message type");
			return;
		} 
		
		String message_type = jo.getString("type");
		
		// Declare these so we don't get scope error in switch expression
		JSONObject response;
		JSONObject payload;
		
		switch (message_type) {
			case "REGISTER_REQUEST":
				payload = jo.getJSONObject("payload");
				World.addPlayer(payload.getString("user"), "TRIBE");
				
				// Send response
				response = Message.REGISTER_RESPONSE();
				connection.send(response.toString());
				break;
				
			case "LOGIN_REQUEST":
				payload = jo.getJSONObject("payload");
				Player p = World.getPlayer(payload.getString("user"));
				if (!p.isOnline()) {
					p.login(connection);
					
					// Send response
					int position = p.getPosition();
					JSONArray tiles = new JSONArray();
					JSONObject tile = World.getTile(position).toJSONObject();
					tiles.put(tile);
					
					response = Message.LOGIN_RESPONSE(position, tiles);
					connection.send(response.toString());
					
				}
				break;
				
			case "request_position":
				break;
				
			default:
				System.out.println("Unrecognized message type:" + message_type);
				
		}
	}

	public static void main(String[] args) {
		
	}
}