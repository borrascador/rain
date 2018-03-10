import {
  KEYDOWN,
  KEYUP,
  MOUSEDOWN,
  DRAG,
  MOUSEUP,
  CLICKED,
  CHANGE_MODE,
} from './types';

export function keyDown(key) {
  return {
    type: KEYDOWN,
    payload: {
      key: key
    }
  };
}

export function keyUp(key) {
  return {
    type: KEYUP,
    payload: {
      key: key
    }
  };
}

export function mouseDown(x, y) {
  return {
    type: MOUSEDOWN,
    payload: {x, y,}
  };
}

export function drag(x, y) {
  return {
    type: DRAG,
    payload: {x, y,}
  };
}

export function mouseUp(x, y) {
  return {
    type: MOUSEUP,
    payload: {x, y,}
  };
}

export function clicked() {
  return {
    type: CLICKED,
  };
}

export function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    payload: {mode,}
  };
}
