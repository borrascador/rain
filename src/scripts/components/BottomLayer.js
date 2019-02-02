import Connect from '../Connect';
import { getRandomInt } from './utils';
import { refreshTiles } from '../actions/actions';

export default class BottomLayer {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.new = loader.getImage('new');
    this.connect = new Connect(this.store);
  }

  init() {
    // create tiles
    const { zoom } = this.connect;
    const width = 8 * zoom;
    const height = 8 * zoom;

    const origin = { x: width, y: height };
    const startRow = Math.floor(origin.y / height);
    const endRow = startRow + Math.ceil((this.canvas.height / height));
    const startCol = Math.floor(origin.x / width);
    const endCol = startCol + Math.ceil((this.canvas.width / width));

    const graphTiles = [];

    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const [srcX, srcY] = [getRandomInt(2) * 8, getRandomInt(2) * 8];
        const [srcWidth, srcHeight] = [8, 8];
        const xPos = col * width - origin.x;
        const yPos = row * height - origin.y;
        graphTiles.push({
          srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
        });
      }
    }

    this.store.dispatch(refreshTiles(graphTiles));

    // trees created in MiddleLayer.js
    // players created in MiddleLayer.js
    // TODO: create npcs on free tiles, likely in MiddleLayer.js for now
  }

  render() {
    // render tiles
    const { graphTiles } = this.connect;

    graphTiles.forEach((tile) => {
      const {
        srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
      } = tile;
      this.ctx.drawImage(this.new, srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height);
    });
  }
}
