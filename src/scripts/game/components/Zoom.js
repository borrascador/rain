import Connect from '../../store/Connect';
import { logout, sendEvent } from '../../store/actions/requests';
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

    this.fontSize = 32;
    this.ctx.font = this.fontSize + 'px MECC';

    this.buttons = [
      { name: 'settings', onClick: logout },
      { name: 'zoom-out', onClick: zoomOut },
      { name: 'zoom-in', onClick: zoomIn },
      { name: 'PACE', onClick: () => sendEvent('pace', 2), id: 2 },
      { name: 'PACE', onClick: () => sendEvent('pace', 1), id: 1 },
      { name: 'PACE', onClick: () => sendEvent('pace', 0), id: 0 },
      { name: 'RATIONS', onClick: () => sendEvent('rations', 2), id: 2 },
      { name: 'RATIONS', onClick: () => sendEvent('rations', 1), id: 1 },
      { name: 'RATIONS', onClick: () => sendEvent('rations', 0), id: 0 }
    ];
  }

  update(delta, x, y) {
    const clickedButton = x && y && screenToImageButton(x, y, this.buttons);
    clickedButton && this.store.dispatch(clickedButton.onClick());
  }

  render() {
    const pace = this.connect.pace;
    const rations = this.connect.rations;
    this.buttons = this.buttons.map((button, index) => {
      const x = this.canvas.width - (this.size * (index % 3 + 1));
      const y = Math.floor(index / 3) * this.size;

      if (typeof button.id === "number") {
        if ((button.name === "PACE" && button.id === pace) || (button.name === "RATIONS" && button.id === rations)) {
          this.ctx.fillStyle = "#FF0";
        } else {
          this.ctx.fillStyle = "#FFF";
        }
        this.ctx.font = this.fontSize + 'px MECC';
        const textWidth = this.ctx.measureText(button.id.toString()).width;
        this.ctx.fillText(button.id, x + (this.size - textWidth) / 2, y + (this.size + this.fontSize) / 2);
        if (button.id === 0) {
          const labelWidth = this.ctx.measureText(button.name).width;
          this.ctx.fillStyle = "#FFF";
          this.ctx.fillText(button.name, x - labelWidth - this.size / 4, y + (this.size + this.fontSize) / 2);
        }
      } else {
        drawByName(this.ctx, this.iconsXl, button.name, this.scale, x, y);
      }

      return Object.assign({}, button, {
        xPos: x,
        yPos: y,
        width: this.size,
        height: this.size
      });
    });
  }
}
