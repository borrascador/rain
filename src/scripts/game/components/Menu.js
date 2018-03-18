import {MODE} from '../constants';
import {changeMode, clicked} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import {addButtonCoords, screenToButtonID} from './utils';

export default class Menu {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);
    this.makeButtons();
  }

  makeButtons() {
    const menu = this.connect.events["11"];
    this.buttons = menu.options;
    this.buttonSize = this.canvas.height / 4;

    // Set button properties
    this.buttons.map(button => {
      addButtonCoords(button, {
        xPos: this.canvas.width - this.buttonSize,
        yPos: this.buttonSize * (button.id - 1),
        width: this.buttonSize,
        height: this.buttonSize,
      });
    });
  }

  update() {

  }

  render() {
    this.buttons.map(button => {
      // Make button box
      this.ctx.strokeStyle = '#FFF';
      this.ctx.lineWidth = 4;
      const xPos = button.xPos + 8;
      const yPos = button.yPos + 8;
      const width = button.width - 16;
      const height = button.height - 16;
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
