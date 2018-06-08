export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const register = (user, email, password) => ({
  type: REGISTER_REQUEST,
  meta: { send: true },
  payload: { user, email, password }
});

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const login = (user, password) => ({
  type: LOGIN_REQUEST,
  meta: { send: true },
  payload: { user, password }
});

export const POSITION_REQUEST = 'POSITION_REQUEST';
export const position = (id) => ({
  type: POSITION_REQUEST,
  meta: { send: true },
  payload: { id }
});
