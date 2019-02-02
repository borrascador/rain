import { MODE } from '../utils/constants';
import Connect from '../Connect';
// import Camera from '../components/Camera';
import BottomLayer from '../components/BottomLayer';
import MiddleLayer from '../components/MiddleLayer';
import TopLayer from '../components/TopLayer';
// import Overlay from '../components/Overlay';
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

    this.bottom = new BottomLayer(this.store, this.canvas, this.ctx, this.loader);
    this.middle = new MiddleLayer(this.store, this.canvas, this.ctx, loader);
    this.top = new TopLayer(this.store, this.canvas, this.ctx, this.loader);

    // this.camera = new Camera(this.store, this.canvas, this.ctx, this.loader);
    // this.overlay = new Overlay(this.store, this.canvas, this.ctx, this.loader);
    this.story = new Story(this.store, this.canvas, this.ctx, this.loader);
    this.partyWindow = new PartyWindow(this.store, this.canvas, this.ctx, this.loader);
  }

  setDim(dim) {
    this.dim = dim;
  }

  update(step) {
    if (!this.dim) {
      if (this.connect.stories.length > 0) {
        this.story.update();
      } else if (this.connect.mode === MODE.PARTY) {
        this.partyWindow.update();
      } else {
        // this.overlay.update();
        // if (this.connect.currentTile) this.camera.update();
        const { graphTiles } = this.connect;
        if (graphTiles.length === 0) {
          this.bottom.init();
          this.middle.init();
        }
        this.top.update(step);
      }
    }
  }

  render(delta) {
    this.ctx.fillStyle = FOREST_BLACK;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    if (this.connect.currentTile) this.bottom.render();
    if (this.connect.currentTile) this.middle.render();
    if (this.connect.currentTile) this.top.render();
    // if (this.connect.currentTile) this.camera.render(delta);
    // this.overlay.render(delta);
    this.story.render(delta);
    if (this.connect.mode === MODE.PARTY) this.partyWindow.render(delta);

    if (this.dim) {
      this.ctx.fillStyle = MEDIUM_OPAQUE;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
