package org.younghanlee.rainserver.mapGen;

import java.util.HashMap;
import org.younghanlee.rainserver.Util;

public class MapTile {
	private int habitat;
	private int elevation;
	private HashMap<Integer, Integer> trees;
	
	public MapTile(int habitat, int elevation) {
		this.habitat = habitat;
		this.elevation = elevation;
	}
	
	public void generateTrees() {
		trees = new HashMap<Integer, Integer>();
		for (int i = 0; i<4096; i++) {
			
		}
	}
	
}