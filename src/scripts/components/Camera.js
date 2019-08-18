import { CAMERA_SPEED } from '../utils/constants';

export default class Camera {
  constructor(width, height, xStart, yStart, tileWidth, zoom) {
    this.width = width;
    this.height = height;
    this.xStart = xStart;
    this.yStart = yStart;
    this.tileWidth = tileWidth;
    this.zoom = zoom;
  }

  lazyCenter(xPos, yPos, xCoords, yCoords, zoom) {
    if (!this.x || !this.y) {
      this.centerToPoint(xPos, yPos, xCoords, yCoords);
    } else if (this.zoom !== zoom) {
      this.centerOnZoom(zoom);
    }
  }

  centerToPoint(xPos, yPos, xCoords, yCoords) {
    // Tactical.js
    this.x = Math.round(
      (xPos * 64 + xCoords) * this.tileWidth * this.zoom
      - (this.width - this.tileWidth * this.zoom) / 2
    );
    this.y = Math.round(
      (yPos * 64 + yCoords) * this.tileWidth * this.zoom
      - (this.height - this.tileWidth * this.zoom) / 2
    );
    // Map.js
    // this.x = Math.round(((xPos + xCoords / 32) * this.tileWidth * zoom) - this.width / 2);
    // this.y = Math.round(((yPos + yCoords / 32) * this.tileWidth * zoom) - this.height / 2);
  }

  centerOnZoom(newZoom) {
    // preserve camera center-point on zoom
    this.x = newZoom * ((this.x + this.width / 2) / this.zoom) - this.width / 2;
    this.y = newZoom * ((this.y + this.height / 2) / this.zoom) - this.height / 2;
    this.zoom = newZoom;
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
