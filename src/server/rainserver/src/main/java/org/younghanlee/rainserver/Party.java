package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.Arrays;

public class Party {
	private String name;
	private ArrayList<Integer> members;
	
	public Party() {
		this.members = new ArrayList<Integer>();
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
}
