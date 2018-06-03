import { SEND } from 'redux-websocket-bridge';
import fetch from 'cross-fetch';

const URL = 'https://www.jsonstore.io/9d84dcf7d61861f8e2993f268a4e2f34a53b63f3cec297b778dfd2432f9dcba2';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const register = (name) => {
  return {
    type: REGISTER_REQUEST,
    meta: { send: true },
    payload: {
      name: name,
      playerClass: 'TRIBE'
    }
  };
}

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

// TODO: Unused
export const CHANGE_MODE = 'CHANGE_MODE';
export const changeMode = (mode) => ({
  type: CHANGE_MODE,
  payload: { mode }
});

export const FOCUS_TILE = 'FOCUS_TILE';

export const SEND_MOVE_REQUEST = 'SEND_MOVE_REQUEST';
const sendMoveRequest = () => ({
  type: SEND_MOVE_REQUEST
});

export const SEND_MOVE_SUCCESS = 'SEND_MOVE_SUCCESS';
const sendMoveSuccess = () => ({
  type: SEND_MOVE_SUCCESS
});

export const SEND_MOVE_FAILURE = 'SEND_MOVE_FAILURE';
const sendMoveFailure = error => ({
  type: SEND_MOVE_FAILURE,
  payload: { error }
});

export const LOAD_POSITION_REQUEST = 'LOAD_POSITION_REQUEST';
const loadPositionRequest = () => ({
  type: LOAD_POSITION_REQUEST
});

export const LOAD_POSITION_SUCCESS = 'LOAD_POSITION_SUCCESS';
const loadPositionSuccess = position => ({
  type: LOAD_POSITION_SUCCESS,
  payload: { position }
});

export const LOAD_POSITION_FAILURE = 'LOAD_POSITION_FAILURE';
const loadPositionFailure = error => ({
  type: LOAD_POSITION_FAILURE,
  payload: { error }
});

export const LOAD_TILES_REQUEST = 'LOAD_TILES_REQUEST';
const loadTilesRequest = () => ({
  type: LOAD_TILES_REQUEST
});

export const LOAD_TILES_SUCCESS = 'LOAD_TILES_SUCCESS';
const loadTilesSuccess = tiles => ({
  type: LOAD_TILES_SUCCESS,
  payload: { tiles }
});

export const LOAD_TILES_FAILURE = 'LOAD_TILES_FAILURE';
const loadTilesFailure = error => ({
  type: LOAD_TILES_FAILURE,
  payload: { error }
});

function postMove(move) {
  return (dispatch, getState) => {
    dispatch(sendMoveRequest())
    return fetch(URL + '/position/', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(move),
    })
      .then(
        response => dispatch(sendMoveSuccess()),
        error => dispatch(sendMoveFailure(error))
      )
  }
}

export function getPosition() {
  return (dispatch) => {
    dispatch(loadPositionRequest())
    return fetch(URL + '/position/')
      .then(
        response => response.json(),
        error => dispatch(loadPositionFailure(error))
      )
      .then(json =>
        dispatch(loadPositionSuccess(json))
      )
  }
}

export function postMoveAndGetPosition(move) {
  return (dispatch, getState) => {
    return dispatch(postMove(move))
      .then(() => {
        return dispatch(getPosition())
      })
  }
}

// TODO: implement tiles
export function getTiles() {
  return (dispatch) => {
    dispatch(loadTilesRequest())
    return fetch(URL + '/tiles/')
      .then(
        response => response.json(),
        error => dispatch(loadTilesFailure(error))
      )
      .then(json =>
        dispatch(loadTilesSuccess(json))
      )
  }
}

// TODO: implement tiles
export function postMoveAndGetTiles(move) {
  return (dispatch, getState) => {
    return dispatch(postMove(move))
      .then(() => {
        return dispatch(getTiles())
      })
  }
}
