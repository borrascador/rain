package org.younghanlee.rainserver;

public class Member {
	private String name;
	private int icon;
	private int health;
	private int jeito;
	
	public Member(String name, int icon) {
		this.name = name;
		this.icon = icon;
				
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
}