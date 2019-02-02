import Connect from '../Connect';
import Animation from '../utils/Animation';
import { checkImageCollision } from './utils';
import { clickedLeft, refreshTiles } from '../actions/actions';

export default class BottomLayer {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.player = loader.getImage('player');
    this.connect = new Connect(this.store);

    this.animateBlink = new Animation(1, 1, 0.4);
  }

  update(step) {
    // loop through tiles for hover events
    const { mousePos, graphTiles } = this.connect;
    const { x, y } = this.connect.clickLeft;

    let refresh = false;

    const temp = graphTiles.map((tile) => {
      if (x && y && checkImageCollision(x, y, tile)) {
        console.log(tile); // DEBUG
        this.store.dispatch(clickedLeft());
      }
      // BUG: If mouse is right between two tiles both are highlighted!
      if (mousePos.x && mousePos.y && checkImageCollision(mousePos.x, mousePos.y, tile)) {
        if (tile.hover !== true) refresh = true;
        return Object.assign({}, tile, { hover: true });
      }
      if (tile.hover !== false) refresh = true;
      return Object.assign({}, tile, { hover: false });
    });

    if (refresh) {
      this.animateBlink.reset();
      this.store.dispatch(refreshTiles(temp));
    }

    this.animateBlink.tick(step);

    // loop through players for hover events
    // loop through npcs for hover events
  }

  render() {
    // render hover effect over active tile
    const { graphTiles } = this.connect;

    graphTiles.forEach((tile) => {
      if (tile.hover) {
        const {
          xPos, yPos, width, height
        } = tile;
        this.ctx.fillStyle = 'rgba(128, 128, 128, 0.2)';
        this.ctx.fillRect(xPos, yPos, width, height);
        this.ctx.lineWidth = 4;
        this.ctx.strokeStyle = 'rgba(256, 256, 256, 0.8)';
        this.ctx.strokeRect(xPos, yPos, width, height);
      }
      if (tile.hover && tile.player && this.animateBlink.getValue() === 1) {
        const {
          srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height
        } = tile.player;
        this.ctx.drawImage(this.player, srcX, srcY, srcWidth, srcHeight, xPos, yPos, width, height);
      }
    });
  }
}
