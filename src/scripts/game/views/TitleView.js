import { makeTextButton } from '../utils/draw';
import { showRegister } from '../dialogs/register';
import { showLogin } from '../dialogs/login';
import { addButtonCoords, screenToTextId } from '../components/utils';
import Connect from '../../store/reducers/Connect';
import {clicked} from '../../store/actions/actions';

export default class TitleView {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);

    this.selected = null;

    this.buttons = [
      { id: 1, text: 'LOGIN', onClick: showLogin },
      { id: 2, text: 'REGISTER', onClick: showRegister }
    ];
  }

  update(delta) {
    const {xClick, yClick} = this.connect.click;
    if (xClick && yClick) {
      this.store.dispatch(clicked());
      const clickId = screenToTextId(xClick, yClick, this.buttons);
      if (this.selectedId && this.selectedId === clickId) {
        this.buttons.find((button) =>
          this.selectedId === button.id
        ).onClick(this.store, this.undim.bind(this));
        this.selectedId = null;
        this.dim = true;
      } else {
        this.selectedId = clickId;
      }
    }
  }

  undim() {
    this.dim = false;
  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    let fontSize = 60;
    let lineSize = fontSize + 4;
    this.ctx.font = fontSize + 'px MECC';
    this.ctx.fillStyle = '#FFF';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'alphabetic';

    let linePos = 2;
    this.ctx.fillText('RAINFOREST', this.canvas.width / 2, linePos++ * lineSize);
    this.ctx.fillText('TRAIL', this.canvas.width / 2, linePos++ * lineSize);

    fontSize = 28;
    lineSize = fontSize + 16;
    this.ctx.font = fontSize + 'px MECC';

    linePos = 7;
    this.buttons.map((button, idx) => {
      this.ctx.fillStyle = (this.selectedId === button.id) ? '#FF0' : '#FFF';
      this.ctx.fillText(button.text, this.canvas.width / 2, linePos * lineSize);
      addButtonCoords(button, {
        xPos: this.canvas.width / 2 - this.ctx.measureText(button.text).width / 2,
        yPos: linePos * lineSize,
        width: this.ctx.measureText(button.text).width,
        height: fontSize
      });
      linePos++;
    });

    if (this.dim) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
