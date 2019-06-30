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
export const findTile = (tiles, x, y) => (
  tiles.find(tile => x === tile.x && y === tile.y)
);

export const convertTileCoords = (col, row) => ({
  xPos: Math.floor(col / 64),
  yPos: Math.floor(row / 64),
  xCoord: col % 64,
  yCoord: row % 64,
});

export const findGroundTile = (tiles, col, row) => {
  const {
    xPos, yPos, xCoord, yCoord,
  } = convertTileCoords(col, row);
  const superTile = tiles.find(({ x, y }) => x === xPos && y === yPos);
  if (superTile) {
    return superTile.ground.find(({ x, y }) => x === xCoord && y === yCoord);
  }
  return undefined;
};

export const findTreeTile = (tiles, col, row) => {
  const {
    xPos, yPos, xCoord, yCoord,
  } = convertTileCoords(col, row);
  const superTile = tiles.find(({ x, y }) => x === xPos && y === yPos);
  if (superTile) {
    return superTile.trees.find(({ x, y }) => x === xCoord && y === yCoord);
  }
  return undefined;
};

export const getRandomInt = max => (
  Math.floor(Math.random() * Math.floor(max))
);
