import { MODE, VEHICLE } from '../../game/constants';
import keys from '../../../data/keys.json';
import { makeKeys } from '../utils/input';

// import party from '../../../data/party.json';
// import inventory from '../../../data/inventory.json';
// import vehicle from '../../../data/vehicle.json';
// import story from '../../../data/story.json';

const uiState = {
  mode: MODE.TITLE,
  zoom: 3
};

const gameState = {
  tiles: [],
  party: [], // DEBUG with party
  inventory: [], // DEBUG with inventory
  vehicle: null, // DEBUG with vehicle
  story: null, // DEBUG with story
  position: null,
  sight: null
};

const inputState = {
  offsetX: 0,
  offsetY: 0,
  xDragging: null,
  yDragging: null,
  xClick: null,
  yClick: null,
  keys: makeKeys()
};

const connectionState = {
  connected: false,
  loggedIn: false,
  sending: false,
  error: null
};

export const initialState = Object.assign({},
  uiState,
  gameState,
  inputState,
  connectionState
);
