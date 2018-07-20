import { MODE, VEHICLE } from '../../game/constants';
import keys from '../../../data/keys.json';
import story from '../../../data/story.json';
import party from '../../../data/party.json';
import inventory from '../../../data/inventory.json';
import { makeKeys } from '../utils/input';

const uiState = {
  mode: MODE.TITLE,
  zoom: 3
};

const gameState = {
  story: story, // DEBUG with story
  position: null,
  sight: 2,
  tiles: [],
  party: [], // DEBUG with party
  inventory: [], // DEBUG with inventory
  vehicle: {
    type: VEHICLE.JEEP,
    icon: 15,
    repair: 5,
  }
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
