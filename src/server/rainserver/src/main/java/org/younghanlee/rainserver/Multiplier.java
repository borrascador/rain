package org.younghanlee.rainserver;

import org.json.JSONObject;

public class Multiplier{
	String name;
	int icon;
	float value;
	
	public Multiplier(String name, int icon, float value) {
		this.name = name;
		this.icon = icon;
		this.value = value;
	}
	
	public JSONObject toJSONObject() {
		JSONObject jo = new JSONObject();
		jo.put("name", name);
		jo.put("value", Math.round(100 * (value - 1.0))); // Send client the percent increase
		jo.put("icon", icon);
		return jo;
	}
}