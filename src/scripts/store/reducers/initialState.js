import { MODE, VEHICLE } from '../../game/constants';
import keys from '../../../data/keys.json';
import story from '../../../data/story.json';
import party from '../../../data/party.json';
import { makeKeys } from '../utils/input';

const uiState = {
  mode: MODE.TITLE,
  focusX: 2,
  focusY: 2,
  story: story
};

const mapState = {
  zoom: 3,
  mapTiles: []
};

const playerState = {
  position: null,
  sight: 2,
  party: party,
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
  mapState,
  playerState,
  inputState,
  connectionState
);
