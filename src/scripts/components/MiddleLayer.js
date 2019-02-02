import Connect from '../Connect';
import { getRandomInt } from './utils';
import { refreshTiles } from '../actions/actions';

export default class MiddleLayer {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.new = loader.getImage('new');
    this.player = loader.getImage('player');
    this.connect = new Connect(this.store);
  }

  init() {
    // create trees
    const { graphTiles, zoom } = this.connect;

    const seededTiles = graphTiles.map((tile) => {
      const seed = getRandomInt(48);
      if (seed === 1) {
        const [srcX, srcY] = [0, 0];
        const [srcWidth, srcHeight] = [16, 16];
        const { xPos, yPos } = tile;
        const width = srcWidth * zoom / 2;
        const height = srcHeight * zoom / 2;
        return Object.assign({}, tile, {
          player: {
            srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
          }
        });
      }
      if (seed > 24) {
        const tall = getRandomInt(2) ? 1 : 0;
        const [srcX, srcY] = [getRandomInt(6) * 24, tall ? 32 : 32 + 48];
        const [srcWidth, srcHeight] = [24, tall ? 48 : 16];
        const width = 24 * zoom;
        const height = tall ? 48 * zoom : 16 * zoom;
        const xPos = tile.xPos - (width / 3);
        const yPos = tile.yPos - height + 8 * zoom;
        return Object.assign({}, tile, {
          tree: {
            srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
          }
        });
      }
      return tile;
    });

    this.store.dispatch(refreshTiles(seededTiles));
  }

  render() {
    const { graphTiles } = this.connect;

    graphTiles.forEach(({ tree, player }) => {
      if (tree) {
        const {
          srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
        } = tree;
        this.ctx.drawImage(this.new, srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height);
      }
      if (player) {
        const {
          srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
        } = player;
        this.ctx.drawImage(this.player, srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height);
      }
    });
  }
}
