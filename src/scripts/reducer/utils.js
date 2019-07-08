import { UPDATE_TEXT_OFFSET, UPDATE_TEXT_DURATION } from '../utils/constants';
import hasProp from '../utils/hasProp';

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

export function mergeArrays(oldArray, newArray) {
  if (!newArray) return oldArray;
  const obj = {};
  oldArray.forEach((oldItem) => {
    obj[oldItem.id] = oldItem;
  });
  newArray.forEach((newItem) => {
    if (hasProp(obj, newItem.id)) {
      if (newItem.quantity === 0) {
        delete obj[newItem.id];
        return;
      }
      if (newItem.health === 0 && !hasProp(obj[newItem.id], 'timestamp')) {
        obj[newItem.id] = Object.assign(obj[newItem.id], newItem, {
          timestamp: Date.now()
        });
      } else {
        obj[newItem.id] = Object.assign(obj[newItem.id], newItem);
      }
    } else {
      obj[newItem.id] = newItem;
    }
    if (hasProp(newItem, 'skill_changes') && newItem.skill_changes.length > 0) {
      obj[newItem.id] = Object.assign(obj[newItem.id], {
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
      obj[newItem.id] = Object.assign(obj[newItem.id], {
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

export function mergeTiles(oldArray, newArray) {
  if (!newArray) return oldArray;
  let obj = {};
  oldArray.forEach((oldItem) => {
    const key = makeTileKey(oldItem.x, oldItem.y);
    obj[key] = oldItem;
  });
  const newObj = {};
  newArray.forEach((newItem) => {
    const key = makeTileKey(newItem.x, newItem.y);
    if (obj[key]) {
      obj[key] = Object.assign(obj[key], newItem);
    } else {
      obj[key] = newItem;
    }
  });
  obj = Object.assign(obj, newObj);
  // convert object of items into array of items
  return Object.values(obj);
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

export function sortTiles(state, action) {
  // TODO move these lines into helper function
  const GROUND_TILES = [0, 1, 4, 5];
  const getGroundTile = () => GROUND_TILES[Math.floor(Math.random() * GROUND_TILES.length)];

  const { tiles } = action.payload;
  return tiles.map(tile => ({
    ...tile,
    ground: Array.from({ length: 4096 }).map((_, index) => ({
      xPos: tile.xPos,
      yPos: tile.yPos,
      xCoord: index % 64,
      yCoord: Math.floor(index / 64),
      id: getGroundTile(),
    })),
    trees: tile.trees ? tile.trees
      .sort((a, b) => a.position > b.position)
      .map(tree => ({
        xPos: tile.xPos,
        yPos: tile.yPos,
        xCoord: tree.position % 64,
        yCoord: Math.floor(tree.position / 64),
        id: tree.id,
      })) : []
  }));
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

export function getActions(inventory, tiles, position, hunting) {
  const actions = { main: [] };

  const itemsByTag = {};
  if (inventory.length > 0) {
    inventory.forEach((item) => {
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

  if (itemsByTag.seed) {
    actions.main.push({ target: 'seed', id: 10, tileset: 'icons' });
    actions.seed = [{
      target: 'main', name: 'back', id: 18, tileset: 'icons'
    }]
      .concat(
        itemsByTag.seed
          .map(item => ({
            tag: 'seed', name: `plant ${item.name}`, id: item.id, tileset: 'items'
          }))
      );
  }

  const currentTile = tiles.find(tile => tile.position === position);
  if (currentTile && currentTile.crops && currentTile.crops.length > 0) {
    actions.main.push({ target: 'harvest', id: 14, tileset: 'icons' });
    actions.harvest = [{
      target: 'main', name: 'back', id: 18, tileset: 'icons'
    }]
      .concat(currentTile.crops.map((crop) => {
        if (crop.stage === 0) {
          return Object.assign({}, crop, { tag: 'harvest', tileset: 'items' });
        }
        return Object.assign({}, crop, { id: 12, tileset: 'icons' });
      }));
  }

  if (currentTile && currentTile.fishing && itemsByTag.fishing) {
    actions.main.push({ target: 'fishing', id: 17, tileset: 'icons' });
    actions.fishing = [{
      target: 'main', name: 'back', id: 18, tileset: 'icons'
    }]
      .concat(
        itemsByTag.fishing
          .map(item => ({
            tag: 'fishing', name: item.name, id: item.id, tileset: 'items'
          }))
      );
  }

  // TODO: Should I use hunting state to set `name` and `tag`?
  if (currentTile && currentTile.hunting) {
    const name = hunting ? 'stop hunting' : 'start hunting';
    actions.main.push({
      tag: 'hunting', name, id: 16, tileset: 'icons'
    });
  }

  return actions;
}
