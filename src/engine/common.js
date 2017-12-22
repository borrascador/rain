//
// Map object
//

import tiles from './tiles.json';
import map from './map.json';

map.getTile = function (layer, col, row) {
  let id = this.layers[layer][row * map.cols + col];
  return tiles[id-1];
}

//
// Asset loader
//

var Loader = {
  images: {}
};

import src from '../images/tileset-small.png';

Loader.loadImage = function (key, src) {
  var img = new Image();

  var d = new Promise(function (resolve, reject) {
    img.onload = function () {
      this.images[key] = img;
      resolve(img);
    }.bind(this);

    img.onerror = function () {
      reject('Could not load image: ' + src);
    };
  }.bind(this));

  img.src = src;
  return d;
};

Loader.getImage = function (key) {
  return (key in this.images) ? this.images[key] : null;
};

//
// Mouse handler
//

// TODO: Decide how to split click-handling between Game class and
// this Mouse handler
var Mouse = {};

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
}

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

//
// Camera
//

function Camera(map, width, height) {
  // x and y are starting position for map
  this.x = ((map.cols * map.tsize) - width) / 2;
  this.y = ((map.rows * map.tsize) - height) / 2;
  this.width = width;
  this.height = height;
  this.maxX = map.cols * map.tsize - width;
  this.maxY = map.rows * map.tsize - height;
} 

Camera.SPEED = 500; // pixels per second

Camera.prototype.move = function (delta, dirx, diry) {
  // move camera
  this.x += dirx * Camera.SPEED * delta;
  this.y += diry * Camera.SPEED * delta;
  // clamp values
  // subtracting 1 from this.maxX and this.maxY solved visual bugs
  this.x = Math.max(0, Math.min(this.x, this.maxX));
  this.y = Math.max(0, Math.min(this.y, this.maxY));
};

Camera.prototype.worldToScreen = function (x, y) {
  return {x: x - this.x, y: y - this.y};
};

Camera.prototype.screenToWorld = function (x, y) {
  return {x: x + this.x, y: y + this.y};
};

Camera.prototype.screenToTile = function (x, y) {
  return {
    x: Math.ceil((x + this.x) / map.tsize),
    y: Math.ceil((y + this.y) / map.tsize)
  }
};

//
// Game object
//

var Game = {};

Game.run = function (context, canvas) {
  this.width = canvas.width;
  this.height = canvas.height;
  this.canvas = canvas;
  this.ctx = context;
  this._previousElapsed = 0;

  this.mode = 'map';

  var p = this.load();
  Promise.all(p).then(function (loaded) {
    this.init();
    window.requestAnimationFrame(this.tick);
  }.bind(this));
};

Game.tick = function (elapsed) {
  window.requestAnimationFrame(this.tick);

  // clear previous frame
  this.ctx.clearRect(0, 0, this.width, this.height);

  // compute delta time in seconds -- also cap it
  var delta = (elapsed - this._previousElapsed) / 1000.0;
  delta = Math.min(delta, 0.25); // maximum delta of 250 ms
  this._previousElapsed = elapsed;

  this.update(delta);
  this.render();
}.bind(Game);

Game.load = function () {
  return [
    Loader.loadImage('tiles', src),
  ];
};

Game.init = function () {
  this.tileAtlas = Loader.getImage('tiles');
  this.camera = new Camera(map, this.width, this.height);
  Keyboard.listenForEvents([
      Keyboard.LEFT, Keyboard.RIGHT, 
      Keyboard.UP, Keyboard.DOWN, 
      Keyboard.PLUS, Keyboard.MINUS
  ]);
  this.canvas.addEventListener(
      'click', this.logTileClick.bind(this), false
  );
};

Game.logTileClick = function (event) {
  if (this.mode === 'map') {
    let rect = this.canvas.getBoundingClientRect();
    let x = Math.floor(event.clientX - rect.left);
    let y = Math.floor(event.clientY - rect.top);
    let tile = this.camera.screenToTile(x, y);
    console.log("x: " + tile.x + " y: " + tile.y);
  }
}

Game.update = function (delta) {
  if (this.mode === 'map') {
    // handle camera movement with arrow keys
    var dirx = 0;
    var diry = 0;
    if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
    if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
    if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
    if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }
   
    this.camera.move(delta, dirx, diry);
  }

  if (Keyboard.isDown(Keyboard.PLUS)) { this.mode = 'map'; }
  if (Keyboard.isDown(Keyboard.MINUS)) { this.mode = 'text'; }
};

Game._drawLayer = function (layer) {
  var startCol = Math.floor(this.camera.x / map.tsize);
  var endCol = startCol + (this.camera.width / map.tsize) + 1;
  var startRow = Math.floor(this.camera.y / map.tsize);
  var endRow = startRow + (this.camera.height / map.tsize) + 1;
  var offsetX = -this.camera.x + startCol * map.tsize;
  var offsetY = -this.camera.y + startRow * map.tsize;
  for (var c = startCol; c <= endCol; c++) {
    for (var r = startRow; r <= endRow; r++) {
      var tile = map.getTile(layer, c, r);
      var x = (c - startCol) * map.tsize + offsetX;
      var y = (r - startRow) * map.tsize + offsetY;
      if (tile === undefined) continue;
      if (tile.id >= 0) { // 0 => empty tile
        this.ctx.drawImage(
          this.tileAtlas, // image
          (tile.coords[0]-1) * map.tsize, // source x
          (tile.coords[1]-1) * map.tsize, // source y
          map.tsize, // source width
          map.tsize, // source height
          Math.round(x),  // target x
          Math.round(y), // target y
          map.tsize, // target width
          map.tsize // target height
        );
      }
    }
  }
};

Game._drawTextBackground = function () {
  this.ctx.fillStyle = '#000';
  this.ctx.fillRect(0, 0, this.width, this.height);
};

import events from './events.json';

Game._drawTextPayload = function (node) {
  let text = events[node].text;
  let options = events[node].children;

  let size = 32;
  this.ctx.font = (size - 2) + 'px MECC';
  this.ctx.fillStyle = '#FFF';
  
  let line = 2;
  for (let i=0; i<text.length; i++) {
    this.ctx.fillText(text[i], size, line*size);
    line += 2;
  }

  for (let i=0; i<options.length; i++) {
    let optionText = (i+1)+". "+options[i].text;
    this.ctx.fillText(optionText, 2*size, line*size);
    line++;
  }
  line++;

  this.ctx.fillText("What is your choice? _", size, line*size);
};

Game.render = function () {
  if (this.mode === 'map') {
    // draw map background layer
    this._drawLayer(0);
    // draw map top layer
    this._drawLayer(1); 
  } else if (this.mode === 'text') {
    // draw text layer with background
    this._drawTextBackground();
    this._drawTextPayload(3);
  }
};

//
// start up function
//

window.onload = function () {
  var canvas = document.getElementById('demo')
  var context = canvas.getContext('2d');
  Game.run(context, canvas);
};
