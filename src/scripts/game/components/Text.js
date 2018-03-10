import {MODE} from '../constants';
import {changeMode} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';

export default class Text {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.eventID = "0";
    this.selectedID = null;

    this.connect = new Connect(this.store);
    this.setEvent();
  }

  setEvent() {
    const event = this.connect.events[this.eventID];
    this.text = event.text;
    this.options = event.options;
  }

  checkButtonCoords (option) {
    return option.hasOwnProperty('width')
      && option.hasOwnProperty('height')
      && option.hasOwnProperty('xPos')
      && option.hasOwnProperty('yPos');
  }

  mergeButtonCoords (id, buttonCoords) {
    for (var attrname in buttonCoords) {
      // Select elements in options array by id property
      // Then add new properties to that object
      this.options.find(x => x.id === id)[attrname] =  buttonCoords[attrname];
    }
  }

  update(delta) {
    const keys = this.connect.keys;
    keys.map(key => {
      if (key >= "0" && key <= "9") this.selectedID = key;
      if (key === "Escape" || key === "Backspace" || key === "Delete") this.selectedID = null;
      if (key === "Enter") this.store.dispatch(changeMode(MODE.MAP)); // TODO Change
    })
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

    let currentLine = 2;
    for (let i = 0; i < this.text.length; i++) {
      this.ctx.fillText(this.text[i], lineSize, currentLine * lineSize);
      currentLine++;
    }
    currentLine++;

    for (let i = 0; i < this.options.length; i++) {
      this.ctx.fillStyle = (this.selectedID === this.options[i].id) ? '#FF0' : '#FFF';
      let optionText = this.options[i].id + ". " + this.options[i].text;
      this.ctx.fillText(optionText, 2 * lineSize, currentLine * lineSize);

      if (this.checkButtonCoords(this.options[i]) === false) {
        let id = this.options[i].id;
        this.mergeButtonCoords(id, {
          width: this.ctx.measureText(optionText).width,
          height: fontSize,
          xPos: 2 * lineSize,
          yPos: lineSize * currentLine
        });
      }
      currentLine++;
    }
    currentLine++;

    this.ctx.fillStyle = '#FFF';
    const displayID = (this.selectedID !== null) ? this.selectedID : '';
    const promptText = "What is your choice? " + displayID + "_";
    this.ctx.fillText(promptText, lineSize, currentLine * lineSize);
  };
}
