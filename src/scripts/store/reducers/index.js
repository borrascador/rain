import {
  KEYDOWN,
  KEYUP,
  MOUSEDOWN,
  DRAG,
  MOUSEUP,
  CLICKED,
  ZOOM_IN,
  ZOOM_OUT,
  CHANGE_MODE,
  FOCUS_MENU,
  FOCUS_TILE,
  REGISTER_REQUEST, REGISTER_RESPONSE, REGISTER_ERROR,
  LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_ERROR,
  LOGOUT_REQUEST, LOGOUT_RESPONSE, LOGOUT_ERROR,
  POSITION_REQUEST, POSITION_RESPONSE, POSITION_ERROR
} from '../actions/actions';
import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import { keyDown, keyUp, mouseDown, drag, mouseUp, clicked } from '../utils/input';
import { zoomIn, zoomOut, changeMode, focusMenu, focusTile } from '../utils/ui';
import { updateMapTiles } from '../utils/map';
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
    case ZOOM_IN:
      return zoomIn(state);
    case ZOOM_OUT:
      return zoomOut(state);
    case CHANGE_MODE:
      return changeMode(state, action);
    case FOCUS_MENU:
      return focusMenu(state, action);
    case FOCUS_TILE:
      return focusTile(state, action);

    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case POSITION_REQUEST:
      return Object.assign({}, state, {
        sending: true,
        error: null
      });

    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case POSITION_ERROR:
      return Object.assign({}, state, {
        sending: false,
        error: action.payload.code,
        errorMessage: action.payload.message
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

    case LOGOUT_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        loggedIn: false,
        error: null
      })

    case POSITION_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        position: action.payload.position,
        mapTiles: updateMapTiles(state, action),
        error: null
      })

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
