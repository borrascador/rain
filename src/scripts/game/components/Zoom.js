import Connect from '../../store/Connect';
import { zoomIn, zoomOut } from '../../store/actions/actions';
import { logout } from '../../store/actions/requests';
import { screenToImageButton } from './utils';
import { drawByName } from '../utils/draw';

export default class Zoom {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    this.scale = 2;
    this.size = this.iconsXl.tileset.tilewidth * this.scale;

    this.buttons = [
      { name: 'settings', onClick: logout },
      { name: 'zoom-out', onClick: zoomOut },
      { name: 'zoom-in', onClick: zoomIn }
    ];
  }

  update(x, y) {
    const button = x && y && screenToImageButton(x, y, this.buttons);
    button && this.store.dispatch(button.onClick());
  }

  render(delta) {
    const pace = this.connect.pace;
    this.buttons = this.buttons.map((button, index) => {
      const xPos = this.size * (index % 3);
      const yPos = this.canvas.height - this.size;
      const [width, height] = Array(2).fill(this.size);
      drawByName(this.ctx, this.iconsXl, button.name, this.scale, xPos, yPos);
      return Object.assign({}, button, { xPos, yPos, width, height });
    });
  }
}
