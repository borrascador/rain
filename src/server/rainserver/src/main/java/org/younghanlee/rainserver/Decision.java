package org.younghanlee.rainserver;

import org.json.JSONObject;

public class Decision {
	interface Choice{
		void result(Player p);
	}
	
	private Choice[] choices;
	
	private static Choice attack = new Choice() {
		public void result(Player p) {
			p.getHunting().rollDrop(p);
		}
	};
	
	public Decision(Player p, Choice[] choices) {
		
	}
	
	public static void main(String[] args){
		
	}
}