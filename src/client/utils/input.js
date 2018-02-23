import { updateObject } from '../utils/utils';

function keyChange(state, action) {
  if (state.keys.hasOwnProperty(action.key)) {
    return updateObject(state, {
      keys: updateObject(state.keys, {
        [action.key]: !state.keys[action.key]
      })
    });
  } else {
    return state;
  }
}

function translateStart(state, action) {
  return updateObject(state, {
    xDragging: action.xDragging,
    yDragging: action.yDragging,  
  });
}

function translate(state, action) {
  if (state.xDragging !== null || state.yDragging !== null) {
    return updateObject(state, {
      canvas: {
        x: state.canvas.x + action.xDragging - state.xDragging,
        y: state.canvas.y + action.yDragging - state.yDragging,
      },
      xDragging: action.xDragging,
      yDragging: action.yDragging,
    });
  } else {
    return state;
  }
}

function translateEnd(state) {
  return updateObject(state, {
    xDragging: null,
    yDragging: null,  
  });
}

export { keyChange, translateStart, translate, translateEnd };