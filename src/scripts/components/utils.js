export const checkTileCollision = (x, y, tile) => {
  const { destX, destY, destWidth, destHeight } = tile;
  if (
    x >= destX && x < (destX + destWidth)
    && y >= destY && y < (destY + destHeight)
  ) {
    return true;
  }
  return false;
};

export const checkImageCollision = (x, y, button) => {
  if (
    x >= button.xPos && x < (button.xPos + button.width)
    && y >= button.yPos && y < (button.yPos + button.height)
  ) {
    return true;
  }
  return false;
};

export const checkTextCollision = (x, y, button) => {
  if (
    x >= button.xPos && x < (button.xPos + button.width)
    && y <= button.yPos && y > (button.yPos - button.height)
  ) {
    return true;
  }
  return false;
};

export const screenToTile = (x, y, list) => (
  list.find(tile => checkTileCollision(x, y, tile))
);

export const screenToTextButton = (x, y, list) => (
  list.find(button => checkTextCollision(x, y, button))
);

export const screenToTextButtonId = (x, y, list) => {
  const selectedButton = screenToTextButton(x, y, list);
  return selectedButton ? selectedButton.id : null;
};

export const screenToImageButton = (x, y, list) => (
  list.find(button => checkImageCollision(x, y, button))
);

export const screenToImageButtonId = (x, y, list) => {
  const selectedButton = screenToImageButton(x, y, list);
  return selectedButton ? selectedButton.id : null;
};

export const getItemById = (array, id) => array.find(x => x.id === id);

// todo get rid of this
export const findTile_DEPRECATED = (tiles, x, y) => (
  tiles.find(tile => x === tile.x && y === tile.y)
);

export const colRowToCoords = (col, row) => ({
  xPos: Math.floor(col / 64),
  yPos: Math.floor(row / 64),
  xCoord: col % 64,
  yCoord: row % 64,
});

export const coordsToColRow = (xPos, yPos, xCoord, yCoord) => ({
  col: xPos * 64 + xCoord,
  row: yPos * 64 + yCoord,
});

// export const findGroundTile = (tiles, xPos, yPos, xCoord, yCoord) => {
//   const superTile = tiles.find(tile => tile.xPos === xPos && tile.yPos === yPos);
//   if (superTile) {
//     return superTile.ground.find(tile => tile.xCoord === xCoord && tile.yCoord === yCoord);
//   }
//   return undefined;
// };

// export const findTreeTile = (tiles, xPos, yPos, xCoord, yCoord) => {
//   const superTile = tiles.find(tile => tile.xPos === xPos && tile.yPos === yPos);
//   if (superTile) {
//     return superTile.trees.find(tile => tile.xCoord === xCoord && tile.yCoord === yCoord);
//   }
//   return undefined;
// };

export const findTile = (tiles, xPos, yPos, xCoord, yCoord) => {
  if (!tiles[xPos]) return;
  if (!tiles[xPos][yPos]) return;
  if (!tiles[xPos][yPos][xCoord]) return;
  if (!tiles[xPos][yPos][xCoord][yCoord]) return;
  return tiles[xPos][yPos][xCoord][yCoord];
};

export const searchTiles = (tiles, xPos, yPos, xCoord, yCoord) => (
  tiles.find((tile) => (
    xPos === tile.xPos
    && yPos === tile.yPos
    && xCoord === tile.xCoord
    && yCoord === tile.yCoord
  ))
);

export const matchTile = (tile1, tile2) => (
  tile1 && tile2
  && tile1.xPos === tile2.xPos
  && tile1.yPos === tile2.yPos
  && tile1.xCoord === tile2.xCoord
  && tile1.yCoord === tile2.yCoord
);

export const getRandomInt = max => (
  Math.floor(Math.random() * Math.floor(max))
);

export const getColoredImage = (inputImage) => {
  const canvas = document.createElement('canvas');
  canvas.width = inputImage.width;
  canvas.height = inputImage.height;

  const ctx = canvas.getContext("2d");
  ctx.drawImage(inputImage, 0, 0);
  
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const rgbaColor = { r: 64, g: 64, b: 256, a: 128 };

  for (var p = 0, len = data.length; p < len; p+=4) {
      if (data[p + 0] === 0) { continue; }
      data[p + 0] = rgbaColor.r;
      data[p + 1] = rgbaColor.g;
      data[p + 2] = rgbaColor.b;
      data[p + 3] = rgbaColor.a;
  }
  ctx.putImageData(imageData, 0, 0);
  return canvas

  // replace image source with canvas data
  // imgElement.src = canvas.toDataURL();
}
