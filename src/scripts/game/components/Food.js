import Connect from '../../store/Connect';
import { sendEvent } from '../../store/actions/requests';
import { EVENTS } from '../../store/actions/types';
import { screenToImageButton } from './utils';
import { drawById, drawByName } from '../utils/draw';
import { SLOTS } from '../constants';
import {
  SOLID_WHITE, BRIGHT_RED, MEDIUM_RED, DARK_RED,
  alphaGreen, alphaYellow, alphaDarkRed
} from '../colors';

export default class Food {
  constructor (store, canvas, ctx, loader) {
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
    this.ctx.font = this.fontSize + 'px MECC';

    this.stepperOffset = 9 * this.scale;

    this.buttons = [
      {
        id: 0,
        name: 'up',
        pos: -this.stepperOffset,
        onClick: (rations) => this.increaseRations(rations)
      },
      {
        id: 1,
        name: 'down',
        pos: this.stepperOffset,
        onClick: (rations) => this.decreaseRations(rations)
      },
    ];
  }

  increaseRations(rations) {
    rations < 2 && this.store.dispatch(sendEvent(EVENTS.RATIONS, rations + 1));
  }

  decreaseRations(rations) {
    rations > 0 && this.store.dispatch(sendEvent(EVENTS.RATIONS, rations - 1));
  }

  update(x, y) {
    const button = x && y && screenToImageButton(x, y, this.buttons);
    button && button.onClick(this.connect.rations);
  }

  renderWindow() {
    this.xStart = this.canvas.width - this.width - this.gutter;
    this.yStart = this.gutter;

    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(this.xStart, this.yStart, this.width, this.height);
  }

  renderStepper() {
    const rations = this.connect.rations;
    const x = this.xStart + this.gutter;
    const y = this.yStart + this.gutter;
    drawByName(this.ctx, this.icons, 'food', this.scale, x, y);
    let text, color;
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
    this.ctx.font = this.fontSize + 'px MECC';
    this.ctx.fillStyle = color;
    const textWidth = this.ctx.measureText(text).width;
    this.ctx.fillText(
      text,
      x + (this.size - textWidth) / 2,
      y + (this.size + this.fontSize) / 2
    );
    this.buttons = this.buttons.map(button => {
      const yPos = y +  button.pos;
      drawByName(this.ctx, this.icons, button.name, this.scale, x, yPos);
      return Object.assign({}, button, {
        xPos: x,
        yPos: yPos,
        width: this.size,
        height: this.size
      });
    });
  }

  renderSlots() {
    const x = this.xStart + this.size + this.gutter;
    const y = this.yStart;
    let slots = [];
    let counter = 0;
    this.ctx.fillStyle = DARK_RED;
    for (let yPos = y + this.gutter; yPos < y + this.height; yPos = yPos + this.size + this.gutter) {
      for (let xPos = x + this.gutter; xPos < x + this.width - (this.size + this.gutter); xPos = xPos + this.size + this.gutter) {
        this.ctx.fillRect(xPos, yPos, this.size, this.size);
        slots.push({
          type: SLOTS.EATING,
          position: counter++,
          xPos,
          yPos,
          width: this.size,
          height: this.size
        });
      }
    }
    return slots;
  }

  render(delta) {
    this.renderWindow();
    this.renderStepper();
    return this.renderSlots();
  }
}
