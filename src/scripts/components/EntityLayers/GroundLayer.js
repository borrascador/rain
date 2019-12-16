import Connect from '../../Connect';
import { colRowToCoords, findTile } from '../utils';

export default class GroundLayer {
  constructor(store, canvas, ctx, loader, camera) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.camera = camera;

    this.connect = new Connect(this.store);
    this.visibleEntities = [];
  }

  render() {
    const { zoom, tiles } = this.connect;
    const { xStart, yStart, width, height } = this.camera;

    const tacticalImg = this.loader.getImage('tactical', zoom);
    const { tilewidth, tileheight, columns } = tacticalImg.tileset;

    const startCol = Math.floor(this.camera.x / tilewidth);
    const endCol = startCol + Math.ceil(width / tilewidth);
    const startRow = Math.floor(this.camera.y / tileheight);
    const endRow = startRow + Math.ceil(height / tileheight);

    this.visibleEntities = [];
    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const x = Math.round(col * tilewidth - this.camera.x);
        const y = Math.round(row * tileheight - this.camera.y);
        const {
          xPos, yPos, xCoord, yCoord,
        } = colRowToCoords(col, row);
        const {
          xOffset, yOffset, widthOffset, heightOffset,
        } = this.camera.getOffsets(x, y, tilewidth, tileheight);
        if (
          widthOffset > 0
          && heightOffset > 0
          && (x + xOffset > -tilewidth && x + xOffset < width)
          && (y + yOffset > -tileheight && y + yOffset < height)
        ) {
          const destX = x + xOffset + xStart;
          const destY = y + yOffset + yStart;
          const destWidth = widthOffset;
          const destHeight = heightOffset;
          
          this.visibleEntities.push({
            xPos, yPos, xCoord, yCoord,
            destX, destY, destWidth, destHeight,
          });

          const tile = findTile(tiles, xPos, yPos, xCoord, yCoord);
          if (tile && tile.groundLayer) {
            // draw ground layer
            const { groundLayer } = tile;
            this.ctx.drawImage(
              tacticalImg, // image
              (groundLayer % columns) * tilewidth + xOffset, // srcX
              Math.floor(groundLayer / columns) * tileheight + yOffset, // srcY
              widthOffset, // srcWidth
              heightOffset, // srcHeight
              destX, destY, destWidth, destHeight,
            );
          }
        }
      }
    }
  }
}
