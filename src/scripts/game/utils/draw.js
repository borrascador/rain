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

export function trace(ctx, size, x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size, y + size);
  ctx.lineTo(x, y + size);
  ctx.closePath();
  ctx.stroke();
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

export function mainText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
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

export function changeText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
  let y;
  const lengths = lines.map((line, idx) => {
    y = yPos + idx * lineHeight;
    const change = line.change < 0 ? line.change : '+' + line.change;
    const color = line.change < 0 ? '#F00' : '#0F0';
    const text = `${change} ${line.name}`;
    ctx.fillStyle = color;
    ctx.fillText(text, xPos, y);
    return ctx.measureText(text).width;
  });
  return {
    xPos: xPos,
    yPos: y,
    width: lengths.reduce((a, b) => Math.max(a, b)),
    height: lineHeight * lines.length
  };
}

export function buttonText(canvas, ctx, fontSize, lineHeight, buttons, xPos, yPos, selected) {
  let x = xPos + fontSize * 2;
  let y = yPos;
  return buttons.map((button, idx) => {
    ctx.fillStyle = (selected && selected.id === button.id) ? '#FF0' : '#6F6';
    ctx.fillText(`${button.oneIndex}.`, xPos, y);
    const coords = mainText(canvas, ctx, fontSize, lineHeight, button.text, x, y);
    y = coords.yPos + lineHeight;
    return Object.assign({}, button, coords, {
      xPos: xPos,
      width: coords.width + fontSize * 2
    });
  });
}

export function splitIntoLines(ctx, text, maxWidth) {
  const blocks = text.split("\n").map(block => block.split(" "));
  const spaceWidth = ctx.measureText(" ").width;
  let lines = [];
  blocks.forEach(block => {
    let totalWidth = 0;
    let start = 0;
    block.forEach((word, index) => {
      const wordWidth = ctx.measureText(word).width;
      if (totalWidth + wordWidth > maxWidth) {
        lines.push(block.slice(start, index).join(" "));
        start = index;
        totalWidth = wordWidth + spaceWidth;
      } else {
        totalWidth += wordWidth + spaceWidth;
      }
      if (index + 1 === block.length) {
        lines.push((block.slice(start, block.length).join(" ")));
      }
    });
  });
  return lines;
}
