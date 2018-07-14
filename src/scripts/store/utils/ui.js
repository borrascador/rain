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

export { zoomIn, zoomOut, changeMode };
