import { CAMERA_SPEED } from '../utils/constants';

export default class Camera {
  constructor(width, height, xStart, yStart, tileWidth) {
    this.width = width;
    this.height = height;
    this.xStart = xStart;
    this.yStart = yStart;
    this.tileWidth = tileWidth;
  }

  center(xPos, yPos, xCoords, yCoords, zoom) {
    // Tactical.js
    this.x = Math.round(((xPos * 64 + xCoords) * this.tileWidth * zoom) - this.width / 2);
    this.y = Math.round(((yPos * 64 + yCoords) * this.tileWidth * zoom) - this.height / 2);
    // Map.js
    // this.x = Math.round(((xPos + xCoords / 32) * this.tileWidth * zoom) - this.width / 2);
    // this.y = Math.round(((yPos + yCoords / 32) * this.tileWidth * zoom) - this.height / 2);
  }

  move(delta, dirx, diry) {
    // move camera
    this.x += dirx * CAMERA_SPEED * delta;
    this.y += diry * CAMERA_SPEED * delta;
  }

  mapToScreen(x, y) {
    return {
      x: x + this.xStart,
      y: y + this.yStart,
    };
  }

  screenToMap(x, y) {
    return {
      x: x - this.xStart,
      y: y - this.yStart,
    };
  }

  getOffsets(x, y, tileWidth, tileHeight, xTransform, yTransform) {
    let xOffset = typeof xTransform === 'number' ? xTransform : 0;
    let yOffset = typeof yTransform === 'number' ? yTransform : 0;
    let widthOffset = tileWidth;
    let heightOffset = tileHeight;
    if (x < 0) {
      xOffset = x;
      widthOffset = Math.abs((tileWidth + x) % tileWidth);
    }
    if (y < 0) {
      yOffset = y;
      heightOffset = Math.abs((tileHeight + y) % tileHeight);
    }
    if (x + tileWidth > this.width) {
      widthOffset = Math.abs((this.width - x) % tileWidth);
    }
    if (y + tileHeight > this.height) {
      heightOffset = Math.abs((this.height - y) % tileHeight);
    }
    return {
      xOffset, yOffset, widthOffset, heightOffset,
    };
  }
}
