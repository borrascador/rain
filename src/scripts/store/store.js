import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import ReduxWebSocketBridge from 'redux-websocket-bridge';
import ReconnectingWebSocket from 'reconnecting-websocket';
import initSubscriber from 'redux-subscriber';
import { errorLogger } from './errors';
import { ACTIONS } from './actions/types';
import obj from './actions/actions';

const {
	KEY_DOWN, KEY_UP, MOUSE_MOVE, REFRESH_SLOTS,
	MOUSE_DOWN_LEFT, MOUSE_UP_LEFT, CLICKED_LEFT,
	MOUSE_DOWN_RIGHT, MOUSE_UP_RIGHT, CLICKED_RIGHT,
} = ACTIONS;

const BLACKLIST = [
	KEY_DOWN, KEY_UP, MOUSE_MOVE, REFRESH_SLOTS,
	MOUSE_DOWN_LEFT, MOUSE_UP_LEFT, CLICKED_LEFT,
	MOUSE_DOWN_RIGHT, MOUSE_UP_RIGHT, CLICKED_RIGHT,
];

function configureStore () {
	const websocketBridge = ReduxWebSocketBridge(() => {
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

	let middleware = [
		thunkMiddleware,
		websocketBridge,
		errorLogger
	];

	if (process.env.NODE_ENV === 'development') {
		const loggerMiddleware = createLogger({
			predicate: (getState, action) => !BLACKLIST.includes(action.type)
		});
	  middleware = [...middleware, loggerMiddleware];
	}

	return createStore(
	  reducer,
	  applyMiddleware(...middleware)
	)
}

export const store = configureStore();
if (process.env.NODE_ENV === 'development') {
	window.store = store;
}

export const subscribe = initSubscriber(store);
