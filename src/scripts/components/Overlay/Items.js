import { send } from '@giantmachines/redux-websocket';
import Connect from '../../Connect';
import { drawById, drawHover, drawDurability } from '../../utils/draw';
import { screenToImageButton } from '../utils';
import {
  clickedLeft, clickedRight, dragItem, error, eventRequest,
} from '../../actions/actions';
import { EVENTS } from '../../actions/types';
import { SLOTS } from '../../utils/constants';
import { BRIGHT_RED, SOLID_WHITE, BRIGHT_OPAQUE } from '../../utils/colors';
import hasProp from '../../utils/hasProp';

export default class Items {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.fontSize = 16;

    this.scale = 4;
    this.icons = loader.getImage('icons', this.scale);
    this.items = loader.getImage('items', this.scale);
    this.size = this.icons.tileset.tilewidth;
    this.gutter = this.size / this.scale;

    this.unitWidth = 4;
    this.unitHeight = 5;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.size + this.gutter) + this.gutter;
  }

  updateLeftClick(draggedItem, slots) {
    const { x, y } = this.connect.clickLeft;
    if (x && y) {
      const leftClickSlot = screenToImageButton(x, y, slots);
      if (leftClickSlot) {
        this.store.dispatch(clickedLeft());
        if (draggedItem) {
          this.dropFullStack(leftClickSlot);
        } else {
          this.grabFullStack(leftClickSlot);
        }
      }
    }
  }

  updateRightClick(draggedItem, slots) {
    const { x, y } = this.connect.clickRight;
    if (x && y) {
      const rightClickSlot = screenToImageButton(x, y, slots);
      if (rightClickSlot) {
        this.store.dispatch(clickedRight());
        if (draggedItem) {
          this.dropOneItem(rightClickSlot);
        } else {
          this.grabHalfStack(rightClickSlot);
        }
      }
    }
  }

  updateDrag(draggedItem, slots) {
    const { mouseOffset, mousePos } = this.connect;
    if (!draggedItem && mouseOffset.x && mouseOffset.y) {
      const dragSlot = screenToImageButton(mousePos.x, mousePos.y, slots);
      this.grabFullStack(dragSlot);
    }
  }

  update() {
    const { draggedItem, slots } = this.connect;
    this.updateLeftClick(draggedItem, slots);
    this.updateRightClick(draggedItem, slots);
    this.updateDrag(draggedItem, slots);
  }

  renderItem(stack, x, y) {
    drawById(this.ctx, this.items, stack.id, x, y);
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

  grabFullStack(stack) {
    if (hasProp(stack, 'id')) {
      const dragQuantity = stack.quantity;
      const originQuantity = 0;
      this.store.dispatch(dragItem(stack, dragQuantity, originQuantity));
      this.store.dispatch(
        send(eventRequest(EVENTS.PICK_UP, {
          id: stack.id,
          quantity: dragQuantity,
          type: stack.type,
          position: stack.position,
        }))
      );
    }
  }

  grabHalfStack(stack) {
    if (hasProp(stack, 'id') && stack.quantity > 1) {
      const dragQuantity = Math.floor(stack.quantity / 2);
      const originQuantity = stack.quantity - dragQuantity;
      this.store.dispatch(dragItem(stack, dragQuantity, originQuantity));
      this.store.dispatch(
        send(eventRequest(EVENTS.PICK_UP, {
          id: stack.id,
          quantity: dragQuantity,
          type: stack.type,
          position: stack.position,
        }))
      );
    }
  }

  dropFullStack(stack) {
    this.dropItems(stack, this.connect.draggedItem.quantity);
  }

  dropOneItem(stack) {
    this.dropItems(stack, 1);
    const { draggedItem } = this.connect;
    this.store.dispatch(dragItem(draggedItem, draggedItem.quantity - 1));
  }

  dropItems(stack, quantity) {
    const { draggedItem } = this.connect;
    const equipOk = (
      stack.type === SLOTS.PARTY
      && draggedItem.tags.some(tag => ['farming', 'hunting', 'fishing'].includes(tag))
    );
    const eatingOk = (
      stack.type === SLOTS.EATING && draggedItem.tags.includes('food')
    );
    const toBackpack = stack.type === SLOTS.BACKPACK;
    if (equipOk || eatingOk || toBackpack) {
      this.store.dispatch(
        send(eventRequest(EVENTS.PUT_DOWN, {
          id: draggedItem.id,
          quantity,
          type: stack.type,
          position: stack.position
        }))
      );
    } else {
      this.store.dispatch(error(801, 'Cannot move item to this slot'));
    }
  }
}
