import { MODE, VEHICLE } from '../../game/constants';
import map from '../../../data/map.json';
import keys from '../../../data/keys.json';
import story from '../../../data/story.json';
import menus from '../../../data/menus.json';
import party from '../../../data/party.json';
import buttons from '../../../data/buttons.json';
import { buildMap } from '../utils/map';
import { makeKeys } from '../utils/input';

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
  mapTiles: buildMap(map)
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
  keys: makeKeys()
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
