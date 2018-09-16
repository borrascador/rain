import Connect from '../../store/Connect';
import { drawById } from '../utils/draw';
import { screenToImageButton } from './utils';
import { changeMode } from '../../store/actions/actions';
import { MODE } from '../constants';

export default class InventoryWindow {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;

    this.scale = 4;
    this.buttonSize = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.buttonSize / this.scale;

    this.unitWidth = 9;
    this.unitHeight = 3;
    this.width = this.unitWidth * (this.buttonSize + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.buttonSize + this.gutter) + this.gutter;
  }

  update(x, y) {
    if (x && y) {
      const xMin = (this.canvas.width - this.width) / 2;
      const xMax = xMin + this.width;
      const yMin = (this.canvas.height - this.height) / 2;
      const yMax = yMin + this.height;
      if (x > xMin && x < xMax && y > yMin && y < yMax) {
        console.log('hit');
      } else {
        this.store.dispatch(changeMode(MODE.MAP));
      }
    }
  }

  renderWindow() {
    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = this.fontSize + 'px MECC';
    const titleWidth = this.ctx.measureText('INVENTORY').width;

    let x = (this.canvas.width - this.width) / 2;
    let y = (this.canvas.height - this.height) / 2;

    this.ctx.fillStyle = "rgb(100, 11, 33, 0.9)";
    this.ctx.fillRect(x, y, this.width, this.height);

    this.ctx.fillStyle = "rgb(33, 5, 11, 0.9)";
    for (let xPos = x + this.gutter; xPos < x + this.width; xPos = xPos + this.buttonSize + this.gutter) {
      for (let yPos = y + this.gutter; yPos < y + this.height; yPos = yPos + this.buttonSize + this.gutter) {
        this.ctx.fillRect(xPos, yPos, this.buttonSize, this.buttonSize);
      }
    }

    this.ctx.fillStyle = '#FFF'
    this.buttons = this.connect.inventory.map((button, index) => {
      const buttonX = x + this.gutter + (this.buttonSize + this.gutter) * (index % this.unitWidth);
      const buttonY = y + this.gutter + (this.buttonSize + this.gutter) * Math.floor(index/this.unitWidth);
      drawById(this.ctx, this.items, button.id, this.scale, buttonX, buttonY);
      this.ctx.fillText(button.quantity, buttonX, buttonY + this.fontSize);
      return Object.assign({}, button, {
        xPos: buttonX,
        yPos: buttonY,
        width: this.buttonSize,
        height: this.buttonSize
      });
    });

    this.ctx.fillStyle = "rgb(100, 11, 33, 0.9)";
    this.ctx.fillRect(
      (this.canvas.width - titleWidth) / 2 - this.gutter,
      this.canvas.height / 2 - this.height / 2 - this.fontSize - 4,
      titleWidth + this.gutter * 2,
      this.fontSize + 4
    );

    this.ctx.fillStyle = "#FFF";
    this.ctx.fillText(
      'INVENTORY',
      (this.canvas.width - titleWidth) / 2,
      (this.canvas.height - this.height) / 2
    );
  }

  renderHover() {
    const { xDragging, yDragging } = this.connect.drag;
    if (xDragging && yDragging) {
      const button = screenToImageButton(xDragging, yDragging, this.buttons);
      if (button) {
        const text = button.name;
        const textWidth = this.ctx.measureText(text).width;
        const padding = 8;

        this.ctx.fillStyle = "rgb(10, 100, 15, 0.95)";
        this.ctx.fillRect(
          button.xPos + button.width / 2 - textWidth / 2 - padding,
          button.yPos - this.buttonSize / 2 - this.scale - padding,
          textWidth + padding * 2,
          this.fontSize + padding * 2
        );

        this.ctx.fillStyle = "rgb(10, 100, 15, 0.95)";
        const y = button.yPos - this.buttonSize / 2 - this.scale + this.fontSize + padding;
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
          button.yPos - this.buttonSize / 2 - this.scale + this.fontSize
        );
      }
    }
  }

  renderDrag() {
    const { xDragging, yDragging } = this.connect.drag;
    const { xClick, yClick } = this.connect.click;
    // Find a way to test drag behavior, maybe this should be in the update method
  }

  render(delta) {
    this.renderWindow();
    this.renderHover();
    this.renderDrag();
  }
}
