import { OPEN, CLOSE, MESSAGE } from 'redux-websocket-bridge';

import {
  KEYDOWN,
  KEYUP,
  MOUSEDOWN,
  DRAG,
  MOUSEUP,
  CLICKED,
  FOCUS_MENU,
  FOCUS_TILE,
  SEND_MOVE_REQUEST,
  SEND_MOVE_SUCCESS,
  SEND_MOVE_FAILURE,
  LOAD_POSITION_REQUEST,
  LOAD_POSITION_SUCCESS,
  LOAD_POSITION_FAILURE,
  LOAD_TILES_REQUEST,
  LOAD_TILES_SUCCESS,
  LOAD_TILES_FAILURE
} from '../actions/actions';
import { MODE, VEHICLE } from '../../game/constants';
import map from '../../../data/map.json';
import keys from '../../../data/keys.json';
import story from '../../../data/story.json';
import menus from '../../../data/menus.json';
import party from '../../../data/party.json';
import buttons from '../../../data/buttons.json';
import { addLayer, buildMap } from '../utils/map';
import { keyDown, keyUp, mouseDown, drag, mouseUp, clicked } from '../utils/input';
import { focusMenu, focusTile } from '../utils/ui';

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
  zoom: 3,
  mapTiles: buildMap(map),

  // player
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
    icon: 15,
    repair: 5,
  },

  // input
  offsetX: 0,
  offsetY: 0,
  xDragging: null,
  yDragging: null,
  xClick: null,
  yClick: null,
  keys: keys,

  // network
  connected: false,
  loading: false,
  sending: false,
  error: null
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

    case SEND_MOVE_REQUEST:
      return Object.assign({}, state, {
        sending: true,
        error: null
      });
    case SEND_MOVE_SUCCESS:
      return Object.assign({}, state, {
        sending: false
      });
    case SEND_MOVE_FAILURE:
      return Object.assign({}, state, {
        sending: false,
        error: action.error
      });

    case LOAD_POSITION_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case LOAD_POSITION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        position: action.payload.position.result
      });
    case LOAD_POSITION_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case LOAD_TILES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case LOAD_TILES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        tiles: Object.values(action.payload.tiles.result || {})
      });
    case LOAD_TILES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case `@@websocket/${ OPEN }`:
      return Object.assign({}, state, {
        connected: true
      });

    case `@@websocket/${ CLOSE }`:
      return Object.assign({}, state, {
        connected: false
      });

    default:
      return state;
  }
}
