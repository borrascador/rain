package org.younghanlee.rainserver;
import org.json.JSONArray;
import org.json.JSONObject;

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
				String password = payload.getString("password");
				
				System.out.println("Attempting to add " + user + " " + email);
				
				response = World.addPlayer(user, email, password);
				connection.send(response.toString());
				break;
				
			case "LOGIN_REQUEST":
				payload = jo.getJSONObject("payload");
				p = World.getPlayer(payload.getString("user"));
				
				// Check if player exists
				if (p == null) {
					response = Message.ERROR(107, "User does not exist");
					connection.send(response.toString());
					break;
				}
				
				// Check if there is already a login on this connection
				if (connection.getPlayer() != null) {
					response = Message.ERROR(118, null);
					connection.send(response.toString());
					break;
				} 
				
				// Check if password is correct 
				String hash = Password.multiHash(payload.getString("password"), p.getSalt());
				if (!hash.equals(p.getHash())) {
					response = Message.ERROR(114, null);
					// System.out.println("wrong password");
					connection.send(response.toString());
					break;
				} else {
					// System.out.println("right password");
				}
				
				// Check if player is online
				if (p.isOnline()) {
					response = Message.ERROR(115, null);
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
					response = Message.ERROR(119, null);
				} else {
					response = World.getPlayer(username).logoff(connection);
				}
				connection.send(response.toString());
				break;
			
			case "EVENT_REQUEST":
				payload = jo.getJSONObject("payload");
				EventHandler.handleRequest(payload, connection);
				break;
				
			default:
				System.out.println("Unrecognized message type:" + message_type);
				response = Message.ERROR(202, "Unrecognized message type: " + message_type);
				connection.send(response.toString());
				
		}
	}

	public static void main(String[] args) {
		
	}
}