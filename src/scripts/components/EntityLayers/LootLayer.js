import Connect from '../../Connect';
import { colRowToCoords, findTile } from '../utils';

export default class LootLayer {
  constructor(store, canvas, ctx, loader, camera) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.camera = camera;

    this.connect = new Connect(this.store);
    this.visibleEntities = [];

    // fire stuff
    // todo remove fire
    
  }

  renderFire() {

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

        if (tile && tile.loot) {
          if (
            widthOffset > 0
            && heightOffset > 0
            && (x + xOffset > -tileWidth && x + xOffset < width)
            && (y + yOffset > -tileHeight && y + yOffset < height)
          ) {
            const icon = 3;
            const widthRatio = playerWidth / tileWidth;
            const heightRatio = playerHeight / tileHeight;

            this.ctx.drawImage(
              playerImg, // image
              (icon % columns) * playerWidth - Math.round(widthRatio * xOffset), // srcX
              Math.floor(icon / columns) * playerHeight - Math.round(heightRatio * yOffset), // srcY
              widthRatio * widthOffset, // srcWidth
              heightRatio * heightOffset, // srcHeight
              x + xOffset + xStart, // destX
              y + yOffset + yStart, // destY
              widthOffset, // destWidth
              heightOffset, // destHeight
            );

            this.visibleEntities.push({
              id: icon,
              xPos: x + xOffset + xStart, // destX
              yPos: y + yOffset + yStart, // destY
              width: widthOffset, // destWidth
              height: heightOffset, // destHeight
            });
          }
        }
      }
    }
  }
}