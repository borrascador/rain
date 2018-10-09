package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONArray;
import org.json.JSONObject;

public class Move {
	private int target;
	private int xTarget;
	private int yTarget;
	private int pace;
	private String direction;
	
	public Move(int target, int x, int y, Player p) {
		this.target = target;
		xTarget = x;
		yTarget = y;
		pace = 1;
		final int width = World.getWidth();
		int difference = target - p.getPosition();
		switch (difference) {
			case 1:
				direction = "east";
				break;
			case -1:
				direction = "west";
				break;
			default:
				if (difference == width) {
					direction = "south";
				} else if (difference == -width) {
					direction = "north";
				}
				break;		
		}
		
	}
	
	public void setPace(int n) {
		pace = n;
	}
	
	public int nStepsTowards(int n, int src, int dst) {
		int t;
		if (src == dst) {
			return src;
		} else if (src < dst) {
			t = src + n;
			if (t > dst) {
				t = dst;
			}
		} else {
			t = src - n;
			if (t < dst) {
				t = dst;
			}
		}
		return t;
	}
	
	public JSONObject tick(Player p) {
		int position = p.getPosition();
		int x = p.getX();
		int y = p.getY();
		int speed = pace * p.getSpeed();
		int newX;
		int newY;
		JSONArray tiles = null;
		switch (direction) {
			case "east":
				newX = (x + speed) % 32;
				if (newX < x) {
					position = position + 1;
					p.setPosition(position);
					tiles = p.inSightArray();
				}
				if (position == target && newX > xTarget){
					newX = xTarget;
				}
				x = newX;
				p.setX(newX);
				y = nStepsTowards(speed, y, yTarget);
				p.setY(y);
				break;
			case "west":
				newX = Math.floorMod((x - speed), 32);
				if (newX > x) {
					position = position - 1;
					p.setPosition(position);
					tiles = p.inSightArray();
				}
				if (position == target && newX < xTarget){
					newX = xTarget;
				}
				x = newX;
				p.setX(newX);
				y = nStepsTowards(speed, y, yTarget);
				p.setY(y);
				break;
			case "south":
				newY = (y + speed) % 32;
				if (newY < y) {
					position = position + World.getWidth();
					p.setPosition(position);
					tiles = p.inSightArray();
				}
				if (position == target && newY > yTarget){
					newY= yTarget;
				}
				y = newY;
				p.setY(newY);
				x = nStepsTowards(speed, x, xTarget);
				p.setX(x);
				break;
			case "north":
				newY = Math.floorMod((y - speed), 32);
				if (newY > y) {
					position = position - World.getWidth();
					p.setPosition(position);
					tiles = p.inSightArray();
				}
				if (position == target && newY < yTarget){
					newY= yTarget;
				}
				y = newY;
				p.setY(newY);
				x = nStepsTowards(speed, x, xTarget);
				p.setX(x);
				break;	
		}
		
		JSONObject payload = new JSONObject();
		if (x == xTarget && y == yTarget && position == target) {
			p.stopMoving();
			payload.put("pace", 0);
		}
		if (tiles != null) {
			payload.put("tiles", tiles);		
		}
		payload.put("position", position);
		payload.put("xCoord", x);
		payload.put("yCoord", y);
		return payload;
	}
	

	
}