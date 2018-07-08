// TODO: Is it a good idea to start using this?
export const addCoords = (button, coords) => {
  const props = ['xPos', 'yPos', 'width', 'height'];
  if (!props.every(prop => Object.keys(button).includes(prop))) {
    return Object.assign({}, button, coords);
  }
};

export const screenToTextButtonId = (x, y, list) => {
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

export const screenToImageButtonId = (x, y, list) => {
  const selectedButton = list.find(button => {
    return (
      x >= button.xPos && x <= (button.xPos + button.width) &&
      y >= button.yPos && y <= (button.yPos + button.height)
    );
  });
  return selectedButton && selectedButton.id || null;
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
