import { create } from './utils';

export function loadingDialog(dimCallback) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'loading');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'LOADING';

  const content = create('div', 'content');
  content.append(title);
  dialog.append(content);

  dimCallback(true);

  const exitDialog = () => {
    dimCallback(false);
    container.contains(dialog) && container.removeChild(dialog);
  }
  return exitDialog;
}
