import { send } from '@giantmachines/redux-websocket';
import Connect from '../../Connect';
import Animation from '../../utils/Animation';
import { drawById } from '../../utils/draw';
import { clickedLeft, eventRequest } from '../../actions/actions';
import { screenToImageButton } from '../utils';
import { EVENTS } from '../../actions/types';

export default class Pace {
  constructor(store, canvas, ctx, loader) {
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

    this.buttons = [];
  }

  update(step) {
    const { x, y } = this.connect.clickLeft;
    const button = x && y && screenToImageButton(x, y, this.buttons);
    if (button) {
      this.store.dispatch(clickedLeft());
      this.store.dispatch(send(eventRequest(EVENTS.PACE, { id: button.id })));
    }

    switch (this.connect.pace) {
      case 0:
        this.animateStop.tick(step);
        break;
      case 1:
        this.animateWalk.tick(step);
        break;
      case 2:
        this.animateRun.tick(step);
        break;
      default:
        break;
    }
  }

  getXPos(relativeIndex) {
    let xPos = this.canvas.width / 2;
    if (relativeIndex > 0) {
      xPos += -this.iconSize / 2 + relativeIndex * (this.iconSize + this.gutter);
    } else {
      xPos += this.iconSize / 2 + relativeIndex * this.gutter + (relativeIndex - 1) * this.iconSize;
    }
    return xPos;
  }

  renderIcons() {
    const { pace } = this.connect;
    const yPos = (this.walkSize - this.iconSize) / 2;
    const [width, height] = Array(2).fill(this.iconSize);

    switch (pace) {
      case 0:
        this.buttons = [
          {
            id: 1, xPos: this.getXPos(1), yPos, width, height
          },
          {
            id: 2, xPos: this.getXPos(2), yPos, width, height
          }
        ];
        break;

      case 1:
        this.buttons = [
          {
            id: 0, xPos: this.getXPos(-1), yPos, width, height
          },
          {
            id: 2, xPos: this.getXPos(1), yPos, width, height
          }
        ];
        break;

      case 2:
        this.buttons = [
          {
            id: 0, xPos: this.getXPos(-2), yPos, width, height
          },
          {
            id: 1, xPos: this.getXPos(-1), yPos, width, height
          }
        ];
        break;

      default:
        break;
    }

    this.buttons.forEach(button => drawById(
      this.ctx, this.icons, 20 + button.id, this.scale, button.xPos, yPos
    ));
  }

  renderWalk() {
    let offset;

    switch (this.connect.pace) {
      case 0:
        offset = this.animateStop.getValue() + 6;
        break;
      case 1:
        offset = this.animateWalk.getValue();
        break;
      case 2:
        offset = this.animateRun.getValue();
        break;
      default:
        break;
    }

    const x = (this.canvas.width - this.walkSize) / 2;
    const y = 0;
    drawById(this.ctx, this.walk, offset, this.scale, x, y);
  }

  render() {
    this.renderIcons();
    this.renderWalk();
  }
}
