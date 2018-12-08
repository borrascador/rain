import Connect from '../Connect';
import { screenToImageButton } from './utils';
import { drawById, drawByName } from '../utils/draw';

export default class Vehicle {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    this.scale = 2;
    this.vehicleSize = this.iconsXl.tileset.tilewidth * this.scale;
    this.wrenchSize = this.icons.tileset.tilewidth;

    const { vehicle } = this.connect;

    if (vehicle) {
      this.buttons = [
        { id: vehicle.icon, onClick: () => console.log(vehicle.type) }
      ];
    } else {
      this.buttons = [];
    }
  }

  update(x, y) {
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) button.onClick();
  }

  renderVehicle(vehicle) {
    this.buttons = this.buttons.map((button) => {
      const x = 0;
      const y = this.canvas.height - this.vehicleSize;
      drawById(this.ctx, this.iconsXl, vehicle.icon, this.scale, x, y);
      [...Array(vehicle.repair)].forEach((_, index) => {
        drawByName(
          this.ctx, this.icons, 'wrench', 1,
          this.vehicleSize + index * (this.wrenchSize + 8),
          this.canvas.height - (this.wrenchSize + this.vehicleSize) / 2
        );
      });
      return Object.assign({}, button, {
        id: vehicle.icon,
        xPos: x,
        yPos: y,
        width: this.vehicleSize,
        height: this.vehicleSize
      });
    });
  }

  render() {
    const { vehicle } = this.connect;
    if (vehicle) this.renderVehicle(vehicle);
  }
}
