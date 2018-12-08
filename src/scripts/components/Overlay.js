import Pace from './Pace';
import Food from './Food';
import Party from './Party';
import Inventory from './Inventory';
import ActionBar from './ActionBar';
import Habitat from './Habitat';
import Zoom from './Zoom';
import Items from './Items';
import { refreshSlots } from '../actions/actions';

export default class Overlay {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.pace = new Pace(this.store, this.canvas, this.ctx, this.loader);
    this.food = new Food(this.store, this.canvas, this.ctx, this.loader);
    this.party = new Party(this.store, this.canvas, this.ctx, this.loader);
    this.inventory = new Inventory(this.store, this.canvas, this.ctx, this.loader);
    this.actionBar = new ActionBar(this.store, this.canvas, this.ctx, this.loader);
    this.habitat = new Habitat(this.store, this.canvas, this.ctx, this.loader);
    this.zoom = new Zoom(this.store, this.canvas, this.ctx, this.loader);
    this.items = new Items(this.store, this.canvas, this.ctx, this.loader);
  }

  update() {
    this.items.update();
    this.zoom.update();
    // this.habitat.update();
    this.actionBar.update();
    this.inventory.update();
    this.party.update();
    this.food.update();
    this.pace.update();
  }

  render(delta) {
    this.pace.render(delta);
    const slots = [].concat(
      this.food.render(delta),
      this.party.render(delta),
      this.inventory.render(delta)
    );
    this.store.dispatch(refreshSlots(slots));
    this.actionBar.render(delta);
    this.habitat.render(delta);
    this.zoom.render(delta);
    this.items.render(delta);
  }
}
