import { create, makeInputLine, makeButtons } from './utils';
import { register } from '../../store/actions/requests';

export class RegisterDialog {
  constructor (store, setDim) {
    this.store = store;
    this.setDim = setDim;

    this.dimCallback = this.dimCallback.bind(this);
    this.exitDialog = this.exitDialog.bind(this);

    this.container = document.getElementById('container');
    this.dialog = create('div', 'dialog', 'register');
    this.container.append(this.dialog);

    const title = create('div', 'title');
    title.innerHTML = 'REGISTER';
    const username = makeInputLine('username');
    const email = makeInputLine('email');
    const password1 = makeInputLine('password1');
    const password2 = makeInputLine('password2');
    const { buttons, submit, cancel } = makeButtons();

    submit.onclick = this.submit;
    cancel.onclick = this.exitDialog;

    const content = create('div', 'content');
    content.append(
      title, username.line, email.line, password1.line, password2.line, buttons
    );
    this.dialog.append(content);

    this.hide();
  }

  show() {
    this.dialog.style.display = 'block';
  }

  hide() {
    this.dialog.style.display = 'none';
  }

  dimCallback(dim) {
    this.setDim(dim);
    this.dialog.style.filter = dim && 'brightness(0.2)' || 'brightness(1)';
  }

  exitDialog() {
    this.setDim(false);
    this.hide();
  }

  copyValue(element) {
    return element.input.value.slice(0);
  }

  submit() {
    const usernameText = this.copyValue(username);
    const emailText = this.copyValue(email);
    const passwordText = this.copyValue(password1);
    this.store.dispatch(
      register(usernameText, emailText, passwordText, this.dimCallback, this.exitDialog)
    );
  }
}

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

  const dimCallback = (dim) => {
    setDim(dim);
    dialog.style.filter = dim && 'brightness(0.2)' || 'brightness(1)';
  };

  const exitDialog = () => {
    container.children.length === 2 && setDim(false);
    container.contains(dialog) && container.removeChild(dialog);
  };

  submit.onclick = () => {
    const usernameText = username.input.value.slice(0);
    const emailText = email.input.value.slice(0);
    const passwordText = password1.input.value.slice(0);
    store.dispatch(register(usernameText, emailText, passwordText, dimCallback, exitDialog));
  }

  cancel.onclick = exitDialog;

  const content = create('div', 'content');
  content.append(
    title, username.line, email.line, password1.line, password2.line, buttons
  );
  dialog.append(content);
}
