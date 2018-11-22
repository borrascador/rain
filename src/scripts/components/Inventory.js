import Connect from '../Connect';
import { SLOTS } from '../utils/constants';
import { DARK_RED, MEDIUM_RED } from '../utils/colors';

export default class Inventory {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;

    this.scale = 4;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.size / this.scale;

    this.unitWidth = 4;
    this.unitHeight = 5;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.size + this.gutter) + this.gutter;
  }

  // update(x, y) {}

  renderWindow() {
    this.xStart = this.canvas.width - this.width - this.gutter;
    this.yStart = this.size * 2;
    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(this.xStart, this.yStart, this.width, this.height);
  }

  renderSlots() {
    // const [xMax, yMax] = [this.xStart + this.width, this.yStart + this.height]
    const x = this.xStart;
    const y = this.yStart;
    const slots = [];
    let counter = 0;
    this.ctx.fillStyle = DARK_RED;
    for (let yPos = y + this.gutter; yPos < y + this.height; yPos += this.size + this.gutter) {
      for (let xPos = x + this.gutter; xPos < x + this.width; xPos += this.size + this.gutter) {
        this.ctx.fillRect(xPos, yPos, this.size, this.size);
        counter += 1;
        slots.push({
          type: SLOTS.BACKPACK,
          position: counter,
          xPos,
          yPos,
          width: this.size,
          height: this.size
        });
      }
    }
    return slots;
  }

  render() {
    this.renderWindow();
    return this.renderSlots();
  }
}
