package org.younghanlee.rainserver;

import org.json.JSONObject;

public class Attack {
	public boolean targets(Member m, int range) {
		return false;
	}
	
	public JSONObject attack(int member_id, int range) {
		Member m = World.getMember(member_id);
		JSONObject payload = new JSONObject();
		payload.put("attacker_id", member_id);
		if (targets(m, range)) {
			
		}
		return Message.UPDATE(payload);
	}
}
