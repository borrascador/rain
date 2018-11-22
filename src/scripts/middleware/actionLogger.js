import { createLogger } from 'redux-logger';
import { ACTIONS } from '../actions/types';

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

const actionLogger = createLogger({
  predicate: (getState, action) => !BLACKLIST.includes(action.type),
  collapsed: true
});

export { actionLogger as default };
