package org.younghanlee.rainserver;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.HashMap;

import org.json.JSONArray;
import org.json.JSONObject;

public class Skill{
	private String name;
	private String description;
	
	public Skill(JSONObject jo) {
		name = jo.getString("name");
		description = jo.getString("description");
	}
	
	public static HashMap<Integer, Skill> readFile() {
		JSONArray ja = null;
		try {
			ja = new JSONArray(new String(Files.readAllBytes(Paths.get("json/skills.json"))));
		} catch (IOException e) {
			System.out.println("Skills file "+ "skills.json" + " not found.");
			System.exit(1);
		}
		
		HashMap<Integer, Skill> skills = new HashMap<Integer, Skill>();
		JSONObject skillObject;
		for (int i = 0; i < ja.length(); i++) {
			skillObject = ja.getJSONObject(i);
			int id = skillObject.getInt("id");
			skills.put(id, new Skill(skillObject));
		}
		return skills;
	}
	
	public String getName() {
		return name;
	}
	
	public String getDescription() {
		return description;
	}
}