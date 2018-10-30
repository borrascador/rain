import { MODE, VEHICLE } from '../../game/constants';
import keys from '../../../data/keys.json';
import { makeKeys } from './ui';

// import party from '../../../data/party.json';
// import inventory from '../../../data/inventory.json';
// import vehicle from '../../../data/vehicle.json';
// import story from '../../../data/story.json';

const uiState = {
  mode: MODE.TITLE,
  partyTab: 0,
  actions: { 'main': [] },
  zoom: 3,
  slots: []
};

const gameState = {
  tiles: [],
  party: [], // DEBUG with party
  vehicle: null, // DEBUG with vehicle
  stories: [], // DEBUG with story TODO update to stories in example
  inventoryChanges: [],
  partyChanges: [],
  position: null,
  xCoord: null,
  yCoord: null,
  positionTarget: null,
  xTarget: null,
  yTarget: null,
  sight: null,
  pace: null,
  rations: null
};

const inputState = {
  mouseDownLeft: { x: null, y: null },
  mouseDownRight: { x: null, y: null },
  mouseDrop: { x: null, y: null },
  mouseOffset: { x: null, y: null },
  mousePos: { x: null, y: null },
  clickLeft: { x: null, y: null },
  clickRight: { x: null, y: null },
  keys: makeKeys()
};

const connectionState = {
  connected: false,
  loggedIn: false,
  sending: false,
  error: null,
  errorMessage: null,
  errorLog: []
};

export const revisedInitialState = (newState) => Object.assign({},
  uiState,
  gameState,
  inputState,
  connectionState,
  newState
);

export const initialState = Object.assign({},
  uiState,
  gameState,
  inputState,
  connectionState
);
