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

export function centerText(canvas, ctx, zoom, gutter, lines, fontSize, pos) {
  ctx.font = fontSize + 'px MECC';
  const lineHeight = fontSize + zoom * gutter - fontSize / 8;
  return lines.map((line, idx) => {
    const lineWidth = ctx.measureText(line.text).width;
    let x = roundToZoom(zoom, canvas.width / 2 - lineWidth / 2);
    let y = roundToZoom(zoom, canvas.height * pos + fontSize - lineHeight * lines.length / 2 + lineHeight * idx);
    ctx.fillText(line.text, x, y);
    return Object.assign({}, line, {
      xPos: x,
      yPos: y,
      width: lineWidth,
      height: fontSize
    });
  });
}

export function storyText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
  let y;
  const lengths = lines.map((line, idx) => {
    y = yPos + idx * lineHeight;
    ctx.fillText(line, xPos, y);
    return ctx.measureText(line).width;
  });

  return {
    xPos: xPos,
    yPos: y,
    width: lengths.reduce((a, b) => Math.max(a, b)),
    height: lineHeight * lines.length
  };
}

export function buttonText(canvas, ctx, fontSize, lineHeight, buttons, start, selectedId) {
  let x = fontSize * 3;
  let y = start;
  return buttons.map((button, idx) => {
    ctx.fillStyle = (selectedId === button.id) ? '#FF0' : '#6F6';
    ctx.fillText(`${button.id}.`, fontSize, y);
    const coords = storyText(canvas, ctx, fontSize, lineHeight, button.text, x, y);
    y = coords.yPos + lineHeight;
    return Object.assign({}, button, coords);
  });
}

export function splitIntoLines(ctx, text, maxWidth) {
  if (ctx.measureText(text).width < maxWidth) return [text];
  const words = text.split(" ");
  const spaceWidth = ctx.measureText(" ").width;
  let lines = [];
  let totalWidth = 0;
  let start = 0;
  words.forEach((word, index) => {
    const wordWidth = ctx.measureText(word).width;
    if (totalWidth + wordWidth > maxWidth) {
      lines.push(words.slice(start, index).join(" "));
      start = index;
      totalWidth = wordWidth + spaceWidth;
    } else {
      totalWidth += wordWidth + spaceWidth;
    }
    if (index + 1 === words.length) {
      lines.push((words.slice(start, words.length).join(" ")));
    }
  });
  return lines;
}
