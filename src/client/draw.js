function drawMap(ctx, map, atlas) {
  const {srcTileSize, srcTiles, mapTileSize, mapTiles} = map;
  mapTiles.forEach((mapTile) => {
    mapTile.layers.forEach((id) => {
      ctx.drawImage(
        atlas,
        srcTiles[id].pos.x * srcTileSize,
        srcTiles[id].pos.y * srcTileSize,
        srcTileSize,
        srcTileSize,
        mapTile.pos.x * mapTileSize,
        mapTile.pos.y * mapTileSize,
        mapTileSize,
        mapTileSize
      );
    });
  });
}

export {drawMap};