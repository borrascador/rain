$(document).ready(function(){
	var mapHeight = 7;
	var mapWidth  = 7;
    var tileType  = "road"
	
	var parsedTiles = JSON.parse(tiles.replace(/&quot;/g,'"'));
	drawMap(parsedTiles, mapHeight, mapWidth);
	var mapTiles = makePaths(parsedTiles, mapHeight, mapWidth, tileType);
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

function makePaths(parsedTiles, mapHeight, mapWidth, tileType) {
	var pathTileset = parsedTiles.filter(function(tile) {
		return tile.fields.tile_type == tileType;
	});
	var randomTile = pathTileset[Math.floor(Math.random()*pathTileset.length)].fields;
	
	var r = Math.floor(Math.random() * mapHeight);
	var d = Math.floor(Math.random() * mapWidth);
	var mapTiles = [{x:d, y:r, name:randomTile.tile_name}];

	
	var seedEnds = findEnds(mapTiles[0]);
	while (seedEnds.length > 0) {
		var tile = seedEnds.pop();

		if (tile.x < 0 || tile.x >= mapWidth || tile.y < 0 || tile.y >= mapHeight) {
			continue;
		}

        var openTiles = getOpenNeighbors(tile, mapTiles, mapHeight, mapWidth)
        if (openTiles.length === 0) {
            mapTiles=[];
            return makePaths(parsedTiles, mapHeight, mapWidth, tileType);
        }
        var nextTile = openTiles[Math.floor(Math.random()*openTiles.length)];
        

        mapTiles.push({x:tile.x, y:tile.y, name:(tileType+"_"+nextTile.pass.join(""))});
        switch (true) {
            case (nextTile.pass.indexOf("n") != -1):
                nextTile.pass="s"; break;
            case (nextTile.pass.indexOf("s") != -1):
                nextTile.pass="n"; break;
            case (nextTile.pass.indexOf("e") != -1):
                nextTile.pass="w"; break;
            case (nextTile.pass.indexOf("w") != -1):
                nextTile.pass="e"; break;
        }

        if (nextTile.pass.length < 3) {
            seedEnds.push(nextTile);
        }
	}
	return mapTiles;
}

function findEnds(seed) {
	var directions = splitPass(seed);
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
        
        var nextPass = findPass(tiles[i], mapTiles);
        
        if (tile.pass == tiles[i].pass) {
            /* makes sure the path doesn't reverse on its source */
			continue;
		}

		if (nextPass.length > 0) {
            /* makes sure that the path doesn't go to an onuccupied space */
            tiles[i].pass = nextPass; 
		} else {
            tiles[i].pass = [tile.pass, tiles[i].pass];
        }

        var mPass = ["n","s","e","w","ns","ne","nw","sw","se","ew","nse","nsw","new","sew","nsew"];
        tiles[i].pass.sort(function(a, b) {
            return mPass.indexOf(a) - mPass.indexOf(b)
        });
        tiles[i].pass.filter(function(a, b) {
            return (a == b) ? null : a;
        });
	    
        openNeighbors.push(tiles[i]);
	}
	return openNeighbors;
}

function findPass(tile, mapTiles) {
	for (let i = 0; i < mapTiles.length; i++) {
		if (tile.x == mapTiles[i].x && tile.y == mapTiles[i].y) {
		    return splitPass(mapTiles[i]);
        }
	}
    return [];
}

function splitPass(tile) {
    let tileType = "road";
    return tile.name.substr(tileType.length+1).split('');
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
