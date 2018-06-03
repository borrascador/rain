package org.younghanlee.rainserver;
import java.util.Map;

import org.json.JSONObject;

public class MessageHandler {

	public static void handle (String message){
		System.out.println(message);
		JSONObject jo = new JSONObject(message);
		if (!jo.has("type")){
			System.out.println("No message type");
			return;
		} 
		
		String type = jo.getString("type");
		JSONObject payload = jo.getJSONObject("payload");
		switch (type) {
			case "REGISTER_REQUEST":
				World.addPlayer(payload.getString("name"), payload.getString("playerClass"));
				break;
				
			case "move":
				break;
				
			case "request_position":	
				break;
				
			default:
				System.out.println("Unrecognized message type:" + type);
				
		}
	}

	public static void main(String[] args) {
		
	}
}