import Story from '../components/Story';

export default class StoryView {
  constructor (store, canvas, ctx, atlas) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.story = new Story(this.store, this.canvas, this.ctx);
  }

  update(delta) {
    this.story.update(delta);
  }

  render() {
    this.story.render();
  }
}
