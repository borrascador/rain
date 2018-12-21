import Connect from '../Connect';
import MiddleLayer from './MiddleLayer';

const TREE_COUNT = 200;
let firstLog = true;

export default class TopLayer {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.new = loader.getImage('new');
    this.connect = new Connect(this.store);
    this.middle = new MiddleLayer(this.store, this.canvas, this.ctx, loader);
  }

  render(delta) {
    const { zoom } = this.connect.map;
    const tileSize = 32 * zoom;
    const treeWidth = 32 * zoom;
    const treeHeight = 48 * zoom;

    if (!this.trees) {
      const getRandomInt = max => Math.floor(Math.random() * Math.floor(max));
      this.trees = Array.from({ length: 25 }, () => ({
        x: getRandomInt(this.canvas.width + treeWidth * 2) - treeWidth,
        y: getRandomInt(this.canvas.height + treeHeight) - treeHeight
      }))
      .sort((a, b) => a.y > b.y);
    }

    if (this.trees) {
      const walkSize = 64;
      const middleBoundary = (this.canvas.height - walkSize) / 2 + walkSize;
      let renderedMiddle = false;
      this.ctx.globalAlpha = 1;
      for (let count = 0; count < this.trees.length; count += 1) {
        // TODO FIX EVERYTHING THIS SUCKS
        const { x, y } = this.trees[count];
        if (y - treeHeight > middleBoundary && !renderedMiddle) {
          const xSrc = 32 + 32 * (count % 4);
          const ySrc = 0;
          this.ctx.drawImage(this.new, xSrc, ySrc, 32, 48, x, y, tileSize, tileSize);

          this.middle.render(delta);
          renderedMiddle = true;
          firstLog && console.log('guy', middleBoundary);
        } else {
          const xSrc = 32 + 32 * (count % 4);
          const ySrc = 0;
          this.ctx.drawImage(this.new, xSrc, ySrc, 32, 48, x, y, tileSize, tileSize);
        }
        firstLog && console.log(x, y, 'tree');
      }
      this.ctx.globalAlpha = 1;
    }

    if (firstLog) firstLog = false;
  }
}
