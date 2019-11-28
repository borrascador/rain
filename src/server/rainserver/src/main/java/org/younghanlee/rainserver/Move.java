package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

public class Move {
	private int xTarget;
	private int yTarget;
	private int speed; // number of ticks to wait until moving
	private int wait;
	private String direction; // north, south, east, west
	
	public Move(int x, int y, Member m) {
		xTarget = x;
		yTarget = y;
		speed = 5;
		wait = speed;
	}
	
	public void setSpeed(int n) {
		speed = n;
	}
	
	public JSONObject tick(Member m) {
		if (wait > 1) {
			wait -= 1;
			System.out.println("Waiting to move: " + wait);
			return null;
		} else if (wait == 1) {
			int oldTile = m.getTile();
			int oldSubTile = m.getSubTile();
			wait = speed;
			int x = m.getX();
			int y = m.getY();
		
			int xDiff = xTarget - x;
			int yDiff = yTarget - y;
			
			int xNew = x;
			int yNew = y;
			
			if (xDiff > 0) {
				xNew = x+1;
			} else if (xDiff < 0) {
				xNew = x-1;
			}
			
			if (yDiff > 0) {
				yNew = y+1;
			} else if (yDiff < 0) {
				yNew = y-1;
			}
			
			m.setPosition(xNew, yNew);
			
			int newTile = m.getTile();
			int newSubTile = m.getSubTile();
			// System.out.println(oldSubTile + " " + newSubTile);
			if (oldTile == newTile) {
				if (oldSubTile != newSubTile) {
					World.getTile(newTile).changeMemberPosition(oldSubTile, newSubTile, m);
				}
			} else {
				World.getTile(oldTile).changeMemberPosition(oldSubTile, null, m);
				World.getTile(newTile).changeMemberPosition(null, newSubTile, m);
			}
			
			
			System.out.println("Moving to " + xNew + ", " + yNew);
		
			JSONObject payload = m.getPosition();
			payload.put("tiles", m.inSightTiles());

			if (x == xTarget && y == yTarget) {
				m.stopMoving();
				payload.put("pace", 0);
			}

			return payload;
		} else {
			System.err.println("ERROR: unexpected move wait value");
			return null;
		}
	}
	

	
}