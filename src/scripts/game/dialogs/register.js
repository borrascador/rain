import { create, makeInputLine, makeButtons } from './utils';
import { register } from '../../store/actions/requests';

export function showRegister(store, setDim) {
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

  const parentDim = (dim) => {
    dialog.style.filter = dim && 'brightness(0.2)' || 'brightness(1)';
  };

  const exitDialog = () => {
    setDim(false);
    container.contains(dialog) && container.removeChild(dialog);
  };

  submit.onclick = () => {
    const usernameText = username.input.value.slice(0);
    const emailText = email.input.value.slice(0);
    const passwordText = password1.input.value.slice(0);
    store.dispatch(register(usernameText, emailText, passwordText, parentDim, exitDialog));
  }

  cancel.onclick = exitDialog;

  const content = create('div', 'content');
  content.append(
    title, username.line, email.line, password1.line, password2.line, buttons
  );
  dialog.append(content);
}
