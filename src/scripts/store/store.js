import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import ReduxWebSocketBridge from 'redux-websocket-bridge';
import ReconnectingWebSocket from 'reconnecting-websocket';
import initSubscriber from 'redux-subscriber';
import { errorLogger } from './errors';
import { KEYDOWN, KEYUP, MOUSEDOWN, MOUSEMOVE, MOUSEUP, CLICKED } from './actions/actions';

function configureStore () {
	const BLACKLIST = [KEYDOWN, KEYUP, MOUSEDOWN, MOUSEMOVE, MOUSEUP, CLICKED];
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
