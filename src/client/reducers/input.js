import {
  KEYDOWN,
  KEYUP,
  TRANSLATE_CANVAS_START,
  TRANSLATE_CANVAS,
  TRANSLATE_CANVAS_END,
  // CLICK_TILE
} from '../actions/types';

var initialState = {
  canvas: { x: 0, y: 0 },
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
        xDragging: null,
        yDragging: null,
        keys: state.keys,
      };
    // case CLICK_TILE:
    //   var newTiles = state.tiles.map(function(tile) {
    //     if (action.xClick - state.canvas.x >= tile.pos.x * tile.mapTileSize &&
    //         action.xClick - state.canvas.x < (tile.pos.x + 1) * tile.mapTileSize &&
    //         action.yClick - state.canvas.y >= tile.pos.y * tile.mapTileSize &&
    //         action.yClick - state.canvas.y < (tile.pos.y + 1) * tile.mapTileSize) {
    //       return {
    //         id: tile.id,
    //         srcPos: { x: 0, y: 0 },
    //         srcTileSize: tile.srcTileSize,
    //         pos: tile.pos,
    //         mapTileSize: tile.mapTileSize
    //       };
    //     } else {
    //       return tile;
    //     }
    //   });
    //   return {
    //     canvas: state.canvas,
    //     tiles: newTiles,
    //     xDragging: null,
    //     yDragging: null,
    //     keys: state.keys,
    //   }
    default:
      return state;
  }
}

module.exports = input;
