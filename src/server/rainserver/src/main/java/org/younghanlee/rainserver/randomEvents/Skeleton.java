package org.younghanlee.rainserver.randomEvents;
import org.younghanlee.rainserver.*;

import java.util.ArrayList;

import org.json.JSONObject;
import org.younghanlee.rainserver.Decision;
import org.younghanlee.rainserver.IChoice;
import org.younghanlee.rainserver.IRandomEvent;
import org.younghanlee.rainserver.Multiplier;
import org.younghanlee.rainserver.Player;
import org.younghanlee.rainserver.RandomEvents;
import org.younghanlee.rainserver.World;

public class Skeleton {
	
	public static IChoice skeleton_openBag = new IChoice(){
		public String getText(Player p) {
			return "Open bag";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			String[] choiceNames = {"skeleton_takeMap", "skeleton_readPapers", "skeleton_leave"};
			String story = "You pull open the tar-lined bag and find a stack of dusty old papers. "
					+ "One of them seems to be a rough map. "
					+ "In the center is an area circled in red, "
					+ "marked by a neatly written 'Z?'";
			Decision d = new Decision(choiceNames, story, p);
			p.setDecision(d);
			return Message.EVENT_RESPONSE(d.payload(p));
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice skeleton_takeMap = new IChoice(){
		public String getText(Player p) {
			return "Take the map and go.";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			p.removeDecision();
			String story = "You take the map and place it in your backpack.";
			JSONObject payload = Decision.payload(story);
			int item_id = 44;
			payload.put("inventory", p.add(item_id, 1));
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice skeleton_leave = new IChoice(){
		public String getText(Player p) {
			return "Leave it alone";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			String story = "You decide to leave it alone.";
			p.removeDecision();
			return Message.EVENT_RESPONSE(Decision.payload(story));
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice skeleton_moveOut = new IChoice(){
		public String getText(Player p) {
			return "I don't think this guy found it. Let's move out.";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			String story = "You move away from the skeleton.";
			p.removeDecision();
			return Message.EVENT_RESPONSE(Decision.payload(story));
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice skeleton_whatElse = new IChoice(){
		public String getText(Player p) {
			return "Fascinating... what else is this fellow hiding?";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			ArrayList<Member> m = Member.pickRandom(p, 2);
			String story = m.get(0).getName() + " reaches his hand further into the bag and pulls it right out, "
					+ "flinging something away in fear. It sails up and up, and lands in " + m.get(1).getName() + 
					"'s hands. He laughs. It's just a monkey skeleton.";
			p.removeDecision();
			JSONObject payload = Decision.payload(story);
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IChoice skeleton_readPapers = new IChoice(){
		public String getText(Player p) {
			return "Take the map and look over the other papers before you leave.";
		}
		public JSONObject result(Player p, ArrayList<Multiplier> multipliers) {
			p.removeDecision();
			String story = "The old, yellow scraps of parchment fall apart in your hands "
					+ "as you try to decipher the faded handwriting. "
					+ "Still, you can make out a few words here and there. "
					+ "'The lost city of Z is rumored to be the inspiration for El Dorado, "
					+ "and numerous explorers have died searching for evidence of its existence...'";
			String[] choiceNames = {"skeleton_moveOut", "skeleton_whatElse"};
			Decision d = new Decision(choiceNames, story, p);
			JSONObject payload = d.payload(p);
			int item_id = 44;
			payload.put("inventory", p.add(item_id, 1));
			return Message.EVENT_RESPONSE(payload);
		}
		public ArrayList<Multiplier> generateMultipliers(Player p){
			return null;
		}
	};
	
	public static IRandomEvent skeleton = new IRandomEvent (){
		public double generateChance(Player p) {
			return 100;
		}
		public JSONObject result(Player p) {
			String[] choiceNames = {"skeleton_openBag", "skeleton_leave"};
			String story = "A skeleton wearing a pith hat lies half buried in leaves. "
					+ "Next to him lies something heavy and square. "
					+ "It seems to be some kind of a bag.";
			Decision d = new Decision(choiceNames, story, p);
			p.setDecision(d); 
			return d.payload(p);
		}
	};
	
	public static void addAll() {
		Decision.addChoice("skeleton_openBag", skeleton_openBag);
		Decision.addChoice("skeleton_leave", skeleton_leave);
		Decision.addChoice("skeleton_takeMap", skeleton_takeMap);
		Decision.addChoice("skeleton_readPapers", skeleton_readPapers);
		Decision.addChoice("skeleton_moveOut", skeleton_moveOut);
		Decision.addChoice("skeleton_whatElse", skeleton_whatElse);
		RandomEvents.addRandomEvent(skeleton, "move");
	}
}