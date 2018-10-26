/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CAMERA_SPEED = exports.CAMERA_SPEED = 500; // pixels per second
var UPDATE_TEXT_DURATION = exports.UPDATE_TEXT_DURATION = 2000; // ms duration of each update text
var UPDATE_TEXT_OFFSET = exports.UPDATE_TEXT_OFFSET = 500; // minimum ms between each update text

var LAYER = exports.LAYER = {
  BOTTOM: "BOTTOM",
  MIDDLE: "MIDDLE",
  TOP: "TOP"
};

var MODE = exports.MODE = {
  GAME: "GAME",
  STORY: "STORY",
  PARTY: "PARTY",
  TITLE: "TITLE"
};

var SLOTS = exports.SLOTS = {
  BACKPACK: 'BACKPACK',
  EATING: 'EATING',
  PARTY: 'PARTY',
  DRAG: 'DRAG'
};

var VEHICLE = exports.VEHICLE = {
  JEEP: "jeep",
  CANOE: "canoe"
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Type and action definitions

var KEY_DOWN = exports.KEY_DOWN = 'KEY_DOWN';
var keyDown = exports.keyDown = function keyDown(key) {
  return {
    type: KEY_DOWN,
    payload: { key: key }
  };
};

var KEY_UP = exports.KEY_UP = 'KEY_UP';
var keyUp = exports.keyUp = function keyUp(key) {
  return {
    type: KEY_UP,
    payload: { key: key }
  };
};

var MOUSE_DOWN_LEFT = exports.MOUSE_DOWN_LEFT = 'MOUSE_DOWN_LEFT';
var mouseDownLeft = exports.mouseDownLeft = function mouseDownLeft(x, y) {
  return {
    type: MOUSE_DOWN_LEFT,
    payload: { x: x, y: y }
  };
};

var MOUSE_DOWN_RIGHT = exports.MOUSE_DOWN_RIGHT = 'MOUSE_DOWN_RIGHT';
var mouseDownRight = exports.mouseDownRight = function mouseDownRight(x, y) {
  return {
    type: MOUSE_DOWN_RIGHT,
    payload: { x: x, y: y }
  };
};

var MOUSE_MOVE = exports.MOUSE_MOVE = 'MOUSE_MOVE';
var mouseMove = exports.mouseMove = function mouseMove(x, y) {
  return {
    type: MOUSE_MOVE,
    payload: { x: x, y: y }
  };
};

var MOUSE_UP_LEFT = exports.MOUSE_UP_LEFT = 'MOUSE_UP_LEFT';
var mouseUpLeft = exports.mouseUpLeft = function mouseUpLeft(x, y) {
  return {
    type: MOUSE_UP_LEFT,
    payload: { x: x, y: y }
  };
};

var MOUSE_UP_RIGHT = exports.MOUSE_UP_RIGHT = 'MOUSE_UP_RIGHT';
var mouseUpRight = exports.mouseUpRight = function mouseUpRight(x, y) {
  return {
    type: MOUSE_UP_RIGHT,
    payload: { x: x, y: y }
  };
};

var CLICKED_LEFT = exports.CLICKED_LEFT = 'CLICKED_LEFT';
var clickedLeft = exports.clickedLeft = function clickedLeft() {
  return {
    type: CLICKED_LEFT
  };
};

var CLICKED_RIGHT = exports.CLICKED_RIGHT = 'CLICKED_RIGHT';
var clickedRight = exports.clickedRight = function clickedRight() {
  return {
    type: CLICKED_RIGHT
  };
};

var ZOOM_IN = exports.ZOOM_IN = 'ZOOM_IN';
var zoomIn = exports.zoomIn = function zoomIn() {
  return {
    type: ZOOM_IN
  };
};

var ZOOM_OUT = exports.ZOOM_OUT = 'ZOOM_OUT';
var zoomOut = exports.zoomOut = function zoomOut() {
  return {
    type: ZOOM_OUT
  };
};

var SET_PARTY_TAB = exports.SET_PARTY_TAB = 'SET_PARTY_TAB';
var setPartyTab = exports.setPartyTab = function setPartyTab(partyTab) {
  return {
    type: SET_PARTY_TAB,
    payload: { partyTab: partyTab }
  };
};

var REFRESH_SLOTS = exports.REFRESH_SLOTS = 'REFRESH_SLOTS';
var refreshSlots = exports.refreshSlots = function refreshSlots(slots) {
  return {
    type: REFRESH_SLOTS,
    payload: { slots: slots }
  };
};

var CHANGE_MODE = exports.CHANGE_MODE = 'CHANGE_MODE';
var changeMode = exports.changeMode = function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    payload: { mode: mode }
  };
};

var CLOSE_STORY = exports.CLOSE_STORY = 'CLOSE_STORY';
var closeStory = exports.closeStory = function closeStory() {
  return {
    type: CLOSE_STORY
  };
};

var REMOVE_PARTY_MEMBER = exports.REMOVE_PARTY_MEMBER = 'REMOVE_PARTY_MEMBER';
var removePartyMember = exports.removePartyMember = function removePartyMember(id) {
  return {
    type: REMOVE_PARTY_MEMBER,
    payload: { id: id }
  };
};

var DRAG_ITEM = exports.DRAG_ITEM = 'DRAG_ITEM';
var dragItem = exports.dragItem = function dragItem(item, quantity, x, y) {
  return {
    type: DRAG_ITEM,
    payload: { item: item, quantity: quantity, x: x, y: y }
  };
};

var END_DRAG = exports.END_DRAG = 'END_DRAG';
var endDrag = exports.endDrag = function endDrag() {
  return {
    type: END_DRAG
  };
};

var ERROR = exports.ERROR = 'ERROR';

var error = exports.error = function error(code, message) {
  return {
    type: ERROR,
    payload: { code: code, message: message }
  };
};

var sendError = exports.sendError = function sendError(code, message) {
  return {
    type: ERROR,
    meta: { send: true },
    payload: { code: code, message: message }
  };
};

var REGISTER_REQUEST = exports.REGISTER_REQUEST = 'REGISTER_REQUEST';
var REGISTER_RESPONSE = exports.REGISTER_RESPONSE = 'REGISTER_RESPONSE';

var registerRequest = exports.registerRequest = function registerRequest(user, email, password) {
  return {
    type: REGISTER_REQUEST,
    meta: { send: true },
    payload: { user: user, email: email, password: password }
  };
};

var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_RESPONSE = exports.LOGIN_RESPONSE = 'LOGIN_RESPONSE';

var loginRequest = exports.loginRequest = function loginRequest(user, password) {
  return {
    type: LOGIN_REQUEST,
    meta: { send: true },
    payload: { user: user, password: password }
  };
};

var LOGOUT_REQUEST = exports.LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_RESPONSE = exports.LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';

var logoutRequest = exports.logoutRequest = function logoutRequest(user) {
  return {
    type: LOGOUT_REQUEST,
    meta: { send: true },
    payload: { user: user }
  };
};

var UPDATE = exports.UPDATE = 'UPDATE';

var EVENT_REQUEST = exports.EVENT_REQUEST = 'EVENT_REQUEST';
var EVENT_RESPONSE = exports.EVENT_RESPONSE = 'EVENT_RESPONSE';

var eventRequest = exports.eventRequest = function eventRequest(type, id, optional) {
  return {
    type: EVENT_REQUEST,
    meta: { send: true },
    payload: Object.assign({}, { type: type, id: id }, optional)
  };
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connect = function () {
  function Connect(store) {
    _classCallCheck(this, Connect);

    this.store = store;
  }

  _createClass(Connect, [{
    key: 'connected',
    get: function get() {
      return this.store.getState().connected;
    }
  }, {
    key: 'loggedIn',
    get: function get() {
      return this.store.getState().loggedIn;
    }
  }, {
    key: 'error',
    get: function get() {
      return this.store.getState().error;
    }
  }, {
    key: 'partyTab',
    get: function get() {
      return this.store.getState().partyTab;
    }
  }, {
    key: 'mode',
    get: function get() {
      return this.store.getState().mode;
    }
  }, {
    key: 'inventoryChanges',
    get: function get() {
      return this.store.getState().inventoryChanges;
    }
  }, {
    key: 'partyChanges',
    get: function get() {
      return this.store.getState().partyChanges;
    }
  }, {
    key: 'actions',
    get: function get() {
      return this.store.getState().actions;
    }
  }, {
    key: 'keys',
    get: function get() {
      var allKeys = this.store.getState().keys;
      var trueKeys = Object.keys(allKeys).filter(function (x) {
        return allKeys[x] === true;
      });
      return trueKeys;
    }
  }, {
    key: 'mouseDownLeft',
    get: function get() {
      return this.store.getState().mouseDownLeft;
    }
  }, {
    key: 'mouseDownRight',
    get: function get() {
      return this.store.getState().mouseDownRight;
    }
  }, {
    key: 'mouseDrop',
    get: function get() {
      return this.store.getState().mouseDrop;
    }
  }, {
    key: 'mouseOffset',
    get: function get() {
      return this.store.getState().mouseOffset;
    }
  }, {
    key: 'mousePos',
    get: function get() {
      return this.store.getState().mousePos;
    }
  }, {
    key: 'clickLeft',
    get: function get() {
      return this.store.getState().clickLeft;
    }
  }, {
    key: 'clickRight',
    get: function get() {
      return this.store.getState().clickRight;
    }
  }, {
    key: 'stories',
    get: function get() {
      return this.store.getState().stories;
    }
  }, {
    key: 'map',
    get: function get() {
      var _store$getState = this.store.getState(),
          position = _store$getState.position,
          xCoord = _store$getState.xCoord,
          yCoord = _store$getState.yCoord,
          positionTarget = _store$getState.positionTarget,
          xTarget = _store$getState.xTarget,
          yTarget = _store$getState.yTarget,
          tiles = _store$getState.tiles,
          sight = _store$getState.sight,
          zoom = _store$getState.zoom;

      var _tiles$find = tiles.find(function (tile) {
        return tile.id === position;
      }),
          x = _tiles$find.x,
          y = _tiles$find.y;

      var pos = { x: x, y: y };
      var coords = { x: xCoord, y: yCoord };
      var coordsTarget = { x: xTarget, y: yTarget };
      return { pos: pos, coords: coords, positionTarget: positionTarget, coordsTarget: coordsTarget, tiles: tiles, sight: sight, zoom: zoom };
    }
  }, {
    key: 'currentTile',
    get: function get() {
      var _store$getState2 = this.store.getState(),
          position = _store$getState2.position,
          tiles = _store$getState2.tiles;

      return tiles.find(function (tile) {
        return tile.id === position;
      });
    }
  }, {
    key: 'position',
    get: function get() {
      return this.store.getState().position;
    }
  }, {
    key: 'inventory',
    get: function get() {
      return this.store.getState().inventory;
    }
  }, {
    key: 'slots',
    get: function get() {
      return this.store.getState().slots;
    }
  }, {
    key: 'draggedItem',
    get: function get() {
      return this.store.getState().draggedItem;
    }
  }, {
    key: 'draggedOrigin',
    get: function get() {
      return this.store.getState().draggedOrigin;
    }
  }, {
    key: 'party',
    get: function get() {
      return this.store.getState().party;
    }
  }, {
    key: 'vehicle',
    get: function get() {
      return this.store.getState().vehicle;
    }
  }, {
    key: 'pace',
    get: function get() {
      return this.store.getState().pace;
    }
  }, {
    key: 'rations',
    get: function get() {
      return this.store.getState().rations;
    }
  }]);

  return Connect;
}();

exports.default = Connect;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.alphaGreen = alphaGreen;
exports.alphaYellow = alphaYellow;
exports.alphaRed = alphaRed;
exports.alphaDarkRed = alphaDarkRed;
var BRIGHT_RED = exports.BRIGHT_RED = "#F00";
var DISCONNECT_RED = exports.DISCONNECT_RED = "#F36";
var MEDIUM_RED = exports.MEDIUM_RED = "rgba(100, 11, 33, 0.9)";
var DARK_RED = exports.DARK_RED = "rgba(33, 5, 11, 0.9)";

var PALE_GREEN = exports.PALE_GREEN = "#6F6";
var BRIGHT_GREEN = exports.BRIGHT_GREEN = "#0F0";
var CONNECT_GREEN = exports.CONNECT_GREEN = "#3F6";
var HOVER_GREEN = exports.HOVER_GREEN = "rgba(10, 100, 15, 0.95)";

var BRIGHT_YELLOW = exports.BRIGHT_YELLOW = "#FF0";

var SOLID_WHITE = exports.SOLID_WHITE = "#FFF";

var FOREST_BLACK = exports.FOREST_BLACK = "#010";

var MEDIUM_OPAQUE = exports.MEDIUM_OPAQUE = "rgba(0, 0, 0, 0.6)";
var DARK_OPAQUE = exports.DARK_OPAQUE = "rgba(0, 0, 0, 0.8)";

function alphaGreen(alpha) {
  return "rgba(0, 256, 0, " + alpha + ")";
}

function alphaYellow(alpha) {
  return "rgba(256, 256, 0, " + alpha + ")";
}

function alphaRed(alpha) {
  return "rgba(256, 0, 0, " + alpha + ")";
}

function alphaDarkRed(alpha) {
  return "rgba(128, 0, 0, " + alpha + ")";
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// TODO: Is it a good idea to start using this?
var addCoords = exports.addCoords = function addCoords(button, coords) {
  var props = ['xPos', 'yPos', 'width', 'height'];
  if (!props.every(function (prop) {
    return Object.keys(button).includes(prop);
  })) {
    return Object.assign({}, button, coords);
  }
};

var screenToTextButtonId = exports.screenToTextButtonId = function screenToTextButtonId(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y <= button.yPos && y >= button.yPos - button.height;
  });
  return selectedButton && selectedButton.id || null;
};

var screenToTextButton = exports.screenToTextButton = function screenToTextButton(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y <= button.yPos && y >= button.yPos - button.height;
  });
  return selectedButton || null;
};

var screenToImageButtonId = exports.screenToImageButtonId = function screenToImageButtonId(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y >= button.yPos && y <= button.yPos + button.height;
  });
  return selectedButton && selectedButton.id || null;
};

var screenToImageButton = exports.screenToImageButton = function screenToImageButton(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y >= button.yPos && y <= button.yPos + button.height;
  });
  return selectedButton || null;
};

var getItemById = exports.getItemById = function getItemById(array, id) {
  return array.find(function (x) {
    return x.id === id;
  });
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawById = drawById;
exports.drawByName = drawByName;
exports.trace = trace;
exports.roundToZoom = roundToZoom;
exports.centerText = centerText;
exports.mainText = mainText;
exports.itemChangeText = itemChangeText;
exports.partyChangeText = partyChangeText;
exports.buttonText = buttonText;
exports.drawMultipliers = drawMultipliers;
exports.splitIntoLines = splitIntoLines;
exports.drawHover = drawHover;
exports.drawDurability = drawDurability;
exports.slideFadeText = slideFadeText;
exports.fadeText = fadeText;

var _colors = __webpack_require__(3);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function drawById(ctx, img, id, zoom, x, y) {
  var _img$tileset = img.tileset,
      tileheight = _img$tileset.tileheight,
      tilewidth = _img$tileset.tilewidth,
      columns = _img$tileset.columns;

  ctx.drawImage(img, id % columns * tilewidth, Math.floor(id / columns) * tileheight, tilewidth, tileheight, x, y, tilewidth * zoom, tileheight * zoom);
}

function drawByName(ctx, img, name, zoom, x, y) {
  var id = img.tilenames[name];
  drawById(ctx, img, id, zoom, x, y);
}

function trace(ctx, size, x, y) {
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.lineTo(x + size, y);
  ctx.lineTo(x + size, y + size);
  ctx.lineTo(x, y + size);
  ctx.closePath();
  ctx.stroke();
}

function roundToZoom(zoom, value) {
  return zoom * Math.round(value / zoom);
}

function centerText(canvas, ctx, zoom, gutter, lines, fontSize, pos) {
  ctx.font = fontSize + 'px MECC';
  var lineHeight = fontSize + zoom * gutter - fontSize / 8;
  return lines.map(function (line, idx) {
    var lineWidth = ctx.measureText(line.text).width;
    var x = roundToZoom(zoom, canvas.width / 2 - lineWidth / 2);
    var y = roundToZoom(zoom, canvas.height * pos + fontSize - lineHeight * lines.length / 2 + lineHeight * idx);
    ctx.fillText(line.text, x, y);
    return Object.assign({}, line, {
      xPos: x,
      yPos: y,
      width: lineWidth,
      height: fontSize
    });
  });
}

function mainText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
  var y = void 0;
  var lengths = lines.map(function (line, idx) {
    y = yPos + idx * lineHeight;
    ctx.fillText(line, xPos, y);
    return ctx.measureText(line).width;
  });
  return {
    xPos: xPos,
    yPos: y,
    width: lengths.reduce(function (a, b) {
      return Math.max(a, b);
    }),
    height: lineHeight * lines.length
  };
}

function itemChangeText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
  var y = void 0;
  var lengths = lines.map(function (line, idx) {
    y = yPos + idx * lineHeight;
    var change = line.change < 0 ? line.change : '+' + line.change;
    var color = line.change < 0 ? _colors.BRIGHT_RED : _colors.BRIGHT_GREEN;
    var text = change + ' ' + line.name;
    ctx.fillStyle = color;
    ctx.fillText(text, xPos, y);
    return ctx.measureText(text).width;
  });
  return {
    xPos: xPos,
    yPos: y,
    width: lengths.reduce(function (a, b) {
      return Math.max(a, b);
    }),
    height: lineHeight * lines.length
  };
}

function partyChangeText(canvas, ctx, fontSize, lineHeight, lines, xPos, yPos) {
  var y = void 0;
  var lengths = lines.map(function (line, idx) {
    var x = xPos;
    y = yPos + idx * lineHeight;
    var text = line.name + ':';
    ctx.fillStyle = _colors.PALE_GREEN;
    ctx.fillText(text, x, y);
    x += ctx.measureText(text).width;
    if (line.health_change !== 0) {
      text = ' ' + (line.health_change < 0 ? line.health_change : '+' + line.health_change) + ' health';
      if (line.health_change < 0) {
        ctx.fillStyle = _colors.BRIGHT_RED;
      } else {
        ctx.fillStyle = _colors.BRIGHT_GREEN;
      }
      ctx.fillText(text, x, y);
      x += ctx.measureText(text).width;
    }
    if (line.jeito_change !== 0) {
      text = ' ' + (line.health_change < 0 ? line.health_change : '+' + line.health_change) + ' health';
      if (line.health_change < 0) {
        ctx.fillStyle = _colors.BRIGHT_RED;
      } else {
        ctx.fillStyle = _colors.BRIGHT_GREEN;
      }
      ctx.fillText(text, x, y);
      x += ctx.measureText(text).width;
    }
    return x;
  });
  ctx.fillStyle = _colors.PALE_GREEN;
  return {
    xPos: xPos,
    yPos: y,
    width: lengths.reduce(function (a, b) {
      return Math.max(a, b);
    }),
    height: lineHeight * lines.length
  };
}

function buttonText(canvas, ctx, fontSize, lineHeight, buttons, xPos, yPos, selected, icons, scale) {
  var x = xPos + fontSize * 2;
  var y = yPos;
  var result = [];
  buttons.forEach(function (button, idx) {
    if (result.length > 0 && result[result.length - 1].hoverText) {
      y += lineHeight / 4;
    }
    ctx.fillStyle = selected && selected.id === button.id ? _colors.BRIGHT_YELLOW : _colors.PALE_GREEN;
    ctx.fillText(button.oneIndex + '.', xPos, y);
    var coords = mainText(canvas, ctx, fontSize, lineHeight, button.text, x, y);
    result.push(Object.assign({}, button, coords, {
      xPos: xPos,
      width: coords.width + fontSize * 2
    }));
    y = coords.yPos + lineHeight;
    if (button.multipliers) {
      y += lineHeight / 4;
      var multipliers = drawMultipliers(ctx, icons, scale, fontSize, lineHeight, button.multipliers, x, y);
      result.push.apply(result, _toConsumableArray(multipliers));
      y = multipliers[multipliers.length - 1].yPos + lineHeight * 2;
    }
  });
  return result;
}

function drawMultipliers(ctx, img, scale, fontSize, lineHeight, multipliers, xPos, yPos) {
  var size = img.tileset.tilewidth * scale;
  var x = xPos;
  return multipliers.map(function (item, index) {
    ctx.fillStyle = item.value > 1 ? _colors.BRIGHT_GREEN : _colors.BRIGHT_RED;
    var sign = item.value > 1 ? '+' : '-';
    var text = '' + sign + item.value + '%';
    var width = ctx.measureText(text).width;
    ctx.fillText(text, x, yPos);
    drawById(ctx, img, item.icon, scale, x + width, yPos - lineHeight);
    x += width + size * 4 / 3;
    return Object.assign({}, item, {
      xPos: x - width - size * 4 / 3,
      yPos: yPos - lineHeight,
      width: width + size,
      height: size,
      hoverText: text + ' ' + item.name
    });
  });
}

function splitIntoLines(ctx, text, maxWidth) {
  var blocks = text.split("\n").map(function (block) {
    return block.split(" ");
  });
  var spaceWidth = ctx.measureText(" ").width;
  var lines = [];
  blocks.forEach(function (block) {
    var totalWidth = 0;
    var start = 0;
    block.forEach(function (word, index) {
      var wordWidth = ctx.measureText(word).width;
      if (totalWidth + wordWidth > maxWidth) {
        lines.push(block.slice(start, index).join(" "));
        start = index;
        totalWidth = wordWidth + spaceWidth;
      } else {
        totalWidth += wordWidth + spaceWidth;
      }
      if (index + 1 === block.length) {
        lines.push(block.slice(start, block.length).join(" "));
      }
    });
  });
  return lines;
}

function drawHover(ctx, fontSize, button) {
  var text = button.hoverText || button.name || button.target || 'no text';
  var textWidth = ctx.measureText(text).width;
  var padding = 8;

  ctx.fillStyle = _colors.HOVER_GREEN;
  ctx.fillRect(button.xPos + button.width / 2 - textWidth / 2 - padding, button.yPos - fontSize - padding * 3.5, textWidth + padding * 2, fontSize + padding * 2);
  var y = button.yPos - padding * 1.5;
  ctx.beginPath();
  ctx.moveTo(button.xPos + button.width / 2 - padding, y);
  ctx.lineTo(button.xPos + button.width / 2 + padding, y);
  ctx.lineTo(button.xPos + button.width / 2, y + padding);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = _colors.SOLID_WHITE;
  ctx.fillText(text, button.xPos + button.width / 2 - textWidth / 2, button.yPos - padding * 2.5);
}

function drawDurability(ctx, buttonSize, scale, durability, x, y) {
  var length = (buttonSize - scale * 2) * (durability / 100);
  var xPos = x + scale;
  var yPos = y + buttonSize - scale * 1.5;
  ctx.lineWidth = scale;
  ctx.strokeStyle = durability > 50 ? _colors.BRIGHT_GREEN : durability > 25 ? _colors.BRIGHT_YELLOW : _colors.BRIGHT_RED;
  ctx.beginPath();
  ctx.moveTo(xPos, yPos);
  ctx.lineTo(xPos + length, yPos);
  ctx.stroke();
}

function slideFadeText(ctx, currentTime, totalTime, fontSize, text, x, y) {
  ctx.font = fontSize + 'MECC';
  var alpha = 1 - Math.abs(totalTime / 2 - currentTime) / (totalTime / 2);
  ctx.fillStyle = text[0] === '+' ? (0, _colors.alphaGreen)(alpha) : (0, _colors.alphaRed)(alpha);
  var yDistance = 150;
  var yOffset = currentTime / totalTime * yDistance - yDistance / 2;
  var textWidth = ctx.measureText(text).width;
  ctx.fillText(text, x - textWidth, y + yOffset);
}

function fadeText(ctx, currentTime, totalTime, fontSize, text, x, y) {
  ctx.font = fontSize + 'MECC';
  var alpha = 1 - Math.abs(totalTime / 2 - currentTime) / (totalTime / 2);
  ctx.fillStyle = text[0] === '+' ? (0, _colors.alphaGreen)(alpha) : (0, _colors.alphaRed)(alpha);
  ctx.fillText(text, x, y);
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.logout = logout;
exports.sendEvent = sendEvent;

var _actions = __webpack_require__(1);

var _store = __webpack_require__(11);

var _constants = __webpack_require__(0);

var _loading = __webpack_require__(72);

var _success = __webpack_require__(73);

var _failure = __webpack_require__(21);

function register(user, email, password, dimCallback, exitRegister) {
  return function (dispatch, getState) {
    var state = getState();
    if (state.connected && !state.loggedIn && !state.sending) {
      dispatch((0, _actions.registerRequest)(user, email, password));
      var exitLoading = (0, _loading.loadingDialog)(dimCallback);
      var unsubscribe = (0, _store.subscribe)('sending', function (state) {
        unsubscribe();
        exitRegister();
        exitLoading();
        clearTimeout(timer);
        if (!getState().error) {
          (0, _success.successDialog)(dimCallback);
        } else {
          (0, _failure.failureDialog)(getState().errorMessage, dimCallback);
        }
      });
      var timer = setTimeout(function () {
        unsubscribe();
        exitRegister();
        exitLoading();
        getState().sending && dispatch((0, _actions.error)(200, 'Response timeout'));
        (0, _failure.failureDialog)(getState().errorMessage, dimCallback);
      }, 2000);
    }
  };
}

function login(user, password, dimCallback, exitLogin) {
  return function (dispatch, getState) {
    var state = getState();
    if (state.connected && !state.loggedIn && !state.sending) {
      dispatch((0, _actions.loginRequest)(user, password));
      var exitLoading = (0, _loading.loadingDialog)(dimCallback);
      var unsubscribe = (0, _store.subscribe)('sending', function (state) {
        unsubscribe();
        exitLogin();
        exitLoading();
        clearTimeout(timer);
        if (!getState().error) {
          dispatch((0, _actions.changeMode)(_constants.MODE.GAME));
        } else {
          (0, _failure.failureDialog)(getState().errorMessage, dimCallback);
        }
      });
      var timer = setTimeout(function () {
        unsubscribe();
        exitLogin();
        exitLoading();
        getState().sending && dispatch((0, _actions.error)(200, 'Response timeout'));
        (0, _failure.failureDialog)(getState().errorMessage, dimCallback);
      }, 2000);
    }
  };
}

function logout(callback) {
  return function (dispatch, getState) {
    var state = getState();
    if (state.connected && state.loggedIn && !state.sending) {
      dispatch((0, _actions.logoutRequest)());
      var unsubscribe = (0, _store.subscribe)('sending', function (state) {
        unsubscribe();
        callback && callback();
        clearTimeout(timer);
        // NOTE: mode changes to TITLE in tick()
      });
      var timer = setTimeout(function () {
        unsubscribe();
        callback && callback();
        getState().sending && dispatch((0, _actions.error)(200, 'Response timeout'));
      }, 2000);
    }
  };
}

function sendEvent(type, id, optional) {
  return function (dispatch, getState) {
    var state = getState();
    if (state.connected && state.loggedIn && !state.sending) {
      dispatch((0, _actions.eventRequest)(type, id, optional));
      var unsubscribe = (0, _store.subscribe)('sending', function (state) {
        unsubscribe();
        clearTimeout(timer);
      });
      var timer = setTimeout(function () {
        unsubscribe();
        getState().sending && dispatch((0, _actions.error)(200, 'Response timeout'));
      }, 2000);
    }
  };
}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var EVENTS = exports.EVENTS = {
  PLANT: 'plant',
  HARVEST: 'harvest',
  HUNT: 'hunt',
  FISH: 'fish',
  ADD_FOOD: 'add_food',
  REMOVE_FOOD: 'remove_food',
  MOVE: 'move',
  RATIONS: 'rations',
  DECISION: 'decision',
  PACE: 'pace',
  MOVE_ITEM: 'grab_item'
};

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.create = create;
exports.makeInputLine = makeInputLine;
exports.makeButtons = makeButtons;
function create(tag, className, id) {
  var elt = document.createElement(tag);
  if (className) elt.className = className;
  if (id) elt.id = id;
  return elt;
}

function makeInputLine(id) {
  var line = create('div', 'input-line');
  var labelContainer = create('span', 'label-container');
  var label = create('div', 'label');
  label.innerHTML = id.substring(0, 8) === 'password' ? 'password' : id;
  var inputContainer = create('span', 'input-container');
  var input = create('input', 'input', id);
  if (id.substring(0, 8) === 'password') input.type = 'password';
  labelContainer.append(label);
  inputContainer.append(input);
  line.append(labelContainer, inputContainer);
  return { line: line, input: input };
}

function makeButtons() {
  var submit = create('button', 'submit');
  submit.innerHTML = 'OK';
  var spacer = create('div', 'spacer');
  var cancel = create('button', 'cancel');
  cancel.innerHTML = 'CANCEL';
  var buttons = create('div', 'buttons');
  buttons.append(submit, spacer, cancel);
  return { buttons: buttons, submit: submit, cancel: cancel };
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
  function Animation(max, step, interval) {
    _classCallCheck(this, Animation);

    this.max = max;
    this.step = step;
    this.interval = interval;
    this.time = 0;
    this.value = 0;
  }

  _createClass(Animation, [{
    key: "tick",
    value: function tick(delta) {
      this.time += delta;
      if (this.time >= this.interval) {
        this.time = 0;
        this.value = this.value < this.max ? this.value + this.step : 0;
      }
    }
  }, {
    key: "getValue",
    value: function getValue() {
      return this.value;
    }
  }]);

  return Animation;
}();

exports.default = Animation;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.subscribe = exports.store = undefined;

var _reduxThunk = __webpack_require__(31);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(32);

var _redux = __webpack_require__(33);

var _reducer = __webpack_require__(48);

var _reducer2 = _interopRequireDefault(_reducer);

var _reduxWebsocketBridge = __webpack_require__(17);

var _reduxWebsocketBridge2 = _interopRequireDefault(_reduxWebsocketBridge);

var _reconnectingWebsocket = __webpack_require__(53);

var _reconnectingWebsocket2 = _interopRequireDefault(_reconnectingWebsocket);

var _reduxSubscriber = __webpack_require__(54);

var _reduxSubscriber2 = _interopRequireDefault(_reduxSubscriber);

var _errors = __webpack_require__(56);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
	var BLACKLIST = [_actions.KEY_DOWN, _actions.KEY_UP, _actions.MOUSE_MOVE, _actions.REFRESH_SLOTS, _actions.MOUSE_DOWN_LEFT, _actions.MOUSE_UP_LEFT, _actions.CLICKED_LEFT, _actions.MOUSE_DOWN_RIGHT, _actions.MOUSE_UP_RIGHT, _actions.CLICKED_RIGHT];
	var loggerMiddleware = (0, _reduxLogger.createLogger)({
		predicate: function predicate(getState, action) {
			return !BLACKLIST.includes(action.type);
		}
	});
	return (0, _redux.createStore)(_reducer2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxWebsocketBridge2.default)(function () {
		var rws = new _reconnectingWebsocket2.default('ws://localhost:8887/', [], {});
		rws.addEventListener('close', function () {
			return rws._shouldReconnect && rws._connect();
		});
		return rws;
	}), _errors.errorLogger, loggerMiddleware));
}

var store = exports.store = configureStore();
var subscribe = exports.subscribe = (0, _reduxSubscriber2.default)(store);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(42);



/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = {
  INIT: '@@redux/INIT'

  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
};function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!Object(__WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__["a" /* default */])(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      var listener = listeners[i];
      listener();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if (typeof observer !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable__["a" /* default */]] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable__["a" /* default */]] = observable, _ref2;
}

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(41);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!Object(__WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__["a" /* default */])(value) || Object(__WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__["a" /* default */])(value) != objectTag) {
    return false;
  }
  var proto = Object(__WEBPACK_IMPORTED_MODULE_1__getPrototype_js__["a" /* default */])(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__["a"] = (isPlainObject);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(35);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SEND = exports.OPEN = exports.MESSAGE = exports.CLOSE = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.close = close;
exports.message = message;
exports.open = open;
exports.default = createWebSocketMiddleware;
exports.trimUndefined = trimUndefined;

var _blobToArrayBuffer = __webpack_require__(49);

var _blobToArrayBuffer2 = _interopRequireDefault(_blobToArrayBuffer);

var _isFSA = __webpack_require__(50);

var _isFSA2 = _interopRequireDefault(_isFSA);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var CLOSE = exports.CLOSE = 'CLOSE';
var MESSAGE = exports.MESSAGE = 'MESSAGE';
var OPEN = exports.OPEN = 'OPEN';
var SEND = exports.SEND = 'SEND';

function close() {
  return { type: CLOSE };
}

function message(payload) {
  return { type: MESSAGE, payload: payload };
}

function open() {
  return { type: OPEN };
}

var DEFAULT_OPTIONS = {
  binaryType: 'arraybuffer',
  fold: function fold(action, webSocket) {
    if (action.meta && arrayify(action.meta.send).some(function (send) {
      return send === true || send === webSocket;
    })) {
      var meta = action.meta,
          actionWithoutMeta = _objectWithoutProperties(action, ['meta']);

      return JSON.stringify(actionWithoutMeta);
    }
  },
  meta: {},
  namespace: '@@websocket/',
  unfold: function unfold(payload, webSocket, raw) {
    var action = tryParseJSON(payload);

    return action && _extends({}, action, {
      meta: _extends({}, action.meta, {
        webSocket: webSocket
      })
    });
  }
};

function arrayify(obj) {
  return obj ? Array.isArray(obj) ? obj : [obj] : [];
}

function createWebSocketMiddleware(urlOrFactory) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_OPTIONS;

  options = _extends({}, DEFAULT_OPTIONS, options);
  options.binaryType = options.binaryType.toLowerCase();
  options.unfold = options.unfold && (typeof options.unfold === 'function' ? options.unfold : DEFAULT_OPTIONS.unfold);

  var _options = options,
      namespace = _options.namespace;


  return function (store) {
    var webSocket = void 0;

    if (typeof urlOrFactory === 'function') {
      webSocket = urlOrFactory();
    } else {
      webSocket = new WebSocket(urlOrFactory);
    }

    webSocket.onopen = function () {
      return store.dispatch({ type: '' + namespace + OPEN, meta: { webSocket: webSocket } });
    };
    webSocket.onclose = function () {
      return store.dispatch({ type: '' + namespace + CLOSE, meta: { webSocket: webSocket } });
    };
    webSocket.onmessage = function (event) {
      var getPayload = void 0;

      if (typeof Blob !== 'undefined' && options.binaryType === 'arraybuffer' && event.data instanceof Blob) {
        getPayload = (0, _blobToArrayBuffer2.default)(event.data);
      } else if (typeof ArrayBuffer !== 'undefined' && options.binaryType === 'blob' && event.data instanceof ArrayBuffer) {
        getPayload = new Blob([event.data]);
      } else {
        // We make this a Promise because we might want to keep the sequence of dispatch, @@websocket/MESSAGE first, then unfold later.
        getPayload = Promise.resolve(event.data);
      }

      return getPayload.then(function (payload) {
        if (options.unfold) {
          var action = options.unfold(payload, webSocket, payload);

          if (action) {
            if (!(0, _isFSA2.default)(action)) {
              throw new Error('Unfolded action is not a Flux Standard Action compliant');
            }

            return action && store.dispatch(action);
          }
        }

        store.dispatch({
          type: '' + namespace + MESSAGE,
          meta: { webSocket: webSocket },
          payload: payload
        });
      });
    };

    return function (next) {
      return function (action) {
        if (action.type === '' + namespace + SEND) {
          webSocket.send(action.payload);
        } else {
          var payload = options.fold(action, webSocket);

          payload && webSocket.send(payload);
        }

        return next(action);
      };
    };
  };
}

function tryParseJSON(json) {
  try {
    return JSON.parse(json);
  } catch (err) {}
}

function trimUndefined(map) {
  return Object.keys(map).reduce(function (nextMap, key) {
    var value = map[key];

    if (typeof value !== 'undefined') {
      nextMap[key] = value;
    }

    return nextMap;
  }, {});
}
//# sourceMappingURL=index.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeKeys = makeKeys;
exports.keyDown = keyDown;
exports.keyUp = keyUp;
exports.mouseDownLeft = mouseDownLeft;
exports.mouseDownRight = mouseDownRight;
exports.mouseMove = mouseMove;
exports.mouseUpLeft = mouseUpLeft;
exports.mouseUpRight = mouseUpRight;
exports.clickedLeft = clickedLeft;
exports.clickedRight = clickedRight;
exports.zoomIn = zoomIn;
exports.zoomOut = zoomOut;
exports.setPartyTab = setPartyTab;
exports.dragItem = dragItem;
exports.endDrag = endDrag;
exports.refreshSlots = refreshSlots;
exports.changeMode = changeMode;
exports.closeStory = closeStory;
exports.removePartyMember = removePartyMember;

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(19);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function makeKeys() {
  var keys = {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
    "Enter": false,
    "Backspace": false,
    "Delete": false,
    "Escape": false
  };
  for (var i = 48; i <= 57; i++) {
    keys[String.fromCharCode(i)] = false;
  }
  for (var _i = 65; _i <= 90; _i++) {
    keys[String.fromCharCode(_i)] = false;
  }
  for (var _i2 = 97; _i2 <= 122; _i2++) {
    keys[String.fromCharCode(_i2)] = false;
  }
  return keys;
}

function keyDown(state, action) {
  if (state.keys.hasOwnProperty(action.payload.key)) {
    return (0, _utils.updateObject)(state, {
      keys: (0, _utils.updateObject)(state.keys, _defineProperty({}, action.payload.key, true))
    });
  } else {
    return state;
  }
}

function keyUp(state, action) {
  if (state.keys.hasOwnProperty(action.payload.key)) {
    return (0, _utils.updateObject)(state, {
      keys: (0, _utils.updateObject)(state.keys, _defineProperty({}, action.payload.key, false))
    });
  } else {
    return state;
  }
}

function mouseDownLeft(state, action) {
  return (0, _utils.updateObject)(state, {
    mouseDownLeft: { x: action.payload.x, y: action.payload.y },
    mouseDrop: { x: null, y: null }
  });
}

function mouseDownRight(state, action) {
  return (0, _utils.updateObject)(state, {
    mouseDownRight: { x: action.payload.x, y: action.payload.y }
  });
}

function mouseMove(state, action) {
  if (state.mouseDownLeft.x && state.mouseDownLeft.y) {
    return (0, _utils.updateObject)(state, {
      mouseOffset: {
        x: state.mouseOffset.x + action.payload.x - state.mousePos.x,
        y: state.mouseOffset.y + action.payload.y - state.mousePos.y
      },
      mousePos: { x: action.payload.x, y: action.payload.y }
    });
  } else {
    return (0, _utils.updateObject)(state, {
      mouseOffset: { x: null, y: null },
      mousePos: { x: action.payload.x, y: action.payload.y }
    });
  }
}

function mouseUpLeft(state, action) {
  if (Math.abs(state.mouseDownLeft.x - action.payload.x) < 15 && Math.abs(state.mouseDownLeft.y - action.payload.y) < 15) {
    return (0, _utils.updateObject)(state, {
      mouseOffset: { x: null, y: null },
      mouseDownLeft: { x: null, y: null },
      clickLeft: { x: action.payload.x, y: action.payload.y }
    });
  } else {
    return (0, _utils.updateObject)(state, {
      mouseOffset: { x: null, y: null },
      mouseDownLeft: { x: null, y: null },
      mouseDrop: { x: action.payload.x, y: action.payload.y }
    });
  }
}

function mouseUpRight(state, action) {
  return (0, _utils.updateObject)(state, {
    mouseDownRight: { x: null, y: null },
    clickRight: { x: action.payload.x, y: action.payload.y }
  });
}

function clickedLeft(state) {
  return (0, _utils.updateObject)(state, {
    clickLeft: { x: null, y: null }
  });
}

function clickedRight(state) {
  return (0, _utils.updateObject)(state, {
    clickRight: { x: null, y: null }
  });
}

function zoomIn(state) {
  if (state.zoom < 5) {
    return (0, _utils.updateObject)(state, {
      zoom: state.zoom + 1
    });
  } else {
    return state;
  }
}

function zoomOut(state) {
  if (state.zoom > 1) {
    return (0, _utils.updateObject)(state, {
      zoom: state.zoom - 1
    });
  } else {
    return state;
  }
}

function setPartyTab(state, action) {
  return (0, _utils.updateObject)(state, {
    partyTab: action.payload.partyTab
  });
}

function dragItem(state, action) {
  return (0, _utils.updateObject)(state, {
    draggedItem: (0, _utils.updateObject)(action.payload.item, {
      quantity: action.payload.quantity,
      type: _constants.SLOTS.DRAG
    }),
    draggedOrigin: (0, _utils.updateObject)(action.payload.item, {
      quantity: action.payload.item.quantity - action.payload.quantity,
      x: action.payload.item.xPos - action.payload.x,
      y: action.payload.item.yPos - action.payload.y
    })
  });
}

function endDrag(state) {
  return (0, _utils.updateObject)(state, {
    draggedItem: null,
    draggedOrigin: null
  });
}

// export function setItemPosition(state, action) {
//   return updateObject(state, {
//     inventory: updateItemInArray(state.inventory, action.payload.id, (item) => {
//       return updateObject(item, {
//         type: action.payload.type,
//         position: action.payload.position
//       });
//     })
//   });
// }

// TODO: Enable this and delete above when server-side item positioning is ready
// NOTE: See Items.js, line 125
// export function setItemPosition(state, action) {
//   const { start, end } = action.payload;
//   return updateObject(state, {
//     inventory: updatePositionInArray(
//       state.inventory, start.type, start.position,
//       (item) => updateObject(item, { type: end.type, position: end.position })
//     )
//   });
// }

function refreshSlots(state, action) {
  return (0, _utils.updateObject)(state, {
    slots: action.payload.slots
  });
}

function changeMode(state, action) {
  return (0, _utils.updateObject)(state, {
    mode: action.payload.mode
  });
}

function closeStory(state) {
  if (state.stories.length > 0) {
    return (0, _utils.updateObject)(state, {
      stories: state.stories.slice(0, state.stories.length - 1)
    });
  } else {
    return state;
  }
}

function removePartyMember(state, action) {
  return (0, _utils.updateObject)(state, {
    party: state.party.filter(function (member) {
      return member.id !== action.payload.id;
    })
  });
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateObject = updateObject;
exports.updateItemInArray = updateItemInArray;
exports.updatePositionInArray = updatePositionInArray;
exports.mergeArrays = mergeArrays;
exports.updateStory = updateStory;
exports.updateInventoryChanges = updateInventoryChanges;
exports.updatePartyChanges = updatePartyChanges;
exports.getActions = getActions;

var _constants = __webpack_require__(0);

function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
};

function updateItemInArray(array, itemId, updateItemCallback) {
  return array.map(function (item) {
    if (item.id !== itemId) return item;
    return updateItemCallback(item);
  });
};

function updatePositionInArray(array, type, position, updateItemCallback) {
  return array.map(function (item) {
    if (item.type !== type && item.position !== position) return item;
    return updateItemCallback(item);
  });
};

function mergeArrays(oldArray, newArray) {
  if (!newArray) return oldArray;
  var obj = {};
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = oldArray[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var oldItem = _step.value;

      obj[oldItem.id] = oldItem;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    var _loop = function _loop() {
      var newItem = _step2.value;

      if (obj.hasOwnProperty(newItem.id)) {
        if (newItem.quantity === 0) {
          delete obj[newItem.id];
          return 'break';
        } else if (newItem.health === 0 && !obj[newItem.id].hasOwnProperty('timestamp')) {
          obj[newItem.id] = Object.assign(obj[newItem.id], newItem, {
            timestamp: Date.now()
          });
        } else {
          obj[newItem.id] = Object.assign(obj[newItem.id], newItem);
        }
      } else {
        obj[newItem.id] = newItem;
      }
      if (newItem.hasOwnProperty('skill_changes') && newItem.skill_changes.length > 0) {
        obj[newItem.id] = Object.assign(obj[newItem.id], {
          skills: newItem.skills.map(function (skill) {
            var match = newItem.skill_changes.find(function (change) {
              return skill.id === change.id;
            });
            if (match) {
              return Object.assign(skill, match);
            } else {
              return skill;
            }
          })
        });
      }
      if (newItem.hasOwnProperty('modifier_changes') && newItem.modifier_changes.length > 0) {
        obj[newItem.id] = Object.assign(obj[newItem.id], {
          modifiers: newItem.modifiers.map(function (modifier) {
            var match = newItem.modifier_changes.find(function (change) {
              return modifier.id === change.id;
            });
            if (match) {
              return Object.assign(modifier, match);
            } else {
              return modifier;
            }
          })
        });
      }
    };

    for (var _iterator2 = newArray[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var _ret = _loop();

      if (_ret === 'break') break;
    }
    // convert object of items into array of items
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  var result = [];
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) result.push(obj[prop]);
  }
  return result;
};

function updateStory(state, action) {
  if (action.payload.story) {
    return state.stories.concat([Object.assign({}, action.payload.story, {
      inventoryChanges: action.payload.inventory || [],
      partyChanges: action.payload.party || [],
      buttons: action.payload.story.buttons || [{ text: 'OK', id: 1 }],
      canDispatch: action.payload.story.buttons ? true : false,
      timestamp: Date.now()
    })]);
  } else {
    return state.stories;
  }
}

// Helper function that enforces minimum offset between update text timestamps
function getTimestamp(changes, offset, now) {
  if (changes.length > 0) {
    var latest = changes[changes.length - 1];
    if (now - latest.timestamp < offset) {
      return latest.timestamp + offset;
    }
  }
  return now;
}

function updateInventoryChanges(state, action) {
  var inventory = action.payload.inventory;
  if (inventory && inventory.length > 0) {
    var now = Date.now();
    var timestamp = getTimestamp(state.inventoryChanges, _constants.UPDATE_TEXT_OFFSET, now);
    return state.inventoryChanges.concat(inventory.filter(function (item) {
      return item.hasOwnProperty('change');
    }).map(function (item, index) {
      return Object.assign({}, item, {
        timestamp: timestamp + index * _constants.UPDATE_TEXT_OFFSET
      });
    }));
  } else {
    return state.inventoryChanges;
  }
}

function updatePartyChanges(state, action) {
  var party = action.payload.party;
  if (party && party.length > 0) {
    var changes = [];
    var now = Date.now();
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      var _loop2 = function _loop2() {
        var item = _step3.value;

        var memberChanges = state.partyChanges.filter(function (member) {
          return item.id === member.id;
        });
        var timestamp = getTimestamp(memberChanges, _constants.UPDATE_TEXT_DURATION, now);

        // NOTE Check for health changes
        if (item.hasOwnProperty('health_change') && item.health_change !== 0) {
          changes.push(Object.assign({}, {
            id: item.id,
            change: item.health_change,
            name: 'health',
            timestamp: timestamp
          }));
          timestamp += _constants.UPDATE_TEXT_DURATION;
        }

        // Check for new or dead party members
        // NOTE loggedIn tests whether the user is starting a new session
        if (item.hasOwnProperty('health') && state.loggedIn === true) {
          var match = state.party.find(function (member) {
            return member.id === item.id;
          });
          if (!match) {
            changes.push(Object.assign({}, {
              id: item.id,
              change: 1,
              name: item.name,
              timestamp: timestamp
            }));
            timestamp += _constants.UPDATE_TEXT_DURATION;
          } else if (item.health === 0) {
            changes.push(Object.assign({}, {
              id: item.id,
              change: -1,
              name: item.name,
              timestamp: timestamp
            }));
            timestamp += _constants.UPDATE_TEXT_DURATION;
            return 'continue';
          }
        }

        // Check for jeito changes
        if (item.hasOwnProperty('jeito_change') && item.jeito_change !== 0) {
          changes.push(Object.assign({}, {
            id: item.id,
            change: item.jeito_change,
            name: 'jeito',
            timestamp: timestamp
          }));
          timestamp += _constants.UPDATE_TEXT_DURATION;
        }

        // Check for skill changes
        if (item.hasOwnProperty('skill_changes') && item.skill_changes.length > 0) {
          changes = changes.concat(item.skill_changes.map(function (change) {
            var result = Object.assign({}, {
              id: item.id,
              change: 1,
              name: change.name,
              timestamp: timestamp
            });
            timestamp += _constants.UPDATE_TEXT_DURATION;
            return result;
          }));
        }

        // Check for modifier changes
        if (item.hasOwnProperty('modifier_changes') && item.modifier_changes.length > 0) {
          changes = changes.concat(item.modifier_changes.map(function (change) {
            var match = item.modifiers.find(function (modifier) {
              return modifier.id === change.id;
            });
            var result = Object.assign({}, {
              id: item.id,
              change: match ? 1 : -1,
              name: change.name,
              timestamp: timestamp
            });
            timestamp += _constants.UPDATE_TEXT_DURATION;
            return result;
          }));
        }
      };

      for (var _iterator3 = party[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var _ret2 = _loop2();

        if (_ret2 === 'continue') continue;
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    return state.partyChanges.concat(changes);
  } else {
    return state.partyChanges;
  }
}

function getActions(inventory, tiles, position) {
  var actions = { 'main': [] };

  var itemsByTag = {};
  inventory.length > 0 && inventory.forEach(function (item) {
    item.tags.forEach(function (tag, index) {
      if (itemsByTag[tag]) {
        itemsByTag[tag].push(item);
      } else {
        itemsByTag[tag] = Array(item);
      }
    });
  });

  if (itemsByTag['seed']) {
    actions['main'].push({ target: 'seed', id: 10, tileset: 'icons' });
    actions['seed'] = [{ target: 'main', name: 'back', id: 18, tileset: 'icons' }].concat(itemsByTag['seed'].map(function (item) {
      return { tag: 'seed', name: 'plant ' + item.name, id: item.id, tileset: 'items' };
    }));
  }

  var currentTile = tiles.find(function (tile) {
    return tile.id === position;
  });
  if (currentTile && currentTile.crops && currentTile.crops.length > 0) {
    actions['main'].push({ target: 'harvest', id: 14, tileset: 'icons' });
    actions['harvest'] = [{ target: 'main', name: 'back', id: 18, tileset: 'icons' }].concat(currentTile.crops.map(function (crop) {
      if (crop.stage === 0) {
        return Object.assign({}, crop, { tag: 'harvest', tileset: 'items' });
      } else {
        return Object.assign({}, crop, { id: 12, tileset: 'icons' });
      }
    }));
  }

  if (currentTile && currentTile.fishing && itemsByTag['fishing']) {
    actions['main'].push({ target: 'fishing', id: 17, tileset: 'icons' });
    actions['fishing'] = [{ target: 'main', name: 'back', id: 18, tileset: 'icons' }].concat(itemsByTag['fishing'].map(function (item) {
      return { tag: 'fishing', name: item.name, id: item.id, tileset: 'items' };
    }));
  }

  if (currentTile && currentTile.hunting && itemsByTag['hunting']) {
    actions['main'].push({ target: 'hunting', id: 16, tileset: 'icons' });
    actions['hunting'] = [{ target: 'main', name: 'back', id: 18, tileset: 'icons' }].concat(itemsByTag['hunting'].map(function (item) {
      return { tag: 'hunting', name: item.name, id: item.id, tileset: 'items' };
    }));
  }

  return actions;
}

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = exports.revisedInitialState = undefined;

var _constants = __webpack_require__(0);

var _keys = __webpack_require__(52);

var _keys2 = _interopRequireDefault(_keys);

var _ui = __webpack_require__(18);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import party from '../../../data/party.json';
// import inventory from '../../../data/inventory.json';
// import vehicle from '../../../data/vehicle.json';
// import story from '../../../data/story.json';

var uiState = {
  mode: _constants.MODE.TITLE,
  partyTab: 0,
  actions: { 'main': [] },
  zoom: 3,
  draggedItem: null,
  draggedOrigin: null,
  slots: []
};

var gameState = {
  tiles: [],
  party: [], // DEBUG with party
  inventory: [], // DEBUG with inventory
  vehicle: null, // DEBUG with vehicle
  stories: [], // DEBUG with story TODO update to stories in example
  inventoryChanges: [],
  partyChanges: [],
  position: null,
  xCoord: null,
  yCoord: null,
  positionTarget: null,
  xTarget: null,
  yTarget: null,
  sight: null,
  pace: null,
  rations: null
};

var inputState = {
  mouseDownLeft: { x: null, y: null },
  mouseDownRight: { x: null, y: null },
  mouseDrop: { x: null, y: null },
  mouseOffset: { x: null, y: null },
  mousePos: { x: null, y: null },
  clickLeft: { x: null, y: null },
  clickRight: { x: null, y: null },
  keys: (0, _ui.makeKeys)()
};

var connectionState = {
  connected: false,
  loggedIn: false,
  sending: false,
  error: null,
  errorMessage: null,
  errorLog: []
};

var revisedInitialState = exports.revisedInitialState = function revisedInitialState(newState) {
  return Object.assign({}, uiState, gameState, inputState, connectionState, newState);
};

var initialState = exports.initialState = Object.assign({}, uiState, gameState, inputState, connectionState);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.failureDialog = failureDialog;

var _utils = __webpack_require__(8);

function failureDialog(message, dimCallback) {
  var container = document.getElementById('container');
  var dialog = (0, _utils.create)('div', 'dialog', 'failure');
  container.append(dialog);

  var title = (0, _utils.create)('div', 'title');
  title.innerHTML = 'FAILURE';
  var text = (0, _utils.create)('div', 'text');
  text.innerHTML = message;
  var submit = (0, _utils.create)('button', 'submit');
  submit.innerHTML = 'OK';
  var buttons = (0, _utils.create)('div', 'buttons');
  buttons.append(submit);

  dimCallback(true);

  submit.onclick = function () {
    dimCallback(false);
    container.contains(dialog) && container.removeChild(dialog);
  };

  var content = (0, _utils.create)('div', 'content');
  content.append(title, text, buttons);
  dialog.append(content);
}

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(23);

__webpack_require__(30);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(24);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(28)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(25);
exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'MECC';\n  src: url(" + escape(__webpack_require__(27)) + ") format('truetype');\n}\n\nhtml, body {\n  background-color: #222;\n  height: 100%;\n  margin: 0;\n\tfont-family: 'MECC', Courier, sans-serif;\n}\n\n#container {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#container canvas, .dialog {\n  position: absolute;\n}\n\n.dialog {\n  border: 4px solid white;\n  /* width: 600px; */\n  color: white;\n  background-color: black;\n  text-align: center;\n}\n\n.dialog .content {\n  padding: 8px;\n}\n\n.content div {\n  padding: 8px;\n}\n\n.title {\n  font-size: 28px;\n}\n\n.input-line {\n}\n\n.label-container, .input-container {\n  display: inline-block;\n}\n\n.label {\n  width: 130px;\n  margin-right: 8px;\n}\n\ninput, button {\n  border: 4px solid white;\n  font-family: inherit;\n}\n\ninput {\n  color: black;\n}\n\nbutton {\n  width: 120px;\n  padding: 4px;\n  color: white;\n  background-color: black;\n}\n\n.spacer {\n  display: inline-block;\n  width: 34px;\n}\n\n.items {\n  border: 2px solid white;\n  margin: 8px;\n  overflow: auto;\n  padding: 0px;\n}\n\n.items div {\n  padding: 0px;\n}\n\n.left {\n  float: left;\n}\n\n.right {\n  float: right;\n}\n\n.clear {\n  clear: both;\n}\n", ""]);

// exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 26 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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AP8AgIABAAEAAQD/AAEAgID/AAEAgIABAICA/gCAgICAgICAgICAgICAgAAAAwAAAAADAAOAAAMAFwAbAAAhESERJTUzNTM1MzUzNSEVIxUjFSMVIxUBESERAgABAP0AgICAgAEAgICAgP8AAQABAP8AgICAgICAgICAgIACAAEA/wAAAAMAAAAAA4ADgAADAAcAIwAAJREjERMRIxEDNSMRMzUjETM1IRUzESMVMzUhFSMRMxUhNSMVAYCAgICAgICAgAGAgICAAQCAgP8AgIABAP8AAYABAP8A/gCAAQCAAQCAgP8AgICA/wCAgIAAAAEAAAIAAgADgAALAAARNTM1MzUhFSMVIxWAgAEAgIACAICAgICAgAABAAAAAAIAA4AAEwAAITUjNSMRMzUzNSEVIxUjETMVMxUBAICAgIABAICAgICAgAGAgICAgP6AgIAAAAABAAAAAAIAA4AAEwAAMTUzNTMRIzUjNSEVMxUzESMVIxWAgICAAQCAgICAgIABgICAgID+gICAAAEAAAAABAADgAAjAAAhESMVITUzNTM1IzUjNSEVMxEhETM1IRUjFSMVMxUzFSE1IxEBgID/AICAgIABAIABAIABAICAgID/AIABAICAgICAgIABAP8AgICAgICAgP8AAAEAAACAAwADAAALAAAlESE1IREhESEVIREBAP8AAQABAAEA/wCAAQCAAQD/AID/AAAAAAABAAD/gAGAAQAABwAAFTUzESERIxWAAQCAgIABAP8AgAAAAAABAAABgAKAAgAAAwAAETUhFQKAAYCAgAABAAAAAAEAAIAAAwAAMTUhFQEAgIAAAAABAAAAgAMAAwAAEwAAPQEzNTM1MzUzNSEVIxUjFSMVIxWAgICAAQCAgICAgICAgICAgICAgIAAAAIAAAAAAwADgAADAA8AACURIREHNSMRMzUhFTMRIxUCAP8AgICAAgCAgIACgP2AgIACgICA/YCAAAAAAAEAgAAAAoADgAALAAAzNTMRIzUzNSERMxWAgICAAQCAgAIAgID9AIAAAAAAAQAAAAADAAOAABkAADERMzUzNSERIRUhNTM1IRUzESMVIRUjFSEVgIABAP8A/wCAAgCAgP8AgAIAAQCAgAEAgICAgP8AgICAgAAAAAEAAAAAAwADgAAXAAAzNSM1IRUhESE1MzUzNSE1IREjETMRIxWAgAEAAQD/AICA/gADAICAgICAgAEAgICAgP8A/wD/AIAAAAIAAAAAAwADgAADABMAAAE1IxUTESERMzUzNTM1IREzFSMRAYCAgP6AgICAAQCAgAGAgID+gAEAAQCAgID+AID/AAAAAQAAAAADAAOAABMAADM1IzUhFSERIREhFSEVIRUzESMVgIABAAEA/gADAP4AAYCAgICAgAGAAYCAgID+gIAAAAIAAAAAAwADgAADABcAACURIREHNSMRMzUzNSEVIRUjFSEVMxEjFQIA/wCAgICAAgD+gIABgICAgAEA/wCAgAIAgICAgICA/wCAAAABAAAAAAMAA4AAEQAAMxEzNTM1MzUhNSERIxUjFSMRgICAgP4AAwCAgIABgICAgID/AICA/oAAAAMAAAAAAwADgAADAAcAGwAAJREhEQERIREDNSMRMzUjETM1IRUzESMVMxEjFQIA/wABAP8AgICAgIACAICAgICAAQD/AAGAAQD/AP4AgAEAgAEAgID/AID/AIAAAgAAAAADAAOAAAMAFwAAAREhEQE1ITUzNSE1IxEzNSEVMxEjFSMVAgD/AP8AAYCA/oCAgAIAgICAAgABAP8A/gCAgICAAQCAgP4AgIAAAAACAAAAgAEAAgAAAwAHAAA9ASEVATUhFQEA/wABAICAgAEAgIAAAAAAAgAA/4ABgAIAAAcACwAAFTUzESERIxUDNSEVgAEAgIABAICAAQD/AIACAICAAAAAAQAAAAACgAOAABsAACE1IzUjNSM1MzUzNTM1IRUjFSMVIxUzFTMVMxUBgICAgICAgAEAgICAgICAgICAgICAgICAgICAgIAAAgAAAIACgAKAAAMABwAAPQEhFQE1IRUCgP2AAoCAgIABgICAAAAAAAEAAAAAAoADgAAbAAAxNTM1MzUzNSM1IzUjNSEVMxUzFTMVIxUjFSMVgICAgICAAQCAgICAgICAgICAgICAgICAgICAgAAAAAIAAAAAAwADgAADABcAACE1IRUBETM1MzUhFSE1MzUhFTMVIxUjEQEAAQD/AICA/wD/AIACAICAgICAAQABAICAgICAgICA/wAAAAABAAAAAAOAA4AAFQAAMzUjETM1IRUzESMVIREzFTMRIREhFYCAgAKAgID+gICA/oACAIACgICA/oCAAYCAAQD9gIAAAAIAAAAAAwADgAADABMAAAERIREBETM1MzUhFTMVMxEhESERAgD/AP8AgIABAICA/wD/AAGAAQD/AP6AAoCAgICA/YABAP8AAAMAAAAAAwADgAADAAcAEwAAJREhEQERIREBESEVMxEjFTMRIxUCAP8AAQD/AP8AAoCAgICAgAEA/wABgAEA/wD+AAOAgP8AgP8AgAABAAAAAAMAA4AAEwAAMzUjETM1IRUzFSE1IREhNSEVIxWAgIACAID/AP8AAQABAICAAoCAgICA/YCAgIAAAAAAAgAAAAADAAOAAAMACwAAJREhEQURIRUzESMVAgD/AP8AAoCAgIACgP2AgAOAgP2AgAAAAAEAAAAAAwADgAALAAAxESEVIREhFSERIRUDAP4AAYD+gAIAA4CA/wCA/wCAAAAAAAEAAAAAAwADgAAJAAAxESEVIREhFSERAwD+AAGA/oADgID/AID+gAABAAAAAAMAA4AADwAAMzUjETM1IRUhESE1IzUhEYCAgAKA/gABAIABgIACgICA/YCAgP6AAAAAAAEAAAAAAwADgAALAAAxESERIREhESERIREBAAEAAQD/AP8AA4D+gAGA/IABgP6AAAEAAAAAAgADgAALAAAxNTMRIzUhFSMRMxWAgAIAgICAAoCAgP2AgAABAAAAAAMAA4AACwAAMzUjNSEVIREhESMVgIABAAEAAQCAgICAAwD9AIAAAAEAAAAAAwADgAAbAAAxESERMzUzNSEVIxUjFSMVMxUzFTMVITUjNSMRAQCAgAEAgICAgICA/wCAgAOA/wCAgICAgICAgICAgP8AAAABAAAAAAMAA4AABQAAMREhESEVAQACAAOA/QCAAAAAAAEAAAAAA4ADgAATAAAxESEVMxUzNTM1IREhESMVIzUjEQEAgICAAQD/AICAgAOAgICAgPyAAgCAgP4AAAEAAAAAA4ADgAATAAAxESEVMxUzFTMRIREhNSM1IzUjEQEAgICAAQD/AICAgAOAgICAAYD8gICAgP6AAAIAAAAAAwADgAADAA8AACURIREHNSMRMzUhFTMRIxUCAP8AgICAAgCAgIACgP2AgIACgICA/YCAAAAAAAIAAAAAAwADgAADAA0AAAERIREBESEVMxEjFSERAgD/AP8AAoCAgP6AAgABAP8A/gADgID/AID+gAAAAAEAAAAAAwADgAAXAAAzNSMRMzUhFTMRIxUzFSE1IzUzESERMxWAgIACAICAgP8AgID/AICAAoCAgP4AgICAgAIA/YCAAAAAAAIAAAAAAwADgAADABcAAAERIREBESEVMxEjFSMVMxUzFSE1IzUjEQIA/wD/AAKAgICAgID/AICAAgABAP8A/gADgID/AICAgICAgP8AAAAAAQAAAAADAAOAABsAADM1IzUhFSERITUjETM1IRUzFSE1IREhFTMRIxWAgAEAAQD+gICAAgCA/wD/AAGAgICAgIABAIABAICAgID/AID/AIAAAAAAAQAAAAADAAOAAAcAACERITUhFSERAQD/AAMA/wADAICA/QAAAQAAAAADAAOAAAsAADM1IxEhESERIREjFYCAAQABAAEAgIADAP0AAwD9AIAAAAAAAQAAAAADAAOAAA8AACE1IzUjESERIREhESMVIxUBAICAAQABAAEAgICAgAKA/YACgP2AgIAAAAABAAAAAAOAA4AAEwAAMREhETM1MxUzESERITUjNSMVIxUBAICAgAEA/wCAgIADgP4AgIACAPyAgICAgAABAAAAAAMAA4AAGwAAMREzNTM1IzUjESERIREhESMVIxUzFTMRIREhEYCAgIABAAEAAQCAgICA/wD/AAEAgICAAQD/AAEA/wCAgID/AAEA/wAAAAABAAAAAAMAA4AADwAAIREjNSMRIREhESERIxUjEQEAgIABAAEAAQCAgAIAgAEA/wABAP8AgP4AAAEAAAAAAwADgAAXAAAxETM1MzUzNTM1ITUhESMVIxUjFSMVIRWAgICA/gADAICAgIACAAEAgICAgID/AICAgICAAAAAAQAAAAACgAOAAAcAADERIRUhESEVAoD+gAGAA4CA/YCAAAAAAQAAAIADAAMAABMAACU1IzUjNSM1IzUhFTMVMxUzFTMVAgCAgICAAQCAgICAgICAgICAgICAgIAAAAAAAQAAAAACgAOAAAcAADE1IREhNSERAYD+gAKAgAKAgPyAAAAAAQAAAQADAAKAAA8AABE1MzUzNSEVMxUzFSE1IRWAgAEAgID/AP8AAQCAgICAgICAgAAAAAEAAP+AAwAAAAADAAAVNSEVAwCAgIAAAAEAAAIAAgADgAALAAABNSM1IzUhFTMVMxUBAICAAQCAgAIAgICAgICAAAAAAgAAAAADAAKAAAMAEQAAJTUhFQc1IzUzNSE1ITUhFTMRAgD/AICAgAGA/oACAICAgICAgICAgICA/gAAAgAAAAADAAOAAAMADQAAJREhEQURIREhFTMRIxUCAP8A/wABAAGAgICAAYD+gIADgP8AgP6AgAABAAAAAAMAAoAACwAAMzUjETM1IRUhESEVgICAAoD+AAIAgAGAgID+gIAAAAIAAAAAAwADgAADAA0AACURIREHNSMRMzUhESERAgD/AICAgAGAAQCAAYD+gICAAYCAAQD8gAAAAgAAAAADAAKAAAMAEQAAATUhFQM1IxEzNSEVMxEhFSEVAgD/AICAgAIAgP4AAgABgICA/oCAAYCAgP8AgIAAAAEAAAAAAwADgAATAAAzESM1MxEzNSEVMxUhNSMRMxUjEYCAgIABgID/AICAgAGAgAEAgICAgP8AgP6AAAIAAP+AAwACgAADABEAAAERIREDNSE1ITUjETM1IREjFQIA/wCAAYD+gICAAoCAAQABAP8A/oCAgIABAID9gIAAAAAAAQAAAAADAAOAAAsAADERIREhFTMRIREhEQEAAYCA/wD/AAOA/wCA/gACAP4AAAAAAgAAAAACAAOAAAkADQAAMTUzESM1IREzFQE1IRWAgAGAgP6AAQCAAYCA/gCAAwCAgAAAAAIAAP+AAoADgAANABEAABc1IzUhFTMRIzUhESMVAzUhFYCAAQCAgAGAgIABAICAgIACAID9gIADgICAAAEAAAAAAwADgAAXAAAxESERMzUzNSEVIxUjFTMVMxUhNSM1IxEBAICAAQCAgICA/wCAgAOA/gCAgICAgICAgID/AAAAAQAAAAACAAOAAAkAADE1MxEjNSERMxWAgAGAgIACgID9AIAAAQAAAAADgAKAABMAADERMzUhFTM1IRUzESERIxUjNSMRgAEAgAEAgP8AgICAAgCAgICA/gABgICA/oAAAQAAAAADAAKAAAkAADERIRUzESERIRECgID/AP8AAoCA/gACAP4AAAIAAAAAAwACgAADAA8AACURIREHNSMRMzUhFTMRIxUCAP8AgICAAgCAgIABgP6AgIABgICA/oCAAAAAAAIAAP+AAwACgAADAA0AAAERIREBESEVMxEjFSERAgD/AP8AAoCAgP6AAQABAP8A/oADAID/AID/AAAAAAIAAP+AAwACgAADAA0AAAERIREBESE1IxEzNSERAgD/AAEA/oCAgAKAAQABAP8A/oABAIABAID9AAAAAAEAAAAAAwACgAAJAAAxESEVMxUhNSERAoCA/wD/AAKAgICA/gAAAAABAAAAAAMAAoAAEwAAMTUhNSE1IzUzNSEVIRUhFTMVIxUCAP6AgIACgP4AAYCAgICAgICAgICAgIAAAAABAAAAAAMAA4AAEwAAITUjESM1MxEhESEVIREzNSEVIxUBAICAgAEAAQD/AIABAICAAYCAAQD/AID+gICAgAAAAQAAAAADAAKAAAkAADM1IxEhESERIRGAgAEAAQABAIACAP4AAgD9gAAAAAABAAAAAAMAAoAADwAAITUjNSMRIREhESERIxUjFQEAgIABAAEAAQCAgICAAYD+gAGA/oCAgAAAAAEAAAAAA4ACgAAPAAAxESERMzUzFTMRIREhNSMVAQCAgIABAP6AgAKA/oCAgAGA/YCAgAABAAAAAAMAAoAAGwAAMTUzNTM1IzUjNSEVITUhFSMVIxUzFTMVITUhFYCAgIABAAEAAQCAgICA/wD/AICAgICAgICAgICAgICAAAAAAQAA/4ADAAKAAA8AABc1ITUhNSMRIREhESERIxWAAYD+gIABAAEAAQCAgICAgAGA/oABgP2AgAABAAAAAAMAAoAAEwAAMTUzNTM1MzUhNSEVIxUjFSMVIRWAgID+gAMAgICAAYCAgICAgICAgICAAAEAAAAAAgADgAATAAAhNSMRIzUzETM1IRUjESMVMxEzFQEAgICAgAEAgICAgIABAIABAICA/wCA/wCAAAEAAP+AAQADgAADAAAVESERAQCABAD8AAAAAAABAAAAAAIAA4AAEwAAMTUzETM1IxEjNSEVMxEzFSMRIxWAgICAAQCAgICAgAEAgAEAgID/AID/AIAAAAABAAACgAOAA4AADwAAETUzNSEVMzUhFSMVITUjFYABgIABAID+gIACgICAgICAgICAAAAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAAAeAW4AAQAAAAAAAAAYADIAAQAAAAAAAQAOAGkAAQAAAAAAAgAHAIgAAQAAAAAAAwAZAMQAAQAAAAAABAAWAQwAAQAAAAAABQALATsAAQAAAAAABgAOAWUAAQAAAAAABwA8Ae4AAQAAAAAACAAWAlkAAQAAAAAACQAJAoQAAQAAAAAACgDhBFIAAQAAAAAADAA/BbQAAQAAAAAADQAoBkYAAQAAAAAADgAuBs0AAQAAAAAAEwApB1AAAwABBAkAAAAwAAAAAwABBAkAAQAcAEsAAwABBAkAAgAOAHgAAwABBAkAAwAyAJAAAwABBAkABAAsAN4AAwABBAkABQAWASMAAwABBAkABgAcAUcAAwABBAkABwB4AXQAAwABBAkACAAsAisAAwABBAkACQASAnAAAwABBAkACgHCAo4AAwABBAkADAB+BTQAAwABBAkADQBQBfQAAwABBAkADgBcBm8AAwABBAkAEwBSBvwAQwBvAHAAeQByAGkAZwBoAHQAIABjAG8AZABlAG0AYQBuADMAOAAgADIAMAAxADAAAENvcHlyaWdodCBjb2RlbWFuMzggMjAxMAAASABlAHIAZQAgAEwAaQBlAHMAIABNAEUAQwBDAABIZXJlIExpZXMgTUVDQwAAUgBlAGcAdQBsAGEAcgAAUmVndWxhcgAARgBvAG4AdABTAHQAcgB1AGMAdAAgAEgAZQByAGUAIABMAGkAZQBzACAATQBFAEMAQwAARm9udFN0cnVjdCBIZXJlIExpZXMgTUVDQwAASABlAHIAZQAgAEwAaQBlAHMAIABNAEUAQwBDACAAUgBlAGcAdQBsAGEAcgAASGVyZSBMaWVzIE1FQ0MgUmVndWxhcgAAVgBlAHIAcwBpAG8AbgAgADEALgAwAABWZXJzaW9uIDEuMAAASABlAHIAZQAtAEwAaQBlAHMALQBNAEUAQwBDAABIZXJlLUxpZXMtTUVDQwAARgBvAG4AdABTAHQAcgB1AGMAdAAgAGkAcwAgAGEAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG8AZgAgAEYAUwBJACAARgBvAG4AdABTAGgAbwBwACAASQBuAHQAZQByAG4AYQB0AGkAbwBuAGEAbAAgAEcAbQBiAEgAAEZvbnRTdHJ1Y3QgaXMgYSB0cmFkZW1hcmsgb2YgRlNJIEZvbnRTaG9wIEludGVybmF0aW9uYWwgR21iSAAAaAB0AHQAcAA6AC8ALwBmAG8AbgB0AHMAdAByAHUAYwB0AC4AYwBvAG0ALwAAaHR0cDovL2ZvbnRzdHJ1Y3QuY29tLwAAYwBvAGQAZQBtAGEAbgAzADgAAGNvZGVtYW4zOAAgHABIAGUAcgBlACAATABpAGUAcwAgAE0ARQBDAEMgHQAgAHcAYQBzACAAYgB1AGkAbAB0ACAAdwBpAHQAaAAgAEYAbwBuAHQAUwB0AHIAdQBjAHQACgBEAGUAcwBpAGcAbgBlAHIAIABkAGUAcwBjAHIAaQBwAHQAaQBvAG4AOgAgAEkAZgAgAHkAbwB1ACAAZwByAGUAdwAgAHUAcAAgAHAAbABhAHkAaQBuAGcAIABUAGgAZQAgAE8AcgBlAGcAbwBuACAAVAByAGEAaQBsACAAbwBuACAAdABoAGUAIABBAHAAcABsAGUAIABJAEkALAAgAHkAbwB1ACcAbABsACAAawBuAG8AdwAgAHQAaABpAHMAIABmAG8AbgB0AC4ADQAKAA0ACgBOAG8AdwAgAHkAbwB1ACwAIAB0AG8AbwAsACAAYwBhAG4AIABjAHIAZQBhAHQAZQAgAGYAYQBrAGUAIABzAGMAcgBlAGUAbgBzAGgAbwB0AHMAIABjAGwAYQBpAG0AaQBuAGcAIAB5AG8AdQAnAHYAZQAgAGQAaQBlAGQAIABvAGYAIABkAHkAcwBlAG4AdABlAHIAeQAhAAoAANJIZXJlIExpZXMgTUVDQ9Mgd2FzIGJ1aWx0IHdpdGggRm9udFN0cnVjdApEZXNpZ25lciBkZXNjcmlwdGlvbjogSWYgeW91IGdyZXcgdXAgcGxheWluZyBUaGUgT3JlZ29uIFRyYWlsIG9uIHRoZSBBcHBsZSBJSSwgeW91J2xsIGtub3cgdGhpcyBmb250Lg0KDQpOb3cgeW91LCB0b28sIGNhbiBjcmVhdGUgZmFrZSBzY3JlZW5zaG90cyBjbGFpbWluZyB5b3UndmUgZGllZCBvZiBkeXNlbnRlcnkhCgAAaAB0AHQAcAA6AC8ALwBmAG8AbgB0AHMAdAByAHUAYwB0AC4AYwBvAG0ALwBmAG8AbgB0AHMAdAByAHUAYwB0AGkAbwBuAHMALwBzAGgAbwB3AC8AMwAwADYANgA4ADkALwBoAGUAcgBlAF8AbABpAGUAcwBfAG0AZQBjAGMAAGh0dHA6Ly9mb250c3RydWN0LmNvbS9mb250c3RydWN0aW9ucy9zaG93LzMwNjY4OS9oZXJlX2xpZXNfbWVjYwAAQwByAGUAYQB0AGkAdgBlACAAQwBvAG0AbQBvAG4AcwAgAEEAdAB0AHIAaQBiAHUAdABpAG8AbgAgAFMAaABhAHIAZQAgAEEAbABpAGsAZQAAQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbiBTaGFyZSBBbGlrZQAAaAB0AHQAcAA6AC8ALwBjAHIAZQBhAHQAaQB2AGUAYwBvAG0AbQBvAG4AcwAuAG8AcgBnAC8AbABpAGMAZQBuAHMAZQBzAC8AYgB5AC0AcwBhAC8AMwAuADAALwAAaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLwAARgBpAHYAZQAgAGIAaQBnACAAcQB1AGEAYwBrAGkAbgBnACAAegBlAHAAaAB5AHIAcwAgAGoAbwBsAHQAIABtAHkAIAB3AGEAeAAgAGIAZQBkAABGaXZlIGJpZyBxdWFja2luZyB6ZXBoeXJzIGpvbHQgbXkgd2F4IGJlZAAAAgAAAAAAAABlADMAAAAAAAAAAAAAAAAAAAAAAAAAAABsAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQDDAIcBBAEFAQYBBwEIAQkBCgELBmdseXBoMQZnbHlwaDIOb25lZG90ZW5sZWFkZXIHdW5pMjBGMAd1bmkyMjE5BkgxODUzMwlpbnZidWxsZXQJaW52Y2lyY2xlCm9wZW5idWxsZXQHdW5pMjZBQgAAAAAAAAH//wACAAEAAAAOAAAAGAAAAAAAAgABAAEAawABAAQAAAACAAAAAAABAAAAAMw9os8AAAAA1YFvxAAAAADXRFoz"

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			var styleTarget = fn.call(this, selector);
			// Special case to return head of iframe instead of iframe itself
			if (styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[selector] = styleTarget;
		}
		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(29);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 29 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(11);

var _index = __webpack_require__(57);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');

  window.oncontextmenu = function () {
    return false;
  };
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  ctx.imageSmoothingEnabled = false;
  ctx.textBaseline = 'alphabetic';

  var rainGame = new _index2.default(_store.store, canvas, ctx);

  rainGame.init();
};

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
function createThunkMiddleware(extraArgument) {
  return function (_ref) {
    var dispatch = _ref.dispatch,
        getState = _ref.getState;
    return function (next) {
      return function (action) {
        if (typeof action === 'function') {
          return action(dispatch, getState, extraArgument);
        }

        return next(action);
      };
    };
  };
}

var thunk = createThunkMiddleware();
thunk.withExtraArgument = createThunkMiddleware;

/* harmony default export */ __webpack_exports__["default"] = (thunk);

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(15);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createStore", function() { return __WEBPACK_IMPORTED_MODULE_0__createStore__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return __WEBPACK_IMPORTED_MODULE_1__combineReducers__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "bindActionCreators", function() { return __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "applyMiddleware", function() { return __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "compose", function() { return __WEBPACK_IMPORTED_MODULE_4__compose__["a"]; });







/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (undefined !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
  Object(__WEBPACK_IMPORTED_MODULE_5__utils_warning__["a" /* default */])('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}



/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(38);




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? Object(__WEBPACK_IMPORTED_MODULE_1__getRawTag_js__["a" /* default */])(value)
    : Object(__WEBPACK_IMPORTED_MODULE_2__objectToString_js__["a" /* default */])(value);
}

/* harmony default export */ __webpack_exports__["a"] = (baseGetTag);


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(36);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9)))

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(14);


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */] ? __WEBPACK_IMPORTED_MODULE_0__Symbol_js__["a" /* default */].toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ __webpack_exports__["a"] = (getRawTag);


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

/* harmony default export */ __webpack_exports__["a"] = (objectToString);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(40);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (overArg);


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__["a"] = (isObjectLike);


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ponyfill_js__ = __webpack_require__(44);
/* global window */


var root;

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = Object(__WEBPACK_IMPORTED_MODULE_0__ponyfill_js__["a" /* default */])(root);
/* harmony default export */ __webpack_exports__["a"] = (result);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(9), __webpack_require__(43)(module)))

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var Symbol = root.Symbol;

	if (typeof Symbol === 'function') {
		if (Symbol.observable) {
			result = Symbol.observable;
		} else {
			result = Symbol('observable');
			Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};


/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(15);




function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state. ' + 'If you want this reducer to hold no value, you can return null instead of undefined.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!Object(__WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__["a" /* default */])(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerShape(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined. If you don\'t want to set a value for this reducer, ' + 'you can use null instead of undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + __WEBPACK_IMPORTED_MODULE_0__createStore__["a" /* ActionTypes */].INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined, but can be null.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (undefined !== 'production') {
      if (typeof reducers[key] === 'undefined') {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  var unexpectedKeyCache = void 0;
  if (undefined !== 'production') {
    unexpectedKeyCache = {};
  }

  var shapeAssertionError = void 0;
  try {
    assertReducerShape(finalReducers);
  } catch (e) {
    shapeAssertionError = e;
  }

  return function combination() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var action = arguments[1];

    if (shapeAssertionError) {
      throw shapeAssertionError;
    }

    if (undefined !== 'production') {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        Object(__WEBPACK_IMPORTED_MODULE_2__utils_warning__["a" /* default */])(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var _i = 0; _i < finalReducerKeys.length; _i++) {
      var _key = finalReducerKeys[_i];
      var reducer = finalReducers[_key];
      var previousStateForKey = state[_key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(_key, action);
        throw new Error(errorMessage);
      }
      nextState[_key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if (typeof actionCreators !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(16);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = __WEBPACK_IMPORTED_MODULE_0__compose__["a" /* default */].apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _actions = __webpack_require__(1);

var _reduxWebsocketBridge = __webpack_require__(17);

var _ui = __webpack_require__(18);

var _game = __webpack_require__(51);

var _initialState = __webpack_require__(20);

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return _initialState.initialState;
  }
  switch (action.type) {
    case _actions.KEY_DOWN:
      return (0, _ui.keyDown)(state, action);
    case _actions.KEY_UP:
      return (0, _ui.keyUp)(state, action);
    case _actions.MOUSE_DOWN_LEFT:
      return (0, _ui.mouseDownLeft)(state, action);
    case _actions.MOUSE_DOWN_RIGHT:
      return (0, _ui.mouseDownRight)(state, action);
    case _actions.MOUSE_MOVE:
      return (0, _ui.mouseMove)(state, action);
    case _actions.MOUSE_UP_LEFT:
      return (0, _ui.mouseUpLeft)(state, action);
    case _actions.MOUSE_UP_RIGHT:
      return (0, _ui.mouseUpRight)(state, action);
    case _actions.CLICKED_LEFT:
      return (0, _ui.clickedLeft)(state);
    case _actions.CLICKED_RIGHT:
      return (0, _ui.clickedRight)(state);
    case _actions.ZOOM_IN:
      return (0, _ui.zoomIn)(state);
    case _actions.ZOOM_OUT:
      return (0, _ui.zoomOut)(state);
    case _actions.SET_PARTY_TAB:
      return (0, _ui.setPartyTab)(state, action);
    case _actions.REFRESH_SLOTS:
      return (0, _ui.refreshSlots)(state, action);
    case _actions.CHANGE_MODE:
      return (0, _ui.changeMode)(state, action);
    case _actions.CLOSE_STORY:
      return (0, _ui.closeStory)(state);
    case _actions.REMOVE_PARTY_MEMBER:
      return (0, _ui.removePartyMember)(state, action);
    case _actions.DRAG_ITEM:
      return (0, _ui.dragItem)(state, action);
    case _actions.END_DRAG:
      return (0, _ui.endDrag)(state, action);
    case _actions.REGISTER_REQUEST:
    case _actions.LOGIN_REQUEST:
    case _actions.LOGOUT_REQUEST:
    case _actions.EVENT_REQUEST:
      return (0, _game.request)(state);
    case _actions.ERROR:
      return (0, _game.error)(state, action);
    case _actions.REGISTER_RESPONSE:
      return (0, _game.registerResponse)(state);
    case _actions.LOGIN_RESPONSE:
      return (0, _game.loginResponse)(state, action);
    case _actions.LOGOUT_RESPONSE:
      return (0, _game.logoutResponse)(state);
    case _actions.UPDATE:
      return (0, _game.update)(state, action);
    case _actions.EVENT_RESPONSE:
      return (0, _game.eventResponse)(state, action);
    case '@@websocket/' + _reduxWebsocketBridge.OPEN:
      return (0, _game.openSocket)(state);
    case '@@websocket/' + _reduxWebsocketBridge.CLOSE:
      return (0, _game.closeSocket)(state);
    default:
      return state;
  }
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = blobToArrayBuffer;
function blobToArrayBuffer(blob) {
  return new Promise(function (resolve, reject) {
    var fileReader = new FileReader();

    fileReader.onerror = function (event) {
      reject(event);
    };

    fileReader.onload = function () {
      resolve(this.result);
    };

    fileReader.readAsArrayBuffer(blob);
  });
}
//# sourceMappingURL=blobToArrayBuffer.js.map

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var FSA_ALLOWED_KEYS = ['error', 'meta', 'payload', 'type'];

module.exports = function isFSA(action) {
  return action && typeof action.type === 'string' && (typeof action.error === 'boolean' || typeof action.error === 'undefined' || action.error === null) && Object.keys(action).every(function (key) {
    return FSA_ALLOWED_KEYS.includes(key);
  });
};
//# sourceMappingURL=isFSA.js.map

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.request = request;
exports.error = error;
exports.registerResponse = registerResponse;
exports.loginResponse = loginResponse;
exports.logoutResponse = logoutResponse;
exports.update = update;
exports.eventResponse = eventResponse;
exports.openSocket = openSocket;
exports.closeSocket = closeSocket;

var _utils = __webpack_require__(19);

var _constants = __webpack_require__(0);

var _initialState = __webpack_require__(20);

function request(state) {
  return Object.assign({}, state, {
    sending: true,
    error: null,
    errorMessage: null
  });
}

function error(state, action) {
  return Object.assign({}, state, {
    sending: false,
    error: action.payload.code,
    errorMessage: action.payload.message,
    errorLog: state.errorLog.concat({
      error: action.payload.code,
      errorMessage: action.payload.message
    })
  });
}

function registerResponse(state) {
  return Object.assign({}, state, {
    sending: false,
    error: null,
    errorMessage: null
  });
}

function loginResponse(state, action) {
  var position = typeof action.payload.position === 'number' ? action.payload.position : state.position;
  var xCoord = typeof action.payload.xCoord === 'number' ? action.payload.xCoord : state.xCoord;
  var yCoord = typeof action.payload.yCoord === 'number' ? action.payload.yCoord : state.yCoord;
  var positionTarget = typeof action.payload.positionTarget === 'number' ? action.payload.positionTarget : state.positionTarget;
  var xTarget = typeof action.payload.xTarget === 'number' ? action.payload.xTarget : state.xTarget;
  var yTarget = typeof action.payload.yTarget === 'number' ? action.payload.yTarget : state.yTarget;
  return Object.assign({}, state, {
    sending: false,
    loggedIn: true,
    tiles: action.payload.tiles,
    party: action.payload.party,
    inventory: action.payload.inventory,
    actions: (0, _utils.getActions)(action.payload.inventory, action.payload.tiles, action.payload.position),
    vehicle: action.payload.vehicle || null,
    stories: (0, _utils.updateStory)(state, action),
    inventoryChanges: (0, _utils.updateInventoryChanges)(state, action),
    partyChanges: (0, _utils.updatePartyChanges)(state, action),
    position: position,
    xCoord: xCoord,
    yCoord: yCoord,
    positionTarget: positionTarget,
    xTarget: xTarget,
    yTarget: yTarget,
    sight: action.payload.sight,
    pace: action.payload.pace,
    rations: action.payload.rations,
    zoom: 3,
    error: null,
    errorMessage: null
  });
}

function logoutResponse(state) {
  return Object.assign({}, state, (0, _initialState.revisedInitialState)({
    connected: true,
    errorLog: state.errorLog
  }));
}

function update(state, action) {
  var inventory = (0, _utils.mergeArrays)(state.inventory, action.payload.inventory);
  var tiles = (0, _utils.mergeArrays)(state.tiles, action.payload.tiles);
  var party = (0, _utils.mergeArrays)(state.party, action.payload.party);
  var position = typeof action.payload.position === 'number' ? action.payload.position : state.position;
  var xCoord = typeof action.payload.xCoord === 'number' ? action.payload.xCoord : state.xCoord;
  var yCoord = typeof action.payload.yCoord === 'number' ? action.payload.yCoord : state.yCoord;
  var positionTarget = typeof action.payload.positionTarget === 'number' ? action.payload.positionTarget : state.positionTarget;
  var xTarget = typeof action.payload.xTarget === 'number' ? action.payload.xTarget : state.xTarget;
  var yTarget = typeof action.payload.yTarget === 'number' ? action.payload.yTarget : state.yTarget;
  if (positionTarget !== null && positionTarget === position && xTarget === xCoord && yTarget === yCoord) {
    positionTarget = null;
    xTarget = null;
    yTarget = null;
  }
  var stories = (0, _utils.updateStory)(state, action);
  var inventoryChanges = (0, _utils.updateInventoryChanges)(state, action);
  var partyChanges = (0, _utils.updatePartyChanges)(state, action);
  var pace = [0, 1, 2].includes(action.payload.pace) ? action.payload.pace : state.pace;
  var rations = [0, 1, 2].includes(action.payload.rations) ? action.payload.rations : state.rations;
  var actions = (0, _utils.getActions)(inventory, tiles, position);
  return Object.assign({}, state, {
    inventory: inventory,
    tiles: tiles,
    party: party,
    position: position,
    xCoord: xCoord,
    yCoord: yCoord,
    positionTarget: positionTarget,
    xTarget: xTarget,
    yTarget: yTarget,
    stories: stories,
    inventoryChanges: inventoryChanges,
    partyChanges: partyChanges,
    pace: pace,
    rations: rations,
    actions: actions
  });
}

function eventResponse(state, action) {
  var inventory = (0, _utils.mergeArrays)(state.inventory, action.payload.inventory);
  var tiles = (0, _utils.mergeArrays)(state.tiles, action.payload.tiles);
  var party = (0, _utils.mergeArrays)(state.party, action.payload.party);
  var position = typeof action.payload.position === 'number' ? action.payload.position : state.position;
  var xCoord = typeof action.payload.xCoord === 'number' ? action.payload.xCoord : state.xCoord;
  var yCoord = typeof action.payload.yCoord === 'number' ? action.payload.yCoord : state.yCoord;
  var positionTarget = typeof action.payload.positionTarget === 'number' ? action.payload.positionTarget : state.positionTarget;
  var xTarget = typeof action.payload.xTarget === 'number' ? action.payload.xTarget : state.xTarget;
  var yTarget = typeof action.payload.yTarget === 'number' ? action.payload.yTarget : state.yTarget;
  var stories = (0, _utils.updateStory)(state, action);
  var inventoryChanges = (0, _utils.updateInventoryChanges)(state, action);
  var partyChanges = (0, _utils.updatePartyChanges)(state, action);
  var pace = [0, 1, 2].includes(action.payload.pace) ? action.payload.pace : state.pace;
  var rations = [0, 1, 2].includes(action.payload.rations) ? action.payload.rations : state.rations;
  var actions = (0, _utils.getActions)(inventory, tiles, position);
  return Object.assign({}, state, {
    sending: false,
    error: null,
    errorMessage: null,
    inventory: inventory,
    tiles: tiles,
    party: party,
    position: position,
    xCoord: xCoord,
    yCoord: yCoord,
    positionTarget: positionTarget,
    xTarget: xTarget,
    yTarget: yTarget,
    stories: stories,
    inventoryChanges: inventoryChanges,
    partyChanges: partyChanges,
    pace: pace,
    rations: rations,
    actions: actions
  });
}

function openSocket(state) {
  return Object.assign({}, state, (0, _initialState.revisedInitialState)({
    connected: true,
    errorLog: state.errorLog
  }));
}

function closeSocket(state) {
  return Object.assign({}, state, (0, _initialState.revisedInitialState)({
    errorLog: state.errorLog
  }));
}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {"0":"false","1":"false","2":"false","3":"false","4":"false","5":"false","6":"false","7":"false","8":"false","9":"false","ArrowUp":"false","ArrowDown":"false","ArrowRight":"false","ArrowLeft":"false","Enter":"false","Backspace":"false","Delete":"false","Escape":"false"}

/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var Event = /** @class */ (function () {
    function Event(type, target) {
        this.target = target;
        this.type = type;
    }
    return Event;
}());
var ErrorEvent = /** @class */ (function (_super) {
    __extends(ErrorEvent, _super);
    function ErrorEvent(error, target) {
        var _this = _super.call(this, 'error', target) || this;
        _this.message = error.message;
        _this.error = error;
        return _this;
    }
    return ErrorEvent;
}(Event));
var CloseEvent = /** @class */ (function (_super) {
    __extends(CloseEvent, _super);
    function CloseEvent(code, reason, target) {
        if (code === void 0) { code = 1000; }
        if (reason === void 0) { reason = ''; }
        var _this = _super.call(this, 'close', target) || this;
        _this.wasClean = true;
        _this.code = code;
        _this.reason = reason;
        return _this;
    }
    return CloseEvent;
}(Event));

/*!
 * Reconnecting WebSocket
 * by Pedro Ladaria <pedro.ladaria@gmail.com>
 * https://github.com/pladaria/reconnecting-websocket
 * License MIT
 */
var getGlobalWebSocket = function () {
    if (typeof WebSocket !== 'undefined') {
        // @ts-ignore
        return WebSocket;
    }
};
/**
 * Returns true if given argument looks like a WebSocket class
 */
var isWebSocket = function (w) { return typeof w === 'function' && w.CLOSING === 2; };
var DEFAULT = {
    maxReconnectionDelay: 10000,
    minReconnectionDelay: 1000 + Math.random() * 4000,
    minUptime: 5000,
    reconnectionDelayGrowFactor: 1.3,
    connectionTimeout: 4000,
    maxRetries: Infinity,
    debug: false,
};
var ReconnectingWebSocket = /** @class */ (function () {
    function ReconnectingWebSocket(url, protocols, options) {
        if (options === void 0) { options = {}; }
        var _this = this;
        this._listeners = {
            error: [],
            message: [],
            open: [],
            close: [],
        };
        this._retryCount = -1;
        this._shouldReconnect = true;
        this._connectLock = false;
        this._binaryType = 'blob';
        this._closeCalled = false;
        this._messageQueue = [];
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to CLOSED
         */
        this.onclose = undefined;
        /**
         * An event listener to be called when an error occurs
         */
        this.onerror = undefined;
        /**
         * An event listener to be called when a message is received from the server
         */
        this.onmessage = undefined;
        /**
         * An event listener to be called when the WebSocket connection's readyState changes to OPEN;
         * this indicates that the connection is ready to send and receive data
         */
        this.onopen = undefined;
        this._handleOpen = function (event) {
            _this._debug('open event');
            var _a = _this._options.minUptime, minUptime = _a === void 0 ? DEFAULT.minUptime : _a;
            clearTimeout(_this._connectTimeout);
            _this._uptimeTimeout = setTimeout(function () { return _this._acceptOpen(); }, minUptime);
            // @ts-ignore
            _this._ws.binaryType = _this._binaryType;
            // send enqueued messages (messages sent before websocket open event)
            _this._messageQueue.forEach(function (message) { return _this._ws.send(message); });
            _this._messageQueue = [];
            if (_this.onopen) {
                _this.onopen(event);
            }
            _this._listeners.open.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleMessage = function (event) {
            _this._debug('message event');
            if (_this.onmessage) {
                _this.onmessage(event);
            }
            _this._listeners.message.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._handleError = function (event) {
            _this._debug('error event', event.message);
            _this._disconnect(undefined, event.message === 'TIMEOUT' ? 'timeout' : undefined);
            if (_this.onerror) {
                _this.onerror(event);
            }
            _this._debug('exec error listeners');
            _this._listeners.error.forEach(function (listener) { return _this._callEventListener(event, listener); });
            _this._connect();
        };
        this._handleClose = function (event) {
            _this._debug('close event');
            _this._clearTimeouts();
            if (_this._shouldReconnect) {
                _this._connect();
            }
            if (_this.onclose) {
                _this.onclose(event);
            }
            _this._listeners.close.forEach(function (listener) { return _this._callEventListener(event, listener); });
        };
        this._url = url;
        this._protocols = protocols;
        this._options = options;
        this._connect();
    }
    Object.defineProperty(ReconnectingWebSocket, "CONNECTING", {
        get: function () {
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "OPEN", {
        get: function () {
            return 1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSING", {
        get: function () {
            return 2;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket, "CLOSED", {
        get: function () {
            return 3;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CONNECTING", {
        get: function () {
            return ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "OPEN", {
        get: function () {
            return ReconnectingWebSocket.OPEN;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSING", {
        get: function () {
            return ReconnectingWebSocket.CLOSING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "CLOSED", {
        get: function () {
            return ReconnectingWebSocket.CLOSED;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "binaryType", {
        get: function () {
            return this._ws ? this._ws.binaryType : this._binaryType;
        },
        set: function (value) {
            this._binaryType = value;
            if (this._ws) {
                // @ts-ignore
                this._ws.binaryType = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "retryCount", {
        /**
         * Returns the number or connection retries
         */
        get: function () {
            return Math.max(this._retryCount, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "bufferedAmount", {
        /**
         * The number of bytes of data that have been queued using calls to send() but not yet
         * transmitted to the network. This value resets to zero once all queued data has been sent.
         * This value does not reset to zero when the connection is closed; if you keep calling send(),
         * this will continue to climb. Read only
         */
        get: function () {
            var bytes = this._messageQueue.reduce(function (acc, message) {
                if (typeof message === 'string') {
                    acc += message.length; // not byte size
                }
                else if (message instanceof Blob) {
                    acc += message.size;
                }
                else {
                    acc += message.byteLength;
                }
                return acc;
            }, 0);
            return bytes + (this._ws ? this._ws.bufferedAmount : 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "extensions", {
        /**
         * The extensions selected by the server. This is currently only the empty string or a list of
         * extensions as negotiated by the connection
         */
        get: function () {
            return this._ws ? this._ws.extensions : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "protocol", {
        /**
         * A string indicating the name of the sub-protocol the server selected;
         * this will be one of the strings specified in the protocols parameter when creating the
         * WebSocket object
         */
        get: function () {
            return this._ws ? this._ws.protocol : '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "readyState", {
        /**
         * The current state of the connection; this is one of the Ready state constants
         */
        get: function () {
            return this._ws ? this._ws.readyState : ReconnectingWebSocket.CONNECTING;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ReconnectingWebSocket.prototype, "url", {
        /**
         * The URL as resolved by the constructor
         */
        get: function () {
            return this._ws ? this._ws.url : '';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Closes the WebSocket connection or connection attempt, if any. If the connection is already
     * CLOSED, this method does nothing
     */
    ReconnectingWebSocket.prototype.close = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._closeCalled = true;
        this._shouldReconnect = false;
        this._clearTimeouts();
        if (!this._ws) {
            this._debug('close enqueued: no ws instance');
            return;
        }
        if (this._ws.readyState === this.CLOSED) {
            this._debug('close: already closed');
            return;
        }
        this._ws.close(code, reason);
    };
    /**
     * Closes the WebSocket connection or connection attempt and connects again.
     * Resets retry counter;
     */
    ReconnectingWebSocket.prototype.reconnect = function (code, reason) {
        this._shouldReconnect = true;
        this._closeCalled = false;
        this._retryCount = -1;
        if (!this._ws || this._ws.readyState === this.CLOSED) {
            this._connect();
        }
        else {
            this._disconnect(code, reason);
            this._connect();
        }
    };
    /**
     * Enqueue specified data to be transmitted to the server over the WebSocket connection
     */
    ReconnectingWebSocket.prototype.send = function (data) {
        if (this._ws && this._ws.readyState === this.OPEN) {
            this._debug('send', data);
            this._ws.send(data);
        }
        else {
            this._debug('enqueue', data);
            this._messageQueue.push(data);
        }
    };
    /**
     * Register an event handler of a specific event type
     */
    ReconnectingWebSocket.prototype.addEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type].push(listener);
        }
    };
    /**
     * Removes an event listener
     */
    ReconnectingWebSocket.prototype.removeEventListener = function (type, listener) {
        if (this._listeners[type]) {
            // @ts-ignore
            this._listeners[type] = this._listeners[type].filter(function (l) { return l !== listener; });
        }
    };
    ReconnectingWebSocket.prototype._debug = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (this._options.debug) {
            // not using spread because compiled version uses Symbols
            // tslint:disable-next-line
            console.log.apply(console, ['RWS>'].concat(args));
        }
    };
    ReconnectingWebSocket.prototype._getNextDelay = function () {
        var _a = this._options, _b = _a.reconnectionDelayGrowFactor, reconnectionDelayGrowFactor = _b === void 0 ? DEFAULT.reconnectionDelayGrowFactor : _b, _c = _a.minReconnectionDelay, minReconnectionDelay = _c === void 0 ? DEFAULT.minReconnectionDelay : _c, _d = _a.maxReconnectionDelay, maxReconnectionDelay = _d === void 0 ? DEFAULT.maxReconnectionDelay : _d;
        var delay = minReconnectionDelay;
        if (this._retryCount > 0) {
            delay =
                minReconnectionDelay * Math.pow(reconnectionDelayGrowFactor, this._retryCount - 1);
            if (delay > maxReconnectionDelay) {
                delay = maxReconnectionDelay;
            }
        }
        this._debug('next delay', delay);
        return delay;
    };
    ReconnectingWebSocket.prototype._wait = function () {
        var _this = this;
        return new Promise(function (resolve) {
            setTimeout(resolve, _this._getNextDelay());
        });
    };
    ReconnectingWebSocket.prototype._getNextUrl = function (urlProvider) {
        if (typeof urlProvider === 'string') {
            return Promise.resolve(urlProvider);
        }
        if (typeof urlProvider === 'function') {
            var url = urlProvider();
            if (typeof url === 'string') {
                return Promise.resolve(url);
            }
            if (url.then) {
                return url;
            }
        }
        throw Error('Invalid URL');
    };
    ReconnectingWebSocket.prototype._connect = function () {
        var _this = this;
        if (this._connectLock || !this._shouldReconnect) {
            return;
        }
        this._connectLock = true;
        var _a = this._options, _b = _a.maxRetries, maxRetries = _b === void 0 ? DEFAULT.maxRetries : _b, _c = _a.connectionTimeout, connectionTimeout = _c === void 0 ? DEFAULT.connectionTimeout : _c, _d = _a.WebSocket, WebSocket = _d === void 0 ? getGlobalWebSocket() : _d;
        if (this._retryCount >= maxRetries) {
            this._debug('max retries reached', this._retryCount, '>=', maxRetries);
            return;
        }
        this._retryCount++;
        this._debug('connect', this._retryCount);
        this._removeListeners();
        if (!isWebSocket(WebSocket)) {
            throw Error('No valid WebSocket class provided');
        }
        this._wait()
            .then(function () { return _this._getNextUrl(_this._url); })
            .then(function (url) {
            // close could be called before creating the ws
            if (_this._closeCalled) {
                _this._connectLock = false;
                return;
            }
            _this._debug('connect', { url: url, protocols: _this._protocols });
            _this._ws = _this._protocols
                ? new WebSocket(url, _this._protocols)
                : new WebSocket(url);
            // @ts-ignore
            _this._ws.binaryType = _this._binaryType;
            _this._connectLock = false;
            _this._addListeners();
            _this._connectTimeout = setTimeout(function () { return _this._handleTimeout(); }, connectionTimeout);
        });
    };
    ReconnectingWebSocket.prototype._handleTimeout = function () {
        this._debug('timeout event');
        this._handleError(new ErrorEvent(Error('TIMEOUT'), this));
    };
    ReconnectingWebSocket.prototype._disconnect = function (code, reason) {
        if (code === void 0) { code = 1000; }
        this._clearTimeouts();
        if (!this._ws) {
            return;
        }
        this._removeListeners();
        try {
            this._ws.close(code, reason);
            this._handleClose(new CloseEvent(code, reason, this));
        }
        catch (error) {
            // ignore
        }
    };
    ReconnectingWebSocket.prototype._acceptOpen = function () {
        this._debug('accept open');
        this._retryCount = 0;
    };
    ReconnectingWebSocket.prototype._callEventListener = function (event, listener) {
        if ('handleEvent' in listener) {
            // @ts-ignore
            listener.handleEvent(event);
        }
        else {
            // @ts-ignore
            listener(event);
        }
    };
    ReconnectingWebSocket.prototype._removeListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('removeListeners');
        this._ws.removeEventListener('open', this._handleOpen);
        this._ws.removeEventListener('close', this._handleClose);
        this._ws.removeEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.removeEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._addListeners = function () {
        if (!this._ws) {
            return;
        }
        this._debug('addListeners');
        this._ws.addEventListener('open', this._handleOpen);
        this._ws.addEventListener('close', this._handleClose);
        this._ws.addEventListener('message', this._handleMessage);
        // @ts-ignore
        this._ws.addEventListener('error', this._handleError);
    };
    ReconnectingWebSocket.prototype._clearTimeouts = function () {
        clearTimeout(this._connectTimeout);
        clearTimeout(this._uptimeTimeout);
    };
    return ReconnectingWebSocket;
}());

/* harmony default export */ __webpack_exports__["default"] = (ReconnectingWebSocket);


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribe = subscribe;

exports.default = function (store) {
    var prevState = store.getState();

    store.subscribe(function () {
        var newState = store.getState();

        Object.keys(subscribers).forEach(function (key) {
            if ((0, _objectPath.get)(prevState, key) !== (0, _objectPath.get)(newState, key)) {
                subscribers[key].forEach(function (cb) {
                    return cb(newState);
                });
            }
        });

        prevState = newState;
    });

    return subscribe;
};

var _objectPath = __webpack_require__(55);

var subscribers = {};

function subscribe(key, cb) {
    if (subscribers.hasOwnProperty(key)) {
        subscribers[key].push(cb);
    } else {
        subscribers[key] = [cb];
    }

    // return "unsubscribe" function
    return function () {
        subscribers[key] = subscribers[key].filter(function (s) {
            return s !== cb;
        });
    };
}

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {
    // Browser globals
    root.objectPath = factory();
  }
})(this, function(){
  'use strict';

  var toStr = Object.prototype.toString;
  function hasOwnProperty(obj, prop) {
    if(obj == null) {
      return false
    }
    //to handle objects with null prototypes (too edge case?)
    return Object.prototype.hasOwnProperty.call(obj, prop)
  }

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (typeof value !== 'string') {
        for (var i in value) {
            if (hasOwnProperty(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  var isArray = Array.isArray || function(obj){
    /*istanbul ignore next:cant test*/
    return toStr.call(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function factory(options) {
    options = options || {}

    var objectPath = function(obj) {
      return Object.keys(objectPath).reduce(function(proxy, prop) {
        if(prop === 'create') {
          return proxy;
        }

        /*istanbul ignore else*/
        if (typeof objectPath[prop] === 'function') {
          proxy[prop] = objectPath[prop].bind(objectPath, obj);
        }

        return proxy;
      }, {});
    };

    function hasShallowProperty(obj, prop) {
      return (options.includeInheritedProps || (typeof prop === 'number' && Array.isArray(obj)) || hasOwnProperty(obj, prop))
    }

    function getShallowProperty(obj, prop) {
      if (hasShallowProperty(obj, prop)) {
        return obj[prop];
      }
    }

    function set(obj, path, value, doNotReplace){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (typeof path === 'string') {
        return set(obj, path.split('.').map(getKey), value, doNotReplace);
      }
      var currentPath = path[0];
      var currentValue = getShallowProperty(obj, currentPath);
      if (path.length === 1) {
        if (currentValue === void 0 || !doNotReplace) {
          obj[currentPath] = value;
        }
        return currentValue;
      }

      if (currentValue === void 0) {
        //check if we assume an array
        if(typeof path[1] === 'number') {
          obj[currentPath] = [];
        } else {
          obj[currentPath] = {};
        }
      }

      return set(obj[currentPath], path.slice(1), value, doNotReplace);
    }

    objectPath.has = function (obj, path) {
      if (typeof path === 'number') {
        path = [path];
      } else if (typeof path === 'string') {
        path = path.split('.');
      }

      if (!path || path.length === 0) {
        return !!obj;
      }

      for (var i = 0; i < path.length; i++) {
        var j = getKey(path[i]);

        if((typeof j === 'number' && isArray(obj) && j < obj.length) ||
          (options.includeInheritedProps ? (j in Object(obj)) : hasOwnProperty(obj, j))) {
          obj = obj[j];
        } else {
          return false;
        }
      }

      return true;
    };

    objectPath.ensureExists = function (obj, path, value){
      return set(obj, path, value, true);
    };

    objectPath.set = function (obj, path, value, doNotReplace){
      return set(obj, path, value, doNotReplace);
    };

    objectPath.insert = function (obj, path, value, at){
      var arr = objectPath.get(obj, path);
      at = ~~at;
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }
      arr.splice(at, 0, value);
    };

    objectPath.empty = function(obj, path) {
      if (isEmpty(path)) {
        return void 0;
      }
      if (obj == null) {
        return void 0;
      }

      var value, i;
      if (!(value = objectPath.get(obj, path))) {
        return void 0;
      }

      if (typeof value === 'string') {
        return objectPath.set(obj, path, '');
      } else if (isBoolean(value)) {
        return objectPath.set(obj, path, false);
      } else if (typeof value === 'number') {
        return objectPath.set(obj, path, 0);
      } else if (isArray(value)) {
        value.length = 0;
      } else if (isObject(value)) {
        for (i in value) {
          if (hasShallowProperty(value, i)) {
            delete value[i];
          }
        }
      } else {
        return objectPath.set(obj, path, null);
      }
    };

    objectPath.push = function (obj, path /*, values */){
      var arr = objectPath.get(obj, path);
      if (!isArray(arr)) {
        arr = [];
        objectPath.set(obj, path, arr);
      }

      arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
    };

    objectPath.coalesce = function (obj, paths, defaultValue) {
      var value;

      for (var i = 0, len = paths.length; i < len; i++) {
        if ((value = objectPath.get(obj, paths[i])) !== void 0) {
          return value;
        }
      }

      return defaultValue;
    };

    objectPath.get = function (obj, path, defaultValue){
      if (typeof path === 'number') {
        path = [path];
      }
      if (!path || path.length === 0) {
        return obj;
      }
      if (obj == null) {
        return defaultValue;
      }
      if (typeof path === 'string') {
        return objectPath.get(obj, path.split('.'), defaultValue);
      }

      var currentPath = getKey(path[0]);
      var nextObj = getShallowProperty(obj, currentPath)
      if (nextObj === void 0) {
        return defaultValue;
      }

      if (path.length === 1) {
        return nextObj;
      }

      return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
    };

    objectPath.del = function del(obj, path) {
      if (typeof path === 'number') {
        path = [path];
      }

      if (obj == null) {
        return obj;
      }

      if (isEmpty(path)) {
        return obj;
      }
      if(typeof path === 'string') {
        return objectPath.del(obj, path.split('.'));
      }

      var currentPath = getKey(path[0]);
      if (!hasShallowProperty(obj, currentPath)) {
        return obj;
      }

      if(path.length === 1) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      } else {
        return objectPath.del(obj[currentPath], path.slice(1));
      }

      return obj;
    }

    return objectPath;
  }

  var mod = factory();
  mod.create = factory;
  mod.withInheritedProps = factory({includeInheritedProps: true})
  return mod;
});


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var errorTypes = [{ name: 'Account', min: 100, max: 199 }, { name: 'Connection', min: 200, max: 299 }, { name: 'Gameplay', min: 300, max: 799 }, { name: 'Client', min: 800, max: 899 }, { name: 'Server', min: 900, max: 999 }];

function getErrorType(code) {
  return errorTypes.find(function (type) {
    return code >= type.min && code <= type.max;
  }).name;
}

var errorLogger = exports.errorLogger = function errorLogger(store) {
  return function (next) {
    return function (action) {
      // TODO: Check if action type is a non-empty string
      if (action.type.substring(action.type.length - 5, action.type.length) === 'ERROR') {
        if (!action.payload.code) {
          action.payload.code = 800;
          action.payload.message = 'ERROR bad payload';
        }
        var type = getErrorType(action.payload.code);
        if (action.payload.message) {
          console.error(type + 'Error #' + action.payload.code + ': ' + action.payload.message);
        } else {
          // TODO: Lookup some error messages here?
          console.error(type + 'Error #' + action.payload.code);
        }
      }
      next(action);
    };
  };
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addInputListeners = __webpack_require__(58);

var _addInputListeners2 = _interopRequireDefault(_addInputListeners);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _Loader = __webpack_require__(59);

var _Loader2 = _interopRequireDefault(_Loader);

var _atlas = __webpack_require__(60);

var _atlas2 = _interopRequireDefault(_atlas);

var _icons = __webpack_require__(61);

var _icons2 = _interopRequireDefault(_icons);

var _iconsXl = __webpack_require__(62);

var _iconsXl2 = _interopRequireDefault(_iconsXl);

var _water = __webpack_require__(63);

var _water2 = _interopRequireDefault(_water);

var _items = __webpack_require__(64);

var _items2 = _interopRequireDefault(_items);

var _atlas3 = __webpack_require__(65);

var _atlas4 = _interopRequireDefault(_atlas3);

var _icons3 = __webpack_require__(66);

var _icons4 = _interopRequireDefault(_icons3);

var _iconsXl3 = __webpack_require__(67);

var _iconsXl4 = _interopRequireDefault(_iconsXl3);

var _water3 = __webpack_require__(68);

var _water4 = _interopRequireDefault(_water3);

var _items3 = __webpack_require__(69);

var _items4 = _interopRequireDefault(_items3);

var _GameView = __webpack_require__(70);

var _GameView2 = _interopRequireDefault(_GameView);

var _TitleView = __webpack_require__(84);

var _TitleView2 = _interopRequireDefault(_TitleView);

var _actions = __webpack_require__(1);

var _constants = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RainGame = function () {
	function RainGame(store, canvas, ctx) {
		_classCallCheck(this, RainGame);

		this.store = store;
		this.canvas = canvas;
		this.ctx = ctx;
		this._previousElapsed = 0;
		this.connect = new _Connect2.default(this.store);

		// Class methods are not automatically bound to instance
		this.tick = this.tick.bind(this);
	}

	_createClass(RainGame, [{
		key: 'init',
		value: function init() {
			var _this = this;

			(0, _addInputListeners2.default)(this.store.dispatch, this.canvas);
			this.loader = new _Loader2.default();
			Promise.all([this.loader.setImage('atlas', _atlas2.default, _atlas4.default), this.loader.setImage('icons', _icons2.default, _icons4.default), this.loader.setImage('icons-xl', _iconsXl2.default, _iconsXl4.default), this.loader.setImage('water', _water2.default, _water4.default), this.loader.setImage('items', _items2.default, _items4.default)]).then(function (loaded) {
				_this.gameView = new _GameView2.default(_this.store, _this.canvas, _this.ctx, _this.loader);
				_this.titleView = new _TitleView2.default(_this.store, _this.canvas, _this.ctx, _this.loader);
			}).then(function () {
				window.requestAnimationFrame(_this.tick);
			});
		}
	}, {
		key: 'tick',
		value: function tick(elapsed) {
			window.requestAnimationFrame(this.tick);

			if (this.canvas.width !== window.innerWidth || this.canvas.height !== window.innerHeight) {
				this.canvas.width = window.innerWidth;
				this.canvas.height = window.innerHeight;
				this.ctx.imageSmoothingEnabled = false;
			}

			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			var delta = (elapsed - this._previousElapsed) / 1000.0;
			delta = Math.min(delta, 0.250); // maximum delta of 250 ms
			this._previousElapsed = elapsed;

			if (this.connect.mode !== _constants.MODE.TITLE && (this.connect.connected === false || this.connect.loggedIn === false)) {
				this.store.dispatch((0, _actions.changeMode)(_constants.MODE.TITLE));
				this.gameView = new _GameView2.default(this.store, this.canvas, this.ctx, this.loader);
			}

			var keys = this.connect.keys;
			var clickLeft = this.connect.clickLeft;
			clickLeft.x && clickLeft.y && this.store.dispatch((0, _actions.clickedLeft)());
			switch (this.connect.mode) {
				case _constants.MODE.TITLE:
					this.titleView.update(keys, clickLeft.x, clickLeft.y);
					this.titleView.render(delta);
					break;
				default:
					this.gameView.update(keys, clickLeft.x, clickLeft.y);
					this.gameView.render(delta);
					break;
			}
		}
	}]);

	return RainGame;
}();

exports.default = RainGame;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addInputListeners;

var _actions = __webpack_require__(1);

function addInputListeners(dispatch, canvas) {
  window.addEventListener('keydown', function (event) {
    dispatch((0, _actions.keyDown)(event.key));
  }, false);

  window.addEventListener('keyup', function (event) {
    dispatch((0, _actions.keyUp)(event.key));
  }, false);

  canvas.addEventListener('mousedown', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    event.button === 0 && dispatch((0, _actions.mouseDownLeft)(x, y));
    event.button === 2 && dispatch((0, _actions.mouseDownRight)(x, y));
  }, false);

  canvas.addEventListener('mousemove', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    dispatch((0, _actions.mouseMove)(x, y));
  }, false);

  canvas.addEventListener('mouseup', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    event.button === 0 && dispatch((0, _actions.mouseUpLeft)(x, y));
    event.button === 2 && dispatch((0, _actions.mouseUpRight)(x, y));
  }, false);
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Loader = function () {
  function Loader() {
    _classCallCheck(this, Loader);

    this.images = {};
  }

  _createClass(Loader, [{
    key: 'setImage',
    value: function setImage(key, src, tileset) {
      var _this = this;

      var img = new Image();
      var d = new Promise(function (resolve, reject) {
        img.onload = function () {
          _this.images[key] = img;
          resolve(img);
        };

        img.onerror = function () {
          reject('Could not load image: ' + src);
        };
      });

      img.src = src;
      img.tileset = tileset;
      img.tiles = tileset.tiles;
      img.tilenames = tileset.tileproperties && this.makeNameLookup(tileset);

      return d;
    }
  }, {
    key: 'getImage',
    value: function getImage(key) {
      return key in this.images ? this.images[key] : null;
    }
  }, {
    key: 'makeNameLookup',
    value: function makeNameLookup(tileset) {

      var tileNames = {};
      for (var count = 0; count < tileset.tilecount; count++) {
        if (tileset.tileproperties[count] && tileset.tileproperties[count].name) {
          var name = tileset.tileproperties[count].name;
          tileNames[name] = count;
        }
      }
      return tileNames;
    }
  }]);

  return Loader;
}();

exports.default = Loader;

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAHgCAYAAAAi4Gb1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4ggcEywmSLtAtQAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAAgAElEQVR4AQA0gst9AQDeAP8A1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAoAAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAoAAAADcAAAAAAAAAAAAAAAAAAAApAAAAAAAAANcAAAAAAAAAAAAAmslNADYN2wAAAAAAyvMlAAAAAAA2DdsAAAAAAAAAAADK8yUAAAAAADYN2wDK8yUAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAA2DdsAAAAAAMrzJQAAAAAAAAAAADYN2wAAAAAAAAAAAMrzJQBmgrMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEANcAAAAAAAAAAAAAACkAAACgAAAANwAAAAAAAAApAAAAAAAAAKAAAAAAAAAANwAAANcAAAAAAAAAAAAAACkAAACgAAAANwAAAAAAAAApAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAMrzJQAAAAAANg3bAAAAAAA2DdsAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAACkAAAApAAAAoAAAAAAAAAC5AAAAAAAAANcAAACQAAAA8AAAAAAAAAAAAAAAAAAAACkAAAApAAAAoAAAAAAAAAC5AAAAuQAAAJAAAACQAAAA8AAAADcAAAAAAAAAAAAAAJAAAACQAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAADYN2wAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBuAP8AAAAAAAAAAAAAAAAAEAAAAOAAAAAAAAAAgAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAALkAAAAAAAAAEAAAAOAAAAAAAAAAAAAAABAAAABHAAAAAAAAAAAAAACpAAAAAAAAABAAAAAQAAAAAAAAAAAAAAA3AAAAAAAA0NYoAAAAAADK8yUANg3bAMrzJQAAAAAANg3bAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAA2DdsAAAAAAMrzJQBmgrMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAF4A/wAAAAAAEAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAACkAAACgAAAAAAAAAPAAAAAAAAAAAAAAAPAAAACAAAAA1wAAAAAAAAAAAAAAAAAAAKkAAAAAAAAAAAAAACAAAAAAAAAAAAAAAPAAAAAAAADQHSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADB12AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIkA/wAAAAAAAAAAAHcAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAADwAAAAAAAAABAAAABHAAAA1wAAAAAAAAAAAAAAAAAAACkAAAAAAAAAoAAAAAAAAAAAAAAAcAAAAAAAAACgAAAARwAAANcAAAAAAAAAAAAAACkAAACgAAAAIAAAAAAAAAA3AAAAAAAAAAAAAAAAAAAAKQAAAIAAAAAdAAAAAAAAyvMlADYN2wAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAAAAAAADYN2wDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlADYN2wDK8yUAAADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAMkAAAAAAAAAAAAAAAsAAAAAAAAAAAAAAPUAAAAAAAAAAAAAAAAAAAALAAAAAAAAAPUAAAAAAAAAiQD/AAAAAAAAAAAAAAAAAHcAAQAAAAAAAAAAAH4A/wAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABABXAAAAAAAAAAAAAAAAAAAAAAAAACkAAADXAAAAAAAAACkAAADXAAAA1wAAACkAAABgAAAAoAAAAAAAAADXAAAAAAAAAGAAAADXAAAAAAAAACkAAAAAAAAAoAAAAAAAAAAAAAAANwAAACkAAADXAAAAAAAAAAAAAADXAAAAVwAAANYAAAAAAAAAAAAAyvMlAAAAAAA2DdsANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAGaCswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA8AAAAPAAAAAAAAAAAAAAAGAAAAA3AAAANwAAAGAAAABgAAAAAAAAAEcAAABXAAAANwAAADcAAABgAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAHAAAABHAAAANwAAADcAAAA3AAAAAAAAAAAAAAC5AAAAuQAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAADYN2wDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQBeAP8AVwAAAAAAAAAAAAAAyQAAADcAAAAAAAAAAAAAAAAAAAApAAAAAAAAANcAAAAAAAAAAAAAALkAAAAAAAAAEAAAAAAAAAA3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAANcAAAAAAAAAAAAAAAAAAAApAAAAgAAA0C0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQBmgrMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFcAAAAAAAAAKQAAAKAAAAAAAAAAyQAAADcAAAAAAAAAAAAAANcAAADJAAAAAAAAAAAAAADwAAAAAAAAAPAAAAAQAAAAAAAAALkAAAAAAAAARwAAAAAAAAAAAAAAKQAAAAAAAADXAAAAKQAAANcAAAAAAAAAAAAAAJAAAAAQAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASKoLogAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAKQAAACkAAACgAAAAAAAAAAAAAAAAAAAAyQAAACkAAAAAAAAAAAAAAGAAAABgAAAA8AAAAAAAAADwAAAAAAAAAAAAAADwAAAAAAAAAHAAAAAAAAAAAAAAAAAAAADXAAAAkAAAACkAAACgAAAAyQAAAMkAAAC5AAAAAAAAAHAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAA2DdsANg3bAAAAAADK8yUAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAANg3bADYN2wA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAA1wAAADcAAAA3AAAANwAAAPAAAAA3AAAAoAAAAAAAAAAAAAAA1wAAANcAAABwAAAA8AAAAAAAAABXAAAAYAAAABAAAABHAAAA1wAAAAAAAAAAAAAAKQAAAMkAAAAQAAAAoAAAAGAAAAA3AAAANwAAAHAAAABwAAAAAAAANg3bAAAAAAA2DdsAyvMlAAAAAADK8yUAyvMlAMrzJQAAAAAAAAAAADYN2wDK8yUAAAAAAMrzJQAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAN4A/wDXAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAADcAAAAAAAAAKQAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAAAAAACgAAAAAAAAAAAAAAA3AAAAyQAAADcAAAAAAAAAAAAAAAAAAAApAACaoE0ANg3bAAAAAAAAAAAAyvMlAAAAAAA2DdsAAAAAAMrzJQA2DdsAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAADK8yUANg3bAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAADB12AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAoAAAAAAAAAAAAAAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADXAAAAAAAAAAAAAAApAAAAyQAAAMkAAADJAAAAuQAAALkAAACQAAAA1wAAADcAAAA3AAAANwAAACkAAAAAAAAAyQAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAyQAAADcAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAKAAAAA3AAAAAAAAAAAAAAAAAAAAKQAAANcAAAApAAAA1wAAAAAAAAAAAAAAkAAAAAAAAAAQAAAAyQAAAAAAAADgAAAAAAAANi3bAAAAAADK8yUANg3bAMrzJQA2DdsAAAAAADYN2wDK8yUAyvMlAAAAAAA2DdsAyvMlADYN2wAAAAAAyvMlADYN2wA2DdsAAAAAAAAAAADK8yUANg3bAMrzJQA2DdsAAAAAADYN2wAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAuQAAAAAAAABHAAAAAAAAADcAAADJAAAARwAAAAAAAAAAAAAAAAAAAAAAAACQAAAARwAAACkAAADXAAAAAAAAAAAAAACQAAAAAAAAAMkAAAA3AAAAyQAAADcAAABHAAAAAAAAAAAAAAApAAAAgAAAAAAAAAAAAADK8yUAAAAAADYN2wDK8yUAAAAAAMrzJQA2DdsAyvMlADYN2wDK8yUANg3bAMrzJQA2DdsAyvMlADYN2wAAAAAAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAAMrzJQAAAAAAyvMlADYN2wA2DdsAAAAAAAAAAAAAAAAAyvMlAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAHy4nAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAfLicAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPf5gAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAACDQ0AAAAAAAAAAAD+8/MAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAINDQAAAAAAAAAAAP7z8wAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAENFNwAdIRoAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0U3AB0hGgAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAu668AAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhGIn/AAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7rrwAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/AH4A/wB+AP8AAAAAAAAAAAB+AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP8AfgD/AH4A/wAAAAAAAAAAAH4A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A/wB+AP8AfgD/AAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHy4nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAA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AAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPf5gDj3+YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAP7z8wAAAAAAHSEaAEVSRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAD+8/MAAAAAAB0hGgBFUkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAINDQAAAAAA/vPzAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAu668AOPf5gAAAAAAAAAAAOHS2QD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAP7z8wAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAP7z8wAdIRoAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8uJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAA/vPzAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAP7z8wAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHS2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAOHS2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+kA4EAAAIABJREFUAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAINDQAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQACDQ0AAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwACDQ0AAAAAAAAAAAACDQ0AAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAHy4nAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAfLicAAg0NAAAAAAAAAAAAAg0NAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAB8uJwACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA4dLZAP7z8wAAAAAAQ0U3AB0hGgACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAdIRoARVJEAAAAAADh0tkA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAOHS2QD+8/MAAAAAAENFNwAdIRoAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHSEaAEVSRAAAAAAA4dLZAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAg0NAP7z8wAAAAAAAg0NAAAAAAD+8/MAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wINDQAAAAAAAAAAAP7z8wAAAAAAAg0NAP7z8wDqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAINDQD+8/MAAAAAAAINDQAAAAAA/vPzAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8CDQ0AAAAAAAAAAAD+8/MAAAAAAAINDQD+8/MA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAENFNwAdIRoAAg0NAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAINDQAAAAAA/vPzAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHSEaAB0hGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKVvnf8AACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAHSEaAAAAAAACDQ0AAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh0tkAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAD+8/MAHSEaAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQiyj/+fv+AAAAAAAHBQIAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMmGJv8HBQIAAAAAAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN1jaAPn7/gD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAcFAgAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoKHCgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdY2gAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAPn7/gAAAAAA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSCy30CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAABQAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A/wDXAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAANwAAACkAAACgAAAAAAAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAKAAAAAAAAAAAAAAADcAAADJAAAAAAAAADcAAAAAAAAAAAAAAAAAAAApAAAA1wAAAAAAAAAAAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAApAAAAoAAAAAAAAAAAAAAANwAAAMkAAAAAAAAANwAAAAAAAAAAAAAAAAAAACkAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAADcAAAApAAAAoAAAAAAAAAAAAAAAYAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAAAAAAAAAAAA3AAAAAAAAAMkAAAAAAAAANwAAAAAAAAAAAAAAAAAA0NYoAAAFAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyYYm/wAAAAAHBQIA+fv+ADd62gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAADJAAAAAAAAAPAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAuQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAADwAAAAkgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuAP8AAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAALkAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAADJ0SYAAAAAAAAAAAAHBQIAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3WNoA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADwAAAA8AAAABAAAAAAAAAAAAAAAPAAAAAQAAAAAAAAAAAAAADwAAAAAAAAAAAAAAC5AAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAABAAAAAAAAAAyQAAAPAAAAAAAAAARwAAAAAAAADJAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAABHAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAQAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuQAAAAAAAADwAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAAcdAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKkAAADwAAA/uScAAPAAAAAAAAA/uScAAPAAAADwAAA/yScAAOAAAAAAAAAA8AAAP8knAADwAAAA8AAAAPAAAD/JJwAAAAAAABAAAAAAAAAAAAAAP8knAADgAAAAAAAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAACpAAAAuQAAAPAAAD+5JwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAP7knAADwAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAPAAAADwAAA/yScAAAAAAAAQAAAAAAAAAAAAAD/JJwAA4AAAAAAAAADwAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCYAAPgAAAAAAAAACCYAAAAAAAAAAAAA+CYAAAAAAAAAAAAACCYAAOgAAAAAAAAAAAAAAAgmAAAAAAAAAAAAAAAAAAAIJgAA+AAAP9kBAMEv/wAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAP9EBAMEv/wAAAAAAAAAAAAAIJgAAANoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4JgA/2QEAwS//AAAAAAAACCYAAOgAAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgA/0QEAwS//AAAAAAAAAAAAAAgmAAAAAAAAAAAAAPgmAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgAAAAAAAAAAAAAAAAAACCYAAPgAAD/ZAQDBL/8AAAAAAAAIJgAA6AAAAAAAAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQiyj/+fv+AAAAAAA3L9oAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMmGJv8AAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAPn7/gAAAAAABwUCAPn7/gAAAAAANy/aAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyYYm/wcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAPn7/gAAAAAABwUCADAq2AAASwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCANDWKAAwANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4ABwUCAPn7/gD5+/4ABwUCAAAAAADQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4ABwUCAPn7/gD5+/4A0NYoADAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAPn7/gD5+/4A+fv+APn7/gAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgAHBQIABwUCAPn7/gD5+/4AAAAAAAAAAAD5+/4A+fv+AAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+ADBT2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gD5+/4A+fv+APn7/gAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgAHBQIABwUCAPn7/gD5+/4AAAAAAPn7/gAAAAAAAAAAAPn7/gD5+/4A+fv+APn7/gAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgAHBQIABwUCAPn7/gD5+/4AAAAAAAAAAAD5+/4A+fv+AAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAPn7/gAHBQIA+fv+AAcFAgAwU9gAANcAAAAAAADQ1igA+fv+AAcFAgAAAAAAMFPYAAAAAAAA1wAA0NYoAAAAAAAwKtgAAAAAAAAAAADQ1igAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAABwUCAPn7/gAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADAq2AAAAAAAAAAAANDWKAAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAAAAAAD5+/4ABwUCAPn7/gAHBQIAMFPYAADXAAAAAAAA0NYoAAAAAAAAAAAAAAAAADdY2gAAAAAAANcAANDWKAAAAAAANy/aAAAAAAAAAAAA0NYoAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMmGJv8HBQIAAAAAAPn7/gA3etoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Iso/wAAAAD5+/4ABwUCADB12AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJhib/BwUCAPn7/gAHBQIAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMmGJv8HBQIA+fv+AAcFAgAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyYYm/wcFAgAAAAAAAAAAADB12AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABUi8MGAAAgAElEQVQAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBQIAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+ADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+ANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgAAAAAA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAMnRJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4AMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+ADBT2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAAAAAA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gABwUCAAAAAADQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAHBQIAAAAAANCtKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAcFAgAAAAAA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gA+fv+AAAAAADQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAABwUCAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN2ZwvsAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3WNoAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAydEmAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADBT2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAAAAAA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAD5+/4A0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEALUA/wAAAAAAKQAAAKAAAAAAAAAAAAAAADcAAADJAAAAAAAAADcAAAAAAAAAAAAAAAAAAAApAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAA3AAAAKQAAAKAAAAAAAAAA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+fv+AAAAAAAHBQIA+fv+AAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAAAAAAAEAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+APn7/gAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4A+fv+AAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAABwUCAAAAAAD5+/4ABwUCAPn7/gD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+APn7/gAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAT5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAD5+/4ABwUCAPn7/gAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+AAcFAgAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gAAAAAABAcFAgAwKtgAAAAAAAAAAADQ1igAAAAAAPn7/gAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAwKtgAAAAAAAAAAADQ1igAAAAAAPn7/gAHBQIAAAAAADBT2AAA1wAAAAAAANDWKAAAAAAAAAAAAAcFAgAwU9gAAAAAAADXAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAPn7/gAHBQIAMFPYAADXAAAAAAAA0NYoAPn7/gAAAAAAAAAAADdY2gAAAAAAANcAAMnRJgAHBQIANy/aAAAAAAAAAAAA0NYoAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4ABwUCADBT2AAA1wAAAAAAANDWKAAAAAAAAAAAAAAAAAA3WNoAAAAAAADXAADQ1igAAAAAADcv2gAAAAAAAAAAANDWKAAAAAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAADcv2gAAAAAAAAAAANDWKAD5+/4AAAAAAAAAAAAAAAAAN1jaAADXAAAAAAAA0NYoAAAAAAAAAAAABwUCADBT2AAAAAAAANcAANDWKAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQiyj/+fv+AAcFAgD5+/4AN3raAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgDQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPvIGZAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0gst9AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAAAAAA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQiyj/+fv+AAcFAgAAAAAAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAPn7/gAHBQIABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN1jaAAcFAgD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAALKh3lYAACAASURBVAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdY2gAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdY2gAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP8A1wAAAAAAAAAAAAAASwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEALUA/wAAAAAAKQAAAKAAAAAAAAAAAAAAADcAAADJAAAAAAAAADcAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAUAAPn7/gAAAAAAALUA/wDJAAAAAAAAADcAAAApAAAAoAAAAAAAAAAAAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAASwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A/wDXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAADcAAAApAAAAoAAAAAAAAAAAAAAAYAAAANcAAAAAAAAAAAAAAAAAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAyQAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAApAAAAoAAAAAAAAAAAAAAANwAAAMkAAAAAAAAANwAAAAAAAAAAAAAAAAAAACkAAADXAAAAAAAAAAAAAAAAAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAuQAAAAAAAAC5AAAAAAAAABAAAAAAAAAAyQAAAAAAAAAAAAAAyQAAAAAAAAA3AAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAyQAAAAAAAAAAAAAAyQAAAMkAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAA3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAyQAAAAAAAADwAAAAEAAAAAAAAAAAAAAAyQAAAMkAAAAAAAAAAAAAAAAAAACgAAAAAAAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5AAAAAAAAALkAAAAAAAAAEAAAAAAAAADJAAAAAAAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAyQAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAABAAAAAAAAAAAAAAAMkAAADwAAAAAAAAAB0AAAcFAgD5+/4ABwUCAAD4AAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAALkAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAQAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuQAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACpAAAAEAAAP8knAMEn2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN1jaAMmoJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAABHAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACABAAAAAAAAAAAAAAP8knAADgAAAAAAAAAPAAAD/JJwAA4AAAAAAAAAAAAAAA8AAAP8knAADwAAAAAAAAAAAAAAAAAAAAAAAAP7knAADwAAAA8AAAP8knAADgAAAAAAAAAAAAAADwAAA/yScAAPAAAADwAAAA8AAAP8knAAAAAAAA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AAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAA+fv+AAcFAgAHBQIA+fv+APn7/gD5+/4ABwUCAAcFAgAAAAAABwUCAAAAAAAHBQIAAAAAAAcFAgD5+/4A+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAcFAgAAAAAABwUCAPn7/gD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgDQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAPn7/gAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAA+fv+AAcFAgAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAHBQIABwUCAAcFAgD5+/4A+fv+AAAAAAAAAAAA+fv+APn7/gAAAAAA+fv+AAcFAgAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAPn7/gD5+/4AAAAAAAAAAAD5+/4A+fv+AAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAADBT2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gD5+/4A+fv+APn7/gAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgAHBQIABwUCAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAcFAgAwKtgAAAAAAAAAAADQ1igAAAAAAAAAAAAHBQIAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAA+fv+AAcFAgAAAAAA+fv+APn7/gAHBQIAAAAAADBT2AAA1wAAAAAAANDWKAD5+/4AAAAAAAcFAgAwU9gAAAAAAADXAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAq2AAAAAAAAAAAANDWKAAAAAAA+fv+AAcFAgAAAAAAMFPYAADXAAAAAAAA0NYoAAAAAAAAAAAABwUCADBT2AAAAAAAANcAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADAq2AAAAAAAAAAAANDWKAAAAAAA+fv+AAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAADAq2AAAAAAAAAAAANDWKAAAAAAAydEmADcA2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJhib/AAAAAAcFAgD5+/4AN3raAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyYYm/wAAAAAHBQIA+fv+ADd62gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJhib/BwUCAAAAAAD5+/4AN3raAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzfybgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADd62gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgDQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN1jaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAAAAAAANCtKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAAAAADQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADTTcdzAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAADB12AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwAAAAAAAg0NAB8uJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA4dLZAAAAAAAAAAAA49/mAAINDQAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAB8uJwAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAdIRoAQ0U3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAB8uJwACDQ0AAAAAAOHS2QC9u8kAAg0NAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAD+8/MAAAAAAAAAAAACDQ0AAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4dLZAP7z8wAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRTcAHSEaAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLicAHy4nAAINDQAAAAAAHSEaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALuuvADj3+YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAN4A/wB+AP8AfgD/AAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gABwUCAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHS2QDh0tkA/vPzAAAAAADj3+YAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAfLicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAoAAAP7knAADwAAA/Nyf/AF4A/wDgAAAAbgD/Pzcn/wBeAP8AbgD/AAAAAMmoJgAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHy4nAENFNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAOHS2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAB+AP8AAAAAP7knAMEA2QAAAAAAAPgmAMEv/wAAACYAP9EBAMEv/wAAAAAAAAgmAD/JAQDBXtn/BwUCAPn7/gAHBQIAAAAAAABeAP8AogABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AP8AAAAAAAAAAAAAAAAAAAAAADcAAAApAAAAoAAAAAAAAAAAAAAANwAAAMkAAAAAAAAANwAAAAAAAAAAAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAADj3+YA49/mAAAAAAAAAAAAAAAAAAC1AP8AKQAAAKAAAAAAAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAASwABAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAB0hGgDh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAOAAAADwAAAAAAAAAOgmAOAOGAAf3xkAH98ZAB/fGQDgDhgAH98ZAOAOGAAf3xkAAAAAAAAIJgAw2/4AAAAAAPn7/gAw2/4AAAgmAABeAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgD/AAAAAADwAAA/uScAAOAAAADgAAAAuQAAAJAAAADwAAAAAAAAAAAAAADJAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAA3gD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAADqgLMAAAAAAACgAAAAAAAAAAAAAAAAAAAAoAAAAMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAg0NAAAAAAAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ/2ScAwS//AOAOGAAf3wAAAAAAAAAAAAD3GQ4AAAAAAAnn8gAAAAAAAAAAAAAAAADgDhgAH98AAAAAAAC138EAAAAAAB8APwDhIecAAAgmAABe2v8/2ScAwSfZAAAQAAA/yScAwSfZAD+5JwDBJ9kAAAgmAAAAAAAACCYAAAAAAADw2gAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MA/vPzAAAAAAAAAAAAAAAAAADXAAAAyQAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAALkAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuAOGAAf3xkAAAAAAPcZDgD3GQ4A9xkOAAAAAAAAAAAA9xkOAPcZDgD3GQ4AAAAAAAAAAAAAAAAAAAAAAOHuAADh7gAAAAAAAB/fGQAf3xkAAAgmAAAAAAAACCYAAPgmAMEv/wAACCYAAAAAAAAIJgAf3xkA4A4YAB/fGQAf3xkAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAH5A/AAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5A/AD+5JwAA4AAAAAAAAADwAAA/yScAAPAAAADwAAAA8AAAP8knAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAE4KT+4AACAASURBVAAAAB0hGgAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE9xkOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0A/vPzAAAAAAD3GQ4AAAAAAAnn8gAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAf3xkA4A4AAB/fAAAAAAAAAAAAAAAAAADgDgAAH98AAAAAAAAAAAAAAAAAAPcZDgA/2ScAwS//AAAAAAAACCYAAOgAAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAB/nPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADhIecAINEBAAAIJgAA6AAAAAAAAAAAAAAACCYAAAAAAAAAAAAAAAAAAAgmAAAA2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0A49/mAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAB8uJwAmJB0AvbvJAAAAAAAAAAAAHSEaAOHS2QAAAAAAAAAAAAINDQD+8/MA9xkOAAAAAADh1QAAAAAAAPcrDgAJ5/IAAAAAAAAAAAD3GQ4AAAAAAAAAAAAJ5/IAAAAAAAAAAAAAAAAAAAAAAPcZDgAAAAAAAAAAAJFUAQD5+/8AACD/AAAAAAAHBQIAAAAAAAAlAAD5+/8AAAAAAAcFAgAwAP4AH98AAPcZDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACRVAEA+fv/AAAAAAAAAAAAByUBAAAAAQAAAAAA+fv+AAAg/wAHBQIAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAACDQ0A49/mAOPf5gAAAAAAAAAAAAAAAADj3+YAAg0NAAAAAAD+8/MA/vPzAAAAAAACDQ0A/vPzAB8SAAAAAAAAAAAAAPcZDgAAAAAAAAAAAAAAAAAAAAAAAAAAAPcZDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+ANAlAgCPzcEAHwAAAOHuAAAfEgAA4e4AAB8SAADh7gAAHxIAAOHuAAAfEgAAUkYoAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0U3ANrc4wDj3+YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANILLfQQAAAAA/vPzAAINDQAdIRoAJiQdANrc4wDh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAADh7gAAAAAAAAAZAAAAAAAAAAAAAAAAAAACDQ0AHSEaAOPf5gD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAL27yQAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAACDQ0A/vPzAOHS2QDh0tkAAAAAAAAAAAAAAAAAAg0NAB0hGgDj3+YAAAAAAENFNwC7rrwAAAAAAB8SAAAAAAAAAAAAAB8uJwDj3+YA/vPzAP7z8wDh0tkAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAHSEaAOPf5gD+8/MABwUCADAq2AAAAAAAAAAAANDWKAD5+/4ABwUCAAAAAAAAAAAA+fv+ADd62gEfRT//AAAAACAE6ADAABgAABIAAAAAAAAAEgAAIPLoAOASGAAAAAAAgnrBAQC1AP8AAAAAydEmAAcFAgD5+/4ABwUCADBT2AAAAAAAANcAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFl5N/wAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASdWzAAAAAAC3K00AAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAg0NAB0hGgAmJB0A2tzjAOPf5gAAAAAAAAAAAP7z8wDqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAB8uJwDj3+YA/vPzAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAP7z8wAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAAfEgAAAAAAAAAAAAAAAAAAAAAAAB8uJwDj3+YAAg0NAAAAAAAAAAAA49/mAOPf5gAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAEnVswAAAAAAtytNAAAAAAAAAAAAAAAAAAAAAAAfLicAJiQdAL27yQAAAAAAAAAAAP7z8wAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAg0NAB0hGgDh0tkAAAAAAAINDQD+8/MAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAcYso/wAAAAChdbMBAAAAAAAAAAAWXk3/AAAAAOHS2QDh0tkAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA4dLZAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCLKP/5+/4AAAAAANCLKP8wddgBAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHSEaAEVSRAAAAAAAAAAAAB8uJwACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHSEaAB0hGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gDQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YA49/mAAAAAAAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfa+vbgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAfLicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAB0hGgAAAAAA/vPzAOHS2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAcFAgAwU9gAAHUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAAINDQD+8/MAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP8A1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAA3AAAAKQAAAKAAAAAAAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAoAAAAAAAAAAAAAAANwAAAMkAAAAAAAAA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AAAAAAAAAAAAAACpAAA/gicAAPAAAD+5JwAA8AAAAAAAAD+5JwAA8AAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAADwAAAA8AAAP8knAAAAAAAAEAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAD+8/MAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgmAAAAAAAA+CYAAAAAAAAIJgAAAAAAAAAAAAD4JgAAAAAAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAAAAAAAAAAAAAAAAAAAgmAAD4AAA/2QEAwS//AAAAAAAACCYAAOgAAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgA/0QEAwS//AAAAAAAAAAAAAAgmAAAAAAAAANoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP9fMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/18zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5FAP8AAAAAAAAAAAAAAACCuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAIK7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAB+RQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/AAAAAH5FAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5FAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACK9OGUAAAgAElEQVQAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAyQAAAAAAAAA3AAAAKQAAAKAAAAAAAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAoAAAAAAAAAAAAAAANwAAAMkAAAAAAAAANwAAAAAAAAAAAAAAAAAAACkAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAADcAAAApAAAAoAAAAAAAAAAAAAAAYAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuQAAABAAAAAAAAAAAAAAAMkAAADJAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAA3AAAAAAAAAAAAAAC5AAAAAAAAALkAAAAAAAAAEAAAAAAAAADJAAAAAAAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAyQAAAAAAAADwAAAAEAAAAAAAAAAAAAAAyQAAAMkAAAAAAAAAAAAAAAAAAACgAAAAAAAAADcAAAAAAAAAAAAAALkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/grsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/ANcAAAAAAAAAAAAAAAAAAAApAAAAIgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABeAP8AIAAAAAAAAAAAAAAA8AAAABAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAABHAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAgAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAH7nAACCuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+5JwAA8AAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAADwAAAA8AAAP8knAAAAAAAAEAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAP7knAADwAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAPAAAADwAAA/yScAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAAAAAAAAyQAAAAAAAAA3AAAAAAAAALUA/wAAAAAASwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCYAAAAAAAD4JgAAAAAAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAAAAAAAAAAAAAAAAAAAgmAAD4AAA/2QEAwS//AAAAAAAACCYAAOgAAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgA/0QEAwS//AAAAAAAAAAAAAAgmAAAAAAAAAAAAAPgmAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgAAAAAAAAAAAAAAAAAACCYAAPgAAD/ZAQAADtkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/oc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wDJAAAA4AAAP9knAME32QAAAAAAP8knAMEn2QAAIAAAADcAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAIJgAAAAAAftcAAAAAAADBAAAAAAgmAAAA2gAAyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAV8zAP8AAAAAHxIAAAAAAAAAAAAA//8AAOLvABShzQDtAAAAAAAAAAB+RQD/grsAAX5FAP+CuwABfkUA/x8SAAAAAAAAgrsAAQAAAAAAAAAAfkUA/wAAAAAAAAAA4e4AAAAAAAChzQABAAAAAAAAAAB+RQD/AAAAAIK7AAEAAAAAXzMA/wAAAAAfEgAAAAAAAAAAAAD//wAA4u8AFKHNAO0AAAAAAAAAAH5FAP+CuwABfkUA/4K7AAF+RQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/6HNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAMkAAAAAAAA/uScAwSfZAF/VAAAAAAAAAAAAAAAAAAChKwAAP9knAMFH2QAAAAAAADcAAAAAAAAASwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/4K7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/oc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5FAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALkAAAAQAAAAAAAAAOAAAAAAAAB+5wAA4QAAAKHNAAEAAAAAXzMA/37nAADBAAAAAOAAAAAgAAAAyQAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5FAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPuMgmQAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AtQD/AN4A/wB+AP8AEAAAAAAAAADwAAAACCYAPw7ZAOHuAAChzQABAAAAAAAAAAChzQAB4e4AAD8O2QAACCYAAPAAAAAAAAAAEAAAAH4A/wDeAP8AtQD/ALUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALkAAAC5AAAAkAAAAPAAAAAAAAA/uScAAPgmAH7f2gDh7gAAoc0AAQAAAAAAAAAAAAAAAAAAAAChzQAB4e4AAH7f2gAA+CYAP7knAAAAAAAA8AAAAJAAAAC5AAAAuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADwAAAAAAAAAAAAAAAAAAAAAAAA4e4AAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQAB4e4AAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIK7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wC1AP8AtQD/AN4A/wBXAAAAAAAAAAAAAD/JJwAA4AAAPw7ZAF/N2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX83aAD8O2QAA4AAAP8knAAAAAAAAAAAAAFcAAADeAP8AtQD/ALUA/wC1AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIK7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAD/ZJwDBL/8APw7ZACDVAADhAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAXzMA/1/uAAAfEtkAwQgmAD/RAQDBANkAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7f2gAAAAAAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAAAAAAB+39oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAKkAAAC5AAA/DtkA4e4AAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQAB4e4AAOHuAAA/DtkAALkAAACpAAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP/h7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/ALUA/wC1AP8AAAAAAAAAAADJAAA/2ScAAPgmAOHuAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAOHuAAAA+CYAP9knAADJAAAAAAAAAAAAAAC1AP8AtQD/ALUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAA/gicAAPAAAD8O2QBfzdoAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAF/N2gA/DtkAAPAAAD+CJwAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAC5AAAAAAAAAPAAAAAAAAB+1wAA4e4AAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAF8zAP9+1wAAwQAAAACpAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAD/JJwAAAAAAPw7ZAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAeHuAAA/DtkAAAAAAD/JJwAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrsAAX5FAP/h7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJgAACCYAAAAAAH7nAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAAB+5wAAAAAAAAAIJgAACCYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrsAAX5FAP/h7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCuwABfkUA/+HuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjaAAAAAAAgzQAA4e4AAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrsAAV8zAP8gANkAwRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXqsrYwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggABAAAAAKEAAAB+RQD/Pzcn/8Ev/wAAGNoAAAAAAACCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgD/AAAAAADoJgA/0QEAHw7ZAIK7AAEAzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHuAAAg/NkAAPjaAD+5JwAAAAAAAH4A/wC1AP8AtQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AtQD/AH4A/wAAAAA/uScAAPjaACD82QDh7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8SAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8fEgAAwfInAMEn2QAAIAAAAAAAAADwAAAAkgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG4A/wAQAAAAAAAAAOAAAD/ZJwA/DtkA4e4AAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/AAAAAAAAAAAAAAAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5FAP8AAAAAAAAAAAAAAACCuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAeHuAAA/DtkAAAgmAADwAAAAAAAAABAAAAB+AP8A3gD/ALUA/wC1AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AtQD/AN4A/wB+AP8AEAAAAAAAAADwAAAACCYAPw7ZAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCuwABAAAAAIK7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIK7AAEAAAAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADSCy30CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQAB4e4AAH7f2gAA+CYAP7knAAAAAAAA8AAAAJAAAAC5AAAAuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuQAAALkAAACQAAAA8AAAAAAAAD+5JwAA+CYAft/aAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQAB4e4AAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAADh7gAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIK7AAEfEgAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrsAAR8SAACCuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX83aAB8SAADB4AAAP9knAMEn2QAAAAAAAFcAAACAAP8A1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAANcAAACpAAAAAAAAP8knAMEn2QA/DtkAIM0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAGhzQAB4e4AAF/VAAA/DtkAAAgmAD/ZJwAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAP9knAAAIJgA/DtkAX9UAAOHuAAChzQABoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAAAAAAB+39oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAft/aAAAAAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABXzMA/wAAAAA/EtkAwbkAAADwAAAAVwAAAAAAAADXAAAAAAAAAAAAAAAAAAAAqQAAABAAAD8O2QDh7gAAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEALUA/wAAAAAAyQAAAAAAAAA3AAAAKQAAAKAAAAAAAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAoAAAAAAAAAAAAAAA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AAAAAAAAAAAAAPAAAAAQAAAAAAAAAAAAAADwAAAAAAAAAEcAAAAAAAAAyQAAAAAAAADwAAACAAAAAD+5JwAA8AAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAADwAAAA8AAAP8knAAAAAAAAEAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAeHuAAA/DtkAAAAAAAAAAAA/DtkA4e4AAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAP7knAADwAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAPAAAADwAAA/yScAAAAAAAAQAAAAAAAAAAAAAD/JJwAA4AAAAAAAAADwAAA/yScAAOAAAAAAAAAA8AAAP8knAADwAAAAqQAAALkAAADwAAA/uScAAPAAAAQACCYAAAAAAAD4JgAAAAAAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAAAAAAAAAAAAAAAAAAAgmAAD4AAA/2QEAwS//AAAAAAAACCYAAOgAAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgA/0QEAwS//AAAAAAAAAAAAAAgmAAAA2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAX5FAP9+5wAAAAAAAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCYAAOgAAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgA/0QEAwS//AAAAAAAAAAAAAAgmAAAAAAAAAAAAAPgmAAAAAAAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgAAAAAAAAAAAAAAAAAACCYAAPgAAD/ZAQAADtkAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAAOgAAAAAAAAAAAAAAAgmAD/RAQDBL/8AAAAAAAAAAAAACCYAAV8zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8AAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAF8zAP8AAAAAHxIAAAAAAAAAAAAA//8AAOLvABShzQDtAAAAAAAAAAB+RQD/grsAAX5FAP+CuwABfkUA/wAAAAAAAAAAgrsAAQAAAAAAAAAAfkUA/wAAAAAAAAAA4e4AAAAAAAChzQABAAAAAAAAAAB+RQD/AAAAAIK7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5FAP8AAAAAgrsAAQAAAAAAAAAAfkUA/wAAAAAAAAAA4e4AAAAAAAChzQABAAAAAAAAAAB+RQD/AAAAAIK7AAEAAAAAXzMA/wAAAAAfEgAAAAAAAAAAAAD//wAA4u8AFKHNAO0AAAAAAAAAAH5FAP+CuwABfkUA/4K7AAF+RQD/AAAAAAAAAACCuwABAAAAAAAAAAB+RQD/AAAAAAAAAADh7gAAAAAAAKHNAAEAAAAAAAAAAH5FAP8AAAAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5FAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALudVVAAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH5FAP9fMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/8HyJwDBL/8AABjaAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAIPzZAAD42gA/uScAAAAAAAB+AP8AtQD/ALUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAfucAAAAAAAAA4AAAAAAAAADJAAAAuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/HxIAAIIhJgAACNoAABAAAAAAAAAAAAAAAGAAAADXAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/HxIAAIIhJgA/0QEAwUfZAADwAAAAAAAAAAAAAAAAAAAAkgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAHh7gAAAAAAAAAAAAAAAAAAAAAAAADwAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARMo80QAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfzdoAPw7ZAADgAAA/yScAAAAAAAAAAAAAVwAAAN4A/wC1AP8AtQD/ALUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAB8SAACCISYAP9EBAMF+2QAAAAAAAAAAAAAAAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAAAAAAH7f2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAB8SAACCKQAAAPAAAABXAAAAAAAAAAAAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAKEzJgA/0QEAwUfZAAA3AAAAAAAAAAAAAAAAAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAX83aAD8O2QAA8AAAP4InAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/x8SAADB8icAwSfZAAAQAAAAAAAAAAAAAACSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG4A/wAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQAB4e4AAD8O2QAAAAAAP8knAADwAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAD/JJwACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wC1AP+hggAAAAAAAH7nAAAAAAAAAAgmAAAIJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIJgAACCYAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAADgAADB8icAIPzZACAA2QDBGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjaAAAAAAAgzQAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAgmAAAAAAAfEgAAAAAAAD+5JwDBL/8AAH7a/wAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4A/wAAAAAA6CYAP9EBAB8S2QABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAyQAAAAAAAD+5JwDBJ9kAX9UAAAAAAAAAAAAAAAAAAKErAAA/2ScAwUfZAAAAAAAANwAAAAAAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAADJAAAAAAAAP7knAMEn2QBf1QAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADC1kAjAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuQAAAMkAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAADh7gAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAHh7gAAAAAAAAAAAAAAAAAAAAAAAADwAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAADwAAAA8AAAAAAAAAAAAAAAAAAAAAAAAOHuAAChzQABAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAKQAAANcAAACpAAAAAAAAP8knAMEn2QA/DtkAIM0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfzdoAHxIAAMHgAAA/2ScAwSfZAAAAAAAAVwAAAIAA/wDXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAA1wAAAKkAAAAAAAA/yScAwSfZAD8O2QAgzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAP9knAMEv/wA/DtkAINUAAOEAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAABfMwD/X+4AAB8S2QDBCCYAP9EBAMEA2QAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAA/2ScAwS//AD8O2QAg1QAA4QAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAA0gst9AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+39oAAAAAAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAAAAAAAAft/aAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH7f2gAAAAAAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAACpAAAAEAAAftcAAOHuAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8AAAAAHxIAAIIpAAAA8AAAAFcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKkAAAAQAAB+1wAA4e4AAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wC1AP8AtQD/AAAAAAAAAAAAyQAAP9knAAD4JgDh7gAAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAADh7gAAAPgmAD/ZJwAAyQAAAAAAAAAAAAAAAAAAAAAAAADJAAA/2ScAAPgmAOHuAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAP4InAADwAAA/DtkAX83aAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAABfzdoAPw7ZAADwAAA/gicAAAAAAAAAAAA/gicAAPAAAD8O2QBfzdoAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAuQAAAAAAAADwAAAAAAAAftcAAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAABfMwD/ftcAAMEAAAAAqQAAAAAAAAAAAAB+1wAA4e4AAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAADwAAA/yScAAAAAAD8O2QDh7gAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAHh7gAAPw7ZAAAAAAAAAAAAPw7ZAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZib/AAAAAD/RAQA/DtkAAAAAAIK7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/AAAAAAAAAAAAAAAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACf/wkwAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AP8AAAAAX7UAAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AP8AAAAAAOgmAD/RAQAfEtkAAAAAAD83J//BL/8AABjaAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4A/wAAAAAA6CYAP9EBAB8O2QCCuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAyQAAAAAAAD+5JwDBJ9kAIPwAAOHuAAAAAAAAIADZAMH4AAA/uScAwUfZAAB+AP8ANwAAAAAAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAADJAAAAAAAAP7knAMEn2QAg/AAA4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuQAAAMkAAAAAAAAA4AAAAAAAAH7nAAAAAAAAoc0AAaHNAAEAAAAAfucAAAAAAAAA4AAAAAAAAADJAAAAuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5AAAAyQAAAAAAAADgAAAAAAAAfucAAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAKQAAAKAAAAAAAAAAAAAAAPAAAAD4JgB+39oA4e4AAKHNAAEAAAAAAAAAAAAAAABfMwD/HxIAAIIhJgAACNoAABAAAAAAAAAAAAAAAGAAAADXAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAApAAAAoAAAAAAAAAAAAAAA8AAAAPgmAH7f2gDh7gAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbgD/AAAAAAAAAAAAAAAAABAAAD+5JwDBL/8Aft/aAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/HxIAAIIhJgA/0QEAwUfZAADwAAAAAAAAAAAAAAAAAAAAkgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuAP8AAAAAAAAAAAAAAAAAEAAAP7knAMEv/wB+39oA4e4AAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAADh7gAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAHh7gAAAAAAAAAAAAAAAAAAAAAAAADwAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAADwAAAA8AAAAAAAAAAAAAAAAAAAAAAAAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAKQAAANcAAACpAAAAAAAAP8knAMEn2QA/DtkAIM0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfzdoAHxIAAMHgAAA/2ScAwSfZAAAAAAAAVwAAAIAA/wDXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAA1wAAAKkAAAAAAAA/yScAwSfZAD8O2QAgzQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAP9knAMEv/wA/DtkAINUAAOEAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAABfMwD/X+4AAB8S2QDBCCYAP9EBAMEA2QAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAA/2ScAwS//AD8O2QAg1QAA4QAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAft/aAAAAAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAAAAAAH7f2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+39oAAAAAAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAqQAAABAAAH7XAADh7gAAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAB8SAACCKQAAAPAAAABXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACpAAAAEAAAftcAAOHuAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAD/ZJwAA+CYA4e4AAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAA4e4AAAD4JgA/2ScAAMkAAAAAAAAAAAAAAAAAAAAAAAAAyQAAP9knAAD4JgDh7gAAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+CJwAA8AAAPw7ZAF/N2gAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAX83aAD8O2QAA8AAAP4InAAAAAAAAAAAAP4InAADwAAA/DtkAX83aAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2zGt6QAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAqQAAAAAAAH7XAADh7gAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAXzMA/37XAADBAAAAAKkAAAAAAAAAAAAAftcAAOHuAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/DtkA4e4AAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQAB4e4AAD8O2QAAAAAAAAAAAD8O2QDh7gAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAACCuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAAAAAAAAAAAAAIJwAAAAAAAAAAAAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCuwAB4e4AAOHuAADB8icAAKkAAADJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABHxIAAAAAAAAACCYAAAAAAADJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAIPzZAAD42gA/uScAAAAAAAB+AP8AtQD/ALUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAfucAAAAAAAAA4AAAAAAAAADJAAAAuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/HxIAAIIhJgAACNoAABAAAAAAAAAAAAAAAGAAAADXAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/HxIAAIIhJgA/0QEAwUfZAADwAAAAAAAAAAAAAAAAAAAAkgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAHh7gAAAAAAAAAAAAAAAAAAAAAAAADwAAAA8AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfzdoAPw7ZAADgAAA/yScAAAAAAAAAAAAAVwAAAN4A/wC1AP8AtQD/ALUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAB8SAACCISYAP9EBAMF+2QAAAAAAAAAAAAAAAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAAAAAAH7f2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAJJm+wAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAB8SAACCKQAAAPAAAABXAAAAAAAAAAAAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAA4e4AAAD4JgA/2ScAAMkAAAAAAAAAAAAAALUA/wC1AP8AtQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAEAAAAAX83aAD8O2QAA8AAAP4InAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/x8SAADB8icAwSfZAAAQAAAAAAAAAAAAAACSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQAB4e4AAD8O2QAAAAAAP8knAADwAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAH7nAAAAAAAAAAgmAAAIJgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/wAAAAChSwAAAAAAAACCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/fkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/wAAAAB+RQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgrsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7LzJMAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHxIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANILLfQQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAACCuwABfkUA/4K7AAEAAAAAfkUA/wAAAAAAAAAAAAAAAAAAAAAAAAAAgrsAAQAAAAB+RQD/grsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/AAAAAAAAAAAAAAAAgrsAAQAAAAB+RQD/AAAAAIK7AAFfMwD/HxIAAIK7AAEAAAAAAAAAAH5FAP+CuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8fEgAA4e4AAB8SAAAAAAAAAAAAAOHuAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/x8SAACCuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/wAAAADh7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKHNAAF+RQD/AAAAAOHuAAAfEgAAAAAAAIK7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP9fMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/XzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAAAAAAAAAAAAAAAAAF8zAP9fMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/fkUA/wAAAAAAAAAAXzMA/35FAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/35FAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkKozLQAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAXzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+RQD/XzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChzQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/XzMA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfkUA/18zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF8zAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoc0AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACI8XAiAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfEgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHcstj4AACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAcgD/AAAAAAAAAAAAAAAAANgAAAAAAAAAKAAAAAAAAAAAAAAA2AAAAAAAAAAoAAAAAAAAANgAAAAAAAAAAAAAACgAAAAAAAAA2AAAAAAAAAAoAAAAAAAAAAAAAAC7AAAAHQAAACgAAAAAAAAA2AAAAAAAAAAAAAAAAAAAAAAAADMNIAAHEQQAAAAAAPnv/AAAAAAAAAAAAAcRBAD57/wAAAAAAAAAAAAAAAAAzQ8GADoC/gAAAAAA+e/8AAAAAAAAAAAAAAAAAAAAAAAHEQQA+e/8AAAAAAAHEQQAAAAAAPnv/AAAAAAAAAAAAAAAAAAHEQQA+e/8AAAAAAAAAAAAzYfgAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAANwAAAAAAAAAAAAAAAAAAACkAAAAAAAAA1wAAAAAAAAAAAADQ1igA+fv+AAcFAgD5+/4ABwUCAPn7/gAHBQIA+fv+AAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAPn7/gAH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NwAAAMkAAAA3AAAARwAAAAAAAAAAAAAAKQAAAIAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAcFAgAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAABwUCAAAAAAD5+/4ABwUCAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFS7D8MAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPQ+3TwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9D7dPAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEMHvPhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMmDpkkAABIYSURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0OQyoHAk6H8AAAAASUVORK5CYII="

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAACACAYAAADktbcKAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gYeFQMzJs6WawAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHgBACCA338AAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAct0jAEAAAAANYx0/wAAAAAAAAAAAAAAADWMdP8AAAAApVBvATWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAHLdIwBy3SMATWMdP81jHT/AAAAAAAAAAA1jHT/JiQdAMt0jAE1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBy3SMAQAAAAA1jHT/AAAAAAAAAAAAAAAANYx0/wAAAAClUG8BNYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAMt0jAE1jHT/y3SMAQAAAABbsJH/pVBvAQAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAJiQdAACMdP8AAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAMt0jAE1jHT/NYx0/wAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAADWMdP8mJB0ApVBvAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAy3SMAQAAAAA1jHT/AAAAAAAAAAClUG8BAAAAAMt0jAFbsJH/pVBvAQAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP81jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAy3SMATWMdP81jHT/AAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAADWMdP9bsJH/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAANYx0/zWMdP81jHT/NYx0/zWMdP81jHT/NYx0/zWMdP81jHT/AAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAANYx0/zWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAFuwkf/a3OMAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAW7CR/9rc4wAAAAAAJiQdAKVQbwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAJiQdANrc4wDLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAFuwkf8AAAAA2tzjAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMATWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAABbsJH/2tzjACYkHQDa3OMAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAW7CR/9rc4wDLdIwBAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAACYkHQDa3OMAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAACYkHQDa3OMAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAFuwkf/a3OMAy3SMAQAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/9rc4wDLdIwBAAAAADWMdP8AAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/9rc4wDLdIwBAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAA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ADWMdP8AAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/6VQbwHLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMATWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf/a3OMAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/9rc4wAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf8AAAAA2tzjAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAQAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAADWMdP8AAAAAAAAAAMt0jAE1jHT/AAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAMt0jAEAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJiQdAACMdP8mJB0A2tzjAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBy3SMAQAAAAA1jHT/NYx0/wAAAADLdIwBAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAA1jHT/AAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/yYkHQAAAAAA2tzjAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAADWMdP8AAAAAAAAAAAAAAADLdIwBAAAAAACLZiUEAAAgAElEQVQAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/W7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf8AAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/NYx0/zWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAW7CR/1uwkf81jHT/NYx0/wAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/W7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/1uwkf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAJiQdANrc4wAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMATWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWM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AAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/yYkHQAAAAAA2tzjAAAAAAAmJB0ApVBvAQAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAmJB0ApVBvAQAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAADa3OMAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAMt0jAEAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/W7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAClUG8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApVBvAQAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADa3OMANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAE1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAClUG8BAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAHLdIwBNYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMASYkHQBbsJH/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/W7CR/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP9bsJH/NYx0/1uwkf8AAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/1uwkf9bsJH/NYx0/wAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP81jHT/AAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/zWMdP81jHT/AAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf/a3OMA2tzjAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAE1jHT/AAAAAAAAAAAmJB0A2tzjAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAADLdIwBAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/2tzjAMt0jAEAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAABbsJH/2tzjAAAAAAAAAAAAy3SMAQAAAAAAAAAAW7CR/6VQbwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAADWMdP8mJB0ApVBvAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAy3SMAQAAAAAA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/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP9bsJH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/W7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAANYx0/1uwkf9bsJH/NYx0/wAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf9bsJH/AAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/W7CR/1uwkf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAcsAAAA1jHT/NYx0/wAAAAAAAAAAAAAAACYkHQClUG8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/JiQdAKVQbwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAACMdP81jHT/JiQdANrc4wAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/8t0jAHLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAADLdIwBywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAVuwkf8AjHT/AAAAAAAAAADLdIwBAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApVBvATWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAHLAAAANYx0/zWMdP8mJB0AAAAAAAAAAADa3OMAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAE1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAIx0/zWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAHLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAjHT/y3SMAQAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP/LdIwBAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApVBvAQAAAAAAAAAANYx0/1uwkf8AAAAA2tzjAMt0jAEAAAAANYx0/zWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAE1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAACMdP/LdIwBAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBNYx0/8t0jAEAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAADLdIwBAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJB0AAIx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAmJB0AywAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAFbsJH/2tzjAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP8AAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAApVBvAQAAAAAAAAAAAAAAAAAAAADLdIwBAAAAADWMdP8AAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAE1jHT/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jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAANYx0/zWMdP8AAAAAAAAAAMt0jAEAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANrc4wA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAEAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMATWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAADLdIwBAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAJiQdAAAAAADa3OMAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/1uwkf81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf81jHT/NYx0/wAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAADWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/1uwkf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAFuwkf81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/AAAAADWMdP81jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/1uwkf9bsJH/NYx0/wAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/W7CR/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAA1jHT/WJcDcQAAIABJREFUNYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAABbsJH/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW7CR/wAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf8AAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/AAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFuwkf8AAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAADWMdP8mJB0A2tzjAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAJiQdAKVQbwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/pVBvAQAAAAA1jHT/AAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAmJB0AAAAAANrc4wAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAFuwkf/a3OMAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/y3SMAQAAAAA1jHT/y3SMAQAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8mJB0A2tzjAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAANYx0/wAAAAAmJB0AAAAAANrc4wDLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAJiQdANrc4wAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBNYx0/wAAAAAmJB0A2tzjAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAy3SMAQAAAAA1jHT/AAAAAAAAAAAmJB0A2tzjAMt0jAEAAAAAAAAAAAEAAAAAAAAAADWMdP8AAAAAAAAAAMt0jAEAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAANYx0/yYkHQDa3OMAy3SMATWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMt0jAEAAAAANYx0/wAAAAAmJB0A2tzjAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAA1jHT/y3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAANYx0/yYkHQDa3OMAy3SMAQAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAADLdIwBAAAAAAAAAAAAAAAANYx0/8t0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAADLdIwBNYx0/8t0jAEAAAAANYx0/wAAAADLdIwBAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAy3SMAQAAAAA1jHT/AAAAAAAAAAAmJB0A2tzjACYkHQDa3OMAAAAAAMt0jAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAADLdIwBAAAAADWMdP/LdIwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAy3SMAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAADLdIwBAAAAAAAAAAA1jHT/JiQdANrc4wDLdIwBADWMdP81jHT/AAAAAAAAAAA1jHT/NYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/wAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/zWMdP8AAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAADWMdP9bsJH/NYx0/1uwkf81jHT/AAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/NYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP81jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/NYx0/zWMdP81jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/zWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANYx0/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEkotsAAAgAElEQVQAAAAAAAAAAAAAAAAAAID/fzWMdP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1jHT/AAAAAAAAAAAAAAAAAAAAAAAAAAABGGta/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAH0U//wAAAAAAAAAAAAAAAOG7wQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcZDgD3GQ4A9xkOAPcZDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Nyf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE/vPzAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A/wAAAAAA1wAAAAAAAADJAAAAAAAAAPAAAAAAAAAA8AAAAAAAAD/ZJwDBDtkAAAAAAAC7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/Nyf/AAAAAAAAAAA/Nyf/wcnZAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPzcn/wAAAAAAAAAAAAAAAMHJ2QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAD+8/MAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAggAAAAAAAMHJ2QEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHSEaAAAAAAAAAAAAAAAAAOgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMEA2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAAAAAAAAAAMFH2QAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wC1AP8AAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFxLp1gAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYkHQAAAAAAAAAAAAAAAADLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA/vPzAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAClUG8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAJIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAA8AAAAJIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAPAAAACSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAADwAAAAkgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAA8AAAAJIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIm/StQAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAT+9fcAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAPAAAACSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAP719wD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAADwAAAAkgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAA8AAAAJIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAA8AAAAAAAAACSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALkAAAAAAAAAAAAAAAAAAACSAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5Qs6bAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AtQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF2ESKAAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAACA/38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAAAAAAMkAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAAAAAAMkAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAyQAAAF4A/wCiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAADwAAAAAAAAANcAAAAAAAAAKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAgsJAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAyQAAAAAAAAAAAAAAVwAAAAAA/wCiAAEAXgD/AAAAAACiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAMkAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAADXAAAAKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAyQAAAAAAAAAAAAAA8AAAAAAAAADJAAAAAAAAAH4A/wAAAAAA4AAAAF4A/wAAAAAAogABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAADwAAAAAAAAAAAAAADXAAAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAACCwkA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAyQAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAOAAAAAgAAAAAAAAAOAAAAAgAAAAAAAAAOAAAABeAP8AAAAAAKIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AP8AyQAAAAAAAADwAAAAAAAAAAAAAADXAAAAcAAAABAAAADwAAAAAAAAAAAAAADXAAAAOQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/ALUA/wAAAAAAAAAAAMkAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAOAAAAA3AAAAAAAAAFcAAAAAAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAADwAAAA8AAAAAAAAADXAAAA1wAAAHAAAADJAAAA8AAAAAAAAAAAAAAA1wAAADkAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wAAAAAAyQAAAMkAAADJAAAAAAAAAPAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAABXAAAAqQAAAAAAAAAAAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkgABAPAAAADXAAAA1wAAALsAAQBwAAAAAAAAAAAAAAAAAAAAAAAAANcAAAA5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApZirkgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAPAAAADwAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAA4AAAAKkAAAAAAAAAVwAAACAAAAAAAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAogABALsAAQC7AAEAtQD/AAAAAADJAAAA8AAAAAAAAADXAAAAcAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4A/wDJAAAAAAAAAPAAAADwAAAAAAAAANcAAABHAAAAAAAAAPAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAADJAAAAAAAAACAAAAAAAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAPAAAAAAAAAA1wAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADwAAAAAAAAAAAAAADXAAAAcAAAAMkAAADwAAAA1wAAAAAAAAAQAAAAAAAAAPAAAADnAAAAAAAAAOAAAABXAAAAAAAAAAAAAADHAAAAAAAAAOAAAADgAAAANwAAAFcAAAAgAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAAAAAAAAAAAAAAAAAC7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACSAAEA8AAAANcAAADXAAAAkgABAHAAAAAAAAAAAAAAAAAAAAAAAAAARwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKkAAAAAAAAAAAAAABkAAADnAAAAVwAAAAAAAACpAAAAkAAAADcAAAAgAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAPAAAAAAAAAA1wAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAAEAuwABALsAAQC1AP8AAAAAAMkAAADwAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALsAAQCQAAAAVwAAAAAAAAAZAAAAkAAAADcAAAAAAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AMkAAAAAAAAAAAAAAAAAAAC7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAA8AAAAAAAAADXAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALsAAQDJAAAAIAAAAAAAAAC7AAEAkAAAAOcAAAAAAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAAAAAAAAAAAAALsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADHAAAAVwAAAAAAAAAAAAAAIAAAAAAAAABeAP8AAAAAAMcAAAA3AAAAAAAAAAAAAAC7AAEAuwABAOcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAA8AAAAAAAAADXAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAAAAAAALsAAQBwAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuwABAAAA/wBwAAAAAAD/AKIAAQAAAAAAuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAALsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADjDWkPAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQCDQ0AAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AyQAAAAAAAAAAAAAAAAAAALsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAA4AAAADcAAADgAAAAAAAAAAAAAAAAAAAAuwABAAAA/wAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAEAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAINDQACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAACAAAAAAAAAAXgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAAQAAAAAAAAAAALsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAANwAAAOcAAADJAAAANwAAAAAAAAAAAAAAAAAAAAAAAAC7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAC7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcAAAAAAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAPAAAAAAAAAAAAAAAMkAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAogABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAANwAAAAAAAAAZAAAAxwAAAMkAAABXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAogABAAAAAAAAAAAAuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAANwAAAMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAMcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAANcAAAAAAAAAAAAAAAAAAAAAAAAASwABAAAAAAAAAAAAAAAAALsAAQAAAAAAAAAAAJAAAAA3AAAAAAAAAAAAAADJAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuwABABkA/wAAAAAAuwABAAAA/wAZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAC7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHuroWgAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5wAAAAAAAAAAAAAAuwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAILCQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+9fcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAxwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA5wAAAKIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAogABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADkAAAAAAAAAAAAAAAAAAAC7AAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgsJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP719wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAALsAAQAAAAAAAAAAAAAAAAAAAAAA4AAAAKIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCwkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vX3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAALsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAh+D1kAAAAJ9JREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAH//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABrzViyvFe7yAAAAABJRU5ErkJggg=="

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACgCAYAAACLz2ctAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4goNBB0M3lFYvgAAAB1pVFh0Q29tbWVudAAAAAAAQ3JlYXRlZCB3aXRoIEdJTVBkLmUHAAASjUlEQVR42u2dXWwc1RXHz3X2AUqbVqCyFdBUimgSHkBGAYyEHIhp0gdIUkfhwREtQXXhoaGIdeREQg00VSXHTVxBeeiHJSiq4geqBDfOA6bYIValmCbKqnlwTNOofITiIlAJVZKqJrcPu2d85u79nlmvP85fGq13du/M+Mxv/ueeO7MzAlzaDRIAAPaAgAbo3paVUp335vikqPe66rWO2dYBgFT8toL/fmxubq6JfblcDo/LbqhZDvIk5ip8FIaWW29M5o+fPl8XQO5tWSmPHj+TvL/v7lWZ1/PoQ2skAMCLrxyLWsYjqyvx/93JsPhT6DqUzwY8QKTglctlOj8MRAreNjL/pRkIhTe1swghwkfBo8obQoRvgISjQ8pMID760Br55F3/AgCA5966PhjCR1aD/Ma1lb/f+cQPQgSPQicU0GT1OwMGCBE+Cp7mO34Q7gaZAg8UCLUA6uzSYJ8+kld6kuWJpl0ixvVMEFIo6Hqe+fYueOcTc1u6M3XwUcWASOFDhUBI4UO5IDwAIDsM0Gn3C4BUIfSBj0JoBRA5sgEIAE2po6faSO6pbuSe9N8AAAf21PYrfODTvTe5ngs+tY263J+81gO4A79xLYC6Mx9ZDRLTWw1wasoSAgaEgKPHz8DR42fg3paVUtcvRfAofAcmb0g+e/KufyWf28BD+OgB9M4nlf/BtN0InwAQAuIyVQh8tj5iSgjfhOazlspLgVo3QmYEas9MP+IAgLT1I2ywhaTc8dPntfOXLyvCuXennMumO5KmNNzh/9DA10H6ShREAICjM44o0Q0RKtX1tq78IPV+5vN03xChogcKhZAeTFn6hib3i4GvXC6n+oRa95twL6fJdOTrwIP2dvd3r/TIEPhcKXf5smKQy5pcEMGjO1V1xgQ6KaGjOoHFEfHAcaVW6oQo2sYEkm4b1TbU/Xxjrev/hcBnTbsIX9Xh4JbqZFDBlE6NbtjeDnDoUGL99B+hMAy+tCtpsmlbT9AwC9VXv1zIHBddfzCZV6jdOR3E8TqkBNpVHjCsowJUOv2iA1InNPUFf3cShOqEqgPi+1jn0w3FONNo6DDLNj/nSzlgh++3q+C52lD4dO9N7ofVra3yjZXNTWokRMoBBxzwaXeykn5DthOdGreZvq+HYtyvJv1uUwqOWyz9P10KbrTGT5+H5cuKRtBoKv7o02lwVdZqJexKvzWpWIiZKRA+V/oNPViCDh5LlYxTluWUSiUolUozwzDqqMmEAqEu/U7UCUCEwZRybcMwLbfeCOfenTL2+dRU7FOA0J1HdyDCiKls8EVR098bIJNuaGbwRRHkhL4gmg4aU1diK4AYION7tiEanGIhRPBGRkb01a5Hny+Bb5wAGHR0V9Owqw2F0NYHVCF09fmo+2EVqoJN3Q93Iu0/4ZTqJmgghAD4TMMvKog4HGMa+3OlYByOiTKIqqerEBqrWQt8UafkJmrHkwtbAUTsEaEbhkEY5JUeScGzuZ9pqMUEn879XIPcJlUgXimfenzSC0KE7xe/XgnqMExI/+/Rh9ZIdRhGHS4yvcc2eBBV94OUAFJXDePnhv6fcBUiucM3njoo9KdwXGW8CcAYuU69UddD+OpxLvipxye9vkvhU6Gi433PvXU96N6bhm2yVsE+Z0NizoCUSiUzfK4zHib41IsRbCewdUMQecFng5CCV0/4QiA0wacDEUELvShBHWgOGXh2mYnrHLAKotcFCLQQaTGluXTqTTmg7h8ISbt5Q+hOmfWTaxvmy2Vapv3o2n+ZLsFyXUfQoEv6Fqx2dnVJjkI2RZ1m6O5skwAAvf0jUUQfPnxYAgBs2LDB2I+iir2ejm4rKnabdeC1t7TA3hx3xont25NtveOFFwQDaNmhav8sBLzR0VFYu3ZtzXJxmRQ4egVJKIjdnW1yemkzrF27lq5TxkJIwctbUkopRGXU+8T27fLE9u3SBOEnO3bI/7z6Kiw7e3beQ9oUC1+MK322YUMCAnU/XO6LrxwT6nLpPNulTLptbd30VM386aXNNa7oA97Ori7Z3tICz3z3uzPjjb/6VV12CoJHHZHCJx5+GL70hz/AuzffLBcNgFnhw07xHX192s97+0es45EIYgiECLv6GgNee0sL3N7amoLvtZERkbf7SVkZiNRBiPDJ3/9+waTgptmAr7uzTZY725IqTO37YUr0HRQPgdCkUqkkQ8C7bcUK+HxqCv769tt1g88mCp94+GH4bMuWxQFgHvBhe58hHBeEIdugc7/R0VGn6yF4t61YAbetWAEAAH99++3c4QMAGHv99cT1dE6IunbfPoHwoRZ8HzBP+ELa+zihywV7+0fE2OAvaquuC2XAwsQE3+2trXB7ayssKVYujDg1NpZKv3kLIdQ5IS1Ert23T3y2ZQt8tmXLgoDPWgU3Cj4VQp1r+vQFcf2FC2UYGyxDAQDGBmfgo06oq24/n5pKnO+2FSvg1NhY7u6Hal23LgWhlFKefOIJbYpeKOBZHbDR8IU4oWv9vf0jYnppM7Ruego0QzIJfHt27EicDwBgSbGYwFdPIXzUCRG+xTAW2DRX4YuF0Hf9tBDSOR9Nu0uKxbq5H8KHMFL4fAuUBQPgXIPPBKEp/ZrW39fXJ3yGYih86HxLikU4NTZWtx2wZv160bpuXQq+ixs31qRetShZcADOVfhMEKrrcK2/r69P6NyPakmxmBQeS4rFBMj/XXNNXdyPuiA64cWNG6F13TrAvmDIUM28LULmOnwUQt1ZjJi0i9q7f7+Aaj/w9tbWJPV+PjWVwFhvrVm/XhwbHparf/nLVFpGCBd6GobuzjaZZXA3a/uQ9ZgAzLr+b7e1yf/+858108VyedZS37HhYXlseFiqaXehpl/WHJYKHUNIAnH48GGJr8EL+NmghKNSJq+h658GKa/0SHwNbg8gZXu7xNfg7T8CEs6BTF5Z+Q7DuMCj8x588MFw8Kj+/Mdg8FIzr+wKBi81k/zQ3hs8qgkGaFYAVMEbHR2FoaEhGBoa8luLCt7zPwK4Z2Nl8oFHAa/81i6App7K5NNeAW/g0KHKLUaq97pxSgXvJXD//tUQx+jMgXGMzBwYx9jMgXGMzhwYR+VALvgEjTpdV1cX7N+/Pyxo1OlO/glg9be83U9e6ZHU6conAJrv8Hc/2d4uqdPhvV+83e8cyJpfdbWEuR/GEA/YoMyhi2FA5tDFMCRz6GIYlDl0MZxQhmFsaZe6HA7i4jzTeFoq7arO96PnZ97fZx9ekNNQ43zNd/n91hjTrup8HcT1xKFDwpl2VefbRt4v97gRJImh60ocZwzV+Hl2XfTx8zyASQxT8fOFkMZQjZ8NQLXqCnY+Fb5Q51PhC3U+Fb5Q51Phi3Q+Xfy8x/Wo89H4Pb1JhDofjZ8o+P06jTofjZ/3reCo89H4PTDTvhAD39DQkN39TPCh7tlodT8jfEnPtcfqfkb4UO3tdvczwYe6xe1+tOuiZo5g+GKcj8KnZA4f90vBp2QOr4OYwqdxPiOAKny64AXBpwteCHw1wYMw+NTguVKvK+16pF6adtWD18v9aAzVzOHhfqm0q2QOH/dLpV0lc3i5H42hmjkeSLe39gF1aTfotJAu7XqmD1Pa9U0fprQbdA9lXdp9wL89jZ8za9ji55E1rPHzyBrW+PlkDVv8LFlDmNwvCj7dkUvlgE975NL1O+DTHrnpf1YEH7kQBh/GsKurK3XVjTd8GMOTfwoq2NQYlk9AUMGmxnAAIKxgU2M47lewFerqfAHwWft8sc4XAp+tz5fB+YJjF5l2bZkjJHbRadeWOSyxK+iO3Cj46JEbAV/qyI2AL3XkxsBHj9yc4Iu6ioXGLxA8NX6h4Knxi3rkA41fQNxASilLpZKkCh6v2vxEZaQep8DxqlPHoTJSX52C2ldvPyvJFLT9R6p3eD9CpkDZfurppc1PZGp/6ni2c9NZb9/r9ZAjW/CiwKPBiwCPBi8GPBq8KPBo8CLBY/hygI+Dx2qIGD6Gj8VatBIA2e/3R6VeMk+f++G8u+jPBmVM5ZdZtN/3QGPv4um6PyI9vxw8sJ1D+7r906bfW8TCh7e6pfOs6TJDAYNVsIytghHAI9kKkayx0z1NE+fR+d2dbfHXFObQPk814RGGN4fMCqEqetu1rQBCew9mCl7kME7VzgV9jXLBBjhgyP0RuzvbZJZMlbX9nHVCtQ0FTf3M6IQUvtBxxCwO2GAXxPi4Cqo8fr045zuFsRDqvo/BUgNrvBM9Aa9UKkmcfAGkr6HtVfCC2+ckE4QYX9dDr+c1fFkgtAHo3Rc0OKAPBDYHDIJI44CNhlCNbSiAcxk+7Y+S6tEnbO6fecDdr1tW6r/09CYBT28SpY/fTM6Ddne2ycKFsnM7yLMtRVeplPQDfdvTKrj0RinpCwa3z0H0NiSmPpsvhHO6zweWX8WpEGatkvEWvQAAj49PBh2500ubo9bZ6PZ5QKiDx/f2J3MdPiuApn80FkIvB6yqr69PlEolOb20GaaXNkPhQtgDlRvdPq/CJMuDJOcDfE4A8+xTUAd8c3zSGdi+vj5RuFBO7fyQ9Ta6fVb4Qm/cPh/hq3ad3AWJ6Rm+9J/U/dP0kaTYud5KntAZ8tw5uh0xwW10+6zw0HjZHtwzn+DzckDaF7Spt39E1NMhshZGjW7vW8Wb4HHdH9HVfl6nYB2Ern9UdT9dQBnCmaEfccSvMOnubKvNSJ7t5718BkFjB0rz3o653N4EoU96NoJ/hC8rY7HyL0JYcfptT2fKkX6wq59jrVEBAKD881WVc7aTNyQfbL7/ztQXr3p/cKYim7wh+fzujr25PTMt6gjKcP/k7md/LHuf/amx/U3FSlzenzojYsDr7L6ZfFKZzyBqALTBd/CNv8DWlR9o4YsdUqgtAAFiOIr9/VT3sz+WL+87ATb4kgPv6quDXC8NHcEvmd8pGUJSBZd/vkra4KNS4XO53+b773RWi1LKqCmL6wEAfG+H/R59NxVXSYQPnTAk5VLtfGw4BaLtu4vOAUOcL0THB3bKg2/8BZdpdMJ6O9/XvvidKnC30rnQ++wP3e73hS8AAMDlS5e84KPut/OxYdj7m/UAAMlr2g3ZCQHIOKAtraLzqYBi31GXetVlHh/YKfNwwBBlgQ8A4PLFi3D54kWvdampl0JHHZClAVAFi7qfrs+nuqMK3+b770yWQ1ywQdelXQcv7/sggQ/gQ69W70+dEeh8vkWIDjR0QvUzTsVVAHVp1wbfVe8PWuGjjqq6ps0J8xa6H+rlfRcB4EN4ed9pZ9ubiqsk9vsuX7qUem9zP3Q9ChvCx47oSME+1a6uKKFgIXD4Pfp96oT1hnAGvuuqc74CAP/2gk+tgHHydT4VNgqhLj0zgFW5Cg5bUdLd2SYpbAghhRHhw7R8fGCnXH/PN+XswPd3APgYAAA+/M+rwuV+uuGXq66+2qsaNsHF0FkAVAeZ1X6hmnZVQMsT7wHt99H2aorH97tfOAjDf/6bmB34KuC54LNVwjbZxjrVdIvv+3vP8qA0ADS54LOlXQx88y1fv373CweBpmAKo1qMlCfem3X4sizbB0I1DZucD98zfNVxQBd8JuejR31v/8hHACAADkoAgD3bN6dWQl0PAHKDD0/D1RM+HI7xdEG59zfrtemW9g37e88yebgP67FQU99OB17oOeAqc6KezkfPglCd/ccp5/Lo6TgddOx8swDgbKoCYL7OpytELl+65D0eqBvfY/AWLIDfl/VIu2rFG3JFDIvFYrFYLBaLxWKxWCwWi8VisVisuaysN8NmsXzVpIPvo0+nYd0rxzg6rMY6X+bnsLFYoQ7oe/9hFisPFWwfqjdF3Mo3M2LV2wENILJYs1eEqPMOcJxYs1mImD47ACC5MGHNegqmfUDsF86rZ4+x5heALrjKnW3gc+d8Fssl4QOe+jyQjz6d5uEaVr4AInwqXCqUDB8rdwBN8LFYs9YHZPhYDe8DsvKV8cnwit4cnxQMIKsu0C1fVrR+/9y7U4saRgawDuC5oPOBcbGAyADmCF8seCYQFwOEDOAcg2+xQdjECGVX3vDVa5kM4AKVWkjM1WUygAwhw8cA5q+WW29MwMkCD22Py1zoKjA++UI4fvp8CsLQccDFAh5XwTlXwTpwxk+fD4JX13ahV8EMYE4Q5u1c46fPL4pxQO4DshjAhSDfdDvby+IUzH3BKPj4XDBr1iFcbPAxgHWE0FXlmlItX47FqjuQixk4FovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVgsFovFYrFYLBaLxWKxWCwWi8VisVisRar/AxFH+evAFgNQAAAAAElFTkSuQmCC"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {"columns":5,"image":"../images/atlas.png","imageheight":256,"imagewidth":160,"margin":0,"name":"atlas","spacing":0,"tilecount":40,"tileheight":32,"tileproperties":{"0":{"name":"forest"},"1":{"name":"waste"},"2":{"name":"log-camp"},"3":{"name":"science-camp"},"4":{"name":"village"},"5":{"name":"river-up-down"},"6":{"name":"river-down-right"},"7":{"name":"river-down-left"},"8":{"name":"river-down-left-right"},"9":{"name":"river-up-down-left"},"10":{"name":"river-left-right"},"11":{"name":"river-up-right"},"12":{"name":"river-up-left"},"13":{"name":"river-up-down-right"},"14":{"name":"river-up-left-right"},"15":{"name":"road-up-down"},"16":{"name":"road-down-right"},"17":{"name":"road-left-down"},"18":{"name":"road-down-left-right"},"19":{"name":"road-up-down-left"},"20":{"name":"road-left-right"},"21":{"name":"road-up-right"},"22":{"name":"road-up-left"},"23":{"name":"road-up-down-right"},"24":{"name":"road-up-left-right"},"25":{"name":"road-up-down-left-right"},"26":{"name":"road-right"},"27":{"name":"road-down"},"28":{"name":"road-up"},"29":{"name":"road-left"},"30":{"name":"bridge-up-down"},"31":{"name":"bridge-left-right"}},"tilepropertytypes":{"0":{"name":"string"},"1":{"name":"string"},"2":{"name":"string"},"3":{"name":"string"},"4":{"name":"string"},"5":{"name":"string"},"6":{"name":"string"},"7":{"name":"string"},"8":{"name":"string"},"9":{"name":"string"},"10":{"name":"string"},"11":{"name":"string"},"12":{"name":"string"},"13":{"name":"string"},"14":{"name":"string"},"15":{"name":"string"},"16":{"name":"string"},"17":{"name":"string"},"18":{"name":"string"},"19":{"name":"string"},"20":{"name":"string"},"21":{"name":"string"},"22":{"name":"string"},"23":{"name":"string"},"24":{"name":"string"},"25":{"name":"string"},"26":{"name":"string"},"27":{"name":"string"},"28":{"name":"string"},"29":{"name":"string"},"30":{"name":"string"},"31":{"name":"string"}},"tiles":{"0":{"probability":20,"type":"terrain"},"1":{"type":"terrain"},"2":{"probability":0.100000001490116,"type":"settlement"},"3":{"probability":0.100000001490116,"type":"settlement"},"4":{"probability":0.100000001490116,"type":"settlement"},"5":{"probability":2,"type":"river"},"6":{"probability":30,"type":"river"},"7":{"probability":3,"type":"river"},"8":{"probability":10,"type":"river"},"9":{"probability":10,"type":"river"},"10":{"probability":2,"type":"river"},"11":{"probability":3,"type":"river"},"12":{"probability":3,"type":"river"},"13":{"probability":10,"type":"river"},"14":{"probability":10,"type":"river"},"15":{"probability":2,"type":"road"},"16":{"type":"road"},"17":{"type":"road"},"18":{"type":"road"},"19":{"type":"road"},"20":{"probability":2,"type":"road"},"21":{"type":"road"},"22":{"type":"road"},"23":{"type":"road"},"24":{"type":"road"},"25":{"type":"road"},"26":{"type":"road"},"27":{"type":"road"},"28":{"type":"road"},"29":{"type":"road"},"30":{"type":"bridge"},"31":{"type":"bridge"}},"tilewidth":32,"type":"tileset","wangsets":[{"cornercolors":[],"edgecolors":[{"color":"#ff0000","name":"Road","probability":1,"tile":-1},{"color":"#00ff00","name":"Forest","probability":10,"tile":-1},{"color":"#0000ff","name":"River","probability":1,"tile":-1}],"name":"Wang Atlas","tile":-1,"wangtiles":[{"dflip":false,"hflip":false,"tileid":0,"vflip":false,"wangid":[2,0,2,0,2,0,2,0]},{"dflip":false,"hflip":false,"tileid":2,"vflip":false,"wangid":[2,0,1,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":3,"vflip":false,"wangid":[2,0,1,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":4,"vflip":false,"wangid":[2,0,3,0,2,0,3,0]},{"dflip":false,"hflip":false,"tileid":5,"vflip":false,"wangid":[3,0,2,0,3,0,2,0]},{"dflip":false,"hflip":false,"tileid":6,"vflip":false,"wangid":[2,0,3,0,3,0,2,0]},{"dflip":false,"hflip":false,"tileid":7,"vflip":false,"wangid":[2,0,2,0,3,0,3,0]},{"dflip":false,"hflip":false,"tileid":8,"vflip":false,"wangid":[2,0,3,0,3,0,3,0]},{"dflip":false,"hflip":false,"tileid":9,"vflip":false,"wangid":[3,0,2,0,3,0,3,0]},{"dflip":false,"hflip":false,"tileid":10,"vflip":false,"wangid":[2,0,3,0,2,0,3,0]},{"dflip":false,"hflip":false,"tileid":11,"vflip":false,"wangid":[3,0,3,0,2,0,2,0]},{"dflip":false,"hflip":false,"tileid":12,"vflip":false,"wangid":[3,0,2,0,2,0,3,0]},{"dflip":false,"hflip":false,"tileid":13,"vflip":false,"wangid":[3,0,3,0,3,0,2,0]},{"dflip":false,"hflip":false,"tileid":14,"vflip":false,"wangid":[3,0,3,0,2,0,3,0]},{"dflip":false,"hflip":false,"tileid":15,"vflip":false,"wangid":[1,0,2,0,1,0,2,0]},{"dflip":false,"hflip":false,"tileid":16,"vflip":false,"wangid":[2,0,1,0,1,0,2,0]},{"dflip":false,"hflip":false,"tileid":17,"vflip":false,"wangid":[2,0,2,0,1,0,1,0]},{"dflip":false,"hflip":false,"tileid":18,"vflip":false,"wangid":[2,0,1,0,1,0,1,0]},{"dflip":false,"hflip":false,"tileid":19,"vflip":false,"wangid":[1,0,2,0,1,0,1,0]},{"dflip":false,"hflip":false,"tileid":20,"vflip":false,"wangid":[2,0,1,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":21,"vflip":false,"wangid":[1,0,1,0,2,0,2,0]},{"dflip":false,"hflip":false,"tileid":22,"vflip":false,"wangid":[1,0,2,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":23,"vflip":false,"wangid":[1,0,1,0,1,0,2,0]},{"dflip":false,"hflip":false,"tileid":24,"vflip":false,"wangid":[1,0,1,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":25,"vflip":false,"wangid":[1,0,1,0,1,0,1,0]},{"dflip":false,"hflip":false,"tileid":30,"vflip":false,"wangid":[1,0,3,0,1,0,3,0]},{"dflip":false,"hflip":false,"tileid":31,"vflip":false,"wangid":[3,0,1,0,3,0,1,0]}]}]}

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = {"columns":10,"image":"../images/icons.png","imageheight":96,"imagewidth":160,"margin":0,"name":"icons","spacing":0,"tilecount":60,"tileheight":16,"tileproperties":{"0":{"name":"heart"},"1":{"name":"bolt"},"2":{"name":"wrench"},"3":{"name":"up"},"4":{"name":"down"},"5":{"name":"left"},"6":{"name":"right"},"7":{"name":"player-red"},"8":{"name":"player-dark"},"9":{"name":"question"},"10":{"name":"plant"},"11":{"name":"crop1"},"12":{"name":"crop2"},"13":{"name":"crop3"},"14":{"name":"harvest"},"15":{"name":"food"},"16":{"name":"hunt"},"17":{"name":"fish"},"18":{"name":"back"},"19":{"name":"user"}},"tilepropertytypes":{"0":{"name":"string"},"1":{"name":"string"},"2":{"name":"string"},"3":{"name":"string"},"4":{"name":"string"},"5":{"name":"string"},"6":{"name":"string"},"7":{"name":"string"},"8":{"name":"string"},"9":{"name":"string"},"10":{"name":"string"},"11":{"name":"string"},"12":{"name":"string"},"13":{"name":"string"},"14":{"name":"string"},"15":{"name":"string"},"16":{"name":"string"},"17":{"name":"string"},"18":{"name":"string"},"19":{"name":"string"}},"tilewidth":16,"type":"tileset"}

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = {"columns":5,"image":"../images/icons-xl.png","imageheight":160,"imagewidth":160,"margin":0,"name":"icons-xl","spacing":0,"tilecount":25,"tileheight":32,"tileproperties":{"0":{"name":"party1"},"1":{"name":"party2"},"2":{"name":"party3"},"5":{"name":"zoom-out"},"6":{"name":"zoom-in"},"7":{"name":"glass"},"8":{"name":"pack-big"},"9":{"name":"pack-small"},"10":{"name":"jeep-blue"},"11":{"name":"canoe"},"12":{"name":"motor-boat"},"13":{"name":"no-boat"},"15":{"name":"jeep-red"},"16":{"name":"settings"},"20":{"name":"back"},"21":{"name":"health"},"22":{"name":"luck"},"23":{"name":"apple"},"24":{"name":"cassava"}},"tilepropertytypes":{"0":{"name":"string"},"1":{"name":"string"},"2":{"name":"string"},"5":{"name":"string"},"6":{"name":"string"},"7":{"name":"string"},"8":{"name":"string"},"9":{"name":"string"},"10":{"name":"string"},"11":{"name":"string"},"12":{"name":"string"},"13":{"name":"string"},"15":{"name":"string"},"16":{"name":"string"},"20":{"name":"string"},"21":{"name":"string"},"22":{"name":"string"},"23":{"name":"string"},"24":{"name":"string"}},"tilewidth":32,"type":"tileset"}

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {"columns":4,"image":"../images/water.png","imageheight":128,"imagewidth":256,"margin":0,"name":"water","spacing":0,"tilecount":8,"tileheight":64,"tileproperties":{"0":{"name":"top0"},"1":{"name":"top1"},"2":{"name":"top2"},"3":{"name":"top3"},"4":{"name":"bottom"}},"tilepropertytypes":{"0":{"name":"string"},"1":{"name":"string"},"2":{"name":"string"},"3":{"name":"string"},"4":{"name":"string"}},"tilewidth":64,"type":"tileset"}

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = {"columns":10,"image":"../images/items.png","imageheight":160,"imagewidth":160,"margin":0,"name":"items","spacing":0,"tilecount":100,"tileheight":16,"tileproperties":{"0":{"name":"tomato"},"1":{"name":"tomato seed"},"2":{"name":"potato"},"3":{"name":"yuca"},"4":{"name":"meat"},"5":{"name":"hide"},"6":{"name":"fur"},"7":{"name":"sinew"},"8":{"name":"black bean"},"9":{"name":"lima bean"},"10":{"name":"stick"},"11":{"name":"spear"},"12":{"name":"bow and arrow"},"13":{"name":"net"},"14":{"name":"sling"}},"tilepropertytypes":{"0":{"name":"string"},"1":{"name":"string"},"2":{"name":"string"},"3":{"name":"string"},"4":{"name":"string"},"5":{"name":"string"},"6":{"name":"string"},"7":{"name":"string"},"8":{"name":"string"},"9":{"name":"string"},"10":{"name":"string"},"11":{"name":"string"},"12":{"name":"string"},"13":{"name":"string"},"14":{"name":"string"}},"tilewidth":16,"type":"tileset"}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _Camera = __webpack_require__(71);

var _Camera2 = _interopRequireDefault(_Camera);

var _Overlay = __webpack_require__(74);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _Story = __webpack_require__(82);

var _Story2 = _interopRequireDefault(_Story);

var _PartyWindow = __webpack_require__(83);

var _PartyWindow2 = _interopRequireDefault(_PartyWindow);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GameView = function () {
  function GameView(store, canvas, ctx, loader) {
    _classCallCheck(this, GameView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.setDim = this.setDim.bind(this);
    this.connect = new _Connect2.default(this.store);

    this.camera = new _Camera2.default(this.store, this.canvas, this.ctx, this.loader);
    this.overlay = new _Overlay2.default(this.store, this.canvas, this.ctx, this.loader);
    this.story = new _Story2.default(this.store, this.canvas, this.ctx, this.loader);
    this.partyWindow = new _PartyWindow2.default(this.store, this.canvas, this.ctx, this.loader);
  }

  _createClass(GameView, [{
    key: 'setDim',
    value: function setDim(dim) {
      this.dim = dim;
    }
  }, {
    key: 'update',
    value: function update(keys, x, y) {
      if (!this.dim) {
        if (this.connect.stories.length > 0) {
          this.story.update(keys, x, y);
        } else if (this.connect.mode === _constants.MODE.PARTY) {
          this.partyWindow.update(x, y);
        } else {
          this.connect.currentTile && this.camera.update(x, y);
          this.overlay.update(x, y);
        }
      }
    }
  }, {
    key: 'render',
    value: function render(delta) {
      this.ctx.fillStyle = _colors.FOREST_BLACK;
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      this.connect.currentTile && this.camera.render(delta);
      this.overlay.render(delta);
      this.story.render(delta);
      switch (this.connect.mode) {
        case _constants.MODE.PARTY:
          this.partyWindow.render(delta);
          break;
      }

      if (this.dim) {
        this.ctx.fillStyle = _colors.MEDIUM_OPAQUE;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }]);

  return GameView;
}();

exports.default = GameView;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _Animation = __webpack_require__(10);

var _Animation2 = _interopRequireDefault(_Animation);

var _requests = __webpack_require__(6);

var _events = __webpack_require__(7);

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(4);

var _draw = __webpack_require__(5);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var BOTTOM = _constants.LAYER.BOTTOM,
    MIDDLE = _constants.LAYER.MIDDLE;

var Camera = function () {
  function Camera(store, canvas, ctx, loader) {
    _classCallCheck(this, Camera);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = loader.getImage('atlas');
    this.icons = loader.getImage('icons');
    this.blink = new _Animation2.default(1, 1, 0.5);
    this.fontSize = 16;

    this.connect = new _Connect2.default(this.store);
  }

  _createClass(Camera, [{
    key: 'findTile',
    value: function findTile(tiles, x, y) {
      return tiles.find(function (tile) {
        return x === tile.x && y === tile.y;
      });
    }
  }, {
    key: 'getOffsetOrigin',
    value: function getOffsetOrigin(size, xPos, yPos, xCoords, yCoords) {
      // move camera
      return {
        x: Math.round((xPos + xCoords / 32) * size - Math.floor(this.canvas.width / 2)),
        y: Math.round((yPos + yCoords / 32) * size - Math.floor(this.canvas.height / 2))
      };
      // clamp values
      // this.x = Math.max(0, Math.min(this.x, this.maxX));
      // this.y = Math.max(0, Math.min(this.y, this.maxY));
    }
  }, {
    key: 'updateClick',
    value: function updateClick(x, y) {
      var tile = x && y && (0, _utils.screenToImageButton)(x, y, this.clickTiles);
      if (tile) {
        var _connect$map = this.connect.map,
            pos = _connect$map.pos,
            zoom = _connect$map.zoom;

        var xCoord = Math.floor((x - tile.xPos) / zoom);
        var yCoord = Math.floor((y - tile.yPos) / zoom);
        this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.MOVE, tile.id, { x: xCoord, y: yCoord }));
      }
    }
  }, {
    key: 'update',
    value: function update(x, y) {
      this.updateClick(x, y);
    }
  }, {
    key: 'render',
    value: function render(delta) {
      var _this = this;

      this.blink.tick(delta);
      var _connect$map2 = this.connect.map,
          pos = _connect$map2.pos,
          coords = _connect$map2.coords,
          positionTarget = _connect$map2.positionTarget,
          coordsTarget = _connect$map2.coordsTarget,
          tiles = _connect$map2.tiles,
          sight = _connect$map2.sight,
          zoom = _connect$map2.zoom;

      var tileSize = this.atlas.tileset.tilewidth * zoom;
      var iconSize = this.icons.tileset.tilewidth * zoom;

      var origin = this.getOffsetOrigin(tileSize, pos.x, pos.y, coords.x, coords.y);
      var startCol = Math.floor(origin.x / tileSize);
      var endCol = startCol + Math.ceil(this.canvas.width / tileSize + 1);
      var startRow = Math.floor(origin.y / tileSize);
      var endRow = startRow + Math.ceil(this.canvas.height / tileSize + 1);

      var clickTiles = [];
      var visiblePlayers = [];
      var dim = false;
      for (var col = startCol; col <= endCol; col++) {
        var _loop = function _loop(row) {
          var x = col * tileSize - origin.x;
          var y = row * tileSize - origin.y;
          var tile = _this.findTile(tiles, col, row);
          if (tile && Math.abs(pos.x - col) + Math.abs(pos.y - row) <= 1) {
            clickTiles.push(Object.assign({}, tile, {
              xPos: x, yPos: y, width: tileSize, height: tileSize
            }));
          }
          if (tile && Math.abs(pos.x - col) + Math.abs(pos.y - row) <= sight) {
            dim = false;
          } else {
            dim = true;
          }
          if (tile) {
            [BOTTOM, MIDDLE].forEach(function (layer) {
              if (layer in tile.layers) {
                var id = tile.layers[layer] - 1;
                (0, _draw.drawById)(_this.ctx, _this.atlas, id, zoom, x, y);
              }
            });

            if (positionTarget === tile.id) {
              (0, _draw.drawById)(_this.ctx, _this.icons, 28 + _this.blink.getValue(), zoom, x + coordsTarget.x * zoom - iconSize / 2, y + coordsTarget.y * zoom - iconSize / 2);
            }

            if (!dim && tile.visitors && tile.visitors.length > 0) {
              visiblePlayers = visiblePlayers.concat(tile.visitors.map(function (visitor) {
                (0, _draw.drawById)(_this.ctx, _this.icons, 26 + _this.blink.getValue(), zoom, x + visitor.xCoord * zoom - iconSize / 2, y + visitor.yCoord * zoom - iconSize / 2);
                return {
                  name: visitor.name,
                  xPos: x + visitor.xCoord * zoom - iconSize / 2,
                  yPos: y + visitor.yCoord * zoom - iconSize / 2,
                  width: iconSize,
                  height: iconSize
                };
              }));
            }

            if (dim) {
              _this.ctx.fillStyle = _colors.MEDIUM_OPAQUE;
              _this.ctx.fillRect(x, y, tileSize, tileSize);
            }
          }
        };

        for (var row = startRow; row <= endRow; row++) {
          _loop(row);
        }
      }
      this.clickTiles = clickTiles;

      var mousePos = this.connect.mousePos;
      if (mousePos.x && mousePos.y) {
        var button = (0, _utils.screenToImageButton)(mousePos.x, mousePos.y, visiblePlayers);
        button && (0, _draw.drawHover)(this.ctx, this.fontSize, button);
      }

      (0, _draw.drawById)(this.ctx, this.icons, 24 + this.blink.getValue(), zoom, (this.canvas.width - iconSize) / 2, (this.canvas.height - iconSize) / 2);
    }
  }]);

  return Camera;
}();

exports.default = Camera;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadingDialog = loadingDialog;

var _utils = __webpack_require__(8);

function loadingDialog(dimCallback) {
  var container = document.getElementById('container');
  var dialog = (0, _utils.create)('div', 'dialog', 'loading');
  container.append(dialog);

  var title = (0, _utils.create)('div', 'title');
  title.innerHTML = 'LOADING';

  var content = (0, _utils.create)('div', 'content');
  content.append(title);
  dialog.append(content);

  dimCallback(true);

  var exitDialog = function exitDialog() {
    dimCallback(false);
    container.contains(dialog) && container.removeChild(dialog);
  };
  return exitDialog;
}

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.successDialog = successDialog;

var _utils = __webpack_require__(8);

function successDialog(dimCallback) {
  var container = document.getElementById('container');
  var dialog = (0, _utils.create)('div', 'dialog', 'success');
  container.append(dialog);

  var title = (0, _utils.create)('div', 'title');
  title.innerHTML = 'SUCCESS';
  var submit = (0, _utils.create)('button', 'submit');
  submit.innerHTML = 'OK';
  var buttons = (0, _utils.create)('div', 'buttons');
  buttons.append(submit);

  dimCallback(true);

  submit.onclick = function () {
    dimCallback(false);
    container.contains(dialog) && container.removeChild(dialog);
  };

  var content = (0, _utils.create)('div', 'content');
  content.append(title, buttons);
  dialog.append(content);
}

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Food = __webpack_require__(75);

var _Food2 = _interopRequireDefault(_Food);

var _Party = __webpack_require__(76);

var _Party2 = _interopRequireDefault(_Party);

var _Inventory = __webpack_require__(77);

var _Inventory2 = _interopRequireDefault(_Inventory);

var _ActionBar = __webpack_require__(78);

var _ActionBar2 = _interopRequireDefault(_ActionBar);

var _Habitat = __webpack_require__(79);

var _Habitat2 = _interopRequireDefault(_Habitat);

var _Zoom = __webpack_require__(80);

var _Zoom2 = _interopRequireDefault(_Zoom);

var _Items = __webpack_require__(81);

var _Items2 = _interopRequireDefault(_Items);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Overlay = function () {
  function Overlay(store, canvas, ctx, loader, setDim) {
    _classCallCheck(this, Overlay);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.food = new _Food2.default(this.store, this.canvas, this.ctx, this.loader);
    this.party = new _Party2.default(this.store, this.canvas, this.ctx, this.loader);
    this.inventory = new _Inventory2.default(this.store, this.canvas, this.ctx, this.loader);
    this.actionBar = new _ActionBar2.default(this.store, this.canvas, this.ctx, this.loader);
    this.habitat = new _Habitat2.default(this.store, this.canvas, this.ctx, this.loader);
    this.zoom = new _Zoom2.default(this.store, this.canvas, this.ctx, this.loader);
    this.items = new _Items2.default(this.store, this.canvas, this.ctx, this.loader);
  }

  _createClass(Overlay, [{
    key: 'update',
    value: function update(x, y) {
      this.food.update(x, y);
      this.party.update(x, y);
      this.inventory.update(x, y);
      this.actionBar.update(x, y);
      this.habitat.update(x, y);
      this.zoom.update(x, y);
      this.items.update(x, y);
    }
  }, {
    key: 'render',
    value: function render(delta) {
      var slots = [].concat(this.food.render(delta), this.party.render(delta), this.inventory.render(delta));
      this.store.dispatch((0, _actions.refreshSlots)(slots));
      this.actionBar.render(delta);
      this.habitat.render(delta);
      this.zoom.render(delta);
      this.items.render(delta);
    }
  }]);

  return Overlay;
}();

exports.default = Overlay;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _requests = __webpack_require__(6);

var _events = __webpack_require__(7);

var _utils = __webpack_require__(4);

var _draw = __webpack_require__(5);

var _constants = __webpack_require__(0);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Food = function () {
  function Food(store, canvas, ctx, loader) {
    var _this = this;

    _classCallCheck(this, Food);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.connect = new _Connect2.default(this.store);

    this.scale = 4;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.size / this.scale;

    this.unitWidth = 4;
    this.unitHeight = 1;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.size + this.gutter) + this.gutter;

    this.fontSize = 16;
    this.ctx.font = this.fontSize + 'px MECC';

    this.stepperOffset = 9 * this.scale;

    this.buttons = [{
      id: 0,
      name: 'up',
      pos: -this.stepperOffset,
      onClick: function onClick(rations) {
        return _this.increaseRations(rations);
      }
    }, {
      id: 1,
      name: 'down',
      pos: this.stepperOffset,
      onClick: function onClick(rations) {
        return _this.decreaseRations(rations);
      }
    }];
  }

  _createClass(Food, [{
    key: 'increaseRations',
    value: function increaseRations(rations) {
      rations < 2 && this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.RATIONS, rations + 1));
    }
  }, {
    key: 'decreaseRations',
    value: function decreaseRations(rations) {
      rations > 0 && this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.RATIONS, rations - 1));
    }
  }, {
    key: 'update',
    value: function update(x, y) {
      var button = x && y && (0, _utils.screenToImageButton)(x, y, this.buttons);
      button && button.onClick(this.connect.rations);
    }
  }, {
    key: 'renderWindow',
    value: function renderWindow() {
      this.xStart = this.canvas.width - this.width - this.gutter;
      this.yStart = this.gutter;

      this.ctx.fillStyle = _colors.MEDIUM_RED;
      this.ctx.fillRect(this.xStart, this.yStart, this.width, this.height);
    }
  }, {
    key: 'renderStepper',
    value: function renderStepper() {
      var _this2 = this;

      var rations = this.connect.rations;
      var x = this.xStart + this.gutter;
      var y = this.yStart + this.gutter;
      (0, _draw.drawByName)(this.ctx, this.icons, 'food', this.scale, x, y);
      var text = void 0,
          color = void 0;
      if (rations === 0) {
        text = '0%';
        color = (0, _colors.alphaDarkRed)(0.9);
      } else if (rations === 1) {
        text = '50%';
        color = (0, _colors.alphaYellow)(0.9);
      } else if (rations === 2) {
        text = '100%';
        color = (0, _colors.alphaGreen)(0.9);
      }
      this.ctx.font = this.fontSize + 'px MECC';
      this.ctx.fillStyle = color;
      var textWidth = this.ctx.measureText(text).width;
      this.ctx.fillText(text, x + (this.size - textWidth) / 2, y + (this.size + this.fontSize) / 2);
      this.buttons = this.buttons.map(function (button) {
        var yPos = y + button.pos;
        (0, _draw.drawByName)(_this2.ctx, _this2.icons, button.name, _this2.scale, x, yPos);
        return Object.assign({}, button, {
          xPos: x,
          yPos: yPos,
          width: _this2.size,
          height: _this2.size
        });
      });
    }
  }, {
    key: 'renderSlots',
    value: function renderSlots() {
      var x = this.xStart + this.size + this.gutter;
      var y = this.yStart;
      var slots = [];
      var counter = 0;
      this.ctx.fillStyle = _colors.DARK_RED;
      for (var yPos = y + this.gutter; yPos < y + this.height; yPos = yPos + this.size + this.gutter) {
        for (var xPos = x + this.gutter; xPos < x + this.width - (this.size + this.gutter); xPos = xPos + this.size + this.gutter) {
          this.ctx.fillRect(xPos, yPos, this.size, this.size);
          slots.push({
            type: _constants.SLOTS.EATING,
            position: counter++,
            xPos: xPos,
            yPos: yPos,
            width: this.size,
            height: this.size
          });
        }
      }
      return slots;
    }
  }, {
    key: 'render',
    value: function render(delta) {
      this.renderWindow();
      this.renderStepper();
      return this.renderSlots();
    }
  }]);

  return Food;
}();

exports.default = Food;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(1);

var _draw = __webpack_require__(5);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Party = function () {
  function Party(store, canvas, ctx, loader) {
    _classCallCheck(this, Party);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.items = loader.getImage('items');
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new _Connect2.default(this.store);

    this.scale = 4;
    this.iconSize = this.icons.tileset.tilewidth * 2;
    this.size = this.items.tileset.tilewidth * this.scale;
    this.gutter = this.size / this.scale;

    this.fontSize = 32;

    this.unitWidth = 5;
    this.unitHeight = 1;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * this.size + this.gutter * 2;;

    this.buttons = this.connect.party.slice();
  }

  _createClass(Party, [{
    key: 'update',
    value: function update(x, y) {
      var button = x && y && (0, _utils.screenToImageButton)(x, y, this.buttons);
      if (button) {
        this.store.dispatch((0, _actions.setPartyTab)(button.id));
        this.store.dispatch((0, _actions.changeMode)(_constants.MODE.PARTY));
      }
    }
  }, {
    key: 'renderSlot',
    value: function renderSlot(id, xPos, yPos) {
      var type = _constants.SLOTS.PARTY;
      var position = id;

      var _Array$fill = Array(2).fill(this.size),
          _Array$fill2 = _slicedToArray(_Array$fill, 2),
          width = _Array$fill2[0],
          height = _Array$fill2[1];

      this.ctx.fillStyle = _colors.DARK_RED;
      this.ctx.fillRect(xPos, yPos, this.size, this.size);
      this.slots.push({ type: type, position: position, xPos: xPos, yPos: yPos, width: width, height: height });
    }
  }, {
    key: 'renderPartyMember',
    value: function renderPartyMember(member, index) {
      var _this = this;

      var x = this.xStart + this.gutter;
      var y = this.yStart + this.gutter + index * this.height;
      var currentTime = Date.now();
      var memberChanges = this.connect.partyChanges.filter(function (item) {
        var elapsed = currentTime - item.timestamp;
        return item.id === member.id && elapsed > 0 && elapsed < _constants.UPDATE_TEXT_DURATION;
      });
      if (memberChanges.length > 0) {
        var xPos = x + this.width;
        memberChanges.forEach(function (item) {
          var elapsed = currentTime - item.timestamp;
          if (item.name === member.name && item.change === 1) {
            x = 0.2 * (elapsed - _constants.UPDATE_TEXT_DURATION);
          } else if (item.name === member.name && member.timestamp) {
            x = -0.2 * elapsed;
          }
          var text = '' + (item.change > 0 ? '+' : '') + item.change + ' ' + item.name;
          var yPos = y + (_this.fontSize + _this.size) / 2;
          (0, _draw.fadeText)(_this.ctx, elapsed, _constants.UPDATE_TEXT_DURATION, _this.fontSize, text, xPos, yPos);
        });
      } else if (member.health === 0) {
        x = -1000;
        this.store.dispatch((0, _actions.removePartyMember)(member.id));
      }

      this.ctx.fillStyle = _colors.MEDIUM_RED;
      this.ctx.fillRect(x - this.gutter, y - this.gutter, this.width, this.height);

      (0, _draw.drawById)(this.ctx, this.iconsXl, member.icon, this.scale, x - this.gutter * 2, y - this.gutter * 2);

      this.renderSlot(member.id, x + this.height, y);

      [].concat(_toConsumableArray(Array(member.health))).map(function (_, i) {
        (0, _draw.drawByName)(_this.ctx, _this.icons, 'heart', 2, x + _this.size * 2 + _this.gutter * 3 + i * (_this.iconSize + 3), y - _this.iconSize / 8);
      });
      [].concat(_toConsumableArray(Array(member.jeito))).map(function (_, i) {
        (0, _draw.drawByName)(_this.ctx, _this.icons, 'bolt', 2, x + _this.size * 2 + _this.gutter * 3 + i * (_this.iconSize + 3), y + _this.size - _this.iconSize * 7 / 8);
      });

      return Object.assign({}, member, {
        xPos: x - this.gutter,
        yPos: y - this.gutter,
        width: this.height,
        height: this.height
      });
    }
  }, {
    key: 'render',
    value: function render(delta) {
      var _this2 = this;

      this.xStart = this.yStart = this.gutter;
      this.height = this.size + this.gutter * 2;
      this.slots = [];
      this.buttons = this.connect.party.map(function (member, index) {
        return _this2.renderPartyMember(member, index);
      });
      return this.slots;
    }
  }]);

  return Party;
}();

exports.default = Party;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _draw = __webpack_require__(5);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(1);

var _constants = __webpack_require__(0);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = function () {
  function Inventory(store, canvas, ctx, loader) {
    _classCallCheck(this, Inventory);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new _Connect2.default(this.store);

    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;

    this.scale = 4;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.size / this.scale;

    this.unitWidth = 4;
    this.unitHeight = 5;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.size + this.gutter) + this.gutter;
  }

  _createClass(Inventory, [{
    key: 'update',
    value: function update(x, y) {}
  }, {
    key: 'renderWindow',
    value: function renderWindow() {
      this.xStart = this.canvas.width - this.width - this.gutter;
      this.yStart = this.size * 2;
      this.ctx.fillStyle = _colors.MEDIUM_RED;
      this.ctx.fillRect(this.xStart, this.yStart, this.width, this.height);
    }
  }, {
    key: 'renderSlots',
    value: function renderSlots() {
      // const [xMax, yMax] = [this.xStart + this.width, this.yStart + this.height]
      var x = this.xStart;
      var y = this.yStart;
      var slots = [];
      var counter = 0;
      this.ctx.fillStyle = _colors.DARK_RED;
      for (var yPos = y + this.gutter; yPos < y + this.height; yPos += this.size + this.gutter) {
        for (var xPos = x + this.gutter; xPos < x + this.width; xPos += this.size + this.gutter) {
          this.ctx.fillRect(xPos, yPos, this.size, this.size);
          slots.push({
            type: _constants.SLOTS.BACKPACK,
            position: counter++,
            xPos: xPos,
            yPos: yPos,
            width: this.size,
            height: this.size
          });
        }
      }
      return slots;
    }
  }, {
    key: 'render',
    value: function render(delta) {
      this.renderWindow();
      return this.renderSlots();
    }
  }]);

  return Inventory;
}();

exports.default = Inventory;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _draw = __webpack_require__(5);

var _utils = __webpack_require__(4);

var _requests = __webpack_require__(6);

var _actions = __webpack_require__(1);

var _events = __webpack_require__(7);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ActionBar = function () {
  function ActionBar(store, canvas, ctx, loader) {
    _classCallCheck(this, ActionBar);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');
    this.connect = new _Connect2.default(this.store);

    this.current = 'main';
    this.buttons = this.connect.actions[this.current];

    this.scale = 4;
    this.buttonSize = this.icons.tileset.tilewidth * this.scale;
    this.barSize = this.buttonSize * 1.5;
    this.gutter = (this.barSize - this.buttonSize) / 2;

    this.fontSize = 16;
    this.ctx.font = this.fontSize + 'px MECC';
  }

  _createClass(ActionBar, [{
    key: 'update',
    value: function update(x, y) {
      var button = x && y && (0, _utils.screenToImageButton)(x, y, this.buttons);
      if (button) {
        if (button.target && Object.keys(this.connect.actions).includes(button.target)) {
          this.current = button.target;
        } else if (button.tag) {
          switch (button.tag) {
            case 'seed':
              this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.PLANT, button.id));
              this.current = 'main';
              break;
            case 'harvest':
              var currentTile = this.connect.currentTile;
              var currentCrop = currentTile && currentTile.crops.find(function (crop) {
                return crop.name === button.name;
              });
              if (currentCrop && currentCrop.stage <= 0) {
                // TODO <= to ===
                this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.HARVEST, button.id));
              }
              this.current = 'main';
              break;
            case 'hunting':
              this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.HUNT, button.id));
              this.current = 'main';
              break;
            case 'fishing':
              this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.FISH, button.id));
              this.current = 'main';
              break;
            case 'add_food':
              this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.ADD_FOOD, button.id));
              this.current = 'main'; // COMBAK 'eating' instead?
              break;
            case 'remove_food':
              this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.REMOVE_FOOD, button.id));
              this.current = 'main'; // COMBAK 'eating' instead?
              break;
            default:
              this.store.dispatch((0, _requests.sendEvent)(button.tag, button.id)); // DEBUG
              break;
          }
        }
      }
    }
  }, {
    key: 'renderBar',
    value: function renderBar() {
      this.ctx.textAlign = 'alphabetical';
      this.ctx.font = this.fontSize + 'px MECC';
      var titleWidth = this.ctx.measureText(this.current).width;

      this.ctx.fillStyle = _colors.MEDIUM_RED;
      this.ctx.fillRect((this.canvas.width - this.barWidth) / 2, this.canvas.height - this.barSize, this.barWidth, this.barSize);

      this.ctx.fillStyle = _colors.MEDIUM_RED;
      this.ctx.fillRect((this.canvas.width - titleWidth) / 2 - 8, this.canvas.height - (this.barSize + this.fontSize + 4), titleWidth + 16, this.fontSize + 4);

      this.ctx.fillStyle = _colors.SOLID_WHITE;
      this.ctx.fillText(this.current, (this.canvas.width - titleWidth) / 2, this.canvas.height - this.barSize);
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var _this = this;

      var buttonX = (this.canvas.width - this.barWidth) / 2 + this.gutter;
      var buttonY = this.canvas.height - this.barSize + this.gutter;
      this.buttons = this.buttons.map(function (button, index) {
        var x = buttonX + _this.barSize * index;
        if (button.tileset === 'icons') {
          (0, _draw.drawById)(_this.ctx, _this.icons, button.id, _this.scale, x, buttonY);
        } else if (button.tileset === 'items') {
          (0, _draw.drawById)(_this.ctx, _this.items, button.id, _this.scale, x, buttonY);
        }
        return Object.assign({}, button, {
          xPos: x,
          yPos: buttonY,
          width: _this.buttonSize,
          height: _this.buttonSize
        });
      });
    }
  }, {
    key: 'renderHover',
    value: function renderHover() {
      var mousePos = this.connect.mousePos;
      if (mousePos.x && mousePos.y) {
        var button = (0, _utils.screenToImageButton)(mousePos.x, mousePos.y, this.buttons);
        button && (0, _draw.drawHover)(this.ctx, this.fontSize, button);
      }
    }
  }, {
    key: 'render',
    value: function render(delta) {
      if (!this.connect.actions[this.current]) {
        this.current = 'main';
      }
      this.buttons = this.connect.actions[this.current];
      this.barWidth = this.barSize * this.buttons.length;
      this.buttons.length > 0 && this.renderBar();
      this.renderButtons();
      this.renderHover();
    }
  }]);

  return ActionBar;
}();

exports.default = ActionBar;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Habitat = function () {
  function Habitat(store, canvas, ctx, loader) {
    _classCallCheck(this, Habitat);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new _Connect2.default(this.store);
    this.fontSize = 24;
    this.ctx.font = this.fontSize + 'px MECC';
  }

  _createClass(Habitat, [{
    key: 'update',
    value: function update(x, y) {}
  }, {
    key: 'render',
    value: function render(delta) {
      var _this = this;

      var currentTile = this.connect.currentTile;
      var text = [];
      currentTile && currentTile.hunting && text.push(currentTile.hunting);
      currentTile && currentTile.fishing && text.push(currentTile.fishing);
      text.forEach(function (line, index) {
        _this.ctx.fillStyle = _colors.SOLID_WHITE;
        _this.ctx.font = _this.fontSize + 'px MECC';
        var lineWidth = _this.ctx.measureText(line).width;
        var x = _this.canvas.width - lineWidth - _this.fontSize;
        var y = _this.canvas.height - 1.25 * _this.fontSize * (text.length - index);
        _this.ctx.fillText(line, x, y);
      });
    }
  }]);

  return Habitat;
}();

exports.default = Habitat;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _actions = __webpack_require__(1);

var _requests = __webpack_require__(6);

var _events = __webpack_require__(7);

var _utils = __webpack_require__(4);

var _draw = __webpack_require__(5);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zoom = function () {
  function Zoom(store, canvas, ctx, loader) {
    _classCallCheck(this, Zoom);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new _Connect2.default(this.store);

    this.scale = 2;
    this.size = this.iconsXl.tileset.tilewidth * this.scale;

    this.fontSize = 32;
    this.ctx.font = this.fontSize + 'px MECC';

    this.buttons = [{ name: 'PACE', onClick: function onClick() {
        return (0, _requests.sendEvent)(_events.EVENTS.PACE, 0);
      }, id: 0 }, { name: 'PACE', onClick: function onClick() {
        return (0, _requests.sendEvent)(_events.EVENTS.PACE, 1);
      }, id: 1 }, { name: 'PACE', onClick: function onClick() {
        return (0, _requests.sendEvent)(_events.EVENTS.PACE, 2);
      }, id: 2 }, { name: 'settings', onClick: _requests.logout }, { name: 'zoom-out', onClick: _actions.zoomOut }, { name: 'zoom-in', onClick: _actions.zoomIn }];
  }

  _createClass(Zoom, [{
    key: 'update',
    value: function update(x, y) {
      var button = x && y && (0, _utils.screenToImageButton)(x, y, this.buttons);
      button && this.store.dispatch(button.onClick());
    }
  }, {
    key: 'render',
    value: function render(delta) {
      var _this = this;

      var pace = this.connect.pace;
      var rations = this.connect.rations;
      this.ctx.fillStyle = _colors.SOLID_WHITE;
      this.ctx.font = this.fontSize + 'px MECC';
      var textWidth = this.ctx.measureText('PACE').width;
      this.ctx.fillText('PACE', (this.size * 3 - textWidth) / 2, this.canvas.height - this.size * 2);
      this.buttons = this.buttons.map(function (button, index) {
        var xPos = _this.size * (index % 3);
        var yPos = _this.canvas.height - _this.size * 2 + Math.floor(index / 3) * _this.size;

        var _Array$fill = Array(2).fill(_this.size),
            _Array$fill2 = _slicedToArray(_Array$fill, 2),
            width = _Array$fill2[0],
            height = _Array$fill2[1];

        if (typeof button.id === 'number') {
          if (button.id === pace) {
            _this.ctx.fillStyle = _colors.BRIGHT_YELLOW;
          } else {
            _this.ctx.fillStyle = _colors.SOLID_WHITE;
          }
          var _textWidth = _this.ctx.measureText(button.id.toString()).width;
          _this.ctx.fillText(button.id, xPos + (_this.size - _textWidth) / 2, yPos + (_this.size + _this.fontSize) / 2);
        } else {
          (0, _draw.drawByName)(_this.ctx, _this.iconsXl, button.name, _this.scale, xPos, yPos);
        }

        return Object.assign({}, button, { xPos: xPos, yPos: yPos, width: width, height: height });
      });
    }
  }]);

  return Zoom;
}();

exports.default = Zoom;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _draw = __webpack_require__(5);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(1);

var _requests = __webpack_require__(6);

var _events = __webpack_require__(7);

var _constants = __webpack_require__(0);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Items = function () {
  function Items(store, canvas, ctx, loader) {
    _classCallCheck(this, Items);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new _Connect2.default(this.store);

    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;

    this.scale = 4;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.size / this.scale;

    this.unitWidth = 4;
    this.unitHeight = 5;
    this.width = this.unitWidth * (this.size + this.gutter) + this.gutter;
    this.height = this.unitHeight * (this.size + this.gutter) + this.gutter;
  }

  _createClass(Items, [{
    key: 'update',
    value: function update(xLeft, yLeft) {
      var clickRight = this.connect.clickRight;
      clickRight.x && clickRight.y && this.store.dispatch((0, _actions.clickedRight)());
      if (xLeft && yLeft) {
        this.connect.draggedItem ? this.endItemDrag(xLeft, yLeft) : this.startItemDrag(xLeft, yLeft);
      } else if (clickRight.x && clickRight.y) {
        console.log('right click!!');
      }
    }
  }, {
    key: 'renderItem',
    value: function renderItem(button, x, y) {
      (0, _draw.drawById)(this.ctx, this.items, button.id, this.scale, x, y);
      if (button.durability) {
        (0, _draw.drawDurability)(this.ctx, this.size, this.scale, button.durability, x, y);
      } else {
        if (button.portion) {
          var portion = parseInt(button.portion);
          var portionWidth = this.ctx.measureText(portion).width;
          this.ctx.fillStyle = _colors.BRIGHT_RED;
          this.ctx.fillText(portion, x + this.size - portionWidth, y + this.size);
        }
        this.ctx.fillStyle = _colors.SOLID_WHITE;
        this.ctx.fillText(button.quantity, x, y + this.fontSize);
      }
    }
  }, {
    key: 'renderItems',
    value: function renderItems() {
      var _this = this;

      this.ctx.textAlign = 'alphabetical';
      this.ctx.font = this.fontSize + 'px MECC';
      this.ctx.fillStyle = _colors.SOLID_WHITE;
      var draggedItem = this.connect.draggedItem;
      var draggedOrigin = this.connect.draggedOrigin;
      this.buttons = this.connect.inventory.map(function (button, index) {

        // XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX
        // DEBUG Hopefully this does not interfere with server data
        // if (!button.hasOwnProperty('position') && !button.hasOwnProperty('type')) {
        //   button = Object.assign({}, button, {
        //     position: index,
        //     type: SLOTS.BACKPACK
        //   })
        // }
        // XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX XXX

        var dragged = draggedItem && draggedItem.position === button.position && draggedItem.type === button.type;
        var origin = draggedOrigin && draggedOrigin.position === button.position && draggedOrigin.type === button.type;
        var match = _this.connect.slots.find(function (slot) {
          return slot.position === button.position && slot.type === button.type;
        });
        if (match && !dragged && !origin) {
          // TODO: Display partial origin
          _this.renderItem(button, match.xPos, match.yPos);
          return Object.assign({}, button, {
            type: button.type,
            position: button.position,
            xPos: match.xPos,
            yPos: match.yPos,
            width: _this.size,
            height: _this.size
          });
        } else {
          return button;
        }
      });
    }
  }, {
    key: 'renderHover',
    value: function renderHover() {
      var mousePos = this.connect.mousePos;
      if (mousePos.x && mousePos.y) {
        var button = (0, _utils.screenToImageButton)(mousePos.x, mousePos.y, this.buttons);
        button && (0, _draw.drawHover)(this.ctx, this.fontSize, button);
      }
    }
  }, {
    key: 'renderDrag',
    value: function renderDrag() {
      var mousePos = this.connect.mousePos;
      var mouseOffset = this.connect.mouseOffset;
      var mouseDrop = this.connect.mouseDrop;
      var draggedItem = this.connect.draggedItem;
      var draggedOrigin = this.connect.draggedOrigin;
      if (!draggedItem && mouseOffset.x && mouseOffset.y) {
        this.startItemDrag(mousePos.x, mousePos.y); // TODO: Add quantity argument
      } else if (draggedItem && mouseDrop.x && mouseDrop.y) {
        this.endItemDrag(mouseDrop.x, mouseDrop.y); // TODO: Add quantity argument
      } else if (draggedItem) {
        this.renderItem(draggedItem, mousePos.x + draggedOrigin.x, mousePos.y + draggedOrigin.y);
      }
    }
  }, {
    key: 'startItemDrag',
    value: function startItemDrag(x, y) {
      // TODO: Add quantity argument
      var item = (0, _utils.screenToImageButton)(x, y, this.buttons);
      item && this.store.dispatch((0, _actions.dragItem)(item, item.quantity, x, y));
    }

    // TODO enable these for dropping use cases
    // dropAllItems(x, y) {
    //   this.endItemDrag(x, y, this.connect.draggedItem.quantity);
    // }
    //
    // dropOneItem(x, y) {
    //   this.endItemDrag(x, y, 1);
    // }

  }, {
    key: 'endItemDrag',
    value: function endItemDrag(x, y) {
      // TODO: Add quantity argument
      var draggedItem = this.connect.draggedItem;
      var draggedOrigin = this.connect.draggedOrigin;
      var slot = (0, _utils.screenToImageButton)(x, y, this.connect.slots);
      if (slot) {
        var equipping = slot.type === _constants.SLOTS.PARTY && draggedItem.tags.some(function (tag) {
          return ["farming", "hunting", "fishing"].includes(tag);
        });
        var eating = slot.type === _constants.SLOTS.EATING && draggedItem.tags.includes("food");
        var neither = slot.type === _constants.SLOTS.BACKPACK;
        if (equipping || eating || neither) {
          this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.MOVE_ITEM, draggedItem.id, {
            quantity: draggedItem.quantity,
            srcType: draggedOrigin.type,
            srcPosition: draggedOrigin.position,
            destType: slot.type,
            destPosition: slot.position
          }));
        } else {
          this.store.dispatch((0, _actions.error)(801, "Cannot move item to this slot"));
        }
      }
      // TODO: If there is jumpy behavior with server data, look here first
      this.store.dispatch((0, _actions.endDrag)());
    }
  }, {
    key: 'render',
    value: function render(delta) {
      this.renderItems();
      this.renderHover();
      this.renderDrag();
    }
  }]);

  return Items;
}();

exports.default = Items;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _requests = __webpack_require__(6);

var _events = __webpack_require__(7);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _utils = __webpack_require__(4);

var _draw = __webpack_require__(5);

var _Animation = __webpack_require__(10);

var _Animation2 = _interopRequireDefault(_Animation);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Story = function () {
  function Story(store, canvas, ctx, loader) {
    _classCallCheck(this, Story);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.blink = new _Animation2.default(1, 1, 1);
    this.connect = new _Connect2.default(this.store);
    this.icons = loader.getImage('icons');

    this.fontSize = 16;
    this.lineHeight = this.fontSize * 11 / 8;
    this.ctx.font = this.fontSize + 'px MECC';
    this.selected = null;

    this.scale = 2;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.iconOffset = this.fontSize * 4 / 5;

    this.width = this.canvas.width / 3;
    this.height = this.canvas.height / 2;

    this.stories = [];

    this.mainText = _draw.mainText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.itemChangeText = _draw.itemChangeText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.partyChangeText = _draw.partyChangeText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
    this.buttonText = _draw.buttonText.bind(null, this.canvas, this.ctx, this.fontSize, this.lineHeight);
  }

  _createClass(Story, [{
    key: 'select',
    value: function select(button, story) {
      this.store.dispatch((0, _actions.closeStory)());
      if (story.canDispatch) {
        this.store.dispatch((0, _requests.sendEvent)(_events.EVENTS.DECISION, button.id));
      }
      this.selected = null;
    }
  }, {
    key: 'updateKeys',
    value: function updateKeys(keys, story) {
      var _this = this;

      keys.map(function (key) {
        if (key >= "1" && key <= story.buttons.length.toString()) _this.selected = story.buttons[parseInt(key) - 1];
        if (["Escape", "Backspace", "Delete"].includes(key)) _this.selected = null;
        if (key === "Enter" && _this.selected !== null) {
          _this.select(_this.selected, story);
        }
      });
    }
  }, {
    key: 'updateClick',
    value: function updateClick(x, y, story) {
      if (x && y) {
        var button = (0, _utils.screenToTextButton)(x, y, story.buttons);
        if (button) {
          if (this.selected && this.selected.id === button.id) {
            this.select(this.selected, story);
          } else if (story.buttons.length === 1) {
            this.select(button, story);
          } else {
            this.selected = button;
          }
        } else {
          this.selected = null;
        }
      }
    }
  }, {
    key: 'update',
    value: function update(keys, x, y) {
      this.width = this.canvas.width / 3;
      this.height = this.canvas.height / 2;
      if (this.stories.length > 0) {
        var story = this.stories[this.stories.length - 1];
        this.updateKeys(keys, story);
        this.updateClick(x, y, story);
      }
    }
  }, {
    key: 'renderStoryText',
    value: function renderStoryText(story) {
      var _this2 = this;

      this.ctx.font = this.fontSize + 'px MECC';
      this.ctx.fillStyle = _colors.PALE_GREEN;

      var maxMainWidth = this.width - this.fontSize * 2;
      var maxButtonWidth = this.width - this.fontSize * 4;
      var text = (0, _draw.splitIntoLines)(this.ctx, story.text, maxMainWidth);
      var inventoryChanges = story.inventoryChanges;
      var partyChanges = story.partyChanges;
      var buttons = story && story.buttons.map(function (button, idx) {
        return Object.assign({}, button, {
          text: (0, _draw.splitIntoLines)(_this2.ctx, button.text, maxButtonWidth),
          oneIndex: idx + 1
        });
      });
      var promptText = 'What is your choice? ' + (this.selected && this.selected.oneIndex || '');
      var cursor = this.blink.getValue() ? '' : '_';
      var prompt = (0, _draw.splitIntoLines)(this.ctx, promptText + cursor, maxMainWidth);

      var xPos = this.width + this.fontSize;
      var yPos = this.height / 2 + this.fontSize * 2;
      var coords = this.mainText(text, xPos, yPos);

      if (inventoryChanges.length > 0) {
        yPos = coords.yPos + this.lineHeight * 2;
        coords = this.itemChangeText(inventoryChanges, xPos, yPos);
      }

      if (partyChanges.length > 0) {
        yPos = coords.yPos + this.lineHeight * 2;
        coords = this.partyChangeText(partyChanges, xPos, yPos);
      }

      yPos = coords.yPos + this.lineHeight * 2;
      buttons = this.buttonText(buttons, xPos, yPos, this.selected, this.icons, this.scale);
      yPos = buttons[buttons.length - 1].yPos;
      if (buttons[buttons.length - 1].hoverText) {
        yPos += this.lineHeight;
      }

      if (buttons.length > 1) {
        this.ctx.fillStyle = _colors.PALE_GREEN;
        yPos += this.lineHeight * 2;
        this.mainText(prompt, xPos, yPos);
      }

      return buttons;
    }
  }, {
    key: 'renderHover',
    value: function renderHover(buttons) {
      var mousePos = this.connect.mousePos;
      if (mousePos.x && mousePos.y) {
        var filteredButtons = buttons.filter(function (button) {
          return button.hoverText;
        });
        var item = (0, _utils.screenToImageButton)(mousePos.x, mousePos.y, filteredButtons);
        if (item && item.hoverText) {
          (0, _draw.drawHover)(this.ctx, this.fontSize, item);
        }
      }
    }
  }, {
    key: 'render',
    value: function render(delta) {
      var _this3 = this;

      this.blink.tick(delta);
      this.stories = this.connect.stories;
      if (this.stories.length > 0) {
        this.stories = this.stories.map(function (story) {
          _this3.ctx.fillStyle = _colors.MEDIUM_RED;
          _this3.ctx.fillRect(_this3.width, _this3.height / 2, _this3.width, _this3.height);
          var buttons = _this3.renderStoryText(story);
          _this3.renderHover(buttons);
          return Object.assign({}, story, { buttons: buttons });
        });
      } else {
        this.stories = [];
      }
    }
  }]);

  return Story;
}();

exports.default = Story;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _draw = __webpack_require__(5);

var _utils = __webpack_require__(4);

var _actions = __webpack_require__(1);

var _constants = __webpack_require__(0);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NAME = 'NAME';
var HEALTH = 'HEALTH';
var JEITO = 'JEITO';
var SKILLS = 'SKILLS';
var MODIFIERS = 'MODIFIERS';

var PartyWindow = function () {
  function PartyWindow(store, canvas, ctx, loader) {
    _classCallCheck(this, PartyWindow);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.connect = new _Connect2.default(this.store);

    this.iconsXl = loader.getImage('icons-xl');
    this.icons = loader.getImage('icons');
    this.items = loader.getImage('items');

    this.fontSize = 16;
    this.lineHeight = this.fontSize * 2.5;
    this.iconOffset = this.fontSize * 1.5;

    this.scale = 2;
    this.sizeXl = this.iconsXl.tileset.tilewidth * this.scale;
    this.size = this.icons.tileset.tilewidth * this.scale;
    this.gutter = this.sizeXl / 4;

    this.unitWidth = 5;
    this.unitHeight = 7;
    this.width = this.unitWidth * (this.sizeXl + this.gutter) + this.gutter;
    this.height = this.unitHeight * this.lineHeight + this.gutter;
  }

  _createClass(PartyWindow, [{
    key: 'update',
    value: function update(x, y) {
      if (x && y) {
        var xMin = (this.canvas.width - this.width) / 2;
        var xMax = xMin + this.width;
        var yMin = (this.canvas.height - this.height) / 2;
        var yMax = yMin + this.height;
        var button = (0, _utils.screenToImageButton)(x, y, this.party);
        if (x > xMin && x < xMax && y > yMin && y < yMax) {
          console.log('Click inside party window');
        } else if (button) {
          this.store.dispatch((0, _actions.setPartyTab)(button.id));
        } else {
          this.store.dispatch((0, _actions.changeMode)(_constants.MODE.GAME));
        }
      }
    }
  }, {
    key: 'renderTab',
    value: function renderTab(button, color, x, y, xPos, yPos) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, y);
      this.ctx.lineTo(x + this.gutter, y - this.sizeXl);
      this.ctx.lineTo(x + this.sizeXl + this.gutter, y - this.sizeXl);
      this.ctx.lineTo(x + this.sizeXl + this.gutter * 2, y);
      this.ctx.fillStyle = color;
      this.ctx.fill();
      (0, _draw.drawById)(this.ctx, this.iconsXl, button.icon, this.scale, xPos, yPos);
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs() {
      var _this = this;

      var x = (this.canvas.width - this.width) / 2;
      var y = (this.canvas.height - this.height) / 2;
      var renderLast = void 0;
      var activeTab = this.connect.partyTab;
      this.party = this.connect.party.map(function (button) {
        var xPos = x + _this.gutter;
        var yPos = y - _this.sizeXl;
        if (button.id === activeTab) {
          renderLast = _this.renderTab.bind(_this, button, _colors.MEDIUM_RED, x, y, xPos, yPos);
        } else {
          _this.renderTab(button, _colors.DARK_RED, x, y, xPos, yPos);
        }
        x = x + _this.sizeXl + _this.gutter;
        return Object.assign({}, button, {
          xPos: xPos,
          yPos: yPos,
          width: _this.sizeXl,
          height: _this.sizeXl
        });
      });
      renderLast();
    }
  }, {
    key: 'renderWindow',
    value: function renderWindow() {
      var x = (this.canvas.width - this.width) / 2;
      var y = (this.canvas.height - this.height) / 2;

      this.ctx.fillStyle = _colors.MEDIUM_RED;
      this.ctx.fillRect(x, y, this.width, this.height);
    }
  }, {
    key: 'renderInfo',
    value: function renderInfo() {
      var _this2 = this;

      var member = (0, _utils.getItemById)(this.connect.party, this.connect.partyTab);
      this.ctx.font = this.fontSize + 'px MECC';
      this.ctx.fillStyle = _colors.PALE_GREEN;
      var xPos = (this.canvas.width - this.width) / 2 + this.fontSize;
      var yPos = (this.canvas.height - this.height) / 2 + this.fontSize * 2;
      var lineWidth = this.ctx.measureText(HEALTH).width;

      this.ctx.fillText(NAME, xPos, yPos);
      this.ctx.fillText(member.name, xPos + lineWidth + 8, yPos);

      yPos += this.lineHeight;
      this.ctx.fillText(HEALTH, xPos, yPos);
      [].concat(_toConsumableArray(Array(member.health))).map(function (_, index) {
        (0, _draw.drawByName)(_this2.ctx, _this2.icons, 'heart', _this2.scale, xPos + lineWidth + 8 + index * (_this2.size + 8), yPos - _this2.iconOffset);
      });

      yPos += this.lineHeight;
      this.ctx.fillText(JEITO, xPos, yPos);
      [].concat(_toConsumableArray(Array(member.jeito))).map(function (_, index) {
        (0, _draw.drawByName)(_this2.ctx, _this2.icons, 'bolt', _this2.scale, xPos + lineWidth + 8 + index * (_this2.size + 8), yPos - _this2.iconOffset);
      });

      yPos += this.lineHeight;
      this.ctx.fillText(SKILLS, xPos, yPos);

      yPos += this.lineHeight;
      if (Array.isArray(member.skills)) {
        this.skills = member.skills.map(function (skill, index) {
          (0, _draw.drawByName)(_this2.ctx, _this2.icons, 'question', _this2.scale, xPos + index * (_this2.size + 8), yPos - _this2.iconOffset);
          return Object.assign({}, skill, {
            xPos: xPos + index * (_this2.size + 8),
            yPos: yPos - _this2.iconOffset,
            width: _this2.size,
            height: _this2.size
          });
        });
      } else {
        this.skills = [];
      }

      yPos += this.lineHeight;
      this.ctx.fillText(MODIFIERS, xPos, yPos);

      yPos += this.lineHeight;
      if (Array.isArray(member.modifiers)) {
        this.modifiers = member.modifiers.map(function (modifier, index) {
          (0, _draw.drawByName)(_this2.ctx, _this2.icons, 'question', _this2.scale, xPos + index * (_this2.size + 8), yPos - _this2.iconOffset);
          return Object.assign({}, modifier, {
            xPos: xPos + index * (_this2.size + 8),
            yPos: yPos - _this2.iconOffset,
            width: _this2.size,
            height: _this2.size
          });
        });
      } else {
        this.modifiers = [];
      }
    }
  }, {
    key: 'renderHover',
    value: function renderHover() {
      var mousePos = this.connect.mousePos;
      if (mousePos.x && mousePos.y) {
        var hoverTab = (0, _utils.screenToImageButton)(mousePos.x, mousePos.y, this.party);
        if (hoverTab && hoverTab.id !== this.connect.partyTab) {
          (0, _draw.drawHover)(this.ctx, this.fontSize, hoverTab);
        }
        var iconList = this.skills.concat(this.modifiers);
        var hoverIcon = (0, _utils.screenToImageButton)(mousePos.x, mousePos.y, iconList);
        if (hoverIcon) {
          (0, _draw.drawHover)(this.ctx, this.fontSize, hoverIcon);
        }
      }
    }
  }, {
    key: 'render',
    value: function render(delta) {
      this.renderWindow();
      this.renderTabs();
      this.renderInfo();
      this.renderHover();
    }
  }]);

  return PartyWindow;
}();

exports.default = PartyWindow;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draw = __webpack_require__(5);

var _register = __webpack_require__(85);

var _login = __webpack_require__(86);

var _utils = __webpack_require__(4);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _Animation = __webpack_require__(10);

var _Animation2 = _interopRequireDefault(_Animation);

var _colors = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TitleView = function () {
  function TitleView(store, canvas, ctx, loader) {
    _classCallCheck(this, TitleView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.water = loader.getImage('water');

    this.zoom = 4;
    this.gutter = 4;
    this.size = this.water.tileset.tilewidth * this.zoom;
    this.animateBottom = new _Animation2.default(this.size, this.zoom * 2, 0.5);
    this.animateTop = new _Animation2.default(3, 1, 0.5);

    this.connect = new _Connect2.default(this.store);
    this.setDim(false);

    this.title = [{ text: 'RAINFOREST' }, { text: 'TRAIL' }];

    this.buttons = [{ text: 'LOGIN', onClick: _login.loginDialog }, { text: 'REGISTER', onClick: _register.registerDialog }];

    this.setDim = this.setDim.bind(this);
    this.centerText = _draw.centerText.bind(null, this.canvas, this.ctx, this.zoom, this.gutter);
  }

  _createClass(TitleView, [{
    key: 'setDim',
    value: function setDim(dim) {
      this.dim = dim;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(x, y) {
      if (x && y) {
        var button = !this.dim && (0, _utils.screenToTextButton)(x, y, this.buttons);
        button && button.onClick(this.store, this.setDim);
      }
    }
  }, {
    key: 'update',
    value: function update(keys, x, y) {
      this.handleClick(x, y);
    }
  }, {
    key: 'renderBackground',
    value: function renderBackground() {
      var endCol = Math.floor(this.canvas.width / this.size);
      var endRow = Math.floor(this.canvas.height / this.size);
      var offsetBottom = this.animateBottom.getValue();
      var offsetTop = this.animateTop.getValue();

      for (var col = -1; col <= endCol; col++) {
        for (var row = 0; row <= endRow; row++) {
          var x = col * this.size;
          var y = row * this.size;
          (0, _draw.drawByName)(this.ctx, this.water, 'bottom', this.zoom, x + offsetBottom, y);
        }
      }
      for (var _col = 0; _col <= endCol; _col++) {
        for (var _row = 0; _row <= endRow; _row++) {
          var _x = _col * this.size;
          var _y = _row * this.size;
          (0, _draw.drawById)(this.ctx, this.water, offsetTop.toString(), this.zoom, _x, _y);
        }
      }
    }
  }, {
    key: 'renderText',
    value: function renderText() {
      this.ctx.fillStyle = _colors.SOLID_WHITE;
      this.title = this.centerText(this.title, 64, 1 / 4);

      this.ctx.fillStyle = this.connect.connected ? _colors.CONNECT_GREEN : _colors.DISCONNECT_RED;
      this.centerText([{ text: this.connect.connected ? 'CONNECTED' : 'DISCONNECTED' }], 32, 9 / 10);

      this.ctx.fillStyle = _colors.SOLID_WHITE;
      this.buttons = this.centerText(this.buttons, 32, 3 / 4);
    }
  }, {
    key: 'render',
    value: function render(delta) {
      this.animateBottom.tick(delta);
      this.animateTop.tick(delta);
      this.renderBackground();
      this.renderText();
      if (this.dim) {
        this.ctx.fillStyle = _colors.DARK_OPAQUE;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }]);

  return TitleView;
}();

exports.default = TitleView;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDialog = registerDialog;

var _utils = __webpack_require__(8);

var _requests = __webpack_require__(6);

var _actions = __webpack_require__(1);

var _failure = __webpack_require__(21);

function registerDialog(store, setDim) {
  var container = document.getElementById('container');
  var dialog = (0, _utils.create)('div', 'dialog', 'register');
  container.append(dialog);

  var title = (0, _utils.create)('div', 'title');
  title.innerHTML = 'REGISTER';
  var username = (0, _utils.makeInputLine)('username');
  var email = (0, _utils.makeInputLine)('email');
  var password1 = (0, _utils.makeInputLine)('password1');
  var password2 = (0, _utils.makeInputLine)('password2');

  var _makeButtons = (0, _utils.makeButtons)(),
      buttons = _makeButtons.buttons,
      submit = _makeButtons.submit,
      cancel = _makeButtons.cancel;

  setDim(true);

  var dimCallback = function dimCallback(dim) {
    setDim(dim);
    dialog.style.filter = dim && 'brightness(0.2)' || 'brightness(1)';
  };

  var exitDialog = function exitDialog() {
    container.children.length === 2 && setDim(false);
    container.contains(dialog) && container.removeChild(dialog);
  };

  submit.onclick = function () {
    var usernameText = username.input.value.slice(0);
    var emailText = email.input.value.slice(0);
    var passwordText1 = password1.input.value.slice(0);
    var passwordText2 = password2.input.value.slice(0);
    if (passwordText1 === passwordText2) {
      store.dispatch((0, _requests.register)(usernameText, emailText, passwordText1, dimCallback, exitDialog));
    } else {
      store.dispatch((0, _actions.error)(110, 'Passwords do not match'));
      (0, _failure.failureDialog)(store.getState().errorMessage, dimCallback);
    }
  };

  cancel.onclick = exitDialog;

  var content = (0, _utils.create)('div', 'content');
  content.append(title, username.line, email.line, password1.line, password2.line, buttons);
  dialog.append(content);
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loginDialog = loginDialog;

var _utils = __webpack_require__(8);

var _requests = __webpack_require__(6);

function loginDialog(store, setDim) {
  var container = document.getElementById('container');
  var dialog = (0, _utils.create)('div', 'dialog', 'login');
  container.append(dialog);

  var title = (0, _utils.create)('div', 'title');
  title.innerHTML = 'LOGIN';
  var username = (0, _utils.makeInputLine)('username');
  var password = (0, _utils.makeInputLine)('password');

  var _makeButtons = (0, _utils.makeButtons)(),
      buttons = _makeButtons.buttons,
      submit = _makeButtons.submit,
      cancel = _makeButtons.cancel;

  setDim(true);

  var dimCallback = function dimCallback(dim) {
    setDim(dim);
    dialog.style.filter = dim && 'brightness(0.2)' || 'brightness(1)';
  };

  var exitDialog = function exitDialog() {
    container.children.length === 2 && setDim(false);
    container.contains(dialog) && container.removeChild(dialog);
  };

  submit.onclick = function () {
    var usernameText = username.input.value.slice(0);
    var passwordText = password.input.value.slice(0);
    store.dispatch((0, _requests.login)(usernameText, passwordText, dimCallback, exitDialog));
  };

  cancel.onclick = exitDialog;

  var content = (0, _utils.create)('div', 'content');
  content.append(title, username.line, password.line, buttons);
  dialog.append(content);
}

/***/ })
/******/ ]);