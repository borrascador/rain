package org.younghanlee.rainserver;
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
		switch (message_type) {
			case "REGISTER_REQUEST":
				World.addPlayer(jo.getString("name"), "TRIBE");
				
				// Build Response
				JSONObject response = new JSONObject();
				response.accumulate("type", "REGISTER_RESPONSE");
				JSONObject payload = new JSONObject();
				payload.accumulate("ok", true);
				response.accumulate("payload", payload);
				
				connection.send(response.toString());
				break;
				
			case "LOGIN_REQUEST":
				Player p = World.getPlayer(jo.getString("name"));
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