import Connect from '../../store/reducers/Connect';
import { drawById, drawByName } from '../utils/draw';

export default class Party {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);
  }

  update(delta, xClick, yClick) {

  }
  
  render() {
    const {party} = this.connect.party;

    party.map((member, idx) => {
      drawById(this.ctx, this.iconsXl, member.icon, 2, 0, idx * 64);
      [...Array(member.health)].map((_, i) => {
        drawByName(this.ctx, this.icons, 'heart', 1, 64 + i * 24, (idx * 2 + 0.4) * 32);
      });
      [...Array(member.jeito)].map((_, i) => {
        drawByName(this.ctx, this.icons, 'bolt', 1, 64 + i * 24, (idx * 2 + 1.1) * 32)
      });
    });
  }
}
