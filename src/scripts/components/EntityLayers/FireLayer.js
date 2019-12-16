import Connect from '../../Connect';
import Animation from '../../utils/Animation';
import { colRowToCoords, findTile } from '../utils';

export default class FireLayer {
  constructor(store, canvas, ctx, loader, camera) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.camera = camera;

    this.connect = new Connect(this.store);
    this.visibleEntities = [];

    this.fireCycle = new Animation(3, 1, 0.25);
  }

  update(step) {
    this.fireCycle.tick(step);
  }

  render() {
    const { tiles } = this.connect;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const tacticalImg = this.loader.getImage('tactical', this.connect.zoom);
    const playerImg = this.loader.getImage('player', this.connect.zoom);

    const {
      tileheight: tileHeight,
      tilewidth: tileWidth,
    } = tacticalImg.tileset;

    const {
      tileheight: playerHeight,
      tilewidth: playerWidth,
      columns,
    } = playerImg.tileset;

    const widthRatio = playerWidth / tileWidth;
    const heightRatio = playerHeight / tileHeight;
    
    const startCol = Math.floor(this.camera.x / tileWidth);
    const endCol = startCol + Math.ceil(width / tileWidth);
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight);

    this.visibleEntities = [];
    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const x = Math.round(col * tileWidth - this.camera.x);
        const y = Math.round(row * tileHeight - this.camera.y);
        const {
          xPos, yPos, xCoord, yCoord,
        } = colRowToCoords(col, row);
        const tile = findTile(tiles, xPos, yPos, xCoord, yCoord);

        const {
          xOffset, yOffset, widthOffset, heightOffset,
        } = this.camera.getOffsets(x, y, tileWidth, tileHeight);

        if (tile && tile.fire && tile.fire.id > 0) {
          if (
            widthOffset > 0
            && heightOffset > 0
            && (x + xOffset > -tileWidth && x + xOffset < width)
            && (y + yOffset > -tileHeight && y + yOffset < height)
          ) {
            const icon = this.fireCycle.getValue() + columns;

            const image = playerImg;
            const srcX = (icon % columns) * playerWidth - Math.round(widthRatio * xOffset);
            const srcY = Math.floor(icon / columns) * playerHeight - Math.round(heightRatio * yOffset);
            const srcWidth = widthRatio * widthOffset;
            const srcHeight = heightRatio * heightOffset;
            const destX = x + xOffset + xStart;
            const destY = y + yOffset + yStart;
            const destWidth = widthOffset;
            const destHeight = heightOffset;

            this.visibleEntities.push({
              ...tile.loot,
              image,
              srcX, srcY, srcWidth, srcHeight,
              destX, destY, destWidth, destHeight,
            });

            this.ctx.drawImage(
              image,
              srcX, srcY, srcWidth, srcHeight,
              destX, destY, destWidth, destHeight,
            );
          }
        }
      }
    }
  }
}
