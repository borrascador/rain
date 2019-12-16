import { send } from '@giantmachines/redux-websocket';
import { clickedLeft, closeStory, eventRequest } from '../actions/actions';
import { EVENTS } from '../actions/types';
import Connect from '../Connect';
import { screenToTextButton, screenToTile } from './utils';
import {
  mainText, itemChangeText, partyChangeText, buttonText, splitIntoLines, drawHover,
} from '../utils/draw';
import Animation from '../utils/Animation';
import { PALE_GREEN, MEDIUM_RED } from '../utils/colors';

export default class Story {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.blink = new Animation(1, 1, 1);
    this.connect = new Connect(this.store);

    this.fontSize = 16;
    this.lineHeight = this.fontSize * 11 / 8;
    this.ctx.font = `${this.fontSize}px MECC`;
    this.selected = null;

    this.scale = 2;
    this.icons = loader.getImage('icons', this.scale);
    this.size = this.icons.tileset.tilewidth;
    this.iconOffset = this.fontSize * 4 / 5;

    this.width = this.canvas.width / 3;
    this.height = this.canvas.height / 2;

    this.stories = [];

    this.mainText = mainText.bind(
      null, this.canvas, this.ctx, this.fontSize, this.lineHeight,
    );
    this.buttonText = buttonText.bind(
      null, this.canvas, this.ctx, this.fontSize, this.lineHeight,
    );
    this.itemChangeText = itemChangeText.bind(
      null, this.canvas, this.ctx, this.fontSize, this.lineHeight,
    );
    this.partyChangeText = partyChangeText.bind(
      null, this.canvas, this.ctx, this.fontSize, this.lineHeight,
    );
  }

  select(button, story) {
    this.store.dispatch(closeStory());
    if (story.canDispatch) {
      this.store.dispatch(send(eventRequest(EVENTS.DECISION, { id: button.id })));
    }
    this.selected = null;
  }

  updateKeys(story) {
    const { keys } = this.connect;
    keys.forEach((key) => {
      if (key >= '1' && key <= story.buttons.length.toString()) {
        this.selected = story.buttons[parseInt(key, 10) - 1];
      }
      if (['Escape', 'Backspace', 'Delete'].includes(key)) this.selected = null;
      if (key === 'Enter' && this.selected !== null) {
        this.select(this.selected, story);
      }
    });
  }

  updateClick(story) {
    const { x, y } = this.connect.clickLeft;
    if (x && y) {
      this.store.dispatch(clickedLeft());
      const button = screenToTextButton(x, y, story.buttons);
      if (button) {
        if (this.selected && this.selected.id === button.id) {
          this.select(this.selected, story);
        } else if (story.buttons.length === 1) {
          this.select(button, story);
        } else {
          this.selected = button;
        }
      } else {
        this.selected = null;
      }
    }
  }

  update(step) {
    this.width = this.canvas.width / 3;
    this.height = this.canvas.height / 2;
    if (this.stories.length > 0) {
      const story = this.stories[this.stories.length - 1];
      this.updateKeys(story);
      this.updateClick(story);
    }

    this.blink.tick(step);
  }

  renderStoryText(story) {
    this.ctx.font = `${this.fontSize}px MECC`;
    this.ctx.fillStyle = PALE_GREEN;

    const maxMainWidth = this.width - this.fontSize * 2;
    const maxButtonWidth = this.width - this.fontSize * 4;
    const text = splitIntoLines(this.ctx, story.text, maxMainWidth);
    const { inventoryChanges, partyChanges } = story;
    let buttons = story && story.buttons.map((button, idx) => Object.assign({}, button, {
      text: splitIntoLines(this.ctx, button.text, maxButtonWidth),
      oneIndex: idx + 1,
    }));
    const promptText = `What is your choice? ${this.selected ? this.selected.oneIndex : ''}`;
    const cursor = this.blink.getValue() ? '' : '_';
    const prompt = splitIntoLines(this.ctx, promptText + cursor, maxMainWidth);

    this.xPos = this.width + this.fontSize;
    this.yPos = this.height / 2 + this.fontSize * 2;
    let coords = this.mainText(text, this.xPos, this.yPos);

    if (inventoryChanges.length > 0) {
      this.yPos = coords.yPos + this.lineHeight * 2;
      coords = this.itemChangeText(inventoryChanges, this.xPos, this.yPos);
    }

    if (partyChanges.length > 0) {
      this.yPos = coords.yPos + this.lineHeight * 2;
      coords = this.partyChangeText(partyChanges, this.xPos, this.yPos);
    }

    this.yPos = coords.yPos + this.lineHeight * 2;
    buttons = this.buttonText(buttons, this.xPos, this.yPos, this.selected, this.icons, this.scale);

    if (buttons.length > 0) {
      this.yPos = buttons[buttons.length - 1].yPos;
      if (buttons[buttons.length - 1].hoverText) {
        this.yPos += this.lineHeight;
      }
    }

    if (buttons.length > 1) {
      this.ctx.fillStyle = PALE_GREEN;
      this.yPos += this.lineHeight * 2;
      this.mainText(prompt, this.xPos, this.yPos);
    }

    return buttons;
  }

  renderHover(buttons) {
    const { mousePos } = this.connect;
    if (mousePos.x && mousePos.y) {
      const filteredButtons = buttons.filter(button => button.hoverText);
      const item = screenToTile(mousePos.x, mousePos.y, filteredButtons);
      if (item && item.hoverText) {
        drawHover(this.ctx, this.fontSize, item);
      }
    }
  }

  render() {
    this.stories = this.connect.stories;
    if (this.stories.length > 0) {
      this.stories = this.stories.map((story) => {
        this.ctx.fillStyle = MEDIUM_RED;
        this.ctx.fillRect(this.width, this.height / 2, this.width, this.height);
        const buttons = this.renderStoryText(story);
        this.renderHover(buttons);
        return Object.assign({}, story, { buttons });
      });
    } else {
      this.stories = [];
    }
  }
}
