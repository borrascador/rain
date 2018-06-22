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
    const state = getState();
    if (state.sending === false) {
      dispatch(registerRequest(user, email, password));
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
}

export function login(user, password, callback) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(loginRequest(user, password));
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
}

export function logout(user, callback) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(logoutRequest());
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        callback && callback();
        clearTimeout(timer);
        dispatch(changeMode(MODE.TITLE));
      });
      const timer = setTimeout(() => {
        unsubscribe();
        callback && callback();
        getState().sending && dispatch(logoutError('0201')); // Timeout error
      }, 2000);
    }
  }
}


export function position(position, callback) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(positionRequest(position));
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
}
