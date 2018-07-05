import Menu from '../components/Menu';

export default class MenuView {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.menu = new Menu(this.store, this.canvas, this.ctx);
  }

  update(delta) {
    this.menu.update(delta);
  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.menu.render();
  }
}
