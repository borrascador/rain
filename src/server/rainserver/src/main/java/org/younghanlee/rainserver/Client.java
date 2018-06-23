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
		send(Message.REGISTER_REQUEST("Dan", "dan@gmail.com", "hunter2").toString());
		send(Message.REGISTER_REQUEST("Jan", "jan@gmail.com", "hunter2").toString());
		send(Message.REGISTER_REQUEST("Dan", "dan@gmail.com", "hunter2").toString());
		send(Message.REGISTER_REQUEST("Man", "dan@gmail.com", "hunter2").toString());
		send(Message.LOGIN_REQUEST("Dan", "hunter2").toString());
		send(Message.LOGIN_REQUEST("Jan", "hunter2").toString());
		send(Message.LOGIN_REQUEST("Dan", "hunter2").toString());
		send(Message.LOGOUT_REQUEST().toString());
		send(Message.LOGOUT_REQUEST().toString());
		send(Message.LOGIN_REQUEST("Jan", "hunter2").toString());
		send(Message.LOGOUT_REQUEST().toString());
		send(Message.LOGIN_REQUEST("Jan", "hunter2").toString());
		send(Message.LOGOUT_REQUEST().toString());
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
	
	public static void main(String[] args) throws URISyntaxException {		
		Client client = new Client(new URI("ws://localhost:8887"));
		client.connect();
	}
}