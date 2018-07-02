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

export function roundToZoom(zoom, value) {
  return zoom * Math.round(value / zoom);
}

export function centerText(canvas, ctx, zoom, fontSize, lineSize, lines, pos) {
  return lines.map((line, idx) => {
    let x = canvas.width / 2 - ctx.measureText(line.text).width / 2;
    let y = canvas.height * pos + fontSize - lineSize * lines.length / 2 + lineSize * idx;
    ctx.fillText(line.text, roundToZoom(zoom, x), roundToZoom(zoom, y));
    return Object.assign({}, line, {
      xPos: x,
      yPos: y,
      width: ctx.measureText(line.text).width,
      height: fontSize
    });
  });
}
