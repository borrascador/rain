import Connect from '../../store/Connect';
import Animation from '../utils/Animation';
import { screenToImageButton } from './utils';
import { drawByName, slideFadeText } from '../utils/draw';
import { changeMode } from '../../store/actions/actions';
import { MODE, UPDATE_TEXT_DURATION } from '../constants';

export default class Inventory {
  constructor (store, canvas, ctx, loader, setDim) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');
    this.connect = new Connect(this.store);

    this.scale = 4;
    this.size = this.iconsXl.tileset.tilewidth * this.scale;
    this.fontSize = 32;
    this.animate = new Animation(this.scale, this.scale, 0.5);

    this.buttons = [ { name: 'pack-big' } ];
  }

  update(x, y) {
    if (x && y && screenToImageButton(x, y, this.buttons)) {
      this.store.dispatch(changeMode(MODE.INVENTORY));
    }
  }

  render(delta) {
    this.animate.tick(delta);
    const x = this.canvas.width - this.size;
    const y = this.canvas.height / 2 - this.size / 2;

    const inventoryChanges = this.connect.inventoryChanges;
    const currentTime = Date.now();
    inventoryChanges.forEach(item => {
      const elapsed = currentTime - item.timestamp;
      if (elapsed > 0 && elapsed < UPDATE_TEXT_DURATION) {
        const text = `${item.change > 0 ? '+' : ''}${item.change} ${item.name}`;
        const yPos = y + this.size / 2;
        slideFadeText(this.ctx, elapsed, UPDATE_TEXT_DURATION, this.fontSize, text, x, yPos);
      }
    });

    this.buttons = this.buttons.map(button => {
      drawByName(this.ctx, this.iconsXl, button.name, this.scale, x, y + this.animate.getValue());
      return Object.assign({}, button, {
        xPos: x,
        yPos: y,
        width: this.size,
        height: this.size
      });
    });
  }
}
