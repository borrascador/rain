export function makeTextButton(text, ) {


}

this.buttons.map((button, idx) => {
  this.ctx.fillStyle = (this.selectedId === button.id) ? '#FF0' : '#FFF';
  const buttonText = `${button.id}. ${button.text}`;
  this.ctx.fillText(buttonText, 2 * lineSize, linePos * lineSize);
  addButtonCoords(button, {
    xPos: 2 * lineSize,
    yPos: lineSize * linePos,
    width: this.ctx.measureText(buttonText).width,
    height: fontSize,
  });
  linePos++;
})

const addButtonCoords = (option, buttonCoords) => {
  const props = ['xPos', 'yPos', 'width', 'height'];
  if (!props.every(prop => Object.keys(option).includes(prop))) {
    Object.assign(option, buttonCoords);
  }
};
