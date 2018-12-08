import { create } from './utils';

export default function failureDialog(message, dimCallback) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'failure');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'FAILURE';
  const text = create('div', 'text');
  text.innerHTML = message;
  const submit = create('button', 'submit');
  submit.innerHTML = 'OK';
  const buttons = create('div', 'buttons');
  buttons.append(submit);

  dimCallback(true);

  submit.onclick = () => {
    dimCallback(false);
    if (container.contains(dialog)) container.removeChild(dialog);
  };

  const content = create('div', 'content');
  content.append(title, text, buttons);
  dialog.append(content);
}
