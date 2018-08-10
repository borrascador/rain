import { MODE } from '../constants';
import { clicked } from '../../store/actions/actions';
import Connect from '../../store/Connect';
import { screenToTextButtonId, getItemById } from './utils';
import { mainText, buttonText, splitIntoLines } from '../utils/draw';
import Animation from '../utils/Animation';

export default class Story {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.blink = new Animation(1, 1, 1);
    this.connect = new Connect(this.store);

    this.fontSize = 32;
    this.lineHeight = 44;
    this.ctx.font = this.fontSize + 'px MECC';
    this.selectedId = null;

    const story = this.connect.story;
    if (story) {
      this.setEvent(story);
    } else {
      this.buttons = [];
    }

    this.mainText = mainText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.buttonText = buttonText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
  }

  setEvent(story) {
    this.maxMainWidth = this.canvas.width - this.fontSize * 2;
    this.maxButtonWidth = this.canvas.width - this.fontSize * 4;
    this.text = splitIntoLines(this.ctx, story.text, this.maxMainWidth);
    this.buttons = story.buttons.map((button, idx) => {
      return Object.assign({}, button, {
        text: splitIntoLines(this.ctx, button.text, this.maxButtonWidth)
      });
    });
    const promptText = `What is your choice? ${this.selectedId || ''}`;
    const cursor = this.blink.getValue() ? '' : '_';
    this.prompt = splitIntoLines(this.ctx, promptText + cursor, this.maxMainWidth);
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
      const clickId = screenToTextButtonId(xClick, yClick, this.buttons);
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
    this.blink.update(delta);
  }

  renderStoryText() {
    this.ctx.font = this.fontSize + 'px MECC';

    this.ctx.fillStyle = '#6F6';
    let linePos = 2 * this.fontSize;
    const mainCoords = this.mainText(this.text, this.fontSize, linePos);

    linePos = mainCoords.yPos + this.lineHeight * 2;
    this.buttons = this.buttonText(this.buttons, linePos, this.selectedId);

    this.ctx.fillStyle = '#6F6';
    linePos = this.buttons[this.buttons.length - 1].yPos + this.lineHeight * 2;
    const promptCoords = this.mainText(this.prompt, this.fontSize, linePos);
  }

  render() {
    const story = this.connect.story;
    if (story) {
      this.setEvent(story); // Comment out to disable live text adjustment on resize
      this.renderStoryText();
    } else {
      this.buttons = [];
    }
  };
}
