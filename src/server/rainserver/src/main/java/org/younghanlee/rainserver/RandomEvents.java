package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONObject;

public class RandomEvents {
	private static int interval = 20; 
	private static double chance = 1.0;
	private static HashMap<Integer, ArrayList<Player>> schedule;
	private static ArrayList<IRandomEvent> moveEvents;
	private static ArrayList<IRandomEvent> farmingEvents;
	private static ArrayList<IRandomEvent> huntingEvents;
	private static ArrayList<IRandomEvent> randomEvents;
	private static HashMap<String, Double> eventOdds;
	private static HashMap<String, ArrayList<IRandomEvent>> eventLists;
	
	public RandomEvents() {
		moveEvents = new ArrayList<IRandomEvent>();
		farmingEvents = new ArrayList<IRandomEvent>();
		huntingEvents = new ArrayList<IRandomEvent>();
		randomEvents = new ArrayList<IRandomEvent>();
		eventOdds = new HashMap<String, Double>();
		eventOdds.put("move", 0.3);
		eventOdds.put("hunting", 0.6);
		eventOdds.put("random", 0.1);
		eventOdds.put("farming", 0.0);
		eventLists = new HashMap<String, ArrayList<IRandomEvent>>();
		eventLists.put("move", moveEvents);
		eventLists.put("farming", farmingEvents);	
		eventLists.put("hunting", huntingEvents);
		eventLists.put("random", randomEvents);
		nextInterval();
	}

	public static void addRandomEvent(IRandomEvent r, String trigger) {
		switch (trigger) {
			case "move":
				moveEvents.add(r);
				break;
			case "farming":
				farmingEvents.add(r);
				break;
			case "hunting":
				huntingEvents.add(r);
				break;	
			default:
				randomEvents.add(r);
				break;		
		}

	}
	
	private static void addToSchedule (Player p, int tick) {
		if (schedule.containsKey(tick)) {
			schedule.get(tick).add(p);
		} else {
			ArrayList<Player> list = new ArrayList<Player>();
			list.add(p);
			schedule.put(tick, list);
		}
	}
	
	public static void nextInterval(){
		schedule = new HashMap<Integer, ArrayList<Player>>();
		for (Player p : World.getPlayers().values()) {
			if (p.isOnline() && p.getTribe() != null) {
				if (Math.random() < chance) {
					addToSchedule(p, Util.randomInt(interval-1));
				}
			}
		}
	}
	
	public static void generateEvent(Player p) {
		if (p.getDecision() == null) {
			System.out.println("Generating event for player " + p.getName());
			String rType = Util.stringChoice(eventOdds);
			System.out.println("Random event type: " + rType);
			ArrayList<IRandomEvent> events = eventLists.get(rType);
			IRandomEvent e = Util.choice(events);
			p.setTrigger(rType);
			p.setRandomEvent(e);
		}
	}
	
	public static void dispatch(int tick) {
		int mod = tick % interval;
				
		if (mod == 1) {
			nextInterval();
		}
		// System.out.println(tick + ": " + schedule);
		if (schedule.containsKey(mod)) {
			for (Player p: schedule.get(mod)) {
				if (p.getDecision() != null);
				generateEvent(p);
			}
		}
	}
	
}