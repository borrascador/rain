import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';
import ReduxWebSocketBridge from 'redux-websocket-bridge';
import initSubscriber from 'redux-subscriber';
import { errorLogger } from './utils/errors';

function configureStore () {
	const loggerMiddleware = createLogger();
	return createStore(
		reducer,
		applyMiddleware(
			thunkMiddleware,
			ReduxWebSocketBridge('ws://localhost:8887/'),
			errorLogger,
			loggerMiddleware
		)
	)
}

export const store = configureStore();
export const subscribe = initSubscriber(store);
