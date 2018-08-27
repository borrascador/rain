import {MODE} from '../constants';
import {changeMode} from '../../store/actions/actions';
import Connect from '../../store/Connect';
import Zoom from './Zoom';
import Party from './Party';
import Vehicle from './Vehicle';
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
    this.inventory = new Inventory(this.store, this.canvas, this.ctx, this.loader, setDim);
  }

  update(delta, x, y) {
    this.zoom.update(delta, x, y);
    this.party.update(delta, x, y);
    this.vehicle.update(delta, x, y);
    this.inventory.update(delta, x, y);
  }

  render() {
    this.zoom.render();
    this.party.render();
    this.vehicle.render();
    this.inventory.render();
  }
}
