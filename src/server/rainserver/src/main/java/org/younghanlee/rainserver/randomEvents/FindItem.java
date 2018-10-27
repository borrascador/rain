package org.younghanlee.rainserver.randomEvents;

import org.younghanlee.rainserver.Decision;
import org.younghanlee.rainserver.IChoice;
import org.younghanlee.rainserver.IRandomEvent;

public class FindItem{
	public static IChoice findItem_take = new IChoice(){
		
	};

	public static IChoice findItem_leave = new IChoice(){

	};

	public static IRandomEvent findItem = new IRandomEvent () {
	
	};

	public static void addAll() {
		Decision.addChoice("findItem_take", findItem_take);
		Decision.addChoice("findItem_leave", findItem_leave);
	}
}