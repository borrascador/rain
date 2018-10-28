import Connect from '../../store/Connect';
import { drawById, drawHover, drawDurability } from '../utils/draw';
import { screenToImageButton } from './utils';
import {
  changeMode, clickedRight, dragItem, endDrag, error
} from '../../store/actions/actions';
import { sendEvent } from '../../store/actions/requests';
import { EVENTS } from '../../store/actions/events';
import { MODE, SLOTS } from '../constants';
import { DARK_RED, MEDIUM_RED, BRIGHT_RED, SOLID_WHITE } from '../colors';

export default class Items {

  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;

    this.scale = 4;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.size / this.scale;

    this.unitWidth = 4;
    this.unitHeight = 5;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.size + this.gutter) + this.gutter;
  }

  update(left, right) {
    if (left.x && left.y) {
      this.connect.draggedItem
        ? this.dropFullStack(left.x, left.y)
        : this.grabFullStack(left.x, left.y);
    }
    if (right.x && right.y) {
      this.connect.draggedItem
        ? this.dropOneItem(right.x, right.y)
        : this.grabHalfStack(right.x, right.y);
    }
  }

  renderItem(button, x, y) {
    drawById(this.ctx, this.items, button.id, this.scale, x, y);
    if (button.durability) {
      drawDurability(
        this.ctx, this.size, this.scale, button.durability, x, y
      );
    } else {
      if (button.portion) {
        const portion = parseInt(button.portion);
        const portionWidth = this.ctx.measureText(portion).width;
        this.ctx.fillStyle = BRIGHT_RED;
        this.ctx.fillText(portion, x + this.size - portionWidth, y + this.size);
      }
      this.ctx.fillStyle = SOLID_WHITE;
      this.ctx.fillText(button.quantity, x, y + this.fontSize);
    }
  }

  renderItems() {
    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = this.fontSize + 'px MECC';
    this.ctx.fillStyle = SOLID_WHITE;
    const draggedItem = this.connect.draggedItem;
    const draggedOrigin = this.connect.draggedOrigin;
    this.buttons = this.connect.slots.map( (button, index) => {
      const dragged = draggedItem && (
        draggedItem.position === button.position &&
        draggedItem.type === button.type
      );
      const origin = draggedOrigin && (
        draggedOrigin.position === button.position &&
        draggedOrigin.type === button.type
      );
      if (button.quantity > 0 && !dragged && !origin) { // TODO: Display partial origin
        this.renderItem(button, button.xPos, button.yPos);
        return Object.assign({}, button, {
          type: button.type,
          position: button.position,
          xPos: button.xPos,
          yPos: button.yPos,
          width: this.size,
          height: this.size
        });
      } else {
        return button;
      }
    });
  }

  renderHover() {
    const mousePos = this.connect.mousePos;
    if (mousePos.x && mousePos.y) {
      const button = screenToImageButton(mousePos.x, mousePos.y, this.buttons);
      button && button.name && drawHover(this.ctx, this.fontSize, button);
    }
  }

  renderDrag() {
    const mousePos = this.connect.mousePos;
    const mouseOffset = this.connect.mouseOffset;
    const mouseDrop = this.connect.mouseDrop;
    const draggedItem = this.connect.draggedItem;
    const draggedOrigin = this.connect.draggedOrigin;
    if (draggedOrigin && draggedOrigin.quantity > 0) {
      this.renderItem(
        draggedOrigin,
        draggedOrigin.xPos,
        draggedOrigin.yPos,
      );
    }
    if (!draggedItem && mouseOffset.x && mouseOffset.y) {
      this.grabFullStack(mousePos.x, mousePos.y);
    } else if (draggedItem && mouseDrop.x && mouseDrop.y) {
      this.dropFullStack(mouseDrop.x, mouseDrop.y);
    } else if (draggedItem) {
      this.renderItem(
        draggedItem,
        mousePos.x + draggedOrigin.x,
        mousePos.y + draggedOrigin.y
      );
    }
  }

  grabFullStack(x, y) {
    const stack = screenToImageButton(x, y, this.buttons);
    if (stack && stack.hasOwnProperty('id')) {
      const dragQuantity = stack.quantity;
      const originQuantity = 0;
      this.store.dispatch(dragItem(stack, dragQuantity, originQuantity, x, y));
    }
  }

  grabHalfStack(x, y) {
    const stack = screenToImageButton(x, y, this.buttons);
    if (stack && stack.hasOwnProperty('id')) {
      const dragQuantity = Math.floor(stack.quantity / 2);
      const originQuantity = stack.quantity - dragQuantity;
      this.store.dispatch(dragItem(stack, dragQuantity, originQuantity, x, y));
    }
  }

  dropFullStack(x, y) {
    this.dropItems(x, y, this.connect.draggedItem.quantity);
    this.store.dispatch(endDrag());
  }

  dropOneItem(x, y) {
    const draggedItem = this.connect.draggedItem;
    const draggedOrigin = this.connect.draggedOrigin;
    this.dropItems(x, y, 1);
    if (draggedItem.quantity - 1 === 0) {
      this.store.dispatch(endDrag());
    } else {
      const dragQuantity = draggedItem.quantity - 1;
      const originQuantity = 0;
      const xOrigin = draggedItem.xPos - draggedOrigin.x;
      const yOrigin = draggedItem.yPos - draggedOrigin.y;
      this.store.dispatch(
        dragItem(draggedItem, dragQuantity, originQuantity, xOrigin, yOrigin)
      );
    }
  }

  dropItems(x, y, quantity) { // TODO: Add quantity argument
    const draggedItem = this.connect.draggedItem;
    const draggedOrigin = this.connect.draggedOrigin;
    const slot = screenToImageButton(x, y, this.connect.slots);
    if (slot) {
      const equipping = (
        slot.type === SLOTS.PARTY &&
        draggedItem.tags.some(tag =>
          ["farming", "hunting", "fishing"].includes(tag)
        )
      );
      const eating = (
        slot.type === SLOTS.EATING && draggedItem.tags.includes("food")
      );
      const neither = slot.type === SLOTS.BACKPACK;
      if (equipping || eating || neither) {
        this.store.dispatch(
          sendEvent(EVENTS.MOVE_ITEM, draggedItem.id, {
            quantity,
            srcType: draggedOrigin.type,
            srcPosition: draggedOrigin.position,
            destType: slot.type,
            destPosition: slot.position
          })
        );
      } else {
        this.store.dispatch(error(801, "Cannot move item to this slot"));
      }
    }
  }

  render(delta) {
    this.renderItems();
    this.renderHover();
    this.renderDrag();
  }
}
