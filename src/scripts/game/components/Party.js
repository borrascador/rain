import { MODE, UPDATE_TEXT_DURATION } from '../constants';
import Connect from '../../store/Connect';
import { screenToImageButton } from './utils';
import { setPartyTab, changeMode } from '../../store/actions/actions';
import { drawById, drawByName, fadeText } from '../utils/draw';

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
      this.store.dispatch(setPartyTab(button.id));
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

      const partyChanges = this.connect.partyChanges;
      const currentTime = Date.now();
      const xPos = this.portraitSize + 5 * (this.statSize + 8)
      partyChanges.forEach(item => {
        const elapsed = currentTime - item.timestamp;
        if (elapsed > 0 && elapsed < UPDATE_TEXT_DURATION && item.id === member.id) {
          let change, propertyName;
          if (item.hasOwnProperty('health_change')) {
            change = item.health_change;
            propertyName = 'health';
          }
          if (item.hasOwnProperty('jeito_change')) {
            change = item.jeito_change;
            propertyName = 'jeito';
          }
          const text = `${change > 0 ? '+' : ''}${change} ${propertyName}`;
          const yPos = y + (32 + this.portraitSize) / 2;
          fadeText(this.ctx, elapsed, UPDATE_TEXT_DURATION, 32, text, xPos, yPos);
        }
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
