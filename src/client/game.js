import { createStore } from 'redux';
import rootReducer from './reducers/index';
import {
  keyUp,
  keyDown,
  translateCanvasStart,
  translateCanvas,
  translateCanvasEnd,
  clickTile
} from './actions/actions';

import src from '../images/tileset-smaller.png';
import { loadImage, getImage } from './loader.js';

function runGame(canvas, ctx) {
  var draw = function() {
    var state = store.getState();
    for (const key in state.input.keys) {
      if (state.input.keys[key] === true) { console.log(key) };
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, 1, state.input.canvas.x, state.input.canvas.y);
    state.input.tiles.forEach((tile) => {
      ctx.drawImage(
        atlas,
        0 * tile.srcTileSize,
        0 * tile.srcTileSize,
        tile.srcTileSize,
        tile.srcTileSize,
        tile.pos.x * tile.mapTileSize,
        tile.pos.y * tile.mapTileSize,
        tile.mapTileSize,
        tile.mapTileSize
      );
      ctx.drawImage(
        atlas,
        tile.srcPos.x * tile.srcTileSize,
        tile.srcPos.y * tile.srcTileSize,
        tile.srcTileSize,
        tile.srcTileSize,
        tile.pos.x * tile.mapTileSize,
        tile.pos.y * tile.mapTileSize,
        tile.mapTileSize,
        tile.mapTileSize
      );
    });
  };

  var store = createStore(rootReducer);
  store.subscribe(draw);

  window.addEventListener('keydown', (event) => {
    store.dispatch(keyDown(event.key));
  }, false);

  window.addEventListener('keyup', (event) => {
    store.dispatch(keyUp(event.key));
  }, false);
  
  canvas.addEventListener('mousedown', (event) => {
    store.dispatch(translateCanvasStart(event.offsetX, event.offsetY));
  }, false);

  canvas.addEventListener('mousemove', (event) => {
    store.dispatch(translateCanvas(event.offsetX, event.offsetY));
  }, false);

  canvas.addEventListener('mouseup', () => {
    store.dispatch(translateCanvasEnd());
  }, false);

  canvas.addEventListener('click', (event) => {
    var rect = canvas.getBoundingClientRect();
    var x = Math.floor(event.clientX - rect.left);
    var y = Math.floor(event.clientY - rect.top);
    store.dispatch(clickTile(x, y));
  }, false);
  
  var atlas;
  var p = [loadImage('tiles', src)];
  Promise.all(p).then( (loaded) => {
    atlas = getImage('tiles');
    draw();
  });
}

window.onload = function() {
  var canvas = document.getElementById('demo');
  var ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;
  runGame(canvas, ctx);
}
