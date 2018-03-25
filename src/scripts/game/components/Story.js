import {MODE} from '../constants';
import {clicked} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import {addButtonCoords, screenToTextId, getItemById} from './utils';

export default class Story {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);
    this.setEvent();
  }

  setEvent() {
    // TODO: Is this the right way to do this?
    this.selectedId = null;
    const story = this.connect.story;
    this.text = story.text;
    this.buttons = story.buttons;
  }

  chooseButton() {
    const button = getItemById(this.buttons, this.selectedId);
    console.log(button.ref); // TODO: Implement async request / response
  }

  updateKeys(delta) {
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
      const clickId = screenToTextId(xClick, yClick, this.buttons);
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
    this.updateKeys(delta);
    this.updateClick();
  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const fontSize = 28;
    const lineSize = fontSize + 4;
    this.ctx.font = fontSize + 'px MECC';
    this.ctx.fillStyle = '#6F6';
    this.ctx.textAlign = 'start';
    this.ctx.textBaseline = 'alphabetic';

    let linePos = 2;
    this.text.map(line => {
      this.ctx.fillText(line, lineSize, linePos * lineSize);
      linePos++;
    });
    linePos++;

    this.buttons.map((button, idx) => {
      this.ctx.fillStyle = (this.selectedId === button.id) ? '#FF0' : '#6F6';
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

    this.ctx.fillStyle = '#6F6';
    const promptText = `What is your choice? ${this.selectedId || ''}_`;
    this.ctx.fillText(promptText, lineSize, linePos * lineSize);
  };
}
