import {MODE} from '../constants';
import {changeMode, clicked} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import {addButtonCoords, screenToMenuId, getItemById} from './utils';

export default class Menu {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);
    this.setMenu();
  }

  setMenu() {
    this.selectedId = null;
    const menu = this.connect.getMenuById();
    this.text = menu.text;
    this.buttons = menu.buttons;
  }

  chooseButton() {
    const button = getItemById(this.buttons, this.selectedId);
    this.store.dispatch(button.action);
    setTimeout(this.setMenu());
  }

  updateKeys() {
    const keys = this.connect.keys;
    keys.map(key => {
      if (key >= "1" && key <= this.buttons.length.toString()) this.selectedId = parseInt(key);
      if (["Escape", "Backspace", "Delete"].includes(key)) this.selectedId = null;
      if (this.selectedId && key === "Enter") this.chooseButton();
    });
  }

  updateClick() {
    const {xClick, yClick} = this.connect.click;
    if (xClick && yClick) {
      const clickId = screenToMenuId(xClick, yClick, this.buttons);
      this.store.dispatch(clicked());
      if (this.selectedId && this.selectedId === clickId) {
        this.selectedId = clickId;
        this.chooseButton();
      } else {
        this.selectedId = clickId;
      }
    }
  }

  update(delta) {
    this.updateKeys();
    this.updateClick();
  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const fontSize = 28;
    const lineSize = fontSize + 4;
    this.ctx.font = fontSize + 'px MECC';
    this.ctx.fillStyle = '#FFF';
    this.ctx.textAlign = 'start';
    this.ctx.textBaseline = 'alphabetic';

    let linePos = 2;
    this.text.map(line => {
      this.ctx.fillText(line, lineSize, linePos * lineSize);
      linePos++;
    });
    linePos++;

    this.buttons.map((button, idx) => {
      this.ctx.fillStyle = (this.selectedId === button.id) ? '#FF0' : '#FFF';
      const buttonText = `${button.id}. ${button.text}`;
      this.ctx.fillText(buttonText, 2 * lineSize, linePos * lineSize);
      addButtonCoords(button, {
        xPos: 2 * lineSize,
        yPos: lineSize * linePos,
        width: this.ctx.measureText(buttonText).width,
        height: fontSize,
      });
      linePos++;
    })
    linePos++;

    this.ctx.fillStyle = '#FFF';
    const promptText = `What is your choice? ${this.selectedId || ''}_`;
    this.ctx.fillText(promptText, lineSize, linePos * lineSize);
  };
}
