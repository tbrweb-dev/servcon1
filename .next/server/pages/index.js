module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"pages/index": 0
/******/ 	};
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../" + ({}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;

  const [childElm, setChildElm] = _react.default.useState();

  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  _react.default.useEffect(() => {
    if (p && IntersectionObserver && childElm && childElm.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        return listenToIntersections(childElm, () => {
          prefetch(router, href, as);
        });
      }
    }
  }, [p, childElm, href, as, router]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childProps = {
    ref: el => {
      if (el) setChildElm(el);

      if (child && typeof child === 'object' && child.ref) {
        if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
          child.ref.current = el;
        }
      }
    },
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;
    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {};

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js":
/*!*************************************************************************!*\
  !*** ./node_modules/next/node_modules/@babel/runtime/helpers/typeof.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./src/assets/images/agenda3.png":
/*!***************************************!*\
  !*** ./src/assets/images/agenda3.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/agenda3-03a3575ac8dd29262e04ad7cb0320fbd.png";

/***/ }),

/***/ "./src/assets/images/banner1.png":
/*!***************************************!*\
  !*** ./src/assets/images/banner1.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/banner1-3b5f97e01b2093c15c02a9404a7b7c51.png";

/***/ }),

/***/ "./src/assets/images/icons/cidade.png":
/*!********************************************!*\
  !*** ./src/assets/images/icons/cidade.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cidade-8466bc23005e3f2b7a43d09abd17a32d.png";

/***/ }),

/***/ "./src/assets/images/icons/email.png":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/email.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/email-8710a1fc5e285c6688785d139c3c0767.png";

/***/ }),

/***/ "./src/assets/images/icons/endereco.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/endereco.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/endereco-9703c03bb8d26a2c508ba9bdb20cc7dd.png";

/***/ }),

/***/ "./src/assets/images/icons/facebook.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/facebook.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/facebook-156d636cb000e0a9f9fd9d415172cbd8.png";

/***/ }),

/***/ "./src/assets/images/icons/instagram.png":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/instagram.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/instagram-86e9f1bd6a22df2d8c3f370c9d00f900.png";

/***/ }),

/***/ "./src/assets/images/icons/linkedin.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/linkedin.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/linkedin-9d6750695ba113602ee54f47b6ef8a7b.png";

/***/ }),

/***/ "./src/assets/images/icons/shape-bottom.png":
/*!**************************************************!*\
  !*** ./src/assets/images/icons/shape-bottom.png ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEoAAAAbCAYAAADbAhkjAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAICSURBVHgB7Zgtc8JAEIbfdCqQyMrISmRlJDKyMjI/CRmJREZGIiv7E5BIHN1NNvTYhHD5aEnCPTM3gQtzHA97e5sDHP/D+Xz2qb1jpNDcFtRW1JbogYce0JeHdFnJ28zzvAwjQuRE1Ph6orajOX6jAy/ogPxLEX4lQb3uhURpOECkLqUxC2qfNOYHOtBalPEv+erWF4ajjNQQ/ThQO6q+Nf2GAC1pJcqQ9KZuDb3szCjoDM2Jl1uCqqygrSxrUWq9m4wuN5nQ3FhSgiK6TALJsVZYiaIBOYJiVCWlY5ZUYsjSiZx3w4hz7r0x7orirRVFJJmDcUhvaQJ7TARehtS29FLP2acW3ysfGkXJDsHhqSUlXbfZR0PzTumSqe48rTTJuilKkt1adXMIb+jLDpgwki4y1d0oq1YUfZgFBao7X+ey3iePyEpVN0uKJSdfcSVKCklearoo4wjazEVSieRYzlsno5vTTCy5+cJFlGT+CNUKmwvJRGqS2SG5NkG11grNWisXJeuSt38dcnsaaDdXSSWScxM0FKZlRPFSqyskUzwJRq1VJ2t5a9cbdbX9VzRU8XiVa4YiifkoJA35gDspWBZFUIJi1+fTC04/x1e5mZ/VwJEjPlIY5UOn86hnxImyxImyxImyxImyxImyZKyiykemWT2EDw4/MvBRT91xx6P4Acp+1Zm4yEkeAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/icons/shape-top.png":
/*!***********************************************!*\
  !*** ./src/assets/images/icons/shape-top.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEkAAAAaCAYAAAD7aXGFAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHeSURBVHgB7ZihcsJAEIY3TAWyEomsRCIjkUhkJI9TicwjRFZGIpGVSCQSR/9NFmbZkuSSaYdLct/MzoVLQ5OPu9u9ROQZ1+s1RsORR1GUkwdMyD9i074cHyV5R5DkQJDkQJDkQJDkQJDkQCEJtckUsUC8U4B9zDlun9+k3SJY0AUnMxRx3zRS8PxrNAs5/oKL/QQHMyoFMVPEBn1LGhkymxISQUJxzNPtLKFZyfZgFMgykyDm5lQxoyYYThe0Kf0WFY9BlBI0M6fue8di4cYHFrRDnMwfsqgVDRQlyCash831vQRQI+pgLljiy3idmtKAkLX4lrA0mX378FAnsShEhsPcXPiBSIZSInC5Q+UI0j88D5Idnt8OkufFpJjMTTeb770oydyc5rUgXm5SPPfp2TWVFXeFqGIO91WUJCK7xtYKYmq3JSIqM90saCtzujeoN54aFpNK4qqkce8mc5Qz30V181BNZG57j1TRsek+koMgxmmDK0ORRekvZFFrn2spqaI5g9kf84BnSiWjN+L8FkCMp9STorOhSMyoBa1elTSI+qs6KjdtV7hsqayi2xBRB0RIom7ijH/+SR6Be2RJG9VV7OipA50kqRuJqcx2+7oU+iqkJppTeX9HCvwfP2mDznntIo4sAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/images/icons/telefone.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/telefone.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/telefone-c40d0449748d37774087a0461c148ef2.png";

/***/ }),

/***/ "./src/assets/images/icons/whatsapp.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/whatsapp.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/whatsapp-02077afcfe9e73f3d8305b931eba18dc.png";

/***/ }),

/***/ "./src/assets/images/logo.png":
/*!************************************!*\
  !*** ./src/assets/images/logo.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo-2caf7052a1ec3a14f6bae4515d5090e5.png";

/***/ }),

/***/ "./src/assets/images/logo_branco.png":
/*!*******************************************!*\
  !*** ./src/assets/images/logo_branco.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo_branco-95521aa0edd99d180d0b5d8fa8a16eac.png";

/***/ }),

/***/ "./src/assets/images/quem-somos.png":
/*!******************************************!*\
  !*** ./src/assets/images/quem-somos.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/quem-somos-59abebe284ff2dc5226a76abd34b26df.png";

/***/ }),

/***/ "./src/assets/images/services/1.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAABG1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wNy0wMjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD45MWEzYmU4ZS1lZDhkLTQ1NmItYWY2NS1kNzk4YTRmYWYxZGI8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+Q8OzcGlhIGRlIFNlbSBub21lPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJk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"

/***/ }),

/***/ "./src/assets/images/services/2.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/2.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAABG1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wNy0wMjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD44OTkzYTZlMy1jZmFlLTQ0YmMtYWFmZS0xYzIxNjU3YmEyYjM8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+Q8OzcGlhIGRlIFNlbSBub21lPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPlRiciBXZWI8L3BkZjpBdXRob3I+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOnhtcD0naHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyc+CiAgPHhtcDpDcmVhdG9yVG9vbD5DYW52YTwveG1wOkNyZWF0b3JUb29sPgogPC9yZGY6RGVzY3JpcHRpb24+CjwvcmRmOlJERj4KPC94OnhtcG1ldGE+Cjw/eHBhY2tldCBlbmQ9J3InPz4ApE58AAAMa0lEQVR4nO2cf1BU1xXHv+ftaoBF1soEceTHSCvJpKykSWayjNAYcBpl19VOi9GlY9pG+WEmFtuZlh+ZqWlUyExboo0ugskkbUVTnEaB9ccfEBOXsJ2JU8mSmQQSqUBboMW6yy8V2NM/ln3uwgK7b9+KTvv56+39ce7lcO+555573yPcSza+HKVW3tY6WUgk5jgCxTFxHBhxBIoDAAb3gtBLTL0M7mWiXoGc1+0TD1lx/neOe9VVCnUDYdkvJS7G5GYS2MCMbxPRIilymHmcQB8yuP4OK+tvnTtyXe6+ehISxag2FK4RlM5tBBgI9M1QtMHgzxiodzr55Mi5apvc8mVVTNRzu79BiybLmfE9Igr5aAQAZmYCnXby5CtD52o65JIrS+cjnstbsWgRvcpMPyKCUg6ZgcKMCQK/Pa4Yf3W0/u1/BCsvOMVs+eFS9Z2wEgh4GUB4sJ2RiTEwHwaE1+1m03+kCpGsmKjsvKdB9D4RrZAqI5Qw8z/B/F3Hueq/SKkvSKmkzi7YCoE+ul+VAgBEtAICfaTOLtgqqX5ApXNyFOrR6NdB+JmUxhYM5l/bI24Uo65u0t8qfism6rkXl9GiRXUAMiV1buFp5vHxHMfFt274U9gvxag2FK5RKrgehMTg+rbAMK5PTJJh5ILp0/mKzm9j1u1TKhR89IFXCgAQEhVK5xGs2zevSzGvYpao+t4kwlp5erbwECh9iarvzfnKKebKVOvzC4jol/J16/6ACE+FJT/Zf7vjyiezlpktQ70p7zvspEapm777HWYeZyc9O3S+qsVXvk/FROnzVxPTJyBE+dNI8XYdjOvTkBATHUxfAQD2kTGYrVdRUnNalKtWBeZUW2wdyD1wDPaR0TnLMeNf486JJ8bOH++dnudTMWp9wSUAz/jTicuHypC4PBq1Ta24bOuEJikOuw2ZiFKFY/eh36O7f9AfMSLpmmTkZqUhPmYZHCNjKD5eF5AMtSoCFbtyYLF1oPCNd/2p8qG9sWrd9MQZionUF6xTAB/4I7HYqMduQyZ0pZWwXevx6pzlcBmu9/8b+tJKf0R5oVZFwFy+F8xAxk8OBFy/2KhHoSETidt+6lf5SeDZ4caqS55pM5YtAfyav36fMUuL2qZWL6UAgH1kFMU1dThRlo+E5dEAA0eKdqCqvhlmaxuOFr2A+JhlPmXarvWg9PhplNeaA67vzgcQ0PRTAPsAeI0aL8Us2ZS3hZjS/RWYEBONy7ZOn3m2rh6xTHf/IFraO2EfGQMAdA8MonvA9/RwTxuLrSPg+u58CTwTlZ2/wXHu2AV3gpdiBCf9KtD99mwGztMudA8MoqK2Ufzt+eyPXCn1A4UEVACYqZgoXcE2EDSytzhFQkw0srVrUFX/AdSqcGzP0kKtiphRrqW9UxwtbnTaVJwoK/ApN2PPASQsj8aJsgJUnDQHoTRKXbIpb8tQQ/UZwHPEEG+RGp4pMGTiZJNV/C+7f3tSuDkTxqw0tExNvYpdvqMBtq5eZOzxNrhma9usRtzW1QtbVy/00xYAKRDTNgAeinkybxExbZSil/KdOdAkxSE3Kw25B6tQvjMHOm0qcrPSvMqV1NShpKZO/L10U6HfbahV4UhZtdLnCFubslp87u4fDMbOgBgb3M9KAIhcIawF/HPmPHGMjCFxeTT0pZWo2JWDT4/vh2NkTPwtFwkx0bOOME96Bm6gtqlVekNE6qiNhVrHeZNVCQAK5g2QENRPn/IxuvsHoSupROHmTJitbbBd64GupBLXT/1GLFu+KweFhkwvm+ALX1PJ1tUb0AgLBhKcWwC4FMNEW6RYF8+Vxz4y6mX4pq9WprMuH8PTJvjCPjxzlUuIicaRoh2z9sPTfwkWJtoCoFi5ZFPeo8R4RBapczDd95i+8sxHS7tvfwkIyn+ZAQGPLNmU96gSk4JWWkjcG7UqAoWGZ5GuSfZKL9+ZM+9mbi6Kt+tgqv8g4GXYEYyyJgWtUgBipUu4S+HmTOw2ZKK2qRUFhkz0DNxAxUlzUDIt7Z3I0CTjRFk+Kmob8WlXL1psnT4VrUmKh+7pNa6+GDKDmloCEKtkgWNJhgPJDE0yaptaUVxThwJDJgrfeDfg6eKLCgA3G0woNuoBuKZNeW0jquqbxTKapHhcPlQKwDVSzNY2FHu4BoHCAscqIdOIAYCb04ZvQkw0PjpciqU+/A9/yD1QJf7nXQ5cL0qMOlTsykFuVhpKjtfBYuuATpsKIDDfaB5ilQSSTTHT0WlTsVQVMWMF0mlTUWjIRPfADZTU/Ek0nifKCqBWhaPipBk6bSo0SfFeU8K9az9a3wxT0QtoPLgXZmtbcPbEBwSKVTIQG6prCepI10hxTym1KhxHinZAr30cpvpmVNQ2wj4yBp02FRZbB0z1zTC3XoWtq3eGEffE5Tf9FumaZJimQhBzrVqBwkCskphjpTh3gaLTpuJI0Q44Rm5BX1oJi60DCTHR+GNZATI0ycjYcyDglcdi64DmxTKka5JhuzYjOikZYpeNCRnm1qso3q7DzQaTmLZUFYHGg3tnlL18uMxnfX+Qw8hPR8lEfQSoZZeMu+69e0oFgn14FLYu+UZBIDBRn0BAXygb6R4YRPzDy7A2ZTXsw6Ow2DpgsXXAPjyKtSmrERURJqZ19w8iZdVKpKxaOWuE715AQJ+SwX1y+DGzUb5rK4xZWgBAiVEvbhA9p05JTR1M9c24fLhMjNUWGrKQuvOVkPVrLhjcJyDEIyZheTQqTppFH0MdGQFd2uMAXH6Hpb1TnGpqVbgrZHHSjMTlwZ9RBUGfkpzUJ8deaTbsw6PYnqkVA0r24VEx0tZwcC9SVq30Mp4Hd34falWErBvDQCEn9SmdQF8I9YKSmjoY17uieec8wg4lNXVQR0agpb0TprNNAFyeriYpHoD/K1IocAJ9SiicVnDoVDM9wu/G5LHXcWO2tskWVwkKhdMqDDVUf87AF6Fqw5iVhpsNJtxsMKHt+H6oVeFIiInG3079Rkx373VOlBWIaeUyhkYDgYEvhhqqP58aKnxh7uLSMa5PQ22TFfrSSiQuj3aFBzz2ULauXnH66LSpKKmpQ22TFYWGhbnRRsxnAPfFISdCphgAiI9Z5hXNd+PyY7yPUlNWxc16fHsvYKdwVzGOfm4Csz0UDZnONmFNUjxKjHpY2jthu9aD2qZW187aqMfSyAjR0Jrqm5G7Pg0ZmuSgg1ySYDgc501WwH2udKV6nPX5Fwh4Xu62zNY2n7cO1rw4c280/ezpXsPE593PSo/UMyD5FaNZFYdfGHVQqyLEmwxqVTgO7sxBwvJo2EdGUVpzGt0DgzBmpWH7lJcsZ+Tfb5jOuB/FddphrjoFZtlfbyk26rE0UoWW9k7s3pyFdE0ydNrHkbs+DS3tnViTlCD6OUeLdqBn4AaIaM7jklDAjI8d5qpT7t/CtMyfy92gOjICFluHly+TMOXuV9Q2ztgs1ja1wmLrkBwOlYqT4DW3vRQzdT/kQzkbtF3r8YrJdPcPisb2ZoMJ6VO7bgDoHriBxoN7UbxdB4uMEbn5YMbFeW9UOSdRJihgkavRkpo60VZ09989dHPHaTzjLhl79os+TbA3FwLBKUzOeDdihmKGzle1ROnyzxLR5kCEd/cPusILzABcZzvp030XH74MANHz9cRd1z3tQrWpZPB7ww01n01P9xmIidQVpAjEVwk05wVpT9SqCJiKdiDbxx8ZDI6RMZSfNIsbTTlh8OQdp/Lrvl48nTVCFaXLKyISAr9y+QDB7NzrMFe/4Stv1hFxu/OK9aHkJ79GIG3ourZwMPiQw1y9b7b8OafK7Y4rF8OSn0oB8JjsPVtIGO87zMd+PFeR+QIxbB++9QMA877f86DAgNU+csvoepyd+SNUl965dQfIBvPCnGXICANf8phCj0vv3JqvrF+hu7HGqr/zxEQqMz4OvnsLRjPGx58eajri17mM38vx7a/+OnY76ok/PLQEDxPoKen9WxCO2xtjt97+qtLvG0ySDpTU2QX5LPCRQPychYDBd5ixe8h87K1A60o+aVPp87MUoPcIWNADoNlgYBBOp07qC+mS/+PjHVe6Fj/yxNsAhQH8rftl9DD4DhhHWeCcIXO15J2oLGezYfq8hMUQ9gPIJYlv/wcLMyaI8M5tOF+71VjdHaw8WQ+tIzfmP6ZQ4NV7/pkUoj/zuFDsuHj0S7nkhubDOvr8VAF4/v8f1pmDsOyXEhfThIFABgY/8z/9KaZZeYA+3vVfiUFik62DPPAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/services/3.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/3.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAABG1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wNy0wMjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD5jNzU2NDRmZS1hYTBhLTRiNzMtYjI0Ny05NGE4NTgzYTc1YzA8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+Q8OzcGlhIGRlIFNlbSBub21lPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJk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"

/***/ }),

/***/ "./src/assets/images/services/4.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/4.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/services/5.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/5.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAAAXNSR0IArs4c6QAAAAlwSFlzAAAOxAAADsQBlSsOGwAABG1pVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0n77u/JyBpZD0nVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkJz8+Cjx4OnhtcG1ldGEgeG1sbnM6eD0nYWRvYmU6bnM6bWV0YS8nPgo8cmRmOlJERiB4bWxuczpyZGY9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMnPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6QXR0cmliPSdodHRwOi8vbnMuYXR0cmlidXRpb24uY29tL2Fkcy8xLjAvJz4KICA8QXR0cmliOkFkcz4KICAgPHJkZjpTZXE+CiAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9J1Jlc291cmNlJz4KICAgICA8QXR0cmliOkNyZWF0ZWQ+MjAyMS0wNy0wMjwvQXR0cmliOkNyZWF0ZWQ+CiAgICAgPEF0dHJpYjpFeHRJZD40YzUzYTU0Yy1iZGI3LTRhYTMtYTNkZi01MzlmMWM1NDE5YjM8L0F0dHJpYjpFeHRJZD4KICAgICA8QXR0cmliOkZiSWQ+NTI1MjY1OTE0MTc5NTgwPC9BdHRyaWI6RmJJZD4KICAgICA8QXR0cmliOlRvdWNoVHlwZT4yPC9BdHRyaWI6VG91Y2hUeXBlPgogICAgPC9yZGY6bGk+CiAgIDwvcmRmOlNlcT4KICA8L0F0dHJpYjpBZHM+CiA8L3JkZjpEZXNjcmlwdGlvbj4KCiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0nJwogIHhtbG5zOmRjPSdodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyc+CiAgPGRjOnRpdGxlPgogICA8cmRmOkFsdD4KICAgIDxyZGY6bGkgeG1sOmxhbmc9J3gtZGVmYXVsdCc+Q8OzcGlhIGRlIFNlbSBub21lPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJk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"

/***/ }),

/***/ "./src/assets/images/services/6.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/6.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/images/shape-1.svg":
/*!***************************************!*\
  !*** ./src/assets/images/shape-1.svg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/svg+xml;base64,DQo8c3ZnIHdpZHRoPSIyNDkiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMjQ5IDEyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxnIG9wYWNpdHk9IjAuNSI+DQo8cGF0aCBkPSJNMTc3LjA2NCAyOS44OTIxQzE4NC41MDQgMjUuMzI0OCAxOTIuODg4IDIyLjQ3NTEgMjAxLjI5MyAyMS42Njk5QzIwOC40NTcgMjAuOTY4MyAyMTUuOTAxIDIxLjc0NTcgMjIyLjk5IDIzLjg5MTdMMjIzLjIzNCAyMS4wNDQ1QzIxNS44NjQgMTguOTE2NCAyMDguMzYxIDE4LjE3NTkgMjAxLjAyOCAxOC44NzcxQzE5Mi4yIDE5LjczIDE4My40MTMgMjIuNzEzMSAxNzUuNjA1IDI3LjUwMDdDMTY3Ljc5NiAzMi4yODgzIDE2MS4xNyAzOC43ODYxIDE1Ni40MTYgNDYuMjgzNkMxNTUuMDc0IDQ4LjM5MzIgMTUzLjg5NSA1MC41NzI3IDE1Mi44NjQgNTIuODA2OUMxNDAuNjgxIDU2LjQyMjQgMTI5Ljg0IDYzLjEzMjkgMTE5LjkgNjkuOTQ4NUMxMTcuNDc5IDcxLjYwMTkgMTE1LjAzOCA3My4zMjM1IDExMi42ODYgNzQuOTgyOUMxMDQuMDcgODEuMDMwNSA5NS4xNzE3IDg3LjI3NzcgODUuNjEzOCA5MS45MTU1Qzc0LjgzMDIgOTcuMTQ3OSA2Mi43NDkzIDEwMC4zOCA1MC42NzM4IDEwMS4yNjNDMzguMjYwMyAxMDIuMTczIDI2LjIxODEgMTAwLjcwOCAxNC44ODAyIDk2Ljg5NjlDMTAuMjMxNyA5NS4zMjM2IDUuNzE0OTUgOTMuMzU1OSAxLjQzNzM2IDkxLjA0NDlMMS4xNzkyOCA5NC4wNTg3QzUuMzMxMTEgOTYuMjA1IDkuNTc5NzEgOTguMDM3OSAxMy45OTgxIDk5LjUyMTVDMjAuOTAzNyAxMDEuODQ4IDI4LjA3NzUgMTAzLjMyOSAzNS40MDgzIDEwMy45NTdDNDAuNDg5OCAxMDQuMzkyIDQ1LjY2MjYgMTA0LjQxNiA1MC44ODM4IDEwNC4wMzdDNjMuMjk3MiAxMDMuMTI4IDc1LjczNTkgOTkuNzk5NyA4Ni44NDA1IDk0LjQxMjlDOTYuNTg4NCA4OS42Nzk1IDEwNS41OSA4My4zNzExIDExNC4yODEgNzcuMjZDMTE2LjYzMyA3NS42MDA3IDExOS4wNzMgNzMuODkyOSAxMjEuNDc5IDcyLjI1MjJDMTMwLjYzMSA2NS45ODQ3IDE0MC41MTUgNTkuODIxOSAxNTEuNDU2IDU2LjE4MzlDMTQ4LjE1MiA2NC44ODI4IDE0Ny4yNyA3NC4wNDEgMTQ5LjA2OCA4Mi40MzU1QzE1MC4zOTUgODguNjYyOSAxNTMuMzA2IDk0LjUyMjQgMTU3LjQ3NyA5OS4zODQ1QzE2MS44IDEwNC40MjggMTY3LjE5OCAxMDguMDM4IDE3My4xMDEgMTA5LjgxNkMxNzkuMTQgMTExLjY0OSAxODUuODYxIDExMS4zOTkgMTkyLjAzOCAxMDkuMTU4QzE5OC4zNzYgMTA2Ljg0NiAyMDMuNTA5IDEwMi41OTkgMjA2LjUxNiA5Ny4yMDQzQzIwOS44MzggOTEuMjQ4OSAyMTAuNTkxIDgzLjkyNjQgMjA4LjYzMSA3Ni41OTU0QzIwNi43NzcgNjkuNjY1MyAyMDIuNTc0IDYzLjIxOTUgMTk3LjA4MyA1OC45MDE5QzE5MS43NjMgNTQuNzI0OCAxODUuMjk1IDUyLjAxNjUgMTc3Ljg5OCA1MC44NjUzQzE3MS4yMDQgNDkuODE2NSAxNjMuOTQ2IDUwLjEzMjMgMTU2LjkxMSA1MS43NjgzQzE1Ni43NTQgNTEuODEwOCAxNTYuNTk4IDUxLjgzOTQgMTU2LjQ0IDUxLjg4MTlDMTU3LjE0NiA1MC41MDEzIDE1Ny45MzMgNDkuMTQxNyAxNTguNzc0IDQ3LjgxNDdDMTYzLjMwNCA0MC42NDc3IDE2OS42MjQgMzQuNDU5NSAxNzcuMDY0IDI5Ljg5MjFaTTE1Ny41MzMgNTQuNDY1OEMxNjQuMjI2IDUyLjkxMjQgMTcxLjExOCA1Mi42MjEyIDE3Ny40NjYgNTMuNjEyNUMxODQuMzk1IDU0LjY5NTUgMTkwLjQxNyA1Ny4yMTE4IDE5NS4zNTcgNjEuMDkwNUMyMDAuMzc2IDY1LjAzMiAyMDQuMjM0IDcwLjk0NDUgMjA1LjkyNyA3Ny4zMDEzQzIwNy42OTUgODMuOTMwMyAyMDcuMDMzIDkwLjUxOTEgMjA0LjA3NCA5NS44MzM5QzE5OC42MiAxMDUuNjM2IDE4NS4zNTYgMTEwLjYgMTczLjg5IDEwNy4xNDJDMTY4LjUwNCAxMDUuNTE5IDE2My41NTggMTAyLjIgMTU5LjU3NyA5Ny41NjM3QzE1NS43MTIgOTMuMDQ5NiAxNTMuMDE1IDg3LjYyODIgMTUxLjc3NSA4MS44NTU4QzE0OS45NDUgNzMuMzQ2NyAxNTEuMDg1IDYzLjk0NDkgMTU0Ljg3NCA1NS4xNDc1QzE1NS43NjMgNTQuODg3OCAxNTYuNjQ5IDU0LjY2OTkgMTU3LjUzMyA1NC40NjU4WiIgZmlsbD0id2hpdGUiLz4NCjxwYXRoIGQ9Ik0yNDkgMzAuMzA3TDIyMi40NDEgNi4wNjE1TDIyMi4wNTQgMTYuNzM2M0wyNDAuNjQ4IDI2Ljg3M0wyMjEuOTEyIDIwLjY3NzRMMjIxLjkxMSAyMC42ODc2TDIyMS45MTEgMjAuNjc1NEwyMTMuNzEyIDIzLjM3OUwyMjEuNjk1IDI2LjY2MTVMMjIxLjQyMSAzNC4yNDQ5TDI0OSAzMC4zMDdaIiBmaWxsPSJ3aGl0ZSIvPg0KPC9nPg0KPC9zdmc+DQo="

/***/ }),

/***/ "./src/assets/images/support-team.png":
/*!********************************************!*\
  !*** ./src/assets/images/support-team.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/support-team-6b21e0c9fe01700911de4dcb9fbf7ef6.png";

/***/ }),

/***/ "./src/assets/images/support.png":
/*!***************************************!*\
  !*** ./src/assets/images/support.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/support-35040c12d57cc7ad4791dbe01a7d6997.png";

/***/ }),

/***/ "./src/assets/images/testimonial.png":
/*!*******************************************!*\
  !*** ./src/assets/images/testimonial.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/testimonial-69d2e60e96cecd7fd34baeb162374530.png";

/***/ }),

/***/ "./src/components/accordion/accordion.js":
/*!***********************************************!*\
  !*** ./src/components/accordion/accordion.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Accordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-accordion */ "./src/components/accordion/base-accordion.js");
/* harmony import */ var _shared__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared */ "./src/components/accordion/shared.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\accordion\\accordion.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */





function Accordion(_ref) {
  let {
    items
  } = _ref,
      props = _objectWithoutProperties(_ref, ["items"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_base_accordion__WEBPACK_IMPORTED_MODULE_3__["BaseAccordion"], _extends({
    stateReducer: Object(_shared__WEBPACK_IMPORTED_MODULE_4__["combineReducers"])(_shared__WEBPACK_IMPORTED_MODULE_4__["single"], _shared__WEBPACK_IMPORTED_MODULE_4__["preventClose"])
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }), ({
    openIndexes,
    handleItemClick
  }) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map((item, index) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_shared__WEBPACK_IMPORTED_MODULE_4__["AccordionItem"], {
    key: item.title,
    sx: styles.accordion,
    isOpen: openIndexes.includes(index),
    className: openIndexes.includes(index) ? 'is-open' : 'is-closed',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_shared__WEBPACK_IMPORTED_MODULE_4__["AccordionButton"], {
    onClick: () => handleItemClick(index),
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h4",
    sx: styles.title,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }, item.title), !openIndexes.includes(index) && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsPlusCircle"], {
    size: "28px",
    color: Object(polished__WEBPACK_IMPORTED_MODULE_5__["rgba"])('#0F2137', 0.3),
    sx: styles.arrow,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_shared__WEBPACK_IMPORTED_MODULE_4__["AccordionContents"], {
    isOpen: openIndexes.includes(index),
    sx: styles.content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 15
    }
  }, item.contents)))));
}
const styles = {
  accordion: {
    backgroundColor: '#F6F8FB',
    borderRadius: 10,
    p: ['15px', '20px 30px', '30px 45px', '20px 25px', '20px 35px'],
    '&.is-open': {
      backgroundColor: '#fff',
      boxShadow: '0px 9px 30px rgba(69, 88, 157, 0.08)'
    }
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [1, null, null, 2],
    letterSpacing: [0, null, null, null, 'heading'],
    lineHeight: [1.5, 1.8]
  },
  arrow: {
    width: [20, null, null, 25]
  },
  content: {
    fontSize: [1, null, null, 2]
  }
};

/***/ }),

/***/ "./src/components/accordion/base-accordion.js":
/*!****************************************************!*\
  !*** ./src/components/accordion/base-accordion.js ***!
  \****************************************************/
/*! exports provided: BaseAccordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseAccordion", function() { return BaseAccordion; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class BaseAccordion extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      openIndexes: [0]
    });

    _defineProperty(this, "handleItemClick", index => {
      this.internalSetState(state => {
        const closing = state.openIndexes.includes(index);
        return {
          type: closing ? 'closing' : 'opening',
          openIndexes: closing ? state.openIndexes.filter(i => i !== index) : [...state.openIndexes, index]
        };
      });
      console.log('clicked');
    });
  }

  getState(state = this.state) {
    return {
      openIndexes: this.props.openIndexes === undefined ? state.openIndexes : this.props.openIndexes
    };
  }

  internalSetState(changes, callback = () => {}) {
    let allChanges;
    this.setState(state => {
      const actualState = this.getState(state);
      const changesObject = typeof changes === 'function' ? changes(actualState) : changes;
      allChanges = this.props.stateReducer(actualState, changesObject);
      return allChanges;
    }, () => {
      this.props.onStateChange(allChanges);
      callback();
    });
  }

  render() {
    return this.props.children({
      openIndexes: this.getState().openIndexes,
      handleItemClick: this.handleItemClick
    });
  }

}

_defineProperty(BaseAccordion, "defaultProps", {
  stateReducer: (state, changes) => changes,
  onStateChange: () => {}
});



/***/ }),

/***/ "./src/components/accordion/shared.js":
/*!********************************************!*\
  !*** ./src/components/accordion/shared.js ***!
  \********************************************/
/*! exports provided: AccordionButton, AccordionContents, AccordionItem, preventClose, single, combineReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionButton", function() { return AccordionButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContents", function() { return AccordionContents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preventClose", function() { return preventClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "single", function() { return single; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "combineReducers", function() { return combineReducers; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "framer-motion");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\accordion\\shared.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


const AccordionButton = _ref => {
  let {
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    sx: styles.buttonToggle
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 3
    }
  }), children);
};
const styles = {
  accordionItem: {
    overflow: 'hidden',
    '+ .accordion-item': {
      mt: [3]
    }
  },
  buttonToggle: {
    display: 'flex',
    alignItems: ['center'],
    justifyContent: 'space-between',
    cursor: 'pointer',
    position: 'relative'
  },
  accordionContent: {
    overflow: 'hidden',
    lineHeight: 2,
    mt: [4]
  }
};
const variants = {
  open: {
    height: 'auto',
    marginTop: 16
  },
  closed: {
    height: 0,
    marginTop: 0
  }
};
function AccordionContents(_ref2) {
  let {
    isOpen
  } = _ref2,
      props = _objectWithoutProperties(_ref2, ["isOpen"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(framer_motion__WEBPACK_IMPORTED_MODULE_2__["motion"].div, _extends({
    initial: "closed",
    animate: isOpen ? 'open' : 'closed',
    variants: variants,
    sx: styles.accordionContent
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 5
    }
  }));
}
const AccordionItem = _ref3 => {
  let {
    isOpen,
    children,
    className
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, ["isOpen", "children", "className"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", _extends({
    className: `accordion-item ${className}`,
    sx: styles.accordionItem
  }, rest, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 3
    }
  }), children);
};
const preventClose = (state, changes) => changes.type === 'closing' && state.openIndexes.length < 2 ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: state.openIndexes
}) : changes;
const single = (state, changes) => changes.type === 'opening' ? _objectSpread(_objectSpread({}, changes), {}, {
  openIndexes: changes.openIndexes.slice(-1)
}) : changes;
const combineReducers = (...reducers) => (state, changes) => reducers.reduce((acc, reducer) => reducer(state, acc), changes);

/***/ }),

/***/ "./src/components/cards/blog-post.js":
/*!*******************************************!*\
  !*** ./src/components/cards/blog-post.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var services_slugify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! services/slugify */ "./src/services/slugify.js");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\cards\\blog-post.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





const BlogPost = ({
  post
}) => {
  // const slug = slugify(post.mn_titulo)
  // const slug = "teste"
  const slug = Object(services_slugify__WEBPACK_IMPORTED_MODULE_4__["slugify"])(post.mn_titulo);
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "article",
    sx: styles.post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    as: "figure",
    sx: styles.thumbnail,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: `https://www.balaminut.com.br/img/noticias/${post.mn_imagem1}`,
    loading: "lazy",
    alt: post === null || post === void 0 ? void 0 : post.mn_title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    className: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    path: `noticias/${slug}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, post === null || post === void 0 ? void 0 : post.mn_titulo)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.excerpt,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, post === null || post === void 0 ? void 0 : post.mn_descricao), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["LearnMore"], {
    path: `noticias/${slug}`,
    label: "Leia Mais",
    sx: styles.learnMore,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 9
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (BlogPost);
const styles = {
  post: {
    mx: [null, null, null, 3, 'unset']
  },
  thumbnail: {
    mb: [4],
    img: {
      borderRadius: 5
    }
  },
  title: {
    fontWeight: 700,
    fontSize: [2, null, null, 3, '17px', 3],
    lineHeight: [1.5, null, null, null, null, 1.68],
    letterSpacing: '-0.2px',
    a: {
      color: 'heading',
      textDecoration: 'none'
    }
  },
  excerpt: {
    color: 'text',
    fontSize: [1, null, null, 2],
    lineHeight: 1.88,
    mt: [2],
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    WebkitLineClamp: '2',
    WebkitBoxOrient: 'vertical'
  },
  learnMore: {
    fontSize: [1, null, '15px'],
    mt: 2
  }
};

/***/ }),

/***/ "./src/components/cards/faq-item.js":
/*!******************************************!*\
  !*** ./src/components/cards/faq-item.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\cards\\faq-item.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


const FaqItem = _ref => {
  let {
    faq
  } = _ref,
      props = _objectWithoutProperties(_ref, ["faq"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    as: "article",
    sx: styles === null || styles === void 0 ? void 0 : styles.faq
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, faq === null || faq === void 0 ? void 0 : faq.ques), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, faq === null || faq === void 0 ? void 0 : faq.ans));
};

/* harmony default export */ __webpack_exports__["default"] = (FaqItem);
const styles = {
  faq: {
    borderBottom: '2px solid #0F2137',
    marginBottom: 8,
    mx: [null, null, null, 6, 8],
    width: [null, null, null, 'calc(50% - 60px)', 'calc(50% - 80px)'],
    h3: {
      fontWeight: 500,
      fontSize: [2, null, null, 3],
      lineHeight: 1.68,
      letterSpacing: 'heading',
      color: '#0F2137',
      mb: [2, null, null, 3]
    },
    p: {
      color: 'text',
      fontSize: [1, null, null, 2],
      lineHeight: 2,
      mb: 4
    }
  }
};

/***/ }),

/***/ "./src/components/cards/feature.js":
/*!*****************************************!*\
  !*** ./src/components/cards/feature.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\cards\\feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


const Feature = _ref => {
  let {
    data
  } = _ref,
      props = _objectWithoutProperties(_ref, ["data"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    sx: styles.feature
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: data === null || data === void 0 ? void 0 : data.icon,
    alt: data === null || data === void 0 ? void 0 : data.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.description)));
};

/* harmony default export */ __webpack_exports__["default"] = (Feature);
const styles = {
  feature: {
    display: ['flex'],
    figure: {
      minWidth: [70],
      mr: ['30px']
    },
    h3: {
      fontSize: '18px',
      lineHeight: 1.28,
      color: 'heading',
      marginBottom: '20px'
    },
    p: {
      fontSize: 16,
      lineHeight: 1.88,
      color: 'text'
    },
    a: {
      mt: [3]
    }
  }
};

/***/ }),

/***/ "./src/components/cards/price-table.js":
/*!*********************************************!*\
  !*** ./src/components/cards/price-table.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var services_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! services/slugify */ "./src/services/slugify.js");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\cards\\price-table.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const PriceTable = ({
  items,
  isRecommended,
  title,
  subtitle,
  link
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.priceTable,
    className: `${isRecommended ? 'recommended' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.header,
    className: "priceHeader",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.subtitle,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, subtitle)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "ul",
    sx: styles.list,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }
  }, items === null || items === void 0 ? void 0 : items.map((item, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 11
    }
  }, isRecommended ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_4__["Link"], {
    path: `obrigacoes/${Object(services_slugify__WEBPACK_IMPORTED_MODULE_5__["slugify"])(item.Mn_Titulo)}`,
    sx: styles.link,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdCheckmarkCircle"], {
    sx: {
      color: 'secondary'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 19
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, item.Mn_Titulo)) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoMdCheckmarkCircle"], {
    sx: {
      color: 'secondary'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 19
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 17
    }
  }, item.obr_nome)))), link ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_4__["LearnMore"], {
    path: link,
    label: "Saiba Mais",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  })) : ''));
};

/* harmony default export */ __webpack_exports__["default"] = (PriceTable);
const styles = {
  priceTable: {
    alignSelf: 'baseline',
    background: 'white',
    borderRadius: 10,
    position: 'relative',
    padding: ['20px 15px', null, null, '30px 25px', '25px 30px 40px 30px', '45px 60px 70px 45px'],
    boxShadow: ['0px 15px 50px rgba(91, 132, 193, 0.1)', null, null, 'none'],
    '&.recommended': {
      boxShadow: [null, null, null, '0px 15px 50px rgba(91, 132, 193, 0.1)'],
      button: {
        backgroundColor: 'primary',
        color: 'white'
      }
    }
  },
  recomLabel: {
    fontWeight: 700,
    fontSize: [0, 1],
    lineHeight: 1.29,
    backgroundColor: '#52ACFF',
    borderRadius: '8px 8px 0px 0px',
    position: 'absolute',
    left: 0,
    top: '-35px',
    right: 0,
    minHeight: [30, 35],
    textTransform: 'uppercase',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 700,
    fontSize: [1, 2, 3],
    lineHeight: 1.31,
    letterSpacing: '-0.55px'
  },
  subtitle: {
    color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#343D48', 0.65),
    fontSize: [0, null, 1, 2],
    lineHeight: 1.62,
    mt: '8px'
  },
  priceAmount: {
    color: '#0F2137',
    fontWeight: 700,
    fontSize: [1, 2, null, 4, '26px'],
    lineHeight: 1.3,
    letterSpacing: 'heading',
    mt: ['12px', null, null, '26px']
  },
  list: {
    listStyle: 'none',
    padding: 0,
    mt: [6, null, null, null, 10],
    maxWidth: 340,
    li: {
      display: 'flex',
      alignItems: 'center',
      fontSize: [0, null, 1, null, 2],
      lineHeight: 1.62,
      '+ li ': {
        mt: [3, null, null, null, 6]
      },
      svg: {
        height: [17, null, null, null, 23],
        width: [17, null, null, null, 23]
      },
      'span:first-of-type': {
        mr: '13px',
        mt: '5px'
      }
    },
    '.unavailable': {
      opacity: 0.5
    }
  },
  button: {
    border: `1.5px solid ${Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#5B2B9D', 0.15)}`,
    color: 'primary',
    minHeight: [40, null, null, null, 50],
    padding: ['0 24px', null, '0 32px'],
    fontSize: [1, null, null, null, 2],
    mt: [3, null, null, 6],
    ':hover': {
      borderColor: 'primary'
    }
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer'
  }
};

/***/ }),

/***/ "./src/components/cards/service.js":
/*!*****************************************!*\
  !*** ./src/components/cards/service.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\cards\\service.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


const Service = ({
  cotacao
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.service,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 7
    }
  }, cotacao === null || cotacao === void 0 ? void 0 : cotacao.cotd_nome), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }
  }, "Compra: ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    sx: styles.price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 28
    }
  }, "R$ ", cotacao === null || cotacao === void 0 ? void 0 : cotacao.cotd_compra)), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, "Venda: ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    sx: styles.price,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 27
    }
  }, (cotacao === null || cotacao === void 0 ? void 0 : cotacao.cotd_venda) !== 0 ? `R$ ${cotacao === null || cotacao === void 0 ? void 0 : cotacao.cotd_venda}` : '-')));
};

/* harmony default export */ __webpack_exports__["default"] = (Service);
const styles = {
  service: {
    border: theme => `1px solid ${theme.colors.borderColor}`,
    borderRadius: 5,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    minHeight: [107, null, null, 130],
    textAlign: 'center',
    transition: 'all 0.3s ease-in-out 0s',
    ':hover': {
      boxShadow: '0px 11px 30px rgba(51, 83, 145, 0.07)',
      borderColor: 'transparent'
    },
    p: {
      fontWeight: 500,
      fontSize: [1, null, null, '17px'],
      lineHeight: 1.77,
      color: 'heading'
    }
  },
  price: {
    color: 'primary',
    fontWeight: 700,
    fontSize: [1, null, null, '15px'],
    lineHeight: 2
  }
};

/***/ }),

/***/ "./src/components/footer/footer.data.js":
/*!**********************************************!*\
  !*** ./src/components/footer/footer.data.js ***!
  \**********************************************/
/*! exports provided: menuItems, footerNav */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menuItems", function() { return menuItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "footerNav", function() { return footerNav; });
/* harmony import */ var assets_images_icons_telefone_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assets/images/icons/telefone.png */ "./src/assets/images/icons/telefone.png");
/* harmony import */ var assets_images_icons_telefone_png__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_telefone_png__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_images_icons_email_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/images/icons/email.png */ "./src/assets/images/icons/email.png");
/* harmony import */ var assets_images_icons_email_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_email_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_icons_endereco_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/icons/endereco.png */ "./src/assets/images/icons/endereco.png");
/* harmony import */ var assets_images_icons_endereco_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_endereco_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_icons_cidade_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/icons/cidade.png */ "./src/assets/images/icons/cidade.png");
/* harmony import */ var assets_images_icons_cidade_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_cidade_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_icons_facebook_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/icons/facebook.png */ "./src/assets/images/icons/facebook.png");
/* harmony import */ var assets_images_icons_facebook_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_facebook_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/icons/instagram.png */ "./src/assets/images/icons/instagram.png");
/* harmony import */ var assets_images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_icons_linkedin_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/icons/linkedin.png */ "./src/assets/images/icons/linkedin.png");
/* harmony import */ var assets_images_icons_linkedin_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_linkedin_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/icons/whatsapp.png */ "./src/assets/images/icons/whatsapp.png");
/* harmony import */ var assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_7__);








const menuItems = [{
  id: 2,
  title: 'Contato',
  items: [{
    path: 'tel:1921051000',
    icon: assets_images_icons_telefone_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    label: '(19) 2105-1000'
  }, {
    path: 'mailto:comercial@tbrweb.com.br',
    icon: assets_images_icons_email_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: 'comercial@tbrweb.com.br'
  }, {
    path: 'https://g.page/TBRWEB?share',
    icon: assets_images_icons_endereco_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    label: 'Av. Dr. Paulo de Moraes, 555'
  }, {
    path: 'https://g.page/TBRWEB?share',
    icon: assets_images_icons_cidade_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    label: 'Piracicaba - SP'
  }]
}, {
  id: 3,
  title: 'Redes Sociais',
  items: [{
    path: 'https://www.facebook.com/tbrweb/',
    icon: assets_images_icons_facebook_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    label: 'Facebook'
  }, {
    path: 'https://www.instagram.com/tbrweb/',
    icon: assets_images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    label: 'Instagram'
  }, {
    path: 'https://www.linkedin.com/in/tbrweb/',
    icon: assets_images_icons_linkedin_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    label: 'Linkedin'
  }, {
    path: 'https://wa.me/5519999706375',
    icon: assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    label: 'Whatsapp'
  }]
}];
const footerNav = [{
  path: '#!',
  label: 'Home'
}, {
  path: '#!',
  label: 'Advertise'
}, {
  path: '#!',
  label: 'Supports'
}, {
  path: '#!',
  label: 'Marketing'
}, {
  path: '#!',
  label: 'FAQ'
}];

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var sections_call_to_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sections/call-to-action */ "./src/sections/call-to-action.js");
/* harmony import */ var _widget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./widget */ "./src/components/footer/widget.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */









function Footer() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(sections_call_to_action__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "footer",
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footerTopInner,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.about,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.logo,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_images_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    loading: "lazy",
    alt: "Modelo Contabilidade",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.copyright,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, "\xA9 Copyright ", new Date().getFullYear(), " por ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    color: "secondary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 65
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    href: "https://tbrweb.com.br",
    target: "_blank",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 99
    }
  }, "TBrWeb")))), _footer_data__WEBPACK_IMPORTED_MODULE_7__["menuItems"].map(({
    id,
    title,
    items
  }) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_widget__WEBPACK_IMPORTED_MODULE_6__["default"], {
    key: id,
    title: title,
    items: items,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }))))));
}
const styles = {
  footer: {
    backgroundColor: '#F9FAFC',
    pt: [8, null, null, 10],
    pb: [8, null, null, 15]
  },
  footerTopInner: {
    gap: [30, null, 50, '20px 50px', 17, 50],
    display: ['grid'],
    gridTemplateColumns: ['repeat(2, 1fr)', null, null, 'repeat(3, 1fr)', 'repeat(3, 1fr)']
  },
  footerInner: {
    borderTop: `1px solid #D9E0E7`,
    display: ['block', null, 'flex'],
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '35px 0 40px'
  },
  about: {
    display: [null, null, null, 'grid', 'block'],
    gridTemplateColumns: '205px 1fr 1fr',
    alignItems: ['center'],
    gridRow: ['3/4', null, '1/1', '3/4', 'unset'],
    gridColumn: ['1/3', null, '1/2', '1/5', 'unset']
  },
  logo: {
    display: ['flex'],
    justifyContent: ['center', null, null, 'unset'],
    gridColumn: '1/2'
  },
  terms: {
    display: ['flex'],
    gridColumn: '3/4',
    alignItems: ['center', null, null, null, 'flex-start', 'center'],
    flexDirection: ['row', null, null, null, 'column', 'row'],
    justifyContent: ['center', null, 'flex-start', 'center', null, 'flex-start'],
    mt: [4, null, null, 0, 4],
    a: {
      color: 'heading'
    },
    span: {
      display: ['inline-flex', null, null, null, 'none', 'inline-flex'],
      m: ['0 10px']
    }
  },
  copyright: {
    color: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#0F2137', 0.6),
    fontSize: ['14px'],
    mt: [3, null, null, -31, 3],
    mr: [null, null, null, 'auto', 'unset'],
    gridColumn: '2/3',
    textAlign: ['center', null, 'left', 'center', 'left'],
    a: {
      textDecoration: 'none',
      '&:visited': {
        color: 'inherit'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/footer/widget.js":
/*!*****************************************!*\
  !*** ./src/components/footer/widget.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\footer\\widget.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const Widget = ({
  title,
  items
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footerWidget,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }, title), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, items.map(({
    path,
    label,
    icon
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("li", {
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, icon && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: icon,
    alt: label,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 22
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: path,
    href: path.toString(),
    target: "_blank",
    key: i,
    label: label,
    variant: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Widget);
const styles = {
  footerWidget: {
    h3: {
      color: 'heading',
      fontFamily: 'body',
      fontSize: '18px',
      fontWeight: 500,
      lineHeight: 1.68,
      letterSpacing: 'heading'
    },
    ul: {
      listStyle: 'none',
      margin: '28px 0 0',
      padding: 0,
      li: {
        display: 'flex',
        alignItems: 'center',
        img: {
          mr: '15px'
        }
      },
      a: {
        fontSize: '15px',
        color: Object(polished__WEBPACK_IMPORTED_MODULE_3__["rgba"])('#02073E', 0.8),
        lineHeight: 2.5,
        textDecoration: 'none',
        cursor: 'pointer'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/hamburger.js":
/*!*************************************!*\
  !*** ./src/components/hamburger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\hamburger.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


const Bar = ({
  isSticky
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    className: "bar",
    sx: {
      backgroundColor: isSticky ? 'text' : 'white'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  });
};

const HamburgerMenu = _ref => {
  let {
    isOpen,
    isSticky,
    toggleMobileMenu
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isOpen", "isSticky", "toggleMobileMenu"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", _extends({
    sx: styles.button,
    onClick: toggleMobileMenu,
    className: isOpen ? 'open' : ''
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }), [1, 2, 3, 4].map((bar, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Bar, {
    key: i,
    isSticky: isSticky,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    variant: "styles.srOnly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }
  }, "Menu"));
};

/* harmony default export */ __webpack_exports__["default"] = (HamburgerMenu);
const styles = {
  button: {
    backgroundColor: 'transparent',
    border: 0,
    p: 0,
    width: 20,
    height: 14,
    position: 'relative',
    transform: 'rotate(0deg)',
    transition: '.5s ease-in-out',
    cursor: 'pointer',
    outline: 0,
    ml: [4, null, 6],
    '.bar': {
      display: 'block',
      position: 'absolute',
      height: '2px',
      width: '100%',
      borderRadius: 9,
      opacity: 1,
      left: 0,
      transform: 'rotate(0deg)',
      transition: '.25s ease-in-out',
      ':nth-of-type(1)': {
        top: 0
      },
      ':nth-of-type(2),:nth-of-type(3)': {
        top: '6px'
      },
      ':nth-of-type(4)': {
        top: '12px'
      }
    },
    '&.open': {
      '.bar': {
        ':nth-of-type(1)': {
          top: '6px',
          width: '0%',
          left: '50%'
        },
        ':nth-of-type(2)': {
          transform: 'rotate(45deg)'
        },
        ':nth-of-type(3)': {
          transform: 'rotate(-45deg)'
        },
        ':nth-of-type(4)': {
          top: '6px',
          width: '0%',
          left: '50%'
        }
      }
    }
  }
};

/***/ }),

/***/ "./src/components/header/header.data.js":
/*!**********************************************!*\
  !*** ./src/components/header/header.data.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: 'home',
  label: 'Home'
}, {
  path: 'quem-somos',
  label: 'Quem somos'
}, {
  path: 'servicos',
  label: 'Serviços'
}, {
  path: 'informacoes',
  label: 'Atualize-se'
}, {
  path: 'contato',
  label: 'Contato'
}]);

/***/ }),

/***/ "./src/components/header/header.data.pages.js":
/*!****************************************************!*\
  !*** ./src/components/header/header.data.pages.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  path: '/',
  label: 'Home'
}, {
  path: '/',
  label: 'Quem somos'
}, {
  path: '/',
  label: 'Serviços'
}, {
  path: '/',
  label: 'Atualize-se'
}, {
  path: '/',
  label: 'Contato'
}]);

/***/ }),

/***/ "./src/components/header/header.js":
/*!*****************************************!*\
  !*** ./src/components/header/header.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-stickynode */ "react-stickynode");
/* harmony import */ var react_stickynode__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_stickynode__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_logo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/logo */ "./src/components/logo.js");
/* harmony import */ var components_topbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/topbar */ "./src/components/topbar.js");
/* harmony import */ var components_icons_lock__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/icons/lock */ "./src/components/icons/lock.js");
/* harmony import */ var components_hamburger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/hamburger */ "./src/components/hamburger.js");
/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navbar */ "./src/components/header/navbar.js");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\header\\header.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */








function Header() {
  const {
    0: state,
    1: setState
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    isMobileMenu: false,
    isSticky: false
  });

  const handleStateChange = status => {
    status.status === react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a.STATUS_FIXED ? setState(_objectSpread(_objectSpread({}, state), {}, {
      isSticky: true
    })) : setState(_objectSpread(_objectSpread({}, state), {}, {
      isSticky: false
    }));
  };

  const toggleMobileMenu = () => {
    setState(prev => {
      return _objectSpread(_objectSpread({}, prev), {}, {
        isMobileMenu: !prev.isMobileMenu
      });
    });
  };

  const handleCloseMenu = () => {
    setState(_objectSpread(_objectSpread({}, state), {}, {
      isMobileMenu: false
    }));
  };

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_topbar__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_stickynode__WEBPACK_IMPORTED_MODULE_2___default.a, {
    enabled: true,
    top: 0,
    activeClass: "is-sticky",
    innerZ: 100,
    onStateChange: handleStateChange,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "header",
    sx: styles.header,
    className: state.isSticky ? 'is-sticky' : '',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_logo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.logo,
    isSticky: state.isSticky,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_navbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    isSticky: state.isSticky,
    isMobile: state.isMobileMenu,
    handleCloseMenu: handleCloseMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 15
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_hamburger__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: styles.hamburger,
    isSticky: state.isSticky,
    isOpen: state.isMobileMenu,
    toggleMobileMenu: toggleMobileMenu,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 13
    }
  })))));
}
const styles = {
  header: {
    position: 'fixed',
    left: 0,
    right: 0,
    py: 4,
    transition: 'all 0.3s ease-in-out 0s',
    '&.is-sticky': {
      backgroundColor: 'white',
      boxShadow: '0 6px 13px rgba(38,78,118,0.1)',
      paddingTop: '15px',
      paddingBottom: '15px'
    },
    '&.is-mobile-menu': {
      backgroundColor: 'white'
    }
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  logo: {
    mr: [null, null, null, null, 6, null, 12]
  },
  buttonGroup: {
    alignItems: 'center',
    marginLeft: 'auto',
    button: {
      fontWeight: 500
    }
  },
  login: {
    display: ['none', null, null, null, 'flex'],
    color: 'white',
    p: 0,
    mr: [null, null, null, null, 5],
    svg: {
      mr: 2
    }
  },
  joinCommunity: {
    backgroundColor: 'white',
    minHeight: [30, null, null, 40],
    p: ['0 12px', null, null, '0 14px'],
    fontSize: ['10px', null, null, 1]
  },
  hamburger: {
    display: [null, null, null, null, null, 'none']
  }
};

/***/ }),

/***/ "./src/components/header/navbar.js":
/*!*****************************************!*\
  !*** ./src/components/header/navbar.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var _header_data_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.data.pages */ "./src/components/header/header.data.pages.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\header\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const Navbar = ({
  isSticky,
  isMobile,
  handleCloseMenu
}) => {
  const {
    asPath
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "nav",
    sx: styles.navbar,
    className: `navbar${isMobile ? ' is-mobile' : ''}${isSticky ? ' is-sticky' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, asPath === '/' ? _header_data__WEBPACK_IMPORTED_MODULE_3__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["NavLink"], {
    key: i,
    path: path,
    label: label,
    onClick: handleCloseMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  })) : _header_data_pages__WEBPACK_IMPORTED_MODULE_4__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    key: i,
    path: path,
    label: label,
    onClick: handleCloseMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);
const styles = {
  navbar: {
    display: [null, null, null, null, null, 'flex'],
    alignItems: [null, null, null, 'center'],
    flexGrow: [null, null, null, 1],
    a: {
      color: 'white',
      cursor: 'pointer',
      '+ a': {
        ml: [null, null, null, null, null, 6]
      }
    },
    '@media only screen and (max-width: 1024px)': {
      position: 'absolute',
      backgroundColor: 'white',
      boxShadow: '0px 11px 30px rgba(51, 83, 145, 0.07)',
      width: '100%',
      left: 0,
      top: 70,
      opacity: 0,
      visibility: 'hidden',
      transform: 'scaleY(0)',
      transformOrigin: 'top left 0',
      transition: '0.3s ease 0s',
      '&.is-sticky': {
        borderTop: '1px solid #f3f3f3'
      },
      '&.is-mobile': {
        opacity: 1,
        visibility: 'visible',
        transform: 'scaleY(1)'
      },
      a: {
        fontWeight: 500,
        lineHeight: 1,
        color: 'textSecondary',
        display: 'block',
        padding: 3,
        '+ a': {
          borderTop: '1px solid #f3f3f3'
        }
      }
    },
    '&.is-sticky': {
      top: 60,
      a: {
        color: 'text'
      },
      '.active': {
        color: 'primary'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/icons/lock.js":
/*!**************************************!*\
  !*** ./src/components/icons/lock.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\icons\\lock.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Lock(_ref) {
  let {
    fill,
    width,
    height
  } = _ref,
      props = _objectWithoutProperties(_ref, ["fill", "width", "height"]);

  return __jsx("svg", _extends({
    width: width !== null && width !== void 0 ? width : 16,
    height: height !== null && height !== void 0 ? height : 20,
    viewBox: "0 0 16 20",
    fill: "none"
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("path", {
    d: "M15.156 16.893v-6.811a2.237 2.237 0 00-2.232-2.233h-.562V4.707A4.713 4.713 0 007.654 0a4.712 4.712 0 00-4.703 4.707v.543c0 .37.3.667.667.667.367 0 .672-.3.672-.667v-.543A3.372 3.372 0 017.658 1.34a3.372 3.372 0 013.369 3.368V7.85H2.389c-1.23 0-2.233 1-2.233 2.233v6.811a2.237 2.237 0 002.233 2.233h10.538a2.236 2.236 0 002.23-2.233zm-13.657 0v-6.811c0-.492.402-.894.894-.894h10.535c.491 0 .893.402.893.894v6.811a.896.896 0 01-.893.894H2.388a.895.895 0 01-.889-.894z",
    fill: fill !== null && fill !== void 0 ? fill : '#fff',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }), __jsx("path", {
    d: "M7.657 11.99a.67.67 0 00-.672.668v1.73c0 .37.3.667.672.667.37 0 .667-.3.667-.668v-1.729a.667.667 0 00-.667-.667z",
    fill: fill !== null && fill !== void 0 ? fill : '#fff',
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (Lock);

/***/ }),

/***/ "./src/components/icons/logo.js":
/*!**************************************!*\
  !*** ./src/components/icons/logo.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\icons\\logo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



const Logo = _ref => {
  let {
    white
  } = _ref,
      props = _objectWithoutProperties(_ref, ["white"]);

  return __jsx("svg", _extends({
    viewBox: "0 0 185.92 36.62",
    width: 185.92,
    height: 36.62
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 5
    }
  }), __jsx("defs", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }
  }, __jsx("linearGradient", {
    id: "prefix__b",
    x1: 16.08,
    y1: -16.52,
    x2: 10.26,
    y2: 20.44,
    gradientUnits: "userSpaceOnUse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }
  }, __jsx("stop", {
    offset: 0,
    stopColor: "#0096d9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#00c198",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  })), __jsx("linearGradient", {
    id: "prefix__c",
    x1: 8.95,
    y1: 13.48,
    x2: 18.28,
    y2: 32.02,
    gradientUnits: "userSpaceOnUse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, __jsx("stop", {
    offset: 0,
    stopColor: "#002dd9",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#00b2ab",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  })), __jsx("linearGradient", {
    id: "prefix__a",
    x1: 23.33,
    y1: -3.39,
    x2: 5.66,
    y2: 37.65,
    gradientUnits: "userSpaceOnUse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }, __jsx("stop", {
    offset: 0,
    stopColor: "#3482c0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 0.45,
    stopColor: "#96bede",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 0.83,
    stopColor: "#e1edf6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 11
    }
  })), __jsx("linearGradient", {
    id: "prefix__d",
    x1: 21.64,
    y1: 1.42,
    x2: 6.63,
    y2: 30.44,
    xlinkHref: "#prefix__a",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("linearGradient", {
    id: "prefix__e",
    x1: 25.15,
    y1: 3.24,
    x2: 10.14,
    y2: 32.25,
    gradientUnits: "userSpaceOnUse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 9
    }
  }, __jsx("stop", {
    offset: 0,
    stopColor: "#569fa1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 0.36,
    stopColor: "#97c4c5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 0.8,
    stopColor: "#e2eeef",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 1,
    stopColor: "#fff",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  })), __jsx("radialGradient", {
    id: "prefix__f",
    cx: 21.16,
    cy: 32.05,
    r: 27.25,
    gradientUnits: "userSpaceOnUse",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 9
    }
  }, __jsx("stop", {
    offset: 0,
    stopColor: "#ff0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 11
    }
  }), __jsx("stop", {
    offset: 1,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 11
    }
  }))), __jsx("g", {
    "data-name": "Layer 2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }
  }, __jsx("g", {
    "data-name": "Layer 1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, __jsx("path", {
    d: "M39.64 22.9h2.85a1.86 1.86 0 00.9 1.4 3.67 3.67 0 002 .53 3.33 3.33 0 001.9-.5A1.5 1.5 0 0048 23a1.32 1.32 0 00-.54-1.1 4.91 4.91 0 00-1.83-.71l-1.84-.4Q40 20 40 16.9a3.81 3.81 0 011.5-3.13 6.14 6.14 0 013.89-1.19 6.07 6.07 0 013.89 1.16 3.86 3.86 0 011.5 3.08H48a1.77 1.77 0 00-.79-1.4 3 3 0 00-1.82-.52 3 3 0 00-1.77.48 1.49 1.49 0 00-.66 1.26 1.25 1.25 0 00.53 1.05 5.29 5.29 0 001.77.68l1.71.36A6.18 6.18 0 0150 20.14a3.42 3.42 0 011 2.56 3.93 3.93 0 01-1.55 3.3 6.63 6.63 0 01-4.17 1.2 6.65 6.65 0 01-4.06-1.2 3.9 3.9 0 01-1.58-3.1zM53.33 14h2.85v2.42h1.93v2.18h-1.93v5c0 .78.41 1.18 1.23 1.18a4.44 4.44 0 00.69-.05v2.1a6.12 6.12 0 01-1.36.11 4.1 4.1 0 01-2.63-.66 2.74 2.74 0 01-.78-2.2V18.6h-1.48v-2.15h1.48zm10.29 11a2.39 2.39 0 001.6-.55 1.74 1.74 0 00.66-1.39v-.76l-2.2.13a2.3 2.3 0 00-1.24.4 1.09 1.09 0 00-.43.9 1.1 1.1 0 00.44.93 1.83 1.83 0 001.17.34zm-.94 2.06a3.6 3.6 0 01-2.51-.89 2.92 2.92 0 01-1-2.28 2.68 2.68 0 011-2.24 5.43 5.43 0 013-.93l2.63-.15v-.7a1.4 1.4 0 00-.47-1.13 1.91 1.91 0 00-1.28-.41 2.2 2.2 0 00-1.28.35 1.44 1.44 0 00-.6.95h-2.53A3.21 3.21 0 0161 17.17a5.31 5.31 0 013.29-1 5.05 5.05 0 013.23 1 3.09 3.09 0 011.21 2.54v7.2h-2.8v-1.6h-.06a3.08 3.08 0 01-1.3 1.3 3.89 3.89 0 01-1.89.47zm7.85-.16V16.45h2.76v1.88h.06a2.86 2.86 0 01.91-1.52 2.43 2.43 0 011.58-.53 2.88 2.88 0 01.81.11v2.51a2.79 2.79 0 00-1-.17 2.16 2.16 0 00-1.64.62 2.39 2.39 0 00-.59 1.72v5.85zm8-12.89h2.85v2.42h1.94v2.17h-1.89v5c0 .78.41 1.18 1.23 1.18a4.68 4.68 0 00.7-.05v2.1A6.24 6.24 0 0182 27a4.15 4.15 0 01-2.64-.66 2.74 2.74 0 01-.78-2.2V18.6h-1.47v-2.15h1.47zm16 2.42v10.49h-2.69V25h-.06a3.07 3.07 0 01-3.13 2.08 3.71 3.71 0 01-2.75-1 4 4 0 01-1-2.87v-6.76h2.85v6.15a2.28 2.28 0 00.5 1.59 1.86 1.86 0 001.45.55 1.9 1.9 0 001.51-.63 2.4 2.4 0 00.55-1.67v-6zm8-.17a3.79 3.79 0 013.14 1.44 6.14 6.14 0 011.15 4 6.33 6.33 0 01-1.13 4 4.1 4.1 0 01-5.09.92 3.15 3.15 0 01-1.27-1.41h-.03v5.17h-2.85V16.45h2.81v1.82h.06a3.35 3.35 0 011.27-1.46 3.7 3.7 0 011.97-.53zm-1 8.51a2 2 0 001.77-.77 3.71 3.71 0 00.63-2.27 3.67 3.67 0 00-.63-2.26 2 2 0 00-1.69-.85 2 2 0 00-1.68.86 3.6 3.6 0 00-.64 2.25 3.73 3.73 0 00.63 2.27 2 2 0 001.69.79zm22.07-.32v2.45h-9.11V12.82h3v11.65zm5.55.55a2.39 2.39 0 001.6-.55 1.74 1.74 0 00.66-1.39v-.76l-2.2.13a2.3 2.3 0 00-1.24.4 1.09 1.09 0 00-.43.9 1.1 1.1 0 00.44.93 1.83 1.83 0 001.25.34zm-.94 2.06a3.59 3.59 0 01-2.51-.89 2.92 2.92 0 01-1-2.28 2.68 2.68 0 011-2.24 5.43 5.43 0 013-.93l2.63-.15v-.7a1.43 1.43 0 00-.47-1.13 1.91 1.91 0 00-1.28-.41 2.18 2.18 0 00-1.28.35 1.44 1.44 0 00-.6.95h-2.61a3.21 3.21 0 011.32-2.48 5.31 5.31 0 013.29-1 5.07 5.07 0 013.23 1 3.09 3.09 0 011.21 2.54v7.2h-2.76v-1.58h-.06a3.08 3.08 0 01-1.3 1.3 3.89 3.89 0 01-1.73.47zm7.85-.16V16.45h2.76v1.86h.18a3.26 3.26 0 011.25-1.52 3.6 3.6 0 012-.54 3.46 3.46 0 012.68 1 4.12 4.12 0 011 2.88v6.75H143v-6.12a2.31 2.31 0 00-.49-1.59 1.83 1.83 0 00-1.44-.55 2 2 0 00-1.52.63 2.39 2.39 0 00-.57 1.66v6zm15.41.16a3.75 3.75 0 01-3.11-1.45 6.21 6.21 0 01-1.15-4 6.11 6.11 0 011.15-3.93 3.79 3.79 0 013.13-1.45 3.53 3.53 0 012 .54 3.17 3.17 0 011.25 1.42v-5.37h2.86v14.1h-2.82v-1.8h-.05a3.09 3.09 0 01-1.26 1.42 3.67 3.67 0 01-1.92.54zm1-8.51a2 2 0 00-1.7.84 3.75 3.75 0 00-.61 2.27 3.76 3.76 0 00.61 2.28 2.15 2.15 0 003.39 0 3.72 3.72 0 00.63-2.28 3.67 3.67 0 00-.63-2.26 2 2 0 00-1.64-.83zm7.11 8.35V16.45h2.85v10.47zm2.51-12.05a1.52 1.52 0 01-1.09.42 1.49 1.49 0 01-1.08-.42 1.44 1.44 0 01-.44-1 1.38 1.38 0 01.44-1 1.46 1.46 0 011.08-.43 1.49 1.49 0 011.09.43 1.38 1.38 0 01.44 1 1.44 1.44 0 01-.39 1.02zm2.24 12.05V16.45h2.76v1.86h.06a3.26 3.26 0 011.25-1.52 3.6 3.6 0 012-.54 3.44 3.44 0 012.68 1 4.07 4.07 0 01.95 2.88v6.75h-2.85v-6.12a2.31 2.31 0 00-.49-1.59 1.79 1.79 0 00-1.43-.55 2 2 0 00-1.53.63 2.43 2.43 0 00-.56 1.66v6zm16.36-2.23a2.05 2.05 0 001.7-.8 3.48 3.48 0 00.64-2.23 3.6 3.6 0 00-.64-2.25 2 2 0 00-1.7-.84 2 2 0 00-1.68.84 3.69 3.69 0 00-.61 2.25 3.6 3.6 0 00.61 2.23 2 2 0 001.73.82zm-.05 6.17a5.84 5.84 0 01-3.36-.9 3.19 3.19 0 01-1.48-2.3h2.79a1.54 1.54 0 00.74.88 2.8 2.8 0 001.39.34 2.41 2.41 0 001.69-.56 1.85 1.85 0 00.61-1.47V25H183a3 3 0 01-1.24 1.37 3.89 3.89 0 01-2 .51 3.8 3.8 0 01-3.09-1.41 5.88 5.88 0 01-1.15-3.84 6.06 6.06 0 011.15-3.92 3.82 3.82 0 013.14-1.44 3.59 3.59 0 012 .54 3.37 3.37 0 011.27 1.45v-1.81h2.82v10.32a3.58 3.58 0 01-1.44 3 6 6 0 01-3.77 1.09z",
    fill: white ? 'white' : '#0f2137',
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M19.8.53A15.73 15.73 0 004.65 26.89L22.17 9.37A5.29 5.29 0 0019.8.53z",
    fill: "url(#prefix__b)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M6.65 36.09A15.73 15.73 0 0021.81 9.73L4.29 27.25a5.28 5.28 0 002.36 8.84z",
    fill: "url(#prefix__c)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 11
    }
  }), __jsx("path", {
    d: "M21.81 9.73L4.29 27.25a5.28 5.28 0 002.36 8.84 15.72 15.72 0 005.75.44c-7.68-7.39 9.41-26.8 9.41-26.8z",
    style: {
      mixBlendMode: 'multiply'
    },
    fill: "url(#prefix__a)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }
  }), __jsx("g", {
    style: {
      mixBlendMode: 'multiply'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 11
    }
  }, __jsx("path", {
    d: "M6.33 36c-2.49-7.7 12.45-23.21 15.09-25.87L4.29 27.25A5.28 5.28 0 006.33 36z",
    fill: "url(#prefix__d)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100,
      columnNumber: 13
    }
  }), __jsx("path", {
    d: "M21.75 9.79l.06-.06z",
    fill: "url(#prefix__e)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 13
    }
  })), __jsx("path", {
    d: "M23.45 7.29L4.64 26.88 22.17 9.37a5.14 5.14 0 001.28-2.08z",
    style: {
      mixBlendMode: 'screen'
    },
    fill: "url(#prefix__f)",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./src/components/image.js":
/*!*********************************!*\
  !*** ./src/components/image.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Image; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\image.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function Image(_ref) {
  let {
    src
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["src"]);

  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], _extends({
    src: src
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 10
    }
  }));
}

/***/ }),

/***/ "./src/components/layout.js":
/*!**********************************!*\
  !*** ./src/components/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _header_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header */ "./src/components/header/header.js");
/* harmony import */ var _footer_footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer */ "./src/components/footer/footer.js");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Layout({
  children
}) {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_header_header__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("main", {
    sx: {
      variant: 'layout.main'
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, children), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(_footer_footer__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }));
}

/***/ }),

/***/ "./src/components/lgpd.js":
/*!********************************!*\
  !*** ./src/components/lgpd.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Lgpd; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\lgpd.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


function Lgpd() {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    let aceiteLgpd = sessionStorage.getItem('aceiteLgpd');
    aceiteLgpd == null ? setIsOpen(true) : setIsOpen(false);
  }, []);

  function closeLgpd() {
    sessionStorage.setItem('aceiteLgpd', true);
    setIsOpen(false);
  }

  return isOpen ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: styles.cookiePopup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("p", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, "Este site n\xE3o utiliza cookies e n\xE3o captura dados."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    sx: styles.cookiePopupActions,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("button", {
    type: "button",
    onClick: closeLgpd,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Ok, entendi!"))) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null);
}
const styles = {
  cookiePopup: {
    fontSize: '0.875rem',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    position: 'fixed',
    bottom: '1.25rem',
    padding: '0.625rem 0.9375rem',
    boxShadow: '0 0 0.625rem 0 rgba(0,0,0, .15)',
    lineHeight: '150%',
    transition: 'opacity .5s',
    opacity: '1',
    zIndex: '2',
    right: '4%',
    width: '92%',
    background: '#000',
    color: '#fff',
    a: {
      color: 'skyblue',
      '&:visited': {
        color: 'skyblue',
        textDecoration: 'none'
      }
    }
  },
  cookiePopupActions: {
    flex: '1',
    textAlign: 'right',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    button: {
      color: 'orange',
      border: 'none',
      background: 'none',
      fontFamily: 'inherit',
      fontStyle: 'inherit',
      fontSize: 'inherit',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: '0.75rem',
      padding: '0',
      cursor: 'pointer',
      '&:hover': {
        textDecoration: 'underline'
      }
    }
  }
};

/***/ }),

/***/ "./src/components/link.js":
/*!********************************!*\
  !*** ./src/components/link.js ***!
  \********************************/
/*! exports provided: NavLink, Link, LearnMore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return NavLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return Link; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LearnMore", function() { return LearnMore; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-scroll */ "react-scroll");
/* harmony import */ var react_scroll__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_scroll__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @emotion/core */ "@emotion/core");
/* harmony import */ var _emotion_core__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_emotion_core__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\link.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */





function NavLink(_ref) {
  let {
    path,
    label,
    children
  } = _ref,
      rest = _objectWithoutProperties(_ref, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_scroll__WEBPACK_IMPORTED_MODULE_3__["Link"], _extends({
    to: path,
    spy: true,
    offset: -70,
    smooth: true,
    duration: 500,
    className: "nav-item",
    activeClass: "active"
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }), label);
}
function Link(_ref2) {
  let {
    path,
    label,
    children
  } = _ref2,
      rest = _objectWithoutProperties(_ref2, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({}, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }), children ? children : label));
}
function LearnMore(_ref3) {
  let {
    path,
    label,
    children
  } = _ref3,
      rest = _objectWithoutProperties(_ref3, ["path", "label", "children"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: path,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    sx: styles.learnMore
  }, rest, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }), label !== null && label !== void 0 ? label : 'Learn More', " ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_4__["IoIosArrowForward"], {
    size: "16px",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 33
    }
  })));
}
const fadeRight = _emotion_core__WEBPACK_IMPORTED_MODULE_5__["keyframes"]`
  from {
    opacity: 0;
    transform: translateX(-5px);
  }
  to: {
    opacity: 1;
  }
`;
const styles = {
  learnMore: {
    color: 'link',
    cursor: 'pointer',
    fontWeight: 500,
    display: 'inline-flex',
    alignItems: 'center',
    svg: {
      transform: 'translateX(3px)'
    },
    ':hover': {
      svg: {
        animation: `${fadeRight} 0.5s linear`
      }
    }
  }
};

/***/ }),

/***/ "./src/components/logo.js":
/*!********************************!*\
  !*** ./src/components/logo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Logo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var components_icons_logo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/icons/logo */ "./src/components/icons/logo.js");
/* harmony import */ var assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/logo.png */ "./src/assets/images/logo.png");
/* harmony import */ var assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_logo_branco_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/logo_branco.png */ "./src/assets/images/logo_branco.png");
/* harmony import */ var assets_images_logo_branco_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_logo_branco_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\logo.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */






function Logo(_ref) {
  let {
    isSticky,
    footer
  } = _ref,
      props = _objectWithoutProperties(_ref, ["isSticky", "footer"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], _extends({
    path: "/",
    sx: styles.logo
  }, props, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }), isSticky ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_images_logo_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    loading: "lazy",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 11
    }
  }) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_images_logo_branco_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    loading: "lazy",
    alt: "logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }));
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    svg: {
      height: 'auto',
      width: [128, null, '100%']
    }
  }
};

/***/ }),

/***/ "./src/components/section-heading.js":
/*!*******************************************!*\
  !*** ./src/components/section-heading.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\section-heading.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/** @jsx jsx */


const SectionHeading = _ref => {
  let {
    title,
    slogan,
    description,
    emoji
  } = _ref,
      props = _objectWithoutProperties(_ref, ["title", "slogan", "description", "emoji"]);

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], _extends({
    sx: styles.heading
  }, props, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }), slogan && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.slogan,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 9
    }
  }, slogan), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    as: "h3",
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, emoji ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 18
    }
  }, title) : title, emoji && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: emoji,
    alt: "emoji",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 19
    }
  })), description && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, description));
};

/* harmony default export */ __webpack_exports__["default"] = (SectionHeading);
const styles = {
  heading: {
    textAlign: 'center',
    maxWidth: 660,
    margin: '0 auto 50px'
  },
  slogan: {
    color: 'primary',
    fontWeight: 500,
    fontSize: 2,
    lineHeight: 2.5
  },
  title: {
    color: 'heading',
    fontWeight: 600,
    fontSize: [4, null, null, 6],
    lineHeight: [1.33, 1.33, 1.5],
    letterSpacing: [null, null, null, 'heading'],
    img: {
      ml: ['15px'],
      position: 'relative',
      top: '8px',
      maxWidth: [25, null, null, '100%']
    }
  },
  description: {
    color: 'heading',
    fontSize: ['14px', null, '16px'],
    lineHeight: [1.86, null, 2.2],
    mt: [5],
    maxWidth: 610,
    m: ['10px auto 0']
  }
};

/***/ }),

/***/ "./src/components/seo.js":
/*!*******************************!*\
  !*** ./src/components/seo.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SEO; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\seo.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


function SEO({
  description = 'startup landing descriptions',
  author = 'RedQ, Inc',
  meta,
  title = 'startup landing title'
}) {
  const metaData = [{
    name: `description`,
    content: description
  }, {
    property: `og:title`,
    content: title
  }, {
    property: `og:description`,
    content: description
  }, {
    property: `og:type`,
    content: `website`
  }, {
    name: `twitter:card`,
    content: `summary`
  }, {
    name: `twitter:creator`,
    content: author
  }, {
    name: `twitter:title`,
    content: title
  }, {
    name: `twitter:description`,
    content: description
  }].concat(meta);
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 5
    }
  }, __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, title), metaData.map(({
    name,
    content
  }, i) => __jsx("meta", {
    key: i,
    name: name,
    content: content,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  })));
}
SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
};

/***/ }),

/***/ "./src/components/slick-arrow.js":
/*!***************************************!*\
  !*** ./src/components/slick-arrow.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/bs */ "react-icons/bs");
/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\slick-arrow.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const SlickArrow = ({
  className,
  onClick,
  control
}) => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    variant: "text",
    onClick: onClick,
    className: className,
    sx: styles.paginationButton,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 5
    }
  }, control === 'prev' ? Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    variant: "styles.srOnly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Prev"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsArrowLeft"], {
    size: "32px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  })) : Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    variant: "styles.srOnly",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "Next"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_bs__WEBPACK_IMPORTED_MODULE_2__["BsArrowRight"], {
    size: "32px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (SlickArrow);
const styles = {
  paginationButton: {
    minHeight: '30px',
    padding: 0,
    position: 'absolute',
    bottom: 0,
    ':focus': {
      outline: '0 none'
    },
    svg: {
      transition: 'all 0.2s ease-in-out 0s'
    },
    '&.slick-disabled': {
      color: '#BBC7D7',
      svg: {
        transform: 'scale(0.8)'
      }
    },
    '&.slick-prev': {
      left: 'calc(50% - 16px)',
      transform: 'translateX(-50%)'
    },
    '&.slick-next': {
      transform: 'translateX(50%)',
      right: 'calc(50% - 16px)'
    }
  }
};

/***/ }),

/***/ "./src/components/topbar.js":
/*!**********************************!*\
  !*** ./src/components/topbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\topbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


const data = [{
  label: 'ti@servcon1.com',
  info: 'mailto:ti@servcon1.com'
}, {
  label: '(88) 3669-1146',
  info: 'tel: 8836691146'
}, {
  label: '(88) 9912-6620',
  info: 'https://wa.me/558899126620'
}];

const TopBar = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.topbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    className: "caption",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "No mercado h\xE1 mais de ", new Date().getFullYear() - 2000, " anos, estamos sempre buscando os requisitos para atender as expectativas dos nossos clientes."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    className: "tlds",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, data.map(({
    label,
    info
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: info,
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 15
    }
  }, label))))));
};

/* harmony default export */ __webpack_exports__["default"] = (TopBar);
const styles = {
  topbar: {
    backgroundColor: 'primary',
    px: [6, null, null, null, 0],
    py: ['12px']
  },
  content: {
    display: ['flex'],
    alignItems: ['center'],
    justifyContent: ['space-between'],
    color: 'white',
    fontSize: [1],
    fontWeight: 500,
    maxWidth: 1366,
    pl: '30px',
    pr: '30px',
    m: '0 auto',
    textAlign: 'center',
    span: {
      '+ span': {
        ml: [4]
      }
    },
    '.caption': {
      display: 'inline-flex',
      alignItems: 'center',
      width: [199, null, null, 'auto'],
      overflow: ['hidden', null, null, 'unset'],
      whiteSpace: ['nowrap', null, null, 'unset'],
      svg: {
        mr: [2, null, null, 3],
        minWidth: 20
      }
    },
    '.tlds': {
      display: ['none', null, null, null, 'flex'],
      alignItems: 'center'
    },
    strong: {
      fontWeight: 700,
      textTransform: 'uppercase',
      '+ strong': {
        ml: 3
      }
    },
    a: {
      color: 'white',
      cursor: 'pointer',
      fontSize: ['13px', null, null, 1, 1],
      fontWeight: 400,
      alignItems: 'center',
      display: 'inline-flex',
      textDecoration: 'none',
      ml: [2, null, null, null, 10, 13],
      svg: {
        ml: 1
      },
      '&:not(:first-child)': {
        ml: 4,
        pl: 4,
        borderLeft: '2px solid #ffffff21'
      }
    }
  }
};

/***/ }),

/***/ "./src/hooks/useInformacoes.jsx":
/*!**************************************!*\
  !*** ./src/hooks/useInformacoes.jsx ***!
  \**************************************/
/*! exports provided: InformacoesContext, InformacoesProvider, useInformacoes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesContext", function() { return InformacoesContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InformacoesProvider", function() { return InformacoesProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useInformacoes", function() { return useInformacoes; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var pages_api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! pages/api/api */ "./src/pages/api/api.js");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\hooks\\useInformacoes.jsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const InformacoesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();

function organizarObrigacoesPorEstado(obrigacoesGeral) {
  const espiritoSanto = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 168);
  const matoGrossoDoSul = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 5443);
  const minasGerais = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 169);
  const rioGrandeDoSul = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 155);
  const parana = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 158);
  const rioDeJaneiro = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 153);
  const santaCatarina = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 154);
  const saoPaulo = obrigacoesGeral.filter(obr => obr.mn_esubpasta === 152);
  return {
    espiritoSanto: [...espiritoSanto],
    matoGrossoDoSul: [...matoGrossoDoSul],
    minasGerais: [...minasGerais],
    rioGrandeDoSul: [...rioGrandeDoSul],
    parana: [...parana],
    rioDeJaneiro: [...rioDeJaneiro],
    santaCatarina: [...santaCatarina],
    saoPaulo: [...saoPaulo]
  };
}

function InformacoesProvider({
  children
}) {
  const {
    0: noticias,
    1: setNoticias
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: obrigacoes,
    1: setObrigacoes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: agenda,
    1: setAgenda
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: cotacoes,
    1: setCotacoes
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const url1 = pages_api_api__WEBPACK_IMPORTED_MODULE_2__["api"].get('noticias');
    const url2 = pages_api_api__WEBPACK_IMPORTED_MODULE_2__["api"].get('cotacoes');
    const url3 = pages_api_api__WEBPACK_IMPORTED_MODULE_2__["api"].get('obrigacoes');
    const url4 = pages_api_api__WEBPACK_IMPORTED_MODULE_2__["api"].get('agenda');
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.all([url1, url2, url3, url4]).then(axios__WEBPACK_IMPORTED_MODULE_1___default.a.spread((...responses) => {
      setNoticias(responses[0].data);
      setCotacoes(responses[1].data);
      setObrigacoes(organizarObrigacoesPorEstado(responses[2].data));
      setAgenda(responses[3].data);
    }));
  }, []);
  return __jsx(InformacoesContext.Provider, {
    value: {
      noticias,
      obrigacoes,
      agenda,
      cotacoes
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 5
    }
  }, children);
}
function useInformacoes() {
  const context = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(InformacoesContext);
  return context;
}

/***/ }),

/***/ "./src/pages/api/api.js":
/*!******************************!*\
  !*** ./src/pages/api/api.js ***!
  \******************************/
/*! exports provided: api */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "api", function() { return api; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: 'https://modelo-tbrweb-3.vercel.app/api'
});

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme */ "./src/theme/index.js");
/* harmony import */ var components_seo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/seo */ "./src/components/seo.js");
/* harmony import */ var components_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/layout */ "./src/components/layout.js");
/* harmony import */ var sections_banner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sections/banner */ "./src/sections/banner.js");
/* harmony import */ var sections_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sections/services */ "./src/sections/services.js");
/* harmony import */ var sections_premium_feature__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sections/premium-feature */ "./src/sections/premium-feature.js");
/* harmony import */ var sections_ultimate_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sections/ultimate-feature */ "./src/sections/ultimate-feature.js");
/* harmony import */ var sections_customer_support__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! sections/customer-support */ "./src/sections/customer-support.js");
/* harmony import */ var sections_pricing__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sections/pricing */ "./src/sections/pricing.js");
/* harmony import */ var sections_testimonials__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sections/testimonials */ "./src/sections/testimonials.js");
/* harmony import */ var sections_blog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sections/blog */ "./src/sections/blog.js");
/* harmony import */ var sections_faq__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! sections/faq */ "./src/sections/faq.js");
/* harmony import */ var sections_support__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! sections/support */ "./src/sections/support.js");
/* harmony import */ var components_lgpd__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! components/lgpd */ "./src/components/lgpd.js");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
















function IndexPage() {
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_1__["ThemeProvider"], {
    theme: theme__WEBPACK_IMPORTED_MODULE_2__["default"],
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(components_layout__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx(components_seo__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "SERVCON Servi\xE7os de Contabilidade",
    description: "Prestar servi\xE7os cont\xE1beis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }), __jsx(sections_banner__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }), __jsx(sections_premium_feature__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(sections_ultimate_feature__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx(sections_pricing__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx(sections_services__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx(sections_blog__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx(components_lgpd__WEBPACK_IMPORTED_MODULE_15__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  })));
}

/***/ }),

/***/ "./src/sections/banner.js":
/*!********************************!*\
  !*** ./src/sections/banner.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_banner1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/banner1.png */ "./src/assets/images/banner1.png");
/* harmony import */ var assets_images_banner1_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_banner1_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-animated-css */ "react-animated-css");
/* harmony import */ var react_animated_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_animated_css__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\banner.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







const Banner = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "home",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_animated_css__WEBPACK_IMPORTED_MODULE_6__["Animated"], {
    animationIn: "bounceInLeft",
    animationOut: "fadeOut",
    isVisible: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.domainCard,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 15
    }
  }, "Um novo perfil de ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    color: "secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 42
    }
  }, "empresa cont\xE1bil")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    mb: 6,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 15
    }
  }, "Queremos entender o que voc\xEA precisa, ", Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("br", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 55
    }
  }), "Entre em contato"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: styles.inputGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://wa.me/5519999706375",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 19
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineWhatsApp"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 21
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "tel:1921051000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlinePhone"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://www.instagram.com/servconjijoca/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineInstagram"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "https://www.facebook.com/servconjijoca",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 19
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineFacebook"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "mailto:comercial@tbrweb.com.br",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 19
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__["AiOutlineMail"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 21
    }
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Banner);
const styles = {
  section: {
    backgroundColor: 'primary',
    backgroundImage: `url(${assets_images_banner1_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
    pt: [17, null, null, 20, null],
    pb: [6, null, null, 12, 16]
  },
  grid: {
    gap: ['30px 60px', null, null, null, '30px 40px', '30px 60px'],
    display: 'grid',
    minHeight: [null, null, null, null, null, '66vh', '81vh'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, null, 'repeat(2, 1fr)', '510px 1fr']
  },
  domainCard: {
    backgroundColor: '#ffffffbc',
    boxShadow: '0px 24px 50px rgba(54, 91, 125, 0.05)',
    borderRadius: `15px 30px`,
    p: ['30px 25px 50px', null, null, '40px 40px 60px'],
    m: [null, null, null, '0 auto', 'unset'],
    maxWidth: [null, null, null, 480, 'none'],
    h2: {
      fontWeight: 700,
      fontSize: [8, null, null, 10, 9, 14],
      lineHeight: 1.36,
      letterSpacing: 'heading',
      color: 'textSecondary',
      mb: [5, null, null, 7, 8]
    }
  },
  inputGroup: {
    a: {
      cursor: 'pointer',
      color: 'primary',
      ':hover': {
        color: 'secondary'
      }
    },
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 5,
    px: [3, null, null, 6],
    input: {
      border: 0,
      borderRadius: 0,
      fontSize: [1, null, null, 2],
      minHeight: [45, null, null, 60],
      p: 0,
      ':focus': {
        boxShadow: 'none'
      },
      '::placeholder': {
        fontSize: '15px',
        lineHeight: 1.33,
        color: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#02073E', 0.4)
      },
      ':-webkit-autofill': {
        WebkitBoxShadow: '0 0 0 30px white inset !important'
      }
    },
    select: {
      border: 0,
      color: 'textSecondary',
      fontWeight: 500,
      fontSize: [0, null, null, '15px'],
      lineHeight: 1.33,
      letterSpacing: 'heading',
      minHeight: [45, null, null, 60],
      minWidth: [60, null, null, 75],
      p: 0,
      textTransform: 'uppercase',
      ':focus': {
        outline: 0
      },
      '+ svg': {
        color: '#A6A8BB',
        height: 40,
        width: 40
      }
    }
  },
  submit: {
    fontSize: [1, null, null, 2],
    mt: [4],
    minHeight: [45, null, null, 60],
    width: '100%'
  },
  note: {
    fontStyle: 'italic',
    fontSize: [0, null, null, '15px'],
    lineHeight: 1.33,
    textAlign: 'center',
    color: Object(polished__WEBPACK_IMPORTED_MODULE_2__["rgba"])('#02073E', 0.5),
    mt: [4]
  }
};

/***/ }),

/***/ "./src/sections/blog.js":
/*!******************************!*\
  !*** ./src/sections/blog.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_blog_post__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/blog-post */ "./src/components/cards/blog-post.js");
/* harmony import */ var components_slick_arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/slick-arrow */ "./src/components/slick-arrow.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var hooks_useInformacoes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! hooks/useInformacoes */ "./src/hooks/useInformacoes.jsx");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\blog.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @jsx jsx */







const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_slick_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    control: "next",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 14
    }
  }),
  prevArrow: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_slick_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    control: "prev",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 14
    }
  }),
  responsive: [{
    breakpoint: 100000,
    settings: 'unslick'
  }, {
    breakpoint: 768,
    settings: {
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: 'unslick'
  }]
};

const Blog = () => {
  const {
    noticias
  } = Object(hooks_useInformacoes__WEBPACK_IMPORTED_MODULE_7__["useInformacoes"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "blog",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.heading,
    slogan: "",
    title: "\xDAltimas Not\xEDcias",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_6___default.a, {
    animateIn: "slideInRight",
    animateOut: "fadeOut",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    sx: styles.grid
  }, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 11
    }
  }), noticias === null || noticias === void 0 ? void 0 : noticias.slice(0, 3).map(post => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_blog_post__WEBPACK_IMPORTED_MODULE_4__["default"], {
    key: post.mn_codigo,
    post: post,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 15
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      justifyContent: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    sx: styles.button,
    as: "a",
    href: "/noticias",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 15
    }
  }, "Mais Not\xEDcias")))));
};

/* harmony default export */ __webpack_exports__["default"] = (Blog);
const styles = {
  section: {
    pt: [12, null, null, 12, 15],
    pb: [6, null, null, 16, 10, 14]
  },
  heading: {
    mb: [8, null, null, null, 10]
  },
  grid: {
    display: 'grid',
    gap: [6, null, null, null, 6, 10],
    alignItems: 'flex-start',
    mx: [null, null, null, -3, 'unset'],
    gridTemplateColumns: ['repeat(1, 1fr)', null, null, null, 'repeat(3, 1fr)'],
    '.slick-arrow': {
      bottom: [null, null, null, -14, 'unset']
    }
  },
  button: {
    mt: [8],
    textAlign: 'center'
  }
};

/***/ }),

/***/ "./src/sections/call-to-action.js":
/*!****************************************!*\
  !*** ./src/sections/call-to-action.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_shape_1_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/shape-1.svg */ "./src/assets/images/shape-1.svg");
/* harmony import */ var assets_images_shape_1_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_shape_1_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var assets_images_icons_shape_top_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! assets/images/icons/shape-top.png */ "./src/assets/images/icons/shape-top.png");
/* harmony import */ var assets_images_icons_shape_top_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_shape_top_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_icons_shape_bottom_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/icons/shape-bottom.png */ "./src/assets/images/icons/shape-bottom.png");
/* harmony import */ var assets_images_icons_shape_bottom_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_shape_bottom_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/ai */ "react-icons/ai");
/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\call-to-action.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */








const CallToAction = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "contato",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.contentBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.heading,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 11
    }
  }, "Queremos entender o que voc\xEA precisa"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.btnWrapper,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "https://wa.me/5519999706375",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineWhatsApp"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 17
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "tel:1921051000",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlinePhone"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 17
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "https://www.instagram.com/tbrweb/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineInstagram"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "mailto:comercial@tbrweb.com.br",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineMail"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  })))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CallToAction);
const styles = {
  section: {
    position: 'relative',
    zIndex: 1,
    ':before': {
      backgroundColor: '#F9FAFC',
      bottom: 0,
      content: `''`,
      height: '50%',
      position: 'absolute',
      left: 0,
      right: 0,
      zIndex: '-1'
    }
  },
  container: {
    px: [0, '0 !important', '30px !important']
  },
  contentBox: {
    padding: ['35px 60px 60px', null, null, '40px 30px 45px', '55px 30px 60px', '55px 50px 60px'],
    backgroundColor: '#183656',
    backgroundImage: ['none', null, null, `url(${assets_images_shape_1_svg__WEBPACK_IMPORTED_MODULE_2___default.a})`],
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '60% center',
    backgroundSize: ['120px', null, null, null, 'auto'],
    borderRadius: '7px',
    display: 'flex',
    alignItems: 'center',
    textAlign: ['center', null, null, 'left'],
    flexDirection: ['column', null, null, 'row'],
    justifyContent: ['center', null, null, 'space-between']
  },
  heading: {
    fontSize: [3, 7, 8, 7, 11],
    fontFamily: 'Bree Serif, serif',
    color: 'white',
    letterSpacing: 'heading',
    lineHeight: [1.4, 1.53],
    maxWidth: ['100%', '80%', null, 340, '50%', '45%'],
    mb: [11, null, null, 0]
  },
  btnWrapper: {
    display: 'flex',
    position: 'relative',
    ':before, :after': {
      content: `''`,
      position: 'absolute',
      width: '73px',
      height: '26px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      left: '50%',
      transform: 'translateX(-50%)',
      backgroundSize: ['55%', null, null, '100%']
    },
    ':before': {
      backgroundImage: `url(${assets_images_icons_shape_top_png__WEBPACK_IMPORTED_MODULE_3___default.a})`,
      top: '-28px'
    },
    ':after': {
      backgroundImage: `url(${assets_images_icons_shape_bottom_png__WEBPACK_IMPORTED_MODULE_4___default.a})`,
      bottom: '-28px'
    },
    button: {
      backgroundColor: 'white',
      padding: 0,
      fontSize: [0, null, null, null, 2],
      minHeight: [40, null, null, 45, 60],
      padding: ['0 28px', null, null, null, '0 40px'],
      textTransform: 'uppercase'
    },
    a: {
      color: '#a2aebb',
      '&:hover': {
        color: 'white'
      },
      mt: 1
    }
  }
};

/***/ }),

/***/ "./src/sections/customer-support.js":
/*!******************************************!*\
  !*** ./src/sections/customer-support.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/io */ "react-icons/io");
/* harmony import */ var react_icons_io__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_io__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_images_support_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/support.png */ "./src/assets/images/support.png");
/* harmony import */ var assets_images_support_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_support_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\customer-support.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const list = ['Medical and vision', 'Life insurance', 'HSAs and FSAs', 'Commuter benefits'];

const CustomerSupport = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.illustration,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_images_support_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    loading: "lazy",
    alt: "support",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "Customer support is our main priority with their hundred percent satisfaction."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.summary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.list,
    as: "ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }
  }, list.map((item, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "li",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_io__WEBPACK_IMPORTED_MODULE_2__["IoIosCheckmarkCircle"], {
    sx: {
      color: 'secondary',
      mr: 2
    },
    size: "20px",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 19
    }
  }), item)))))));
};

/* harmony default export */ __webpack_exports__["default"] = (CustomerSupport);
const styles = {
  section: {
    pt: [8, null, null, 6, null, 14, 16],
    pb: [null, null, null, 8, 0]
  },
  grid: {
    gap: [null, null, null, null, '0 10px'],
    display: ['flex', null, null, 'grid'],
    flexDirection: ['column-reverse', null, null, 'unset'],
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, '1fr', '470px 1fr', '600px 1fr', '760px 1fr']
  },
  illustration: {
    textAlign: 'center',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    mt: [2, null, null, 0, 4, 0],
    img: {
      maxWidth: ['100%', null, null, null, null, '100%']
    }
  },
  content: {
    marginTop: [null, null, null, null, null, -16],
    maxWidth: [null, null, null, 560, 'none'],
    m: [null, null, null, '0 auto', 'unset']
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [5, null, null, 10, null, null, 11],
    lineHeight: 1.53,
    letterSpacing: ['-0.5px', null, null, '-1px'],
    textAlign: ['center', null, null, null, 'left'],
    span: {
      backgroundSize: 'cover',
      px: 2
    }
  },
  summary: {
    color: 'textSecondary',
    fontSize: [1, null, null, 2, '15px', 2],
    lineHeight: [1.86, null, null, null, 1.86, 2.25],
    maxWidth: 470,
    m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
    textAlign: ['center', null, null, null, 'left']
  },
  list: {
    gap: '0 18px',
    gridTemplateColumns: ['repeat(2, 142px)', null, null, 'repeat(2, 200px)'],
    justifyContent: [null, null, null, 'center', 'unset'],
    listStyle: 'none',
    mt: [4, null, null, 5, 4, 5],
    p: 0,
    li: {
      fontSize: [0, 1, null, 2, '15px', 2],
      fontWeight: 500,
      alignItems: 'center',
      color: 'textSecondary',
      display: 'flex',
      lineHeight: [2.81, null, null, null, 2.2, 2.81]
    }
  }
};

/***/ }),

/***/ "./src/sections/faq.js":
/*!*****************************!*\
  !*** ./src/sections/faq.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-masonry-component */ "react-masonry-component");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_faq_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/faq-item */ "./src/components/cards/faq-item.js");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\faq.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const data = [{
  id: 1,
  ques: 'Which domain should I purchase?',
  ans: `We make it easy to move to CometNine. Simply contact us and we'll move your hosting account from any other provider, regardless of the control panel. If at anytime your website is down for more than 0.1% result`
}, {
  id: 2,
  ques: 'What are some tips when choosing a name?',
  ans: `Get your website tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news. Get your blood tests delivered at the home collect a sample from management news.`
}, {
  id: 3,
  ques: 'What if I need help choosing the right domain?',
  ans: `Create a hub for cross-functional work that also works with all your other tools. Centralize and standardize communication with Miro. All premium functional are included here with updates.`
}, {
  id: 4,
  ques: 'Can I upgrade or downgrade my web hosting plan',
  ans: `The pricing made me a little hesitant at first but I have been pleasantly surprised by the level of care given by CometNine.`
}, {
  id: 5,
  ques: 'How do I upgrade the storage capacity of my hosting plan?',
  ans: `Stop your viewers from getting distracted. Publish videos to your own Channel and rest easy knowing viewers won’t be annoyed by ads or pulled down a rabbit hole of unrelated videos.`
}, {
  id: 6,
  ques: 'What is in InMotion Hosting’s uptime rate?',
  ans: `Designed with beginners in mind and packed with advanced features developers will love. Start with a quick and simple install`
}, {
  id: 7,
  ques: 'Learn from community on Brandwagon',
  ans: `Brian Halligan knows that you need more than a great product to have a great brand. Hear his thoughts & score a peek at our wagon.`
}];
const masonryOptions = {
  originTop: true
};

const Faq = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "faq",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.heading,
    slogan: "Get yours question answer",
    title: "Frequantly asked question",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_masonry_component__WEBPACK_IMPORTED_MODULE_2___default.a, {
    options: masonryOptions,
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 9
    }
  }, data.map(item => {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_faq_item__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: item.id,
      faq: item,
      className: "faq-item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 20
      }
    });
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Faq);
const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [null, null, null, null, null, null, 10, 6]
  },
  grid: {
    mx: [null, null, null, -6, -8, 'unset']
  }
};

/***/ }),

/***/ "./src/sections/premium-feature.js":
/*!*****************************************!*\
  !*** ./src/sections/premium-feature.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/accordion/accordion */ "./src/components/accordion/accordion.js");
/* harmony import */ var assets_images_quem_somos_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/quem-somos.png */ "./src/assets/images/quem-somos.png");
/* harmony import */ var assets_images_quem_somos_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_quem_somos_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\premium-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/** @jsx jsx */





const data = [{
  title: 'Missão',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac")
}, {
  title: 'Visão',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac")
}, {
  title: `Valores`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac")
}];

const PremiumFeature = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    id: "quem-somos",
    as: "section",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    sx: _objectSpread(_objectSpread({}, styles.illustration), {}, {
      background: `url(${assets_images_quem_somos_png__WEBPACK_IMPORTED_MODULE_4___default.a}) no-repeat`
    }),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_5___default.a, {
    animateIn: "bounceInRight",
    animateOut: "fadeOut",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.accordionGroup,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: styles.heading,
    slogan: "Modelo Contabilidade",
    title: "Conhe\xE7a um pouquinho sobre nossa hist\xF3ria",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac, mattis et nulla. Donec porttitor pretium nisl, eu scelerisque elit finibus a.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 13
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_accordion_accordion__WEBPACK_IMPORTED_MODULE_3__["default"], {
    items: data,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (PremiumFeature);
const styles = {
  section: {
    pt: [12, null, null, null, null, 12, 12],
    pb: [12, null, null, null, null, 14, 18],
    // marginBottom: [null, null, null, null, null, null, '-85px'],
    position: 'relative',
    zIndex: 0
  },
  container: {
    display: ['flex'],
    alignItems: ['flex-start'],
    justifyContent: 'flex-end'
  },
  illustration: {
    backgroundSize: [null, null, null, null, null, '62%', '50%', '66%', '62%'],
    '@media only screen and (min-width: 1601px)': {
      backgroundSize: '60%',
      backgroundPosition: 'bottom left'
    },
    backgroundPosition: [null, null, null, null, null, '-80px 0', null, null, '0 0', '-140px 0px'],
    bottom: 0,
    display: ['none', null, null, null, null, 'block'],
    height: '100%',
    left: 0,
    position: 'absolute',
    width: '100%'
  },
  accordionGroup: {
    maxWidth: [null, null, null, 520, 610, 410, null, 450, 410],
    m: [null, null, null, '0 auto', null, '0', null] // marginLeft: [null, null, null, 'auto', null, 10, 12, 16],
    // marginRight: [null, null, null, 'auto', null, 'unset'],
    // px: [6, null, null, null, 0],

  },
  heading: {
    textAlign: ['center', null, null, null, null, 'left'],
    maxWidth: [null, null, null, 440, 450, 'none'],
    mb: [null, null, null, null, 6, 4, 6],
    h3: {
      fontSize: [4, null, null, 8, 10, 8, 12],
      fontWeight: 500,
      lineHeight: 1.5,
      letterSpacing: 'heading',
      maxWidth: [250, null, null, 'none'],
      margin: ['0 auto', null, null, 'unset']
    }
  }
};

/***/ }),

/***/ "./src/sections/pricing.js":
/*!*********************************!*\
  !*** ./src/sections/pricing.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_price_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/cards/price-table */ "./src/components/cards/price-table.js");
/* harmony import */ var components_slick_arrow__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/slick-arrow */ "./src/components/slick-arrow.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_images_agenda3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/agenda3.png */ "./src/assets/images/agenda3.png");
/* harmony import */ var assets_images_agenda3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_agenda3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var hooks_useInformacoes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! hooks/useInformacoes */ "./src/hooks/useInformacoes.jsx");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\pricing.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @jsx jsx */









const data = [{
  id: 1,
  title: 'Agenda Tributária',
  subtitle: '02/07/2021',
  // price: 25.99,
  isRecommended: false,
  // buttonText: 'Start Free Trial',
  features: [{
    id: 1,
    isAvailable: true,
    title: 'ICMS/SCANC | Contribuinte que tiver recebido o combustível de outro contribuinte substituído.'
  }, {
    id: 2,
    isAvailable: true,
    title: `ICMS/SCANC | Importador.`
  }]
}, {
  id: 2,
  title: 'Obrigações Fiscais',
  subtitle: 'Fique sempre informado!',
  price: 29.99,
  isRecommended: true,
  buttonText: 'Start Free Trial',
  features: [{
    id: 1,
    isAvailable: true,
    title: 'Obrigações Fiscais – Estado de Minas Gerais - Julho/2021'
  }, {
    id: 2,
    isAvailable: true,
    title: `Obrigações Fiscais – Estado de Minas Gerais - Junho/2021`
  }, {
    id: 3,
    isAvailable: true,
    title: `Obrigações Fiscais – Estado de Minas Gerais - Maio/2021`
  }, {
    id: 4,
    isAvailable: true,
    title: `Obrigações Fiscais – Estado de Minas Gerais - Abril/2021`
  }, {
    id: 5,
    isAvailable: true,
    title: `Obrigações Fiscais – Estado de Minas Gerais - Março/2021`
  }, {
    id: 6,
    isAvailable: true,
    title: `Obrigações Fiscais – Estado de Minas Gerais - Fevereiro/2021`
  }]
}];
const settings = {
  slidesToShow: 3,
  slidesToScroll: 1,
  speed: 500,
  nextArrow: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_slick_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    control: "next",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 14
    }
  }),
  prevArrow: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_slick_arrow__WEBPACK_IMPORTED_MODULE_5__["default"], {
    control: "prev",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 14
    }
  }),
  responsive: [{
    breakpoint: 100000,
    settings: 'unslick'
  }, {
    breakpoint: 768,
    settings: {
      infinite: false,
      slidesToShow: 2,
      slidesToScroll: 1
    }
  }, {
    breakpoint: 767,
    settings: {
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1
    }
  }]
};

const Pricing = () => {
  const {
    obrigacoes,
    agenda
  } = Object(hooks_useInformacoes__WEBPACK_IMPORTED_MODULE_9__["useInformacoes"])();
  const data = new Date();
  const dia = String(data.getDate()).padStart(2, '0');
  const mes = String(data.getMonth() + 1).padStart(2, '0');
  const ano = data.getFullYear();
  const dataAtual = `${dia}/${mes}/${ano}`;
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "informacoes",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    sx: styles.container,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_8___default.a, {
    animateIn: "slideInLeft",
    animateOut: "fadeOut",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.heading,
    slogan: "Atualize-se",
    title: "Composto por um conjunto de informa\xE7\xF5es que s\xE3o atualizadas diariamente pela nossa equipe.",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({
    sx: styles.grid
  }, settings, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_price_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: agenda,
    isRecommended: false,
    title: "Agenda Tribut\xE1ria",
    subtitle: dataAtual,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_price_table__WEBPACK_IMPORTED_MODULE_4__["default"], {
    items: obrigacoes.saoPaulo,
    isRecommended: true,
    title: "Obriga\xE7\xF5es Fiscais",
    subtitle: "Fique sempre informado",
    link: "obrigacoes",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 15
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_6__["default"], {
    sx: styles.image,
    src: assets_images_agenda3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    loading: "lazy",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 15
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Pricing);
const styles = {
  section: {
    pt: [6],
    pb: [12, null, null, 15, 17]
  },
  container: {
    pl: 0,
    pr: 0
  },
  heading: {
    mb: [7, null, null, null, 14, null, 18],
    px: [6, null, null, 0],
    h3: {
      fontSize: [3, null, null, 8]
    }
  },
  grid: {
    gap: [null, null, null, null, 6],
    display: [null, null, null, null, 'grid'],
    gridTemplateColumns: [null, null, null, null, 'repeat(3, 1fr)'],
    alignItems: [null, null, null, null, 'flex-end'],
    '.slick-slide > div': {
      p: ['35px', '40px', null, '35px 23px 23px', 0]
    },
    '.slick-arrow': {
      bottom: -5
    }
  },
  image: {
    alignSelf: 'center'
  }
};

/***/ }),

/***/ "./src/sections/services.js":
/*!**********************************!*\
  !*** ./src/sections/services.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/service */ "./src/components/cards/service.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var hooks_useInformacoes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hooks/useInformacoes */ "./src/hooks/useInformacoes.jsx");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\services.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






const Services = () => {
  const {
    cotacoes
  } = Object(hooks_useInformacoes__WEBPACK_IMPORTED_MODULE_5__["useInformacoes"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "services",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    slogan: "",
    title: "Indicadores Econ\xF4micos",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 11
    }
  }, cotacoes === null || cotacoes === void 0 ? void 0 : cotacoes.map(cotacao => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_service__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: cotacao.cotd_codigo,
    cotacao: cotacao,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);
const styles = {
  section: {
    pt: [8, null, null, null, 10, 12],
    pb: [12, null, null, null, null, 15]
  },
  grid: {
    gap: [3, null, null, 4],
    display: 'grid',
    justifyContent: 'center',
    gridTemplateColumns: ['repeat(2, 1fr)', null, null, 'repeat(3, 1fr)', null, 'repeat(4, 1fr)', 'repeat(4, 300px)']
  }
};

/***/ }),

/***/ "./src/sections/support.js":
/*!*********************************!*\
  !*** ./src/sections/support.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Support; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
/* harmony import */ var assets_images_support_team_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/support-team.png */ "./src/assets/images/support-team.png");
/* harmony import */ var assets_images_support_team_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_support_team_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\support.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */






function Support() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("section", {
    id: "support",
    sx: styles.section,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_3__["default"], {
    sx: styles.heading,
    title: "Meet our support team who always work hardly behind the scenes",
    description: "Focus only on the meaning, we take care of the design. As soon as the meeting end you can export in one click into your preferred.",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    sx: styles.thumbWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
    src: assets_images_support_team_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    loading: "lazy",
    alt: "Support Team",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }))));
}
const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [0]
  },
  heading: {
    mb: [8, null, null, 10, null, 15],
    maxWidth: [null, null, null, 500, 600, null],
    h3: {
      fontWeight: 500,
      fontSize: [3, null, null, 8, 11],
      lineHeight: 1.4,
      letterSpacing: 'heading',
      color: 'heading'
    },
    p: {
      mt: [3],
      maxWidth: [500]
    }
  },
  thumbWrapper: {
    display: 'flex',
    justifyContent: 'center',
    mb: '-1px',
    img: {
      height: [180, 'auto']
    }
  }
};

/***/ }),

/***/ "./src/sections/testimonials.js":
/*!**************************************!*\
  !*** ./src/sections/testimonials.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-slick */ "react-slick");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/dynamic */ "next/dynamic");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var assets_images_testimonial_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/images/testimonial.png */ "./src/assets/images/testimonial.png");
/* harmony import */ var assets_images_testimonial_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_images_testimonial_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\testimonials.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** @jsx jsx */



const Testimonial = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(() => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! components/cards/testimonial */ "./src/components/cards/testimonial.js")), {
  ssr: false,
  loadableGenerated: {
    webpack: () => [/*require.resolve*/(/*! components/cards/testimonial */ "./src/components/cards/testimonial.js")],
    modules: ['components/cards/testimonial']
  }
});


const data = [{
  id: 1,
  avatar: assets_images_testimonial_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  authorName: 'Melina Pettendorfer',
  designation: 'CEO of Uber',
  text: `Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services`
}, {
  id: 2,
  avatar: assets_images_testimonial_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  authorName: 'Melina Pettendorfer',
  designation: 'CEO of Google',
  text: `Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services`
}, {
  id: 3,
  avatar: assets_images_testimonial_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  authorName: 'Melina Pettendorfer',
  designation: 'CEO of Microsoft',
  text: `Best host I've had in 10 years. Smooth migration, no stress, and friendly support one click away. I'm very happy and recommend their services`
}];

const Testimonials = () => {
  const settings = {
    arrows: false,
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "testimonials",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_slick__WEBPACK_IMPORTED_MODULE_2___default.a, _extends({}, settings, {
    sx: styles.carousel,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 9
    }
  }), data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(Testimonial, {
    key: item.id,
    testimonial: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonials);
const styles = {
  section: {
    pt: [6, null, null, 0],
    backgroundColor: '#F0F3F8',
    position: 'relative',
    '@media only screen and (min-width:767px)': {
      ':before': {
        backgroundColor: 'white',
        content: `''`,
        minHeight: [null, null, null, 30, 70, 100],
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0
      }
    }
  },
  carousel: {
    '.slick-dots': {
      display: 'flex !important',
      margin: 0,
      padding: 0,
      bottom: [6, null, null, 8, 10],
      listStyle: 'none',
      position: 'absolute',
      left: ['calc(50% + 14px)', null, null, 'calc(50% + 62px)', 'calc(50% + 14px)', 'calc(50% + 60px)', 'calc(50% + 14px)'],
      transform: 'translateX(-50%)',
      button: {
        backgroundColor: Object(polished__WEBPACK_IMPORTED_MODULE_5__["rgba"])('#5B2B9D', 0.2),
        border: 0,
        outline: 0,
        borderRadius: 5,
        cursor: 'pointer',
        height: [3, null, null, 6],
        width: [10, null, null, 15],
        overflow: 'hidden',
        textIndent: '-9999em',
        transition: 'all 0.3s ease-in-out 0s'
      },
      '.slick-active button': {
        backgroundColor: 'primary',
        width: [20, null, null, 30]
      }
    },
    li: {
      display: 'flex',
      '+ li': {
        ml: '6px'
      }
    }
  }
};

/***/ }),

/***/ "./src/sections/ultimate-feature.js":
/*!******************************************!*\
  !*** ./src/sections/ultimate-feature.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_section_heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/section-heading */ "./src/components/section-heading.js");
/* harmony import */ var components_cards_feature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/cards/feature */ "./src/components/cards/feature.js");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-animate-on-scroll */ "react-animate-on-scroll");
/* harmony import */ var react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var assets_images_services_1_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/services/1.png */ "./src/assets/images/services/1.png");
/* harmony import */ var assets_images_services_1_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_services_1_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var assets_images_services_2_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/services/2.png */ "./src/assets/images/services/2.png");
/* harmony import */ var assets_images_services_2_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_services_2_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_services_3_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/services/3.png */ "./src/assets/images/services/3.png");
/* harmony import */ var assets_images_services_3_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_services_3_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_images_services_4_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/images/services/4.png */ "./src/assets/images/services/4.png");
/* harmony import */ var assets_images_services_4_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_images_services_4_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_images_services_5_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/images/services/5.png */ "./src/assets/images/services/5.png");
/* harmony import */ var assets_images_services_5_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_images_services_5_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_images_services_6_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/images/services/6.png */ "./src/assets/images/services/6.png");
/* harmony import */ var assets_images_services_6_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_images_services_6_png__WEBPACK_IMPORTED_MODULE_10__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\sections\\ultimate-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */










const data = [{
  id: 1,
  icon: assets_images_services_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Assessoria Trabalhista',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`
}, {
  id: 2,
  icon: assets_images_services_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Assessoria Contábil',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`
}, {
  id: 3,
  icon: assets_images_services_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Assessoria Fiscal',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`
}, {
  id: 4,
  icon: assets_images_services_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Departamento Pessoal',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`
}, {
  id: 5,
  icon: assets_images_services_5_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  title: 'Abertura de Empresa',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`
}, {
  id: 6,
  icon: assets_images_services_6_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  title: 'Planejamento Tributário',
  description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In et rhoncus enim. Fusce magna erat, facilisis nec vulputate ac.`
}];

const UltimateFeatures = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    id: "servicos",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_section_heading__WEBPACK_IMPORTED_MODULE_2__["default"], {
    sx: styles.heading,
    slogan: "Modelo Contabilidade",
    title: "\xC1reas de Atua\xE7\xE3o",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }
  }), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.features,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 9
    }
  }, data === null || data === void 0 ? void 0 : data.map(item => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_animate_on_scroll__WEBPACK_IMPORTED_MODULE_4___default.a, {
    animateIn: "bounceInDown",
    animateOut: "fadeOut",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_cards_feature__WEBPACK_IMPORTED_MODULE_3__["default"], {
    className: "feature-item",
    key: item.id,
    data: item,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 15
    }
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (UltimateFeatures);
const styles = {
  section: {
    backgroundColor: '#F9FAFC',
    pt: [8, null, null, null, 10, 14],
    pb: [8, null, null, null, 15, 16, 19],
    position: 'relative'
  },
  heading: {
    marginBottom: [50, 50, 80],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0']
    }
  },
  features: {
    gap: [35, null, null, 40, '50px 30px', 60],
    display: ['grid', 'grid'],
    maxWidth: 1030,
    margin: '0 auto',
    gridTemplateColumns: ['repeat(1, 1fr)', null, null, 'repeat(2, 1fr)', 'repeat(3, 1fr)'],
    '.feature-item': {
      display: ['block'],
      textAlign: 'center',
      maxWidth: [290, 260, null, 280, 'none'],
      m: ['0 auto', '0 auto', '0 auto', '0 auto', '0 auto', 0],
      figure: {
        m: ['0 0 20px']
      },
      h4: {
        mb: ['15px', '15px', '20px']
      },
      p: {
        fontSize: ['14px', '14px', '16px', '16px', '14px', '16px']
      }
    }
  }
};

/***/ }),

/***/ "./src/services/slugify.js":
/*!*********************************!*\
  !*** ./src/services/slugify.js ***!
  \*********************************/
/*! exports provided: slugify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "slugify", function() { return slugify; });
const slugify = (...args) => {
  const value = args.join(' ');
  return value.normalize('NFD') // split an accented letter in the base letter and the acent
  .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
  .toLowerCase().trim().replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
  .replace(/\s+/g, '-'); // separator
};

/***/ }),

/***/ "./src/theme/index.js":
/*!****************************!*\
  !*** ./src/theme/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // example colors with dark mode
  colors: {
    text: '#343D48',
    // body color and primary color
    textSecondary: '#02073E',
    // secondary body color
    heading: '#0F2137',
    // primary heading color
    headingSecondary: '#343D48',
    // heading color
    background: '#FFFFFF',
    // body background color
    backgroundSecondary: '#F9FAFC',
    // secondary background color
    borderColor: '#EDEFF6',
    // border color
    primary: '#3f8299',
    // primary button and link color
    secondary: '#0f4c68',
    // secondary color - can be used for hover states
    muted: '#7B8188',
    // muted color
    accent: '#0f4c68',
    // a contrast color for emphasizing UI
    dark: '#10132D',
    link: '#3183FF',
    // highlight	a background color for highlighting text
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#0cf',
        secondary: '#09c',
        muted: '#111'
      }
    }
  },
  fonts: {
    body: 'DM Sans, sans-serif',
    // body:
    //   'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'DM Sans, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, // 0
  14, // 1
  16, // 2
  18, // 3
  20, // 4
  22, // 5
  24, // 6
  26, // 7
  28, // 8
  30, // 9
  32, // 10
  36, // 11
  40, // 12
  42, // 13
  48, // 14
  52, // 15
  64 // 16
  ],
  fontWeights: {
    body: 'normal',
    // body: 400,
    heading: 500,
    // heading: 700,
    bold: 700
  },
  lineHeights: {
    body: 1.5,
    // body: 1.5,
    heading: 1.25 // heading: 1.125,

  },
  letterSpacings: {
    body: 'normal',
    caps: '0.2em',
    heading: '-0.5px'
  },
  space: [0, // 0
  5, // 1
  10, // 2
  15, // 3
  20, // 4
  25, // 5
  30, // 6
  35, // 7
  40, // 8
  45, // 9
  50, // 10
  55, // 11
  60, // 12
  65, // 13
  70, // 14
  80, // 15
  90, // 16
  100, // 17
  110, // 18
  120, // 19
  130, // 20
  140, // 21
  150, // 22
  160 // 23
  ],
  sizes: {},
  breakpoints: ['480px', '640px', '768px', '1024px', '1260px', '1367px', '1440px', '1600px'],
  // variants can use custom, user-defined names
  layout: {
    container: {
      maxWidth: ['100%', null, null, '720px', '970px', '1140px', '1260px', '1366px'],
      paddingLeft: [6],
      paddingRight: [6],
      m: '0 auto'
    },
    main: {}
  },
  text: {
    heading: {
      fontFamily: 'heading',
      lineHeight: 'heading',
      fontWeight: 'heading'
    }
  },
  links: {},
  images: {
    avatar: {
      width: 48,
      height: 48,
      borderRadius: 99999
    }
  },
  // variants for buttons
  buttons: {
    default: {
      backgroundColor: 'transparent',
      fontFamily: 'body',
      fontWeight: 'bold',
      borderRadius: '5px',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: '0.3s ease-in-out 0s',
      whiteSpace: 'nowrap'
    },
    primary: {
      variant: 'buttons.default',
      color: 'white',
      bg: 'primary',
      minHeight: '60px',
      padding: '0 30px',
      '&:hover': {
        bg: 'dark'
      }
    },
    primaryMd: {
      variant: 'buttons.primary',
      minHeight: '50px',
      px: '25px'
    },
    secondary: {
      variant: 'buttons.primary',
      color: 'white',
      bg: 'secondary'
    },
    muted: {
      variant: 'buttons.default',
      backgroundColor: '#EDF0F2',
      color: 'text',
      ':hover': {
        backgroundColor: 'primary',
        color: '#fff'
      }
    },
    white: {
      variant: 'buttons.default',
      backgroundColor: 'white',
      color: '#020718'
    },
    text: {
      variant: 'buttons.default',
      color: 'text'
    }
  },
  cards: {
    primary: {
      padding: 2,
      borderRadius: 4 // boxShadow: '0 0 4px 1px rgba(0, 0, 0, 0.5)',

    },
    offer: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      flex: ['1 1 calc(50% - 16px)', '1 1 20%'],
      minHeight: 130,
      m: 2,
      background: '#FFFFFF',
      border: '1px solid #EDEFF6',
      borderRadius: 5
    },
    featureCard: {
      display: 'flex',
      alignItems: ['center', 'flex-start'],
      flexDirection: ['column', 'row'],
      p: [0, 3]
    }
  },
  forms: {
    label: {
      fontSize: 1,
      fontWeight: 'bold'
    },
    input: {
      borderRadius: 8,
      borderColor: 'borderColor',
      fontFamily: 'body',
      px: 5,
      py: 0,
      minHeight: 60,
      '&:focus': {
        borderColor: 'primary',
        boxShadow: t => `0 0 0 2px ${t.colors.primary}`,
        outline: 'none'
      }
    }
  },
  badges: {
    primary: {
      color: 'background',
      bg: '#28A5FF',
      borderRadius: 30,
      p: '3px 11px',
      fontSize: 1,
      letterSpacing: '-0.5px'
    },
    outline: {
      color: 'primary',
      bg: 'transparent',
      boxShadow: 'inset 0 0 0 1px'
    }
  },
  styles: {
    // To add base, top-level styles to the <body> element, use theme.styles.root.
    root: {
      fontFamily: 'body',
      lineHeight: 'body',
      fontWeight: 'body'
    },
    // h1-h6 Heading styles
    h1: {// fontFamily: 'none',
      // variant: 'text.heading',
      // fontSize: 6,
    },
    h2: {// fontFamily: 'none',
      // variant: 'text.heading',
      // fontSize: 5,
    },
    h3: {
      variant: 'text.heading',
      fontSize: 4
    },
    h4: {
      variant: 'text.heading',
      fontSize: 3
    },
    h5: {
      variant: 'text.heading',
      fontSize: 2
    },
    h6: {
      variant: 'text.heading',
      fontSize: 1
    },
    // Divider styles
    hr: {
      border: 0,
      borderBottom: '1px solid',
      borderColor: '#D9E0E7'
    },
    // also you can use other HTML elements style here
    ul: {
      listStyle: 'none'
    },
    srOnly: {
      border: '0 !important',
      clip: 'rect(1px, 1px, 1px, 1px) !important',
      clipPath: 'inset(50%) !important',
      height: '1px !important',
      margin: '-1px !important',
      overflow: 'hidden !important',
      padding: '0 !important',
      position: 'absolute !important',
      width: '1px !important',
      whiteSpace: 'nowrap !important'
    }
  }
});

/***/ }),

/***/ "@emotion/core":
/*!********************************!*\
  !*** external "@emotion/core" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@emotion/core");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "framer-motion":
/*!********************************!*\
  !*** external "framer-motion" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("framer-motion");

/***/ }),

/***/ "next/dynamic":
/*!*******************************!*\
  !*** external "next/dynamic" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "polished":
/*!***************************!*\
  !*** external "polished" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("polished");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-animate-on-scroll":
/*!******************************************!*\
  !*** external "react-animate-on-scroll" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animate-on-scroll");

/***/ }),

/***/ "react-animated-css":
/*!*************************************!*\
  !*** external "react-animated-css" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-animated-css");

/***/ }),

/***/ "react-icons/ai":
/*!*********************************!*\
  !*** external "react-icons/ai" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/ai");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/io":
/*!*********************************!*\
  !*** external "react-icons/io" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/io");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-masonry-component":
/*!******************************************!*\
  !*** external "react-masonry-component" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),

/***/ "react-responsive":
/*!***********************************!*\
  !*** external "react-responsive" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-responsive");

/***/ }),

/***/ "react-scroll":
/*!*******************************!*\
  !*** external "react-scroll" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-scroll");

/***/ }),

/***/ "react-slick":
/*!******************************!*\
  !*** external "react-slick" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-slick");

/***/ }),

/***/ "react-stickynode":
/*!***********************************!*\
  !*** external "react-stickynode" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-stickynode");

/***/ }),

/***/ "theme-ui":
/*!***************************!*\
  !*** external "theme-ui" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("theme-ui");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2FnZW5kYTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NpZGFkZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZW1haWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2VuZGVyZWNvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaW5zdGFncmFtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9saW5rZWRpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2hhcGUtYm90dG9tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zaGFwZS10b3AucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3RlbGVmb25lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy93aGF0c2FwcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nb19icmFuY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3F1ZW0tc29tb3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzYucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3N1cHBvcnQtdGVhbS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VwcG9ydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2Jhc2UtYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvYmxvZy1wb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2ZhcS1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvcHJpY2UtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLnBhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9sb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb25zL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xncGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24taGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpY2stYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9wYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VJbmZvcm1hY29lcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2NhbGwtdG8tYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9jdXN0b21lci1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3ByZW1pdW0tZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2x1Z2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9saXNoZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJzc2c0MDQiLCJwYWdlIiwibW9kIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFjY29yZGlvbiIsIml0ZW1zIiwiY29tYmluZVJlZHVjZXJzIiwic2luZ2xlIiwicHJldmVudENsb3NlIiwib3BlbkluZGV4ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJtYXAiLCJpbmRleCIsInRpdGxlIiwic3R5bGVzIiwiYWNjb3JkaW9uIiwiaW5jbHVkZXMiLCJyZ2JhIiwiYXJyb3ciLCJjb250ZW50IiwiY29udGVudHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0Iiwid2lkdGgiLCJCYXNlQWNjb3JkaW9uIiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJ0eXBlIiwiZmlsdGVyIiwibG9nIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJjaGFuZ2VzIiwiY2FsbGJhY2siLCJhbGxDaGFuZ2VzIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImNoYW5nZXNPYmplY3QiLCJzdGF0ZVJlZHVjZXIiLCJvblN0YXRlQ2hhbmdlIiwicmVuZGVyIiwiQWNjb3JkaW9uQnV0dG9uIiwicmVzdCIsImJ1dHRvblRvZ2dsZSIsImFjY29yZGlvbkl0ZW0iLCJvdmVyZmxvdyIsIm10IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsInBvc2l0aW9uIiwiYWNjb3JkaW9uQ29udGVudCIsInZhcmlhbnRzIiwib3BlbiIsImhlaWdodCIsIm1hcmdpblRvcCIsImNsb3NlZCIsIkFjY29yZGlvbkNvbnRlbnRzIiwiaXNPcGVuIiwiQWNjb3JkaW9uSXRlbSIsImNsYXNzTmFtZSIsImxlbmd0aCIsInNsaWNlIiwicmVkdWNlcnMiLCJyZWR1Y2UiLCJhY2MiLCJyZWR1Y2VyIiwiQmxvZ1Bvc3QiLCJwb3N0Iiwic2x1ZyIsInNsdWdpZnkiLCJtbl90aXR1bG8iLCJ0aHVtYm5haWwiLCJtbl9pbWFnZW0xIiwibW5fdGl0bGUiLCJleGNlcnB0IiwibW5fZGVzY3JpY2FvIiwibGVhcm5Nb3JlIiwibXgiLCJtYiIsImltZyIsImEiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRPdmVyZmxvdyIsIldlYmtpdExpbmVDbGFtcCIsIldlYmtpdEJveE9yaWVudCIsIkZhcUl0ZW0iLCJmYXEiLCJxdWVzIiwiYW5zIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luQm90dG9tIiwiaDMiLCJGZWF0dXJlIiwiZmVhdHVyZSIsImljb24iLCJkZXNjcmlwdGlvbiIsImZpZ3VyZSIsIm1pbldpZHRoIiwibXIiLCJQcmljZVRhYmxlIiwiaXNSZWNvbW1lbmRlZCIsInN1YnRpdGxlIiwibGluayIsInByaWNlVGFibGUiLCJoZWFkZXIiLCJsaXN0IiwiTW5fVGl0dWxvIiwib2JyX25vbWUiLCJhbGlnblNlbGYiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJ1dHRvbiIsInJlY29tTGFiZWwiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJtaW5IZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwicHJpY2VBbW91bnQiLCJsaXN0U3R5bGUiLCJtYXhXaWR0aCIsImxpIiwic3ZnIiwib3BhY2l0eSIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiU2VydmljZSIsImNvdGFjYW8iLCJzZXJ2aWNlIiwiY290ZF9ub21lIiwicHJpY2UiLCJjb3RkX2NvbXByYSIsImNvdGRfdmVuZGEiLCJ0aGVtZSIsImNvbG9ycyIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwibWVudUl0ZW1zIiwiaWQiLCJ0ZWxlZm9uZSIsImxhYmVsIiwiZW1haWwiLCJlbmRlcmVjbyIsImNpZGFkZSIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwibGlua2VkaW4iLCJ3aGF0c2FwcCIsImZvb3Rlck5hdiIsIkZvb3RlciIsImZvb3RlciIsImZvb3RlclRvcElubmVyIiwiYWJvdXQiLCJsb2dvIiwiTG9nbyIsImNvcHlyaWdodCIsIkRhdGUiLCJnZXRGdWxsWWVhciIsInB0IiwicGIiLCJnYXAiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwiZm9vdGVySW5uZXIiLCJib3JkZXJUb3AiLCJncmlkUm93IiwiZ3JpZENvbHVtbiIsInRlcm1zIiwic3BhbiIsIldpZGdldCIsImZvb3RlcldpZGdldCIsInRvU3RyaW5nIiwiZm9udEZhbWlseSIsInVsIiwibWFyZ2luIiwiQmFyIiwiaXNTdGlja3kiLCJIYW1idXJnZXJNZW51IiwidG9nZ2xlTW9iaWxlTWVudSIsImJhciIsInRyYW5zZm9ybSIsIm91dGxpbmUiLCJtbCIsIkhlYWRlciIsInVzZVN0YXRlIiwiaXNNb2JpbGVNZW51IiwiaGFuZGxlU3RhdGVDaGFuZ2UiLCJzdGF0dXMiLCJTdGlja3kiLCJTVEFUVVNfRklYRUQiLCJwcmV2IiwiaGFuZGxlQ2xvc2VNZW51IiwiY29udGFpbmVyIiwiYnV0dG9uR3JvdXAiLCJoYW1idXJnZXIiLCJweSIsInBhZGRpbmdUb3AiLCJwYWRkaW5nQm90dG9tIiwibWFyZ2luTGVmdCIsImxvZ2luIiwiam9pbkNvbW11bml0eSIsIk5hdmJhciIsImlzTW9iaWxlIiwidXNlUm91dGVyIiwibmF2YmFyIiwibWVudUl0ZW1zUGFnZXMiLCJmbGV4R3JvdyIsInZpc2liaWxpdHkiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJMb2NrIiwiZmlsbCIsIndoaXRlIiwibWl4QmxlbmRNb2RlIiwiSW1hZ2UiLCJzcmMiLCJMYXlvdXQiLCJ2YXJpYW50IiwiTGdwZCIsInNldElzT3BlbiIsInVzZUVmZmVjdCIsImFjZWl0ZUxncGQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJjbG9zZUxncGQiLCJzZXRJdGVtIiwiY29va2llUG9wdXAiLCJjb29raWVQb3B1cEFjdGlvbnMiLCJmbGV4V3JhcCIsImJvdHRvbSIsInpJbmRleCIsImZsZXgiLCJmb250U3R5bGUiLCJOYXZMaW5rIiwiTGVhcm5Nb3JlIiwiZmFkZVJpZ2h0Iiwia2V5ZnJhbWVzIiwiYW5pbWF0aW9uIiwibG9nb0JyYW5jbyIsIlNlY3Rpb25IZWFkaW5nIiwic2xvZ2FuIiwiZW1vamkiLCJoZWFkaW5nIiwiU0VPIiwiYXV0aG9yIiwibWV0YSIsIm1ldGFEYXRhIiwicHJvcGVydHkiLCJjb25jYXQiLCJkZWZhdWx0UHJvcHMiLCJsYW5nIiwiU2xpY2tBcnJvdyIsImNvbnRyb2wiLCJwYWdpbmF0aW9uQnV0dG9uIiwiaW5mbyIsIlRvcEJhciIsInRvcGJhciIsInB4IiwicGwiLCJwciIsIndoaXRlU3BhY2UiLCJzdHJvbmciLCJib3JkZXJMZWZ0IiwiSW5mb3JtYWNvZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm9yZ2FuaXphck9icmlnYWNvZXNQb3JFc3RhZG8iLCJvYnJpZ2Fjb2VzR2VyYWwiLCJlc3Bpcml0b1NhbnRvIiwib2JyIiwibW5fZXN1YnBhc3RhIiwibWF0b0dyb3Nzb0RvU3VsIiwibWluYXNHZXJhaXMiLCJyaW9HcmFuZGVEb1N1bCIsInBhcmFuYSIsInJpb0RlSmFuZWlybyIsInNhbnRhQ2F0YXJpbmEiLCJzYW9QYXVsbyIsIkluZm9ybWFjb2VzUHJvdmlkZXIiLCJub3RpY2lhcyIsInNldE5vdGljaWFzIiwib2JyaWdhY29lcyIsInNldE9icmlnYWNvZXMiLCJhZ2VuZGEiLCJzZXRBZ2VuZGEiLCJjb3RhY29lcyIsInNldENvdGFjb2VzIiwidXJsMSIsImFwaSIsInVybDIiLCJ1cmwzIiwidXJsNCIsImF4aW9zIiwidGhlbiIsInNwcmVhZCIsInJlc3BvbnNlcyIsInVzZUluZm9ybWFjb2VzIiwiY29udGV4dCIsInVzZUNvbnRleHQiLCJjcmVhdGUiLCJiYXNlVVJMIiwiSW5kZXhQYWdlIiwiQmFubmVyIiwic2VjdGlvbiIsImdyaWQiLCJkb21haW5DYXJkIiwiaW5wdXRHcm91cCIsImJhY2tncm91bmRJbWFnZSIsImJhbm5lciIsImgyIiwiaW5wdXQiLCJXZWJraXRCb3hTaGFkb3ciLCJzZWxlY3QiLCJzdWJtaXQiLCJub3RlIiwic2V0dGluZ3MiLCJzbGlkZXNUb1Nob3ciLCJzbGlkZXNUb1Njcm9sbCIsInNwZWVkIiwibmV4dEFycm93IiwicHJldkFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJpbmZpbml0ZSIsIkJsb2ciLCJtbl9jb2RpZ28iLCJDYWxsVG9BY3Rpb24iLCJjb250ZW50Qm94IiwiYnRuV3JhcHBlciIsIkJnU2hhcGUiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZFNpemUiLCJzaGFwZVRvcCIsInNoYXBlQm90dG9tIiwiQ3VzdG9tZXJTdXBwb3J0IiwiaWxsdXN0cmF0aW9uIiwic3VwcG9ydCIsInN1bW1hcnkiLCJtYXNvbnJ5T3B0aW9ucyIsIm9yaWdpblRvcCIsIkZhcSIsIlByZW1pdW1GZWF0dXJlIiwicXVlbVNvbW9zIiwiYWNjb3JkaW9uR3JvdXAiLCJmZWF0dXJlcyIsImlzQXZhaWxhYmxlIiwiYnV0dG9uVGV4dCIsIlByaWNpbmciLCJkaWEiLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtZXMiLCJnZXRNb250aCIsImFubyIsImRhdGFBdHVhbCIsImltYWdlIiwiSW1hZ2VBZ2VuZGEiLCJTZXJ2aWNlcyIsImNvdGRfY29kaWdvIiwiU3VwcG9ydCIsInRodW1iV3JhcHBlciIsInN1cHBvcnRUZWFtIiwiVGVzdGltb25pYWwiLCJkeW5hbWljIiwic3NyIiwiYXZhdGFyIiwiYXV0aG9yTmFtZSIsImRlc2lnbmF0aW9uIiwidGV4dCIsIlRlc3RpbW9uaWFscyIsImFycm93cyIsImRvdHMiLCJmYWRlIiwiY2Fyb3VzZWwiLCJ0ZXh0SW5kZW50IiwiaWNvbjEiLCJpY29uMiIsImljb24zIiwiaWNvbjQiLCJpY29uNSIsImljb242IiwiVWx0aW1hdGVGZWF0dXJlcyIsImg0Iiwiam9pbiIsIm5vcm1hbGl6ZSIsInRvTG93ZXJDYXNlIiwidHJpbSIsInRleHRTZWNvbmRhcnkiLCJoZWFkaW5nU2Vjb25kYXJ5IiwiYmFja2dyb3VuZFNlY29uZGFyeSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsImRhcmsiLCJtb2RlcyIsImZvbnRzIiwiYm9keSIsIm1vbm9zcGFjZSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwiYm9sZCIsImxpbmVIZWlnaHRzIiwibGV0dGVyU3BhY2luZ3MiLCJjYXBzIiwic3BhY2UiLCJzaXplcyIsImJyZWFrcG9pbnRzIiwibGF5b3V0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYWluIiwibGlua3MiLCJpbWFnZXMiLCJidXR0b25zIiwiZGVmYXVsdCIsImJnIiwicHJpbWFyeU1kIiwiY2FyZHMiLCJvZmZlciIsImZlYXR1cmVDYXJkIiwiZm9ybXMiLCJ0IiwiYmFkZ2VzIiwicm9vdCIsImgxIiwiaDUiLCJoNiIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztR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O0FBOEJOd1osTUFBRSxFQUFFO0FBQ0ZsTixhQUFPLEVBQUUsY0FEUDtBQUVGdE0sY0FBUSxFQUFFO0FBRlIsS0E5QkU7QUFrQ047QUFDQXlaLE1BQUUsRUFBRTtBQUNGL1MsWUFBTSxFQUFFLENBRE47QUFFRm5DLGtCQUFZLEVBQUUsV0FGWjtBQUdGb0MsaUJBQVcsRUFBRTtBQUhYLEtBbkNFO0FBd0NOO0FBQ0FnRCxNQUFFLEVBQUU7QUFDRnRELGVBQVMsRUFBRTtBQURULEtBekNFO0FBNENOcVQsVUFBTSxFQUFFO0FBQ05oVCxZQUFNLEVBQUUsY0FERjtBQUVOaVQsVUFBSSxFQUFFLHFDQUZBO0FBR05DLGNBQVEsRUFBRSx1QkFISjtBQUlOelgsWUFBTSxFQUFFLGdCQUpGO0FBS055SCxZQUFNLEVBQUUsaUJBTEY7QUFNTm5JLGNBQVEsRUFBRSxtQkFOSjtBQU9ObUUsYUFBTyxFQUFFLGNBUEg7QUFRTjdELGNBQVEsRUFBRSxxQkFSSjtBQVNONUIsV0FBSyxFQUFFLGdCQVREO0FBVU44TyxnQkFBVSxFQUFFO0FBVk47QUE1Q0Y7QUFoUUssQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FnZW5kYTMtMDNhMzU3NWFjOGRkMjkyNjJlMDRhZDdjYjAzMjBmYmQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lcjEtM2I1Zjk3ZTAxYjIwOTNjMTVjMDJhOTQwNGE3YjdjNTEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NpZGFkZS04NDY2YmMyMzAwNWUzZjJiN2E0M2QwOWFiZDE3YTMyZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZW1haWwtODcxMGExZmM1ZTI4NWM2Njg4Nzg1ZDEzOWMzYzA3NjcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2VuZGVyZWNvLTk3MDNjMDNiYjhkMjZhMmM1MDhiYTliZGIyMGNjN2RkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mYWNlYm9vay0xNTZkNjM2Y2IwMDBlMGE5ZjlmZDlkNDE1MTcyY2JkOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW5zdGFncmFtLTg2ZTlmMWJkNmEyMmRmMmQ4YzNmMzcwYzlkMDBmOTAwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9saW5rZWRpbi05ZDY3NTA2OTViYTExMzYwMmVlNTRmNDdiNmVmOGE3Yi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFb0FBQUFiQ0FZQUFBRGJBaGtqQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUlDU1VSQlZIZ0I3Wmd0YzhKQUVJYmZkQ3FReU1ySVNtUmxKREt5TWpJL0NSbUpSRVpHSWl2N0U1QklITjFOTnZUWWhIRDVhRW5DUFRNM2dRdHpIQTk3ZTVzREhQL0QrWHoycWIxanBORGNGdFJXMUpib2dZY2UwSmVIZEZuSjI4enp2QXdqUXVSRTFQaDZvcmFqT1g2akF5L29nUHhMRVg0bFFiM3VoVVJwT0VDa0xxVXhDMnFmTk9ZSE90QmFsUEV2K2VyV0Y0YWpqTlFRL1RoUU82cStOZjJHQUMxcEpjcVE5S1p1RGIzc3pDam9ETTJKbDF1Q3FxeWdyU3hyVVdxOW00d3VONW5RM0ZoU2dpSzZUQUxKc1ZaWWlhSUJPWUppVkNXbFk1WlVZc2pTaVp4M3c0aHo3cjB4N29yaXJSVkZKSm1EY1VodmFRSjdUQVJlaHRTMjlGTFAyYWNXM3lzZkdrWEpEc0hocVNVbFhiZlpSMFB6VHVtU3FlNDhyVFRKdWlsS2t0MWFkWE1JYitqTERwZ3draTR5MWQwb3ExWVVmWmdGQmFvN1grZXkzaWVQeUVwVk4wdUtKU2RmY1NWS0NrbGVhcm9vNHdqYXpFVlNpZVJZemxzbm81dlRUQ3k1K2NKRmxHVCtDTlVLbXd2SlJHcVMyU0c1TmtHMTFnck5XaXNYSmV1U3QzOGRjbnNhYURkWFNTV1NjeE0wRktabFJQRlNxeXNrVXp3SlJxMVZKMnQ1YTljYmRiWDlWelJVOFhpVmE0WWlpZmtvSkEzNWdEc3BXQlpGVUlKaTErZlRDMDQveDFlNW1aL1Z3SkVqUGxJWTVVT244NmhueElteXhJbXl4SW15eElteXhJbXlaS3lpeWtlbVdUMkVEdzQvTXZCUlQ5MXh4NlA0QWNwKzFabTR5RWtlQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRWtBQUFBYUNBWUFBQUQ3YVhHRkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFIZVNVUkJWSGdCN1ppaGNzSkFFSVkzVEFXeUVvbXNSQ0lqa1Voa0pJOVRpY3dqUkZaR0lwR1ZTQ1FTUi85TkZtYlprdVNTYVlkTGN0L016b1ZMUTVPUHU5dTlST1FaMStzMVJzT1JSMUdVa3dkTXlEOWkwNzRjSHlWNVI1RGtRSkRrUUpEa1FKRGtRSkRrUUNFSnRja1VzVUM4VTRCOXpEbHVuOStrM1NKWTBBVW5NeFJ4M3pSUzhQeHJOQXM1L29LTC9RUUhNeW9GTVZQRUJuMUxHaGt5bXhJU1FVSnh6TlB0TEtGWnlmWmdGTWd5a3lEbTVsUXhveVlZVGhlMEtmMFdGWTlCbEJJME02ZnVlOGRpNGNZSEZyUkRuTXdmc3FnVkRSUWx5Q2FzaDgzMXZRUlFJK3BnTGxqaXkzaWRtdEtBa0xYNGxyQTBtWDM3OEZBbnNTaEVoc1BjWFBpQlNJWlNJbkM1UStVSTBqODhENUlkbnQ4T2t1ZkZwSmpNVFRlYjc3MG95ZHljNXJVZ1htNVNQUGZwMlRXVkZYZUZxR0lPOTFXVUpDSzd4dFlLWW1xM0pTSXFNOTBzYUN0enVqZW9ONTRhRnBOSzRxcWtjZThtYzVRejMwVjE4MUJOWkc1N2oxVFJzZWsra29NZ3htbURLME9SUmVrdlpGRnJuMnNwcWFJNWc5a2Y4NEJuU2lXak4rTDhGa0NNcDlTVG9yT2hTTXlvQmExZWxUU0krcXM2S2pkdFY3aHNxYXlpMnhCUkIwUklvbTdpakgvK1NSNkJlMlJKRzlWVjdPaXBBNTBrcVJ1SnFjeDIrN29VK2lxa0pwcFRlWDlIQ3Z3ZlAybUR6bm50SW80c0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy90ZWxlZm9uZS1jNDBkMDQ0OTc0OGQzNzc3NDA4N2EwNDYxYzE0OGVmMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2hhdHNhcHAtMDIwNzdhZmNmZTllNzNmM2Q4MzA1YjkzMWViYTE4ZGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMmNhZjcwNTJhMWVjM2ExNGY2YmFlNDUxNWQ1MDkwZTUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ29fYnJhbmNvLTk1NTIxYWEwZWRkOTlkMTgwZDBiNWQ4ZmE4YTE2ZWFjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9xdWVtLXNvbW9zLTU5YWJlYmUyODRmZjJkYzUyMjZhNzZhYmQzNGIyNmRmLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQVhOU1IwSUFyczRjNlFBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzT0d3QUFCRzFwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMG43N3UvSnlCcFpEMG5WelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0p6OCtDang0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBuWVdSdlltVTZibk02YldWMFlTOG5QZ284Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SjJoMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1uUGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZRWFIwY21saVBTZG9kSFJ3T2k4dmJuTXVZWFIwY21saWRYUnBiMjR1WTI5dEwyRmtjeTh4TGpBdkp6NEtJQ0E4UVhSMGNtbGlPa0ZrY3o0S0lDQWdQSEprWmpwVFpYRStDaUFnSUNBOGNtUm1PbXhwSUhKa1pqcHdZWEp6WlZSNWNHVTlKMUpsYzI5MWNtTmxKejRLSUNBZ0lDQThRWFIwY21saU9rTnlaV0YwWldRK01qQXlNUzB3Tnkwd01qd3ZRWFIwY21saU9rTnlaV0YwWldRK0NpQWdJQ0FnUEVGMGRISnBZanBGZUhSSlpENDVNV0V6WW1VNFpTMWxaRGhrTFRRMU5tSXRZV1kyTlMxa056azRZVFJtWVdZeFpHSThMMEYwZEhKcFlqcEZlSFJKWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1ppU1dRK05USTFNalkxT1RFME1UYzVOVGd3UEM5QmRIUnlhV0k2Um1KSlpENEtJQ0FnSUNBOFFYUjBjbWxpT2xSdmRXTm9WSGx3WlQ0eVBDOUJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBnb2dJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2xObGNUNEtJQ0E4TDBGMGRISnBZanBCWkhNK0NpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtDaUE4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBuSndvZ0lIaHRiRzV6T21SalBTZG9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THljK0NpQWdQR1JqT25ScGRHeGxQZ29nSUNBOGNtUm1Pa0ZzZEQ0S0lDQWdJRHh5WkdZNmJHa2dlRzFzT214aGJtYzlKM2d0WkdWbVlYVnNkQ2MrUThPemNHbGhJR1JsSUZObGJTQnViMjFsUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2tGc2RENEtJQ0E4TDJSak9uUnBkR3hsUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenB3WkdZOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZjR1JtTHpFdU15OG5QZ29nSUR4d1pHWTZRWFYwYUc5eVBsUmljaUJYWldJOEwzQmtaanBCZFhSb2IzSStDaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLQ2lBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwbkp3b2dJSGh0Ykc1ek9uaHRjRDBuYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THljK0NpQWdQSGh0Y0RwRGNtVmhkRzl5Vkc5dmJENURZVzUyWVR3dmVHMXdPa055WldGMGIzSlViMjlzUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nqd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2p3L2VIQmhZMnRsZENCbGJtUTlKM0luUHo3czRBSkVBQUFMT0VsRVFWUjRuTzJjZjB4YjF4WEh2K2ZaQWFyWWlSZXk4YUEvY0JVU29pMEVLRk1JTFJoM2t6S21GWm90TkUyN05hSnFLYVJLRnFacEUyMXBZbjVNcGRxazVWY1huTEF0YXFZMnBkSGEwa2lsU0czNWxSOU1qWXFUVllzenFrS1Z3V01yTGFsZEJReCtaMzhZakEzKytmeURSTnRIc215L2UrOTU1eDNmZCs2NTUxNC9RaHpKTngxYWthaEszRXl5bkM0VDNVR2dPd0RjQVdiWHU0dHJJTG9HNEJxRHJ3bk0xMWdRaHFlY1V4ZjZUVC8vS2w2NlVxeFBjRzlUYS9veTJma2dNNWVCeUVEQU1pVnlHSmdtb0J2TTdkTXFkZnU1dWllSG82MnJKekV4VEpIcCtFYUJuRHRBVkFiZ083RTRCNENQd2R6T1JLLzI3S3U2SEczaFVUV00wZFNhd2NMTUN3emFSbkhvalFEQUFCUGp0Sk9wcnMvMDFOVm95WTJLOGtXL01hY0tNMXdQNEhFUXFhTWhNMnlZWjVqb1QwNVpYWC9XOU1SSXBPSWlNb3pSOUdlZFUzQThRK0E5QkxvdFVtV2lBWU52Z0hGSVRwQmY3SHZtNlMrVnlsRnNtTUlHYzc0QXZFRkFxbElac1lTQlVSbjRjZCsrcW40bDdRVWxqUXdOUjdjTGpKNmIxU2dBUUVDcXdPZ3hOQnpkcnJCOUdMUzFxUXovK1BKRkl2eFN5Y21XQ2diL3JtZjlxbHBzMys0TXRVM0loaWt3dGE1YUpzeThUcUR2S1ZOdmFXSHcrOU95K3FIenBpZS9DS1YrU0lZcE1oM2ZLQWh5TzREMGlMUmJlb1psV1Nqck5WVmVDbFl4cUk4eG1reHFFcHgvd0sxdkZBQklGMGgreVdneUJRMHBnaHBHcHRRakJMb3ZPbnJkQkJBS1pVbzlFcXlhS2xCaFVVTkx0VUMwUDNwYTNSd1E0YnQzM2YvQTJHY2ZuUG5RYngxL0JZWkc4eFl3emlpZDlOM3NNREROa08vdjNiZnJySzl5bjRZeE5MYXNoWXdQaVdoRmJOVnpjZnVxRmRpMDVzNm95ZnZxeGhUNnJneGhhbVltWUQwRy9pUEl3ajFkcHNwckM4dDhPeUdtNDBTSWkxRkVuUmJtSjM2Q2dlRVJERXJqVVpHNW95QWJwZmVzUjgzTFp3TFdJK0Nic2lEL0JZQnhZZGtpd3hRMkhqVVNvemdxR29aQXljWjErSHJLZ2JxMnprVmxtcVFFMkNjZFljc2NIQnRIMC9ZdElkVWxvTGl3OGFpeDcvbGRYWjdIRjQxS0tsbG9ERnVUQ0pFbWJGN2ZOVWtKcUMwclJtdmxObVNJeVdITHMwKzVqQ2xRYVBHcndJSnAwVEhQTDBXTjVxMGdGSWF0U1JUSkVKTnhhcytqS01uT2hLalRvclZ5RzhyenM3enFaS2VuZXRYUFRrOTF2NVRnNmpVdEpaN0h2RzRsWWpRb2toeEZtaDdhZ29IaEVVZ1ROcXdWVitNZHkxWFVsaFdqenpvRWFjS0drdXhNMUpZVm83bTlHMzNXVDlGYXVjMnJmWE43TjZUck5qL1MvYU5pTkFQb21QdnVOa3hSdzdFZEJNN3kyU3BPaURvdFJKMFd6VzkzSStjdTE2L2ZZYkZpenc4S1VKaXB4K24reStpd1dERTQ5cm5iVWU4NC9DcEVuUllBWUorY3dxQTBqaHg5bW9LelUzWlJvM2xyNy9OVmJ3SWVoaUhtcmZGSlJ2ckhQamtGQU5Ba0puZ2RmK0d0TGd3TXU1SnlHV0l5Q2pQMUtNelV6N1p4NEhUL1pmZHhKYzU2RHBLeEE4QzhZZkxNNW1XUStJZXhUTk5xa2hLd0ptV3hJeFYxR3Zkbis2UURmZFloMUpZWjNZWUFnRDdyMEh6OWxWcmtwbnYzaUE2TDFYMThVQnAzTzk5d0lZTGJ6eERnR3FKVkxIeWdTRm9JYUpJU2NHclBvOUFrSmZnc3R3eVBZdS9MYjd2cjFwWVozVDFDbXJDaDd2WE9zR0tjSEgwYURqejJBTDdYZEJ3eWMxaTZraXdVZEprcUw2Z0JRSkNwSkJhZFpmZVdBbVNJeWRBa0prS1RsSUFqbmVjeE9PWjlnU1ViMXlGMTFrY0FybDVUMTlhSkNrTWVpdGJyTVRwaHc0SEhTckhqOEN1d1R6cFFtS2xIZWY0R3YrYzgzZjkzeFQwR0FHUnliZ1hnTWd3UnRpcVc1SWVTN0V5VTUyZmhkTDlyeVNkRFRFWkd5cXBGdmNielZuSzFXNGNPaTJzVnhEN3BRSE43Rjg3OHFnS0ZtWGZQT3Q1eERBeU4rajN2d1BBSU1zVFZpdldldFVXdDJtZ3lyMmNnVTdFa1A0Z3JOYkFNaitKSTUzbjNzYlhpYXFUcXZHY2FvazdyRHZCRW5SYTFaVVpJMSszdWN2dWtBL1pKaDl1ZzBvUU5IM240bjdIcjlrVUJZbVJRcHRGa1hxOTJDdkptUVZsT1BDdzhEZVJKaFNFUHViUERxelJodzloMU84bzNiWEJmYkVWeEhqUkpDVzRIUEJmSGVHSnNQQlpWWFoyQ3ZGbE5FTVJvQ01zUWs3SGNZNWdWZFJvc1Qwd0lHbzB1dkpXZWEzc1hCM2VXdW1WbHA2ZTZnclpaUTNWWXJGNEJYSFI3aXd1Q0lLckJMQ0xFT1lVdktvcnpVR0hJODF0K2NHZHBVQm1XNFhtZk1TaU40K0ZEcjh3NjM3dXg5K1czRjEzOHdGREVDNDJCWVJiVkFDbnVNUnZ1VEVHRkljL25hQk1xSlJ2WElXZEJyN0pQT25Dazh6eE85RnhVRkxETkJZamhEdFh6a0tnR1FiRmhpakwxNkxCY2RZODhTcEFtYkRpMTV4RTBiZC9pTm02SDVTcWtDZHNpbzVSa3IzT0gvNEVvMzVUbDFRdkRoaUNxQ1N4R0V2RkdlbzlMRXpiVW5EeUR4dzE1eUUxUGc2alRJaU1sMlNzL2s2TlBRMjFwTVVTZDF1dUNNOFJrMkNjZGkzVG9zRmh4b3VlaVlwMElFZDVLMFdKZ2FBUjdaLzJHNXlqbEdyNkxrWk9laGo3ckVHcE9udkV5d3NHZHBmaG9hQ1FpSS9pR3hLWFpzaEdFNVlrSjJMMmxBT1g1V2Zoa2JCdzFKOC9FM3VFdVFBMndCTkRLdUo0MUFBT2ZqYUtpT0ErcDM5Q2l1YjBiSFJickVtakJrcHBCRXNVZzhsWEt3TkFJZGh4K05TYnhTYWd3U0ZLRElVVXlnY3pScDZLQy9NY3hzV0JRR3ZkS1JVUWRoalIzS3ltV2thcGJBWXAzaG9zUlc4T0FKVFdJcEVoRTlGNzUxTzg4S05ha3JOUUVyNlFFSWtuTmtDVlNPSW44NU45ZjROa0g3MWUweEJFcDRrb3R0TGNsb3VOUzFEWnF1bUhJa2xvbEN4ZFk0ZVM2ODlJL2NZLytkdVRxMC9ET1FQRFJROVJwM2ZtV2hjNDFWKzhLN2tLVms1T2VocnEyenBnNGFaVXNYRkIzbWFxdUZEZTBXQUZTTkRKSkV6WklFN2FRZ3F3Y2ZackxNSmV1WW1Cb0JObnBxVjc1bEZ4OVdsaHlJc25VK1lldFhhYnFLd0lBTU0rdnA4U0xrdXhNSE54WmlsTjdIb24zcVFQQzdMRktJQXZvVURIMnhsT0J1YnpLVXNZcnZoQllOVytZRzkraTl6Ump1QTRncGhId3dOQUl2cDV5b0h6VGh2bFV3K3g3K2FZc3J5V1RwWUNaditvMlZWNEFadGV1TDFaVlRjZnJkbnJoclM1b2t4S1JtNTdtOVJvWUhrRnplMWR3QVRHRjNwbjc1SjVFTXRHYkJINVlpYmlVbFJvVVp1cERDcnI2ckVNUkJXZXVFU2syKzY2WjZNMjV6MTRocTZIQmZJbUFzTmF2S3d4NXFDaDJUUW5tTW0reG1QZ3RYSWdERU5WWk56UE85ZXl2Y20vQzlJcGdaT0pmS3hGcUdSN0ZBNzg5Z2RQOWwxRmJWb3pkV3dvaTFkTUxUVklDRGp4V2lyWGlhdFMxZGFMbVpPQ2RVa3FRQmZrNXorOWVodWw3dnJxRGdXNGxndTJURHB6b3VZam05bTZVNTJjcDNISGdtOW95STdTM0plS0pZNmRqTWtkaTVuZUQ3cWhpZUZzdVhEb3NWdlJaaDFDK3lmOHlhamlJT2kwS00vVTQvTzY1aUhZeUJNSkp3cUwvUml6SzRQWHUyM1hXVU4veUZoRTlHS3JnTlNuSlh1dEgwb1FONWZsWmluYzRlVEtYNXJSTlRybmx6VG5mUWVuemlPVXo0N1d6KzUvNmVPRnhuL2tDbytub0JoYUVBUVRaSUEyNDd2K0RPMHQ5YnZHSUpTZTZMMFlqMSt1Y0ZsUnJmUDN4MUc4aXBhakJYQ01BdncvMURBSVJLSUtGdTNDUVpSbEtWNHk4NUFDLzZOMVhkY0JYV2NBck1kUzNIQ0NpdUU0VjRnVXpIK3paWDEzanJ6endUOHhNaG9aanJ4TmhXOEI2dHhyTWIzVHZxOW9HSXI4ZEwzQW1ob2dGVHZnWk00TCt2K2VXZ2ZrQ2NlS2pnWXdDaEpqc0xXZzZlbnVDVTdnQWNqOW00TmFFTVhoajJmVG12ejI3TytoQ2UwaTV1L04xdS83bFlGVTJNODVGcnQzU3dPRDNIYXpLRDhVb1FKakxBM2xtODdMbFkzeUlRTlhLMUZzeVdydmwwU3FZVEhLb0RSU05yNFo2Y3hVUlhrSUljYzVTd2d3SHdFLzM3Sy8rWTdodEZRY2VSZlV0M3hjSXJ3RVUveVdDa09CeEoraEhjZjFET2dEMDdxOStqMlJhejhBaDF5OXpjOEFNQjVnUGswenJsUm9GaU5KVzhQdjJtKzlTQzJoaThFK0pLUFk3SFgzQlBBT2lFek5PTko2dHIvb3NVbkZSamVHTFRDM2ZGZ1RVeC9zeEtXRDhWV0JWYlpmcHljRm95WTJKOG9VTkxka3F4c1AvZjdCT0FPNXRhazFmNXB3cEExRVpBOFgvMDQ5aThzZXQ5UEN1L3dLVURXU2x0NnNTU3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQVhOU1IwSUFyczRjNlFBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzT0d3QUFCRzFwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMG43N3UvSnlCcFpEMG5WelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0p6OCtDang0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBuWVdSdlltVTZibk02YldWMFlTOG5QZ284Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SjJoMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1uUGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZRWFIwY21saVBTZG9kSFJ3T2k4dmJuTXVZWFIwY21saWRYUnBiMjR1WTI5dEwyRmtjeTh4TGpBdkp6NEtJQ0E4UVhSMGNtbGlPa0ZrY3o0S0lDQWdQSEprWmpwVFpYRStDaUFnSUNBOGNtUm1PbXhwSUhKa1pqcHdZWEp6WlZSNWNHVTlKMUpsYzI5MWNtTmxKejRLSUNBZ0lDQThRWFIwY21saU9rTnlaV0YwWldRK01qQXlNUzB3Tnkwd01qd3ZRWFIwY21saU9rTnlaV0YwWldRK0NpQWdJQ0FnUEVGMGRISnBZanBGZUhSSlpENDRPVGt6WVRabE15MWpabUZsTFRRMFltTXRZV0ZtWlMweFl6SXhOalUzWW1FeVlqTThMMEYwZEhKcFlqcEZlSFJKWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1ppU1dRK05USTFNalkxT1RFME1UYzVOVGd3UEM5QmRIUnlhV0k2Um1KSlpENEtJQ0FnSUNBOFFYUjBjbWxpT2xSdmRXTm9WSGx3WlQ0eVBDOUJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBnb2dJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2xObGNUNEtJQ0E4TDBGMGRISnBZanBCWkhNK0NpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtDaUE4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBuSndvZ0lIaHRiRzV6T21SalBTZG9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THljK0NpQWdQR1JqT25ScGRHeGxQZ29nSUNBOGNtUm1Pa0ZzZEQ0S0lDQWdJRHh5WkdZNmJHa2dlRzFzT214aGJtYzlKM2d0WkdWbVlYVnNkQ2MrUThPemNHbGhJR1JsSUZObGJTQnViMjFsUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2tGc2RENEtJQ0E4TDJSak9uUnBkR3hsUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenB3WkdZOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZjR1JtTHpFdU15OG5QZ29nSUR4d1pHWTZRWFYwYUc5eVBsUmljaUJYWldJOEwzQmtaanBCZFhSb2IzSStDaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLQ2lBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwbkp3b2dJSGh0Ykc1ek9uaHRjRDBuYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THljK0NpQWdQSGh0Y0RwRGNtVmhkRzl5Vkc5dmJENURZVzUyWVR3dmVHMXdPa055WldGMGIzSlViMjlzUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nqd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2p3L2VIQmhZMnRsZENCbGJtUTlKM0luUHo0QXBFNThBQUFNYTBsRVFWUjRuTzJjZjFCVTF4WEh2K2Z0YW9CRjFzb0VjZVRIU0N2SnBLeWtTV2F5ak5BWWNCcGwxOVZPaTlHbFk5cEcrV0VtRnR1WmxoK1pxV2xVeUV4Ym9vMHVnc2trYlVWVG5FYUI5Y2NmRUJPWHNKMkpVOG1TbVFRU3FVQmJvTVc2eXk4VjJOTS9sbjN1d2dLN2I5K0tUdnY1NiszOWNlN2xjTys1NTU1NzN5UGNTemErSEtWVzN0WTZXVWdrNWpnQ3hURnhIQmh4QklvREFBYjNndEJMVEwwTTdtV2lYb0djMSswVEQxbHgvbmVPZTlWVkNuVURZZGt2SlM3RzVHWVMyTUNNYnhQUklpbHltSG1jUUI4eXVQNE9LK3R2blR0eVhlNitlaElTeGFnMkZLNFJsTTV0QkJnSTlNMVF0TUhnenhpb2R6cjU1TWk1YXB2YzhtVlZUTlJ6dTc5Qml5YkxtZkU5SWdyNWFBUUFabVlDblhieTVDdEQ1Mm82NUpJclMrY2puc3Ric1dnUnZjcE1QeUtDVWc2WmdjS01DUUsvUGE0WWYzVzAvdTEvQkNzdk9NVnMrZUZTOVoyd0VnaDRHVUI0c0oyUmlURXdId2FFMSsxbTAzK2tDcEdzbUtqc3ZLZEI5RDRSclpBcUk1UXc4ei9CL0YzSHVlcS9TS2t2U0tta3ppN1lDb0UrdWwrVkFnQkV0QUlDZmFUT0x0Z3FxWDVBcFhOeUZPclI2TmRCK0ptVXhoWU01bC9iSTI0VW82NXUwdDhxZmlzbTZya1hsOUdpUlhVQU1pVjFidUZwNXZIeEhNZkZ0Mjc0VTlndnhhZzJGSzVSS3JnZWhNVGcrcmJBTUs1UFRKSmg1SUxwMC9tS3ptOWoxdTFUS2hSODlJRlhDZ0FRRWhWSzV4R3MyemV2U3pHdllwYW8rdDRrd2xwNWVyYndFQ2g5aWFydnpmbktLZWJLVk92ekM0am9sL0oxNi82QUNFK0ZKVC9aZjd2anlpZXpscGt0UTcwcDd6dnNwRWFwbTc3N0hXWWVaeWM5TzNTK3FzVlh2ay9GUk9uelZ4UFRKeUJFK2ROSThYWWRqT3ZUa0JBVEhVeGZBUUQya1RHWXJWZFJVbk5hbEt0V0JlWlVXMndkeUQxd0RQYVIwVG5MTWVOZjQ4NkpKOGJPSCsrZG51ZFRNV3A5d1NVQXovalRpY3VIeXBDNFBCcTFUYTI0Yk91RUppa091dzJaaUZLRlkvZWgzNk83ZjlBZk1TTHBtbVRrWnFVaFBtWVpIQ05qS0Q1ZUY1QU10U29DRmJ0eVlMRjFvUENOZC8ycDhxRzlzV3JkOU1RWmlvblVGNnhUQUIvNEk3SFlxTWR1UXlaMHBaV3dYZXZ4NnB6bGNCbXU5LzhiK3RKS2YwUjVvVlpGd0Z5K0Y4eEF4azhPQkZ5LzJLaEhvU0VUaWR0KzZsZjVTZURaNGNhcVM1NXBNNVl0QWZ5YXYzNmZNVXVMMnFaV0w2VUFnSDFrRk1VMWRUaFJsbytFNWRFQUEwZUtkcUNxdmhsbWF4dU9GcjJBK0pobFBtWGFydldnOVBocGxOZWFBNjd2emdjUTBQUlRBUHNBZUkwYUw4VXMyWlMzaFpqUy9SV1lFQk9OeTdaT24zbTJyaDZ4VEhmL0lGcmFPMkVmR1FNQWRBOE1vbnZBOS9Sd1R4dUxyU1BnK3U1OENUd1RsWjIvd1hIdTJBVjNncGRpQkNmOUt0RDk5bXdHenRNdWRBOE1vcUsyVWZ6dCtleVBYQ24xQTRVRVZBQ1lxWmdvWGNFMkVEU3l0emhGUWt3MHNyVnJVRlgvQWRTcWNHelAwa0t0aXBoUnJxVzlVeHd0Ym5UYVZKd29LL0FwTjJQUEFTUXNqOGFKc2dKVW5EUUhvVFJLWGJJcGI4dFFRL1Vad0hQRUVHK1JHcDRwTUdUaVpKTlYvQys3ZjN0U3VEa1R4cXcwdEV4TnZZcGR2cU1CdHE1ZVpPenhOcmhtYTl1c1J0elcxUXRiVnkvMDB4WUFLUkRUTmdBZWlua3lieEV4YlpTaWwvS2RPZEFreFNFM0t3MjVCNnRRdmpNSE9tMHFjclBTdk1xVjFOU2hwS1pPL0wxMFU2SGZiYWhWNFVoWnRkTG5DRnVic2xwODd1NGZETWJPZ0JnYjNNOUtBSWhjSWF3Ri9IUG1QSEdNakNGeGVUVDBwWldvMkpXRFQ0L3ZoMk5rVFB3dEZ3a3gwYk9PTUU5NkJtNmd0cWxWZWtORTZxaU5oVnJIZVpOVkNRQUs1ZzJRRU5SUG4vSXh1dnNIb1N1cFJPSG1USml0YmJCZDY0R3VwQkxYVC8xR0xGdStLd2VGaGt3dm0rQUxYMVBKMXRVYjBBZ0xCaEtjV3dDNEZNTkVXNlJZRjgrVnh6NHk2bVg0cHE5V3ByTXVIOFBUSnZqQ1BqeHpsVXVJaWNhUm9oMno5c1BUZndrV0p0b0NvRmk1WkZQZW84UjRSQmFwY3pEZDk1aSs4c3hIUzd0dmZ3a0l5bitaQVFHUExObVU5NmdTazRKV1dramNHN1VxQW9XR1o1R3VTZlpLTDkrWk0rOW1iaTZLdCt0Z3F2OGc0R1hZRVl5eUpnV3RVZ0JpcFV1NFMrSG1UT3cyWktLMnFSVUZoa3owRE54QXhVbHpVREl0N1ozSTBDVGpSRmsrS21vYjhXbFhMMXBzblQ0VnJVbUtoKzdwTmE2K0dES0RtbG9DRUt0a2dXTkpoZ1BKREUweWFwdGFVVnhUaHdKREpncmZlRGZnNmVLTENnQTNHMHdvTnVvQnVLWk5lVzBqcXVxYnhUS2FwSGhjUGxRS3dEVlN6TlkyRkh1NEJvSENBc2NxSWRPSUFZQ2IwNFp2UWt3MFBqcGNpcVUrL0E5L3lEMVFKZjduWFE1Y0wwcU1PbFRzeWtGdVZocEtqdGZCWXV1QVRwc0tJRERmYUI1aWxRU1NUVEhUMFdsVHNWUVZNV01GMG1sVFVXaklSUGZBRFpUVS9FazBuaWZLQ3FCV2hhUGlwQms2YlNvMFNmRmVVOEs5YXo5YTN3eFQwUXRvUExnWFptdGJjUGJFQndTS1ZUSVFHNnByQ2VwSTEwaHhUeW0xS2h4SGluWkFyMzBjcHZwbVZOUTJ3ajR5QnAwMkZSWmJCMHoxelRDM1hvV3RxM2VHRWZmRTVUZjlGdW1hWkppbVFoQnpyVnFCd2tDc2twaGpwVGgzZ2FMVHB1SkkwUTQ0Um01Qlgxb0ppNjBEQ1RIUitHTlpBVEkweWNqWWN5RGdsY2RpNjREbXhUS2thNUpodXpZak9pa1pZcGVOQ1JubTFxc28zcTdEelFhVG1MWlVGWUhHZzN0bmxMMTh1TXhuZlgrUXc4aFBSOGxFZlFTb1paZU11KzY5ZTBvRmduMTRGTFl1K1VaQklEQlJuMEJBWHlnYjZSNFlSUHpEeTdBMlpUWHN3Nk93MkRwZ3NYWEFQanlLdFNtckVSVVJKcVoxOXc4aVpkVktwS3hhT1d1RTcxNUFRSitTd1gxeStER3pVYjVySzR4WldnQkFpVkV2YmhBOXAwNUpUUjFNOWMyNGZMaE1qTlVXR3JLUXV2T1ZrUFZyTGhqY0p5REVJeVpoZVRRcVRwcEZIME1kR1FGZDJ1TUFYSDZIcGIxVG5HcHFWYmdyWkhIU2pNVGx3WjlSQlVHZmtwelVKOGRlYVRic3c2UFlucWtWQTByMjRWRXgwdFp3Y0M5U1ZxMzBNcDRIZDM0ZmFsV0VyQnZEUUNFbjlTbWRRRjhJOVlLU21qb1kxN3VpZWVjOHdnNGxOWFZRUjBhZ3BiMFRwck5OQUZ5ZXJpWXBIb0QvSzFJb2NBSjlTaWljVm5Eb1ZETTl3dS9HNUxIWGNXTzJ0c2tXVndrS2hkTXFERFZVZjg3QUY2RnF3NWlWaHBzTkp0eHNNS0h0K0g2b1ZlRklpSW5HMzA3OVJreDM3M1ZPbEJXSWFlVXloa1lEZ1lFdmhocXFQNThhS254aDd1TFNNYTVQUTIyVEZmclNTaVF1ajNhRkJ6ejJVTGF1WG5INjZMU3BLS21wUTIyVEZZV0doYm5SUnN4bkFQZkZJU2RDcGhnQWlJOVo1aFhOZCtQeVk3eVBVbE5XeGMxNmZIc3ZZS2R3VnpHT2ZtNENzejBVRFpuT05tRk5VanhLakhwWTJqdGh1OWFEMnFaVzE4N2FxTWZTeUFqUjBKcnFtNUc3UGcwWm11U2dnMXlTWURnYzUwMVd3SDJ1ZEtWNm5QWDVGd2g0WHU2MnpOWTJuN2NPMXJ3NGMyODAvZXpwWHNQRTU5M1BTby9VTXlENUZhTlpGWWRmR0hWUXF5TEVtd3hxVlRnTzdzeEJ3dkpvMkVkR1VWcHpHdDBEZ3pCbXBXSDdsSmNzWitUZmI1ak91Qi9GZGRwaHJqb0ZadGxmYnlrMjZyRTBVb1dXOWs3czNweUZkRTB5ZE5ySGticytEUzN0blZpVGxDRDZPVWVMZHFCbjRBYUlhTTdqa2xEQWpJOGQ1cXBUN3QvQ3RNeWZ5OTJnT2pJQ0ZsdUhseStUTU9YdVY5UTJ6dGdzMWphMXdtTHJrQndPbFlxVDREVzN2UlF6ZFQva1F6a2J0RjNyOFlySmRQY1Bpc2IyWm9NSjZWTzdiZ0RvSHJpQnhvTjdVYnhkQjR1TUVibjVZTWJGZVc5VU9TZFJKaWhna2F2UmtwbzYwVlowOTk4OWRIUEhhVHpqTGhsNzlvcytUYkEzRndMQktVek9lRGRpaG1LR3psZTFST255enhMUjVrQ0VkL2NQdXNJTHpBQmNaenZwMDMwWEg3NE1BTkh6OWNSZDF6M3RRcldwWlBCN3d3MDFuMDFQOXhtSWlkUVZwQWpFVndrMDV3VnBUOVNxQ0ppS2RpRGJ4eDhaREk2Uk1aU2ZOSXNiVFRsaDhPUWRwL0xydmw0OG5UVkNGYVhMS3lJU0FyOXkrUURCN056ck1GZS80U3R2MWhGeHUvT0s5YUhrSjc5R0lHM291clp3TVBpUXcxeTliN2I4T2FmSzdZNHJGOE9TbjBvQjhKanNQVnRJR084N3pNZCtQRmVSK1FJeGJCKys5UU1BODc3Zjg2REFnTlUrY3N2b2VweWQrU05VbDk2NWRRZklCdlBDbkdYSUNBTmY4cGhDajB2djNKcXZyRitodTdIR3FyL3p4RVFxTXo0T3Zuc0xSalBHeDU4ZWFqcmkxN21NMzh2eDdhLytPblk3Nm9rL1BMUUVEeFBvS2VuOVd4Q08yeHRqdDk3K3F0THZHMHlTRHBUVTJRWDVMUENSUVB5Y2hZREJkNWl4ZThoODdLMUE2MG8rYVZQcDg3TVVvUGNJV05BRG9ObGdZQkJPcDA3cUMrbVMvK1BqSFZlNkZqL3l4TnNBaFFIOHJmdGw5REQ0RGhoSFdlQ2NJWE8xNUoyb0xHZXpZZnE4aE1VUTlnUElKWWx2L3djTE15YUk4TTV0T0YrNzFWamRIYXc4V1ErdEl6Zm1QNlpRNE5WNy9wa1Vvai96dUZEc3VIajBTN25raHViRE92cjhWQUY0L3Y4ZjFwbURzT3lYRWhmVGhJRkFCZ1kvOHovOUthWlplWUErM3ZWZmlVRmlrNjJEUFBBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQVhOU1IwSUFyczRjNlFBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzT0d3QUFCRzFwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMG43N3UvSnlCcFpEMG5WelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0p6OCtDang0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBuWVdSdlltVTZibk02YldWMFlTOG5QZ284Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SjJoMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1uUGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZRWFIwY21saVBTZG9kSFJ3T2k4dmJuTXVZWFIwY21saWRYUnBiMjR1WTI5dEwyRmtjeTh4TGpBdkp6NEtJQ0E4UVhSMGNtbGlPa0ZrY3o0S0lDQWdQSEprWmpwVFpYRStDaUFnSUNBOGNtUm1PbXhwSUhKa1pqcHdZWEp6WlZSNWNHVTlKMUpsYzI5MWNtTmxKejRLSUNBZ0lDQThRWFIwY21saU9rTnlaV0YwWldRK01qQXlNUzB3Tnkwd01qd3ZRWFIwY21saU9rTnlaV0YwWldRK0NpQWdJQ0FnUEVGMGRISnBZanBGZUhSSlpENWpOelUyTkRSbVpTMWhZVEJoTFRSaU56TXRZakkwTnkwNU5HRTROVGd6WVRjMVl6QThMMEYwZEhKcFlqcEZlSFJKWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1ppU1dRK05USTFNalkxT1RFME1UYzVOVGd3UEM5QmRIUnlhV0k2Um1KSlpENEtJQ0FnSUNBOFFYUjBjbWxpT2xSdmRXTm9WSGx3WlQ0eVBDOUJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBnb2dJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2xObGNUNEtJQ0E4TDBGMGRISnBZanBCWkhNK0NpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtDaUE4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBuSndvZ0lIaHRiRzV6T21SalBTZG9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THljK0NpQWdQR1JqT25ScGRHeGxQZ29nSUNBOGNtUm1Pa0ZzZEQ0S0lDQWdJRHh5WkdZNmJHa2dlRzFzT214aGJtYzlKM2d0WkdWbVlYVnNkQ2MrUThPemNHbGhJR1JsSUZObGJTQnViMjFsUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2tGc2RENEtJQ0E4TDJSak9uUnBkR3hsUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenB3WkdZOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZjR1JtTHpFdU15OG5QZ29nSUR4d1pHWTZRWFYwYUc5eVBsUmljaUJYWldJOEwzQmtaanBCZFhSb2IzSStDaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLQ2lBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwbkp3b2dJSGh0Ykc1ek9uaHRjRDBuYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THljK0NpQWdQSGh0Y0RwRGNtVmhkRzl5Vkc5dmJENURZVzUyWVR3dmVHMXdPa055WldGMGIzSlViMjlzUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nqd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2p3L2VIQmhZMnRsZENCbGJtUTlKM0luUHo1RXdkUkJBQUFMbkVsRVFWUjRuTzFjZTFCVTF4bi9mWGNYM0RTTFVERmh3VlJJUTRScFIxbERaOUFFRnRKT0tVNlFtdEdpazFhSFRsUXdvNDJaekxTazhiRUNuWmkyMC9vZzFWV1RNTEVURXlYVlVtY2t6Q1RocFlDVkNmaVlnS1h0YWcxY2pFUUlhNFNGdlYvL2dGMzNDYnQzN3dKTys1dloyYjNuM1BQZGIzOTd6bmUreDkxTG1FS2tHZmZObnFXYXRZUWtLVjRpZW9SQWp3QjRCTXhqNzJPNEFhSWJBRzR3K0liQWZJTUY0ZHF3YmJpNXhmaUxyNlpLVndyMUJaNHNPeElmSnRsK3pNeDVJRElRRUNaSERnTWpCTlNCdVdwRXBhNDZ0MjM5TmFWMWRVWklpTWt3SGw0a2tHME5pUElBZkRjVTF3QndCY3hWVEhTc2ZrZmhKYVdGSzBwTWx2RklJZ3VqcnpGb0pVM0JiQVFBQnBnWWxUYW1iWTNHalZlVmtxdUk4aG0vTWNVS283d0x3TTlCcEZaQ1pzQmdIbVdpdDJ5U2V0ZFo0L1Bkd1lvTGlwZ3M0OXRSTnNINkNvRzNFT2lCWUpWUkFneStDOFkrS1Z4NnZmR1ZGMjdMbFNPYm1QUVNVNW9BbkNRZ1ZxNk1VSUtCSGdsNHRuRkhZWXVjOFlLY1FZYVNBL2tDbzM2bWtnSUFCTVFLakhwRHlZRjhtZU1Ed1BIaktzTm50MThud3N0eUxqWmRZUER2NjVQbkZDTS8zK2J2R0wrSldXbzhNaWRNR0QxQm9PL0xVMjk2d2VDUFJ5VDFUNXFNNjcvMDUzeS9pTWt3SGw0a0NGSVZnUGlndEp0K1hKTWtJYS9CdU9IaVpDZE9hbU95akVZMUNiWS80ZjRuQlFEaUJaTGV5RElhSjNVcEppVkdvdGh5QWoybGpGNHpBSVIwaVdMTEp6dE5OVkZuUnNuQklvRm9wM0phelF3UTRYdnpuODd0dmY3SjZRcyt6L0hWWVNnMVpZTnhXbTdRTjlQQndBaERlcnBoeDZhejN2cTlFbU1vUGZnNEpGd2dvdGxLS1RJMzRrRmtKQ2ZJSHQvUi9RVSsrL3ltVXVvQUFCajRRcENFSjJxTkcyNjQ5M2szUWt5SGlhQVlLUUNRdXpnWkJabXBxS2hyRFhqc01uMFNZaUsxMkYxVmgrcjJUc1YwSXVBaFNaRCtEQ0RMdmMrRG1QVFNBMW5FeUZUczZtNm9xQStjbU1VSmNiQU1EYU00YjB3dGhjbkpUQzg5a05XNGZWT3RjN3NITVNwSktKMmFoRUZnYU9ndzQwVEw1WkNRSTdCZ2hOdXNjYUVnbzlTMFFtQ2NsSHNCWFZRRUNneFBRQmNWNGRrWEdRRmRWQVRhcmsyY0VSRDdCMUY1L2pLNnhENUgyOTUxeXhFVHFZVTRNSWpFbUxuUWFzS3g3WGdOR2p2TmNsWDFnSTE0V2VQMm9tcjdzY3VNSVVhSlhNRmFUVGoyck0wRkVlRk1tN2Rmczhjdk9Zc1Q0ckJuN1hLc1Avd0J4UDVCQU1DSmxrdElqSWtHQUxTWmU3Qk1uNFRFbUdoRmlWRXhkZ053RU9PWU1Sa2xoOVlJNEdOeUJhY25KYUFzUHh1NXY2dUFaY2dhbEpKdmJseUpoZzZ6VDN1MGQ5MXlmR3J1bG1XdkpvSkVlTFpoZStFcHdHbkdFUE9LWUd5TC9SZTFERmxSbHArTjlLVEF0MmF4ZnhCcjloOXpJWFpzSmk2SFpYZ1l1NnZxSExNb0ZDQUphd0RjSXliVlpBcUR5TXZrNUsyMG1uQ3NTbHVJbkVVTEhHMFJtbG1vYnIrSzZvditwMkJ6RmkxQVRzb0NqL1lqRzFZNmJKWXVLc0pCVEU3S0FtZzE0YWc4ZjFreHNvaVFZLzhzQU1BRE42V241RGh6czlScXZMZmxPU3hMU2NLZFlkZmxJL1lQb3MzYzdYZ05XVWVRSFBjUTJzemQwRVZHUUtOV28rUHptOURQajRYWVAranp5K21pSWxEZDNvbmRWYlZvTTk4ejNIZUdyY2hJZnRTRk9BVVFtV1U4dkFRWUowYVFLR2ZpODcwakpUNFdkNGF0ZVA1UUpSbzZKamFFeVhFUFkvV1NSUUNBSDZVOGpyVEViMEVUcGtaQlppcDBrVnFmNDhwcm1yQTRZUjZLODdKUW5IZHZSMjNvTUdQMXZuZnh6OTQrYk01ZUtrZDlyNURJdGdJWVgwcEVXQ0ZIeUx3NXM5SFE4Vysvak8ycEMxZHc2c0lWQU1CTDc1eDJ0R2VWSGdJQTZPUGp2STdyNnUzRG1mWk82T05qc1RqQjg1eFB6ZDFlbDZCY2pITlJyTTR5bXBJWlNKSXJ5QmNwT1NrTG9FL3dQeVdzaS9TK0hQVHpZMUZnU0VYdmdBVnYrd2duRkZ4S0FDZ3B5MmhLVnRzRWFZa2dMeWZ1RTg1K2gvL29nVGhnOFdpdHFHK0ZPR0NCT0REb1ltTkNDWnNnTFZFVEJKM1NnaHM3ellvNlgwcTYvLzZBSU9qVVlOYUJsQTJPM1AyWTlZYy9RR0xNWEVlY0F3QVZkYTJvcUc5RjdmYU5qamE3SDJOSDFEYzBPUFh5T3NmeDdUdDM4ZXdmamlxcXExY3c2OVFBS1Q1am5QMllQV3R6b2RYTWN1dzhXNCtleGhhM1hhUzhwZ21KTWRFZVJyVC82eUZzUFhyUFVJL2EvSzUrQkFuU3FVRlFuQmdBMEVWcG9ZLzNOTDc2K0ZnOE9DdmNwUzB4Wmc1MFVaNWJ0aVpNRGYzOGV6S0dSa2R4K1QrOXlpdnJEb0pPVFdDZDBqY20vRU84aFZWcEM2R1BqOE9kWWV1WXM0Y3hwNnpBa0FvQURrUGJPMkJCVHNyWXB1aHVsK3gramgyMzc5ekZlK2ZhRmRYVkd3Z2hXa3JsTlUwb3IybHlhUlA3Qi9ITWJ5czh6bDI5NzEyZmN2cS9Ibkw0T1ZNTDBvWGtsbzBDUTZxTEQ3TzdxZzVhVGJpTGgxclpjaG1ObldhVTVXZERxeGxiV2wxaW53dWhXazA0eXZLekhjZVdJU3UySGE4Smhjb2VFQUFXbFJhNk9DRU9CRUtidVFmNitEam9vaUtRdmlBQit2ZzR0Smw3RUJzMTIrSG5wQ2NsUU95M2dFQllsYmJRUmM2b1RVS2J1Y2Z4dW54akN1d0xBSUJGTllORUNzTHo5UVY3dnNUWlJnQmpEcHU3YTE5OThTcjA4Mk9SNG1hc2gwWkdGYys1K0FNR2lXb3d4RkRrZUFzeVV4MmtXSWFHWVJtUHZ1MSt5NmQrZUxIVDU4ZEFWSTh0SldXWmVhMnExaVYrNlJMN3hsNjlmVTV0dHlhVk0zMStESXRxRUNsdVk3U2FjSWNQWXhteW9zM2NEYTBtSElreDBRNURLL1lQK2hXVlQxVjg1QUlpVWMyUVJGSTRpTnlTL2FTTHZlanE3VU5pVExScjNvVGwxWmltQWd4SlZLc2tvWm1WNVFXQVp5eWtIZmQyczBvUFllKzY1Wk9PZDdaUjN1Q1BqWklMbFNRMHEydU5oUjJaSlFjN0FWSjBaL0tWajltekxoZVB4VVM3ZkxITlAxenFXR0oyVEpZenR0dW82b3RYMFhiZHY5S01mK0RPV21OUmh4b0FtRkZORk55V2JYSEsrYnJYZ2JyRVd5NDUzVFp6aitQTE9OZXluZk14OXB5eFBkbnVEdmM0elAzWU1tUkZaVXZnTjR3ek8xVUpKQUhWS3NhTEFVdHhncjNDdUNwdElTcGJMbm5FUFpZaHExZWI0dDZXbnBTQXgyS2ljYWI5cXFOMGtxZ0xOT2sxaHBOL3Z3S2JKQVUwUm1EVlBXTHVQa3dmYVhzeEFDQlNsZ1lZMjVJcjZscXhPWHRwME1ucDZ2YXJxRzd2UkZsK05oSjEwVml6LzVoZkpSTG5RcHh6bnNkZk1QTlhkY1lOemNBNE1hMkZoU09HWGFacUlxd09XSm9US3VwYlVYbitFaEoxYzJYTGNDNmwyTDNrUFd0eklRNU1Uc3hqTWRHSWlkUUdsR3QyQloyeGYzSUVrVXgwaXNBQkVUTjRkeGlwajg1emFiUDdMVXFnUyt6RGkrLzhEZWtML0t0cXRwbDdYRDVMQVM0akpqcGwvK3ppOGhwS1RCY0o4TFIwUHZEdGgrZmdyY0pWS0s5cFFtT25PYVRsVTNkb05lSGo2Vk5TSkNmTWpIUDFPd3NkTjJHNnBCMGs0bCtxK041MG1nei91dmtseW11YWZOb1Y5eHl1TGlvQ3hYbVpQbXRJY2lCbjUvRUdTWkJlZFQ3MkNKSU1KYVphUXVCM1ZPbmRJbVo3TGRxZWFGcVZ0aEFGaGxUY0diWmkvNGZuWExaM3VlZ1Nid1Y5WndVQU1QT0g5VHVMWEtxeEhva3FodlFxUVdnTVZMaTdYYkhuYXAxblNXWExKVlRVdHlyeVpaU0VqUVNQLzBaNEJBTU5PemFkWmVhL0tuWFJJeHRXSWpacU5yWWVQWTN5bXFZWlJ3b3ozais3WStNVjkzYXZxVTJCZVJzVDVXS1NHNlFuZ24ycFZMZDN6c2haTWc3YnFFcjFLMjhkUGhNeEdTV21yUUx3eDJDdUtoQkJZZzVHUkVnaEFTODE3Q2pjNDYzUDU0eTQvc25wNXZpczNHOFMwUks1RjU2NWxBRE12TGRoWjVIUlYvL0VxVHRtTXBRY09rR0VsWXByTnAxZ1BsbTNvM0FsaUh6K2RoTm5Zb2hZNFBDZk1XUFMvL2ZjTjJCdUpwNzEzRVNrQUg0bWU1ZVdIWmdYYmhPYVFZN0hETnlmWUhUZERSdFpjdjdYbS9zbU85V3YzRjNUdGsyZlcxbVZ3b3h6d1dzM1BXRHd4MVpXcGZsRENoQmdlU0RWWkFwN3NKZjNFYWhJbm5yVGhpTjFVazhoakVhL28wcFpkUlBETGxNaEVkNUFFSDdPVklBWlZvQmZxTjlaOUdhZ1kyVVhsREoySGZ5QlFIZ2ZJSG5wdFpDRCsyeWdaNmIwRCtrQTBMQ3o2Q09TS0ptQmZXTy96TXdBTTZ4ZzNrOFNKY3NsQlZDb0JQblVUdE44dFlBeUJ2K1VpRUpRalBFRHpLTWdxaGkxb2ZUc3JzTHJ3WXBUdERhYllUejRIVUhBcnFsK1RBb1lmeEZZVlZ4clhOK2xsTnlRS0o5ZWNqQkZ4Vmo5L3dmclRJQW55NDdFaDlsRzgwQ1V4MERtLy9Tam1IemhmbnA0MTM4Qm9Zdlc1MiswWk5FQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQVhOU1IwSUFyczRjNlFBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzT0d3QUFCRzFwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMG43N3UvSnlCcFpEMG5WelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0p6OCtDang0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBuWVdSdlltVTZibk02YldWMFlTOG5QZ284Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SjJoMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1uUGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZRWFIwY21saVBTZG9kSFJ3T2k4dmJuTXVZWFIwY21saWRYUnBiMjR1WTI5dEwyRmtjeTh4TGpBdkp6NEtJQ0E4UVhSMGNtbGlPa0ZrY3o0S0lDQWdQSEprWmpwVFpYRStDaUFnSUNBOGNtUm1PbXhwSUhKa1pqcHdZWEp6WlZSNWNHVTlKMUpsYzI5MWNtTmxKejRLSUNBZ0lDQThRWFIwY21saU9rTnlaV0YwWldRK01qQXlNUzB3Tnkwd01qd3ZRWFIwY21saU9rTnlaV0YwWldRK0NpQWdJQ0FnUEVGMGRISnBZanBGZUhSSlpENDVPRGN3TXpZd1lTMDNaalJsTFRReVlUY3RPVFZoTkMwNVpXUXpaR0kyTURrMFpEQThMMEYwZEhKcFlqcEZlSFJKWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1ppU1dRK05USTFNalkxT1RFME1UYzVOVGd3UEM5QmRIUnlhV0k2Um1KSlpENEtJQ0FnSUNBOFFYUjBjbWxpT2xSdmRXTm9WSGx3WlQ0eVBDOUJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBnb2dJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2xObGNUNEtJQ0E4TDBGMGRISnBZanBCWkhNK0NpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtDaUE4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBuSndvZ0lIaHRiRzV6T21SalBTZG9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THljK0NpQWdQR1JqT25ScGRHeGxQZ29nSUNBOGNtUm1Pa0ZzZEQ0S0lDQWdJRHh5WkdZNmJHa2dlRzFzT214aGJtYzlKM2d0WkdWbVlYVnNkQ2MrUThPemNHbGhJR1JsSUZObGJTQnViMjFsUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2tGc2RENEtJQ0E4TDJSak9uUnBkR3hsUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenB3WkdZOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZjR1JtTHpFdU15OG5QZ29nSUR4d1pHWTZRWFYwYUc5eVBsUmljaUJYWldJOEwzQmtaanBCZFhSb2IzSStDaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLQ2lBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwbkp3b2dJSGh0Ykc1ek9uaHRjRDBuYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THljK0NpQWdQSGh0Y0RwRGNtVmhkRzl5Vkc5dmJENURZVzUyWVR3dmVHMXdPa055WldGMGIzSlViMjlzUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nqd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2p3L2VIQmhZMnRsZENCbGJtUTlKM0luUHo2YzExUDBBQUFPTGtsRVFWUjRuTzJjZjFEVFo1N0hYODhYL0VHQ3hEWXQ2QjJFbWp0aXAwZlVYWHNqbk5ocndibFdFOUZlaXl2eFJtKzNLajg2ZStwMXBwUG96ZFR1NmNydTNGUzVyZUR2YWQwVDNNSGJWaVNvTjhMMUNwYnNUTDBWWStjcXRIZ2l1NHRzOFV3UUVaRTg5MGRJbHZETEVCSzBjL2YraCtUelBNL24rWHcvUE0vbjEvUGtLNWhNTFB0aG5DYTZOODBqbFdRaFphSkFKRW9oRTVFa0NrUWlnRVMySVdnVFVyUkpaSnNVb2swUm51dXVCOU1jblBtWmU3SkVGWkdlWVByeU41T24wcjlTS0RKYlNsNFFRa3dKaFkrVXNrOGcva01pSysvTDZNcDcxZnV1aDF2V3dZaUlZdFN2Rk14VG9qMXJCR1FMeEo5RllnNkovRUpDcGNjank3dXJEenJEelQrc2lvbDd1ZkJQeFpUKzNWTHltaEFpNHFzUlFFb3BCZUtrUi9iL1ExZjFvYVp3OFEyTDhLcVhOODJlTWtXOEs2WDR2aEJFaDRQbmVDRWxEd1R5YUY5VTM3dDNLNC8rZHFMOEpxYVlWWDg3VTNOL3VnMkZId0l4RXhVbVRPaEJ5bjhHNVNjdWUrbi9oTW9rWk1YRUxkKzBDQ0UrRWtMTURwVkhKQ0dsL0IxU3Z1cXVQdmlyVU1Zcm9RelNMTTlmalNJK2ZWeVZBaUNFbUkwaVB0VXN6MThkMHZoeDljN0ppZExjMWY0RXdWdWhUUGJJSU9VL3VWUzNyRlJVOUFjN0pHakZ4TDM4eHBOaXlwUUtJRE1rNFI0OWFtVmZYNDc3M0pGYndYUU9TakhxVndybVJVZkpTZ1RKRTVQdEVVTnkvVUcveU80K1czcjVZVjBmYm1OZTNCRWRGU1ZMdnZWS0FSQWtSMFY3OXZIaWpvZUdGQTlWekF4MSsvdENzRGc4a2oxNkNFVEdESFg3K3cvckZ6VldvOGFjbHkrRWVDZDhZajBlRUlMbnB4c1czdXh0dXZqNXFIMUdhOUNzMlBSWDBpT3FRazM2SG5kSUtmdWtSN3pVZFdiL2haSGFSOXhLY2VhOEZEeEt4V1FvUmFOV3NYdEREcmRQbDNMOXhIdFljMDJSbmhJQUljUVVvZkJSekxJTmlTTzFqMmlFQk9JUWdyaklpZ2I1MlpuWUxHWUVVRmg4REYyOGxzS1ZXVmlXcG1NN2RCSzc0MUpFNXhlQ3A2ZEdSZjlMRDd3NHJHMG9JZGFjLzJJVS9Ic2tCY293R2lqWnNnNWR2SmFpY2p1bHAycHhkZDhGUUplZ3haWnJKamNyalhwbkU3YkRKM0cyM0lpa09QVERTM2VxOW44eW1EYk0rRTQzTFB5NVFPZ2lJWUF1UWN2eDdmbFlMV1l1T0p0NWJjZjcyQjJOOVBiMStmdTR1bnV3T3hxcHY5TE1rbmx6ZVdmOUtuUUpXcHpYMm5CMTkwUkNMQlNZMDl2MCtRZURhUUVyWnNhS1Rhc1VxWHdVN29rMWFoVzdONzZPSlN1ZEs5ZmFzQjZxb043WmhFYXRvaUQ3cFdIOWIzZjNVRjdqd05WOTE3dXRjczNFcVdNb1BWVkRVYms5M09JQklEMXltYnY2d0ZuZjl3QWJvM2pFanlKUjA2djY4VmFTRTdRVUZoK2o3SHhEQUgxbXJJcldqczZBL3NZNWljelhKMUd3OTBQS3pqZFFkcjRCcThWTTRjb3Nac2Fxc0I2cUNMdU1RcUVJOEN2R3I0WTRVLzRhSVNnUDk0UkdmUkoxeGRzd2I5dER2VE93d0hiN2RPbUlkS3ZGakRYWHhNd1ZCUUYweTlKMFNqYXZHMFlQRnp6Qzgyclg2WU1mdzJCM0xlU3FTRXltVVk5ZHY4cElUU0UzS3cyTldvVkdyU0kvT3hQam5CRTlLSzAzTzBla2h3dENpalcrejk2dHRIRFRGQ0hGc3NpZkdReUgxV0lHb0xXamMwQTVqNjRRS0NTditENHJBTEd6bGNXVEViZU1oTFc3RHBDODVpMHVPSnNwcmF3bGVjMWI3SytzZlJTaWdCQ2F1R1VGYVRDd1lxS2tmSVhKS2VvUGc2djdMcTd1dXhUcy9kQlB1eDBodHh3TWhPSlpCVGdVQUNsRVJPeExNRERxazRiUlpxcGp1TkVSVkQwcDdQRHBRcG14WXRPekF1WStDaUhLYXh6czN2QTZscVhwZnBwbGFUcjUyWmtjcjJrWVkyVGtJR0R1akJXYm5vMm1YMGtMclNRZU92S3pNMW1ibFk1UjcvVStKWnZYK2R0S05xL0QzZDJETmRlRWFkRjhTaXByS0s5eFRLNkEvVXBhdEFLekpuUE9vbzA1V0xMU0thdHBvS2pjanQxeGlkSXQ2LzNLOFFXQnByUUZtTlBtVTdwbFBVS0lnTUF3MGxCZ2xpSVZPYW1LTWVxVEtLbXN4WHFvd3A4OTExMFpmckw2MysyL1o4L0pjMXk0MG94NTBmekpGQkdweUZuUlJIakZhTlNxZ0w5RGtXRTBVTEo1SFlYRngxaVM2djFjNzJ6aVI5Ly9hOXB2dWJ4alk3MWpkUWxhUHk5Zk5oNGh6RklFSWlLSzBhaFZXSE5OSE4rZUI4RHg3WGxZYzAzRXFRSUR1QXlqZ2RhT1Rzck9OL2hkdGk1ZXkydnYvSXczaTQ4QkVLZUtvV1RMT3Y5MnUzeGtaMFFMV2dJeEsxckNySEJITUxsWmFSUnRYSTBBYklkUFVucXFob0tWV2RoeVRjU3BZM0JlKzBOOXhkblNoaTVYaXk1QmkzR08xM1g3a2txTldrV2NLZ2FqUHBHWnNTclc3anBBdmJPSmdwV1pXQzNtaUJXMEpNd1NHbFBlYllUUWhJUGg0QUxVL3NwYWRwZlpBNWE4UnEzQ1pqR1JuNTFKYTBjbmhYdVBVZTlzd25sa0YzYkhKWFR4V2pTeEtreTI5OGpOU3NObU1UTlRyYUtrc3BhaXNxcUF1U0phMEpMU0ZSYkY2QkswbEd4ZVI0YlJRTFdqRWV2aENscHZkcUpMMExJNE5ZWGtlQzNYT3pxNWNLWFpUeS9ha01QeXRQblVPNXR3ZC9lUXFrOUVGNitsdk1aQjZweEVqUHBFeW1zY1dBOVZqR2xQTW93R2JCWXppMU5US0t0cHdIYm81TVR0ajVRdUVXZk8vM0lpQWQ3dURUa1VyTXdjVm9DeTVwb29XT2s5emIzUmNZdWsrQ2NCS0QxVlMxRzVkeVZsR0EwVWJjd2hkVWcyZmVGS005WkRGVGhiYnFCUnF5alo0bFg2U0FtbXIyd3h1S0JsTzF3eElmY3U0V3EwZ0haQ1ZJd3VRY3ZhcGVuRENsREh0K2N4VDU4MGpHNVptazdSaGh5TStrVC9BMlg4M1M0LzNkWGRROEhlRHdQcU16YUxpWG42SkVwSFNDd0hHK0N5OHczWUd4b3BXSmxKeWVaMS9QTFR6N2wzdjIvWW1HQWdvRjJSeVBhUVJnT3FhZE53WG1zYjl2RHo5RW1ZQmg3OCtQWjhMaC9aeWZIdCtkUTdtekJ0MjhNOGZWSkFHbEIydmdIbnRUYU8xelFNSzFvWjlVbTBkblJTVkZaRjZhbGE2aTVmcGFpc2Fwak5BVzlDNnFNUDlYN2pnVVMyUitOZE1XRkR3WXBNN0k1R25DMDNxQ3ZlamhCUVZ1UEFuRGFmNDl2eVdiSjVGM1pISXdVck1vTmU3cWx6RXJsOFpDZTZlSzJmNW14cEM2ZllROUVlTFR5aVBaeTVrbEdmU0ZHNUhhTStLV0RMMUR1YnFQcnhWb3o2SktvY2plUm1wUVhOMDkzZFExbU5nM3BuRTY3dUhuVHhXb3o2UkgrdUZXNElqMmlQOWtCN3VQVGlLeUc0dXUrT1dvblRxR1A4WHNPb1R3ckt4ZnEya2cvT2xodllIWmNpRnVSNW9EMmFLSThER1I3VitKUXh1T28vTkNVSWJBdmREb3lXWW9RRlVSNkgwblg2NEpjU3JvYVRiK3ZOVGxwdmV1T1d0UU5iWm0xV21qK09HVTlSdStSVUxZdFRVOGd3R2dMb05vc0pkM2RQMkcyTmhLdGRwdzkrT2JCVTVObXh1d2NIWDVMblE1Mnp5WjhBYW1KVjFBM3hPRVA3RDRWR3JTSk9QUjFYZHc4bFc5YjV0NnF2bUhXNTVjWkRlWXdYUXNxUHdYZEs0T0VzQ3BzbnlsUVhyOFhkM2NQaTFCVE1hUXV3TEUzM3J3NHBKUVhabVdoVU1WUTVMdUVlTUtLandSYzRBbFE3R3RFbGFLa3IzdVp2cjNZMCtzK3NXanM2dzVZelNZL3lCOFc0YjhvYXpTeGNFMDBOWnFwamlGUEhZTi85OTl6b3VFWDFnUGZ4dWRyeUdnZm05QVgrQjU0NWlvM0pNQm9vV0ptSjdmQkp5czQzK0kxMWh0R0FVWi9remE4R2pMWlJuNFF0MTBUSmxuVWtyNW1nWWlSdTk1bFNCL2hXek1XRGZkS2NkMWJBOTBMbHFVdlFrcCtkeWY3S1drb3FhLzBySlNuK1NUS01ob0FvV0plZ3BUQTdrL3pzeklDK1B2anNTZW1wbWdENk42NDdhTlF4T0Z0dWtQMFgzK0c1Wi82WTA1LzltcExLV3BhblRieVlKWVU4NC91c0RLSitQRjVHRC9yN0J4SytKUCsycUhJMCtoL1VsK1A0bFBMVzZtWGNQbDNLRDVhOTREOS85c1lrU1Y0RnBxYU1hVE9lbmptRGpOUVVBSjdWelNZak5ZWDRKd0tQdzN4SzdibC9mN3lQRTZBRC82RysyNzcvaE1hVXR3MGhqTUh5dVg3ekc2NWNhNk91ZU51d1VEN0RhTUNTbGU3ZkRnQ2ZmZEZNVWJtZFgvM1gxLzUrMWx3VEdVWURGNjQwazV6d0ZKY1A3eHpWMDlSZHZrcmRaYThEL2VtSmFuNTZvdG8vRjNndkNXUVlEWlRYT09pNmV5L1l4d0JBU2o1ejIvZWY4SDFYaGpTK1BSNW1mUS82TWRuZW83RDRHTWtKVHdGZ1dqUS9JTVlZSE1BMWZQRVZSV1ZWL0dmVGRYOXdscHp3RklYRnh6RFozc1A0eG5ac2gwK1NQTEJxaGtiSHJ5NVp5TzNUcFFFMDcxV1NBWnNWcThLOGJVL0E0VjJ3OEFpMkQvNGVjSEdvdC9uaVY5TU56NzhFUERNZXBzNldObS8yS3dSdkxIc0J5OUkwa1BEbno4NmhyTVlSRU5UbFpxVng5TzAzV0dLY3k1NS8vVGZXN3RvZnNFSSt2M3FObzJmcWlKazZoUjNyWDhXVXRvRG0zOXdjNENINHhuM0h2enF0dVNhT3ZyMkI1QVF0VzB2TDJicXZiTmlWa21BZ0plZTY3UHQzRHFZTnEyck9XSmEvV0ltaWZ0emNCNkJScXlqYW1PUC9iL3ZzUzRiUjROODJ3UlNnd0d1a1M3ZXNaM0ZxQ25aSEk3YUJBcGdwYlFHN043N3VyKzROdnFvV0N2cEZmK3FkMDRlK0dFd2JzZHdiWjhyN1dBaXhNdVNaOExyUm9vMDVMRTVOOGRaZEJ1eUlyd0ExSG1RWURaUnVXVTlTL0pNNFc5cjgxYjNkNVZVVHZob2lrYjl3VngxWU01UStvbUppVGZtcGlwQ1hCR0xNQzlMQlFELzdhZlIvRkUvTGJ6dG8rZDN2SjhScm9lRVpucGloRGdzdkFJbnN2KytKL3BPUmZuZzY2Z0ZCbkduVEZpR1VQUk9lL1RHR2xKNnRidnZCdlNPMWpib2llcHN2T3FZWkZqNGhFTUVYVHI1RmtNaGl0LzNnanRIYXg5d3F2VTBYejAwM1BKOEtQQmQyeVI0bEpCKzU3UWQrTUZhWGh4VmlwT3ZPdmI4Qkh2cjdubThMSkRoYzNmY3MzbytqNCtFVnFrOCt1SGNmbGlObFJJdXNrd0VKWDhtZUtET2ZmUERRc0RpbzBsMVAxZjdmeUFjUDVrdkpaeE1YNzVHaGxyNitSVjAxKzRMeTcwRzc0OTZ2ZjkzVEcvZmRuMCtid2RNQzhYem84ajBTSEhaVnpWcmQrL1dlb0tQQWtNN3pOY3Z6ODZRaTk0VWp6b2trSlBLK2xCUjIyUThjR2UvWWtDODZxTTE1V1ZHSVh3Z0liMjB4VEpEUWljZGpDdlVINlNIL3gvdWFMbDZiT3ZlN1IwRk1CL21keDJYMVNPUjlKQ1ZTa1RsZDlvUE5vZklKeTlXWTZlWk51cWtvTzRHMUlzUmYvMDhVVXZKQUNEN294Zk9QOTZvT3RrNlVYMWp2RE1VdXkzc3VLb3AzSi8wMUtVTDhVdllwVnZlNWtxL0N4VGN5TDlZeDU4MVg0SHYvLzJLZE1UQjkrWnZKVThXRGJJSElsc2kvL0QvOUtxWlI4UzE2ZWRmL0F2R1UyNks0WTRadUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQVhOU1IwSUFyczRjNlFBQUFBbHdTRmx6QUFBT3hBQUFEc1FCbFNzT0d3QUFCRzFwVkZoMFdFMU1PbU52YlM1aFpHOWlaUzU0YlhBQUFBQUFBRHcvZUhCaFkydGxkQ0JpWldkcGJqMG43N3UvSnlCcFpEMG5WelZOTUUxd1EyVm9hVWg2Y21WVGVrNVVZM3ByWXpsa0p6OCtDang0T25odGNHMWxkR0VnZUcxc2JuTTZlRDBuWVdSdlltVTZibk02YldWMFlTOG5QZ284Y21SbU9sSkVSaUI0Yld4dWN6cHlaR1k5SjJoMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZNREl2TWpJdGNtUm1MWE41Ym5SaGVDMXVjeU1uUGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZRWFIwY21saVBTZG9kSFJ3T2k4dmJuTXVZWFIwY21saWRYUnBiMjR1WTI5dEwyRmtjeTh4TGpBdkp6NEtJQ0E4UVhSMGNtbGlPa0ZrY3o0S0lDQWdQSEprWmpwVFpYRStDaUFnSUNBOGNtUm1PbXhwSUhKa1pqcHdZWEp6WlZSNWNHVTlKMUpsYzI5MWNtTmxKejRLSUNBZ0lDQThRWFIwY21saU9rTnlaV0YwWldRK01qQXlNUzB3Tnkwd01qd3ZRWFIwY21saU9rTnlaV0YwWldRK0NpQWdJQ0FnUEVGMGRISnBZanBGZUhSSlpENDBZelV6WVRVMFl5MWlaR0kzTFRSaFlUTXRZVE5rWmkwMU16bG1NV00xTkRFNVlqTThMMEYwZEhKcFlqcEZlSFJKWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1ppU1dRK05USTFNalkxT1RFME1UYzVOVGd3UEM5QmRIUnlhV0k2Um1KSlpENEtJQ0FnSUNBOFFYUjBjbWxpT2xSdmRXTm9WSGx3WlQ0eVBDOUJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBnb2dJQ0FnUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2xObGNUNEtJQ0E4TDBGMGRISnBZanBCWkhNK0NpQThMM0prWmpwRVpYTmpjbWx3ZEdsdmJqNEtDaUE4Y21SbU9rUmxjMk55YVhCMGFXOXVJSEprWmpwaFltOTFkRDBuSndvZ0lIaHRiRzV6T21SalBTZG9kSFJ3T2k4dmNIVnliQzV2Y21jdlpHTXZaV3hsYldWdWRITXZNUzR4THljK0NpQWdQR1JqT25ScGRHeGxQZ29nSUNBOGNtUm1Pa0ZzZEQ0S0lDQWdJRHh5WkdZNmJHa2dlRzFzT214aGJtYzlKM2d0WkdWbVlYVnNkQ2MrUThPemNHbGhJR1JsSUZObGJTQnViMjFsUEM5eVpHWTZiR2srQ2lBZ0lEd3ZjbVJtT2tGc2RENEtJQ0E4TDJSak9uUnBkR3hsUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenB3WkdZOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZjR1JtTHpFdU15OG5QZ29nSUR4d1pHWTZRWFYwYUc5eVBsUmljaUJYWldJOEwzQmtaanBCZFhSb2IzSStDaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLQ2lBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwbkp3b2dJSGh0Ykc1ek9uaHRjRDBuYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3THljK0NpQWdQSGh0Y0RwRGNtVmhkRzl5Vkc5dmJENURZVzUyWVR3dmVHMXdPa055WldGMGIzSlViMjlzUGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nqd3ZjbVJtT2xKRVJqNEtQQzk0T25odGNHMWxkR0UrQ2p3L2VIQmhZMnRsZENCbGJtUTlKM0luUHo2QXQza1hBQUFNQ2tsRVFWUjRuTzJjZjFDVTk1M0hYNStIZFNITllqRFkrSWhwd1F0eHZUWUdMSGNpaGgvYjNwVGl4ZEJjUldyVE9tTW1Fa3lIbkptNTNnMjlXRjJSVEdqdi9yQ1JuS0swWmN6Tk5MRjR5YUEzUldhU0FCSlJyMDR4bXJuZzdVM0I4WEM1QzFjb214Rlc5L25lSDh1dS9OaGxsMlYzMFY3ZU13elBqOC8zOC8xODMvdDl2cC9QOC9rOHp5UEVFYm4yMXhZbkppU3VGOE5JTjBRZUZ1Umg0R0dVOHY3MzRqb2kxNEhyQ25WZFUrcTYwclQrY2MvNHVmUDJ2LzVEdkd5VldIZXdvYll4ZlpIaCthWlNxaFNSUW9GRmtlaFJjRXVnQTZWYWJpV1lXczd1M3RFZmJWc25JeWJFRk5pUFBxNkpaeXNpcGNDWFk5RUg4QkZLdFNpUlgzYnVxYndjYmVWUkpjWm1iOHhVMnUxWEZiSlo0akFiQVJRb1VUUjdsT3p1c2o5L05WcDZvMko4d1NzTnk3WGJhaC93TENLbWFPaWNNNVM2clVSKzdqRk0rejZ3UHpjd1gzWHpJc1ptLzBXS1IzUC9VRkF2Q25MZmZJMkpCaFRxSm9yWERMUHg0NjRmZnYvM2tlcUptSmo4bW9aY0RkNFdXQjZwamxoQ3dRMEQvcXByVCtYNVNOcHJrVFFxckRsVXJpazY3MVpTQUFTV2E0ck93cHBENVJHMm53T09IMDhvL1BmZi8xaUV2NG1rczRXQ1F2MWo1K29IcXlrdjk0VGJKbXhpOHV5TkR5N1NidjlLa0s5Rlp0N0NRcUhldTJXWXRuVGJkL3h2T1BKaEVWTmdQL3E0cGhrdFFQcThyRnQ0OUJ1R1ZuckdYdkZoS01HUWE0ek5iamVKNXZrbjduMVNBTkkxTVY2MzJlMGhRNHFReEJpeXZGNlFKNkpqMTEwQUlkK1E1ZldoeEJKbU8xbFFjM2luSnJJM2VsYmRIUkRoejc3NDFVMkQxOTQvOVp1Z01zRk9GTzV2S0VaeEt0S2J2cnNkQ200cGpLK2UyZlBDQjRIT0J5U21jUC9oUnpINGpZZ3NqcTE1Q3dzRi82TVoybGZhN1JYWHA1OEx2QWdwT1NwQ1hFbkoxRk5wck5nODVaaHplSlN0QjM4WnN6NEZQbTlveGo4RHR1bm5acXd4K2ZzUDJUVGlzNjVZa3N6ODVKbU42Q25KUEdqNUhPbExsOUI4L2pJOS9UZHdEQTZ4THZNTDlGeTdRVlZ4SG1hVENjZmdVTlJ0RU1qNHd0ZWU3TGoyL3IvMlRUNCtZOFlrR05yK2VDUU1MRWxtRG14N2l1VkxrbmxVWDhyOWlXWmFMMTJscWZPaVgyWmp0cFVEMnpZeE9PSWkzNW9CUU91bDNxamJvaW5OenJSWk00V0NndjBOVDJ1S3Q2UGU4elJNSm1YWHNaTTRoMGZKdDY2Y01XaExrcG5zOURTNmV2c295YkpTWFZwRVhVdEhUTWp4aU5yWTlhT2RyYjc5S1ROR0ZEVnpVV1pKTXJPOU1JZVNMQ3VXSkxQLytFdHZuS0tuTDNoS3BLcDRBNWw2S2p1T25zRGg5RjRlUGYwRFZKY1drVzlkaVNYSmpITjRsTllQcjlKODNwdWNhNzNVaXlYSlRIVnBFWTdCVC96dG9vVUVSUjNnSjhZZjRCWFVITmtxc0dZdXlxcExiUlNzWGtsVDUwVmVldU1VTDcxeEtxeDJ6UmU4ZzlVZlNBWWczNXBCWThWbUh0V1gwbnorTXJ1UHQ5SFYyOGVXM0RVYzJQYVVuL1RNWmFrTWpyaWlUb29Ya2xXd3YrRnAzNTZmR0ZIcTZjQU5ncWpCTzZDRHA4OTZGOHkrZ1JtejVGdnJIdU5QVnp4RTJwTEZiQy9NQVNBN0k0MlN4MWZoR25PVHVTeDFZaGJZNk9ydDQ3a2pKMmpxdkVoWGJ4LzFiZDA4ZCtRRXlmY2xVbHRlRE1EYWpEUkdiNDVUbHJzR1M1S1pQM25vUVo1NUlodUF2OHkyOHBXTUZSR1NNakVtZzYyK2JRMGdwNkZoRWFpTmMxR2lhVjVPdTNyN2dzcDg2OCsvekpkV1BNU0tKWXZaWHBTREpzS3poVGtVclBhdUo2MGZYbVY3WVE2ZmpydXBienM3bzcxemVKUlhXOXJKVGs4alUwL2wxWloySElORFZCWG5rYWt2WmVVa1lqWm1XMW1ia1RhWEljeUFDQ1crYlJQQWZmOXRQQ0dpUlQxdStkN3JiL20zYmZ1UCtMZC8zZFByOXo2UDZrdjViZDhBcmpGM1FCMitXWmlkbnVhZm1TVlpxd0I0OTRxRGQ2ODRBSGl4cVNVYUpqOWdzeDlkMzI2dk9HY0MwQXdwaWFhTHJ2cDZIcTd4OFlEbkhsbVd5bStuWFhMTzRkRlo5VG1IUjdFa21xY2NtNjBQZ0JNWFB1TE14NzhMMCtJN01NVHpOT0FsUm9RNXJTK2g0QmdjQ2pyWTVTbUwwVk1zV0pMTXVNYmNqSTZOc3pZamJVcjhNaG1XSkRONlNySS91Tk5Ua2tQMnNUWWpqYVhKbjR2STlna3VxazAyZThOcUJkYUl0QVJCNjRkWGc3cHJTNUtac3R3MWxHUloyWDI4amVZTFZ6aXdiUlBaR1drQjIvaldJSzg3dDFHU3RZcFB4OTAwWDdnY0srOWt0ZGtiVm1zZXpWZ2ZBKzFCVWQvV3phWi9hUEo3cFo2K0FWb3ZYYVYyUzdGLzdRQXZnVlhGZVpUbHJ1SGc2VzVjWTI3V1puaUR2U2QvMGhRalVyendhTVo2azZEcE1lc2hDTXJXZWQydEw1NnBhMm1ucWppUDZsSWIxYVUybk1PajZDbkpmRHJ1bmhMcC9xTGpJdFdsUldUcXFURWxSdEIwRTBycFNGeXFxWDQ0UjF3QVZCWG5VZGZTQVhoblV2T0ZLK1JiTTdBa21uRU1EdEhUZjhkYldaTE1sSzE3alArY1pXMkpHcFRTVFNCeG56RytHVkJkV2dTQWE4eE52aldEdXBNZC9sc0E4QktYblo1Rzg0WExsSzFiZ3dqc09uWXlxR3VQSGtUWEVPSk9ESGpKcVd2cG9DVEx5c1pzSzRNakxwNmRpSTdoemlMOTZiaWI2bEpiSEVrQkJOMGtLRDFPRHliTVFPdWxYcHdqb3ppY241Q2Rua1p0ZVRIdFAzcCtpc3l1WXlmSjFGTnhEby9HaHhSQVdLQkxhVEo4THJxbmY0Q21qb3ZvS2NtVVpLMmlxZU9pZnkySzVVSWJHS0l2ekNNYkFlQWFjOVBVZWRGN2s1bTFLbWpBRnk5b29Kd0xhc0ZkQ2VYVUZQSVpNZE9nRUtlRzRqTmlwa1BoTkhrdnBkaDdKVjk0SHk2bWU2ZEFjQTZQVW5leVk5WTBhbVJRVGhNUyswc3BVMCtsTEhjTjlXM2RJVXNnbWN0U3FTck9DeXROV3JidU1hcStuc2VPb3llaVphb1hJazZUd25CS1pBOVdoUTFMVWlMQWxLZzJGTUtkQlFlMmJZcklwdG1nTUp4YWdxR2RpN3JtZXh3SmhuWk9hN2RYZmd3cStvV2FTY2hjbHVyOXI2ZUdMZXRMU0VWTE5ueW8zblo3NWNjbUFLVm9GWWx1c2dxOFJOUnVLZlliM2xpeG1hN2VQdXBhMm1lRTk5TmwzM3p4TzdSZTZxVytyVHVnN09TeWlrL1dkNmMrSHlqRk96Q1JERGMwV2hNVXUrYXRkUnBxdHhRek9PSml4OUVUM3NTVW5zb3I1ZCtncW5nRGRTM3RmamxMa3BuYUxjVTRCb2Y4c3RrWmFieFNYb3hyekUxOVcvY1UyUVBibnFLbmY4QlBzRS9XT2V5YWQ4U3NxWVIzWUtKOGN2TWhlUmNZbVpmR2FjaTNacUNuSlBQeThkUCtYOXpoSE9MZzZiTlRNblZlMlpYb0tjbFRabEpQM3dBSFQzZlBjUEg1MXBXSUVGQjJlMUVPODRGUzZnL3Q5b3B6TUVITXhjcktXMHJkS1UvT0JYcEtNbVc1YTloZWxEUEZzTXhscVZ6cXZ6SGpNdkM1Nit4Sk5TRDlBVXRBMlo3K2dZQ3lEdWZRREZubnlLamZuc2dodi9adCtmMjBFbmtuRWxXTkZadDV0aWlIdGVscHJFMVBteGpnT0k3QkliTFNsMCtwYWNPZEJYT3lPM1lNRHZISVJGVXlsS3h6eEJWUTFsZnVuVTkyYnpJSGZtTE83SG4rVFFWemZyM0ZsNXplZGV5ay84L2g5S1lsQjBkYzFKWVgzNms5Njk3Z2JYcjFzcWQvd0orUW1pNDdQZmJwNnYwZEl0NUlPcFRzWEtBVVo4L3NlZjVOMy82VXRJTWg2dThTMUozcEZBNkNMWGF1TVRjdkh6L05LK1hmNE5UZmJzYzE1c2FTWlBaN3BYQmxwK3QzamJuWmRleWtYOWFIUUxKemdhRVpMMC9lbjNHVFZGalQwQzVRRkVxUkpzSjd1eXRDUHZKaFNUS1RxUzhsYzFtcU44RWRwbXhQLzhDc0NhclpaTGNYNWpCeWM0eTMvKzJqVU1NQVFDbDF1blB2enBMSngyWWtxaFRHeTRMV0ZVcVpvUlNYK205US9WUVI5VzNkakk0Rkw1Y3FwZmdQNXljQVpLWFAvbDZHVC9iK1JIUEVzbnFLaFpHYlk2R0c0SWRIdEJudlJnUithblBmNFhkRTVKdWhGSHFMWWh0bXVOKzdBVDl0L1NDc0dhTVViM1h1cmR3Ni9YaEFZbXoyUTQ4cFRlc2h4QVBTZndUdzNOSVNIZ24wNG1uQTIrcDIrd3RYRFBoQjdPMWFXQmp3ZzJCdjR3YWRFZGZlUDNVdTNiWnBpWWpFdGJZZEx5aWxmbnBtNzA1N3NQT3pwKzZVa3NLYUk3OFNZZk9zY3ZjYWxIcTdZMC9sWmtSVU1KSFpNMVFpU2xQbTd5bEZ5UGQ3N2hrb2RVNVU0ak96a1FKaEpudnphZyt0TUh1MGM0ai9Nd1AzSmhTT200dHVyYi93OTFVaEszaGg1VFM3ZDcvd1gyNlZrS1VVTTU4Z3ZFZWdVTys1VlVKdU9LVEFITXNET1EwTmkrNGZWSzhKc2pNeTh4WU1qUjNHalVyc2RpUGNCaEhWVFFyM05WU0s4RHAzZVp5akZHNVEzKy9jdS9ObmMyMGJjVUdwWU4vaHY5Q0V0MEJDSjNJWEJHcklnendaMXhmU0FjN3MzZm11R0xKYXdXdmVYK2J1Z0ZLNFVlcWdHTEk2VWxJZ1NpWElKL1kyZk5Ha1VhdFEzeFdSMkJhcGdrR3AyNGcwM2Zhdy80TjlsZGZtcXk2cXRka0MrK0V2YVJyNzR2MlpGQlQvb3FtRTZuYjdEa2UwOU1iRStQeWF3MWtKaW05LzltR2RXYkNodGpGOWtlZDJLU0tsQ29yK1gzK0tLUmp1cFk5My9SOHFqQ1FmZjZkcmtBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJHQ0FZQUFBQnhMdUtFQUFBQUFYTlNSMElBcnM0YzZRQUFBQWx3U0ZsekFBQU94QUFBRHNRQmxTc09Hd0FBQkcxcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBuNzd1L0p5QnBaRDBuVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtKejgrQ2p4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwbllXUnZZbVU2Ym5NNmJXVjBZUzhuUGdvOGNtUm1PbEpFUmlCNGJXeHVjenB5WkdZOUoyaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6RTVPVGt2TURJdk1qSXRjbVJtTFhONWJuUmhlQzF1Y3lNblBnb0tJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU2NuQ2lBZ2VHMXNibk02UVhSMGNtbGlQU2RvZEhSd09pOHZibk11WVhSMGNtbGlkWFJwYjI0dVkyOXRMMkZrY3k4eExqQXZKejRLSUNBOFFYUjBjbWxpT2tGa2N6NEtJQ0FnUEhKa1pqcFRaWEUrQ2lBZ0lDQThjbVJtT214cElISmtaanB3WVhKelpWUjVjR1U5SjFKbGMyOTFjbU5sSno0S0lDQWdJQ0E4UVhSMGNtbGlPa055WldGMFpXUStNakF5TVMwd055MHdNand2UVhSMGNtbGlPa055WldGMFpXUStDaUFnSUNBZ1BFRjBkSEpwWWpwRmVIUkpaRDR4T1RBeU1qaGtNQzB6TUdRNUxUUXdOall0T1dNME1TMDBaamcxWlRjMU56VmpPREU4TDBGMGRISnBZanBGZUhSSlpENEtJQ0FnSUNBOFFYUjBjbWxpT2taaVNXUStOVEkxTWpZMU9URTBNVGM1TlRnd1BDOUJkSFJ5YVdJNlJtSkpaRDRLSUNBZ0lDQThRWFIwY21saU9sUnZkV05vVkhsd1pUNHlQQzlCZEhSeWFXSTZWRzkxWTJoVWVYQmxQZ29nSUNBZ1BDOXlaR1k2YkdrK0NpQWdJRHd2Y21SbU9sTmxjVDRLSUNBOEwwRjBkSEpwWWpwQlpITStDaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRLQ2lBOGNtUm1Pa1JsYzJOeWFYQjBhVzl1SUhKa1pqcGhZbTkxZEQwbkp3b2dJSGh0Ykc1ek9tUmpQU2RvZEhSd09pOHZjSFZ5YkM1dmNtY3ZaR012Wld4bGJXVnVkSE12TVM0eEx5YytDaUFnUEdSak9uUnBkR3hsUGdvZ0lDQThjbVJtT2tGc2RENEtJQ0FnSUR4eVpHWTZiR2tnZUcxc09teGhibWM5SjNndFpHVm1ZWFZzZENjK1E4T3pjR2xoSUdSbElGTmxiU0J1YjIxbFBDOXlaR1k2YkdrK0NpQWdJRHd2Y21SbU9rRnNkRDRLSUNBOEwyUmpPblJwZEd4bFBnb2dQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwd1pHWTlKMmgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2Y0dSbUx6RXVNeThuUGdvZ0lEeHdaR1k2UVhWMGFHOXlQbFJpY2lCWFpXSThMM0JrWmpwQmRYUm9iM0krQ2lBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0S0NpQThjbVJtT2tSbGMyTnlhWEIwYVc5dUlISmtaanBoWW05MWREMG5Kd29nSUhodGJHNXpPbmh0Y0QwbmFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0x5YytDaUFnUEhodGNEcERjbVZoZEc5eVZHOXZiRDVEWVc1MllUd3ZlRzF3T2tOeVpXRjBiM0pVYjI5c1Bnb2dQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDand2Y21SbU9sSkVSajRLUEM5NE9uaHRjRzFsZEdFK0Nqdy9lSEJoWTJ0bGRDQmxibVE5SjNJblB6NFViY1lCQUFBSjEwbEVRVlI0bk8yY2UxQlU5eFhIditmdUJWRmtONUdxMktKRUc4QlIwRlJ0ZzFVcmlZNFBkaUYwRW93U3AvWmhlZWc0YWpMdElHYXFKazBrMDdURVJBWFJPRTVTWDlGR3F5em9ORnBOTldJckV4UElRM3pnQTNVbFFXVkJlU3pjMHo5ZzE0VzdzTHYzM25VaDdXZkcrZDNmNi96T1BmNzJ4KytlODd1WDhEQ1p2VVJ2RUp2aUpCWWlpRG1jUU9GTUhBNUdPSUhDQVlEQlZTQlVFVk1WZzZ1WXFFb2c2VXB0UzU4U0ZMOWpmVmlxa3E4SENFcFlIQkdJMW1kSTRDUm0vSXlJQXBUSVlXWWJnWTR6K0VBeml3Y2FpelpjMFZwWFozeGltT0JabVdNRVVacExRQktCUnZ0aURBWi93Y0FCU2VLZDk0b0t5clNXcjZsaDlETVhQVTRCcld1WjhTd1IrWHcyQWdBek00SDJTdHo2Y2wzUjVncXQ1R3FpZkwrWmFVTUNBbWdOTS8yS0NLSVdNcjJGR1MwRTNtclQyZGJjUDdEMWhscDU2Z3lUL010SERNMUJLeUJnQ1lDK2FwWFJpQVl3dncwSWI5U2E4KzRvRmFMWU1QcUV0Q2RCdEkrSWhpaVY0VXVZK1NhWWYyNHRLaml0cEwrZ3BKTWhJV01PQlBxNHB4b0ZBSWhvQ0FUNjJKQ1FNVWRSZjY5YXA2VG9EUGREM3dEaEpTV0QrUTNtTjJ2NzNjN0NuajJ0bm5ieDJERDZtYjhaUUFFQmV3QThyVWc1LzNPVWJiWVU2K0YzYjN2UzJDUERCTS9LSENQcStBQUlFZXAwOHpPTUt5MnRsSFR2VU43bjdwcTZYMlBpVjRzNkhXL3M5VVlCQUVLRVRwUTJJSDYxMnkyRlc4T0VCRnZXRTJHU05wcjVId0pORGdtMnJIZlhUdGRkcGNHVW5rRkVxN1JUcTJkQWhBbEJVZU52TlZXVW51bXlUVmNWaHNTMEdTeFJvZEtIUGxIbitVNmdwVlZTTW9RcW1ObkdFajFWVjV4LzBsVzlTOFBvVGVtUnhIUUdCTDNTZ2U4ZXpQTzQ3U09KbVVxSFVRVXp2ckZKTGVNYWlyZFVkYTV6dVFnUmFMTWFvOWh4ZDhPVFk2TlErUHB5dGNNb2hnZ0RBM1hpWHh1QStNNTFzdm5lMzVRUkQyRHFROUdzWnpDMS9aNDdJSnN4QXZoVkxiMFJlY3NXNElQai84YWNxVDl4cEVNSERVQkZsUVVmL3F0VXMzSFVvQU5XbzlPczZXQ1lrTVMwWkdLYXJPV2dtODNIVVBYTkhXeXVmNUQyQytxRHV2dU5DT2tYcE9WUWFwaXFUMGlmWlMzYWRNaGUwTUV3Z2tTdmFPM1RHeDgxSEROK0hDc3J2MWx6RnhkdlZMdnRyeE1FeEQ4eDB1dHgvM091RXRaN0RSNjNKd0U1QU9TRzBSc3o1b0lndndPVmpJdU13TkJCQTJUbEZWVVdqd3dUR0NEaXJjVXZZUHVSVXg2UE9TVTJDcXUyN2NPWmM1VmVhRXBqUXhMVGt1c09GdXdIbkdjTWNiSXZYTUQybjFMNHdFYzdwTlYzclpnY0crV1JqS3ZWTmNqWlVlajVvS2ttUmJvUzAxd0FUb1labnhaQVRMTzl0UXNSNGFlakg1ZVZueXcvNzdqZXVHd0JjdmNleHZMblpuWklkLyt6by85b1VreWtURTU1NVhVMHQ3VEl5cWVQSDQzRWlVOWc2ZnJ0U0owK0VabUpUMlBLMHRlOFU5N1YvVEJtMmE5RkFPZy9SSmdFZUw5dkVYVUN6R3RmbEpVNzcxL2lGcjhDQUE1RGREYUlIVmR5VE5tNUtLMjRMQ3UvZGNlS3N4ZXVJblg2Ukd4Yytnc3NXdmVldDZxN2hzaWduNTBaWnkzT0t4RUJRTWM4Q3lxYytzNkdHRFk0RkZuempBRGdTTHRpMk9CUVI3c3hDMS9HMVZzMWpycnVkczVsbDY0aGRrUTRjaGFtWU5HNjk3RGpJOC9YSDNlUUlDVURhRE1NRXlWcnRib1lndnRoeXBob25Ddy9qeWxqb3QyMnQ3Y3puLzRjUUkzYjlnQ1FPbjBpY2hhbXdKaWRpL2l4MGZqYm1pVjRkdFU3S2pWdmc0bVNBV1NKSVlscEk0bmgvZzdjRUR0aUtOWXVmSzVOT0xQWC9lMTlWMnpaaTdKTDE3cHRXM2FwQ3Nic1hKUmR1b2JiMW5vYy9mUXI3eFh1QWdLaVF4TFRSb3BvRmVLVXVjUTdZZ2p1aThteFVUQmw1N3FzanhqOFBUUTEyOUFuTU1DUjZvTWZSRnd1M3JpRkQvNndHSVpnOTFFWVo4TmQvL1lPcm4rck9FcmltbFloVGhTQU1DMWxuaWh6SFF6TVNIb0tYMTYrZ1ZHUGZSOWZYcjZCMFkvOUFNYTRzWTc2R2IvN1U1Y3lKOFZFeXRhY25KMW1uQ2lyUU9xME9LUk9teWpyODFIcEZ3cnZBQkNBTUpFRkRpUGZ4L1l4LzdWTml2bzFORFhMbnRMTmExOUVadExUeUpwbnhNNGpKYktGV3kwc2NKZ0lqV2ZNdzZLbzVET3MzVm1vcVVHY0NCTUoxT3NNWThyT1ZiVEFld3FCd2dUV2VNWk1pQjZPN1NzelpLbVcrTklvQU1CQW1FRE1taHJtdHJVZXA3KzZLRXQ3RThSdGE0eW12TDFrUGdCZ3hvUVlsMmx2UVdRaUN3RUd0WUt1VnRjZ1o2ZFpsWXdUNWVkeHRkb25pNmxYTUpGRklNQ2lWbERmUG9FdTl4SkswRXFPR2dpd0NBeFdiWmp2R2d5MkNOQmd4alEwTldQSGtWTUFzK3AvTzd6dzFQa1FpMGdTV2JSNFZobzJLQlJacVNhSGs4b1EzQmN4dzhNN09LMG14VVRLOHVXVlZhaHQ5ODFPaW9sc1cyZDhzMm56R0pMSUlrcUFSUU83T0RDdStBdUFCOEUwZXg1bzg3RjB6bWR0M3VONHZ2SW1ldWxMMm15aWswcjhyVWlQUXllVmlIVUhDNzdXbXpMT0VkVDdaQUE0UXE2RzRINGQ4cDNyN2F4ZG1JTGFlL2UxR0ZvVEdEaFhkN0RnNi9ZTkhoOENTQlBEbkdoZlF5SUdoU0oyUkxnakQ3VDl2RHJueXl1cmNLVjk3K0pwMU1DWEVMTlRsRURDSVFoWXFvVmdlNWhqY213VTVrMkw2eEQyeUpwbmxPVzNIem1GMVF1U3Nhc0xKL25EaGlWaFA5QWUxTGZlNGlOZ3J2V1hNaS9sN1lLNTVETi9EZjhBaHRWYW5GY0MyR2RNYVlHTlRlbUhDSGhlcmV6T2YxbmM1UUhnejVsemU4U01ZZUppKzdYb1ZMb2ZwTjR3ZHArdjNUbnU3QU11ZkgyNUxBKzB6WmpxdTFhOG1URlg3ZkRxWU5wdnYzUVl4bXJPMzJVd3BtZURTRlg4dXJQUDExMGU2Qmt6aGhtZldNMzV1K3g1c1ZQbDc0bFFMTy9tT2ZaUWE4enc4QTc1enZWMllvYUg0LzEvbk1TZE92Lyt5WllJSzUzekhReGpMZHAweUdES09BNFZKNm82aDFyZDVYTittNkowS00xZ3h1RjZjLzR4NXpLWm8wcHF4VXBCaHhQZUNqOVJWdUczUTRacWtZUlcyYnNSTXNQVUZlZWYxQnZULzA1RXozZ3EyRjJNdWlmRDROMzFCemZMZ2xBdUEwcjlqUmt4QXZGWkFuVjdRRm9nd2tLajc4NHhIangxRmpkcjd2cE1Qb05ibXlYeGg2NWVQTzB5MHFZM3BpMGpFbHpIVzc4ak1FdkxyZWFDdDF6VmRUa2ptczZYbHZTSkd2OG9nZUo4cDVyL1lQQTZxN2xnZFZmMTNmNVVtaXBLRHdkRlRZZ0JNRXB6emZ3Slk1L1Z2T25YM1RWeDU2UGkydnJHK1FEY3Z0L1RXMkNncFBaZVkycmJaZGU0ZDk0ZDI5YllEQ1NBV1hiZXZyZkJ3QVZ1MEpsd2JGdWp1N1llZVRVYkN2T3ZjMHZMV0daOG9sNDl2M0VVTnR1VGRVYzJlT1JRN25hTmNhYnA0cWNOVGZweDcvY0p3VUFDVFZDdW4xL1lVbHNZTnFmcFlxN0h6eDJLRHNZWUVqTFNXZUFON3ZZNS9vYkJ6Y3hZVkdmZTlLNjNmUldmR0FvMnBVL1RnWFlURUtwVWhpOWhvQWFTWkZUNlFycmkvM0ZiUldsbFlQUzRyUUFGQWZ5am5qSjdHTndNeGtZV09LWE9YSERlZlEvWGFITEdMTWlVTml3UXdoOEJ2RUFLMy81WEN6TmFpTEN0Q2RLcmpZVUZWOVhLMC9Ud1hmL1o2YU4wT3F4NTZKOUpJZnFRYlVLVzlmREdDMXJKOWMySGRVenBZd1hnK2Y5L1dLY2JnaElXUndSU1N4S0JraGc4OVgvNlUweGQwb3MrM3ZWZiswa1FnUWVVSER3QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LERRbzhjM1puSUhkcFpIUm9QU0l5TkRraUlHaGxhV2RvZEQwaU1USXdJaUIyYVdWM1FtOTRQU0l3SURBZ01qUTVJREV5TUNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5DanhuSUc5d1lXTnBkSGs5SWpBdU5TSStEUW84Y0dGMGFDQmtQU0pOTVRjM0xqQTJOQ0F5T1M0NE9USXhRekU0TkM0MU1EUWdNalV1TXpJME9DQXhPVEl1T0RnNElESXlMalEzTlRFZ01qQXhMakk1TXlBeU1TNDJOams1UXpJd09DNDBOVGNnTWpBdU9UWTRNeUF5TVRVdU9UQXhJREl4TGpjME5UY2dNakl5TGprNUlESXpMamc1TVRkTU1qSXpMakl6TkNBeU1TNHdORFExUXpJeE5TNDROalFnTVRndU9URTJOQ0F5TURndU16WXhJREU0TGpFM05Ua2dNakF4TGpBeU9DQXhPQzQ0TnpjeFF6RTVNaTR5SURFNUxqY3pJREU0TXk0ME1UTWdNakl1TnpFek1TQXhOelV1TmpBMUlESTNMalV3TURkRE1UWTNMamM1TmlBek1pNHlPRGd6SURFMk1TNHhOeUF6T0M0M09EWXhJREUxTmk0ME1UWWdORFl1TWpnek5rTXhOVFV1TURjMElEUTRMak01TXpJZ01UVXpMamc1TlNBMU1DNDFOekkzSURFMU1pNDROalFnTlRJdU9EQTJPVU14TkRBdU5qZ3hJRFUyTGpReU1qUWdNVEk1TGpnMElEWXpMakV6TWprZ01URTVMamtnTmprdU9UUTROVU14TVRjdU5EYzVJRGN4TGpZd01Ua2dNVEUxTGpBek9DQTNNeTR6TWpNMUlERXhNaTQyT0RZZ056UXVPVGd5T1VNeE1EUXVNRGNnT0RFdU1ETXdOU0E1TlM0eE56RTNJRGczTGpJM056Y2dPRFV1TmpFek9DQTVNUzQ1TVRVMVF6YzBMamd6TURJZ09UY3VNVFEzT1NBMk1pNDNORGt6SURFd01DNHpPQ0ExTUM0Mk56TTRJREV3TVM0eU5qTkRNemd1TWpZd015QXhNREl1TVRjeklESTJMakl4T0RFZ01UQXdMamN3T0NBeE5DNDRPREF5SURrMkxqZzVOamxETVRBdU1qTXhOeUE1TlM0ek1qTTJJRFV1TnpFME9UVWdPVE11TXpVMU9TQXhMalF6TnpNMklEa3hMakEwTkRsTU1TNHhOemt5T0NBNU5DNHdOVGczUXpVdU16TXhNVEVnT1RZdU1qQTFJRGt1TlRjNU56RWdPVGd1TURNM09TQXhNeTQ1T1RneElEazVMalV5TVRWRE1qQXVPVEF6TnlBeE1ERXVPRFE0SURJNExqQTNOelVnTVRBekxqTXlPU0F6TlM0ME1EZ3pJREV3TXk0NU5UZEROREF1TkRnNU9DQXhNRFF1TXpreUlEUTFMalkyTWpZZ01UQTBMalF4TmlBMU1DNDRPRE00SURFd05DNHdNemRETmpNdU1qazNNaUF4TURNdU1USTRJRGMxTGpjek5Ua2dPVGt1TnprNU55QTROaTQ0TkRBMUlEazBMalF4TWpsRE9UWXVOVGc0TkNBNE9TNDJOemsxSURFd05TNDFPU0E0TXk0ek56RXhJREV4TkM0eU9ERWdOemN1TWpaRE1URTJMall6TXlBM05TNDJNREEzSURFeE9TNHdOek1nTnpNdU9Ea3lPU0F4TWpFdU5EYzVJRGN5TGpJMU1qSkRNVE13TGpZek1TQTJOUzQ1T0RRM0lERTBNQzQxTVRVZ05Ua3VPREl4T1NBeE5URXVORFUySURVMkxqRTRNemxETVRRNExqRTFNaUEyTkM0NE9ESTRJREUwTnk0eU55QTNOQzR3TkRFZ01UUTVMakEyT0NBNE1pNDBNelUxUXpFMU1DNHpPVFVnT0RndU5qWXlPU0F4TlRNdU16QTJJRGswTGpVeU1qUWdNVFUzTGpRM055QTVPUzR6T0RRMVF6RTJNUzQ0SURFd05DNDBNamdnTVRZM0xqRTVPQ0F4TURndU1ETTRJREUzTXk0eE1ERWdNVEE1TGpneE5rTXhOemt1TVRRZ01URXhMalkwT1NBeE9EVXVPRFl4SURFeE1TNHpPVGtnTVRreUxqQXpPQ0F4TURrdU1UVTRRekU1T0M0ek56WWdNVEEyTGpnME5pQXlNRE11TlRBNUlERXdNaTQxT1RrZ01qQTJMalV4TmlBNU55NHlNRFF6UXpJd09TNDRNemdnT1RFdU1qUTRPU0F5TVRBdU5Ua3hJRGd6TGpreU5qUWdNakE0TGpZek1TQTNOaTQxT1RVMFF6SXdOaTQzTnpjZ05qa3VOalkxTXlBeU1ESXVOVGMwSURZekxqSXhPVFVnTVRrM0xqQTRNeUExT0M0NU1ERTVRekU1TVM0M05qTWdOVFF1TnpJME9DQXhPRFV1TWprMUlEVXlMakF4TmpVZ01UYzNMamc1T0NBMU1DNDROalV6UXpFM01TNHlNRFFnTkRrdU9ERTJOU0F4TmpNdU9UUTJJRFV3TGpFek1qTWdNVFUyTGpreE1TQTFNUzQzTmpnelF6RTFOaTQzTlRRZ05URXVPREV3T0NBeE5UWXVOVGs0SURVeExqZ3pPVFFnTVRVMkxqUTBJRFV4TGpnNE1UbERNVFUzTGpFME5pQTFNQzQxTURFeklERTFOeTQ1TXpNZ05Ea3VNVFF4TnlBeE5UZ3VOemMwSURRM0xqZ3hORGRETVRZekxqTXdOQ0EwTUM0Mk5EYzNJREUyT1M0Mk1qUWdNelF1TkRVNU5TQXhOemN1TURZMElESTVMamc1TWpGYVRURTFOeTQxTXpNZ05UUXVORFkxT0VNeE5qUXVNakkySURVeUxqa3hNalFnTVRjeExqRXhPQ0ExTWk0Mk1qRXlJREUzTnk0ME5qWWdOVE11TmpFeU5VTXhPRFF1TXprMUlEVTBMalk1TlRVZ01Ua3dMalF4TnlBMU55NHlNVEU0SURFNU5TNHpOVGNnTmpFdU1Ea3dOVU15TURBdU16YzJJRFkxTGpBek1pQXlNRFF1TWpNMElEY3dMamswTkRVZ01qQTFMamt5TnlBM055NHpNREV6UXpJd055NDJPVFVnT0RNdU9UTXdNeUF5TURjdU1ETXpJRGt3TGpVeE9URWdNakEwTGpBM05DQTVOUzQ0TXpNNVF6RTVPQzQyTWlBeE1EVXVOak0ySURFNE5TNHpOVFlnTVRFd0xqWWdNVGN6TGpnNUlERXdOeTR4TkRKRE1UWTRMalV3TkNBeE1EVXVOVEU1SURFMk15NDFOVGdnTVRBeUxqSWdNVFU1TGpVM055QTVOeTQxTmpNM1F6RTFOUzQzTVRJZ09UTXVNRFE1TmlBeE5UTXVNREUxSURnM0xqWXlPRElnTVRVeExqYzNOU0E0TVM0NE5UVTRRekUwT1M0NU5EVWdOek11TXpRMk55QXhOVEV1TURnMUlEWXpMamswTkRrZ01UVTBMamczTkNBMU5TNHhORGMxUXpFMU5TNDNOak1nTlRRdU9EZzNPQ0F4TlRZdU5qUTVJRFUwTGpZMk9Ua2dNVFUzTGpVek15QTFOQzQwTmpVNFdpSWdabWxzYkQwaWQyaHBkR1VpTHo0TkNqeHdZWFJvSUdROUlrMHlORGtnTXpBdU16QTNUREl5TWk0ME5ERWdOaTR3TmpFMVRESXlNaTR3TlRRZ01UWXVOek0yTTB3eU5EQXVOalE0SURJMkxqZzNNMHd5TWpFdU9URXlJREl3TGpZM056Uk1Nakl4TGpreE1TQXlNQzQyT0RjMlRESXlNUzQ1TVRFZ01qQXVOamMxTkV3eU1UTXVOekV5SURJekxqTTNPVXd5TWpFdU5qazFJREkyTGpZMk1UVk1Nakl4TGpReU1TQXpOQzR5TkRRNVRESTBPU0F6TUM0ek1EZGFJaUJtYVd4c1BTSjNhR2wwWlNJdlBnMEtQQzluUGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1cHBvcnQtdGVhbS02YjIxZTBjOWZlMDE3MDA5MTFkZTRkY2I5ZmJmN2VmNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc3VwcG9ydC0zNTA0MGMxMmQ1N2NjN2FkNDc5MWRiZTAxYTdkNjk5Ny5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGVzdGltb25pYWwtNjlkMmU2MGU5NmNlY2Q3ZmQzNGJhZWIxNjIzNzQ1MzAucG5nXCI7IiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQnNQbHVzQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgeyBCYXNlQWNjb3JkaW9uIH0gZnJvbSAnLi9iYXNlLWFjY29yZGlvbic7XHJcbmltcG9ydCB7XHJcbiAgQWNjb3JkaW9uQnV0dG9uLFxyXG4gIEFjY29yZGlvbkl0ZW0sXHJcbiAgQWNjb3JkaW9uQ29udGVudHMsXHJcbiAgc2luZ2xlLFxyXG4gIHByZXZlbnRDbG9zZSxcclxuICBjb21iaW5lUmVkdWNlcnMsXHJcbn0gZnJvbSAnLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHsgaXRlbXMsIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VBY2NvcmRpb25cclxuICAgICAgc3RhdGVSZWR1Y2VyPXtjb21iaW5lUmVkdWNlcnMoc2luZ2xlLCBwcmV2ZW50Q2xvc2UpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHsoeyBvcGVuSW5kZXhlcywgaGFuZGxlSXRlbUNsaWNrIH0pID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgc3g9e3N0eWxlcy5hY2NvcmRpb259XHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCkgPyAnaXMtb3BlbicgOiAnaXMtY2xvc2VkJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgeyFvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8QnNQbHVzQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtyZ2JhKCcjMEYyMTM3JywgMC4zKX1cclxuICAgICAgICAgICAgICAgICAgICBzeD17c3R5bGVzLmFycm93fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQ29udGVudHNcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudHM+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9CYXNlQWNjb3JkaW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBhY2NvcmRpb246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGNkY4RkInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIHA6IFsnMTVweCcsICcyMHB4IDMwcHgnLCAnMzBweCA0NXB4JywgJzIwcHggMjVweCcsICcyMHB4IDM1cHgnXSxcclxuICAgICcmLmlzLW9wZW4nOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwcHggOXB4IDMwcHggcmdiYSg2OSwgODgsIDE1NywgMC4wOCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGxldHRlclNwYWNpbmc6IFswLCBudWxsLCBudWxsLCBudWxsLCAnaGVhZGluZyddLFxyXG4gICAgbGluZUhlaWdodDogWzEuNSwgMS44XSxcclxuICB9LFxyXG4gIGFycm93OiB7XHJcbiAgICB3aWR0aDogWzIwLCBudWxsLCBudWxsLCAyNV0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBCYXNlQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RhdGVSZWR1Y2VyOiAoc3RhdGUsIGNoYW5nZXMpID0+IGNoYW5nZXMsXHJcbiAgICBvblN0YXRlQ2hhbmdlOiAoKSA9PiB7fSxcclxuICB9O1xyXG4gIHN0YXRlID0geyBvcGVuSW5kZXhlczogWzBdIH07XHJcbiAgZ2V0U3RhdGUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuSW5kZXhlczpcclxuICAgICAgICB0aGlzLnByb3BzLm9wZW5JbmRleGVzID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcclxuICAgICAgICAgIDogdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGludGVybmFsU2V0U3RhdGUoY2hhbmdlcywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xyXG4gICAgbGV0IGFsbENoYW5nZXM7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoc3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBhY3R1YWxTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxyXG4gICAgICAgICAgdHlwZW9mIGNoYW5nZXMgPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VzKGFjdHVhbFN0YXRlKSA6IGNoYW5nZXM7XHJcbiAgICAgICAgYWxsQ2hhbmdlcyA9IHRoaXMucHJvcHMuc3RhdGVSZWR1Y2VyKGFjdHVhbFN0YXRlLCBjaGFuZ2VzT2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgY2xvc2luZyA9IHN0YXRlLm9wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxyXG4gICAgICAgIG9wZW5JbmRleGVzOiBjbG9zaW5nXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpXHJcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xyXG4gICAgICBvcGVuSW5kZXhlczogdGhpcy5nZXRTdGF0ZSgpLm9wZW5JbmRleGVzLFxyXG4gICAgICBoYW5kbGVJdGVtQ2xpY2s6IHRoaXMuaGFuZGxlSXRlbUNsaWNrLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCYXNlQWNjb3JkaW9uIH07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2IHN4PXtzdHlsZXMuYnV0dG9uVG9nZ2xlfSB7Li4ucmVzdH0+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYWNjb3JkaW9uSXRlbToge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgJysgLmFjY29yZGlvbi1pdGVtJzoge1xyXG4gICAgICBtdDogWzNdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvblRvZ2dsZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgYWNjb3JkaW9uQ29udGVudDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgbGluZUhlaWdodDogMixcclxuICAgIG10OiBbNF0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luVG9wOiAxNixcclxuICB9LFxyXG4gIGNsb3NlZDogeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvbkNvbnRlbnRzKHsgaXNPcGVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICBzeD17c3R5bGVzLmFjY29yZGlvbkNvbnRlbnR9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkl0ZW0gPSAoeyBpc09wZW4sIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNsYXNzTmFtZT17YGFjY29yZGlvbi1pdGVtICR7Y2xhc3NOYW1lfWB9XHJcbiAgICBzeD17c3R5bGVzLmFjY29yZGlvbkl0ZW19XHJcbiAgICB7Li4ucmVzdH1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIGNoYW5nZXMudHlwZSA9PT0gJ2Nsb3NpbmcnICYmIHN0YXRlLm9wZW5JbmRleGVzLmxlbmd0aCA8IDJcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogc3RhdGUub3BlbkluZGV4ZXMgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBjaGFuZ2VzLm9wZW5JbmRleGVzLnNsaWNlKC0xKSB9XHJcbiAgICA6IGNoYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgcmVkdWNlcnMucmVkdWNlKChhY2MsIHJlZHVjZXIpID0+IHJlZHVjZXIoc3RhdGUsIGFjYyksIGNoYW5nZXMpO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEZsZXgsIEltYWdlLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyBMaW5rLCBMZWFybk1vcmUgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSAnc2VydmljZXMvc2x1Z2lmeSc7XHJcblxyXG5jb25zdCBCbG9nUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IHNsdWcgPSBzbHVnaWZ5KHBvc3QubW5fdGl0dWxvKVxyXG4gIC8vIGNvbnN0IHNsdWcgPSBcInRlc3RlXCJcclxuICBjb25zdCBzbHVnID0gc2x1Z2lmeShwb3N0Lm1uX3RpdHVsbylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhcnRpY2xlXCIgc3g9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgPEZsZXggYXM9XCJmaWd1cmVcIiBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17YGh0dHBzOi8vd3d3LmJhbGFtaW51dC5jb20uYnIvaW1nL25vdGljaWFzLyR7cG9zdC5tbl9pbWFnZW0xfWB9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PXtwb3N0Py5tbl90aXRsZX0gLz5cclxuICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgPExpbmsgcGF0aD17YG5vdGljaWFzLyR7c2x1Z31gfT57cG9zdD8ubW5fdGl0dWxvfTwvTGluaz5cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5leGNlcnB0fT5cclxuICAgICAgICAgIHtwb3N0Py5tbl9kZXNjcmljYW99XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxMZWFybk1vcmUgcGF0aD17YG5vdGljaWFzLyR7c2x1Z31gfSBsYWJlbD1cIkxlaWEgTWFpc1wiIHN4PXtzdHlsZXMubGVhcm5Nb3JlfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwb3N0OiB7XHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIDMsICd1bnNldCddLFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBtYjogWzRdLFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFsyLCBudWxsLCBudWxsLCAzLCAnMTdweCcsIDNdLFxyXG4gICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS42OF0sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBleGNlcnB0OiB7XHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuODgsXHJcbiAgICBtdDogWzJdLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcclxuICAgIFdlYmtpdExpbmVDbGFtcDogJzInLFxyXG4gICAgV2Via2l0Qm94T3JpZW50OiAndmVydGljYWwnIFxyXG4gIH0sXHJcbiAgbGVhcm5Nb3JlOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsICcxNXB4J10sXHJcbiAgICBtdDogMixcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBGYXFJdGVtID0gKHsgZmFxLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhcnRpY2xlXCIgc3g9e3N0eWxlcz8uZmFxfSB7Li4ucHJvcHN9PlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCI+e2ZhcT8ucXVlc308L0hlYWRpbmc+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPntmYXE/LmFuc308L1RleHQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFxSXRlbTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmYXE6IHtcclxuICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjMEYyMTM3JyxcclxuICAgIG1hcmdpbkJvdHRvbTogOCxcclxuICAgIG14OiBbbnVsbCwgbnVsbCwgbnVsbCwgNiwgOF0sXHJcbiAgICB3aWR0aDogW251bGwsIG51bGwsIG51bGwsICdjYWxjKDUwJSAtIDYwcHgpJywgJ2NhbGMoNTAlIC0gODBweCknXSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCBudWxsLCAzXSxcclxuICAgICAgbGluZUhlaWdodDogMS42OCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGluZUhlaWdodDogMixcclxuICAgICAgbWI6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSW1hZ2UsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBGZWF0dXJlID0gKHsgZGF0YSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuZmVhdHVyZX0gey4uLnByb3BzfT5cclxuICAgICAgPEJveCBhcz1cImZpZ3VyZVwiPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2RhdGE/Lmljb259IGFsdD17ZGF0YT8udGl0bGV9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57ZGF0YT8udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiPntkYXRhPy5kZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZmVhdHVyZToge1xyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBmaWd1cmU6IHtcclxuICAgICAgbWluV2lkdGg6IFs3MF0sXHJcbiAgICAgIG1yOiBbJzMwcHgnXSxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI4LFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgbGluZUhlaWdodDogMS44OCxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIG10OiBbM10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9NZENoZWNrbWFya0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgTGVhcm5Nb3JlLCBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJ3NlcnZpY2VzL3NsdWdpZnknO1xyXG5cclxuY29uc3QgUHJpY2VUYWJsZSA9ICh7IGl0ZW1zLCBpc1JlY29tbWVuZGVkLCB0aXRsZSwgc3VidGl0bGUsIGxpbmsgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN4PXtzdHlsZXMucHJpY2VUYWJsZX1cclxuICAgICAgY2xhc3NOYW1lPXtgJHtpc1JlY29tbWVuZGVkID8gJ3JlY29tbWVuZGVkJyA6ICcnfWB9XHJcbiAgICA+XHJcbiAgICAgIHsvKiB7cHJpY2UuaXNSZWNvbW1lbmRlZCAmJiAoXHJcbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgc3g9e3N0eWxlcy5yZWNvbUxhYmVsfT5cclxuICAgICAgICAgIEhpZ2hseSBSZWNvbW1lbmRlZFxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgKX0gKi99XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT1cInByaWNlSGVhZGVyXCI+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnN1YnRpdGxlfT5cclxuICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgey8qIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMucHJpY2VBbW91bnR9PlxyXG4gICAgICAgICAgJHtwcmljZT8ucHJpY2V9XHJcbiAgICAgICAgICAvbW9cclxuICAgICAgICA8L1RleHQ+ICovfVxyXG4gICAgICAgIHsvKiA8QnV0dG9uIHN4PXtzdHlsZXMuYnV0dG9ufSB2YXJpYW50PVwidGV4dFwiPlxyXG4gICAgICAgICAge3ByaWNlLmJ1dHRvblRleHR9XHJcbiAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBhcz1cInVsXCIgc3g9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICB7aXRlbXM/Lm1hcCgoaXRlbSwgaSkgPT4gKCAgICAgICAgICBcclxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2lzUmVjb21tZW5kZWQgPyAoXHJcbiAgICAgICAgICAgICAgPExpbmsgcGF0aD17YG9icmlnYWNvZXMvJHtzbHVnaWZ5KGl0ZW0uTW5fVGl0dWxvKX1gfSBzeD17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxJb01kQ2hlY2ttYXJrQ2lyY2xlIHN4PXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uTW5fVGl0dWxvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8SW9NZENoZWNrbWFya0NpcmNsZSBzeD17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm9icl9ub21lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge2xpbmsgPyAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMZWFybk1vcmUgcGF0aD17bGlua30gbGFiZWw9XCJTYWliYSBNYWlzXCIgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSA6ICgnJyl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlVGFibGU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2VUYWJsZToge1xyXG4gICAgYWxpZ25TZWxmOiAnYmFzZWxpbmUnLFxyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6IFtcclxuICAgICAgJzIwcHggMTVweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICczMHB4IDI1cHgnLFxyXG4gICAgICAnMjVweCAzMHB4IDQwcHggMzBweCcsXHJcbiAgICAgICc0NXB4IDYwcHggNzBweCA0NXB4JyxcclxuICAgIF0sXHJcbiAgICBib3hTaGFkb3c6IFsnMHB4IDE1cHggNTBweCByZ2JhKDkxLCAxMzIsIDE5MywgMC4xKScsIG51bGwsIG51bGwsICdub25lJ10sXHJcbiAgICAnJi5yZWNvbW1lbmRlZCc6IHtcclxuICAgICAgYm94U2hhZG93OiBbbnVsbCwgbnVsbCwgbnVsbCwgJzBweCAxNXB4IDUwcHggcmdiYSg5MSwgMTMyLCAxOTMsIDAuMSknXSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVjb21MYWJlbDoge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFswLCAxXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMjksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTJBQ0ZGJyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCA4cHggMHB4IDBweCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0b3A6ICctMzVweCcsXHJcbiAgICByaWdodDogMCxcclxuICAgIG1pbkhlaWdodDogWzMwLCAzNV0sXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFsxLCAyLCAzXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMzEsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNTVweCcsXHJcbiAgfSxcclxuICBzdWJ0aXRsZToge1xyXG4gICAgY29sb3I6IHJnYmEoJyMzNDNENDgnLCAwLjY1KSxcclxuICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgMSwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjYyLFxyXG4gICAgbXQ6ICc4cHgnLFxyXG4gIH0sXHJcbiAgcHJpY2VBbW91bnQ6IHtcclxuICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBmb250U2l6ZTogWzEsIDIsIG51bGwsIDQsICcyNnB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICBtdDogWycxMnB4JywgbnVsbCwgbnVsbCwgJzI2cHgnXSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIG10OiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgbWF4V2lkdGg6IDM0MCxcclxuICAgIGxpOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgMSwgbnVsbCwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjIsXHJcbiAgICAgICcrIGxpICc6IHtcclxuICAgICAgICBtdDogWzMsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBoZWlnaHQ6IFsxNywgbnVsbCwgbnVsbCwgbnVsbCwgMjNdLFxyXG4gICAgICAgIHdpZHRoOiBbMTcsIG51bGwsIG51bGwsIG51bGwsIDIzXSxcclxuICAgICAgfSxcclxuICAgICAgJ3NwYW46Zmlyc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICBtcjogJzEzcHgnLFxyXG4gICAgICAgIG10OiAnNXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLnVuYXZhaWxhYmxlJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBib3JkZXI6IGAxLjVweCBzb2xpZCAke3JnYmEoJyM1QjJCOUQnLCAwLjE1KX1gLFxyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIG1pbkhlaWdodDogWzQwLCBudWxsLCBudWxsLCBudWxsLCA1MF0sXHJcbiAgICBwYWRkaW5nOiBbJzAgMjRweCcsIG51bGwsICcwIDMycHgnXSxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBtdDogWzMsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgfVxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBTZXJ2aWNlID0gKHsgY290YWNhbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5zZXJ2aWNlfT5cclxuICAgICAgPFRleHQgYXM9XCJwXCI+e2NvdGFjYW8/LmNvdGRfbm9tZX08L1RleHQ+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPkNvbXByYTogPFRleHQgYXM9XCJzcGFuXCIgc3g9eyBzdHlsZXMucHJpY2UgfT5SJCB7Y290YWNhbz8uY290ZF9jb21wcmF9PC9UZXh0PjwvVGV4dD5cclxuICAgICAgPFRleHQgYXM9XCJwXCI+VmVuZGE6IDxUZXh0IGFzPVwic3BhblwiIHN4PXsgc3R5bGVzLnByaWNlIH0+eyBjb3RhY2FvPy5jb3RkX3ZlbmRhICE9PSAwID8gKGBSJCAke2NvdGFjYW8/LmNvdGRfdmVuZGF9YCkgOiAoJy0nKX08L1RleHQ+PC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VydmljZToge1xyXG4gICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyQ29sb3J9YCxcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWluSGVpZ2h0OiBbMTA3LCBudWxsLCBudWxsLCAxMzBdLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwcHggMTFweCAzMHB4IHJnYmEoNTEsIDgzLCAxNDUsIDAuMDcpJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE3cHgnXSxcclxuICAgICAgbGluZUhlaWdodDogMS43NyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE1cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDIsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHRlbGVmb25lIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGVsZWZvbmUucG5nJ1xyXG5pbXBvcnQgZW1haWwgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9lbWFpbC5wbmcnXHJcbmltcG9ydCBlbmRlcmVjbyBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2VuZGVyZWNvLnBuZydcclxuaW1wb3J0IGNpZGFkZSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2NpZGFkZS5wbmcnXHJcbmltcG9ydCBmYWNlYm9vayBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2ZhY2Vib29rLnBuZydcclxuaW1wb3J0IGluc3RhZ3JhbSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5wbmcnXHJcbmltcG9ydCBsaW5rZWRpbiBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2xpbmtlZGluLnBuZydcclxuaW1wb3J0IHdoYXRzYXBwIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvd2hhdHNhcHAucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnQ29udGF0bycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RlbDoxOTIxMDUxMDAwJyxcclxuICAgICAgICBpY29uOiB0ZWxlZm9uZSxcclxuICAgICAgICBsYWJlbDogJygxOSkgMjEwNS0xMDAwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYWlsdG86Y29tZXJjaWFsQHRicndlYi5jb20uYnInLFxyXG4gICAgICAgIGljb246IGVtYWlsLFxyXG4gICAgICAgIGxhYmVsOiAnY29tZXJjaWFsQHRicndlYi5jb20uYnInLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vZy5wYWdlL1RCUldFQj9zaGFyZScsXHJcbiAgICAgICAgaWNvbjogZW5kZXJlY28sXHJcbiAgICAgICAgbGFiZWw6ICdBdi4gRHIuIFBhdWxvIGRlIE1vcmFlcywgNTU1JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL2cucGFnZS9UQlJXRUI/c2hhcmUnLFxyXG4gICAgICAgIGljb246IGNpZGFkZSxcclxuICAgICAgICBsYWJlbDogJ1BpcmFjaWNhYmEgLSBTUCcsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ1JlZGVzIFNvY2lhaXMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vdGJyd2ViLycsXHJcbiAgICAgICAgaWNvbjogZmFjZWJvb2ssXHJcbiAgICAgICAgbGFiZWw6ICdGYWNlYm9vaycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90YnJ3ZWIvJyxcclxuICAgICAgICBpY29uOiBpbnN0YWdyYW0sXHJcbiAgICAgICAgbGFiZWw6ICdJbnN0YWdyYW0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi90YnJ3ZWIvJyxcclxuICAgICAgICBpY29uOiBsaW5rZWRpbixcclxuICAgICAgICBsYWJlbDogJ0xpbmtlZGluJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL3dhLm1lLzU1MTk5OTk3MDYzNzUnLFxyXG4gICAgICAgIGljb246IHdoYXRzYXBwLFxyXG4gICAgICAgIGxhYmVsOiAnV2hhdHNhcHAnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3Rlck5hdiA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ0FkdmVydGlzZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdTdXBwb3J0cycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdNYXJrZXRpbmcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJyMhJyxcclxuICAgIGxhYmVsOiAnRkFRJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIFRleHQsIENvbnRhaW5lciwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICdzZWN0aW9ucy9jYWxsLXRvLWFjdGlvbic7XHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tICcuL2Zvb3Rlci5kYXRhJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICA8Q2FsbFRvQWN0aW9uIC8+XHJcbiAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8Qm94IGFzPVwiZm9vdGVyXCIgc3g9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyVG9wSW5uZXJ9PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYWJvdXR9PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsgTG9nbyB9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwiTW9kZWxvIENvbnRhYmlsaWRhZGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMudGVybXN9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIiMhXCI+VGVybXMgb2YgdXNlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCI+fDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9XCIjIVwiPlByaXZhY3k8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gcG9yIDxUZXh0IGFzPVwic3BhblwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+PGEgaHJlZj1cImh0dHBzOi8vdGJyd2ViLmNvbS5iclwiIHRhcmdldD1cIl9ibGFua1wiPlRCcldlYjwvYT48L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgaWQsIHRpdGxlLCBpdGVtcyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFdpZGdldCBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGl0ZW1zPXtpdGVtc30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmb290ZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGOUZBRkMnLFxyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICBwYjogWzgsIG51bGwsIG51bGwsIDE1XSxcclxuICB9LFxyXG4gIGZvb3RlclRvcElubmVyOiB7XHJcbiAgICBnYXA6IFszMCwgbnVsbCwgNTAsICcyMHB4IDUwcHgnLCAxNywgNTBdLFxyXG4gICAgZGlzcGxheTogWydncmlkJ10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgZm9vdGVySW5uZXI6IHtcclxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAjRDlFMEU3YCxcclxuICAgIGRpc3BsYXk6IFsnYmxvY2snLCBudWxsLCAnZmxleCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcGFkZGluZzogJzM1cHggMCA0MHB4JyxcclxuICB9LFxyXG4gIGFib3V0OiB7XHJcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2dyaWQnLCAnYmxvY2snXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyMDVweCAxZnIgMWZyJyxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJ10sXHJcbiAgICBncmlkUm93OiBbJzMvNCcsIG51bGwsICcxLzEnLCAnMy80JywgJ3Vuc2V0J10sXHJcbiAgICBncmlkQ29sdW1uOiBbJzEvMycsIG51bGwsICcxLzInLCAnMS81JywgJ3Vuc2V0J10sXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG4gICAgZ3JpZENvbHVtbjogJzEvMicsXHJcbiAgfSxcclxuICB0ZXJtczoge1xyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBncmlkQ29sdW1uOiAnMy80JyxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnLCAnY2VudGVyJ10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ3JvdycsIG51bGwsIG51bGwsIG51bGwsICdjb2x1bW4nLCAncm93J10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogW1xyXG4gICAgICAnY2VudGVyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAnY2VudGVyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2ZsZXgtc3RhcnQnLFxyXG4gICAgXSxcclxuICAgIG10OiBbNCwgbnVsbCwgbnVsbCwgMCwgNF0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgc3Bhbjoge1xyXG4gICAgICBkaXNwbGF5OiBbJ2lubGluZS1mbGV4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnLCAnaW5saW5lLWZsZXgnXSxcclxuICAgICAgbTogWycwIDEwcHgnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb3B5cmlnaHQ6IHtcclxuICAgIGNvbG9yOiByZ2JhKCcjMEYyMTM3JywgMC42KSxcclxuICAgIGZvbnRTaXplOiBbJzE0cHgnXSxcclxuICAgIG10OiBbMywgbnVsbCwgbnVsbCwgLTMxLCAzXSxcclxuICAgIG1yOiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2F1dG8nLCAndW5zZXQnXSxcclxuICAgIGdyaWRDb2x1bW46ICcyLzMnLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0JywgJ2NlbnRlcicsICdsZWZ0J10sXHJcbiAgICBhOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICcmOnZpc2l0ZWQnOiB7XHJcbiAgICAgICAgY29sb3I6ICdpbmhlcml0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAoeyB0aXRsZSwgaXRlbXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyV2lkZ2V0fT5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7aXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsLCBpY29uIH0sIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICB7aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e2xhYmVsfSAvPn1cclxuICAgICAgICAgICAgPExpbmsgcGF0aD17cGF0aH0gaHJlZj17cGF0aC50b1N0cmluZygpfSB0YXJnZXQ9XCJfYmxhbmtcIiBrZXk9e2l9IGxhYmVsPXtsYWJlbH0gdmFyaWFudD1cImZvb3RlclwiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmb290ZXJXaWRnZXQ6IHtcclxuICAgIGgzOiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjY4LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgdWw6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbjogJzI4cHggMCAwJyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbGk6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICBtcjogJzE1cHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGE6IHtcclxuICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxyXG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC44KSxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAyLjUsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgQmFyID0gKHsgaXNTdGlja3kgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGV4dFxyXG4gICAgICBhcz1cInNwYW5cIlxyXG4gICAgICBjbGFzc05hbWU9XCJiYXJcIlxyXG4gICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6IGlzU3RpY2t5ID8gJ3RleHQnIDogJ3doaXRlJyB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSGFtYnVyZ2VyTWVudSA9ICh7IGlzT3BlbiwgaXNTdGlja3ksIHRvZ2dsZU1vYmlsZU1lbnUsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBzeD17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgb25DbGljaz17dG9nZ2xlTW9iaWxlTWVudX1cclxuICAgICAgY2xhc3NOYW1lPXtpc09wZW4gPyAnb3BlbicgOiAnJ31cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7WzEsIDIsIDMsIDRdLm1hcCgoYmFyLCBpKSA9PiAoXHJcbiAgICAgICAgPEJhciBrZXk9e2l9IGlzU3RpY2t5PXtpc1N0aWNreX0gLz5cclxuICAgICAgKSl9XHJcbiAgICAgIDxUZXh0IGFzPVwic3BhblwiIHZhcmlhbnQ9XCJzdHlsZXMuc3JPbmx5XCI+XHJcbiAgICAgICAgTWVudVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyTWVudTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGJvcmRlcjogMCxcclxuICAgIHA6IDAsXHJcbiAgICB3aWR0aDogMjAsXHJcbiAgICBoZWlnaHQ6IDE0LFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxyXG4gICAgdHJhbnNpdGlvbjogJy41cyBlYXNlLWluLW91dCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIG91dGxpbmU6IDAsXHJcbiAgICBtbDogWzQsIG51bGwsIDZdLFxyXG4gICAgJy5iYXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBoZWlnaHQ6ICcycHgnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDksXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXHJcbiAgICAgIHRyYW5zaXRpb246ICcuMjVzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgJzpudGgtb2YtdHlwZSgxKSc6IHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgICc6bnRoLW9mLXR5cGUoMiksOm50aC1vZi10eXBlKDMpJzoge1xyXG4gICAgICAgIHRvcDogJzZweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICc6bnRoLW9mLXR5cGUoNCknOiB7XHJcbiAgICAgICAgdG9wOiAnMTJweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYub3Blbic6IHtcclxuICAgICAgJy5iYXInOiB7XHJcbiAgICAgICAgJzpudGgtb2YtdHlwZSgxKSc6IHtcclxuICAgICAgICAgIHRvcDogJzZweCcsXHJcbiAgICAgICAgICB3aWR0aDogJzAlJyxcclxuICAgICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzpudGgtb2YtdHlwZSgyKSc6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzpudGgtb2YtdHlwZSgzKSc6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICc6bnRoLW9mLXR5cGUoNCknOiB7XHJcbiAgICAgICAgICB0b3A6ICc2cHgnLFxyXG4gICAgICAgICAgd2lkdGg6ICcwJScsXHJcbiAgICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdxdWVtLXNvbW9zJyxcclxuICAgIGxhYmVsOiAnUXVlbSBzb21vcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnc2Vydmljb3MnLFxyXG4gICAgbGFiZWw6ICdTZXJ2acOnb3MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2luZm9ybWFjb2VzJyxcclxuICAgIGxhYmVsOiAnQXR1YWxpemUtc2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2NvbnRhdG8nLFxyXG4gICAgbGFiZWw6ICdDb250YXRvJyxcclxuICB9LFxyXG5dO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnUXVlbSBzb21vcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsYWJlbDogJ1NlcnZpw6dvcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsYWJlbDogJ0F0dWFsaXplLXNlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnQ29udGF0bycsXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBGbGV4LCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gJ2NvbXBvbmVudHMvdG9wYmFyJztcclxuaW1wb3J0IExvY2tJY29uIGZyb20gJ2NvbXBvbmVudHMvaWNvbnMvbG9jayc7XHJcbmltcG9ydCBIYW1idXJnZXJNZW51IGZyb20gJ2NvbXBvbmVudHMvaGFtYnVyZ2VyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpc01vYmlsZU1lbnU6IGZhbHNlLFxyXG4gICAgaXNTdGlja3k6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKHN0YXR1cykgPT4ge1xyXG4gICAgc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19GSVhFRFxyXG4gICAgICA/IHNldFN0YXRlKHsgLi4uc3RhdGUsIGlzU3RpY2t5OiB0cnVlIH0pXHJcbiAgICAgIDogc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaXNTdGlja3k6IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgdG9nZ2xlTW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIHNldFN0YXRlKChwcmV2KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBpc01vYmlsZU1lbnU6ICFwcmV2LmlzTW9iaWxlTWVudSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgaXNNb2JpbGVNZW51OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgPFN0aWNreVxyXG4gICAgICAgIGVuYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgdG9wPXswfVxyXG4gICAgICAgIGFjdGl2ZUNsYXNzPVwiaXMtc3RpY2t5XCJcclxuICAgICAgICBpbm5lclo9ezEwMH1cclxuICAgICAgICBvblN0YXRlQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGFzPVwiaGVhZGVyXCJcclxuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5pc1N0aWNreSA/ICdpcy1zdGlja3knIDogJyd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxMb2dvIHN4PXtzdHlsZXMubG9nb30gaXNTdGlja3k9e3N0YXRlLmlzU3RpY2t5fSAvPlxyXG4gICAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgICA8TmF2YmFyXHJcbiAgICAgICAgICAgICAgICBpc1N0aWNreT17c3RhdGUuaXNTdGlja3l9XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZT17c3RhdGUuaXNNb2JpbGVNZW51fVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VNZW51PXtoYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICAgICAgPEhhbWJ1cmdlck1lbnVcclxuICAgICAgICAgICAgICBzeD17c3R5bGVzLmhhbWJ1cmdlcn1cclxuICAgICAgICAgICAgICBpc1N0aWNreT17c3RhdGUuaXNTdGlja3l9XHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtzdGF0ZS5pc01vYmlsZU1lbnV9XHJcbiAgICAgICAgICAgICAgdG9nZ2xlTW9iaWxlTWVudT17dG9nZ2xlTW9iaWxlTWVudX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1N0aWNreT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBweTogNCxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAnJi5pcy1zdGlja3knOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgYm94U2hhZG93OiAnMCA2cHggMTNweCByZ2JhKDM4LDc4LDExOCwwLjEpJyxcclxuICAgICAgcGFkZGluZ1RvcDogJzE1cHgnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgJyYuaXMtbW9iaWxlLW1lbnUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIG1yOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgbnVsbCwgMTJdLFxyXG4gIH0sXHJcbiAgYnV0dG9uR3JvdXA6IHtcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dpbjoge1xyXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgnXSxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgcDogMCxcclxuICAgIG1yOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICBzdmc6IHtcclxuICAgICAgbXI6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgam9pbkNvbW11bml0eToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgbWluSGVpZ2h0OiBbMzAsIG51bGwsIG51bGwsIDQwXSxcclxuICAgIHA6IFsnMCAxMnB4JywgbnVsbCwgbnVsbCwgJzAgMTRweCddLFxyXG4gICAgZm9udFNpemU6IFsnMTBweCcsIG51bGwsIG51bGwsIDFdLFxyXG4gIH0sXHJcbiAgaGFtYnVyZ2VyOiB7XHJcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IE5hdkxpbmssIExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgbWVudUl0ZW1zIGZyb20gJy4vaGVhZGVyLmRhdGEnO1xyXG5pbXBvcnQgbWVudUl0ZW1zUGFnZXMgZnJvbSAnLi9oZWFkZXIuZGF0YS5wYWdlcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoeyBpc1N0aWNreSwgaXNNb2JpbGUsIGhhbmRsZUNsb3NlTWVudSB9KSA9PiB7XHJcbiAgY29uc3QgeyBhc1BhdGggfSA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIGFzPVwibmF2XCJcclxuICAgICAgc3g9e3N0eWxlcy5uYXZiYXJ9XHJcbiAgICAgIGNsYXNzTmFtZT17YG5hdmJhciR7aXNNb2JpbGUgPyAnIGlzLW1vYmlsZScgOiAnJ30ke1xyXG4gICAgICAgIGlzU3RpY2t5ID8gJyBpcy1zdGlja3knIDogJydcclxuICAgICAgfWB9XHJcbiAgICA+XHJcbiAgICAgIHthc1BhdGggPT09ICcvJyA/IChcclxuICAgICAgICBtZW51SXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgIDxOYXZMaW5rIGtleT17aX0gcGF0aD17cGF0aH0gbGFiZWw9e2xhYmVsfSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnV9IC8+XHJcbiAgICAgICAgKSlcclxuICAgICAgKSA6IChcclxuICAgICAgICBtZW51SXRlbXNQYWdlcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgPExpbmsga2V5PXtpfSBwYXRoPXtwYXRofSBsYWJlbD17bGFiZWx9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVudX0gLz5cclxuICAgICAgICApKVxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBuYXZiYXI6IHtcclxuICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnZmxleCddLFxyXG4gICAgYWxpZ25JdGVtczogW251bGwsIG51bGwsIG51bGwsICdjZW50ZXInXSxcclxuICAgIGZsZXhHcm93OiBbbnVsbCwgbnVsbCwgbnVsbCwgMV0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgJysgYSc6IHtcclxuICAgICAgICBtbDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCknOiB7XHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJveFNoYWRvdzogJzBweCAxMXB4IDMwcHggcmdiYSg1MSwgODMsIDE0NSwgMC4wNyknLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICB0b3A6IDcwLFxyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJyxcclxuICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDApJyxcclxuICAgICAgdHJhbnNmb3JtT3JpZ2luOiAndG9wIGxlZnQgMCcsXHJcbiAgICAgIHRyYW5zaXRpb246ICcwLjNzIGVhc2UgMHMnLFxyXG4gICAgICAnJi5pcy1zdGlja3knOiB7XHJcbiAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNmM2YzZjMnLFxyXG4gICAgICB9LFxyXG4gICAgICAnJi5pcy1tb2JpbGUnOiB7XHJcbiAgICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgICB2aXNpYmlsaXR5OiAndmlzaWJsZScsXHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGVZKDEpJyxcclxuICAgICAgfSxcclxuICAgICAgYToge1xyXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAxLFxyXG4gICAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgICBwYWRkaW5nOiAzLFxyXG4gICAgICAgICcrIGEnOiB7XHJcbiAgICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2YzZjNmMycsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJi5pcy1zdGlja3knOiB7XHJcbiAgICAgIHRvcDogNjAsXHJcbiAgICAgIGE6IHtcclxuICAgICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLmFjdGl2ZSc6IHtcclxuICAgICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gTG9jayh7IGZpbGwsIHdpZHRoLCBoZWlnaHQsIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2Z1xyXG4gICAgICB3aWR0aD17d2lkdGggPz8gMTZ9XHJcbiAgICAgIGhlaWdodD17aGVpZ2h0ID8/IDIwfVxyXG4gICAgICB2aWV3Qm94PVwiMCAwIDE2IDIwXCJcclxuICAgICAgZmlsbD1cIm5vbmVcIlxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk0xNS4xNTYgMTYuODkzdi02LjgxMWEyLjIzNyAyLjIzNyAwIDAwLTIuMjMyLTIuMjMzaC0uNTYyVjQuNzA3QTQuNzEzIDQuNzEzIDAgMDA3LjY1NCAwYTQuNzEyIDQuNzEyIDAgMDAtNC43MDMgNC43MDd2LjU0M2MwIC4zNy4zLjY2Ny42NjcuNjY3LjM2NyAwIC42NzItLjMuNjcyLS42Njd2LS41NDNBMy4zNzIgMy4zNzIgMCAwMTcuNjU4IDEuMzRhMy4zNzIgMy4zNzIgMCAwMTMuMzY5IDMuMzY4VjcuODVIMi4zODljLTEuMjMgMC0yLjIzMyAxLTIuMjMzIDIuMjMzdjYuODExYTIuMjM3IDIuMjM3IDAgMDAyLjIzMyAyLjIzM2gxMC41MzhhMi4yMzYgMi4yMzYgMCAwMDIuMjMtMi4yMzN6bS0xMy42NTcgMHYtNi44MTFjMC0uNDkyLjQwMi0uODk0Ljg5NC0uODk0aDEwLjUzNWMuNDkxIDAgLjg5My40MDIuODkzLjg5NHY2LjgxMWEuODk2Ljg5NiAwIDAxLS44OTMuODk0SDIuMzg4YS44OTUuODk1IDAgMDEtLjg4OS0uODk0elwiXHJcbiAgICAgICAgZmlsbD17ZmlsbCA/PyAnI2ZmZid9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxwYXRoXHJcbiAgICAgICAgZD1cIk03LjY1NyAxMS45OWEuNjcuNjcgMCAwMC0uNjcyLjY2OHYxLjczYzAgLjM3LjMuNjY3LjY3Mi42NjcuMzcgMCAuNjY3LS4zLjY2Ny0uNjY4di0xLjcyOWEuNjY3LjY2NyAwIDAwLS42NjctLjY2N3pcIlxyXG4gICAgICAgIGZpbGw9e2ZpbGwgPz8gJyNmZmYnfVxyXG4gICAgICAvPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9jaztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IExvZ28gPSAoeyB3aGl0ZSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnIHZpZXdCb3g9XCIwIDAgMTg1LjkyIDM2LjYyXCIgd2lkdGg9ezE4NS45Mn0gaGVpZ2h0PXszNi42Mn0gey4uLnByb3BzfT5cclxuICAgICAgPGRlZnM+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fYlwiXHJcbiAgICAgICAgICB4MT17MTYuMDh9XHJcbiAgICAgICAgICB5MT17LTE2LjUyfVxyXG4gICAgICAgICAgeDI9ezEwLjI2fVxyXG4gICAgICAgICAgeTI9ezIwLjQ0fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiMwMDk2ZDlcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjMDBjMTk4XCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwcmVmaXhfX2NcIlxyXG4gICAgICAgICAgeDE9ezguOTV9XHJcbiAgICAgICAgICB5MT17MTMuNDh9XHJcbiAgICAgICAgICB4Mj17MTguMjh9XHJcbiAgICAgICAgICB5Mj17MzIuMDJ9XHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzAwMmRkOVwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwMGIyYWJcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fYVwiXHJcbiAgICAgICAgICB4MT17MjMuMzN9XHJcbiAgICAgICAgICB5MT17LTMuMzl9XHJcbiAgICAgICAgICB4Mj17NS42Nn1cclxuICAgICAgICAgIHkyPXszNy42NX1cclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjMzQ4MmMwXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC40NX0gc3RvcENvbG9yPVwiIzk2YmVkZVwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuODN9IHN0b3BDb2xvcj1cIiNlMWVkZjZcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwcmVmaXhfX2RcIlxyXG4gICAgICAgICAgeDE9ezIxLjY0fVxyXG4gICAgICAgICAgeTE9ezEuNDJ9XHJcbiAgICAgICAgICB4Mj17Ni42M31cclxuICAgICAgICAgIHkyPXszMC40NH1cclxuICAgICAgICAgIHhsaW5rSHJlZj1cIiNwcmVmaXhfX2FcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fZVwiXHJcbiAgICAgICAgICB4MT17MjUuMTV9XHJcbiAgICAgICAgICB5MT17My4yNH1cclxuICAgICAgICAgIHgyPXsxMC4xNH1cclxuICAgICAgICAgIHkyPXszMi4yNX1cclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjNTY5ZmExXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC4zNn0gc3RvcENvbG9yPVwiIzk3YzRjNVwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuOH0gc3RvcENvbG9yPVwiI2UyZWVlZlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNmZmZcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPHJhZGlhbEdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fZlwiXHJcbiAgICAgICAgICBjeD17MjEuMTZ9XHJcbiAgICAgICAgICBjeT17MzIuMDV9XHJcbiAgICAgICAgICByPXsyNy4yNX1cclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjZmYwXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gLz5cclxuICAgICAgICA8L3JhZGlhbEdyYWRpZW50PlxyXG4gICAgICA8L2RlZnM+XHJcbiAgICAgIDxnIGRhdGEtbmFtZT1cIkxheWVyIDJcIj5cclxuICAgICAgICA8ZyBkYXRhLW5hbWU9XCJMYXllciAxXCI+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTM5LjY0IDIyLjloMi44NWExLjg2IDEuODYgMCAwMC45IDEuNCAzLjY3IDMuNjcgMCAwMDIgLjUzIDMuMzMgMy4zMyAwIDAwMS45LS41QTEuNSAxLjUgMCAwMDQ4IDIzYTEuMzIgMS4zMiAwIDAwLS41NC0xLjEgNC45MSA0LjkxIDAgMDAtMS44My0uNzFsLTEuODQtLjRRNDAgMjAgNDAgMTYuOWEzLjgxIDMuODEgMCAwMTEuNS0zLjEzIDYuMTQgNi4xNCAwIDAxMy44OS0xLjE5IDYuMDcgNi4wNyAwIDAxMy44OSAxLjE2IDMuODYgMy44NiAwIDAxMS41IDMuMDhINDhhMS43NyAxLjc3IDAgMDAtLjc5LTEuNCAzIDMgMCAwMC0xLjgyLS41MiAzIDMgMCAwMC0xLjc3LjQ4IDEuNDkgMS40OSAwIDAwLS42NiAxLjI2IDEuMjUgMS4yNSAwIDAwLjUzIDEuMDUgNS4yOSA1LjI5IDAgMDAxLjc3LjY4bDEuNzEuMzZBNi4xOCA2LjE4IDAgMDE1MCAyMC4xNGEzLjQyIDMuNDIgMCAwMTEgMi41NiAzLjkzIDMuOTMgMCAwMS0xLjU1IDMuMyA2LjYzIDYuNjMgMCAwMS00LjE3IDEuMiA2LjY1IDYuNjUgMCAwMS00LjA2LTEuMiAzLjkgMy45IDAgMDEtMS41OC0zLjF6TTUzLjMzIDE0aDIuODV2Mi40MmgxLjkzdjIuMThoLTEuOTN2NWMwIC43OC40MSAxLjE4IDEuMjMgMS4xOGE0LjQ0IDQuNDQgMCAwMC42OS0uMDV2Mi4xYTYuMTIgNi4xMiAwIDAxLTEuMzYuMTEgNC4xIDQuMSAwIDAxLTIuNjMtLjY2IDIuNzQgMi43NCAwIDAxLS43OC0yLjJWMTguNmgtMS40OHYtMi4xNWgxLjQ4em0xMC4yOSAxMWEyLjM5IDIuMzkgMCAwMDEuNi0uNTUgMS43NCAxLjc0IDAgMDAuNjYtMS4zOXYtLjc2bC0yLjIuMTNhMi4zIDIuMyAwIDAwLTEuMjQuNCAxLjA5IDEuMDkgMCAwMC0uNDMuOSAxLjEgMS4xIDAgMDAuNDQuOTMgMS44MyAxLjgzIDAgMDAxLjE3LjM0em0tLjk0IDIuMDZhMy42IDMuNiAwIDAxLTIuNTEtLjg5IDIuOTIgMi45MiAwIDAxLTEtMi4yOCAyLjY4IDIuNjggMCAwMTEtMi4yNCA1LjQzIDUuNDMgMCAwMTMtLjkzbDIuNjMtLjE1di0uN2ExLjQgMS40IDAgMDAtLjQ3LTEuMTMgMS45MSAxLjkxIDAgMDAtMS4yOC0uNDEgMi4yIDIuMiAwIDAwLTEuMjguMzUgMS40NCAxLjQ0IDAgMDAtLjYuOTVoLTIuNTNBMy4yMSAzLjIxIDAgMDE2MSAxNy4xN2E1LjMxIDUuMzEgMCAwMTMuMjktMSA1LjA1IDUuMDUgMCAwMTMuMjMgMSAzLjA5IDMuMDkgMCAwMTEuMjEgMi41NHY3LjJoLTIuOHYtMS42aC0uMDZhMy4wOCAzLjA4IDAgMDEtMS4zIDEuMyAzLjg5IDMuODkgMCAwMS0xLjg5LjQ3em03Ljg1LS4xNlYxNi40NWgyLjc2djEuODhoLjA2YTIuODYgMi44NiAwIDAxLjkxLTEuNTIgMi40MyAyLjQzIDAgMDExLjU4LS41MyAyLjg4IDIuODggMCAwMS44MS4xMXYyLjUxYTIuNzkgMi43OSAwIDAwLTEtLjE3IDIuMTYgMi4xNiAwIDAwLTEuNjQuNjIgMi4zOSAyLjM5IDAgMDAtLjU5IDEuNzJ2NS44NXptOC0xMi44OWgyLjg1djIuNDJoMS45NHYyLjE3aC0xLjg5djVjMCAuNzguNDEgMS4xOCAxLjIzIDEuMThhNC42OCA0LjY4IDAgMDAuNy0uMDV2Mi4xQTYuMjQgNi4yNCAwIDAxODIgMjdhNC4xNSA0LjE1IDAgMDEtMi42NC0uNjYgMi43NCAyLjc0IDAgMDEtLjc4LTIuMlYxOC42aC0xLjQ3di0yLjE1aDEuNDd6bTE2IDIuNDJ2MTAuNDloLTIuNjlWMjVoLS4wNmEzLjA3IDMuMDcgMCAwMS0zLjEzIDIuMDggMy43MSAzLjcxIDAgMDEtMi43NS0xIDQgNCAwIDAxLTEtMi44N3YtNi43NmgyLjg1djYuMTVhMi4yOCAyLjI4IDAgMDAuNSAxLjU5IDEuODYgMS44NiAwIDAwMS40NS41NSAxLjkgMS45IDAgMDAxLjUxLS42MyAyLjQgMi40IDAgMDAuNTUtMS42N3YtNnptOC0uMTdhMy43OSAzLjc5IDAgMDEzLjE0IDEuNDQgNi4xNCA2LjE0IDAgMDExLjE1IDQgNi4zMyA2LjMzIDAgMDEtMS4xMyA0IDQuMSA0LjEgMCAwMS01LjA5LjkyIDMuMTUgMy4xNSAwIDAxLTEuMjctMS40MWgtLjAzdjUuMTdoLTIuODVWMTYuNDVoMi44MXYxLjgyaC4wNmEzLjM1IDMuMzUgMCAwMTEuMjctMS40NiAzLjcgMy43IDAgMDExLjk3LS41M3ptLTEgOC41MWEyIDIgMCAwMDEuNzctLjc3IDMuNzEgMy43MSAwIDAwLjYzLTIuMjcgMy42NyAzLjY3IDAgMDAtLjYzLTIuMjYgMiAyIDAgMDAtMS42OS0uODUgMiAyIDAgMDAtMS42OC44NiAzLjYgMy42IDAgMDAtLjY0IDIuMjUgMy43MyAzLjczIDAgMDAuNjMgMi4yNyAyIDIgMCAwMDEuNjkuNzl6bTIyLjA3LS4zMnYyLjQ1aC05LjExVjEyLjgyaDN2MTEuNjV6bTUuNTUuNTVhMi4zOSAyLjM5IDAgMDAxLjYtLjU1IDEuNzQgMS43NCAwIDAwLjY2LTEuMzl2LS43NmwtMi4yLjEzYTIuMyAyLjMgMCAwMC0xLjI0LjQgMS4wOSAxLjA5IDAgMDAtLjQzLjkgMS4xIDEuMSAwIDAwLjQ0LjkzIDEuODMgMS44MyAwIDAwMS4yNS4zNHptLS45NCAyLjA2YTMuNTkgMy41OSAwIDAxLTIuNTEtLjg5IDIuOTIgMi45MiAwIDAxLTEtMi4yOCAyLjY4IDIuNjggMCAwMTEtMi4yNCA1LjQzIDUuNDMgMCAwMTMtLjkzbDIuNjMtLjE1di0uN2ExLjQzIDEuNDMgMCAwMC0uNDctMS4xMyAxLjkxIDEuOTEgMCAwMC0xLjI4LS40MSAyLjE4IDIuMTggMCAwMC0xLjI4LjM1IDEuNDQgMS40NCAwIDAwLS42Ljk1aC0yLjYxYTMuMjEgMy4yMSAwIDAxMS4zMi0yLjQ4IDUuMzEgNS4zMSAwIDAxMy4yOS0xIDUuMDcgNS4wNyAwIDAxMy4yMyAxIDMuMDkgMy4wOSAwIDAxMS4yMSAyLjU0djcuMmgtMi43NnYtMS41OGgtLjA2YTMuMDggMy4wOCAwIDAxLTEuMyAxLjMgMy44OSAzLjg5IDAgMDEtMS43My40N3ptNy44NS0uMTZWMTYuNDVoMi43NnYxLjg2aC4xOGEzLjI2IDMuMjYgMCAwMTEuMjUtMS41MiAzLjYgMy42IDAgMDEyLS41NCAzLjQ2IDMuNDYgMCAwMTIuNjggMSA0LjEyIDQuMTIgMCAwMTEgMi44OHY2Ljc1SDE0M3YtNi4xMmEyLjMxIDIuMzEgMCAwMC0uNDktMS41OSAxLjgzIDEuODMgMCAwMC0xLjQ0LS41NSAyIDIgMCAwMC0xLjUyLjYzIDIuMzkgMi4zOSAwIDAwLS41NyAxLjY2djZ6bTE1LjQxLjE2YTMuNzUgMy43NSAwIDAxLTMuMTEtMS40NSA2LjIxIDYuMjEgMCAwMS0xLjE1LTQgNi4xMSA2LjExIDAgMDExLjE1LTMuOTMgMy43OSAzLjc5IDAgMDEzLjEzLTEuNDUgMy41MyAzLjUzIDAgMDEyIC41NCAzLjE3IDMuMTcgMCAwMTEuMjUgMS40MnYtNS4zN2gyLjg2djE0LjFoLTIuODJ2LTEuOGgtLjA1YTMuMDkgMy4wOSAwIDAxLTEuMjYgMS40MiAzLjY3IDMuNjcgMCAwMS0xLjkyLjU0em0xLTguNTFhMiAyIDAgMDAtMS43Ljg0IDMuNzUgMy43NSAwIDAwLS42MSAyLjI3IDMuNzYgMy43NiAwIDAwLjYxIDIuMjggMi4xNSAyLjE1IDAgMDAzLjM5IDAgMy43MiAzLjcyIDAgMDAuNjMtMi4yOCAzLjY3IDMuNjcgMCAwMC0uNjMtMi4yNiAyIDIgMCAwMC0xLjY0LS44M3ptNy4xMSA4LjM1VjE2LjQ1aDIuODV2MTAuNDd6bTIuNTEtMTIuMDVhMS41MiAxLjUyIDAgMDEtMS4wOS40MiAxLjQ5IDEuNDkgMCAwMS0xLjA4LS40MiAxLjQ0IDEuNDQgMCAwMS0uNDQtMSAxLjM4IDEuMzggMCAwMS40NC0xIDEuNDYgMS40NiAwIDAxMS4wOC0uNDMgMS40OSAxLjQ5IDAgMDExLjA5LjQzIDEuMzggMS4zOCAwIDAxLjQ0IDEgMS40NCAxLjQ0IDAgMDEtLjM5IDEuMDJ6bTIuMjQgMTIuMDVWMTYuNDVoMi43NnYxLjg2aC4wNmEzLjI2IDMuMjYgMCAwMTEuMjUtMS41MiAzLjYgMy42IDAgMDEyLS41NCAzLjQ0IDMuNDQgMCAwMTIuNjggMSA0LjA3IDQuMDcgMCAwMS45NSAyLjg4djYuNzVoLTIuODV2LTYuMTJhMi4zMSAyLjMxIDAgMDAtLjQ5LTEuNTkgMS43OSAxLjc5IDAgMDAtMS40My0uNTUgMiAyIDAgMDAtMS41My42MyAyLjQzIDIuNDMgMCAwMC0uNTYgMS42NnY2em0xNi4zNi0yLjIzYTIuMDUgMi4wNSAwIDAwMS43LS44IDMuNDggMy40OCAwIDAwLjY0LTIuMjMgMy42IDMuNiAwIDAwLS42NC0yLjI1IDIgMiAwIDAwLTEuNy0uODQgMiAyIDAgMDAtMS42OC44NCAzLjY5IDMuNjkgMCAwMC0uNjEgMi4yNSAzLjYgMy42IDAgMDAuNjEgMi4yMyAyIDIgMCAwMDEuNzMuODJ6bS0uMDUgNi4xN2E1Ljg0IDUuODQgMCAwMS0zLjM2LS45IDMuMTkgMy4xOSAwIDAxLTEuNDgtMi4zaDIuNzlhMS41NCAxLjU0IDAgMDAuNzQuODggMi44IDIuOCAwIDAwMS4zOS4zNCAyLjQxIDIuNDEgMCAwMDEuNjktLjU2IDEuODUgMS44NSAwIDAwLjYxLTEuNDdWMjVIMTgzYTMgMyAwIDAxLTEuMjQgMS4zNyAzLjg5IDMuODkgMCAwMS0yIC41MSAzLjggMy44IDAgMDEtMy4wOS0xLjQxIDUuODggNS44OCAwIDAxLTEuMTUtMy44NCA2LjA2IDYuMDYgMCAwMTEuMTUtMy45MiAzLjgyIDMuODIgMCAwMTMuMTQtMS40NCAzLjU5IDMuNTkgMCAwMTIgLjU0IDMuMzcgMy4zNyAwIDAxMS4yNyAxLjQ1di0xLjgxaDIuODJ2MTAuMzJhMy41OCAzLjU4IDAgMDEtMS40NCAzIDYgNiAwIDAxLTMuNzcgMS4wOXpcIlxyXG4gICAgICAgICAgICBmaWxsPXt3aGl0ZSA/ICd3aGl0ZScgOiAnIzBmMjEzNyd9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0xOS44LjUzQTE1LjczIDE1LjczIDAgMDA0LjY1IDI2Ljg5TDIyLjE3IDkuMzdBNS4yOSA1LjI5IDAgMDAxOS44LjUzelwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3ByZWZpeF9fYilcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNNi42NSAzNi4wOUExNS43MyAxNS43MyAwIDAwMjEuODEgOS43M0w0LjI5IDI3LjI1YTUuMjggNS4yOCAwIDAwMi4zNiA4Ljg0elwiXHJcbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3ByZWZpeF9fYylcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMjEuODEgOS43M0w0LjI5IDI3LjI1YTUuMjggNS4yOCAwIDAwMi4zNiA4Ljg0IDE1LjcyIDE1LjcyIDAgMDA1Ljc1LjQ0Yy03LjY4LTcuMzkgOS40MS0yNi44IDkuNDEtMjYuOHpcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19hKVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGdcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgICAgZD1cIk02LjMzIDM2Yy0yLjQ5LTcuNyAxMi40NS0yMy4yMSAxNS4wOS0yNS44N0w0LjI5IDI3LjI1QTUuMjggNS4yOCAwIDAwNi4zMyAzNnpcIlxyXG4gICAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3ByZWZpeF9fZClcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8cGF0aCBkPVwiTTIxLjc1IDkuNzlsLjA2LS4wNnpcIiBmaWxsPVwidXJsKCNwcmVmaXhfX2UpXCIgLz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMjMuNDUgNy4yOUw0LjY0IDI2Ljg4IDIyLjE3IDkuMzdhNS4xNCA1LjE0IDAgMDAxLjI4LTIuMDh6XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6ICdzY3JlZW4nLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNwcmVmaXhfX2YpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9nPlxyXG4gICAgICA8L2c+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbztcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgSW1hZ2UgYXMgSW1nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW1hZ2UoeyBzcmMsIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiA8SW1nIHNyYz17c3JjfSB7Li4ucmVzdH0gLz47XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9oZWFkZXIvaGVhZGVyJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICcuL2Zvb3Rlci9mb290ZXInO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMYXlvdXQoeyBjaGlsZHJlbiB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8bWFpblxyXG4gICAgICAgIHN4PXt7XHJcbiAgICAgICAgICB2YXJpYW50OiAnbGF5b3V0Lm1haW4nLFxyXG4gICAgICAgIH19XHJcbiAgICAgID5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgIDwvbWFpbj5cclxuICAgICAgPEZvb3RlciAvPlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMZ3BkKCkge1xyXG4gIGNvbnN0IFtpc09wZW4sIHNldElzT3Blbl0gPSB1c2VTdGF0ZSgpXHJcbiBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IGFjZWl0ZUxncGQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdhY2VpdGVMZ3BkJylcclxuICAgIGFjZWl0ZUxncGQgPT0gbnVsbCA/IHNldElzT3Blbih0cnVlKSA6IHNldElzT3BlbihmYWxzZSlcclxuICB9LCBbXSk7XHJcblxyXG5cclxuICBmdW5jdGlvbiBjbG9zZUxncGQoKSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdhY2VpdGVMZ3BkJywgdHJ1ZSlcclxuICAgIHNldElzT3BlbihmYWxzZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBpc09wZW4gPyAoXHJcbiAgICAgIDxkaXYgc3g9eyBzdHlsZXMuY29va2llUG9wdXB9PlxyXG4gICAgICAgIDxwPkVzdGUgc2l0ZSBuw6NvIHV0aWxpemEgY29va2llcyBlIG7Do28gY2FwdHVyYSBkYWRvcy48L3A+XHJcbiAgICAgICAgPGRpdiBzeD17IHN0eWxlcy5jb29raWVQb3B1cEFjdGlvbnMgfT5cclxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17Y2xvc2VMZ3BkfT5PaywgZW50ZW5kaSE8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApIDogKFxyXG4gICAgICA8PlxyXG4gICAgICA8Lz5cclxuICAgIClcclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgY29va2llUG9wdXAgOiB7XHJcbiAgICBmb250U2l6ZTogJzAuODc1cmVtJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBib3R0b206ICcxLjI1cmVtJyxcclxuICAgIHBhZGRpbmc6ICcwLjYyNXJlbSAwLjkzNzVyZW0nLFxyXG4gICAgYm94U2hhZG93OiAnMCAwIDAuNjI1cmVtIDAgcmdiYSgwLDAsMCwgLjE1KScsXHJcbiAgICBsaW5lSGVpZ2h0OiAnMTUwJScsXHJcbiAgICB0cmFuc2l0aW9uOiAnb3BhY2l0eSAuNXMnLFxyXG4gICAgb3BhY2l0eTogJzEnLFxyXG4gICAgekluZGV4OiAnMicsXHJcbiAgICByaWdodDogJzQlJyxcclxuICAgIHdpZHRoOiAnOTIlJyxcclxuICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiAnc2t5Ymx1ZScsXHJcbiAgICAgICcmOnZpc2l0ZWQnOiB7XHJcbiAgICAgICAgY29sb3I6ICdza3libHVlJyxcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb29raWVQb3B1cEFjdGlvbnM6IHtcclxuICAgIGZsZXg6ICcxJyxcclxuICAgIHRleHRBbGlnbjogJ3JpZ2h0JyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgY29sb3I6ICdvcmFuZ2UnLFxyXG4gICAgICBib3JkZXI6ICdub25lJyxcclxuICAgICAgYmFja2dyb3VuZDogJ25vbmUnLFxyXG4gICAgICBmb250RmFtaWx5OiAnaW5oZXJpdCcsXHJcbiAgICAgIGZvbnRTdHlsZTogJ2luaGVyaXQnLFxyXG4gICAgICBmb250U2l6ZTogJ2luaGVyaXQnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICBmb250U2l6ZTogICcwLjc1cmVtJyxcclxuICAgICAgcGFkZGluZzogJzAnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBqc3gsIExpbmsgYXMgQSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayBhcyBNZW51TGluayB9IGZyb20gJ3JlYWN0LXNjcm9sbCc7XHJcbmltcG9ydCB7IElvSW9zQXJyb3dGb3J3YXJkIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyBrZXlmcmFtZXMgfSBmcm9tICdAZW1vdGlvbi9jb3JlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBOYXZMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE1lbnVMaW5rXHJcbiAgICAgIHRvPXtwYXRofVxyXG4gICAgICBzcHk9e3RydWV9XHJcbiAgICAgIG9mZnNldD17LTcwfVxyXG4gICAgICBzbW9vdGg9e3RydWV9XHJcbiAgICAgIGR1cmF0aW9uPXs1MDB9XHJcbiAgICAgIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCJcclxuICAgICAgYWN0aXZlQ2xhc3M9XCJhY3RpdmVcIlxyXG4gICAgICB7Li4ucmVzdH1cclxuICAgID5cclxuICAgICAge2xhYmVsfVxyXG4gICAgPC9NZW51TGluaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofT5cclxuICAgICAgPEEgey4uLnJlc3R9PntjaGlsZHJlbiA/IGNoaWxkcmVuIDogbGFiZWx9PC9BPlxyXG4gICAgPC9OZXh0TGluaz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTGVhcm5Nb3JlKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICA8QSBzeD17c3R5bGVzLmxlYXJuTW9yZX0gey4uLnJlc3R9PlxyXG4gICAgICAgIHtsYWJlbCA/PyAnTGVhcm4gTW9yZSd9IDxJb0lvc0Fycm93Rm9yd2FyZCBzaXplPVwiMTZweFwiIC8+XHJcbiAgICAgIDwvQT5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgZmFkZVJpZ2h0ID0ga2V5ZnJhbWVzYFxyXG4gIGZyb20ge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNXB4KTtcclxuICB9XHJcbiAgdG86IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGxlYXJuTW9yZToge1xyXG4gICAgY29sb3I6ICdsaW5rJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgc3ZnOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoM3B4KScsXHJcbiAgICB9LFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBgJHtmYWRlUmlnaHR9IDAuNXMgbGluZWFyYCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuaW1wb3J0IExvZ29TdmcgZnJvbSAnY29tcG9uZW50cy9pY29ucy9sb2dvJztcclxuaW1wb3J0IGxvZ28gZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvLnBuZydcclxuaW1wb3J0IGxvZ29CcmFuY28gZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvX2JyYW5jby5wbmcnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dvKHsgaXNTdGlja3ksIGZvb3RlciwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGluayBwYXRoPVwiL1wiIHN4PXtzdHlsZXMubG9nb30gey4uLnByb3BzfT5cclxuICAgICAge2lzU3RpY2t5ID8gKFxyXG4gICAgICAgICAgPEltYWdlIHNyYz17bG9nb30gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPEltYWdlIHNyYz17bG9nb0JyYW5jb30gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgKX1cclxuICAgICAgey8qIDxMb2dvU3ZnIHdoaXRlPXshaXNTdGlja3l9IC8+ICovfVxyXG4gICAgPC9MaW5rPlxyXG4gICk7XHJcbn1cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGxvZ286IHtcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgc3ZnOiB7XHJcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgICB3aWR0aDogWzEyOCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0LCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmNvbnN0IFNlY3Rpb25IZWFkaW5nID0gKHsgdGl0bGUsIHNsb2dhbiwgZGVzY3JpcHRpb24sIGVtb2ppLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkaW5nfSB7Li4ucHJvcHN9PlxyXG4gICAgICB7c2xvZ2FuICYmIChcclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnNsb2dhbn0+XHJcbiAgICAgICAgICB7c2xvZ2FufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgKX1cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgIHtlbW9qaSA/IDxzcGFuPnt0aXRsZX08L3NwYW4+IDogdGl0bGV9XHJcbiAgICAgICAge2Vtb2ppICYmIDxJbWFnZSBzcmM9e2Vtb2ppfSBhbHQ9XCJlbW9qaVwiIC8+fVxyXG4gICAgICA8L0hlYWRpbmc+XHJcbiAgICAgIHtkZXNjcmlwdGlvbiAmJiAoXHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XHJcbiAgICAgICAgICB7ZGVzY3JpcHRpb259XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfVxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlY3Rpb25IZWFkaW5nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRpbmc6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBtYXhXaWR0aDogNjYwLFxyXG4gICAgbWFyZ2luOiAnMCBhdXRvIDUwcHgnLFxyXG4gIH0sXHJcbiAgc2xvZ2FuOiB7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IDIsXHJcbiAgICBsaW5lSGVpZ2h0OiAyLjUsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIGZvbnRXZWlnaHQ6IDYwMCxcclxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS4zMywgMS4zMywgMS41XSxcclxuICAgIGxldHRlclNwYWNpbmc6IFtudWxsLCBudWxsLCBudWxsLCAnaGVhZGluZyddLFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIG1sOiBbJzE1cHgnXSxcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgIHRvcDogJzhweCcsXHJcbiAgICAgIG1heFdpZHRoOiBbMjUsIG51bGwsIG51bGwsICcxMDAlJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICBmb250U2l6ZTogWycxNHB4JywgbnVsbCwgJzE2cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg2LCBudWxsLCAyLjJdLFxyXG4gICAgbXQ6IFs1XSxcclxuICAgIG1heFdpZHRoOiA2MTAsXHJcbiAgICBtOiBbJzEwcHggYXV0byAwJ10sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNFTyh7XHJcbiAgZGVzY3JpcHRpb24gPSAnc3RhcnR1cCBsYW5kaW5nIGRlc2NyaXB0aW9ucycsXHJcbiAgYXV0aG9yID0gJ1JlZFEsIEluYycsXHJcbiAgbWV0YSxcclxuICB0aXRsZSA9ICdzdGFydHVwIGxhbmRpbmcgdGl0bGUnLFxyXG59KSB7XHJcbiAgY29uc3QgbWV0YURhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGBkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzp0aXRsZWAsXHJcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgcHJvcGVydHk6IGBvZzp0eXBlYCxcclxuICAgICAgY29udGVudDogYHdlYnNpdGVgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y2FyZGAsXHJcbiAgICAgIGNvbnRlbnQ6IGBzdW1tYXJ5YCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNyZWF0b3JgLFxyXG4gICAgICBjb250ZW50OiBhdXRob3IsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjp0aXRsZWAsXHJcbiAgICAgIGNvbnRlbnQ6IHRpdGxlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgXS5jb25jYXQobWV0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgIHttZXRhRGF0YS5tYXAoKHsgbmFtZSwgY29udGVudCB9LCBpKSA9PiAoXHJcbiAgICAgICAgPG1ldGEga2V5PXtpfSBuYW1lPXtuYW1lfSBjb250ZW50PXtjb250ZW50fSAvPlxyXG4gICAgICApKX1cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG59XHJcblxyXG5TRU8uZGVmYXVsdFByb3BzID0ge1xyXG4gIGxhbmc6IGBlbmAsXHJcbiAgbWV0YTogW10sXHJcbiAgZGVzY3JpcHRpb246IGBgLFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCdXR0b24sIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IEJzQXJyb3dMZWZ0LCBCc0Fycm93UmlnaHQgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgU2xpY2tBcnJvdyA9ICh7IGNsYXNzTmFtZSwgb25DbGljaywgY29udHJvbCB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCdXR0b25cclxuICAgICAgdmFyaWFudD1cInRleHRcIlxyXG4gICAgICBvbkNsaWNrPXtvbkNsaWNrfVxyXG4gICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZX1cclxuICAgICAgc3g9e3N0eWxlcy5wYWdpbmF0aW9uQnV0dG9ufVxyXG4gICAgPlxyXG4gICAgICB7Y29udHJvbCA9PT0gJ3ByZXYnID8gKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiIHZhcmlhbnQ9XCJzdHlsZXMuc3JPbmx5XCI+XHJcbiAgICAgICAgICAgIFByZXZcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxCc0Fycm93TGVmdCBzaXplPVwiMzJweFwiIC8+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgKSA6IChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxyXG4gICAgICAgICAgICBOZXh0XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8QnNBcnJvd1JpZ2h0IHNpemU9XCIzMnB4XCIgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApfVxyXG4gICAgPC9CdXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNsaWNrQXJyb3c7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcGFnaW5hdGlvbkJ1dHRvbjoge1xyXG4gICAgbWluSGVpZ2h0OiAnMzBweCcsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICAnOmZvY3VzJzoge1xyXG4gICAgICBvdXRsaW5lOiAnMCBub25lJyxcclxuICAgIH0sXHJcbiAgICBzdmc6IHtcclxuICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjJzIGVhc2UtaW4tb3V0IDBzJyxcclxuICAgIH0sXHJcbiAgICAnJi5zbGljay1kaXNhYmxlZCc6IHtcclxuICAgICAgY29sb3I6ICcjQkJDN0Q3JyxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiAnc2NhbGUoMC44KScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYuc2xpY2stcHJldic6IHtcclxuICAgICAgbGVmdDogJ2NhbGMoNTAlIC0gMTZweCknLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcclxuICAgIH0sXHJcbiAgICAnJi5zbGljay1uZXh0Jzoge1xyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDUwJSknLFxyXG4gICAgICByaWdodDogJ2NhbGMoNTAlIC0gMTZweCknLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGxhYmVsOiAndGlAc2VydmNvbjEuY29tJyxcclxuICAgIGluZm86ICdtYWlsdG86dGlAc2VydmNvbjEuY29tJyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnKDg4KSAzNjY5LTExNDYnLFxyXG4gICAgaW5mbzogJ3RlbDogODgzNjY5MTE0NicsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJyg4OCkgOTkxMi02NjIwJyxcclxuICAgIGluZm86ICdodHRwczovL3dhLm1lLzU1ODg5OTEyNjYyMCcsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLnRvcGJhcn0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XHJcbiAgICAgICAgICBObyBtZXJjYWRvIGjDoSBtYWlzIGRlIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDAwfSBhbm9zLCBlc3RhbW9zIHNlbXByZSBidXNjYW5kbyBvcyByZXF1aXNpdG9zIHBhcmEgYXRlbmRlciBhcyBleHBlY3RhdGl2YXMgZG9zIG5vc3NvcyBjbGllbnRlcy5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgY2xhc3NOYW1lPVwidGxkc1wiPlxyXG4gICAgICAgICAge2RhdGEubWFwKCh7bGFiZWwsIGluZm99LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2luZm99IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB0b3BiYXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgcHg6IFs2LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIHB5OiBbJzEycHgnXSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGRpc3BsYXk6IFsnZmxleCddLFxyXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbJ3NwYWNlLWJldHdlZW4nXSxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6IFsxXSxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIG1heFdpZHRoOiAxMzY2LFxyXG4gICAgcGw6ICczMHB4JyxcclxuICAgIHByOiAnMzBweCcsXHJcbiAgICBtOiAnMCBhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBzcGFuOiB7XHJcbiAgICAgICcrIHNwYW4nOiB7XHJcbiAgICAgICAgbWw6IFs0XSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcHRpb24nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cclxuICAgICAgd2lkdGg6IFsxOTksIG51bGwsIG51bGwsICdhdXRvJ10sXHJcbiAgICAgIG92ZXJmbG93OiBbJ2hpZGRlbicsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG4gICAgICB3aGl0ZVNwYWNlOiBbJ25vd3JhcCcsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG5cclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbXI6IFsyLCBudWxsLCBudWxsLCAzXSxcclxuICAgICAgICBtaW5XaWR0aDogMjAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy50bGRzJzoge1xyXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnZmxleCddLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBzdHJvbmc6IHtcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgJysgc3Ryb25nJzoge1xyXG4gICAgICAgIG1sOiAzLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogWycxM3B4JywgbnVsbCwgbnVsbCwgMSwgMV0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIG1sOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDEzXSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbWw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xyXG4gICAgICAgIG1sOiA0LFxyXG4gICAgICAgIHBsOiA0LFxyXG4gICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgI2ZmZmZmZjIxJ1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJwYWdlcy9hcGkvYXBpXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvcm1hY29lc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmZ1bmN0aW9uIG9yZ2FuaXphck9icmlnYWNvZXNQb3JFc3RhZG8ob2JyaWdhY29lc0dlcmFsKSB7XHJcbiAgY29uc3QgZXNwaXJpdG9TYW50byA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE2OClcclxuICBjb25zdCBtYXRvR3Jvc3NvRG9TdWwgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSA1NDQzKVxyXG4gIGNvbnN0IG1pbmFzR2VyYWlzID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTY5KVxyXG4gIGNvbnN0IHJpb0dyYW5kZURvU3VsID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTU1KVxyXG4gIGNvbnN0IHBhcmFuYSA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1OClcclxuICBjb25zdCByaW9EZUphbmVpcm8gPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTMpXHJcbiAgY29uc3Qgc2FudGFDYXRhcmluYSA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1NClcclxuICBjb25zdCBzYW9QYXVsbyA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1MilcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVzcGlyaXRvU2FudG86IFsgLi4uZXNwaXJpdG9TYW50byBdLFxyXG4gICAgbWF0b0dyb3Nzb0RvU3VsOiBbIC4uLm1hdG9Hcm9zc29Eb1N1bCBdLFxyXG4gICAgbWluYXNHZXJhaXM6IFsgLi4ubWluYXNHZXJhaXMgXSxcclxuICAgIHJpb0dyYW5kZURvU3VsOiBbIC4uLnJpb0dyYW5kZURvU3VsIF0sXHJcbiAgICBwYXJhbmE6IFsgLi4ucGFyYW5hIF0sXHJcbiAgICByaW9EZUphbmVpcm86IFsgLi4ucmlvRGVKYW5laXJvIF0sXHJcbiAgICBzYW50YUNhdGFyaW5hOiBbIC4uLnNhbnRhQ2F0YXJpbmEgXSxcclxuICAgIHNhb1BhdWxvOiBbIC4uLnNhb1BhdWxvIF0sXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluZm9ybWFjb2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW25vdGljaWFzLCBzZXROb3RpY2lhc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbb2JyaWdhY29lcywgc2V0T2JyaWdhY29lc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYWdlbmRhLCBzZXRBZ2VuZGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2NvdGFjb2VzLCBzZXRDb3RhY29lc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVybDEgPSBhcGkuZ2V0KCdub3RpY2lhcycpXHJcbiAgICBjb25zdCB1cmwyID0gYXBpLmdldCgnY290YWNvZXMnKVxyXG4gICAgY29uc3QgdXJsMyA9IGFwaS5nZXQoJ29icmlnYWNvZXMnKVxyXG4gICAgY29uc3QgdXJsNCA9IGFwaS5nZXQoJ2FnZW5kYScpXHJcbiAgICBheGlvcy5hbGwoW3VybDEsIHVybDIsIHVybDMsIHVybDRdKVxyXG4gICAgICAudGhlbihheGlvcy5zcHJlYWQoKC4uLnJlc3BvbnNlcykgPT4ge1xyXG4gICAgICAgIHNldE5vdGljaWFzKHJlc3BvbnNlc1swXS5kYXRhKVxyXG4gICAgICAgIHNldENvdGFjb2VzKHJlc3BvbnNlc1sxXS5kYXRhKVxyXG4gICAgICAgIHNldE9icmlnYWNvZXMob3JnYW5pemFyT2JyaWdhY29lc1BvckVzdGFkbyhyZXNwb25zZXNbMl0uZGF0YSkpXHJcbiAgICAgICAgc2V0QWdlbmRhKHJlc3BvbnNlc1szXS5kYXRhKVxyXG4gICAgICB9KSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbmZvcm1hY29lc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbm90aWNpYXMsIG9icmlnYWNvZXMsIGFnZW5kYSwgY290YWNvZXMgfX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9JbmZvcm1hY29lc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5mb3JtYWNvZXMoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoSW5mb3JtYWNvZXNDb250ZXh0KVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiAnaHR0cHM6Ly9tb2RlbG8tdGJyd2ViLTMudmVyY2VsLmFwcC9hcGknXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XHJcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnc2VjdGlvbnMvc2VydmljZXMnO1xyXG5pbXBvcnQgUHJlbWl1bUZlYXR1cmUgZnJvbSAnc2VjdGlvbnMvcHJlbWl1bS1mZWF0dXJlJztcclxuaW1wb3J0IFVsdGltYXRlRmVhdHVyZXMgZnJvbSAnc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZSc7XHJcbmltcG9ydCBDdXN0b21lclN1cHBvcnQgZnJvbSAnc2VjdGlvbnMvY3VzdG9tZXItc3VwcG9ydCc7XHJcbmltcG9ydCBQcmljaW5nIGZyb20gJ3NlY3Rpb25zL3ByaWNpbmcnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJ3NlY3Rpb25zL3Rlc3RpbW9uaWFscyc7XHJcbmltcG9ydCBCbG9nIGZyb20gJ3NlY3Rpb25zL2Jsb2cnO1xyXG5pbXBvcnQgRmFxIGZyb20gJ3NlY3Rpb25zL2ZhcSc7XHJcbmltcG9ydCBTdXBwb3J0IGZyb20gJ3NlY3Rpb25zL3N1cHBvcnQnO1xyXG5pbXBvcnQgTGdwZCBmcm9tICdjb21wb25lbnRzL2xncGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTRU9cclxuICAgICAgICAgIHRpdGxlPVwiU0VSVkNPTiBTZXJ2acOnb3MgZGUgQ29udGFiaWxpZGFkZVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlByZXN0YXIgc2VydmnDp29zIGNvbnTDoWJlaXMgZSBhc3Nlc3NvcmlhIGRlIHF1YWxpZGFkZSwgYnVzY2FuZG8gYXRlbmRlciBhcyBuZWNlc3NpZGFkZXMgZGUgbm9zc29zIGNsaWVudGVzIGUgcGFyY2Vpcm9zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8UHJlbWl1bUZlYXR1cmUgLz5cclxuICAgICAgICA8VWx0aW1hdGVGZWF0dXJlcyAvPlxyXG4gICAgICAgIHsvKiA8Q3VzdG9tZXJTdXBwb3J0IC8+ICovfVxyXG4gICAgICAgIDxQcmljaW5nIC8+XHJcbiAgICAgICAgey8qIDxUZXN0aW1vbmlhbHMgLz4gKi99XHJcbiAgICAgICAgPFNlcnZpY2VzIC8+XHJcbiAgICAgICAgPEJsb2cgLz5cclxuICAgICAgICA8TGdwZCAvPlxyXG4gICAgICAgIHsvKiA8U3VwcG9ydCAvPiAqL31cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBqc3gsXHJcbiAgQm94LFxyXG4gIEZsZXgsXHJcbiAgVGV4dCxcclxuICBIZWFkaW5nLFxyXG4gIENvbnRhaW5lcixcclxufSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCBiYW5uZXIgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIxLnBuZydcclxuaW1wb3J0IHsgQWlPdXRsaW5lV2hhdHNBcHAsIEFpT3V0bGluZVBob25lLCBBaU91dGxpbmVJbnN0YWdyYW0sIEFpT3V0bGluZUZhY2Vib29rLCBBaU91dGxpbmVNYWlsIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImhvbWVcIiBzeD17c3R5bGVzLnNlY3Rpb259ID5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJib3VuY2VJbkxlZnRcIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCIgaXNWaXNpYmxlPXt0cnVlfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmRvbWFpbkNhcmR9PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nPlVtIG5vdm8gcGVyZmlsIGRlIDxUZXh0IGFzPVwic3BhblwiIGNvbG9yPSdzZWNvbmRhcnknPmVtcHJlc2EgY29udMOhYmlsPC9UZXh0PjwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBtYj17Nn0+XHJcbiAgICAgICAgICAgICAgICBRdWVyZW1vcyBlbnRlbmRlciBvIHF1ZSB2b2PDqiBwcmVjaXNhLCA8YnIgLz5cclxuICAgICAgICAgICAgICAgIEVudHJlIGVtIGNvbnRhdG9cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5pbnB1dEdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3dhLm1lLzU1MTk5OTk3MDYzNzVcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVdoYXRzQXBwIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ0ZWw6MTkyMTA1MTAwMFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGhvbmUgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2VydmNvbmppam9jYS9cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUluc3RhZ3JhbSBzaXplPVwiM2VtXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlcnZjb25qaWpvY2FcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUZhY2Vib29rIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86Y29tZXJjaWFsQHRicndlYi5jb20uYnJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZU1haWwgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiA8Qm94IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NlcnZlclJhY2t9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwic2V2ZXItcmFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvQm94PiAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2Jhbm5lcn0pYCxcclxuICAgIHB0OiBbMTcsIG51bGwsIG51bGwsIDIwLCBudWxsXSxcclxuICAgIHBiOiBbNiwgbnVsbCwgbnVsbCwgMTIsIDE2XSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGdhcDogWyczMHB4IDYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzBweCA0MHB4JywgJzMwcHggNjBweCddLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgbWluSGVpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzY2dmgnLCAnODF2aCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICcxZnInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxyXG4gICAgICAnNTEwcHggMWZyJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBkb21haW5DYXJkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmYmMnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDI0cHggNTBweCByZ2JhKDU0LCA5MSwgMTI1LCAwLjA1KScsXHJcbiAgICBib3JkZXJSYWRpdXM6IGAxNXB4IDMwcHhgLFxyXG4gICAgcDogWyczMHB4IDI1cHggNTBweCcsIG51bGwsIG51bGwsICc0MHB4IDQwcHggNjBweCddLFxyXG4gICAgbTogW251bGwsIG51bGwsIG51bGwsICcwIGF1dG8nLCAndW5zZXQnXSxcclxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNDgwLCAnbm9uZSddLFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBmb250U2l6ZTogWzgsIG51bGwsIG51bGwsIDEwLCA5LCAxNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzYsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCA3LCA4XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbnB1dEdyb3VwOiB7XHJcbiAgICBhOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIHB4OiBbMywgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgICAgcDogMCxcclxuICAgICAgJzpmb2N1cyc6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjMzLFxyXG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC40KSxcclxuICAgICAgfSxcclxuICAgICAgJzotd2Via2l0LWF1dG9maWxsJzoge1xyXG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogJzAgMCAwIDMwcHggd2hpdGUgaW5zZXQgIWltcG9ydGFudCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsICcxNXB4J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzMsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgICAgbWluV2lkdGg6IFs2MCwgbnVsbCwgbnVsbCwgNzVdLFxyXG4gICAgICBwOiAwLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgJzpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnKyBzdmcnOiB7XHJcbiAgICAgICAgY29sb3I6ICcjQTZBOEJCJyxcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWJtaXQ6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBtdDogWzRdLFxyXG4gICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBub3RlOiB7XHJcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxyXG4gICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgbGluZUhlaWdodDogMS4zMyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuNSksXHJcbiAgICBtdDogWzRdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBCdXR0b24sIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgQmxvZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9ibG9nLXBvc3QnO1xyXG5pbXBvcnQgU2xpY2tBcnJvdyBmcm9tICdjb21wb25lbnRzL3NsaWNrLWFycm93JztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCB7IHVzZUluZm9ybWFjb2VzIH0gZnJvbSAnaG9va3MvdXNlSW5mb3JtYWNvZXMnO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBzcGVlZDogNTAwLFxyXG4gIG5leHRBcnJvdzogPFNsaWNrQXJyb3cgY29udHJvbD1cIm5leHRcIiAvPixcclxuICBwcmV2QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJwcmV2XCIgLz4sXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDAwMDAsXHJcbiAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBub3RpY2lhcyB9ID0gdXNlSW5mb3JtYWNvZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImJsb2dcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgc2xvZ2FuPVwiXCJcclxuICAgICAgICAgIHRpdGxlPVwiw5psdGltYXMgTm90w61jaWFzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2xpZGVJblJpZ2h0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgIDxTbGlkZXIgc3g9e3N0eWxlcy5ncmlkfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICB7bm90aWNpYXM/LnNsaWNlKDAsIDMpLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCbG9nUG9zdCBrZXk9e3Bvc3QubW5fY29kaWdvfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPEZsZXggc3g9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc3g9e3N0eWxlcy5idXR0b259IGFzPVwiYVwiIGhyZWY9XCIvbm90aWNpYXNcIj5NYWlzIE5vdMOtY2lhczwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbMTIsIG51bGwsIG51bGwsIDEyLCAxNV0sXHJcbiAgICBwYjogWzYsIG51bGwsIG51bGwsIDE2LCAxMCwgMTRdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBnYXA6IFs2LCBudWxsLCBudWxsLCBudWxsLCA2LCAxMF0sXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIC0zLCAndW5zZXQnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsIDFmciknLCBudWxsLCBudWxsLCBudWxsLCAncmVwZWF0KDMsIDFmciknXSxcclxuICAgICcuc2xpY2stYXJyb3cnOiB7XHJcbiAgICAgIGJvdHRvbTogW251bGwsIG51bGwsIG51bGwsIC0xNCwgJ3Vuc2V0J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtdDogWzhdLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5pbXBvcnQgQmdTaGFwZSBmcm9tICdhc3NldHMvaW1hZ2VzL3NoYXBlLTEuc3ZnJztcclxuaW1wb3J0IHNoYXBlVG9wIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2hhcGUtdG9wLnBuZyc7XHJcbmltcG9ydCBzaGFwZUJvdHRvbSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3NoYXBlLWJvdHRvbS5wbmcnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVXaGF0c0FwcCwgQWlPdXRsaW5lUGhvbmUsIEFpT3V0bGluZUluc3RhZ3JhbSwgQWlPdXRsaW5lTWFpbCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgQ2FsbFRvQWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cImNvbnRhdG9cIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudEJveH0+XHJcbiAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLmhlYWRpbmd9PlxyXG4gICAgICAgICAgICBRdWVyZW1vcyBlbnRlbmRlciBvIHF1ZSB2b2PDqiBwcmVjaXNhXHJcbiAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYnRuV3JhcHBlcn0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3dhLm1lLzU1MTk5OTk3MDYzNzVcIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVXaGF0c0FwcCBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cInRlbDoxOTIxMDUxMDAwXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGhvbmUgc2l6ZT1cIjNlbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3RicndlYi9cIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVJbnN0YWdyYW0gc2l6ZT1cIjNlbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86Y29tZXJjaWFsQHRicndlYi5jb20uYnJcIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVNYWlsIHNpemU9XCIzZW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMSxcclxuICAgICc6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQUZDJyxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBjb250ZW50OiBgJydgLFxyXG4gICAgICBoZWlnaHQ6ICc1MCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHpJbmRleDogJy0xJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIHB4OiBbMCwgJzAgIWltcG9ydGFudCcsICczMHB4ICFpbXBvcnRhbnQnXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHBhZGRpbmc6IFtcclxuICAgICAgJzM1cHggNjBweCA2MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQwcHggMzBweCA0NXB4JyxcclxuICAgICAgJzU1cHggMzBweCA2MHB4JyxcclxuICAgICAgJzU1cHggNTBweCA2MHB4JyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgzNjU2JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogWydub25lJywgbnVsbCwgbnVsbCwgYHVybCgke0JnU2hhcGV9KWBdLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICc2MCUgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiBbJzEyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgIGJvcmRlclJhZGl1czogJzdweCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogWydjZW50ZXInLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFszLCA3LCA4LCA3LCAxMV0sXHJcbiAgICBmb250RmFtaWx5OiAnQnJlZSBTZXJpZiwgc2VyaWYnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS40LCAxLjUzXSxcclxuICAgIG1heFdpZHRoOiBbJzEwMCUnLCAnODAlJywgbnVsbCwgMzQwLCAnNTAlJywgJzQ1JSddLFxyXG4gICAgbWI6IFsxMSwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgfSxcclxuICBidG5XcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICc6YmVmb3JlLCA6YWZ0ZXInOiB7XHJcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzczcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFsnNTUlJywgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2hhcGVUb3B9KWAsXHJcbiAgICAgIHRvcDogJy0yOHB4JyxcclxuICAgIH0sXHJcbiAgICAnOmFmdGVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzaGFwZUJvdHRvbX0pYCxcclxuICAgICAgYm90dG9tOiAnLTI4cHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1pbkhlaWdodDogWzQwLCBudWxsLCBudWxsLCA0NSwgNjBdLFxyXG4gICAgICBwYWRkaW5nOiBbJzAgMjhweCcsIG51bGwsIG51bGwsIG51bGwsICcwIDQwcHgnXSxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJyNhMmFlYmInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgfSxcclxuICAgICAgbXQ6IDEsXHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEdyaWQsIEJ1dHRvbiwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuaW1wb3J0IHN1cHBvcnQgZnJvbSAnYXNzZXRzL2ltYWdlcy9zdXBwb3J0LnBuZyc7XHJcblxyXG5jb25zdCBsaXN0ID0gW1xyXG4gICdNZWRpY2FsIGFuZCB2aXNpb24nLFxyXG4gICdMaWZlIGluc3VyYW5jZScsXHJcbiAgJ0hTQXMgYW5kIEZTQXMnLFxyXG4gICdDb21tdXRlciBiZW5lZml0cycsXHJcbl07XHJcblxyXG5jb25zdCBDdXN0b21lclN1cHBvcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17c3VwcG9ydH0gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJzdXBwb3J0XCIgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICBDdXN0b21lciBzdXBwb3J0IGlzIG91ciBtYWluIHByaW9yaXR5IHdpdGggdGhlaXIgaHVuZHJlZCBwZXJjZW50XHJcbiAgICAgICAgICAgICAgc2F0aXNmYWN0aW9uLlxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuc3VtbWFyeX0+XHJcbiAgICAgICAgICAgICAgR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlXHJcbiAgICAgICAgICAgICAgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW1cclxuICAgICAgICAgICAgICBndWlkZWxpbmVzIGV2ZXIuXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIHN4PXtzdHlsZXMubGlzdH0gYXM9XCJ1bFwiPlxyXG4gICAgICAgICAgICAgIHtsaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJsaVwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJb0lvc0NoZWNrbWFya0NpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiAnc2Vjb25kYXJ5JywgbXI6IDIgfX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJTdXBwb3J0O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbOCwgbnVsbCwgbnVsbCwgNiwgbnVsbCwgMTQsIDE2XSxcclxuICAgIHBiOiBbbnVsbCwgbnVsbCwgbnVsbCwgOCwgMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBnYXA6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMCAxMHB4J10sXHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnLCBudWxsLCBudWxsLCAnZ3JpZCddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4tcmV2ZXJzZScsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICcxZnInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMWZyJyxcclxuICAgICAgJzQ3MHB4IDFmcicsXHJcbiAgICAgICc2MDBweCAxZnInLFxyXG4gICAgICAnNzYwcHggMWZyJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbXQ6IFsyLCBudWxsLCBudWxsLCAwLCA0LCAwXSxcclxuICAgIGltZzoge1xyXG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBtYXJnaW5Ub3A6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAtMTZdLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1NjAsICdub25lJ10sXHJcbiAgICBtOiBbbnVsbCwgbnVsbCwgbnVsbCwgJzAgYXV0bycsICd1bnNldCddLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogWzUsIG51bGwsIG51bGwsIDEwLCBudWxsLCBudWxsLCAxMV0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjUzLFxyXG4gICAgbGV0dGVyU3BhY2luZzogWyctMC41cHgnLCBudWxsLCBudWxsLCAnLTFweCddLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICBzcGFuOiB7XHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICBweDogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdW1tYXJ5OiB7XHJcbiAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyLCAnMTVweCcsIDJdLFxyXG4gICAgbGluZUhlaWdodDogWzEuODYsIG51bGwsIG51bGwsIG51bGwsIDEuODYsIDIuMjVdLFxyXG4gICAgbWF4V2lkdGg6IDQ3MCxcclxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMjBweCBhdXRvIDAnLCAnMTVweCAwIDAnLCBudWxsLCAndW5zZXQnXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgZ2FwOiAnMCAxOHB4JyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDIsIDE0MnB4KScsIG51bGwsIG51bGwsICdyZXBlYXQoMiwgMjAwcHgpJ10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogW251bGwsIG51bGwsIG51bGwsICdjZW50ZXInLCAndW5zZXQnXSxcclxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgbXQ6IFs0LCBudWxsLCBudWxsLCA1LCA0LCA1XSxcclxuICAgIHA6IDAsXHJcbiAgICBsaToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIDEsIG51bGwsIDIsICcxNXB4JywgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgbGluZUhlaWdodDogWzIuODEsIG51bGwsIG51bGwsIG51bGwsIDIuMiwgMi44MV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBGYXFJdGVtIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvZmFxLWl0ZW0nO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHF1ZXM6ICdXaGljaCBkb21haW4gc2hvdWxkIEkgcHVyY2hhc2U/JyxcclxuICAgIGFuczogYFdlIG1ha2UgaXQgZWFzeSB0byBtb3ZlIHRvIENvbWV0TmluZS4gU2ltcGx5IGNvbnRhY3QgdXMgYW5kIHdlJ2xsIG1vdmUgeW91ciBob3N0aW5nIGFjY291bnQgZnJvbSBhbnkgb3RoZXIgcHJvdmlkZXIsIHJlZ2FyZGxlc3Mgb2YgdGhlIGNvbnRyb2wgcGFuZWwuIElmIGF0IGFueXRpbWUgeW91ciB3ZWJzaXRlIGlzIGRvd24gZm9yIG1vcmUgdGhhbiAwLjElIHJlc3VsdGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHF1ZXM6ICdXaGF0IGFyZSBzb21lIHRpcHMgd2hlbiBjaG9vc2luZyBhIG5hbWU/JyxcclxuICAgIGFuczogYEdldCB5b3VyIHdlYnNpdGUgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gbWFuYWdlbWVudCBuZXdzLiBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgdGhlIGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBxdWVzOiAnV2hhdCBpZiBJIG5lZWQgaGVscCBjaG9vc2luZyB0aGUgcmlnaHQgZG9tYWluPycsXHJcbiAgICBhbnM6IGBDcmVhdGUgYSBodWIgZm9yIGNyb3NzLWZ1bmN0aW9uYWwgd29yayB0aGF0IGFsc28gd29ya3Mgd2l0aCBhbGwgeW91ciBvdGhlciB0b29scy4gQ2VudHJhbGl6ZSBhbmQgc3RhbmRhcmRpemUgY29tbXVuaWNhdGlvbiB3aXRoIE1pcm8uIEFsbCBwcmVtaXVtIGZ1bmN0aW9uYWwgYXJlIGluY2x1ZGVkIGhlcmUgd2l0aCB1cGRhdGVzLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHF1ZXM6ICdDYW4gSSB1cGdyYWRlIG9yIGRvd25ncmFkZSBteSB3ZWIgaG9zdGluZyBwbGFuJyxcclxuICAgIGFuczogYFRoZSBwcmljaW5nIG1hZGUgbWUgYSBsaXR0bGUgaGVzaXRhbnQgYXQgZmlyc3QgYnV0IEkgaGF2ZSBiZWVuIHBsZWFzYW50bHkgc3VycHJpc2VkIGJ5IHRoZSBsZXZlbCBvZiBjYXJlIGdpdmVuIGJ5IENvbWV0TmluZS5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBxdWVzOiAnSG93IGRvIEkgdXBncmFkZSB0aGUgc3RvcmFnZSBjYXBhY2l0eSBvZiBteSBob3N0aW5nIHBsYW4/JyxcclxuICAgIGFuczogYFN0b3AgeW91ciB2aWV3ZXJzIGZyb20gZ2V0dGluZyBkaXN0cmFjdGVkLiBQdWJsaXNoIHZpZGVvcyB0byB5b3VyIG93biBDaGFubmVsIGFuZCByZXN0IGVhc3kga25vd2luZyB2aWV3ZXJzIHdvbuKAmXQgYmUgYW5ub3llZCBieSBhZHMgb3IgcHVsbGVkIGRvd24gYSByYWJiaXQgaG9sZSBvZiB1bnJlbGF0ZWQgdmlkZW9zLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIHF1ZXM6ICdXaGF0IGlzIGluIEluTW90aW9uIEhvc3RpbmfigJlzIHVwdGltZSByYXRlPycsXHJcbiAgICBhbnM6IGBEZXNpZ25lZCB3aXRoIGJlZ2lubmVycyBpbiBtaW5kIGFuZCBwYWNrZWQgd2l0aCBhZHZhbmNlZCBmZWF0dXJlcyBkZXZlbG9wZXJzIHdpbGwgbG92ZS4gU3RhcnQgd2l0aCBhIHF1aWNrIGFuZCBzaW1wbGUgaW5zdGFsbGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIHF1ZXM6ICdMZWFybiBmcm9tIGNvbW11bml0eSBvbiBCcmFuZHdhZ29uJyxcclxuICAgIGFuczogYEJyaWFuIEhhbGxpZ2FuIGtub3dzIHRoYXQgeW91IG5lZWQgbW9yZSB0aGFuIGEgZ3JlYXQgcHJvZHVjdCB0byBoYXZlIGEgZ3JlYXQgYnJhbmQuIEhlYXIgaGlzIHRob3VnaHRzICYgc2NvcmUgYSBwZWVrIGF0IG91ciB3YWdvbi5gLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHsgb3JpZ2luVG9wOiB0cnVlIH07XHJcblxyXG5jb25zdCBGYXEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJmYXFcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgc2xvZ2FuPVwiR2V0IHlvdXJzIHF1ZXN0aW9uIGFuc3dlclwiXHJcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1YW50bHkgYXNrZWQgcXVlc3Rpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1hc29ucnkgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxGYXFJdGVtIGtleT17aXRlbS5pZH0gZmFxPXtpdGVtfSBjbGFzc05hbWU9XCJmYXEtaXRlbVwiIC8+O1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXE7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTRdLFxyXG4gICAgcGI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxMCwgNl0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIC02LCAtOCwgJ3Vuc2V0J10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uJztcclxuaW1wb3J0IHF1ZW1Tb21vcyBmcm9tICdhc3NldHMvaW1hZ2VzL3F1ZW0tc29tb3MucG5nJztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTWlzc8OjbycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIGV0IHJob25jdXMgZW5pbS4gRnVzY2UgbWFnbmEgZXJhdCwgZmFjaWxpc2lzIG5lYyB2dWxwdXRhdGUgYWNcclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdWaXPDo28nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBldCByaG9uY3VzIGVuaW0uIEZ1c2NlIG1hZ25hIGVyYXQsIGZhY2lsaXNpcyBuZWMgdnVscHV0YXRlIGFjXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiBgVmFsb3Jlc2AsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIGV0IHJob25jdXMgZW5pbS4gRnVzY2UgbWFnbmEgZXJhdCwgZmFjaWxpc2lzIG5lYyB2dWxwdXRhdGUgYWNcclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcmVtaXVtRmVhdHVyZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBpZD1cInF1ZW0tc29tb3NcIiBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgYXM9XCJmaWd1cmVcIlxyXG4gICAgICAgIHN4PXt7IC4uLnN0eWxlcy5pbGx1c3RyYXRpb24sIGJhY2tncm91bmQ6IGB1cmwoJHtxdWVtU29tb3N9KSBuby1yZXBlYXRgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiYm91bmNlSW5SaWdodFwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYWNjb3JkaW9uR3JvdXB9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgc2xvZ2FuPVwiTW9kZWxvIENvbnRhYmlsaWRhZGVcIlxyXG4gICAgICAgICAgICAgIHRpdGxlPVwiQ29uaGXDp2EgdW0gcG91cXVpbmhvIHNvYnJlIG5vc3NhIGhpc3TDs3JpYVwiXHJcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBldCByaG9uY3VzIGVuaW0uIEZ1c2NlIG1hZ25hIGVyYXQsIGZhY2lsaXNpcyBuZWMgdnVscHV0YXRlIGFjLCBtYXR0aXMgZXQgbnVsbGEuIERvbmVjIHBvcnR0aXRvciBwcmV0aXVtIG5pc2wsIGV1IHNjZWxlcmlzcXVlIGVsaXQgZmluaWJ1cyBhLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2RhdGF9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bUZlYXR1cmU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFsxMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMTIsIDEyXSxcclxuICAgIHBiOiBbMTIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDE0LCAxOF0sXHJcbiAgICAvLyBtYXJnaW5Cb3R0b206IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTg1cHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAwLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgIGJhY2tncm91bmRTaXplOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzYyJScsICc1MCUnLCAnNjYlJywgJzYyJSddLFxyXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMXB4KSc6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICc2MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBbXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICctODBweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMCcsXHJcbiAgICAgICctMTQwcHggMHB4JyxcclxuICAgIF0sXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGFjY29yZGlvbkdyb3VwOiB7XHJcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDUyMCwgNjEwLCA0MTAsIG51bGwsIDQ1MCwgNDEwXSxcclxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMCBhdXRvJywgbnVsbCwgJzAnLCBudWxsXSxcclxuICAgIC8vIG1hcmdpbkxlZnQ6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsIG51bGwsIDEwLCAxMiwgMTZdLFxyXG4gICAgLy8gbWFyZ2luUmlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsIG51bGwsICd1bnNldCddLFxyXG4gICAgLy8gcHg6IFs2LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA0NDAsIDQ1MCwgJ25vbmUnXSxcclxuICAgIG1iOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgNCwgNl0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogWzQsIG51bGwsIG51bGwsIDgsIDEwLCA4LCAxMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIG1heFdpZHRoOiBbMjUwLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgICBtYXJnaW46IFsnMCBhdXRvJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcclxuaW1wb3J0IFByaWNlVGFibGUgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9wcmljZS10YWJsZSc7XHJcbmltcG9ydCBTbGlja0Fycm93IGZyb20gJ2NvbXBvbmVudHMvc2xpY2stYXJyb3cnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSdcclxuaW1wb3J0IEltYWdlQWdlbmRhIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYWdlbmRhMy5wbmcnXHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgeyB1c2VJbmZvcm1hY29lcyB9IGZyb20gJ2hvb2tzL3VzZUluZm9ybWFjb2VzJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogJ0FnZW5kYSBUcmlidXTDoXJpYScsXHJcbiAgICBzdWJ0aXRsZTogJzAyLzA3LzIwMjEnLFxyXG4gICAgLy8gcHJpY2U6IDI1Ljk5LFxyXG4gICAgaXNSZWNvbW1lbmRlZDogZmFsc2UsXHJcbiAgICAvLyBidXR0b25UZXh0OiAnU3RhcnQgRnJlZSBUcmlhbCcsXHJcbiAgICBmZWF0dXJlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6ICdJQ01TL1NDQU5DIHwgQ29udHJpYnVpbnRlIHF1ZSB0aXZlciByZWNlYmlkbyBvIGNvbWJ1c3TDrXZlbCBkZSBvdXRybyBjb250cmlidWludGUgc3Vic3RpdHXDrWRvLicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYElDTVMvU0NBTkMgfCBJbXBvcnRhZG9yLmAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ09icmlnYcOnw7VlcyBGaXNjYWlzJyxcclxuICAgIHN1YnRpdGxlOiAnRmlxdWUgc2VtcHJlIGluZm9ybWFkbyEnLFxyXG4gICAgcHJpY2U6IDI5Ljk5LFxyXG4gICAgaXNSZWNvbW1lbmRlZDogdHJ1ZSxcclxuICAgIGJ1dHRvblRleHQ6ICdTdGFydCBGcmVlIFRyaWFsJyxcclxuICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogJ09icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gSnVsaG8vMjAyMScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gSnVuaG8vMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gTWFpby8yMDIxYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBgT2JyaWdhw6fDtWVzIEZpc2NhaXMg4oCTIEVzdGFkbyBkZSBNaW5hcyBHZXJhaXMgLSBBYnJpbC8yMDIxYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBgT2JyaWdhw6fDtWVzIEZpc2NhaXMg4oCTIEVzdGFkbyBkZSBNaW5hcyBHZXJhaXMgLSBNYXLDp28vMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNixcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gRmV2ZXJlaXJvLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgc2xpZGVzVG9TaG93OiAzLFxyXG4gIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIHNwZWVkOiA1MDAsXHJcbiAgbmV4dEFycm93OiA8U2xpY2tBcnJvdyBjb250cm9sPVwibmV4dFwiIC8+LFxyXG4gIHByZXZBcnJvdzogPFNsaWNrQXJyb3cgY29udHJvbD1cInByZXZcIiAvPixcclxuICByZXNwb25zaXZlOiBbXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDEwMDAwMCxcclxuICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY3LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBQcmljaW5nID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgb2JyaWdhY29lcywgYWdlbmRhIH0gPSB1c2VJbmZvcm1hY29lcygpXHJcbiAgY29uc3QgZGF0YSA9IG5ldyBEYXRlKClcclxuICBjb25zdCBkaWEgPSBTdHJpbmcoZGF0YS5nZXREYXRlKCkpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgbWVzID0gU3RyaW5nKGRhdGEuZ2V0TW9udGgoKSArIDEpLnBhZFN0YXJ0KDIsICcwJyk7XHJcbiAgY29uc3QgYW5vID0gZGF0YS5nZXRGdWxsWWVhcigpO1xyXG4gIGNvbnN0IGRhdGFBdHVhbCA9IGAke2RpYX0vJHttZXN9LyR7YW5vfWBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJpbmZvcm1hY29lc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2xpZGVJbkxlZnRcIiBhbmltYXRlT3V0PVwiZmFkZU91dFwiPlxyXG4gICAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cclxuICAgICAgICAgICAgc2xvZ2FuPVwiQXR1YWxpemUtc2VcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkNvbXBvc3RvIHBvciB1bSBjb25qdW50byBkZSBpbmZvcm1hw6fDtWVzIHF1ZSBzw6NvIGF0dWFsaXphZGFzIGRpYXJpYW1lbnRlIHBlbGEgbm9zc2EgZXF1aXBlLlwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPFNsaWRlciBzeD17c3R5bGVzLmdyaWR9IHsuLi5zZXR0aW5nc30+XHJcbiAgICAgICAgICAgICAgPFByaWNlVGFibGUgaXRlbXM9e2FnZW5kYX0gaXNSZWNvbW1lbmRlZD17ZmFsc2V9IHRpdGxlPVwiQWdlbmRhIFRyaWJ1dMOhcmlhXCIgc3VidGl0bGU9e2RhdGFBdHVhbH0gLz5cclxuICAgICAgICAgICAgICA8UHJpY2VUYWJsZSBpdGVtcz17b2JyaWdhY29lcy5zYW9QYXVsb30gaXNSZWNvbW1lbmRlZD17dHJ1ZX0gdGl0bGU9XCJPYnJpZ2HDp8O1ZXMgRmlzY2Fpc1wiIHN1YnRpdGxlPVwiRmlxdWUgc2VtcHJlIGluZm9ybWFkb1wiIGxpbms9XCJvYnJpZ2Fjb2VzXCIgLz5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3g9e3N0eWxlcy5pbWFnZX0gc3JjPXtJbWFnZUFnZW5kYX0gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNpbmc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs2XSxcclxuICAgIHBiOiBbMTIsIG51bGwsIG51bGwsIDE1LCAxN10sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIHBsOiAwLFxyXG4gICAgcHI6IDAsXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBtYjogWzcsIG51bGwsIG51bGwsIG51bGwsIDE0LCBudWxsLCAxOF0sXHJcbiAgICBweDogWzYsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCA4XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBnYXA6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAnZ3JpZCddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW251bGwsIG51bGwsIG51bGwsIG51bGwsICdyZXBlYXQoMywgMWZyKSddLFxyXG4gICAgYWxpZ25JdGVtczogW251bGwsIG51bGwsIG51bGwsIG51bGwsICdmbGV4LWVuZCddLFxyXG4gICAgJy5zbGljay1zbGlkZSA+IGRpdic6IHtcclxuICAgICAgcDogWyczNXB4JywgJzQwcHgnLCBudWxsLCAnMzVweCAyM3B4IDIzcHgnLCAwXSxcclxuICAgIH0sXHJcbiAgICAnLnNsaWNrLWFycm93Jzoge1xyXG4gICAgICBib3R0b206IC01LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBhbGlnblNlbGY6ICdjZW50ZXInLFxyXG4gIH1cclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBTZXJ2aWNlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvc2VydmljZSc7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgeyB1c2VJbmZvcm1hY29lcyB9IGZyb20gJ2hvb2tzL3VzZUluZm9ybWFjb2VzJztcclxuXHJcbmNvbnN0IFNlcnZpY2VzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgY290YWNvZXMgfSA9IHVzZUluZm9ybWFjb2VzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJzZXJ2aWNlc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgICBzbG9nYW49XCJcIlxyXG4gICAgICAgICAgICB0aXRsZT1cIkluZGljYWRvcmVzIEVjb27DtG1pY29zXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIHtjb3RhY29lcz8ubWFwKChjb3RhY2FvKSA9PiAoXHJcbiAgICAgICAgICAgICAgPFNlcnZpY2Uga2V5PXtjb3RhY2FvLmNvdGRfY29kaWdvfSBjb3RhY2FvPXtjb3RhY2FvfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlcztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxMl0sXHJcbiAgICBwYjogWzEyLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxNV0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBnYXA6IFszLCBudWxsLCBudWxsLCA0XSxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLCAxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCg0LCAxZnIpJyxcclxuICAgICAgJ3JlcGVhdCg0LCAzMDBweCknLFxyXG4gICAgXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgdXNlTWVkaWFRdWVyeSB9IGZyb20gJ3JlYWN0LXJlc3BvbnNpdmUnO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcbmltcG9ydCBzdXBwb3J0VGVhbSBmcm9tICdhc3NldHMvaW1hZ2VzL3N1cHBvcnQtdGVhbS5wbmcnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3VwcG9ydCgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJzdXBwb3J0XCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cclxuICAgICAgICAgIHRpdGxlPVwiTWVldCBvdXIgc3VwcG9ydCB0ZWFtIHdobyBhbHdheXMgd29yayBoYXJkbHkgYmVoaW5kIHRoZSBzY2VuZXNcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJGb2N1cyBvbmx5IG9uIHRoZSBtZWFuaW5nLCB3ZSB0YWtlIGNhcmUgb2YgdGhlIGRlc2lnbi4gQXMgc29vbiBhcyB0aGUgbWVldGluZyBlbmQgeW91IGNhbiBleHBvcnQgaW4gb25lIGNsaWNrIGludG8geW91ciBwcmVmZXJyZWQuXCJcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8Qm94IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy50aHVtYldyYXBwZXJ9PlxyXG4gICAgICAgICAgPEltYWdlIHNyYz17c3VwcG9ydFRlYW19IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwiU3VwcG9ydCBUZWFtXCIgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDE0XSxcclxuICAgIHBiOiBbMF0sXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBtYjogWzgsIG51bGwsIG51bGwsIDEwLCBudWxsLCAxNV0sXHJcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDUwMCwgNjAwLCBudWxsXSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgZm9udFNpemU6IFszLCBudWxsLCBudWxsLCA4LCAxMV0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgbXQ6IFszXSxcclxuICAgICAgbWF4V2lkdGg6IFs1MDBdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRodW1iV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWI6ICctMXB4JyxcclxuICAgIGltZzoge1xyXG4gICAgICBoZWlnaHQ6IFsxODAsICdhdXRvJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuY29uc3QgVGVzdGltb25pYWwgPSBkeW5hbWljKCgpID0+IGltcG9ydCgnY29tcG9uZW50cy9jYXJkcy90ZXN0aW1vbmlhbCcpLCB7XHJcbiAgc3NyOiBmYWxzZSxcclxufSk7XHJcbmltcG9ydCBhdXRob3IgZnJvbSAnYXNzZXRzL2ltYWdlcy90ZXN0aW1vbmlhbC5wbmcnO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGF2YXRhcjogYXV0aG9yLFxyXG4gICAgYXV0aG9yTmFtZTogJ01lbGluYSBQZXR0ZW5kb3JmZXInLFxyXG4gICAgZGVzaWduYXRpb246ICdDRU8gb2YgVWJlcicsXHJcbiAgICB0ZXh0OiBgQmVzdCBob3N0IEkndmUgaGFkIGluIDEwIHllYXJzLiBTbW9vdGggbWlncmF0aW9uLCBubyBzdHJlc3MsIGFuZCBmcmllbmRseSBzdXBwb3J0IG9uZSBjbGljayBhd2F5LiBJJ20gdmVyeSBoYXBweSBhbmQgcmVjb21tZW5kIHRoZWlyIHNlcnZpY2VzYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgYXZhdGFyOiBhdXRob3IsXHJcbiAgICBhdXRob3JOYW1lOiAnTWVsaW5hIFBldHRlbmRvcmZlcicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0NFTyBvZiBHb29nbGUnLFxyXG4gICAgdGV4dDogYEJlc3QgaG9zdCBJJ3ZlIGhhZCBpbiAxMCB5ZWFycy4gU21vb3RoIG1pZ3JhdGlvbiwgbm8gc3RyZXNzLCBhbmQgZnJpZW5kbHkgc3VwcG9ydCBvbmUgY2xpY2sgYXdheS4gSSdtIHZlcnkgaGFwcHkgYW5kIHJlY29tbWVuZCB0aGVpciBzZXJ2aWNlc2AsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGF2YXRhcjogYXV0aG9yLFxyXG4gICAgYXV0aG9yTmFtZTogJ01lbGluYSBQZXR0ZW5kb3JmZXInLFxyXG4gICAgZGVzaWduYXRpb246ICdDRU8gb2YgTWljcm9zb2Z0JyxcclxuICAgIHRleHQ6IGBCZXN0IGhvc3QgSSd2ZSBoYWQgaW4gMTAgeWVhcnMuIFNtb290aCBtaWdyYXRpb24sIG5vIHN0cmVzcywgYW5kIGZyaWVuZGx5IHN1cHBvcnQgb25lIGNsaWNrIGF3YXkuIEknbSB2ZXJ5IGhhcHB5IGFuZCByZWNvbW1lbmQgdGhlaXIgc2VydmljZXNgLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBUZXN0aW1vbmlhbHMgPSAoKSA9PiB7XHJcbiAgY29uc3Qgc2V0dGluZ3MgPSB7XHJcbiAgICBhcnJvd3M6IGZhbHNlLFxyXG4gICAgZG90czogdHJ1ZSxcclxuICAgIGZhZGU6IHRydWUsXHJcbiAgICBpbmZpbml0ZTogdHJ1ZSxcclxuICAgIHNwZWVkOiA1MDAsXHJcbiAgICBzbGlkZXNUb1Nob3c6IDEsXHJcbiAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwidGVzdGltb25pYWxzXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2xpZGVyIHsuLi5zZXR0aW5nc30gc3g9e3N0eWxlcy5jYXJvdXNlbH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPFRlc3RpbW9uaWFsIGtleT17aXRlbS5pZH0gdGVzdGltb25pYWw9e2l0ZW19IC8+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGVzdGltb25pYWxzO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbNiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjBGM0Y4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3NjdweCknOiB7XHJcbiAgICAgICc6YmVmb3JlJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgICBjb250ZW50OiBgJydgLFxyXG4gICAgICAgIG1pbkhlaWdodDogW251bGwsIG51bGwsIG51bGwsIDMwLCA3MCwgMTAwXSxcclxuICAgICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgICBsZWZ0OiAwLFxyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgICByaWdodDogMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJvdXNlbDoge1xyXG4gICAgJy5zbGljay1kb3RzJzoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCAhaW1wb3J0YW50JyxcclxuICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBib3R0b206IFs2LCBudWxsLCBudWxsLCA4LCAxMF0sXHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgbGVmdDogW1xyXG4gICAgICAgICdjYWxjKDUwJSArIDE0cHgpJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgNjJweCknLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDE0cHgpJyxcclxuICAgICAgICAnY2FsYyg1MCUgKyA2MHB4KScsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgMTRweCknLFxyXG4gICAgICBdLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiByZ2JhKCcjNUIyQjlEJywgMC4yKSxcclxuICAgICAgICBib3JkZXI6IDAsXHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICAgaGVpZ2h0OiBbMywgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICAgICAgd2lkdGg6IFsxMCwgbnVsbCwgbnVsbCwgMTVdLFxyXG4gICAgICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICAgICB0ZXh0SW5kZW50OiAnLTk5OTllbScsXHJcbiAgICAgICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcclxuICAgICAgfSxcclxuICAgICAgJy5zbGljay1hY3RpdmUgYnV0dG9uJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIHdpZHRoOiBbMjAsIG51bGwsIG51bGwsIDMwXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBsaToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICcrIGxpJzoge1xyXG4gICAgICAgIG1sOiAnNnB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBGZWF0dXJlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvZmVhdHVyZSc7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5cclxuaW1wb3J0IGljb24xIGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvMS5wbmcnO1xyXG5pbXBvcnQgaWNvbjIgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8yLnBuZyc7XHJcbmltcG9ydCBpY29uMyBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzMucG5nJztcclxuaW1wb3J0IGljb240IGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvNC5wbmcnO1xyXG5pbXBvcnQgaWNvbjUgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy81LnBuZyc7XHJcbmltcG9ydCBpY29uNiBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzYucG5nJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBpY29uOiBpY29uMSxcclxuICAgIHRpdGxlOiAnQXNzZXNzb3JpYSBUcmFiYWxoaXN0YScsXHJcbiAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIGV0IHJob25jdXMgZW5pbS4gRnVzY2UgbWFnbmEgZXJhdCwgZmFjaWxpc2lzIG5lYyB2dWxwdXRhdGUgYWMuYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgaWNvbjogaWNvbjIsXHJcbiAgICB0aXRsZTogJ0Fzc2Vzc29yaWEgQ29udMOhYmlsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gSW4gZXQgcmhvbmN1cyBlbmltLiBGdXNjZSBtYWduYSBlcmF0LCBmYWNpbGlzaXMgbmVjIHZ1bHB1dGF0ZSBhYy5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpY29uOiBpY29uMyxcclxuICAgIHRpdGxlOiAnQXNzZXNzb3JpYSBGaXNjYWwnLFxyXG4gICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBldCByaG9uY3VzIGVuaW0uIEZ1c2NlIG1hZ25hIGVyYXQsIGZhY2lsaXNpcyBuZWMgdnVscHV0YXRlIGFjLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGljb246IGljb240LFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gUGVzc29hbCcsXHJcbiAgICBkZXNjcmlwdGlvbjogYExvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIEluIGV0IHJob25jdXMgZW5pbS4gRnVzY2UgbWFnbmEgZXJhdCwgZmFjaWxpc2lzIG5lYyB2dWxwdXRhdGUgYWMuYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaWNvbjogaWNvbjUsXHJcbiAgICB0aXRsZTogJ0FiZXJ0dXJhIGRlIEVtcHJlc2EnLFxyXG4gICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBldCByaG9uY3VzIGVuaW0uIEZ1c2NlIG1hZ25hIGVyYXQsIGZhY2lsaXNpcyBuZWMgdnVscHV0YXRlIGFjLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIGljb246IGljb242LFxyXG4gICAgdGl0bGU6ICdQbGFuZWphbWVudG8gVHJpYnV0w6FyaW8nLFxyXG4gICAgZGVzY3JpcHRpb246IGBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LiBJbiBldCByaG9uY3VzIGVuaW0uIEZ1c2NlIG1hZ25hIGVyYXQsIGZhY2lsaXNpcyBuZWMgdnVscHV0YXRlIGFjLmAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFVsdGltYXRlRmVhdHVyZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJzZXJ2aWNvc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICBzbG9nYW49XCJNb2RlbG8gQ29udGFiaWxpZGFkZVwiXHJcbiAgICAgICAgICB0aXRsZT1cIsOBcmVhcyBkZSBBdHVhw6fDo29cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmVzfT5cclxuICAgICAgICAgIHtkYXRhPy5tYXAoKGl0ZW0pID0+IChcclxuICAgICAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJib3VuY2VJbkRvd25cIiBhbmltYXRlT3V0PVwiZmFkZU91dFwiPlxyXG4gICAgICAgICAgICAgIDxGZWF0dXJlIGNsYXNzTmFtZT1cImZlYXR1cmUtaXRlbVwiIGtleT17aXRlbS5pZH0gZGF0YT17aXRlbX0gLz5cclxuICAgICAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVWx0aW1hdGVGZWF0dXJlcztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQUZDJyxcclxuICAgIHB0OiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDE0XSxcclxuICAgIHBiOiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTUsIDE2LCAxOV0sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogWzUwLCA1MCwgODBdLFxyXG4gICAgcDoge1xyXG4gICAgICBtYXhXaWR0aDogNDkwLFxyXG4gICAgICBtYXJnaW46IFsnMTBweCBhdXRvIDAnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmZWF0dXJlczoge1xyXG4gICAgZ2FwOiBbMzUsIG51bGwsIG51bGwsIDQwLCAnNTBweCAzMHB4JywgNjBdLFxyXG4gICAgZGlzcGxheTogWydncmlkJywgJ2dyaWQnXSxcclxuICAgIG1heFdpZHRoOiAxMDMwLFxyXG4gICAgbWFyZ2luOiAnMCBhdXRvJyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgxLCAxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcclxuICAgICAgJ3JlcGVhdCgzLCAxZnIpJyxcclxuICAgIF0sXHJcbiAgICAnLmZlYXR1cmUtaXRlbSc6IHtcclxuICAgICAgZGlzcGxheTogWydibG9jayddLFxyXG4gICAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgICBtYXhXaWR0aDogWzI5MCwgMjYwLCBudWxsLCAyODAsICdub25lJ10sXHJcbiAgICAgIG06IFsnMCBhdXRvJywgJzAgYXV0bycsICcwIGF1dG8nLCAnMCBhdXRvJywgJzAgYXV0bycsIDBdLFxyXG4gICAgICBmaWd1cmU6IHtcclxuICAgICAgICBtOiBbJzAgMCAyMHB4J10sXHJcbiAgICAgIH0sXHJcbiAgICAgIGg0OiB7XHJcbiAgICAgICAgbWI6IFsnMTVweCcsICcxNXB4JywgJzIwcHgnXSxcclxuICAgICAgfSxcclxuICAgICAgcDoge1xyXG4gICAgICAgIGZvbnRTaXplOiBbJzE0cHgnLCAnMTRweCcsICcxNnB4JywgJzE2cHgnLCAnMTRweCcsICcxNnB4J10sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07IiwiZXhwb3J0IGNvbnN0IHNsdWdpZnkgPSAoLi4uYXJncykgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gYXJncy5qb2luKCcgJylcclxuXHJcbiAgcmV0dXJuIHZhbHVlXHJcbiAgICAgIC5ub3JtYWxpemUoJ05GRCcpIC8vIHNwbGl0IGFuIGFjY2VudGVkIGxldHRlciBpbiB0aGUgYmFzZSBsZXR0ZXIgYW5kIHRoZSBhY2VudFxyXG4gICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpIC8vIHJlbW92ZSBhbGwgcHJldmlvdXNseSBzcGxpdCBhY2NlbnRzXHJcbiAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgIC50cmltKClcclxuICAgICAgLnJlcGxhY2UoL1teYS16MC05IF0vZywgJycpIC8vIHJlbW92ZSBhbGwgY2hhcnMgbm90IGxldHRlcnMsIG51bWJlcnMgYW5kIHNwYWNlcyAodG8gYmUgcmVwbGFjZWQpXHJcbiAgICAgIC5yZXBsYWNlKC9cXHMrL2csICctJykgLy8gc2VwYXJhdG9yXHJcbn0iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgLy8gZXhhbXBsZSBjb2xvcnMgd2l0aCBkYXJrIG1vZGVcclxuICBjb2xvcnM6IHtcclxuICAgIHRleHQ6ICcjMzQzRDQ4JywgLy8gYm9keSBjb2xvciBhbmQgcHJpbWFyeSBjb2xvclxyXG4gICAgdGV4dFNlY29uZGFyeTogJyMwMjA3M0UnLCAvLyBzZWNvbmRhcnkgYm9keSBjb2xvclxyXG4gICAgaGVhZGluZzogJyMwRjIxMzcnLCAvLyBwcmltYXJ5IGhlYWRpbmcgY29sb3JcclxuICAgIGhlYWRpbmdTZWNvbmRhcnk6ICcjMzQzRDQ4JywgLy8gaGVhZGluZyBjb2xvclxyXG4gICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLCAvLyBib2R5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJhY2tncm91bmRTZWNvbmRhcnk6ICcjRjlGQUZDJywgLy8gc2Vjb25kYXJ5IGJhY2tncm91bmQgY29sb3JcclxuICAgIGJvcmRlckNvbG9yOiAnI0VERUZGNicsIC8vIGJvcmRlciBjb2xvclxyXG4gICAgcHJpbWFyeTogJyMzZjgyOTknLCAvLyBwcmltYXJ5IGJ1dHRvbiBhbmQgbGluayBjb2xvclxyXG4gICAgc2Vjb25kYXJ5OiAnIzBmNGM2OCcsIC8vIHNlY29uZGFyeSBjb2xvciAtIGNhbiBiZSB1c2VkIGZvciBob3ZlciBzdGF0ZXNcclxuICAgIG11dGVkOiAnIzdCODE4OCcsIC8vIG11dGVkIGNvbG9yXHJcbiAgICBhY2NlbnQ6ICcjMGY0YzY4JywgLy8gYSBjb250cmFzdCBjb2xvciBmb3IgZW1waGFzaXppbmcgVUlcclxuICAgIGRhcms6ICcjMTAxMzJEJyxcclxuICAgIGxpbms6ICcjMzE4M0ZGJyxcclxuICAgIC8vIGhpZ2hsaWdodFx0YSBiYWNrZ3JvdW5kIGNvbG9yIGZvciBoaWdobGlnaHRpbmcgdGV4dFxyXG4gICAgbW9kZXM6IHtcclxuICAgICAgZGFyazoge1xyXG4gICAgICAgIHRleHQ6ICcjZmZmJyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICAgICAgcHJpbWFyeTogJyMwY2YnLFxyXG4gICAgICAgIHNlY29uZGFyeTogJyMwOWMnLFxyXG4gICAgICAgIG11dGVkOiAnIzExMScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9udHM6IHtcclxuICAgIGJvZHk6ICdETSBTYW5zLCBzYW5zLXNlcmlmJyxcclxuICAgIC8vIGJvZHk6XHJcbiAgICAvLyAgICdzeXN0ZW0tdWksIC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIFwiSGVsdmV0aWNhIE5ldWVcIiwgc2Fucy1zZXJpZicsXHJcbiAgICBoZWFkaW5nOiAnRE0gU2Fucywgc2Fucy1zZXJpZicsXHJcbiAgICBtb25vc3BhY2U6ICdNZW5sbywgbW9ub3NwYWNlJyxcclxuICB9LFxyXG4gIGZvbnRTaXplczogW1xyXG4gICAgMTIsIC8vIDBcclxuICAgIDE0LCAvLyAxXHJcbiAgICAxNiwgLy8gMlxyXG4gICAgMTgsIC8vIDNcclxuICAgIDIwLCAvLyA0XHJcbiAgICAyMiwgLy8gNVxyXG4gICAgMjQsIC8vIDZcclxuICAgIDI2LCAvLyA3XHJcbiAgICAyOCwgLy8gOFxyXG4gICAgMzAsIC8vIDlcclxuICAgIDMyLCAvLyAxMFxyXG4gICAgMzYsIC8vIDExXHJcbiAgICA0MCwgLy8gMTJcclxuICAgIDQyLCAvLyAxM1xyXG4gICAgNDgsIC8vIDE0XHJcbiAgICA1MiwgLy8gMTVcclxuICAgIDY0LCAvLyAxNlxyXG4gIF0sXHJcbiAgZm9udFdlaWdodHM6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgLy8gYm9keTogNDAwLFxyXG4gICAgaGVhZGluZzogNTAwLFxyXG4gICAgLy8gaGVhZGluZzogNzAwLFxyXG4gICAgYm9sZDogNzAwLFxyXG4gIH0sXHJcbiAgbGluZUhlaWdodHM6IHtcclxuICAgIGJvZHk6IDEuNSxcclxuICAgIC8vIGJvZHk6IDEuNSxcclxuICAgIGhlYWRpbmc6IDEuMjUsXHJcbiAgICAvLyBoZWFkaW5nOiAxLjEyNSxcclxuICB9LFxyXG4gIGxldHRlclNwYWNpbmdzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIGNhcHM6ICcwLjJlbScsXHJcbiAgICBoZWFkaW5nOiAnLTAuNXB4JyxcclxuICB9LFxyXG4gIHNwYWNlOiBbXHJcbiAgICAwLCAvLyAwXHJcbiAgICA1LCAvLyAxXHJcbiAgICAxMCwgLy8gMlxyXG4gICAgMTUsIC8vIDNcclxuICAgIDIwLCAvLyA0XHJcbiAgICAyNSwgLy8gNVxyXG4gICAgMzAsIC8vIDZcclxuICAgIDM1LCAvLyA3XHJcbiAgICA0MCwgLy8gOFxyXG4gICAgNDUsIC8vIDlcclxuICAgIDUwLCAvLyAxMFxyXG4gICAgNTUsIC8vIDExXHJcbiAgICA2MCwgLy8gMTJcclxuICAgIDY1LCAvLyAxM1xyXG4gICAgNzAsIC8vIDE0XHJcbiAgICA4MCwgLy8gMTVcclxuICAgIDkwLCAvLyAxNlxyXG4gICAgMTAwLCAvLyAxN1xyXG4gICAgMTEwLCAvLyAxOFxyXG4gICAgMTIwLCAvLyAxOVxyXG4gICAgMTMwLCAvLyAyMFxyXG4gICAgMTQwLCAvLyAyMVxyXG4gICAgMTUwLCAvLyAyMlxyXG4gICAgMTYwLCAvLyAyM1xyXG4gIF0sXHJcbiAgc2l6ZXM6IHt9LFxyXG4gIGJyZWFrcG9pbnRzOiBbXHJcbiAgICAnNDgwcHgnLFxyXG4gICAgJzY0MHB4JyxcclxuICAgICc3NjhweCcsXHJcbiAgICAnMTAyNHB4JyxcclxuICAgICcxMjYwcHgnLFxyXG4gICAgJzEzNjdweCcsXHJcbiAgICAnMTQ0MHB4JyxcclxuICAgICcxNjAwcHgnLFxyXG4gIF0sXHJcbiAgLy8gdmFyaWFudHMgY2FuIHVzZSBjdXN0b20sIHVzZXItZGVmaW5lZCBuYW1lc1xyXG4gIGxheW91dDoge1xyXG4gICAgY29udGFpbmVyOiB7XHJcbiAgICAgIG1heFdpZHRoOiBbXHJcbiAgICAgICAgJzEwMCUnLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnNzIwcHgnLFxyXG4gICAgICAgICc5NzBweCcsXHJcbiAgICAgICAgJzExNDBweCcsXHJcbiAgICAgICAgJzEyNjBweCcsXHJcbiAgICAgICAgJzEzNjZweCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIHBhZGRpbmdMZWZ0OiBbNl0sXHJcbiAgICAgIHBhZGRpbmdSaWdodDogWzZdLFxyXG4gICAgICBtOiAnMCBhdXRvJyxcclxuICAgIH0sXHJcbiAgICBtYWluOiB7fSxcclxuICB9LFxyXG4gIHRleHQ6IHtcclxuICAgIGhlYWRpbmc6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2hlYWRpbmcnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rczoge30sXHJcbiAgaW1hZ2VzOiB7XHJcbiAgICBhdmF0YXI6IHtcclxuICAgICAgd2lkdGg6IDQ4LFxyXG4gICAgICBoZWlnaHQ6IDQ4LFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDk5OTk5LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIC8vIHZhcmlhbnRzIGZvciBidXR0b25zXHJcbiAgYnV0dG9uczoge1xyXG4gICAgZGVmYXVsdDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuM3MgZWFzZS1pbi1vdXQgMHMnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwJyxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHQnLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdwcmltYXJ5JyxcclxuICAgICAgbWluSGVpZ2h0OiAnNjBweCcsXHJcbiAgICAgIHBhZGRpbmc6ICcwIDMwcHgnLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBiZzogJ2RhcmsnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHByaW1hcnlNZDoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5wcmltYXJ5JyxcclxuICAgICAgbWluSGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgIHB4OiAnMjVweCcsXHJcbiAgICB9LFxyXG4gICAgc2Vjb25kYXJ5OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLnByaW1hcnknLFxyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgYmc6ICdzZWNvbmRhcnknLFxyXG4gICAgfSxcclxuICAgIG11dGVkOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHQnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRURGMEYyJyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdoaXRlOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHQnLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGNvbG9yOiAnIzAyMDcxOCcsXHJcbiAgICB9LFxyXG4gICAgdGV4dDoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJkczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBwYWRkaW5nOiAyLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgIC8vIGJveFNoYWRvdzogJzAgMCA0cHggMXB4IHJnYmEoMCwgMCwgMCwgMC41KScsXHJcbiAgICB9LFxyXG4gICAgb2ZmZXI6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZmxleDogWycxIDEgY2FsYyg1MCUgLSAxNnB4KScsICcxIDEgMjAlJ10sXHJcbiAgICAgIG1pbkhlaWdodDogMTMwLFxyXG4gICAgICBtOiAyLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsXHJcbiAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjRURFRkY2JyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICAgIGZlYXR1cmVDYXJkOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogWydjZW50ZXInLCAnZmxleC1zdGFydCddLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiBbJ2NvbHVtbicsICdyb3cnXSxcclxuICAgICAgcDogWzAsIDNdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvcm1zOiB7XHJcbiAgICBsYWJlbDoge1xyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgfSxcclxuICAgIGlucHV0OiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogOCxcclxuICAgICAgYm9yZGVyQ29sb3I6ICdib3JkZXJDb2xvcicsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgcHg6IDUsXHJcbiAgICAgIHB5OiAwLFxyXG4gICAgICBtaW5IZWlnaHQ6IDYwLFxyXG4gICAgICAnJjpmb2N1cyc6IHtcclxuICAgICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGJveFNoYWRvdzogKHQpID0+IGAwIDAgMCAycHggJHt0LmNvbG9ycy5wcmltYXJ5fWAsXHJcbiAgICAgICAgb3V0bGluZTogJ25vbmUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBiYWRnZXM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgY29sb3I6ICdiYWNrZ3JvdW5kJyxcclxuICAgICAgYmc6ICcjMjhBNUZGJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAzMCxcclxuICAgICAgcDogJzNweCAxMXB4JyxcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICctMC41cHgnLFxyXG4gICAgfSxcclxuICAgIG91dGxpbmU6IHtcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgYmc6ICd0cmFuc3BhcmVudCcsXHJcbiAgICAgIGJveFNoYWRvdzogJ2luc2V0IDAgMCAwIDFweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIHN0eWxlczoge1xyXG4gICAgLy8gVG8gYWRkIGJhc2UsIHRvcC1sZXZlbCBzdHlsZXMgdG8gdGhlIDxib2R5PiBlbGVtZW50LCB1c2UgdGhlbWUuc3R5bGVzLnJvb3QuXHJcbiAgICByb290OiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgbGluZUhlaWdodDogJ2JvZHknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9keScsXHJcbiAgICB9LFxyXG4gICAgLy8gaDEtaDYgSGVhZGluZyBzdHlsZXNcclxuICAgIGgxOiB7XHJcbiAgICAgIC8vIGZvbnRGYW1pbHk6ICdub25lJyxcclxuICAgICAgLy8gdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIC8vIGZvbnRTaXplOiA2LFxyXG4gICAgfSxcclxuICAgIGgyOiB7XHJcbiAgICAgIC8vIGZvbnRGYW1pbHk6ICdub25lJyxcclxuICAgICAgLy8gdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIC8vIGZvbnRTaXplOiA1LFxyXG4gICAgfSxcclxuICAgIGgzOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogNCxcclxuICAgIH0sXHJcbiAgICBoNDoge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDMsXHJcbiAgICB9LFxyXG4gICAgaDU6IHtcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiAyLFxyXG4gICAgfSxcclxuICAgIGg2OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgIH0sXHJcbiAgICAvLyBEaXZpZGVyIHN0eWxlc1xyXG4gICAgaHI6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJCb3R0b206ICcxcHggc29saWQnLFxyXG4gICAgICBib3JkZXJDb2xvcjogJyNEOUUwRTcnLFxyXG4gICAgfSxcclxuICAgIC8vIGFsc28geW91IGNhbiB1c2Ugb3RoZXIgSFRNTCBlbGVtZW50cyBzdHlsZSBoZXJlXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIH0sXHJcbiAgICBzck9ubHk6IHtcclxuICAgICAgYm9yZGVyOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcDogJ3JlY3QoMXB4LCAxcHgsIDFweCwgMXB4KSAhaW1wb3J0YW50JyxcclxuICAgICAgY2xpcFBhdGg6ICdpbnNldCg1MCUpICFpbXBvcnRhbnQnLFxyXG4gICAgICBoZWlnaHQ6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogJy0xcHggIWltcG9ydGFudCcsXHJcbiAgICAgIG92ZXJmbG93OiAnaGlkZGVuICFpbXBvcnRhbnQnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAhaW1wb3J0YW50JyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZSAhaW1wb3J0YW50JyxcclxuICAgICAgd2lkdGg6ICcxcHggIWltcG9ydGFudCcsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnJhbWVyLW1vdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2R5bmFtaWNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBvbGlzaGVkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWFuaW1hdGVkLWNzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9haVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9ic1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9pb1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZXNwb25zaXZlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zbGlja1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zdGlja3lub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInRoZW1lLXVpXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=