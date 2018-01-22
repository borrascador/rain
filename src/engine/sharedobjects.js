const [WOOD, ORE, OIL] = [‘WOOD’, ‘ORE’, ‘OIL’];
const [FUEL, AMMO, FOOD] = [‘FUEL’, ‘AMMO’, ‘FOOD’];
const [TIRE, PARTS, BATTERY] = [‘TIRE’, ‘PARTS’, ‘BATTERY’];
const [MULE, TRUCK, CANOE, BOAT] = [‘MULE’, ‘TRUCK’, ‘CANOE’, ‘BOAT’];


const item () => {
	return {
		type: ITEM
		resourceType: string
		repairStatus: string
    stackable: bool
		quantity: integer
	}
}

const setResourceType(item, resourceType) => {
	return Object.assign({}, item, {
		resourceType: resourceType
	});
}

function itemReducer(state, action) {
  switch (action.type) {
    case ADD_ITEM:
      if (state.items.filter(item => 
            item.resourceType === action.resourceType
            && item.stackable === true)) {

      // if state.items already includes an ITEM with the same resourceType as the new item and the item is stackable, then add the 
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
    default:
      return state
  }
}

