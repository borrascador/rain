import { MODE } from '../constants';
import { clicked, changeMode } from '../../store/actions/actions';
import { sendEvent } from '../../store/actions/requests';
import Connect from '../../store/Connect';
import { screenToTextButton, getItemById } from './utils';
import { mainText, itemChangeText, partyChangeText, buttonText, splitIntoLines } from '../utils/draw';
import Animation from '../utils/Animation';

export default class Story {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.blink = new Animation(1, 1, 1);
    this.connect = new Connect(this.store);

    this.fontSize = 16;
    this.lineHeight = this.fontSize * 11 / 8;
    this.ctx.font = this.fontSize + 'px MECC';
    this.selected = null;

    this.width = this.canvas.width / 2;
    this.height = this.canvas.height / 2;

    if (this.connect.story) {
      this.refresh(this.connect.story);
    } else {
      this.buttons = [];
    }

    this.mainText = mainText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.itemChangeText = itemChangeText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.partyChangeText = partyChangeText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.buttonText = buttonText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
  }

  refresh(story) {
    this.ctx.font = this.fontSize + 'px MECC';
    this.maxMainWidth = this.width - this.fontSize * 2;
    this.maxButtonWidth = this.width - this.fontSize * 4;
    this.text = splitIntoLines(this.ctx, story.text, this.maxMainWidth);
    this.inventoryChanges = story.inventoryChanges;
    this.partyChanges = story.partyChanges;
    this.buttons = story && story.buttons.map((button, idx) => {
      return Object.assign({}, button, {
        text: splitIntoLines(this.ctx, button.text, this.maxButtonWidth),
        oneIndex: idx + 1
      });
    });
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

  updateKeys(keys) {
    keys.map(key => {
      if (key >= "1" && key <= this.buttons.length.toString()) this.selected = this.buttons[parseInt(key) - 1];
      if (["Escape", "Backspace", "Delete"].includes(key)) this.selected = null;
      if (key === "Enter" && this.selected !== null) {
        this.select(this.selected);
        this.selected = null;
      }
    });
  }

  updateClick(x, y) {
    if (x && y) {
      const button = screenToTextButton(x, y, this.buttons);
      if (button) {
        if (this.selected && this.selected.id === button.id) {
          this.select(this.selected);
          this.selected = null;
        } else if (this.buttons.length === 1) {
          this.select(button);
          this.selected = null;
        } else {
          this.selected = button;
        }
      } else {
        this.selected = null;
      }
    }
  }

  update(delta, keys, x, y) {
    this.width = this.canvas.width / 2;
    this.height = this.canvas.height / 2;
    this.blink.tick(delta);
    this.updateKeys(keys);
    this.updateClick(x, y);
  }

  renderStoryText() {
    this.ctx.font = this.fontSize + 'px MECC';

    this.ctx.fillStyle = '#6F6';
    let xPos = this.width / 2 + this.fontSize;
    let yPos = this.height / 2 + this.fontSize * 2;
    let coords = this.mainText(this.text, xPos, yPos);

    if (this.inventoryChanges.length > 0) {
      yPos = coords.yPos + this.lineHeight * 2;
      coords = this.itemChangeText(this.inventoryChanges, xPos, yPos);
    }

    if (this.partyChanges.length > 0) {
      yPos = coords.yPos + this.lineHeight * 2;
      coords = this.partyChangeText(this.partyChanges, xPos, yPos);
    }

    yPos = coords.yPos + this.lineHeight * 2;
    this.buttons = this.buttonText(this.buttons, xPos, yPos, this.selected);

    if (this.buttons.length > 1) {
      this.ctx.fillStyle = '#6F6';
      yPos = this.buttons[this.buttons.length - 1].yPos + this.lineHeight * 2;
      this.mainText(this.prompt, xPos, yPos);
    }
  }

  render(story) {
    this.ctx.fillStyle = "rgb(100, 11, 33, 0.9)";
    this.ctx.fillRect(this.width / 2, this.height / 2, this.width, this.height);

    if (story) {
      this.refresh(story); // Comment out to disable live text adjustment on resize
      this.renderStoryText();
    } else {
      this.buttons = [];
    }
  };
}
