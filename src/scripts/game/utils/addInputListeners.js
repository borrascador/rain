import {
  keyDown,
  keyUp,
  mouseDown,
  mouseMove,
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
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    dispatch(mouseDown(x, y));
  }, false);

  canvas.addEventListener('mousemove', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    dispatch(mouseMove(x, y));
  }, false);

  canvas.addEventListener('mouseup', (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    dispatch(mouseUp(x, y));
  }, false);
}
