// import Connect from '../../store/reducers/Connect';
import Animation from '../utils/Animation';
import { screenToImageButton } from './utils';
import { drawByName } from '../utils/draw';

export default class Inventory {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.scale = 4;
    this.size = this.iconsXl.tileset.tilewidth * this.scale;
    this.animate = new Animation(this.scale, this.scale, 0.5);

    // this.connect = new Connect(this.store);

    this.buttons = [
      { name: 'pack-big', onClick: () => console.log('pack-big') }
    ];
  }

  update(delta, x, y) {
    this.animate.update(delta);
    const clickedButton = x && y && screenToImageButton(x, y, this.buttons);
    clickedButton && clickedButton.onClick();
  }

  render() {
    this.buttons = this.buttons.map(button => {
      const x = this.canvas.width - this.size;
      const y = this.canvas.height / 2 - this.size / 2;
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
