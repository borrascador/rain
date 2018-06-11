import { updateObject } from './utils';

function makeKeys() {
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

function keyDown(state, action) {
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

function keyUp(state, action) {
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

function mouseDown(state, action) {
  return updateObject(state, {
    xDragging: action.payload.x,
    yDragging: action.payload.y,
  });
}

function drag(state, action) {
  if (state.xDragging !== null || state.yDragging !== null) {
    return updateObject(state, {
      offsetX: state.offsetX + action.payload.x - state.xDragging,
      offsetY: state.offsetY + action.payload.y - state.yDragging,
      xDragging: action.payload.x,
      yDragging: action.payload.y,
    });
  } else {
    return state;
  }
}

function mouseUp(state, action) {
  if (state.xDragging !== null || state.yDragging !== null) {
    return updateObject(state, {
      xDragging: null,
      yDragging: null,
      xClick: action.payload.x,
      yClick: action.payload.y,
    });
  }
}

function clicked(state) {
  if (state.xClick !== null && state.yClick !== null) {
    return updateObject(state, {
      xClick: null,
      yClick: null,
    });
  }
}

export { makeKeys, keyDown, keyUp, mouseDown, drag, mouseUp, clicked };
