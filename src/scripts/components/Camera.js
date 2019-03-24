import { CAMERA_SPEED } from '../utils/constants';

export default class Camera {
  constructor(width, height, xStart, yStart, tileWidth, iconWidth, zoom) {
    this.width = width;
    this.height = height;
    this.xStart = xStart;
    this.yStart = yStart;
    this.tileWidth = tileWidth;
    this.iconWidth = iconWidth;
    this.setZoom(zoom);
  }

  center(xPos, yPos, xCoords, yCoords) {
    this.x = Math.round((xPos + xCoords / 32) * this.tileSize - this.width / 2);
    this.y = Math.round((yPos + yCoords / 32) * this.tileSize - this.height / 2);
  }

  move(delta, dirx, diry) {
    // move camera
    this.x += dirx * CAMERA_SPEED * delta;
    this.y += diry * CAMERA_SPEED * delta;
  }

  setZoom(zoom) {
    if (zoom !== this.zoom) {
      this.tileSize = this.tileWidth * zoom;
      this.iconSize = this.iconWidth * zoom;
    }
    this.zoom = zoom;
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

  log() {
    console.log(this.logs);
  }
}
