package org.younghanlee.rainserver;
import org.json.JSONArray;
import org.json.JSONObject;
import org.java_websocket.WebSocket;

public class MessageHandler {

	public static void handle (String message, Connection connection){
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
				
				System.out.println("Attempting to add " + user + " " + email);
				
				response = World.addPlayer(user, email, "TRIBE");
				connection.send(response.toString());
				break;
				
			case "LOGIN_REQUEST":
				payload = jo.getJSONObject("payload");
				p = World.getPlayer(payload.getString("user"));
				
				// Check if player exists
				if (p == null) {
					response = Message.LOGIN_ERROR("0101");
					connection.send(response.toString());
					break;
				}
				
				// Check if there is already a login on this connection
				if (connection.getPlayer() != null) {
					response = Message.LOGIN_ERROR("0105");
					connection.send(response.toString());
					break;
				} 
				
				// Check if player is online
				if (p.isOnline()) {
					response = Message.LOGIN_ERROR("0102");
					connection.send(response.toString());
					break;
				}
				
				p.login(connection);
					
				// Send ordinary response
				tiles = p.tilesSeenArray();
				response = Message.LOGIN_RESPONSE(p, tiles);
				connection.send(response.toString());
				break;
				
			case "LOGOUT_REQUEST":
				// Check if there is any user logged in on this connection
				if (username == "") {
					response = Message.LOGOUT_ERROR("0401");
				} else {
					response = World.getPlayer(username).logoff(connection);
				}
				connection.send(response.toString());
				break;
				
			case "POSITION_REQUEST":
				// Check if logged in 
				if (username == "") {
					response = Message.POSITION_ERROR("0303");
					connection.send(response.toString());
				} 
				
				payload = jo.getJSONObject("payload");
				int destination = payload.getInt("position");
				p = World.getPlayer(username);
				int range = 1;
				
				if (p.move(range, destination)) {
					tiles = p.inSightArray();
					response = Message.POSITION_RESPONSE(destination, tiles);
				} else {
					response = Message.POSITION_ERROR("0301");
				}
				connection.send(response.toString());
				break;
				
			default:
				System.out.println("Unrecognized message type:" + message_type);
				
		}
	}

	public static void main(String[] args) {
		
	}
}