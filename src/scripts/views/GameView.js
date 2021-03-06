import Connect from '../Connect';
import Tactical from '../components/Tactical';
import Overlay from '../components/Overlay';
import Story from '../components/Story';
import PartyWindow from '../components/PartyWindow';
import { MODAL } from '../utils/constants';
import { MEDIUM_OPAQUE } from '../utils/colors';

export default class GameView {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.setDim = this.setDim.bind(this);
    this.connect = new Connect(this.store);

    this.tactical = new Tactical(this.store, this.canvas, this.ctx, this.loader);
    this.overlay = new Overlay(this.store, this.canvas, this.ctx, this.loader);
    this.story = new Story(this.store, this.canvas, this.ctx, this.loader);
    this.partyWindow = new PartyWindow(this.store, this.canvas, this.ctx, this.loader);
  }

  setDim(dim) {
    this.dim = dim; // todo replace with redux state?
  }

  update(step) {
    if (this.dim) return;

    const { stories, modal } = this.connect;

    if (stories.length > 0) {
      this.story.update(step);
    } else if (modal === MODAL.PARTY) {
      this.partyWindow.update(step);
    } else {
      this.overlay.update(step);
      this.tactical.update(step);
    }
  }

  render() {
    const { modal } = this.connect;

    this.tactical.render();
    this.overlay.render();
    if (modal === MODAL.PARTY) this.partyWindow.render();
    this.story.render();

    if (this.dim) {
      this.ctx.fillStyle = MEDIUM_OPAQUE;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
