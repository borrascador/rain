import { create } from './utils';

export function loadingDialog(parentDim) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'loading');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'LOADING';

  const content = create('div', 'content');
  content.append(title);
  dialog.append(content);

  parentDim(true);

  const exitDialog = () => {
    parentDim(false);
    container.contains(dialog) && container.removeChild(dialog);
  }
  return exitDialog;
}
