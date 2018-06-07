import { MODE, VEHICLE } from '../../game/constants';
import map from '../../../data/map.json';
import keys from '../../../data/keys.json';
import story from '../../../data/story.json';
import menus from '../../../data/menus.json';
import party from '../../../data/party.json';
import buttons from '../../../data/buttons.json';
import { buildMap } from '../utils/map';

const uiState = {
  mode: MODE.MENU,
  focusX: 2,
  focusY: 2,
  activeMenu: "main",
  story: story,
  menus: menus,
  buttons: buttons
};

const mapState = {
  zoom: 3,
  mapTiles: tiles
};

const playerState = {
  camp: {},
  position: {
    x: null,
    y: null
  },
  sight: 2,
  moves: null,
  party: party,
  modifiers: {},
  inventory: {},
  vehicle: {
    type: VEHICLE.JEEP,
    icon: 31,
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
  keys: {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
    "Enter": false,
    "Backspace": false,
    "Delete": false,
    "Escape": false,
    "0": false,
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false,
  }
};

const connectionState = {
  connected: false,
  sending: false,
  error: null
};

export const initialState = Object.assign({},
  uiState,
  mapState,
  playerState,
  inputState,
  connectionState
);
