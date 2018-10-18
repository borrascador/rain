import { MODE } from '../constants';
import { changeMode, refreshSlots } from '../../store/actions/actions';
import Connect from '../../store/Connect';
import Food from './Food';
import Party from './Party';
import Vehicle from './Vehicle';
import Habitat from './Habitat';
import Inventory from './Inventory';
import Items from './Items';

export default class Overlay {
  constructor (store, canvas, ctx, loader, setDim) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.food = new Food(this.store, this.canvas, this.ctx, this.loader);
    this.party = new Party(this.store, this.canvas, this.ctx, this.loader);
    this.vehicle = new Vehicle(this.store, this.canvas, this.ctx, this.loader);
    this.habitat = new Habitat(this.store, this.canvas, this.ctx, this.loader);
    this.inventory = new Inventory(this.store, this.canvas, this.ctx, this.loader, setDim);
    this.items = new Items(this.store, this.canvas, this.ctx, this.loader);
  }

  update(x, y) {
    this.food.update(x, y);
    this.party.update(x, y);
    this.vehicle.update(x, y);
    this.habitat.update(x, y);
    this.inventory.update(x, y);
    this.items.update(x, y);
  }

  render(delta) {
    let slots = [];
    slots = slots.concat(this.food.render(delta));
    slots = slots.concat(this.party.render(delta));
    slots = slots.concat(this.inventory.render(delta));
    this.store.dispatch(refreshSlots(slots));
    this.items.render(delta);

    this.vehicle.render(delta);
    this.habitat.render(delta);
  }
}
