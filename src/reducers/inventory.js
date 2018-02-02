const [ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM] = ['ADD_ITEM', 'REMOVE_ITEM', 'UPDATE_ITEM'];

const sampleAction = {
  type: ADD_ITEM,
  index: // get this from server?
  item: {
    // specific properties
  }
}

// split actions into separate file (or even folder?)

export default function inventory(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      return state.concat({
        ...action.item
      });
    case: REMOVE_ITEM:
      return state.filter( (item, index) => index !== action.index);
    case: UPDATE_ITEM:
      return state.map( (item, index) => {
        if(index !== action.index) {
          return item;
        }
        return {
          ...item,
          ...action.item
        };
      });
    default:
      return state;
  }
}
