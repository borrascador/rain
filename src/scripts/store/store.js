import thunkMiddleware from 'redux-thunk';
import { reconnectingBridge } from './middleware/reconnectingBridge';
import { errorLogger } from './middleware/errorLogger';
import { actionLogger } from './middleware/actionLogger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';
import initSubscriber from 'redux-subscriber';
import * as actions from './actions/actions';
import * as requests from './actions/requests';

function configureStore () {
	let middleware = [
		thunkMiddleware,
		reconnectingBridge,
		errorLogger
	];

	if (process.env.NODE_ENV === 'development') {
	  middleware = [...middleware, actionLogger];
	}

	return createStore(
	  reducer,
	  applyMiddleware(...middleware)
	)
}

export const store = configureStore();
export const subscribe = initSubscriber(store);

// NOTE: Exposes store, actions, and requests to console in development mode
if (process.env.NODE_ENV === 'development') {
	Object.assign(window, { store, actions, requests });
}
