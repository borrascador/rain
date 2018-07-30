import {
  KEYDOWN, KEYUP, MOUSEDOWN, DRAG, MOUSEUP, CLICKED,
  ZOOM_IN, ZOOM_OUT, CHANGE_MODE,
  REGISTER_REQUEST, REGISTER_RESPONSE, REGISTER_ERROR,
  LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_ERROR,
  LOGOUT_REQUEST, LOGOUT_RESPONSE, LOGOUT_ERROR,
  POSITION_REQUEST, POSITION_RESPONSE, POSITION_ERROR,
  TILE_UPDATE,
  EVENT_REQUEST, EVENT_PROMPT, EVENT_DECISION, EVENT_RESULT, EVENT_ERROR,
} from '../actions/actions';
import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import { keyDown, keyUp, mouseDown, drag, mouseUp, clicked } from '../utils/input';
import { zoomIn, zoomOut, changeMode } from '../utils/ui';
import { mergeArrays, inventoryToTabs } from '../utils/utils';
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

    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case POSITION_REQUEST:
    case EVENT_REQUEST:
    case EVENT_DECISION:
      return Object.assign({}, state, {
        sending: true,
        error: null
      });

    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case POSITION_ERROR:
    case EVENT_ERROR:
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
        tiles: action.payload.tiles,
        party: action.payload.party,
        inventory: action.payload.inventory,
        tabs: inventoryToTabs(action.payload.inventory),
        // vehicle: action.payload.vehicle, // TODO
        // story: action.payload.story // TODO
        position: action.payload.position,
        sight: action.payload.sight,
        zoom: 3,
        error: null
      });

    case LOGOUT_RESPONSE:
      return Object.assign({}, state, {
        tiles: [],
        party: [],
        inventory: [],
        tabs: [],
        vehicle: null,
        story: null,
        position: null,
        sight: null,
        zoom: 3,
        sending: false,
        loggedIn: false,
        error: null
      });

    case POSITION_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        position: action.payload.position,
        tiles: mergeArrays(state.tiles, action.payload.tiles),
        error: null
      });

    case TILE_UPDATE:
      return Object.assign({}, state, {
        tiles: mergeArrays(state.tiles, action.payload.tiles)
      });

    case EVENT_PROMPT:
      return Object.assign({}, state, {
        // Use this to receive events...? Should I do `sending: false` here?
      });

    case EVENT_RESULT:
      return Object.assign({}, state, {
        sending: false,
        inventory: mergeArrays(state.inventory, action.payload.inventory)
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
