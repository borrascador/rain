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
  const story = action.payload.story || state.story;
  if (!action.payload.inventory) return story;

  return Object.assign({}, story, { changes: action.payload.inventory });
}

export function getActions(inventory, tiles, position) {
  const currentTile = tiles.find(tile => tile.id === position);
  let actions = { 'main': [] };

  if (currentTile.crops && currentTile.crops.length > 0) {
    actions['main'].push({ target: 'harvest', id: 14 });
    actions['harvest'] = [ { target: 'main', id: 18 } ];
    actions['harvest'].push(...currentTile.crops.map(crop => {
      if (crop.stage === 0) {
        return Object.assign({}, crop, { tag: 'harvest' });
      } else {
        return Object.assign({}, crop, { id: 12 })
      }
    }));
  }

  const getIconFromTag = (tag) => {
    switch(tag) {
      case 'seed': return 10;
      case 'harvest': return 14;
      case 'food': return 15;
      case 'hunting': return 16;
      case 'fishing': return 17;
    }
    return 9;
  }

  inventory.forEach(item => {
    item.tags.forEach((tag, index) => {
      if(!actions[tag]) {
        actions['main'].push({
          target: tag,
          id: getIconFromTag(tag)
        });
        actions[tag] = [
          { target: 'main', id: 18 },
          { tag, name: item.name, id: item.id }
        ];
      } else {
        actions[tag].push({ tag, name: item.name, id: item.id });
      }
    });
  });

  return actions;
}
