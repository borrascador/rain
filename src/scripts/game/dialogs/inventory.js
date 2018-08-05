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

  let total = 0;
  connect.inventory.forEach(item => {
    const line = create('div', 'item');
    const name = create('span', 'left');
    name.innerHTML = item.name;
    const quantity = create('span', 'right');
    quantity.innerHTML = item.quantity / 10 + '#';
    const clear = create('div', 'clear');
    line.append(name, quantity, clear);
    items.append(line);
    total += item.quantity;
  });

  if (connect.inventory.length === 0) {
    const line = create('div', 'item');
    line.innerHTML = 'Empty!';
    items.append(line);
  } else {
    const limit = connect.party.length * connect.party.reduce((a, b) => a.jeito + b.jeito);
    const newTotal = total / 10; // XXX TALK TO DAN ABOUT THIS SCALING! XXX
    const color = newTotal / limit > 1 ? "red" : newTotal / limit > 0.9 ? "yellow" : "green";
    const hr = create('hr');
    hr.style.border = '1px solid white';
    const ratio = create('span', 'right');
    ratio.innerHTML = `${total/10}/${limit}#`;
    ratio.style.color = color;
    items.append(hr, ratio);
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
