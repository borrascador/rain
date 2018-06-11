import configureStore from './store/store';
import RainGame from './game/index';

window.onload = function() {
  const store = configureStore();
  const canvas = document.getElementById('game');
  const ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  const rainGame = new RainGame(store, canvas, ctx);

  showLogin();

  rainGame.init();
}

function create(tag, className, id) {
  const elt = document.createElement(tag);
  if (className) elt.className = className;
  if (id) elt.id = id;
  return elt;
}

function showLogin() {
  const container = document.getElementById('container');
  const loginPopup = create('div', 'overlay', 'login');
  const content = create('div', 'content');
  const titleNode = create('div', 'title');
  const title = document.createTextNode('LOGIN');

  const buttons = create('div', 'buttons');
  const submitContainer = create('span', 'submit');
  const cancelContainer = create('span', 'cancel');
  buttons.appendChild(submitContainer);
  buttons.appendChild(cancelContainer);

  const submit = create('button');
  const submitText = document.createTextNode('OK');
  submit.appendChild(submitText);
  submitContainer.appendChild(submit);

  const cancel = create('button');
  const cancelText = document.createTextNode('CANCEL');
  cancel.appendChild(cancelText);
  cancelContainer.appendChild(cancel);

  titleNode.appendChild(title);
  content.appendChild(titleNode);
  content.appendChild(makeInputLine('username'));
  content.appendChild(makeInputLine('password'));
  content.append(buttons);
  loginPopup.appendChild(content);
  container.appendChild(loginPopup);
  // foo.style.backgroundColor = 'red';

  submit.onclick = () => container.removeChild(loginPopup);
  cancel.onclick = () => container.removeChild(loginPopup);
}

function makeInputLine(id) {
  const inputLine = create('div', 'input-line');
  const label = create('span', 'label');
  const labelText = document.createTextNode(id);
  const inputContainer = create('span', 'input-container');
  const input = create('input', 'input', id);
  if (id.substring(0,8) === 'password') input.type = 'password';
  label.appendChild(labelText);
  inputContainer.appendChild(input);
  inputLine.appendChild(label);
  inputLine.appendChild(inputContainer);
  return inputLine;
}
