import {
  changeMode,
  registerRequest, registerError,
  loginRequest, loginError,
  logoutRequest, logoutError,
  positionRequest, positionError,
} from './actions';
import { subscribe } from '../store';
import { MODE } from '../../game/constants';
import { loadingDialog } from '../../game/dialogs/loading';

export function register(user, email, password, parentDim, exitRegister) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(registerRequest(user, email, password));
      const exitLoading = loadingDialog(parentDim);
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        exitRegister();
        exitLoading();
        clearTimeout(timer);
      });
      const timer = setTimeout(() => {
        unsubscribe();
        exitRegister();
        exitLoading();
        getState().sending && dispatch(registerError('0201')); // Timeout error
      }, 2000);
    }
  }
}

export function login(user, password, exitLogin) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(loginRequest(user, password));
      const exitLoading = loadingDialog();
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        exitLogin();
        exitLoading();
        clearTimeout(timer);
        dispatch(changeMode(MODE.MAP));
      });
      const timer = setTimeout(() => {
        unsubscribe();
        exitLogin();
        exitLoading();
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
