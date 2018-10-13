import Connect from '../../store/Connect';
import { drawById, drawHover, drawDurability } from '../utils/draw';
import { screenToImageButton } from './utils';
import { changeMode, setItemPosition } from '../../store/actions/actions';
import { MODE } from '../constants';
import { DARK_RED, MEDIUM_RED, SOLID_WHITE } from '../colors';

export default class InventoryWindow {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;

    this.scale = 4;
    this.buttonSize = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.buttonSize / this.scale;

    this.unitWidth = 5;
    this.unitHeight = 4;
    this.width = this.unitWidth * (this.buttonSize + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.buttonSize + this.gutter) + this.gutter;
  }

  update(x, y) {
    if (x && y) {
      const xMin = (this.canvas.width - this.width) / 2;
      const xMax = xMin + this.width;
      const yMin = (this.canvas.height - this.height) / 2;
      const yMax = yMin + this.height;
      if (x > xMin && x < xMax && y > yMin && y < yMax) {
        this.draggingItem && this.endItemDrag(x, y) || this.startItemDrag(x, y);
      } else if (this.draggingItem) {
        this.endItemDrag(x, y)
      } else {
        this.store.dispatch(changeMode(MODE.MAP));
      }
    }
  }

  renderWindow() {
    let x = (this.canvas.width - this.width) / 2;
    let y = (this.canvas.height - this.height) / 2;

    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(x, y, this.width, this.height);

    this.ctx.fillStyle = DARK_RED;
    this.slots = [];
    let counter = 0;
    for (let yPos = y + this.gutter; yPos < y + this.height; yPos = yPos + this.buttonSize + this.gutter) {
      for (let xPos = x + this.gutter; xPos < x + this.width; xPos = xPos + this.buttonSize + this.gutter) {
        this.ctx.fillRect(xPos, yPos, this.buttonSize, this.buttonSize);
        this.slots.push({
          position: counter++,
          xPos,
          yPos,
          width: this.buttonSize,
          height: this.buttonSize
        });
      }
    }
  }

  renderTitle() {
    const titleWidth = this.ctx.measureText(MODE.INVENTORY).width;
    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(
      (this.canvas.width - titleWidth) / 2 - this.gutter,
      this.canvas.height / 2 - this.height / 2 - this.fontSize - 4,
      titleWidth + this.gutter * 2,
      this.fontSize + 4
    );

    this.ctx.fillStyle = SOLID_WHITE;
    this.ctx.fillText(
      MODE.INVENTORY,
      (this.canvas.width - titleWidth) / 2,
      (this.canvas.height - this.height) / 2
    );
  }

  renderItem(button, x, y) {
    drawById(this.ctx, this.items, button.id, this.scale, x, y);
    if (button.durability) {
      drawDurability(
        this.ctx, this.buttonSize, this.scale, button.durability, x, y
      );
    } else {
      this.ctx.fillText(button.quantity, x, y + this.fontSize);
    }
  }

  renderItems() {
    let xOrigin = (this.canvas.width - this.width) / 2;
    let yOrigin = (this.canvas.height - this.height) / 2;
    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = this.fontSize + 'px MECC';
    this.ctx.fillStyle = SOLID_WHITE;
    this.buttons = this.connect.inventory.map((button, index) => {
      const position = button.hasOwnProperty('position') ? button.position : index;
      const xPos = xOrigin + this.gutter + (this.buttonSize + this.gutter) * (position % this.unitWidth);
      const yPos = yOrigin + this.gutter + (this.buttonSize + this.gutter) * Math.floor(position / this.unitWidth);
      typeof position === 'number' && this.renderItem(button, xPos, yPos);
      return Object.assign({}, button, {
        position, xPos, yPos,
        width: this.buttonSize,
        height: this.buttonSize
      });
    });
  }

  renderHover() {
    const { xMouse, yMouse } = this.connect.mouse;
    if (xMouse && yMouse) {
      const button = screenToImageButton(xMouse, yMouse, this.buttons);
      button && drawHover(this.ctx, this.fontSize, button);
    }
  }

  renderDrag() {
    const { xMouse, yMouse } = this.connect.mouse;
    const { xOffset, yOffset } = this.connect.offset;
    const { xDrop, yDrop } = this.connect.drop;
    if (!this.draggingItem && xOffset && yOffset) {
      this.startItemDrag(xMouse, yMouse);
    } else if (this.draggingItem && xDrop && yDrop) {
      this.endItemDrag(xDrop, yDrop);
    } else if (this.draggingItem) {
      const x = xMouse + this.dragOrigin.xPos - this.x;
      const y = yMouse + this.dragOrigin.yPos - this.y;
      this.renderItemDrag(x, y);
    }
  }

  startItemDrag(x, y) {
    this.draggingItem = this.dragOrigin = screenToImageButton(x, y, this.buttons);
    this.x = x;
    this.y = y;
    this.draggingItem && this.store.dispatch(setItemPosition(this.draggingItem.id, null));
  }

  renderItemDrag(x, y) {
    this.draggingItem = Object.assign({}, this.draggingItem, { xPos: x, yPos: y });
    this.renderItem(this.draggingItem, this.draggingItem.xPos, this.draggingItem.yPos);
  }

  endItemDrag(x, y) {
    const slot = screenToImageButton(x, y, this.slots);
    const match = slot && this.buttons.find(button => button.position === slot.position);
    if (slot && match) {
      this.store.dispatch(setItemPosition(this.draggingItem.id, slot.position));
      this.store.dispatch(setItemPosition(match.id, this.draggingItem.position));
    } else if (slot) {
      this.store.dispatch(setItemPosition(this.draggingItem.id, slot.position));
    } else {
      this.store.dispatch(setItemPosition(this.draggingItem.id, this.dragOrigin.position));
    }
    this.draggingItem = null;
  }

  render(delta) {
    this.renderWindow();
    this.renderTitle();
    this.renderItems();
    this.renderHover();
    this.renderDrag();
  }
}
