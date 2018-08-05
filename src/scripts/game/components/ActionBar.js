import Connect from '../../store/reducers/Connect';
import { drawById, drawByName } from '../utils/draw';
import { screenToImageButton } from './utils';
import { sendEvent } from '../../store/actions/requests';

export default class ActionBar {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');
    this.connect = new Connect(this.store);

    this.current = 'main';
    this.buttons = this.connect.actions[this.current];

    this.scale = 4;
    this.buttonSize = this.icons.tileset.tilewidth * this.scale;
    this.barSize = this.buttonSize * 1.5;
    this.gutter = (this.barSize - this.buttonSize) / 2

    this.fontSize = 16;
    this.ctx.font = this.fontSize + 'px MECC';
  }

  update(delta, x, y) {
    // this.animate.update(delta);
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button && button.target) {
      this.current = button.target;
    } else if (button && button.tag === 'seed') {
      this.store.dispatch(sendEvent('plant', button.id));
      this.current = 'main';
    } else if (button && button.tag === 'harvest') {
      this.store.dispatch(sendEvent('harvest', button.id));
      this.current = 'main';
    }
  }

  renderBar() {
    this.ctx.fillStyle = "rgb(22, 11, 33, 0.9)";
    this.ctx.fillRect(
      (this.canvas.width - this.barWidth) / 2,
      this.canvas.height - this.barSize,
      this.barWidth,
      this.barSize
    );

    this.ctx.fillStyle = "#000";
    this.ctx.fillRect(
      (this.canvas.width - this.titleWidth) / 2 - 5,
      this.canvas.height - this.barSize - this.fontSize / 2,
      this.titleWidth + 8,
      this.fontSize + 4
    );

    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = this.fontSize + 'px MECC';
    this.ctx.fillStyle = "#FFF";
    this.ctx.fillText(
      this.current,
      (this.canvas.width - this.titleWidth) / 2,
      this.canvas.height - this.barSize + this.fontSize / 2
    );
  }

  renderButtons() {
    const buttonX = (this.canvas.width - this.barWidth) / 2 + this.gutter;
    const buttonY = this.canvas.height - this.barSize + this.gutter;
    if (!this.connect.actions[this.current]) {
      this.current = 'main';
    }
    const buttons = this.connect.actions[this.current];
    this.buttons = buttons.map((button, index) => {
      const x = buttonX + this.barSize * index;
      if (this.current !== 'main' && index > 0) {
        drawById(this.ctx, this.items, button.id, this.scale, x, buttonY);
      } else {
        drawById(this.ctx, this.icons, button.id, this.scale, x, buttonY);
      }
      return Object.assign({}, button, {
        xPos: x,
        yPos: buttonY,
        width: this.buttonSize,
        height: this.buttonSize
      });
    })
  }

  render() {
    this.barWidth = this.barSize * this.buttons.length;
    this.titleWidth = this.ctx.measureText(this.current).width;
    this.buttons.length > 0 && this.renderBar();
    this.renderButtons();
  }
}
