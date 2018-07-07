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

  get mode() {
    return this.store.getState().mode;
  }

  get story() {
    const {story} = this.store.getState();
    const buttons = story.buttons.map((button, idx) =>
      Object.assign({}, button, {id: idx + 1})
    );
    return Object.assign({}, story, {buttons: buttons});
  }

  get map() {
    const {zoom, mapTiles} = this.store.getState();
    return {zoom, mapTiles,};
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

  get positionId() {
    return this.store.getState().position;
  }

  get positionCoords() {
    const { mapWidth, mapHeight, position } = this.store.getState();
    return {
      x: position % mapWidth,
      y: Math.floor(position / mapHeight)
    };
  }

  get party() {
    const {party} = this.store.getState();
    return {party,};
  }

  get vehicle() {
    const {vehicle} = this.store.getState();
    return {vehicle,};
  }

  get sight() {
    const {sight} = this.store.getState();
    return {sight,};
  }
}
