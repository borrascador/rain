package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONObject;

public interface IChoice{
	String getText(Player p); // button text
	JSONObject result(Player p, ArrayList<Multiplier> multipliers); // what happens when you pick this choice
	ArrayList<Multiplier> generateMultipliers(Player p); // this is first called when buttons are being made
}