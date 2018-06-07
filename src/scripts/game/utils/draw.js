export function drawById (ctx, img, id, zoom, x, y) {
  const {tileheight, tilewidth, columns} = img.tileset;
  ctx.drawImage(
    img,
    (id % columns) * tilewidth,
    Math.floor(id / columns) * tileheight,
    tilewidth, tileheight,
    x, y,
    tilewidth * zoom, tileheight * zoom
  );
}

export function drawByName (ctx, img, name, zoom, x, y) {
  const id = img.tilenames[name];
  drawById(ctx, img, id, zoom, x, y);
}
