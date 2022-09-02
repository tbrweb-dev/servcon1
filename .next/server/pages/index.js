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

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADl2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA5LTAyPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjI5OGM0MDM5LTMxOTMtNDQyNC1iMDI3LTQ0MTEwYmRlNDY3YTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5UYnIgV2ViPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+f2NPIwAAGrlJREFUeJzNnHmcVcW177+rau8z9gANymQERYNDHLkqjlFjxAE1coNGwNwk7+UZ85J7Y2JM1Nw4JiYmUZP4EshgEqeoOKAoqOA8ogKOCA4gCtLMTXef7tPn7Kr1/tj7nO6GhmbMe+vz6Q/d7KGqfrVq1Vq/tWoLO0AyEychavAqCA4rWBGjkVdvDQhC0ftMWtgf2A/YV+BghRFADZBByAOgFIAi0CqwUOF1YL7Cux2OdzIhRVTwqgRGjPcqTsWpcxgrqDEUb79gu8ck2/NwZuKfCMQRiKfDBRjUFkq4fApEDJHXoVY4HvRIhONQGQEaQ7Vhy9pzj1QrF/AgCwR9VuFlhzwVGD5WrxTKlnzorIILpUykFi+W9u0AaNuA+erN1JQDvBPK4kgFxhS883ljKURi84GOAc4GGQP06wRBAXGAV1WTtC/delLFAQVURDxgAJs8H9+irAF9GHigULYP50PnCq9NJ/9vp5li5H3aCyY0tAZluPU7Wz3ErQYmP34yYiPwgqqRwIpEXn1BAslrNA64GOEwNNEKVafgESwqUhm5iIiCyib6ULmmXVQGREGdgEHEaoIQyKugvz5j5AX3TJszmcCIiZwqoiqiqLcU7tw67dlyYMbdQy61Bq9Ksc2Qz2PV44LAEHk9RdDrgIMlVg8HqqoYRERQVKvLZ1uXr6rGD6soKCqCBxHQBCTmKFwWGHk8ihQx2EJkXCaIMBjaSg0w5ZwtamyLOlkzYRIqkDQu1mCcV6fKECNyPTC+AkgywQZARFDVGJsdKKqqlXcnw/BJCzb5v9vUcymGZVawTtWDqABilNbbLuy1jV47nJ0wqWoIFEzZl33GpnBex4rwZxEaQHyi8kYQIemzyPYZ995EY62BziXn40lQo8pahW9a5P52307aZAyxAcCLoa0Xw2w2dzE3YRK2c3RWUZ/xWbzqDSLcJyINqlKOJ1AsgMa2UXY2KFAFPl5YcaNWVUVVyiLSIHCfhxvqciMB9fEY4ody4ydt/t2bupA7/49YH49SwariIvX50JgHROSLxDuLSmxUVdnxS2ZrpbLEiDvkRESS3W8mxp+tXgoiYgWcKDijtG1iWfU4kPxXJpPMPwoWcF4ZYIRHRTgYpKyqQQLEJjyQf50kdiz+Pem0SLy8BIkQQlWd65TTjLBCwAo4ENRB4a6Nl9XGgzn+SnJDBlaXD4pT0YGCPC/IcISyqobGCFakslH8PxMhnjXfBRyoao+oKoKUgVDRD1X1GEEaESyIU4G2pcvh6Su7vTfYsKH8boMq1t6oqhNMXoTpAsMhBsUao+2liHJ7Kd6DBaqurNcNX7nzJLHwmVyKVGBwvhOc2E+q7l6hiJQFhiMyHS/HetWCETUgPr/bIAobvLrbbGfG/wFEMCBRpFpa0Cj5zw2eKSJfUKUMGloj2txe5sCh/WTisSNoqEmjQFtHhDVCPr0R1jsej6TjXmHxymb+8fQCPl1XIJcO8L5HzUFVBaQsQqjKEyMO0pPemmcIjYpHFPUU7/zWxsBkJ/yJrA1oLhXIBRnj1XtFfw98R4QyEBoRbS1GnPi5ITL98jMIreGNj1bTvy7DkIYaAOYuWrXBm3e8xKAogTEcNKw/q1vaOfmah3hryRpy6aCb5mwIjghlVQlBfy/IfxoRUyhHvi4TUiyWaL/7f3fvfs2EyRgxePUWcIpOBLlNBKeqRkTEJ7+8c+N5qMKJV03l41UtIHDp2SO5+twj+MJVD/LkvI9IZ1M43XnLShAi5/ns4D48f+1YFixr4vgrHiCb6llju9gcFRGvqEVlggh3AtYIznko3BEbYgOQPf8PeAtOnVHUedXhwGQREpRjr6kceRlYn2P3/rVc98AcFi1ZQ202hRXDL6fOpaW9zNmH7wEK2XRAJuz8yYYB2VT3/9uen3Roqc+nWPjhSq699zWO2WcQQxrylCLXo7LGoFABJ3GBdJL3uqf36iKvxuHJnv+HTmCMT6EejIARRUSuEyGnqmVBjMbBgMQNQLEcsXJ9O5IJY5W2QiYMaCmW2KUuC6HF+85OGREi7ymWHJV3bChmG5aeKpAOiBKD3782i/Ob3ierW7hgVLUsIrUi/MIGgrUGnEd8GPcne95kNLJYxXoV79WcBowj5j8CRTWOMroPNNGmagcVxWzCvyt0lKnLphg+oI6y85QjnzxXibShreSInI8H1uVar+I7gVa0d9MmoCpKvCN7YJxz+kXn1Fsb2MgHZM+bjLGBoEGJ1rJzBUkBenVCDqiglXi49/msUgCd/xgR2jrKjBk5jA9uPp93fzuB+y8+lbpcqrp7WCO0tHbw1eNG8MK1Y2moSRM53814blnbWybJlNLF3iBwXVtoKah3xpSwFoxoGSNq86Ehp6WvIDISNELFqIhu1s2vBCtSmTWptI4IRN6Tz4T86YLjmb90Ld/967OcduhQvn7CvrQVOsiElvXN7Yw7Zm/++u0TWdlcZF2hA7st66rS8Jbc1RmaG8ABI/Pl6Mv5OL6x4ksY5y3n/P4c1/cz9Qj6vZhbQhAV2cxMOK8Q+XhpOE/ZaRfCJL5Hky21oSbDohXNPPn2UgDqsikwwprWIl84ZCj3fP8UXn6vkXG/mYFzHmNky5fSNkpifqVLOPGDfgcO45e3X+CcBhgR7D3fuYd1n6w/HTiCGEEj8YLdeAoEnFPSoSWTDanJdP6YCkGXcDehtaxv6+Civz/PV47em3duHM8bH63m70+9C145fv8hzPrpWbz6wQpO/fk0nFfS4cZO2s4QoTr1htjWjFrz5ken/2jiZMSIDQRRjdVkfDLdCtIj51gJGbPpgLsvGt1jg8Wyq1pDr0o2FTBp5tu8uLCRz/Sv4ZUPVrB8ZTMH7z2QRy8/g8Urmznr+uk0tXaQCi3WaFeCa6cBA5BwAsSUhBjgPOARQAMf93+AETk1oSBNDGT3XikQWMOq5nYu+vvz7NaQJ/Ka7E7x9YvPOJjAmirVBzExk00FvLlkNW8sWY1zngP3GsAL146lsamN4376AMtXt7L/0P5kUpa3P1mLEbDG7HxwKsamsqGqnqLKLsCqQOKFdjpKXxAnoqYLP9sJTPJ02XluenAeON+pUl7BGiYe+1lCazbaJbxXarMpCh1lhjTU8dhPzkQVTr7mIZY2rufKCaO4YtzhANz27EK+OekpbALqzpY4hFKJWQT6AWMQ/hYYAa+cWMFONkE3dVXv+rpMFThBcF6xRgis6TTA1Ybja83tJQb1zfPMVV+iPpviqJ/cx8KP13DA8F25Ytzh/PGxt3lveRM3fu0Ypr22mCkvfkBdLo3fyUY4dvqqWQkUviAifwu88ylERiX3mW58fg/gAFUnLBk63sdP9eRQVLSsf22GRy4dw7Bd6xh12b28vngVmWyq6vGuam5n5fp2ANKBjbfGnl+5wyVxaUxiY0dpUVIBmP2APahStTtWjBHaW0v8/LxRHDi0HyddNZXZ7zXSpyaNc8r8peu4ecab/HTcYQA89vrHPPjaYvLZ1AYTsPNEqdhUBWQPQt0vQPRQwMQZQjU9RzLbLs4r6UyKW556l9ufe485i1ZRl0tTjmLvNgwMP7j1Baa89AG12RTPvvsp5chXl+W/ws4IMamVYGARDgmA4YlT5pHNZw22VVKhYeGnTahCfS7VjS+xItjA8vyCRrwqNZmQMDAJObfpbVs749odJgpewCoMD4B9BYkTe5VofEc1QzwA7yG0BhGpBpDdRCCXMH9eNXa3qIQanV5wBSAjgjFJRGylGkJsT9crdETif+wXAMOSa0Zl04Z3qyTO8uC8R4jtTEVML3GQqXDIQOQ81nQCYk0MbKFURiuOZHM7TW0lIAbVGkEQvG5dIKqdsRPAsADoW7m4Q0CJX0TZeQb1zTHj8jPYpTZDeSsiZueVPvkUf5o5n4v+/hx12RRl51nf0kFtPs1JB36GkXvuwuCGPK3FMgcN7V99tqPQQareYoxsVWhRibaTP/sGQJ/O4ew4sUYoFMv88/n36JNLx17yFj7rVcmlA15YsJxUYGnriAgDwyVjR/LDMw+hf10WgJb2EqE1ZBI689HLz+Bn98/hL7PewamSCYNYa7d8vis31gaQVDLtSNF4SbQUy1x552zwfitgT2IMr5hsiCDsNaieKT84hQN278eMeUv421MLeOm9RgrFMgr0yaU4csRA/uPz+/C7bxzLxOM+yzk3PMbSNa3k0+HWggNQExBH0+FWDr334VUYPivYVMiWOLAi4JwnkwqoyYQ0t5fYe1AfXrh2LCCcdPWDPPHGJwBk0gHFjgixQkfZ8c9n3+Ofzy7kjMP25L6LT+W5a8Zy7H/fz/J1BdKh3eqIPQDagMw2jX6TI4ztRF02xa/OP5oBfbJEke/VRRIg8srNM97klQ9W0CefZuolp6EKh15yF4uXr6e+NoM1wrrWDn40diSfrG7lzmcW0K9Pjsh5ps1exCGX3M3c68/hnu+P5vgrHqiCshV+UWsANAMNdOaxdoh4r+TSIcfvP4QB9dleja9q7H9mQssDryzCv/ExP/jKEew1sJ7PX/EAixvX07cui/Oeda0lRgzuw8/Hj2LBsnU89+6nLG8qkEsF9K3P8s7iVZx9/QweuWwM3zhxX/7PI29SX5vB9eApbNiNBIOWAFhHsmVXci/bjYpCGBgamwoccekUwsD2yshVwiLnlY6yo9+udfznqQdy1wvv8+xbS5OBKa3FiOP2G8z0y8bQUXaMGNyH2dd9mZOvfYiFy5rIpKC+Lsv0OYt5/I2PueSsQ7nlyXd75ZG1+2JfZ4CPkj/8jizj0MQAFzoimlraWd/asdmfptYiLe0lRKAcOT6//xBqsilue2Zht9yKjxzfHn0Apcgz9MJbOeSHdzOob56zD9+TcnsJ22UI/3h6Abv3r+WQPXahveQ2m6KRuASpolMfBcB8VM8m3sZ3jMZIHJiF1nDKwbuTTwe4zZRFqCphYPl4dQvzl66FsuOQYbFvMnfxKjKp7nRn5D2ZlGWvgXW89uEqTv3ZNJauaSWV6ww806mAFxc2AnDwsP68OP9TREI2tQuoqEpS5wO8GwAfJgvL7MhYthx5BvWv5c7vnUzffDqJj3q+1/kYxOlzlzDuhkfBGgY31LC6pUhbRxkjUi1ktaHl+qlzGX3Q7rz4sy/TVOjgl1Pn8tQ7y0gFtrNYR2IOyHtlYJ9cnEzbXIfjBkzygg8DVOYheFALomyKBN9KSQWGT9cVOO6/74+rEHpB3YiwYn1bHPd4pVAsU5sJ490EDwkhlgktqcDy5d88ykFD+zFm5DCum3AkkfP8eurcqi2CmB4VgfaS2+yOGKuJkGDgUeYGlGU+Kb8YZHicqd4BNYVJrATK/KVr8VvIq4SBJZ+JXapla2P/Y9f6LB+tbCG0ECXdn/bj05nx+hK+fvn9/Pbe11j0t//B0fsM4tdUbBuUIs9nB9UjIixd0wpWNsl5JaSDJt7XYtD5gaS1pMrLoMMBL0qw3fqSPK+q9KvNYE3vbIYQZxgi57HpgCffiXNQpx86jJsemkc+ExAAze1lZsxbwtdO2JeWn5yBNcIeu9bx+xlvUhmaiOBLEaMPHgoQhxaJnepJNC7MdsS81EtipRQk2+gTqkyoVARUati2B5uycwxpqOGFa8eya31ui2zM1FcWce6Nj5FLBbyxeDVzF63iojEH8adZ71CKPIExZELLj+94iVw64LunHgjAb6a9zl+feJd8PoVqDPCA/jX81+kH8sjcj1i0Yn2cFu4Bl1hTqinbGAsPQXLvdANrgYYKftvr6wXGsLa1yKV3vExdlZzq+V7VOIG3YFlTlWspRY6f3DWb6ZeN4dqvHMH3//IstXUZMilLU1uJc294jP12a+C1Rau4eNJT1DTkCa0h8kpHscxvLjyBumyKa+59rUp19OT5xqFLYl9E1nllhgCBxImmFYo+ijI+LhQSu4mc25ZJwr4Vy45bZr2zyS2yS/fihwJLTSYkcp66XIpH5y3h1w/N4+IzD6GpUOLqu2djw/ielDWcd9PjlCJHXb8aRGB9ewn1yg3fOJYJx47girtfYfbCRury6U0FkpqA5VQJQGcYkRUCJkiyBihyl6DjK6RwDzm3LZfkMSNCfe2Wh2GqWt1RfJLx/Mlds+lXm+Gqcw/nsL125fI7X+btT9biyxFvr2+LG7NCmA45bPiuXD/xKD6//xBueuQNrrnvVWpzqY0qOru2l0xKkiHgznhhIQGKG3Lm51j1+pJppU9aXgZGAQ7BJrmW7VpTzutGKtytLncD2rIrlWkl1udv/OFJ3lyyhl+dfxRjRg7jpYXLeWb+pyxf14YS+ymj9h7IiQfsBsBFf3+O301/i1zC0/S0hLpUVzkQC/py30GlR476cn8e/l2LC1KBYdm0t+OaV+S3KKOSdRdXv2+L1iSPVfYiT2dkW/m3a8Kua1Ktct100braTMhND7/O/bM/5Gsn7Mu/H7EnPz575EbN3vbsQn5612w+WtFMbS6Fwia1pbJFd5mI36xbnuaRm5uttVkXlD14xLVjwKbvyvv2i4GRoI64Nn8rwoRk1hNutr0cIUBNJuwGjhEodER4VVKBJR1YXFKbZkzsyBU6ItCYJDdGqMulaWxq4+q7X+GaKa+SSQUM7pvDGOG0Q4Zy09eP5ZYn5/PRp0009M1RivzmMgyJu6YOxQJzCvnUvbQVyahxImWMc4qUAvJ4m3ftqOqllZMjlcBBe7eelQbjfFBbiSH98jz0o9M59+i9aW4pxrtN8tPcUuS8Y/Zm2o9OZ3DfPM1tHQTWYI2hVPZ4r0z65vFcc94RFDqieDmi5NMhGGHknrsw5Qej2XNAPe+/+Um1Bq8+l0ZSlsh1X57dOxkXOFQyrol3cmm+UCav1vpSgIscQfs/LyA//s84F7kwDA0iM73zU0DGgZZFJIxNd+/AWGNY31Zij2H9eOqKLzGkXw1jRg4jmwq4ZdZ8anMpmts6+J+jD+DP3zoBgP1378eZv3iYtz5eSzZlyaQs//jOSZx12B4ANOTTfPeW58iElnVtRY4cMZBHLh1D35oMpx86jJNUaa5kCbyivXjZKpoUxmgZNASZYkVnAiZCXRB62u68IDYDPojAxvSfcx6FS1W1LQHFb8Cg9ygiQlupzP6faeC5a2Kn7qSrH+T2Zxfy1wtP5JKzD6WltcgPzzqUP3/rBGa9+QlHXX4fmdDy6i/Gceieu2CNYfplYzjrsD343t+eY+JvZ3Lh6AO47+JTaeuI+GISOAbWcMKVDzDlpQ+Y9dOzOPfovYDeUzOVJaSiXpBQlVaFHztN8lnWoUFcWRoAtN96IfkJk7Go97GF/lCRbyl6q3ShIzZnb6wROsqeI/YewMr17Yy67F7mvt/I0+8so7m9xC8nHsWZ/7YHR+8ziKmvLOKrN8+ipaXIkZfdy5NXfokXrhnLgk+bOHhYf77952f44+Nvg/OUnOOe75/CvF+dy+d278fq5rgKfN77K3hxYSOrmtv59ugDksnZDCh0G4MmNuJ/GWERxEd1iCyFO+KyeVt5MNjvVNLGUFDVlBgDvAHsChwhQqSK7bKrbNSFyCvnHrUXhY4yJ145lXeXraNvbRYRmPrqIowI539+BH95Yj5f/8MTqEJtPs3qlnZufXoBx+03mMP3HsDE383klsffpr42QzYTMndhIy+838h/nX4Q733axIlXPciCZetoqM/iFR58dTGhNRw5YiC3PbOQD1Y0kw476YeqpkilZF4iVQ2A34vIr4yIafNlnxFDhCF6a1oMctfBZSZOBgSjKmVFy4+VyZ8SzBKRL6CUFQ0rq2pDcJxX+ubTFMsRze0lcqk4bWEk3o6LZceQvnmWN7URWCG0JqmrMRTLEenAUptNsWJ9G/l0XFhdMeYt7WV2qcvQEXkKxTLZVLDRu3frV0NToWMjClOT44EJKPHxHNXHB33z+NGf/HEW1lrxggpC+x09HLKoSH7i5JizUTVe8UZNHuufEziE+ABXWIk1hWrghUhc229EsFY2YuZFoFR2pIJYSX0Xv6aSNYy8kg4MXunm91gjlKLe3u0JrHT7/w00pYxqqDDHYY4Vde0iYgT1iKGwwRnJjfiAwtLllV+9ESziC6iepsoHqoQiyRlIuhQQJ50JrNkoNVq5pkqVYevqdIl03p+y3UGpdkTZgnebDUDpcm5ApIwSKryv+FOt+nYjWEk43i5j3jQwPH0lElEh8ZLQQBo9HAM6Fwgl1hyt0BQK2nUgG0ewifu/Ddc3de+mnu3krivnBmItV3SOwjEgqyqn2+IEmNnodFvPwBCfEfSmypE6AWvQFRh/nKrO7GJrnCT0em/b+b9CVONTAgkoTuLy0xCYGXl/HMrKOC7CgaLG93geEjZzvLjttgsrZ3aJXyQWL4V0Zv+TQW7U+OiSTY4XV6sF9F9SNddd4tWXaHC8MZfjvqlR1RtNFJxsjLSJxAdf4xk3mzxBC1sQOecmTsaor5zrMB2+6LMmi0PHCv+fHEhXklKxDQ6kK9+0Ru4vuhKhCQ2JHyeitN2x+dP6vZKxbbdfUL1LwadMWhC1wP3qOVCV2yraIyJe4xNxCaujys7RIK3WicZcrBMR36kl3OZVD0T0fkRtaEIBvMTUTa+gwNZwLePuIZdai8dTjALygU8+eiFEXk8S+CVwaMyKikucHQMV9qKSG9o2LdJKHW61jlgUVZ9oaOWbDnOAHxtjZvnIgRFbKOAyuXirbyv127Efvegq+fGTEePi+VIRm3wmpU3byUv2HJDvi+gR1TqXyvdi4u+/VNvrLcToGoZ06a2K4kBMwtFW7p0N3HBW4z73TB24AGuM8c6riFeMoi7YiZ9J6SpfvZmaKIQOT1E8qbS1bT5yeRNQZzzN3owBxiEyGnRAZ0MVQ977h3USWLt/WKeiNvFNK1EeBabUpzMPr+8oUnCt5GyN9aWyy3iDS1taguhf82GdrlIzYRKRSTxBB0bVnrxrh3t8VRoRwSkNRvVk4ASQo0FHkASuGylK1Ynp/LO6dGKJEBaivAA85Y08blXWKp7xJx3GnTNftSo4Z8F4xXqhtYuLv7WyQ3aNzMTJZHA0FJtoTDcggjUiGineJNnPKBJrje4jMBLYBziYzX+8qwVYALwJLFCYU1K/IGOsq+SRLWI8XlRxg8WzWixFVYq3bzsgFfm/Z+cmV56DSQ4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/images/services/6.png":
/*!******************************************!*\
  !*** ./src/assets/images/services/6.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAEY2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDIyLTA5LTAyPC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPjNhNjAxY2VlLTA4NTUtNDljNy1iZTg4LWJlMzk5ZDM0ZWRjMDwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5vbnTDoWJpbDwvcmRmOmxpPgogICA8L3JkZjpBbHQ+CiAgPC9kYzp0aXRsZT4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6cGRmPSdodHRwOi8vbnMuYWRvYmUuY29tL3BkZi8xLjMvJz4KICA8cGRmOkF1dGhvcj5UYnIgV2ViPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+C9B/0gAAGu9JREFUeJzFnHe8FdXV979r75nTbqEZQDGikYhirFgwdrGDGvJRbE9iEl8T89hSH6JJFDQaS9QY80ZTfGKqUdGgoBIsscSGQSyRogJqEEH6vffUmb3X+8fMHED6BfOuD/fz4ZwzZa/frL3Kb+09wlaQ3PFXY4oNJIzw1TwGrAjqHd4YQAyNOoUw53cHhgC7AXsDg4FWoIDQAoBSBmpAFzAbeAWYAcyMGuaNXF5rKHgFYzCqKh6cCeqoD/GNHI1Hvr/FOsmWnJw/cSyhCLmyUCl5JBBbdbErmgAR8I6BYjgCOAg4DGQwqAEQ+citdd0jUs1+wIPMAn0a5AVV/m4M76kqVQfFAKuxdYFpx5lOfBRTf+SKbuvWPWBGXUNLFOFjiANDKN5U3+/0he3bqMYNW7S5kSCjQEeC9FmFgQLiAK+qJr2/rDGSJg4ooCLiAQNY0PSfALoUmATy12rkJhVzxlUfPJ3iSXebqqi3TskZoRrk4K+XbbaKZnNPyJ10FS2+BqIQIHnjDIrXRkVQRhdt7nlgAnCOiPQRUaeqkap6VVFVNaoaiIgFpCmkf9nH5DerqkF6jqqKVyESUScifUDOAZ1QDO3zqIz+Ynw8gG9TY0JjxKC0uBq5k67abGA23WJOu4dCbQaxQBy3UbJdVlWcMR7v5XiEHwN7iwgoDlFVxSAiooqKIApIN61UURUQTS6iqIrgQQTUKgKq0xQuC1SmxKIYsJWg4AJXJVCoFYbAvaO3HjC5U8ZifGrbIKFgvIrzyAAD14OelfoMp6ogGFQQUVSTR98tMNYjqqoiQuJ+FBAvCeo2vf8f1MulIvq+QW0EXgQVBO+UxkNjN3qPjQ64OPIqMD51gmJqUvUlLaLweeDXIvQG8aqqAkYTC1EVQbbQuW9MFDSzQlUU1KcPwajqMuA8gfsrNCiQMwJeEJwo9Qc37Jg36GMKI69MfKUCiFXwP1h+GAo3gdwnQm9VidIHaBVBFE1N5GMFBUiAl2ReIYokFiOKRiLSG7hP4aaf5vuhiFewqmAd5E++cmPXXreURowFK1kgsF5xirZYI39FOUakaSUWJJn//wEwNiTZFENVFFxqvAZ41DlGGUNZkhzLAeCVynqm1ToVCUdeiTVJUESxKM4r/YyRyQJ7I0RpZJHVzflj0XZzRRNYRBMPJyIxSqjoy0450cIiFayAUwHnhWjS5WtdZu2pdMRYAvFJBFGsggP6G8Ozgu6NaKSqYdOVZObcHR1WJW+b9dsGRZDM7adjDBEigX2t8CxCfxKdrCiEKBwxdq3LrAVMoS3RUcF49c55bUF4WISdQSJVwhQT7W60yZS2xmCNoKp4n/wl3wsm/b67sioGiCbgSJTowMPOa4t6dYBRgWL72mqsAUz+5CvxCB6Rho99fcn7Ehh5AGQfkEjRFJTuh2BVxYhgROiq1ulcWcF5xdoEjEbk6FxZptaICaxpntMdScGhCQ4SgewTGHlg4NACsVevKqJqyI9cMwlsKlc84QqsQNUYCgaj4FW5FeFCQbLpo+mNug+KMcTOUa9FHLLnjpx91F4c9pkd2bZPK84p7y1ewd/++Ta/nfIyb727mFJrASEZTHfToVV5j4pI8oBRbgUuFlET+9CHWsMHeaoP/AAAm50cDBmefCFJWAb5L5BrRcSpql0N/W6DYo2hEcW0FHLcdsnJ/OzrI9j1k9vw/Mx/89Tr7/D6O4toLeY555h9uOiUYTjg76/OwxhJyvVugrP62FXVCOJFGAa8JSKvGXFWSbLR+M0nk3MAiseOw4cWMd4oeJSdjehrIlJSVS8iJsnIt8RShCj2tBZyPHH9l9nrU/255LaH+e2Ul+ks12FlGQKLtBXp37uNy844jAtPPpA/PfEq5/zkfvJh0J1bf3QcqUPGi6hRpdOr7A06V8BILfKYkOqUKxKLCfY8EmkoJidiQAX9JSJ7i2qESMAWOFpYRTE0Ysd9l5/BIbsPZNg3fsX9j79CkA9xqpx42Gfo2buNBcs6acSOiU+9zrwlHVx+9pF4rzw29U0KhRzed39KZekFokZUIkSKgm5njLlXTFLSURTiWU9i8yddgwvBohaPV+VEEa4WSTJFWaVYt4GxRih31Tj9qD353uhDOe1Hd/PoczPpvU0PumoNduzXk6dvOJe9PtWfPz3xGtYYSq0Fpr4yjx49S1x6+mGMf24mC5Z2kAvtGlFNTJItrFafN79TWGv6CYqooKhJcOIzoM+BzhErlpxRu/MxGCsNgqpS/bd11X/UEOHKpFAlKWaz622BeK9gDZecMoxpby1g/NP/oq1XK121Btv1aeOxa79EtRHx2SE7cN8PzyCKHc4pubYiP/7L09QaMeedMBRfjzGp8gBd1TpdXTW6KjW6yulf9v9qvQnKmlFNmlVLGkkA+XF1Spl4vjqpKJaIAFtFtGSL2zvH9sUzEB0qSKyoRUS3NM0XoB45BvbrxbDdPsnFtz0EsSOwhs7OKgfvvhs79e/FLl+5hT136sf4H57BJ/v24N1FK2gp5Fi8tJNJL85mxAG7MKYlT+x8E5jD9tyJbdpLyXeJzgmFhbKyXGfq7PnrdNjSREuMgFN0aPHo1lMRHQ9q0cgFzrUy03/oRpuAN+j5DaEZ1rIEaUtwQUSInWNg3x4AzFmwDAKL84oJA2a9twTvlV9cOJIJz8/k9Gvu5sPlZXJBGjBjx+vvLOKUg3almAupNqKEzjOGG796HPt9egCx81gjeIV6FFPKh9SjmH0vuI3Z85dQyAV8NBXShDeSJCcDhW8Pbn13/PSL/9cVrvkRgVG1u5tPOIURgh5Iki6bhFvaejxK5hvqsQNJplcxH/DavIWce/MEfnDm4fz8gpHcOWU645+ZQTEXZMhSa8SEgcXahIMxVoicY9S4u+jfq7WZ41RqETecdywjDhgMQCkf4teTHKalTEKmgQcdNqtzxxGla658yOCsISMV0LMSw0+Ynq2FiJIkdR8s60JE2K53GziPtYZypc7IAwfz3VMPZtA5N/H1WyfypWP3Yaf+vahFcXMMO/bryZKVZWqpj1FNLGbR8i6mvb2A1+ctYtr0OZx66BBGHDCYh6e+SeQ8G8uXVxFd+KTI0jOTH0SNqveK7weckFTsGJGth40q5ALLvIXL+WBZJ8cNHQQ+8QliDAuXdzFkYF/+fNlovjB8L5asLLO0o0JoLbH3hC15jtl3Z56b8W/KlfoaZUIusLQX80T1iO+cczRXfnE4//Obv3H9vc/QWsglbmQD6KQkc6ozAMc79Z/wqDdGBEFGAL0A16RVt6KEgaHSVeWOyS9z9lF7MWhgP1aWa7S3FHjpzfc576cPcOaRe7LvoO343Li76KjUKeVDyh0VRn12CIO268Odj06HNIisHq5XdlQ4+5h9uOG847ht0lRu+N3j9GorbnJ9pdkEURzQx4qMNAaMMQJwVOqo08R56/mWrHIOizn+78QXWdZZ4a5LT8NaQ2elRo+WPL+ZNJWb7n+Wi3/xEM9On0OPljzLVnSxw4BtuPPbo/j7q/OY8NxMWloKuLQCDwNLx8oyJx08hD+OOZXxz7zBBT+fBIUcKMTOJwPYiCapshlNATDcimCiOMoBw9LjzNa2FxHBq5IPAxYu7WT01few3y4DePon57JD356sXNYFxvDtXzzMrx96CULL8uVdHLLXTkz/xX/TVWvw5Rv/ijUGUmsJA0tHR4XDhw7iwXFn87d/vsXoa+6mpZADEaw1hIEl7VhsVBLCr8k0DGtUNWfDwcP3EGFMZiWS+eutDY5XivmQWe9+yPOz5nPByQcwZvSh9P9ED/K5gFIpz8B+PTlqn50Z96XhXHfuccz5YBnHf//3zFu4PIkwXgmtpaNcY89B2/LCT7/KtLcWMOKHfwSUIPVL+TCgvSXPff94g3rkmg5k/ePTdJgiQE+x/FWKI8d9BeGOtIo2W3saSZp0ZWEzsIbOcp3+fZJC8Zxj9qG9lE9roATEBUs7uWXC89z6wAvUI0epEOKcT86t1Bm0XR9eue2/WbSizP4X3c7Kco1iCpw1Quw8kfPkAosxyUPZWGWe5mxeVS3KV6R40pVXg14mIpEqgWy1aJRU1LHzeJ9MJed9E5xaIyZqRLS1Ftlzp/707dmCV2XewuW8OX8ptUqdQkuewBicT0Cp1CP692rlxVu+RhAYhl54Ox8s7aSlEOK84pyn3oho0vJp9lbMh83SYL3gJMjEohoqXB0Au6VhWrZCBdAExRpDtRHRq7VIayHHO4uW01ZKUvrYeXKhJR8GNGLHs2+8ByloJjDkwoC29mKirPdYkwDZUsgx5Zpz2Ka9xNCLbuP9D1fS1pJvHterrcj+uwxKxgAYESr1iKmz5xPFbsMWIyJo6kRUhgSgO6bwGlXRLbWYDJRamppPHHc2uw/syyHf+g2vzfmA9rYiUexIUozk2NaibT4P1aR76VLzt8bQiB3WGCb/6IsMGdiX/S68jTfmLmpeK7SWSmeFr59xGJeffeQa44mdZ9glv2T6nIUU82uXBpkkFSUmxWJHQ5K/JD9uJVAasaMlH/L4tV9mv10GsKJc44VbvsoeO29LR2eVMLBr5Bl+NTI8+zqbis4nU/Evl53GQUM+ydHfu5Nps99vgtK0Aq/0ai1SqUWcfMWfOPEHv+fMa++hUo/IhcF6S4NVyKxhTr0MSM+0/7tVQImcw3nP/Zefyf6DBzD8e3cy9MLbWdxRYerPvsYeO/eno6tGaO16k7CMMEehWqlzx7c+xykH7cYZP76Hx196k/bW4nqnRkelxsQXZvHIszN56MU3iWK3GVpk8V3aDGhLaj7dAqSpiEkKuyj23Pv90zlq709xzKW/4+npc1jWWeGz3/gVi1Z08eItX2PwDtvQUVk3OE0HKVAu1/jpBSP54tF7c+7NE7j70Vdo79FCnPqjdYm1hvZSgVxLgfZSYaOh+iOakGLRaoDNgXTtS6WgeJ+0K+/9wemMOngIZ187nsemzqa9rUQpH7JgaSef/eavWd5V5Ynrvsx227TTWU1qnwycDJSM8fufMw/nklEHMeaOKfzvQy/R1iPhXjYUXVTBqU+n4PoB3JgYkMoqpLoHiipUqw3u/PYoPn/wEM66djx/fmw6PXq24FTxqvRoKbBgaSdHjfktvVqLPHfzeWzXp42uaqMJjogkucqKMuefMozrzj2WG+97luvveoq2tlIWfTFGmpawJU25tSWbOdJlQDtWBf3NBCWlACqVOj+7cCRnH7UXX7j+Pu6a8jKFUp6Ocp1KrUGlFrGiXCMXWGa/t5gDL/kV/Xq28OxN57Fdn3bKtYjAJl3JjpVlzjh2X2676CR+88g0vnP7IxRLecq1Bl3ptSq1iHKt0WTzth40SUUJ2hkAy4Edm9puQubbdI5ApVrnlgtGctEpw/jOryfzx7+9TEtbkW17t/GJni1pUpc0XmqNmHcXreD1OR9wwMW/5KWfnc/TN57L/hfdTle1QaMRMXz/Xbjr0tOY8NxMzv/Zg+QLIcVcyO4D+2KNSUFI7j9/SQeLV5SbVMQWQrI6vssDkHdA9wHxKgQbQ6VJMAOVrirXn38iF39uGN/9zd+48e5naGkrIAh3XXoa++0ygK5aA5NOkSh2HPSNX1NtRLw+dxH7X3w7037+dR695hwOvORXHLjbDjx27Zd4bsZ7jL76bvK5gEq1zhmH78Gd3/k85VoDkSSEtxXz/PLhf3L+zRMo5sMtBkZERVVcsqpU3glAZ6CMQlDZBItJWhRQrUeMOesIvnvaIYy5Ywo/uesp2tpLRM5jDQzs25PfP/YKV/3pSYr5kCP32olbvn4CudDSiBw924q8/tYHDB9zJ0/feC7/uOn/8OkBfXh93iKO+/7vERFygaUSe3q0FAA4/vt/oFxr4LznnstG06e9uMWAZJImt5nLmhmgzEkLAbMpLjhrxh+196e49txjufn+57j+z0/R2lZKkihNvZXAgqWdvD17PhRybL9NG943iSEi52jvUeKZV+cyfMydPH7dl5rVdKUWpfVPElW8Jin/q3M/oLNcA6+sKNcyjbYWNIBk9OCcQGG6gCfpY2+0DPWq5MKAtxYs49Sr/sLEF2dTbMknqfxHjs0FBgo5bCEknwvWWssbxY62tiJPTH+bfS+4jRXlKguWddJazBGn1XQmkhaDUZyEYrsV/MoqSJroWpJF5y8b32AGMC87Rjfie1WVwCZE9H1P/4vAmiYZtfYNgTRcr+vBJq0VT2upwKtzFzJ/cQethRxutd4RrIanT66VWebW4kdEpTlcYJ7XeIbJFaUBvJAtC01W065bsrzFGqGQC+jZXiJIF/90l8ZJgIW2Uo5SPkQk4XK3bn6yYUmarmTZ4PNhEDaClEN9XJWzJV0BmSZSa2iahehaI8bVojWvLJAr5gk3y7wFVU9nVw3cR0AILaVCbjPV654kNDfZmj2Ax70qQfrhYUGWAb01bdJ9VIxJQNljx34cvueOxC5l3IDIeSa9OJvFK8qk5PqGJc0nrTGcdfQ+bNNeSqdb0hJ5/Z0Peeq1eQRbIQxvdCjSDBYWZbmqPkKStxgDLAKdrMpZIjjVdCHralZjjcFV6pxxxB6MGX0o9ShuFoGZI7x9wgu0bELrQhBi7+ndVuJ33/k8gTVNeiEMLK/OXchB3/hVM4J9XKJZ70TUqRIAj4iYRYAJoOl5/pJ2IyWhkNZBznglH1penfsBh377DgJraCvlmfvbb6bTSDe9Tk/rnnoU84XrJzBp6ptUag1uPv9ERhywS8LN2I1fZkskWzudhGlF4c9pgSHGY9zo3WayQ2nFRJAXQC3J2nxZVx8vY/w7K3VWlut0Vurdr1d0Ff3YVa7hu2pEKav/cbteTdYDC4hPsl1eGETloVuljhdxJqCLe2buZv9d6QlwS+J407PW1xBv9m4MgbVbbO6BNRhrIWX1/xOSrq3Spo+BG+dQ4iLN2SBYgVFKqOKqKyOqs5f/BZimiAX12TrQdV1Ysww3/XlL1Mn434/dTJr30xQSvCZJ3bTqS53j46UK3jiN2zCOkDgMKPYMbXHXngCXpi2DbBMJ68q7m5Frk4LQxg/apL0qssm33ND1NF1cpFlHH+XS4v5tBH2M1SDEaR5Tn3gZgXNo7JyIMSLmUeBeBSMQa7qvY2PycT7s9V27O/fUVQt/4qQrwL0Y8yjGGlzk0Jj6xMuSfq00PBJ5vEvoQK9cimoFkRDwkoFMsuAnih2uEdNoxNQaMXHsmyE6q5icVxqRg0aMb8Q0onhVo301ib2nHiXH0IhpxK7ZuF8dgTj21NJ7xpGjEbvmEvtEkrIkco5awxFHMbWGI3J+dQgzK/GIhKh2ec/31HvUOcQK0kiY3gCgOnksxZFjMaZZTM5R5XzQ32f7BkjTMmuM7D94e56/9XwCmzjLXGgJrU2Hl2RG1gjf/PxnOXzPnQisoX+v1qRlKqvmgwgJr3LJKSz4r6OInWO/Tw9g/pKVSZmRapPd48kbzsV7JfaeYbtuz/3PzkgXuSTohdYyoE87z918HiJQCAP69mxJh57sufPqNVv2D/JVY5gLWBV1iqU6+QpgtZXh4W5HJy3VWNUYMcCrQF+QA0UkBmwDUqJIZdGKMos7yixa3sXzM//NA8/PYuHKCkFgcF6p1COWrKywtKPC4o4ycxcu57GX5zD5n28TuSQkOwXnPUs6KixeUWZpR5V/vbuI8c/MYPrbHyQZlQhdtQbeK8s7q3y4ssziFWVem7eQe59+g9kLlhJaS53kWpFzfLiizJKOCguXdfLka+8wZdrbWm1E2VbUWFUD4FYj3ICIiWLvbWih4Yjffip7bqskP2Jcso5RVVwsGk1eSfGk9scQhqNExkhYrkVK0h+WJjsN2EJIYbXGVrVaT2qgzG+n9UO+lE+WdJBQGLVyDVaLbmkVSbGYSz8mGy/iWiOdDFk2LBBaWgo5fFrHVeoR2ojXPE5Ec8U8gTWiqpEIoSpTrjvik8dd/Oi75AOTVEootUlXrDYxPyLFk8dlU9KoV+9EWwIxz4jIPqoaWWPC1fKv5vlZNzGrsu168pGs9Zopva7jFJr+o7lbZV3HpRaXNeytMR9tG2p6z9VBmYbXQz1UjZFkiwBQm3jFGieutUC/2qEUWwUEL0asRcrAiar6jMAgrxqhZNXdOkk/VWUdfrb5WwbeJh+XKLfuA1eTjKdZe2waiUioqm951RPESFUSN+IAap1rX3ttnuDJscSkcSjdCYay0KkeovByCkqUJEnplo00FGWKbIibWYOA2oTjNsbzrHWcksGTJacRKqGqTnPKISKyWNJ9kUK6/+/JsWtdd50ESjTpcoxLykiTvHLAGmSRcxym6KPNvUuok7TaXF+G/J+UzF4keSWASyNqqKKPxuhhBj4UsAguXc20zv2QsIHtxZWHxuIloyTFIVixUv5xvtexwM3p6iurycZRmtvP16Z+P37RrCZMdjcrEolgNVncfPPFK4Yea6CCpNMneaTr3UELm5Bd508eh012a6BgajR8iRza3JAuvUleYvH/aUO6Qmq+NDekq1Fl1YZ0qVLQohE03ZAu1B9ct6VkslHGw81+Evn04YhJGk8WKxasIjNU5U+IfgJlbxExiDS39CcRtbm8a6sClO1xkFWdCS8iKslLMgT4gyKnCkw1olY0gCxCGWhsZJc+bM4TXf2lF7ZIKa5Zr7hABIceLXCdCvum+apLp5XJrEZTRbrNmmdW2Cw90IQ3QgCburhpwPcCeCyC5KUXrtUFQefH89KL1SV30lWEEoEKHiMWEYf66j/fpLjf4NHAt0APzCaSgkPxCQG2qj5OW6LrXdqW1HrJMasiryrgEDGSvk8mxelFkJu++OCL9/zu5AMIwDhQI14RJfIhjYk/3Cw9u/f0Rl1DMW4Q4YmNpeixjcUVl+tbYtu8sKCmIwVOA44T6NfMVBNxoD51jNL8odk8ao5MUyLJpx3CVdM+mUIfApMV7h3QI5y0oCOi+kyR4iFVWzW4IFZCgWrYvRfrbNHcL44chwpobDDGg8Vesd1SN+79PgiC9763iByLcCTIwaCDgSBb/bCGfDSXTo0ksQgFiEneWfUsyt9VdYqxskwV/jC8J194YoXVyDjXCDEFh5GY6qSN+5L1yVZxirkTribM1yhtu4DO+QMR1Aqi3ntv0mZcPVYbWnYFhoLsCrrhl3cJnSizgNeAWcC0yLlZ+TBwmi5kNFZMwhfh2nddSHlOX6JKjsbkLX951/8DlnepxOwuBtkAAAAASUVORK5CYII="

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
    path: 'tel:8899126620',
    icon: assets_images_icons_telefone_png__WEBPACK_IMPORTED_MODULE_0___default.a,
    label: '(88) 9912-6620'
  }, {
    path: 'mailto:ti@servcon1.com',
    icon: assets_images_icons_email_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    label: 'ti@servcon1.com'
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
    path: 'https://wa.me/558899126620',
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
    href: "https://wa.me/558899126620",
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
    href: "mailto:ti@servcon1.com",
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
    href: "https://wa.me/558899126620",
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
    href: "mailto:ti@servcon1.com",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2FnZW5kYTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NpZGFkZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZW1haWwucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2VuZGVyZWNvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvaW5zdGFncmFtLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9saW5rZWRpbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2hhcGUtYm90dG9tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zaGFwZS10b3AucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3RlbGVmb25lLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy93aGF0c2FwcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvbG9nb19icmFuY28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3F1ZW0tc29tb3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzYucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3NoYXBlLTEuc3ZnIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3N1cHBvcnQtdGVhbS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvc3VwcG9ydC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwucG5nIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9hY2NvcmRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvYWNjb3JkaW9uL2Jhc2UtYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9zaGFyZWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvYmxvZy1wb3N0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2ZhcS1pdGVtLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2ZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvcHJpY2UtdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9mb290ZXIvd2lkZ2V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhbWJ1cmdlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLnBhZ2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL25hdmJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9sb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ljb25zL2xvZ28uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaW1hZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xncGQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NlY3Rpb24taGVhZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZW8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2xpY2stYXJyb3cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdG9wYmFyLmpzIiwid2VicGFjazovLy8uL3NyYy9ob29rcy91c2VJbmZvcm1hY29lcy5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9iYW5uZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2Jsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL2NhbGwtdG8tYWN0aW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9jdXN0b21lci1zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9mYXEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3ByZW1pdW0tZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvcHJpY2luZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvc2VydmljZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3N1cHBvcnQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvdWx0aW1hdGUtZmVhdHVyZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmljZXMvc2x1Z2lmeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdGhlbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImF4aW9zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnJhbWVyLW1vdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZHluYW1pY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicG9saXNoZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuaW1hdGUtb24tc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYWlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9ic1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2lvXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlc3BvbnNpdmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zY3JvbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zbGlja1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXN0aWNreW5vZGVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aGVtZS11aVwiIl0sIm5hbWVzIjpbImxpc3RlbmVycyIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwid2luZG93IiwicHJlZmV0Y2hlZCIsImNhY2hlZE9ic2VydmVyIiwiZW50cmllcyIsImVudHJ5IiwiY2IiLCJyb290TWFyZ2luIiwibGlzdGVuVG9JbnRlcnNlY3Rpb25zIiwib2JzZXJ2ZXIiLCJnZXRPYnNlcnZlciIsImNvbnNvbGUiLCJyb3V0ZXIiLCJlcnIiLCJocmVmIiwiZXZlbnQiLCJ0YXJnZXQiLCJlIiwibm9kZU5hbWUiLCJpc01vZGlmaWVkRXZlbnQiLCJzY3JvbGwiLCJhcyIsInJlcGxhY2UiLCJzdWNjZXNzIiwiZG9jdW1lbnQiLCJhcmdzIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwiT2JqZWN0IiwicHJvcHMiLCJjcmVhdGVQcm9wRXJyb3IiLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwic2hhbGxvdyIsInBhc3NIcmVmIiwicHJlZmV0Y2giLCJsb2NhbGUiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsIlJlYWN0IiwicCIsInBhdGhuYW1lIiwicmVzb2x2ZWRBcyIsImNoaWxkRWxtIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRQcm9wcyIsInJlZiIsImVsIiwic2V0Q2hpbGRFbG0iLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsIlJvdXRlciIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbXMiLCJwYXJhbSIsInZhbHVlIiwicmVwbGFjZWQiLCJyZXBlYXQiLCJvcHRpb25hbCIsImVzY2FwZVBhdGhEZWxpbWl0ZXJzIiwicmVzdWx0IiwiZmlsdGVyZWRRdWVyeSIsInF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwdXNoIiwicHJlcGFyZVVybEFzIiwiY2hhbmdlIiwiaXNMb2NhbFVSTCIsIlNUIiwicGVyZm9ybWFuY2UiLCJhZGRMb2NhbGUiLCJjbGVhbmVkQXMiLCJkZWxMb2NhbGUiLCJkZWxCYXNlUGF0aCIsInBhZ2VzIiwiX19yZXdyaXRlcyIsInBhcnNlZCIsIm1ldGhvZCIsInBvdGVudGlhbEhyZWYiLCJwYXJzZWRBcyIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicm91dGVJbmZvIiwiZGVzdGluYXRpb24iLCJwYXJzZWRIcmVmIiwiYXBwQ29tcCIsImVycm9yIiwiY2hhbmdlU3RhdGUiLCJfX04iLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJzc2c0MDQiLCJwYWdlIiwibW9kIiwiZ2V0Um91dGVJbmZvIiwiY2FjaGVkUm91dGVJbmZvIiwicmVxdWlyZSIsImlzVmFsaWRFbGVtZW50VHlwZSIsImRhdGFIcmVmIiwic2V0IiwiYmVmb3JlUG9wU3RhdGUiLCJvbmx5QUhhc2hDaGFuZ2UiLCJuZXdIYXNoIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsInNjcm9sbFRvSGFzaCIsImlkRWwiLCJuYW1lRWwiLCJ1cmxJc05ldyIsIl9yZXNvbHZlSHJlZiIsImFwcGx5QmFzZVBhdGgiLCJjbGVhblBhdGhuYW1lIiwiUHJvbWlzZSIsImZldGNoQ29tcG9uZW50IiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsImRhdGEiLCJfZ2V0U3RhdGljRGF0YSIsImZldGNoTmV4dERhdGEiLCJfZ2V0U2VydmVyRGF0YSIsIkFwcFRyZWUiLCJjdHgiLCJhYm9ydENvbXBvbmVudExvYWQiLCJub3RpZnkiLCJzZWdtZW50IiwiY2hhciIsImVuY29kZVVSSUNvbXBvbmVudCIsInNsYXNoZWRQcm90b2NvbHMiLCJwcm90b2NvbCIsInVybE9iaiIsImhvc3QiLCJhdXRoIiwiaG9zdG5hbWUiLCJTdHJpbmciLCJxdWVyeXN0cmluZyIsInNlYXJjaCIsIlRFU1RfUk9VVEUiLCJEVU1NWV9CQVNFIiwicmVzb2x2ZWRCYXNlIiwib3JpZ2luIiwibWF0Y2hlck9wdGlvbnMiLCJzZW5zaXRpdmUiLCJkZWxpbWl0ZXIiLCJjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zIiwic3RyaWN0IiwiY3VzdG9tUm91dGUiLCJrZXlzIiwibWF0Y2hlclJlZ2V4IiwicGF0aFRvUmVnZXhwIiwibWF0Y2hlciIsInBhcnNlZERlc3RpbmF0aW9uIiwiZGVzdFF1ZXJ5IiwiZGVzdFBhdGgiLCJkZXN0UGF0aFBhcmFtS2V5cyIsImRlc3RQYXRoUGFyYW1zIiwiZGVzdGluYXRpb25Db21waWxlciIsInZhbGlkYXRlIiwic3RyT3JBcnJheSIsInF1ZXJ5Q29tcGlsZXIiLCJwYXJhbUtleXMiLCJhcHBlbmRQYXJhbXNUb1F1ZXJ5Iiwic2hvdWxkQWRkQmFzZVBhdGgiLCJuZXdVcmwiLCJzZWFyY2hQYXJhbXMiLCJpc05hTiIsIml0ZW0iLCJzdHJpbmdpZnlVcmxRdWVyeVBhcmFtIiwic2VhcmNoUGFyYW1zTGlzdCIsImN1c3RvbVJvdXRlTWF0Y2hlciIsInJld3JpdGUiLCJkZXN0UmVzIiwicmUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJzbHVnTmFtZSIsImciLCJncm91cHMiLCJtIiwic3RyIiwic2VnbWVudHMiLCJub3JtYWxpemVkUm91dGUiLCJncm91cEluZGV4IiwicGFyYW1ldGVyaXplZFJvdXRlIiwicGFyc2VQYXJhbWV0ZXIiLCJwb3MiLCJlc2NhcGVSZWdleCIsInJvdXRlS2V5Q2hhckNvZGUiLCJyb3V0ZUtleUNoYXJMZW5ndGgiLCJnZXRTYWZlUm91dGVLZXkiLCJyb3V0ZUtleSIsImkiLCJyb3V0ZUtleXMiLCJuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZSIsImNsZWFuZWRLZXkiLCJpbnZhbGlkS2V5IiwicGFyc2VJbnQiLCJuYW1lZFJlZ2V4IiwidXNlZCIsInBvcnQiLCJnZXRMb2NhdGlvbk9yaWdpbiIsIkFwcCIsImdldERpc3BsYXlOYW1lIiwicGFnZVByb3BzIiwibG9hZEdldEluaXRpYWxQcm9wcyIsImlzUmVzU2VudCIsInVybE9iamVjdEtleXMiLCJTUCIsIkFjY29yZGlvbiIsIml0ZW1zIiwiY29tYmluZVJlZHVjZXJzIiwic2luZ2xlIiwicHJldmVudENsb3NlIiwib3BlbkluZGV4ZXMiLCJoYW5kbGVJdGVtQ2xpY2siLCJtYXAiLCJpbmRleCIsInRpdGxlIiwic3R5bGVzIiwiYWNjb3JkaW9uIiwiaW5jbHVkZXMiLCJyZ2JhIiwiYXJyb3ciLCJjb250ZW50IiwiY29udGVudHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXJSYWRpdXMiLCJib3hTaGFkb3ciLCJjb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxldHRlclNwYWNpbmciLCJsaW5lSGVpZ2h0Iiwid2lkdGgiLCJCYXNlQWNjb3JkaW9uIiwiaW50ZXJuYWxTZXRTdGF0ZSIsImNsb3NpbmciLCJ0eXBlIiwiZmlsdGVyIiwibG9nIiwiZ2V0U3RhdGUiLCJ1bmRlZmluZWQiLCJjaGFuZ2VzIiwiY2FsbGJhY2siLCJhbGxDaGFuZ2VzIiwic2V0U3RhdGUiLCJhY3R1YWxTdGF0ZSIsImNoYW5nZXNPYmplY3QiLCJzdGF0ZVJlZHVjZXIiLCJvblN0YXRlQ2hhbmdlIiwicmVuZGVyIiwiQWNjb3JkaW9uQnV0dG9uIiwicmVzdCIsImJ1dHRvblRvZ2dsZSIsImFjY29yZGlvbkl0ZW0iLCJvdmVyZmxvdyIsIm10IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsInBvc2l0aW9uIiwiYWNjb3JkaW9uQ29udGVudCIsInZhcmlhbnRzIiwib3BlbiIsImhlaWdodCIsIm1hcmdpblRvcCIsImNsb3NlZCIsIkFjY29yZGlvbkNvbnRlbnRzIiwiaXNPcGVuIiwiQWNjb3JkaW9uSXRlbSIsImNsYXNzTmFtZSIsImxlbmd0aCIsInNsaWNlIiwicmVkdWNlcnMiLCJyZWR1Y2UiLCJhY2MiLCJyZWR1Y2VyIiwiQmxvZ1Bvc3QiLCJwb3N0Iiwic2x1ZyIsInNsdWdpZnkiLCJtbl90aXR1bG8iLCJ0aHVtYm5haWwiLCJtbl9pbWFnZW0xIiwibW5fdGl0bGUiLCJleGNlcnB0IiwibW5fZGVzY3JpY2FvIiwibGVhcm5Nb3JlIiwibXgiLCJtYiIsImltZyIsImEiLCJ0ZXh0RGVjb3JhdGlvbiIsInRleHRPdmVyZmxvdyIsIldlYmtpdExpbmVDbGFtcCIsIldlYmtpdEJveE9yaWVudCIsIkZhcUl0ZW0iLCJmYXEiLCJxdWVzIiwiYW5zIiwiYm9yZGVyQm90dG9tIiwibWFyZ2luQm90dG9tIiwiaDMiLCJGZWF0dXJlIiwiZmVhdHVyZSIsImljb24iLCJkZXNjcmlwdGlvbiIsImZpZ3VyZSIsIm1pbldpZHRoIiwibXIiLCJQcmljZVRhYmxlIiwiaXNSZWNvbW1lbmRlZCIsInN1YnRpdGxlIiwibGluayIsInByaWNlVGFibGUiLCJoZWFkZXIiLCJsaXN0IiwiTW5fVGl0dWxvIiwib2JyX25vbWUiLCJhbGlnblNlbGYiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImJ1dHRvbiIsInJlY29tTGFiZWwiLCJsZWZ0IiwidG9wIiwicmlnaHQiLCJtaW5IZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwicHJpY2VBbW91bnQiLCJsaXN0U3R5bGUiLCJtYXhXaWR0aCIsImxpIiwic3ZnIiwib3BhY2l0eSIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiU2VydmljZSIsImNvdGFjYW8iLCJzZXJ2aWNlIiwiY290ZF9ub21lIiwicHJpY2UiLCJjb3RkX2NvbXByYSIsImNvdGRfdmVuZGEiLCJ0aGVtZSIsImNvbG9ycyIsImZsZXhEaXJlY3Rpb24iLCJ0ZXh0QWxpZ24iLCJ0cmFuc2l0aW9uIiwibWVudUl0ZW1zIiwiaWQiLCJ0ZWxlZm9uZSIsImxhYmVsIiwiZW1haWwiLCJlbmRlcmVjbyIsImNpZGFkZSIsImZhY2Vib29rIiwiaW5zdGFncmFtIiwid2hhdHNhcHAiLCJmb290ZXJOYXYiLCJGb290ZXIiLCJmb290ZXIiLCJmb290ZXJUb3BJbm5lciIsImFib3V0IiwibG9nbyIsIkxvZ28iLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwdCIsInBiIiwiZ2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZvb3RlcklubmVyIiwiYm9yZGVyVG9wIiwiZ3JpZFJvdyIsImdyaWRDb2x1bW4iLCJ0ZXJtcyIsInNwYW4iLCJXaWRnZXQiLCJmb290ZXJXaWRnZXQiLCJ0b1N0cmluZyIsImZvbnRGYW1pbHkiLCJ1bCIsIm1hcmdpbiIsIkJhciIsImlzU3RpY2t5IiwiSGFtYnVyZ2VyTWVudSIsInRvZ2dsZU1vYmlsZU1lbnUiLCJiYXIiLCJ0cmFuc2Zvcm0iLCJvdXRsaW5lIiwibWwiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudSIsImhhbmRsZVN0YXRlQ2hhbmdlIiwic3RhdHVzIiwiU3RpY2t5IiwiU1RBVFVTX0ZJWEVEIiwicHJldiIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwiaGFtYnVyZ2VyIiwicHkiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkxlZnQiLCJsb2dpbiIsImpvaW5Db21tdW5pdHkiLCJOYXZiYXIiLCJpc01vYmlsZSIsInVzZVJvdXRlciIsIm5hdmJhciIsIm1lbnVJdGVtc1BhZ2VzIiwiZmxleEdyb3ciLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtT3JpZ2luIiwiTG9jayIsImZpbGwiLCJ3aGl0ZSIsIm1peEJsZW5kTW9kZSIsIkltYWdlIiwic3JjIiwiTGF5b3V0IiwidmFyaWFudCIsIkxncGQiLCJzZXRJc09wZW4iLCJ1c2VFZmZlY3QiLCJhY2VpdGVMZ3BkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xvc2VMZ3BkIiwic2V0SXRlbSIsImNvb2tpZVBvcHVwIiwiY29va2llUG9wdXBBY3Rpb25zIiwiZmxleFdyYXAiLCJib3R0b20iLCJ6SW5kZXgiLCJmbGV4IiwiZm9udFN0eWxlIiwiTmF2TGluayIsIkxlYXJuTW9yZSIsImZhZGVSaWdodCIsImtleWZyYW1lcyIsImFuaW1hdGlvbiIsImxvZ29CcmFuY28iLCJTZWN0aW9uSGVhZGluZyIsInNsb2dhbiIsImVtb2ppIiwiaGVhZGluZyIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwiZGVmYXVsdFByb3BzIiwibGFuZyIsIlNsaWNrQXJyb3ciLCJjb250cm9sIiwicGFnaW5hdGlvbkJ1dHRvbiIsImluZm8iLCJUb3BCYXIiLCJ0b3BiYXIiLCJweCIsInBsIiwicHIiLCJ3aGl0ZVNwYWNlIiwic3Ryb25nIiwiYm9yZGVyTGVmdCIsIkluZm9ybWFjb2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJvcmdhbml6YXJPYnJpZ2Fjb2VzUG9yRXN0YWRvIiwib2JyaWdhY29lc0dlcmFsIiwiZXNwaXJpdG9TYW50byIsIm9iciIsIm1uX2VzdWJwYXN0YSIsIm1hdG9Hcm9zc29Eb1N1bCIsIm1pbmFzR2VyYWlzIiwicmlvR3JhbmRlRG9TdWwiLCJwYXJhbmEiLCJyaW9EZUphbmVpcm8iLCJzYW50YUNhdGFyaW5hIiwic2FvUGF1bG8iLCJJbmZvcm1hY29lc1Byb3ZpZGVyIiwibm90aWNpYXMiLCJzZXROb3RpY2lhcyIsIm9icmlnYWNvZXMiLCJzZXRPYnJpZ2Fjb2VzIiwiYWdlbmRhIiwic2V0QWdlbmRhIiwiY290YWNvZXMiLCJzZXRDb3RhY29lcyIsInVybDEiLCJhcGkiLCJ1cmwyIiwidXJsMyIsInVybDQiLCJheGlvcyIsInRoZW4iLCJzcHJlYWQiLCJyZXNwb25zZXMiLCJ1c2VJbmZvcm1hY29lcyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlYXRlIiwiYmFzZVVSTCIsIkluZGV4UGFnZSIsIkJhbm5lciIsInNlY3Rpb24iLCJncmlkIiwiZG9tYWluQ2FyZCIsImlucHV0R3JvdXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYW5uZXIiLCJoMiIsImlucHV0IiwiV2Via2l0Qm94U2hhZG93Iiwic2VsZWN0Iiwic3VibWl0Iiwibm90ZSIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5maW5pdGUiLCJCbG9nIiwibW5fY29kaWdvIiwiQ2FsbFRvQWN0aW9uIiwiY29udGVudEJveCIsImJ0bldyYXBwZXIiLCJCZ1NoYXBlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwic2hhcGVUb3AiLCJzaGFwZUJvdHRvbSIsIkN1c3RvbWVyU3VwcG9ydCIsImlsbHVzdHJhdGlvbiIsInN1cHBvcnQiLCJzdW1tYXJ5IiwibWFzb25yeU9wdGlvbnMiLCJvcmlnaW5Ub3AiLCJGYXEiLCJQcmVtaXVtRmVhdHVyZSIsInF1ZW1Tb21vcyIsImFjY29yZGlvbkdyb3VwIiwiZmVhdHVyZXMiLCJpc0F2YWlsYWJsZSIsImJ1dHRvblRleHQiLCJQcmljaW5nIiwiZGlhIiwiZ2V0RGF0ZSIsInBhZFN0YXJ0IiwibWVzIiwiZ2V0TW9udGgiLCJhbm8iLCJkYXRhQXR1YWwiLCJpbWFnZSIsIkltYWdlQWdlbmRhIiwiU2VydmljZXMiLCJjb3RkX2NvZGlnbyIsIlN1cHBvcnQiLCJ0aHVtYldyYXBwZXIiLCJzdXBwb3J0VGVhbSIsIlRlc3RpbW9uaWFsIiwiZHluYW1pYyIsInNzciIsImF2YXRhciIsImF1dGhvck5hbWUiLCJkZXNpZ25hdGlvbiIsInRleHQiLCJUZXN0aW1vbmlhbHMiLCJhcnJvd3MiLCJkb3RzIiwiZmFkZSIsImNhcm91c2VsIiwidGV4dEluZGVudCIsImljb24xIiwiaWNvbjIiLCJpY29uMyIsImljb240IiwiaWNvbjUiLCJpY29uNiIsIlVsdGltYXRlRmVhdHVyZXMiLCJoNCIsImpvaW4iLCJub3JtYWxpemUiLCJ0b0xvd2VyQ2FzZSIsInRyaW0iLCJ0ZXh0U2Vjb25kYXJ5IiwiaGVhZGluZ1NlY29uZGFyeSIsImJhY2tncm91bmRTZWNvbmRhcnkiLCJwcmltYXJ5Iiwic2Vjb25kYXJ5IiwibXV0ZWQiLCJhY2NlbnQiLCJkYXJrIiwibW9kZXMiLCJmb250cyIsImJvZHkiLCJtb25vc3BhY2UiLCJmb250U2l6ZXMiLCJmb250V2VpZ2h0cyIsImJvbGQiLCJsaW5lSGVpZ2h0cyIsImxldHRlclNwYWNpbmdzIiwiY2FwcyIsInNwYWNlIiwic2l6ZXMiLCJicmVha3BvaW50cyIsImxheW91dCIsInBhZGRpbmdMZWZ0IiwicGFkZGluZ1JpZ2h0IiwibWFpbiIsImxpbmtzIiwiaW1hZ2VzIiwiYnV0dG9ucyIsImRlZmF1bHQiLCJiZyIsInByaW1hcnlNZCIsImNhcmRzIiwib2ZmZXIiLCJmZWF0dXJlQ2FyZCIsImZvcm1zIiwidCIsImJhZGdlcyIsInJvb3QiLCJoMSIsImg1IiwiaDYiLCJociIsInNyT25seSIsImNsaXAiLCJjbGlwUGF0aCJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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LDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FnZW5kYTMtMDNhMzU3NWFjOGRkMjkyNjJlMDRhZDdjYjAzMjBmYmQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lcjEtMWU4ZGFkZDljZjkyNGExYmRjOTZhNjQ5MTFlOGEzZDcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NpZGFkZS1iNTA4MWMxMmZhNjU1ZTkzYTA2ZmIxYWU0ZWQ5ZTQ5OC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZW1haWwtMDFhOWMyZmYwNTlhNGNhNTVlMjJlMGJlYjEyYzMyZDUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2VuZGVyZWNvLWIwNDAxZTU0ZDhkYzE1MTU2ODE5YzllMzlhZGQ4MDEwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9mYWNlYm9vay0xNTZkNjM2Y2IwMDBlMGE5ZjlmZDlkNDE1MTcyY2JkOC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvaW5zdGFncmFtLTg2ZTlmMWJkNmEyMmRmMmQ4YzNmMzcwYzlkMDBmOTAwLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9saW5rZWRpbi05ZDY3NTA2OTViYTExMzYwMmVlNTRmNDdiNmVmOGE3Yi5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFb0FBQUFiQ0FZQUFBRGJBaGtqQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUlDU1VSQlZIZ0I3Wmd0YzhKQUVJYmZkQ3FReU1ySVNtUmxKREt5TWpJL0NSbUpSRVpHSWl2N0U1QklITjFOTnZUWWhIRDVhRW5DUFRNM2dRdHpIQTk3ZTVzREhQL0QrWHoycWIxanBORGNGdFJXMUpib2dZY2UwSmVIZEZuSjI4enp2QXdqUXVSRTFQaDZvcmFqT1g2akF5L29nUHhMRVg0bFFiM3VoVVJwT0VDa0xxVXhDMnFmTk9ZSE90QmFsUEV2K2VyV0Y0YWpqTlFRL1RoUU82cStOZjJHQUMxcEpjcVE5S1p1RGIzc3pDam9ETTJKbDF1Q3FxeWdyU3hyVVdxOW00d3VONW5RM0ZoU2dpSzZUQUxKc1ZaWWlhSUJPWUppVkNXbFk1WlVZc2pTaVp4M3c0aHo3cjB4N29yaXJSVkZKSm1EY1VodmFRSjdUQVJlaHRTMjlGTFAyYWNXM3lzZkdrWEpEc0hocVNVbFhiZlpSMFB6VHVtU3FlNDhyVFRKdWlsS2t0MWFkWE1JYitqTERwZ3draTR5MWQwb3ExWVVmWmdGQmFvN1grZXkzaWVQeUVwVk4wdUtKU2RmY1NWS0NrbGVhcm9vNHdqYXpFVlNpZVJZemxzbm81dlRUQ3k1K2NKRmxHVCtDTlVLbXd2SlJHcVMyU0c1TmtHMTFnck5XaXNYSmV1U3QzOGRjbnNhYURkWFNTV1NjeE0wRktabFJQRlNxeXNrVXp3SlJxMVZKMnQ1YTljYmRiWDlWelJVOFhpVmE0WWlpZmtvSkEzNWdEc3BXQlpGVUlKaTErZlRDMDQveDFlNW1aL1Z3SkVqUGxJWTVVT244NmhueElteXhJbXl4SW15eElteXhJbXlaS3lpeWtlbVdUMkVEdzQvTXZCUlQ5MXh4NlA0QWNwKzFabTR5RWtlQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRWtBQUFBYUNBWUFBQUQ3YVhHRkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFIZVNVUkJWSGdCN1ppaGNzSkFFSVkzVEFXeUVvbXNSQ0lqa1Voa0pJOVRpY3dqUkZaR0lwR1ZTQ1FTUi85TkZtYlprdVNTYVlkTGN0L016b1ZMUTVPUHU5dTlST1FaMStzMVJzT1JSMUdVa3dkTXlEOWkwNzRjSHlWNVI1RGtRSkRrUUpEa1FKRGtRSkRrUUNFSnRja1VzVUM4VTRCOXpEbHVuOStrM1NKWTBBVW5NeFJ4M3pSUzhQeHJOQXM1L29LTC9RUUhNeW9GTVZQRUJuMUxHaGt5bXhJU1FVSnh6TlB0TEtGWnlmWmdGTWd5a3lEbTVsUXhveVlZVGhlMEtmMFdGWTlCbEJJME02ZnVlOGRpNGNZSEZyUkRuTXdmc3FnVkRSUWx5Q2FzaDgzMXZRUlFJK3BnTGxqaXkzaWRtdEtBa0xYNGxyQTBtWDM3OEZBbnNTaEVoc1BjWFBpQlNJWlNJbkM1UStVSTBqODhENUlkbnQ4T2t1ZkZwSmpNVFRlYjc3MG95ZHljNXJVZ1htNVNQUGZwMlRXVkZYZUZxR0lPOTFXVUpDSzd4dFlLWW1xM0pTSXFNOTBzYUN0enVqZW9ONTRhRnBOSzRxcWtjZThtYzVRejMwVjE4MUJOWkc1N2oxVFJzZWsra29NZ3htbURLME9SUmVrdlpGRnJuMnNwcWFJNWc5a2Y4NEJuU2lXak4rTDhGa0NNcDlTVG9yT2hTTXlvQmExZWxUU0krcXM2S2pkdFY3aHNxYXlpMnhCUkIwUklvbTdpakgvK1NSNkJlMlJKRzlWVjdPaXBBNTBrcVJ1SnFjeDIrN29VK2lxa0pwcFRlWDlIQ3Z3ZlAybUR6bm50SW80c0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy90ZWxlZm9uZS05MmE2NTIwNTBjYjA2YmI2YWRiMTAwZWM0OWYwMGRiMS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvd2hhdHNhcHAtMDIwNzdhZmNmZTllNzNmM2Q4MzA1YjkzMWViYTE4ZGMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ28tMGUzOThkY2IwNjRkY2ExNDU3ZmQyZDkwYjFkNWFmMTIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2xvZ29fYnJhbmNvLTMxM2NmOTE4MmI3NDZjNWFhYTczNjZjZjU5NzZmMGU0LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9xdWVtLXNvbW9zLWZmZDgwNGQwMDNlNzM4MzZjMmFmMTc3NTQ1ZDc5NWVkLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRGwybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNmdnU3OG5JR2xrUFNkWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FuUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTZGhaRzlpWlRwdWN6cHRaWFJoTHljK0NqeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5YytDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwQmRIUnlhV0k5SjJoMGRIQTZMeTl1Y3k1aGRIUnlhV0oxZEdsdmJpNWpiMjB2WVdSekx6RXVNQzhuUGdvZ0lEeEJkSFJ5YVdJNlFXUnpQZ29nSUNBOGNtUm1PbE5sY1Q0S0lDQWdJRHh5WkdZNmJHa2djbVJtT25CaGNuTmxWSGx3WlQwblVtVnpiM1Z5WTJVblBnb2dJQ0FnSUR4QmRIUnlhV0k2UTNKbFlYUmxaRDR5TURJeUxUQTVMVEF5UEM5QmRIUnlhV0k2UTNKbFlYUmxaRDRLSUNBZ0lDQThRWFIwY21saU9rVjRkRWxrUGpSaU0yRXdNbUpoTFRrMVkyRXROREF4TnkwNE5USm1MVFl6TldWaE9UVmhOMlZsWlR3dlFYUjBjbWxpT2tWNGRFbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlJtSkpaRDQxTWpVeU5qVTVNVFF4TnprMU9EQThMMEYwZEhKcFlqcEdZa2xrUGdvZ0lDQWdJRHhCZEhSeWFXSTZWRzkxWTJoVWVYQmxQakk4TDBGMGRISnBZanBVYjNWamFGUjVjR1UrQ2lBZ0lDQThMM0prWmpwc2FUNEtJQ0FnUEM5eVpHWTZVMlZ4UGdvZ0lEd3ZRWFIwY21saU9rRmtjejRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZjR1JtUFNkb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQmtaaTh4TGpNdkp6NEtJQ0E4Y0dSbU9rRjFkR2h2Y2o1VVluSWdWMlZpUEM5d1pHWTZRWFYwYUc5eVBnb2dQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwNGJYQTlKMmgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhuUGdvZ0lEeDRiWEE2UTNKbFlYUnZjbFJ2YjJ3K1EyRnVkbUU4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTZHlKejgrZ1cxTzhBQUFHeUJKUkVGVWVKek5uSG1jWFZXVjc3OXI3M09IcWx1VlNxb1NNaENtUkR1QUVPWkJVQVpsREtEaUU1OEdwS1Z0Ukx0Uit5blBnVS9yNCtHanRXM0VwNkFTeDFZR1pRWkRBaExvNElBeUpoQkpqQUlKbVFpVm9aSWFidDNobkwxWC83SFB1VldWVktVcUlieCs2L081eWFmdTNlZWN2ZGRlNDIrdGZZUzlRTVZMYmtiVTRGVVFIRmF3SWtZVHI5NGFFSVNxOThXQzhEYmdVT0FRZ1NNVlpnRXRRQkdoQklCU0JxcEFuOEJmRko0SFZpajh1ZVpZWHN4UlJRV3ZTbVRFZUsvaVZKdzZoN0dDR2tQMTFpdmU4SnJralZ4Y3ZPUUhST0tJeEZOekVRYTE1VHF1bEFjUlErTDFBQ3VjQnZwMmhGTlFtUVVhV0xYamszWDRHYWxtUCtCQlZncjZXNFVuSGJJNE1xeFZyNVJqU3lubnJJTExTVXlpRmkrV3lodGcwSjR4NXRLYmFJa2p2Qk5pY2VRalk4cmUrWkt4bEJPeHBValBCeTRFT1Ivb0dHQ0NBdUlBcjZvbWZiNE1tVW1ERHlpZ0l1SUJBOWowK2pCRTJRcjZJSEJmT2JZUGxuTE9sWjlkU09uWU9hYWFlRi93Z3NrWitxSVlmbjdsYmk5eHR4bFRtanNQc1FsNFFkVklaRVVTcjc0c2taUTB1UWk0Q3VFNE5KVUtWYWZnRVN3cWtxMWNSRVJCWllRNVpML3BJSkVCVVZBbllCQ3htbklJNUJuUTZ5ODQ1b283NXo4M2o4aUlTWndxb2lxaXFMZVViOTg5NlJrN1l5NjZrK2I4VnJ3cTFYNURxWVJWajRzaVErTDFIRUcvQmh3cFFUd2NxS3BpRUJGQlVXMm96NTZxcjZxR2kxVVVGQlhCZ3dob3lpU2VVN2c2TXZKSWtpaGlzT1hFdUdLVVlERDAxOXZocmcrTzZXRmptbVRMeFRlakF1bkR4UnFNOCtwVTJkZUlmQU9ZbXpFazNXQURJQ0tvYXVETlhpUlYxZXplNlRKOCtnU2JmbmVMZXI2RVlZTVZyRlAxSUNxQUdLWHZsaytPK294Uko5eDA4YzBOUTZCZ1loLzdvczNqdkw1ZmhCK0swQTdpVTVFM2dnanBuRVhlbUhFZmpUUklEUXlvbkErYm9FYVZMb1hMTFhKdnhWY29tS0loR0FDOEdQcEhNY3htVno4Mlgzd3pkbUIxVmxGZjlFMTQxUnRFdUVkRTJsVWxEaHNvRmtDRGJaUTNteW5RWUh4UXJQQlFxNnFpS3JHSXRBdmM0K0dHY2MzSEFPckRHc0pGelhOdjN2VzlSL3FoK1NQZngvcXdTZ1dyaWt2VWwzTEczQ2NpWnhJOGkwb3dxcXJzZlpYWlhjcFVqREFoSnlLU2VyOUZHSCtoZWltTGlCVndvdUNNMGorQ1dnMjdrTktINXBIdVB3b1djRjZaYklTSFJUZ1NKRmJWS0gyd3BsczNacWFrZG1mVTcvYmtmcHFhYUpHZ1hvSWtDRGxWWGVLVU9VYm9GTEFDRGdSMVVQN2x6bXExc3lxZGRnMXFGYzJZb2poRnB4amhDVUV5cHVRQ1UxQUpZckpiVERFaVJHYm94d3d4cHNOZk41Z0VNRUs0bHpWRXRuRWZDWjQrekUzUkhFb3N5TkZXZUFMVktXRk5XQVUwQ212ZWthSWR2eWhObjVwTndxaXFFMHhKaElVQ000R01LYm9uM2taVk1VYW9KNTVhYncxOCtvTVJpczE1Y3BIQis0SGRGNEl6RGdZcnFMWHppdmVLVXlWSlBNNTdTRHo0NExrTHBRSjVhL0RCN21YZUt5Y2lzY0JNUkJiaTVaMWV0V3hFRFlndlRaOUtlWWU1RGxsWWNlNzNRQVFEa2lTcTlaV3ZTK213YVl0RTVOMG9zWkl4WmZjOVRzYVVTajFodjQ1V1BuTEtMTnBiQ3dqUTJWM2haNCt2WkV0UGhXSStJbkVlcitDOEozWWVUVHc0RDlhUXkwY1VjcGFXWW80REo3V3kvOFFXRHByY3hwVHh6ZlJXNnZ6NzRwV3M3K3FqRUZsOEdnR216QkdRV0lTY0tvL05Pa0xQK05OU1E4Nm9lRVJSVC9YMlQrek1tS2FMZjBDVGplaXBsMm1PaXNhcjk0cmVDRndwUXF6S0c1TVVFZXFKWTFwN2ljWFhYTWdCazFyWjFOMFB3RDV0emF4WTM4VTd2M3d2WGR2N2FXck9rN09HanRZbURwelV5a0dUeDNIZ3BGWU9uRFNPbVZQYW1EbDVISlBITnc5NXh2WnlqZkdsQWt0V2JlYTAvM1VmZmdlN2t6RW5yRVZ5b0RjSzhta2pZc3B4NHNjVmMxU3JkU3AzL0NNd1NKVXNTdUlkUlp1M1hyMVQ5QktRSzBWd3FhSGQ3V0F0TTRyV0JCdlEyMS9ueW5ObWM4Q2tWdDd4ei9mdzFFdWRpQWp2T0hncS8zSE4rN2pucW5QWjNGM2gwUDNhbVRGNUhFMzVvWnErcWJ1Zmx6WjI4K2lmMXJPcXM1dlZtM3BZdTZXUDFadDZXUFY2TjVlZWRqQS91L0lNam52TFBpeCtjUU90VFRtOHB1bkhBSE1pRVp6Q3AxUjUwcU8zTitXc2RkNDdFdzA4THdKbytzajM4QUxxbkFHY0tqTkZtQ2RDeXVYR2pYZWJLYzRyZmZVWUkwQTFabHA3aVhWYiszamloWFhjY01WcEFIejJoNy9oeFhWZG5QYTJmWG5tNVU2V3IrdGl3WkpYV2RYWnc3b3RmYXphMU0yYXpiMVVhZ25FTG55Y2g4aUFNZVJLQll3UlhsemJCY0FCazFwUjc0UEVaT0g2SUdlUkxVWFJtNzNuU1dDVkY0eEhmZE5IdmtmbGxuOElqREUranhlSEZRREZZNzRtb3MycUdndVNVL2FNS1luempHdk84KzdEcHhOWlExK2x6cFR4emJRVUlzNC8rYTFjZU1JTUFQN2p4UTFNbTlETWI1WnY0TnE3bjhFYVE2V2VBSkN6aHYwN1dwa3h1UTByZ2trOVdMWm1FWGoybFUxczZDclRtYXJtMUFrbFNIeUkxZ2VwVk1PRkMwWlZZeEZwQmYyNnNmSkJFSHc5UnNpSHNVMGZub2Y0UENhcVd3VUh6QUVXaUtqWE5CdE9vNVRkRGpLY1YrNzYzTm1jZC9TQkl6SXdUUGlOeFlVdnZMcUYwNis1bjloNU52emdvOXp4eEV0OC9LYkhhR3Ryd3ZtaGJsNURJZ0VoSUZWVk5RcG5nU3dTc0xIUE8wdWR5RWFDODNYNll1ZklOMUhTMnJWQnpGQkJqVFk0czN1VVNjdDVSeC9JWFg5OG1lOC84aUtGeVBMRjl4M043QU1tY3VsTmovS05qNXlFcXZMNVcvN0F6ejkxQm45YXU1WHI3bm1PbG1LRUh6bWtBVUlNMDFkTmVNZkJVL25LUmNjeGMwb2J6NzdjeWRyTnZVenZhRUZ5RGE4MGhBU1JUQU5VMWFmcTlyVnl6aTZpSHJ1aXFXTUZJdEVZSTlhV2NzYXAxaitFeURHZ0NTcFdaV1M4WkN6azA5WDlaY00yRnYvaFpTamt1T1NVV2N5YzBzYURmM2lacTk1ekpEbHJXUEQwYXVxSlowTlhtVVZQdm93cEZSclhqc2dZWS9EbEd0WUVPeVlBaVdmOTFqNzJuOWhDSVdlSHhFUkRtRE9RbWh1Q2xoeFRpcE1QSUhJM3FCVWZPK084NVlNM2Z0Qk4ySzhOUWY4cDZDV0NxTWdvdXpaV0t1UWphQ2xnbTNJWUVkcWE4MHlhMU1La2NVMVU2NDVjSWNKNWp4VWhQNjZKaWExTlRHZ3BNcTY1UUVkcmtZN1dwcDArRTF1TDJKWUN6WVVJRVRCR29KNndaa3NmKzA5c0RjSGlMdWF2YVJvenlBWjlybVAyZ2Z6cnJWYzRweEdSQ1BiT0srOTB3SG5BQ1NrSGplaWVxZEN3ay9BSzZhN2U4K1FyZlBnZGI2WHpSMytIaVBDTkI1WVNKNDczZmVNaE9yZjNVKytyc2FsY1E0bzVTb1VjVzd2Nk0wUnpLTzBnQ2RsZkc3cjZhRzNLMDlhVVozTlBoY2hZaHVPUGtHNTlTREk5Y09MV1phK2U5NFZMNWkwUUl6WVNSSU10MHJrcDZxTHdCblZvT1BKS2ExT2UrNTlaeFp4L21jKzVSeDNBYjFhOHh2eG5Wek91dWNDemYzMmRFdzZleWorZGR3UzV5UERyNTlmeStQSU5YUGUzSjVPTFVyVmdnRWVSTmR6NDhESnFzY09JQk9td2hyVmIrZ0NZMXQ3Q3h1Mzk1TE9MaG1OT3dBUUlrSVFZNE1QQUFrQWpEMTZWeVViazNCU0NORUdIOWo2RW9LcTBGbk04dW13OUR6MjltcWdRMGRxVXh4cEJJc1BKczZidzJRdU9CSUx4L3YzS2pWejkvbU5Idk4vQ3BXdW9KeTY3TzFqRGExMGg2OW12bzhUVEwvazB4eHFKTTZteENZRTVxSjZqeWlSZ2N5UkIwYzVEbVFEaVJOUU13bWYzSG9VSWxHMTkxUkNnR1VOU1M5aFdxVGVHM0hEZkVtNlkvM3o0dzRYOFNQN2JUY09Lcm9pZ3puUGgyOStDVncxeG5CWFdiZWtGZ3NUZ2ZJaDNSakRDQUNHRlVrRnhLblFBNXlQOE5ESUNYbmxYeGp0NU0rQ21GQnV0Slk2TFQ1bkZTYk9tMEY5TDBtMGFJSy9hY0xGR1FpQ1hlRC9NRFlNcTNmVFFNdXBKVUtXQUJ4ZzI5MVpSVmZicktEWHMycTRXRklLK1JsVUNoWGVMeUU4ajczd2VrUlBUY1dZSW5yODNLWTJFMzNId1ZQNyszWWZTMVZjbE1nTndrQXQ0RnpaTC9MSi9kckIxbVZMa0k4TzlUNjBpZGdPTU15TFVZOGZhTFgzc1A2a1ZJanRxUEJTbUZnSzkxTWFlcUZYSlIyQU9CUTZpQWRXK0NhU0FWMHFGSEZmKytMZDhjdDdqTzZsSGN5R0hVNlZXUzhaazlYZFVKUWhCWHkxeHJOL2F4L1QyRnFLY0dUYkkyM2w2bVUxVlFBNGlwNGRHaUI0Tm1GQWhWUE5tR04wQXQwRTFUdmpFV1lkeDF1ejk2S3ZHQVlDUzhNUXYzdlpIRHBvMGpzK2Nkd1RsV3R5SUZFYWFUV1FOWC83bFUxVGpWQ1V6RUN4MnJOblN5eW1IVEd0Z01qdXE3TTdUQzM0NzVZRkZPQ29DWnFaKzBDTzdyaHE4TVFvUjZzSDdUdUNNMmRQWlZxNkZDa1RLbkZJaHg1VHh6Wnh4K0hTNisrc01hTm1PaXdvU2tMT1c5bEtoa1F1RjJvMDBvdDk5MjBzVWNqYllNanUydlZid0VpRFBtUkZ3U09yU1JQUk5Lbm9vb0VwekljZi92T1VKUHZlejMrOWtOM0xXc0xxemgzdWVlZ1VBYXdLT0V5ZHUyUGpPR0tGU1Riand4QmtOZFdsNHBxMTlpQWlUMjVwNStmVnVjbEVEZlJpUk1qZ2lUZHNQallBRHMyZXB2Rm1HRjVBQWEzN2hmVWZ6Z1JObTBsMnBwZkJCMkl1L3Zla3haazBienpYLy9YZ0trZVdtaDVmeHM4VXIrZldYMzBOVFBzSTVIY0tkbkRWOGZONWlLblhYVUJWRkVXTll2elVFZWZ0MmxGaTVZUnRDTkhJc2s1SU81RTRBQjBiQWhJSDV2L2wxSVpQbU5TYkRWakszSTlrYzlweFVnKzBaQ1BKYVVzQ0tFYVBmakJxbG9FQVRJbUI4OXRzYm1GTTZzUkJJR1FtcUVObXdBU1l0c0RRWElyNSszeEt1dStlNUJ0Q1VVVDR5ck4vU3g2OWZXQXVrcW1RTlozLzFWMk5YSlpTY05hekwwb0lSQUt0ZFVEYWdOWUswazJrM0ZqN1NieG15VmtzOHRmNDZ0VGlFNitWYURMMVY0cFlpK1dobm5NUWFvYnV2eG1YdlBvUnZYL1pPZWl2eG1JenZlNzYrZ1BMZ1FGSERKcFJyTVQzOWRRNlkxQW9pZXhLSXRFU0ViRG8zMWlzRUJrTHdsSXdSY3RaUXFUdHFjY0pCazhkeDBva3ptWklpK1NmTm1zcjd6ejZjcGE5dVljM21IbHFLK1NITVVRV3h3c1p0L1R6NnAvVlU2c21ZM0hWWHVVWmJLVC9rZTJPRVd1SjVkWFBQTGdHcjBTZ0Mrb0hpYUFNemFhbkdqbnhrc0NiMHdWa2oxR0pQWHkxbTJzUVdycHQ3S2g4OTdaREdkZlhFY2NiaDB6bHo5bjdFem5QWmR4L2p0dC85aGJibUFvbnpLV0R1S1JWeVBMNThBNCs4c0E0L1Fob1FKZ0lJNUNOTFBVNDRaTjhKUXhhZVJiL3J0NVk1WU5LdUFhdGRVRjhFOUFEdEE0OGNuaW5XQ09WYXdrbXpwdkRkdnorVnFlT2JVOFlZZnZYc2FuNzkvRnErZC9tcHRMY1V1V0grODl6L3pDcDZLM0dqdW1pTjhMV0wzODZ0bno2VFZ6cTdlZnFsVGxxS2VaejNSTmJRWGE1eDhTbXorUHJGYnlleWhueGswS0dPcUJHZjFtTkhKWGJNL2ZZajlOZmlRVjRwTUViVElPK2RoMHdsRnhrU3A0dzlsRUdBM2dqWVJ1cXlSeXFSU09wQlhDWG13dU5uY1BqK0hYeHovbExxaWVlUWZTZHcyZW1IY05ucGg3QmsxV2JPdVBZQmx2NjFFNU8zMk5SUXhNNkRLaGYrMjBPOGZPTWxmUGRqcDNMaTFYY1BLWXJoUEIydFJhWjN0UER2aS8vTXBwNEtPV3VHcUt3STFHTEhySDBuY09IeE0yZ3BoalJpNkZ3QlZUWnNIUnRnTmNDUklUZmFGZ0d2QWtjUm1tNTJxbVVQNFdWS3IzV1Z1ZW9udjRQZUtxZWM5RmJlZC93TS91K0NGN2pxNTA4QU1DRzFMWW4zWVNIVHh2UGF0akk5NVJwWC92aTMzUEUvenVieU13N2xld3VYMGRhYWFiRTBvdGhyN25xR05hczJRMkdIeU13WUtOYzQ1YVMzY09IeE0vQStwQUdEeVNzUVdkWnRIVHRnQlEwNHp4RmltVmNOc0NJdDBPalFSc0NSS1o4emRFd29ZZHBibURRdUxHekJrbGR4aWFlMUtVYzFUdGhXcnRGYnJ2SHBjMmZ6d3ZVZjR0UkRwd0Z3MzFPcmVIVFpPcTYvOUdTbVRXeWxXaC93S3RrUzl4blhSTEc5Ukh0N2lmR0RQaDBUU2tUdEpTYTI3c0lrcWlKR2hnQld6dmxSVWRvMHVOVTBFUHl6QVY1SkZXdk1lWkpxUU5pODh5VHBMcmNXODJBRTcwUGVjL1lSKy9Id1Y5N0x2MTE2TW9XYzViWlBuOFVSQjA0a3JzVjg0ZFkvMHBTUHVQWkR4MU9ySlR0NW5zUXJpUXNGL2NScDR4UCs5anZWaW9iTWplQ3hCa09jRGNCcVYvc2VtR0JTcVhyRm9MSVV4SU5hRUVhTm5YZEYxWmpyUG53Q20zL3lNUjcrNS9kdzdJeDlBUGpwNGovVDJkM1BnMTg2bjRudEpaYXMyTUQxdjFyS3g5NTFLS2NkUHAyZVNqMkV4SHVCVkVOY3RMbW5rZ0pXTGFNQ1ZrRk1oSlFISHBVbGhsaFdnSzdPZ0hEZHc1cUpodWlLbHpaMk0yL1JjajV3L1VNYy9mazdBRmpWMmNPNTE4MW5la2NMRDExOUFaT250UEdWTzU1aWMwK0ZUODJaUFdvTmFYY3A5T0JrZ0ZYTHFJQlZ3TGdiemJLcndhK0lwS0IxVlo0RW5RbDRVYUk5U1E2OFY4aEgzTHpvUmVyOVFRSW10QVVqUEw1VTRKVy92czVGMzN5WXV6NTNEcS8vNk85WTlNSTZKbzFyWW51NVJxTW5OSnZvb1A4SHIwZUVrU08rQm9VSXZGSlBXTE81bC8wNlJnZXMwbEowYW5qbGoyS2xibEs5ZTB5emRvbFFnOXJ0TGN3NkM1cnpFUk1tbENpVkNrUnA4SkE0RDZVQzl6Mjlpc00vK3d0dWZ1UkZPc1lWdWUxM2YrV3JkejlMVTk2T2pndnNCaGtSWE96U3FtVHI0Q2FpblNpc3RWR3lCZlF4OVVxVURsOW9vQXRvei9pM3V6bWxFVUdNNEFHZkdzaHNMaUtBOHpRWElsNWNzNVZQM3ZRWStWS2VlaTBCYTJndVJPQUhkcU9lT0pMRVViTm1pSnBaSXhDN1JzbGt1S1dta0F3NHo1b3R2VXdiQmJBSys1bmFGNUZ0WG5sSWdFaENvYWxUMFlkUjVvWkdJYkZqcXJrTkd0QlRxYVBWR050Y3dGaHdmZ0RFaUJOUDI0UVNDNjgrbjNITmVaNWZ2WVdQejN1YzcxeCtLdTg2YkRwOTFaaTUzMzZrNFcxdS9mU1psQWRGdEpsU1phMGwrN1ExQVFHVEdjNCtaUldEMTdyS0dCRW1sQW9CU3QyWm1WbUhtRk1sQW4zSWlIUktpSmcwZFVYeXk0R2dXME5OWVJma05aUmRzOGp6TTNObU0vdHZwckN0dDhyMm5pclZla0xpaGlhSzNnZTNXMDg4WG9OTFRueG9NTXhadzZ1YmVuaGk1VVo2S3ZVR1ZCSE1vcWJYZTR3Ulh0L2V6K1BMTjlEWlhXbEFHME5YQzFqaHRXMWxWSlgyMW1KZ3V1dzRMc3NBc2dxQjNCNFVDNGxRM0w3dk9Zek56NitaWDEvWCt5UndJdUFRYkZwckdSUjlhVm9PVFFIbUZIQUN1T0RZZzdqZzJJTll1R1FOOXoreml0Ly9lU1BkL2JXd3M1R2haM3VaYzY2YlQrdzhSb1M4TlZ4OSs1TWhMU0RFSHV1MzluSG1WeC9BNndBelpKanlpVWpJNXZzcWRXYWNNS09SV2xnampaSk1aQTJyT251SW5XZGlTekh0aUJpb1NnN3FybklnRnZUSkNWUHJDMDc2d0VRZS9FNnZpL0tSWWNQOEZ5MklVK1RiS0NlbWVoZTYzd2RoSFppUTZrOXVhMmI1dHo2TVYyVmlheFBlSzJkZjl5dU9uYkVQbjVvem16bEhId0RRcVBsVWFna1RKN2J5d3ZVZkltZGx5TzVKaWh1KzYzOC93T0g3ZDNEengwK2xrTE5jZC9lemZHdkJDeXovMWx4S2hkREpPUmlLeTF2TEJZUHdtRGp4MUN0eHNGc3BqUy9seVVkMnA3UUJ5T29DZ3c5cmZIUGJ4Z0lMYnVxeDFqYTVLUGJnRVZmQmdDMzhzdVFyVndISGdMcHdKaWpJVytLaDJKem5KNCt0b0JCWjNqcTFyV0VUNWorN21zZit0SjVIbDY3bE93dVhjZFJCRXpudUxaT1ozbEhpY3hjYzFXZ2RXN3g4UTBQaUJpWVltTk5mUytqYzNzK2lGOWFSaXl3dnZkNU40cFRIbDIrZ2tMT05IcGhNK0NOcjZPcXJNcjVVUUZYcGFDMXc4dUhUT1c3bVBodzZmUUtIN2QvQjIvOW1DbXUzOUxKazlXYUtPZHVJZkxPS0s2SU94UUxQbFV2NXUrbXZVbFRqUk9LMDFTeUprSHhpQWFmb21RS1BoUG1uOWtheVZ0QmcvS3FWZWpCUEFiVUNJN1EyNThQT3VaQTR1a29kQ2puMHJuL2tHdzhzNFFzLy9pMmxjVTNFemcrTHlXV1pkT0k5cWxETVd3cVJwYmNTay9Va0RDWmpESlZhekh1UG44SDluNTh6NUxmZVNwMmxyMjVoNmFyTi9PaXhGZnpsdGUwVTgxbkhoR2g2M21sSXE1a2dpd0FiMTYyemtTT3EvT0lLU25OL2lIT0p5K1Z5QnBGRjN2bTdRQzRDalVVa04vaDhVR1FOYmVPYVVsYzhBQnNrenFNUzNIYXBtTVBuSTFxS0FSaXN4WTRwazl2WStNUExkaExwakk3Ni9CMGNOMk1mZnZDSjAwY2NzeU9kZWUwREFUWUZ2ck53R2I5WnNZRVY2N3Q0cmF1Zi9scE1Vay9JRlhJVUI0RlZpbWFaZEF5YUE3bkxpaTRDVElLNktPZnB2LzJLMExYcG93UmN1RGcxVGw5QzlUd1JhVTc3MUV5RzFhZ3FiakRBTm96Mzhta1NtS1FEUllSTjNSWCs1ZDRBZ21jR042aEZzREdkMi90WnNub3ozNXkvbEVyZE5VemJjTktWcWRMSzE3WngySDRkZUs5OForRXlYbG03aFVLcGlERkNNUjloaTduUUtEQ0E0S2tnb3FKZVZIS3EycWZ3eFZDWlVZaGM2RG9rN2ZPdC9QeVRsQzZlaHczRkJndjZpaUtmVVBUbnFiaGxUQm14clhXRVhqY0FXbFBKK1QvM1BFT2NEQTlidHJjVVdiV3BoeS9jK3NjeGxUdU1DVFdwanRiQWlIM2FtbGhYS2xETTI0YnRDMEZtUTFJQ1U4SWFNb0gvdUJGV0JjUVpSMklwMy9hSkFjWUErQ1NoRUZsNjFMdG1NY2JETGFxY3FPZy9pRFFPVjR5STh1MUkxZ2pWZXNMVEwzWHltZk9PNEtPbkgwd2hzaU9PVDFMamFxMk15aFFBSkFTT1RmbUlkVnY2Mk5BVnFvODdCbnlENXB3eEtWSFZISENqaVB6Q2lKaXlxN3RXRTVFTVFsNkdMTEI0eVR4QU1Lb1NLeHIvT3FaMFR2VG96b2NzZHQwNlA3Z0J1cU8xeUJFSFRHU0lTOWtibEs3ZkNQeDFZemRydHZTbUJud284SzNwOGNCMFAyTWdwNnFQVEwzOHRMUFhmZjlSckxYaUJSV0V5bTNESExMSXFIVEp2REIvVmVNVmI5U1VzUDUzQWtjeGNGWXA3VjRiRzNPcXNSdHAyRjZoZkdUSVIzWVlwZ3crWENFeHFqbUY1eHptbmFLdUlpSkdVSThZeWp1Y2tkd0o0eTJ2MzBqejlLa0EzZ2dXZkJuVk9ZcjhEbmlMaUl4SnJRWjdzWEc3VUtHOVFacDJZdTBzS1pLMXE4WW9PWVdYRkgrdVZTcElPTG1YclhtbitRLzNvT3pvWCtxaHJJSlRtR3hnb1lnY25hcFZKQU9pczJQajAzOFphUXI0RDNJV21VMTVUbUVPNkNZSkJ4c2RDSXo1NkI5aG9EZU5RTXdKV0lOMll2d3BxcnBva0sxeG9YZWswUzN3WDBxYUFwQVNEbE00Q2RCY0RsaVVlSDhLeWlZYVRGSFUrR0daQXJzQXdQdHYrV1NRbHlDZUlkSHlVaTRVMzNZV3lMZFUxWWlJVFk4WE4zWkl4K1pUOWlxRm5GT3pNNUNreDR1dHFocFYvWlpKb3JPTWtYN0oxRWNBeklnbmFHRU00dDk4eVR5TStpd29OelZmOVUybUNZZStYL2ovNUVDNmtyYUs3WEFnWGJuY0dybTM2dXJrVE02UW9pVWlTdjl0dXo2dFAyckpwUC9XS3hxakZIemVGQVJSQzl5cm50bXEzSkpKajRoNERTZmlVbFFuWUlWdmxBSERrR3FHdTZtaXFCTVJQeUFsM09KVlp5TjZMNkkyWjNJQ2VKR0E3bzNHRk5nZGczblJuVFRudS9CNHFrbEVLZkxwU3krRXhPc1pBdjhLSEIxUVVYRnBzQk9BTUUyOUZIdHVwRk5zS0JWRklBaUpUeVUwZTZmRGM4QVhqVEdQK3NTQkVWc3U0NHJOQVFQcXIzZnMzWmRlREtiUzNIbUljV0cvVk1TbXIwbnAxd29sYWZvZ3lHZEY5SVFBdnlsazc0c0o3MzlwUEcrMEZHTndHakpvdGlxS0F6RXBScHVOZlFxNDRiMnZIM3puL1ZOV1lvMHgzbmtWOFlwUjFFVnY0bXRTQnRPbE45R1M1S0RtcVlvblg3QzIzeWV1WkNMR0dVK1BOK2NERnlGeU51amtnUWRsaG56MEYrdWtiQjM2WXAxTWJNS2dUU2dQQTNlMUZZb1BkdGVxbEYwZnpiYkYrbnJzaXQ3Z0NwYmVLUGwvODJLZHdkUnk4YzBrSm8wRUhSaFZlOVkrTmZmSTVrTG9lMUhhamVwWndPa2dKNFBPSWcwcWR4S1VUQzRHQVlZTjFRbVVJUHdGNVFsZ3NUZnlpRlhwVWp4enp6aU8yeGM5WTFWd3pvTHhpdlZDMzZBUWYzZHByM2lONGlYektPSm9yMjduOVVJN0FYNFZUUlJ2MHVwbmtvaTFSZzhXT0FZNEdEaVNYYis4cXhkWUNTd0RWaW84VjFlL3NtaXMweFM2c29qeGVGSEZUUlBQRnJGVVZhbmV1dWNNeWVnL0FTNkhxeTlXZExGK0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRGwybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNmdnU3OG5JR2xrUFNkWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FuUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTZGhaRzlpWlRwdWN6cHRaWFJoTHljK0NqeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5YytDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwQmRIUnlhV0k5SjJoMGRIQTZMeTl1Y3k1aGRIUnlhV0oxZEdsdmJpNWpiMjB2WVdSekx6RXVNQzhuUGdvZ0lEeEJkSFJ5YVdJNlFXUnpQZ29nSUNBOGNtUm1PbE5sY1Q0S0lDQWdJRHh5WkdZNmJHa2djbVJtT25CaGNuTmxWSGx3WlQwblVtVnpiM1Z5WTJVblBnb2dJQ0FnSUR4QmRIUnlhV0k2UTNKbFlYUmxaRDR5TURJeUxUQTVMVEF5UEM5QmRIUnlhV0k2UTNKbFlYUmxaRDRLSUNBZ0lDQThRWFIwY21saU9rVjRkRWxrUG1Zd1lqWm1NbVZrTFdSak5qWXRORGhqWWkwNFpETTRMVEF6TVdNd016Z3pOR000Tnp3dlFYUjBjbWxpT2tWNGRFbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlJtSkpaRDQxTWpVeU5qVTVNVFF4TnprMU9EQThMMEYwZEhKcFlqcEdZa2xrUGdvZ0lDQWdJRHhCZEhSeWFXSTZWRzkxWTJoVWVYQmxQakk4TDBGMGRISnBZanBVYjNWamFGUjVjR1UrQ2lBZ0lDQThMM0prWmpwc2FUNEtJQ0FnUEM5eVpHWTZVMlZ4UGdvZ0lEd3ZRWFIwY21saU9rRmtjejRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZjR1JtUFNkb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQmtaaTh4TGpNdkp6NEtJQ0E4Y0dSbU9rRjFkR2h2Y2o1VVluSWdWMlZpUEM5d1pHWTZRWFYwYUc5eVBnb2dQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwNGJYQTlKMmgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhuUGdvZ0lEeDRiWEE2UTNKbFlYUnZjbFJ2YjJ3K1EyRnVkbUU4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTZHlKejgrUUFoY1FBQUFGRVpKUkVGVWVKekZuSHVjWFZXVjU3Ky92Yys1ajNxRUdFeG81UlUvUFBLQVJpQ2dkSXMwZ2lFOEVtZ1lFVDZPajlaV1BqM3ptVkdtbFdsQmJaTFlndUNnWS91WjdobnRIaC9ZL2JHaElUWUVEQVFRZVFqcWhOZVFFQjRCd2tzcGlIbFYzWHZybnJ2M21qL091YmVxU0NXcFN0MWsxcWZxVTQ5enoxNTdyN1AyV211djMxcEhkSUZLWjM0TlYyMmlOQ1BXeXpqd0VoWUQwVGxBanVZd2xiUVVqd0xtQS9PQVk0RTVRQjlRUWZRQ1lBd0JEV0FRZUJwNERGZ0hQSlUxM2RwUzJSb1lSQVBuY0dhbUNNRWx3MWhNaWMwU3paOTlhY3ByMGxSdUxwKzlsRlNpTkNScVBSRWw4dlhRQ2xXWElFRU1IQ3JIcWNBZkFhZUE1b0E1QU9rdHJHMzhHWm0xTHhCQjY4SHVBejFzeHMrZDR5VXpveDZnbXVDdDVVUGlwaEhjZG1MV1l2aG5WKzd4MnZaTU1PZGZSVytXRVZ2UVNoeXBvcXUvdWoxV0R1cW4zbXI2cWk4dEJwMFB0aGkwLzRnTURGQUFvcG01Z3IvR3pLUWpCd3d3U1JGd2dBY3J2Z1RZSm1BbGFFVTlDeXVySlJmcXQxeEVkY20vdUxvcyttQ1VuS2duSlZoeHhhU1g2Q1o3UTJuSlYrbU5EWkJCZ3NvdU9JeG96Wm93UGx6MXBZZUFud0tma0xTL1pNSE1Nak9MWmpJemMyYVdTUEtBT2tUeDNmNHp2K2JOTENudU1UTkZFNWxrUWRMK29FK0EvYlNhK29jd2ZmampyVE1CWXI4NWx6b25oOUViR3BTV2ZIWFNncG00eGx4NEE1WEdPbHFDVnF1ZkhqL296UlNjaThTb014RlhBOGRLQWlNZ016TWNrbVNHU2NnQTdhR1dHbVlDV1Q2SVlTWVJRUUx6aHNCc2pjRVZpZW5PbGd3SHZwWlVRaExxSkFhTnlueTQ4Y1BkRTB6cHZLVzRXT2cyS0JVdW1rSkVCenE0RnV3amhjMElaZ2JDWVVJeXpQSkh2MGZDMkFtWm1Va2lOejhHS0NxWHVpLzRYMjlSbDB2MnFzTjhCbEhDaElqQmFONjJkTGM4ZGp2aDZ1S3Znb3VGRVpScnFCNTdySXJCQmNEM0pHYUFvcG1ad0ZtdUlXWVNtcUp4M3gwWldGc0x6VEN3V0R3RVoyYS9CejRqdUxsR2t3b2xKNGhDQkJuRHQremFNTy9TeGxRV0w4OXRwUUhJRzhRdmJ6NEZnMitDYnBLWVlhYXNlSURlRURLc1VKRzlLaFFnRjd6eWZZVU01Um9qd3pKSk00Q2JETDc1MzhzSFlDZ2FlRFB3QWNybkx0L2QyT05UenpsTHdhdnRDSHcwZ21HOTNta0Z4a0twb3lVZWxPLy9mU0NNWFZGN2kyRW1nMUFvcndOV2g4RDV6akdrUE1ZS0FFU2p0cE50TmU1QzBzWEw4UzUzaWhnZUkwVGpBT2UwU25Bc0lpczhpMGFyODE1WjdXVEpjckhJY2dzbnFZV1JHdlpJTU03MjhMb0pMd2dtQ0ZGa0svOTZoMkYyWE15cFM2bjJkeTU1Z3lEakR4QVBDQTdMaFVLYUd6K3piaGhXNTRRcmhvbG14R2k3dVdQMzFKNmJtU0Vwd3l3MTJBQ2NiUEM3WE5NSk1xZ05HdHk3ZE95YzNqcGdwVCtmb0lHTEZrT0kxb3U0WGVJd1VGc29ObFdobUJsT0lrWmpjS2pCdHMyRGJOczh5T0JRZ3hqemE2T2kza25UaUErUW1WbUtsT1ZyNFBZUXJkZWlCY0Nab0RwdHgyV00rVS81M09XNWU4V1V4WmJGVGI5VmRlYkJxMEduSzk4K2hWQkFVOWc2Wm9iM2pzSGFNTk42Sy96Sk1iTTUrdEJaQUR5NWNZQmZQUEVpMjRZYTlQV1VDU0h1ZUh5WUhLL0N0WnVrL01HQzNYM0ljZVVQUHIrbWdaY1R4WnFHVjM2bGMxK0hZL1dzSy9HQ3VuTlVITTV5cmY0TzRqOEpqUktLVFNrdTZRaGxzTUhDRTQvZzIzOXhOdk1PbVRubU0wKzk5QWFmKzUrM3MvbzN6OUxYVittK2NMQVU0enZBWnlWenJaakcxQnJFcEV6OTM3NE01UHNNZ0dUKzZmay9sTHRsMEVkQlg1Y1V6TXlQMnE5VHNpbmVPUWJyd3l3ODRRanUrTnJIbVRtOWw3VWJCL2pITzlid3dOcU56T2l2TXYvUVdYejB0SGZ6eS9XdnNQNmxONmlVVXFaaWRVYlAzY3ljVUpRNENYaFcwaE5Pd1J0NU5OcDY1dDc4SG9EcUdjdUlxVWN1T29PSWNaaVRQU0dweDh5aUpKZEg1Rk0zdERFYXBkVHo4TGN2WWQ3Qk0vbmJuejdFNWQrL2k5cjJPZ0E5L1ZYKzIyY1c4UjhXdjRlblhucURreTc5THMwczROelVuZDZJUVNaSzVzellIazNIZ2owdmNHcGtFWmRTdi9QSzNQaGFMeWdFbk05REZ5ZTdHcWtIc3d6SjVmRktkN3hQWTdqSnFjZk1adDdCTTFtN2NZREx2MzhYelN5dzMvUmU5cHZlU3pOcjhZWHYzY0hhalFQTU8yUW1weDR6bThad3N5dUNhWWNYeUJ5bURLbmZ5Yjd1bmNONWh5VWU2eW5tV2w1eUZTM3ZVQWx2d1dLTWRqWndvZkpjVUtKMjBOUUZjaEprZ2ZtSDVJYjIxb2ZYVTl0ZXA3ZVNrb1ZJc3hYb3JaU29iYTl6eThQckFaaC82Q3pJUXNlZFQ1V0VJWk1abGdnaWNLRlpYR2dXbzByT2t6cktTNjdDZVRWSjZrYjlaUi9xRHpTUVdKNGZWTWtQcyszeHVrVm1WRXBKKzlkZGZDNy9rVHJIbEF6TURxVE9xYVh3SklDdXJ0ODVST3NWQzZvWm5neUhyeU5udm5wUW9IcHk5V0xFQXFFV21FUHFTZ0FIdVRlS1psQXU4ZWlHM3dKdzNoL05wYWUveXRCd1J1b2RwY1F6MU1qbzZhOXkzaC9QQmVEeEYzNEhsWlJvTnFXNFpqUko3U0JKVGhEQUZsUS8yUGVoNUVDQk00OWx1QkQ2V0J2ZkRFZXhCYkJMUmNldHFWc1RLVHhDcm5ZeGNOLy9mWkVOci8yZStZZk80dXBQTHFTVWVMWnVHV0xybGlGS3FlZTZTODVrL2lHemVPNjFUZHozNUVZSWtTSnoxVFhoV1A2OFZjUmtJRDQvcDI4anRTdXVERUVWVkYyeTNBUEI0QnhoS3d2MzdFQlRDdUk2RTJnTFJUQlVhN0p3d2VFcy84UnBuRFQzNE01bjFtNGM2TmlVYzArYXkxRkZzQWZ3NE5xWFdQYmpuN042emJQMDlWUTZtdE5GUmFiWVZNNU1peVZ1QS9NK25mTUJBU1pzS2VnUEpZdUZpblh0WU9pZFk2alc1Skp6VHVTR0wxM0VRVy9majVjR3RuTGpmV3VSRThlODZ3OTQvOUdIOHY2akQyWFc5RjRlZmU2MzNQYXJaNWc1dlplalp4L0F4ejU0TEJzSHR2THI5UzlUTHFkZEUwdzcwVlZrQXAxeS9ia1preEt6R0JFSENKMlZuOWh4UlRhc0s5cmlYUjc2TDF4d09QL3JjK2NDOFBWL3VZL3Jidm9sYjI0ZVpMOXBWVTQ5NWwwY1Bmc0FBSjU4OFhYdWZlSUZ0bTZyTVhOR1A1ZDk2R1F1dS9Ca3Z2LzU4M25selczYzljaHo5RlhMaERpMWFCamF4NW84RDEycy9jeGdjYWJRRzc0MDV3T0FMZ0l1a2hRRUxoZkwxQVVqaVZnY0FYNTAyYi9qb0xkUDR4czNQc0FYLys0MmdoTTlsUkxOTExMMitkOXgvNW9OM1AvWTh6ejk2aVlrUjdWU290YklXUFhnT25wN0s3enZxRU9ZYzlEYnVmNmV4enRqZDRPS1ZLaGtpa0N2azU2UzR6RlhCRTZudGRNSVJpZExQMlZ5RXZWbWl4T09QSkQzemoySWpRTmJ1T2FHK3luM1YwbTlKMFRET2RIWFYySGFqRDZtemVpanI2K0NjeUpFSTAwODVmNHExOXh3UHhzSHR2RGV1UWR4d3BFSFVtKzJ1aGZYRk5uR0luY0RjTHFYY0Zrckt3RW50ZGRTcE9HN3hSU2FMUlljL2s0QTducGtBNXUyRGxGS2ZPNjZDNHJSYUlWSUs4UXh1WmhvUmlueGJObzZ4RjJQYkFESXgycTJ1cVl4MEU3NGRWSXdKelhyVm5KU01oOTRWMmN0MWoyR0VoQWpiK3V2QXZES205dWdHU2ExcUZ5NEliOFg4ckZpN0lJRkhNMGpUMm9YZjc3TGxaaWZDSTRubDFZQTNGNUpVUmJhWVdiZ1Jlb25qdk9sM29GVFI4TzZGY2VNcGNMMDVqTHdndU1TcE1PS21EdUNKbzFNVG9SOElZZzA4YkN0eGlhQUVDZDJzM093dlU2MU9FWk1ScWlUSVFFR1VlQk5ISllBOHdwNUtkOUgzZHk3Qm9sbi9jdHZBdkNwUmNmbkorekNlTzd1Mll2Y3psUkxDWDkyeHZFQVBQbmlBS1JKMXpVbnoyUVYrOFUwUHdHYlhjakxtY202RWUyMktVU2pwN2ZDdjk2L2xyTk9QSUtQbnZadUxyL29sRDBlNzhkM1A4N05ENjZqcDZkTTZFTENmRFRsd1MrdWtNWHNCSGhiNTJLWDdjdm80OENucmx2QnlvZWY1dWpaczJpRnVFUDg2SXQ4eXc0TE5pUHhqaWRmSE9EbUI5ZDE4akpkUEJia05QWWc5alpWbHl6ZkxObjBibXRMbTBZdm9GWWJocXcxM3FTZ05wei8zbE1lUHgrUkp2VDBsSGNZczd0enhTU1RtVFlsUmY2T0FoenZPclAyZzVCRWYxOWxod1VKYUxZQ0Y1eTFBSUNiSDFoSEtmRTcyQit6SFBYYlcwSXB1QlF6c3I2RTNFV2wzUnA2UFBDc3ZaQjhtNHhkY2dpUm5rcUpmN2owVHdHNC9kZlBVR3RrSFUvMlZtcVB0VGRBdXRHVWdHcGdsYWxvUy91dzJBcVJXbjBZc2h3YUp2VlV5aVVTNzNaNjZET01VcEpmQi9Ka0ZjMnU4NWtZZFhiT1lBSzJEVFFET2ltYlNkRmJ3Yk9GQytaTkVqeFRBZksxeDJ0UHNOdDhKcmFhSXRqYm5nQ2JnZGtkN3BNWXNWdmdtWnc2ejBUam9BSDdBcVRMNjJzNnREa0J2UWgySENpYVNDWWo1MDZ1NWNRY1BKTTBiamJ1anE5OW5FVmYraEdyMStTNWxIWVd6cm5jRGRhSHM0NG5xZzluUlJxVGpuMmFDcCtKVXVHTlFsNVZxaGQ5T3VmVVB4U2NnaFJrNWlZajVoQ05ua3FKbTc1eU1UUDM2K1Z2Zi9vUUYxOTlJNnQrdVo2NzF6ekg5Kzk1bk9tOUZkNHo5eUJPT09KQXJyL25jYkpXYkpjaDVtbUoyakNmdStDUE9mczlSNUltbmkyRERlNTc3SG5LcFhUQ2ZINXd6K1BNNks5eTRwd2QrVXlVaW5BbG11RkJLeHpHaHNKSnVjblk5WW1BWjFrVytLdi9mZWRZOEt6UnhCY2VaWEN3em1VWG44STFmMzVHWjl4ci92d01McnY0RkFZSDZ6Z0o3MFNqc1M5QU9vTjI2c0ZzZ3pONGxCeDQ4c1UvSnlTZlhZSm5yVFo0bGpLMGJSUjRkc2dzYUlVeFFybjIwNHNBdVBUdmIrZlN2NzhkZ0dzL3ZXaU1jR2p0WFpET1JpSktUdzQwUHBMRUp1dDhtUmVBdzRESkZiM3NERHhyZTcwUnpnQ2tTWDRVcVRkYi9KY0xUKzRJNWIvK3c1MTgrNllIQVNpbENkZCsrZ3l1L2ZRaXNoRDV1MXQvRGJCWFFUcVoyc0lSOEVLMDFqcFhxcW9KUE53dUM4MnJhWGROZXdxZVBmSEM2NUI0cHZXVXVlcVRDd0g0d3ZkVzhZMmYvSUsrL2lwOS9WVys4Wk5mOElYdnJnSmcyY2RPbzY5U2d0VHZWWkF1QjExcDUwRWVTcE8wNmYyUnB3THNCNXpYemp2WUxqQ2x0a2QzRXMzaEpnTmJhM3pvNUtPWWMvRGI2YStXdWZlSkZ4amNWbU80a1ZHcGxyanVrak01NjhRamVlNjFUWHpwaDNmVGFHUkV3ZnFYM21ERkw1L2l1eXQvUTI5UEdiTmNHMHFsaEY4ODhTTFB2dlo3L3UyaDlUeTVjWUJXRmhqWU9qUmhQbC8rNGQwMDZrM0twU1N2VGQ1RkZKS251WE9reUdRTytKYkJZNm9zV1Fwd2dOQTZTVE02bFkvalJGbmRBOCtlS3dhTTlQVld4enpadHRBSGgrcDUza3l3OFBpOUNkS1p0WXUweld5em1jMER2YTdxa3VVdVZ5UDdKOUJISkd1WnlZOEh1STNHaVM0NTU4UU9UdlRTd0ZidVhQTWNDNDU4SjhjZDlvNHhiQjk5N3Jlc2VmWTFGcDF3T0FmUDNBK0FQN3R1QlQ5Yy9TalRleXNNRjZmdDlxVGJBaXFsQ2R1R0duem1yQlAybU04bnIxdkJEKzVZUTEvditBR2ZqV0Fud1V3SjJEK0QvajNnRXZMOWhjRlBoSDJrQ0lrN3lhenhoREpWOE93SG56K2ZWOThDbm8wbTd4eGJ0OWYzT2tqWHJwM09WZE13K0dlMXE3MzluTlB0b25ucjJGNUxuOW1XVmMrVTdCRHkybnhuak9RNjl4VjR0cS80V0Y1TnJtS3RIbmo0Y0dwL3RWeVIyNVNhU3hqa2hxZm0rWmRyMHdHK1hZRGNlU1E0eXFMdksvQnNYL0VwYXF1c2d3L0FkUnZvNFQ5YnlTZkpGcHpSZ3htaHZqV2ovdlRtbndCckRIbXdTTHU0cGkzdGZRQ2U3UXMrWmxhSWhHaDVVTGVtL3B2dC85cmFaQkJkc0ZZL0xwRFNTaE9xMDFOZm5Uc2Q0SEpHS2h5TE1wTGk1ejRBei9ZQkg4dmp6eUtXTlFQajh1cUovU1Q3TzI5SlNyQXlidmpXSzBoQ3dGb2hTTTVKYmpWd280RVR0S3pvNitqUU9PQlpNc0h2U1lGbmU0bFBvU3dTdEhKVWdCdHhialhPTzBJV3NCYkR0MTVCQXFCbWhCQ0pMdmNPQnBjNzdKeWljak1xYi9BMFFQc0tQTnRMZk5yOUJSRXB4V3d3UnI2WXQxMkM4N21tQWJsZzZxdVdVbDI4Rk9jNmg4a05adndGMkkrS0haVlh0Q2JlMXIvOHBtRHZnV2Q3RWFReks1b3lSNnJvZElselBBOTRrd1hEVTE5MVpXY2NBS3JuL1ExT1JwWkZFaTluWmhINEg2RC9LSkdSSjh5dEZTTC8rSmQvcW8rZTl1N2RUSEhYOU9PN0grZFQzMXlSYThRNFZQQ2hTM3lzNENQSWV5S0E3emp4V1VPdW1jV1lsajBNdDZqL2JCbnREM2FvZk02eVBMVm9wdENTWmF1MlVsMHk3UzdFNlJpWnBEVEVhREVhRjd4dnZuWUdudTJVeGdIUHZITmp3dlgyN3lIbTN1YUM5ODNmS1VnM1FUNVc4SkdaWlJLcEdYZGVjK3JCaXo2N2VpUGx4S2w5dm02c3ZMSXp4QTZjcXVjdWF4L1puVVdMUWRhYnlOMHY2Ymg4WUtXQUZlRFpucVhqZHdPZVRRaWtteGdmSy9pTUZzb2FvcjAvUXQwNTVTMENRT1BXSzhmY21yeDFyUG8ybzlvbkVGRk8zcU1oNEd3enUxOXdlRnM0QlhpMlJ5amQ3c0N6M1lGMEUyZGpLdmhra2xJemV6YWFuU1dudW9wR0xvREc5aDB0MTdnY082MS9CZ1plUmdqWUFWNjZYZWo0VHV0Zk80VnM2bHFGNTVTcDNaOWQ0UFFhYWYxYkU0eXpuUmdRK0tLWmxzekdiLzBiMTE5bUsvOGFGL0pqcE10Zk9lQWRlajBFVGpGc3RiVjdsN0NnNHJScHRxdWdaTitRRlVaQXVmY0poVWROVGJhNmhaM2lHQkZLNGI3R0ZRcnNvcjI0ZHR0U290clpVQVdFbDlmUTFlVzNuUUY4S3k4QmxiZGNlK2kwbjl0a2tvcGRvcHh4M2lPYVp3WXlDVytHQTc3MTJTMEx6bkJRUThYMnlSL3BUanRvWVFMMm9YenVNbnllRThYQU5XakdIa3FqR3RJMWcvd2xGditmR3RMekxKT05hVWczWjhaSVE3cnFWS3pxaEJVTjZXTDRsdkUxcFUzakJ4R2pLRHg5THpyaVQ1QVRKak9QbHdkdmFKMlovZ25aVEl4akpUbWtUa3Qva2F0b0c5R3VDcWlkWmRRSWZCaVZONFQ0L1Bsd3ZhRVBDWDd0WkY2V1FMSE5nb1BtYnJyMFlUSlBkUFJMTDN5Vm5sYkRSeU1rRWdIN29PQWFFOGNYTmpnVTI4cTF0Y2FLaGV3eDR0N1d3dmI1Qnl6UHBTREFGeVp1RGZERkJPN0tJSC9wUmVnTFNiSjk3N3owWWpTVmxueVZWQm1ZaURoNXBJREYrdjk1aHVvSmN6NE0vQ1hZZTlzYnlTQmdSREEvd20rVVA5dHAwcjFUeEdPajZsYnl5a3JKcVhpZlRDR25YNEcrK2ZGYmZuWEREODk5RHdtNEFPWVVEUmxaVEduZStwWHgySFJQTUFDY2Z4WFZWcE9NU010NXFoSGZmS01XU3JONmVFZFp2TmF3eFlJTGdVV0NBeGliV3c5Z3NUQ002bHhvWDI2YjdzS3NTWjFxMHBGdG4yK2hBV0NWd1kwSDdwZXVmRzFiUnYzK0t0V1Q2Nzd1Q0VuTFNBWDFkTTllckRPbHZWOWR2QXdUV012aFhBU1B2L0tkbThLeVYvZEhpQmpqREVsbklENEFlaC9ZSFBLYW5CMmoreEdCalB6ZHlhNFpRSXY4blZVUFl2emN6TzUwWHI4M2crdFBuODdIN3RuaUxYTWhORk5jSmVEVW9yNXk5N1prWjlRVm8xZzY2MnVrNVFZOTczaU43YThjaWpBdlpESEc2RndPNEErM3pLZWV1Y0FDMEZ5d1hiKzhTMnpIV0E4OEFhd0gxbVFockMrblNiQ1lWMUE1TDVmbml3alQ1djZPb1EyenlHb2xtcXVtL3ZLdS93ZlJydzV4WnZ2djJBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvMy01ZTI5NzU1ZTcwMTBhN2IwYzA4ODJkZjE2ZmZmYjM5NC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvNC1iNWNlOTkwZTk5YTEwMmJkYWJjY2EzNDQ2YmZmMGFmNS5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJHQ0FZQUFBQnhMdUtFQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQURsMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTZnZ1NzhuSUdsa1BTZFhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRblB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU2RoWkc5aVpUcHVjenB0WlhSaEx5YytDanh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBuYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeWMrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cEJkSFJ5YVdJOUoyaDBkSEE2THk5dWN5NWhkSFJ5YVdKMWRHbHZiaTVqYjIwdllXUnpMekV1TUM4blBnb2dJRHhCZEhSeWFXSTZRV1J6UGdvZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUR4eVpHWTZiR2tnY21SbU9uQmhjbk5sVkhsd1pUMG5VbVZ6YjNWeVkyVW5QZ29nSUNBZ0lEeEJkSFJ5YVdJNlEzSmxZWFJsWkQ0eU1ESXlMVEE1TFRBeVBDOUJkSFJ5YVdJNlEzSmxZWFJsWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1Y0ZEVsa1BqSTVPR00wTURNNUxUTXhPVE10TkRReU5DMWlNREkzTFRRME1URXdZbVJsTkRZM1lUd3ZRWFIwY21saU9rVjRkRWxrUGdvZ0lDQWdJRHhCZEhSeWFXSTZSbUpKWkQ0MU1qVXlOalU1TVRReE56azFPREE4TDBGMGRISnBZanBHWWtsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Vkc5MVkyaFVlWEJsUGpJOEwwRjBkSEpwWWpwVWIzVmphRlI1Y0dVK0NpQWdJQ0E4TDNKa1pqcHNhVDRLSUNBZ1BDOXlaR1k2VTJWeFBnb2dJRHd2UVhSMGNtbGlPa0ZrY3o0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb0tJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU2NuQ2lBZ2VHMXNibk02Y0dSbVBTZG9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JrWmk4eExqTXZKejRLSUNBOGNHUm1Pa0YxZEdodmNqNVVZbklnVjJWaVBDOXdaR1k2UVhWMGFHOXlQZ29nUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cDRiWEE5SjJoMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4blBnb2dJRHg0YlhBNlEzSmxZWFJ2Y2xSdmIydytRMkZ1ZG1FOEwzaHRjRHBEY21WaGRHOXlWRzl2YkQ0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnbzhMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU2R5Sno4K2YyTlBJd0FBR3JsSlJFRlVlSnpObkhtY1ZjVzE3NytyYXU4ejlnQU55bVFFUllOREhMa3FqbEZqeEFFMWNvTkd3TndrNytVWjg1SjdZMkpNMU53NEppWW1VWlA0RXNoZ0VxZW9PS0FvcU9BOG9nS09DQTRnQ3RMTVRYZWY3dFBuN0tyMS90ajduTzZHaG1iTWUrdno2US9kN0tHcWZyVnExVnEvdFdvTE8wQXlFeWNoYXZBcUNBNHJXQkdqa1ZkdkRRaEMwZnRNV3RnZjJBL1lWK0JnaFJGQURaQkJ5QU9nRklBaTBDcXdVT0YxWUw3Q3V4Mk9kekloUlZUd3FnUkdqUGNxVHNXcGN4Z3JxREVVYjc5Z3U4Y2syL053WnVLZkNNUVJpS2ZEQlJqVUZrcTRmQXBFREpIWG9WWTRIdlJJaE9OUUdRRWFRN1ZoeTlwemoxUXJGL0FnQ3dSOVZ1RmxoendWR0Q1V3J4VEtsbnpvcklJTHBVeWtGaStXOXUwQWFOdUErZXJOMUpRRHZCUEs0a2dGeGhTODgzbGpLVVJpODRHT0FjNEdHUVAwNndSQkFYR0FWMVdUdEMvZGVsTEZBUVZVUkR4Z0FKczhIOStpckFGOUdIaWdVTFlQNTBQbkNxOU5KLzl2cDVsaTVIM2FDeVkwdEFabHVQVTdXejNFclFZbVAzNHlZaVB3Z3FxUndJcEVYbjFCQXNsck5BNjRHT0V3Tk5FS1ZhZmdFU3dxVWhtNWlJaUN5aWI2VUxtbVhWUUdSRUdkZ0VIRWFvSVF5S3Vndno1ajVBWDNUSnN6bWNDSWlad3FvaXFpcUxjVTd0dzY3ZGx5WU1iZFF5NjFCcTlLc2MyUXoyUFY0NExBRUhrOVJkRHJnSU1sVmc4SHFxb1lSRVJRVkt2TFoxdVhyNnJHRDZzb0tDcUNCeEhRQkNUbUtGd1dHSGs4aWhReDJFSmtYQ2FJTUJqYVNnMHc1Wnd0YW15TE9sa3pZUklxa0RRdTFtQ2NWNmZLRUNOeVBUQytBa2d5d1FaQVJGRFZHSnNkS0txcWxYY253L0JKQ3piNXY5dlVjeW1HWlZhd1R0V0RxQUJpbE5iYkx1eTFqVjQ3bkowd3FXb0lGRXpabDMzR3BuQmV4NHJ3WnhFYVFIeWk4a1lRSWVtenlQWVo5OTVFWTYyQnppWG40MGxRbzhwYWhXOWE1UDUyMzA3YVpBeXhBY0NMb2EwWHcydzJkekUzWVJLMmMzUldVWi94V2J6cURTTGNKeUlOcWxLT0oxQXNnTWEyVVhZMktGQUZQbDVZY2FOV1ZVVlZ5aUxTSUhDZmh4dnFjaU1COWZFWTRvZHk0eWR0L3QyYnVwQTcvNDlZSDQ5U3dhcmlJdlg1MEpnSFJPU0x4RHVMU214VVZkbnhTMlpycGJMRWlEdmtSRVNTM1c4bXhwK3RYZ29pWWdXY0tEaWp0RzFpV2ZVNGtQeFhKcFBNUHdvV2NGNFpZSVJIUlRnWXBLeXFRUUxFSmp5UWY1MGtkaXorUGVtMFNMeThCSWtRUWxXZDY1VFRqTEJDd0FvNEVOUkI0YTZObDlYR2d6bitTbkpEQmxhWEQ0cFQwWUdDUEMvSWNJU3lxb2JHQ0Zha3NsSDhQeE1obmpYZkJSeW9hbytvS29LVWdWRFJEMVgxR0VFYUVTeUlVNEcycGN2aDZTdTd2VGZZc0tIOGJvTXExdDZvcWhOTVhvVHBBc01oQnNVYW8rMmxpSEo3S2Q2REJhcXVyTmNOWDduekpMSHdtVnlLVkdCd3ZoT2MyRStxN2w2aGlKUUZoaU15SFMvSGV0V0NFVFVnUHIvYklBb2J2THJiYkdmRy93RkVNQ0JScEZwYTBDajV6dzJlS1NKZlVLVU1HbG9qMnR4ZTVzQ2gvV1Rpc1NOb3FFbWpRRnRIaERWQ1ByMFIxanNlajZUalhtSHh5bWIrOGZRQ1BsMVhJSmNPOEw1SHpVRlZCYVFzUXFqS0V5TU8wcFBlbW1jSWpZcEhGUFVVNy96V3hzQmtKL3lKckExb0xoWElCUm5qMVh0RmZ3OThSNFF5RUJvUmJTMUduUGk1SVRMOThqTUlyZUdOajFiVHZ5N0RrSVlhQU9ZdVdyWEJtM2U4eEtBb2dURWNOS3cvcTF2YU9mbWFoM2hyeVJweTZhQ2I1bXdJamdobFZRbEJmeS9JZnhvUlV5aEh2aTRUVWl5V2FMLzdmM2Z2ZnMyRXlSZ3hlUFVXY0lwT0JMbE5CS2VxUmtURUo3KzhjK041cU1LSlYwM2w0MVV0SUhEcDJTTzUrdHdqK01KVkQvTGt2STlJWjFNNDNYbkxTaEFpNS9uczRENDhmKzFZRml4cjR2Z3JIaUNiNmxsanU5Z2NGUkd2cUVWbGdnaDNBdFlJem5rbzNCRWJZZ09RUGY4UGVBdE9uVkhVZWRYaHdHUVJFcFJqcjZrY2VSbFluMlAzL3JWYzk4QWNGaTFaUTIwMmhSWERMNmZPcGFXOXpObUg3d0VLMlhSQUp1ejh5WVlCMlZUMy85dWVuM1JvcWMrbldQamhTcTY5OXpXTzJXY1FReHJ5bENMWG83TEdvRkFCSjNHQmRKTDN1cWYzNmlLdnh1SEpuditIVG1DTVQ2RWVqSUFSUlVTdUV5R25xbVZCak1iQmdNUU5RTEVjc1hKOU81SUpZNVcyUWlZTWFDbVcyS1V1QzZIRis4NU9HUkVpN3ltV0hKVjNiQ2htRzVhZUtwQU9pQktEMzc4MmkvT2IzaWVyVzdoZ1ZMVXNJclVpL01JR2dyVUduRWQ4R1BjbmU5NWtOTEpZeFhvVjc5V2NCb3dqNWo4Q1JUV09Ncm9QTk5HbWFnY1Z4V3pDdnl0MGxLbkxwaGcrb0k2eTg1UWpuenhYaWJTaHJlU0luSThIMXVWYXIrSTdnVmEwZDlNbW9DcEt2Q043WUp4eitrWG4xRnNiMk1nSFpNK2JqTEdCb0VHSjFySnpCVWtCZW5WQ0RxaWdsWGk0OS9tc1VnQ2QveGdSMmpyS2pCazVqQTl1UHA5M2Z6dUIreTgrbGJwY3FycDdXQ08wdEhidzFlTkc4TUsxWTJtb1NSTTUzODE0YmxuYld5YkpsTkxGM2lCd1hWdG9LYWgzeHBTd0ZveG9HU05xODZFaHA2V3ZJRElTTkVMRnFJaHUxczJ2QkN0U21UV3B0STRJUk42VHo0VDg2WUxqbWI5MExkLzk2N09jZHVoUXZuN0N2clFWT3NpRWx2WE43WXc3Wm0vKyt1MFRXZGxjWkYyaEE3c3Q2NnJTOEpiYzFSbWFHOEFCSS9QbDZNdjVPTDZ4NGtzWTV5M24vUDRjMS9jejlRajZ2WmhiUWhBVjJjeE1PSzhRK1hocE9FL1phUmZDSkw1SGt5MjFvU2JEb2hYTlBQbjJVZ0Rxc2lrd3dwcldJbDg0WkNqM2ZQOFVYbjZ2a1hHL21ZRnpIbU5reTVmU05rcGlmcVZMT1BHRGZnY080NWUzWCtDY0JoZ1I3RDNmdVlkMW42dy9IVGlDR0VFajhZTGRlQW9FbkZQU29TV1REYW5KZFA2WUNrR1hjRGVodGF4djYrQ2l2ei9QVjQ3ZW0zZHVITThiSDYzbTcwKzlDMTQ1ZnY4aHpQcnBXYno2d1FwTy9mazBuRmZTNGNaTzJzNFFvVHIxaHRqV2pGcno1a2VuLzJqaVpNU0lEUVJSamRWa2ZETGRDdElqNTFnSkdiUHBnTHN2R3Qxamc4V3lxMXBEcjBvMkZUQnA1dHU4dUxDUnovU3Y0WlVQVnJCOFpUTUg3ejJRUnk4L2c4VXJtem5yK3VrMHRYYVFDaTNXYUZlQ2E2Y0JBNUJ3QXNTVWhCamdQT0FSUUFNZjkzK0FFVGsxb1NCTkRHVDNYaWtRV01PcTVuWXUrdnZ6N05hUUovS2E3RTd4OVl2UE9KakFtaXJWQnpFeGswMEZ2TGxrTlc4c1dZMXpuZ1AzR3NBTDE0NmxzYW1ONDM3NkFNdFh0N0wvMFA1a1VwYTNQMW1MRWJERzdIeHdLc2Ftc3FHcW5xTEtMc0NxUU9LRmRqcEtYeEFub3FZTFA5c0pUUEowMlhsdWVuQWVPTitwVWw3QkdpWWUrMWxDYXpiYUpieFhhck1wQ2gxbGhqVFU4ZGhQemtRVlRyN21JWlkycnVmS0NhTzRZdHpoQU56MjdFSytPZWtwYkFMcXpwWTRoRktKV1FUNkFXTVEvaFlZQWErY1dNRk9Oa0UzZFZYditycE1GVGhCY0Y2eFJnaXM2VFRBMVliamE4M3RKUWIxemZQTVZWK2lQcHZpcUovY3g4S1AxM0RBOEYyNVl0emgvUEd4dDNsdmVSTTNmdTBZcHIyMm1Da3Zma0JkTG8zZnlVWTRkdnFxV1FrVXZpQWlmd3U4OHlsRVJpWDNtVzU4ZmcvZ0FGVW5MQms2M3NkUDllUlFWTFNzZjIyR1J5NGR3N0JkNnhoMTJiMjh2bmdWbVd5cTZ2R3VhbTVuNWZwMkFOS0JqYmZHbmwrNXd5VnhhVXhpWTBkcFVWSUJtUDJBUGFoU3RUdFdqQkhhVzB2OC9MeFJIRGkwSHlkZE5aWFo3elhTcHlhTmM4cjhwZXU0ZWNhYi9IVGNZUUE4OXZySFBQamFZdkxaMUFZVHNQTkVxZGhVQldRUFF0MHZRUFJRd01RWlFqVTlSekxiTHM0cjZVeUtXNTU2bDl1ZmU0ODVpMVpSbDB0VGptTHZOZ3dNUDdqMUJhYTg5QUcxMlJUUHZ2c3A1Y2hYbCtXL3dzNElNYW1WWUdBUkRnbUE0WWxUNXBITlp3MjJWVktoWWVHblRhaENmUzdWalMreEl0akE4dnlDUnJ3cU5abVFNREFKT2JmcGJWczc0OW9kSmdwZXdDb01ENEI5QllrVGU1Vm9mRWMxUXp3QTd5RzBCaEdwQnBEZFJDQ1hNSDllTlhhM3FJUWFuVjV3QlNBamdqRkpSR3lsR2tKc1Q5Y3JkRVRpZit3WEFNT1NhMFpsMDRaM3F5VE84dUM4UjRqdFRFVk1MM0dRcVhESVFPUTgxblFDWWswTWJLRlVSaXVPWkhNN1RXMGxJQWJWR2tFUXZHNWRJS3Fkc1JQQXNBRG9XN200UTBDSlgwVFplUWIxelRIajhqUFlwVFpEZVNzaVp1ZVZQdmtVZjVvNW40disvaHgxMlJSbDUxbmYwa0Z0UHMxSkIzNkdrWHZ1d3VDR1BLM0ZNZ2NON1Y5OXRxUFFRYXJlWW94c1ZXaFJpYmFUUC9zR1FKL080ZXc0c1VZb0ZNdjg4L24zNkpOTHgxN3lGajdyVmNtbEExNVlzSnhVWUducmlBZ0R3eVZqUi9MRE13K2hmMTBXZ0piMkVxRTFaQkk2ODlITHorQm45OC9oTDdQZXdhbVNDWU5ZYTdkOHZpczMxZ2FRVkRMdFNORjRTYlFVeTF4NTUyendmaXRnVDJJTXI1aHNpQ0RzTmFpZUtUODRoUU4yNzhlTWVVdjQyMU1MZU9tOVJnckZNZ3IweWFVNGNzUkEvdVB6Ky9DN2J4ekx4T00reXprM1BNYlNOYTNrMCtIV2dnTlFFeEJIMCtGV0RyMzM0VlVZUGl2WVZNaVdPTEFpNEp3bmt3cW95WVEwdDVmWWUxQWZYcmgyTENDY2RQV0RQUEhHSndCazBnSEZqZ2l4UWtmWjhjOW4zK09menk3a2pNUDI1TDZMVCtXNWE4Wnk3SC9mei9KMUJkS2gzZXFJUFFEYWdNdzJqWDZUSTR6dFJGMDJ4YS9PUDVvQmZiSkVrZS9WUlJJZzhzck5NOTdrbFE5VzBDZWZadW9scDZFS2gxNXlGNHVYcjZlK05vTTF3cnJXRG40MGRpU2ZyRzdsem1jVzBLOVBqc2g1cHMxZXhDR1gzTTNjNjgvaG51K1A1dmdySHFpQ3NoVitVV3NBTkFNTmRPYXhkb2g0citUU0ljZnZQNFFCOWRsZWphOXE3SDltUXNzRHJ5ekN2L0V4UC9qS0VldzFzSjdQWC9FQWl4dlgwN2N1aS9PZWRhMGxSZ3p1dzgvSGoyTEJzblU4OSs2bkxHOHFrRXNGOUszUDhzN2lWWng5L1F3ZXVXd00zemh4WC83UEkyOVNYNXZCOWVBcGJOaU5CSU9XQUZoSHNtVlhjaS9iallwQ0dCZ2Ftd29jY2VrVXdzRDJ5c2hWd2lMbmxZNnlvOSt1ZGZ6bnFRZHkxd3Z2OCt4YlM1T0JLYTNGaU9QMkc4ejB5OGJRVVhhTUdOeUgyZGQ5bVpPdmZZaUZ5NXJJcEtDK0xzdjBPWXQ1L0kyUHVlU3NRN25seVhkNzVaRzErMkpmWjRDUGtqLzhqaXpqME1RQUZ6b2ltbHJhV2QvYXNkbWZwdFlpTGUwbFJLQWNPVDYvL3hCcXNpbHVlMlpodDl5S2p4emZIbjBBcGNnejlNSmJPZVNIZHpPb2I1NnpEOStUY25zSjIyVUkvM2g2QWJ2M3IrV1FQWGFodmVRMm02S1J1QVNwb2xNZkJjQjhWTThtM3NaM2pNWklISmlGMW5ES3didVRUd2U0elpSRnFDcGhZUGw0ZFF2emw2NkZzdU9RWWJGdk1uZnhLaktwN25SbjVEMlpsR1d2Z1hXODl1RXFUdjNaTkphdWFTV1Y2d3c4MDZtQUZ4YzJBbkR3c1A2OE9QOVRSRUkydFF1b3FFcFM1d084R3dBZkpndkw3TWhZdGh4NUJ2V3Y1Yzd2blV6ZmZEcUpqM3ErMS9rWXhPbHpsekR1aGtmQkdnWTMxTEM2cFVoYlJ4a2pVaTFrdGFIbCtxbHpHWDNRN3J6NHN5L1RWT2pnbDFQbjh0UTd5MGdGdHJOWVIySU95SHRsWUo5Y25FemJYSWZqQmt6eWdnOERWT1loZUZBTG9teUtCTjlLU1FXR1Q5Y1ZPTzYvNzQrckVIcEIzWWl3WW4xYkhQZDRwVkFzVTVzSjQ5MEVEd2tobGdrdHFjRHk1ZDg4eWtGRCt6Rm01REN1bTNBa2tmUDhldXJjcWkyQ21CNFZnZmFTMit5T0dLdUprR0RnVWVZR2xHVStLYjhZWkhpY3FkNEJOWVZKckFUSy9LVnI4VnZJcTRTQkpaK0pYYXBsYTJQL1k5ZjZMQit0YkNHMEVDWGRuL2JqMDVueCtoSytmdm45L1BiZTExajB0Ly9CMGZzTTR0ZFViQnVVSXM5bkI5VWpJaXhkMHdwV05zbDVKYVNESnQ3WFl0RDVnYVMxcE1yTG9NTUJMMHF3M2ZxU1BLK3E5S3ZOWUUzdmJJWVFaeGdpNTdIcGdDZmZpWE5RcHg4NmpKc2Vta2MrRXhBQXplMWxac3hid3RkTzJKZVduNXlCTmNJZXU5YngreGx2VWhtYWlPQkxFYU1QSGdvUWh4YUpuZXBKTkM3TWRzUzgxRXRpcFJRazIrZ1Rxa3lvVkFSVWF0aTJCNXV5Y3d4cHFPR0ZhOGV5YTMxdWkyek0xRmNXY2U2Tmo1RkxCYnl4ZURWekY2M2lvakVIOGFkWjcxQ0tQSUV4WkVMTGorOTRpVnc2NEx1bkhnakFiNmE5emwrZmVKZDhQb1ZxRFBDQS9qWDgxK2tIOHNqY2oxaTBZbjJjRnU0QmwxaFRxaW5iR0FzUFFYTHZkQU5yZ1lZS2Z0dnI2d1hHc0xhMXlLVjN2RXhkbFp6cStWN1ZPSUczWUZsVGxXc3BSWTZmM0RXYjZaZU40ZHF2SE1IMy8vSXN0WFVaTWlsTFUxdUpjMjk0alAxMmErQzFSYXU0ZU5KVDFEVGtDYTBoOGtwSHNjeHZManlCdW15S2ErNTlyVXAxOU9UNXhxRkxZbDlFMW5sbGhnQ0J4SW1tRllvK2lqSStMaFFTdTRtYzI1Wkp3cjRWeTQ1YlpyMnp5UzJ5Uy9maWh3SkxUU1lrY3A2NlhJcEg1eTNoMXcvTjQrSXpENkdwVU9McXUyZGp3L2llbERXY2Q5UGpsQ0pIWGI4YVJHQjlld24xeWczZk9KWUp4NDdnaXJ0ZllmYkNSdXJ5NlUwRmtwcUE1VlFKUUdjWWtSVUNKa2l5QmloeWw2RGpLNlJ3RHptM0xaZmtNU05DZmUyV2gyR3FXdDFSZkpMeC9NbGRzK2xYbStHcWN3L25zTDEyNWZJN1grYnRUOWJpeXhGdnIyK0xHN05DbUE0NWJQaXVYRC94S0Q2Ly94QnVldVFOcnJudlZXcHpxWTBxT3J1MmwweEtraUhnem5oaElRR0tHM0xtNTFqMStwSnBwVTlhWGdaR0FRN0JKcm1XN1ZwVHp1dEdLdHl0TG5jRDJySXJsV2tsMXVkdi9PRkozbHl5aGwrZGZ4UmpSZzdqcFlYTGVXYitweXhmMTRZUyt5bWo5aDdJaVFmc0JzQkZmMytPMzAxL2kxekMwL1MwaExwVVZ6a1FDL3B5MzBHbFI0NzZjbjhlL2wyTEMxS0JZZG0wdCtPYVYrUzNLS09TZFJkWHYyK0wxaVNQVmZZaVQyZGtXL20zYThLdWExS3RjdDEwMGJyYVRNaE5ENy9PL2JNLzVHc243TXUvSDdFblB6NTc1RWJOM3Zic1FuNTYxMncrV3RGTWJTNkZ3aWExcGJKRmQ1bUkzNnhibnVhUm01dXR0VmtYbEQxNHhMVmp3S2J2eXZ2Mmk0R1JvSTY0Tm44cndvUmsxaE51dHIwY0lVQk5KdXdHamhFb2RFUjRWVktCSlIxWVhGS2Jaa3pzeUJVNkl0Q1lKRGRHcU11bGFXeHE0K3E3WCtHYUthK1NTUVVNN3B2REdPRzBRNFp5MDllUDVaWW41L1BScDAwMDlNMVJpdnptTWd5SnU2WU94UUp6Q3ZuVXZiUVZ5YWh4SW1XTWM0cVVBdko0bTNmdHFPcWxsWk1qbGNCQmU3ZWVsUWJqZkZCYmlTSDk4anowbzlNNTkraTlhVzRweHJ0Tjh0UGNVdVM4WS9abTJvOU9aM0RmUE0xdEhRVFdZSTJoVlBaNHIwejY1dkZjYzk0UkZEcWllRG1pNU5NaEdHSGtucnN3NVFlajJYTkFQZSsvK1VtMUJxOCtsMFpTbHNoMVg1N2RPeGtYT0ZReXJvbDNjbW0rVUNhdjF2cFNnSXNjUWZzL0x5QS8vczg0Rjdrd0RBMGlNNzN6VTBER2daWkZKSXhOZCsvQVdHTlkzMVppajJIOWVPcUtMekdrWHcxalJnNGptd3E0WmRaOGFuTXBtdHM2K0orakQrRFAzem9CZ1AxMzc4ZVp2M2lZdHo1ZVN6Wmx5YVFzLy9qT1NaeDEyQjRBTk9UVGZQZVc1OGlFbG5WdFJZNGNNWkJITGgxRDM1b01weDg2akpOVWFhNWtDYnlpdlhqWktwb1V4bWdaTkFTWllrVm5BaVpDWFJCNjJ1NjhJRFlEUG9qQXh2U2ZjeDZGUzFXMUxRSEZiOENnOXlnaVFsdXB6UDZmYWVDNWEyS243cVNySCtUMlp4Znkxd3RQNUpLekQ2V2x0Y2dQenpxVVAzL3JCR2E5K1FsSFhYNGZtZER5NmkvR2NlaWV1MkNOWWZwbFl6anJzRDM0M3QrZVkrSnZaM0xoNkFPNDcrSlRhZXVJK0dJU09BYldjTUtWRHpEbHBRK1k5ZE96T1Bmb3ZZRGVVek9WSmFTaVhwQlFsVmFGSHp0TjhsbldvVUZjV1JvQXROOTZJZmtKazdHbzk3R0YvbENSYnlsNnEzU2hJelpuYjZ3Uk9zcWVJL1lld01yMTdZeTY3RjdtdnQvSTArOHNvN205eEM4bkhzV1ovN1lIUis4emlLbXZMT0tyTjgraXBhWElrWmZkeTVOWGZva1hyaG5MZ2srYk9IaFlmNzc5NTJmNDQrTnZnL09Vbk9PZTc1L0N2RitkeStkMjc4ZnE1cmdLZk43N0szaHhZU09ybXR2NTl1Z0Rrc25aRENoMEc0TW1OdUovR1dFUnhFZDFpQ3lGTytLeWVWdDVNTmp2Vk5MR1VGRFZsQmdEdkFIc0Nod2hRcVNLN2JLcmJOU0Z5Q3ZuSHJVWGhZNHlKMTQ1bFhlWHJhTnZiUllSbVBycUlvd0k1MzkrQkg5NVlqNWYvOE1UcUVKdFBzM3Fsblp1ZlhvQngrMDNtTVAzSHNERTM4M2tsc2ZmcHI0MlF6WVRNbmRoSXkrODM4aC9uWDRRNzMzYXhJbFhQY2lDWmV0b3FNL2lGUjU4ZFRHaE5SdzVZaUMzUGJPUUQxWTBrdzQ3NlllcXBraWxaRjRpVlEyQTM0dklyNHlJYWZObG54RkRoQ0Y2YTFvTWN0ZkJaU1pPQmdTakttVkZ5NCtWeVo4U3pCS1JMNkNVRlEwcnEycERjSnhYK3ViVEZNc1J6ZTBsY3FrNGJXRWszbzZMWmNlUXZubVdON1VSV0NHMEpxbXJNUlRMRWVuQVVwdE5zV0o5Ry9sMFhGaGRNZVl0N1dWMnFjdlFFWGtLeFRMWlZMRFJ1M2ZyVjBOVG9XTWpDbE9UNDRFSktQSHhITlhIQjMzeitOR2YvSEVXMWxyeGdncEMreDA5SExLb1NIN2k1Sml6VVRWZThVWk5IdXVmRXppRStBQlhXSWsxaFdyZ2hVaGMyMjlFc0ZZMll1WkZvRlIycElKWVNYMFh2NmFTTll5OGtnNE1YdW5tOTFnamxLTGUzdTBKckhUNy93MDBwWXhxcURESFlZNFZkZTBpWWdUMWlLR3d3Um5KamZpQXd0TGxsVis5RVN6aUM2aWVwc29IcW9RaXlSbEl1aFFRSjUwSnJOa29OVnE1cGtxVllldnFkSWwwM3AreTNVR3Bka1RaZ25lYkRVRHBjbTVBcEl3U0tyeXYrRk90K25ZaldFazQzaTVqM2pRd1BIMGxFbEVoOFpMUVFCbzlIQU02RndnbDFoeXQwQlFLMm5VZ0cwZXdpZnUvRGRjM2RlK21udTNrcml2bkJtSXRWM1NPd2pFZ3F5cW4yK0lFbU5ub2RGdlB3QkNmRWZTbXlwRTZBV3ZRRlJoL25Lck83R0pybkNUMGVtL2IrYjlDVk9OVEFna29UdUx5MHhDWUdYbC9ITXJLT0M3Q2dhTEc5M2dlRWpaenZManR0Z3NyWjNhSlh5UVdMNFYwWnYrVFFXN1UrT2lTVFk0WFY2c0Y5RjlTTmRkZDR0V1hhSEM4TVpmanZxbFIxUnRORkp4c2pMU0p4QWRmNHhrM216eEJDMXNRT2VjbVRzYW9yNXpyTUIyKzZMTW1pMFBIQ3YrZkhFaFhrbEt4RFE2a0s5KzBSdTR2dWhLaENRMkpIeWVpdE4yeCtkUDZ2Wkt4YmJkZlVMMUx3YWRNV2hDMXdQM3FPVkNWMnlyYUl5SmU0eE54Q2F1anlzN1JJSzNXaWNaY3JCTVIzNmtsM09aVkQwVDBma1J0YUVJQnZNVFVUYStnd05ad0xlUHVJWmRhaThkVGpBTHlnVTgrZWlGRVhrOFMrQ1Z3YU15S2lrdWNIUU1WOXFLU0c5bzJMZEpLSFc2MWpsZ1VWWjlvYU9XYkRuT0FIeHRqWnZuSWdSRmJLT0F5dVhpcmJ5djEyN0VmdmVncStmR1RFZVBpK1ZJUm0zd21wVTNieVV2MkhKRHZpK2dSMVRxWHl2ZGk0dSsvVk52ckxjVG9Hb1owNmEySzRrQk13dEZXN3AwTjNIQlc0ejczVEIyNEFHdU04YzZyaUZlTW9pN1lpWjlKNlNwZnZabWFLSVFPVDFFOHFiUzFiVDV5ZVJOUVp6ek4zb3dCeGlFeUduUkFaME1WUTk3N2gzVVNXTHQvV0tlaU52Rk5LMUVlQmFiVXB6TVByKzhvVW5DdDVHeU45YVd5eTNpRFMxdGFndWhmODJHZHJsSXpZUktSU1R4QkIwYlZucnhyaDN0OFZSb1J3U2tOUnZWazRBU1FvMEZIa0FTdUd5bEsxWW5wL0xPNmRHS0pFQmFpdkFBODVZMDhibFhXS3A3eEp4M0duVE5mdFNvNFo4RjR4WHFodFl1THY3V3lRM2FOek1USlpIQTBGSnRvVERjZ2dqVWlHaW5lSk5uUEtCSnJqZTRqTUJMWUJ6aVl6WCs4cXdWWUFMd0pMRkNZVTFLL0lHT3NxK1NSTFdJOFhsUnhnOFd6V2l4RlZZcTNienNnRmZtL1orY21WNTZEU1E0QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUVZQUFBQkdDQVlBQUFCeEx1S0VBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBRVkybFVXSFJZVFV3NlkyOXRMbUZrYjJKbExuaHRjQUFBQUFBQVBEOTRjR0ZqYTJWMElHSmxaMmx1UFNmdnU3OG5JR2xrUFNkWE5VMHdUWEJEWldocFNIcHlaVk42VGxSamVtdGpPV1FuUHo0S1BIZzZlRzF3YldWMFlTQjRiV3h1Y3pwNFBTZGhaRzlpWlRwdWN6cHRaWFJoTHljK0NqeHlaR1k2VWtSR0lIaHRiRzV6T25Ka1pqMG5hSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNVGs1T1M4d01pOHlNaTF5WkdZdGMzbHVkR0Y0TFc1ekl5YytDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwQmRIUnlhV0k5SjJoMGRIQTZMeTl1Y3k1aGRIUnlhV0oxZEdsdmJpNWpiMjB2WVdSekx6RXVNQzhuUGdvZ0lEeEJkSFJ5YVdJNlFXUnpQZ29nSUNBOGNtUm1PbE5sY1Q0S0lDQWdJRHh5WkdZNmJHa2djbVJtT25CaGNuTmxWSGx3WlQwblVtVnpiM1Z5WTJVblBnb2dJQ0FnSUR4QmRIUnlhV0k2UTNKbFlYUmxaRDR5TURJeUxUQTVMVEF5UEM5QmRIUnlhV0k2UTNKbFlYUmxaRDRLSUNBZ0lDQThRWFIwY21saU9rVjRkRWxrUGpOaE5qQXhZMlZsTFRBNE5UVXRORGxqTnkxaVpUZzRMV0psTXprNVpETTBaV1JqTUR3dlFYUjBjbWxpT2tWNGRFbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlJtSkpaRDQxTWpVeU5qVTVNVFF4TnprMU9EQThMMEYwZEhKcFlqcEdZa2xrUGdvZ0lDQWdJRHhCZEhSeWFXSTZWRzkxWTJoVWVYQmxQakk4TDBGMGRISnBZanBVYjNWamFGUjVjR1UrQ2lBZ0lDQThMM0prWmpwc2FUNEtJQ0FnUEM5eVpHWTZVMlZ4UGdvZ0lEd3ZRWFIwY21saU9rRmtjejRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZaR005SjJoMGRIQTZMeTl3ZFhKc0xtOXlaeTlrWXk5bGJHVnRaVzUwY3k4eExqRXZKejRLSUNBOFpHTTZkR2wwYkdVK0NpQWdJRHh5WkdZNlFXeDBQZ29nSUNBZ1BISmtaanBzYVNCNGJXdzZiR0Z1WnowbmVDMWtaV1poZFd4MEp6NXZiblREb1dKcGJEd3ZjbVJtT214cFBnb2dJQ0E4TDNKa1pqcEJiSFErQ2lBZ1BDOWtZenAwYVhSc1pUNEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29LSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNjbkNpQWdlRzFzYm5NNmNHUm1QU2RvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNCa1ppOHhMak12Sno0S0lDQThjR1JtT2tGMWRHaHZjajVVWW5JZ1YyVmlQQzl3WkdZNlFYVjBhRzl5UGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenA0YlhBOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOG5QZ29nSUR4NGJYQTZRM0psWVhSdmNsUnZiMncrUTJGdWRtRThMM2h0Y0RwRGNtVmhkRzl5Vkc5dmJENEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ284TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNkeUp6OCtDOUIvMGdBQUd1OUpSRUZVZUp6Rm5IZThGZFhWOTc5cjc1blRicUVaUURHaWtZaGlyRmd3ZHJHREd2SlJiRTlpRWw4VDg5aFNINkpKRkRRYVM5UVk4MFpUZkdLcVVkR2dvQklzc2NTR1FTeVJvZ0pxRUVINnZmZlVtYjNYKzhmTUhFRDZCZk91RC9mejRad3paYS9mckwzS2IrMDl3bGFRM1BGWFk0b05KSXp3MVR3R3JBanFIZDRZUUF5Tk9vVXc1M2NIaGdDN0FYc0RnNEZXb0lEUUFvQlNCbXBBRnpBYmVBV1lBY3lNR3VhTlhGNXJLSGdGWXpDcUtoNmNDZXFvRC9HTkhJMUh2ci9GT3NtV25Kdy9jU3loQ0xteVVDbDVKQkJiZGJFcm1nQVI4STZCWWpnQ09BZzRER1F3cUFFUStjaXRkZDBqVXMxK3dJUE1BbjBhNUFWVi9tNE03NmtxVlFmRkFLdXhkWUZweDVsT2ZCUlRmK1NLYnV2V1BXQkdYVU5MRk9GamlBTkRLTjVVMysvMGhlM2JxTVlOVzdTNWtTQ2pRRWVDOUZtRmdRTGlBSytxSnIyL3JER1NKZzRvb0NMaUFRTlkwUFNmQUxvVW1BVHkxMnJrSmhWenhsVWZQSjNpU1hlYnFxaTNUc2tab1JyazRLK1hiYmFLWm5OUHlKMTBGUzIrQnFJUUlIbmpESXJYUmtWUVJoZHQ3bmxnQW5DT2lQUVJVYWVxa2FwNlZWRlZOYW9haUlnRnBDbWtmOW5INURlcnFrRjZqcXFLVnlFU1VTY2lmVURPQVoxUURPM3pxSXorWW53OGdHOVRZMEpqeEtDMHVCcTVrNjdhYkdBMjNXSk91NGRDYlFheFFCeTNVYkpkVmxXY01SN3Y1WGlFSHdON2l3Z29EbEZWeFNBaW9vcUtJQXBJTjYxVVVSVVFUUzZpcUlyZ1FRVFVLZ0txMHhRdUMxU214S0lZc0pXZzRBSlhKVkNvRlliQXZhTzNIakM1VThaaWZHcmJJS0ZndklyenlBQUQxNE9lbGZvTXA2b2dHRlFRVVZTVFI5OHRNTllqcXFvaVF1SitGQkF2Q2VvMnZmOGYxTXVsSXZxK1FXMEVYZ1FWQk8rVXhrTmpOM3FQalE2NE9QSXFNRDUxZ21KcVV2VWxMYUx3ZWVEWEl2UUc4YXFxQWtZVEMxRVZRYmJRdVc5TUZEU3pRbFVVMUtjUHdhanFNdUE4Z2Zzck5DaVFNd0plRUp3bzlRYzM3SmczNkdNS0k2OU1mS1VDaUZYd1AxaCtHQW8zZ2R3blFtOVZpZElIYUJWQkZFMU41R01GQlVpQWwyUmVJWW9rRmlPS1JpTFNHN2hQNGFhZjV2dWhpRmV3cW1BZDVFKytjbVBYWHJlVVJvd0ZLMWtnc0Y1eGlyWllJMzlGT1Vha2FTVVdKSm4vL3dFd05pVFpGRU5WRkZ4cXZBWjQxRGxHR1VOWmtoekxBZUNWeW5xbTFUb1ZDVWRlaVRWSlVFU3hLTTRyL1l5UnlRSjdJMFJwWkpIVnpmbGowWFp6UlJOWVJCTVBKeUl4U3Fqb3kwNDUwY0lpRmF5QVV3SG5oV2pTNVd0ZFp1MnBkTVJZQXZGSkJGR3NnZ1A2RzhPemd1Nk5hS1NxWWRPVlpPYmNIUjFXSlcrYjlkc0dSWkRNN2FkakRCRWlnWDJ0OEN4Q2Z4S2RyQ2lFS0J3eGRxM0xyQVZNb1MzUlVjRjQ5YzU1YlVGNFdJU2RRU0pWd2hRVDdXNjB5WlMyeG1DTm9LcDRuL3dsM3dzbS9iNjdzaW9HaUNiZ1NKVG93TVBPYTR0NmRZQlJnV0w3Mm1xc0FVeis1Q3Z4Q0I2UmhvOTlmY243RWhoNUFHUWZrRWpSRkpUdWgyQlZ4WWhnUk9pcTF1bGNXY0Y1eGRvRWpFYms2RnhacHRhSUNheHBudE1kU2NHaENRNFNnZXdUR0hsZzROQUNzVmV2S3FKcXlJOWNNd2xzS2xjODRRcXNRTlVZQ2dhajRGVzVGZUZDUWJMcG8rbU51ZytLTWNUT1VhOUZITExuanB4OTFGNGM5cGtkMmJaUEs4NHA3eTFld2QvKytUYS9uZkl5YjcyN21GSnJBU0VaVEhmVG9WVjVqNHBJOG9CUmJnVXVGbEVUKzlDSFdzTUhlYW9QL0FBQW01MGNEQm1lZkNGSldBYjVMNUJyUmNTcHFsME4vVzZEWW8yaEVjVzBGSExjZHNuSi9PenJJOWoxazl2dy9NeC84OVRyNy9ENk80dG9MZVk1NTVoOXVPaVVZVGpnNzYvT3d4aEp5dlZ1Z3JQNjJGWFZDT0pGR0FhOEpTS3ZHWEZXU2JMUitNMG5rM01BaXNlT3c0Y1dNZDRvZUpTZGplaHJJbEpTVlM4aUpzbkl0OFJTaENqMnRCWnlQSEg5bDluclUvMjU1TGFIK2UyVWwra3MxMkZsR1FLTHRCWHAzN3VOeTg0NGpBdFBQcEEvUGZFcTUvemtmdkpoMEoxYmYzUWNxVVBHaTZoUnBkT3I3QTA2VjhCSUxmS1lrT3FVS3hLTENmWThFbWtvSmlkaVFBWDlKU0o3aTJxRVNNQVdPRnBZUlRFMFlzZDlsNS9CSWJzUFpOZzNmc1g5ajc5Q2tBOXhxcHg0MkdmbzJidU5CY3M2YWNTT2lVKzl6cndsSFZ4KzlwRjRyencyOVUwS2hSemVkMzlLWmVrRm9rWlVJa1NLZ201bmpMbFhURkxTVVJUaVdVOWk4eWRkZ3d2Qm9oYVBWK1ZFRWE0V1NUSkZXYVZZdDRHeFJpaDMxVGo5cUQzNTN1aERPZTFIZC9Qb2N6UHB2VTBQdW1vTmR1elhrNmR2T0plOVB0V2ZQejN4R3RZWVNxMEZwcjR5ang0OVMxeDYrbUdNZjI0bUM1WjJrQXZ0R2xGTlRKSXRyRmFmTjc5VFdHdjZDWXFvb0toSmNPSXpvTStCemhFcmxweFJ1L014R0NzTmdxcFMvYmQxMVgvVUVPSEtwRkFsS1dhejYyMkJlSzlnRFplY01veHBieTFnL05QL29xMVhLMTIxQnR2MWFlT3hhNzlFdFJIeDJTRTdjTjhQenlDS0hjNHB1YllpUC83TDA5UWFNZWVkTUJSZmp6R3A4Z0JkMVRwZFhUVzZLalc2eXVsZjl2OXF2UW5LbWxGTm1sVkxHa2tBK1hGMVNwbDR2anFwS0phSUFGdEZ0R1NMMnp2SDlzVXpFQjBxU0t5b1JVUzNOTTBYb0I0NUJ2YnJ4YkRkUHNuRnR6MEVzU093aHM3T0tnZnZ2aHM3OWUvRkxsKzVoVDEzNnNmNEg1N0JKL3YyNE4xRksyZ3A1Rmk4dEpOSkw4NW14QUc3TUtZbFQreDhFNWpEOXR5SmJkcEx5WGVKemdtRmhiS3lYR2ZxN1BucmROalNSRXVNZ0ZOMGFQSG8xbE1SSFE5cTBjZ0Z6clV5MDMvb1JwdUFOK2o1RGFFWjFySUVhVXR3UVVTSW5XTmczeDRBekZtd0RBS0w4NG9KQTJhOXR3VHZsVjljT0pJSno4L2s5R3Z1NXNQbFpYSkJHakJqeCt2dkxPS1VnM2FsbUF1cE5xS0V6ak9HRzc5NkhQdDllZ0N4ODFnamVJVjZGRlBLaDlTam1IMHZ1STNaODVkUXlBVjhOQlhTaERlU0pDY0RoVzhQYm4xMy9QU0wvOWNWcnZrUmdWRzF1NXRQT0lVUmdoNUlraTZiaEZ2YWVqeEs1aHZxc1FOSnBsY3hIL0RhdklXY2UvTUVmbkRtNGZ6OGdwSGNPV1U2NDUrWlFURVhaTWhTYThTRWdjWGFoSU14Vm9pY1k5UzR1K2pmcTdXWjQxUnFFVGVjZHl3akRoZ01RQ2tmNHRlVEhLYWxURUttZ1FjZE5xdHp4eEdsYTY1OHlPQ3NJU01WMExNU3cwK1lucTJGaUpJa2RSOHM2MEpFMks1M0d6aVB0WVp5cGM3SUF3ZnozVk1QWnRBNU4vSDFXeWZ5cFdQM1lhZit2YWhGY1hNTU8vYnJ5WktWWldxcGoxRk5MR2JSOGk2bXZiMkExK2N0WXRyME9aeDY2QkJHSERDWWg2ZStTZVE4Rzh1WFZ4RmQrS1RJMGpPVEgwU05xdmVLN3dlY2tGVHNHSkd0aDQwcTVBTEx2SVhMK1dCWko4Y05IUVErOFFsaURBdVhkekZrWUYvK2ZObG92akI4TDVhc0xMTzBvMEpvTGJIM2hDMTVqdGwzWjU2YjhXL0tsZm9hWlVJdXNMUVg4MFQxaU8rY2N6UlhmbkU0Ly9PYnYzSDl2Yy9RV3NnbGJtUUQ2S1FrYzZvekFNYzc5Wi93cURkR0JFRkdBTDBBMTZSVnQ2S0VnYUhTVmVXT3lTOXo5bEY3TVdoZ1AxYVdhN1MzRkhqcHpmYzU3NmNQY09hUmU3THZvTzM0M0xpNzZLalVLZVZEeWgwVlJuMTJDSU8yNjhPZGowNkhOSWlzSHE1WGRsUTQrNWg5dU9HODQ3aHQwbFJ1K04zajlHb3Jibko5cGRrRVVSelF4NHFNTkFhTU1RSndWT3FvMDhSNTYvbVdySElPaXpuKzc4UVhXZFpaNGE1TFQ4TmFRMmVsUm8rV1BMK1pOSldiN24rV2kzL3hFTTlPbjBPUGxqekxWblN4dzRCdHVQUGJvL2o3cS9PWThOeE1XbG9LdUxRQ0R3Tkx4OG95SngwOGhEK09PWlh4ejd6QkJUK2ZCSVVjS01UT0p3UFlpQ2Fwc2hsTkFURGNpbUNpT01vQnc5TGp6TmEyRnhIQnE1SVBBeFl1N1dUMDFmZXczeTREZVBvbjU3SkQzNTZzWE5ZRnh2RHRYenpNcng5NkNVTEw4dVZkSExMWFRrei94WC9UVld2dzVSdi9palVHVW1zSkEwdEhSNFhEaHc3aXdYRm44N2QvdnNYb2ErNm1wWkFERWF3MWhJRWw3VmhzVkJMQ3I4azBER3RVTldmRHdjUDNFR0ZNWmlXUytldXREWTVYaXZtUVdlOSt5UE96NW5QQnlRY3dadlNoOVA5RUQvSzVnRklwejhCK1BUbHFuNTBaOTZYaFhIZnVjY3o1WUJuSGYvLzN6RnU0UElrd1hnbXRwYU5jWTg5QjIvTENUNy9LdExjV01PS0hmd1NVSVBWTCtUQ2d2U1hQZmY5NGczcmttZzVrL2VQVGRKZ2lRRSt4L0ZXS0k4ZDlCZUdPdElvMlczc2FTWnAwWldFenNJYk9jcDMrZlpKQzhaeGo5cUc5bEU5cm9BVEVCVXM3dVdYQzg5ejZ3QXZVSTBlcEVPS2NUODZ0MUJtMFhSOWV1ZTIvV2JTaXpQNFgzYzdLY28xaUNwdzFRdXc4a2ZQa0Fvc3h5VVBaV0dXZTVteGVWUzNLVjZSNDBwVlhnMTRtSXBFcWdXeTFhSlJVMUxIemVKOU1KZWQ5RTV4YUl5WnFSTFMxRnRsenAvNzA3ZG1DVjJYZXd1VzhPWDhwdFVxZFFrdWV3QmljVDBDcDFDUDY5MnJseFZ1K1JoQVlobDU0T3g4czdhU2xFT0s4NHB5bjNvaG8wdkpwOWxiTWg4M1NZTDNnSk1qRW9ob3FYQjBBdTZWaFdyWkNCZEFFeFJwRHRSSFJxN1ZJYXlISE80dVcwMVpLVXZyWWVYS2hKUjhHTkdMSHMyKzhCeWxvSmpEa3dvQzI5bUtpclBkWWt3RFpVc2d4NVpwejJLYTl4TkNMYnVQOUQxZlMxcEp2SHRlcnJjait1d3hLeGdBWUVTcjFpS216NXhQRmJzTVdJeUpvNmtSVWhnU2dPNmJ3R2xYUkxiV1lESlJhbXBwUEhIYzJ1dy9zeXlIZitnMnZ6Zm1BOXJZaVVleElVb3prMk5haWJUNFAxYVI3NlZMenQ4YlFpQjNXR0NiLzZJc01HZGlYL1M2OGpUZm1MbXBlSzdTV1NtZUZyNTl4R0plZmZlUWE0NG1kWjlnbHYyVDZuSVVVODJ1WEJwa2tGU1VteFdKSFE1Sy9KRDl1SlZBYXNhTWxIL0w0dFY5bXYxMEdzS0pjNDRWYnZzb2VPMjlMUjJlVk1MQnI1QmwrTlRJOCt6cWJpczRuVS9Fdmw1M0dRVU0reWRIZnU1TnBzOTl2Z3RLMEFxLzBhaTFTcVVXY2ZNV2ZPUEVIditmTWErK2hVby9JaGNGNlM0TlZ5S3hoVHIwTVNNKzAvN3RWUUltY3czblAvWmVmeWY2REJ6RDhlM2N5OU1MYldkeFJZZXJQdnNZZU8vZW5vNnRHYU8xNms3Q01NRWVoV3Fseng3Yyt4eWtIN2NZWlA3Nkh4MTk2ay9iVzRucW5Sa2VseHNRWFp2SElzek41Nk1VM2lXSzNHVnBrOFYzYURHaExhajdkQXFTcGlFa0t1eWoyM1B2OTB6bHE3MDl4ektXLzQrbnBjMWpXV2VHejMvZ1ZpMVowOGVJdFgyUHdEdHZRVVZrM09FMEhLVkF1MS9qcEJTUDU0dEY3Yys3TkU3ajcwVmRvNzlGQ25QcWpkWW0xaHZaU2dWeExnZlpTWWFPaCtpT2FrR0xSYW9ETmdYVHRTNldnZUorMEsrLzl3ZW1NT25nSVoxODduc2VtenFhOXJVUXBIN0pnYVNlZi9lYXZXZDVWNVlucnZzeDIyN1RUV1UxcW53eWNESlNNOGZ1Zk13L25rbEVITWVhT0tmenZReS9SMWlQaFhqWVVYVlRCcVUrbjRQb0IzSmdZa01vcXBMb0hpaXBVcXczdS9QWW9Qbi93RU02NmRqeC9mbXc2UFhxMjRGVHhxdlJvS2JCZ2FTZEhqZmt0dlZxTFBIZnplV3pYcDQydWFxTUpqb2drdWNxS011ZWZNb3pyemoyV0crOTdsdXZ2ZW9xMnRsSVdmVEZHbXBhd0pVMjV0U1diT2RKbFFEdFdCZjNOQkNXbEFDcVZPais3Y0NSbkg3VVhYN2orUHU2YThqS0ZVcDZPY3AxS3JVR2xGckdpWENNWFdHYS90NWdETC9rVi9YcTI4T3hONTdGZG4zYkt0WWpBSmwzSmpwVmx6amgyWDI2NzZDUis4OGcwdm5QN0l4UkxlY3ExQmwzcHRTcTFpSEt0MFdUenRoNDBTVVVKMmhrQXk0RWRtOXB1UXViYmRJNUFwVnJubGd0R2N0RXB3L2pPcnlmeng3KzlURXRia1cxN3QvR0puaTFwVXBjMFhtcU5tSGNYcmVEMU9SOXd3TVcvNUtXZm5jL1RONTdML2hmZFRsZTFRYU1STVh6L1hianIwdE9ZOE54TXp2L1pnK1FMSWNWY3lPNEQrMktOU1VGSTdqOS9TUWVMVjVTYlZNUVdRckk2dnNzRGtIZEE5d0h4S2dRYlE2VkpNQU9WcmlyWG4zOGlGMzl1R04vOXpkKzQ4ZTVuYUdrcklBaDNYWG9hKysweWdLNWFBNU5Pa1NoMkhQU05YMU50Ukx3K2R4SDdYM3c3MDM3K2RSNjk1aHdPdk9SWEhMamJEangyN1pkNGJzWjdqTDc2YnZLNWdFcTF6aG1INzhHZDMvazg1Vm9Ea1NTRXR4WHovUExoZjNMK3pSTW81c010QmtaRVJWVmNzcXBVM2dsQVo2Q01RbERaQkl0SldoUlFyVWVNT2VzSXZudmFJWXk1WXdvL3Vlc3AydHBMUk01akRRenMyNVBmUC9ZS1YvM3BTWXI1a0NQMzJvbGJ2bjRDdWREU2lCdzkyNHE4L3RZSERCOXpKMC9mZUM3L3VPbi84T2tCZlhoOTNpS08rLzd2RVJGeWdhVVNlM3EwRkFBNC92dC9vRnhyNEx6bm5zdEcwNmU5dU1XQVpKSW10NW5MbWhtZ3pFa0xBYk1wTGpocnhoKzE5NmU0OXR4anVmbis1N2orejAvUjJsWktraWhOdlpYQWdxV2R2RDE3UGhSeWJMOU5HOTQzaVNFaTUyanZVZUtaVitjeWZNeWRQSDdkbDVyVmRLVVdwZlZQRWxXOEppbi9xM00vb0xOY0E2K3NLTmN5amJZV05JQms5T0NjUUdHNmdDZnBZMiswRFBXcTVNS0F0eFlzNDlTci9zTEVGMmRUYk1rbnFmeEhqczBGQmdvNWJDRWtud3ZXV3NzYnhZNjJ0aUpQVEgrYmZTKzRqUlhsS2d1V2RkSmF6QkduMVhRbWtoYURVWnlFWXJzVi9Nb3FTSnJvV3BKRjV5OGIzMkFHTUM4N1JqZmllMVdWd0NaRTlIMVAvNHZBbWlZWnRmWU5nVFJjcit2QkpxMFZUMnVwd0t0ekZ6Si9jUWV0aFJ4dXRkNFJySWFuVDY2VldlYlc0a2RFcFRsY1lKN1hlSWJKRmFVQnZKQXRDMDFXMDY1YnNyekZHcUdRQytqWlhpSklGLzkwbDhaSmdJVzJVbzVTUGtRazRYSzNibjZ5WVVtYXJtVFo0UE5oRURhQ2xFTjlYSld6SlYwQm1TWlNhMmlhaGVoYUk4YlZvald2TEpBcjVnazN5N3dGVlU5blZ3M2NSMEFJTGFWQ2JqUFY2NTRrTkRmWm1qMkF4NzBxUWZyaFlVR1dBYjAxYmRKOVZJeEpRTmxqeDM0Y3Z1ZU94QzVsM0lESWVTYTlPSnZGSzhxazVQcUdKYzBuclRHY2RmUStiTk5lU3FkYjBoSjUvWjBQZWVxMWVRUmJJUXh2ZENqU0RCWVdaYm1xUGtLU3R4Z0RMQUtkck1wWklqalZkQ0hyYWxaampjRlY2cHh4eEI2TUdYMG85U2h1Rm9HWkk3eDl3Z3UwYkVMclFoQmk3K25kVnVKMzMvazhnVFZOZWlFTUxLL09YY2hCMy9oVk00SjlYS0paNzBUVXFSSUFqNGlZUllBSm9PbDUvcEoySXlXaGtOWkJ6bmdsSDFwZW5mc0JoMzc3RGdKcmFDdmxtZnZiYjZiVFNEZTlUay9ybm5vVTg0WHJKekJwNnB0VWFnMXVQdjlFUmh5d1M4TE4ySTFmWmtza1d6dWRoR2xGNGM5cGdTSEdZOXpvM1dheVEybkZSSkFYUUMzSjJueFpWeDh2WS93N0szVldsdXQwVnVyZHIxZDBGZjNZVmE3aHUycEVLYXYvY2J0ZVRkWURDNGhQc2wxZUdFVGxvVnVsamhkeEpxQ0xlMmJ1WnY5ZDZRbHdTK0o0MDdQVzF4QnY5bTRNZ2JWYmJPNkJOUmhySVdYMS94T1NycTNTcG8rQkcrZFE0aUxOMlNCWWdWRktxT0txS3lPcXM1Zi9CWmltaUFYMTJUclFkVjFZc3d3My9YbEwxTW40MzQvZFRKcjMweFFTdkNaSjNiVHFTNTNqNDZVSzNqaU4yekNPa0RnTUtQWU1iWEhYbmdDWHBpMkRiQk1KNjhxN201RnJrNExReGcvYXBMMHFzc20zM05EMU5GMWNwRmxISCtYUzR2NXRCSDJNMVNERWFSNVRuM2daZ1hObzdKeUlNU0xtVWVCZUJTTVFhN3F2WTJQeWNUN3M5VjI3Ty9mVVZRdC80cVFyd0wwWTh5akdHbHprMEpqNnhNdVNmcTAwUEJKNXZFdm9RSzljaW1vRmtSRHdrb0ZNc3VBbmloMnVFZE5veE5RYU1YSHNteUU2cTVpY1Z4cVJnMGFNYjhRMG9uaFZvMzAxaWIybkhpWEgwSWhweEs3WnVGOGRnVGoyMU5KN3hwR2pFYnZtRXZ0RWtySWtjbzVhd3hGSE1iV0dJM0orZFFneksvR0loS2gyZWMvMzFIdlVPY1FLMGtpWTNnQ2dPbmtzeFpGak1hWlpUTTVSNVh6UTMyZjdCa2pUTW11TTdEOTRlNTYvOVh3Q216akxYR2dKclUySGwyUkcxZ2pmL1B4bk9YelBuUWlzb1grdjFxUmxLcXZtZ3dnSnIzTEpLU3o0cjZPSW5XTy9UdzlnL3BLVlNabVJhcFBkNDhrYnpzVjdKZmFlWWJ0dXovM1B6a2dYdVNUb2hkWXlvRTg3ejkxOEhpSlFDQVA2OW14Smg1N3N1ZlBxTlZ2MkQvSlZZNWdMV0JWMWlxVTYrUXBndFpYaDRXNUhKeTNWV05VWU1jQ3JRRitRQTBVa0Jtd0RVcUpJWmRHS01vczd5aXhhM3NYek0vL05BOC9QWXVIS0NrRmdjRjZwMUNPV3JLeXd0S1BDNG80eWN4Y3U1N0dYNXpENW4yOFR1U1FrT3dYblBVczZLaXhlVVdacFI1Vi92YnVJOGMvTVlQcmJIeVFabFFoZHRRYmVLOHM3cTN5NHNzemlGV1ZlbTdlUWU1OStnOWtMbGhKYVM1M2tXcEZ6ZkxpaXpKS09DZ3VYZGZMa2ErOHdaZHJiV20xRTJWYlVXRlVENEZZajNJQ0lpV0x2YldpaDRZamZmaXA3YnFza1AySmNzbzVSVlZ3c0drMWVTZkdrOXNjUWhxTkV4a2hZcmtWSzBoK1dKanNOMkVKSVliWEdWclZhVDJxZ3pHK245VU8rbEUrV2RKQlFHTFZ5RFZhTGJta1ZTYkdZU3o4bUd5L2lXaU9kREZrMkxCQmFXZ281ZkZySFZlb1Iyb2pYUEU1RWM4VThnVFdpcXBFSW9TcFRyanZpazhkZC9PaTc1QU9UVkVvb3RVbFhyRFl4UHlMRms4ZGxVOUtvVis5RVd3SXh6NGpJUHFvYVdXUEMxZkt2NXZsWk56R3JzdTE2OHBHczlab3B2YTdqRkpyK283bGJaVjNIcFJhWE5leXRNUjl0RzJwNno5VkJtWWJYUXoxVWpaRmtpd0JRbTNqRkdpZXV0VUMvMnFFVVd3VUVMMGFzUmNyQWlhcjZqTUFncnhxaFpOWGRPa2svVldVZGZyYjVXd2JlSmgrWEtMZnVBMWVUaktkWmUyd2FpVWlvcW05NTFSUEVTRlVTTitJQWFwMXJYM3R0bnVESnNjU2tjU2pkQ1lheTBLa2VvdkJ5Q2txVUpFbnBsbzAwRkdXS2JJaWJXWU9BMm9Uak5zYnpySFdja3NHVEphY1JLcUdxVG5QS0lTS3lXTko5a1VLNi8rL0pzV3RkZDUwRVNqVHBjb3hMeWtpVHZITEFHbVNSY3h5bTZLUE52VXVvazdUYVhGK0cvSitVekY0a2VTV0FTeU5xcUtLUHh1aGhCajRVc0FndVhjMjB6djJRc0lIdHhaV0h4dUlsb3lURklWaXhVdjV4dnRleHdNM3A2aXVyeWNaUm10dlAxNlorUDM3UnJDWk1kamNyRW9sZ05WbmNmUFBGSzRZZWE2Q0NwTk1uZWFUcjNVRUxtNUJkNTA4ZWgwMTJhNkJnYWpSOGlSemEzSkF1dlVsZVl2SC9hVU82UW1xK05EZWtxMUZsMVlaMHFWTFFvaEUwM1pBdTFCOWN0NlZrc2xIR3c4MStFdm4wNFloSkdrOFdLeGFzSWpOVTVVK0lmZ0psYnhFeGlEUzM5Q2NSdGJtOGE2c0NsTzF4a0ZXZENTOGlLc2xMTWdUNGd5S25Da3cxb2xZMGdDeENHV2hzWkpjK2JNNFRYZjJsRjdaSUthNVpyN2hBQkljZUxYQ2RDdnVtK2FwTHA1WEpyRVpUUmJyTm1tZFcyQ3c5MElRM1FnQ2J1cmhwd1BjQ2VDeUM1S1VYcnRVRlFlZkg4OUtMMVNWMzBsV0VFb0VLSGlNV0VZZjY2ai9mcExqZjROSEF0MEFQekNhU2drUHhDUUcycWo1T1c2THJYZHFXMUhySk1hc2lyeXJnRURHU3ZrOG14ZWxGa0p1KytPQ0w5L3p1NUFNSXdEaFFJMTRSSmZJaGpZay8zQ3c5dS9mMFJsMURNVzRRNFltTnBlaXhqY1VWbCt0Yll0dThzS0NtSXdWT0E0NFQ2TmZNVkJOeG9ENTFqTkw4b2RrOGFvNU1VeUxKcHgzQ1ZkTSttVUlmQXBNVjdoM1FJNXkwb0NPaStreVI0aUZWV3pXNElGWkNnV3JZdlJmcmJOSGNMNDRjaHdwb2JEREdnOFZlc2QxU04rNzlQZ2lDOTc2M2lCeUxjQ1RJd2FDRGdTQmIvYkNHZkRTWFRvMGtzUWdGaUVuZVdmVXN5dDlWZFlxeHNrd1YvakM4SjE5NFlvWFZ5RGpYQ0RFRmg1R1k2cVNOKzVMMXlWWnhpcmtUcmliTTF5aHR1NERPK1FNUjFBcWkzbnR2MG1aY1BWWWJXbllGaG9Mc0NycmhsM2NKblNpemdOZUFXY0MweUxsWitUQndtaTVrTkZaTXdoZmgybmRkU0hsT1g2Sktqc2JrTFg5NTEvOERsbmVweE93dUJ0a0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxEUW84YzNabklIZHBaSFJvUFNJeU5Ea2lJR2hsYVdkb2REMGlNVEl3SWlCMmFXVjNRbTk0UFNJd0lEQWdNalE1SURFeU1DSWdabWxzYkQwaWJtOXVaU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JajROQ2p4bklHOXdZV05wZEhrOUlqQXVOU0krRFFvOGNHRjBhQ0JrUFNKTk1UYzNMakEyTkNBeU9TNDRPVEl4UXpFNE5DNDFNRFFnTWpVdU16STBPQ0F4T1RJdU9EZzRJREl5TGpRM05URWdNakF4TGpJNU15QXlNUzQyTmprNVF6SXdPQzQwTlRjZ01qQXVPVFk0TXlBeU1UVXVPVEF4SURJeExqYzBOVGNnTWpJeUxqazVJREl6TGpnNU1UZE1Nakl6TGpJek5DQXlNUzR3TkRRMVF6SXhOUzQ0TmpRZ01UZ3VPVEUyTkNBeU1EZ3VNell4SURFNExqRTNOVGtnTWpBeExqQXlPQ0F4T0M0NE56Y3hRekU1TWk0eUlERTVMamN6SURFNE15NDBNVE1nTWpJdU56RXpNU0F4TnpVdU5qQTFJREkzTGpVd01EZERNVFkzTGpjNU5pQXpNaTR5T0RneklERTJNUzR4TnlBek9DNDNPRFl4SURFMU5pNDBNVFlnTkRZdU1qZ3pOa014TlRVdU1EYzBJRFE0TGpNNU16SWdNVFV6TGpnNU5TQTFNQzQxTnpJM0lERTFNaTQ0TmpRZ05USXVPREEyT1VNeE5EQXVOamd4SURVMkxqUXlNalFnTVRJNUxqZzBJRFl6TGpFek1qa2dNVEU1TGprZ05qa3VPVFE0TlVNeE1UY3VORGM1SURjeExqWXdNVGtnTVRFMUxqQXpPQ0EzTXk0ek1qTTFJREV4TWk0Mk9EWWdOelF1T1RneU9VTXhNRFF1TURjZ09ERXVNRE13TlNBNU5TNHhOekUzSURnM0xqSTNOemNnT0RVdU5qRXpPQ0E1TVM0NU1UVTFRemMwTGpnek1ESWdPVGN1TVRRM09TQTJNaTQzTkRreklERXdNQzR6T0NBMU1DNDJOek00SURFd01TNHlOak5ETXpndU1qWXdNeUF4TURJdU1UY3pJREkyTGpJeE9ERWdNVEF3TGpjd09DQXhOQzQ0T0RBeUlEazJMamc1TmpsRE1UQXVNak14TnlBNU5TNHpNak0ySURVdU56RTBPVFVnT1RNdU16VTFPU0F4TGpRek56TTJJRGt4TGpBME5EbE1NUzR4TnpreU9DQTVOQzR3TlRnM1F6VXVNek14TVRFZ09UWXVNakExSURrdU5UYzVOekVnT1RndU1ETTNPU0F4TXk0NU9UZ3hJRGs1TGpVeU1UVkRNakF1T1RBek55QXhNREV1T0RRNElESTRMakEzTnpVZ01UQXpMak15T1NBek5TNDBNRGd6SURFd015NDVOVGRETkRBdU5EZzVPQ0F4TURRdU16a3lJRFExTGpZMk1qWWdNVEEwTGpReE5pQTFNQzQ0T0RNNElERXdOQzR3TXpkRE5qTXVNamszTWlBeE1ETXVNVEk0SURjMUxqY3pOVGtnT1RrdU56azVOeUE0Tmk0NE5EQTFJRGswTGpReE1qbERPVFl1TlRnNE5DQTRPUzQyTnprMUlERXdOUzQxT1NBNE15NHpOekV4SURFeE5DNHlPREVnTnpjdU1qWkRNVEUyTGpZek15QTNOUzQyTURBM0lERXhPUzR3TnpNZ056TXVPRGt5T1NBeE1qRXVORGM1SURjeUxqSTFNakpETVRNd0xqWXpNU0EyTlM0NU9EUTNJREUwTUM0MU1UVWdOVGt1T0RJeE9TQXhOVEV1TkRVMklEVTJMakU0TXpsRE1UUTRMakUxTWlBMk5DNDRPREk0SURFME55NHlOeUEzTkM0d05ERWdNVFE1TGpBMk9DQTRNaTQwTXpVMVF6RTFNQzR6T1RVZ09EZ3VOall5T1NBeE5UTXVNekEySURrMExqVXlNalFnTVRVM0xqUTNOeUE1T1M0ek9EUTFRekUyTVM0NElERXdOQzQwTWpnZ01UWTNMakU1T0NBeE1EZ3VNRE00SURFM015NHhNREVnTVRBNUxqZ3hOa014TnprdU1UUWdNVEV4TGpZME9TQXhPRFV1T0RZeElERXhNUzR6T1RrZ01Ua3lMakF6T0NBeE1Ea3VNVFU0UXpFNU9DNHpOellnTVRBMkxqZzBOaUF5TURNdU5UQTVJREV3TWk0MU9Ua2dNakEyTGpVeE5pQTVOeTR5TURRelF6SXdPUzQ0TXpnZ09URXVNalE0T1NBeU1UQXVOVGt4SURnekxqa3lOalFnTWpBNExqWXpNU0EzTmk0MU9UVTBRekl3Tmk0M056Y2dOamt1TmpZMU15QXlNREl1TlRjMElEWXpMakl4T1RVZ01UazNMakE0TXlBMU9DNDVNREU1UXpFNU1TNDNOak1nTlRRdU56STBPQ0F4T0RVdU1qazFJRFV5TGpBeE5qVWdNVGMzTGpnNU9DQTFNQzQ0TmpVelF6RTNNUzR5TURRZ05Ea3VPREUyTlNBeE5qTXVPVFEySURVd0xqRXpNak1nTVRVMkxqa3hNU0ExTVM0M05qZ3pRekUxTmk0M05UUWdOVEV1T0RFd09DQXhOVFl1TlRrNElEVXhMamd6T1RRZ01UVTJMalEwSURVeExqZzRNVGxETVRVM0xqRTBOaUExTUM0MU1ERXpJREUxTnk0NU16TWdORGt1TVRReE55QXhOVGd1TnpjMElEUTNMamd4TkRkRE1UWXpMak13TkNBME1DNDJORGMzSURFMk9TNDJNalFnTXpRdU5EVTVOU0F4TnpjdU1EWTBJREk1TGpnNU1qRmFUVEUxTnk0MU16TWdOVFF1TkRZMU9FTXhOalF1TWpJMklEVXlMamt4TWpRZ01UY3hMakV4T0NBMU1pNDJNakV5SURFM055NDBOallnTlRNdU5qRXlOVU14T0RRdU16azFJRFUwTGpZNU5UVWdNVGt3TGpReE55QTFOeTR5TVRFNElERTVOUzR6TlRjZ05qRXVNRGt3TlVNeU1EQXVNemMySURZMUxqQXpNaUF5TURRdU1qTTBJRGN3TGprME5EVWdNakExTGpreU55QTNOeTR6TURFelF6SXdOeTQyT1RVZ09ETXVPVE13TXlBeU1EY3VNRE16SURrd0xqVXhPVEVnTWpBMExqQTNOQ0E1TlM0NE16TTVRekU1T0M0Mk1pQXhNRFV1TmpNMklERTROUzR6TlRZZ01URXdMallnTVRjekxqZzVJREV3Tnk0eE5ESkRNVFk0TGpVd05DQXhNRFV1TlRFNUlERTJNeTQxTlRnZ01UQXlMaklnTVRVNUxqVTNOeUE1Tnk0MU5qTTNRekUxTlM0M01USWdPVE11TURRNU5pQXhOVE11TURFMUlEZzNMall5T0RJZ01UVXhMamMzTlNBNE1TNDROVFU0UXpFME9TNDVORFVnTnpNdU16UTJOeUF4TlRFdU1EZzFJRFl6TGprME5Ea2dNVFUwTGpnM05DQTFOUzR4TkRjMVF6RTFOUzQzTmpNZ05UUXVPRGczT0NBeE5UWXVOalE1SURVMExqWTJPVGtnTVRVM0xqVXpNeUExTkM0ME5qVTRXaUlnWm1sc2JEMGlkMmhwZEdVaUx6NE5Danh3WVhSb0lHUTlJazB5TkRrZ016QXVNekEzVERJeU1pNDBOREVnTmk0d05qRTFUREl5TWk0d05UUWdNVFl1TnpNMk0wd3lOREF1TmpRNElESTJMamczTTB3eU1qRXVPVEV5SURJd0xqWTNOelJNTWpJeExqa3hNU0F5TUM0Mk9EYzJUREl5TVM0NU1URWdNakF1TmpjMU5Fd3lNVE11TnpFeUlESXpMak0zT1V3eU1qRXVOamsxSURJMkxqWTJNVFZNTWpJeExqUXlNU0F6TkM0eU5EUTVUREkwT1NBek1DNHpNRGRhSWlCbWFXeHNQU0ozYUdsMFpTSXZQZzBLUEM5blBnMEtQQzl6ZG1jK0RRbz1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zdXBwb3J0LXRlYW0tNmIyMWUwYzlmZTAxNzAwOTExZGU0ZGNiOWZiZjdlZjYucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3N1cHBvcnQtMzUwNDBjMTJkNTdjYzdhZDQ3OTFkYmUwMWE3ZDY5OTcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3Rlc3RpbW9uaWFsLTY5ZDJlNjBlOTZjZWNkN2ZkMzRiYWViMTYyMzc0NTMwLnBuZ1wiOyIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEhlYWRpbmcgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IEJzUGx1c0NpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0IHsgQmFzZUFjY29yZGlvbiB9IGZyb20gJy4vYmFzZS1hY2NvcmRpb24nO1xyXG5pbXBvcnQge1xyXG4gIEFjY29yZGlvbkJ1dHRvbixcclxuICBBY2NvcmRpb25JdGVtLFxyXG4gIEFjY29yZGlvbkNvbnRlbnRzLFxyXG4gIHNpbmdsZSxcclxuICBwcmV2ZW50Q2xvc2UsXHJcbiAgY29tYmluZVJlZHVjZXJzLFxyXG59IGZyb20gJy4vc2hhcmVkJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFjY29yZGlvbih7IGl0ZW1zLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCYXNlQWNjb3JkaW9uXHJcbiAgICAgIHN0YXRlUmVkdWNlcj17Y29tYmluZVJlZHVjZXJzKHNpbmdsZSwgcHJldmVudENsb3NlKX1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICB7KHsgb3BlbkluZGV4ZXMsIGhhbmRsZUl0ZW1DbGljayB9KSA9PiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgIHtpdGVtcy5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgIDxBY2NvcmRpb25JdGVtXHJcbiAgICAgICAgICAgICAga2V5PXtpdGVtLnRpdGxlfVxyXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuYWNjb3JkaW9ufVxyXG4gICAgICAgICAgICAgIGlzT3Blbj17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17b3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpID8gJ2lzLW9wZW4nIDogJ2lzLWNsb3NlZCd9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8QWNjb3JkaW9uQnV0dG9uIG9uQ2xpY2s9eygpID0+IGhhbmRsZUl0ZW1DbGljayhpbmRleCl9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRpbmcgYXM9XCJoNFwiIHN4PXtzdHlsZXMudGl0bGV9PlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgICAgIHshb3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpICYmIChcclxuICAgICAgICAgICAgICAgICAgPEJzUGx1c0NpcmNsZVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCIyOHB4XCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj17cmdiYSgnIzBGMjEzNycsIDAuMyl9XHJcbiAgICAgICAgICAgICAgICAgICAgc3g9e3N0eWxlcy5hcnJvd31cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkNvbnRlbnRzXHJcbiAgICAgICAgICAgICAgICBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuY29udGVudH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50c31cclxuICAgICAgICAgICAgICA8L0FjY29yZGlvbkNvbnRlbnRzPlxyXG4gICAgICAgICAgICA8L0FjY29yZGlvbkl0ZW0+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvQmFzZUFjY29yZGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYWNjb3JkaW9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjZGOEZCJyxcclxuICAgIGJvcmRlclJhZGl1czogMTAsXHJcbiAgICBwOiBbJzE1cHgnLCAnMjBweCAzMHB4JywgJzMwcHggNDVweCcsICcyMHB4IDI1cHgnLCAnMjBweCAzNXB4J10sXHJcbiAgICAnJi5pcy1vcGVuJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDlweCAzMHB4IHJnYmEoNjksIDg4LCAxNTcsIDAuMDgpJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2hlYWRpbmcnXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjUsIDEuOF0sXHJcbiAgfSxcclxuICBhcnJvdzoge1xyXG4gICAgd2lkdGg6IFsyMCwgbnVsbCwgbnVsbCwgMjVdLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY2xhc3MgQmFzZUFjY29yZGlvbiBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcclxuICAgIHN0YXRlUmVkdWNlcjogKHN0YXRlLCBjaGFuZ2VzKSA9PiBjaGFuZ2VzLFxyXG4gICAgb25TdGF0ZUNoYW5nZTogKCkgPT4ge30sXHJcbiAgfTtcclxuICBzdGF0ZSA9IHsgb3BlbkluZGV4ZXM6IFswXSB9O1xyXG4gIGdldFN0YXRlKHN0YXRlID0gdGhpcy5zdGF0ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgb3BlbkluZGV4ZXM6XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vcGVuSW5kZXhlcyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICA/IHN0YXRlLm9wZW5JbmRleGVzXHJcbiAgICAgICAgICA6IHRoaXMucHJvcHMub3BlbkluZGV4ZXMsXHJcbiAgICB9O1xyXG4gIH1cclxuICBpbnRlcm5hbFNldFN0YXRlKGNoYW5nZXMsIGNhbGxiYWNrID0gKCkgPT4ge30pIHtcclxuICAgIGxldCBhbGxDaGFuZ2VzO1xyXG4gICAgdGhpcy5zZXRTdGF0ZShcclxuICAgICAgKHN0YXRlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYWN0dWFsU3RhdGUgPSB0aGlzLmdldFN0YXRlKHN0YXRlKTtcclxuICAgICAgICBjb25zdCBjaGFuZ2VzT2JqZWN0ID1cclxuICAgICAgICAgIHR5cGVvZiBjaGFuZ2VzID09PSAnZnVuY3Rpb24nID8gY2hhbmdlcyhhY3R1YWxTdGF0ZSkgOiBjaGFuZ2VzO1xyXG4gICAgICAgIGFsbENoYW5nZXMgPSB0aGlzLnByb3BzLnN0YXRlUmVkdWNlcihhY3R1YWxTdGF0ZSwgY2hhbmdlc09iamVjdCk7XHJcbiAgICAgICAgcmV0dXJuIGFsbENoYW5nZXM7XHJcbiAgICAgIH0sXHJcbiAgICAgICgpID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU3RhdGVDaGFuZ2UoYWxsQ2hhbmdlcyk7XHJcbiAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgfVxyXG4gICAgKTtcclxuICB9XHJcbiAgaGFuZGxlSXRlbUNsaWNrID0gKGluZGV4KSA9PiB7XHJcbiAgICB0aGlzLmludGVybmFsU2V0U3RhdGUoKHN0YXRlKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNsb3NpbmcgPSBzdGF0ZS5vcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogY2xvc2luZyA/ICdjbG9zaW5nJyA6ICdvcGVuaW5nJyxcclxuICAgICAgICBvcGVuSW5kZXhlczogY2xvc2luZ1xyXG4gICAgICAgICAgPyBzdGF0ZS5vcGVuSW5kZXhlcy5maWx0ZXIoKGkpID0+IGkgIT09IGluZGV4KVxyXG4gICAgICAgICAgOiBbLi4uc3RhdGUub3BlbkluZGV4ZXMsIGluZGV4XSxcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcclxuICB9O1xyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiB0aGlzLnByb3BzLmNoaWxkcmVuKHtcclxuICAgICAgb3BlbkluZGV4ZXM6IHRoaXMuZ2V0U3RhdGUoKS5vcGVuSW5kZXhlcyxcclxuICAgICAgaGFuZGxlSXRlbUNsaWNrOiB0aGlzLmhhbmRsZUl0ZW1DbGljayxcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHsgQmFzZUFjY29yZGlvbiB9O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tICdmcmFtZXItbW90aW9uJztcclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25CdXR0b24gPSAoeyBjaGlsZHJlbiwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPGRpdiBzeD17c3R5bGVzLmJ1dHRvblRvZ2dsZX0gey4uLnJlc3R9PlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGFjY29yZGlvbkl0ZW06IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgICcrIC5hY2NvcmRpb24taXRlbSc6IHtcclxuICAgICAgbXQ6IFszXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b25Ub2dnbGU6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJ10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGFjY29yZGlvbkNvbnRlbnQ6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGxpbmVIZWlnaHQ6IDIsXHJcbiAgICBtdDogWzRdLFxyXG4gIH0sXHJcbn07XHJcblxyXG5jb25zdCB2YXJpYW50cyA9IHtcclxuICBvcGVuOiB7XHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgIG1hcmdpblRvcDogMTYsXHJcbiAgfSxcclxuICBjbG9zZWQ6IHsgaGVpZ2h0OiAwLCBtYXJnaW5Ub3A6IDAgfSxcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBY2NvcmRpb25Db250ZW50cyh7IGlzT3BlbiwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8bW90aW9uLmRpdlxyXG4gICAgICBpbml0aWFsPVwiY2xvc2VkXCJcclxuICAgICAgYW5pbWF0ZT17aXNPcGVuID8gJ29wZW4nIDogJ2Nsb3NlZCd9XHJcbiAgICAgIHZhcmlhbnRzPXt2YXJpYW50c31cclxuICAgICAgc3g9e3N0eWxlcy5hY2NvcmRpb25Db250ZW50fVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICAvPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY2NvcmRpb25JdGVtID0gKHsgaXNPcGVuLCBjaGlsZHJlbiwgY2xhc3NOYW1lLCAuLi5yZXN0IH0pID0+IChcclxuICA8ZGl2XHJcbiAgICBjbGFzc05hbWU9e2BhY2NvcmRpb24taXRlbSAke2NsYXNzTmFtZX1gfVxyXG4gICAgc3g9e3N0eWxlcy5hY2NvcmRpb25JdGVtfVxyXG4gICAgey4uLnJlc3R9XHJcbiAgPlxyXG4gICAge2NoaWxkcmVufVxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGNvbnN0IHByZXZlbnRDbG9zZSA9IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICBjaGFuZ2VzLnR5cGUgPT09ICdjbG9zaW5nJyAmJiBzdGF0ZS5vcGVuSW5kZXhlcy5sZW5ndGggPCAyXHJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IHN0YXRlLm9wZW5JbmRleGVzIH1cclxuICAgIDogY2hhbmdlcztcclxuXHJcbmV4cG9ydCBjb25zdCBzaW5nbGUgPSAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgY2hhbmdlcy50eXBlID09PSAnb3BlbmluZydcclxuICAgID8geyAuLi5jaGFuZ2VzLCBvcGVuSW5kZXhlczogY2hhbmdlcy5vcGVuSW5kZXhlcy5zbGljZSgtMSkgfVxyXG4gICAgOiBjaGFuZ2VzO1xyXG5cclxuZXhwb3J0IGNvbnN0IGNvbWJpbmVSZWR1Y2VycyA9ICguLi5yZWR1Y2VycykgPT4gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIHJlZHVjZXJzLnJlZHVjZSgoYWNjLCByZWR1Y2VyKSA9PiByZWR1Y2VyKHN0YXRlLCBhY2MpLCBjaGFuZ2VzKTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBGbGV4LCBJbWFnZSwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IHsgTGluaywgTGVhcm5Nb3JlIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IHsgc2x1Z2lmeSB9IGZyb20gJ3NlcnZpY2VzL3NsdWdpZnknO1xyXG5cclxuY29uc3QgQmxvZ1Bvc3QgPSAoeyBwb3N0IH0pID0+IHtcclxuICAvLyBjb25zdCBzbHVnID0gc2x1Z2lmeShwb3N0Lm1uX3RpdHVsbylcclxuICAvLyBjb25zdCBzbHVnID0gXCJ0ZXN0ZVwiXHJcbiAgY29uc3Qgc2x1ZyA9IHNsdWdpZnkocG9zdC5tbl90aXR1bG8pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwiYXJ0aWNsZVwiIHN4PXtzdHlsZXMucG9zdH0+XHJcbiAgICAgIDxGbGV4IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy50aHVtYm5haWx9PlxyXG4gICAgICAgIDxJbWFnZSBzcmM9e2BodHRwczovL3d3dy5iYWxhbWludXQuY29tLmJyL2ltZy9ub3RpY2lhcy8ke3Bvc3QubW5faW1hZ2VtMX1gfSBsb2FkaW5nPVwibGF6eVwiIGFsdD17cG9zdD8ubW5fdGl0bGV9IC8+XHJcbiAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgIDxCb3ggY2xhc3NOYW1lPVwiY29udGVudFwiPlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIDxMaW5rIHBhdGg9e2Bub3RpY2lhcy8ke3NsdWd9YH0+e3Bvc3Q/Lm1uX3RpdHVsb308L0xpbms+XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuZXhjZXJwdH0+XHJcbiAgICAgICAgICB7cG9zdD8ubW5fZGVzY3JpY2FvfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8TGVhcm5Nb3JlIHBhdGg9e2Bub3RpY2lhcy8ke3NsdWd9YH0gbGFiZWw9XCJMZWlhIE1haXNcIiBzeD17c3R5bGVzLmxlYXJuTW9yZX0gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZ1Bvc3Q7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgcG9zdDoge1xyXG4gICAgbXg6IFtudWxsLCBudWxsLCBudWxsLCAzLCAndW5zZXQnXSxcclxuICB9LFxyXG4gIHRodW1ibmFpbDoge1xyXG4gICAgbWI6IFs0XSxcclxuICAgIGltZzoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgbnVsbCwgMywgJzE3cHgnLCAzXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDEuNjhdLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjJweCcsXHJcbiAgICBhOiB7XHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZXhjZXJwdDoge1xyXG4gICAgY29sb3I6ICd0ZXh0JyxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjg4LFxyXG4gICAgbXQ6IFsyXSxcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIHRleHRPdmVyZmxvdzogJ2VsbGlwc2lzJyxcclxuICAgIGRpc3BsYXk6ICctd2Via2l0LWJveCcsXHJcbiAgICBXZWJraXRMaW5lQ2xhbXA6ICcyJyxcclxuICAgIFdlYmtpdEJveE9yaWVudDogJ3ZlcnRpY2FsJyBcclxuICB9LFxyXG4gIGxlYXJuTW9yZToge1xyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCAnMTVweCddLFxyXG4gICAgbXQ6IDIsXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgRmFxSXRlbSA9ICh7IGZhcSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwiYXJ0aWNsZVwiIHN4PXtzdHlsZXM/LmZhcX0gey4uLnByb3BzfT5cclxuICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPntmYXE/LnF1ZXN9PC9IZWFkaW5nPlxyXG4gICAgICA8VGV4dCBhcz1cInBcIj57ZmFxPy5hbnN9PC9UZXh0PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZhcUl0ZW07XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZmFxOiB7XHJcbiAgICBib3JkZXJCb3R0b206ICcycHggc29saWQgIzBGMjEzNycsXHJcbiAgICBtYXJnaW5Cb3R0b206IDgsXHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIDYsIDhdLFxyXG4gICAgd2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCAnY2FsYyg1MCUgLSA2MHB4KScsICdjYWxjKDUwJSAtIDgwcHgpJ10sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMiwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjgsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgICAgbWI6IFsyLCBudWxsLCBudWxsLCAzXSxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDIsXHJcbiAgICAgIG1iOiA0LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEltYWdlLCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgRmVhdHVyZSA9ICh7IGRhdGEsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmZlYXR1cmV9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxCb3ggYXM9XCJmaWd1cmVcIj5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtkYXRhPy5pY29ufSBhbHQ9e2RhdGE/LnRpdGxlfSAvPlxyXG4gICAgICA8L0JveD5cclxuICAgICAgPEJveD5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCI+e2RhdGE/LnRpdGxlfTwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIj57ZGF0YT8uZGVzY3JpcHRpb259PC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGZWF0dXJlO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZlYXR1cmU6IHtcclxuICAgIGRpc3BsYXk6IFsnZmxleCddLFxyXG4gICAgZmlndXJlOiB7XHJcbiAgICAgIG1pbldpZHRoOiBbNzBdLFxyXG4gICAgICBtcjogWyczMHB4J10sXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgICAgbGluZUhlaWdodDogMS4yOCxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgbWFyZ2luQm90dG9tOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBmb250U2l6ZTogMTYsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuODgsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBtdDogWzNdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IElvTWRDaGVja21hcmtDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IExlYXJuTW9yZSwgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICdzZXJ2aWNlcy9zbHVnaWZ5JztcclxuXHJcbmNvbnN0IFByaWNlVGFibGUgPSAoeyBpdGVtcywgaXNSZWNvbW1lbmRlZCwgdGl0bGUsIHN1YnRpdGxlLCBsaW5rIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBzeD17c3R5bGVzLnByaWNlVGFibGV9XHJcbiAgICAgIGNsYXNzTmFtZT17YCR7aXNSZWNvbW1lbmRlZCA/ICdyZWNvbW1lbmRlZCcgOiAnJ31gfVxyXG4gICAgPlxyXG4gICAgICB7Lyoge3ByaWNlLmlzUmVjb21tZW5kZWQgJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIHN4PXtzdHlsZXMucmVjb21MYWJlbH0+XHJcbiAgICAgICAgICBIaWdobHkgUmVjb21tZW5kZWRcclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICl9ICovfVxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGVyfSBjbGFzc05hbWU9XCJwcmljZUhlYWRlclwiPlxyXG4gICAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5zdWJ0aXRsZX0+XHJcbiAgICAgICAgICB7c3VidGl0bGV9XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgIHsvKiA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnByaWNlQW1vdW50fT5cclxuICAgICAgICAgICR7cHJpY2U/LnByaWNlfVxyXG4gICAgICAgICAgL21vXHJcbiAgICAgICAgPC9UZXh0PiAqL31cclxuICAgICAgICB7LyogPEJ1dHRvbiBzeD17c3R5bGVzLmJ1dHRvbn0gdmFyaWFudD1cInRleHRcIj5cclxuICAgICAgICAgIHtwcmljZS5idXR0b25UZXh0fVxyXG4gICAgICAgIDwvQnV0dG9uPiAqL31cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3ggYXM9XCJ1bFwiIHN4PXtzdHlsZXMubGlzdH0+XHJcbiAgICAgICAge2l0ZW1zPy5tYXAoKGl0ZW0sIGkpID0+ICggICAgICAgICAgXHJcbiAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHtpc1JlY29tbWVuZGVkID8gKFxyXG4gICAgICAgICAgICAgIDxMaW5rIHBhdGg9e2BvYnJpZ2Fjb2VzLyR7c2x1Z2lmeShpdGVtLk1uX1RpdHVsbyl9YH0gc3g9e3N0eWxlcy5saW5rfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8SW9NZENoZWNrbWFya0NpcmNsZSBzeD17eyBjb2xvcjogJ3NlY29uZGFyeScgfX0gLz5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPntpdGVtLk1uX1RpdHVsb308L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPElvTWRDaGVja21hcmtDaXJjbGUgc3g9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5vYnJfbm9tZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC8+XHJcbiAgICAgICAgICAgICl9XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkpfVxyXG4gICAgICAgIHtsaW5rID8gKFxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8TGVhcm5Nb3JlIHBhdGg9e2xpbmt9IGxhYmVsPVwiU2FpYmEgTWFpc1wiIC8+XHJcbiAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICkgOiAoJycpfVxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljZVRhYmxlO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHByaWNlVGFibGU6IHtcclxuICAgIGFsaWduU2VsZjogJ2Jhc2VsaW5lJyxcclxuICAgIGJhY2tncm91bmQ6ICd3aGl0ZScsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nOiBbXHJcbiAgICAgICcyMHB4IDE1cHgnLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnMzBweCAyNXB4JyxcclxuICAgICAgJzI1cHggMzBweCA0MHB4IDMwcHgnLFxyXG4gICAgICAnNDVweCA2MHB4IDcwcHggNDVweCcsXHJcbiAgICBdLFxyXG4gICAgYm94U2hhZG93OiBbJzBweCAxNXB4IDUwcHggcmdiYSg5MSwgMTMyLCAxOTMsIDAuMSknLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgJyYucmVjb21tZW5kZWQnOiB7XHJcbiAgICAgIGJveFNoYWRvdzogW251bGwsIG51bGwsIG51bGwsICcwcHggMTVweCA1MHB4IHJnYmEoOTEsIDEzMiwgMTkzLCAwLjEpJ10sXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHJlY29tTGFiZWw6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMCwgMV0sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjI5LFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzUyQUNGRicsXHJcbiAgICBib3JkZXJSYWRpdXM6ICc4cHggOHB4IDBweCAwcHgnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgdG9wOiAnLTM1cHgnLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICBtaW5IZWlnaHQ6IFszMCwgMzVdLFxyXG4gICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMSwgMiwgM10sXHJcbiAgICBsaW5lSGVpZ2h0OiAxLjMxLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJy0wLjU1cHgnLFxyXG4gIH0sXHJcbiAgc3VidGl0bGU6IHtcclxuICAgIGNvbG9yOiByZ2JhKCcjMzQzRDQ4JywgMC42NSksXHJcbiAgICBmb250U2l6ZTogWzAsIG51bGwsIDEsIDJdLFxyXG4gICAgbGluZUhlaWdodDogMS42MixcclxuICAgIG10OiAnOHB4JyxcclxuICB9LFxyXG4gIHByaWNlQW1vdW50OiB7XHJcbiAgICBjb2xvcjogJyMwRjIxMzcnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFsxLCAyLCBudWxsLCA0LCAnMjZweCddLFxyXG4gICAgbGluZUhlaWdodDogMS4zLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgbXQ6IFsnMTJweCcsIG51bGwsIG51bGwsICcyNnB4J10sXHJcbiAgfSxcclxuICBsaXN0OiB7XHJcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBtdDogWzYsIG51bGwsIG51bGwsIG51bGwsIDEwXSxcclxuICAgIG1heFdpZHRoOiAzNDAsXHJcbiAgICBsaToge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIDEsIG51bGwsIDJdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjYyLFxyXG4gICAgICAnKyBsaSAnOiB7XHJcbiAgICAgICAgbXQ6IFszLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgICAgfSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgaGVpZ2h0OiBbMTcsIG51bGwsIG51bGwsIG51bGwsIDIzXSxcclxuICAgICAgICB3aWR0aDogWzE3LCBudWxsLCBudWxsLCBudWxsLCAyM10sXHJcbiAgICAgIH0sXHJcbiAgICAgICdzcGFuOmZpcnN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgbXI6ICcxM3B4JyxcclxuICAgICAgICBtdDogJzVweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy51bmF2YWlsYWJsZSc6IHtcclxuICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgYm9yZGVyOiBgMS41cHggc29saWQgJHtyZ2JhKCcjNUIyQjlEJywgMC4xNSl9YCxcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBtaW5IZWlnaHQ6IFs0MCwgbnVsbCwgbnVsbCwgbnVsbCwgNTBdLFxyXG4gICAgcGFkZGluZzogWycwIDI0cHgnLCBudWxsLCAnMCAzMnB4J10sXHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgbXQ6IFszLCBudWxsLCBudWxsLCA2XSxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGluazoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJ1xyXG4gIH1cclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgU2VydmljZSA9ICh7IGNvdGFjYW8gfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuc2VydmljZX0+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPntjb3RhY2FvPy5jb3RkX25vbWV9PC9UZXh0PlxyXG4gICAgICA8VGV4dCBhcz1cInBcIj5Db21wcmE6IDxUZXh0IGFzPVwic3BhblwiIHN4PXsgc3R5bGVzLnByaWNlIH0+UiQge2NvdGFjYW8/LmNvdGRfY29tcHJhfTwvVGV4dD48L1RleHQ+XHJcbiAgICAgIDxUZXh0IGFzPVwicFwiPlZlbmRhOiA8VGV4dCBhcz1cInNwYW5cIiBzeD17IHN0eWxlcy5wcmljZSB9PnsgY290YWNhbz8uY290ZF92ZW5kYSAhPT0gMCA/IChgUiQgJHtjb3RhY2FvPy5jb3RkX3ZlbmRhfWApIDogKCctJyl9PC9UZXh0PjwvVGV4dD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZXJ2aWNlO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlcnZpY2U6IHtcclxuICAgIGJvcmRlcjogKHRoZW1lKSA9PiBgMXB4IHNvbGlkICR7dGhlbWUuY29sb3JzLmJvcmRlckNvbG9yfWAsXHJcbiAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1pbkhlaWdodDogWzEwNywgbnVsbCwgbnVsbCwgMTMwXSxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDExcHggMzBweCByZ2JhKDUxLCA4MywgMTQ1LCAwLjA3KScsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxN3B4J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNzcsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsICcxNXB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiAyLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCB0ZWxlZm9uZSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3RlbGVmb25lLnBuZydcclxuaW1wb3J0IGVtYWlsIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZW1haWwucG5nJ1xyXG5pbXBvcnQgZW5kZXJlY28gZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9lbmRlcmVjby5wbmcnXHJcbmltcG9ydCBjaWRhZGUgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9jaWRhZGUucG5nJ1xyXG5pbXBvcnQgZmFjZWJvb2sgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9mYWNlYm9vay5wbmcnXHJcbmltcG9ydCBpbnN0YWdyYW0gZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9pbnN0YWdyYW0ucG5nJ1xyXG5pbXBvcnQgbGlua2VkaW4gZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9saW5rZWRpbi5wbmcnXHJcbmltcG9ydCB3aGF0c2FwcCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3doYXRzYXBwLnBuZydcclxuXHJcbmV4cG9ydCBjb25zdCBtZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICB0aXRsZTogJ0NvbnRhdG8nLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICd0ZWw6ODg5OTEyNjYyMCcsXHJcbiAgICAgICAgaWNvbjogdGVsZWZvbmUsXHJcbiAgICAgICAgbGFiZWw6ICcoODgpIDk5MTItNjYyMCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnbWFpbHRvOnRpQHNlcnZjb24xLmNvbScsXHJcbiAgICAgICAgaWNvbjogZW1haWwsXHJcbiAgICAgICAgbGFiZWw6ICd0aUBzZXJ2Y29uMS5jb20nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vZy5wYWdlL3NlcnZjb25qaWpvY2E/c2hhcmUnLFxyXG4gICAgICAgIGljb246IGVuZGVyZWNvLFxyXG4gICAgICAgIGxhYmVsOiAnUnVhIDE3IGRlIE91dHVicm8sIDEzNDAnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vZy5wYWdlL3NlcnZjb25qaWpvY2E/c2hhcmUnLFxyXG4gICAgICAgIGljb246IGNpZGFkZSxcclxuICAgICAgICBsYWJlbDogJ0ppam9jYSBkZSBKZXJpY29hY29hcmEgLSBDRScsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICB0aXRsZTogJ1JlZGVzIFNvY2lhaXMnLFxyXG4gICAgaXRlbXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VydmNvbmppam9jYScsXHJcbiAgICAgICAgaWNvbjogZmFjZWJvb2ssXHJcbiAgICAgICAgbGFiZWw6ICdGYWNlYm9vaycsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zZXJ2Y29uamlqb2NhLycsXHJcbiAgICAgICAgaWNvbjogaW5zdGFncmFtLFxyXG4gICAgICAgIGxhYmVsOiAnSW5zdGFncmFtJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL3dhLm1lLzU1ODg5OTEyNjYyMCcsXHJcbiAgICAgICAgaWNvbjogd2hhdHNhcHAsXHJcbiAgICAgICAgbGFiZWw6ICdXaGF0c2FwcCcsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZm9vdGVyTmF2ID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJyMhJyxcclxuICAgIGxhYmVsOiAnQWR2ZXJ0aXNlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ1N1cHBvcnRzJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ01hcmtldGluZycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdGQVEnLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCwgQ29udGFpbmVyLCBJbWFnZSB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuaW1wb3J0IExvZ28gZnJvbSAnYXNzZXRzL2ltYWdlcy9sb2dvLnBuZyc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgQ2FsbFRvQWN0aW9uIGZyb20gJ3NlY3Rpb25zL2NhbGwtdG8tYWN0aW9uJztcclxuaW1wb3J0IFdpZGdldCBmcm9tICcuL3dpZGdldCc7XHJcbmltcG9ydCB7IG1lbnVJdGVtcyB9IGZyb20gJy4vZm9vdGVyLmRhdGEnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGb290ZXIoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5cIiBhbmltYXRlT3V0PVwiZmFkZU91dFwiPlxyXG4gICAgICAgIDxDYWxsVG9BY3Rpb24gLz5cclxuICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgIDxCb3ggYXM9XCJmb290ZXJcIiBzeD17c3R5bGVzLmZvb3Rlcn0+XHJcbiAgICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXJUb3BJbm5lcn0+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5hYm91dH0+XHJcbiAgICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmxvZ299PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9eyBMb2dvIH0gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJNb2RlbG8gQ29udGFiaWxpZGFkZVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgICAgey8qIDxCb3ggc3g9e3N0eWxlcy50ZXJtc30+XHJcbiAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiIyFcIj5UZXJtcyBvZiB1c2U8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIj58PC9UZXh0PlxyXG4gICAgICAgICAgICAgICAgPExpbmsgcGF0aD1cIiMhXCI+UHJpdmFjeTwvTGluaz5cclxuICAgICAgICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5jb3B5cmlnaHR9PlxyXG4gICAgICAgICAgICAgICAgJmNvcHk7IENvcHlyaWdodCB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBwb3IgPFRleHQgYXM9XCJzcGFuXCIgY29sb3I9XCJzZWNvbmRhcnlcIj48YSBocmVmPVwiaHR0cHM6Ly90YnJ3ZWIuY29tLmJyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VEJyV2ViPC9hPjwvVGV4dD5cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7bWVudUl0ZW1zLm1hcCgoeyBpZCwgdGl0bGUsIGl0ZW1zIH0pID0+IChcclxuICAgICAgICAgICAgICA8V2lkZ2V0IGtleT17aWR9IHRpdGxlPXt0aXRsZX0gaXRlbXM9e2l0ZW1zfSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3Rlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIDEwXSxcclxuICAgIHBiOiBbOCwgbnVsbCwgbnVsbCwgMTVdLFxyXG4gIH0sXHJcbiAgZm9vdGVyVG9wSW5uZXI6IHtcclxuICAgIGdhcDogWzMwLCBudWxsLCA1MCwgJzIwcHggNTBweCcsIDE3LCA1MF0sXHJcbiAgICBkaXNwbGF5OiBbJ2dyaWQnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgzLCAxZnIpJyxcclxuICAgICAgJ3JlcGVhdCgzLCAxZnIpJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBmb290ZXJJbm5lcjoge1xyXG4gICAgYm9yZGVyVG9wOiBgMXB4IHNvbGlkICNEOUUwRTdgLFxyXG4gICAgZGlzcGxheTogWydibG9jaycsIG51bGwsICdmbGV4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwYWRkaW5nOiAnMzVweCAwIDQwcHgnLFxyXG4gIH0sXHJcbiAgYWJvdXQ6IHtcclxuICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCBudWxsLCAnZ3JpZCcsICdibG9jayddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogJzIwNXB4IDFmciAxZnInLFxyXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInXSxcclxuICAgIGdyaWRSb3c6IFsnMy80JywgbnVsbCwgJzEvMScsICczLzQnLCAndW5zZXQnXSxcclxuICAgIGdyaWRDb2x1bW46IFsnMS8zJywgbnVsbCwgJzEvMicsICcxLzUnLCAndW5zZXQnXSxcclxuICB9LFxyXG4gIGxvZ286IHtcclxuICAgIGRpc3BsYXk6IFsnZmxleCddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICBncmlkQ29sdW1uOiAnMS8yJyxcclxuICB9LFxyXG4gIHRlcm1zOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGdyaWRDb2x1bW46ICczLzQnLFxyXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnZmxleC1zdGFydCcsICdjZW50ZXInXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsncm93JywgbnVsbCwgbnVsbCwgbnVsbCwgJ2NvbHVtbicsICdyb3cnXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbXHJcbiAgICAgICdjZW50ZXInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnZmxleC1zdGFydCcsXHJcbiAgICAgICdjZW50ZXInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnZmxleC1zdGFydCcsXHJcbiAgICBdLFxyXG4gICAgbXQ6IFs0LCBudWxsLCBudWxsLCAwLCA0XSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICBzcGFuOiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnaW5saW5lLWZsZXgnLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZScsICdpbmxpbmUtZmxleCddLFxyXG4gICAgICBtOiBbJzAgMTBweCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvcHlyaWdodDoge1xyXG4gICAgY29sb3I6IHJnYmEoJyMwRjIxMzcnLCAwLjYpLFxyXG4gICAgZm9udFNpemU6IFsnMTRweCddLFxyXG4gICAgbXQ6IFszLCBudWxsLCBudWxsLCAtMzEsIDNdLFxyXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsICd1bnNldCddLFxyXG4gICAgZ3JpZENvbHVtbjogJzIvMycsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgJ2xlZnQnLCAnY2VudGVyJywgJ2xlZnQnXSxcclxuICAgIGE6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgJyY6dmlzaXRlZCc6IHtcclxuICAgICAgICBjb2xvcjogJ2luaGVyaXQnXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmNvbnN0IFdpZGdldCA9ICh7IHRpdGxlLCBpdGVtcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXJXaWRnZXR9PlxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCI+e3RpdGxlfTwvSGVhZGluZz5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIHtpdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwsIGljb24gfSwgaSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgIHtpY29uICYmIDxJbWFnZSBzcmM9e2ljb259IGFsdD17bGFiZWx9IC8+fVxyXG4gICAgICAgICAgICA8TGluayBwYXRoPXtwYXRofSBocmVmPXtwYXRoLnRvU3RyaW5nKCl9IHRhcmdldD1cIl9ibGFua1wiIGtleT17aX0gbGFiZWw9e2xhYmVsfSB2YXJpYW50PVwiZm9vdGVyXCIgLz5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgV2lkZ2V0O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZvb3RlcldpZGdldDoge1xyXG4gICAgaDM6IHtcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNjgsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICB1bDoge1xyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgbWFyZ2luOiAnMjhweCAwIDAnLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBsaToge1xyXG4gICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICBpbWc6IHtcclxuICAgICAgICAgIG1yOiAnMTVweCcsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgICAgYToge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgICAgY29sb3I6IHJnYmEoJyMwMjA3M0UnLCAwLjgpLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDIuNSxcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBCYXIgPSAoeyBpc1N0aWNreSB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUZXh0XHJcbiAgICAgIGFzPVwic3BhblwiXHJcbiAgICAgIGNsYXNzTmFtZT1cImJhclwiXHJcbiAgICAgIHN4PXt7IGJhY2tncm91bmRDb2xvcjogaXNTdGlja3kgPyAndGV4dCcgOiAnd2hpdGUnIH19XHJcbiAgICAvPlxyXG4gICk7XHJcbn07XHJcblxyXG5jb25zdCBIYW1idXJnZXJNZW51ID0gKHsgaXNPcGVuLCBpc1N0aWNreSwgdG9nZ2xlTW9iaWxlTWVudSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8YnV0dG9uXHJcbiAgICAgIHN4PXtzdHlsZXMuYnV0dG9ufVxyXG4gICAgICBvbkNsaWNrPXt0b2dnbGVNb2JpbGVNZW51fVxyXG4gICAgICBjbGFzc05hbWU9e2lzT3BlbiA/ICdvcGVuJyA6ICcnfVxyXG4gICAgICB7Li4ucHJvcHN9XHJcbiAgICA+XHJcbiAgICAgIHtbMSwgMiwgMywgNF0ubWFwKChiYXIsIGkpID0+IChcclxuICAgICAgICA8QmFyIGtleT17aX0gaXNTdGlja3k9e2lzU3RpY2t5fSAvPlxyXG4gICAgICApKX1cclxuICAgICAgPFRleHQgYXM9XCJzcGFuXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICBNZW51XHJcbiAgICAgIDwvVGV4dD5cclxuICAgIDwvYnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXJNZW51O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGJ1dHRvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgYm9yZGVyOiAwLFxyXG4gICAgcDogMCxcclxuICAgIHdpZHRoOiAyMCxcclxuICAgIGhlaWdodDogMTQsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHRyYW5zZm9ybTogJ3JvdGF0ZSgwZGVnKScsXHJcbiAgICB0cmFuc2l0aW9uOiAnLjVzIGVhc2UtaW4tb3V0JyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgb3V0bGluZTogMCxcclxuICAgIG1sOiBbNCwgbnVsbCwgNl0sXHJcbiAgICAnLmJhcic6IHtcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGhlaWdodDogJzJweCcsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOSxcclxuICAgICAgb3BhY2l0eTogMSxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcclxuICAgICAgdHJhbnNpdGlvbjogJy4yNXMgZWFzZS1pbi1vdXQnLFxyXG4gICAgICAnOm50aC1vZi10eXBlKDEpJzoge1xyXG4gICAgICAgIHRvcDogMCxcclxuICAgICAgfSxcclxuICAgICAgJzpudGgtb2YtdHlwZSgyKSw6bnRoLW9mLXR5cGUoMyknOiB7XHJcbiAgICAgICAgdG9wOiAnNnB4JyxcclxuICAgICAgfSxcclxuICAgICAgJzpudGgtb2YtdHlwZSg0KSc6IHtcclxuICAgICAgICB0b3A6ICcxMnB4JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJi5vcGVuJzoge1xyXG4gICAgICAnLmJhcic6IHtcclxuICAgICAgICAnOm50aC1vZi10eXBlKDEpJzoge1xyXG4gICAgICAgICAgdG9wOiAnNnB4JyxcclxuICAgICAgICAgIHdpZHRoOiAnMCUnLFxyXG4gICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOm50aC1vZi10eXBlKDIpJzoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKDQ1ZGVnKScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOm50aC1vZi10eXBlKDMpJzoge1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiAncm90YXRlKC00NWRlZyknLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJzpudGgtb2YtdHlwZSg0KSc6IHtcclxuICAgICAgICAgIHRvcDogJzZweCcsXHJcbiAgICAgICAgICB3aWR0aDogJzAlJyxcclxuICAgICAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBwYXRoOiAnaG9tZScsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3F1ZW0tc29tb3MnLFxyXG4gICAgbGFiZWw6ICdRdWVtIHNvbW9zJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdzZXJ2aWNvcycsXHJcbiAgICBsYWJlbDogJ1NlcnZpw6dvcycsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnaW5mb3JtYWNvZXMnLFxyXG4gICAgbGFiZWw6ICdBdHVhbGl6ZS1zZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnY29udGF0bycsXHJcbiAgICBsYWJlbDogJ0NvbnRhdG8nLFxyXG4gIH0sXHJcbl07XHJcbiIsImV4cG9ydCBkZWZhdWx0IFtcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsYWJlbDogJ0hvbWUnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGFiZWw6ICdRdWVtIHNvbW9zJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnU2VydmnDp29zJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnQXR1YWxpemUtc2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGFiZWw6ICdDb250YXRvJyxcclxuICB9LFxyXG5dO1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEZsZXgsIENvbnRhaW5lciwgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBTdGlja3kgZnJvbSAncmVhY3Qtc3RpY2t5bm9kZSc7XHJcbmltcG9ydCBMb2dvIGZyb20gJ2NvbXBvbmVudHMvbG9nbyc7XHJcbmltcG9ydCBUb3BCYXIgZnJvbSAnY29tcG9uZW50cy90b3BiYXInO1xyXG5pbXBvcnQgTG9ja0ljb24gZnJvbSAnY29tcG9uZW50cy9pY29ucy9sb2NrJztcclxuaW1wb3J0IEhhbWJ1cmdlck1lbnUgZnJvbSAnY29tcG9uZW50cy9oYW1idXJnZXInO1xyXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4vbmF2YmFyJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcclxuICBjb25zdCBbc3RhdGUsIHNldFN0YXRlXSA9IHVzZVN0YXRlKHtcclxuICAgIGlzTW9iaWxlTWVudTogZmFsc2UsXHJcbiAgICBpc1N0aWNreTogZmFsc2UsXHJcbiAgfSk7XHJcbiAgY29uc3QgaGFuZGxlU3RhdGVDaGFuZ2UgPSAoc3RhdHVzKSA9PiB7XHJcbiAgICBzdGF0dXMuc3RhdHVzID09PSBTdGlja3kuU1RBVFVTX0ZJWEVEXHJcbiAgICAgID8gc2V0U3RhdGUoeyAuLi5zdGF0ZSwgaXNTdGlja3k6IHRydWUgfSlcclxuICAgICAgOiBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBpc1N0aWNreTogZmFsc2UgfSk7XHJcbiAgfTtcclxuICBjb25zdCB0b2dnbGVNb2JpbGVNZW51ID0gKCkgPT4ge1xyXG4gICAgc2V0U3RhdGUoKHByZXYpID0+IHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5wcmV2LFxyXG4gICAgICAgIGlzTW9iaWxlTWVudTogIXByZXYuaXNNb2JpbGVNZW51LFxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVDbG9zZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSh7XHJcbiAgICAgIC4uLnN0YXRlLFxyXG4gICAgICBpc01vYmlsZU1lbnU6IGZhbHNlLFxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxGcmFnbWVudD5cclxuICAgICAgPFRvcEJhciAvPlxyXG4gICAgICA8U3RpY2t5XHJcbiAgICAgICAgZW5hYmxlZD17dHJ1ZX1cclxuICAgICAgICB0b3A9ezB9XHJcbiAgICAgICAgYWN0aXZlQ2xhc3M9XCJpcy1zdGlja3lcIlxyXG4gICAgICAgIGlubmVyWj17MTAwfVxyXG4gICAgICAgIG9uU3RhdGVDaGFuZ2U9e2hhbmRsZVN0YXRlQ2hhbmdlfVxyXG4gICAgICA+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgYXM9XCJoZWFkZXJcIlxyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkZXJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0YXRlLmlzU3RpY2t5ID8gJ2lzLXN0aWNreScgOiAnJ31cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgICAgPExvZ28gc3g9e3N0eWxlcy5sb2dvfSBpc1N0aWNreT17c3RhdGUuaXNTdGlja3l9IC8+XHJcbiAgICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuYnV0dG9uR3JvdXB9PlxyXG4gICAgICAgICAgICAgIDxOYXZiYXJcclxuICAgICAgICAgICAgICAgIGlzU3RpY2t5PXtzdGF0ZS5pc1N0aWNreX1cclxuICAgICAgICAgICAgICAgIGlzTW9iaWxlPXtzdGF0ZS5pc01vYmlsZU1lbnV9XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbG9zZU1lbnU9e2hhbmRsZUNsb3NlTWVudX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICAgICAgICA8SGFtYnVyZ2VyTWVudVxyXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuaGFtYnVyZ2VyfVxyXG4gICAgICAgICAgICAgIGlzU3RpY2t5PXtzdGF0ZS5pc1N0aWNreX1cclxuICAgICAgICAgICAgICBpc09wZW49e3N0YXRlLmlzTW9iaWxlTWVudX1cclxuICAgICAgICAgICAgICB0b2dnbGVNb2JpbGVNZW51PXt0b2dnbGVNb2JpbGVNZW51fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvU3RpY2t5PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHB5OiA0LFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcclxuICAgICcmLmlzLXN0aWNreSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwIDZweCAxM3B4IHJnYmEoMzgsNzgsMTE4LDAuMSknLFxyXG4gICAgICBwYWRkaW5nVG9wOiAnMTVweCcsXHJcbiAgICAgIHBhZGRpbmdCb3R0b206ICcxNXB4JyxcclxuICAgIH0sXHJcbiAgICAnJi5pcy1tb2JpbGUtbWVudSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCA2LCBudWxsLCAxMl0sXHJcbiAgfSxcclxuICBidXR0b25Hcm91cDoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXHJcbiAgICBidXR0b246IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxvZ2luOiB7XHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnZmxleCddLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBwOiAwLFxyXG4gICAgbXI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCA1XSxcclxuICAgIHN2Zzoge1xyXG4gICAgICBtcjogMixcclxuICAgIH0sXHJcbiAgfSxcclxuICBqb2luQ29tbXVuaXR5OiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICBtaW5IZWlnaHQ6IFszMCwgbnVsbCwgbnVsbCwgNDBdLFxyXG4gICAgcDogWycwIDEycHgnLCBudWxsLCBudWxsLCAnMCAxNHB4J10sXHJcbiAgICBmb250U2l6ZTogWycxMHB4JywgbnVsbCwgbnVsbCwgMV0sXHJcbiAgfSxcclxuICBoYW1idXJnZXI6IHtcclxuICAgIGRpc3BsYXk6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgTmF2TGluaywgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBtZW51SXRlbXMgZnJvbSAnLi9oZWFkZXIuZGF0YSc7XHJcbmltcG9ydCBtZW51SXRlbXNQYWdlcyBmcm9tICcuL2hlYWRlci5kYXRhLnBhZ2VzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmNvbnN0IE5hdmJhciA9ICh7IGlzU3RpY2t5LCBpc01vYmlsZSwgaGFuZGxlQ2xvc2VNZW51IH0pID0+IHtcclxuICBjb25zdCB7IGFzUGF0aCB9ID0gdXNlUm91dGVyKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgYXM9XCJuYXZcIlxyXG4gICAgICBzeD17c3R5bGVzLm5hdmJhcn1cclxuICAgICAgY2xhc3NOYW1lPXtgbmF2YmFyJHtpc01vYmlsZSA/ICcgaXMtbW9iaWxlJyA6ICcnfSR7XHJcbiAgICAgICAgaXNTdGlja3kgPyAnIGlzLXN0aWNreScgOiAnJ1xyXG4gICAgICB9YH1cclxuICAgID5cclxuICAgICAge2FzUGF0aCA9PT0gJy8nID8gKFxyXG4gICAgICAgIG1lbnVJdGVtcy5tYXAoKHsgcGF0aCwgbGFiZWwgfSwgaSkgPT4gKFxyXG4gICAgICAgICAgPE5hdkxpbmsga2V5PXtpfSBwYXRoPXtwYXRofSBsYWJlbD17bGFiZWx9IG9uQ2xpY2s9e2hhbmRsZUNsb3NlTWVudX0gLz5cclxuICAgICAgICApKVxyXG4gICAgICApIDogKFxyXG4gICAgICAgIG1lbnVJdGVtc1BhZ2VzLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICA8TGluayBrZXk9e2l9IHBhdGg9e3BhdGh9IGxhYmVsPXtsYWJlbH0gb25DbGljaz17aGFuZGxlQ2xvc2VNZW51fSAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIG5hdmJhcjoge1xyXG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2NlbnRlciddLFxyXG4gICAgZmxleEdyb3c6IFtudWxsLCBudWxsLCBudWxsLCAxXSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnKyBhJzoge1xyXG4gICAgICAgIG1sOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KSc6IHtcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgYm94U2hhZG93OiAnMHB4IDExcHggMzBweCByZ2JhKDUxLCA4MywgMTQ1LCAwLjA3KScsXHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHRvcDogNzAsXHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICAgIHZpc2liaWxpdHk6ICdoaWRkZW4nLFxyXG4gICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMCknLFxyXG4gICAgICB0cmFuc2Zvcm1PcmlnaW46ICd0b3AgbGVmdCAwJyxcclxuICAgICAgdHJhbnNpdGlvbjogJzAuM3MgZWFzZSAwcycsXHJcbiAgICAgICcmLmlzLXN0aWNreSc6IHtcclxuICAgICAgICBib3JkZXJUb3A6ICcxcHggc29saWQgI2YzZjNmMycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmLmlzLW1vYmlsZSc6IHtcclxuICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgIHZpc2liaWxpdHk6ICd2aXNpYmxlJyxcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZVkoMSknLFxyXG4gICAgICB9LFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICAgIGxpbmVIZWlnaHQ6IDEsXHJcbiAgICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICAgIHBhZGRpbmc6IDMsXHJcbiAgICAgICAgJysgYSc6IHtcclxuICAgICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZjNmM2YzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmLmlzLXN0aWNreSc6IHtcclxuICAgICAgdG9wOiA2MCxcclxuICAgICAgYToge1xyXG4gICAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuYWN0aXZlJzoge1xyXG4gICAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiBMb2NrKHsgZmlsbCwgd2lkdGgsIGhlaWdodCwgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c3ZnXHJcbiAgICAgIHdpZHRoPXt3aWR0aCA/PyAxNn1cclxuICAgICAgaGVpZ2h0PXtoZWlnaHQgPz8gMjB9XHJcbiAgICAgIHZpZXdCb3g9XCIwIDAgMTYgMjBcIlxyXG4gICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTE1LjE1NiAxNi44OTN2LTYuODExYTIuMjM3IDIuMjM3IDAgMDAtMi4yMzItMi4yMzNoLS41NjJWNC43MDdBNC43MTMgNC43MTMgMCAwMDcuNjU0IDBhNC43MTIgNC43MTIgMCAwMC00LjcwMyA0LjcwN3YuNTQzYzAgLjM3LjMuNjY3LjY2Ny42NjcuMzY3IDAgLjY3Mi0uMy42NzItLjY2N3YtLjU0M0EzLjM3MiAzLjM3MiAwIDAxNy42NTggMS4zNGEzLjM3MiAzLjM3MiAwIDAxMy4zNjkgMy4zNjhWNy44NUgyLjM4OWMtMS4yMyAwLTIuMjMzIDEtMi4yMzMgMi4yMzN2Ni44MTFhMi4yMzcgMi4yMzcgMCAwMDIuMjMzIDIuMjMzaDEwLjUzOGEyLjIzNiAyLjIzNiAwIDAwMi4yMy0yLjIzM3ptLTEzLjY1NyAwdi02LjgxMWMwLS40OTIuNDAyLS44OTQuODk0LS44OTRoMTAuNTM1Yy40OTEgMCAuODkzLjQwMi44OTMuODk0djYuODExYS44OTYuODk2IDAgMDEtLjg5My44OTRIMi4zODhhLjg5NS44OTUgMCAwMS0uODg5LS44OTR6XCJcclxuICAgICAgICBmaWxsPXtmaWxsID8/ICcjZmZmJ31cclxuICAgICAgLz5cclxuICAgICAgPHBhdGhcclxuICAgICAgICBkPVwiTTcuNjU3IDExLjk5YS42Ny42NyAwIDAwLS42NzIuNjY4djEuNzNjMCAuMzcuMy42NjcuNjcyLjY2Ny4zNyAwIC42NjctLjMuNjY3LS42Njh2LTEuNzI5YS42NjcuNjY3IDAgMDAtLjY2Ny0uNjY3elwiXHJcbiAgICAgICAgZmlsbD17ZmlsbCA/PyAnI2ZmZid9XHJcbiAgICAgIC8+XHJcbiAgICA8L3N2Zz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2NrO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgTG9nbyA9ICh7IHdoaXRlLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmcgdmlld0JveD1cIjAgMCAxODUuOTIgMzYuNjJcIiB3aWR0aD17MTg1LjkyfSBoZWlnaHQ9ezM2LjYyfSB7Li4ucHJvcHN9PlxyXG4gICAgICA8ZGVmcz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19iXCJcclxuICAgICAgICAgIHgxPXsxNi4wOH1cclxuICAgICAgICAgIHkxPXstMTYuNTJ9XHJcbiAgICAgICAgICB4Mj17MTAuMjZ9XHJcbiAgICAgICAgICB5Mj17MjAuNDR9XHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzAwOTZkOVwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiMwMGMxOThcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fY1wiXHJcbiAgICAgICAgICB4MT17OC45NX1cclxuICAgICAgICAgIHkxPXsxMy40OH1cclxuICAgICAgICAgIHgyPXsxOC4yOH1cclxuICAgICAgICAgIHkyPXszMi4wMn1cclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjMDAyZGQ5XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzAwYjJhYlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19hXCJcclxuICAgICAgICAgIHgxPXsyMy4zM31cclxuICAgICAgICAgIHkxPXstMy4zOX1cclxuICAgICAgICAgIHgyPXs1LjY2fVxyXG4gICAgICAgICAgeTI9ezM3LjY1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiMzNDgyYzBcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjQ1fSBzdG9wQ29sb3I9XCIjOTZiZWRlXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44M30gc3RvcENvbG9yPVwiI2UxZWRmNlwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IHN0b3BDb2xvcj1cIiNmZmZcIiAvPlxyXG4gICAgICAgIDwvbGluZWFyR3JhZGllbnQ+XHJcbiAgICAgICAgPGxpbmVhckdyYWRpZW50XHJcbiAgICAgICAgICBpZD1cInByZWZpeF9fZFwiXHJcbiAgICAgICAgICB4MT17MjEuNjR9XHJcbiAgICAgICAgICB5MT17MS40Mn1cclxuICAgICAgICAgIHgyPXs2LjYzfVxyXG4gICAgICAgICAgeTI9ezMwLjQ0fVxyXG4gICAgICAgICAgeGxpbmtIcmVmPVwiI3ByZWZpeF9fYVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19lXCJcclxuICAgICAgICAgIHgxPXsyNS4xNX1cclxuICAgICAgICAgIHkxPXszLjI0fVxyXG4gICAgICAgICAgeDI9ezEwLjE0fVxyXG4gICAgICAgICAgeTI9ezMyLjI1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiM1NjlmYTFcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjM2fSBzdG9wQ29sb3I9XCIjOTdjNGM1XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MC44fSBzdG9wQ29sb3I9XCIjZTJlZWVmXCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8cmFkaWFsR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19mXCJcclxuICAgICAgICAgIGN4PXsyMS4xNn1cclxuICAgICAgICAgIGN5PXszMi4wNX1cclxuICAgICAgICAgIHI9ezI3LjI1fVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiNmZjBcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSAvPlxyXG4gICAgICAgIDwvcmFkaWFsR3JhZGllbnQ+XHJcbiAgICAgIDwvZGVmcz5cclxuICAgICAgPGcgZGF0YS1uYW1lPVwiTGF5ZXIgMlwiPlxyXG4gICAgICAgIDxnIGRhdGEtbmFtZT1cIkxheWVyIDFcIj5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMzkuNjQgMjIuOWgyLjg1YTEuODYgMS44NiAwIDAwLjkgMS40IDMuNjcgMy42NyAwIDAwMiAuNTMgMy4zMyAzLjMzIDAgMDAxLjktLjVBMS41IDEuNSAwIDAwNDggMjNhMS4zMiAxLjMyIDAgMDAtLjU0LTEuMSA0LjkxIDQuOTEgMCAwMC0xLjgzLS43MWwtMS44NC0uNFE0MCAyMCA0MCAxNi45YTMuODEgMy44MSAwIDAxMS41LTMuMTMgNi4xNCA2LjE0IDAgMDEzLjg5LTEuMTkgNi4wNyA2LjA3IDAgMDEzLjg5IDEuMTYgMy44NiAzLjg2IDAgMDExLjUgMy4wOEg0OGExLjc3IDEuNzcgMCAwMC0uNzktMS40IDMgMyAwIDAwLTEuODItLjUyIDMgMyAwIDAwLTEuNzcuNDggMS40OSAxLjQ5IDAgMDAtLjY2IDEuMjYgMS4yNSAxLjI1IDAgMDAuNTMgMS4wNSA1LjI5IDUuMjkgMCAwMDEuNzcuNjhsMS43MS4zNkE2LjE4IDYuMTggMCAwMTUwIDIwLjE0YTMuNDIgMy40MiAwIDAxMSAyLjU2IDMuOTMgMy45MyAwIDAxLTEuNTUgMy4zIDYuNjMgNi42MyAwIDAxLTQuMTcgMS4yIDYuNjUgNi42NSAwIDAxLTQuMDYtMS4yIDMuOSAzLjkgMCAwMS0xLjU4LTMuMXpNNTMuMzMgMTRoMi44NXYyLjQyaDEuOTN2Mi4xOGgtMS45M3Y1YzAgLjc4LjQxIDEuMTggMS4yMyAxLjE4YTQuNDQgNC40NCAwIDAwLjY5LS4wNXYyLjFhNi4xMiA2LjEyIDAgMDEtMS4zNi4xMSA0LjEgNC4xIDAgMDEtMi42My0uNjYgMi43NCAyLjc0IDAgMDEtLjc4LTIuMlYxOC42aC0xLjQ4di0yLjE1aDEuNDh6bTEwLjI5IDExYTIuMzkgMi4zOSAwIDAwMS42LS41NSAxLjc0IDEuNzQgMCAwMC42Ni0xLjM5di0uNzZsLTIuMi4xM2EyLjMgMi4zIDAgMDAtMS4yNC40IDEuMDkgMS4wOSAwIDAwLS40My45IDEuMSAxLjEgMCAwMC40NC45MyAxLjgzIDEuODMgMCAwMDEuMTcuMzR6bS0uOTQgMi4wNmEzLjYgMy42IDAgMDEtMi41MS0uODkgMi45MiAyLjkyIDAgMDEtMS0yLjI4IDIuNjggMi42OCAwIDAxMS0yLjI0IDUuNDMgNS40MyAwIDAxMy0uOTNsMi42My0uMTV2LS43YTEuNCAxLjQgMCAwMC0uNDctMS4xMyAxLjkxIDEuOTEgMCAwMC0xLjI4LS40MSAyLjIgMi4yIDAgMDAtMS4yOC4zNSAxLjQ0IDEuNDQgMCAwMC0uNi45NWgtMi41M0EzLjIxIDMuMjEgMCAwMTYxIDE3LjE3YTUuMzEgNS4zMSAwIDAxMy4yOS0xIDUuMDUgNS4wNSAwIDAxMy4yMyAxIDMuMDkgMy4wOSAwIDAxMS4yMSAyLjU0djcuMmgtMi44di0xLjZoLS4wNmEzLjA4IDMuMDggMCAwMS0xLjMgMS4zIDMuODkgMy44OSAwIDAxLTEuODkuNDd6bTcuODUtLjE2VjE2LjQ1aDIuNzZ2MS44OGguMDZhMi44NiAyLjg2IDAgMDEuOTEtMS41MiAyLjQzIDIuNDMgMCAwMTEuNTgtLjUzIDIuODggMi44OCAwIDAxLjgxLjExdjIuNTFhMi43OSAyLjc5IDAgMDAtMS0uMTcgMi4xNiAyLjE2IDAgMDAtMS42NC42MiAyLjM5IDIuMzkgMCAwMC0uNTkgMS43MnY1Ljg1em04LTEyLjg5aDIuODV2Mi40MmgxLjk0djIuMTdoLTEuODl2NWMwIC43OC40MSAxLjE4IDEuMjMgMS4xOGE0LjY4IDQuNjggMCAwMC43LS4wNXYyLjFBNi4yNCA2LjI0IDAgMDE4MiAyN2E0LjE1IDQuMTUgMCAwMS0yLjY0LS42NiAyLjc0IDIuNzQgMCAwMS0uNzgtMi4yVjE4LjZoLTEuNDd2LTIuMTVoMS40N3ptMTYgMi40MnYxMC40OWgtMi42OVYyNWgtLjA2YTMuMDcgMy4wNyAwIDAxLTMuMTMgMi4wOCAzLjcxIDMuNzEgMCAwMS0yLjc1LTEgNCA0IDAgMDEtMS0yLjg3di02Ljc2aDIuODV2Ni4xNWEyLjI4IDIuMjggMCAwMC41IDEuNTkgMS44NiAxLjg2IDAgMDAxLjQ1LjU1IDEuOSAxLjkgMCAwMDEuNTEtLjYzIDIuNCAyLjQgMCAwMC41NS0xLjY3di02em04LS4xN2EzLjc5IDMuNzkgMCAwMTMuMTQgMS40NCA2LjE0IDYuMTQgMCAwMTEuMTUgNCA2LjMzIDYuMzMgMCAwMS0xLjEzIDQgNC4xIDQuMSAwIDAxLTUuMDkuOTIgMy4xNSAzLjE1IDAgMDEtMS4yNy0xLjQxaC0uMDN2NS4xN2gtMi44NVYxNi40NWgyLjgxdjEuODJoLjA2YTMuMzUgMy4zNSAwIDAxMS4yNy0xLjQ2IDMuNyAzLjcgMCAwMTEuOTctLjUzem0tMSA4LjUxYTIgMiAwIDAwMS43Ny0uNzcgMy43MSAzLjcxIDAgMDAuNjMtMi4yNyAzLjY3IDMuNjcgMCAwMC0uNjMtMi4yNiAyIDIgMCAwMC0xLjY5LS44NSAyIDIgMCAwMC0xLjY4Ljg2IDMuNiAzLjYgMCAwMC0uNjQgMi4yNSAzLjczIDMuNzMgMCAwMC42MyAyLjI3IDIgMiAwIDAwMS42OS43OXptMjIuMDctLjMydjIuNDVoLTkuMTFWMTIuODJoM3YxMS42NXptNS41NS41NWEyLjM5IDIuMzkgMCAwMDEuNi0uNTUgMS43NCAxLjc0IDAgMDAuNjYtMS4zOXYtLjc2bC0yLjIuMTNhMi4zIDIuMyAwIDAwLTEuMjQuNCAxLjA5IDEuMDkgMCAwMC0uNDMuOSAxLjEgMS4xIDAgMDAuNDQuOTMgMS44MyAxLjgzIDAgMDAxLjI1LjM0em0tLjk0IDIuMDZhMy41OSAzLjU5IDAgMDEtMi41MS0uODkgMi45MiAyLjkyIDAgMDEtMS0yLjI4IDIuNjggMi42OCAwIDAxMS0yLjI0IDUuNDMgNS40MyAwIDAxMy0uOTNsMi42My0uMTV2LS43YTEuNDMgMS40MyAwIDAwLS40Ny0xLjEzIDEuOTEgMS45MSAwIDAwLTEuMjgtLjQxIDIuMTggMi4xOCAwIDAwLTEuMjguMzUgMS40NCAxLjQ0IDAgMDAtLjYuOTVoLTIuNjFhMy4yMSAzLjIxIDAgMDExLjMyLTIuNDggNS4zMSA1LjMxIDAgMDEzLjI5LTEgNS4wNyA1LjA3IDAgMDEzLjIzIDEgMy4wOSAzLjA5IDAgMDExLjIxIDIuNTR2Ny4yaC0yLjc2di0xLjU4aC0uMDZhMy4wOCAzLjA4IDAgMDEtMS4zIDEuMyAzLjg5IDMuODkgMCAwMS0xLjczLjQ3em03Ljg1LS4xNlYxNi40NWgyLjc2djEuODZoLjE4YTMuMjYgMy4yNiAwIDAxMS4yNS0xLjUyIDMuNiAzLjYgMCAwMTItLjU0IDMuNDYgMy40NiAwIDAxMi42OCAxIDQuMTIgNC4xMiAwIDAxMSAyLjg4djYuNzVIMTQzdi02LjEyYTIuMzEgMi4zMSAwIDAwLS40OS0xLjU5IDEuODMgMS44MyAwIDAwLTEuNDQtLjU1IDIgMiAwIDAwLTEuNTIuNjMgMi4zOSAyLjM5IDAgMDAtLjU3IDEuNjZ2NnptMTUuNDEuMTZhMy43NSAzLjc1IDAgMDEtMy4xMS0xLjQ1IDYuMjEgNi4yMSAwIDAxLTEuMTUtNCA2LjExIDYuMTEgMCAwMTEuMTUtMy45MyAzLjc5IDMuNzkgMCAwMTMuMTMtMS40NSAzLjUzIDMuNTMgMCAwMTIgLjU0IDMuMTcgMy4xNyAwIDAxMS4yNSAxLjQydi01LjM3aDIuODZ2MTQuMWgtMi44MnYtMS44aC0uMDVhMy4wOSAzLjA5IDAgMDEtMS4yNiAxLjQyIDMuNjcgMy42NyAwIDAxLTEuOTIuNTR6bTEtOC41MWEyIDIgMCAwMC0xLjcuODQgMy43NSAzLjc1IDAgMDAtLjYxIDIuMjcgMy43NiAzLjc2IDAgMDAuNjEgMi4yOCAyLjE1IDIuMTUgMCAwMDMuMzkgMCAzLjcyIDMuNzIgMCAwMC42My0yLjI4IDMuNjcgMy42NyAwIDAwLS42My0yLjI2IDIgMiAwIDAwLTEuNjQtLjgzem03LjExIDguMzVWMTYuNDVoMi44NXYxMC40N3ptMi41MS0xMi4wNWExLjUyIDEuNTIgMCAwMS0xLjA5LjQyIDEuNDkgMS40OSAwIDAxLTEuMDgtLjQyIDEuNDQgMS40NCAwIDAxLS40NC0xIDEuMzggMS4zOCAwIDAxLjQ0LTEgMS40NiAxLjQ2IDAgMDExLjA4LS40MyAxLjQ5IDEuNDkgMCAwMTEuMDkuNDMgMS4zOCAxLjM4IDAgMDEuNDQgMSAxLjQ0IDEuNDQgMCAwMS0uMzkgMS4wMnptMi4yNCAxMi4wNVYxNi40NWgyLjc2djEuODZoLjA2YTMuMjYgMy4yNiAwIDAxMS4yNS0xLjUyIDMuNiAzLjYgMCAwMTItLjU0IDMuNDQgMy40NCAwIDAxMi42OCAxIDQuMDcgNC4wNyAwIDAxLjk1IDIuODh2Ni43NWgtMi44NXYtNi4xMmEyLjMxIDIuMzEgMCAwMC0uNDktMS41OSAxLjc5IDEuNzkgMCAwMC0xLjQzLS41NSAyIDIgMCAwMC0xLjUzLjYzIDIuNDMgMi40MyAwIDAwLS41NiAxLjY2djZ6bTE2LjM2LTIuMjNhMi4wNSAyLjA1IDAgMDAxLjctLjggMy40OCAzLjQ4IDAgMDAuNjQtMi4yMyAzLjYgMy42IDAgMDAtLjY0LTIuMjUgMiAyIDAgMDAtMS43LS44NCAyIDIgMCAwMC0xLjY4Ljg0IDMuNjkgMy42OSAwIDAwLS42MSAyLjI1IDMuNiAzLjYgMCAwMC42MSAyLjIzIDIgMiAwIDAwMS43My44MnptLS4wNSA2LjE3YTUuODQgNS44NCAwIDAxLTMuMzYtLjkgMy4xOSAzLjE5IDAgMDEtMS40OC0yLjNoMi43OWExLjU0IDEuNTQgMCAwMC43NC44OCAyLjggMi44IDAgMDAxLjM5LjM0IDIuNDEgMi40MSAwIDAwMS42OS0uNTYgMS44NSAxLjg1IDAgMDAuNjEtMS40N1YyNUgxODNhMyAzIDAgMDEtMS4yNCAxLjM3IDMuODkgMy44OSAwIDAxLTIgLjUxIDMuOCAzLjggMCAwMS0zLjA5LTEuNDEgNS44OCA1Ljg4IDAgMDEtMS4xNS0zLjg0IDYuMDYgNi4wNiAwIDAxMS4xNS0zLjkyIDMuODIgMy44MiAwIDAxMy4xNC0xLjQ0IDMuNTkgMy41OSAwIDAxMiAuNTQgMy4zNyAzLjM3IDAgMDExLjI3IDEuNDV2LTEuODFoMi44MnYxMC4zMmEzLjU4IDMuNTggMCAwMS0xLjQ0IDMgNiA2IDAgMDEtMy43NyAxLjA5elwiXHJcbiAgICAgICAgICAgIGZpbGw9e3doaXRlID8gJ3doaXRlJyA6ICcjMGYyMTM3J31cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTE5LjguNTNBMTUuNzMgMTUuNzMgMCAwMDQuNjUgMjYuODlMMjIuMTcgOS4zN0E1LjI5IDUuMjkgMCAwMDE5LjguNTN6XCJcclxuICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19iKVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk02LjY1IDM2LjA5QTE1LjczIDE1LjczIDAgMDAyMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODR6XCJcclxuICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19jKVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0yMS44MSA5LjczTDQuMjkgMjcuMjVhNS4yOCA1LjI4IDAgMDAyLjM2IDguODQgMTUuNzIgMTUuNzIgMCAwMDUuNzUuNDRjLTcuNjgtNy4zOSA5LjQxLTI2LjggOS40MS0yNi44elwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNwcmVmaXhfX2EpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Z1xyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ211bHRpcGx5JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgICBkPVwiTTYuMzMgMzZjLTIuNDktNy43IDEyLjQ1LTIzLjIxIDE1LjA5LTI1Ljg3TDQuMjkgMjcuMjVBNS4yOCA1LjI4IDAgMDA2LjMzIDM2elwiXHJcbiAgICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19kKVwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjEuNzUgOS43OWwuMDYtLjA2elwiIGZpbGw9XCJ1cmwoI3ByZWZpeF9fZSlcIiAvPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0yMy40NSA3LjI5TDQuNjQgMjYuODggMjIuMTcgOS4zN2E1LjE0IDUuMTQgMCAwMDEuMjgtMi4wOHpcIlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1peEJsZW5kTW9kZTogJ3NjcmVlbicsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3ByZWZpeF9fZilcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L2c+XHJcbiAgICAgIDwvZz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMb2dvO1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBJbWFnZSBhcyBJbWcgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbWFnZSh7IHNyYywgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIDxJbWcgc3JjPXtzcmN9IHsuLi5yZXN0fSAvPjtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEhlYWRlciBmcm9tICcuL2hlYWRlci9oZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vZm9vdGVyL2Zvb3Rlcic7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8SGVhZGVyIC8+XHJcbiAgICAgIDxtYWluXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHZhcmlhbnQ6ICdsYXlvdXQubWFpbicsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgICA8Rm9vdGVyIC8+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExncGQoKSB7XHJcbiAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKClcclxuIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBsZXQgYWNlaXRlTGdwZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2FjZWl0ZUxncGQnKVxyXG4gICAgYWNlaXRlTGdwZCA9PSBudWxsID8gc2V0SXNPcGVuKHRydWUpIDogc2V0SXNPcGVuKGZhbHNlKVxyXG4gIH0sIFtdKTtcclxuXHJcblxyXG4gIGZ1bmN0aW9uIGNsb3NlTGdwZCgpIHtcclxuICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ2FjZWl0ZUxncGQnLCB0cnVlKVxyXG4gICAgc2V0SXNPcGVuKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIGlzT3BlbiA/IChcclxuICAgICAgPGRpdiBzeD17IHN0eWxlcy5jb29raWVQb3B1cH0+XHJcbiAgICAgICAgPHA+RXN0ZSBzaXRlIG7Do28gdXRpbGl6YSBjb29raWVzIGUgbsOjbyBjYXB0dXJhIGRhZG9zLjwvcD5cclxuICAgICAgICA8ZGl2IHN4PXsgc3R5bGVzLmNvb2tpZVBvcHVwQWN0aW9ucyB9PlxyXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXtjbG9zZUxncGR9Pk9rLCBlbnRlbmRpITwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkgOiAoXHJcbiAgICAgIDw+XHJcbiAgICAgIDwvPlxyXG4gICAgKVxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb29raWVQb3B1cCA6IHtcclxuICAgIGZvbnRTaXplOiAnMC44NzVyZW0nLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcclxuICAgIGJvdHRvbTogJzEuMjVyZW0nLFxyXG4gICAgcGFkZGluZzogJzAuNjI1cmVtIDAuOTM3NXJlbScsXHJcbiAgICBib3hTaGFkb3c6ICcwIDAgMC42MjVyZW0gMCByZ2JhKDAsMCwwLCAuMTUpJyxcclxuICAgIGxpbmVIZWlnaHQ6ICcxNTAlJyxcclxuICAgIHRyYW5zaXRpb246ICdvcGFjaXR5IC41cycsXHJcbiAgICBvcGFjaXR5OiAnMScsXHJcbiAgICB6SW5kZXg6ICcyJyxcclxuICAgIHJpZ2h0OiAnNCUnLFxyXG4gICAgd2lkdGg6ICc5MiUnLFxyXG4gICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICdza3libHVlJyxcclxuICAgICAgJyY6dmlzaXRlZCc6IHtcclxuICAgICAgICBjb2xvcjogJ3NreWJsdWUnLFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvb2tpZVBvcHVwQWN0aW9uczoge1xyXG4gICAgZmxleDogJzEnLFxyXG4gICAgdGV4dEFsaWduOiAncmlnaHQnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJyxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBjb2xvcjogJ29yYW5nZScsXHJcbiAgICAgIGJvcmRlcjogJ25vbmUnLFxyXG4gICAgICBiYWNrZ3JvdW5kOiAnbm9uZScsXHJcbiAgICAgIGZvbnRGYW1pbHk6ICdpbmhlcml0JyxcclxuICAgICAgZm9udFN0eWxlOiAnaW5oZXJpdCcsXHJcbiAgICAgIGZvbnRTaXplOiAnaW5oZXJpdCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgIGZvbnRTaXplOiAgJzAuNzVyZW0nLFxyXG4gICAgICBwYWRkaW5nOiAnMCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZScsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IE5leHRMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7IGpzeCwgTGluayBhcyBBIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIGFzIE1lbnVMaW5rIH0gZnJvbSAncmVhY3Qtc2Nyb2xsJztcclxuaW1wb3J0IHsgSW9Jb3NBcnJvd0ZvcndhcmQgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCB7IGtleWZyYW1lcyB9IGZyb20gJ0BlbW90aW9uL2NvcmUnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE5hdkxpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TWVudUxpbmtcclxuICAgICAgdG89e3BhdGh9XHJcbiAgICAgIHNweT17dHJ1ZX1cclxuICAgICAgb2Zmc2V0PXstNzB9XHJcbiAgICAgIHNtb290aD17dHJ1ZX1cclxuICAgICAgZHVyYXRpb249ezUwMH1cclxuICAgICAgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIlxyXG4gICAgICBhY3RpdmVDbGFzcz1cImFjdGl2ZVwiXHJcbiAgICAgIHsuLi5yZXN0fVxyXG4gICAgPlxyXG4gICAgICB7bGFiZWx9XHJcbiAgICA8L01lbnVMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMaW5rKHsgcGF0aCwgbGFiZWwsIGNoaWxkcmVuLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPE5leHRMaW5rIGhyZWY9e3BhdGh9PlxyXG4gICAgICA8QSB7Li4ucmVzdH0+e2NoaWxkcmVuID8gY2hpbGRyZW4gOiBsYWJlbH08L0E+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBMZWFybk1vcmUoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XHJcbiAgICAgIDxBIHN4PXtzdHlsZXMubGVhcm5Nb3JlfSB7Li4ucmVzdH0+XHJcbiAgICAgICAge2xhYmVsID8/ICdMZWFybiBNb3JlJ30gPElvSW9zQXJyb3dGb3J3YXJkIHNpemU9XCIxNnB4XCIgLz5cclxuICAgICAgPC9BPlxyXG4gICAgPC9OZXh0TGluaz5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBmYWRlUmlnaHQgPSBrZXlmcmFtZXNgXHJcbiAgZnJvbSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01cHgpO1xyXG4gIH1cclxuICB0bzoge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcbmA7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbGVhcm5Nb3JlOiB7XHJcbiAgICBjb2xvcjogJ2xpbmsnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBzdmc6IHtcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgzcHgpJyxcclxuICAgIH0sXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBhbmltYXRpb246IGAke2ZhZGVSaWdodH0gMC41cyBsaW5lYXJgLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5pbXBvcnQgTG9nb1N2ZyBmcm9tICdjb21wb25lbnRzL2ljb25zL2xvZ28nO1xyXG5pbXBvcnQgbG9nbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ28ucG5nJ1xyXG5pbXBvcnQgbG9nb0JyYW5jbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ29fYnJhbmNvLnBuZydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ28oeyBpc1N0aWNreSwgZm9vdGVyLCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMaW5rIHBhdGg9XCIvXCIgc3g9e3N0eWxlcy5sb2dvfSB7Li4ucHJvcHN9PlxyXG4gICAgICB7aXNTdGlja3kgPyAoXHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtsb2dvQnJhbmNvfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cImxvZ29cIiAvPlxyXG4gICAgICApfVxyXG4gICAgICB7LyogPExvZ29Tdmcgd2hpdGU9eyFpc1N0aWNreX0gLz4gKi99XHJcbiAgICA8L0xpbms+XHJcbiAgKTtcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbG9nbzoge1xyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBzdmc6IHtcclxuICAgICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICAgIHdpZHRoOiBbMTI4LCBudWxsLCAnMTAwJSddLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIEhlYWRpbmcsIFRleHQsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuY29uc3QgU2VjdGlvbkhlYWRpbmcgPSAoeyB0aXRsZSwgc2xvZ2FuLCBkZXNjcmlwdGlvbiwgZW1vamksIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmhlYWRpbmd9IHsuLi5wcm9wc30+XHJcbiAgICAgIHtzbG9nYW4gJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuc2xvZ2FufT5cclxuICAgICAgICAgIHtzbG9nYW59XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfVxyXG4gICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAge2Vtb2ppID8gPHNwYW4+e3RpdGxlfTwvc3Bhbj4gOiB0aXRsZX1cclxuICAgICAgICB7ZW1vamkgJiYgPEltYWdlIHNyYz17ZW1vaml9IGFsdD1cImVtb2ppXCIgLz59XHJcbiAgICAgIDwvSGVhZGluZz5cclxuICAgICAge2Rlc2NyaXB0aW9uICYmIChcclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLmRlc2NyaXB0aW9ufT5cclxuICAgICAgICAgIHtkZXNjcmlwdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VjdGlvbkhlYWRpbmc7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgaGVhZGluZzoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIG1heFdpZHRoOiA2NjAsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8gNTBweCcsXHJcbiAgfSxcclxuICBzbG9nYW46IHtcclxuICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogMixcclxuICAgIGxpbmVIZWlnaHQ6IDIuNSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFdlaWdodDogNjAwLFxyXG4gICAgZm9udFNpemU6IFs0LCBudWxsLCBudWxsLCA2XSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjMzLCAxLjMzLCAxLjVdLFxyXG4gICAgbGV0dGVyU3BhY2luZzogW251bGwsIG51bGwsIG51bGwsICdoZWFkaW5nJ10sXHJcbiAgICBpbWc6IHtcclxuICAgICAgbWw6IFsnMTVweCddLFxyXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgdG9wOiAnOHB4JyxcclxuICAgICAgbWF4V2lkdGg6IFsyNSwgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIGZvbnRTaXplOiBbJzE0cHgnLCBudWxsLCAnMTZweCddLFxyXG4gICAgbGluZUhlaWdodDogWzEuODYsIG51bGwsIDIuMl0sXHJcbiAgICBtdDogWzVdLFxyXG4gICAgbWF4V2lkdGg6IDYxMCxcclxuICAgIG06IFsnMTBweCBhdXRvIDAnXSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU0VPKHtcclxuICBkZXNjcmlwdGlvbiA9ICdzdGFydHVwIGxhbmRpbmcgZGVzY3JpcHRpb25zJyxcclxuICBhdXRob3IgPSAnUmVkUSwgSW5jJyxcclxuICBtZXRhLFxyXG4gIHRpdGxlID0gJ3N0YXJ0dXAgbGFuZGluZyB0aXRsZScsXHJcbn0pIHtcclxuICBjb25zdCBtZXRhRGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogYGRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBwcm9wZXJ0eTogYG9nOnR5cGVgLFxyXG4gICAgICBjb250ZW50OiBgd2Vic2l0ZWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjYXJkYCxcclxuICAgICAgY29udGVudDogYHN1bW1hcnlgLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6Y3JlYXRvcmAsXHJcbiAgICAgIGNvbnRlbnQ6IGF1dGhvcixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOnRpdGxlYCxcclxuICAgICAgY29udGVudDogdGl0bGUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpkZXNjcmlwdGlvbmAsXHJcbiAgICAgIGNvbnRlbnQ6IGRlc2NyaXB0aW9uLFxyXG4gICAgfSxcclxuICBdLmNvbmNhdChtZXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cclxuICAgICAge21ldGFEYXRhLm1hcCgoeyBuYW1lLCBjb250ZW50IH0sIGkpID0+IChcclxuICAgICAgICA8bWV0YSBrZXk9e2l9IG5hbWU9e25hbWV9IGNvbnRlbnQ9e2NvbnRlbnR9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgPC9IZWFkPlxyXG4gICk7XHJcbn1cclxuXHJcblNFTy5kZWZhdWx0UHJvcHMgPSB7XHJcbiAgbGFuZzogYGVuYCxcclxuICBtZXRhOiBbXSxcclxuICBkZXNjcmlwdGlvbjogYGAsXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJ1dHRvbiwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQnNBcnJvd0xlZnQsIEJzQXJyb3dSaWdodCB9IGZyb20gJ3JlYWN0LWljb25zL2JzJztcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBTbGlja0Fycm93ID0gKHsgY2xhc3NOYW1lLCBvbkNsaWNrLCBjb250cm9sIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJ1dHRvblxyXG4gICAgICB2YXJpYW50PVwidGV4dFwiXHJcbiAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lfVxyXG4gICAgICBzeD17c3R5bGVzLnBhZ2luYXRpb25CdXR0b259XHJcbiAgICA+XHJcbiAgICAgIHtjb250cm9sID09PSAncHJldicgPyAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICAgICAgUHJldlxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJzQXJyb3dMZWZ0IHNpemU9XCIzMnB4XCIgLz5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgICApIDogKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiIHZhcmlhbnQ9XCJzdHlsZXMuc3JPbmx5XCI+XHJcbiAgICAgICAgICAgIE5leHRcclxuICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgIDxCc0Fycm93UmlnaHQgc2l6ZT1cIjMycHhcIiAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICl9XHJcbiAgICA8L0J1dHRvbj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2xpY2tBcnJvdztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwYWdpbmF0aW9uQnV0dG9uOiB7XHJcbiAgICBtaW5IZWlnaHQ6ICczMHB4JyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogMCxcclxuICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgIG91dGxpbmU6ICcwIG5vbmUnLFxyXG4gICAgfSxcclxuICAgIHN2Zzoge1xyXG4gICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuMnMgZWFzZS1pbi1vdXQgMHMnLFxyXG4gICAgfSxcclxuICAgICcmLnNsaWNrLWRpc2FibGVkJzoge1xyXG4gICAgICBjb2xvcjogJyNCQkM3RDcnLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICB0cmFuc2Zvcm06ICdzY2FsZSgwLjgpJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnJi5zbGljay1wcmV2Jzoge1xyXG4gICAgICBsZWZ0OiAnY2FsYyg1MCUgLSAxNnB4KScsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxyXG4gICAgfSxcclxuICAgICcmLnNsaWNrLW5leHQnOiB7XHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoNTAlKScsXHJcbiAgICAgIHJpZ2h0OiAnY2FsYyg1MCUgLSAxNnB4KScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICd0aUBzZXJ2Y29uMS5jb20nLFxyXG4gICAgaW5mbzogJ21haWx0bzp0aUBzZXJ2Y29uMS5jb20nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICcoODgpIDM2NjktMTE0NicsXHJcbiAgICBpbmZvOiAndGVsOiA4ODM2NjkxMTQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnKDg4KSA5OTEyLTY2MjAnLFxyXG4gICAgaW5mbzogJ2h0dHBzOi8vd2EubWUvNTU4ODk5MTI2NjIwJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgVG9wQmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMudG9wYmFyfT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cImNhcHRpb25cIj5cclxuICAgICAgICAgIE5vIG1lcmNhZG8gaMOhIG1haXMgZGUge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIwMDB9IGFub3MsIGVzdGFtb3Mgc2VtcHJlIGJ1c2NhbmRvIG9zIHJlcXVpc2l0b3MgcGFyYSBhdGVuZGVyIGFzIGV4cGVjdGF0aXZhcyBkb3Mgbm9zc29zIGNsaWVudGVzLlxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJ0bGRzXCI+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKHtsYWJlbCwgaW5mb30sIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17aW5mb30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHRvcGJhcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBweDogWzYsIG51bGwsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgcHk6IFsnMTJweCddLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2NlbnRlciddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnc3BhY2UtYmV0d2VlbiddLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogWzFdLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgbWF4V2lkdGg6IDEzNjYsXHJcbiAgICBwbDogJzMwcHgnLFxyXG4gICAgcHI6ICczMHB4JyxcclxuICAgIG06ICcwIGF1dG8nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHNwYW46IHtcclxuICAgICAgJysgc3Bhbic6IHtcclxuICAgICAgICBtbDogWzRdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuY2FwdGlvbic6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblxyXG4gICAgICB3aWR0aDogWzE5OSwgbnVsbCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgICAgb3ZlcmZsb3c6IFsnaGlkZGVuJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICAgIHdoaXRlU3BhY2U6IFsnbm93cmFwJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcblxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtcjogWzIsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgICAgIG1pbldpZHRoOiAyMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLnRsZHMnOiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIHN0cm9uZzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICAnKyBzdHJvbmcnOiB7XHJcbiAgICAgICAgbWw6IDMsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiBbJzEzcHgnLCBudWxsLCBudWxsLCAxLCAxXSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgbWw6IFsyLCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTNdLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtbDogMSxcclxuICAgICAgfSxcclxuICAgICAgJyY6bm90KDpmaXJzdC1jaGlsZCknOiB7XHJcbiAgICAgICAgbWw6IDQsXHJcbiAgICAgICAgcGw6IDQsXHJcbiAgICAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjZmZmZmZmMjEnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcInBhZ2VzL2FwaS9hcGlcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWFjb2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZnVuY3Rpb24gb3JnYW5pemFyT2JyaWdhY29lc1BvckVzdGFkbyhvYnJpZ2Fjb2VzR2VyYWwpIHtcclxuICBjb25zdCBlc3Bpcml0b1NhbnRvID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTY4KVxyXG4gIGNvbnN0IG1hdG9Hcm9zc29Eb1N1bCA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDU0NDMpXHJcbiAgY29uc3QgbWluYXNHZXJhaXMgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNjkpXHJcbiAgY29uc3QgcmlvR3JhbmRlRG9TdWwgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTUpXHJcbiAgY29uc3QgcGFyYW5hID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTU4KVxyXG4gIGNvbnN0IHJpb0RlSmFuZWlybyA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1MylcclxuICBjb25zdCBzYW50YUNhdGFyaW5hID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTU0KVxyXG4gIGNvbnN0IHNhb1BhdWxvID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTUyKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXNwaXJpdG9TYW50bzogWyAuLi5lc3Bpcml0b1NhbnRvIF0sXHJcbiAgICBtYXRvR3Jvc3NvRG9TdWw6IFsgLi4ubWF0b0dyb3Nzb0RvU3VsIF0sXHJcbiAgICBtaW5hc0dlcmFpczogWyAuLi5taW5hc0dlcmFpcyBdLFxyXG4gICAgcmlvR3JhbmRlRG9TdWw6IFsgLi4ucmlvR3JhbmRlRG9TdWwgXSxcclxuICAgIHBhcmFuYTogWyAuLi5wYXJhbmEgXSxcclxuICAgIHJpb0RlSmFuZWlybzogWyAuLi5yaW9EZUphbmVpcm8gXSxcclxuICAgIHNhbnRhQ2F0YXJpbmE6IFsgLi4uc2FudGFDYXRhcmluYSBdLFxyXG4gICAgc2FvUGF1bG86IFsgLi4uc2FvUGF1bG8gXSxcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5mb3JtYWNvZXNQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbbm90aWNpYXMsIHNldE5vdGljaWFzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtvYnJpZ2Fjb2VzLCBzZXRPYnJpZ2Fjb2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthZ2VuZGEsIHNldEFnZW5kYV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbY290YWNvZXMsIHNldENvdGFjb2VzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsMSA9IGFwaS5nZXQoJ25vdGljaWFzJylcclxuICAgIGNvbnN0IHVybDIgPSBhcGkuZ2V0KCdjb3RhY29lcycpXHJcbiAgICBjb25zdCB1cmwzID0gYXBpLmdldCgnb2JyaWdhY29lcycpXHJcbiAgICBjb25zdCB1cmw0ID0gYXBpLmdldCgnYWdlbmRhJylcclxuICAgIGF4aW9zLmFsbChbdXJsMSwgdXJsMiwgdXJsMywgdXJsNF0pXHJcbiAgICAgIC50aGVuKGF4aW9zLnNwcmVhZCgoLi4ucmVzcG9uc2VzKSA9PiB7XHJcbiAgICAgICAgc2V0Tm90aWNpYXMocmVzcG9uc2VzWzBdLmRhdGEpXHJcbiAgICAgICAgc2V0Q290YWNvZXMocmVzcG9uc2VzWzFdLmRhdGEpXHJcbiAgICAgICAgc2V0T2JyaWdhY29lcyhvcmdhbml6YXJPYnJpZ2Fjb2VzUG9yRXN0YWRvKHJlc3BvbnNlc1syXS5kYXRhKSlcclxuICAgICAgICBzZXRBZ2VuZGEocmVzcG9uc2VzWzNdLmRhdGEpXHJcbiAgICAgIH0pKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEluZm9ybWFjb2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBub3RpY2lhcywgb2JyaWdhY29lcywgYWdlbmRhLCBjb3RhY29lcyB9fT5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L0luZm9ybWFjb2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZvcm1hY29lcygpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChJbmZvcm1hY29lc0NvbnRleHQpXHJcbiAgcmV0dXJuIGNvbnRleHRcclxufSIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcydcclxuXHJcbmV4cG9ydCBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gIGJhc2VVUkw6ICdodHRwczovL3NlcnZjb24xLnZlcmNlbC5hcHAvYXBpJ1xyXG59KVxyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgdGhlbWUgZnJvbSAndGhlbWUnO1xyXG5pbXBvcnQgU0VPIGZyb20gJ2NvbXBvbmVudHMvc2VvJztcclxuaW1wb3J0IExheW91dCBmcm9tICdjb21wb25lbnRzL2xheW91dCc7XHJcbmltcG9ydCBCYW5uZXIgZnJvbSAnc2VjdGlvbnMvYmFubmVyJztcclxuaW1wb3J0IFNlcnZpY2VzIGZyb20gJ3NlY3Rpb25zL3NlcnZpY2VzJztcclxuaW1wb3J0IFByZW1pdW1GZWF0dXJlIGZyb20gJ3NlY3Rpb25zL3ByZW1pdW0tZmVhdHVyZSc7XHJcbmltcG9ydCBVbHRpbWF0ZUZlYXR1cmVzIGZyb20gJ3NlY3Rpb25zL3VsdGltYXRlLWZlYXR1cmUnO1xyXG5pbXBvcnQgQ3VzdG9tZXJTdXBwb3J0IGZyb20gJ3NlY3Rpb25zL2N1c3RvbWVyLXN1cHBvcnQnO1xyXG5pbXBvcnQgUHJpY2luZyBmcm9tICdzZWN0aW9ucy9wcmljaW5nJztcclxuaW1wb3J0IFRlc3RpbW9uaWFscyBmcm9tICdzZWN0aW9ucy90ZXN0aW1vbmlhbHMnO1xyXG5pbXBvcnQgQmxvZyBmcm9tICdzZWN0aW9ucy9ibG9nJztcclxuaW1wb3J0IEZhcSBmcm9tICdzZWN0aW9ucy9mYXEnO1xyXG5pbXBvcnQgU3VwcG9ydCBmcm9tICdzZWN0aW9ucy9zdXBwb3J0JztcclxuaW1wb3J0IExncGQgZnJvbSAnY29tcG9uZW50cy9sZ3BkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4UGFnZSgpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lfT5cclxuICAgICAgPExheW91dD5cclxuICAgICAgICA8U0VPXHJcbiAgICAgICAgICB0aXRsZT1cIlNFUlZDT04gU2VydmnDp29zIGRlIENvbnRhYmlsaWRhZGVcIlxyXG4gICAgICAgICAgZGVzY3JpcHRpb249XCJQcmVzdGFyIHNlcnZpw6dvcyBjb250w6FiZWlzIGUgYXNzZXNzb3JpYSBkZSBxdWFsaWRhZGUsIGJ1c2NhbmRvIGF0ZW5kZXIgYXMgbmVjZXNzaWRhZGVzIGRlIG5vc3NvcyBjbGllbnRlcyBlIHBhcmNlaXJvc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8QmFubmVyIC8+XHJcbiAgICAgICAgPFByZW1pdW1GZWF0dXJlIC8+XHJcbiAgICAgICAgPFVsdGltYXRlRmVhdHVyZXMgLz5cclxuICAgICAgICB7LyogPEN1c3RvbWVyU3VwcG9ydCAvPiAqL31cclxuICAgICAgICA8UHJpY2luZyAvPlxyXG4gICAgICAgIHsvKiA8VGVzdGltb25pYWxzIC8+ICovfVxyXG4gICAgICAgIDxTZXJ2aWNlcyAvPlxyXG4gICAgICAgIDxCbG9nIC8+XHJcbiAgICAgICAgPExncGQgLz5cclxuICAgICAgICB7LyogPFN1cHBvcnQgLz4gKi99XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7XHJcbiAganN4LFxyXG4gIEJveCxcclxuICBGbGV4LFxyXG4gIFRleHQsXHJcbiAgSGVhZGluZyxcclxuICBDb250YWluZXIsXHJcbn0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgYmFubmVyIGZyb20gJ2Fzc2V0cy9pbWFnZXMvYmFubmVyMS5wbmcnXHJcbmltcG9ydCB7IEFpT3V0bGluZVdoYXRzQXBwLCBBaU91dGxpbmVQaG9uZSwgQWlPdXRsaW5lSW5zdGFncmFtLCBBaU91dGxpbmVGYWNlYm9vaywgQWlPdXRsaW5lTWFpbCB9IGZyb20gJ3JlYWN0LWljb25zL2FpJ1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQge0FuaW1hdGVkfSBmcm9tIFwicmVhY3QtYW5pbWF0ZWQtY3NzXCI7XHJcblxyXG5jb25zdCBCYW5uZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJob21lXCIgc3g9e3N0eWxlcy5zZWN0aW9ufSA+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEFuaW1hdGVkIGFuaW1hdGlvbkluPVwiYm91bmNlSW5MZWZ0XCIgYW5pbWF0aW9uT3V0PVwiZmFkZU91dFwiIGlzVmlzaWJsZT17dHJ1ZX0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5kb21haW5DYXJkfT5cclxuICAgICAgICAgICAgICA8SGVhZGluZz5VbSBub3ZvIHBlcmZpbCBkZSA8VGV4dCBhcz1cInNwYW5cIiBjb2xvcj0nc2Vjb25kYXJ5Jz5lbXByZXNhIGNvbnTDoWJpbDwvVGV4dD48L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgbWI9ezZ9PlxyXG4gICAgICAgICAgICAgICAgUXVlcmVtb3MgZW50ZW5kZXIgbyBxdWUgdm9jw6ogcHJlY2lzYSwgPGJyIC8+XHJcbiAgICAgICAgICAgICAgICBFbnRyZSBlbSBjb250YXRvXHJcbiAgICAgICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgICAgIDxGbGV4IHN4PXtzdHlsZXMuaW5wdXRHcm91cH0+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93YS5tZS81NTg4OTkxMjY2MjBcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZVdoYXRzQXBwIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ0ZWw6ODgzNjY5MTE0NlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGhvbmUgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vc2VydmNvbmppam9jYS9cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUluc3RhZ3JhbSBzaXplPVwiM2VtXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlcnZjb25qaWpvY2FcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZUZhY2Vib29rIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86dGlAc2VydmNvbjEuY29tXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVNYWlsIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L0ZsZXg+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMuaWxsdXN0cmF0aW9ufT5cclxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtzZXJ2ZXJSYWNrfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cInNldmVyLXJhY2tcIiAvPlxyXG4gICAgICAgICAgICA8L0JveD4gKi99XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0FuaW1hdGVkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCYW5uZXI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtiYW5uZXJ9KWAsXHJcbiAgICBwdDogWzE3LCBudWxsLCBudWxsLCAyMCwgbnVsbF0sXHJcbiAgICBwYjogWzYsIG51bGwsIG51bGwsIDEyLCAxNl0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBnYXA6IFsnMzBweCA2MHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJzMwcHggNDBweCcsICczMHB4IDYwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIG1pbkhlaWdodDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc2NnZoJywgJzgxdmgnXSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAnMWZyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJ3JlcGVhdCgyLCAxZnIpJyxcclxuICAgICAgJzUxMHB4IDFmcicsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgZG9tYWluQ2FyZDoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZmZmZmJjJyxcclxuICAgIGJveFNoYWRvdzogJzBweCAyNHB4IDUwcHggcmdiYSg1NCwgOTEsIDEyNSwgMC4wNSknLFxyXG4gICAgYm9yZGVyUmFkaXVzOiBgMTVweCAzMHB4YCxcclxuICAgIHA6IFsnMzBweCAyNXB4IDUwcHgnLCBudWxsLCBudWxsLCAnNDBweCA0MHB4IDYwcHgnXSxcclxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMCBhdXRvJywgJ3Vuc2V0J10sXHJcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDQ4MCwgJ25vbmUnXSxcclxuICAgIGgyOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgICAgZm9udFNpemU6IFs4LCBudWxsLCBudWxsLCAxMCwgOSwgMTRdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjM2LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgIG1iOiBbNSwgbnVsbCwgbnVsbCwgNywgOF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW5wdXRHcm91cDoge1xyXG4gICAgYToge1xyXG4gICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3NlY29uZGFyeScsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICBweDogWzMsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXHJcbiAgICAgIHA6IDAsXHJcbiAgICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm94U2hhZG93OiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICAgICc6OnBsYWNlaG9sZGVyJzoge1xyXG4gICAgICAgIGZvbnRTaXplOiAnMTVweCcsXHJcbiAgICAgICAgbGluZUhlaWdodDogMS4zMyxcclxuICAgICAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuNCksXHJcbiAgICAgIH0sXHJcbiAgICAgICc6LXdlYmtpdC1hdXRvZmlsbCc6IHtcclxuICAgICAgICBXZWJraXRCb3hTaGFkb3c6ICcwIDAgMCAzMHB4IHdoaXRlIGluc2V0ICFpbXBvcnRhbnQnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHNlbGVjdDoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGNvbG9yOiAndGV4dFNlY29uZGFyeScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjMzLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXHJcbiAgICAgIG1pbldpZHRoOiBbNjAsIG51bGwsIG51bGwsIDc1XSxcclxuICAgICAgcDogMCxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICAgICc6Zm9jdXMnOiB7XHJcbiAgICAgICAgb3V0bGluZTogMCxcclxuICAgICAgfSxcclxuICAgICAgJysgc3ZnJzoge1xyXG4gICAgICAgIGNvbG9yOiAnI0E2QThCQicsXHJcbiAgICAgICAgaGVpZ2h0OiA0MCxcclxuICAgICAgICB3aWR0aDogNDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VibWl0OiB7XHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgbXQ6IFs0XSxcclxuICAgIG1pbkhlaWdodDogWzQ1LCBudWxsLCBudWxsLCA2MF0sXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgbm90ZToge1xyXG4gICAgZm9udFN0eWxlOiAnaXRhbGljJyxcclxuICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgbnVsbCwgJzE1cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMzMsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgY29sb3I6IHJnYmEoJyMwMjA3M0UnLCAwLjUpLFxyXG4gICAgbXQ6IFs0XSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciwgQnV0dG9uLCBGbGV4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ3JlYWN0LXNsaWNrJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcclxuaW1wb3J0IEJsb2dQb3N0IGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvYmxvZy1wb3N0JztcclxuaW1wb3J0IFNsaWNrQXJyb3cgZnJvbSAnY29tcG9uZW50cy9zbGljay1hcnJvdyc7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5pbXBvcnQgeyB1c2VJbmZvcm1hY29lcyB9IGZyb20gJ2hvb2tzL3VzZUluZm9ybWFjb2VzJztcclxuXHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBuZXh0QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJuZXh0XCIgLz4sXHJcbiAgcHJldkFycm93OiA8U2xpY2tBcnJvdyBjb250cm9sPVwicHJldlwiIC8+LFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTAwMDAwLFxyXG4gICAgICBzZXR0aW5nczogJ3Vuc2xpY2snLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICB9LFxyXG4gIF0sXHJcbn07XHJcblxyXG5jb25zdCBCbG9nID0gKCkgPT4ge1xyXG4gIGNvbnN0IHsgbm90aWNpYXMgfSA9IHVzZUluZm9ybWFjb2VzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJibG9nXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cclxuICAgICAgICAgIHNsb2dhbj1cIlwiXHJcbiAgICAgICAgICB0aXRsZT1cIsOabHRpbWFzIE5vdMOtY2lhc1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNsaWRlSW5SaWdodFwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgICA8U2xpZGVyIHN4PXtzdHlsZXMuZ3JpZH0gey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAge25vdGljaWFzPy5zbGljZSgwLCAzKS5tYXAoKHBvc3QpID0+IChcclxuICAgICAgICAgICAgICA8QmxvZ1Bvc3Qga2V5PXtwb3N0Lm1uX2NvZGlnb30gcG9zdD17cG9zdH0gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICAgIDxGbGV4IHN4PXt7IGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyB9fT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIHN4PXtzdHlsZXMuYnV0dG9ufSBhcz1cImFcIiBocmVmPVwiL25vdGljaWFzXCI+TWFpcyBOb3TDrWNpYXM8L0J1dHRvbj5cclxuICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQmxvZztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzEyLCBudWxsLCBudWxsLCAxMiwgMTVdLFxyXG4gICAgcGI6IFs2LCBudWxsLCBudWxsLCAxNiwgMTAsIDE0XSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIG1iOiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ2FwOiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgMTBdLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgbXg6IFtudWxsLCBudWxsLCBudWxsLCAtMywgJ3Vuc2V0J10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgxLCAxZnIpJywgbnVsbCwgbnVsbCwgbnVsbCwgJ3JlcGVhdCgzLCAxZnIpJ10sXHJcbiAgICAnLnNsaWNrLWFycm93Jzoge1xyXG4gICAgICBib3R0b206IFtudWxsLCBudWxsLCBudWxsLCAtMTQsICd1bnNldCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbXQ6IFs4XSxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfVxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBDb250YWluZXIsIEJveCwgSGVhZGluZywgQnV0dG9uIH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuaW1wb3J0IEJnU2hhcGUgZnJvbSAnYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnN2Zyc7XHJcbmltcG9ydCBzaGFwZVRvcCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3NoYXBlLXRvcC5wbmcnO1xyXG5pbXBvcnQgc2hhcGVCb3R0b20gZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9zaGFwZS1ib3R0b20ucG5nJztcclxuaW1wb3J0IHsgQWlPdXRsaW5lV2hhdHNBcHAsIEFpT3V0bGluZVBob25lLCBBaU91dGxpbmVJbnN0YWdyYW0sIEFpT3V0bGluZU1haWwsIEFpT3V0bGluZUZhY2Vib29rIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBDYWxsVG9BY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwiY29udGF0b1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50Qm94fT5cclxuICAgICAgICAgIDxIZWFkaW5nIHN4PXtzdHlsZXMuaGVhZGluZ30+XHJcbiAgICAgICAgICAgIFF1ZXJlbW9zIGVudGVuZGVyIG8gcXVlIHZvY8OqIHByZWNpc2FcclxuICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idG5XcmFwcGVyfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd2EubWUvNTU4ODk5MTI2NjIwXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lV2hhdHNBcHAgc2l6ZT1cIjNlbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJ0ZWw6ODgzNjY5MTE0NlwiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZVBob25lIHNpemU9XCIzZW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zZXJ2Y29uamlqb2NhL1wiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgPEFpT3V0bGluZUluc3RhZ3JhbSBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zZXJ2Y29uamlqb2NhXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lRmFjZWJvb2sgc2l6ZT1cIjNlbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJtYWlsdG86dGlAc2VydmNvbjEuY29tXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lTWFpbCBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBDYWxsVG9BY3Rpb247XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICB6SW5kZXg6IDEsXHJcbiAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXHJcbiAgICAgIGJvdHRvbTogMCxcclxuICAgICAgY29udGVudDogYCcnYCxcclxuICAgICAgaGVpZ2h0OiAnNTAlJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGxlZnQ6IDAsXHJcbiAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB6SW5kZXg6ICctMScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBweDogWzAsICcwICFpbXBvcnRhbnQnLCAnMzBweCAhaW1wb3J0YW50J10sXHJcbiAgfSxcclxuICBjb250ZW50Qm94OiB7XHJcbiAgICBwYWRkaW5nOiBbXHJcbiAgICAgICczNXB4IDYwcHggNjBweCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICc0MHB4IDMwcHggNDVweCcsXHJcbiAgICAgICc1NXB4IDMwcHggNjBweCcsXHJcbiAgICAgICc1NXB4IDUwcHggNjBweCcsXHJcbiAgICBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzE4MzY1NicsXHJcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFsnbm9uZScsIG51bGwsIG51bGwsIGB1cmwoJHtCZ1NoYXBlfSlgXSxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnNjAlIGNlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogWycxMjBweCcsIG51bGwsIG51bGwsIG51bGwsICdhdXRvJ10sXHJcbiAgICBib3JkZXJSYWRpdXM6ICc3cHgnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgbnVsbCwgbnVsbCwgJ3JvdyddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ3NwYWNlLWJldHdlZW4nXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIGZvbnRTaXplOiBbMywgNywgOCwgNywgMTFdLFxyXG4gICAgZm9udEZhbWlseTogJ0JyZWUgU2VyaWYsIHNlcmlmJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgbGluZUhlaWdodDogWzEuNCwgMS41M10sXHJcbiAgICBtYXhXaWR0aDogWycxMDAlJywgJzgwJScsIG51bGwsIDM0MCwgJzUwJScsICc0NSUnXSxcclxuICAgIG1iOiBbMTEsIG51bGwsIG51bGwsIDBdLFxyXG4gIH0sXHJcbiAgYnRuV3JhcHBlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnOmJlZm9yZSwgOmFmdGVyJzoge1xyXG4gICAgICBjb250ZW50OiBgJydgLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgd2lkdGg6ICc3M3B4JyxcclxuICAgICAgaGVpZ2h0OiAnMjZweCcsXHJcbiAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICAgIGJhY2tncm91bmRTaXplOiBbJzU1JScsIG51bGwsIG51bGwsICcxMDAlJ10sXHJcbiAgICB9LFxyXG4gICAgJzpiZWZvcmUnOiB7XHJcbiAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3NoYXBlVG9wfSlgLFxyXG4gICAgICB0b3A6ICctMjhweCcsXHJcbiAgICB9LFxyXG4gICAgJzphZnRlcic6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2hhcGVCb3R0b219KWAsXHJcbiAgICAgIGJvdHRvbTogJy0yOHB4JyxcclxuICAgIH0sXHJcbiAgICBidXR0b246IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBwYWRkaW5nOiAwLFxyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBtaW5IZWlnaHQ6IFs0MCwgbnVsbCwgbnVsbCwgNDUsIDYwXSxcclxuICAgICAgcGFkZGluZzogWycwIDI4cHgnLCBudWxsLCBudWxsLCBudWxsLCAnMCA0MHB4J10sXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICcjYTJhZWJiJyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIH0sXHJcbiAgICAgIG10OiAxLFxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBHcmlkLCBCdXR0b24sIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IElvSW9zQ2hlY2ttYXJrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcbmltcG9ydCBzdXBwb3J0IGZyb20gJ2Fzc2V0cy9pbWFnZXMvc3VwcG9ydC5wbmcnO1xyXG5cclxuY29uc3QgbGlzdCA9IFtcclxuICAnTWVkaWNhbCBhbmQgdmlzaW9uJyxcclxuICAnTGlmZSBpbnN1cmFuY2UnLFxyXG4gICdIU0FzIGFuZCBGU0FzJyxcclxuICAnQ29tbXV0ZXIgYmVuZWZpdHMnLFxyXG5dO1xyXG5cclxuY29uc3QgQ3VzdG9tZXJTdXBwb3J0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3N1cHBvcnR9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwic3VwcG9ydFwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgQ3VzdG9tZXIgc3VwcG9ydCBpcyBvdXIgbWFpbiBwcmlvcml0eSB3aXRoIHRoZWlyIGh1bmRyZWQgcGVyY2VudFxyXG4gICAgICAgICAgICAgIHNhdGlzZmFjdGlvbi5cclxuICAgICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLnN1bW1hcnl9PlxyXG4gICAgICAgICAgICAgIEdldCB5b3VyIHRlc3RzIGRlbGl2ZXJlZCBhdCBsZXQgaG9tZSBjb2xsZWN0IHNhbXBsZSBmcm9tIHRoZVxyXG4gICAgICAgICAgICAgIHZpY3Rvcnkgb2YgdGhlIG1hbmFnZW1lbnRzIHRoYXQgc3VwcGxpZXMgYmVzdCBkZXNpZ24gc3lzdGVtXHJcbiAgICAgICAgICAgICAgZ3VpZGVsaW5lcyBldmVyLlxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmxpc3R9IGFzPVwidWxcIj5cclxuICAgICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwibGlcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8SW9Jb3NDaGVja21hcmtDaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogJ3NlY29uZGFyeScsIG1yOiAyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cIjIwcHhcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyU3VwcG9ydDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIDYsIG51bGwsIDE0LCAxNl0sXHJcbiAgICBwYjogW251bGwsIG51bGwsIG51bGwsIDgsIDBdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMTBweCddLFxyXG4gICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgJ2dyaWQnXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uLXJldmVyc2UnLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAnMWZyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzFmcicsXHJcbiAgICAgICc0NzBweCAxZnInLFxyXG4gICAgICAnNjAwcHggMWZyJyxcclxuICAgICAgJzc2MHB4IDFmcicsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgaWxsdXN0cmF0aW9uOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiBbMiwgbnVsbCwgbnVsbCwgMCwgNCwgMF0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDAlJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgbWFyZ2luVG9wOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgLTE2XSxcclxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNTYwLCAnbm9uZSddLFxyXG4gICAgbTogW251bGwsIG51bGwsIG51bGwsICcwIGF1dG8nLCAndW5zZXQnXSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IFs1LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgbnVsbCwgMTFdLFxyXG4gICAgbGluZUhlaWdodDogMS41MyxcclxuICAgIGxldHRlclNwYWNpbmc6IFsnLTAuNXB4JywgbnVsbCwgbnVsbCwgJy0xcHgnXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgc3Bhbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgcHg6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VtbWFyeToge1xyXG4gICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMiwgJzE1cHgnLCAyXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg2LCBudWxsLCBudWxsLCBudWxsLCAxLjg2LCAyLjI1XSxcclxuICAgIG1heFdpZHRoOiA0NzAsXHJcbiAgICBtOiBbbnVsbCwgbnVsbCwgbnVsbCwgJzIwcHggYXV0byAwJywgJzE1cHggMCAwJywgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGdhcDogJzAgMThweCcsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJ3JlcGVhdCgyLCAxNDJweCknLCBudWxsLCBudWxsLCAncmVwZWF0KDIsIDIwMHB4KSddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFtudWxsLCBudWxsLCBudWxsLCAnY2VudGVyJywgJ3Vuc2V0J10sXHJcbiAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgIG10OiBbNCwgbnVsbCwgbnVsbCwgNSwgNCwgNV0sXHJcbiAgICBwOiAwLFxyXG4gICAgbGk6IHtcclxuICAgICAgZm9udFNpemU6IFswLCAxLCBudWxsLCAyLCAnMTVweCcsIDJdLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IFsyLjgxLCBudWxsLCBudWxsLCBudWxsLCAyLjIsIDIuODFdLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IE1hc29ucnkgZnJvbSAncmVhY3QtbWFzb25yeS1jb21wb25lbnQnO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgRmFxSXRlbSBmcm9tICdjb21wb25lbnRzL2NhcmRzL2ZhcS1pdGVtJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBxdWVzOiAnV2hpY2ggZG9tYWluIHNob3VsZCBJIHB1cmNoYXNlPycsXHJcbiAgICBhbnM6IGBXZSBtYWtlIGl0IGVhc3kgdG8gbW92ZSB0byBDb21ldE5pbmUuIFNpbXBseSBjb250YWN0IHVzIGFuZCB3ZSdsbCBtb3ZlIHlvdXIgaG9zdGluZyBhY2NvdW50IGZyb20gYW55IG90aGVyIHByb3ZpZGVyLCByZWdhcmRsZXNzIG9mIHRoZSBjb250cm9sIHBhbmVsLiBJZiBhdCBhbnl0aW1lIHlvdXIgd2Vic2l0ZSBpcyBkb3duIGZvciBtb3JlIHRoYW4gMC4xJSByZXN1bHRgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBxdWVzOiAnV2hhdCBhcmUgc29tZSB0aXBzIHdoZW4gY2hvb3NpbmcgYSBuYW1lPycsXHJcbiAgICBhbnM6IGBHZXQgeW91ciB3ZWJzaXRlIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gbWFuYWdlbWVudCBuZXdzLiBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgdGhlIGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy4gR2V0IHlvdXIgYmxvb2QgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgcXVlczogJ1doYXQgaWYgSSBuZWVkIGhlbHAgY2hvb3NpbmcgdGhlIHJpZ2h0IGRvbWFpbj8nLFxyXG4gICAgYW5zOiBgQ3JlYXRlIGEgaHViIGZvciBjcm9zcy1mdW5jdGlvbmFsIHdvcmsgdGhhdCBhbHNvIHdvcmtzIHdpdGggYWxsIHlvdXIgb3RoZXIgdG9vbHMuIENlbnRyYWxpemUgYW5kIHN0YW5kYXJkaXplIGNvbW11bmljYXRpb24gd2l0aCBNaXJvLiBBbGwgcHJlbWl1bSBmdW5jdGlvbmFsIGFyZSBpbmNsdWRlZCBoZXJlIHdpdGggdXBkYXRlcy5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDQsXHJcbiAgICBxdWVzOiAnQ2FuIEkgdXBncmFkZSBvciBkb3duZ3JhZGUgbXkgd2ViIGhvc3RpbmcgcGxhbicsXHJcbiAgICBhbnM6IGBUaGUgcHJpY2luZyBtYWRlIG1lIGEgbGl0dGxlIGhlc2l0YW50IGF0IGZpcnN0IGJ1dCBJIGhhdmUgYmVlbiBwbGVhc2FudGx5IHN1cnByaXNlZCBieSB0aGUgbGV2ZWwgb2YgY2FyZSBnaXZlbiBieSBDb21ldE5pbmUuYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgcXVlczogJ0hvdyBkbyBJIHVwZ3JhZGUgdGhlIHN0b3JhZ2UgY2FwYWNpdHkgb2YgbXkgaG9zdGluZyBwbGFuPycsXHJcbiAgICBhbnM6IGBTdG9wIHlvdXIgdmlld2VycyBmcm9tIGdldHRpbmcgZGlzdHJhY3RlZC4gUHVibGlzaCB2aWRlb3MgdG8geW91ciBvd24gQ2hhbm5lbCBhbmQgcmVzdCBlYXN5IGtub3dpbmcgdmlld2VycyB3b27igJl0IGJlIGFubm95ZWQgYnkgYWRzIG9yIHB1bGxlZCBkb3duIGEgcmFiYml0IGhvbGUgb2YgdW5yZWxhdGVkIHZpZGVvcy5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBxdWVzOiAnV2hhdCBpcyBpbiBJbk1vdGlvbiBIb3N0aW5n4oCZcyB1cHRpbWUgcmF0ZT8nLFxyXG4gICAgYW5zOiBgRGVzaWduZWQgd2l0aCBiZWdpbm5lcnMgaW4gbWluZCBhbmQgcGFja2VkIHdpdGggYWR2YW5jZWQgZmVhdHVyZXMgZGV2ZWxvcGVycyB3aWxsIGxvdmUuIFN0YXJ0IHdpdGggYSBxdWljayBhbmQgc2ltcGxlIGluc3RhbGxgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDcsXHJcbiAgICBxdWVzOiAnTGVhcm4gZnJvbSBjb21tdW5pdHkgb24gQnJhbmR3YWdvbicsXHJcbiAgICBhbnM6IGBCcmlhbiBIYWxsaWdhbiBrbm93cyB0aGF0IHlvdSBuZWVkIG1vcmUgdGhhbiBhIGdyZWF0IHByb2R1Y3QgdG8gaGF2ZSBhIGdyZWF0IGJyYW5kLiBIZWFyIGhpcyB0aG91Z2h0cyAmIHNjb3JlIGEgcGVlayBhdCBvdXIgd2Fnb24uYCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgbWFzb25yeU9wdGlvbnMgPSB7IG9yaWdpblRvcDogdHJ1ZSB9O1xyXG5cclxuY29uc3QgRmFxID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiZmFxXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cclxuICAgICAgICAgIHNsb2dhbj1cIkdldCB5b3VycyBxdWVzdGlvbiBhbnN3ZXJcIlxyXG4gICAgICAgICAgdGl0bGU9XCJGcmVxdWFudGx5IGFza2VkIHF1ZXN0aW9uXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxNYXNvbnJ5IG9wdGlvbnM9e21hc29ucnlPcHRpb25zfSBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiA8RmFxSXRlbSBrZXk9e2l0ZW0uaWR9IGZhcT17aXRlbX0gY2xhc3NOYW1lPVwiZmFxLWl0ZW1cIiAvPjtcclxuICAgICAgICAgIH0pfVxyXG4gICAgICAgIDwvTWFzb25yeT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmFxO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDE0XSxcclxuICAgIHBiOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDZdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgbXg6IFtudWxsLCBudWxsLCBudWxsLCAtNiwgLTgsICd1bnNldCddLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgQWNjb3JkaW9uIGZyb20gJ2NvbXBvbmVudHMvYWNjb3JkaW9uL2FjY29yZGlvbic7XHJcbmltcG9ydCBxdWVtU29tb3MgZnJvbSAnYXNzZXRzL2ltYWdlcy9xdWVtLXNvbW9zLnBuZyc7XHJcbmltcG9ydCBTY3JvbGxBbmltYXRpb24gZnJvbSAncmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGwnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogJ01pc3PDo28nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBQcmVzdGFyIHNlcnZpw6dvcyBjb250w6FiZWlzIGUgYXNzZXNzb3JpYSBkZSBxdWFsaWRhZGUsIGJ1c2NhbmRvIGF0ZW5kZXIgYXMgbmVjZXNzaWRhZGVzIGRlIG5vc3NvcyBjbGllbnRlcyBlIHBhcmNlaXJvcywgYWdyZWdhbmRvIHZhbG9yZXMsIHNlZ3VyYW7Dp2EgZSB0cmFucXVpbGlkYWRlIG5vcyBzZXVzIGVtcHJlZW5kaW1lbnRvcyBlIGp1bnRvcyBzZXJtb3MgaW5zdHJ1bWVudG8gZGUgcmVmZXLDqm5jaWEgbmEgdHJhbnNmb3JtYcOnw6NvIGVjb27DtG1pY2EgZSBzb2NpYWwgbmEgcmVnacOjbywgY29tIHZpc2liaWxpZGFkZSBuYWNpb25hbCBlIGludGVybmFjaW9uYWwuXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSxcclxuICB9LFxyXG4gIHtcclxuICAgIHRpdGxlOiAnVmlzw6NvJyxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgU2VyIHJlZmVyw6puY2lhIGRlIGV4Y2Vsw6puY2lhIGVtIHNlcnZpw6dvcyBkZSBjb250YWJpbGlkYWRlIGUgc2UgbWFudGVyIGVudHJlIG9zIHByaW5jaXBhaXMgZGEgcmVnacOjby5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IGBWYWxvcmVzYCxcclxuICAgIGNvbnRlbnRzOiAoXHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgw4l0aWNhLCBxdWFsaWRhZGUsIGNvbXByb21ldGltZW50bywgc2VyaWVkYWRlLCBnZXN0w6NvIGNvbXBhcnRpbGhhZGEsIHJlc3BvbnNhYmlsaWRhZGUgc29jaW9lY29uw7RtaWNhIGUgdHJhZGnDp8Ojby5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBQcmVtaXVtRmVhdHVyZSA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBpZD1cInF1ZW0tc29tb3NcIiBhcz1cInNlY3Rpb25cIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgYXM9XCJmaWd1cmVcIlxyXG4gICAgICAgIHN4PXt7IC4uLnN0eWxlcy5pbGx1c3RyYXRpb24sIGJhY2tncm91bmQ6IGB1cmwoJHtxdWVtU29tb3N9KSBuby1yZXBlYXRgIH19XHJcbiAgICAgIC8+XHJcbiAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiYm91bmNlSW5SaWdodFwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuYWNjb3JkaW9uR3JvdXB9PlxyXG4gICAgICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICAgICAgc2xvZ2FuPVwiU2Vydmljb24gQ29udGFiaWxpZGFkZVwiXHJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDb25oZcOnYSB1bSBwb3VxdWluaG8gc29icmUgbm9zc2EgaGlzdMOzcmlhXCJcclxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIlNvbW9zIHVtYSBlbXByZXNhIHZvbHRhZGEgcGFyYSBvIHJhbW8gY29udMOhYmlsLCBmaXNjYWwgZSB0cmFiYWxoaXN0YSwgY29tcG9zdGEgcG9yIHByb2Zpc3Npb25haXMsIHByZXN0YW5kbyBzZXJ2acOnb3MgZGUgcXVhbGlkYWRlIGUgZWZpY2nDqm5jaWEgY29tIHVtIHNpc3RlbWEgb3BlcmFjaW9uYWwgZGUgdHJhYmFsaG8gdG90YWxtZW50ZSBpbmZvcm1hdGl6YWRvLiBObyBtZXJjYWRvIGRlc2RlIEZldmVyZWlybyBkZSAyMDAwLCBlc3RhbW9zIHNlbXByZSBidXNjYW5kbyBvcyByZXF1aXNpdG9zIHBhcmEgYXRlbmRlciBhcyBleHBlY3RhdGl2YXMgZG9zIG5vc3NvcyBjbGllbnRlcy5cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uIGl0ZW1zPXtkYXRhfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByZW1pdW1GZWF0dXJlO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHBiOiBbMTIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDE0LCAxOF0sXHJcbiAgICBwdDogWzYsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDYsIDZdLFxyXG4gICAgLy8gbWFyZ2luQm90dG9tOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJy04NXB4J10sXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMCxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2ZsZXgtc3RhcnQnXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbiAgaWxsdXN0cmF0aW9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICc2MiUnLCAnNTAlJywgJzY2JScsICc2MiUnXSxcclxuICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDE2MDFweCknOiB7XHJcbiAgICAgIGJhY2tncm91bmRTaXplOiAnNjAlJyxcclxuICAgICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnYm90dG9tIGxlZnQnLFxyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogW1xyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAnLTgwcHggMCcsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcwIDAnLFxyXG4gICAgICAnLTE0MHB4IDBweCcsXHJcbiAgICBdLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgZGlzcGxheTogWydub25lJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBhY2NvcmRpb25Hcm91cDoge1xyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1MjAsIDYxMCwgNDEwLCBudWxsLCA0NTAsIDQxMF0sXHJcbiAgICBtOiBbbnVsbCwgbnVsbCwgbnVsbCwgJzAgYXV0bycsIG51bGwsICcwJywgbnVsbF0sXHJcbiAgICAvLyBtYXJnaW5MZWZ0OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2F1dG8nLCBudWxsLCAxMCwgMTIsIDE2XSxcclxuICAgIC8vIG1hcmdpblJpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2F1dG8nLCBudWxsLCAndW5zZXQnXSxcclxuICAgIC8vIHB4OiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNDQwLCA0NTAsICdub25lJ10sXHJcbiAgICBtYjogW251bGwsIG51bGwsIG51bGwsIG51bGwsIDYsIDQsIDZdLFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFNpemU6IFs0LCBudWxsLCBudWxsLCA4LCAxMCwgOCwgMTJdLFxyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuNSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgICBtYXhXaWR0aDogWzI1MCwgbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgICAgbWFyZ2luOiBbJzAgYXV0bycsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG4gICAgICBtdDogMTJcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgUHJpY2VUYWJsZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL3ByaWNlLXRhYmxlJztcclxuaW1wb3J0IFNsaWNrQXJyb3cgZnJvbSAnY29tcG9uZW50cy9zbGljay1hcnJvdyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJ1xyXG5pbXBvcnQgSW1hZ2VBZ2VuZGEgZnJvbSAnYXNzZXRzL2ltYWdlcy9hZ2VuZGEzLnBuZydcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCB7IHVzZUluZm9ybWFjb2VzIH0gZnJvbSAnaG9va3MvdXNlSW5mb3JtYWNvZXMnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHRpdGxlOiAnQWdlbmRhIFRyaWJ1dMOhcmlhJyxcclxuICAgIHN1YnRpdGxlOiAnMDIvMDcvMjAyMScsXHJcbiAgICAvLyBwcmljZTogMjUuOTksXHJcbiAgICBpc1JlY29tbWVuZGVkOiBmYWxzZSxcclxuICAgIC8vIGJ1dHRvblRleHQ6ICdTdGFydCBGcmVlIFRyaWFsJyxcclxuICAgIGZlYXR1cmVzOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogJ0lDTVMvU0NBTkMgfCBDb250cmlidWludGUgcXVlIHRpdmVyIHJlY2ViaWRvIG8gY29tYnVzdMOtdmVsIGRlIG91dHJvIGNvbnRyaWJ1aW50ZSBzdWJzdGl0dcOtZG8uJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBgSUNNUy9TQ0FOQyB8IEltcG9ydGFkb3IuYCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHRpdGxlOiAnT2JyaWdhw6fDtWVzIEZpc2NhaXMnLFxyXG4gICAgc3VidGl0bGU6ICdGaXF1ZSBzZW1wcmUgaW5mb3JtYWRvIScsXHJcbiAgICBwcmljZTogMjkuOTksXHJcbiAgICBpc1JlY29tbWVuZGVkOiB0cnVlLFxyXG4gICAgYnV0dG9uVGV4dDogJ1N0YXJ0IEZyZWUgVHJpYWwnLFxyXG4gICAgZmVhdHVyZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiAnT2JyaWdhw6fDtWVzIEZpc2NhaXMg4oCTIEVzdGFkbyBkZSBNaW5hcyBHZXJhaXMgLSBKdWxoby8yMDIxJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBgT2JyaWdhw6fDtWVzIEZpc2NhaXMg4oCTIEVzdGFkbyBkZSBNaW5hcyBHZXJhaXMgLSBKdW5oby8yMDIxYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBgT2JyaWdhw6fDtWVzIEZpc2NhaXMg4oCTIEVzdGFkbyBkZSBNaW5hcyBHZXJhaXMgLSBNYWlvLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEFicmlsLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIE1hcsOnby8yMDIxYCxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiBgT2JyaWdhw6fDtWVzIEZpc2NhaXMg4oCTIEVzdGFkbyBkZSBNaW5hcyBHZXJhaXMgLSBGZXZlcmVpcm8vMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICBdLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBzZXR0aW5ncyA9IHtcclxuICBzbGlkZXNUb1Nob3c6IDMsXHJcbiAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgc3BlZWQ6IDUwMCxcclxuICBuZXh0QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJuZXh0XCIgLz4sXHJcbiAgcHJldkFycm93OiA8U2xpY2tBcnJvdyBjb250cm9sPVwicHJldlwiIC8+LFxyXG4gIHJlc3BvbnNpdmU6IFtcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogMTAwMDAwLFxyXG4gICAgICBzZXR0aW5nczogJ3Vuc2xpY2snLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgYnJlYWtwb2ludDogNzY4LFxyXG4gICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgIGluZmluaXRlOiBmYWxzZSxcclxuICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXHJcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjcsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IFByaWNpbmcgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBvYnJpZ2Fjb2VzLCBhZ2VuZGEgfSA9IHVzZUluZm9ybWFjb2VzKClcclxuICBjb25zdCBkYXRhID0gbmV3IERhdGUoKVxyXG4gIGNvbnN0IGRpYSA9IFN0cmluZyhkYXRhLmdldERhdGUoKSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBtZXMgPSBTdHJpbmcoZGF0YS5nZXRNb250aCgpICsgMSkucGFkU3RhcnQoMiwgJzAnKTtcclxuICBjb25zdCBhbm8gPSBkYXRhLmdldEZ1bGxZZWFyKCk7XHJcbiAgY29uc3QgZGF0YUF0dWFsID0gYCR7ZGlhfS8ke21lc30vJHthbm99YFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImluZm9ybWFjb2VzXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJzbGlkZUluTGVmdFwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgICBzbG9nYW49XCJBdHVhbGl6ZS1zZVwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiQ29tcG9zdG8gcG9yIHVtIGNvbmp1bnRvIGRlIGluZm9ybWHDp8O1ZXMgcXVlIHPDo28gYXR1YWxpemFkYXMgZGlhcmlhbWVudGUgcGVsYSBub3NzYSBlcXVpcGUuXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8U2xpZGVyIHN4PXtzdHlsZXMuZ3JpZH0gey4uLnNldHRpbmdzfT5cclxuICAgICAgICAgICAgICA8UHJpY2VUYWJsZSBpdGVtcz17YWdlbmRhfSBpc1JlY29tbWVuZGVkPXtmYWxzZX0gdGl0bGU9XCJBZ2VuZGEgVHJpYnV0w6FyaWFcIiBzdWJ0aXRsZT17ZGF0YUF0dWFsfSAvPlxyXG4gICAgICAgICAgICAgIDxQcmljZVRhYmxlIGl0ZW1zPXtvYnJpZ2Fjb2VzLnNhb1BhdWxvfSBpc1JlY29tbWVuZGVkPXt0cnVlfSB0aXRsZT1cIk9icmlnYcOnw7VlcyBGaXNjYWlzXCIgc3VidGl0bGU9XCJGaXF1ZSBzZW1wcmUgaW5mb3JtYWRvXCIgbGluaz1cIm9icmlnYWNvZXNcIiAvPlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzeD17c3R5bGVzLmltYWdlfSBzcmM9e0ltYWdlQWdlbmRhfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICA8L1NsaWRlcj5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2luZztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzZdLFxyXG4gICAgcGI6IFsxMiwgbnVsbCwgbnVsbCwgMTUsIDE3XSxcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgcGw6IDAsXHJcbiAgICBwcjogMCxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIG1iOiBbNywgbnVsbCwgbnVsbCwgbnVsbCwgMTQsIG51bGwsIDE4XSxcclxuICAgIHB4OiBbNiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIDhdLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGdhcDogW251bGwsIG51bGwsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsIG51bGwsICdncmlkJ10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ3JlcGVhdCgzLCAxZnIpJ10sXHJcbiAgICBhbGlnbkl0ZW1zOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgtZW5kJ10sXHJcbiAgICAnLnNsaWNrLXNsaWRlID4gZGl2Jzoge1xyXG4gICAgICBwOiBbJzM1cHgnLCAnNDBweCcsIG51bGwsICczNXB4IDIzcHggMjNweCcsIDBdLFxyXG4gICAgfSxcclxuICAgICcuc2xpY2stYXJyb3cnOiB7XHJcbiAgICAgIGJvdHRvbTogLTUsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIGFsaWduU2VsZjogJ2NlbnRlcicsXHJcbiAgfVxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcclxuaW1wb3J0IFNlcnZpY2UgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9zZXJ2aWNlJztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCB7IHVzZUluZm9ybWFjb2VzIH0gZnJvbSAnaG9va3MvdXNlSW5mb3JtYWNvZXMnO1xyXG5cclxuY29uc3QgU2VydmljZXMgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBjb3RhY29lcyB9ID0gdXNlSW5mb3JtYWNvZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInNlcnZpY2VzXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJmYWRlSW5cIiBhbmltYXRlT3V0PVwiZmFkZU91dFwiPlxyXG4gICAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICAgIHNsb2dhbj1cIlwiXHJcbiAgICAgICAgICAgIHRpdGxlPVwiSW5kaWNhZG9yZXMgRWNvbsO0bWljb3NcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAge2NvdGFjb2VzPy5tYXAoKGNvdGFjYW8pID0+IChcclxuICAgICAgICAgICAgICA8U2VydmljZSBrZXk9e2NvdGFjYW8uY290ZF9jb2RpZ299IGNvdGFjYW89e2NvdGFjYW99IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlcnZpY2VzO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbOCwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDEyXSxcclxuICAgIHBiOiBbMTIsIG51bGwsIG51bGwsIG51bGwsIG51bGwsIDE1XSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGdhcDogWzMsIG51bGwsIG51bGwsIDRdLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsIDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDQsIDFmciknLFxyXG4gICAgICAncmVwZWF0KDQsIDMwMHB4KScsXHJcbiAgICBdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuaW1wb3J0IHN1cHBvcnRUZWFtIGZyb20gJ2Fzc2V0cy9pbWFnZXMvc3VwcG9ydC10ZWFtLnBuZyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdXBwb3J0KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8c2VjdGlvbiBpZD1cInN1cHBvcnRcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgdGl0bGU9XCJNZWV0IG91ciBzdXBwb3J0IHRlYW0gd2hvIGFsd2F5cyB3b3JrIGhhcmRseSBiZWhpbmQgdGhlIHNjZW5lc1wiXHJcbiAgICAgICAgICBkZXNjcmlwdGlvbj1cIkZvY3VzIG9ubHkgb24gdGhlIG1lYW5pbmcsIHdlIHRha2UgY2FyZSBvZiB0aGUgZGVzaWduLiBBcyBzb29uIGFzIHRoZSBtZWV0aW5nIGVuZCB5b3UgY2FuIGV4cG9ydCBpbiBvbmUgY2xpY2sgaW50byB5b3VyIHByZWZlcnJlZC5cIlxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxCb3ggYXM9XCJmaWd1cmVcIiBzeD17c3R5bGVzLnRodW1iV3JhcHBlcn0+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPXtzdXBwb3J0VGVhbX0gbG9hZGluZz1cImxhenlcIiBhbHQ9XCJTdXBwb3J0IFRlYW1cIiAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTRdLFxyXG4gICAgcGI6IFswXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIG1iOiBbOCwgbnVsbCwgbnVsbCwgMTAsIG51bGwsIDE1XSxcclxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNTAwLCA2MDAsIG51bGxdLFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBmb250U2l6ZTogWzMsIG51bGwsIG51bGwsIDgsIDExXSxcclxuICAgICAgbGluZUhlaWdodDogMS40LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBtdDogWzNdLFxyXG4gICAgICBtYXhXaWR0aDogWzUwMF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGh1bWJXcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtYjogJy0xcHgnLFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIGhlaWdodDogWzE4MCwgJ2F1dG8nXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgZHluYW1pYyBmcm9tICduZXh0L2R5bmFtaWMnO1xyXG5jb25zdCBUZXN0aW1vbmlhbCA9IGR5bmFtaWMoKCkgPT4gaW1wb3J0KCdjb21wb25lbnRzL2NhcmRzL3Rlc3RpbW9uaWFsJyksIHtcclxuICBzc3I6IGZhbHNlLFxyXG59KTtcclxuaW1wb3J0IGF1dGhvciBmcm9tICdhc3NldHMvaW1hZ2VzL3Rlc3RpbW9uaWFsLnBuZyc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgYXZhdGFyOiBhdXRob3IsXHJcbiAgICBhdXRob3JOYW1lOiAnTWVsaW5hIFBldHRlbmRvcmZlcicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0NFTyBvZiBVYmVyJyxcclxuICAgIHRleHQ6IGBCZXN0IGhvc3QgSSd2ZSBoYWQgaW4gMTAgeWVhcnMuIFNtb290aCBtaWdyYXRpb24sIG5vIHN0cmVzcywgYW5kIGZyaWVuZGx5IHN1cHBvcnQgb25lIGNsaWNrIGF3YXkuIEknbSB2ZXJ5IGhhcHB5IGFuZCByZWNvbW1lbmQgdGhlaXIgc2VydmljZXNgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBhdmF0YXI6IGF1dGhvcixcclxuICAgIGF1dGhvck5hbWU6ICdNZWxpbmEgUGV0dGVuZG9yZmVyJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIG9mIEdvb2dsZScsXHJcbiAgICB0ZXh0OiBgQmVzdCBob3N0IEkndmUgaGFkIGluIDEwIHllYXJzLiBTbW9vdGggbWlncmF0aW9uLCBubyBzdHJlc3MsIGFuZCBmcmllbmRseSBzdXBwb3J0IG9uZSBjbGljayBhd2F5LiBJJ20gdmVyeSBoYXBweSBhbmQgcmVjb21tZW5kIHRoZWlyIHNlcnZpY2VzYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAzLFxyXG4gICAgYXZhdGFyOiBhdXRob3IsXHJcbiAgICBhdXRob3JOYW1lOiAnTWVsaW5hIFBldHRlbmRvcmZlcicsXHJcbiAgICBkZXNpZ25hdGlvbjogJ0NFTyBvZiBNaWNyb3NvZnQnLFxyXG4gICAgdGV4dDogYEJlc3QgaG9zdCBJJ3ZlIGhhZCBpbiAxMCB5ZWFycy4gU21vb3RoIG1pZ3JhdGlvbiwgbm8gc3RyZXNzLCBhbmQgZnJpZW5kbHkgc3VwcG9ydCBvbmUgY2xpY2sgYXdheS4gSSdtIHZlcnkgaGFwcHkgYW5kIHJlY29tbWVuZCB0aGVpciBzZXJ2aWNlc2AsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFscyA9ICgpID0+IHtcclxuICBjb25zdCBzZXR0aW5ncyA9IHtcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBkb3RzOiB0cnVlLFxyXG4gICAgZmFkZTogdHJ1ZSxcclxuICAgIGluZmluaXRlOiB0cnVlLFxyXG4gICAgc3BlZWQ6IDUwMCxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJ0ZXN0aW1vbmlhbHNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTbGlkZXIgey4uLnNldHRpbmdzfSBzeD17c3R5bGVzLmNhcm91c2VsfT5cclxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8VGVzdGltb25pYWwga2V5PXtpdGVtLmlkfSB0ZXN0aW1vbmlhbD17aXRlbX0gLz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs2LCBudWxsLCBudWxsLCAwXSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGMEYzRjgnLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2N3B4KSc6IHtcclxuICAgICAgJzpiZWZvcmUnOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgIGNvbnRlbnQ6IGAnJ2AsXHJcbiAgICAgICAgbWluSGVpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgMzAsIDcwLCAxMDBdLFxyXG4gICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICAgIHJpZ2h0OiAwLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcm91c2VsOiB7XHJcbiAgICAnLnNsaWNrLWRvdHMnOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBtYXJnaW46IDAsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIGJvdHRvbTogWzYsIG51bGwsIG51bGwsIDgsIDEwXSxcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICBsZWZ0OiBbXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgMTRweCknLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICAnY2FsYyg1MCUgKyA2MnB4KScsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgMTRweCknLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDYwcHgpJyxcclxuICAgICAgICAnY2FsYyg1MCUgKyAxNHB4KScsXHJcbiAgICAgIF0sXHJcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknLFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHJnYmEoJyM1QjJCOUQnLCAwLjIpLFxyXG4gICAgICAgIGJvcmRlcjogMCxcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgICAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgICAgICBoZWlnaHQ6IFszLCBudWxsLCBudWxsLCA2XSxcclxuICAgICAgICB3aWR0aDogWzEwLCBudWxsLCBudWxsLCAxNV0sXHJcbiAgICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgICAgIHRleHRJbmRlbnQ6ICctOTk5OWVtJyxcclxuICAgICAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxyXG4gICAgICB9LFxyXG4gICAgICAnLnNsaWNrLWFjdGl2ZSBidXR0b24nOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgd2lkdGg6IFsyMCwgbnVsbCwgbnVsbCwgMzBdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGxpOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgJysgbGknOiB7XHJcbiAgICAgICAgbWw6ICc2cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcclxuaW1wb3J0IEZlYXR1cmUgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9mZWF0dXJlJztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcblxyXG5pbXBvcnQgaWNvbjEgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8xLnBuZyc7XHJcbmltcG9ydCBpY29uMiBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzIucG5nJztcclxuaW1wb3J0IGljb24zIGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvMy5wbmcnO1xyXG5pbXBvcnQgaWNvbjQgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy80LnBuZyc7XHJcbmltcG9ydCBpY29uNSBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzUucG5nJztcclxuaW1wb3J0IGljb242IGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvNi5wbmcnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIGljb246IGljb24xLFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gZGUgUmVnaXN0cm9zJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgU2VqYSBwYXJhIHF1ZW0gZXN0w6EgaW5pY2lhbmRvIHVtIG5vdm8gbmVnw7NjaW8gb3UgcGFyYSBxdWVtIHNvbWVudGUgcHJvY3VyYSBhbHRlcmFyIHN1YSBlbXByZXNhIGrDoSByZWdpc3RyYWRhLCBvZmVyZWNlbW9zIGFwb2lvIGNvbnN0YW50ZSwgZWxhYm9yYW5kbyBhIGRvY3VtZW50YcOnw6NvIHBhcmEgcmVnaXN0cm8gZW0gdG9kb3Mgb3Mgw7NyZ8Ojb3MgZSByZXBhcnRpw6fDtWVzIG5lY2Vzc8OhcmlhcyBjb20gYWdpbGlkYWRlLCBwYXJhIHF1ZSBvIGVtcHJlc8OhcmlvIHBvc3NhIHJhcGlkYW1lbnRlIG9idGVyIG8gcmVnaXN0cm8sIHNlbSBuZWNlc3NpZGFkZSBkZSBhdHJhc28gbm8gaW7DrWNpbyBkYXMgYXRpdmlkYWRlcy5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDIsXHJcbiAgICBpY29uOiBpY29uMixcclxuICAgIHRpdGxlOiAnRGVwYXJ0YW1lbnRvIFRyYWJhbGhpc3RhJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgT3JpZW50YcOnw6NvIGUgY29udHJvbGUgZGEgYXBsaWNhw6fDo28gZG9zIHByZWNlaXRvcyBkYSBjb25zb2xpZGHDp8OjbyBkYXMgbGVpcyBkbyB0cmFiYWxobywg4oCcUElT4oCdLCDigJxGR1RT4oCdIGUgb3V0cm9zIGFwbGljw6F2ZWlzIMOgcyByZWxhw6fDtWVzIGRlIGVtcHJlZ287IE1hbnV0ZW7Dp8OjbyBkb3MgcmVnaXN0cm9zIGRlIGVtcHJlZ2Fkb3MgZSBzZXJ2acOnb3MgY29ycmVsYXRvczsgRWxhYm9yYcOnw6NvIGRhIGZvbGhhIGRlIHBhZ2FtZW50byBkb3MgZW1wcmVnYWRvcyBlIGRlIFByw7MtTGFib3JlLCBiZW0gY29tbyBkYXMgZ3VpYXMgZGUgcmVjb2xoaW1lbnRvIGRvcyBlbmNhcmdvcyBzb2NpYWlzIGUgdHJpYnV0b3MgYWZpbnM7IEF0ZW5kaW1lbnRvIGRhcyBkZW1haXMgZXhpZ8OqbmNpYXMgcHJldmlzdGFzIG5hIGxlZ2lzbGHDp8Ojby5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBpY29uOiBpY29uMyxcclxuICAgIHRpdGxlOiAnRGVwYXJ0YW1lbnRvIEZpc2NhbCcsXHJcbiAgICBkZXNjcmlwdGlvbjogYE9yaWVudGHDp8OjbyBlIGNvbnRyb2xlIGRhIGFwbGljYcOnw6NvIGRvcyBkaXNwb3NpdGl2b3MgbGVnYWlzIHZpZ2VudGVzLCBmZWRlcmFpcywgZXN0YWR1YWlzIG91IG11bmljaXBhaXM7IEVzY3JpdHVyYcOnw7VlcyBkb3MgcmVnaXN0cm9zIGZpc2NhaXMgZG8gSVBJLCBJQ01TLCBJU1MgZSBlbGFib3Jhw6fDo28gZGFzIGd1aWFzIGRlIGluZm9ybWHDp8OjbyBlIGRlIHJlY29saGltZW50byBkb3MgdHJpYnV0b3MgZGV2aWRvczsgQXRlbmRpbWVudG8gZGFzIGRlbWFpcyBleGlnw6puY2lhcyBwcmV2aXN0YXMgZW0gYXRvcyBub3JtYXRpdm9zLCBiZW0gY29tbyBkZSBldmVudHVhaXMgcHJvY2VkaW1lbnRvcyBkZSBmaXNjYWxpemHDp8OjbyB0cmlidXRhcmlhLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIGljb246IGljb240LFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gQ29udMOhYmlsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgQ2xhc3NpZmljYcOnw6NvIGUgZXNjcml0dXJhw6fDo28gZGEgY29udGFiaWxpZGFkZSBkZSBhY29yZG8gY29tIGFzIG5vcm1hcyBlIHByaW5jw61waW9zIGNvbnTDoWJlaXMgdmlnZW50ZXMuIEFwdXJhw6fDo28gZGUgYmFsYW5jZXRlczsgRWxhYm9yYcOnw6NvIGRvIGJhbGFuw6dvIGFudWFsIGUgZGVtb25zdHJhdGl2b3MgZGUgcmVzdWx0YWRvO2AsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNSxcclxuICAgIGljb246IGljb241LFxyXG4gICAgdGl0bGU6ICdJbXBvc3RvIGRlIFJlbmRhIFBGL1BKJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgT3JpZW50YcOnw6NvIGUgY29udHJvbGUgZGUgYXBsaWNhw6fDo28gZG9zIGRpc3Bvc2l0aXZvcyBsZWdhaXMgdmlnZW50ZXM7IEVsYWJvcmHDp8OjbyBkYSBkZWNsYXJhw6fDo28gYW51YWwgZGUgcmVuZGltZW50b3MgZSBkb2N1bWVudG9zIGNvcnJlbGF0b3M7IEF0ZW5kaW1lbnRvIGRhcyBkZW1haXMgZXhpZ8OqbmNpYXMgcHJldmlzdGFzIGVtIGF0b3Mgbm9ybWF0aXZvcywgYmVtIGNvbW8gZGUgZXZlbnR1YWlzIHByb2NlZGltZW50b3MgZGUgZmlzY2FsaXphw6fDo28uYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA2LFxyXG4gICAgaWNvbjogaWNvbjYsXHJcbiAgICB0aXRsZTogJ1BsYW5lamFtZW50byBUcmlidXTDoXJpbycsXHJcbiAgICBkZXNjcmlwdGlvbjogYEVsYWJvcmHDp8OjbyBkZSBwbGFubyBwYXJhIGVjb25vbWlhIFRyaWJ1dMOhcmlhOyBFc3R1ZG8gcGFyYSBhIGNvbXBlbnNhw6fDo28gZGUgdHJpYnV0b3MgaW5jb25zdGl0dWNpb25haXM7IEVzdHVkbywgYXZhbGlhw6fDo28gZSBlbnF1YWRyYW1lbnRvIGRhIGVtcHJlc2EgZGlhbnRlIGRhIGxlZ2lzbGHDp8OjbyBGaXNjYWwgcGFyYSBvIG1lbGhvciBhcHJvdmVpdGFtZW50byBuYSBkZXRlcm1pbmHDp8OjbyBkZSBpbXBvc3RvcyBlIGNvbnRyaWJ1acOnw7Vlcy5gLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBVbHRpbWF0ZUZlYXR1cmVzID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwic2Vydmljb3NcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgc2xvZ2FuPVwiU2VydmNvbiBDb250YWJpbGlkYWRlXCJcclxuICAgICAgICAgIHRpdGxlPVwiw4FyZWFzIGRlIEF0dWHDp8Ojb1wiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZmVhdHVyZXN9PlxyXG4gICAgICAgICAge2RhdGE/Lm1hcCgoaXRlbSkgPT4gKFxyXG4gICAgICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImJvdW5jZUluRG93blwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgICAgICAgPEZlYXR1cmUgY2xhc3NOYW1lPVwiZmVhdHVyZS1pdGVtXCIga2V5PXtpdGVtLmlkfSBkYXRhPXtpdGVtfSAvPlxyXG4gICAgICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBVbHRpbWF0ZUZlYXR1cmVzO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyNGOUZBRkMnLFxyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTRdLFxyXG4gICAgcGI6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxNSwgMTYsIDE5XSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWFyZ2luQm90dG9tOiBbNTAsIDUwLCA4MF0sXHJcbiAgICBwOiB7XHJcbiAgICAgIG1heFdpZHRoOiA0OTAsXHJcbiAgICAgIG1hcmdpbjogWycxMHB4IGF1dG8gMCddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZlYXR1cmVzOiB7XHJcbiAgICBnYXA6IFszNSwgbnVsbCwgbnVsbCwgNDAsICc1MHB4IDMwcHgnLCA2MF0sXHJcbiAgICBkaXNwbGF5OiBbJ2dyaWQnLCAnZ3JpZCddLFxyXG4gICAgbWF4V2lkdGg6IDEwMzAsXHJcbiAgICBtYXJnaW46ICcwIGF1dG8nLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDEsIDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxyXG4gICAgICAncmVwZWF0KDMsIDFmciknLFxyXG4gICAgXSxcclxuICAgICcuZmVhdHVyZS1pdGVtJzoge1xyXG4gICAgICBkaXNwbGF5OiBbJ2Jsb2NrJ10sXHJcbiAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgIG1heFdpZHRoOiBbMjkwLCAyNjAsIG51bGwsIDI4MCwgJ25vbmUnXSxcclxuICAgICAgbTogWycwIGF1dG8nLCAnMCBhdXRvJywgJzAgYXV0bycsICcwIGF1dG8nLCAnMCBhdXRvJywgMF0sXHJcbiAgICAgIGZpZ3VyZToge1xyXG4gICAgICAgIG06IFsnMCAwIDIwcHgnXSxcclxuICAgICAgfSxcclxuICAgICAgaDQ6IHtcclxuICAgICAgICBtYjogWycxNXB4JywgJzE1cHgnLCAnMjBweCddLFxyXG4gICAgICB9LFxyXG4gICAgICBwOiB7XHJcbiAgICAgICAgZm9udFNpemU6IFsnMTRweCcsICcxNHB4JywgJzE2cHgnLCAnMTZweCcsICcxNHB4JywgJzE2cHgnXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTsiLCJleHBvcnQgY29uc3Qgc2x1Z2lmeSA9ICguLi5hcmdzKSA9PiB7XHJcbiAgY29uc3QgdmFsdWUgPSBhcmdzLmpvaW4oJyAnKVxyXG5cclxuICByZXR1cm4gdmFsdWVcclxuICAgICAgLm5vcm1hbGl6ZSgnTkZEJykgLy8gc3BsaXQgYW4gYWNjZW50ZWQgbGV0dGVyIGluIHRoZSBiYXNlIGxldHRlciBhbmQgdGhlIGFjZW50XHJcbiAgICAgIC5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCAnJykgLy8gcmVtb3ZlIGFsbCBwcmV2aW91c2x5IHNwbGl0IGFjY2VudHNcclxuICAgICAgLnRvTG93ZXJDYXNlKClcclxuICAgICAgLnRyaW0oKVxyXG4gICAgICAucmVwbGFjZSgvW15hLXowLTkgXS9nLCAnJykgLy8gcmVtb3ZlIGFsbCBjaGFycyBub3QgbGV0dGVycywgbnVtYmVycyBhbmQgc3BhY2VzICh0byBiZSByZXBsYWNlZClcclxuICAgICAgLnJlcGxhY2UoL1xccysvZywgJy0nKSAvLyBzZXBhcmF0b3JcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAvLyBleGFtcGxlIGNvbG9ycyB3aXRoIGRhcmsgbW9kZVxyXG4gIGNvbG9yczoge1xyXG4gICAgdGV4dDogJyMzNDNENDgnLCAvLyBib2R5IGNvbG9yIGFuZCBwcmltYXJ5IGNvbG9yXHJcbiAgICB0ZXh0U2Vjb25kYXJ5OiAnIzAyMDczRScsIC8vIHNlY29uZGFyeSBib2R5IGNvbG9yXHJcbiAgICBoZWFkaW5nOiAnIzBGMjEzNycsIC8vIHByaW1hcnkgaGVhZGluZyBjb2xvclxyXG4gICAgaGVhZGluZ1NlY29uZGFyeTogJyMzNDNENDgnLCAvLyBoZWFkaW5nIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kOiAnI0ZGRkZGRicsIC8vIGJvZHkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYmFja2dyb3VuZFNlY29uZGFyeTogJyNGOUZBRkMnLCAvLyBzZWNvbmRhcnkgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgYm9yZGVyQ29sb3I6ICcjRURFRkY2JywgLy8gYm9yZGVyIGNvbG9yXHJcbiAgICBwcmltYXJ5OiAnIzBjNWM5OScsIC8vIHByaW1hcnkgYnV0dG9uIGFuZCBsaW5rIGNvbG9yXHJcbiAgICBzZWNvbmRhcnk6ICcjMGE0ZTgyJywgLy8gc2Vjb25kYXJ5IGNvbG9yIC0gY2FuIGJlIHVzZWQgZm9yIGhvdmVyIHN0YXRlc1xyXG4gICAgbXV0ZWQ6ICcjN0I4MTg4JywgLy8gbXV0ZWQgY29sb3JcclxuICAgIGFjY2VudDogJyMwYTRlODInLCAvLyBhIGNvbnRyYXN0IGNvbG9yIGZvciBlbXBoYXNpemluZyBVSVxyXG4gICAgZGFyazogJyMxMDEzMkQnLFxyXG4gICAgbGluazogJyMzMTgzRkYnLFxyXG4gICAgLy8gaGlnaGxpZ2h0XHRhIGJhY2tncm91bmQgY29sb3IgZm9yIGhpZ2hsaWdodGluZyB0ZXh0XHJcbiAgICBtb2Rlczoge1xyXG4gICAgICBkYXJrOiB7XHJcbiAgICAgICAgdGV4dDogJyNmZmYnLFxyXG4gICAgICAgIGJhY2tncm91bmQ6ICcjMDAwJyxcclxuICAgICAgICBwcmltYXJ5OiAnIzBjZicsXHJcbiAgICAgICAgc2Vjb25kYXJ5OiAnIzA5YycsXHJcbiAgICAgICAgbXV0ZWQ6ICcjMTExJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb250czoge1xyXG4gICAgYm9keTogJ0RNIFNhbnMsIHNhbnMtc2VyaWYnLFxyXG4gICAgLy8gYm9keTpcclxuICAgIC8vICAgJ3N5c3RlbS11aSwgLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBcIlNlZ29lIFVJXCIsIFJvYm90bywgXCJIZWx2ZXRpY2EgTmV1ZVwiLCBzYW5zLXNlcmlmJyxcclxuICAgIGhlYWRpbmc6ICdETSBTYW5zLCBzYW5zLXNlcmlmJyxcclxuICAgIG1vbm9zcGFjZTogJ01lbmxvLCBtb25vc3BhY2UnLFxyXG4gIH0sXHJcbiAgZm9udFNpemVzOiBbXHJcbiAgICAxMiwgLy8gMFxyXG4gICAgMTQsIC8vIDFcclxuICAgIDE2LCAvLyAyXHJcbiAgICAxOCwgLy8gM1xyXG4gICAgMjAsIC8vIDRcclxuICAgIDIyLCAvLyA1XHJcbiAgICAyNCwgLy8gNlxyXG4gICAgMjYsIC8vIDdcclxuICAgIDI4LCAvLyA4XHJcbiAgICAzMCwgLy8gOVxyXG4gICAgMzIsIC8vIDEwXHJcbiAgICAzNiwgLy8gMTFcclxuICAgIDQwLCAvLyAxMlxyXG4gICAgNDIsIC8vIDEzXHJcbiAgICA0OCwgLy8gMTRcclxuICAgIDUyLCAvLyAxNVxyXG4gICAgNjQsIC8vIDE2XHJcbiAgXSxcclxuICBmb250V2VpZ2h0czoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICAvLyBib2R5OiA0MDAsXHJcbiAgICBoZWFkaW5nOiA1MDAsXHJcbiAgICAvLyBoZWFkaW5nOiA3MDAsXHJcbiAgICBib2xkOiA3MDAsXHJcbiAgfSxcclxuICBsaW5lSGVpZ2h0czoge1xyXG4gICAgYm9keTogMS41LFxyXG4gICAgLy8gYm9keTogMS41LFxyXG4gICAgaGVhZGluZzogMS4yNSxcclxuICAgIC8vIGhlYWRpbmc6IDEuMTI1LFxyXG4gIH0sXHJcbiAgbGV0dGVyU3BhY2luZ3M6IHtcclxuICAgIGJvZHk6ICdub3JtYWwnLFxyXG4gICAgY2FwczogJzAuMmVtJyxcclxuICAgIGhlYWRpbmc6ICctMC41cHgnLFxyXG4gIH0sXHJcbiAgc3BhY2U6IFtcclxuICAgIDAsIC8vIDBcclxuICAgIDUsIC8vIDFcclxuICAgIDEwLCAvLyAyXHJcbiAgICAxNSwgLy8gM1xyXG4gICAgMjAsIC8vIDRcclxuICAgIDI1LCAvLyA1XHJcbiAgICAzMCwgLy8gNlxyXG4gICAgMzUsIC8vIDdcclxuICAgIDQwLCAvLyA4XHJcbiAgICA0NSwgLy8gOVxyXG4gICAgNTAsIC8vIDEwXHJcbiAgICA1NSwgLy8gMTFcclxuICAgIDYwLCAvLyAxMlxyXG4gICAgNjUsIC8vIDEzXHJcbiAgICA3MCwgLy8gMTRcclxuICAgIDgwLCAvLyAxNVxyXG4gICAgOTAsIC8vIDE2XHJcbiAgICAxMDAsIC8vIDE3XHJcbiAgICAxMTAsIC8vIDE4XHJcbiAgICAxMjAsIC8vIDE5XHJcbiAgICAxMzAsIC8vIDIwXHJcbiAgICAxNDAsIC8vIDIxXHJcbiAgICAxNTAsIC8vIDIyXHJcbiAgICAxNjAsIC8vIDIzXHJcbiAgXSxcclxuICBzaXplczoge30sXHJcbiAgYnJlYWtwb2ludHM6IFtcclxuICAgICc0ODBweCcsXHJcbiAgICAnNjQwcHgnLFxyXG4gICAgJzc2OHB4JyxcclxuICAgICcxMDI0cHgnLFxyXG4gICAgJzEyNjBweCcsXHJcbiAgICAnMTM2N3B4JyxcclxuICAgICcxNDQwcHgnLFxyXG4gICAgJzE2MDBweCcsXHJcbiAgXSxcclxuICAvLyB2YXJpYW50cyBjYW4gdXNlIGN1c3RvbSwgdXNlci1kZWZpbmVkIG5hbWVzXHJcbiAgbGF5b3V0OiB7XHJcbiAgICBjb250YWluZXI6IHtcclxuICAgICAgbWF4V2lkdGg6IFtcclxuICAgICAgICAnMTAwJScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICc3MjBweCcsXHJcbiAgICAgICAgJzk3MHB4JyxcclxuICAgICAgICAnMTE0MHB4JyxcclxuICAgICAgICAnMTI2MHB4JyxcclxuICAgICAgICAnMTM2NnB4JyxcclxuICAgICAgXSxcclxuICAgICAgcGFkZGluZ0xlZnQ6IFs2XSxcclxuICAgICAgcGFkZGluZ1JpZ2h0OiBbNl0sXHJcbiAgICAgIG06ICcwIGF1dG8nLFxyXG4gICAgfSxcclxuICAgIG1haW46IHt9LFxyXG4gIH0sXHJcbiAgdGV4dDoge1xyXG4gICAgaGVhZGluZzoge1xyXG4gICAgICBmb250RmFtaWx5OiAnaGVhZGluZycsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdoZWFkaW5nJyxcclxuICAgICAgZm9udFdlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpbmtzOiB7fSxcclxuICBpbWFnZXM6IHtcclxuICAgIGF2YXRhcjoge1xyXG4gICAgICB3aWR0aDogNDgsXHJcbiAgICAgIGhlaWdodDogNDgsXHJcbiAgICAgIGJvcmRlclJhZGl1czogOTk5OTksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgLy8gdmFyaWFudHMgZm9yIGJ1dHRvbnNcclxuICBidXR0b25zOiB7XHJcbiAgICBkZWZhdWx0OiB7XHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBkaXNwbGF5OiAnaW5saW5lLWZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAgIHdoaXRlU3BhY2U6ICdub3dyYXAnLFxyXG4gICAgfSxcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiZzogJ3ByaW1hcnknLFxyXG4gICAgICBtaW5IZWlnaHQ6ICc2MHB4JyxcclxuICAgICAgcGFkZGluZzogJzAgMzBweCcsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIGJnOiAnZGFyaycsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeU1kOiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLnByaW1hcnknLFxyXG4gICAgICBtaW5IZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgcHg6ICcyNXB4JyxcclxuICAgIH0sXHJcbiAgICBzZWNvbmRhcnk6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMucHJpbWFyeScsXHJcbiAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBiZzogJ3NlY29uZGFyeScsXHJcbiAgICB9LFxyXG4gICAgbXV0ZWQ6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyNFREYwRjInLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2hpdGU6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXHJcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgICAgY29sb3I6ICcjMDIwNzE4JyxcclxuICAgIH0sXHJcbiAgICB0ZXh0OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICdidXR0b25zLmRlZmF1bHQnLFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcmRzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIHBhZGRpbmc6IDIsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNCxcclxuICAgICAgLy8gYm94U2hhZG93OiAnMCAwIDRweCAxcHggcmdiYSgwLCAwLCAwLCAwLjUpJyxcclxuICAgIH0sXHJcbiAgICBvZmZlcjoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBmbGV4OiBbJzEgMSBjYWxjKDUwJSAtIDE2cHgpJywgJzEgMSAyMCUnXSxcclxuICAgICAgbWluSGVpZ2h0OiAxMzAsXHJcbiAgICAgIG06IDIsXHJcbiAgICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJyxcclxuICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNFREVGRjYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDUsXHJcbiAgICB9LFxyXG4gICAgZmVhdHVyZUNhcmQ6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiBbJ2NlbnRlcicsICdmbGV4LXN0YXJ0J10sXHJcbiAgICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uJywgJ3JvdyddLFxyXG4gICAgICBwOiBbMCwgM10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybXM6IHtcclxuICAgIGxhYmVsOiB7XHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBmb250V2VpZ2h0OiAnYm9sZCcsXHJcbiAgICB9LFxyXG4gICAgaW5wdXQ6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA4LFxyXG4gICAgICBib3JkZXJDb2xvcjogJ2JvcmRlckNvbG9yJyxcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBweDogNSxcclxuICAgICAgcHk6IDAsXHJcbiAgICAgIG1pbkhlaWdodDogNjAsXHJcbiAgICAgICcmOmZvY3VzJzoge1xyXG4gICAgICAgIGJvcmRlckNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgYm94U2hhZG93OiAodCkgPT4gYDAgMCAwIDJweCAke3QuY29sb3JzLnByaW1hcnl9YCxcclxuICAgICAgICBvdXRsaW5lOiAnbm9uZScsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIGJhZGdlczoge1xyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICBjb2xvcjogJ2JhY2tncm91bmQnLFxyXG4gICAgICBiZzogJyMyOEE1RkYnLFxyXG4gICAgICBib3JkZXJSYWRpdXM6IDMwLFxyXG4gICAgICBwOiAnM3B4IDExcHgnLFxyXG4gICAgICBmb250U2l6ZTogMSxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJy0wLjVweCcsXHJcbiAgICB9LFxyXG4gICAgb3V0bGluZToge1xyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICBiZzogJ3RyYW5zcGFyZW50JyxcclxuICAgICAgYm94U2hhZG93OiAnaW5zZXQgMCAwIDAgMXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgc3R5bGVzOiB7XHJcbiAgICAvLyBUbyBhZGQgYmFzZSwgdG9wLWxldmVsIHN0eWxlcyB0byB0aGUgPGJvZHk+IGVsZW1lbnQsIHVzZSB0aGVtZS5zdHlsZXMucm9vdC5cclxuICAgIHJvb3Q6IHtcclxuICAgICAgZm9udEZhbWlseTogJ2JvZHknLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAnYm9keScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2R5JyxcclxuICAgIH0sXHJcbiAgICAvLyBoMS1oNiBIZWFkaW5nIHN0eWxlc1xyXG4gICAgaDE6IHtcclxuICAgICAgLy8gZm9udEZhbWlseTogJ25vbmUnLFxyXG4gICAgICAvLyB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgLy8gZm9udFNpemU6IDYsXHJcbiAgICB9LFxyXG4gICAgaDI6IHtcclxuICAgICAgLy8gZm9udEZhbWlseTogJ25vbmUnLFxyXG4gICAgICAvLyB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgLy8gZm9udFNpemU6IDUsXHJcbiAgICB9LFxyXG4gICAgaDM6IHtcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiA0LFxyXG4gICAgfSxcclxuICAgIGg0OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogMyxcclxuICAgIH0sXHJcbiAgICBoNToge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDIsXHJcbiAgICB9LFxyXG4gICAgaDY6IHtcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgfSxcclxuICAgIC8vIERpdmlkZXIgc3R5bGVzXHJcbiAgICBocjoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlckJvdHRvbTogJzFweCBzb2xpZCcsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnI0Q5RTBFNycsXHJcbiAgICB9LFxyXG4gICAgLy8gYWxzbyB5b3UgY2FuIHVzZSBvdGhlciBIVE1MIGVsZW1lbnRzIHN0eWxlIGhlcmVcclxuICAgIHVsOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgfSxcclxuICAgIHNyT25seToge1xyXG4gICAgICBib3JkZXI6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwOiAncmVjdCgxcHgsIDFweCwgMXB4LCAxcHgpICFpbXBvcnRhbnQnLFxyXG4gICAgICBjbGlwUGF0aDogJ2luc2V0KDUwJSkgIWltcG9ydGFudCcsXHJcbiAgICAgIGhlaWdodDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgbWFyZ2luOiAnLTFweCAhaW1wb3J0YW50JyxcclxuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4gIWltcG9ydGFudCcsXHJcbiAgICAgIHBhZGRpbmc6ICcwICFpbXBvcnRhbnQnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aWR0aDogJzFweCAhaW1wb3J0YW50JyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmcmFtZXItbW90aW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZHluYW1pY1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicG9saXNoZWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5pbWF0ZS1vbi1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtYW5pbWF0ZWQtY3NzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2FpXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2JzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWljb25zL2lvXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWlzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LW1hc29ucnktY29tcG9uZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXJlc3BvbnNpdmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2Nyb2xsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXNsaWNrXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LXN0aWNreW5vZGVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGhlbWUtdWlcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==