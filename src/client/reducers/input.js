import {
  KEYDOWN,
  KEYUP,
  TRANSLATE_CANVAS_START,
  TRANSLATE_CANVAS,
  TRANSLATE_CANVAS_END,
  CLICK_TILE
} from '../actions/types';
import { keyChange, translateStart, translate, translateEnd } from '../utils/input';

var initialState = {
  canvas: { x: 0, y: 0 },
  xDragging: null,
  yDragging: null,
  keys: {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
  },
};

var input = function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case KEYDOWN:
    case KEYUP:
      return keyChange(state, action);
    case TRANSLATE_CANVAS_START:
      return translateStart(state, action);
    case TRANSLATE_CANVAS:
      return translate(state, action);
    case TRANSLATE_CANVAS_END:
      return translateEnd(state);
    default:
      return state;
  }
}

module.exports = input;
