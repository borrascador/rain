package org.younghanlee.rainserver;

import java.nio.channels.SelectionKey;
import java.nio.channels.SocketChannel;
import java.util.List;

import org.java_websocket.WebSocketAdapter;
import org.java_websocket.drafts.Draft;
import org.java_websocket.WebSocketServerFactory;

public class WebSocketFactory implements WebSocketServerFactory {
	@Override
	public Connection createWebSocket(WebSocketAdapter a, Draft d) {
		return new Connection( a, d );
	}
	@Override
	public Connection createWebSocket( WebSocketAdapter a, List<Draft> d) {
		return new Connection( a, d );
	}
	@Override
	public SocketChannel wrapChannel( SocketChannel channel, SelectionKey key ) {
		return channel;
	}
	@Override
	public void close() {
	}
}