package org.younghanlee.rainserver;

public class Util{
	public static int randomInt(int max) {
		return (int)(Math.random() * (max + 1));
	}
	
	public static int randomRoll(int base, float multiplier) {
		return Math.round(randomInt(base) * multiplier);
	}
	
	public static int randomRoll(int base, float multiplier, int max) {
		int r =  Math.round(randomInt(base) * multiplier);
		if (r > max) {
			r = max;
		}
		return r;
	}
}