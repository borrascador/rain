import { updateObject, updateItemInArray } from './utils';

// Initial state setup

function makeSrcTiles() {
  let array = [];
  for (let y=0; y<11; y++) {
    for (let x=0; x<5; x++) {
      array.push({ x, y, });
    }
  }
  return array;
}

function makeTestTiles() {
  let array = [];
  for (let y=0; y<20; y++) {
    for (let x=0; x<20; x++) {
      let id = y*20 + x;
      // make in node using tiled data
      array.push({ id, x, y, layers: {base: 0, middle: layer2[id] === 0 ? 0 : layer2[id] - 1}});
    }
  }
  return array;
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

function click(state, action) {
  const tile = screenToTile(state, action);
  const {partyX, partyY} = state;
  if (tile) {
    if (isPlayer(tile, partyX, partyY)) {
      console.log("player");
    } else {
      console.log("visible");
    }
    return state;
  } else {
    console.log("hidden");
    return state;
  }
}

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

export { makeSrcTiles, makeTestTiles, click, addLayer };
