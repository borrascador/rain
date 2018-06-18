import Connect from '../../store/reducers/Connect';
import { logout } from '../../store/actions/requests';
import { zoomIn, zoomOut } from '../../store/actions/actions';
import { screenToButtonName } from './utils';
import { drawByName } from '../utils/draw';

export default class Zoom {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    this.scale = 2;
    this.buttons = this.makeButtons(this.canvas, this.iconsXl, this.scale, [
      'settings', 'zoom-out', 'zoom-in'
    ]);
  }

  makeButtons(canvas, image, scale, names) {
    const size = image.tileset.tilewidth * scale;
    return names.map((name, index) => ({
      name: name,
      xPos: canvas.width - (size * (index + 1)),
      yPos: 0,
      width: size,
      height: size
    }));
  }

  update(delta, x, y) {
    const clickName = x && y && screenToButtonName(x, y, this.buttons);
    switch (clickName) {
      case 'settings': return this.store.dispatch(logout('foo'));
      case 'zoom-out': return this.store.dispatch(zoomOut());
      case 'zoom-in': return this.store.dispatch(zoomIn());
    }
  }

  render() {
    this.buttons.forEach(button => {
      drawByName(this.ctx, this.iconsXl, button.name, this.scale, button.xPos, button.yPos);
    });
  }
}
