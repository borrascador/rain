import Connect from '../../store/reducers/Connect';
import { drawById, drawByName } from '../utils/draw';

export default class Vehicle {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);
  }

  update(delta, xClick, yClick) {

  }

  render() {
    const {vehicle} = this.connect.vehicle;

    drawById(this.ctx, this.iconsXl, vehicle.icon, 2, 0, 416);
    [...Array(vehicle.repair)].map((_, i) => {
      drawByName(this.ctx, this.icons, 'wrench', 1, 64 + i * 24, 440);
    });
  }
}
