import { MODE } from '../constants';
import Connect from '../../store/Connect';
import { screenToImageButton } from './utils';
import { changeMode } from '../../store/actions/actions';
import { drawById, drawByName } from '../utils/draw';

export default class Party {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    this.scale = 2;
    this.portraitSize = this.iconsXl.tileset.tilewidth * this.scale;
    this.statSize = this.icons.tileset.tilewidth;

    this.buttons = this.connect.party.slice();
  }

  update(x, y) {
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) {
      this.store.dispatch(changeMode(MODE.PARTY));
    }
  }

  render(delta) {
    const party = this.connect.party;

    // Makes a NEW set of buttons each time
    // Allows adding and removing party members
    this.buttons = party.map((member, index) => {
      const x = 0;
      const y = index * this.portraitSize;
      drawById(this.ctx, this.iconsXl, member.icon, this.scale, x, y);
      [...Array(member.health)].map((_, i) => {
        drawByName(
          this.ctx, this.icons, 'heart', 1,
          this.portraitSize + i * (this.statSize + 8),
          (index * 2 + 0.4) * this.portraitSize / 2 // TODO: Eliminate hardcoded values
        );
      });
      [...Array(member.jeito)].map((_, i) => {
        drawByName(
          this.ctx, this.icons, 'bolt', 1,
          this.portraitSize + i * (this.statSize + 8),
          (index * 2 + 1.1) * this.portraitSize / 2 // TODO: Eliminate hardcoded values
        );
      });
      return Object.assign({}, member, {
        xPos: x,
        yPos: y,
        width: this.portraitSize,
        height: this.portraitSize
      });
    });
  }
}
