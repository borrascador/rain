import {
  changeMode,
  registerRequest, registerError,
  loginRequest, loginError,
  logoutRequest, logoutError,
  positionRequest, positionError,
} from './actions';
import { subscribe } from '../store';
import { MODE } from '../../game/constants';

export function register(user, email, password, callback) {
  return (dispatch, getState) => {
    dispatch(registerRequest(user, email, password));
    const state = getState();
    const unsubscribe = subscribe('sending', state => {
      unsubscribe();
      callback();
      clearTimeout(timer);
    });
    const timer = setTimeout(() => {
      unsubscribe();
      callback();
      getState().sending && dispatch(registerError('0201')); // Timeout error
    }, 2000);
  }
}

export function login(user, password, callback) {
  return (dispatch, getState) => {
    dispatch(loginRequest(user, password));
    const state = getState();
    const unsubscribe = subscribe('sending', state => {
      unsubscribe();
      callback();
      clearTimeout(timer);
      dispatch(changeMode(MODE.MAP));
    });
    const timer = setTimeout(() => {
      unsubscribe();
      callback();
      getState().sending && dispatch(loginError('0201')); // Timeout error
    }, 2000);
  }
}

export function logout(user, callback) {
  return (dispatch, getState) => {
    dispatch(logoutRequest(user));
    const state = getState();
    const unsubscribe = subscribe('sending', state => {
      unsubscribe();
      callback && callback();
      clearTimeout(timer);
    });
    const timer = setTimeout(() => {
      unsubscribe();
      callback && callback();
      getState().sending && dispatch(logoutError('0201')); // Timeout error
    }, 2000);
  }
}


export function position(position, callback) {
  return (dispatch, getState) => {
    dispatch(positionRequest(position));
    const state = getState();
    const unsubscribe = subscribe('sending', state => {
      unsubscribe();
      callback && callback();
      clearTimeout(timer);
    });
    const timer = setTimeout(() => {
      unsubscribe();
      callback && callback();
      getState().sending && dispatch(positionError('0201')); // Timeout error
    }, 2000);
  }
}
