import {MODE} from '../constants';
import {changeMode} from '../../store/actions/actions';
import Connect from '../../store/reducers/Connect';
import Loader from '../utils/Loader';
import src from '../../../images/tileset-small.png';
import {addButtonCoords, screenToButtonId, getItemById} from './utils';
import Party from './Party';
import Vehicle from './Vehicle';
import Inventory from './Inventory';
import Zoom from './Zoom';

export default class Overlay {
  constructor (store, canvas, ctx, atlas) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new Connect(this.store);

    this.loader = new Loader();
    Promise.resolve(this.loader.setImage('tiles', src))
    .then(loaded => {
      this.atlas = this.loader.getImage('tiles');
    })
    .then(() => {
      this.party = new Party(this.store, this.canvas, this.ctx, this.atlas);
      this.vehicle = new Vehicle(this.store, this.canvas, this.ctx, this.atlas);
      this.inventory = new Inventory(this.store, this.canvas, this.ctx, this.atlas);
      this.zoom = new Zoom(this.store, this.canvas, this.ctx, this.atlas);
    });
  }

  update(delta, x, y) {
    // this.party.update(delta, xClick, yClick);
    // this.vehicle.update(delta, xClick, yClick);
    // this.inventory.update(delta, xClick, yClick);
    // this.zoom.update(delta, xClick, yClick);
  }

  render() {
    this.party.render();
    this.vehicle.render();
    this.inventory.render();
    this.zoom.render();
  }
}
