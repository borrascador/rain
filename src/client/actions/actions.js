import {
  KEYDOWN,
  KEYUP,
  TRANSLATE_CANVAS_START,
  TRANSLATE_CANVAS,
  TRANSLATE_CANVAS_END,
  // CLICK_TILE
  ADD_TILE,
  REMOVE_TILE,
} from './types';

export function keyDown(key) {
  return { type: KEYDOWN, key: key };
}

export function keyUp(key) {
  return { type: KEYUP, key: key };
}

export function translateCanvasStart(x, y) {
  return {
    type: TRANSLATE_CANVAS_START,
    xDragging: x,
    yDragging: y
  };
}

export function translateCanvas(x, y) {
  return {
    type: TRANSLATE_CANVAS,
    xDragging: x,
    yDragging: y
  };
}

export function translateCanvasEnd() {
  return { type: TRANSLATE_CANVAS_END };
}

// export function clickTile(x, y) {
//   return {
//     type: CLICK_TILE,
//     xClick: x,
//     yClick: y
//   };
// }

export function addTile() {
  return { type: ADD_TILE };
}

export function removeTile() {
  return { type: REMOVE_TILE };
}