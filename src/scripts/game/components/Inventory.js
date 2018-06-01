import Connect from '../../store/reducers/Connect';

export default class Inventory {
  constructor (store, canvas, ctx, atlas) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new Connect(this.store);
  }

  renderInventory(srcTileSize, srcTiles) {
    this.ctx.drawImage(
      this.atlas,
      srcTiles[38].x * srcTileSize,
      srcTiles[38].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      960 - 64 * 2,
      64 * 2.75,
      128,
      128
    );
  }

  render() {
    const {srcTileSize, srcTiles} = this.connect.map;

    this.renderInventory(srcTileSize, srcTiles);
  }
}
