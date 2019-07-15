package org.younghanlee.rainserver;

import java.util.HashMap;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;

public class Message {
	
	public static JSONObject ERROR(int code, String message) {
		JSONObject jo = new JSONObject(); 
		jo.put("type", "ERROR");
		JSONObject payload = new JSONObject();
		payload.put("code", code);
		payload.put("message", message);
		jo.put("payload", payload);
		return jo;
	}
	
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
		payload.put("tiles", tiles);
		payload.put("sight", p.getSight());
		payload.put("pace", p.getPace());
		payload.put("rations", p.getRations());
		payload.put("inventory", p.inventoryToJSONArray());
		payload.put("party", p.partyToJSONArray());
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
	
	public static JSONObject UPDATE(JSONObject payload) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "UPDATE");
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static JSONObject EVENT_RESPONSE(JSONObject payload) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "EVENT_RESPONSE");
		jo.accumulate("payload", payload);
		return jo;
	}
	
	public static void main(String[] args) {
		
	}
}