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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// Type and action definitions

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

var CHANGE_MODE = exports.CHANGE_MODE = 'CHANGE_MODE';
var changeMode = exports.changeMode = function changeMode(mode) {
  return {
    type: CHANGE_MODE,
    payload: { mode: mode }
  };
};

var FOCUS_TILE = exports.FOCUS_TILE = 'FOCUS_TILE';

var REGISTER_REQUEST = exports.REGISTER_REQUEST = 'REGISTER_REQUEST';
var REGISTER_RESPONSE = exports.REGISTER_RESPONSE = 'REGISTER_RESPONSE';
var REGISTER_ERROR = exports.REGISTER_ERROR = 'REGISTER_ERROR';

var registerRequest = exports.registerRequest = function registerRequest(user, email, password) {
  return {
    type: REGISTER_REQUEST,
    meta: { send: true },
    payload: { user: user, email: email, password: password }
  };
};

var registerError = exports.registerError = function registerError(code) {
  return {
    type: REGISTER_ERROR,
    payload: { code: code }
  };
};

var LOGIN_REQUEST = exports.LOGIN_REQUEST = 'LOGIN_REQUEST';
var LOGIN_RESPONSE = exports.LOGIN_RESPONSE = 'LOGIN_RESPONSE';
var LOGIN_ERROR = exports.LOGIN_ERROR = 'LOGIN_ERROR';

var loginRequest = exports.loginRequest = function loginRequest(user, password) {
  return {
    type: LOGIN_REQUEST,
    meta: { send: true },
    payload: { user: user, password: password }
  };
};

var loginError = exports.loginError = function loginError(code) {
  return {
    type: LOGIN_ERROR,
    payload: { code: code }
  };
};

var LOGOUT_REQUEST = exports.LOGOUT_REQUEST = 'LOGOUT_REQUEST';
var LOGOUT_RESPONSE = exports.LOGOUT_RESPONSE = 'LOGOUT_RESPONSE';
var LOGOUT_ERROR = exports.LOGOUT_ERROR = 'LOGOUT_ERROR';

var logoutRequest = exports.logoutRequest = function logoutRequest(user) {
  return {
    type: LOGOUT_REQUEST,
    meta: { send: true },
    payload: { user: user }
  };
};

var logoutError = exports.logoutError = function logoutError(code) {
  return {
    type: LOGOUT_ERROR,
    payload: { code: code }
  };
};

var POSITION_REQUEST = exports.POSITION_REQUEST = 'POSITION_REQUEST';
var POSITION_RESPONSE = exports.POSITION_RESPONSE = 'POSITION_RESPONSE';
var POSITION_ERROR = exports.POSITION_ERROR = 'POSITION_ERROR';

var positionRequest = exports.positionRequest = function positionRequest(position) {
  return {
    type: POSITION_REQUEST,
    meta: { send: true },
    payload: { position: position }
  };
};

var positionError = exports.positionError = function positionError(code) {
  return {
    type: POSITION_ERROR,
    payload: { code: code }
  };
};

/***/ }),
/* 1 */
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
    key: "connected",
    get: function get() {
      return this.store.getState().connected;
    }
  }, {
    key: "loggedIn",
    get: function get() {
      return this.store.getState().loggedIn;
    }
  }, {
    key: "error",
    get: function get() {
      return this.store.getState().error;
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
          zoom = _store$getState2.zoom,
          mapTiles = _store$getState2.mapTiles;

      return { zoom: zoom, mapTiles: mapTiles };
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
    key: "positionId",
    get: function get() {
      return this.store.getState().position;
    }
  }, {
    key: "positionCoords",
    get: function get() {
      var _store$getState5 = this.store.getState(),
          mapWidth = _store$getState5.mapWidth,
          mapHeight = _store$getState5.mapHeight,
          position = _store$getState5.position;

      return {
        x: position % mapWidth,
        y: Math.floor(position / mapHeight)
      };
    }
  }, {
    key: "party",
    get: function get() {
      var _store$getState6 = this.store.getState(),
          party = _store$getState6.party;

      return { party: party };
    }
  }, {
    key: "vehicle",
    get: function get() {
      var _store$getState7 = this.store.getState(),
          vehicle = _store$getState7.vehicle;

      return { vehicle: vehicle };
    }
  }, {
    key: "sight",
    get: function get() {
      var _store$getState8 = this.store.getState(),
          sight = _store$getState8.sight;

      return { sight: sight };
    }
  }]);

  return Connect;
}();

exports.default = Connect;

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
  STORY: "story",
  TITLE: "title"
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
var addButtonCoords = exports.addButtonCoords = function addButtonCoords(option, buttonCoords) {
  var props = ['xPos', 'yPos', 'width', 'height'];
  if (!props.every(function (prop) {
    return Object.keys(option).includes(prop);
  })) {
    Object.assign(option, buttonCoords);
  }
};

var screenToTextId = exports.screenToTextId = function screenToTextId(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y <= button.yPos && y >= button.yPos - button.height;
  });
  return selectedButton && selectedButton.id || null;
};

var screenToButtonId = exports.screenToButtonId = function screenToButtonId(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y >= button.yPos && y <= button.yPos + button.height;
  });
  return selectedButton && selectedButton.id || null;
};

var screenToButtonName = exports.screenToButtonName = function screenToButtonName(x, y, list) {
  var selectedButton = list.find(function (button) {
    return x >= button.xPos && x <= button.xPos + button.width && y >= button.yPos && y <= button.yPos + button.height;
  });
  return selectedButton && selectedButton.name || null;
};

var getItemById = exports.getItemById = function getItemById(array, id) {
  return array.find(function (x) {
    return x.id === id;
  });
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawById = drawById;
exports.drawByName = drawByName;
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

/***/ }),
/* 5 */
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
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.register = register;
exports.login = login;
exports.logout = logout;
exports.position = position;

var _actions = __webpack_require__(0);

var _store = __webpack_require__(8);

var _constants = __webpack_require__(2);

function register(user, email, password, callback) {
  return function (dispatch, getState) {
    dispatch((0, _actions.registerRequest)(user, email, password));
    var state = getState();
    var unsubscribe = (0, _store.subscribe)('sending', function (state) {
      unsubscribe();
      callback();
      clearTimeout(timer);
    });
    var timer = setTimeout(function () {
      unsubscribe();
      callback();
      getState().sending && dispatch((0, _actions.registerError)('0201')); // Timeout error
    }, 2000);
  };
}

function login(user, password, callback) {
  return function (dispatch, getState) {
    dispatch((0, _actions.loginRequest)(user, password));
    var state = getState();
    var unsubscribe = (0, _store.subscribe)('sending', function (state) {
      unsubscribe();
      callback();
      clearTimeout(timer);
      dispatch((0, _actions.changeMode)(_constants.MODE.MAP));
    });
    var timer = setTimeout(function () {
      unsubscribe();
      callback();
      getState().sending && dispatch((0, _actions.loginError)('0201')); // Timeout error
    }, 2000);
  };
}

function logout(user, callback) {
  return function (dispatch, getState) {
    dispatch((0, _actions.logoutRequest)(user));
    var state = getState();
    var unsubscribe = (0, _store.subscribe)('sending', function (state) {
      unsubscribe();
      callback && callback();
      clearTimeout(timer);
      dispatch((0, _actions.changeMode)(_constants.MODE.TITLE));
    });
    var timer = setTimeout(function () {
      unsubscribe();
      callback && callback();
      getState().sending && dispatch((0, _actions.logoutError)('0201')); // Timeout error
    }, 2000);
  };
}

function position(position, callback) {
  return function (dispatch, getState) {
    dispatch((0, _actions.positionRequest)(position));
    var state = getState();
    var unsubscribe = (0, _store.subscribe)('sending', function (state) {
      unsubscribe();
      callback && callback();
      clearTimeout(timer);
    });
    var timer = setTimeout(function () {
      unsubscribe();
      callback && callback();
      getState().sending && dispatch((0, _actions.positionError)('0201')); // Timeout error
    }, 2000);
  };
}

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.subscribe = exports.store = undefined;

var _reduxThunk = __webpack_require__(25);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxLogger = __webpack_require__(26);

var _redux = __webpack_require__(27);

var _index = __webpack_require__(43);

var _index2 = _interopRequireDefault(_index);

var _reduxWebsocketBridge = __webpack_require__(14);

var _reduxWebsocketBridge2 = _interopRequireDefault(_reduxWebsocketBridge);

var _reduxSubscriber = __webpack_require__(55);

var _reduxSubscriber2 = _interopRequireDefault(_reduxSubscriber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
	var loggerMiddleware = (0, _reduxLogger.createLogger)();
	return (0, _redux.createStore)(_index2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default, (0, _reduxWebsocketBridge2.default)('ws://localhost:8887/'), loggerMiddleware));
}

var store = exports.store = configureStore();
var subscribe = exports.subscribe = (0, _reduxSubscriber2.default)(store);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(36);
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
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(35);




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
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(29);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
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

var _blobToArrayBuffer = __webpack_require__(44);

var _blobToArrayBuffer2 = _interopRequireDefault(_blobToArrayBuffer);

var _isFSA = __webpack_require__(45);

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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clicked = exports.mouseUp = exports.drag = exports.mouseDown = exports.keyUp = exports.keyDown = exports.makeKeys = undefined;

var _utils = __webpack_require__(6);

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

exports.makeKeys = makeKeys;
exports.keyDown = keyDown;
exports.keyUp = keyUp;
exports.mouseDown = mouseDown;
exports.drag = drag;
exports.mouseUp = mouseUp;
exports.clicked = clicked;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(17);

__webpack_require__(24);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(18);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {"hmr":true}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(22)(content, options);
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(19);
exports = module.exports = __webpack_require__(20)(false);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'MECC';\n  src: url(" + escape(__webpack_require__(21)) + ") format('truetype');\n}\n\nhtml, body {\n  background-color: #222;\n  height: 100%;\n  margin: 0;\n\tfont-family: 'MECC', Courier, sans-serif;\n}\n\n#container {\n  position: relative;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#container canvas, .dialog {\n  position: absolute;\n}\n\n.dialog {\n  border: 4px solid white;\n  /* width: 600px; */\n  color: white;\n  background-color: black;\n  text-align: center;\n}\n\n.dialog .content {\n  padding: 8px;\n}\n\n.content div {\n  padding: 8px;\n}\n\n.title {\n  font-size: 28px;\n}\n\n.input-line {\n}\n\n.label-container, .input-container {\n  display: inline-block;\n}\n\n.label {\n  width: 130px;\n  margin-right: 8px;\n}\n\ninput, button {\n  border: 4px solid white;\n  font-family: inherit;\n}\n\ninput {\n  color: black;\n}\n\ninput #password {\n  -webkit-text-security: square;\n}\n\nbutton {\n  width: 120px;\n  padding: 4px;\n  color: white;\n  background-color: black;\n}\n\n.submit {\n  margin-right: 50px;\n}\n", ""]);

// exports


/***/ }),
/* 19 */
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
/* 20 */
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
/* 21 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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AP8AgIABAAEAAQD/AAEAgID/AAEAgIABAICA/gCAgICAgICAgICAgICAgAAAAwAAAAADAAOAAAMAFwAbAAAhESERJTUzNTM1MzUzNSEVIxUjFSMVIxUBESERAgABAP0AgICAgAEAgICAgP8AAQABAP8AgICAgICAgICAgIACAAEA/wAAAAMAAAAAA4ADgAADAAcAIwAAJREjERMRIxEDNSMRMzUjETM1IRUzESMVMzUhFSMRMxUhNSMVAYCAgICAgICAgAGAgICAAQCAgP8AgIABAP8AAYABAP8A/gCAAQCAAQCAgP8AgICA/wCAgIAAAAEAAAIAAgADgAALAAARNTM1MzUhFSMVIxWAgAEAgIACAICAgICAgAABAAAAAAIAA4AAEwAAITUjNSMRMzUzNSEVIxUjETMVMxUBAICAgIABAICAgICAgAGAgICAgP6AgIAAAAABAAAAAAIAA4AAEwAAMTUzNTMRIzUjNSEVMxUzESMVIxWAgICAAQCAgICAgIABgICAgID+gICAAAEAAAAABAADgAAjAAAhESMVITUzNTM1IzUjNSEVMxEhETM1IRUjFSMVMxUzFSE1IxEBgID/AICAgIABAIABAIABAICAgID/AIABAICAgICAgIABAP8AgICAgICAgP8AAAEAAACAAwADAAALAAAlESE1IREhESEVIREBAP8AAQABAAEA/wCAAQCAAQD/AID/AAAAAAABAAD/gAGAAQAABwAAFTUzESERIxWAAQCAgIABAP8AgAAAAAABAAABgAKAAgAAAwAAETUhFQKAAYCAgAABAAAAAAEAAIAAAwAAMTUhFQEAgIAAAAABAAAAgAMAAwAAEwAAPQEzNTM1MzUzNSEVIxUjFSMVIxWAgICAAQCAgICAgICAgICAgICAgIAAAAIAAAAAAwADgAADAA8AACURIREHNSMRMzUhFTMRIxUCAP8AgICAAgCAgIACgP2AgIACgICA/YCAAAAAAAEAgAAAAoADgAALAAAzNTMRIzUzNSERMxWAgICAAQCAgAIAgID9AIAAAAAAAQAAAAADAAOAABkAADERMzUzNSERIRUhNTM1IRUzESMVIRUjFSEVgIABAP8A/wCAAgCAgP8AgAIAAQCAgAEAgICAgP8AgICAgAAAAAEAAAAAAwADgAAXAAAzNSM1IRUhESE1MzUzNSE1IREjETMRIxWAgAEAAQD/AICA/gADAICAgICAgAEAgICAgP8A/wD/AIAAAAIAAAAAAwADgAADABMAAAE1IxUTESERMzUzNTM1IREzFSMRAYCAgP6AgICAAQCAgAGAgID+gAEAAQCAgID+AID/AAAAAQAAAAADAAOAABMAADM1IzUhFSERIREhFSEVIRUzESMVgIABAAEA/gADAP4AAYCAgICAgAGAAYCAgID+gIAAAAIAAAAAAwADgAADABcAACURIREHNSMRMzUzNSEVIRUjFSEVMxEjFQIA/wCAgICAAgD+gIABgICAgAEA/wCAgAIAgICAgICA/wCAAAABAAAAAAMAA4AAEQAAMxEzNTM1MzUhNSERIxUjFSMRgICAgP4AAwCAgIABgICAgID/AICA/oAAAAMAAAAAAwADgAADAAcAGwAAJREhEQERIREDNSMRMzUjETM1IRUzESMVMxEjFQIA/wABAP8AgICAgIACAICAgICAAQD/AAGAAQD/AP4AgAEAgAEAgID/AID/AIAAAgAAAAADAAOAAAMAFwAAAREhEQE1ITUzNSE1IxEzNSEVMxEjFSMVAgD/AP8AAYCA/oCAgAIAgICAAgABAP8A/gCAgICAAQCAgP4AgIAAAAACAAAAgAEAAgAAAwAHAAA9ASEVATUhFQEA/wABAICAgAEAgIAAAAAAAgAA/4ABgAIAAAcACwAAFTUzESERIxUDNSEVgAEAgIABAICAAQD/AIACAICAAAAAAQAAAAACgAOAABsAACE1IzUjNSM1MzUzNTM1IRUjFSMVIxUzFTMVMxUBgICAgICAgAEAgICAgICAgICAgICAgICAgICAgIAAAgAAAIACgAKAAAMABwAAPQEhFQE1IRUCgP2AAoCAgIABgICAAAAAAAEAAAAAAoADgAAbAAAxNTM1MzUzNSM1IzUjNSEVMxUzFTMVIxUjFSMVgICAgICAAQCAgICAgICAgICAgICAgICAgICAgAAAAAIAAAAAAwADgAADABcAACE1IRUBETM1MzUhFSE1MzUhFTMVIxUjEQEAAQD/AICA/wD/AIACAICAgICAAQABAICAgICAgICA/wAAAAABAAAAAAOAA4AAFQAAMzUjETM1IRUzESMVIREzFTMRIREhFYCAgAKAgID+gICA/oACAIACgICA/oCAAYCAAQD9gIAAAAIAAAAAAwADgAADABMAAAERIREBETM1MzUhFTMVMxEhESERAgD/AP8AgIABAICA/wD/AAGAAQD/AP6AAoCAgICA/YABAP8AAAMAAAAAAwADgAADAAcAEwAAJREhEQERIREBESEVMxEjFTMRIxUCAP8AAQD/AP8AAoCAgICAgAEA/wABgAEA/wD+AAOAgP8AgP8AgAABAAAAAAMAA4AAEwAAMzUjETM1IRUzFSE1IREhNSEVIxWAgIACAID/AP8AAQABAICAAoCAgICA/YCAgIAAAAAAAgAAAAADAAOAAAMACwAAJREhEQURIRUzESMVAgD/AP8AAoCAgIACgP2AgAOAgP2AgAAAAAEAAAAAAwADgAALAAAxESEVIREhFSERIRUDAP4AAYD+gAIAA4CA/wCA/wCAAAAAAAEAAAAAAwADgAAJAAAxESEVIREhFSERAwD+AAGA/oADgID/AID+gAABAAAAAAMAA4AADwAAMzUjETM1IRUhESE1IzUhEYCAgAKA/gABAIABgIACgICA/YCAgP6AAAAAAAEAAAAAAwADgAALAAAxESERIREhESERIREBAAEAAQD/AP8AA4D+gAGA/IABgP6AAAEAAAAAAgADgAALAAAxNTMRIzUhFSMRMxWAgAIAgICAAoCAgP2AgAABAAAAAAMAA4AACwAAMzUjNSEVIREhESMVgIABAAEAAQCAgICAAwD9AIAAAAEAAAAAAwADgAAbAAAxESERMzUzNSEVIxUjFSMVMxUzFTMVITUjNSMRAQCAgAEAgICAgICA/wCAgAOA/wCAgICAgICAgICAgP8AAAABAAAAAAMAA4AABQAAMREhESEVAQACAAOA/QCAAAAAAAEAAAAAA4ADgAATAAAxESEVMxUzNTM1IREhESMVIzUjEQEAgICAAQD/AICAgAOAgICAgPyAAgCAgP4AAAEAAAAAA4ADgAATAAAxESEVMxUzFTMRIREhNSM1IzUjEQEAgICAAQD/AICAgAOAgICAAYD8gICAgP6AAAIAAAAAAwADgAADAA8AACURIREHNSMRMzUhFTMRIxUCAP8AgICAAgCAgIACgP2AgIACgICA/YCAAAAAAAIAAAAAAwADgAADAA0AAAERIREBESEVMxEjFSERAgD/AP8AAoCAgP6AAgABAP8A/gADgID/AID+gAAAAAEAAAAAAwADgAAXAAAzNSMRMzUhFTMRIxUzFSE1IzUzESERMxWAgIACAICAgP8AgID/AICAAoCAgP4AgICAgAIA/YCAAAAAAAIAAAAAAwADgAADABcAAAERIREBESEVMxEjFSMVMxUzFSE1IzUjEQIA/wD/AAKAgICAgID/AICAAgABAP8A/gADgID/AICAgICAgP8AAAAAAQAAAAADAAOAABsAADM1IzUhFSERITUjETM1IRUzFSE1IREhFTMRIxWAgAEAAQD+gICAAgCA/wD/AAGAgICAgIABAIABAICAgID/AID/AIAAAAAAAQAAAAADAAOAAAcAACERITUhFSERAQD/AAMA/wADAICA/QAAAQAAAAADAAOAAAsAADM1IxEhESERIREjFYCAAQABAAEAgIADAP0AAwD9AIAAAAAAAQAAAAADAAOAAA8AACE1IzUjESERIREhESMVIxUBAICAAQABAAEAgICAgAKA/YACgP2AgIAAAAABAAAAAAOAA4AAEwAAMREhETM1MxUzESERITUjNSMVIxUBAICAgAEA/wCAgIADgP4AgIACAPyAgICAgAABAAAAAAMAA4AAGwAAMREzNTM1IzUjESERIREhESMVIxUzFTMRIREhEYCAgIABAAEAAQCAgICA/wD/AAEAgICAAQD/AAEA/wCAgID/AAEA/wAAAAABAAAAAAMAA4AADwAAIREjNSMRIREhESERIxUjEQEAgIABAAEAAQCAgAIAgAEA/wABAP8AgP4AAAEAAAAAAwADgAAXAAAxETM1MzUzNTM1ITUhESMVIxUjFSMVIRWAgICA/gADAICAgIACAAEAgICAgID/AICAgICAAAAAAQAAAAACgAOAAAcAADERIRUhESEVAoD+gAGAA4CA/YCAAAAAAQAAAIADAAMAABMAACU1IzUjNSM1IzUhFTMVMxUzFTMVAgCAgICAAQCAgICAgICAgICAgICAgIAAAAAAAQAAAAACgAOAAAcAADE1IREhNSERAYD+gAKAgAKAgPyAAAAAAQAAAQADAAKAAA8AABE1MzUzNSEVMxUzFSE1IRWAgAEAgID/AP8AAQCAgICAgICAgAAAAAEAAP+AAwAAAAADAAAVNSEVAwCAgIAAAAEAAAIAAgADgAALAAABNSM1IzUhFTMVMxUBAICAAQCAgAIAgICAgICAAAAAAgAAAAADAAKAAAMAEQAAJTUhFQc1IzUzNSE1ITUhFTMRAgD/AICAgAGA/oACAICAgICAgICAgICA/gAAAgAAAAADAAOAAAMADQAAJREhEQURIREhFTMRIxUCAP8A/wABAAGAgICAAYD+gIADgP8AgP6AgAABAAAAAAMAAoAACwAAMzUjETM1IRUhESEVgICAAoD+AAIAgAGAgID+gIAAAAIAAAAAAwADgAADAA0AACURIREHNSMRMzUhESERAgD/AICAgAGAAQCAAYD+gICAAYCAAQD8gAAAAgAAAAADAAKAAAMAEQAAATUhFQM1IxEzNSEVMxEhFSEVAgD/AICAgAIAgP4AAgABgICA/oCAAYCAgP8AgIAAAAEAAAAAAwADgAATAAAzESM1MxEzNSEVMxUhNSMRMxUjEYCAgIABgID/AICAgAGAgAEAgICAgP8AgP6AAAIAAP+AAwACgAADABEAAAERIREDNSE1ITUjETM1IREjFQIA/wCAAYD+gICAAoCAAQABAP8A/oCAgIABAID9gIAAAAAAAQAAAAADAAOAAAsAADERIREhFTMRIREhEQEAAYCA/wD/AAOA/wCA/gACAP4AAAAAAgAAAAACAAOAAAkADQAAMTUzESM1IREzFQE1IRWAgAGAgP6AAQCAAYCA/gCAAwCAgAAAAAIAAP+AAoADgAANABEAABc1IzUhFTMRIzUhESMVAzUhFYCAAQCAgAGAgIABAICAgIACAID9gIADgICAAAEAAAAAAwADgAAXAAAxESERMzUzNSEVIxUjFTMVMxUhNSM1IxEBAICAAQCAgICA/wCAgAOA/gCAgICAgICAgID/AAAAAQAAAAACAAOAAAkAADE1MxEjNSERMxWAgAGAgIACgID9AIAAAQAAAAADgAKAABMAADERMzUhFTM1IRUzESERIxUjNSMRgAEAgAEAgP8AgICAAgCAgICA/gABgICA/oAAAQAAAAADAAKAAAkAADERIRUzESERIRECgID/AP8AAoCA/gACAP4AAAIAAAAAAwACgAADAA8AACURIREHNSMRMzUhFTMRIxUCAP8AgICAAgCAgIABgP6AgIABgICA/oCAAAAAAAIAAP+AAwACgAADAA0AAAERIREBESEVMxEjFSERAgD/AP8AAoCAgP6AAQABAP8A/oADAID/AID/AAAAAAIAAP+AAwACgAADAA0AAAERIREBESE1IxEzNSERAgD/AAEA/oCAgAKAAQABAP8A/oABAIABAID9AAAAAAEAAAAAAwACgAAJAAAxESEVMxUhNSERAoCA/wD/AAKAgICA/gAAAAABAAAAAAMAAoAAEwAAMTUhNSE1IzUzNSEVIRUhFTMVIxUCAP6AgIACgP4AAYCAgICAgICAgICAgIAAAAABAAAAAAMAA4AAEwAAITUjESM1MxEhESEVIREzNSEVIxUBAICAgAEAAQD/AIABAICAAYCAAQD/AID+gICAgAAAAQAAAAADAAKAAAkAADM1IxEhESERIRGAgAEAAQABAIACAP4AAgD9gAAAAAABAAAAAAMAAoAADwAAITUjNSMRIREhESERIxUjFQEAgIABAAEAAQCAgICAAYD+gAGA/oCAgAAAAAEAAAAAA4ACgAAPAAAxESERMzUzFTMRIREhNSMVAQCAgIABAP6AgAKA/oCAgAGA/YCAgAABAAAAAAMAAoAAGwAAMTUzNTM1IzUjNSEVITUhFSMVIxUzFTMVITUhFYCAgIABAAEAAQCAgICA/wD/AICAgICAgICAgICAgICAAAAAAQAA/4ADAAKAAA8AABc1ITUhNSMRIREhESERIxWAAYD+gIABAAEAAQCAgICAgAGA/oABgP2AgAABAAAAAAMAAoAAEwAAMTUzNTM1MzUhNSEVIxUjFSMVIRWAgID+gAMAgICAAYCAgICAgICAgICAAAEAAAAAAgADgAATAAAhNSMRIzUzETM1IRUjESMVMxEzFQEAgICAgAEAgICAgIABAIABAICA/wCA/wCAAAEAAP+AAQADgAADAAAVESERAQCABAD8AAAAAAABAAAAAAIAA4AAEwAAMTUzETM1IxEjNSEVMxEzFSMRIxWAgICAAQCAgICAgAEAgAEAgID/AID/AIAAAAABAAACgAOAA4AADwAAETUzNSEVMzUhFSMVITUjFYABgIABAID+gIACgICAgICAgICAAAAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAQAAAAAEAAOAACMAACERIxUhNTM1MzUjNSM1IRUzESERMzUhFSMVIxUzFTMVITUjEQGAgP8AgICAgAEAgAEAgAEAgICAgP8AgAEAgICAgICAgAEA/wCAgICAgICA/wAAAAAeAW4AAQAAAAAAAAAYADIAAQAAAAAAAQAOAGkAAQAAAAAAAgAHAIgAAQAAAAAAAwAZAMQAAQAAAAAABAAWAQwAAQAAAAAABQALATsAAQAAAAAABgAOAWUAAQAAAAAABwA8Ae4AAQAAAAAACAAWAlkAAQAAAAAACQAJAoQAAQAAAAAACgDhBFIAAQAAAAAADAA/BbQAAQAAAAAADQAoBkYAAQAAAAAADgAuBs0AAQAAAAAAEwApB1AAAwABBAkAAAAwAAAAAwABBAkAAQAcAEsAAwABBAkAAgAOAHgAAwABBAkAAwAyAJAAAwABBAkABAAsAN4AAwABBAkABQAWASMAAwABBAkABgAcAUcAAwABBAkABwB4AXQAAwABBAkACAAsAisAAwABBAkACQASAnAAAwABBAkACgHCAo4AAwABBAkADAB+BTQAAwABBAkADQBQBfQAAwABBAkADgBcBm8AAwABBAkAEwBSBvwAQwBvAHAAeQByAGkAZwBoAHQAIABjAG8AZABlAG0AYQBuADMAOAAgADIAMAAxADAAAENvcHlyaWdodCBjb2RlbWFuMzggMjAxMAAASABlAHIAZQAgAEwAaQBlAHMAIABNAEUAQwBDAABIZXJlIExpZXMgTUVDQwAAUgBlAGcAdQBsAGEAcgAAUmVndWxhcgAARgBvAG4AdABTAHQAcgB1AGMAdAAgAEgAZQByAGUAIABMAGkAZQBzACAATQBFAEMAQwAARm9udFN0cnVjdCBIZXJlIExpZXMgTUVDQwAASABlAHIAZQAgAEwAaQBlAHMAIABNAEUAQwBDACAAUgBlAGcAdQBsAGEAcgAASGVyZSBMaWVzIE1FQ0MgUmVndWxhcgAAVgBlAHIAcwBpAG8AbgAgADEALgAwAABWZXJzaW9uIDEuMAAASABlAHIAZQAtAEwAaQBlAHMALQBNAEUAQwBDAABIZXJlLUxpZXMtTUVDQwAARgBvAG4AdABTAHQAcgB1AGMAdAAgAGkAcwAgAGEAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG8AZgAgAEYAUwBJACAARgBvAG4AdABTAGgAbwBwACAASQBuAHQAZQByAG4AYQB0AGkAbwBuAGEAbAAgAEcAbQBiAEgAAEZvbnRTdHJ1Y3QgaXMgYSB0cmFkZW1hcmsgb2YgRlNJIEZvbnRTaG9wIEludGVybmF0aW9uYWwgR21iSAAAaAB0AHQAcAA6AC8ALwBmAG8AbgB0AHMAdAByAHUAYwB0AC4AYwBvAG0ALwAAaHR0cDovL2ZvbnRzdHJ1Y3QuY29tLwAAYwBvAGQAZQBtAGEAbgAzADgAAGNvZGVtYW4zOAAgHABIAGUAcgBlACAATABpAGUAcwAgAE0ARQBDAEMgHQAgAHcAYQBzACAAYgB1AGkAbAB0ACAAdwBpAHQAaAAgAEYAbwBuAHQAUwB0AHIAdQBjAHQACgBEAGUAcwBpAGcAbgBlAHIAIABkAGUAcwBjAHIAaQBwAHQAaQBvAG4AOgAgAEkAZgAgAHkAbwB1ACAAZwByAGUAdwAgAHUAcAAgAHAAbABhAHkAaQBuAGcAIABUAGgAZQAgAE8AcgBlAGcAbwBuACAAVAByAGEAaQBsACAAbwBuACAAdABoAGUAIABBAHAAcABsAGUAIABJAEkALAAgAHkAbwB1ACcAbABsACAAawBuAG8AdwAgAHQAaABpAHMAIABmAG8AbgB0AC4ADQAKAA0ACgBOAG8AdwAgAHkAbwB1ACwAIAB0AG8AbwAsACAAYwBhAG4AIABjAHIAZQBhAHQAZQAgAGYAYQBrAGUAIABzAGMAcgBlAGUAbgBzAGgAbwB0AHMAIABjAGwAYQBpAG0AaQBuAGcAIAB5AG8AdQAnAHYAZQAgAGQAaQBlAGQAIABvAGYAIABkAHkAcwBlAG4AdABlAHIAeQAhAAoAANJIZXJlIExpZXMgTUVDQ9Mgd2FzIGJ1aWx0IHdpdGggRm9udFN0cnVjdApEZXNpZ25lciBkZXNjcmlwdGlvbjogSWYgeW91IGdyZXcgdXAgcGxheWluZyBUaGUgT3JlZ29uIFRyYWlsIG9uIHRoZSBBcHBsZSBJSSwgeW91J2xsIGtub3cgdGhpcyBmb250Lg0KDQpOb3cgeW91LCB0b28sIGNhbiBjcmVhdGUgZmFrZSBzY3JlZW5zaG90cyBjbGFpbWluZyB5b3UndmUgZGllZCBvZiBkeXNlbnRlcnkhCgAAaAB0AHQAcAA6AC8ALwBmAG8AbgB0AHMAdAByAHUAYwB0AC4AYwBvAG0ALwBmAG8AbgB0AHMAdAByAHUAYwB0AGkAbwBuAHMALwBzAGgAbwB3AC8AMwAwADYANgA4ADkALwBoAGUAcgBlAF8AbABpAGUAcwBfAG0AZQBjAGMAAGh0dHA6Ly9mb250c3RydWN0LmNvbS9mb250c3RydWN0aW9ucy9zaG93LzMwNjY4OS9oZXJlX2xpZXNfbWVjYwAAQwByAGUAYQB0AGkAdgBlACAAQwBvAG0AbQBvAG4AcwAgAEEAdAB0AHIAaQBiAHUAdABpAG8AbgAgAFMAaABhAHIAZQAgAEEAbABpAGsAZQAAQ3JlYXRpdmUgQ29tbW9ucyBBdHRyaWJ1dGlvbiBTaGFyZSBBbGlrZQAAaAB0AHQAcAA6AC8ALwBjAHIAZQBhAHQAaQB2AGUAYwBvAG0AbQBvAG4AcwAuAG8AcgBnAC8AbABpAGMAZQBuAHMAZQBzAC8AYgB5AC0AcwBhAC8AMwAuADAALwAAaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wLwAARgBpAHYAZQAgAGIAaQBnACAAcQB1AGEAYwBrAGkAbgBnACAAegBlAHAAaAB5AHIAcwAgAGoAbwBsAHQAIABtAHkAIAB3AGEAeAAgAGIAZQBkAABGaXZlIGJpZyBxdWFja2luZyB6ZXBoeXJzIGpvbHQgbXkgd2F4IGJlZAAAAgAAAAAAAABlADMAAAAAAAAAAAAAAAAAAAAAAAAAAABsAAABAgEDAAMABAAFAAYABwAIAAkACgALAAwADQAOAA8AEAARABIAEwAUABUAFgAXABgAGQAaABsAHAAdAB4AHwAgACEAIgAjACQAJQAmACcAKAApACoAKwAsAC0ALgAvADAAMQAyADMANAA1ADYANwA4ADkAOgA7ADwAPQA+AD8AQABBAEIAQwBEAEUARgBHAEgASQBKAEsATABNAE4ATwBQAFEAUgBTAFQAVQBWAFcAWABZAFoAWwBcAF0AXgBfAGAAYQDDAIcBBAEFAQYBBwEIAQkBCgELBmdseXBoMQZnbHlwaDIOb25lZG90ZW5sZWFkZXIHdW5pMjBGMAd1bmkyMjE5BkgxODUzMwlpbnZidWxsZXQJaW52Y2lyY2xlCm9wZW5idWxsZXQHdW5pMjZBQgAAAAAAAAH//wACAAEAAAAOAAAAGAAAAAAAAgABAAEAawABAAQAAAACAAAAAAABAAAAAMw9os8AAAAA1YFvxAAAAADXRFoz"

/***/ }),
/* 22 */
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

var	fixUrls = __webpack_require__(23);

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
/* 23 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(8);

var _index = __webpack_require__(57);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.onload = function () {
  var canvas = document.getElementById('game');
  var ctx = canvas.getContext('2d');
  ctx.imageSmoothingEnabled = false;

  var rainGame = new _index2.default(_store.store, canvas, ctx);

  rainGame.init();
};

/***/ }),
/* 25 */
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {!function(e,t){ true?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t(e.reduxLogger=e.reduxLogger||{})}(this,function(e){"use strict";function t(e,t){e.super_=t,e.prototype=Object.create(t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}})}function r(e,t){Object.defineProperty(this,"kind",{value:e,enumerable:!0}),t&&t.length&&Object.defineProperty(this,"path",{value:t,enumerable:!0})}function n(e,t,r){n.super_.call(this,"E",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0}),Object.defineProperty(this,"rhs",{value:r,enumerable:!0})}function o(e,t){o.super_.call(this,"N",e),Object.defineProperty(this,"rhs",{value:t,enumerable:!0})}function i(e,t){i.super_.call(this,"D",e),Object.defineProperty(this,"lhs",{value:t,enumerable:!0})}function a(e,t,r){a.super_.call(this,"A",e),Object.defineProperty(this,"index",{value:t,enumerable:!0}),Object.defineProperty(this,"item",{value:r,enumerable:!0})}function f(e,t,r){var n=e.slice((r||t)+1||e.length);return e.length=t<0?e.length+t:t,e.push.apply(e,n),e}function u(e){var t="undefined"==typeof e?"undefined":N(e);return"object"!==t?t:e===Math?"math":null===e?"null":Array.isArray(e)?"array":"[object Date]"===Object.prototype.toString.call(e)?"date":"function"==typeof e.toString&&/^\/.*\//.test(e.toString())?"regexp":"object"}function l(e,t,r,c,s,d,p){s=s||[],p=p||[];var g=s.slice(0);if("undefined"!=typeof d){if(c){if("function"==typeof c&&c(g,d))return;if("object"===("undefined"==typeof c?"undefined":N(c))){if(c.prefilter&&c.prefilter(g,d))return;if(c.normalize){var h=c.normalize(g,d,e,t);h&&(e=h[0],t=h[1])}}}g.push(d)}"regexp"===u(e)&&"regexp"===u(t)&&(e=e.toString(),t=t.toString());var y="undefined"==typeof e?"undefined":N(e),v="undefined"==typeof t?"undefined":N(t),b="undefined"!==y||p&&p[p.length-1].lhs&&p[p.length-1].lhs.hasOwnProperty(d),m="undefined"!==v||p&&p[p.length-1].rhs&&p[p.length-1].rhs.hasOwnProperty(d);if(!b&&m)r(new o(g,t));else if(!m&&b)r(new i(g,e));else if(u(e)!==u(t))r(new n(g,e,t));else if("date"===u(e)&&e-t!==0)r(new n(g,e,t));else if("object"===y&&null!==e&&null!==t)if(p.filter(function(t){return t.lhs===e}).length)e!==t&&r(new n(g,e,t));else{if(p.push({lhs:e,rhs:t}),Array.isArray(e)){var w;e.length;for(w=0;w<e.length;w++)w>=t.length?r(new a(g,w,new i(void 0,e[w]))):l(e[w],t[w],r,c,g,w,p);for(;w<t.length;)r(new a(g,w,new o(void 0,t[w++])))}else{var x=Object.keys(e),S=Object.keys(t);x.forEach(function(n,o){var i=S.indexOf(n);i>=0?(l(e[n],t[n],r,c,g,n,p),S=f(S,i)):l(e[n],void 0,r,c,g,n,p)}),S.forEach(function(e){l(void 0,t[e],r,c,g,e,p)})}p.length=p.length-1}else e!==t&&("number"===y&&isNaN(e)&&isNaN(t)||r(new n(g,e,t)))}function c(e,t,r,n){return n=n||[],l(e,t,function(e){e&&n.push(e)},r),n.length?n:void 0}function s(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":s(o[r.path[n]],r.index,r.item);break;case"D":delete o[r.path[n]];break;case"E":case"N":o[r.path[n]]=r.rhs}}else switch(r.kind){case"A":s(e[t],r.index,r.item);break;case"D":e=f(e,t);break;case"E":case"N":e[t]=r.rhs}return e}function d(e,t,r){if(e&&t&&r&&r.kind){for(var n=e,o=-1,i=r.path?r.path.length-1:0;++o<i;)"undefined"==typeof n[r.path[o]]&&(n[r.path[o]]="number"==typeof r.path[o]?[]:{}),n=n[r.path[o]];switch(r.kind){case"A":s(r.path?n[r.path[o]]:n,r.index,r.item);break;case"D":delete n[r.path[o]];break;case"E":case"N":n[r.path[o]]=r.rhs}}}function p(e,t,r){if(r.path&&r.path.length){var n,o=e[t],i=r.path.length-1;for(n=0;n<i;n++)o=o[r.path[n]];switch(r.kind){case"A":p(o[r.path[n]],r.index,r.item);break;case"D":o[r.path[n]]=r.lhs;break;case"E":o[r.path[n]]=r.lhs;break;case"N":delete o[r.path[n]]}}else switch(r.kind){case"A":p(e[t],r.index,r.item);break;case"D":e[t]=r.lhs;break;case"E":e[t]=r.lhs;break;case"N":e=f(e,t)}return e}function g(e,t,r){if(e&&t&&r&&r.kind){var n,o,i=e;for(o=r.path.length-1,n=0;n<o;n++)"undefined"==typeof i[r.path[n]]&&(i[r.path[n]]={}),i=i[r.path[n]];switch(r.kind){case"A":p(i[r.path[n]],r.index,r.item);break;case"D":i[r.path[n]]=r.lhs;break;case"E":i[r.path[n]]=r.lhs;break;case"N":delete i[r.path[n]]}}}function h(e,t,r){if(e&&t){var n=function(n){r&&!r(e,t,n)||d(e,t,n)};l(e,t,n)}}function y(e){return"color: "+F[e].color+"; font-weight: bold"}function v(e){var t=e.kind,r=e.path,n=e.lhs,o=e.rhs,i=e.index,a=e.item;switch(t){case"E":return[r.join("."),n,"→",o];case"N":return[r.join("."),o];case"D":return[r.join(".")];case"A":return[r.join(".")+"["+i+"]",a];default:return[]}}function b(e,t,r,n){var o=c(e,t);try{n?r.groupCollapsed("diff"):r.group("diff")}catch(e){r.log("diff")}o?o.forEach(function(e){var t=e.kind,n=v(e);r.log.apply(r,["%c "+F[t].text,y(t)].concat(P(n)))}):r.log("—— no diff ——");try{r.groupEnd()}catch(e){r.log("—— diff end —— ")}}function m(e,t,r,n){switch("undefined"==typeof e?"undefined":N(e)){case"object":return"function"==typeof e[n]?e[n].apply(e,P(r)):e[n];case"function":return e(t);default:return e}}function w(e){var t=e.timestamp,r=e.duration;return function(e,n,o){var i=["action"];return i.push("%c"+String(e.type)),t&&i.push("%c@ "+n),r&&i.push("%c(in "+o.toFixed(2)+" ms)"),i.join(" ")}}function x(e,t){var r=t.logger,n=t.actionTransformer,o=t.titleFormatter,i=void 0===o?w(t):o,a=t.collapsed,f=t.colors,u=t.level,l=t.diff,c="undefined"==typeof t.titleFormatter;e.forEach(function(o,s){var d=o.started,p=o.startedTime,g=o.action,h=o.prevState,y=o.error,v=o.took,w=o.nextState,x=e[s+1];x&&(w=x.prevState,v=x.started-d);var S=n(g),k="function"==typeof a?a(function(){return w},g,o):a,j=D(p),E=f.title?"color: "+f.title(S)+";":"",A=["color: gray; font-weight: lighter;"];A.push(E),t.timestamp&&A.push("color: gray; font-weight: lighter;"),t.duration&&A.push("color: gray; font-weight: lighter;");var O=i(S,j,v);try{k?f.title&&c?r.groupCollapsed.apply(r,["%c "+O].concat(A)):r.groupCollapsed(O):f.title&&c?r.group.apply(r,["%c "+O].concat(A)):r.group(O)}catch(e){r.log(O)}var N=m(u,S,[h],"prevState"),P=m(u,S,[S],"action"),C=m(u,S,[y,h],"error"),F=m(u,S,[w],"nextState");if(N)if(f.prevState){var L="color: "+f.prevState(h)+"; font-weight: bold";r[N]("%c prev state",L,h)}else r[N]("prev state",h);if(P)if(f.action){var T="color: "+f.action(S)+"; font-weight: bold";r[P]("%c action    ",T,S)}else r[P]("action    ",S);if(y&&C)if(f.error){var M="color: "+f.error(y,h)+"; font-weight: bold;";r[C]("%c error     ",M,y)}else r[C]("error     ",y);if(F)if(f.nextState){var _="color: "+f.nextState(w)+"; font-weight: bold";r[F]("%c next state",_,w)}else r[F]("next state",w);l&&b(h,w,r,k);try{r.groupEnd()}catch(e){r.log("—— log end ——")}})}function S(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object.assign({},L,e),r=t.logger,n=t.stateTransformer,o=t.errorTransformer,i=t.predicate,a=t.logErrors,f=t.diffPredicate;if("undefined"==typeof r)return function(){return function(e){return function(t){return e(t)}}};if(e.getState&&e.dispatch)return console.error("[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:\n// Logger with default options\nimport { logger } from 'redux-logger'\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n// Or you can create your own logger with custom options http://bit.ly/redux-logger-options\nimport createLogger from 'redux-logger'\nconst logger = createLogger({\n  // ...options\n});\nconst store = createStore(\n  reducer,\n  applyMiddleware(logger)\n)\n"),function(){return function(e){return function(t){return e(t)}}};var u=[];return function(e){var r=e.getState;return function(e){return function(l){if("function"==typeof i&&!i(r,l))return e(l);var c={};u.push(c),c.started=O.now(),c.startedTime=new Date,c.prevState=n(r()),c.action=l;var s=void 0;if(a)try{s=e(l)}catch(e){c.error=o(e)}else s=e(l);c.took=O.now()-c.started,c.nextState=n(r());var d=t.diff&&"function"==typeof f?f(r,l):t.diff;if(x(u,Object.assign({},t,{diff:d})),u.length=0,c.error)throw c.error;return s}}}}var k,j,E=function(e,t){return new Array(t+1).join(e)},A=function(e,t){return E("0",t-e.toString().length)+e},D=function(e){return A(e.getHours(),2)+":"+A(e.getMinutes(),2)+":"+A(e.getSeconds(),2)+"."+A(e.getMilliseconds(),3)},O="undefined"!=typeof performance&&null!==performance&&"function"==typeof performance.now?performance:Date,N="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},P=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},C=[];k="object"===("undefined"==typeof global?"undefined":N(global))&&global?global:"undefined"!=typeof window?window:{},j=k.DeepDiff,j&&C.push(function(){"undefined"!=typeof j&&k.DeepDiff===c&&(k.DeepDiff=j,j=void 0)}),t(n,r),t(o,r),t(i,r),t(a,r),Object.defineProperties(c,{diff:{value:c,enumerable:!0},observableDiff:{value:l,enumerable:!0},applyDiff:{value:h,enumerable:!0},applyChange:{value:d,enumerable:!0},revertChange:{value:g,enumerable:!0},isConflict:{value:function(){return"undefined"!=typeof j},enumerable:!0},noConflict:{value:function(){return C&&(C.forEach(function(e){e()}),C=null),c},enumerable:!0}});var F={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},L={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(e){return e},actionTransformer:function(e){return e},errorTransformer:function(e){return e},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.dispatch,r=e.getState;return"function"==typeof t||"function"==typeof r?S()({dispatch:t,getState:r}):void console.error("\n[redux-logger v3] BREAKING CHANGE\n[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.\n[redux-logger v3] Change\n[redux-logger v3] import createLogger from 'redux-logger'\n[redux-logger v3] to\n[redux-logger v3] import { createLogger } from 'redux-logger'\n")};e.defaults=L,e.createLogger=S,e.logger=T,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})});

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(12);
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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(32);




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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(30);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(5)))

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(11);


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
/* 32 */
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
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(34);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(37);


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(39);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5), __webpack_require__(38)(module)))

/***/ }),
/* 38 */
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
/* 39 */
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
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(12);




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
/* 41 */
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(13);
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _actions = __webpack_require__(0);

var _reduxWebsocketBridge = __webpack_require__(14);

var _input = __webpack_require__(15);

var _ui = __webpack_require__(46);

var _map = __webpack_require__(47);

var _initialState = __webpack_require__(48);

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return _initialState.initialState;
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
    case _actions.ZOOM_IN:
      return (0, _ui.zoomIn)(state);
    case _actions.ZOOM_OUT:
      return (0, _ui.zoomOut)(state);
    case _actions.CHANGE_MODE:
      return (0, _ui.changeMode)(state, action);
    case _actions.FOCUS_MENU:
      return (0, _ui.focusMenu)(state, action);
    case _actions.FOCUS_TILE:
      return (0, _ui.focusTile)(state, action);

    case _actions.REGISTER_REQUEST:
    case _actions.LOGIN_REQUEST:
    case _actions.LOGOUT_REQUEST:
    case _actions.POSITION_REQUEST:
      return Object.assign({}, state, {
        sending: true,
        error: null
      });

    case _actions.REGISTER_ERROR:
    case _actions.LOGIN_ERROR:
    case _actions.LOGOUT_ERROR:
    case _actions.POSITION_ERROR:
      return Object.assign({}, state, {
        sending: false,
        error: action.payload.code
      });

    case _actions.REGISTER_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        error: null
      });

    case _actions.LOGIN_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        loggedIn: true,
        position: action.payload.position,
        mapTiles: action.payload.tiles,
        error: null
      });

    case _actions.LOGOUT_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        loggedIn: false,
        error: null
      });

    case _actions.POSITION_RESPONSE:
      return Object.assign({}, state, {
        sending: false,
        position: action.payload.position,
        mapTiles: (0, _map.updateMapTiles)(state, action),
        error: null
      });

    case '@@websocket/' + _reduxWebsocketBridge.OPEN:
      return Object.assign({}, state, {
        connected: true
      });

    case '@@websocket/' + _reduxWebsocketBridge.CLOSE:
      return Object.assign({}, state, {
        connected: false,
        loggedIn: false
      });

    default:
      return state;
  }
}

/***/ }),
/* 44 */
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
/* 45 */
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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusTile = exports.focusMenu = exports.changeMode = exports.zoomOut = exports.zoomIn = undefined;

var _utils = __webpack_require__(6);

var _constants = __webpack_require__(2);

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

exports.zoomIn = zoomIn;
exports.zoomOut = zoomOut;
exports.changeMode = changeMode;
exports.focusMenu = focusMenu;
exports.focusTile = focusTile;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateMapTiles = exports.addLayer = exports.buildMap = undefined;

var _utils = __webpack_require__(6);

// Initial state setup

function buildMap(map) {
  var mapArray = [];
  for (var y = 0; y < map.height; y++) {
    for (var x = 0; x < map.width; x++) {
      var id = y * map.width + x;
      mapArray[id] = { id: id, x: x, y: y, layers: {
          base: 0,
          middle: map.layers[1].data[id] === 0 ? 0 : map.layers[1].data[id] - 1
        } };
    }
  }
  return mapArray;
}

// Reducer functions

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

function updateMapTiles(state, action) {
  return state.mapTiles.map(function (tile) {
    var newTile = action.payload.tiles[tile.id];
    if (newTile) {
      return Object.assign({}, tile, newTile, {
        layers: Object.assign({}, tile.layers, newTile.layers)
      });
    } else {
      return tile;
    }
  });
}

exports.buildMap = buildMap;
exports.addLayer = addLayer;
exports.updateMapTiles = updateMapTiles;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initialState = undefined;

var _constants = __webpack_require__(2);

var _map = __webpack_require__(49);

var _map2 = _interopRequireDefault(_map);

var _keys = __webpack_require__(50);

var _keys2 = _interopRequireDefault(_keys);

var _story = __webpack_require__(51);

var _story2 = _interopRequireDefault(_story);

var _menus = __webpack_require__(52);

var _menus2 = _interopRequireDefault(_menus);

var _party = __webpack_require__(53);

var _party2 = _interopRequireDefault(_party);

var _buttons = __webpack_require__(54);

var _buttons2 = _interopRequireDefault(_buttons);

var _input = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var uiState = {
  mode: _constants.MODE.TITLE,
  focusX: 2,
  focusY: 2,
  activeMenu: "main",
  story: _story2.default,
  menus: _menus2.default,
  buttons: _buttons2.default
};

var mapState = {
  zoom: 3,
  mapHeight: _map2.default.height,
  mapWidth: _map2.default.width,
  mapTiles: []
};

var playerState = {
  position: null,
  sight: 2,
  party: _party2.default,
  vehicle: {
    type: _constants.VEHICLE.JEEP,
    icon: 15,
    repair: 5
  }
};

var inputState = {
  offsetX: 0,
  offsetY: 0,
  xDragging: null,
  yDragging: null,
  xClick: null,
  yClick: null,
  keys: (0, _input.makeKeys)()
};

var connectionState = {
  connected: false,
  loggedIn: false,
  sending: false,
  error: null
};

var initialState = exports.initialState = Object.assign({}, uiState, mapState, playerState, inputState, connectionState);

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = {"height":20,"infinite":false,"layers":[{"data":[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],"height":20,"name":"BOTTOM","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0},{"data":[0,0,0,7,13,0,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,12,11,8,16,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,13,16,0,0,0,0,0,0,28,0,0,0,0,0,0,8,0,0,0,6,0,16,0,0,0,0,0,27,20,0,0,0,0,0,0,6,0,0,0,12,11,31,8,0,0,0,0,0,24,30,0,0,0,0,0,32,21,21,4,21,21,26,32,21,21,21,18,0,16,0,0,0,0,0,0,12,11,8,0,0,0,16,12,8,0,0,22,21,25,21,18,0,0,0,0,0,0,12,8,0,0,16,0,6,7,8,0,0,0,0,22,18,0,0,0,0,0,7,13,0,0,16,7,10,6,12,8,0,0,0,0,22,19,21,21,0,0,12,11,8,7,31,13,12,13,0,12,11,5,8,0,0,16,0,0,0,0,0,0,14,13,16,0,0,0,0,0,0,0,6,0,0,16,0,0,0,0,0,7,13,0,16,0,0,0,0,0,0,0,12,8,7,31,8,0,0,0,0,12,8,0,24,3,30,0,0,0,0,0,0,12,13,16,12,11,0,0,7,11,13,0,16,0,0,0,0,0,0,0,0,0,0,16,0,0,7,8,12,8,27,21,20,0,0,0,0,0,0,0,0,0,0,16,0,0,6,12,9,13,0,0,16,0,0,0,0,0,0,0,0,0,0,16,0,0,13,0,12,11,11,8,29,0,0,0,0,0,0,0,0,27,21,26,21,30,0,0,0,7,11,13,0,0,0,0,0,0,0,0,0,0,0,16,0,0,0,0,7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,29,0,0,0,7,13,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],"height":20,"name":"MIDDLE","opacity":1,"type":"tilelayer","visible":true,"width":20,"x":0,"y":0}],"nextobjectid":1,"orientation":"orthogonal","renderorder":"right-down","tiledversion":"1.1.5","tileheight":32,"tilesets":[{"firstgid":1,"source":"atlas.json"}],"tilewidth":32,"type":"map","version":1,"width":20}

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = {"0":"false","1":"false","2":"false","3":"false","4":"false","5":"false","6":"false","7":"false","8":"false","9":"false","ArrowUp":"false","ArrowDown":"false","ArrowRight":"false","ArrowLeft":"false","Enter":"false","Backspace":"false","Delete":"false","Escape":"false"}

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = {"action":{},"text":["A wild jaguar creeps from the","shadows with glowing eyes."],"buttons":[{"text":"Run away","ref":"9184"},{"text":"Stand your ground","ref":"5622"},{"text":"Shoot","ref":"3214"}]}

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = {"byId":{"overlay":{"type":"MAP_OVERLAY","buttons":["button1","button1","button1","button1"]},"main":{"type":"TEXT_MENU","text":["Welcome to the Amazon Trail","","You may:"],"buttons":["toMap","newGame","toHighscore"]},"selectClass":{"type":"TEXT_MENU","text":["A world of adventure awaits you.","","Which path will you choose?"],"buttons":["startTribe","startScience","startLogger","toMain"]},"highscore":{"type":"TEXT_MENU","text":["The Amazon Top Ten:","","  1. Darwin: 12414","  2. Gabriel: 9843","  3. Mom: 5634","  4. Dan: 4197","  5. Jan: 1206"],"buttons":["toMain"]}},"allIds":["overlay","main","selectClass","highscore"]}

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = [{"name":"J. Cruz","icon":0,"health":5,"jeito":3},{"name":"H. Villa","icon":1,"health":1,"jeito":2},{"name":"F. Boa","icon":2,"health":2,"jeito":4},{"name":"R. Stone","icon":0,"health":1,"jeito":1},{"name":"D. Lee","icon":2,"health":3,"jeito":5}]

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = {"byId":{"button1":{"text":"MENU","action":{"type":"FOCUS_MENU","payload":{"ref":"main"}}},"toMain":{"text":"Return to main menu","action":{"type":"FOCUS_MENU","payload":{"ref":"main"}}},"toMap":{"text":"Continue game","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"newGame":{"text":"Start new game","action":{"type":"FOCUS_MENU","payload":{"ref":"selectClass"}}},"toHighscore":{"text":"View high scores","action":{"type":"FOCUS_MENU","payload":{"ref":"highscore"}}},"startTribe":{"text":"The way of the tribe","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"startScience":{"text":"The life of a logger","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"startLogger":{"text":"The researcher's journey","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}}},"allIds":["button1","toMain","toMap","newGame","toHighscore","startTribe","startScience","startLogger"]}

/***/ }),
/* 55 */
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

var _objectPath = __webpack_require__(56);

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
/* 56 */
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addInputListeners = __webpack_require__(58);

var _addInputListeners2 = _interopRequireDefault(_addInputListeners);

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _Loader = __webpack_require__(59);

var _Loader2 = _interopRequireDefault(_Loader);

var _atlas = __webpack_require__(60);

var _atlas2 = _interopRequireDefault(_atlas);

var _icons = __webpack_require__(61);

var _icons2 = _interopRequireDefault(_icons);

var _iconsXl = __webpack_require__(62);

var _iconsXl2 = _interopRequireDefault(_iconsXl);

var _atlas3 = __webpack_require__(63);

var _atlas4 = _interopRequireDefault(_atlas3);

var _icons3 = __webpack_require__(64);

var _icons4 = _interopRequireDefault(_icons3);

var _iconsXl3 = __webpack_require__(65);

var _iconsXl4 = _interopRequireDefault(_iconsXl3);

var _MapView = __webpack_require__(66);

var _MapView2 = _interopRequireDefault(_MapView);

var _MenuView = __webpack_require__(74);

var _MenuView2 = _interopRequireDefault(_MenuView);

var _StoryView = __webpack_require__(76);

var _StoryView2 = _interopRequireDefault(_StoryView);

var _TitleView = __webpack_require__(78);

var _TitleView2 = _interopRequireDefault(_TitleView);

var _actions = __webpack_require__(0);

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
			Promise.all([this.loader.setImage('atlas', _atlas2.default, _atlas4.default), this.loader.setImage('icons', _icons2.default, _icons4.default), this.loader.setImage('icons-xl', _iconsXl2.default, _iconsXl4.default)]).then(function (loaded) {
				_this.mapView = new _MapView2.default(_this.store, _this.canvas, _this.ctx, _this.loader);
				_this.menuView = new _MenuView2.default(_this.store, _this.canvas, _this.ctx);
				_this.storyView = new _StoryView2.default(_this.store, _this.canvas, _this.ctx);
				_this.titleView = new _TitleView2.default(_this.store, _this.canvas, _this.ctx);
			}).then(function () {
				window.requestAnimationFrame(_this.tick);
			});
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

			if (this.mode !== _constants.MODE.TITLE && (this.connect.connected === false || this.connect.loggedIn === false)) {
				this.store.dispatch((0, _actions.changeMode)(_constants.MODE.TITLE));
			}

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
			} else if (this.mode === _constants.MODE.TITLE) {
				this.titleView.update(delta);
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
			} else if (this.mode === _constants.MODE.TITLE) {
				this.titleView.render();
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

var _actions = __webpack_require__(0);

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

  // canvas.addEventListener('mousemove', (event) => {
  //   dispatch(drag(event.x, event.y));
  // }, false);

  canvas.addEventListener('mouseup', function (event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    dispatch((0, _actions.mouseUp)(x, y));
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
      img.tilenames = this.makeNameLookup(tileset);

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAEACAYAAAA0pH13AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gYGAQQX2w6QoQAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHgBALN/TIABAN4A/wDXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAANwAAAAAAAAAAAAAAAAAAACkAAAAAAAAA1wAAAAAAAAAAAACayU0ANg3bAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAAMrzJQAAAAAANg3bAMrzJQAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAyvMlAAAAAAAAAAAANg3bAAAAAAAAAAAAyvMlAGaCswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQA1wAAAAAAAAAAAAAAKQAAAKAAAAA3AAAAAAAAACkAAAAAAAAAoAAAAAAAAAA3AAAA1wAAAAAAAAAAAAAAKQAAAKAAAAA3AAAAAAAAACkAAAAAAAAAoAAAAAAAAAAAAAAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAyvMlAAAAAAA2DdsAAAAAADYN2wAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0A/vPzAAAAAAACDQ0A/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAKQAAACkAAACgAAAAAAAAALkAAAAAAAAA1wAAAJAAAADwAAAAAAAAAAAAAAAAAAAAKQAAACkAAACgAAAAAAAAALkAAAC5AAAAkAAAAJAAAADwAAAANwAAAAAAAAAAAAAAkAAAAJAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAHy4nAAAAAAAAAAAAAAAAAAAAAAAWXk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEALkAAAC5AAAAAAAAAAAAAAAQAAAA8AAAAKkAAACAAAAAKQAAAAAAAADXAAAAAAAAAAAAAADXAAAAuQAAAAAAAAAQAAAA8AAAAAAAAAAAAAAAEAAAAEcAAAAAAAAAAAAAAKkAAAAAAAAAEAAAAKAAAAAAAAAAyQAAADcAAAAAAAA2DdsAAAAAAMrzJQA2DdsAyvMlAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAADYN2wAAAAAAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADj3+YAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAXgD/AAAAAAAQAAAAAAAAAAAAAAAAAAAAcAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAKQAAAKAAAAAAAAAA8AAAAAAAAAAAAAAA8AAAAIAAAADXAAAAAAAAAAAAAAAAAAAAqQAAAAAAAAAAAAAAIAAAAAAAAAAAAAAA8AAAAAAAANAdKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQD/AAAAAAAAAAAY4loBAAAAAAAAAAD+8/MAAAAAAAAAAADqorMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAPAAAAAAAAAAEAAAAEcAAADXAAAAAAAAAAAAAAAAAAAAKQAAAAAAAACgAAAAAAAAAAAAAABwAAAAAAAAAKAAAABHAAAA1wAAAAAAAAAAAAAAKQAAAKAAAAAgAAAAAAAAADcAAAAAAAAAAAAAAAAAAAApAAAAgAAAAB0AAAAAAADK8yUANg3bAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAANg3bAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3b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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAKkAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZgCzAAAAAAAAAAAAAADYAAAAAAAAAAAAAAAAAAAA2AAAAAAAAADYAAAAAAAAANgAFl5NAAAAAAAAACUAAAAAAAAAJQAAAAAAAAAAAAAAAADqotgAAAAAAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAg0NAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAAAAAAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAfLicAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHy4nAAINDQAAAAAAAAAAAAINDQAAAAAAFl5NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAfLicAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwACDQ0AAAAAAAAAAAACDQ0AAAAAABZeTQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAB8uJwAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOPf5gAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wDh0tkA/vPzAAAAAABDRTcAHSEaAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0hGgBFUkQAAAAAAOHS2QD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MA4dLZAP7z8wAAAAAAQ0U3AB0hGgACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTf8AAAAAAAAAAAINDQAAAAAAAAAAAP7z8wAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5NAAAAAAACDQ0A/vPzAAAAAAACDQ0AAAAAAP7z8wAAAAAA6qKzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWXk0AAg0NAAAAAAAAAAAA/vPzAAAAAAACDQ0A/vPzAOqiswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTQAAAAAAAg0NAP7z8wAAAAAAAg0NAAAAAAD+8/MAAAAAAOqiswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFl5N/wAAAAAAAAAAAg0NAAAAAAAAAAAA/vPzAAAAAAAAAAAA6qKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ0U3AB0hGgAAAAAAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAQ0U3AB0hGgACDQ0AAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA49/mAOPf5gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAA/vPzAAAAAAAdIRoARVJEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAP7z8wAAAAAAHSEaAEVSRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAA/vPzAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAADh0tkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAA4dLZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+n6VpAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOqiswHQiygA+fv+AAcFAgAAAAAA+fv+AAcFAgAwddgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+APn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAg0NAAAAAAD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAAINDQAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN1jaAPn7/gAAAAAABwUCAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AHy4nAAINDQAAAAAAAAAAAAINDQAAAAAAFl5N/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAfLicAAg0NAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAB8uJwACDQ0AAAAAAAAAAAACDQ0AAAAAABZeTf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAAAAAAAAAAAAHy4nAAINDQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAA+fv+AAAAAAAA1wAAAPAAAADwAAAAAAAAAGAAAAA3AAAANwAAAAAAAAAAAAAAyQAAAAAAAADXAAAAAAAAAAAAAAApAAAAyQAAAFcAAAApAAAAAAAAAAAAAAAAAAAAkAAAAPAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igABwUCAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAcFAgD5+/4A+fv+AAAAAAAARwAAALkAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAAqQAAAFcAAAApAAAAAAAAAKAAAAAAAAAAKQAAAKAAAAAAAAAAAAAAAPAAAAAAAAAA8AAAAAAAAP7z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAA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+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAApAAAA1wAAAAAAAAAAAAAAAAAAAEcAAAAAAAAAKQAAAAAAAACQAAAAuQAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAAAAAAAAAAAOHS2QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCANDWKAAwANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gAHBQIABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAANwAAANcAAAAAAAAAAAAAACkAAACgAAAAYAAAAKAAAAAAAAAAAAAAADcAAACgAAAANwAAAAAAAADXAAAAAAAAAHAAAACgAAAAYAAAANcAAAAAAAAAAAAAAAAAAAAAAADqN7MB0NYoAAAAAAD5+/4ABwUCAPn7/gAHBQIAMHXYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAMFPYAAB1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/7/AAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4BAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAACkAAAAAAAAAoAAAAAAAAACgAAAAAAAAAPAAAAAAAAAAyQAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAADcAAADXAAAAAAAAAAAAAAApAAAAoAAAAAAAAAA3AAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAHBQIA+fv+AAcF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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAABQAA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4ABwUCAAAAAAAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAPn7/gA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+ADBT2AAAoAAAAAAAAAAAAAAAKQAAAAAAAAAAAAAAAAAAAJAAAAC5AAAAAAAAAMkAAAAAAAAAAAAAACkAAADXAAAAAAAAAAAAAAAAAAAAKQAAACkAAACgAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAHBQIAAAAAAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzf0yABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIA+fv+AADXAAAAAAAA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AAA3L9oBAMkAAAAAAAAANwAAACkAAACgAAAAAAAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAQBuAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAADQ1ij/AAAAAAAAAAD5+/4ABwUCAPn7/gA3+NoBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AAAAAAAAAAADJAAAAAAAAAPAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAuQAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAA8AAAABAAAQAAAAAAAAAAADcAAAAAAAAAAAAAAAAAAADJAAAAAAAAAAAAAADwAAAAAAAAAPAAAAAQAP8AAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADwAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAALkAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAAAAAAAAAAANDWKAAAAAAAAAAAAPn7/gAHBQIAAAAAADDz2AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAEAPAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAPkY/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuQAAAAAAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADwAAAA8AAA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+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIA+fv+AAcFAgD5+/4ABwUCAPn7/gA3etoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Iso//n7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIA+fv+AAcFAgD5+/4ABwUCAPn7/gAHBQIA+fv+AAcFAgAwKtgBACkAAADXAAAAyQAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAAAAAAAAApAAAAoAAA0A0o/wAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIA+fv+AAcFAgD5+/4ABwUCAPn7/gAHBQIA+fv+AQAAAAAHBQIA+fv+AAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAL5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIA0NYoAAAAAAD5+/4A+fv+AAAAAAAwKtgAAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAPn7/gAHBQIAMCrYAAAAAAAA1wAAAAAAAAAAAAAAAAAAAPAAAADwAAAAAAAAAAAAAAApAAAAKQAAAKAAAAA3AAD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAADAq2AAHBQIABwUCAPn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAD5+/4A+fv+AAAAAAAHBQIABAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAcFAgD5+/4ABwUCANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIAAAAAAPn7/gDQ1igAMOPYAABHAAAAAAAAADcAAADJAAAARwAAAAAAAAAAAAAAAAAAAAAAAACQAAAARwAAACkAAAfWAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIA0NYoAPn7/gAAAAAABwUC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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+AAcFAgAAAAAABwUCAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+AAcFAgAHBQIAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIA+fv+AAcFAgAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgD5+/4ABwUCADAq2ADK8yUAyvMlAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAPn7/gAHBQIAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAcFAgAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAAAAAAAAAAAADYN2wA2DdsAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAANg3bAAAAAAAAAAAAyvMlAAAAAAA2DdsAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAHBQIA+fv+ANDWKAAwANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAA0NYoADAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAADQ1igAyvMlADYN2wA2DdsAAAAAAAAAAADK8yUANg3bAMrzJQAAAAAANg3bAAAAAADK8yUANg3bAAAAAAA2DdsAAAAAAMrzJQA2DdsAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAABwUCAAAAAAD5+/4AAAAAAMnRJgA3ANoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4AAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAADcAAAApAAAAoAAAAAAAAAAAAAAAYAAAANcAAADWAAAHBQIAAAAAAAcFAgD5+/4A0NYoADB+2AAAAAAAAAAAAAA3AAAAyQAAAAAAAAA3AAAAAAAAAAAAAAAAAAAAKQAAANcAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAA2DdsAyvMlAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bADYN2wAAAAAAAAAAADYN2wDK8yUAyvMlAAAAAAAAAAAANg3bAMrzJQAAAAAANg3bAMrzJQAAAAAAAAAAAAAAAAA2DdsAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAyQAAAMkAAAC5AAAAyQAAAAAAAAAAAAAAyQAAAKAAAAAAAAAAAAAAAAAAAACgAAAAyQAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAMkAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAyvMlAAAAAADK8yUAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAANg3bAAAAAADK8yUANg3bAAAAAADK8yUAyvMlAAAAAAAAAAAABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAA8AAAAPAAAADwAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAAMkAAAC5AAAAuQAAAAAAAAAAAAAAyQAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAA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+/4ABwUCAPkg/gAHBQIA+SD+AAcFAgD5+/4AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bADYN2wAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4A+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4A+fv+AAAAAAAHBQIABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAD5+/4AAAAAAPn7/gAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAyvMlAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAMrzJQAAAAAAyvMlADYN2wAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAHBQIABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYypBQAAIABJREFUAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAPn7/gAHBQIABwUCAAcFAgAHBQIA+fv+APn7/gD5+/4ABwUCAAcFAgD5+/4A0NYoAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAEAAAABBwUCAQAAAAEHBQIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABZeTQD5+/4AAAAAAAAAAAAAAAAA+fv+AAcFAgAWXk0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+ADYN2wA2DdsAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAPn7/gD5+/4A+fv+APn7/gAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gD5+/4A+fv+AAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAADYN2wDK8yUAAAAAAAAAAAA2DdsAyvMlAAAAAAAAAAAANg3bADYN2wDK8yUAyvMlAMrzJQAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAPn7/gAAAAAABwUCAAcFAgAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4A+fv+APn7/gAAAAAABwUCAAAAAAAHBQIABwUCAAAAAAAHBQIABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAAAAAAD5+/4ABwUCAPn7/gACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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BwUCAPn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAA+fv+APn7/gAAAAAABwUCAAcFAgD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAA+fv+APn7/gAAAAAABwUCAAQHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4ABwUCAPn7/gD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBQIA+fv+AAcFAgD5+/4A+fv+AAcFAgAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAyvMlAAAAAADK8yUANg3bADYN2wAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAABPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAD5+/4ABwUCAPn7/gAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAPn7/gAHBQIA+fv+AAAAAAAwU9gAyagmAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAA+fv+AAcFAgD5+/4AAAAAADB12AAAAAAAAADYAAAAAAAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQiygAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4ABwUCAAAAAAD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAA+fv+AAAAAAAEAAAAAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gD5+/4ABwUCAPn7/gAAAAAA+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gD5+/4AAAAAAAcFAgD5+/4A+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+APn7/gAHBQIA+fv+AADXAAAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5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BQIAAAAAAAcFAgD5+/4AN1jaAAB6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAAAAAABwUCADAq2AAAAAAA6qKzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAg0NAP7z8wAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAA/wAAAAAAAAD5+/4AAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAANDWKAD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAMqGJgAAetoAAAAAAMqGJgAAAAAABwUCAPn7/gAHBQIAAHXYAAAAAADRiygAAHXYAAAAAADRiygA+fv+AAcFAgAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAPn7/gAH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ALkAAQAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3AAAAAAAAAAAAAAAAAP8AAAAAAAAAAADJAAAAAAAAAPAAAAAQAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Iso/wAAAAAAAAAA+fv+AAcFAgD5+/4AN3raAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABuAP8AAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAADwAAAAEAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcAAAAAAAAAAAAABADwAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAA8AAAABAAAAAAAAAAyQAAAPAAAAAAAAAAHQAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AAAABAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAALkAAAAAAAAA8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAABHAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAQAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuQAAAAAAAADwAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAPAAAAAQAAAAAAAAAMkAAADwAAAAAAAAAEcAAAAAAAAAyQAAAAAAAADwAAAA8AAAABAAAAAAAAAAAAAAAPAAAAAQAAAAAAAAAAAAAADwAAAAAAAAAAAAAAC5AAAAAAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAADwAAAAEAAAAAAAAADJAAAA8AAAAAAAAABHAAAAAAAAAMkAAAAAAAAA8AAAAPAAAAAQAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAuQAAAAAAAADwAAACABAAAAAAAAAAAAAAP8knAADgAAAAAAAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAAAAAAAHBQIABwUCAAAAAAAAAAAABwUCAD+5JwAA8AAAAPAAAD/JJwAA4AAAAAAAAADwAAA/yScAAPAAAADwAAAA8AAAP8knAAAAAAAAEAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAP7knAADwAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAPAAAADwAAA/yScAAAAAAAAQAAAAAAAAAAAAAD/JJwAA4AAAAAAAAADwAAA/yScAAOAAAAAAAAAA8AAAP8knAADwAAAAqQAAALkAAADwAAA/uScAAPAAAAAAAAA/uScAAPAAAADwAAA/yScAAOAAAAAAAAAA8AAAP8knAADwAAAA8AAAAPAAAD/JJwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdY2gAHBQIABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAA/yScAAOAAAAAAAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAKkAAAC5AAAA8AAAP7knAADwAAAAAAAAP7knAADwAAAA8AAAP8knAADgAAAAAAAAAPAAAD/JJwAA8AAAAPAAAADwAAA/yScAAAAAAAQA+CYAP9kBAMEv/wAAAAAAAAgmAADoAAAAAAAAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAD4JgAAAAAAAAAAAAAIJgAA6AAAAAAAAAAAAAAACCYAAAAAAAAAAAAAAAAAAAgmAAD4AAA/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AAD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAcFAgAHBQIABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAPn7/gD5+/4A+fv+AAcFAgAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAA+fv+AAcFAgAHBQIA+fv+AAAAAAAAAAAABwUCAAAAAAAHBQIA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAcFAgDQ1igAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAHBQIABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAPn7/gD5+/4A+fv+AAcFAgAHBQIAAAAAADcv2gAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gAHBQIAAgAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAcFAgAHBQIABwUCAPn7/gD5+/4AAAAAAAAAAAD5+/4A+fv+AAAAAAD5+/4ABwUCAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+APn7/gD5+/4A+fv+AAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAAcFAgAHBQIA+fv+APn7/gAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAHBQIABwUCAAAAAAD5+/4AAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAwU9gA+fv+APn7/gAAAAAA+fv+AAcFAgAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+APn7/gD5+/4A+fv+AAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAAcFAgAHBQIA+fv+APn7/gAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAHBQIABwUCAAAAAAD5+/4AAAAAAPn7/gAHBQIAAAAAAAAAAAAEBwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gD5+/4ABwUCAPn7/gAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gD5+/4ABwUCAPn7/gAAAAAA+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAANy/aAMnRJgAHBQIAAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+APn7/gAHBQIA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4A+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAADXAAAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4A+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAANcAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAABQAA+fv+AAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA6qKzABZeTQAAAAAA4dLZAOHS2QAAAAAAAAAAAAAAAAAAAAAA6qKzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAINDQD+8/MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIABAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgAAAAAABwUCAAAAAAAAAAAA+fv+APn7/gAAAAAABwUCAAcFAgD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAA+fv+APn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAHBQIABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAABwUCAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4A+fv+AAAAAAAHBQIABwUCAPn7/gAAAAAAAAAAAAcFAgAHBQIAAAAAAAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+8/MAAAAAAP7z8wAAAAAA/vPzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gAHBQIA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBSD8CBsAACAASURBVAIA+fv+AAcFAgDQ1igA+fv+AAcFAgD5+/4AAAAAAPn7/gAHBQIA0NYoAPn7/gAHBQIA+fv+AAAAAAD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAPn7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"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAABACAYAAACdi3yvAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gYGEx4aCjBh2QAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHgBALN/TIABAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAP//AAAA/wAAAP8AAAAAAAD/AAAAAAAAAAAAAAD//wAAAP8AAAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//wAAP/8AAD//AAA//wAAP/8AAD//AAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz////////////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD//wAA//8AAP8AAAD/AAAA//8AAP//AAD//wAA//8AAP//AAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///8AP///AD///wA///8AP///AD///wA///8AP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs////////////7Ozs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD///wA///8AP///AD///wA///8AP///AD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP8AAAD/AAAAAAAAAAAAAAAAAAAA///8AP///AD///wA///8AP///AD///wA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////9RUQCmAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAAD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf+mAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/wAAAP8AAAAAAAAAAAAAAAAAAAD///wA///8AP///AD///wA///8AP8AAAD/AAAA/wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////wAAAKYAAAAAAAAAAAAAALOzs///////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAAAP8AAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/pgAA/6YAAP+mAAD/pgAA/6YAAP+mAAD/pgAA/6YAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA/6YAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/AAAA/wAAAAAAAAAAAAAA///8AP///AD///wA///8AP///AD///wA///8AP///AD///wA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////AAAApgAAAAAAAACzs7P///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAAAAAAA//9RUf//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP//AAD//wAA//8AAP//AAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//8AAP//AAD/pgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD/AAAAAAAAAACmAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP8AAAD/AAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD///wA///8AP///AD///wA///8AP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs///////////////////////////////////////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//8AAP+mAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP//AAD//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP//AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD/pgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///AD///wA///8AP///AD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P//////////////////////////////////////7Ozs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//8AAP//AAD//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//8AAP//AAD//wAA/6YAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAA//8AAP//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAA//8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP+mAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///wA///8AP///AD///wA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/////////////////7Ozs///AAAApgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//8AAP//AAD//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//8AAP//AAD/pgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAP8AAAAAAAAAAP8AAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD/AAAAAAAAAACmAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///AD///wA///8AP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/////////////////+zs7P//1FRAP8AAACmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/pgAA/6YAAP+mAAD/pgAA/6YAAP+mAAD/pgAA/6YAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//8AAP+mAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP//AAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP//AAD//wAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///wA///8AP///AD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/////////////////s7Oz/wAAAAAAAAAA/1FRAKYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAAAP9RUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR/6YAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP//AAD//wAA//8AAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///AD///wA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/////////////////7Ozs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAAAAAAAAAAAAAKYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6y70GwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA//8AAP//AAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///wA///8AP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAACmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AAD//wAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///AD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAAAKYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAAAAAAAAAAAAAKYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAD/////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA/////wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAP////8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8AAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD/////AP///wAAAAAAAAAAANDJAQAAAAAAAP0BAAAAAAD///8A////AAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA/////wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAP////8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8AAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD/////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAP8AAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAF/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAD/AAAAAAAAAAAAAAD/////AAAAAADRjCkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0YwpAAAAAAD///8AAAAA/wAAAAAAAAAAAAAA/////wAAAAAAAP0BAAD9AQAAAAAAAAAAAAD9AQDQzAAA0MkBAAAAAAAAAAAA////AAAAAP8AAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAD/AAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAd8BAAHfAQAB3wEAAX8BAAAAAAD///8AAAAA/wAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzc3MAc3NzAAAAAAAAAAAA////AAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxnwEAAAAAAE9h/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADRjCkAL3TXAAAAAAAAAAAAAAAAANGMKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQzAAAAAAAADA0AQAAAAAAAAAAAAAAAAAwNAAAAP0BAAAAAAAAA/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHfAQAA1wAAAAAAAAAAAAAAAAAAACkAAP8h/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAd8BAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAc3NzAEFBQQBMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAQEB/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////////////////////////////sJ4A///8AP///AD/sJ4A////////////////////////////AAAA/wAAAP//////////////////////////////////////XzMA/////////////////////////////////wAAAP8AAAD//////////////////////wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA//////////////////////8AAAD/AAAA////////////z8gA/////////AD/z8gA/8/IAP///AD///wA/8/IAP/PyAD/////////////////AAAA/wAAAP////////////////8A3gD/ALUA/wC1AP8AtQD/ALUA/wC1AP8AtQD/ALUA/////////////////wAAAP8AAAD//////////////////////wDeAP8A3gD/AN4A/wDeAP8AfgD/AH4A/wB+AP////////////////8AAAD/AAAA//////////////////////////////////////9ycnL/////////////////cnJy////////////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD//////wC1AP8AtQD/ALUA/wDeAP//////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAALGfAQBPYIgAAAAAAAAAAABPXgAAsZ8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgzP8AYDQBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEB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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////wAAAP8AAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////8AAAD/AAAAAAAAAAAAAAD///////////8AtQD/////////////////////////////////////////////////AAAA/wAAAAAAAAAAAAAA///////////////////8AP//////z8gA///8AP//////z8gA/////////////////wAAAP8AAAAAAAAAAAAAAP////////////////////////////////////////////////////////////////8AAAD/AAAAAAAAAAAAAAD/////////////////ALUA////////////////////////////////////////////AAAA/wAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////////wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAP///wABAQH/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAADQyQEAMDf/AAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAA////AAAAAAABAQH/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAA/wAAAP////8A////AP///wD///8A////AP///wAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/////AP///wD///8A////AP///wD///8AAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/////wAwMDAA////AP///wAwMDAA////AAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP////8A////AP///wD///8A////AP///wAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/////AP///wD///8A////AP///wD///8AAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/////wD///8A////AP///wD///8A////AAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP////8A////AP///wD///8A////AP///wAAAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////////////////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA////////////MDAw/wDeAP8A3gD/AMD//wDA//8wMDD///////////8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////////////////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////////////////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAGGsgAAAAAAAAAAAAAAAAD/ek4AAAAAAAAAAAD///8AAQEB/wAAAAEAAAAAAAAA/////wAAAAAAAAAAADExMQAAAAAAAAAAAAAAAAAAAAAAAAAAAM/PzwAAAAAA////AAEBAf8AAAABAAAAAAAAAP////8AAAAAAAAAAAAAAAAA/3NRAAAAAAAAqwEAAAAAADEAMAAAAAAAAAAAAP///wABAQH/AAAAAQAAAAAAAAD/////AAAAAAAAAAAAMTExAAAAAAAAAAAAAAAAAAAAAAAAAAAAz8/PAAAAAAD///8AAQEB/wAAAAEAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAA////AAEBAf8AAAABAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYayAAAAAAAAAAAA/3pOAP///wABAQH/AAAAAQAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAD//wD///8AAQEB/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAP////8AAAAAAAAAAAABhrIAAAAAAAAAAAAAAAAAAAAAAAAAAAD/ek4AAAAAAAAAAAABAQEAAAAAAQAAAAAAAAD/////AAAAAAAxMTEAz85YAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTKoAM/PzwAAAAAAAQEBAAAAAAEAAAAAAAAA/////wAAAAAAAAAAAAAAAAAxMTEA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAD///8AAAAAAAAAAAAxMTEAz85YAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTKoAM/PzwAAAAAAAAAAAAEBAQAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAMTExAAAAAADPz88AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMTExAM8hIQAx398Az8/PAAAAAAAAAAAAAQEBAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAA////AAAAAAABwQAAAAAAAAAAAAAAkm4AAG6SAP8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAP///wAAAAAAAAAAAAABAQAAAAAAAd4AAAAAAAAAoAAA/4H/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAQEAAAAAAAD//wAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYayAAGGsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAMTKoAAAAAAAAAAAAMTKoAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAADExMQDPz88Az8/PADExMQAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM8hIQAxMTEAAAAAAAEBAQAAAAABAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAEBAQEAAAAAAP8/AAAAAAAAAAAAAP+tkgD/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAABAQEBAAAAAAAAAAAAAAAAAKcAAACmIgAA/yH/ADCyMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAD//wAA//8AAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////////////8AhbH/AIWx////////////////////////////AAAA/wAAAAAAAAAAAAAA/////////////////zAwMP//////MDAw/zAwMP//////MDAw/////////////////wAAAP8AAAAAAAAAAAAAAP////////////////8wMDD//1FR//9RUf8AwP//AMD//zAwMP////////////////8AAAD/AAAAAAAAAAAAAAD///////////////////////////////////////////8wMDD/MDAw////////////AAAA/wAAAAAAAAAAAAAA////////////////////////AAD//wAA//8AAP//AAD//////////////////////wAAAP8AAAAAAAAAAAAAAP////////////////8AwP////////////////////////////////////////////8AAAD/AAAAAAAAAAAAAAD/////////////AAD/////////////////MDAw/zAwMP//////////////////////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAD//////////////////////////////////////////////////////wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAP///////////zAwMP8A3gD/AN4A///8AP///AD/MDAw////////////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////////////////////////////////////wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////////////////////////////////////8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAP//////////////////////////////////////////////////////AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////////zAwMP///////////////////////////wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wAAAAD/AAAA/////////////////////////////////wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP////////////////////////////////8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD//////zAwMP///////////zAwMP//////AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/////////////////////////////////wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP////////////////////////////////8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/////////////////////////////////AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/////////////////////////////////wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////ADAwMAD///8A////ADAwMAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8A////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wAwMDAAAN4AAADeAAAAwP8AAMD/ADAwMAD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABjSBy3wQAAAAAAAAAAP///wAAAAAAAAAAAAAAAAABhrIAAAAAAAAAAAAAAAAA/3pOAAAAAAAAAAAA////AAEBAQAAAAAAZd1jhwAAIABJREFUAAAAAAAAAAD///8AAAAAAAAAAAAxMTEAAAAAAAAAAAAAAAAAAAAAAAAAAADPz88AAAAAAP///wABAQEAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAP9zUQAAAAAAAKsBAAAAAAAxADAAAAAAAAAAAAD///8AAQEBAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAADExMQAAAAAAAAAAAAAAAAAAAAAAAAAAAM/PzwAAAAAA////AAEBAQAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAP///wABAQEAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGsgAAAAAAAAAAAP96TgD///8AAQEBAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAEBAAAAAAAA//8AAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGsgABhrIAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAADEyqAAAAAAAAAAAADEyqAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAxMTEAz8/PAM/PzwAxMTEAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADPISEAMTExAAAAAAABAQEAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAQEBAAAAAAD/PwAAAAAAAAAAAAD/rZIA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAACnAAAApiIAAP8h/wAwsjAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAA//8AAP//AAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8AAIWxAACFsQD///8A////AP///wD///8A////AAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wAwMDAA////ADAwMAAwMDAA////ADAwMAD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8AMDAwAP9RUQD/UVEAAMD/AADA/wAwMDAA////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AP///wD///8AMDAwADAwMAD///8A////AAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A/wAAAP8AAAD/AAAA/wAAAP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8AAMD/AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAP///wD///8A/wAAAP///wD///8A////ADAwMAAwMDAA////AP///wD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wAwMDAAAN4AAADeAAD//AAA//wAADAwMAD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wAwMDAA////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8A////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAwMDAA////AP///wAwMDAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8A////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wD///8A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADcUiemAAAAUElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKhvefIWWWy0AAAAASUVORK5CYII="

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAACACAYAAACMY2IbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gYREjUWufrVigAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHgBALN/TIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAALUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAAAAAAAAAAAAAAAAAAALUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABLAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAA////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8AAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAQAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAGvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAAEBAQAAAAAAAAAAAP///wABAQEAAAAAAAAAAAAAAAAAAAAAAP///wABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wAAAAAAAAAAAAAAAAD///8A////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68A////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAa+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAABAQEAAAAAAAAAAAABAQEAAAAAAAAAAAABAQEAAAAAAABAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAq1BQeQAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAP///wAAAAAAAAAAAP///wAAAAAAAAAAAP///wAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAD///8A////AP///wAAAAAA////AP///wD///8A////AP///wABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEA/1FRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAQEBAAAAAAAAtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAEBAQAAAAAAAAAAAP9RUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAEBAQAAAAAAALUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAEBAQAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AwP8AAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAADA/wAAAAAAAEABAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwi6/jAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA//+cUQABZK8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/5xRAAFkrwAAAAAAAMkAAAAAAAAAAAAAAIIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP//c1EAAY2vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9zUQABja8AAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAIIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs///////////////////////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs///////TExMAAAAAAAAAAAAAAAAAAAAAABMTEwA/////7Ozs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAQEBAQAAAAAAAI991BEAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD//5xRAAFkrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/nFEAAWSvAAAAAAAAyQAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP//nFEAAWSvAAAAAAAAAAAAAAAAAP+cUQABZK8AAAAAAADJAAAAAAAAAIIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExMTACzs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAL/wAAAAAAAAv/AAAL/wAAC/8AAAv/AAAL/wAAC/8AAAv/AAAAAAAAC/8AAAv/AAAHsQAAB7EAAAexAACFsf8AhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD//5xRAAGNrwAAKQAAACkAAAApAAD/nFEAAY2vAAApAAAAyQAAAAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP///5FSAAFvrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/kVIAAW+uAAAAAAAAxbIAAAAAAAAAAAAAAAAAAM28AAAzRAAAhbH/AHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/AAAAAAAAAAAAAAAAAAAAALS0tAABAQEBTU1NAU1NTQFNTU0BTU1NAQEBAQG0tLQAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAM28AAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACIAAQFkrwD/c1EAANcAAADXAAAA1wAAAWSvAP9zUQAA1wAAADcAAAAAAAAAAAAAAIIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE1NTQG0tLQAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACukwEAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv/AAAAAAAAC/8AAAv/AAAL/wAAC/8AAAAAAAAL/wAAC/8AAAexAAAHsQAAhbH/AIWx/wCFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/AAAAAAAAAAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////kVIAAW+uAAAAAAAAAAAAAAAAAP+RUgABb64AAAAAAADFsgAAAAAAAAAAAAAAAAAAzbwAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzbwAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK6TAQAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAYWx//+RUgABNGAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNGAA/5FSAAE0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO04AAMygAAA7TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzKAAADtOAAAAAAAAxbIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAQGFsf//kVIAATRgAAAAAAAAAAAAATRgAP+RUgABNGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABb64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFvrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADtOAAAAAAAAO04AADtOAAA7TgAAO04AAAAAAAA7TgAAO04AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNTU0B/////wAAAAAAAAAAAAAAALOzs/9NTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAC0tLQATExMAAAAAAAAAAAAtLS0AExMTAAAAAAAAAAAALS0tABNDUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW+uAAAAAAAAAAAAAAAAAAAAAAABb64AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQATExMAAAAAAAAAAAATExMALOzs/9NTU0BAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBAAAAAAAAAAAAAADS/gAADQAAAAAAAAAAAAAA0v4AAA0AAAAAAAAAAAAAANL+AAA7AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAtLS0AExMTAAAAAAAAAAAALS0tABNDUwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs39MgAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVDxqmgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwA/////7S0tAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBAAAAAAAAAAAAAADS/gAADQAAAAAAAAAAAAAA0v4AADsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSbf8AAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJt/wAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzRAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNEAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFsgAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAQDA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALPztABN0v4Asy4CAE3S/gCzLgIATdL+ALMuAgBN0v4Asy4CAE3S/gCzLgIATdL+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALPztABNDUwAAMWyAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATQ1MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABzPOsDAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/+iP8AAAAAAP54AAAAAADQzAAAAAAAAOHWAAAAAAAAUGIAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/1FR/wAAAAAAr68AAAAAAKcAAAAAAAAAWgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//wAAAAAAxbIAAAAAAADNvAAAAAAAAK6TAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A/wDeAP8AtQD/ALUA/wB+AP8AfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMDD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD/AAAAAAAAAAAAAAAAAAAAAKYAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/1FR//9RUf//AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/AN4A/wC1AP8AtQD/AH4A/wB+AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMDAw/0JCQgAwMDD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoAAAGmAAD/AAAAAAAAAACmAAD/WgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGYm/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/RAQDBydkBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH0U//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPcZDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2hFByAAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACDQ0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHSEaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACYkHQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz////////////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAAAAAAAAAAAAAAAAAEABAP9RUQAAAAAAAa+vAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEaQeW+AgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/wABr68AAAAAAP9RUQAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMuppeAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAA/////0xMTABMTEwAs7Oz/wAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAAAAAAALOzs/9MTEwATExMAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAABMTEwAs7Oz/wAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwA/////7S0tAAAAAAATExMAAAAAAAAAAAAAAAAALOzs/9NTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAFAAQD/UVEA/1FRAAFLrwAAtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABNTU0BtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAP8AwP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAP9RUQAAAAAAAa+vAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP//UVH//1FR//9RUf8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P//////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAP//UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs////////////0xMTAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAABMTEwA//////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD//1FRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANAjESgAACAASURBVAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAP//UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAAT09PAAAAAAAAAAAAAAAAAAAAAAAAAAAAsbGxAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68AT09PAAAAAAAAAAAAsbGxAAAAAAAAAAAAAAAAAE9PTwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQATExMAAAAAAAAAAAATExMALOzs/9NTU0BAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAE9PTwAAAAAAsbGxAAAAAAAAAAAAAAAAAAAAAAAAAAAAsbGxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAP////+0tLQAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAP//UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwBPT08AAAAAALGxsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxsbEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwAs7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwBPT08AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7OzALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxsbEAAAAAAAAAAAAAAAAAAAAAALOzswAAAAAAAAAAALOzswBNTU0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7MATExMAAAAAAEAAAD/AAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA//9RUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68AT09PALGxsQAAAAAAAAAAAAAAAACzs7MAAAAAAAAAAAAAAAAAAAAAAAAAAABNTU0AAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAs7OzAExMTAAAAAAAAAAAAAAAAAC0tLT/AAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////ALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wD///8A////AP///wCzs7MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs////////////7Ozs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8As7OzAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWfMiQgAAAJVJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJdhy85A0wzKAAAAAElFTkSuQmCC"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = {"columns":5,"image":"../images/atlas.png","imageheight":256,"imagewidth":160,"margin":0,"name":"atlas","spacing":0,"tilecount":40,"tileheight":32,"tileproperties":{"0":{"name":"forest"},"1":{"name":"waste"},"2":{"name":"log-camp"},"3":{"name":"science-camp"},"4":{"name":"village"},"5":{"name":"river-up-down"},"6":{"name":"river-down-right"},"7":{"name":"river-down-left"},"8":{"name":"river-down-left-right"},"9":{"name":"river-up-down-left"},"10":{"name":"river-left-right"},"11":{"name":"river-up-right"},"12":{"name":"river-up-left"},"13":{"name":"river-up-down-right"},"14":{"name":"river-up-left-right"},"15":{"name":"road-up-down"},"16":{"name":"road-down-right"},"17":{"name":"road-left-down"},"18":{"name":"road-down-left-right"},"19":{"name":"road-up-down-left"},"20":{"name":"road-left-right"},"21":{"name":"road-up-right"},"22":{"name":"road-up-left"},"23":{"name":"road-up-down-right"},"24":{"name":"road-up-left-right"},"25":{"name":"road-up-down-left-right"},"26":{"name":"road-right"},"27":{"name":"road-down"},"28":{"name":"road-up"},"29":{"name":"road-left"},"30":{"name":"bridge-up-down"},"31":{"name":"bridge-left-right"}},"tilepropertytypes":{"0":{"name":"string"},"1":{"name":"string"},"2":{"name":"string"},"3":{"name":"string"},"4":{"name":"string"},"5":{"name":"string"},"6":{"name":"string"},"7":{"name":"string"},"8":{"name":"string"},"9":{"name":"string"},"10":{"name":"string"},"11":{"name":"string"},"12":{"name":"string"},"13":{"name":"string"},"14":{"name":"string"},"15":{"name":"string"},"16":{"name":"string"},"17":{"name":"string"},"18":{"name":"string"},"19":{"name":"string"},"20":{"name":"string"},"21":{"name":"string"},"22":{"name":"string"},"23":{"name":"string"},"24":{"name":"string"},"25":{"name":"string"},"26":{"name":"string"},"27":{"name":"string"},"28":{"name":"string"},"29":{"name":"string"},"30":{"name":"string"},"31":{"name":"string"}},"tiles":{"0":{"probability":20,"type":"terrain"},"1":{"type":"terrain"},"2":{"probability":0.100000001490116,"type":"settlement"},"3":{"probability":0.100000001490116,"type":"settlement"},"4":{"probability":0.100000001490116,"type":"settlement"},"5":{"probability":2,"type":"river"},"6":{"probability":30,"type":"river"},"7":{"probability":3,"type":"river"},"8":{"probability":10,"type":"river"},"9":{"probability":10,"type":"river"},"10":{"probability":2,"type":"river"},"11":{"probability":3,"type":"river"},"12":{"probability":3,"type":"river"},"13":{"probability":10,"type":"river"},"14":{"probability":10,"type":"river"},"15":{"probability":2,"type":"road"},"16":{"type":"road"},"17":{"type":"road"},"18":{"type":"road"},"19":{"type":"road"},"20":{"probability":2,"type":"road"},"21":{"type":"road"},"22":{"type":"road"},"23":{"type":"road"},"24":{"type":"road"},"25":{"type":"road"},"26":{"type":"road"},"27":{"type":"road"},"28":{"type":"road"},"29":{"type":"road"},"30":{"type":"bridge"},"31":{"type":"bridge"}},"tilewidth":32,"type":"tileset","wangsets":[{"cornercolors":[],"edgecolors":[{"color":"#ff0000","name":"Road","probability":1,"tile":-1},{"color":"#00ff00","name":"Forest","probability":10,"tile":-1},{"color":"#0000ff","name":"River","probability":1,"tile":-1}],"name":"Wang Atlas","tile":-1,"wangtiles":[{"dflip":false,"hflip":false,"tileid":0,"vflip":false,"wangid":[2,0,2,0,2,0,2,0]},{"dflip":false,"hflip":false,"tileid":2,"vflip":false,"wangid":[2,0,1,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":3,"vflip":false,"wangid":[2,0,1,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":4,"vflip":false,"wangid":[2,0,3,0,2,0,3,0]},{"dflip":false,"hflip":false,"tileid":5,"vflip":false,"wangid":[3,0,2,0,3,0,2,0]},{"dflip":false,"hflip":false,"tileid":6,"vflip":false,"wangid":[2,0,3,0,3,0,2,0]},{"dflip":false,"hflip":false,"tileid":7,"vflip":false,"wangid":[2,0,2,0,3,0,3,0]},{"dflip":false,"hflip":false,"tileid":8,"vflip":false,"wangid":[2,0,3,0,3,0,3,0]},{"dflip":false,"hflip":false,"tileid":9,"vflip":false,"wangid":[3,0,2,0,3,0,3,0]},{"dflip":false,"hflip":false,"tileid":10,"vflip":false,"wangid":[2,0,3,0,2,0,3,0]},{"dflip":false,"hflip":false,"tileid":11,"vflip":false,"wangid":[3,0,3,0,2,0,2,0]},{"dflip":false,"hflip":false,"tileid":12,"vflip":false,"wangid":[3,0,2,0,2,0,3,0]},{"dflip":false,"hflip":false,"tileid":13,"vflip":false,"wangid":[3,0,3,0,3,0,2,0]},{"dflip":false,"hflip":false,"tileid":14,"vflip":false,"wangid":[3,0,3,0,2,0,3,0]},{"dflip":false,"hflip":false,"tileid":15,"vflip":false,"wangid":[1,0,2,0,1,0,2,0]},{"dflip":false,"hflip":false,"tileid":16,"vflip":false,"wangid":[2,0,1,0,1,0,2,0]},{"dflip":false,"hflip":false,"tileid":17,"vflip":false,"wangid":[2,0,2,0,1,0,1,0]},{"dflip":false,"hflip":false,"tileid":18,"vflip":false,"wangid":[2,0,1,0,1,0,1,0]},{"dflip":false,"hflip":false,"tileid":19,"vflip":false,"wangid":[1,0,2,0,1,0,1,0]},{"dflip":false,"hflip":false,"tileid":20,"vflip":false,"wangid":[2,0,1,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":21,"vflip":false,"wangid":[1,0,1,0,2,0,2,0]},{"dflip":false,"hflip":false,"tileid":22,"vflip":false,"wangid":[1,0,2,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":23,"vflip":false,"wangid":[1,0,1,0,1,0,2,0]},{"dflip":false,"hflip":false,"tileid":24,"vflip":false,"wangid":[1,0,1,0,2,0,1,0]},{"dflip":false,"hflip":false,"tileid":25,"vflip":false,"wangid":[1,0,1,0,1,0,1,0]},{"dflip":false,"hflip":false,"tileid":30,"vflip":false,"wangid":[1,0,3,0,1,0,3,0]},{"dflip":false,"hflip":false,"tileid":31,"vflip":false,"wangid":[3,0,1,0,3,0,1,0]}]}]}

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = {"columns":10,"image":"../images/icons.png","imageheight":64,"imagewidth":160,"margin":0,"name":"icons","spacing":0,"tilecount":40,"tileheight":16,"tileproperties":{"0":{"name":"heart"},"1":{"name":"bolt"},"2":{"name":"wrench"},"3":{"name":"up"},"4":{"name":"down"},"5":{"name":"left"},"6":{"name":"right"},"7":{"name":"player-red"},"8":{"name":"player-dark"},"10":{"name":"gold"},"11":{"name":"wood"},"12":{"name":"cow"},"13":{"name":"crop"},"14":{"name":"tree"},"15":{"name":"leaf"},"16":{"name":"wrench-round"},"17":{"name":"tree-small"},"20":{"name":"question"},"21":{"name":"skull"},"22":{"name":"dna"},"23":{"name":"mind"},"24":{"name":"red-cross-large"},"25":{"name":"fish"},"26":{"name":"bird"},"27":{"name":"red-cross-small"}},"tilepropertytypes":{"0":{"name":"string"},"1":{"name":"string"},"2":{"name":"string"},"3":{"name":"string"},"4":{"name":"string"},"5":{"name":"string"},"6":{"name":"string"},"7":{"name":"string"},"8":{"name":"string"},"10":{"name":"string"},"11":{"name":"string"},"12":{"name":"string"},"13":{"name":"string"},"14":{"name":"string"},"15":{"name":"string"},"16":{"name":"string"},"17":{"name":"string"},"20":{"name":"string"},"21":{"name":"string"},"22":{"name":"string"},"23":{"name":"string"},"24":{"name":"string"},"25":{"name":"string"},"26":{"name":"string"},"27":{"name":"string"}},"tilewidth":16,"type":"tileset"}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = {"columns":5,"image":"../images/icons-xl.png","imageheight":128,"imagewidth":160,"margin":0,"name":"icons-xl","spacing":0,"tilecount":20,"tileheight":32,"tileproperties":{"0":{"name":"party1"},"1":{"name":"party2"},"2":{"name":"party3"},"5":{"name":"zoom-out"},"6":{"name":"zoom-in"},"7":{"name":"glass"},"8":{"name":"pack-big"},"9":{"name":"pack-small"},"10":{"name":"jeep-blue"},"11":{"name":"canoe"},"12":{"name":"motor-boat"},"13":{"name":"no-boat"},"15":{"name":"jeep-red"},"16":{"name":"settings"}},"tilepropertytypes":{"0":{"name":"string"},"1":{"name":"string"},"2":{"name":"string"},"5":{"name":"string"},"6":{"name":"string"},"7":{"name":"string"},"8":{"name":"string"},"9":{"name":"string"},"10":{"name":"string"},"11":{"name":"string"},"12":{"name":"string"},"13":{"name":"string"},"15":{"name":"string"},"16":{"name":"string"}},"tilewidth":32,"type":"tileset"}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _Camera = __webpack_require__(67);

var _Camera2 = _interopRequireDefault(_Camera);

var _Overlay = __webpack_require__(68);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapView = function () {
  function MapView(store, canvas, ctx, loader) {
    _classCallCheck(this, MapView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.connect = new _Connect2.default(this.store);
    this.camera = new _Camera2.default(this.store, this.canvas, this.ctx, this.loader);
    this.overlay = new _Overlay2.default(this.store, this.canvas, this.ctx, this.loader);
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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _requests = __webpack_require__(7);

var _constants = __webpack_require__(2);

var _utils = __webpack_require__(3);

var _draw = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(store, canvas, ctx, loader) {
    _classCallCheck(this, Camera);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.atlas = loader.getImage('atlas');

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
        x: Math.round(x * size - Math.floor(this.canvas.width / 2) + size / 2),
        y: Math.round(y * size - Math.floor(this.canvas.height / 2) + size / 2)
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
        var pos = this.connect.positionCoords;
        var tile = (0, _utils.getItemById)(this.visibleTiles, clickId);
        if (Math.abs(pos.x - tile.x) + Math.abs(pos.y - tile.y) === 1) {
          this.store.dispatch((0, _requests.position)(clickId));
        }
      }
    }
  }, {
    key: 'update',
    value: function update(delta, x, y) {
      this.updateClick(x, y);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var pos = this.connect.positionCoords;
      var sight = this.connect.sight.sight;
      var _connect$map = this.connect.map,
          zoom = _connect$map.zoom,
          mapTiles = _connect$map.mapTiles;

      var mapTileSize = this.atlas.tileset.tilewidth * zoom;
      var gridZoom = (mapTileSize - 1) / (mapTileSize / zoom);

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
              xPos: x, yPos: y, width: mapTileSize, height: mapTileSize
            }));
            dim = false;
          } else {
            dim = true;
          }
          if (mapTile) {
            [BASE, MIDDLE].forEach(function (layer) {
              var id = mapTile.layers[layer];
              (0, _draw.drawById)(_this.ctx, _this.atlas, id, gridZoom, x, y);
            });
            if (dim) {
              _this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
              _this.ctx.fillRect(x, y, mapTileSize, mapTileSize);
            }
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
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _actions = __webpack_require__(0);

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _Party = __webpack_require__(69);

var _Party2 = _interopRequireDefault(_Party);

var _Vehicle = __webpack_require__(70);

var _Vehicle2 = _interopRequireDefault(_Vehicle);

var _Inventory = __webpack_require__(71);

var _Inventory2 = _interopRequireDefault(_Inventory);

var _Zoom = __webpack_require__(73);

var _Zoom2 = _interopRequireDefault(_Zoom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Overlay = function () {
  function Overlay(store, canvas, ctx, loader) {
    _classCallCheck(this, Overlay);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.loader = loader;

    this.zoom = new _Zoom2.default(this.store, this.canvas, this.ctx, this.loader);
    this.party = new _Party2.default(this.store, this.canvas, this.ctx, this.loader);
    this.vehicle = new _Vehicle2.default(this.store, this.canvas, this.ctx, this.loader);
    this.inventory = new _Inventory2.default(this.store, this.canvas, this.ctx, this.loader);
  }

  _createClass(Overlay, [{
    key: 'update',
    value: function update(delta, xClick, yClick) {
      this.zoom.update(delta, xClick, yClick);
      this.party.update(delta, xClick, yClick);
      this.vehicle.update(delta, xClick, yClick);
      this.inventory.update(delta, xClick, yClick);
    }
  }, {
    key: 'render',
    value: function render() {
      this.zoom.render();
      this.party.render();
      this.vehicle.render();
      this.inventory.render();
    }
  }]);

  return Overlay;
}();

exports.default = Overlay;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _utils = __webpack_require__(3);

var _draw = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Party = function () {
  function Party(store, canvas, ctx, loader) {
    _classCallCheck(this, Party);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new _Connect2.default(this.store);

    var party = this.connect.party.party;

    this.scale = 2;
    this.buttons = this.makeButtons(this.canvas, this.iconsXl, this.scale, party);
  }

  _createClass(Party, [{
    key: 'makeButtons',
    value: function makeButtons(canvas, image, scale, party) {
      var size = image.tileset.tilewidth * scale;
      return party.map(function (member, index) {
        return {
          name: member.name,
          xPos: 0,
          yPos: index * size,
          width: size,
          height: size
        };
      });
    }
  }, {
    key: 'update',
    value: function update(delta, x, y) {
      var clickName = x && y && (0, _utils.screenToButtonName)(x, y, this.buttons);
      clickName && console.log(clickName);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var party = this.connect.party.party;

      var size = this.iconsXl.tileset.tilewidth * this.scale;

      party.map(function (member, idx) {
        (0, _draw.drawById)(_this.ctx, _this.iconsXl, member.icon, _this.scale, 0, idx * size);
        [].concat(_toConsumableArray(Array(member.health))).map(function (_, i) {
          (0, _draw.drawByName)(_this.ctx, _this.icons, 'heart', 1, 64 + i * 24, (idx * 2 + 0.4) * 32);
        });
        [].concat(_toConsumableArray(Array(member.jeito))).map(function (_, i) {
          (0, _draw.drawByName)(_this.ctx, _this.icons, 'bolt', 1, 64 + i * 24, (idx * 2 + 1.1) * 32);
        });
      });
    }
  }]);

  return Party;
}();

exports.default = Party;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _utils = __webpack_require__(3);

var _draw = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Vehicle = function () {
  function Vehicle(store, canvas, ctx, loader) {
    _classCallCheck(this, Vehicle);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.icons = loader.getImage('icons');
    this.iconsXl = loader.getImage('icons-xl');

    this.connect = new _Connect2.default(this.store);

    var vehicle = this.connect.vehicle.vehicle;

    this.scale = 2;
    this.buttons = this.makeButtons(this.canvas, this.iconsXl, this.scale, vehicle);
  }

  _createClass(Vehicle, [{
    key: 'makeButtons',
    value: function makeButtons(canvas, image, scale, vehicle) {
      var size = image.tileset.tilewidth * scale;
      return [{
        name: vehicle.type,
        xPos: 0,
        yPos: canvas.height - size,
        width: size,
        height: size
      }];
    }
  }, {
    key: 'update',
    value: function update(delta, x, y) {
      var clickName = x && y && (0, _utils.screenToButtonName)(x, y, this.buttons);
      clickName && console.log(clickName);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      var vehicle = this.connect.vehicle.vehicle;

      var size = this.iconsXl.tileset.tilewidth * this.scale;

      (0, _draw.drawById)(this.ctx, this.iconsXl, vehicle.icon, this.scale, 0, this.canvas.height - size);
      [].concat(_toConsumableArray(Array(vehicle.repair))).map(function (_, i) {
        (0, _draw.drawByName)(_this.ctx, _this.icons, 'wrench', 1, 64 + i * 24, 440);
      });
    }
  }]);

  return Vehicle;
}();

exports.default = Vehicle;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _Animation = __webpack_require__(72);

var _Animation2 = _interopRequireDefault(_Animation);

var _utils = __webpack_require__(3);

var _draw = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Inventory = function () {
  function Inventory(store, canvas, ctx, loader) {
    _classCallCheck(this, Inventory);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;
    this.iconsXl = loader.getImage('icons-xl');

    this.animate = new _Animation2.default(2, 0.5);
    this.connect = new _Connect2.default(this.store);

    this.scale = 4;
    this.buttons = this.makeButtons(this.canvas, this.iconsXl, this.scale, ['pack-big']);
  }

  _createClass(Inventory, [{
    key: 'makeButtons',
    value: function makeButtons(canvas, image, scale, names) {
      var _this = this;

      var size = image.tileset.tilewidth * scale;
      return names.map(function (name, index) {
        return {
          name: name,
          xPos: canvas.width - size,
          yPos: canvas.height / 2 - size / 2 + _this.animate.getValue(),
          width: size,
          height: size
        };
      });
    }
  }, {
    key: 'update',
    value: function update(delta, x, y) {
      this.animate.update(delta);
      var clickName = x && y && (0, _utils.screenToButtonName)(x, y, this.buttons);
      clickName && console.log(clickName);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.buttons.map(function (button) {
        (0, _draw.drawByName)(_this2.ctx, _this2.iconsXl, button.name, _this2.scale, button.xPos, button.yPos + _this2.animate.getValue());
      });
    }
  }]);

  return Inventory;
}();

exports.default = Inventory;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animation = function () {
  function Animation(distance, interval) {
    _classCallCheck(this, Animation);

    this.distance = distance;
    this.interval = interval;
    this.time = 0;
    this.value = 0;
  }

  _createClass(Animation, [{
    key: "update",
    value: function update(delta) {
      this.time += delta;
      if (this.time >= this.interval) {
        this.time = 0;
        this.value = this.value === 0 ? -this.distance : 0;
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
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _requests = __webpack_require__(7);

var _actions = __webpack_require__(0);

var _utils = __webpack_require__(3);

var _draw = __webpack_require__(4);

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
    this.buttons = this.makeButtons(this.canvas, this.iconsXl, this.scale, ['settings', 'zoom-out', 'zoom-in']);
  }

  _createClass(Zoom, [{
    key: 'makeButtons',
    value: function makeButtons(canvas, image, scale, names) {
      var size = image.tileset.tilewidth * scale;
      return names.map(function (name, index) {
        return {
          name: name,
          xPos: canvas.width - size * (index + 1),
          yPos: 0,
          width: size,
          height: size
        };
      });
    }
  }, {
    key: 'update',
    value: function update(delta, x, y) {
      var clickName = x && y && (0, _utils.screenToButtonName)(x, y, this.buttons);
      switch (clickName) {
        case 'settings':
          return this.store.dispatch((0, _requests.logout)('foo'));
        case 'zoom-out':
          return this.store.dispatch((0, _actions.zoomOut)());
        case 'zoom-in':
          return this.store.dispatch((0, _actions.zoomIn)());
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this = this;

      this.buttons.forEach(function (button) {
        (0, _draw.drawByName)(_this.ctx, _this.iconsXl, button.name, _this.scale, button.xPos, button.yPos);
      });
    }
  }]);

  return Zoom;
}();

exports.default = Zoom;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Menu = __webpack_require__(75);

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
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _actions = __webpack_require__(0);

var _Connect = __webpack_require__(1);

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
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Story = __webpack_require__(77);

var _Story2 = _interopRequireDefault(_Story);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var StoryView = function () {
  function StoryView(store, canvas, ctx) {
    _classCallCheck(this, StoryView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

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
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(2);

var _actions = __webpack_require__(0);

var _Connect = __webpack_require__(1);

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
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _draw = __webpack_require__(4);

var _dialogs = __webpack_require__(79);

var _utils = __webpack_require__(3);

var _Connect = __webpack_require__(1);

var _Connect2 = _interopRequireDefault(_Connect);

var _actions = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TitleView = function () {
  function TitleView(store, canvas, ctx) {
    _classCallCheck(this, TitleView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new _Connect2.default(this.store);

    this.selected = null;

    this.buttons = [{ id: 1, text: 'LOGIN', onClick: _dialogs.showLogin }, { id: 2, text: 'REGISTER', onClick: _dialogs.showRegister }];
  }

  _createClass(TitleView, [{
    key: 'update',
    value: function update(delta) {
      var _this = this;

      var _connect$click = this.connect.click,
          xClick = _connect$click.xClick,
          yClick = _connect$click.yClick;

      if (xClick && yClick) {
        this.store.dispatch((0, _actions.clicked)());
        var clickId = (0, _utils.screenToTextId)(xClick, yClick, this.buttons);
        if (this.selectedId && this.selectedId === clickId) {
          this.buttons.find(function (button) {
            return _this.selectedId === button.id;
          }).onClick(this.store, this.undim.bind(this));
          this.selectedId = null;
          this.dim = true;
        } else {
          this.selectedId = clickId;
        }
      }
    }
  }, {
    key: 'undim',
    value: function undim() {
      this.dim = false;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      this.ctx.fillStyle = 'black';
      this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

      var fontSize = 60;
      var lineSize = fontSize + 4;
      this.ctx.font = fontSize + 'px MECC';
      this.ctx.fillStyle = '#FFF';
      this.ctx.textAlign = 'center';
      this.ctx.textBaseline = 'alphabetic';

      var linePos = 2;
      this.ctx.fillText('RAINFOREST', this.canvas.width / 2, linePos++ * lineSize);
      this.ctx.fillText('TRAIL', this.canvas.width / 2, linePos++ * lineSize);

      fontSize = 28;
      lineSize = fontSize + 16;
      this.ctx.font = fontSize + 'px MECC';

      linePos = 7;
      this.buttons.map(function (button, idx) {
        _this2.ctx.fillStyle = _this2.selectedId === button.id ? '#FF0' : '#FFF';
        _this2.ctx.fillText(button.text, _this2.canvas.width / 2, linePos * lineSize);
        (0, _utils.addButtonCoords)(button, {
          xPos: _this2.canvas.width / 2 - _this2.ctx.measureText(button.text).width / 2,
          yPos: linePos * lineSize,
          width: _this2.ctx.measureText(button.text).width,
          height: fontSize
        });
        linePos++;
      });

      if (this.dim) {
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.8)";
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
      }
    }
  }]);

  return TitleView;
}();

exports.default = TitleView;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showLogin = showLogin;
exports.showRegister = showRegister;

var _requests = __webpack_require__(7);

var _actions = __webpack_require__(0);

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
  var cancel = create('button', 'cancel');
  cancel.innerHTML = 'CANCEL';
  var buttons = create('div', 'buttons');
  buttons.append(submit, cancel);
  return { buttons: buttons, submit: submit, cancel: cancel };
}

function showLogin(store, dimCallback) {
  var container = document.getElementById('container');
  var dialog = create('div', 'dialog', 'login');
  container.append(dialog);

  var title = create('div', 'title');
  title.innerHTML = 'LOGIN';
  var username = makeInputLine('username');
  var password = makeInputLine('password');

  var _makeButtons = makeButtons(),
      buttons = _makeButtons.buttons,
      submit = _makeButtons.submit,
      cancel = _makeButtons.cancel;

  var exitDialog = function exitDialog() {
    dimCallback();
    container.removeChild(dialog);
  };

  submit.onclick = function () {
    var usernameText = username.input.value.slice(0);
    var passwordText = password.input.value.slice(0);
    store.dispatch((0, _requests.login)(usernameText, passwordText, exitDialog));
  };

  cancel.onclick = exitDialog;

  var content = create('div', 'content');
  content.append(title, username.line, password.line, buttons);
  dialog.append(content);
}

function showRegister(store, dimCallback) {
  var container = document.getElementById('container');
  var dialog = create('div', 'dialog', 'register');
  container.append(dialog);

  var title = create('div', 'title');
  title.innerHTML = 'REGISTER';
  var username = makeInputLine('username');
  var email = makeInputLine('email');
  var password1 = makeInputLine('password1');
  var password2 = makeInputLine('password2');

  var _makeButtons2 = makeButtons(),
      buttons = _makeButtons2.buttons,
      submit = _makeButtons2.submit,
      cancel = _makeButtons2.cancel;

  var exitDialog = function exitDialog() {
    dimCallback();
    container.removeChild(dialog);
  };

  submit.onclick = function () {
    var usernameText = username.input.value.slice(0);
    var emailText = email.input.value.slice(0);
    var passwordText = password1.input.value.slice(0);
    store.dispatch((0, _requests.register)(usernameText, emailText, passwordText, exitDialog));
  };

  cancel.onclick = exitDialog;

  var content = create('div', 'content');
  content.append(title, username.line, email.line, password1.line, password2.line, buttons);
  dialog.append(content);
}

/***/ })
/******/ ]);