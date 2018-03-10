import { updateObject } from './utils';

function changeMode(state, action) {
  return updateObject(state, {
    mode: action.payload.mode,
  });
}

export { changeMode };
