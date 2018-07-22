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

export const DRAG = 'DRAG';
export const drag = (x, y) => ({
  type: DRAG,
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

export const CHANGE_MODE = 'CHANGE_MODE';
export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: { mode }
});

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_RESPONSE = 'REGISTER_RESPONSE';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export const registerRequest = (user, email, password) => ({
  type: REGISTER_REQUEST,
  meta: { send: true },
  payload: { user, email, password }
});

export const registerError = (code) => ({
  type: REGISTER_ERROR,
  payload: { code }
});

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_RESPONSE = 'LOGIN_RESPONSE';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const loginRequest = (user, password) => ({
  type: LOGIN_REQUEST,
  meta: { send: true },
  payload: { user, password }
});

export const loginError = (code) => ({
  type: LOGIN_ERROR,
  payload: { code }
});

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';
export const LOGOUT_ERROR = 'LOGOUT_ERROR';

export const logoutRequest = (user) => ({
  type: LOGOUT_REQUEST,
  meta: { send: true },
  payload: { user }
});

export const logoutError = (code) => ({
  type: LOGOUT_ERROR,
  payload: { code }
});

export const POSITION_REQUEST = 'POSITION_REQUEST';
export const POSITION_RESPONSE = 'POSITION_RESPONSE';
export const POSITION_ERROR = 'POSITION_ERROR';

export const positionRequest = (position) => ({
  type: POSITION_REQUEST,
  meta: { send: true },
  payload: { position }
});

export const positionError = (code) => ({
  type: POSITION_ERROR,
  payload: { code }
});

export const TILE_UPDATE = 'TILE_UPDATE';
