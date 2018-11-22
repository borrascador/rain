import { MODE } from '../utils/constants';
import Connect from '../Connect';
import Camera from '../components/Camera';
import Overlay from '../components/Overlay';
import Story from '../components/Story';
import PartyWindow from '../components/PartyWindow';
import { FOREST_BLACK, MEDIUM_OPAQUE } from '../utils/colors';

export default class GameView {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.setDim = this.setDim.bind(this);
    this.connect = new Connect(this.store);

    this.camera = new Camera(this.store, this.canvas, this.ctx, this.loader);
    this.overlay = new Overlay(this.store, this.canvas, this.ctx, this.loader);
    this.story = new Story(this.store, this.canvas, this.ctx, this.loader);
    this.partyWindow = new PartyWindow(this.store, this.canvas, this.ctx, this.loader);
  }

  setDim(dim) {
    this.dim = dim;
  }

  update(keys, left, right) {
    if (!this.dim) {
      if (this.connect.stories.length > 0) {
        this.story.update(keys, left.x, left.y);
      } else if (this.connect.mode === MODE.PARTY) {
        this.partyWindow.update(left.x, left.y);
      } else {
        if (this.connect.currentTile) this.camera.update(left.x, left.y);
        this.overlay.update(left, right);
      }
    }
  }

  render(delta) {
    this.ctx.fillStyle = FOREST_BLACK;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.connect.currentTile) this.camera.render(delta);
    this.overlay.render(delta);
    this.story.render(delta);
    switch (this.connect.mode) {
      case MODE.PARTY:
        this.partyWindow.render(delta);
        break;
      default:
        break;
    }

    if (this.dim) {
      this.ctx.fillStyle = MEDIUM_OPAQUE;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
