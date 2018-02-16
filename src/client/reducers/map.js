import {
  ADD_TILE,
  REMOVE_TILE
} from '../actions/types';

var initialState = {
  srcTileSize: 32,
  srcTiles: [
    { pos: { x: 0, y: 0} },
    { pos: { x: 1, y: 0} },
  ],
  mapTileSize: 128,
  mapTiles: []
};

var testTiles = [
  { pos: { x: 2, y: 1}, layers: [0] },
  { pos: { x: 2, y: 2}, layers: [0, 1] },
];

var map = function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case ADD_TILE:
      return {
        srcTileSize: state.srcTileSize,
        srcTiles: state.srcTiles,
        mapTileSize: state.mapTileSize,
        mapTiles: testTiles // TODO: push action.mapTile
      }
    case REMOVE_TILE:
      return state; // TODO: pop action.mapTile by pos
    default:
      return state;
  }
}

module.exports = map;