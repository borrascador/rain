import Connect from '../../Connect';
// import Pace from './Pace';
import Food from './Food';
import Party from './Party';
import Inventory from './Inventory';
import ActionBar from './ActionBar';
// import Habitat from './Habitat';
import Zoom from './Zoom';
import Items from './Items';
import { SLOTS } from '../../utils/constants';
import { refreshSlots } from '../../actions/actions';

export default class Overlay {
  constructor(store, canvas, ctx, loader) {
    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;
    this.connect = new Connect(this.store);

    // this.pace = new Pace(this.store, this.canvas, this.ctx, this.loader);
    this.food = new Food(this.store, this.canvas, this.ctx, this.loader);
    this.party = new Party(this.store, this.canvas, this.ctx, this.loader);
    this.inventory = new Inventory(
      this.store, this.canvas, this.ctx, this.loader,
      SLOTS.BACKPACK, 4, 5,
    );
    this.loot = new Inventory(
      this.store, this.canvas, this.ctx, this.loader,
      SLOTS.LOOT, 4, 1,
    );
    this.actionBar = new ActionBar(this.store, this.canvas, this.ctx, this.loader);
    // this.habitat = new Habitat(this.store, this.canvas, this.ctx, this.loader);
    this.zoom = new Zoom(this.store, this.canvas, this.ctx, this.loader);
    this.items = new Items(this.store, this.canvas, this.ctx, this.loader);
  }

  update(step) {
    const { currentTile } = this.connect;
    this.items.update(step);
    this.zoom.update(step);
    // this.habitat.update(step);
    this.actionBar.update(step);
    if (currentTile && currentTile.loot) {
      this.loot.update(step);
    }
    this.inventory.update(step);
    this.party.update(step);
    this.food.update(step);
    // this.pace.update(step);
  }

  render() {
    const { currentTile } = this.connect;
    // this.pace.render();

    const {
      width: itemWidth,
      height: itemHeight,
      size: itemSize,
      gutter: itemGutter,
    } = this.inventory;
    this.inventory.xStart = this.canvas.width - itemWidth - itemGutter;
    this.inventory.yStart = itemSize * 2;
    this.loot.xStart = (this.canvas.width - itemWidth) / 2;
    this.loot.yStart = (this.canvas.height - itemHeight) / 4 / 3;

    const slots = [].concat(
      this.food.render(),
      this.party.render(),
      this.inventory.render(),
      ...[(currentTile && currentTile.loot)
        ? this.loot.render()
        : [],
      ],
    );
    this.store.dispatch(refreshSlots(slots));
    this.actionBar.render();
    // this.habitat.render();
    this.zoom.render();
    this.items.render();
  }
}
