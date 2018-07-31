import { drawById, drawByName } from '../utils/draw';

export default class ActionBar {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');

    this.scale = 4;
    this.buttonSize = this.icons.tileset.tilewidth * this.scale;
    this.barSize = this.buttonSize * 1.5;
    this.barWidth = this.barSize * 5;
    this.gutter = (this.barSize - this.buttonSize) / 2

    this.fontSize = 16;
    this.title = "ACTIONS"
    this.ctx.font = this.fontSize + 'px MECC';
    this.titleWidth = this.ctx.measureText(this.title).width;
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
      this.title,
      (this.canvas.width - this.titleWidth) / 2,
      this.canvas.height - this.barSize + this.fontSize / 2
    );
  }

  renderButtons() {
    const buttonX = (this.canvas.width - this.barWidth) / 2 + this.gutter;
    const buttonY = this.canvas.height - this.barSize + this.gutter;
    for (let id=34, pos=0; pos < 5; id++, pos++) {
      drawById(
        this.ctx,
        this.icons,
        id,
        this.scale,
        buttonX + this.barSize * pos,
        buttonY
      );
    }
  }

  render() {
    this.renderBar();
    this.renderButtons();
  }
}
