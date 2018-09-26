import { MODE } from '../constants';
import Connect from '../../store/Connect';
import Camera from '../components/Camera';
import Overlay from '../components/Overlay';
import Story from '../components/Story';
import ActionBar from '../components/ActionBar';
import PartyWindow from '../components/PartyWindow';
import InventoryWindow from '../components/InventoryWindow';
import { clicked } from '../../store/actions/actions';
import { FOREST_BLACK, MEDIUM_OPAQUE } from '../colors';

export default class MapView {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.setDim = this.setDim.bind(this);
    this.connect = new Connect(this.store);

    this.camera = new Camera(this.store, this.canvas, this.ctx, this.loader);
    this.overlay = new Overlay(this.store, this.canvas, this.ctx, this.loader, this.setDim);
    this.story = new Story(this.store, this.canvas, this.ctx, this.setDim);
    this.actionBar = new ActionBar(this.store, this.canvas, this.ctx, this.loader);
    this.partyWindow = new PartyWindow(this.store, this.canvas, this.ctx, this.loader);
    this.inventoryWindow = new InventoryWindow(this.store, this.canvas, this.ctx, this.loader);
  }

  setDim(dim) {
    this.dim = dim;
  }

  update(keys, x, y) {
    x && y && this.store.dispatch(clicked());
    if (!this.dim) {
      if (this.connect.stories.length > 0) {
        this.story.update(keys, x, y);
      } else if (this.connect.mode === MODE.PARTY) {
        this.partyWindow.update(x, y);
      } else if (this.connect.mode === MODE.INVENTORY) {
        this.inventoryWindow.update(x, y);
      } else {
        this.camera.update(x, y);
        this.overlay.update(x, y);
        this.actionBar.update(x, y);
      }
    }
  }

  render(delta) {
    this.ctx.fillStyle = FOREST_BLACK;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.camera.render(delta);
    this.overlay.render(delta);
    this.actionBar.render(delta);
    this.story.render(delta);
    switch (this.connect.mode) {
      case MODE.PARTY:
        this.partyWindow.render(delta);
        break;
      case MODE.INVENTORY:
        this.inventoryWindow.render(delta);
        break;
    }

    if (this.dim) {
      this.ctx.fillStyle = MEDIUM_OPAQUE;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
