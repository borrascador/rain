import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';

export default function configureStore () {
	const loggerMiddleware = createLogger();
	return createStore(
		reducer,
		applyMiddleware(
			thunkMiddleware,
			// loggerMiddleware
		)
	)
}
