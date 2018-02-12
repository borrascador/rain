import {
  KEYDOWN,
  KEYUP,
  TRANSLATE_CANVAS_START,
  TRANSLATE_CANVAS,
  TRANSLATE_CANVAS_END,
  CLICK_TILE
} from '../actions/types';

var srcTileSize = 32;
var mapTileSize = 128;

var initialState = {
  canvas: { x: 0, y: 0 },
  tiles: [
    { id: 1, srcPos: { x: 1, y: 0 }, srcTileSize: srcTileSize, pos: { x: 2, y: 1 }, mapTileSize: mapTileSize},
    { id: 2, srcPos: { x: 2, y: 0 }, srcTileSize: srcTileSize, pos: { x: 2, y: 2 }, mapTileSize: mapTileSize},
    { id: 3, srcPos: { x: 3, y: 0 }, srcTileSize: srcTileSize, pos: { x: 3, y: 2 }, mapTileSize: mapTileSize},
    { id: 4, srcPos: { x: 0, y: 3 }, srcTileSize: srcTileSize, pos: { x: 1, y: 2 }, mapTileSize: mapTileSize},
    { id: 5, srcPos: { x: 0, y: 4 }, srcTileSize: srcTileSize, pos: { x: 2, y: 3 }, mapTileSize: mapTileSize},
  ],
  xDragging: null,
  yDragging: null,
  keys: {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
  },
};

var input = function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case KEYDOWN:
      if (state.keys.hasOwnProperty(action.key)) {
        var newKeys = Object.assign({}, state.keys);
        newKeys[action.key] = true;
        return {
          canvas: state.canvas,
          tiles: state.tiles,
          xDragging: state.xDragging,
          yDragging: state.yDragging,
          keys: newKeys,
        }
      } else {
        return state;
      }
    case KEYUP:
      if (state.keys.hasOwnProperty(action.key)) {
        var newKeys = Object.assign({}, state.keys);
        newKeys[action.key] = false;
        return {
          canvas: state.canvas,
          tiles: state.tiles,
          xDragging: state.xDragging,
          yDragging: state.yDragging,
          keys: newKeys,
        }
      } else {
        return state;
      }
    case TRANSLATE_CANVAS_START:
      return {
        canvas: state.canvas,
        tiles: state.tiles,
        xDragging: action.xDragging,
        yDragging: action.yDragging,
        keys: state.keys,
      };
    case TRANSLATE_CANVAS:
      if (state.xDragging !== null || state.yDragging !== null) {
        return {
          canvas: {
            x: state.canvas.x + action.xDragging - state.xDragging,
            y: state.canvas.y + action.yDragging - state.yDragging,
          },
          tiles: state.tiles,
          xDragging: action.xDragging,
          yDragging: action.yDragging,
          keys: state.keys,
        };
      } else {
        return state;
      }
    case TRANSLATE_CANVAS_END:
      return {
        canvas: state.canvas,
        tiles: state.tiles,
        xDragging: null,
        yDragging: null,
        keys: state.keys,
      };
    case CLICK_TILE:
      var newTiles = state.tiles.map(function(tile) {
        if (action.xClick - state.canvas.x >= tile.pos.x * tile.mapTileSize &&
            action.xClick - state.canvas.x < (tile.pos.x + 1) * tile.mapTileSize &&
            action.yClick - state.canvas.y >= tile.pos.y * tile.mapTileSize &&
            action.yClick - state.canvas.y < (tile.pos.y + 1) * tile.mapTileSize) {
          return {
            id: tile.id,
            srcPos: { x: 0, y: 0 },
            srcTileSize: tile.srcTileSize,
            pos: tile.pos,
            mapTileSize: tile.mapTileSize
          };
        } else {
          return tile;
        }
      });
      return {
        canvas: state.canvas,
        tiles: newTiles,
        xDragging: null,
        yDragging: null,
        keys: state.keys,
      }
    default:
      return state;
  }
}

module.exports = input;
