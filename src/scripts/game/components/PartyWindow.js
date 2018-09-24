import Connect from '../../store/Connect';
import { drawById, drawByName, mainText, drawHover } from '../utils/draw';
import { screenToImageButton, getItemById } from './utils';
import { setPartyTab, changeMode } from '../../store/actions/actions';
import { MODE } from '../constants';
import { DARK_RED, MEDIUM_RED, PALE_GREEN } from '../colors';

const NAME = 'NAME';
const HEALTH = 'HEALTH';
const JEITO = 'JEITO';
const SKILLS = 'SKILLS';
const MODIFIERS = 'MODIFIERS';

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
    this.lineHeight = this.fontSize * 2.5
    this.iconOffset = this.fontSize * 1.5

    this.scale = 2;
    this.sizeXl = this.iconsXl.tileset.tilewidth * this.scale;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.sizeXl / 4;

    console.log(this.sizeXl, this.size, this.gutter);

    this.unitWidth = 5;
    this.unitHeight = 7;
    this.width = this.unitWidth * (this.sizeXl + this.gutter) + this.gutter;
    this.height = this.unitHeight * this.lineHeight + this.gutter;
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
    this.ctx.lineTo(x + this.gutter, y - this.sizeXl);
    this.ctx.lineTo(x + this.sizeXl + this.gutter, y - this.sizeXl);
    this.ctx.lineTo(x + this.sizeXl + this.gutter * 2, y);
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
      const xPos = x + this.gutter;
      const yPos = y - this.sizeXl;
      if (button.id === activeTab) {
        renderLast = this.renderTab.bind(this, button, MEDIUM_RED, x, y, xPos, yPos);
      } else {
        this.renderTab(button, DARK_RED, x, y, xPos, yPos);
      }
      x = x + this.sizeXl + this.gutter;
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

  renderInfo() {
    const member = getItemById(this.connect.party, this.connect.partyTab);
    this.ctx.font = this.fontSize + 'px MECC';
    this.ctx.fillStyle = PALE_GREEN;
    let xPos = (this.canvas.width - this.width) / 2 + this.fontSize;
    let yPos = (this.canvas.height - this.height) / 2 + this.fontSize * 2;
    let lineWidth = this.ctx.measureText(HEALTH).width;

    this.ctx.fillText(NAME, xPos, yPos)
    this.ctx.fillText(member.name, xPos + lineWidth + 8, yPos);

    yPos += this.lineHeight;
    this.ctx.fillText(HEALTH, xPos, yPos);
    [...Array(member.jeito)].map((_, i) => {
      drawByName(
        this.ctx, this.icons, 'heart', this.scale,
        xPos + lineWidth + 8 + i * (this.size + 8),
        yPos - this.iconOffset
      );
    });

    yPos += this.lineHeight;
    this.ctx.fillText(JEITO, xPos, yPos);
    [...Array(member.jeito)].map((_, i) => {
      drawByName(
        this.ctx, this.icons, 'bolt', this.scale,
        xPos + lineWidth + 8 + i * (this.size + 8),
        yPos - this.iconOffset
      );
    });

    yPos += this.lineHeight;
    this.ctx.fillText(SKILLS, xPos, yPos);

    yPos += this.lineHeight;
    if (Array.isArray(member.skills)) {
      this.skills = member.skills.map((skill, i) => {
        drawByName(
          this.ctx, this.icons, 'question', this.scale,
          xPos + i * (this.size + 8),
          yPos - this.iconOffset
        );
        return Object.assign({}, skill, {
          xPos: xPos + i * (this.size + 8),
          yPos: yPos - this.iconOffset,
          width: this.size,
          height: this.size
        });
      });
    } else {
      this.skills = [];
    }

    yPos += this.lineHeight;
    this.ctx.fillText(MODIFIERS, xPos, yPos);

    yPos += this.lineHeight;
    if (Array.isArray(member.modifiers)) {
      this.modifiers = member.modifiers.map((modifier, i) => {
        drawByName(
          this.ctx, this.icons, 'question', this.scale,
          xPos + i * (this.size + 8),
          yPos - this.iconOffset
        );
        return Object.assign({}, modifier, {
          xPos: xPos + i * (this.size + 8),
          yPos: yPos - this.iconOffset,
          width: this.size,
          height: this.size
        });
      });
    } else {
      this.modifiers = [];
    }
  }

  renderHover() {
    const { xMouse, yMouse } = this.connect.mouse;
    if (xMouse && yMouse) {
      const buttonList = this.party.concat(this.skills, this.modifiers);
      const button = screenToImageButton(xMouse, yMouse, buttonList);
      if (button && button.id !== this.connect.partyTab) {
        drawHover(this.ctx, this.fontSize, button);
      }
    }
  }

  render(delta) {
    this.renderWindow();
    this.renderTabs();
    this.renderInfo();
    this.renderHover();
  }
}
