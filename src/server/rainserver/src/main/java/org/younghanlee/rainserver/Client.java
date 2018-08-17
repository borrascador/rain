package org.younghanlee.rainserver;

import java.io.File;
import java.io.FileInputStream;
import java.net.URI;
import java.net.URISyntaxException;
import java.nio.ByteBuffer;
import java.security.KeyStore;

import javax.net.ssl.KeyManagerFactory;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManagerFactory;

import org.java_websocket.client.WebSocketClient;
import org.java_websocket.drafts.Draft;
import org.java_websocket.handshake.ServerHandshake;

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
		send(Message.LOGIN_REQUEST("a", "a").toString());
			
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
		
//		SSLContext sslContext = null;
//		
//		try {	
//			String STORETYPE = "JKS";
//			String KEYSTORE = "ClientKeyStore.jks";
//			String STOREPASSWORD = "keystore";
//			String KEYPASSWORD = "keystore";
//
//			KeyStore ks = KeyStore.getInstance( STORETYPE );
//			File kf = new File( KEYSTORE );
//			ks.load( new FileInputStream( kf ), STOREPASSWORD.toCharArray() );
//
//			KeyManagerFactory kmf = KeyManagerFactory.getInstance( "SunX509" );
//			kmf.init( ks, KEYPASSWORD.toCharArray() );
//			TrustManagerFactory tmf = TrustManagerFactory.getInstance( "SunX509" );
//			tmf.init( ks );
//			sslContext = SSLContext.getInstance( "TLS" );
//			sslContext.init( kmf.getKeyManagers(), tmf.getTrustManagers(), null );
//			SSLSocketFactory factory = sslContext.getSocketFactory();
//			client.setSocket( factory.createSocket() );
//		} catch (Exception e) {
//			System.out.println("CLIENT SSL ERROR: "+ e);
//		}

		client.connect();
	}
}