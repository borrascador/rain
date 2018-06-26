import { makeTextButton } from '../utils/draw';
import { registerDialog } from '../dialogs/register';
import { loginDialog } from '../dialogs/login';
import { addButtonCoords, screenToTextId } from '../components/utils';
import Connect from '../../store/reducers/Connect';
import Animation from '../utils/Animation';
import {clicked} from '../../store/actions/actions';
import { drawById, drawByName } from '../utils/draw';

export default class TitleView {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.water = loader.getImage('water');

    this.zoom = 4;
    this.size = this.water.tileset.tilewidth * this.zoom;
    this.animateBottom = new Animation(this.size, this.zoom, 0.25);
    this.animateTop = new Animation(this.size, this.zoom, 1);

    this.connect = new Connect(this.store);
    this.selected = null;
    this.setDim(false);

    this.buttons = [
      { id: 1, text: 'LOGIN', onClick: loginDialog },
      { id: 2, text: 'REGISTER', onClick: registerDialog }
    ];

    this.setDim = this.setDim.bind(this);
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
      const clickId = screenToTextId(xClick, yClick, this.buttons);
      if (this.selectedId && this.selectedId === clickId) {
        this.buttons.find((button) =>
          this.selectedId === button.id
        ).onClick(this.store, this.setDim);
        this.selectedId = null;
        this.setDim(true);
      } else {
        this.selectedId = clickId;
      }
    }
  }

  update(delta) {
    this.updateAnimation(delta);
    this.handleClick();
  }

  renderBackground() {
    const endCol = Math.ceil((this.canvas.width / this.size) + 1);
    const endRow = Math.ceil((this.canvas.height / this.size) + 1);
    const deltaX = this.animateBottom.getValue();
    const deltaY = this.animateTop.getValue();

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
        drawByName(this.ctx, this.water, 'top', this.zoom, x, y + deltaY);
      }
    }
  }

  renderText() {
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
    this.buttons.map((button, idx) => {
      this.ctx.fillStyle = (this.selectedId === button.id) ? '#FF0' : '#FFF';
      this.ctx.fillText(button.text, this.canvas.width / 2, linePos * lineSize);
      addButtonCoords(button, {
        xPos: this.canvas.width / 2 - this.ctx.measureText(button.text).width / 2,
        yPos: linePos * lineSize,
        width: this.ctx.measureText(button.text).width,
        height: fontSize
      });
      linePos++;
    });
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
