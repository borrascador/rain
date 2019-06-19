import Connect from '../../Connect';
import Animation from '../../utils/Animation';
import { checkImageCollision, findTile } from '../utils';
import { clickedLeft, refreshTiles } from '../../actions/actions';

export default class HighlightLayer {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.player = loader.getImage('player');
    this.connect = new Connect(this.store);

    this.animateBlink = new Animation(1, 1, 0.4);

    this.selected = { x: 5, y: 5 };
  }

  update(step) {
    // loop through tiles for hover events
    const { mousePos, graphTiles } = this.connect;
    const { x, y } = this.connect.clickLeft;

    let refresh = false;
    let resetAnimation = false;

    const temp = graphTiles.map((tile) => {
      if (tile.selected && !(this.selected.x === tile.x && this.selected.y === tile.y)) {
        refresh = true;
        return Object.assign({}, tile, { selected: false });
      }
      if (x && y && checkImageCollision(x, y, tile)) {
        console.log(tile); // DEBUG
        if (tile.player && !(this.selected.x === tile.x && this.selected.y === tile.y)) {
          refresh = true;
          this.selected = { x: tile.x, y: tile.y };
          this.store.dispatch(clickedLeft());
          return Object.assign({}, tile, { selected: true });
        }
        this.selected = { x: null, y: null };
        refresh = true;
        const {
          xPos, yPos, width, height,
        } = tile;
        const [srcWidth, srcHeight] = [8, 8];
        this.store.dispatch(clickedLeft());
        return Object.assign({}, tile, {
          tree: undefined,
          water: {
            srcX: 5 * srcWidth, srcY: 1 * srcHeight, srcWidth, srcHeight, xPos, yPos, width, height
          }
        });
      }
      if (mousePos.x && mousePos.y && checkImageCollision(mousePos.x, mousePos.y, tile)) {
        if (tile.hover !== true) [refresh, resetAnimation] = [true, true];
        return Object.assign({}, tile, { hover: true });
      }
      if (tile.hover !== false) [refresh, resetAnimation] = [true, true];
      return Object.assign({}, tile, { hover: false });
    });

    if (refresh) this.store.dispatch(refreshTiles(temp));
    if (resetAnimation) this.animateBlink.reset();

    this.animateBlink.tick(step);

    // loop through players for hover events
    // loop through npcs for hover events
  }

  renderHover(tile) {
    if (!tile) return;
    const {
      xPos, yPos, width, height
    } = tile;
    this.ctx.fillStyle = 'rgba(128, 128, 128, 0.2)';
    this.ctx.fillRect(xPos, yPos, width, height);
    this.ctx.lineWidth = 4;
    this.ctx.strokeStyle = 'rgba(256, 256, 256, 0.8)';
    this.ctx.strokeRect(xPos, yPos, width, height);
  }

  render() {
    // render hover effect over active tile
    const { graphTiles } = this.connect;

    graphTiles.forEach((tile) => {
      if (tile.selected) {
        this.renderHover(tile);
        this.renderHover(findTile(graphTiles, tile.x - 1, tile.y));
        this.renderHover(findTile(graphTiles, tile.x + 1, tile.y));
        this.renderHover(findTile(graphTiles, tile.x, tile.y - 1));
        this.renderHover(findTile(graphTiles, tile.x, tile.y + 1));
      }
      if (tile.hover) {
        this.renderHover(tile);
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
