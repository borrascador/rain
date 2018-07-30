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
  let obj = {};

  oldArray.forEach(item => {
    obj[item.id] = item;
  });

  newArray.forEach(item => {
    if(obj.hasOwnProperty(item.id)) {
      obj[item.id] = Object.assign(obj[item.id], item);
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

export function inventoryToTabs(inventory) {
  let obj = {};
  inventory.forEach(item => {
    item.tags.forEach(tag => {
      if(!obj[tag]) {
        obj[tag] = Array({ name: item.name, id: item.id });
      } else {
        obj[tag].push({ name: item.name, id: item.id });
      }
    });
  });
  let tabs = [];
  for(let prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      tabs.push({
        text: prop,
        buttons: obj[prop]
      });
    }
  }
  console.log(tabs);
  return tabs;
}
