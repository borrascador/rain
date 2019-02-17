import { MODE, MODAL } from '../utils/constants';
import Connect from '../Connect';
import Camera from '../components/Camera';
import TacticalLayers from '../components/TacticalLayers';
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

    this.tacticalLayers = new TacticalLayers(this.store, this.canvas, this.ctx, this.loader);

    this.camera = new Camera(this.store, this.canvas, this.ctx, this.loader);
    this.overlay = new Overlay(this.store, this.canvas, this.ctx, this.loader);
    this.story = new Story(this.store, this.canvas, this.ctx, this.loader);
    this.partyWindow = new PartyWindow(this.store, this.canvas, this.ctx, this.loader);
  }

  setDim(dim) {
    this.dim = dim;
  }

  update(step) {
    if (this.dim) return;

    const { stories, modal, mode } = this.connect;

    if (stories.length > 0) {
      this.story.update(step);
    } else if (modal === MODAL.PARTY) {
      this.partyWindow.update(step);
    } else if (this.connect.currentTile) {
      this.overlay.update(step); // COMBAK
      if (mode === MODE.TACTICAL) {
        this.tacticalLayers.update(step);
      } else {
        this.camera.update(step);
      }
    }
  }

  render() {
    this.ctx.fillStyle = FOREST_BLACK;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    const { currentTile, mode, modal } = this.connect;

    if (currentTile) {
      if (mode === MODE.TACTICAL) {
        this.tacticalLayers.render();
      } else {
        this.camera.render();
      }
    }
    this.overlay.render();
    if (modal === MODAL.PARTY) this.partyWindow.render();
    this.story.render();

    if (this.dim) {
      this.ctx.fillStyle = MEDIUM_OPAQUE;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
