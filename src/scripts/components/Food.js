import Connect from '../Connect';
import { clickedLeft } from '../actions/actions';
import { sendEvent } from '../actions/requests';
import { EVENTS } from '../actions/types';
import { screenToImageButton } from './utils';
import { drawByName } from '../utils/draw';
import { SLOTS } from '../utils/constants';
import {
  MEDIUM_RED, DARK_RED, alphaGreen, alphaYellow, alphaDarkRed
} from '../utils/colors';

export default class Food {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.connect = new Connect(this.store);

    this.scale = 4;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.size / this.scale;

    this.unitWidth = 4;
    this.unitHeight = 1;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.size + this.gutter) + this.gutter;

    this.fontSize = 16;
    this.ctx.font = `${this.fontSize}px MECC`;

    this.stepperOffset = 9 * this.scale;

    this.buttons = [
      {
        id: 0,
        name: 'up',
        pos: -this.stepperOffset,
        onClick: rations => this.increaseRations(rations)
      },
      {
        id: 1,
        name: 'down',
        pos: this.stepperOffset,
        onClick: rations => this.decreaseRations(rations)
      },
    ];
  }

  increaseRations(rations) {
    if (rations < 2) {
      this.store.dispatch(sendEvent(EVENTS.RATIONS, { id: rations + 1 }));
    }
  }

  decreaseRations(rations) {
    if (rations > 0) {
      this.store.dispatch(sendEvent(EVENTS.RATIONS, { id: rations - 1 }));
    }
  }

  update() {
    const { x, y } = this.connect.clickLeft;
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) {
      this.store.dispatch(clickedLeft());
      button.onClick(this.connect.rations);
    }
  }

  renderWindow() {
    this.xStart = this.canvas.width - this.width - this.gutter;
    this.yStart = this.gutter;

    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(this.xStart, this.yStart, this.width, this.height);
  }

  renderStepper() {
    const { rations } = this.connect;
    const x = this.xStart + this.gutter;
    const y = this.yStart + this.gutter;
    drawByName(this.ctx, this.icons, 'food', this.scale, x, y);
    let text; let
      color;
    if (rations === 0) {
      text = '0%';
      color = alphaDarkRed(0.9);
    } else if (rations === 1) {
      text = '50%';
      color = alphaYellow(0.9);
    } else if (rations === 2) {
      text = '100%';
      color = alphaGreen(0.9);
    }
    this.ctx.font = `${this.fontSize}px MECC`;
    this.ctx.fillStyle = color;
    const textWidth = this.ctx.measureText(text).width;
    this.ctx.fillText(
      text,
      x + (this.size - textWidth) / 2,
      y + (this.size + this.fontSize) / 2
    );
    this.buttons = this.buttons.map((button) => {
      const yPos = y + button.pos;
      drawByName(this.ctx, this.icons, button.name, this.scale, x, yPos);
      return Object.assign({}, button, {
        xPos: x,
        yPos,
        width: this.size,
        height: this.size
      });
    });
  }

  renderSlots() {
    const x = this.xStart + this.size + this.gutter;
    const y = this.yStart;
    const slots = [];
    let counter = 0;
    this.ctx.fillStyle = DARK_RED;
    for (
      let yPos = y + this.gutter;
      yPos < y + this.height;
      yPos = yPos + this.size + this.gutter
    ) {
      for (
        let xPos = x + this.gutter;
        xPos < x + this.width - (this.size + this.gutter);
        xPos = xPos + this.size + this.gutter
      ) {
        this.ctx.fillRect(xPos, yPos, this.size, this.size);
        slots.push({
          type: SLOTS.EATING,
          position: counter,
          xPos,
          yPos,
          width: this.size,
          height: this.size
        });
        counter += 1;
      }
    }
    return slots;
  }

  render() {
    this.renderWindow();
    this.renderStepper();
    return this.renderSlots();
  }
}
