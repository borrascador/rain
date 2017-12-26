//
// Mouse handler
//

var Mouse = {};

Mouse._clicked = [];

Mouse.listenForEvents = function (canvas) {
  this.cvs = canvas
  this.cvs.addEventListener(
      'click', this.onClick.bind(this), false
  );
};

Mouse.onClick = function (event) {
  let rect = this.cvs.getBoundingClientRect();
  let xPos = Math.floor(event.clientX - rect.left);
  let yPos = Math.floor(event.clientY - rect.top);
  this._clicked.push( { x: xPos, y: yPos } );
};

Mouse.isClicked = function () {
  if (this._clicked.length > 0) {
    return true;
  } else {
    return false;
  }
};

Mouse.getClick = function () {
  return this._clicked.pop();
};

//
// Keyboard handler
//

var Keyboard = {};

Keyboard.LEFT = 37;
Keyboard.RIGHT = 39;
Keyboard.UP = 38;
Keyboard.DOWN = 40;
Keyboard.PLUS = 107;
Keyboard.MINUS = 109;

Keyboard._keys = {};

Keyboard.listenForEvents = function (keys) {
  window.addEventListener('keydown', this._onKeyDown.bind(this));
  window.addEventListener('keyup', this._onKeyUp.bind(this));

  keys.forEach(function (key) {
    this._keys[key] = false;
  }.bind(this));
};

Keyboard._onKeyDown = function (event) {
  var keyCode = event.keyCode;
  if (keyCode in this._keys) {
    event.preventDefault();
    this._keys[keyCode] = true;
  }
};

Keyboard._onKeyUp = function (event) {
  var keyCode = event.keyCode;
  if (keyCode in this._keys) {
    event.preventDefault();
    this._keys[keyCode] = false;
  }
};

Keyboard.isDown = function (keyCode) {
  if (!keyCode in this._keys) {
    throw new Error('Keycode ' + keyCode + ' is not being listened to');
  }
  return this._keys[keyCode];
};

module.exports = {
  Mouse,
  Keyboard
};
