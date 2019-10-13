import { MODAL, SLOTS, UPDATE_TEXT_DURATION } from '../../utils/constants';
import Connect from '../../Connect';
import { screenToImageButton } from '../utils';
import {
  clickedLeft, clickedRight, setPartyTab, setModal, selectPlayer, removePartyMember
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

    this.scale = 3;
    this.size = this.items.tileset.tilewidth * this.scale;
    this.iconScale = 2;
    this.iconSize = this.icons.tileset.tilewidth * this.iconScale;
    this.gutter = this.items.tileset.tilewidth;

    this.fontSize = 32;
    this.hoverFontSize = 16;

    this.unitWidth = 5;
    this.width = this.unitWidth * this.size + 4;
    this.height = this.size + this.gutter * 2;

    this.buttons = this.connect.party.slice();
  }

  update() {
    const { clickLeft, clickRight } = this.connect;
    if (clickLeft.x && clickLeft.y) {
      const { x, y } = clickLeft;
      if (this.boxes && screenToImageButton(x, y, this.boxes)) {
        this.store.dispatch(clickedLeft());
      }
      const button = screenToImageButton(x, y, this.buttons);
      if (button) {
        this.store.dispatch(selectPlayer(button.id));
      }
    }
    if (clickRight.x && clickRight.y) {
      const { x, y } = clickRight;
      if (this.boxes && screenToImageButton(x, y, this.boxes)) {
        this.store.dispatch(clickedRight());
      }
      const button = screenToImageButton(x, y, this.buttons);
      if (button) {
        this.store.dispatch(setPartyTab(button.id));
        this.store.dispatch(setModal(MODAL.PARTY));
      }
    }
  }

  renderBox(member, xPos, yPos, width, height) {
    const { selectedPlayer } = this.connect;
    if (member.self === true) {
      this.ctx.fillStyle = MEDIUM_RED;
      this.ctx.fillRect(xPos, yPos, width, height);
    }
    if (selectedPlayer && selectedPlayer.id === member.id) {
      const lineWidth = 4;
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = 'rgba(256, 256, 256, 0.8)';
      this.ctx.strokeRect(
        xPos - lineWidth / 2, yPos - lineWidth / 2,
        width + lineWidth, height + lineWidth
      );
    }
    this.boxes.push({ xPos, yPos, width, height });
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
    const { partyChanges } = this.connect;
    let x = 0;
    const y = index * this.height;
    const currentTime = Date.now();
    const memberChanges = partyChanges.filter((item) => {
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

    const [xPos, yPos] = [x + this.size / 4, y + this.size / 4];
    const [width, height] = [this.width, this.size * 3 / 2];

    this.renderBox(member, xPos, yPos, width, height);
    drawById(this.ctx, this.iconsXl, member.icon, this.scale, x, y);
    // this.renderSlot(member.id, x + this.height, y);

    if (member.online === false) { // todo !member.online
      drawById(this.ctx, this.iconsXl, 4, this.scale, x, y); // logged out
    } else if (member.health <= 0) {
      drawById(this.ctx, this.iconsXl, 3, this.scale, x, y); // dead
    } else {
      [...Array(member.health)].forEach((_, i) => {
        drawByName(
          this.ctx, this.icons, 'heart', this.iconScale,
          x + this.size * 2 - this.gutter * 5 / 8 + i * (this.iconSize + 2),
          y + this.gutter
        );
      });
      [...Array(member.jeito)].forEach((_, i) => {
        drawByName(
          this.ctx, this.icons, 'bolt', this.iconScale,
          x + this.size * 2 - this.gutter * 5 / 8 + i * (this.iconSize + 2),
          y + this.iconSize + this.gutter
        );
      });
    }

    return Object.assign({}, member, { xPos, yPos, width: height, height });
  }

  render() {
    const { party } = this.connect;
    this.slots = [];
    this.boxes = [];
    this.buttons = party.map((member, index) => this.renderPartyMember(member, index));
    return this.slots;
  }
}
