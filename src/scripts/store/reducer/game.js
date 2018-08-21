import { getActions, mergeArrays } from './utils';
import { MODE } from '../../game/constants';

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
    vehicle: action.payload.vehicle || null,
    story: action.payload.story || null,
    position: action.payload.position,
    sight: action.payload.sight,
    pace: action.payload.pace || null,
    rations: action.payload.story || null,
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
    pace: null,
    rations: null,
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

export function eventResponse(state, action) {
  const inventory = mergeArrays(state.inventory, action.payload.inventory);
  const tiles = mergeArrays(state.tiles, action.payload.tiles);
  const party = mergeArrays(state.party, action.payload.party);
  const position = action.payload.position || state.position;
  const story = action.payload.story || state.story;
  const pace = action.payload.pace || state.pace;
  const rations = action.payload.rations || state.rations;
  const mode = action.payload.story ? MODE.STORY : MODE.MAP;
  const actions = getActions(inventory, tiles, position);
  return Object.assign({}, state, {
    sending: false,
    error: null,
    errorMessage: null,
    inventory,
    tiles,
    party,
    position,
    story,
    pace,
    rations,
    actions,
    mode
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
    pace: null,
    rations: null,
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
    pace: null,
    rations: null,
    zoom: 3,
    sending: false
  });
}
