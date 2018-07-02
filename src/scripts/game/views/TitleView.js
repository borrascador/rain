import { makeTextButton } from '../utils/draw';
import { registerDialog } from '../dialogs/register';
import { loginDialog } from '../dialogs/login';
import { addButtonCoords, screenToTextButton } from '../components/utils';
import Connect from '../../store/reducers/Connect';
import Animation from '../utils/Animation';
import {clicked} from '../../store/actions/actions';
import { drawById, drawByName, roundToZoom, centerText } from '../utils/draw';

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

    this.buttons = [
      { text: 'LOGIN', onClick: loginDialog },
      { text: 'REGISTER', onClick: registerDialog }
    ];

    this.setDim = this.setDim.bind(this);
    this.centerText = centerText.bind(null, this.canvas, this.ctx, this.zoom);
  }

  setDim(dim) {
    this.dim = dim;
  }

  updateAnimation(delta) {
    this.animateBottom.update(delta);
    this.animateTop.update(delta);
  }

  handleClick() {
    const {xClick, yClick} = this.connect.click;
    if (xClick && yClick) {
      this.store.dispatch(clicked());
      const button = !this.dim && screenToTextButton(xClick, yClick, this.buttons);
      button && button.onClick(this.store, this.setDim)
    }
  }

  update(delta) {
    if (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight) {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.ctx.imageSmoothingEnabled = false;
    }
    this.updateAnimation(delta);
    this.handleClick();
  }

  renderBackground() {
    const endCol = Math.ceil((this.canvas.width / this.size) + 1);
    const endRow = Math.ceil((this.canvas.height / this.size) + 1);
    const deltaX = this.animateBottom.getValue();
    const deltaTop = this.animateTop.getValue();

    for (let col = -1; col <= endCol + 1; col++) {
      for (let row = -1; row <= endRow + 1; row++) {
        const x = col * this.size;
        const y = row * this.size;
        drawByName(this.ctx, this.water, 'bottom', this.zoom, x + deltaX, y);
      }
    }
    for (let col = -1; col <= endCol + 1; col++) {
      for (let row = -1; row <= endRow + 1; row++) {
        const x = col * this.size;
        const y = row * this.size;
        drawById(this.ctx, this.water, deltaTop.toString(), this.zoom, x, y);
      }
    }
  }

  renderText() {
    let fontSize = 64;
    let lineSize = fontSize + this.zoom * this.gutter - fontSize / 8;
    this.ctx.font = fontSize + 'px MECC';
    this.ctx.fillStyle = '#FFF';
    this.centerText(fontSize, lineSize, [{text: 'RAINFOREST'}, {text: 'TRAIL'}], 1/4);

    fontSize = 32;
    lineSize = fontSize + this.zoom * this.gutter - fontSize / 8;
    this.ctx.font = fontSize + 'px MECC';
    this.buttons = this.centerText(fontSize, lineSize, this.buttons, 3/4);
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
