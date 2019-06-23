import {
  getActions, mergeArrays, mergeSlots, updateStory,
  updateInventoryChanges, updatePartyChanges, sortTiles,
} from './utils';
import { revisedInitialState } from './initialState';
import { MODE } from '../utils/constants';

export function request(state) {
  return Object.assign({}, state, {
    sending: true,
    error: null,
    errorMessage: null
  });
}

export function error(state, action) {
  return Object.assign({}, state, {
    sending: false,
    error: action.payload.code,
    errorMessage: action.payload.message,
    errorLog: state.errorLog.concat({
      error: action.payload.code,
      errorMessage: action.payload.message
    })
  });
}

export function registerResponse(state) {
  return Object.assign({}, state, {
    sending: false,
    error: null,
    errorMessage: null
  });
}

export function loginResponse(state, action) {
  const position = typeof action.payload.position === 'number'
    ? action.payload.position : state.position;
  const xCoord = typeof action.payload.xCoord === 'number'
    ? action.payload.xCoord : state.xCoord;
  const yCoord = typeof action.payload.yCoord === 'number'
    ? action.payload.yCoord : state.yCoord;
  const positionTarget = typeof action.payload.positionTarget === 'number'
    ? action.payload.positionTarget : state.positionTarget;
  const xTarget = typeof action.payload.xTarget === 'number'
    ? action.payload.xTarget : state.xTarget;
  const yTarget = typeof action.payload.yTarget === 'number'
    ? action.payload.yTarget : state.yTarget;
  return Object.assign({}, state, {
    sending: false,
    loggedIn: true,
    tiles: sortTiles(state, action),
    party: action.payload.party,
    slots: mergeSlots(state.slots, action.payload.inventory),
    actions: getActions(
      action.payload.inventory,
      action.payload.tiles,
      action.payload.position,
      action.payload.hunting
    ),
    vehicle: action.payload.vehicle || null,
    stories: updateStory(state, action),
    inventoryChanges: updateInventoryChanges(state, action),
    partyChanges: updatePartyChanges(state, action),
    position,
    xCoord,
    yCoord,
    positionTarget,
    xTarget,
    yTarget,
    sight: action.payload.sight,
    pace: action.payload.pace,
    rations: action.payload.rations,
    hunting: action.payload.hunting,
    mode: MODE.TACTICAL,
  });
}

export function logoutResponse(state) {
  return Object.assign({}, state,
    revisedInitialState({
      connected: true,
      errorLog: state.errorLog
    }));
}

export function update(state, action) {
  const slots = mergeSlots(state.slots, action.payload.inventory);
  const tiles = sortTiles(state, action);
  // const tiles = mergeArrays(state.tiles, action.payload.tiles);
  const party = mergeArrays(state.party, action.payload.party);
  const position = typeof action.payload.position === 'number'
    ? action.payload.position : state.position;
  const xCoord = typeof action.payload.xCoord === 'number'
    ? action.payload.xCoord : state.xCoord;
  const yCoord = typeof action.payload.yCoord === 'number'
    ? action.payload.yCoord : state.yCoord;
  let positionTarget = typeof action.payload.positionTarget === 'number'
    ? action.payload.positionTarget : state.positionTarget;
  let xTarget = typeof action.payload.xTarget === 'number'
    ? action.payload.xTarget : state.xTarget;
  let yTarget = typeof action.payload.yTarget === 'number'
    ? action.payload.yTarget : state.yTarget;
  const stories = updateStory(state, action);
  const inventoryChanges = updateInventoryChanges(state, action);
  const partyChanges = updatePartyChanges(state, action);
  const pace = [0, 1, 2].includes(action.payload.pace)
    ? action.payload.pace
    : state.pace;
  const rations = [0, 1, 2].includes(action.payload.rations)
    ? action.payload.rations
    : state.rations;
  const hunting = typeof action.payload.hunting === 'boolean'
    ? action.payload.hunting
    : state.hunting;
  if (
    (positionTarget !== null && positionTarget === position
    && xTarget === xCoord && yTarget === yCoord) || pace === 0
  ) {
    positionTarget = null;
    xTarget = null;
    yTarget = null;
  }
  const actions = getActions(slots, tiles, position, hunting);
  return Object.assign({}, state, {
    slots,
    tiles,
    party,
    position,
    xCoord,
    yCoord,
    positionTarget,
    xTarget,
    yTarget,
    stories,
    inventoryChanges,
    partyChanges,
    pace,
    rations,
    actions,
    hunting,
  });
}

export function eventResponse(state, action) {
  return Object.assign(
    update(state, action),
    {
      sending: false,
      error: null,
      errorMessage: null,
    }
  );
}

export function openSocket(state) {
  return Object.assign({}, state,
    revisedInitialState({
      connected: true,
      errorLog: state.errorLog
    }));
}

export function closeSocket(state) {
  return Object.assign({}, state,
    revisedInitialState({
      errorLog: state.errorLog
    }));
}
