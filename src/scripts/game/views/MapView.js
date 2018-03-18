import Connect from '../../store/reducers/Connect';
import Camera from '../components/Camera';
import Menu from '../components/Menu';
import {clicked} from '../../store/actions/actions';

export default class MapView {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new Connect(this.store);
    this.camera = new Camera(this.store, this.canvas, this.ctx);
    this.menu = new Menu(this.store, this.canvas, this.ctx);
  }

  update(delta) {
    const {xClick, yClick} = this.connect.click;
    xClick && yClick && this.store.dispatch(clicked());
    this.camera.update(delta, xClick, yClick);
    this.menu.update(delta, xClick, yClick);
  }

  render() {
    this.camera.render();
    this.menu.render();
  }
}
