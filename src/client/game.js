import { createStore } from 'redux';
import reducer from './reducer';

function runGame(canvas, ctx) {
  var draw = function() {
    var state = store.getState();
    for (const key in state.keys) {
      if (state.keys[key] === true) { console.log(key) };
    }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(1, 0, 0, 1, state.canvas.x, state.canvas.y);
    state.tiles.forEach((tile) => {
      ctx.fillStyle = tile.color;
      ctx.fillRect(tile.x, tile.y, tile.width, tile.height);
    });
  };

  var store = createStore(reducer);
  store.subscribe(draw);

  window.addEventListener('keydown', (event) => {
    store.dispatch({
      type: 'KEYDOWN',
      key: event.key,
    });
  }, false);

  window.addEventListener('keyup', (event) => {
    store.dispatch({
      type: 'KEYUP',
      key: event.key,
    });
  }, false);

  canvas.addEventListener('click', (event) => {
    let rect = canvas.getBoundingClientRect();
    let xClick = Math.floor(event.clientX - rect.left);
    let yClick = Math.floor(event.clientY - rect.top);
    store.dispatch({
      type: 'CLICK_TILE',
      xClick: xClick,
      yClick: yClick,
    });
  }, false);

  canvas.addEventListener('mousedown', (event) => {
    store.dispatch({
      type: 'TRANSLATE_CANVAS_START',
      xDragging: event.offsetX,
      yDragging: event.offsetY,
    });
  }, false);

  canvas.addEventListener('mousemove', (event) => {
    var state = store.getState();
    if (state.xDragging !== null && state.xDragging !== null) {
      store.dispatch({
        type: 'TRANSLATE_CANVAS',
        xDragging: event.offsetX,
        yDragging: event.offsetY,
      });
    }
  }, false);

  canvas.addEventListener('mouseup', (event) => {
    store.dispatch({
      type: 'TRANSLATE_CANVAS_END'
    });
  }, false);

  draw();
}

window.onload = function() {
  var canvas = document.getElementById('demo');
  var ctx = canvas.getContext("2d");
  runGame(canvas, ctx);
}
