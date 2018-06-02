import java.io.*;
import java.util.*;
import org.eclipse.jetty.server.Server;
import org.eclipse.jetty.websocket.server.WebSocketHandler;
import org.eclipse.jetty.websocket.servlet.WebSocketServletFactory;

public class Server{
  
  private int serverID;
  
  private Map map;
  
  private Player[] players;
  
  public static void debugHandler(String command){
    switch (command) {
      case "CONNECTIONS":
        System.out.println("Active connections:");
        break;
      case "POSITIONS":
        break;
      case "PLAYER":
        break;
      case "TILE":
        break;
      case "EXIT":
        System.exit(1);
      default:
        System.out.println("Invalid command. See README.md");
    }
  }
  
  public static void main (String[] args){

    
    
    
    Scanner scanner = new Scanner(System.in);
    while(true){
      // Debugging interface
      String input = scanner.next();
      String inputArray[] = input.split(" ");
      String command = inputArray[0].toUpperCase();
      debugHandler(command);
    }
    
  }
}
