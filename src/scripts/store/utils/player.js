import { updateObject } from './utils';

function requestPos(state) {
  return updateObject(state, {

  });
}

function receivePos(state, action) {
  return updateObject(state, {
    focusX: action.payload.focusX,
    focusY: action.payload.focusY,
    partyX: action.payload.partyX,
    partyY: action.payload.partyY
  });
}

function requestMove(state, action) {
  return updateObject(state, {
    partyX: action.payload.partyX,
    partyY: action.payload.partyY
  });
}

function receiveMove(state, action) {
  return updateObject(state, {
    focusX: action.payload.focusX,
    focusY: action.payload.focusY,
    partyX: action.payload.partyX,
    partyY: action.payload.partyY
  });
}

export { requestPos, receivePos, requestMove, receiveMove };
