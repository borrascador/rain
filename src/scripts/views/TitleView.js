import Animation from '../utils/Animation';
import { drawById2, drawByName2 } from '../utils/draw';

export default class TitleView {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    const zoom = 4;
    this.water = loader.getImage('water', zoom);
    const size = this.water.tileset.tilewidth * zoom;
    this.animateBottom = new Animation(size, zoom * 2, 0.5);
    this.animateTop = new Animation(3, 1, 0.5);
  }

  update(step) {
    this.animateBottom.tick(step);
    this.animateTop.tick(step);
  }

  render() {
    const { tilewidth, tileheight } = this.water.tileset;

    const endCol = Math.floor((this.canvas.width / tilewidth));
    const endRow = Math.floor((this.canvas.height / tileheight));
    const offsetBottom = this.animateBottom.getValue();
    const offsetTop = this.animateTop.getValue();

    for (let col = -1; col <= endCol; col += 1) {
      for (let row = 0; row <= endRow; row += 1) {
        const x = col * tilewidth;
        const y = row * tileheight;
        drawByName2(this.ctx, this.water, 'bottom', x + offsetBottom, y);
      }
    }
    for (let col = 0; col <= endCol; col += 1) {
      for (let row = 0; row <= endRow; row += 1) {
        const x = col * tilewidth;
        const y = row * tileheight;
        drawById2(this.ctx, this.water, offsetTop.toString(), x, y);
      }
    }
  }
}
