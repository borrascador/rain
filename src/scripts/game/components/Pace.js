import Connect from '../../store/Connect';
import Animation from '../utils/Animation';
import { drawById } from '../utils/draw';

export default class Pace {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.walk = loader.getImage('walk');

    this.connect = new Connect(this.store);

    this.animateStop = new Animation(1, 1, 0.75);
    this.animateWalk = new Animation(5, 1, 0.25);
    this.animateRun = new Animation(5, 1, 0.1);

    this.scale = 4;
    this.gutter = 4;
    this.iconSize = this.icons.tileset.tilewidth * this.scale;
    this.walkSize = this.walk.tileset.tilewidth * this.scale;
  }

  update(x, y) {
    // this.updateClick(x, y);
  }

  getXPos(relativeIndex) {
    let xPos = this.canvas.width / 2;
    if (relativeIndex > 0) {
      xPos += -this.iconSize / 2 + relativeIndex * (this.iconSize + this.gutter);
    } else {
      xPos += this.iconSize / 2 + relativeIndex * this.gutter + (relativeIndex - 1) * this.iconSize;
    }
    return xPos
  }

  renderIcons() {
    const pace = this.connect.pace;
    const y = (this.walkSize - this.iconSize) / 2

    switch(this.connect.pace) {
      case 0:
        drawById(this.ctx, this.icons, 21, this.scale, this.getXPos(1), y)
        drawById(this.ctx, this.icons, 22, this.scale, this.getXPos(2), y)
        break;

      case 1:
        drawById(this.ctx, this.icons, 20, this.scale, this.getXPos(-1), y)
        drawById(this.ctx, this.icons, 22, this.scale, this.getXPos(1), y)
        break;

      case 2:
        drawById(this.ctx, this.icons, 20, this.scale, this.getXPos(-2), y)
        drawById(this.ctx, this.icons, 21, this.scale, this.getXPos(-1), y)
        break;

      default:
        break;
    }
  }

  renderWalk(delta) {
    let offset;

    switch(this.connect.pace) {
      case 0:
        this.animateStop.tick(delta);
        offset = this.animateStop.getValue() + 6;
        break;
      case 1:
        this.animateWalk.tick(delta);
        offset = this.animateWalk.getValue();
        break;
      case 2:
        this.animateRun.tick(delta);
        offset = this.animateRun.getValue();
        break;
      default:
        break;
    }

    const x = (this.canvas.width - this.walkSize) / 2;
    const y = 0;
    drawById(this.ctx, this.walk, offset, this.scale, x, y);
  }

  render(delta) {
    this.renderIcons();
    this.renderWalk(delta);
  }
}
