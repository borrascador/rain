import { send } from '@giantmachines/redux-websocket';
import Connect from '../../Connect';
import { drawById, drawHover } from '../../utils/draw';
import { checkImageCollision, screenToImageButton } from '../utils';
import { clickedLeft, eventRequest, selectAction } from '../../actions/actions';
import { EVENTS } from '../../actions/types';
import {
  BRIGHT_GREEN, BRIGHT_RED, MEDIUM_RED, SOLID_WHITE,
} from '../../utils/colors';

export default class ActionBar {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    const scale = 4;
    this.icons = loader.getImage('icons', scale);
    this.items = loader.getImage('items', scale);
    this.connect = new Connect(this.store);

    this.store.dispatch(selectAction('main'));
    const { actions, selectedAction } = this.connect;
    this.buttons = actions[selectedAction];

    this.buttonSize = this.icons.tileset.tilewidth;
    this.barSize = this.buttonSize * 1.5;
    this.gutter = (this.barSize - this.buttonSize) / 2;

    this.fontSize = 16;
    this.ctx.font = `${this.fontSize}px MECC`;
  }

  update() {
    const { selectedAction, keys, clickLeft: { x, y } } = this.connect;
    if (selectedAction === 'main') {
      if (keys.includes('a')) this.store.dispatch(selectAction('attack'));
      if (keys.includes('e')) this.store.dispatch(selectAction('eat'));
    } else if (keys.includes('q')) this.store.dispatch(selectAction('main'));
    if (x && y && this.box && checkImageCollision(x, y, this.box)) {
      this.store.dispatch(clickedLeft());
    }
    const button = x && y && screenToImageButton(x, y, this.buttons);

    if (button) {
      if (button.target && Object.keys(this.connect.actions).includes(button.target)) {
        this.store.dispatch(selectAction(button.target));
      } else if (button.tag) {
        switch (button.tag) {
          case 'forage':
            this.store.dispatch(send(eventRequest(EVENTS.FORAGE)));
            this.store.dispatch(selectAction('main'));
            break;
          case 'seed':
            this.store.dispatch(send(eventRequest(EVENTS.PLANT, { id: button.id })));
            this.store.dispatch(selectAction('main'));
            break;
          default:
            this.store.dispatch(send(eventRequest(button.tag, { id: button.id }))); // DEBUG
            break;
        }
      }
    }
  }

  renderBar() {
    const { selectedAction } = this.connect;
    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = `${this.fontSize}px MECC`;
    const titleWidth = this.ctx.measureText(selectedAction).width;

    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(
      (this.canvas.width - this.barWidth) / 2,
      this.canvas.height - this.barSize,
      this.barWidth,
      this.barSize,
    );
    this.box = {
      xPos: (this.canvas.width - this.barWidth) / 2,
      yPos: this.canvas.height - this.barSize,
      width: this.barWidth,
      height: this.barSize,
    };

    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(
      (this.canvas.width - titleWidth) / 2 - 8,
      this.canvas.height - (this.barSize + this.fontSize + 4),
      titleWidth + 16,
      this.fontSize + 4,
    );

    this.ctx.fillStyle = SOLID_WHITE;
    this.ctx.fillText(
      selectedAction,
      (this.canvas.width - titleWidth) / 2,
      this.canvas.height - this.barSize,
    );
  }

  renderButtons() {
    const buttonX = (this.canvas.width - this.barWidth) / 2 + this.gutter;
    const buttonY = this.canvas.height - this.barSize + this.gutter;
    this.buttons = this.buttons.map((button, index) => {
      const x = buttonX + this.barSize * index;
      if (button.tileset === 'icons') {
        drawById(this.ctx, this.icons, button.id, x, buttonY);
      } else if (button.tileset === 'items') {
        drawById(this.ctx, this.items, button.id, x, buttonY);
      }
      if (button.tag === 'hunting') {
        this.ctx.font = `${this.fontSize}px MECC`;
        const text = this.connect.hunting ? 'ON' : 'OFF';
        const textWidth = this.ctx.measureText(text).width;
        this.ctx.fillStyle = this.connect.hunting ? BRIGHT_GREEN : BRIGHT_RED;
        this.ctx.fillText(
          text,
          x + 2 + (this.buttonSize - textWidth) / 2,
          buttonY + 6 + this.buttonSize,
        );
      }
      return Object.assign({}, button, {
        xPos: x,
        yPos: buttonY,
        width: this.buttonSize,
        height: this.buttonSize,
      });
    });
  }

  renderHover() {
    const { mousePos } = this.connect;
    if (mousePos.x && mousePos.y) {
      const button = screenToImageButton(mousePos.x, mousePos.y, this.buttons);
      if (button) drawHover(this.ctx, this.fontSize, button);
    }
  }

  render() {
    const { actions, selectedAction } = this.connect;
    if (!actions[selectedAction]) {
      this.store.dispatch(selectAction('main'));
    }
    this.buttons = actions[selectedAction];
    this.barWidth = this.barSize * this.buttons.length;
    if (this.buttons.length > 0) this.renderBar();
    this.renderButtons();
    this.renderHover();
  }
}
