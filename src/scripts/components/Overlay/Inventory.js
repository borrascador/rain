import Connect from '../../Connect';
import { clickedLeft } from '../../actions/actions';
import { checkImageCollision } from '../utils';
import { SLOTS } from '../../utils/constants';
import { DARK_RED, MEDIUM_RED } from '../../utils/colors';

export default class Inventory {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.fontSize = 16;

    this.scale = 4;
    const icons = loader.getImage('icons', this.scale);
    this.size = icons.tileset.tilewidth;
    this.gutter = this.size / this.scale;

    this.unitWidth = 4;
    this.unitHeight = 5;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.size + this.gutter) + this.gutter;
  }

  update() {
    const { x, y } = this.connect.clickLeft;
    if (x && y && this.box && checkImageCollision(x, y, this.box)) {
      this.store.dispatch(clickedLeft());
    }
  }

  renderWindow() {
    this.xStart = this.canvas.width - this.width - this.gutter;
    this.yStart = this.size * 2;
    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(this.xStart, this.yStart, this.width, this.height);
    this.box = {
      xPos: this.xStart,
      yPos: this.yStart,
      width: this.width,
      height: this.height
    };
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
        slots.push({
          type: SLOTS.BACKPACK,
          position: counter,
          xPos,
          yPos,
          width: this.size,
          height: this.size
        });
        counter += 1;
      }
    }
    return slots;
  }

  render() {
    this.renderWindow();
    return this.renderSlots();
  }
}
