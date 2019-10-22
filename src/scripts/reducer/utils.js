import { UPDATE_TEXT_OFFSET, UPDATE_TEXT_DURATION } from '../utils/constants';
import hasProp from '../utils/hasProp';

export const reduceIntegerState = (state, action) => typeof action === 'number' ? action : state;
export const reduceBooleanState = (state, action) => typeof action === 'boolean' ? action : state;

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
}

export function updateItemInArray(array, itemId, updateItemCallback) {
  return array.map((item) => {
    if (item.id !== itemId) return item;
    return updateItemCallback(item);
  });
}

export function updatePositionInArray(array, type, position, updateItemCallback) {
  return array.map((item) => {
    if (!(item.type === type && item.position === position)) return item;
    return updateItemCallback(item);
  });
}

// function compareObjects(a, b) {
//   const aProps = Object.getOwnPropertyNames(a);
//   const bProps = Object.getOwnPropertyNames(b);
//   if (aProps.length !== bProps.length) return false;
//   for (let i = 0; i < aProps.length; i++) {
//     const propName = aProps[i];
//     if (a[propName] !== b[propName]) return false;
//   }
//   return true;
// }

export function mergeObjects(obj1, obj2) {

}

export function mergeArrays(oldArray, newArray) {
  if (!newArray) return oldArray;
  const obj = {};
  oldArray.forEach((oldItem) => {
    obj[oldItem.id.toString()] = oldItem;
  });
  newArray.forEach((newItem) => {
    const newItemId = newItem.id.toString();
    if (isObject(obj[newItemId]) && isObject(newItem)) {
      if (newItem.quantity === 0) {
        delete obj[newItemId];
        return;
      }
      if (newItem.health === 0 && !hasProp(obj[newItemId], 'timestamp')) {
        obj[newItemId] = Object.assign(obj[newItemId], newItem, {
          timestamp: Date.now()
        });
      } else {
        obj[newItemId] = Object.assign(obj[newItemId], newItem);
      }
    } else {
      obj[newItemId] = newItem;
    }
    if (hasProp(newItem, 'skill_changes') && newItem.skill_changes.length > 0) {
      obj[newItemId] = Object.assign(obj[newItemId], {
        skills: newItem.skills.map((skill) => {
          const match = newItem.skill_changes.find(change => skill.id === change.id);
          if (match) {
            return Object.assign(skill, match);
          }
          return skill;
        })
      });
    }
    if (hasProp(newItem, 'modifier_changes') && newItem.modifier_changes.length > 0) {
      obj[newItemId] = Object.assign(obj[newItemId], {
        modifiers: newItem.modifiers.map((modifier) => {
          const match = newItem.modifier_changes.find(change => modifier.id === change.id);
          if (match) {
            return Object.assign(modifier, match);
          }
          return modifier;
        })
      });
    }
  });
  // convert object of items into array of items
  return Object.values(obj);
}

function makeSlotKey(type, position) {
  return `${type},${position}`;
}

function makeTileKey(x, y) {
  return `x${x}y${y}`;
}

function getSlotProps({
  type, position, xPos, yPos, width, height
}) {
  if ([xPos, yPos, width, height].every(prop => prop !== undefined)) {
    return {
      type, position, xPos, yPos, width, height
    };
  }
  return { type, position };
}

// function getRestProps(item, destType) { // TODO Use this later
function getRestProps(item) {
  const {
    type, position, xPos, yPos, width, height, quantity, ...rest
  } = item;
  // TODO Remove portion if destType = SLOTS.BACKPACK
  return Object.keys(rest).length > 0 ? rest : null;
}

export function mergeSlots(oldArray, newArray) {
  if (!newArray) return oldArray;
  let obj = {};
  oldArray.forEach((oldItem) => {
    const key = makeSlotKey(oldItem.type, oldItem.position);
    obj[key] = oldItem;
  });
  const newObj = {};
  newArray.forEach((newItem) => {
    const key = makeSlotKey(newItem.type, newItem.position);
    if (obj[key]) {
      if (hasProp(newItem, 'id')) {
        const oldItem = oldArray.find(item => (
          item.id === newItem.id && getRestProps(item, newItem.type)
        ));
        const meta = oldItem ? getRestProps(oldItem, newItem.type) : {};
        newObj[key] = Object.assign({}, getSlotProps(obj[key]), meta, newItem);
      } else {
        obj[key] = Object.assign(obj[key], newItem);
      }
    } else {
      obj[key] = newItem;
    }
  });
  obj = Object.assign(obj, newObj);
  // convert object of items into array of items
  return Object.values(obj).map((item) => {
    if (hasProp(item, 'quantity') && item.quantity === 0) {
      return getSlotProps(item);
    }
    return item;
  });
}

export function updateStory(state, action) {
  if (action.payload.story) {
    return state.stories.concat([
      Object.assign({}, action.payload.story, {
        inventoryChanges: action.payload.inventory || [],
        partyChanges: action.payload.party || [],
        buttons: action.payload.story.buttons || [{ text: 'OK', id: 1 }],
        canDispatch: !!action.payload.story.buttons,
        timestamp: Date.now()
      })
    ]);
  }
  return state.stories;
}

export function updateMessages(state, action) {
  if (action.payload.messages) {
    return [...state.messageLog, ...action.payload.messages];
  }
  return state.messageLog;
}

// Helper function that enforces minimum offset between update text timestamps
function getTimestamp(changes, offset, now) {
  if (changes.length > 0) {
    const latest = changes[changes.length - 1];
    if (now - latest.timestamp < offset) {
      return latest.timestamp + offset;
    }
  }
  return now;
}

function isObject(a) {
  return (!!a) && (a.constructor === Object);
};

export function mergeTiles(state, action) {
  if (!action.payload.tiles) return state.tiles;
  
  // TODO move these lines into helper function
  const GROUND_TILES = [1, 4, 5];
  const getGroundTile = () => GROUND_TILES[Math.floor(Math.random() * GROUND_TILES.length)];

  const { tiles: newTiles } = action.payload;
  const tiles = [...state.tiles];

  newTiles.forEach(({ xPos, yPos, trees }) => {
    tiles[xPos] = tiles[xPos] || [];
    tiles[xPos][yPos] = tiles[xPos][yPos]
      ? tiles[xPos][yPos]
      : Array.from({ length: 64 })
        .map((_, xCoord) => Array.from({ length: 64 })
          .map((__, yCoord) => ({
            xPos,
            yPos,
            xCoord,
            yCoord,
            groundLayer: getGroundTile(),
          }))
        );
    trees.forEach(({ xCoord, yCoord, id }) => {
      tiles[xPos][yPos][xCoord] = tiles[xPos][yPos][xCoord] || [];
      tiles[xPos][yPos][xCoord][yCoord] = {
        ...tiles[xPos][yPos][xCoord][yCoord],
        treeLayer: id,
      }
    });
  });
  return tiles;
}

export function updateInventoryChanges(state, action) {
  const { inventory } = action.payload;
  if (inventory && inventory.length > 0) {
    const now = Date.now();
    const timestamp = getTimestamp(state.inventoryChanges, UPDATE_TEXT_OFFSET, now);
    return state.inventoryChanges.concat(
      inventory
        .filter(item => hasProp(item, 'change'))
        .map((item, index) => Object.assign({}, item, {
          timestamp: timestamp + index * UPDATE_TEXT_OFFSET
        }))
    );
  }
  return state.inventoryChanges;
}

export function updatePartyChanges(state, action) {
  const { party } = action.payload;
  if (party && party.length > 0) {
    let changes = [];
    const now = Date.now();
    party.forEach((item) => {
      const memberChanges = state.partyChanges.filter(member => item.id === member.id);
      let timestamp = getTimestamp(memberChanges, UPDATE_TEXT_DURATION, now);

      // NOTE Check for health changes
      if (hasProp(item, 'health_change') && item.health_change !== 0) {
        changes.push(Object.assign({}, {
          id: item.id,
          change: item.health_change,
          name: 'health',
          timestamp
        }));
        timestamp += UPDATE_TEXT_DURATION;
      }

      // Check for new or dead party members
      // NOTE loggedIn tests whether the user is starting a new session
      if (hasProp(item, 'health') && state.loggedIn === true) {
        const match = state.party.find(member => member.id === item.id);
        if (!match) {
          changes.push(Object.assign({}, {
            id: item.id,
            change: 1,
            name: item.name,
            timestamp
          }));
          timestamp += UPDATE_TEXT_DURATION;
        } else if (item.health === 0) {
          changes.push(Object.assign({}, {
            id: item.id,
            change: -1,
            name: item.name,
            timestamp
          }));
          timestamp += UPDATE_TEXT_DURATION;
          return;
        }
      }

      // Check for jeito changes
      if (hasProp(item, 'jeito_change') && item.jeito_change !== 0) {
        changes.push(Object.assign({}, {
          id: item.id,
          change: item.jeito_change,
          name: 'jeito',
          timestamp
        }));
        timestamp += UPDATE_TEXT_DURATION;
      }

      // Check for skill changes
      if (hasProp(item, 'skill_changes') && item.skill_changes.length > 0) {
        changes = changes.concat(
          item.skill_changes.map((change) => {
            const result = Object.assign({}, {
              id: item.id,
              change: 1,
              name: change.name,
              timestamp
            });
            timestamp += UPDATE_TEXT_DURATION;
            return result;
          })
        );
      }

      // Check for modifier changes
      if (hasProp(item, 'modifier_changes') && item.modifier_changes.length > 0) {
        changes = changes.concat(
          item.modifier_changes.map((change) => {
            const match = item.modifiers.find(modifier => modifier.id === change.id);
            const result = Object.assign({}, {
              id: item.id,
              change: match ? 1 : -1,
              name: change.name,
              timestamp
            });
            timestamp += UPDATE_TEXT_DURATION;
            return result;
          })
        );
      }
    });
    return state.partyChanges.concat(changes);
  }
  return state.partyChanges;
}

export function getActions(newState) {
  const {
    slots,
    party,
    players,
    npcs,
    tiles,
    selectedPlayer,
    selectedTile = {},
  } = newState;
  const currentPlayer = party.find(player => player.id === selectedPlayer);
  const { xPos, yPos, xCoord, yCoord } = selectedTile;

  const actions = { main: [] };
  if (!currentPlayer) return actions;
  actions.main.push({ target: 'main', name: 'unselect', id: 39, tileset: 'icons' });

  const itemsByTag = {};
  if (slots.length > 0) {
    slots.forEach((item) => {
      if (item.tags) {
        item.tags.forEach((tag) => {
          if (itemsByTag[tag]) {
            itemsByTag[tag].push(item);
          } else {
            itemsByTag[tag] = Array(item);
          }
        });
      }
    });
  }

  actions.main.push({ target: 'attack', id: 16, tileset: 'icons' });
  actions.attack = [{ target: 'main', name: 'cancel', id: 39, tileset: 'icons' }];

  actions.main.push({ target: 'eat', id: 15, tileset: 'icons' });
  actions.eat = [{ target: 'main', name: 'cancel', id: 39, tileset: 'icons' }];

  actions.main.push({ tag: 'forage', name: 'forage', id: 14, tileset: 'icons' });

  if (itemsByTag.seed) {
    actions.main.push({ target: 'sow', id: 10, tileset: 'icons' });
    actions.sow = [{ target: 'main', name: 'back', id: 18, tileset: 'icons' }]
      .concat(
        itemsByTag.seed
          .map(item => ({
            tag: 'seed', name: `plant ${item.name}`, id: item.id, tileset: 'items'
          }))
      );
  }

  return actions;
}
