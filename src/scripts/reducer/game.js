import {
  mergeSlots, mergeTiles2, mergeArrays, updateStory, updateMessages,
  updateInventoryChanges, updatePartyChanges,
  reduceIntegerState, reduceBooleanState, getActions,
} from './utils';
import { revisedInitialState } from './initialState';
import { VIEW, MODE, MODAL } from '../utils/constants';

export function update(state, action) {
  const newState = Object.assign({}, state, {
    slots: mergeSlots(state.slots, action.payload.inventory),
    tiles: mergeTiles2(state, action), // TODO no merging yet
    party: mergeArrays(state.party, action.payload.party),
    players: mergeArrays(state.players, action.payload.players),
    npcs: mergeArrays(state.npcs, action.payload.npcs),
    stories: updateStory(state, action),
    inventoryChanges: updateInventoryChanges(state, action),
    partyChanges: updatePartyChanges(state, action),
    sight: reduceIntegerState(state.sight, action.payload.sight),
    rations: reduceIntegerState(state.rations, action.payload.rations),
    hunting: reduceBooleanState(state.hunting, action.payload.hunting),
    messageLog: updateMessages(state, action),
    needRender: true,
  });
  return Object.assign({}, newState, {
    actions: getActions(newState),
  });
}

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
    }),
    modal: MODAL.FAILURE,
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
  return Object.assign(
    update(state, action),
    {
      sending: false,
      loggedIn: true,
      mode: MODE.TACTICAL,
      view: VIEW.GAME,
    }
  );
}

export function logoutResponse(state) {
  return Object.assign({}, state,
    revisedInitialState({
      view: VIEW.GAME, // COMBAK necessary for state cleanup see RainGame.js
      connected: true,
      errorLog: state.errorLog,
      serverEndpoint: state.serverEndpoint,
    }));
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

export function connectSocket(state, action) {
  return Object.assign({}, state, {
    serverEndpoint: action.payload.url,
  });
}

export function openSocket(state) {
  return Object.assign({}, state,
    revisedInitialState({
      connected: true,
      errorLog: state.errorLog,
      serverEndpoint: state.serverEndpoint,
    }));
}

export function closeSocket(state) {
  return Object.assign({}, state,
    revisedInitialState({
      errorLog: state.errorLog,
      serverEndpoint: state.serverEndpoint,
    }));
}
