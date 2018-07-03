export const addButtonCoords = (option, buttonCoords) => {
  const props = ['xPos', 'yPos', 'width', 'height'];
  if (!props.every(prop => Object.keys(option).includes(prop))) {
    Object.assign(option, buttonCoords);
  }
};

// TODO: eventually replace above version with this:
export const addCoords = (button, coords) => {
  const props = ['xPos', 'yPos', 'width', 'height'];
  if (!props.every(prop => Object.keys(button).includes(prop))) {
    return Object.assign({}, button, coords);
  }
};

export const screenToTextId = (x, y, list) => {
  const selectedButton = list.find(button => {
    return (
      x >= button.xPos && x <= (button.xPos + button.width) &&
      y <= button.yPos && y >= (button.yPos - button.height)
    );
  });
  return selectedButton && selectedButton.id || null;
};

export const screenToTextButton = (x, y, list) => {
  const selectedButton = list.find(button => {
    return (
      x >= button.xPos && x <= (button.xPos + button.width) &&
      y <= button.yPos && y >= (button.yPos - button.height)
    );
  });
  return selectedButton || null;
};

export const screenToButtonId = (x, y, list) => {
  const selectedButton = list.find(button => {
    return (
      x >= button.xPos && x <= (button.xPos + button.width) &&
      y >= button.yPos && y <= (button.yPos + button.height)
    );
  });
  return selectedButton && selectedButton.id || null;
};

export const screenToButtonName = (x, y, list) => {
  const selectedButton = list.find(button => {
    return (
      x >= button.xPos && x <= (button.xPos + button.width) &&
      y >= button.yPos && y <= (button.yPos + button.height)
    );
  });
  return selectedButton && selectedButton.name || null;
};

export const screenToImageButton = (x, y, list) => {
  const selectedButton = list.find(button => {
    return (
      x >= button.xPos && x <= (button.xPos + button.width) &&
      y >= button.yPos && y <= (button.yPos + button.height)
    );
  });
  return selectedButton || null;
};

export const getItemById = (array, id) => {
  return array.find(x => x.id === id);
}
