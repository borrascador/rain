import Connect from '../../Connect';
import { getRandomInt } from '../utils';
import { refreshTiles } from '../../actions/actions';

export default class GroundLayer {
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
    const { tilewidth: srcWidth, tileheight: srcHeight } = this.new.tileset;
    const [width, height] = [srcWidth * zoom, srcHeight * zoom];

    const origin = { x: width, y: height }; // COMBAK: This is temporary!!
    const startRow = Math.floor(origin.y / height);
    const endRow = startRow + Math.ceil((this.canvas.height / height));
    const startCol = Math.floor(origin.x / width);
    const endCol = startCol + Math.ceil((this.canvas.width / width));

    const graphTiles = [];

    for (let row = startRow; row <= endRow; row += 1) {
      for (let col = startCol; col <= endCol; col += 1) {
        const srcX = getRandomInt(2) * srcWidth;
        const srcY = getRandomInt(2) * srcHeight;
        const xPos = col * width - origin.x;
        const yPos = row * height - origin.y;
        graphTiles.push({
          x: col,
          y: row,
          xPos,
          yPos,
          width,
          height,
          ground: {
            srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
          }
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

    graphTiles.forEach(({ ground }) => {
      const {
        srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
      } = ground;
      this.ctx.drawImage(this.new, srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height);
    });
  }
}
