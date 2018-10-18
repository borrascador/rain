import {
  KEYDOWN, KEYUP, MOUSEDOWN, MOUSEMOVE, MOUSEUP, CLICKED,
  ZOOM_IN, ZOOM_OUT, SET_PARTY_TAB, SET_ITEM_POSITION, REFRESH_SLOTS,
  CHANGE_MODE, CLOSE_STORY, REMOVE_PARTY_MEMBER, ERROR,
  REGISTER_REQUEST, REGISTER_RESPONSE, LOGIN_REQUEST, LOGIN_RESPONSE,
  LOGOUT_REQUEST, LOGOUT_RESPONSE, UPDATE, EVENT_REQUEST, EVENT_RESPONSE,
} from '../actions/actions';
import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';
import {
  keyDown, keyUp, mouseDown, mouseMove, mouseUp, clicked, zoomIn, zoomOut,
  setPartyTab, setItemPosition, refreshSlots, changeMode, closeStory,
  removePartyMember
} from './ui';
import {
  request, error, registerResponse, loginResponse, logoutResponse,
  update, eventResponse, openSocket, closeSocket
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
    case MOUSEMOVE:
      return mouseMove(state, action);
    case MOUSEUP:
      return mouseUp(state, action);
    case CLICKED:
      return clicked(state);
    case ZOOM_IN:
      return zoomIn(state);
    case ZOOM_OUT:
      return zoomOut(state);
    case SET_PARTY_TAB:
      return setPartyTab(state, action);
    case SET_ITEM_POSITION:
      return setItemPosition(state, action);
    case REFRESH_SLOTS:
      return refreshSlots(state, action);
    case CHANGE_MODE:
      return changeMode(state, action);
    case CLOSE_STORY:
      return closeStory(state);
    case REMOVE_PARTY_MEMBER:
      return removePartyMember(state, action);
    case REGISTER_REQUEST:
    case LOGIN_REQUEST:
    case LOGOUT_REQUEST:
    case EVENT_REQUEST:
      return request(state);
    case ERROR:
      return error(state, action);
    case REGISTER_RESPONSE:
      return registerResponse(state);
    case LOGIN_RESPONSE:
      return loginResponse(state, action);
    case LOGOUT_RESPONSE:
      return logoutResponse(state);
    case UPDATE:
      return update(state, action);
    case EVENT_RESPONSE:
      return eventResponse(state, action);
    case `@@websocket/${ OPEN }`:
      return openSocket(state);
    case `@@websocket/${ CLOSE }`:
      return closeSocket(state);
    default:
      return state;
  }
}
