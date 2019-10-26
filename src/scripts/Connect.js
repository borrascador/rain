import { SLOTS } from './utils/constants';
import { findTile } from './components/utils';

export default class Connect {
  constructor(store) {
    this.store = store;
  }

  //
  // Game State
  //

  get party() {
    return this.store.getState().party;
  }

  get players() {
    return this.store.getState().players;
  }

  get npcs() {
    return this.store.getState().npcs;
  }

  get currentPlayer() {
    const { party } = this.store.getState();
    return party.find(({ self }) => self);
  }

  get selectedPlayer() {
    const { selectedPlayer, party } = this.store.getState();
    if (typeof selectedPlayer === 'number' && party.length > 0) {
      const player = party.find(player => player.id === selectedPlayer);
      return player || undefined;
    }
    return undefined;
  }

  get sight() {
    return this.store.getState().sight;
  }

  get zoom() {
    return this.store.getState().zoom;
  }

  get tiles() {
    return this.store.getState().tiles;
  }

  get currentTile() {
    const { party, tiles } = this.store.getState();
    const {
      xPos, yPos, xCoord, yCoord,
    } = party.find(({ self }) => self);
    return findTile(tiles, xPos, yPos, xCoord, yCoord);
  }

  get selectedTile() {
    return this.store.getState().selectedTile;
  }

  get actions() {
    return this.store.getState().actions;
  }

  get selectedAction() {
    return this.store.getState().selectedAction;
  }

  get slots() {
    return this.store.getState().slots;
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

  get stories() {
    return this.store.getState().stories;
  }

  get vehicle() {
    return this.store.getState().vehicle;
  }

  get rations() {
    return this.store.getState().rations;
  }

  get hunting() {
    return this.store.getState().hunting;
  }

  //
  // UI State
  //

  get view() {
    return this.store.getState().view;
  }

  get modal() {
    return this.store.getState().modal;
  }

  get partyTab() {
    return this.store.getState().partyTab;
  }

  get inventoryChanges() {
    return this.store.getState().inventoryChanges;
  }

  get partyChanges() {
    return this.store.getState().partyChanges;
  }

  get mode() { // note: currently unused
    return this.store.getState().mode;
  }

  //
  // Render Lifecycle State
  //

  get needRender() {
    return this.store.getState().needRender;
  }

  //
  // Network Connectivity State
  //

  get serverEndpoint() {
    return this.store.getState().serverEndpoint;
  }

  get connected() {
    return this.store.getState().connected;
  }

  get loggedIn() {
    return this.store.getState().loggedIn;
  }

  //
  // Error and Debug State
  //

  get error() {
    return this.store.getState().error;
  }

  //
  // Input State
  //

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
}
