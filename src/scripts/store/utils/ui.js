import { updateObject } from './utils';
import {MODE} from '../../game/constants';

function zoomIn(state) {
  if (state.zoom < 5) {
    return updateObject(state, {
      zoom: state.zoom + 1
    })
  } else {
    return state;
  }
}

function zoomOut(state) {
  if (state.zoom > 1) {
    return updateObject(state, {
      zoom: state.zoom - 1
    })
  } else {
    return state;
  }
}

function changeMode(state, action) {
  return updateObject(state, {
    mode: action.payload.mode,
  });
}

function focusMenu(state, action) {
  return updateObject(state, {
    mode: MODE.MENU,
    activeMenu: action.payload.ref
  });
}

function focusTile(state, action) {
  return updateObject(state, {
    mode: MODE.MAP,
    focusX: action.payload.x,
    focusY: action.payload.y
  });
}

export { zoomIn, zoomOut, changeMode, focusMenu, focusTile };
