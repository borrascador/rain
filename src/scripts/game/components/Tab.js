import Connect from '../../store/reducers/Connect';
import { screenToImageButton } from './utils';
import { drawByName, drawById, trace } from '../utils/draw';
import { plant, harvest } from '../../store/actions/requests';

export default class Tab {
  constructor (store, canvas, ctx, loader, buttons, height) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.items = loader.getImage('items');

    this.buttons = buttons;
    this.height = height;
    this.scale = 4;
    this.size = this.items.tileset.tilewidth * this.scale;

    this.ctx.strokeStyle = '#FFF';
    this.ctx.lineWidth = 2;

    this.fontSize = 16;
    this.lineHeight = 22;
  }

  update(delta, x, y) {
    const clickedButton = x && y && screenToImageButton(x, y, this.buttons);
    clickedButton && this.store.dispatch(plant(clickedButton.id));
    // clickedButton && this.store.dispatch(harvest(clickedButton.id));
  }

  render() {
    this.ctx.textAlign = 'center';
    this.ctx.font = this.fontSize + 'px MECC';
    this.buttons = this.buttons.map((button, index) => {
      const x = this.height * index + (this.height - this.size) / 2;
      const y = this.canvas.height - (this.height + this.size + this.lineHeight) / 2;
      drawById(this.ctx, this.items, button.id, this.scale, x, y);
      this.ctx.fillText(button.name, x + this.size / 2, y + this.size + this.lineHeight);
      trace(this.ctx, this.size, x, y);
      return Object.assign({}, button, {
        xPos: x,
        yPos: y,
        width: this.size,
        height: this.size + this.lineHeight
      });
    });
    this.ctx.textAlign = 'left';
  }
}
