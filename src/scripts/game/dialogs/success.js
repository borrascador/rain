import { create } from './utils';

export function successDialog(dimCallback) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'success');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'SUCCESS';
  const submit = create('button', 'submit');
  submit.innerHTML = 'OK';
  const buttons = create('div', 'buttons');
  buttons.append(submit);

  dimCallback(true);

  submit.onclick = () => {
    dimCallback(false);
    container.contains(dialog) && container.removeChild(dialog);
  };

  const content = create('div', 'content');
  content.append(title, buttons);
  dialog.append(content);
}
