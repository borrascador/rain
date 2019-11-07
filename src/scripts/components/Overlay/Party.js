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
      if (this.boxes && screenToImageButton(x, y, this.boxes)) {
        this.store.dispatch(clickedLeft());
      }
      const button = screenToImageButton(x, y, this.buttons);
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
    const [x, y] = [0, index * this.height];
    
    if (member.health === 0) {
      this.store.dispatch(removePartyMember(member.id));
    }

    const [xPos, yPos] = [this.gutter / 2, y + this.gutter / 2];
    const [width, height] = [this.width, this.height - this.gutter];

    this.renderBox(member, xPos, yPos, width, height);
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
          y + this.gutter
        );
      });
      [...Array(member.jeito)].forEach((_, i) => {
        drawByName(
          this.ctx, this.icons, 'bolt',
          this.portraitSize + this.size + this.gutter / 2 + i * (this.iconSize + 2),
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
