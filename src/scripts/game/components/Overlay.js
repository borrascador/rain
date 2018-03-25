import {MODE} from '../constants';
import {changeMode} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import {addButtonCoords, screenToButtonId, getItemById} from './utils';

export default class Overlay {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);
    this.makeButtons();
  }

  makeButtons() {
    const menu = this.connect.getMenuById("overlay");
    this.buttons = menu.buttons;
    this.buttonSize = this.canvas.height / 4;

    // Set button properties
    this.buttons.map((button, idx) => {
      addButtonCoords(button, {
        xPos: this.canvas.width - this.buttonSize,
        yPos: this.buttonSize * idx,
        width: this.buttonSize,
        height: this.buttonSize,
      });
    });
  }

  chooseButton(clickId) {
    const button = getItemById(this.buttons, clickId);
    this.store.dispatch(button.action);
  }

  updateClick(x, y) {
    const clickId = x && y && screenToButtonId(x, y, this.buttons);
    clickId && this.chooseButton(clickId);
  }

  update(delta, x, y) {
    this.updateClick(x, y);
  }

  render() {
    this.buttons.map(button => {
      const xPos = button.xPos + 8;
      const yPos = button.yPos + 8;
      const width = button.width - 16;
      const height = button.height - 16;

      // Make button box
      this.ctx.strokeStyle = '#FFF';
      this.ctx.lineWidth = 4;
      this.ctx.strokeRect(xPos, yPos, width, height);

      // Make button text
      this.ctx.font = '20px MECC';
      this.ctx.fillStyle = '#FFF';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'middle';
      this.ctx.fillText(button.text, xPos + (width / 2), yPos + (height / 2));
    });
  }
}
