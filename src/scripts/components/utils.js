export const screenToTextButtonId = (x, y, list) => {
  const selectedButton = list.find(button => (
    x >= button.xPos && x <= (button.xPos + button.width)
      && y <= button.yPos && y >= (button.yPos - button.height)
  ));
  return selectedButton ? selectedButton.id : null;
};

export const screenToTextButton = (x, y, list) => {
  const selectedButton = list.find(button => (
    x >= button.xPos && x <= (button.xPos + button.width)
      && y <= button.yPos && y >= (button.yPos - button.height)
  ));
  return selectedButton || null;
};

export const screenToImageButtonId = (x, y, list) => {
  const selectedButton = list.find(button => (
    x >= button.xPos && x <= (button.xPos + button.width)
      && y >= button.yPos && y <= (button.yPos + button.height)
  ));
  return selectedButton ? selectedButton.id : null;
};

export const screenToImageButton = (x, y, list) => {
  const selectedButton = list.find(button => (
    x >= button.xPos && x <= (button.xPos + button.width)
      && y >= button.yPos && y <= (button.yPos + button.height)
  ));
  return selectedButton || null;
};

export const getItemById = (array, id) => array.find(x => x.id === id);

export const findTile = (tiles, x, y) => (
  tiles.find(tile => x === tile.x && y === tile.y)
);
