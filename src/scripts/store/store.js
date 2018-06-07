import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';
import ReduxWebSocketBridge from 'redux-websocket-bridge';

export default function configureStore () {
	const loggerMiddleware = createLogger();
	return createStore(
		reducer,
		applyMiddleware(
			thunkMiddleware,
			ReduxWebSocketBridge('ws://localhost:8887/'),
			// loggerMiddleware
		)
	)
}
