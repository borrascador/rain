import Connect from '../../store/Connect';
import { drawById, drawByName, mainText } from '../utils/draw';
import { screenToImageButton, getItemById } from './utils';
import { setPartyTab, changeMode } from '../../store/actions/actions';
import { MODE } from '../constants';
import { DARK_RED, MEDIUM_RED, HOVER_GREEN, PALE_GREEN, SOLID_WHITE } from '../colors';

let NAME = 'NAME';
let HEALTH = 'HEALTH';
let JEITO = 'JEITO';
let MODIFIERS = 'MODIFIERS';

export default class PartyWindow {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new Connect(this.store);

    this.iconsXl = loader.getImage('icons-xl');
    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;

    this.scale = 2;
    this.sizeXl = this.iconsXl.tileset.tilewidth * this.scale;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.sizeXl / 4;

    this.unitWidth = 5;
    this.unitHeight = 3;
    this.width = this.unitWidth * (this.sizeXl + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.sizeXl + this.gutter) + this.gutter;
  }

  update(x, y) {
    if (x && y) {
      const xMin = (this.canvas.width - this.width) / 2;
      const xMax = xMin + this.width;
      const yMin = (this.canvas.height - this.height) / 2;
      const yMax = yMin + this.height;
      const button = screenToImageButton(x, y, this.party)
      if (x > xMin && x < xMax && y > yMin && y < yMax) {
        console.log('hit');
      } else if (button) {
        this.store.dispatch(setPartyTab(button.id));
      } else {
        this.store.dispatch(changeMode(MODE.MAP));
      }
    }
  }

  renderTab(button, color, x, y, xPos, yPos) {
    this.ctx.beginPath();
    this.ctx.moveTo(x, y);
    this.ctx.lineTo(x + this.sizeXl * 0.25, y - this.sizeXl);
    this.ctx.lineTo(x + this.sizeXl * 1.25, y - this.sizeXl);
    this.ctx.lineTo(x + this.sizeXl * 1.5, y);
    this.ctx.fillStyle = color;
    this.ctx.fill();
    drawById(this.ctx, this.iconsXl, button.icon, this.scale, xPos, yPos);
  }

  renderTabs() {
    let x = (this.canvas.width - this.width) / 2;
    let y = (this.canvas.height - this.height) / 2;
    let renderLast;
    const activeTab = this.connect.partyTab;
    this.party = this.connect.party.map(button => {
      const xPos = x + this.sizeXl * 0.25;
      const yPos = y - this.sizeXl;
      if (button.id === activeTab) {
        renderLast = this.renderTab.bind(this, button, MEDIUM_RED, x, y, xPos, yPos);
      } else {
        this.renderTab(button, DARK_RED, x, y, xPos, yPos);
      }
      x = x + this.sizeXl * 1.25;
      return Object.assign({}, button, {
        xPos: xPos,
        yPos: yPos,
        width: this.sizeXl,
        height: this.sizeXl
      });
    });
    renderLast();
  }

  renderWindow() {
    let x = (this.canvas.width - this.width) / 2;
    let y = (this.canvas.height - this.height) / 2;

    this.ctx.fillStyle = MEDIUM_RED;
    this.ctx.fillRect(x, y, this.width, this.height);
  }

  renderHover() {
    const { xMouse, yMouse } = this.connect.mouse;
    if (xMouse && yMouse) {
      const button = screenToImageButton(xMouse, yMouse, this.party);
      if (button && button.id !== this.connect.partyTab) {
        const text = button.name;
        const textWidth = this.ctx.measureText(text).width;
        const padding = 8;

        this.ctx.fillStyle = HOVER_GREEN;
        this.ctx.fillRect(
          button.xPos + button.width / 2 - textWidth / 2 - padding,
          button.yPos - this.sizeXl / 2 - this.scale - padding,
          textWidth + padding * 2,
          this.fontSize + padding * 2
        );
        const y = button.yPos - this.sizeXl / 2 - this.scale + this.fontSize + padding;
        this.ctx.beginPath();
        this.ctx.moveTo(button.xPos + 1/3 * button.width, y);
        this.ctx.lineTo(button.xPos + 2/3 * button.width, y);
        this.ctx.lineTo(button.xPos + 1/2 * button.width, y + padding);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.fillStyle = SOLID_WHITE;
        this.ctx.fillText(
          text,
          button.xPos + button.width / 2 - textWidth / 2,
          button.yPos - this.sizeXl / 2 - this.scale + this.fontSize
        );
      }
    }
  }

  renderInfo() {
    const member = getItemById(this.connect.party, this.connect.partyTab);
    this.ctx.font = this.fontSize + 'px MECC';
    this.ctx.fillStyle = PALE_GREEN;
    let xPos = (this.canvas.width - this.width) / 2 + this.fontSize;
    let yPos = (this.canvas.height - this.height) / 2 + this.fontSize * 2;
    let lineWidth = this.ctx.measureText(HEALTH).width;

    this.ctx.fillText(NAME, xPos, yPos)
    this.ctx.fillText(member.name, xPos + lineWidth + 8, yPos);
    
    yPos += this.fontSize * 2.5;
    this.ctx.fillText(HEALTH, xPos, yPos);
    [...Array(member.health)].map((_, i) => {
      drawByName(
        this.ctx, this.icons, 'heart', this.scale,
        xPos + lineWidth + 8 + i * (this.sizeXl / 2 + 8),
        yPos - this.fontSize * 1.5
      );
    });

    yPos += this.fontSize * 2.5;
    this.ctx.fillText(JEITO, xPos, yPos);
    [...Array(member.jeito)].map((_, i) => {
      drawByName(
        this.ctx, this.icons, 'bolt', this.scale,
        xPos + lineWidth + 8 + i * (this.sizeXl / 2 + 8),
        yPos - this.fontSize * 1.5
      );
    });

    yPos += this.fontSize * 2.5;
    this.ctx.fillText(MODIFIERS, xPos, yPos);
  }

  render(delta) {
    this.renderWindow();
    this.renderTabs();
    this.renderHover();
    this.renderInfo();
  }
}
