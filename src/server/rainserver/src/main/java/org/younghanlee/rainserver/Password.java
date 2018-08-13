package org.younghanlee.rainserver;
import java.security.SecureRandom;
import java.util.HashMap;

import javax.crypto.Mac;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.binary.Base64;

public class Password{
	public static int iterations = 100;
	public static SecureRandom random;
	public static HashMap<String, String> passwords;
	
	public Password() {
		random = new SecureRandom();
	}
	
	// HMAC SHA256
	public static byte[] hash(byte[] bytes, byte[] salt) {
		byte hash[] = null;
		try {
		    Mac sha256_HMAC = Mac.getInstance("HmacSHA256");
		    SecretKeySpec secret_key = new SecretKeySpec(salt, "HmacSHA256");
		    sha256_HMAC.init(secret_key);

		    hash = sha256_HMAC.doFinal(bytes);
		} catch (Exception e){
		     System.out.println("Password hash Error");
		     System.exit(1);
		}
		return hash;
	}
	
	// PBKDF2 
	public static String multiHash(String password, String salt) {
		byte bytes[] = password.getBytes();
		
		byte previousHash[] = salt.getBytes();
		byte currentHash[] = hash(bytes, previousHash);

		for (int i=0; i<iterations; i++) {
			previousHash = currentHash;
			currentHash = hash(bytes, previousHash);
			for (int j=0; j<currentHash.length; j++) {
				currentHash[j] ^= previousHash[j];
			}
		}
		return Base64.encodeBase64String(currentHash);
	}
	
	public static String generateSalt() {
	    byte bytes[] = new byte[16];
	    random.nextBytes(bytes);
	    String salt = Base64.encodeBase64String(bytes);
	    return salt;
	}
	
	public static void main(String args[]) {

	}
	
}