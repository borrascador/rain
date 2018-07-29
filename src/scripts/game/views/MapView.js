import Connect from '../../store/reducers/Connect';
import Camera from '../components/Camera';
import Overlay from '../components/Overlay';
import {clicked} from '../../store/actions/actions';

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
  }

  setDim(dim) {
    this.dim = dim;
  }

  update(delta) {
    const {xClick, yClick} = this.connect.click;
    xClick && yClick && this.store.dispatch(clicked());
    if (!this.dim) {
      this.camera.update(delta, xClick, yClick);
      this.overlay.update(delta, xClick, yClick);
    }
  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.camera.render();
    this.overlay.render();

    if (this.dim) {
      this.ctx.fillStyle = "rgba(0, 0, 0, 0.6)";
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}
