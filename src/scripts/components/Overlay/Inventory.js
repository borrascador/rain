import Connect from '../../Connect';
import { clickedLeft } from '../../actions/actions';
import { checkImageCollision } from '../utils';
import { SLOTS } from '../../utils/constants';
import { DARK_RED, MEDIUM_RED } from '../../utils/colors';

export default class Inventory {
  constructor(store, canvas, ctx, loader, slotType, unitWidth, unitHeight) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);
    this.slotType = slotType;
    this.unitWidth = unitWidth;
    this.unitHeight = unitHeight;

    this.scale = 4;
    const items = loader.getImage('items', this.scale);
    this.size = items.tileset.tilewidth;
    this.gutter = this.size / this.scale;
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
    const slots = [];
    let counter = 0;
    this.ctx.fillStyle = DARK_RED;
    for (
      let yPos = this.yStart + this.gutter;
      yPos < this.yStart + this.height;
      yPos += this.size + this.gutter
    ) {
      for (
        let xPos = this.xStart + this.gutter;
        xPos < this.xStart + this.width;
        xPos += this.size + this.gutter
      ) {
        this.ctx.fillRect(xPos, yPos, this.size, this.size);
        slots.push({
          type: this.slotType,
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
    // need to set this.xStart and this.yStart here from outside
    this.renderWindow();
    return this.renderSlots();
  }
}
