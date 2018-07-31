package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.List;

import org.java_websocket.WebSocket;
import org.json.JSONArray;
import org.json.JSONObject;

public class Message {
	
	public static JSONObject REGISTER_REQUEST(String user, String email, String password) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "REGISTER_REQUEST");
		JSONObject payload = new JSONObject();
		payload.accumulate("user", user);
		payload.accumulate("email", email);
		payload.accumulate("password", password);
		jo.accumulate("payload", payload);
		return jo;
	}

	public static JSONObject REGISTER_RESPONSE() {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "REGISTER_RESPONSE");
		JSONObject payload = new JSONObject();
		payload.accumulate("ok", true);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject REGISTER_ERROR(String code) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "REGISTER_ERROR");
		JSONObject payload = new JSONObject();
		payload.accumulate("code", code);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject LOGIN_REQUEST(String user, String password) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "LOGIN_REQUEST");
		JSONObject payload = new JSONObject();
		payload.accumulate("user", user);
		payload.accumulate("password", password);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject LOGIN_RESPONSE(Player p, JSONArray tiles) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "LOGIN_RESPONSE");
		JSONObject payload = new JSONObject();
		payload.put("position", p.getPosition());
		payload.put("tiles", tiles);
		payload.put("sight", p.getSight());
		System.out.println("test");
		payload.put("inventory", p.backpackToJSONArray());
		payload.put("party", p.partyToJSONArray());
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject LOGIN_ERROR(String code) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "LOGIN_ERROR");
		JSONObject payload = new JSONObject();
		payload.accumulate("code", code);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject LOGOUT_REQUEST() {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "LOGOUT_REQUEST");
		return jo;
	}
	
	public static JSONObject LOGOUT_RESPONSE() {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "LOGOUT_RESPONSE");
		JSONObject payload = new JSONObject();
		payload.accumulate("ok", true);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject LOGOUT_ERROR(String code) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "LOGOUT_ERROR");
		JSONObject payload = new JSONObject();
		payload.accumulate("code", code);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject POSITION_REQUEST(int position) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "POSITION_REQUEST");
		JSONObject payload = new JSONObject();
		payload.put("position", position);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject POSITION_RESPONSE(int position, JSONArray tiles) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "POSITION_RESPONSE");
		JSONObject payload = new JSONObject();
		payload.put("position", position);
		payload.put("tiles", tiles);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject POSITION_ERROR(String code) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "POSITION_ERROR");
		JSONObject payload = new JSONObject();
		payload.accumulate("code", code);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject TILE_UPDATE(JSONArray tiles) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "TILE_UPDATE");
		JSONObject payload = new JSONObject();
		payload.put("tiles", tiles);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject PLANT_REQUEST(int id) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "EVENT_REQUEST");
		JSONObject payload = new JSONObject();
		payload.accumulate("type", "plant");
		payload.accumulate("id", id);
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject HARVEST_REQUEST(int id, String action_type) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "EVENT_REQUEST");
		JSONObject payload = new JSONObject();
		payload.accumulate("type", "harvest");
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject EVENT_RESULT(Player p, String target, List<Integer> list) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "EVENT_RESULT");
		JSONObject payload = new JSONObject();
		JSONArray changes = new JSONArray();
		if (target.equals("inventory")) {
			for (int i: list) {
				JSONObject item = new JSONObject();
				item.accumulate("id", i);
				item.accumulate("quantity", p.getQuantity(i));
				changes.put(item);
			}
			payload.put("inventory", changes);
		} else if (target.equals("party")) {
			for (int i: list) {
				JSONObject member = new JSONObject();
				member.accumulate("id", i);
				changes.put(member);
			}
			payload.put("party", changes);
		}
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static void main(String[] args) {
		
	}
}