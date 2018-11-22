import {
  changeMode, error, registerRequest, loginRequest, logoutRequest, eventRequest,
} from './actions';
import { subscribe } from '../store';
import { MODE } from '../utils/constants';
import loadingDialog from '../dialogs/loading';
import successDialog from '../dialogs/success';
import failureDialog from '../dialogs/failure';

export function register(user, email, password, dimCallback, exitRegister) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.connected && !state.loggedIn && !state.sending) {
      dispatch(registerRequest(user, email, password));
      const exitLoading = loadingDialog(dimCallback);
      let timer;
      const unsubscribe = subscribe('sending', () => {
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
      timer = setTimeout(() => {
        unsubscribe();
        exitRegister();
        exitLoading();
        if (getState().sending) dispatch(error(200, 'Response timeout'));
        failureDialog(getState().errorMessage, dimCallback);
      }, 2000);
    }
  };
}

export function login(user, password, dimCallback, exitLogin) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.connected && !state.loggedIn && !state.sending) {
      dispatch(loginRequest(user, password));
      const exitLoading = loadingDialog(dimCallback);
      let timer;
      const unsubscribe = subscribe('sending', () => {
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
      timer = setTimeout(() => {
        unsubscribe();
        exitLogin();
        exitLoading();
        if (getState().sending) dispatch(error(200, 'Response timeout'));
        failureDialog(getState().errorMessage, dimCallback);
      }, 2000);
    }
  };
}

export function logout(callback) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.connected && state.loggedIn && !state.sending) {
      dispatch(logoutRequest());
      let timer;
      const unsubscribe = subscribe('sending', () => {
        unsubscribe();
        if (callback) callback();
        clearTimeout(timer);
        // NOTE: mode changes to TITLE in tick()
      });
      timer = setTimeout(() => {
        unsubscribe();
        if (callback) callback();
        if (getState().sending) dispatch(error(200, 'Response timeout'));
      }, 2000);
    }
  };
}

export function sendEvent(type, fields) {
  return (dispatch, getState) => {
    const state = getState();
    if (state.connected && state.loggedIn && !state.sending) {
      dispatch(eventRequest(type, fields));
      let timer;
      const unsubscribe = subscribe('sending', () => {
        unsubscribe();
        clearTimeout(timer);
      });
      timer = setTimeout(() => {
        unsubscribe();
        if (getState().sending) dispatch(error(200, 'Response timeout'));
      }, 2000);
    }
  };
}
