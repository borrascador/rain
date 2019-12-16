import { MODAL, SLOTS } from '../../utils/constants';
import Connect from '../../Connect';
import { screenToTile } from '../utils';
import {
  clickedLeft, clickedRight, setPartyTab, setModal, selectPlayer, removePartyMember,
} from '../../actions/actions';
import { drawById, drawByName } from '../../utils/draw';
import { MEDIUM_RED, DARK_RED } from '../../utils/colors';

export default class Party {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.iconScale = 2;
    this.icons = loader.getImage('icons', this.iconScale);
    this.iconSize = this.icons.tileset.tilewidth;

    this.portraitScale = 3;
    this.portrait = loader.getImage('icons-xl', this.portraitScale);
    this.portraitSize = this.portrait.tileset.tilewidth;

    this.itemScale = 4;
    this.items = loader.getImage('items', this.itemScale);
    this.size = this.items.tileset.tilewidth;
    this.gutter = this.items.tileset.tilewidth / this.itemScale;

    this.width = this.portraitSize + this.size + this.iconSize * 5 + this.gutter;
    this.height = this.portraitSize;

    this.buttons = this.connect.party.slice();
  }

  update() {
    const { clickLeft, clickRight, selectedPlayer } = this.connect;
    if (clickLeft.x && clickLeft.y) {
      const { x, y } = clickLeft;
      if (this.boxes && screenToTile(x, y, this.boxes)) {
        this.store.dispatch(clickedLeft());
      }
      const button = screenToTile(x, y, this.buttons);
      if (button) {
        this.store.dispatch(selectPlayer(button.id));
        if (selectedPlayer === button.id) {
          this.store.dispatch(setPartyTab(button.id));
          this.store.dispatch(setModal(MODAL.PARTY));
        }
      }
    }
    if (clickRight.x && clickRight.y) {
      const { x, y } = clickRight;
      if (this.boxes && screenToTile(x, y, this.boxes)) {
        this.store.dispatch(clickedRight());
      }
      const button = screenToTile(x, y, this.buttons);
      if (button) {
        this.store.dispatch(setPartyTab(button.id));
        this.store.dispatch(setModal(MODAL.PARTY));
      }
    }
  }

  renderBox(member, destX, destY, destWidth, destHeight) {
    const { selectedPlayer } = this.connect;
    if (member.self === true) {
      this.ctx.fillStyle = MEDIUM_RED;
      this.ctx.fillRect(destX, destY, destWidth, destHeight);
    }
    if (selectedPlayer && selectedPlayer.id === member.id) {
      const lineWidth = 4;
      this.ctx.lineWidth = lineWidth;
      this.ctx.strokeStyle = 'rgba(256, 256, 256, 0.8)';
      this.ctx.strokeRect(
        destX - lineWidth / 2, destY - lineWidth / 2,
        destWidth + lineWidth, destHeight + lineWidth,
      );
    }
    this.boxes.push({
      destX, destY, destWidth, destHeight,
    });
  }

  renderSlot(id, destX, destY) {
    const type = SLOTS.PARTY;
    const position = id;
    const [destWidth, destHeight] = Array(2).fill(this.size);
    this.ctx.fillStyle = DARK_RED;
    this.ctx.fillRect(destX, destY, this.size, this.size);
    this.slots.push({
      type, position, destX, destY, destWidth, destHeight,
    });
  }

  renderPartyMember(member, index) {
    const [x, y] = [0, index * this.height];

    if (member.health === 0) {
      this.store.dispatch(removePartyMember(member.id));
    }

    const [destX, destY] = [this.gutter / 2, y + this.gutter / 2];
    const [destWidth, destHeight] = [this.width, this.height - this.gutter];

    this.renderBox(member, destX, destY, destWidth, destHeight);
    drawById(this.ctx, this.portrait, member.icon, x, y);
    this.renderSlot(member.id, this.portraitSize, y + this.gutter);

    if (member.online === false) { // todo !member.online
      drawById(this.ctx, this.portrait, 4, x, y); // logged out
    } else if (member.health <= 0) {
      drawById(this.ctx, this.portrait, 3, x, y); // dead
    } else {
      [...Array(member.health)].forEach((_, i) => {
        drawByName(
          this.ctx, this.icons, 'heart',
          this.portraitSize + this.size + this.gutter / 2 + i * (this.iconSize + 2),
          y + this.gutter,
        );
      });
      [...Array(member.jeito)].forEach((_, i) => {
        drawByName(
          this.ctx, this.icons, 'bolt',
          this.portraitSize + this.size + this.gutter / 2 + i * (this.iconSize + 2),
          y + this.iconSize + this.gutter,
        );
      });
    }

    return Object.assign({}, member, {
      destX, destY, destWidth: destHeight, destHeight,
    });
  }

  render() {
    const { party } = this.connect;
    this.slots = [];
    this.boxes = [];
    this.buttons = party.map((member, index) => this.renderPartyMember(member, index));
    return this.slots;
  }
}
