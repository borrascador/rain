import { getActions, mergeArrays, makeStory } from './utils';
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
    eating: action.payload.eating,
    actions: getActions(
      action.payload.inventory,
      action.payload.eating,
      action.payload.tiles,
      action.payload.position
    ),
    vehicle: action.payload.vehicle || null,
    story: action.payload.story || null,
    position: action.payload.position,
    sight: action.payload.sight,
    pace: action.payload.pace,
    rations: action.payload.rations,
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
    eating: [],
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

export function update(state, action) {
  const inventory = mergeArrays(state.inventory, action.payload.inventory);
  const tiles = mergeArrays(state.tiles, action.payload.tiles);
  const party = mergeArrays(state.party, action.payload.party);
  const eating = action.payload.eating || state.eating;
  const position = action.payload.position || state.position;
  const story = makeStory(state, action);
  const pace = [0,1,2].includes(action.payload.pace) ? action.payload.pace : state.pace;
  const rations = [0,1,2].includes(action.payload.rations) ? action.payload.rations : state.rations;
  const mode = action.payload.story ? MODE.STORY : MODE.MAP;
  const actions = getActions(inventory, eating, tiles, position);
  return Object.assign({}, state, {
    inventory,
    tiles,
    party,
    eating,
    position,
    story,
    pace,
    rations,
    actions,
    mode
  });
}

export function eventResponse(state, action) {
  const inventory = mergeArrays(state.inventory, action.payload.inventory);
  const tiles = mergeArrays(state.tiles, action.payload.tiles);
  const party = mergeArrays(state.party, action.payload.party);
  const eating = action.payload.eating || state.eating;
  const position = action.payload.position || state.position;
  const story = makeStory(state, action);
  const pace = [0,1,2].includes(action.payload.pace) ? action.payload.pace : state.pace;
  const rations = [0,1,2].includes(action.payload.rations) ? action.payload.rations : state.rations;
  const mode = action.payload.story ? MODE.STORY : MODE.MAP;
  const actions = getActions(inventory, eating, tiles, position);
  return Object.assign({}, state, {
    sending: false,
    error: null,
    errorMessage: null,
    inventory,
    tiles,
    party,
    eating,
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
    eating: [],
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
    eating: [],
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
