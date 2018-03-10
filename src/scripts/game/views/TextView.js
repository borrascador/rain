import Text from '../components/Text';

export default class TextView {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    // this.eventID = null;
    // this.selectedID = null;

    this.text = new Text(this.store, this.canvas, this.ctx);
  }

  update(delta) {
    this.text.update(delta);
  }

  render() {
    this.text.render();
  }
}
