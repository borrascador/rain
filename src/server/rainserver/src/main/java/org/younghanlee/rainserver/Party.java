package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Arrays;

import org.json.JSONArray;
import org.json.JSONObject;

public class Party {
	private String name;
	private int capacity;
	private ArrayList<Integer> members;
	
	public Party(int capacity) {
		this.members = new ArrayList<Integer>();
		this.capacity = capacity;
	}
	
	public void partyBroadcast(JSONObject jo, Player exclude) {
		for (int m: members) {
			Member member = World.getMember(m);
			Player p = member.getPlayer();
			if (p != exclude && member.isOnline()) {
				p.send(jo);
			}
		}
	}
	
	public void addMember(int id) {
		members.add(id);
	}
	
	public void removeMember(int id) {
		members.removeAll(Arrays.asList(id));
	}
	
	public void addPlayerBroadcast (Player p) {
		JSONObject payload = new JSONObject();
		JSONArray messages = new JSONArray();
		JSONObject message = new JSONObject();
		message.put("text", p.getName() + " has joined the party.\nYour party now has " + members.size() + "/" + capacity + " members");
		messages.put(message);
		payload.put("messages", messages);
		JSONArray party = new JSONArray();
		int id = p.getMember();
		Member m = World.getMember(id);
		JSONObject memberObject = m.toJSONObject(id,  p);
		party.put(memberObject);
		payload.put("party", party);
		partyBroadcast(Message.UPDATE(payload), null);
	}
	
	public int partySize() {
		return members.size();
	}
	
	public int partyCapacity() {
		return capacity;
	}
	
	public ArrayList<Integer> getPartyMembers() {
		return members;
	}
	
	public String getName() {
		return name;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public int emptySpaces() {
		return capacity - members.size();
	}
	
	public void logout(int id) {
		Member m = World.getMember(id);
		m.setOnline(false);
		JSONArray party = new JSONArray();
		JSONObject member = new JSONObject();
		member.put("id", id);
		member.put("online", false);
		party.put(member);
		JSONObject payload = new JSONObject();
		payload.put("party", party);
		JSONArray messages = new JSONArray();
		JSONObject message = new JSONObject();
		message.put("text", m.getName() + " has logged out.");
		messages.put(message);
		payload.put("messages", messages);
		partyBroadcast(Message.UPDATE(payload), m.getPlayer());
	}
	
	public void login(int id) {
		Member m = World.getMember(id);
		m.setOnline(true);
		JSONArray party = new JSONArray();
		JSONObject member = m.toJSONObject(id, m.getPlayer());
		party.put(member);
		JSONObject payload = new JSONObject();
		payload.put("party", party);
		JSONArray messages = new JSONArray();
		JSONObject message = new JSONObject();
		message.put("text", m.getName() + " has logged in.");
		messages.put(message);
		payload.put("messages", messages);
		partyBroadcast(Message.UPDATE(payload), m.getPlayer());
	}
}
