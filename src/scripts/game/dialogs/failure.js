import { create } from './utils';

export function showFailure(dimCallback) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'failure');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'FAILURE';
  const submit = create('button', 'submit');
  submit.innerHTML = 'OK';
  const buttons = create('div', 'buttons');
  buttons.append(submit);

  submit.onclick = () => {
    dimCallback();
    container.contains(dialog) && container.removeChild(dialog);
  };

  const content = create('div', 'content');
  content.append(title, buttons);
  dialog.append(content);
}
