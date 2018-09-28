import Connect from '../../store/Connect';
import { SOLID_WHITE } from '../colors';

export default class Habitat {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);
    this.fontSize = 24;
    this.ctx.font = this.fontSize + 'px MECC';
  }

  update(x, y) {}

  render(delta) {
    const currentTile = this.connect.currentTile;
    let text = [];
    currentTile && currentTile.hunting && text.push(currentTile.hunting);
    currentTile && currentTile.fishing && text.push(currentTile.fishing);
    text.forEach( (line, index) => {
      this.ctx.fillStyle = SOLID_WHITE;
      this.ctx.font = this.fontSize + 'px MECC';
      const lineWidth = this.ctx.measureText(line).width;
      const x = this.canvas.width - lineWidth - this.fontSize;
      const y = this.canvas.height - (1.25 * this.fontSize * (text.length - index));
      this.ctx.fillText(line, x, y);
    });
  }
}
