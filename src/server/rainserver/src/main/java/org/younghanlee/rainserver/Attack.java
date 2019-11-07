package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

public class Attack {
	public static ArrayList<Member> targets(Member m, int range) {
		
		ArrayList<Member> targets = new ArrayList<Member>();
		int position = m.getSubTile();
		int ts = World.getTileSize();
		int x = position % ts;
		int y = (position - x)/ts;
		int minX = x - range;
		int minY = y - range;
		int tile = m.getTile();
		int targetTile = tile;
		int targetSubTile;
		int w = World.getWidth();
		for (int iY = 0; iY < 2*range + 1; iY++) {
			for (int iX = 0; iX < 2*range + 1; iX++) {
				int xCoord = minX + iX;
				int yCoord = minY + iY;
				if (xCoord < 0) {
					xCoord += ts;
					if (yCoord < 0) {
						yCoord += ts;
						targetTile = tile - w - 1;
					} else {
						targetTile = tile - 1;
					}
				} else if (yCoord < 0) {
					yCoord += ts;
					targetTile = tile - w;
				}
				targetSubTile = yCoord*ts + xCoord;
				ArrayList<Member> list = World.getTile(targetTile).subTileMembers(targetSubTile);
				if (list != null) {
					for (Member member: list) {
						if (!member.equals(m)) {
							targets.add(member);
						}
					}
				}
			}
		}
		
		return targets;
	}
	
	public static JSONObject attack(int member_id, int range) {
		Member m = World.getMember(member_id);
		JSONObject payload = new JSONObject();
		payload.put("attacker_id", member_id);
		JSONArray partyArray = new JSONArray();
		System.out.println("Attacker: " + member_id);
		ArrayList<Member> targets = targets(m, range);
		for (Member target: targets) {
			System.out.println(target.getName() + " takes damage.");
			JSONObject memberObject = target.change(target.getPlayer(), -1, 0);
			partyArray.put(memberObject);
		}
		payload.put("party", partyArray);
		return Message.UPDATE(payload);
	}
}
