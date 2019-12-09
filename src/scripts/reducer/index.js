import { ACTIONS } from '../actions/types';
import {
  keyDown, keyUp,
  mouseDownLeft, mouseDownRight, mouseMove, mouseUpLeft, mouseUpRight,
  clickedLeft, clickedRight, zoomIn, zoomOut, needRender, completedRender,
  setPartyTab, refreshSlots, setView, setMode, setModal, closeModal, closeStory,
  removePartyMember, selectPlayer, selectAction, selectTile, dragItem,
} from './ui';
import {
  request, error, registerResponse, loginResponse, logoutResponse,
  update, eventResponse, connectSocket, openSocket, closeSocket,
} from './game';
import { initialState } from './initialState';

const {
  KEY_DOWN, KEY_UP,
  MOUSE_DOWN_LEFT, MOUSE_DOWN_RIGHT, MOUSE_MOVE, MOUSE_UP_LEFT, MOUSE_UP_RIGHT,
  CLICKED_LEFT, CLICKED_RIGHT, ZOOM_IN, ZOOM_OUT, SET_PARTY_TAB, REFRESH_SLOTS,
  SET_VIEW, SET_MODE, SET_MODAL, CLOSE_MODAL, CLOSE_STORY,
  REMOVE_PARTY_MEMBER, SELECT_PLAYER, SELECT_ACTION, SELECT_TILE, DRAG_ITEM, ERROR,
  REGISTER_REQUEST, REGISTER_RESPONSE, LOGIN_REQUEST, LOGIN_RESPONSE,
  LOGOUT_REQUEST, LOGOUT_RESPONSE, UPDATE, EVENT_REQUEST, EVENT_RESPONSE,
  CHAT_BROADCAST, NEED_RENDER, COMPLETED_RENDER,
} = ACTIONS;

export default function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case KEY_DOWN:
      return keyDown(state, action);
    case KEY_UP:
      return keyUp(state, action);
    case MOUSE_DOWN_LEFT:
      return mouseDownLeft(state, action);
    case MOUSE_DOWN_RIGHT:
      return mouseDownRight(state, action);
    case MOUSE_MOVE:
      return mouseMove(state, action);
    case MOUSE_UP_LEFT:
      return mouseUpLeft(state, action);
    case MOUSE_UP_RIGHT:
      return mouseUpRight(state, action);
    case CLICKED_LEFT:
      return clickedLeft(state);
    case CLICKED_RIGHT:
      return clickedRight(state);
    case ZOOM_IN:
      return zoomIn(state);
    case ZOOM_OUT:
      return zoomOut(state);
    case SET_PARTY_TAB:
      return setPartyTab(state, action);
    case REFRESH_SLOTS:
      return refreshSlots(state, action);
    case SET_VIEW:
      return setView(state, action);
    case SET_MODE:
      return setMode(state, action);
    case SET_MODAL:
      return setModal(state, action);
    case CLOSE_MODAL:
      return closeModal(state);
    case CLOSE_STORY:
      return closeStory(state);
    case REMOVE_PARTY_MEMBER:
      return removePartyMember(state, action);
    case SELECT_PLAYER:
      return selectPlayer(state, action);
    case SELECT_ACTION:
      return selectAction(state, action);
    case SELECT_TILE:
      return selectTile(state, action);
    case NEED_RENDER:
      return needRender(state);
    case COMPLETED_RENDER:
      return completedRender(state);
    case DRAG_ITEM:
      return dragItem(state, action);
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
    case CHAT_BROADCAST:
      // todo replace with real implementation
      // probably needs timeout logic
      return state;
    case 'REDUX_WEBSOCKET::CONNECT':
      return connectSocket(state, action);
    case 'REDUX_WEBSOCKET::OPEN':
      return openSocket(state);
    case 'REDUX_WEBSOCKET::CLOSED':
      return closeSocket(state);
    default:
      return state;
  }
}
