import Connect from '../../store/Connect';

export default class InventoryWindow {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;
    this.width = this.canvas.width / 2;
    this.height = this.canvas.height / 2;

    this.scale = 4;
    this.buttonSize = this.icons.tileset.tilewidth * this.scale;
    this.barSize = this.buttonSize * 1.5;
    this.gutter = (this.barSize - this.buttonSize) / 2
  }

  renderBar() {
    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = this.fontSize + 'px MECC';
    const titleWidth = this.ctx.measureText('INVENTORY').width;

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

    this.ctx.fillStyle = "rgb(100, 11, 33, 0.9)";
    this.ctx.fillRect(this.width / 2, this.height / 2, this.width, this.height);
  }

  render() {
    this.renderBar();
    // this.buttons = this.connect.actions[this.current];
    // this.barWidth = this.barSize * this.buttons.length;
    // this.buttons.length > 0 && this.renderBar();
    // this.renderButtons();
    // this.renderHover();
  }
}
