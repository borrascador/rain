package org.younghanlee.rainserver;

import org.json.JSONObject;

public class Member {
	private String name;
	private int icon;
	private int health;
	private int regen;
	private int strength;
	private int speed;
	private int jeito;
	
	public Member(String name, int icon) {
		this.name = name;
		this.icon = icon;
		this.speed = 50;
		this.strength = 50;
		this.health = 5;
		this.regen = 10;
		this.jeito = 5;
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
	
	public int getRegen() {
		return this.regen;
	}
	
	public void setRegen(int n) {
		this.regen = n;
	}
	
	public int getJeito() {
		return this.jeito;
	}
	
	public void setJeito(int n) {
		this.jeito = n;
	}
	
	public int getStrength() {
		return this.strength;
	}
	
	public void setStrength(int n) {
		this.strength = n;
	}
	
	public int getSpeed() {
		return this.speed;
	}
	
	public void setSpeed(int n) {
		this.speed = n;
	}
	
	public JSONObject change(int id, Player p, int health_change, int jeito_change) {
		JSONObject jo = new JSONObject();
		jo.put("id", id);
		jo.put("name", name);
		jo.put("health_change", health_change);
		jo.put("jeito_change", jeito_change);
		health += health_change;
		jeito += jeito_change;
		if (jeito < 0) {
			jeito = 0;
		}
		if (health <= 0) {
			health = 0;
			p.removeMember(id);

		}
		jo.put("health", health);
		jo.put("jeito", jeito);
		return jo;
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