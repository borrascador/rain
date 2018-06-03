import { MODE, VEHICLE } from '../../game/constants';
import story from '../../../events/story.json';
import menus from '../../../events/menus.json';
import party from '../../../events/party.json';
import buttons from '../../../events/buttons.json';
import tiles from '../../../../tilesets/tiles.json';
import { makeSrcTiles } from '../utils/map';

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
  srcTileSize: 32,
  srcTiles: makeSrcTiles(),
  mapTileSize: 96,
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
