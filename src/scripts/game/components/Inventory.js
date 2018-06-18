import Connect from '../../store/reducers/Connect';
import Animation from '../utils/Animation';
import { screenToButtonName } from './utils';
import { drawByName } from '../utils/draw';

export default class Inventory {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.animate = new Animation(2, 0.5);
    this.connect = new Connect(this.store);

    this.scale = 4;
    this.buttons = this.makeButtons(this.canvas, this.iconsXl, this.scale, [
      'pack-big'
    ]);
  }

  makeButtons(canvas, image, scale, names) {
    const size = image.tileset.tilewidth * scale;
    return names.map((name, index) => ({
      name: name,
      xPos: canvas.width - size,
      yPos: canvas.height / 2 - size / 2 + this.animate.getValue(),
      width: size,
      height: size
    }));
  }

  update(delta, x, y) {
    this.animate.update(delta);
    const clickName = x && y && screenToButtonName(x, y, this.buttons);
    clickName && console.log(clickName);
  }

  render() {
    this.buttons.map(button => {
      drawByName(
        this.ctx, this.iconsXl, button.name, this.scale,
        button.xPos, button.yPos + this.animate.getValue());
    });
  }
}
