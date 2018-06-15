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

export const CHANGE_MODE = 'CHANGE_MODE';
export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: { mode }
});

export const FOCUS_TILE = 'FOCUS_TILE';

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
