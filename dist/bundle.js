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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.keyDown = keyDown;
exports.keyUp = keyUp;
exports.mouseDown = mouseDown;
exports.drag = drag;
exports.mouseUp = mouseUp;
exports.clicked = clicked;
exports.changeMode = changeMode;
exports.receivePos = receivePos;
exports.receiveMove = receiveMove;

var _types = __webpack_require__(11);

function keyDown(key) {
  return {
    type: _types.KEYDOWN,
    payload: {
      key: key
    }
  };
}

function keyUp(key) {
  return {
    type: _types.KEYUP,
    payload: {
      key: key
    }
  };
}

function mouseDown(x, y) {
  return {
    type: _types.MOUSEDOWN,
    payload: { x: x, y: y }
  };
}

function drag(x, y) {
  return {
    type: _types.DRAG,
    payload: { x: x, y: y }
  };
}

function mouseUp(x, y) {
  return {
    type: _types.MOUSEUP,
    payload: { x: x, y: y }
  };
}

function clicked() {
  return {
    type: _types.CLICKED
  };
}

function changeMode(mode) {
  return {
    type: _types.CHANGE_MODE,
    payload: { mode: mode }
  };
}

function receivePos(x, y) {
  return {
    type: _types.RECEIVE_POS,
    payload: {
      focusX: x,
      focusY: y,
      partyX: x,
      partyY: y
    }
  };
}

function receiveMove(x, y) {
  return {
    type: _types.RECEIVE_MOVE,
    payload: {
      focusX: x,
      focusY: y,
      partyX: x,
      partyY: y
    }
  };
}

/***/ }),
/* 2 */
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
    key: "focus",
    get: function get() {
      var _store$getState4 = this.store.getState(),
          focusX = _store$getState4.focusX,
          focusY = _store$getState4.focusY;

      return { focusX: focusX, focusY: focusY };
    }
  }, {
    key: "offset",
    get: function get() {
      var _store$getState5 = this.store.getState(),
          offsetX = _store$getState5.offsetX,
          offsetY = _store$getState5.offsetY;

      return { offsetX: offsetX, offsetY: offsetY };
    }
  }, {
    key: "partyPos",
    get: function get() {
      var _store$getState6 = this.store.getState(),
          partyX = _store$getState6.partyX,
          partyY = _store$getState6.partyY;

      return { partyX: partyX, partyY: partyY };
    }
  }, {
    key: "party",
    get: function get() {
      var _store$getState7 = this.store.getState(),
          party = _store$getState7.party;

      return { party: party };
    }
  }, {
    key: "vehicle",
    get: function get() {
      var _store$getState8 = this.store.getState(),
          vehicle = _store$getState8.vehicle;

      return { vehicle: vehicle };
    }
  }, {
    key: "sight",
    get: function get() {
      var _store$getState9 = this.store.getState(),
          sight = _store$getState9.sight;

      return { sight: sight };
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
/* 4 */
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
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionTypes; });
/* harmony export (immutable) */ __webpack_exports__["b"] = createStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_es_isPlainObject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_symbol_observable__ = __webpack_require__(32);
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
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__baseGetTag_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getPrototype_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isObjectLike_js__ = __webpack_require__(31);




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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__root_js__ = __webpack_require__(25);


/** Built-in value references. */
var Symbol = __WEBPACK_IMPORTED_MODULE_0__root_js__["a" /* default */].Symbol;

/* harmony default export */ __webpack_exports__["a"] = (Symbol);


/***/ }),
/* 8 */
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
/* 9 */
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
/* 10 */
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var KEYDOWN = exports.KEYDOWN = 'KEYDOWN';
var KEYUP = exports.KEYUP = 'KEYUP';
var MOUSEDOWN = exports.MOUSEDOWN = 'MOUSEDOWN';
var DRAG = exports.DRAG = 'DRAG';
var MOUSEUP = exports.MOUSEUP = 'MOUSEUP';
var CLICKED = exports.CLICKED = 'CLICKED';
var FOCUS_MENU = exports.FOCUS_MENU = 'FOCUS_MENU';
var FOCUS_TILE = exports.FOCUS_TILE = 'FOCUS_TILE';
var REQUEST_POS = exports.REQUEST_POS = 'REQUEST_POS';
var RECEIVE_POS = exports.RECEIVE_POS = 'RECEIVE_POS';
var REQUEST_MOVE = exports.REQUEST_MOVE = 'REQUEST_MOVE';
var RECEIVE_MOVE = exports.RECEIVE_MOVE = 'RECEIVE_MOVE';

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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKAAAAFACAYAAAA7/HcbAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH4gUaEAMYRHtARwAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAACAASURBVHgBALN/TIABAN4A/wDXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAAAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAANwAAAAAAAAAAAAAAAAAAACkAAAAAAAAA1wAAAAAAAAAAAAAASwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0Iso//n7/gAHBQIAAAAAAPn7/gAHBQIAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA1wAAAAAAAAAAAAAAKQAAAMkAAAAAAAAAAAAAACkAAAApAAAAoAAAAAAAAAA3AAAA1wAAAAAAAAAAAAAAKQAAAMkAAAAAAAAAAAAAACkAAAApAAAAoAAAAAAAAAAAAAAAAAAAACkAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAKQAAACkAAACgAAAAAAAAALkAAAAAAAAA1wAAAJAAAADwAAAAAAAAAAAAAAAAAAAAKQAAACkAAACgAAAAAAAAALkAAAC5AAAAkAAAAJAAAADwAAAANwAAAAAAAAAAAAAAkAAAAJAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADdY2gD5+/4AAAAAAAcFAgD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEALkAAAC5AAAAAAAAAAAAAAAQAAAA8AAAAKkAAACAAAAAKQAAAAAAAADXAAAAAAAAAAAAAADXAAAAuQAAAAAAAAAQAAAA8AAAAAAAAAAAAAAAEAAAAEcAAAAAAAAAAAAAAKkAAAAAAAAAEAAAAKAAAAAAAAAAyQAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIA8AAAAPAAAAAAAAAAAAAAAPAAAAAQAAAAgAAAAAAAAADXAAAA1wAAAAAAAAAAAAAAKQAAAMkAAAAQAAAAAAAAAPAAAAAQAAAAAAAAAIAAAABHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAAAAAAAAAAAAAAAAAAAAuQAAALkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igABwUCAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAPAAAAAAAAAAEAAAAEcAAADXAAAAAAAAAAAAAAAAAAAAKQAAAAAAAACgAAAAAAAAAAAAAABwAAAAAAAAAKAAAABHAAAA1wAAAAAAAAAAAAAAKQAAAKAAAAAgAAAAAAAAADcAAAAAAAAAAAAAAAAAAAApAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAAAAAAMFPYAAB1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAFcAAAAAAAAAAAAAAAAAAAAAAAAAKQAAANcAAAAAAAAAKQAAANcAAADXAAAAKQAAAGAAAACgAAAAAAAAANcAAAAAAAAAYAAAANcAAAAAAAAAKQAAAAAAAACgAAAAAAAAAAAAAAA3AAAAKQAAANcAAAAAAAAAAAAAANcAAABXAAAAogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAPn7/gAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAyQAAAAAAAACgAAAAAAAAAAAAAADXAAAA1wAAAGAAAADwAAAAAAAAAAAAAADXAAAAuQAAALkAAACQAAAAkAAAAPAAAAAAAAAAAAAAACkAAACgAAAAyQAAAMkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3WNoAAAAAAPn7/gAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP8AfgD/AH4A/wAAAAAAAAAAAH4A/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAApAAAAoAAAAAAAAADwAAAAyQAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAAHAAAADXAAAAAAAAAAAAAABHAAAAqQAAAFcAAAAAAAAAAAAAAAAAAAApAAAAoAAAAAAAAADwAAAAAAAAALkAAADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAD5+/4AAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD/AAAAAAApAAAAoAAAAAAAAAAAAAAANwAAAMkAAAAAAAAANwAAAAAAAAAAAAAAAAAAACkAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJAAAAAAAAADcAAAApAAAAoAAAAAAAAAAAAAAAYAAAANcAAAAAAAAAAAAAAAAAAABLAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKAAAD+5JwDBN9kAPzcn/8En2QAA4AAAAG4A/z/JJwDBJ9kAABAAAAAQAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAMkAAAA3AAAAAAAAANcAAADwAAAAAAAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAMkAAAA3AAAA1wAAAAAAAAAAAAAAKQAAAKAAAABXAAAAKQAAANcAAAAAAAAAAAAAAJAAAAAAAAAAAAAAAHAAAADXAAAAAAAAAAAAAAAAAAAAogAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAFAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC5AAAAAAAAALkAAAAAAAAAEAAAAAAAAADJAAAAAAAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAyQAAAAAAAADwAAAAEAAAAAAAAAAAAAAAyQAAAMkAAAAAAAAAAAAAAAAAAACgAAAAAAAAADcAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+LAMEfAAAAAAAAAAAAAAAAAAAAAAAAwR8AAAAAAAAAAAAAAAAAAAAAAAAAAAAABAA3AAAAAAAAAAAAAADJAAAA4AAAAAAAAAAgAAAAAAAAAPAAAAAAAAAA8AAAAAAAAAAAAAAA1wAAADcAAAApAAAAkAAAAAAAAADwAAAAAAAAAAAAAAApAAAAAAAAAKAAAAAAAAAAAAAAAMkAAAA3AAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAD5AP4A+fv+AAAAAAAAAAAAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4AAAAAAPn7/gAAAAAABwUCAAcFAgAAAAAA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gAAAAAABwUCAAcFAgD5+/4ABwUCAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAADcAAAAAAAAAYAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAKQAAANcAAAAAAAAAAAAAAAAAAABHAAAAAAAAACkAAAAAAAAAkAAAALkAAAAAAAAAAAAAABAAAAAAAAAAAAAAAMkAAABgAAAA1wAAAAAAAABHAAAAkgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgDQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApAAAA1wAAADcAAADXAAAAAAAAAAAAAAApAAAAoAAAAGAAAACgAAAAAAAAAAAAAAA3AAAAoAAAADcAAAAAAAAA1wAAAAAAAABwAAAAoAAAAGAAAADXAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAACkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAADBT2AAAdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAApAAAAAAAAAKAAAAAAAAAAoAAAAAAAAADwAAAAAAAAAMkAAAAAAAAAyQAAADcAAAAAAAAAAAAAANcAAAA3AAAA1wAAAAAAAAAAAAAAKQAAAKAAAAAAAAAANwAAACkAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+APn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEALkAAAAAAAAARwAAAAAAAAC5AAAAAAAAALkAAABHAAAANwAAAMkAAADwAAAAAAAAAAAAAADwAAAAEAAAAAAAAAAAAAAAyQAAAAAAAADgAAAAAAAAAFcAAAAAAAAAKQAAAAAAAACgAAAAAAAAAAAAAAC5AAAAuQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADJ0SYANwDaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAwKtgAAAAAAAAAAADQ1igABwUCAPn7/gAHBQIAAAAAAPn7/gAAAAAABwUCAAAAAAAwKtgAAAAAAAAAAADQ1igABwUCAPn7/gAHBQIAAAAAADBT2AAA1wAAAAAAANDWKAAAAAAA+fv+AAcFAgA3WNoAAAAAAADXAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAcAAAANcAAAAAAAAAAAAAAEcAAAAAAAAAAAAAAAAAAAAAAAAANwAAAAAAAAC5AAAAcAAAANcAAAAAAAAAKQAAAAAAAACQAAAA8AAAAFcAAAApAAAA1wAAAAAAAADXAAAAAAAAAPAAAAAQAAAAYAAAANcAAAAAAAAAAAAAAAAAAACSAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMHXYAQAAAAAAAAAAAAAAADAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAA2AAAAAAAAAAAAAAAAAAAAAAAAHUAAAAAAAAAAAAAMADYAAAAAAAAAAAAAAAAAAB1AAAAAAAAAAAAADAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQC1AP8AAAAAAAAAAAApAAAAoAAAAAAAAAA3AAAAAAAAAAAAAAAAAAAAKQAAANcAAADJAAAANwAAAAAAAAAAAAAAAAAAACkAAADXAAAAAAAAAAAAAAAAAAAAAAAAACkAAACgAAAAAAAAAGAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAEsAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCLKP/5+/4ABwUCAAAAAAD5+/4AAAAAADd62gEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAEAAAAAAApAAAAAAAAAKAAAAAAAAAAAAAAACkAAADXAAAAAAAAAAAAAACQAAAAAAAAABAAAADJAAAANwAAAAAAAAApAAAA1wAAAAAAAAAAAAAAAAAAACkAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAKAAAAA3AAAAAAAAAAAAAAApAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAQAuQAAALkAAAAAAAAAAAAAABAAAAAAAAAAoAAAAAAAAAAAAAAA8AAAAAAAAADwAAAAEAAAAAAAAADJAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAALkAAAAAAAAAEAAAAAAAAACgAAAAAAAAAMkAAAA3AAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAHBQIAAAAAADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABADwAAAAAAAAABAAAAAAAAAAYAAAANcAAAAAAAAAKQAAAAAAAACQAAAARwAAAAAAAAAAAAAAAAAAACkAAAAAAAAAoAAAADcAAAAAAAAAAAAAACkAAADXAAAAcAAAANcAAAAAAAAAAAAAAAAAAADJAAAAAAAAALkAAAAAAAAARwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAABXAAAAAAAAAAAAAACgAAAANwAAAAAAAADXAAAAAAAAAHAAAAAAAAAA1wAAAAAAAAAAAAAAkAAAAAAAAAAQAAAAyQAAADcAAAAAAAAA1wAAAAAAAADXAAAAAAAAAAAAAAApAAAA1wAAADcAAAAAAAAAAAAAACkAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAABwUCAPn7/gDQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAVwAAAAAAAAApAAAAoAAAAAAAAADJAAAANwAAAAAAAAAAAAAA1wAAAMkAAAAAAAAAAAAAAPAAAAAAAAAA8AAAABAAAAAAAAAAuQAAAAAAAABHAAAAAAAAAAAAAAApAAAAAAAAANcAAAApAAAA1wAAAAAAAAAAAAAAkAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQCSkKAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgApAAAAKQAAAKAAAAAAAAAAAAAAAAAAAADJAAAAKQAAAAAAAAAAAAAAYAAAAGAAAADwAAAAAAAAAPAAAAAAAAAAAAAAAPAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAANcAAACQAAAAKQAAAKAAAADJAAAAyQAAALkAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAADXAAAANwAAAAAAAAAAAAAAuQAAAEcAAACgAAAANwAAAAAAAADXAAAAAAAAAHAAAACAAAAAAAAAAFcAAAApAAAAoAAAADcAAADXAAAAAAAAAAAAAAApAAAAoAAAABAAAACgAAAAYAAAANcAAAAAAAAAKQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAwU9gAAHoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEA3gD/ANcAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAAAAAAAAAAAANwAAAAAAAAApAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApAAAAAAAAAKAAAAAAAAAAAAAAADcAAADJAAAANwAAAAAAAAAAAAAAAAAAACkAAAAiAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/yagmAAcFAgD5+/4ABwUCAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABACgAAAANwAAAAAAAAAAAAAAKQAAANcAAAAAAAAAAAAAAAAAAADJAAAANwAAANcAAAAAAAAAAAAAACkAAACgAAAAAAAAAAAAAADwAAAAAAAAALkAAABHAAAANwAAAAAAAAAAAAAAKQAAAMkAAADJAAAANwAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAADJAAAANwAAAAAAAADXAAAAAAAAAAAAAAAAAAAA8AAAAAAAAAAAAAAAAAAAACkAAAAAAAAAoAAAADcAAAAAAAAAAAAAAAAAAAApAAAA1wAAACkAAADXAAAAAAAAAAAAAACQAAAAAAAAABAAAADJAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAC5AAAAAAAAAEcAAAAAAAAANwAAAMkAAABHAAAAAAAAAAAAAAAAAAAAAAAAAJAAAABHAAAAKQAAANcAAAAAAAAAAAAAAJAAAAAAAAAAyQAAADcAAADJAAAANwAAAEcAAAAAAAAAAAAAACkAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igA+fv+AAcFAgD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAZp+Tf82DdsAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAAyvMlAAAAAAA2DdsAyvMlAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAADK8yUAAAAAAAAAAAA2DdsAAAAAAAAAAADK8yUAZoKzAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAANg3bAAAAAADK8yUAAAAAADYN2wAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAA2DdsAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjYN2wAAAAAAyvMlADYN2wDK8yUAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAANg3bAAAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB0Iso/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+J/bUAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyvMlAAAAAAA2DdsANg3bADYN2wDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAADK8yUAAAAAADYN2wAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/AH4A/wB+AP8AAAAAAAAAAAB+AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAADK8yUANg3bADYN2wAAAAAAAAAAAMrzJQA2DdsAyvMlAAAAAAA2DdsAAAAAAMrzJQA2DdsAAAAAADYN2wAAAAAAyvMlADYN2wAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAADK8yUANg3bAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/ANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMkAAAAAAAAANwAAACkAAACgAAAAAAAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAKAAAAAAAAAAAAAA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JQA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQA2DdsANg3bAAAAAAA2DdsANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAPn7/gAHBQIAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+LAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFOigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wDK8yUAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAyvMlAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAA+fv+AAcFAgAHBQIABwUCAAcFAgD5+/4A+fv+APn7/gAHBQIABwUCAPn7/gD5+/4A+fv+AAcFAgAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gAHBQIABwUCAPn7/gDQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgmAMFOigAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACyvMlAAAAAAA2DdsANg3bADYN2wAAAAAAAAAAAMrzJQA2DdsAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAAAAAA+fv+APn7/gD5+/4A+fv+AAcFAgAAAAAABwUCAPn7/gAAAAAABwUCAAcFAgAHBQIA+fv+APn7/gAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAHBQIABwUCAAAAAAD5+/4AAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAADBT2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH4sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAANg3bAMrzJQAAAAAAAAAAADYN2wDK8yUAAAAAAAAAAAA2DdsANg3bAMrzJQDK8yUAyvMlAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAA+fv+AAAAAAAHBQIABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAHBQIABwUCAAAAAAD5+/4AAAAAAAcFAgAHBQIABwUCAPn7/gD5+/4A+fv+AAcFAgAHBQIAAAAAAPn7/gAHBQIA+fv+AAAAAAAHBQIAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABDYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAADYN2wDK8yUANg3bAMrzJQAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAA2DdsAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAHBQIAAAAAAPn7/gAHBQIAN1jaAADXAAAAAAAA0NYoAPn7/gAHBQIAAAAAADBT2AAAAAAAANcAANDWKAAAAAAANy/aAAAAAAAAAAAA0NYoAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAPn7/gAHBQIA+fv+AAAAAADQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs39MgAQAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAyvMlADYN2wDK8yUANg3bAAAAAAA2DdsAbLmSPgAAIABJREFUAAAAAMrzJQA2DdsAyvMlAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIA+fv+AAcFAgA3etoBAAAAAAB1AAAAAAAAAAAAADAA2AAAAAAAAAAAAAAAAAAAdQAAAAAAAAAAAAAwANgAAAAAAAAAAAAAAAAAAAAAADAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANCLKP8HBQIAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4ABwUCAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAANg3bAMrzJQAAAAAAAAAAAMrzJQA2DdsAyvMlAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAANg3bAAAAAAAAAAAANg3bAAAAAAAAAAAANg3bAAAAAAA2DdsAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAAAAAAA2DdsAyvMlAAAA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAANg3bAAAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAADYN2wDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4A+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNg3bAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUANg3bAAAAAAAAAAAANg3bADYN2wAAAAAAAAAAADYN2wAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAcFAgAHBQIAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAA2DdsANg3bAAAAAADK8yUAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAANg3bADYN2wA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAcFAgAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNg3bAAAAAAA2DdsAyvMlAAAAAADK8yUAyvMlAMrzJQAAAAAAAAAAADYN2wDK8yUAAAAAAMrzJQAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gD5+/4AAAAAADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALK8yUAAAAAAAAAAAA2DdsAyvMlAAAAAAA2DdsANg3bAMrzJQAAAAAAAAAAADYN2wDK8yUAAAAAADYN2wAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAADK8yUAAAAAADYN2wDK8yUAyvMlADYN2wAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAcFAgAAAAAABwUCANCtKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAABwUCAAAAAAAHBQIA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAA2DdsAAAAAAAAAAADK8yUAAAAAAAAAAAAAAAAAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQDK8yUAAAAAADYN2wAAAAAAAAAAAAAAAAAAAAAAAAAAAMrzJQAAAAAAAAAAAMrzJQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACNg3bAAAAAADK8yUAAAAAAMrzJQA2DdsAAAAAADYN2wAAAAAAyvMlAMrzJQAAAAAAyvMlADYN2wAAAAAAyvMlAAAAAAA2DdsANg3bADYN2wDK8yUAAAAAAMrzJQAAAAAAAAAAADYN2wAAAAAAAAAAAMrzJQDK8yUANg3bAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALK8yUAyvMlADYN2wDK8yUAAAAAAMrzJQAAAAAAyvMlADYN2wAAAAAANg3bAMrzJQA2DdsAyvMlAAAAAAAAAAAAAAAAAAAAAADK8yUAyvMlADYN2wAAAAAAAAAAAMrzJQAAAAAAyvMlAAAAAAA2DdsANg3bADYN2wAAAAAAyvMlAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABS+6tjAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABGaCswEAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAAAANgAAAAAAAAA2AAAAAAAAADYAAAAAAAAANgAAAAAAAAA2AAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAAAAAD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAcFAgD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAAAAAAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAD5+/4AAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIA+fv+ADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA/wC1AP8AtQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP8AtQD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIA+fv+AAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuQAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wBeAP8AXgD/AF4A/wAAAP8AAAD/AAAA/wBeAP8AXgD/ALkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3gD/AH4A/wB+AP8AAAAAAAAAAAB+AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAB+AP8AAAAAAPAAAAAAAAAAEAAAAAAAAADwAAAAAAAAAEcAAAAAAAAAqQAAAAAAAAAAAAAAAAAAAAAAAABuAP8AkgAAAAAAAAAAAAAAAAAAAKIAAABeAAAAogAAAAAAAAAAAAAAAAAAAKIAAABeAAAA8AAAAKkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAABwUCAPn7/gAAtQD/AMkAAAAAAAAANwAAACkAAACgAAAAAAAAAAAAAABgAAAA1wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAKAAAAAAAAAAAAAAADcAAADJAAAAAAAAADcAAAAAAAAAAAAAAAAAAADXAAAAAAAAAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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1igA+fv+AAcFAgAHBQIA+fv+APn7/gAHBQIABwUCAPn7/gAAAAAA+fv+AAAAAAAHBQIABwUCAAAAAAD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAA+fv+AAAAAAAHBQIABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPn7/gAHBQIAAAAAAAAAAAABAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAD/AAAAAQAAAAAAAAD/AAAAAAAAAPn7/gAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBQIA+fv+AAcFAgD5+/4A+fv+AAcFAgDQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBwUCAAAAAAD5+/4AyoYmAAB62gAAAAAAyoYmAAAAAAAHBQIA+fv+AAcFAgAAddgAAAAAANGLKAAAddgAAAAAANGLKAD5+/4ABwUCAAAAAAD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAA+fv+AAcFAgD5+/4AAAAAADBT2AAAdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQCFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAA+fv+AAAAAAAHBQIAyYYmAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAANCLKAD5+/4AAAAAANCLKAD5+/4A+fv+AAcFAgD5+/4AAAAAAAAAAAD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+APn7/gAAAAAABwUCAPn7/gD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAA+fv+APn7/gAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4A+fv+AAcFAgD5+/4AANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAA3L9oAAAAAAAAAAADQ1igA+fv+AAcFAgAAAAAA+fv+AAcFAgD5+/4AAAAAAAcFAgAwKtgAAAAAAAAAAADQ1igAAAAAAAAAAAAHBQIAAAAAADBT2AAA1wAAAAAAANDWKAAAAAAABwUCAAAAAAAwU9gAAAAAAADXAADQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAABwUCAPn7/gAHBQIAMFPYAADXAAAAAAAA0NYoAPn7/gD5+/4ABwUCADdY2gAAAAAAANcAAMnRJgAHBQIAMCrYAAAAAAAAAAAA0NYoAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAcFAgD5+/4AAAAAAAAAAADQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnTUYNgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8BAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMmGJv8AAAAABwUCAAAAAAD5+/4ABwUCADB12AEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQiyj/+fv+AAcFAgAAAAAA+fv+AAcFAgAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAHBQIAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAAAAAABwUCAPn7/gAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAcFAgD5+/4AAAAAAAcFAgAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4A+fv+AAcFAgAAAAAAAAAAADBT2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAA3WNoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzf0yABAAAAAAAAAAAAAAAAAB+AP8AggABAH4A/wAAAAAAAAAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4AAAAAAPn7/gAAAAAABwUCAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4AAAAAAPn7/gAAAAAABwUCAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh7gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIABwUCAPn7/gAHBQIA+fv+APn7/gAHBQIAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAHBQIA+fv+AAcFAgD5+/4A+fv+AAcFAgDQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAPoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB8SAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAPn7/gAHBQIA+fv+AAAAAAD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAcFAgAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAA+fv+AAcFAgD5+/4AAAAAADBT2AAAdQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4e4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAA+fv+AAAAAAAHBQIAAAAAAPn7/gAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gAAAAAABwUCAPn7/gAHBQIAAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+APn7/gAHBQIA+fv+AAAAAAD5+/4AAAAAAAcFAgAAAAAA+fv+AAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAA+fv+AAAAAAD5+/4AAAAAAAcFAgAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAwTNEAAAAAAAAAAAAAAAAAAAAAADBM0QAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwHhMwD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHFYKAD5+/4ABwUCAAAAAAD5+/4ABwUCAKF1TwEAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAwKtgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAPn7/gAAAAAABwUCADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAcFAgAwKtgAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+APn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAAAAAAAAAAAAydEmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAABwUCAPn7/gDQ1igAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAA0NYoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4AAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+APn7/gAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIA+fv+AAcFAgAwU9gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAHBQIAAAAAAAcFAgD5+/4AMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAHBQIAAAAAAAcFAgDQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwU9gA+fv+APn7/gAAAAAAAAAAANCtKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAD5+/4AAAAAAAAAAADQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIABwUCAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAAAAAAAAAAAAAcFAgAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igA+fv+AAAAAAAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/IIIwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gD5+/4AAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08B0Iso//n7/gAHBQIAAAAAAPn7/gAHBQIAMHXYAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwddgBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAAAAAABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAAAAAA+fv+AAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA3WNoAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AD5+/4AAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAABwUCAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADXAAAHBQIA+fv+AAcFAgAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAAAAAAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAiQD/AAAAAAAAAAAAdwABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAydEmAAAFAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ1igAAAUAAPn7/gAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAEBAf8AAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAA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+/4AAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAAAAAAA+fv+AAAAAAAHBQIA+fv+AAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAPn7/gAHBQIA+fv+AAcFAgD5+/4AAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAPn7/gAHBQIA+fv+AAcFAgD5+/4AN3raAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08AAAAAAAB7TwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAAAAAAD5+/4A+fv+AAAAAAD5+/4AAAAAAAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAAcFAgAHBQIA+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAPn7/gD5+/4AAAAAAAcFAgAAAAAABwUCAPn7/gAAAAAA+fv+AAAAAAAHBQIAAAAAAAAAAAD5+/4A+fv+AAAAAAAHBQIABwUCAPn7/gAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAAHBQIA+fv+AAAAAAD5+/4A+fv+AAAAAAAHBQIAAAAAAAcFAgD5+/4AAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX65PAAAzAAAArk8AADMAAACuTwAAAAAAoVKxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKFSsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAAAAAAAAAAAAcFAgAAAAAA+fv+AAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4ABwUCAPn7/gD5+/4ABwUCAAAAAAD5+/4AAAAAAAAAAAAHBQIAAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAcFAgD5+/4ABwUCAPn7/gD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAChUrEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAHBQIABwUCAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAPn7/gAHBQIAAAAAAPn7/gAHBQIAAAAAAPn7/gAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgD5+/4ABwUCAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAD5+/4ABwUCAPn7/gAAAAAAAAAAAAcFAgAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgD5+/4ABwUCAAAAAAAAAAAA+fv+AAAAAAAHBQIABwUCAAAAAAAAAAAA+fv+AAcFAgAAAAAAAAAAAPn7/gD5+/4AAAAAAPn7/gAHBQIABwUCAAAAAAD5+/4AAAAAAAcFAgAHBQIABwUCAPn7/gD5+/4AAAAAAPn7/gAAAAAABwUCAAcFAgAAAAAAAAAAAPn7/gAHBQIAAAAAAAAAAAD5+/4A+fv+AAAAAAD5+/4ABwUCAAcFAgAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4ABwUCAAAAAAAAAAAABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP96TgABhgAA/3pOAAAAAAABhrIA/3pOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAP96TgABhrIAAAAAAP96TgAAAAAAAAAAAAAAAAAAAAAA////AAEBAf8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wABAQH/BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+AAcFAgAAAAAAMCrYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIAAAAAADAq2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYayAP96TgAAAAAAAYayAP96TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAP//AAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAAAAAAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGsgD/zKAAAFJSAAD9AQD/d08AAYayAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIA+fv+ANDWKAAwANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+fv+AAcFAgAAAAAABwUCAPn7/gDQ1igAMADYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFvrgAAAAAAAOIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALN/TIACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAPn7/gAHBQIA+fv+AAAAAAD5+/4AAAAAAE/3KIkAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP96TgAAxbIA/z8AAP8h/wAAp7EA/3pOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5+/4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP96TgABhrIAAAAAAP96TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBQIAMFPYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCADdY2gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAYayAP96TgD/ek4AAYayAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMFPYAAAAAAAAAAAAAAAAAAAAAADQrSgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADBT2AAAAAAAAAAAAAAAAAAAAAAA0K0oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGsgD/zKAAAFJSAAHBAAAAO04AAYayAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1wAABwUCAPn7/gAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANcAAAcFAgD5+/4AAAAAAPn7/gAHBQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEB/////wAAAAAAAAAAAAGNrwAAAAAA/x4BAAAAAAABxbEAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAQEBAf////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAEAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwUCAAAAAAD5+/4ABwUCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcFAgAAAAAA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEB/wAAAAD///8AAYaxAP96TgAAAAAAAYayAP96TgABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAf8AAAAA////AAD//wAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA0NYoAPn7/gAHBQIA+fv+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDWKAD5+/4ABwUCAPn7/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAEBAf8AAAAAAXsAAAAAAAAAAAAAAXsAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAABAQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+mAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJMM8LwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//8AAP//AAD//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//8AAP//AAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUQAAAAAAAa+vAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FRAKYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAAD/UVEAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/pgAAAKYAAACmAAAApgAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD/pgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6YAAP//AAD//wAA//8AAP//AAD/pgAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP+mAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD//wAA//8AAP//UVH/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+mAAD//wAA/wAAAP8AAAD/AAAA/wAAAP//AAD/pgAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FRAACvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACvrwD/UVEAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQGvrwAAUVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUVEAAa+vAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA/6YAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP//AAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+mAAC31DVCAAAgAElEQVT//wAA//8AAP//AAD//wAA/6YAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH/pgAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAApgAA//9RUf8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+mAAD/pgAA/6YAAP+mAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVEAAAAAAAGvrwAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//1FR//8AAP//AAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//9RUf//AAD//wAA//8AAP//AAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//UVH//wAA//8AAP//AAD//wAA//8AAP//AAD//1FR/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/6YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAWgAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAId6B/wAACAASURBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAP//AAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAD//wAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAD//wAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAAAAAP8AAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAAAAAAAAAAAAAAAAAEABAP9RUQAAAAAAAa+vAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/8AAD//AAA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAa+vAAAAAAD/UVEAAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAAAAAAA//wAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAAAAAAAAAAAAAAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/1FRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/wABr68AAAAAAP9RUQAASwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAEsAAP///wD///8A////AP///wD///8AAEsAAABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQD///8A////AP///wD///8A////AP///wD///8AAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68A////AP///wD///8A////AP///wD///8A////AP///wABr68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAAAAAAEEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wABr68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAGvrwAAAAAA/1FRAABLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAAAAAAABAQEAAQEBAAEBAQAAAAAAAQEBAAEBAQABAQEAAQEBAAEBAQD///8AAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///wAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAEsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wD///8AAAAAAAAAAAAAAAAA////AP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAGvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs39MgAQAAAAAAAAAAAAAAAAAAAABAQAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQABS68AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALBW6IwAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQD///8AAAAAAAAAAAAAAAAAAQEBAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEA////AAAAAAABAQEAAAAAAAAAAAABAQEA////AAAAAAABAQEAAAAAAABAAQAAwP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAP///wAAAAAAAAAAAAAAAAABAQEA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAABAQAA//8AAAAAAAAAAAAAAAAAAAABAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///AAAAAAAAAEEAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAP///wABAQEAAAAAAP///wAAAAAAAAAAAP///wABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAA//8AAAAAAAAAAQAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABBAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQAAAAEAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQQAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAC1AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAD///8A////AP///wAAAAAA////AP///wD///8A////AP///wABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQD/UVEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP9RUQABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEA/1FRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P///////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8AAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAQEBAAAAAAAAtQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAEBAQAAAAAAAAAAAP9RUQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAAT09PAAAAAAAAAAAAAAAAAAAAAAAAAAAAsbGxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASwAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAEBAQAAAAAAALUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAEBAQAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAACzs7P/TU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABr68AT09PAAAAAAAAAAAAsbGxAAAAAAAAAAAAAAAAAE9PTwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEsAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAABAQEAAAAAAADA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAa+vAE9PTwAAAAAAsbGxAAAAAAAAAAAAAAAAAAAAAAAAAAAAsbGxAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwBPT08AAAAAALGxsQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxsbEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGvrwBPT08AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7OzALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAtLS0AAEBAQEBAQEBAQEBAQEBAQFNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA1/N7qAAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACxsbEAAAAAAAAAAAAAAAAAAAAAALOzswAAAAAAAAAAALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7MAAAAAAAAAAAAAAAAAAAAAALOzswAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/////////////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAD/AAAA/wAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/////////////////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////7Ozs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtQD//5xRAAFkrwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/nFEAAWSvAAAAAAAAyQAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN4A//9zUQABja8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/3NRAAGNrwAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz//////////////////////+zs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz//////9MTEwAAAAAAAAAAAAAAAAAAAAAAExMTAD/////s7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALx0xk8AACAASURBVAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC1AP//nFEAAWSvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+cUQABZK8AAAAAAADJAAAAAAAAAAAAAACCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALUA//+cUQABZK8AAAAAAAAAAAAAAAAA/5xRAAFkrwAAAAAAAMkAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMALOzs/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAv/AAAAAAAAC/8AAAv/AAAL/wAAC/8AAAv/AAAL/wAAC/8AAAAAAAAL/wAAC/8AAAexAAAHsQAAB7EAAIWx/wCFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADeAP//nFEAAY2vAAApAAAAKQAAACkAAP+cUQABja8AACkAAADJAAAAAAAAAAAAAAB+AP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////kVIAAW+uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+RUgABb64AAAAAAADFsgAAAAAAAAAAAAAAAAAAzbwAADNEAACFsf8Ae08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAAAAAAAAtLS0AAEBAQFNTU0BTU1NAU1NTQFNTU0BAQEBAbS0tAAAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzbwAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIgABAWSvAP9zUQAA1wAAANcAAADXAAABZK8A/3NRAADXAAAANwAAAAAAAAAAAAAAggABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAbS0tAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAK6TAQAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC/8AAAAAAAAL/wAAC/8AAAv/AAAL/wAAAAAAAAv/AAAL/wAAB7EAAAexAACFsf8AhbH/AIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAACzs7P/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///+RUgABb64AAAAAAAAAAAAAAAAA/5FSAAFvrgAAAAAAAMWyAAAAAAAAAAAAAAAAAADNvAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAExMTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNvAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArpMBAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAQEBhbH//5FSAAE0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE0YAD/kVIAATRgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7TgAAzKAAADtOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADMoAAAO04AAAAAAADFsgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAEBAYWx//+RUgABNGAAAAAAAAAAAAABNGAA/5FSAAE0YAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFvrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAW+uAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO04AAAAAAAA7TgAAO04AADtOAAA7TgAAAAAAADtOAAA7TgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAC0tLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE1NTQH/////AAAAAAAAAAAAAAAAs7Oz/01NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/wAAAAAAAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAALS0tABMTEwAAAAAAAAAAAC0tLQATExMAAAAAAAAAAAAtLS0AE0NTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABb64AAAAAAAAAAAAAAAAAAAAAAAFvrgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABMTEwAAAAAAAAAAABMTEwAs7Oz/01NTQEAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcEAAAAAAAAAAAAAANL+AAANAAAAAAAAAAAAAADS/gAADQAAAAAAAAAAAAAA0v4AADsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8f9+LgAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAC0tLQATExMAAAAAAAAAAAAtLS0AE0NTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMTEwA/////7S0tAAAAAAAAAAAAAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHBAAAAAAAAAAAAAADS/gAADQAAAAAAAAAAAAAA0v4AADsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABSbf8AAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFJt/wAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAs7Oz/0xMTAAAAAAAAAAAAAAAAAAAAAAAtLS0AAAAAABMTEwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzRAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADNEAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAQEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/9MTEwAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADFsgAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzs7P/TExMAAAAAAAAAAAAAAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEABAQDA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAtLS0AE1NTQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALS0tABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALPztABN0v4Asy4CAE3S/gCzLgIATdL+ALMuAgBN0v4Asy4CAE3S/gCzLgIATdL+AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALOzs/8AAAAAAAAAAAAAAABNTU0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAC0tLQATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALPztABNDUwAAMWyAAAAAAAAAAAAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATU1NAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAATQ1MAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxbIAAAAAAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACzf0yAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABcBEJ2AAAgAElEQVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AP///wAAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAP////8A////AAAAAAAAAAAA0MkBAAAAAAAA/QEAAAAAAP///wD///8AAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAD/////AP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAA/////wD///8AAAAAAAABAQAAAQEAAAEBAAABAQAAAAAA////AP///wAAAAD/AAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAANGMKQAvdNcAAAAAAAAAAAAAAAAAAAAAAAAAAADRjCkAL3TXAP///wABAQH/AAAAAQAAAAAAAAD/////AAAAAAAA/QEAAAAAAAAD/wAAAAAAAP0BANDMAAAAAAEAMDf/AAAAAAD///8AAQEB/wAAAAEAAAAAAAAA/////wAAAAAAAAAAAAF/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAP+B/wAAAAAA////AAEBAf8AAAABAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///wABAQH/AAAAAQIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANGMKQAAAAAAAAAAAAAAAAAAAAAA0YwpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDMAADQzAAAAP0BAAAAAAAAAAAAAAAAADA0AAAA/QEAAP0BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABfwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAX8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAAAAAAAAAAAAAAAAAEBAQAAAAAA////AAAAAADQyQEAMDf/AAD9AQDQzAAAAAAAADA0AAAAAAAA0MwAAAAAAAAwN/8AAAAAAAAAAAABAQEAAAAAAP///wAAAAAAAX8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP+B/wAAAAAAAQEBAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAABAQAAAAAAAAAAAAAAAAAA//8AAAAAAAAAAAAAAAAAAAAAAAEBAQACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAEBAQAAAAAAAAAAAP///wD///8AAAAAAAAAAAABAQEAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA3/wAA/QEAAAP/ADA0AAAAAAAAAAAAANDMAAAAAAAAMDf/ANDJAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEAAAEBAAABAQAAAQEAAAAAAAAAAAAAAAAAAAAAAAABAQAAAQEAAAEBAAABAQAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AAAAAADQiygAAAAAAAAAAADQiygAAAAAAP///wD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/wAAAAAAtLezAOTrswC0t7MA5OuzADA3/wAAAAAAMDf/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8Ae08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AKLnSgABAQEAAQEBAKLnSgD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABMSU0AHBVNAExJTQAcFU0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKYAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACmAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA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AAAAAAAAAAAAAACnAAAAWgAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB+AP8AAAAAADcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAyQAAAIIAAQAAAAAAAAAAAAAAAAAAAABycnL/AAAAAI6OjgEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAA////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAAAAAABAAAAAAAAAAAEAAAAAAHE/wAAAAAAAMWyADCrfwAAAAAAAAAAAAAAAADQAAAAADtOAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAA7TgAAAAAAAAAAAAAAAAAAxbIAMKt/AAAAAAAAAAAAAAAAANAAAAAAO04AAcT/ADAAMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFoAAAEAAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKcAAAAAAAAAAAAAAFoAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIIAAQAAAAAAfgD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACCAAEAAAAAAAAAAAAAAAAAAAAAAAAAAI6OjgEAAAAAcnJy/wAAAACOjo4BAAAAAAAAAAAAAAAAAAAAAQAAAAABAQH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAA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AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQAAAAABAQAAAAAAAAAAAAAAAAAAAAAwMDD/AAAAAAAAAAAAAAAA0NDQAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAwMP8AAAAAAAAAAAAAAADQ0NABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIWx/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAe08BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAhbH/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP/MoAAAAAAAATRgAAB7TwEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACFsf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHtPAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////8AAAAAAAAAAAAAAAAAAYayAP96TgAAAAAAAYayAP96TgAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAD/////AAEBAQD//AAAAAAAAAEEAAD///8AAAAAAAEBAQAAAAAAAAAAAP///wAAAAAAAQEBAAAAAAEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAYayAAAAAAD/ek4AAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAP///wAAAAAAAAAAAAEBAQAAAAAA////AAAAAAABAQEA//wAAAAAAAAAAAAAAQQAAP///wAAAAAAAQEBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////wCFsf///////////wCFsf///////////////////////////wAAAP8AAAD/////////////////////////////////AAAA///8AP///AD///wA///8AP8AAAD///////////8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////8AhbH//1FR//9RUf///AD///wA/wCFsf//////////////////////AAAA/wAAAP////////////////8AAAD/AAAA/wAAAP8AAAD///wA///8AP///AD/AAAA/////////////////wAAAP8EAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABb64AAAAAAADiAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAP/8AAAAAAAAAAAAAAAAAAABBAAAAAAAAAAAAAD//AAAAQEBAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA58ZbEAAAIABJREFUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////////////wCFsf///////////wCFsf///////////////////////////wAAAP8AAAD///////////8AAAD///wA///8AP///AD///wA///8AP///AD///wA///8AP8AAAD///////////8AAAD/AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAGGsgAAAAAA/3pOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAAAAAAD///8AAAAAAAAAAAABAQEA//wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEEAAD///8AAAAAAAEBAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//////////////////////8AhbH///////////8AhbH//////////////////////wAAAP8AAAAAAAAAAAAAAP////////////////8AAAD///wA///8AP///AD///wA///8AP8AAAD///////////8AAAD/AAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////AAAAAAAAAAAAAYayAP/MoAAAAAAAAW+uAAAAAAAAxbIA/3pOAAAAAAAAAAAAAQEBAAAAAAEAAAAAAAAA/////wAAAAAAAAAAAAAAAAABAQEAAAAAAAAAAAAAAAAAAAAAAP///wAAAAAAAAAAAAEBAQAAAAABBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEBAQH/////AAAAAAAAAAAAAY2vAAAAAAD/HgEAAAAAAAHFsQAAAAAAAAAAAAEBAQAAAAABAAAAAAAAAAAAAAABAQEB/////wAAAAAAAAAAAP///wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAQEAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/AAAA//////8AhbH///////////8AhbH//////wAAAP8AAAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAP////////////////////////////////8AAAD/AAAA/wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAQByAP8AAAAAAAAAAAAAAAAA2AAAAAAAAAAoAAAAAAAAAAAAAADYAAAAAAAAACgAAAAAAAAA2AAAAAAAAAAAAAAAKAAAAAAAAADYAAAAAAAAACgAAAAAAAAAAAAAALsAAAAdAAAAKAAAAAAAAADYAAAAAAAAAAAAAAAAAAAAAAAAMw0gAAcRBAAAAAAA+e/8AAAAAAAAAAAABxEEAPnv/AAAAAAAAAAAAAAAAADNDwYAOgL+AAAAAAD57/wAAAAAAAAAAAAAAAAAAAAAAAcRBAD57/wAAAAAAAcRBAAAAAAA+e/8AAAAAAAAAAAAAAAAAAcRBAD57/wAAAAAAAAAAADNh+AAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAKAAAAAAAAAAYAAAANcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAKQAAAKAAAAA3AAAAAAAAAAAA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"

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(15);

__webpack_require__(21);

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
var update = __webpack_require__(19)(content, options);
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

exports = module.exports = __webpack_require__(17)(undefined);
// imports


// module
exports.push([module.i, "@font-face {\n  font-family: 'MECC';\n  src: url(" + __webpack_require__(18) + ") format('truetype');\n}\n\nhtml, body {\n  background-color: #222;\n  height: 100%;\n  margin: 0;\n\tfont-family: 'MECC', Courier, sans-serif;\n}\n\n#flex-container {\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n", ""]);

// exports


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports) {

module.exports = "data:application/x-font-ttf;base64,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aWduZXIgZGVzY3JpcHRpb246IElmIHlvdSBncmV3IHVwIHBsYXlpbmcgVGhlIE9yZWdvbiBUcmFpbCBvbiB0aGUgQXBwbGUgSUksIHlvdSdsbCBrbm93IHRoaXMgZm9udC4NCg0KTm93IHlvdSwgdG9vLCBjYW4gY3JlYXRlIGZha2Ugc2NyZWVuc2hvdHMgY2xhaW1pbmcgeW91J3ZlIGRpZWQgb2YgZHlzZW50ZXJ5IQpodHRwOi8vZm9udHN0cnVjdC5jb20vZm9udHN0cnVjdGlvbnMvc2hvdy8zMDY2ODkvaGVyZV9saWVzX21lY2NDcmVhdGl2ZSBDb21tb25zIEF0dHJpYnV0aW9uIFNoYXJlIEFsaWtlaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbGljZW5zZXMvYnktc2EvMy4wL0ZpdmUgYmlnIHF1YWNraW5nIHplcGh5cnMgam9sdCBteSB3YXggYmVkQVFrT2MxRnQAQwBvAHAAeQByAGkAZwBoAHQAIABjAG8AZABlAG0AYQBuADMAOAAgADIAMAAxADAASABlAHIAZQAgAEwAaQBlAHMAIABNAEUAQwBDAFIAZQBnAHUAbABhAHIARgBvAG4AdABTAHQAcgB1AGMAdAAgAEgAZQByAGUAIABMAGkAZQBzACAATQBFAEMAQwBIAGUAcgBlACAATABpAGUAcwAgAE0ARQBDAEMAIABSAGUAZwB1AGwAYQByAFYAZQByAHMAaQBvAG4AIAAxAC4AMABIAGUAcgBlAC0ATABpAGUAcwAtAE0ARQBDAEMARgBvAG4AdABTAHQAcgB1AGMAdAAgAGkAcwAgAGEAIAB0AHIAYQBkAGUAbQBhAHIAawAgAG8AZgAgAEYAUwBJACAARgBvAG4AdABTAGgAbwBwACAASQBuAHQAZQByAG4AYQB0AGkAbwBuAGEAbAAgAEcAbQBiAEgAaAB0AHQAcAA6AC8ALwBmAG8AbgB0AHMAdAByAHUAYwB0AC4AYwBvAG0ALwBjAG8AZABlAG0AYQBuADMAOCAcAEgAZQByAGUAIABMAGkAZQBzACAATQBFAEMAQyAdACAAdwBhAHMAIABiAHUAaQBsAHQAIAB3AGkAdABoACAARgBvAG4AdABTAHQAcgB1AGMAdAAKAEQAZQBzAGkAZwBuAGUAcgAgAGQA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AIAAAAEAAAAAgAAAAQAAAACAAAD/gAAA/wAAAP+AAAAAgAAA/4AAAP8AAAD/gAAAAIAAAP+AAAAAAQAAAgACAAOAAAsAAAEBAQEBAQEBAQEBAQAAAAAAgAAAAIAAAAEAAAD/gAAA/4AAAAIAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAAAAEAAAAAAgADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAD/gAAA/4AAAACAAAAAgAAAAQAAAP+AAAD/gAAAAIAAAACAAAAAAACAAAAAgAAAAYAAAACAAAAAgAAA/4AAAP+AAAD+gAAA/4AAAP+AAAAAAQAAAAACAAOAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAA/4AAAP+AAAABAAAAAIAAAACAAAD/gAAA/4AAAAAAAIAAAACAAAABgAAAAIAAAACAAAD/gAAA/4AAAP6AAAD/gAAA/4AAAAABAAAAAAQAA4AAIwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYAAAP+AAAD/AAAAAIAAAACAAAD/gAAA/4AAAAEAAAAAgAAAAQAAAACAAAABAAAA/4AAAP+AAAAAgAAAAIAAAP8AAAD/gAAAAAABAAAA/4AAAACAAAAAgAAAAIAAAACAAAAAgAAA/4AAAAEAAAD/AAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAAAIAAAP8AAAAAAQAAAIADAAMAAAsAAAEBAQEBAQEBAQEBAQEAAAD/AAAAAQAAAAEAAAABAAAA/wAAAACAAQAAAACAAAABAAAA/wAAAP+AAAD/AAAAAAEAAP+AAYABAAAHAAABAQEBAQEBAQAAAAAAgAAAAQAAAP+AAAD/gACAAAABAAAA/wAAAP+AAAAAAQAAAYACgAIAAAMAAAEBAQEAAAAAAoAAAAGAAIAAAP+AAAAAAQAAAAABAACAAAMAAAEBAQEAAAAAAQAAAAAAAIAAAP+AAAAAAQAAAIADAAMAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAAAIAAAACAAAABAAAA/4AAAP+AAAD/gAAA/4AAAACAAIAAAACAAAAAgAAAAIAAAACAAAD/gAAA/4AAAP+AAAD/gAAA/4AAAAACAAAAAAMAA4AAAwAPAAABAQEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/gAAA/4AAAACAAAACAAAAAIAAAP+AAAAAgAKAAAD9gP+AAIAAAAKAAAAAgAAA/4AAAP2AAAD/gAABAIAAAAKAA4AACwAAAQEBAQEBAQEBAQEBAIAAAACAAAD/gAAAAIAAAAEAAAAAgAAAAAAAgAAAAgAAAACAAAAAgAAA/QAAAP+AAAAAAQAAAAADAAOAABkAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAAAQAAAP8AAAD/AAAAAIAAAAIAAAAAgAAA/4AAAP8AAAD/gAAAAgAAAAAAAQAAAACAAAAAgAAAAQAAAP+AAAAAgAAAAIAAAP+AAAD/AAAA/4AAAP+AAAD/gAAA/4AAAQAAAAADAAOAABcAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQCAAAD/gAAAAQAAAAEAAAD/AAAAAIAAAACAAAD+AAAAAwAAAP+AAAAAgAAA/4AAAAAAAIAAAACAAAD/gAAAAQAAAACAAAAAgAAAAIAAAACAAAD/AAAA/wAAAP8AAAD/gAAAAAIAAAAAAwADgAADABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAYAAAP+AAAAAgAAA/oAAAACAAAAAgAAAAIAAAAEAAAAAgAAA/4AAAAGAAIAAAP+A/oABAAAAAQAAAACAAAAAgAAAAIAAAP4AAAD/gAAA/wAAAQAAAAADAAOAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAIAAAP+AAAABAAAAAQAAAP4AAAADAAAA/gAAAAGAAAAAgAAA/4AAAAAAAIAAAACAAAD/gAAAAYAAAAGAAAD/gAAA/4AAAP+AAAD+gAAA/4AAAAACAAAAAAMAA4AAAwAXAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAP+AAAD/gAAAAIAAAACAAAACAAAA/oAAAP+AAAABgAAAAIAAAP+AAAAAgAEAAAD/AP+AAIAAAAIAAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/AAAA/4AAAQAAAAADAAOAABEAAAEBAQEBAQEBAQEBAQEBAQEBAQCAAAAAgAAAAIAAAACAAAD+AAAAAwAAAP+AAAD/gAAA/4AAAAAAAYAAAACAAAAAgAAAAIAAAACAAAD/AAAA/4AAAP+AAAD+gAADAAAAAAMAA4AAAwAHABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAAEAAAD/AAAA/4AAAP+AAAAAgAAA/4AAAACAAAACAAAAAIAAAP+AAAAAgAAA/4AAAACAAQAAAP8AAYABAAAA/wD+AACAAAABAAAAAIAAAAEAAAAAgAAA/4AAAP8AAAD/gAAA/wAAAP+AAAAAAgAAAAADAAOAAAMAFwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/AAAAAYAAAACAAAD+gAAA/4AAAACAAAACAAAAAIAAAP+AAAD/gAAAAgABAAAA/wD+AACAAAAAgAAAAIAAAACAAAABAAAAAIAAAP+AAAD+AAAA/4AAAP+AAAIAAACAAQACAAADAAcAAAEBAQEBAQEBAAAAAAEAAAD/AAAAAQAAAACAAIAAAP+AAQAAgAAA/4AAAgAA/4ABgAIAAAcACwAAAQEBAQEBAQEBAQEBAAAAAACAAAABAAAA/4AAAP+AAAABAAAA/4AAgAAAAQAAAP8AAAD/gAIAAIAAAP+AAAEAAAAAAoADgAAbAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAYAAAP+AAAD/gAAA/4AAAACAAAAAgAAAAIAAAAEAAAD/gAAA/4AAAP+AAAAAgAAAAIAAAACAAAAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAACAAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP+AAAD/gAAAAAIAAACAAoACgAADAAcAAAEBAQEBAQEBAAAAAAKAAAD9gAAAAoAAAACAAIAAAP+AAYAAgAAA/4AAAQAAAAACgAOAABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAAAQAAAACAAAAAgAAAAIAAAP+AAAD/gAAA/4AAAAAAAIAAAACAAAAAgAAAAIAAAACAAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAAgAAAAADAAOAAAMAFwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAEAAAD/AAAAAIAAAACAAAD/AAAA/wAAAACAAAACAAAAAIAAAP+AAAD/gAAAAAAAgAAA/4ABAAEAAAAAgAAAAIAAAP+AAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP8AAAEAAAAAA4ADgAAVAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAIAAAP+AAAAAgAAAAoAAAACAAAD/gAAA/oAAAACAAAAAgAAA/oAAAAIAAAAAAACAAAACgAAAAIAAAP+AAAD+gAAA/4AAAAGAAAD/gAAAAQAAAP2AAAD/gAACAAAAAAMAA4AAAwATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQIAAAD/AAAA/wAAAACAAAAAgAAAAQAAAACAAAAAgAAA/wAAAP8AAAABgAEAAAD/AP6AAoAAAACAAAAAgAAA/4AAAP+AAAD9gAAAAQAAAP8AAAMAAAAAAwADgAADAAcAEwAAAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAAEAAAD/AAAA/wAAAAKAAAAAgAAA/4AAAACAAAD/gAAAAIABAAAA/wABgAEAAAD/AP4AA4AAAP+AAAD/AAAA/4AAAP8AAAD/gAAAAAEAAAAAAwADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQCAAAD/gAAAAIAAAAIAAAAAgAAA/wAAAP8AAAABAAAAAQAAAP+AAAAAAACAAAACgAAAAIAAAP+AAAD/gAAAAIAAAP2AAAAAgAAA/4AAAP+AAAAAAgAAAAADAAOAAAMACwAAAQEBAQEBAQEBAQEBAgAAAP8AAAD/AAAAAoAAAACAAAD/gAAAAIACgAAA/YD/gAOAAAD/gAAA/YAAAP+AAAEAAAAAAwADgAALAAABAQEBAQEBAQEBAQEAAAAAAwAAAP4AAAABgAAA/oAAAAIAAAAAAAOAAAD/gAAA/wAAAP+AAAD/AAAA/4AAAAABAAAAAAMAA4AACQAAAQEBAQEBAQEBAQAAAAADAAAA/gAAAAGAAAD+gAAAAAADgAAA/4AAAP8AAAD/gAAA/oAAAQAAAAADAAOAAA8AAAEBAQEBAQEBAQEBAQEBAQEAgAAA/4AAAACAAAACgAAA/gAAAAEAAAD/gAAAAYAAAAAAAIAAAAKAAAAAgAAA/4AAAP2AAAAAgAAAAIAAAP6AAAAAAQAAAAADAAOAAAsAAAEBAQEBAQEBAQEBAQAAAAABAAAAAQAAAAEAAAD/AAAA/wAAAAAAA4AAAP6AAAABgAAA/IAAAAGAAAD+gAAAAAEAAAAAAgADgAALAAABAQEBAQEBAQEBAQEAAAAAAIAAAP+AAAACAAAA/4AAAACAAAAAAACAAAACgAAAAIAAAP+AAAD9gAAA/4AAAAABAAAAAAMAA4AACwAAAQEBAQEBAQEBAQEBAIAAAP+AAAABAAAAAQAAAAEAAAD/gAAAAAAAgAAAAIAAAP+AAAADAAAA/QAAAP+AAAAAAQAAAAADAAOAABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAQAAAACAAAAAgAAAAQAAAP+AAAD/gAAA/4AAAACAAAAAgAAAAIAAAP8AAAD/gAAA/4AAAAAAA4AAAP8AAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAgAAAAIAAAP8AAAAAAQAAAAADAAOAAAUAAAEBAQEBAQAAAAABAAAAAgAAAAAAA4AAAP0AAAD/gAABAAAAAAOAA4AAEwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAQAAAACAAAAAgAAAAIAAAAEAAAD/AAAA/4AAAP+AAAD/gAAAAAADgAAA/4AAAP+AAAAAgAAAAIAAAPyAAAACAAAA/4AAAACAAAD+AAAAAAEAAAAAA4ADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAABAAAAAIAAAACAAAAAgAAAAQAAAP8AAAD/gAAA/4AAAP+AAAAAAAOAAAD/gAAA/4AAAP+AAAABgAAA/IAAAACAAAAAgAAAAIAAAP6AAAAAAgAAAAADAAOAAAMADwAAAQEBAQEBAQEBAQEBAQEBAQIAAAD/AAAA/4AAAP+AAAAAgAAAAgAAAACAAAD/gAAAAIACgAAA/YD/gACAAAACgAAAAIAAAP+AAAD9gAAA/4AAAgAAAAADAAOAAAMADQAAAQEBAQEBAQEBAQEBAQECAAAA/wAAAP8AAAACgAAAAIAAAP+AAAD+gAAAAgABAAAA/wD+AAOAAAD/gAAA/wAAAP+AAAD+gAAAAAEAAAAAAwADgAAXAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAgAAA/4AAAACAAAACAAAAAIAAAP+AAAAAgAAA/wAAAP+AAAAAgAAA/wAAAACAAAAAAACAAAACgAAAAIAAAP+AAAD+AAAA/4AAAP+AAAAAgAAAAIAAAAIAAAD9gAAA/4AAAAACAAAAAAMAA4AAAwAXAAABAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAP8AAAACgAAAAIAAAP+AAAD/gAAAAIAAAACAAAD/AAAA/4AAAP+AAAACAAEAAAD/AP4AA4AAAP+AAAD/AAAA/4AAAP+AAAD/gAAA/4AAAACAAAAAgAAA/wAAAQAAAAADAAOAABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAgAAA/4AAAAEAAAABAAAA/oAAAP+AAAAAgAAAAgAAAACAAAD/AAAA/wAAAAGAAAAAgAAA/4AAAAAAAIAAAACAAAD/gAAAAQAAAACAAAABAAAAAIAAAP+AAAD/gAAAAIAAAP8AAAD/gAAA/wAAAP+AAAAAAQAAAAADAAOAAAcAAAEBAQEBAQEBAQAAAP8AAAADAAAA/wAAAAAAAwAAAACAAAD/gAAA/QAAAAABAAAAAAMAA4AACwAAAQEBAQEBAQEBAQEBAIAAAP+AAAABAAAAAQAAAAEAAAD/gAAAAAAAgAAAAwAAAP0AAAADAAAA/QAAAP+AAAAAAQAAAAADAAOAAA8AAAEBAQEBAQEBAQEBAQEBAQEBAAAA/4AAAP+AAAABAAAAAQAAAAEAAAD/gAAA/4AAAAAAAIAAAACAAAACgAAA/YAAAAKAAAD9gAAA/4AAAP+AAAAAAQAAAAADgAOAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAEAAAAAgAAAAIAAAACAAAABAAAA/wAAAP+AAAD/gAAA/4AAAAAAA4AAAP4AAAAAgAAA/4AAAAIAAAD8gAAAAIAAAACAAAD/gAAA/4AAAAABAAAAAAMAA4AAGwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAgAAAAIAAAP+AAAD/gAAAAQAAAAEAAAABAAAA/4AAAP+AAAAAgAAAAIAAAP8AAAD/AAAAAAABAAAAAIAAAACAAAAAgAAAAQAAAP8AAAABAAAA/wAAAP+AAAD/gAAA/4AAAP8AAAABAAAA/wAAAAABAAAAAAMAA4AADwAAAQEBAQEBAQEBAQEBAQEBAQEAAAD/gAAA/4AAAAEAAAABAAAAAQAAAP+AAAD/gAAAAAACAAAAAIAAAAEAAAD/AAAAAQAAAP8AAAD/gAAA/gAAAAABAAAAAAMAA4AAFwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAAAIAAAACAAAD+AAAAAwAAAP+AAAD/gAAA/4AAAP+AAAACAAAAAAABAAAAAIAAAACAAAAAgAAAAIAAAACAAAD/AAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAAQAAAAACgAOAAAcAAAEBAQEBAQEBAAAAAAKAAAD+gAAAAYAAAAAAA4AAAP+AAAD9gAAA/4AAAAABAAAAgAMAAwAAEwAAAQEBAQEBAQEBAQEBAQEBAQEBAQECAAAA/4AAAP+AAAD/gAAA/4AAAAEAAAAAgAAAAIAAAACAAAAAgAAAAIAAgAAAAIAAAACAAAAAgAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAAAAEAAAAAAoADgAAHAAABAQEBAQEBAQAAAAABgAAA/oAAAAKAAAAAAACAAAACgAAAAIAAAPyAAAAAAQAAAQADAAKAAA8AAAEBAQEBAQEBAQEBAQEBAQEAAAAAAIAAAACAAAABAAAAAIAAAACAAAD/AAAA/wAAAAEAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAAAIAAAP+AAAAAAQAA/4ADAAAAAAMAAAEBAQEAAAAAAwAAAP+AAIAAAP+AAAAAAQAAAgACAAOAAAsAAAEBAQEBAQEBAQEBAQEAAAD/gAAA/4AAAAEAAAAAgAAAAIAAAAIAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAAAAIAAAAAAwACgAADABEAAAEBAQEBAQEBAQEBAQEBAQEBAQIAAAD/AAAA/4AAAP+AAAAAgAAAAYAAAP6AAAACAAAAAIAAAACAAIAAAP+A/4AAgAAAAIAAAACAAAAAgAAAAIAAAP+AAAD+AAAAAAIAAAAAAwADgAADAA0AAAEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/AAAAAQAAAAGAAAAAgAAA/4AAAACAAYAAAP6A/4ADgAAA/wAAAP+AAAD+gAAA/4AAAAABAAAAAAMAAoAACwAAAQEBAQEBAQEBAQEBAIAAAP+AAAAAgAAAAoAAAP4AAAACAAAAAAAAgAAAAYAAAACAAAD/gAAA/oAAAP+AAAAAAgAAAAADAAOAAAMADQAAAQEBAQEBAQEBAQEBAQECAAAA/wAAAP+AAAD/gAAAAIAAAAGAAAABAAAAAIABgAAA/oD/gACAAAABgAAAAIAAAAEAAAD8gAAAAAIAAAAAAwACgAADABEAAAEBAQEBAQEBAQEBAQEBAQEBAQIAAAD/AAAA/4AAAP+AAAAAgAAAAgAAAACAAAD+AAAAAgAAAAGAAIAAAP+A/oAAgAAAAYAAAACAAAD/gAAA/wAAAP+AAAD/gAAAAAEAAAAAAwADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQCAAAD/gAAAAIAAAACAAAABgAAAAIAAAP8AAAD/gAAAAIAAAP+AAAAAAAGAAAAAgAAAAQAAAACAAAD/gAAA/4AAAACAAAD/AAAA/4AAAP6AAAAAAgAA/4ADAAKAAAMAEQAAAQEBAQEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/gAAAAYAAAP6AAAD/gAAAAIAAAAKAAAD/gAAAAQABAAAA/wD+gACAAAAAgAAAAIAAAAEAAAAAgAAA/YAAAP+AAAAAAQAAAAADAAOAAAsAAAEBAQEBAQEBAQEBAQAAAAABAAAAAYAAAACAAAD/AAAA/wAAAAAAA4AAAP8AAAD/gAAA/gAAAAIAAAD+AAAAAAIAAAAAAgADgAAJAA0AAAEBAQEBAQEBAQEBAQEBAAAAAACAAAD/gAAAAYAAAACAAAD+gAAAAQAAAAAAAIAAAAGAAAAAgAAA/gAAAP+AAwAAgAAA/4AAAAACAAD/gAKAA4AADQARAAABAQEBAQEBAQEBAQEBAQEBAQEAgAAA/4AAAAEAAAAAgAAA/4AAAAGAAAD/gAAA/4AAAAEAAAD/gACAAAAAgAAA/4AAAAIAAAAAgAAA/YAAAP+AA4AAgAAA/4AAAAABAAAAAAMAA4AAFwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAAEAAAAAgAAAAIAAAAEAAAD/gAAA/4AAAACAAAAAgAAA/wAAAP+AAAD/gAAAAAADgAAA/gAAAACAAAAAgAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAgAAAAIAAAP8AAAAAAQAAAAACAAOAAAkAAAEBAQEBAQEBAQEAAAAAAIAAAP+AAAABgAAAAIAAAAAAAIAAAAKAAAAAgAAA/QAAAP+AAAEAAAAAA4ACgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAgAAAAQAAAACAAAABAAAAAIAAAP8AAAD/gAAA/4AAAP+AAAAAAAIAAAAAgAAA/4AAAACAAAD/gAAA/gAAAAGAAAD/gAAAAIAAAP6AAAAAAQAAAAADAAKAAAkAAAEBAQEBAQEBAQEAAAAAAoAAAACAAAD/AAAA/wAAAAAAAoAAAP+AAAD+AAAAAgAAAP4AAAIAAAAAAwACgAADAA8AAAEBAQEBAQEBAQEBAQEBAQECAAAA/wAAAP+AAAD/gAAAAIAAAAIAAAAAgAAA/4AAAACAAYAAAP6A/4AAgAAAAYAAAACAAAD/gAAA/oAAAP+AAAIAAP+AAwACgAADAA0AAAEBAQEBAQEBAQEBAQEBAgAAAP8AAAD/AAAAAoAAAACAAAD/gAAA/oAAAAEAAQAAAP8A/oADAAAA/4AAAP8AAAD/gAAA/wAAAAACAAD/gAMAAoAAAwANAAABAQEBAQEBAQEBAQEBAQIAAAD/AAAAAQAAAP6AAAD/gAAAAIAAAAKAAAABAAEAAAD/AP6AAQAAAACAAAABAAAAAIAAAP0AAAAAAQAAAAADAAKAAAkAAAEBAQEBAQEBAQEAAAAAAoAAAACAAAD/AAAA/wAAAAAAAoAAAP+AAAD/gAAAAIAAAP4AAAEAAAAAAwACgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAACAAAA/oAAAP+AAAAAgAAAAoAAAP4AAAABgAAAAIAAAP+AAAAAAACAAAAAgAAAAIAAAACAAAAAgAAA/4AAAP+AAAD/gAAA/4AAAP+AAAAAAQAAAAADAAOAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQAAAP+AAAD/gAAAAIAAAAEAAAABAAAA/wAAAACAAAABAAAA/4AAAAAAAIAAAAGAAAAAgAAAAQAAAP8AAAD/gAAA/oAAAACAAAD/gAAA/4AAAAABAAAAAAMAAoAACQAAAQEBAQEBAQEBAQCAAAD/gAAAAQAAAAEAAAABAAAAAAAAgAAAAgAAAP4AAAACAAAA/YAAAQAAAAADAAKAAA8AAAEBAQEBAQEBAQEBAQEBAQEBAAAA/4AAAP+AAAABAAAAAQAAAAEAAAD/gAAA/4AAAAAAAIAAAACAAAABgAAA/oAAAAGAAAD+gAAA/4AAAP+AAAAAAQAAAAADgAKAAA8AAAEBAQEBAQEBAQEBAQEBAQEAAAAAAQAAAACAAAAAgAAAAIAAAAEAAAD+gAAA/4AAAAAAAoAAAP6AAAAAgAAA/4AAAAGAAAD9gAAAAIAAAP+AAAAAAQAAAAADAAKAABsAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEAAAAAAIAAAACAAAD/gAAA/4AAAAEAAAABAAAAAQAAAP+AAAD/gAAAAIAAAACAAAD/AAAA/wAAAAAAAIAAAACAAAAAgAAAAIAAAACAAAD/gAAAAIAAAP+AAAD/gAAA/4AAAP+AAAD/gAAAAIAAAP+AAAAAAQAA/4ADAAKAAA8AAAEBAQEBAQEBAQEBAQEBAQEAgAAAAYAAAP6AAAD/gAAAAQAAAAEAAAABAAAA/4AAAP+AAIAAAACAAAAAgAAAAYAAAP6AAAABgAAA/YAAAP+AAAAAAQAAAAADAAKAABMAAAEBAQEBAQEBAQEBAQEBAQEBAQEBAAAAAACAAAAAgAAAAIAAAP6AAAADAAAA/4AAAP+AAAD/gAAAAYAAAAAAAIAAAACAAAAAgAAAAIAAAACAAAD/gAAA/4AAAP+AAAD/gAAA/4AAAAABAAAAAAIAA4AAEwAAAQEBAQEBAQEBAQEBAQEBAQEBAQEBAAAA/4AAAP+AAAAAgAAAAIAAAAEAAAD/gAAA/4AAAACAAAAAgAAAAAAAgAAAAQAAAACAAAABAAAAAIAAAP+AAAD/AAAA/4AAAP8AAAD/gAAAAAEAAP+AAQADgAADAAABAQEBAAAAAAEAAAD/gAQAAAD8AAAAAAEAAAAAAgADgAATAAABAQEBAQEBAQEBAQEBAQEBAQEBAQAAAAAAgAAAAIAAAP+AAAD/gAAAAQAAAACAAAAAgAAA/4AAAP+AAAAAAACAAAABAAAAAIAAAAEAAAAAgAAA/4AAAP8AAAD/gAAA/wAAAP+AAAAAAQAAAoADgAOAAA8AAAEBAQEBAQEBAQEBAQEBAQEAAAAAAIAAAAGAAAAAgAAAAQAAAP+AAAD+gAAA/4AAAAKAAIAAAACAAAD/gAAAAIAAAP+AAAD/gAAAAIAAAP+AAAAAAAAAAAAAjAAAAIwAAACMAAAAjAAAAMQAAAD8AAABrAAAAnQAAAMUAAAD3AAABCgAAAScAAAFEAAABdQAAAYgAAAGWAAABnwAAAagAAAHFAAAB3QAAAfAAAAIUAAACNgAAAlMAAAJwAAACkgAAAqwAAALUAAAC9gAAAwQAAAMXAAADPgAAA0wAAANzAAADlQAAA7QAAAPRAAAD7wAABAwAAAQfAAAEMgAABEIAAARaAAAEbQAABIAAAASTAAAEugAABMUAAATiAAAE/wAABRcAAAUtAAAFTwAABXEAAAWYAAAFpgAABbkAAAXRAAAF7gAABhUAAAYtAAAGTwAABl0AAAZ6AAAGiAAABqAAAAapAAAGvAAABtcAAAbtAAAHAAAABxYAAAcxAAAHTgAAB2kAAAd8AAAHkgAAB60AAAfPAAAH3wAAB/wAAAgMAAAIJAAACDoAAAhQAAAIYAAACH0AAAiaAAAIqgAACMIAAAjaAAAJAQAACRkAAAk2AAAJUwAACVwAAAl5AAAJkQ="

/***/ }),
/* 19 */
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

var	fixUrls = __webpack_require__(20);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

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
/* 20 */
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _store = __webpack_require__(22);

var _store2 = _interopRequireDefault(_store);

var _index = __webpack_require__(49);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(23);

var _index = __webpack_require__(39);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
	return (0, _redux.createStore)(_index2.default);
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__combineReducers__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bindActionCreators__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__applyMiddleware__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__compose__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_warning__ = __webpack_require__(9);
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getRawTag_js__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__objectToString_js__ = __webpack_require__(28);




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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__ = __webpack_require__(26);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = __WEBPACK_IMPORTED_MODULE_0__freeGlobal_js__["a" /* default */] || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__["a"] = (root);


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__["a"] = (freeGlobal);

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(8)))

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Symbol_js__ = __webpack_require__(7);


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
/* 28 */
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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__overArg_js__ = __webpack_require__(30);


/** Built-in value references. */
var getPrototype = Object(__WEBPACK_IMPORTED_MODULE_0__overArg_js__["a" /* default */])(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__["a"] = (getPrototype);


/***/ }),
/* 30 */
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
/* 31 */
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
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(35);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8), __webpack_require__(34)(module)))

/***/ }),
/* 34 */
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
/* 35 */
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = combineReducers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createStore__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_es_isPlainObject__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_warning__ = __webpack_require__(9);




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
/* 37 */
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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = applyMiddleware;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__compose__ = __webpack_require__(10);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = reducer;

var _types = __webpack_require__(11);

var _constants = __webpack_require__(0);

var _story = __webpack_require__(40);

var _story2 = _interopRequireDefault(_story);

var _menus = __webpack_require__(41);

var _menus2 = _interopRequireDefault(_menus);

var _party = __webpack_require__(42);

var _party2 = _interopRequireDefault(_party);

var _buttons = __webpack_require__(43);

var _buttons2 = _interopRequireDefault(_buttons);

var _tiles = __webpack_require__(44);

var _tiles2 = _interopRequireDefault(_tiles);

var _map = __webpack_require__(45);

var _input = __webpack_require__(46);

var _ui = __webpack_require__(47);

var _player = __webpack_require__(48);

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
  srcTiles: (0, _map.makeSrcTiles)(),
  mapTileSize: 96,
  mapTiles: _tiles2.default,

  // player
  camp: {},
  partyX: 2,
  partyY: 2,
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
  }
};

function reducer(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  switch (action.type) {
    case _types.KEYDOWN:
      return (0, _input.keyDown)(state, action);
    case _types.KEYUP:
      return (0, _input.keyUp)(state, action);
    case _types.MOUSEDOWN:
      return (0, _input.mouseDown)(state, action);
    case _types.DRAG:
      return (0, _input.drag)(state, action);
    case _types.MOUSEUP:
      return (0, _input.mouseUp)(state, action);
    case _types.CLICKED:
      return (0, _input.clicked)(state);
    case _types.FOCUS_MENU:
      return (0, _ui.focusMenu)(state, action);
    case _types.FOCUS_TILE:
      return (0, _ui.focusTile)(state, action);
    case _types.REQUEST_POS:
      return (0, _player.requestPos)(state);
    case _types.RECEIVE_POS:
      return (0, _player.receivePos)(state, action);
    case _types.REQUEST_MOVE:
      return (0, _player.requestMove)(state, action);
    case _types.RECEIVE_MOVE:
      return (0, _player.receiveMove)(state, action);
    default:
      return state;
  }
}

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = {"action":{},"text":["A wild jaguar creeps from the","shadows with glowing eyes."],"buttons":[{"text":"Run away","ref":"9184"},{"text":"Stand your ground","ref":"5622"},{"text":"Shoot","ref":"3214"}]}

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {"byId":{"overlay":{"type":"MAP_OVERLAY","buttons":["button1","button1","button1","button1"]},"main":{"type":"TEXT_MENU","text":["Welcome to the Amazon Trail","","You may:"],"buttons":["toMap","newGame","toHighscore"]},"selectClass":{"type":"TEXT_MENU","text":["A world of adventure awaits you.","","Which path will you choose?"],"buttons":["startTribe","startScience","startLogger","toMain"]},"highscore":{"type":"TEXT_MENU","text":["The Amazon Top Ten:","","  1. Darwin: 12414","  2. Gabriel: 9843","  3. Mom: 5634","  4. Dan: 4197","  5. Jan: 1206"],"buttons":["toMain"]}},"allIds":["overlay","main","selectClass","highscore"]}

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = [{"name":"J. Cruz","icon":32,"health":5,"jeito":3},{"name":"H. Villa","icon":33,"health":1,"jeito":2},{"name":"F. Boa","icon":34,"health":2,"jeito":4},{"name":"R. Stone","icon":32,"health":1,"jeito":1},{"name":"D. Lee","icon":33,"health":3,"jeito":5}]

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = {"byId":{"button1":{"text":"MENU","action":{"type":"FOCUS_MENU","payload":{"ref":"main"}}},"toMain":{"text":"Return to main menu","action":{"type":"FOCUS_MENU","payload":{"ref":"main"}}},"toMap":{"text":"Continue game","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"newGame":{"text":"Start new game","action":{"type":"FOCUS_MENU","payload":{"ref":"selectClass"}}},"toHighscore":{"text":"View high scores","action":{"type":"FOCUS_MENU","payload":{"ref":"highscore"}}},"startTribe":{"text":"The way of the tribe","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"startScience":{"text":"The life of a logger","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}},"startLogger":{"text":"The researcher's journey","action":{"type":"FOCUS_TILE","payload":{"x":2,"y":2}}}},"allIds":["button1","toMain","toMap","newGame","toHighscore","startTribe","startScience","startLogger"]}

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = [{"id":0,"x":0,"y":0,"layers":{"base":0,"middle":0}},{"id":1,"x":1,"y":0,"layers":{"base":0,"middle":0}},{"id":2,"x":2,"y":0,"layers":{"base":0,"middle":0}},{"id":3,"x":3,"y":0,"layers":{"base":0,"middle":0}},{"id":4,"x":4,"y":0,"layers":{"base":0,"middle":0}},{"id":5,"x":5,"y":0,"layers":{"base":0,"middle":0}},{"id":6,"x":6,"y":0,"layers":{"base":0,"middle":1}},{"id":7,"x":7,"y":0,"layers":{"base":0,"middle":0}},{"id":8,"x":8,"y":0,"layers":{"base":0,"middle":0}},{"id":9,"x":9,"y":0,"layers":{"base":0,"middle":0}},{"id":10,"x":10,"y":0,"layers":{"base":0,"middle":0}},{"id":11,"x":11,"y":0,"layers":{"base":0,"middle":0}},{"id":12,"x":12,"y":0,"layers":{"base":0,"middle":0}},{"id":13,"x":13,"y":0,"layers":{"base":0,"middle":0}},{"id":14,"x":14,"y":0,"layers":{"base":0,"middle":0}},{"id":15,"x":15,"y":0,"layers":{"base":0,"middle":0}},{"id":16,"x":16,"y":0,"layers":{"base":0,"middle":0}},{"id":17,"x":17,"y":0,"layers":{"base":0,"middle":0}},{"id":18,"x":18,"y":0,"layers":{"base":0,"middle":0}},{"id":19,"x":19,"y":0,"layers":{"base":0,"middle":0}},{"id":20,"x":0,"y":1,"layers":{"base":0,"middle":0}},{"id":21,"x":1,"y":1,"layers":{"base":0,"middle":0}},{"id":22,"x":2,"y":1,"layers":{"base":0,"middle":0}},{"id":23,"x":3,"y":1,"layers":{"base":0,"middle":0}},{"id":24,"x":4,"y":1,"layers":{"base":0,"middle":0}},{"id":25,"x":5,"y":1,"layers":{"base":0,"middle":0}},{"id":26,"x":6,"y":1,"layers":{"base":0,"middle":1}},{"id":27,"x":7,"y":1,"layers":{"base":0,"middle":0}},{"id":28,"x":8,"y":1,"layers":{"base":0,"middle":0}},{"id":29,"x":9,"y":1,"layers":{"base":0,"middle":0}},{"id":30,"x":10,"y":1,"layers":{"base":0,"middle":0}},{"id":31,"x":11,"y":1,"layers":{"base":0,"middle":0}},{"id":32,"x":12,"y":1,"layers":{"base":0,"middle":0}},{"id":33,"x":13,"y":1,"layers":{"base":0,"middle":0}},{"id":34,"x":14,"y":1,"layers":{"base":0,"middle":0}},{"id":35,"x":15,"y":1,"layers":{"base":0,"middle":0}},{"id":36,"x":16,"y":1,"layers":{"base":0,"middle":0}},{"id":37,"x":17,"y":1,"layers":{"base":0,"middle":0}},{"id":38,"x":18,"y":1,"layers":{"base":0,"middle":0}},{"id":39,"x":19,"y":1,"layers":{"base":0,"middle":0}},{"id":40,"x":0,"y":2,"layers":{"base":0,"middle":0}},{"id":41,"x":1,"y":2,"layers":{"base":0,"middle":0}},{"id":42,"x":2,"y":2,"layers":{"base":0,"middle":0}},{"id":43,"x":3,"y":2,"layers":{"base":0,"middle":0}},{"id":44,"x":4,"y":2,"layers":{"base":0,"middle":0}},{"id":45,"x":5,"y":2,"layers":{"base":0,"middle":0}},{"id":46,"x":6,"y":2,"layers":{"base":0,"middle":1}},{"id":47,"x":7,"y":2,"layers":{"base":0,"middle":0}},{"id":48,"x":8,"y":2,"layers":{"base":0,"middle":0}},{"id":49,"x":9,"y":2,"layers":{"base":0,"middle":0}},{"id":50,"x":10,"y":2,"layers":{"base":0,"middle":0}},{"id":51,"x":11,"y":2,"layers":{"base":0,"middle":0}},{"id":52,"x":12,"y":2,"layers":{"base":0,"middle":0}},{"id":53,"x":13,"y":2,"layers":{"base":0,"middle":0}},{"id":54,"x":14,"y":2,"layers":{"base":0,"middle":0}},{"id":55,"x":15,"y":2,"layers":{"base":0,"middle":0}},{"id":56,"x":16,"y":2,"layers":{"base":0,"middle":0}},{"id":57,"x":17,"y":2,"layers":{"base":0,"middle":0}},{"id":58,"x":18,"y":2,"layers":{"base":0,"middle":0}},{"id":59,"x":19,"y":2,"layers":{"base":0,"middle":0}},{"id":60,"x":0,"y":3,"layers":{"base":0,"middle":9}},{"id":61,"x":1,"y":3,"layers":{"base":0,"middle":0}},{"id":62,"x":2,"y":3,"layers":{"base":0,"middle":0}},{"id":63,"x":3,"y":3,"layers":{"base":0,"middle":0}},{"id":64,"x":4,"y":3,"layers":{"base":0,"middle":0}},{"id":65,"x":5,"y":3,"layers":{"base":0,"middle":0}},{"id":66,"x":6,"y":3,"layers":{"base":0,"middle":1}},{"id":67,"x":7,"y":3,"layers":{"base":0,"middle":0}},{"id":68,"x":8,"y":3,"layers":{"base":0,"middle":0}},{"id":69,"x":9,"y":3,"layers":{"base":0,"middle":0}},{"id":70,"x":10,"y":3,"layers":{"base":0,"middle":0}},{"id":71,"x":11,"y":3,"layers":{"base":0,"middle":0}},{"id":72,"x":12,"y":3,"layers":{"base":0,"middle":0}},{"id":73,"x":13,"y":3,"layers":{"base":0,"middle":0}},{"id":74,"x":14,"y":3,"layers":{"base":0,"middle":0}},{"id":75,"x":15,"y":3,"layers":{"base":0,"middle":0}},{"id":76,"x":16,"y":3,"layers":{"base":0,"middle":0}},{"id":77,"x":17,"y":3,"layers":{"base":0,"middle":0}},{"id":78,"x":18,"y":3,"layers":{"base":0,"middle":0}},{"id":79,"x":19,"y":3,"layers":{"base":0,"middle":0}},{"id":80,"x":0,"y":4,"layers":{"base":0,"middle":3}},{"id":81,"x":1,"y":4,"layers":{"base":0,"middle":0}},{"id":82,"x":2,"y":4,"layers":{"base":0,"middle":0}},{"id":83,"x":3,"y":4,"layers":{"base":0,"middle":0}},{"id":84,"x":4,"y":4,"layers":{"base":0,"middle":0}},{"id":85,"x":5,"y":4,"layers":{"base":0,"middle":0}},{"id":86,"x":6,"y":4,"layers":{"base":0,"middle":1}},{"id":87,"x":7,"y":4,"layers":{"base":0,"middle":0}},{"id":88,"x":8,"y":4,"layers":{"base":0,"middle":0}},{"id":89,"x":9,"y":4,"layers":{"base":0,"middle":0}},{"id":90,"x":10,"y":4,"layers":{"base":0,"middle":0}},{"id":91,"x":11,"y":4,"layers":{"base":0,"middle":0}},{"id":92,"x":12,"y":4,"layers":{"base":0,"middle":0}},{"id":93,"x":13,"y":4,"layers":{"base":0,"middle":0}},{"id":94,"x":14,"y":4,"layers":{"base":0,"middle":0}},{"id":95,"x":15,"y":4,"layers":{"base":0,"middle":0}},{"id":96,"x":16,"y":4,"layers":{"base":0,"middle":0}},{"id":97,"x":17,"y":4,"layers":{"base":0,"middle":0}},{"id":98,"x":18,"y":4,"layers":{"base":0,"middle":0}},{"id":99,"x":19,"y":4,"layers":{"base":0,"middle":0}},{"id":100,"x":0,"y":5,"layers":{"base":0,"middle":18}},{"id":101,"x":1,"y":5,"layers":{"base":0,"middle":2}},{"id":102,"x":2,"y":5,"layers":{"base":0,"middle":2}},{"id":103,"x":3,"y":5,"layers":{"base":0,"middle":15}},{"id":104,"x":4,"y":5,"layers":{"base":0,"middle":2}},{"id":105,"x":5,"y":5,"layers":{"base":0,"middle":2}},{"id":106,"x":6,"y":5,"layers":{"base":0,"middle":23}},{"id":107,"x":7,"y":5,"layers":{"base":0,"middle":2}},{"id":108,"x":8,"y":5,"layers":{"base":0,"middle":2}},{"id":109,"x":9,"y":5,"layers":{"base":0,"middle":2}},{"id":110,"x":10,"y":5,"layers":{"base":0,"middle":2}},{"id":111,"x":11,"y":5,"layers":{"base":0,"middle":7}},{"id":112,"x":12,"y":5,"layers":{"base":0,"middle":0}},{"id":113,"x":13,"y":5,"layers":{"base":0,"middle":0}},{"id":114,"x":14,"y":5,"layers":{"base":0,"middle":0}},{"id":115,"x":15,"y":5,"layers":{"base":0,"middle":0}},{"id":116,"x":16,"y":5,"layers":{"base":0,"middle":0}},{"id":117,"x":17,"y":5,"layers":{"base":0,"middle":0}},{"id":118,"x":18,"y":5,"layers":{"base":0,"middle":0}},{"id":119,"x":19,"y":5,"layers":{"base":0,"middle":0}},{"id":120,"x":0,"y":6,"layers":{"base":0,"middle":13}},{"id":121,"x":1,"y":6,"layers":{"base":0,"middle":4}},{"id":122,"x":2,"y":6,"layers":{"base":0,"middle":9}},{"id":123,"x":3,"y":6,"layers":{"base":0,"middle":0}},{"id":124,"x":4,"y":6,"layers":{"base":0,"middle":0}},{"id":125,"x":5,"y":6,"layers":{"base":0,"middle":0}},{"id":126,"x":6,"y":6,"layers":{"base":0,"middle":1}},{"id":127,"x":7,"y":6,"layers":{"base":0,"middle":0}},{"id":128,"x":8,"y":6,"layers":{"base":0,"middle":0}},{"id":129,"x":9,"y":6,"layers":{"base":0,"middle":0}},{"id":130,"x":10,"y":6,"layers":{"base":0,"middle":0}},{"id":131,"x":11,"y":6,"layers":{"base":0,"middle":11}},{"id":132,"x":12,"y":6,"layers":{"base":0,"middle":2}},{"id":133,"x":13,"y":6,"layers":{"base":0,"middle":2}},{"id":134,"x":14,"y":6,"layers":{"base":0,"middle":2}},{"id":135,"x":15,"y":6,"layers":{"base":0,"middle":7}},{"id":136,"x":16,"y":6,"layers":{"base":0,"middle":0}},{"id":137,"x":17,"y":6,"layers":{"base":0,"middle":0}},{"id":138,"x":18,"y":6,"layers":{"base":0,"middle":0}},{"id":139,"x":19,"y":6,"layers":{"base":0,"middle":0}},{"id":140,"x":0,"y":7,"layers":{"base":0,"middle":0}},{"id":141,"x":1,"y":7,"layers":{"base":0,"middle":0}},{"id":142,"x":2,"y":7,"layers":{"base":0,"middle":13}},{"id":143,"x":3,"y":7,"layers":{"base":0,"middle":9}},{"id":144,"x":4,"y":7,"layers":{"base":0,"middle":0}},{"id":145,"x":5,"y":7,"layers":{"base":0,"middle":0}},{"id":146,"x":6,"y":7,"layers":{"base":0,"middle":1}},{"id":147,"x":7,"y":7,"layers":{"base":0,"middle":0}},{"id":148,"x":8,"y":7,"layers":{"base":0,"middle":0}},{"id":149,"x":9,"y":7,"layers":{"base":0,"middle":8}},{"id":150,"x":10,"y":7,"layers":{"base":0,"middle":9}},{"id":151,"x":11,"y":7,"layers":{"base":0,"middle":0}},{"id":152,"x":12,"y":7,"layers":{"base":0,"middle":0}},{"id":153,"x":13,"y":7,"layers":{"base":0,"middle":0}},{"id":154,"x":14,"y":7,"layers":{"base":0,"middle":0}},{"id":155,"x":15,"y":7,"layers":{"base":0,"middle":11}},{"id":156,"x":16,"y":7,"layers":{"base":0,"middle":7}},{"id":157,"x":17,"y":7,"layers":{"base":0,"middle":0}},{"id":158,"x":18,"y":7,"layers":{"base":0,"middle":0}},{"id":159,"x":19,"y":7,"layers":{"base":0,"middle":0}},{"id":160,"x":0,"y":8,"layers":{"base":0,"middle":0}},{"id":161,"x":1,"y":8,"layers":{"base":0,"middle":0}},{"id":162,"x":2,"y":8,"layers":{"base":0,"middle":8}},{"id":163,"x":3,"y":8,"layers":{"base":0,"middle":14}},{"id":164,"x":4,"y":8,"layers":{"base":0,"middle":0}},{"id":165,"x":5,"y":8,"layers":{"base":0,"middle":0}},{"id":166,"x":6,"y":8,"layers":{"base":0,"middle":1}},{"id":167,"x":7,"y":8,"layers":{"base":0,"middle":8}},{"id":168,"x":8,"y":8,"layers":{"base":0,"middle":9}},{"id":169,"x":9,"y":8,"layers":{"base":0,"middle":3}},{"id":170,"x":10,"y":8,"layers":{"base":0,"middle":13}},{"id":171,"x":11,"y":8,"layers":{"base":0,"middle":9}},{"id":172,"x":12,"y":8,"layers":{"base":0,"middle":0}},{"id":173,"x":13,"y":8,"layers":{"base":0,"middle":0}},{"id":174,"x":14,"y":8,"layers":{"base":0,"middle":0}},{"id":175,"x":15,"y":8,"layers":{"base":0,"middle":0}},{"id":176,"x":16,"y":8,"layers":{"base":0,"middle":11}},{"id":177,"x":17,"y":8,"layers":{"base":0,"middle":16}},{"id":178,"x":18,"y":8,"layers":{"base":0,"middle":2}},{"id":179,"x":19,"y":8,"layers":{"base":0,"middle":2}},{"id":180,"x":0,"y":9,"layers":{"base":0,"middle":0}},{"id":181,"x":1,"y":9,"layers":{"base":0,"middle":0}},{"id":182,"x":2,"y":9,"layers":{"base":0,"middle":13}},{"id":183,"x":3,"y":9,"layers":{"base":0,"middle":4}},{"id":184,"x":4,"y":9,"layers":{"base":0,"middle":9}},{"id":185,"x":5,"y":9,"layers":{"base":0,"middle":8}},{"id":186,"x":6,"y":9,"layers":{"base":0,"middle":19}},{"id":187,"x":7,"y":9,"layers":{"base":0,"middle":14}},{"id":188,"x":8,"y":9,"layers":{"base":0,"middle":13}},{"id":189,"x":9,"y":9,"layers":{"base":0,"middle":14}},{"id":190,"x":10,"y":9,"layers":{"base":0,"middle":0}},{"id":191,"x":11,"y":9,"layers":{"base":0,"middle":13}},{"id":192,"x":12,"y":9,"layers":{"base":0,"middle":4}},{"id":193,"x":13,"y":9,"layers":{"base":0,"middle":20}},{"id":194,"x":14,"y":9,"layers":{"base":0,"middle":9}},{"id":195,"x":15,"y":9,"layers":{"base":0,"middle":0}},{"id":196,"x":16,"y":9,"layers":{"base":0,"middle":0}},{"id":197,"x":17,"y":9,"layers":{"base":0,"middle":1}},{"id":198,"x":18,"y":9,"layers":{"base":0,"middle":0}},{"id":199,"x":19,"y":9,"layers":{"base":0,"middle":0}},{"id":200,"x":0,"y":10,"layers":{"base":0,"middle":0}},{"id":201,"x":1,"y":10,"layers":{"base":0,"middle":0}},{"id":202,"x":2,"y":10,"layers":{"base":0,"middle":0}},{"id":203,"x":3,"y":10,"layers":{"base":0,"middle":0}},{"id":204,"x":4,"y":10,"layers":{"base":0,"middle":13}},{"id":205,"x":5,"y":10,"layers":{"base":0,"middle":14}},{"id":206,"x":6,"y":10,"layers":{"base":0,"middle":1}},{"id":207,"x":7,"y":10,"layers":{"base":0,"middle":0}},{"id":208,"x":8,"y":10,"layers":{"base":0,"middle":0}},{"id":209,"x":9,"y":10,"layers":{"base":0,"middle":0}},{"id":210,"x":10,"y":10,"layers":{"base":0,"middle":0}},{"id":211,"x":11,"y":10,"layers":{"base":0,"middle":0}},{"id":212,"x":12,"y":10,"layers":{"base":0,"middle":0}},{"id":213,"x":13,"y":10,"layers":{"base":0,"middle":0}},{"id":214,"x":14,"y":10,"layers":{"base":0,"middle":3}},{"id":215,"x":15,"y":10,"layers":{"base":0,"middle":0}},{"id":216,"x":16,"y":10,"layers":{"base":0,"middle":0}},{"id":217,"x":17,"y":10,"layers":{"base":0,"middle":1}},{"id":218,"x":18,"y":10,"layers":{"base":0,"middle":0}},{"id":219,"x":19,"y":10,"layers":{"base":0,"middle":0}},{"id":220,"x":0,"y":11,"layers":{"base":0,"middle":0}},{"id":221,"x":1,"y":11,"layers":{"base":0,"middle":0}},{"id":222,"x":2,"y":11,"layers":{"base":0,"middle":0}},{"id":223,"x":3,"y":11,"layers":{"base":0,"middle":0}},{"id":224,"x":4,"y":11,"layers":{"base":0,"middle":0}},{"id":225,"x":5,"y":11,"layers":{"base":0,"middle":0}},{"id":226,"x":6,"y":11,"layers":{"base":0,"middle":1}},{"id":227,"x":7,"y":11,"layers":{"base":0,"middle":0}},{"id":228,"x":8,"y":11,"layers":{"base":0,"middle":0}},{"id":229,"x":9,"y":11,"layers":{"base":0,"middle":0}},{"id":230,"x":10,"y":11,"layers":{"base":0,"middle":0}},{"id":231,"x":11,"y":11,"layers":{"base":0,"middle":0}},{"id":232,"x":12,"y":11,"layers":{"base":0,"middle":0}},{"id":233,"x":13,"y":11,"layers":{"base":0,"middle":0}},{"id":234,"x":14,"y":11,"layers":{"base":0,"middle":13}},{"id":235,"x":15,"y":11,"layers":{"base":0,"middle":9}},{"id":236,"x":16,"y":11,"layers":{"base":0,"middle":8}},{"id":237,"x":17,"y":11,"layers":{"base":0,"middle":19}},{"id":238,"x":18,"y":11,"layers":{"base":0,"middle":9}},{"id":239,"x":19,"y":11,"layers":{"base":0,"middle":0}},{"id":240,"x":0,"y":12,"layers":{"base":0,"middle":0}},{"id":241,"x":1,"y":12,"layers":{"base":0,"middle":0}},{"id":242,"x":2,"y":12,"layers":{"base":0,"middle":0}},{"id":243,"x":3,"y":12,"layers":{"base":0,"middle":0}},{"id":244,"x":4,"y":12,"layers":{"base":0,"middle":0}},{"id":245,"x":5,"y":12,"layers":{"base":0,"middle":0}},{"id":246,"x":6,"y":12,"layers":{"base":0,"middle":21}},{"id":247,"x":7,"y":12,"layers":{"base":0,"middle":10}},{"id":248,"x":8,"y":12,"layers":{"base":0,"middle":2}},{"id":249,"x":9,"y":12,"layers":{"base":0,"middle":0}},{"id":250,"x":10,"y":12,"layers":{"base":0,"middle":0}},{"id":251,"x":11,"y":12,"layers":{"base":0,"middle":0}},{"id":252,"x":12,"y":12,"layers":{"base":0,"middle":0}},{"id":253,"x":13,"y":12,"layers":{"base":0,"middle":0}},{"id":254,"x":14,"y":12,"layers":{"base":0,"middle":0}},{"id":255,"x":15,"y":12,"layers":{"base":0,"middle":13}},{"id":256,"x":16,"y":12,"layers":{"base":0,"middle":14}},{"id":257,"x":17,"y":12,"layers":{"base":0,"middle":1}},{"id":258,"x":18,"y":12,"layers":{"base":0,"middle":13}},{"id":259,"x":19,"y":12,"layers":{"base":0,"middle":4}},{"id":260,"x":0,"y":13,"layers":{"base":0,"middle":0}},{"id":261,"x":1,"y":13,"layers":{"base":0,"middle":0}},{"id":262,"x":2,"y":13,"layers":{"base":0,"middle":0}},{"id":263,"x":3,"y":13,"layers":{"base":0,"middle":0}},{"id":264,"x":4,"y":13,"layers":{"base":0,"middle":0}},{"id":265,"x":5,"y":13,"layers":{"base":0,"middle":0}},{"id":266,"x":6,"y":13,"layers":{"base":0,"middle":1}},{"id":267,"x":7,"y":13,"layers":{"base":0,"middle":0}},{"id":268,"x":8,"y":13,"layers":{"base":0,"middle":0}},{"id":269,"x":9,"y":13,"layers":{"base":0,"middle":0}},{"id":270,"x":10,"y":13,"layers":{"base":0,"middle":0}},{"id":271,"x":11,"y":13,"layers":{"base":0,"middle":0}},{"id":272,"x":12,"y":13,"layers":{"base":0,"middle":0}},{"id":273,"x":13,"y":13,"layers":{"base":0,"middle":0}},{"id":274,"x":14,"y":13,"layers":{"base":0,"middle":0}},{"id":275,"x":15,"y":13,"layers":{"base":0,"middle":0}},{"id":276,"x":16,"y":13,"layers":{"base":0,"middle":0}},{"id":277,"x":17,"y":13,"layers":{"base":0,"middle":1}},{"id":278,"x":18,"y":13,"layers":{"base":0,"middle":0}},{"id":279,"x":19,"y":13,"layers":{"base":0,"middle":0}},{"id":280,"x":0,"y":14,"layers":{"base":0,"middle":0}},{"id":281,"x":1,"y":14,"layers":{"base":0,"middle":0}},{"id":282,"x":2,"y":14,"layers":{"base":0,"middle":0}},{"id":283,"x":3,"y":14,"layers":{"base":0,"middle":0}},{"id":284,"x":4,"y":14,"layers":{"base":0,"middle":0}},{"id":285,"x":5,"y":14,"layers":{"base":0,"middle":2}},{"id":286,"x":6,"y":14,"layers":{"base":0,"middle":17}},{"id":287,"x":7,"y":14,"layers":{"base":0,"middle":0}},{"id":288,"x":8,"y":14,"layers":{"base":0,"middle":0}},{"id":289,"x":9,"y":14,"layers":{"base":0,"middle":0}},{"id":290,"x":10,"y":14,"layers":{"base":0,"middle":0}},{"id":291,"x":11,"y":14,"layers":{"base":0,"middle":0}},{"id":292,"x":12,"y":14,"layers":{"base":0,"middle":0}},{"id":293,"x":13,"y":14,"layers":{"base":0,"middle":0}},{"id":294,"x":14,"y":14,"layers":{"base":0,"middle":0}},{"id":295,"x":15,"y":14,"layers":{"base":0,"middle":0}},{"id":296,"x":16,"y":14,"layers":{"base":0,"middle":0}},{"id":297,"x":17,"y":14,"layers":{"base":0,"middle":1}},{"id":298,"x":18,"y":14,"layers":{"base":0,"middle":0}},{"id":299,"x":19,"y":14,"layers":{"base":0,"middle":0}},{"id":300,"x":0,"y":15,"layers":{"base":0,"middle":0}},{"id":301,"x":1,"y":15,"layers":{"base":0,"middle":0}},{"id":302,"x":2,"y":15,"layers":{"base":0,"middle":0}},{"id":303,"x":3,"y":15,"layers":{"base":0,"middle":0}},{"id":304,"x":4,"y":15,"layers":{"base":0,"middle":0}},{"id":305,"x":5,"y":15,"layers":{"base":0,"middle":0}},{"id":306,"x":6,"y":15,"layers":{"base":0,"middle":1}},{"id":307,"x":7,"y":15,"layers":{"base":0,"middle":0}},{"id":308,"x":8,"y":15,"layers":{"base":0,"middle":0}},{"id":309,"x":9,"y":15,"layers":{"base":0,"middle":0}},{"id":310,"x":10,"y":15,"layers":{"base":0,"middle":0}},{"id":311,"x":11,"y":15,"layers":{"base":0,"middle":0}},{"id":312,"x":12,"y":15,"layers":{"base":0,"middle":0}},{"id":313,"x":13,"y":15,"layers":{"base":0,"middle":0}},{"id":314,"x":14,"y":15,"layers":{"base":0,"middle":0}},{"id":315,"x":15,"y":15,"layers":{"base":0,"middle":0}},{"id":316,"x":16,"y":15,"layers":{"base":0,"middle":0}},{"id":317,"x":17,"y":15,"layers":{"base":0,"middle":1}},{"id":318,"x":18,"y":15,"layers":{"base":0,"middle":0}},{"id":319,"x":19,"y":15,"layers":{"base":0,"middle":0}},{"id":320,"x":0,"y":16,"layers":{"base":0,"middle":0}},{"id":321,"x":1,"y":16,"layers":{"base":0,"middle":0}},{"id":322,"x":2,"y":16,"layers":{"base":0,"middle":0}},{"id":323,"x":3,"y":16,"layers":{"base":0,"middle":0}},{"id":324,"x":4,"y":16,"layers":{"base":0,"middle":0}},{"id":325,"x":5,"y":16,"layers":{"base":0,"middle":0}},{"id":326,"x":6,"y":16,"layers":{"base":0,"middle":0}},{"id":327,"x":7,"y":16,"layers":{"base":0,"middle":0}},{"id":328,"x":8,"y":16,"layers":{"base":0,"middle":0}},{"id":329,"x":9,"y":16,"layers":{"base":0,"middle":0}},{"id":330,"x":10,"y":16,"layers":{"base":0,"middle":0}},{"id":331,"x":11,"y":16,"layers":{"base":0,"middle":0}},{"id":332,"x":12,"y":16,"layers":{"base":0,"middle":0}},{"id":333,"x":13,"y":16,"layers":{"base":0,"middle":0}},{"id":334,"x":14,"y":16,"layers":{"base":0,"middle":0}},{"id":335,"x":15,"y":16,"layers":{"base":0,"middle":2}},{"id":336,"x":16,"y":16,"layers":{"base":0,"middle":2}},{"id":337,"x":17,"y":16,"layers":{"base":0,"middle":23}},{"id":338,"x":18,"y":16,"layers":{"base":0,"middle":2}},{"id":339,"x":19,"y":16,"layers":{"base":0,"middle":0}},{"id":340,"x":0,"y":17,"layers":{"base":0,"middle":0}},{"id":341,"x":1,"y":17,"layers":{"base":0,"middle":0}},{"id":342,"x":2,"y":17,"layers":{"base":0,"middle":0}},{"id":343,"x":3,"y":17,"layers":{"base":0,"middle":0}},{"id":344,"x":4,"y":17,"layers":{"base":0,"middle":0}},{"id":345,"x":5,"y":17,"layers":{"base":0,"middle":0}},{"id":346,"x":6,"y":17,"layers":{"base":0,"middle":0}},{"id":347,"x":7,"y":17,"layers":{"base":0,"middle":0}},{"id":348,"x":8,"y":17,"layers":{"base":0,"middle":0}},{"id":349,"x":9,"y":17,"layers":{"base":0,"middle":0}},{"id":350,"x":10,"y":17,"layers":{"base":0,"middle":0}},{"id":351,"x":11,"y":17,"layers":{"base":0,"middle":0}},{"id":352,"x":12,"y":17,"layers":{"base":0,"middle":0}},{"id":353,"x":13,"y":17,"layers":{"base":0,"middle":0}},{"id":354,"x":14,"y":17,"layers":{"base":0,"middle":0}},{"id":355,"x":15,"y":17,"layers":{"base":0,"middle":0}},{"id":356,"x":16,"y":17,"layers":{"base":0,"middle":0}},{"id":357,"x":17,"y":17,"layers":{"base":0,"middle":1}},{"id":358,"x":18,"y":17,"layers":{"base":0,"middle":0}},{"id":359,"x":19,"y":17,"layers":{"base":0,"middle":0}},{"id":360,"x":0,"y":18,"layers":{"base":0,"middle":0}},{"id":361,"x":1,"y":18,"layers":{"base":0,"middle":0}},{"id":362,"x":2,"y":18,"layers":{"base":0,"middle":0}},{"id":363,"x":3,"y":18,"layers":{"base":0,"middle":0}},{"id":364,"x":4,"y":18,"layers":{"base":0,"middle":0}},{"id":365,"x":5,"y":18,"layers":{"base":0,"middle":0}},{"id":366,"x":6,"y":18,"layers":{"base":0,"middle":0}},{"id":367,"x":7,"y":18,"layers":{"base":0,"middle":0}},{"id":368,"x":8,"y":18,"layers":{"base":0,"middle":0}},{"id":369,"x":9,"y":18,"layers":{"base":0,"middle":0}},{"id":370,"x":10,"y":18,"layers":{"base":0,"middle":0}},{"id":371,"x":11,"y":18,"layers":{"base":0,"middle":0}},{"id":372,"x":12,"y":18,"layers":{"base":0,"middle":0}},{"id":373,"x":13,"y":18,"layers":{"base":0,"middle":0}},{"id":374,"x":14,"y":18,"layers":{"base":0,"middle":0}},{"id":375,"x":15,"y":18,"layers":{"base":0,"middle":0}},{"id":376,"x":16,"y":18,"layers":{"base":0,"middle":0}},{"id":377,"x":17,"y":18,"layers":{"base":0,"middle":1}},{"id":378,"x":18,"y":18,"layers":{"base":0,"middle":0}},{"id":379,"x":19,"y":18,"layers":{"base":0,"middle":0}},{"id":380,"x":0,"y":19,"layers":{"base":0,"middle":0}},{"id":381,"x":1,"y":19,"layers":{"base":0,"middle":0}},{"id":382,"x":2,"y":19,"layers":{"base":0,"middle":0}},{"id":383,"x":3,"y":19,"layers":{"base":0,"middle":0}},{"id":384,"x":4,"y":19,"layers":{"base":0,"middle":0}},{"id":385,"x":5,"y":19,"layers":{"base":0,"middle":0}},{"id":386,"x":6,"y":19,"layers":{"base":0,"middle":0}},{"id":387,"x":7,"y":19,"layers":{"base":0,"middle":0}},{"id":388,"x":8,"y":19,"layers":{"base":0,"middle":0}},{"id":389,"x":9,"y":19,"layers":{"base":0,"middle":0}},{"id":390,"x":10,"y":19,"layers":{"base":0,"middle":0}},{"id":391,"x":11,"y":19,"layers":{"base":0,"middle":0}},{"id":392,"x":12,"y":19,"layers":{"base":0,"middle":0}},{"id":393,"x":13,"y":19,"layers":{"base":0,"middle":0}},{"id":394,"x":14,"y":19,"layers":{"base":0,"middle":0}},{"id":395,"x":15,"y":19,"layers":{"base":0,"middle":0}},{"id":396,"x":16,"y":19,"layers":{"base":0,"middle":0}},{"id":397,"x":17,"y":19,"layers":{"base":0,"middle":0}},{"id":398,"x":18,"y":19,"layers":{"base":0,"middle":0}},{"id":399,"x":19,"y":19,"layers":{"base":0,"middle":0}}]

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addLayer = exports.click = exports.makeTestTiles = exports.makeSrcTiles = undefined;

var _utils = __webpack_require__(3);

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

function makeTestTiles() {
  var array = [];
  for (var y = 0; y < 20; y++) {
    for (var x = 0; x < 20; x++) {
      var id = y * 20 + x;
      // make in node using tiled data
      array.push({ id: id, x: x, y: y, layers: { base: 0, middle: layer2[id] === 0 ? 0 : layer2[id] - 1 } });
    }
  }
  return array;
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
exports.click = click;
exports.addLayer = addLayer;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clicked = exports.mouseUp = exports.drag = exports.mouseDown = exports.keyUp = exports.keyDown = undefined;

var _utils = __webpack_require__(3);

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
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.focusTile = exports.focusMenu = undefined;

var _utils = __webpack_require__(3);

var _constants = __webpack_require__(0);

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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.receiveMove = exports.requestMove = exports.receivePos = exports.requestPos = undefined;

var _utils = __webpack_require__(3);

function requestPos(state) {
  return (0, _utils.updateObject)(state, {});
}

function receivePos(state, action) {
  return (0, _utils.updateObject)(state, {
    focusX: action.payload.focusX,
    focusY: action.payload.focusY,
    partyX: action.payload.partyX,
    partyY: action.payload.partyY
  });
}

function requestMove(state, action) {
  return (0, _utils.updateObject)(state, {
    partyX: action.payload.partyX,
    partyY: action.payload.partyY
  });
}

function receiveMove(state, action) {
  return (0, _utils.updateObject)(state, {
    focusX: action.payload.focusX,
    focusY: action.payload.focusY,
    partyX: action.payload.partyX,
    partyY: action.payload.partyY
  });
}

exports.requestPos = requestPos;
exports.receivePos = receivePos;
exports.requestMove = requestMove;
exports.receiveMove = receiveMove;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _addInputListeners = __webpack_require__(50);

var _addInputListeners2 = _interopRequireDefault(_addInputListeners);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _MapView = __webpack_require__(51);

var _MapView2 = _interopRequireDefault(_MapView);

var _MenuView = __webpack_require__(54);

var _MenuView2 = _interopRequireDefault(_MenuView);

var _StoryView = __webpack_require__(56);

var _StoryView2 = _interopRequireDefault(_StoryView);

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
			(0, _addInputListeners2.default)(this.store.dispatch, this.canvas);
			this.mapView = new _MapView2.default(this.store, this.canvas, this.ctx);
			this.menuView = new _MenuView2.default(this.store, this.canvas, this.ctx);
			this.storyView = new _StoryView2.default(this.store, this.canvas, this.ctx);
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
/* 50 */
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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _Camera = __webpack_require__(52);

var _Camera2 = _interopRequireDefault(_Camera);

var _Overlay = __webpack_require__(53);

var _Overlay2 = _interopRequireDefault(_Overlay);

var _actions = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MapView = function () {
  function MapView(store, canvas, ctx) {
    _classCallCheck(this, MapView);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new _Connect2.default(this.store);
    this.camera = new _Camera2.default(this.store, this.canvas, this.ctx);
    this.overlay = new _Overlay2.default(this.store, this.canvas, this.ctx);
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _Loader = __webpack_require__(12);

var _Loader2 = _interopRequireDefault(_Loader);

var _tilesetUi = __webpack_require__(13);

var _tilesetUi2 = _interopRequireDefault(_tilesetUi);

var _actions = __webpack_require__(1);

var _constants = __webpack_require__(0);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Camera = function () {
  function Camera(store, canvas, ctx) {
    var _this = this;

    _classCallCheck(this, Camera);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new _Connect2.default(this.store);
    this.loader = new _Loader2.default();
    Promise.resolve(this.loader.setImage('tiles', _tilesetUi2.default)).then(function (loaded) {
      _this.atlas = _this.loader.getImage('tiles');
    });
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
        var _connect$partyPos = this.connect.partyPos,
            partyX = _connect$partyPos.partyX,
            partyY = _connect$partyPos.partyY;

        var tile = (0, _utils.getItemById)(this.visibleTiles, clickId);
        if (Math.abs(partyX - tile.x) + Math.abs(partyY - tile.y) === 1) {
          this.store.dispatch((0, _actions.receiveMove)(tile.x, tile.y));
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
      var _this2 = this;

      var _connect$focus = this.connect.focus,
          focusX = _connect$focus.focusX,
          focusY = _connect$focus.focusY;
      var _connect$partyPos2 = this.connect.partyPos,
          partyX = _connect$partyPos2.partyX,
          partyY = _connect$partyPos2.partyY;
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

      var origin = this.getOffsetOrigin(mapTileSize, focusX, focusY);
      var startCol = Math.floor(origin.x / mapTileSize);
      var endCol = startCol + Math.ceil(this.canvas.width / mapTileSize + 1);
      var startRow = Math.floor(origin.y / mapTileSize);
      var endRow = startRow + Math.ceil(this.canvas.height / mapTileSize + 1);
      var offsetX = -origin.x + startCol * mapTileSize;
      var offsetY = -origin.y + startRow * mapTileSize;
      var visibleTiles = [];

      var _loop = function _loop(col) {
        var _loop2 = function _loop2(row) {
          var x = (col - startCol) * mapTileSize + offsetX;
          var y = (row - startRow) * mapTileSize + offsetY;
          var mapTile = _this2.findTile(mapTiles, col, row);
          if (mapTile && Math.abs(partyX - col) + Math.abs(partyY - row) <= sight) {
            visibleTiles.push(Object.assign({}, mapTile, {
              xPos: Math.round(x),
              yPos: Math.round(y),
              width: mapTileSize,
              height: mapTileSize
            }));
            [BASE, MIDDLE, TOP].forEach(function (layer) {
              var id = void 0;
              if (partyX === col && partyY === row && layer === TOP) {
                id = 29;
              } else {
                id = mapTile.layers[layer];
              }
              typeof id === "number" && _this2.ctx.drawImage(_this2.atlas, srcTiles[id].x * srcTileSize, srcTiles[id].y * srcTileSize, srcTileSize, srcTileSize, Math.round(x), Math.round(y), mapTileSize, mapTileSize);
            });
          }
        };

        for (var row = startRow; row <= endRow; row++) {
          _loop2(row);
        }
      };

      for (var col = startCol; col <= endCol; col++) {
        _loop(col);
      }
      this.visibleTiles = visibleTiles;
    }
  }]);

  return Camera;
}();

//     const {offsetX, offsetY} = this.connect.offset;
//     const {srcTileSize, srcTiles, mapTileSize, mapTiles} = this.connect.map;
//     this.ctx.fillStyle = 'black';
//     this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
//     // this.ctx.setTransform(1, 0, 0, 1, offsetX, offsetY);
//
//     const {BASE, MIDDLE, TOP} = LAYER;
//     mapTiles.map((mapTile) => {
//       [BASE, MIDDLE, TOP].forEach(layer => {
//         const id = mapTile.layers[layer];
//         if (typeof id === "number") {
//           this.ctx.drawImage(
//             this.atlas,
//             srcTiles[id].x * srcTileSize,
//             srcTiles[id].y * srcTileSize,
//             srcTileSize,
//             srcTileSize,
//             mapTile.x * mapTileSize,
//             mapTile.y * mapTileSize,
//             mapTileSize,
//             mapTileSize
//           );
//         }
//       });
//     });
//   }
// }


//     this.tsize = map.tsize;
//     // x and y are starting position for map
//     this.x = ((map.cols * this.tsize) - width) / 2;
//     this.y = ((map.rows * this.tsize) - height) / 2;
//     this.width = width;
//     this.height = height;
//     this.maxX = map.cols * this.tsize - width;
//     this.maxY = map.rows * this.tsize - height;
//   }
//
//   move (delta, dirx, diry) {
//     // move camera
//     this.x += dirx * Camera.SPEED * delta;
//     this.y += diry * Camera.SPEED * delta;
//     // clamp values
//     this.x = Math.max(0, Math.min(this.x, this.maxX));
//     this.y = Math.max(0, Math.min(this.y, this.maxY));
//   }
//
//   focusTile (x, y) {
//     // move camera
//     this.x = x - Math.floor(this.width / 2) - this.tsize / 2;
//     this.y = y - Math.floor(this.height / 2) - this.tsize / 2;
//     // clamp values
//     this.x = Math.max(0, Math.min(this.x, this.maxX));
//     this.y = Math.max(0, Math.min(this.y, this.maxY));
//   }
//
//   worldToScreen (x, y) {
//     return {x: x - this.x, y: y - this.y};
//   }
//
//   screenToWorld (x, y) {
//     return {x: x + this.x, y: y + this.y};
//   }
//
//   screenToTile (x, y) {
//     return {
//       x: Math.ceil((x + this.x) / this.tsize),
//       y: Math.ceil((y + this.y) / this.tsize)
//     };
//   }
//
//   tileToScreen (x, y) {
//     return {
//       x: x * this.tsize,
//       y: y * this.tsize
//     };
//   }
//
//   hasClick (x, y) {
//     let validX = (x >= 0) && (x < this.width);
//     let validY = (y >= 0) && (y < this.height);
//     return validX && validY;
//   }
// }


exports.default = Camera;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _Loader = __webpack_require__(12);

var _Loader2 = _interopRequireDefault(_Loader);

var _tilesetUi = __webpack_require__(13);

var _tilesetUi2 = _interopRequireDefault(_tilesetUi);

var _utils = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TRUCK = 31;
var SIZE = 64;

var Overlay = function () {
  function Overlay(store, canvas, ctx) {
    var _this = this;

    _classCallCheck(this, Overlay);

    this.store = store;
    this.canvas = canvas;
    this.ctx = ctx;

    this.connect = new _Connect2.default(this.store);
    this.makeButtons();

    this.loader = new _Loader2.default();
    Promise.resolve(this.loader.setImage('tiles', _tilesetUi2.default)).then(function (loaded) {
      _this.atlas = _this.loader.getImage('tiles');
    });
  }

  _createClass(Overlay, [{
    key: 'makeButtons',
    value: function makeButtons() {
      var _this2 = this;

      var menu = this.connect.getMenuById("overlay");
      this.buttons = menu.buttons;
      this.buttonSize = this.canvas.height / 4;

      // Set button properties
      this.buttons.map(function (button, idx) {
        (0, _utils.addButtonCoords)(button, {
          xPos: _this2.canvas.width - _this2.buttonSize,
          yPos: _this2.buttonSize * idx,
          width: _this2.buttonSize,
          height: _this2.buttonSize
        });
      });
    }
  }, {
    key: 'chooseButton',
    value: function chooseButton(clickId) {
      var button = (0, _utils.getItemById)(this.buttons, clickId);
      this.store.dispatch(button.action);
    }
  }, {
    key: 'updateClick',
    value: function updateClick(x, y) {
      var clickId = x && y && (0, _utils.screenToButtonId)(x, y, this.buttons);
      clickId && this.chooseButton(clickId);
    }
  }, {
    key: 'update',
    value: function update(delta, x, y) {
      this.updateClick(x, y);
    }
  }, {
    key: 'renderParty',
    value: function renderParty() {
      var _this3 = this;

      var _connect$map = this.connect.map,
          srcTileSize = _connect$map.srcTileSize,
          srcTiles = _connect$map.srcTiles;
      var party = this.connect.party.party;


      party.map(function (member, idx) {
        _this3.ctx.drawImage(_this3.atlas, srcTiles[member.icon].x * srcTileSize, srcTiles[member.icon].y * srcTileSize, srcTileSize, srcTileSize, 0, idx * SIZE, SIZE, SIZE);
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = Array(member.health).keys()[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;

            _this3.ctx.drawImage(_this3.atlas, 0, 192, 16, 16, 64 + i * 24, (idx * 2 + 0.4) * 32, 16, 16);
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
          for (var _iterator2 = Array(member.jeito).keys()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _i = _step2.value;

            _this3.ctx.drawImage(_this3.atlas, 16, 192, 16, 16, 64 + _i * 24, (idx * 2 + 1.1) * 32, 16, 16);
          }
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

        ;
      });
    }
  }, {
    key: 'renderVehicle',
    value: function renderVehicle() {
      var _connect$map2 = this.connect.map,
          srcTileSize = _connect$map2.srcTileSize,
          srcTiles = _connect$map2.srcTiles;
      var vehicle = this.connect.vehicle.vehicle;


      this.ctx.drawImage(this.atlas, srcTiles[vehicle.icon].x * srcTileSize, srcTiles[vehicle.icon].y * srcTileSize, srcTileSize, srcTileSize, 0, 480 - SIZE, SIZE, SIZE);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Array(vehicle.repair).keys()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var i = _step3.value;

          this.ctx.drawImage(this.atlas, 0, 208, 16, 16, 64 + i * 24, 480 - SIZE + 24, 16, 16);
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

      ;
    }
  }, {
    key: 'renderZoom',
    value: function renderZoom() {
      var _connect$map3 = this.connect.map,
          srcTileSize = _connect$map3.srcTileSize,
          srcTiles = _connect$map3.srcTiles;


      this.ctx.drawImage(this.atlas, srcTiles[36].x * srcTileSize, srcTiles[36].y * srcTileSize, srcTileSize, srcTileSize, 960 - SIZE, 0, SIZE, SIZE);
      this.ctx.drawImage(this.atlas, srcTiles[37].x * srcTileSize, srcTiles[37].y * srcTileSize, srcTileSize, srcTileSize, 960 - SIZE * 2, 0, SIZE, SIZE);
      this.ctx.drawImage(this.atlas, srcTiles[35].x * srcTileSize, srcTiles[35].y * srcTileSize, srcTileSize, srcTileSize, 960 - SIZE * 3, 0, SIZE, SIZE);
    }
  }, {
    key: 'renderBag',
    value: function renderBag() {
      var _connect$map4 = this.connect.map,
          srcTileSize = _connect$map4.srcTileSize,
          srcTiles = _connect$map4.srcTiles;


      this.ctx.drawImage(this.atlas, srcTiles[38].x * srcTileSize, srcTiles[38].y * srcTileSize, srcTileSize, srcTileSize, 960 - SIZE * 2, SIZE * 2, SIZE * 2, SIZE * 2);
    }
  }, {
    key: 'renderButtons',
    value: function renderButtons() {
      var _this4 = this;

      this.buttons.map(function (button) {
        var xPos = button.xPos + 8;
        var yPos = button.yPos + 8;
        var width = button.width - 16;
        var height = button.height - 16;

        // Make button box
        _this4.ctx.strokeStyle = '#FFF';
        _this4.ctx.lineWidth = 4;
        _this4.ctx.strokeRect(xPos, yPos, width, height);

        // Make button text
        _this4.ctx.font = '20px MECC';
        _this4.ctx.fillStyle = '#FFF';
        _this4.ctx.textAlign = 'center';
        _this4.ctx.textBaseline = 'middle';
        _this4.ctx.fillText(button.text, xPos + width / 2, yPos + height / 2);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      this.renderParty();
      this.renderVehicle();
      this.renderZoom();
      this.renderBag();
      // this.renderButtons();
    }
  }]);

  return Overlay;
}();

exports.default = Overlay;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Menu = __webpack_require__(55);

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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _utils = __webpack_require__(4);

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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Story = __webpack_require__(57);

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _constants = __webpack_require__(0);

var _actions = __webpack_require__(1);

var _Connect = __webpack_require__(2);

var _Connect2 = _interopRequireDefault(_Connect);

var _utils = __webpack_require__(4);

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

/***/ })
/******/ ]);