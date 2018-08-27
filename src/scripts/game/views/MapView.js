import { MODE } from '../constants';
import Connect from '../../store/Connect';
import Camera from '../components/Camera';
import Overlay from '../components/Overlay';
import Story from '../components/Story';
import ActionBar from '../components/ActionBar';
import { clicked } from '../../store/actions/actions';

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
  }

  setDim(dim) {
    this.dim = dim;
  }

  update(delta, keys, x, y) {
    x && y && this.store.dispatch(clicked());
    if (!this.dim) {
      if (this.connect.mode === MODE.STORY) {
        this.story.update(delta, keys, x, y);
      } else {
        this.camera.update(delta, x, y);
        this.overlay.update(delta, x, y);
        this.actionBar.update(delta, x, y);
      }
    }
  }

  render() {
    this.ctx.fillStyle = 'rgb(0, 20, 0)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.camera.render();
    this.overlay.render();
    this.connect.mode === MODE.STORY && this.story.render(this.connect.story);
    this.actionBar.render();

    if (this.dim) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
