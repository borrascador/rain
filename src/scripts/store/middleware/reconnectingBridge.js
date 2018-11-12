import ReduxWebSocketBridge from 'redux-websocket-bridge';
import ReconnectingWebSocket from 'reconnecting-websocket';

export const reconnectingBridge = ReduxWebSocketBridge(() => {
  const rws = new ReconnectingWebSocket(
    'ws://localhost:8887/',
    [],
    { maxReconnectionDelay: 500, connectionTimeout: 500 }
  );
  rws.addEventListener('close', () => {
    return rws._shouldReconnect && rws._connect()
  });
  return rws;
})
