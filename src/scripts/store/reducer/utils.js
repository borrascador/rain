import { UPDATE_TEXT_OFFSET, UPDATE_TEXT_DURATION } from '../../game/constants';

export function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
};

export function updateItemInArray(array, itemId, updateItemCallback) {
  return array.map(item => {
    if (item.id !== itemId) return item
    return updateItemCallback(item);
  });
};

export function mergeArrays(oldArray, newArray) {
  if (!newArray) return oldArray;
  let obj = {};
  oldArray.forEach(item => {
    obj[item.id] = item;
  });
  newArray.forEach(item => {
    if (obj.hasOwnProperty(item.id)) {
      if (item.hasOwnProperty('quantity') && item.quantity === 0) {
        delete obj[item.id];
      } else if (item.hasOwnProperty('health') && item.health === 0) {
        delete obj[item.id];
      } else {
        obj[item.id] = Object.assign(obj[item.id], item);
      }
    } else {
      obj[item.id] = item;
    }
    if (item.hasOwnProperty('skill_changes') && item.skill_changes.length > 0) {
      obj[item.id] = Object.assign(obj[item.id], {
        skills: item.skills.map(skill => {
          const match = item.skill_changes.find(change => skill.id === change.id);
          if (match) {
            return Object.assign(skill, match);
          } else {
            return skill
          }
        })
      });
    }
  });
  let result = [];
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop))
      result.push(obj[prop]);
  }
  return result;
};

export function updateStory(state, action) {
  if (action.payload.story) {
    return state.stories.concat([
      Object.assign({}, action.payload.story, {
        inventoryChanges: action.payload.inventory || [],
        partyChanges: action.payload.party || [],
        buttons: action.payload.story.buttons || [ { text: 'OK', id: 1 } ],
        timestamp: Date.now()
      })
    ]);
  } else {
    return state.stories;
  }
}

// Helper function that enforces minimum offset between update text timestamps
function getTimestamp (changes, offset, now) {
  if (changes.length > 0) {
    const latest = changes[changes.length - 1];
    if (now - latest.timestamp < offset) {
      return latest.timestamp + offset;
    }
  }
  return now;
}

export function updateInventoryChanges(state, action) {
  const inventory = action.payload.inventory;
  if (inventory && inventory.length > 0) {
    const now = Date.now();
    const timestamp = getTimestamp(state.inventoryChanges, UPDATE_TEXT_OFFSET, now);
    return state.inventoryChanges.concat(
      inventory
      .filter(item => {
        return item.hasOwnProperty('change');
      })
      .map((item, index) => {
        return Object.assign({}, item, {
          timestamp: timestamp + index * UPDATE_TEXT_OFFSET
        })
      })
    );
  } else {
    return state.inventoryChanges;
  }
}

export function updatePartyChanges(state, action) {
  const party = action.payload.party;
  if (party && party.length > 0) {
    let changes = [];
    const now = Date.now();
    party.forEach(item => {
      const filtered = state.partyChanges.filter(member => item.id === member.id);
      let timestamp = getTimestamp(filtered, UPDATE_TEXT_DURATION, now)
      if (item.hasOwnProperty('health_change') && item.health_change !== 0) {
        changes.push(Object.assign({}, {
          id: item.id,
          health_change: item.health_change,
          timestamp: timestamp
        }));
        timestamp += UPDATE_TEXT_DURATION;
      }
      if (item.hasOwnProperty('jeito_change') && item.jeito_change !== 0) {
        changes.push(Object.assign({}, {
          id: item.id,
          jeito_change: item.jeito_change,
          timestamp: timestamp
        }));
        timestamp += UPDATE_TEXT_DURATION;
      }
      if (item.hasOwnProperty('skill_changes') && item.skill_changes.length > 0) {
        changes = changes.concat(
          item.skill_changes.map(change => {
            const result = Object.assign({}, {
              id: item.id,
              skill_change: change.name,
              timestamp: timestamp
            });
            timestamp += UPDATE_TEXT_DURATION;
            return result;
          })
        );
      }
    });
    return state.partyChanges.concat(changes);
  } else {
    return state.partyChanges;
  }
}

export function getActions(inventory, eating, tiles, position) {
  let actions = { 'main': [] };

  let itemsByTag = {};
  inventory.length > 0 && inventory.forEach(item => {
    item.tags.forEach((tag, index) => {
      if (itemsByTag[tag]) {
        itemsByTag[tag].push(item);
      } else {
        itemsByTag[tag] = Array(item);
      }
    });
  });

  actions['main'].push({ target: 'eating', id: 15, tileset: 'icons' });
  actions['eating'] = [ { target: 'main', name: 'back', id: 18, tileset: 'icons' } ];
  if (itemsByTag['food']) {
    actions['eating'] = actions['eating'].concat(
      eating.map(food => {
        const matchedFood = itemsByTag['food'].find(item => item.id === food.id);
        return Object.assign({}, food, {
          tag: 'remove_food',
          name: `remove ${matchedFood.name}`,
          tileset: 'items'
        });
      })
    );
    actions['food'] = [ { target: 'eating', name: 'back', id: 18, tileset: 'icons' } ]
    .concat(
      itemsByTag['food']
      .filter(invItem => !eating.find(eatItem => invItem.id === eatItem.id))
      .map(item => {
        return { tag: 'add_food', name: `add ${item.name}`, id: item.id, tileset: 'items' }
      })
    );
  }

  if (eating.length < 3) {
    actions['eating'].push({ target: 'food', name: 'add new food', id: 33, tileset: 'icons' })
  }

  if (itemsByTag['seed']) {
    actions['main'].push({ target: 'seed', id: 10, tileset: 'icons' });
    actions['seed'] = [ { target: 'main', name: 'back', id: 18, tileset: 'icons' } ]
    .concat(
      itemsByTag['seed']
      .map(item => {
        return { tag: 'seed', name: `plant ${item.name}`, id: item.id, tileset: 'items' }
      })
    );
  }

  const currentTile = tiles.find(tile => tile.id === position);
  if (currentTile.crops && currentTile.crops.length > 0) {
    actions['main'].push({ target: 'harvest', id: 14, tileset: 'icons' });
    actions['harvest'] = [ { target: 'main', name: 'back', id: 18, tileset: 'icons' } ]
    .concat(currentTile.crops.map(crop => {
      if (crop.stage === 0) {
        return Object.assign({}, crop, { tag: 'harvest', tileset: 'items' });
      } else {
        return Object.assign({}, crop, { id: 12, tileset: 'icons' });
      }
    }));
  }

  if (currentTile.fishing && itemsByTag['fishing']) {
    actions['main'].push({ target: 'fishing', id: 17, tileset: 'icons' });
    actions['fishing'] = [ { target: 'main', name: 'back', id: 18, tileset: 'icons' } ]
    .concat(
      itemsByTag['fishing']
      .map(item => {
        return { tag: 'fishing', name: item.name, id: item.id, tileset: 'items' }
      })
    );
  }

  if (currentTile.hunting && itemsByTag['hunting']) {
    actions['main'].push({ target: 'hunting', id: 16, tileset: 'icons' });
    actions['hunting'] = [ { target: 'main', name: 'back', id: 18, tileset: 'icons' } ]
    .concat(
      itemsByTag['hunting']
      .map(item => {
        return { tag: 'hunting', name: item.name, id: item.id, tileset: 'items' }
      })
    );
  }

  return actions;
}
