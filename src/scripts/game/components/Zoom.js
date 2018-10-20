import Connect from '../../store/Connect';
import { logout, sendEvent } from '../../store/actions/requests';
import { zoomIn, zoomOut } from '../../store/actions/actions';
import { screenToImageButton } from './utils';
import { drawByName } from '../utils/draw';
import { SOLID_WHITE, BRIGHT_YELLOW } from '../colors';

export default class Zoom {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new Connect(this.store);

    console.log(this.ctx.measureText("PACE"));

    this.scale = 2;
    this.size = this.iconsXl.tileset.tilewidth * this.scale;

    this.fontSize = 32;
    this.ctx.font = this.fontSize + 'px MECC';

    this.buttons = [
      { name: 'PACE', onClick: () => sendEvent('pace', 0), id: 0 },
      { name: 'PACE', onClick: () => sendEvent('pace', 1), id: 1 },
      { name: 'PACE', onClick: () => sendEvent('pace', 2), id: 2 },
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
    const rations = this.connect.rations;
    this.ctx.fillStyle = SOLID_WHITE;
    this.ctx.font = this.fontSize + 'px MECC';
    const textWidth = this.ctx.measureText("PACE").width;
    this.ctx.fillText(
      "PACE",
      (this.size * 3 - textWidth) / 2,
      this.canvas.height - this.size * 2
    );
    this.buttons = this.buttons.map((button, index) => {
      const xPos = this.size * (index % 3);
      const yPos = this.canvas.height - this.size * 2 + Math.floor(index / 3) * this.size;
      const [width, height] = Array(2).fill(this.size);
      if (typeof button.id === "number") {
        if (button.id === pace) {
          this.ctx.fillStyle = BRIGHT_YELLOW;
        } else {
          this.ctx.fillStyle = SOLID_WHITE;
        }
        const textWidth = this.ctx.measureText(button.id.toString()).width;
        this.ctx.fillText(
          button.id,
          xPos + (this.size - textWidth) / 2,
          yPos + (this.size + this.fontSize) / 2
        );
      } else {
        drawByName(this.ctx, this.iconsXl, button.name, this.scale, xPos, yPos);
      }

      return Object.assign({}, button, { xPos, yPos, width, height });
    });
  }
}
