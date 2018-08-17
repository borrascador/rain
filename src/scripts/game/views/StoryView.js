import { MODE } from '../constants';
import { clicked, changeMode } from '../../store/actions/actions';
import { sendEvent } from '../../store/actions/requests';
import Connect from '../../store/Connect';
import { screenToTextButton, getItemById } from '../components/utils';
import { mainText, buttonText, splitIntoLines } from '../utils/draw';
import Animation from '../utils/Animation';

export default class StoryView {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.blink = new Animation(1, 1, 1);
    this.connect = new Connect(this.store);

    this.fontSize = 32;
    this.lineHeight = 44;
    this.ctx.font = this.fontSize + 'px MECC';
    this.selected = null;

    const story = this.connect.story;
    if (story) {
      this.refresh(story);
    } else {
      this.buttons = [];
    }

    this.mainText = mainText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.buttonText = buttonText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
  }

  refresh(story) {
    this.maxMainWidth = this.canvas.width - this.fontSize * 2;
    this.maxButtonWidth = this.canvas.width - this.fontSize * 4;
    this.text = splitIntoLines(this.ctx, story.text, this.maxMainWidth);
    if (story && story.buttons) {
      this.buttons = story && story.buttons.map((button, idx) => {
        return Object.assign({}, button, {
          text: splitIntoLines(this.ctx, button.text, this.maxButtonWidth),
          oneIndex: idx + 1
        });
      });
    }
    const promptText = `What is your choice? ${this.selected && this.selected.oneIndex || ''}`;
    const cursor = this.blink.getValue() ? '' : '_';
    this.prompt = splitIntoLines(this.ctx, promptText + cursor, this.maxMainWidth);
  }

  select(button) {
    if (button.text[0] === 'OK') {
      this.store.dispatch(changeMode(MODE.MAP));
    } else {
      this.store.dispatch(sendEvent('decision', button.id));
    }
  }

  updateKeys(delta) {
    const keys = this.connect.keys;
    keys.map(key => {
      if (key >= "1" && key <= this.buttons.length.toString()) this.selected = this.buttons[parseInt(key) - 1];
      if (["Escape", "Backspace", "Delete"].includes(key)) this.selected = null;
      if (key === "Enter" && this.selected !== null) {
        this.select(this.selected);
        this.selected = null;
      }
    });
  }

  updateClick() {
    const {xClick, yClick} = this.connect.click;
    if (xClick && yClick) {
      this.store.dispatch(clicked());
      const button = screenToTextButton(xClick, yClick, this.buttons);
      if (button) {
        if (this.selected && this.selected.id === button.id) {
          this.select(this.selected);
          this.selected = null;
        } else {
          this.selected = button;
        }
      } else {
        this.selected = null;
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
    this.buttons = this.buttonText(this.buttons, linePos, this.selected);

    this.ctx.fillStyle = '#6F6';
    linePos = this.buttons[this.buttons.length - 1].yPos + this.lineHeight * 2;
    const promptCoords = this.mainText(this.prompt, this.fontSize, linePos);
  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const story = this.connect.story;
    if (story) {
      this.refresh(story); // Comment out to disable live text adjustment on resize
      this.renderStoryText();
    } else {
      this.buttons = [];
    }
  };
}
