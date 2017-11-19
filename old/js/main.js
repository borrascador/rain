$(document).ready(function(){
	var parsedTiles = JSON.parse(tiles.replace(/&quot;/g,'"'));
	var mapHeight = 7;
	var mapWidth = 14;
    var tileType = "river"
	
	drawMap(parsedTiles, mapHeight, mapWidth);
	var mapTiles = makeRiver(parsedTiles, mapHeight, mapWidth, tileType);
	drawRiver(mapTiles);
	makeStyles(parsedTiles);
});

/* TO DO */
/* fix under_score vs camelCase conflict */
/* and remember that layering is now done in the lazy way: forest hardcoded on bottom */
/* definitely fix mysql under_score vs css hyphen-ate conflict */

function drawMap(parsedTiles, mapHeight, mapWidth) {
	for (let r = 0; r < mapHeight; r++) {
		$("table#map").append("<tr id=row-"+r+"></tr>");
		for (let d = 0; d < mapWidth; d++) {
			$("tr#row-"+r).append('<td class="'+parsedTiles[0].fields.tile_name+'" id="col-'+d+'"></td>');
		}
	}
}

function drawRiver(mapTiles) {
	for (let i = 0; i < mapTiles.length; i++) {
		let tile = mapTiles[i]
		replaceTile(tile.name, tile.y, tile.x);
	}
}

function replaceTile(tile_name, r, d) {
	$("tr#row-"+r+" > td#col-"+d).replaceWith('<td class="'+tile_name+'" id="col-'+d+'"></td>');
}

function makeRiver(parsedTiles, mapHeight, mapWidth, tileType) {
	var riverTiles = parsedTiles.filter(function(tile) {
		return tile.fields.tile_type == tileType;
	});
	var randomTile = riverTiles[Math.floor(Math.random()*riverTiles.length)].fields;
	
	var r = Math.floor(Math.random() * mapHeight);
	var d = Math.floor(Math.random() * mapWidth);
	var mapTiles = [{x:d, y:r, name:randomTile.tile_name}];
	
	var seedEnds = findEnds(mapTiles[0]);
	while (seedEnds.length > 0) {
		var nextTile = seedEnds.pop();
		if (nextTile.x < 0 || nextTile.x >= mapWidth || nextTile.y < 0 || nextTile.y >= mapHeight) {
			continue;
		}
		if (isOpen(nextTile, mapTiles) == false) {
			mapTiles=[];
			makeRiver(parsedTiles, mapHeight, mapWidth);
		} else {
			var neighbors = getOpenNeighbors(nextTile, mapTiles, mapHeight, mapWidth)
			if (neighbors.length === 0) {
				mapTiles=[];
                console.log("No neighbors");
				/* this return thing is temporary: find out why console.log(neighbors) is 0 sometimes! */
				return makeRiver(parsedTiles, mapHeight, mapWidth);
			}
			console.log(neighbors);
			var randomNeighbor = neighbors[Math.floor(Math.random()*neighbors.length)];
			var newPass = [nextTile.pass, randomNeighbor.pass];
			var order = ['n','s','e','w'];
			newPass.sort(function(a, b) {
				return order.indexOf(a) - order.indexOf(b)
			});
			mapTiles.push({x:nextTile.x, y:nextTile.y, name:("river_"+newPass.join(""))});
            console.log(mapTiles[mapTiles.length-1]);
			switch (true) {
				case (randomNeighbor.pass.indexOf("n") != -1):
					randomNeighbor.pass="s"; break;
				case (randomNeighbor.pass.indexOf("s") != -1):
					randomNeighbor.pass="n"; break;
				case (randomNeighbor.pass.indexOf("e") != -1):
					randomNeighbor.pass="w"; break;
				case (randomNeighbor.pass.indexOf("w") != -1):
					randomNeighbor.pass="e"; break;
			}
			seedEnds.push(randomNeighbor);
		}
	}
	return mapTiles;
}

function findEnds(seed) {
	var directions = seed.name.substr(6).split('');
	var seedEnds = []
	if (directions.indexOf("n") != -1) {
		seedEnds.push({x:seed.x, y:seed.y-1, pass:"s"});
	}
	if (directions.indexOf("s") != -1) {
		seedEnds.push({x:seed.x, y:seed.y+1, pass:"n"});
	}
	if (directions.indexOf("e") != -1) {
		seedEnds.push({x:seed.x+1, y:seed.y, pass:"w"});
	}
	if (directions.indexOf("w") != -1) {
		seedEnds.push({x:seed.x-1, y:seed.y, pass:"e"});
	}
	return seedEnds;
}

function getOpenNeighbors(tile, mapTiles, mapHeight, mapWidth) {
	var tiles = [
		{x:tile.x, y:tile.y-1, pass:"n"},
		{x:tile.x, y:tile.y+1, pass:"s"},
		{x:tile.x+1, y:tile.y, pass:"e"},
		{x:tile.x-1, y:tile.y, pass:"w"}
	];
	var openNeighbors = [];
	for (let i = 0; i < tiles.length; i++) {
		if (tiles[i].x < 0 || tiles[i] >= mapWidth || tiles[i] < 0 || tiles[i] >= mapHeight) {
			continue;
		}
		if (isOpen(tiles[i], mapTiles) == false) {
			continue;
		}
	   	if (tile.pass == tiles[i].pass) {
			continue;
		}
        openNeighbors.push(tiles[i]);
	}
	return openNeighbors;
}

function isOpen(tile, mapTiles) {
	for (let i = 0; i < mapTiles.length; i++) {
		if (tile.x == mapTiles[i].x && tile.y == mapTiles[i].y) {
			return false;
		}
	}
	return true;
}

function makeStyles(parsedTiles) {	
	var parsedTilesets = JSON.parse(tilesets.replace(/&quot;/g,'"'));
	var tilesetPath = parsedTilesets[0].fields.tileset_path;
	var resolution = parsedTilesets[0].fields.resolution;

	for (var j = 0; j < parsedTiles.length; j++) {
		let tile = parsedTiles[j].fields;
		$("."+tile.tile_name).css({
			"width": resolution.toString(),
			"height": resolution.toString(),
			"background-image": 'url(' + tilesetPath + '), url(' + tilesetPath + ')',
			"background-position": getSpriteCoord(tile, resolution)+", 0px 0px"
		});
	}
}

function getSpriteCoord(tile, resolution) {
	let x = resolution*(-1)*(tile.x_sprite-1);
	let y = resolution*(-1)*(tile.y_sprite-1);
	return (x + "px " + y + "px");
}
