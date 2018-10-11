package org.younghanlee.rainserver;

import java.util.List;

import org.java_websocket.WebSocketImpl;
import org.java_websocket.WebSocketListener;
import org.java_websocket.drafts.Draft;
import org.json.JSONObject;

// Connection = WebSocket + Player
public class Connection extends WebSocketImpl {
	
	private Player player;
	
	public Connection(WebSocketListener listener, List<Draft> drafts){
		super(listener, drafts);
		this.player = null;
	}
	
	public Connection(WebSocketListener listener, Draft draft){
		super(listener, draft);
		this.player = null;
	}
	
	public Player getPlayer(){
		return player;
	}
	
	public void setPlayer(Player player){
		this.player = player;
	}
	
	public void sendJSON(JSONObject jo) {
		System.out.println(jo.toString(3));
		send(jo.toString());
	}
	

}