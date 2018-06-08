import {
  KEYDOWN,
  KEYUP,
  MOUSEDOWN,
  DRAG,
  MOUSEUP,
  CLICKED,
  FOCUS_MENU,
  FOCUS_TILE,
  SEND_MOVE_REQUEST, SEND_MOVE_SUCCESS, SEND_MOVE_FAILURE,
  LOAD_POSITION_REQUEST, LOAD_POSITION_SUCCESS, LOAD_POSITION_FAILURE,
  LOAD_TILES_REQUEST, LOAD_TILES_SUCCESS, LOAD_TILES_FAILURE
} from '../actions/actions';
import {
  REGISTER_REQUEST, REGISTER_RESPONSE,
  LOGIN_REQUEST, LOGIN_RESPONSE,
  POSITION_REQUEST, POSITION_RESPONSE
} from '../actions/requests';
import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import { keyDown, keyUp, mouseDown, drag, mouseUp, clicked } from '../utils/input';
import { focusMenu, focusTile } from '../utils/ui';
import { initialState } from './initialState';

export default function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case KEYDOWN:
      return keyDown(state, action);
    case KEYUP:
      return keyUp(state, action);
    case MOUSEDOWN:
      return mouseDown(state, action);
    case DRAG:
      return drag(state, action);
    case MOUSEUP:
      return mouseUp(state, action);
    case CLICKED:
      return clicked(state);
    case FOCUS_MENU:
      return focusMenu(state, action);
    case FOCUS_TILE:
      return focusTile(state, action);

    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case POSITION_REQUEST:
      return Object.assign({}, state, {
        sending: true,
        error: null
      });

    case REGISTER_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        error: null
      });

    case LOGIN_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        loggedIn: true,
        position: action.payload.position,
        mapTiles: action.payload.tiles,
        error: null
      });

    case POSITION_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        position: action.payload.position,
        mapTiles: action.payload.tiles,
        error: null
      })

    case SEND_MOVE_REQUEST:
      return Object.assign({}, state, {
        sending: true,
        error: null
      });
    case SEND_MOVE_SUCCESS:
      return Object.assign({}, state, {
        sending: false
      });
    case SEND_MOVE_FAILURE:
      return Object.assign({}, state, {
        sending: false,
        error: action.error
      });

    case LOAD_POSITION_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case LOAD_POSITION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        position: action.payload.position.result
      });
    case LOAD_POSITION_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case LOAD_TILES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case LOAD_TILES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        tiles: Object.values(action.payload.tiles.result || {})
      });
    case LOAD_TILES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case `@@websocket/${ OPEN }`:
      return Object.assign({}, state, {
        connected: true
      });

    case `@@websocket/${ CLOSE }`:
      return Object.assign({}, state, {
        connected: false,
        loggedIn: false
      });

    default:
      return state;
  }
}
