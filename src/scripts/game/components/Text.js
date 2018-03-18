import {MODE} from '../constants';
import {changeMode, clicked} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import {addButtonCoords, screenToButtonID, getItemByID} from './utils';

export default class Text {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.eventID = "0";
    this.selectedID = null;

    this.connect = new Connect(this.store);
    this.setEvent(this.eventID);
  }

  setEvent(idx) {
    const event = this.connect.events[idx];
    this.text = event.text;
    this.options = event.options;
  }

  chooseOption() {
    const option = getItemByID(this.options, this.selectedID);
    this.selectedID = null;
    const event = this.connect.events[option.ref];
    switch (event.type) {
      case "TEXT_MC":
        this.setEvent(option.ref);
        break;
      case "MAP_FOCUS":
        this.store.dispatch(changeMode(MODE.MAP));
        break;
    }
  }

  updateKeys() {
    const keys = this.connect.keys;
    keys.map(key => {
      if (key >= "1" && key <= this.options.length.toString()) this.selectedID = key;
      if (["Escape", "Backspace", "Delete"].includes(key)) this.selectedID = null;
      if (this.selectedID && key === "Enter") this.chooseOption();
    });
  }

  updateClick() {
    const {xClick, yClick} = this.connect.click;
    if (xClick && yClick) {
      const clickID = screenToButtonID(xClick, yClick, this.options);
      this.store.dispatch(clicked());
      if (this.selectedID && this.selectedID === clickID) {
        this.selectedID = clickID;
        this.chooseOption();
      } else {
        this.selectedID = clickID;
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

    this.options.map(option => {
      this.ctx.fillStyle = (this.selectedID === option.id) ? '#FF0' : '#FFF';
      const optionText = `${option.id}. ${option.text}`;
      this.ctx.fillText(optionText, 2 * lineSize, linePos * lineSize);
      addButtonCoords(option, {
        xPos: 2 * lineSize,
        yPos: lineSize * linePos,
        width: this.ctx.measureText(optionText).width,
        height: fontSize,
      });
      linePos++;
    })
    linePos++;

    this.ctx.fillStyle = '#FFF';
    const promptText = `What is your choice? ${this.selectedID || ''}_`;
    this.ctx.fillText(promptText, lineSize, linePos * lineSize);
  };
}
