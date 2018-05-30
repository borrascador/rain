import Connect from '../../store/reducers/Connect';
import Camera from '../components/Camera';
import Overlay from '../components/Overlay';
import {clicked} from '../../store/actions/actions';

export default class MapView {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);
    this.camera = new Camera(this.store, this.canvas, this.ctx);
    this.overlay = new Overlay(this.store, this.canvas, this.ctx);
  }

  update(delta) {
    const {xClick, yClick} = this.connect.click;
    xClick && yClick && this.store.dispatch(clicked());
    this.camera.update(delta, xClick, yClick);
    this.overlay.update(delta, xClick, yClick);
  }

  render() {
    this.camera.render();
    this.overlay.render();
  }
}
