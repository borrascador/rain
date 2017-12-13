import src from '../images/tileset-small.png';

//
// array of tiles objects
//

var tiles = [
  {
    id: 1,
    type: ['forest'],
    tag: 'f',
    coords: [1,1],
    nodes: []
  }, {
    id: 2,
    type: ['road'],
    tag: 'r',
    coords: [2,1],
    nodes: [[0,-1],[0,1]]
  }, {
    id: 3,
    type: ['road'],
    tag: 'r',
    coords: [3,1],
    nodes: [[-1,0],[1,0]]
  }, {
    id: 4,
    type: ['river'],
    tag: 'w',
    coords: [4,1],
    nodes: [[0,1],[0,-1]]
  }, {
    id: 5,
    type: ['river'],
    tag: 'w',
    coords: [5,1],
    nodes: [[1,0],[-1,0]]
  }, {
    id: 6,
    type: ['plain'],
    tag: 'p',
    coords: [1,2],
    nodes: []
  }, {
    id: 7,
    type: ['road'],
    tag: 'r',
    coords: [2,2],
    nodes: [[1,0],[0,1]]
  }, {
    id: 8,
    type: ['road'],
    tag: 'r',
    coords: [3,2],
    nodes: [[-1,0],[0,1]]
  }, {
    id: 9,
    type: ['river'],
    tag: 'w',
    coords: [4,2],
    nodes: [[1,0],[0,1]]
  }, {
    id: 10,
    type: ['river'],
    tag: 'w',
    coords: [5,2],
    nodes: [[-1,0],[0,1]]
  }, {
    id: 11,
    type: ['camp','road'],
    tag: 'L',
    coords: [1,3],
    nodes: [[-1,0],[1,0]]
  }, {
    id: 12,
    type: ['road'],
    tag: 'r',
    coords: [2,3], 
    nodes: [[1,0],[0,-1]]
  }, {
    id: 13,
    type: ['road'],
    tag: 'r',
    coords: [3,3],
    nodes: [[-1,0],[0,-1]]
  }, {
    id: 14,
    type: ['river'],
    tag: 'w',
    coords: [4,3],
    nodes: [[1,0],[0,-1]]
  }, {
    id: 15,
    type: ['river'],
    tag: 'w',
    coords: [5,3],
    nodes: [[-1,0],[0,-1]]
  }, {
    id: 16,
    type: ['camp','road'],
    tag: 'C',
    coords: [1,4],
    nodes: [[-1,0],[1,0]]
  }, {
    id: 17,
    type: ['road'],
    tag: 'r',
    coords: [2,4], 
    nodes: [[-1,0],[1,0],[0,1]]
  }, {
    id: 18,
    type: ['road'],
    tag: 'r',
    coords: [3,4],
    nodes: [[-1,0],[0,-1],[0,1]]
  }, {
    id: 19,
    type: ['river','road'],
    tag: 'X',
    coords: [4,4],
    nodes: [[1,0],[0,1],[-1,0],[0,-1]]
  }, {
    id: 20,
    type: ['river', 'road'],
    tag: 'X',
    coords: [5,4],
    nodes: [[1,0],[0,1],[-1,0],[0,-1]]
  }, {
    id: 21, 
    type: ['camp','river'],
    tag: 'T',
    coords: [1,5],
    nodes: [[-1,0],[1,0]]
  }, { 
    id: 22,
    type: ['road'],
    tag: 'r',
    coords: [2,5],
    nodes: [[1,0],[0,-1],[0,1]]
  }, {
    id: 23,
    type: ['road'],
    tag: 'r',
    coords: [3,5],
    nodes: [[-1,0],[0,-1],[1,0]]
  }, {
    id: 24,
    type: ['road'],
    tag: 'X',
    coords: [4,5],
    nodes: [[1,0],[0,1],[-1,0],[0,-1]]
  }, {
    id: 25,
    type: [],
    tag: ' ',
    coords: [5,5],
    nodes: []
  }, {
    id: 26,
    type: ['ui'],
    tag: '<',
    coords: [1,6],
    nodes: []
  }, {
    id: 27,
    type: ['ui'],
    tag: 'v',
    coords: [2,6],
    nodes: []
  }, {
    id: 28,
    type: ['ui'],
    tag: '^',
    coords: [3,6],
    nodes: []
  }, {
    id: 29,
    type: ['ui'],
    tag: '>',
    coords: [4,6],
    nodes: []
  }, {
    id: 30,
    type: ['ui'],
    tag: 'P',
    coords: [5,6],
    nodes: []
  }
];

//
// map object
//

var map = {
  cols: 20,
  rows: 20,
  tsize: 128,
  layers: [

    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 

    [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 3, 3, 16, 3, 3, 24, 3, 3, 3, 3, 8, 0, 0, 0, 0, 0, 0, 0, 0, 14, 5, 10, 0, 0, 0, 2, 0, 0, 0, 0, 12, 3, 3, 3, 8, 0, 0, 0, 0, 0, 0, 14, 10, 0, 0, 2, 0, 0, 9, 10, 0, 0, 0, 0, 12, 8, 0, 0, 0, 0, 0, 9, 15, 0, 0, 2, 9, 10, 4, 14, 10, 0, 0, 0, 0, 12, 17, 3, 3, 0, 0, 14, 5, 10, 9, 20, 15, 14, 15, 0, 14, 5, 21, 10, 0, 0, 2, 0, 0, 0, 0, 0, 0, 14, 15, 2, 0, 0, 0, 0, 0, 0, 0, 4, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 14, 10, 9, 20, 10, 0, 0, 0, 0, 0, 0, 0, 22, 11, 3, 0, 0, 0, 0, 0, 0, 14, 15, 2, 14, 5, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 18, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 24, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
  ],
  getTile: function (layer, col, row) {
    let id = this.layers[layer][row * map.cols + col];
    return tiles[id-1];
  }
};

//
// Asset loader
//

var Loader = {
  images: {}
};

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

var Mouse = {};

Mouse._buttons = {};

Mouse.listenForEvents = function (buttons) {
  window.addEventListener('click', this._onClick.bind(this));

  buttons.forEach(function (button) {
    this._buttons[button] = false;
  }.bind(this));
}

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

Camera.SPEED = 768; // pixels per second

Camera.prototype.move = function (delta, dirx, diry) {
  // move camera
  this.x += dirx * Camera.SPEED * delta;
  this.y += diry * Camera.SPEED * delta;
  // clamp values
  // subtracting 1 from this.maxX and this.maxY solved visual bugs
  this.x = Math.max(0, Math.min(this.x, this.maxX - 1));
  this.y = Math.max(0, Math.min(this.y, this.maxY - 1));
};

//
// Game object
//

var Game = {};

Game.run = function (context) {
  this.ctx = context;
  this._previousElapsed = 0;

  var p = this.load();
  Promise.all(p).then(function (loaded) {
    this.init();
    window.requestAnimationFrame(this.tick);
  }.bind(this));
};

Game.tick = function (elapsed) {
  window.requestAnimationFrame(this.tick);

  // clear previous frame
  this.ctx.clearRect(0, 0, 1024, 768);

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
  Keyboard.listenForEvents([
    Keyboard.LEFT, Keyboard.RIGHT, 
    Keyboard.UP, Keyboard.DOWN, 
    Keyboard.PLUS, Keyboard.MINUS
  ]);
  this.tileAtlas = Loader.getImage('tiles');
  // Viewport is 1024px by 768px
  this.camera = new Camera(map, 1024, 768);
};

Game.update = function (delta) {
  // handle camera movement with arrow keys
  var dirx = 0;
  var diry = 0;
  if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
  if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
  if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
  if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }
 
  var zoom = 1; 
  if (Keyboard.isDown(Keyboard.PLUS)) { zoom = 1.5; }
  if (Keyboard.isDown(Keyboard.MINUS)) { zoom = 0.5; }

  this.camera.move(delta, dirx, diry);
};

Game._drawLayer = function (layer) {
  var startCol = Math.floor(this.camera.x / map.tsize);
  var endCol = startCol + (this.camera.width / map.tsize);
  var startRow = Math.floor(this.camera.y / map.tsize);
  var endRow = startRow + (this.camera.height / map.tsize);
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

Game.render = function () {
  // draw map background layer
  this._drawLayer(0);
  // draw map top layer
  this._drawLayer(1);
};

//
// start up function
//

window.onload = function () {
  var context = document.getElementById('demo').getContext('2d');
  Game.run(context);
};
