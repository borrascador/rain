import Connect from '../Connect';
import { drawById, drawHover, drawDurability } from '../utils/draw';
import { screenToImageButton } from './utils';
import { dragItem, error } from '../actions/actions';
import { sendEvent } from '../actions/requests';
import { EVENTS } from '../actions/types';
import { SLOTS } from '../utils/constants';
import { BRIGHT_RED, SOLID_WHITE, BRIGHT_OPAQUE } from '../utils/colors';
import hasProp from '../utils/hasProp';

export default class Items {
  constructor(store, canvas, ctx, loader) {
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
    const { draggedItem, mouseOffset, mousePos } = this.connect;
    if (left.x && left.y) {
      if (draggedItem) {
        this.dropFullStack(left.x, left.y);
      } else {
        this.grabFullStack(left.x, left.y);
      }
    }
    if (right.x && right.y) {
      if (draggedItem) {
        this.dropOneItem(right.x, right.y);
      } else {
        this.grabHalfStack(right.x, right.y);
      }
    }
    if (!draggedItem && mouseOffset.x && mouseOffset.y) {
      this.grabFullStack(mousePos.x, mousePos.y);
    }
  }

  renderItem(stack, x, y) {
    drawById(this.ctx, this.items, stack.id, this.scale, x, y);
    if (stack.durability) {
      drawDurability(
        this.ctx, this.size, this.scale, stack.durability, x, y
      );
    } else {
      if (stack.portion) {
        const portion = parseInt(stack.portion, 10);
        const portionWidth = this.ctx.measureText(portion).width;
        this.ctx.fillStyle = BRIGHT_RED;
        this.ctx.fillText(portion, x + this.size - portionWidth, y + this.size);
      }
      this.ctx.fillStyle = SOLID_WHITE;
      this.ctx.fillText(stack.quantity, x, y + this.fontSize);
    }
  }

  render() {
    this.ctx.textAlign = 'alphabetical';
    this.ctx.font = `${this.fontSize}px MECC`;
    const { draggedItem, mousePos, slots } = this.connect;
    const stack = screenToImageButton(
      mousePos.x, mousePos.y, slots
    );

    slots.forEach((slot) => {
      const {
        type, position, xPos, yPos, quantity
      } = slot;
      const drag = draggedItem && (
        draggedItem.position === position
        && draggedItem.type === type
      );
      const hover = stack && (
        stack.position === position
        && stack.type === type
      );

      // Render non-dragging items
      if (!drag && quantity > 0) {
        this.renderItem(slot, xPos, yPos);
      }

      // Render hover transparency effect
      if (hover) {
        this.ctx.fillStyle = BRIGHT_OPAQUE;
        this.ctx.fillRect(stack.xPos, stack.yPos, stack.width, stack.height);
      }

      // Render dragging item
      if (drag) {
        this.renderItem(
          draggedItem,
          mousePos.x - draggedItem.width / 2,
          mousePos.y - draggedItem.height / 2
        );
      }
    });

    // Render hover text
    if (!draggedItem && stack && stack.name) {
      drawHover(this.ctx, this.fontSize, stack);
    }
  }

  grabFullStack(x, y) {
    const { slots } = this.connect;
    const stack = screenToImageButton(x, y, slots);
    if (stack && hasProp(stack, 'id')) {
      const dragQuantity = stack.quantity;
      const originQuantity = 0;
      this.store.dispatch(dragItem(stack, dragQuantity, originQuantity));
      this.store.dispatch(
        sendEvent(EVENTS.PICK_UP, {
          id: stack.id,
          quantity: dragQuantity,
          type: stack.type,
          position: stack.position,
        })
      );
    }
  }

  grabHalfStack(x, y) {
    const stack = screenToImageButton(x, y, this.connect.slots);
    if (stack && hasProp(stack, 'id') && stack.quantity > 1) {
      const dragQuantity = Math.floor(stack.quantity / 2);
      const originQuantity = stack.quantity - dragQuantity;
      this.store.dispatch(dragItem(stack, dragQuantity, originQuantity));
      this.store.dispatch(
        sendEvent(EVENTS.PICK_UP, {
          id: stack.id,
          quantity: dragQuantity,
          type: stack.type,
          position: stack.position,
        })
      );
    }
  }

  dropFullStack(x, y) {
    this.dropItems(x, y, this.connect.draggedItem.quantity);
  }

  dropOneItem(x, y) {
    this.dropItems(x, y, 1);
    const { draggedItem } = this.connect;
    this.store.dispatch(dragItem(draggedItem, draggedItem.quantity - 1));
  }

  dropItems(x, y, quantity) {
    const { draggedItem } = this.connect;
    const slot = screenToImageButton(x, y, this.connect.slots);
    if (slot) {
      const equipOk = (
        slot.type === SLOTS.PARTY
        && draggedItem.tags.some(tag => ['farming', 'hunting', 'fishing'].includes(tag))
      );
      const eatingOk = (
        slot.type === SLOTS.EATING && draggedItem.tags.includes('food')
      );
      const toBackpack = slot.type === SLOTS.BACKPACK;
      if (equipOk || eatingOk || toBackpack) {
        this.store.dispatch(
          sendEvent(EVENTS.PUT_DOWN, {
            id: draggedItem.id,
            quantity,
            type: slot.type,
            position: slot.position
          })
        );
      } else {
        this.store.dispatch(error(801, 'Cannot move item to this slot'));
      }
    }
  }
}