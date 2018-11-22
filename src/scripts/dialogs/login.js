import { create, makeInputLine, makeButtons } from './utils';
import { login } from '../actions/requests';

export default function loginDialog(store, setDim) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'login');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'LOGIN';
  const username = makeInputLine('username');
  const password = makeInputLine('password');
  const { buttons, submit, cancel } = makeButtons();

  setDim(true);

  const dimCallback = (dim) => {
    setDim(dim);
    dialog.style.filter = dim ? 'brightness(0.2)' : 'brightness(1)';
  };

  const exitDialog = () => {
    if (container.children.length === 2) setDim(false);
    if (container.contains(dialog)) container.removeChild(dialog);
  };

  submit.onclick = () => {
    const usernameText = username.input.value.slice(0);
    const passwordText = password.input.value.slice(0);
    store.dispatch(login(usernameText, passwordText, dimCallback, exitDialog));
  };

  cancel.onclick = exitDialog;

  const content = create('div', 'content');
  content.append(title, username.line, password.line, buttons);
  dialog.append(content);
}
