import Connect from '../../store/Connect';
import { drawById, drawByName } from '../utils/draw';
import { screenToImageButton } from './utils';
import { sendEvent } from '../../store/actions/requests';
import { sendError } from '../../store/actions/actions';

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
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) {
      if (button.target && Object.keys(this.connect.actions).includes(button.target)) {
        this.current = button.target;
      } else if (button.tag) {
        this.current = 'main';
        switch (button.tag) {
          case 'seed':
            this.store.dispatch(sendEvent('plant', button.id))
            break;
          case 'harvest':
            const currentTile = this.connect.currentTile;
            const currentCrop = currentTile.crops.find(crop => crop.name === button.name);
            currentCrop.stage <= 0 && this.store.dispatch(sendEvent('harvest', button.id));
            break;
          case 'hunting':
            this.store.dispatch(sendEvent('hunt', button.id))
            break;
          case 'fishing':
            this.store.dispatch(sendEvent('fish', button.id))
            break;
          case 'food':
            this.store.dispatch(sendEvent('eat', button.id))
            break;
          default:
            this.store.dispatch(sendEvent(button.tag, button.id))
            break;
        }
      }
    }
  }

  renderBar() {
    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = this.fontSize + 'px MECC';
    const titleWidth = this.ctx.measureText(this.current).width;

    this.ctx.fillStyle = "rgb(100, 11, 33, 0.9)";
    this.ctx.fillRect(
      (this.canvas.width - this.barWidth) / 2,
      this.canvas.height - this.barSize,
      this.barWidth,
      this.barSize
    );

    this.ctx.fillStyle = "rgb(100, 11, 33, 0.9)";
    this.ctx.fillRect(
      (this.canvas.width - titleWidth) / 2 - 8,
      this.canvas.height - (this.barSize + this.fontSize + 4),
      titleWidth + 16,
      this.fontSize + 4
    );

    this.ctx.fillStyle = "#FFF";
    this.ctx.fillText(
      this.current,
      (this.canvas.width - titleWidth) / 2,
      this.canvas.height - this.barSize
    );
  }

  renderButtons() {
    const buttonX = (this.canvas.width - this.barWidth) / 2 + this.gutter;
    const buttonY = this.canvas.height - this.barSize + this.gutter;
    this.buttons = this.buttons.map((button, index) => {
      const x = buttonX + this.barSize * index;
      if (this.current === 'main' || index === 0 || !(button.tag || button.target)) {
        drawById(this.ctx, this.icons, button.id, this.scale, x, buttonY);
      } else {
        drawById(this.ctx, this.items, button.id, this.scale, x, buttonY);
      }
      return Object.assign({}, button, {
        xPos: x,
        yPos: buttonY,
        width: this.buttonSize,
        height: this.buttonSize
      });
    })
  }

  renderHover() {
    const { xDragging, yDragging } = this.connect.drag;
    if (xDragging && yDragging) {
      const button = screenToImageButton(xDragging, yDragging, this.buttons);
      if (button) {
        const text = button.name || button.target || 'no text';
        const textWidth = this.ctx.measureText(text).width;
        const padding = 8;

        this.ctx.fillStyle = "rgb(10, 100, 15, 0.95)";
        this.ctx.fillRect(
          button.xPos + button.width / 2 - textWidth / 2 - padding,
          this.canvas.height - 1.2 * this.barSize - padding,
          textWidth + padding * 2,
          this.fontSize + padding * 2
        );

        this.ctx.fillStyle = "rgb(10, 100, 15, 0.95)";
        const y = this.canvas.height - 1.2 * this.barSize + this.fontSize + padding;
        this.ctx.beginPath();
        this.ctx.moveTo(button.xPos + 1/3 * button.width, y);
        this.ctx.lineTo(button.xPos + 2/3 * button.width, y);
        this.ctx.lineTo(button.xPos + 1/2 * button.width, y + padding);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.fillStyle = "#FFF";
        this.ctx.fillText(
          text,
          button.xPos + button.width / 2 - textWidth / 2,
          this.canvas.height - 1.2 * this.barSize + this.fontSize
        );
      }
    }
  }

  render() {
    if (!this.connect.actions[this.current]) {
      this.current = 'main';
    }
    this.buttons = this.connect.actions[this.current];
    this.barWidth = this.barSize * this.buttons.length;
    this.buttons.length > 0 && this.renderBar();
    this.renderButtons();
    this.renderHover();
  }
}
