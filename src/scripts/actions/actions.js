import { ACTIONS } from './types';

// Action definitions

export const keyDown = key => ({
  type: ACTIONS.KEY_DOWN,
  payload: { key }
});

export const keyUp = key => ({
  type: ACTIONS.KEY_UP,
  payload: { key }
});

export const mouseDownLeft = (x, y) => ({
  type: ACTIONS.MOUSE_DOWN_LEFT,
  payload: { x, y }
});

export const mouseDownRight = (x, y) => ({
  type: ACTIONS.MOUSE_DOWN_RIGHT,
  payload: { x, y }
});

export const mouseMove = (x, y) => ({
  type: ACTIONS.MOUSE_MOVE,
  payload: { x, y }
});

export const mouseUpLeft = (x, y) => ({
  type: ACTIONS.MOUSE_UP_LEFT,
  payload: { x, y }
});

export const mouseUpRight = (x, y) => ({
  type: ACTIONS.MOUSE_UP_RIGHT,
  payload: { x, y }
});

export const clickedLeft = () => ({
  type: ACTIONS.CLICKED_LEFT
});

export const clickedRight = () => ({
  type: ACTIONS.CLICKED_RIGHT
});

export const zoomIn = () => ({
  type: ACTIONS.ZOOM_IN
});

export const zoomOut = () => ({
  type: ACTIONS.ZOOM_OUT
});

export const setPartyTab = partyTab => ({
  type: ACTIONS.SET_PARTY_TAB,
  payload: { partyTab }
});

export const refreshSlots = slots => ({
  type: ACTIONS.REFRESH_SLOTS,
  payload: { slots }
});

export const refreshTiles = graphTiles => ({
  type: ACTIONS.REFRESH_TILES,
  payload: { graphTiles }
});

export const setView = view => ({
  type: ACTIONS.SET_VIEW,
  payload: { view }
});

export const setMode = mode => ({
  type: ACTIONS.SET_MODE,
  payload: { mode }
});

export const setModal = modal => ({
  type: ACTIONS.SET_MODAL,
  payload: { modal }
});

export const closeModal = () => ({
  type: ACTIONS.CLOSE_MODAL,
})

export const closeStory = () => ({
  type: ACTIONS.CLOSE_STORY
});

export const removePartyMember = id => ({
  type: ACTIONS.REMOVE_PARTY_MEMBER,
  payload: { id }
});

export const dragItem = (item, dragQuantity, originQuantity) => ({
  type: ACTIONS.DRAG_ITEM,
  payload: { item, dragQuantity, originQuantity }
});

export const error = (code, message) => ({
  type: ACTIONS.ERROR,
  payload: { code, message }
});

export const sendError = (code, message) => ({
  type: ACTIONS.ERROR,
  meta: { send: true },
  payload: { code, message }
});

export const registerRequest = (user, email, password) => ({
  type: ACTIONS.REGISTER_REQUEST,
  meta: { send: true },
  payload: { user, email, password }
});

export const registerResponse = () => ({
  type: ACTIONS.REGISTER_RESPONSE
});

export const loginRequest = (user, password) => ({
  type: ACTIONS.LOGIN_REQUEST,
  meta: { send: true },
  payload: { user, password }
});

export const loginResponse = payload => ({
  type: ACTIONS.LOGIN_RESPONSE,
  payload
});

export const logoutRequest = user => ({
  type: ACTIONS.LOGOUT_REQUEST,
  meta: { send: true },
  payload: { user }
});

export const logoutResponse = () => ({
  type: ACTIONS.LOGOUT_RESPONSE
});

export const eventRequest = (eventType, fields) => ({
  type: ACTIONS.EVENT_REQUEST,
  meta: { send: true },
  payload: Object.assign({}, { eventType }, fields)
});

export const eventResponse = payload => ({
  type: ACTIONS.EVENT_RESPONSE,
  payload
});

export const update = payload => ({
  type: ACTIONS.UPDATE,
  payload
});
