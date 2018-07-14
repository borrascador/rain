package org.younghanlee.rainserver;

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
	
	public static JSONObject LOGIN_RESPONSE(int position, JSONArray tiles) {
		JSONObject jo = new JSONObject(); 
		jo.accumulate("type", "LOGIN_RESPONSE");
		JSONObject payload = new JSONObject();
		payload.put("position", position);
		payload.put("tiles", tiles);
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
	
	public static void main(String[] args) {
		
	}
}