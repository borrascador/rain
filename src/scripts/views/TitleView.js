import registerDialog from '../dialogs/register';
import loginDialog from '../dialogs/login';
import { screenToTextButton } from '../components/utils';
import Connect from '../Connect';
import Animation from '../utils/Animation';
import { drawById, drawByName, centerText } from '../utils/draw';
import {
  CONNECT_GREEN, DISCONNECT_RED, SOLID_WHITE, DARK_OPAQUE
} from '../utils/colors';

export default class TitleView {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.water = loader.getImage('water');

    this.zoom = 4;
    this.gutter = 4;
    this.size = this.water.tileset.tilewidth * this.zoom;
    this.animateBottom = new Animation(this.size, this.zoom * 2, 0.5);
    this.animateTop = new Animation(3, 1, 0.5);

    this.connect = new Connect(this.store);
    this.setDim(false);

    this.title = [
      { text: 'RAINFOREST' },
      { text: 'TRAIL' }
    ];

    this.buttons = [
      { text: 'LOGIN', onClick: loginDialog },
      { text: 'REGISTER', onClick: registerDialog }
    ];

    this.setDim = this.setDim.bind(this);
    this.centerText = centerText.bind(null, this.canvas, this.ctx, this.zoom, this.gutter);
  }

  setDim(dim) {
    this.dim = dim;
  }

  handleClick(x, y) {
    if (x && y) {
      const button = !this.dim && screenToTextButton(x, y, this.buttons);
      if (button) button.onClick(this.store, this.setDim);
    }
  }

  update(keys, left) {
    this.handleClick(left.x, left.y);
  }

  renderBackground() {
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

  renderText() {
    this.ctx.fillStyle = SOLID_WHITE;
    this.title = this.centerText(this.title, 64, 1 / 4);

    this.ctx.fillStyle = this.connect.connected ? CONNECT_GREEN : DISCONNECT_RED;
    this.centerText([{ text: this.connect.connected ? 'CONNECTED' : 'DISCONNECTED' }], 32, 9 / 10);

    this.ctx.fillStyle = SOLID_WHITE;
    this.buttons = this.centerText(this.buttons, 32, 3 / 4);
  }

  render(delta) {
    this.animateBottom.tick(delta);
    this.animateTop.tick(delta);
    this.renderBackground();
    this.renderText();
    if (this.dim) {
      this.ctx.fillStyle = DARK_OPAQUE;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
