import { SLOTS } from './utils/constants';

export default class Connect {
  constructor(store) {
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

  get view() {
    return this.store.getState().view;
  }

  get mode() {
    return this.store.getState().mode;
  }

  get modal() {
    return this.store.getState().modal;
  }

  get inventoryChanges() {
    return this.store.getState().inventoryChanges;
  }

  get partyChanges() {
    return this.store.getState().partyChanges;
  }

  get actions() {
    return this.store.getState().actions;
  }

  get keys() {
    const allKeys = this.store.getState().keys;
    const trueKeys = Object.keys(allKeys).filter(x => allKeys[x] === true);
    return trueKeys;
  }

  get mouseDownLeft() {
    return this.store.getState().mouseDownLeft;
  }

  get mouseDownRight() {
    return this.store.getState().mouseDownRight;
  }

  get mouseDrop() {
    return this.store.getState().mouseDrop;
  }

  get mouseOffset() {
    return this.store.getState().mouseOffset;
  }

  get mousePos() {
    return this.store.getState().mousePos;
  }

  get clickLeft() {
    return this.store.getState().clickLeft;
  }

  get clickRight() {
    return this.store.getState().clickRight;
  }

  get stories() {
    return this.store.getState().stories;
  }

  get map() {
    const {
      position, xCoord, yCoord, /* positionTarget, xTarget, yTarget, */ tiles, sight, zoom
    } = this.store.getState();
    const { x, y } = tiles.find(tile => tile.position === position);
    const pos = { x, y };
    const coords = { x: xCoord, y: yCoord };
    // const coordsTarget = { x: xTarget, y: yTarget };
    return {
      pos, coords, /* positionTarget, coordsTarget, */ tiles, sight, zoom,
    };
  }

  get zoom() {
    return this.store.getState().zoom;
  }

  get currentTile() {
    const { position, tiles } = this.store.getState();
    return tiles.find(tile => tile.position === position);
  }

  get position() {
    return this.store.getState().position;
  }

  get inventory() {
    return this.store.getState().inventory;
  }

  get slots() {
    return this.store.getState().slots;
  }

  get graphTiles() {
    return this.store.getState().graphTiles;
  }

  get draggedItem() {
    const { slots } = this.store.getState();
    const match = slots.find(slot => (
      slot.type === SLOTS.DRAG && slot.position === 0 && slot.quantity > 0
    ));
    return match || null;
  }

  get draggedOrigin() {
    return this.store.getState().draggedOrigin;
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

  get hunting() {
    return this.store.getState().hunting;
  }
}
