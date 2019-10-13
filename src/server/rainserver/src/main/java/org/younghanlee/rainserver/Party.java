package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Arrays;

import org.json.JSONArray;
import org.json.JSONObject;

public class Party {
	private String name;
	private ArrayList<Integer> members;
	
	public Party() {
		this.members = new ArrayList<Integer>();
	}
	
	public void partyBroadcast(String s) {
		for (int m: members) {
			Member member = World.getMember(m);
			Player p = member.getPlayer();
			if (p != null && member.isOnline()) {
				p.send(s);
			}
		}
	}
	
	public void addMember(int id) {
		members.add(id);
	}
	
	public void removeMember(int id) {
		members.removeAll(Arrays.asList(id));
	}
	
	public int addPlayer(String name) {
		for (int m: members) {
			Member member = World.getMember(m);
			if (member.getPlayer() == null) {
				member.setPlayer(World.getPlayer(name));
				JSONObject payload = new JSONObject();
				JSONArray messages = new JSONArray();
				JSONObject message = new JSONObject();
				message.put("text", name + " has joined the party.");
				messages.put(message);
				payload.put("messages", messages);
				partyBroadcast(Message.UPDATE(payload).toString());
				return m;
			}
		}
		return -1;
	}
	
	public int partySize() {
		return members.size();
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
		int spaces = 0;
		for (int m: members) {
			Member member = World.getMember(m);
			if (member.getPlayer() == null) {
				spaces ++;
			}
		}
		return spaces;
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
		partyBroadcast(Message.UPDATE(payload).toString());
	}
}
