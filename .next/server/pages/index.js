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
/* harmony import */ var assets_images_icons_linkedin_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! assets/images/icons/linkedin.png */ "./src/assets/images/icons/linkedin.png");
/* harmony import */ var assets_images_icons_linkedin_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_linkedin_png__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/images/icons/whatsapp.png */ "./src/assets/images/icons/whatsapp.png");
/* harmony import */ var assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_images_icons_whatsapp_png__WEBPACK_IMPORTED_MODULE_7__);








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
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _header_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.data */ "./src/components/header/header.data.js");
/* harmony import */ var _header_data_pages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./header.data.pages */ "./src/components/header/header.data.pages.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\sections\\customer-support.js";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2FnZW5kYTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NpZGFkZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZW1haWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2VuZGVyZWNvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaW5zdGFncmFtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9saW5rZWRpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2hhcGUtYm90dG9tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zaGFwZS10b3AucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3RlbGVmb25lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy93aGF0c2FwcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nb19icmFuY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3F1ZW0tc29tb3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzYucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3N1cHBvcnQtdGVhbS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VwcG9ydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2Jhc2UtYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvYmxvZy1wb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2ZhcS1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvcHJpY2UtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLnBhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9sb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb25zL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xncGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24taGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpY2stYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9wYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VJbmZvcm1hY29lcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2NhbGwtdG8tYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9jdXN0b21lci1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3ByZW1pdW0tZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2x1Z2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9saXNoZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJzc2c0MDQiLCJwYWdlIiwibW9kIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFjY29yZGlvbiIsIml0ZW1zIiwiY29tYmluZVJlZHVjZXJzIiwic2luZ2xlIiwicHJldmVudENsb3NlIiwib3BlbkluZGV4ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJtYXAiLCJpbmRleCIsInRpdGxlIiwic3R5bGVzIiwiYWNjb3JkaW9uIiwiaW5jbHVkZXMiLCJyZ2JhIiwiYXJyb3ciLCJjb250ZW50IiwiY29udGVudHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0Iiwid2lkdGgiLCJCYXNlQWNjb3JkaW9uIiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJ0eXBlIiwiZmlsdGVyIiwibG9nIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJjaGFuZ2VzIiwiY2FsbGJhY2siLCJhbGxDaGFuZ2VzIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImNoYW5nZXNPYmplY3QiLCJzdGF0ZVJlZHVjZXIiLCJvblN0YXRlQ2hhbmdlIiwicmVuZGVyIiwiQWNjb3JkaW9uQnV0dG9uIiwicmVzdCIsImJ1dHRvblRvZ2dsZSIsImFjY29yZGlvbkl0ZW0iLCJvdmVyZmxvdyIsIm10IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsInBvc2l0aW9uIiwiYWNjb3JkaW9uQ29udGVudCIsInZhcmlhbnRzIiwib3BlbiIsImhlaWdodCIsIm1hcmdpblRvcCIsImNsb3NlZCIsIkFjY29yZGlvbkNvbnRlbnRzIiwiaXNPcGVuIiwiQWNjb3JkaW9uSXRlbSIsImNsYXNzTmFtZSIsImxlbmd0aCIsInNsaWNlIiwicmVkdWNlcnMiLCJyZWR1Y2UiLCJhY2MiLCJyZWR1Y2VyIiwiQmxvZ1Bvc3QiLCJwb3N0Iiwic2x1ZyIsInNsdWdpZnkiLCJtbl90aXR1bG8iLCJ0aHVtYm5haWwiLCJtbl9pbWFnZW0xIiwibW5fdGl0bGUiLCJleGNlcnB0IiwibW5fZGVzY3JpY2FvIiwibGVhcm5Nb3JlIiwibXgiLCJtYiIsImltZyIsImEiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRPdmVyZmxvdyIsIldlYmtpdExpbmVDbGFtcCIsIldlYmtpdEJveE9yaWVudCIsIkZhcUl0ZW0iLCJmYXEiLCJxdWVzIiwiYW5zIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luQm90dG9tIiwiaDMiLCJGZWF0dXJlIiwiZmVhdHVyZSIsImljb24iLCJkZXNjcmlwdGlvbiIsImZpZ3VyZSIsIm1pbldpZHRoIiwibXIiLCJQcmljZVRhYmxlIiwiaXNSZWNvbW1lbmRlZCIsInN1YnRpdGxlIiwibGluayIsInByaWNlVGFibGUiLCJoZWFkZXIiLCJsaXN0IiwiTW5fVGl0dWxvIiwib2JyX25vbWUiLCJhbGlnblNlbGYiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJ1dHRvbiIsInJlY29tTGFiZWwiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJtaW5IZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwicHJpY2VBbW91bnQiLCJsaXN0U3R5bGUiLCJtYXhXaWR0aCIsImxpIiwic3ZnIiwib3BhY2l0eSIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiU2VydmljZSIsImNvdGFjYW8iLCJzZXJ2aWNlIiwiY290ZF9ub21lIiwicHJpY2UiLCJjb3RkX2NvbXByYSIsImNvdGRfdmVuZGEiLCJ0aGVtZSIsImNvbG9ycyIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwibWVudUl0ZW1zIiwiaWQiLCJ0ZWxlZm9uZSIsImxhYmVsIiwiZW1haWwiLCJlbmRlcmVjbyIsImNpZGFkZSIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwid2hhdHNhcHAiLCJmb290ZXJOYXYiLCJGb290ZXIiLCJmb290ZXIiLCJmb290ZXJUb3BJbm5lciIsImFib3V0IiwibG9nbyIsIkxvZ28iLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwdCIsInBiIiwiZ2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZvb3RlcklubmVyIiwiYm9yZGVyVG9wIiwiZ3JpZFJvdyIsImdyaWRDb2x1bW4iLCJ0ZXJtcyIsInNwYW4iLCJXaWRnZXQiLCJmb290ZXJXaWRnZXQiLCJ0b1N0cmluZyIsImZvbnRGYW1pbHkiLCJ1bCIsIm1hcmdpbiIsIkJhciIsImlzU3RpY2t5IiwiSGFtYnVyZ2VyTWVudSIsInRvZ2dsZU1vYmlsZU1lbnUiLCJiYXIiLCJ0cmFuc2Zvcm0iLCJvdXRsaW5lIiwibWwiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudSIsImhhbmRsZVN0YXRlQ2hhbmdlIiwic3RhdHVzIiwiU3RpY2t5IiwiU1RBVFVTX0ZJWEVEIiwicHJldiIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwiaGFtYnVyZ2VyIiwicHkiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkxlZnQiLCJsb2dpbiIsImpvaW5Db21tdW5pdHkiLCJOYXZiYXIiLCJpc01vYmlsZSIsInVzZVJvdXRlciIsIm5hdmJhciIsIm1lbnVJdGVtc1BhZ2VzIiwiZmxleEdyb3ciLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtT3JpZ2luIiwiTG9jayIsImZpbGwiLCJ3aGl0ZSIsIm1peEJsZW5kTW9kZSIsIkltYWdlIiwic3JjIiwiTGF5b3V0IiwidmFyaWFudCIsIkxncGQiLCJzZXRJc09wZW4iLCJ1c2VFZmZlY3QiLCJhY2VpdGVMZ3BkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xvc2VMZ3BkIiwic2V0SXRlbSIsImNvb2tpZVBvcHVwIiwiY29va2llUG9wdXBBY3Rpb25zIiwiZmxleFdyYXAiLCJib3R0b20iLCJ6SW5kZXgiLCJmbGV4IiwiZm9udFN0eWxlIiwiTmF2TGluayIsIkxlYXJuTW9yZSIsImZhZGVSaWdodCIsImtleWZyYW1lcyIsImFuaW1hdGlvbiIsImxvZ29CcmFuY28iLCJTZWN0aW9uSGVhZGluZyIsInNsb2dhbiIsImVtb2ppIiwiaGVhZGluZyIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwiZGVmYXVsdFByb3BzIiwibGFuZyIsIlNsaWNrQXJyb3ciLCJjb250cm9sIiwicGFnaW5hdGlvbkJ1dHRvbiIsImluZm8iLCJUb3BCYXIiLCJ0b3BiYXIiLCJweCIsInBsIiwicHIiLCJ3aGl0ZVNwYWNlIiwic3Ryb25nIiwiYm9yZGVyTGVmdCIsIkluZm9ybWFjb2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJvcmdhbml6YXJPYnJpZ2Fjb2VzUG9yRXN0YWRvIiwib2JyaWdhY29lc0dlcmFsIiwiZXNwaXJpdG9TYW50byIsIm9iciIsIm1uX2VzdWJwYXN0YSIsIm1hdG9Hcm9zc29Eb1N1bCIsIm1pbmFzR2VyYWlzIiwicmlvR3JhbmRlRG9TdWwiLCJwYXJhbmEiLCJyaW9EZUphbmVpcm8iLCJzYW50YUNhdGFyaW5hIiwic2FvUGF1bG8iLCJJbmZvcm1hY29lc1Byb3ZpZGVyIiwibm90aWNpYXMiLCJzZXROb3RpY2lhcyIsIm9icmlnYWNvZXMiLCJzZXRPYnJpZ2Fjb2VzIiwiYWdlbmRhIiwic2V0QWdlbmRhIiwiY290YWNvZXMiLCJzZXRDb3RhY29lcyIsInVybDEiLCJhcGkiLCJ1cmwyIiwidXJsMyIsInVybDQiLCJheGlvcyIsInRoZW4iLCJzcHJlYWQiLCJyZXNwb25zZXMiLCJ1c2VJbmZvcm1hY29lcyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlYXRlIiwiYmFzZVVSTCIsIkluZGV4UGFnZSIsIkJhbm5lciIsInNlY3Rpb24iLCJncmlkIiwiZG9tYWluQ2FyZCIsImlucHV0R3JvdXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYW5uZXIiLCJoMiIsImlucHV0IiwiV2Via2l0Qm94U2hhZG93Iiwic2VsZWN0Iiwic3VibWl0Iiwibm90ZSIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5maW5pdGUiLCJCbG9nIiwibW5fY29kaWdvIiwiQ2FsbFRvQWN0aW9uIiwiY29udGVudEJveCIsImJ0bldyYXBwZXIiLCJCZ1NoYXBlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwic2hhcGVUb3AiLCJzaGFwZUJvdHRvbSIsIkN1c3RvbWVyU3VwcG9ydCIsImlsbHVzdHJhdGlvbiIsInN1cHBvcnQiLCJzdW1tYXJ5IiwibWFzb25yeU9wdGlvbnMiLCJvcmlnaW5Ub3AiLCJGYXEiLCJQcmVtaXVtRmVhdHVyZSIsInF1ZW1Tb21vcyIsImFjY29yZGlvbkdyb3VwIiwiZmVhdHVyZXMiLCJpc0F2YWlsYWJsZSIsImJ1dHRvblRleHQiLCJQcmljaW5nIiwiZGlhIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibWVzIiwiZ2V0TW9udGgiLCJhbm8iLCJkYXRhQXR1YWwiLCJpbWFnZSIsIkltYWdlQWdlbmRhIiwiU2VydmljZXMiLCJjb3RkX2NvZGlnbyIsIlN1cHBvcnQiLCJ0aHVtYldyYXBwZXIiLCJzdXBwb3J0VGVhbSIsIlRlc3RpbW9uaWFsIiwiZHluYW1pYyIsInNzciIsImF2YXRhciIsImF1dGhvck5hbWUiLCJkZXNpZ25hdGlvbiIsInRleHQiLCJUZXN0aW1vbmlhbHMiLCJhcnJvd3MiLCJkb3RzIiwiZmFkZSIsImNhcm91c2VsIiwidGV4dEluZGVudCIsImljb24xIiwiaWNvbjIiLCJpY29uMyIsImljb240IiwiaWNvbjUiLCJpY29uNiIsIlVsdGltYXRlRmVhdHVyZXMiLCJoNCIsImpvaW4iLCJub3JtYWxpemUiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJ0ZXh0U2Vjb25kYXJ5IiwiaGVhZGluZ1NlY29uZGFyeSIsImJhY2tncm91bmRTZWNvbmRhcnkiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwibXV0ZWQiLCJhY2NlbnQiLCJkYXJrIiwibW9kZXMiLCJmb250cyIsImJvZHkiLCJtb25vc3BhY2UiLCJmb250U2l6ZXMiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsImxldHRlclNwYWNpbmdzIiwiY2FwcyIsInNwYWNlIiwic2l6ZXMiLCJicmVha3BvaW50cyIsImxheW91dCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFpbiIsImxpbmtzIiwiaW1hZ2VzIiwiYnV0dG9ucyIsImRlZmF1bHQiLCJiZyIsInByaW1hcnlNZCIsImNhcmRzIiwib2ZmZXIiLCJmZWF0dXJlQ2FyZCIsImZvcm1zIiwidCIsImJhZGdlcyIsInJvb3QiLCJoMSIsImg1IiwiaDYiLCJociIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsK0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsb0Q7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsNkM7Ozs7Ozs7Ozs7O0FDQUEscUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBjaHVua3NcbiBcdC8vIFwiMFwiIG1lYW5zIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwYWdlcy9pbmRleFwiOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuIFx0Ly8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuIFx0Ly8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSBmdW5jdGlvbiByZXF1aXJlRW5zdXJlKGNodW5rSWQpIHtcbiBcdFx0dmFyIHByb21pc2VzID0gW107XG5cblxuIFx0XHQvLyByZXF1aXJlKCkgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdC8vIFwiMFwiIGlzIHRoZSBzaWduYWwgZm9yIFwiYWxyZWFkeSBsb2FkZWRcIlxuIFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IDApIHtcbiBcdFx0XHR2YXIgY2h1bmsgPSByZXF1aXJlKFwiLi4vXCIgKyAoe31bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuanNcIik7XG4gXHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHRcdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0lkcy5sZW5ndGg7IGkrKylcbiBcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0gPSAwO1xuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIHVuY2F1Z2h0IGVycm9yIGhhbmRsZXIgZm9yIHdlYnBhY2sgcnVudGltZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikge1xuIFx0XHRwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uKCkge1xuIFx0XHRcdHRocm93IGVycjsgLy8gY2F0Y2ggdGhpcyBlcnJvciBieSB1c2luZyBpbXBvcnQoKS5jYXRjaCgpXG4gXHRcdH0pO1xuIFx0fTtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvcGFnZXMvaW5kZXguanNcIik7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0LmpzXCIpOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IFtjaGlsZEVsbSwgc2V0Q2hpbGRFbG1dID0gUmVhY3QudXNlU3RhdGU8RWxlbWVudD4oKVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKFxuICAgICAgcCAmJlxuICAgICAgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgJiZcbiAgICAgIGNoaWxkRWxtICYmXG4gICAgICBjaGlsZEVsbS50YWdOYW1lICYmXG4gICAgICBpc0xvY2FsVVJMKGhyZWYpXG4gICAgKSB7XG4gICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdXG4gICAgICBpZiAoIWlzUHJlZmV0Y2hlZCkge1xuICAgICAgICByZXR1cm4gbGlzdGVuVG9JbnRlcnNlY3Rpb25zKGNoaWxkRWxtLCAoKSA9PiB7XG4gICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcylcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtwLCBjaGlsZEVsbSwgaHJlZiwgYXMsIHJvdXRlcl0pXG5cbiAgbGV0IHsgY2hpbGRyZW4sIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlIH0gPSBwcm9wc1xuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUHJvcHM6IHtcbiAgICBvbk1vdXNlRW50ZXI/OiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIG9uQ2xpY2s6IFJlYWN0Lk1vdXNlRXZlbnRIYW5kbGVyXG4gICAgaHJlZj86IHN0cmluZ1xuICAgIHJlZj86IGFueVxuICB9ID0ge1xuICAgIHJlZjogKGVsOiBhbnkpID0+IHtcbiAgICAgIGlmIChlbCkgc2V0Q2hpbGRFbG0oZWwpXG5cbiAgICAgIGlmIChjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZikge1xuICAgICAgICBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGQucmVmKGVsKVxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgY2hpbGQucmVmID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNoaWxkLnJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgb25DbGljazogKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25DbGljayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbkNsaWNrKGUpXG4gICAgICB9XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSlcbiAgICAgIH1cbiAgICB9LFxuICB9XG5cbiAgaWYgKHApIHtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyKGUpXG4gICAgICB9XG4gICAgICBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCB7IHByaW9yaXR5OiB0cnVlIH0pXG4gICAgfVxuICB9XG5cbiAgLy8gSWYgY2hpbGQgaXMgYW4gPGE+IHRhZyBhbmQgZG9lc24ndCBoYXZlIGEgaHJlZiBhdHRyaWJ1dGUsIG9yIGlmIHRoZSAncGFzc0hyZWYnIHByb3BlcnR5IGlzXG4gIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxuICBpZiAocHJvcHMucGFzc0hyZWYgfHwgKGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpKSB7XG4gICAgY2hpbGRQcm9wcy5ocmVmID0gYWRkQmFzZVBhdGgoXG4gICAgICBhZGRMb2NhbGUoXG4gICAgICAgIGFzLFxuICAgICAgICB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlLFxuICAgICAgICByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGVcbiAgICAgIClcbiAgICApXG4gIH1cblxuICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGNoaWxkLCBjaGlsZFByb3BzKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaW5rXG4iLCIvKipcbiAqIFJlbW92ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBpZiB0aGVyZSBpcyBvbmUuIFByZXNlcnZlcyB0aGUgcm9vdCBwYXRoIGAvYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIHJldHVybiBwYXRoLmVuZHNXaXRoKCcvJykgJiYgcGF0aCAhPT0gJy8nID8gcGF0aC5zbGljZSgwLCAtMSkgOiBwYXRoXG59XG5cbi8qKlxuICogTm9ybWFsaXplcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGFjY29yZGluZyB0byB0aGUgYHRyYWlsaW5nU2xhc2hgIG9wdGlvblxuICogaW4gYG5leHQuY29uZmlnLmpzYC5cbiAqL1xuZXhwb3J0IGNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIXG4gID8gKHBhdGg6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgICBpZiAoL1xcLlteL10rXFwvPyQvLnRlc3QocGF0aCkpIHtcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpXG4gICAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLydcbiAgICAgIH1cbiAgICB9XG4gIDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2hcbiIsIi8qIGdsb2JhbCB3aW5kb3cgKi9cbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBSb3V0ZXIsIHsgTmV4dFJvdXRlciB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgUm91dGVyQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dCdcblxudHlwZSBDbGFzc0FyZ3VtZW50czxUPiA9IFQgZXh0ZW5kcyBuZXcgKC4uLmFyZ3M6IGluZmVyIFUpID0+IGFueSA/IFUgOiBhbnlcblxudHlwZSBSb3V0ZXJBcmdzID0gQ2xhc3NBcmd1bWVudHM8dHlwZW9mIFJvdXRlcj5cblxudHlwZSBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IFJvdXRlciB8IG51bGxcbiAgcmVhZHlDYWxsYmFja3M6IEFycmF5PCgpID0+IGFueT5cbiAgcmVhZHkoY2I6ICgpID0+IGFueSk6IHZvaWRcbn1cblxuZXhwb3J0IHsgUm91dGVyLCBOZXh0Um91dGVyIH1cblxuZXhwb3J0IHR5cGUgU2luZ2xldG9uUm91dGVyID0gU2luZ2xldG9uUm91dGVyQmFzZSAmIE5leHRSb3V0ZXJcblxuY29uc3Qgc2luZ2xldG9uUm91dGVyOiBTaW5nbGV0b25Sb3V0ZXJCYXNlID0ge1xuICByb3V0ZXI6IG51bGwsIC8vIGhvbGRzIHRoZSBhY3R1YWwgcm91dGVyIGluc3RhbmNlXG4gIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgcmVhZHkoY2I6ICgpID0+IHZvaWQpIHtcbiAgICBpZiAodGhpcy5yb3V0ZXIpIHJldHVybiBjYigpXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpXG4gICAgfVxuICB9LFxufVxuXG4vLyBDcmVhdGUgcHVibGljIHByb3BlcnRpZXMgYW5kIG1ldGhvZHMgb2YgdGhlIHJvdXRlciBpbiB0aGUgc2luZ2xldG9uUm91dGVyXG5jb25zdCB1cmxQcm9wZXJ0eUZpZWxkcyA9IFtcbiAgJ3BhdGhuYW1lJyxcbiAgJ3JvdXRlJyxcbiAgJ3F1ZXJ5JyxcbiAgJ2FzUGF0aCcsXG4gICdjb21wb25lbnRzJyxcbiAgJ2lzRmFsbGJhY2snLFxuICAnYmFzZVBhdGgnLFxuICAnbG9jYWxlJyxcbiAgJ2xvY2FsZXMnLFxuICAnZGVmYXVsdExvY2FsZScsXG5dXG5jb25zdCByb3V0ZXJFdmVudHMgPSBbXG4gICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLFxuICAncm91dGVDaGFuZ2VDb21wbGV0ZScsXG4gICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgJ2hhc2hDaGFuZ2VTdGFydCcsXG4gICdoYXNoQ2hhbmdlQ29tcGxldGUnLFxuXVxuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgJ3B1c2gnLFxuICAncmVwbGFjZScsXG4gICdyZWxvYWQnLFxuICAnYmFjaycsXG4gICdwcmVmZXRjaCcsXG4gICdiZWZvcmVQb3BTdGF0ZScsXG5dXG5cbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gIGdldCgpIHtcbiAgICByZXR1cm4gUm91dGVyLmV2ZW50c1xuICB9LFxufSlcblxudXJsUHJvcGVydHlGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gSGVyZSB3ZSBuZWVkIHRvIHVzZSBPYmplY3QuZGVmaW5lUHJvcGVydHkgYmVjYXVzZSwgd2UgbmVlZCB0byByZXR1cm5cbiAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gIC8vIFRoZSB2YWx1ZSBtaWdodCBnZXQgY2hhbmdlZCBhcyB3ZSBjaGFuZ2Ugcm91dGVzIGFuZCB0aGlzIGlzIHRoZVxuICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgIGdldCgpIHtcbiAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF0gYXMgc3RyaW5nXG4gICAgfSxcbiAgfSlcbn0pXG5cbmNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgLy8gV2UgZG9uJ3QgcmVhbGx5IGtub3cgdGhlIHR5cGVzIGhlcmUsIHNvIHdlIGFkZCB0aGVtIGxhdGVyIGluc3RlYWRcbiAgOyhzaW5nbGV0b25Sb3V0ZXIgYXMgYW55KVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICB9XG59KVxuXG5yb3V0ZXJFdmVudHMuZm9yRWFjaCgoZXZlbnQpID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5KCgpID0+IHtcbiAgICBSb3V0ZXIuZXZlbnRzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgY29uc3QgZXZlbnRGaWVsZCA9IGBvbiR7ZXZlbnQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtldmVudC5zdWJzdHJpbmcoXG4gICAgICAgIDFcbiAgICAgICl9YFxuICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlciBhcyBhbnlcbiAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGVuIHJ1bm5pbmcgdGhlIFJvdXRlciBldmVudDogJHtldmVudEZpZWxkfWApXG4gICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgfSlcbn0pXG5cbmZ1bmN0aW9uIGdldFJvdXRlcigpOiBSb3V0ZXIge1xuICBpZiAoIXNpbmdsZXRvblJvdXRlci5yb3V0ZXIpIHtcbiAgICBjb25zdCBtZXNzYWdlID1cbiAgICAgICdObyByb3V0ZXIgaW5zdGFuY2UgZm91bmQuXFxuJyArXG4gICAgICAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgaW5zaWRlIHRoZSBjbGllbnQgc2lkZSBvZiB5b3VyIGFwcC5cXG4nXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gRXhwb3J0IHRoZSBzaW5nbGV0b25Sb3V0ZXIgYW5kIHRoaXMgaXMgdGhlIHB1YmxpYyBBUEkuXG5leHBvcnQgZGVmYXVsdCBzaW5nbGV0b25Sb3V0ZXIgYXMgU2luZ2xldG9uUm91dGVyXG5cbi8vIFJlZXhwb3J0IHRoZSB3aXRoUm91dGUgSE9DXG5leHBvcnQgeyBkZWZhdWx0IGFzIHdpdGhSb3V0ZXIgfSBmcm9tICcuL3dpdGgtcm91dGVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gdXNlUm91dGVyKCk6IE5leHRSb3V0ZXIge1xuICByZXR1cm4gUmVhY3QudXNlQ29udGV4dChSb3V0ZXJDb250ZXh0KVxufVxuXG4vLyBJTlRFUk5BTCBBUElTXG4vLyAtLS0tLS0tLS0tLS0tXG4vLyAoZG8gbm90IHVzZSBmb2xsb3dpbmcgZXhwb3J0cyBpbnNpZGUgdGhlIGFwcClcblxuLy8gQ3JlYXRlIGEgcm91dGVyIGFuZCBhc3NpZ24gaXQgYXMgdGhlIHNpbmdsZXRvbiBpbnN0YW5jZS5cbi8vIFRoaXMgaXMgdXNlZCBpbiBjbGllbnQgc2lkZSB3aGVuIHdlIGFyZSBpbml0aWxpemluZyB0aGUgYXBwLlxuLy8gVGhpcyBzaG91bGQgKipub3QqKiB1c2UgaW5zaWRlIHRoZSBzZXJ2ZXIuXG5leHBvcnQgY29uc3QgY3JlYXRlUm91dGVyID0gKC4uLmFyZ3M6IFJvdXRlckFyZ3MpOiBSb3V0ZXIgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucm91dGVyID0gbmV3IFJvdXRlciguLi5hcmdzKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MuZm9yRWFjaCgoY2IpID0+IGNiKCkpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdXG5cbiAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXJcbn1cblxuLy8gVGhpcyBmdW5jdGlvbiBpcyB1c2VkIHRvIGNyZWF0ZSB0aGUgYHdpdGhSb3V0ZXJgIHJvdXRlciBpbnN0YW5jZVxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZShyb3V0ZXI6IFJvdXRlcik6IE5leHRSb3V0ZXIge1xuICBjb25zdCBfcm91dGVyID0gcm91dGVyIGFzIGFueVxuICBjb25zdCBpbnN0YW5jZSA9IHt9IGFzIGFueVxuXG4gIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdXJsUHJvcGVydHlGaWVsZHMpIHtcbiAgICBpZiAodHlwZW9mIF9yb3V0ZXJbcHJvcGVydHldID09PSAnb2JqZWN0Jykge1xuICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgQXJyYXkuaXNBcnJheShfcm91dGVyW3Byb3BlcnR5XSkgPyBbXSA6IHt9LFxuICAgICAgICBfcm91dGVyW3Byb3BlcnR5XVxuICAgICAgKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgY29udGludWVcbiAgICB9XG5cbiAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyW3Byb3BlcnR5XVxuICB9XG5cbiAgLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuICBpbnN0YW5jZS5ldmVudHMgPSBSb3V0ZXIuZXZlbnRzXG5cbiAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgIGluc3RhbmNlW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgICAgcmV0dXJuIF9yb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiBpbnN0YW5jZVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dENvbXBvbmVudFR5cGUsIE5leHRQYWdlQ29udGV4dCB9IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi91dGlscydcbmltcG9ydCB7IE5leHRSb3V0ZXIsIHVzZVJvdXRlciB9IGZyb20gJy4vcm91dGVyJ1xuXG5leHBvcnQgdHlwZSBXaXRoUm91dGVyUHJvcHMgPSB7XG4gIHJvdXRlcjogTmV4dFJvdXRlclxufVxuXG5leHBvcnQgdHlwZSBFeGNsdWRlUm91dGVyUHJvcHM8UD4gPSBQaWNrPFxuICBQLFxuICBFeGNsdWRlPGtleW9mIFAsIGtleW9mIFdpdGhSb3V0ZXJQcm9wcz5cbj5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gd2l0aFJvdXRlcjxcbiAgUCBleHRlbmRzIFdpdGhSb3V0ZXJQcm9wcyxcbiAgQyA9IE5leHRQYWdlQ29udGV4dFxuPihcbiAgQ29tcG9zZWRDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPEMsIGFueSwgUD5cbik6IFJlYWN0LkNvbXBvbmVudFR5cGU8RXhjbHVkZVJvdXRlclByb3BzPFA+PiB7XG4gIGZ1bmN0aW9uIFdpdGhSb3V0ZXJXcmFwcGVyKHByb3BzOiBhbnkpIHtcbiAgICByZXR1cm4gPENvbXBvc2VkQ29tcG9uZW50IHJvdXRlcj17dXNlUm91dGVyKCl9IHsuLi5wcm9wc30gLz5cbiAgfVxuXG4gIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wc1xuICAvLyBUaGlzIGlzIG5lZWRlZCB0byBhbGxvdyBjaGVja2luZyBmb3IgY3VzdG9tIGdldEluaXRpYWxQcm9wcyBpbiBfYXBwXG4gIDsoV2l0aFJvdXRlcldyYXBwZXIgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzID0gKENvbXBvc2VkQ29tcG9uZW50IGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wc1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IG5hbWUgPVxuICAgICAgQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbiAgICBXaXRoUm91dGVyV3JhcHBlci5kaXNwbGF5TmFtZSA9IGB3aXRoUm91dGVyKCR7bmFtZX0pYFxuICB9XG5cbiAgcmV0dXJuIFdpdGhSb3V0ZXJXcmFwcGVyXG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8qKlxuICogVG9rZW5pemUgaW5wdXQgc3RyaW5nLlxuICovXG5mdW5jdGlvbiBsZXhlcihzdHIpIHtcbiAgICB2YXIgdG9rZW5zID0gW107XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChpIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHN0cltpXTtcbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKlwiIHx8IGNoYXIgPT09IFwiK1wiIHx8IGNoYXIgPT09IFwiP1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTU9ESUZJRVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVTQ0FQRURfQ0hBUlwiLCBpbmRleDogaSsrLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ7XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJPUEVOXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJ9XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDTE9TRVwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICB2YXIgbmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvZGUgPSBzdHIuY2hhckNvZGVBdChqKTtcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgLy8gYDAtOWBcbiAgICAgICAgICAgICAgICAoY29kZSA+PSA0OCAmJiBjb2RlIDw9IDU3KSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgQS1aYFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA2NSAmJiBjb2RlIDw9IDkwKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgYS16YFxuICAgICAgICAgICAgICAgICAgICAoY29kZSA+PSA5NyAmJiBjb2RlIDw9IDEyMikgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYF9gXG4gICAgICAgICAgICAgICAgICAgIGNvZGUgPT09IDk1KSB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWUgKz0gc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghbmFtZSlcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXJhbWV0ZXIgbmFtZSBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk5BTUVcIiwgaW5kZXg6IGksIHZhbHVlOiBuYW1lIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgIHZhciBjb3VudCA9IDE7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IFwiXCI7XG4gICAgICAgICAgICB2YXIgaiA9IGkgKyAxO1xuICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUGF0dGVybiBjYW5ub3Qgc3RhcnQgd2l0aCBcXFwiP1xcXCIgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK10gKyBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiKVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50LS07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoc3RyW2pdID09PSBcIihcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RyW2ogKyAxXSAhPT0gXCI/XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYXB0dXJpbmcgZ3JvdXBzIGFyZSBub3QgYWxsb3dlZCBhdCBcIiArIGopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdHRlcm4gKz0gc3RyW2orK107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY291bnQpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuYmFsYW5jZWQgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgaWYgKCFwYXR0ZXJuKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJQQVRURVJOXCIsIGluZGV4OiBpLCB2YWx1ZTogcGF0dGVybiB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNIQVJcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICB9XG4gICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkVORFwiLCBpbmRleDogaSwgdmFsdWU6IFwiXCIgfSk7XG4gICAgcmV0dXJuIHRva2Vucztcbn1cbi8qKlxuICogUGFyc2UgYSBzdHJpbmcgZm9yIHRoZSByYXcgdG9rZW5zLlxuICovXG5mdW5jdGlvbiBwYXJzZShzdHIsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciB0b2tlbnMgPSBsZXhlcihzdHIpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMucHJlZml4ZXMsIHByZWZpeGVzID0gX2EgPT09IHZvaWQgMCA/IFwiLi9cIiA6IF9hO1xuICAgIHZhciBkZWZhdWx0UGF0dGVybiA9IFwiW15cIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXSs/XCI7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBrZXkgPSAwO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgdmFyIHRyeUNvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBpZiAoaSA8IHRva2Vucy5sZW5ndGggJiYgdG9rZW5zW2ldLnR5cGUgPT09IHR5cGUpXG4gICAgICAgICAgICByZXR1cm4gdG9rZW5zW2krK10udmFsdWU7XG4gICAgfTtcbiAgICB2YXIgbXVzdENvbnN1bWUgPSBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0cnlDb25zdW1lKHR5cGUpO1xuICAgICAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgdmFyIF9hID0gdG9rZW5zW2ldLCBuZXh0VHlwZSA9IF9hLnR5cGUsIGluZGV4ID0gX2EuaW5kZXg7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmV4cGVjdGVkIFwiICsgbmV4dFR5cGUgKyBcIiBhdCBcIiArIGluZGV4ICsgXCIsIGV4cGVjdGVkIFwiICsgdHlwZSk7XG4gICAgfTtcbiAgICB2YXIgY29uc3VtZVRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBcIlwiO1xuICAgICAgICB2YXIgdmFsdWU7XG4gICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICB3aGlsZSAoKHZhbHVlID0gdHJ5Q29uc3VtZShcIkNIQVJcIikgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKSkpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgd2hpbGUgKGkgPCB0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gdHJ5Q29uc3VtZShcIkNIQVJcIik7XG4gICAgICAgIHZhciBuYW1lID0gdHJ5Q29uc3VtZShcIk5BTUVcIik7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIik7XG4gICAgICAgIGlmIChuYW1lIHx8IHBhdHRlcm4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjaGFyIHx8IFwiXCI7XG4gICAgICAgICAgICBpZiAocHJlZml4ZXMuaW5kZXhPZihwcmVmaXgpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gcHJlZml4O1xuICAgICAgICAgICAgICAgIHByZWZpeCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWUgfHwga2V5KyssXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IHBhdHRlcm4gfHwgZGVmYXVsdFBhdHRlcm4sXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciB2YWx1ZSA9IGNoYXIgfHwgdHJ5Q29uc3VtZShcIkVTQ0FQRURfQ0hBUlwiKTtcbiAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICBwYXRoICs9IHZhbHVlO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG9wZW4gPSB0cnlDb25zdW1lKFwiT1BFTlwiKTtcbiAgICAgICAgaWYgKG9wZW4pIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgdmFyIG5hbWVfMSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgcGF0dGVybl8xID0gdHJ5Q29uc3VtZShcIlBBVFRFUk5cIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBjb25zdW1lVGV4dCgpO1xuICAgICAgICAgICAgbXVzdENvbnN1bWUoXCJDTE9TRVwiKTtcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lXzEgfHwgKHBhdHRlcm5fMSA/IGtleSsrIDogXCJcIiksXG4gICAgICAgICAgICAgICAgcGF0dGVybjogbmFtZV8xICYmICFwYXR0ZXJuXzEgPyBkZWZhdWx0UGF0dGVybiA6IHBhdHRlcm5fMSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IHN1ZmZpeCxcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgbXVzdENvbnN1bWUoXCJFTkRcIik7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlID0gcGFyc2U7XG4vKipcbiAqIENvbXBpbGUgYSBzdHJpbmcgdG8gYSB0ZW1wbGF0ZSBmdW5jdGlvbiBmb3IgdGhlIHBhdGguXG4gKi9cbmZ1bmN0aW9uIGNvbXBpbGUoc3RyLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvRnVuY3Rpb24ocGFyc2Uoc3RyLCBvcHRpb25zKSwgb3B0aW9ucyk7XG59XG5leHBvcnRzLmNvbXBpbGUgPSBjb21waWxlO1xuLyoqXG4gKiBFeHBvc2UgYSBtZXRob2QgZm9yIHRyYW5zZm9ybWluZyB0b2tlbnMgaW50byB0aGUgcGF0aCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9GdW5jdGlvbih0b2tlbnMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciByZUZsYWdzID0gZmxhZ3Mob3B0aW9ucyk7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hLCBfYiA9IG9wdGlvbnMudmFsaWRhdGUsIHZhbGlkYXRlID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYjtcbiAgICAvLyBDb21waWxlIGFsbCB0aGUgdG9rZW5zIGludG8gcmVnZXhwcy5cbiAgICB2YXIgbWF0Y2hlcyA9IHRva2Vucy5tYXAoZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSRcIiwgcmVGbGFncyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHBhdGggPSBcIlwiO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zW2ldO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW47XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhID8gZGF0YVt0b2tlbi5uYW1lXSA6IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIHZhciBvcHRpb25hbCA9IHRva2VuLm1vZGlmaWVyID09PSBcIj9cIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCI7XG4gICAgICAgICAgICB2YXIgcmVwZWF0ID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIitcIjtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmICghcmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG5vdCBiZSBlbXB0eVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCB2YWx1ZS5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZSh2YWx1ZVtqXSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGFsbCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgdmFsdWUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IGVuY29kZShTdHJpbmcodmFsdWUpLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuLnByZWZpeCArIHNlZ21lbnQgKyB0b2tlbi5zdWZmaXg7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB2YXIgdHlwZU9mTWVzc2FnZSA9IHJlcGVhdCA/IFwiYW4gYXJyYXlcIiA6IFwiYSBzdHJpbmdcIjtcbiAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIGJlIFwiICsgdHlwZU9mTWVzc2FnZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgfTtcbn1cbmV4cG9ydHMudG9rZW5zVG9GdW5jdGlvbiA9IHRva2Vuc1RvRnVuY3Rpb247XG4vKipcbiAqIENyZWF0ZSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBzcGVjLlxuICovXG5mdW5jdGlvbiBtYXRjaChzdHIsIG9wdGlvbnMpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIHZhciByZSA9IHBhdGhUb1JlZ2V4cChzdHIsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMubWF0Y2ggPSBtYXRjaDtcbi8qKlxuICogQ3JlYXRlIGEgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgb3V0cHV0LlxuICovXG5mdW5jdGlvbiByZWdleHBUb0Z1bmN0aW9uKHJlLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLmRlY29kZSwgZGVjb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2E7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChwYXRobmFtZSkge1xuICAgICAgICB2YXIgbSA9IHJlLmV4ZWMocGF0aG5hbWUpO1xuICAgICAgICBpZiAoIW0pXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIHZhciBwYXRoID0gbVswXSwgaW5kZXggPSBtLmluZGV4O1xuICAgICAgICB2YXIgcGFyYW1zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICBpZiAobVtpXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpIC0gMV07XG4gICAgICAgICAgICBpZiAoa2V5Lm1vZGlmaWVyID09PSBcIipcIiB8fCBrZXkubW9kaWZpZXIgPT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IG1baV0uc3BsaXQoa2V5LnByZWZpeCArIGtleS5zdWZmaXgpLm1hcChmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlY29kZSh2YWx1ZSwga2V5KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBkZWNvZGUobVtpXSwga2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBtLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfbG9vcF8xKGkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGluZGV4OiBpbmRleCwgcGFyYW1zOiBwYXJhbXMgfTtcbiAgICB9O1xufVxuZXhwb3J0cy5yZWdleHBUb0Z1bmN0aW9uID0gcmVnZXhwVG9GdW5jdGlvbjtcbi8qKlxuICogRXNjYXBlIGEgcmVndWxhciBleHByZXNzaW9uIHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gZXNjYXBlU3RyaW5nKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFsuKyo/PV4hOiR7fSgpW1xcXXwvXFxcXF0pL2csIFwiXFxcXCQxXCIpO1xufVxuLyoqXG4gKiBHZXQgdGhlIGZsYWdzIGZvciBhIHJlZ2V4cCBmcm9tIHRoZSBvcHRpb25zLlxuICovXG5mdW5jdGlvbiBmbGFncyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5zaXRpdmUgPyBcIlwiIDogXCJpXCI7XG59XG4vKipcbiAqIFB1bGwgb3V0IGtleXMgZnJvbSBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cykge1xuICAgIGlmICgha2V5cylcbiAgICAgICAgcmV0dXJuIHBhdGg7XG4gICAgLy8gVXNlIGEgbmVnYXRpdmUgbG9va2FoZWFkIHRvIG1hdGNoIG9ubHkgY2FwdHVyaW5nIGdyb3Vwcy5cbiAgICB2YXIgZ3JvdXBzID0gcGF0aC5zb3VyY2UubWF0Y2goL1xcKCg/IVxcPykvZyk7XG4gICAgaWYgKGdyb3Vwcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGdyb3Vwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAga2V5cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBpLFxuICAgICAgICAgICAgICAgIHByZWZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG4vKipcbiAqIFRyYW5zZm9ybSBhbiBhcnJheSBpbnRvIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiBhcnJheVRvUmVnZXhwKHBhdGhzLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgdmFyIHBhcnRzID0gcGF0aHMubWFwKGZ1bmN0aW9uIChwYXRoKSB7IHJldHVybiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykuc291cmNlOyB9KTtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChcIig/OlwiICsgcGFydHMuam9pbihcInxcIikgKyBcIilcIiwgZmxhZ3Mob3B0aW9ucykpO1xufVxuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIHJlZ2V4cCBmcm9tIHN0cmluZyBpbnB1dC5cbiAqL1xuZnVuY3Rpb24gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb1JlZ2V4cChwYXJzZShwYXRoLCBvcHRpb25zKSwga2V5cywgb3B0aW9ucyk7XG59XG4vKipcbiAqIEV4cG9zZSBhIGZ1bmN0aW9uIGZvciB0YWtpbmcgdG9rZW5zIGFuZCByZXR1cm5pbmcgYSBSZWdFeHAuXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvUmVnZXhwKHRva2Vucywga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5zdHJpY3QsIHN0cmljdCA9IF9hID09PSB2b2lkIDAgPyBmYWxzZSA6IF9hLCBfYiA9IG9wdGlvbnMuc3RhcnQsIHN0YXJ0ID0gX2IgPT09IHZvaWQgMCA/IHRydWUgOiBfYiwgX2MgPSBvcHRpb25zLmVuZCwgZW5kID0gX2MgPT09IHZvaWQgMCA/IHRydWUgOiBfYywgX2QgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2QgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2Q7XG4gICAgdmFyIGVuZHNXaXRoID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5lbmRzV2l0aCB8fCBcIlwiKSArIFwiXXwkXCI7XG4gICAgdmFyIGRlbGltaXRlciA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdXCI7XG4gICAgdmFyIHJvdXRlID0gc3RhcnQgPyBcIl5cIiA6IFwiXCI7XG4gICAgLy8gSXRlcmF0ZSBvdmVyIHRoZSB0b2tlbnMgYW5kIGNyZWF0ZSBvdXIgcmVnZXhwIHN0cmluZy5cbiAgICBmb3IgKHZhciBfaSA9IDAsIHRva2Vuc18xID0gdG9rZW5zOyBfaSA8IHRva2Vuc18xLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNfMVtfaV07XG4gICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4pKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBwcmVmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnByZWZpeCkpO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4uc3VmZml4KSk7XG4gICAgICAgICAgICBpZiAodG9rZW4ucGF0dGVybikge1xuICAgICAgICAgICAgICAgIGlmIChrZXlzKVxuICAgICAgICAgICAgICAgICAgICBrZXlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChwcmVmaXggfHwgc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlbi5tb2RpZmllciA9PT0gXCIrXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbW9kID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiID8gXCI/XCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKCg/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSg/OlwiICsgc3VmZml4ICsgcHJlZml4ICsgXCIoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikpKilcIiArIHN1ZmZpeCArIFwiKVwiICsgbW9kO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgc3VmZml4ICsgXCIpXCIgKyB0b2tlbi5tb2RpZmllcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZW5kKSB7XG4gICAgICAgIGlmICghc3RyaWN0KVxuICAgICAgICAgICAgcm91dGUgKz0gZGVsaW1pdGVyICsgXCI/XCI7XG4gICAgICAgIHJvdXRlICs9ICFvcHRpb25zLmVuZHNXaXRoID8gXCIkXCIgOiBcIig/PVwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHZhciBlbmRUb2tlbiA9IHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIHZhciBpc0VuZERlbGltaXRlZCA9IHR5cGVvZiBlbmRUb2tlbiA9PT0gXCJzdHJpbmdcIlxuICAgICAgICAgICAgPyBkZWxpbWl0ZXIuaW5kZXhPZihlbmRUb2tlbltlbmRUb2tlbi5sZW5ndGggLSAxXSkgPiAtMVxuICAgICAgICAgICAgOiAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgICAgICBlbmRUb2tlbiA9PT0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoIXN0cmljdCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIGRlbGltaXRlciArIFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKSk/XCI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFpc0VuZERlbGltaXRlZCkge1xuICAgICAgICAgICAgcm91dGUgKz0gXCIoPz1cIiArIGRlbGltaXRlciArIFwifFwiICsgZW5kc1dpdGggKyBcIilcIjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3IFJlZ0V4cChyb3V0ZSwgZmxhZ3Mob3B0aW9ucykpO1xufVxuZXhwb3J0cy50b2tlbnNUb1JlZ2V4cCA9IHRva2Vuc1RvUmVnZXhwO1xuLyoqXG4gKiBOb3JtYWxpemUgdGhlIGdpdmVuIHBhdGggc3RyaW5nLCByZXR1cm5pbmcgYSByZWd1bGFyIGV4cHJlc3Npb24uXG4gKlxuICogQW4gZW1wdHkgYXJyYXkgY2FuIGJlIHBhc3NlZCBpbiBmb3IgdGhlIGtleXMsIHdoaWNoIHdpbGwgaG9sZCB0aGVcbiAqIHBsYWNlaG9sZGVyIGtleSBkZXNjcmlwdGlvbnMuIEZvciBleGFtcGxlLCB1c2luZyBgL3VzZXIvOmlkYCwgYGtleXNgIHdpbGxcbiAqIGNvbnRhaW4gYFt7IG5hbWU6ICdpZCcsIGRlbGltaXRlcjogJy8nLCBvcHRpb25hbDogZmFsc2UsIHJlcGVhdDogZmFsc2UgfV1gLlxuICovXG5mdW5jdGlvbiBwYXRoVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChwYXRoIGluc3RhbmNlb2YgUmVnRXhwKVxuICAgICAgICByZXR1cm4gcmVnZXhwVG9SZWdleHAocGF0aCwga2V5cyk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkocGF0aCkpXG4gICAgICAgIHJldHVybiBhcnJheVRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xuICAgIHJldHVybiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMucGF0aFRvUmVnZXhwID0gcGF0aFRvUmVnZXhwO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiLypcbk1JVCBMaWNlbnNlXG5cbkNvcHlyaWdodCAoYykgSmFzb24gTWlsbGVyIChodHRwczovL2phc29uZm9ybWF0LmNvbS8pXG5cblBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cbiovXG5cbi8vIFRoaXMgZmlsZSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vZGV2ZWxvcGl0L21pdHQvYmxvYi92MS4xLjMvc3JjL2luZGV4LmpzXG4vLyBJdCdzIGJlZW4gZWRpdGVkIGZvciB0aGUgbmVlZHMgb2YgdGhpcyBzY3JpcHRcbi8vIFNlZSB0aGUgTElDRU5TRSBhdCB0aGUgdG9wIG9mIHRoZSBmaWxlXG5cbnR5cGUgSGFuZGxlciA9ICguLi5ldnRzOiBhbnlbXSkgPT4gdm9pZFxuXG5leHBvcnQgdHlwZSBNaXR0RW1pdHRlciA9IHtcbiAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKTogdm9pZFxuICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pOiB2b2lkXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1pdHQoKTogTWl0dEVtaXR0ZXIge1xuICBjb25zdCBhbGw6IHsgW3M6IHN0cmluZ106IEhhbmRsZXJbXSB9ID0gT2JqZWN0LmNyZWF0ZShudWxsKVxuXG4gIHJldHVybiB7XG4gICAgb24odHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICA7KGFsbFt0eXBlXSB8fCAoYWxsW3R5cGVdID0gW10pKS5wdXNoKGhhbmRsZXIpXG4gICAgfSxcblxuICAgIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIGlmIChhbGxbdHlwZV0pIHtcbiAgICAgICAgYWxsW3R5cGVdLnNwbGljZShhbGxbdHlwZV0uaW5kZXhPZihoYW5kbGVyKSA+Pj4gMCwgMSlcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICA7KGFsbFt0eXBlXSB8fCBbXSkuc2xpY2UoKS5tYXAoKGhhbmRsZXI6IEhhbmRsZXIpID0+IHtcbiAgICAgICAgaGFuZGxlciguLi5ldnRzKVxuICAgICAgfSlcbiAgICB9LFxuICB9XG59XG4iLCIvKiBnbG9iYWwgX19ORVhUX0RBVEFfXyAqL1xuLy8gdHNsaW50OmRpc2FibGU6bm8tY29uc29sZVxuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IENvbXBvbmVudFR5cGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoLFxuICByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCxcbn0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcbmltcG9ydCB7IEdvb2RQYWdlQ2FjaGUsIFN0eWxlU2hlZXRUdXBsZSB9IGZyb20gJy4uLy4uLy4uL2NsaWVudC9wYWdlLWxvYWRlcidcbmltcG9ydCB7IGRlbm9ybWFsaXplUGFnZVBhdGggfSBmcm9tICcuLi8uLi9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoJ1xuaW1wb3J0IG1pdHQsIHsgTWl0dEVtaXR0ZXIgfSBmcm9tICcuLi9taXR0J1xuaW1wb3J0IHtcbiAgQXBwQ29udGV4dFR5cGUsXG4gIGZvcm1hdFdpdGhWYWxpZGF0aW9uLFxuICBnZXRMb2NhdGlvbk9yaWdpbixcbiAgZ2V0VVJMLFxuICBsb2FkR2V0SW5pdGlhbFByb3BzLFxuICBOZXh0UGFnZUNvbnRleHQsXG4gIFNULFxufSBmcm9tICcuLi91dGlscydcbmltcG9ydCB7IGlzRHluYW1pY1JvdXRlIH0gZnJvbSAnLi91dGlscy9pcy1keW5hbWljJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vdXRpbHMvcXVlcnlzdHJpbmcnXG5pbXBvcnQgcmVzb2x2ZVJld3JpdGVzIGZyb20gJy4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcydcbmltcG9ydCB7IGdldFJvdXRlTWF0Y2hlciB9IGZyb20gJy4vdXRpbHMvcm91dGUtbWF0Y2hlcidcbmltcG9ydCB7IGdldFJvdXRlUmVnZXggfSBmcm9tICcuL3V0aWxzL3JvdXRlLXJlZ2V4J1xuaW1wb3J0IGVzY2FwZVBhdGhEZWxpbWl0ZXJzIGZyb20gJy4vdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycydcblxuaW50ZXJmYWNlIFRyYW5zaXRpb25PcHRpb25zIHtcbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2Vcbn1cblxuaW50ZXJmYWNlIE5leHRIaXN0b3J5U3RhdGUge1xuICB1cmw6IHN0cmluZ1xuICBhczogc3RyaW5nXG4gIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG59XG5cbnR5cGUgSGlzdG9yeVN0YXRlID0gbnVsbCB8IHsgX19OOiBmYWxzZSB9IHwgKHsgX19OOiB0cnVlIH0gJiBOZXh0SGlzdG9yeVN0YXRlKVxuXG5jb25zdCBiYXNlUGF0aCA9IChwcm9jZXNzLmVudi5fX05FWFRfUk9VVEVSX0JBU0VQQVRIIGFzIHN0cmluZykgfHwgJydcblxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IEVycm9yKCdSb3V0ZSBDYW5jZWxsZWQnKSwge1xuICAgIGNhbmNlbGxlZDogdHJ1ZSxcbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkUGF0aFByZWZpeChwYXRoOiBzdHJpbmcsIHByZWZpeD86IHN0cmluZykge1xuICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpXG4gICAgPyBwYXRoID09PSAnLydcbiAgICAgID8gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gocHJlZml4KVxuICAgICAgOiBgJHtwcmVmaXh9JHtwYXRofWBcbiAgICA6IHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZShcbiAgcGF0aDogc3RyaW5nLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZSxcbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuKSB7XG4gIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgcGF0aC5zdGFydHNXaXRoKCcvJyArIGxvY2FsZSlcbiAgICAgID8gcGF0aC5zdWJzdHIobG9jYWxlLmxlbmd0aCArIDEpIHx8ICcvJ1xuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhc0Jhc2VQYXRoKHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICByZXR1cm4gcGF0aCA9PT0gYmFzZVBhdGggfHwgcGF0aC5zdGFydHNXaXRoKGJhc2VQYXRoICsgJy8nKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgcmV0dXJuIGFkZFBhdGhQcmVmaXgocGF0aCwgYmFzZVBhdGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5zbGljZShiYXNlUGF0aC5sZW5ndGgpIHx8ICcvJ1xufVxuXG4vKipcbiAqIERldGVjdHMgd2hldGhlciBhIGdpdmVuIHVybCBpcyByb3V0YWJsZSBieSB0aGUgTmV4dC5qcyByb3V0ZXIgKGJyb3dzZXIgb25seSkuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0xvY2FsVVJMKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpKSByZXR1cm4gdHJ1ZVxuICB0cnkge1xuICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxuICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gZ2V0TG9jYXRpb25PcmlnaW4oKVxuICAgIGNvbnN0IHJlc29sdmVkID0gbmV3IFVSTCh1cmwsIGxvY2F0aW9uT3JpZ2luKVxuICAgIHJldHVybiByZXNvbHZlZC5vcmlnaW4gPT09IGxvY2F0aW9uT3JpZ2luICYmIGhhc0Jhc2VQYXRoKHJlc29sdmVkLnBhdGhuYW1lKVxuICB9IGNhdGNoIChfKSB7XG4gICAgcmV0dXJuIGZhbHNlXG4gIH1cbn1cblxudHlwZSBVcmwgPSBVcmxPYmplY3QgfCBzdHJpbmdcblxuZXhwb3J0IGZ1bmN0aW9uIGludGVycG9sYXRlQXMoXG4gIHJvdXRlOiBzdHJpbmcsXG4gIGFzUGF0aG5hbWU6IHN0cmluZyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4pIHtcbiAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJydcblxuICBjb25zdCBkeW5hbWljUmVnZXggPSBnZXRSb3V0ZVJlZ2V4KHJvdXRlKVxuICBjb25zdCBkeW5hbWljR3JvdXBzID0gZHluYW1pY1JlZ2V4Lmdyb3Vwc1xuICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9XG4gICAgLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/IGdldFJvdXRlTWF0Y2hlcihkeW5hbWljUmVnZXgpKGFzUGF0aG5hbWUpIDogJycpIHx8XG4gICAgLy8gRmFsbCBiYWNrIHRvIHJlYWRpbmcgdGhlIHZhbHVlcyBmcm9tIHRoZSBocmVmXG4gICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgdGFrZSBwcmlvcml0eTsgYWxzbyBuZWVkIHRvIGNoYW5nZSBpbiB0aGUgcm91dGVyLlxuICAgIHF1ZXJ5XG5cbiAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZVxuICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKVxuXG4gIGlmIChcbiAgICAhcGFyYW1zLmV2ZXJ5KChwYXJhbSkgPT4ge1xuICAgICAgbGV0IHZhbHVlID0gZHluYW1pY01hdGNoZXNbcGFyYW1dIHx8ICcnXG4gICAgICBjb25zdCB7IHJlcGVhdCwgb3B0aW9uYWwgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dXG5cbiAgICAgIC8vIHN1cHBvcnQgc2luZ2xlLWxldmVsIGNhdGNoLWFsbFxuICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgbGV0IHJlcGxhY2VkID0gYFske3JlcGVhdCA/ICcuLi4nIDogJyd9JHtwYXJhbX1dYFxuICAgICAgaWYgKG9wdGlvbmFsKSB7XG4gICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWBcbiAgICAgIH1cbiAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFt2YWx1ZV1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgKG9wdGlvbmFsIHx8IHBhcmFtIGluIGR5bmFtaWNNYXRjaGVzKSAmJlxuICAgICAgICAvLyBJbnRlcnBvbGF0ZSBncm91cCBpbnRvIGRhdGEgVVJMIGlmIHByZXNlbnRcbiAgICAgICAgKGludGVycG9sYXRlZFJvdXRlID1cbiAgICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSEucmVwbGFjZShcbiAgICAgICAgICAgIHJlcGxhY2VkLFxuICAgICAgICAgICAgcmVwZWF0XG4gICAgICAgICAgICAgID8gKHZhbHVlIGFzIHN0cmluZ1tdKS5tYXAoZXNjYXBlUGF0aERlbGltaXRlcnMpLmpvaW4oJy8nKVxuICAgICAgICAgICAgICA6IGVzY2FwZVBhdGhEZWxpbWl0ZXJzKHZhbHVlIGFzIHN0cmluZylcbiAgICAgICAgICApIHx8ICcvJylcbiAgICAgIClcbiAgICB9KVxuICApIHtcbiAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG5cbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXJhbXMsXG4gICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZSxcbiAgfVxufVxuXG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnk6IFBhcnNlZFVybFF1ZXJ5LCBwYXJhbXM6IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGZpbHRlcmVkUXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgaWYgKCFwYXJhbXMuaW5jbHVkZXMoa2V5KSkge1xuICAgICAgZmlsdGVyZWRRdWVyeVtrZXldID0gcXVlcnlba2V5XVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIGZpbHRlcmVkUXVlcnlcbn1cblxuLyoqXG4gKiBSZXNvbHZlcyBhIGdpdmVuIGh5cGVybGluayB3aXRoIGEgY2VydGFpbiByb3V0ZXIgc3RhdGUgKGJhc2VQYXRoIG5vdCBpbmNsdWRlZCkuXG4gKiBQcmVzZXJ2ZXMgYWJzb2x1dGUgdXJscy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVIcmVmKFxuICBjdXJyZW50UGF0aDogc3RyaW5nLFxuICBocmVmOiBVcmwsXG4gIHJlc29sdmVBcz86IGJvb2xlYW5cbik6IHN0cmluZyB7XG4gIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gIGNvbnN0IGJhc2UgPSBuZXcgVVJMKGN1cnJlbnRQYXRoLCAnaHR0cDovL24nKVxuICBjb25zdCB1cmxBc1N0cmluZyA9XG4gICAgdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6IGZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpXG4gIHRyeSB7XG4gICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKVxuICAgIGZpbmFsVXJsLnBhdGhuYW1lID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpXG4gICAgbGV0IGludGVycG9sYXRlZEFzID0gJydcblxuICAgIGlmIChcbiAgICAgIGlzRHluYW1pY1JvdXRlKGZpbmFsVXJsLnBhdGhuYW1lKSAmJlxuICAgICAgZmluYWxVcmwuc2VhcmNoUGFyYW1zICYmXG4gICAgICByZXNvbHZlQXNcbiAgICApIHtcbiAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpXG5cbiAgICAgIGNvbnN0IHsgcmVzdWx0LCBwYXJhbXMgfSA9IGludGVycG9sYXRlQXMoXG4gICAgICAgIGZpbmFsVXJsLnBhdGhuYW1lLFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgcXVlcnlcbiAgICAgIClcblxuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRBcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgIGhhc2g6IGZpbmFsVXJsLmhhc2gsXG4gICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgcGFyYW1zKSxcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpZiB0aGUgb3JpZ2luIGRpZG4ndCBjaGFuZ2UsIGl0IG1lYW5zIHdlIHJlY2VpdmVkIGEgcmVsYXRpdmUgaHJlZlxuICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9XG4gICAgICBmaW5hbFVybC5vcmlnaW4gPT09IGJhc2Uub3JpZ2luXG4gICAgICAgID8gZmluYWxVcmwuaHJlZi5zbGljZShmaW5hbFVybC5vcmlnaW4ubGVuZ3RoKVxuICAgICAgICA6IGZpbmFsVXJsLmhyZWZcblxuICAgIHJldHVybiAocmVzb2x2ZUFzXG4gICAgICA/IFtyZXNvbHZlZEhyZWYsIGludGVycG9sYXRlZEFzIHx8IHJlc29sdmVkSHJlZl1cbiAgICAgIDogcmVzb2x2ZWRIcmVmKSBhcyBzdHJpbmdcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiAocmVzb2x2ZUFzID8gW3VybEFzU3RyaW5nXSA6IHVybEFzU3RyaW5nKSBhcyBzdHJpbmdcbiAgfVxufVxuXG5jb25zdCBQQUdFX0xPQURfRVJST1IgPSBTeW1ib2woJ1BBR0VfTE9BRF9FUlJPUicpXG5leHBvcnQgZnVuY3Rpb24gbWFya0xvYWRpbmdFcnJvcihlcnI6IEVycm9yKTogRXJyb3Ige1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGVyciwgUEFHRV9MT0FEX0VSUk9SLCB7fSlcbn1cblxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlcjogTmV4dFJvdXRlciwgdXJsOiBVcmwsIGFzOiBVcmwpIHtcbiAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXG4gIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gIHJldHVybiB7XG4gICAgdXJsOiBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIHVybCkpLFxuICAgIGFzOiBhcyA/IGFkZEJhc2VQYXRoKHJlc29sdmVIcmVmKHJvdXRlci5wYXRobmFtZSwgYXMpKSA6IGFzLFxuICB9XG59XG5cbmV4cG9ydCB0eXBlIEJhc2VSb3V0ZXIgPSB7XG4gIHJvdXRlOiBzdHJpbmdcbiAgcGF0aG5hbWU6IHN0cmluZ1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgYXNQYXRoOiBzdHJpbmdcbiAgYmFzZVBhdGg6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgTmV4dFJvdXRlciA9IEJhc2VSb3V0ZXIgJlxuICBQaWNrPFxuICAgIFJvdXRlcixcbiAgICB8ICdwdXNoJ1xuICAgIHwgJ3JlcGxhY2UnXG4gICAgfCAncmVsb2FkJ1xuICAgIHwgJ2JhY2snXG4gICAgfCAncHJlZmV0Y2gnXG4gICAgfCAnYmVmb3JlUG9wU3RhdGUnXG4gICAgfCAnZXZlbnRzJ1xuICAgIHwgJ2lzRmFsbGJhY2snXG4gID5cblxuZXhwb3J0IHR5cGUgUHJlZmV0Y2hPcHRpb25zID0ge1xuICBwcmlvcml0eT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gIHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxuICBwcm9wcz86IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgZXJyPzogRXJyb3JcbiAgZXJyb3I/OiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgQXBwUHJvcHMgPSBQaWNrPFByaXZhdGVSb3V0ZUluZm8sICdDb21wb25lbnQnIHwgJ2Vycic+ICYge1xuICByb3V0ZXI6IFJvdXRlclxufSAmIFJlY29yZDxzdHJpbmcsIGFueT5cbmV4cG9ydCB0eXBlIEFwcENvbXBvbmVudCA9IENvbXBvbmVudFR5cGU8QXBwUHJvcHM+XG5cbnR5cGUgU3Vic2NyaXB0aW9uID0gKGRhdGE6IFByaXZhdGVSb3V0ZUluZm8sIEFwcDogQXBwQ29tcG9uZW50KSA9PiBQcm9taXNlPHZvaWQ+XG5cbnR5cGUgQmVmb3JlUG9wU3RhdGVDYWxsYmFjayA9IChzdGF0ZTogTmV4dEhpc3RvcnlTdGF0ZSkgPT4gYm9vbGVhblxuXG50eXBlIENvbXBvbmVudExvYWRDYW5jZWwgPSAoKCkgPT4gdm9pZCkgfCBudWxsXG5cbnR5cGUgSGlzdG9yeU1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnIHwgJ3B1c2hTdGF0ZSdcblxuY29uc3QgbWFudWFsU2Nyb2xsUmVzdG9yYXRpb24gPVxuICBwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OICYmXG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmXG4gICdzY3JvbGxSZXN0b3JhdGlvbicgaW4gd2luZG93Lmhpc3RvcnlcblxuY29uc3QgU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SID0gJ1NTRyBEYXRhIE5PVF9GT1VORCdcblxuZnVuY3Rpb24gZmV0Y2hSZXRyeSh1cmw6IHN0cmluZywgYXR0ZW1wdHM6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBmZXRjaCh1cmwsIHtcbiAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cbiAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAvL1xuICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcbiAgICAvLyA+IG9wdGlvbi5cbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXG4gICAgLy9cbiAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcbiAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgIGlmICghcmVzLm9rKSB7XG4gICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKVxuICAgICAgfVxuICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAvLyBUT0RPOiBoYW5kbGUgcmVsb2FkaW5nIGluIGRldmVsb3BtZW50IGZyb20gZmFsbGJhY2sgcmV0dXJuaW5nIDIwMFxuICAgICAgICAvLyB0byBvbi1kZW1hbmQtZW50cnktaGFuZGxlciBjYXVzaW5nIGl0IHRvIHJlbG9hZCBwZXJpb2RpY2FsbHlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFNTR19EQVRBX05PVF9GT1VORF9FUlJPUilcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYClcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5qc29uKClcbiAgfSlcbn1cblxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZjogc3RyaW5nLCBpc1NlcnZlclJlbmRlcjogYm9vbGVhbikge1xuICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycjogRXJyb3IpID0+IHtcbiAgICAvLyBXZSBzaG91bGQgb25seSB0cmlnZ2VyIGEgc2VydmVyLXNpZGUgdHJhbnNpdGlvbiBpZiB0aGlzIHdhcyBjYXVzZWRcbiAgICAvLyBvbiBhIGNsaWVudC1zaWRlIHRyYW5zaXRpb24uIE90aGVyd2lzZSwgd2UnZCBnZXQgaW50byBhbiBpbmZpbml0ZVxuICAgIC8vIGxvb3AuXG5cbiAgICBpZiAoIWlzU2VydmVyUmVuZGVyKSB7XG4gICAgICBtYXJrTG9hZGluZ0Vycm9yKGVycilcbiAgICB9XG4gICAgdGhyb3cgZXJyXG4gIH0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciBpbXBsZW1lbnRzIEJhc2VSb3V0ZXIge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcblxuICAvKipcbiAgICogTWFwIG9mIGFsbCBjb21wb25lbnRzIGxvYWRlZCBpbiBgUm91dGVyYFxuICAgKi9cbiAgY29tcG9uZW50czogeyBbcGF0aG5hbWU6IHN0cmluZ106IFByaXZhdGVSb3V0ZUluZm8gfVxuICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxuICBzZGM6IHsgW2FzUGF0aDogc3RyaW5nXTogb2JqZWN0IH0gPSB7fVxuICBzdWI6IFN1YnNjcmlwdGlvblxuICBjbGM6IENvbXBvbmVudExvYWRDYW5jZWxcbiAgcGFnZUxvYWRlcjogYW55XG4gIF9icHM6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgfCB1bmRlZmluZWRcbiAgZXZlbnRzOiBNaXR0RW1pdHRlclxuICBfd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgaXNTc3I6IGJvb2xlYW5cbiAgaXNGYWxsYmFjazogYm9vbGVhblxuICBfaW5GbGlnaHRSb3V0ZT86IHN0cmluZ1xuICBfc2hhbGxvdz86IGJvb2xlYW5cbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG5cbiAgc3RhdGljIGV2ZW50czogTWl0dEVtaXR0ZXIgPSBtaXR0KClcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIHtcbiAgICAgIGluaXRpYWxQcm9wcyxcbiAgICAgIHBhZ2VMb2FkZXIsXG4gICAgICBBcHAsXG4gICAgICB3cmFwQXBwLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgZXJyLFxuICAgICAgc3Vic2NyaXB0aW9uLFxuICAgICAgaXNGYWxsYmFjayxcbiAgICAgIGxvY2FsZSxcbiAgICAgIGxvY2FsZXMsXG4gICAgICBkZWZhdWx0TG9jYWxlLFxuICAgIH06IHtcbiAgICAgIHN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uXG4gICAgICBpbml0aWFsUHJvcHM6IGFueVxuICAgICAgcGFnZUxvYWRlcjogYW55XG4gICAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIEFwcDogQXBwQ29tcG9uZW50XG4gICAgICB3cmFwQXBwOiAoQXBwOiBBcHBDb21wb25lbnQpID0+IGFueVxuICAgICAgZXJyPzogRXJyb3JcbiAgICAgIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgICAgIGxvY2FsZT86IHN0cmluZ1xuICAgICAgbG9jYWxlcz86IHN0cmluZ1tdXG4gICAgICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4gICAgfVxuICApIHtcbiAgICAvLyByZXByZXNlbnRzIHRoZSBjdXJyZW50IGNvbXBvbmVudCBrZXlcbiAgICB0aGlzLnJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG5cbiAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICB0aGlzLmNvbXBvbmVudHMgPSB7fVxuICAgIC8vIFdlIHNob3VsZCBub3Qga2VlcCB0aGUgY2FjaGUsIGlmIHRoZXJlJ3MgYW4gZXJyb3JcbiAgICAvLyBPdGhlcndpc2UsIHRoaXMgY2F1c2UgaXNzdWVzIHdoZW4gd2hlbiBnb2luZyBiYWNrIGFuZFxuICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICBpZiAocGF0aG5hbWUgIT09ICcvX2Vycm9yJykge1xuICAgICAgdGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdID0ge1xuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzOiBpbml0aWFsU3R5bGVTaGVldHMsXG4gICAgICAgIHByb3BzOiBpbml0aWFsUHJvcHMsXG4gICAgICAgIGVycixcbiAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICBfX05fU1NQOiBpbml0aWFsUHJvcHMgJiYgaW5pdGlhbFByb3BzLl9fTl9TU1AsXG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5jb21wb25lbnRzWycvX2FwcCddID0ge1xuICAgICAgQ29tcG9uZW50OiBBcHAgYXMgQ29tcG9uZW50VHlwZSxcbiAgICAgIHN0eWxlU2hlZXRzOiBbXG4gICAgICAgIC8qIC9fYXBwIGRvZXMgbm90IG5lZWQgaXRzIHN0eWxlc2hlZXRzIG1hbmFnZWQgKi9cbiAgICAgIF0sXG4gICAgfVxuXG4gICAgLy8gQmFja3dhcmRzIGNvbXBhdCBmb3IgUm91dGVyLnJvdXRlci5ldmVudHNcbiAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgIHRoaXMuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlclxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgLy8gdW50aWwgYWZ0ZXIgbW91bnQgdG8gcHJldmVudCBoeWRyYXRpb24gbWlzbWF0Y2hcbiAgICB0aGlzLmFzUGF0aCA9XG4gICAgICAvLyBAdHMtaWdub3JlIHRoaXMgaXMgdGVtcG9yYXJpbHkgZ2xvYmFsIChhdHRhY2hlZCB0byB3aW5kb3cpXG4gICAgICBpc0R5bmFtaWNSb3V0ZShwYXRobmFtZSkgJiYgX19ORVhUX0RBVEFfXy5hdXRvRXhwb3J0ID8gcGF0aG5hbWUgOiBhc1xuICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aFxuICAgIHRoaXMuc3ViID0gc3Vic2NyaXB0aW9uXG4gICAgdGhpcy5jbGMgPSBudWxsXG4gICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHBcbiAgICAvLyBtYWtlIHN1cmUgdG8gaWdub3JlIGV4dHJhIHBvcFN0YXRlIGluIHNhZmFyaSBvbiBuYXZpZ2F0aW5nXG4gICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICB0aGlzLmlzU3NyID0gdHJ1ZVxuXG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gaXNGYWxsYmFja1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlXG4gICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzXG4gICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgIGlmIChhcy5zdWJzdHIoMCwgMikgIT09ICcvLycpIHtcbiAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgLy8gd2UgaGF2ZSB0byByZWdpc3RlciB0aGUgaW5pdGlhbCByb3V0ZSB1cG9uIGluaXRpYWxpemF0aW9uXG4gICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoXG4gICAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgICBnZXRVUkwoKVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMub25Qb3BTdGF0ZSlcblxuICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJ1xuXG4gICAgICAgICAgbGV0IHNjcm9sbERlYm91bmNlVGltZW91dDogdW5kZWZpbmVkIHwgTm9kZUpTLlRpbWVvdXRcblxuICAgICAgICAgIGNvbnN0IGRlYm91bmNlZFNjcm9sbFNhdmUgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KSBjbGVhclRpbWVvdXQoc2Nyb2xsRGVib3VuY2VUaW1lb3V0KVxuXG4gICAgICAgICAgICBzY3JvbGxEZWJvdW5jZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeyB1cmwsIGFzOiBjdXJBcywgb3B0aW9ucyB9ID0gaGlzdG9yeS5zdGF0ZVxuICAgICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBjdXJBcyxcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBvcHRpb25zLCB7XG4gICAgICAgICAgICAgICAgICBfTl9YOiB3aW5kb3cuc2Nyb2xsWCxcbiAgICAgICAgICAgICAgICAgIF9OX1k6IHdpbmRvdy5zY3JvbGxZLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0sIDEwKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBkZWJvdW5jZWRTY3JvbGxTYXZlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25Qb3BTdGF0ZSA9IChlOiBQb3BTdGF0ZUV2ZW50KTogdm9pZCA9PiB7XG4gICAgY29uc3Qgc3RhdGUgPSBlLnN0YXRlIGFzIEhpc3RvcnlTdGF0ZVxuXG4gICAgaWYgKCFzdGF0ZSkge1xuICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcbiAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcbiAgICAgIC8vXG4gICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxuICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxuICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXG4gICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cbiAgICAgIGNvbnN0IHsgcGF0aG5hbWUsIHF1ZXJ5IH0gPSB0aGlzXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUpLCBxdWVyeSB9KSxcbiAgICAgICAgZ2V0VVJMKClcbiAgICAgIClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCB7IHVybCwgYXMsIG9wdGlvbnMgfSA9IHN0YXRlXG5cbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgIC8vIGNhbiBiZSBjYXVzZWQgYnkgbmF2aWdhdGluZyBiYWNrIGZyb20gYW4gZXh0ZXJuYWwgc2l0ZVxuICAgIGlmICh0aGlzLmlzU3NyICYmIGFzID09PSB0aGlzLmFzUGF0aCAmJiBwYXRobmFtZSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxuICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgaWYgKHRoaXMuX2JwcyAmJiAhdGhpcy5fYnBzKHN0YXRlKSkge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgdGhpcy5jaGFuZ2UoXG4gICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgIHVybCxcbiAgICAgIGFzLFxuICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgbG9jYWxlOiBvcHRpb25zLmxvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGUsXG4gICAgICB9KVxuICAgIClcbiAgfVxuXG4gIHJlbG9hZCgpOiB2b2lkIHtcbiAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgfVxuXG4gIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovXG4gIGJhY2soKSB7XG4gICAgd2luZG93Lmhpc3RvcnkuYmFjaygpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcHVzaFN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHB1c2godXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncHVzaFN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIC8qKlxuICAgKiBQZXJmb3JtcyBhIGByZXBsYWNlU3RhdGVgIHdpdGggYXJndW1lbnRzXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcbiAgICogQHBhcmFtIG9wdGlvbnMgb2JqZWN0IHlvdSBjYW4gZGVmaW5lIGBzaGFsbG93YCBhbmQgb3RoZXIgb3B0aW9uc1xuICAgKi9cbiAgcmVwbGFjZSh1cmw6IFVybCwgYXM6IFVybCA9IHVybCwgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fSkge1xuICAgIDsoeyB1cmwsIGFzIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpXG4gICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKVxuICB9XG5cbiAgYXN5bmMgY2hhbmdlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zXG4gICk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybFxuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGVcblxuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSB0aGlzLmxvY2FsZVxuICAgICAgfVxuXG4gICAgICBjb25zdCB7XG4gICAgICAgIG5vcm1hbGl6ZUxvY2FsZVBhdGgsXG4gICAgICB9ID0gcmVxdWlyZSgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKSBhcyB0eXBlb2YgaW1wb3J0KCcuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aCcpXG5cbiAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoKGFzLCB0aGlzLmxvY2FsZXMpXG5cbiAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZVxuICAgICAgICB1cmwgPSBsb2NhbGVQYXRoUmVzdWx0LnBhdGhuYW1lXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oKSB7XG4gICAgICB0aGlzLmlzU3NyID0gZmFsc2VcbiAgICB9XG4gICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgIGlmIChTVCkge1xuICAgICAgcGVyZm9ybWFuY2UubWFyaygncm91dGVDaGFuZ2UnKVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9pbkZsaWdodFJvdXRlKSB7XG4gICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlKVxuICAgIH1cblxuICAgIGFzID0gYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKVxuICAgIGNvbnN0IGNsZWFuZWRBcyA9IGRlbExvY2FsZShcbiAgICAgIGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLFxuICAgICAgdGhpcy5sb2NhbGVcbiAgICApXG4gICAgdGhpcy5faW5GbGlnaHRSb3V0ZSA9IGFzXG5cbiAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgIC8vIFdlIHNob3VsZCBub3QgcHJvY2VlZC4gV2Ugc2hvdWxkIG9ubHkgY2hhbmdlIHRoZSBzdGF0ZS5cblxuICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XG4gICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXG4gICAgaWYgKCEob3B0aW9ucyBhcyBhbnkpLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykpIHtcbiAgICAgIHRoaXMuYXNQYXRoID0gY2xlYW5lZEFzXG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzKVxuICAgICAgLy8gVE9ETzogZG8gd2UgbmVlZCB0aGUgcmVzb2x2ZWQgaHJlZiB3aGVuIG9ubHkgYSBoYXNoIGNoYW5nZT9cbiAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKVxuICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKVxuICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdKVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcylcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxuICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuICAgIGNvbnN0IHsgX19yZXdyaXRlczogcmV3cml0ZXMgfSA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5wcm9taXNlZEJ1aWxkTWFuaWZlc3RcblxuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gcGFyc2VkXG5cbiAgICBwYXJzZWQgPSB0aGlzLl9yZXNvbHZlSHJlZihwYXJzZWQsIHBhZ2VzKSBhcyB0eXBlb2YgcGFyc2VkXG5cbiAgICBpZiAocGFyc2VkLnBhdGhuYW1lICE9PSBwYXRobmFtZSkge1xuICAgICAgcGF0aG5hbWUgPSBwYXJzZWQucGF0aG5hbWVcbiAgICAgIHVybCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZClcbiAgICB9XG5cbiAgICAvLyB1cmwgYW5kIGFzIHNob3VsZCBhbHdheXMgYmUgcHJlZml4ZWQgd2l0aCBiYXNlUGF0aCBieSB0aGlzXG4gICAgLy8gcG9pbnQgYnkgZWl0aGVyIG5leHQvbGluayBvciByb3V0ZXIucHVzaC9yZXBsYWNlIHNvIHN0cmlwIHRoZVxuICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgPyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChkZWxCYXNlUGF0aChwYXRobmFtZSkpXG4gICAgICA6IHBhdGhuYW1lXG5cbiAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgIC8vIChub3QgbG9jYXRpb24ucmVsb2FkKCkgYnV0IHJlbG9hZCBnZXRJbml0aWFsUHJvcHMgYW5kIG90aGVyIE5leHQuanMgc3R1ZmZzKVxuICAgIC8vIFdlIGFsc28gbmVlZCB0byBzZXQgdGhlIG1ldGhvZCA9IHJlcGxhY2VTdGF0ZSBhbHdheXNcbiAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgIC8vIFdlIHNob3VsZCBjb21wYXJlIHRoZSBuZXcgYXNQYXRoIHRvIHRoZSBjdXJyZW50IGFzUGF0aCwgbm90IHRoZSB1cmxcbiAgICBpZiAoIXRoaXMudXJsSXNOZXcoY2xlYW5lZEFzKSkge1xuICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSdcbiAgICB9XG5cbiAgICBsZXQgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBjb25zdCB7IHNoYWxsb3cgPSBmYWxzZSB9ID0gb3B0aW9uc1xuXG4gICAgLy8gd2UgbmVlZCB0byByZXNvbHZlIHRoZSBhcyB2YWx1ZSB1c2luZyByZXdyaXRlcyBmb3IgZHluYW1pYyBTU0dcbiAgICAvLyBwYWdlcyB0byBhbGxvdyBidWlsZGluZyB0aGUgZGF0YSBVUkwgY29ycmVjdGx5XG4gICAgbGV0IHJlc29sdmVkQXMgPSBhc1xuXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpIHtcbiAgICAgIHJlc29sdmVkQXMgPSByZXNvbHZlUmV3cml0ZXMoXG4gICAgICAgIHBhcnNlUmVsYXRpdmVVcmwoYXMpLnBhdGhuYW1lLFxuICAgICAgICBwYWdlcyxcbiAgICAgICAgYmFzZVBhdGgsXG4gICAgICAgIHJld3JpdGVzLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgKHA6IHN0cmluZykgPT4gdGhpcy5fcmVzb2x2ZUhyZWYoeyBwYXRobmFtZTogcCB9LCBwYWdlcykucGF0aG5hbWUhXG4gICAgICApXG5cbiAgICAgIGlmIChyZXNvbHZlZEFzICE9PSBhcykge1xuICAgICAgICBjb25zdCBwb3RlbnRpYWxIcmVmID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYoXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHt9LCBwYXJzZWQsIHsgcGF0aG5hbWU6IHJlc29sdmVkQXMgfSksXG4gICAgICAgICAgICBwYWdlcyxcbiAgICAgICAgICAgIGZhbHNlXG4gICAgICAgICAgKS5wYXRobmFtZSFcbiAgICAgICAgKVxuXG4gICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cbiAgICAgICAgLy8gYWxsb3cgdGhlIGNvcnJlY3QgcGFnZSBjaHVuayB0byBiZSBsb2FkZWRcbiAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBvdGVudGlhbEhyZWYpKSB7XG4gICAgICAgICAgcm91dGUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGF0aG5hbWUgPSBwb3RlbnRpYWxIcmVmXG4gICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpXG5cbiAgICBpZiAoaXNEeW5hbWljUm91dGUocm91dGUpKSB7XG4gICAgICBjb25zdCBwYXJzZWRBcyA9IHBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcylcbiAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZVxuXG4gICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleCkoYXNQYXRobmFtZSlcbiAgICAgIGNvbnN0IHNob3VsZEludGVycG9sYXRlID0gcm91dGUgPT09IGFzUGF0aG5hbWVcbiAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSlcbiAgICAgICAgOiAoe30gYXMgeyByZXN1bHQ6IHVuZGVmaW5lZDsgcGFyYW1zOiB1bmRlZmluZWQgfSlcblxuICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IChzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSkge1xuICAgICAgICBjb25zdCBtaXNzaW5nUGFyYW1zID0gT2JqZWN0LmtleXMocm91dGVSZWdleC5ncm91cHMpLmZpbHRlcihcbiAgICAgICAgICAocGFyYW0pID0+ICFxdWVyeVtwYXJhbV1cbiAgICAgICAgKVxuXG4gICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICBgJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyBgSW50ZXJwb2xhdGluZyBocmVmYFxuICAgICAgICAgICAgICAgICAgOiBgTWlzbWF0Y2hpbmcgXFxgYXNcXGAgYW5kIFxcYGhyZWZcXGBgXG4gICAgICAgICAgICAgIH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArXG4gICAgICAgICAgICAgICAgYHRoZSBwYXJhbXM6ICR7bWlzc2luZ1BhcmFtcy5qb2luKFxuICAgICAgICAgICAgICAgICAgJywgJ1xuICAgICAgICAgICAgICAgICl9IGluIHRoZSBcXGBocmVmXFxgJ3MgXFxgcXVlcnlcXGBgXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgKHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgXG4gICAgICAgICAgICAgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgK1xuICAgICAgICAgICAgICBgUmVhZCBtb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy8ke1xuICAgICAgICAgICAgICAgIHNob3VsZEludGVycG9sYXRlXG4gICAgICAgICAgICAgICAgICA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJ1xuICAgICAgICAgICAgICAgICAgOiAnaW5jb21wYXRpYmxlLWhyZWYtYXMnXG4gICAgICAgICAgICAgIH1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgIGFzID0gZm9ybWF0V2l0aFZhbGlkYXRpb24oXG4gICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkQXMsIHtcbiAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXG4gICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBpbnRlcnBvbGF0ZWRBcy5wYXJhbXMhKSxcbiAgICAgICAgICB9KVxuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBwYXJhbXMgaW50byBgcXVlcnlgLCBvdmVyd3JpdGluZyBhbnkgc3BlY2lmaWVkIGluIHNlYXJjaFxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCByb3V0ZU1hdGNoKVxuICAgICAgfVxuICAgIH1cblxuICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VTdGFydCcsIGFzKVxuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKFxuICAgICAgICByb3V0ZSxcbiAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5LFxuICAgICAgICBhcyxcbiAgICAgICAgc2hhbGxvd1xuICAgICAgKVxuICAgICAgbGV0IHsgZXJyb3IsIHByb3BzLCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgLy8gaGFuZGxlIHJlZGlyZWN0IG9uIGNsaWVudC10cmFuc2l0aW9uXG4gICAgICBpZiAoXG4gICAgICAgIChfX05fU1NHIHx8IF9fTl9TU1ApICYmXG4gICAgICAgIHByb3BzICYmXG4gICAgICAgIChwcm9wcyBhcyBhbnkpLnBhZ2VQcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgZGVzdGluYXRpb24gPSAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMuX19OX1JFRElSRUNUXG5cbiAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgY29uc3QgcGFyc2VkSHJlZiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gICAgICAgICAgdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkSHJlZiwgcGFnZXMpXG5cbiAgICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocGFyc2VkSHJlZi5wYXRobmFtZSkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIGRlc3RpbmF0aW9uLCBkZXN0aW5hdGlvbiwgb3B0aW9ucylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGRlc3RpbmF0aW9uXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKSA9PiB7fSlcbiAgICAgIH1cblxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMpXG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICBtZXRob2QsXG4gICAgICAgIHVybCxcbiAgICAgICAgYWRkTG9jYWxlKGFzLCBvcHRpb25zLmxvY2FsZSwgdGhpcy5kZWZhdWx0TG9jYWxlKSxcbiAgICAgICAgb3B0aW9uc1xuICAgICAgKVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCBhcHBDb21wOiBhbnkgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50XG4gICAgICAgIDsod2luZG93IGFzIGFueSkubmV4dC5pc1ByZXJlbmRlcmVkID1cbiAgICAgICAgICBhcHBDb21wLmdldEluaXRpYWxQcm9wcyA9PT0gYXBwQ29tcC5vcmlnR2V0SW5pdGlhbFByb3BzICYmXG4gICAgICAgICAgIShyb3V0ZUluZm8uQ29tcG9uZW50IGFzIGFueSkuZ2V0SW5pdGlhbFByb3BzXG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZSEsIHF1ZXJ5LCBjbGVhbmVkQXMsIHJvdXRlSW5mbykuY2F0Y2goXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgaWYgKGUuY2FuY2VsbGVkKSBlcnJvciA9IGVycm9yIHx8IGVcbiAgICAgICAgICBlbHNlIHRocm93IGVcbiAgICAgICAgfVxuICAgICAgKVxuXG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcylcbiAgICAgICAgdGhyb3cgZXJyb3JcbiAgICAgIH1cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uICYmICdfTl9YJyBpbiBvcHRpb25zKSB7XG4gICAgICAgICAgd2luZG93LnNjcm9sbFRvKChvcHRpb25zIGFzIGFueSkuX05fWCwgKG9wdGlvbnMgYXMgYW55KS5fTl9ZKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLCBhcylcblxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9XG5cbiAgY2hhbmdlU3RhdGUoXG4gICAgbWV0aG9kOiBIaXN0b3J5TWV0aG9kLFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzOiBzdHJpbmcsXG4gICAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnMgPSB7fVxuICApOiB2b2lkIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8IGdldFVSTCgpICE9PSBhcykge1xuICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvd1xuICAgICAgd2luZG93Lmhpc3RvcnlbbWV0aG9kXShcbiAgICAgICAge1xuICAgICAgICAgIHVybCxcbiAgICAgICAgICBhcyxcbiAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgfSBhcyBIaXN0b3J5U3RhdGUsXG4gICAgICAgIC8vIE1vc3QgYnJvd3NlcnMgY3VycmVudGx5IGlnbm9yZXMgdGhpcyBwYXJhbWV0ZXIsIGFsdGhvdWdoIHRoZXkgbWF5IHVzZSBpdCBpbiB0aGUgZnV0dXJlLlxuICAgICAgICAvLyBQYXNzaW5nIHRoZSBlbXB0eSBzdHJpbmcgaGVyZSBzaG91bGQgYmUgc2FmZSBhZ2FpbnN0IGZ1dHVyZSBjaGFuZ2VzIHRvIHRoZSBtZXRob2QuXG4gICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAnJyxcbiAgICAgICAgYXNcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihcbiAgICBlcnI6IEVycm9yICYgeyBjb2RlOiBhbnk7IGNhbmNlbGxlZDogYm9vbGVhbiB9LFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgbG9hZEVycm9yRmFpbD86IGJvb2xlYW5cbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG5cbiAgICBpZiAoUEFHRV9MT0FEX0VSUk9SIGluIGVyciB8fCBsb2FkRXJyb3JGYWlsKSB7XG4gICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzKVxuXG4gICAgICAvLyBJZiB3ZSBjYW4ndCBsb2FkIHRoZSBwYWdlIGl0IGNvdWxkIGJlIG9uZSBvZiBmb2xsb3dpbmcgcmVhc29uc1xuICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcbiAgICAgIC8vICAyLiBQYWdlIGRvZXMgZXhpc3QgaW4gYSBkaWZmZXJlbnQgem9uZVxuICAgICAgLy8gIDMuIEludGVybmFsIGVycm9yIHdoaWxlIGxvYWRpbmcgdGhlIHBhZ2VcblxuICAgICAgLy8gU28sIGRvaW5nIGEgaGFyZCByZWxvYWQgaXMgdGhlIHByb3BlciB3YXkgdG8gZGVhbCB3aXRoIHRoaXMuXG4gICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzXG5cbiAgICAgIC8vIENoYW5naW5nIHRoZSBVUkwgZG9lc24ndCBibG9jayBleGVjdXRpbmcgdGhlIGN1cnJlbnQgY29kZSBwYXRoLlxuICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cbiAgICAgIHRocm93IGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKVxuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBsZXQgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBsZXQgc3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBsZXQgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT4gfCB1bmRlZmluZWRcbiAgICAgIGNvbnN0IHNzZzQwNCA9IGVyci5tZXNzYWdlID09PSBTU0dfREFUQV9OT1RfRk9VTkRfRVJST1JcblxuICAgICAgaWYgKHNzZzQwNCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGxldCBtb2Q6IGFueVxuICAgICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzLCBtb2QgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgICAnLzQwNCdcbiAgICAgICAgICApKVxuXG4gICAgICAgICAgLy8gVE9ETzogc2hvdWxkIHdlIHRvbGVyYXRlIHRoZXNlIHByb3BzIG1pc3NpbmcgYW5kIHN0aWxsIHJlbmRlciB0aGVcbiAgICAgICAgICAvLyBwYWdlIGluc3RlYWQgb2YgZmFsbGluZyBiYWNrIHRvIF9lcnJvcj9cbiAgICAgICAgICBpZiAobW9kICYmIG1vZC5fX05fU1NHKSB7XG4gICAgICAgICAgICBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldFN0YXRpY0RhdGEoXG4gICAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZignLzQwNCcsICcvNDA0JywgdHJ1ZSwgdGhpcy5sb2NhbGUpXG4gICAgICAgICAgICApXG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChfZXJyKSB7XG4gICAgICAgICAgLy8gbm9uLWZhdGFsIGZhbGxiYWNrIHRvIF9lcnJvclxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdHlwZW9mIENvbXBvbmVudCEgPT09ICd1bmRlZmluZWQnIHx8XG4gICAgICAgIHR5cGVvZiBzdHlsZVNoZWV0cyEgPT09ICd1bmRlZmluZWQnXG4gICAgICApIHtcbiAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMgfSA9IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoXG4gICAgICAgICAgJy9fZXJyb3InXG4gICAgICAgICkpXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IHtcbiAgICAgICAgcHJvcHMsXG4gICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgIGVycjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgICBlcnJvcjogc3NnNDA0ID8gdW5kZWZpbmVkIDogZXJyLFxuICAgICAgfVxuXG4gICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwge1xuICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICB9IGFzIGFueSlcbiAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgaW4gZXJyb3IgcGFnZSBgZ2V0SW5pdGlhbFByb3BzYDogJywgZ2lwRXJyKVxuICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHt9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKHJvdXRlSW5mb0Vycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3Iocm91dGVJbmZvRXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCB0cnVlKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFJvdXRlSW5mbyhcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IGFueSxcbiAgICBhczogc3RyaW5nLFxuICAgIHNoYWxsb3c6IGJvb2xlYW4gPSBmYWxzZVxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gdGhpcy5jb21wb25lbnRzW3JvdXRlXVxuXG4gICAgICBpZiAoc2hhbGxvdyAmJiBjYWNoZWRSb3V0ZUluZm8gJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGUpIHtcbiAgICAgICAgcmV0dXJuIGNhY2hlZFJvdXRlSW5mb1xuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgPyBjYWNoZWRSb3V0ZUluZm9cbiAgICAgICAgOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpID0+ICh7XG4gICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgc3R5bGVTaGVldHM6IHJlcy5zdHlsZVNoZWV0cyxcbiAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcbiAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUCxcbiAgICAgICAgICB9KSlcblxuICAgICAgY29uc3QgeyBDb21wb25lbnQsIF9fTl9TU0csIF9fTl9TU1AgfSA9IHJvdXRlSW5mb1xuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSB9ID0gcmVxdWlyZSgncmVhY3QtaXMnKVxuICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQpKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAgICAgYFRoZSBkZWZhdWx0IGV4cG9ydCBpcyBub3QgYSBSZWFjdCBDb21wb25lbnQgaW4gcGFnZTogXCIke3BhdGhuYW1lfVwiYFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgZGF0YUhyZWY6IHN0cmluZyB8IHVuZGVmaW5lZFxuXG4gICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWUsIHF1ZXJ5IH0pLFxuICAgICAgICAgIGRlbEJhc2VQYXRoKGFzKSxcbiAgICAgICAgICBfX05fU1NHLFxuICAgICAgICAgIHRoaXMubG9jYWxlXG4gICAgICAgIClcbiAgICAgIH1cblxuICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhPFByaXZhdGVSb3V0ZUluZm8+KCgpID0+XG4gICAgICAgIF9fTl9TU0dcbiAgICAgICAgICA/IHRoaXMuX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogX19OX1NTUFxuICAgICAgICAgID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhcbiAgICAgICAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICAgICAgICAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcbiAgICAgICAgICAgICAgfSBhcyBhbnlcbiAgICAgICAgICAgIClcbiAgICAgIClcblxuICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHNcbiAgICAgIHRoaXMuY29tcG9uZW50c1tyb3V0ZV0gPSByb3V0ZUluZm9cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKGVyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcylcbiAgICB9XG4gIH1cblxuICBzZXQoXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGRhdGE6IFByaXZhdGVSb3V0ZUluZm9cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5pc0ZhbGxiYWNrID0gZmFsc2VcblxuICAgIHRoaXMucm91dGUgPSByb3V0ZVxuICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHRoaXMucXVlcnkgPSBxdWVyeVxuICAgIHRoaXMuYXNQYXRoID0gYXNcbiAgICByZXR1cm4gdGhpcy5ub3RpZnkoZGF0YSlcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsYmFjayB0byBleGVjdXRlIGJlZm9yZSByZXBsYWNpbmcgcm91dGVyIHN0YXRlXG4gICAqIEBwYXJhbSBjYiBjYWxsYmFjayB0byBiZSBleGVjdXRlZFxuICAgKi9cbiAgYmVmb3JlUG9wU3RhdGUoY2I6IEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2spIHtcbiAgICB0aGlzLl9icHMgPSBjYlxuICB9XG5cbiAgb25seUFIYXNoQ2hhbmdlKGFzOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICBpZiAoIXRoaXMuYXNQYXRoKSByZXR1cm4gZmFsc2VcbiAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJylcbiAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJylcblxuICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSB1cmxzIGFyZSBjaGFuZ2UsIHRoZXJlJ3MgbW9yZSB0aGFuIGEgaGFzaCBjaGFuZ2VcbiAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIC8vIElmIHRoZSBoYXNoIGhhcyBjaGFuZ2VkLCB0aGVuIGl0J3MgYSBoYXNoIG9ubHkgY2hhbmdlLlxuICAgIC8vIFRoaXMgY2hlY2sgaXMgbmVjZXNzYXJ5IHRvIGhhbmRsZSBib3RoIHRoZSBlbnRlciBhbmRcbiAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgIC8vIGFuZCBpcyB0cmVhdGVkIGFzIGEgbmV4dCByZWxvYWQuXG4gICAgcmV0dXJuIG9sZEhhc2ggIT09IG5ld0hhc2hcbiAgfVxuXG4gIHNjcm9sbFRvSGFzaChhczogc3RyaW5nKTogdm9pZCB7XG4gICAgY29uc3QgWywgaGFzaF0gPSBhcy5zcGxpdCgnIycpXG4gICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlXG4gICAgaWYgKGhhc2ggPT09ICcnKSB7XG4gICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIEZpcnN0IHdlIGNoZWNrIGlmIHRoZSBlbGVtZW50IGJ5IGlkIGlzIGZvdW5kXG4gICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpXG4gICAgaWYgKGlkRWwpIHtcbiAgICAgIGlkRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgIC8vIFRvIG1pcnJvciBicm93c2Vyc1xuICAgIGNvbnN0IG5hbWVFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlOYW1lKGhhc2gpWzBdXG4gICAgaWYgKG5hbWVFbCkge1xuICAgICAgbmFtZUVsLnNjcm9sbEludG9WaWV3KClcbiAgICB9XG4gIH1cblxuICB1cmxJc05ldyhhc1BhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmFzUGF0aCAhPT0gYXNQYXRoXG4gIH1cblxuICBfcmVzb2x2ZUhyZWYocGFyc2VkSHJlZjogVXJsT2JqZWN0LCBwYWdlczogc3RyaW5nW10sIGFwcGx5QmFzZVBhdGggPSB0cnVlKSB7XG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VkSHJlZlxuICAgIGNvbnN0IGNsZWFuUGF0aG5hbWUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChcbiAgICAgIGRlbm9ybWFsaXplUGFnZVBhdGgoYXBwbHlCYXNlUGF0aCA/IGRlbEJhc2VQYXRoKHBhdGhuYW1lISkgOiBwYXRobmFtZSEpXG4gICAgKVxuXG4gICAgaWYgKGNsZWFuUGF0aG5hbWUgPT09ICcvNDA0JyB8fCBjbGVhblBhdGhuYW1lID09PSAnL19lcnJvcicpIHtcbiAgICAgIHJldHVybiBwYXJzZWRIcmVmXG4gICAgfVxuXG4gICAgLy8gaGFuZGxlIHJlc29sdmluZyBocmVmIGZvciBkeW5hbWljIHJvdXRlc1xuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSEpKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICBwYWdlcy5zb21lKChwYWdlKSA9PiB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBpc0R5bmFtaWNSb3V0ZShwYWdlKSAmJlxuICAgICAgICAgIGdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lISlcbiAgICAgICAgKSB7XG4gICAgICAgICAgcGFyc2VkSHJlZi5wYXRobmFtZSA9IGFwcGx5QmFzZVBhdGggPyBhZGRCYXNlUGF0aChwYWdlKSA6IHBhZ2VcbiAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgICByZXR1cm4gcGFyc2VkSHJlZlxuICB9XG5cbiAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi9cbiAgYXN5bmMgcHJlZmV0Y2goXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXNQYXRoOiBzdHJpbmcgPSB1cmwsXG4gICAgb3B0aW9uczogUHJlZmV0Y2hPcHRpb25zID0ge31cbiAgKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgbGV0IHBhcnNlZCA9IHBhcnNlUmVsYXRpdmVVcmwodXJsKVxuXG4gICAgbGV0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZFxuXG4gICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKVxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMucGFnZUxvYWRlci5wcmVmZXRjaERhdGEoXG4gICAgICAgIHVybCxcbiAgICAgICAgYXNQYXRoLFxuICAgICAgICB0aGlzLmxvY2FsZSxcbiAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlXG4gICAgICApLFxuICAgICAgdGhpcy5wYWdlTG9hZGVyW29wdGlvbnMucHJpb3JpdHkgPyAnbG9hZFBhZ2UnIDogJ3ByZWZldGNoJ10ocm91dGUpLFxuICAgIF0pXG4gIH1cblxuICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZTogc3RyaW5nKTogUHJvbWlzZTxHb29kUGFnZUNhY2hlPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKHRoaXMuY2xjID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH0pXG5cbiAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpXG5cbiAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICBjb25zdCBlcnJvcjogYW55ID0gbmV3IEVycm9yKFxuICAgICAgICBgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYFxuICAgICAgKVxuICAgICAgZXJyb3IuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgdGhyb3cgZXJyb3JcbiAgICB9XG5cbiAgICBpZiAoY2FuY2VsID09PSB0aGlzLmNsYykge1xuICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIGNvbXBvbmVudFJlc3VsdFxuICB9XG5cbiAgX2dldERhdGE8VD4oZm46ICgpID0+IFByb21pc2U8VD4pOiBQcm9taXNlPFQ+IHtcbiAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2VcbiAgICBjb25zdCBjYW5jZWwgPSAoKSA9PiB7XG4gICAgICBjYW5jZWxsZWQgPSB0cnVlXG4gICAgfVxuICAgIHRoaXMuY2xjID0gY2FuY2VsXG4gICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSkgPT4ge1xuICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsXG4gICAgICB9XG5cbiAgICAgIGlmIChjYW5jZWxsZWQpIHtcbiAgICAgICAgY29uc3QgZXJyOiBhbnkgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKVxuICAgICAgICBlcnIuY2FuY2VsbGVkID0gdHJ1ZVxuICAgICAgICB0aHJvdyBlcnJcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRhdGFcbiAgICB9KVxuICB9XG5cbiAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWY6IHN0cmluZyk6IFByb21pc2U8b2JqZWN0PiB7XG4gICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2RjW2NhY2hlS2V5XSlcbiAgICB9XG4gICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGFcbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKVxuICB9XG5cbiAgZ2V0SW5pdGlhbFByb3BzKFxuICAgIENvbXBvbmVudDogQ29tcG9uZW50VHlwZSxcbiAgICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IHsgQ29tcG9uZW50OiBBcHAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXVxuICAgIGNvbnN0IEFwcFRyZWUgPSB0aGlzLl93cmFwQXBwKEFwcCBhcyBBcHBDb21wb25lbnQpXG4gICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlXG4gICAgcmV0dXJuIGxvYWRHZXRJbml0aWFsUHJvcHM8QXBwQ29udGV4dFR5cGU8Um91dGVyPj4oQXBwLCB7XG4gICAgICBBcHBUcmVlLFxuICAgICAgQ29tcG9uZW50LFxuICAgICAgcm91dGVyOiB0aGlzLFxuICAgICAgY3R4LFxuICAgIH0pXG4gIH1cblxuICBhYm9ydENvbXBvbmVudExvYWQoYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcylcbiAgICAgIHRoaXMuY2xjKClcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cbiAgfVxuXG4gIG5vdGlmeShkYXRhOiBQcml2YXRlUm91dGVJbmZvKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQgYXMgQXBwQ29tcG9uZW50KVxuICB9XG59XG4iLCIvLyBlc2NhcGUgZGVsaW1pdGVycyB1c2VkIGJ5IHBhdGgtdG8tcmVnZXhwXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBlc2NhcGVQYXRoRGVsaW1pdGVycyhzZWdtZW50OiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gc2VnbWVudC5yZXBsYWNlKC9bLyM/XS9nLCAoY2hhcjogc3RyaW5nKSA9PiBlbmNvZGVVUklDb21wb25lbnQoY2hhcikpXG59XG4iLCIvLyBGb3JtYXQgZnVuY3Rpb24gbW9kaWZpZWQgZnJvbSBub2RlanNcbi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0ICogYXMgcXVlcnlzdHJpbmcgZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3Qgc2xhc2hlZFByb3RvY29scyA9IC9odHRwcz98ZnRwfGdvcGhlcnxmaWxlL1xuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0VXJsKHVybE9iajogVXJsT2JqZWN0KSB7XG4gIGxldCB7IGF1dGgsIGhvc3RuYW1lIH0gPSB1cmxPYmpcbiAgbGV0IHByb3RvY29sID0gdXJsT2JqLnByb3RvY29sIHx8ICcnXG4gIGxldCBwYXRobmFtZSA9IHVybE9iai5wYXRobmFtZSB8fCAnJ1xuICBsZXQgaGFzaCA9IHVybE9iai5oYXNoIHx8ICcnXG4gIGxldCBxdWVyeSA9IHVybE9iai5xdWVyeSB8fCAnJ1xuICBsZXQgaG9zdDogc3RyaW5nIHwgZmFsc2UgPSBmYWxzZVxuXG4gIGF1dGggPSBhdXRoID8gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpLnJlcGxhY2UoLyUzQS9pLCAnOicpICsgJ0AnIDogJydcblxuICBpZiAodXJsT2JqLmhvc3QpIHtcbiAgICBob3N0ID0gYXV0aCArIHVybE9iai5ob3N0XG4gIH0gZWxzZSBpZiAoaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArICh+aG9zdG5hbWUuaW5kZXhPZignOicpID8gYFske2hvc3RuYW1lfV1gIDogaG9zdG5hbWUpXG4gICAgaWYgKHVybE9iai5wb3J0KSB7XG4gICAgICBob3N0ICs9ICc6JyArIHVybE9iai5wb3J0XG4gICAgfVxuICB9XG5cbiAgaWYgKHF1ZXJ5ICYmIHR5cGVvZiBxdWVyeSA9PT0gJ29iamVjdCcpIHtcbiAgICBxdWVyeSA9IFN0cmluZyhxdWVyeXN0cmluZy51cmxRdWVyeVRvU2VhcmNoUGFyYW1zKHF1ZXJ5IGFzIFBhcnNlZFVybFF1ZXJ5KSlcbiAgfVxuXG4gIGxldCBzZWFyY2ggPSB1cmxPYmouc2VhcmNoIHx8IChxdWVyeSAmJiBgPyR7cXVlcnl9YCkgfHwgJydcblxuICBpZiAocHJvdG9jb2wgJiYgcHJvdG9jb2wuc3Vic3RyKC0xKSAhPT0gJzonKSBwcm90b2NvbCArPSAnOidcblxuICBpZiAoXG4gICAgdXJsT2JqLnNsYXNoZXMgfHxcbiAgICAoKCFwcm90b2NvbCB8fCBzbGFzaGVkUHJvdG9jb2xzLnRlc3QocHJvdG9jb2wpKSAmJiBob3N0ICE9PSBmYWxzZSlcbiAgKSB7XG4gICAgaG9zdCA9ICcvLycgKyAoaG9zdCB8fCAnJylcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWVbMF0gIT09ICcvJykgcGF0aG5hbWUgPSAnLycgKyBwYXRobmFtZVxuICB9IGVsc2UgaWYgKCFob3N0KSB7XG4gICAgaG9zdCA9ICcnXG4gIH1cblxuICBpZiAoaGFzaCAmJiBoYXNoWzBdICE9PSAnIycpIGhhc2ggPSAnIycgKyBoYXNoXG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoWzBdICE9PSAnPycpIHNlYXJjaCA9ICc/JyArIHNlYXJjaFxuXG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLCBlbmNvZGVVUklDb21wb25lbnQpXG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKCcjJywgJyUyMycpXG5cbiAgcmV0dXJuIGAke3Byb3RvY29sfSR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofSR7aGFzaH1gXG59XG4iLCIvLyBJZGVudGlmeSAvW3BhcmFtXS8gaW4gcm91dGUgc3RyaW5nXG5jb25zdCBURVNUX1JPVVRFID0gL1xcL1xcW1teL10rP1xcXSg/PVxcL3wkKS9cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRHluYW1pY1JvdXRlKHJvdXRlOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIFRFU1RfUk9VVEUudGVzdChyb3V0ZSlcbn1cbiIsImltcG9ydCB7IGdldExvY2F0aW9uT3JpZ2luIH0gZnJvbSAnLi4vLi4vdXRpbHMnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi9xdWVyeXN0cmluZydcblxuY29uc3QgRFVNTVlfQkFTRSA9IG5ldyBVUkwoXG4gIHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnID8gJ2h0dHA6Ly9uJyA6IGdldExvY2F0aW9uT3JpZ2luKClcbilcblxuLyoqXG4gKiBQYXJzZXMgcGF0aC1yZWxhdGl2ZSB1cmxzIChlLmcuIGAvaGVsbG8vd29ybGQ/Zm9vPWJhcmApLiBJZiB1cmwgaXNuJ3QgcGF0aC1yZWxhdGl2ZVxuICogKGUuZy4gYC4vaGVsbG9gKSB0aGVuIGF0IGxlYXN0IGJhc2UgbXVzdCBiZS5cbiAqIEFic29sdXRlIHVybHMgYXJlIHJlamVjdGVkIHdpdGggb25lIGV4Y2VwdGlvbiwgaW4gdGhlIGJyb3dzZXIsIGFic29sdXRlIHVybHMgdGhhdCBhcmUgb25cbiAqIHRoZSBjdXJyZW50IG9yaWdpbiB3aWxsIGJlIHBhcnNlZCBhcyByZWxhdGl2ZVxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VSZWxhdGl2ZVVybCh1cmw6IHN0cmluZywgYmFzZT86IHN0cmluZykge1xuICBjb25zdCByZXNvbHZlZEJhc2UgPSBiYXNlID8gbmV3IFVSTChiYXNlLCBEVU1NWV9CQVNFKSA6IERVTU1ZX0JBU0VcbiAgY29uc3Qge1xuICAgIHBhdGhuYW1lLFxuICAgIHNlYXJjaFBhcmFtcyxcbiAgICBzZWFyY2gsXG4gICAgaGFzaCxcbiAgICBocmVmLFxuICAgIG9yaWdpbixcbiAgICBwcm90b2NvbCxcbiAgfSA9IG5ldyBVUkwodXJsLCByZXNvbHZlZEJhc2UpXG4gIGlmIChcbiAgICBvcmlnaW4gIT09IERVTU1ZX0JBU0Uub3JpZ2luIHx8XG4gICAgKHByb3RvY29sICE9PSAnaHR0cDonICYmIHByb3RvY29sICE9PSAnaHR0cHM6JylcbiAgKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdpbnZhcmlhbnQ6IGludmFsaWQgcmVsYXRpdmUgVVJMJylcbiAgfVxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lLFxuICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZjogaHJlZi5zbGljZShEVU1NWV9CQVNFLm9yaWdpbi5sZW5ndGgpLFxuICB9XG59XG4iLCJpbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG5leHBvcnQgeyBwYXRoVG9SZWdleHAgfVxuXG5leHBvcnQgY29uc3QgbWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICBzZW5zaXRpdmU6IGZhbHNlLFxuICBkZWxpbWl0ZXI6ICcvJyxcbn1cblxuZXhwb3J0IGNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnM6IHBhdGhUb1JlZ2V4cC5Ub2tlbnNUb1JlZ2V4cE9wdGlvbnMgJlxuICBwYXRoVG9SZWdleHAuUGFyc2VPcHRpb25zID0ge1xuICAuLi5tYXRjaGVyT3B0aW9ucyxcbiAgc3RyaWN0OiB0cnVlLFxufVxuXG5leHBvcnQgZGVmYXVsdCAoY3VzdG9tUm91dGUgPSBmYWxzZSkgPT4ge1xuICByZXR1cm4gKHBhdGg6IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGtleXM6IHBhdGhUb1JlZ2V4cC5LZXlbXSA9IFtdXG4gICAgY29uc3QgbWF0Y2hlclJlZ2V4ID0gcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChcbiAgICAgIHBhdGgsXG4gICAgICBrZXlzLFxuICAgICAgY3VzdG9tUm91dGUgPyBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIDogbWF0Y2hlck9wdGlvbnNcbiAgICApXG4gICAgY29uc3QgbWF0Y2hlciA9IHBhdGhUb1JlZ2V4cC5yZWdleHBUb0Z1bmN0aW9uKG1hdGNoZXJSZWdleCwga2V5cylcblxuICAgIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQsIHBhcmFtcz86IGFueSkgPT4ge1xuICAgICAgY29uc3QgcmVzID0gcGF0aG5hbWUgPT0gbnVsbCA/IGZhbHNlIDogbWF0Y2hlcihwYXRobmFtZSlcbiAgICAgIGlmICghcmVzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgfVxuXG4gICAgICBpZiAoY3VzdG9tUm91dGUpIHtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIC8vIHVubmFtZWQgcGFyYW1zIHNob3VsZCBiZSByZW1vdmVkIGFzIHRoZXlcbiAgICAgICAgICAvLyBhcmUgbm90IGFsbG93ZWQgdG8gYmUgdXNlZCBpbiB0aGUgZGVzdGluYXRpb25cbiAgICAgICAgICBpZiAodHlwZW9mIGtleS5uYW1lID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgZGVsZXRlIChyZXMucGFyYW1zIGFzIGFueSlba2V5Lm5hbWVdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7IC4uLnBhcmFtcywgLi4ucmVzLnBhcmFtcyB9XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgKiBhcyBwYXRoVG9SZWdleHAgZnJvbSAnbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwJ1xuXG50eXBlIFBhcmFtcyA9IHsgW3BhcmFtOiBzdHJpbmddOiBhbnkgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcmVwYXJlRGVzdGluYXRpb24oXG4gIGRlc3RpbmF0aW9uOiBzdHJpbmcsXG4gIHBhcmFtczogUGFyYW1zLFxuICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gIGFwcGVuZFBhcmFtc1RvUXVlcnk6IGJvb2xlYW4sXG4gIGJhc2VQYXRoOiBzdHJpbmdcbikge1xuICBsZXQgcGFyc2VkRGVzdGluYXRpb246IHtcbiAgICBxdWVyeT86IFBhcnNlZFVybFF1ZXJ5XG4gICAgcHJvdG9jb2w/OiBzdHJpbmdcbiAgICBob3N0bmFtZT86IHN0cmluZ1xuICAgIHBvcnQ/OiBzdHJpbmdcbiAgfSAmIFJldHVyblR5cGU8dHlwZW9mIHBhcnNlUmVsYXRpdmVVcmw+ID0ge30gYXMgYW55XG5cbiAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgIHBhcnNlZERlc3RpbmF0aW9uID0gcGFyc2VSZWxhdGl2ZVVybChkZXN0aW5hdGlvbilcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHNlYXJjaFBhcmFtcyxcbiAgICAgIGhhc2gsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfSA9IG5ldyBVUkwoZGVzdGluYXRpb24pXG5cbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHtcbiAgICAgIHBhdGhuYW1lLFxuICAgICAgcXVlcnk6IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoc2VhcmNoUGFyYW1zKSxcbiAgICAgIGhhc2gsXG4gICAgICBwcm90b2NvbCxcbiAgICAgIGhvc3RuYW1lLFxuICAgICAgcG9ydCxcbiAgICAgIHNlYXJjaCxcbiAgICAgIGhyZWYsXG4gICAgfVxuICB9XG5cbiAgY29uc3QgZGVzdFF1ZXJ5ID0gcGFyc2VkRGVzdGluYXRpb24ucXVlcnlcbiAgY29uc3QgZGVzdFBhdGggPSBgJHtwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSF9JHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5oYXNoIHx8ICcnXG4gIH1gXG4gIGNvbnN0IGRlc3RQYXRoUGFyYW1LZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICBwYXRoVG9SZWdleHAucGF0aFRvUmVnZXhwKGRlc3RQYXRoLCBkZXN0UGF0aFBhcmFtS2V5cylcblxuICBjb25zdCBkZXN0UGF0aFBhcmFtcyA9IGRlc3RQYXRoUGFyYW1LZXlzLm1hcCgoa2V5KSA9PiBrZXkubmFtZSlcblxuICBsZXQgZGVzdGluYXRpb25Db21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKFxuICAgIGRlc3RQYXRoLFxuICAgIC8vIHdlIGRvbid0IHZhbGlkYXRlIHdoaWxlIGNvbXBpbGluZyB0aGUgZGVzdGluYXRpb24gc2luY2Ugd2Ugc2hvdWxkXG4gICAgLy8gaGF2ZSBhbHJlYWR5IHZhbGlkYXRlZCBiZWZvcmUgd2UgZ290IHRvIHRoaXMgcG9pbnQgYW5kIHZhbGlkYXRpbmdcbiAgICAvLyBicmVha3MgY29tcGlsaW5nIGRlc3RpbmF0aW9ucyB3aXRoIG5hbWVkIHBhdHRlcm4gcGFyYW1zIGZyb20gdGhlIHNvdXJjZVxuICAgIC8vIGUuZy4gL3NvbWV0aGluZzpoZWxsbyguKikgLT4gL2Fub3RoZXIvOmhlbGxvIGlzIGJyb2tlbiB3aXRoIHZhbGlkYXRpb25cbiAgICAvLyBzaW5jZSBjb21waWxlIHZhbGlkYXRpb24gaXMgbWVhbnQgZm9yIHJldmVyc2luZyBhbmQgbm90IGZvciBpbnNlcnRpbmdcbiAgICAvLyBwYXJhbXMgZnJvbSBhIHNlcGFyYXRlIHBhdGgtcmVnZXggaW50byBhbm90aGVyXG4gICAgeyB2YWxpZGF0ZTogZmFsc2UgfVxuICApXG4gIGxldCBuZXdVcmxcblxuICAvLyB1cGRhdGUgYW55IHBhcmFtcyBpbiBxdWVyeSB2YWx1ZXNcbiAgZm9yIChjb25zdCBba2V5LCBzdHJPckFycmF5XSBvZiBPYmplY3QuZW50cmllcyhkZXN0UXVlcnkpKSB7XG4gICAgbGV0IHZhbHVlID0gQXJyYXkuaXNBcnJheShzdHJPckFycmF5KSA/IHN0ck9yQXJyYXlbMF0gOiBzdHJPckFycmF5XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICAvLyB0aGUgdmFsdWUgbmVlZHMgdG8gc3RhcnQgd2l0aCBhIGZvcndhcmQtc2xhc2ggdG8gYmUgY29tcGlsZWRcbiAgICAgIC8vIGNvcnJlY3RseVxuICAgICAgdmFsdWUgPSBgLyR7dmFsdWV9YFxuICAgICAgY29uc3QgcXVlcnlDb21waWxlciA9IHBhdGhUb1JlZ2V4cC5jb21waWxlKHZhbHVlLCB7IHZhbGlkYXRlOiBmYWxzZSB9KVxuICAgICAgdmFsdWUgPSBxdWVyeUNvbXBpbGVyKHBhcmFtcykuc3Vic3RyKDEpXG4gICAgfVxuICAgIGRlc3RRdWVyeVtrZXldID0gdmFsdWVcbiAgfVxuXG4gIC8vIGFkZCBwYXRoIHBhcmFtcyB0byBxdWVyeSBpZiBpdCdzIG5vdCBhIHJlZGlyZWN0IGFuZCBub3RcbiAgLy8gYWxyZWFkeSBkZWZpbmVkIGluIGRlc3RpbmF0aW9uIHF1ZXJ5IG9yIHBhdGhcbiAgY29uc3QgcGFyYW1LZXlzID0gT2JqZWN0LmtleXMocGFyYW1zKVxuXG4gIGlmIChcbiAgICBhcHBlbmRQYXJhbXNUb1F1ZXJ5ICYmXG4gICAgIXBhcmFtS2V5cy5zb21lKChrZXkpID0+IGRlc3RQYXRoUGFyYW1zLmluY2x1ZGVzKGtleSkpXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIHBhcmFtS2V5cykge1xuICAgICAgaWYgKCEoa2V5IGluIGRlc3RRdWVyeSkpIHtcbiAgICAgICAgZGVzdFF1ZXJ5W2tleV0gPSBwYXJhbXNba2V5XVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IHNob3VsZEFkZEJhc2VQYXRoID0gZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpICYmIGJhc2VQYXRoXG5cbiAgdHJ5IHtcbiAgICBuZXdVcmwgPSBgJHtzaG91bGRBZGRCYXNlUGF0aCA/IGJhc2VQYXRoIDogJyd9JHtkZXN0aW5hdGlvbkNvbXBpbGVyKFxuICAgICAgcGFyYW1zXG4gICAgKX1gXG5cbiAgICBjb25zdCBbcGF0aG5hbWUsIGhhc2hdID0gbmV3VXJsLnNwbGl0KCcjJylcbiAgICBwYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCA9IGAke2hhc2ggPyAnIycgOiAnJ30ke2hhc2ggfHwgJyd9YFxuICAgIGRlbGV0ZSBwYXJzZWREZXN0aW5hdGlvbi5zZWFyY2hcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyci5tZXNzYWdlLm1hdGNoKC9FeHBlY3RlZCAuKj8gdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheS8pKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBUbyB1c2UgYSBtdWx0aS1tYXRjaCBpbiB0aGUgZGVzdGluYXRpb24geW91IG11c3QgYWRkIFxcYCpcXGAgYXQgdGhlIGVuZCBvZiB0aGUgcGFyYW0gbmFtZSB0byBzaWduaWZ5IGl0IHNob3VsZCByZXBlYXQuIGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL2ludmFsaWQtbXVsdGktbWF0Y2hgXG4gICAgICApXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9XG5cbiAgLy8gUXVlcnkgbWVyZ2Ugb3JkZXIgbG93ZXN0IHByaW9yaXR5IHRvIGhpZ2hlc3RcbiAgLy8gMS4gaW5pdGlhbCBVUkwgcXVlcnkgdmFsdWVzXG4gIC8vIDIuIHBhdGggc2VnbWVudCB2YWx1ZXNcbiAgLy8gMy4gZGVzdGluYXRpb24gc3BlY2lmaWVkIHF1ZXJ5IHZhbHVlc1xuICBwYXJzZWREZXN0aW5hdGlvbi5xdWVyeSA9IHtcbiAgICAuLi5xdWVyeSxcbiAgICAuLi5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSxcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbmV3VXJsLFxuICAgIHBhcnNlZERlc3RpbmF0aW9uLFxuICB9XG59XG4iLCJpbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuXG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShcbiAgc2VhcmNoUGFyYW1zOiBVUkxTZWFyY2hQYXJhbXNcbik6IFBhcnNlZFVybFF1ZXJ5IHtcbiAgY29uc3QgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5ID0ge31cbiAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcbiAgICBpZiAodHlwZW9mIHF1ZXJ5W2tleV0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICBxdWVyeVtrZXldID0gdmFsdWVcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocXVlcnlba2V5XSkpIHtcbiAgICAgIDsocXVlcnlba2V5XSBhcyBzdHJpbmdbXSkucHVzaCh2YWx1ZSlcbiAgICB9IGVsc2Uge1xuICAgICAgcXVlcnlba2V5XSA9IFtxdWVyeVtrZXldIGFzIHN0cmluZywgdmFsdWVdXG4gICAgfVxuICB9KVxuICByZXR1cm4gcXVlcnlcbn1cblxuZnVuY3Rpb24gc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShwYXJhbTogc3RyaW5nKTogc3RyaW5nIHtcbiAgaWYgKFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ3N0cmluZycgfHxcbiAgICAodHlwZW9mIHBhcmFtID09PSAnbnVtYmVyJyAmJiAhaXNOYU4ocGFyYW0pKSB8fFxuICAgIHR5cGVvZiBwYXJhbSA9PT0gJ2Jvb2xlYW4nXG4gICkge1xuICAgIHJldHVybiBTdHJpbmcocGFyYW0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcnXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVybFF1ZXJ5VG9TZWFyY2hQYXJhbXMoXG4gIHVybFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKTogVVJMU2VhcmNoUGFyYW1zIHtcbiAgY29uc3QgcmVzdWx0ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpXG4gIE9iamVjdC5lbnRyaWVzKHVybFF1ZXJ5KS5mb3JFYWNoKChba2V5LCB2YWx1ZV0pID0+IHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIHZhbHVlLmZvckVhY2goKGl0ZW0pID0+IHJlc3VsdC5hcHBlbmQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKGl0ZW0pKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0LnNldChrZXksIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0odmFsdWUpKVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHJlc3VsdFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYXNzaWduKFxuICB0YXJnZXQ6IFVSTFNlYXJjaFBhcmFtcyxcbiAgLi4uc2VhcmNoUGFyYW1zTGlzdDogVVJMU2VhcmNoUGFyYW1zW11cbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIHNlYXJjaFBhcmFtc0xpc3QuZm9yRWFjaCgoc2VhcmNoUGFyYW1zKSA9PiB7XG4gICAgQXJyYXkuZnJvbShzZWFyY2hQYXJhbXMua2V5cygpKS5mb3JFYWNoKChrZXkpID0+IHRhcmdldC5kZWxldGUoa2V5KSlcbiAgICBzZWFyY2hQYXJhbXMuZm9yRWFjaCgodmFsdWUsIGtleSkgPT4gdGFyZ2V0LmFwcGVuZChrZXksIHZhbHVlKSlcbiAgfSlcbiAgcmV0dXJuIHRhcmdldFxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCBwYXRoTWF0Y2ggZnJvbSAnLi9wYXRoLW1hdGNoJ1xuaW1wb3J0IHByZXBhcmVEZXN0aW5hdGlvbiBmcm9tICcuL3ByZXBhcmUtZGVzdGluYXRpb24nXG5pbXBvcnQgeyBSZXdyaXRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL2xvYWQtY3VzdG9tLXJvdXRlcydcbmltcG9ydCB7IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaCdcblxuY29uc3QgY3VzdG9tUm91dGVNYXRjaGVyID0gcGF0aE1hdGNoKHRydWUpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVSZXdyaXRlcyhcbiAgYXNQYXRoOiBzdHJpbmcsXG4gIHBhZ2VzOiBzdHJpbmdbXSxcbiAgYmFzZVBhdGg6IHN0cmluZyxcbiAgcmV3cml0ZXM6IFJld3JpdGVbXSxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICByZXNvbHZlSHJlZjogKHBhdGg6IHN0cmluZykgPT4gc3RyaW5nXG4pIHtcbiAgaWYgKCFwYWdlcy5pbmNsdWRlcyhhc1BhdGgpKSB7XG4gICAgZm9yIChjb25zdCByZXdyaXRlIG9mIHJld3JpdGVzKSB7XG4gICAgICBjb25zdCBtYXRjaGVyID0gY3VzdG9tUm91dGVNYXRjaGVyKHJld3JpdGUuc291cmNlKVxuICAgICAgY29uc3QgcGFyYW1zID0gbWF0Y2hlcihhc1BhdGgpXG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgaWYgKCFyZXdyaXRlLmRlc3RpbmF0aW9uKSB7XG4gICAgICAgICAgLy8gdGhpcyBpcyBhIHByb3hpZWQgcmV3cml0ZSB3aGljaCBpc24ndCBoYW5kbGVkIG9uIHRoZSBjbGllbnRcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRlc3RSZXMgPSBwcmVwYXJlRGVzdGluYXRpb24oXG4gICAgICAgICAgcmV3cml0ZS5kZXN0aW5hdGlvbixcbiAgICAgICAgICBwYXJhbXMsXG4gICAgICAgICAgcXVlcnksXG4gICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICByZXdyaXRlLmJhc2VQYXRoID09PSBmYWxzZSA/ICcnIDogYmFzZVBhdGhcbiAgICAgICAgKVxuICAgICAgICBhc1BhdGggPSBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnBhdGhuYW1lIVxuICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5LCBkZXN0UmVzLnBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5KVxuXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChhc1BhdGgpKSkge1xuICAgICAgICAgIC8vIGNoZWNrIGlmIHdlIG5vdyBtYXRjaCBhIHBhZ2UgYXMgdGhpcyBtZWFucyB3ZSBhcmUgZG9uZVxuICAgICAgICAgIC8vIHJlc29sdmluZyB0aGUgcmV3cml0ZXNcbiAgICAgICAgICBicmVha1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgbWF0Y2ggYSBkeW5hbWljLXJvdXRlLCBpZiBzbyB3ZSBicmVhayB0aGUgcmV3cml0ZXMgY2hhaW5cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gcmVzb2x2ZUhyZWYoYXNQYXRoKVxuXG4gICAgICAgIGlmIChyZXNvbHZlZEhyZWYgIT09IGFzUGF0aCAmJiBwYWdlcy5pbmNsdWRlcyhyZXNvbHZlZEhyZWYpKSB7XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXNQYXRoXG59XG4iLCJpbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi9yb3V0ZS1yZWdleCdcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlTWF0Y2hlcihyb3V0ZVJlZ2V4OiBSZXR1cm5UeXBlPHR5cGVvZiBnZXRSb3V0ZVJlZ2V4Pikge1xuICBjb25zdCB7IHJlLCBncm91cHMgfSA9IHJvdXRlUmVnZXhcbiAgcmV0dXJuIChwYXRobmFtZTogc3RyaW5nIHwgbnVsbCB8IHVuZGVmaW5lZCkgPT4ge1xuICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSByZS5leGVjKHBhdGhuYW1lISlcbiAgICBpZiAoIXJvdXRlTWF0Y2gpIHtcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGNvbnN0IGRlY29kZSA9IChwYXJhbTogc3RyaW5nKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHBhcmFtKVxuICAgICAgfSBjYXRjaCAoXykge1xuICAgICAgICBjb25zdCBlcnI6IEVycm9yICYgeyBjb2RlPzogc3RyaW5nIH0gPSBuZXcgRXJyb3IoXG4gICAgICAgICAgJ2ZhaWxlZCB0byBkZWNvZGUgcGFyYW0nXG4gICAgICAgIClcbiAgICAgICAgZXJyLmNvZGUgPSAnREVDT0RFX0ZBSUxFRCdcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG4gICAgfVxuICAgIGNvbnN0IHBhcmFtczogeyBbcGFyYW1OYW1lOiBzdHJpbmddOiBzdHJpbmcgfCBzdHJpbmdbXSB9ID0ge31cblxuICAgIE9iamVjdC5rZXlzKGdyb3VwcykuZm9yRWFjaCgoc2x1Z05hbWU6IHN0cmluZykgPT4ge1xuICAgICAgY29uc3QgZyA9IGdyb3Vwc1tzbHVnTmFtZV1cbiAgICAgIGNvbnN0IG0gPSByb3V0ZU1hdGNoW2cucG9zXVxuICAgICAgaWYgKG0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJhbXNbc2x1Z05hbWVdID0gfm0uaW5kZXhPZignLycpXG4gICAgICAgICAgPyBtLnNwbGl0KCcvJykubWFwKChlbnRyeSkgPT4gZGVjb2RlKGVudHJ5KSlcbiAgICAgICAgICA6IGcucmVwZWF0XG4gICAgICAgICAgPyBbZGVjb2RlKG0pXVxuICAgICAgICAgIDogZGVjb2RlKG0pXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gcGFyYW1zXG4gIH1cbn1cbiIsImludGVyZmFjZSBHcm91cCB7XG4gIHBvczogbnVtYmVyXG4gIHJlcGVhdDogYm9vbGVhblxuICBvcHRpb25hbDogYm9vbGVhblxufVxuXG4vLyB0aGlzIGlzbid0IGltcG9ydGluZyB0aGUgZXNjYXBlLXN0cmluZy1yZWdleCBtb2R1bGVcbi8vIHRvIHJlZHVjZSBieXRlc1xuZnVuY3Rpb24gZXNjYXBlUmVnZXgoc3RyOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9bfFxcXFx7fSgpW1xcXV4kKyo/Li1dL2csICdcXFxcJCYnKVxufVxuXG5mdW5jdGlvbiBwYXJzZVBhcmFtZXRlcihwYXJhbTogc3RyaW5nKSB7XG4gIGNvbnN0IG9wdGlvbmFsID0gcGFyYW0uc3RhcnRzV2l0aCgnWycpICYmIHBhcmFtLmVuZHNXaXRoKCddJylcbiAgaWYgKG9wdGlvbmFsKSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgxLCAtMSlcbiAgfVxuICBjb25zdCByZXBlYXQgPSBwYXJhbS5zdGFydHNXaXRoKCcuLi4nKVxuICBpZiAocmVwZWF0KSB7XG4gICAgcGFyYW0gPSBwYXJhbS5zbGljZSgzKVxuICB9XG4gIHJldHVybiB7IGtleTogcGFyYW0sIHJlcGVhdCwgb3B0aW9uYWwgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Um91dGVSZWdleChcbiAgbm9ybWFsaXplZFJvdXRlOiBzdHJpbmdcbik6IHtcbiAgcmU6IFJlZ0V4cFxuICBuYW1lZFJlZ2V4Pzogc3RyaW5nXG4gIHJvdXRlS2V5cz86IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfVxuICBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfVxufSB7XG4gIGNvbnN0IHNlZ21lbnRzID0gKG5vcm1hbGl6ZWRSb3V0ZS5yZXBsYWNlKC9cXC8kLywgJycpIHx8ICcvJylcbiAgICAuc2xpY2UoMSlcbiAgICAuc3BsaXQoJy8nKVxuXG4gIGNvbnN0IGdyb3VwczogeyBbZ3JvdXBOYW1lOiBzdHJpbmddOiBHcm91cCB9ID0ge31cbiAgbGV0IGdyb3VwSW5kZXggPSAxXG4gIGNvbnN0IHBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgaWYgKHNlZ21lbnQuc3RhcnRzV2l0aCgnWycpICYmIHNlZ21lbnQuZW5kc1dpdGgoJ10nKSkge1xuICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgIGdyb3Vwc1trZXldID0geyBwb3M6IGdyb3VwSW5kZXgrKywgcmVwZWF0LCBvcHRpb25hbCB9XG4gICAgICAgIHJldHVybiByZXBlYXQgPyAob3B0aW9uYWwgPyAnKD86LyguKz8pKT8nIDogJy8oLis/KScpIDogJy8oW14vXSs/KSdcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBgLyR7ZXNjYXBlUmVnZXgoc2VnbWVudCl9YFxuICAgICAgfVxuICAgIH0pXG4gICAgLmpvaW4oJycpXG5cbiAgLy8gZGVhZCBjb2RlIGVsaW1pbmF0ZSBmb3IgYnJvd3NlciBzaW5jZSBpdCdzIG9ubHkgbmVlZGVkXG4gIC8vIHdoaWxlIGdlbmVyYXRpbmcgcm91dGVzLW1hbmlmZXN0XG4gIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgIGxldCByb3V0ZUtleUNoYXJDb2RlID0gOTdcbiAgICBsZXQgcm91dGVLZXlDaGFyTGVuZ3RoID0gMVxuXG4gICAgLy8gYnVpbGRzIGEgbWluaW1hbCByb3V0ZUtleSB1c2luZyBvbmx5IGEteiBhbmQgbWluaW1hbCBudW1iZXIgb2YgY2hhcmFjdGVyc1xuICAgIGNvbnN0IGdldFNhZmVSb3V0ZUtleSA9ICgpID0+IHtcbiAgICAgIGxldCByb3V0ZUtleSA9ICcnXG5cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm91dGVLZXlDaGFyTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm91dGVLZXkgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShyb3V0ZUtleUNoYXJDb2RlKVxuICAgICAgICByb3V0ZUtleUNoYXJDb2RlKytcblxuICAgICAgICBpZiAocm91dGVLZXlDaGFyQ29kZSA+IDEyMikge1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckxlbmd0aCsrXG4gICAgICAgICAgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByb3V0ZUtleVxuICAgIH1cblxuICAgIGNvbnN0IHJvdXRlS2V5czogeyBbbmFtZWQ6IHN0cmluZ106IHN0cmluZyB9ID0ge31cblxuICAgIGxldCBuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSA9IHNlZ21lbnRzXG4gICAgICAubWFwKChzZWdtZW50KSA9PiB7XG4gICAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgICBjb25zdCB7IGtleSwgb3B0aW9uYWwsIHJlcGVhdCB9ID0gcGFyc2VQYXJhbWV0ZXIoc2VnbWVudC5zbGljZSgxLCAtMSkpXG4gICAgICAgICAgLy8gcmVwbGFjZSBhbnkgbm9uLXdvcmQgY2hhcmFjdGVycyBzaW5jZSB0aGV5IGNhbiBicmVha1xuICAgICAgICAgIC8vIHRoZSBuYW1lZCByZWdleFxuICAgICAgICAgIGxldCBjbGVhbmVkS2V5ID0ga2V5LnJlcGxhY2UoL1xcVy9nLCAnJylcbiAgICAgICAgICBsZXQgaW52YWxpZEtleSA9IGZhbHNlXG5cbiAgICAgICAgICAvLyBjaGVjayBpZiB0aGUga2V5IGlzIHN0aWxsIGludmFsaWQgYW5kIGZhbGxiYWNrIHRvIHVzaW5nIGEga25vd25cbiAgICAgICAgICAvLyBzYWZlIGtleVxuICAgICAgICAgIGlmIChjbGVhbmVkS2V5Lmxlbmd0aCA9PT0gMCB8fCBjbGVhbmVkS2V5Lmxlbmd0aCA+IDMwKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoIWlzTmFOKHBhcnNlSW50KGNsZWFuZWRLZXkuc3Vic3RyKDAsIDEpKSkpIHtcbiAgICAgICAgICAgIGludmFsaWRLZXkgPSB0cnVlXG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGludmFsaWRLZXkpIHtcbiAgICAgICAgICAgIGNsZWFuZWRLZXkgPSBnZXRTYWZlUm91dGVLZXkoKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJvdXRlS2V5c1tjbGVhbmVkS2V5XSA9IGtleVxuICAgICAgICAgIHJldHVybiByZXBlYXRcbiAgICAgICAgICAgID8gb3B0aW9uYWxcbiAgICAgICAgICAgICAgPyBgKD86Lyg/PCR7Y2xlYW5lZEtleX0+Lis/KSk/YFxuICAgICAgICAgICAgICA6IGAvKD88JHtjbGVhbmVkS2V5fT4uKz8pYFxuICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+W14vXSs/KWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5qb2luKCcnKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgICAgZ3JvdXBzLFxuICAgICAgcm91dGVLZXlzLFxuICAgICAgbmFtZWRSZWdleDogYF4ke25hbWVkUGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgLFxuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcmU6IG5ldyBSZWdFeHAoYF4ke3BhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCksXG4gICAgZ3JvdXBzLFxuICB9XG59XG4iLCJpbXBvcnQgeyBJbmNvbWluZ01lc3NhZ2UsIFNlcnZlclJlc3BvbnNlIH0gZnJvbSAnaHR0cCdcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQgeyBmb3JtYXRVcmwgfSBmcm9tICcuL3JvdXRlci91dGlscy9mb3JtYXQtdXJsJ1xuaW1wb3J0IHsgTWFuaWZlc3RJdGVtIH0gZnJvbSAnLi4vc2VydmVyL2xvYWQtY29tcG9uZW50cydcbmltcG9ydCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBFbnYgfSBmcm9tICdAbmV4dC9lbnYnXG5pbXBvcnQgeyBCdWlsZE1hbmlmZXN0IH0gZnJvbSAnLi4vc2VydmVyL2dldC1wYWdlLWZpbGVzJ1xuXG4vKipcbiAqIFR5cGVzIHVzZWQgYnkgYm90aCBuZXh0IGFuZCBuZXh0LXNlcnZlclxuICovXG5cbmV4cG9ydCB0eXBlIE5leHRDb21wb25lbnRUeXBlPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPiA9IENvbXBvbmVudFR5cGU8UD4gJiB7XG4gIC8qKlxuICAgKiBVc2VkIGZvciBpbml0aWFsIHBhZ2UgbG9hZCBkYXRhIHBvcHVsYXRpb24uIERhdGEgcmV0dXJuZWQgZnJvbSBgZ2V0SW5pdGlhbFByb3BzYCBpcyBzZXJpYWxpemVkIHdoZW4gc2VydmVyIHJlbmRlcmVkLlxuICAgKiBNYWtlIHN1cmUgdG8gcmV0dXJuIHBsYWluIGBPYmplY3RgIHdpdGhvdXQgdXNpbmcgYERhdGVgLCBgTWFwYCwgYFNldGAuXG4gICAqIEBwYXJhbSBjdHggQ29udGV4dCBvZiBgcGFnZWBcbiAgICovXG4gIGdldEluaXRpYWxQcm9wcz8oY29udGV4dDogQyk6IElQIHwgUHJvbWlzZTxJUD5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIERvY3VtZW50Q29udGV4dCxcbiAgRG9jdW1lbnRJbml0aWFsUHJvcHMsXG4gIERvY3VtZW50UHJvcHNcbj4gJiB7XG4gIHJlbmRlckRvY3VtZW50KFxuICAgIERvY3VtZW50OiBEb2N1bWVudFR5cGUsXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHNcbiAgKTogUmVhY3QuUmVhY3RFbGVtZW50XG59XG5cbmV4cG9ydCB0eXBlIEFwcFR5cGUgPSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQXBwQ29udGV4dFR5cGUsXG4gIEFwcEluaXRpYWxQcm9wcyxcbiAgQXBwUHJvcHNUeXBlXG4+XG5cbmV4cG9ydCB0eXBlIEFwcFRyZWVUeXBlID0gQ29tcG9uZW50VHlwZTxcbiAgQXBwSW5pdGlhbFByb3BzICYgeyBbbmFtZTogc3RyaW5nXTogYW55IH1cbj5cblxuLyoqXG4gKiBXZWIgdml0YWxzIHByb3ZpZGVkIHRvIF9hcHAucmVwb3J0V2ViVml0YWxzIGJ5IENvcmUgV2ViIFZpdGFscyBwbHVnaW4gZGV2ZWxvcGVkIGJ5IEdvb2dsZSBDaHJvbWUgdGVhbS5cbiAqIGh0dHBzOi8vbmV4dGpzLm9yZy9ibG9nL25leHQtOS00I2ludGVncmF0ZWQtd2ViLXZpdGFscy1yZXBvcnRpbmdcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dFdlYlZpdGFsc01ldHJpYyA9IHtcbiAgaWQ6IHN0cmluZ1xuICBsYWJlbDogc3RyaW5nXG4gIG5hbWU6IHN0cmluZ1xuICBzdGFydFRpbWU6IG51bWJlclxuICB2YWx1ZTogbnVtYmVyXG59XG5cbmV4cG9ydCB0eXBlIEVuaGFuY2VyPEM+ID0gKENvbXBvbmVudDogQykgPT4gQ1xuXG5leHBvcnQgdHlwZSBDb21wb25lbnRzRW5oYW5jZXIgPVxuICB8IHtcbiAgICAgIGVuaGFuY2VBcHA/OiBFbmhhbmNlcjxBcHBUeXBlPlxuICAgICAgZW5oYW5jZUNvbXBvbmVudD86IEVuaGFuY2VyPE5leHRDb21wb25lbnRUeXBlPlxuICAgIH1cbiAgfCBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cblxuZXhwb3J0IHR5cGUgUmVuZGVyUGFnZVJlc3VsdCA9IHtcbiAgaHRtbDogc3RyaW5nXG4gIGhlYWQ/OiBBcnJheTxKU1guRWxlbWVudCB8IG51bGw+XG59XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2UgPSAoXG4gIG9wdGlvbnM/OiBDb21wb25lbnRzRW5oYW5jZXJcbikgPT4gUmVuZGVyUGFnZVJlc3VsdCB8IFByb21pc2U8UmVuZGVyUGFnZVJlc3VsdD5cblxuZXhwb3J0IHR5cGUgQmFzZUNvbnRleHQgPSB7XG4gIHJlcz86IFNlcnZlclJlc3BvbnNlXG4gIFtrOiBzdHJpbmddOiBhbnlcbn1cblxuZXhwb3J0IHR5cGUgSGVhZEVudHJ5ID0gW3N0cmluZywgeyBba2V5OiBzdHJpbmddOiBhbnkgfV1cblxuZXhwb3J0IHR5cGUgTkVYVF9EQVRBID0ge1xuICBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PlxuICBwYWdlOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGJ1aWxkSWQ6IHN0cmluZ1xuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBydW50aW1lQ29uZmlnPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICBuZXh0RXhwb3J0PzogYm9vbGVhblxuICBhdXRvRXhwb3J0PzogYm9vbGVhblxuICBpc0ZhbGxiYWNrPzogYm9vbGVhblxuICBkeW5hbWljSWRzPzogc3RyaW5nW11cbiAgZXJyPzogRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfVxuICBnc3A/OiBib29sZWFuXG4gIGdzc3A/OiBib29sZWFuXG4gIGN1c3RvbVNlcnZlcj86IGJvb2xlYW5cbiAgZ2lwPzogYm9vbGVhblxuICBhcHBHaXA/OiBib29sZWFuXG4gIGhlYWQ6IEhlYWRFbnRyeVtdXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xufVxuXG4vKipcbiAqIGBOZXh0YCBjb250ZXh0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dFBhZ2VDb250ZXh0IHtcbiAgLyoqXG4gICAqIEVycm9yIG9iamVjdCBpZiBlbmNvdW50ZXJlZCBkdXJpbmcgcmVuZGVyaW5nXG4gICAqL1xuICBlcnI/OiAoRXJyb3IgJiB7IHN0YXR1c0NvZGU/OiBudW1iZXIgfSkgfCBudWxsXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVxdWVzdCBvYmplY3QuXG4gICAqL1xuICByZXE/OiBJbmNvbWluZ01lc3NhZ2VcbiAgLyoqXG4gICAqIGBIVFRQYCByZXNwb25zZSBvYmplY3QuXG4gICAqL1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICAvKipcbiAgICogUGF0aCBzZWN0aW9uIG9mIGBVUkxgLlxuICAgKi9cbiAgcGF0aG5hbWU6IHN0cmluZ1xuICAvKipcbiAgICogUXVlcnkgc3RyaW5nIHNlY3Rpb24gb2YgYFVSTGAgcGFyc2VkIGFzIGFuIG9iamVjdC5cbiAgICovXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICAvKipcbiAgICogYFN0cmluZ2Agb2YgdGhlIGFjdHVhbCBwYXRoIGluY2x1ZGluZyBxdWVyeS5cbiAgICovXG4gIGFzUGF0aD86IHN0cmluZ1xuICAvKipcbiAgICogYENvbXBvbmVudGAgdGhlIHRyZWUgb2YgdGhlIEFwcCB0byB1c2UgaWYgbmVlZGluZyB0byByZW5kZXIgc2VwYXJhdGVseVxuICAgKi9cbiAgQXBwVHJlZTogQXBwVHJlZVR5cGVcbn1cblxuZXhwb3J0IHR5cGUgQXBwQ29udGV4dFR5cGU8UiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyPiA9IHtcbiAgQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxOZXh0UGFnZUNvbnRleHQ+XG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG4gIGN0eDogTmV4dFBhZ2VDb250ZXh0XG4gIHJvdXRlcjogUlxufVxuXG5leHBvcnQgdHlwZSBBcHBJbml0aWFsUHJvcHMgPSB7XG4gIHBhZ2VQcm9wczogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzVHlwZTxcbiAgUiBleHRlbmRzIE5leHRSb3V0ZXIgPSBOZXh0Um91dGVyLFxuICBQID0ge31cbj4gPSBBcHBJbml0aWFsUHJvcHMgJiB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0LCBhbnksIFA+XG4gIHJvdXRlcjogUlxuICBfX05fU1NHPzogYm9vbGVhblxuICBfX05fU1NQPzogYm9vbGVhblxufVxuXG5leHBvcnQgdHlwZSBEb2N1bWVudENvbnRleHQgPSBOZXh0UGFnZUNvbnRleHQgJiB7XG4gIHJlbmRlclBhZ2U6IFJlbmRlclBhZ2Vcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRJbml0aWFsUHJvcHMgPSBSZW5kZXJQYWdlUmVzdWx0ICYge1xuICBzdHlsZXM/OiBSZWFjdC5SZWFjdEVsZW1lbnRbXSB8IFJlYWN0LlJlYWN0RnJhZ21lbnRcbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRQcm9wcyA9IERvY3VtZW50SW5pdGlhbFByb3BzICYge1xuICBfX05FWFRfREFUQV9fOiBORVhUX0RBVEFcbiAgZGFuZ2Vyb3VzQXNQYXRoOiBzdHJpbmdcbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkOiB7XG4gICAgSHRtbD86IGJvb2xlYW5cbiAgICBNYWluPzogYm9vbGVhblxuICAgIEhlYWQ/OiBib29sZWFuXG4gICAgTmV4dFNjcmlwdD86IGJvb2xlYW5cbiAgfVxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0XG4gIGFtcFBhdGg6IHN0cmluZ1xuICBpbkFtcE1vZGU6IGJvb2xlYW5cbiAgaHlicmlkQW1wOiBib29sZWFuXG4gIGlzRGV2ZWxvcG1lbnQ6IGJvb2xlYW5cbiAgZHluYW1pY0ltcG9ydHM6IE1hbmlmZXN0SXRlbVtdXG4gIGFzc2V0UHJlZml4Pzogc3RyaW5nXG4gIGNhbm9uaWNhbEJhc2U6IHN0cmluZ1xuICBoZWFkVGFnczogYW55W11cbiAgdW5zdGFibGVfcnVudGltZUpTPzogZmFsc2VcbiAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmc6IHN0cmluZ1xuICBsb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIHJlcXVlc3RcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZXh0QXBpUmVxdWVzdCBleHRlbmRzIEluY29taW5nTWVzc2FnZSB7XG4gIC8qKlxuICAgKiBPYmplY3Qgb2YgYHF1ZXJ5YCB2YWx1ZXMgZnJvbSB1cmxcbiAgICovXG4gIHF1ZXJ5OiB7XG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW11cbiAgfVxuICAvKipcbiAgICogT2JqZWN0IG9mIGBjb29raWVzYCBmcm9tIGhlYWRlclxuICAgKi9cbiAgY29va2llczoge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xuICB9XG5cbiAgYm9keTogYW55XG5cbiAgZW52OiBFbnZcblxuICBwcmV2aWV3PzogYm9vbGVhblxuICAvKipcbiAgICogUHJldmlldyBkYXRhIHNldCBvbiB0aGUgcmVxdWVzdCwgaWYgYW55XG4gICAqICovXG4gIHByZXZpZXdEYXRhPzogYW55XG59XG5cbi8qKlxuICogU2VuZCBib2R5IG9mIHJlc3BvbnNlXG4gKi9cbnR5cGUgU2VuZDxUPiA9IChib2R5OiBUKSA9PiB2b2lkXG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXNwb25zZVxuICovXG5leHBvcnQgdHlwZSBOZXh0QXBpUmVzcG9uc2U8VCA9IGFueT4gPSBTZXJ2ZXJSZXNwb25zZSAmIHtcbiAgLyoqXG4gICAqIFNlbmQgZGF0YSBgYW55YCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBzZW5kOiBTZW5kPFQ+XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGpzb25gIGRhdGEgaW4gcmVzcG9uc2VcbiAgICovXG4gIGpzb246IFNlbmQ8VD5cbiAgc3RhdHVzOiAoc3RhdHVzQ29kZTogbnVtYmVyKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3QodXJsOiBzdHJpbmcpOiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgcmVkaXJlY3Qoc3RhdHVzOiBudW1iZXIsIHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG5cbiAgLyoqXG4gICAqIFNldCBwcmV2aWV3IGRhdGEgZm9yIE5leHQuanMnIHByZXJlbmRlciBtb2RlXG4gICAqL1xuICBzZXRQcmV2aWV3RGF0YTogKFxuICAgIGRhdGE6IG9iamVjdCB8IHN0cmluZyxcbiAgICBvcHRpb25zPzoge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZpZXMgdGhlIG51bWJlciAoaW4gc2Vjb25kcykgZm9yIHRoZSBwcmV2aWV3IHNlc3Npb24gdG8gbGFzdCBmb3IuXG4gICAgICAgKiBUaGUgZ2l2ZW4gbnVtYmVyIHdpbGwgYmUgY29udmVydGVkIHRvIGFuIGludGVnZXIgYnkgcm91bmRpbmcgZG93bi5cbiAgICAgICAqIEJ5IGRlZmF1bHQsIG5vIG1heGltdW0gYWdlIGlzIHNldCBhbmQgdGhlIHByZXZpZXcgc2Vzc2lvbiBmaW5pc2hlc1xuICAgICAgICogd2hlbiB0aGUgY2xpZW50IHNodXRzIGRvd24gKGJyb3dzZXIgaXMgY2xvc2VkKS5cbiAgICAgICAqL1xuICAgICAgbWF4QWdlPzogbnVtYmVyXG4gICAgfVxuICApID0+IE5leHRBcGlSZXNwb25zZTxUPlxuICBjbGVhclByZXZpZXdEYXRhOiAoKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbn1cblxuLyoqXG4gKiBOZXh0IGBBUElgIHJvdXRlIGhhbmRsZXJcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaUhhbmRsZXI8VCA9IGFueT4gPSAoXG4gIHJlcTogTmV4dEFwaVJlcXVlc3QsXG4gIHJlczogTmV4dEFwaVJlc3BvbnNlPFQ+XG4pID0+IHZvaWQgfCBQcm9taXNlPHZvaWQ+XG5cbi8qKlxuICogVXRpbHNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGV4ZWNPbmNlPFQgZXh0ZW5kcyAoLi4uYXJnczogYW55W10pID0+IFJldHVyblR5cGU8VD4+KFxuICBmbjogVFxuKTogVCB7XG4gIGxldCB1c2VkID0gZmFsc2VcbiAgbGV0IHJlc3VsdDogUmV0dXJuVHlwZTxUPlxuXG4gIHJldHVybiAoKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgaWYgKCF1c2VkKSB7XG4gICAgICB1c2VkID0gdHJ1ZVxuICAgICAgcmVzdWx0ID0gZm4oLi4uYXJncylcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdFxuICB9KSBhcyBUXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhdGlvbk9yaWdpbigpIHtcbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdG5hbWUsIHBvcnQgfSA9IHdpbmRvdy5sb2NhdGlvblxuICByZXR1cm4gYCR7cHJvdG9jb2x9Ly8ke2hvc3RuYW1lfSR7cG9ydCA/ICc6JyArIHBvcnQgOiAnJ31gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVUkwoKSB7XG4gIGNvbnN0IHsgaHJlZiB9ID0gd2luZG93LmxvY2F0aW9uXG4gIGNvbnN0IG9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgcmV0dXJuIGhyZWYuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaXNwbGF5TmFtZTxQPihDb21wb25lbnQ6IENvbXBvbmVudFR5cGU8UD4pIHtcbiAgcmV0dXJuIHR5cGVvZiBDb21wb25lbnQgPT09ICdzdHJpbmcnXG4gICAgPyBDb21wb25lbnRcbiAgICA6IENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bidcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVzU2VudChyZXM6IFNlcnZlclJlc3BvbnNlKSB7XG4gIHJldHVybiByZXMuZmluaXNoZWQgfHwgcmVzLmhlYWRlcnNTZW50XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkR2V0SW5pdGlhbFByb3BzPFxuICBDIGV4dGVuZHMgQmFzZUNvbnRleHQsXG4gIElQID0ge30sXG4gIFAgPSB7fVxuPihBcHA6IE5leHRDb21wb25lbnRUeXBlPEMsIElQLCBQPiwgY3R4OiBDKTogUHJvbWlzZTxJUD4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChBcHAucHJvdG90eXBlPy5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgICBBcHBcbiAgICAgICl9LmdldEluaXRpYWxQcm9wcygpXCIgaXMgZGVmaW5lZCBhcyBhbiBpbnN0YW5jZSBtZXRob2QgLSB2aXNpdCBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9nZXQtaW5pdGlhbC1wcm9wcy1hcy1hbi1pbnN0YW5jZS1tZXRob2QgZm9yIG1vcmUgaW5mb3JtYXRpb24uYFxuICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gICAgfVxuICB9XG4gIC8vIHdoZW4gY2FsbGVkIGZyb20gX2FwcCBgY3R4YCBpcyBuZXN0ZWQgaW4gYGN0eGBcbiAgY29uc3QgcmVzID0gY3R4LnJlcyB8fCAoY3R4LmN0eCAmJiBjdHguY3R4LnJlcylcblxuICBpZiAoIUFwcC5nZXRJbml0aWFsUHJvcHMpIHtcbiAgICBpZiAoY3R4LmN0eCAmJiBjdHguQ29tcG9uZW50KSB7XG4gICAgICAvLyBAdHMtaWdub3JlIHBhZ2VQcm9wcyBkZWZhdWx0XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYWdlUHJvcHM6IGF3YWl0IGxvYWRHZXRJbml0aWFsUHJvcHMoY3R4LkNvbXBvbmVudCwgY3R4LmN0eCksXG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB7fSBhcyBJUFxuICB9XG5cbiAgY29uc3QgcHJvcHMgPSBhd2FpdCBBcHAuZ2V0SW5pdGlhbFByb3BzKGN0eClcblxuICBpZiAocmVzICYmIGlzUmVzU2VudChyZXMpKSB7XG4gICAgcmV0dXJuIHByb3BzXG4gIH1cblxuICBpZiAoIXByb3BzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGBcIiR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICBBcHBcbiAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIHNob3VsZCByZXNvbHZlIHRvIGFuIG9iamVjdC4gQnV0IGZvdW5kIFwiJHtwcm9wc31cIiBpbnN0ZWFkLmBcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHByb3BzKS5sZW5ndGggPT09IDAgJiYgIWN0eC5jdHgpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgYCR7Z2V0RGlzcGxheU5hbWUoXG4gICAgICAgICAgQXBwXG4gICAgICAgICl9IHJldHVybmVkIGFuIGVtcHR5IG9iamVjdCBmcm9tIFxcYGdldEluaXRpYWxQcm9wc1xcYC4gVGhpcyBkZS1vcHRpbWl6ZXMgYW5kIHByZXZlbnRzIGF1dG9tYXRpYyBzdGF0aWMgb3B0aW1pemF0aW9uLiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9lbXB0eS1vYmplY3QtZ2V0SW5pdGlhbFByb3BzYFxuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwcm9wc1xufVxuXG5leHBvcnQgY29uc3QgdXJsT2JqZWN0S2V5cyA9IFtcbiAgJ2F1dGgnLFxuICAnaGFzaCcsXG4gICdob3N0JyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hyZWYnLFxuICAncGF0aCcsXG4gICdwYXRobmFtZScsXG4gICdwb3J0JyxcbiAgJ3Byb3RvY29sJyxcbiAgJ3F1ZXJ5JyxcbiAgJ3NlYXJjaCcsXG4gICdzbGFzaGVzJyxcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHVybDogVXJsT2JqZWN0KTogc3RyaW5nIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgaWYgKHVybCAhPT0gbnVsbCAmJiB0eXBlb2YgdXJsID09PSAnb2JqZWN0Jykge1xuICAgICAgT2JqZWN0LmtleXModXJsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgaWYgKHVybE9iamVjdEtleXMuaW5kZXhPZihrZXkpID09PSAtMSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgIGBVbmtub3duIGtleSBwYXNzZWQgdmlhIHVybE9iamVjdCBpbnRvIHVybC5mb3JtYXQ6ICR7a2V5fWBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZvcm1hdFVybCh1cmwpXG59XG5cbmV4cG9ydCBjb25zdCBTUCA9IHR5cGVvZiBwZXJmb3JtYW5jZSAhPT0gJ3VuZGVmaW5lZCdcbmV4cG9ydCBjb25zdCBTVCA9XG4gIFNQICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tYXJrID09PSAnZnVuY3Rpb24nICYmXG4gIHR5cGVvZiBwZXJmb3JtYW5jZS5tZWFzdXJlID09PSAnZnVuY3Rpb24nXG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLm5vcm1hbGl6ZVBhdGhTZXA9bm9ybWFsaXplUGF0aFNlcDtleHBvcnRzLmRlbm9ybWFsaXplUGFnZVBhdGg9ZGVub3JtYWxpemVQYWdlUGF0aDtmdW5jdGlvbiBub3JtYWxpemVQYXRoU2VwKHBhdGgpe3JldHVybiBwYXRoLnJlcGxhY2UoL1xcXFwvZywnLycpO31mdW5jdGlvbiBkZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhZ2Upe3BhZ2U9bm9ybWFsaXplUGF0aFNlcChwYWdlKTtpZihwYWdlLnN0YXJ0c1dpdGgoJy9pbmRleC8nKSl7cGFnZT1wYWdlLnNsaWNlKDYpO31lbHNlIGlmKHBhZ2U9PT0nL2luZGV4Jyl7cGFnZT0nLyc7fXJldHVybiBwYWdlO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRlbm9ybWFsaXplLXBhZ2UtcGF0aC5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXG4iLCJmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0OyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIi4uL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG5mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gIGlmICh0eXBlb2YgV2Vha01hcCAhPT0gXCJmdW5jdGlvblwiKSByZXR1cm4gbnVsbDtcbiAgdmFyIGNhY2hlID0gbmV3IFdlYWtNYXAoKTtcblxuICBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUgPSBmdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKSB7XG4gICAgcmV0dXJuIGNhY2hlO1xuICB9O1xuXG4gIHJldHVybiBjYWNoZTtcbn1cblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQob2JqKSB7XG4gIGlmIChvYmogJiYgb2JqLl9fZXNNb2R1bGUpIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgaWYgKG9iaiA9PT0gbnVsbCB8fCBfdHlwZW9mKG9iaikgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG9iaiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiZGVmYXVsdFwiOiBvYmpcbiAgICB9O1xuICB9XG5cbiAgdmFyIGNhY2hlID0gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCk7XG5cbiAgaWYgKGNhY2hlICYmIGNhY2hlLmhhcyhvYmopKSB7XG4gICAgcmV0dXJuIGNhY2hlLmdldChvYmopO1xuICB9XG5cbiAgdmFyIG5ld09iaiA9IHt9O1xuICB2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmRlZmluZVByb3BlcnR5ICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG5cbiAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICB2YXIgZGVzYyA9IGhhc1Byb3BlcnR5RGVzY3JpcHRvciA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpIDogbnVsbDtcblxuICAgICAgaWYgKGRlc2MgJiYgKGRlc2MuZ2V0IHx8IGRlc2Muc2V0KSkge1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobmV3T2JqLCBrZXksIGRlc2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3T2JqW2tleV0gPSBvYmpba2V5XTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBuZXdPYmpbXCJkZWZhdWx0XCJdID0gb2JqO1xuXG4gIGlmIChjYWNoZSkge1xuICAgIGNhY2hlLnNldChvYmosIG5ld09iaik7XG4gIH1cblxuICByZXR1cm4gbmV3T2JqO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkOyIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIpIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IF90eXBlb2YgPSBmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYWdlbmRhMy0wM2EzNTc1YWM4ZGQyOTI2MmUwNGFkN2NiMDMyMGZiZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvYmFubmVyMS0xZThkYWRkOWNmOTI0YTFiZGM5NmE2NDkxMWU4YTNkNy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvY2lkYWRlLWI1MDgxYzEyZmE2NTVlOTNhMDZmYjFhZTRlZDllNDk4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9lbWFpbC0wMWE5YzJmZjA1OWE0Y2E1NWUyMmUwYmViMTJjMzJkNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZW5kZXJlY28tYjA0MDFlNTRkOGRjMTUxNTY4MTljOWUzOWFkZDgwMTAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2ZhY2Vib29rLTE1NmQ2MzZjYjAwMGUwYTlmOWZkOWQ0MTUxNzJjYmQ4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9pbnN0YWdyYW0tODZlOWYxYmQ2YTIyZGYyZDhjM2YzNzBjOWQwMGY5MDAucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xpbmtlZGluLTlkNjc1MDY5NWJhMTEzNjAyZWU1NGY0N2I2ZWY4YTdiLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVvQUFBQWJDQVlBQUFEYkFoa2pBQUFBQ1hCSVdYTUFBQXNUQUFBTEV3RUFtcHdZQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJuUVUxQkFBQ3hqd3Y4WVFVQUFBSUNTVVJCVkhnQjdaZ3RjOEpBRUliZmRDcVF5TXJJU21SbEpES3lNakkvQ1JtSlJFWkdJaXY3RTVCSUhOMU5OdlRZaEhENWFFbkNQVE0zZ1F0ekhBOTdlNXNESFAvRCtYejJxYjFqcE5EY0Z0UlcxSmJvZ1ljZTBKZUhkRm5KMjh6enZBd2pRdVJFMVBoNm9yYWpPWDZqQXkvb2dQeExFWDRsUWIzdWhVUnBPRUNrTHFVeEMycWZOT1lIT3RCYWxQRXYrZXJXRjRhampOUVEvVGhRTzZxK05mMkdBQzFwSmNxUTlLWnVEYjNzekNqb0RNMkpsMXVDcXF5Z3JTeHJVV3E5bTR3dU41blEzRmhTZ2lLNlRBTEpzVlpZaWFJQk9ZSmlWQ1dsWTVaVVlzalNpWngzdzRoejdyMHg3b3JpclJWRkpKbURjVWh2YVFKN1RBUmVodFMyOUZMUDJhY1czeXNmR2tYSkRzSGhxU1VsWGJmWlIwUHpUdW1TcWU0OHJUVEp1aWxLa3QxYWRYTUliK2pMRHBnd2tpNHkxZDBvcTFZVWZaZ0ZCYW83WCtleTNpZVB5RXBWTjB1S0pTZGZjU1ZLQ2tsZWFyb280d2phekVWU2llUll6bHNubzV2VFRDeTUrY0pGbEdUK0NOVUttd3ZKUkdxUzJTRzVOa0cxMWdyTldpc1hKZXVTdDM4ZGNuc2FhRGRYU1NXU2N4TTBGS1psUlBGU3F5c2tVendKUnExVkoydDVhOWNiZGJYOVZ6UlU4WGlWYTRZaWlma29KQTM1Z0RzcFdCWkZVSUppMStmVEMwNC94MWU1bVovVndKRWpQbElZNVVPbjg2aG54SW15eElteXhJbXl4SW15eElteVpLeWl5a2VtV1QyRUR3NC9NdkJSVDkxeHg2UDRBY3ArMVptNHlFa2VBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFa0FBQUFhQ0FZQUFBRDdhWEdGQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUhlU1VSQlZIZ0I3WmloY3NKQUVJWTNUQVd5RW9tc1JDSWprVWhrSkk5VGljd2pSRlpHSXBHVlNDUVNSLzlORm1iWmt1U1NhWWRMY3QvTXpvVkxRNU9QdTl1OVJPUVoxK3MxUnNPUlIxR1Vrd2RNeUQ5aTA3NGNIeVY1UjVEa1FKRGtRSkRrUUpEa1FKRGtRQ0VKdGNrVXNVQzhVNEI5ekRsdW45K2szU0pZMEFVbk14UngzelJTOFB4ck5BczUvb0tML1FRSE15b0ZNVlBFQm4xTEdoa3lteElTUVVKeHpOUHRMS0ZaeWZaZ0ZNZ3lreURtNWxReG95WVlUaGUwS2YwV0ZZOUJsQkkwTTZmdWU4ZGk0Y1lIRnJSRG5Nd2ZzcWdWRFJRbHlDYXNoODMxdlFSUUkrcGdMbGppeTNpZG10S0FrTFg0bHJBMG1YMzc4RkFuc1NoRWhzUGNYUGlCU0laU0luQzVRK1VJMGo4OEQ1SWRudDhPa3VmRnBKak1UVGViNzcwb3lkeWM1clVnWG01U1BQZnAyVFdWRlhlRnFHSU85MVdVSkNLN3h0WUtZbXEzSlNJcU05MHNhQ3R6dWplb041NGFGcE5LNHFxa2NlOG1jNVF6MzBWMTgxQk5aRzU3ajFUUnNlaytrb01neG1tREswT1JSZWt2WkZGcm4yc3BxYUk1ZzlrZjg0Qm5TaVdqTitMOEZrQ01wOVNUb3JPaFNNeW9CYTFlbFRTSStxczZLamR0Vjdoc3FheWkyeEJSQjBSSW9tN2lqSC8rU1I2QmUyUkpHOVZWN09pcEE1MGtxUnVKcWN4Mis3b1UraXFrSnBwVGVYOUhDdndmUDJtRHpubnRJbzRzQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3RlbGVmb25lLTkyYTY1MjA1MGNiMDZiYjZhZGIxMDBlYzQ5ZjAwZGIxLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy93aGF0c2FwcC0wMjA3N2FmY2ZlOWU3M2YzZDgzMDViOTMxZWJhMThkYy5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nby0wZTM5OGRjYjA2NGRjYTE0NTdmZDJkOTBiMWQ1YWYxMi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvbG9nb19icmFuY28tMzEzY2Y5MTgyYjc0NmM1YWFhNzM2NmNmNTk3NmYwZTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3F1ZW0tc29tb3MtZmZkODA0ZDAwM2U3MzgzNmMyYWYxNzc1NDVkNzk1ZWQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCR0NBWUFBQUJ4THVLRUFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFEbDJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU2Z2dTc4bklHbGtQU2RYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUW5QejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNkaFpHOWlaVHB1Y3pwdFpYUmhMeWMrQ2p4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXljK0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenBCZEhSeWFXSTlKMmgwZEhBNkx5OXVjeTVoZEhSeWFXSjFkR2x2Ymk1amIyMHZZV1J6THpFdU1DOG5QZ29nSUR4QmRIUnlhV0k2UVdSelBnb2dJQ0E4Y21SbU9sTmxjVDRLSUNBZ0lEeHlaR1k2YkdrZ2NtUm1PbkJoY25ObFZIbHdaVDBuVW1WemIzVnlZMlVuUGdvZ0lDQWdJRHhCZEhSeWFXSTZRM0psWVhSbFpENHlNREl5TFRBNUxUQXlQQzlCZEhSeWFXSTZRM0psWVhSbFpENEtJQ0FnSUNBOFFYUjBjbWxpT2tWNGRFbGtQalJpTTJFd01tSmhMVGsxWTJFdE5EQXhOeTA0TlRKbUxUWXpOV1ZoT1RWaE4yVmxaVHd2UVhSMGNtbGlPa1Y0ZEVsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Um1KSlpENDFNalV5TmpVNU1UUXhOemsxT0RBOEwwRjBkSEpwWWpwR1lrbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBqSThMMEYwZEhKcFlqcFViM1ZqYUZSNWNHVStDaUFnSUNBOEwzSmtaanBzYVQ0S0lDQWdQQzl5WkdZNlUyVnhQZ29nSUR3dlFYUjBjbWxpT2tGa2N6NEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29LSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNjbkNpQWdlRzFzYm5NNmNHUm1QU2RvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNCa1ppOHhMak12Sno0S0lDQThjR1JtT2tGMWRHaHZjajVVWW5JZ1YyVmlQQzl3WkdZNlFYVjBhRzl5UGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenA0YlhBOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOG5QZ29nSUR4NGJYQTZRM0psWVhSdmNsUnZiMncrUTJGdWRtRThMM2h0Y0RwRGNtVmhkRzl5Vkc5dmJENEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ284TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNkeUp6OCtnVzFPOEFBQUd5QkpSRUZVZUp6Tm5IbWNYVldWNzc5cjczT0hxbHVWU3FvU01oQ21SRHVBRU9aQlVBWmxES0RpRTU4R3BLVnRSTHRSK3luUGdVL3I0K0dqdFczRXA2QVN4MVlHWlFaREFoTG80SUF5SmhCSmpBSUptUWlWb1pJYWJ0M2huTDFYLzdIUHVWV1ZWS1VxSWJ4KzYvTzV5YWZ1M2VlY3ZkZGU0Mit0ZllTOVFNVkxia2JVNEZVUUhGYXdJa1lUcjk0YUVJU3E5OFdDOERiZ1VPQVFnU01WWmdFdFFCR2hCSUJTQnFwQW44QmZGSjRIVmlqOHVlWllYc3hSUlFXdlNtVEVlSy9pVkp3Nmg3R0NHa1AxMWl2ZThKcmtqVnhjdk9RSFJPS0l4Rk56RVFhMTVUcXVsQWNSUStMMUFDdWNCdnAyaEZOUW1RVWFXTFhqazNYNEdhbG1QK0JCVmdyNlc0VW5IYkk0TXF4VnI1UmpTeW5ucklMTFNVeWlGaStXeWh0ZzBKNHg1dEtiYUlranZCTmljZVFqWThyZStaS3hsQk94cFVqUEJ5NEVPUi9vR0dDQ0F1SUFyNm9tZmI0TW1VbUREeWlnSXVJQkE5ajArakJFMlFyNklIQmZPYllQbG5MT2xaOWRTT25ZT2FhYWVGL3dnc2taK3FJWWZuN2xiaTl4dHhsVG1qc1BzUWw0UWRWSVpFVVNyNzRza1pRMHVRaTRDdUU0TkpVS1ZhZmdFU3dxa3ExY1JFUkJaWVE1WkwvcElKRUJVVkFuWUJDeG1uSUk1Qm5RNnk4NDVvbzc1ejgzajhpSVNad3FvaXFpcUxlVWI5ODk2Ums3WXk2NmsrYjhWcndxMVg1RHFZUlZqNHNpUStMMUhFRy9CaHdwUVR3Y3FLcGlFQkZCVVcyb3o1NnFyNnFHaTFVVUZCWEJnd2hveWlTZVU3ZzZNdkpJa2loaXNPWEV1R0tVWUREMDE5dmhyZytPNldGam1tVEx4VGVqQXVuRHhScU04K3BVMmRlSWZBT1ltekVrM1dBRElDS29hdUROWGlSVjFlemU2VEo4K2dTYmZuZUxlcjZFWVlNVnJGUDFJQ3FBR0tYdmxrK08rb3hSSjl4MDhjME5RNkJnWWgvN29zM2p2TDVmaEIrSzBBN2lVNUUzZ2dqcG5FWGVtSEVmalRSSURReW9uQStib0VhVkxvWExMWEp2eFZjb21LSWhHQUM4R1BwSE1jeG1WejgyWDN3emRtQjFWbEZmOUUxNDFSdEV1RWRFMmxVbERoc29Ga0NEYlpRM215blFZSHhRclBCUXE2cWlLckdJdEF2YzQrR0djYzNIQU9yREdzSkZ6WE52M3ZXOVIvcWgrU1BmeC9xd1NnV3Jpa3ZVbDNMRzNDY2laeEk4aTBvd3FxcnNmWlhaWGNwVWpEQWhKeUtTZXI5RkdIK2hlaW1MaUJWd291Q00waitDV2cyN2tOS0g1cEh1UHdvV2NGNlpiSVNIUlRnU0pGYlZLSDJ3cGxzM1pxYWtkbWZVNy9ia2ZwcWFhSkdnWG9Ja0NEbFZYZUtVT1Vib0ZMQUNEZ1IxVVA3bHptcTFzeXFkZGcxcUZjMllvamhGcHhqaENVRXlwdVFDVTFBSllySmJUREVpUkdib3h3d3hwc05mTjVnRU1FSzRselZFdG5FZkNaNCt6RTNSSEVvc3lORldlQUxWS1dGTldBVTBDbXZla2FJZHZ5aE5uNXBOd3FpcUUweEpoSVVDTTRHTUtib24za1pWTVVhb0o1NWFidzE4K29NUmlzMTVjcEhCKzRIZEY0SXpEZ1lycUxYeml2ZUtVeVZKUE01N1NEejQ0TGtMcFFKNWEvREI3bVhlS3ljaXNjQk1SQmJpNVoxZXRXeEVEWWd2VFo5S2VZZTVEbGxZY2U3M1FBUURraVNxOVpXdlMrbXdhWXRFNU4wb3NaSXhaZmM5VHNhVVNqMWh2NDVXUG5MS0xOcGJDd2pRMlYzaFo0K3ZaRXRQaFdJK0luRWVyK0M4SjNZZVRUdzREOWFReTBjVWNwYVdZbzRESjdXeS84UVdEcHJjeHBUeHpmUlc2dno3NHBXczcrcWpFRmw4R2dHbXpCR1FXSVNjS28vTk9rTFArTk5TUTg2b2VFUlJUL1gyVCt6TW1LYUxmMENUamVpcGwybU9pc2FyOTRyZUNGd3BRcXpLRzVNVUVlcUpZMXA3aWNYWFhNZ0JrMXJaMU4wUHdENXR6YXhZMzhVN3Yzd3ZYZHY3YVdyT2s3T0dqdFltRHB6VXlrR1R4M0hncEZZT25EU09tVlBhbURsNUhKUEhOdzk1eHZaeWpmR2xBa3RXYmVhMC8zVWZmZ2U3a3pFbnJFVnlvRGNLOG1rallzcHg0c2NWYzFTcmRTcDMvQ013U0pVc1N1SWRSWnUzWHIxVDlCS1FLMFZ3cWFIZDdXQXRNNHJXQkJ2UTIxL255bk5tYzhDa1Z0N3h6L2Z3MUV1ZGlBanZPSGdxLzNITis3am5xblBaM0YzaDBQM2FtVEY1SEUzNW9acStxYnVmbHpaMjgraWYxck9xczV2Vm0zcFl1NldQMVp0NldQVjZONWVlZGpBL3UvSU1qbnZMUGl4K2NRT3RUVG04cHVuSEFITWlFWnpDcDFSNTBxTzNOK1dzZGQ0N0V3MDhMd0pvK3NqMzhBTHFuQUdjS2pORm1DZEN5dVhHalhlYktjNHJmZlVZSTBBMVpscDdpWFZiKzNqaWhYWGNjTVZwQUh6Mmg3L2h4WFZkblBhMmZYbm01VTZXcit0aXdaSlhXZFhadzdvdGZhemExTTJhemIxVWFnbkVMbnljaDhpQU1lUktCWXdSWGx6YkJjQUJrMXBSNzRQRVpPSDZJR2VSTFVYUm03M25TV0NWRjR4SGZkTkh2a2ZsbG44SWpERStqeGVIRlFERlk3NG1vczJxR2d1U1UvYU1LWW56akd2TzgrN0RweE5aUTErbHpwVHh6YlFVSXM0LythMWNlTUlNQVA3anhRMU1tOURNYjVadjROcTduOEVhUTZXZUFKQ3podjA3V3BreHVRMHJna2s5V0xabUVYajJsVTFzNkNyVG1hcm0xQWtsU0h5STFnZXBWTU9GQzBaVll4RnBCZjI2c2ZKQkVIdzlSc2lIc1UwZm5vZjRQQ2FxV3dVSHpBRVdpS2pYTkJ0T281VGREaktjVis3NjNObWNkL1NCSXpJd1RQaU54WVV2dkxxRjA2KzVuOWg1TnZ6Z285enh4RXQ4L0tiSGFHdHJ3dm1oYmw1RElnRWhJRlZWTlFwbmdTd1NzTEhQTzB1ZHlFYUM4M1g2WXVmSU4xSFMyclZCekZCQmpUWTRzM3VVU2N0NVJ4L0lYWDk4bWU4LzhpS0Z5UExGOXgzTjdBTW1jdWxOai9LTmo1eUVxdkw1Vy83QXp6OTFCbjlhdTVYcjdubU9sbUtFSHpta0FVSU0wMWROZU1mQlUvbktSY2N4YzBvYno3N2N5ZHJOdlV6dmFFRnlEYTgwaEFTUlRBTlUxYWZxOXJWeXppNmlIcnVpcVdNRkl0RVlJOWFXY3NhcDFqK0V5REdnQ1NwV1pXUzhaQ3prMDlYOVpjTTJGdi9oWlNqa3VPU1VXY3ljMHNhRGYzaVpxOTV6SkRscldQRDBhdXFKWjBOWG1VVlB2b3dwRlJyWGpzZ1lZL0RsR3RZRU95WUFpV2Y5MWo3Mm45aENJV2VIeEVSRG1ET1FtaHVDbGh4VGlwTVBJSEkzcUJVZk8rTzg1WU0zZnRCTjJLOE5RZjhwNkNXQ3FNZ291elpXS3VRamFDbGdtM0lZRWRxYTgweWExTUtrY1UxVTY0NWNJY0o1anhVaFA2NkppYTFOVEdncE1xNjVRRWRya1k3V3BwMCtFMXVMMkpZQ3pZVUlFVEJHb0o2d1prc2YrMDlzRGNIaUx1YXZhUm96eUFaOXJtUDJnZnpyclZjNHB4R1JDUGJPSys5MHdIbkFDU2tIamVpZXFkQ3drL0FLNmE3ZTgrUXJmUGdkYjZYelIzK0hpUENOQjVZU0o0NzNmZU1oT3JmM1UrK3JzYWxjUTRvNVNvVWNXN3Y2TTBSektPMGdDZGxmRzdyNmFHM0swOWFVWjNOUGhjaFlodU9Qa0c1OVNESTljT0xXWmErZTk0Vkw1aTBRSXpZU1JJTXQwcmtwNnFMd0JuVm9PUEpLYTFPZSs1OVp4WngvbWMrNVJ4M0FiMWE4eHZ4blZ6T3V1Y0N6ZjMyZEV3NmV5aitkZHdTNXlQRHI1OWZ5K1BJTlhQZTNKNU9MVXJWZ2dFZVJOZHo0OERKcXNjT0lCT213aHJWYitnQ1kxdDdDeHUzOTVMT0xobU5Pd0FRSWtJUVk0TVBBQWtBakQxNlZ5VWJrM0JTQ05FR0g5ajZFb0txMEZuTTh1bXc5RHoyOW1xZ1EwZHFVeHhwQklzUEpzNmJ3MlF1T0JJTHgvdjNLalZ6OS9tTkh2Ti9DcFd1b0p5NjdPMWpEYTEwaDY5bXZvOFRUTC9rMHh4cUpNNm14Q1lFNXFKNmp5aVJnY3lSQjBjNURtUURpUk5RTXdtZjNIb1VJbEcxOTFSQ2dHVU5TUzloV3FUZUczSERmRW02WS8zejR3NFg4U1A3YlRjT0tyb2lnem5QaDI5K0NWdzF4bkJYV2Jla0Znc1RnZkloM1JqRENBQ0dGVWtGeEtuUUE1eVA4TkRJQ1hubFh4anQ1TStDbUZCdXRKWTZMVDVuRlNiT20wRjlMMG0wYUlLL2FjTEZHUWlDWGVEL01EWU1xM2ZUUU11cEpVS1dBQnhnMjkxWlJWZmJyS0RYczJxNFdGSUsrUmxVQ2hYZUx5RThqNzN3ZWtSUFRjV1lJbnI4M0tZMkUzM0h3VlA3KzNZZlMxVmNsTWdOd2tBdDRGelpML0xKL2RyQjFtVkxrSThPOVQ2MGlkZ09NTXlMVVk4ZmFMWDNzUDZrVklqdHFQQlNtRmdLOTFNYWVxRlhKUjJBT0JRNmlBZFcrQ2FTQVYwcUZIRmYrK0xkOGN0N2pPNmxIY3lHSFU2VldTOFprOVhkVUpRaEJYeTF4ck4vYXgvVDJGcUtjR1RiSTIzbDZtVTFWUUE0aXA0ZEdpQjRObUZBaFZQTm1HTjBBdDBFMVR2akVXWWR4MXV6OTZLdkdBWUNTOE1RdjN2WkhEcG8wanMrY2R3VGxXdHlJRkVhYVRXUU5YLzdsVTFUalZDVXpFQ3gyck5uU3l5bUhUR3RnTWp1cTdNN1RDMzQ3NVlGRk9Db0NacVorMENPN3JocThNUW9SNnNIN1R1Q00yZFBaVnE2RkNrVEtuRkloeDVUeHpaeHgrSFM2KytzTWFObU9pd29Ta0xPVzlsS2hrUXVGMm8wMG90OTkyMHNVY2piWU1qdTJ2VmJ3RWlEUG1SRndTT3JTUlBSTktub29vRXB6SWNmL3ZPVUpQdmV6Mys5a04zTFdzTHF6aDN1ZWVnVUFhd0tPRXlkdTJQak9HS0ZTVGJqd3hCa05kV2w0cHExOWlBaVQyNXA1K2ZWdWNsRURmUmlSTWpnaVRkc1BqWUFEczJlcHZGbUdGNUFBYTM3aGZVZnpnUk5tMGwycHBmQkIySXUvdmVreFprMGJ6elgvL1hnS2tlV21oNWZ4czhVcitmV1gzME5UUHNJNUhjS2RuRFY4Zk41aUtuWFhVQlZGRVdOWXZ6VUVlZnQybEZpNVlSdENOSElzazVJTzVFNEFCMGJBaElINXYvbDFJWlBtTlNiRFZqSzNJOWtjOXB4VWcrMFpDUEphVXNDS0VhUGZqQnFsb0VBVEltQjg5dHNibUZNNnNSQklHUW1xRU5td0FTWXRzRFFYSXI1KzN4S3V1K2U1QnRDVVVUNHlyTi9TeDY5ZldBdWtxbVFOWjMvMVYyTlhKWlNjTmF6TDBvSVJBS3RkVURhZ05ZSzBrMmszRmo3U2J4bXlWa3M4dGY0NnRUaUU2K1ZhREwxVjRwWWkrV2hubk1RYW9idXZ4bVh2UG9SdlgvWk9laXZ4bUl6dmU3NitnUExnUUZIREpwUnJNVDM5ZFE2WTFBb2lleEtJdEVTRWJEbzMxaXNFQmtMd2xJd1JjdFpRcVR0cWNjSkJrOGR4MG9rem1aSWkrU2ZObXNyN3p6NmNwYTl1WWMzbUhscUsrU0hNVVFXeHdzWnQvVHo2cC9WVTZzbVkzSFZYdVVaYktUL2tlMk9FV3VKNWRYUFBMZ0dyMFNnQytvSGlhQU16YWFuR2pueGtzQ2Iwd1ZrajFHSlBYeTFtMnNRV3JwdDdLaDg5N1pER2RmWEVjY2JoMHpsejluN0V6blBaZHgvanR0LzloYmJtQW9uektXRHVLUlZ5UEw1OEE0KzhzQTQvUWhvUUpnSUk1Q05MUFU0NFpOOEpReGFlUmIvcnQ1WTVZTkt1QWF0ZFVGOEU5QUR0QTQ4Y25pbldDT1Zhd2ttenB2RGR2eitWcWVPYlU4WVlmdlhzYW43OS9GcStkL21wdExjVXVXSCs4OXovekNwNkszR2p1bWlOOExXTDM4NnRuejZUVnpxN2VmcWxUbHFLZVp6M1JOYlFYYTV4OFNteitQckZieWV5aG54azBLR09xQkdmMW1OSEpYYk0vZllqOU5maVFWNHBNRWJUSU8rZGgwd2xGeGtTcDR3OWxFR0EzZ2pZUnVxeVJ5cVJTT3BCWENYbXd1Tm5jUGorSFh4ei9sTHFpZWVRZlNkdzJlbUhjTm5waDdCazFXYk91UFlCbHY2MUU1TzMyTlJReE02REtoZisyME84Zk9NbGZQZGpwM0xpMVhjUEtZcmhQQjJ0UmFaM3RQRHZpLy9NcHA0S09XdUdxS3dJMUdMSHJIMG5jT0h4TTJncGhqUmk2RndCVlRac0hSdGdOY0NSSVRmYUZnR3ZBa2NSbW01MnFtVVA0V1ZLcjNXVnVlb252NFBlS3FlYzlGYmVkL3dNL3UrQ0Y3anE1MDhBTUNHMUxZbjNZU0hUeHZQYXRqSTk1UnBYL3ZpMzNQRS96dWJ5TXc3bGV3dVgwZGFhYWJFMG90aHI3bnFHTmFzMlEyR0h5TXdZS05jNDVhUzNjT0h4TS9BK3BBR0R5U3NRV2RadEhUdGdCUTA0enhGaW1WY05zQ0l0ME9qUVJzQ1JLWjh6ZEV3b1lkcGJtRFF1TEd6QmtsZHhpYWUxS1VjMVR0aFdydEZicnZIcGMyZnp3dlVmNHRSRHB3RnczMU9yZUhUWk9xNi85R1NtVFd5bFdoL3dLdGtTOXhuWFJMRzlSSHQ3aWZHRFBoMFRTa1R0SlNhMjdzSWtxaUpHaGdCV3p2bFJVZG8wdU5VMEVQeXpBVjVKRld2TWVaSnFRTmk4OHlUcExyY1c4MkFFNzBQZWMvWVIrL0h3Vjk3THYxMTZNb1djNWJaUG44VVJCMDRrcnNWODRkWS8wcFNQdVBaRHgxT3JKVHQ1bnNRcmlRc0YvY1JwNHhQKzlqdlZpb2JNamVDeEJrT2NEY0JxVi9zZW1HQlNxWHJGb0xJVXhJTmFFRWFOblhkRjFaanJQbndDbTMveU1SNys1L2R3N0l4OUFQanA0ai9UMmQzUGcxODZuNG50SlphczJNRDF2MXJLeDk1MUtLY2RQcDJlU2oyRXhIdUJWRU5jdExtbmtnSldMYU1DVmtGTWhKUUhIcFVsaGxoV2dLN09nSERkdzVxSmh1aUtseloyTTIvUmNqNXcvVU1jL2ZrN0FGalYyY081MTgxbmVrY0xEMTE5QVpPbnRQR1ZPNTVpYzArRlQ4MlpQV29OYVhjcDlPQmtnRlhMcUlCVndMZ2J6Yktyd2ErSXBLQjFWWjRFblFsNFVhSTlTUTY4VjhoSDNMem9SZXI5UVFJbXRBVWpQTDVVNEpXL3ZzNUYzM3lZdXo1M0RxLy82TzlZOU1JNkpvMXJZbnU1UnFNbk5Kdm9vUDhIcjBlRWtTTytCb1VJdkZKUFdMTzVsLzA2UmdlczBsSjBhbmpsajJLbGJsSzllMHl6ZG9sUWc5cnRMY3c2QzVyekVSTW1sQ2lWQ2tScDhKQTRENlVDOXoyOWlzTS8rd3R1ZnVSRk9zWVZ1ZTEzZitXcmR6OUxVOTZPamd2c0Joa1JYT3pTcW1UcjRDYWluU2lzdFZHeUJmUXg5VXFVRGw5b29BdG96L2kzdXptbEVVR000QUdmR3Noc0xpS0E4elFYSWw1Y3M1VlAzdlFZK1ZLZWVpMEJhMmd1Uk9BSGRxT2VPSkxFVWJObWlKcFpJeEM3UnNsa3VLV21rQXc0ejVvdHZVd2JCYkFLKzVuYUY1RnRYbmxJZ0VoQ29hbFQwWWRSNW9aR0liRmpxcmtOR3RCVHFhUFZHTnRjd0Zod2ZnREVpQk5QMjRRU0M2OCtuM0hOZVo1ZnZZV1B6M3VjNzF4K0t1ODZiRHA5MVppNTMzNms0VzF1L2ZTWmxBZEZ0SmxTWmEwbCs3UTFBUUdUR2M0K1pSV0QxN3JLR0JFbWxBb0JTdDJabVZtSG1GTWxBbjNJaUhSS2lKZzBkVVh5eTRHZ1cwTk5ZUmZrTlpSZHM4anpNM05tTS90dnByQ3R0OHIybmlyVmVrTGloaWFLM2dlM1cwODhYb05MVG54b01NeFp3NnViZW5oaTVVWjZLdlVHVkJITW9xYlhlNHdSWHQvZXorUExOOURaWFdsQUcwTlhDMWpodFcxbFZKWDIxbUpndXV3NExzc0FzZ3FCM0I0VUM0bFEzTDd2T1l6Tno2K1pYMS9YK3lSd0l1QVFiRnByR1JSOWFWb09UUUhtRkhBQ3VPRFlnN2pnMklOWXVHUU45eit6aXQvL2VTUGQvYld3czVHaFozdVpjNjZiVCt3OFJvUzhOVng5KzVNaExTREVIdXUzOW5IbVZ4L0E2d0F6WkpqeWlVakk1dnNxZFdhY01LT1JXbGdqalpKTVpBMnJPbnVJbldkaVN6SHRpQmlvU2c3cXJuSWdGdlRKQ1ZQckMwNzZ3RVFlL0U2dmkvS1JZY1A4RnkySVUrVGJLQ2VtZWhlNjN3ZGhIWmlRNms5dWEyYjV0ejZNVjJWaWF4UGVLMmRmOXl1T25iRVBuNW96bXpsSEh3RFFxUGxVYWdrVEo3Ynl3dlVmSW1kbHlPNUppaHUrNjM4L3dPSDdkM0R6eDArbGtMTmNkL2V6Zkd2QkN5ei8xbHhLaGRESk9SaUt5MXZMQllQd21EangxQ3R4c0ZzcGpTL2x5VWQycDdRQnlPb0NndzlyZkhQYnhnSUxidXF4MWphNUtQYmdFVmZCZ0MzOHN1UXJWd0hIZ0xwd0ppaklXK0toMkp6bko0K3RvQkJaM2pxMXJXRVQ1ais3bXNmK3RKNUhsNjdsT3d1WGNkUkJFem51TFpPWjNsSGljeGNjMVdnZFc3eDhRMFBpQmlZWW1OTmZTK2pjM3MraUY5YVJpeXd2dmQ1TjRwVEhsMitna0xPTkhwaE0rQ05yNk9xck1yNVVRRlhwYUMxdzh1SFRPVzdtUGh3NmZRS0g3ZC9CMi85bUNtdTM5TEprOVdhS09kdUlmTE9LSzZJT3hRTFBsVXY1dSttdlVsVGpST0swMVN5SmtIeGlBYWZvbVFLUGhQbW45a2F5VnRCZy9LcVZlakJQQWJVQ0k3UTI1OFBPdVpBNHVrb2RDam4wcm4va0d3OHM0UXMvL2kybGNVM0V6ZytMeVdXWmRPSTlxbERNV3dxUnBiY1NrL1VrRENaakRKVmF6SHVQbjhIOW41OHo1TGZlU3AybHIyNWg2YXJOL09peEZmemx0ZTBVODFuSGhHaDYzbWxJcTVrZ2l3QWIxNjJ6a1NPcS9PSUtTbk4vaUhPSnkrVnlCcEZGM3ZtN1FDNENqVVVrTi9oOFVHUU5iZU9hVWxjOEFCc2t6cU1TM0hhcG1NUG5JMXFLQVJpc3hZNHBrOXZZK01QTGRoTHBqSTc2L0IwY04yTWZmdkNKMDBjY3N5T2RlZTBEQVRZRnZyTndHYjlac1lFVjY3dDRyYXVmL2xwTVVrL0lGWElVQjRGVmltYVpkQXlhQTduTGlpNENUSUs2S09mcHYvMkswTFhwb3dSY3VEZzFUbDlDOVR3UmFVNzcxRXlHMWFncWJqREFOb3ozOG1rU21LUURSWVJOM1JYKzVkNEFnbWNHTjZoRnNER2QyL3Rac25vejM1eS9sRXJkTlV6YmNOS1ZxZExLMTdaeDJINGRlSzk4WitFeVhsbTdoVUtwaURGQ01SOWhpN25RS0RDQTRLa2dvcUplVkhLcTJxZnd4VkNaVVloYzZEb2s3Zk90L1B5VGxDNmVodzNGQmd2NmlpS2ZVUFRucWJobFRCbXhyWFdFWGpjQVdsUEorVC8zUEVPY0RBOWJ0cmNVV2JXcGh5L2Mrc2N4bFR1TUNUV3BqdGJBaUgzYW1saFhLbERNMjRidEMwRm1RMUlDVThJYU1vSC91QkZXQmNRWlIySXAzL2FKQWNZQStDU2hFRmw2MUx0bU1jYkRMYXFjcU9nL2lEUU9WNHlJOHUxSTFnalZlc0xUTDNYeW1mT080S09uSDB3aHNpT09UMUxqYXEyTXloUUFKQVNPVGZtSWRWdjYyTkFWcW84N0JueUQ1cHd4S1ZIVkhIQ2ppUHpDaUppeXE3dFdFNUVNUWw2R0xMQjR5VHhBTUtvU0t4ci9PcVowVHZUb3pvY3NkdDA2UDdnQnVxTzF5QkVIVEdTSVM5a2JsSzdmQ1B4MVl6ZHJ0dlNtQm53bzhLM3A4Y0IwUDJNZ3A2cVBUTDM4dExQWGZmOVJyTFhpQlJXRXltM0RITExJcUhUSnZEQi9WZU1WYjlTVXNQNTNBa2N4Y0ZZcDdWNGJHM09xc1J0cDJGNmhmR1RJUjNZWXBndytYQ0V4cWptRjV4em1uYUt1SWlKR1VJOFl5anVja2R3SjR5MnYzMGp6OUtrQTNnZ1dmQm5WT1lyOERuaUxpSXhKclFaN3NYRzdVS0c5UVpwMll1MHNLWksxcThZb09ZV1hGSCt1VlNwSU9MbVhyWG1uK1EvM29Pem9YK3FocklKVG1HeGdvWWdjbmFwVkpBT2lzMlBqMDM4WmFRcjREM0lXbVUxNVRtRU82Q1lKQnhzZENJejU2Qjlob0RlTlFNd0pXSU4yWXZ3cHFycG9rSzF4b1hlazBTM3dYMHFhQXBBU0RsTTRDZEJjRGxpVWVIOEt5aVlhVEZIVStHR1pBcnNBd1B0ditXU1FseUNlSWRIeVVpNFUzM1lXeUxkVTFZaUlUWThYTjNaSXgrWlQ5aXFGbkZPek01Q2t4NHV0cWhwVi9aWkpvck9Na1g3SjFFY0F6SWduYUdFTTR0OTh5VHlNK2l3b056VmY5VTJtQ1llK1gvai81RUM2a3JhSzdYQWdYYm5jR3JtMzZ1cmtUTTZRb2lVaVN2OXR1ejZ0UDJySnBQL1dLeHFqRkh6ZUZBUlJDOXlybnRtcTNKSkpqNGg0RFNmaVVsUW5ZSVZ2bEFIRGtHcUd1Nm1pcUJNUlB5QWwzT0pWWnlONkw2STJaM0lDZUpHQTdvM0dGTmdkZzNuUm5UVG51L0I0cWtsRUtmTHBTeStFeE9zWkF2OEtIQjFRVVhGcHNCT0FNRTI5Rkh0dXBGTnNLQlZGSUFpSlR5VTBlNmZEYzhBWGpUR1Arc1NCRVZzdTQ0ck5BUVBxcjNmczNaZGVES2JTM0htSWNXRy9WTVNtcjBucDF3b2xhZm9neUdkRjlJUUF2eWxrNzRzSjczOXBQRyswRkdOd0dqSm90aXFLQXpFcFJwdU5mUXE0NGIydkgzem4vVk5XWW8weDNua1Y4WXBSMUVWdjRtdFNCdE9sTjlHUzVLRG1xWW9uWDdDMjN5ZXVaQ0xHR1UrUE4rY0RGeUZ5TnVqa2dRZGxobnowRit1a2JCMzZZcDFNYk1LZ1RTZ1BBM2UxRllvUGR0ZXFsRjBmemJiRitucnNpdDdnQ3BiZUtQbC84Mktkd2RSeThjMGtKbzBFSFJoVmU5WStOZmZJNWtMb2UxSGFqZXBad09rZ0o0UE9JZzBxZHhLVVRDNEdBWVlOMVFtVUlQd0Y1UWxnc1RmeWlGWHBVanh6enppTzJ4YzlZMVZ3em9MeGl2VkMzNkFRZjNkcHIzaU40aVh6S09Kb3IyN245VUk3QVg0VlRSUnYwdXBua29pMVJnOFdPQVk0R0RpU1hiKzhxeGRZQ1N3RFZpbzhWMWUvc21pczB4UzZzb2p4ZUZIRlRSUFBGckZVVmFuZXV1Y015ZWcvQVM2SHF5OVdkTEYrQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCR0NBWUFBQUJ4THVLRUFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFEbDJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU2Z2dTc4bklHbGtQU2RYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUW5QejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNkaFpHOWlaVHB1Y3pwdFpYUmhMeWMrQ2p4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXljK0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenBCZEhSeWFXSTlKMmgwZEhBNkx5OXVjeTVoZEhSeWFXSjFkR2x2Ymk1amIyMHZZV1J6THpFdU1DOG5QZ29nSUR4QmRIUnlhV0k2UVdSelBnb2dJQ0E4Y21SbU9sTmxjVDRLSUNBZ0lEeHlaR1k2YkdrZ2NtUm1PbkJoY25ObFZIbHdaVDBuVW1WemIzVnlZMlVuUGdvZ0lDQWdJRHhCZEhSeWFXSTZRM0psWVhSbFpENHlNREl5TFRBNUxUQXlQQzlCZEhSeWFXSTZRM0psWVhSbFpENEtJQ0FnSUNBOFFYUjBjbWxpT2tWNGRFbGtQbVl3WWpabU1tVmtMV1JqTmpZdE5EaGpZaTA0WkRNNExUQXpNV013TXpnek5HTTROend2UVhSMGNtbGlPa1Y0ZEVsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Um1KSlpENDFNalV5TmpVNU1UUXhOemsxT0RBOEwwRjBkSEpwWWpwR1lrbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBqSThMMEYwZEhKcFlqcFViM1ZqYUZSNWNHVStDaUFnSUNBOEwzSmtaanBzYVQ0S0lDQWdQQzl5WkdZNlUyVnhQZ29nSUR3dlFYUjBjbWxpT2tGa2N6NEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29LSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNjbkNpQWdlRzFzYm5NNmNHUm1QU2RvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNCa1ppOHhMak12Sno0S0lDQThjR1JtT2tGMWRHaHZjajVVWW5JZ1YyVmlQQzl3WkdZNlFYVjBhRzl5UGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenA0YlhBOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOG5QZ29nSUR4NGJYQTZRM0psWVhSdmNsUnZiMncrUTJGdWRtRThMM2h0Y0RwRGNtVmhkRzl5Vkc5dmJENEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ284TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNkeUp6OCtRQWhjUUFBQUZFWkpSRUZVZUp6Rm5IdWNYVldWNTcrL3ZjKzVqM3FFR0V4bzVSVS9QUEtBUmlDZ2RJczBnaUU4RW1nWUVUNk9qOVpXUGozem1WR21sV2xCYlpMWWd1Q2dZL3VaN2hudEhoL1kvYkdoSVRZRURBUVFlUWpxaE5lUUVCNEJ3a3NwaUhsVjNYdnJucnYzbWovT3ViZXFTQ1dwU3QxazFxZnFVNDl6ejE1N3I3UDJXbXV2MzFwSGRJRktaMzROVjIyaU5DUFd5emp3RWhZRDBUbEFqdVl3bGJRVWp3TG1BL09BWTRFNVFCOVFRZlFDWUF3QkRXQVFlQnA0REZnSFBKVTEzZHBTMlJvWVJBUG5jR2FtQ01FbHcxaE1pYzBTelo5OWFjcHIwbFJ1THArOWxGU2lOQ1JxUFJFbDh2WFFDbFdYSUVFTUhDckhxY0FmQWFlQTVvQTVBT2t0ckczOEdabTFMeEJCNjhIdUF6MXN4cytkNHlVem94NmdtdUN0NVVQaXBoSGNkbUxXWXZoblYrN3gydlpNTU9kZlJXK1dFVnZRU2h5cG9xdS91ajFXRHVxbjNtcjZxaTh0QnAwUHRoaTAvNGdNREZBQW9wbTVnci9HektRakJ3d3dTUkZ3Z0FjcnZnVFlKbUFsYUVVOUN5dXJKUmZxdDF4RWRjbS91TG9zK21DVW5LZ25KVmh4eGFTWDZDWjdRMm5KVittTkRaQkJnc291T0l4b3pab3dQbHoxcFllQW53S2ZrTFMvWk1ITU1qT0xaakl6YzJhV1NQS0FPa1R4M2Y0enYrYk5MQ251TVRORkU1bGtRZEwrb0UrQS9iU2Erb2N3ZmZqanJUTUJZcjg1bHpvbmg5RWJHcFNXZkhYU2dwbTR4bHg0QTVYR09scUNWcXVmSGovb3pSU2NpOFNvTXhGWEE4ZEtBaU1nTXpNY2ttU0dTY2dBN2FHV0dtWUNXVDZJWVNZUlFRTHpoc0JzamNFVmllbk9sZ3dIdnBaVVFoTHFKQWFOeW55NDhjUGRFMHpwdktXNFdPZzJLQlV1bWtKRUJ6cTRGdXdqaGMwSVpnYkNZVUl5elBKSHYwZkMyQW1abVVraU56OEdLQ3FYdWkvNFgyOVJsMHYycXNOOEJsSENoSWpCYU42MmRMYzhkanZoNnVLdmdvdUZFWlJycUI1N3JJckJCY0QzSkdhQW9wbVp3Rm11SVdZU21xSngzeDBaV0ZzTHpUQ3dXRHdFWjJhL0J6NGp1TGxHa3dvbEo0aENCQm5EdCt6YU1PL1N4bFFXTDg5dHBRSElHOFF2Yno0RmcyK0NicEtZWWFhc2VJRGVFREtzVUpHOUtoUWdGN3p5ZllVTTVSb2p3ekpKTTRDYkRMNzUzOHNIWUNnYWVEUHdBY3JuTHQvZDJPTlR6emxMd2F2dENIdzBnbUc5M21rRnhrS3BveVVlbE8vL2ZTQ01YVkY3aTJFbWcxQW9yd05XaDhENXpqR2tQTVlLQUVTanRwTnROZTVDMHNYTDhTNTNpaGdlSTBUakFPZTBTbkFzSWlzOGkwYXI4MTVaN1dUSmNySEljZ3NucVlXUkd2WklNTTcyOExvSkx3Z21DRkZrSy85NmgyRjJYTXlwUzZuMmR5NTVneURqRHhBUENBN0xoVUthR3oremJoaFc1NFFyaG9sbXhHaTd1V1AzMUo2Ym1TRXB3eXcxMkFDY2JQQzdYTk1KTXFnTkd0eTdkT3ljM2pwZ3BUK2ZvSUdMRmtPSTFvdTRYZUl3VUZzb05sV2htQmxPSWtaamNLakJ0czJEYk5zOHlPQlFneGp6YTZPaTNrblRpQStRbVZtS2xPVnI0UFlRcmRlaUJjQ1pvRHB0eDJXTStVLzUzT1c1ZThXVXhaYkZUYjlWZGViQnEwR25LOTgraFZCQVU5ZzZab2IzanNIYU1OTjZLL3pKTWJNNSt0QlpBRHk1Y1lCZlBQRWkyNFlhOVBXVUNTSHVlSHlZSEsvQ3RadWsvTUdDM1gzSWNlVVBQcittZ1pjVHhacUdWMzZsYzErSFkvV3NLL0dDdW5OVUhNNXlyZjRPNGo4SmpSS0tUU2t1NlFobHNNSENFNC9nMjM5eE52TU9tVG5tTTArOTlBYWYrNSszcy9vM3o5TFhWK20rY0xBVTR6dkFaeVZ6clpqRzFCckVwRXo5Mzc0TTVQc01nR1QrNmZrL2xMdGwwRWRCWDVjVXpNeVAycTlUc2luZU9RYnJ3eXc4NFFqdStOckhtVG05bDdVYkIvakhPOWJ3d05xTnpPaXZNdi9RV1h6MHRIZnp5L1d2c1A2bE42aVVVcVppZFViUDNjeWNVSlE0Q1hoVzBoTk93UnQ1Tk5wNjV0NzhIb0RxR2N1SXFVY3VPb09JY1ppVFBTR3B4OHlpSkpkSDVGTTN0REVhcGRUejhMY3ZZZDdCTS9uYm56N0U1ZCsvaTlyMk9nQTkvVlgrMjJjVzhSOFd2NGVuWG5xRGt5NzlMczBzNE56VW5kNklRU1pLNXN6WUhrM0hnajB2Y0dwa0VaZFN2L1BLM1BoYUx5Z0VuTTlERnllN0dxa0hzd3pKNWZGS2Q3eFBZN2pKcWNmTVp0N0JNMW03Y1lETHYzOFh6U3l3My9SZTlwdmVTek5yOFlYdjNjSGFqUVBNTzJRbXB4NHptOFp3c3l1Q2FZY1h5QnltREtuZnliN3VuY041aHlVZTZ5bm1XbDV5RlMzdlVBbHZ3V0tNZGpad29mSmNVS0oyME5RRmNoSmtnZm1INUliMjFvZlhVOXRlcDdlU2tvVklzeFhvclpTb2JhOXp5OFByQVpoLzZDeklRc2VkVDVXRUlaTVpsZ2dpY0tGWlhHZ1dvMHJPa3pyS1M2N0NlVFZKNmtiOVpSL3FEelNRV0o0ZlZNa1BzKzN4dWtWbVZFcEorOWRkZkM3L2tUckhsQXpNRHFUT3FhWHdKSUN1cnQ4NVJPc1ZDNm9abmd5SHJ5Tm52bnBRb0hweTlXTEVBcUVXbUVQcVNnQUh1VGVLWmxBdThlaUczd0p3M2gvTnBhZS95dEJ3UnVvZHBjUXoxTWpvNmE5eTNoL1BCZUR4RjM0SGxaUm9OcVc0WmpSSjdTQkpUaERBRmxRLzJQZWg1RUNCTTQ5bHVCRDZXQnZmREVleEJiQkxSY2V0cVZzVEtUeENybll4Y04vL2ZaRU5yLzJlK1lmTzR1cFBMcVNVZUxadUdXTHJsaUZLcWVlNlM4NWsvaUd6ZU82MVRkejM1RVlJa1NKejFUWGhXUDY4VmNSa0lENC9wMjhqdFN1dURFRVZWRjJ5M0FQQjRCeGhLd3YzN0VCVEN1STZFMmdMUlRCVWE3Snd3ZUVzLzhScG5EVDM0TTVuMW00YzZOaVVjMCtheTFGRnNBZnc0TnFYV1Biam43TjZ6YlAwOVZRNm10TkZSYWJZVk01TWl5VnVBL00rbmZNQkFTWnNLZWdQSll1RmluWHRZT2lkWTZqVzVKSnpUdVNHTDEzRVFXL2ZqNWNHdG5MamZXdVJFOGU4Nnc5NC85R0g4djZqRDJYVzlGNGVmZTYzM1Bhclo1ZzV2WmVqWngvQXh6NTRMQnNIdHZMcjlTOVRMcWRkRTB3NzBWVmtBcDF5L2JrWmt4S3pHQkVIQ0oyVm45aHhSVGFzSzlyaVhSNzZMMXh3T1AvcmMrY0M4UFYvdVkvcmJ2b2xiMjRlWkw5cFZVNDk1bDBjUGZzQUFKNTg4WFh1ZmVJRnRtNnJNWE5HUDVkOTZHUXV1L0JrdnYvNTgzbmx6VzNjOWNoejlGWExoRGkxYUJqYXg1bzhEMTJzL2N4Z2NhYlFHNzQwNXdPQUxnSXVraFFFTGhmTDFBVWppVmdjQVg1MDJiL2pvTGRQNHhzM1BzQVgvKzQyZ2hNOWxSTE5MTEwyK2Q5eC81b04zUC9ZOHp6OTZpWWtSN1ZTb3RiSVdQWGdPbnA3Szd6dnFFT1ljOURidWY2ZXh6dGpkNE9LVktoa2lrQ3ZrNTZTNHpGWEJFNm50ZE1JUmlkTFAyVnlFdlZtaXhPT1BKRDN6ajJJalFOYnVPYUcreW4zVjBtOUowVERPZEhYVjJIYWpENm16ZWlqcjYrQ2N5SkVJMDA4NWY0cTE5eHdQeHNIdHZEZXVRZHh3cEVIVW0rMnVoZlhGTm5HSW5jRGNMcVhjRmtyS3dFbnRkZFNwT0c3eFJTYUxSWWMvazRBN25wa0E1dTJEbEZLZk82NkM0clJhSVZJSzhReHVaaG9SaW54Yk5vNnhGMlBiQURJeDJxMnVxWXgwRTc0ZFZJd0p6WHJWbkpTTWg5NFYyY3QxajJHRWhBamIrdXZBdkRLbTl1Z0dTYTFxRnk0SWI4WDhyRmk3SUlGSE0walQyb1hmNzdMbFppZkNJNG5sMVlBM0Y1SlVSYmFZV2JnUmVvbmp2T2wzb0ZUUjhPNkZjZU1wY0wwNWpMd2d1TVNwTU9LbUR1Q0pvMU1Ub1I4SVlnMDhiQ3R4aWFBRUNkMnMzT3d2VTYxT0VaTVJxaVRJUUVHVWVCTkhKWUE4d3A1S2Q5SDNkeTdCb2xuL2N0dkF2Q3BSY2ZuSit6Q2VPN3UyWXZjemxSTENYOTJ4dkVBUFBuaUFLUkoxelVuejJRVis4VTBQd0diWGNqTG1jbTZFZTIyS1VTanA3ZkN2OTYvbHJOT1BJS1Budlp1THIvb2xEMGU3OGQzUDg3TkQ2NmpwNmRNNkVMQ2ZEVGx3Uyt1a01Yc0JIaGI1MktYN2N2bzQ4Q25ybHZCeW9lZjV1alpzMmlGdUVQODZJdDh5dzRMTmlQeGppZGZIT0RtQjlkMThqSmRQQmJrTlBZZzlqWlZseXpmTE5uMGJtdExtMFl2b0ZZYmhxdzEzcVNnTnB6LzNsTWVQeCtSSnZUMGxIY1lzN3R6eFNTVG1UWWxSZjZPQWh6dk9yUDJnNUJFZjE5bGh3VUphTFlDRjV5MUFJQ2JIMWhIS2ZFNzJCK3pIUFhiVzBJcHVCUXpzcjZFM0VXbDNScDZQUENzdlpCOG00eGRjZ2lSbmtxSmY3ajBUd0c0L2RmUFVHdGtIVS8yVm1xUHRUZEF1dEdVZ0dwZ2xhbG9TL3V3MkFxUlduMFlzaHdhSnZWVXlpVVM3M1o2NkRPTVVwSmZCL0prRmMydTg1a1lkWGJPWUFLMkRUUURPaW1iU2RGYndiT0ZDK1pORWp4VEFmSzF4MnRQc050OEpyYWFJdGpibmdDYmdka2Q3cE1Zc1Z2Z21adzZ6MFRqb0FIN0FxVEw2MnM2dERrQnZRaDJIQ2lhU0NZajUwNnU1Y1FjUEpNMGJqYnVqcTk5bkVWZitoR3IxK1M1bEhZV3pybmNEZGFIczQ0bnFnOW5SUnFUam4yYUNwK0pVdUdOUWw1VnFoZDlPdWZVUHhTY2doUms1aVlqNWhDTm5rcUptNzV5TVRQMzYrVnZmL29RRjE5OUk2dCt1WjY3MXp6SDkrOTVuT205RmQ0ejl5Qk9PT0pBcnIvbmNiSldiSmNoNW1tSjJqQ2Z1K0NQT2ZzOVI1SW1uaTJERGU1NzdIbktwWFRDZkg1d3orUE02Szl5NHB3ZCtVeVVpbkFsbXVGQkt4ekdoc0pKdWNuWTlZbUFaMWtXK0t2L2ZlZFk4S3pSeEJjZVpYQ3d6bVVYbjhJMWYzNUdaOXhyL3Z3TUxydjRGQVlINnpnSjcwU2pzUzlBT29OMjZzRnNnek40bEJ4NDhzVS9KeVNmWFlKbnJUWjRsakswYlJSNGRzZ3NhSVV4UXJuMjA0c0F1UFR2YitmU3Y3OGRnR3MvdldpTWNHanRYWkRPUmlKS1R3NDBQcExFSnV0OG1SZUF3NERKRmIzc0REeHJlNzBSemdDa1NYNFVxVGRiL0pjTFQrNEk1Yi8rdzUxOCs2WUhBU2lsQ2RkKytneXUvZlFpc2hENXUxdC9EYkJYUVRxWjJzSVI4RUswMWpwWHFxb0pQTnd1QzgycmFYZE5ld3FlUGZIQzY1QjRwdldVdWVxVEN3SDR3dmRXOFkyZi9JSysvaXA5L1ZXKzhaTmY4SVh2cmdKZzJjZE9vNjlTZ3RUdlZaQXVCMTFwNTBFZVNwTzA2ZjJScHdMc0I1elh6anZZTGpDbHRrZDNFczNoSmdOYmEzem81S09ZYy9EYjZhK1d1ZmVKRnhqY1ZtTzRrVkdwbHJqdWtqTTU2OFFqZWU2MVRYenBoM2ZUYUdSRXdmcVgzbURGTDUvaXV5dC9RMjlQR2JOY0cwcWxoRjg4OFNMUHZ2WjcvdTJoOVR5NWNZQldGaGpZT2pSaFBsLys0ZDAwNmszS3BTU3ZUZDVGRkpLbnVYT2t5R1FPK0piQlk2b3NXUXB3Z05BNlNUTTZsWS9qUkZuZEE4K2VLd2FNOVBWV3h6elp0dEFIaCtwNTNreXc4UGk5Q2RLWnRZdTB6V3l6bWMwRHZhN3FrdVV1VnlQN0o5QkhKR3VaeVk4SHVJM0dpUzQ1NThRT1R2VFN3RmJ1WFBNY0M0NThKOGNkOW80eGJCOTk3cmVzZWZZMUZwMXdPQWZQM0ErQVA3dHVCVDljL1NqVGV5c01GNmZ0OXFUYkFpcWxDZHVHR256bXJCUDJtTThucjF2QkQrNVlRMS92K0FHZmpXQW53VXdKMkQrRC9qM2dFdkw5aGNGUGhIMmtDSWs3eWF6eGhESlY4T3dIbnorZlY5OENubzBtN3h4YnQ5ZjNPa2pYcnAzT1ZkTXcrR2UxcTczOW5OUHRvbm5yMkY1TG45bVdWYytVN0JEeTJueG5qT1E2OXhWNHRxLzRXRjVOcm1LdEhuajRjR3AvdFZ5UjI1U2FTeGpraHFmbStaZHIwd0crWFlEY2VTUTR5cUx2Sy9Cc1gvRXBhcXVzZ3cvQWRSdm80VDlieVNmSkZwelJneG1odmpXai92VG1ud0JyREhtd1NMdTRwaTN0ZlFDZTdRcytabGFJaEdoNVVMZW0vcHZ0LzlyYVpCQmRzRlkvTHBEU1NoT3EwMU5mblRzZDRISkdLaHlMTXBMaTV6NEF6L1lCSDh2anp5S1dOUVBqOHVxSi9TVDdPMjlKU3JBeWJ2aldLMGhDd0ZvaFNNNUpialZ3bzRFVHRLem82K2pRT09CWk1zSHZTWUZuZTRsUG9Td1N0SEpVZ0J0eGJqWE9PMElXc0JiRHQxNUJBcUJtaEJDSkx2Y09CcGM3N0p5aWNqTXFiL0EwUVBzS1BOdExmTnI5QlJFcHhXd3dScjZZdDEyQzg3bW1BYmxnNnF1V1VsMjhGT2M2aDhrTlp2d0YySStLSFpWWHRDYmUxci84cG1EdmdXZDdFYVF6SzVveVI2cm9kSWx6UEE5NGt3WERVMTkxWldjY0FLcm4vUTFPUnBaRkVpOW5aaEg0SDZEL0tKR1JKOHl0RlNMLytKZC9xbytlOXU3ZFRISFg5T083SCtkVDMxeVJhOFE0VlBDaFMzeXM0Q1BJZXlLQTd6anhXVU91bWNXWWxqME10NmovYkJudEQzYW9mTTZ5UExWb3B0Q1NaYXUyVWwweTdTN0U2UmlacERURWFERWFGN3h2dm5ZR251MlV4Z0hQdkhOand2WDI3eUhtM3VhQzk4M2ZLVWczUVQ1VzhKR1paUktwR1hkZWMrckJpejY3ZWlQbHhLbDl2bTZzdkxJenhBNmNxdWN1YXgvWm5VV0xRZGFieU4wdjZiaDhZS1dBRmVEWm5xWGpkd09lVFFpa214Z2ZLL2lNRnNvYW9yMC9RdDA1NVMwQ1FPUFdLOGZjbXJ4MXJQbzJvOW9uRUZGTzNxTWg0R3d6dTE5d2VGczRCWGkyUnlqZDdzQ3ozWUYwRTJkakt2aGtrbEl6ZXphYW5TV251b3BHTG9ERzloMHQxN2djTzYxL0JnWmVSZ2pZQVY2NlhlajRUdXRmTzRWczZscUY1NVNwM1o5ZDRQUWFhZjFiRTR5em5SZ1ErS0tabHN6R2IvMGIxMTltSy84YUYvSmpwTXRmT2VBZGVqMEVUakZzdGJWN2w3Q2c0clJwdHF1Z1pOK1FGVVpBdWZjSmhVZE5UYmE2aFozaUdCRks0YjdHRlFyc29yMjRkdHRTb3RyWlVBV0VsOWZRMWVXM25RRjhLeThCbGJkY2UraTBuOXRra29wZG9weHgzaU9hWndZeUNXK0dBNzcxMlMwTHpuQlFROFgyeVIvcFRqdG9ZUUwyb1h6dU1ueWVFOFhBTldqR0hrcWpHdEkxZy93bEZ2K2ZHdEx6TEpPTmFVZzNaOFpJUTdycVZLenFoQlVONldMNGx2RTFwVTNqQnhHaktEeDlMenJpVDVBVEpqT1Bsd2R2YUoyWi9nblpUSXhqSlRta1RrdC9rYXRvRzlHdUNxaWRaZFFJZkJpVk40VDQvUGx3dmFFUENYN3RaRjZXUUxITmdvUG1icnIwWVRKUGRQUkxMM3lWbmxiRFJ5TWtFZ0g3b09BYUU4Y1hOamdVMjhxMXRjYUtoZXd4NHQ3V3d2YjVCeXpQcFNEQUZ5WnVEZkRGQk83S0lIL3BSZWdMU2JKOTc3ejBZalNWbG55VlZCbVlpRGg1cElERit2OTVodW9KY3o0TS9DWFllOXNieVNCZ1JEQS93bStVUDl0cDByMVR4R09qNmxieXlrckpxWGlmVENHblg0RysrZkZiZm5YREQ4OTlEd200QU9ZVURSbFpUR25lK3BYeDJIUlBNQUNjZnhYVlZwT01TTXQ1cWhIZmZLTVdTck42ZUVkWnZOYXd4WUlMZ1VXQ0F4aWJXdzlnc1RDTTZseG9YMjZiN3NLc1NaMXEwcEZ0bjIraEFXQ1Z3WTBIN3BldWZHMWJSdjMrS3RXVDY3N3VDRW5MU0FYMWRNOWVyRE9sdlY5ZHZBd1RXTXZoWEFTUHYvS2RtOEt5Vi9kSGlCampERWxuSUQ0QWVoL1lIUEthbkIyait4R0JqUHpkeWE0WlFJdjhuVlVQWXZ6Y3pPNTBYcjgzZyt0UG44N0g3dG5pTFhNaE5GTmNKZURVb3I1eTk3WmtaOVFWbzFnNjYydWs1UVk5NzNpTjdhOGNpakF2WkRIRzZGd080QSszektlZXVjQUMwRnl3WGIrOFMyekhXQTg4QWF3SDFtUWhyQytuU2JDWVYxQTVMNWZuaXdqVDV2Nk9vUTJ6eUdvbG1xdW0vdkt1L3dmUnJ3NXhadnZ2MkFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy8zLTVlMjk3NTVlNzAxMGE3YjBjMDg4MmRmMTZmZmZiMzk0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy80LWI1Y2U5OTBlOTlhMTAyYmRhYmNjYTM0NDZiZmYwYWY1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRGwybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNmdnU3OG5JR2xrUFNkWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FuUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTZGhaRzlpWlRwdWN6cHRaWFJoTHljK0NqeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5YytDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwQmRIUnlhV0k5SjJoMGRIQTZMeTl1Y3k1aGRIUnlhV0oxZEdsdmJpNWpiMjB2WVdSekx6RXVNQzhuUGdvZ0lEeEJkSFJ5YVdJNlFXUnpQZ29nSUNBOGNtUm1PbE5sY1Q0S0lDQWdJRHh5WkdZNmJHa2djbVJtT25CaGNuTmxWSGx3WlQwblVtVnpiM1Z5WTJVblBnb2dJQ0FnSUR4QmRIUnlhV0k2UTNKbFlYUmxaRDR5TURJeUxUQTVMVEF5UEM5QmRIUnlhV0k2UTNKbFlYUmxaRDRLSUNBZ0lDQThRWFIwY21saU9rVjRkRWxrUGpJNU9HTTBNRE01TFRNeE9UTXRORFF5TkMxaU1ESTNMVFEwTVRFd1ltUmxORFkzWVR3dlFYUjBjbWxpT2tWNGRFbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlJtSkpaRDQxTWpVeU5qVTVNVFF4TnprMU9EQThMMEYwZEhKcFlqcEdZa2xrUGdvZ0lDQWdJRHhCZEhSeWFXSTZWRzkxWTJoVWVYQmxQakk4TDBGMGRISnBZanBVYjNWamFGUjVjR1UrQ2lBZ0lDQThMM0prWmpwc2FUNEtJQ0FnUEM5eVpHWTZVMlZ4UGdvZ0lEd3ZRWFIwY21saU9rRmtjejRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZjR1JtUFNkb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQmtaaTh4TGpNdkp6NEtJQ0E4Y0dSbU9rRjFkR2h2Y2o1VVluSWdWMlZpUEM5d1pHWTZRWFYwYUc5eVBnb2dQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwNGJYQTlKMmgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhuUGdvZ0lEeDRiWEE2UTNKbFlYUnZjbFJ2YjJ3K1EyRnVkbUU4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTZHlKejgrZjJOUEl3QUFHcmxKUkVGVWVKek5uSG1jVmNXMTc3K3JhdTh6OWdBTnltUUVSWU5ESExrcWpsRmp4QUUxY29OR3dOd2s3K1VaODVKN1kySk0xTnc0SmlZbVVaUDRFc2hnRXFlb09LQW9xT0E4b2dLT0NBNGdDdExNVFhlZjd0UG43S3IxL3RqN25PNkdobWJNZSt2ejZRL2Q3S0dxZnJWcTFWcS90V29MTzBBeUV5Y2hhdkFxQ0E0cldCR2prVmR2RFFoQzBmdE1XdGdmMkEvWVYrQmdoUkZBRFpCQnlBT2dGSUFpMENxd1VPRjFZTDdDdXgyT2R6SWhSVlR3cWdSR2pQY3FUc1dwY3hncnFERVViNzlndThjazIvTndadUtmQ01RUmlLZkRCUmpVRmtxNGZBcEVESkhYb1ZZNEh2UkloT05RR1FFYVE3Vmh5OXB6ajFRckYvQWdDd1I5VnVGbGh6d1ZHRDVXcnhUS2xuem9ySUlMcFV5a0ZpK1c5dTBBYU51QStlck4xSlFEdkJQSzRrZ0Z4aFM4ODNsaktVUmk4NEdPQWM0R0dRUDA2d1JCQVhHQVYxV1R0Qy9kZWxMRkFRVlVSRHhnQUpzOEg5K2lyQUY5R0hpZ1VMWVA1MFBuQ3E5TkovOXZwNWxpNUgzYUN5WTB0QVpsdVBVN1d6M0VyUVltUDM0eVlpUHdncXFSd0lwRVhuMUJBc2xyTkE2NEdPRXdOTkVLVmFmZ0VTd3FVaG01aUlpQ3lpYjZVTG1tWFZRR1JFR2RnRUhFYW9JUXlLdWd2ejVqNUFYM1RKc3ptY0NJaVp3cW9pcWlxTGNVN3R3NjdkbHlZTWJkUXk2MUJxOUtzYzJRejJQVjQ0TEFFSGs5UmREcmdJTWxWZzhIcXFvWVJFUlFWS3ZMWjF1WHI2ckdENnNvS0NxQ0J4SFFCQ1RtS0Z3V0dIazhpaFF4MkVKa1hDYUlNQmphU2cwdzVad3RhbXlMT2xrellSSXFrRFF1MW1DY1Y2ZktFQ055UFRDK0FrZ3l3UVpBUkZEVkdKc2RLS3FxbFhjbncvQkpDemI1djl2VWN5bUdaVmF3VHRXRHFBQmlsTmJiTHV5MWpWNDduSjB3cVdvSUZFelpsMzNHcG5CZXg0cndaeEVhUUh5aThrWVFJZW16eVBZWjk5NUVZNjJCemlYbjQwbFFvOHBhaFc5YTVQNTIzMDdhWkF5eEFjQ0xvYTBYdzJ3MmR6RTNZUksyYzNSV1VaL3hXYnpxRFNMY0p5SU5xbEtPSjFBc2dNYTJVWFkyS0ZBRlBsNVljYU5XVlVWVnlpTFNJSENmaHh2cWNpTUI5ZkVZNG9keTR5ZHQvdDJidXBBNy80OVlINDlTd2FyaUl2WDUwSmdIUk9TTHhEdUxTbXhVVmRueFMyWnJwYkxFaUR2a1JFU1MzVzhteHArdFhnb2lZZ1djS0RpanRHMWlXZlU0a1B4WEpwUE1Qd29XY0Y0WllJUkhSVGdZcEt5cVFRTEVKanlRZjUwa2RpeitQZW0wU0x5OEJJa1FRbFdkNjVUVGpMQkN3QW80RU5SQjRhNk5sOVhHZ3puK1NuSkRCbGFYRDRwVDBZR0NQQy9JY0lTeXFvYkdDRmFrc2xIOFB4TWhualhmQlJ5b2FvK29Lb0tVZ1ZEUkQxWDFHRUVhRVN5SVU0RzJwY3ZoNlN1N3ZUZllzS0g4Ym9NcTF0Nm9xaE5NWG9UcEFzTWhCc1VhbysybGlISjdLZDZEQmFxdXJOY05YN256SkxId21WeUtWR0J3dmhPYzJFK3E3bDZoaUpRRmhpTXlIUy9IZXRXQ0VUVWdQci9iSUFvYnZMcmJiR2ZHL3dGRU1DQlJwRnBhMENqNXp3MmVLU0pmVUtVTUdsb2oydHhlNXNDaC9XVGlzU05vcUVtalFGdEhoRFZDUHIwUjFqc2VqNlRqWG1IeHltYis4ZlFDUGwxWElKY084TDVIelVGVkJhUXNRcWpLRXlNTzBwUGVtbWNJallwSEZQVVU3L3pXeHNCa0oveUpyQTFvTGhYSUJSbmoxWHRGZnc5OFI0UXlFQm9SYlMxR25QaTVJVEw5OGpNSXJlR05qMWJUdnk3RGtJWWFBT1l1V3JYQm0zZTh4S0FvZ1RFY05Ldy9xMXZhT2ZtYWgzaHJ5UnB5NmFDYjVtd0lqZ2hsVlFsQmZ5L0lmeG9SVXloSHZpNFRVaXlXYUwvN2YzZnZmczJFeVJneGVQVVdjSXBPQkxsTkJLZXFSa1RFSjcrOGMrTjVxTUtKVjAzbDQxVXRJSERwMlNPNSt0d2orTUpWRC9Ma3ZJOUlaMU00M1huTFNoQWk1L25zNEQ0OGYrMVlGaXhyNHZnckhpQ2I2bGxqdTlnY0ZSR3ZxRVZsZ2doM0F0WUl6bmtvM0JFYllnT1FQZjhQZUF0T25WSFVlZFhod0dRUkVwUmpyNmtjZVJsWW4yUDMvclZjOThBY0ZpMVpRMjAyaFJYREw2Zk9wYVc5ek5tSDd3RUsyWFJBSnV6OHlZWUIyVlQzLzl1ZW4zUm9xYytuV1BqaFNxNjk5eldPMldjUVF4cnlsQ0xYbzdMR29GQUJKM0dCZEpMM3VxZjM2aUt2eHVISm52K0hUbUNNVDZFZWpJQVJSVVN1RXlHbnFtVkJqTWJCZ01RTlFMRWNzWEo5TzVJSlk1VzJRaVlNYUNtVzJLVXVDNkhGKzg1T0dSRWk3eW1XSEpWM2JDaG1HNWFlS3BBT2lCS0QzNzgyaS9PYjNpZXJXN2hnVkxVc0lyVWkvTUlHZ3JVR25FZDhHUGNuZTk1a05MSll4WG9WNzlXY0Jvd2o1ajhDUlRXT01yb1BOTkdtYWdjVnhXekN2eXQwbEtuTHBoZytvSTZ5ODVRam56eFhpYlNocmVTSW5JOEgxdVZhcitJN2dWYTBkOU1tb0NwS3ZDTjdZSnh6K2tYbjFGc2IyTWdIWk0rYmpMR0JvRUdKMXJKekJVa0JlblZDRHFpZ2xYaTQ5L21zVWdDZC94Z1IyanJLakJrNWpBOXVQcDkzZnp1Qit5OCtsYnBjcXJwN1dDTzB0SGJ3MWVORzhNSzFZMm1vU1JNNTM4MTRibG5iV3liSmxOTEYzaUJ3WFZ0b0thaDN4cFN3Rm94b0dTTnE4NkVocDZXdklESVNORUxGcUlodTFzMnZCQ3RTbVRXcHRJNElSTjZUejRUODZZTGptYjkwTGQvOTY3T2NkdWhRdm43Q3ZyUVZPc2lFbHZYTjdZdzdabS8rK3UwVFdkbGNaRjJoQTdzdDY2clM4SmJjMVJtYUc4QUJJL1BsNk12NU9MNng0a3NZNXkzbi9QNGMxL2N6OVFqNnZaaGJRaEFWMmN4TU9LOFErWGhwT0UvWmFSZkNKTDVIa3kyMW9TYkRvaFhOUFBuMlVnRHFzaWt3d3ByV0lsODRaQ2ozZlA4VVhuNnZrWEcvbVlGekhtTmt5NWZTTmtwaWZxVkxPUEdEZmdjTzQ1ZTNYK0NjQmhnUjdEM2Z1WWQxbjZ3L0hUaUNHRUVqOFlMZGVBb0VuRlBTb1NXVERhbkpkUDZZQ2tHWGNEZWh0YXh2NitDaXZ6L1BWNDdlbTNkdUhNOGJINjNtNzArOUMxNDVmdjhoelBycFdiejZ3UXBPL2ZrMG5GZlM0Y1pPMnM0UW9UcjFodGpXakZyejVrZW4vMmppWk1TSURRUlJqZFZrZkRMZEN0SWo1MWdKR2JQcGdMc3ZHdDFqZzhXeXExcERyMG8yRlRCcDV0dTh1TENSei9TdjRaVVBWckI4WlRNSDd6MlFSeTgvZzhVcm16bnIrdWswdFhhUUNpM1dhRmVDYTZjQkE1QndBc1NVaEJqZ1BPQVJRQU1mOTMrQUVUazFvU0JOREdUM1hpa1FXTU9xNW5ZdSt2dno3TmFRSi9LYTdFN3g5WXZQT0pqQW1pclZCekV4azAwRnZMbGtOVzhzV1kxem5nUDNHc0FMMTQ2bHNhbU40Mzc2QU10WHQ3TC8wUDVrVXBhM1AxbUxFYkRHN0h4d0tzYW1zcUdxbnFMS0xzQ3FRT0tGZGpwS1h4QW5vcVlMUDlzSlRQSjAyWGx1ZW5BZU9OK3BVbDdCR2lZZSsxbENhemJhSmJ4WGFyTXBDaDFsaGpUVThkaFB6a1FWVHI3bUlaWTJydWZLQ2FPNFl0emhBTnoyN0VLK09la3BiQUxxenBZNGhGS0pXUVQ2QVdNUS9oWVlBYStjV01GT05rRTNkVlh2K3JwTUZUaEJjRjZ4UmdpczZUVEExWWJqYTgzdEpRYjF6ZlBNVlYraVBwdmlxSi9jeDhLUDEzREE4RjI1WXR6aC9QR3h0M2x2ZVJNM2Z1MFlwcjIybUNrdmZrQmRMbzNmeVVZNGR2cXFXUWtVdmlBaWZ3dTg4eWxFUmlYM21XNThmZy9nQUZVbkxCazYzc2RQOWVSUVZMU3NmMjJHUnk0ZHc3QmQ2eGgxMmIyOHZuZ1ZtV3lxNnZHdWFtNW41ZnAyQU5LQmpiZkdubCs1d3lWeGFVeGlZMGRwVVZJQm1QMkFQYWhTdFR0V2pCSGFXMHY4L0x4UkhEaTBIeWRkTlpYWjd6WFNweWFOYzhyOHBldTRlY2FiL0hUY1lRQTg5dnJIUFBqYVl2TFoxQVlUc1BORXFkaFVCV1FQUXQwdlFQUlF3TVFaUWpVOVJ6TGJMczRyNlV5S1c1NTZsOXVmZTQ4NWkxWlJsMHRUam1Mdk5nd01QN2oxQmFhODlBRzEyUlRQdnZzcDVjaFhsK1cvd3M0SU1hbVZZR0FSRGdtQTRZbFQ1cEhOWncyMlZWS2hZZUduVGFoQ2ZTN1ZqUyt4SXRqQTh2eUNScndxTlptUU1EQUpPYmZwYlZzNzQ5b2RKZ3Bld0NvTUQ0QjlCWWtUZTVWb2ZFYzFRendBN3lHMEJoR3BCcERkUkNDWE1IOWVOWGEzcUlRYW5WNXdCU0FqZ2pGSlJHeWxHa0pzVDljcmRFVGlmK3dYQU1PU2EwWmwwNFozcXlUTzh1QzhSNGp0VEVWTUwzR1FxWERJUU9RODFuUUNZazBNYktGVVJpdU9aSE03VFcwbElBYlZHa0VRdkc1ZElLcWRzUlBBc0FEb1c3bTRRMENKWDBUWmVRYjF6VEhqOGpQWXBUWkRlU3NpWnVlVlB2a1VmNW81bjR2Ky9oeDEyUlJsNTFuZjBrRnRQczFKQjM2R2tYdnV3dUNHUEszRk1nY043Vjk5dHFQUVFhcmVZb3hzVldoUmliYVRQL3NHUUovTzRldzRzVVlvRk12ODgvbjM2Sk5MeDE3eUZqN3JWY21sQTE1WXNKeFVZR25yaUFnRHd5VmpSL0xETXcraGYxMFdnSmIyRXFFMVpCSTY4OUhMeitCbjk4L2hMN1Bld2FtU0NZTllhN2Q4dmlzMzFnYVFWREx0U05GNFNiUVV5MXg1NTJ6d2ZpdGdUMklNcjVoc2lDRHNOYWllS1Q4NGhRTjI3OGVNZVV2NDIxTUxlT205UmdyRk1ncjB5YVU0Y3NSQS91UHorL0M3Ynh6THhPTSt5emszUE1iU05hM2swK0hXZ2dOUUV4QkgwK0ZXRHIzMzRWVVlQaXZZVk1pV09MQWk0Sndua3dxb3lZUTB0NWZZZTFBZlhyaDJMQ0NjZFBXRFBQSEdKd0JrMGdIRmpnaXhRa2ZaOGM5bjMrT2Z6eTdrak1QMjVMNkxUK1c1YThaeTdIL2Z6L0oxQmRLaDNlcUlQUURhZ013MmpYNlRJNHp0UkYwMnhhL09QNW9CZmJKRWtlL1ZSUklnOHNyTk05N2tsUTlXMENlZlp1b2xwNkVLaDE1eUY0dVhyNmUrTm9NMXdycldEbjQwZGlTZnJHN2x6bWNXMEs5UGpzaDVwczFleENHWDNNM2M2OC9obnUrUDV2Z3JIcWlDc2hWK1VXc0FOQU1OZE9heGRvaDRyK1RTSWNmdlA0UUI5ZGxlamE5cTdIOW1Rc3NEcnl6Q3YvRXhQL2pLRWV3MXNKN1BYL0VBaXh2WDA3Y3VpL09lZGEwbFJnenV3OC9IajJMQnNuVTg5KzZuTEc4cWtFc0Y5SzNQOHM3aVZaeDkvUXdldVd3TTN6aHhYLzdQSTI5U1g1dkI5ZUFwYk5pTkJJT1dBRmhIc21WWGNpL2JqWXBDR0JnYW13b2NjZWtVd3NEMnlzaFZ3aUxubFk2eW85K3VkZnpucVFkeTF3dnY4K3hiUzVPQkthM0ZpT1AyRzh6MHk4YlFVWGFNR055SDJkZDltWk92ZllpRnk1cklwS0MrTHN2ME9ZdDUvSTJQdWVTc1E3bmx5WGQ3NVpHMSsySmZaNENQa2ovOGppemowTVFBRnpvaW1scmFXZC9hc2RtZnB0WWlMZTBsUktBY09UNi8veEJxc2lsdWUyWmh0OXlLanh6ZkhuMEFwY2d6OU1KYk9lU0hkek9vYjU2ekQ5K1RjbnNKMjJVSS8zaDZBYnYzcitXUVBYYWh2ZVEybTZLUnVBU3BvbE1mQmNCOFZNOG0zc1ozak1aSUhKaUYxbkRLd2J1VFR3ZTR6WlJGcUNwaFlQbDRkUXZ6bDY2RnN1T1FZYkZ2TW5meEtqS3A3blJuNUQyWmxHV3ZnWFc4OXVFcVR2M1pOSmF1YVNXVjZ3dzgwNm1BRnhjMkFuRHdzUDY4T1A5VFJFSTJ0UXVvcUVwUzV3TzhHd0FmSmd2TDdNaFl0aHg1QnZXdjVjN3ZuVXpmZkRxSmozcSsxL2tZeE9semx6RHVoa2ZCR2dZMzFMQzZwVWhiUnhralVpMWt0YUhsK3FsekdYM1E3cno0c3kvVFZPamdsMVBuOHRRN3kwZ0Z0ck5ZUjJJT3lIdGxZSjljbkV6YlhJZmpCa3p5Z2c4RFZPWWhlRkFMb215S0JOOUtTUVdHVDljVk9PNi83NCtyRUhwQjNZaXdZbjFiSFBkNHBWQXNVNXNKNDkwRUR3a2hsZ2t0cWNEeTVkODh5a0ZEK3pGbTVEQ3VtM0Fra2ZQOGV1cmNxaTJDbUI0VmdmYVMyK3lPR0t1SmtHRGdVZVlHbEdVK0tiOFlaSGljcWQ0Qk5ZVkpyQVRLL0tWcjhWdklxNFNCSlorSlhhcGxhMlAvWTlmNkxCK3RiQ0cwRUNYZG4vYmowNW54K2hLK2Z2bjkvUGJlMTFqMHQvL0IwZnNNNHRkVWJCdVVJczluQjlVaklpeGQwd3BXTnNsNUphU0RKdDdYWXRENWdhUzFwTXJMb01NQkwwcXczZnFTUEsrcTlLdk5ZRTN2YklZUVp4Z2k1N0hwZ0NmZmlYTlFweDg2akpzZW1rYytFeEFBemUxbFpzeGJ3dGRPMkplV241eUJOY0lldTlieCt4bHZVaG1haU9CTEVhTVBIZ29RaHhhSm5lcEpOQzdNZHNTODFFdGlwUlFrMitnVHFreW9WQVJVYXRpMkI1dXljd3hwcU9HRmE4ZXlhMzF1aTJ6TTFGY1djZTZOajVGTEJieXhlRFZ6RjYzaW9qRUg4YWRaNzFDS1BJRXhaRUxMais5NGlWdzY0THVuSGdqQWI2YTl6bCtmZUpkOFBvVnFEUENBL2pYODEra0g4c2pjajFpMFluMmNGdTRCbDFoVHFpbmJHQXNQUVhMdmRBTnJnWVlLZnR2cjZ3WEdzTGExeUtWM3ZFeGRsWnpxK1Y3Vk9JRzNZRmxUbFdzcFJZNmYzRFdiNlplTjRkcXZITUgzLy9Jc3RYVVpNaWxMVTF1SmMyOTRqUDEyYStDMVJhdTRlTkpUMURUa0NhMGg4a3BIc2N4dkxqeUJ1bXlLYSs1OXJVcDE5T1Q1eHFGTFlsOUUxbmxsaGdDQnhJbW1GWW8raWpJK0xoUVN1NG1jMjVaSndyNFZ5NDViWnIyenlTMnlTL2ZpaHdKTFRTWWtjcDY2WElwSDV5M2gxdy9ONCtJekQ2R3BVT0xxdTJkancvaWVsRFdjZDlQamxDSkhYYjhhUkdCOWV3bjF5ZzNmT0pZSng0N2dpcnRmWWZiQ1J1cnk2VTBGa3BxQTVWUUpRR2NZa1JVQ0praXlCaWh5bDZEaks2UndEem0zTFpma01TTkNmZTJXaDJHcVd0MVJmSkx4L01sZHMrbFhtK0dxY3cvbnNMMTI1Zkk3WCtidFQ5Yml5eEZ2cjIrTEc3TkNtQTQ1YlBpdVhEL3hLRDYvL3hCdWV1UU5ycm52VldwenFZMHFPcnUybDB4S2tpSGd6bmhoSVFHS0czTG01MWoxK3BKcHBVOWFYZ1pHQVE3QkpybVc3VnBUenV0R0t0eXRMbmNEMnJJcmxXa2wxdWR2L09GSjNseXlobCtkZnhSalJnN2pwWVhMZVdiK3B5eGYxNFlTK3ltajloN0lpUWZzQnNCRmYzK08zMDEvaTF6QzAvUzBoTHBVVnprUUMvcHkzMEdsUjQ3NmNuOGUvbDJMQzFLQllkbTB0K09hVitTM0tLT1NkUmRYdjIrTDFpU1BWZllpVDJka1cvbTNhOEt1YTFLdGN0MTAwYnJhVE1oTkQ3L08vYk0vNUdzbjdNdS9IN0VuUHo1NzVFYk4zdmJzUW41NjEydytXdEZNYlM2RndpYTFwYkpGZDVtSTM2eGJudWFSbTV1dHRWa1hsRDE0eExWandLYnZ5dnYyaTRHUm9JNjRObjhyd29SazFoTnV0cjBjSVVCTkp1d0dqaEVvZEVSNFZWS0JKUjFZWEZLYlprenN5QlU2SXRDWUpEZEdxTXVsYVd4cTQrcTdYK0dhS2ErU1NRVU03cHZER09HMFE0WnkwOWVQNVpZbjUvUFJwMDAwOU0xUml2em1NZ3lKdTZZT3hRSnpDdm5VdmJRVnlhaHhJbVdNYzRxVUF2SjRtM2Z0cU9xbGxaTWpsY0JCZTdlZWxRYmpmRkJiaVNIOThqejBvOU01OStpOWFXNHB4cnROOHRQY1V1UzhZL1ptMm85T1ozRGZQTTF0SFFUV1lJMmhWUFo0cjB6NjV2RmNjOTRSRkRxaWVEbWk1Tk1oR0dIa25yc3c1UWVqMlhOQVBlKy8rVW0xQnE4K2wwWlNsc2gxWDU3ZE94a1hPRlF5cm9sM2NtbStVQ2F2MXZwU2dJc2NRZnMvTHlBLy9zODRGN2t3REEwaU03M3pVMERHZ1paRkpJeE5kKy9BV0dOWTMxWmlqMkg5ZU9xS0x6R2tYdzFqUmc0am13cTRaZFo4YW5NcG10czYrSitqRCtEUDN6b0JnUDEzNzhlWnYzaVl0ejVlU3pabHlhUXMvL2pPU1p4MTJCNEFOT1RUZlBlVzU4aUVsblZ0Ulk0Y01aQkhMaDFEMzVvTXB4ODZqSk5VYWE1a0NieWl2WGpaS3BvVXhtZ1pOQVNaWWtWbkFpWkNYUkI2MnU2OElEWURQb2pBeHZTZmN4NkZTMVcxTFFIRmI4Q2c5eWdpUWx1cHpQNmZhZUM1YTJLbjdxU3JIK1QyWnhmeTF3dFA1Skt6RDZXbHRjZ1B6enFVUDMvckJHYTkrUWxIWFg0Zm1kRHk2aS9HY2VpZXUyQ05ZZnBsWXpqcnNEMzQzdCtlWStKdlozTGg2QU80NytKVGFldUkrR0lTT0FiV2NNS1ZEekRscFErWTlkT3pPUGZvdllEZVV6T1ZKYVNpWHBCUWxWYUZIenROOGxuV29VRmNXUm9BdE45Nklma0prN0dvOTdHRi9sQ1JieWw2cTNTaEl6Wm5iNndST3NxZUkvWWV3TXIxN1l5NjdGN212dC9JMCs4c283bTl4QzhuSHNXWi83WUhSKzh6aUttdkxPS3JOOCtpcGFYSWtaZmR5NU5YZm9rWHJobkxnaytiT0hoWWY3Nzk1MmY0NCtOdmcvT1VuT09lNzUvQ3ZGK2R5K2QyNzhmcTVyZ0tmTjc3SzNoeFlTT3JtdHY1OXVnRGtzblpEQ2gwRzRNbU51Si9HV0VSeEVkMWlDeUZPK0t5ZVZ0NU1OanZWTkxHVUZEVmxCZ0R2QUhzQ2h3aFFxU0s3YktyYk5TRnlDdm5IclVYaFk0eUoxNDVsWGVYcmFOdmJSWVJtUHJxSW93STUzOStCSDk1WWo1Zi84TVRxRUp0UHMzcWxuWnVmWG9CeCswM21NUDNIc0RFMzgza2xzZmZwcjQyUXpZVE1uZGhJeSs4MzhoL25YNFE3MzNheElsWFBjaUNaZXRvcU0vaUZSNThkVEdoTlJ3NVlpQzNQYk9RRDFZMGt3NDc2WWVxcGtpbFpGNGlWUTJBMzR2SXI0eUlhZk5sbnhGRGhDRjZhMW9NY3RmQlpTWk9CZ1NqS21WRnk0K1Z5WjhTekJLUkw2Q1VGUTBycTJwRGNKeFgrdWJURk1zUnplMGxjcWs0YldFazNvNkxaY2VRdm5tV043VVJXQ0cwSnFtck1SVExFZW5BVXB0TnNXSjlHL2wwWEZoZE1lWXQ3V1YycWN2UUVYa0t4VExaVkxEUnUzZnJWME5Ub1dNakNsT1Q0NEVKS1BIeEhOWEhCMzN6K05HZi9IRVcxbHJ4Z2dwQyt4MDlITEtvU0g3aTVKaXpVVFZlOFVaTkh1dWZFemlFK0FCWFdJazFoV3JnaFVoYzIyOUVzRlkyWXVaRm9GUjJwSUpZU1gwWHY2YVNOWXk4a2c0TVh1bm05MWdqbEtMZTN1MEpySFQ3L3cwMHBZeHFxRERIWVk0VmRlMGlZZ1QxaUtHd3dSbkpqZmlBd3RMbGxWKzlFU3ppQzZpZXBzb0hxb1FpeVJsSXVoUVFKNTBKck5rb05WcTVwa3FWWWV2cWRJbDAzcCt5M1VHcGRrVFpnbmViRFVEcGNtNUFwSXdTS3J5ditGT3QrbllqV0VrNDNpNWozalF3UEgwbEVsRWg4WkxRUUJvOUhBTTZGd2dsMWh5dDBCUUsyblVnRzBld2lmdS9EZGMzZGUrbW51M2tyaXZuQm1JdFYzU093akVncXlxbjIrSUVtTm5vZEZ2UHdCQ2ZFZlNteXBFNkFXdlFGUmgvbktyTzdHSnJuQ1QwZW0vYitiOUNWT05UQWdrb1R1THkweENZR1hsL0hNcktPQzdDZ2FMRzkzZ2VFalp6dkxqdHRnc3JaM2FKWHlRV0w0VjBaditUUVc3VStPaVNUWTRYVjZzRjlGOVNOZGRkNHRXWGFIQzhNWmZqdnFsUjFSdE5GSnhzakxTSnhBZGY0eGszbXp4QkMxc1FPZWNtVHNhb3I1enJNQjIrNkxNbWkwUEhDditmSEVoWGtsS3hEUTZrSzkrMFJ1NHZ1aEtoQ1EySkh5ZWl0TjJ4K2RQNnZaS3hiYmRmVUwxTHdhZE1XaEMxd1AzcU9WQ1YyeXJhSXlKZTR4TnhDYXVqeXM3UklLM1dpY1pjckJNUjM2a2wzT1pWRDBUMGZrUnRhRUlCdk1UVVRhK2d3Tlp3TGVQdUlaZGFpOGRUakFMeWdVOCtlaUZFWGs4UytDVndhTXlLaWt1Y0hRTVY5cUtTRzlvMkxkSktIVzYxamxnVVZaOW9hT1diRG5PQUh4dGpadm5JZ1JGYktPQXl1WGlyYnl2MTI3RWZ2ZWdxK2ZHVEVlUGkrVklSbTN3bXBVM2J5VXYySEpEdmkrZ1IxVHFYeXZkaTR1Ky9WTnZyTGNUb0dvWjA2YTJLNGtCTXd0Rlc3cDBOM0hCVzR6NzNUQjI0QUd1TThjNnJpRmVNb2k3WWlaOUo2U3BmdlptYUtJUU9UMUU4cWJTMWJUNXllUk5RWnp6TjNvd0J4aUV5R25SQVowTVZROTc3aDNVU1dMdC9XS2VpTnZGTksxRWVCYWJVcHpNUHIrOG9VbkN0NUd5TjlhV3l5M2lEUzF0YWd1aGY4MkdkcmxJellSS1JTVHhCQjBiVm5yeHJoM3Q4VlJvUndTa05SdlZrNEFTUW8wRkhrQVN1R3lsSzFZbnAvTE82ZEdLSkVCYWl2QUE4NVkwOGJsWFdLcDd4SngzR25UTmZ0U280WjhGNHhYcWh0WXVMdjdXeVEzYU56TVRKWkhBMEZKdG9URGNnZ2pVaUdpbmVKTm5QS0JKcmplNGpNQkxZQnppWXpYKzhxd1ZZQUx3SkxGQ1lVMUsvSUdPc3ErU1JMV0k4WGxSeGc4V3pXaXhGVllxM2J6c2dGZm0vWitjbVY1NkRTUTRBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCR0NBWUFBQUJ4THVLRUFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFFWTJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU2Z2dTc4bklHbGtQU2RYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUW5QejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNkaFpHOWlaVHB1Y3pwdFpYUmhMeWMrQ2p4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXljK0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenBCZEhSeWFXSTlKMmgwZEhBNkx5OXVjeTVoZEhSeWFXSjFkR2x2Ymk1amIyMHZZV1J6THpFdU1DOG5QZ29nSUR4QmRIUnlhV0k2UVdSelBnb2dJQ0E4Y21SbU9sTmxjVDRLSUNBZ0lEeHlaR1k2YkdrZ2NtUm1PbkJoY25ObFZIbHdaVDBuVW1WemIzVnlZMlVuUGdvZ0lDQWdJRHhCZEhSeWFXSTZRM0psWVhSbFpENHlNREl5TFRBNUxUQXlQQzlCZEhSeWFXSTZRM0psWVhSbFpENEtJQ0FnSUNBOFFYUjBjbWxpT2tWNGRFbGtQak5oTmpBeFkyVmxMVEE0TlRVdE5EbGpOeTFpWlRnNExXSmxNems1WkRNMFpXUmpNRHd2UVhSMGNtbGlPa1Y0ZEVsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Um1KSlpENDFNalV5TmpVNU1UUXhOemsxT0RBOEwwRjBkSEpwWWpwR1lrbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBqSThMMEYwZEhKcFlqcFViM1ZqYUZSNWNHVStDaUFnSUNBOEwzSmtaanBzYVQ0S0lDQWdQQzl5WkdZNlUyVnhQZ29nSUR3dlFYUjBjbWxpT2tGa2N6NEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29LSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNjbkNpQWdlRzFzYm5NNlpHTTlKMmgwZEhBNkx5OXdkWEpzTG05eVp5OWtZeTlsYkdWdFpXNTBjeTh4TGpFdkp6NEtJQ0E4WkdNNmRHbDBiR1UrQ2lBZ0lEeHlaR1k2UVd4MFBnb2dJQ0FnUEhKa1pqcHNhU0I0Yld3NmJHRnVaejBuZUMxa1pXWmhkV3gwSno1dmJuVERvV0pwYkR3dmNtUm1PbXhwUGdvZ0lDQThMM0prWmpwQmJIUStDaUFnUEM5a1l6cDBhWFJzWlQ0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb0tJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU2NuQ2lBZ2VHMXNibk02Y0dSbVBTZG9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JrWmk4eExqTXZKejRLSUNBOGNHUm1Pa0YxZEdodmNqNVVZbklnVjJWaVBDOXdaR1k2UVhWMGFHOXlQZ29nUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cDRiWEE5SjJoMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4blBnb2dJRHg0YlhBNlEzSmxZWFJ2Y2xSdmIydytRMkZ1ZG1FOEwzaHRjRHBEY21WaGRHOXlWRzl2YkQ0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnbzhMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU2R5Sno4K0M5Qi8wZ0FBR3U5SlJFRlVlSnpGbkhlOEZkWFY5NzlyNzVuVGJxRVpRREdpa1loaXJGZ3dkckdER3ZKUmJFOWlFbDhUODloU0g2SkpGRFFhUzlRWTgwWlRmR0txVWRHZ29CSXNzY1NHUVN5Um9nSnFFRUg2dmZmVW1iM1grOGZNSEVENkJmT3VEL2Z6NFp3elphL2ZyTDNLYiswOXdsYVEzUEZYWTRvTkpJencxVHdHckFqcUhkNFlRQXlOT29VdzUzY0hoZ0M3QVhzRGc0RldvSURRQW9CU0JtcEFGekFiZUFXWUFjeU1HdWFOWEY1cktIZ0ZZekNxS2g2Y0NlcW9EL0dOSEkxSHZyL0ZPc21Xbkp3L2NTeWhDTG15VUNsNUpCQmJkYkVybWdBUjhJNkJZamdDT0FnNERHUXdxQUVRK2NpdGRkMGpVczErd0lQTUFuMGE1QVZWL200TTc2a3FWUWZGQUt1eGRZRnB4NWxPZkJSVGYrU0tidXZXUFdCR1hVTkxGT0ZqaUFOREtONVUzKy8waGUzYnFNWU5XN1M1a1NDalFFZUM5Rm1GZ1FMaUFLK3FKcjIvckRHU0pnNG9vQ0xpQVFOWTBQU2ZBTG9VbUFUeTEycmtKaFZ6eGxVZlBKM2lTWGVicXFpM1Rza1pvUnJrNEsrWGJiYUtabk5QeUoxMEZTMitCcUlRSUhuakRJclhSa1ZRUmhkdDdubGdBbkNPaVBRUlVhZXFrYXA2VlZGVk5hb2FpSWdGcENta2Y5bkg1RGVycWtGNmpxcUtWeUVTVVNjaWZVRE9BWjFRRE8zenFJeitZbnc4Z0c5VFkwSmp4S0MwdUJxNWs2N2FiR0EyM1dKT3U0ZENiUWF4UUJ5M1ViSmRWbFdjTVI3djVYaUVId043aXdnb0RsRlZ4U0Fpb29xS0lBcElONjFVVVJVUVRTNmlxSXJnUVFUVUtnS3EweFF1QzFTbXhLSVlzSldnNEFKWEpWQ29GWWJBdmFPM0hqQzVVOFppZkdyYklLRmd2SXJ6eUFBRDE0T2VsZm9NcDZvZ0dGUVFVVlNUUjk4dE1OWWpxcW9pUXVKK0ZCQXZDZW8ydmY4ZjFNdWxJdnErUVcwRVhnUVZCTytVeGtOak4zcVBqUTY0T1BJcU1ENTFnbUpxVXZVbExhTHdlZURYSXZRRzhhcXFBa1lUQzFFVlFiYlF1VzlNRkRTelFsVVUxS2NQd2FqcU11QThnZnNyTkNpUU13SmVFSndvOVFjMzdKZzM2R01LSTY5TWZLVUNpRlh3UDFoK0dBbzNnZHduUW05VmlkSUhhQlZCRkUxTjVHTUZCVWlBbDJSZUlZb2tGaU9LUmlMU0c3aFA0YWFmNXZ1aGlGZXdxbUFkNUUrK2NtUFhYcmVVUm93Rksxa2dzRjV4aXJaWUkzOUZPVWFrYVNVV0pKbi8vd0V3TmlUWkZFTlZGRnhxdkFaNDFEbEdHVU5aa2h6TEFlQ1Z5bnFtMVRvVkNVZGVpVFZKVUVTeEtNNHIvWXlSeVFKN0kwUnBaSkhWemZsajBYWnpSUk5ZUkJNUEp5SXhTcWpveTA0NTBjSWlGYXlBVXdIbmhXalM1V3RkWnUycGRNUllBdkZKQkZHc2dnUDZHOE96Z3U2TmFLU3FZZE9WWk9iY0hSMVdKVytiOWRzR1JaRE03YWRqREJFaWdYMnQ4Q3hDZnhLZHJDaUVLQnd4ZHEzTHJBVk1vUzNSVWNGNDljNTViVUY0V0lTZFFTSlZ3aFFUN1c2MHlaUzJ4bUNOb0twNG4vd2wzd3NtL2I2N3Npb0dpQ2JnU0pUb3dNUE9hNHQ2ZFlCUmdXTDcybXFzQVV6KzVDdnhDQjZSaG85OWZjbjdFaGg1QUdRZmtFalJGSlR1aDJCVnhZaGdST2lxMXVsY1djRjV4ZG9FakViazZGeFpwdGFJQ2F4cG50TWRTY0doQ1E0U2dld1RHSGxnNE5BQ3NWZXZLcUpxeUk5Y013bHNLbGM4NFFxc1FOVVlDZ2FqNEZXNUZlRkNRYkxwbyttTnVnK0tNY1RPVWE5RkhMTG5qcHg5MUY0Yzlwa2QyYlpQSzg0cDd5MWV3ZC8rK1RhL25mSXliNzI3bUZKckFTRVpUSGZUb1ZWNWo0cEk4b0JSYmdVdUZsRVQrOUNIV3NNSGVhb1AvQUFBbTUwY0RCbWVmQ0ZKV0FiNUw1QnJSY1NwcWwwTi9XNkRZbzJoRWNXMEZITGNkc25KL096ckk5ajFrOXZ3L014Lzg5VHI3L0Q2TzR0b0xlWTU1NWg5dU9pVVlUamc3Ni9Pd3hoSnl2VnVnclA2MkZYVkNPSkZHQWE4SlNLdkdYRldTYkxSK00wbmszTUFpc2VPdzRjV01kNG9lSlNkamVocklsSlNWUzhpSnNuSXQ4UlNoQ2oydEJaeVBISDlsOW5yVS8yNTVMYUgrZTJVbCtrczEyRmxHUUtMdEJYcDM3dU55ODQ0akF0UFBwQS9QZkVxNS96a2Z2SmgwSjFiZjNRY3FVUEdpNmhScGRPcjdBMDZWOEJJTGZLWWtPcVVLeEtMQ2ZZOEVta29KaWRpUUFYOUpTSjdpMnFFU01BV09GcFlSVEUwWXNkOWw1L0JJYnNQWk5nM2ZzWDlqNzlDa0E5eHFweDQyR2ZvMmJ1TkJjczZhY1NPaVUrOXpyd2xIVngrOXBGNHJ6dzI5VTBLaFJ6ZWQzOUtaZWtGb2taVUlrU0tnbTVuakxsWFRGTFNVUlRpV1U5aTh5ZGRnd3ZCb2hhUFYrVkVFYTRXU1RKRldhVll0NEd4UmloMzFUajlxRDM1M3VoRE9lMUhkL1BvY3pQcHZVMFB1bW9OZHV6WGs2ZHZPSmU5UHRXZlB6M3hHdFlZU3EwRnByNHlqeDQ5UzF4NittR01mMjRtQzVaMmtBdnRHbEZOVEpJdHJGYWZONzlUV0d2NkNZcW9vS2hKY09Jem9NK0J6aEVybHB4UnUvTXhHQ3NOZ3FwUy9iZDExWC9VRU9IS3BGQWxLV2F6NjIyQmVLOWdEWmVjTW94cGJ5MWcvTlAvb3ExWEsxMjFCdHYxYWVPeGE3OUV0Ukh4MlNFN2NOOFB6eUNLSGM0cHViWWlQLzdMMDlRYU1lZWRNQlJmanpHcDhnQmQxVHBkWFRXNktqVzZ5dWxmOXY5cXZRbkttbEZObWxWTEdra0ErWEYxU3BsNHZqcXBLSmFJQUZ0RnRHU0wyenZIOXNVekVCMHFTS3lvUlVTM05NMFhvQjQ1QnZicnhiRGRQc25GdHowRXNTT3doczdPS2dmdnZoczc5ZS9GTGwrNWhUMTM2c2Y0SDU3QkovdjI0TjFGSzJncDVGaTh0Sk5KTDg1bXhBRzdNS1lsVCt4OEU1akQ5dHlKYmRwTHlYZUp6Z21GaGJLeVhHZnE3UG5yZE5qU1JFdU1nRk4wYVBIbzFsTVJIUTlxMGNnRnpyVXkwMy9vUnB1QU4rajVEYUVaMXJJRWFVdHdRVVNJbldOZzN4NEF6Rm13REFLTDg0b0pBMmE5dHdUdmxWOWNPSklKejgvazlHdnU1c1BsWlhKQkdqQmp4K3Z2TE9LVWczYWxtQXVwTnFLRXpqT0dHNzk2SFB0OWVnQ3g4MWdqZUlWNkZGUEtoOVNqbUgwdnVJM1o4NWRReUFWOE5CWFNoRGVTSkNjRGhXOFBibjEzL1BTTC85Y1ZydmtSZ1ZHMXU1dFBPSVVSZ2g1SWtpNmJoRnZhZWp4SzVodnFzUU5KcGxjeEgvRGF2SVdjZS9NRWZuRG00Zno4Z3BIY09XVTY0NStaUVRFWFpNaFNhOFNFZ2NYYWhJTXhWb2ljWTlTNHUramZxN1daNDFScUVUZWNkeXdqRGhnTVFDa2Y0dGVUSEthbFRFS21nUWNkTnF0enh4R2xhNjU4eU9Dc0lTTVYwTE1TdzArWW5xMkZpSklrZFI4czYwSkUySzUzR3ppUHRZWnlwYzdJQXdmejNWTVBadEE1Ti9IMVd5ZnlwV1AzWWFmK3ZhaEZjWE1NTy9icnlaS1ZaV3FwajFGTkxHYlI4aTZtdmIyQTErY3RZdHIwT1p4NjZCQkdIRENZaDZlK1NlUThHOHVYVnhGZCtLVEkwak9USDBTTnF2ZUs3d2Vja0ZUc0dKR3RoNDBxNUFMTHZJWEwrV0JaSjhjTkhRUSs4UWxpREF1WGR6RmtZRi8rZk5sb3ZqQjhMNWFzTExPMG8wSm9MYkgzaEMxNWp0bDNaNTZiOFcvS2xmb2FaVUl1c0xRWDgwVDFpTytjY3pSWGZuRTQvL09idjNIOXZjL1FXc2dsYm1RRDZLUWtjNm96QU1jNzlaL3dxRGRHQkVGR0FMMEExNlJWdDZLRWdhSFNWZVdPeVM5ejlsRjdNV2hnUDFhV2E3UzNGSGpwemZjNTc2Y1BjT2FSZTdMdm9PMzQzTGk3NktqVUtlVkR5aDBWUm4xMkNJTzI2OE9kajA2SE5JaXNIcTVYZGxRNCs1aDl1T0c4NDdodDBsUnUrTjNqOUdvcmJuSjlwZGtFVVJ6UXg0cU1OQWFNTVFKd1ZPcW8wOFI1Ni9tV3JISU9pem4rNzhRWFdkWlo0YTVMVDhOYVEyZWxSbytXUEwrWk5KV2I3bitXaTMveEVNOU9uME9QbGp6TFZuU3h3NEJ0dVBQYm8vajdxL09ZOE54TVdsb0t1TFFDRHdOTHg4b3lKeDA4aEQrT09aWHh6N3pCQlQrZkJJVWNLTVRPSndQWWlDYXBzaGxOQVREY2ltQ2lPTW9CdzlManpOYTJGeEhCcTVJUEF4WXU3V1QwMWZldzN5NERlUG9uNTdKRDM1NnNYTllGeHZEdFh6ek1yeDk2Q1VMTDh1VmRITExYVGt6L3hYL1RWV3Z3NVJ2L2lqVUdVbXNKQTB0SFI0WERodzdpd1hGbjg3ZC92c1hvYSs2bXBaQURFYXcxaElFbDdWaHNWQkxDcjhrMERHdFVOV2ZEd2NQM0VHRk1aaVdTK2V1dERZNVhpdm1RV2U5K3lQT3o1blBCeVFjd1p2U2g5UDlFRC9LNWdGSXB6OEIrUFRscW41MFo5NlhoWEhmdWNjejVZQm5IZi8vM3pGdTRQSWt3WGdtdHBhTmNZODlCMi9MQ1Q3L0t0TGNXTU9LSGZ3U1VJUFZMK1RDZ3ZTWFBmZjk0ZzNya21nNWsvZVBUZEpnaVFFK3gvRldLSThkOUJlR090SW8yVzNzYVNacDBaV0V6c0liT2NwMytmWkpDOFp4ajlxRzlsRTlyb0FURUJVczd1V1hDODl6NndBdlVJMGVwRU9LY1Q4NnQxQm0wWFI5ZXVlMi9XYlNpelA0WDNjN0tjbzFpQ3B3MVF1dzhrZlBrQW9zeHlVUFpXR1dlNW14ZVZTM0tWNlI0MHBWWGcxNG1JcEVxZ1d5MWFKUlUxTEh6ZUo5TUplZDlFNXhhSXlacVJMUzFGdGx6cC83MDdkbUNWMlhld3VXOE9YOHB0VXFkUWt1ZXdCaWNUMENwMUNQNjkycmx4VnUrUmhBWWhsNTRPeDhzN2FTbEVPSzg0cHluM29obzB2SnA5bGJNaDgzU1lMM2dKTWpFb2hvcVhCMEF1NlZoV3JaQ0JkQUV4UnBEdFJIUnE3VklheUhITzR1VzAxWktVdnJZZVhLaEpSOEdOR0xIczIrOEJ5bG9KakRrd29DMjltS2lyUGRZa3dEWlVzZ3g1WnB6MkthOXhOQ0xidVA5RDFmUzFwSnZIdGVycmNqK3V3eEt4Z0FZRVNyMWlLbXo1eFBGYnNNV0l5Sm82a1JVaGdTZ082YndHbFhSTGJXWURKUmFtcHBQSEhjMnV3L3N5eUhmK2cydnpmbUE5cllpVWV4SVVvemsyTmFpYlQ0UDFhUjc2Vkx6dDhiUWlCM1dHQ2IvNklzTUdkaVgvUzY4alRmbUxtcGVLN1NXU21lRnI1OXhHSmVmZmVRYTQ0bWRaOWdsdjJUNm5JVVU4MnVYQnBra0ZTVW14V0pIUTVLL0pEOXVKVkFhc2FNbEgvTDR0VjltdjEwR3NLSmM0NFZidnNvZU8yOUxSMmVWTUxCcjVCbCtOVEk4K3pxYmlzNG5VL0V2bDUzR1FVTSt5ZEhmdTVOcHM5OXZndEswQXEvMGFpMVNxVVdjZk1XZk9QRUh2K2ZNYSsraFVvL0loY0Y2UzROVnlLeGhUcjBNU00rMC83dFZRSW1jdzNuUC9aZWZ5ZjZEQnpEOGUzY3k5TUxiV2R4UlllclB2c1llTy9lbm82dEdhTzE2azdDTU1FZWhXcWx6eDdjK3h5a0g3Y1laUDc2SHgxOTZrL2JXNG5xblJrZWx4c1FYWnZISXN6TjU2TVUzaVdLM0dWcGs4VjNhREdoTGFqN2RBcVNwaUVrS3V5ajIzUHY5MHpscTcwOXh6S1cvNCtucGMxaldXZUd6My9nVmkxWjA4ZUl0WDJQd0R0dlFVVmszT0UwSEtWQXUxL2pwQlNQNTR0RjdjKzdORTdqNzBWZG83OUZDblBxamRZbTFodlpTZ1Z4TGdmWlNZYU9oK2lPYWtHTFJhb0ROZ1hUdFM2V2dlSiswSysvOXdlbU1PbmdJWjE4N25zZW16cWE5clVRcEg3SmdhU2VmL2VhdldkNVY1WW5ydnN4MjI3VFRXVTFxbnd5Y0RKU004ZnVmTXcvbmtsRUhNZWFPS2Z6dlF5L1IxaVBoWGpZVVhWVEJxVStuNFBvQjNKZ1lrTW9xcExvSGlpcFVxdzN1L1BZb1BuL3dFTTY2ZGp4L2ZtdzZQWHEyNEZUeHF2Um9LYkJnYVNkSGpma3R2VnFMUEhmemVXelhwNDJ1YXFNSmpvZ2t1Y3FLTXVlZk1venJ6ajJXRys5N2x1dnZlb3EydGxJV2ZURkdtcGF3SlUyNXRTV2JPZEpsUUR0V0JmM05CQ1dsQUNxVk9qKzdjQ1JuSDdVWFg3aitQdTZhOGpLRlVwNk9jcDFLclVHbEZyR2lYQ01YV0dhL3Q1Z0RML2tWL1hxMjhPeE41N0ZkbjNiS3RZakFKbDNKanBWbHpqaDJYMjY3NkNSKzg4ZzB2blA3SXhSTGVjcTFCbDNwdFNxMWlIS3QwV1R6dGg0MFNVVUoyaGtBeTRFZG05cHVRdWJiZEk1QXBWcm5sZ3RHY3RFcHcvak9yeWZ6eDcrOVRFdGJrVzE3dC9HSm5pMXBVcGMwWG1xTm1IY1hyZUQxT1I5d3dNVy81S1dmbmMvVE41N0wvaGZkVGxlMVFhTVJNWHovWGJqcjB0T1k4TnhNenYvWmcrUUxJY1ZjeU80RCsyS05TVUZJN2o5L1NRZUxWNVNiVk1RV1FySTZ2c3NEa0hkQTl3SHhLZ1FiUTZWSk1BT1ZyaXJYbjM4aUYzOXVHTi85emQrNDhlNW5hR2tySUFoM1hYb2ErKzB5Z0s1YUE1Tk9rU2gySFBTTlgxTnRSTHcrZHhIN1gzdzcwMzcrZFI2OTVod092T1JYSExqYkRqeDI3WmQ0YnNaN2pMNzZidks1Z0VxMXpobUg3OEdkMy9rODVWb0RrU1NFdHhYei9QTGhmM0wrelJNbzVzTXRCa1pFUlZWY3NxcFUzZ2xBWjZDTVFsRFpCSXRKV2hSUXJVZU1PZXNJdm52YUlZeTVZd28vdWVzcDJ0cExSTTVqRFF6czI1UGZQL1lLVi8zcFNZcjVrQ1AzMm9sYnZuNEN1ZERTaUJ3OTI0cTgvdFlIREI5ekowL2ZlQzcvdU9uLzhPa0JmWGg5M2lLTysvN3ZFUkZ5Z2FVU2UzcTBGQUE0L3Z0L29GeHI0THpubnN0RzA2ZTl1TVdBWkpJbXQ1bkxtaG1nekVrTEFiTXBMamhyeGgrMTk2ZTQ5dHhqdWZuKzU3ait6MC9SMmxaS2tpaE52WlhBZ3FXZHZEMTdQaFJ5Ykw5Tkc5NDNpU0VpNTJqdlVlS1pWK2N5Zk15ZFBIN2RsNXJWZEtVV3BmVlBFbFc4SmluL3EzTS9vTE5jQTYrc0tOY3lqYllXTklCazlPQ2NRR0c2Z0NmcFkyKzBEUFdxNU1LQXR4WXM0OVNyL3NMRUYyZFRiTWtucWZ4SGpzMEZCZ281YkNFa253dldXc3NieFk2MnRpSlBUSCtiZlMrNGpSWGxLZ3VXZGRKYXpCR24xWFFta2hhRFVaeUVZcnNWL01vcVNKcm9XcEpGNXk4YjMyQUdNQzg3UmpmaWUxV1Z3Q1pFOUgxUC80dkFtaVladGZZTmdUUmNyK3ZCSnEwVlQydXB3S3R6RnpKL2NRZXRoUnh1dGQ0UnJJYW5UNjZWV2ViVzRrZEVwVGxjWUo3WGVJYkpGYVVCdkpBdEMwMVcwNjVic3J6RkdxR1FDK2paWGlKSUYvOTBsOFpKZ0lXMlVvNVNQa1FrNFhLM2JuNnlZVW1hcm1UWjRQTmhFRGFDbEVOOVhKV3pKVjBCbVNaU2EyaWFoZWhhSThiVm9qV3ZMSkFyNWdrM3k3d0ZWVTluVnczY1IwQUlMYVZDYmpQVjY1NGtORGZabWoyQXg3MHFRZnJoWVVHV0FiMDFiZEo5Vkl4SlFObGp4MzRjdnVlT3hDNWwzSURJZVNhOU9KdkZLOHFrNVBxR0pjMG5yVEdjZGZRK2JOTmVTcWRiMGhKNS9aMFBlZXExZVFSYklReHZkQ2pTREJZV1pibXFQa0tTdHhnRExBS2RyTXBaSWpqVmRDSHJhbFpqamNGVjZweHh4QjZNR1gwbzlTaHVGb0daSTd4OXdndTBiRUxyUWhCaTcrbmRWdUozMy9rOGdUVk5laUVNTEsvT1hjaEIzL2hWTTRKOVhLSlo3MFRVcVJJQWo0aVlSWUFKb09sNS9wSjJJeVdoa05aQnpuZ2xIMXBlbmZzQmgzNzdEZ0pyYUN2bG1mdmJiNmJUU0RlOVRrL3Jubm9VODRYckp6QnA2cHRVYWcxdVB2OUVSaHl3UzhMTjJJMWZaa3NrV3p1ZGhHbEY0YzlwZ1NIR1k5em8zV2F5UTJuRlJKQVhRQzNKMm54WlZ4OHZZL3c3SzNWV2x1dDBWdXJkcjFkMEZmM1lWYTdodTJwRUthdi9jYnRlVGRZREM0aFBzbDFlR0VUbG9WdWxqaGR4SnFDTGUyYnVadjlkNlFsd1MrSjQwN1BXMXhCdjltNE1nYlZiYk82Qk5SaHJJV1gxL3hPU3JxM1NwbytCRytkUTRpTE4yU0JZZ1ZGS3FPS3FLeU9xczVmL0JaaW1pQVgxMlRyUWRWMVlzd3czL1hsTDFNbjQzNC9kVEpyMzB4UVN2Q1pKM2JUcVM1M2o0NlVLM2ppTjJ6Q09rRGdNS1BZTWJYSFhuZ0NYcGkyRGJCTUo2OHE3bTVGcms0TFF4Zy9hcEwwcXNzbTMzTkQxTkYxY3BGbEhIK1hTNHY1dEJIMk0xU0RFYVI1VG4zZ1pnWE5vN0p5SU1TTG1VZUJlQlNNUWE3cXZZMlB5Y1Q3czlWMjdPL2ZVVlF0LzRxUXJ3TDBZOHlqR0dsemswSmo2eE11U2ZxMDBQQko1dkV2b1FLOWNpbW9Ga1JEd2tvRk1zdUFuaWgydUVkTm94TlFhTVhIc215RTZxNWljVnhxUmcwYU1iOFEwb25oVm8zMDFpYjJuSGlYSDBJaHB4SzdadUY4ZGdUajIxTko3eHBHakVidm1FdnRFa3JJa2NvNWF3eEZITWJXR0kzSitkUWd6Sy9HSWhLaDJlYy8zMUh2VU9jUUswa2lZM2dDZ09ua3N4WkZqTWFaWlRNNVI1WHpRMzJmN0JralRNbXVNN0Q5NGU1Ni85WHdDbXpqTFhHZ0pyVTJIbDJSRzFnamYvUHhuT1h6UG5RaXNvWCt2MXFSbEtxdm1nd2dKcjNMSktTejRyNk9JbldPL1R3OWcvcEtWU1ptUmFwUGQ0OGtienNWN0pmYWVZYnR1ei8zUHprZ1h1U1RvaGRZeW9FODd6OTE4SGlKUUNBUDY5bXhKaDU3c3VmUHFOVnYyRC9KVlk1Z0xXQlYxaXFVNitRcGd0WlhoNFc1SEp5M1ZXTlVZTWNDclFGK1FBMFVrQm13RFVxSklaZEdLTW9zN3lpeGEzc1h6TS8vTkE4L1BZdUhLQ2tGZ2NGNnAxQ09Xckt5d3RLUEM0bzR5Y3hjdTU3R1g1ekQ1bjI4VHVTUWtPd1huUFVzNktpeGVVV1pwUjVWL3ZidUk4Yy9NWVByYkh5UVpsUWhkdFFiZUs4czdxM3k0c3N6aUZXVmVtN2VRZTU5K2c5a0xsaEphUzUza1dwRnpmTGlpekpLT0NndVhkZkxrYSs4d1pkcmJXbTFFMlZiVVdGVUQ0RllqM0lDSWlXTHZiV2loNFlqZmZpcDdicXNrUDJKY3NvNVJWVndzR2sxZVNmR2s5c2NRaHFORXhraFlya1ZLMGgrV0pqc04yRUpJWWJYR1ZyVmFUMnFnekcrbjlVTytsRStXZEpCUUdMVnlEVmFMYm1rVlNiR1lTejhtR3kvaVdpT2RERmsyTEJCYVdnbzVmRnJIVmVvUjJvalhQRTVFYzhVOGdUV2lxcEVJb1NwVHJqdmlrOGRkL09pNzVBT1RWRW9vdFVsWHJEWXhQeUxGazhkbFU5S29WKzlFV3dJeHo0aklQcW9hV1dQQzFmS3Y1dmxaTnpHcnN1MTY4cEdzOVpvcHZhN2pGSnIrbzdsYlpWM0hwUmFYTmV5dE1SOXRHMnA2ejlWQm1ZYlhRejFValpGa2l3QlFtM2pGR2lldXRVQy8ycUVVV3dVRUwwYXNSY3JBaWFyNmpNQWdyeHFoWk5YZE9ray9WV1VkZnJiNVd3YmVKaCtYS0xmdUExZVRqS2RaZTJ3YWlVaW9xbTk1MVJQRVNGVVNOK0lBYXAxclgzdHRudURKc2NTa2NTamRDWWF5MEtrZW92QnlDa3FVSkVucGxvMDBGR1dLYklpYldZT0Eyb1RqTnNienJIV2Nrc0dUSmFjUktxR3FUblBLSVNLeVdOSjlrVUs2LysvSnNXdGRkNTBFU2pUcGNveEx5a2lUdkhMQUdtU1JjeHltNktQTnZVdW9rN1RhWEYrRy9KK1V6RjRrZVNXQVN5TnFxS0tQeHVoaEJqNFVzQWd1WGMyMHp2MlFzSUh0eFpXSHh1SWxveVRGSVZpeFV2NXh2dGV4d00zcDZpdXJ5Y1pSbXR2UDE2WitQMzdSckNaTWRqY3JFb2xnTlZuY2ZQUEZLNFllYTZDQ3BOTW5lYVRyM1VFTG01QmQ1MDhlaDAxMmE2QmdhalI4aVJ6YTNKQXV2VWxlWXZIL2FVTzZRbXErTkRla3ExRmwxWVowcVZMUW9oRTAzWkF1MUI5Y3Q2VmtzbEhHdzgxK0V2bjA0WWhKR2s4V0t4YXNJak5VNVUrSWZnSmxieEV4aURTMzlDY1J0Ym04YTZzQ2xPMXhrRldkQ1M4aUtzbExNZ1Q0Z3lLbkNrdzFvbFkwZ0N4Q0dXaHNaSmMrYk00VFhmMmxGN1pJS2E1WnI3aEFCSWNlTFhDZEN2dW0rYXBMcDVYSnJFWlRSYnJObW1kVzJDdzkwSVEzUWdDYnVyaHB3UGNDZUN5QzVLVVhydFVGUWVmSDg5S0wxU1YzMGxXRUVvRUtIaU1XRVlmNjZqL2ZwTGpmNE5IQXQwQVB6Q2FTZ2tQeENRRzJxajVPVzZMclhkcVcxSHJKTWFzaXJ5cmdFREdTdms4bXhlbEZrSnUrK09DTDkvenU1QU1Jd0RoUUkxNFJKZkloallrLzNDdzl1L2YwUmwxRE1XNFE0WW1OcGVpeGpjVVZsK3RiWXR1OHNLQ21Jd1ZPQTQ0VDZOZk1WQk54b0Q1MWpOTDhvZGs4YW81TVV5TEpweDNDVmRNK21VSWZBcE1WN2gzUUk1eTBvQ09pK2t5UjRpRlZXelc0SUZaQ2dXcll2UmZyYk5IY0w0NGNod3BvYkRER2c4VmVzZDFTTis3OVBnaUM5NzYzaUJ5TGNDVEl3YUNEZ1NCYi9iQ0dmRFNYVG8wa3NRZ0ZpRW5lV2ZVc3l0OVZkWXF4c2t3Vi9qQzhKMTk0WW9YVnlEalhDREVGaDVHWTZxU04rNUwxeVZaeGlya1RyaWJNMXlodHU0RE8rUU1SMUFxaTNudHYwbVpjUFZZYlduWUZob0xzQ3JyaGwzY0puU2l6Z05lQVdjQzB5TGxaK1RCd21pNWtORlpNd2hmaDJuZGRTSGxPWDZKS2pzYmtMWDk1MS84RGxuZXB4T3d1QnRrQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LERRbzhjM1puSUhkcFpIUm9QU0l5TkRraUlHaGxhV2RvZEQwaU1USXdJaUIyYVdWM1FtOTRQU0l3SURBZ01qUTVJREV5TUNJZ1ptbHNiRDBpYm05dVpTSWdlRzFzYm5NOUltaDBkSEE2THk5M2QzY3Vkek11YjNKbkx6SXdNREF2YzNabklqNE5DanhuSUc5d1lXTnBkSGs5SWpBdU5TSStEUW84Y0dGMGFDQmtQU0pOTVRjM0xqQTJOQ0F5T1M0NE9USXhRekU0TkM0MU1EUWdNalV1TXpJME9DQXhPVEl1T0RnNElESXlMalEzTlRFZ01qQXhMakk1TXlBeU1TNDJOams1UXpJd09DNDBOVGNnTWpBdU9UWTRNeUF5TVRVdU9UQXhJREl4TGpjME5UY2dNakl5TGprNUlESXpMamc1TVRkTU1qSXpMakl6TkNBeU1TNHdORFExUXpJeE5TNDROalFnTVRndU9URTJOQ0F5TURndU16WXhJREU0TGpFM05Ua2dNakF4TGpBeU9DQXhPQzQ0TnpjeFF6RTVNaTR5SURFNUxqY3pJREU0TXk0ME1UTWdNakl1TnpFek1TQXhOelV1TmpBMUlESTNMalV3TURkRE1UWTNMamM1TmlBek1pNHlPRGd6SURFMk1TNHhOeUF6T0M0M09EWXhJREUxTmk0ME1UWWdORFl1TWpnek5rTXhOVFV1TURjMElEUTRMak01TXpJZ01UVXpMamc1TlNBMU1DNDFOekkzSURFMU1pNDROalFnTlRJdU9EQTJPVU14TkRBdU5qZ3hJRFUyTGpReU1qUWdNVEk1TGpnMElEWXpMakV6TWprZ01URTVMamtnTmprdU9UUTROVU14TVRjdU5EYzVJRGN4TGpZd01Ua2dNVEUxTGpBek9DQTNNeTR6TWpNMUlERXhNaTQyT0RZZ056UXVPVGd5T1VNeE1EUXVNRGNnT0RFdU1ETXdOU0E1TlM0eE56RTNJRGczTGpJM056Y2dPRFV1TmpFek9DQTVNUzQ1TVRVMVF6YzBMamd6TURJZ09UY3VNVFEzT1NBMk1pNDNORGt6SURFd01DNHpPQ0ExTUM0Mk56TTRJREV3TVM0eU5qTkRNemd1TWpZd015QXhNREl1TVRjeklESTJMakl4T0RFZ01UQXdMamN3T0NBeE5DNDRPREF5SURrMkxqZzVOamxETVRBdU1qTXhOeUE1TlM0ek1qTTJJRFV1TnpFME9UVWdPVE11TXpVMU9TQXhMalF6TnpNMklEa3hMakEwTkRsTU1TNHhOemt5T0NBNU5DNHdOVGczUXpVdU16TXhNVEVnT1RZdU1qQTFJRGt1TlRjNU56RWdPVGd1TURNM09TQXhNeTQ1T1RneElEazVMalV5TVRWRE1qQXVPVEF6TnlBeE1ERXVPRFE0SURJNExqQTNOelVnTVRBekxqTXlPU0F6TlM0ME1EZ3pJREV3TXk0NU5UZEROREF1TkRnNU9DQXhNRFF1TXpreUlEUTFMalkyTWpZZ01UQTBMalF4TmlBMU1DNDRPRE00SURFd05DNHdNemRETmpNdU1qazNNaUF4TURNdU1USTRJRGMxTGpjek5Ua2dPVGt1TnprNU55QTROaTQ0TkRBMUlEazBMalF4TWpsRE9UWXVOVGc0TkNBNE9TNDJOemsxSURFd05TNDFPU0E0TXk0ek56RXhJREV4TkM0eU9ERWdOemN1TWpaRE1URTJMall6TXlBM05TNDJNREEzSURFeE9TNHdOek1nTnpNdU9Ea3lPU0F4TWpFdU5EYzVJRGN5TGpJMU1qSkRNVE13TGpZek1TQTJOUzQ1T0RRM0lERTBNQzQxTVRVZ05Ua3VPREl4T1NBeE5URXVORFUySURVMkxqRTRNemxETVRRNExqRTFNaUEyTkM0NE9ESTRJREUwTnk0eU55QTNOQzR3TkRFZ01UUTVMakEyT0NBNE1pNDBNelUxUXpFMU1DNHpPVFVnT0RndU5qWXlPU0F4TlRNdU16QTJJRGswTGpVeU1qUWdNVFUzTGpRM055QTVPUzR6T0RRMVF6RTJNUzQ0SURFd05DNDBNamdnTVRZM0xqRTVPQ0F4TURndU1ETTRJREUzTXk0eE1ERWdNVEE1TGpneE5rTXhOemt1TVRRZ01URXhMalkwT1NBeE9EVXVPRFl4SURFeE1TNHpPVGtnTVRreUxqQXpPQ0F4TURrdU1UVTRRekU1T0M0ek56WWdNVEEyTGpnME5pQXlNRE11TlRBNUlERXdNaTQxT1RrZ01qQTJMalV4TmlBNU55NHlNRFF6UXpJd09TNDRNemdnT1RFdU1qUTRPU0F5TVRBdU5Ua3hJRGd6TGpreU5qUWdNakE0TGpZek1TQTNOaTQxT1RVMFF6SXdOaTQzTnpjZ05qa3VOalkxTXlBeU1ESXVOVGMwSURZekxqSXhPVFVnTVRrM0xqQTRNeUExT0M0NU1ERTVRekU1TVM0M05qTWdOVFF1TnpJME9DQXhPRFV1TWprMUlEVXlMakF4TmpVZ01UYzNMamc1T0NBMU1DNDROalV6UXpFM01TNHlNRFFnTkRrdU9ERTJOU0F4TmpNdU9UUTJJRFV3TGpFek1qTWdNVFUyTGpreE1TQTFNUzQzTmpnelF6RTFOaTQzTlRRZ05URXVPREV3T0NBeE5UWXVOVGs0SURVeExqZ3pPVFFnTVRVMkxqUTBJRFV4TGpnNE1UbERNVFUzTGpFME5pQTFNQzQxTURFeklERTFOeTQ1TXpNZ05Ea3VNVFF4TnlBeE5UZ3VOemMwSURRM0xqZ3hORGRETVRZekxqTXdOQ0EwTUM0Mk5EYzNJREUyT1M0Mk1qUWdNelF1TkRVNU5TQXhOemN1TURZMElESTVMamc1TWpGYVRURTFOeTQxTXpNZ05UUXVORFkxT0VNeE5qUXVNakkySURVeUxqa3hNalFnTVRjeExqRXhPQ0ExTWk0Mk1qRXlJREUzTnk0ME5qWWdOVE11TmpFeU5VTXhPRFF1TXprMUlEVTBMalk1TlRVZ01Ua3dMalF4TnlBMU55NHlNVEU0SURFNU5TNHpOVGNnTmpFdU1Ea3dOVU15TURBdU16YzJJRFkxTGpBek1pQXlNRFF1TWpNMElEY3dMamswTkRVZ01qQTFMamt5TnlBM055NHpNREV6UXpJd055NDJPVFVnT0RNdU9UTXdNeUF5TURjdU1ETXpJRGt3TGpVeE9URWdNakEwTGpBM05DQTVOUzQ0TXpNNVF6RTVPQzQyTWlBeE1EVXVOak0ySURFNE5TNHpOVFlnTVRFd0xqWWdNVGN6TGpnNUlERXdOeTR4TkRKRE1UWTRMalV3TkNBeE1EVXVOVEU1SURFMk15NDFOVGdnTVRBeUxqSWdNVFU1TGpVM055QTVOeTQxTmpNM1F6RTFOUzQzTVRJZ09UTXVNRFE1TmlBeE5UTXVNREUxSURnM0xqWXlPRElnTVRVeExqYzNOU0E0TVM0NE5UVTRRekUwT1M0NU5EVWdOek11TXpRMk55QXhOVEV1TURnMUlEWXpMamswTkRrZ01UVTBMamczTkNBMU5TNHhORGMxUXpFMU5TNDNOak1nTlRRdU9EZzNPQ0F4TlRZdU5qUTVJRFUwTGpZMk9Ua2dNVFUzTGpVek15QTFOQzQwTmpVNFdpSWdabWxzYkQwaWQyaHBkR1VpTHo0TkNqeHdZWFJvSUdROUlrMHlORGtnTXpBdU16QTNUREl5TWk0ME5ERWdOaTR3TmpFMVRESXlNaTR3TlRRZ01UWXVOek0yTTB3eU5EQXVOalE0SURJMkxqZzNNMHd5TWpFdU9URXlJREl3TGpZM056Uk1Nakl4TGpreE1TQXlNQzQyT0RjMlRESXlNUzQ1TVRFZ01qQXVOamMxTkV3eU1UTXVOekV5SURJekxqTTNPVXd5TWpFdU5qazFJREkyTGpZMk1UVk1Nakl4TGpReU1TQXpOQzR5TkRRNVRESTBPU0F6TUM0ek1EZGFJaUJtYVd4c1BTSjNhR2wwWlNJdlBnMEtQQzluUGcwS1BDOXpkbWMrRFFvPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1cHBvcnQtdGVhbS02YjIxZTBjOWZlMDE3MDA5MTFkZTRkY2I5ZmJmN2VmNi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc3VwcG9ydC0zNTA0MGMxMmQ1N2NjN2FkNDc5MWRiZTAxYTdkNjk5Ny5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGVzdGltb25pYWwtNjlkMmU2MGU5NmNlY2Q3ZmQzNGJhZWIxNjIzNzQ1MzAucG5nXCI7IiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgSGVhZGluZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQnNQbHVzQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgeyBCYXNlQWNjb3JkaW9uIH0gZnJvbSAnLi9iYXNlLWFjY29yZGlvbic7XHJcbmltcG9ydCB7XHJcbiAgQWNjb3JkaW9uQnV0dG9uLFxyXG4gIEFjY29yZGlvbkl0ZW0sXHJcbiAgQWNjb3JkaW9uQ29udGVudHMsXHJcbiAgc2luZ2xlLFxyXG4gIHByZXZlbnRDbG9zZSxcclxuICBjb21iaW5lUmVkdWNlcnMsXHJcbn0gZnJvbSAnLi9zaGFyZWQnO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3JkaW9uKHsgaXRlbXMsIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJhc2VBY2NvcmRpb25cclxuICAgICAgc3RhdGVSZWR1Y2VyPXtjb21iaW5lUmVkdWNlcnMoc2luZ2xlLCBwcmV2ZW50Q2xvc2UpfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHsoeyBvcGVuSW5kZXhlcywgaGFuZGxlSXRlbUNsaWNrIH0pID0+IChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAge2l0ZW1zLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPEFjY29yZGlvbkl0ZW1cclxuICAgICAgICAgICAgICBrZXk9e2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgc3g9e3N0eWxlcy5hY2NvcmRpb259XHJcbiAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCkgPyAnaXMtb3BlbicgOiAnaXMtY2xvc2VkJ31cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25CdXR0b24gb25DbGljaz17KCkgPT4gaGFuZGxlSXRlbUNsaWNrKGluZGV4KX0+XHJcbiAgICAgICAgICAgICAgICA8SGVhZGluZyBhcz1cImg0XCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICAgICAgeyFvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCkgJiYgKFxyXG4gICAgICAgICAgICAgICAgICA8QnNQbHVzQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjI4cHhcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPXtyZ2JhKCcjMEYyMTM3JywgMC4zKX1cclxuICAgICAgICAgICAgICAgICAgICBzeD17c3R5bGVzLmFycm93fVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQ29udGVudHNcclxuICAgICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5jb250ZW50fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmNvbnRlbnRzfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQ29udGVudHM+XHJcbiAgICAgICAgICAgIDwvQWNjb3JkaW9uSXRlbT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgICApfVxyXG4gICAgPC9CYXNlQWNjb3JkaW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBhY2NvcmRpb246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGNkY4RkInLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIHA6IFsnMTVweCcsICcyMHB4IDMwcHgnLCAnMzBweCA0NXB4JywgJzIwcHggMjVweCcsICcyMHB4IDM1cHgnXSxcclxuICAgICcmLmlzLW9wZW4nOiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwcHggOXB4IDMwcHggcmdiYSg2OSwgODgsIDE1NywgMC4wOCknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGxldHRlclNwYWNpbmc6IFswLCBudWxsLCBudWxsLCBudWxsLCAnaGVhZGluZyddLFxyXG4gICAgbGluZUhlaWdodDogWzEuNSwgMS44XSxcclxuICB9LFxyXG4gIGFycm93OiB7XHJcbiAgICB3aWR0aDogWzIwLCBudWxsLCBudWxsLCAyNV0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jbGFzcyBCYXNlQWNjb3JkaW9uIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xyXG4gICAgc3RhdGVSZWR1Y2VyOiAoc3RhdGUsIGNoYW5nZXMpID0+IGNoYW5nZXMsXHJcbiAgICBvblN0YXRlQ2hhbmdlOiAoKSA9PiB7fSxcclxuICB9O1xyXG4gIHN0YXRlID0geyBvcGVuSW5kZXhlczogWzBdIH07XHJcbiAgZ2V0U3RhdGUoc3RhdGUgPSB0aGlzLnN0YXRlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBvcGVuSW5kZXhlczpcclxuICAgICAgICB0aGlzLnByb3BzLm9wZW5JbmRleGVzID09PSB1bmRlZmluZWRcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXNcclxuICAgICAgICAgIDogdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyxcclxuICAgIH07XHJcbiAgfVxyXG4gIGludGVybmFsU2V0U3RhdGUoY2hhbmdlcywgY2FsbGJhY2sgPSAoKSA9PiB7fSkge1xyXG4gICAgbGV0IGFsbENoYW5nZXM7XHJcbiAgICB0aGlzLnNldFN0YXRlKFxyXG4gICAgICAoc3RhdGUpID0+IHtcclxuICAgICAgICBjb25zdCBhY3R1YWxTdGF0ZSA9IHRoaXMuZ2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgIGNvbnN0IGNoYW5nZXNPYmplY3QgPVxyXG4gICAgICAgICAgdHlwZW9mIGNoYW5nZXMgPT09ICdmdW5jdGlvbicgPyBjaGFuZ2VzKGFjdHVhbFN0YXRlKSA6IGNoYW5nZXM7XHJcbiAgICAgICAgYWxsQ2hhbmdlcyA9IHRoaXMucHJvcHMuc3RhdGVSZWR1Y2VyKGFjdHVhbFN0YXRlLCBjaGFuZ2VzT2JqZWN0KTtcclxuICAgICAgICByZXR1cm4gYWxsQ2hhbmdlcztcclxuICAgICAgfSxcclxuICAgICAgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TdGF0ZUNoYW5nZShhbGxDaGFuZ2VzKTtcclxuICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gIH1cclxuICBoYW5kbGVJdGVtQ2xpY2sgPSAoaW5kZXgpID0+IHtcclxuICAgIHRoaXMuaW50ZXJuYWxTZXRTdGF0ZSgoc3RhdGUpID0+IHtcclxuICAgICAgY29uc3QgY2xvc2luZyA9IHN0YXRlLm9wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBjbG9zaW5nID8gJ2Nsb3NpbmcnIDogJ29wZW5pbmcnLFxyXG4gICAgICAgIG9wZW5JbmRleGVzOiBjbG9zaW5nXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzLmZpbHRlcigoaSkgPT4gaSAhPT0gaW5kZXgpXHJcbiAgICAgICAgICA6IFsuLi5zdGF0ZS5vcGVuSW5kZXhlcywgaW5kZXhdLFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICBjb25zb2xlLmxvZygnY2xpY2tlZCcpO1xyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIHRoaXMucHJvcHMuY2hpbGRyZW4oe1xyXG4gICAgICBvcGVuSW5kZXhlczogdGhpcy5nZXRTdGF0ZSgpLm9wZW5JbmRleGVzLFxyXG4gICAgICBoYW5kbGVJdGVtQ2xpY2s6IHRoaXMuaGFuZGxlSXRlbUNsaWNrLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgeyBCYXNlQWNjb3JkaW9uIH07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gJ2ZyYW1lci1tb3Rpb24nO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkJ1dHRvbiA9ICh7IGNoaWxkcmVuLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2IHN4PXtzdHlsZXMuYnV0dG9uVG9nZ2xlfSB7Li4ucmVzdH0+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYWNjb3JkaW9uSXRlbToge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgJysgLmFjY29yZGlvbi1pdGVtJzoge1xyXG4gICAgICBtdDogWzNdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvblRvZ2dsZToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgYWNjb3JkaW9uQ29udGVudDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgbGluZUhlaWdodDogMixcclxuICAgIG10OiBbNF0sXHJcbiAgfSxcclxufTtcclxuXHJcbmNvbnN0IHZhcmlhbnRzID0ge1xyXG4gIG9wZW46IHtcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luVG9wOiAxNixcclxuICB9LFxyXG4gIGNsb3NlZDogeyBoZWlnaHQ6IDAsIG1hcmdpblRvcDogMCB9LFxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEFjY29yZGlvbkNvbnRlbnRzKHsgaXNPcGVuLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxtb3Rpb24uZGl2XHJcbiAgICAgIGluaXRpYWw9XCJjbG9zZWRcIlxyXG4gICAgICBhbmltYXRlPXtpc09wZW4gPyAnb3BlbicgOiAnY2xvc2VkJ31cclxuICAgICAgdmFyaWFudHM9e3ZhcmlhbnRzfVxyXG4gICAgICBzeD17c3R5bGVzLmFjY29yZGlvbkNvbnRlbnR9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgIC8+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjY29yZGlvbkl0ZW0gPSAoeyBpc09wZW4sIGNoaWxkcmVuLCBjbGFzc05hbWUsIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXZcclxuICAgIGNsYXNzTmFtZT17YGFjY29yZGlvbi1pdGVtICR7Y2xhc3NOYW1lfWB9XHJcbiAgICBzeD17c3R5bGVzLmFjY29yZGlvbkl0ZW19XHJcbiAgICB7Li4ucmVzdH1cclxuICA+XHJcbiAgICB7Y2hpbGRyZW59XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgY29uc3QgcHJldmVudENsb3NlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIGNoYW5nZXMudHlwZSA9PT0gJ2Nsb3NpbmcnICYmIHN0YXRlLm9wZW5JbmRleGVzLmxlbmd0aCA8IDJcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogc3RhdGUub3BlbkluZGV4ZXMgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdvcGVuaW5nJ1xyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBjaGFuZ2VzLm9wZW5JbmRleGVzLnNsaWNlKC0xKSB9XHJcbiAgICA6IGNoYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3QgY29tYmluZVJlZHVjZXJzID0gKC4uLnJlZHVjZXJzKSA9PiAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgcmVkdWNlcnMucmVkdWNlKChhY2MsIHJlZHVjZXIpID0+IHJlZHVjZXIoc3RhdGUsIGFjYyksIGNoYW5nZXMpO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEZsZXgsIEltYWdlLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyBMaW5rLCBMZWFybk1vcmUgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSAnc2VydmljZXMvc2x1Z2lmeSc7XHJcblxyXG5jb25zdCBCbG9nUG9zdCA9ICh7IHBvc3QgfSkgPT4ge1xyXG4gIC8vIGNvbnN0IHNsdWcgPSBzbHVnaWZ5KHBvc3QubW5fdGl0dWxvKVxyXG4gIC8vIGNvbnN0IHNsdWcgPSBcInRlc3RlXCJcclxuICBjb25zdCBzbHVnID0gc2x1Z2lmeShwb3N0Lm1uX3RpdHVsbylcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhcnRpY2xlXCIgc3g9e3N0eWxlcy5wb3N0fT5cclxuICAgICAgPEZsZXggYXM9XCJmaWd1cmVcIiBzeD17c3R5bGVzLnRodW1ibmFpbH0+XHJcbiAgICAgICAgPEltYWdlIHNyYz17YGh0dHBzOi8vd3d3LmJhbGFtaW51dC5jb20uYnIvaW1nL25vdGljaWFzLyR7cG9zdC5tbl9pbWFnZW0xfWB9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PXtwb3N0Py5tbl90aXRsZX0gLz5cclxuICAgICAgPC9GbGV4PlxyXG5cclxuICAgICAgPEJveCBjbGFzc05hbWU9XCJjb250ZW50XCI+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgPExpbmsgcGF0aD17YG5vdGljaWFzLyR7c2x1Z31gfT57cG9zdD8ubW5fdGl0dWxvfTwvTGluaz5cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5leGNlcnB0fT5cclxuICAgICAgICAgIHtwb3N0Py5tbl9kZXNjcmljYW99XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxMZWFybk1vcmUgcGF0aD17YG5vdGljaWFzLyR7c2x1Z31gfSBsYWJlbD1cIkxlaWEgTWFpc1wiIHN4PXtzdHlsZXMubGVhcm5Nb3JlfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nUG9zdDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwb3N0OiB7XHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIDMsICd1bnNldCddLFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsOiB7XHJcbiAgICBtYjogWzRdLFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFsyLCBudWxsLCBudWxsLCAzLCAnMTdweCcsIDNdLFxyXG4gICAgbGluZUhlaWdodDogWzEuNSwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMS42OF0sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuMnB4JyxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBleGNlcnB0OiB7XHJcbiAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuODgsXHJcbiAgICBtdDogWzJdLFxyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgdGV4dE92ZXJmbG93OiAnZWxsaXBzaXMnLFxyXG4gICAgZGlzcGxheTogJy13ZWJraXQtYm94JyxcclxuICAgIFdlYmtpdExpbmVDbGFtcDogJzInLFxyXG4gICAgV2Via2l0Qm94T3JpZW50OiAndmVydGljYWwnIFxyXG4gIH0sXHJcbiAgbGVhcm5Nb3JlOiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsICcxNXB4J10sXHJcbiAgICBtdDogMixcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBGYXFJdGVtID0gKHsgZmFxLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhcnRpY2xlXCIgc3g9e3N0eWxlcz8uZmFxfSB7Li4ucHJvcHN9PlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCI+e2ZhcT8ucXVlc308L0hlYWRpbmc+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPntmYXE/LmFuc308L1RleHQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFxSXRlbTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmYXE6IHtcclxuICAgIGJvcmRlckJvdHRvbTogJzJweCBzb2xpZCAjMEYyMTM3JyxcclxuICAgIG1hcmdpbkJvdHRvbTogOCxcclxuICAgIG14OiBbbnVsbCwgbnVsbCwgbnVsbCwgNiwgOF0sXHJcbiAgICB3aWR0aDogW251bGwsIG51bGwsIG51bGwsICdjYWxjKDUwJSAtIDYwcHgpJywgJ2NhbGMoNTAlIC0gODBweCknXSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgZm9udFNpemU6IFsyLCBudWxsLCBudWxsLCAzXSxcclxuICAgICAgbGluZUhlaWdodDogMS42OCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgICBtYjogWzIsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbGluZUhlaWdodDogMixcclxuICAgICAgbWI6IDQsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSW1hZ2UsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBGZWF0dXJlID0gKHsgZGF0YSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuZmVhdHVyZX0gey4uLnByb3BzfT5cclxuICAgICAgPEJveCBhcz1cImZpZ3VyZVwiPlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2RhdGE/Lmljb259IGFsdD17ZGF0YT8udGl0bGV9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94PlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57ZGF0YT8udGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiPntkYXRhPy5kZXNjcmlwdGlvbn08L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZlYXR1cmU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZmVhdHVyZToge1xyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBmaWd1cmU6IHtcclxuICAgICAgbWluV2lkdGg6IFs3MF0sXHJcbiAgICAgIG1yOiBbJzMwcHgnXSxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjI4LFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgICBtYXJnaW5Cb3R0b206ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxNixcclxuICAgICAgbGluZUhlaWdodDogMS44OCxcclxuICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIG10OiBbM10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9NZENoZWNrbWFya0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgTGVhcm5Nb3JlLCBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJ3NlcnZpY2VzL3NsdWdpZnknO1xyXG5cclxuY29uc3QgUHJpY2VUYWJsZSA9ICh7IGl0ZW1zLCBpc1JlY29tbWVuZGVkLCB0aXRsZSwgc3VidGl0bGUsIGxpbmsgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94XHJcbiAgICAgIHN4PXtzdHlsZXMucHJpY2VUYWJsZX1cclxuICAgICAgY2xhc3NOYW1lPXtgJHtpc1JlY29tbWVuZGVkID8gJ3JlY29tbWVuZGVkJyA6ICcnfWB9XHJcbiAgICA+XHJcbiAgICAgIHsvKiB7cHJpY2UuaXNSZWNvbW1lbmRlZCAmJiAoXHJcbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgc3g9e3N0eWxlcy5yZWNvbUxhYmVsfT5cclxuICAgICAgICAgIEhpZ2hseSBSZWNvbW1lbmRlZFxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgKX0gKi99XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5oZWFkZXJ9IGNsYXNzTmFtZT1cInByaWNlSGVhZGVyXCI+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnN1YnRpdGxlfT5cclxuICAgICAgICAgIHtzdWJ0aXRsZX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgey8qIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMucHJpY2VBbW91bnR9PlxyXG4gICAgICAgICAgJHtwcmljZT8ucHJpY2V9XHJcbiAgICAgICAgICAvbW9cclxuICAgICAgICA8L1RleHQ+ICovfVxyXG4gICAgICAgIHsvKiA8QnV0dG9uIHN4PXtzdHlsZXMuYnV0dG9ufSB2YXJpYW50PVwidGV4dFwiPlxyXG4gICAgICAgICAge3ByaWNlLmJ1dHRvblRleHR9XHJcbiAgICAgICAgPC9CdXR0b24+ICovfVxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveCBhcz1cInVsXCIgc3g9e3N0eWxlcy5saXN0fT5cclxuICAgICAgICB7aXRlbXM/Lm1hcCgoaXRlbSwgaSkgPT4gKCAgICAgICAgICBcclxuICAgICAgICAgIDxsaSBrZXk9e2l9PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAge2lzUmVjb21tZW5kZWQgPyAoXHJcbiAgICAgICAgICAgICAgPExpbmsgcGF0aD17YG9icmlnYWNvZXMvJHtzbHVnaWZ5KGl0ZW0uTW5fVGl0dWxvKX1gfSBzeD17c3R5bGVzLmxpbmt9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxJb01kQ2hlY2ttYXJrQ2lyY2xlIHN4PXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0uTW5fVGl0dWxvfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8SW9NZENoZWNrbWFya0NpcmNsZSBzeD17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLm9icl9ub21lfTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8Lz5cclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgICAge2xpbmsgPyAoXHJcbiAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgIDxMZWFybk1vcmUgcGF0aD17bGlua30gbGFiZWw9XCJTYWliYSBNYWlzXCIgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSA6ICgnJyl9XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByaWNlVGFibGU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcHJpY2VUYWJsZToge1xyXG4gICAgYWxpZ25TZWxmOiAnYmFzZWxpbmUnLFxyXG4gICAgYmFja2dyb3VuZDogJ3doaXRlJyxcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6IFtcclxuICAgICAgJzIwcHggMTVweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICczMHB4IDI1cHgnLFxyXG4gICAgICAnMjVweCAzMHB4IDQwcHggMzBweCcsXHJcbiAgICAgICc0NXB4IDYwcHggNzBweCA0NXB4JyxcclxuICAgIF0sXHJcbiAgICBib3hTaGFkb3c6IFsnMHB4IDE1cHggNTBweCByZ2JhKDkxLCAxMzIsIDE5MywgMC4xKScsIG51bGwsIG51bGwsICdub25lJ10sXHJcbiAgICAnJi5yZWNvbW1lbmRlZCc6IHtcclxuICAgICAgYm94U2hhZG93OiBbbnVsbCwgbnVsbCwgbnVsbCwgJzBweCAxNXB4IDUwcHggcmdiYSg5MSwgMTMyLCAxOTMsIDAuMSknXSxcclxuICAgICAgYnV0dG9uOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcmVjb21MYWJlbDoge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFswLCAxXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMjksXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjNTJBQ0ZGJyxcclxuICAgIGJvcmRlclJhZGl1czogJzhweCA4cHggMHB4IDBweCcsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICB0b3A6ICctMzVweCcsXHJcbiAgICByaWdodDogMCxcclxuICAgIG1pbkhlaWdodDogWzMwLCAzNV0sXHJcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFsxLCAyLCAzXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMzEsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNTVweCcsXHJcbiAgfSxcclxuICBzdWJ0aXRsZToge1xyXG4gICAgY29sb3I6IHJnYmEoJyMzNDNENDgnLCAwLjY1KSxcclxuICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgMSwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjYyLFxyXG4gICAgbXQ6ICc4cHgnLFxyXG4gIH0sXHJcbiAgcHJpY2VBbW91bnQ6IHtcclxuICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBmb250U2l6ZTogWzEsIDIsIG51bGwsIDQsICcyNnB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICBtdDogWycxMnB4JywgbnVsbCwgbnVsbCwgJzI2cHgnXSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIG10OiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgbWF4V2lkdGg6IDM0MCxcclxuICAgIGxpOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgMSwgbnVsbCwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjIsXHJcbiAgICAgICcrIGxpICc6IHtcclxuICAgICAgICBtdDogWzMsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgICB9LFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBoZWlnaHQ6IFsxNywgbnVsbCwgbnVsbCwgbnVsbCwgMjNdLFxyXG4gICAgICAgIHdpZHRoOiBbMTcsIG51bGwsIG51bGwsIG51bGwsIDIzXSxcclxuICAgICAgfSxcclxuICAgICAgJ3NwYW46Zmlyc3Qtb2YtdHlwZSc6IHtcclxuICAgICAgICBtcjogJzEzcHgnLFxyXG4gICAgICAgIG10OiAnNXB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLnVuYXZhaWxhYmxlJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBib3JkZXI6IGAxLjVweCBzb2xpZCAke3JnYmEoJyM1QjJCOUQnLCAwLjE1KX1gLFxyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIG1pbkhlaWdodDogWzQwLCBudWxsLCBudWxsLCBudWxsLCA1MF0sXHJcbiAgICBwYWRkaW5nOiBbJzAgMjRweCcsIG51bGwsICcwIDMycHgnXSxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBtdDogWzMsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBsaW5rOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgfVxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBTZXJ2aWNlID0gKHsgY290YWNhbyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5zZXJ2aWNlfT5cclxuICAgICAgPFRleHQgYXM9XCJwXCI+e2NvdGFjYW8/LmNvdGRfbm9tZX08L1RleHQ+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPkNvbXByYTogPFRleHQgYXM9XCJzcGFuXCIgc3g9eyBzdHlsZXMucHJpY2UgfT5SJCB7Y290YWNhbz8uY290ZF9jb21wcmF9PC9UZXh0PjwvVGV4dD5cclxuICAgICAgPFRleHQgYXM9XCJwXCI+VmVuZGE6IDxUZXh0IGFzPVwic3BhblwiIHN4PXsgc3R5bGVzLnByaWNlIH0+eyBjb3RhY2FvPy5jb3RkX3ZlbmRhICE9PSAwID8gKGBSJCAke2NvdGFjYW8/LmNvdGRfdmVuZGF9YCkgOiAoJy0nKX08L1RleHQ+PC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2U7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VydmljZToge1xyXG4gICAgYm9yZGVyOiAodGhlbWUpID0+IGAxcHggc29saWQgJHt0aGVtZS5jb2xvcnMuYm9yZGVyQ29sb3J9YCxcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgbWluSGVpZ2h0OiBbMTA3LCBudWxsLCBudWxsLCAxMzBdLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBib3hTaGFkb3c6ICcwcHggMTFweCAzMHB4IHJnYmEoNTEsIDgzLCAxNDUsIDAuMDcpJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE3cHgnXSxcclxuICAgICAgbGluZUhlaWdodDogMS43NyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgJzE1cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDIsXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IHRlbGVmb25lIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvdGVsZWZvbmUucG5nJ1xyXG5pbXBvcnQgZW1haWwgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9lbWFpbC5wbmcnXHJcbmltcG9ydCBlbmRlcmVjbyBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2VuZGVyZWNvLnBuZydcclxuaW1wb3J0IGNpZGFkZSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2NpZGFkZS5wbmcnXHJcbmltcG9ydCBmYWNlYm9vayBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2ZhY2Vib29rLnBuZydcclxuaW1wb3J0IGluc3RhZ3JhbSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5wbmcnXHJcbmltcG9ydCBsaW5rZWRpbiBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2xpbmtlZGluLnBuZydcclxuaW1wb3J0IHdoYXRzYXBwIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvd2hhdHNhcHAucG5nJ1xyXG5cclxuZXhwb3J0IGNvbnN0IG1lbnVJdGVtcyA9IFtcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnQ29udGF0bycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RlbDo4ODM2NjkxMTQ2JyxcclxuICAgICAgICBpY29uOiB0ZWxlZm9uZSxcclxuICAgICAgICBsYWJlbDogJyg4OCkgMzY2OS0xMTQ2JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd0ZWw6ODgzNjY5MTU3NycsXHJcbiAgICAgICAgaWNvbjogdGVsZWZvbmUsXHJcbiAgICAgICAgbGFiZWw6ICcoODgpIDM2NjktMTU3NycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFpbHRvOmdlcmVuY2lhQHNlcnZjb24xLmNvbScsXHJcbiAgICAgICAgaWNvbjogZW1haWwsXHJcbiAgICAgICAgbGFiZWw6ICdnZXJlbmNpYUBzZXJ2Y29uMS5jb20nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vZy5wYWdlL3NlcnZjb25qaWpvY2E/c2hhcmUnLFxyXG4gICAgICAgIGljb246IGVuZGVyZWNvLFxyXG4gICAgICAgIGxhYmVsOiAnUnVhIDE3IGRlIE91dHVicm8sIDEzNDAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vZy5wYWdlL3NlcnZjb25qaWpvY2E/c2hhcmUnLFxyXG4gICAgICAgIGljb246IGNpZGFkZSxcclxuICAgICAgICBsYWJlbDogJ0ppam9jYSBkZSBKZXJpY29hY29hcmEgLSBDRScsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ1JlZGVzIFNvY2lhaXMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VydmNvbmppam9jYScsXHJcbiAgICAgICAgaWNvbjogZmFjZWJvb2ssXHJcbiAgICAgICAgbGFiZWw6ICdGYWNlYm9vaycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zZXJ2Y29uamlqb2NhLycsXHJcbiAgICAgICAgaWNvbjogaW5zdGFncmFtLFxyXG4gICAgICAgIGxhYmVsOiAnSW5zdGFncmFtJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL3dhLm1lLzU1ODg5OTY2ODY1MicsXHJcbiAgICAgICAgaWNvbjogd2hhdHNhcHAsXHJcbiAgICAgICAgbGFiZWw6ICdXaGF0c2FwcCcsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyTmF2ID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJyMhJyxcclxuICAgIGxhYmVsOiAnQWR2ZXJ0aXNlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ1N1cHBvcnRzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ01hcmtldGluZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdGQVEnLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCwgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IExvZ28gZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJ3NlY3Rpb25zL2NhbGwtdG8tYWN0aW9uJztcclxuaW1wb3J0IFdpZGdldCBmcm9tICcuL3dpZGdldCc7XHJcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4vZm9vdGVyLmRhdGEnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5cIiBhbmltYXRlT3V0PVwiZmFkZU91dFwiPlxyXG4gICAgICAgIDxDYWxsVG9BY3Rpb24gLz5cclxuICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgIDxCb3ggYXM9XCJmb290ZXJcIiBzeD17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXJUb3BJbm5lcn0+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5hYm91dH0+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9eyBMb2dvIH0gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJNb2RlbG8gQ29udGFiaWxpZGFkZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgey8qIDxCb3ggc3g9e3N0eWxlcy50ZXJtc30+XHJcbiAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiIyFcIj5UZXJtcyBvZiB1c2U8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIj58PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIiMhXCI+UHJpdmFjeTwvTGluaz5cclxuICAgICAgICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5jb3B5cmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgJmNvcHk7IENvcHlyaWdodCB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBwb3IgPFRleHQgYXM9XCJzcGFuXCIgY29sb3I9XCJzZWNvbmRhcnlcIj48YSBocmVmPVwiaHR0cHM6Ly90YnJ3ZWIuY29tLmJyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VEJyV2ViPC9hPjwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBpZCwgdGl0bGUsIGl0ZW1zIH0pID0+IChcclxuICAgICAgICAgICAgICA8V2lkZ2V0IGtleT17aWR9IHRpdGxlPXt0aXRsZX0gaXRlbXM9e2l0ZW1zfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIDEwXSxcclxuICAgIHBiOiBbOCwgbnVsbCwgbnVsbCwgMTVdLFxyXG4gIH0sXHJcbiAgZm9vdGVyVG9wSW5uZXI6IHtcclxuICAgIGdhcDogWzMwLCBudWxsLCA1MCwgJzIwcHggNTBweCcsIDE3LCA1MF0sXHJcbiAgICBkaXNwbGF5OiBbJ2dyaWQnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLCAxZnIpJyxcclxuICAgICAgJ3JlcGVhdCgzLCAxZnIpJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBmb290ZXJJbm5lcjoge1xyXG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICNEOUUwRTdgLFxyXG4gICAgZGlzcGxheTogWydibG9jaycsIG51bGwsICdmbGV4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwYWRkaW5nOiAnMzVweCAwIDQwcHgnLFxyXG4gIH0sXHJcbiAgYWJvdXQ6IHtcclxuICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCBudWxsLCAnZ3JpZCcsICdibG9jayddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzIwNXB4IDFmciAxZnInLFxyXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInXSxcclxuICAgIGdyaWRSb3c6IFsnMy80JywgbnVsbCwgJzEvMScsICczLzQnLCAndW5zZXQnXSxcclxuICAgIGdyaWRDb2x1bW46IFsnMS8zJywgbnVsbCwgJzEvMicsICcxLzUnLCAndW5zZXQnXSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGRpc3BsYXk6IFsnZmxleCddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICBncmlkQ29sdW1uOiAnMS8yJyxcclxuICB9LFxyXG4gIHRlcm1zOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGdyaWRDb2x1bW46ICczLzQnLFxyXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCcsICdjZW50ZXInXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsncm93JywgbnVsbCwgbnVsbCwgbnVsbCwgJ2NvbHVtbicsICdyb3cnXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbXHJcbiAgICAgICdjZW50ZXInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnZmxleC1zdGFydCcsXHJcbiAgICAgICdjZW50ZXInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnZmxleC1zdGFydCcsXHJcbiAgICBdLFxyXG4gICAgbXQ6IFs0LCBudWxsLCBudWxsLCAwLCA0XSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICBzcGFuOiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnaW5saW5lLWZsZXgnLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZScsICdpbmxpbmUtZmxleCddLFxyXG4gICAgICBtOiBbJzAgMTBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvcHlyaWdodDoge1xyXG4gICAgY29sb3I6IHJnYmEoJyMwRjIxMzcnLCAwLjYpLFxyXG4gICAgZm9udFNpemU6IFsnMTRweCddLFxyXG4gICAgbXQ6IFszLCBudWxsLCBudWxsLCAtMzEsIDNdLFxyXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsICd1bnNldCddLFxyXG4gICAgZ3JpZENvbHVtbjogJzIvMycsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnLCAnY2VudGVyJywgJ2xlZnQnXSxcclxuICAgIGE6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgJyY6dmlzaXRlZCc6IHtcclxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmNvbnN0IFdpZGdldCA9ICh7IHRpdGxlLCBpdGVtcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXJXaWRnZXR9PlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCI+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwsIGljb24gfSwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgIHtpY29uICYmIDxJbWFnZSBzcmM9e2ljb259IGFsdD17bGFiZWx9IC8+fVxyXG4gICAgICAgICAgICA8TGluayBwYXRoPXtwYXRofSBocmVmPXtwYXRoLnRvU3RyaW5nKCl9IHRhcmdldD1cIl9ibGFua1wiIGtleT17aX0gbGFiZWw9e2xhYmVsfSB2YXJpYW50PVwiZm9vdGVyXCIgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3RlcldpZGdldDoge1xyXG4gICAgaDM6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjgsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgbWFyZ2luOiAnMjhweCAwIDAnLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBsaToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIG1yOiAnMTVweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYToge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgICAgY29sb3I6IHJnYmEoJyMwMjA3M0UnLCAwLjgpLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDIuNSxcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBCYXIgPSAoeyBpc1N0aWNreSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUZXh0XHJcbiAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImJhclwiXHJcbiAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogaXNTdGlja3kgPyAndGV4dCcgOiAnd2hpdGUnIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBIYW1idXJnZXJNZW51ID0gKHsgaXNPcGVuLCBpc1N0aWNreSwgdG9nZ2xlTW9iaWxlTWVudSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHN4PXtzdHlsZXMuYnV0dG9ufVxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVNb2JpbGVNZW51fVxyXG4gICAgICBjbGFzc05hbWU9e2lzT3BlbiA/ICdvcGVuJyA6ICcnfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtbMSwgMiwgMywgNF0ubWFwKChiYXIsIGkpID0+IChcclxuICAgICAgICA8QmFyIGtleT17aX0gaXNTdGlja3k9e2lzU3RpY2t5fSAvPlxyXG4gICAgICApKX1cclxuICAgICAgPFRleHQgYXM9XCJzcGFuXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICBNZW51XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXJNZW51O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgcDogMCxcclxuICAgIHdpZHRoOiAyMCxcclxuICAgIGhlaWdodDogMTQsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXHJcbiAgICB0cmFuc2l0aW9uOiAnLjVzIGVhc2UtaW4tb3V0JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgb3V0bGluZTogMCxcclxuICAgIG1sOiBbNCwgbnVsbCwgNl0sXHJcbiAgICAnLmJhcic6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGhlaWdodDogJzJweCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOSxcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcclxuICAgICAgdHJhbnNpdGlvbjogJy4yNXMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAnOm50aC1vZi10eXBlKDEpJzoge1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgfSxcclxuICAgICAgJzpudGgtb2YtdHlwZSgyKSw6bnRoLW9mLXR5cGUoMyknOiB7XHJcbiAgICAgICAgdG9wOiAnNnB4JyxcclxuICAgICAgfSxcclxuICAgICAgJzpudGgtb2YtdHlwZSg0KSc6IHtcclxuICAgICAgICB0b3A6ICcxMnB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJi5vcGVuJzoge1xyXG4gICAgICAnLmJhcic6IHtcclxuICAgICAgICAnOm50aC1vZi10eXBlKDEpJzoge1xyXG4gICAgICAgICAgdG9wOiAnNnB4JyxcclxuICAgICAgICAgIHdpZHRoOiAnMCUnLFxyXG4gICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOm50aC1vZi10eXBlKDIpJzoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOm50aC1vZi10eXBlKDMpJzoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzpudGgtb2YtdHlwZSg0KSc6IHtcclxuICAgICAgICAgIHRvcDogJzZweCcsXHJcbiAgICAgICAgICB3aWR0aDogJzAlJyxcclxuICAgICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBwYXRoOiAnaG9tZScsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3F1ZW0tc29tb3MnLFxyXG4gICAgbGFiZWw6ICdRdWVtIHNvbW9zJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdzZXJ2aWNvcycsXHJcbiAgICBsYWJlbDogJ1NlcnZpw6dvcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnaW5mb3JtYWNvZXMnLFxyXG4gICAgbGFiZWw6ICdBdHVhbGl6ZS1zZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnY29udGF0bycsXHJcbiAgICBsYWJlbDogJ0NvbnRhdG8nLFxyXG4gIH0sXHJcbl07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGFiZWw6ICdRdWVtIHNvbW9zJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnU2VydmnDp29zJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnQXR1YWxpemUtc2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGFiZWw6ICdDb250YXRvJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEZsZXgsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSAnY29tcG9uZW50cy90b3BiYXInO1xyXG5pbXBvcnQgTG9ja0ljb24gZnJvbSAnY29tcG9uZW50cy9pY29ucy9sb2NrJztcclxuaW1wb3J0IEhhbWJ1cmdlck1lbnUgZnJvbSAnY29tcG9uZW50cy9oYW1idXJnZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGlzTW9iaWxlTWVudTogZmFsc2UsXHJcbiAgICBpc1N0aWNreTogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX0ZJWEVEXHJcbiAgICAgID8gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaXNTdGlja3k6IHRydWUgfSlcclxuICAgICAgOiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBpc1N0aWNreTogZmFsc2UgfSk7XHJcbiAgfTtcclxuICBjb25zdCB0b2dnbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoKHByZXYpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIGlzTW9iaWxlTWVudTogIXByZXYuaXNNb2JpbGVNZW51LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBpc01vYmlsZU1lbnU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFRvcEJhciAvPlxyXG4gICAgICA8U3RpY2t5XHJcbiAgICAgICAgZW5hYmxlZD17dHJ1ZX1cclxuICAgICAgICB0b3A9ezB9XHJcbiAgICAgICAgYWN0aXZlQ2xhc3M9XCJpcy1zdGlja3lcIlxyXG4gICAgICAgIGlubmVyWj17MTAwfVxyXG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgYXM9XCJoZWFkZXJcIlxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmlzU3RpY2t5ID8gJ2lzLXN0aWNreScgOiAnJ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPExvZ28gc3g9e3N0eWxlcy5sb2dvfSBpc1N0aWNreT17c3RhdGUuaXNTdGlja3l9IC8+XHJcbiAgICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJcclxuICAgICAgICAgICAgICAgIGlzU3RpY2t5PXtzdGF0ZS5pc1N0aWNreX1cclxuICAgICAgICAgICAgICAgIGlzTW9iaWxlPXtzdGF0ZS5pc01vYmlsZU1lbnV9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZU1lbnU9e2hhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgICA8SGFtYnVyZ2VyTWVudVxyXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuaGFtYnVyZ2VyfVxyXG4gICAgICAgICAgICAgIGlzU3RpY2t5PXtzdGF0ZS5pc1N0aWNreX1cclxuICAgICAgICAgICAgICBpc09wZW49e3N0YXRlLmlzTW9iaWxlTWVudX1cclxuICAgICAgICAgICAgICB0b2dnbGVNb2JpbGVNZW51PXt0b2dnbGVNb2JpbGVNZW51fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU3RpY2t5PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHB5OiA0LFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcclxuICAgICcmLmlzLXN0aWNreSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDZweCAxM3B4IHJnYmEoMzgsNzgsMTE4LDAuMSknLFxyXG4gICAgICBwYWRkaW5nVG9wOiAnMTVweCcsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICAnJi5pcy1tb2JpbGUtbWVudSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCA2LCBudWxsLCAxMl0sXHJcbiAgfSxcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ2luOiB7XHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnZmxleCddLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBwOiAwLFxyXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIHN2Zzoge1xyXG4gICAgICBtcjogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBqb2luQ29tbXVuaXR5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBtaW5IZWlnaHQ6IFszMCwgbnVsbCwgbnVsbCwgNDBdLFxyXG4gICAgcDogWycwIDEycHgnLCBudWxsLCBudWxsLCAnMCAxNHB4J10sXHJcbiAgICBmb250U2l6ZTogWycxMHB4JywgbnVsbCwgbnVsbCwgMV0sXHJcbiAgfSxcclxuICBoYW1idXJnZXI6IHtcclxuICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcbmltcG9ydCBtZW51SXRlbXNQYWdlcyBmcm9tICcuL2hlYWRlci5kYXRhLnBhZ2VzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGlzU3RpY2t5LCBpc01vYmlsZSwgaGFuZGxlQ2xvc2VNZW51IH0pID0+IHtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICBzeD17c3R5bGVzLm5hdmJhcn1cclxuICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyJHtpc01vYmlsZSA/ICcgaXMtbW9iaWxlJyA6ICcnfSR7XHJcbiAgICAgICAgaXNTdGlja3kgPyAnIGlzLXN0aWNreScgOiAnJ1xyXG4gICAgICB9YH1cclxuICAgID5cclxuICAgICAge2FzUGF0aCA9PT0gJy8nID8gKFxyXG4gICAgICAgIG1lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmsga2V5PXtpfSBwYXRoPXtwYXRofSBsYWJlbD17bGFiZWx9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVudX0gLz5cclxuICAgICAgICApKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIG1lbnVJdGVtc1BhZ2VzLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICA8TGluayBrZXk9e2l9IHBhdGg9e3BhdGh9IGxhYmVsPXtsYWJlbH0gb25DbGljaz17aGFuZGxlQ2xvc2VNZW51fSAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIG5hdmJhcjoge1xyXG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxyXG4gICAgZmxleEdyb3c6IFtudWxsLCBudWxsLCBudWxsLCAxXSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnKyBhJzoge1xyXG4gICAgICAgIG1sOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDExcHggMzBweCByZ2JhKDUxLCA4MywgMTQ1LCAwLjA3KScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogNzAsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCAwJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuM3MgZWFzZSAwcycsXHJcbiAgICAgICcmLmlzLXN0aWNreSc6IHtcclxuICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2YzZjNmMycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmLmlzLW1vYmlsZSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxyXG4gICAgICB9LFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgJysgYSc6IHtcclxuICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZjNmM2YzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmLmlzLXN0aWNreSc6IHtcclxuICAgICAgdG9wOiA2MCxcclxuICAgICAgYToge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2NrKHsgZmlsbCwgd2lkdGgsIGhlaWdodCwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPXt3aWR0aCA/PyAxNn1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHQgPz8gMjB9XHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMjBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTE1LjE1NiAxNi44OTN2LTYuODExYTIuMjM3IDIuMjM3IDAgMDAtMi4yMzItMi4yMzNoLS41NjJWNC43MDdBNC43MTMgNC43MTMgMCAwMDcuNjU0IDBhNC43MTIgNC43MTIgMCAwMC00LjcwMyA0LjcwN3YuNTQzYzAgLjM3LjMuNjY3LjY2Ny42NjcuMzY3IDAgLjY3Mi0uMy42NzItLjY2N3YtLjU0M0EzLjM3MiAzLjM3MiAwIDAxNy42NTggMS4zNGEzLjM3MiAzLjM3MiAwIDAxMy4zNjkgMy4zNjhWNy44NUgyLjM4OWMtMS4yMyAwLTIuMjMzIDEtMi4yMzMgMi4yMzN2Ni44MTFhMi4yMzcgMi4yMzcgMCAwMDIuMjMzIDIuMjMzaDEwLjUzOGEyLjIzNiAyLjIzNiAwIDAwMi4yMy0yLjIzM3ptLTEzLjY1NyAwdi02LjgxMWMwLS40OTIuNDAyLS44OTQuODk0LS44OTRoMTAuNTM1Yy40OTEgMCAuODkzLjQwMi44OTMuODk0djYuODExYS44OTYuODk2IDAgMDEtLjg5My44OTRIMi4zODhhLjg5NS44OTUgMCAwMS0uODg5LS44OTR6XCJcclxuICAgICAgICBmaWxsPXtmaWxsID8/ICcjZmZmJ31cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTcuNjU3IDExLjk5YS42Ny42NyAwIDAwLS42NzIuNjY4djEuNzNjMCAuMzcuMy42NjcuNjcyLjY2Ny4zNyAwIC42NjctLjMuNjY3LS42Njh2LTEuNzI5YS42NjcuNjY3IDAgMDAtLjY2Ny0uNjY3elwiXHJcbiAgICAgICAgZmlsbD17ZmlsbCA/PyAnI2ZmZid9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NrO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9nbyA9ICh7IHdoaXRlLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxODUuOTIgMzYuNjJcIiB3aWR0aD17MTg1LjkyfSBoZWlnaHQ9ezM2LjYyfSB7Li4ucHJvcHN9PlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19iXCJcclxuICAgICAgICAgIHgxPXsxNi4wOH1cclxuICAgICAgICAgIHkxPXstMTYuNTJ9XHJcbiAgICAgICAgICB4Mj17MTAuMjZ9XHJcbiAgICAgICAgICB5Mj17MjAuNDR9XHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzAwOTZkOVwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwMGMxOThcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fY1wiXHJcbiAgICAgICAgICB4MT17OC45NX1cclxuICAgICAgICAgIHkxPXsxMy40OH1cclxuICAgICAgICAgIHgyPXsxOC4yOH1cclxuICAgICAgICAgIHkyPXszMi4wMn1cclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjMDAyZGQ5XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzAwYjJhYlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19hXCJcclxuICAgICAgICAgIHgxPXsyMy4zM31cclxuICAgICAgICAgIHkxPXstMy4zOX1cclxuICAgICAgICAgIHgyPXs1LjY2fVxyXG4gICAgICAgICAgeTI9ezM3LjY1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiMzNDgyYzBcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjQ1fSBzdG9wQ29sb3I9XCIjOTZiZWRlXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44M30gc3RvcENvbG9yPVwiI2UxZWRmNlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNmZmZcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fZFwiXHJcbiAgICAgICAgICB4MT17MjEuNjR9XHJcbiAgICAgICAgICB5MT17MS40Mn1cclxuICAgICAgICAgIHgyPXs2LjYzfVxyXG4gICAgICAgICAgeTI9ezMwLjQ0fVxyXG4gICAgICAgICAgeGxpbmtIcmVmPVwiI3ByZWZpeF9fYVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19lXCJcclxuICAgICAgICAgIHgxPXsyNS4xNX1cclxuICAgICAgICAgIHkxPXszLjI0fVxyXG4gICAgICAgICAgeDI9ezEwLjE0fVxyXG4gICAgICAgICAgeTI9ezMyLjI1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiM1NjlmYTFcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjM2fSBzdG9wQ29sb3I9XCIjOTdjNGM1XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44fSBzdG9wQ29sb3I9XCIjZTJlZWVmXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8cmFkaWFsR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19mXCJcclxuICAgICAgICAgIGN4PXsyMS4xNn1cclxuICAgICAgICAgIGN5PXszMi4wNX1cclxuICAgICAgICAgIHI9ezI3LjI1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiNmZjBcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSAvPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGcgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIkxheWVyIDFcIj5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMzkuNjQgMjIuOWgyLjg1YTEuODYgMS44NiAwIDAwLjkgMS40IDMuNjcgMy42NyAwIDAwMiAuNTMgMy4zMyAzLjMzIDAgMDAxLjktLjVBMS41IDEuNSAwIDAwNDggMjNhMS4zMiAxLjMyIDAgMDAtLjU0LTEuMSA0LjkxIDQuOTEgMCAwMC0xLjgzLS43MWwtMS44NC0uNFE0MCAyMCA0MCAxNi45YTMuODEgMy44MSAwIDAxMS41LTMuMTMgNi4xNCA2LjE0IDAgMDEzLjg5LTEuMTkgNi4wNyA2LjA3IDAgMDEzLjg5IDEuMTYgMy44NiAzLjg2IDAgMDExLjUgMy4wOEg0OGExLjc3IDEuNzcgMCAwMC0uNzktMS40IDMgMyAwIDAwLTEuODItLjUyIDMgMyAwIDAwLTEuNzcuNDggMS40OSAxLjQ5IDAgMDAtLjY2IDEuMjYgMS4yNSAxLjI1IDAgMDAuNTMgMS4wNSA1LjI5IDUuMjkgMCAwMDEuNzcuNjhsMS43MS4zNkE2LjE4IDYuMTggMCAwMTUwIDIwLjE0YTMuNDIgMy40MiAwIDAxMSAyLjU2IDMuOTMgMy45MyAwIDAxLTEuNTUgMy4zIDYuNjMgNi42MyAwIDAxLTQuMTcgMS4yIDYuNjUgNi42NSAwIDAxLTQuMDYtMS4yIDMuOSAzLjkgMCAwMS0xLjU4LTMuMXpNNTMuMzMgMTRoMi44NXYyLjQyaDEuOTN2Mi4xOGgtMS45M3Y1YzAgLjc4LjQxIDEuMTggMS4yMyAxLjE4YTQuNDQgNC40NCAwIDAwLjY5LS4wNXYyLjFhNi4xMiA2LjEyIDAgMDEtMS4zNi4xMSA0LjEgNC4xIDAgMDEtMi42My0uNjYgMi43NCAyLjc0IDAgMDEtLjc4LTIuMlYxOC42aC0xLjQ4di0yLjE1aDEuNDh6bTEwLjI5IDExYTIuMzkgMi4zOSAwIDAwMS42LS41NSAxLjc0IDEuNzQgMCAwMC42Ni0xLjM5di0uNzZsLTIuMi4xM2EyLjMgMi4zIDAgMDAtMS4yNC40IDEuMDkgMS4wOSAwIDAwLS40My45IDEuMSAxLjEgMCAwMC40NC45MyAxLjgzIDEuODMgMCAwMDEuMTcuMzR6bS0uOTQgMi4wNmEzLjYgMy42IDAgMDEtMi41MS0uODkgMi45MiAyLjkyIDAgMDEtMS0yLjI4IDIuNjggMi42OCAwIDAxMS0yLjI0IDUuNDMgNS40MyAwIDAxMy0uOTNsMi42My0uMTV2LS43YTEuNCAxLjQgMCAwMC0uNDctMS4xMyAxLjkxIDEuOTEgMCAwMC0xLjI4LS40MSAyLjIgMi4yIDAgMDAtMS4yOC4zNSAxLjQ0IDEuNDQgMCAwMC0uNi45NWgtMi41M0EzLjIxIDMuMjEgMCAwMTYxIDE3LjE3YTUuMzEgNS4zMSAwIDAxMy4yOS0xIDUuMDUgNS4wNSAwIDAxMy4yMyAxIDMuMDkgMy4wOSAwIDAxMS4yMSAyLjU0djcuMmgtMi44di0xLjZoLS4wNmEzLjA4IDMuMDggMCAwMS0xLjMgMS4zIDMuODkgMy44OSAwIDAxLTEuODkuNDd6bTcuODUtLjE2VjE2LjQ1aDIuNzZ2MS44OGguMDZhMi44NiAyLjg2IDAgMDEuOTEtMS41MiAyLjQzIDIuNDMgMCAwMTEuNTgtLjUzIDIuODggMi44OCAwIDAxLjgxLjExdjIuNTFhMi43OSAyLjc5IDAgMDAtMS0uMTcgMi4xNiAyLjE2IDAgMDAtMS42NC42MiAyLjM5IDIuMzkgMCAwMC0uNTkgMS43MnY1Ljg1em04LTEyLjg5aDIuODV2Mi40MmgxLjk0djIuMTdoLTEuODl2NWMwIC43OC40MSAxLjE4IDEuMjMgMS4xOGE0LjY4IDQuNjggMCAwMC43LS4wNXYyLjFBNi4yNCA2LjI0IDAgMDE4MiAyN2E0LjE1IDQuMTUgMCAwMS0yLjY0LS42NiAyLjc0IDIuNzQgMCAwMS0uNzgtMi4yVjE4LjZoLTEuNDd2LTIuMTVoMS40N3ptMTYgMi40MnYxMC40OWgtMi42OVYyNWgtLjA2YTMuMDcgMy4wNyAwIDAxLTMuMTMgMi4wOCAzLjcxIDMuNzEgMCAwMS0yLjc1LTEgNCA0IDAgMDEtMS0yLjg3di02Ljc2aDIuODV2Ni4xNWEyLjI4IDIuMjggMCAwMC41IDEuNTkgMS44NiAxLjg2IDAgMDAxLjQ1LjU1IDEuOSAxLjkgMCAwMDEuNTEtLjYzIDIuNCAyLjQgMCAwMC41NS0xLjY3di02em04LS4xN2EzLjc5IDMuNzkgMCAwMTMuMTQgMS40NCA2LjE0IDYuMTQgMCAwMTEuMTUgNCA2LjMzIDYuMzMgMCAwMS0xLjEzIDQgNC4xIDQuMSAwIDAxLTUuMDkuOTIgMy4xNSAzLjE1IDAgMDEtMS4yNy0xLjQxaC0uMDN2NS4xN2gtMi44NVYxNi40NWgyLjgxdjEuODJoLjA2YTMuMzUgMy4zNSAwIDAxMS4yNy0xLjQ2IDMuNyAzLjcgMCAwMTEuOTctLjUzem0tMSA4LjUxYTIgMiAwIDAwMS43Ny0uNzcgMy43MSAzLjcxIDAgMDAuNjMtMi4yNyAzLjY3IDMuNjcgMCAwMC0uNjMtMi4yNiAyIDIgMCAwMC0xLjY5LS44NSAyIDIgMCAwMC0xLjY4Ljg2IDMuNiAzLjYgMCAwMC0uNjQgMi4yNSAzLjczIDMuNzMgMCAwMC42MyAyLjI3IDIgMiAwIDAwMS42OS43OXptMjIuMDctLjMydjIuNDVoLTkuMTFWMTIuODJoM3YxMS42NXptNS41NS41NWEyLjM5IDIuMzkgMCAwMDEuNi0uNTUgMS43NCAxLjc0IDAgMDAuNjYtMS4zOXYtLjc2bC0yLjIuMTNhMi4zIDIuMyAwIDAwLTEuMjQuNCAxLjA5IDEuMDkgMCAwMC0uNDMuOSAxLjEgMS4xIDAgMDAuNDQuOTMgMS44MyAxLjgzIDAgMDAxLjI1LjM0em0tLjk0IDIuMDZhMy41OSAzLjU5IDAgMDEtMi41MS0uODkgMi45MiAyLjkyIDAgMDEtMS0yLjI4IDIuNjggMi42OCAwIDAxMS0yLjI0IDUuNDMgNS40MyAwIDAxMy0uOTNsMi42My0uMTV2LS43YTEuNDMgMS40MyAwIDAwLS40Ny0xLjEzIDEuOTEgMS45MSAwIDAwLTEuMjgtLjQxIDIuMTggMi4xOCAwIDAwLTEuMjguMzUgMS40NCAxLjQ0IDAgMDAtLjYuOTVoLTIuNjFhMy4yMSAzLjIxIDAgMDExLjMyLTIuNDggNS4zMSA1LjMxIDAgMDEzLjI5LTEgNS4wNyA1LjA3IDAgMDEzLjIzIDEgMy4wOSAzLjA5IDAgMDExLjIxIDIuNTR2Ny4yaC0yLjc2di0xLjU4aC0uMDZhMy4wOCAzLjA4IDAgMDEtMS4zIDEuMyAzLjg5IDMuODkgMCAwMS0xLjczLjQ3em03Ljg1LS4xNlYxNi40NWgyLjc2djEuODZoLjE4YTMuMjYgMy4yNiAwIDAxMS4yNS0xLjUyIDMuNiAzLjYgMCAwMTItLjU0IDMuNDYgMy40NiAwIDAxMi42OCAxIDQuMTIgNC4xMiAwIDAxMSAyLjg4djYuNzVIMTQzdi02LjEyYTIuMzEgMi4zMSAwIDAwLS40OS0xLjU5IDEuODMgMS44MyAwIDAwLTEuNDQtLjU1IDIgMiAwIDAwLTEuNTIuNjMgMi4zOSAyLjM5IDAgMDAtLjU3IDEuNjZ2NnptMTUuNDEuMTZhMy43NSAzLjc1IDAgMDEtMy4xMS0xLjQ1IDYuMjEgNi4yMSAwIDAxLTEuMTUtNCA2LjExIDYuMTEgMCAwMTEuMTUtMy45MyAzLjc5IDMuNzkgMCAwMTMuMTMtMS40NSAzLjUzIDMuNTMgMCAwMTIgLjU0IDMuMTcgMy4xNyAwIDAxMS4yNSAxLjQydi01LjM3aDIuODZ2MTQuMWgtMi44MnYtMS44aC0uMDVhMy4wOSAzLjA5IDAgMDEtMS4yNiAxLjQyIDMuNjcgMy42NyAwIDAxLTEuOTIuNTR6bTEtOC41MWEyIDIgMCAwMC0xLjcuODQgMy43NSAzLjc1IDAgMDAtLjYxIDIuMjcgMy43NiAzLjc2IDAgMDAuNjEgMi4yOCAyLjE1IDIuMTUgMCAwMDMuMzkgMCAzLjcyIDMuNzIgMCAwMC42My0yLjI4IDMuNjcgMy42NyAwIDAwLS42My0yLjI2IDIgMiAwIDAwLTEuNjQtLjgzem03LjExIDguMzVWMTYuNDVoMi44NXYxMC40N3ptMi41MS0xMi4wNWExLjUyIDEuNTIgMCAwMS0xLjA5LjQyIDEuNDkgMS40OSAwIDAxLTEuMDgtLjQyIDEuNDQgMS40NCAwIDAxLS40NC0xIDEuMzggMS4zOCAwIDAxLjQ0LTEgMS40NiAxLjQ2IDAgMDExLjA4LS40MyAxLjQ5IDEuNDkgMCAwMTEuMDkuNDMgMS4zOCAxLjM4IDAgMDEuNDQgMSAxLjQ0IDEuNDQgMCAwMS0uMzkgMS4wMnptMi4yNCAxMi4wNVYxNi40NWgyLjc2djEuODZoLjA2YTMuMjYgMy4yNiAwIDAxMS4yNS0xLjUyIDMuNiAzLjYgMCAwMTItLjU0IDMuNDQgMy40NCAwIDAxMi42OCAxIDQuMDcgNC4wNyAwIDAxLjk1IDIuODh2Ni43NWgtMi44NXYtNi4xMmEyLjMxIDIuMzEgMCAwMC0uNDktMS41OSAxLjc5IDEuNzkgMCAwMC0xLjQzLS41NSAyIDIgMCAwMC0xLjUzLjYzIDIuNDMgMi40MyAwIDAwLS41NiAxLjY2djZ6bTE2LjM2LTIuMjNhMi4wNSAyLjA1IDAgMDAxLjctLjggMy40OCAzLjQ4IDAgMDAuNjQtMi4yMyAzLjYgMy42IDAgMDAtLjY0LTIuMjUgMiAyIDAgMDAtMS43LS44NCAyIDIgMCAwMC0xLjY4Ljg0IDMuNjkgMy42OSAwIDAwLS42MSAyLjI1IDMuNiAzLjYgMCAwMC42MSAyLjIzIDIgMiAwIDAwMS43My44MnptLS4wNSA2LjE3YTUuODQgNS44NCAwIDAxLTMuMzYtLjkgMy4xOSAzLjE5IDAgMDEtMS40OC0yLjNoMi43OWExLjU0IDEuNTQgMCAwMC43NC44OCAyLjggMi44IDAgMDAxLjM5LjM0IDIuNDEgMi40MSAwIDAwMS42OS0uNTYgMS44NSAxLjg1IDAgMDAuNjEtMS40N1YyNUgxODNhMyAzIDAgMDEtMS4yNCAxLjM3IDMuODkgMy44OSAwIDAxLTIgLjUxIDMuOCAzLjggMCAwMS0zLjA5LTEuNDEgNS44OCA1Ljg4IDAgMDEtMS4xNS0zLjg0IDYuMDYgNi4wNiAwIDAxMS4xNS0zLjkyIDMuODIgMy44MiAwIDAxMy4xNC0xLjQ0IDMuNTkgMy41OSAwIDAxMiAuNTQgMy4zNyAzLjM3IDAgMDExLjI3IDEuNDV2LTEuODFoMi44MnYxMC4zMmEzLjU4IDMuNTggMCAwMS0xLjQ0IDMgNiA2IDAgMDEtMy43NyAxLjA5elwiXHJcbiAgICAgICAgICAgIGZpbGw9e3doaXRlID8gJ3doaXRlJyA6ICcjMGYyMTM3J31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTE5LjguNTNBMTUuNzMgMTUuNzMgMCAwMDQuNjUgMjYuODlMMjIuMTcgOS4zN0E1LjI5IDUuMjkgMCAwMDE5LjguNTN6XCJcclxuICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19iKVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk02LjY1IDM2LjA5QTE1LjczIDE1LjczIDAgMDAyMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODR6XCJcclxuICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19jKVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0yMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODQgMTUuNzIgMTUuNzIgMCAwMDUuNzUuNDRjLTcuNjgtNy4zOSA5LjQxLTI2LjggOS40MS0yNi44elwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNwcmVmaXhfX2EpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Z1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTYuMzMgMzZjLTIuNDktNy43IDEyLjQ1LTIzLjIxIDE1LjA5LTI1Ljg3TDQuMjkgMjcuMjVBNS4yOCA1LjI4IDAgMDA2LjMzIDM2elwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19kKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuNzUgOS43OWwuMDYtLjA2elwiIGZpbGw9XCJ1cmwoI3ByZWZpeF9fZSlcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0yMy40NSA3LjI5TDQuNjQgMjYuODggMjIuMTcgOS4zN2E1LjE0IDUuMTQgMCAwMDEuMjgtMi4wOHpcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ3NjcmVlbicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3ByZWZpeF9fZilcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSBhcyBJbWcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIDxJbWcgc3JjPXtzcmN9IHsuLi5yZXN0fSAvPjtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyL2Zvb3Rlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExncGQoKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKClcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgYWNlaXRlTGdwZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjZWl0ZUxncGQnKVxyXG4gICAgYWNlaXRlTGdwZCA9PSBudWxsID8gc2V0SXNPcGVuKHRydWUpIDogc2V0SXNPcGVuKGZhbHNlKVxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTGdwZCgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FjZWl0ZUxncGQnLCB0cnVlKVxyXG4gICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGlzT3BlbiA/IChcclxuICAgICAgPGRpdiBzeD17IHN0eWxlcy5jb29raWVQb3B1cH0+XHJcbiAgICAgICAgPHA+RXN0ZSBzaXRlIG7Do28gdXRpbGl6YSBjb29raWVzIGUgbsOjbyBjYXB0dXJhIGRhZG9zLjwvcD5cclxuICAgICAgICA8ZGl2IHN4PXsgc3R5bGVzLmNvb2tpZVBvcHVwQWN0aW9ucyB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZUxncGR9Pk9rLCBlbnRlbmRpITwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb29raWVQb3B1cCA6IHtcclxuICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGJvdHRvbTogJzEuMjVyZW0nLFxyXG4gICAgcGFkZGluZzogJzAuNjI1cmVtIDAuOTM3NXJlbScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDAgMC42MjVyZW0gMCByZ2JhKDAsMCwwLCAuMTUpJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxNTAlJyxcclxuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IC41cycsXHJcbiAgICBvcGFjaXR5OiAnMScsXHJcbiAgICB6SW5kZXg6ICcyJyxcclxuICAgIHJpZ2h0OiAnNCUnLFxyXG4gICAgd2lkdGg6ICc5MiUnLFxyXG4gICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICdza3libHVlJyxcclxuICAgICAgJyY6dmlzaXRlZCc6IHtcclxuICAgICAgICBjb2xvcjogJ3NreWJsdWUnLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvb2tpZVBvcHVwQWN0aW9uczoge1xyXG4gICAgZmxleDogJzEnLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgICAgZm9udFN0eWxlOiAnaW5oZXJpdCcsXHJcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRTaXplOiAgJzAuNzVyZW0nLFxyXG4gICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGpzeCwgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIGFzIE1lbnVMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudUxpbmtcclxuICAgICAgdG89e3BhdGh9XHJcbiAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIlxyXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7bGFiZWx9XHJcbiAgICA8L01lbnVMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICA8QSB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L0E+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZWFybk1vcmUoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XHJcbiAgICAgIDxBIHN4PXtzdHlsZXMubGVhcm5Nb3JlfSB7Li4ucmVzdH0+XHJcbiAgICAgICAge2xhYmVsID8/ICdMZWFybiBNb3JlJ30gPElvSW9zQXJyb3dGb3J3YXJkIHNpemU9XCIxNnB4XCIgLz5cclxuICAgICAgPC9BPlxyXG4gICAgPC9OZXh0TGluaz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBmYWRlUmlnaHQgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4gIH1cclxuICB0bzoge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbGVhcm5Nb3JlOiB7XHJcbiAgICBjb2xvcjogJ2xpbmsnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBzdmc6IHtcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgzcHgpJyxcclxuICAgIH0sXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVSaWdodH0gMC41cyBsaW5lYXJgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5pbXBvcnQgTG9nb1N2ZyBmcm9tICdjb21wb25lbnRzL2ljb25zL2xvZ28nO1xyXG5pbXBvcnQgbG9nbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ28ucG5nJ1xyXG5pbXBvcnQgbG9nb0JyYW5jbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ29fYnJhbmNvLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oeyBpc1N0aWNreSwgZm9vdGVyLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIHBhdGg9XCIvXCIgc3g9e3N0eWxlcy5sb2dvfSB7Li4ucHJvcHN9PlxyXG4gICAgICB7aXNTdGlja3kgPyAoXHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvQnJhbmNvfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICApfVxyXG4gICAgICB7LyogPExvZ29Tdmcgd2hpdGU9eyFpc1N0aWNreX0gLz4gKi99XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbG9nbzoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBzdmc6IHtcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIHdpZHRoOiBbMTI4LCBudWxsLCAnMTAwJSddLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgU2VjdGlvbkhlYWRpbmcgPSAoeyB0aXRsZSwgc2xvZ2FuLCBkZXNjcmlwdGlvbiwgZW1vamksIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmhlYWRpbmd9IHsuLi5wcm9wc30+XHJcbiAgICAgIHtzbG9nYW4gJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuc2xvZ2FufT5cclxuICAgICAgICAgIHtzbG9nYW59XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfVxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAge2Vtb2ppID8gPHNwYW4+e3RpdGxlfTwvc3Bhbj4gOiB0aXRsZX1cclxuICAgICAgICB7ZW1vamkgJiYgPEltYWdlIHNyYz17ZW1vaml9IGFsdD1cImVtb2ppXCIgLz59XHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRpbmc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGluZzoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG1heFdpZHRoOiA2NjAsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8gNTBweCcsXHJcbiAgfSxcclxuICBzbG9nYW46IHtcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogMixcclxuICAgIGxpbmVIZWlnaHQ6IDIuNSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCBudWxsLCA2XSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjMzLCAxLjMzLCAxLjVdLFxyXG4gICAgbGV0dGVyU3BhY2luZzogW251bGwsIG51bGwsIG51bGwsICdoZWFkaW5nJ10sXHJcbiAgICBpbWc6IHtcclxuICAgICAgbWw6IFsnMTVweCddLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdG9wOiAnOHB4JyxcclxuICAgICAgbWF4V2lkdGg6IFsyNSwgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCAnMTZweCddLFxyXG4gICAgbGluZUhlaWdodDogWzEuODYsIG51bGwsIDIuMl0sXHJcbiAgICBtdDogWzVdLFxyXG4gICAgbWF4V2lkdGg6IDYxMCxcclxuICAgIG06IFsnMTBweCBhdXRvIDAnXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU0VPKHtcclxuICBkZXNjcmlwdGlvbiA9ICdzdGFydHVwIGxhbmRpbmcgZGVzY3JpcHRpb25zJyxcclxuICBhdXRob3IgPSAnUmVkUSwgSW5jJyxcclxuICBtZXRhLFxyXG4gIHRpdGxlID0gJ3N0YXJ0dXAgbGFuZGluZyB0aXRsZScsXHJcbn0pIHtcclxuICBjb25zdCBtZXRhRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxyXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcclxuICAgICAgY29udGVudDogYHN1bW1hcnlgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y3JlYXRvcmAsXHJcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICBdLmNvbmNhdChtZXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcblNFTy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZzogYGVuYCxcclxuICBtZXRhOiBbXSxcclxuICBkZXNjcmlwdGlvbjogYGAsXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJ1dHRvbiwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQnNBcnJvd0xlZnQsIEJzQXJyb3dSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTbGlja0Fycm93ID0gKHsgY2xhc3NOYW1lLCBvbkNsaWNrLCBjb250cm9sIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICB2YXJpYW50PVwidGV4dFwiXHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzeD17c3R5bGVzLnBhZ2luYXRpb25CdXR0b259XHJcbiAgICA+XHJcbiAgICAgIHtjb250cm9sID09PSAncHJldicgPyAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICAgICAgUHJldlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJzQXJyb3dMZWZ0IHNpemU9XCIzMnB4XCIgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiIHZhcmlhbnQ9XCJzdHlsZXMuc3JPbmx5XCI+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxCc0Fycm93UmlnaHQgc2l6ZT1cIjMycHhcIiAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tBcnJvdztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwYWdpbmF0aW9uQnV0dG9uOiB7XHJcbiAgICBtaW5IZWlnaHQ6ICczMHB4JyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogMCxcclxuICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICcwIG5vbmUnLFxyXG4gICAgfSxcclxuICAgIHN2Zzoge1xyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMnLFxyXG4gICAgfSxcclxuICAgICcmLnNsaWNrLWRpc2FibGVkJzoge1xyXG4gICAgICBjb2xvcjogJyNCQkM3RDcnLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJi5zbGljay1wcmV2Jzoge1xyXG4gICAgICBsZWZ0OiAnY2FsYyg1MCUgLSAxNnB4KScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxyXG4gICAgfSxcclxuICAgICcmLnNsaWNrLW5leHQnOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNTAlKScsXHJcbiAgICAgIHJpZ2h0OiAnY2FsYyg1MCUgLSAxNnB4KScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICdnZXJlbmNpYUBzZXJ2Y29uMS5jb20nLFxyXG4gICAgaW5mbzogJ21haWx0bzpnZXJlbmNpYUBzZXJ2Y29uMS5jb20nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICcoODgpIDM2NjktMTE0NicsXHJcbiAgICBpbmZvOiAndGVsOiA4ODM2NjkxMTQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnKDg4KSAzNjY5LTE1NzcnLFxyXG4gICAgaW5mbzogJ3RlbDogODgzNjY5MTU3NycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJyg4OCkgOTk2Ni04NjUyJyxcclxuICAgIGluZm86ICdodHRwczovL3dhLm1lLzU1ODg5OTY2ODY1MicsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRvcEJhciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLnRvcGJhcn0+XHJcbiAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJjYXB0aW9uXCI+XHJcbiAgICAgICAgICBObyBtZXJjYWRvIGjDoSBtYWlzIGRlIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCkgLSAyMDAwfSBhbm9zLCBhdGVuZGVuZG8gYXMgZXhwZWN0YXRpdmFzIGRvcyBub3Nzb3MgY2xpZW50ZXMuXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cInRsZHNcIj5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoe2xhYmVsLCBpbmZvfSwgaSkgPT4gKFxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtpbmZvfSBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAge2xhYmVsfVxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3BCYXI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgdG9wYmFyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIHB4OiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBweTogWycxMnB4J10sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJ10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogWydzcGFjZS1iZXR3ZWVuJ10sXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGZvbnRTaXplOiBbMV0sXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBtYXhXaWR0aDogMTM2NixcclxuICAgIHBsOiAnMzBweCcsXHJcbiAgICBwcjogJzMwcHgnLFxyXG4gICAgbTogJzAgYXV0bycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgc3Bhbjoge1xyXG4gICAgICAnKyBzcGFuJzoge1xyXG4gICAgICAgIG1sOiBbNF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy5jYXB0aW9uJzoge1xyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuXHJcbiAgICAgIHdpZHRoOiBbMTk5LCBudWxsLCBudWxsLCAnYXV0byddLFxyXG4gICAgICBvdmVyZmxvdzogWydoaWRkZW4nLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuICAgICAgd2hpdGVTcGFjZTogWydub3dyYXAnLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1yOiBbMiwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICAgICAgbWluV2lkdGg6IDIwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcudGxkcyc6IHtcclxuICAgICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgnXSxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB9LFxyXG4gICAgc3Ryb25nOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgICcrIHN0cm9uZyc6IHtcclxuICAgICAgICBtbDogMyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgZm9udFNpemU6IFsnMTNweCcsIG51bGwsIG51bGwsIDEsIDFdLFxyXG4gICAgICBmb250V2VpZ2h0OiA0MDAsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICBtbDogWzIsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxM10sXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIG1sOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICAnJjpub3QoOmZpcnN0LWNoaWxkKSc6IHtcclxuICAgICAgICBtbDogNCxcclxuICAgICAgICBwbDogNCxcclxuICAgICAgICBib3JkZXJMZWZ0OiAnMnB4IHNvbGlkICNmZmZmZmYyMSdcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwicGFnZXMvYXBpL2FwaVwiO1xyXG5pbXBvcnQgeyBjcmVhdGVDb250ZXh0LCB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgSW5mb3JtYWNvZXNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpXHJcblxyXG5mdW5jdGlvbiBvcmdhbml6YXJPYnJpZ2Fjb2VzUG9yRXN0YWRvKG9icmlnYWNvZXNHZXJhbCkge1xyXG4gIGNvbnN0IGVzcGlyaXRvU2FudG8gPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNjgpXHJcbiAgY29uc3QgbWF0b0dyb3Nzb0RvU3VsID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gNTQ0MylcclxuICBjb25zdCBtaW5hc0dlcmFpcyA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE2OSlcclxuICBjb25zdCByaW9HcmFuZGVEb1N1bCA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1NSlcclxuICBjb25zdCBwYXJhbmEgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTgpXHJcbiAgY29uc3QgcmlvRGVKYW5laXJvID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTUzKVxyXG4gIGNvbnN0IHNhbnRhQ2F0YXJpbmEgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTQpXHJcbiAgY29uc3Qgc2FvUGF1bG8gPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTIpXHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBlc3Bpcml0b1NhbnRvOiBbIC4uLmVzcGlyaXRvU2FudG8gXSxcclxuICAgIG1hdG9Hcm9zc29Eb1N1bDogWyAuLi5tYXRvR3Jvc3NvRG9TdWwgXSxcclxuICAgIG1pbmFzR2VyYWlzOiBbIC4uLm1pbmFzR2VyYWlzIF0sXHJcbiAgICByaW9HcmFuZGVEb1N1bDogWyAuLi5yaW9HcmFuZGVEb1N1bCBdLFxyXG4gICAgcGFyYW5hOiBbIC4uLnBhcmFuYSBdLFxyXG4gICAgcmlvRGVKYW5laXJvOiBbIC4uLnJpb0RlSmFuZWlybyBdLFxyXG4gICAgc2FudGFDYXRhcmluYTogWyAuLi5zYW50YUNhdGFyaW5hIF0sXHJcbiAgICBzYW9QYXVsbzogWyAuLi5zYW9QYXVsbyBdLFxyXG5cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBJbmZvcm1hY29lc1Byb3ZpZGVyKHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IFtub3RpY2lhcywgc2V0Tm90aWNpYXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW29icmlnYWNvZXMsIHNldE9icmlnYWNvZXNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2FnZW5kYSwgc2V0QWdlbmRhXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtjb3RhY29lcywgc2V0Q290YWNvZXNdID0gdXNlU3RhdGUoW10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB1cmwxID0gYXBpLmdldCgnbm90aWNpYXMnKVxyXG4gICAgY29uc3QgdXJsMiA9IGFwaS5nZXQoJ2NvdGFjb2VzJylcclxuICAgIGNvbnN0IHVybDMgPSBhcGkuZ2V0KCdvYnJpZ2Fjb2VzJylcclxuICAgIGNvbnN0IHVybDQgPSBhcGkuZ2V0KCdhZ2VuZGEnKVxyXG4gICAgYXhpb3MuYWxsKFt1cmwxLCB1cmwyLCB1cmwzLCB1cmw0XSlcclxuICAgICAgLnRoZW4oYXhpb3Muc3ByZWFkKCguLi5yZXNwb25zZXMpID0+IHtcclxuICAgICAgICBzZXROb3RpY2lhcyhyZXNwb25zZXNbMF0uZGF0YSlcclxuICAgICAgICBzZXRDb3RhY29lcyhyZXNwb25zZXNbMV0uZGF0YSlcclxuICAgICAgICBzZXRPYnJpZ2Fjb2VzKG9yZ2FuaXphck9icmlnYWNvZXNQb3JFc3RhZG8ocmVzcG9uc2VzWzJdLmRhdGEpKVxyXG4gICAgICAgIHNldEFnZW5kYShyZXNwb25zZXNbM10uZGF0YSlcclxuICAgICAgfSkpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW5mb3JtYWNvZXNDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXt7IG5vdGljaWFzLCBvYnJpZ2Fjb2VzLCBhZ2VuZGEsIGNvdGFjb2VzIH19PlxyXG4gICAgICB7IGNoaWxkcmVuIH1cclxuICAgIDwvSW5mb3JtYWNvZXNDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZUluZm9ybWFjb2VzKCkge1xyXG4gIGNvbnN0IGNvbnRleHQgPSB1c2VDb250ZXh0KEluZm9ybWFjb2VzQ29udGV4dClcclxuICByZXR1cm4gY29udGV4dFxyXG59IiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vc2VydmNvbjEudmVyY2VsLmFwcC9hcGknXHJcbn0pXHJcbiIsImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB0aGVtZSBmcm9tICd0aGVtZSc7XHJcbmltcG9ydCBTRU8gZnJvbSAnY29tcG9uZW50cy9zZW8nO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJ2NvbXBvbmVudHMvbGF5b3V0JztcclxuaW1wb3J0IEJhbm5lciBmcm9tICdzZWN0aW9ucy9iYW5uZXInO1xyXG5pbXBvcnQgU2VydmljZXMgZnJvbSAnc2VjdGlvbnMvc2VydmljZXMnO1xyXG5pbXBvcnQgUHJlbWl1bUZlYXR1cmUgZnJvbSAnc2VjdGlvbnMvcHJlbWl1bS1mZWF0dXJlJztcclxuaW1wb3J0IFVsdGltYXRlRmVhdHVyZXMgZnJvbSAnc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZSc7XHJcbmltcG9ydCBDdXN0b21lclN1cHBvcnQgZnJvbSAnc2VjdGlvbnMvY3VzdG9tZXItc3VwcG9ydCc7XHJcbmltcG9ydCBQcmljaW5nIGZyb20gJ3NlY3Rpb25zL3ByaWNpbmcnO1xyXG5pbXBvcnQgVGVzdGltb25pYWxzIGZyb20gJ3NlY3Rpb25zL3Rlc3RpbW9uaWFscyc7XHJcbmltcG9ydCBCbG9nIGZyb20gJ3NlY3Rpb25zL2Jsb2cnO1xyXG5pbXBvcnQgRmFxIGZyb20gJ3NlY3Rpb25zL2ZhcSc7XHJcbmltcG9ydCBTdXBwb3J0IGZyb20gJ3NlY3Rpb25zL3N1cHBvcnQnO1xyXG5pbXBvcnQgTGdwZCBmcm9tICdjb21wb25lbnRzL2xncGQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5kZXhQYWdlKCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICA8TGF5b3V0PlxyXG4gICAgICAgIDxTRU9cclxuICAgICAgICAgIHRpdGxlPVwiU0VSVkNPTiBTZXJ2acOnb3MgZGUgQ29udGFiaWxpZGFkZVwiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIlByZXN0YXIgc2VydmnDp29zIGNvbnTDoWJlaXMgZSBhc3Nlc3NvcmlhIGRlIHF1YWxpZGFkZSwgYnVzY2FuZG8gYXRlbmRlciBhcyBuZWNlc3NpZGFkZXMgZGUgbm9zc29zIGNsaWVudGVzIGUgcGFyY2Vpcm9zXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCYW5uZXIgLz5cclxuICAgICAgICA8UHJlbWl1bUZlYXR1cmUgLz5cclxuICAgICAgICA8VWx0aW1hdGVGZWF0dXJlcyAvPlxyXG4gICAgICAgIHsvKiA8Q3VzdG9tZXJTdXBwb3J0IC8+ICovfVxyXG4gICAgICAgIDxQcmljaW5nIC8+XHJcbiAgICAgICAgey8qIDxUZXN0aW1vbmlhbHMgLz4gKi99XHJcbiAgICAgICAgPFNlcnZpY2VzIC8+XHJcbiAgICAgICAgPEJsb2cgLz5cclxuICAgICAgICA8TGdwZCAvPlxyXG4gICAgICAgIHsvKiA8U3VwcG9ydCAvPiAqL31cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBqc3gsXHJcbiAgQm94LFxyXG4gIEZsZXgsXHJcbiAgVGV4dCxcclxuICBIZWFkaW5nLFxyXG4gIENvbnRhaW5lcixcclxufSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCBiYW5uZXIgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIxLnBuZydcclxuaW1wb3J0IHsgQWlPdXRsaW5lV2hhdHNBcHAsIEFpT3V0bGluZVBob25lLCBBaU91dGxpbmVJbnN0YWdyYW0sIEFpT3V0bGluZUZhY2Vib29rLCBBaU91dGxpbmVNYWlsIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImhvbWVcIiBzeD17c3R5bGVzLnNlY3Rpb259ID5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJib3VuY2VJbkxlZnRcIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCIgaXNWaXNpYmxlPXt0cnVlfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmRvbWFpbkNhcmR9PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nPlVtIG5vdm8gcGVyZmlsIGRlIDxUZXh0IGFzPVwic3BhblwiIGNvbG9yPSdzZWNvbmRhcnknPmVtcHJlc2EgY29udMOhYmlsPC9UZXh0PjwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBtYj17Nn0+XHJcbiAgICAgICAgICAgICAgICBRdWVyZW1vcyBlbnRlbmRlciBvIHF1ZSB2b2PDqiBwcmVjaXNhLCA8YnIgLz5cclxuICAgICAgICAgICAgICAgIEVudHJlIGVtIGNvbnRhdG9cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5pbnB1dEdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3dhLm1lLzU1ODg5OTY2ODY1MlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lV2hhdHNBcHAgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInRlbDo4ODM2NjkxMTQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVQaG9uZSBzaXplPVwiM2VtXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zZXJ2Y29uamlqb2NhL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lSW5zdGFncmFtIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VydmNvbmppam9jYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lRmFjZWJvb2sgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzpnZXJlbmNpYUBzZXJ2Y29uMS5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZU1haWwgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiA8Qm94IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NlcnZlclJhY2t9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwic2V2ZXItcmFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvQm94PiAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2Jhbm5lcn0pYCxcclxuICAgIHB0OiBbMTcsIG51bGwsIG51bGwsIDIwLCBudWxsXSxcclxuICAgIHBiOiBbNiwgbnVsbCwgbnVsbCwgMTIsIDE2XSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGdhcDogWyczMHB4IDYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzBweCA0MHB4JywgJzMwcHggNjBweCddLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgbWluSGVpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzY2dmgnLCAnODF2aCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICcxZnInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxyXG4gICAgICAnNTEwcHggMWZyJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBkb21haW5DYXJkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmYmMnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDI0cHggNTBweCByZ2JhKDU0LCA5MSwgMTI1LCAwLjA1KScsXHJcbiAgICBib3JkZXJSYWRpdXM6IGAxNXB4IDMwcHhgLFxyXG4gICAgcDogWyczMHB4IDI1cHggNTBweCcsIG51bGwsIG51bGwsICc0MHB4IDQwcHggNjBweCddLFxyXG4gICAgbTogW251bGwsIG51bGwsIG51bGwsICcwIGF1dG8nLCAndW5zZXQnXSxcclxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNDgwLCAnbm9uZSddLFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBmb250U2l6ZTogWzgsIG51bGwsIG51bGwsIDEwLCA5LCAxNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzYsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCA3LCA4XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbnB1dEdyb3VwOiB7XHJcbiAgICBhOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIHB4OiBbMywgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgICAgcDogMCxcclxuICAgICAgJzpmb2N1cyc6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjMzLFxyXG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC40KSxcclxuICAgICAgfSxcclxuICAgICAgJzotd2Via2l0LWF1dG9maWxsJzoge1xyXG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogJzAgMCAwIDMwcHggd2hpdGUgaW5zZXQgIWltcG9ydGFudCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsICcxNXB4J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzMsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgICAgbWluV2lkdGg6IFs2MCwgbnVsbCwgbnVsbCwgNzVdLFxyXG4gICAgICBwOiAwLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgJzpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnKyBzdmcnOiB7XHJcbiAgICAgICAgY29sb3I6ICcjQTZBOEJCJyxcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWJtaXQ6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBtdDogWzRdLFxyXG4gICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBub3RlOiB7XHJcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxyXG4gICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgbGluZUhlaWdodDogMS4zMyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuNSksXHJcbiAgICBtdDogWzRdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBCdXR0b24sIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgQmxvZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9ibG9nLXBvc3QnO1xyXG5pbXBvcnQgU2xpY2tBcnJvdyBmcm9tICdjb21wb25lbnRzL3NsaWNrLWFycm93JztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCB7IHVzZUluZm9ybWFjb2VzIH0gZnJvbSAnaG9va3MvdXNlSW5mb3JtYWNvZXMnO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBzcGVlZDogNTAwLFxyXG4gIG5leHRBcnJvdzogPFNsaWNrQXJyb3cgY29udHJvbD1cIm5leHRcIiAvPixcclxuICBwcmV2QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJwcmV2XCIgLz4sXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDAwMDAsXHJcbiAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBub3RpY2lhcyB9ID0gdXNlSW5mb3JtYWNvZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImJsb2dcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgc2xvZ2FuPVwiXCJcclxuICAgICAgICAgIHRpdGxlPVwiw5psdGltYXMgTm90w61jaWFzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2xpZGVJblJpZ2h0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgIDxTbGlkZXIgc3g9e3N0eWxlcy5ncmlkfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICB7bm90aWNpYXM/LnNsaWNlKDAsIDMpLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCbG9nUG9zdCBrZXk9e3Bvc3QubW5fY29kaWdvfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPEZsZXggc3g9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc3g9e3N0eWxlcy5idXR0b259IGFzPVwiYVwiIGhyZWY9XCIvbm90aWNpYXNcIj5NYWlzIE5vdMOtY2lhczwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbMTIsIG51bGwsIG51bGwsIDEyLCAxNV0sXHJcbiAgICBwYjogWzYsIG51bGwsIG51bGwsIDE2LCAxMCwgMTRdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBnYXA6IFs2LCBudWxsLCBudWxsLCBudWxsLCA2LCAxMF0sXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIC0zLCAndW5zZXQnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsIDFmciknLCBudWxsLCBudWxsLCBudWxsLCAncmVwZWF0KDMsIDFmciknXSxcclxuICAgICcuc2xpY2stYXJyb3cnOiB7XHJcbiAgICAgIGJvdHRvbTogW251bGwsIG51bGwsIG51bGwsIC0xNCwgJ3Vuc2V0J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtdDogWzhdLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5pbXBvcnQgQmdTaGFwZSBmcm9tICdhc3NldHMvaW1hZ2VzL3NoYXBlLTEuc3ZnJztcclxuaW1wb3J0IHNoYXBlVG9wIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2hhcGUtdG9wLnBuZyc7XHJcbmltcG9ydCBzaGFwZUJvdHRvbSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3NoYXBlLWJvdHRvbS5wbmcnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVXaGF0c0FwcCwgQWlPdXRsaW5lUGhvbmUsIEFpT3V0bGluZUluc3RhZ3JhbSwgQWlPdXRsaW5lTWFpbCwgQWlPdXRsaW5lRmFjZWJvb2sgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YXRvXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgUXVlcmVtb3MgZW50ZW5kZXIgbyBxdWUgdm9jw6ogcHJlY2lzYVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93YS5tZS81NTg4OTk2Njg2NTJcIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVXaGF0c0FwcCBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cInRlbDo4ODM2NjkxMTQ2XCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGhvbmUgc2l6ZT1cIjNlbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NlcnZjb25qaWpvY2EvXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lSW5zdGFncmFtIHNpemU9XCIzZW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlcnZjb25qaWpvY2FcIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVGYWNlYm9vayBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzpnZXJlbmNpYUBzZXJ2Y29uMS5jb21cIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVNYWlsIHNpemU9XCIzZW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMSxcclxuICAgICc6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQUZDJyxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBjb250ZW50OiBgJydgLFxyXG4gICAgICBoZWlnaHQ6ICc1MCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHpJbmRleDogJy0xJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIHB4OiBbMCwgJzAgIWltcG9ydGFudCcsICczMHB4ICFpbXBvcnRhbnQnXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHBhZGRpbmc6IFtcclxuICAgICAgJzM1cHggNjBweCA2MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQwcHggMzBweCA0NXB4JyxcclxuICAgICAgJzU1cHggMzBweCA2MHB4JyxcclxuICAgICAgJzU1cHggNTBweCA2MHB4JyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgzNjU2JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogWydub25lJywgbnVsbCwgbnVsbCwgYHVybCgke0JnU2hhcGV9KWBdLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICc2MCUgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiBbJzEyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgIGJvcmRlclJhZGl1czogJzdweCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogWydjZW50ZXInLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFszLCA3LCA4LCA3LCAxMV0sXHJcbiAgICBmb250RmFtaWx5OiAnQnJlZSBTZXJpZiwgc2VyaWYnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS40LCAxLjUzXSxcclxuICAgIG1heFdpZHRoOiBbJzEwMCUnLCAnODAlJywgbnVsbCwgMzQwLCAnNTAlJywgJzQ1JSddLFxyXG4gICAgbWI6IFsxMSwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgfSxcclxuICBidG5XcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICc6YmVmb3JlLCA6YWZ0ZXInOiB7XHJcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzczcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFsnNTUlJywgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2hhcGVUb3B9KWAsXHJcbiAgICAgIHRvcDogJy0yOHB4JyxcclxuICAgIH0sXHJcbiAgICAnOmFmdGVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzaGFwZUJvdHRvbX0pYCxcclxuICAgICAgYm90dG9tOiAnLTI4cHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1pbkhlaWdodDogWzQwLCBudWxsLCBudWxsLCA0NSwgNjBdLFxyXG4gICAgICBwYWRkaW5nOiBbJzAgMjhweCcsIG51bGwsIG51bGwsIG51bGwsICcwIDQwcHgnXSxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJyNhMmFlYmInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgfSxcclxuICAgICAgbXQ6IDEsXHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEdyaWQsIEJ1dHRvbiwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuaW1wb3J0IHN1cHBvcnQgZnJvbSAnYXNzZXRzL2ltYWdlcy9zdXBwb3J0LnBuZyc7XHJcblxyXG5jb25zdCBsaXN0ID0gW1xyXG4gICdNZWRpY2FsIGFuZCB2aXNpb24nLFxyXG4gICdMaWZlIGluc3VyYW5jZScsXHJcbiAgJ0hTQXMgYW5kIEZTQXMnLFxyXG4gICdDb21tdXRlciBiZW5lZml0cycsXHJcbl07XHJcblxyXG5jb25zdCBDdXN0b21lclN1cHBvcnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgPEltYWdlIHNyYz17c3VwcG9ydH0gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJzdXBwb3J0XCIgLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgICAgICA8SGVhZGluZyBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICBDdXN0b21lciBzdXBwb3J0IGlzIG91ciBtYWluIHByaW9yaXR5IHdpdGggdGhlaXIgaHVuZHJlZCBwZXJjZW50XHJcbiAgICAgICAgICAgICAgc2F0aXNmYWN0aW9uLlxyXG4gICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuc3VtbWFyeX0+XHJcbiAgICAgICAgICAgICAgR2V0IHlvdXIgdGVzdHMgZGVsaXZlcmVkIGF0IGxldCBob21lIGNvbGxlY3Qgc2FtcGxlIGZyb20gdGhlXHJcbiAgICAgICAgICAgICAgdmljdG9yeSBvZiB0aGUgbWFuYWdlbWVudHMgdGhhdCBzdXBwbGllcyBiZXN0IGRlc2lnbiBzeXN0ZW1cclxuICAgICAgICAgICAgICBndWlkZWxpbmVzIGV2ZXIuXHJcbiAgICAgICAgICAgIDwvVGV4dD5cclxuXHJcbiAgICAgICAgICAgIDxHcmlkIHN4PXtzdHlsZXMubGlzdH0gYXM9XCJ1bFwiPlxyXG4gICAgICAgICAgICAgIHtsaXN0Lm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPFRleHQgYXM9XCJsaVwiIGtleT17aX0+XHJcbiAgICAgICAgICAgICAgICAgIDxJb0lvc0NoZWNrbWFya0NpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXt7IGNvbG9yOiAnc2Vjb25kYXJ5JywgbXI6IDIgfX1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjBweFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtfVxyXG4gICAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ3VzdG9tZXJTdXBwb3J0O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbOCwgbnVsbCwgbnVsbCwgNiwgbnVsbCwgMTQsIDE2XSxcclxuICAgIHBiOiBbbnVsbCwgbnVsbCwgbnVsbCwgOCwgMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBnYXA6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAnMCAxMHB4J10sXHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnLCBudWxsLCBudWxsLCAnZ3JpZCddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4tcmV2ZXJzZScsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICcxZnInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMWZyJyxcclxuICAgICAgJzQ3MHB4IDFmcicsXHJcbiAgICAgICc2MDBweCAxZnInLFxyXG4gICAgICAnNzYwcHggMWZyJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgbXQ6IFsyLCBudWxsLCBudWxsLCAwLCA0LCAwXSxcclxuICAgIGltZzoge1xyXG4gICAgICBtYXhXaWR0aDogWycxMDAlJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBtYXJnaW5Ub3A6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAtMTZdLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1NjAsICdub25lJ10sXHJcbiAgICBtOiBbbnVsbCwgbnVsbCwgbnVsbCwgJzAgYXV0bycsICd1bnNldCddLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogWzUsIG51bGwsIG51bGwsIDEwLCBudWxsLCBudWxsLCAxMV0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjUzLFxyXG4gICAgbGV0dGVyU3BhY2luZzogWyctMC41cHgnLCBudWxsLCBudWxsLCAnLTFweCddLFxyXG4gICAgdGV4dEFsaWduOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsICdsZWZ0J10sXHJcbiAgICBzcGFuOiB7XHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgICBweDogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdW1tYXJ5OiB7XHJcbiAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyLCAnMTVweCcsIDJdLFxyXG4gICAgbGluZUhlaWdodDogWzEuODYsIG51bGwsIG51bGwsIG51bGwsIDEuODYsIDIuMjVdLFxyXG4gICAgbWF4V2lkdGg6IDQ3MCxcclxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMjBweCBhdXRvIDAnLCAnMTVweCAwIDAnLCBudWxsLCAndW5zZXQnXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgZ2FwOiAnMCAxOHB4JyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDIsIDE0MnB4KScsIG51bGwsIG51bGwsICdyZXBlYXQoMiwgMjAwcHgpJ10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogW251bGwsIG51bGwsIG51bGwsICdjZW50ZXInLCAndW5zZXQnXSxcclxuICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgbXQ6IFs0LCBudWxsLCBudWxsLCA1LCA0LCA1XSxcclxuICAgIHA6IDAsXHJcbiAgICBsaToge1xyXG4gICAgICBmb250U2l6ZTogWzAsIDEsIG51bGwsIDIsICcxNXB4JywgMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgbGluZUhlaWdodDogWzIuODEsIG51bGwsIG51bGwsIG51bGwsIDIuMiwgMi44MV0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBGYXFJdGVtIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvZmFxLWl0ZW0nO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHF1ZXM6ICdXaGljaCBkb21haW4gc2hvdWxkIEkgcHVyY2hhc2U/JyxcclxuICAgIGFuczogYFdlIG1ha2UgaXQgZWFzeSB0byBtb3ZlIHRvIENvbWV0TmluZS4gU2ltcGx5IGNvbnRhY3QgdXMgYW5kIHdlJ2xsIG1vdmUgeW91ciBob3N0aW5nIGFjY291bnQgZnJvbSBhbnkgb3RoZXIgcHJvdmlkZXIsIHJlZ2FyZGxlc3Mgb2YgdGhlIGNvbnRyb2wgcGFuZWwuIElmIGF0IGFueXRpbWUgeW91ciB3ZWJzaXRlIGlzIGRvd24gZm9yIG1vcmUgdGhhbiAwLjElIHJlc3VsdGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHF1ZXM6ICdXaGF0IGFyZSBzb21lIHRpcHMgd2hlbiBjaG9vc2luZyBhIG5hbWU/JyxcclxuICAgIGFuczogYEdldCB5b3VyIHdlYnNpdGUgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gbWFuYWdlbWVudCBuZXdzLiBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgdGhlIGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBxdWVzOiAnV2hhdCBpZiBJIG5lZWQgaGVscCBjaG9vc2luZyB0aGUgcmlnaHQgZG9tYWluPycsXHJcbiAgICBhbnM6IGBDcmVhdGUgYSBodWIgZm9yIGNyb3NzLWZ1bmN0aW9uYWwgd29yayB0aGF0IGFsc28gd29ya3Mgd2l0aCBhbGwgeW91ciBvdGhlciB0b29scy4gQ2VudHJhbGl6ZSBhbmQgc3RhbmRhcmRpemUgY29tbXVuaWNhdGlvbiB3aXRoIE1pcm8uIEFsbCBwcmVtaXVtIGZ1bmN0aW9uYWwgYXJlIGluY2x1ZGVkIGhlcmUgd2l0aCB1cGRhdGVzLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHF1ZXM6ICdDYW4gSSB1cGdyYWRlIG9yIGRvd25ncmFkZSBteSB3ZWIgaG9zdGluZyBwbGFuJyxcclxuICAgIGFuczogYFRoZSBwcmljaW5nIG1hZGUgbWUgYSBsaXR0bGUgaGVzaXRhbnQgYXQgZmlyc3QgYnV0IEkgaGF2ZSBiZWVuIHBsZWFzYW50bHkgc3VycHJpc2VkIGJ5IHRoZSBsZXZlbCBvZiBjYXJlIGdpdmVuIGJ5IENvbWV0TmluZS5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBxdWVzOiAnSG93IGRvIEkgdXBncmFkZSB0aGUgc3RvcmFnZSBjYXBhY2l0eSBvZiBteSBob3N0aW5nIHBsYW4/JyxcclxuICAgIGFuczogYFN0b3AgeW91ciB2aWV3ZXJzIGZyb20gZ2V0dGluZyBkaXN0cmFjdGVkLiBQdWJsaXNoIHZpZGVvcyB0byB5b3VyIG93biBDaGFubmVsIGFuZCByZXN0IGVhc3kga25vd2luZyB2aWV3ZXJzIHdvbuKAmXQgYmUgYW5ub3llZCBieSBhZHMgb3IgcHVsbGVkIGRvd24gYSByYWJiaXQgaG9sZSBvZiB1bnJlbGF0ZWQgdmlkZW9zLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIHF1ZXM6ICdXaGF0IGlzIGluIEluTW90aW9uIEhvc3RpbmfigJlzIHVwdGltZSByYXRlPycsXHJcbiAgICBhbnM6IGBEZXNpZ25lZCB3aXRoIGJlZ2lubmVycyBpbiBtaW5kIGFuZCBwYWNrZWQgd2l0aCBhZHZhbmNlZCBmZWF0dXJlcyBkZXZlbG9wZXJzIHdpbGwgbG92ZS4gU3RhcnQgd2l0aCBhIHF1aWNrIGFuZCBzaW1wbGUgaW5zdGFsbGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIHF1ZXM6ICdMZWFybiBmcm9tIGNvbW11bml0eSBvbiBCcmFuZHdhZ29uJyxcclxuICAgIGFuczogYEJyaWFuIEhhbGxpZ2FuIGtub3dzIHRoYXQgeW91IG5lZWQgbW9yZSB0aGFuIGEgZ3JlYXQgcHJvZHVjdCB0byBoYXZlIGEgZ3JlYXQgYnJhbmQuIEhlYXIgaGlzIHRob3VnaHRzICYgc2NvcmUgYSBwZWVrIGF0IG91ciB3YWdvbi5gLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHsgb3JpZ2luVG9wOiB0cnVlIH07XHJcblxyXG5jb25zdCBGYXEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJmYXFcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgc2xvZ2FuPVwiR2V0IHlvdXJzIHF1ZXN0aW9uIGFuc3dlclwiXHJcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1YW50bHkgYXNrZWQgcXVlc3Rpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1hc29ucnkgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxGYXFJdGVtIGtleT17aXRlbS5pZH0gZmFxPXtpdGVtfSBjbGFzc05hbWU9XCJmYXEtaXRlbVwiIC8+O1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXE7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTRdLFxyXG4gICAgcGI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxMCwgNl0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIC02LCAtOCwgJ3Vuc2V0J10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uJztcclxuaW1wb3J0IHF1ZW1Tb21vcyBmcm9tICdhc3NldHMvaW1hZ2VzL3F1ZW0tc29tb3MucG5nJztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTWlzc8OjbycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIFByZXN0YXIgc2VydmnDp29zIGNvbnTDoWJlaXMgZSBhc3Nlc3NvcmlhIGRlIHF1YWxpZGFkZSwgYnVzY2FuZG8gYXRlbmRlciBhcyBuZWNlc3NpZGFkZXMgZGUgbm9zc29zIGNsaWVudGVzIGUgcGFyY2Vpcm9zLCBhZ3JlZ2FuZG8gdmFsb3Jlcywgc2VndXJhbsOnYSBlIHRyYW5xdWlsaWRhZGUgbm9zIHNldXMgZW1wcmVlbmRpbWVudG9zIGUganVudG9zIHNlcm1vcyBpbnN0cnVtZW50byBkZSByZWZlcsOqbmNpYSBuYSB0cmFuc2Zvcm1hw6fDo28gZWNvbsO0bWljYSBlIHNvY2lhbCBuYSByZWdpw6NvLCBjb20gdmlzaWJpbGlkYWRlIG5hY2lvbmFsIGUgaW50ZXJuYWNpb25hbC5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdWaXPDo28nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBTZXIgcmVmZXLDqm5jaWEgZGUgZXhjZWzDqm5jaWEgZW0gc2VydmnDp29zIGRlIGNvbnRhYmlsaWRhZGUgZSBzZSBtYW50ZXIgZW50cmUgb3MgcHJpbmNpcGFpcyBkYSByZWdpw6NvLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYFZhbG9yZXNgLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICDDiXRpY2EsIHF1YWxpZGFkZSwgY29tcHJvbWV0aW1lbnRvLCBzZXJpZWRhZGUsIGdlc3TDo28gY29tcGFydGlsaGFkYSwgcmVzcG9uc2FiaWxpZGFkZSBzb2Npb2Vjb27DtG1pY2EgZSB0cmFkacOnw6NvLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFByZW1pdW1GZWF0dXJlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGlkPVwicXVlbS1zb21vc1wiIGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBhcz1cImZpZ3VyZVwiXHJcbiAgICAgICAgc3g9e3sgLi4uc3R5bGVzLmlsbHVzdHJhdGlvbiwgYmFja2dyb3VuZDogYHVybCgke3F1ZW1Tb21vc30pIG5vLXJlcGVhdGAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJib3VuY2VJblJpZ2h0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5hY2NvcmRpb25Hcm91cH0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cclxuICAgICAgICAgICAgICBzbG9nYW49XCJTZXJ2aWNvbiBDb250YWJpbGlkYWRlXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvbmhlw6dhIHVtIHBvdXF1aW5obyBzb2JyZSBub3NzYSBoaXN0w7NyaWFcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU29tb3MgdW1hIGVtcHJlc2Egdm9sdGFkYSBwYXJhIG8gcmFtbyBjb250w6FiaWwsIGZpc2NhbCBlIHRyYWJhbGhpc3RhLCBjb21wb3N0YSBwb3IgcHJvZmlzc2lvbmFpcywgcHJlc3RhbmRvIHNlcnZpw6dvcyBkZSBxdWFsaWRhZGUgZSBlZmljacOqbmNpYSBjb20gdW0gc2lzdGVtYSBvcGVyYWNpb25hbCBkZSB0cmFiYWxobyB0b3RhbG1lbnRlIGluZm9ybWF0aXphZG8uIE5vIG1lcmNhZG8gZGVzZGUgRmV2ZXJlaXJvIGRlIDIwMDAsIGVzdGFtb3Mgc2VtcHJlIGJ1c2NhbmRvIG9zIHJlcXVpc2l0b3MgcGFyYSBhdGVuZGVyIGFzIGV4cGVjdGF0aXZhcyBkb3Mgbm9zc29zIGNsaWVudGVzLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2RhdGF9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bUZlYXR1cmU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcGI6IFsxMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMTQsIDE4XSxcclxuICAgIHB0OiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgNl0sXHJcbiAgICAvLyBtYXJnaW5Cb3R0b206IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTg1cHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAwLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgIGJhY2tncm91bmRTaXplOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzYyJScsICc1MCUnLCAnNjYlJywgJzYyJSddLFxyXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMXB4KSc6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICc2MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBbXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICctODBweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMCcsXHJcbiAgICAgICctMTQwcHggMHB4JyxcclxuICAgIF0sXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGFjY29yZGlvbkdyb3VwOiB7XHJcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDUyMCwgNjEwLCA0MTAsIG51bGwsIDQ1MCwgNDEwXSxcclxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMCBhdXRvJywgbnVsbCwgJzAnLCBudWxsXSxcclxuICAgIC8vIG1hcmdpbkxlZnQ6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsIG51bGwsIDEwLCAxMiwgMTZdLFxyXG4gICAgLy8gbWFyZ2luUmlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsIG51bGwsICd1bnNldCddLFxyXG4gICAgLy8gcHg6IFs2LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA0NDAsIDQ1MCwgJ25vbmUnXSxcclxuICAgIG1iOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgNCwgNl0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogWzQsIG51bGwsIG51bGwsIDgsIDEwLCA4LCAxMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIG1heFdpZHRoOiBbMjUwLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgICBtYXJnaW46IFsnMCBhdXRvJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICAgIG10OiAxMlxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBQcmljZVRhYmxlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvcHJpY2UtdGFibGUnO1xyXG5pbXBvcnQgU2xpY2tBcnJvdyBmcm9tICdjb21wb25lbnRzL3NsaWNrLWFycm93JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnXHJcbmltcG9ydCBJbWFnZUFnZW5kYSBmcm9tICdhc3NldHMvaW1hZ2VzL2FnZW5kYTMucG5nJ1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IHsgdXNlSW5mb3JtYWNvZXMgfSBmcm9tICdob29rcy91c2VJbmZvcm1hY29lcyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdBZ2VuZGEgVHJpYnV0w6FyaWEnLFxyXG4gICAgc3VidGl0bGU6ICcwMi8wNy8yMDIxJyxcclxuICAgIC8vIHByaWNlOiAyNS45OSxcclxuICAgIGlzUmVjb21tZW5kZWQ6IGZhbHNlLFxyXG4gICAgLy8gYnV0dG9uVGV4dDogJ1N0YXJ0IEZyZWUgVHJpYWwnLFxyXG4gICAgZmVhdHVyZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiAnSUNNUy9TQ0FOQyB8IENvbnRyaWJ1aW50ZSBxdWUgdGl2ZXIgcmVjZWJpZG8gbyBjb21idXN0w612ZWwgZGUgb3V0cm8gY29udHJpYnVpbnRlIHN1YnN0aXR1w61kby4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBJQ01TL1NDQU5DIHwgSW1wb3J0YWRvci5gLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdPYnJpZ2HDp8O1ZXMgRmlzY2FpcycsXHJcbiAgICBzdWJ0aXRsZTogJ0ZpcXVlIHNlbXByZSBpbmZvcm1hZG8hJyxcclxuICAgIHByaWNlOiAyOS45OSxcclxuICAgIGlzUmVjb21tZW5kZWQ6IHRydWUsXHJcbiAgICBidXR0b25UZXh0OiAnU3RhcnQgRnJlZSBUcmlhbCcsXHJcbiAgICBmZWF0dXJlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6ICdPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEp1bGhvLzIwMjEnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEp1bmhvLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIE1haW8vMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gQWJyaWwvMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gTWFyw6dvLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEZldmVyZWlyby8yMDIxYCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBzcGVlZDogNTAwLFxyXG4gIG5leHRBcnJvdzogPFNsaWNrQXJyb3cgY29udHJvbD1cIm5leHRcIiAvPixcclxuICBwcmV2QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJwcmV2XCIgLz4sXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDAwMDAsXHJcbiAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZyA9ICgpID0+IHtcclxuICBjb25zdCB7IG9icmlnYWNvZXMsIGFnZW5kYSB9ID0gdXNlSW5mb3JtYWNvZXMoKVxyXG4gIGNvbnN0IGRhdGEgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgZGlhID0gU3RyaW5nKGRhdGEuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IG1lcyA9IFN0cmluZyhkYXRhLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IGFubyA9IGRhdGEuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBkYXRhQXR1YWwgPSBgJHtkaWF9LyR7bWVzfS8ke2Fub31gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiaW5mb3JtYWNvZXNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNsaWRlSW5MZWZ0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICAgIHNsb2dhbj1cIkF0dWFsaXplLXNlXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJDb21wb3N0byBwb3IgdW0gY29uanVudG8gZGUgaW5mb3JtYcOnw7VlcyBxdWUgc8OjbyBhdHVhbGl6YWRhcyBkaWFyaWFtZW50ZSBwZWxhIG5vc3NhIGVxdWlwZS5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZXIgc3g9e3N0eWxlcy5ncmlkfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgIDxQcmljZVRhYmxlIGl0ZW1zPXthZ2VuZGF9IGlzUmVjb21tZW5kZWQ9e2ZhbHNlfSB0aXRsZT1cIkFnZW5kYSBUcmlidXTDoXJpYVwiIHN1YnRpdGxlPXtkYXRhQXR1YWx9IC8+XHJcbiAgICAgICAgICAgICAgPFByaWNlVGFibGUgaXRlbXM9e29icmlnYWNvZXMuc2FvUGF1bG99IGlzUmVjb21tZW5kZWQ9e3RydWV9IHRpdGxlPVwiT2JyaWdhw6fDtWVzIEZpc2NhaXNcIiBzdWJ0aXRsZT1cIkZpcXVlIHNlbXByZSBpbmZvcm1hZG9cIiBsaW5rPVwib2JyaWdhY29lc1wiIC8+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHN4PXtzdHlsZXMuaW1hZ2V9IHNyYz17SW1hZ2VBZ2VuZGF9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbNl0sXHJcbiAgICBwYjogWzEyLCBudWxsLCBudWxsLCAxNSwgMTddLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwbDogMCxcclxuICAgIHByOiAwLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs3LCBudWxsLCBudWxsLCBudWxsLCAxNCwgbnVsbCwgMThdLFxyXG4gICAgcHg6IFs2LCBudWxsLCBudWxsLCAwXSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgOF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2dyaWQnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAncmVwZWF0KDMsIDFmciknXSxcclxuICAgIGFsaWduSXRlbXM6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAnZmxleC1lbmQnXSxcclxuICAgICcuc2xpY2stc2xpZGUgPiBkaXYnOiB7XHJcbiAgICAgIHA6IFsnMzVweCcsICc0MHB4JywgbnVsbCwgJzM1cHggMjNweCAyM3B4JywgMF0sXHJcbiAgICB9LFxyXG4gICAgJy5zbGljay1hcnJvdyc6IHtcclxuICAgICAgYm90dG9tOiAtNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcclxuICB9XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL3NlcnZpY2UnO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IHsgdXNlSW5mb3JtYWNvZXMgfSBmcm9tICdob29rcy91c2VJbmZvcm1hY29lcyc7XHJcblxyXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcclxuICBjb25zdCB7IGNvdGFjb2VzIH0gPSB1c2VJbmZvcm1hY29lcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwic2VydmljZXNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgICAgc2xvZ2FuPVwiXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJJbmRpY2Fkb3JlcyBFY29uw7RtaWNvc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICB7Y290YWNvZXM/Lm1hcCgoY290YWNhbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxTZXJ2aWNlIGtleT17Y290YWNhby5jb3RkX2NvZGlnb30gY290YWNhbz17Y290YWNhb30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTJdLFxyXG4gICAgcGI6IFsxMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMTVdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoNCwgMWZyKScsXHJcbiAgICAgICdyZXBlYXQoNCwgMzAwcHgpJyxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5pbXBvcnQgc3VwcG9ydFRlYW0gZnJvbSAnYXNzZXRzL2ltYWdlcy9zdXBwb3J0LXRlYW0ucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1cHBvcnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwic3VwcG9ydFwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICB0aXRsZT1cIk1lZXQgb3VyIHN1cHBvcnQgdGVhbSB3aG8gYWx3YXlzIHdvcmsgaGFyZGx5IGJlaGluZCB0aGUgc2NlbmVzXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRm9jdXMgb25seSBvbiB0aGUgbWVhbmluZywgd2UgdGFrZSBjYXJlIG9mIHRoZSBkZXNpZ24uIEFzIHNvb24gYXMgdGhlIG1lZXRpbmcgZW5kIHlvdSBjYW4gZXhwb3J0IGluIG9uZSBjbGljayBpbnRvIHlvdXIgcHJlZmVycmVkLlwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMudGh1bWJXcmFwcGVyfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3N1cHBvcnRUZWFtfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cIlN1cHBvcnQgVGVhbVwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxNF0sXHJcbiAgICBwYjogWzBdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs4LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgMTVdLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1MDAsIDYwMCwgbnVsbF0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgOCwgMTFdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIG10OiBbM10sXHJcbiAgICAgIG1heFdpZHRoOiBbNTAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aHVtYldyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1iOiAnLTFweCcsXHJcbiAgICBpbWc6IHtcclxuICAgICAgaGVpZ2h0OiBbMTgwLCAnYXV0byddLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFRlc3RpbW9uaWFsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2NvbXBvbmVudHMvY2FyZHMvdGVzdGltb25pYWwnKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5pbXBvcnQgYXV0aG9yIGZyb20gJ2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwucG5nJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBhdmF0YXI6IGF1dGhvcixcclxuICAgIGF1dGhvck5hbWU6ICdNZWxpbmEgUGV0dGVuZG9yZmVyJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIG9mIFViZXInLFxyXG4gICAgdGV4dDogYEJlc3QgaG9zdCBJJ3ZlIGhhZCBpbiAxMCB5ZWFycy4gU21vb3RoIG1pZ3JhdGlvbiwgbm8gc3RyZXNzLCBhbmQgZnJpZW5kbHkgc3VwcG9ydCBvbmUgY2xpY2sgYXdheS4gSSdtIHZlcnkgaGFwcHkgYW5kIHJlY29tbWVuZCB0aGVpciBzZXJ2aWNlc2AsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGF2YXRhcjogYXV0aG9yLFxyXG4gICAgYXV0aG9yTmFtZTogJ01lbGluYSBQZXR0ZW5kb3JmZXInLFxyXG4gICAgZGVzaWduYXRpb246ICdDRU8gb2YgR29vZ2xlJyxcclxuICAgIHRleHQ6IGBCZXN0IGhvc3QgSSd2ZSBoYWQgaW4gMTAgeWVhcnMuIFNtb290aCBtaWdyYXRpb24sIG5vIHN0cmVzcywgYW5kIGZyaWVuZGx5IHN1cHBvcnQgb25lIGNsaWNrIGF3YXkuIEknbSB2ZXJ5IGhhcHB5IGFuZCByZWNvbW1lbmQgdGhlaXIgc2VydmljZXNgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBhdmF0YXI6IGF1dGhvcixcclxuICAgIGF1dGhvck5hbWU6ICdNZWxpbmEgUGV0dGVuZG9yZmVyJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIG9mIE1pY3Jvc29mdCcsXHJcbiAgICB0ZXh0OiBgQmVzdCBob3N0IEkndmUgaGFkIGluIDEwIHllYXJzLiBTbW9vdGggbWlncmF0aW9uLCBubyBzdHJlc3MsIGFuZCBmcmllbmRseSBzdXBwb3J0IG9uZSBjbGljayBhd2F5LiBJJ20gdmVyeSBoYXBweSBhbmQgcmVjb21tZW5kIHRoZWlyIHNlcnZpY2VzYCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInRlc3RpbW9uaWFsc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IHN4PXtzdHlsZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxUZXN0aW1vbmlhbCBrZXk9e2l0ZW0uaWR9IHRlc3RpbW9uaWFsPXtpdGVtfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzYsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0YwRjNGOCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY3cHgpJzoge1xyXG4gICAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgY29udGVudDogYCcnYCxcclxuICAgICAgICBtaW5IZWlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCAzMCwgNzAsIDEwMF0sXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWw6IHtcclxuICAgICcuc2xpY2stZG90cyc6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgYm90dG9tOiBbNiwgbnVsbCwgbnVsbCwgOCwgMTBdLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGxlZnQ6IFtcclxuICAgICAgICAnY2FsYyg1MCUgKyAxNHB4KScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDYycHgpJyxcclxuICAgICAgICAnY2FsYyg1MCUgKyAxNHB4KScsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgNjBweCknLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDE0cHgpJyxcclxuICAgICAgXSxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcmdiYSgnIzVCMkI5RCcsIDAuMiksXHJcbiAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogWzMsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgICAgIHdpZHRoOiBbMTAsIG51bGwsIG51bGwsIDE1XSxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgdGV4dEluZGVudDogJy05OTk5ZW0nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc2xpY2stYWN0aXZlIGJ1dHRvbic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICB3aWR0aDogWzIwLCBudWxsLCBudWxsLCAzMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbGk6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAnKyBsaSc6IHtcclxuICAgICAgICBtbDogJzZweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL2ZlYXR1cmUnO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuXHJcbmltcG9ydCBpY29uMSBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzEucG5nJztcclxuaW1wb3J0IGljb24yIGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvMi5wbmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8zLnBuZyc7XHJcbmltcG9ydCBpY29uNCBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzQucG5nJztcclxuaW1wb3J0IGljb241IGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvNS5wbmcnO1xyXG5pbXBvcnQgaWNvbjYgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy82LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaWNvbjogaWNvbjEsXHJcbiAgICB0aXRsZTogJ0RlcGFydGFtZW50byBkZSBSZWdpc3Ryb3MnLFxyXG4gICAgZGVzY3JpcHRpb246IGBTZWphIHBhcmEgcXVlbSBlc3TDoSBpbmljaWFuZG8gdW0gbm92byBuZWfDs2NpbyBvdSBwYXJhIHF1ZW0gc29tZW50ZSBwcm9jdXJhIGFsdGVyYXIgc3VhIGVtcHJlc2EgasOhIHJlZ2lzdHJhZGEsIG9mZXJlY2Vtb3MgYXBvaW8gY29uc3RhbnRlLCBlbGFib3JhbmRvIGEgZG9jdW1lbnRhw6fDo28gcGFyYSByZWdpc3RybyBlbSB0b2RvcyBvcyDDs3Jnw6NvcyBlIHJlcGFydGnDp8O1ZXMgbmVjZXNzw6FyaWFzIGNvbSBhZ2lsaWRhZGUsIHBhcmEgcXVlIG8gZW1wcmVzw6FyaW8gcG9zc2EgcmFwaWRhbWVudGUgb2J0ZXIgbyByZWdpc3Rybywgc2VtIG5lY2Vzc2lkYWRlIGRlIGF0cmFzbyBubyBpbsOtY2lvIGRhcyBhdGl2aWRhZGVzLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGljb246IGljb24yLFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gVHJhYmFsaGlzdGEnLFxyXG4gICAgZGVzY3JpcHRpb246IGBPcmllbnRhw6fDo28gZSBjb250cm9sZSBkYSBhcGxpY2HDp8OjbyBkb3MgcHJlY2VpdG9zIGRhIGNvbnNvbGlkYcOnw6NvIGRhcyBsZWlzIGRvIHRyYWJhbGhvLCDigJxQSVPigJ0sIOKAnEZHVFPigJ0gZSBvdXRyb3MgYXBsaWPDoXZlaXMgw6BzIHJlbGHDp8O1ZXMgZGUgZW1wcmVnbzsgTWFudXRlbsOnw6NvIGRvcyByZWdpc3Ryb3MgZGUgZW1wcmVnYWRvcyBlIHNlcnZpw6dvcyBjb3JyZWxhdG9zOyBFbGFib3Jhw6fDo28gZGEgZm9saGEgZGUgcGFnYW1lbnRvIGRvcyBlbXByZWdhZG9zIGUgZGUgUHLDsy1MYWJvcmUsIGJlbSBjb21vIGRhcyBndWlhcyBkZSByZWNvbGhpbWVudG8gZG9zIGVuY2FyZ29zIHNvY2lhaXMgZSB0cmlidXRvcyBhZmluczsgQXRlbmRpbWVudG8gZGFzIGRlbWFpcyBleGlnw6puY2lhcyBwcmV2aXN0YXMgbmEgbGVnaXNsYcOnw6NvLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGljb246IGljb24zLFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gRmlzY2FsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgT3JpZW50YcOnw6NvIGUgY29udHJvbGUgZGEgYXBsaWNhw6fDo28gZG9zIGRpc3Bvc2l0aXZvcyBsZWdhaXMgdmlnZW50ZXMsIGZlZGVyYWlzLCBlc3RhZHVhaXMgb3UgbXVuaWNpcGFpczsgRXNjcml0dXJhw6fDtWVzIGRvcyByZWdpc3Ryb3MgZmlzY2FpcyBkbyBJUEksIElDTVMsIElTUyBlIGVsYWJvcmHDp8OjbyBkYXMgZ3VpYXMgZGUgaW5mb3JtYcOnw6NvIGUgZGUgcmVjb2xoaW1lbnRvIGRvcyB0cmlidXRvcyBkZXZpZG9zOyBBdGVuZGltZW50byBkYXMgZGVtYWlzIGV4aWfDqm5jaWFzIHByZXZpc3RhcyBlbSBhdG9zIG5vcm1hdGl2b3MsIGJlbSBjb21vIGRlIGV2ZW50dWFpcyBwcm9jZWRpbWVudG9zIGRlIGZpc2NhbGl6YcOnw6NvIHRyaWJ1dGFyaWEuYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaWNvbjogaWNvbjQsXHJcbiAgICB0aXRsZTogJ0RlcGFydGFtZW50byBDb250w6FiaWwnLFxyXG4gICAgZGVzY3JpcHRpb246IGBDbGFzc2lmaWNhw6fDo28gZSBlc2NyaXR1cmHDp8OjbyBkYSBjb250YWJpbGlkYWRlIGRlIGFjb3JkbyBjb20gYXMgbm9ybWFzIGUgcHJpbmPDrXBpb3MgY29udMOhYmVpcyB2aWdlbnRlcy4gQXB1cmHDp8OjbyBkZSBiYWxhbmNldGVzOyBFbGFib3Jhw6fDo28gZG8gYmFsYW7Dp28gYW51YWwgZSBkZW1vbnN0cmF0aXZvcyBkZSByZXN1bHRhZG87YCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaWNvbjogaWNvbjUsXHJcbiAgICB0aXRsZTogJ0ltcG9zdG8gZGUgUmVuZGEgUEYvUEonLFxyXG4gICAgZGVzY3JpcHRpb246IGBPcmllbnRhw6fDo28gZSBjb250cm9sZSBkZSBhcGxpY2HDp8OjbyBkb3MgZGlzcG9zaXRpdm9zIGxlZ2FpcyB2aWdlbnRlczsgRWxhYm9yYcOnw6NvIGRhIGRlY2xhcmHDp8OjbyBhbnVhbCBkZSByZW5kaW1lbnRvcyBlIGRvY3VtZW50b3MgY29ycmVsYXRvczsgQXRlbmRpbWVudG8gZGFzIGRlbWFpcyBleGlnw6puY2lhcyBwcmV2aXN0YXMgZW0gYXRvcyBub3JtYXRpdm9zLCBiZW0gY29tbyBkZSBldmVudHVhaXMgcHJvY2VkaW1lbnRvcyBkZSBmaXNjYWxpemHDp8Ojby5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBpY29uOiBpY29uNixcclxuICAgIHRpdGxlOiAnUGxhbmVqYW1lbnRvIFRyaWJ1dMOhcmlvJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgRWxhYm9yYcOnw6NvIGRlIHBsYW5vIHBhcmEgZWNvbm9taWEgVHJpYnV0w6FyaWE7IEVzdHVkbyBwYXJhIGEgY29tcGVuc2HDp8OjbyBkZSB0cmlidXRvcyBpbmNvbnN0aXR1Y2lvbmFpczsgRXN0dWRvLCBhdmFsaWHDp8OjbyBlIGVucXVhZHJhbWVudG8gZGEgZW1wcmVzYSBkaWFudGUgZGEgbGVnaXNsYcOnw6NvIEZpc2NhbCBwYXJhIG8gbWVsaG9yIGFwcm92ZWl0YW1lbnRvIG5hIGRldGVybWluYcOnw6NvIGRlIGltcG9zdG9zIGUgY29udHJpYnVpw6fDtWVzLmAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFVsdGltYXRlRmVhdHVyZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJzZXJ2aWNvc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICBzbG9nYW49XCJTZXJ2Y29uIENvbnRhYmlsaWRhZGVcIlxyXG4gICAgICAgICAgdGl0bGU9XCLDgXJlYXMgZGUgQXR1YcOnw6NvXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mZWF0dXJlc30+XHJcbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiYm91bmNlSW5Eb3duXCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgICAgICA8RmVhdHVyZSBjbGFzc05hbWU9XCJmZWF0dXJlLWl0ZW1cIiBrZXk9e2l0ZW0uaWR9IGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVsdGltYXRlRmVhdHVyZXM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxNF0sXHJcbiAgICBwYjogWzgsIG51bGwsIG51bGwsIG51bGwsIDE1LCAxNiwgMTldLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IFs1MCwgNTAsIDgwXSxcclxuICAgIHA6IHtcclxuICAgICAgbWF4V2lkdGg6IDQ5MCxcclxuICAgICAgbWFyZ2luOiBbJzEwcHggYXV0byAwJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZmVhdHVyZXM6IHtcclxuICAgIGdhcDogWzM1LCBudWxsLCBudWxsLCA0MCwgJzUwcHggMzBweCcsIDYwXSxcclxuICAgIGRpc3BsYXk6IFsnZ3JpZCcsICdncmlkJ10sXHJcbiAgICBtYXhXaWR0aDogMTAzMCxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICBdLFxyXG4gICAgJy5mZWF0dXJlLWl0ZW0nOiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnYmxvY2snXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWF4V2lkdGg6IFsyOTAsIDI2MCwgbnVsbCwgMjgwLCAnbm9uZSddLFxyXG4gICAgICBtOiBbJzAgYXV0bycsICcwIGF1dG8nLCAnMCBhdXRvJywgJzAgYXV0bycsICcwIGF1dG8nLCAwXSxcclxuICAgICAgZmlndXJlOiB7XHJcbiAgICAgICAgbTogWycwIDAgMjBweCddLFxyXG4gICAgICB9LFxyXG4gICAgICBoNDoge1xyXG4gICAgICAgIG1iOiBbJzE1cHgnLCAnMTVweCcsICcyMHB4J10sXHJcbiAgICAgIH0sXHJcbiAgICAgIHA6IHtcclxuICAgICAgICBmb250U2l6ZTogWycxNHB4JywgJzE0cHgnLCAnMTZweCcsICcxNnB4JywgJzE0cHgnLCAnMTZweCddLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59OyIsImV4cG9ydCBjb25zdCBzbHVnaWZ5ID0gKC4uLmFyZ3MpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGFyZ3Muam9pbignICcpXHJcblxyXG4gIHJldHVybiB2YWx1ZVxyXG4gICAgICAubm9ybWFsaXplKCdORkQnKSAvLyBzcGxpdCBhbiBhY2NlbnRlZCBsZXR0ZXIgaW4gdGhlIGJhc2UgbGV0dGVyIGFuZCB0aGUgYWNlbnRcclxuICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKSAvLyByZW1vdmUgYWxsIHByZXZpb3VzbHkgc3BsaXQgYWNjZW50c1xyXG4gICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAudHJpbSgpXHJcbiAgICAgIC5yZXBsYWNlKC9bXmEtejAtOSBdL2csICcnKSAvLyByZW1vdmUgYWxsIGNoYXJzIG5vdCBsZXR0ZXJzLCBudW1iZXJzIGFuZCBzcGFjZXMgKHRvIGJlIHJlcGxhY2VkKVxyXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpIC8vIHNlcGFyYXRvclxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXHJcbiAgY29sb3JzOiB7XHJcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRTZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXHJcbiAgICBoZWFkaW5nU2Vjb25kYXJ5OiAnIzM0M0Q0OCcsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kU2Vjb25kYXJ5OiAnI0Y5RkFGQycsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJDb2xvcjogJyNFREVGRjYnLCAvLyBib3JkZXIgY29sb3JcclxuICAgIHByaW1hcnk6ICcjMGM1Yzk5JywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcclxuICAgIHNlY29uZGFyeTogJyMwYTRlODInLCAvLyBzZWNvbmRhcnkgY29sb3IgLSBjYW4gYmUgdXNlZCBmb3IgaG92ZXIgc3RhdGVzXHJcbiAgICBtdXRlZDogJyM3QjgxODgnLCAvLyBtdXRlZCBjb2xvclxyXG4gICAgYWNjZW50OiAnIzBhNGU4MicsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXHJcbiAgICBkYXJrOiAnIzEwMTMyRCcsXHJcbiAgICBsaW5rOiAnIzMxODNGRicsXHJcbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGRhcms6IHtcclxuICAgICAgICB0ZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcclxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcclxuICAgICAgICBtdXRlZDogJyMxMTEnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiAnRE0gU2Fucywgc2Fucy1zZXJpZicsXHJcbiAgICAvLyBib2R5OlxyXG4gICAgLy8gICAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgaGVhZGluZzogJ0RNIFNhbnMsIHNhbnMtc2VyaWYnLFxyXG4gICAgbW9ub3NwYWNlOiAnTWVubG8sIG1vbm9zcGFjZScsXHJcbiAgfSxcclxuICBmb250U2l6ZXM6IFtcclxuICAgIDEyLCAvLyAwXHJcbiAgICAxNCwgLy8gMVxyXG4gICAgMTYsIC8vIDJcclxuICAgIDE4LCAvLyAzXHJcbiAgICAyMCwgLy8gNFxyXG4gICAgMjIsIC8vIDVcclxuICAgIDI0LCAvLyA2XHJcbiAgICAyNiwgLy8gN1xyXG4gICAgMjgsIC8vIDhcclxuICAgIDMwLCAvLyA5XHJcbiAgICAzMiwgLy8gMTBcclxuICAgIDM2LCAvLyAxMVxyXG4gICAgNDAsIC8vIDEyXHJcbiAgICA0MiwgLy8gMTNcclxuICAgIDQ4LCAvLyAxNFxyXG4gICAgNTIsIC8vIDE1XHJcbiAgICA2NCwgLy8gMTZcclxuICBdLFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIC8vIGJvZHk6IDQwMCxcclxuICAgIGhlYWRpbmc6IDUwMCxcclxuICAgIC8vIGhlYWRpbmc6IDcwMCxcclxuICAgIGJvbGQ6IDcwMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHRzOiB7XHJcbiAgICBib2R5OiAxLjUsXHJcbiAgICAvLyBib2R5OiAxLjUsXHJcbiAgICBoZWFkaW5nOiAxLjI1LFxyXG4gICAgLy8gaGVhZGluZzogMS4xMjUsXHJcbiAgfSxcclxuICBsZXR0ZXJTcGFjaW5nczoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBjYXBzOiAnMC4yZW0nLFxyXG4gICAgaGVhZGluZzogJy0wLjVweCcsXHJcbiAgfSxcclxuICBzcGFjZTogW1xyXG4gICAgMCwgLy8gMFxyXG4gICAgNSwgLy8gMVxyXG4gICAgMTAsIC8vIDJcclxuICAgIDE1LCAvLyAzXHJcbiAgICAyMCwgLy8gNFxyXG4gICAgMjUsIC8vIDVcclxuICAgIDMwLCAvLyA2XHJcbiAgICAzNSwgLy8gN1xyXG4gICAgNDAsIC8vIDhcclxuICAgIDQ1LCAvLyA5XHJcbiAgICA1MCwgLy8gMTBcclxuICAgIDU1LCAvLyAxMVxyXG4gICAgNjAsIC8vIDEyXHJcbiAgICA2NSwgLy8gMTNcclxuICAgIDcwLCAvLyAxNFxyXG4gICAgODAsIC8vIDE1XHJcbiAgICA5MCwgLy8gMTZcclxuICAgIDEwMCwgLy8gMTdcclxuICAgIDExMCwgLy8gMThcclxuICAgIDEyMCwgLy8gMTlcclxuICAgIDEzMCwgLy8gMjBcclxuICAgIDE0MCwgLy8gMjFcclxuICAgIDE1MCwgLy8gMjJcclxuICAgIDE2MCwgLy8gMjNcclxuICBdLFxyXG4gIHNpemVzOiB7fSxcclxuICBicmVha3BvaW50czogW1xyXG4gICAgJzQ4MHB4JyxcclxuICAgICc2NDBweCcsXHJcbiAgICAnNzY4cHgnLFxyXG4gICAgJzEwMjRweCcsXHJcbiAgICAnMTI2MHB4JyxcclxuICAgICcxMzY3cHgnLFxyXG4gICAgJzE0NDBweCcsXHJcbiAgICAnMTYwMHB4JyxcclxuICBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzcyMHB4JyxcclxuICAgICAgICAnOTcwcHgnLFxyXG4gICAgICAgICcxMTQwcHgnLFxyXG4gICAgICAgICcxMjYwcHgnLFxyXG4gICAgICAgICcxMzY2cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBwYWRkaW5nTGVmdDogWzZdLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IFs2XSxcclxuICAgICAgbTogJzAgYXV0bycsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge30sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHt9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICcwLjNzIGVhc2UtaW4tb3V0IDBzJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAncHJpbWFyeScsXHJcbiAgICAgIG1pbkhlaWdodDogJzYwcHgnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAzMHB4JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYmc6ICdkYXJrJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5TWQ6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMucHJpbWFyeScsXHJcbiAgICAgIG1pbkhlaWdodDogJzUwcHgnLFxyXG4gICAgICBweDogJzI1cHgnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5wcmltYXJ5JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAnc2Vjb25kYXJ5JyxcclxuICAgIH0sXHJcbiAgICBtdXRlZDoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VERjBGMicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3aGl0ZToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBjb2xvcjogJyMwMjA3MTgnLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgcGFkZGluZzogMixcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAvLyBib3hTaGFkb3c6ICcwIDAgNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxyXG4gICAgfSxcclxuICAgIG9mZmVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxyXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcclxuICAgICAgbTogMixcclxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlQ2FyZDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXSxcclxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93J10sXHJcbiAgICAgIHA6IFswLCAzXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyQ29sb3InLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIHB4OiA1LFxyXG4gICAgICBweTogMCxcclxuICAgICAgbWluSGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgfSxcclxuICAgIC8vIGgxLWg2IEhlYWRpbmcgc3R5bGVzXHJcbiAgICBoMToge1xyXG4gICAgICAvLyBmb250RmFtaWx5OiAnbm9uZScsXHJcbiAgICAgIC8vIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICAvLyBmb250U2l6ZTogNixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICAvLyBmb250RmFtaWx5OiAnbm9uZScsXHJcbiAgICAgIC8vIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICAvLyBmb250U2l6ZTogNSxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDQsXHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgfSxcclxuICAgIGg1OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogMixcclxuICAgIH0sXHJcbiAgICBoNjoge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICB9LFxyXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcclxuICAgIGhyOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcclxuICAgIH0sXHJcbiAgICAvLyBhbHNvIHlvdSBjYW4gdXNlIG90aGVyIEhUTUwgZWxlbWVudHMgc3R5bGUgaGVyZVxyXG4gICAgdWw6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgc3JPbmx5OiB7XHJcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcclxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcclxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXHJcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFzb25yeS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9