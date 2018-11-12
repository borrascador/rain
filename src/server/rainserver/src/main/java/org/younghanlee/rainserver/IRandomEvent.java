package org.younghanlee.rainserver;

import java.util.ArrayList;

import org.json.JSONObject;

public interface IRandomEvent{
	double generateChance(Player p); 
	JSONObject result(Player p); 
}