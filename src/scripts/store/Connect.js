import { DURATION } from '../game/constants';

export default class Connect {
  constructor (store) {
    this.store = store;
  }

  get connected() {
    return this.store.getState().connected;
  }

  get loggedIn() {
    return this.store.getState().loggedIn;
  }

  get error() {
    return this.store.getState().error;
  }

  get partyTab() {
    return this.store.getState().partyTab;
  }

  get mode() {
    return this.store.getState().mode;
  }

  get inventoryChanges() {
    return this.store.getState().inventoryChanges;
  }

  get actions() {
    return this.store.getState().actions;
  }

  get click() {
    const {xClick, yClick} = this.store.getState();
    return {xClick, yClick,};
  }

  get keys() {
    const allKeys = this.store.getState().keys;
    const trueKeys = Object.keys(allKeys).filter(x => {
      return allKeys[x] === true;
    });
    return trueKeys;
  }

  get offset() {
    const {xOffset, yOffset} = this.store.getState();
    return {xOffset, yOffset,};
  }

  get mouse() {
    const {xMouse, yMouse} = this.store.getState();
    return {xMouse, yMouse,};
  }

  get stories() {
    return this.store.getState().stories;
  }

  get map() {
    const { position, tiles, sight, zoom} = this.store.getState();
    const { x, y } = tiles.find(tile => tile.id === position);
    const pos = {};
    pos.x = x;
    pos.y = y;
    return { pos, tiles, sight, zoom, };
  }

  get currentTile() {
    const { position, tiles } = this.store.getState();
    return tiles.find(tile => tile.id === position);
  }

  get inventory() {
    return this.store.getState().inventory;
  }

  get party() {
    return this.store.getState().party;
  }

  get vehicle() {
    return this.store.getState().vehicle;
  }

  get pace() {
    return this.store.getState().pace;
  }

  get rations() {
    return this.store.getState().rations;
  }
}
