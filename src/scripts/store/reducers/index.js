import {
  KEYDOWN,
  KEYUP,
  MOUSEDOWN,
  DRAG,
  MOUSEUP,
  CLICKED,
} from '../actions/types';
import { makeSrcTiles, makeTestTiles, click, addLayer } from '../utils/map';
import { keyDown, keyUp, mouseDown, drag, mouseUp, clicked } from '../utils/input';

import {MODE} from '../../game/constants';
import events from '../../../story/story_1.json';

var initialState = {
  // UI
  mode: MODE.TEXT,

  // story
  events: events,

  // map
  srcTileSize: 32,
  srcTiles: makeSrcTiles(),
  mapTileSize: 64,
  mapTiles: makeTestTiles(),

  // player
  camp: {},
  partyX: 2,
  partyY: 2,
  sight: 3,
  moves: 3,
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
    default:
      return state;
  }
}
