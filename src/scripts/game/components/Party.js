import { MODE, SLOTS, UPDATE_TEXT_DURATION } from '../constants';
import Connect from '../../store/Connect';
import { screenToImageButton } from './utils';
import {
  setPartyTab, changeMode, removePartyMember
} from '../../store/actions/actions';
import { drawById, drawByName, fadeText } from '../utils/draw';
import { SOLID_WHITE, BRIGHT_RED, MEDIUM_RED, DARK_RED } from '../colors';

export default class Party {
  constructor (store, canvas, ctx, loader) {
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
    this.unitHeight = this.connect.party.length;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.connect.party.length * this.size * 3 / 2;

    this.buttons = this.connect.party.slice();
  }

  update(x, y) {
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) {
      this.store.dispatch(setPartyTab(button.id));
      this.store.dispatch(changeMode(MODE.PARTY));
    }
  }

  renderWindow(party) {
    this.xStart = this.gutter;
    this.yStart = this.gutter;
    this.height = party.length * this.size * 3 / 2;
    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(this.xStart, this.yStart, this.width, this.height);
  }

  renderSlot(id, xPos, yPos) {
    const type = SLOTS.PARTY;
    const position = id;
    const [width, height] = Array(2).fill(this.size);
    this.ctx.fillStyle = DARK_RED;
    this.ctx.fillRect(xPos, yPos, this.size, this.size);
    this.slots.push({ type, position, xPos, yPos, width, height });
  }

  renderPartyMember(member, index) {
    let x = this.xStart + this.gutter;
    let y = this.yStart + this.gutter + index * (this.size + this.gutter * 2);

    const currentTime = Date.now();
    const memberChanges = this.connect.partyChanges.filter(item => {
      const elapsed = currentTime - item.timestamp;
      return item.id === member.id && elapsed > 0 && elapsed < UPDATE_TEXT_DURATION;
    });
    if (memberChanges.length > 0) {
      const xPos = x + this.width;
      memberChanges.forEach(item => {
        const elapsed = currentTime - item.timestamp;
        if (item.name === member.name && item.change === 1) {
          x = 0.2 * (elapsed - UPDATE_TEXT_DURATION)
        } else if (item.name === member.name && member.timestamp) {
          x = -0.2 * elapsed
        }
        const text = `${item.change > 0 ? '+' : ''}${item.change} ${item.name}`;
        const yPos = y + (this.fontSize + this.size) / 2;
        fadeText(this.ctx, elapsed, UPDATE_TEXT_DURATION, this.fontSize, text, xPos, yPos);
      })
    } else if (member.health === 0) {
      x = -1000;
      this.store.dispatch(removePartyMember(member.id));
    }

    drawById(
      this.ctx, this.iconsXl, member.icon, this.scale,
      x - this.gutter * 2, y - this.gutter * 2
    );

    this.renderSlot(member.id, x + this.size + this.gutter * 2, y);

    [...Array(member.health)].map((_, i) => {
      drawByName(
        this.ctx, this.icons, 'heart', 2,
        x + this.size * 2 + this.gutter * 3 + i * (this.iconSize + 3),
        y - this.iconSize / 8
      );
    });
    [...Array(member.jeito)].map((_, i) => {
      drawByName(
        this.ctx, this.icons, 'bolt', 2,
        x + this.size * 2 + this.gutter * 3 + i * (this.iconSize + 3),
        y + this.size - this.iconSize * 7 / 8
      );
    });

    return Object.assign({}, member, {
      xPos: x - this.gutter,
      yPos: y - this.gutter,
      width: this.size + this.gutter * 2,
      height: this.size + this.gutter * 2
    });
  }

  render(delta) {
    const party = this.connect.party;
    this.renderWindow(party);
    this.slots = [];
    this.buttons = party.map((member, index) => {
      return this.renderPartyMember(member, index);
    });
    return this.slots;
  }
}
