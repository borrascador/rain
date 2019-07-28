import Animation from '../utils/Animation';
import { drawById, drawByName } from '../utils/draw';

export default class TitleView {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.water = loader.getImage('water');

    this.zoom = 4;
    this.size = this.water.tileset.tilewidth * this.zoom;
    this.animateBottom = new Animation(this.size, this.zoom * 2, 0.5);
    this.animateTop = new Animation(3, 1, 0.5);
  }

  update(step) {
    this.animateBottom.tick(step);
    this.animateTop.tick(step);
  }

  render() {
    const endCol = Math.floor((this.canvas.width / this.size));
    const endRow = Math.floor((this.canvas.height / this.size));
    const offsetBottom = this.animateBottom.getValue();
    const offsetTop = this.animateTop.getValue();

    for (let col = -1; col <= endCol; col += 1) {
      for (let row = 0; row <= endRow; row += 1) {
        const x = col * this.size;
        const y = row * this.size;
        drawByName(this.ctx, this.water, 'bottom', this.zoom, x + offsetBottom, y);
      }
    }
    for (let col = 0; col <= endCol; col += 1) {
      for (let row = 0; row <= endRow; row += 1) {
        const x = col * this.size;
        const y = row * this.size;
        drawById(this.ctx, this.water, offsetTop.toString(), this.zoom, x, y);
      }
    }
  }
}
