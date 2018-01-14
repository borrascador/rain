//
// Text object
//

function Text() {
  this.eventID = null; 
  this.eventButtonCoords = [];
}

Text.getClickedButton = function (clickPos) {
  for (let i = 0; i < this.eventButtonCoords.length; i++) {
    let button = this.eventButtonCoords[i];
    if (clickPos.x >= button.xPos
        && clickPos.x <= (button.xPos + button.width)
        && clickPos.y <= button.yPos
        && clickPos.y >= (button.yPos - button.height)) {
      console.log(button.id);
    }
  }
};

Text.inputButtonCoords = function (id, coordsObject) {
  this.eventID = id;
  this.eventButtonCoords.push(coordsObject);
};

module.exports = Text;
