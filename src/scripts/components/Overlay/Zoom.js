import { send } from '@giantmachines/redux-websocket';
import Connect from '../../Connect';
import {
  clickedLeft, zoomIn, zoomOut, logoutRequest, needRender,
} from '../../actions/actions';
import { screenToImageButton } from '../utils';
import { drawByName } from '../../utils/draw';

export default class Zoom {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    this.scale = 2;
    this.size = this.iconsXl.tileset.tilewidth * this.scale;

    this.buttons = [
      { name: 'settings' },
      { name: 'glass' },
      { name: 'zoom-out' },
      { name: 'zoom-in' },
    ];
  }

  update() {
    const { x, y } = this.connect.clickLeft;
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) {
      this.store.dispatch(clickedLeft());
      switch(button.name) {
        case 'settings':
          this.store.dispatch(send(logoutRequest()));
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
      const xPos = this.size * index;
      const yPos = this.canvas.height - this.size;
      const [width, height] = Array(2).fill(this.size);
      drawByName(this.ctx, this.iconsXl, button.name, this.scale, xPos, yPos);
      return Object.assign({}, button, {
        xPos, yPos, width, height
      });
    });
  }
}
