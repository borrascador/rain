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
				response = new RandomEvent(p, t);
			case "persistent":
				response = new Persistent(p, t);
		}
		
		c.send(response.toString());
	}
	
	public static void main(String[] args){
		
	}
}