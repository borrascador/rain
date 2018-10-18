import Connect from '../../store/Connect';
import { drawById, drawHover, drawDurability } from '../utils/draw';
import { screenToImageButton } from './utils';
import { changeMode, setItemPosition } from '../../store/actions/actions';
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

  update(x, y) {
    if (x && y) {
      this.draggingItem ? this.endItemDrag(x, y) : this.startItemDrag(x, y);
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
    const slots = this.connect.slots;
    this.buttons = this.connect.inventory.map((button, index) => {
      const type = button.hasOwnProperty('type') ? button.type : SLOTS.INVENTORY;
      const position = button.hasOwnProperty('position') ? button.position : index;
      const match = slots.find(slot => {
        return slot.position === position && slot.type === type;
      });
      if (match) {
        this.renderItem(button, match.xPos, match.yPos);
        return Object.assign({}, button, {
          type, position,
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
    if (this.draggingItem) {
      this.store.dispatch(setItemPosition(this.draggingItem.id, null, null));
    }
  }

  renderItemDrag(x, y) {
    this.draggingItem = Object.assign({}, this.draggingItem, { xPos: x, yPos: y });
    this.renderItem(this.draggingItem, this.draggingItem.xPos, this.draggingItem.yPos);
  }

  endItemDrag(x, y) {
    const dragging = this.draggingItem;
    const origin = this.dragOrigin;
    const slot = screenToImageButton(x, y, this.connect.slots);
    const match = slot && this.buttons.find(button => {
      return button.position === slot.position && button.type === slot.type;
    });
    // Eventually setItemPosition(item, slot),
    // so we can read type and position for both in reducer!
    // currently this only works if there is one stack of each item
    if (slot && match) {
      this.store.dispatch(
        setItemPosition(dragging.id, slot.type, slot.position)
      );
      this.store.dispatch(
        setItemPosition(match.id, dragging.type, dragging.position)
      );
    } else if (slot) {
      this.store.dispatch(
        setItemPosition(dragging.id, slot.type, slot.position)
      );
    } else {
      this.store.dispatch(
        setItemPosition(dragging.id, origin.type, origin.position)
      );
    }
    this.draggingItem = null;
  }

  render(delta) {
    this.renderItems();
    this.renderHover();
    this.renderDrag();
  }
}
