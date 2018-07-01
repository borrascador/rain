import Connect from '../../store/reducers/Connect';
import { screenToButtonName } from './utils';
import { drawById, drawByName } from '../utils/draw';

export default class Vehicle {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    const {vehicle} = this.connect.vehicle;
    this.scale = 2;
    this.buttons = this.makeButtons(this.canvas, this.iconsXl, this.scale, vehicle);
  }

  makeButtons(canvas, image, scale, vehicle) {
    const size = image.tileset.tilewidth * scale;
    return [{
      name: vehicle.type,
      xPos: 0,
      yPos: canvas.height - size,
      width: size,
      height: size
    }];
  }

  update(delta, x, y) {
    const clickName = x && y && screenToButtonName(x, y, this.buttons);
    clickName && console.log(clickName);
  }

  render() {
    const {vehicle} = this.connect.vehicle;
    const vehicleSize = this.iconsXl.tileset.tilewidth * this.scale;
    const wrenchSize = this.icons.tileset.tilewidth;

    drawById(this.ctx, this.iconsXl, vehicle.icon, this.scale, 0, this.canvas.height - vehicleSize);
    [...Array(vehicle.repair)].map((_, i) => {
      drawByName(
        this.ctx, this.icons, 'wrench', 1, vehicleSize + i * (wrenchSize + 8),
        this.canvas.height - ((wrenchSize + vehicleSize) / 2)
      );
    });
  }
}
