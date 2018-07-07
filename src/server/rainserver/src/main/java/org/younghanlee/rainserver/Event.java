package org.younghanlee.rainserver;

import org.json.JSONObject;

public class Event {
	private String type;
	private String subtype;
	
	public Event(Connection c, Tile t, String type) {
		Player p = c.getPlayer();
		JSONObject response;
		
		switch (type) {
			case "random":
				response = new JSONObject();
				break;
			case "persistent":
				response = new JSONObject();
				break;
			default:
				response = new JSONObject();
				break;
		}
		
		c.send(response.toString());
	}
	
	public static void main(String[] args){
		
	}
}