import { getActions, mergeArrays } from './utils';

export function registerResponse(state) {
  return Object.assign({}, state, {
    sending: false,
    error: null
  });
}

export function loginResponse(state, action) {
  return Object.assign({}, state, {
    sending: false,
    loggedIn: true,
    tiles: action.payload.tiles,
    party: action.payload.party,
    inventory: action.payload.inventory,
    actions: getActions(action.payload.inventory, action.payload.tiles, action.payload.position),
    // vehicle: action.payload.vehicle, // TODO
    // story: action.payload.story // TODO
    position: action.payload.position,
    sight: action.payload.sight,
    zoom: 3,
    error: null
  });
}

export function logoutResponse(state) {
  return Object.assign({}, state, {
    tiles: [],
    party: [],
    inventory: [],
    actions: { 'main': [] },
    vehicle: null,
    story: null,
    position: null,
    sight: null,
    zoom: 3,
    sending: false,
    loggedIn: false,
    error: null
  });
}

export function positionResponse(state, action) {
  const tiles = mergeArrays(state.tiles, action.payload.tiles);
  return Object.assign({}, state, {
    sending: false,
    position: action.payload.position,
    tiles: tiles,
    actions: getActions(state.inventory, tiles, action.payload.position),
    error: null
  });
}

export function tileUpdate(state, action) {
  const tiles = mergeArrays(state.tiles, action.payload.tiles);
  return Object.assign({}, state, {
    tiles: tiles,
    actions: getActions(state.inventory, tiles, state.position)
  });
}

export function eventResult(state, action) {
  const inventory = mergeArrays(state.inventory, action.payload.inventory)
  return Object.assign({}, state, {
    sending: false,
    party: mergeArrays(state.party, action.payload.party),
    inventory: inventory,
    actions: getActions(inventory, state.tiles, state.position)
  });
}
