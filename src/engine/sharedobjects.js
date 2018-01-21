
const rawResources = ['WOOD', 'STONE', 'ORE', 'OIL', '', 'FISH'];
const processedResources = ['FUEL', 'TRUCKS', 'CANOES', 'AMMO', 'CARPARTS', 'TOOLS'];
const tileTypes = ['RIVER', 'ROAD', 'FOREST', 'PLAIN'];	

Const item () => {
	Return {
		Type: ITEM
		ResourceType: string
		RepairStatus: string
		Quantity: integer
	}
}

Const assignResourceType(item, resourceType) => {
	Return Object.assign({}, item, {
		resourceType: resourceType
	});
}

