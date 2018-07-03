import Connect from '../../store/reducers/Connect';
import { screenToImageButton } from './utils';
import { drawById, drawByName } from '../utils/draw';

export default class Vehicle {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    this.scale = 2;
    this.vehicleSize = this.iconsXl.tileset.tilewidth * this.scale;
    this.wrenchSize = this.icons.tileset.tilewidth;

    const {vehicle} = this.connect.vehicle;

    this.buttons = [
      { id: vehicle.icon, onClick: () => console.log(vehicle.type) }
    ];
  }

  update(delta, x, y) {
    const clickedButton = x && y && screenToImageButton(x, y, this.buttons);
    clickedButton && clickedButton.onClick();
  }

  render() {
    const {vehicle} = this.connect.vehicle;

    // TODO: What if there is no vehicle? Need to handle 0 or 1 vehicles.
    // For example see Party.js
    this.buttons = this.buttons.map((button, index) => {
      const x = 0;
      const y = this.canvas.height - this.vehicleSize;
      drawById(this.ctx, this.iconsXl, vehicle.icon, this.scale, x, y);
      [...Array(vehicle.repair)].map((_, i) => {
        drawByName(
          this.ctx, this.icons, 'wrench', 1,
          this.vehicleSize + i * (this.wrenchSize + 8),
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
}
