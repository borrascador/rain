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
  });
  let result = [];
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop))
      result.push(obj[prop]);
  }
  return result;
};

export function makeStory(state, action) {
  if (action.payload.story) {
    return Object.assign({}, action.payload.story, {
      inventoryChanges: action.payload.inventory || [],
      partyChanges: action.payload.party || [],
      buttons: action.payload.story.buttons || [ { text: 'OK', id: 1 } ]
    });
  } else {
    return state.story;
  }
}

export function getActions(inventory, eating, tiles, position) {
  let actions = { 'main': [] };

  let itemsByTag = {};
  inventory.forEach(item => {
    item.tags.forEach((tag, index) => {
      if (itemsByTag[tag]) {
        itemsByTag[tag].push(item);
      } else {
        itemsByTag[tag] = Array(item);
      }
    });
  });

  actions['main'].push({ target: 'eating', id: 15, tileset: 'icons' });
  actions['eating'] = [ { target: 'main', name: 'back', id: 18, tileset: 'icons' } ]
  .concat(eating.map(food => {
    const matchedFood = itemsByTag['food'].find(item => item.id === food.id);
    return Object.assign({}, food, {
      tag: 'remove_food',
      name: `remove ${matchedFood.name}`,
      tileset: 'items'
    });
  }));
  if (eating.length < 3 && itemsByTag['food']) {
    actions['eating'].push({ target: 'food', name: 'add new food', id: 33, tileset: 'icons' })
  }

  if (itemsByTag['food']) {
    actions['food'] = [ { target: 'eating', name: 'back', id: 18, tileset: 'icons' } ]
    .concat(
      itemsByTag['food']
      .map(item => {
        return { tag: 'add_food', name: `add ${item.name}`, id: item.id, tileset: 'items' }
      })
    );
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

  if (currentTile.fishing) {
    actions['main'].push({ target: 'fishing', id: 17, tileset: 'icons' });
    actions['fishing'] = [ { target: 'main', name: 'back', id: 18, tileset: 'icons' } ]
    .concat(
      inventory
      .filter(item => item.tags.includes('fishing'))
      .map(item => ({ tag: 'fishing', name: item.name, id: item.id, tileset: 'items' }))
    );
  }

  if (currentTile.hunting) {
    actions['main'].push({ target: 'hunting', id: 16, tileset: 'icons' });
    actions['hunting'] = [ { target: 'main', name: 'back', id: 18, tileset: 'icons' } ]
    .concat(
      inventory
      .filter(item => item.tags.includes('hunting'))
      .map(item => ({ tag: 'hunting', name: item.name, id: item.id, tileset: 'items' }))
    );
  }

  return actions;
}
