import Connect from '../../store/reducers/Connect';
import { screenToButtonName } from './utils';
import { drawById, drawByName } from '../utils/draw';

export default class Party {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    const {party} = this.connect.party;
    this.scale = 2;
    this.buttons = this.makeButtons(this.canvas, this.iconsXl, this.scale, party);
  }

  makeButtons(canvas, image, scale, party) {
    const size = image.tileset.tilewidth * scale;
    return party.map((member, index) => ({
      name: member.name,
      xPos: 0,
      yPos: index * size,
      width: size,
      height: size
    }));
  }

  update(delta, x, y) {
    const clickName = x && y && screenToButtonName(x, y, this.buttons);
    clickName && console.log(clickName);
  }

  render() {
    const {party} = this.connect.party;
    const size = this.iconsXl.tileset.tilewidth * this.scale;

    party.map((member, idx) => {
      drawById(this.ctx, this.iconsXl, member.icon, this.scale, 0, idx * size);
      [...Array(member.health)].map((_, i) => {
        drawByName(this.ctx, this.icons, 'heart', 1, 64 + i * 24, (idx * 2 + 0.4) * 32);
      });
      [...Array(member.jeito)].map((_, i) => {
        drawByName(this.ctx, this.icons, 'bolt', 1, 64 + i * 24, (idx * 2 + 1.1) * 32)
      });
    });
  }
}
