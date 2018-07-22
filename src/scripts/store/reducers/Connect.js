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

  get tabs() {
    return this.store.getState().tabs;
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

  get story() {
    const {story} = this.store.getState();
    if (story) {
      // TODO: Decide on a better way to do this / define object
      const buttons = story.buttons.map((button, idx) =>
        Object.assign({}, button, {id: idx + 1})
      );
      return Object.assign({}, story, {buttons: buttons});
    } else {
      return null;
    }
  }

  get map() {
    const {tiles, sight, zoom} = this.store.getState();
    return {tiles, sight, zoom,};
  }

  get positionId() {
    return this.store.getState().position;
  }

  get positionCoords() {
    const { tiles, position } = this.store.getState();
    const { x, y } = tiles.find(tile => tile.id === position);
    return { x, y };
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
}
