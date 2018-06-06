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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Connect = function () {
  function Connect(store) {
    _classCallCheck(this, Connect);

    this.store = store;
  }

  _createClass(Connect, [{
    key: "getMenuById",
    value: function getMenuById(id) {
      var state = this.store.getState();
      var menu = state.menus.byId[id || state.activeMenu];
      var buttons = menu.buttons.map(function (button, idx) {
        return Object.assign({}, state.buttons.byId[button], { id: idx + 1 });
      });
      return Object.assign({}, menu, { buttons: buttons });
    }
  }, {
    key: "mode",
    get: function get() {
      return this.store.getState().mode;
    }
  }, {
    key: "story",
    get: function get() {
      var _store$getState = this.store.getState(),
          story = _store$getState.story;

      var buttons = story.buttons.map(function (button, idx) {
        return Object.assign({}, button, { id: idx + 1 });
      });
      return Object.assign({}, story, { buttons: buttons });
    }
  }, {
    key: "map",
    get: function get() {
      var _store$getState2 = this.store.getState(),
          srcTileSize = _store$getState2.srcTileSize,
          srcTiles = _store$getState2.srcTiles,
          mapTileSize = _store$getState2.mapTileSize,
          mapTiles = _store$getState2.mapTiles;

      return { srcTileSize: srcTileSize, srcTiles: srcTiles, mapTileSize: mapTileSize, mapTiles: mapTiles };
    }
  }, {
    key: "click",
    get: function get() {
      var _store$getState3 = this.store.getState(),
          xClick = _store$getState3.xClick,
          yClick = _store$getState3.yClick;

      return { xClick: xClick, yClick: yClick };
    }
  }, {
    key: "keys",
    get: function get() {
      var allKeys = this.store.getState().keys;
      var trueKeys = Object.keys(allKeys).filter(function (x) {
        return allKeys[x] === true;
      });
      return trueKeys;
    }
  }, {
    key: "offset",
    get: function get() {
      var _store$getState4 = this.store.getState(),
          offsetX = _store$getState4.offsetX,
          offsetY = _store$getState4.offsetY;

      return { offsetX: offsetX, offsetY: offsetY };
    }
  }, {
    key: "position",
    get: function get() {
      var _store$getState$posit = this.store.getState().position,
          x = _store$getState$posit.x,
          y = _store$getState$posit.y;

      return { x: x, y: y };
    }
  }, {
    key: "party",
    get: function get() {
      var _store$getState5 = this.store.getState(),
          party = _store$getState5.party;

      return { party: party };
    }
  }, {
    key: "vehicle",
    get: function get() {
      var _store$getState6 = this.store.getState(),
          vehicle = _store$getState6.vehicle;

      return { vehicle: vehicle };
    }
  }, {
    key: "sight",
    get: function get() {
      var _store$getState7 = this.store.getState(),
          sight = _store$getState7.sight;

      return { sight: sight };
    }
  }]);

  return Connect;
}();

exports.default = Connect;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LOAD_TILES_FAILURE = exports.LOAD_TILES_SUCCESS = exports.LOAD_TILES_REQUEST = exports.LOAD_POSITION_FAILURE = exports.LOAD_POSITION_SUCCESS = exports.LOAD_POSITION_REQUEST = exports.SEND_MOVE_FAILURE = exports.SEND_MOVE_SUCCESS = exports.SEND_MOVE_REQUEST = exports.FOCUS_TILE = exports.changeMode = exports.CHANGE_MODE = exports.clicked = exports.CLICKED = exports.mouseUp = exports.MOUSEUP = exports.drag = exports.DRAG = exports.mouseDown = exports.MOUSEDOWN = exports.keyUp = exports.KEYUP = exports.keyDown = exports.KEYDOWN = undefined;
exports.register = register;
exports.getPosition = getPosition;
exports.postMoveAndGetPosition = postMoveAndGetPosition;
exports.getTiles = getTiles;
exports.postMoveAndGetTiles = postMoveAndGetTiles;

var _reduxWebsocketBridge = __webpack_require__(5);

var _crossFetch = __webpack_require__(45);

var _crossFetch2 = _interopRequireDefault(_crossFetch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var URL = 'https://www.jsonstore.io/9d84dcf7d61861f8e2993f268a4e2f34a53b63f3cec297b778dfd2432f9dcba2';

function register() {
  return {
    type: '@@websocket/' + _reduxWebsocketBridge.SEND,
    payload: JSON.stringify({
      message_type: 'register',
      name: 'Alice',
      player_class: 'TRIBE'
    })
  };
}

var KEYDOWN = exports.KEYDOWN = 'KEYDOWN';
var keyDown = exports.keyDown = function keyDown(key) {
  return {
    type: KEYDOWN,
    payload: { key: key }
  };
};

var KEYUP = exports.KEYUP = 'KEYUP';
var keyUp = exports.keyUp = function keyUp(key) {
  return {
    type: KEYUP,
    payload: { key: key }
  };
};

var MOUSEDOWN = exports.MOUSEDOWN = 'MOUSEDOWN';
var mouseDown = exports.mouseDown = function mouseDown(x, y) {
  return {
    type: MOUSEDOWN,
    payload: { x: x, y: y }
  };
};

var DRAG = exports.DRAG = 'DRAG';
var drag = exports.drag = function drag(x, y) {
  return {
    type: DRAG,
    payload: { x: x, y: y }
  };
};

var MOUSEUP = exports.MOUSEUP = 'MOUSEUP';
var mouseUp = exports.mouseUp = function mouseUp(x, y) {
  return {
    type: MOUSEUP,
    payload: { x: x, y: y }
  };
};

var CLICKED = exports.CLICKED = 'CLICKED';
var clicked = exports.clicked = function clicked() {
  return {
    type: CLICKED
  };
};

// TODO: Unused
var CHANGE_MODE = exports.CHANGE_MODE = 'CHANGE_MODE';
var changeMode = exports.changeMode = function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    payload: { mode: mode }
  };
};

var FOCUS_TILE = exports.FOCUS_TILE = 'FOCUS_TILE';

var SEND_MOVE_REQUEST = exports.SEND_MOVE_REQUEST = 'SEND_MOVE_REQUEST';
var sendMoveRequest = function sendMoveRequest() {
  return {
    type: SEND_MOVE_REQUEST
  };
};

var SEND_MOVE_SUCCESS = exports.SEND_MOVE_SUCCESS = 'SEND_MOVE_SUCCESS';
var sendMoveSuccess = function sendMoveSuccess() {
  return {
    type: SEND_MOVE_SUCCESS
  };
};

var SEND_MOVE_FAILURE = exports.SEND_MOVE_FAILURE = 'SEND_MOVE_FAILURE';
var sendMoveFailure = function sendMoveFailure(error) {
  return {
    type: SEND_MOVE_FAILURE,
    payload: { error: error }
  };
};

var LOAD_POSITION_REQUEST = exports.LOAD_POSITION_REQUEST = 'LOAD_POSITION_REQUEST';
var loadPositionRequest = function loadPositionRequest() {
  return {
    type: LOAD_POSITION_REQUEST
  };
};

var LOAD_POSITION_SUCCESS = exports.LOAD_POSITION_SUCCESS = 'LOAD_POSITION_SUCCESS';
var loadPositionSuccess = function loadPositionSuccess(position) {
  return {
    type: LOAD_POSITION_SUCCESS,
    payload: { position: position }
  };
};

var LOAD_POSITION_FAILURE = exports.LOAD_POSITION_FAILURE = 'LOAD_POSITION_FAILURE';
var loadPositionFailure = function loadPositionFailure(error) {
  return {
    type: LOAD_POSITION_FAILURE,
    payload: { error: error }
  };
};

var LOAD_TILES_REQUEST = exports.LOAD_TILES_REQUEST = 'LOAD_TILES_REQUEST';
var loadTilesRequest = function loadTilesRequest() {
  return {
    type: LOAD_TILES_REQUEST
  };
};

var LOAD_TILES_SUCCESS = exports.LOAD_TILES_SUCCESS = 'LOAD_TILES_SUCCESS';
var loadTilesSuccess = function loadTilesSuccess(tiles) {
  return {
    type: LOAD_TILES_SUCCESS,
    payload: { tiles: tiles }
  };
};

var LOAD_TILES_FAILURE = exports.LOAD_TILES_FAILURE = 'LOAD_TILES_FAILURE';
var loadTilesFailure = function loadTilesFailure(error) {
  return {
    type: LOAD_TILES_FAILURE,
    payload: { error: error }
  };
};

function postMove(move) {
  return function (dispatch, getState) {
    dispatch(sendMoveRequest());
    return (0, _crossFetch2.default)(URL + '/position/', {
      headers: { 'Content-type': 'application/json' },
      method: 'POST',
      body: JSON.stringify(move)
    }).then(function (response) {
      return dispatch(sendMoveSuccess());
    }, function (error) {
      return dispatch(sendMoveFailure(error));
    });
  };
}

function getPosition() {
  return function (dispatch) {
    dispatch(loadPositionRequest());
    return (0, _crossFetch2.default)(URL + '/position/').then(function (response) {
      return response.json();
    }, function (error) {
      return dispatch(loadPositionFailure(error));
    }).then(function (json) {
      return dispatch(loadPositionSuccess(json));
    });
  };
}

function postMoveAndGetPosition(move) {
  return function (dispatch, getState) {
    return dispatch(postMove(move)).then(function () {
      return dispatch(getPosition());
    });
  };
}

// TODO: implement tiles
function getTiles() {
  return function (dispatch) {
    dispatch(loadTilesRequest());
    return (0, _crossFetch2.default)(URL + '/tiles/').then(function (response) {
      return response.json();
    }, function (error) {
      return dispatch(loadTilesFailure(error));
    }).then(function (json) {
      return dispatch(loadTilesSuccess(json));
    });
  };
}

// TODO: implement tiles
function postMoveAndGetTiles(move) {
  return function (dispatch, getState) {
    return dispatch(postMove(move)).then(function () {
      return dispatch(getTiles());
    });
  };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CAMERA_SPEED = exports.CAMERA_SPEED = 500; // pixels per second
var LAYER = exports.LAYER = {
  BASE: "base",
  MIDDLE: "middle",
  TOP: "top"
};
var MODE = exports.MODE = {
  MAP: "map",
  MENU: "menu",
  STORY: "story"
};
var VEHICLE = exports.VEHICLE = {
  JEEP: "jeep",
  CANOE: "canoe"
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var addButtonCoords = function addButtonCoords(option, buttonCoords) {
  var props = ['xPos', 'yPos', 'width', 'height'];
  if (!props.every(function (prop) {
    return Object.keys(option).includes(prop);
  })) {
    Object.assign(option, buttonCoords);
  }
};

var screenToTextId = function screenToTextId(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y <= button.yPos && y >= button.yPos - button.height;
  });
  return selectedButton && selectedButton.id || null;
};

var screenToButtonId = function screenToButtonId(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y >= button.yPos && y <= button.yPos + button.height;
  });
  return selectedButton && selectedButton.id || null;
};

var getItemById = function getItemById(array, id) {
  return array.find(function (x) {
    return x.id === id;
  });
};

exports.addButtonCoords = addButtonCoords;
exports.screenToTextId = screenToTextId;
exports.screenToButtonId = screenToButtonId;
exports.getItemById = getItemById;

/***/ }),
/* 4 */
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
/* 5 */
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

var _blobToArrayBuffer = __webpack_require__(43);

var _blobToArrayBuffer2 = _interopRequireDefault(_blobToArrayBuffer);

var _isFSA = __webpack_require__(44);

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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function updateObject(oldObject, newValues) {
  return Object.assign({}, oldObject, newValues);
};

function updateItemInArray(array, itemId, updateItemCallback) {
  return array.map(function (item) {
    if (item.id !== itemId) return item;
    return updateItemCallback(item);
  });
};

exports.updateObject = updateObject;
exports.updateItemInArray = updateItemInArray;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_symbol_observable__);



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
    }, _ref[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = function () {
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
  }, _ref2[__WEBPACK_IMPORTED_MODULE_1_symbol_observable___default.a] = observable, _ref2;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(34);




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
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(28);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 10 */
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
/* 11 */
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
/* 12 */
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
    value: function setImage(key, src) {
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
      return d;
    }
  }, {
    key: 'getImage',
    value: function getImage(key) {
      return key in this.images ? this.images[key] : null;
    }
  }]);

  return Loader;
}();

exports.default = Loader;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAHgCAYAAAAi4Gb1AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gYFDDQeZ/kiSwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHgBALN/TIABAN4A/wDXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAANwAAAAAAAAAAAAAAAAAAACkAAAAAAAAA1wAAAAAAAAAAAAAASwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Iso//n7/gAHBQIAAAAAAPn7/gAHBQIAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA1wAAAAAAAAAAAAAAKQAAAMkAAAAAAAAAAAAAACkAAAApAAAAoAAAAAAAAAA3AAAA1wAAAAAAAAAAAAAAKQAAAMkAAAAAAAAAAAAAACkAAAApAAAAoAAAAAAAAAAAAAAAAAAAACkAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAKQAAACkAAACgAAAAAAAAALkAAAAAAAAA1wAAAJAAAADwAAAAAAAAAAAAAAAAAAAAKQAAACkAAACgAAAAAAAAALkAAAC5AAAAkAAAAJAAAADwAAAANwAAAAAAAAAAAAAAkAAAAJAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdY2gD5+/4AAAAAAAcFAgD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAB8uJwAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEALkAAAC5AAAAAAAAAAAAAAAQAAAA8AAAAKkAAACAAAAAKQAAAAAAAADXAAAAAAAAAAAAAADXAAAAuQAAAAAAAAAQAAAA8AAAAAAAAAAAAAAAEAAAAEcAAAAAAAAAAAAAAKkAAAAAAAAAEAAAAKAAAAAAAAAAyQAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAAAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA8AAAAPAAAAAAAAAAAAAAAPAAAAAQAAAAgAAAAAAAAADXAAAA1wAAAAAAAAAAAAAAKQAAAMkAAAAQAAAAAAAAAPAAAAAQAAAAAAAAAIAAAABHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAuQAAALkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAD+8/MAAAAAAAAAAAACDQ0AAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAPAAAAAAAAAAEAAAAEcAAADXAAAAAAAAAAAAAAAAAAAAKQAAAAAAAACgAAAAAAAAAAAAAABwAAAAAAAAAKAAAABHAAAA1wAAAAAAAAAAAAAAKQAAAKAAAAAgAAAAAAAAADcAAAAAAAAAAAAAAAAAAAApAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAAAAAAMFPYAAB1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDRTcA2tzjAOPf5gACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFcAAAAAAAAAAAAAAAAAAAAAAAAAKQAAANcAAAAAAAAAKQAAANcAAADXAAAAKQAAAGAAAACgAAAAAAAAANcAAAAAAAAAYAAAANcAAAAAAAAAKQAAAAAAAACgAAAAAAAAAAAAAAA3AAAAKQAAANcAAAAAAAAAAAAAANcAAABXAAAAogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAPn7/gAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALuuvAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAyQAAAAAAAACgAAAAAAAAAAAAAADXAAAA1wAAAGAAAADwAAAAAAAAAAAAAADXAAAAuQAAALkAAACQAAAAkAAAAPAAAAAAAAAAAAAAACkAAACgAAAAyQAAAMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3WNoAAAAAAPn7/gAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAfLicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP8AfgD/AH4A/wAAAAAAAAAAAH4A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAApAAAAoAAAAAAAAADwAAAAyQAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAAHAAAADXAAAAAAAAAAAAAABHAAAAqQAAAFcAAAAAAAAAAAAAAAAAAAApAAAAoAAAAAAAAADwAAAAAAAAALkAAADwAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAHBQIAAAAAADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADwAAAAAAAAABAAAAAAAAAAYAAAANcAAAAAAAAAKQAAAAAAAACQAAAARwAAAAAAAAAAAAAAAAAAACkAAAAAAAAAoAAAADcAAAAAAAAAAAAAACkAAADXAAAAcAAAANcAAAAAAAAAAAAAAAAAAADJAAAAAAAAALkAAAAAAAAARwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB0hGgAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAABXAAAAAAAAAAAAAACgAAAANwAAAAAAAADXAAAAAAAAAHAAAAAAAAAA1wAAAAAAAAAAAAAAkAAAAAAAAAAQAAAAyQAAADcAAAAAAAAA1wAAAAAAAADXAAAAAAAAAAAAAAApAAAA1wAAADcAAAAAAAAAAAAAACkAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAABwUCAPn7/gDQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVwAAAAAAAAApAAAAoAAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAAMkAAAAAAAAAAAAAAPAAAAAAAAAA8AAAABAAAAAAAAAAuQAAAAAAAABHAAAAAAAAAAAAAAApAAAAAAAAANcAAAApAAAA1wAAAAAAAAAAAAAAkAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACy/2ggAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgApAAAAKQAAAKAAAAAAAAAAAAAAAAAAAADJAAAAKQAAAAAAAAAAAAAAYAAAAGAAAADwAAAAAAAAAPAAAAAAAAAAAAAAAPAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAANcAAACQAAAAKQAAAKAAAADJAAAAyQAAALkAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAADXAAAANwAAAAAAAAAAAAAAuQAAAEcAAACgAAAANwAAAAAAAADXAAAAAAAAAHAAAACAAAAAAAAAAFcAAAApAAAAoAAAADcAAADXAAAAAAAAAAAAAAApAAAAoAAAABAAAACgAAAAYAAAANcAAAAAAAAAKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAwU9gAAHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA3gD/ANcAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAANwAAAAAAAAApAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAKAAAAAAAAAAAAAAADcAAADJAAAANwAAAAAAAAAAAAAAAAAAACkAAAAiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/yagmAAcFAgD5+/4ABwUCAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAB8uJwDj3+YAAAAAAP7z8wAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABACgAAAANwAAAAAAAAAAAAAAKQAAANcAAAAAAAAAAAAAAAAAAADJAAAANwAAANcAAAAAAAAAAAAAACkAAACgAAAAAAAAAAAAAADwAAAAAAAAALkAAABHAAAANwAAAAAAAAAAAAAAKQAAAMkAAADJAAAANwAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4dLZAAINDQAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAADJAAAANwAAAAAAAADXAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAACkAAAAAAAAAoAAAADcAAAAAAAAAAAAAAAAAAAApAAAA1wAAACkAAADXAAAAAAAAAAAAAACQAAAAAAAAABAAAADJAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBFl5N/wAAAAAAAAAA/vPzAB8uJwDh0tkA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAC5AAAAAAAAAEcAAAAAAAAANwAAAMkAAABHAAAAAAAAAAAAAAAAAAAAAAAAAJAAAABHAAAAKQAAANcAAAAAAAAAAAAAAJAAAAAAAAAAyQAAADcAAADJAAAANwAAAEcAAAAAAAAAAAAAACkAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igA+fv+AAcFAgD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZp+Tf82DdsAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAyvMlAAAAAAA2DdsAyvMlAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAADK8yUAAAAAAAAAAAA2DdsAAAAAAAAAAADK8yUAZoKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAANg3bAAAAAADK8yUAAAAAADYN2wAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAA2DdsAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjYN2wAAAAAAyvMlADYN2wDK8yUAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAANg3bAAAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0Iso/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPStYkAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyvMlAAAAAAA2DdsANg3bADYN2wDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/AH4A/wB+AP8AAAAAAAAAAAB+AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAADK8yUANg3bADYN2wAAAAAAAAAAAMrzJQA2DdsAyvMlAAAAAAA2DdsAAAAAAMrzJQA2DdsAAAAAADYN2wAAAAAAyvMlADYN2wAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAADK8yUANg3bAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/ANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAANwAAACkAAACgAAAAAAAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAKAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAdIRoARVJEAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAADj3+YAvbvJAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAA2DdsANg3bAAAAAADK8yUAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAANg3bADYN2wA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAOPf5gC9u8kAAg0NAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHy4nAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNg3bAAAAAAA2DdsAyvMlAAAAAADK8yUAyvMlAMrzJQAAAAAAAAAAADYN2wDK8yUAAAAAAMrzJQAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh0tkA/vPzAAAAAAAAAAAAHSEaAENFNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALK8yUAAAAAAAAAAAA2DdsAyvMlAAAAAAA2DdsANg3bAMrzJQAAAAAAAAAAADYN2wDK8yUAAAAAADYN2wAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAADK8yUAAAAAADYN2wDK8yUAyvMlADYN2wAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAcFAgAAAAAABwUCANCtKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAABwUCAAAAAAAHBQIA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAQ0U3AB0hGgACDQ0AAAAAAB8uJwACDQ0AFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAu668AAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7rrwA49/mAAAAAAAAAAAA4dLZAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAA/vPzAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNg3bAAAAAADK8yUAAAAAAMrzJQA2DdsAAAAAADYN2wAAAAAAyvMlAMrzJQAAAAAAyvMlADYN2wAAAAAAyvMlAAAAAAA2DdsANg3bADYN2wDK8yUAAAAAAMrzJQAAAAAAAAAAADYN2wAAAAAAAAAAAMrzJQDK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8uJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAA/vPzAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALK8yUAyvMlADYN2wDK8yUAAAAAAMrzJQAAAAAAyvMlADYN2wAAAAAANg3bAMrzJQA2DdsAyvMlAAAAAAAAAAAAAAAAAAAAAADK8yUAyvMlADYN2wAAAAAAAAAAAMrzJQAAAAAAyvMlAAAAAAA2DdsANg3bADYN2wAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wD+8/MA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8hxUSAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGaCswEAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAAAANgAAAAAAAAA2AAAAAAAAADYAAAAAAAAANgAAAAAAAAA2AAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAINDQAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAAAAAD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwACDQ0AAAAAAAAAAAACDQ0AAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAHy4nAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0FEl+QAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8BAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMmGJv8AAAAABwUCAAAAAAD5+/4ABwUCADB12AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQiyj/+fv+AAcFAgAAAAAA+fv+AAcFAgAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgD5+/4A+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHy4nAAAAAAACDQ0AHy4nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wDh0tkAAAAAAAAAAADj3+YAAg0NAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAABwUCAPn7/gAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAB0hGgBDRTcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAcFAgD5+/4AAAAAAAcFAgAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAHy4nAAINDQAAAAAA4dLZAL27yQACDQ0AAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAcFAgAAAAAAAAAAADBT2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh0tkA/vPzAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzf0yABAAAAAAAAAAAAAAAAAB+AP8AggABAH4A/wAAAAAAAAAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAdIRoARVJEAAAAAAAAAAAAHy4nAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAAAAAAAAAAAAydEmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAPn7/gDQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPf5gC9u8kAAAAAAAAAAADh0tkA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAHSEaAAAAAAD+8/MA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIA+fv+AAcFAgAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAAg0NAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIAAAAAAAcFAgD5+/4AMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAHBQIAAAAAAAcFAgDQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gA+fv+APn7/gAAAAAAAAAAANCtKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAA/vPzAAAAAAAAAAAAAg0NAAAAAAD+8/MAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAD5+/4AAAAAAAAAAADQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0U3AB0hGgAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAC7rrwA49/mAP7z8wAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAAAAAAAAAAAAAcFAgAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAP7z8wAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQNODdQAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gD5+/4AAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMB0Iso//n7/gAHBQIAAAAAAPn7/gAHBQIAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAAAAAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3WNoAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAABwUCAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIA+fv+AAcFAgAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQD/AAAAAAAAAAAAdwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAydEmAAAFAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAUAAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+ANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAPn7/gDQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALN/TIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAD5+/4AAAAAAFOMpVEAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAADQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAAAAAAAAAAAAAAAAAA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAABwUCAPn7/gAAAAAA+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAcFAgD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9Y1WSAAAIABJREFUAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//8AAP//AAD//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//8AAP//AAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//8AAP//AAD//wAA//8AAP//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP+mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD/AAAAAAAAAAD/AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAGmAAD/AAAAAAEAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAf8AAP8AAAAAAQAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAD/AAAAAAAAAAD/AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADCJqcAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FRAKYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAAAP9RUQAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD/pgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP+mAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//8AAP//AAD//wAA/6YAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAA//8AAP//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP+mAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA/6YAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH/pgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQlsWgAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAD//wAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAAAAAAAAAAAAAAAAAEABAP9RUQAAAAAAAa+vAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8AAD//AAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAa+vAAAAAAD/UVEAAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/1FRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/wABr68AAAAAAP9RUQAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAEsAAP///wD///8A////AP///wD///8AAEsAAABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQD///8A////AP///wD///8A////AP///wD///8AAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68A////AP///wD///8A////AP///wD///8A////AP///wABr68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAAAAAAEEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wABr68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAGvrwAAAAAA/1FRAABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAAAAAAABAQEAAQEBAAEBAQAAAAAAAQEBAAEBAQABAQEAAQEBAAEBAQD///8AAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8AAAAAAAAAAAAAAAAA////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAGvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs39MgAQAAAAAAAAAAAAAAAAAAAABAQAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQABS68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALBW6IwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQD///8AAAAAAAAAAAAAAAAAAQEBAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEA////AAAAAAABAQEAAAAAAAAAAAABAQEA////AAAAAAABAQEAAAAAAABAAQAAwP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAP///wAAAAAAAAAAAAAAAAABAQEA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAABAQAA//8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///AAAAAAAAAEEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAP///wABAQEAAAAAAP///wAAAAAAAAAAAP///wABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAA//8AAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAEAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAD///8A////AP///wAAAAAA////AP///wD///8A////AP///wABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEA/1FRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P///////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAQEBAAAAAAAAtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAEBAQAAAAAAAAAAAP9RUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAAT09PAAAAAAAAAAAAAAAAAAAAAAAAAAAAsbGxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAEBAQAAAAAAALUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAEBAQAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAACzs7P/TU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68AT09PAAAAAAAAAAAAsbGxAAAAAAAAAAAAAAAAAE9PTwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAABAQEAAAAAAADA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAE9PTwAAAAAAsbGxAAAAAAAAAAAAAAAAAAAAAAAAAAAAsbGxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwBPT08AAAAAALGxsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxsbEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwBPT08AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7OzALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAtLS0AAEBAQEBAQEBAQEBAQEBAQFNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/N7qAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxsbEAAAAAAAAAAAAAAAAAAAAAALOzswAAAAAAAAAAALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7MAAAAAAAAAAAAAAAAAAAAAALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/////////////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/////////////////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////7Ozs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD//5xRAAFkrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/nFEAAWSvAAAAAAAAyQAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A//9zUQABja8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/3NRAAGNrwAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz//////////////////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz//////9MTEwAAAAAAAAAAAAAAAAAAAAAAExMTAD/////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALx0xk8AACAASURBVAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP//nFEAAWSvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+cUQABZK8AAAAAAADJAAAAAAAAAAAAAACCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA//+cUQABZK8AAAAAAAAAAAAAAAAA/5xRAAFkrwAAAAAAAMkAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMALOzs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv/AAAAAAAAC/8AAAv/AAAL/wAAC/8AAAv/AAAL/wAAC/8AAAAAAAAL/wAAC/8AAAexAAAHsQAAB7EAAIWx/wCFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP//nFEAAY2vAAApAAAAKQAAACkAAP+cUQABja8AACkAAADJAAAAAAAAAAAAAAB+AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////kVIAAW+uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+RUgABb64AAAAAAADFsgAAAAAAAAAAAAAAAAAAzbwAADNEAACFsf8Ae08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAAAAAAAAtLS0AAEBAQFNTU0BTU1NAU1NTQFNTU0BAQEBAbS0tAAAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzbwAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgABAWSvAP9zUQAA1wAAANcAAADXAAABZK8A/3NRAADXAAAANwAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAbS0tAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK6TAQAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/8AAAAAAAAL/wAAC/8AAAv/AAAL/wAAAAAAAAv/AAAL/wAAB7EAAAexAACFsf8AhbH/AIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAACzs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///+RUgABb64AAAAAAAAAAAAAAAAA/5FSAAFvrgAAAAAAAMWyAAAAAAAAAAAAAAAAAADNvAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNvAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArpMBAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQEBhbH//5FSAAE0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE0YAD/kVIAATRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7TgAAzKAAADtOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMoAAAO04AAAAAAADFsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAYWx//+RUgABNGAAAAAAAAAAAAABNGAA/5FSAAE0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFvrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW+uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO04AAAAAAAA7TgAAO04AADtOAAA7TgAAAAAAADtOAAA7TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE1NTQH/////AAAAAAAAAAAAAAAAs7Oz/01NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAALS0tABMTEwAAAAAAAAAAAC0tLQATExMAAAAAAAAAAAAtLS0AE0NTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABb64AAAAAAAAAAAAAAAAAAAAAAAFvrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABMTEwAAAAAAAAAAABMTEwAs7Oz/01NTQEAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcEAAAAAAAAAAAAAANL+AAANAAAAAAAAAAAAAADS/gAADQAAAAAAAAAAAAAA0v4AADsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8f9+LgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAC0tLQATExMAAAAAAAAAAAAtLS0AE0NTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwA/////7S0tAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBAAAAAAAAAAAAAADS/gAADQAAAAAAAAAAAAAA0v4AADsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSbf8AAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJt/wAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzRAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNEAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFsgAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAQDA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALPztABN0v4Asy4CAE3S/gCzLgIATdL+ALMuAgBN0v4Asy4CAE3S/gCzLgIATdL+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALPztABNDUwAAMWyAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATQ1MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzf0yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcBEJ2AAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP8AAAAAAAAAAAAAAAAAAAAApgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/UVH//1FR//8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8Ae08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDD/QkJCADAwMP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWgAAAaYAAP8AAAAAAAAAAKYAAP9aAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAACnAAAAWgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAggABAAAAAAB+AP8AAAAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAIIAAQAAAAAAAAAAjo6OAQAAAABycnL/AAAAAI6OjgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAHE/wAAAAAAAMWyADCrfwAAAAAAAAAAAAAAAADQAAAAADtOAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAA7TgAAAAAAAAAAAAAAAAAAxbIAMKt/AAAAAAAAAAAAAAAAANAAAAAAO04AAcT/ADAAMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKcAAAAAAAAAAAAAAFoAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAQAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAI6OjgEAAAAAcnJy/wAAAACOjo4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAwMDD/AAAAAAAAAAAAAAAA0NDQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMP8AAAAAAAAAAAAAAADQ0NABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/MoAAAAAAAATRgAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMBjniwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9D7dPAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALN/TIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFlvwkIAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPQ+3TwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAA0MkBADA3/wAA/QEAAAP/AAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAP////8AAbYBAAAAAAAAAAAAACkAAP8h/wABAQEAAAAAAQAAAAAAAAD/////AAAAAAAAAQEAAAAAAAD//wAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAA/wAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAX8BAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAP8AAAAAAAAAAAAAAP////8AAAAAANGMKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRjCkAAAAAAP///wAAAAD/AAAAAAAAAAAAAAD/////AAAAAAAA/QEAAP0BAAAAAAAAAAAAAP0BANDMAADQyQEAAAAAAAAAAAD///8AAAAA/wAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAP8AAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAB3wEAAd8BAAHfAQABfwEAAAAAAP///wAAAAD/AAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHNzcwBzc3MAAAAAAAAAAAD///8AAAAA/wAAAAAAAAD/////AAHfAQAAAAAAAAAAAAAAAAAAkAAAAW8BAP///wAAAAD/AAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALGfAQAAAAAAT2H/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAF/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANGMKQAvdNcAAAAAAAAAAAAAAAAA0YwpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDMAAAAAAAAMDQBAAAAAAAAAAAAAAAAADA0AAAA/QEAAAAAAAAD/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd8BAADXAAAAAAAAAAAAAAAAAAAAKQAA/yH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3wEAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzc3MAQUFBAExMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAPAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAAAQEAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA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AAAAAHNzcwAAAAAAAAAAAI2NjQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAA/////wAAAAAAAAAAAAAAAACxnwEAAAAAAAAAAAAAAAAAT2H/AAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAD/////AAAAAAAAAAAAAbYBAAAAAAD/nFEAAAAAAAFkrwAAAAAAAAAAAP9K/wAAAAAAAQEBAAAAAAEAAAAAAAAA/////wAAAAAAAAAAAAAAAAAA/QEA0MwAADA0AADQzAAAMDf/AAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAEA4KAAAAAAAwMjYAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAD/////AAAAAAABtgEA/0r/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAA/////wAAAAAAc3NzAAAAAACNjY0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////AAAA/wAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////wAAAP8AAAAAAAAAAAAAAP////////82a6FFAAAgAElEQVT//wC1AP////////////////////////////////////////////////8AAAD/AAAAAAAAAAAAAAD///////////////////wA///////PyAD///wA///////PyAD/////////////////AAAA/wAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////wAAAP8AAAAAAAAAAAAAAP////////////////8AtQD///////////////////////////////////////////8AAAD/AAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAANDJAQAwN/8AAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//6I/wAAAAAA/ngAAAAAANDMAAAAAAAA4dYAAAAAAABQYgABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAD/AAAA/////wD///8A////AP///wD///8A////AAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP////8A////AP///wD///8A////AP///wAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/////ADAwMAD///8A////ADAwMAD///8AAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/////wD///8A////AP///wD///8A////AAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP////8A////AP///wD///8A////AP///wAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/////AP///wD///8A////AP///wD///8AAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/////wD///8A////AP///wD///8A////AAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAABAQH/AAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAQEB/wAAAAEAAAAAAAAAAAAAAAAAAAD/////AAAAAAAxMTEA0K7QAAHfAQAA4v8AAJDPADExMQD///8AAAAAAAEBAf8AAAABAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAABAQH/AAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAQEB/wAAAAEAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAEBAf8AAAABAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAABAQH/AAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAYayAAAAAAAAAAAAAAAAAP96TgAAAAAAAAAAAP///wABAQH/AAAAAQAAAAAAAAD/////AAAAAAAAAAAAMTExAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8/PAAAAAAD///8AAQEB/wAAAAEAAAAAAAAA/////wAAAAAAAAAAAAAAAAD/c1EAAAAAAACrAQAAAAAAMQAwAAAAAAAAAAAA////AAEBAf8AAAABAAAAAAAAAP////8AAAAAAAAAAAAxMTEAAAAAAAAAAAAAAAAAAAAAAAAAAADPz88AAAAAAP///wABAQH/AAAAAQAAAAAAAAD/////AAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAD///8AAQEB/wAAAAEAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhrIAAAAAAAAAAAD/ek4A////AAEBAf8AAAABAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAP//AP///wABAQH/AAAAAQAAAAAAAAAAAQJ4AQAAAAD/UVH/AAAAADCvrwAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAGGsgAAAAAAAAAAAAAAAAAAAAAAAYayAP96TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADExMQDPzlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMTEAz8/PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8/PADExMQDPz88AAAAAADExMQDPz88AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTExAEJCQgCN398AcyEhAI3f3wAAAAAAcyEhADExMQDPz88AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AM8hIQAAUlIAAP0BAM/M0AAxMTEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjd/fAI3f3wBzISEAcyEhAI3f3wCN398AcyEhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAMWyAAAAAAAAzbwAAAAAAP+tkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB3gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABhrIAAAAAAAAAAAD/ek4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/OWAAAAAAAAAAAAAAAAADPzlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW+uAAAAAAAA4gEAAAAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/PzwAxMTEAzyEhAAAAAACN398AcyEhAI3f3wCN398AcyEhAADf3wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwQAAADtOAAAAAAAAxbIAAAAAAABukgD/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAd4AAAAAAABafgAAWQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAMB6zYYAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/3pOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMqgAAAAAAM/OWAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/PzwAxMTEAz8/PAAAA/wAxMTEAz8/PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM/PzwAxMTEAAN/fADEAAAAA398AMQAAAM8hIQC+vr4Az8/PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFsgAAAAAAADtOAADNvAAAzbwA/62SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHeAAAAAAAAAKAAAP+B/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgEAAAAAAAD1AAAAAAAAAPkAAAAAAAAArgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAP///wAAAAAAAAAAADExMQDPzlgAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMqgAz8/PAAAAAAAAAAAAAQEBAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAxMTEAAAAAAM/PzwAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxMTEAzyEhADHf3wDPz88AAAAAAAAAAAABAQEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAD///8AAAAAAAHBAAAAAAAAAAAAAACSbgAAbpIA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAA////AAAAAAAAAAAAAAEBAAAAAAAB3gAAAAAAAACgAAD/gf8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAADeAP8AAAAAANcAAAAAAAAAyQAAAAAAAACCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABhrIAAYayAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAxMqgAAAAAAAAAAAAxMqgAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAMTExAM/PzwDPz88AMTExAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzyEhADExMQAAAAAAAQEBAAAAAAEAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAQEBAQAAAAAA/z8AAAAAAAAAAAAA/62SAP8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAEBAQEAAAAAAAAAAAAAAAAApwAAAKYiAAD/If8AMLIwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAGGsgAAAAAA/3pOAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAD/////AAAAAAAAAAAAMTExAM/PzwAxMTEAAAAAAM/PzwAxMTEAz8/PAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAA/////wAAAAAAAAAAADExMQDPISEAAAAAAAFvrgAAAAAAMHAxAM/PzwAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADExMQAAAAAAz8/PAAAAAAABAQEAAAAAAQAAAAAAAAD/////AAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAA/////wAAAAAAAAAAAAHBAAD/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAP////8AAAAAAAABAQAA//8AAAAAAAAAAAAxMTEAAAAAAM/PzwAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAA/////wAAAAC0tLQAAAAAAL+/vwAAAAAAvr6+AAAAAADQ0NAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAQEBAf////8AAAAAAAAAAAAAAAAA/3pOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAEBAQH/////AAAAAADPz88AAAAAAM/PzwAAAAAAAAAAAM/PzwAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAABAQEB/////wAAAAAAAAAAAAGNrwAAAAAA/x4BAAAAAAAxADAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAQEBAf////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8/PAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAEBAQH/////AAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAABAQEB/////wAAAAAA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAQEBAf////8AAP//AAAAAAAAAAAAMTExAM/PzwAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAQEBAf8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQH/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAQEB/wAAAAD///8AMTExAM/PzwAAAAAAMTExAM/PzwABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAf8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQH/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAABAQEB/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAf8AAAAA////AAAAAADPz88AAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs39MgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvYUewAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA9D7dPAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD0Pt08AACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABbsJH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAAfLicA49/mAP7z8wAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPf5gAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAINDQAAAAAAAAAAAP7z8wAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0U3AB0hGgAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGZMWIwAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC7rrwAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAADeAP8AfgD/AH4A/wAAAAAAAAAAAH4A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A/wB+AP8AfgD/AAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHy4nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAKAAAD+5JwAA8AAAPzcn/wBeAP8A4AAAAG4A/z83J/8AXgD/AG4A/wB+AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAADwAAA/Nyf/AF4A/wDgAAAAbgD/Pzcn/wBeAP8AbgD/AAAAAP7z8wDh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAfgD/AAAAAD+5JwDBANkAAAAAAAD4JgDBL/8AAAAmAD/RAQDBL/8AAAAAAAAIJgA/yQEAwSfZAAB+AP8AAAAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/uScAwS//AMEv/wAAACYAP9EBAMEv/wAAAAAAAAgmAD/JAQDXJwAAAg0NAP7z8wAAAAAAAAAAAAAAAAAdIRoA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADgAAAAEAAAAAAAAADoJgDgDhgAH98AAAAAAAAAAAAA4A4AAB/fAADgDgAAH98AAAAA6AAACCYAP7kBAMEn2QA/2ScAwSfZAD83J//BJ9kAAKIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAH4A/wAAAAAA8AAAP8knAMEn2QAAAAAAAAAAAAAQAAA/yScAwS//AAAAAAAAAAAAH98ZAAAAAADgDgAAH98AAOAOAAAf3wAA4A4AAAAAAAD+8/MAAAAAAAINDQAAAAAAAAAAAOHS2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACP9knAAD4JgDgDhgAH98ZAAAAAAAAAAAA9xkOAPcZDgD3GQ4AAAAAAAAAAAAAAAAA4A4YAB/fGQAAAAAAAAgmAMEv/wAACCYAAAAAAAAIJgAAXgD/Pzcn/wBeAP8AbgD/Pzcn/wBeAP8/uScAAOAAAAD4JgAAAAAAAAgmAAAIJgA/2ScAAPgmAAAAAAAAAAAA4A4YAB/fGQAAAAAAAAAAAAAAAAAAAAAAAAAAAPcZDgD3GQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEfRT//AAAAAAAAAAD3GQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACefyAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOEh5wAAAAAAAAAAAD/RAQDBL/8AH98ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3GQ4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLicA49/mAAAAAAD+8/MAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARhrWv8AAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAHSEaAOPf5gD+8/MAAAAAAAINDQAAAAAAHSEaAOPf5gD+8/MAAAAAAAAAAAACDQ0AHSEaACYkHQDa3OMA49/mAP7z8wAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAINDQD+8/MAAg0NAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAINDQAAAAAA/vPzAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLicA49/mAB0hGgAmJB0Au668AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8uJwDh0tkAAAAAAB0hGgDj3+YA/vPzAOqiswEAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHS2QACDQ0A49/mAOPf5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAAAAAAAAAAAA49/mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAA/vPzAAAAAAAdIRoARVJEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAB0hGgBFUkQAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAOPf5gC9u8kAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAA49/mAL27yQACDQ0AAAAAAAINDQAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLicAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHS2QD+8/MAAAAAAAAAAAAdIRoAQ0U3AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf9FUkQA2tzjAOPf5gD+8/MAHy4nAOPf5gD+8/MA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAg0NAAAAAAD+8/MAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALuuvAACDQ0AAAAAAAAAAADh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wD+8/MAAg0NAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHy4nAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAD+8/MAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAADh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYSJ9SAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAg0NAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHy4nAAINDQAAAAAAAAAAAAINDQAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAfLicAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wDh0tkA/vPzAAAAAABDRTcAHSEaAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0hGgBFUkQAAAAAAOHS2QD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAACDQ0A/vPzAAAAAAACDQ0AAAAAAP7z8wAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/Ag0NAAAAAAAAAAAA/vPzAAAAAAACDQ0A/vPzAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAQ0U3AB0hGgACDQ0AAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfLicAAg0NAAAAAAAfLicAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAC9u8kA49/mAAAAAAACDQ0AAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOHS2QD+8/MAAAAAAOPf5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP8AfgD/AH4A/wAAAAAAAAAAAH4A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AQ0U3AB0hGgD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAD+5JwAA8AAAPzcn/wBeAP8A4AAAAG4A/wBuAP8AXgD/Pzcn/wBeAP8AAAAAQ0U3AB0hGgAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAC9u8kAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAH4A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+5JwDBANkAAAAAAAD4JgDBL/8AAAAmAD/RAQDBL/8AP9EBAMEv/wAAAAAAAAgmAAD4AAC9u8kAAAAAAP7z8wAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAACCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AP8AAAAAAPAAAD/J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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHSEaAOHS2QACDQ0AAAAAAP7z8wAAAAAA9xkOAAAAAAAAAAAAAAAAAAAAAAACDQ0A/vPzAAAAAAD+8/MAAAAAAAAAAAD+8/MAAg0NAB0hGgAmJB0A2tzjAAAAAADj3+YAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAQ0U3ANrc4wDh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAdIRoAJiQdAL27yQAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB0hGgDj3+YA/vPzAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAg0NAB0hGgDh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAg0NAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHSEaAB0hGgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYNbtvQAAEhhJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADqorMBAAAAAAAAAAAAAAAAHSEaAAAAAAACDQ0AAAAAAAAAAAAWXk3/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh0tkAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAD+8/MAHSEaAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmMPm68FwKQgAAAABJRU5ErkJggg=="

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

__webpack_require__(22);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(16);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(20)(content, options);
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(17);
exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'MECC';\n  src: url(" + escape(__webpack_require__(19)) + ") format('truetype');\n}\n\nhtml, body {\n  background-color: #222;\n  height: 100%;\n  margin: 0;\n\tfont-family: 'MECC', Courier, sans-serif;\n}\n\n#flex-container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),
/* 17 */
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
/* 18 */
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
/* 19 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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aWduZXIgZGVzY3JpcHRpb246IElmIHlvdSBncmV3IHVwIHBsYXlpbmcgVGhlIE9yZWdvbiBUcmFpbCBvbiB0aGUgQXBwbGUgSUksIHlvdSdsbCBrbm93IHRoaXMgZm9udC4NCg0KTm93IHlvdSwgdG9vLCBjYW4gY3JlYXRlIGZha2Ugc2NyZWVuc2hvdHMgY2xhaW1pbmcgeW91J3ZlIGRpZWQgb2YgZHlzZW50ZXJ5IQpodHRwOi8vZm9udHN0cnVjdC5jb20vZm9udHN0cnVjdGlvbnMvc2hvdy8zMDY2ODkvaGVyZV9saWVzX21lY2NDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIFNoYXJlIEFsaWtlaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL0ZpdmUgYmlnIHF1YWNraW5nIHplcGh5cnMgam9sdCBteSB3YXggYmVkQVFrT2MxRnQAQwBvAHAAeQByAGkAZwBoAHQAIABjAG8AZABlAG0AYQBuADMAOAAgADIAMAAxADAASABlAHIAZQAgAEwAaQBlAHMAIABNAEUAQwBDAFIAZQBnAHUAbABhAHIARgBvAG4AdABTAHQAcgB1AGMAdAAgAEgAZQByAGUAIABMAGkAZQBzACAATQBFAEMAQwBIAGUAcgBlACAATABpAGUAcwAgAE0ARQBDAEMAIABSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMABIAGUAcgBlAC0ATABpAGUAcwAtAE0ARQBDAEMARgBvAG4AdABTAHQAcgB1AGMAdAAgAGkAcwAgAGEAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG8AZgAgAEYAUwBJACAARgBvAG4AdABTAGgAbwBwACAASQBuAHQAZQByAG4AYQB0AGkAbwBuAGEAbAAgAEcAbQBiAEgAaAB0AHQAcAA6AC8ALwBmAG8AbgB0AHMAdAByAHUAYwB0AC4AYwBvAG0ALwBjAG8AZABlAG0AYQBuADMAOCAcAEgAZQByAGUAIABMAGkAZQBzACAATQBFAEMAQyAdACAAdwBhAHMAIABiAHUAaQBsAHQAIAB3AGkAdABoACAARgBvAG4AdABTAHQAcgB1AGMAdAAKAEQAZQBzAGkAZwBuAGUAcgAgAGQA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AIAAAAEAAAAAgAAAAQAAAACAAAD/gAAA/wAAAP+AAAAAgAAA/4AAAP8AAAD/gAAAAIAAAP+AAAAAAQAAAgACAAOAAAsAAAEBAQEBAQEBAQEBAQAAAAAAgAAAAIAAAAEAAAD/gAAA/4AAAAIAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAAAAEAAAAAAgADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAD/gAAA/4AAAACAAAAAgAAAAQAAAP+AAAD/gAAAAIAAAACAAAAAAACAAAAAgAAAAYAAAACAAAAAgAAA/4AAAP+AAAD+gAAA/4AAAP+AAAAAAQAAAAACAAOAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAA/4AAAP+AAAABAAAAAIAAAACAAAD/gAAA/4AAAAAAAIAAAACAAAABgAAAAIAAAACAAAD/gAAA/4AAAP6AAAD/gAAA/4AAAAABAAAAAAQAA4AAIwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYAAAP+AAAD/AAAAAIAAAACAAAD/gAAA/4AAAAEAAAAAgAAAAQAAAACAAAABAAAA/4AAAP+AAAAAgAAAAIAAAP8AAAD/gAAAAAABAAAA/4AAAACAAAAAgAAAAIAAAACAAAAAgAAA/4AAAAEAAAD/AAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAAAIAAAP8AAAAAAQAAAIADAAMAAAsAAAEBAQEBAQEBAQEBAQEAAAD/AAAAAQAAAAEAAAABAAAA/wAAAACAAQAAAACAAAABAAAA/wAAAP+AAAD/AAAAAAEAAP+AAYABAAAHAAABAQEBAQEBAQAAAAAAgAAAAQAAAP+AAAD/gACAAAABAAAA/wAAAP+AAAAAAQAAAYACgAIAAAMAAAEBAQEAAAAAAoAAAAGAAIAAAP+AAAAAAQAAAAABAACAAAMAAAEBAQEAAAAAAQAAAAAAAIAAAP+AAAAAAQAAAIADAAMAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAAAIAAAACAAAABAAAA/4AAAP+AAAD/gAAA/4AAAACAAIAAAACAAAAAgAAAAIAAAACAAAD/gAAA/4AAAP+AAAD/gAAA/4AAAAACAAAAAAMAA4AAAwAPAAABAQEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/gAAA/4AAAACAAAACAAAAAIAAAP+AAAAAgAKAAAD9gP+AAIAAAAKAAAAAgAAA/4AAAP2AAAD/gAABAIAAAAKAA4AACwAAAQEBAQEBAQEBAQEBAIAAAACAAAD/gAAAAIAAAAEAAAAAgAAAAAAAgAAAAgAAAACAAAAAgAAA/QAAAP+AAAAAAQAAAAADAAOAABkAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAAAQAAAP8AAAD/AAAAAIAAAAIAAAAAgAAA/4AAAP8AAAD/gAAAAgAAAAAAAQAAAACAAAAAgAAAAQAAAP+AAAAAgAAAAIAAAP+AAAD/AAAA/4AAAP+AAAD/gAAA/4AAAQAAAAADAAOAABcAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAAAD/gAAAAQAAAAEAAAD/AAAAAIAAAACAAAD+AAAAAwAAAP+AAAAAgAAA/4AAAAAAAIAAAACAAAD/gAAAAQAAAACAAAAAgAAAAIAAAACAAAD/AAAA/wAAAP8AAAD/gAAAAAIAAAAAAwADgAADABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAYAAAP+AAAAAgAAA/oAAAACAAAAAgAAAAIAAAAEAAAAAgAAA/4AAAAGAAIAAAP+A/oABAAAAAQAAAACAAAAAgAAAAIAAAP4AAAD/gAAA/wAAAQAAAAADAAOAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAIAAAP+AAAABAAAAAQAAAP4AAAADAAAA/gAAAAGAAAAAgAAA/4AAAAAAAIAAAACAAAD/gAAAAYAAAAGAAAD/gAAA/4AAAP+AAAD+gAAA/4AAAAACAAAAAAMAA4AAAwAXAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAP+AAAD/gAAAAIAAAACAAAACAAAA/oAAAP+AAAABgAAAAIAAAP+AAAAAgAEAAAD/AP+AAIAAAAIAAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/AAAA/4AAAQAAAAADAAOAABEAAAEBAQEBAQEBAQEBAQEBAQEBAQCAAAAAgAAAAIAAAACAAAD+AAAAAwAAAP+AAAD/gAAA/4AAAAAAAYAAAACAAAAAgAAAAIAAAACAAAD/AAAA/4AAAP+AAAD+gAADAAAAAAMAA4AAAwAHABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAAEAAAD/AAAA/4AAAP+AAAAAgAAA/4AAAACAAAACAAAAAIAAAP+AAAAAgAAA/4AAAACAAQAAAP8AAYABAAAA/wD+AACAAAABAAAAAIAAAAEAAAAAgAAA/4AAAP8AAAD/gAAA/wAAAP+AAAAAAgAAAAADAAOAAAMAFwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/AAAAAYAAAACAAAD+gAAA/4AAAACAAAACAAAAAIAAAP+AAAD/gAAAAgABAAAA/wD+AACAAAAAgAAAAIAAAACAAAABAAAAAIAAAP+AAAD+AAAA/4AAAP+AAAIAAACAAQACAAADAAcAAAEBAQEBAQEBAAAAAAEAAAD/AAAAAQAAAACAAIAAAP+AAQAAgAAA/4AAAgAA/4ABgAIAAAcACwAAAQEBAQEBAQEBAQEBAAAAAACAAAABAAAA/4AAAP+AAAABAAAA/4AAgAAAAQAAAP8AAAD/gAIAAIAAAP+AAAEAAAAAAoADgAAbAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYAAAP+AAAD/gAAA/4AAAACAAAAAgAAAAIAAAAEAAAD/gAAA/4AAAP+AAAAAgAAAAIAAAACAAAAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP+AAAD/gAAAAAIAAACAAoACgAADAAcAAAEBAQEBAQEBAAAAAAKAAAD9gAAAAoAAAACAAIAAAP+AAYAAgAAA/4AAAQAAAAACgAOAABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAAAQAAAACAAAAAgAAAAIAAAP+AAAD/gAAA/4AAAAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAAgAAAAADAAOAAAMAFwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEAAAD/AAAAAIAAAACAAAD/AAAA/wAAAACAAAACAAAAAIAAAP+AAAD/gAAAAAAAgAAA/4ABAAEAAAAAgAAAAIAAAP+AAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP8AAAEAAAAAA4ADgAAVAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAIAAAP+AAAAAgAAAAoAAAACAAAD/gAAA/oAAAACAAAAAgAAA/oAAAAIAAAAAAACAAAACgAAAAIAAAP+AAAD+gAAA/4AAAAGAAAD/gAAAAQAAAP2AAAD/gAACAAAAAAMAA4AAAwATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQIAAAD/AAAA/wAAAACAAAAAgAAAAQAAAACAAAAAgAAA/wAAAP8AAAABgAEAAAD/AP6AAoAAAACAAAAAgAAA/4AAAP+AAAD9gAAAAQAAAP8AAAMAAAAAAwADgAADAAcAEwAAAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAAEAAAD/AAAA/wAAAAKAAAAAgAAA/4AAAACAAAD/gAAAAIABAAAA/wABgAEAAAD/AP4AA4AAAP+AAAD/AAAA/4AAAP8AAAD/gAAAAAEAAAAAAwADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQCAAAD/gAAAAIAAAAIAAAAAgAAA/wAAAP8AAAABAAAAAQAAAP+AAAAAAACAAAACgAAAAIAAAP+AAAD/gAAAAIAAAP2AAAAAgAAA/4AAAP+AAAAAAgAAAAADAAOAAAMACwAAAQEBAQEBAQEBAQEBAgAAAP8AAAD/AAAAAoAAAACAAAD/gAAAAIACgAAA/YD/gAOAAAD/gAAA/YAAAP+AAAEAAAAAAwADgAALAAABAQEBAQEBAQEBAQEAAAAAAwAAAP4AAAABgAAA/oAAAAIAAAAAAAOAAAD/gAAA/wAAAP+AAAD/AAAA/4AAAAABAAAAAAMAA4AACQAAAQEBAQEBAQEBAQAAAAADAAAA/gAAAAGAAAD+gAAAAAADgAAA/4AAAP8AAAD/gAAA/oAAAQAAAAADAAOAAA8AAAEBAQEBAQEBAQEBAQEBAQEAgAAA/4AAAACAAAACgAAA/gAAAAEAAAD/gAAAAYAAAAAAAIAAAAKAAAAAgAAA/4AAAP2AAAAAgAAAAIAAAP6AAAAAAQAAAAADAAOAAAsAAAEBAQEBAQEBAQEBAQAAAAABAAAAAQAAAAEAAAD/AAAA/wAAAAAAA4AAAP6AAAABgAAA/IAAAAGAAAD+gAAAAAEAAAAAAgADgAALAAABAQEBAQEBAQEBAQEAAAAAAIAAAP+AAAACAAAA/4AAAACAAAAAAACAAAACgAAAAIAAAP+AAAD9gAAA/4AAAAABAAAAAAMAA4AACwAAAQEBAQEBAQEBAQEBAIAAAP+AAAABAAAAAQAAAAEAAAD/gAAAAAAAgAAAAIAAAP+AAAADAAAA/QAAAP+AAAAAAQAAAAADAAOAABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAQAAAACAAAAAgAAAAQAAAP+AAAD/gAAA/4AAAACAAAAAgAAAAIAAAP8AAAD/gAAA/4AAAAAAA4AAAP8AAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAgAAAAIAAAP8AAAAAAQAAAAADAAOAAAUAAAEBAQEBAQAAAAABAAAAAgAAAAAAA4AAAP0AAAD/gAABAAAAAAOAA4AAEwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAQAAAACAAAAAgAAAAIAAAAEAAAD/AAAA/4AAAP+AAAD/gAAAAAADgAAA/4AAAP+AAAAAgAAAAIAAAPyAAAACAAAA/4AAAACAAAD+AAAAAAEAAAAAA4ADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAABAAAAAIAAAACAAAAAgAAAAQAAAP8AAAD/gAAA/4AAAP+AAAAAAAOAAAD/gAAA/4AAAP+AAAABgAAA/IAAAACAAAAAgAAAAIAAAP6AAAAAAgAAAAADAAOAAAMADwAAAQEBAQEBAQEBAQEBAQEBAQIAAAD/AAAA/4AAAP+AAAAAgAAAAgAAAACAAAD/gAAAAIACgAAA/YD/gACAAAACgAAAAIAAAP+AAAD9gAAA/4AAAgAAAAADAAOAAAMADQAAAQEBAQEBAQEBAQEBAQECAAAA/wAAAP8AAAACgAAAAIAAAP+AAAD+gAAAAgABAAAA/wD+AAOAAAD/gAAA/wAAAP+AAAD+gAAAAAEAAAAAAwADgAAXAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAgAAA/4AAAACAAAACAAAAAIAAAP+AAAAAgAAA/wAAAP+AAAAAgAAA/wAAAACAAAAAAACAAAACgAAAAIAAAP+AAAD+AAAA/4AAAP+AAAAAgAAAAIAAAAIAAAD9gAAA/4AAAAACAAAAAAMAA4AAAwAXAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAP8AAAACgAAAAIAAAP+AAAD/gAAAAIAAAACAAAD/AAAA/4AAAP+AAAACAAEAAAD/AP4AA4AAAP+AAAD/AAAA/4AAAP+AAAD/gAAA/4AAAACAAAAAgAAA/wAAAQAAAAADAAOAABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAgAAA/4AAAAEAAAABAAAA/oAAAP+AAAAAgAAAAgAAAACAAAD/AAAA/wAAAAGAAAAAgAAA/4AAAAAAAIAAAACAAAD/gAAAAQAAAACAAAABAAAAAIAAAP+AAAD/gAAAAIAAAP8AAAD/gAAA/wAAAP+AAAAAAQAAAAADAAOAAAcAAAEBAQEBAQEBAQAAAP8AAAADAAAA/wAAAAAAAwAAAACAAAD/gAAA/QAAAAABAAAAAAMAA4AACwAAAQEBAQEBAQEBAQEBAIAAAP+AAAABAAAAAQAAAAEAAAD/gAAAAAAAgAAAAwAAAP0AAAADAAAA/QAAAP+AAAAAAQAAAAADAAOAAA8AAAEBAQEBAQEBAQEBAQEBAQEBAAAA/4AAAP+AAAABAAAAAQAAAAEAAAD/gAAA/4AAAAAAAIAAAACAAAACgAAA/YAAAAKAAAD9gAAA/4AAAP+AAAAAAQAAAAADgAOAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAEAAAAAgAAAAIAAAACAAAABAAAA/wAAAP+AAAD/gAAA/4AAAAAAA4AAAP4AAAAAgAAA/4AAAAIAAAD8gAAAAIAAAACAAAD/gAAA/4AAAAABAAAAAAMAA4AAGwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAgAAAAIAAAP+AAAD/gAAAAQAAAAEAAAABAAAA/4AAAP+AAAAAgAAAAIAAAP8AAAD/AAAAAAABAAAAAIAAAACAAAAAgAAAAQAAAP8AAAABAAAA/wAAAP+AAAD/gAAA/4AAAP8AAAABAAAA/wAAAAABAAAAAAMAA4AADwAAAQEBAQEBAQEBAQEBAQEBAQEAAAD/gAAA/4AAAAEAAAABAAAAAQAAAP+AAAD/gAAAAAACAAAAAIAAAAEAAAD/AAAAAQAAAP8AAAD/gAAA/gAAAAABAAAAAAMAA4AAFwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAAAIAAAACAAAD+AAAAAwAAAP+AAAD/gAAA/4AAAP+AAAACAAAAAAABAAAAAIAAAACAAAAAgAAAAIAAAACAAAD/AAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAAQAAAAACgAOAAAcAAAEBAQEBAQEBAAAAAAKAAAD+gAAAAYAAAAAAA4AAAP+AAAD9gAAA/4AAAAABAAAAgAMAAwAAEwAAAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/4AAAP+AAAD/gAAA/4AAAAEAAAAAgAAAAIAAAACAAAAAgAAAAIAAgAAAAIAAAACAAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAAAAEAAAAAAoADgAAHAAABAQEBAQEBAQAAAAABgAAA/oAAAAKAAAAAAACAAAACgAAAAIAAAPyAAAAAAQAAAQADAAKAAA8AAAEBAQEBAQEBAQEBAQEBAQEAAAAAAIAAAACAAAABAAAAAIAAAACAAAD/AAAA/wAAAAEAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAAAIAAAP+AAAAAAQAA/4ADAAAAAAMAAAEBAQEAAAAAAwAAAP+AAIAAAP+AAAAAAQAAAgACAAOAAAsAAAEBAQEBAQEBAQEBAQEAAAD/gAAA/4AAAAEAAAAAgAAAAIAAAAIAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAAAAIAAAAAAwACgAADABEAAAEBAQEBAQEBAQEBAQEBAQEBAQIAAAD/AAAA/4AAAP+AAAAAgAAAAYAAAP6AAAACAAAAAIAAAACAAIAAAP+A/4AAgAAAAIAAAACAAAAAgAAAAIAAAP+AAAD+AAAAAAIAAAAAAwADgAADAA0AAAEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/AAAAAQAAAAGAAAAAgAAA/4AAAACAAYAAAP6A/4ADgAAA/wAAAP+AAAD+gAAA/4AAAAABAAAAAAMAAoAACwAAAQEBAQEBAQEBAQEBAIAAAP+AAAAAgAAAAoAAAP4AAAACAAAAAAAAgAAAAYAAAACAAAD/gAAA/oAAAP+AAAAAAgAAAAADAAOAAAMADQAAAQEBAQEBAQEBAQEBAQECAAAA/wAAAP+AAAD/gAAAAIAAAAGAAAABAAAAAIABgAAA/oD/gACAAAABgAAAAIAAAAEAAAD8gAAAAAIAAAAAAwACgAADABEAAAEBAQEBAQEBAQEBAQEBAQEBAQIAAAD/AAAA/4AAAP+AAAAAgAAAAgAAAACAAAD+AAAAAgAAAAGAAIAAAP+A/oAAgAAAAYAAAACAAAD/gAAA/wAAAP+AAAD/gAAAAAEAAAAAAwADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQCAAAD/gAAAAIAAAACAAAABgAAAAIAAAP8AAAD/gAAAAIAAAP+AAAAAAAGAAAAAgAAAAQAAAACAAAD/gAAA/4AAAACAAAD/AAAA/4AAAP6AAAAAAgAA/4ADAAKAAAMAEQAAAQEBAQEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/gAAAAYAAAP6AAAD/gAAAAIAAAAKAAAD/gAAAAQABAAAA/wD+gACAAAAAgAAAAIAAAAEAAAAAgAAA/YAAAP+AAAAAAQAAAAADAAOAAAsAAAEBAQEBAQEBAQEBAQAAAAABAAAAAYAAAACAAAD/AAAA/wAAAAAAA4AAAP8AAAD/gAAA/gAAAAIAAAD+AAAAAAIAAAAAAgADgAAJAA0AAAEBAQEBAQEBAQEBAQEBAAAAAACAAAD/gAAAAYAAAACAAAD+gAAAAQAAAAAAAIAAAAGAAAAAgAAA/gAAAP+AAwAAgAAA/4AAAAACAAD/gAKAA4AADQARAAABAQEBAQEBAQEBAQEBAQEBAQEAgAAA/4AAAAEAAAAAgAAA/4AAAAGAAAD/gAAA/4AAAAEAAAD/gACAAAAAgAAA/4AAAAIAAAAAgAAA/YAAAP+AA4AAgAAA/4AAAAABAAAAAAMAA4AAFwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAEAAAAAgAAAAIAAAAEAAAD/gAAA/4AAAACAAAAAgAAA/wAAAP+AAAD/gAAAAAADgAAA/gAAAACAAAAAgAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAgAAAAIAAAP8AAAAAAQAAAAACAAOAAAkAAAEBAQEBAQEBAQEAAAAAAIAAAP+AAAABgAAAAIAAAAAAAIAAAAKAAAAAgAAA/QAAAP+AAAEAAAAAA4ACgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAgAAAAQAAAACAAAABAAAAAIAAAP8AAAD/gAAA/4AAAP+AAAAAAAIAAAAAgAAA/4AAAACAAAD/gAAA/gAAAAGAAAD/gAAAAIAAAP6AAAAAAQAAAAADAAKAAAkAAAEBAQEBAQEBAQEAAAAAAoAAAACAAAD/AAAA/wAAAAAAAoAAAP+AAAD+AAAAAgAAAP4AAAIAAAAAAwACgAADAA8AAAEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAP+AAAD/gAAAAIAAAAIAAAAAgAAA/4AAAACAAYAAAP6A/4AAgAAAAYAAAACAAAD/gAAA/oAAAP+AAAIAAP+AAwACgAADAA0AAAEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/AAAAAoAAAACAAAD/gAAA/oAAAAEAAQAAAP8A/oADAAAA/4AAAP8AAAD/gAAA/wAAAAACAAD/gAMAAoAAAwANAAABAQEBAQEBAQEBAQEBAQIAAAD/AAAAAQAAAP6AAAD/gAAAAIAAAAKAAAABAAEAAAD/AP6AAQAAAACAAAABAAAAAIAAAP0AAAAAAQAAAAADAAKAAAkAAAEBAQEBAQEBAQEAAAAAAoAAAACAAAD/AAAA/wAAAAAAAoAAAP+AAAD/gAAAAIAAAP4AAAEAAAAAAwACgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAACAAAA/oAAAP+AAAAAgAAAAoAAAP4AAAABgAAAAIAAAP+AAAAAAACAAAAAgAAAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAAQAAAAADAAOAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAP+AAAD/gAAAAIAAAAEAAAABAAAA/wAAAACAAAABAAAA/4AAAAAAAIAAAAGAAAAAgAAAAQAAAP8AAAD/gAAA/oAAAACAAAD/gAAA/4AAAAABAAAAAAMAAoAACQAAAQEBAQEBAQEBAQCAAAD/gAAAAQAAAAEAAAABAAAAAAAAgAAAAgAAAP4AAAACAAAA/YAAAQAAAAADAAKAAA8AAAEBAQEBAQEBAQEBAQEBAQEBAAAA/4AAAP+AAAABAAAAAQAAAAEAAAD/gAAA/4AAAAAAAIAAAACAAAABgAAA/oAAAAGAAAD+gAAA/4AAAP+AAAAAAQAAAAADgAKAAA8AAAEBAQEBAQEBAQEBAQEBAQEAAAAAAQAAAACAAAAAgAAAAIAAAAEAAAD+gAAA/4AAAAAAAoAAAP6AAAAAgAAA/4AAAAGAAAD9gAAAAIAAAP+AAAAAAQAAAAADAAKAABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAIAAAACAAAD/gAAA/4AAAAEAAAABAAAAAQAAAP+AAAD/gAAAAIAAAACAAAD/AAAA/wAAAAAAAIAAAACAAAAAgAAAAIAAAACAAAD/gAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAAAIAAAP+AAAAAAQAA/4ADAAKAAA8AAAEBAQEBAQEBAQEBAQEBAQEAgAAAAYAAAP6AAAD/gAAAAQAAAAEAAAABAAAA/4AAAP+AAIAAAACAAAAAgAAAAYAAAP6AAAABgAAA/YAAAP+AAAAAAQAAAAADAAKAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAAAIAAAP6AAAADAAAA/4AAAP+AAAD/gAAAAYAAAAAAAIAAAACAAAAAgAAAAIAAAACAAAD/gAAA/4AAAP+AAAD/gAAA/4AAAAABAAAAAAIAA4AAEwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAA/4AAAP+AAAAAgAAAAIAAAAEAAAD/gAAA/4AAAACAAAAAgAAAAAAAgAAAAQAAAACAAAABAAAAAIAAAP+AAAD/AAAA/4AAAP8AAAD/gAAAAAEAAP+AAQADgAADAAABAQEBAAAAAAEAAAD/gAQAAAD8AAAAAAEAAAAAAgADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAgAAAAIAAAP+AAAD/gAAAAQAAAACAAAAAgAAA/4AAAP+AAAAAAACAAAABAAAAAIAAAAEAAAAAgAAA/4AAAP8AAAD/gAAA/wAAAP+AAAAAAQAAAoADgAOAAA8AAAEBAQEBAQEBAQEBAQEBAQEAAAAAAIAAAAGAAAAAgAAAAQAAAP+AAAD+gAAA/4AAAAKAAIAAAACAAAD/gAAAAIAAAP+AAAD/gAAAAIAAAP+AAAAAAAAAAAAAjAAAAIwAAACMAAAAjAAAAMQAAAD8AAABrAAAAnQAAAMUAAAD3AAABCgAAAScAAAFEAAABdQAAAYgAAAGWAAABnwAAAagAAAHFAAAB3QAAAfAAAAIUAAACNgAAAlMAAAJwAAACkgAAAqwAAALUAAAC9gAAAwQAAAMXAAADPgAAA0wAAANzAAADlQAAA7QAAAPRAAAD7wAABAwAAAQfAAAEMgAABEIAAARaAAAEbQAABIAAAASTAAAEugAABMUAAATiAAAE/wAABRcAAAUtAAAFTwAABXEAAAWYAAAFpgAABbkAAAXRAAAF7gAABhUAAAYtAAAGTwAABl0AAAZ6AAAGiAAABqAAAAapAAAGvAAABtcAAAbtAAAHAAAABxYAAAcxAAAHTgAAB2kAAAd8AAAHkgAAB60AAAfPAAAH3wAAB/wAAAgMAAAIJAAACDoAAAhQAAAIYAAACH0AAAiaAAAIqgAACMIAAAjaAAAJAQAACRkAAAk2AAAJUwAACVwAAAl5AAAJkQ="

/***/ }),
/* 20 */
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

var	fixUrls = __webpack_require__(21);

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
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(23);

var _store2 = _interopRequireDefault(_store);

var _index = __webpack_require__(54);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var store = (0, _store2.default)();
  var canvas = document.getElementById('demo');
  var ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false;

  var rainGame = new _index2.default(store, canvas, ctx);

  rainGame.init();
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _reduxThunk = __webpack_require__(24);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(25);

var _redux = __webpack_require__(26);

var _index = __webpack_require__(42);

var _index2 = _interopRequireDefault(_index);

var _reduxWebsocketBridge = __webpack_require__(5);

var _reduxWebsocketBridge2 = _interopRequireDefault(_reduxWebsocketBridge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
	var loggerMiddleware = (0, _reduxLogger.createLogger)();
	return (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxWebsocketBridge2.default)('ws://localhost:8887/'), loggerMiddleware));
}

/***/ }),
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)))

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(10);
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(31);




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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(29);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(4)))

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(9);


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
/* 31 */
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
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(33);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 33 */
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
/* 34 */
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(36);


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(38);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var root; /* global window */


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

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4), __webpack_require__(37)(module)))

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
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
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(10);




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
/* 40 */
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
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(11);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _reduxWebsocketBridge = __webpack_require__(5);

var _actions = __webpack_require__(1);

var _constants = __webpack_require__(2);

var _story = __webpack_require__(46);

var _story2 = _interopRequireDefault(_story);

var _menus = __webpack_require__(47);

var _menus2 = _interopRequireDefault(_menus);

var _party = __webpack_require__(48);

var _party2 = _interopRequireDefault(_party);

var _buttons = __webpack_require__(49);

var _buttons2 = _interopRequireDefault(_buttons);

var _map = __webpack_require__(68);

var _map2 = _interopRequireDefault(_map);

var _map3 = __webpack_require__(51);

var _input = __webpack_require__(52);

var _ui = __webpack_require__(53);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  // UI
  mode: _constants.MODE.MENU,
  focusX: 2,
  focusY: 2,
  activeMenu: "main",
  story: _story2.default,
  menus: _menus2.default,
  buttons: _buttons2.default,

  // map
  srcTileSize: 32,
  srcTiles: (0, _map3.makeSrcTiles)(),
  mapTileSize: 96,
  mapTiles: (0, _map3.buildMap)(_map2.default),

  // player
  camp: {},
  position: {
    x: null,
    y: null
  },
  sight: 2,
  moves: null,
  party: _party2.default,
  modifiers: {},
  inventory: {},
  vehicle: {
    type: _constants.VEHICLE.JEEP,
    icon: 31,
    repair: 5
  },

  // input
  offsetX: 0,
  offsetY: 0,
  xDragging: null,
  yDragging: null,
  xClick: null,
  yClick: null,
  keys: {
    "ArrowUp": false,
    "ArrowDown": false,
    "ArrowRight": false,
    "ArrowLeft": false,
    "Enter": false,
    "Backspace": false,
    "Delete": false,
    "Escape": false,
    "0": false,
    "1": false,
    "2": false,
    "3": false,
    "4": false,
    "5": false,
    "6": false,
    "7": false,
    "8": false,
    "9": false
  },

  // network
  connected: false,
  loading: false,
  sending: false,
  error: null
};

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case _actions.KEYDOWN:
      return (0, _input.keyDown)(state, action);
    case _actions.KEYUP:
      return (0, _input.keyUp)(state, action);
    case _actions.MOUSEDOWN:
      return (0, _input.mouseDown)(state, action);
    case _actions.DRAG:
      return (0, _input.drag)(state, action);
    case _actions.MOUSEUP:
      return (0, _input.mouseUp)(state, action);
    case _actions.CLICKED:
      return (0, _input.clicked)(state);
    case _actions.FOCUS_MENU:
      return (0, _ui.focusMenu)(state, action);
    case _actions.FOCUS_TILE:
      return (0, _ui.focusTile)(state, action);

    case _actions.SEND_MOVE_REQUEST:
      return Object.assign({}, state, {
        sending: true,
        error: null
      });
    case _actions.SEND_MOVE_SUCCESS:
      return Object.assign({}, state, {
        sending: false
      });
    case _actions.SEND_MOVE_FAILURE:
      return Object.assign({}, state, {
        sending: false,
        error: action.error
      });

    case _actions.LOAD_POSITION_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case _actions.LOAD_POSITION_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        position: action.payload.position.result
      });
    case _actions.LOAD_POSITION_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case _actions.LOAD_TILES_REQUEST:
      return Object.assign({}, state, {
        loading: true,
        error: null
      });
    case _actions.LOAD_TILES_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        tiles: Object.values(action.payload.tiles.result || {})
      });
    case _actions.LOAD_TILES_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        error: action.error
      });

    case '@@websocket/' + _reduxWebsocketBridge.OPEN:
      return Object.assign({}, state, {
        connected: true
      });

    case '@@websocket/' + _reduxWebsocketBridge.CLOSE:
      return Object.assign({}, state, {
        connected: false
      });

    default:
      return state;
  }
}

/***/ }),
/* 43 */
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
/* 44 */
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
/* 45 */
/***/ (function(module, exports) {

var __root__ = (function (root) {
function F() { this.fetch = false; }
F.prototype = root;
return new F();
})(typeof self !== 'undefined' ? self : this);
(function(self) {

(function(self) {

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : this);
}).call(__root__, void(0));
var fetch = __root__.fetch;
var Response = fetch.Response = __root__.Response;
var Request = fetch.Request = __root__.Request;
var Headers = fetch.Headers = __root__.Headers;
if (typeof module === 'object' && module.exports) {
module.exports = fetch;
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {"action":{},"text":["A wild jaguar creeps from the","shadows with glowing eyes."],"buttons":[{"text":"Run away","ref":"9184"},{"text":"Stand your ground","ref":"5622"},{"text":"Shoot","ref":"3214"}]}

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {"byId":{"overlay":{"type":"MAP_OVERLAY","buttons":["button1","button1","button1","button1"]},"main":{"type":"TEXT_MENU","text":["Welcome to the Amazon Trail","","You may:"],"buttons":["toMap","newGame","toHighscore"]},"selectClass":{"type":"TEXT_MENU","text":["A world of adventure awaits you.","","Which path will you choose?"],"buttons":["startTribe","startScience","startLogger","toMain"]},"highscore":{"type":"TEXT_MENU","text":["The Amazon Top Ten:","","  1. Darwin: 12414","  2. Gabriel: 9843","  3. Mom: 5634","  4. Dan: 4197","  5. Jan: 1206"],"buttons":["toMain"]}},"allIds":["overlay","main","selectClass","highscore"]}

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = [{"name":"J. Cruz","icon":32,"health":5,"jeito":3},{"name":"H. Villa","icon":33,"health":1,"jeito":2},{"name":"F. Boa","icon":34,"health":2,"jeito":4},{"name":"R. Stone","icon":32,"health":1,"jeito":1},{"name":"D. Lee","icon":33,"health":3,"jeito":5}]

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {"byId":{"button1":{"text":"MENU","action":{"type":"FOCUS_MENU","payload":{"ref":"main"}}},"toMain":{"text":"Return to main menu","action":{"type":"FOCUS_MENU","payload":{"ref":"main"}}},"toMap":{"text":"Continue game","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"newGame":{"text":"Start new game","action":{"type":"FOCUS_MENU","payload":{"ref":"selectClass"}}},"toHighscore":{"text":"View high scores","action":{"type":"FOCUS_MENU","payload":{"ref":"highscore"}}},"startTribe":{"text":"The way of the tribe","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"startScience":{"text":"The life of a logger","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"startLogger":{"text":"The researcher's journey","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}}},"allIds":["button1","toMain","toMap","newGame","toHighscore","startTribe","startScience","startLogger"]}

/***/ }),
/* 50 */,
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLayer = exports.click = exports.buildMap = exports.makeTestTiles = exports.makeSrcTiles = undefined;

var _utils = __webpack_require__(6);

// Initial state setup

function makeSrcTiles() {
  var array = [];
  for (var y = 0; y < 11; y++) {
    for (var x = 0; x < 5; x++) {
      array.push({ x: x, y: y });
    }
  }
  return array;
}

function makeTestTiles() {
  return [{ id: 1, x: 0, y: 2, layers: { base: 0 } }, { id: 2, x: 1, y: 1, layers: { base: 0 } }, { id: 3, x: 1, y: 2, layers: { base: 0 } }, { id: 4, x: 1, y: 3, layers: { base: 0 } }, { id: 5, x: 2, y: 0, layers: { base: 0 } }, { id: 6, x: 2, y: 1, layers: { base: 0 } }, { id: 7, x: 2, y: 2, layers: { base: 0 } }, { id: 8, x: 2, y: 3, layers: { base: 0 } }, { id: 9, x: 2, y: 4, layers: { base: 0 } }, { id: 10, x: 3, y: 1, layers: { base: 0, middle: 3 } }, { id: 11, x: 3, y: 2, layers: { base: 0, middle: 3 } }, { id: 12, x: 3, y: 3, layers: { base: 0, middle: 3 } }, { id: 13, x: 4, y: 2, layers: { base: 0 } }];
}

function buildMap(map) {
  var mapArray = [];
  for (var y = 0; y < map.height; y++) {
    for (var x = 0; x < map.width; x++) {
      var id = y * map.width + x;
      mapArray.push({ id: id, x: x, y: y, layers: {
          base: 0,
          middle: map.layers[1].data[id] === 0 ? 0 : map.layers[1].data[id] - 1
        } });
    }
  }
  return mapArray;
}

// Helper functions

function screenToTile(state, action) {
  return state.mapTiles.find(function (tile) {
    return tile.x === Math.floor(action.payload.x / state.mapTileSize) && tile.y === Math.floor(action.payload.y / state.mapTileSize);
  });
}

function findTile(tiles, x, y) {
  return tiles.find(function (tile) {
    return tile.x === x && tile.y === y;
  });
}

function isPlayer(tile, x, y) {
  return tile.x === x && tile.y === y;
}

function isAdjacent(tile, x, y) {
  var vertical = tile.x === x && (tile.y === y + 1 || tile.y === y - 1);
  var horizontal = tile.y === y && (tile.x === x + 1 || tile.x === x - 1);
  return vertical || horizontal;
}

function getDirLayer(tile, x, y) {
  var xDir = tile.x - x;
  var yDir = tile.y - y;
  if (xDir === -1) return { top: 25 };
  if (yDir === 1) return { top: 26 };
  if (yDir === -1) return { top: 27 };
  if (xDir === 1) return { top: 28 };
}

// Reducer functions

function click(state, action) {
  var tile = screenToTile(state, action);
  var partyX = state.partyX,
      partyY = state.partyY;

  if (tile) {
    if (isPlayer(tile, partyX, partyY)) {
      console.log("player");
    } else {
      console.log("visible");
    }
    return state;
  } else {
    console.log("hidden");
    return state;
  }
}

function addLayer(state, action) {
  var tile = screenToTile(state, action);
  var partyX = state.partyX,
      party = state.party;

  if (tile && isAdjacent(tile, partyX, partyY)) {
    return (0, _utils.updateObject)(state, {
      mapTiles: (0, _utils.updateItemInArray)(state.mapTiles, tile.id, function (item) {
        return (0, _utils.updateObject)(item, {
          layers: (0, _utils.updateObject)(item.layers, getDirLayer(tile, partyX, partyY))
        });
      })
    });
  } else {
    return state;
  }
}

exports.makeSrcTiles = makeSrcTiles;
exports.makeTestTiles = makeTestTiles;
exports.buildMap = buildMap;
exports.click = click;
exports.addLayer = addLayer;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clicked = exports.mouseUp = exports.drag = exports.mouseDown = exports.keyUp = exports.keyDown = undefined;

var _utils = __webpack_require__(6);

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

function mouseDown(state, action) {
  return (0, _utils.updateObject)(state, {
    xDragging: action.payload.x,
    yDragging: action.payload.y
  });
}

function drag(state, action) {
  if (state.xDragging !== null || state.yDragging !== null) {
    return (0, _utils.updateObject)(state, {
      offsetX: state.offsetX + action.payload.x - state.xDragging,
      offsetY: state.offsetY + action.payload.y - state.yDragging,
      xDragging: action.payload.x,
      yDragging: action.payload.y
    });
  } else {
    return state;
  }
}

function mouseUp(state, action) {
  if (state.xDragging !== null || state.yDragging !== null) {
    return (0, _utils.updateObject)(state, {
      xDragging: null,
      yDragging: null,
      xClick: action.payload.x,
      yClick: action.payload.y
    });
  }
}

function clicked(state) {
  if (state.xClick !== null && state.yClick !== null) {
    return (0, _utils.updateObject)(state, {
      xClick: null,
      yClick: null
    });
  }
}

exports.keyDown = keyDown;
exports.keyUp = keyUp;
exports.mouseDown = mouseDown;
exports.drag = drag;
exports.mouseUp = mouseUp;
exports.clicked = clicked;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusTile = exports.focusMenu = undefined;

var _utils = __webpack_require__(6);

var _constants = __webpack_require__(2);

function changeMode(state, action) {
  return (0, _utils.updateObject)(state, {
    mode: action.payload.mode
  });
}

function focusMenu(state, action) {
  return (0, _utils.updateObject)(state, {
    mode: _constants.MODE.MENU,
    activeMenu: action.payload.ref
  });
}

function focusTile(state, action) {
  return (0, _utils.updateObject)(state, {
    mode: _constants.MODE.MAP,
    focusX: action.payload.x,
    focusY: action.payload.y
  });
}

exports.focusMenu = focusMenu;
exports.focusTile = focusTile;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addInputListeners = __webpack_require__(55);

var _addInputListeners2 = _interopRequireDefault(_addInputListeners);

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

var _Loader = __webpack_require__(12);

var _Loader2 = _interopRequireDefault(_Loader);

var _atlas = __webpack_require__(67);

var _atlas2 = _interopRequireDefault(_atlas);

var _MapView = __webpack_require__(56);

var _MapView2 = _interopRequireDefault(_MapView);

var _MenuView = __webpack_require__(63);

var _MenuView2 = _interopRequireDefault(_MenuView);

var _StoryView = __webpack_require__(65);

var _StoryView2 = _interopRequireDefault(_StoryView);

var _constants = __webpack_require__(2);

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
			Promise.resolve(this.loader.setImage('tiles', _atlas2.default)).then(function (loaded) {
				_this.atlas = _this.loader.getImage('tiles');
				_this.mapView = new _MapView2.default(_this.store, _this.canvas, _this.ctx, _this.atlas);
				_this.menuView = new _MenuView2.default(_this.store, _this.canvas, _this.ctx);
				_this.storyView = new _StoryView2.default(_this.store, _this.canvas, _this.ctx);
			});
			window.requestAnimationFrame(this.tick);
		}
	}, {
		key: 'tick',
		value: function tick(elapsed) {
			window.requestAnimationFrame(this.tick);
			this.ctx.setTransform(1, 0, 0, 1, 0, 0);
			this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

			var delta = (elapsed - this._previousElapsed) / 1000.0;
			delta = Math.min(delta, 0.250); // maximum delta of 250 ms
			this._previousElapsed = elapsed;

			this.mode = this.connect.mode;
			this.update(delta);
			this.render();
		}
	}, {
		key: 'update',
		value: function update(delta) {
			if (this.mode === _constants.MODE.MAP) {
				this.mapView.update(delta);
			} else if (this.mode === _constants.MODE.MENU) {
				this.menuView.update(delta);
			} else if (this.mode === _constants.MODE.STORY) {
				this.storyView.update(delta);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.mode === _constants.MODE.MAP) {
				this.mapView.render();
			} else if (this.mode === _constants.MODE.MENU) {
				this.menuView.render();
			} else if (this.mode === _constants.MODE.STORY) {
				this.storyView.render();
			}
		}
	}]);

	return RainGame;
}();

exports.default = RainGame;

/***/ }),
/* 55 */
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
    dispatch((0, _actions.mouseDown)(event.x, event.y));
  }, false);

  canvas.addEventListener('mousemove', function (event) {
    dispatch((0, _actions.drag)(event.x, event.y));
  }, false);

  canvas.addEventListener('mouseup', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    dispatch((0, _actions.mouseUp)(x, y));
  }, false);
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

var _Camera = __webpack_require__(57);

var _Camera2 = _interopRequireDefault(_Camera);

var _Overlay = __webpack_require__(58);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapView = function () {
  function MapView(store, canvas, ctx, atlas) {
    _classCallCheck(this, MapView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new _Connect2.default(this.store);
    this.camera = new _Camera2.default(this.store, this.canvas, this.ctx, this.atlas);
    this.overlay = new _Overlay2.default(this.store, this.canvas, this.ctx, this.atlas);
  }

  _createClass(MapView, [{
    key: 'update',
    value: function update(delta) {
      var _connect$click = this.connect.click,
          xClick = _connect$click.xClick,
          yClick = _connect$click.yClick;

      xClick && yClick && this.store.dispatch((0, _actions.clicked)());
      this.camera.update(delta, xClick, yClick);
      this.overlay.update(delta, xClick, yClick);
    }
  }, {
    key: 'render',
    value: function render() {
      this.camera.render();
      this.overlay.render();
    }
  }]);

  return MapView;
}();

exports.default = MapView;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

var _actions = __webpack_require__(1);

var _constants = __webpack_require__(2);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(store, canvas, ctx, atlas) {
    _classCallCheck(this, Camera);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.playerIcon = 29;
    this.second = 0;

    this.store.dispatch((0, _actions.getPosition)());

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
    value: function getOffsetOrigin(size, x, y) {
      // move camera
      return {
        x: x * size - Math.floor(this.canvas.width / 2) + size / 2,
        y: y * size - Math.floor(this.canvas.height / 2) + size / 2
      };
      // clamp values
      // this.x = Math.max(0, Math.min(this.x, this.maxX));
      // this.y = Math.max(0, Math.min(this.y, this.maxY));
    }
  }, {
    key: 'updateClick',
    value: function updateClick(x, y) {
      var clickId = x && y && (0, _utils.screenToButtonId)(x, y, this.visibleTiles);
      if (clickId) {
        var pos = this.connect.position;
        var tile = (0, _utils.getItemById)(this.visibleTiles, clickId);
        if (Math.abs(pos.x - tile.x) + Math.abs(pos.y - tile.y) === 1) {
          this.store.dispatch((0, _actions.postMoveAndGetPosition)({
            x: tile.x,
            y: tile.y
          }));
          this.store.dispatch(register());
        }
      }
    }
  }, {
    key: 'switchIcon',
    value: function switchIcon() {
      this.playerIcon = this.playerIcon === 29 ? 28 : 29;
    }
  }, {
    key: 'update',
    value: function update(delta, x, y) {
      this.second += delta;
      if (this.second > 1) {
        this.switchIcon();
        this.second = 0;
      }
      this.updateClick(x, y);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var pos = this.connect.position;
      var sight = this.connect.sight.sight;
      var _connect$map = this.connect.map,
          srcTileSize = _connect$map.srcTileSize,
          srcTiles = _connect$map.srcTiles,
          mapTileSize = _connect$map.mapTileSize,
          mapTiles = _connect$map.mapTiles;
      var BASE = _constants.LAYER.BASE,
          MIDDLE = _constants.LAYER.MIDDLE,
          TOP = _constants.LAYER.TOP;


      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      var origin = this.getOffsetOrigin(mapTileSize, pos.x, pos.y);
      var startCol = Math.floor(origin.x / mapTileSize);
      var endCol = startCol + Math.ceil(this.canvas.width / mapTileSize + 1);
      var startRow = Math.floor(origin.y / mapTileSize);
      var endRow = startRow + Math.ceil(this.canvas.height / mapTileSize + 1);
      var offsetX = -origin.x + startCol * mapTileSize;
      var offsetY = -origin.y + startRow * mapTileSize;
      var visibleTiles = [];
      var dim = false;
      for (var col = startCol; col <= endCol; col++) {
        var _loop = function _loop(row) {
          var x = (col - startCol) * mapTileSize + offsetX;
          var y = (row - startRow) * mapTileSize + offsetY;
          var mapTile = _this.findTile(mapTiles, col, row);
          if (mapTile && Math.abs(pos.x - col) + Math.abs(pos.y - row) <= sight) {
            visibleTiles.push(Object.assign({}, mapTile, {
              xPos: Math.round(x),
              yPos: Math.round(y),
              width: mapTileSize,
              height: mapTileSize
            }));
            dim = false;
          } else {
            dim = true;
          }
          if (mapTile) {
            [BASE, MIDDLE, TOP].forEach(function (layer) {
              var id = void 0;
              // if (pos.x === col && pos.y === row && layer === TOP) {
              //   id = this.playerIcon; // Player Icon
              // } else {
              id = mapTile.layers[layer];
              // }
              typeof id === "number" && _this.ctx.drawImage(_this.atlas, srcTiles[id].x * srcTileSize, srcTiles[id].y * srcTileSize, srcTileSize, srcTileSize, Math.round(x), Math.round(y), mapTileSize - 1, mapTileSize - 1);
            });
          }
          if (dim) {
            _this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
            _this.ctx.fillRect(Math.round(x), Math.round(y), mapTileSize - 1, mapTileSize - 1);
          }
        };

        for (var row = startRow; row <= endRow; row++) {
          _loop(row);
        }
      }
      this.visibleTiles = visibleTiles;
    }
  }]);

  return Camera;
}();

exports.default = Camera;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

var _Loader = __webpack_require__(12);

var _Loader2 = _interopRequireDefault(_Loader);

var _tilesetSmall = __webpack_require__(13);

var _tilesetSmall2 = _interopRequireDefault(_tilesetSmall);

var _utils = __webpack_require__(3);

var _Party = __webpack_require__(59);

var _Party2 = _interopRequireDefault(_Party);

var _Vehicle = __webpack_require__(60);

var _Vehicle2 = _interopRequireDefault(_Vehicle);

var _Inventory = __webpack_require__(61);

var _Inventory2 = _interopRequireDefault(_Inventory);

var _Zoom = __webpack_require__(62);

var _Zoom2 = _interopRequireDefault(_Zoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Overlay = function () {
  function Overlay(store, canvas, ctx, atlas) {
    var _this = this;

    _classCallCheck(this, Overlay);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new _Connect2.default(this.store);

    this.loader = new _Loader2.default();
    Promise.resolve(this.loader.setImage('tiles', _tilesetSmall2.default)).then(function (loaded) {
      _this.atlas = _this.loader.getImage('tiles');
    }).then(function () {
      _this.party = new _Party2.default(_this.store, _this.canvas, _this.ctx, _this.atlas);
      _this.vehicle = new _Vehicle2.default(_this.store, _this.canvas, _this.ctx, _this.atlas);
      _this.inventory = new _Inventory2.default(_this.store, _this.canvas, _this.ctx, _this.atlas);
      _this.zoom = new _Zoom2.default(_this.store, _this.canvas, _this.ctx, _this.atlas);
    });
  }

  _createClass(Overlay, [{
    key: 'update',
    value: function update(delta, x, y) {
      // this.party.update(delta, xClick, yClick);
      // this.vehicle.update(delta, xClick, yClick);
      // this.inventory.update(delta, xClick, yClick);
      // this.zoom.update(delta, xClick, yClick);
    }
  }, {
    key: 'render',
    value: function render() {
      this.party.render();
      this.vehicle.render();
      this.inventory.render();
      this.zoom.render();
    }
  }]);

  return Overlay;
}();

exports.default = Overlay;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Party = function () {
  function Party(store, canvas, ctx, atlas) {
    _classCallCheck(this, Party);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new _Connect2.default(this.store);
  }

  _createClass(Party, [{
    key: 'renderPortrait',
    value: function renderPortrait(icon, idx, srcTileSize, srcTiles) {
      this.ctx.drawImage(this.atlas, srcTiles[icon].x * srcTileSize, srcTiles[icon].y * srcTileSize, srcTileSize, srcTileSize, 0, idx * 64, 64, 64);
    }
  }, {
    key: 'renderHealth',
    value: function renderHealth(health, idx) {
      var _this = this;

      [].concat(_toConsumableArray(Array(health))).map(function (_, i) {
        _this.ctx.drawImage(_this.atlas, 0, 192, // tilemap position
        16, 16, // original size
        64 + i * 24, (idx * 2 + 0.4) * 32, // screen position
        16, 16 // rendered size
        );
      });
    }
  }, {
    key: 'renderJeito',
    value: function renderJeito(jeito, idx) {
      var _this2 = this;

      [].concat(_toConsumableArray(Array(jeito))).map(function (_, i) {
        _this2.ctx.drawImage(_this2.atlas, 16, 192, // tilemap position
        16, 16, // original size
        64 + i * 24, (idx * 2 + 1.1) * 32, // screen position
        16, 16 // rendered size
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _connect$map = this.connect.map,
          srcTileSize = _connect$map.srcTileSize,
          srcTiles = _connect$map.srcTiles;
      var party = this.connect.party.party;


      party.map(function (member, idx) {
        _this3.renderPortrait(member.icon, idx, srcTileSize, srcTiles);
        _this3.renderHealth(member.health, idx);
        _this3.renderJeito(member.jeito, idx);
      });
    }
  }]);

  return Party;
}();

exports.default = Party;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
  function Vehicle(store, canvas, ctx, atlas) {
    _classCallCheck(this, Vehicle);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new _Connect2.default(this.store);
  }

  _createClass(Vehicle, [{
    key: 'renderVehicle',
    value: function renderVehicle(icon, srcTileSize, srcTiles) {
      this.ctx.drawImage(this.atlas, srcTiles[icon].x * srcTileSize, srcTiles[icon].y * srcTileSize, srcTileSize, srcTileSize, 0, 416, 64, 64);
    }
  }, {
    key: 'renderRepair',
    value: function renderRepair(repair) {
      var _this = this;

      [].concat(_toConsumableArray(Array(repair))).map(function (_, i) {
        _this.ctx.drawImage(_this.atlas, 0, 208, // tilemap position
        16, 16, // original size
        64 + i * 24, 440, // screen position
        16, 16 // rendered size
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _connect$map = this.connect.map,
          srcTileSize = _connect$map.srcTileSize,
          srcTiles = _connect$map.srcTiles;
      var vehicle = this.connect.vehicle.vehicle;


      this.renderVehicle(vehicle.icon, srcTileSize, srcTiles);
      this.renderRepair(vehicle.repair);
    }
  }]);

  return Vehicle;
}();

exports.default = Vehicle;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = function () {
  function Inventory(store, canvas, ctx, atlas) {
    _classCallCheck(this, Inventory);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new _Connect2.default(this.store);
  }

  _createClass(Inventory, [{
    key: 'renderInventory',
    value: function renderInventory(srcTileSize, srcTiles) {
      this.ctx.drawImage(this.atlas, srcTiles[38].x * srcTileSize, srcTiles[38].y * srcTileSize, srcTileSize, srcTileSize, 960 - 64 * 2, 64 * 2.75, 128, 128);
    }
  }, {
    key: 'render',
    value: function render() {
      var _connect$map = this.connect.map,
          srcTileSize = _connect$map.srcTileSize,
          srcTiles = _connect$map.srcTiles;


      this.renderInventory(srcTileSize, srcTiles);
    }
  }]);

  return Inventory;
}();

exports.default = Inventory;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Zoom = function () {
  function Zoom(store, canvas, ctx, atlas) {
    _classCallCheck(this, Zoom);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.connect = new _Connect2.default(this.store);
  }

  _createClass(Zoom, [{
    key: 'renderZoom',
    value: function renderZoom(srcTileSize, srcTiles) {
      this.ctx.drawImage(this.atlas, srcTiles[36].x * srcTileSize, srcTiles[36].y * srcTileSize, srcTileSize, srcTileSize, 960 - 64, 0, 64, 64);
      this.ctx.drawImage(this.atlas, srcTiles[37].x * srcTileSize, srcTiles[37].y * srcTileSize, srcTileSize, srcTileSize, 960 - 64 * 2, 0, 64, 64);
      this.ctx.drawImage(this.atlas, srcTiles[35].x * srcTileSize, srcTiles[35].y * srcTileSize, srcTileSize, srcTileSize, 960 - 64 * 3, 0, 64, 64);
    }
  }, {
    key: 'render',
    value: function render() {
      var _connect$map = this.connect.map,
          srcTileSize = _connect$map.srcTileSize,
          srcTiles = _connect$map.srcTiles;


      this.renderZoom(srcTileSize, srcTiles);
    }
  }]);

  return Zoom;
}();

exports.default = Zoom;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Menu = __webpack_require__(64);

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MenuView = function () {
  function MenuView(store, canvas, ctx) {
    _classCallCheck(this, MenuView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.menu = new _Menu2.default(this.store, this.canvas, this.ctx);
  }

  _createClass(MenuView, [{
    key: 'update',
    value: function update(delta) {
      this.menu.update(delta);
    }
  }, {
    key: 'render',
    value: function render() {
      this.menu.render();
    }
  }]);

  return MenuView;
}();

exports.default = MenuView;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Menu = function () {
  function Menu(store, canvas, ctx) {
    _classCallCheck(this, Menu);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new _Connect2.default(this.store);
    this.setMenu();
  }

  _createClass(Menu, [{
    key: 'setMenu',
    value: function setMenu() {
      this.selectedId = null;
      var menu = this.connect.getMenuById();
      this.text = menu.text;
      this.buttons = menu.buttons;
    }
  }, {
    key: 'chooseButton',
    value: function chooseButton() {
      var button = (0, _utils.getItemById)(this.buttons, this.selectedId);
      this.store.dispatch(button.action);
      setTimeout(this.setMenu());
    }
  }, {
    key: 'updateKeys',
    value: function updateKeys() {
      var _this = this;

      var keys = this.connect.keys;
      keys.map(function (key) {
        if (key >= "1" && key <= _this.buttons.length.toString()) _this.selectedId = parseInt(key);
        if (["Escape", "Backspace", "Delete"].includes(key)) _this.selectedId = null;
        if (_this.selectedId && key === "Enter") _this.chooseButton();
      });
    }
  }, {
    key: 'updateClick',
    value: function updateClick() {
      var _connect$click = this.connect.click,
          xClick = _connect$click.xClick,
          yClick = _connect$click.yClick;

      if (xClick && yClick) {
        var clickId = (0, _utils.screenToTextId)(xClick, yClick, this.buttons);
        this.store.dispatch((0, _actions.clicked)());
        if (this.selectedId && this.selectedId === clickId) {
          this.selectedId = clickId;
          this.chooseButton();
        } else {
          this.selectedId = clickId;
        }
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.updateKeys();
      this.updateClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      var fontSize = 28;
      var lineSize = fontSize + 4;
      this.ctx.font = fontSize + 'px MECC';
      this.ctx.fillStyle = '#FFF';
      this.ctx.textAlign = 'start';
      this.ctx.textBaseline = 'alphabetic';

      var linePos = 2;
      this.text.map(function (line) {
        _this2.ctx.fillText(line, lineSize, linePos * lineSize);
        linePos++;
      });
      linePos++;

      this.buttons.map(function (button, idx) {
        _this2.ctx.fillStyle = _this2.selectedId === button.id ? '#FF0' : '#FFF';
        var buttonText = button.id + '. ' + button.text;
        _this2.ctx.fillText(buttonText, 2 * lineSize, linePos * lineSize);
        (0, _utils.addButtonCoords)(button, {
          xPos: 2 * lineSize,
          yPos: lineSize * linePos,
          width: _this2.ctx.measureText(buttonText).width,
          height: fontSize
        });
        linePos++;
      });
      linePos++;

      this.ctx.fillStyle = '#FFF';
      var promptText = 'What is your choice? ' + (this.selectedId || '') + '_';
      this.ctx.fillText(promptText, lineSize, linePos * lineSize);
    }
  }]);

  return Menu;
}();

exports.default = Menu;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Story = __webpack_require__(66);

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoryView = function () {
  function StoryView(store, canvas, ctx, atlas) {
    _classCallCheck(this, StoryView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = atlas;

    this.story = new _Story2.default(this.store, this.canvas, this.ctx);
  }

  _createClass(StoryView, [{
    key: 'update',
    value: function update(delta) {
      this.story.update(delta);
    }
  }, {
    key: 'render',
    value: function render() {
      this.story.render();
    }
  }]);

  return StoryView;
}();

exports.default = StoryView;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _actions = __webpack_require__(1);

var _Connect = __webpack_require__(0);

var _Connect2 = _interopRequireDefault(_Connect);

var _utils = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Story = function () {
  function Story(store, canvas, ctx) {
    _classCallCheck(this, Story);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new _Connect2.default(this.store);
    this.setEvent();
  }

  _createClass(Story, [{
    key: 'setEvent',
    value: function setEvent() {
      // TODO: Is this the right way to do this?
      this.selectedId = null;
      var story = this.connect.story;
      this.text = story.text;
      this.buttons = story.buttons;
    }
  }, {
    key: 'chooseButton',
    value: function chooseButton() {
      var button = (0, _utils.getItemById)(this.buttons, this.selectedId);
      console.log(button.ref); // TODO: Implement async request / response
    }
  }, {
    key: 'updateKeys',
    value: function updateKeys(delta) {
      var _this = this;

      var keys = this.connect.keys;
      keys.map(function (key) {
        if (key >= "1" && key <= _this.buttons.length.toString()) _this.selectedId = parseInt(key);
        if (["Escape", "Backspace", "Delete"].includes(key)) _this.selectedId = null;
        if (_this.selectedId && key === "Enter") _this.chooseButton();
      });
    }
  }, {
    key: 'updateClick',
    value: function updateClick() {
      var _connect$click = this.connect.click,
          xClick = _connect$click.xClick,
          yClick = _connect$click.yClick;

      if (xClick && yClick) {
        var clickId = (0, _utils.screenToTextId)(xClick, yClick, this.buttons);
        this.store.dispatch((0, _actions.clicked)());
        if (this.selectedId && this.selectedId === clickId) {
          this.selectedId = clickId;
          this.chooseButton();
        } else {
          this.selectedId = clickId;
        }
      }
    }
  }, {
    key: 'update',
    value: function update(delta) {
      this.updateKeys(delta);
      this.updateClick();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      var fontSize = 28;
      var lineSize = fontSize + 4;
      this.ctx.font = fontSize + 'px MECC';
      this.ctx.fillStyle = '#6F6';
      this.ctx.textAlign = 'start';
      this.ctx.textBaseline = 'alphabetic';

      var linePos = 2;
      this.text.map(function (line) {
        _this2.ctx.fillText(line, lineSize, linePos * lineSize);
        linePos++;
      });
      linePos++;

      this.buttons.map(function (button, idx) {
        _this2.ctx.fillStyle = _this2.selectedId === button.id ? '#FF0' : '#6F6';
        var buttonText = button.id + '. ' + button.text;
        _this2.ctx.fillText(buttonText, 2 * lineSize, linePos * lineSize);
        (0, _utils.addButtonCoords)(button, {
          xPos: 2 * lineSize,
          yPos: lineSize * linePos,
          width: _this2.ctx.measureText(buttonText).width,
          height: fontSize
        });
        linePos++;
      });
      linePos++;

      this.ctx.fillStyle = '#6F6';
      var promptText = 'What is your choice? ' + (this.selectedId || '') + '_';
      this.ctx.fillText(promptText, lineSize, linePos * lineSize);
    }
  }]);

  return Story;
}();

exports.default = Story;

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAEACAYAAAA0pH13AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gYGAQQX2w6QoQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHgBALN/TIABAN4A/wDXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAANwAAAAAAAAAAAAAAAAAAACkAAAAAAAAA1wAAAAAAAAAAAACayU0ANg3bAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAAMrzJQAAAAAANg3bAMrzJQAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAyvMlAAAAAAAAAAAANg3bAAAAAAAAAAAAyvMlAGaCswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA1wAAAAAAAAAAAAAAKQAAAKAAAAA3AAAAAAAAACkAAAAAAAAAoAAAAAAAAAA3AAAA1wAAAAAAAAAAAAAAKQAAAKAAAAA3AAAAAAAAACkAAAAAAAAAoAAAAAAAAAAAAAAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAyvMlAAAAAAA2DdsAAAAAADYN2wAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0A/vPzAAAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAKQAAACkAAACgAAAAAAAAALkAAAAAAAAA1wAAAJAAAADwAAAAAAAAAAAAAAAAAAAAKQAAACkAAACgAAAAAAAAALkAAAC5AAAAkAAAAJAAAADwAAAANwAAAAAAAAAAAAAAkAAAAJAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAHy4nAAAAAAAAAAAAAAAAAAAAAAAWXk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEALkAAAC5AAAAAAAAAAAAAAAQAAAA8AAAAKkAAACAAAAAKQAAAAAAAADXAAAAAAAAAAAAAADXAAAAuQAAAAAAAAAQAAAA8AAAAAAAAAAAAAAAEAAAAEcAAAAAAAAAAAAAAKkAAAAAAAAAEAAAAKAAAAAAAAAAyQAAADcAAAAAAAA2DdsAAAAAAMrzJQA2DdsAyvMlAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAADYN2wAAAAAAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAXgD/AAAAAAAQAAAAAAAAAAAAAAAAAAAAcAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAKQAAAKAAAAAAAAAA8AAAAAAAAAAAAAAA8AAAAIAAAADXAAAAAAAAAAAAAAAAAAAAqQAAAAAAAAAAAAAAIAAAAAAAAAAAAAAA8AAAAAAAANAdKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQD/AAAAAAAAAAAY4loBAAAAAAAAAAD+8/MAAAAAAAAAAADqorMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAPAAAAAAAAAAEAAAAEcAAADXAAAAAAAAAAAAAAAAAAAAKQAAAAAAAACgAAAAAAAAAAAAAABwAAAAAAAAAKAAAABHAAAA1wAAAAAAAAAAAAAAKQAAAKAAAAAgAAAAAAAAADcAAAAAAAAAAAAAAAAAAAApAAAAgAAAAB0AAAAAAADK8yUANg3bAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAANg3bAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3b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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAKkAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZgCzAAAAAAAAAAAAAADYAAAAAAAAAAAAAAAAAAAA2AAAAAAAAADYAAAAAAAAANgAFl5NAAAAAAAAACUAAAAAAAAAJQAAAAAAAAAAAAAAAADqotgAAAAAAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAg0NAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAfLicAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHy4nAAINDQAAAAAAAAAAAAINDQAAAAAAFl5NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAfLicAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwACDQ0AAAAAAAAAAAACDQ0AAAAAABZeTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAB8uJwAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPf5gAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wDh0tkA/vPzAAAAAABDRTcAHSEaAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0hGgBFUkQAAAAAAOHS2QD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA4dLZAP7z8wAAAAAAQ0U3AB0hGgACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAINDQAAAAAAAAAAAP7z8wAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5NAAAAAAACDQ0A/vPzAAAAAAACDQ0AAAAAAP7z8wAAAAAA6qKzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk0AAg0NAAAAAAAAAAAA/vPzAAAAAAACDQ0A/vPzAOqiswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTQAAAAAAAg0NAP7z8wAAAAAAAg0NAAAAAAD+8/MAAAAAAOqiswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAg0NAAAAAAAAAAAA/vPzAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0U3AB0hGgAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAQ0U3AB0hGgACDQ0AAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAOPf5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAA/vPzAAAAAAAdIRoARVJEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAP7z8wAAAAAAHSEaAEVSRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAA/vPzAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAADh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+n6VpAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswHQiygA+fv+AAcFAgAAAAAA+fv+AAcFAgAwddgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+APn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAg0NAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAINDQAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN1jaAPn7/gAAAAAABwUCAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHy4nAAINDQAAAAAAAAAAAAINDQAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAfLicAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwACDQ0AAAAAAAAAAAACDQ0AAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAHy4nAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAA+fv+AAAAAAAA1wAAAPAAAADwAAAAAAAAAGAAAAA3AAAANwAAAAAAAAAAAAAAyQAAAAAAAADXAAAAAAAAAAAAAAApAAAAyQAAAFcAAAApAAAAAAAAAAAAAAAAAAAAkAAAAPAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igABwUCAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAcFAgD5+/4A+fv+AAAAAAAARwAAALkAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAAqQAAAFcAAAApAAAAAAAAAKAAAAAAAAAAKQAAAKAAAAAAAAAAAAAAAPAAAAAAAAAA8AAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAQAAAAAAAAAMkAAADwAAAAAAAAAEcAAAAAAAAAyQAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAA3WNoAACkAAAApAAAARwAAAAAAAACgAAAAAAAAAAAAAAAAAAAAKQAAAAAAAAAQAAAAAAAAANcAAADXAAAANwAAAGAAAACgAAAAAAAAAPAAAADwAAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN1jaAAcFAgAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAPn7/gAHBQIAMFPYAD/JJwAA4AAAAAAAAADwAAA/yScAAOAAAAAAAAAA8AAAP8knAADwAAAAqQAAALkAAADwAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAAAAAAAAAAAAAAAAAA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAHBQIAAAAAAAcFAgDQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAcFAgAAAAAABwUCANCtKAAA1wAAANcAAAApAAAAoAAAAAAAAADJAAAAAAAAAAAAAADXAAAAAAAAAEcAAAApAAAAAAAAAAAAAAAAAAAAkAAAAPAAAABgAAAARwAAAEcAAABHAAAAVwAAAIAAAOpXswEAAAAAAAAAAAAAAAAdIRoAAAAAAAINDQAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAPn7/gD5+/4AAAAAAAAAAADQrSgAAAAAAAAIJgAA6CYAAPgmAAAAAAAACCYAAOgmAAD4JgAAAAAAAAgmAD/ZJwAA+CYAAPgmAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAcFAgD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAC5AAAAAAAAAEcAAAAAAAAAKQAAAKAAAAAAAAAAAAAAAPAAAAAAAAAARwAAANcAAAAAAAAAAAAAACkAAADXAAAAoAAAADcAAAAAAAAAAAAAAAAAAOHS2QACDQ0AAAAAAAAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAABwUCAAAAAAD5+/4AAAAAAPn7/gCKTwAAAAAAAAcFAgAAAAAAACUAAPn7/wAAAAAABwUCAPkg/gAAAAAAByUBAPn7/wAHBQIAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAHBQIAAMkAAACpAAAAqQAAAAAAAAAAAAAA8AAAAAAAAADwAAAAAAAAAAAAAADXAAAANwAAAGAAAADwAAAAAAAAAPAAAAAAAAAAAAAAACkAAAApAAAAoAAAAMkAAAAAAAAAyQAA6lezAQAAAAAAAAAAAAAAAP7z8wAdIRoAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAD5+/4A+fv+AAAAAAAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+APn7/gAAAAAABwUCAAcFAgD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAD5+/4ABwUCAPn7/gAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAApAAAA1wAAAAAAAAAAAAAAAAAAAEcAAAAAAAAAKQAAAAAAAACQAAAAuQAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAAAAAOHS2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCANDWKAAwANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gAHBQIABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAANwAAANcAAAAAAAAAAAAAACkAAACgAAAAYAAAAKAAAAAAAAAAAAAAADcAAACgAAAANwAAAAAAAADXAAAAAAAAAHAAAACgAAAAYAAAANcAAAAAAAAAAAAAAAAAAAAAAADqN7MB0NYoAAAAAAD5+/4ABwUCAPn7/gAHBQIAMHXYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAMFPYAAB1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/7/AAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4BAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAACkAAAAAAAAAoAAAAAAAAACgAAAAAAAAAPAAAAAAAAAAyQAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAADcAAADXAAAAAAAAAAAAAAApAAAAoAAAAAAAAAA3AAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAHBQIA+fv+AAcF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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAABQAA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4ABwUCAAAAAAAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAPn7/gA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+ADBT2AAAoAAAAAAAAAAAAAAAKQAAAAAAAAAAAAAAAAAAAJAAAAC5AAAAAAAAAMkAAAAAAAAAAAAAACkAAADXAAAAAAAAAAAAAAAAAAAAKQAAACkAAACgAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAHBQIAAAAAAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzf0yABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIA+fv+AADXAAAAAAAA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AAA3L9oBAMkAAAAAAAAANwAAACkAAACgAAAAAAAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAQBuAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAADQ1ij/AAAAAAAAAAD5+/4ABwUCAPn7/gA3+NoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAADJAAAAAAAAAPAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAuQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAA8AAAABAAAQAAAAAAAAAAADcAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAADwAAAAAAAAAPAAAAAQAP8AAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAALkAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAAAAAAAAAAANDWKAAAAAAAAAAAAPn7/gAHBQIAAAAAADDz2AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAEAPAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAPkY/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuQAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADwAAAA8AAA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+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIA+fv+AAcFAgD5+/4ABwUCAPn7/gA3etoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Iso//n7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIA+fv+AAcFAgD5+/4ABwUCAPn7/gAHBQIA+fv+AAcFAgAwKtgBACkAAADXAAAAyQAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAAAAAAAApAAAAoAAA0A0o/wAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIA+fv+AAcFAgD5+/4ABwUCAPn7/gAHBQIA+fv+AQAAAAAHBQIA+fv+AAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAL5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIA0NYoAAAAAAD5+/4A+fv+AAAAAAAwKtgAAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAPn7/gAHBQIAMCrYAAAAAAAA1wAAAAAAAAAAAAAAAAAAAPAAAADwAAAAAAAAAAAAAAApAAAAKQAAAKAAAAA3AAD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAADAq2AAHBQIABwUCAPn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAD5+/4A+fv+AAAAAAAHBQIABAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAcFAgD5+/4ABwUCANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIAAAAAAPn7/gDQ1igAMOPYAABHAAAAAAAAADcAAADJAAAARwAAAAAAAAAAAAAAAAAAAAAAAACQAAAARwAAACkAAAfWAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIA0NYoAPn7/gAAAAAABwUC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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+AAcFAgAAAAAABwUCAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+AAcFAgAHBQIAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIA+fv+AAcFAgAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgD5+/4ABwUCADAq2ADK8yUAyvMlAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAPn7/gAHBQIAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAcFAgAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAAAAAAAAAAAADYN2wA2DdsAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAANg3bAAAAAAAAAAAAyvMlAAAAAAA2DdsAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAHBQIA+fv+ANDWKAAwANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAA0NYoADAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAADQ1igAyvMlADYN2wA2DdsAAAAAAAAAAADK8yUANg3bAMrzJQAAAAAANg3bAAAAAADK8yUANg3bAAAAAAA2DdsAAAAAAMrzJQA2DdsAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAABwUCAAAAAAD5+/4AAAAAAMnRJgA3ANoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4AAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAADcAAAApAAAAoAAAAAAAAAAAAAAAYAAAANcAAADWAAAHBQIAAAAAAAcFAgD5+/4A0NYoADB+2AAAAAAAAAAAAAA3AAAAyQAAAAAAAAA3AAAAAAAAAAAAAAAAAAAAKQAAANcAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAA2DdsAyvMlAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bADYN2wAAAAAAAAAAADYN2wDK8yUAyvMlAAAAAAAAAAAANg3bAMrzJQAAAAAANg3bAMrzJQAAAAAAAAAAAAAAAAA2DdsAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAyQAAAMkAAAC5AAAAyQAAAAAAAAAAAAAAyQAAAKAAAAAAAAAAAAAAAAAAAACgAAAAyQAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAyvMlAAAAAADK8yUAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAANg3bAAAAAADK8yUANg3bAAAAAADK8yUAyvMlAAAAAAAAAAAABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADwAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAMkAAAC5AAAAuQAAAAAAAAAAAAAAyQAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAA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+/4ABwUCAPkg/gAHBQIA+SD+AAcFAgD5+/4AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bADYN2wAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4A+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4A+fv+AAAAAAAHBQIABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAD5+/4AAAAAAPn7/gAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAyvMlAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAMrzJQAAAAAAyvMlADYN2wAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAHBQIABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYypBQAAIABJREFUAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAPn7/gAHBQIABwUCAAcFAgAHBQIA+fv+APn7/gD5+/4ABwUCAAcFAgD5+/4A0NYoAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABBwUCAQAAAAEHBQIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTQD5+/4AAAAAAAAAAAAAAAAA+fv+AAcFAgAWXk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+ADYN2wA2DdsAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAPn7/gD5+/4A+fv+APn7/gAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gD5+/4A+fv+AAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAADYN2wDK8yUAAAAAAAAAAAA2DdsAyvMlAAAAAAAAAAAANg3bADYN2wDK8yUAyvMlAMrzJQAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAPn7/gAAAAAABwUCAAcFAgAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4A+fv+APn7/gAAAAAABwUCAAAAAAAHBQIABwUCAAAAAAAHBQIABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAAAAAAD5+/4ABwUCAPn7/gACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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BwUCAPn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAA+fv+APn7/gAAAAAABwUCAAcFAgD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAA+fv+APn7/gAAAAAABwUCAAQHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4ABwUCAPn7/gD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBQIA+fv+AAcFAgD5+/4A+fv+AAcFAgAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAyvMlAAAAAADK8yUANg3bADYN2wAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAABPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAD5+/4ABwUCAPn7/gAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAPn7/gAHBQIA+fv+AAAAAAAwU9gAyagmAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAA+fv+AAcFAgD5+/4AAAAAADB12AAAAAAAAADYAAAAAAAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQiygAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4ABwUCAAAAAAD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAA+fv+AAAAAAAEAAAAAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gD5+/4ABwUCAPn7/gAAAAAA+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gD5+/4AAAAAAAcFAgD5+/4A+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+APn7/gAHBQIA+fv+AADXAAAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5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BQIAAAAAAAcFAgD5+/4AN1jaAAB6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAAAAAABwUCADAq2AAAAAAA6qKzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAA/wAAAAAAAAD5+/4AAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAANDWKAD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAMqGJgAAetoAAAAAAMqGJgAAAAAABwUCAPn7/gAHBQIAAHXYAAAAAADRiygAAHXYAAAAAADRiygA+fv+AAcFAgAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAPn7/gAH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ALkAAQAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAAAAAAAAAAAAAAAP8AAAAAAAAAAADJAAAAAAAAAPAAAAAQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Iso/wAAAAAAAAAA+fv+AAcFAgD5+/4AN3raAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuAP8AAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADwAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAABADwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAABAAAAAAAAAAyQAAAPAAAAAAAAAAHQAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAABAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAALkAAAAAAAAA8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAABHAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAQAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuQAAAAAAAADwAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAQAAAAAAAAAMkAAADwAAAAAAAAAEcAAAAAAAAAyQAAAAAAAADwAAAA8AAAABAAAAAAAAAAAAAAAPAAAAAQAAAAAAAAAAAAAADwAAAAAAAAAAAAAAC5AAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAABHAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAQAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuQAAAAAAAADwAAACABAAAAAAAAAAAAAAP8knAADgAAAAAAAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAAAAAAAHBQIABwUCAAAAAAAAAAAABwUCAD+5JwAA8AAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAADwAAAA8AAAP8knAAAAAAAAEAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAP7knAADwAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAPAAAADwAAA/yScAAAAAAAAQAAAAAAAAAAAAAD/JJwAA4AAAAAAAAADwAAA/yScAAOAAAAAAAAAA8AAAP8knAADwAAAAqQAAALkAAADwAAA/uScAAPAAAAAAAAA/uScAAPAAAADwAAA/yScAAOAAAAAAAAAA8AAAP8knAADwAAAA8AAAAPAAAD/JJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdY2gAHBQIABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAP7knAADwAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAPAAAADwAAA/yScAAAAAAAQA+CYAP9kBAMEv/wAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAD4JgAAAAAAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAAAAAAAAAAAAAAAAAAAgmAAD4AAA/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AAD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAcFAgAHBQIABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAPn7/gD5+/4A+fv+AAcFAgAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAA+fv+AAcFAgAHBQIA+fv+AAAAAAAAAAAABwUCAAAAAAAHBQIA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAcFAgDQ1igAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAHBQIABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAPn7/gD5+/4A+fv+AAcFAgAHBQIAAAAAADcv2gAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gAHBQIAAgAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAcFAgAHBQIABwUCAPn7/gD5+/4AAAAAAAAAAAD5+/4A+fv+AAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+APn7/gD5+/4A+fv+AAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAAcFAgAHBQIA+fv+APn7/gAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAHBQIABwUCAAAAAAD5+/4AAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAwU9gA+fv+APn7/gAAAAAA+fv+AAcFAgAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+APn7/gD5+/4A+fv+AAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAAcFAgAHBQIA+fv+APn7/gAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAHBQIABwUCAAAAAAD5+/4AAAAAAPn7/gAHBQIAAAAAAAAAAAAEBwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gD5+/4ABwUCAPn7/gAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gD5+/4ABwUCAPn7/gAAAAAA+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAANy/aAMnRJgAHBQIAAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+APn7/gAHBQIA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4A+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAADXAAAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4A+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAANcAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAABQAA+fv+AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA6qKzABZeTQAAAAAA4dLZAOHS2QAAAAAAAAAAAAAAAAAAAAAA6qKzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAADAq2AAAAAAA6qKzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4ABwUCAAAAAAAwKtgAAH4AAACCAAAAfgAAAAAAAAAAAAAAAAAAAAAAAACCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCAAAAfgAAAAAAAAAAAAD5+/4ABwUCAPn7/gAHBQIAAAAAADAq2AAAAAAA+fv+AAcFAgD5+/4ABwUCAAAAAAAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAdIRoAJiQdALuuvAAAAAAAHy4nAOPf5gD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAG4AAADwAAAAEAAAAAAAAADwAAAAAAAAAG4AAAAAAAAAbgAAABAAAADwAAAAEAAAAAAAAP94BgDQ0voAAAAAAAAAAAAAAAAAMaYAAP+IBgDQ0voAAEoAAAAAAAAAAAAAMaYAAAAYAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2ADQrSgA+fv+AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAABwUCAPn7/gDQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPf5gDj3+YAAAAAAAAAAADh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAcFAgD5+/4A0NYoADCC2ABrAsQAAAAAAAAAAACV/jwAAF4AAD/ZJwDBJ9kAAAAAAD/JJwDBJ9kAP9knAMEn2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/yScAAADfAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAABwUCAPn7/gDQ1igAMH7YAAcFAgAAAAAAAAAAAAcFAgD5+/4A0NYoADC12AAAAAAAAAAAAAApAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAA3AAAAKQAAAKAAAAAAAAAAAAAAAGAAAADXAAD50f4ABwUCAAAAAAAHBQIA+fv+ANDWKAAwftgAAAAAAAAAAAAANwAAAMkAAAAAAAAANwAAAAAAAAAAAAAAAAAAANcAAPn7/gAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+AAAAAAAAAAAAawLEAAAAAAAAAAAAlf48AAAAAAAACCYAAAAAAAAIJgAAAAAAwS//AAAIJgAAAAAAAAgmAP+YBgAAAAAAMC4GAAAAAAAAAAAAAAAAAMC/3wAAAAAAMC4GAAAAAAAAAAAAAAAAAM9aAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAAAAAAA8AAAAAAAAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAMkAAADJAAAAuQAAAMkAAAAAAAAAAAAAAMkAAACgAAAAAAAAAAAAAAAAAAAAoAAAAMkAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAADwAAAAAAAAAAAAAADJAAAAAAAAAAAAAADJAAAAAAAAAAAAAAAAAADQ1igABwUCAAcFAgAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wACDQ0AHSEaAOHS2QD+8/MA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gCV/jwAAIWxAAAAAAAAALEAAHtPAAAAAADBL/8A/5nZAAFnJwD/mdkAAWcnAMEv/wAAAAAAAAAAAAEK+gD/9gYAAAAAAAAAAAAAAAAAAAAAAAEK+gD/9gYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAyQAAAPAAAAAAAAAARwAAAAAAAADJAAAAAAAAAPAAAADwAAAAEAAAAAAAAAAAAAAA8AAAABAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAA0AAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAAAdAAD5+/4AAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAAg0NAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAN1jaAACFsQAAAAAAAAAAAAB7TwAAAAAAAAAAAP+Z2QABZycAAAAAAAFnJwD/mdkAAAAAAP+Q4AAAAAAAAAAAAAAAAAAwLgYAAAAAADAuBgAAAAAAAAAAAAAAAAAwLgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgA3WNoAP8knAAAAAAAAAAAAAAAAAAAAAAAHBQIAN1jaAADwAAA/yScAAPAAAACpAAAAuQAAAPAAAD+5JwAA8AAAAAAAAD+5JwAA8AAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAADwAAAAAAAAAAAAAAAAAAAAAAAABwUCADdY2gA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAAAAAAcFAgAHBQIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/yagmAAcFAgD5+/4ABwUCAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk0AAAAAAAINDQAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAADqorMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A/8moJgAHBQIA+fv+AAcFAgAAAAAAMNv+AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeNoAyagmAAcFAgD5+/4ABwUCAAAAAABvrP8AwafZAMmoJgAHBQIA+fv+AAcFAgAAAAAAMNv+AD/RAQDBL/8AP9EBAMEv/wAAAAAAP9EBAMEv/wAAAAAAP9EBAMEv/wAAAAAAP9EBAMEv/wAAAAAAAAAAAD/RAQDBL/8AAAAAAAB42gDJqCYABwUCAPn7/gAHBQIAAAAAAG+s/wDBL/8AAAAAAAAAAAA/0QEAwS//AAAAAAAAAAAAP9EBAMEv/wDQJQIAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0U3ANrc4wDj3+YAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAABwUCAPn7/gAAAAAA+fv+AAAAAADJIAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgD5+/4ABwUCADDXAAAHBQIA+fv+AAAAAAD5+/4AAAAAAIpPAAA31wAABwUCAPn7/gAAAAAA+fv+AAAAAADQJQIA+SD+AAAAAAAHJQEA+fv/AAcFAgD5IP4ABwUCAAAAAAAAJQAA+fv/AAAAAAAAIP8ABwUCAAAAAAAAAAAA+SD+AAAAAAAHBQIAMNcAAAcFAgD5+/4AAAAAAPn7/gAHBQIAkVQBAAAAAQAAAAAA+fv+AAAg/wAAAAAABwUCAAAAAAD5IP4ABwUCAPn7/gAHBQIA+fv+AAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAAAAAAC7rrwA49/mAP7z8wAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgAAAAAABwUCAAAAAAAAAAAA+fv+APn7/gAAAAAABwUCAAcFAgD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAA+fv+APn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAHBQIABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAABwUCAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4A+fv+AAAAAAAHBQIABwUCAPn7/gAAAAAAAAAAAAcFAgAHBQIAAAAAAAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAP7z8wAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gAHBQIA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBSD8CBsAACAASURBVAIA+fv+AAcFAgDQ1igA+fv+AAcFAgD5+/4AAAAAAPn7/gAHBQIA0NYoAPn7/gAHBQIA+fv+AAAAAAD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAPn7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"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = {"height":20,"infinite":false,"layers":[{"data":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"name":"BOTTOM","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[0,0,0,7,13,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,11,8,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,13,16,0,0,0,0,0,0,28,0,0,0,0,0,0,8,0,0,0,6,0,16,0,0,0,0,0,27,20,0,0,0,0,0,0,6,0,0,0,12,11,31,8,0,0,0,0,0,24,30,0,0,0,0,0,32,21,21,4,21,21,26,32,21,21,21,18,0,16,0,0,0,0,0,0,12,11,8,0,0,0,16,12,8,0,0,22,21,25,21,18,0,0,0,0,0,0,12,8,0,0,16,0,6,7,8,0,0,0,0,22,18,0,0,0,0,0,7,13,0,0,16,7,10,6,12,8,0,0,0,0,22,19,21,21,0,0,12,11,8,7,31,13,12,13,0,12,11,5,8,0,0,16,0,0,0,0,0,0,14,13,16,0,0,0,0,0,0,0,6,0,0,16,0,0,0,0,0,7,13,0,16,0,0,0,0,0,0,0,12,8,7,31,8,0,0,0,0,12,8,0,24,3,30,0,0,0,0,0,0,12,13,16,12,11,0,0,7,11,13,0,16,0,0,0,0,0,0,0,0,0,0,16,0,0,7,8,12,8,27,21,20,0,0,0,0,0,0,0,0,0,0,16,0,0,6,12,9,13,0,0,16,0,0,0,0,0,0,0,0,0,0,16,0,0,13,0,12,11,11,8,29,0,0,0,0,0,0,0,0,27,21,26,21,30,0,0,0,7,11,13,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":20,"name":"MIDDLE","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextobjectid":1,"orientation":"orthogonal","renderorder":"right-down","tiledversion":"1.1.5","tileheight":32,"tilesets":[{"firstgid":1,"source":"atlas.json"}],"tilewidth":32,"type":"map","version":1,"width":20}

/***/ })
/******/ ]);