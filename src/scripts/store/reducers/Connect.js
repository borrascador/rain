export default class Connect {
  constructor (store) {
    this.store = store;
  }

  get mode() {
    return this.store.getState().mode;
  }

  get events() {
    return this.store.getState().events;
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
