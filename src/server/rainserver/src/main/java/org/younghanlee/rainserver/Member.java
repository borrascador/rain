package org.younghanlee.rainserver;

import org.json.JSONObject;

public class Member {
	private String name;
	private int icon;
	private int health;
	private int jeito;
	
	public Member(String name, int icon) {
		this.name = name;
		this.icon = icon;
		this.health = 5;
		this.jeito = 10;
	}
	
	public String getName() {
		return this.name;
	}
	
	public int getIcon() {
		return this.icon;
	}
	
	public int getHealth() {
		return this.health;
	}
	
	public void setHealth(int n) {
		this.health = n;
	}
	
	public int getJeito() {
		return this.jeito;
	}
	
	public void setJeito(int n) {
		this.jeito = n;
	}
	
	public JSONObject toJSONObject(int id) {
		JSONObject jo = new JSONObject();
		jo.put("id", id);
		jo.put("health", health);
		jo.put("jeito", jeito);
		jo.put("name", name);
		jo.put("icon", icon);
		return jo;
	}
}