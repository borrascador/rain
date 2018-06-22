import {MODE} from '../constants';
import {changeMode} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import Party from './Party';
import Vehicle from './Vehicle';
import Inventory from './Inventory';
import Zoom from './Zoom';

export default class Overlay {
  constructor (store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.zoom = new Zoom(this.store, this.canvas, this.ctx, this.loader);
    this.party = new Party(this.store, this.canvas, this.ctx, this.loader);
    this.vehicle = new Vehicle(this.store, this.canvas, this.ctx, this.loader);
    this.inventory = new Inventory(this.store, this.canvas, this.ctx, this.loader);
  }

  update(delta, xClick, yClick) {
    this.zoom.update(delta, xClick, yClick);
    this.party.update(delta, xClick, yClick);
    this.vehicle.update(delta, xClick, yClick);
    this.inventory.update(delta, xClick, yClick);
  }

  render() {
    this.zoom.render();
    this.party.render();
    this.vehicle.render();
    this.inventory.render();
  }
}
