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
  return state.mapTiles.concat(action.payload.tiles);
}

export { buildMap, addLayer, updateMapTiles };
