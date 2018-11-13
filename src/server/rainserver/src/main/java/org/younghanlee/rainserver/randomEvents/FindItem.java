package org.younghanlee.rainserver.randomEvents;

import java.util.ArrayList;
import java.util.Random;

import org.json.JSONObject;
import org.younghanlee.rainserver.Decision;
import org.younghanlee.rainserver.IChoice;
import org.younghanlee.rainserver.IRandomEvent;
import org.younghanlee.rainserver.Message;
import org.younghanlee.rainserver.Multiplier;
import org.younghanlee.rainserver.Player;
import org.younghanlee.rainserver.RandomEvents;
import org.younghanlee.rainserver.World;
import org.younghanlee.rainserver.Util;

public class FindItem{
	
	public static int item_id;
	
	public static IChoice findItem_take = new IChoice(){
		public String getText(Player p) {
			return "Take " + World.getItem(item_id).getName();
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			JSONObject payload = new JSONObject();
			payload.put("inventory", p.add(item_id, 1));
			JSONObject story = new JSONObject();
			story.put("text", "You pick up the item.");
			payload.put("story", story);
			p.removeDecision();
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};

	public static IChoice findItem_leave = new IChoice(){
		public String getText(Player p) {
			return "Leave " + World.getItem(item_id).getName();
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			JSONObject payload = new JSONObject();
			JSONObject story = new JSONObject();
			story.put("text", "You decide not to take the item.");
			payload.put("story", story);
			p.removeDecision();
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};

	public static IRandomEvent findItem = new IRandomEvent () {
		public double generateChance(Player p) {
			return 100;
		}
		public JSONObject result(Player p) {
			String[] choiceNames = {"findItem_take", "findItem_leave"};
			int[] items = {10, 11, 12, 13, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 38};
			String[] prefix = {"You discover an item: ", "You spot an item: "};
			String[] suffix = {"."};
			item_id = Util.choice(items);
			String item = World.getItem(item_id).getName();
			String story = Util.choice(prefix) + item + Util.choice(suffix);
			Decision d = new Decision(choiceNames, story, p);
			p.setDecision(d); 
			return d.payload(p);
		}
	};

	public static void addAll() {
		Decision.addChoice("findItem_take", findItem_take);
		Decision.addChoice("findItem_leave", findItem_leave);
		RandomEvents.addRandomEvent(findItem, "move");
	}
}