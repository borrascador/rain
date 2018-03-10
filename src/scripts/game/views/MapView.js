import Camera from '../components/Camera';
import Menu from '../components/Menu';

export default class MapView {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.camera = new Camera(this.store, this.canvas, this.ctx);
    // this.menu = new Menu(this.store, this.canvas, this.ctx);
  }

  update(delta) {
    this.camera.update();
    // this.menu.update();
  }

  render() {
    this.camera.render();
    // this.menu.render();
  }
}
