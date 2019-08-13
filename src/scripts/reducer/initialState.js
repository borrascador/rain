import { VIEW, MODAL } from '../utils/constants';
import { makeKeys } from './ui';

// import party from '../../data/party.json';
// import inventory from '../../data/inventory.json';
// import vehicle from '../../data/vehicle.json';
// import story from '../../data/story.json';

const uiState = {
  view: VIEW.TITLE,
  mode: undefined,
  modal: undefined,
  partyTab: 0,
  actions: { main: [] },
  zoom: 7,
  slots: [],
  graphTiles: []
};

const gameState = {
  tiles: [],
  party: [], // DEBUG with party
  vehicle: undefined, // DEBUG with vehicle
  stories: [], // DEBUG with story TODO update to stories in example
  inventoryChanges: [],
  partyChanges: [],
  xPos: undefined,
  yPos: undefined,
  xCoord: undefined,
  yCoord: undefined,
  positionTarget: undefined,
  xTarget: undefined,
  yTarget: undefined,
  sight: undefined,
  pace: undefined,
  rations: undefined,
  hunting: false,
  messageLog: [],
};

const inputState = {
  mouseDownLeft: { x: undefined, y: undefined },
  mouseDownRight: { x: undefined, y: undefined },
  mouseDrop: { x: undefined, y: undefined },
  mouseOffset: { x: undefined, y: undefined },
  mousePos: { x: undefined, y: undefined },
  clickLeft: { x: undefined, y: undefined },
  clickRight: { x: undefined, y: undefined },
  keys: makeKeys()
};

const connectionState = {
  serverEndpoint: 'ws://localhost:8887/',
  connected: false,
  loggedIn: false,
  sending: false,
  error: undefined,
  errorMessage: undefined,
  errorLog: []
};

export const revisedInitialState = newState => Object.assign({},
  uiState,
  gameState,
  inputState,
  connectionState,
  newState);

export const initialState = Object.assign({},
  uiState,
  gameState,
  inputState,
  connectionState);

export const newInitialState = newState => (
  Object.assign(
    JSON.parse(JSON.stringify(initialState)),
    newState || {}
  )
);
