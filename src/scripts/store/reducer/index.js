import {
  KEYDOWN, KEYUP, MOUSEDOWN, DRAG, MOUSEUP, CLICKED,
  ZOOM_IN, ZOOM_OUT, CHANGE_MODE, CLIENT_ERROR,
  REGISTER_REQUEST, REGISTER_RESPONSE, REGISTER_ERROR,
  LOGIN_REQUEST, LOGIN_RESPONSE, LOGIN_ERROR,
  LOGOUT_REQUEST, LOGOUT_RESPONSE, LOGOUT_ERROR,
  POSITION_REQUEST, POSITION_RESPONSE, POSITION_ERROR,
  TILE_UPDATE,
  EVENT_REQUEST, EVENT_PROMPT, EVENT_DECISION, EVENT_RESULT, EVENT_ERROR,
} from '../actions/actions';
import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import {
  keyDown, keyUp, mouseDown, drag, mouseUp, clicked,zoomIn, zoomOut, changeMode
} from './ui';
import {
  sendRequest, receiveError, registerResponse, loginResponse, logoutResponse,
  positionResponse, tileUpdate, eventPrompt, eventResult, openSocket, closeSocket
} from './game';
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
      return sendRequest(state);
    case CLIENT_ERROR:
    case REGISTER_ERROR:
    case LOGIN_ERROR:
    case LOGOUT_ERROR:
    case POSITION_ERROR:
    case EVENT_ERROR:
      return receiveError(state, action);
    case REGISTER_RESPONSE:
      return registerResponse(state);
    case LOGIN_RESPONSE:
      return loginResponse(state, action);
    case LOGOUT_RESPONSE:
      return logoutResponse(state);
    case POSITION_RESPONSE:
      return positionResponse(state, action);
    case TILE_UPDATE:
      return tileUpdate(state, action);
    case EVENT_PROMPT:
      return eventPrompt(state, action);
    case EVENT_RESULT:
      return eventResult(state, action);
    case `@@websocket/${ OPEN }`:
      return openSocket(state);
    case `@@websocket/${ CLOSE }`:
      return closeSocket(state);
    default:
      return state;
  }
}
