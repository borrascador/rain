export default class TitleView {
  constructor (canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;
  }

  update(delta) {

  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    let fontSize = 60;
    let lineSize = fontSize + 4;
    this.ctx.font = fontSize + 'px MECC';
    this.ctx.fillStyle = '#FFF';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'alphabetic';

    let linePos = 2;
    this.ctx.fillText('RAINFOREST', this.canvas.width / 2, linePos++ * lineSize);
    this.ctx.fillText('TRAIL', this.canvas.width / 2, linePos++ * lineSize);

    fontSize = 28;
    lineSize = fontSize + 16;
    this.ctx.font = fontSize + 'px MECC';

    linePos = 7;
    this.ctx.fillText('LOGIN', this.canvas.width / 2, linePos++ * lineSize);
    this.ctx.fillText('REGISTER', this.canvas.width / 2, linePos++ * lineSize);
    this.ctx.fillText('ABOUT', this.canvas.width / 2, linePos++ * lineSize);
  }
}
