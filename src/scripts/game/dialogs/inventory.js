import Connect from '../../store/reducers/Connect';
import { create } from './utils';

export function inventoryDialog(store, setDim) {
  const connect = new Connect(store);

  const container = document.getElementById('container');
  const dialog = create('div', 'dialog', 'inventory');
  container.append(dialog);

  const title = create('div', 'title');
  title.innerHTML = 'INVENTORY';

  const items = create('div', 'items');

  connect.inventory.forEach(item => {
    const line = create('div', 'item');
    const name = create('span', 'left');
    name.innerHTML = item.name;
    const quantity = create('span', 'right');
    quantity.innerHTML = 'x' + item.quantity;
    const clear = create('div', 'clear');
    line.append(name, quantity, clear);
    items.append(line);
  });

  if (connect.inventory.length === 0) {
    const line = create('div', 'item');
    line.innerHTML = 'Inventory is empty!';
    items.append(line);
  }

  const submit = create('button', 'submit');
  submit.innerHTML = 'OK';
  const buttons = create('div', 'buttons');
  buttons.append(submit);

  const dimCallback = (dim) => {
    setDim(dim);
    // dialog.style.filter = dim && 'brightness(0.2)' || 'brightness(1)';
  };

  dimCallback(true);

  submit.onclick = () => {
    dimCallback(false);
    container.contains(dialog) && container.removeChild(dialog);
  };

  const content = create('div', 'content');
  content.append(title, items, buttons);
  dialog.append(content);
}
