import Story from '../components/Story';

export default class StoryView {
  constructor (store, canvas, ctx) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.story = new Story(this.store, this.canvas, this.ctx);
  }

  update(delta) {
    this.story.update(delta);
  }

  render() {
    this.ctx.fillStyle = 'black';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.story.render();
  }
}
