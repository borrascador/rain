import { create, makeInputLine, makeButtons } from './utils';
import { register } from '../../store/actions/requests';
import { error } from '../../store/actions/actions';
import { failureDialog } from './failure';

export function registerDialog(store, setDim) {
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

  setDim(true);

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
    const passwordText1 = password1.input.value.slice(0);
    const passwordText2 = password2.input.value.slice(0);
    if (passwordText1 === passwordText2) {
      store.dispatch(register(usernameText, emailText, passwordText1, dimCallback, exitDialog));
    } else {
      store.dispatch(error(110, 'Passwords do not match'));
      failureDialog(store.getState().errorMessage, dimCallback);
    }
  }

  cancel.onclick = exitDialog;

  const content = create('div', 'content');
  content.append(
    title, username.line, email.line, password1.line, password2.line, buttons
  );
  dialog.append(content);
}
