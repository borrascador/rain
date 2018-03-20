export default class Menu {
  constructor (store, width, height) {
    this.store = store;

    // Set button properties
    this.buttons = [
      { text : 'INFO', mode : 'text', pos : null, link: 3 },
      { text : 'VIL', mode : 'map', pos : { x: 14, y: 10 }, link: null },
      { text : 'LOG', mode : 'map', pos : { x: 8, y: 13 }, link: null },
      { text : 'SCI', mode : 'map', pos : { x: 4, y: 6 }, link: null },
    ];
    this.buttonSize = 120;
    this.width = width;
    this.height = height;
  }

  screenToButton (x, y) {
    const buttonIndex = Math.floor(y / this.buttonSize);
    const clickedButton = this.buttons[buttonIndex];
    return clickedButton;
  }

  hasClick (x, y) {
    const validX = (x >= (this.width - this.buttonSize)) && (x < this.width);
    const validY = (y >= 0) && (y < this.height);
    return validX && validY;
  }

  
}
