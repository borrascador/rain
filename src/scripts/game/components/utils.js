const addButtonCoords = (option, buttonCoords) => {
  const props = ['xPos', 'yPos', 'width', 'height'];
  if (!props.every(prop => Object.keys(option).includes(prop))) {
    Object.assign(option, buttonCoords);
  }
};

const screenToTextId = (x, y, list) => {
  const selectedButton = list.find(button => {
    return (
      x >= button.xPos && x <= (button.xPos + button.width) &&
      y <= button.yPos && y >= (button.yPos - button.height)
    );
  });
  return selectedButton && selectedButton.id || null;
};

const screenToButtonId = (x, y, list) => {
  const selectedButton = list.find(button => {
    return (
      x >= button.xPos && x <= (button.xPos + button.width) &&
      y >= button.yPos && y <= (button.yPos + button.height)
    );
  });
  return selectedButton && selectedButton.id || null;
};

const getItemById = (array, id) => {
  return array.find(x => x.id === id);
}

export {addButtonCoords, screenToTextId, screenToButtonId, getItemById};
