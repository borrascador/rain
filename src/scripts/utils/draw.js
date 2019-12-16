import {
  BRIGHT_RED, BRIGHT_YELLOW, BRIGHT_GREEN, HOVER_GREEN, PALE_GREEN,
  SOLID_WHITE, FOREST_BLACK, alphaForestBlack, alphaGreen, alphaRed,
} from './colors';

export function drawById(ctx, img, id, x, y) {
  const { tileheight, tilewidth, columns } = img.tileset;
  ctx.drawImage(
    img,
    (id % columns) * tilewidth,
    Math.floor(id / columns) * tileheight,
    tilewidth, tileheight,
    Math.floor(x), Math.floor(y),
    tilewidth, tileheight,
  );
}

export function drawByName(ctx, img, name, x, y) {
  const id = img.tilenames[name];
  drawById(ctx, img, id, x, y);
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
  ctx.font = `${fontSize}px MECC`;
  const lineHeight = fontSize + zoom * gutter - fontSize / 8;
  return lines.map((line, idx) => {
    const lineWidth = ctx.measureText(line.text).width;
    const rawX = canvas.width / 2 - lineWidth / 2;
    const x = roundToZoom(zoom, rawX);
    const rawY = canvas.height * pos + fontSize - lineHeight * lines.length / 2 + lineHeight * idx;
    const y = roundToZoom(zoom, rawY);
    ctx.fillText(line.text, x, y);
    return Object.assign({}, line, {
      xPos: x,
      yPos: y,
      width: lineWidth,
      height: fontSize,
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
    xPos,
    yPos: y,
    width: lengths.reduce((a, b) => Math.max(a, b)),
    height: lineHeight * lines.length,
  };
}

export function itemChangeText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
  let y;
  const lengths = lines.map((line, idx) => {
    y = yPos + idx * lineHeight;
    const change = line.change < 0 ? line.change : `+${line.change}`;
    const color = line.change < 0 ? BRIGHT_RED : BRIGHT_GREEN;
    const text = `${change} ${line.name}`;
    ctx.fillStyle = color;
    ctx.fillText(text, xPos, y);
    return ctx.measureText(text).width;
  });
  return {
    xPos,
    yPos: y,
    width: lengths.reduce((a, b) => Math.max(a, b)),
    height: lineHeight * lines.length,
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
      text = ` ${line.health_change < 0 ? line.health_change : `+${line.health_change}`} health`;
      if (line.health_change < 0) {
        ctx.fillStyle = BRIGHT_RED;
      } else {
        ctx.fillStyle = BRIGHT_GREEN;
      }
      ctx.fillText(text, x, y);
      x += ctx.measureText(text).width;
    }
    if (line.jeito_change !== 0) {
      text = ` ${line.health_change < 0 ? line.health_change : `+${line.health_change}`} health`;
      if (line.health_change < 0) {
        ctx.fillStyle = BRIGHT_RED;
      } else {
        ctx.fillStyle = BRIGHT_GREEN;
      }
      ctx.fillText(text, x, y);
      x += ctx.measureText(text).width;
    }
    return x;
  });
  ctx.fillStyle = PALE_GREEN;
  return {
    xPos,
    yPos: y,
    width: lengths.reduce((a, b) => Math.max(a, b)),
    height: lineHeight * lines.length,
  };
}

export function drawMultipliers(ctx, img, scale, fontSize, lineHeight, multipliers, xPos, yPos) {
  const size = img.tileset.tilewidth * scale;
  let x = xPos;
  return multipliers.map((item) => {
    ctx.fillStyle = item.value > 1 ? BRIGHT_GREEN : BRIGHT_RED;
    const sign = item.value > 1 ? '+' : '-';
    const text = `${sign}${item.value}%`;
    const { width } = ctx.measureText(text);
    ctx.fillText(text, x, yPos);
    drawById(ctx, img, item.icon, scale, x + width, yPos - lineHeight);
    x += width + size * 4 / 3;
    return Object.assign({}, item, {
      xPos: x - width - size * 4 / 3,
      yPos: yPos - lineHeight,
      width: width + size,
      height: size,
      hoverText: `${text} ${item.name}`,
    });
  });
}

export function buttonText(
  canvas, ctx, fontSize, lineHeight, buttons, xPos, yPos, selected, icons, scale,
) {
  const x = xPos + fontSize * 2;
  let y = yPos;
  const result = [];
  buttons.forEach((button) => {
    if (result.length > 0 && result[result.length - 1].hoverText) {
      y += lineHeight / 4;
    }
    ctx.fillStyle = (selected && selected.id === button.id) ? BRIGHT_YELLOW : PALE_GREEN;
    ctx.fillText(`${button.oneIndex}.`, xPos, y);
    const coords = mainText(canvas, ctx, fontSize, lineHeight, button.text, x, y);
    result.push(Object.assign({}, button, coords, {
      xPos,
      width: coords.width + fontSize * 2,
    }));
    y = coords.yPos + lineHeight;
    if (button.multipliers) {
      y += lineHeight / 4;
      const multipliers = drawMultipliers(
        ctx, icons, scale, fontSize, lineHeight, button.multipliers, x, y,
      );
      result.push(...multipliers);
      y = multipliers[multipliers.length - 1].yPos + lineHeight * 2;
    }
  });
  return result;
}

export function splitIntoLines(ctx, text, maxWidth) {
  const blocks = text.split('\n').map(block => block.split(' '));
  const spaceWidth = ctx.measureText(' ').width;
  const lines = [];
  blocks.forEach((block) => {
    let totalWidth = 0;
    let start = 0;
    block.forEach((word, index) => {
      const wordWidth = ctx.measureText(word).width;
      if (totalWidth + wordWidth > maxWidth) {
        lines.push(block.slice(start, index).join(' '));
        start = index;
        totalWidth = wordWidth + spaceWidth;
      } else {
        totalWidth += wordWidth + spaceWidth;
      }
      if (index + 1 === block.length) {
        lines.push((block.slice(start, block.length).join(' ')));
      }
    });
  });
  return lines;
}

export function drawHover(ctx, fontSize, button) {
  const text = button.hoverText || button.name || button.target || 'no text';
  const textWidth = ctx.measureText(text).width;
  const padding = 8;

  ctx.fillStyle = HOVER_GREEN;
  ctx.fillRect(
    button.xPos + button.width / 2 - textWidth / 2 - padding,
    button.yPos - fontSize - padding * 3.5,
    textWidth + padding * 2,
    fontSize + padding * 2,
  );
  const y = button.yPos - padding * 1.5;
  ctx.beginPath();
  ctx.moveTo(button.xPos + button.width / 2 - padding, y);
  ctx.lineTo(button.xPos + button.width / 2 + padding, y);
  ctx.lineTo(button.xPos + button.width / 2, y + padding);
  ctx.closePath();
  ctx.fill();

  ctx.font = `${fontSize}px MECC`;
  ctx.fillStyle = SOLID_WHITE;
  ctx.fillText(
    text,
    button.xPos + button.width / 2 - textWidth / 2,
    button.yPos - padding * 2.5,
  );
}

export function drawTileText(ctx, fontSize, button) {
  const text = button.hoverText || button.name || button.target || 'no text';
  const textWidth = ctx.measureText(text).width;
  const padding = 8;

  const { destX, destY, destWidth } = button;

  // draw box
  ctx.fillStyle = HOVER_GREEN;
  ctx.fillRect(
    destX + destWidth / 2 - textWidth / 2 - padding,
    destY - fontSize - padding * 3.5,
    textWidth + padding * 2,
    fontSize + padding * 2,
  );

  // draw arrow
  ctx.beginPath();
  ctx.moveTo(destX + destWidth / 2 - padding, destY - padding * 1.5);
  ctx.lineTo(destX + destWidth / 2 + padding, destY - padding * 1.5);
  ctx.lineTo(destX + destWidth / 2, destY - padding * 0.5);
  ctx.closePath();
  ctx.fill();

  // draw text
  ctx.font = `${fontSize}px MECC`;
  ctx.fillStyle = SOLID_WHITE;
  ctx.fillText(
    text,
    destX + destWidth / 2 - textWidth / 2,
    destY - padding * 2.5,
  );
}

export function drawDurability(ctx, buttonSize, scale, durability, x, y) {
  const length = (buttonSize - scale * 2) * (durability / 100);
  const xPos = x + scale;
  const yPos = y + buttonSize - scale * 1.5;
  ctx.lineWidth = scale;
  if (durability > 50) {
    ctx.strokeStyle = BRIGHT_GREEN;
  } else if (durability > 25) {
    ctx.strokeStyle = BRIGHT_YELLOW;
  } else if (durability > 0) {
    ctx.strokeStyle = BRIGHT_RED;
  }
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  ctx.lineTo(xPos + length, yPos);
  ctx.stroke();
}

export function slideFadeText(ctx, currentTime, totalTime, fontSize, text, x, y) {
  ctx.font = `${fontSize}MECC`;
  const alpha = 1 - Math.abs(totalTime / 2 - currentTime) / (totalTime / 2);
  ctx.fillStyle = text[0] === '+' ? alphaGreen(alpha) : alphaRed(alpha);
  const yDistance = 150;
  const yOffset = (currentTime / totalTime) * yDistance - yDistance / 2;
  const textWidth = ctx.measureText(text).width;
  ctx.fillText(text, x - textWidth, y + yOffset);
}

export function fadeText(ctx, currentTime, totalTime, fontSize, text, x, y) {
  ctx.font = `${fontSize}MECC`;
  const alpha = 1 - Math.abs(totalTime / 2 - currentTime) / (totalTime / 2);
  ctx.fillStyle = text[0] === '+' ? alphaGreen(alpha) : alphaRed(alpha);
  ctx.fillText(text, x, y);
}

export function fillInverseCircle(ctx, canvas, radius) {
  const { width, height } = canvas;
  const x = width / 2;
  const y = height / 2;

  // Circular gradient for center of screen
  // Add 1 to this radius to prevent clipping
  const innerRadius = 0;
  const outerRadius = radius + 1;
  const gradient = ctx.createRadialGradient(x, y, innerRadius, x, y, outerRadius);
  gradient.addColorStop(0, alphaForestBlack(0));
  gradient.addColorStop(0.75, alphaForestBlack(0.9));
  gradient.addColorStop(1, FOREST_BLACK);
  ctx.fillStyle = gradient;
  ctx.beginPath();
  ctx.arc(x, y, radius + 1, 0, 2 * Math.PI);
  ctx.fill();

  // Inverse circle for remainder of screen
  ctx.fillStyle = FOREST_BLACK;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, 2 * Math.PI);
  ctx.rect(width, 0, -width, height);
  ctx.fill();
}
