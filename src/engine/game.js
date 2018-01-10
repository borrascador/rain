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
// Game object
//

var Game = {};

import src from '../images/tileset-small.png';
import Loader from './loader.js';
import { Mouse, Keyboard } from './input.js';
import Camera from './camera.js';
import Menu from './menu.js';
// import Text from './text.js';

import io from 'socket.io-client';

Game.connect = function() {
  this.socket = io.connect("http://localhost:4004");
  console.log("Attempting connection");

  this.socket.on('send id', function(data) {
    console.log('socket id: ' + JSON.stringify(data.id));
  });
}

Game.sendClick = function(pos) {
  this.socket.emit('send click', {
    pos: pos
  });
}

Game.run = function (canvas, context) {
  this.cvs = canvas;
  this.ctx = context;
  this._previousElapsed = 0;

  this.mode = 'map';

  this.connect();

  var p = this.load();
  Promise.all(p).then(function (loaded) {
    this.init();
    window.requestAnimationFrame(this.tick);
  }.bind(this));
};

Game.tick = function (elapsed) {
  window.requestAnimationFrame(this.tick);

  // clear previous frame
  this.ctx.clearRect(0, 0, this.cvs.width, this.cvs.height);

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
  this.menu = new Menu();
  let mapWidth = this.cvs.width - this.menu.buttonSize;
  this.camera = new Camera(map, mapWidth, this.cvs.height);
  Mouse.listenForEvents(this.cvs);
  Keyboard.listenForEvents([
      Keyboard.LEFT, Keyboard.RIGHT,
      Keyboard.UP, Keyboard.DOWN,
      Keyboard.PLUS, Keyboard.MINUS
  ]);
};

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

    // handle mouse click
    if (Mouse.isClicked()) {
      let clickPos = Mouse.getClick();
      if (clickPos.x < (this.cvs.width - this.menu.buttonSize)) {
        let tilePos = this.camera.screenToTile(clickPos.x, clickPos.y);
        console.log(tilePos);
      } else {
        let buttonIndex = Math.floor(clickPos.y / this.menu.buttonSize);
        let button = this.menu.buttons[buttonIndex];
        console.log(button);
        this.mode = button.mode;
        if (this.mode === 'map') {
          let screenPos = this.camera.tileToScreen(button.pos.x, button.pos.y);
          this.camera.focusTile(screenPos.x, screenPos.y);
        }
      }
    }
  } else if (this.mode === 'text') {
    // handle mouse click
    if (Mouse.isClicked()) {
      let clickPos = Mouse.getClick();
      console.log(clickPos);
      this.sendClick(clickPos);
      this.mode = 'map';
    }
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

Game._drawMenu = function () {
  // Make menu bar
  this.ctx.fillStyle = '#000';
  this.ctx.fillRect(
      this.cvs.width - this.menu.buttonSize, 0, this.cvs.width, this.cvs.height
  );

  for (let i = 0; i < this.menu.buttons.length; i++) {
    // Make button box
    this.ctx.strokeStyle = '#FFF';
    this.ctx.lineWidth = 4;
    let rectX = this.cvs.width - this.menu.buttonSize + 8;
    let rectY = (this.menu.buttonSize * i) + 8;
    let rectWidth = this.menu.buttonSize - 16;
    let rectHeight = this.menu.buttonSize - 16;
    this.ctx.strokeRect(rectX, rectY, rectWidth, rectHeight);

    // Make button text
    let buttonText = this.menu.buttons[i].text;
    this.ctx.font = '20px MECC';
    this.ctx.fillStyle = '#FFF';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText(buttonText, rectX+(rectWidth/2), rectY+(rectHeight/2));
  }
};

Game._drawTextBackground = function () {
  this.ctx.fillStyle = '#000';
  this.ctx.fillRect(0, 0, this.cvs.width, this.cvs.height);
};

import events from './events.json';

Game._drawTextPayload = function (node) {
  let text = events[node].text;
  let options = events[node].children;

  let size = 32;
  this.ctx.font = (size - 4) + 'px MECC';
  this.ctx.fillStyle = '#FFF';
  this.ctx.textAlign = 'start';
  this.ctx.textBaseline = 'alphabetic';

  let line = 2;
  for (let i = 0; i < text.length; i++) {
    this.ctx.fillText(text[i], size, line * size);
    line += 2;
  }

  for (let i = 0; i < options.length; i++) {
    let optionText = (i + 1) + ". " + options[i].text;
    this.ctx.fillText(optionText, 2 * size, line * size);
    line++;
  }
  line++;

  this.ctx.fillText("What is your choice? _", size, line * size);
};

Game.render = function () {
  if (this.mode === 'map') {
    // draw map background layer
    this._drawLayer(0);
    // draw map top layer
    this._drawLayer(1);
    // draw Interface
    this._drawMenu();
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
  Game.run(canvas, context);
};
