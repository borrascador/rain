import { getActions, mergeArrays } from './utils';

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
    error: null,
    errorMessage: null
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
    error: null,
    errorMessage: null
  });
}

export function tileUpdate(state, action) {
  const tiles = mergeArrays(state.tiles, action.payload.tiles);
  return Object.assign({}, state, {
    tiles: tiles,
    actions: getActions(state.inventory, tiles, state.position)
  });
}

export function eventPrompt(state, action) {
  return Object.assign({}, state, {
    // TODO
    // Use this to receive events...? Should I do `sending: false` here?
  });
}

export function eventResult(state, action) {
  const inventory = mergeArrays(state.inventory, action.payload.inventory);
  const tiles = mergeArrays(state.tiles, action.payload.tiles);
  const party = mergeArrays(state.party, action.payload.party);
  const position = action.payload.position || state.position;
  const actions = getActions(inventory, tiles, position);
  return Object.assign({}, state, {
    sending: false,
    error: null,
    errorMessage: null,
    position,
    inventory,
    tiles,
    party,
    actions
  });
}

export function openSocket(state) {
  return Object.assign({}, state, {
    connected: true,
    loggedIn: false,
    tiles: [],
    party: [],
    inventory: [],
    actions: { 'main': [] },
    vehicle: null,
    story: null,
    position: null,
    sight: null,
    zoom: 3,
    sending: false
  });
}

export function closeSocket(state) {
  return Object.assign({}, state, {
    connected: false,
    loggedIn: false,
    tiles: [],
    party: [],
    inventory: [],
    actions: { 'main': [] },
    vehicle: null,
    story: null,
    position: null,
    sight: null,
    zoom: 3,
    sending: false
  });
}
