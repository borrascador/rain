import { CLICK, ADD_TILES, REMOVE_TILES } from '../actions/types';
import { makeSrcTiles, makeTestTiles, click } from '../utils/map';

var initialState = {
  visible: true,
  player: { x: 2, y: 2 },
  srcTileSize: 32,
  srcTiles: makeSrcTiles(),
  mapTileSize: 96,
  mapTiles: makeTestTiles(),
};

var map = function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case CLICK:
      return click(state, action);
    case ADD_TILES:
      return state; // TODO: push action.mapTile
    case REMOVE_TILES:
      return state; // TODO: pop action.mapTile by pos
    default:
      return state;
  }
}

module.exports = map;