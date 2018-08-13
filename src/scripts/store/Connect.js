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

  get drag() {
    const {xDragging, yDragging} = this.store.getState();
    return {xDragging, yDragging,};
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
    const { position, tiles, sight, zoom} = this.store.getState();
    const { x, y } = tiles.find(tile => tile.id === position);
    const pos = {};
    pos.x = x;
    pos.y = y;
    return { pos, tiles, sight, zoom, };
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