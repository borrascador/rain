//
// Menu object
//

function Menu() {
  // Set button properties
  this.buttons = [
    { text : 'INFO', mode : 'text', pos : null, link: 3 },
    { text : 'SCI', mode : 'map', pos : { x: 4, y: 6 }, link: null },
    { text : 'VIL', mode : 'map', pos : { x: 14, y: 10 }, link: null },
    { text : 'LOG', mode : 'map', pos : { x: 8, y: 13 }, link: null }
  ];
  this.buttonSize = 120;
}

module.exports = Menu;
