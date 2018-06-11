import { updateObject, updateItemInArray } from './utils';

// Initial state setup

function buildMap(map) {
  let mapArray = [];
  for (let y = 0; y < map.height; y++) {
    for (let x = 0; x < map.width; x++) {
      let id = y * map.width + x;
      mapArray[id] = { id, x, y, layers: {
        base: 0,
        middle: map.layers[1].data[id] === 0 ? 0 : map.layers[1].data[id] - 1
      }};
    }
  }
  return mapArray;
}

// Helper functions

function screenToTile(state, action) {
  return state.mapTiles.find(tile =>
    tile.x === Math.floor(action.payload.x / state.mapTileSize) &&
    tile.y === Math.floor(action.payload.y / state.mapTileSize)
  );
}

function findTile(tiles, x, y) {
  return tiles.find(tile => {
    return tile.x === x && tile.y === y;
  });
}

function isPlayer(tile, x, y) {
  return tile.x === x && tile.y === y;
}

function isAdjacent(tile, x, y) {
  const vertical   = tile.x === x && (tile.y === y + 1 || tile.y === y - 1);
  const horizontal = tile.y === y && (tile.x === x + 1 || tile.x === x - 1);
  return vertical || horizontal;
}

function getDirLayer(tile, x, y) {
  const xDir = tile.x - x;
  const yDir = tile.y - y;
  if (xDir === -1) return { top: 25 };
  if (yDir === 1) return { top: 26 };
  if (yDir === -1) return { top: 27 };
  if (xDir === 1) return { top: 28 };
}

// Reducer functions

function addLayer(state, action) {
  const tile = screenToTile(state, action);
  const {partyX, party} = state;
  if (tile && isAdjacent(tile, partyX, partyY)) {
    return updateObject(state, {
      mapTiles: updateItemInArray(state.mapTiles, tile.id, item => {
        return updateObject(item, {
          layers: updateObject(item.layers, getDirLayer(tile, partyX, partyY))
        });
      })
    });
  } else {
    return state;
  }
}

function updateMapTiles(state, action) {
  return state.mapTiles.map((tile) => {
    let newTile = action.payload.tiles[tile.id];
    if (newTile) {
      return Object.assign({}, tile, newTile, {
        layers: Object.assign({}, tile.layers, newTile.layers)
      });
    } else {
      return tile;
    }
  });
}

export { buildMap, updateMapTiles, addLayer };
