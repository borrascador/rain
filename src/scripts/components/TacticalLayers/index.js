import Connect from '../../Connect';
import GroundLayer from './GroundLayer';
import EntityLayer from './EntityLayer';
import HighlightLayer from './HighlightLayer';

export default class TacticalLayers {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.connect = new Connect(this.store);

    this.groundLayer = new GroundLayer(this.store, this.canvas, this.ctx, this.loader);
    this.entityLayer = new EntityLayer(this.store, this.canvas, this.ctx, this.loader);
    this.highlightLayer = new HighlightLayer(this.store, this.canvas, this.ctx, this.loader);
  }

  update(step) {
    const { graphTiles } = this.connect;
    if (graphTiles.length === 0) {
      this.groundLayer.init();
      this.entityLayer.init();
    }
    this.highlightLayer.update(step);
  }

  render() {
    this.groundLayer.render();
    this.entityLayer.render();
    this.highlightLayer.render();
  }
}
