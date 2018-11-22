export function create(tag, className, id) {
  const elt = document.createElement(tag);
  if (className) elt.className = className;
  if (id) elt.id = id;
  return elt;
}

export function makeInputLine(id) {
  const line = create('div', 'input-line');
  const labelContainer = create('span', 'label-container');
  const label = create('div', 'label');
  label.innerHTML = id.substring(0, 8) === 'password' ? 'password' : id;
  const inputContainer = create('span', 'input-container');
  const input = create('input', 'input', id);
  if (id.substring(0, 8) === 'password') input.type = 'password';
  labelContainer.append(label);
  inputContainer.append(input);
  line.append(labelContainer, inputContainer);
  return { line, input };
}

export function makeButtons() {
  const submit = create('button', 'submit');
  submit.innerHTML = 'OK';
  const spacer = create('div', 'spacer');
  const cancel = create('button', 'cancel');
  cancel.innerHTML = 'CANCEL';
  const buttons = create('div', 'buttons');
  buttons.append(submit, spacer, cancel);
  return { buttons, submit, cancel };
}
