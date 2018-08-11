import { MODE } from '../../game/constants';
import { updateObject } from './utils';

export function makeKeys() {
  let keys = {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
    "Enter": false,
    "Backspace": false,
    "Delete": false,
    "Escape": false,
  };
  for (let i = 48; i <= 57 ; i++) {
      keys[String.fromCharCode(i)] = false;
  }
  for (let i = 65; i <= 90 ; i++) {
      keys[String.fromCharCode(i)] = false;
  }
  for (let i = 97; i <= 122; i++) {
      keys[String.fromCharCode(i)] = false;
  }
  return keys;
}

export function keyDown(state, action) {
  if (state.keys.hasOwnProperty(action.payload.key)) {
    return updateObject(state, {
      keys: updateObject(state.keys, {
        [action.payload.key]: true
      })
    });
  } else {
    return state;
  }
}

export function keyUp(state, action) {
  if (state.keys.hasOwnProperty(action.payload.key)) {
    return updateObject(state, {
      keys: updateObject(state.keys, {
        [action.payload.key]: false
      })
    });
  } else {
    return state;
  }
}

export function mouseDown(state, action) {
  return updateObject(state, {
    xDragging: action.payload.x,
    yDragging: action.payload.y,
  });
}

export function drag(state, action) {
  return updateObject(state, {
    offsetX: state.offsetX + action.payload.x - state.xDragging,
    offsetY: state.offsetY + action.payload.y - state.yDragging,
    xDragging: action.payload.x,
    yDragging: action.payload.y,
  });
}

export function mouseUp(state, action) {
  if (state.xDragging !== null || state.yDragging !== null) {
    return updateObject(state, {
      xDragging: null,
      yDragging: null,
      xClick: action.payload.x,
      yClick: action.payload.y,
    });
  } else {
    return state;
  }
}

export function clicked(state) {
  if (state.xClick !== null && state.yClick !== null) {
    return updateObject(state, {
      xClick: null,
      yClick: null,
    });
  } else {
    return state;
  }
}

export function zoomIn(state) {
  if (state.zoom < 5) {
    return updateObject(state, {
      zoom: state.zoom + 1
    })
  } else {
    return state;
  }
}

export function zoomOut(state) {
  if (state.zoom > 1) {
    return updateObject(state, {
      zoom: state.zoom - 1
    })
  } else {
    return state;
  }
}

export function changeMode(state, action) {
  return updateObject(state, {
    mode: action.payload.mode,
  });
}
