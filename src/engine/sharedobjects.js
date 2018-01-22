const [WOOD, ORE, OIL] = [‘WOOD’, ‘ORE’, ‘OIL’];
const [FUEL, AMMO, FOOD] = [‘FUEL’, ‘AMMO’, ‘FOOD’];
const [TIRE, PARTS, BATTERY] = [‘TIRE’, ‘PARTS’, ‘BATTERY’];
const [MULE, TRUCK, CANOE, BOAT] = [‘MULE’, ‘TRUCK’, ‘CANOE’, ‘BOAT’];


const initialState = {
  map: 
  items: []
};

const item () => {
	return {
		type: ITEM
		resourceType: string
		repairStatus: string
    stackable: bool
		quantity: integer
	}
};

const setResourceType(item, resourceType) => {
	return Object.assign({}, item, {
		resourceType: resourceType
	});
}

function itemReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      // if state.items already includes an ITEM with the same resourceType
      // and the item is stackable, then add the quantity of the new item
      // to the quantity of the old item
      let oldItem = state.items.find(item => 
            item.resourceType === action.resourceType
            && item.stackable === true);
      if (oldItem) {
        // code that creates new updated array if item is present      
      } else {
        // code that creates concat array for new item
        return Object.assign({}, state, {
          items: [
            ...state.items,
            {
              type: ITEM,
              resourceType: action.resourceType,
              repairStatus: action.repairStatus,
              quantity: action.quantity
            }
          ]
        })
      }
    default:
      return state
  }
}

