import {
  CLICK,
  ADD_TILE,
  REMOVE_TILE
} from '../actions/types';

var makeSrcTiles = function () {
  let array = [];
  for (let y=0; y<6; y++) {
    for (let x=0; x<5; x++) {
      array.push({ pos: { x, y } });
    }
  }
  return array;
};

var testTiles = [
  { pos: { x: 0, y: 2}, layers: [0] },
  { pos: { x: 1, y: 1}, layers: [0] },
  { pos: { x: 1, y: 2}, layers: [0] },
  { pos: { x: 1, y: 3}, layers: [0] },
  { pos: { x: 2, y: 0}, layers: [0] },
  { pos: { x: 2, y: 1}, layers: [0] },
  { pos: { x: 2, y: 2}, layers: [0, 29] },
  { pos: { x: 2, y: 3}, layers: [0] },
  { pos: { x: 2, y: 4}, layers: [0] },
  { pos: { x: 3, y: 1}, layers: [0, 3] },
  { pos: { x: 3, y: 2}, layers: [0, 3] },
  { pos: { x: 3, y: 3}, layers: [0, 3] },
  { pos: { x: 4, y: 2}, layers: [0] },
];

var screenToTile = function (x, y, size) {
  return {
    x: Math.floor(x / size),
    y: Math.floor(y / size)
  };
};

var initialState = {
  srcTileSize: 32,
  srcTiles: makeSrcTiles(),
  mapTileSize: 96,
  mapTiles: testTiles
};

var map = function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case ADD_TILE:
      return state; // TODO: push action.mapTile
    case REMOVE_TILE:
      return state; // TODO: pop action.mapTile by pos
    case CLICK:
      const pos = screenToTile(action.x, action.y, state.mapTileSize);
      const tile = state.mapTiles.find(tile => 
        tile.pos.x === pos.x && tile.pos.y === pos.y
      );
      return {
        srcTileSize: state.srcTileSize,
        srcTiles: state.srcTiles,
        mapTileSize: state.mapTileSize,
        mapTiles: [
          ...state.mapTiles, 
          {
            pos: tile.pos,
            layers: tile.layers.concat([28])
          }
        ]
      }
    default:
      return state;
  }
}

module.exports = map;