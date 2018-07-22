package org.younghanlee.rainserver;

import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

public class Server extends WebSocketServer {

	public Server(InetSocketAddress address) {
		super(address);
	}
	
	public static void dump() {
		World.dump();
	}

	@Override
	public void onOpen(WebSocket conn, ClientHandshake handshake) {
		conn.send("Welcome to the server!"); //This method sends a message to the new client
		// broadcast( "new connection: " + handshake.getResourceDescriptor() ); //This method sends a message to all clients connected
		System.out.println("new connection to " + conn.getRemoteSocketAddress());
	}

	@Override
	public void onClose(WebSocket conn, int code, String reason, boolean remote) {
		System.out.println("closed " + conn.getRemoteSocketAddress() + " with exit code " + code + " additional info: " + reason);
		Connection connection = (Connection) conn;
		if (connection.getPlayer() != null) {
			connection.getPlayer().logoff(connection);
		}
		dump();
	}

	@Override
	public void onMessage(WebSocket conn, String message) {
		Connection connection = (Connection) conn;
		MessageHandler.handle(message, connection);
		dump();
		// System.out.println("received message from "	+ conn.getRemoteSocketAddress() + ": " + message);
	}

	@Override
	public void onMessage( WebSocket conn, ByteBuffer message ) {
		System.out.println("received ByteBuffer from "	+ conn.getRemoteSocketAddress());
	}

	@Override
	public void onError(WebSocket conn, Exception ex) {
		System.err.println("an error occured on connection " + conn.getRemoteSocketAddress()  + ":" + ex);
	}
	
	@Override
	public void onStart() {
		System.out.println("server started successfully");
		World.addPlayer("a", "test1@test.com", "TRIBE");
		World.addPlayer("b", "test2@test.com", "TRIBE");
		
		for (Player p: World.getPlayers().values()) {
			for (int i=0; i<4; i++) {
				p.setQuantity(Player.randomInt(World.numItems() -1), Player.randomInt(100));
			}
		}
		dump();
	}
	
	public void flush() {
		for (WebSocket w: getConnections()) {
			// System.out.println(w.toString());
			Connection c = (Connection) w;
			Player p = c.getPlayer();
			if (p != null) {
				p.flushBuffer(c);
			}
		}
	}


	public static void main(String[] args) {
		new World();
		Item item = new Item ("potato");
		item.addTag("seed");
		item.addTag("food");
		World.addItem(item);
		
		item = new Item ("black bean");
		item.addTag("seed");
		item.addTag("food");
		World.addItem(item);
		
		item = new Item ("lima bean");
		item.addTag("seed");
		item.addTag("food");
		World.addItem(item);
		
		item = new Item ("tomato");
		item.addTag("food");
		World.addItem(item);
		
		item = new Item ("tomato seed");
		item.addTag("seed");
		World.addItem(item);	
		
		
		String host = "localhost";
		int port = 8887;

		Server server = new Server(new InetSocketAddress(host, port));
		server.setWebSocketFactory(new WebSocketFactory());
		
		ScheduledExecutorService exec = Executors.newScheduledThreadPool(10);
		exec.scheduleAtFixedRate(new Runnable() {
			@Override
			public void run() {
				System.out.println("Sending updates: ");
				server.flush();
				return;
			}
		}, 0, 1, TimeUnit.SECONDS);
		
		server.run();

		
	}
}