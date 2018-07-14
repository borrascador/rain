import Connect from '../../store/reducers/Connect';
import { logout } from '../../store/actions/requests';
import { zoomIn, zoomOut } from '../../store/actions/actions';
import { screenToTextButton } from './utils';
import { drawByName } from '../utils/draw';

export default class Tabs {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);

    this.scale = 4;
    this.size = 192;

    this.tabs = [
      { text: 'info' },
      { text: 'food' },
      { text: 'users' },
    ];

    this.openTab = this.tabs[0].text;
  }

  update(delta, x, y) {
    const clickedButton = x && y && screenToTextButton(x, y, this.tabs);
    // clickedButton && this.store.dispatch(clickedButton.onClick());
    if (clickedButton) this.openTab = clickedButton.text;
  }

  renderTabs() {
    let x = 0;
    let y = this.canvas.height - this.size;
    const fontSize = 32
    const lineHeight = 44;
    this.ctx.font = fontSize + 'px MECC'
    this.ctx.strokeStyle = '#FFF';
    this.ctx.lineWidth = 2;

    this.tabs = this.tabs.map(tab => {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      const lineWidth = this.ctx.measureText(tab.text).width;
      this.ctx.lineTo(x + lineHeight, y - lineHeight);
      this.ctx.lineTo(x + lineHeight + lineWidth, y - lineHeight);
      this.ctx.lineTo(x + lineHeight * 2 + lineWidth, y);
      this.ctx.fillStyle = '#000';
      this.ctx.fill();
      this.ctx.fillStyle = '#FFF';
      const xPos = x + lineHeight;
      const yPos = y - fontSize / 4;
      this.ctx.fillText(tab.text, xPos, yPos);
      x = x + lineHeight * 2 + lineWidth;
      this.openTab !== tab.text && this.ctx.closePath();
      this.ctx.stroke();
      return Object.assign({}, tab, {
        xPos: xPos,
        yPos: yPos,
        width: lineWidth,
        height: lineHeight
      })
    });

    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(this.canvas.width, y);
    this.ctx.stroke();
  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, this.canvas.height - this.size, this.canvas.width, this.size);

    this.renderTabs();
  }
}
