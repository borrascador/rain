//
// Text object
//

function Text() {
  this.eventID = null;
  this.selectedID = null;
}

Text.prototype.screenToButton = function (x, y) {
  for (let i = 0; i < this.eventPayload.options.length; i++) {
    let button = this.eventPayload.options[i];
    if (x >= button.xPos
        && x <= (button.xPos + button.width)
        && y <= button.yPos
        && y >= (button.yPos - button.height)) {
      this.selectOptionByID(button.id);
      return this.selectedID;
    }
  }
  this.selectOptionByID(null);
  return this.selectedID;
};

Text.prototype.checkSelected = function (option) {
  return this.selectedID === option.id;
};

Text.prototype.selectOption = function (option) {
  this.selectedID = option.id;
};

Text.prototype.selectOptionByID = function (id) {
  if (parseInt(id) > this.eventPayload.options.length) {
    return;
  }
  this.selectedID = id;
};

Text.prototype.confirmOption = function (id) {
  this.selectedID = null;
  return this.eventPayload.options.find(x => x.id === id).ref;
}

Text.prototype.loadPayload = function (payload) {
  this.eventPayload = payload;
};

Text.prototype.getPayload = function () {
  return this.eventPayload;
};

Text.prototype.checkButtonCoords = function (option) {
  return option.hasOwnProperty('width')
    && option.hasOwnProperty('height')
    && option.hasOwnProperty('xPos')
    && option.hasOwnProperty('yPos');
};

Text.prototype.mergeButtonCoords = function (id, buttonCoords) {
  for (var attrname in buttonCoords) {
    // Select elements in options array by id property
    // Then add new properties to that object
    this.eventPayload.options.find(x => x.id === id)[attrname] =  buttonCoords[attrname];
  }
};

module.exports = Text;
