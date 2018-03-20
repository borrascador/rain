import {
  keyDown,
  keyUp,
  mouseDown,
  drag,
  mouseUp,
} from '../../store/actions/actions';

export default function addInputListeners (dispatch, canvas) {
  window.addEventListener('keydown', (event) => {
    dispatch(keyDown(event.key));
  }, false);

  window.addEventListener('keyup', (event) => {
    dispatch(keyUp(event.key));
  }, false);

  canvas.addEventListener('mousedown', (event) => {
    dispatch(mouseDown(event.x, event.y));
  }, false);

  canvas.addEventListener('mousemove', (event) => {
    dispatch(drag(event.x, event.y));
  }, false);

  canvas.addEventListener('mouseup', (event) => {
    dispatch(mouseUp(event.x, event.y));
  }, false);
}
