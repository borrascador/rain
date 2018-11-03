package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.HashMap;

import org.json.JSONObject;

public class RandomEvents {
	private static int interval = 10; 
	private static double chance = 1.0;
	private static HashMap<Integer, ArrayList<Player>> schedule;
	private static ArrayList<IRandomEvent> moveEvents;
	private static ArrayList<IRandomEvent> farmingEvents;
	private static ArrayList<IRandomEvent> fishingEvents;
	private static ArrayList<IRandomEvent> randomEvents;
	private static HashMap<Double, String> eventOdds;
	private static HashMap<String, ArrayList<IRandomEvent>> eventLists;
	
	public RandomEvents() {
		moveEvents = new ArrayList<IRandomEvent>();
		farmingEvents = new ArrayList<IRandomEvent>();
		fishingEvents = new ArrayList<IRandomEvent>();
		randomEvents = new ArrayList<IRandomEvent>();
		eventOdds = new HashMap<Double, String>();
		eventOdds.put(1.0, "move");
		eventOdds.put(2.0, "farming");
		eventOdds.put(2.0, "fishing");
		eventOdds.put(2.0, "random");
		eventLists = new HashMap<String, ArrayList<IRandomEvent>>();
		eventLists.put("move", moveEvents);
		eventLists.put("farming", farmingEvents);	
		eventLists.put("fishing", fishingEvents);
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
			case "fishing":
				fishingEvents.add(r);
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
			if (p.isOnline() && p.getPosition() != null) {
				if (Math.random() < chance) {
					addToSchedule(p, Util.randomInt(interval-1));
				}
			}
		}
	}
	
	public static void generateEvent(Player p) {
		
		// Find out what type of random event to choose from
		ArrayList<IRandomEvent> eventList = randomEvents; 
		String eventType = "random";
		double r = Math.random();
		for (Double d : eventOdds.keySet()) {
			if (r < d) {
				eventType = eventOdds.get(d);
				eventList = eventLists.get(eventType);
				break;
			}
		}
		
		ArrayList<Double> cumulative = new ArrayList<Double>();
		double sum = 0.0;
		for (int i=0; i<eventList.size(); i++) {
			sum += eventList.get(i).generateChance(p);
			cumulative.add(sum);	
		}
		
		r = Math.random() * sum;
		
		for (int i=0; i<cumulative.size(); i++) {
			if (r < cumulative.get(i)) {
				p.setRandomEvent(eventList.get(i));
				p.setTrigger(eventType);
				// System.out.println("Trigger: "+p.getTrigger());
				break;
			}
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
				generateEvent(p);
			}
		}
	}
	
}