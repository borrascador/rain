import Connect from '../../store/reducers/Connect';
import Animation from '../utils/Animation';
import { drawByName } from '../utils/draw';

export default class Inventory {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.animate = new Animation(2, 0.5);
    this.connect = new Connect(this.store);
  }

  update(delta, xClick, yClick) {
    this.animate.update(delta);
  }

  render() {
    // now find a cleaner way to position the tile on screen!
    const x = 960 - 64 * 2;
    const y = 64 * 2.75 + this.animate.getValue();
    drawByName(this.ctx, this.iconsXl, 'pack-big', 4, x, y);
  }
}
