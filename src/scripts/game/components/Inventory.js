import Animation from '../utils/Animation';
import { screenToImageButton } from './utils';
import { drawByName, slideText } from '../utils/draw';
import { changeMode } from '../../store/actions/actions';
import { MODE } from '../constants';

export default class Inventory {
  constructor (store, canvas, ctx, loader, setDim) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.scale = 4;
    this.size = this.iconsXl.tileset.tilewidth * this.scale;
    this.animate = new Animation(this.scale, this.scale, 0.5);

    this.totalTime = 2;
    this.currentTime = 0;

    this.buttons = [ { name: 'pack-big' } ];
  }

  update(x, y) {
    if (x && y && screenToImageButton(x, y, this.buttons)) {
      this.store.dispatch(changeMode(MODE.INVENTORY));
      this.currentTime = .0001;
    }
  }

  render(delta) {
    this.animate.tick(delta);
    this.buttons = this.buttons.map(button => {
      const x = this.canvas.width - this.size;
      const y = this.canvas.height / 2 - this.size / 2;

      if (this.currentTime > 0 && this.currentTime < this.totalTime) {
        this.currentTime += delta;
        slideText(this.ctx, this.currentTime, this.totalTime, 32, '+1 testing', x, y + this.size / 2);
      } else if (this.currentTime >= this.totalTime) {
        this.currentTime = 0;
      }

      drawByName(this.ctx, this.iconsXl, button.name, this.scale, x, y + this.animate.getValue());
      return Object.assign({}, button, {
        xPos: x,
        yPos: y,
        width: this.size,
        height: this.size
      });
    });
  }
}
