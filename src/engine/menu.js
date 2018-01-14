//
// Menu object
//

function Menu(width, height) {
  // Set button properties
  this.buttons = [
    { text : 'INFO', mode : 'text', pos : null, link: 3 },
    { text : 'SCI', mode : 'map', pos : { x: 4, y: 6 }, link: null },
    { text : 'VIL', mode : 'map', pos : { x: 14, y: 10 }, link: null },
    { text : 'LOG', mode : 'map', pos : { x: 8, y: 13 }, link: null }
  ];
  this.buttonSize = 120;
  this.width = width;
  this.height = height;
}

Menu.prototype.screenToButton = function (x, y) {
  let buttonIndex = Math.floor(y / this.buttonSize);
  let clickedButton = this.buttons[buttonIndex];
  return clickedButton;
}

Menu.prototype.hasClick = function (x, y) {
  let validX = (x >= (this.width - this.buttonSize)) && (x < this.width);
  let validY = (y >= 0) && (y < this.height);
  return validX && validY;
}

module.exports = Menu;
