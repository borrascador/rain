import Connect from '../../Connect';
import { colRowToCoords, findTile } from '../utils';

export default class TreeLayer {
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
    const { tiles, zoom } = this.connect;
    const {
      xStart, yStart, width, height,
    } = this.camera;

    const tacticalImg = this.loader.getImage('tactical', zoom);
    const treesImg = this.loader.getImage('trees', zoom);

    // set tree opacity based on zoom level
    this.ctx.globalAlpha = 5 / zoom;

    const {
      tileheight: tileHeight,
      tilewidth: tileWidth,
    } = tacticalImg.tileset;

    const {
      tileheight: treeHeight,
      tilewidth: treeWidth,
      columns,
    } = treesImg.tileset;

    // todo find better way to handle commented lines
    const startCol = Math.floor(this.camera.x / tileWidth) - 1; // fixes popping in/out on left
    const endCol = startCol + Math.ceil(width / tileWidth) + 2; // fixes popping in/out on right
    const startRow = Math.floor(this.camera.y / tileHeight);
    const endRow = startRow + Math.ceil(height / tileHeight) + 5; // fixes popping in/out on bottom

    this.visibleEntities = [];
    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const x = Math.round(col * tileWidth - this.camera.x - tileWidth);
        const y = Math.round(row * tileHeight - this.camera.y - treeHeight + tileHeight);
        const {
          xPos, yPos, xCoord, yCoord,
        } = colRowToCoords(col, row);
        const tile = findTile(tiles, xPos, yPos, xCoord, yCoord);

        if (tile && tile.treeLayer) {
          // draw tree layer
          const {
            xOffset, yOffset, widthOffset, heightOffset,
          } = this.camera.getOffsets(x, y, treeWidth, treeHeight);
          const { treeLayer } = tile;
          if (
            widthOffset > 0
            && heightOffset > 0
            && (x + xOffset > -treeWidth && x + xOffset < width)
            && (y + yOffset > -treeWidth && y + yOffset < height)
          ) {
            this.ctx.drawImage(
              treesImg, // image
              (treeLayer % columns) * treeWidth + xOffset, // srcX
              Math.floor(treeLayer / columns) * treeHeight + yOffset, // srcY
              widthOffset, // srcWidth
              heightOffset, // srcHeight
              x + xStart + xOffset, // destX
              y + yStart + yOffset, // destY
              widthOffset, // destWidth
              heightOffset, // destHeight
            );

            this.visibleEntities.push({
              id: treeLayer,
              xPos: x + xOffset + xStart, // destX
              yPos: y + yOffset + yStart, // destY
              width: widthOffset, // destWidth
              height: heightOffset, // destHeight
            });
          }
        }
      }
    }
    this.ctx.globalAlpha = 1;
  }
}