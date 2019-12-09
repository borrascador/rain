import { createStore, applyMiddleware } from 'redux';
import reduxWebsocket from '@giantmachines/redux-websocket';
// import errorLogger from './middleware/errorLogger';
import actionLogger from './middleware/actionLogger';
import reducer from './reducer';
import * as actions from './actions/actions';

const reduxWebsocketMiddleware = reduxWebsocket();

// NOTE: First argument should be store, but it is unused
const messageConverter = () => next => (action) => {
  if (action.type === 'REDUX_WEBSOCKET::MESSAGE') {
    Object.assign(action, JSON.parse(action.payload.message));
  }
  next(action);
};

function configureStore() {
  let middleware = [
    reduxWebsocketMiddleware,
    messageConverter,
    // errorLogger
  ];

  if (process.env.NODE_ENV === 'development') {
    middleware = [...middleware, actionLogger];
  }

  return createStore(
    reducer,
    applyMiddleware(...middleware),
  );
}

const store = configureStore();

export { store as default };

// NOTE: Exposes store and actions to console in development mode
if (process.env.NODE_ENV === 'development') {
  Object.assign(window, { store, actions });
}
