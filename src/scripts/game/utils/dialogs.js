import { login, register } from '../../store/actions/requests';
import { changeMode } from '../../store/actions/actions';

function create(tag, className, id) {
  const elt = document.createElement(tag);
  if (className) elt.className = className;
  if (id) elt.id = id;
  return elt;
}

function makeInputLine(id) {
  const line = create('div', 'input-line');
  const labelContainer = create('span', 'label-container');
  const label = create('div', 'label');
  label.innerHTML = id.substring(0,8) === 'password' ? 'password' : id;
  const inputContainer = create('span', 'input-container');
  const input = create('input', 'input', id);
  if (id.substring(0,8) === 'password') input.type = 'password';
  labelContainer.append(label);
  inputContainer.append(input);
  line.append(labelContainer, inputContainer);
  return { line, input };
}

function makeButtons() {
  const submit = create('button', 'submit');
  submit.innerHTML = 'OK';
  const cancel = create('button', 'cancel');
  cancel.innerHTML = 'CANCEL';
  const buttons = create('div', 'buttons');
  buttons.append(submit, cancel);
  return { buttons, submit, cancel };
}

export function showLogin(store, dimCallback) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'login');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'LOGIN';
  const username = makeInputLine('username');
  const password = makeInputLine('password');
  const { buttons, submit, cancel } = makeButtons();

  const exitDialog = () => {
    dimCallback();
    container.removeChild(dialog);
  };

  submit.onclick = () => {
    const usernameText = username.input.value.slice(0);
    const passwordText = password.input.value.slice(0);
    store.dispatch(login(usernameText, passwordText, exitDialog));
  }

  cancel.onclick = exitDialog;

  const content = create('div', 'content');
  content.append(title, username.line, password.line, buttons);
  dialog.append(content);
}

export function showRegister(store, dimCallback) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'register');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'REGISTER';
  const username = makeInputLine('username');
  const email = makeInputLine('email');
  const password1 = makeInputLine('password1');
  const password2 = makeInputLine('password2');
  const { buttons, submit, cancel } = makeButtons();

  const exitDialog = () => {
    dimCallback();
    container.removeChild(dialog);
  };

  submit.onclick = () => {
    const usernameText = username.input.value.slice(0);
    const emailText = email.input.value.slice(0);
    const passwordText = password1.input.value.slice(0);
    store.dispatch(register(usernameText, emailText, passwordText, exitDialog));
  }

  cancel.onclick = exitDialog;

  const content = create('div', 'content');
  content.append(
    title, username.line, email.line, password1.line, password2.line, buttons
  );
  dialog.append(content);
}
