import { create } from './utils';

export function showLoading(dimCallback) {
  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'loading');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'LOADING';

  const content = create('div', 'content');
  content.append(title);
  dialog.append(content);
}
