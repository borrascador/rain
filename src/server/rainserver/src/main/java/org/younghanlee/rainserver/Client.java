package org.younghanlee.rainserver;

import java.net.URI;
import java.net.URISyntaxException;
import java.nio.ByteBuffer;

import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft;
import org.java_websocket.handshake.ServerHandshake;

import org.json.JSONObject;

public class Client extends WebSocketClient {

	public Client(URI serverUri, Draft draft) {
		super(serverUri, draft);
	}

	public Client(URI serverURI) {
		super(serverURI);
	}

	@Override
	public void onOpen(ServerHandshake handshakedata) {
		System.out.println("new connection opened");
		sendRegister("Dan", "MINER");
		sendRegister("Jan", "LOGGER");
	}

	@Override
	public void onClose(int code, String reason, boolean remote) {
		System.out.println("closed with exit code " + code + " additional info: " + reason);
	}

	@Override
	public void onMessage(String message) {
		System.out.println("received message: " + message);
	}

	@Override
	public void onMessage(ByteBuffer message) {
		System.out.println("received ByteBuffer");
	}

	@Override
	public void onError(Exception ex) {
		System.err.println("an error occurred:" + ex);
	}
	
	public void sendRegister(String name, String playerClass){
		JSONObject jo = new JSONObject();
		JSONObject payload = new JSONObject();
		
		payload.accumulate("name", name);
		payload.accumulate("playerClass", playerClass);
		
		jo.accumulate("type", "REGISTER_REQUEST");
		jo.accumulate("payload", payload);
		
		send(jo.toString());
	}
	
	public void sendRequestPosition(String name){
		JSONObject jo = new JSONObject();
		jo.accumulate("type", "request_position");
		jo.accumulate("name", name);
		send(jo.toString());
	}
	
	public void sendMove(String name, int x, int y){
		JSONObject jo = new JSONObject();
		jo.accumulate("type", "move");
		jo.accumulate("name", name);
		jo.accumulate("x", x);
		jo.accumulate("y", y);
		send(jo.toString());
	}
	
	public static void main(String[] args) throws URISyntaxException {		
		Client client = new Client(new URI("ws://localhost:8887"));
		client.connect();
	}
}