import Connect from '../../store/reducers/Connect';

export default class Vehicle {
  constructor (store, canvas, ctx, atlas) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new Connect(this.store);
  }

  renderVehicle(icon, srcTileSize, srcTiles) {
    this.ctx.drawImage(
      this.atlas,
      srcTiles[icon].x * srcTileSize,
      srcTiles[icon].y * srcTileSize,
      srcTileSize,
      srcTileSize,
      0,
      416,
      64,
      64
    );
  }

  renderRepair(repair) {
    [...Array(repair)].map((_, i) => {
      this.ctx.drawImage(
        this.atlas,
        0, 208, // tilemap position
        16, 16, // original size
        64 + i * 24, 440, // screen position
        16, 16 // rendered size
      );
    });
  }

  render() {
    const {srcTileSize, srcTiles} = this.connect.map;
    const {vehicle} = this.connect.vehicle;

    this.renderVehicle(vehicle.icon, srcTileSize, srcTiles);
    this.renderRepair(vehicle.repair);
  }
}
