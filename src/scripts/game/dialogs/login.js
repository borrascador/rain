import { create, makeInputLine, makeButtons } from './utils';
import { login } from '../../store/actions/requests';

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
    container.contains(dialog) && container.removeChild(dialog);
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
