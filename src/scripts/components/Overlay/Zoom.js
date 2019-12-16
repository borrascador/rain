import Connect from '../../Connect';
import {
  clickedLeft, zoomIn, zoomOut, setModal, needRender,
} from '../../actions/actions';
import { screenToTile } from '../utils';
import { drawByName } from '../../utils/draw';
import { MODAL } from '../../utils/constants';

export default class Zoom {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.scale = 2;
    this.iconsXl = loader.getImage('icons-xl', this.scale);
    this.size = this.iconsXl.tileset.tilewidth;

    this.buttons = [
      { name: 'settings' },
      { name: 'zoom-in' },
      { name: 'zoom-out' },
    ];
  }

  update() {
    const { x, y } = this.connect.clickLeft;
    const button = x && y && screenToTile(x, y, this.buttons);
    if (button) {
      this.store.dispatch(clickedLeft());
      switch (button.name) {
        case 'settings':
          this.store.dispatch(setModal(MODAL.IN_GAME_MENU));
          // this.store.dispatch(send(logoutRequest()));
          break;
        case 'zoom-out':
          this.store.dispatch(zoomOut());
          this.store.dispatch(needRender());
          break;
        case 'zoom-in':
          this.store.dispatch(zoomIn());
          this.store.dispatch(needRender());
          break;
        case 'glass':
          // const { mode } = this.connect;
          // const target = mode === MODE.TACTICAL ? MODE.GLOBAL : MODE.TACTICAL;
          // console.log(target);
          // this.store.dispatch(button.onClick(target));
          break;
        default:
          break;
      }
    }
  }

  render() {
    this.buttons = this.buttons.map((button, index) => {
      const destX = this.size * index;
      const destY = this.canvas.height - this.size;
      const [destWidth, destHeight] = Array(2).fill(this.size);
      drawByName(this.ctx, this.iconsXl, button.name, destX, destY);
      return Object.assign({}, button, {
        destX, destY, destWidth, destHeight,
      });
    });
  }
}
