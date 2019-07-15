package org.younghanlee.rainserver;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;

import org.json.JSONArray;
import org.json.JSONObject;

public class Member {
	private String name;
	private int icon;
	private int health;
	private int regen;
	private int strength;
	private int speed;
	private int jeito;
	// Global position
	private int x;
	private int y;
	private Move move; // Initialize with move(), stop with stopMoving()
	private ArrayList<ItemStack> equipment;
	private HashMap<Integer, Integer> skills; // id, rank
	private HashMap<Integer, Integer> modifiers; // id, timer
	
	public Member(String name, int icon, int x, int y) {
		this.name = name;
		this.icon = icon;
		this.x = x;
		this.y = y;
		this.move = null;
		this.speed = 50;
		this.strength = 10;
		this.health = 5;
		this.regen = 10;
		this.jeito = 5;
		this.equipment = new ArrayList<ItemStack>();
		this.skills = new HashMap<Integer, Integer>();
		this.modifiers = new HashMap<Integer, Integer>();
	}
	
	public String getName() {
		return this.name;
	}
	
	public void equip(ItemStack i) {
		equipment.add(i);
	}
	
	public void unequip(ItemStack i) {
		equipment.remove(i);
	}
	
	public ArrayList<ItemStack> getEquipment(){
		return equipment;
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
	
	public int getRegen() {
		return this.regen;
	}
	
	public void setRegen(int n) {
		this.regen = n;
	}
	
	public int getJeito() {
		return this.jeito;
	}
	
	public void setJeito(int n) {
		this.jeito = n;
	}
	
	public int getStrength() {
		return this.strength;
	}
	
	public void setStrength(int n) {
		this.strength = n;
	}
	
	public int getSpeed() {
		return this.speed;
	}
	
	public void setSpeed(int n) {
		this.speed = n;
	}
	
	public int getX() {
		return x;
	}
	
	public int getY() {
		return y;
	}
	
	public Move getMove() {
		return move;
	}
	
	public JSONObject getPosition() {
		JSONObject jo = new JSONObject();
		int ts = World.getTileSize();
		int xCoord = x % ts;
		jo.put("xCoord", xCoord);
		jo.put("xPos", (x - xCoord)/ts);
		int yCoord = y % ts;
		jo.put("yCoord", yCoord);
		jo.put("yPos", (y - yCoord)/ts);
		return jo;
	}
	
	public void setPosition(int x, int y) {
		this.x = x;
		this.y = y;
	}
	
	public boolean legalMove(int x, int y) {
		return true;
	}
	
	public boolean move(int x, int y) {
		if (legalMove(x, y)) {
			move = new Move(x, y, this);
			return true;
		} else return false;
	}
	
	public void stopMoving() {
		move = null;
	}
	
	public void addSkill(int id, int rank) {
		skills.put(id, rank);
	}
	
	public void addModifier(int n, int time) {
		modifiers.put(n, time);
	}
	
	public JSONArray getModifiers() {
		JSONArray ja = new JSONArray();
		return ja;
	}
	
	public boolean hasSkill(int id) {
		return skills.containsKey(id);
	}
	
	public int skillRank(int id) {
		return skills.get(id);
	}
	
	public JSONObject change(int id, Player p, int health_change, int jeito_change, 
			HashMap<Integer, Integer> skills_add, ArrayList<Integer> modifiers_add, ArrayList<Integer> modifiers_remove) {
		JSONObject jo = getPosition();
		jo.put("id", id);
		jo.put("icon", icon);
		jo.put("name", name);
		jo.put("health_change", health_change);
		jo.put("jeito_change", jeito_change);
		health += health_change;
		jeito += jeito_change;
		if (jeito < 0) {
			jeito = 0;
		}
		if (health <= 0) {
			health = 0;
			p.removeMember(id);

		}
		
		if (skills_add != null) {
			JSONArray skillsArray = new JSONArray();
			JSONArray skillsChangeArray = new JSONArray();
		
			for (int skill_id: skills_add.keySet()) {
				int rank = skills_add.get(skill_id);
				addSkill(skill_id, rank);
				JSONObject skillObject = new JSONObject();
				skillObject.put("id", skill_id);
				skillsArray.put(skillObject);
			
				Skill s = World.getSkill(skill_id);
				JSONObject newSkillObject = new JSONObject();
				newSkillObject.put("id", skill_id);
				newSkillObject.put("name", s.getName() + " " + rank);
				newSkillObject.put("description", s.getDescription());
				skillsChangeArray.put(newSkillObject);	
			}
		
			jo.put("skills", skillsArray);
			jo.put("skill_changes", skillsChangeArray);
		}
		
		jo.put("health", health);
		jo.put("jeito", jeito);
		return jo;
	}
	
	public JSONObject toJSONObject(int id) {
		JSONObject jo = getPosition();
		jo.put("id", id);
		jo.put("health", health);
		jo.put("jeito", jeito);
		jo.put("name", name);
		jo.put("icon", icon);
		JSONArray skillsArray = new JSONArray();
		for (int skill_id: skills.keySet()) {
			Skill s = World.getSkill(skill_id);
			JSONObject skillObject = new JSONObject();
			skillObject.put("id", skill_id);
			skillObject.put("rank", skills.get(skill_id));
			skillObject.put("name", s.getName());
			skillObject.put("description", s.getDescription());
			skillsArray.put(skillObject);
		}
		jo.put("skills", skillsArray);
		return jo;
	}
	
	// pick 1 member
	public static Member pickRandom(Player p){
		return World.getMember(p.getPartyMember(Util.randomInt(p.partySize()-1)));
	}
	
	// pick n members
	public static ArrayList<Member> pickRandom(Player p, int n){
		int size = p.partySize();
		if (n > size) {
			System.err.println("Error: pickRandom() not enough party members");
			System.exit(1);
		}
		ArrayList<Integer> list = new ArrayList<Integer>();
		for (int i=0; i<size; i++) {
			list.add(i);
		}
		for (int i=0; i<n; i++) {
			list.remove(Util.randomInt(list.size()-1));
		}
		
		ArrayList<Member> members = new ArrayList<Member>();
		for (int i: list) {
			members.add(World.getMember(p.getPartyMember(i)));
		}
		return members;
	}
}