import { updateObject } from './utils';
import {MODE} from '../../game/constants';

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

export { changeMode, focusMenu, focusTile };
