import {
  keyDown,
  keyUp,
  translateCanvasStart,
  translateCanvas,
  translateCanvasEnd,
  click,
  addTiles,
  removeTiles,
} from './actions/actions';

export default function addInputListeners (window, canvas, store) {
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
    store.dispatch(click(x, y));
  }, false);
}