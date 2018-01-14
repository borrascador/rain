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

import Client from './client.js';
import src from '../images/tileset-small.png';
import Loader from './loader.js';
import { Mouse, Keyboard } from './input.js';
import Camera from './camera.js';
import Menu from './menu.js';
import Text from './text.js';

Game.run = function (canvas, context) {
  this.cvs = canvas;
  this.ctx = context;
  this._previousElapsed = 0;

  this.mode = 'text';
  this.currentEvent = '3';
  
  Client.connect();
  Client.requestEvent(this.currentEvent);

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
  this.menu = new Menu(this.cvs.width, this.cvs.height);
  this.text = new Text();
  let mapWidth = this.cvs.width - this.menu.buttonSize;
  this.camera = new Camera(map, mapWidth, this.cvs.height);
  Mouse.listenForEvents(this.cvs);
  Keyboard.listenForEvents([
      Keyboard.BACKSPACE, Keyboard.DELETE,
      Keyboard.ENTER, Keyboard.ESCAPE,
      Keyboard.LEFT, Keyboard.RIGHT,
      Keyboard.UP, Keyboard.DOWN,
      Keyboard.DIGIT0, Keyboard.DIGIT1,
      Keyboard.DIGIT2, Keyboard.DIGIT3,
      Keyboard.DIGIT4, Keyboard.DIGIT5,
      Keyboard.DIGIT6, Keyboard.DIGIT7,
      Keyboard.DIGIT8, Keyboard.DIGIT9,
      Keyboard.PLUS, Keyboard.MINUS
  ]);
};

Game.update = function (delta) {
  switch (this.mode) {
    case 'map':
      // handle camera movement with arrow keys
      let dirx = 0;
      let diry = 0;
      if (Keyboard.isDown(Keyboard.LEFT)) { dirx = -1; }
      if (Keyboard.isDown(Keyboard.RIGHT)) { dirx = 1; }
      if (Keyboard.isDown(Keyboard.UP)) { diry = -1; }
      if (Keyboard.isDown(Keyboard.DOWN)) { diry = 1; }

      this.camera.move(delta, dirx, diry);

      // handle mouse click
      if (Mouse.isClicked()) {
        let clickPos = Mouse.getClick();
        if (this.camera.hasClick(clickPos.x, clickPos.y)) {
          let tilePos = this.camera.screenToTile(clickPos.x, clickPos.y);
          console.log(tilePos);
          Client.sendTileClick(tilePos);
        } else if (this.menu.hasClick(clickPos.x, clickPos.y)) {
          let button = this.menu.screenToButton(clickPos.x, clickPos.y); 
          this.mode = button.mode;
          if (this.mode === 'map') {
            let screenPos = this.camera.tileToScreen(button.pos.x, button.pos.y);
            this.camera.focusTile(screenPos.x, screenPos.y);
          }
        }
      }
      break;

    case 'text':
      // handle keyboard events
      let selectedID = this.text.selectedID; 
      if (Keyboard.isDown(Keyboard.DIGIT1)) { selectedID = '1'; }
      if (Keyboard.isDown(Keyboard.DIGIT2)) { selectedID = '2'; }
      if (Keyboard.isDown(Keyboard.DIGIT3)) { selectedID = '3'; }
      if (Keyboard.isDown(Keyboard.DIGIT4)) { selectedID = '4'; }
      if (Keyboard.isDown(Keyboard.DIGIT5)) { selectedID = '5'; }
      if (Keyboard.isDown(Keyboard.DIGIT6)) { selectedID = '6'; }
      if (Keyboard.isDown(Keyboard.DIGIT7)) { selectedID = '7'; }
      if (Keyboard.isDown(Keyboard.DIGIT8)) { selectedID = '8'; }
      if (Keyboard.isDown(Keyboard.DIGIT9)) { selectedID = '9'; }
      if (Keyboard.isDown(Keyboard.ESCAPE)) { selectedID = null; }
      if (Keyboard.isDown(Keyboard.DELETE)) { selectedID = null; }
      if (Keyboard.isDown(Keyboard.BACKSPACE)) { selectedID = null; }
      
      if (selectedID !== this.text.selectedID) {
        this.text.selectOptionByID(selectedID);
      };

      // handle mouse click
      if (Mouse.isClicked()) {
        let clickPos = Mouse.getClick();
        let button = this.text.screenToButton(clickPos.x, clickPos.y);
        console.log(button);
        Client.sendClick(clickPos);
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

Game._drawTextPayload = function () {
  this.text.loadPayload(Client.payload);
  let payload = this.text.getPayload();

  let fontSize = 28;
  let lineSize = fontSize + 4;
  this.ctx.font = fontSize + 'px MECC';
  this.ctx.fillStyle = '#FFF';
  this.ctx.textAlign = 'start';
  this.ctx.textBaseline = 'alphabetic';

  let currentLine = 2;
  for (let i = 0; i < payload.text.length; i++) {
    this.ctx.fillText(payload.text[i], lineSize, currentLine * lineSize);
    currentLine += 2;
  }

  for (let i = 0; i < payload.options.length; i++) {
    if (this.text.checkSelected(payload.options[i])) {
      this.ctx.fillStyle = '#FF0';
    } else {
      this.ctx.fillStyle = '#FFF';
    }

    let optionText = payload.options[i].id + ". " + payload.options[i].text;
    this.ctx.fillText(optionText, 2 * lineSize, currentLine * lineSize);
    
    if (this.text.checkButtonCoords(payload.options[i]) === false) {
      let id = payload.options[i].id;
      this.text.mergeButtonCoords(id, {
        width: this.ctx.measureText(optionText).width,
        height: fontSize,
        xPos: 2 * lineSize,
        yPos: lineSize * currentLine
      });
    }  
    currentLine++;
  }
  currentLine++;

  this.ctx.fillStyle = '#FFF';
  console.log(this.text.selectedID);
  let displayID = (this.text.selectedID !== null) ? this.text.selectedID : '';
  let promptText = "What is your choice? " + displayID + "_";
  this.ctx.fillText(promptText, lineSize, currentLine * lineSize);
};

Game.render = function () {
  switch (this.mode) {

    case 'map':
      // draw map background layer
      this._drawLayer(0);
      // draw map top layer
      this._drawLayer(1);
      // draw Interface
      this._drawMenu();
      break;

    case 'text':
      if (Client.payload !== undefined) {
        // draw text layer with background
        this._drawTextBackground();
        this._drawTextPayload();
      }
      break;

    default:
      console.log('Error: invalid render mode');
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
