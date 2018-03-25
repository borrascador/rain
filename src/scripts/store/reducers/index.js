import {
  KEYDOWN,
  KEYUP,
  MOUSEDOWN,
  DRAG,
  MOUSEUP,
  CLICKED,
  FOCUS_MENU,
  FOCUS_TILE,
} from '../actions/types';
import { focusMenu, focusTile } from '../utils/ui';
import { makeSrcTiles, makeTestTiles, click, addLayer } from '../utils/map';
import { keyDown, keyUp, mouseDown, drag, mouseUp, clicked } from '../utils/input';

import {MODE} from '../../game/constants';
import story from '../../../events/story.json';
import menus from '../../../events/menus.json';
import buttons from '../../../events/buttons.json';

var initialState = {
  // UI
  mode: MODE.MENU,
  focusX: null,
  focusY: null,
  activeMenu: "main",
  story: story,
  menus: menus,
  buttons: buttons,

  // map
  srcTileSize: 32,
  srcTiles: makeSrcTiles(),
  mapTileSize: 64,
  mapTiles: makeTestTiles(),

  // player
  camp: {},
  partyX: null,
  partyY: null,
  sight: null,
  moves: null,
  members: [],
  modifiers: {},
  inventory: {},
  vehicle: {},

  // input
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
  },
};

export default function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case KEYDOWN:
      return keyDown(state, action);
    case KEYUP:
      return keyUp(state, action);
    case MOUSEDOWN:
      return mouseDown(state, action);
    case DRAG:
      return drag(state, action);
    case MOUSEUP:
      return mouseUp(state, action);
    case CLICKED:
      return clicked(state);
    case FOCUS_MENU:
      return focusMenu(state, action);
    case FOCUS_TILE:
      return focusTile(state, action);
    default:
      return state;
  }
}
