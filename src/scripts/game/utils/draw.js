import { BRIGHT_RED, BRIGHT_YELLOW, BRIGHT_GREEN, PALE_GREEN } from '../colors';

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

export function itemChangeText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
  let y;
  const lengths = lines.map((line, idx) => {
    y = yPos + idx * lineHeight;
    const change = line.change < 0 ? line.change : '+' + line.change;
    const color = line.change < 0 ? BRIGHT_RED : BRIGHT_GREEN;
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

export function partyChangeText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
  let y;
  const lengths = lines.map((line, idx) => {
    let x = xPos;
    y = yPos + idx * lineHeight;
    let text = `${line.name}:`;
    ctx.fillStyle = PALE_GREEN;
    ctx.fillText(text, x, y);
    x += ctx.measureText(text).width;
    if (line.health_change !== 0) {
      text = ` ${line.health_change < 0 ? line.health_change : '+' + line.health_change} health`
      if (line.health_change < 0) {
        ctx.fillStyle = BRIGHT_RED;
      } else {
        ctx.fillStyle = BRIGHT_GREEN;
      }
      ctx.fillText(text, x, y)
      x += ctx.measureText(text).width;
    }
    if (line.jeito_change !== 0) {
      text = ` ${line.health_change < 0 ? line.health_change : '+' + line.health_change} health`
      if (line.health_change < 0) {
        ctx.fillStyle = BRIGHT_RED;
      } else {
        ctx.fillStyle = BRIGHT_GREEN;
      }
      ctx.fillText(text, x, y)
      x += ctx.measureText(text).width;
    }
    return x;
  });
  ctx.fillStyle = PALE_GREEN;
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
    ctx.fillStyle = (selected && selected.id === button.id) ? BRIGHT_YELLOW : PALE_GREEN;
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
