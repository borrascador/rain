var tileSize = 64;

var initialState = {
  canvas: { x: 0, y: 0 },
  tiles: [
    { id: 1, x: tileSize, y: tileSize, width: tileSize, height: tileSize, color: 'green'},
    { id: 2, x: tileSize*5, y: tileSize*3, width: tileSize, height: tileSize, color: 'orange'},
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

var reducer = function(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case 'KEYDOWN':
      if (state.keys.hasOwnProperty(action.key)) {
        console.log(action.key, "down");
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
    case 'KEYUP':
      if (state.keys.hasOwnProperty(action.key)) {
        console.log(action.key, "up");
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
    case 'CLICK_TILE':
      var newTiles = state.tiles.map(function(tile) {
        if (action.xClick - state.canvas.x >= tile.x && action.xClick - state.canvas.x < tile.x + tileSize &&
            action.yClick - state.canvas.y >= tile.y && action.yClick - state.canvas.y < tile.y + tileSize) {
          return {
            id: tile.id,
            x: tile.x,
            y: tile.y,
            width: tile.width,
            height: tile.height,
            color: "red",
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
    case 'TRANSLATE_CANVAS_START':
      return {
        canvas: state.canvas,
        tiles: state.tiles,
        xDragging: action.xDragging,
        yDragging: action.yDragging,
        keys: state.keys,
      };
    case 'TRANSLATE_CANVAS':
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
    case 'TRANSLATE_CANVAS_END':
      return {
        canvas: state.canvas,
        tiles: state.tiles,
        xDragging: null,
        yDragging: null,
        keys: state.keys,
      };
    default:
      return state;
  }
}

module.exports = reducer;
