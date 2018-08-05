package org.younghanlee.rainserver;

import java.io.File;
import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.file.Files;
import java.nio.file.Path;
import java.util.concurrent.Executors;
import java.util.concurrent.ScheduledExecutorService;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

public class Server extends WebSocketServer {
	private int tick;

	public Server(InetSocketAddress address) {
		super(address);
	}
	
	public static void dump() {
		World.dump();
	}
	
	public int getTick() {
		return tick;
	}
	
	public void tickInc() {
		tick++;
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
	
	public void backup(int index) {
		File map = new File("backup/" + index + "/map.json");
		map.getParentFile().mkdirs();
	}


	public static void main(String[] args) {
		File bf = new File("backup");
		try {
			FileUtils.deleteDirectory(bf);
		} catch (Exception e) {
			System.err.println(e);
		}
		bf.mkdirs();
		
		new World();		
		
		String host = "localhost";
		int port = 8887;

		Server server = new Server(new InetSocketAddress(host, port));
		server.setWebSocketFactory(new WebSocketFactory());
		
		ScheduledExecutorService updateExec = Executors.newScheduledThreadPool(10);
		updateExec.scheduleAtFixedRate(new Runnable() {
			@Override
			public void run() {
				System.out.println("Sending updates: tick "+ server.getTick());
				server.flush();
				server.tickInc();
				return;
			}
		}, 0, 1, TimeUnit.SECONDS);
		
		ScheduledExecutorService backupExec = Executors.newScheduledThreadPool(10);
		backupExec.scheduleAtFixedRate(new Runnable() {
			@Override
			public void run() {
				System.out.println("Preparing backup: " + server.getTick());
				server.backup(server.getTick());
				return;
			}
		}, 0, 10, TimeUnit.SECONDS);
		
		server.run();

		
	}
}