import {
  changeMode, error, registerRequest, loginRequest, logoutRequest, eventRequest,
} from './actions';
import { subscribe } from '../store';
import { MODE } from '../../game/constants';
import { loadingDialog } from '../../game/dialogs/loading';
import { successDialog } from '../../game/dialogs/success';
import { failureDialog } from '../../game/dialogs/failure';

export function register(user, email, password, dimCallback, exitRegister) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.connected && !state.loggedIn && !state.sending) {
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
        getState().sending && dispatch(error(200, 'Response timeout'));
        failureDialog(getState().errorMessage, dimCallback);
      }, 2000);
    }
  }
}

export function login(user, password, dimCallback, exitLogin) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.connected && !state.loggedIn && !state.sending) {
      dispatch(loginRequest(user, password));
      const exitLoading = loadingDialog(dimCallback);
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        exitLogin();
        exitLoading();
        clearTimeout(timer);
        if (!getState().error) {
          dispatch(changeMode(MODE.GAME));
        } else {
          failureDialog(getState().errorMessage, dimCallback);
        }
      });
      const timer = setTimeout(() => {
        unsubscribe();
        exitLogin();
        exitLoading();
        getState().sending && dispatch(error(200, 'Response timeout'));
        failureDialog(getState().errorMessage, dimCallback);
      }, 2000);
    }
  }
}

export function logout(callback) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.connected && state.loggedIn && !state.sending) {
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
        getState().sending && dispatch(error(200, 'Response timeout'));
      }, 2000);
    }
  }
}

export function sendEvent(type, id, optional) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.connected && state.loggedIn && !state.sending) {
      dispatch(eventRequest(type, id, optional));
      const unsubscribe = subscribe('sending', state => {
        unsubscribe();
        clearTimeout(timer);
      });
      const timer = setTimeout(() => {
        unsubscribe();
        getState().sending && dispatch(error(200, 'Response timeout'));
      }, 2000);
    }
  }
}

if (process.env.NODE_ENV === 'development') {
  Object.assign(
    window,
    {
      requests: {
        register,
        login,
        logout,
        sendEvent
      }
    }
  );
}
