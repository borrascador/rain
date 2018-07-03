import Connect from '../../store/reducers/Connect';
import { logout } from '../../store/actions/requests';
import { zoomIn, zoomOut } from '../../store/actions/actions';
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

  update(delta, x, y) {
    const clickedButton = x && y && screenToImageButton(x, y, this.buttons);
    clickedButton && this.store.dispatch(clickedButton.onClick());
  }

  render() {
    this.buttons = this.buttons.map((button, index) => {
      const x = this.canvas.width - (this.size * (index + 1));
      const y = 0;
      drawByName(this.ctx, this.iconsXl, button.name, this.scale, x, y);
      return Object.assign({}, button, {
        xPos: x,
        yPos: y,
        width: this.size,
        height: this.size
      });
    });
  }
}
