import {MODE} from '../constants';
import {changeMode} from '../../store/actions/actions';
import Connect from '../../store/Connect';
import Zoom from './Zoom';
import Party from './Party';
import Vehicle from './Vehicle';
import Habitat from './Habitat';
import Inventory from './Inventory';

export default class Overlay {
  constructor (store, canvas, ctx, loader, setDim) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.zoom = new Zoom(this.store, this.canvas, this.ctx, this.loader);
    this.party = new Party(this.store, this.canvas, this.ctx, this.loader);
    this.vehicle = new Vehicle(this.store, this.canvas, this.ctx, this.loader);
    this.habitat = new Habitat(this.store, this.canvas, this.ctx, this.loader);
    this.inventory = new Inventory(this.store, this.canvas, this.ctx, this.loader, setDim);
  }

  update(x, y) {
    this.zoom.update(x, y);
    this.party.update(x, y);
    this.vehicle.update(x, y);
    this.habitat.update(x, y);
    this.inventory.update(x, y);
  }

  render(delta) {
    this.zoom.render(delta);
    this.party.render(delta);
    this.vehicle.render(delta);
    this.habitat.render(delta);
    this.inventory.render(delta);
  }
}
