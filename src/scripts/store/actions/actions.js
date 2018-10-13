// Type and action definitions

export const KEYDOWN = 'KEYDOWN';
export const keyDown = (key) => ({
  type: KEYDOWN,
  payload: { key }
});

export const KEYUP = 'KEYUP';
export const keyUp = (key) => ({
  type: KEYUP,
  payload: { key }
});

export const MOUSEDOWN = 'MOUSEDOWN';
export const mouseDown = (x, y) => ({
  type: MOUSEDOWN,
  payload: { x, y }
});

export const MOUSEMOVE = 'MOUSEMOVE';
export const mouseMove = (x, y) => ({
  type: MOUSEMOVE,
  payload: { x, y }
});

export const MOUSEUP = 'MOUSEUP';
export const mouseUp = (x, y) => ({
  type: MOUSEUP,
  payload: { x, y }
});

export const CLICKED = 'CLICKED';
export const clicked = () => ({
  type: CLICKED
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

export const SET_ITEM_POSITION = 'SET_ITEM_POSITION';
export const setItemPosition = (id, position) => ({
  type: SET_ITEM_POSITION,
  payload: { id, position }
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

export const eventRequest = (type, id, optional) => ({
  type: EVENT_REQUEST,
  meta: { send: true },
  payload: Object.assign({}, { type, id }, optional)
});
