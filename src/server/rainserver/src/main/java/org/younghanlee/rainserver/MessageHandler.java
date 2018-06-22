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
				Player p = World.getPlayer(payload.getString("user"));
				
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
				int position = p.getPosition();
				JSONArray tiles = World.getTile(position).inSight(p.getSight());
				response = Message.LOGIN_RESPONSE(position, tiles);
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
				
			default:
				System.out.println("Unrecognized message type:" + message_type);
				
		}
	}

	public static void main(String[] args) {
		
	}
}