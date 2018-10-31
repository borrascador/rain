// Type and action definitions

export const KEY_DOWN = 'KEY_DOWN';
export const keyDown = (key) => ({
  type: KEY_DOWN,
  payload: { key }
});

export const KEY_UP = 'KEY_UP';
export const keyUp = (key) => ({
  type: KEY_UP,
  payload: { key }
});

export const MOUSE_DOWN_LEFT = 'MOUSE_DOWN_LEFT';
export const mouseDownLeft = (x, y) => ({
  type: MOUSE_DOWN_LEFT,
  payload: { x, y }
});

export const MOUSE_DOWN_RIGHT = 'MOUSE_DOWN_RIGHT';
export const mouseDownRight = (x, y) => ({
  type: MOUSE_DOWN_RIGHT,
  payload: { x, y }
});

export const MOUSE_MOVE = 'MOUSE_MOVE';
export const mouseMove = (x, y) => ({
  type: MOUSE_MOVE,
  payload: { x, y }
});

export const MOUSE_UP_LEFT = 'MOUSE_UP_LEFT';
export const mouseUpLeft = (x, y) => ({
  type: MOUSE_UP_LEFT,
  payload: { x, y }
});

export const MOUSE_UP_RIGHT = 'MOUSE_UP_RIGHT';
export const mouseUpRight = (x, y) => ({
  type: MOUSE_UP_RIGHT,
  payload: { x, y }
});

export const CLICKED_LEFT = 'CLICKED_LEFT';
export const clickedLeft = () => ({
  type: CLICKED_LEFT
});

export const CLICKED_RIGHT = 'CLICKED_RIGHT';
export const clickedRight = () => ({
  type: CLICKED_RIGHT
});

export const ZOOM_IN = 'ZOOM_IN';
export const zoomIn = () => ({
  type: ZOOM_IN
});

export const ZOOM_OUT = 'ZOOM_OUT';
export const zoomOut = () => ({
  type: ZOOM_OUT
});

export const SET_PARTY_TAB = 'SET_PARTY_TAB';
export const setPartyTab = (partyTab) => ({
  type: SET_PARTY_TAB,
  payload: { partyTab }
});

export const REFRESH_SLOTS = 'REFRESH_SLOTS';
export const refreshSlots = (slots) => ({
  type: REFRESH_SLOTS,
  payload: { slots }
});

export const CHANGE_MODE = 'CHANGE_MODE';
export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: { mode }
});

export const CLOSE_STORY = 'CLOSE_STORY';
export const closeStory = () => ({
  type: CLOSE_STORY
});

export const REMOVE_PARTY_MEMBER = 'REMOVE_PARTY_MEMBER';
export const removePartyMember = (id) => ({
  type: REMOVE_PARTY_MEMBER,
  payload: { id }
});

export const DRAG_ITEM = 'DRAG_ITEM';
export const dragItem = (item, dragQuantity, originQuantity) => ({
  type: DRAG_ITEM,
  payload: { item, dragQuantity, originQuantity }
});

export const END_DRAG = 'END_DRAG';
export const endDrag = () => ({
  type: END_DRAG
});

export const ERROR = 'ERROR';

export const error = (code, message) => ({
  type: ERROR,
  payload: { code, message }
});

export const sendError = (code, message) => ({
  type: ERROR,
  meta: { send: true },
  payload: { code, message }
});

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_RESPONSE = 'REGISTER_RESPONSE';

export const registerRequest = (user, email, password) => ({
  type: REGISTER_REQUEST,
  meta: { send: true },
  payload: { user, email, password }
});

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';

export const loginRequest = (user, password) => ({
  type: LOGIN_REQUEST,
  meta: { send: true },
  payload: { user, password }
});

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';

export const logoutRequest = (user) => ({
  type: LOGOUT_REQUEST,
  meta: { send: true },
  payload: { user }
});

export const UPDATE = 'UPDATE';

export const EVENT_REQUEST = 'EVENT_REQUEST';
export const EVENT_RESPONSE = 'EVENT_RESPONSE';

export const eventRequest = (eventType, id, optional) => ({
  type: EVENT_REQUEST,
  meta: { send: true },
  payload: Object.assign({}, { eventType, id }, optional)
});
