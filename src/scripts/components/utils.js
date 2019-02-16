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

export const findTile = (tiles, x, y) => (
  tiles.find(tile => x === tile.x && y === tile.y)
);

export const getRandomInt = max => (
  Math.floor(Math.random() * Math.floor(max))
);
