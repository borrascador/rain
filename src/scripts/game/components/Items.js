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

  update(xLeft, yLeft) {
    const clickRight = this.connect.clickRight;
    clickRight.x && clickRight.y && this.store.dispatch(clickedRight());
    if (xLeft && yLeft) {
      this.connect.draggedItem
        ? this.endItemDrag(xLeft, yLeft)
        : this.startItemDrag(xLeft, yLeft);
    } else if (clickRight.x && clickRight.y) {
      console.log('right click!!');
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
    this.buttons = this.connect.inventory.map( (button, index) => {

      // XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
      // DEBUG Hopefully this does not interfere with server data
      // if (!button.hasOwnProperty('position') && !button.hasOwnProperty('type')) {
      //   button = Object.assign({}, button, {
      //     position: index,
      //     type: SLOTS.BACKPACK
      //   })
      // }
      // XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX

      const dragged = draggedItem && (
        draggedItem.position === button.position &&
        draggedItem.type === button.type
      );
      const origin = draggedOrigin && (
        draggedOrigin.position === button.position &&
        draggedOrigin.type === button.type
      );
      const match = this.connect.slots.find(slot => {
        return slot.position === button.position && slot.type === button.type;
      });
      if (match && !dragged && !origin) { // TODO: Display partial origin
        this.renderItem(button, match.xPos, match.yPos);
        return Object.assign({}, button, {
          type: button.type,
          position: button.position,
          xPos: match.xPos,
          yPos: match.yPos,
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
      button && drawHover(this.ctx, this.fontSize, button);
    }
  }

  renderDrag() {
    const mousePos = this.connect.mousePos;
    const mouseOffset = this.connect.mouseOffset;
    const mouseDrop = this.connect.mouseDrop;
    const draggedItem = this.connect.draggedItem;
    const draggedOrigin = this.connect.draggedOrigin;
    if (!draggedItem && mouseOffset.x && mouseOffset.y) {
      this.startItemDrag(mousePos.x, mousePos.y); // TODO: Add quantity argument
    } else if (draggedItem && mouseDrop.x && mouseDrop.y) {
      this.endItemDrag(mouseDrop.x, mouseDrop.y); // TODO: Add quantity argument
    } else if (draggedItem) {
      this.renderItem(
        draggedItem,
        mousePos.x + draggedOrigin.x,
        mousePos.y + draggedOrigin.y
      );
    }
  }

  startItemDrag(x, y) { // TODO: Add quantity argument
    const item = screenToImageButton(x, y, this.buttons);
    item && this.store.dispatch(dragItem(item, item.quantity, x, y));
  }

  // TODO enable these for dropping use cases
  // dropAllItems(x, y) {
  //   this.endItemDrag(x, y, this.connect.draggedItem.quantity);
  // }
  //
  // dropOneItem(x, y) {
  //   this.endItemDrag(x, y, 1);
  // }

  endItemDrag(x, y) { // TODO: Add quantity argument
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
            quantity: draggedItem.quantity,
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
    // TODO: If there is jumpy behavior with server data, look here first
    this.store.dispatch(endDrag());
  }

  render(delta) {
    this.renderItems();
    this.renderHover();
    this.renderDrag();
  }
}
