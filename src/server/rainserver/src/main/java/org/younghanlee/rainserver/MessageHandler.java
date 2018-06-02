package org.younghanlee.rainserver;
import org.json.JSONObject;

public class MessageHandler {

	public static void handle (String message){
		System.out.println(message);
		JSONObject jo = new JSONObject(message);
		if (!jo.has("message_type")){
			System.out.println("No message type");
			return;
		} 
		
		String message_type = jo.getString("message_type");
		switch (message_type) {
			case "register":
				World.addPlayer(jo.getString("name"), jo.getString("player_class"));
				break;
				
			case "move":
				break;
				
			default:
				System.out.println("Unrecognized message type:" + message_type);
				
		}
	}

	public static void main(String[] args) {
		
	}
}