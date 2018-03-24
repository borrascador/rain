export default class Connect {
  constructor (store) {
    this.store = store;
  }

  get mode() {
    return this.store.getState().mode;
  }

  get event() {
    return this.store.getState().event;
  }

  getMenuById(id) {
    const state = this.store.getState();
    const menu = state.menus.byId[id || state.activeMenu];
    const buttons = menu.buttons.map((button, idx) =>
      Object.assign({}, state.buttons.byId[button], {id: idx + 1})
    );
    return Object.assign({}, menu, {buttons: buttons});
  }

  get map() {
    const {srcTileSize, srcTiles, mapTileSize, mapTiles} = this.store.getState();
    return {srcTileSize, srcTiles, mapTileSize, mapTiles,};
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
    const {offsetX, offsetY} = this.store.getState();
    return {offsetX, offsetY,};
  }

  get partyPos() {
    const {partyX, partyY} = this.store.getState();
    return {partyX, partyY,};
  }
}
