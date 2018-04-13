import {
  KEYDOWN,
  KEYUP,
  MOUSEDOWN,
  DRAG,
  MOUSEUP,
  CLICKED,
  FOCUS_MENU,
  FOCUS_TILE,
  REQUEST_POS,
  RECEIVE_POS,
  REQUEST_MOVE,
  RECEIVE_MOVE,
} from '../actions/types';
import { MODE } from '../../game/constants';
import story from '../../../events/story.json';
import menus from '../../../events/menus.json';
import buttons from '../../../events/buttons.json';
import tiles from '../../../../tilesets/tiles.json';
import { makeSrcTiles, addLayer } from '../utils/map';
import { keyDown, keyUp, mouseDown, drag, mouseUp, clicked } from '../utils/input';
import { focusMenu, focusTile } from '../utils/ui';
import { requestPos, receivePos, requestMove, receiveMove } from '../utils/player';

var initialState = {
  // UI
  mode: MODE.MENU,
  focusX: 2,
  focusY: 2,
  activeMenu: "main",
  story: story,
  menus: menus,
  buttons: buttons,

  // map
  srcTileSize: 32,
  srcTiles: makeSrcTiles(),
  mapTileSize: 64,
  mapTiles: tiles,

  // player
  camp: {},
  partyX: 2,
  partyY: 2,
  sight: 2,
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
    case REQUEST_POS:
      return requestPos(state);
    case RECEIVE_POS:
      return receivePos(state, action);
    case REQUEST_MOVE:
      return requestMove(state, action);
    case RECEIVE_MOVE:
      return receiveMove(state, action);
    default:
      return state;
  }
}
