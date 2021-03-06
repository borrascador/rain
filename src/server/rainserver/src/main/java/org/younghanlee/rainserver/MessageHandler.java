package org.younghanlee.rainserver;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.JSONArray;
import org.json.JSONObject;

public class MessageHandler {

	public static void handle (String message, Connection connection, Server server){
		String from = "";
		String username = "";
		if (connection.getPlayer() != null) {
			username = connection.getPlayer().getName();
			from = " FROM USER " + username;
		}
		System.out.println(message + from);
		
		JSONObject jo = new JSONObject(message);
		if (!jo.has("type")){
			System.out.println("No message type");
			return;
		} 
		
		String message_type = jo.getString("type");
		
		// Declare these so we don't get scope error in switch expression
		JSONObject response;
		JSONObject payload;
		Player p;
		JSONArray tiles;
		
		switch (message_type) {
			case "REGISTER_REQUEST":
				payload = jo.getJSONObject("payload");
				String user = payload.getString("user");
				String email = payload.getString("email");
				String password = payload.getString("password");
				
				System.out.println("Attempting to add " + user + " " + email);
				
				response = World.addPlayer(user, email, password);
				connection.sendJSON(response);
				break;
				
			case "LOGIN_REQUEST":
				payload = jo.getJSONObject("payload");
				p = World.getPlayer(payload.getString("user"));
				
				// Check if player exists
				if (p == null) {
					response = Message.ERROR(107, "User does not exist");
					connection.sendJSON(response);
					break;
				}
				
				
				// Check if password is correct 
				String hash = Password.multiHash(payload.getString("password"), p.getSalt());
				if (!hash.equals(p.getHash())) {
					response = Message.ERROR(114, null);
					// System.out.println("wrong password");
					connection.sendJSON(response);
					break;
				} else {
					// System.out.println("right password");
				}
				
				// Check if player is online
				if (p.isOnline()) {
					response = Message.ERROR(115, null);
					connection.sendJSON(response);
					break;
				}

				
				boolean result = p.login(connection);
				
				// Check if there is already a login on this connection
				if (!result) {
					response = Message.ERROR(118, null);
					connection.sendJSON(response);
					break;
				} 
					
				// Send ordinary response
				tiles = new JSONArray();
				Integer memberID = p.getMember();
				if (memberID != null) {
					tiles = World.getMember(memberID).inSightTiles();
				}
				
				response = Message.LOGIN_RESPONSE(p, tiles);
				connection.sendJSON(response);
				p.sendDecision(connection);
				break;
				
			case "LOGOUT_REQUEST":
				// Check if there is any user logged in on this connection
				if (username == "") {
					response = Message.ERROR(119, null);
				} else {
					response = World.getPlayer(username).logoff(connection);
				}
				connection.sendJSON(response);
				break;
			
			case "EVENT_REQUEST":
				payload = jo.getJSONObject("payload");
				// Go to EventHandler.java
				EventHandler.handleRequest(payload, connection, server);
				break;
			
			case "CHAT_BROADCAST":
				payload = jo.getJSONObject("payload");
				String text = payload.getString("text");
				JSONObject response_payload = new JSONObject();
				JSONArray messages = new JSONArray();
				JSONObject m = new JSONObject();
				m.put("user", username);
				m.put("text", text);
				messages.put(m);
				response_payload.put("messages", messages);
				server.broadcast(Message.UPDATE(response_payload).toString());
				break;
				
			default:
				System.out.println("Unrecognized message type:" + message_type);
				response = Message.ERROR(202, "Unrecognized message type: " + message_type);
				connection.sendJSON(response);
				
		}
	}

	public static void main(String[] args) {
		
	}
}