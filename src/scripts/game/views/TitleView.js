import { makeTextButton } from '../utils/draw';
import { registerDialog } from '../dialogs/register';
import { loginDialog } from '../dialogs/login';
import { screenToTextButton } from '../components/utils';
import Connect from '../../store/Connect';
import Animation from '../utils/Animation';
import {clicked} from '../../store/actions/actions';
import { drawById, drawByName, centerText } from '../utils/draw';

export default class TitleView {
  constructor (store, canvas, ctx, loader) {
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

  updateAnimation(delta) {
    this.animateBottom.tick(delta);
    this.animateTop.tick(delta);
  }

  handleClick(x, y) {
    if (x && y) {
      this.store.dispatch(clicked());
      const button = !this.dim && screenToTextButton(x, y, this.buttons);
      button && button.onClick(this.store, this.setDim)
    }
  }

  update(delta, keys, x, y) {
    this.updateAnimation(delta);
    this.handleClick(x, y);
  }

  renderBackground() {
    const endCol = Math.floor((this.canvas.width / this.size));
    const endRow = Math.floor((this.canvas.height / this.size));
    const deltaX = this.animateBottom.getValue();
    const deltaTop = this.animateTop.getValue();

    for (let col = -1; col <= endCol; col++) {
      for (let row = 0; row <= endRow; row++) {
        const x = col * this.size;
        const y = row * this.size;
        drawByName(this.ctx, this.water, 'bottom', this.zoom, x + deltaX, y);
      }
    }
    for (let col = 0; col <= endCol; col++) {
      for (let row = 0; row <= endRow; row++) {
        const x = col * this.size;
        const y = row * this.size;
        drawById(this.ctx, this.water, deltaTop.toString(), this.zoom, x, y);
      }
    }
  }

  renderText() {
    this.ctx.fillStyle = '#FFF';
    this.title = this.centerText(this.title, 64, 1/4);

    this.ctx.fillStyle = this.connect.connected ? '#3F6' : '#F36';
    this.centerText([{ text: this.connect.connected ? 'CONNECTED' : 'DISCONNECTED' }], 32, 9/10);

    this.ctx.fillStyle = '#FFF';
    this.buttons = this.centerText(this.buttons, 32, 3/4);
  }

  render() {
    this.renderBackground();
    this.renderText();
    if (this.dim) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
