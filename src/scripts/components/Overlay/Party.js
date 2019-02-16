import { MODAL, SLOTS, UPDATE_TEXT_DURATION } from '../../utils/constants';
import Connect from '../../Connect';
import { screenToImageButton } from '../utils';
import {
  clickedLeft, setPartyTab, setModal, removePartyMember
} from '../../actions/actions';
import { drawById, drawByName, fadeText } from '../../utils/draw';
import { MEDIUM_RED, DARK_RED } from '../../utils/colors';

export default class Party {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.items = loader.getImage('items');
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    this.scale = 4;
    this.iconSize = this.icons.tileset.tilewidth * 2;
    this.size = this.items.tileset.tilewidth * this.scale;
    this.gutter = this.size / this.scale;

    this.fontSize = 32;

    this.unitWidth = 5;
    this.unitHeight = 1;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * this.size + this.gutter * 2;

    this.buttons = this.connect.party.slice();
  }

  update() {
    const { x, y } = this.connect.clickLeft;
    if (x && y && this.boxes && screenToImageButton(x, y, this.boxes)) {
      this.store.dispatch(clickedLeft());
    }
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) {
      this.store.dispatch(setPartyTab(button.id));
      this.store.dispatch(setModal(MODAL.PARTY));
    }
  }

  renderBox(xPos, yPos, width, height) {
    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(xPos, yPos, width, height);
    this.boxes.push({
      xPos, yPos, width, height
    });
  }

  renderSlot(id, xPos, yPos) {
    const type = SLOTS.PARTY;
    const position = id;
    const [width, height] = Array(2).fill(this.size);
    this.ctx.fillStyle = DARK_RED;
    this.ctx.fillRect(xPos, yPos, this.size, this.size);
    this.slots.push({
      type, position, xPos, yPos, width, height
    });
  }

  renderPartyMember(member, index) {
    let x = this.gutter * 2;
    const y = this.gutter * 2 + index * this.height;
    const currentTime = Date.now();
    const memberChanges = this.connect.partyChanges.filter((item) => {
      const elapsed = currentTime - item.timestamp;
      return item.id === member.id && elapsed > 0 && elapsed < UPDATE_TEXT_DURATION;
    });
    if (memberChanges.length > 0) {
      const xPos = x + this.width;
      memberChanges.forEach((item) => {
        const elapsed = currentTime - item.timestamp;
        if (item.name === member.name && item.change === 1) {
          x = 0.2 * (elapsed - UPDATE_TEXT_DURATION);
        } else if (item.name === member.name && member.timestamp) {
          x = -0.2 * elapsed;
        }
        const text = `${item.change > 0 ? '+' : ''}${item.change} ${item.name}`;
        const yPos = y + (this.fontSize + this.size) / 2;
        fadeText(this.ctx, elapsed, UPDATE_TEXT_DURATION, this.fontSize, text, xPos, yPos);
      });
    } else if (member.health === 0) {
      x = -1000;
      this.store.dispatch(removePartyMember(member.id));
    }

    this.renderBox(x - this.gutter, y - this.gutter, this.width, this.height);

    drawById(
      this.ctx, this.iconsXl, member.icon, this.scale,
      x - this.gutter * 2, y - this.gutter * 2
    );

    this.renderSlot(member.id, x + this.height, y);

    [...Array(member.health)].forEach((_, i) => {
      drawByName(
        this.ctx, this.icons, 'heart', 2,
        x + this.size * 2 + this.gutter * 3 + i * (this.iconSize + 3),
        y - this.iconSize / 8
      );
    });
    [...Array(member.jeito)].forEach((_, i) => {
      drawByName(
        this.ctx, this.icons, 'bolt', 2,
        x + this.size * 2 + this.gutter * 3 + i * (this.iconSize + 3),
        y + this.size - this.iconSize * 7 / 8
      );
    });

    return Object.assign({}, member, {
      xPos: x - this.gutter,
      yPos: y - this.gutter,
      width: this.height,
      height: this.height
    });
  }

  render() {
    this.height = this.size + this.gutter * 2;
    this.slots = [];
    this.boxes = [];
    this.buttons = this.connect.party.map((member, index) => this.renderPartyMember(member, index));
    return this.slots;
  }
}
