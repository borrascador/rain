import { createStore } from 'redux';
import rootReducer from './reducers/index';
import {drawMap} from './draw.js';
import addInputListeners from './addInputListeners';
import src from '../images/tileset-smaller.png';
import { loadImage, getImage } from './loader.js';

function runGame(canvas, ctx) {
  var draw = function() {
    var {input, map} = store.getState();  
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, 1, input.canvas.x, input.canvas.y);
    if (map.visible) drawMap(ctx, map, atlas);
  };

  var store = createStore(rootReducer);
  store.subscribe(draw);

  addInputListeners(window, canvas, store);
  
  var atlas;
  Promise.resolve(loadImage('tiles', src))
  .then((loaded) => {
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
