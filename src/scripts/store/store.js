import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import ReduxWebSocketBridge from 'redux-websocket-bridge';
import ReconnectingWebSocket from 'reconnecting-websocket';
import initSubscriber from 'redux-subscriber';
import { errorLogger } from './errors';
import {
	KEY_DOWN, KEY_UP, MOUSE_MOVE, REFRESH_SLOTS,
	MOUSE_DOWN_LEFT, MOUSE_UP_LEFT, CLICKED_LEFT,
	MOUSE_DOWN_RIGHT, MOUSE_UP_RIGHT, CLICKED_RIGHT,
} from './actions/actions';

function configureStore () {
	const BLACKLIST = [
		KEY_DOWN, KEY_UP, MOUSE_MOVE, REFRESH_SLOTS,
		MOUSE_DOWN_LEFT, MOUSE_UP_LEFT, CLICKED_LEFT,
		MOUSE_DOWN_RIGHT, MOUSE_UP_RIGHT, CLICKED_RIGHT,
	];
	const loggerMiddleware = createLogger({
		predicate: (getState, action) => !BLACKLIST.includes(action.type)
	});
	return createStore(
		reducer,
		applyMiddleware(
			thunkMiddleware,
			ReduxWebSocketBridge(() => {
				const rws = new ReconnectingWebSocket('ws://localhost:8887/', [], {});
				rws.addEventListener('close', () => rws._shouldReconnect && rws._connect());
				return rws;
			}),
			errorLogger,
			loggerMiddleware
		)
	)
}

export const store = configureStore();
export const subscribe = initSubscriber(store);
