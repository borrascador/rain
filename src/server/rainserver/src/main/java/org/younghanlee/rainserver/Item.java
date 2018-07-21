package org.younghanlee.rainserver;

public class Item {
	private String name;
	private int quantity;
	
	public Item(String name, int quantity) {
		this.name = name;
		this.quantity = quantity;
	}
	
	
	public int getQuantity() {
		return this.quantity;
	}
	
	public void setQuantity(int n) {
		this.quantity = n;
	}
	
	public String getName() {
		return this.name;
	}
	
}