import { updateObject, updateItemInArray } from '../utils/utils';

// Initial state setup

function makeSrcTiles() {
  let array = [];
  for (let y=0; y<6; y++) {
    for (let x=0; x<5; x++) {
      array.push({ pos: { x, y } });
    }
  }
  return array;
}

function makeTestTiles() {
  return [
    { id: 1, pos: { x: 0, y: 2}, layers: [0] },
    { id: 2, pos: { x: 1, y: 1}, layers: [0] },
    { id: 3, pos: { x: 1, y: 2}, layers: [0] },
    { id: 4, pos: { x: 1, y: 3}, layers: [0] },
    { id: 5, pos: { x: 2, y: 0}, layers: [0] },
    { id: 6, pos: { x: 2, y: 1}, layers: [0] },
    { id: 7, pos: { x: 2, y: 2}, layers: [0, 29] },
    { id: 8, pos: { x: 2, y: 3}, layers: [0] },
    { id: 9, pos: { x: 2, y: 4}, layers: [0] },
    { id: 10, pos: { x: 3, y: 1}, layers: [0, 3] },
    { id: 11, pos: { x: 3, y: 2}, layers: [0, 3] },
    { id: 12, pos: { x: 3, y: 3}, layers: [0, 3] },
    { id: 13, pos: { x: 4, y: 2}, layers: [0] },
  ];
}

// Helper functions

function screenToTile(state, action) {
  return state.mapTiles.find(tile => 
    tile.pos.x === Math.floor(action.x / state.mapTileSize) &&
    tile.pos.y === Math.floor(action.y / state.mapTileSize)
  );
}

function findTile(tiles, pos) {
  return tiles.find((tile) => {
    return tile.pos.x === pos.x && tile.pos.y === pos.y;
  });
}

function isPlayer(pos, player) {
  return pos.x === player.x && pos.y === player.y;
}

function isAdjacent(pos, player) {
  const vertical   = pos.x === player.x && (pos.y === player.y + 1 || pos.y === player.y - 1);
  const horizontal = pos.y === player.y && (pos.x === player.x + 1 || pos.x === player.x - 1);
  return vertical || horizontal;
}

function getDirArrow(pos, player) {
  const xDir = pos.x - player.x;
  const yDir = pos.y - player.y;
  if (xDir === -1) return 25;
  if (xDir === 1) return 28;
  if (yDir === -1) return 27;
  if (yDir === 1) return 26;
}

// Reducer functions

function click(state, action) {
  const tile = screenToTile(state, action);
  if (tile) {
    const pos = tile.pos;
    const player = state.player;
    
    if (isPlayer(pos, player)) {
      console.log("player");
    } else if (isAdjacent(pos, player)) {
      return updateObject(state, {
        mapTiles: updateItemInArray(state.mapTiles, tile.id, (item) => {
          return updateObject(item, {
            layers: item.layers.concat(getDirArrow(pos, player))
          });
        })
      });
    } else {
      console.log("visible");
    }
    return state;

  } else {
    console.log("hidden");
    return state;
  }
}

export { makeSrcTiles, makeTestTiles, click };