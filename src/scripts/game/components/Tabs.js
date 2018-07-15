import Connect from '../../store/reducers/Connect';
import { screenToTextButton } from './utils';
import Tab from './Tab';

export default class Tabs {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.connect = new Connect(this.store);

    this.scale = 4;
    this.height = 192;

    this.newTile();
  }

  update(delta, x, y) {
    const clickedTab = x && y && screenToTextButton(x, y, this.tabs);
    // clickedButton && this.store.dispatch(clickedButton.onClick());
    clickedTab && this.switchTab(clickedTab);

    this.openTab.content.update(delta, x, y);
  }

  newTile() {
    this.tabs = this.connect.tabs.map(tab => ({
      text: tab.text,
      content: new Tab(
        this.store, this.canvas, this.ctx, this.loader, tab.buttons, this.height
      )
    }));
    this.openTab = this.tabs[0];
  }

  switchTab(tab) {
    this.openTab = tab;
  }

  renderTabs() {
    let x = 0;
    let y = this.canvas.height - this.height;
    const fontSize = 32
    const lineHeight = 44;
    this.ctx.font = fontSize + 'px MECC'
    this.ctx.strokeStyle = '#FFF';
    this.ctx.lineWidth = 2;

    this.tabs = this.tabs.map(tab => {
      const lineWidth = this.ctx.measureText(tab.text).width;
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
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
      this.openTab.text !== tab.text && this.ctx.closePath();
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
    this.ctx.fillRect(0, this.canvas.height - this.height, this.canvas.width, this.height);

    this.renderTabs();
    this.openTab.content.render();
  }
}
