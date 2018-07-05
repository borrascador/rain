import {MODE} from '../constants';
import {clicked} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import {addButtonCoords, screenToTextId, getItemById} from './utils';
import { storyText, buttonText, splitIntoLines } from '../utils/draw';
import Animation from '../utils/Animation';

export default class Story {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.blink = new Animation(1, 1, 1);

    this.fontSize = 32;
    this.lineHeight = 44;
    this.ctx.font = this.fontSize + 'px MECC';

    this.connect = new Connect(this.store);

    this.selectedId = null;
    this.setEvent();
    console.log(this.text, this.buttons);

    this.storyText = storyText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.buttonText = buttonText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
  }

  setEvent() {
    const story = this.connect.story;
    this.maxMainWidth = this.canvas.width - this.fontSize * 2;
    this.maxButtonWidth = this.canvas.width - this.fontSize * 4;
    this.text = splitIntoLines(this.ctx, story.text, this.maxMainWidth);
    this.buttons = story.buttons.map((button, idx) => {
      return Object.assign({}, button, {
        text: splitIntoLines(this.ctx, button.text, this.maxButtonWidth)
      });
    });
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
    this.blink.update(delta);
    this.updateKeys(delta);
    this.updateClick();
  }

  render() {
    this.setEvent();

    this.ctx.fillStyle = '#6F6';
    this.ctx.font = this.fontSize + 'px MECC';

    let linePos = 2 * this.fontSize;
    const { yPos } = this.storyText(this.text, this.fontSize, linePos);

    linePos = yPos + this.lineHeight * 2;
    this.buttons = this.buttonText(this.buttons, linePos, this.selectedId);

    linePos = this.buttons[this.buttons.length - 1].yPos + this.lineHeight * 2;
    const promptText = `What is your choice? ${this.selectedId || ''}`;
    const cursor = this.blink.getValue() ? '' : '_';
    this.ctx.fillStyle = '#6F6';
    this.ctx.fillText(promptText + cursor, this.fontSize, linePos);
  };
}
