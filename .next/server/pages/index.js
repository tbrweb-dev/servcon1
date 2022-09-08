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

module.exports = "/_next/static/images/banner1-1e8dadd9cf924a1bdc96a64911e8a3d7.png";

/***/ }),

/***/ "./src/assets/images/icons/check.png":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/check.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/check-e751c8c6f2dbec314bea004e6e4ec4c8.png";

/***/ }),

/***/ "./src/assets/images/icons/cidade.png":
/*!********************************************!*\
  !*** ./src/assets/images/icons/cidade.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/cidade-b5081c12fa655e93a06fb1ae4ed9e498.png";

/***/ }),

/***/ "./src/assets/images/icons/email.png":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/email.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/email-01a9c2ff059a4ca55e22e0beb12c32d5.png";

/***/ }),

/***/ "./src/assets/images/icons/endereco.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/endereco.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/endereco-b0401e54d8dc15156819c9e39add8010.png";

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

/***/ "./src/assets/images/icons/store.png":
/*!*******************************************!*\
  !*** ./src/assets/images/icons/store.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/store-96f1de23fceaf0312d728b6505c4f4bd.png";

/***/ }),

/***/ "./src/assets/images/icons/telefone.png":
/*!**********************************************!*\
  !*** ./src/assets/images/icons/telefone.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/telefone-92a652050cb06bb6adb100ec49f00db1.png";

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

module.exports = "/_next/static/images/logo-0e398dcb064dca1457fd2d90b1d5af12.png";

/***/ }),

/***/ "./src/assets/images/logo_branco.png":
/*!*******************************************!*\
  !*** ./src/assets/images/logo_branco.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/logo_branco-313cf9182b746c5aaa7366cf5976f0e4.png";

/***/ }),

/***/ "./src/assets/images/quem-somos.png":
/*!******************************************!*\
  !*** ./src/assets/images/quem-somos.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/quem-somos-ffd804d003e73836c2af177545d795ed.png";

/***/ }),

/***/ "./src/assets/images/services/1.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADl2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA5LTAyPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjRiM2EwMmJhLTk1Y2EtNDAxNy04NTJmLTYzNWVhOTVhN2VlZTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5UYnIgV2ViPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8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"

/***/ }),

/***/ "./src/assets/images/services/2.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/2.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADl2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA5LTAyPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmYwYjZmMmVkLWRjNjYtNDhjYi04ZDM4LTAzMWMwMzgzNGM4NzwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5UYnIgV2ViPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8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"

/***/ }),

/***/ "./src/assets/images/services/3.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/3.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/3-5e29755e7010a7b0c0882df16fffb394.png";

/***/ }),

/***/ "./src/assets/images/services/4.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/4.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/4-b5ce990e99a102bdabcca3446bff0af5.png";

/***/ }),

/***/ "./src/assets/images/services/5.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/5.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADl2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA5LTAyPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjI5OGM0MDM5LTMxOTMtNDQyNC1iMDI3LTQ0MTEwYmRlNDY3YTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5UYnIgV2ViPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8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"

/***/ }),

/***/ "./src/assets/images/services/6.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/6.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEY2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA5LTAyPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjNhNjAxY2VlLTA4NTUtNDljNy1iZTg4LWJlMzk5ZDM0ZWRjMDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5vbnTDoWJpbDwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0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"

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

module.exports = "/_next/static/images/support-92ced1e4b52ca0d181d31b0de9ab0797.png";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\accordion\\accordion.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\accordion\\shared.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\cards\\blog-post.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\cards\\faq-item.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\cards\\feature.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\cards\\price-table.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\cards\\service.js";

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
/* harmony import */ var assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/icons/whatsapp.png */ "./src/assets/images/icons/whatsapp.png");
/* harmony import */ var assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_icons_store_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/icons/store.png */ "./src/assets/images/icons/store.png");
/* harmony import */ var assets_images_icons_store_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_store_png__WEBPACK_IMPORTED_MODULE_7__);








const menuItems = [{
  id: 2,
  title: 'Contato',
  items: [{
    path: 'tel:8836691146',
    icon: assets_images_icons_telefone_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    label: '(88) 3669-1146'
  }, {
    path: 'tel:8836691577',
    icon: assets_images_icons_telefone_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    label: '(88) 3669-1577'
  }, {
    path: 'mailto:gerencia@servcon1.com',
    icon: assets_images_icons_email_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: 'gerencia@servcon1.com'
  }, {
    path: 'https://g.page/servconjijoca?share',
    icon: assets_images_icons_endereco_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    label: 'Rua 17 de Outubro, 1340'
  }, {
    path: 'https://g.page/servconjijoca?share',
    icon: assets_images_icons_cidade_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    label: 'Jijoca de Jericoacoara - CE'
  }]
}, {
  id: 3,
  title: 'Redes Sociais',
  items: [{
    path: 'https://www.facebook.com/servconjijoca',
    icon: assets_images_icons_facebook_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    label: 'Facebook'
  }, {
    path: 'https://www.instagram.com/servconjijoca/',
    icon: assets_images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    label: 'Instagram'
  }, {
    path: 'https://wa.me/558899668652',
    icon: assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    label: 'Whatsapp'
  }, {
    path: 'https://play.google.com/store/apps/details?id=com.servcon',
    icon: assets_images_icons_store_png__WEBPACK_IMPORTED_MODULE_7___default.a,
    label: 'Nosso App'
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\footer\\footer.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\footer\\widget.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\hamburger.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\header\\header.js";

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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var _header_data_pages__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header.data.pages */ "./src/components/header/header.data.pages.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\header\\navbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */







const Navbar = ({
  isSticky,
  isMobile,
  handleCloseMenu
}) => {
  const {
    asPath
  } = Object(next_router__WEBPACK_IMPORTED_MODULE_6__["useRouter"])();
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "nav",
    sx: styles.navbar,
    className: `navbar${isMobile ? ' is-mobile' : ''}${isSticky ? ' is-sticky' : ''}`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, asPath === '/' ? _header_data__WEBPACK_IMPORTED_MODULE_4__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["NavLink"], {
    key: i,
    path: path,
    label: label,
    onClick: handleCloseMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  })) : _header_data_pages__WEBPACK_IMPORTED_MODULE_5__["default"].map(({
    path,
    label
  }, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_3__["Link"], {
    key: i,
    path: path,
    label: label,
    onClick: handleCloseMenu,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 11
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    passHref: true,
    href: "https://www.businessinformativos.com.br/area-restrita/ver-revistas.php?uid=MTk2NQ%3D%3D",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    sx: {
      textDecoration: "none"
    },
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 9
    }
  }, "Revista Online")), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    sx: styles.button,
    as: "a",
    target: "_blank",
    href: "https://play.google.com/store/apps/details?id=com.servcon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 7
    }
  }, "Baixe Nosso App"));
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
  },
  button: {
    ml: [null, null, null, null, null, 6],
    p: 2,
    color: "white !important"
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\icons\\lock.js";
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\icons\\logo.js";
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\image.js";
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\layout.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\lgpd.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\link.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\logo.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\section-heading.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\seo.js";
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\slick-arrow.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\topbar.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


const data = [{
  label: 'gerencia@servcon1.com',
  info: 'mailto:gerencia@servcon1.com'
}, {
  label: '(88) 3669-1146',
  info: 'tel: 8836691146'
}, {
  label: '(88) 3669-1577',
  info: 'tel: 8836691577'
}, {
  label: '(88) 9966-8652',
  info: 'https://wa.me/558899668652'
}];

const TopBar = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.topbar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    className: "caption",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "No mercado h\xE1 mais de ", new Date().getFullYear() - 2000, " anos, atendendo as expectativas dos nossos clientes."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    className: "tlds",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
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
      lineNumber: 33,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\hooks\\useInformacoes.jsx";

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
  baseURL: 'https://servcon1.vercel.app/api'
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\pages\\index.js";
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
  }), __jsx(sections_customer_support__WEBPACK_IMPORTED_MODULE_9__["default"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\banner.js";

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
    href: "https://wa.me/558899668652",
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
    href: "tel:8836691146",
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
    href: "mailto:gerencia@servcon1.com",
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\blog.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\call-to-action.js";

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
    href: "https://wa.me/558899668652",
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
    href: "tel:8836691146",
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
    href: "https://www.instagram.com/servconjijoca/",
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
    href: "https://www.facebook.com/servconjijoca",
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
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineFacebook"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 17
    }
  }))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
    href: "mailto:gerencia@servcon1.com",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(react_icons_ai__WEBPACK_IMPORTED_MODULE_5__["AiOutlineMail"], {
    size: "3em",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
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
/* harmony import */ var assets_images_icons_check_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! assets/images/icons/check.png */ "./src/assets/images/icons/check.png");
/* harmony import */ var assets_images_icons_check_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_check_png__WEBPACK_IMPORTED_MODULE_5__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\customer-support.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */





const list = ['Calendário contendo todas às obrigações da empresa perante a legislação', 'Possibilidade de enviar solicitações para o Escritório Contábil e também responder as demandas enviadas', 'Gerenciamento Eletrônico de documentos onde todo documento enviado pelo app é armazenado em Cloud', 'Por Intermédio do app a Empresa receberá comunicados do escritório contábil em diversas orientações fiscais'];

const CustomerSupport = () => {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.section,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.grid,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.illustration,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: assets_images_support_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    loading: "lazy",
    alt: "support",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Heading"], {
    sx: styles.title,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, "Baixe nosso App"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    sx: styles.summary,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }
  }, "Possu\xEDmos diversas vantagens e facilidades no nosso app"), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Grid"], {
    sx: styles.list,
    as: "ul",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, list.map((item, i) => Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "li",
    key: i,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("img", {
    src: assets_images_icons_check_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 21
    }
  }), item))), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Flex"], {
    sx: {
      justifyContent: 'center'
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    sx: styles.button,
    as: "a",
    target: "_blank",
    href: "https://play.google.com/store/apps/details?id=com.servcon",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, "Baixe Nosso App")))))));
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
    gridTemplateColumns: ['1fr', null, null, '1fr'],
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
      lineHeight: [1.5, null, null, null, 1.5, 1.5],
      mt: 4,
      span: {
        display: 'flex',
        alignItems: 'center',
        gap: 2
      }
    }
  },
  button: {
    mt: [8],
    textAlign: 'center'
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\faq.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\premium-feature.js";

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
  }, "Prestar servi\xE7os cont\xE1beis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros, agregando valores, seguran\xE7a e tranquilidade nos seus empreendimentos e juntos sermos instrumento de refer\xEAncia na transforma\xE7\xE3o econ\xF4mica e social na regi\xE3o, com visibilidade nacional e internacional.")
}, {
  title: 'Visão',
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }
  }, "Ser refer\xEAncia de excel\xEAncia em servi\xE7os de contabilidade e se manter entre os principais da regi\xE3o.")
}, {
  title: `Valores`,
  contents: Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }
  }, "\xC9tica, qualidade, comprometimento, seriedade, gest\xE3o compartilhada, responsabilidade socioecon\xF4mica e tradi\xE7\xE3o.")
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
    slogan: "Servicon Contabilidade",
    title: "Conhe\xE7a um pouquinho sobre nossa hist\xF3ria",
    description: "Somos uma empresa voltada para o ramo cont\xE1bil, fiscal e trabalhista, composta por profissionais, prestando servi\xE7os de qualidade e efici\xEAncia com um sistema operacional de trabalho totalmente informatizado. No mercado desde Fevereiro de 2000, estamos sempre buscando os requisitos para atender as expectativas dos nossos clientes.",
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
    pb: [12, null, null, null, null, 14, 18],
    pt: [6, null, null, null, null, 6, 6],
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
      margin: ['0 auto', null, null, 'unset'],
      mt: 12
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\pricing.js";

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
    bg: "#F9FAFC",
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\services.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\support.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\testimonials.js";

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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\ultimate-feature.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */










const data = [{
  id: 1,
  icon: assets_images_services_1_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  title: 'Departamento de Registros',
  description: `Seja para quem está iniciando um novo negócio ou para quem somente procura alterar sua empresa já registrada, oferecemos apoio constante, elaborando a documentação para registro em todos os órgãos e repartições necessárias com agilidade, para que o empresário possa rapidamente obter o registro, sem necessidade de atraso no início das atividades.`
}, {
  id: 2,
  icon: assets_images_services_2_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  title: 'Departamento Trabalhista',
  description: `Orientação e controle da aplicação dos preceitos da consolidação das leis do trabalho, “PIS”, “FGTS” e outros aplicáveis às relações de emprego; Manutenção dos registros de empregados e serviços correlatos; Elaboração da folha de pagamento dos empregados e de Pró-Labore, bem como das guias de recolhimento dos encargos sociais e tributos afins; Atendimento das demais exigências previstas na legislação.`
}, {
  id: 3,
  icon: assets_images_services_3_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  title: 'Departamento Fiscal',
  description: `Orientação e controle da aplicação dos dispositivos legais vigentes, federais, estaduais ou municipais; Escriturações dos registros fiscais do IPI, ICMS, ISS e elaboração das guias de informação e de recolhimento dos tributos devidos; Atendimento das demais exigências previstas em atos normativos, bem como de eventuais procedimentos de fiscalização tributaria.`
}, {
  id: 4,
  icon: assets_images_services_4_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  title: 'Departamento Contábil',
  description: `Classificação e escrituração da contabilidade de acordo com as normas e princípios contábeis vigentes. Apuração de balancetes; Elaboração do balanço anual e demonstrativos de resultado;`
}, {
  id: 5,
  icon: assets_images_services_5_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  title: 'Imposto de Renda PF/PJ',
  description: `Orientação e controle de aplicação dos dispositivos legais vigentes; Elaboração da declaração anual de rendimentos e documentos correlatos; Atendimento das demais exigências previstas em atos normativos, bem como de eventuais procedimentos de fiscalização.`
}, {
  id: 6,
  icon: assets_images_services_6_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  title: 'Planejamento Tributário',
  description: `Elaboração de plano para economia Tributária; Estudo para a compensação de tributos inconstitucionais; Estudo, avaliação e enquadramento da empresa diante da legislação Fiscal para o melhor aproveitamento na determinação de impostos e contribuições.`
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
    slogan: "Servcon Contabilidade",
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
    primary: '#0c5c99',
    // primary button and link color
    secondary: '#0a4e82',
    // secondary color - can be used for hover states
    muted: '#7B8188',
    // muted color
    accent: '#0a4e82',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2FnZW5kYTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaWRhZGUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2VtYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9lbmRlcmVjby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZmFjZWJvb2sucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2hhcGUtYm90dG9tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zaGFwZS10b3AucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3N0b3JlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy90ZWxlZm9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvd2hhdHNhcHAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ29fYnJhbmNvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9xdWVtLXNvbW9zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy80LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy81LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy82LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdXBwb3J0LXRlYW0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3N1cHBvcnQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3Rlc3RpbW9uaWFsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9iYXNlLWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2Jsb2ctcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9mYXEtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3ByaWNlLXRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuZGF0YS5wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbnMvbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sZ3BkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWNrLWFycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlSW5mb3JtYWNvZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9ibG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9jYWxsLXRvLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY3VzdG9tZXItc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmFxLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9wcmVtaXVtLWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy90ZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3VsdGltYXRlLWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3NsdWdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvbGlzaGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuaW1hdGVkLWNzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWFzb25yeS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXNwb25zaXZlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3lub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBY2NvcmRpb24iLCJpdGVtcyIsImNvbWJpbmVSZWR1Y2VycyIsInNpbmdsZSIsInByZXZlbnRDbG9zZSIsIm9wZW5JbmRleGVzIiwiaGFuZGxlSXRlbUNsaWNrIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsInN0eWxlcyIsImFjY29yZGlvbiIsImluY2x1ZGVzIiwicmdiYSIsImFycm93IiwiY29udGVudCIsImNvbnRlbnRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsIndpZHRoIiwiQmFzZUFjY29yZGlvbiIsImludGVybmFsU2V0U3RhdGUiLCJjbG9zaW5nIiwidHlwZSIsImZpbHRlciIsImxvZyIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwiY2hhbmdlcyIsImNhbGxiYWNrIiwiYWxsQ2hhbmdlcyIsInNldFN0YXRlIiwiYWN0dWFsU3RhdGUiLCJjaGFuZ2VzT2JqZWN0Iiwic3RhdGVSZWR1Y2VyIiwib25TdGF0ZUNoYW5nZSIsInJlbmRlciIsIkFjY29yZGlvbkJ1dHRvbiIsInJlc3QiLCJidXR0b25Ub2dnbGUiLCJhY2NvcmRpb25JdGVtIiwib3ZlcmZsb3ciLCJtdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImFjY29yZGlvbkNvbnRlbnQiLCJ2YXJpYW50cyIsIm9wZW4iLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJjbG9zZWQiLCJBY2NvcmRpb25Db250ZW50cyIsImlzT3BlbiIsIkFjY29yZGlvbkl0ZW0iLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJzbGljZSIsInJlZHVjZXJzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlciIsIkJsb2dQb3N0IiwicG9zdCIsInNsdWciLCJzbHVnaWZ5IiwibW5fdGl0dWxvIiwidGh1bWJuYWlsIiwibW5faW1hZ2VtMSIsIm1uX3RpdGxlIiwiZXhjZXJwdCIsIm1uX2Rlc2NyaWNhbyIsImxlYXJuTW9yZSIsIm14IiwibWIiLCJpbWciLCJhIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0T3ZlcmZsb3ciLCJXZWJraXRMaW5lQ2xhbXAiLCJXZWJraXRCb3hPcmllbnQiLCJGYXFJdGVtIiwiZmFxIiwicXVlcyIsImFucyIsImJvcmRlckJvdHRvbSIsIm1hcmdpbkJvdHRvbSIsImgzIiwiRmVhdHVyZSIsImZlYXR1cmUiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJmaWd1cmUiLCJtaW5XaWR0aCIsIm1yIiwiUHJpY2VUYWJsZSIsImlzUmVjb21tZW5kZWQiLCJzdWJ0aXRsZSIsImxpbmsiLCJwcmljZVRhYmxlIiwiaGVhZGVyIiwibGlzdCIsIk1uX1RpdHVsbyIsIm9icl9ub21lIiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJidXR0b24iLCJyZWNvbUxhYmVsIiwibGVmdCIsInRvcCIsInJpZ2h0IiwibWluSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsInByaWNlQW1vdW50IiwibGlzdFN0eWxlIiwibWF4V2lkdGgiLCJsaSIsInN2ZyIsIm9wYWNpdHkiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsIlNlcnZpY2UiLCJjb3RhY2FvIiwic2VydmljZSIsImNvdGRfbm9tZSIsInByaWNlIiwiY290ZF9jb21wcmEiLCJjb3RkX3ZlbmRhIiwidGhlbWUiLCJjb2xvcnMiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsIm1lbnVJdGVtcyIsImlkIiwidGVsZWZvbmUiLCJsYWJlbCIsImVtYWlsIiwiZW5kZXJlY28iLCJjaWRhZGUiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsIndoYXRzYXBwIiwic3RvcmUiLCJmb290ZXJOYXYiLCJGb290ZXIiLCJmb290ZXIiLCJmb290ZXJUb3BJbm5lciIsImFib3V0IiwibG9nbyIsIkxvZ28iLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwdCIsInBiIiwiZ2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZvb3RlcklubmVyIiwiYm9yZGVyVG9wIiwiZ3JpZFJvdyIsImdyaWRDb2x1bW4iLCJ0ZXJtcyIsInNwYW4iLCJXaWRnZXQiLCJmb290ZXJXaWRnZXQiLCJ0b1N0cmluZyIsImZvbnRGYW1pbHkiLCJ1bCIsIm1hcmdpbiIsIkJhciIsImlzU3RpY2t5IiwiSGFtYnVyZ2VyTWVudSIsInRvZ2dsZU1vYmlsZU1lbnUiLCJiYXIiLCJ0cmFuc2Zvcm0iLCJvdXRsaW5lIiwibWwiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudSIsImhhbmRsZVN0YXRlQ2hhbmdlIiwic3RhdHVzIiwiU3RpY2t5IiwiU1RBVFVTX0ZJWEVEIiwicHJldiIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwiaGFtYnVyZ2VyIiwicHkiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkxlZnQiLCJsb2dpbiIsImpvaW5Db21tdW5pdHkiLCJOYXZiYXIiLCJpc01vYmlsZSIsInVzZVJvdXRlciIsIm5hdmJhciIsIm1lbnVJdGVtc1BhZ2VzIiwiZmxleEdyb3ciLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtT3JpZ2luIiwiTG9jayIsImZpbGwiLCJ3aGl0ZSIsIm1peEJsZW5kTW9kZSIsIkltYWdlIiwic3JjIiwiTGF5b3V0IiwidmFyaWFudCIsIkxncGQiLCJzZXRJc09wZW4iLCJ1c2VFZmZlY3QiLCJhY2VpdGVMZ3BkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xvc2VMZ3BkIiwic2V0SXRlbSIsImNvb2tpZVBvcHVwIiwiY29va2llUG9wdXBBY3Rpb25zIiwiZmxleFdyYXAiLCJib3R0b20iLCJ6SW5kZXgiLCJmbGV4IiwiZm9udFN0eWxlIiwiTmF2TGluayIsIkxlYXJuTW9yZSIsImZhZGVSaWdodCIsImtleWZyYW1lcyIsImFuaW1hdGlvbiIsImxvZ29CcmFuY28iLCJTZWN0aW9uSGVhZGluZyIsInNsb2dhbiIsImVtb2ppIiwiaGVhZGluZyIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwiZGVmYXVsdFByb3BzIiwibGFuZyIsIlNsaWNrQXJyb3ciLCJjb250cm9sIiwicGFnaW5hdGlvbkJ1dHRvbiIsImluZm8iLCJUb3BCYXIiLCJ0b3BiYXIiLCJweCIsInBsIiwicHIiLCJ3aGl0ZVNwYWNlIiwic3Ryb25nIiwiYm9yZGVyTGVmdCIsIkluZm9ybWFjb2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJvcmdhbml6YXJPYnJpZ2Fjb2VzUG9yRXN0YWRvIiwib2JyaWdhY29lc0dlcmFsIiwiZXNwaXJpdG9TYW50byIsIm9iciIsIm1uX2VzdWJwYXN0YSIsIm1hdG9Hcm9zc29Eb1N1bCIsIm1pbmFzR2VyYWlzIiwicmlvR3JhbmRlRG9TdWwiLCJwYXJhbmEiLCJyaW9EZUphbmVpcm8iLCJzYW50YUNhdGFyaW5hIiwic2FvUGF1bG8iLCJJbmZvcm1hY29lc1Byb3ZpZGVyIiwibm90aWNpYXMiLCJzZXROb3RpY2lhcyIsIm9icmlnYWNvZXMiLCJzZXRPYnJpZ2Fjb2VzIiwiYWdlbmRhIiwic2V0QWdlbmRhIiwiY290YWNvZXMiLCJzZXRDb3RhY29lcyIsInVybDEiLCJhcGkiLCJ1cmwyIiwidXJsMyIsInVybDQiLCJheGlvcyIsInRoZW4iLCJzcHJlYWQiLCJyZXNwb25zZXMiLCJ1c2VJbmZvcm1hY29lcyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlYXRlIiwiYmFzZVVSTCIsIkluZGV4UGFnZSIsIkJhbm5lciIsInNlY3Rpb24iLCJncmlkIiwiZG9tYWluQ2FyZCIsImlucHV0R3JvdXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYW5uZXIiLCJoMiIsImlucHV0IiwiV2Via2l0Qm94U2hhZG93Iiwic2VsZWN0Iiwic3VibWl0Iiwibm90ZSIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5maW5pdGUiLCJCbG9nIiwibW5fY29kaWdvIiwiQ2FsbFRvQWN0aW9uIiwiY29udGVudEJveCIsImJ0bldyYXBwZXIiLCJCZ1NoYXBlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwic2hhcGVUb3AiLCJzaGFwZUJvdHRvbSIsIkN1c3RvbWVyU3VwcG9ydCIsImlsbHVzdHJhdGlvbiIsInN1cHBvcnQiLCJzdW1tYXJ5IiwiY2hlY2siLCJtYXNvbnJ5T3B0aW9ucyIsIm9yaWdpblRvcCIsIkZhcSIsIlByZW1pdW1GZWF0dXJlIiwicXVlbVNvbW9zIiwiYWNjb3JkaW9uR3JvdXAiLCJmZWF0dXJlcyIsImlzQXZhaWxhYmxlIiwiYnV0dG9uVGV4dCIsIlByaWNpbmciLCJkaWEiLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtZXMiLCJnZXRNb250aCIsImFubyIsImRhdGFBdHVhbCIsImltYWdlIiwiSW1hZ2VBZ2VuZGEiLCJiZyIsIlNlcnZpY2VzIiwiY290ZF9jb2RpZ28iLCJTdXBwb3J0IiwidGh1bWJXcmFwcGVyIiwic3VwcG9ydFRlYW0iLCJUZXN0aW1vbmlhbCIsImR5bmFtaWMiLCJzc3IiLCJhdmF0YXIiLCJhdXRob3JOYW1lIiwiZGVzaWduYXRpb24iLCJ0ZXh0IiwiVGVzdGltb25pYWxzIiwiYXJyb3dzIiwiZG90cyIsImZhZGUiLCJjYXJvdXNlbCIsInRleHRJbmRlbnQiLCJpY29uMSIsImljb24yIiwiaWNvbjMiLCJpY29uNCIsImljb241IiwiaWNvbjYiLCJVbHRpbWF0ZUZlYXR1cmVzIiwiaDQiLCJqb2luIiwibm9ybWFsaXplIiwidG9Mb3dlckNhc2UiLCJ0cmltIiwidGV4dFNlY29uZGFyeSIsImhlYWRpbmdTZWNvbmRhcnkiLCJiYWNrZ3JvdW5kU2Vjb25kYXJ5IiwicHJpbWFyeSIsInNlY29uZGFyeSIsIm11dGVkIiwiYWNjZW50IiwiZGFyayIsIm1vZGVzIiwiZm9udHMiLCJib2R5IiwibW9ub3NwYWNlIiwiZm9udFNpemVzIiwiZm9udFdlaWdodHMiLCJib2xkIiwibGluZUhlaWdodHMiLCJsZXR0ZXJTcGFjaW5ncyIsImNhcHMiLCJzcGFjZSIsInNpemVzIiwiYnJlYWtwb2ludHMiLCJsYXlvdXQiLCJwYWRkaW5nTGVmdCIsInBhZGRpbmdSaWdodCIsIm1haW4iLCJsaW5rcyIsImltYWdlcyIsImJ1dHRvbnMiLCJkZWZhdWx0IiwicHJpbWFyeU1kIiwiY2FyZHMiLCJvZmZlciIsImZlYXR1cmVDYXJkIiwiZm9ybXMiLCJ0IiwiYmFkZ2VzIiwicm9vdCIsImgxIiwiaDUiLCJoNiIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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Y0FBUSxFQUFFLHVCQUhKO0FBSU4xWCxZQUFNLEVBQUUsZ0JBSkY7QUFLTnlILFlBQU0sRUFBRSxpQkFMRjtBQU1ObkksY0FBUSxFQUFFLG1CQU5KO0FBT05tRSxhQUFPLEVBQUUsY0FQSDtBQVFON0QsY0FBUSxFQUFFLHFCQVJKO0FBU041QixXQUFLLEVBQUUsZ0JBVEQ7QUFVTjhPLGdCQUFVLEVBQUU7QUFWTjtBQTVDRjtBQWhRSyxDQUFmLEU7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMEM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgsXG4gICAgICB9ID0gcmVxdWlyZSgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG5cbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKGFzLCB0aGlzLmxvY2FsZXMpXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbiwgb3B0aW9ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNzZzQwNCA9IGVyci5tZXNzYWdlID09PSBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1JcblxuICAgICAgaWYgKHNzZzQwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBtb2Q6IGFueVxuICAgICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzLCBtb2QgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgICAnLzQwNCdcbiAgICAgICAgICApKVxuXG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHRvbGVyYXRlIHRoZXNlIHByb3BzIG1pc3NpbmcgYW5kIHN0aWxsIHJlbmRlciB0aGVcbiAgICAgICAgICAvLyBwYWdlIGluc3RlYWQgb2YgZmFsbGluZyBiYWNrIHRvIF9lcnJvcj9cbiAgICAgICAgICBpZiAobW9kICYmIG1vZC5fX05fU1NHKSB7XG4gICAgICAgICAgICBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZignLzQwNCcsICcvNDA0JywgdHJ1ZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgLy8gbm9uLWZhdGFsIGZhbGxiYWNrIHRvIF9lcnJvclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgICBlcnJvcjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYWdlbmRhMy0wM2EzNTc1YWM4ZGQyOTI2MmUwNGFkN2NiMDMyMGZiZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyMS0xZThkYWRkOWNmOTI0YTFiZGM5NmE2NDkxMWU4YTNkNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2hlY2stZTc1MWM4YzZmMmRiZWMzMTRiZWEwMDRlNmU0ZWM0YzgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NpZGFkZS1iNTA4MWMxMmZhNjU1ZTkzYTA2ZmIxYWU0ZWQ5ZTQ5OC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZW1haWwtMDFhOWMyZmYwNTlhNGNhNTVlMjJlMGJlYjEyYzMyZDUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2VuZGVyZWNvLWIwNDAxZTU0ZDhkYzE1MTU2ODE5YzllMzlhZGQ4MDEwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mYWNlYm9vay0xNTZkNjM2Y2IwMDBlMGE5ZjlmZDlkNDE1MTcyY2JkOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW5zdGFncmFtLTg2ZTlmMWJkNmEyMmRmMmQ4YzNmMzcwYzlkMDBmOTAwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVvQUFBQWJDQVlBQUFEYkFoa2pBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSUNTVVJCVkhnQjdaZ3RjOEpBRUliZmRDcVF5TXJJU21SbEpES3lNakkvQ1JtSlJFWkdJaXY3RTVCSUhOMU5OdlRZaEhENWFFbkNQVE0zZ1F0ekhBOTdlNXNESFAvRCtYejJxYjFqcE5EY0Z0UlcxSmJvZ1ljZTBKZUhkRm5KMjh6enZBd2pRdVJFMVBoNm9yYWpPWDZqQXkvb2dQeExFWDRsUWIzdWhVUnBPRUNrTHFVeEMycWZOT1lIT3RCYWxQRXYrZXJXRjRhampOUVEvVGhRTzZxK05mMkdBQzFwSmNxUTlLWnVEYjNzekNqb0RNMkpsMXVDcXF5Z3JTeHJVV3E5bTR3dU41blEzRmhTZ2lLNlRBTEpzVlpZaWFJQk9ZSmlWQ1dsWTVaVVlzalNpWngzdzRoejdyMHg3b3JpclJWRkpKbURjVWh2YVFKN1RBUmVodFMyOUZMUDJhY1czeXNmR2tYSkRzSGhxU1VsWGJmWlIwUHpUdW1TcWU0OHJUVEp1aWxLa3QxYWRYTUliK2pMRHBnd2tpNHkxZDBvcTFZVWZaZ0ZCYW83WCtleTNpZVB5RXBWTjB1S0pTZGZjU1ZLQ2tsZWFyb280d2phekVWU2llUll6bHNubzV2VFRDeTUrY0pGbEdUK0NOVUttd3ZKUkdxUzJTRzVOa0cxMWdyTldpc1hKZXVTdDM4ZGNuc2FhRGRYU1NXU2N4TTBGS1psUlBGU3F5c2tVendKUnExVkoydDVhOWNiZGJYOVZ6UlU4WGlWYTRZaWlma29KQTM1Z0RzcFdCWkZVSUppMStmVEMwNC94MWU1bVovVndKRWpQbElZNVVPbjg2aG54SW15eElteXhJbXl4SW15eElteVpLeWl5a2VtV1QyRUR3NC9NdkJSVDkxeHg2UDRBY3ArMVptNHlFa2VBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFa0FBQUFhQ0FZQUFBRDdhWEdGQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUhlU1VSQlZIZ0I3WmloY3NKQUVJWTNUQVd5RW9tc1JDSWprVWhrSkk5VGljd2pSRlpHSXBHVlNDUVNSLzlORm1iWmt1U1NhWWRMY3QvTXpvVkxRNU9QdTl1OVJPUVoxK3MxUnNPUlIxR1Vrd2RNeUQ5aTA3NGNIeVY1UjVEa1FKRGtRSkRrUUpEa1FKRGtRQ0VKdGNrVXNVQzhVNEI5ekRsdW45K2szU0pZMEFVbk14UngzelJTOFB4ck5BczUvb0tML1FRSE15b0ZNVlBFQm4xTEdoa3lteElTUVVKeHpOUHRMS0ZaeWZaZ0ZNZ3lreURtNWxReG95WVlUaGUwS2YwV0ZZOUJsQkkwTTZmdWU4ZGk0Y1lIRnJSRG5Nd2ZzcWdWRFJRbHlDYXNoODMxdlFSUUkrcGdMbGppeTNpZG10S0FrTFg0bHJBMG1YMzc4RkFuc1NoRWhzUGNYUGlCU0laU0luQzVRK1VJMGo4OEQ1SWRudDhPa3VmRnBKak1UVGViNzcwb3lkeWM1clVnWG01U1BQZnAyVFdWRlhlRnFHSU85MVdVSkNLN3h0WUtZbXEzSlNJcU05MHNhQ3R6dWplb041NGFGcE5LNHFxa2NlOG1jNVF6MzBWMTgxQk5aRzU3ajFUUnNlaytrb01neG1tREswT1JSZWt2WkZGcm4yc3BxYUk1ZzlrZjg0Qm5TaVdqTitMOEZrQ01wOVNUb3JPaFNNeW9CYTFlbFRTSStxczZLamR0Vjdoc3FheWkyeEJSQjBSSW9tN2lqSC8rU1I2QmUyUkpHOVZWN09pcEE1MGtxUnVKcWN4Mis3b1UraXFrSnBwVGVYOUhDdndmUDJtRHpubnRJbzRzQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N0b3JlLTk2ZjFkZTIzZmNlYWYwMzEyZDcyOGI2NTA1YzRmNGJkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy90ZWxlZm9uZS05MmE2NTIwNTBjYjA2YmI2YWRiMTAwZWM0OWYwMGRiMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2hhdHNhcHAtMDIwNzdhZmNmZTllNzNmM2Q4MzA1YjkzMWViYTE4ZGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMGUzOThkY2IwNjRkY2ExNDU3ZmQyZDkwYjFkNWFmMTIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ29fYnJhbmNvLTMxM2NmOTE4MmI3NDZjNWFhYTczNjZjZjU5NzZmMGU0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9xdWVtLXNvbW9zLWZmZDgwNGQwMDNlNzM4MzZjMmFmMTc3NTQ1ZDc5NWVkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRGwybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNmdnU3OG5JR2xrUFNkWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FuUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTZGhaRzlpWlRwdWN6cHRaWFJoTHljK0NqeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5YytDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwQmRIUnlhV0k5SjJoMGRIQTZMeTl1Y3k1aGRIUnlhV0oxZEdsdmJpNWpiMjB2WVdSekx6RXVNQzhuUGdvZ0lEeEJkSFJ5YVdJNlFXUnpQZ29nSUNBOGNtUm1PbE5sY1Q0S0lDQWdJRHh5WkdZNmJHa2djbVJtT25CaGNuTmxWSGx3WlQwblVtVnpiM1Z5WTJVblBnb2dJQ0FnSUR4QmRIUnlhV0k2UTNKbFlYUmxaRDR5TURJeUxUQTVMVEF5UEM5QmRIUnlhV0k2UTNKbFlYUmxaRDRLSUNBZ0lDQThRWFIwY21saU9rVjRkRWxrUGpSaU0yRXdNbUpoTFRrMVkyRXROREF4TnkwNE5USm1MVFl6TldWaE9UVmhOMlZsWlR3dlFYUjBjbWxpT2tWNGRFbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlJtSkpaRDQxTWpVeU5qVTVNVFF4TnprMU9EQThMMEYwZEhKcFlqcEdZa2xrUGdvZ0lDQWdJRHhCZEhSeWFXSTZWRzkxWTJoVWVYQmxQakk4TDBGMGRISnBZanBVYjNWamFGUjVjR1UrQ2lBZ0lDQThMM0prWmpwc2FUNEtJQ0FnUEM5eVpHWTZVMlZ4UGdvZ0lEd3ZRWFIwY21saU9rRmtjejRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZjR1JtUFNkb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQmtaaTh4TGpNdkp6NEtJQ0E4Y0dSbU9rRjFkR2h2Y2o1VVluSWdWMlZpUEM5d1pHWTZRWFYwYUc5eVBnb2dQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwNGJYQTlKMmgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhuUGdvZ0lEeDRiWEE2UTNKbFlYUnZjbFJ2YjJ3K1EyRnVkbUU4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTZHlKejgrZ1cxTzhBQUFHeUJKUkVGVWVKek5uSG1jWFZXVjc3OXI3M09IcWx1VlNxb1NNaENtUkR1QUVPWkJVQVpsREtEaUU1OEdwS1Z0Ukx0Uit5blBnVS9yNCtHanRXM0VwNkFTeDFZR1pRWkRBaExvNElBeUpoQkpqQUlKbVFpVm9aSWFidDNobkwxWC83SFB1VldWVktVcUlieCs2L081eWFmdTNlZWN2ZGRlNDIrdGZZUzlRTVZMYmtiVTRGVVFIRmF3SWtZVHI5NGFFSVNxOThXQzhEYmdVT0FRZ1NNVlpnRXRRQkdoQklCU0JxcEFuOEJmRko0SFZpajh1ZVpZWHN4UlJRV3ZTbVRFZUsvaVZKdzZoN0dDR2tQMTFpdmU4SnJralZ4Y3ZPUUhST0tJeEZOekVRYTE1VHF1bEFjUlErTDFBQ3VjQnZwMmhGTlFtUVVhV0xYamszWDRHYWxtUCtCQlZncjZXNFVuSGJJNE1xeFZyNVJqU3lubnJJTExTVXlpRmkrV3lodGcwSjR4NXRLYmFJa2p2Qk5pY2VRalk4cmUrWkt4bEJPeHBValBCeTRFT1Ivb0dHQ0NBdUlBcjZvbWZiNE1tVW1ERHlpZ0l1SUJBOWowK2pCRTJRcjZJSEJmT2JZUGxuTE9sWjlkU09uWU9hYWFlRi93Z3NrWitxSVlmbjdsYmk5eHR4bFRtanNQc1FsNFFkVklaRVVTcjc0c2taUTB1UWk0Q3VFNE5KVUtWYWZnRVN3cWtxMWNSRVJCWllRNVpML3BJSkVCVVZBbllCQ3htbklJNUJuUTZ5ODQ1b283NXo4M2o4aUlTWndxb2lxaXFMZVViOTg5NlJrN1l5NjZrK2I4VnJ3cTFYNURxWVJWajRzaVErTDFIRUcvQmh3cFFUd2NxS3BpRUJGQlVXMm96NTZxcjZxR2kxVVVGQlhCZ3dob3lpU2VVN2c2TXZKSWtpaGlzT1hFdUdLVVlERDAxOXZocmcrTzZXRmptbVRMeFRlakF1bkR4UnFNOCtwVTJkZUlmQU9ZbXpFazNXQURJQ0tvYXVETlhpUlYxZXplNlRKOCtnU2JmbmVMZXI2RVlZTVZyRlAxSUNxQUdLWHZsaytPK294Uko5eDA4YzBOUTZCZ1loLzdvczNqdkw1ZmhCK0swQTdpVTVFM2dnanBuRVhlbUhFZmpUUklEUXlvbkErYm9FYVZMb1hMTFhKdnhWY29tS0loR0FDOEdQcEhNY3htVno4Mlgzd3pkbUIxVmxGZjlFMTQxUnRFdUVkRTJsVWxEaHNvRmtDRGJaUTNteW5RWUh4UXJQQlFxNnFpS3JHSXRBdmM0K0dHY2MzSEFPckRHc0pGelhOdjN2VzlSL3FoK1NQZngvcXdTZ1dyaWt2VWwzTEczQ2NpWnhJOGkwb3dxcXJzZlpYWlhjcFVqREFoSnlLU2VyOUZHSCtoZWltTGlCVndvdUNNMGorQ1dnMjdrTktINXBIdVB3b1djRjZaYklTSFJUZ1NKRmJWS0gyd3BsczNacWFrZG1mVTcvYmtmcHFhYUpHZ1hvSWtDRGxWWGVLVU9VYm9GTEFDRGdSMVVQN2x6bXExc3lxZGRnMXFGYzJZb2poRnB4amhDVUV5cHVRQ1UxQUpZckpiVERFaVJHYm94d3d4cHNOZk41Z0VNRUs0bHpWRXRuRWZDWjQrekUzUkhFb3N5TkZXZUFMVktXRk5XQVUwQ212ZWthSWR2eWhObjVwTndxaXFFMHhKaElVQ000R01LYm9uM2taVk1VYW9KNTVhYncxOCtvTVJpczE1Y3BIQis0SGRGNEl6RGdZcnFMWHppdmVLVXlWSlBNNTdTRHo0NExrTHBRSjVhL0RCN21YZUt5Y2lzY0JNUkJiaTVaMWV0V3hFRFlndlRaOUtlWWU1RGxsWWNlNzNRQVFEa2lTcTlaV3ZTK213YVl0RTVOMG9zWkl4WmZjOVRzYVVTajFodjQ1V1BuTEtMTnBiQ3dqUTJWM2haNCt2WkV0UGhXSStJbkVlcitDOEozWWVUVHc0RDlhUXkwY1VjcGFXWW80REo3V3kvOFFXRHByY3hwVHh6ZlJXNnZ6NzRwV3M3K3FqRUZsOEdnR216QkdRV0lTY0tvL05Pa0xQK05OU1E4Nm9lRVJSVC9YMlQrek1tS2FMZjBDVGplaXBsMm1PaXNhcjk0cmVDRndwUXF6S0c1TVVFZXFKWTFwN2ljWFhYTWdCazFyWjFOMFB3RDV0emF4WTM4VTd2M3d2WGR2N2FXck9rN09HanRZbURwelV5a0dUeDNIZ3BGWU9uRFNPbVZQYW1EbDVISlBITnc5NXh2WnlqZkdsQWt0V2JlYTAvM1VmZmdlN2t6RW5yRVZ5b0RjSzhta2pZc3B4NHNjVmMxU3JkU3AzL0NNd1NKVXNTdUlkUlp1M1hyMVQ5QktRSzBWd3FhSGQ3V0F0TTRyV0JCdlEyMS9ueW5ObWM4Q2tWdDd4ei9mdzFFdWRpQWp2T0hncS8zSE4rN2pucW5QWjNGM2gwUDNhbVRGNUhFMzVvWnErcWJ1Zmx6WjI4K2lmMXJPcXM1dlZtM3BZdTZXUDFadDZXUFY2TjVlZWRqQS91L0lNam52TFBpeCtjUU90VFRtOHB1bkhBSE1pRVp6Q3AxUjUwcU8zTitXc2RkNDdFdzA4THdKbytzajM4QUxxbkFHY0tqTkZtQ2RDeXVYR2pYZWJLYzRyZmZVWUkwQTFabHA3aVhWYiszamloWFhjY01WcEFIejJoNy9oeFhWZG5QYTJmWG5tNVU2V3IrdGl3WkpYV2RYWnc3b3RmYXphMU0yYXpiMVVhZ25FTG55Y2g4aUFNZVJLQll3UlhsemJCY0FCazFwUjc0UEVaT0g2SUdlUkxVWFJtNzNuU1dDVkY0eEhmZE5IdmtmbGxuOElqREUranhlSEZRREZZNzRtb3MycUdndVNVL2FNS1luempHdk84KzdEcHhOWlExK2x6cFR4emJRVUlzNC8rYTFjZU1JTUFQN2p4UTFNbTlETWI1WnY0TnE3bjhFYVE2V2VBSkN6aHYwN1dwa3h1UTByZ2trOVdMWm1FWGoybFUxczZDclRtYXJtMUFrbFNIeUkxZ2VwVk1PRkMwWlZZeEZwQmYyNnNmSkJFSHc5UnNpSHNVMGZub2Y0UENhcVd3VUh6QUVXaUtqWE5CdE9vNVRkRGpLY1YrNzYzTm1jZC9TQkl6SXdUUGlOeFlVdnZMcUYwNis1bjloNU52emdvOXp4eEV0OC9LYkhhR3Ryd3ZtaGJsNURJZ0VoSUZWVk5RcG5nU3dTc0xIUE8wdWR5RWFDODNYNll1ZklOMUhTMnJWQnpGQkJqVFk0czN1VVNjdDVSeC9JWFg5OG1lOC84aUtGeVBMRjl4M043QU1tY3VsTmovS05qNXlFcXZMNVcvN0F6ejkxQm45YXU1WHI3bm1PbG1LRUh6bWtBVUlNMDFkTmVNZkJVL25LUmNjeGMwb2J6NzdjeWRyTnZVenZhRUZ5RGE4MGhBU1JUQU5VMWFmcTlyVnl6aTZpSHJ1aXFXTUZJdEVZSTlhV2NzYXAxaitFeURHZ0NTcFdaV1M4WkN6azA5WDlaY00yRnYvaFpTamt1T1NVV2N5YzBzYURmM2lacTk1ekpEbHJXUEQwYXVxSlowTlhtVVZQdm93cEZSclhqc2dZWS9EbEd0WUVPeVlBaVdmOTFqNzJuOWhDSVdlSHhFUkRtRE9RbWh1Q2xoeFRpcE1QSUhJM3FCVWZPK084NVlNM2Z0Qk4ySzhOUWY4cDZDV0NxTWdvdXpaV0t1UWphQ2xnbTNJWUVkcWE4MHlhMU1La2NVMVU2NDVjSWNKNWp4VWhQNjZKaWExTlRHZ3BNcTY1UUVkcmtZN1dwcDArRTF1TDJKWUN6WVVJRVRCR29KNndaa3NmKzA5c0RjSGlMdWF2YVJvenlBWjlybVAyZ2Z6cnJWYzRweEdSQ1BiT0srOTB3SG5BQ1NrSGplaWVxZEN3ay9BSzZhN2U4K1FyZlBnZGI2WHpSMytIaVBDTkI1WVNKNDczZmVNaE9yZjNVKytyc2FsY1E0bzVTb1VjVzd2Nk0wUnpLTzBnQ2RsZkc3cjZhRzNLMDlhVVozTlBoY2hZaHVPUGtHNTlTREk5Y09MV1phK2U5NFZMNWkwUUl6WVNSSU10MHJrcDZxTHdCblZvT1BKS2ExT2UrNTlaeFp4L21jKzVSeDNBYjFhOHh2eG5Wek91dWNDemYzMmRFdzZleWorZGR3UzV5UERyNTlmeStQSU5YUGUzSjVPTFVyVmdnRWVSTmR6NDhESnFzY09JQk9td2hyVmIrZ0NZMXQ3Q3h1Mzk1TE9MaG1OT3dBUUlrSVFZNE1QQUFrQWpEMTZWeVViazNCU0NORUdIOWo2RW9LcTBGbk04dW13OUR6MjltcWdRMGRxVXh4cEJJc1BKczZidzJRdU9CSUx4L3YzS2pWejkvbU5Idk4vQ3BXdW9KeTY3TzFqRGExMGg2OW12bzhUVEwvazB4eHFKTTZteENZRTVxSjZqeWlSZ2N5UkIwYzVEbVFEaVJOUU13bWYzSG9VSWxHMTkxUkNnR1VOU1M5aFdxVGVHM0hEZkVtNlkvM3o0dzRYOFNQN2JUY09Lcm9pZ3puUGgyOStDVncxeG5CWFdiZWtGZ3NUZ2ZJaDNSakRDQUNHRlVrRnhLblFBNXlQOE5ESUNYbmxYeGp0NU0rQ21GQnV0Slk2TFQ1bkZTYk9tMEY5TDBtMGFJSy9hY0xGR1FpQ1hlRC9NRFlNcTNmVFFNdXBKVUtXQUJ4ZzI5MVpSVmZicktEWHMycTRXRklLK1JsVUNoWGVMeUU4ajczd2VrUlBUY1dZSW5yODNLWTJFMzNId1ZQNyszWWZTMVZjbE1nTndrQXQ0RnpaTC9MSi9kckIxbVZMa0k4TzlUNjBpZGdPTU15TFVZOGZhTFgzc1A2a1ZJanRxUEJTbUZnSzkxTWFlcUZYSlIyQU9CUTZpQWRXK0NhU0FWMHFGSEZmKytMZDhjdDdqTzZsSGN5R0hVNlZXUzhaazlYZFVKUWhCWHkxeHJOL2F4L1QyRnFLY0dUYkkyM2w2bVUxVlFBNGlwNGRHaUI0Tm1GQWhWUE5tR04wQXQwRTFUdmpFV1lkeDF1ejk2S3ZHQVlDUzhNUXYzdlpIRHBvMGpzK2Nkd1RsV3R5SUZFYWFUV1FOWC83bFUxVGpWQ1V6RUN4MnJOblN5eW1IVEd0Z01qdXE3TTdUQzM0NzVZRkZPQ29DWnFaKzBDTzdyaHE4TVFvUjZzSDdUdUNNMmRQWlZxNkZDa1RLbkZJaHg1VHh6Wnh4K0hTNisrc01hTm1PaXdvU2tMT1c5bEtoa1F1RjJvMDBvdDk5MjBzVWNqYllNanUydlZid0VpRFBtUkZ3U09yU1JQUk5Lbm9vb0VwekljZi92T1VKUHZlejMrOWtOM0xXc0xxemgzdWVlZ1VBYXdLT0V5ZHUyUGpPR0tGU1Riand4QmtOZFdsNHBxMTlpQWlUMjVwNStmVnVjbEVEZlJpUk1qZ2lUZHNQallBRHMyZXB2Rm1HRjVBQWEzN2hmVWZ6Z1JObTBsMnBwZkJCMkl1L3Zla3haazBienpYLy9YZ0trZVdtaDVmeHM4VXIrZldYMzBOVFBzSTVIY0tkbkRWOGZONWlLblhYVUJWRkVXTll2elVFZWZ0MmxGaTVZUnRDTkhJc2s1SU81RTRBQjBiQWhJSDV2L2wxSVpQbU5TYkRWakszSTlrYzlweFVnKzBaQ1BKYVVzQ0tFYVBmakJxbG9FQVRJbUI4OXRzYm1GTTZzUkJJR1FtcUVObXdBU1l0c0RRWElyNSszeEt1dStlNUJ0Q1VVVDR5ck4vU3g2OWZXQXVrcW1RTlozLzFWMk5YSlpTY05hekwwb0lSQUt0ZFVEYWdOWUswazJrM0ZqN1NieG15VmtzOHRmNDZ0VGlFNitWYURMMVY0cFlpK1dobm5NUWFvYnV2eG1YdlBvUnZYL1pPZWl2eG1JenZlNzYrZ1BMZ1FGSERKcFJyTVQzOWRRNlkxQW9pZXhLSXRFU0ViRG8zMWlzRUJrTHdsSXdSY3RaUXFUdHFjY0pCazhkeDBva3ptWklpK1NmTm1zcjd6ejZjcGE5dVljM21IbHFLK1NITVVRV3h3c1p0L1R6NnAvVlU2c21ZM0hWWHVVWmJLVC9rZTJPRVd1SjVkWFBQTGdHcjBTZ0Mrb0hpYUFNemFhbkdqbnhrc0NiMHdWa2oxR0pQWHkxbTJzUVdycHQ3S2g4OTdaREdkZlhFY2NiaDB6bHo5bjdFem5QWmR4L2p0dC85aGJibUFvbnpLV0R1S1JWeVBMNThBNCs4c0E0L1Fob1FKZ0lJNUNOTFBVNDRaTjhKUXhhZVJiL3J0NVk1WU5LdUFhdGRVRjhFOUFEdEE0OGNuaW5XQ09WYXdrbXpwdkRkdnorVnFlT2JVOFlZZnZYc2FuNzkvRnErZC9tcHRMY1V1V0grODl6L3pDcDZLM0dqdW1pTjhMV0wzODZ0bno2VFZ6cTdlZnFsVGxxS2VaejNSTmJRWGE1eDhTbXorUHJGYnlleWhueGswS0dPcUJHZjFtTkhKWGJNL2ZZajlOZmlRVjRwTUViVElPK2RoMHdsRnhrU3A0dzlsRUdBM2dqWVJ1cXlSeXFSU09wQlhDWG13dU5uY1BqK0hYeHovbExxaWVlUWZTZHcyZW1IY05ucGg3QmsxV2JPdVBZQmx2NjFFNU8zMk5SUXhNNkRLaGYrMjBPOGZPTWxmUGRqcDNMaTFYY1BLWXJoUEIydFJhWjN0UER2aS8vTXBwNEtPV3VHcUt3STFHTEhySDBuY09IeE0yZ3BoalJpNkZ3QlZUWnNIUnRnTmNDUklUZmFGZ0d2QWtjUm1tNTJxbVVQNFdWS3IzV1Z1ZW9udjRQZUtxZWM5RmJlZC93TS91K0NGN2pxNTA4QU1DRzFMWW4zWVNIVHh2UGF0akk5NVJwWC92aTMzUEUvenVieU13N2xld3VYMGRhYWFiRTBvdGhyN25xR05hczJRMkdIeU13WUtOYzQ1YVMzY09IeE0vQStwQUdEeVNzUVdkWnRIVHRnQlEwNHp4RmltVmNOc0NJdDBPalFSc0NSS1o4emRFd29ZZHBibURRdUxHekJrbGR4aWFlMUtVYzFUdGhXcnRGYnJ2SHBjMmZ6d3ZVZjR0UkRwd0Z3MzFPcmVIVFpPcTYvOUdTbVRXeWxXaC93S3RrUzl4blhSTEc5Ukh0N2lmR0RQaDBUU2tUdEpTYTI3c0lrcWlKR2hnQld6dmxSVWRvMHVOVTBFUHl6QVY1SkZXdk1lWkpxUU5pODh5VHBMcmNXODJBRTcwUGVjL1lSKy9Id1Y5N0x2MTE2TW9XYzViWlBuOFVSQjA0a3JzVjg0ZFkvMHBTUHVQWkR4MU9ySlR0NW5zUXJpUXNGL2NScDR4UCs5anZWaW9iTWplQ3hCa09jRGNCcVYvc2VtR0JTcVhyRm9MSVV4SU5hRUVhTm5YZEYxWmpyUG53Q20zL3lNUjcrNS9kdzdJeDlBUGpwNGovVDJkM1BnMTg2bjRudEpaYXMyTUQxdjFyS3g5NTFLS2NkUHAyZVNqMkV4SHVCVkVOY3RMbW5rZ0pXTGFNQ1ZrRk1oSlFISHBVbGhsaFdnSzdPZ0hEZHc1cUpodWlLbHpaMk0yL1JjajV3L1VNYy9mazdBRmpWMmNPNTE4MW5la2NMRDExOUFaT250UEdWTzU1aWMwK0ZUODJaUFdvTmFYY3A5T0JrZ0ZYTHFJQlZ3TGdiemJLcndhK0lwS0IxVlo0RW5RbDRVYUk5U1E2OFY4aEgzTHpvUmVyOVFRSW10QVVqUEw1VTRKVy92czVGMzN5WXV6NTNEcS8vNk85WTlNSTZKbzFyWW51NVJxTW5OSnZvb1A4SHIwZUVrU08rQm9VSXZGSlBXTE81bC8wNlJnZXMwbEowYW5qbGoyS2xibEs5ZTB5emRvbFFnOXJ0TGN3NkM1cnpFUk1tbENpVkNrUnA4SkE0RDZVQzl6Mjlpc00vK3d0dWZ1UkZPc1lWdWUxM2YrV3JkejlMVTk2T2pndnNCaGtSWE96U3FtVHI0Q2FpblNpc3RWR3lCZlF4OVVxVURsOW9vQXRvei9pM3V6bWxFVUdNNEFHZkdzaHNMaUtBOHpRWElsNWNzNVZQM3ZRWStWS2VlaTBCYTJndVJPQUhkcU9lT0pMRVViTm1pSnBaSXhDN1JzbGt1S1dta0F3NHo1b3R2VXdiQmJBSys1bmFGNUZ0WG5sSWdFaENvYWxUMFlkUjVvWkdJYkZqcXJrTkd0QlRxYVBWR050Y3dGaHdmZ0RFaUJOUDI0UVNDNjgrbjNITmVaNWZ2WVdQejN1YzcxeCtLdTg2YkRwOTFaaTUzMzZrNFcxdS9mU1psQWRGdEpsU1phMGwrN1ExQVFHVEdjNCtaUldEMTdyS0dCRW1sQW9CU3QyWm1WbUhtRk1sQW4zSWlIUktpSmcwZFVYeXk0R2dXME5OWVJma05aUmRzOGp6TTNObU0vdHZwckN0dDhyMm5pclZla0xpaGlhSzNnZTNXMDg4WG9OTFRueG9NTXhadzZ1YmVuaGk1VVo2S3ZVR1ZCSE1vcWJYZTR3Ulh0L2V6K1BMTjlEWlhXbEFHME5YQzFqaHRXMWxWSlgyMW1KZ3V1dzRMc3NBc2dxQjNCNFVDNGxRM0w3dk9Zek56NitaWDEvWCt5UndJdUFRYkZwckdSUjlhVm9PVFFIbUZIQUN1T0RZZzdqZzJJTll1R1FOOXoreml0Ly9lU1BkL2JXd3M1R2haM3VaYzY2YlQrdzhSb1M4TlZ4OSs1TWhMU0RFSHV1MzluSG1WeC9BNndBelpKanlpVWpJNXZzcWRXYWNNS09SV2xnampaSk1aQTJyT251SW5XZGlTekh0aUJpb1NnN3FybklnRnZUSkNWUHJDMDc2d0VRZS9FNnZpL0tSWWNQOEZ5MklVK1RiS0NlbWVoZTYzd2RoSFppUTZrOXVhMmI1dHo2TVYyVmlheFBlSzJkZjl5dU9uYkVQbjVvem16bEhId0RRcVBsVWFna1RKN2J5d3ZVZkltZGx5TzVKaWh1KzYzOC93T0g3ZDNEengwK2xrTE5jZC9lemZHdkJDeXovMWx4S2hkREpPUmlLeTF2TEJZUHdtRGp4MUN0eHNGc3BqUy9seVVkMnA3UUJ5T29DZ3c5cmZIUGJ4Z0lMYnVxeDFqYTVLUGJnRVZmQmdDMzhzdVFyVndISGdMcHdKaWpJVytLaDJKem5KNCt0b0JCWjNqcTFyV0VUNWorN21zZit0SjVIbDY3bE93dVhjZFJCRXpudUxaT1ozbEhpY3hjYzFXZ2RXN3g4UTBQaUJpWVltTk5mUytqYzNzK2lGOWFSaXl3dnZkNU40cFRIbDIrZ2tMT05IcGhNK0NOcjZPcXJNcjVVUUZYcGFDMXc4dUhUT1c3bVBodzZmUUtIN2QvQjIvOW1DbXUzOUxKazlXYUtPZHVJZkxPS0s2SU94UUxQbFV2NXUrbXZVbFRqUk9LMDFTeUprSHhpQWFmb21RS1BoUG1uOWtheVZ0QmcvS3FWZWpCUEFiVUNJN1EyNThQT3VaQTR1a29kQ2puMHJuL2tHdzhzNFFzLy9pMmxjVTNFemcrTHlXV1pkT0k5cWxETVd3cVJwYmNTay9Va0RDWmpESlZhekh1UG44SDluNTh6NUxmZVNwMmxyMjVoNmFyTi9PaXhGZnpsdGUwVTgxbkhoR2g2M21sSXE1a2dpd0FiMTYyemtTT3EvT0lLU25OL2lIT0p5K1Z5QnBGRjN2bTdRQzRDalVVa04vaDhVR1FOYmVPYVVsYzhBQnNrenFNUzNIYXBtTVBuSTFxS0FSaXN4WTRwazl2WStNUExkaExwakk3Ni9CMGNOMk1mZnZDSjAwY2NzeU9kZWUwREFUWUZ2ck53R2I5WnNZRVY2N3Q0cmF1Zi9scE1Vay9JRlhJVUI0RlZpbWFaZEF5YUE3bkxpaTRDVElLNktPZnB2LzJLMExYcG93UmN1RGcxVGw5QzlUd1JhVTc3MUV5RzFhZ3FiakRBTm96Mzhta1NtS1FEUllSTjNSWCs1ZDRBZ21jR042aEZzREdkMi90WnNub3ozNXkvbEVyZE5VemJjTktWcWRMSzE3WngySDRkZUs5OForRXlYbG03aFVLcGlERkNNUjloaTduUUtEQ0E0S2tnb3FKZVZIS3EycWZ3eFZDWlVZaGM2RG9rN2ZPdC9QeVRsQzZlaHczRkJndjZpaUtmVVBUbnFiaGxUQm14clhXRVhqY0FXbFBKK1QvM1BFT2NEQTlidHJjVVdiV3BoeS9jK3NjeGxUdU1DVFdwanRiQWlIM2FtbGhYS2xETTI0YnRDMEZtUTFJQ1U4SWFNb0gvdUJGV0JjUVpSMklwMy9hSkFjWUErQ1NoRUZsNjFMdG1NY2JETGFxY3FPZy9pRFFPVjR5STh1MUkxZ2pWZXNMVEwzWHltZk9PNEtPbkgwd2hzaU9PVDFMamFxMk15aFFBSkFTT1RmbUlkVnY2Mk5BVnFvODdCbnlENXB3eEtWSFZISENqaVB6Q2lKaXlxN3RXRTVFTVFsNkdMTEI0eVR4QU1Lb1NLeHIvT3FaMFR2VG96b2NzZHQwNlA3Z0J1cU8xeUJFSFRHU0lTOWtibEs3ZkNQeDFZemRydHZTbUJud284SzNwOGNCMFAyTWdwNnFQVEwzOHRMUFhmZjlSckxYaUJSV0V5bTNESExMSXFIVEp2REIvVmVNVmI5U1VzUDUzQWtjeGNGWXA3VjRiRzNPcXNSdHAyRjZoZkdUSVIzWVlwZ3crWENFeHFqbUY1eHptbmFLdUlpSkdVSThZeWp1Y2tkd0o0eTJ2MzBqejlLa0EzZ2dXZkJuVk9ZcjhEbmlMaUl4SnJRWjdzWEc3VUtHOVFacDJZdTBzS1pLMXE4WW9PWVdYRkgrdVZTcElPTG1YclhtbitRLzNvT3pvWCtxaHJJSlRtR3hnb1lnY25hcFZKQU9pczJQajAzOFphUXI0RDNJV21VMTVUbUVPNkNZSkJ4c2RDSXo1NkI5aG9EZU5RTXdKV0lOMll2d3BxcnBva0sxeG9YZWswUzN3WDBxYUFwQVNEbE00Q2RCY0RsaVVlSDhLeWlZYVRGSFUrR0daQXJzQXdQdHYrV1NRbHlDZUlkSHlVaTRVMzNZV3lMZFUxWWlJVFk4WE4zWkl4K1pUOWlxRm5GT3pNNUNreDR1dHFocFYvWlpKb3JPTWtYN0oxRWNBeklnbmFHRU00dDk4eVR5TStpd29OelZmOVUybUNZZStYL2ovNUVDNmtyYUs3WEFnWGJuY0dybTM2dXJrVE02UW9pVWlTdjl0dXo2dFAyckpwUC9XS3hxakZIemVGQVJSQzl5cm50bXEzSkpKajRoNERTZmlVbFFuWUlWdmxBSERrR3FHdTZtaXFCTVJQeUFsM09KVlp5TjZMNkkyWjNJQ2VKR0E3bzNHRk5nZGczblJuVFRudS9CNHFrbEVLZkxwU3krRXhPc1pBdjhLSEIxUVVYRnBzQk9BTUUyOUZIdHVwRk5zS0JWRklBaUpUeVUwZTZmRGM4QVhqVEdQK3NTQkVWc3U0NHJOQVFQcXIzZnMzWmRlREtiUzNIbUljV0cvVk1TbXIwbnAxd29sYWZvZ3lHZEY5SVFBdnlsazc0c0o3MzlwUEcrMEZHTndHakpvdGlxS0F6RXBScHVOZlFxNDRiMnZIM3puL1ZOV1lvMHgzbmtWOFlwUjFFVnY0bXRTQnRPbE45R1M1S0RtcVlvblg3QzIzeWV1WkNMR0dVK1BOK2NERnlGeU51amtnUWRsaG56MEYrdWtiQjM2WXAxTWJNS2dUU2dQQTNlMUZZb1BkdGVxbEYwZnpiYkYrbnJzaXQ3Z0NwYmVLUGwvODJLZHdkUnk4YzBrSm8wRUhSaFZlOVkrTmZmSTVrTG9lMUhhamVwWndPa2dKNFBPSWcwcWR4S1VUQzRHQVlZTjFRbVVJUHdGNVFsZ3NUZnlpRlhwVWp4enp6aU8yeGM5WTFWd3pvTHhpdlZDMzZBUWYzZHByM2lONGlYektPSm9yMjduOVVJN0FYNFZUUlJ2MHVwbmtvaTFSZzhXT0FZNEdEaVNYYis4cXhkWUNTd0RWaW84VjFlL3NtaXMweFM2c29qeGVGSEZUUlBQRnJGVVZhbmV1dWNNeWVnL0FTNkhxeTlXZExGK0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRGwybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNmdnU3OG5JR2xrUFNkWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FuUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTZGhaRzlpWlRwdWN6cHRaWFJoTHljK0NqeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5YytDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwQmRIUnlhV0k5SjJoMGRIQTZMeTl1Y3k1aGRIUnlhV0oxZEdsdmJpNWpiMjB2WVdSekx6RXVNQzhuUGdvZ0lEeEJkSFJ5YVdJNlFXUnpQZ29nSUNBOGNtUm1PbE5sY1Q0S0lDQWdJRHh5WkdZNmJHa2djbVJtT25CaGNuTmxWSGx3WlQwblVtVnpiM1Z5WTJVblBnb2dJQ0FnSUR4QmRIUnlhV0k2UTNKbFlYUmxaRDR5TURJeUxUQTVMVEF5UEM5QmRIUnlhV0k2UTNKbFlYUmxaRDRLSUNBZ0lDQThRWFIwY21saU9rVjRkRWxrUG1Zd1lqWm1NbVZrTFdSak5qWXRORGhqWWkwNFpETTRMVEF6TVdNd016Z3pOR000Tnp3dlFYUjBjbWxpT2tWNGRFbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlJtSkpaRDQxTWpVeU5qVTVNVFF4TnprMU9EQThMMEYwZEhKcFlqcEdZa2xrUGdvZ0lDQWdJRHhCZEhSeWFXSTZWRzkxWTJoVWVYQmxQakk4TDBGMGRISnBZanBVYjNWamFGUjVjR1UrQ2lBZ0lDQThMM0prWmpwc2FUNEtJQ0FnUEM5eVpHWTZVMlZ4UGdvZ0lEd3ZRWFIwY21saU9rRmtjejRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZjR1JtUFNkb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQmtaaTh4TGpNdkp6NEtJQ0E4Y0dSbU9rRjFkR2h2Y2o1VVluSWdWMlZpUEM5d1pHWTZRWFYwYUc5eVBnb2dQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwNGJYQTlKMmgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhuUGdvZ0lEeDRiWEE2UTNKbFlYUnZjbFJ2YjJ3K1EyRnVkbUU4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTZHlKejgrUUFoY1FBQUFGRVpKUkVGVWVKekZuSHVjWFZXVjU3Ky92Yys1ajNxRUdFeG81UlUvUFBLQVJpQ2dkSXMwZ2lFOEVtZ1lFVDZPajlaV1BqM3ptVkdtbFdsQmJaTFlndUNnWS91WjdobnRIaC9ZL2JHaElUWUVEQVFRZVFqcWhOZVFFQjRCd2tzcGlIbFYzWHZybnJ2M21qL091YmVxU0NXcFN0MWsxcWZxVTQ5enoxNTdyN1AyV211djMxcEhkSUZLWjM0TlYyMmlOQ1BXeXpqd0VoWUQwVGxBanVZd2xiUVVqd0xtQS9PQVk0RTVRQjlRUWZRQ1lBd0JEV0FRZUJwNERGZ0hQSlUxM2RwUzJSb1lSQVBuY0dhbUNNRWx3MWhNaWMwU3paOTlhY3ByMGxSdUxwKzlsRlNpTkNScVBSRWw4dlhRQ2xXWElFRU1IQ3JIcWNBZkFhZUE1b0E1QU9rdHJHMzhHWm0xTHhCQjY4SHVBejFzeHMrZDR5VXpveDZnbXVDdDVVUGlwaEhjZG1MV1l2aG5WKzd4MnZaTU1PZGZSVytXRVZ2UVNoeXBvcXUvdWoxV0R1cW4zbXI2cWk4dEJwMFB0aGkwLzRnTURGQUFvcG01Z3IvR3pLUWpCd3d3U1JGd2dBY3J2Z1RZSm1BbGFFVTlDeXVySlJmcXQxeEVkY20vdUxvcyttQ1VuS2duSlZoeHhhU1g2Q1o3UTJuSlYrbU5EWkJCZ3NvdU9JeG96Wm93UGx6MXBZZUFud0tma0xTL1pNSE1Nak9MWmpJemMyYVdTUEtBT2tUeDNmNHp2K2JOTENudU1UTkZFNWxrUWRMK29FK0EvYlNhK29jd2ZmampyVE1CWXI4NWx6b25oOUViR3BTV2ZIWFNncG00eGx4NEE1WEdPbHFDVnF1ZkhqL296UlNjaThTb014RlhBOGRLQWlNZ016TWNrbVNHU2NnQTdhR1dHbVlDV1Q2SVlTWVJRUUx6aHNCc2pjRVZpZW5PbGd3SHZwWlVRaExxSkFhTnlueTQ4Y1BkRTB6cHZLVzRXT2cyS0JVdW1rSkVCenE0RnV3amhjMElaZ2JDWVVJeXpQSkh2MGZDMkFtWm1Va2lOejhHS0NxWHVpLzRYMjlSbDB2MnFzTjhCbEhDaElqQmFONjJkTGM4ZGp2aDZ1S3Znb3VGRVpScnFCNTdySXJCQmNEM0pHYUFvcG1ad0ZtdUlXWVNtcUp4M3gwWldGc0x6VEN3V0R3RVoyYS9CejRqdUxsR2t3b2xKNGhDQkJuRHQremFNTy9TeGxRV0w4OXRwUUhJRzhRdmJ6NEZnMitDYnBLWVlhYXNlSURlRURLc1VKRzlLaFFnRjd6eWZZVU01Um9qd3pKSk00Q2JETDc1MzhzSFlDZ2FlRFB3QWNybkx0L2QyT05UenpsTHdhdnRDSHcwZ21HOTNta0Z4a0twb3lVZWxPLy9mU0NNWFZGN2kyRW1nMUFvcndOV2g4RDV6akdrUE1ZS0FFU2p0cE50TmU1QzBzWEw4UzUzaWhnZUkwVGpBT2UwU25Bc0lpczhpMGFyODE1WjdXVEpjckhJY2dzbnFZV1JHdlpJTU03MjhMb0pMd2dtQ0ZGa0svOTZoMkYyWE15cFM2bjJkeTU1Z3lEakR4QVBDQTdMaFVLYUd6K3piaGhXNTRRcmhvbG14R2k3dVdQMzFKNmJtU0Vwd3l3MTJBQ2NiUEM3WE5NSk1xZ05HdHk3ZE95YzNqcGdwVCtmb0lHTEZrT0kxb3U0WGVJd1VGc29ObFdobUJsT0lrWmpjS2pCdHMyRGJOczh5T0JRZ3hqemE2T2kza25UaUErUW1WbUtsT1ZyNFBZUXJkZWlCY0Nab0RwdHgyV00rVS81M09XNWU4V1V4WmJGVGI5VmRlYkJxMEduSzk4K2hWQkFVOWc2Wm9iM2pzSGFNTk42Sy96Sk1iTTUrdEJaQUR5NWNZQmZQUEVpMjRZYTlQV1VDU0h1ZUh5WUhLL0N0WnVrL01HQzNYM0ljZVVQUHIrbWdaY1R4WnFHVjM2bGMxK0hZL1dzSy9HQ3VuTlVITTV5cmY0TzRqOEpqUktLVFNrdTZRaGxzTUhDRTQvZzIzOXhOdk1PbVRubU0wKzk5QWFmKzUrM3MvbzN6OUxYVittK2NMQVU0enZBWnlWenJaakcxQnJFcEV6OTM3NE01UHNNZ0dUKzZmay9sTHRsMEVkQlg1Y1V6TXlQMnE5VHNpbmVPUWJyd3l3ODRRanUrTnJIbVRtOWw3VWJCL2pITzlid3dOcU56T2l2TXYvUVdYejB0SGZ6eS9XdnNQNmxONmlVVXFaaWRVYlAzY3ljVUpRNENYaFcwaE5Pd1J0NU5OcDY1dDc4SG9EcUdjdUlxVWN1T29PSWNaaVRQU0dweDh5aUpKZEg1Rk0zdERFYXBkVHo4TGN2WWQ3Qk0vbmJuejdFNWQrL2k5cjJPZ0E5L1ZYKzIyY1c4UjhXdjRlblhucURreTc5THMwczROelVuZDZJUVNaSzVzellIazNIZ2owdmNHcGtFWmRTdi9QSzNQaGFMeWdFbk05REZ5ZTdHcWtIc3d6SjVmRktkN3hQWTdqSnFjZk1adDdCTTFtN2NZREx2MzhYelN5dzMvUmU5cHZlU3pOcjhZWHYzY0hhalFQTU8yUW1weDR6bThad3N5dUNhWWNYeUJ5bURLbmZ5Yjd1bmNONWh5VWU2eW5tV2w1eUZTM3ZVQWx2d1dLTWRqWndvZkpjVUtKMjBOUUZjaEprZ2ZtSDVJYjIxb2ZYVTl0ZXA3ZVNrb1ZJc3hYb3JaU29iYTl6eThQckFaaC82Q3pJUXNlZFQ1V0VJWk1abGdnaWNLRlpYR2dXbzByT2t6cktTNjdDZVRWSjZrYjlaUi9xRHpTUVdKNGZWTWtQcyszeHVrVm1WRXBKKzlkZGZDNy9rVHJIbEF6TURxVE9xYVh3SklDdXJ0ODVST3NWQzZvWm5neUhyeU5udm5wUW9IcHk5V0xFQXFFV21FUHFTZ0FIdVRlS1psQXU4ZWlHM3dKdzNoL05wYWUveXRCd1J1b2RwY1F6MU1qbzZhOXkzaC9QQmVEeEYzNEhsWlJvTnFXNFpqUko3U0JKVGhEQUZsUS8yUGVoNUVDQk00OWx1QkQ2V0J2ZkRFZXhCYkJMUmNldHFWc1RLVHhDcm5ZeGNOLy9mWkVOci8yZStZZk80dXBQTHFTVWVMWnVHV0xybGlGS3FlZTZTODVrL2lHemVPNjFUZHozNUVZSWtTSnoxVFhoV1A2OFZjUmtJRDQvcDI4anRTdXVERUVWVkYyeTNBUEI0QnhoS3d2MzdFQlRDdUk2RTJnTFJUQlVhN0p3d2VFcy84UnBuRFQzNE01bjFtNGM2TmlVYzArYXkxRkZzQWZ3NE5xWFdQYmpuN042emJQMDlWUTZtdE5GUmFiWVZNNU1peVZ1QS9NK25mTUJBU1pzS2VnUEpZdUZpblh0WU9pZFk2alc1Skp6VHVTR0wxM0VRVy9majVjR3RuTGpmV3VSRThlODZ3OTQvOUdIOHY2akQyWFc5RjRlZmU2MzNQYXJaNWc1dlplalp4L0F4ejU0TEJzSHR2THI5UzlUTHFkZEUwdzcwVlZrQXAxeS9ia1preEt6R0JFSENKMlZuOWh4UlRhc0s5cmlYUjc2TDF4d09QL3JjK2NDOFBWL3VZL3Jidm9sYjI0ZVpMOXBWVTQ5NWwwY1Bmc0FBSjU4OFhYdWZlSUZ0bTZyTVhOR1A1ZDk2R1F1dS9Ca3Z2LzU4M25selczYzljaHo5RlhMaERpMWFCamF4NW84RDEycy9jeGdjYWJRRzc0MDV3T0FMZ0l1a2hRRUxoZkwxQVVqaVZnY0FYNTAyYi9qb0xkUDR4czNQc0FYLys0MmdoTTlsUkxOTExMMitkOXgvNW9OM1AvWTh6ejk2aVlrUjdWU290YklXUFhnT25wN0s3enZxRU9ZYzlEYnVmNmV4enRqZDRPS1ZLaGtpa0N2azU2UzR6RlhCRTZudGRNSVJpZExQMlZ5RXZWbWl4T09QSkQzemoySWpRTmJ1T2FHK3luM1YwbTlKMFRET2RIWFYySGFqRDZtemVpanI2K0NjeUpFSTAwODVmNHExOXh3UHhzSHR2RGV1UWR4d3BFSFVtKzJ1aGZYRk5uR0luY0RjTHFYY0Zrckt3RW50ZGRTcE9HN3hSU2FMUlljL2s0QTducGtBNXUyRGxGS2ZPNjZDNHJSYUlWSUs4UXh1WmhvUmlueGJObzZ4RjJQYkFESXgycTJ1cVl4MEU3NGRWSXdKelhyVm5KU01oOTRWMmN0MWoyR0VoQWpiK3V2QXZES205dWdHU2ExcUZ5NEliOFg4ckZpN0lJRkhNMGpUMm9YZjc3TGxaaWZDSTRubDFZQTNGNUpVUmJhWVdiZ1Jlb25qdk9sM29GVFI4TzZGY2VNcGNMMDVqTHdndU1TcE1PS21EdUNKbzFNVG9SOElZZzA4YkN0eGlhQUVDZDJzM093dlU2MU9FWk1ScWlUSVFFR1VlQk5ISllBOHdwNUtkOUgzZHk3Qm9sbi9jdHZBdkNwUmNmbkorekNlTzd1Mll2Y3psUkxDWDkyeHZFQVBQbmlBS1JKMXpVbnoyUVYrOFUwUHdHYlhjakxtY202RWUyMktVU2pwN2ZDdjk2L2xyTk9QSUtQbnZadUxyL29sRDBlNzhkM1A4N05ENjZqcDZkTTZFTENmRFRsd1MrdWtNWHNCSGhiNTJLWDdjdm80OENucmx2QnlvZWY1dWpaczJpRnVFUDg2SXQ4eXc0TE5pUHhqaWRmSE9EbUI5ZDE4akpkUEJia05QWWc5alpWbHl6ZkxObjBibXRMbTBZdm9GWWJocXcxM3FTZ05wei8zbE1lUHgrUkp2VDBsSGNZczd0enhTU1RtVFlsUmY2T0FoenZPclAyZzVCRWYxOWxod1VKYUxZQ0Y1eTFBSUNiSDFoSEtmRTcyQit6SFBYYlcwSXB1QlF6c3I2RTNFV2wzUnA2UFBDc3ZaQjhtNHhkY2dpUm5rcUpmN2owVHdHNC9kZlBVR3RrSFUvMlZtcVB0VGRBdXRHVWdHcGdsYWxvUy91dzJBcVJXbjBZc2h3YUp2VlV5aVVTNzNaNjZET01VcEpmQi9Ka0ZjMnU4NWtZZFhiT1lBSzJEVFFET2ltYlNkRmJ3Yk9GQytaTkVqeFRBZksxeDJ0UHNOdDhKcmFhSXRqYm5nQ2JnZGtkN3BNWXNWdmdtWnc2ejBUam9BSDdBcVRMNjJzNnREa0J2UWgySENpYVNDWWo1MDZ1NWNRY1BKTTBiamJ1anE5OW5FVmYraEdyMStTNWxIWVd6cm5jRGRhSHM0NG5xZzluUlJxVGpuMmFDcCtKVXVHTlFsNVZxaGQ5T3VmVVB4U2NnaFJrNWlZajVoQ05ua3FKbTc1eU1UUDM2K1Z2Zi9vUUYxOTlJNnQrdVo2NzF6ekg5Kzk1bk9tOUZkNHo5eUJPT09KQXJyL25jYkpXYkpjaDVtbUoyakNmdStDUE9mczlSNUltbmkyRERlNTc3SG5LcFhUQ2ZINXd6K1BNNks5eTRwd2QrVXlVaW5BbG11RkJLeHpHaHNKSnVjblk5WW1BWjFrVytLdi9mZWRZOEt6UnhCY2VaWEN3em1VWG44STFmMzVHWjl4ci92d01McnY0RkFZSDZ6Z0o3MFNqc1M5QU9vTjI2c0ZzZ3pONGxCeDQ4c1UvSnlTZlhZSm5yVFo0bGpLMGJSUjRkc2dzYUlVeFFybjIwNHNBdVBUdmIrZlN2NzhkZ0dzL3ZXaU1jR2p0WFpET1JpSktUdzQwUHBMRUp1dDhtUmVBdzRESkZiM3NERHhyZTcwUnpnQ2tTWDRVcVRkYi9KY0xUKzRJNWIvK3c1MTgrNllIQVNpbENkZCsrZ3l1L2ZRaXNoRDV1MXQvRGJCWFFUcVoyc0lSOEVLMDFqcFhxcW9KUE53dUM4MnJhWGROZXdxZVBmSEM2NUI0cHZXVXVlcVRDd0g0d3ZkVzhZMmYvSUsrL2lwOS9WVys4Wk5mOElYdnJnSmcyY2RPbzY5U2d0VHZWWkF1QjExcDUwRWVTcE8wNmYyUnB3THNCNXpYemp2WUxqQ2x0a2QzRXMzaEpnTmJhM3pvNUtPWWMvRGI2YStXdWZlSkZ4amNWbU80a1ZHcGxyanVrak01NjhRamVlNjFUWHpwaDNmVGFHUkV3ZnFYM21ERkw1L2l1eXQvUTI5UEdiTmNHMHFsaEY4ODhTTFB2dlo3L3UyaDlUeTVjWUJXRmhqWU9qUmhQbC8rNGQwMDZrM0twU1N2VGQ1RkZKS251WE9reUdRTytKYkJZNm9zV1Fwd2dOQTZTVE02bFkvalJGbmRBOCtlS3dhTTlQVld4enpadHRBSGgrcDUza3l3OFBpOUNkS1p0WXUweld5em1jMER2YTdxa3VVdVZ5UDdKOUJISkd1WnlZOEh1STNHaVM0NTU4UU9UdlRTd0ZidVhQTWNDNDU4SjhjZDlvNHhiQjk5N3Jlc2VmWTFGcDF3T0FmUDNBK0FQN3R1QlQ5Yy9TalRleXNNRjZmdDlxVGJBaXFsQ2R1R0duem1yQlAybU04bnIxdkJEKzVZUTEvditBR2ZqV0Fud1V3SjJEK0QvajNnRXZMOWhjRlBoSDJrQ0lrN3lhenhoREpWOE93SG56K2ZWOThDbm8wbTd4eGJ0OWYzT2tqWHJwM09WZE13K0dlMXE3MzluTlB0b25ucjJGNUxuOW1XVmMrVTdCRHkybnhuak9RNjl4VjR0cS80V0Y1TnJtS3RIbmo0Y0dwL3RWeVIyNVNhU3hqa2hxZm0rWmRyMHdHK1hZRGNlU1E0eXFMdksvQnNYL0VwYXF1c2d3L0FkUnZvNFQ5YnlTZkpGcHpSZ3htaHZqV2ovdlRtbndCckRIbXdTTHU0cGkzdGZRQ2U3UXMrWmxhSWhHaDVVTGVtL3B2dC85cmFaQkJkc0ZZL0xwRFNTaE9xMDFOZm5Uc2Q0SEpHS2h5TE1wTGk1ejRBei9ZQkg4dmp6eUtXTlFQajh1cUovU1Q3TzI5SlNyQXlidmpXSzBoQ3dGb2hTTTVKYmpWd280RVR0S3pvNitqUU9PQlpNc0h2U1lGbmU0bFBvU3dTdEhKVWdCdHhialhPTzBJV3NCYkR0MTVCQXFCbWhCQ0pMdmNPQnBjNzdKeWljak1xYi9BMFFQc0tQTnRMZk5yOUJSRXB4V3d3UnI2WXQxMkM4N21tQWJsZzZxdVdVbDI4Rk9jNmg4a05adndGMkkrS0haVlh0Q2JlMXIvOHBtRHZnV2Q3RWFReks1b3lSNnJvZElselBBOTRrd1hEVTE5MVpXY2NBS3JuL1ExT1JwWkZFaTluWmhINEg2RC9LSkdSSjh5dEZTTC8rSmQvcW8rZTl1N2RUSEhYOU9PN0grZFQzMXlSYThRNFZQQ2hTM3lzNENQSWV5S0E3emp4V1VPdW1jV1lsajBNdDZqL2JCbnREM2FvZk02eVBMVm9wdENTWmF1MlVsMHk3UzdFNlJpWnBEVEVhREVhRjd4dnZuWUdudTJVeGdIUHZITmp3dlgyN3lIbTN1YUM5ODNmS1VnM1FUNVc4SkdaWlJLcEdYZGVjK3JCaXo2N2VpUGx4S2w5dm02c3ZMSXp4QTZjcXVjdWF4L1puVVdMUWRhYnlOMHY2Ymg4WUtXQUZlRFpucVhqZHdPZVRRaWtteGdmSy9pTUZzb2FvcjAvUXQwNTVTMENRT1BXSzhmY21yeDFyUG8ybzlvbkVGRk8zcU1oNEd3enUxOXdlRnM0QlhpMlJ5amQ3c0N6M1lGMEUyZGpLdmhra2xJemV6YWFuU1dudW9wR0xvREc5aDB0MTdnY082MS9CZ1plUmdqWUFWNjZYZWo0VHV0Zk80VnM2bHFGNTVTcDNaOWQ0UFFhYWYxYkU0eXpuUmdRK0tLWmxzekdiLzBiMTE5bUsvOGFGL0pqcE10Zk9lQWRlajBFVGpGc3RiVjdsN0NnNHJScHRxdWdaTitRRlVaQXVmY0poVWROVGJhNmhaM2lHQkZLNGI3R0ZRcnNvcjI0ZHR0U290clpVQVdFbDlmUTFlVzNuUUY4S3k4QmxiZGNlK2kwbjl0a2tvcGRvcHh4M2lPYVp3WXlDVytHQTc3MTJTMEx6bkJRUThYMnlSL3BUanRvWVFMMm9YenVNbnllRThYQU5XakdIa3FqR3RJMWcvd2xGditmR3RMekxKT05hVWczWjhaSVE3cnFWS3pxaEJVTjZXTDRsdkUxcFUzakJ4R2pLRHg5THpyaVQ1QVRKak9QbHdkdmFKMlovZ25aVEl4akpUbWtUa3Qva2F0b0c5R3VDcWlkWmRRSWZCaVZONFQ0L1Bsd3ZhRVBDWDd0WkY2V1FMSE5nb1BtYnJyMFlUSlBkUFJMTDN5Vm5sYkRSeU1rRWdIN29PQWFFOGNYTmpnVTI4cTF0Y2FLaGV3eDR0N1d3dmI1Qnl6UHBTREFGeVp1RGZERkJPN0tJSC9wUmVnTFNiSjk3N3owWWpTVmxueVZWQm1ZaURoNXBJREYrdjk1aHVvSmN6NE0vQ1hZZTlzYnlTQmdSREEvd20rVVA5dHAwcjFUeEdPajZsYnl5a3JKcVhpZlRDR25YNEcrK2ZGYmZuWEREODk5RHdtNEFPWVVEUmxaVEduZStwWHgySFJQTUFDY2Z4WFZWcE9NU010NXFoSGZmS01XU3JONmVFZFp2TmF3eFlJTGdVV0NBeGliV3c5Z3NUQ002bHhvWDI2YjdzS3NTWjFxMHBGdG4yK2hBV0NWd1kwSDdwZXVmRzFiUnYzK0t0V1Q2Nzd1Q0VuTFNBWDFkTTllckRPbHZWOWR2QXdUV012aFhBU1B2L0tkbThLeVYvZEhpQmpqREVsbklENEFlaC9ZSFBLYW5CMmoreEdCalB6ZHlhNFpRSXY4blZVUFl2emN6TzUwWHI4M2crdFBuODdIN3RuaUxYTWhORk5jSmVEVW9yNXk5N1prWjlRVm8xZzY2MnVrNVFZOTczaU43YThjaWpBdlpESEc2RndPNEErM3pLZWV1Y0FDMEZ5d1hiKzhTMnpIV0E4OEFhd0gxbVFockMrblNiQ1lWMUE1TDVmbml3alQ1djZPb1EyenlHb2xtcXVtL3ZLdS93ZlJydzV4WnZ2djJBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvMy01ZTI5NzU1ZTcwMTBhN2IwYzA4ODJkZjE2ZmZmYjM5NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvNC1iNWNlOTkwZTk5YTEwMmJkYWJjY2EzNDQ2YmZmMGFmNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJHQ0FZQUFBQnhMdUtFQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQURsMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTZnZ1NzhuSUdsa1BTZFhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRblB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU2RoWkc5aVpUcHVjenB0WlhSaEx5YytDanh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBuYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeWMrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cEJkSFJ5YVdJOUoyaDBkSEE2THk5dWN5NWhkSFJ5YVdKMWRHbHZiaTVqYjIwdllXUnpMekV1TUM4blBnb2dJRHhCZEhSeWFXSTZRV1J6UGdvZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUR4eVpHWTZiR2tnY21SbU9uQmhjbk5sVkhsd1pUMG5VbVZ6YjNWeVkyVW5QZ29nSUNBZ0lEeEJkSFJ5YVdJNlEzSmxZWFJsWkQ0eU1ESXlMVEE1TFRBeVBDOUJkSFJ5YVdJNlEzSmxZWFJsWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1Y0ZEVsa1BqSTVPR00wTURNNUxUTXhPVE10TkRReU5DMWlNREkzTFRRME1URXdZbVJsTkRZM1lUd3ZRWFIwY21saU9rVjRkRWxrUGdvZ0lDQWdJRHhCZEhSeWFXSTZSbUpKWkQ0MU1qVXlOalU1TVRReE56azFPREE4TDBGMGRISnBZanBHWWtsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Vkc5MVkyaFVlWEJsUGpJOEwwRjBkSEpwWWpwVWIzVmphRlI1Y0dVK0NpQWdJQ0E4TDNKa1pqcHNhVDRLSUNBZ1BDOXlaR1k2VTJWeFBnb2dJRHd2UVhSMGNtbGlPa0ZrY3o0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb0tJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU2NuQ2lBZ2VHMXNibk02Y0dSbVBTZG9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JrWmk4eExqTXZKejRLSUNBOGNHUm1Pa0YxZEdodmNqNVVZbklnVjJWaVBDOXdaR1k2UVhWMGFHOXlQZ29nUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cDRiWEE5SjJoMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4blBnb2dJRHg0YlhBNlEzSmxZWFJ2Y2xSdmIydytRMkZ1ZG1FOEwzaHRjRHBEY21WaGRHOXlWRzl2YkQ0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnbzhMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU2R5Sno4K2YyTlBJd0FBR3JsSlJFRlVlSnpObkhtY1ZjVzE3NytyYXU4ejlnQU55bVFFUllOREhMa3FqbEZqeEFFMWNvTkd3TndrNytVWjg1SjdZMkpNMU53NEppWW1VWlA0RXNoZ0VxZW9PS0FvcU9BOG9nS09DQTRnQ3RMTVRYZWY3dFBuN0tyMS90ajduTzZHaG1iTWUrdno2US9kN0tHcWZyVnExVnEvdFdvTE8wQXlFeWNoYXZBcUNBNHJXQkdqa1ZkdkRRaEMwZnRNV3RnZjJBL1lWK0JnaFJGQURaQkJ5QU9nRklBaTBDcXdVT0YxWUw3Q3V4Mk9kekloUlZUd3FnUkdqUGNxVHNXcGN4Z3JxREVVYjc5Z3U4Y2syL053WnVLZkNNUVJpS2ZEQlJqVUZrcTRmQXBFREpIWG9WWTRIdlJJaE9OUUdRRWFRN1ZoeTlwemoxUXJGL0FnQ3dSOVZ1RmxoendWR0Q1V3J4VEtsbnpvcklJTHBVeWtGaStXOXUwQWFOdUErZXJOMUpRRHZCUEs0a2dGeGhTODgzbGpLVVJpODRHT0FjNEdHUVAwNndSQkFYR0FWMVdUdEMvZGVsTEZBUVZVUkR4Z0FKczhIOStpckFGOUdIaWdVTFlQNTBQbkNxOU5KLzl2cDVsaTVIM2FDeVkwdEFabHVQVTdXejNFclFZbVAzNHlZaVB3Z3FxUndJcEVYbjFCQXNsck5BNjRHT0V3Tk5FS1ZhZmdFU3dxVWhtNWlJaUN5aWI2VUxtbVhWUUdSRUdkZ0VIRWFvSVF5S3Vndno1ajVBWDNUSnN6bWNDSWlad3FvaXFpcUxjVTd0dzY3ZGx5WU1iZFF5NjFCcTlLc2MyUXoyUFY0NExBRUhrOVJkRHJnSU1sVmc4SHFxb1lSRVJRVkt2TFoxdVhyNnJHRDZzb0tDcUNCeEhRQkNUbUtGd1dHSGs4aWhReDJFSmtYQ2FJTUJqYVNnMHc1Wnd0YW15TE9sa3pZUklxa0RRdTFtQ2NWNmZLRUNOeVBUQytBa2d5d1FaQVJGRFZHSnNkS0txcWxYY253L0JKQ3piNXY5dlVjeW1HWlZhd1R0V0RxQUJpbE5iYkx1eTFqVjQ3bkowd3FXb0lGRXpabDMzR3BuQmV4NHJ3WnhFYVFIeWk4a1lRSWVtenlQWVo5OTVFWTYyQnppWG40MGxRbzhwYWhXOWE1UDUyMzA3YVpBeXhBY0NMb2EwWHcydzJkekUzWVJLMmMzUldVWi94V2J6cURTTGNKeUlOcWxLT0oxQXNnTWEyVVhZMktGQUZQbDVZY2FOV1ZVVlZ5aUxTSUhDZmh4dnFjaU1COWZFWTRvZHk0eWR0L3QyYnVwQTcvNDlZSDQ5U3dhcmlJdlg1MEpnSFJPU0x4RHVMU214VVZkbnhTMlpycGJMRWlEdmtSRVNTM1c4bXhwK3RYZ29pWWdXY0tEaWp0RzFpV2ZVNGtQeFhKcFBNUHdvV2NGNFpZSVJIUlRnWXBLeXFRUUxFSmp5UWY1MGtkaXorUGVtMFNMeThCSWtRUWxXZDY1VFRqTEJDd0FvNEVOUkI0YTZObDlYR2d6bitTbkpEQmxhWEQ0cFQwWUdDUEMvSWNJU3lxb2JHQ0Zha3NsSDhQeE1obmpYZkJSeW9hbytvS29LVWdWRFJEMVgxR0VFYUVTeUlVNEcycGN2aDZTdTd2VGZZc0tIOGJvTXExdDZvcWhOTVhvVHBBc01oQnNVYW8rMmxpSEo3S2Q2REJhcXVyTmNOWDduekpMSHdtVnlLVkdCd3ZoT2MyRStxN2w2aGlKUUZoaU15SFMvSGV0V0NFVFVnUHIvYklBb2J2THJiYkdmRy93RkVNQ0JScEZwYTBDajV6dzJlS1NKZlVLVU1HbG9qMnR4ZTVzQ2gvV1Rpc1NOb3FFbWpRRnRIaERWQ1ByMFIxanNlajZUalhtSHh5bWIrOGZRQ1BsMVhJSmNPOEw1SHpVRlZCYVFzUXFqS0V5TU8wcFBlbW1jSWpZcEhGUFVVNy96V3hzQmtKL3lKckExb0xoWElCUm5qMVh0RmZ3OThSNFF5RUJvUmJTMUduUGk1SVRMOThqTUlyZUdOajFiVHZ5N0RrSVlhQU9ZdVdyWEJtM2U4eEtBb2dURWNOS3cvcTF2YU9mbWFoM2hyeVJweTZhQ2I1bXdJamdobFZRbEJmeS9JZnhvUlV5aEh2aTRUVWl5V2FMLzdmM2Z2ZnMyRXlSZ3hlUFVXY0lwT0JMbE5CS2VxUmtURUo3KzhjK041cU1LSlYwM2w0MVV0SUhEcDJTTzUrdHdqK01KVkQvTGt2STlJWjFNNDNYbkxTaEFpNS9uczRENDhmKzFZRml4cjR2Z3JIaUNiNmxsanU5Z2NGUkd2cUVWbGdnaDNBdFlJem5rbzNCRWJZZ09RUGY4UGVBdE9uVkhVZWRYaHdHUVJFcFJqcjZrY2VSbFluMlAzL3JWYzk4QWNGaTFaUTIwMmhSWERMNmZPcGFXOXpObUg3d0VLMlhSQUp1ejh5WVlCMlZUMy85dWVuM1JvcWMrbldQamhTcTY5OXpXTzJXY1FReHJ5bENMWG83TEdvRkFCSjNHQmRKTDN1cWYzNmlLdnh1SEpuditIVG1DTVQ2RWVqSUFSUlVTdUV5R25xbVZCak1iQmdNUU5RTEVjc1hKOU81SUpZNVcyUWlZTWFDbVcyS1V1QzZIRis4NU9HUkVpN3ltV0hKVjNiQ2htRzVhZUtwQU9pQktEMzc4MmkvT2IzaWVyVzdoZ1ZMVXNJclVpL01JR2dyVUduRWQ4R1BjbmU5NWtOTEpZeFhvVjc5V2NCb3dqNWo4Q1JUV09Ncm9QTk5HbWFnY1Z4V3pDdnl0MGxLbkxwaGcrb0k2eTg1UWpuenhYaWJTaHJlU0luSThIMXVWYXIrSTdnVmEwZDlNbW9DcEt2Q043WUp4eitrWG4xRnNiMk1nSFpNK2JqTEdCb0VHSjFySnpCVWtCZW5WQ0RxaWdsWGk0OS9tc1VnQ2QveGdSMmpyS2pCazVqQTl1UHA5M2Z6dUIreTgrbGJwY3FycDdXQ08wdEhidzFlTkc4TUsxWTJtb1NSTTUzODE0YmxuYld5YkpsTkxGM2lCd1hWdG9LYWgzeHBTd0ZveG9HU05xODZFaHA2V3ZJRElTTkVMRnFJaHUxczJ2QkN0U21UV3B0STRJUk42VHo0VDg2WUxqbWI5MExkLzk2N09jZHVoUXZuN0N2clFWT3NpRWx2WE43WXc3Wm0vKyt1MFRXZGxjWkYyaEE3c3Q2NnJTOEpiYzFSbWFHOEFCSS9QbDZNdjVPTDZ4NGtzWTV5M24vUDRjMS9jejlRajZ2WmhiUWhBVjJjeE1PSzhRK1hocE9FL1phUmZDSkw1SGt5MjFvU2JEb2hYTlBQbjJVZ0Rxc2lrd3dwcldJbDg0WkNqM2ZQOFVYbjZ2a1hHL21ZRnpIbU5reTVmU05rcGlmcVZMT1BHRGZnY080NWUzWCtDY0JoZ1I3RDNmdVlkMW42dy9IVGlDR0VFajhZTGRlQW9FbkZQU29TV1REYW5KZFA2WUNrR1hjRGVodGF4djYrQ2l2ei9QVjQ3ZW0zZHVITThiSDYzbTcwKzlDMTQ1ZnY4aHpQcnBXYno2d1FwTy9mazBuRmZTNGNaTzJzNFFvVHIxaHRqV2pGcno1a2VuLzJqaVpNU0lEUVJSamRWa2ZETGRDdElqNTFnSkdiUHBnTHN2R3Qxamc4V3lxMXBEcjBvMkZUQnA1dHU4dUxDUnovU3Y0WlVQVnJCOFpUTUg3ejJRUnk4L2c4VXJtem5yK3VrMHRYYVFDaTNXYUZlQ2E2Y0JBNUJ3QXNTVWhCamdQT0FSUUFNZjkzK0FFVGsxb1NCTkRHVDNYaWtRV01PcTVuWXUrdnZ6N05hUUovS2E3RTd4OVl2UE9KakFtaXJWQnpFeGswMEZ2TGxrTlc4c1dZMXpuZ1AzR3NBTDE0NmxzYW1ONDM3NkFNdFh0N0wvMFA1a1VwYTNQMW1MRWJERzdIeHdLc2Ftc3FHcW5xTEtMc0NxUU9LRmRqcEtYeEFub3FZTFA5c0pUUEowMlhsdWVuQWVPTitwVWw3QkdpWWUrMWxDYXpiYUpieFhhck1wQ2gxbGhqVFU4ZGhQemtRVlRyN21JWlkycnVmS0NhTzRZdHpoQU56MjdFSytPZWtwYkFMcXpwWTRoRktKV1FUNkFXTVEvaFlZQWErY1dNRk9Oa0UzZFZYditycE1GVGhCY0Y2eFJnaXM2VFRBMVliamE4M3RKUWIxemZQTVZWK2lQcHZpcUovY3g4S1AxM0RBOEYyNVl0emgvUEd4dDNsdmVSTTNmdTBZcHIyMm1Da3Zma0JkTG8zZnlVWTRkdnFxV1FrVXZpQWlmd3U4OHlsRVJpWDNtVzU4ZmcvZ0FGVW5MQms2M3NkUDllUlFWTFNzZjIyR1J5NGR3N0JkNnhoMTJiMjh2bmdWbVd5cTZ2R3VhbTVuNWZwMkFOS0JqYmZHbmwrNXd5VnhhVXhpWTBkcFVWSUJtUDJBUGFoU3RUdFdqQkhhVzB2OC9MeFJIRGkwSHlkZE5aWFo3elhTcHlhTmM4cjhwZXU0ZWNhYi9IVGNZUUE4OXZySFBQamFZdkxaMUFZVHNQTkVxZGhVQldRUFF0MHZRUFJRd01RWlFqVTlSekxiTHM0cjZVeUtXNTU2bDl1ZmU0ODVpMVpSbDB0VGptTHZOZ3dNUDdqMUJhYTg5QUcxMlJUUHZ2c3A1Y2hYbCtXL3dzNElNYW1WWUdBUkRnbUE0WWxUNXBITlp3MjJWVktoWWVHblRhaENmUzdWalMreEl0akE4dnlDUnJ3cU5abVFNREFKT2JmcGJWczc0OW9kSmdwZXdDb01ENEI5QllrVGU1Vm9mRWMxUXp3QTd5RzBCaEdwQnBEZFJDQ1hNSDllTlhhM3FJUWFuVjV3QlNBamdqRkpSR3lsR2tKc1Q5Y3JkRVRpZit3WEFNT1NhMFpsMDRaM3F5VE84dUM4UjRqdFRFVk1MM0dRcVhESVFPUTgxblFDWWswTWJLRlVSaXVPWkhNN1RXMGxJQWJWR2tFUXZHNWRJS3Fkc1JQQXNBRG9XN200UTBDSlgwVFplUWIxelRIajhqUFlwVFpEZVNzaVp1ZVZQdmtVZjVvNW40disvaHgxMlJSbDUxbmYwa0Z0UHMxSkIzNkdrWHZ1d3VDR1BLM0ZNZ2NON1Y5OXRxUFFRYXJlWW94c1ZXaFJpYmFUUC9zR1FKL080ZXc0c1VZb0ZNdjg4L24zNkpOTHgxN3lGajdyVmNtbEExNVlzSnhVWUducmlBZ0R3eVZqUi9MRE13K2hmMTBXZ0piMkVxRTFaQkk2ODlITHorQm45OC9oTDdQZXdhbVNDWU5ZYTdkOHZpczMxZ2FRVkRMdFNORjRTYlFVeTF4NTUyendmaXRnVDJJTXI1aHNpQ0RzTmFpZUtUODRoUU4yNzhlTWVVdjQyMU1MZU9tOVJnckZNZ3IweWFVNGNzUkEvdVB6Ky9DN2J4ekx4T00reXprM1BNYlNOYTNrMCtIV2dnTlFFeEJIMCtGV0RyMzM0VlVZUGl2WVZNaVdPTEFpNEp3bmt3cW95WVEwdDVmWWUxQWZYcmgyTENDY2RQV0RQUEhHSndCazBnSEZqZ2l4UWtmWjhjOW4zK09menk3a2pNUDI1TDZMVCtXNWE4Wnk3SC9mei9KMUJkS2gzZXFJUFFEYWdNdzJqWDZUSTR6dFJGMDJ4YS9PUDVvQmZiSkVrZS9WUlJJZzhzck5NOTdrbFE5VzBDZWZadW9scDZFS2gxNXlGNHVYcjZlK05vTTF3cnJXRG40MGRpU2ZyRzdsem1jVzBLOVBqc2g1cHMxZXhDR1gzTTNjNjgvaG51K1A1dmdySHFpQ3NoVitVV3NBTkFNTmRPYXhkb2g0citUU0ljZnZQNFFCOWRsZWphOXE3SDltUXNzRHJ5ekN2L0V4UC9qS0VldzFzSjdQWC9FQWl4dlgwN2N1aS9PZWRhMGxSZ3p1dzgvSGoyTEJzblU4OSs2bkxHOHFrRXNGOUszUDhzN2lWWng5L1F3ZXVXd00zemh4WC83UEkyOVNYNXZCOWVBcGJOaU5CSU9XQUZoSHNtVlhjaS9iallwQ0dCZ2Ftd29jY2VrVXdzRDJ5c2hWd2lMbmxZNnlvOSt1ZGZ6bnFRZHkxd3Z2OCt4YlM1T0JLYTNGaU9QMkc4ejB5OGJRVVhhTUdOeUgyZGQ5bVpPdmZZaUZ5NXJJcEtDK0xzdjBPWXQ1L0kyUHVlU3NRN25seVhkNzVaRzErMkpmWjRDUGtqLzhqaXpqME1RQUZ6b2ltbHJhV2QvYXNkbWZwdFlpTGUwbFJLQWNPVDYvL3hCcXNpbHVlMlpodDl5S2p4emZIbjBBcGNnejlNSmJPZVNIZHpPb2I1NnpEOStUY25zSjIyVUkvM2g2QWJ2M3IrV1FQWGFodmVRMm02S1J1QVNwb2xNZkJjQjhWTThtM3NaM2pNWklISmlGMW5ES3didVRUd2U0elpSRnFDcGhZUGw0ZFF2emw2NkZzdU9RWWJGdk1uZnhLaktwN25SbjVEMlpsR1d2Z1hXODl1RXFUdjNaTkphdWFTV1Y2d3c4MDZtQUZ4YzJBbkR3c1A2OE9QOVRSRUkydFF1b3FFcFM1d084R3dBZkpndkw3TWhZdGh4NUJ2V3Y1Yzd2blV6ZmZEcUpqM3ErMS9rWXhPbHpsekR1aGtmQkdnWTMxTEM2cFVoYlJ4a2pVaTFrdGFIbCtxbHpHWDNRN3J6NHN5L1RWT2pnbDFQbjh0UTd5MGdGdHJOWVIySU95SHRsWUo5Y25FemJYSWZqQmt6eWdnOERWT1loZUZBTG9teUtCTjlLU1FXR1Q5Y1ZPTzYvNzQrckVIcEIzWWl3WW4xYkhQZDRwVkFzVTVzSjQ5MEVEd2tobGdrdHFjRHk1ZDg4eWtGRCt6Rm01REN1bTNBa2tmUDhldXJjcWkyQ21CNFZnZmFTMit5T0dLdUprR0RnVWVZR2xHVStLYjhZWkhpY3FkNEJOWVZKckFUSy9LVnI4VnZJcTRTQkpaK0pYYXBsYTJQL1k5ZjZMQit0YkNHMEVDWGRuL2JqMDVueCtoSytmdm45L1BiZTExajB0Ly9CMGZzTTR0ZFViQnVVSXM5bkI5VWpJaXhkMHdwV05zbDVKYVNESnQ3WFl0RDVnYVMxcE1yTG9NTUJMMHF3M2ZxU1BLK3E5S3ZOWUUzdmJJWVFaeGdpNTdIcGdDZmZpWE5RcHg4NmpKc2Vta2MrRXhBQXplMWxac3hid3RkTzJKZVduNXlCTmNJZXU5YngreGx2VWhtYWlPQkxFYU1QSGdvUWh4YUpuZXBKTkM3TWRzUzgxRXRpcFJRazIrZ1Rxa3lvVkFSVWF0aTJCNXV5Y3d4cHFPR0ZhOGV5YTMxdWkyek0xRmNXY2U2Tmo1RkxCYnl4ZURWekY2M2lvakVIOGFkWjcxQ0tQSUV4WkVMTGorOTRpVnc2NEx1bkhnakFiNmE5emwrZmVKZDhQb1ZxRFBDQS9qWDgxK2tIOHNqY2oxaTBZbjJjRnU0QmwxaFRxaW5iR0FzUFFYTHZkQU5yZ1lZS2Z0dnI2d1hHc0xhMXlLVjN2RXhkbFp6cStWN1ZPSUczWUZsVGxXc3BSWTZmM0RXYjZaZU40ZHF2SE1IMy8vSXN0WFVaTWlsTFUxdUpjMjk0alAxMmErQzFSYXU0ZU5KVDFEVGtDYTBoOGtwSHNjeHZManlCdW15S2ErNTlyVXAxOU9UNXhxRkxZbDlFMW5sbGhnQ0J4SW1tRllvK2lqSStMaFFTdTRtYzI1Wkp3cjRWeTQ1YlpyMnp5UzJ5Uy9maWh3SkxUU1lrY3A2NlhJcEg1eTNoMXcvTjQrSXpENkdwVU9McXUyZGp3L2llbERXY2Q5UGpsQ0pIWGI4YVJHQjlld24xeWczZk9KWUp4NDdnaXJ0ZllmYkNSdXJ5NlUwRmtwcUE1VlFKUUdjWWtSVUNKa2l5QmloeWw2RGpLNlJ3RHptM0xaZmtNU05DZmUyV2gyR3FXdDFSZkpMeC9NbGRzK2xYbStHcWN3L25zTDEyNWZJN1grYnRUOWJpeXhGdnIyK0xHN05DbUE0NWJQaXVYRC94S0Q2Ly94QnVldVFOcnJudlZXcHpxWTBxT3J1MmwweEtraUhnem5oaElRR0tHM0xtNTFqMStwSnBwVTlhWGdaR0FRN0JKcm1XN1ZwVHp1dEdLdHl0TG5jRDJySXJsV2tsMXVkdi9PRkozbHl5aGwrZGZ4UmpSZzdqcFlYTGVXYitweXhmMTRZUyt5bWo5aDdJaVFmc0JzQkZmMytPMzAxL2kxekMwL1MwaExwVVZ6a1FDL3B5MzBHbFI0NzZjbjhlL2wyTEMxS0JZZG0wdCtPYVYrUzNLS09TZFJkWHYyK0wxaVNQVmZZaVQyZGtXL20zYThLdWExS3RjdDEwMGJyYVRNaE5ENy9PL2JNLzVHc243TXUvSDdFblB6NTc1RWJOM3Zic1FuNTYxMncrV3RGTWJTNkZ3aWExcGJKRmQ1bUkzNnhibnVhUm01dXR0VmtYbEQxNHhMVmp3S2J2eXZ2Mmk0R1JvSTY0Tm44cndvUmsxaE51dHIwY0lVQk5KdXdHamhFb2RFUjRWVktCSlIxWVhGS2Jaa3pzeUJVNkl0Q1lKRGRHcU11bGFXeHE0K3E3WCtHYUthK1NTUVVNN3B2REdPRzBRNFp5MDllUDVaWW41L1BScDAwMDlNMVJpdnptTWd5SnU2WU94UUp6Q3ZuVXZiUVZ5YWh4SW1XTWM0cVVBdko0bTNmdHFPcWxsWk1qbGNCQmU3ZWVsUWJqZkZCYmlTSDk4anowbzlNNTkraTlhVzRweHJ0Tjh0UGNVdVM4WS9abTJvOU9aM0RmUE0xdEhRVFdZSTJoVlBaNHIwejY1dkZjYzk0UkZEcWllRG1pNU5NaEdHSGtucnN3NVFlajJYTkFQZSsvK1VtMUJxOCtsMFpTbHNoMVg1N2RPeGtYT0ZReXJvbDNjbW0rVUNhdjF2cFNnSXNjUWZzL0x5QS8vczg0Rjdrd0RBMGlNNzN6VTBER2daWkZKSXhOZCsvQVdHTlkzMVppajJIOWVPcUtMekdrWHcxalJnNGptd3E0WmRaOGFuTXBtdHM2K0orakQrRFAzem9CZ1AxMzc4ZVp2M2lZdHo1ZVN6Wmx5YVFzLy9qT1NaeDEyQjRBTk9UVGZQZVc1OGlFbG5WdFJZNGNNWkJITGgxRDM1b01weDg2akpOVWFhNWtDYnlpdlhqWktwb1V4bWdaTkFTWllrVm5BaVpDWFJCNjJ1NjhJRFlEUG9qQXh2U2ZjeDZGUzFXMUxRSEZiOENnOXlnaVFsdXB6UDZmYWVDNWEyS243cVNySCtUMlp4Znkxd3RQNUpLekQ2V2x0Y2dQenpxVVAzL3JCR2E5K1FsSFhYNGZtZER5NmkvR2NlaWV1MkNOWWZwbFl6anJzRDM0M3QrZVkrSnZaM0xoNkFPNDcrSlRhZXVJK0dJU09BYldjTUtWRHpEbHBRK1k5ZE96T1Bmb3ZZRGVVek9WSmFTaVhwQlFsVmFGSHp0TjhsbldvVUZjV1JvQXROOTZJZmtKazdHbzk3R0YvbENSYnlsNnEzU2hJelpuYjZ3Uk9zcWVJL1lld01yMTdZeTY3RjdtdnQvSTArOHNvN205eEM4bkhzV1ovN1lIUis4emlLbXZMT0tyTjgraXBhWElrWmZkeTVOWGZva1hyaG5MZ2srYk9IaFlmNzc5NTJmNDQrTnZnL09Vbk9PZTc1L0N2RitkeStkMjc4ZnE1cmdLZk43N0szaHhZU09ybXR2NTl1Z0Rrc25aRENoMEc0TW1OdUovR1dFUnhFZDFpQ3lGTytLeWVWdDVNTmp2Vk5MR1VGRFZsQmdEdkFIc0Nod2hRcVNLN2JLcmJOU0Z5Q3ZuSHJVWGhZNHlKMTQ1bFhlWHJhTnZiUllSbVBycUlvd0k1MzkrQkg5NVlqNWYvOE1UcUVKdFBzM3Fsblp1ZlhvQngrMDNtTVAzSHNERTM4M2tsc2ZmcHI0MlF6WVRNbmRoSXkrODM4aC9uWDRRNzMzYXhJbFhQY2lDWmV0b3FNL2lGUjU4ZFRHaE5SdzVZaUMzUGJPUUQxWTBrdzQ3NlllcXBraWxaRjRpVlEyQTM0dklyNHlJYWZObG54RkRoQ0Y2YTFvTWN0ZkJaU1pPQmdTakttVkZ5NCtWeVo4U3pCS1JMNkNVRlEwcnEycERjSnhYK3ViVEZNc1J6ZTBsY3FrNGJXRWszbzZMWmNlUXZubVdON1VSV0NHMEpxbXJNUlRMRWVuQVVwdE5zV0o5Ry9sMFhGaGRNZVl0N1dWMnFjdlFFWGtLeFRMWlZMRFJ1M2ZyVjBOVG9XTWpDbE9UNDRFSktQSHhITlhIQjMzeitOR2YvSEVXMWxyeGdncEMreDA5SExLb1NIN2k1Sml6VVRWZThVWk5IdXVmRXppRStBQlhXSWsxaFdyZ2hVaGMyMjlFc0ZZMll1WkZvRlIycElKWVNYMFh2NmFTTll5OGtnNE1YdW5tOTFnamxLTGUzdTBKckhUNy93MDBwWXhxcURESFlZNFZkZTBpWWdUMWlLR3d3Um5KamZpQXd0TGxsVis5RVN6aUM2aWVwc29IcW9RaXlSbEl1aFFRSjUwSnJOa29OVnE1cGtxVllldnFkSWwwM3AreTNVR3Bka1RaZ25lYkRVRHBjbTVBcEl3U0tyeXYrRk90K25ZaldFazQzaTVqM2pRd1BIMGxFbEVoOFpMUVFCbzlIQU02RndnbDFoeXQwQlFLMm5VZ0cwZXdpZnUvRGRjM2RlK21udTNrcml2bkJtSXRWM1NPd2pFZ3F5cW4yK0lFbU5ub2RGdlB3QkNmRWZTbXlwRTZBV3ZRRlJoL25Lck83R0pybkNUMGVtL2IrYjlDVk9OVEFna29UdUx5MHhDWUdYbC9ITXJLT0M3Q2dhTEc5M2dlRWpaenZManR0Z3NyWjNhSlh5UVdMNFYwWnYrVFFXN1UrT2lTVFk0WFY2c0Y5RjlTTmRkZDR0V1hhSEM4TVpmanZxbFIxUnRORkp4c2pMU0p4QWRmNHhrM216eEJDMXNRT2VjbVRzYW9yNXpyTUIyKzZMTW1pMFBIQ3YrZkhFaFhrbEt4RFE2a0s5KzBSdTR2dWhLaENRMkpIeWVpdE4yeCtkUDZ2Wkt4YmJkZlVMMUx3YWRNV2hDMXdQM3FPVkNWMnlyYUl5SmU0eE54Q2F1anlzN1JJSzNXaWNaY3JCTVIzNmtsM09aVkQwVDBma1J0YUVJQnZNVFVUYStnd05ad0xlUHVJWmRhaThkVGpBTHlnVTgrZWlGRVhrOFMrQ1Z3YU15S2lrdWNIUU1WOXFLU0c5bzJMZEpLSFc2MWpsZ1VWWjlvYU9XYkRuT0FIeHRqWnZuSWdSRmJLT0F5dVhpcmJ5djEyN0VmdmVncStmR1RFZVBpK1ZJUm0zd21wVTNieVV2MkhKRHZpK2dSMVRxWHl2ZGk0dSsvVk52ckxjVG9Hb1owNmEySzRrQk13dEZXN3AwTjNIQlc0ejczVEIyNEFHdU04YzZyaUZlTW9pN1lpWjlKNlNwZnZabWFLSVFPVDFFOHFiUzFiVDV5ZVJOUVp6ek4zb3dCeGlFeUduUkFaME1WUTk3N2gzVVNXTHQvV0tlaU52Rk5LMUVlQmFiVXB6TVByKzhvVW5DdDVHeU45YVd5eTNpRFMxdGFndWhmODJHZHJsSXpZUktSU1R4QkIwYlZucnhyaDN0OFZSb1J3U2tOUnZWazRBU1FvMEZIa0FTdUd5bEsxWW5wL0xPNmRHS0pFQmFpdkFBODVZMDhibFhXS3A3eEp4M0duVE5mdFNvNFo4RjR4WHFodFl1THY3V3lRM2FOek1USlpIQTBGSnRvVERjZ2dqVWlHaW5lSk5uUEtCSnJqZTRqTUJMWUJ6aVl6WCs4cXdWWUFMd0pMRkNZVTFLL0lHT3NxK1NSTFdJOFhsUnhnOFd6V2l4RlZZcTNienNnRmZtL1orY21WNTZEU1E0QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRVkybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNmdnU3OG5JR2xrUFNkWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FuUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTZGhaRzlpWlRwdWN6cHRaWFJoTHljK0NqeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5YytDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwQmRIUnlhV0k5SjJoMGRIQTZMeTl1Y3k1aGRIUnlhV0oxZEdsdmJpNWpiMjB2WVdSekx6RXVNQzhuUGdvZ0lEeEJkSFJ5YVdJNlFXUnpQZ29nSUNBOGNtUm1PbE5sY1Q0S0lDQWdJRHh5WkdZNmJHa2djbVJtT25CaGNuTmxWSGx3WlQwblVtVnpiM1Z5WTJVblBnb2dJQ0FnSUR4QmRIUnlhV0k2UTNKbFlYUmxaRDR5TURJeUxUQTVMVEF5UEM5QmRIUnlhV0k2UTNKbFlYUmxaRDRLSUNBZ0lDQThRWFIwY21saU9rVjRkRWxrUGpOaE5qQXhZMlZsTFRBNE5UVXRORGxqTnkxaVpUZzRMV0psTXprNVpETTBaV1JqTUR3dlFYUjBjbWxpT2tWNGRFbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlJtSkpaRDQxTWpVeU5qVTVNVFF4TnprMU9EQThMMEYwZEhKcFlqcEdZa2xrUGdvZ0lDQWdJRHhCZEhSeWFXSTZWRzkxWTJoVWVYQmxQakk4TDBGMGRISnBZanBVYjNWamFGUjVjR1UrQ2lBZ0lDQThMM0prWmpwc2FUNEtJQ0FnUEM5eVpHWTZVMlZ4UGdvZ0lEd3ZRWFIwY21saU9rRmtjejRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZaR005SjJoMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZKejRLSUNBOFpHTTZkR2wwYkdVK0NpQWdJRHh5WkdZNlFXeDBQZ29nSUNBZ1BISmtaanBzYVNCNGJXdzZiR0Z1WnowbmVDMWtaV1poZFd4MEp6NXZiblREb1dKcGJEd3ZjbVJtT214cFBnb2dJQ0E4TDNKa1pqcEJiSFErQ2lBZ1BDOWtZenAwYVhSc1pUNEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29LSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNjbkNpQWdlRzFzYm5NNmNHUm1QU2RvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNCa1ppOHhMak12Sno0S0lDQThjR1JtT2tGMWRHaHZjajVVWW5JZ1YyVmlQQzl3WkdZNlFYVjBhRzl5UGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenA0YlhBOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOG5QZ29nSUR4NGJYQTZRM0psWVhSdmNsUnZiMncrUTJGdWRtRThMM2h0Y0RwRGNtVmhkRzl5Vkc5dmJENEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ284TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNkeUp6OCtDOUIvMGdBQUd1OUpSRUZVZUp6Rm5IZThGZFhWOTc5cjc1blRicUVaUURHaWtZaGlyRmd3ZHJHREd2SlJiRTlpRWw4VDg5aFNINkpKRkRRYVM5UVk4MFpUZkdLcVVkR2dvQklzc2NTR1FTeVJvZ0pxRUVINnZmZlVtYjNYKzhmTUhFRDZCZk91RC9mejRad3paYS9mckwzS2IrMDl3bGFRM1BGWFk0b05KSXp3MVR3R3JBanFIZDRZUUF5Tk9vVXc1M2NIaGdDN0FYc0RnNEZXb0lEUUFvQlNCbXBBRnpBYmVBV1lBY3lNR3VhTlhGNXJLSGdGWXpDcUtoNmNDZXFvRC9HTkhJMUh2ci9GT3NtV25Kdy9jU3loQ0xteVVDbDVKQkJiZGJFcm1nQVI4STZCWWpnQ09BZzRER1F3cUFFUStjaXRkZDBqVXMxK3dJUE1BbjBhNUFWVi9tNE03NmtxVlFmRkFLdXhkWUZweDVsT2ZCUlRmK1NLYnV2V1BXQkdYVU5MRk9GamlBTkRLTjVVMysvMGhlM2JxTVlOVzdTNWtTQ2pRRWVDOUZtRmdRTGlBSytxSnIyL3JER1NKZzRvb0NMaUFRTlkwUFNmQUxvVW1BVHkxMnJrSmhWenhsVWZQSjNpU1hlYnFxaTNUc2tab1JyazRLK1hiYmFLWm5OUHlKMTBGUzIrQnFJUUlIbmpESXJYUmtWUVJoZHQ3bmxnQW5DT2lQUVJVYWVxa2FwNlZWRlZOYW9haUlnRnBDbWtmOW5INURlcnFrRjZqcXFLVnlFU1VTY2lmVURPQVoxUURPM3pxSXorWW53OGdHOVRZMEpqeEtDMHVCcTVrNjdhYkdBMjNXSk91NGRDYlFheFFCeTNVYkpkVmxXY01SN3Y1WGlFSHdON2l3Z29EbEZWeFNBaW9vcUtJQXBJTjYxVVVSVVFUUzZpcUlyZ1FRVFVLZ0txMHhRdUMxU214S0lZc0pXZzRBSlhKVkNvRlliQXZhTzNIakM1VThaaWZHcmJJS0ZndklyenlBQUQxNE9lbGZvTXA2b2dHRlFRVVZTVFI5OHRNTllqcXFvaVF1SitGQkF2Q2VvMnZmOGYxTXVsSXZxK1FXMEVYZ1FWQk8rVXhrTmpOM3FQalE2NE9QSXFNRDUxZ21KcVV2VWxMYUx3ZWVEWEl2UUc4YXFxQWtZVEMxRVZRYmJRdVc5TUZEU3pRbFVVMUtjUHdhanFNdUE4Z2Zzck5DaVFNd0plRUp3bzlRYzM3SmczNkdNS0k2OU1mS1VDaUZYd1AxaCtHQW8zZ2R3blFtOVZpZElIYUJWQkZFMU41R01GQlVpQWwyUmVJWW9rRmlPS1JpTFNHN2hQNGFhZjV2dWhpRmV3cW1BZDVFKytjbVBYWHJlVVJvd0ZLMWtnc0Y1eGlyWllJMzlGT1Vha2FTVVdKSm4vL3dFd05pVFpGRU5WRkZ4cXZBWjQxRGxHR1VOWmtoekxBZUNWeW5xbTFUb1ZDVWRlaVRWSlVFU3hLTTRyL1l5UnlRSjdJMFJwWkpIVnpmbGowWFp6UlJOWVJCTVBKeUl4U3Fqb3kwNDUwY0lpRmF5QVV3SG5oV2pTNVd0ZFp1MnBkTVJZQXZGSkJGR3NnZ1A2RzhPemd1Nk5hS1NxWWRPVlpPYmNIUjFXSlcrYjlkc0dSWkRNN2FkakRCRWlnWDJ0OEN4Q2Z4S2RyQ2lFS0J3eGRxM0xyQVZNb1MzUlVjRjQ5YzU1YlVGNFdJU2RRU0pWd2hRVDdXNjB5WlMyeG1DTm9LcDRuL3dsM3dzbS9iNjdzaW9HaUNiZ1NKVG93TVBPYTR0NmRZQlJnV0w3Mm1xc0FVeis1Q3Z4Q0I2UmhvOTlmY243RWhoNUFHUWZrRWpSRkpUdWgyQlZ4WWhnUk9pcTF1bGNXY0Y1eGRvRWpFYms2RnhacHRhSUNheHBudE1kU2NHaENRNFNnZXdUR0hsZzROQUNzVmV2S3FKcXlJOWNNd2xzS2xjODRRcXNRTlVZQ2dhajRGVzVGZUZDUWJMcG8rbU51ZytLTWNUT1VhOUZITExuanB4OTFGNGM5cGtkMmJaUEs4NHA3eTFld2QvKytUYS9uZkl5YjcyN21GSnJBU0VaVEhmVG9WVjVqNHBJOG9CUmJnVXVGbEVUKzlDSFdzTUhlYW9QL0FBQW01MGNEQm1lZkNGSldBYjVMNUJyUmNTcHFsME4vVzZEWW8yaEVjVzBGSExjZHNuSi9PenJJOWoxazl2dy9NeC84OVRyNy9ENk80dG9MZVk1NTVoOXVPaVVZVGpnNzYvT3d4aEp5dlZ1Z3JQNjJGWFZDT0pGR0FhOEpTS3ZHWEZXU2JMUitNMG5rM01BaXNlT3c0Y1dNZDRvZUpTZGplaHJJbEpTVlM4aUpzbkl0OFJTaENqMnRCWnlQSEg5bDluclUvMjU1TGFIK2UyVWwra3MxMkZsR1FLTHRCWHAzN3VOeTg0NGpBdFBQcEEvUGZFcTUvemtmdkpoMEoxYmYzUWNxVVBHaTZoUnBkT3I3QTA2VjhCSUxmS1lrT3FVS3hLTENmWThFbWtvSmlkaVFBWDlKU0o3aTJxRVNNQVdPRnBZUlRFMFlzZDlsNS9CSWJzUFpOZzNmc1g5ajc5Q2tBOXhxcHg0MkdmbzJidU5CY3M2YWNTT2lVKzl6cndsSFZ4KzlwRjRyencyOVUwS2hSemVkMzlLWmVrRm9rWlVJa1NLZ201bmpMbFhURkxTVVJUaVdVOWk4eWRkZ3d2Qm9oYVBWK1ZFRWE0V1NUSkZXYVZZdDRHeFJpaDMxVGo5cUQzNTN1aERPZTFIZC9Qb2N6UHB2VTBQdW1vTmR1elhrNmR2T0plOVB0V2ZQejN4R3RZWVNxMEZwcjR5ang0OVMxeDYrbUdNZjI0bUM1WjJrQXZ0R2xGTlRKSXRyRmFmTjc5VFdHdjZDWXFvb0toSmNPSXpvTStCemhFcmxweFJ1L014R0NzTmdxcFMvYmQxMVgvVUVPSEtwRkFsS1dhejYyMkJlSzlnRFplY01veHBieTFnL05QL29xMVhLMTIxQnR2MWFlT3hhNzlFdFJIeDJTRTdjTjhQenlDS0hjNHB1YllpUC83TDA5UWFNZWVkTUJSZmp6R3A4Z0JkMVRwZFhUVzZLalc2eXVsZjl2OXF2UW5LbWxGTm1sVkxHa2tBK1hGMVNwbDR2anFwS0phSUFGdEZ0R1NMMnp2SDlzVXpFQjBxU0t5b1JVUzNOTTBYb0I0NUJ2YnJ4YkRkUHNuRnR6MEVzU093aHM3T0tnZnZ2aHM3OWUvRkxsKzVoVDEzNnNmNEg1N0JKL3YyNE4xRksyZ3A1Rmk4dEpOSkw4NW14QUc3TUtZbFQreDhFNWpEOXR5SmJkcEx5WGVKemdtRmhiS3lYR2ZxN1BucmROalNSRXVNZ0ZOMGFQSG8xbE1SSFE5cTBjZ0Z6clV5MDMvb1JwdUFOK2o1RGFFWjFySUVhVXR3UVVTSW5XTmczeDRBekZtd0RBS0w4NG9KQTJhOXR3VHZsVjljT0pJSno4L2s5R3Z1NXNQbFpYSkJHakJqeCt2dkxPS1VnM2FsbUF1cE5xS0V6ak9HRzc5NkhQdDllZ0N4ODFnamVJVjZGRlBLaDlTam1IMHZ1STNaODVkUXlBVjhOQlhTaERlU0pDY0RoVzhQYm4xMy9QU0wvOWNWcnZrUmdWRzF1NXRQT0lVUmdoNUlraTZiaEZ2YWVqeEs1aHZxc1FOSnBsY3hIL0RhdklXY2UvTUVmbkRtNGZ6OGdwSGNPV1U2NDUrWlFURVhaTWhTYThTRWdjWGFoSU14Vm9pY1k5UzR1K2pmcTdXWjQxUnFFVGVjZHl3akRoZ01RQ2tmNHRlVEhLYWxURUttZ1FjZE5xdHp4eEdsYTY1OHlPQ3NJU01WMExNU3cwK1lucTJGaUpJa2RSOHM2MEpFMks1M0d6aVB0WVp5cGM3SUF3ZnozVk1QWnRBNU4vSDFXeWZ5cFdQM1lhZit2YWhGY1hNTU8vYnJ5WktWWldxcGoxRk5MR2JSOGk2bXZiMkExK2N0WXRyME9aeDY2QkJHSERDWWg2ZStTZVE4Rzh1WFZ4RmQrS1RJMGpPVEgwU05xdmVLN3dlY2tGVHNHSkd0aDQwcTVBTEx2SVhMK1dCWko4Y05IUVErOFFsaURBdVhkekZrWUYvK2ZObG92akI4TDVhc0xMTzBvMEpvTGJIM2hDMTVqdGwzWjU2YjhXL0tsZm9hWlVJdXNMUVg4MFQxaU8rY2N6UlhmbkU0Ly9PYnYzSDl2Yy9RV3NnbGJtUUQ2S1FrYzZvekFNYzc5Wi93cURkR0JFRkdBTDBBMTZSVnQ2S0VnYUhTVmVXT3lTOXo5bEY3TVdoZ1AxYVdhN1MzRkhqcHpmYzU3NmNQY09hUmU3THZvTzM0M0xpNzZLalVLZVZEeWgwVlJuMTJDSU8yNjhPZGowNkhOSWlzSHE1WGRsUTQrNWg5dU9HODQ3aHQwbFJ1K04zajlHb3Jibko5cGRrRVVSelF4NHFNTkFhTU1RSndWT3FvMDhSNTYvbVdySElPaXpuKzc4UVhXZFpaNGE1TFQ4TmFRMmVsUm8rV1BMK1pOSldiN24rV2kzL3hFTTlPbjBPUGxqekxWblN4dzRCdHVQUGJvL2o3cS9PWThOeE1XbG9LdUxRQ0R3Tkx4OG95SngwOGhEK09PWlh4ejd6QkJUK2ZCSVVjS01UT0p3UFlpQ2Fwc2hsTkFURGNpbUNpT01vQnc5TGp6TmEyRnhIQnE1SVBBeFl1N1dUMDFmZXczeTREZVBvbjU3SkQzNTZzWE5ZRnh2RHRYenpNcng5NkNVTEw4dVZkSExMWFRrei94WC9UVld2dzVSdi9palVHVW1zSkEwdEhSNFhEaHc3aXdYRm44N2QvdnNYb2ErNm1wWkFERWF3MWhJRWw3VmhzVkJMQ3I4azBER3RVTldmRHdjUDNFR0ZNWmlXUytldXREWTVYaXZtUVdlOSt5UE96NW5QQnlRY3dadlNoOVA5RUQvSzVnRklwejhCK1BUbHFuNTBaOTZYaFhIZnVjY3o1WUJuSGYvLzN6RnU0UElrd1hnbXRwYU5jWTg5QjIvTENUNy9LdExjV01PS0hmd1NVSVBWTCtUQ2d2U1hQZmY5NGczcmttZzVrL2VQVGRKZ2lRRSt4L0ZXS0k4ZDlCZUdPdElvMlczc2FTWnAwWldFenNJYk9jcDMrZlpKQzhaeGo5cUc5bEU5cm9BVEVCVXM3dVdYQzg5ejZ3QXZVSTBlcEVPS2NUODZ0MUJtMFhSOWV1ZTIvV2JTaXpQNFgzYzdLY28xaUNwdzFRdXc4a2ZQa0Fvc3h5VVBaV0dXZTVteGVWUzNLVjZSNDBwVlhnMTRtSXBFcWdXeTFhSlJVMUxIemVKOU1KZWQ5RTV4YUl5WnFSTFMxRnRsenAvNzA3ZG1DVjJYZXd1VzhPWDhwdFVxZFFrdWV3QmljVDBDcDFDUDY5MnJseFZ1K1JoQVlobDU0T3g4czdhU2xFT0s4NHB5bjNvaG8wdkpwOWxiTWg4M1NZTDNnSk1qRW9ob3FYQjBBdTZWaFdyWkNCZEFFeFJwRHRSSFJxN1ZJYXlISE80dVcwMVpLVXZyWWVYS2hKUjhHTkdMSHMyKzhCeWxvSmpEa3dvQzI5bUtpclBkWWt3RFpVc2d4NVpwejJLYTl4TkNMYnVQOUQxZlMxcEp2SHRlcnJjait1d3hLeGdBWUVTcjFpS216NXhQRmJzTVdJeUpvNmtSVWhnU2dPNmJ3R2xYUkxiV1lESlJhbXBwUEhIYzJ1dy9zeXlIZitnMnZ6Zm1BOXJZaVVleElVb3prMk5haWJUNFAxYVI3NlZMenQ4YlFpQjNXR0NiLzZJc01HZGlYL1M2OGpUZm1MbXBlSzdTV1NtZUZyNTl4R0plZmZlUWE0NG1kWjlnbHYyVDZuSVVVODJ1WEJwa2tGU1VteFdKSFE1Sy9KRDl1SlZBYXNhTWxIL0w0dFY5bXYxMEdzS0pjNDRWYnZzb2VPMjlMUjJlVk1MQnI1QmwrTlRJOCt6cWJpczRuVS9Fdmw1M0dRVU0reWRIZnU1TnBzOTl2Z3RLMEFxLzBhaTFTcVVXY2ZNV2ZPUEVIditmTWErK2hVby9JaGNGNlM0TlZ5S3hoVHIwTVNNKzAvN3RWUUltY3czblAvWmVmeWY2REJ6RDhlM2N5OU1MYldkeFJZZXJQdnNZZU8vZW5vNnRHYU8xNms3Q01NRWVoV3Fseng3Yyt4eWtIN2NZWlA3Nkh4MTk2ay9iVzRucW5Sa2VseHNRWFp2SElzek41Nk1VM2lXSzNHVnBrOFYzYURHaExhajdkQXFTcGlFa0t1eWoyM1B2OTB6bHE3MDl4ektXLzQrbnBjMWpXV2VHejMvZ1ZpMVowOGVJdFgyUHdEdHZRVVZrM09FMEhLVkF1MS9qcEJTUDU0dEY3Yys3TkU3ajcwVmRvNzlGQ25QcWpkWW0xaHZaU2dWeExnZlpTWWFPaCtpT2FrR0xSYW9ETmdYVHRTNldnZUorMEsrLzl3ZW1NT25nSVoxODduc2VtenFhOXJVUXBIN0pnYVNlZi9lYXZXZDVWNVlucnZzeDIyN1RUV1UxcW53eWNESlNNOGZ1Zk13L25rbEVITWVhT0tmenZReS9SMWlQaFhqWVVYVlRCcVUrbjRQb0IzSmdZa01vcXBMb0hpaXBVcXczdS9QWW9Qbi93RU02NmRqeC9mbXc2UFhxMjRGVHhxdlJvS2JCZ2FTZEhqZmt0dlZxTFBIZnplV3pYcDQydWFxTUpqb2drdWNxS011ZWZNb3pyemoyV0crOTdsdXZ2ZW9xMnRsSVdmVEZHbXBhd0pVMjV0U1diT2RKbFFEdFdCZjNOQkNXbEFDcVZPais3Y0NSbkg3VVhYN2orUHU2YThqS0ZVcDZPY3AxS3JVR2xGckdpWENNWFdHYS90NWdETC9rVi9YcTI4T3hONTdGZG4zYkt0WWpBSmwzSmpwVmx6amgyWDI2NzZDUis4OGcwdm5QN0l4UkxlY3ExQmwzcHRTcTFpSEt0MFdUenRoNDBTVVVKMmhrQXk0RWRtOXB1UXViYmRJNUFwVnJubGd0R2N0RXB3L2pPcnlmeng3KzlURXRia1cxN3QvR0puaTFwVXBjMFhtcU5tSGNYcmVEMU9SOXd3TVcvNUtXZm5jL1RONTdML2hmZFRsZTFRYU1STVh6L1hianIwdE9ZOE54TXp2L1pnK1FMSWNWY3lPNEQrMktOU1VGSTdqOS9TUWVMVjVTYlZNUVdRckk2dnNzRGtIZEE5d0h4S2dRYlE2VkpNQU9WcmlyWG4zOGlGMzl1R04vOXpkKzQ4ZTVuYUdrcklBaDNYWG9hKysweWdLNWFBNU5Pa1NoMkhQU05YMU50Ukx3K2R4SDdYM3c3MDM3K2RSNjk1aHdPdk9SWEhMamJEangyN1pkNGJzWjdqTDc2YnZLNWdFcTF6aG1INzhHZDMvazg1Vm9Ea1NTRXR4WHovUExoZjNMK3pSTW81c010QmtaRVJWVmNzcXBVM2dsQVo2Q01RbERaQkl0SldoUlFyVWVNT2VzSXZudmFJWXk1WXdvL3Vlc3AydHBMUk01akRRenMyNVBmUC9ZS1YvM3BTWXI1a0NQMzJvbGJ2bjRDdWREU2lCdzkyNHE4L3RZSERCOXpKMC9mZUM3L3VPbi84T2tCZlhoOTNpS08rLzd2RVJGeWdhVVNlM3EwRkFBNC92dC9vRnhyNEx6bm5zdEcwNmU5dU1XQVpKSW10NW5MbWhtZ3pFa0xBYk1wTGpocnhoKzE5NmU0OXR4anVmbis1N2orejAvUjJsWktraWhOdlpYQWdxV2R2RDE3UGhSeWJMOU5HOTQzaVNFaTUyanZVZUtaVitjeWZNeWRQSDdkbDVyVmRLVVdwZlZQRWxXOEppbi9xM00vb0xOY0E2K3NLTmN5amJZV05JQms5T0NjUUdHNmdDZnBZMiswRFBXcTVNS0F0eFlzNDlTci9zTEVGMmRUYk1rbnFmeEhqczBGQmdvNWJDRWtud3ZXV3NzYnhZNjJ0aUpQVEgrYmZTKzRqUlhsS2d1V2RkSmF6QkduMVhRbWtoYURVWnlFWXJzVi9Nb3FTSnJvV3BKRjV5OGIzMkFHTUM4N1JqZmllMVdWd0NaRTlIMVAvNHZBbWlZWnRmWU5nVFJjcit2QkpxMFZUMnVwd0t0ekZ6Si9jUWV0aFJ4dXRkNFJySWFuVDY2VldlYlc0a2RFcFRsY1lKN1hlSWJKRmFVQnZKQXRDMDFXMDY1YnNyekZHcUdRQytqWlhpSklGLzkwbDhaSmdJVzJVbzVTUGtRazRYSzNibjZ5WVVtYXJtVFo0UE5oRURhQ2xFTjlYSld6SlYwQm1TWlNhMmlhaGVoYUk4YlZvald2TEpBcjVnazN5N3dGVlU5blZ3M2NSMEFJTGFWQ2JqUFY2NTRrTkRmWm1qMkF4NzBxUWZyaFlVR1dBYjAxYmRKOVZJeEpRTmxqeDM0Y3Z1ZU94QzVsM0lESWVTYTlPSnZGSzhxazVQcUdKYzBuclRHY2RmUStiTk5lU3FkYjBoSjUvWjBQZWVxMWVRUmJJUXh2ZENqU0RCWVdaYm1xUGtLU3R4Z0RMQUtkck1wWklqalZkQ0hyYWxaampjRlY2cHh4eEI2TUdYMG85U2h1Rm9HWkk3eDl3Z3UwYkVMclFoQmk3K25kVnVKMzMvazhnVFZOZWlFTUxLL09YY2hCMy9oVk00SjlYS0paNzBUVXFSSUFqNGlZUllBSm9PbDUvcEoySXlXaGtOWkJ6bmdsSDFwZW5mc0JoMzc3RGdKcmFDdmxtZnZiYjZiVFNEZTlUay9ybm5vVTg0WHJKekJwNnB0VWFnMXVQdjlFUmh5d1M4TE4ySTFmWmtza1d6dWRoR2xGNGM5cGdTSEdZOXpvM1dheVEybkZSSkFYUUMzSjJueFpWeDh2WS93N0szVldsdXQwVnVyZHIxZDBGZjNZVmE3aHUycEVLYXYvY2J0ZVRkWURDNGhQc2wxZUdFVGxvVnVsamhkeEpxQ0xlMmJ1WnY5ZDZRbHdTK0o0MDdQVzF4QnY5bTRNZ2JWYmJPNkJOUmhySVdYMS94T1NycTNTcG8rQkcrZFE0aUxOMlNCWWdWRktxT0txS3lPcXM1Zi9CWmltaUFYMTJUclFkVjFZc3d3My9YbEwxTW40MzQvZFRKcjMweFFTdkNaSjNiVHFTNTNqNDZVSzNqaU4yekNPa0RnTUtQWU1iWEhYbmdDWHBpMkRiQk1KNjhxN201RnJrNExReGcvYXBMMHFzc20zM05EMU5GMWNwRmxISCtYUzR2NXRCSDJNMVNERWFSNVRuM2daZ1hObzdKeUlNU0xtVWVCZUJTTVFhN3F2WTJQeWNUN3M5VjI3Ty9mVVZRdC80cVFyd0wwWTh5akdHbHprMEpqNnhNdVNmcTAwUEJKNXZFdm9RSzljaW1vRmtSRHdrb0ZNc3VBbmloMnVFZE5veE5RYU1YSHNteUU2cTVpY1Z4cVJnMGFNYjhRMG9uaFZvMzAxaWIybkhpWEgwSWhweEs3WnVGOGRnVGoyMU5KN3hwR2pFYnZtRXZ0RWtySWtjbzVhd3hGSE1iV0dJM0orZFFneksvR0loS2gyZWMvMzFIdlVPY1FLMGtpWTNnQ2dPbmtzeFpGak1hWlpUTTVSNVh6UTMyZjdCa2pUTW11TTdEOTRlNTYvOVh3Q216akxYR2dKclUySGwyUkcxZ2pmL1B4bk9YelBuUWlzb1grdjFxUmxLcXZtZ3dnSnIzTEpLU3o0cjZPSW5XTy9UdzlnL3BLVlNabVJhcFBkNDhrYnpzVjdKZmFlWWJ0dXovM1B6a2dYdVNUb2hkWXlvRTg3ejkxOEhpSlFDQVA2OW14Smg1N3N1ZlBxTlZ2MkQvSlZZNWdMV0JWMWlxVTYrUXBndFpYaDRXNUhKeTNWV05VWU1jQ3JRRitRQTBVa0Jtd0RVcUpJWmRHS01vczd5aXhhM3NYek0vL05BOC9QWXVIS0NrRmdjRjZwMUNPV3JLeXd0S1BDNG80eWN4Y3U1N0dYNXpENW4yOFR1U1FrT3dYblBVczZLaXhlVVdacFI1Vi92YnVJOGMvTVlQcmJIeVFabFFoZHRRYmVLOHM3cTN5NHNzemlGV1ZlbTdlUWU1OStnOWtMbGhKYVM1M2tXcEZ6ZkxpaXpKS09DZ3VYZGZMa2ErOHdaZHJiV20xRTJWYlVXRlVENEZZajNJQ0lpV0x2YldpaDRZamZmaXA3YnFza1AySmNzbzVSVlZ3c0drMWVTZkdrOXNjUWhxTkV4a2hZcmtWSzBoK1dKanNOMkVKSVliWEdWclZhVDJxZ3pHK245VU8rbEUrV2RKQlFHTFZ5RFZhTGJta1ZTYkdZU3o4bUd5L2lXaU9kREZrMkxCQmFXZ281ZkZySFZlb1Iyb2pYUEU1RWM4VThnVFdpcXBFSW9TcFRyanZpazhkZC9PaTc1QU9UVkVvb3RVbFhyRFl4UHlMRms4ZGxVOUtvVis5RVd3SXh6NGpJUHFvYVdXUEMxZkt2NXZsWk56R3JzdTE2OHBHczlab3B2YTdqRkpyK283bGJaVjNIcFJhWE5leXRNUjl0RzJwNno5VkJtWWJYUXoxVWpaRmtpd0JRbTNqRkdpZXV0VUMvMnFFVVd3VUVMMGFzUmNyQWlhcjZqTUFncnhxaFpOWGRPa2svVldVZGZyYjVXd2JlSmgrWEtMZnVBMWVUaktkWmUyd2FpVWlvcW05NTFSUEVTRlVTTitJQWFwMXJYM3R0bnVESnNjU2tjU2pkQ1lheTBLa2VvdkJ5Q2txVUpFbnBsbzAwRkdXS2JJaWJXWU9BMm9Uak5zYnpySFdja3NHVEphY1JLcUdxVG5QS0lTS3lXTko5a1VLNi8rL0pzV3RkZDUwRVNqVHBjb3hMeWtpVHZITEFHbVNSY3h5bTZLUE52VXVvazdUYVhGK0cvSitVekY0a2VTV0FTeU5xcUtLUHh1aGhCajRVc0FndVhjMjB6djJRc0lIdHhaV0h4dUlsb3lURklWaXhVdjV4dnRleHdNM3A2aXVyeWNaUm10dlAxNlorUDM3UnJDWk1kamNyRW9sZ05WbmNmUFBGSzRZZWE2Q0NwTk1uZWFUcjNVRUxtNUJkNTA4ZWgwMTJhNkJnYWpSOGlSemEzSkF1dlVsZVl2SC9hVU82UW1xK05EZWtxMUZsMVlaMHFWTFFvaEUwM1pBdTFCOWN0NlZrc2xIR3c4MStFdm4wNFloSkdrOFdLeGFzSWpOVTVVK0lmZ0psYnhFeGlEUzM5Q2NSdGJtOGE2c0NsTzF4a0ZXZENTOGlLc2xMTWdUNGd5S25Da3cxb2xZMGdDeENHV2hzWkpjK2JNNFRYZjJsRjdaSUthNVpyN2hBQkljZUxYQ2RDdnVtK2FwTHA1WEpyRVpUUmJyTm1tZFcyQ3c5MElRM1FnQ2J1cmhwd1BjQ2VDeUM1S1VYcnRVRlFlZkg4OUtMMVNWMzBsV0VFb0VLSGlNV0VZZjY2ai9mcExqZjROSEF0MEFQekNhU2drUHhDUUcycWo1T1c2THJYZHFXMUhySk1hc2lyeXJnRURHU3ZrOG14ZWxGa0p1KytPQ0w5L3p1NUFNSXdEaFFJMTRSSmZJaGpZay8zQ3c5dS9mMFJsMURNVzRRNFltTnBlaXhqY1VWbCt0Yll0dThzS0NtSXdWT0E0NFQ2TmZNVkJOeG9ENTFqTkw4b2RrOGFvNU1VeUxKcHgzQ1ZkTSttVUlmQXBNVjdoM1FJNXkwb0NPaStreVI0aUZWV3pXNElGWkNnV3JZdlJmcmJOSGNMNDRjaHdwb2JEREdnOFZlc2QxU04rNzlQZ2lDOTc2M2lCeUxjQ1RJd2FDRGdTQmIvYkNHZkRTWFRvMGtzUWdGaUVuZVdmVXN5dDlWZFlxeHNrd1YvakM4SjE5NFlvWFZ5RGpYQ0RFRmg1R1k2cVNOKzVMMXlWWnhpcmtUcmliTTF5aHR1NERPK1FNUjFBcWkzbnR2MG1aY1BWWWJXbllGaG9Mc0NycmhsM2NKblNpemdOZUFXY0MweUxsWitUQndtaTVrTkZaTXdoZmgybmRkU0hsT1g2Sktqc2JrTFg5NTEvOERsbmVweE93dUJ0a0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxEUW84YzNabklIZHBaSFJvUFNJeU5Ea2lJR2hsYVdkb2REMGlNVEl3SWlCMmFXVjNRbTk0UFNJd0lEQWdNalE1SURFeU1DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4bklHOXdZV05wZEhrOUlqQXVOU0krRFFvOGNHRjBhQ0JrUFNKTk1UYzNMakEyTkNBeU9TNDRPVEl4UXpFNE5DNDFNRFFnTWpVdU16STBPQ0F4T1RJdU9EZzRJREl5TGpRM05URWdNakF4TGpJNU15QXlNUzQyTmprNVF6SXdPQzQwTlRjZ01qQXVPVFk0TXlBeU1UVXVPVEF4SURJeExqYzBOVGNnTWpJeUxqazVJREl6TGpnNU1UZE1Nakl6TGpJek5DQXlNUzR3TkRRMVF6SXhOUzQ0TmpRZ01UZ3VPVEUyTkNBeU1EZ3VNell4SURFNExqRTNOVGtnTWpBeExqQXlPQ0F4T0M0NE56Y3hRekU1TWk0eUlERTVMamN6SURFNE15NDBNVE1nTWpJdU56RXpNU0F4TnpVdU5qQTFJREkzTGpVd01EZERNVFkzTGpjNU5pQXpNaTR5T0RneklERTJNUzR4TnlBek9DNDNPRFl4SURFMU5pNDBNVFlnTkRZdU1qZ3pOa014TlRVdU1EYzBJRFE0TGpNNU16SWdNVFV6TGpnNU5TQTFNQzQxTnpJM0lERTFNaTQ0TmpRZ05USXVPREEyT1VNeE5EQXVOamd4SURVMkxqUXlNalFnTVRJNUxqZzBJRFl6TGpFek1qa2dNVEU1TGprZ05qa3VPVFE0TlVNeE1UY3VORGM1SURjeExqWXdNVGtnTVRFMUxqQXpPQ0EzTXk0ek1qTTFJREV4TWk0Mk9EWWdOelF1T1RneU9VTXhNRFF1TURjZ09ERXVNRE13TlNBNU5TNHhOekUzSURnM0xqSTNOemNnT0RVdU5qRXpPQ0E1TVM0NU1UVTFRemMwTGpnek1ESWdPVGN1TVRRM09TQTJNaTQzTkRreklERXdNQzR6T0NBMU1DNDJOek00SURFd01TNHlOak5ETXpndU1qWXdNeUF4TURJdU1UY3pJREkyTGpJeE9ERWdNVEF3TGpjd09DQXhOQzQ0T0RBeUlEazJMamc1TmpsRE1UQXVNak14TnlBNU5TNHpNak0ySURVdU56RTBPVFVnT1RNdU16VTFPU0F4TGpRek56TTJJRGt4TGpBME5EbE1NUzR4TnpreU9DQTVOQzR3TlRnM1F6VXVNek14TVRFZ09UWXVNakExSURrdU5UYzVOekVnT1RndU1ETTNPU0F4TXk0NU9UZ3hJRGs1TGpVeU1UVkRNakF1T1RBek55QXhNREV1T0RRNElESTRMakEzTnpVZ01UQXpMak15T1NBek5TNDBNRGd6SURFd015NDVOVGRETkRBdU5EZzVPQ0F4TURRdU16a3lJRFExTGpZMk1qWWdNVEEwTGpReE5pQTFNQzQ0T0RNNElERXdOQzR3TXpkRE5qTXVNamszTWlBeE1ETXVNVEk0SURjMUxqY3pOVGtnT1RrdU56azVOeUE0Tmk0NE5EQTFJRGswTGpReE1qbERPVFl1TlRnNE5DQTRPUzQyTnprMUlERXdOUzQxT1NBNE15NHpOekV4SURFeE5DNHlPREVnTnpjdU1qWkRNVEUyTGpZek15QTNOUzQyTURBM0lERXhPUzR3TnpNZ056TXVPRGt5T1NBeE1qRXVORGM1SURjeUxqSTFNakpETVRNd0xqWXpNU0EyTlM0NU9EUTNJREUwTUM0MU1UVWdOVGt1T0RJeE9TQXhOVEV1TkRVMklEVTJMakU0TXpsRE1UUTRMakUxTWlBMk5DNDRPREk0SURFME55NHlOeUEzTkM0d05ERWdNVFE1TGpBMk9DQTRNaTQwTXpVMVF6RTFNQzR6T1RVZ09EZ3VOall5T1NBeE5UTXVNekEySURrMExqVXlNalFnTVRVM0xqUTNOeUE1T1M0ek9EUTFRekUyTVM0NElERXdOQzQwTWpnZ01UWTNMakU1T0NBeE1EZ3VNRE00SURFM015NHhNREVnTVRBNUxqZ3hOa014TnprdU1UUWdNVEV4TGpZME9TQXhPRFV1T0RZeElERXhNUzR6T1RrZ01Ua3lMakF6T0NBeE1Ea3VNVFU0UXpFNU9DNHpOellnTVRBMkxqZzBOaUF5TURNdU5UQTVJREV3TWk0MU9Ua2dNakEyTGpVeE5pQTVOeTR5TURRelF6SXdPUzQ0TXpnZ09URXVNalE0T1NBeU1UQXVOVGt4SURnekxqa3lOalFnTWpBNExqWXpNU0EzTmk0MU9UVTBRekl3Tmk0M056Y2dOamt1TmpZMU15QXlNREl1TlRjMElEWXpMakl4T1RVZ01UazNMakE0TXlBMU9DNDVNREU1UXpFNU1TNDNOak1nTlRRdU56STBPQ0F4T0RVdU1qazFJRFV5TGpBeE5qVWdNVGMzTGpnNU9DQTFNQzQ0TmpVelF6RTNNUzR5TURRZ05Ea3VPREUyTlNBeE5qTXVPVFEySURVd0xqRXpNak1nTVRVMkxqa3hNU0ExTVM0M05qZ3pRekUxTmk0M05UUWdOVEV1T0RFd09DQXhOVFl1TlRrNElEVXhMamd6T1RRZ01UVTJMalEwSURVeExqZzRNVGxETVRVM0xqRTBOaUExTUM0MU1ERXpJREUxTnk0NU16TWdORGt1TVRReE55QXhOVGd1TnpjMElEUTNMamd4TkRkRE1UWXpMak13TkNBME1DNDJORGMzSURFMk9TNDJNalFnTXpRdU5EVTVOU0F4TnpjdU1EWTBJREk1TGpnNU1qRmFUVEUxTnk0MU16TWdOVFF1TkRZMU9FTXhOalF1TWpJMklEVXlMamt4TWpRZ01UY3hMakV4T0NBMU1pNDJNakV5SURFM055NDBOallnTlRNdU5qRXlOVU14T0RRdU16azFJRFUwTGpZNU5UVWdNVGt3TGpReE55QTFOeTR5TVRFNElERTVOUzR6TlRjZ05qRXVNRGt3TlVNeU1EQXVNemMySURZMUxqQXpNaUF5TURRdU1qTTBJRGN3TGprME5EVWdNakExTGpreU55QTNOeTR6TURFelF6SXdOeTQyT1RVZ09ETXVPVE13TXlBeU1EY3VNRE16SURrd0xqVXhPVEVnTWpBMExqQTNOQ0E1TlM0NE16TTVRekU1T0M0Mk1pQXhNRFV1TmpNMklERTROUzR6TlRZZ01URXdMallnTVRjekxqZzVJREV3Tnk0eE5ESkRNVFk0TGpVd05DQXhNRFV1TlRFNUlERTJNeTQxTlRnZ01UQXlMaklnTVRVNUxqVTNOeUE1Tnk0MU5qTTNRekUxTlM0M01USWdPVE11TURRNU5pQXhOVE11TURFMUlEZzNMall5T0RJZ01UVXhMamMzTlNBNE1TNDROVFU0UXpFME9TNDVORFVnTnpNdU16UTJOeUF4TlRFdU1EZzFJRFl6TGprME5Ea2dNVFUwTGpnM05DQTFOUzR4TkRjMVF6RTFOUzQzTmpNZ05UUXVPRGczT0NBeE5UWXVOalE1SURVMExqWTJPVGtnTVRVM0xqVXpNeUExTkM0ME5qVTRXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazB5TkRrZ016QXVNekEzVERJeU1pNDBOREVnTmk0d05qRTFUREl5TWk0d05UUWdNVFl1TnpNMk0wd3lOREF1TmpRNElESTJMamczTTB3eU1qRXVPVEV5SURJd0xqWTNOelJNTWpJeExqa3hNU0F5TUM0Mk9EYzJUREl5TVM0NU1URWdNakF1TmpjMU5Fd3lNVE11TnpFeUlESXpMak0zT1V3eU1qRXVOamsxSURJMkxqWTJNVFZNTWpJeExqUXlNU0F6TkM0eU5EUTVUREkwT1NBek1DNHpNRGRhSWlCbWFXeHNQU0ozYUdsMFpTSXZQZzBLUEM5blBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zdXBwb3J0LXRlYW0tNmIyMWUwYzlmZTAxNzAwOTExZGU0ZGNiOWZiZjdlZjYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1cHBvcnQtOTJjZWQxZTRiNTJjYTBkMTgxZDMxYjBkZTlhYjA3OTcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Rlc3RpbW9uaWFsLTY5ZDJlNjBlOTZjZWNkN2ZkMzRiYWViMTYyMzc0NTMwLnBuZ1wiOyIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IEJzUGx1c0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0IHsgQmFzZUFjY29yZGlvbiB9IGZyb20gJy4vYmFzZS1hY2NvcmRpb24nO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbkJ1dHRvbixcclxuICBBY2NvcmRpb25JdGVtLFxyXG4gIEFjY29yZGlvbkNvbnRlbnRzLFxyXG4gIHNpbmdsZSxcclxuICBwcmV2ZW50Q2xvc2UsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG59IGZyb20gJy4vc2hhcmVkJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGl0ZW1zLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlQWNjb3JkaW9uXHJcbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuYWNjb3JkaW9ufVxyXG4gICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gJ2lzLW9wZW4nIDogJ2lzLWNsb3NlZCd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIHshb3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpICYmIChcclxuICAgICAgICAgICAgICAgICAgPEJzUGx1c0NpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIyOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17cmdiYSgnIzBGMjEzNycsIDAuMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5hcnJvd31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzXHJcbiAgICAgICAgICAgICAgICBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnRzPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvQmFzZUFjY29yZGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYWNjb3JkaW9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjZGOEZCJyxcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBwOiBbJzE1cHgnLCAnMjBweCAzMHB4JywgJzMwcHggNDVweCcsICcyMHB4IDI1cHgnLCAnMjBweCAzNXB4J10sXHJcbiAgICAnJi5pcy1vcGVuJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDlweCAzMHB4IHJnYmEoNjksIDg4LCAxNTcsIDAuMDgpJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2hlYWRpbmcnXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjUsIDEuOF0sXHJcbiAgfSxcclxuICBhcnJvdzoge1xyXG4gICAgd2lkdGg6IFsyMCwgbnVsbCwgbnVsbCwgMjVdLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQmFzZUFjY29yZGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBjaGFuZ2VzKSA9PiBjaGFuZ2VzLFxyXG4gICAgb25TdGF0ZUNoYW5nZTogKCkgPT4ge30sXHJcbiAgfTtcclxuICBzdGF0ZSA9IHsgb3BlbkluZGV4ZXM6IFswXSB9O1xyXG4gIGdldFN0YXRlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BlbkluZGV4ZXM6XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzXHJcbiAgICAgICAgICA6IHRoaXMucHJvcHMub3BlbkluZGV4ZXMsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpbnRlcm5hbFNldFN0YXRlKGNoYW5nZXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcclxuICAgIGxldCBhbGxDaGFuZ2VzO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsU3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICBjb25zdCBjaGFuZ2VzT2JqZWN0ID1cclxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VzID09PSAnZnVuY3Rpb24nID8gY2hhbmdlcyhhY3R1YWxTdGF0ZSkgOiBjaGFuZ2VzO1xyXG4gICAgICAgIGFsbENoYW5nZXMgPSB0aGlzLnByb3BzLnN0YXRlUmVkdWNlcihhY3R1YWxTdGF0ZSwgY2hhbmdlc09iamVjdCk7XHJcbiAgICAgICAgcmV0dXJuIGFsbENoYW5nZXM7XHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2UoYWxsQ2hhbmdlcyk7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgaGFuZGxlSXRlbUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBzdGF0ZS5vcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogY2xvc2luZyA/ICdjbG9zaW5nJyA6ICdvcGVuaW5nJyxcclxuICAgICAgICBvcGVuSW5kZXhlczogY2xvc2luZ1xyXG4gICAgICAgICAgPyBzdGF0ZS5vcGVuSW5kZXhlcy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KVxyXG4gICAgICAgICAgOiBbLi4uc3RhdGUub3BlbkluZGV4ZXMsIGluZGV4XSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcclxuICAgICAgb3BlbkluZGV4ZXM6IHRoaXMuZ2V0U3RhdGUoKS5vcGVuSW5kZXhlcyxcclxuICAgICAgaGFuZGxlSXRlbUNsaWNrOiB0aGlzLmhhbmRsZUl0ZW1DbGljayxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQmFzZUFjY29yZGlvbiB9O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25CdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPGRpdiBzeD17c3R5bGVzLmJ1dHRvblRvZ2dsZX0gey4uLnJlc3R9PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGFjY29yZGlvbkl0ZW06IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICcrIC5hY2NvcmRpb24taXRlbSc6IHtcclxuICAgICAgbXQ6IFszXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b25Ub2dnbGU6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJ10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGFjY29yZGlvbkNvbnRlbnQ6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGxpbmVIZWlnaHQ6IDIsXHJcbiAgICBtdDogWzRdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBvcGVuOiB7XHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogMTYsXHJcbiAgfSxcclxuICBjbG9zZWQ6IHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBY2NvcmRpb25Db250ZW50cyh7IGlzT3BlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPVwiY2xvc2VkXCJcclxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgc3g9e3N0eWxlcy5hY2NvcmRpb25Db250ZW50fVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25JdGVtID0gKHsgaXNPcGVuLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjbGFzc05hbWU9e2BhY2NvcmRpb24taXRlbSAke2NsYXNzTmFtZX1gfVxyXG4gICAgc3g9e3N0eWxlcy5hY2NvcmRpb25JdGVtfVxyXG4gICAgey4uLnJlc3R9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXZlbnRDbG9zZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdjbG9zaW5nJyAmJiBzdGF0ZS5vcGVuSW5kZXhlcy5sZW5ndGggPCAyXHJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IHN0YXRlLm9wZW5JbmRleGVzIH1cclxuICAgIDogY2hhbmdlcztcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGUgPSAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgY2hhbmdlcy50eXBlID09PSAnb3BlbmluZydcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogY2hhbmdlcy5vcGVuSW5kZXhlcy5zbGljZSgtMSkgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIHJlZHVjZXJzLnJlZHVjZSgoYWNjLCByZWR1Y2VyKSA9PiByZWR1Y2VyKHN0YXRlLCBhY2MpLCBjaGFuZ2VzKTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBGbGV4LCBJbWFnZSwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgTGluaywgTGVhcm5Nb3JlIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJ3NlcnZpY2VzL3NsdWdpZnknO1xyXG5cclxuY29uc3QgQmxvZ1Bvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICAvLyBjb25zdCBzbHVnID0gc2x1Z2lmeShwb3N0Lm1uX3RpdHVsbylcclxuICAvLyBjb25zdCBzbHVnID0gXCJ0ZXN0ZVwiXHJcbiAgY29uc3Qgc2x1ZyA9IHNsdWdpZnkocG9zdC5tbl90aXR1bG8pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwiYXJ0aWNsZVwiIHN4PXtzdHlsZXMucG9zdH0+XHJcbiAgICAgIDxGbGV4IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy50aHVtYm5haWx9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2BodHRwczovL3d3dy5iYWxhbWludXQuY29tLmJyL2ltZy9ub3RpY2lhcy8ke3Bvc3QubW5faW1hZ2VtMX1gfSBsb2FkaW5nPVwibGF6eVwiIGFsdD17cG9zdD8ubW5fdGl0bGV9IC8+XHJcbiAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIDxMaW5rIHBhdGg9e2Bub3RpY2lhcy8ke3NsdWd9YH0+e3Bvc3Q/Lm1uX3RpdHVsb308L0xpbms+XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuZXhjZXJwdH0+XHJcbiAgICAgICAgICB7cG9zdD8ubW5fZGVzY3JpY2FvfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8TGVhcm5Nb3JlIHBhdGg9e2Bub3RpY2lhcy8ke3NsdWd9YH0gbGFiZWw9XCJMZWlhIE1haXNcIiBzeD17c3R5bGVzLmxlYXJuTW9yZX0gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3Q7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcG9zdDoge1xyXG4gICAgbXg6IFtudWxsLCBudWxsLCBudWxsLCAzLCAndW5zZXQnXSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgbWI6IFs0XSxcclxuICAgIGltZzoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgbnVsbCwgMywgJzE3cHgnLCAzXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNjhdLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjJweCcsXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXhjZXJwdDoge1xyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjg4LFxyXG4gICAgbXQ6IFsyXSxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgIGRpc3BsYXk6ICctd2Via2l0LWJveCcsXHJcbiAgICBXZWJraXRMaW5lQ2xhbXA6ICcyJyxcclxuICAgIFdlYmtpdEJveE9yaWVudDogJ3ZlcnRpY2FsJyBcclxuICB9LFxyXG4gIGxlYXJuTW9yZToge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCAnMTVweCddLFxyXG4gICAgbXQ6IDIsXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgRmFxSXRlbSA9ICh7IGZhcSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwiYXJ0aWNsZVwiIHN4PXtzdHlsZXM/LmZhcX0gey4uLnByb3BzfT5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPntmYXE/LnF1ZXN9PC9IZWFkaW5nPlxyXG4gICAgICA8VGV4dCBhcz1cInBcIj57ZmFxPy5hbnN9PC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcUl0ZW07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZmFxOiB7XHJcbiAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgIzBGMjEzNycsXHJcbiAgICBtYXJnaW5Cb3R0b206IDgsXHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIDYsIDhdLFxyXG4gICAgd2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCAnY2FsYyg1MCUgLSA2MHB4KScsICdjYWxjKDUwJSAtIDgwcHgpJ10sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjgsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCAzXSxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDIsXHJcbiAgICAgIG1iOiA0LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEltYWdlLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgRmVhdHVyZSA9ICh7IGRhdGEsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmV9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxCb3ggYXM9XCJmaWd1cmVcIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhPy5pY29ufSBhbHQ9e2RhdGE/LnRpdGxlfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+e2RhdGE/LnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIj57ZGF0YT8uZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZlYXR1cmU6IHtcclxuICAgIGRpc3BsYXk6IFsnZmxleCddLFxyXG4gICAgZmlndXJlOiB7XHJcbiAgICAgIG1pbldpZHRoOiBbNzBdLFxyXG4gICAgICBtcjogWyczMHB4J10sXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgbGluZUhlaWdodDogMS4yOCxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODgsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBtdDogWzNdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IElvTWRDaGVja21hcmtDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IExlYXJuTW9yZSwgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICdzZXJ2aWNlcy9zbHVnaWZ5JztcclxuXHJcbmNvbnN0IFByaWNlVGFibGUgPSAoeyBpdGVtcywgaXNSZWNvbW1lbmRlZCwgdGl0bGUsIHN1YnRpdGxlLCBsaW5rIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzeD17c3R5bGVzLnByaWNlVGFibGV9XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7aXNSZWNvbW1lbmRlZCA/ICdyZWNvbW1lbmRlZCcgOiAnJ31gfVxyXG4gICAgPlxyXG4gICAgICB7Lyoge3ByaWNlLmlzUmVjb21tZW5kZWQgJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIHN4PXtzdHlsZXMucmVjb21MYWJlbH0+XHJcbiAgICAgICAgICBIaWdobHkgUmVjb21tZW5kZWRcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICl9ICovfVxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9XCJwcmljZUhlYWRlclwiPlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIHsvKiA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnByaWNlQW1vdW50fT5cclxuICAgICAgICAgICR7cHJpY2U/LnByaWNlfVxyXG4gICAgICAgICAgL21vXHJcbiAgICAgICAgPC9UZXh0PiAqL31cclxuICAgICAgICB7LyogPEJ1dHRvbiBzeD17c3R5bGVzLmJ1dHRvbn0gdmFyaWFudD1cInRleHRcIj5cclxuICAgICAgICAgIHtwcmljZS5idXR0b25UZXh0fVxyXG4gICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggYXM9XCJ1bFwiIHN4PXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAge2l0ZW1zPy5tYXAoKGl0ZW0sIGkpID0+ICggICAgICAgICAgXHJcbiAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtpc1JlY29tbWVuZGVkID8gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIHBhdGg9e2BvYnJpZ2Fjb2VzLyR7c2x1Z2lmeShpdGVtLk1uX1RpdHVsbyl9YH0gc3g9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8SW9NZENoZWNrbWFya0NpcmNsZSBzeD17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLk1uX1RpdHVsb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPElvTWRDaGVja21hcmtDaXJjbGUgc3g9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5vYnJfbm9tZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtsaW5rID8gKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGVhcm5Nb3JlIHBhdGg9e2xpbmt9IGxhYmVsPVwiU2FpYmEgTWFpc1wiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkgOiAoJycpfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZVRhYmxlO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNlVGFibGU6IHtcclxuICAgIGFsaWduU2VsZjogJ2Jhc2VsaW5lJyxcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nOiBbXHJcbiAgICAgICcyMHB4IDE1cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMzBweCAyNXB4JyxcclxuICAgICAgJzI1cHggMzBweCA0MHB4IDMwcHgnLFxyXG4gICAgICAnNDVweCA2MHB4IDcwcHggNDVweCcsXHJcbiAgICBdLFxyXG4gICAgYm94U2hhZG93OiBbJzBweCAxNXB4IDUwcHggcmdiYSg5MSwgMTMyLCAxOTMsIDAuMSknLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgJyYucmVjb21tZW5kZWQnOiB7XHJcbiAgICAgIGJveFNoYWRvdzogW251bGwsIG51bGwsIG51bGwsICcwcHggMTVweCA1MHB4IHJnYmEoOTEsIDEzMiwgMTkzLCAwLjEpJ10sXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlY29tTGFiZWw6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMCwgMV0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjI5LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzUyQUNGRicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHggOHB4IDBweCAwcHgnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgdG9wOiAnLTM1cHgnLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBtaW5IZWlnaHQ6IFszMCwgMzVdLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMSwgMiwgM10sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMxLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjU1cHgnLFxyXG4gIH0sXHJcbiAgc3VidGl0bGU6IHtcclxuICAgIGNvbG9yOiByZ2JhKCcjMzQzRDQ4JywgMC42NSksXHJcbiAgICBmb250U2l6ZTogWzAsIG51bGwsIDEsIDJdLFxyXG4gICAgbGluZUhlaWdodDogMS42MixcclxuICAgIG10OiAnOHB4JyxcclxuICB9LFxyXG4gIHByaWNlQW1vdW50OiB7XHJcbiAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFsxLCAyLCBudWxsLCA0LCAnMjZweCddLFxyXG4gICAgbGluZUhlaWdodDogMS4zLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgbXQ6IFsnMTJweCcsIG51bGwsIG51bGwsICcyNnB4J10sXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBtdDogWzYsIG51bGwsIG51bGwsIG51bGwsIDEwXSxcclxuICAgIG1heFdpZHRoOiAzNDAsXHJcbiAgICBsaToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIDEsIG51bGwsIDJdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjYyLFxyXG4gICAgICAnKyBsaSAnOiB7XHJcbiAgICAgICAgbXQ6IFszLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgICAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgaGVpZ2h0OiBbMTcsIG51bGwsIG51bGwsIG51bGwsIDIzXSxcclxuICAgICAgICB3aWR0aDogWzE3LCBudWxsLCBudWxsLCBudWxsLCAyM10sXHJcbiAgICAgIH0sXHJcbiAgICAgICdzcGFuOmZpcnN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgbXI6ICcxM3B4JyxcclxuICAgICAgICBtdDogJzVweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy51bmF2YWlsYWJsZSc6IHtcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgYm9yZGVyOiBgMS41cHggc29saWQgJHtyZ2JhKCcjNUIyQjlEJywgMC4xNSl9YCxcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBtaW5IZWlnaHQ6IFs0MCwgbnVsbCwgbnVsbCwgbnVsbCwgNTBdLFxyXG4gICAgcGFkZGluZzogWycwIDI0cHgnLCBudWxsLCAnMCAzMnB4J10sXHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgbXQ6IFszLCBudWxsLCBudWxsLCA2XSxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gIH1cclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgU2VydmljZSA9ICh7IGNvdGFjYW8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuc2VydmljZX0+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPntjb3RhY2FvPy5jb3RkX25vbWV9PC9UZXh0PlxyXG4gICAgICA8VGV4dCBhcz1cInBcIj5Db21wcmE6IDxUZXh0IGFzPVwic3BhblwiIHN4PXsgc3R5bGVzLnByaWNlIH0+UiQge2NvdGFjYW8/LmNvdGRfY29tcHJhfTwvVGV4dD48L1RleHQ+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPlZlbmRhOiA8VGV4dCBhcz1cInNwYW5cIiBzeD17IHN0eWxlcy5wcmljZSB9PnsgY290YWNhbz8uY290ZF92ZW5kYSAhPT0gMCA/IChgUiQgJHtjb3RhY2FvPy5jb3RkX3ZlbmRhfWApIDogKCctJyl9PC9UZXh0PjwvVGV4dD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlcnZpY2U6IHtcclxuICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlckNvbG9yfWAsXHJcbiAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1pbkhlaWdodDogWzEwNywgbnVsbCwgbnVsbCwgMTMwXSxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDExcHggMzBweCByZ2JhKDUxLCA4MywgMTQ1LCAwLjA3KScsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxN3B4J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNzcsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNXB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiAyLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB0ZWxlZm9uZSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3RlbGVmb25lLnBuZydcclxuaW1wb3J0IGVtYWlsIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZW1haWwucG5nJ1xyXG5pbXBvcnQgZW5kZXJlY28gZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9lbmRlcmVjby5wbmcnXHJcbmltcG9ydCBjaWRhZGUgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9jaWRhZGUucG5nJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9pbnN0YWdyYW0ucG5nJ1xyXG5pbXBvcnQgd2hhdHNhcHAgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy93aGF0c2FwcC5wbmcnXHJcbmltcG9ydCBzdG9yZSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3N0b3JlLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0NvbnRhdG8nLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd0ZWw6ODgzNjY5MTE0NicsXHJcbiAgICAgICAgaWNvbjogdGVsZWZvbmUsXHJcbiAgICAgICAgbGFiZWw6ICcoODgpIDM2NjktMTE0NicsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndGVsOjg4MzY2OTE1NzcnLFxyXG4gICAgICAgIGljb246IHRlbGVmb25lLFxyXG4gICAgICAgIGxhYmVsOiAnKDg4KSAzNjY5LTE1NzcnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ21haWx0bzpnZXJlbmNpYUBzZXJ2Y29uMS5jb20nLFxyXG4gICAgICAgIGljb246IGVtYWlsLFxyXG4gICAgICAgIGxhYmVsOiAnZ2VyZW5jaWFAc2VydmNvbjEuY29tJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL2cucGFnZS9zZXJ2Y29uamlqb2NhP3NoYXJlJyxcclxuICAgICAgICBpY29uOiBlbmRlcmVjbyxcclxuICAgICAgICBsYWJlbDogJ1J1YSAxNyBkZSBPdXR1YnJvLCAxMzQwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL2cucGFnZS9zZXJ2Y29uamlqb2NhP3NoYXJlJyxcclxuICAgICAgICBpY29uOiBjaWRhZGUsXHJcbiAgICAgICAgbGFiZWw6ICdKaWpvY2EgZGUgSmVyaWNvYWNvYXJhIC0gQ0UnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgdGl0bGU6ICdSZWRlcyBTb2NpYWlzJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlcnZjb25qaWpvY2EnLFxyXG4gICAgICAgIGljb246IGZhY2Vib29rLFxyXG4gICAgICAgIGxhYmVsOiAnRmFjZWJvb2snLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2VydmNvbmppam9jYS8nLFxyXG4gICAgICAgIGljb246IGluc3RhZ3JhbSxcclxuICAgICAgICBsYWJlbDogJ0luc3RhZ3JhbScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly93YS5tZS81NTg4OTk2Njg2NTInLFxyXG4gICAgICAgIGljb246IHdoYXRzYXBwLFxyXG4gICAgICAgIGxhYmVsOiAnV2hhdHNhcHAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uc2VydmNvbicsXHJcbiAgICAgICAgaWNvbjogc3RvcmUsXHJcbiAgICAgICAgbGFiZWw6ICdOb3NzbyBBcHAnLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZvb3Rlck5hdiA9IFtcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ0FkdmVydGlzZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdTdXBwb3J0cycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdNYXJrZXRpbmcnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJyMhJyxcclxuICAgIGxhYmVsOiAnRkFRJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIFRleHQsIENvbnRhaW5lciwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IENhbGxUb0FjdGlvbiBmcm9tICdzZWN0aW9ucy9jYWxsLXRvLWFjdGlvbic7XHJcbmltcG9ydCBXaWRnZXQgZnJvbSAnLi93aWRnZXQnO1xyXG5pbXBvcnQgeyBtZW51SXRlbXMgfSBmcm9tICcuL2Zvb3Rlci5kYXRhJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiZmFkZUluXCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICA8Q2FsbFRvQWN0aW9uIC8+XHJcbiAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8Qm94IGFzPVwiZm9vdGVyXCIgc3g9e3N0eWxlcy5mb290ZXJ9PlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyVG9wSW5uZXJ9PlxyXG4gICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYWJvdXR9PlxyXG4gICAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5sb2dvfT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXsgTG9nbyB9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwiTW9kZWxvIENvbnRhYmlsaWRhZGVcIiAvPlxyXG4gICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICAgIHsvKiA8Qm94IHN4PXtzdHlsZXMudGVybXN9PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIiMhXCI+VGVybXMgb2YgdXNlPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCI+fDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9XCIjIVwiPlByaXZhY3k8L0xpbms+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+ICovfVxyXG4gICAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuY29weXJpZ2h0fT5cclxuICAgICAgICAgICAgICAgICZjb3B5OyBDb3B5cmlnaHQge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gcG9yIDxUZXh0IGFzPVwic3BhblwiIGNvbG9yPVwic2Vjb25kYXJ5XCI+PGEgaHJlZj1cImh0dHBzOi8vdGJyd2ViLmNvbS5iclwiIHRhcmdldD1cIl9ibGFua1wiPlRCcldlYjwvYT48L1RleHQ+XHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAge21lbnVJdGVtcy5tYXAoKHsgaWQsIHRpdGxlLCBpdGVtcyB9KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFdpZGdldCBrZXk9e2lkfSB0aXRsZT17dGl0bGV9IGl0ZW1zPXtpdGVtc30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmb290ZXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGOUZBRkMnLFxyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICBwYjogWzgsIG51bGwsIG51bGwsIDE1XSxcclxuICB9LFxyXG4gIGZvb3RlclRvcElubmVyOiB7XHJcbiAgICBnYXA6IFszMCwgbnVsbCwgNTAsICcyMHB4IDUwcHgnLCAxNywgNTBdLFxyXG4gICAgZGlzcGxheTogWydncmlkJ10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgZm9vdGVySW5uZXI6IHtcclxuICAgIGJvcmRlclRvcDogYDFweCBzb2xpZCAjRDlFMEU3YCxcclxuICAgIGRpc3BsYXk6IFsnYmxvY2snLCBudWxsLCAnZmxleCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcGFkZGluZzogJzM1cHggMCA0MHB4JyxcclxuICB9LFxyXG4gIGFib3V0OiB7XHJcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2dyaWQnLCAnYmxvY2snXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6ICcyMDVweCAxZnIgMWZyJyxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJ10sXHJcbiAgICBncmlkUm93OiBbJzMvNCcsIG51bGwsICcxLzEnLCAnMy80JywgJ3Vuc2V0J10sXHJcbiAgICBncmlkQ29sdW1uOiBbJzEvMycsIG51bGwsICcxLzInLCAnMS81JywgJ3Vuc2V0J10sXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbJ2NlbnRlcicsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG4gICAgZ3JpZENvbHVtbjogJzEvMicsXHJcbiAgfSxcclxuICB0ZXJtczoge1xyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBncmlkQ29sdW1uOiAnMy80JyxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgtc3RhcnQnLCAnY2VudGVyJ10sXHJcbiAgICBmbGV4RGlyZWN0aW9uOiBbJ3JvdycsIG51bGwsIG51bGwsIG51bGwsICdjb2x1bW4nLCAncm93J10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogW1xyXG4gICAgICAnY2VudGVyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAnY2VudGVyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ2ZsZXgtc3RhcnQnLFxyXG4gICAgXSxcclxuICAgIG10OiBbNCwgbnVsbCwgbnVsbCwgMCwgNF0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgc3Bhbjoge1xyXG4gICAgICBkaXNwbGF5OiBbJ2lubGluZS1mbGV4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnLCAnaW5saW5lLWZsZXgnXSxcclxuICAgICAgbTogWycwIDEwcHgnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb3B5cmlnaHQ6IHtcclxuICAgIGNvbG9yOiByZ2JhKCcjMEYyMTM3JywgMC42KSxcclxuICAgIGZvbnRTaXplOiBbJzE0cHgnXSxcclxuICAgIG10OiBbMywgbnVsbCwgbnVsbCwgLTMxLCAzXSxcclxuICAgIG1yOiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2F1dG8nLCAndW5zZXQnXSxcclxuICAgIGdyaWRDb2x1bW46ICcyLzMnLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsICdsZWZ0JywgJ2NlbnRlcicsICdsZWZ0J10sXHJcbiAgICBhOiB7XHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICcmOnZpc2l0ZWQnOiB7XHJcbiAgICAgICAgY29sb3I6ICdpbmhlcml0J1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcblxyXG5jb25zdCBXaWRnZXQgPSAoeyB0aXRsZSwgaXRlbXMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyV2lkZ2V0fT5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPnt0aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICB7aXRlbXMubWFwKCh7IHBhdGgsIGxhYmVsLCBpY29uIH0sIGkpID0+IChcclxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICB7aWNvbiAmJiA8SW1hZ2Ugc3JjPXtpY29ufSBhbHQ9e2xhYmVsfSAvPn1cclxuICAgICAgICAgICAgPExpbmsgcGF0aD17cGF0aH0gaHJlZj17cGF0aC50b1N0cmluZygpfSB0YXJnZXQ9XCJfYmxhbmtcIiBrZXk9e2l9IGxhYmVsPXtsYWJlbH0gdmFyaWFudD1cImZvb3RlclwiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFdpZGdldDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmb290ZXJXaWRnZXQ6IHtcclxuICAgIGgzOiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdib2R5JyxcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjY4LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgdWw6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIG1hcmdpbjogJzI4cHggMCAwJyxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgbGk6IHtcclxuICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgaW1nOiB7XHJcbiAgICAgICAgICBtcjogJzE1cHgnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICAgIGE6IHtcclxuICAgICAgICBmb250U2l6ZTogJzE1cHgnLFxyXG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC44KSxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAyLjUsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgQmFyID0gKHsgaXNTdGlja3kgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGV4dFxyXG4gICAgICBhcz1cInNwYW5cIlxyXG4gICAgICBjbGFzc05hbWU9XCJiYXJcIlxyXG4gICAgICBzeD17eyBiYWNrZ3JvdW5kQ29sb3I6IGlzU3RpY2t5ID8gJ3RleHQnIDogJ3doaXRlJyB9fVxyXG4gICAgLz5cclxuICApO1xyXG59O1xyXG5cclxuY29uc3QgSGFtYnVyZ2VyTWVudSA9ICh7IGlzT3BlbiwgaXNTdGlja3ksIHRvZ2dsZU1vYmlsZU1lbnUsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGJ1dHRvblxyXG4gICAgICBzeD17c3R5bGVzLmJ1dHRvbn1cclxuICAgICAgb25DbGljaz17dG9nZ2xlTW9iaWxlTWVudX1cclxuICAgICAgY2xhc3NOYW1lPXtpc09wZW4gPyAnb3BlbicgOiAnJ31cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7WzEsIDIsIDMsIDRdLm1hcCgoYmFyLCBpKSA9PiAoXHJcbiAgICAgICAgPEJhciBrZXk9e2l9IGlzU3RpY2t5PXtpc1N0aWNreX0gLz5cclxuICAgICAgKSl9XHJcbiAgICAgIDxUZXh0IGFzPVwic3BhblwiIHZhcmlhbnQ9XCJzdHlsZXMuc3JPbmx5XCI+XHJcbiAgICAgICAgTWVudVxyXG4gICAgICA8L1RleHQ+XHJcbiAgICA8L2J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyTWVudTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBidXR0b246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIGJvcmRlcjogMCxcclxuICAgIHA6IDAsXHJcbiAgICB3aWR0aDogMjAsXHJcbiAgICBoZWlnaHQ6IDE0LFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxyXG4gICAgdHJhbnNpdGlvbjogJy41cyBlYXNlLWluLW91dCcsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIG91dGxpbmU6IDAsXHJcbiAgICBtbDogWzQsIG51bGwsIDZdLFxyXG4gICAgJy5iYXInOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBoZWlnaHQ6ICcycHgnLFxyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDksXHJcbiAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXHJcbiAgICAgIHRyYW5zaXRpb246ICcuMjVzIGVhc2UtaW4tb3V0JyxcclxuICAgICAgJzpudGgtb2YtdHlwZSgxKSc6IHtcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgIH0sXHJcbiAgICAgICc6bnRoLW9mLXR5cGUoMiksOm50aC1vZi10eXBlKDMpJzoge1xyXG4gICAgICAgIHRvcDogJzZweCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICc6bnRoLW9mLXR5cGUoNCknOiB7XHJcbiAgICAgICAgdG9wOiAnMTJweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYub3Blbic6IHtcclxuICAgICAgJy5iYXInOiB7XHJcbiAgICAgICAgJzpudGgtb2YtdHlwZSgxKSc6IHtcclxuICAgICAgICAgIHRvcDogJzZweCcsXHJcbiAgICAgICAgICB3aWR0aDogJzAlJyxcclxuICAgICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzpudGgtb2YtdHlwZSgyKSc6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSg0NWRlZyknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzpudGgtb2YtdHlwZSgzKSc6IHtcclxuICAgICAgICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgtNDVkZWcpJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICc6bnRoLW9mLXR5cGUoNCknOiB7XHJcbiAgICAgICAgICB0b3A6ICc2cHgnLFxyXG4gICAgICAgICAgd2lkdGg6ICcwJScsXHJcbiAgICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJ2hvbWUnLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdxdWVtLXNvbW9zJyxcclxuICAgIGxhYmVsOiAnUXVlbSBzb21vcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnc2Vydmljb3MnLFxyXG4gICAgbGFiZWw6ICdTZXJ2acOnb3MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2luZm9ybWFjb2VzJyxcclxuICAgIGxhYmVsOiAnQXR1YWxpemUtc2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2NvbnRhdG8nLFxyXG4gICAgbGFiZWw6ICdDb250YXRvJyxcclxuICB9LFxyXG5dO1xyXG4iLCJleHBvcnQgZGVmYXVsdCBbXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGFiZWw6ICdIb21lJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnUXVlbSBzb21vcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsYWJlbDogJ1NlcnZpw6dvcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsYWJlbDogJ0F0dWFsaXplLXNlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnQ29udGF0bycsXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBGbGV4LCBDb250YWluZXIsIEJ1dHRvbiB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU3RpY2t5IGZyb20gJ3JlYWN0LXN0aWNreW5vZGUnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdjb21wb25lbnRzL2xvZ28nO1xyXG5pbXBvcnQgVG9wQmFyIGZyb20gJ2NvbXBvbmVudHMvdG9wYmFyJztcclxuaW1wb3J0IExvY2tJY29uIGZyb20gJ2NvbXBvbmVudHMvaWNvbnMvbG9jayc7XHJcbmltcG9ydCBIYW1idXJnZXJNZW51IGZyb20gJ2NvbXBvbmVudHMvaGFtYnVyZ2VyJztcclxuaW1wb3J0IE5hdmJhciBmcm9tICcuL25hdmJhcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBpc01vYmlsZU1lbnU6IGZhbHNlLFxyXG4gICAgaXNTdGlja3k6IGZhbHNlLFxyXG4gIH0pO1xyXG4gIGNvbnN0IGhhbmRsZVN0YXRlQ2hhbmdlID0gKHN0YXR1cykgPT4ge1xyXG4gICAgc3RhdHVzLnN0YXR1cyA9PT0gU3RpY2t5LlNUQVRVU19GSVhFRFxyXG4gICAgICA/IHNldFN0YXRlKHsgLi4uc3RhdGUsIGlzU3RpY2t5OiB0cnVlIH0pXHJcbiAgICAgIDogc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaXNTdGlja3k6IGZhbHNlIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgdG9nZ2xlTW9iaWxlTWVudSA9ICgpID0+IHtcclxuICAgIHNldFN0YXRlKChwcmV2KSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4ucHJldixcclxuICAgICAgICBpc01vYmlsZU1lbnU6ICFwcmV2LmlzTW9iaWxlTWVudSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoe1xyXG4gICAgICAuLi5zdGF0ZSxcclxuICAgICAgaXNNb2JpbGVNZW51OiBmYWxzZSxcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxUb3BCYXIgLz5cclxuICAgICAgPFN0aWNreVxyXG4gICAgICAgIGVuYWJsZWQ9e3RydWV9XHJcbiAgICAgICAgdG9wPXswfVxyXG4gICAgICAgIGFjdGl2ZUNsYXNzPVwiaXMtc3RpY2t5XCJcclxuICAgICAgICBpbm5lclo9ezEwMH1cclxuICAgICAgICBvblN0YXRlQ2hhbmdlPXtoYW5kbGVTdGF0ZUNoYW5nZX1cclxuICAgICAgPlxyXG4gICAgICAgIDxCb3hcclxuICAgICAgICAgIGFzPVwiaGVhZGVyXCJcclxuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGVyfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtzdGF0ZS5pc1N0aWNreSA/ICdpcy1zdGlja3knIDogJyd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgIDxMb2dvIHN4PXtzdHlsZXMubG9nb30gaXNTdGlja3k9e3N0YXRlLmlzU3RpY2t5fSAvPlxyXG4gICAgICAgICAgICA8RmxleCBzeD17c3R5bGVzLmJ1dHRvbkdyb3VwfT5cclxuICAgICAgICAgICAgICA8TmF2YmFyXHJcbiAgICAgICAgICAgICAgICBpc1N0aWNreT17c3RhdGUuaXNTdGlja3l9XHJcbiAgICAgICAgICAgICAgICBpc01vYmlsZT17c3RhdGUuaXNNb2JpbGVNZW51fVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xvc2VNZW51PXtoYW5kbGVDbG9zZU1lbnV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgICAgICAgPEhhbWJ1cmdlck1lbnVcclxuICAgICAgICAgICAgICBzeD17c3R5bGVzLmhhbWJ1cmdlcn1cclxuICAgICAgICAgICAgICBpc1N0aWNreT17c3RhdGUuaXNTdGlja3l9XHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtzdGF0ZS5pc01vYmlsZU1lbnV9XHJcbiAgICAgICAgICAgICAgdG9nZ2xlTW9iaWxlTWVudT17dG9nZ2xlTW9iaWxlTWVudX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L1N0aWNreT5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGhlYWRlcjoge1xyXG4gICAgcG9zaXRpb246ICdmaXhlZCcsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBweTogNCxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAnJi5pcy1zdGlja3knOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgYm94U2hhZG93OiAnMCA2cHggMTNweCByZ2JhKDM4LDc4LDExOCwwLjEpJyxcclxuICAgICAgcGFkZGluZ1RvcDogJzE1cHgnLFxyXG4gICAgICBwYWRkaW5nQm90dG9tOiAnMTVweCcsXHJcbiAgICB9LFxyXG4gICAgJyYuaXMtbW9iaWxlLW1lbnUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIG1yOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgbnVsbCwgMTJdLFxyXG4gIH0sXHJcbiAgYnV0dG9uR3JvdXA6IHtcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsb2dpbjoge1xyXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgnXSxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgcDogMCxcclxuICAgIG1yOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNV0sXHJcbiAgICBzdmc6IHtcclxuICAgICAgbXI6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgam9pbkNvbW11bml0eToge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgbWluSGVpZ2h0OiBbMzAsIG51bGwsIG51bGwsIDQwXSxcclxuICAgIHA6IFsnMCAxMnB4JywgbnVsbCwgbnVsbCwgJzAgMTRweCddLFxyXG4gICAgZm9udFNpemU6IFsnMTBweCcsIG51bGwsIG51bGwsIDFdLFxyXG4gIH0sXHJcbiAgaGFtYnVyZ2VyOiB7XHJcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIExpbmsgYXMgQSwgRmxleCwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcbmltcG9ydCBtZW51SXRlbXNQYWdlcyBmcm9tICcuL2hlYWRlci5kYXRhLnBhZ2VzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGlzU3RpY2t5LCBpc01vYmlsZSwgaGFuZGxlQ2xvc2VNZW51IH0pID0+IHtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICBzeD17c3R5bGVzLm5hdmJhcn1cclxuICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyJHtpc01vYmlsZSA/ICcgaXMtbW9iaWxlJyA6ICcnfSR7XHJcbiAgICAgICAgaXNTdGlja3kgPyAnIGlzLXN0aWNreScgOiAnJ1xyXG4gICAgICB9YH1cclxuICAgID5cclxuICAgICAge2FzUGF0aCA9PT0gJy8nID8gKFxyXG4gICAgICAgIG1lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmsga2V5PXtpfSBwYXRoPXtwYXRofSBsYWJlbD17bGFiZWx9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVudX0gLz5cclxuICAgICAgICApKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIG1lbnVJdGVtc1BhZ2VzLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICA8TGluayBrZXk9e2l9IHBhdGg9e3BhdGh9IGxhYmVsPXtsYWJlbH0gb25DbGljaz17aGFuZGxlQ2xvc2VNZW51fSAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICl9XHJcblxyXG4gICAgICA8TmV4dExpbmsgcGFzc0hyZWYgaHJlZj1cImh0dHBzOi8vd3d3LmJ1c2luZXNzaW5mb3JtYXRpdm9zLmNvbS5ici9hcmVhLXJlc3RyaXRhL3Zlci1yZXZpc3Rhcy5waHA/dWlkPU1UazJOUSUzRCUzRFwiPlxyXG4gICAgICAgIDxBIHN4PXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIn19IHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgUmV2aXN0YSBPbmxpbmVcclxuICAgICAgICA8L0E+XHJcbiAgICAgIDwvTmV4dExpbms+XHJcblxyXG4gICAgICA8QnV0dG9uIHN4PXtzdHlsZXMuYnV0dG9ufSBhcz1cImFcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cHM6Ly9wbGF5Lmdvb2dsZS5jb20vc3RvcmUvYXBwcy9kZXRhaWxzP2lkPWNvbS5zZXJ2Y29uXCI+QmFpeGUgTm9zc28gQXBwPC9CdXR0b24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIG5hdmJhcjoge1xyXG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxyXG4gICAgZmxleEdyb3c6IFtudWxsLCBudWxsLCBudWxsLCAxXSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnKyBhJzoge1xyXG4gICAgICAgIG1sOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDExcHggMzBweCByZ2JhKDUxLCA4MywgMTQ1LCAwLjA3KScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogNzAsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCAwJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuM3MgZWFzZSAwcycsXHJcbiAgICAgICcmLmlzLXN0aWNreSc6IHtcclxuICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2YzZjNmMycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmLmlzLW1vYmlsZSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxyXG4gICAgICB9LFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgJysgYSc6IHtcclxuICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZjNmM2YzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmLmlzLXN0aWNreSc6IHtcclxuICAgICAgdG9wOiA2MCxcclxuICAgICAgYToge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtbDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgcDogMixcclxuICAgIGNvbG9yOiBcIndoaXRlICFpbXBvcnRhbnRcIixcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2NrKHsgZmlsbCwgd2lkdGgsIGhlaWdodCwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPXt3aWR0aCA/PyAxNn1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHQgPz8gMjB9XHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMjBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTE1LjE1NiAxNi44OTN2LTYuODExYTIuMjM3IDIuMjM3IDAgMDAtMi4yMzItMi4yMzNoLS41NjJWNC43MDdBNC43MTMgNC43MTMgMCAwMDcuNjU0IDBhNC43MTIgNC43MTIgMCAwMC00LjcwMyA0LjcwN3YuNTQzYzAgLjM3LjMuNjY3LjY2Ny42NjcuMzY3IDAgLjY3Mi0uMy42NzItLjY2N3YtLjU0M0EzLjM3MiAzLjM3MiAwIDAxNy42NTggMS4zNGEzLjM3MiAzLjM3MiAwIDAxMy4zNjkgMy4zNjhWNy44NUgyLjM4OWMtMS4yMyAwLTIuMjMzIDEtMi4yMzMgMi4yMzN2Ni44MTFhMi4yMzcgMi4yMzcgMCAwMDIuMjMzIDIuMjMzaDEwLjUzOGEyLjIzNiAyLjIzNiAwIDAwMi4yMy0yLjIzM3ptLTEzLjY1NyAwdi02LjgxMWMwLS40OTIuNDAyLS44OTQuODk0LS44OTRoMTAuNTM1Yy40OTEgMCAuODkzLjQwMi44OTMuODk0djYuODExYS44OTYuODk2IDAgMDEtLjg5My44OTRIMi4zODhhLjg5NS44OTUgMCAwMS0uODg5LS44OTR6XCJcclxuICAgICAgICBmaWxsPXtmaWxsID8/ICcjZmZmJ31cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTcuNjU3IDExLjk5YS42Ny42NyAwIDAwLS42NzIuNjY4djEuNzNjMCAuMzcuMy42NjcuNjcyLjY2Ny4zNyAwIC42NjctLjMuNjY3LS42Njh2LTEuNzI5YS42NjcuNjY3IDAgMDAtLjY2Ny0uNjY3elwiXHJcbiAgICAgICAgZmlsbD17ZmlsbCA/PyAnI2ZmZid9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NrO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9nbyA9ICh7IHdoaXRlLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxODUuOTIgMzYuNjJcIiB3aWR0aD17MTg1LjkyfSBoZWlnaHQ9ezM2LjYyfSB7Li4ucHJvcHN9PlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19iXCJcclxuICAgICAgICAgIHgxPXsxNi4wOH1cclxuICAgICAgICAgIHkxPXstMTYuNTJ9XHJcbiAgICAgICAgICB4Mj17MTAuMjZ9XHJcbiAgICAgICAgICB5Mj17MjAuNDR9XHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzAwOTZkOVwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwMGMxOThcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fY1wiXHJcbiAgICAgICAgICB4MT17OC45NX1cclxuICAgICAgICAgIHkxPXsxMy40OH1cclxuICAgICAgICAgIHgyPXsxOC4yOH1cclxuICAgICAgICAgIHkyPXszMi4wMn1cclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjMDAyZGQ5XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzAwYjJhYlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19hXCJcclxuICAgICAgICAgIHgxPXsyMy4zM31cclxuICAgICAgICAgIHkxPXstMy4zOX1cclxuICAgICAgICAgIHgyPXs1LjY2fVxyXG4gICAgICAgICAgeTI9ezM3LjY1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiMzNDgyYzBcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjQ1fSBzdG9wQ29sb3I9XCIjOTZiZWRlXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44M30gc3RvcENvbG9yPVwiI2UxZWRmNlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNmZmZcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fZFwiXHJcbiAgICAgICAgICB4MT17MjEuNjR9XHJcbiAgICAgICAgICB5MT17MS40Mn1cclxuICAgICAgICAgIHgyPXs2LjYzfVxyXG4gICAgICAgICAgeTI9ezMwLjQ0fVxyXG4gICAgICAgICAgeGxpbmtIcmVmPVwiI3ByZWZpeF9fYVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19lXCJcclxuICAgICAgICAgIHgxPXsyNS4xNX1cclxuICAgICAgICAgIHkxPXszLjI0fVxyXG4gICAgICAgICAgeDI9ezEwLjE0fVxyXG4gICAgICAgICAgeTI9ezMyLjI1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiM1NjlmYTFcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjM2fSBzdG9wQ29sb3I9XCIjOTdjNGM1XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44fSBzdG9wQ29sb3I9XCIjZTJlZWVmXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8cmFkaWFsR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19mXCJcclxuICAgICAgICAgIGN4PXsyMS4xNn1cclxuICAgICAgICAgIGN5PXszMi4wNX1cclxuICAgICAgICAgIHI9ezI3LjI1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiNmZjBcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSAvPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGcgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIkxheWVyIDFcIj5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMzkuNjQgMjIuOWgyLjg1YTEuODYgMS44NiAwIDAwLjkgMS40IDMuNjcgMy42NyAwIDAwMiAuNTMgMy4zMyAzLjMzIDAgMDAxLjktLjVBMS41IDEuNSAwIDAwNDggMjNhMS4zMiAxLjMyIDAgMDAtLjU0LTEuMSA0LjkxIDQuOTEgMCAwMC0xLjgzLS43MWwtMS44NC0uNFE0MCAyMCA0MCAxNi45YTMuODEgMy44MSAwIDAxMS41LTMuMTMgNi4xNCA2LjE0IDAgMDEzLjg5LTEuMTkgNi4wNyA2LjA3IDAgMDEzLjg5IDEuMTYgMy44NiAzLjg2IDAgMDExLjUgMy4wOEg0OGExLjc3IDEuNzcgMCAwMC0uNzktMS40IDMgMyAwIDAwLTEuODItLjUyIDMgMyAwIDAwLTEuNzcuNDggMS40OSAxLjQ5IDAgMDAtLjY2IDEuMjYgMS4yNSAxLjI1IDAgMDAuNTMgMS4wNSA1LjI5IDUuMjkgMCAwMDEuNzcuNjhsMS43MS4zNkE2LjE4IDYuMTggMCAwMTUwIDIwLjE0YTMuNDIgMy40MiAwIDAxMSAyLjU2IDMuOTMgMy45MyAwIDAxLTEuNTUgMy4zIDYuNjMgNi42MyAwIDAxLTQuMTcgMS4yIDYuNjUgNi42NSAwIDAxLTQuMDYtMS4yIDMuOSAzLjkgMCAwMS0xLjU4LTMuMXpNNTMuMzMgMTRoMi44NXYyLjQyaDEuOTN2Mi4xOGgtMS45M3Y1YzAgLjc4LjQxIDEuMTggMS4yMyAxLjE4YTQuNDQgNC40NCAwIDAwLjY5LS4wNXYyLjFhNi4xMiA2LjEyIDAgMDEtMS4zNi4xMSA0LjEgNC4xIDAgMDEtMi42My0uNjYgMi43NCAyLjc0IDAgMDEtLjc4LTIuMlYxOC42aC0xLjQ4di0yLjE1aDEuNDh6bTEwLjI5IDExYTIuMzkgMi4zOSAwIDAwMS42LS41NSAxLjc0IDEuNzQgMCAwMC42Ni0xLjM5di0uNzZsLTIuMi4xM2EyLjMgMi4zIDAgMDAtMS4yNC40IDEuMDkgMS4wOSAwIDAwLS40My45IDEuMSAxLjEgMCAwMC40NC45MyAxLjgzIDEuODMgMCAwMDEuMTcuMzR6bS0uOTQgMi4wNmEzLjYgMy42IDAgMDEtMi41MS0uODkgMi45MiAyLjkyIDAgMDEtMS0yLjI4IDIuNjggMi42OCAwIDAxMS0yLjI0IDUuNDMgNS40MyAwIDAxMy0uOTNsMi42My0uMTV2LS43YTEuNCAxLjQgMCAwMC0uNDctMS4xMyAxLjkxIDEuOTEgMCAwMC0xLjI4LS40MSAyLjIgMi4yIDAgMDAtMS4yOC4zNSAxLjQ0IDEuNDQgMCAwMC0uNi45NWgtMi41M0EzLjIxIDMuMjEgMCAwMTYxIDE3LjE3YTUuMzEgNS4zMSAwIDAxMy4yOS0xIDUuMDUgNS4wNSAwIDAxMy4yMyAxIDMuMDkgMy4wOSAwIDAxMS4yMSAyLjU0djcuMmgtMi44di0xLjZoLS4wNmEzLjA4IDMuMDggMCAwMS0xLjMgMS4zIDMuODkgMy44OSAwIDAxLTEuODkuNDd6bTcuODUtLjE2VjE2LjQ1aDIuNzZ2MS44OGguMDZhMi44NiAyLjg2IDAgMDEuOTEtMS41MiAyLjQzIDIuNDMgMCAwMTEuNTgtLjUzIDIuODggMi44OCAwIDAxLjgxLjExdjIuNTFhMi43OSAyLjc5IDAgMDAtMS0uMTcgMi4xNiAyLjE2IDAgMDAtMS42NC42MiAyLjM5IDIuMzkgMCAwMC0uNTkgMS43MnY1Ljg1em04LTEyLjg5aDIuODV2Mi40MmgxLjk0djIuMTdoLTEuODl2NWMwIC43OC40MSAxLjE4IDEuMjMgMS4xOGE0LjY4IDQuNjggMCAwMC43LS4wNXYyLjFBNi4yNCA2LjI0IDAgMDE4MiAyN2E0LjE1IDQuMTUgMCAwMS0yLjY0LS42NiAyLjc0IDIuNzQgMCAwMS0uNzgtMi4yVjE4LjZoLTEuNDd2LTIuMTVoMS40N3ptMTYgMi40MnYxMC40OWgtMi42OVYyNWgtLjA2YTMuMDcgMy4wNyAwIDAxLTMuMTMgMi4wOCAzLjcxIDMuNzEgMCAwMS0yLjc1LTEgNCA0IDAgMDEtMS0yLjg3di02Ljc2aDIuODV2Ni4xNWEyLjI4IDIuMjggMCAwMC41IDEuNTkgMS44NiAxLjg2IDAgMDAxLjQ1LjU1IDEuOSAxLjkgMCAwMDEuNTEtLjYzIDIuNCAyLjQgMCAwMC41NS0xLjY3di02em04LS4xN2EzLjc5IDMuNzkgMCAwMTMuMTQgMS40NCA2LjE0IDYuMTQgMCAwMTEuMTUgNCA2LjMzIDYuMzMgMCAwMS0xLjEzIDQgNC4xIDQuMSAwIDAxLTUuMDkuOTIgMy4xNSAzLjE1IDAgMDEtMS4yNy0xLjQxaC0uMDN2NS4xN2gtMi44NVYxNi40NWgyLjgxdjEuODJoLjA2YTMuMzUgMy4zNSAwIDAxMS4yNy0xLjQ2IDMuNyAzLjcgMCAwMTEuOTctLjUzem0tMSA4LjUxYTIgMiAwIDAwMS43Ny0uNzcgMy43MSAzLjcxIDAgMDAuNjMtMi4yNyAzLjY3IDMuNjcgMCAwMC0uNjMtMi4yNiAyIDIgMCAwMC0xLjY5LS44NSAyIDIgMCAwMC0xLjY4Ljg2IDMuNiAzLjYgMCAwMC0uNjQgMi4yNSAzLjczIDMuNzMgMCAwMC42MyAyLjI3IDIgMiAwIDAwMS42OS43OXptMjIuMDctLjMydjIuNDVoLTkuMTFWMTIuODJoM3YxMS42NXptNS41NS41NWEyLjM5IDIuMzkgMCAwMDEuNi0uNTUgMS43NCAxLjc0IDAgMDAuNjYtMS4zOXYtLjc2bC0yLjIuMTNhMi4zIDIuMyAwIDAwLTEuMjQuNCAxLjA5IDEuMDkgMCAwMC0uNDMuOSAxLjEgMS4xIDAgMDAuNDQuOTMgMS44MyAxLjgzIDAgMDAxLjI1LjM0em0tLjk0IDIuMDZhMy41OSAzLjU5IDAgMDEtMi41MS0uODkgMi45MiAyLjkyIDAgMDEtMS0yLjI4IDIuNjggMi42OCAwIDAxMS0yLjI0IDUuNDMgNS40MyAwIDAxMy0uOTNsMi42My0uMTV2LS43YTEuNDMgMS40MyAwIDAwLS40Ny0xLjEzIDEuOTEgMS45MSAwIDAwLTEuMjgtLjQxIDIuMTggMi4xOCAwIDAwLTEuMjguMzUgMS40NCAxLjQ0IDAgMDAtLjYuOTVoLTIuNjFhMy4yMSAzLjIxIDAgMDExLjMyLTIuNDggNS4zMSA1LjMxIDAgMDEzLjI5LTEgNS4wNyA1LjA3IDAgMDEzLjIzIDEgMy4wOSAzLjA5IDAgMDExLjIxIDIuNTR2Ny4yaC0yLjc2di0xLjU4aC0uMDZhMy4wOCAzLjA4IDAgMDEtMS4zIDEuMyAzLjg5IDMuODkgMCAwMS0xLjczLjQ3em03Ljg1LS4xNlYxNi40NWgyLjc2djEuODZoLjE4YTMuMjYgMy4yNiAwIDAxMS4yNS0xLjUyIDMuNiAzLjYgMCAwMTItLjU0IDMuNDYgMy40NiAwIDAxMi42OCAxIDQuMTIgNC4xMiAwIDAxMSAyLjg4djYuNzVIMTQzdi02LjEyYTIuMzEgMi4zMSAwIDAwLS40OS0xLjU5IDEuODMgMS44MyAwIDAwLTEuNDQtLjU1IDIgMiAwIDAwLTEuNTIuNjMgMi4zOSAyLjM5IDAgMDAtLjU3IDEuNjZ2NnptMTUuNDEuMTZhMy43NSAzLjc1IDAgMDEtMy4xMS0xLjQ1IDYuMjEgNi4yMSAwIDAxLTEuMTUtNCA2LjExIDYuMTEgMCAwMTEuMTUtMy45MyAzLjc5IDMuNzkgMCAwMTMuMTMtMS40NSAzLjUzIDMuNTMgMCAwMTIgLjU0IDMuMTcgMy4xNyAwIDAxMS4yNSAxLjQydi01LjM3aDIuODZ2MTQuMWgtMi44MnYtMS44aC0uMDVhMy4wOSAzLjA5IDAgMDEtMS4yNiAxLjQyIDMuNjcgMy42NyAwIDAxLTEuOTIuNTR6bTEtOC41MWEyIDIgMCAwMC0xLjcuODQgMy43NSAzLjc1IDAgMDAtLjYxIDIuMjcgMy43NiAzLjc2IDAgMDAuNjEgMi4yOCAyLjE1IDIuMTUgMCAwMDMuMzkgMCAzLjcyIDMuNzIgMCAwMC42My0yLjI4IDMuNjcgMy42NyAwIDAwLS42My0yLjI2IDIgMiAwIDAwLTEuNjQtLjgzem03LjExIDguMzVWMTYuNDVoMi44NXYxMC40N3ptMi41MS0xMi4wNWExLjUyIDEuNTIgMCAwMS0xLjA5LjQyIDEuNDkgMS40OSAwIDAxLTEuMDgtLjQyIDEuNDQgMS40NCAwIDAxLS40NC0xIDEuMzggMS4zOCAwIDAxLjQ0LTEgMS40NiAxLjQ2IDAgMDExLjA4LS40MyAxLjQ5IDEuNDkgMCAwMTEuMDkuNDMgMS4zOCAxLjM4IDAgMDEuNDQgMSAxLjQ0IDEuNDQgMCAwMS0uMzkgMS4wMnptMi4yNCAxMi4wNVYxNi40NWgyLjc2djEuODZoLjA2YTMuMjYgMy4yNiAwIDAxMS4yNS0xLjUyIDMuNiAzLjYgMCAwMTItLjU0IDMuNDQgMy40NCAwIDAxMi42OCAxIDQuMDcgNC4wNyAwIDAxLjk1IDIuODh2Ni43NWgtMi44NXYtNi4xMmEyLjMxIDIuMzEgMCAwMC0uNDktMS41OSAxLjc5IDEuNzkgMCAwMC0xLjQzLS41NSAyIDIgMCAwMC0xLjUzLjYzIDIuNDMgMi40MyAwIDAwLS41NiAxLjY2djZ6bTE2LjM2LTIuMjNhMi4wNSAyLjA1IDAgMDAxLjctLjggMy40OCAzLjQ4IDAgMDAuNjQtMi4yMyAzLjYgMy42IDAgMDAtLjY0LTIuMjUgMiAyIDAgMDAtMS43LS44NCAyIDIgMCAwMC0xLjY4Ljg0IDMuNjkgMy42OSAwIDAwLS42MSAyLjI1IDMuNiAzLjYgMCAwMC42MSAyLjIzIDIgMiAwIDAwMS43My44MnptLS4wNSA2LjE3YTUuODQgNS44NCAwIDAxLTMuMzYtLjkgMy4xOSAzLjE5IDAgMDEtMS40OC0yLjNoMi43OWExLjU0IDEuNTQgMCAwMC43NC44OCAyLjggMi44IDAgMDAxLjM5LjM0IDIuNDEgMi40MSAwIDAwMS42OS0uNTYgMS44NSAxLjg1IDAgMDAuNjEtMS40N1YyNUgxODNhMyAzIDAgMDEtMS4yNCAxLjM3IDMuODkgMy44OSAwIDAxLTIgLjUxIDMuOCAzLjggMCAwMS0zLjA5LTEuNDEgNS44OCA1Ljg4IDAgMDEtMS4xNS0zLjg0IDYuMDYgNi4wNiAwIDAxMS4xNS0zLjkyIDMuODIgMy44MiAwIDAxMy4xNC0xLjQ0IDMuNTkgMy41OSAwIDAxMiAuNTQgMy4zNyAzLjM3IDAgMDExLjI3IDEuNDV2LTEuODFoMi44MnYxMC4zMmEzLjU4IDMuNTggMCAwMS0xLjQ0IDMgNiA2IDAgMDEtMy43NyAxLjA5elwiXHJcbiAgICAgICAgICAgIGZpbGw9e3doaXRlID8gJ3doaXRlJyA6ICcjMGYyMTM3J31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTE5LjguNTNBMTUuNzMgMTUuNzMgMCAwMDQuNjUgMjYuODlMMjIuMTcgOS4zN0E1LjI5IDUuMjkgMCAwMDE5LjguNTN6XCJcclxuICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19iKVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk02LjY1IDM2LjA5QTE1LjczIDE1LjczIDAgMDAyMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODR6XCJcclxuICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19jKVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0yMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODQgMTUuNzIgMTUuNzIgMCAwMDUuNzUuNDRjLTcuNjgtNy4zOSA5LjQxLTI2LjggOS40MS0yNi44elwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNwcmVmaXhfX2EpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Z1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTYuMzMgMzZjLTIuNDktNy43IDEyLjQ1LTIzLjIxIDE1LjA5LTI1Ljg3TDQuMjkgMjcuMjVBNS4yOCA1LjI4IDAgMDA2LjMzIDM2elwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19kKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuNzUgOS43OWwuMDYtLjA2elwiIGZpbGw9XCJ1cmwoI3ByZWZpeF9fZSlcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0yMy40NSA3LjI5TDQuNjQgMjYuODggMjIuMTcgOS4zN2E1LjE0IDUuMTQgMCAwMDEuMjgtMi4wOHpcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ3NjcmVlbicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3ByZWZpeF9fZilcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSBhcyBJbWcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIDxJbWcgc3JjPXtzcmN9IHsuLi5yZXN0fSAvPjtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyL2Zvb3Rlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExncGQoKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKClcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgYWNlaXRlTGdwZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjZWl0ZUxncGQnKVxyXG4gICAgYWNlaXRlTGdwZCA9PSBudWxsID8gc2V0SXNPcGVuKHRydWUpIDogc2V0SXNPcGVuKGZhbHNlKVxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTGdwZCgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FjZWl0ZUxncGQnLCB0cnVlKVxyXG4gICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGlzT3BlbiA/IChcclxuICAgICAgPGRpdiBzeD17IHN0eWxlcy5jb29raWVQb3B1cH0+XHJcbiAgICAgICAgPHA+RXN0ZSBzaXRlIG7Do28gdXRpbGl6YSBjb29raWVzIGUgbsOjbyBjYXB0dXJhIGRhZG9zLjwvcD5cclxuICAgICAgICA8ZGl2IHN4PXsgc3R5bGVzLmNvb2tpZVBvcHVwQWN0aW9ucyB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZUxncGR9Pk9rLCBlbnRlbmRpITwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb29raWVQb3B1cCA6IHtcclxuICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGJvdHRvbTogJzEuMjVyZW0nLFxyXG4gICAgcGFkZGluZzogJzAuNjI1cmVtIDAuOTM3NXJlbScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDAgMC42MjVyZW0gMCByZ2JhKDAsMCwwLCAuMTUpJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxNTAlJyxcclxuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IC41cycsXHJcbiAgICBvcGFjaXR5OiAnMScsXHJcbiAgICB6SW5kZXg6ICcyJyxcclxuICAgIHJpZ2h0OiAnNCUnLFxyXG4gICAgd2lkdGg6ICc5MiUnLFxyXG4gICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICdza3libHVlJyxcclxuICAgICAgJyY6dmlzaXRlZCc6IHtcclxuICAgICAgICBjb2xvcjogJ3NreWJsdWUnLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvb2tpZVBvcHVwQWN0aW9uczoge1xyXG4gICAgZmxleDogJzEnLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgICAgZm9udFN0eWxlOiAnaW5oZXJpdCcsXHJcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRTaXplOiAgJzAuNzVyZW0nLFxyXG4gICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGpzeCwgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIGFzIE1lbnVMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudUxpbmtcclxuICAgICAgdG89e3BhdGh9XHJcbiAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIlxyXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7bGFiZWx9XHJcbiAgICA8L01lbnVMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICA8QSB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L0E+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZWFybk1vcmUoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XHJcbiAgICAgIDxBIHN4PXtzdHlsZXMubGVhcm5Nb3JlfSB7Li4ucmVzdH0+XHJcbiAgICAgICAge2xhYmVsID8/ICdMZWFybiBNb3JlJ30gPElvSW9zQXJyb3dGb3J3YXJkIHNpemU9XCIxNnB4XCIgLz5cclxuICAgICAgPC9BPlxyXG4gICAgPC9OZXh0TGluaz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBmYWRlUmlnaHQgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4gIH1cclxuICB0bzoge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbGVhcm5Nb3JlOiB7XHJcbiAgICBjb2xvcjogJ2xpbmsnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBzdmc6IHtcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgzcHgpJyxcclxuICAgIH0sXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVSaWdodH0gMC41cyBsaW5lYXJgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5pbXBvcnQgTG9nb1N2ZyBmcm9tICdjb21wb25lbnRzL2ljb25zL2xvZ28nO1xyXG5pbXBvcnQgbG9nbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ28ucG5nJ1xyXG5pbXBvcnQgbG9nb0JyYW5jbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ29fYnJhbmNvLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oeyBpc1N0aWNreSwgZm9vdGVyLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIHBhdGg9XCIvXCIgc3g9e3N0eWxlcy5sb2dvfSB7Li4ucHJvcHN9PlxyXG4gICAgICB7aXNTdGlja3kgPyAoXHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvQnJhbmNvfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICApfVxyXG4gICAgICB7LyogPExvZ29Tdmcgd2hpdGU9eyFpc1N0aWNreX0gLz4gKi99XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbG9nbzoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBzdmc6IHtcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIHdpZHRoOiBbMTI4LCBudWxsLCAnMTAwJSddLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgU2VjdGlvbkhlYWRpbmcgPSAoeyB0aXRsZSwgc2xvZ2FuLCBkZXNjcmlwdGlvbiwgZW1vamksIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmhlYWRpbmd9IHsuLi5wcm9wc30+XHJcbiAgICAgIHtzbG9nYW4gJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuc2xvZ2FufT5cclxuICAgICAgICAgIHtzbG9nYW59XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfVxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAge2Vtb2ppID8gPHNwYW4+e3RpdGxlfTwvc3Bhbj4gOiB0aXRsZX1cclxuICAgICAgICB7ZW1vamkgJiYgPEltYWdlIHNyYz17ZW1vaml9IGFsdD1cImVtb2ppXCIgLz59XHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRpbmc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGluZzoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG1heFdpZHRoOiA2NjAsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8gNTBweCcsXHJcbiAgfSxcclxuICBzbG9nYW46IHtcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogMixcclxuICAgIGxpbmVIZWlnaHQ6IDIuNSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCBudWxsLCA2XSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjMzLCAxLjMzLCAxLjVdLFxyXG4gICAgbGV0dGVyU3BhY2luZzogW251bGwsIG51bGwsIG51bGwsICdoZWFkaW5nJ10sXHJcbiAgICBpbWc6IHtcclxuICAgICAgbWw6IFsnMTVweCddLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdG9wOiAnOHB4JyxcclxuICAgICAgbWF4V2lkdGg6IFsyNSwgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCAnMTZweCddLFxyXG4gICAgbGluZUhlaWdodDogWzEuODYsIG51bGwsIDIuMl0sXHJcbiAgICBtdDogWzVdLFxyXG4gICAgbWF4V2lkdGg6IDYxMCxcclxuICAgIG06IFsnMTBweCBhdXRvIDAnXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU0VPKHtcclxuICBkZXNjcmlwdGlvbiA9ICdzdGFydHVwIGxhbmRpbmcgZGVzY3JpcHRpb25zJyxcclxuICBhdXRob3IgPSAnUmVkUSwgSW5jJyxcclxuICBtZXRhLFxyXG4gIHRpdGxlID0gJ3N0YXJ0dXAgbGFuZGluZyB0aXRsZScsXHJcbn0pIHtcclxuICBjb25zdCBtZXRhRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxyXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcclxuICAgICAgY29udGVudDogYHN1bW1hcnlgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y3JlYXRvcmAsXHJcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICBdLmNvbmNhdChtZXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcblNFTy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZzogYGVuYCxcclxuICBtZXRhOiBbXSxcclxuICBkZXNjcmlwdGlvbjogYGAsXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJ1dHRvbiwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQnNBcnJvd0xlZnQsIEJzQXJyb3dSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTbGlja0Fycm93ID0gKHsgY2xhc3NOYW1lLCBvbkNsaWNrLCBjb250cm9sIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICB2YXJpYW50PVwidGV4dFwiXHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzeD17c3R5bGVzLnBhZ2luYXRpb25CdXR0b259XHJcbiAgICA+XHJcbiAgICAgIHtjb250cm9sID09PSAncHJldicgPyAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICAgICAgUHJldlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJzQXJyb3dMZWZ0IHNpemU9XCIzMnB4XCIgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiIHZhcmlhbnQ9XCJzdHlsZXMuc3JPbmx5XCI+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxCc0Fycm93UmlnaHQgc2l6ZT1cIjMycHhcIiAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tBcnJvdztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwYWdpbmF0aW9uQnV0dG9uOiB7XHJcbiAgICBtaW5IZWlnaHQ6ICczMHB4JyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogMCxcclxuICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICcwIG5vbmUnLFxyXG4gICAgfSxcclxuICAgIHN2Zzoge1xyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMnLFxyXG4gICAgfSxcclxuICAgICcmLnNsaWNrLWRpc2FibGVkJzoge1xyXG4gICAgICBjb2xvcjogJyNCQkM3RDcnLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJi5zbGljay1wcmV2Jzoge1xyXG4gICAgICBsZWZ0OiAnY2FsYyg1MCUgLSAxNnB4KScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxyXG4gICAgfSxcclxuICAgICcmLnNsaWNrLW5leHQnOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNTAlKScsXHJcbiAgICAgIHJpZ2h0OiAnY2FsYyg1MCUgLSAxNnB4KScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdnZXJlbmNpYUBzZXJ2Y29uMS5jb20nLFxyXG4gICAgaW5mbzogJ21haWx0bzpnZXJlbmNpYUBzZXJ2Y29uMS5jb20nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICcoODgpIDM2NjktMTE0NicsXHJcbiAgICBpbmZvOiAndGVsOiA4ODM2NjkxMTQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnKDg4KSAzNjY5LTE1NzcnLFxyXG4gICAgaW5mbzogJ3RlbDogODgzNjY5MTU3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJyg4OCkgOTk2Ni04NjUyJyxcclxuICAgIGluZm86ICdodHRwczovL3dhLm1lLzU1ODg5OTY2ODY1MicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLnRvcGJhcn0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XHJcbiAgICAgICAgICBObyBtZXJjYWRvIGjDoSBtYWlzIGRlIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDAwfSBhbm9zLCBhdGVuZGVuZG8gYXMgZXhwZWN0YXRpdmFzIGRvcyBub3Nzb3MgY2xpZW50ZXMuXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cInRsZHNcIj5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoe2xhYmVsLCBpbmZvfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtpbmZvfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgdG9wYmFyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIHB4OiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBweTogWycxMnB4J10sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJ10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogWydzcGFjZS1iZXR3ZWVuJ10sXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiBbMV0sXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBtYXhXaWR0aDogMTM2NixcclxuICAgIHBsOiAnMzBweCcsXHJcbiAgICBwcjogJzMwcHgnLFxyXG4gICAgbTogJzAgYXV0bycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgc3Bhbjoge1xyXG4gICAgICAnKyBzcGFuJzoge1xyXG4gICAgICAgIG1sOiBbNF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5jYXB0aW9uJzoge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHJcbiAgICAgIHdpZHRoOiBbMTk5LCBudWxsLCBudWxsLCAnYXV0byddLFxyXG4gICAgICBvdmVyZmxvdzogWydoaWRkZW4nLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuICAgICAgd2hpdGVTcGFjZTogWydub3dyYXAnLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1yOiBbMiwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICAgICAgbWluV2lkdGg6IDIwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcudGxkcyc6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgnXSxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgc3Ryb25nOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgICcrIHN0cm9uZyc6IHtcclxuICAgICAgICBtbDogMyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgZm9udFNpemU6IFsnMTNweCcsIG51bGwsIG51bGwsIDEsIDFdLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBtbDogWzIsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxM10sXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1sOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpub3QoOmZpcnN0LWNoaWxkKSc6IHtcclxuICAgICAgICBtbDogNCxcclxuICAgICAgICBwbDogNCxcclxuICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkICNmZmZmZmYyMSdcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwicGFnZXMvYXBpL2FwaVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb3JtYWNvZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5mdW5jdGlvbiBvcmdhbml6YXJPYnJpZ2Fjb2VzUG9yRXN0YWRvKG9icmlnYWNvZXNHZXJhbCkge1xyXG4gIGNvbnN0IGVzcGlyaXRvU2FudG8gPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNjgpXHJcbiAgY29uc3QgbWF0b0dyb3Nzb0RvU3VsID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gNTQ0MylcclxuICBjb25zdCBtaW5hc0dlcmFpcyA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE2OSlcclxuICBjb25zdCByaW9HcmFuZGVEb1N1bCA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1NSlcclxuICBjb25zdCBwYXJhbmEgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTgpXHJcbiAgY29uc3QgcmlvRGVKYW5laXJvID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTUzKVxyXG4gIGNvbnN0IHNhbnRhQ2F0YXJpbmEgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTQpXHJcbiAgY29uc3Qgc2FvUGF1bG8gPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTIpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlc3Bpcml0b1NhbnRvOiBbIC4uLmVzcGlyaXRvU2FudG8gXSxcclxuICAgIG1hdG9Hcm9zc29Eb1N1bDogWyAuLi5tYXRvR3Jvc3NvRG9TdWwgXSxcclxuICAgIG1pbmFzR2VyYWlzOiBbIC4uLm1pbmFzR2VyYWlzIF0sXHJcbiAgICByaW9HcmFuZGVEb1N1bDogWyAuLi5yaW9HcmFuZGVEb1N1bCBdLFxyXG4gICAgcGFyYW5hOiBbIC4uLnBhcmFuYSBdLFxyXG4gICAgcmlvRGVKYW5laXJvOiBbIC4uLnJpb0RlSmFuZWlybyBdLFxyXG4gICAgc2FudGFDYXRhcmluYTogWyAuLi5zYW50YUNhdGFyaW5hIF0sXHJcbiAgICBzYW9QYXVsbzogWyAuLi5zYW9QYXVsbyBdLFxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbmZvcm1hY29lc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtub3RpY2lhcywgc2V0Tm90aWNpYXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW29icmlnYWNvZXMsIHNldE9icmlnYWNvZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2FnZW5kYSwgc2V0QWdlbmRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtjb3RhY29lcywgc2V0Q290YWNvZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwxID0gYXBpLmdldCgnbm90aWNpYXMnKVxyXG4gICAgY29uc3QgdXJsMiA9IGFwaS5nZXQoJ2NvdGFjb2VzJylcclxuICAgIGNvbnN0IHVybDMgPSBhcGkuZ2V0KCdvYnJpZ2Fjb2VzJylcclxuICAgIGNvbnN0IHVybDQgPSBhcGkuZ2V0KCdhZ2VuZGEnKVxyXG4gICAgYXhpb3MuYWxsKFt1cmwxLCB1cmwyLCB1cmwzLCB1cmw0XSlcclxuICAgICAgLnRoZW4oYXhpb3Muc3ByZWFkKCguLi5yZXNwb25zZXMpID0+IHtcclxuICAgICAgICBzZXROb3RpY2lhcyhyZXNwb25zZXNbMF0uZGF0YSlcclxuICAgICAgICBzZXRDb3RhY29lcyhyZXNwb25zZXNbMV0uZGF0YSlcclxuICAgICAgICBzZXRPYnJpZ2Fjb2VzKG9yZ2FuaXphck9icmlnYWNvZXNQb3JFc3RhZG8ocmVzcG9uc2VzWzJdLmRhdGEpKVxyXG4gICAgICAgIHNldEFnZW5kYShyZXNwb25zZXNbM10uZGF0YSlcclxuICAgICAgfSkpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW5mb3JtYWNvZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5vdGljaWFzLCBvYnJpZ2Fjb2VzLCBhZ2VuZGEsIGNvdGFjb2VzIH19PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvSW5mb3JtYWNvZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUluZm9ybWFjb2VzKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEluZm9ybWFjb2VzQ29udGV4dClcclxuICByZXR1cm4gY29udGV4dFxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vc2VydmNvbjEudmVyY2VsLmFwcC9hcGknXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XHJcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnc2VjdGlvbnMvc2VydmljZXMnO1xyXG5pbXBvcnQgUHJlbWl1bUZlYXR1cmUgZnJvbSAnc2VjdGlvbnMvcHJlbWl1bS1mZWF0dXJlJztcclxuaW1wb3J0IFVsdGltYXRlRmVhdHVyZXMgZnJvbSAnc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZSc7XHJcbmltcG9ydCBDdXN0b21lclN1cHBvcnQgZnJvbSAnc2VjdGlvbnMvY3VzdG9tZXItc3VwcG9ydCc7XHJcbmltcG9ydCBQcmljaW5nIGZyb20gJ3NlY3Rpb25zL3ByaWNpbmcnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJ3NlY3Rpb25zL3Rlc3RpbW9uaWFscyc7XHJcbmltcG9ydCBCbG9nIGZyb20gJ3NlY3Rpb25zL2Jsb2cnO1xyXG5pbXBvcnQgRmFxIGZyb20gJ3NlY3Rpb25zL2ZhcSc7XHJcbmltcG9ydCBTdXBwb3J0IGZyb20gJ3NlY3Rpb25zL3N1cHBvcnQnO1xyXG5pbXBvcnQgTGdwZCBmcm9tICdjb21wb25lbnRzL2xncGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTRU9cclxuICAgICAgICAgIHRpdGxlPVwiU0VSVkNPTiBTZXJ2acOnb3MgZGUgQ29udGFiaWxpZGFkZVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlByZXN0YXIgc2VydmnDp29zIGNvbnTDoWJlaXMgZSBhc3Nlc3NvcmlhIGRlIHF1YWxpZGFkZSwgYnVzY2FuZG8gYXRlbmRlciBhcyBuZWNlc3NpZGFkZXMgZGUgbm9zc29zIGNsaWVudGVzIGUgcGFyY2Vpcm9zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8UHJlbWl1bUZlYXR1cmUgLz5cclxuICAgICAgICA8VWx0aW1hdGVGZWF0dXJlcyAvPlxyXG4gICAgICAgIDxDdXN0b21lclN1cHBvcnQgLz5cclxuICAgICAgICA8UHJpY2luZyAvPlxyXG4gICAgICAgIHsvKiA8VGVzdGltb25pYWxzIC8+ICovfVxyXG4gICAgICAgIDxTZXJ2aWNlcyAvPlxyXG4gICAgICAgIDxCbG9nIC8+XHJcbiAgICAgICAgPExncGQgLz5cclxuICAgICAgICB7LyogPFN1cHBvcnQgLz4gKi99XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAganN4LFxyXG4gIEJveCxcclxuICBGbGV4LFxyXG4gIFRleHQsXHJcbiAgSGVhZGluZyxcclxuICBDb250YWluZXIsXHJcbn0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgYmFubmVyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyMS5wbmcnXHJcbmltcG9ydCB7IEFpT3V0bGluZVdoYXRzQXBwLCBBaU91dGxpbmVQaG9uZSwgQWlPdXRsaW5lSW5zdGFncmFtLCBBaU91dGxpbmVGYWNlYm9vaywgQWlPdXRsaW5lTWFpbCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0FuaW1hdGVkfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJob21lXCIgc3g9e3N0eWxlcy5zZWN0aW9ufSA+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEFuaW1hdGVkIGFuaW1hdGlvbkluPVwiYm91bmNlSW5MZWZ0XCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiIGlzVmlzaWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5kb21haW5DYXJkfT5cclxuICAgICAgICAgICAgICA8SGVhZGluZz5VbSBub3ZvIHBlcmZpbCBkZSA8VGV4dCBhcz1cInNwYW5cIiBjb2xvcj0nc2Vjb25kYXJ5Jz5lbXByZXNhIGNvbnTDoWJpbDwvVGV4dD48L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgbWI9ezZ9PlxyXG4gICAgICAgICAgICAgICAgUXVlcmVtb3MgZW50ZW5kZXIgbyBxdWUgdm9jw6ogcHJlY2lzYSwgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBFbnRyZSBlbSBjb250YXRvXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuaW5wdXRHcm91cH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93YS5tZS81NTg4OTk2Njg2NTJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVdoYXRzQXBwIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ0ZWw6ODgzNjY5MTE0NlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGhvbmUgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2VydmNvbmppam9jYS9cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUluc3RhZ3JhbSBzaXplPVwiM2VtXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlcnZjb25qaWpvY2FcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUZhY2Vib29rIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86Z2VyZW5jaWFAc2VydmNvbjEuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVNYWlsIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzZXJ2ZXJSYWNrfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cInNldmVyLXJhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYW5uZXJ9KWAsXHJcbiAgICBwdDogWzE3LCBudWxsLCBudWxsLCAyMCwgbnVsbF0sXHJcbiAgICBwYjogWzYsIG51bGwsIG51bGwsIDEyLCAxNl0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBnYXA6IFsnMzBweCA2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHggNDBweCcsICczMHB4IDYwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIG1pbkhlaWdodDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc2NnZoJywgJzgxdmgnXSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAnMWZyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcclxuICAgICAgJzUxMHB4IDFmcicsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgZG9tYWluQ2FyZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZmJjJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAyNHB4IDUwcHggcmdiYSg1NCwgOTEsIDEyNSwgMC4wNSknLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBgMTVweCAzMHB4YCxcclxuICAgIHA6IFsnMzBweCAyNXB4IDUwcHgnLCBudWxsLCBudWxsLCAnNDBweCA0MHB4IDYwcHgnXSxcclxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMCBhdXRvJywgJ3Vuc2V0J10sXHJcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDQ4MCwgJ25vbmUnXSxcclxuICAgIGgyOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgZm9udFNpemU6IFs4LCBudWxsLCBudWxsLCAxMCwgOSwgMTRdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjM2LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgNywgOF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5wdXRHcm91cDoge1xyXG4gICAgYToge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICBweDogWzMsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXHJcbiAgICAgIHA6IDAsXHJcbiAgICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogMS4zMyxcclxuICAgICAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuNCksXHJcbiAgICAgIH0sXHJcbiAgICAgICc6LXdlYmtpdC1hdXRvZmlsbCc6IHtcclxuICAgICAgICBXZWJraXRCb3hTaGFkb3c6ICcwIDAgMCAzMHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMzLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXHJcbiAgICAgIG1pbldpZHRoOiBbNjAsIG51bGwsIG51bGwsIDc1XSxcclxuICAgICAgcDogMCxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgICAgJysgc3ZnJzoge1xyXG4gICAgICAgIGNvbG9yOiAnI0E2QThCQicsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgbXQ6IFs0XSxcclxuICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgbm90ZToge1xyXG4gICAgZm9udFN0eWxlOiAnaXRhbGljJyxcclxuICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgbnVsbCwgJzE1cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMzMsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgY29sb3I6IHJnYmEoJyMwMjA3M0UnLCAwLjUpLFxyXG4gICAgbXQ6IFs0XSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgQnV0dG9uLCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcclxuaW1wb3J0IEJsb2dQb3N0IGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvYmxvZy1wb3N0JztcclxuaW1wb3J0IFNsaWNrQXJyb3cgZnJvbSAnY29tcG9uZW50cy9zbGljay1hcnJvdyc7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgeyB1c2VJbmZvcm1hY29lcyB9IGZyb20gJ2hvb2tzL3VzZUluZm9ybWFjb2VzJztcclxuXHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBuZXh0QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJuZXh0XCIgLz4sXHJcbiAgcHJldkFycm93OiA8U2xpY2tBcnJvdyBjb250cm9sPVwicHJldlwiIC8+LFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTAwMDAwLFxyXG4gICAgICBzZXR0aW5nczogJ3Vuc2xpY2snLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbm90aWNpYXMgfSA9IHVzZUluZm9ybWFjb2VzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJibG9nXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cclxuICAgICAgICAgIHNsb2dhbj1cIlwiXHJcbiAgICAgICAgICB0aXRsZT1cIsOabHRpbWFzIE5vdMOtY2lhc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNsaWRlSW5SaWdodFwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgICA8U2xpZGVyIHN4PXtzdHlsZXMuZ3JpZH0gey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAge25vdGljaWFzPy5zbGljZSgwLCAzKS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICA8QmxvZ1Bvc3Qga2V5PXtwb3N0Lm1uX2NvZGlnb30gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgIDxGbGV4IHN4PXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHN4PXtzdHlsZXMuYnV0dG9ufSBhcz1cImFcIiBocmVmPVwiL25vdGljaWFzXCI+TWFpcyBOb3TDrWNpYXM8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzEyLCBudWxsLCBudWxsLCAxMiwgMTVdLFxyXG4gICAgcGI6IFs2LCBudWxsLCBudWxsLCAxNiwgMTAsIDE0XSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIG1iOiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ2FwOiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgMTBdLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgbXg6IFtudWxsLCBudWxsLCBudWxsLCAtMywgJ3Vuc2V0J10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLCAxZnIpJywgbnVsbCwgbnVsbCwgbnVsbCwgJ3JlcGVhdCgzLCAxZnIpJ10sXHJcbiAgICAnLnNsaWNrLWFycm93Jzoge1xyXG4gICAgICBib3R0b206IFtudWxsLCBudWxsLCBudWxsLCAtMTQsICd1bnNldCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbXQ6IFs4XSxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfVxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuaW1wb3J0IEJnU2hhcGUgZnJvbSAnYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnN2Zyc7XHJcbmltcG9ydCBzaGFwZVRvcCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3NoYXBlLXRvcC5wbmcnO1xyXG5pbXBvcnQgc2hhcGVCb3R0b20gZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9zaGFwZS1ib3R0b20ucG5nJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lV2hhdHNBcHAsIEFpT3V0bGluZVBob25lLCBBaU91dGxpbmVJbnN0YWdyYW0sIEFpT3V0bGluZU1haWwsIEFpT3V0bGluZUZhY2Vib29rIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiY29udGF0b1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgIFF1ZXJlbW9zIGVudGVuZGVyIG8gcXVlIHZvY8OqIHByZWNpc2FcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idG5XcmFwcGVyfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd2EubWUvNTU4ODk5NjY4NjUyXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lV2hhdHNBcHAgc2l6ZT1cIjNlbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ0ZWw6ODgzNjY5MTE0NlwiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZVBob25lIHNpemU9XCIzZW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zZXJ2Y29uamlqb2NhL1wiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZUluc3RhZ3JhbSBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zZXJ2Y29uamlqb2NhXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lRmFjZWJvb2sgc2l6ZT1cIjNlbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86Z2VyZW5jaWFAc2VydmNvbjEuY29tXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lTWFpbCBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB6SW5kZXg6IDEsXHJcbiAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgY29udGVudDogYCcnYCxcclxuICAgICAgaGVpZ2h0OiAnNTAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB6SW5kZXg6ICctMScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBweDogWzAsICcwICFpbXBvcnRhbnQnLCAnMzBweCAhaW1wb3J0YW50J10sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICBwYWRkaW5nOiBbXHJcbiAgICAgICczNXB4IDYwcHggNjBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0MHB4IDMwcHggNDVweCcsXHJcbiAgICAgICc1NXB4IDMwcHggNjBweCcsXHJcbiAgICAgICc1NXB4IDUwcHggNjBweCcsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzE4MzY1NicsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFsnbm9uZScsIG51bGwsIG51bGwsIGB1cmwoJHtCZ1NoYXBlfSlgXSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnNjAlIGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogWycxMjBweCcsIG51bGwsIG51bGwsIG51bGwsICdhdXRvJ10sXHJcbiAgICBib3JkZXJSYWRpdXM6ICc3cHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ3NwYWNlLWJldHdlZW4nXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGZvbnRTaXplOiBbMywgNywgOCwgNywgMTFdLFxyXG4gICAgZm9udEZhbWlseTogJ0JyZWUgU2VyaWYsIHNlcmlmJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgbGluZUhlaWdodDogWzEuNCwgMS41M10sXHJcbiAgICBtYXhXaWR0aDogWycxMDAlJywgJzgwJScsIG51bGwsIDM0MCwgJzUwJScsICc0NSUnXSxcclxuICAgIG1iOiBbMTEsIG51bGwsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgYnRuV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnOmJlZm9yZSwgOmFmdGVyJzoge1xyXG4gICAgICBjb250ZW50OiBgJydgLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICc3M3B4JyxcclxuICAgICAgaGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBbJzU1JScsIG51bGwsIG51bGwsICcxMDAlJ10sXHJcbiAgICB9LFxyXG4gICAgJzpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3NoYXBlVG9wfSlgLFxyXG4gICAgICB0b3A6ICctMjhweCcsXHJcbiAgICB9LFxyXG4gICAgJzphZnRlcic6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2hhcGVCb3R0b219KWAsXHJcbiAgICAgIGJvdHRvbTogJy0yOHB4JyxcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtaW5IZWlnaHQ6IFs0MCwgbnVsbCwgbnVsbCwgNDUsIDYwXSxcclxuICAgICAgcGFkZGluZzogWycwIDI4cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMCA0MHB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICcjYTJhZWJiJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIG10OiAxLFxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBHcmlkLCBCdXR0b24sIEhlYWRpbmcsIFRleHQsIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IElvSW9zQ2hlY2ttYXJrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcbmltcG9ydCBzdXBwb3J0IGZyb20gJ2Fzc2V0cy9pbWFnZXMvc3VwcG9ydC5wbmcnO1xyXG5pbXBvcnQgY2hlY2sgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9jaGVjay5wbmcnXHJcblxyXG5jb25zdCBsaXN0ID0gW1xyXG4gICdDYWxlbmTDoXJpbyBjb250ZW5kbyB0b2RhcyDDoHMgb2JyaWdhw6fDtWVzIGRhIGVtcHJlc2EgcGVyYW50ZSBhIGxlZ2lzbGHDp8OjbycsXHJcbiAgJ1Bvc3NpYmlsaWRhZGUgZGUgZW52aWFyIHNvbGljaXRhw6fDtWVzIHBhcmEgbyBFc2NyaXTDs3JpbyBDb250w6FiaWwgZSB0YW1iw6ltIHJlc3BvbmRlciBhcyBkZW1hbmRhcyBlbnZpYWRhcycsXHJcbiAgJ0dlcmVuY2lhbWVudG8gRWxldHLDtG5pY28gZGUgZG9jdW1lbnRvcyBvbmRlIHRvZG8gZG9jdW1lbnRvIGVudmlhZG8gcGVsbyBhcHAgw6kgYXJtYXplbmFkbyBlbSBDbG91ZCcsXHJcbiAgJ1BvciBJbnRlcm3DqWRpbyBkbyBhcHAgYSBFbXByZXNhIHJlY2ViZXLDoSBjb211bmljYWRvcyBkbyBlc2NyaXTDs3JpbyBjb250w6FiaWwgZW0gZGl2ZXJzYXMgb3JpZW50YcOnw7VlcyBmaXNjYWlzJyxcclxuXTtcclxuXHJcbmNvbnN0IEN1c3RvbWVyU3VwcG9ydCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzdXBwb3J0fSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cInN1cHBvcnRcIiAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgIEJhaXhlIG5vc3NvIEFwcFxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuc3VtbWFyeX0+XHJcbiAgICAgICAgICAgICAgUG9zc3XDrW1vcyBkaXZlcnNhcyB2YW50YWdlbnMgZSBmYWNpbGlkYWRlcyBubyBub3NzbyBhcHBcclxuICAgICAgICAgICAgPC9UZXh0PlxyXG5cclxuICAgICAgICAgICAgPEdyaWQgc3g9e3N0eWxlcy5saXN0fSBhcz1cInVsXCI+XHJcbiAgICAgICAgICAgICAge2xpc3QubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8VGV4dCBhcz1cImxpXCIga2V5PXtpfT5cclxuICAgICAgICAgICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIDxJb0lvc0NoZWNrbWFya0NpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3g9e3sgY29sb3I6ICdzZWNvbmRhcnknLCBtcjogMiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjJlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2NoZWNrfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPEZsZXggc3g9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzeD17c3R5bGVzLmJ1dHRvbn0gYXM9XCJhXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cImh0dHBzOi8vcGxheS5nb29nbGUuY29tL3N0b3JlL2FwcHMvZGV0YWlscz9pZD1jb20uc2VydmNvblwiPkJhaXhlIE5vc3NvIEFwcDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyU3VwcG9ydDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIDYsIG51bGwsIDE0LCAxNl0sXHJcbiAgICBwYjogW251bGwsIG51bGwsIG51bGwsIDgsIDBdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMTBweCddLFxyXG4gICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgJ2dyaWQnXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uLXJldmVyc2UnLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAnMWZyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzFmcicsXHJcbiAgICAgICc0NzBweCAxZnInLFxyXG4gICAgICAnNjAwcHggMWZyJyxcclxuICAgICAgJzc2MHB4IDFmcicsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgaWxsdXN0cmF0aW9uOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiBbMiwgbnVsbCwgbnVsbCwgMCwgNCwgMF0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDAlJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgbWFyZ2luVG9wOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgLTE2XSxcclxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNTYwLCAnbm9uZSddLFxyXG4gICAgbTogW251bGwsIG51bGwsIG51bGwsICcwIGF1dG8nLCAndW5zZXQnXSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IFs1LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgbnVsbCwgMTFdLFxyXG4gICAgbGluZUhlaWdodDogMS41MyxcclxuICAgIGxldHRlclNwYWNpbmc6IFsnLTAuNXB4JywgbnVsbCwgbnVsbCwgJy0xcHgnXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgc3Bhbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgcHg6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VtbWFyeToge1xyXG4gICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMiwgJzE1cHgnLCAyXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg2LCBudWxsLCBudWxsLCBudWxsLCAxLjg2LCAyLjI1XSxcclxuICAgIG1heFdpZHRoOiA0NzAsXHJcbiAgICBtOiBbbnVsbCwgbnVsbCwgbnVsbCwgJzIwcHggYXV0byAwJywgJzE1cHggMCAwJywgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGdhcDogJzAgMThweCcsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJzFmcicsIG51bGwsIG51bGwsICcxZnInXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2NlbnRlcicsICd1bnNldCddLFxyXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICBtdDogWzQsIG51bGwsIG51bGwsIDUsIDQsIDVdLFxyXG4gICAgcDogMCxcclxuICAgIGxpOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMiwgJzE1cHgnLCAyXSxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCBudWxsLCBudWxsLCAxLjUsIDEuNV0sXHJcbiAgICAgIG10OiA0LFxyXG4gICAgICBzcGFuOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGdhcDogMlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtdDogWzhdLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBGYXFJdGVtIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvZmFxLWl0ZW0nO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHF1ZXM6ICdXaGljaCBkb21haW4gc2hvdWxkIEkgcHVyY2hhc2U/JyxcclxuICAgIGFuczogYFdlIG1ha2UgaXQgZWFzeSB0byBtb3ZlIHRvIENvbWV0TmluZS4gU2ltcGx5IGNvbnRhY3QgdXMgYW5kIHdlJ2xsIG1vdmUgeW91ciBob3N0aW5nIGFjY291bnQgZnJvbSBhbnkgb3RoZXIgcHJvdmlkZXIsIHJlZ2FyZGxlc3Mgb2YgdGhlIGNvbnRyb2wgcGFuZWwuIElmIGF0IGFueXRpbWUgeW91ciB3ZWJzaXRlIGlzIGRvd24gZm9yIG1vcmUgdGhhbiAwLjElIHJlc3VsdGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHF1ZXM6ICdXaGF0IGFyZSBzb21lIHRpcHMgd2hlbiBjaG9vc2luZyBhIG5hbWU/JyxcclxuICAgIGFuczogYEdldCB5b3VyIHdlYnNpdGUgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gbWFuYWdlbWVudCBuZXdzLiBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgdGhlIGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBxdWVzOiAnV2hhdCBpZiBJIG5lZWQgaGVscCBjaG9vc2luZyB0aGUgcmlnaHQgZG9tYWluPycsXHJcbiAgICBhbnM6IGBDcmVhdGUgYSBodWIgZm9yIGNyb3NzLWZ1bmN0aW9uYWwgd29yayB0aGF0IGFsc28gd29ya3Mgd2l0aCBhbGwgeW91ciBvdGhlciB0b29scy4gQ2VudHJhbGl6ZSBhbmQgc3RhbmRhcmRpemUgY29tbXVuaWNhdGlvbiB3aXRoIE1pcm8uIEFsbCBwcmVtaXVtIGZ1bmN0aW9uYWwgYXJlIGluY2x1ZGVkIGhlcmUgd2l0aCB1cGRhdGVzLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHF1ZXM6ICdDYW4gSSB1cGdyYWRlIG9yIGRvd25ncmFkZSBteSB3ZWIgaG9zdGluZyBwbGFuJyxcclxuICAgIGFuczogYFRoZSBwcmljaW5nIG1hZGUgbWUgYSBsaXR0bGUgaGVzaXRhbnQgYXQgZmlyc3QgYnV0IEkgaGF2ZSBiZWVuIHBsZWFzYW50bHkgc3VycHJpc2VkIGJ5IHRoZSBsZXZlbCBvZiBjYXJlIGdpdmVuIGJ5IENvbWV0TmluZS5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBxdWVzOiAnSG93IGRvIEkgdXBncmFkZSB0aGUgc3RvcmFnZSBjYXBhY2l0eSBvZiBteSBob3N0aW5nIHBsYW4/JyxcclxuICAgIGFuczogYFN0b3AgeW91ciB2aWV3ZXJzIGZyb20gZ2V0dGluZyBkaXN0cmFjdGVkLiBQdWJsaXNoIHZpZGVvcyB0byB5b3VyIG93biBDaGFubmVsIGFuZCByZXN0IGVhc3kga25vd2luZyB2aWV3ZXJzIHdvbuKAmXQgYmUgYW5ub3llZCBieSBhZHMgb3IgcHVsbGVkIGRvd24gYSByYWJiaXQgaG9sZSBvZiB1bnJlbGF0ZWQgdmlkZW9zLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIHF1ZXM6ICdXaGF0IGlzIGluIEluTW90aW9uIEhvc3RpbmfigJlzIHVwdGltZSByYXRlPycsXHJcbiAgICBhbnM6IGBEZXNpZ25lZCB3aXRoIGJlZ2lubmVycyBpbiBtaW5kIGFuZCBwYWNrZWQgd2l0aCBhZHZhbmNlZCBmZWF0dXJlcyBkZXZlbG9wZXJzIHdpbGwgbG92ZS4gU3RhcnQgd2l0aCBhIHF1aWNrIGFuZCBzaW1wbGUgaW5zdGFsbGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIHF1ZXM6ICdMZWFybiBmcm9tIGNvbW11bml0eSBvbiBCcmFuZHdhZ29uJyxcclxuICAgIGFuczogYEJyaWFuIEhhbGxpZ2FuIGtub3dzIHRoYXQgeW91IG5lZWQgbW9yZSB0aGFuIGEgZ3JlYXQgcHJvZHVjdCB0byBoYXZlIGEgZ3JlYXQgYnJhbmQuIEhlYXIgaGlzIHRob3VnaHRzICYgc2NvcmUgYSBwZWVrIGF0IG91ciB3YWdvbi5gLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHsgb3JpZ2luVG9wOiB0cnVlIH07XHJcblxyXG5jb25zdCBGYXEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJmYXFcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgc2xvZ2FuPVwiR2V0IHlvdXJzIHF1ZXN0aW9uIGFuc3dlclwiXHJcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1YW50bHkgYXNrZWQgcXVlc3Rpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1hc29ucnkgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxGYXFJdGVtIGtleT17aXRlbS5pZH0gZmFxPXtpdGVtfSBjbGFzc05hbWU9XCJmYXEtaXRlbVwiIC8+O1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXE7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTRdLFxyXG4gICAgcGI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxMCwgNl0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIC02LCAtOCwgJ3Vuc2V0J10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uJztcclxuaW1wb3J0IHF1ZW1Tb21vcyBmcm9tICdhc3NldHMvaW1hZ2VzL3F1ZW0tc29tb3MucG5nJztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTWlzc8OjbycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIFByZXN0YXIgc2VydmnDp29zIGNvbnTDoWJlaXMgZSBhc3Nlc3NvcmlhIGRlIHF1YWxpZGFkZSwgYnVzY2FuZG8gYXRlbmRlciBhcyBuZWNlc3NpZGFkZXMgZGUgbm9zc29zIGNsaWVudGVzIGUgcGFyY2Vpcm9zLCBhZ3JlZ2FuZG8gdmFsb3Jlcywgc2VndXJhbsOnYSBlIHRyYW5xdWlsaWRhZGUgbm9zIHNldXMgZW1wcmVlbmRpbWVudG9zIGUganVudG9zIHNlcm1vcyBpbnN0cnVtZW50byBkZSByZWZlcsOqbmNpYSBuYSB0cmFuc2Zvcm1hw6fDo28gZWNvbsO0bWljYSBlIHNvY2lhbCBuYSByZWdpw6NvLCBjb20gdmlzaWJpbGlkYWRlIG5hY2lvbmFsIGUgaW50ZXJuYWNpb25hbC5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdWaXPDo28nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBTZXIgcmVmZXLDqm5jaWEgZGUgZXhjZWzDqm5jaWEgZW0gc2VydmnDp29zIGRlIGNvbnRhYmlsaWRhZGUgZSBzZSBtYW50ZXIgZW50cmUgb3MgcHJpbmNpcGFpcyBkYSByZWdpw6NvLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYFZhbG9yZXNgLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICDDiXRpY2EsIHF1YWxpZGFkZSwgY29tcHJvbWV0aW1lbnRvLCBzZXJpZWRhZGUsIGdlc3TDo28gY29tcGFydGlsaGFkYSwgcmVzcG9uc2FiaWxpZGFkZSBzb2Npb2Vjb27DtG1pY2EgZSB0cmFkacOnw6NvLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFByZW1pdW1GZWF0dXJlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGlkPVwicXVlbS1zb21vc1wiIGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBhcz1cImZpZ3VyZVwiXHJcbiAgICAgICAgc3g9e3sgLi4uc3R5bGVzLmlsbHVzdHJhdGlvbiwgYmFja2dyb3VuZDogYHVybCgke3F1ZW1Tb21vc30pIG5vLXJlcGVhdGAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJib3VuY2VJblJpZ2h0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5hY2NvcmRpb25Hcm91cH0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cclxuICAgICAgICAgICAgICBzbG9nYW49XCJTZXJ2aWNvbiBDb250YWJpbGlkYWRlXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvbmhlw6dhIHVtIHBvdXF1aW5obyBzb2JyZSBub3NzYSBoaXN0w7NyaWFcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU29tb3MgdW1hIGVtcHJlc2Egdm9sdGFkYSBwYXJhIG8gcmFtbyBjb250w6FiaWwsIGZpc2NhbCBlIHRyYWJhbGhpc3RhLCBjb21wb3N0YSBwb3IgcHJvZmlzc2lvbmFpcywgcHJlc3RhbmRvIHNlcnZpw6dvcyBkZSBxdWFsaWRhZGUgZSBlZmljacOqbmNpYSBjb20gdW0gc2lzdGVtYSBvcGVyYWNpb25hbCBkZSB0cmFiYWxobyB0b3RhbG1lbnRlIGluZm9ybWF0aXphZG8uIE5vIG1lcmNhZG8gZGVzZGUgRmV2ZXJlaXJvIGRlIDIwMDAsIGVzdGFtb3Mgc2VtcHJlIGJ1c2NhbmRvIG9zIHJlcXVpc2l0b3MgcGFyYSBhdGVuZGVyIGFzIGV4cGVjdGF0aXZhcyBkb3Mgbm9zc29zIGNsaWVudGVzLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2RhdGF9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bUZlYXR1cmU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcGI6IFsxMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMTQsIDE4XSxcclxuICAgIHB0OiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgNl0sXHJcbiAgICAvLyBtYXJnaW5Cb3R0b206IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTg1cHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAwLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgIGJhY2tncm91bmRTaXplOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzYyJScsICc1MCUnLCAnNjYlJywgJzYyJSddLFxyXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMXB4KSc6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICc2MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBbXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICctODBweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMCcsXHJcbiAgICAgICctMTQwcHggMHB4JyxcclxuICAgIF0sXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGFjY29yZGlvbkdyb3VwOiB7XHJcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDUyMCwgNjEwLCA0MTAsIG51bGwsIDQ1MCwgNDEwXSxcclxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMCBhdXRvJywgbnVsbCwgJzAnLCBudWxsXSxcclxuICAgIC8vIG1hcmdpbkxlZnQ6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsIG51bGwsIDEwLCAxMiwgMTZdLFxyXG4gICAgLy8gbWFyZ2luUmlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsIG51bGwsICd1bnNldCddLFxyXG4gICAgLy8gcHg6IFs2LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA0NDAsIDQ1MCwgJ25vbmUnXSxcclxuICAgIG1iOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgNCwgNl0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogWzQsIG51bGwsIG51bGwsIDgsIDEwLCA4LCAxMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIG1heFdpZHRoOiBbMjUwLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgICBtYXJnaW46IFsnMCBhdXRvJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICAgIG10OiAxMlxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBQcmljZVRhYmxlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvcHJpY2UtdGFibGUnO1xyXG5pbXBvcnQgU2xpY2tBcnJvdyBmcm9tICdjb21wb25lbnRzL3NsaWNrLWFycm93JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnXHJcbmltcG9ydCBJbWFnZUFnZW5kYSBmcm9tICdhc3NldHMvaW1hZ2VzL2FnZW5kYTMucG5nJ1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IHsgdXNlSW5mb3JtYWNvZXMgfSBmcm9tICdob29rcy91c2VJbmZvcm1hY29lcyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdBZ2VuZGEgVHJpYnV0w6FyaWEnLFxyXG4gICAgc3VidGl0bGU6ICcwMi8wNy8yMDIxJyxcclxuICAgIC8vIHByaWNlOiAyNS45OSxcclxuICAgIGlzUmVjb21tZW5kZWQ6IGZhbHNlLFxyXG4gICAgLy8gYnV0dG9uVGV4dDogJ1N0YXJ0IEZyZWUgVHJpYWwnLFxyXG4gICAgZmVhdHVyZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiAnSUNNUy9TQ0FOQyB8IENvbnRyaWJ1aW50ZSBxdWUgdGl2ZXIgcmVjZWJpZG8gbyBjb21idXN0w612ZWwgZGUgb3V0cm8gY29udHJpYnVpbnRlIHN1YnN0aXR1w61kby4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBJQ01TL1NDQU5DIHwgSW1wb3J0YWRvci5gLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdPYnJpZ2HDp8O1ZXMgRmlzY2FpcycsXHJcbiAgICBzdWJ0aXRsZTogJ0ZpcXVlIHNlbXByZSBpbmZvcm1hZG8hJyxcclxuICAgIHByaWNlOiAyOS45OSxcclxuICAgIGlzUmVjb21tZW5kZWQ6IHRydWUsXHJcbiAgICBidXR0b25UZXh0OiAnU3RhcnQgRnJlZSBUcmlhbCcsXHJcbiAgICBmZWF0dXJlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6ICdPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEp1bGhvLzIwMjEnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEp1bmhvLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIE1haW8vMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gQWJyaWwvMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gTWFyw6dvLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEZldmVyZWlyby8yMDIxYCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBzcGVlZDogNTAwLFxyXG4gIG5leHRBcnJvdzogPFNsaWNrQXJyb3cgY29udHJvbD1cIm5leHRcIiAvPixcclxuICBwcmV2QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJwcmV2XCIgLz4sXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDAwMDAsXHJcbiAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZyA9ICgpID0+IHtcclxuICBjb25zdCB7IG9icmlnYWNvZXMsIGFnZW5kYSB9ID0gdXNlSW5mb3JtYWNvZXMoKVxyXG4gIGNvbnN0IGRhdGEgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgZGlhID0gU3RyaW5nKGRhdGEuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IG1lcyA9IFN0cmluZyhkYXRhLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IGFubyA9IGRhdGEuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBkYXRhQXR1YWwgPSBgJHtkaWF9LyR7bWVzfS8ke2Fub31gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiaW5mb3JtYWNvZXNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNsaWRlSW5MZWZ0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICAgIHNsb2dhbj1cIkF0dWFsaXplLXNlXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJDb21wb3N0byBwb3IgdW0gY29uanVudG8gZGUgaW5mb3JtYcOnw7VlcyBxdWUgc8OjbyBhdHVhbGl6YWRhcyBkaWFyaWFtZW50ZSBwZWxhIG5vc3NhIGVxdWlwZS5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZXIgc3g9e3N0eWxlcy5ncmlkfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgIDxQcmljZVRhYmxlIGl0ZW1zPXthZ2VuZGF9IGlzUmVjb21tZW5kZWQ9e2ZhbHNlfSB0aXRsZT1cIkFnZW5kYSBUcmlidXTDoXJpYVwiIHN1YnRpdGxlPXtkYXRhQXR1YWx9IC8+XHJcbiAgICAgICAgICAgICAgPFByaWNlVGFibGUgaXRlbXM9e29icmlnYWNvZXMuc2FvUGF1bG99IGlzUmVjb21tZW5kZWQ9e3RydWV9IHRpdGxlPVwiT2JyaWdhw6fDtWVzIEZpc2NhaXNcIiBzdWJ0aXRsZT1cIkZpcXVlIHNlbXByZSBpbmZvcm1hZG9cIiBsaW5rPVwib2JyaWdhY29lc1wiIC8+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHN4PXtzdHlsZXMuaW1hZ2V9IHNyYz17SW1hZ2VBZ2VuZGF9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIGJnOiBcIiNGOUZBRkNcIixcclxuICAgIHB0OiBbNl0sXHJcbiAgICBwYjogWzEyLCBudWxsLCBudWxsLCAxNSwgMTddLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwbDogMCxcclxuICAgIHByOiAwLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs3LCBudWxsLCBudWxsLCBudWxsLCAxNCwgbnVsbCwgMThdLFxyXG4gICAgcHg6IFs2LCBudWxsLCBudWxsLCAwXSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgOF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2dyaWQnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAncmVwZWF0KDMsIDFmciknXSxcclxuICAgIGFsaWduSXRlbXM6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAnZmxleC1lbmQnXSxcclxuICAgICcuc2xpY2stc2xpZGUgPiBkaXYnOiB7XHJcbiAgICAgIHA6IFsnMzVweCcsICc0MHB4JywgbnVsbCwgJzM1cHggMjNweCAyM3B4JywgMF0sXHJcbiAgICB9LFxyXG4gICAgJy5zbGljay1hcnJvdyc6IHtcclxuICAgICAgYm90dG9tOiAtNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcclxuICB9XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL3NlcnZpY2UnO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IHsgdXNlSW5mb3JtYWNvZXMgfSBmcm9tICdob29rcy91c2VJbmZvcm1hY29lcyc7XHJcblxyXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcclxuICBjb25zdCB7IGNvdGFjb2VzIH0gPSB1c2VJbmZvcm1hY29lcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwic2VydmljZXNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgICAgc2xvZ2FuPVwiXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJJbmRpY2Fkb3JlcyBFY29uw7RtaWNvc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICB7Y290YWNvZXM/Lm1hcCgoY290YWNhbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxTZXJ2aWNlIGtleT17Y290YWNhby5jb3RkX2NvZGlnb30gY290YWNhbz17Y290YWNhb30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTJdLFxyXG4gICAgcGI6IFsxMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMTVdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoNCwgMWZyKScsXHJcbiAgICAgICdyZXBlYXQoNCwgMzAwcHgpJyxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5pbXBvcnQgc3VwcG9ydFRlYW0gZnJvbSAnYXNzZXRzL2ltYWdlcy9zdXBwb3J0LXRlYW0ucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1cHBvcnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwic3VwcG9ydFwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICB0aXRsZT1cIk1lZXQgb3VyIHN1cHBvcnQgdGVhbSB3aG8gYWx3YXlzIHdvcmsgaGFyZGx5IGJlaGluZCB0aGUgc2NlbmVzXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRm9jdXMgb25seSBvbiB0aGUgbWVhbmluZywgd2UgdGFrZSBjYXJlIG9mIHRoZSBkZXNpZ24uIEFzIHNvb24gYXMgdGhlIG1lZXRpbmcgZW5kIHlvdSBjYW4gZXhwb3J0IGluIG9uZSBjbGljayBpbnRvIHlvdXIgcHJlZmVycmVkLlwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMudGh1bWJXcmFwcGVyfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3N1cHBvcnRUZWFtfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cIlN1cHBvcnQgVGVhbVwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxNF0sXHJcbiAgICBwYjogWzBdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs4LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgMTVdLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1MDAsIDYwMCwgbnVsbF0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgOCwgMTFdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIG10OiBbM10sXHJcbiAgICAgIG1heFdpZHRoOiBbNTAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aHVtYldyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1iOiAnLTFweCcsXHJcbiAgICBpbWc6IHtcclxuICAgICAgaGVpZ2h0OiBbMTgwLCAnYXV0byddLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFRlc3RpbW9uaWFsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2NvbXBvbmVudHMvY2FyZHMvdGVzdGltb25pYWwnKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5pbXBvcnQgYXV0aG9yIGZyb20gJ2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwucG5nJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBhdmF0YXI6IGF1dGhvcixcclxuICAgIGF1dGhvck5hbWU6ICdNZWxpbmEgUGV0dGVuZG9yZmVyJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIG9mIFViZXInLFxyXG4gICAgdGV4dDogYEJlc3QgaG9zdCBJJ3ZlIGhhZCBpbiAxMCB5ZWFycy4gU21vb3RoIG1pZ3JhdGlvbiwgbm8gc3RyZXNzLCBhbmQgZnJpZW5kbHkgc3VwcG9ydCBvbmUgY2xpY2sgYXdheS4gSSdtIHZlcnkgaGFwcHkgYW5kIHJlY29tbWVuZCB0aGVpciBzZXJ2aWNlc2AsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGF2YXRhcjogYXV0aG9yLFxyXG4gICAgYXV0aG9yTmFtZTogJ01lbGluYSBQZXR0ZW5kb3JmZXInLFxyXG4gICAgZGVzaWduYXRpb246ICdDRU8gb2YgR29vZ2xlJyxcclxuICAgIHRleHQ6IGBCZXN0IGhvc3QgSSd2ZSBoYWQgaW4gMTAgeWVhcnMuIFNtb290aCBtaWdyYXRpb24sIG5vIHN0cmVzcywgYW5kIGZyaWVuZGx5IHN1cHBvcnQgb25lIGNsaWNrIGF3YXkuIEknbSB2ZXJ5IGhhcHB5IGFuZCByZWNvbW1lbmQgdGhlaXIgc2VydmljZXNgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBhdmF0YXI6IGF1dGhvcixcclxuICAgIGF1dGhvck5hbWU6ICdNZWxpbmEgUGV0dGVuZG9yZmVyJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIG9mIE1pY3Jvc29mdCcsXHJcbiAgICB0ZXh0OiBgQmVzdCBob3N0IEkndmUgaGFkIGluIDEwIHllYXJzLiBTbW9vdGggbWlncmF0aW9uLCBubyBzdHJlc3MsIGFuZCBmcmllbmRseSBzdXBwb3J0IG9uZSBjbGljayBhd2F5LiBJJ20gdmVyeSBoYXBweSBhbmQgcmVjb21tZW5kIHRoZWlyIHNlcnZpY2VzYCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInRlc3RpbW9uaWFsc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IHN4PXtzdHlsZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxUZXN0aW1vbmlhbCBrZXk9e2l0ZW0uaWR9IHRlc3RpbW9uaWFsPXtpdGVtfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzYsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0YwRjNGOCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY3cHgpJzoge1xyXG4gICAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgY29udGVudDogYCcnYCxcclxuICAgICAgICBtaW5IZWlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCAzMCwgNzAsIDEwMF0sXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWw6IHtcclxuICAgICcuc2xpY2stZG90cyc6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgYm90dG9tOiBbNiwgbnVsbCwgbnVsbCwgOCwgMTBdLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGxlZnQ6IFtcclxuICAgICAgICAnY2FsYyg1MCUgKyAxNHB4KScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDYycHgpJyxcclxuICAgICAgICAnY2FsYyg1MCUgKyAxNHB4KScsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgNjBweCknLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDE0cHgpJyxcclxuICAgICAgXSxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcmdiYSgnIzVCMkI5RCcsIDAuMiksXHJcbiAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogWzMsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgICAgIHdpZHRoOiBbMTAsIG51bGwsIG51bGwsIDE1XSxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgdGV4dEluZGVudDogJy05OTk5ZW0nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc2xpY2stYWN0aXZlIGJ1dHRvbic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICB3aWR0aDogWzIwLCBudWxsLCBudWxsLCAzMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbGk6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAnKyBsaSc6IHtcclxuICAgICAgICBtbDogJzZweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL2ZlYXR1cmUnO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuXHJcbmltcG9ydCBpY29uMSBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzEucG5nJztcclxuaW1wb3J0IGljb24yIGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvMi5wbmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8zLnBuZyc7XHJcbmltcG9ydCBpY29uNCBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzQucG5nJztcclxuaW1wb3J0IGljb241IGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvNS5wbmcnO1xyXG5pbXBvcnQgaWNvbjYgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy82LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaWNvbjogaWNvbjEsXHJcbiAgICB0aXRsZTogJ0RlcGFydGFtZW50byBkZSBSZWdpc3Ryb3MnLFxyXG4gICAgZGVzY3JpcHRpb246IGBTZWphIHBhcmEgcXVlbSBlc3TDoSBpbmljaWFuZG8gdW0gbm92byBuZWfDs2NpbyBvdSBwYXJhIHF1ZW0gc29tZW50ZSBwcm9jdXJhIGFsdGVyYXIgc3VhIGVtcHJlc2EgasOhIHJlZ2lzdHJhZGEsIG9mZXJlY2Vtb3MgYXBvaW8gY29uc3RhbnRlLCBlbGFib3JhbmRvIGEgZG9jdW1lbnRhw6fDo28gcGFyYSByZWdpc3RybyBlbSB0b2RvcyBvcyDDs3Jnw6NvcyBlIHJlcGFydGnDp8O1ZXMgbmVjZXNzw6FyaWFzIGNvbSBhZ2lsaWRhZGUsIHBhcmEgcXVlIG8gZW1wcmVzw6FyaW8gcG9zc2EgcmFwaWRhbWVudGUgb2J0ZXIgbyByZWdpc3Rybywgc2VtIG5lY2Vzc2lkYWRlIGRlIGF0cmFzbyBubyBpbsOtY2lvIGRhcyBhdGl2aWRhZGVzLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGljb246IGljb24yLFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gVHJhYmFsaGlzdGEnLFxyXG4gICAgZGVzY3JpcHRpb246IGBPcmllbnRhw6fDo28gZSBjb250cm9sZSBkYSBhcGxpY2HDp8OjbyBkb3MgcHJlY2VpdG9zIGRhIGNvbnNvbGlkYcOnw6NvIGRhcyBsZWlzIGRvIHRyYWJhbGhvLCDigJxQSVPigJ0sIOKAnEZHVFPigJ0gZSBvdXRyb3MgYXBsaWPDoXZlaXMgw6BzIHJlbGHDp8O1ZXMgZGUgZW1wcmVnbzsgTWFudXRlbsOnw6NvIGRvcyByZWdpc3Ryb3MgZGUgZW1wcmVnYWRvcyBlIHNlcnZpw6dvcyBjb3JyZWxhdG9zOyBFbGFib3Jhw6fDo28gZGEgZm9saGEgZGUgcGFnYW1lbnRvIGRvcyBlbXByZWdhZG9zIGUgZGUgUHLDsy1MYWJvcmUsIGJlbSBjb21vIGRhcyBndWlhcyBkZSByZWNvbGhpbWVudG8gZG9zIGVuY2FyZ29zIHNvY2lhaXMgZSB0cmlidXRvcyBhZmluczsgQXRlbmRpbWVudG8gZGFzIGRlbWFpcyBleGlnw6puY2lhcyBwcmV2aXN0YXMgbmEgbGVnaXNsYcOnw6NvLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGljb246IGljb24zLFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gRmlzY2FsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgT3JpZW50YcOnw6NvIGUgY29udHJvbGUgZGEgYXBsaWNhw6fDo28gZG9zIGRpc3Bvc2l0aXZvcyBsZWdhaXMgdmlnZW50ZXMsIGZlZGVyYWlzLCBlc3RhZHVhaXMgb3UgbXVuaWNpcGFpczsgRXNjcml0dXJhw6fDtWVzIGRvcyByZWdpc3Ryb3MgZmlzY2FpcyBkbyBJUEksIElDTVMsIElTUyBlIGVsYWJvcmHDp8OjbyBkYXMgZ3VpYXMgZGUgaW5mb3JtYcOnw6NvIGUgZGUgcmVjb2xoaW1lbnRvIGRvcyB0cmlidXRvcyBkZXZpZG9zOyBBdGVuZGltZW50byBkYXMgZGVtYWlzIGV4aWfDqm5jaWFzIHByZXZpc3RhcyBlbSBhdG9zIG5vcm1hdGl2b3MsIGJlbSBjb21vIGRlIGV2ZW50dWFpcyBwcm9jZWRpbWVudG9zIGRlIGZpc2NhbGl6YcOnw6NvIHRyaWJ1dGFyaWEuYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaWNvbjogaWNvbjQsXHJcbiAgICB0aXRsZTogJ0RlcGFydGFtZW50byBDb250w6FiaWwnLFxyXG4gICAgZGVzY3JpcHRpb246IGBDbGFzc2lmaWNhw6fDo28gZSBlc2NyaXR1cmHDp8OjbyBkYSBjb250YWJpbGlkYWRlIGRlIGFjb3JkbyBjb20gYXMgbm9ybWFzIGUgcHJpbmPDrXBpb3MgY29udMOhYmVpcyB2aWdlbnRlcy4gQXB1cmHDp8OjbyBkZSBiYWxhbmNldGVzOyBFbGFib3Jhw6fDo28gZG8gYmFsYW7Dp28gYW51YWwgZSBkZW1vbnN0cmF0aXZvcyBkZSByZXN1bHRhZG87YCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaWNvbjogaWNvbjUsXHJcbiAgICB0aXRsZTogJ0ltcG9zdG8gZGUgUmVuZGEgUEYvUEonLFxyXG4gICAgZGVzY3JpcHRpb246IGBPcmllbnRhw6fDo28gZSBjb250cm9sZSBkZSBhcGxpY2HDp8OjbyBkb3MgZGlzcG9zaXRpdm9zIGxlZ2FpcyB2aWdlbnRlczsgRWxhYm9yYcOnw6NvIGRhIGRlY2xhcmHDp8OjbyBhbnVhbCBkZSByZW5kaW1lbnRvcyBlIGRvY3VtZW50b3MgY29ycmVsYXRvczsgQXRlbmRpbWVudG8gZGFzIGRlbWFpcyBleGlnw6puY2lhcyBwcmV2aXN0YXMgZW0gYXRvcyBub3JtYXRpdm9zLCBiZW0gY29tbyBkZSBldmVudHVhaXMgcHJvY2VkaW1lbnRvcyBkZSBmaXNjYWxpemHDp8Ojby5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBpY29uOiBpY29uNixcclxuICAgIHRpdGxlOiAnUGxhbmVqYW1lbnRvIFRyaWJ1dMOhcmlvJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgRWxhYm9yYcOnw6NvIGRlIHBsYW5vIHBhcmEgZWNvbm9taWEgVHJpYnV0w6FyaWE7IEVzdHVkbyBwYXJhIGEgY29tcGVuc2HDp8OjbyBkZSB0cmlidXRvcyBpbmNvbnN0aXR1Y2lvbmFpczsgRXN0dWRvLCBhdmFsaWHDp8OjbyBlIGVucXVhZHJhbWVudG8gZGEgZW1wcmVzYSBkaWFudGUgZGEgbGVnaXNsYcOnw6NvIEZpc2NhbCBwYXJhIG8gbWVsaG9yIGFwcm92ZWl0YW1lbnRvIG5hIGRldGVybWluYcOnw6NvIGRlIGltcG9zdG9zIGUgY29udHJpYnVpw6fDtWVzLmAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFVsdGltYXRlRmVhdHVyZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJzZXJ2aWNvc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICBzbG9nYW49XCJTZXJ2Y29uIENvbnRhYmlsaWRhZGVcIlxyXG4gICAgICAgICAgdGl0bGU9XCLDgXJlYXMgZGUgQXR1YcOnw6NvXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mZWF0dXJlc30+XHJcbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiYm91bmNlSW5Eb3duXCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgICAgICA8RmVhdHVyZSBjbGFzc05hbWU9XCJmZWF0dXJlLWl0ZW1cIiBrZXk9e2l0ZW0uaWR9IGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVsdGltYXRlRmVhdHVyZXM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxNF0sXHJcbiAgICBwYjogWzgsIG51bGwsIG51bGwsIG51bGwsIDE1LCAxNiwgMTldLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IFs1MCwgNTAsIDgwXSxcclxuICAgIHA6IHtcclxuICAgICAgbWF4V2lkdGg6IDQ5MCxcclxuICAgICAgbWFyZ2luOiBbJzEwcHggYXV0byAwJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZmVhdHVyZXM6IHtcclxuICAgIGdhcDogWzM1LCBudWxsLCBudWxsLCA0MCwgJzUwcHggMzBweCcsIDYwXSxcclxuICAgIGRpc3BsYXk6IFsnZ3JpZCcsICdncmlkJ10sXHJcbiAgICBtYXhXaWR0aDogMTAzMCxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICBdLFxyXG4gICAgJy5mZWF0dXJlLWl0ZW0nOiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnYmxvY2snXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWF4V2lkdGg6IFsyOTAsIDI2MCwgbnVsbCwgMjgwLCAnbm9uZSddLFxyXG4gICAgICBtOiBbJzAgYXV0bycsICcwIGF1dG8nLCAnMCBhdXRvJywgJzAgYXV0bycsICcwIGF1dG8nLCAwXSxcclxuICAgICAgZmlndXJlOiB7XHJcbiAgICAgICAgbTogWycwIDAgMjBweCddLFxyXG4gICAgICB9LFxyXG4gICAgICBoNDoge1xyXG4gICAgICAgIG1iOiBbJzE1cHgnLCAnMTVweCcsICcyMHB4J10sXHJcbiAgICAgIH0sXHJcbiAgICAgIHA6IHtcclxuICAgICAgICBmb250U2l6ZTogWycxNHB4JywgJzE0cHgnLCAnMTZweCcsICcxNnB4JywgJzE0cHgnLCAnMTZweCddLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59OyIsImV4cG9ydCBjb25zdCBzbHVnaWZ5ID0gKC4uLmFyZ3MpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGFyZ3Muam9pbignICcpXHJcblxyXG4gIHJldHVybiB2YWx1ZVxyXG4gICAgICAubm9ybWFsaXplKCdORkQnKSAvLyBzcGxpdCBhbiBhY2NlbnRlZCBsZXR0ZXIgaW4gdGhlIGJhc2UgbGV0dGVyIGFuZCB0aGUgYWNlbnRcclxuICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKSAvLyByZW1vdmUgYWxsIHByZXZpb3VzbHkgc3BsaXQgYWNjZW50c1xyXG4gICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAudHJpbSgpXHJcbiAgICAgIC5yZXBsYWNlKC9bXmEtejAtOSBdL2csICcnKSAvLyByZW1vdmUgYWxsIGNoYXJzIG5vdCBsZXR0ZXJzLCBudW1iZXJzIGFuZCBzcGFjZXMgKHRvIGJlIHJlcGxhY2VkKVxyXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpIC8vIHNlcGFyYXRvclxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXHJcbiAgY29sb3JzOiB7XHJcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRTZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXHJcbiAgICBoZWFkaW5nU2Vjb25kYXJ5OiAnIzM0M0Q0OCcsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kU2Vjb25kYXJ5OiAnI0Y5RkFGQycsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJDb2xvcjogJyNFREVGRjYnLCAvLyBib3JkZXIgY29sb3JcclxuICAgIHByaW1hcnk6ICcjMGM1Yzk5JywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcclxuICAgIHNlY29uZGFyeTogJyMwYTRlODInLCAvLyBzZWNvbmRhcnkgY29sb3IgLSBjYW4gYmUgdXNlZCBmb3IgaG92ZXIgc3RhdGVzXHJcbiAgICBtdXRlZDogJyM3QjgxODgnLCAvLyBtdXRlZCBjb2xvclxyXG4gICAgYWNjZW50OiAnIzBhNGU4MicsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXHJcbiAgICBkYXJrOiAnIzEwMTMyRCcsXHJcbiAgICBsaW5rOiAnIzMxODNGRicsXHJcbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGRhcms6IHtcclxuICAgICAgICB0ZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcclxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcclxuICAgICAgICBtdXRlZDogJyMxMTEnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiAnRE0gU2Fucywgc2Fucy1zZXJpZicsXHJcbiAgICAvLyBib2R5OlxyXG4gICAgLy8gICAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgaGVhZGluZzogJ0RNIFNhbnMsIHNhbnMtc2VyaWYnLFxyXG4gICAgbW9ub3NwYWNlOiAnTWVubG8sIG1vbm9zcGFjZScsXHJcbiAgfSxcclxuICBmb250U2l6ZXM6IFtcclxuICAgIDEyLCAvLyAwXHJcbiAgICAxNCwgLy8gMVxyXG4gICAgMTYsIC8vIDJcclxuICAgIDE4LCAvLyAzXHJcbiAgICAyMCwgLy8gNFxyXG4gICAgMjIsIC8vIDVcclxuICAgIDI0LCAvLyA2XHJcbiAgICAyNiwgLy8gN1xyXG4gICAgMjgsIC8vIDhcclxuICAgIDMwLCAvLyA5XHJcbiAgICAzMiwgLy8gMTBcclxuICAgIDM2LCAvLyAxMVxyXG4gICAgNDAsIC8vIDEyXHJcbiAgICA0MiwgLy8gMTNcclxuICAgIDQ4LCAvLyAxNFxyXG4gICAgNTIsIC8vIDE1XHJcbiAgICA2NCwgLy8gMTZcclxuICBdLFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIC8vIGJvZHk6IDQwMCxcclxuICAgIGhlYWRpbmc6IDUwMCxcclxuICAgIC8vIGhlYWRpbmc6IDcwMCxcclxuICAgIGJvbGQ6IDcwMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHRzOiB7XHJcbiAgICBib2R5OiAxLjUsXHJcbiAgICAvLyBib2R5OiAxLjUsXHJcbiAgICBoZWFkaW5nOiAxLjI1LFxyXG4gICAgLy8gaGVhZGluZzogMS4xMjUsXHJcbiAgfSxcclxuICBsZXR0ZXJTcGFjaW5nczoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBjYXBzOiAnMC4yZW0nLFxyXG4gICAgaGVhZGluZzogJy0wLjVweCcsXHJcbiAgfSxcclxuICBzcGFjZTogW1xyXG4gICAgMCwgLy8gMFxyXG4gICAgNSwgLy8gMVxyXG4gICAgMTAsIC8vIDJcclxuICAgIDE1LCAvLyAzXHJcbiAgICAyMCwgLy8gNFxyXG4gICAgMjUsIC8vIDVcclxuICAgIDMwLCAvLyA2XHJcbiAgICAzNSwgLy8gN1xyXG4gICAgNDAsIC8vIDhcclxuICAgIDQ1LCAvLyA5XHJcbiAgICA1MCwgLy8gMTBcclxuICAgIDU1LCAvLyAxMVxyXG4gICAgNjAsIC8vIDEyXHJcbiAgICA2NSwgLy8gMTNcclxuICAgIDcwLCAvLyAxNFxyXG4gICAgODAsIC8vIDE1XHJcbiAgICA5MCwgLy8gMTZcclxuICAgIDEwMCwgLy8gMTdcclxuICAgIDExMCwgLy8gMThcclxuICAgIDEyMCwgLy8gMTlcclxuICAgIDEzMCwgLy8gMjBcclxuICAgIDE0MCwgLy8gMjFcclxuICAgIDE1MCwgLy8gMjJcclxuICAgIDE2MCwgLy8gMjNcclxuICBdLFxyXG4gIHNpemVzOiB7fSxcclxuICBicmVha3BvaW50czogW1xyXG4gICAgJzQ4MHB4JyxcclxuICAgICc2NDBweCcsXHJcbiAgICAnNzY4cHgnLFxyXG4gICAgJzEwMjRweCcsXHJcbiAgICAnMTI2MHB4JyxcclxuICAgICcxMzY3cHgnLFxyXG4gICAgJzE0NDBweCcsXHJcbiAgICAnMTYwMHB4JyxcclxuICBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzcyMHB4JyxcclxuICAgICAgICAnOTcwcHgnLFxyXG4gICAgICAgICcxMTQwcHgnLFxyXG4gICAgICAgICcxMjYwcHgnLFxyXG4gICAgICAgICcxMzY2cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBwYWRkaW5nTGVmdDogWzZdLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IFs2XSxcclxuICAgICAgbTogJzAgYXV0bycsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge30sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHt9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICcwLjNzIGVhc2UtaW4tb3V0IDBzJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAncHJpbWFyeScsXHJcbiAgICAgIG1pbkhlaWdodDogJzYwcHgnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAzMHB4JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYmc6ICdkYXJrJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5TWQ6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMucHJpbWFyeScsXHJcbiAgICAgIG1pbkhlaWdodDogJzUwcHgnLFxyXG4gICAgICBweDogJzI1cHgnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5wcmltYXJ5JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAnc2Vjb25kYXJ5JyxcclxuICAgIH0sXHJcbiAgICBtdXRlZDoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VERjBGMicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3aGl0ZToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBjb2xvcjogJyMwMjA3MTgnLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgcGFkZGluZzogMixcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAvLyBib3hTaGFkb3c6ICcwIDAgNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxyXG4gICAgfSxcclxuICAgIG9mZmVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxyXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcclxuICAgICAgbTogMixcclxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlQ2FyZDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXSxcclxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93J10sXHJcbiAgICAgIHA6IFswLCAzXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyQ29sb3InLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIHB4OiA1LFxyXG4gICAgICBweTogMCxcclxuICAgICAgbWluSGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgfSxcclxuICAgIC8vIGgxLWg2IEhlYWRpbmcgc3R5bGVzXHJcbiAgICBoMToge1xyXG4gICAgICAvLyBmb250RmFtaWx5OiAnbm9uZScsXHJcbiAgICAgIC8vIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICAvLyBmb250U2l6ZTogNixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICAvLyBmb250RmFtaWx5OiAnbm9uZScsXHJcbiAgICAgIC8vIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICAvLyBmb250U2l6ZTogNSxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDQsXHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgfSxcclxuICAgIGg1OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogMixcclxuICAgIH0sXHJcbiAgICBoNjoge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICB9LFxyXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcclxuICAgIGhyOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcclxuICAgIH0sXHJcbiAgICAvLyBhbHNvIHlvdSBjYW4gdXNlIG90aGVyIEhUTUwgZWxlbWVudHMgc3R5bGUgaGVyZVxyXG4gICAgdWw6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgc3JPbmx5OiB7XHJcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcclxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcclxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXHJcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFzb25yeS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9