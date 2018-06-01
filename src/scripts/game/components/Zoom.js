import Connect from '../../store/reducers/Connect';

export default class Zoom {
  constructor (store, canvas, ctx, atlas) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new Connect(this.store);
  }

  renderZoom(srcTileSize, srcTiles) {
    this.ctx.drawImage(
      this.atlas,
      srcTiles[36].x * srcTileSize,
      srcTiles[36].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      960 - 64,
      0,
      64,
      64
    );
    this.ctx.drawImage(
      this.atlas,
      srcTiles[37].x * srcTileSize,
      srcTiles[37].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      960 - 64 * 2,
      0,
      64,
      64
    );
    this.ctx.drawImage(
      this.atlas,
      srcTiles[35].x * srcTileSize,
      srcTiles[35].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      960 - 64 * 3,
      0,
      64,
      64
    );
  }

  render() {
    const {srcTileSize, srcTiles} = this.connect.map;

    this.renderZoom(srcTileSize, srcTiles);
  }
}
