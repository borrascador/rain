import Food from './Food';
import Party from './Party';
import Inventory from './Inventory';
import ActionBar from '../components/ActionBar';
import Habitat from './Habitat';
import Zoom from './Zoom';
import Items from './Items';
import { refreshSlots } from '../../store/actions/actions';

export default class Overlay {
  constructor (store, canvas, ctx, loader, setDim) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.food = new Food(this.store, this.canvas, this.ctx, this.loader);
    this.party = new Party(this.store, this.canvas, this.ctx, this.loader);
    this.inventory = new Inventory(this.store, this.canvas, this.ctx, this.loader);
    this.actionBar = new ActionBar(this.store, this.canvas, this.ctx, this.loader);
    this.habitat = new Habitat(this.store, this.canvas, this.ctx, this.loader);
    this.zoom = new Zoom(this.store, this.canvas, this.ctx, this.loader);
    this.items = new Items(this.store, this.canvas, this.ctx, this.loader);
  }

  update(left, right) {
    this.food.update(left.x, left.y);
    this.party.update(left.x, left.y);
    this.inventory.update(left.x, left.y);
    this.actionBar.update(left.x, left.y);
    this.habitat.update(left.x, left.y);
    this.zoom.update(left.x, left.y);
    this.items.update(left, right);
  }

  render(delta) {
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
