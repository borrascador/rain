import {
  changeMode,
  registerRequest, registerError,
  loginRequest, loginError,
  logoutRequest, logoutError,
  positionRequest, positionError,
  eventRequest, eventError
} from './actions';
import { subscribe } from '../store';
import { MODE } from '../../game/constants';
import { loadingDialog } from '../../game/dialogs/loading';
import { successDialog } from '../../game/dialogs/success';
import { failureDialog } from '../../game/dialogs/failure';

export function register(user, email, password, dimCallback, exitRegister) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(registerRequest(user, email, password));
      const exitLoading = loadingDialog(dimCallback);
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        exitRegister();
        exitLoading();
        clearTimeout(timer);
        if (!getState().error) {
          successDialog(dimCallback);
        } else {
          failureDialog(getState().errorMessage, dimCallback);
        }
      });
      const timer = setTimeout(() => {
        unsubscribe();
        exitRegister();
        exitLoading();
        getState().sending && dispatch(registerError('0201')); // Timeout error
        failureDialog(getState().errorMessage, dimCallback);
      }, 2000);
    }
  }
}

export function login(user, password, dimCallback, exitLogin) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(loginRequest(user, password));
      const exitLoading = loadingDialog(dimCallback);
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        exitLogin();
        exitLoading();
        clearTimeout(timer);
        if (!getState().error) {
          dispatch(changeMode(MODE.MAP));
        } else {
          failureDialog(getState().errorMessage, dimCallback);
        }
      });
      const timer = setTimeout(() => {
        unsubscribe();
        exitLogin();
        exitLoading();
        getState().sending && dispatch(loginError('0201')); // Timeout error
        failureDialog(getState().errorMessage, dimCallback);
      }, 2000);
    }
  }
}

export function logout(callback) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(logoutRequest());
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        callback && callback();
        clearTimeout(timer);
        // NOTE: mode changes to TITLE in tick()
      });
      const timer = setTimeout(() => {
        unsubscribe();
        callback && callback();
        getState().sending && dispatch(logoutError('0201')); // Timeout error
      }, 2000);
    }
  }
}

export function position(position) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(positionRequest(position));
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        clearTimeout(timer);
      });
      const timer = setTimeout(() => {
        unsubscribe();
        getState().sending && dispatch(positionError('0201')); // Timeout error
      }, 2000);
    }
  }
}

export function sendEvent(type, id) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.sending === false) {
      dispatch(eventRequest(type, id));
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        clearTimeout(timer);
      });
      const timer = setTimeout(() => {
        unsubscribe();
        getState().sending && dispatch(eventError('0201')); // Timeout error
      }, 2000);
    }
  }
}
