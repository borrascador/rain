import Connect from '../../store/Connect';
import { drawById, drawByName, drawHover } from '../utils/draw';
import { screenToImageButton } from './utils';
import { sendEvent } from '../../store/actions/requests';
import { sendError } from '../../store/actions/actions';
import { EVENTS } from '../../store/actions/types';
import {
  DARK_RED, MEDIUM_RED, SOLID_WHITE, alphaGreen, alphaDarkRed
} from '../colors';

export default class ActionBar {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');
    this.connect = new Connect(this.store);

    this.current = 'main';
    this.buttons = this.connect.actions[this.current];

    this.scale = 4;
    this.buttonSize = this.icons.tileset.tilewidth * this.scale;
    this.barSize = this.buttonSize * 1.5;
    this.gutter = (this.barSize - this.buttonSize) / 2

    this.fontSize = 16;
    this.ctx.font = this.fontSize + 'px MECC';
  }

  update(x, y) {
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) {
      if (button.target && Object.keys(this.connect.actions).includes(button.target)) {
        this.current = button.target;
      } else if (button.tag) {
        switch (button.tag) {
          case 'seed':
            this.store.dispatch(sendEvent(EVENTS.PLANT, { id: button.id }))
            this.current = 'main';
            break;
          case 'harvest':
            const currentTile = this.connect.currentTile;
            const currentCrop = currentTile && currentTile.crops.find(crop =>
              crop.name === button.name
            );
            if (currentCrop && currentCrop.stage <= 0) { // TODO <= to ===
              this.store.dispatch(sendEvent(EVENTS.HARVEST, { id: button.id }));
            }
            this.current = 'main';
            break;
          case 'hunting':
            this.store.dispatch(
              sendEvent(this.connect.hunting ? EVENTS.STOP_HUNT : EVENTS.START_HUNT)
            )
            this.current = 'main';
            break;
          case 'fishing':
            this.store.dispatch(sendEvent(EVENTS.FISH, { id: button.id }))
            this.current = 'main';
            break;
          case 'add_food':
            this.store.dispatch(sendEvent(EVENTS.ADD_FOOD, { id: button.id }))
            this.current = 'main'; // COMBAK 'eating' instead?
            break;
          case 'remove_food':
            this.store.dispatch(sendEvent(EVENTS.REMOVE_FOOD, { id: button.id }))
            this.current = 'main'; // COMBAK 'eating' instead?
            break;
          default:
            this.store.dispatch(sendEvent(button.tag, { id: button.id })) // DEBUG
            break;
        }
      }
    }
  }

  renderBar() {
    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = this.fontSize + 'px MECC';
    const titleWidth = this.ctx.measureText(this.current).width;

    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(
      (this.canvas.width - this.barWidth) / 2,
      this.canvas.height - this.barSize,
      this.barWidth,
      this.barSize
    );

    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(
      (this.canvas.width - titleWidth) / 2 - 8,
      this.canvas.height - (this.barSize + this.fontSize + 4),
      titleWidth + 16,
      this.fontSize + 4
    );

    this.ctx.fillStyle = SOLID_WHITE;
    this.ctx.fillText(
      this.current,
      (this.canvas.width - titleWidth) / 2,
      this.canvas.height - this.barSize
    );
  }

  renderButtons() {
    const buttonX = (this.canvas.width - this.barWidth) / 2 + this.gutter;
    const buttonY = this.canvas.height - this.barSize + this.gutter;
    this.buttons = this.buttons.map((button, index) => {
      const x = buttonX + this.barSize * index;
      if (button.tileset === 'icons') {
        drawById(this.ctx, this.icons, button.id, this.scale, x, buttonY);
      } else if (button.tileset === 'items') {
        drawById(this.ctx, this.items, button.id, this.scale, x, buttonY);
      }
      if (button.tag === 'hunting') {
        this.ctx.font = this.fontSize + 'px MECC';
        const text = this.connect.hunting ? 'ON' : 'OFF';
        const textWidth = this.ctx.measureText(text).width;
        this.ctx.fillStyle = this.connect.hunting ? alphaGreen(0.9) : alphaDarkRed(0.9);
        this.ctx.fillText(
          text,
          x + (this.size - textWidth) / 2,
          buttonY + (this.size + this.fontSize) / 2
        );
      }
      return Object.assign({}, button, {
        xPos: x,
        yPos: buttonY,
        width: this.buttonSize,
        height: this.buttonSize
      });
    })
  }

  renderHover() {
    const mousePos = this.connect.mousePos;
    if (mousePos.x && mousePos.y) {
      const button = screenToImageButton(mousePos.x, mousePos.y, this.buttons);
      button && drawHover(this.ctx, this.fontSize, button);
    }
  }

  render(delta) {
    if (!this.connect.actions[this.current]) {
      this.current = 'main';
    }
    this.buttons = this.connect.actions[this.current];
    this.barWidth = this.barSize * this.buttons.length;
    this.buttons.length > 0 && this.renderBar();
    this.renderButtons();
    this.renderHover();
  }
}
