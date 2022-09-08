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
  }, "Revista Online")));
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
  }), item))))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uLi8uLi9jbGllbnQvbGluay50c3giLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC93aXRoLXJvdXRlci50c3giLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL21pdHQudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9pcy1keW5hbWljLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9wYXRoLW1hdGNoLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3ByZXBhcmUtZGVzdGluYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yb3V0ZS1tYXRjaGVyLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LnRzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVEZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2ludGVyb3BSZXF1aXJlV2lsZGNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2FnZW5kYTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9jaWRhZGUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2VtYWlsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9lbmRlcmVjby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvZmFjZWJvb2sucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL2luc3RhZ3JhbS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2hhcGUtYm90dG9tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy9zaGFwZS10b3AucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2ljb25zL3N0b3JlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9pY29ucy90ZWxlZm9uZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pbWFnZXMvaWNvbnMvd2hhdHNhcHAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ28ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2xvZ29fYnJhbmNvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9xdWVtLXNvbW9zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8xLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8yLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8zLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy80LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy81LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy82LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zaGFwZS0xLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2ltYWdlcy9zdXBwb3J0LXRlYW0ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3N1cHBvcnQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL3Rlc3RpbW9uaWFsLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2FjY29yZGlvbi9iYXNlLWFjY29yZGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9hY2NvcmRpb24vc2hhcmVkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL2Jsb2ctcG9zdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9mYXEtaXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy9mZWF0dXJlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3ByaWNlLXRhYmxlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NhcmRzL3NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL3dpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYW1idXJnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5kYXRhLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuZGF0YS5wYWdlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hlYWRlci9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaWNvbnMvbG9jay5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9pY29ucy9sb2dvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2ltYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9sZ3BkLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbG9nby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc2VvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3NsaWNrLWFycm93LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3RvcGJhci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaG9va3MvdXNlSW5mb3JtYWNvZXMuanN4Iiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9hcGkvYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvYmFubmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9ibG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9jYWxsLXRvLWFjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvY3VzdG9tZXItc3VwcG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VjdGlvbnMvZmFxLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9wcmVtaXVtLWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3ByaWNpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3NlcnZpY2VzLmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy9zdXBwb3J0LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWN0aW9ucy90ZXN0aW1vbmlhbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlY3Rpb25zL3VsdGltYXRlLWZlYXR1cmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlcnZpY2VzL3NsdWdpZnkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RoZW1lL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZyYW1lci1tb3Rpb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2R5bmFtaWNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBvbGlzaGVkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWFuaW1hdGVkLWNzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2FpXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvYnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9pb1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtbWFzb25yeS1jb21wb25lbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1yZXNwb25zaXZlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2Nyb2xsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3Qtc2xpY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1zdGlja3lub2RlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidGhlbWUtdWlcIiJdLCJuYW1lcyI6WyJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJjb25zb2xlIiwicm91dGVyIiwiZXJyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJwYXRobmFtZSIsInJlc29sdmVkQXMiLCJjaGlsZEVsbSIsImlzUHJlZmV0Y2hlZCIsImNoaWxkcmVuIiwiY2hpbGQiLCJDaGlsZHJlbiIsImNoaWxkUHJvcHMiLCJyZWYiLCJlbCIsInNldENoaWxkRWxtIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJSb3V0ZXIiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwibWVzc2FnZSIsInN0YWNrIiwiUm91dGVyQ29udGV4dCIsImNyZWF0ZVJvdXRlciIsIl9yb3V0ZXIiLCJpbnN0YW5jZSIsIkFycmF5IiwiQ29tcG9zZWRDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJXaXRoUm91dGVyV3JhcHBlciIsIm5hbWUiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW1zIiwicGFyYW0iLCJ2YWx1ZSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJxdWVyeSIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZpbmFsVXJsIiwiaW50ZXJwb2xhdGVkQXMiLCJpbnRlcnBvbGF0ZUFzIiwiaGFzaCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsInJlc29sdmVkSHJlZiIsInJlc29sdmVBcyIsIlBBR0VfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFkZEJhc2VQYXRoIiwicmVzb2x2ZUhyZWYiLCJtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiIsIlNTR19EQVRBX05PVF9GT1VORF9FUlJPUiIsImNyZWRlbnRpYWxzIiwicmVzIiwiYXR0ZW1wdHMiLCJmZXRjaFJldHJ5IiwiaXNTZXJ2ZXJSZW5kZXIiLCJtYXJrTG9hZGluZ0Vycm9yIiwiY29uc3RydWN0b3IiLCJyb3V0ZSIsImFzUGF0aCIsImNvbXBvbmVudHMiLCJzZGMiLCJzdWIiLCJjbGMiLCJwYWdlTG9hZGVyIiwiX2JwcyIsImV2ZW50cyIsIl93cmFwQXBwIiwiaXNTc3IiLCJpc0ZhbGxiYWNrIiwiX2luRmxpZ2h0Um91dGUiLCJfc2hhbGxvdyIsImxvY2FsZXMiLCJkZWZhdWx0TG9jYWxlIiwic3RhdGUiLCJvcHRpb25zIiwic3R5bGVTaGVldHMiLCJfX05fU1NHIiwiaW5pdGlhbFByb3BzIiwiX19OX1NTUCIsIkNvbXBvbmVudCIsIl9fTkVYVF9EQVRBX18iLCJyZWxvYWQiLCJiYWNrIiwicHVzaCIsInByZXBhcmVVcmxBcyIsImNoYW5nZSIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJtZXRob2QiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwic3NnNDA0IiwicGFnZSIsIm1vZCIsImdldFJvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsInJlcXVpcmUiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJkYXRhSHJlZiIsInNldCIsImJlZm9yZVBvcFN0YXRlIiwib25seUFIYXNoQ2hhbmdlIiwibmV3SGFzaCIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJzY3JvbGxUb0hhc2giLCJpZEVsIiwibmFtZUVsIiwidXJsSXNOZXciLCJfcmVzb2x2ZUhyZWYiLCJhcHBseUJhc2VQYXRoIiwiY2xlYW5QYXRobmFtZSIsIlByb21pc2UiLCJmZXRjaENvbXBvbmVudCIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsIl9nZXREYXRhIiwiZm4iLCJkYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJmZXRjaE5leHREYXRhIiwiX2dldFNlcnZlckRhdGEiLCJBcHBUcmVlIiwiY3R4IiwiYWJvcnRDb21wb25lbnRMb2FkIiwibm90aWZ5Iiwic2VnbWVudCIsImNoYXIiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzbGFzaGVkUHJvdG9jb2xzIiwicHJvdG9jb2wiLCJ1cmxPYmoiLCJob3N0IiwiYXV0aCIsImhvc3RuYW1lIiwiU3RyaW5nIiwicXVlcnlzdHJpbmciLCJzZWFyY2giLCJURVNUX1JPVVRFIiwiRFVNTVlfQkFTRSIsInJlc29sdmVkQmFzZSIsIm9yaWdpbiIsIm1hdGNoZXJPcHRpb25zIiwic2Vuc2l0aXZlIiwiZGVsaW1pdGVyIiwiY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyIsInN0cmljdCIsImN1c3RvbVJvdXRlIiwia2V5cyIsIm1hdGNoZXJSZWdleCIsInBhdGhUb1JlZ2V4cCIsIm1hdGNoZXIiLCJwYXJzZWREZXN0aW5hdGlvbiIsImRlc3RRdWVyeSIsImRlc3RQYXRoIiwiZGVzdFBhdGhQYXJhbUtleXMiLCJkZXN0UGF0aFBhcmFtcyIsImRlc3RpbmF0aW9uQ29tcGlsZXIiLCJ2YWxpZGF0ZSIsInN0ck9yQXJyYXkiLCJxdWVyeUNvbXBpbGVyIiwicGFyYW1LZXlzIiwiYXBwZW5kUGFyYW1zVG9RdWVyeSIsInNob3VsZEFkZEJhc2VQYXRoIiwibmV3VXJsIiwic2VhcmNoUGFyYW1zIiwiaXNOYU4iLCJpdGVtIiwic3RyaW5naWZ5VXJsUXVlcnlQYXJhbSIsInNlYXJjaFBhcmFtc0xpc3QiLCJjdXN0b21Sb3V0ZU1hdGNoZXIiLCJyZXdyaXRlIiwiZGVzdFJlcyIsInJlIiwiZGVjb2RlIiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwic2x1Z05hbWUiLCJnIiwiZ3JvdXBzIiwibSIsInN0ciIsInNlZ21lbnRzIiwibm9ybWFsaXplZFJvdXRlIiwiZ3JvdXBJbmRleCIsInBhcmFtZXRlcml6ZWRSb3V0ZSIsInBhcnNlUGFyYW1ldGVyIiwicG9zIiwiZXNjYXBlUmVnZXgiLCJyb3V0ZUtleUNoYXJDb2RlIiwicm91dGVLZXlDaGFyTGVuZ3RoIiwiZ2V0U2FmZVJvdXRlS2V5Iiwicm91dGVLZXkiLCJpIiwicm91dGVLZXlzIiwibmFtZWRQYXJhbWV0ZXJpemVkUm91dGUiLCJjbGVhbmVkS2V5IiwiaW52YWxpZEtleSIsInBhcnNlSW50IiwibmFtZWRSZWdleCIsInVzZWQiLCJwb3J0IiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJBcHAiLCJnZXREaXNwbGF5TmFtZSIsInBhZ2VQcm9wcyIsImxvYWRHZXRJbml0aWFsUHJvcHMiLCJpc1Jlc1NlbnQiLCJ1cmxPYmplY3RLZXlzIiwiU1AiLCJBY2NvcmRpb24iLCJpdGVtcyIsImNvbWJpbmVSZWR1Y2VycyIsInNpbmdsZSIsInByZXZlbnRDbG9zZSIsIm9wZW5JbmRleGVzIiwiaGFuZGxlSXRlbUNsaWNrIiwibWFwIiwiaW5kZXgiLCJ0aXRsZSIsInN0eWxlcyIsImFjY29yZGlvbiIsImluY2x1ZGVzIiwicmdiYSIsImFycm93IiwiY29udGVudCIsImNvbnRlbnRzIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyUmFkaXVzIiwiYm94U2hhZG93IiwiY29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsZXR0ZXJTcGFjaW5nIiwibGluZUhlaWdodCIsIndpZHRoIiwiQmFzZUFjY29yZGlvbiIsImludGVybmFsU2V0U3RhdGUiLCJjbG9zaW5nIiwidHlwZSIsImZpbHRlciIsImxvZyIsImdldFN0YXRlIiwidW5kZWZpbmVkIiwiY2hhbmdlcyIsImNhbGxiYWNrIiwiYWxsQ2hhbmdlcyIsInNldFN0YXRlIiwiYWN0dWFsU3RhdGUiLCJjaGFuZ2VzT2JqZWN0Iiwic3RhdGVSZWR1Y2VyIiwib25TdGF0ZUNoYW5nZSIsInJlbmRlciIsIkFjY29yZGlvbkJ1dHRvbiIsInJlc3QiLCJidXR0b25Ub2dnbGUiLCJhY2NvcmRpb25JdGVtIiwib3ZlcmZsb3ciLCJtdCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjdXJzb3IiLCJwb3NpdGlvbiIsImFjY29yZGlvbkNvbnRlbnQiLCJ2YXJpYW50cyIsIm9wZW4iLCJoZWlnaHQiLCJtYXJnaW5Ub3AiLCJjbG9zZWQiLCJBY2NvcmRpb25Db250ZW50cyIsImlzT3BlbiIsIkFjY29yZGlvbkl0ZW0iLCJjbGFzc05hbWUiLCJsZW5ndGgiLCJzbGljZSIsInJlZHVjZXJzIiwicmVkdWNlIiwiYWNjIiwicmVkdWNlciIsIkJsb2dQb3N0IiwicG9zdCIsInNsdWciLCJzbHVnaWZ5IiwibW5fdGl0dWxvIiwidGh1bWJuYWlsIiwibW5faW1hZ2VtMSIsIm1uX3RpdGxlIiwiZXhjZXJwdCIsIm1uX2Rlc2NyaWNhbyIsImxlYXJuTW9yZSIsIm14IiwibWIiLCJpbWciLCJhIiwidGV4dERlY29yYXRpb24iLCJ0ZXh0T3ZlcmZsb3ciLCJXZWJraXRMaW5lQ2xhbXAiLCJXZWJraXRCb3hPcmllbnQiLCJGYXFJdGVtIiwiZmFxIiwicXVlcyIsImFucyIsImJvcmRlckJvdHRvbSIsIm1hcmdpbkJvdHRvbSIsImgzIiwiRmVhdHVyZSIsImZlYXR1cmUiLCJpY29uIiwiZGVzY3JpcHRpb24iLCJmaWd1cmUiLCJtaW5XaWR0aCIsIm1yIiwiUHJpY2VUYWJsZSIsImlzUmVjb21tZW5kZWQiLCJzdWJ0aXRsZSIsImxpbmsiLCJwcmljZVRhYmxlIiwiaGVhZGVyIiwibGlzdCIsIk1uX1RpdHVsbyIsIm9icl9ub21lIiwiYWxpZ25TZWxmIiwiYmFja2dyb3VuZCIsInBhZGRpbmciLCJidXR0b24iLCJyZWNvbUxhYmVsIiwibGVmdCIsInRvcCIsInJpZ2h0IiwibWluSGVpZ2h0IiwidGV4dFRyYW5zZm9ybSIsInByaWNlQW1vdW50IiwibGlzdFN0eWxlIiwibWF4V2lkdGgiLCJsaSIsInN2ZyIsIm9wYWNpdHkiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsIlNlcnZpY2UiLCJjb3RhY2FvIiwic2VydmljZSIsImNvdGRfbm9tZSIsInByaWNlIiwiY290ZF9jb21wcmEiLCJjb3RkX3ZlbmRhIiwidGhlbWUiLCJjb2xvcnMiLCJmbGV4RGlyZWN0aW9uIiwidGV4dEFsaWduIiwidHJhbnNpdGlvbiIsIm1lbnVJdGVtcyIsImlkIiwidGVsZWZvbmUiLCJsYWJlbCIsImVtYWlsIiwiZW5kZXJlY28iLCJjaWRhZGUiLCJmYWNlYm9vayIsImluc3RhZ3JhbSIsIndoYXRzYXBwIiwic3RvcmUiLCJmb290ZXJOYXYiLCJGb290ZXIiLCJmb290ZXIiLCJmb290ZXJUb3BJbm5lciIsImFib3V0IiwibG9nbyIsIkxvZ28iLCJjb3B5cmlnaHQiLCJEYXRlIiwiZ2V0RnVsbFllYXIiLCJwdCIsInBiIiwiZ2FwIiwiZ3JpZFRlbXBsYXRlQ29sdW1ucyIsImZvb3RlcklubmVyIiwiYm9yZGVyVG9wIiwiZ3JpZFJvdyIsImdyaWRDb2x1bW4iLCJ0ZXJtcyIsInNwYW4iLCJXaWRnZXQiLCJmb290ZXJXaWRnZXQiLCJ0b1N0cmluZyIsImZvbnRGYW1pbHkiLCJ1bCIsIm1hcmdpbiIsIkJhciIsImlzU3RpY2t5IiwiSGFtYnVyZ2VyTWVudSIsInRvZ2dsZU1vYmlsZU1lbnUiLCJiYXIiLCJ0cmFuc2Zvcm0iLCJvdXRsaW5lIiwibWwiLCJIZWFkZXIiLCJ1c2VTdGF0ZSIsImlzTW9iaWxlTWVudSIsImhhbmRsZVN0YXRlQ2hhbmdlIiwic3RhdHVzIiwiU3RpY2t5IiwiU1RBVFVTX0ZJWEVEIiwicHJldiIsImhhbmRsZUNsb3NlTWVudSIsImNvbnRhaW5lciIsImJ1dHRvbkdyb3VwIiwiaGFtYnVyZ2VyIiwicHkiLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsIm1hcmdpbkxlZnQiLCJsb2dpbiIsImpvaW5Db21tdW5pdHkiLCJOYXZiYXIiLCJpc01vYmlsZSIsInVzZVJvdXRlciIsIm5hdmJhciIsIm1lbnVJdGVtc1BhZ2VzIiwiZmxleEdyb3ciLCJ2aXNpYmlsaXR5IiwidHJhbnNmb3JtT3JpZ2luIiwiTG9jayIsImZpbGwiLCJ3aGl0ZSIsIm1peEJsZW5kTW9kZSIsIkltYWdlIiwic3JjIiwiTGF5b3V0IiwidmFyaWFudCIsIkxncGQiLCJzZXRJc09wZW4iLCJ1c2VFZmZlY3QiLCJhY2VpdGVMZ3BkIiwic2Vzc2lvblN0b3JhZ2UiLCJnZXRJdGVtIiwiY2xvc2VMZ3BkIiwic2V0SXRlbSIsImNvb2tpZVBvcHVwIiwiY29va2llUG9wdXBBY3Rpb25zIiwiZmxleFdyYXAiLCJib3R0b20iLCJ6SW5kZXgiLCJmbGV4IiwiZm9udFN0eWxlIiwiTmF2TGluayIsIkxlYXJuTW9yZSIsImZhZGVSaWdodCIsImtleWZyYW1lcyIsImFuaW1hdGlvbiIsImxvZ29CcmFuY28iLCJTZWN0aW9uSGVhZGluZyIsInNsb2dhbiIsImVtb2ppIiwiaGVhZGluZyIsIlNFTyIsImF1dGhvciIsIm1ldGEiLCJtZXRhRGF0YSIsInByb3BlcnR5IiwiY29uY2F0IiwiZGVmYXVsdFByb3BzIiwibGFuZyIsIlNsaWNrQXJyb3ciLCJjb250cm9sIiwicGFnaW5hdGlvbkJ1dHRvbiIsImluZm8iLCJUb3BCYXIiLCJ0b3BiYXIiLCJweCIsInBsIiwicHIiLCJ3aGl0ZVNwYWNlIiwic3Ryb25nIiwiYm9yZGVyTGVmdCIsIkluZm9ybWFjb2VzQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJvcmdhbml6YXJPYnJpZ2Fjb2VzUG9yRXN0YWRvIiwib2JyaWdhY29lc0dlcmFsIiwiZXNwaXJpdG9TYW50byIsIm9iciIsIm1uX2VzdWJwYXN0YSIsIm1hdG9Hcm9zc29Eb1N1bCIsIm1pbmFzR2VyYWlzIiwicmlvR3JhbmRlRG9TdWwiLCJwYXJhbmEiLCJyaW9EZUphbmVpcm8iLCJzYW50YUNhdGFyaW5hIiwic2FvUGF1bG8iLCJJbmZvcm1hY29lc1Byb3ZpZGVyIiwibm90aWNpYXMiLCJzZXROb3RpY2lhcyIsIm9icmlnYWNvZXMiLCJzZXRPYnJpZ2Fjb2VzIiwiYWdlbmRhIiwic2V0QWdlbmRhIiwiY290YWNvZXMiLCJzZXRDb3RhY29lcyIsInVybDEiLCJhcGkiLCJ1cmwyIiwidXJsMyIsInVybDQiLCJheGlvcyIsInRoZW4iLCJzcHJlYWQiLCJyZXNwb25zZXMiLCJ1c2VJbmZvcm1hY29lcyIsImNvbnRleHQiLCJ1c2VDb250ZXh0IiwiY3JlYXRlIiwiYmFzZVVSTCIsIkluZGV4UGFnZSIsIkJhbm5lciIsInNlY3Rpb24iLCJncmlkIiwiZG9tYWluQ2FyZCIsImlucHV0R3JvdXAiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYW5uZXIiLCJoMiIsImlucHV0IiwiV2Via2l0Qm94U2hhZG93Iiwic2VsZWN0Iiwic3VibWl0Iiwibm90ZSIsInNldHRpbmdzIiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJzcGVlZCIsIm5leHRBcnJvdyIsInByZXZBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50IiwiaW5maW5pdGUiLCJCbG9nIiwibW5fY29kaWdvIiwiQ2FsbFRvQWN0aW9uIiwiY29udGVudEJveCIsImJ0bldyYXBwZXIiLCJCZ1NoYXBlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRTaXplIiwic2hhcGVUb3AiLCJzaGFwZUJvdHRvbSIsIkN1c3RvbWVyU3VwcG9ydCIsImlsbHVzdHJhdGlvbiIsInN1cHBvcnQiLCJzdW1tYXJ5IiwiY2hlY2siLCJtYXNvbnJ5T3B0aW9ucyIsIm9yaWdpblRvcCIsIkZhcSIsIlByZW1pdW1GZWF0dXJlIiwicXVlbVNvbW9zIiwiYWNjb3JkaW9uR3JvdXAiLCJmZWF0dXJlcyIsImlzQXZhaWxhYmxlIiwiYnV0dG9uVGV4dCIsIlByaWNpbmciLCJkaWEiLCJnZXREYXRlIiwicGFkU3RhcnQiLCJtZXMiLCJnZXRNb250aCIsImFubyIsImRhdGFBdHVhbCIsImltYWdlIiwiSW1hZ2VBZ2VuZGEiLCJTZXJ2aWNlcyIsImNvdGRfY29kaWdvIiwiU3VwcG9ydCIsInRodW1iV3JhcHBlciIsInN1cHBvcnRUZWFtIiwiVGVzdGltb25pYWwiLCJkeW5hbWljIiwic3NyIiwiYXZhdGFyIiwiYXV0aG9yTmFtZSIsImRlc2lnbmF0aW9uIiwidGV4dCIsIlRlc3RpbW9uaWFscyIsImFycm93cyIsImRvdHMiLCJmYWRlIiwiY2Fyb3VzZWwiLCJ0ZXh0SW5kZW50IiwiaWNvbjEiLCJpY29uMiIsImljb24zIiwiaWNvbjQiLCJpY29uNSIsImljb242IiwiVWx0aW1hdGVGZWF0dXJlcyIsImg0Iiwiam9pbiIsIm5vcm1hbGl6ZSIsInRvTG93ZXJDYXNlIiwidHJpbSIsInRleHRTZWNvbmRhcnkiLCJoZWFkaW5nU2Vjb25kYXJ5IiwiYmFja2dyb3VuZFNlY29uZGFyeSIsInByaW1hcnkiLCJzZWNvbmRhcnkiLCJtdXRlZCIsImFjY2VudCIsImRhcmsiLCJtb2RlcyIsImZvbnRzIiwiYm9keSIsIm1vbm9zcGFjZSIsImZvbnRTaXplcyIsImZvbnRXZWlnaHRzIiwiYm9sZCIsImxpbmVIZWlnaHRzIiwibGV0dGVyU3BhY2luZ3MiLCJjYXBzIiwic3BhY2UiLCJzaXplcyIsImJyZWFrcG9pbnRzIiwibGF5b3V0IiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYWluIiwibGlua3MiLCJpbWFnZXMiLCJidXR0b25zIiwiZGVmYXVsdCIsImJnIiwicHJpbWFyeU1kIiwiY2FyZHMiLCJvZmZlciIsImZlYXR1cmVDYXJkIiwiZm9ybXMiLCJ0IiwiYmFkZ2VzIiwicm9vdCIsImgxIiwiaDUiLCJoNiIsImhyIiwic3JPbmx5IiwiY2xpcCIsImNsaXBQYXRoIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FB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QkU7QUFrQ047QUFDQTBaLE1BQUUsRUFBRTtBQUNGaFQsWUFBTSxFQUFFLENBRE47QUFFRm5DLGtCQUFZLEVBQUUsV0FGWjtBQUdGb0MsaUJBQVcsRUFBRTtBQUhYLEtBbkNFO0FBd0NOO0FBQ0FnRCxNQUFFLEVBQUU7QUFDRnRELGVBQVMsRUFBRTtBQURULEtBekNFO0FBNENOc1QsVUFBTSxFQUFFO0FBQ05qVCxZQUFNLEVBQUUsY0FERjtBQUVOa1QsVUFBSSxFQUFFLHFDQUZBO0FBR05DLGNBQVEsRUFBRSx1QkFISjtBQUlOMVgsWUFBTSxFQUFFLGdCQUpGO0FBS055SCxZQUFNLEVBQUUsaUJBTEY7QUFNTm5JLGNBQVEsRUFBRSxtQkFOSjtBQU9ObUUsYUFBTyxFQUFFLGNBUEg7QUFRTjdELGNBQVEsRUFBRSxxQkFSSjtBQVNONUIsV0FBSyxFQUFFLGdCQVREO0FBVU44TyxnQkFBVSxFQUFFO0FBVk47QUE1Q0Y7QUFoUUssQ0FBZixFOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDBDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLDJDOzs7Ozs7Ozs7OztBQ0FBLHFDOzs7Ozs7Ozs7OztBQ0FBLG9EOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHlDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLDZDOzs7Ozs7Ozs7OztBQ0FBLHFDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgY2h1bmtzXG4gXHQvLyBcIjBcIiBtZWFucyBcImFscmVhZHkgbG9hZGVkXCJcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwicGFnZXMvaW5kZXhcIjogMFxuIFx0fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gcmVxdWlyZSgpIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHQvLyBcIjBcIiBpcyB0aGUgc2lnbmFsIGZvciBcImFscmVhZHkgbG9hZGVkXCJcbiBcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdICE9PSAwKSB7XG4gXHRcdFx0dmFyIGNodW5rID0gcmVxdWlyZShcIi4uL1wiICsgKHt9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmpzXCIpO1xuIFx0XHRcdHZhciBtb3JlTW9kdWxlcyA9IGNodW5rLm1vZHVsZXMsIGNodW5rSWRzID0gY2h1bmsuaWRzO1xuIFx0XHRcdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspXG4gXHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgUmVhY3QsIHsgQ2hpbGRyZW4gfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IFVybE9iamVjdCB9IGZyb20gJ3VybCdcbmltcG9ydCB7XG4gIGFkZEJhc2VQYXRoLFxuICBhZGRMb2NhbGUsXG4gIGlzTG9jYWxVUkwsXG4gIE5leHRSb3V0ZXIsXG4gIFByZWZldGNoT3B0aW9ucyxcbiAgcmVzb2x2ZUhyZWYsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbnR5cGUgVXJsID0gc3RyaW5nIHwgVXJsT2JqZWN0XG50eXBlIFJlcXVpcmVkS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gbmV2ZXIgOiBLXG59W2tleW9mIFRdXG50eXBlIE9wdGlvbmFsS2V5czxUPiA9IHtcbiAgW0sgaW4ga2V5b2YgVF0tPzoge30gZXh0ZW5kcyBQaWNrPFQsIEs+ID8gSyA6IG5ldmVyXG59W2tleW9mIFRdXG5cbmV4cG9ydCB0eXBlIExpbmtQcm9wcyA9IHtcbiAgaHJlZjogVXJsXG4gIGFzPzogVXJsXG4gIHJlcGxhY2U/OiBib29sZWFuXG4gIHNjcm9sbD86IGJvb2xlYW5cbiAgc2hhbGxvdz86IGJvb2xlYW5cbiAgcGFzc0hyZWY/OiBib29sZWFuXG4gIHByZWZldGNoPzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxudHlwZSBMaW5rUHJvcHNSZXF1aXJlZCA9IFJlcXVpcmVkS2V5czxMaW5rUHJvcHM+XG50eXBlIExpbmtQcm9wc09wdGlvbmFsID0gT3B0aW9uYWxLZXlzPExpbmtQcm9wcz5cblxubGV0IGNhY2hlZE9ic2VydmVyOiBJbnRlcnNlY3Rpb25PYnNlcnZlclxuY29uc3QgbGlzdGVuZXJzID0gbmV3IE1hcDxFbGVtZW50LCAoKSA9PiB2b2lkPigpXG5jb25zdCBJbnRlcnNlY3Rpb25PYnNlcnZlciA9XG4gIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gd2luZG93LkludGVyc2VjdGlvbk9ic2VydmVyIDogbnVsbFxuY29uc3QgcHJlZmV0Y2hlZDogeyBbY2FjaGVLZXk6IHN0cmluZ106IGJvb2xlYW4gfSA9IHt9XG5cbmZ1bmN0aW9uIGdldE9ic2VydmVyKCk6IEludGVyc2VjdGlvbk9ic2VydmVyIHwgdW5kZWZpbmVkIHtcbiAgLy8gUmV0dXJuIHNoYXJlZCBpbnN0YW5jZSBvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBhbHJlYWR5IGNyZWF0ZWRcbiAgaWYgKGNhY2hlZE9ic2VydmVyKSB7XG4gICAgcmV0dXJuIGNhY2hlZE9ic2VydmVyXG4gIH1cblxuICAvLyBPbmx5IGNyZWF0ZSBzaGFyZWQgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgaWYgc3VwcG9ydGVkIGluIGJyb3dzZXJcbiAgaWYgKCFJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgIHJldHVybiB1bmRlZmluZWRcbiAgfVxuXG4gIHJldHVybiAoY2FjaGVkT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoXG4gICAgKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMuaGFzKGVudHJ5LnRhcmdldCkpIHtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNiID0gbGlzdGVuZXJzLmdldChlbnRyeS50YXJnZXQpIVxuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgfHwgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPiAwKSB7XG4gICAgICAgICAgY2FjaGVkT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBsaXN0ZW5lcnMuZGVsZXRlKGVudHJ5LnRhcmdldClcbiAgICAgICAgICBjYigpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSxcbiAgICB7IHJvb3RNYXJnaW46ICcyMDBweCcgfVxuICApKVxufVxuXG5jb25zdCBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMgPSAoZWw6IEVsZW1lbnQsIGNiOiAoKSA9PiB2b2lkKSA9PiB7XG4gIGNvbnN0IG9ic2VydmVyID0gZ2V0T2JzZXJ2ZXIoKVxuICBpZiAoIW9ic2VydmVyKSB7XG4gICAgcmV0dXJuICgpID0+IHt9XG4gIH1cblxuICBvYnNlcnZlci5vYnNlcnZlKGVsKVxuICBsaXN0ZW5lcnMuc2V0KGVsLCBjYilcbiAgcmV0dXJuICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgb2JzZXJ2ZXIudW5vYnNlcnZlKGVsKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgfVxuICAgIGxpc3RlbmVycy5kZWxldGUoZWwpXG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlZmV0Y2goXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICBvcHRpb25zPzogUHJlZmV0Y2hPcHRpb25zXG4pOiB2b2lkIHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSByZXR1cm5cbiAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxuICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gIC8vIGxvYWRpbmcgd2l0aCBwcmlvcml0eSB3aGljaCBjYW4gcmVqZWN0IGJ1dCB3ZSBkb24ndFxuICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcbiAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIC8vIHJldGhyb3cgdG8gc2hvdyBpbnZhbGlkIFVSTCBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfSlcbiAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXNdID0gdHJ1ZVxufVxuXG5mdW5jdGlvbiBpc01vZGlmaWVkRXZlbnQoZXZlbnQ6IFJlYWN0Lk1vdXNlRXZlbnQpIHtcbiAgY29uc3QgeyB0YXJnZXQgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQgYXMgSFRNTEFuY2hvckVsZW1lbnRcbiAgcmV0dXJuIChcbiAgICAodGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJykgfHxcbiAgICBldmVudC5tZXRhS2V5IHx8XG4gICAgZXZlbnQuY3RybEtleSB8fFxuICAgIGV2ZW50LnNoaWZ0S2V5IHx8XG4gICAgZXZlbnQuYWx0S2V5IHx8IC8vIHRyaWdnZXJzIHJlc291cmNlIGRvd25sb2FkXG4gICAgKGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyKVxuICApXG59XG5cbmZ1bmN0aW9uIGxpbmtDbGlja2VkKFxuICBlOiBSZWFjdC5Nb3VzZUV2ZW50LFxuICByb3V0ZXI6IE5leHRSb3V0ZXIsXG4gIGhyZWY6IHN0cmluZyxcbiAgYXM6IHN0cmluZyxcbiAgcmVwbGFjZT86IGJvb2xlYW4sXG4gIHNoYWxsb3c/OiBib29sZWFuLFxuICBzY3JvbGw/OiBib29sZWFuLFxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxuKTogdm9pZCB7XG4gIGNvbnN0IHsgbm9kZU5hbWUgfSA9IGUuY3VycmVudFRhcmdldFxuXG4gIGlmIChub2RlTmFtZSA9PT0gJ0EnICYmIChpc01vZGlmaWVkRXZlbnQoZSkgfHwgIWlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXG4gICAgcmV0dXJuXG4gIH1cblxuICBlLnByZXZlbnREZWZhdWx0KClcblxuICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgaWYgKHNjcm9sbCA9PSBudWxsKSB7XG4gICAgc2Nyb2xsID0gYXMuaW5kZXhPZignIycpIDwgMFxuICB9XG5cbiAgLy8gcmVwbGFjZSBzdGF0ZSBpbnN0ZWFkIG9mIHB1c2ggaWYgcHJvcCBpcyBwcmVzZW50XG4gIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywgeyBzaGFsbG93LCBsb2NhbGUgfSkudGhlbihcbiAgICAoc3VjY2VzczogYm9vbGVhbikgPT4ge1xuICAgICAgaWYgKCFzdWNjZXNzKSByZXR1cm5cbiAgICAgIGlmIChzY3JvbGwpIHtcbiAgICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICAgIGRvY3VtZW50LmJvZHkuZm9jdXMoKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5mdW5jdGlvbiBMaW5rKHByb3BzOiBSZWFjdC5Qcm9wc1dpdGhDaGlsZHJlbjxMaW5rUHJvcHM+KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgZnVuY3Rpb24gY3JlYXRlUHJvcEVycm9yKGFyZ3M6IHtcbiAgICAgIGtleTogc3RyaW5nXG4gICAgICBleHBlY3RlZDogc3RyaW5nXG4gICAgICBhY3R1YWw6IHN0cmluZ1xuICAgIH0pIHtcbiAgICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICAgIGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICtcbiAgICAgICAgICAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCdcbiAgICAgICAgICAgID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiXG4gICAgICAgICAgICA6ICcnKVxuICAgICAgKVxuICAgIH1cblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzUmVxdWlyZWQsIHRydWU+ID0ge1xuICAgICAgaHJlZjogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3QgcmVxdWlyZWRQcm9wczogTGlua1Byb3BzUmVxdWlyZWRbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgcmVxdWlyZWRQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNSZXF1aXJlZFtdXG4gICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc1JlcXVpcmVkKSA9PiB7XG4gICAgICBpZiAoa2V5ID09PSAnaHJlZicpIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb3BzW2tleV0gPT0gbnVsbCB8fFxuICAgICAgICAgICh0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKVxuICAgICAgICApIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wc0d1YXJkOiBSZWNvcmQ8TGlua1Byb3BzT3B0aW9uYWwsIHRydWU+ID0ge1xuICAgICAgYXM6IHRydWUsXG4gICAgICByZXBsYWNlOiB0cnVlLFxuICAgICAgc2Nyb2xsOiB0cnVlLFxuICAgICAgc2hhbGxvdzogdHJ1ZSxcbiAgICAgIHBhc3NIcmVmOiB0cnVlLFxuICAgICAgcHJlZmV0Y2g6IHRydWUsXG4gICAgICBsb2NhbGU6IHRydWUsXG4gICAgfSBhcyBjb25zdFxuICAgIGNvbnN0IG9wdGlvbmFsUHJvcHM6IExpbmtQcm9wc09wdGlvbmFsW10gPSBPYmplY3Qua2V5cyhcbiAgICAgIG9wdGlvbmFsUHJvcHNHdWFyZFxuICAgICkgYXMgTGlua1Byb3BzT3B0aW9uYWxbXVxuICAgIG9wdGlvbmFsUHJvcHMuZm9yRWFjaCgoa2V5OiBMaW5rUHJvcHNPcHRpb25hbCkgPT4ge1xuICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldXG5cbiAgICAgIGlmIChrZXkgPT09ICdhcycpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICdsb2NhbGUnKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2AnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGtleSA9PT0gJ3JlcGxhY2UnIHx8XG4gICAgICAgIGtleSA9PT0gJ3Njcm9sbCcgfHxcbiAgICAgICAga2V5ID09PSAnc2hhbGxvdycgfHxcbiAgICAgICAga2V5ID09PSAncGFzc0hyZWYnIHx8XG4gICAgICAgIGtleSA9PT0gJ3ByZWZldGNoJ1xuICAgICAgKSB7XG4gICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgIGV4cGVjdGVkOiAnYGJvb2xlYW5gJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXG4gICAgICAgIGNvbnN0IF86IG5ldmVyID0ga2V5XG4gICAgICB9XG4gICAgfSlcblxuICAgIC8vIFRoaXMgaG9vayBpcyBpbiBhIGNvbmRpdGlvbmFsIGJ1dCB0aGF0IGlzIG9rIGJlY2F1c2UgYHByb2Nlc3MuZW52Lk5PREVfRU5WYCBuZXZlciBjaGFuZ2VzXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgY29uc3QgaGFzV2FybmVkID0gUmVhY3QudXNlUmVmKGZhbHNlKVxuICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZVxuICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAnTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnXG4gICAgICApXG4gICAgfVxuICB9XG4gIGNvbnN0IHAgPSBwcm9wcy5wcmVmZXRjaCAhPT0gZmFsc2VcblxuICBjb25zdCBbY2hpbGRFbG0sIHNldENoaWxkRWxtXSA9IFJlYWN0LnVzZVN0YXRlPEVsZW1lbnQ+KClcblxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICBjb25zdCBwYXRobmFtZSA9IChyb3V0ZXIgJiYgcm91dGVyLnBhdGhuYW1lKSB8fCAnLydcblxuICBjb25zdCB7IGhyZWYsIGFzIH0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5ocmVmLCB0cnVlKVxuICAgIHJldHVybiB7XG4gICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICBhczogcHJvcHMuYXNcbiAgICAgICAgPyByZXNvbHZlSHJlZihwYXRobmFtZSwgcHJvcHMuYXMpXG4gICAgICAgIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWYsXG4gICAgfVxuICB9LCBbcGF0aG5hbWUsIHByb3BzLmhyZWYsIHByb3BzLmFzXSlcblxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChcbiAgICAgIHAgJiZcbiAgICAgIEludGVyc2VjdGlvbk9ic2VydmVyICYmXG4gICAgICBjaGlsZEVsbSAmJlxuICAgICAgY2hpbGRFbG0udGFnTmFtZSAmJlxuICAgICAgaXNMb2NhbFVSTChocmVmKVxuICAgICkge1xuICAgICAgLy8gSm9pbiBvbiBhbiBpbnZhbGlkIFVSSSBjaGFyYWN0ZXJcbiAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzXVxuICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgcmV0dXJuIGxpc3RlblRvSW50ZXJzZWN0aW9ucyhjaGlsZEVsbSwgKCkgPT4ge1xuICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMpXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9LCBbcCwgY2hpbGRFbG0sIGhyZWYsIGFzLCByb3V0ZXJdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcbiAgLy8gRGVwcmVjYXRlZC4gV2FybmluZyBzaG93biBieSBwcm9wVHlwZSBjaGVjay4gSWYgdGhlIGNoaWxkcmVuIHByb3ZpZGVkIGlzIGEgc3RyaW5nICg8TGluaz5leGFtcGxlPC9MaW5rPikgd2Ugd3JhcCBpdCBpbiBhbiA8YT4gdGFnXG4gIGlmICh0eXBlb2YgY2hpbGRyZW4gPT09ICdzdHJpbmcnKSB7XG4gICAgY2hpbGRyZW4gPSA8YT57Y2hpbGRyZW59PC9hPlxuICB9XG5cbiAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXG4gIGNvbnN0IGNoaWxkOiBhbnkgPSBDaGlsZHJlbi5vbmx5KGNoaWxkcmVuKVxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IChlbDogYW55KSA9PiB7XG4gICAgICBpZiAoZWwpIHNldENoaWxkRWxtKGVsKVxuXG4gICAgICBpZiAoY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZC5yZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkLnJlZihlbClcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGNoaWxkLnJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZC5yZWYuY3VycmVudCA9IGVsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIG9uQ2xpY2s6IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKVxuICAgICAgfVxuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpXG4gICAgICB9XG4gICAgfSxcbiAgfVxuXG4gIGlmIChwKSB7XG4gICAgY2hpbGRQcm9wcy5vbk1vdXNlRW50ZXIgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKCFpc0xvY2FsVVJMKGhyZWYpKSByZXR1cm5cbiAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlcihlKVxuICAgICAgfVxuICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgeyBwcmlvcml0eTogdHJ1ZSB9KVxuICAgIH1cbiAgfVxuXG4gIC8vIElmIGNoaWxkIGlzIGFuIDxhPiB0YWcgYW5kIGRvZXNuJ3QgaGF2ZSBhIGhyZWYgYXR0cmlidXRlLCBvciBpZiB0aGUgJ3Bhc3NIcmVmJyBwcm9wZXJ0eSBpc1xuICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IChjaGlsZC50eXBlID09PSAnYScgJiYgISgnaHJlZicgaW4gY2hpbGQucHJvcHMpKSkge1xuICAgIGNoaWxkUHJvcHMuaHJlZiA9IGFkZEJhc2VQYXRoKFxuICAgICAgYWRkTG9jYWxlKFxuICAgICAgICBhcyxcbiAgICAgICAgdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlXG4gICAgICApXG4gICAgKVxuICB9XG5cbiAgcmV0dXJuIFJlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcylcbn1cblxuZXhwb3J0IGRlZmF1bHQgTGlua1xuIiwiLyoqXG4gKiBSZW1vdmVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggaWYgdGhlcmUgaXMgb25lLiBQcmVzZXJ2ZXMgdGhlIHJvb3QgcGF0aCBgL2AuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aFxufVxuXG4vKipcbiAqIE5vcm1hbGl6ZXMgdGhlIHRyYWlsaW5nIHNsYXNoIG9mIGEgcGF0aCBhY2NvcmRpbmcgdG8gdGhlIGB0cmFpbGluZ1NsYXNoYCBvcHRpb25cbiAqIGluIGBuZXh0LmNvbmZpZy5qc2AuXG4gKi9cbmV4cG9ydCBjb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSFxuICA/IChwYXRoOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKVxuICAgICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBwYXRoICsgJy8nXG4gICAgICB9XG4gICAgfVxuICA6IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoXG4iLCIvKiBnbG9iYWwgd2luZG93ICovXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyLCB7IE5leHRSb3V0ZXIgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3JvdXRlcidcbmltcG9ydCB7IFJvdXRlckNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvcm91dGVyLWNvbnRleHQnXG5cbnR5cGUgQ2xhc3NBcmd1bWVudHM8VD4gPSBUIGV4dGVuZHMgbmV3ICguLi5hcmdzOiBpbmZlciBVKSA9PiBhbnkgPyBVIDogYW55XG5cbnR5cGUgUm91dGVyQXJncyA9IENsYXNzQXJndW1lbnRzPHR5cGVvZiBSb3V0ZXI+XG5cbnR5cGUgU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBSb3V0ZXIgfCBudWxsXG4gIHJlYWR5Q2FsbGJhY2tzOiBBcnJheTwoKSA9PiBhbnk+XG4gIHJlYWR5KGNiOiAoKSA9PiBhbnkpOiB2b2lkXG59XG5cbmV4cG9ydCB7IFJvdXRlciwgTmV4dFJvdXRlciB9XG5cbmV4cG9ydCB0eXBlIFNpbmdsZXRvblJvdXRlciA9IFNpbmdsZXRvblJvdXRlckJhc2UgJiBOZXh0Um91dGVyXG5cbmNvbnN0IHNpbmdsZXRvblJvdXRlcjogU2luZ2xldG9uUm91dGVyQmFzZSA9IHtcbiAgcm91dGVyOiBudWxsLCAvLyBob2xkcyB0aGUgYWN0dWFsIHJvdXRlciBpbnN0YW5jZVxuICByZWFkeUNhbGxiYWNrczogW10sXG4gIHJlYWR5KGNiOiAoKSA9PiB2b2lkKSB7XG4gICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKVxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKVxuICAgIH1cbiAgfSxcbn1cblxuLy8gQ3JlYXRlIHB1YmxpYyBwcm9wZXJ0aWVzIGFuZCBtZXRob2RzIG9mIHRoZSByb3V0ZXIgaW4gdGhlIHNpbmdsZXRvblJvdXRlclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXG4gICdwYXRobmFtZScsXG4gICdyb3V0ZScsXG4gICdxdWVyeScsXG4gICdhc1BhdGgnLFxuICAnY29tcG9uZW50cycsXG4gICdpc0ZhbGxiYWNrJyxcbiAgJ2Jhc2VQYXRoJyxcbiAgJ2xvY2FsZScsXG4gICdsb2NhbGVzJyxcbiAgJ2RlZmF1bHRMb2NhbGUnLFxuXVxuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAncm91dGVDaGFuZ2VTdGFydCcsXG4gICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcbiAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAncm91dGVDaGFuZ2VFcnJvcicsXG4gICdoYXNoQ2hhbmdlU3RhcnQnLFxuICAnaGFzaENoYW5nZUNvbXBsZXRlJyxcbl1cbmNvbnN0IGNvcmVNZXRob2RGaWVsZHMgPSBbXG4gICdwdXNoJyxcbiAgJ3JlcGxhY2UnLFxuICAncmVsb2FkJyxcbiAgJ2JhY2snLFxuICAncHJlZmV0Y2gnLFxuICAnYmVmb3JlUG9wU3RhdGUnLFxuXVxuXG4vLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCAnZXZlbnRzJywge1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIFJvdXRlci5ldmVudHNcbiAgfSxcbn0pXG5cbnVybFByb3BlcnR5RmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2UsIHdlIG5lZWQgdG8gcmV0dXJuXG4gIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxuICAvLyBUaGUgdmFsdWUgbWlnaHQgZ2V0IGNoYW5nZWQgYXMgd2UgY2hhbmdlIHJvdXRlcyBhbmQgdGhpcyBpcyB0aGVcbiAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcbiAgICBnZXQoKSB7XG4gICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKSBhcyBhbnlcbiAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdIGFzIHN0cmluZ1xuICAgIH0sXG4gIH0pXG59KVxuXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gIC8vIFdlIGRvbid0IHJlYWxseSBrbm93IHRoZSB0eXBlcyBoZXJlLCBzbyB3ZSBhZGQgdGhlbSBsYXRlciBpbnN0ZWFkXG4gIDsoc2luZ2xldG9uUm91dGVyIGFzIGFueSlbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgcmV0dXJuIHJvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgfVxufSlcblxucm91dGVyRXZlbnRzLmZvckVhY2goKGV2ZW50KSA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKSA9PiB7XG4gICAgUm91dGVyLmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgIGNvbnN0IGV2ZW50RmllbGQgPSBgb24ke2V2ZW50LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7ZXZlbnQuc3Vic3RyaW5nKFxuICAgICAgICAxXG4gICAgICApfWBcbiAgICAgIGNvbnN0IF9zaW5nbGV0b25Sb3V0ZXIgPSBzaW5nbGV0b25Sb3V0ZXIgYXMgYW55XG4gICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0oLi4uYXJncylcbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKVxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYCR7ZXJyLm1lc3NhZ2V9XFxuJHtlcnIuc3RhY2t9YClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gIH0pXG59KVxuXG5mdW5jdGlvbiBnZXRSb3V0ZXIoKTogUm91dGVyIHtcbiAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9XG4gICAgICAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgK1xuICAgICAgJ1lvdSBzaG91bGQgb25seSB1c2UgXCJuZXh0L3JvdXRlclwiIGluc2lkZSB0aGUgY2xpZW50IHNpZGUgb2YgeW91ciBhcHAuXFxuJ1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICB9XG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIEV4cG9ydCB0aGUgc2luZ2xldG9uUm91dGVyIGFuZCB0aGlzIGlzIHRoZSBwdWJsaWMgQVBJLlxuZXhwb3J0IGRlZmF1bHQgc2luZ2xldG9uUm91dGVyIGFzIFNpbmdsZXRvblJvdXRlclxuXG4vLyBSZWV4cG9ydCB0aGUgd2l0aFJvdXRlIEhPQ1xuZXhwb3J0IHsgZGVmYXVsdCBhcyB3aXRoUm91dGVyIH0gZnJvbSAnLi93aXRoLXJvdXRlcidcblxuZXhwb3J0IGZ1bmN0aW9uIHVzZVJvdXRlcigpOiBOZXh0Um91dGVyIHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoUm91dGVyQ29udGV4dClcbn1cblxuLy8gSU5URVJOQUwgQVBJU1xuLy8gLS0tLS0tLS0tLS0tLVxuLy8gKGRvIG5vdCB1c2UgZm9sbG93aW5nIGV4cG9ydHMgaW5zaWRlIHRoZSBhcHApXG5cbi8vIENyZWF0ZSBhIHJvdXRlciBhbmQgYXNzaWduIGl0IGFzIHRoZSBzaW5nbGV0b24gaW5zdGFuY2UuXG4vLyBUaGlzIGlzIHVzZWQgaW4gY2xpZW50IHNpZGUgd2hlbiB3ZSBhcmUgaW5pdGlsaXppbmcgdGhlIGFwcC5cbi8vIFRoaXMgc2hvdWxkICoqbm90KiogdXNlIGluc2lkZSB0aGUgc2VydmVyLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZVJvdXRlciA9ICguLi5hcmdzOiBSb3V0ZXJBcmdzKTogUm91dGVyID0+IHtcbiAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBSb3V0ZXIoLi4uYXJncylcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKSA9PiBjYigpKVxuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHlDYWxsYmFja3MgPSBbXVxuXG4gIHJldHVybiBzaW5nbGV0b25Sb3V0ZXIucm91dGVyXG59XG5cbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byBjcmVhdGUgdGhlIGB3aXRoUm91dGVyYCByb3V0ZXIgaW5zdGFuY2VcbmV4cG9ydCBmdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyOiBSb3V0ZXIpOiBOZXh0Um91dGVyIHtcbiAgY29uc3QgX3JvdXRlciA9IHJvdXRlciBhcyBhbnlcbiAgY29uc3QgaW5zdGFuY2UgPSB7fSBhcyBhbnlcblxuICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKSB7XG4gICAgaWYgKHR5cGVvZiBfcm91dGVyW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IE9iamVjdC5hc3NpZ24oXG4gICAgICAgIEFycmF5LmlzQXJyYXkoX3JvdXRlcltwcm9wZXJ0eV0pID8gW10gOiB7fSxcbiAgICAgICAgX3JvdXRlcltwcm9wZXJ0eV1cbiAgICAgICkgLy8gbWFrZXMgc3VyZSBxdWVyeSBpcyBub3Qgc3RhdGVmdWxcbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuXG4gICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcltwcm9wZXJ0eV1cbiAgfVxuXG4gIC8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbiAgaW5zdGFuY2UuZXZlbnRzID0gUm91dGVyLmV2ZW50c1xuXG4gIGNvcmVNZXRob2RGaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJnczogYW55W10pID0+IHtcbiAgICAgIHJldHVybiBfcm91dGVyW2ZpZWxkXSguLi5hcmdzKVxuICAgIH1cbiAgfSlcblxuICByZXR1cm4gaW5zdGFuY2Vcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7IE5leHRDb21wb25lbnRUeXBlLCBOZXh0UGFnZUNvbnRleHQgfSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyLCB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxuZXhwb3J0IHR5cGUgV2l0aFJvdXRlclByb3BzID0ge1xuICByb3V0ZXI6IE5leHRSb3V0ZXJcbn1cblxuZXhwb3J0IHR5cGUgRXhjbHVkZVJvdXRlclByb3BzPFA+ID0gUGljazxcbiAgUCxcbiAgRXhjbHVkZTxrZXlvZiBQLCBrZXlvZiBXaXRoUm91dGVyUHJvcHM+XG4+XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHdpdGhSb3V0ZXI8XG4gIFAgZXh0ZW5kcyBXaXRoUm91dGVyUHJvcHMsXG4gIEMgPSBOZXh0UGFnZUNvbnRleHRcbj4oXG4gIENvbXBvc2VkQ29tcG9uZW50OiBOZXh0Q29tcG9uZW50VHlwZTxDLCBhbnksIFA+XG4pOiBSZWFjdC5Db21wb25lbnRUeXBlPEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPj4ge1xuICBmdW5jdGlvbiBXaXRoUm91dGVyV3JhcHBlcihwcm9wczogYW55KSB7XG4gICAgcmV0dXJuIDxDb21wb3NlZENvbXBvbmVudCByb3V0ZXI9e3VzZVJvdXRlcigpfSB7Li4ucHJvcHN9IC8+XG4gIH1cblxuICBXaXRoUm91dGVyV3JhcHBlci5nZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5nZXRJbml0aWFsUHJvcHNcbiAgLy8gVGhpcyBpcyBuZWVkZWQgdG8gYWxsb3cgY2hlY2tpbmcgZm9yIGN1c3RvbSBnZXRJbml0aWFsUHJvcHMgaW4gX2FwcFxuICA7KFdpdGhSb3V0ZXJXcmFwcGVyIGFzIGFueSkub3JpZ0dldEluaXRpYWxQcm9wcyA9IChDb21wb3NlZENvbXBvbmVudCBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHNcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBjb25zdCBuYW1lID1cbiAgICAgIENvbXBvc2VkQ29tcG9uZW50LmRpc3BsYXlOYW1lIHx8IENvbXBvc2VkQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWBcbiAgfVxuXG4gIHJldHVybiBXaXRoUm91dGVyV3JhcHBlclxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKipcbiAqIFRva2VuaXplIGlucHV0IHN0cmluZy5cbiAqL1xuZnVuY3Rpb24gbGV4ZXIoc3RyKSB7XG4gICAgdmFyIHRva2VucyA9IFtdO1xuICAgIHZhciBpID0gMDtcbiAgICB3aGlsZSAoaSA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSBzdHJbaV07XG4gICAgICAgIGlmIChjaGFyID09PSBcIipcIiB8fCBjaGFyID09PSBcIitcIiB8fCBjaGFyID09PSBcIj9cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk1PRElGSUVSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFU0NBUEVEX0NIQVJcIiwgaW5kZXg6IGkrKywgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwie1wiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiT1BFTlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwifVwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0xPU0VcIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIjpcIikge1xuICAgICAgICAgICAgdmFyIG5hbWUgPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgc3RyLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHZhciBjb2RlID0gc3RyLmNoYXJDb2RlQXQoaik7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIC8vIGAwLTlgXG4gICAgICAgICAgICAgICAgKGNvZGUgPj0gNDggJiYgY29kZSA8PSA1NykgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYEEtWmBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gNjUgJiYgY29kZSA8PSA5MCkgfHxcbiAgICAgICAgICAgICAgICAgICAgLy8gYGEtemBcbiAgICAgICAgICAgICAgICAgICAgKGNvZGUgPj0gOTcgJiYgY29kZSA8PSAxMjIpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBfYFxuICAgICAgICAgICAgICAgICAgICBjb2RlID09PSA5NSkge1xuICAgICAgICAgICAgICAgICAgICBuYW1lICs9IHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIW5hbWUpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGFyYW1ldGVyIG5hbWUgYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJOQU1FXCIsIGluZGV4OiBpLCB2YWx1ZTogbmFtZSB9KTtcbiAgICAgICAgICAgIGkgPSBqO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiKFwiKSB7XG4gICAgICAgICAgICB2YXIgY291bnQgPSAxO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm4gPSBcIlwiO1xuICAgICAgICAgICAgdmFyIGogPSBpICsgMTtcbiAgICAgICAgICAgIGlmIChzdHJbal0gPT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlBhdHRlcm4gY2Fubm90IHN0YXJ0IHdpdGggXFxcIj9cXFwiIGF0IFwiICsgaik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIlxcXFxcIikge1xuICAgICAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdICsgc3RyW2orK107XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIilcIikge1xuICAgICAgICAgICAgICAgICAgICBjb3VudC0tO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN0cltqXSA9PT0gXCIoXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0cltqICsgMV0gIT09IFwiP1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2FwdHVyaW5nIGdyb3VwcyBhcmUgbm90IGFsbG93ZWQgYXQgXCIgKyBqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXR0ZXJuICs9IHN0cltqKytdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNvdW50KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJVbmJhbGFuY2VkIHBhdHRlcm4gYXQgXCIgKyBpKTtcbiAgICAgICAgICAgIGlmICghcGF0dGVybilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiTWlzc2luZyBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiUEFUVEVSTlwiLCBpbmRleDogaSwgdmFsdWU6IHBhdHRlcm4gfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJDSEFSXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgfVxuICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJFTkRcIiwgaW5kZXg6IGksIHZhbHVlOiBcIlwiIH0pO1xuICAgIHJldHVybiB0b2tlbnM7XG59XG4vKipcbiAqIFBhcnNlIGEgc3RyaW5nIGZvciB0aGUgcmF3IHRva2Vucy5cbiAqL1xuZnVuY3Rpb24gcGFyc2Uoc3RyLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgdG9rZW5zID0gbGV4ZXIoc3RyKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLnByZWZpeGVzLCBwcmVmaXhlcyA9IF9hID09PSB2b2lkIDAgPyBcIi4vXCIgOiBfYTtcbiAgICB2YXIgZGVmYXVsdFBhdHRlcm4gPSBcIlteXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl0rP1wiO1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICB2YXIga2V5ID0gMDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHBhdGggPSBcIlwiO1xuICAgIHZhciB0cnlDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgaWYgKGkgPCB0b2tlbnMubGVuZ3RoICYmIHRva2Vuc1tpXS50eXBlID09PSB0eXBlKVxuICAgICAgICAgICAgcmV0dXJuIHRva2Vuc1tpKytdLnZhbHVlO1xuICAgIH07XG4gICAgdmFyIG11c3RDb25zdW1lID0gZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdHJ5Q29uc3VtZSh0eXBlKTtcbiAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgICAgIHZhciBfYSA9IHRva2Vuc1tpXSwgbmV4dFR5cGUgPSBfYS50eXBlLCBpbmRleCA9IF9hLmluZGV4O1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5leHBlY3RlZCBcIiArIG5leHRUeXBlICsgXCIgYXQgXCIgKyBpbmRleCArIFwiLCBleHBlY3RlZCBcIiArIHR5cGUpO1xuICAgIH07XG4gICAgdmFyIGNvbnN1bWVUZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gXCJcIjtcbiAgICAgICAgdmFyIHZhbHVlO1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgd2hpbGUgKCh2YWx1ZSA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIikpKSB7XG4gICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIHdoaWxlIChpIDwgdG9rZW5zLmxlbmd0aCkge1xuICAgICAgICB2YXIgY2hhciA9IHRyeUNvbnN1bWUoXCJDSEFSXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IHRyeUNvbnN1bWUoXCJOQU1FXCIpO1xuICAgICAgICB2YXIgcGF0dGVybiA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpO1xuICAgICAgICBpZiAobmFtZSB8fCBwYXR0ZXJuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY2hhciB8fCBcIlwiO1xuICAgICAgICAgICAgaWYgKHByZWZpeGVzLmluZGV4T2YocHJlZml4KSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHByZWZpeDtcbiAgICAgICAgICAgICAgICBwcmVmaXggPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiBuYW1lIHx8IGtleSsrLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBwYXR0ZXJuIHx8IGRlZmF1bHRQYXR0ZXJuLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgdmFsdWUgPSBjaGFyIHx8IHRyeUNvbnN1bWUoXCJFU0NBUEVEX0NIQVJcIik7XG4gICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgcGF0aCArPSB2YWx1ZTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICByZXN1bHQucHVzaChwYXRoKTtcbiAgICAgICAgICAgIHBhdGggPSBcIlwiO1xuICAgICAgICB9XG4gICAgICAgIHZhciBvcGVuID0gdHJ5Q29uc3VtZShcIk9QRU5cIik7XG4gICAgICAgIGlmIChvcGVuKSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIHZhciBuYW1lXzEgPSB0cnlDb25zdW1lKFwiTkFNRVwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHBhdHRlcm5fMSA9IHRyeUNvbnN1bWUoXCJQQVRURVJOXCIpIHx8IFwiXCI7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gY29uc3VtZVRleHQoKTtcbiAgICAgICAgICAgIG11c3RDb25zdW1lKFwiQ0xPU0VcIik7XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZV8xIHx8IChwYXR0ZXJuXzEgPyBrZXkrKyA6IFwiXCIpLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IG5hbWVfMSAmJiAhcGF0dGVybl8xID8gZGVmYXVsdFBhdHRlcm4gOiBwYXR0ZXJuXzEsXG4gICAgICAgICAgICAgICAgcHJlZml4OiBwcmVmaXgsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBzdWZmaXgsXG4gICAgICAgICAgICAgICAgbW9kaWZpZXI6IHRyeUNvbnN1bWUoXCJNT0RJRklFUlwiKSB8fCBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIG11c3RDb25zdW1lKFwiRU5EXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xufVxuZXhwb3J0cy5wYXJzZSA9IHBhcnNlO1xuLyoqXG4gKiBDb21waWxlIGEgc3RyaW5nIHRvIGEgdGVtcGxhdGUgZnVuY3Rpb24gZm9yIHRoZSBwYXRoLlxuICovXG5mdW5jdGlvbiBjb21waWxlKHN0ciwgb3B0aW9ucykge1xuICAgIHJldHVybiB0b2tlbnNUb0Z1bmN0aW9uKHBhcnNlKHN0ciwgb3B0aW9ucyksIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jb21waWxlID0gY29tcGlsZTtcbi8qKlxuICogRXhwb3NlIGEgbWV0aG9kIGZvciB0cmFuc2Zvcm1pbmcgdG9rZW5zIGludG8gdGhlIHBhdGggZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIHRva2Vuc1RvRnVuY3Rpb24odG9rZW5zLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgcmVGbGFncyA9IGZsYWdzKG9wdGlvbnMpO1xuICAgIHZhciBfYSA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYSwgX2IgPSBvcHRpb25zLnZhbGlkYXRlLCB2YWxpZGF0ZSA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2I7XG4gICAgLy8gQ29tcGlsZSBhbGwgdGhlIHRva2VucyBpbnRvIHJlZ2V4cHMuXG4gICAgdmFyIG1hdGNoZXMgPSB0b2tlbnMubWFwKGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFJlZ0V4cChcIl4oPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikkXCIsIHJlRmxhZ3MpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc1tpXTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdG9rZW4gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICAgICAgICBwYXRoICs9IHRva2VuO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YSA/IGRhdGFbdG9rZW4ubmFtZV0gOiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB2YXIgb3B0aW9uYWwgPSB0b2tlbi5tb2RpZmllciA9PT0gXCI/XCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiKlwiO1xuICAgICAgICAgICAgdmFyIHJlcGVhdCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIrXCI7XG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcGVhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgcmVwZWF0LCBidXQgZ290IGFuIGFycmF5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodmFsdWUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBub3QgYmUgZW1wdHlcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdmFsdWUubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUodmFsdWVbal0sIHRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRlICYmICFtYXRjaGVzW2ldLnRlc3Qoc2VnbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhbGwgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIHZhbHVlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSBlbmNvZGUoU3RyaW5nKHZhbHVlKSwgdG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBcXFwiXCIgKyB0b2tlbi5uYW1lICsgXCJcXFwiIHRvIG1hdGNoIFxcXCJcIiArIHRva2VuLnBhdHRlcm4gKyBcIlxcXCIsIGJ1dCBnb3QgXFxcIlwiICsgc2VnbWVudCArIFwiXFxcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbi5wcmVmaXggKyBzZWdtZW50ICsgdG9rZW4uc3VmZml4O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgdmFyIHR5cGVPZk1lc3NhZ2UgPSByZXBlYXQgPyBcImFuIGFycmF5XCIgOiBcImEgc3RyaW5nXCI7XG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBiZSBcIiArIHR5cGVPZk1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIH07XG59XG5leHBvcnRzLnRva2Vuc1RvRnVuY3Rpb24gPSB0b2tlbnNUb0Z1bmN0aW9uO1xuLyoqXG4gKiBDcmVhdGUgcGF0aCBtYXRjaCBmdW5jdGlvbiBmcm9tIGBwYXRoLXRvLXJlZ2V4cGAgc3BlYy5cbiAqL1xuZnVuY3Rpb24gbWF0Y2goc3RyLCBvcHRpb25zKSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICB2YXIgcmUgPSBwYXRoVG9SZWdleHAoc3RyLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLm1hdGNoID0gbWF0Y2g7XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIG91dHB1dC5cbiAqL1xuZnVuY3Rpb24gcmVnZXhwVG9GdW5jdGlvbihyZSwga2V5cywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIF9hID0gb3B0aW9ucy5kZWNvZGUsIGRlY29kZSA9IF9hID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9hO1xuICAgIHJldHVybiBmdW5jdGlvbiAocGF0aG5hbWUpIHtcbiAgICAgICAgdmFyIG0gPSByZS5leGVjKHBhdGhuYW1lKTtcbiAgICAgICAgaWYgKCFtKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB2YXIgcGF0aCA9IG1bMF0sIGluZGV4ID0gbS5pbmRleDtcbiAgICAgICAgdmFyIHBhcmFtcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgaWYgKG1baV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaSAtIDFdO1xuICAgICAgICAgICAgaWYgKGtleS5tb2RpZmllciA9PT0gXCIqXCIgfHwga2V5Lm1vZGlmaWVyID09PSBcIitcIikge1xuICAgICAgICAgICAgICAgIHBhcmFtc1trZXkubmFtZV0gPSBtW2ldLnNwbGl0KGtleS5wcmVmaXggKyBrZXkuc3VmZml4KS5tYXAoZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGUodmFsdWUsIGtleSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gZGVjb2RlKG1baV0sIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgX2xvb3BfMShpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBpbmRleDogaW5kZXgsIHBhcmFtczogcGFyYW1zIH07XG4gICAgfTtcbn1cbmV4cG9ydHMucmVnZXhwVG9GdW5jdGlvbiA9IHJlZ2V4cFRvRnVuY3Rpb247XG4vKipcbiAqIEVzY2FwZSBhIHJlZ3VsYXIgZXhwcmVzc2lvbiBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVN0cmluZyhzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyhbLisqPz1eIToke30oKVtcXF18L1xcXFxdKS9nLCBcIlxcXFwkMVwiKTtcbn1cbi8qKlxuICogR2V0IHRoZSBmbGFncyBmb3IgYSByZWdleHAgZnJvbSB0aGUgb3B0aW9ucy5cbiAqL1xuZnVuY3Rpb24gZmxhZ3Mob3B0aW9ucykge1xuICAgIHJldHVybiBvcHRpb25zICYmIG9wdGlvbnMuc2Vuc2l0aXZlID8gXCJcIiA6IFwiaVwiO1xufVxuLyoqXG4gKiBQdWxsIG91dCBrZXlzIGZyb20gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpIHtcbiAgICBpZiAoIWtleXMpXG4gICAgICAgIHJldHVybiBwYXRoO1xuICAgIC8vIFVzZSBhIG5lZ2F0aXZlIGxvb2thaGVhZCB0byBtYXRjaCBvbmx5IGNhcHR1cmluZyBncm91cHMuXG4gICAgdmFyIGdyb3VwcyA9IHBhdGguc291cmNlLm1hdGNoKC9cXCgoPyFcXD8pL2cpO1xuICAgIGlmIChncm91cHMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBncm91cHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGtleXMucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogaSxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgc3VmZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiBcIlwiLFxuICAgICAgICAgICAgICAgIHBhdHRlcm46IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuLyoqXG4gKiBUcmFuc2Zvcm0gYW4gYXJyYXkgaW50byBhIHJlZ2V4cC5cbiAqL1xuZnVuY3Rpb24gYXJyYXlUb1JlZ2V4cChwYXRocywga2V5cywgb3B0aW9ucykge1xuICAgIHZhciBwYXJ0cyA9IHBhdGhzLm1hcChmdW5jdGlvbiAocGF0aCkgeyByZXR1cm4gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpLnNvdXJjZTsgfSk7XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAoXCIoPzpcIiArIHBhcnRzLmpvaW4oXCJ8XCIpICsgXCIpXCIsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbi8qKlxuICogQ3JlYXRlIGEgcGF0aCByZWdleHAgZnJvbSBzdHJpbmcgaW5wdXQuXG4gKi9cbmZ1bmN0aW9uIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9SZWdleHAocGFyc2UocGF0aCwgb3B0aW9ucyksIGtleXMsIG9wdGlvbnMpO1xufVxuLyoqXG4gKiBFeHBvc2UgYSBmdW5jdGlvbiBmb3IgdGFraW5nIHRva2VucyBhbmQgcmV0dXJuaW5nIGEgUmVnRXhwLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb1JlZ2V4cCh0b2tlbnMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuc3RyaWN0LCBzdHJpY3QgPSBfYSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfYSwgX2IgPSBvcHRpb25zLnN0YXJ0LCBzdGFydCA9IF9iID09PSB2b2lkIDAgPyB0cnVlIDogX2IsIF9jID0gb3B0aW9ucy5lbmQsIGVuZCA9IF9jID09PSB2b2lkIDAgPyB0cnVlIDogX2MsIF9kID0gb3B0aW9ucy5lbmNvZGUsIGVuY29kZSA9IF9kID09PSB2b2lkIDAgPyBmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSA6IF9kO1xuICAgIHZhciBlbmRzV2l0aCA9IFwiW1wiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZW5kc1dpdGggfHwgXCJcIikgKyBcIl18JFwiO1xuICAgIHZhciBkZWxpbWl0ZXIgPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmRlbGltaXRlciB8fCBcIi8jP1wiKSArIFwiXVwiO1xuICAgIHZhciByb3V0ZSA9IHN0YXJ0ID8gXCJeXCIgOiBcIlwiO1xuICAgIC8vIEl0ZXJhdGUgb3ZlciB0aGUgdG9rZW5zIGFuZCBjcmVhdGUgb3VyIHJlZ2V4cCBzdHJpbmcuXG4gICAgZm9yICh2YXIgX2kgPSAwLCB0b2tlbnNfMSA9IHRva2VuczsgX2kgPCB0b2tlbnNfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIHRva2VuID0gdG9rZW5zXzFbX2ldO1xuICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJlZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5wcmVmaXgpKTtcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSBlc2NhcGVTdHJpbmcoZW5jb2RlKHRva2VuLnN1ZmZpeCkpO1xuICAgICAgICAgICAgaWYgKHRva2VuLnBhdHRlcm4pIHtcbiAgICAgICAgICAgICAgICBpZiAoa2V5cylcbiAgICAgICAgICAgICAgICAgICAga2V5cy5wdXNoKHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAocHJlZml4IHx8IHN1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1vZCA9IHRva2VuLm1vZGlmaWVyID09PSBcIipcIiA/IFwiP1wiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIigoPzpcIiArIHRva2VuLnBhdHRlcm4gKyBcIikoPzpcIiArIHN1ZmZpeCArIHByZWZpeCArIFwiKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKSopXCIgKyBzdWZmaXggKyBcIilcIiArIG1vZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKFwiICsgdG9rZW4ucGF0dGVybiArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcm91dGUgKz0gXCIoPzpcIiArIHByZWZpeCArIHN1ZmZpeCArIFwiKVwiICsgdG9rZW4ubW9kaWZpZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKGVuZCkge1xuICAgICAgICBpZiAoIXN0cmljdClcbiAgICAgICAgICAgIHJvdXRlICs9IGRlbGltaXRlciArIFwiP1wiO1xuICAgICAgICByb3V0ZSArPSAhb3B0aW9ucy5lbmRzV2l0aCA/IFwiJFwiIDogXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB2YXIgZW5kVG9rZW4gPSB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDFdO1xuICAgICAgICB2YXIgaXNFbmREZWxpbWl0ZWQgPSB0eXBlb2YgZW5kVG9rZW4gPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgID8gZGVsaW1pdGVyLmluZGV4T2YoZW5kVG9rZW5bZW5kVG9rZW4ubGVuZ3RoIC0gMV0pID4gLTFcbiAgICAgICAgICAgIDogLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgICAgZW5kVG9rZW4gPT09IHVuZGVmaW5lZDtcbiAgICAgICAgaWYgKCFzdHJpY3QpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBkZWxpbWl0ZXIgKyBcIig/PVwiICsgZW5kc1dpdGggKyBcIikpP1wiO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNFbmREZWxpbWl0ZWQpIHtcbiAgICAgICAgICAgIHJvdXRlICs9IFwiKD89XCIgKyBkZWxpbWl0ZXIgKyBcInxcIiArIGVuZHNXaXRoICsgXCIpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBSZWdFeHAocm91dGUsIGZsYWdzKG9wdGlvbnMpKTtcbn1cbmV4cG9ydHMudG9rZW5zVG9SZWdleHAgPSB0b2tlbnNUb1JlZ2V4cDtcbi8qKlxuICogTm9ybWFsaXplIHRoZSBnaXZlbiBwYXRoIHN0cmluZywgcmV0dXJuaW5nIGEgcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEFuIGVtcHR5IGFycmF5IGNhbiBiZSBwYXNzZWQgaW4gZm9yIHRoZSBrZXlzLCB3aGljaCB3aWxsIGhvbGQgdGhlXG4gKiBwbGFjZWhvbGRlciBrZXkgZGVzY3JpcHRpb25zLiBGb3IgZXhhbXBsZSwgdXNpbmcgYC91c2VyLzppZGAsIGBrZXlzYCB3aWxsXG4gKiBjb250YWluIGBbeyBuYW1lOiAnaWQnLCBkZWxpbWl0ZXI6ICcvJywgb3B0aW9uYWw6IGZhbHNlLCByZXBlYXQ6IGZhbHNlIH1dYC5cbiAqL1xuZnVuY3Rpb24gcGF0aFRvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAocGF0aCBpbnN0YW5jZW9mIFJlZ0V4cClcbiAgICAgICAgcmV0dXJuIHJlZ2V4cFRvUmVnZXhwKHBhdGgsIGtleXMpO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHBhdGgpKVxuICAgICAgICByZXR1cm4gYXJyYXlUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKTtcbiAgICByZXR1cm4gc3RyaW5nVG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG59XG5leHBvcnRzLnBhdGhUb1JlZ2V4cCA9IHBhdGhUb1JlZ2V4cDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIi8qXG5NSVQgTGljZW5zZVxuXG5Db3B5cmlnaHQgKGMpIEphc29uIE1pbGxlciAoaHR0cHM6Ly9qYXNvbmZvcm1hdC5jb20vKVxuXG5QZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuXG5UaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cblxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG4qL1xuXG4vLyBUaGlzIGZpbGUgaXMgYmFzZWQgb24gaHR0cHM6Ly9naXRodWIuY29tL2RldmVsb3BpdC9taXR0L2Jsb2IvdjEuMS4zL3NyYy9pbmRleC5qc1xuLy8gSXQncyBiZWVuIGVkaXRlZCBmb3IgdGhlIG5lZWRzIG9mIHRoaXMgc2NyaXB0XG4vLyBTZWUgdGhlIExJQ0VOU0UgYXQgdGhlIHRvcCBvZiB0aGUgZmlsZVxuXG50eXBlIEhhbmRsZXIgPSAoLi4uZXZ0czogYW55W10pID0+IHZvaWRcblxuZXhwb3J0IHR5cGUgTWl0dEVtaXR0ZXIgPSB7XG4gIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcik6IHZvaWRcbiAgZW1pdCh0eXBlOiBzdHJpbmcsIC4uLmV2dHM6IGFueVtdKTogdm9pZFxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtaXR0KCk6IE1pdHRFbWl0dGVyIHtcbiAgY29uc3QgYWxsOiB7IFtzOiBzdHJpbmddOiBIYW5kbGVyW10gfSA9IE9iamVjdC5jcmVhdGUobnVsbClcblxuICByZXR1cm4ge1xuICAgIG9uKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgOyhhbGxbdHlwZV0gfHwgKGFsbFt0eXBlXSA9IFtdKSkucHVzaChoYW5kbGVyKVxuICAgIH0sXG5cbiAgICBvZmYodHlwZTogc3RyaW5nLCBoYW5kbGVyOiBIYW5kbGVyKSB7XG4gICAgICBpZiAoYWxsW3R5cGVdKSB7XG4gICAgICAgIGFsbFt0eXBlXS5zcGxpY2UoYWxsW3R5cGVdLmluZGV4T2YoaGFuZGxlcikgPj4+IDAsIDEpXG4gICAgICB9XG4gICAgfSxcblxuICAgIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgOyhhbGxbdHlwZV0gfHwgW10pLnNsaWNlKCkubWFwKChoYW5kbGVyOiBIYW5kbGVyKSA9PiB7XG4gICAgICAgIGhhbmRsZXIoLi4uZXZ0cylcbiAgICAgIH0pXG4gICAgfSxcbiAgfVxufVxuIiwiLyogZ2xvYmFsIF9fTkVYVF9EQVRBX18gKi9cbi8vIHRzbGludDpkaXNhYmxlOm5vLWNvbnNvbGVcbmltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgeyBDb21wb25lbnRUeXBlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBVcmxPYmplY3QgfSBmcm9tICd1cmwnXG5pbXBvcnQge1xuICBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCxcbiAgcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gsXG59IGZyb20gJy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5pbXBvcnQgeyBHb29kUGFnZUNhY2hlLCBTdHlsZVNoZWV0VHVwbGUgfSBmcm9tICcuLi8uLi8uLi9jbGllbnQvcGFnZS1sb2FkZXInXG5pbXBvcnQgeyBkZW5vcm1hbGl6ZVBhZ2VQYXRoIH0gZnJvbSAnLi4vLi4vc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aCdcbmltcG9ydCBtaXR0LCB7IE1pdHRFbWl0dGVyIH0gZnJvbSAnLi4vbWl0dCdcbmltcG9ydCB7XG4gIEFwcENvbnRleHRUeXBlLFxuICBmb3JtYXRXaXRoVmFsaWRhdGlvbixcbiAgZ2V0TG9jYXRpb25PcmlnaW4sXG4gIGdldFVSTCxcbiAgbG9hZEdldEluaXRpYWxQcm9wcyxcbiAgTmV4dFBhZ2VDb250ZXh0LFxuICBTVCxcbn0gZnJvbSAnLi4vdXRpbHMnXG5pbXBvcnQgeyBpc0R5bmFtaWNSb3V0ZSB9IGZyb20gJy4vdXRpbHMvaXMtZHluYW1pYydcbmltcG9ydCB7IHBhcnNlUmVsYXRpdmVVcmwgfSBmcm9tICcuL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybCdcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3V0aWxzL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHJlc29sdmVSZXdyaXRlcyBmcm9tICcuL3V0aWxzL3Jlc29sdmUtcmV3cml0ZXMnXG5pbXBvcnQgeyBnZXRSb3V0ZU1hdGNoZXIgfSBmcm9tICcuL3V0aWxzL3JvdXRlLW1hdGNoZXInXG5pbXBvcnQgeyBnZXRSb3V0ZVJlZ2V4IH0gZnJvbSAnLi91dGlscy9yb3V0ZS1yZWdleCdcbmltcG9ydCBlc2NhcGVQYXRoRGVsaW1pdGVycyBmcm9tICcuL3V0aWxzL2VzY2FwZS1wYXRoLWRlbGltaXRlcnMnXG5cbmludGVyZmFjZSBUcmFuc2l0aW9uT3B0aW9ucyB7XG4gIHNoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmludGVyZmFjZSBOZXh0SGlzdG9yeVN0YXRlIHtcbiAgdXJsOiBzdHJpbmdcbiAgYXM6IHN0cmluZ1xuICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xufVxuXG50eXBlIEhpc3RvcnlTdGF0ZSA9IG51bGwgfCB7IF9fTjogZmFsc2UgfSB8ICh7IF9fTjogdHJ1ZSB9ICYgTmV4dEhpc3RvcnlTdGF0ZSlcblxuY29uc3QgYmFzZVBhdGggPSAocHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCBhcyBzdHJpbmcpIHx8ICcnXG5cbmZ1bmN0aW9uIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSB7XG4gIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICBjYW5jZWxsZWQ6IHRydWUsXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aDogc3RyaW5nLCBwcmVmaXg/OiBzdHJpbmcpIHtcbiAgcmV0dXJuIHByZWZpeCAmJiBwYXRoLnN0YXJ0c1dpdGgoJy8nKVxuICAgID8gcGF0aCA9PT0gJy8nXG4gICAgICA/IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeClcbiAgICAgIDogYCR7cHJlZml4fSR7cGF0aH1gXG4gICAgOiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGUoXG4gIHBhdGg6IHN0cmluZyxcbiAgbG9jYWxlPzogc3RyaW5nIHwgZmFsc2UsXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbikge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiYgbG9jYWxlICE9PSBkZWZhdWx0TG9jYWxlICYmICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlKVxuICAgICAgPyBhZGRQYXRoUHJlZml4KHBhdGgsICcvJyArIGxvY2FsZSlcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxMb2NhbGUocGF0aDogc3RyaW5nLCBsb2NhbGU/OiBzdHJpbmcpIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmIHBhdGguc3RhcnRzV2l0aCgnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgYXMpXG5cbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cbiAgICAgIHRocm93IGVyclxuICAgIH1cbiAgfVxuXG4gIGNoYW5nZVN0YXRlKFxuICAgIG1ldGhvZDogSGlzdG9yeU1ldGhvZCxcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhczogc3RyaW5nLFxuICAgIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge31cbiAgKTogdm9pZCB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnkgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2Ygd2luZG93Lmhpc3RvcnlbbWV0aG9kXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkuJHttZXRob2R9IGlzIG5vdCBhdmFpbGFibGVgKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWV0aG9kICE9PSAncHVzaFN0YXRlJyB8fCBnZXRVUkwoKSAhPT0gYXMpIHtcbiAgICAgIHRoaXMuX3NoYWxsb3cgPSBvcHRpb25zLnNoYWxsb3dcbiAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oXG4gICAgICAgIHtcbiAgICAgICAgICB1cmwsXG4gICAgICAgICAgYXMsXG4gICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICBfX046IHRydWUsXG4gICAgICAgIH0gYXMgSGlzdG9yeVN0YXRlLFxuICAgICAgICAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgLy8gUGFzc2luZyB0aGUgZW1wdHkgc3RyaW5nIGhlcmUgc2hvdWxkIGJlIHNhZmUgYWdhaW5zdCBmdXR1cmUgY2hhbmdlcyB0byB0aGUgbWV0aG9kLlxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvSGlzdG9yeS9yZXBsYWNlU3RhdGVcbiAgICAgICAgJycsXG4gICAgICAgIGFzXG4gICAgICApXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoXG4gICAgZXJyOiBFcnJvciAmIHsgY29kZTogYW55OyBjYW5jZWxsZWQ6IGJvb2xlYW4gfSxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgICBhczogc3RyaW5nLFxuICAgIGxvYWRFcnJvckZhaWw/OiBib29sZWFuXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIGlmIChlcnIuY2FuY2VsbGVkKSB7XG4gICAgICAvLyBidWJibGUgdXAgY2FuY2VsbGF0aW9uIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuXG4gICAgaWYgKFBBR0VfTE9BRF9FUlJPUiBpbiBlcnIgfHwgbG9hZEVycm9yRmFpbCkge1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyLCBhcylcblxuICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG5cbiAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhc1xuXG4gICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKClcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICAgICAgbGV0IHN0eWxlU2hlZXRzOiBTdHlsZVNoZWV0VHVwbGVbXVxuICAgICAgbGV0IHByb3BzOiBSZWNvcmQ8c3RyaW5nLCBhbnk+IHwgdW5kZWZpbmVkXG4gICAgICBjb25zdCBzc2c0MDQgPSBlcnIubWVzc2FnZSA9PT0gU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SXG5cbiAgICAgIGlmIChzc2c0MDQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBsZXQgbW9kOiBhbnlcbiAgICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cywgbW9kIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICAgJy80MDQnXG4gICAgICAgICAgKSlcblxuICAgICAgICAgIC8vIFRPRE86IHNob3VsZCB3ZSB0b2xlcmF0ZSB0aGVzZSBwcm9wcyBtaXNzaW5nIGFuZCBzdGlsbCByZW5kZXIgdGhlXG4gICAgICAgICAgLy8gcGFnZSBpbnN0ZWFkIG9mIGZhbGxpbmcgYmFjayB0byBfZXJyb3I/XG4gICAgICAgICAgaWYgKG1vZCAmJiBtb2QuX19OX1NTRykge1xuICAgICAgICAgICAgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXRTdGF0aWNEYXRhKFxuICAgICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoJy80MDQnLCAnLzQwNCcsIHRydWUsIHRoaXMubG9jYWxlKVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoX2Vycikge1xuICAgICAgICAgIC8vIG5vbi1mYXRhbCBmYWxsYmFjayB0byBfZXJyb3JcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHR5cGVvZiBDb21wb25lbnQhID09PSAndW5kZWZpbmVkJyB8fFxuICAgICAgICB0eXBlb2Ygc3R5bGVTaGVldHMhID09PSAndW5kZWZpbmVkJ1xuICAgICAgKSB7XG4gICAgICAgIDsoeyBwYWdlOiBDb21wb25lbnQsIHN0eWxlU2hlZXRzIH0gPSBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KFxuICAgICAgICAgICcvX2Vycm9yJ1xuICAgICAgICApKVxuICAgICAgfVxuXG4gICAgICBjb25zdCByb3V0ZUluZm86IFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gICAgICAgIHByb3BzLFxuICAgICAgICBDb21wb25lbnQsXG4gICAgICAgIHN0eWxlU2hlZXRzLFxuICAgICAgICBlcnI6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgICAgZXJyb3I6IHNzZzQwNCA/IHVuZGVmaW5lZCA6IGVycixcbiAgICAgIH1cblxuICAgICAgaWYgKCFyb3V0ZUluZm8ucHJvcHMpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIHtcbiAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgcXVlcnksXG4gICAgICAgICAgfSBhcyBhbnkpXG4gICAgICAgIH0gY2F0Y2ggKGdpcEVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycilcbiAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSB7fVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByb3V0ZUluZm9cbiAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgdHJ1ZSlcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRSb3V0ZUluZm8oXG4gICAgcm91dGU6IHN0cmluZyxcbiAgICBwYXRobmFtZTogc3RyaW5nLFxuICAgIHF1ZXJ5OiBhbnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBzaGFsbG93OiBib29sZWFuID0gZmFsc2VcbiAgKTogUHJvbWlzZTxQcml2YXRlUm91dGVJbmZvPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGNhY2hlZFJvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV1cblxuICAgICAgaWYgKHNoYWxsb3cgJiYgY2FjaGVkUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgIHJldHVybiBjYWNoZWRSb3V0ZUluZm9cbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgID8gY2FjaGVkUm91dGVJbmZvXG4gICAgICAgIDogYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChyb3V0ZSkudGhlbigocmVzKSA9PiAoe1xuICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiByZXMuc3R5bGVTaGVldHMsXG4gICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1AsXG4gICAgICAgICAgfSkpXG5cbiAgICAgIGNvbnN0IHsgQ29tcG9uZW50LCBfX05fU1NHLCBfX05fU1NQIH0gPSByb3V0ZUluZm9cblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJylcbiAgICAgICAgaWYgKCFpc1ZhbGlkRWxlbWVudFR5cGUoQ29tcG9uZW50KSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIGBUaGUgZGVmYXVsdCBleHBvcnQgaXMgbm90IGEgUmVhY3QgQ29tcG9uZW50IGluIHBhZ2U6IFwiJHtwYXRobmFtZX1cImBcbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGV0IGRhdGFIcmVmOiBzdHJpbmcgfCB1bmRlZmluZWRcblxuICAgICAgaWYgKF9fTl9TU0cgfHwgX19OX1NTUCkge1xuICAgICAgICBkYXRhSHJlZiA9IHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZihcbiAgICAgICAgICBmb3JtYXRXaXRoVmFsaWRhdGlvbih7IHBhdGhuYW1lLCBxdWVyeSB9KSxcbiAgICAgICAgICBkZWxCYXNlUGF0aChhcyksXG4gICAgICAgICAgX19OX1NTRyxcbiAgICAgICAgICB0aGlzLmxvY2FsZVxuICAgICAgICApXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0RGF0YTxQcml2YXRlUm91dGVJbmZvPigoKSA9PlxuICAgICAgICBfX05fU1NHXG4gICAgICAgICAgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IF9fTl9TU1BcbiAgICAgICAgICA/IHRoaXMuX2dldFNlcnZlckRhdGEoZGF0YUhyZWYhKVxuICAgICAgICAgIDogdGhpcy5nZXRJbml0aWFsUHJvcHMoXG4gICAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgICAgLy8gd2UgcHJvdmlkZSBBcHBUcmVlIGxhdGVyIHNvIHRoaXMgbmVlZHMgdG8gYmUgYGFueWBcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgIGFzUGF0aDogYXMsXG4gICAgICAgICAgICAgIH0gYXMgYW55XG4gICAgICAgICAgICApXG4gICAgICApXG5cbiAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzXG4gICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMpXG4gICAgfVxuICB9XG5cbiAgc2V0KFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBkYXRhOiBQcml2YXRlUm91dGVJbmZvXG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlXG5cbiAgICB0aGlzLnJvdXRlID0gcm91dGVcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICB0aGlzLmFzUGF0aCA9IGFzXG4gICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEpXG4gIH1cblxuICAvKipcbiAgICogQ2FsbGJhY2sgdG8gZXhlY3V0ZSBiZWZvcmUgcmVwbGFjaW5nIHJvdXRlciBzdGF0ZVxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcbiAgICovXG4gIGJlZm9yZVBvcFN0YXRlKGNiOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrKSB7XG4gICAgdGhpcy5fYnBzID0gY2JcbiAgfVxuXG4gIG9ubHlBSGFzaENoYW5nZShhczogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgaWYgKCF0aGlzLmFzUGF0aCkgcmV0dXJuIGZhbHNlXG4gICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpXG4gICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpXG5cbiAgICAvLyBNYWtlcyBzdXJlIHdlIHNjcm9sbCB0byB0aGUgcHJvdmlkZWQgaGFzaCBpZiB0aGUgdXJsL2hhc2ggYXJlIHRoZSBzYW1lXG4gICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXG4gICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAvLyBUaGlzIGNoZWNrIGlzIG5lY2Vzc2FyeSB0byBoYW5kbGUgYm90aCB0aGUgZW50ZXIgYW5kXG4gICAgLy8gbGVhdmUgaGFzaCA9PT0gJycgY2FzZXMuIFRoZSBpZGVudGl0eSBjYXNlIGZhbGxzIHRocm91Z2hcbiAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgIHJldHVybiBvbGRIYXNoICE9PSBuZXdIYXNoXG4gIH1cblxuICBzY3JvbGxUb0hhc2goYXM6IHN0cmluZyk6IHZvaWQge1xuICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKVxuICAgIC8vIFNjcm9sbCB0byB0b3AgaWYgdGhlIGhhc2ggaXMganVzdCBgI2Agd2l0aCBubyB2YWx1ZVxuICAgIGlmIChoYXNoID09PSAnJykge1xuICAgICAgd2luZG93LnNjcm9sbFRvKDAsIDApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxuICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKVxuICAgIGlmIChpZEVsKSB7XG4gICAgICBpZEVsLnNjcm9sbEludG9WaWV3KClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvLyBJZiB0aGVyZSdzIG5vIGVsZW1lbnQgd2l0aCB0aGUgaWQsIHdlIGNoZWNrIHRoZSBgbmFtZWAgcHJvcGVydHlcbiAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICBjb25zdCBuYW1lRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZShoYXNoKVswXVxuICAgIGlmIChuYW1lRWwpIHtcbiAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgfVxuICB9XG5cbiAgdXJsSXNOZXcoYXNQYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aFxuICB9XG5cbiAgX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWY6IFVybE9iamVjdCwgcGFnZXM6IHN0cmluZ1tdLCBhcHBseUJhc2VQYXRoID0gdHJ1ZSkge1xuICAgIGNvbnN0IHsgcGF0aG5hbWUgfSA9IHBhcnNlZEhyZWZcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goXG4gICAgICBkZW5vcm1hbGl6ZVBhZ2VQYXRoKGFwcGx5QmFzZVBhdGggPyBkZWxCYXNlUGF0aChwYXRobmFtZSEpIDogcGF0aG5hbWUhKVxuICAgIClcblxuICAgIGlmIChjbGVhblBhdGhuYW1lID09PSAnLzQwNCcgfHwgY2xlYW5QYXRobmFtZSA9PT0gJy9fZXJyb3InKSB7XG4gICAgICByZXR1cm4gcGFyc2VkSHJlZlxuICAgIH1cblxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUhKSkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgcGFnZXMuc29tZSgocGFnZSkgPT4ge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgaXNEeW5hbWljUm91dGUocGFnZSkgJiZcbiAgICAgICAgICBnZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSEpXG4gICAgICAgICkge1xuICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSBhcHBseUJhc2VQYXRoID8gYWRkQmFzZVBhdGgocGFnZSkgOiBwYWdlXG4gICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgfVxuXG4gIC8qKlxuICAgKiBQcmVmZXRjaCBwYWdlIGNvZGUsIHlvdSBtYXkgd2FpdCBmb3IgdGhlIGRhdGEgZHVyaW5nIHBhZ2UgcmVuZGVyaW5nLlxuICAgKiBUaGlzIGZlYXR1cmUgb25seSB3b3JrcyBpbiBwcm9kdWN0aW9uIVxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxuICAgKiBAcGFyYW0gYXNQYXRoIHRoZSBhcyBwYXRoIG9mIHRoZSBwcmVmZXRjaGVkIHBhZ2VcbiAgICovXG4gIGFzeW5jIHByZWZldGNoKFxuICAgIHVybDogc3RyaW5nLFxuICAgIGFzUGF0aDogc3RyaW5nID0gdXJsLFxuICAgIG9wdGlvbnM6IFByZWZldGNoT3B0aW9ucyA9IHt9XG4gICk6IFByb21pc2U8dm9pZD4ge1xuICAgIGxldCBwYXJzZWQgPSBwYXJzZVJlbGF0aXZlVXJsKHVybClcblxuICAgIGxldCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRcblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICBcImRlZmF1bHRcIjogb2JqXG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdDsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCIuLi9oZWxwZXJzL3R5cGVvZlwiKTtcblxuZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICBpZiAodHlwZW9mIFdlYWtNYXAgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIG51bGw7XG4gIHZhciBjYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5cbiAgX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlID0gZnVuY3Rpb24gX2dldFJlcXVpcmVXaWxkY2FyZENhY2hlKCkge1xuICAgIHJldHVybiBjYWNoZTtcbiAgfTtcblxuICByZXR1cm4gY2FjaGU7XG59XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iaikge1xuICBpZiAob2JqICYmIG9iai5fX2VzTW9kdWxlKSB7XG4gICAgcmV0dXJuIG9iajtcbiAgfVxuXG4gIGlmIChvYmogPT09IG51bGwgfHwgX3R5cGVvZihvYmopICE9PSBcIm9iamVjdFwiICYmIHR5cGVvZiBvYmogIT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiB7XG4gICAgICBcImRlZmF1bHRcIjogb2JqXG4gICAgfTtcbiAgfVxuXG4gIHZhciBjYWNoZSA9IF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpO1xuXG4gIGlmIChjYWNoZSAmJiBjYWNoZS5oYXMob2JqKSkge1xuICAgIHJldHVybiBjYWNoZS5nZXQob2JqKTtcbiAgfVxuXG4gIHZhciBuZXdPYmogPSB7fTtcbiAgdmFyIGhhc1Byb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xuICAgICAgdmFyIGRlc2MgPSBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iaiwga2V5KSA6IG51bGw7XG5cbiAgICAgIGlmIChkZXNjICYmIChkZXNjLmdldCB8fCBkZXNjLnNldCkpIHtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaiwga2V5LCBkZXNjKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld09ialtrZXldID0gb2JqW2tleV07XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbmV3T2JqW1wiZGVmYXVsdFwiXSA9IG9iajtcblxuICBpZiAoY2FjaGUpIHtcbiAgICBjYWNoZS5zZXQob2JqLCBuZXdPYmopO1xuICB9XG5cbiAgcmV0dXJuIG5ld09iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZDsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2FnZW5kYTMtMDNhMzU3NWFjOGRkMjkyNjJlMDRhZDdjYjAzMjBmYmQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2Jhbm5lcjEtMWU4ZGFkZDljZjkyNGExYmRjOTZhNjQ5MTFlOGEzZDcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2NoZWNrLWU3NTFjOGM2ZjJkYmVjMzE0YmVhMDA0ZTZlNGVjNGM4LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9jaWRhZGUtYjUwODFjMTJmYTY1NWU5M2EwNmZiMWFlNGVkOWU0OTgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2VtYWlsLTAxYTljMmZmMDU5YTRjYTU1ZTIyZTBiZWIxMmMzMmQ1LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9lbmRlcmVjby1iMDQwMWU1NGQ4ZGMxNTE1NjgxOWM5ZTM5YWRkODAxMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmFjZWJvb2stMTU2ZDYzNmNiMDAwZTBhOWY5ZmQ5ZDQxNTE3MmNiZDgucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL2luc3RhZ3JhbS04NmU5ZjFiZDZhMjJkZjJkOGMzZjM3MGM5ZDAwZjkwMC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFb0FBQUFiQ0FZQUFBRGJBaGtqQUFBQUNYQklXWE1BQUFzVEFBQUxFd0VBbXB3WUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSblFVMUJBQUN4and2OFlRVUFBQUlDU1VSQlZIZ0I3Wmd0YzhKQUVJYmZkQ3FReU1ySVNtUmxKREt5TWpJL0NSbUpSRVpHSWl2N0U1QklITjFOTnZUWWhIRDVhRW5DUFRNM2dRdHpIQTk3ZTVzREhQL0QrWHoycWIxanBORGNGdFJXMUpib2dZY2UwSmVIZEZuSjI4enp2QXdqUXVSRTFQaDZvcmFqT1g2akF5L29nUHhMRVg0bFFiM3VoVVJwT0VDa0xxVXhDMnFmTk9ZSE90QmFsUEV2K2VyV0Y0YWpqTlFRL1RoUU82cStOZjJHQUMxcEpjcVE5S1p1RGIzc3pDam9ETTJKbDF1Q3FxeWdyU3hyVVdxOW00d3VONW5RM0ZoU2dpSzZUQUxKc1ZaWWlhSUJPWUppVkNXbFk1WlVZc2pTaVp4M3c0aHo3cjB4N29yaXJSVkZKSm1EY1VodmFRSjdUQVJlaHRTMjlGTFAyYWNXM3lzZkdrWEpEc0hocVNVbFhiZlpSMFB6VHVtU3FlNDhyVFRKdWlsS2t0MWFkWE1JYitqTERwZ3draTR5MWQwb3ExWVVmWmdGQmFvN1grZXkzaWVQeUVwVk4wdUtKU2RmY1NWS0NrbGVhcm9vNHdqYXpFVlNpZVJZemxzbm81dlRUQ3k1K2NKRmxHVCtDTlVLbXd2SlJHcVMyU0c1TmtHMTFnck5XaXNYSmV1U3QzOGRjbnNhYURkWFNTV1NjeE0wRktabFJQRlNxeXNrVXp3SlJxMVZKMnQ1YTljYmRiWDlWelJVOFhpVmE0WWlpZmtvSkEzNWdEc3BXQlpGVUlKaTErZlRDMDQveDFlNW1aL1Z3SkVqUGxJWTVVT244NmhueElteXhJbXl4SW15eElteXhJbXlaS3lpeWtlbVdUMkVEdzQvTXZCUlQ5MXh4NlA0QWNwKzFabTR5RWtlQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRWtBQUFBYUNBWUFBQUQ3YVhHRkFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBQVhOU1IwSUFyczRjNlFBQUFBUm5RVTFCQUFDeGp3djhZUVVBQUFIZVNVUkJWSGdCN1ppaGNzSkFFSVkzVEFXeUVvbXNSQ0lqa1Voa0pJOVRpY3dqUkZaR0lwR1ZTQ1FTUi85TkZtYlprdVNTYVlkTGN0L016b1ZMUTVPUHU5dTlST1FaMStzMVJzT1JSMUdVa3dkTXlEOWkwNzRjSHlWNVI1RGtRSkRrUUpEa1FKRGtRSkRrUUNFSnRja1VzVUM4VTRCOXpEbHVuOStrM1NKWTBBVW5NeFJ4M3pSUzhQeHJOQXM1L29LTC9RUUhNeW9GTVZQRUJuMUxHaGt5bXhJU1FVSnh6TlB0TEtGWnlmWmdGTWd5a3lEbTVsUXhveVlZVGhlMEtmMFdGWTlCbEJJME02ZnVlOGRpNGNZSEZyUkRuTXdmc3FnVkRSUWx5Q2FzaDgzMXZRUlFJK3BnTGxqaXkzaWRtdEtBa0xYNGxyQTBtWDM3OEZBbnNTaEVoc1BjWFBpQlNJWlNJbkM1UStVSTBqODhENUlkbnQ4T2t1ZkZwSmpNVFRlYjc3MG95ZHljNXJVZ1htNVNQUGZwMlRXVkZYZUZxR0lPOTFXVUpDSzd4dFlLWW1xM0pTSXFNOTBzYUN0enVqZW9ONTRhRnBOSzRxcWtjZThtYzVRejMwVjE4MUJOWkc1N2oxVFJzZWsra29NZ3htbURLME9SUmVrdlpGRnJuMnNwcWFJNWc5a2Y4NEJuU2lXak4rTDhGa0NNcDlTVG9yT2hTTXlvQmExZWxUU0krcXM2S2pkdFY3aHNxYXlpMnhCUkIwUklvbTdpakgvK1NSNkJlMlJKRzlWVjdPaXBBNTBrcVJ1SnFjeDIrN29VK2lxa0pwcFRlWDlIQ3Z3ZlAybUR6bm50SW80c0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zdG9yZS05NmYxZGUyM2ZjZWFmMDMxMmQ3MjhiNjUwNWM0ZjRiZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvdGVsZWZvbmUtOTJhNjUyMDUwY2IwNmJiNmFkYjEwMGVjNDlmMDBkYjEucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzL3doYXRzYXBwLTAyMDc3YWZjZmU5ZTczZjNkODMwNWI5MzFlYmExOGRjLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvLTBlMzk4ZGNiMDY0ZGNhMTQ1N2ZkMmQ5MGIxZDVhZjEyLnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9sb2dvX2JyYW5jby0zMTNjZjkxODJiNzQ2YzVhYWE3MzY2Y2Y1OTc2ZjBlNC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvcXVlbS1zb21vcy1mZmQ4MDRkMDAzZTczODM2YzJhZjE3NzU0NWQ3OTVlZC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJHQ0FZQUFBQnhMdUtFQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQURsMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTZnZ1NzhuSUdsa1BTZFhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRblB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU2RoWkc5aVpUcHVjenB0WlhSaEx5YytDanh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBuYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeWMrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cEJkSFJ5YVdJOUoyaDBkSEE2THk5dWN5NWhkSFJ5YVdKMWRHbHZiaTVqYjIwdllXUnpMekV1TUM4blBnb2dJRHhCZEhSeWFXSTZRV1J6UGdvZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUR4eVpHWTZiR2tnY21SbU9uQmhjbk5sVkhsd1pUMG5VbVZ6YjNWeVkyVW5QZ29nSUNBZ0lEeEJkSFJ5YVdJNlEzSmxZWFJsWkQ0eU1ESXlMVEE1TFRBeVBDOUJkSFJ5YVdJNlEzSmxZWFJsWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1Y0ZEVsa1BqUmlNMkV3TW1KaExUazFZMkV0TkRBeE55MDROVEptTFRZek5XVmhPVFZoTjJWbFpUd3ZRWFIwY21saU9rVjRkRWxrUGdvZ0lDQWdJRHhCZEhSeWFXSTZSbUpKWkQ0MU1qVXlOalU1TVRReE56azFPREE4TDBGMGRISnBZanBHWWtsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Vkc5MVkyaFVlWEJsUGpJOEwwRjBkSEpwWWpwVWIzVmphRlI1Y0dVK0NpQWdJQ0E4TDNKa1pqcHNhVDRLSUNBZ1BDOXlaR1k2VTJWeFBnb2dJRHd2UVhSMGNtbGlPa0ZrY3o0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb0tJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU2NuQ2lBZ2VHMXNibk02Y0dSbVBTZG9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JrWmk4eExqTXZKejRLSUNBOGNHUm1Pa0YxZEdodmNqNVVZbklnVjJWaVBDOXdaR1k2UVhWMGFHOXlQZ29nUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cDRiWEE5SjJoMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4blBnb2dJRHg0YlhBNlEzSmxZWFJ2Y2xSdmIydytRMkZ1ZG1FOEwzaHRjRHBEY21WaGRHOXlWRzl2YkQ0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnbzhMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU2R5Sno4K2dXMU84QUFBR3lCSlJFRlVlSnpObkhtY1hWV1Y3NzlyNzNPSHFsdVZTcW9TTWhDbVJEdUFFT1pCVUFabERLRGlFNThHcEtWdFJMdFIreW5QZ1UvcjQrR2p0VzNFcDZBU3gxWUdaUVpEQWhMbzRJQXlKaEJKakFJSm1RaVZvWklhYnQzaG5MMVgvN0hQdVZXVlZLVXFJYngrNi9PNXlhZnUzZWVjdmRkZTQyK3RmWVM5UU1WTGJrYlU0RlVRSEZhd0lrWVRyOTRhRUlTcTk4V0M4RGJnVU9BUWdTTVZaZ0V0UUJHaEJJQlNCcXBBbjhCZkZKNEhWaWo4dWVaWVhzeFJSUVd2U21URWVLL2lWSnc2aDdHQ0drUDExaXZlOEpya2pWeGN2T1FIUk9LSXhGTnpFUWExNVRxdWxBY1JRK0wxQUN1Y0J2cDJoRk5RbVFVYVdMWGprM1g0R2FsbVArQkJWZ3I2VzRVbkhiSTRNcXhWcjVSalN5bm5ySUxMU1V5aUZpK1d5aHRnMEo0eDV0S2JhSWtqdkJOaWNlUWpZOHJlK1pLeGxCT3hwVWpQQnk0RU9SL29HR0NDQXVJQXI2b21mYjRNbVVtRER5aWdJdUlCQTlqMCtqQkUyUXI2SUhCZk9iWVBsbkxPbFo5ZFNPbllPYWFhZUYvd2dza1orcUlZZm43bGJpOXh0eGxUbWpzUHNRbDRRZFZJWkVVU3I3NHNrWlEwdVFpNEN1RTROSlVLVmFmZ0VTd3FrcTFjUkVSQlpZUTVaTC9wSUpFQlVWQW5ZQkN4bW5JSTVCblE2eTg0NW9vNzV6ODNqOGlJU1p3cW9pcWlxTGVVYjk4OTZSazdZeTY2aytiOFZyd3ExWDVEcVlSVmo0c2lRK0wxSEVHL0Jod3BRVHdjcUtwaUVCRkJVVzJvejU2cXI2cUdpMVVVRkJYQmd3aG95aVNlVTdnNk12SklraWhpc09YRXVHS1VZREQwMTl2aHJnK082V0ZqbW1UTHhUZWpBdW5EeFJxTTgrcFUyZGVJZkFPWW16RWszV0FESUNLb2F1RE5YaVJWMWV6ZTZUSjgrZ1NiZm5lTGVyNkVZWU1WckZQMUlDcUFHS1h2bGsrTytveFJKOXgwOGMwTlE2QmdZaC83b3MzanZMNWZoQitLMEE3aVU1RTNnZ2pwbkVYZW1IRWZqVFJJRFF5b25BK2JvRWFWTG9YTExYSnZ4VmNvbUtJaEdBQzhHUHBITWN4bVZ6ODJYM3d6ZG1CMVZsRmY5RTE0MVJ0RXVFZEUybFVsRGhzb0ZrQ0RiWlEzbXluUVlIeFFyUEJRcTZxaUtyR0l0QXZjNCtHR2NjM0hBT3JER3NKRnpYTnYzdlc5Ui9xaCtTUGZ4L3F3U2dXcmlrdlVsM0xHM0NjaVp4SThpMG93cXFyc2ZaWFpYY3BVakRBaEp5S1NlcjlGR0graGVpbUxpQlZ3b3VDTTBqK0NXZzI3a05LSDVwSHVQd29XY0Y2WmJJU0hSVGdTSkZiVktIMndwbHMzWnFha2RtZlU3L2JrZnBxYWFKR2dYb0lrQ0RsVlhlS1VPVWJvRkxBQ0RnUjFVUDdsem1xMXN5cWRkZzFxRmMyWW9qaEZweGpoQ1VFeXB1UUNVMUFKWXJKYlRERWlSR2JveHd3eHBzTmZONWdFTUVLNGx6VkV0bkVmQ1o0K3pFM1JIRW9zeU5GV2VBTFZLV0ZOV0FVMENtdmVrYUlkdnloTm41cE53cWlxRTB4SmhJVUNNNEdNS2JvbjNrWlZNVWFvSjU1YWJ3MTgrb01SaXMxNWNwSEIrNEhkRjRJekRnWXJxTFh6aXZlS1V5VkpQTTU3U0R6NDRMa0xwUUo1YS9EQjdtWGVLeWNpc2NCTVJCYmk1WjFldFd4RURZZ3ZUWjlLZVllNURsbFljZTczUUFRRGtpU3E5Wld2Uyttd2FZdEU1TjBvc1pJeFpmYzlUc2FVU2oxaHY0NVdQbkxLTE5wYkN3alEyVjNoWjQrdlpFdFBoV0krSW5FZXIrQzhKM1llVFR3NEQ5YVF5MGNVY3BhV1lvNERKN1d5LzhRV0RwcmN4cFR4emZSVzZ2ejc0cFdzNytxakVGbDhHZ0dtekJHUVdJU2NLby9OT2tMUCtOTlNRODZvZUVSUlQvWDJUK3pNbUthTGYwQ1RqZWlwbDJtT2lzYXI5NHJlQ0Z3cFFxektHNU1VRWVxSlkxcDdpY1hYWE1nQmsxcloxTjBQd0Q1dHpheFkzOFU3djN3dlhkdjdhV3JPazdPR2p0WW1EcHpVeWtHVHgzSGdwRllPbkRTT21WUGFtRGw1SEpQSE53OTV4dlp5amZHbEFrdFdiZWEwLzNVZmZnZTdrekVuckVWeW9EY0s4bWtqWXNweDRzY1ZjMVNyZFNwMy9DTXdTSlVzU3VJZFJadTNYcjFUOUJLUUswVndxYUhkN1dBdE00cldCQnZRMjEvbnluTm1jOENrVnQ3eHovZncxRXVkaUFqdk9IZ3EvM0hOKzdqbnFuUFozRjNoMFAzYW1URjVIRTM1b1pxK3FidWZseloyOCtpZjFyT3FzNXZWbTNwWXU2V1AxWnQ2V1BWNk41ZWVkakEvdS9JTWpudkxQaXgrY1FPdFRUbThwdW5IQUhNaUVaekNwMVI1MHFPM04rV3NkZDQ3RXcwOEx3Sm8rc2ozOEFMcW5BR2NLak5GbUNkQ3l1WEdqWGViS2M0cmZmVVlJMEExWmxwN2lYVmIrM2ppaFhYY2NNVnBBSHoyaDcvaHhYVmRuUGEyZlhubTVVNldyK3Rpd1pKWFdkWFp3N290ZmF6YTFNMmF6YjFVYWduRUxueWNoOGlBTWVSS0JZd1JYbHpiQmNBQmsxcFI3NFBFWk9INklHZVJMVVhSbTczblNXQ1ZGNHhIZmROSHZrZmxsbjhJakRFK2p4ZUhGUURGWTc0bW9zMnFHZ3VTVS9hTUtZbnpqR3ZPOCs3RHB4TlpRMStsenBUeHpiUVVJczQvK2ExY2VNSU1BUDdqeFExTW05RE1iNVp2NE5xN244RWFRNldlQUpDemh2MDdXcGt4dVEwcmdrazlXTFptRVhqMmxVMXM2Q3JUbWFybTFBa2xTSHlJMWdlcFZNT0ZDMFpWWXhGcEJmMjZzZkpCRUh3OVJzaUhzVTBmbm9mNFBDYXFXd1VIekFFV2lLalhOQnRPbzVUZERqS2NWKzc2M05tY2QvU0JJekl3VFBpTnhZVXZ2THFGMDYrNW45aDVOdnpnbzl6eHhFdDgvS2JIYUd0cnd2bWhibDVESWdFaElGVlZOUXBuZ1N3U3NMSFBPMHVkeUVhQzgzWDZZdWZJTjFIUzJyVkJ6RkJCalRZNHMzdVVTY3Q1UngvSVhYOThtZTgvOGlLRnlQTEY5eDNON0FNbWN1bE5qL0tOajV5RXF2TDVXLzdBeno5MUJuOWF1NVhyN25tT2xtS0VIem1rQVVJTTAxZE5lTWZCVS9uS1JjY3hjMG9iejc3Y3lkck52VXp2YUVGeURhODBoQVNSVEFOVTFhZnE5clZ5emk2aUhydWlxV01GSXRFWUk5YVdjc2FwMWorRXlER2dDU3BXWldTOFpDemswOVg5WmNNMkZ2L2haU2prdU9TVVdjeWMwc2FEZjNpWnE5NXpKRGxyV1BEMGF1cUpaME5YbVVWUHZvd3BGUnJYanNnWVkvRGxHdFlFT3lZQWlXZjkxajcybjloQ0lXZUh4RVJEbURPUW1odUNsaHhUaXBNUElISTNxQlVmTytPODVZTTNmdEJOMks4TlFmOHA2Q1dDcU1nb3V6WldLdVFqYUNsZ20zSVlFZHFhODB5YTFNS2tjVTFVNjQ1Y0ljSjVqeFVoUDY2SmlhMU5UR2dwTXE2NVFFZHJrWTdXcHAwK0UxdUwySllDellVSUVUQkdvSjZ3WmtzZiswOXNEY0hpTHVhdmFSb3p5QVo5cm1QMmdmenJyVmM0cHhHUkNQYk9LKzkwd0huQUNTa0hqZWllcWRDd2svQUs2YTdlOCtRcmZQZ2RiNlh6UjMrSGlQQ05CNVlTSjQ3M2ZlTWhPcmYzVSsrcnNhbGNRNG81U29VY1c3djZNMFJ6S08wZ0NkbGZHN3I2YUczSzA5YVVaM05QaGNoWWh1T1BrRzU5U0RJOWNPTFdaYStlOTRWTDVpMFFJellTUklNdDBya3A2cUx3Qm5Wb09QSkthMU9lKzU5WnhaeC9tYys1UngzQWIxYTh4dnhuVnpPdXVjQ3pmMzJkRXc2ZXlqK2Rkd1M1eVBEcjU5ZnkrUElOWFBlM0o1T0xVclZnZ0VlUk5kejQ4REpxc2NPSUJPbXdoclZiK2dDWTF0N0N4dTM5NUxPTGhtTk93QVFJa0lRWTRNUEFBa0FqRDE2VnlVYmszQlNDTkVHSDlqNkVvS3EwRm5NOHVtdzlEejI5bXFnUTBkcVV4eHBCSXNQSnM2YncyUXVPQklMeC92M0tqVno5L21OSHZOL0NwV3VvSnk2N08xakRhMTBoNjltdm84VFRML2sweHhxSk02bXhDWUU1cUo2anlpUmdjeVJCMGM1RG1RRGlSTlFNd21mM0hvVUlsRzE5MVJDZ0dVTlNTOWhXcVRlRzNIRGZFbTZZLzN6NHc0WDhTUDdiVGNPS3JvaWd6blBoMjkrQ1Z3MXhuQlhXYmVrRmdzVGdmSWgzUmpEQ0FDR0ZVa0Z4S25RQTV5UDhORElDWG5sWHhqdDVNK0NtRkJ1dEpZNkxUNW5GU2JPbTBGOUwwbTBhSUsvYWNMRkdRaUNYZUQvTURZTXEzZlRRTXVwSlVLV0FCeGcyOTFaUlZmYnJLRFhzMnE0V0ZJSytSbFVDaFhlTHlFOGo3M3dla1JQVGNXWUlucjgzS1kyRTMzSHdWUDcrM1lmUzFWY2xNZ053a0F0NEZ6WkwvTEovZHJCMW1WTGtJOE85VDYwaWRnT01NeUxVWThmYUxYM3NQNmtWSWp0cVBCU21GZ0s5MU1hZXFGWEpSMkFPQlE2aUFkVytDYVNBVjBxRkhGZisrTGQ4Y3Q3ak82bEhjeUdIVTZWV1M4Wms5WGRVSlFoQlh5MXhyTi9heC9UMkZxS2NHVGJJMjNsNm1VMVZRQTRpcDRkR2lCNE5tRkFoVlBObUdOMEF0MEUxVHZqRVdZZHgxdXo5Nkt2R0FZQ1M4TVF2M3ZaSERwbzBqcytjZHdUbFd0eUlGRWFhVFdRTlgvN2xVMVRqVkNVekVDeDJyTm5TeXltSFRHdGdNanVxN003VEMzNDc1WUZGT0NvQ1pxWiswQ083cmhxOE1Rb1I2c0g3VHVDTTJkUFpWcTZGQ2tUS25GSWh4NVR4elp4eCtIUzYrK3NNYU5tT2l3b1NrTE9XOWxLaGtRdUYybzAwb3Q5OTIwc1VjamJZTWp1MnZWYndFaURQbVJGd1NPclNSUFJOS25vb29FcHpJY2Yvdk9VSlB2ZXozKzlrTjNMV3NMcXpoM3VlZWdVQWF3S09FeWR1MlBqT0dLRlNUYmp3eEJrTmRXbDRwcTE5aUFpVDI1cDUrZlZ1Y2xFRGZSaVJNamdpVGRzUGpZQURzMmVwdkZtR0Y1QUFhMzdoZlVmemdSTm0wbDJwcGZCQjJJdS92ZWt4WmswYnp6WC8vWGdLa2VXbWg1ZnhzOFVyK2ZXWDMwTlRQc0k1SGNLZG5EVjhmTjVpS25YWFVCVkZFV05ZdnpVRWVmdDJsRmk1WVJ0Q05ISXNrNUlPNUU0QUIwYkFoSUg1di9sMUlaUG1OU2JEVmpLM0k5a2M5cHhVZyswWkNQSmFVc0NLRWFQZmpCcWxvRUFUSW1CODl0c2JtRk02c1JCSUdRbXFFTm13QVNZdHNEUVhJcjUrM3hLdXUrZTVCdENVVVQ0eXJOL1N4NjlmV0F1a3FtUU5aMy8xVjJOWEpaU2NOYXpMMG9JUkFLdGRVRGFnTllLMGsyazNGajdTYnhteVZrczh0ZjQ2dFRpRTYrVmFETDFWNHBZaStXaG5uTVFhb2J1dnhtWHZQb1J2WC9aT2VpdnhtSXp2ZTc2K2dQTGdRRkhESnBSck1UMzlkUTZZMUFvaWV4S0l0RVNFYkRvMzFpc0VCa0x3bEl3UmN0WlFxVHRxY2NKQms4ZHgwb2t6bVpJaStTZk5tc3I3eno2Y3BhOXVZYzNtSGxxSytTSE1VUVd4d3NadC9UejZwL1ZVNnNtWTNIVlh1VVpiS1Qva2UyT0VXdUo1ZFhQUExnR3IwU2dDK29IaWFBTXphYW5Ham54a3NDYjB3VmtqMUdKUFh5MW0yc1FXcnB0N0toODk3WkRHZGZYRWNjYmgwemx6OW43RXpuUFpkeC9qdHQvOWhiYm1Bb256S1dEdUtSVnlQTDU4QTQrOHNBNC9RaG9RSmdJSTVDTkxQVTQ0Wk44SlF4YWVSYi9ydDVZNVlOS3VBYXRkVUY4RTlBRHRBNDhjbmluV0NPVmF3a216cHZEZHZ6K1ZxZU9iVThZWWZ2WHNhbjc5L0ZxK2QvbXB0TGNVdVdIKzg5ei96Q3A2SzNHanVtaU44TFdMMzg2dG56NlRWenE3ZWZxbFRscUtlWnozUk5iUVhhNXg4U216K1ByRmJ5ZXlobnhrMEtHT3FCR2YxbU5ISlhiTS9mWWo5TmZpUVY0cE1FYlRJTytkaDB3bEZ4a1NwNHc5bEVHQTNnallSdXF5UnlxUlNPcEJYQ1htd3VObmNQaitIWHh6L2xMcWllZVFmU2R3MmVtSGNObnBoN0JrMVdiT3VQWUJsdjYxRTVPMzJOUlF4TTZES2hmKzIwTzhmT01sZlBkanAzTGkxWGNQS1lyaFBCMnRSYVozdFBEdmkvL01wcDRLT1d1R3FLd0kxR0xIckgwbmNPSHhNMmdwaGpSaTZGd0JWVFpzSFJ0Z05jQ1JJVGZhRmdHdkFrY1JtbTUycW1VUDRXVktyM1dWdWVvbnY0UGVLcWVjOUZiZWQvd00vdStDRjdqcTUwOEFNQ0cxTFluM1lTSFR4dlBhdGpJOTVScFgvdmkzM1BFL3p1YnlNdzdsZXd1WDBkYWFhYkUwb3RocjducUdOYXMyUTJHSHlNd1lLTmM0NWFTM2NPSHhNL0ErcEFHRHlTc1FXZFp0SFR0Z0JRMDR6eEZpbVZjTnNDSXQwT2pRUnNDUktaOHpkRXdvWWRwYm1EUXVMR3pCa2xkeGlhZTFLVWMxVHRoV3J0RmJydkhwYzJmend2VWY0dFJEcHdGdzMxT3JlSFRaT3E2LzlHU21UV3lsV2gvd0t0a1M5eG5YUkxHOVJIdDdpZkdEUGgwVFNrVHRKU2EyN3NJa3FpSkdoZ0JXenZsUlVkbzB1TlUwRVB5ekFWNUpGV3ZNZVpKcVFOaTg4eVRwTHJjVzgyQUU3MFBlYy9ZUisvSHdWOTdMdjExNk1vV2M1YlpQbjhVUkIwNGtyc1Y4NGRZLzBwU1B1UFpEeDFPckpUdDVuc1FyaVFzRi9jUnA0eFArOWp2VmlvYk1qZUN4QmtPY0RjQnFWL3NlbUdCU3FYckZvTElVeElOYUVFYU5uWGRGMVpqclBud0NtMy95TVI3KzUvZHc3SXg5QVBqcDRqL1QyZDNQZzE4Nm40bnRKWmFzMk1EMXYxckt4OTUxS0tjZFBwMmVTajJFeEh1QlZFTmN0TG1ua2dKV0xhTUNWa0ZNaEpRSEhwVWxobGhXZ0s3T2dIRGR3NXFKaHVpS2x6WjJNMi9SY2o1dy9VTWMvZms3QUZqVjJjTzUxODFuZWtjTEQxMTlBWk9udFBHVk81NWljMCtGVDgyWlBXb05hWGNwOU9Ca2dGWExxSUJWd0xnYnpiS3J3YStJcEtCMVZaNEVuUWw0VWFJOVNRNjhWOGhIM0x6b1JlcjlRUUltdEFValBMNVU0SlcvdnM1RjMzeVl1ejUzRHEvLzZPOVk5TUk2Sm8xclludTVScU1uTkp2b29QOEhyMGVFa1NPK0JvVUl2RkpQV0xPNWwvMDZSZ2VzMGxKMGFuamxqMktsYmxLOWUweXpkb2xRZzlydExjdzZDNXJ6RVJNbWxDaVZDa1JwOEpBNEQ2VUM5ejI5aXNNLyt3dHVmdVJGT3NZVnVlMTNmK1dyZHo5TFU5Nk9qZ3ZzQmhrUlhPelNxbVRyNENhaW5TaXN0Vkd5QmZReDlVcVVEbDlvb0F0b3ovaTN1em1sRVVHTTRBR2ZHc2hzTGlLQTh6UVhJbDVjczVWUDN2UVkrVktlZWkwQmEyZ3VST0FIZHFPZU9KTEVVYk5taUpwWkl4QzdSc2xrdUtXbWtBdzR6NW90dlV3YkJiQUsrNW5hRjVGdFhubElnRWhDb2FsVDBZZFI1b1pHSWJGanFya05HdEJUcWFQVkdOdGN3Rmh3ZmdERWlCTlAyNFFTQzY4K24zSE5lWjVmdllXUHozdWM3MXgrS3U4NmJEcDkxWmk1MzM2azRXMXUvZlNabEFkRnRKbFNaYTBsKzdRMUFRR1RHYzQrWlJXRDE3cktHQkVtbEFvQlN0MlptVm1IbUZNbEFuM0lpSFJLaUpnMGRVWHl5NEdnVzBOTllSZmtOWlJkczhqek0zTm1NL3R2cHJDdHQ4cjJuaXJWZWtMaWhpYUszZ2UzVzA4OFhvTkxUbnhvTU14Wnc2dWJlbmhpNVVaNkt2VUdWQkhNb3FiWGU0d1JYdC9leitQTE45RFpYV2xBRzBOWEMxamh0VzFsVkpYMjFtSmd1dXc0THNzQXNncUIzQjRVQzRsUTNMN3ZPWXpOejYrWlgxL1greVJ3SXVBUWJGcHJHUlI5YVZvT1RRSG1GSEFDdU9EWWc3amcySU5ZdUdRTjl6K3ppdC8vZVNQZC9iV3dzNUdoWjN1WmM2NmJUK3c4Um9TOE5WeDkrNU1oTFNERUh1dTM5bkhtVngvQTZ3QXpaSmp5aVVqSTV2c3FkV2FjTUtPUldsZ2pqWkpNWkEyck9udUluV2RpU3pIdGlCaW9TZzdxcm5JZ0Z2VEpDVlByQzA3NndFUWUvRTZ2aS9LUlljUDhGeTJJVStUYktDZW1laGU2M3dkaEhaaVE2azl1YTJiNXR6Nk1WMlZpYXhQZUsyZGY5eXVPbmJFUG41b3ptemxISHdEUXFQbFVhZ2tUSjdieXd2VWZJbWRseU81SmlodSs2Mzgvd09IN2QzRHp4MCtsa0xOY2QvZXpmR3ZCQ3l6LzFseEtoZERKT1JpS3kxdkxCWVB3bURqeDFDdHhzRnNwalMvbHlVZDJwN1FCeU9vQ2d3OXJmSFBieGdJTGJ1cXgxamE1S1BiZ0VWZkJnQzM4c3VRclZ3SEhnTHB3SmlqSVcrS2gySnpuSjQrdG9CQlozanExcldFVDVqKzdtc2YrdEo1SGw2N2xPd3VYY2RSQkV6bnVMWk9aM2xIaWN4Y2MxV2dkVzd4OFEwUGlCaVlZbU5OZlMramMzcytpRjlhUml5d3Z2ZDVONHBUSGwyK2drTE9OSHBoTStDTnI2T3FyTXI1VVFGWHBhQzF3OHVIVE9XN21QaHc2ZlFLSDdkL0IyLzltQ211MzlMSms5V2FLT2R1SWZMT0tLNklPeFFMUGxVdjV1K212VWxUalJPSzAxU3lKa0h4aUFhZm9tUUtQaFBtbjlrYXlWdEJnL0txVmVqQlBBYlVDSTdRMjU4UE91WkE0dWtvZENqbjBybi9rR3c4czRRcy8vaTJsY1UzRXpnK0x5V1daZE9JOXFsRE1Xd3FScGJjU2svVWtEQ1pqREpWYXpIdVBuOEg5bjU4ejVMZmVTcDJscjI1aDZhck4vT2l4RmZ6bHRlMFU4MW5IaEdoNjNtbElxNWtnaXdBYjE2MnprU09xL09JS1NuTi9pSE9KeStWeUJwRkYzdm03UUM0Q2pVVWtOL2g4VUdRTmJlT2FVbGM4QUJza3pxTVMzSGFwbU1QbkkxcUtBUmlzeFk0cGs5dlkrTVBMZGhMcGpJNzYvQjBjTjJNZmZ2Q0owMGNjc3lPZGVlMERBVFlGdnJOd0diOVpzWUVWNjd0NHJhdWYvbHBNVWsvSUZYSVVCNEZWaW1hWmRBeWFBN25MaWk0Q1RJSzZLT2Zwdi8ySzBMWHBvd1JjdURnMVRsOUM5VHdSYVU3NzFFeUcxYWdxYmpEQU5vejM4bWtTbUtRRFJZUk4zUlgrNWQ0QWdtY0dONmhGc0RHZDIvdFpzbm96MzV5L2xFcmROVXpiY05LVnFkTEsxN1p4Mkg0ZGVLOThaK0V5WGxtN2hVS3BpREZDTVI5aGk3blFLRENBNEtrZ29xSmVWSEtxMnFmd3hWQ1pVWWhjNkRvazdmT3QvUHlUbEM2ZWh3M0ZCZ3Y2aWlLZlVQVG5xYmhsVEJteHJYV0VYamNBV2xQSitULzNQRU9jREE5YnRyY1VXYldwaHkvYytzY3hsVHVNQ1RXcGp0YkFpSDNhbWxoWEtsRE0yNGJ0QzBGbVExSUNVOElhTW9IL3VCRldCY1FaUjJJcDMvYUpBY1lBK0NTaEVGbDYxTHRtTWNiRExhcWNxT2cvaURRT1Y0eUk4dTFJMWdqVmVzTFRMM1h5bWZPTzRLT25IMHdoc2lPT1QxTGphcTJNeWhRQUpBU09UZm1JZFZ2NjJOQVZxbzg3Qm55RDVwd3hLVkhWSEhDamlQekNpSml5cTd0V0U1RU1RbDZHTExCNHlUeEFNS29TS3hyL09xWjBUdlRvem9jc2R0MDZQN2dCdXFPMXlCRUhUR1NJUzlrYmxLN2ZDUHgxWXpkcnR2U21CbndvOEszcDhjQjBQMk1ncDZxUFRMMzh0TFBYZmY5UnJMWGlCUldFeW0zREhMTElxSFRKdkRCL1ZlTVZiOVNVc1A1M0FrY3hjRllwN1Y0YkczT3FzUnRwMkY2aGZHVElSM1lZcGd3K1hDRXhxam1GNXh6bW5hS3VJaUpHVUk4WXlqdWNrZHdKNHkydjMwano5S2tBM2dnV2ZCblZPWXI4RG5pTGlJeEpyUVo3c1hHN1VLRzlRWnAyWXUwc0taSzFxOFlvT1lXWEZIK3VWU3BJT0xtWHJYbW4rUS8zb096b1grcWhySUpUbUd4Z29ZZ2NuYXBWSkFPaXMyUGowMzhaYVFyNEQzSVdtVTE1VG1FTzZDWUpCeHNkQ0l6NTZCOWhvRGVOUU13SldJTjJZdndwcXJwb2tLMXhvWGVrMFMzd1gwcWFBcEFTRGxNNENkQmNEbGlVZUg4S3lpWWFURkhVK0dHWkFyc0F3UHR2K1dTUWx5Q2VJZEh5VWk0VTMzWVd5TGRVMVlpSVRZOFhOM1pJeCtaVDlpcUZuRk96TTVDa3g0dXRxaHBWL1paSm9yT01rWDdKMUVjQXpJZ25hR0VNNHQ5OHlUeU0raXdvTnpWZjlVMm1DWWUrWC9qLzVFQzZrcmFLN1hBZ1hibmNHcm0zNnVya1RNNlFvaVVpU3Y5dHV6NnRQMnJKcFAvV0t4cWpGSHplRkFSUkM5eXJudG1xM0pKSmo0aDREU2ZpVWxRbllJVnZsQUhEa0dxR3U2bWlxQk1SUHlBbDNPSlZaeU42TDZJMlozSUNlSkdBN28zR0ZOZ2RnM25SblRUbnUvQjRxa2xFS2ZMcFN5K0V4T3NaQXY4S0hCMVFVWEZwc0JPQU1FMjlGSHR1cEZOc0tCVkZJQWlKVHlVMGU2ZkRjOEFYalRHUCtzU0JFVnN1NDRyTkFRUHFyM2ZzM1pkZURLYlMzSG1JY1dHL1ZNU21yMG5wMXdvbGFmb2d5R2RGOUlRQXZ5bGs3NHNKNzM5cFBHKzBGR053R2pKb3RpcUtBekVwUnB1TmZRcTQ0YjJ2SDN6bi9WTldZbzB4M25rVjhZcFIxRVZ2NG10U0J0T2xOOUdTNUtEbXFZb25YN0MyM3lldVpDTEdHVStQTitjREZ5RnlOdWprZ1FkbGhuejBGK3VrYkIzNllwMU1iTUtnVFNnUEEzZTFGWW9QZHRlcWxGMGZ6YmJGK25yc2l0N2dDcGJlS1BsLzgyS2R3ZFJ5OGMwa0pvMEVIUmhWZTlZK05mZkk1a0xvZTFIYWplcFp3T2tnSjRQT0lnMHFkeEtVVEM0R0FZWU4xUW1VSVB3RjVRbGdzVGZ5aUZYcFVqeHp6emlPMnhjOVkxVnd6b0x4aXZWQzM2QVFmM2RwcjNpTjRpWHpLT0pvcjI3bjlVSTdBWDRWVFJSdjB1cG5rb2kxUmc4V09BWTRHRGlTWGIrOHF4ZFlDU3dEVmlvOFYxZS9zbWlzMHhTNnNvanhlRkhGVFJQUEZyRlVWYW5ldXVjTXllZy9BUzZIcXk5V2RMRitBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJHQ0FZQUFBQnhMdUtFQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQURsMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTZnZ1NzhuSUdsa1BTZFhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRblB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU2RoWkc5aVpUcHVjenB0WlhSaEx5YytDanh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBuYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeWMrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cEJkSFJ5YVdJOUoyaDBkSEE2THk5dWN5NWhkSFJ5YVdKMWRHbHZiaTVqYjIwdllXUnpMekV1TUM4blBnb2dJRHhCZEhSeWFXSTZRV1J6UGdvZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUR4eVpHWTZiR2tnY21SbU9uQmhjbk5sVkhsd1pUMG5VbVZ6YjNWeVkyVW5QZ29nSUNBZ0lEeEJkSFJ5YVdJNlEzSmxZWFJsWkQ0eU1ESXlMVEE1TFRBeVBDOUJkSFJ5YVdJNlEzSmxZWFJsWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1Y0ZEVsa1BtWXdZalptTW1Wa0xXUmpOall0TkRoallpMDRaRE00TFRBek1XTXdNemd6TkdNNE56d3ZRWFIwY21saU9rVjRkRWxrUGdvZ0lDQWdJRHhCZEhSeWFXSTZSbUpKWkQ0MU1qVXlOalU1TVRReE56azFPREE4TDBGMGRISnBZanBHWWtsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Vkc5MVkyaFVlWEJsUGpJOEwwRjBkSEpwWWpwVWIzVmphRlI1Y0dVK0NpQWdJQ0E4TDNKa1pqcHNhVDRLSUNBZ1BDOXlaR1k2VTJWeFBnb2dJRHd2UVhSMGNtbGlPa0ZrY3o0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb0tJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU2NuQ2lBZ2VHMXNibk02Y0dSbVBTZG9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM0JrWmk4eExqTXZKejRLSUNBOGNHUm1Pa0YxZEdodmNqNVVZbklnVjJWaVBDOXdaR1k2UVhWMGFHOXlQZ29nUEM5eVpHWTZSR1Z6WTNKcGNIUnBiMjQrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cDRiWEE5SjJoMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM4blBnb2dJRHg0YlhBNlEzSmxZWFJ2Y2xSdmIydytRMkZ1ZG1FOEwzaHRjRHBEY21WaGRHOXlWRzl2YkQ0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnbzhMM0prWmpwU1JFWStDand2ZURwNGJYQnRaWFJoUGdvOFAzaHdZV05yWlhRZ1pXNWtQU2R5Sno4K1FBaGNRQUFBRkVaSlJFRlVlSnpGbkh1Y1hWV1Y1NysvdmMrNWozcUVHRXhvNVJVL1BQS0FSaUNnZElzMGdpRThFbWdZRVQ2T2o5WldQajN6bVZHbWxXbEJiWkxZZ3VDZ1kvdVo3aG50SGgvWS9iR2hJVFlFREFRUWVRanFoTmVRRUI0Qndrc3BpSGxWM1h2cm5ydjNtai9PdWJlcVNDV3BTdDFrMXFmcVU0OXp6MTU3cjdQMldtdXYzMXBIZElGS1ozNE5WMjJpTkNQV3l6andFaFlEMFRsQWp1WXdsYlFVandMbUEvT0FZNEU1UUI5UVFmUUNZQXdCRFdBUWVCcDRERmdIUEpVMTNkcFMyUm9ZUkFQbmNHYW1DTUVsdzFoTWljMFN6Wjk5YWNwcjBsUnVMcCs5bEZTaU5DUnFQUkVsOHZYUUNsV1hJRUVNSENySHFjQWZBYWVBNW9BNUFPa3RyRzM4R1ptMUx4QkI2OEh1QXoxc3hzK2Q0eVV6b3g2Z211Q3Q1VVBpcGhIY2RtTFdZdmhuVis3eDJ2Wk1NT2RmUlcrV0VWdlFTaHlwb3F1L3VqMVdEdXFuM21yNnFpOHRCcDBQdGhpMC80Z01ERkFBb3BtNWdyL0d6S1FqQnd3d1NSRndnQWNydmdUWUptQWxhRVU5Q3l1ckpSZnF0MXhFZGNtL3VMb3MrbUNVbktnbkpWaHh4YVNYNkNaN1EybkpWK21ORFpCQmdzb3VPSXhvelpvd1BsejFwWWVBbndLZmtMUy9aTUhNTWpPTFpqSXpjMmFXU1BLQU9rVHgzZjR6ditiTkxDbnVNVE5GRTVsa1FkTCtvRStBL2JTYStvY3dmZmpqclRNQllyODVsem9uaDlFYkdwU1dmSFhTZ3BtNHhseDRBNVhHT2xxQ1ZxdWZIai9velJTY2k4U29NeEZYQThkS0FpTWdNek1ja21TR1NjZ0E3YUdXR21ZQ1dUNklZU1lSUVFMemhzQnNqY0VWaWVuT2xnd0h2cFpVUWhMcUpBYU55bnk0OGNQZEUwenB2S1c0V09nMktCVXVta0pFQnpxNEZ1d2poYzBJWmdiQ1lVSXl6UEpIdjBmQzJBbVptVWtpTno4R0tDcVh1aS80WDI5UmwwdjJxc044QmxIQ2hJakJhTjYyZExjOGRqdmg2dUt2Z291RkVaUnJxQjU3cklyQkJjRDNKR2FBb3BtWndGbXVJV1lTbXFKeDN4MFpXRnNMelRDd1dEd0VaMmEvQno0anVMbEdrd29sSjRoQ0JCbkR0K3phTU8vU3hsUVdMODl0cFFISUc4UXZiejRGZzIrQ2JwS1lZYWFzZUlEZUVES3NVSkc5S2hRZ0Y3enlmWVVNNVJvand6SkpNNENiREw3NTM4c0hZQ2dhZURQd0Fjcm5MdC9kMk9OVHp6bEx3YXZ0Q0h3MGdtRzkzbWtGeGtLcG95VWVsTy8vZlNDTVhWRjdpMkVtZzFBb3J3TldoOEQ1empHa1BNWUtBRVNqdHBOdE5lNUMwc1hMOFM1M2loZ2VJMFRqQU9lMFNuQXNJaXM4aTBhcjgxNVo3V1RKY3JISWNnc25xWVdSR3ZaSU1NNzI4TG9KTHdnbUNGRmtLLzk2aDJGMlhNeXBTNm4yZHk1NWd5RGpEeEFQQ0E3TGhVS2FHeit6YmhoVzU0UXJob2xteEdpN3VXUDMxSjZibVNFcHd5dzEyQUNjYlBDN1hOTUpNcWdOR3R5N2RPeWMzanBncFQrZm9JR0xGa09JMW91NFhlSXdVRnNvTmxXaG1CbE9Ja1pqY0tqQnRzMkRiTnM4eU9CUWd4anphNk9pM2tuVGlBK1FtVm1LbE9WcjRQWVFyZGVpQmNDWm9EcHR4MldNK1UvNTNPVzVlOFdVeFpiRlRiOVZkZWJCcTBHbks5OCtoVkJBVTlnNlpvYjNqc0hhTU5ONksvekpNYk01K3RCWkFEeTVjWUJmUFBFaTI0WWE5UFdVQ1NIdWVIeVlISy9DdFp1ay9NR0MzWDNJY2VVUFByK21nWmNUeFpxR1YzNmxjMStIWS9Xc0svR0N1bk5VSE01eXJmNE80ajhKalJLS1RTa3U2UWhsc01IQ0U0L2cyMzl4TnZNT21Ubm1NMCs5OUFhZis1KzNzL28zejlMWFYrbStjTEFVNHp2QVp5VnpyWmpHMUJyRXBFejkzNzRNNVBzTWdHVCs2ZmsvbEx0bDBFZEJYNWNVek15UDJxOVRzaW5lT1Ficnd5dzg0UWp1K05ySG1UbTlsN1ViQi9qSE85Ynd3TnFOek9pdk12L1FXWHowdEhmenkvV3ZzUDZsTjZpVVVxWmlkVWJQM2N5Y1VKUTRDWGhXMGhOT3dSdDVOTnA2NXQ3OEhvRHFHY3VJcVVjdU9vT0ljWmlUUFNHcHg4eWlKSmRINUZNM3RERWFwZFR6OExjdllkN0JNL25ibno3RTVkKy9pOXIyT2dBOS9WWCsyMmNXOFI4V3Y0ZW5YbnFEa3k3OUxzMHM0TnpVbmQ2SVFTWks1c3pZSGszSGdqMHZjR3BrRVpkU3YvUEszUGhhTHlnRW5NOURGeWU3R3FrSHN3eko1ZkZLZDd4UFk3akpxY2ZNWnQ3Qk0xbTdjWURMdjM4WHpTeXczL1JlOXB2ZVN6TnI4WVh2M2NIYWpRUE1PMlFtcHg0em04WndzeXVDYVljWHlCeW1ES25meWI3dW5jTjVoeVVlNnlubVdsNXlGUzN2VUFsdndXS01kalp3b2ZKY1VLSjIwTlFGY2hKa2dmbUg1SWIyMW9mWFU5dGVwN2VTa29WSXN4WG9yWlNvYmE5enk4UHJBWmgvNkN6SVFzZWRUNVdFSVpNWmxnZ2ljS0ZaWEdnV28wck9renJLUzY3Q2VUVko2a2I5WlIvcUR6U1FXSjRmVk1rUHMrM3h1a1ZtVkVwSis5ZGRmQzcva1RySGxBek1EcVRPcWFYd0pJQ3VydDg1Uk9zVkM2b1puZ3lIcnlObnZucFFvSHB5OVdMRUFxRVdtRVBxU2dBSHVUZUtabEF1OGVpRzN3SnczaC9OcGFlL3l0QndSdW9kcGNRejFNam82YTl5M2gvUEJlRHhGMzRIbFpSb05xVzRaalJKN1NCSlRoREFGbFEvMlBlaDVFQ0JNNDlsdUJENldCdmZERWV4QmJCTFJjZXRxVnNUS1R4Q3JuWXhjTi8vZlpFTnIvMmUrWWZPNHVwUExxU1VlTFp1R1dMcmxpRktxZWU2Uzg1ay9pR3plTzYxVGR6MzVFWUlrU0p6MVRYaFdQNjhWY1JrSUQ0L3AyOGp0U3V1REVFVlZGMnkzQVBCNEJ4aEt3djM3RUJUQ3VJNkUyZ0xSVEJVYTdKd3dlRXMvOFJwbkRUMzRNNW4xbTRjNk5pVWMwK2F5MUZGc0FmdzROcVhXUGJqbjdONnpiUDA5VlE2bXRORlJhYllWTTVNaXlWdUEvTStuZk1CQVNac0tlZ1BKWXVGaW5YdFlPaWRZNmpXNUpKelR1U0dMMTNFUVcvZmo1Y0d0bkxqZld1UkU4ZTg2dzk0LzlHSDh2NmpEMlhXOUY0ZWZlNjMzUGFyWjVnNXZaZWpaeC9BeHo1NExCc0h0dkxyOVM5VExxZGRFMHc3MFZWa0FwMXkvYmtaa3hLekdCRUhDSjJWbjloeFJUYXNLOXJpWFI3NkwxeHdPUC9yYytjQzhQVi91WS9yYnZvbGIyNGVaTDlwVlU0OTVsMGNQZnNBQUo1ODhYWHVmZUlGdG02ck1YTkdQNWQ5NkdRdXUvQmt2di81ODNubHpXM2M5Y2h6OUZYTGhEaTFhQmpheDVvOEQxMnMvY3hnY2FiUUc3NDA1d09BTGdJdWtoUUVMaGZMMUFVamlWZ2NBWDUwMmIvam9MZFA0eHMzUHNBWC8rNDJnaE05bFJMTkxMTDIrZDl4LzVvTjNQL1k4eno5NmlZa1I3VlNvdGJJV1BYZ09ucDdLN3p2cUVPWWM5RGJ1ZjZleHp0amQ0T0tWS2hraWtDdms1NlM0ekZYQkU2bnRkTUlSaWRMUDJWeUV2Vm1peE9PUEpEM3pqMklqUU5idU9hRyt5bjNWMG05SjBURE9kSFhWMkhhakQ2bXplaWpyNitDY3lKRUkwMDg1ZjRxMTl4d1B4c0h0dkRldVFkeHdwRUhVbSsydWhmWEZObkdJbmNEY0xxWGNGa3JLd0VudGRkU3BPRzd4UlNhTFJZYy9rNEE3bnBrQTV1MkRsRktmTzY2QzRyUmFJVklLOFF4dVpob1JpbnhiTm82eEYyUGJBREl4MnEydXFZeDBFNzRkVkl3SnpYclZuSlNNaDk0VjJjdDFqMkdFaEFqYit1dkF2REttOXVnR1NhMXFGeTRJYjhYOHJGaTdJSUZITTBqVDJvWGY3N0xsWmlmQ0k0bmwxWUEzRjVKVVJiYVlXYmdSZW9uanZPbDNvRlRSOE82RmNlTXBjTDA1akx3Z3VNU3BNT0ttRHVDSm8xTVRvUjhJWWcwOGJDdHhpYUFFQ2QyczNPd3ZVNjFPRVpNUnFpVElRRUdVZUJOSEpZQTh3cDVLZDlIM2R5N0JvbG4vY3R2QXZDcFJjZm5KK3pDZU83dTJZdmN6bFJMQ1g5Mnh2RUFQUG5pQUtSSjF6VW56MlFWKzhVMFB3R2JYY2pMbWNtNkVlMjJLVVNqcDdmQ3Y5Ni9sck5PUElLUG52WnVMci9vbEQwZTc4ZDNQODdORDY2anA2ZE02RUxDZkRUbHdTK3VrTVhzQkhoYjUyS1g3Y3ZvNDhDbnJsdkJ5b2VmNXVqWnMyaUZ1RVA4Nkl0OHl3NExOaVB4amlkZkhPRG1COWQxOGpKZFBCYmtOUFlnOWpaVmx5emZMTm4wYm10TG0wWXZvRlliaHF3MTNxU2dOcHovM2xNZVB4K1JKdlQwbEhjWXM3dHp4U1NUbVRZbFJmNk9BaHp2T3JQMmc1QkVmMTlsaHdVSmFMWUNGNXkxQUlDYkgxaEhLZkU3MkIrekhQWGJXMElwdUJRenNyNkUzRVdsM1JwNlBQQ3N2WkI4bTR4ZGNnaVJua3FKZjdqMFR3RzQvZGZQVUd0a0hVLzJWbXFQdFRkQXV0R1VnR3BnbGFsb1MvdXcyQXFSV24wWXNod2FKdlZVeWlVUzczWjY2RE9NVXBKZkIvSmtGYzJ1ODVrWWRYYk9ZQUsyRFRRRE9pbWJTZEZid2JPRkMrWk5FanhUQWZLMXgydFBzTnQ4SnJhYUl0amJuZ0NiZ2RrZDdwTVlzVnZnbVp3NnowVGpvQUg3QXFUTDYyczZ0RGtCdlFoMkhDaWFTQ1lqNTA2dTVjUWNQSk0wYmpidWpxOTluRVZmK2hHcjErUzVsSFlXenJuY0RkYUhzNDRucWc5blJScVRqbjJhQ3ArSlV1R05RbDVWcWhkOU91ZlVQeFNjZ2hSazVpWWo1aENObmtxSm03NXlNVFAzNitWdmYvb1FGMTk5STZ0K3VaNjcxenpIOSs5NW5PbTlGZDR6OXlCT09PSkFyci9uY2JKV2JKY2g1bW1KMmpDZnUrQ1BPZnM5UjVJbW5pMkREZTU3N0huS3BYVENmSDV3eitQTTZLOXk0cHdkK1V5VWluQWxtdUZCS3h6R2hzSkp1Y25ZOVltQVoxa1crS3YvZmVkWThLelJ4QmNlWlhDd3ptVVhuOEkxZjM1R1o5eHIvdndNTHJ2NEZBWUg2emdKNzBTanNTOUFPb04yNnNGc2d6TjRsQng0OHNVL0p5U2ZYWUpuclRaNGxqSzBiUlI0ZHNnc2FJVXhRcm4yMDRzQXVQVHZiK2ZTdjc4ZGdHcy92V2lNY0dqdFhaRE9SaUpLVHc0MFBwTEVKdXQ4bVJlQXc0REpGYjNzRER4cmU3MFJ6Z0NrU1g0VXFUZGIvSmNMVCs0STViLyt3NTE4KzZZSEFTaWxDZGQrK2d5dS9mUWlzaEQ1dTF0L0RiQlhRVHFaMnNJUjhFSzAxanBYcXFvSlBOd3VDODJyYVhkTmV3cWVQZkhDNjVCNHB2V1V1ZXFUQ3dINHd2ZFc4WTJmL0lLKy9pcDkvVlcrOFpOZjhJWHZyZ0pnMmNkT282OVNndFR2VlpBdUIxMXA1MEVlU3BPMDZmMlJwd0xzQjV6WHpqdllMakNsdGtkM0VzM2hKZ05iYTN6bzVLT1ljL0RiNmErV3VmZUpGeGpjVm1PNGtWR3Bscmp1a2pNNTY4UWplZTYxVFh6cGgzZlRhR1JFd2ZxWDNtREZMNS9pdXl0L1EyOVBHYk5jRzBxbGhGODg4U0xQdnZaNy91Mmg5VHk1Y1lCV0ZoallPalJoUGwvKzRkMDA2azNLcFNTdlRkNUZGSktudVhPa3lHUU8rSmJCWTZvc1dRcHdnTkE2U1RNNmxZL2pSRm5kQTgrZUt3YU05UFZXeHp6WnR0QUhoK3A1M2t5dzhQaTlDZEtadFl1MHpXeXptYzBEdmE3cWt1VXVWeVA3SjlCSEpHdVp5WThIdUkzR2lTNDU1OFFPVHZUU3dGYnVYUE1jQzQ1OEo4Y2Q5bzR4YkI5OTdyZXNlZlkxRnAxd09BZlAzQStBUDd0dUJUOWMvU2pUZXlzTUY2ZnQ5cVRiQWlxbENkdUdHbnptckJQMm1NOG5yMXZCRCs1WVExL3YrQUdmaldBbndVd0oyRCtEL2ozZ0V2TDloY0ZQaEgya0NJazd5YXp4aERKVjhPd0hueitmVjk4Q25vMG03eHhidDlmM09ralhycDNPVmRNdytHZTFxNzM5bk5QdG9ubnIyRjVMbjltV1ZjK1U3QkR5Mm54bmpPUTY5eFY0dHEvNFdGNU5ybUt0SG5qNGNHcC90VnlSMjVTYVN4amtocWZtK1pkcjB3RytYWURjZVNRNHlxTHZLL0JzWC9FcGFxdXNndy9BZFJ2bzRUOWJ5U2ZKRnB6Umd4bWh2aldqL3ZUbW53QnJESG13U0x1NHBpM3RmUUNlN1FzK1psYUloR2g1VUxlbS9wdnQvOXJhWkJCZHNGWS9McERTU2hPcTAxTmZuVHNkNEhKR0toeUxNcExpNXo0QXovWUJIOHZqenlLV05RUGo4dXFKL1NUN08yOUpTckF5YnZqV0swaEN3Rm9oU001SmJqVndvNEVUdEt6bzYralFPT0JaTXNIdlNZRm5lNGxQb1N3U3RISlVnQnR4YmpYT08wSVdzQmJEdDE1QkFxQm1oQkNKTHZjT0JwYzc3SnlpY2pNcWIvQTBRUHNLUE50TGZOcjlCUkVweFd3d1JyNll0MTJDODdtbUFibGc2cXVXVWwyOEZPYzZoOGtOWnZ3RjJJK0tIWlZYdENiZTFyLzhwbUR2Z1dkN0VhUXpLNW95UjZyb2RJbHpQQTk0a3dYRFUxOTFaV2NjQUtybi9RMU9ScFpGRWk5blpoSDRINkQvS0pHUko4eXRGU0wvK0pkL3FvK2U5dTdkVEhIWDlPTzdIK2RUMzF5UmE4UTRWUENoUzN5czRDUElleUtBN3pqeFdVT3VtY1dZbGowTXQ2ai9iQm50RDNhb2ZNNnlQTFZvcHRDU1phdTJVbDB5N1M3RTZSaVpwRFRFYURFYUY3eHZ2bllHbnUyVXhnSFB2SE5qd3ZYMjd5SG0zdWFDOTgzZktVZzNRVDVXOEpHWlpSS3BHWGRlYytyQml6NjdlaVBseEtsOXZtNnN2TEl6eEE2Y3F1Y3VheC9ablVXTFFkYWJ5TjB2NmJoOFlLV0FGZURabnFYamR3T2VUUWlrbXhnZksvaU1Gc29hb3IwL1F0MDU1UzBDUU9QV0s4ZmNtcngxclBvMm85b25FRkZPM3FNaDRHd3p1MTl3ZUZzNEJYaTJSeWpkN3NDejNZRjBFMmRqS3Zoa2tsSXplemFhblNXbnVvcEdMb0RHOWgwdDE3Z2NPNjEvQmdaZVJnallBVjY2WGVqNFR1dGZPNFZzNmxxRjU1U3AzWjlkNFBRYWFmMWJFNHl6blJnUStLS1psc3pHYi8wYjExOW1LLzhhRi9KanBNdGZPZUFkZWowRVRqRnN0YlY3bDdDZzRyUnB0cXVnWk4rUUZVWkF1ZmNKaFVkTlRiYTZoWjNpR0JGSzRiN0dGUXJzb3IyNGR0dFNvdHJaVUFXRWw5ZlExZVczblFGOEt5OEJsYmRjZStpMG45dGtrb3Bkb3B4eDNpT2Fad1l5Q1crR0E3NzEyUzBMem5CUVE4WDJ5Ui9wVGp0b1lRTDJvWHp1TW55ZUU4WEFOV2pHSGtxakd0STFnL3dsRnYrZkd0THpMSk9OYVVnM1o4WklRN3JxVkt6cWhCVU42V0w0bHZFMXBVM2pCeEdqS0R4OUx6cmlUNUFUSmpPUGx3ZHZhSjJaL2duWlRJeGpKVG1rVGt0L2thdG9HOUd1Q3FpZFpkUUlmQmlWTjRUNC9QbHd2YUVQQ1g3dFpGNldRTEhOZ29QbWJycjBZVEpQZFBSTEwzeVZubGJEUnlNa0VnSDdvT0FhRThjWE5qZ1UyOHExdGNhS2hld3g0dDdXd3ZiNUJ5elBwU0RBRnladURmREZCTzdLSUgvcFJlZ0xTYko5Nzd6MFlqU1ZsbnlWVkJtWWlEaDVwSURGK3Y5NWh1b0pjejRNL0NYWWU5c2J5U0JnUkRBL3dtK1VQOXRwMHIxVHhHT2o2bGJ5eWtySnFYaWZUQ0duWDRHKytmRmJmblhERDg5OUR3bTRBT1lVRFJsWlRHbmUrcFh4MkhSUE1BQ2NmeFhWVnBPTVNNdDVxaEhmZktNV1NyTjZlRWRadk5hd3hZSUxnVVdDQXhpYld3OWdzVENNNmx4b1gyNmI3c0tzU1oxcTBwRnRuMitoQVdDVndZMEg3cGV1ZkcxYlJ2MytLdFdUNjc3dUNFbkxTQVgxZE05ZXJET2x2VjlkdkF3VFdNdmhYQVNQdi9LZG04S3lWL2RIaUJqakRFbG5JRDRBZWgvWUhQS2FuQjJqK3hHQmpQemR5YTRaUUl2OG5WVVBZdnpjek81MFhyODNnK3RQbjg3SDd0bmlMWE1oTkZOY0plRFVvcjV5OTdaa1o5UVZvMWc2NjJ1azVRWTk3M2lON2E4Y2lqQXZaREhHNkZ3TzRBKzN6S2VldWNBQzBGeXdYYis4UzJ6SFdBODhBYXdIMW1RaHJDK25TYkNZVjFBNUw1Zm5pd2pUNXY2T29RMnp5R29sbXF1bS92S3Uvd2ZScnc1eFp2dnYyQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzMtNWUyOTc1NWU3MDEwYTdiMGMwODgyZGYxNmZmZmIzOTQucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcIi9fbmV4dC9zdGF0aWMvaW1hZ2VzLzQtYjVjZTk5MGU5OWExMDJiZGFiY2NhMzQ0NmJmZjBhZjUucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRVlBQUFCR0NBWUFBQUJ4THVLRUFBQUFDWEJJV1hNQUFBN0VBQUFPeEFHVkt3NGJBQUFEbDJsVVdIUllUVXc2WTI5dExtRmtiMkpsTG5odGNBQUFBQUFBUEQ5NGNHRmphMlYwSUdKbFoybHVQU2Z2dTc4bklHbGtQU2RYTlUwd1RYQkRaV2hwU0hweVpWTjZUbFJqZW10ak9XUW5QejRLUEhnNmVHMXdiV1YwWVNCNGJXeHVjenA0UFNkaFpHOWlaVHB1Y3pwdFpYUmhMeWMrQ2p4eVpHWTZVa1JHSUhodGJHNXpPbkprWmowbmFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzh3TWk4eU1pMXlaR1l0YzNsdWRHRjRMVzV6SXljK0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenBCZEhSeWFXSTlKMmgwZEhBNkx5OXVjeTVoZEhSeWFXSjFkR2x2Ymk1amIyMHZZV1J6THpFdU1DOG5QZ29nSUR4QmRIUnlhV0k2UVdSelBnb2dJQ0E4Y21SbU9sTmxjVDRLSUNBZ0lEeHlaR1k2YkdrZ2NtUm1PbkJoY25ObFZIbHdaVDBuVW1WemIzVnlZMlVuUGdvZ0lDQWdJRHhCZEhSeWFXSTZRM0psWVhSbFpENHlNREl5TFRBNUxUQXlQQzlCZEhSeWFXSTZRM0psWVhSbFpENEtJQ0FnSUNBOFFYUjBjbWxpT2tWNGRFbGtQakk1T0dNME1ETTVMVE14T1RNdE5EUXlOQzFpTURJM0xUUTBNVEV3WW1SbE5EWTNZVHd2UVhSMGNtbGlPa1Y0ZEVsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Um1KSlpENDFNalV5TmpVNU1UUXhOemsxT0RBOEwwRjBkSEpwWWpwR1lrbGtQZ29nSUNBZ0lEeEJkSFJ5YVdJNlZHOTFZMmhVZVhCbFBqSThMMEYwZEhKcFlqcFViM1ZqYUZSNWNHVStDaUFnSUNBOEwzSmtaanBzYVQ0S0lDQWdQQzl5WkdZNlUyVnhQZ29nSUR3dlFYUjBjbWxpT2tGa2N6NEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ29LSUR4eVpHWTZSR1Z6WTNKcGNIUnBiMjRnY21SbU9tRmliM1YwUFNjbkNpQWdlRzFzYm5NNmNHUm1QU2RvZEhSd09pOHZibk11WVdSdlltVXVZMjl0TDNCa1ppOHhMak12Sno0S0lDQThjR1JtT2tGMWRHaHZjajVVWW5JZ1YyVmlQQzl3WkdZNlFYVjBhRzl5UGdvZ1BDOXlaR1k2UkdWelkzSnBjSFJwYjI0K0Nnb2dQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlKeWNLSUNCNGJXeHVjenA0YlhBOUoyaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOG5QZ29nSUR4NGJYQTZRM0psWVhSdmNsUnZiMncrUTJGdWRtRThMM2h0Y0RwRGNtVmhkRzl5Vkc5dmJENEtJRHd2Y21SbU9rUmxjMk55YVhCMGFXOXVQZ284TDNKa1pqcFNSRVkrQ2p3dmVEcDRiWEJ0WlhSaFBnbzhQM2h3WVdOclpYUWdaVzVrUFNkeUp6OCtmMk5QSXdBQUdybEpSRUZVZUp6Tm5IbWNWY1cxNzcrcmF1OHo5Z0FOeW1RRVJZTkRITGtxamxGanhBRTFjb05Hd053azcrVVo4NUo3WTJKTTFOdzRKaVltVVpQNEVzaGdFcWVvT0tBb3FPQThvZ0tPQ0E0Z0N0TE1UWGVmN3RQbjdLcjEvdGo3bk82R2htYk1lK3Z6NlEvZDdLR3FmclZxMVZxL3RXb0xPMEF5RXljaGF2QXFDQTRyV0JHamtWZHZEUWhDMGZ0TVd0Z2YyQS9ZVitCZ2hSRkFEWkJCeUFPZ0ZJQWkwQ3F3VU9GMVlMN0N1eDJPZHpJaFJWVHdxZ1JHalBjcVRzV3BjeGdycURFVWI3OWd1OGNrMi9Od1p1S2ZDTVFSaUtmREJSalVGa3E0ZkFwRURKSFhvVlk0SHZSSWhPTlFHUUVhUTdWaHk5cHpqMVFyRi9BZ0N3UjlWdUZsaHp3VkdENVdyeFRLbG56b3JJSUxwVXlrRmkrVzl1MEFhTnVBK2VyTjFKUUR2QlBLNGtnRnhoUzg4M2xqS1VSaTg0R09BYzRHR1FQMDZ3UkJBWEdBVjFXVHRDL2RlbExGQVFWVVJEeGdBSnM4SDkraXJBRjlHSGlnVUxZUDUwUG5DcTlOSi85dnA1bGk1SDNhQ3lZMHRBWmx1UFU3V3ozRXJRWW1QMzR5WWlQd2dxcVJ3SXBFWG4xQkFzbHJOQTY0R09Fd05ORUtWYWZnRVN3cVVobTVpSWlDeWliNlVMbW1YVlFHUkVHZGdFSEVhb0lReUt1Z3Z6NWo1QVgzVEpzem1jQ0lpWndxb2lxaXFMY1U3dHc2N2RseVlNYmRReTYxQnE5S3NjMlF6MlBWNDRMQUVIazlSZERyZ0lNbFZnOEhxcW9ZUkVSUVZLdkxaMXVYcjZyR0Q2c29LQ3FDQnhIUUJDVG1LRndXR0hrOGloUXgyRUprWENhSU1CamFTZzB3NVp3dGFteUxPbGt6WVJJcWtEUXUxbUNjVjZmS0VDTnlQVEMrQWtneXdRWkFSRkRWR0pzZEtLcXFsWGNudy9CSkN6YjV2OXZVY3ltR1pWYXdUdFdEcUFCaWxOYmJMdXkxalY0N25KMHdxV29JRkV6WmwzM0dwbkJleDRyd1p4RWFRSHlpOGtZUUllbXp5UFlaOTk1RVk2MkJ6aVhuNDBsUW84cGFoVzlhNVA1MjMwN2FaQXl4QWNDTG9hMFh3MncyZHpFM1lSSzJjM1JXVVoveFdienFEU0xjSnlJTnFsS09KMUFzZ01hMlVYWTJLRkFGUGw1WWNhTldWVVZWeWlMU0lIQ2ZoeHZxY2lNQjlmRVk0b2R5NHlkdC90MmJ1cEE3LzQ5WUg0OVN3YXJpSXZYNTBKZ0hST1NMeER1TFNteFVWZG54UzJacnBiTEVpRHZrUkVTUzNXOG14cCt0WGdvaVlnV2NLRGlqdEcxaVdmVTRrUHhYSnBQTVB3b1djRjRaWUlSSFJUZ1lwS3lxUVFMRUpqeVFmNTBrZGl6K1BlbTBTTHk4QklrUVFsV2Q2NVRUakxCQ3dBbzRFTlJCNGE2Tmw5WEdnem4rU25KREJsYVhENHBUMFlHQ1BDL0ljSVN5cW9iR0NGYWtzbEg4UHhNaG5qWGZCUnlvYW8rb0tvS1VnVkRSRDFYMUdFRWFFU3lJVTRHMnBjdmg2U3U3dlRmWXNLSDhib01xMXQ2b3FoTk1Yb1RwQXNNaEJzVWFvKzJsaUhKN0tkNkRCYXF1ck5jTlg3bnpKTEh3bVZ5S1ZHQnd2aE9jMkUrcTdsNmhpSlFGaGlNeUhTL0hldFdDRVRVZ1ByL2JJQW9idkxyYmJHZkcvd0ZFTUNCUnBGcGEwQ2o1encyZUtTSmZVS1VNR2xvajJ0eGU1c0NoL1dUaXNTTm9xRW1qUUZ0SGhEVkNQcjBSMWpzZWo2VGpYbUh4eW1iKzhmUUNQbDFYSUpjTzhMNUh6VUZWQmFRc1FxaktFeU1PMHBQZW1tY0lqWXBIRlBVVTcveld4c0JrSi95SnJBMW9MaFhJQlJuajFYdEZmdzk4UjRReUVCb1JiUzFHblBpNUlUTDk4ak1JcmVHTmoxYlR2eTdEa0lZYUFPWXVXclhCbTNlOHhLQW9nVEVjTkt3L3ExdmFPZm1haDNocnlScHk2YUNiNW13SWpnaGxWUWxCZnkvSWZ4b1JVeWhIdmk0VFVpeVdhTC83ZjNmdmZzMkV5Umd4ZVBVV2NJcE9CTGxOQktlcVJrVEVKNys4YytONXFNS0pWMDNsNDFVdElIRHAyU081K3R3aitNSlZEL0xrdkk5SVoxTTQzWG5MU2hBaTUvbnM0RDQ4ZisxWUZpeHI0dmdySGlDYjZsbGp1OWdjRlJHdnFFVmxnZ2gzQXRZSXpua28zQkViWWdPUVBmOFBlQXRPblZIVWVkWGh3R1FSRXBSanI2a2NlUmxZbjJQMy9yVmM5OEFjRmkxWlEyMDJoUlhETDZmT3BhVzl6Tm1IN3dFSzJYUkFKdXo4eVlZQjJWVDMvOXVlbjNSb3FjK25XUGpoU3E2OTl6V08yV2NRUXhyeWxDTFhvN0xHb0ZBQkozR0JkSkwzdXFmMzZpS3Z4dUhKbnYrSFRtQ01UNkVlaklBUlJVU3VFeUducW1WQmpNYkJnTVFOUUxFY3NYSjlPNUlKWTVXMlFpWU1hQ21XMktVdUM2SEYrODVPR1JFaTd5bVdISlYzYkNobUc1YWVLcEFPaUJLRDM3ODJpL09iM2llclc3aGdWTFVzSXJVaS9NSUdnclVHbkVkOEdQY25lOTVrTkxKWXhYb1Y3OVdjQm93ajVqOENSVFdPTXJvUE5OR21hZ2NWeFd6Q3Z5dDBsS25McGhnK29JNnk4NVFqbnp4WGliU2hyZVNJbkk4SDF1VmFyK0k3Z1ZhMGQ5TW1vQ3BLdkNON1lKeHora1huMUZzYjJNZ0haTStiakxHQm9FR0oxckp6QlVrQmVuVkNEcWlnbFhpNDkvbXNVZ0NkL3hnUjJqcktqQms1akE5dVBwOTNmenVCK3k4K2xicGNxcnA3V0NPMHRIYncxZU5HOE1LMVkybW9TUk01MzgxNGJsbmJXeWJKbE5MRjNpQndYVnRvS2FoM3hwU3dGb3hvR1NOcTg2RWhwNld2SURJU05FTEZxSWh1MXMydkJDdFNtVFdwdEk0SVJONlR6NFQ4NllMam1iOTBMZC85NjdPY2R1aFF2bjdDdnJRVk9zaUVsdlhON1l3N1ptLysrdTBUV2RsY1pGMmhBN3N0NjZyUzhKYmMxUm1hRzhBQkkvUGw2TXY1T0w2eDRrc1k1eTNuL1A0YzEvY3o5UWo2dlpoYlFoQVYyY3hNT0s4UStYaHBPRS9aYVJmQ0pMNUhreTIxb1NiRG9oWE5QUG4yVWdEcXNpa3d3cHJXSWw4NFpDajNmUDhVWG42dmtYRy9tWUZ6SG1Oa3k1ZlNOa3BpZnFWTE9QR0RmZ2NPNDVlM1grQ2NCaGdSN0QzZnVZZDFuNncvSFRpQ0dFRWo4WUxkZUFvRW5GUFNvU1dURGFuSmRQNllDa0dYY0RlaHRheHY2K0NpdnovUFY0N2VtM2R1SE04Ykg2M203MCs5QzE0NWZ2OGh6UHJwV2J6NndRcE8vZmswbkZmUzRjWk8yczRRb1RyMWh0aldqRnJ6NWtlbi8yamlaTVNJRFFSUmpkVmtmRExkQ3RJajUxZ0pHYlBwZ0xzdkd0MWpnOFd5cTFwRHIwbzJGVEJwNXR1OHVMQ1J6L1N2NFpVUFZyQjhaVE1IN3oyUVJ5OC9nOFVybXpucit1azB0WGFRQ2kzV2FGZUNhNmNCQTVCd0FzU1VoQmpnUE9BUlFBTWY5MytBRVRrMW9TQk5ER1QzWGlrUVdNT3E1bll1K3Z2ejdOYVFKL0thN0U3eDlZdlBPSmpBbWlyVkJ6RXhrMDBGdkxsa05XOHNXWTF6bmdQM0dzQUwxNDZsc2FtTjQzNzZBTXRYdDdMLzBQNWtVcGEzUDFtTEViREc3SHh3S3NhbXNxR3FucUxLTHNDcVFPS0ZkanBLWHhBbm9xWUxQOXNKVFBKMDJYbHVlbkFlT04rcFVsN0JHaVllKzFsQ2F6YmFKYnhYYXJNcENoMWxoalRVOGRoUHprUVZUcjdtSVpZMnJ1ZktDYU80WXR6aEFOejI3RUsrT2VrcGJBTHF6cFk0aEZLSldRVDZBV01RL2hZWUFhK2NXTUZPTmtFM2RWWHYrcnBNRlRoQmNGNnhSZ2lzNlRUQTFZYmphODN0SlFiMXpmUE1WVitpUHB2aXFKL2N4OEtQMTNEQThGMjVZdHpoL1BHeHQzbHZlUk0zZnUwWXByMjJtQ2t2ZmtCZExvM2Z5VVk0ZHZxcVdRa1V2aUFpZnd1ODh5bEVSaVgzbVc1OGZnL2dBRlVuTEJrNjNzZFA5ZVJRVkxTc2YyMkdSeTRkdzdCZDZ4aDEyYjI4dm5nVm1XeXE2dkd1YW01bjVmcDJBTktCamJmR25sKzV3eVZ4YVV4aVkwZHBVVklCbVAyQVBhaFN0VHRXakJIYVcwdjgvTHhSSERpMEh5ZGROWlhaN3pYU3B5YU5jOHI4cGV1NGVjYWIvSFRjWVFBODl2ckhQUGphWXZMWjFBWVRzUE5FcWRoVUJXUVBRdDB2UVBSUXdNUVpRalU5UnpMYkxzNHI2VXlLVzU1Nmw5dWZlNDg1aTFaUmwwdFRqbUx2Tmd3TVA3ajFCYWE4OUFHMTJSVFB2dnNwNWNoWGwrVy93czRJTWFtVllHQVJEZ21BNFlsVDVwSE5adzIyVlZLaFllR25UYWhDZlM3VmpTK3hJdGpBOHZ5Q1Jyd3FOWm1RTURBSk9iZnBiVnM3NDlvZEpncGV3Q29NRDRCOUJZa1RlNVZvZkVjMVF6d0E3eUcwQmhHcEJwRGRSQ0NYTUg5ZU5YYTNxSVFhblY1d0JTQWpnakZKUkd5bEdrSnNUOWNyZEVUaWYrd1hBTU9TYTBabDA0WjNxeVRPOHVDOFI0anRURVZNTDNHUXFYRElRT1E4MW5RQ1lrME1iS0ZVUml1T1pITTdUVzBsSUFiVkdrRVF2RzVkSUtxZHNSUEFzQURvVzdtNFEwQ0pYMFRaZVFiMXpUSGo4alBZcFRaRGVTc2ladWVWUHZrVWY1bzVuNHYrL2h4MTJSUmw1MW5mMGtGdFBzMUpCMzZHa1h2dXd1Q0dQSzNGTWdjTjdWOTl0cVBRUWFyZVlveHNWV2hSaWJhVFAvc0dRSi9PNGV3NHNVWW9GTXY4OC9uMzZKTkx4MTd5Rmo3clZjbWxBMTVZc0p4VVlHbnJpQWdEd3lWalIvTERNdytoZjEwV2dKYjJFcUUxWkJJNjg5SEx6K0JuOTgvaEw3UGV3YW1TQ1lOWWE3ZDh2aXMzMWdhUVZETHRTTkY0U2JRVXkxeDU1Mnp3Zml0Z1QySU1yNWhzaUNEc05haWVLVDg0aFFOMjc4ZU1lVXY0MjFNTGVPbTlSZ3JGTWdyMHlhVTRjc1JBL3VQeisvQzdieHpMeE9NK3l6azNQTWJTTmEzazArSFdnZ05RRXhCSDArRldEcjMzNFZVWVBpdllWTWlXT0xBaTRKd25rd3FveVlRMHQ1ZlllMUFmWHJoMkxDQ2NkUFdEUFBIR0p3QmswZ0hGamdpeFFrZlo4YzluMytPZnp5N2tqTVAyNUw2TFQrVzVhOFp5N0gvZnovSjFCZEtoM2VxSVBRRGFnTXcyalg2VEk0enRSRjAyeGEvT1A1b0JmYkpFa2UvVlJSSWc4c3JOTTk3a2xROVcwQ2VmWnVvbHA2RUtoMTV5RjR1WHI2ZStOb00xd3JyV0RuNDBkaVNmckc3bHptY1cwSzlQanNoNXBzMWV4Q0dYM00zYzY4L2hudStQNXZnckhxaUNzaFYrVVdzQU5BTU5kT2F4ZG9oNHIrVFNJY2Z2UDRRQjlkbGVqYTlxN0g5bVFzc0RyeXpDdi9FeFAvaktFZXcxc0o3UFgvRUFpeHZYMDdjdWkvT2VkYTBsUmd6dXc4L0hqMkxCc25VODkrNm5MRzhxa0VzRjlLM1A4czdpVlp4OS9Rd2V1V3dNM3poeFgvN1BJMjlTWDV2QjllQXBiTmlOQklPV0FGaEhzbVZYY2kvYmpZcENHQmdhbXdvY2Nla1V3c0QyeXNoVndpTG5sWTZ5bzkrdWRmem5xUWR5MXd2djgreGJTNU9CS2EzRmlPUDJHOHoweThiUVVYYU1HTnlIMmRkOW1aT3ZmWWlGeTVySXBLQytMc3YwT1l0NS9JMlB1ZVNzUTdubHlYZDc1WkcxKzJKZlo0Q1Brai84aml6ajBNUUFGem9pbWxyYVdkL2FzZG1mcHRZaUxlMGxSS0FjT1Q2Ly94QnFzaWx1ZTJaaHQ5eUtqeHpmSG4wQXBjZ3o5TUpiT2VTSGR6T29iNTZ6RDkrVGNuc0oyMlVJLzNoNkFidjNyK1dRUFhhaHZlUTJtNktSdUFTcG9sTWZCY0I4Vk04bTNzWjNqTVpJSEppRjFuREt3YnVUVHdlNHpaUkZxQ3BoWVBsNGRRdnpsNjZGc3VPUVliRnZNbmZ4S2pLcDduUm41RDJabEdXdmdYVzg5dUVxVHYzWk5KYXVhU1dWNnd3ODA2bUFGeGMyQW5Ed3NQNjhPUDlUUkVJMnRRdW9xRXBTNXdPOEd3QWZKZ3ZMN01oWXRoeDVCdld2NWM3dm5VemZmRHFKajNxKzEva1l4T2x6bHpEdWhrZkJHZ1kzMUxDNnBVaGJSeGtqVWkxa3RhSGwrcWx6R1gzUTdyejRzeS9UVk9qZ2wxUG44dFE3eTBnRnRyTllSMklPeUh0bFlKOWNuRXpiWElmakJrenlnZzhEVk9ZaGVGQUxvbXlLQk45S1NRV0dUOWNWT082Lzc0K3JFSHBCM1lpd1luMWJIUGQ0cFZBc1U1c0o0OTBFRHdraGxna3RxY0R5NWQ4OHlrRkQrekZtNURDdW0zQWtrZlA4ZXVyY3FpMkNtQjRWZ2ZhUzIreU9HS3VKa0dEZ1VlWUdsR1UrS2I4WVpIaWNxZDRCTllWSnJBVEsvS1ZyOFZ2SXE0U0JKWitKWGFwbGEyUC9ZOWY2TEIrdGJDRzBFQ1hkbi9iajA1bngraEsrZnZuOS9QYmUxMWowdC8vQjBmc000dGRVYkJ1VUlzOW5COVVqSWl4ZDB3cFdOc2w1SmFTREp0N1hZdEQ1Z2FTMXBNckxvTU1CTDBxdzNmcVNQSytxOUt2TllFM3ZiSVlRWnhnaTU3SHBnQ2ZmaVhOUXB4ODZqSnNlbWtjK0V4QUF6ZTFsWnN4Ynd0ZE8ySmVXbjV5Qk5jSWV1OWJ4K3hsdlVobWFpT0JMRWFNUEhnb1FoeGFKbmVwSk5DN01kc1M4MUV0aXBSUWsyK2dUcWt5b1ZBUlVhdGkyQjV1eWN3eHBxT0dGYThleWEzMXVpMnpNMUZjV2NlNk5qNUZMQmJ5eGVEVnpGNjNpb2pFSDhhZFo3MUNLUElFeFpFTExqKzk0aVZ3NjRMdW5IZ2pBYjZhOXpsK2ZlSmQ4UG9WcURQQ0Evalg4MStrSDhzamNqMWkwWW4yY0Z1NEJsMWhUcWluYkdBc1BRWEx2ZEFOcmdZWUtmdHZyNndYR3NMYTF5S1YzdkV4ZGxaenErVjdWT0lHM1lGbFRsV3NwUlk2ZjNEV2I2WmVONGRxdkhNSDMvL0lzdFhVWk1pbExVMXVKYzI5NGpQMTJhK0MxUmF1NGVOSlQxRFRrQ2EwaDhrcEhzY3h2TGp5QnVteUthKzU5clVwMTlPVDV4cUZMWWw5RTFubGxoZ0NCeEltbUZZbytpakkrTGhRU3U0bWMyNVpKd3I0Vnk0NWJacjJ6eVMyeVMvZmlod0pMVFNZa2NwNjZYSXBINXkzaDF3L040K0l6RDZHcFVPTHF1MmRqdy9pZWxEV2NkOVBqbENKSFhiOGFSR0I5ZXduMXlnM2ZPSllKeDQ3Z2lydGZZZmJDUnVyeTZVMEZrcHFBNVZRSlFHY1lrUlVDSmtpeUJpaHlsNkRqSzZSd0R6bTNMWmZrTVNOQ2ZlMldoMkdxV3QxUmZKTHgvTWxkcytsWG0rR3Fjdy9uc0wxMjVmSTdYK2J0VDliaXl4RnZyMitMRzdOQ21BNDViUGl1WEQveEtENi8veEJ1ZXVRTnJybnZWV3B6cVkwcU9ydTJsMHhLa2lIZ3puaGhJUUdLRzNMbTUxajErcEpwcFU5YVhnWkdBUTdCSnJtVzdWcFR6dXRHS3R5dExuY0QycklybFdrbDF1ZHYvT0ZKM2x5eWhsK2RmeFJqUmc3anBZWExlV2IrcHl4ZjE0WVMreW1qOWg3SWlRZnNCc0JGZjMrTzMwMS9pMXpDMC9TMGhMcFVWemtRQy9weTMwR2xSNDc2Y244ZS9sMkxDMUtCWWRtMHQrT2FWK1MzS0tPU2RSZFh2MitMMWlTUFZmWWlUMmRrVy9tM2E4S3VhMUt0Y3QxMDBicmFUTWhORDcvTy9iTS81R3NuN011L0g3RW5QejU3NUViTjN2YnNRbjU2MTJ3K1d0Rk1iUzZGd2lhMXBiSkZkNW1JMzZ4Ym51YVJtNXV0dFZrWGxEMTR4TFZqd0tidnl2djJpNEdSb0k2NE5uOHJ3b1JrMWhOdXRyMGNJVUJOSnV3R2poRW9kRVI0VlZLQkpSMVlYRktiWmt6c3lCVTZJdENZSkRkR3FNdWxhV3hxNCtxN1grR2FLYStTU1FVTTdwdkRHT0cwUTRaeTA5ZVA1WlluNS9QUnAwMDA5TTFSaXZ6bU1neUp1NllPeFFKekN2blV2YlFWeWFoeEltV01jNHFVQXZKNG0zZnRxT3FsbFpNamxjQkJlN2VlbFFiamZGQmJpU0g5OGp6MG85TTU5K2k5YVc0cHhydE44dFBjVXVTOFkvWm0ybzlPWjNEZlBNMXRIUVRXWUkyaFZQWjRyMHo2NXZGY2M5NFJGRHFpZURtaTVOTWhHR0hrbnJzdzVRZWoyWE5BUGUrLytVbTFCcTgrbDBaU2xzaDFYNTdkT3hrWE9GUXlyb2wzY21tK1VDYXYxdnBTZ0lzY1Fmcy9MeUEvL3M4NEY3a3dEQTBpTTczelUwREdnWlpGSkl4TmQrL0FXR05ZMzFaaWoySDllT3FLTHpHa1h3MWpSZzRqbXdxNFpkWjhhbk1wbXRzNitKK2pEK0RQM3pvQmdQMTM3OGVadjNpWXR6NWVTelpseWFRcy8vak9TWngxMkI0QU5PVFRmUGVXNThpRWxuVnRSWTRjTVpCSExoMUQzNW9NcHg4NmpKTlVhYTVrQ2J5aXZYalpLcG9VeG1nWk5BU1pZa1ZuQWlaQ1hSQjYydTY4SURZRFBvakF4dlNmY3g2RlMxVzFMUUhGYjhDZzl5Z2lRbHVwelA2ZmFlQzVhMktuN3FTckgrVDJaeGZ5MXd0UDVKS3pENldsdGNnUHp6cVVQMy9yQkdhOStRbEhYWDRmbWREeTZpL0djZWlldTJDTllmcGxZempyc0QzNDN0K2VZK0p2WjNMaDZBTzQ3K0pUYWV1SStHSVNPQWJXY01LVkR6RGxwUStZOWRPek9QZm92WURlVXpPVkphU2lYcEJRbFZhRkh6dE44bG5Xb1VGY1dSb0F0Tjk2SWZrSms3R285N0dGL2xDUmJ5bDZxM1NoSXpabmI2d1JPc3FlSS9ZZXdNcjE3WXk2N0Y3bXZ0L0kwKzhzbzdtOXhDOG5Ic1daLzdZSFIrOHppS212TE9Lck44K2lwYVhJa1pmZHk1Tlhmb2tYcmhuTGdrK2JPSGhZZjc3OTUyZjQ0K052Zy9PVW5PT2U3NS9DdkYrZHkrZDI3OGZxNXJnS2ZONzdLM2h4WVNPcm10djU5dWdEa3NuWkRDaDBHNE1tTnVKL0dXRVJ4RWQxaUN5Rk8rS3llVnQ1TU5qdlZOTEdVRkRWbEJnRHZBSHNDaHdoUXFTSzdiS3JiTlNGeUN2bkhyVVhoWTR5SjE0NWxYZVhyYU52YlJZUm1QcnFJb3dJNTM5K0JIOTVZajVmLzhNVHFFSnRQczNxbG5adWZYb0J4KzAzbU1QM0hzREUzODNrbHNmZnByNDJRellUTW5kaEl5KzgzOGgvblg0UTczM2F4SWxYUGNpQ1pldG9xTS9pRlI1OGRUR2hOUnc1WWlDM1BiT1FEMVkwa3c0NzZZZXFwa2lsWkY0aVZRMkEzNHZJcjR5SWFmTmxueEZEaENGNmExb01jdGZCWlNaT0JnU2pLbVZGeTQrVnlaOFN6QktSTDZDVUZRMHJxMnBEY0p4WCt1YlRGTXNSemUwbGNxazRiV0VrM282TFpjZVF2bm1XTjdVUldDRzBKcW1yTVJUTEVlbkFVcHROc1dKOUcvbDBYRmhkTWVZdDdXVjJxY3ZRRVhrS3hUTFpWTERSdTNmclYwTlRvV01qQ2xPVDQ0RUpLUEh4SE5YSEIzM3orTkdmL0hFVzFscnhnZ3BDK3gwOUhMS29TSDdpNUppelVUVmU4VVpOSHV1ZkV6aUUrQUJYV0lrMWhXcmdoVWhjMjI5RXNGWTJZdVpGb0ZSMnBJSllTWDBYdjZhU05ZeThrZzRNWHVubTkxZ2psS0xlM3UwSnJIVDcvdzAwcFl4cXFEREhZWTRWZGUwaVlnVDFpS0d3d1JuSmpmaUF3dExsbFYrOUVTemlDNmllcHNvSHFvUWl5UmxJdWhRUUo1MEpyTmtvTlZxNXBrcVZZZXZxZElsMDNwK3kzVUdwZGtUWmduZWJEVURwY201QXBJd1NLcnl2K0ZPdCtuWWpXRWs0M2k1ajNqUXdQSDBsRWxFaDhaTFFRQm85SEFNNkZ3Z2wxaHl0MEJRSzJuVWdHMGV3aWZ1L0RkYzNkZSttbnUza3Jpdm5CbUl0VjNTT3dqRWdxeXFuMitJRW1Obm9kRnZQd0JDZkVmU215cEU2QVd2UUZSaC9uS3JPN0dKcm5DVDBlbS9iK2I5Q1ZPTlRBZ2tvVHVMeTB4Q1lHWGwvSE1yS09DN0NnYUxHOTNnZUVqWnp2TGp0dGdzclozYUpYeVFXTDRWMFp2K1RRVzdVK09pU1RZNFhWNnNGOUY5U05kZGQ0dFdYYUhDOE1aZmp2cWxSMVJ0TkZKeHNqTFNKeEFkZjR4azNtenhCQzFzUU9lY21Uc2FvcjV6ck1CMis2TE1taTBQSEN2K2ZIRWhYa2xLeERRNmtLOSswUnU0dnVoS2hDUTJKSHllaXROMngrZFA2dlpLeGJiZGZVTDFMd2FkTVdoQzF3UDNxT1ZDVjJ5cmFJeUplNHhOeENhdWp5czdSSUszV2ljWmNyQk1SMzZrbDNPWlZEMFQwZmtSdGFFSUJ2TVRVVGErZ3dOWndMZVB1SVpkYWk4ZFRqQUx5Z1U4K2VpRkVYazhTK0NWd2FNeUtpa3VjSFFNVjlxS1NHOW8yTGRKS0hXNjFqbGdVVlo5b2FPV2JEbk9BSHh0alp2bklnUkZiS09BeXVYaXJieXYxMjdFZnZlZ3ErZkdURWVQaStWSVJtM3dtcFUzYnlVdjJISkR2aStnUjFUcVh5dmRpNHUrL1ZOdnJMY1RvR29aMDZhMks0a0JNd3RGVzdwME4zSEJXNHo3M1RCMjRBR3VNOGM2cmlGZU1vaTdZaVo5SjZTcGZ2Wm1hS0lRT1QxRThxYlMxYlQ1eWVSTlFaenpOM293QnhpRXlHblJBWjBNVlE5NzdoM1VTV0x0L1dLZWlOdkZOSzFFZUJhYlVwek1Qcis4b1VuQ3Q1R3lOOWFXeXkzaURTMXRhZ3VoZjgyR2RybEl6WVJLUlNUeEJCMGJWbnJ4cmgzdDhWUm9Sd1NrTlJ2Vms0QVNRbzBGSGtBU3VHeWxLMVlucC9MTzZkR0tKRUJhaXZBQTg1WTA4YmxYV0twN3hKeDNHblROZnRTbzRaOEY0eFhxaHRZdUx2N1d5UTNhTnpNVEpaSEEwRkp0b1REY2dnalVpR2luZUpOblBLQkpyamU0ak1CTFlCemlZelgrOHF3VllBTHdKTEZDWVUxSy9JR09zcStTUkxXSThYbFJ4ZzhXeldpeEZWWXEzYnpzZ0ZmbS9aK2NtVjU2RFNRNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFFWUFBQUJHQ0FZQUFBQnhMdUtFQUFBQUNYQklXWE1BQUE3RUFBQU94QUdWS3c0YkFBQUVZMmxVV0hSWVRVdzZZMjl0TG1Ga2IySmxMbmh0Y0FBQUFBQUFQRDk0Y0dGamEyVjBJR0psWjJsdVBTZnZ1NzhuSUdsa1BTZFhOVTB3VFhCRFpXaHBTSHB5WlZONlRsUmplbXRqT1dRblB6NEtQSGc2ZUcxd2JXVjBZU0I0Yld4dWN6cDRQU2RoWkc5aVpUcHVjenB0WlhSaEx5YytDanh5WkdZNlVrUkdJSGh0Ykc1ek9uSmtaajBuYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TVRrNU9TOHdNaTh5TWkxeVpHWXRjM2x1ZEdGNExXNXpJeWMrQ2dvZ1BISmtaanBFWlhOamNtbHdkR2x2YmlCeVpHWTZZV0p2ZFhROUp5Y0tJQ0I0Yld4dWN6cEJkSFJ5YVdJOUoyaDBkSEE2THk5dWN5NWhkSFJ5YVdKMWRHbHZiaTVqYjIwdllXUnpMekV1TUM4blBnb2dJRHhCZEhSeWFXSTZRV1J6UGdvZ0lDQThjbVJtT2xObGNUNEtJQ0FnSUR4eVpHWTZiR2tnY21SbU9uQmhjbk5sVkhsd1pUMG5VbVZ6YjNWeVkyVW5QZ29nSUNBZ0lEeEJkSFJ5YVdJNlEzSmxZWFJsWkQ0eU1ESXlMVEE1TFRBeVBDOUJkSFJ5YVdJNlEzSmxZWFJsWkQ0S0lDQWdJQ0E4UVhSMGNtbGlPa1Y0ZEVsa1BqTmhOakF4WTJWbExUQTROVFV0TkRsak55MWlaVGc0TFdKbE16azVaRE0wWldSak1Ed3ZRWFIwY21saU9rVjRkRWxrUGdvZ0lDQWdJRHhCZEhSeWFXSTZSbUpKWkQ0MU1qVXlOalU1TVRReE56azFPREE4TDBGMGRISnBZanBHWWtsa1Bnb2dJQ0FnSUR4QmRIUnlhV0k2Vkc5MVkyaFVlWEJsUGpJOEwwRjBkSEpwWWpwVWIzVmphRlI1Y0dVK0NpQWdJQ0E4TDNKa1pqcHNhVDRLSUNBZ1BDOXlaR1k2VTJWeFBnb2dJRHd2UVhSMGNtbGlPa0ZrY3o0S0lEd3ZjbVJtT2tSbGMyTnlhWEIwYVc5dVBnb0tJRHh5WkdZNlJHVnpZM0pwY0hScGIyNGdjbVJtT21GaWIzVjBQU2NuQ2lBZ2VHMXNibk02WkdNOUoyaDBkSEE2THk5d2RYSnNMbTl5Wnk5a1l5OWxiR1Z0Wlc1MGN5OHhMakV2Sno0S0lDQThaR002ZEdsMGJHVStDaUFnSUR4eVpHWTZRV3gwUGdvZ0lDQWdQSEprWmpwc2FTQjRiV3c2YkdGdVp6MG5lQzFrWldaaGRXeDBKejV2Ym5URG9XSnBiRHd2Y21SbU9teHBQZ29nSUNBOEwzSmtaanBCYkhRK0NpQWdQQzlrWXpwMGFYUnNaVDRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvS0lEeHlaR1k2UkdWelkzSnBjSFJwYjI0Z2NtUm1PbUZpYjNWMFBTY25DaUFnZUcxc2JuTTZjR1JtUFNkb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzQmtaaTh4TGpNdkp6NEtJQ0E4Y0dSbU9rRjFkR2h2Y2o1VVluSWdWMlZpUEM5d1pHWTZRWFYwYUc5eVBnb2dQQzl5WkdZNlJHVnpZM0pwY0hScGIyNCtDZ29nUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SnljS0lDQjRiV3h1Y3pwNGJYQTlKMmgwZEhBNkx5OXVjeTVoWkc5aVpTNWpiMjB2ZUdGd0x6RXVNQzhuUGdvZ0lEeDRiWEE2UTNKbFlYUnZjbFJ2YjJ3K1EyRnVkbUU4TDNodGNEcERjbVZoZEc5eVZHOXZiRDRLSUR3dmNtUm1Pa1JsYzJOeWFYQjBhVzl1UGdvOEwzSmtaanBTUkVZK0Nqd3ZlRHA0YlhCdFpYUmhQZ284UDNod1lXTnJaWFFnWlc1a1BTZHlKejgrQzlCLzBnQUFHdTlKUkVGVWVKekZuSGU4RmRYVjk3OXI3NW5UYnFFWlFER2lrWWhpckZnd2RyR0RHdkpSYkU5aUVsOFQ4OWhTSDZKSkZEUWFTOVFZODBaVGZHS3FVZEdnb0JJc3NjU0dRU3lSb2dKcUVFSDZ2ZmZVbWIzWCs4Zk1IRUQ2QmZPdUQvZno0Wnd6WmEvZnJMM0tiKzA5d2xhUTNQRlhZNG9OSkl6dzFUd0dyQWpxSGQ0WVFBeU5Pb1V3NTNjSGhnQzdBWHNEZzRGV29JRFFBb0JTQm1wQUZ6QWJlQVdZQWN5TUd1YU5YRjVyS0hnRll6Q3FLaDZjQ2Vxb0QvR05ISTFIdnIvRk9zbVduSncvY1N5aENMbXlVQ2w1SkJCYmRiRXJtZ0FSOEk2QllqZ0NPQWc0REdRd3FBRVErY2l0ZGQwalVzMSt3SVBNQW4wYTVBVlYvbTRNNzZrcVZRZkZBS3V4ZFlGcHg1bE9mQlJUZitTS2J1dldQV0JHWFVOTEZPRmppQU5ES041VTMrLzBoZTNicU1ZTlc3UzVrU0NqUUVlQzlGbUZnUUxpQUsrcUpyMi9yREdTSmc0b29DTGlBUU5ZMFBTZkFMb1VtQVR5MTJya0poVnp4bFVmUEozaVNYZWJxcWkzVHNrWm9Scms0SytYYmJhS1puTlB5SjEwRlMyK0JxSVFJSG5qRElyWFJrVlFSaGR0N25sZ0FuQ09pUFFSVWFlcWthcDZWVkZWTmFvYWlJZ0ZwQ21rZjluSDVEZXJxa0Y2anFxS1Z5RVNVU2NpZlVET0FaMVFETzN6cUl6K1ludzhnRzlUWTBKanhLQzB1QnE1azY3YWJHQTIzV0pPdTRkQ2JRYXhRQnkzVWJKZFZsV2NNUjd2NVhpRUh3Tjdpd2dvRGxGVnhTQWlvb3FLSUFwSU42MVVVUlVRVFM2aXFJcmdRUVRVS2dLcTB4UXVDMVNteEtJWXNKV2c0QUpYSlZDb0ZZYkF2YU8zSGpDNVU4WmlmR3JiSUtGZ3ZJcnp5QUFEMTRPZWxmb01wNm9nR0ZRUVVWU1RSOTh0TU5ZanFxb2lRdUorRkJBdkNlbzJ2ZjhmMU11bEl2cStRVzBFWGdRVkJPK1V4a05qTjNxUGpRNjRPUElxTUQ1MWdtSnFVdlVsTGFMd2VlRFhJdlFHOGFxcUFrWVRDMUVWUWJiUXVXOU1GRFN6UWxVVTFLY1B3YWpxTXVBOGdmc3JOQ2lRTXdKZUVKd285UWMzN0pnMzZHTUtJNjlNZktVQ2lGWHdQMWgrR0FvM2dkd25RbTlWaWRJSGFCVkJGRTFONUdNRkJVaUFsMlJlSVlva0ZpT0tSaUxTRzdoUDRhYWY1dnVoaUZld3FtQWQ1RSsrY21QWFhyZVVSb3dGSzFrZ3NGNXhpclpZSTM5Rk9VYWthU1VXSkpuLy93RXdOaVRaRkVOVkZGeHF2QVo0MURsR0dVTlpraHpMQWVDVnlucW0xVG9WQ1VkZWlUVkpVRVN4S000ci9ZeVJ5UUo3STBScFpKSFZ6ZmxqMFhaelJSTllSQk1QSnlJeFNxam95MDQ1MGNJaUZheUFVd0huaFdqUzVXdGRadTJwZE1SWUF2RkpCRkdzZ2dQNkc4T3pndTZOYUtTcVlkT1ZaT2JjSFIxV0pXK2I5ZHNHUlpETTdhZGpEQkVpZ1gydDhDeENmeEtkckNpRUtCd3hkcTNMckFWTW9TM1JVY0Y0OWM1NWJVRjRXSVNkUVNKVndoUVQ3VzYweVpTMnhtQ05vS3A0bi93bDN3c20vYjY3c2lvR2lDYmdTSlRvd01QT2E0dDZkWUJSZ1dMNzJtcXNBVXorNUN2eENCNlJobzk5ZmNuN0VoaDVBR1Fma0VqUkZKVHVoMkJWeFloZ1JPaXExdWxjV2NGNXhkb0VqRWJrNkZ4WnB0YUlDYXhwbnRNZFNjR2hDUTRTZ2V3VEdIbGc0TkFDc1ZldktxSnF5STljTXdsc0tsYzg0UXFzUU5VWUNnYWo0Rlc1RmVGQ1FiTHBvK21OdWcrS01jVE9VYTlGSExMbmpweDkxRjRjOXBrZDJiWlBLODRwN3kxZXdkLysrVGEvbmZJeWI3MjdtRkpyQVNFWlRIZlRvVlY1ajRwSThvQlJiZ1V1RmxFVCs5Q0hXc01IZWFvUC9BQUFtNTBjREJtZWZDRkpXQWI1TDVCclJjU3BxbDBOL1c2RFlvMmhFY1cwRkhMY2RzbkovT3pySTlqMWs5dncvTXgvODlUcjcvRDZPNHRvTGVZNTU1aDl1T2lVWVRqZzc2L093eGhKeXZWdWdyUDYyRlhWQ09KRkdBYThKU0t2R1hGV1NiTFIrTTBuazNNQWlzZU93NGNXTWQ0b2VKU2RqZWhySWxKU1ZTOGlKc25JdDhSU2hDajJ0Qlp5UEhIOWw5bnJVLzI1NUxhSCtlMlVsK2tzMTJGbEdRS0x0QlhwMzd1Tnk4NDRqQXRQUHBBL1BmRXE1L3prZnZKaDBKMWJmM1FjcVVQR2k2aFJwZE9yN0EwNlY4QklMZktZa09xVUt4S0xDZlk4RW1rb0ppZGlRQVg5SlNKN2kycUVTTUFXT0ZwWVJURTBZc2Q5bDUvQklic1BaTmczZnNYOWo3OUNrQTl4cXB4NDJHZm8yYnVOQmNzNmFjU09pVSs5enJ3bEhWeCs5cEY0cnp3MjlVMEtoUnplZDM5S1pla0Zva1pVSWtTS2dtNW5qTGxYVEZMU1VSVGlXVTlpOHlkZGd3dkJvaGFQVitWRUVhNFdTVEpGV2FWWXQ0R3hSaWgzMVRqOXFEMzUzdWhET2UxSGQvUG9jelBwdlUwUHVtb05kdXpYazZkdk9KZTlQdFdmUHozeEd0WVlTcTBGcHI0eWp4NDlTMXg2K21HTWYyNG1DNVoya0F2dEdsRk5USkl0ckZhZk43OVRXR3Y2Q1lxb29LaEpjT0l6b00rQnpoRXJscHhSdS9NeEdDc05ncXBTL2JkMTFYL1VFT0hLcEZBbEtXYXo2MjJCZUs5Z0RaZWNNb3hwYnkxZy9OUC9vcTFYSzEyMUJ0djFhZU94YTc5RXRSSHgyU0U3Y044UHp5Q0tIYzRwdWJZaVAvN0wwOVFhTWVlZE1CUmZqekdwOGdCZDFUcGRYVFc2S2pXNnl1bGY5djlxdlFuS21sRk5tbFZMR2trQStYRjFTcGw0dmpxcEtKYUlBRnRGdEdTTDJ6dkg5c1V6RUIwcVNLeW9SVVMzTk0wWG9CNDVCdmJyeGJEZFBzbkZ0ejBFc1NPd2hzN09LZ2Z2dmhzNzllL0ZMbCs1aFQxMzZzZjRINTdCSi92MjROMUZLMmdwNUZpOHRKTkpMODVteEFHN01LWWxUK3g4RTVqRDl0eUpiZHBMeVhlSnpnbUZoYkt5WEdmcTdQbnJkTmpTUkV1TWdGTjBhUEhvMWxNUkhROXEwY2dGenJVeTAzL29ScHVBTitqNURhRVoxcklFYVV0d1FVU0luV05nM3g0QXpGbXdEQUtMODRvSkEyYTl0d1R2bFY5Y09KSUp6OC9rOUd2dTVzUGxaWEpCR2pCangrdnZMT0tVZzNhbG1BdXBOcUtFempPR0c3OTZIUHQ5ZWdDeDgxZ2plSVY2RkZQS2g5U2ptSDB2dUkzWjg1ZFF5QVY4TkJYU2hEZVNKQ2NEaFc4UGJuMTMvUFNMLzljVnJ2a1JnVkcxdTV0UE9JVVJnaDVJa2k2YmhGdmFlanhLNWh2cXNRTkpwbGN4SC9EYXZJV2NlL01FZm5EbTRmejhncEhjT1dVNjQ1K1pRVEVYWk1oU2E4U0VnY1hhaElNeFZvaWNZOVM0dStqZnE3V1o0MVJxRVRlY2R5d2pEaGdNUUNrZjR0ZVRIS2FsVEVLbWdRY2ROcXR6eHhHbGE2NTh5T0NzSVNNVjBMTVN3MCtZbnEyRmlKSWtkUjhzNjBKRTJLNTNHemlQdFlaeXBjN0lBd2Z6M1ZNUFp0QTVOL0gxV3lmeXBXUDNZYWYrdmFoRmNYTU1PL2JyeVpLVlpXcXBqMUZOTEdiUjhpNm12YjJBMStjdFl0cjBPWng2NkJCR0hEQ1loNmUrU2VROEc4dVhWeEZkK0tUSTBqT1RIMFNOcXZlSzd3ZWNrRlRzR0pHdGg0MHE1QUxMdklYTCtXQlpKOGNOSFFRKzhRbGlEQXVYZHpGa1lGLytmTmxvdmpCOEw1YXNMTE8wbzBKb0xiSDNoQzE1anRsM1o1NmI4Vy9LbGZvYVpVSXVzTFFYODBUMWlPK2NjelJYZm5FNC8vT2J2M0g5dmMvUVdzZ2xibVFENktRa2M2b3pBTWM3OVovd3FEZEdCRUZHQUwwQTE2UlZ0NktFZ2FIU1ZlV095Uzl6OWxGN01XaGdQMWFXYTdTM0ZIanB6ZmM1NzZjUGNPYVJlN0x2b08zNDNMaTc2S2pVS2VWRHloMFZSbjEyQ0lPMjY4T2RqMDZITklpc0hxNVhkbFE0KzVoOXVPRzg0N2h0MGxSdStOM2o5R29yYm5KOXBka0VVUnpReDRxTU5BYU1NUUp3Vk9xbzA4UjU2L21XckhJT2l6bis3OFFYV2RaWjRhNUxUOE5hUTJlbFJvK1dQTCtaTkpXYjduK1dpMy94RU05T24wT1BsanpMVm5TeHc0QnR1UFBiby9qN3EvT1k4TnhNV2xvS3VMUUNEd05MeDhveUp4MDhoRCtPT1pYeHo3ekJCVCtmQklVY0tNVE9Kd1BZaUNhcHNobE5BVERjaW1DaU9Nb0J3OUxqek5hMkZ4SEJxNUlQQXhZdTdXVDAxZmV3M3k0RGVQb241N0pEMzU2c1hOWUZ4dkR0WHp6TXJ4OTZDVUxMOHVWZEhMTFhUa3oveFgvVFZXdnc1UnYvaWpVR1Vtc0pBMHRIUjRYRGh3N2l3WEZuODdkL3ZzWG9hKzZtcFpBREVhdzFoSUVsN1Zoc1ZCTENyOGswREd0VU5XZkR3Y1AzRUdGTVppV1MrZXV0RFk1WGl2bVFXZTkreVBPejVuUEJ5UWN3WnZTaDlQOUVEL0s1Z0ZJcHo4QitQVGxxbjUwWjk2WGhYSGZ1Y2N6NVlCbkhmLy8zekZ1NFBJa3dYZ210cGFOY1k4OUIyL0xDVDcvS3RMY1dNT0tIZndTVUlQVkwrVENndlNYUGZmOTRnM3JrbWc1ay9lUFRkSmdpUUUreC9GV0tJOGQ5QmVHT3RJbzJXM3NhU1pwMFpXRXpzSWJPY3AzK2ZaSkM4WnhqOXFHOWxFOXJvQVRFQlVzN3VXWEM4OXo2d0F2VUkwZXBFT0tjVDg2dDFCbTBYUjlldWUyL1diU2l6UDRYM2M3S2NvMWlDcHcxUXV3OGtmUGtBb3N4eVVQWldHV2U1bXhlVlMzS1Y2UjQwcFZYZzE0bUlwRXFnV3kxYUpSVTFMSHplSjlNSmVkOUU1eGFJeVpxUkxTMUZ0bHpwLzcwN2RtQ1YyWGV3dVc4T1g4cHRVcWRRa3Vld0JpY1QwQ3AxQ1A2OTJybHhWdStSaEFZaGw1NE94OHM3YVNsRU9LODRweW4zb2hvMHZKcDlsYk1oODNTWUwzZ0pNakVvaG9xWEIwQXU2VmhXclpDQmRBRXhScER0UkhScTdWSWF5SEhPNHVXMDFaS1V2clllWEtoSlI4R05HTEhzMis4Qnlsb0pqRGt3b0MyOW1LaXJQZFlrd0RaVXNneDVacHoyS2E5eE5DTGJ1UDlEMWZTMXBKdkh0ZXJyY2ordXd4S3hnQVlFU3IxaUttejV4UEZic01XSXlKbzZrUlVoZ1NnTzZid0dsWFJMYldZREpSYW1wcFBISGMydXcvc3l5SGYrZzJ2emZtQTlyWWlVZXhJVW96azJOYWliVDRQMWFSNzZWTHp0OGJRaUIzV0dDYi82SXNNR2RpWC9TNjhqVGZtTG1wZUs3U1dTbWVGcjU5eEdKZWZmZVFhNDRtZFo5Z2x2MlQ2bklVVTgydVhCcGtrRlNVbXhXSkhRNUsvSkQ5dUpWQWFzYU1sSC9MNHRWOW12MTBHc0tKYzQ0VmJ2c29lTzI5TFIyZVZNTEJyNUJsK05USTgrenFiaXM0blUvRXZsNTNHUVVNK3lkSGZ1NU5wczk5dmd0SzBBcS8wYWkxU3FVV2NmTVdmT1BFSHYrZk1hKytoVW8vSWhjRjZTNE5WeUt4aFRyME1TTSswLzd0VlFJbWN3M25QL1plZnlmNkRCekQ4ZTNjeTlNTGJXZHhSWWVyUHZzWWVPL2VubzZ0R2FPMTZrN0NNTUVlaFdxbHp4N2MreHlrSDdjWVpQNzZIeDE5NmsvYlc0bnFuUmtlbHhzUVhadkhJc3pONTZNVTNpV0szR1ZwazhWM2FER2hMYWo3ZEFxU3BpRWtLdXlqMjNQdjkwemxxNzA5eHpLVy80K25wYzFqV1dlR3ozL2dWaTFaMDhlSXRYMlB3RHR2UVVWazNPRTBIS1ZBdTEvanBCU1A1NHRGN2MrN05FN2o3MFZkbzc5RkNuUHFqZFltMWh2WlNnVnhMZ2ZaU1lhT2graU9ha0dMUmFvRE5nWFR0UzZXZ2VKKzBLKy85d2VtTU9uZ0laMTg3bnNlbXpxYTlyVVFwSDdKZ2FTZWYvZWF2V2Q1VjVZbnJ2c3gyMjdUVFdVMXFud3ljREpTTThmdWZNdy9ua2xFSE1lYU9LZnp2UXkvUjFpUGhYallVWFZUQnFVK240UG9CM0pnWWtNb3FwTG9IaWlwVXF3M3UvUFlvUG4vd0VNNjZkangvZm13NlBYcTI0RlR4cXZSb0tiQmdhU2RIamZrdHZWcUxQSGZ6ZVd6WHA0MnVhcU1Kam9na3VjcUtNdWVmTW96cnpqMldHKzk3bHV2dmVvcTJ0bElXZlRGR21wYXdKVTI1dFNXYk9kSmxRRHRXQmYzTkJDV2xBQ3FWT2orN2NDUm5IN1VYWDdqK1B1NmE4aktGVXA2T2NwMUtyVUdsRnJHaVhDTVhXR2EvdDVnREwva1YvWHEyOE94TjU3RmRuM2JLdFlqQUpsM0pqcFZsempoMlgyNjc2Q1IrODhnMHZuUDdJeFJMZWNxMUJsM3B0U3ExaUhLdDBXVHp0aDQwU1VVSjJoa0F5NEVkbTlwdVF1YmJkSTVBcFZybmxndEdjdEVwdy9qT3J5Znp4Nys5VEV0YmtXMTd0L0dKbmkxcFVwYzBYbXFObUhjWHJlRDFPUjl3d01XLzVLV2ZuYy9UTjU3TC9oZmRUbGUxUWFNUk1Yei9YYmpyMHRPWThOeE16di9aZytRTEljVmN5TzREKzJLTlNVRkk3ajkvU1FlTFY1U2JWTVFXUXJJNnZzc0RrSGRBOXdIeEtnUWJRNlZKTUFPVnJpclhuMzhpRjM5dUdOLzl6ZCs0OGU1bmFHa3JJQWgzWFhvYSsrMHlnSzVhQTVOT2tTaDJIUFNOWDFOdFJMdytkeEg3WDN3NzAzNytkUjY5NWh3T3ZPUlhITGpiRGp4MjdaZDRic1o3akw3NmJ2SzVnRXExemhtSDc4R2QzL2s4NVZvRGtTU0V0eFh6L1BMaGYzTCt6Uk1vNXNNdEJrWkVSVlZjc3FwVTNnbEFaNkNNUWxEWkJJdEpXaFJRclVlTU9lc0l2bnZhSVl5NVl3by91ZXNwMnRwTFJNNWpEUXpzMjVQZlAvWUtWLzNwU1lyNWtDUDMyb2xidm40Q3VkRFNpQnc5MjRxOC90WUhEQjl6SjAvZmVDNy91T24vOE9rQmZYaDkzaUtPKy83dkVSRnlnYVVTZTNxMEZBQTQvdnQvb0Z4cjRMem5uc3RHMDZlOXVNV0FaSkltdDVuTG1obWd6RWtMQWJNcExqaHJ4aCsxOTZlNDl0eGp1Zm4rNTdqK3owL1IybFpLa2loTnZaWEFncVdkdkQxN1BoUnliTDlORzk0M2lTRWk1Mmp2VWVLWlYrY3lmTXlkUEg3ZGw1clZkS1VXcGZWUEVsVzhKaW4vcTNNL29MTmNBNitzS05jeWpiWVdOSUJrOU9DY1FHRzZnQ2ZwWTIrMERQV3E1TUtBdHhZczQ5U3Ivc0xFRjJkVGJNa25xZnhIanMwRkJnbzViQ0Vrbnd2V1dzc2J4WTYydGlKUFRIK2JmUys0alJYbEtndVdkZEphekJHbjFYUW1raGFEVVp5RVlyc1YvTW9xU0pyb1dwSkY1eThiMzJBR01DODdSamZpZTFXVndDWkU5SDFQLzR2QW1pWVp0ZllOZ1RSY3IrdkJKcTBWVDJ1cHdLdHpGekovY1FldGhSeHV0ZDRScklhblQ2NlZXZWJXNGtkRXBUbGNZSjdYZUliSkZhVUJ2SkF0QzAxVzA2NWJzcnpGR3FHUUMralpYaUpJRi85MGw4WkpnSVcyVW81U1BrUWs0WEszYm42eVlVbWFybVRaNFBOaEVEYUNsRU45WEpXekpWMEJtU1pTYTJpYWhlaGFJOGJWb2pXdkxKQXI1Z2szeTd3RlZVOW5WdzNjUjBBSUxhVkNialBWNjU0a05EZlptajJBeDcwcVFmcmhZVUdXQWIwMWJkSjlWSXhKUU5sangzNGN2dWVPeEM1bDNJREllU2E5T0p2Rks4cWs1UHFHSmMwbnJUR2NkZlErYk5OZVNxZGIwaEo1L1owUGVlcTFlUVJiSVF4dmRDalNEQllXWmJtcVBrS1N0eGdETEFLZHJNcFpJampWZENIcmFsWmpqY0ZWNnB4eHhCNk1HWDBvOVNodUZvR1pJN3g5d2d1MGJFTHJRaEJpNytuZFZ1SjMzL2s4Z1RWTmVpRU1MSy9PWGNoQjMvaFZNNEo5WEtKWjcwVFVxUklBajRpWVJZQUpvT2w1L3BKMkl5V2hrTlpCem5nbEgxcGVuZnNCaDM3N0RnSnJhQ3ZsbWZ2YmI2YlRTRGU5VGsvcm5ub1U4NFhySnpCcDZwdFVhZzF1UHY5RVJoeXdTOExOMkkxZlprc2tXenVkaEdsRjRjOXBnU0hHWTl6bzNXYXlRMm5GUkpBWFFDM0oybnhaVng4dlkvdzdLM1ZXbHV0MFZ1cmRyMWQwRmYzWVZhN2h1MnBFS2F2L2NidGVUZFlEQzRoUHNsMWVHRVRsb1Z1bGpoZHhKcUNMZTJidVp2OWQ2UWx3UytKNDA3UFcxeEJ2OW00TWdiVmJiTzZCTlJocklXWDEveE9TcnEzU3BvK0JHK2RRNGlMTjJTQllnVkZLcU9LcUt5T3FzNWYvQlppbWlBWDEyVHJRZFYxWXN3dzMvWGxMMU1uNDM0L2RUSnIzMHhRU3ZDWkozYlRxUzUzajQ2VUszamlOMnpDT2tEZ01LUFlNYlhIWG5nQ1hwaTJEYkJNSjY4cTdtNUZyazRMUXhnL2FwTDBxc3NtMzNORDFORjFjcEZsSEgrWFM0djV0QkgyTTFTREVhUjVUbjNnWmdYTm83SnlJTVNMbVVlQmVCU01RYTdxdlkyUHljVDdzOVYyN08vZlVWUXQvNHFRcndMMFk4eWpHR2x6azBKajZ4TXVTZnEwMFBCSjV2RXZvUUs5Y2ltb0ZrUkR3a29GTXN1QW5paDJ1RWROb3hOUWFNWEhzbXlFNnE1aWNWeHFSZzBhTWI4UTBvbmhWbzMwMWliMm5IaVhIMElocHhLN1p1RjhkZ1RqMjFOSjd4cEdqRWJ2bUV2dEVrcklrY281YXd4RkhNYldHSTNKK2RRZ3pLL0dJaEtoMmVjLzMxSHZVT2NRSzBraVkzZ0NnT25rc3haRmpNYVpaVE01UjVYelEzMmY3QmtqVE1tdU03RDk0ZTU2LzlYd0NtempMWEdnSnJVMkhsMlJHMWdqZi9QeG5PWHpQblFpc29YK3YxcVJsS3F2bWd3Z0pyM0xKS1N6NHI2T0luV08vVHc5Zy9wS1ZTWm1SYXBQZDQ4a2J6c1Y3SmZhZVlidHV6LzNQemtnWHVTVG9oZFl5b0U4N3o5MThIaUpRQ0FQNjlteEpoNTdzdWZQcU5WdjJEL0pWWTVnTFdCVjFpcVU2K1FwZ3RaWGg0VzVISnkzVldOVVlNY0NyUUYrUUEwVWtCbXdEVXFKSVpkR0tNb3M3eWl4YTNzWHpNLy9OQTgvUFl1SEtDa0ZnY0Y2cDFDT1dyS3l3dEtQQzRvNHljeGN1NTdHWDV6RDVuMjhUdVNRa093WG5QVXM2S2l4ZVVXWnBSNVYvdmJ1SThjL01ZUHJiSHlRWmxRaGR0UWJlSzhzN3EzeTRzc3ppRldWZW03ZVFlNTkrZzlrTGxoSmFTNTNrV3BGemZMaWl6SktPQ2d1WGRmTGthKzh3WmRyYldtMUUyVmJVV0ZVRDRGWWozSUNJaVdMdmJXaWg0WWpmZmlwN2Jxc2tQMkpjc281UlZWd3NHazFlU2ZHazlzY1FocU5FeGtoWXJrVkswaCtXSmpzTjJFSklZYlhHVnJWYVQycWd6RytuOVVPK2xFK1dkSkJRR0xWeURWYUxibWtWU2JHWVN6OG1HeS9pV2lPZERGazJMQkJhV2dvNWZGckhWZW9SMm9qWFBFNUVjOFU4Z1RXaXFwRUlvU3BUcmp2aWs4ZGQvT2k3NUFPVFZFb290VWxYckRZeFB5TEZrOGRsVTlLb1YrOUVXd0l4ejRqSVBxb2FXV1BDMWZLdjV2bFpOekdyc3UxNjhwR3M5Wm9wdmE3akZKcitvN2xiWlYzSHBSYVhOZXl0TVI5dEcycDZ6OVZCbVliWFF6MVVqWkZraXdCUW0zakZHaWV1dFVDLzJxRVVXd1VFTDBhc1JjckFpYXI2ak1BZ3J4cWhaTlhkT2trL1ZXVWRmcmI1V3diZUpoK1hLTGZ1QTFlVGpLZFplMndhaVVpb3FtOTUxUlBFU0ZVU04rSUFhcDFyWDN0dG51REpzY1NrY1NqZENZYXkwS2tlb3ZCeUNrcVVKRW5wbG8wMEZHV0tiSWliV1lPQTJvVGpOc2J6ckhXY2tzR1RKYWNSS3FHcVRuUEtJU0t5V05KOWtVSzYvKy9Kc1d0ZGQ1MEVTalRwY294THlraVR2SExBR21TUmN4eW02S1BOdlV1b2s3VGFYRitHL0orVXpGNGtlU1dBU3lOcXFLS1B4dWhoQmo0VXNBZ3VYYzIwenYyUXNJSHR4WldIeHVJbG95VEZJVml4VXY1eHZ0ZXh3TTNwNml1cnljWlJtdHZQMTZaK1AzN1JyQ1pNZGpjckVvbGdOVm5jZlBQRks0WWVhNkNDcE5NbmVhVHIzVUVMbTVCZDUwOGVoMDEyYTZCZ2FqUjhpUnphM0pBdXZVbGVZdkgvYVVPNlFtcStORGVrcTFGbDFZWjBxVkxRb2hFMDNaQXUxQjljdDZWa3NsSEd3ODErRXZuMDRZaEpHazhXS3hhc0lqTlU1VStJZmdKbGJ4RXhpRFMzOUNjUnRibThhNnNDbE8xeGtGV2RDUzhpS3NsTE1nVDRneUtuQ2t3MW9sWTBnQ3hDR1doc1pKYytiTTRUWGYybEY3WklLYTVacjdoQUJJY2VMWENkQ3Z1bSthcExwNVhKckVaVFJick5tbWRXMkN3OTBJUTNRZ0NidXJocHdQY0NlQ3lDNUtVWHJ0VUZRZWZIODlLTDFTVjMwbFdFRW9FS0hpTVdFWWY2NmovZnBMamY0TkhBdDBBUHpDYVNna1B4Q1FHMnFqNU9XNkxyWGRxVzFIckpNYXNpcnlyZ0VER1N2azhteGVsRmtKdSsrT0NMOS96dTVBTUl3RGhRSTE0UkpmSWhqWWsvM0N3OXUvZjBSbDFETVc0UTRZbU5wZWl4amNVVmwrdGJZdHU4c0tDbUl3Vk9BNDRUNk5mTVZCTnhvRDUxak5MOG9kazhhbzVNVXlMSnB4M0NWZE0rbVVJZkFwTVY3aDNRSTV5MG9DT2kra3lSNGlGVld6VzRJRlpDZ1dyWXZSZnJiTkhjTDQ0Y2h3cG9iRERHZzhWZXNkMVNOKzc5UGdpQzk3NjNpQnlMY0NUSXdhQ0RnU0JiL2JDR2ZEU1hUbzBrc1FnRmlFbmVXZlVzeXQ5VmRZcXhza3dWL2pDOEoxOTRZb1hWeURqWENERUZoNUdZNnFTTis1TDF5Vlp4aXJrVHJpYk0xeWh0dTRETytRTVIxQXFpM250djBtWmNQVlliV25ZRmhvTHNDcnJobDNjSm5TaXpnTmVBV2NDMHlMbForVEJ3bWk1a05GWk13aGZoMm5kZFNIbE9YNkpLanNia0xYOTUxLzhEbG5lcHhPd3VCdGtBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsRFFvOGMzWm5JSGRwWkhSb1BTSXlORGtpSUdobGFXZG9kRDBpTVRJd0lpQjJhV1YzUW05NFBTSXdJREFnTWpRNUlERXlNQ0lnWm1sc2JEMGlibTl1WlNJZ2VHMXNibk05SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpJd01EQXZjM1puSWo0TkNqeG5JRzl3WVdOcGRIazlJakF1TlNJK0RRbzhjR0YwYUNCa1BTSk5NVGMzTGpBMk5DQXlPUzQ0T1RJeFF6RTROQzQxTURRZ01qVXVNekkwT0NBeE9USXVPRGc0SURJeUxqUTNOVEVnTWpBeExqSTVNeUF5TVM0Mk5qazVRekl3T0M0ME5UY2dNakF1T1RZNE15QXlNVFV1T1RBeElESXhMamMwTlRjZ01qSXlMams1SURJekxqZzVNVGRNTWpJekxqSXpOQ0F5TVM0d05EUTFRekl4TlM0NE5qUWdNVGd1T1RFMk5DQXlNRGd1TXpZeElERTRMakUzTlRrZ01qQXhMakF5T0NBeE9DNDROemN4UXpFNU1pNHlJREU1TGpjeklERTRNeTQwTVRNZ01qSXVOekV6TVNBeE56VXVOakExSURJM0xqVXdNRGRETVRZM0xqYzVOaUF6TWk0eU9EZ3pJREUyTVM0eE55QXpPQzQzT0RZeElERTFOaTQwTVRZZ05EWXVNamd6TmtNeE5UVXVNRGMwSURRNExqTTVNeklnTVRVekxqZzVOU0ExTUM0MU56STNJREUxTWk0NE5qUWdOVEl1T0RBMk9VTXhOREF1TmpneElEVTJMalF5TWpRZ01USTVMamcwSURZekxqRXpNamtnTVRFNUxqa2dOamt1T1RRNE5VTXhNVGN1TkRjNUlEY3hMall3TVRrZ01URTFMakF6T0NBM015NHpNak0xSURFeE1pNDJPRFlnTnpRdU9UZ3lPVU14TURRdU1EY2dPREV1TURNd05TQTVOUzR4TnpFM0lEZzNMakkzTnpjZ09EVXVOakV6T0NBNU1TNDVNVFUxUXpjMExqZ3pNRElnT1RjdU1UUTNPU0EyTWk0M05Ea3pJREV3TUM0ek9DQTFNQzQyTnpNNElERXdNUzR5TmpORE16Z3VNall3TXlBeE1ESXVNVGN6SURJMkxqSXhPREVnTVRBd0xqY3dPQ0F4TkM0NE9EQXlJRGsyTGpnNU5qbERNVEF1TWpNeE55QTVOUzR6TWpNMklEVXVOekUwT1RVZ09UTXVNelUxT1NBeExqUXpOek0ySURreExqQTBORGxNTVM0eE56a3lPQ0E1TkM0d05UZzNRelV1TXpNeE1URWdPVFl1TWpBMUlEa3VOVGM1TnpFZ09UZ3VNRE0zT1NBeE15NDVPVGd4SURrNUxqVXlNVFZETWpBdU9UQXpOeUF4TURFdU9EUTRJREk0TGpBM056VWdNVEF6TGpNeU9TQXpOUzQwTURneklERXdNeTQ1TlRkRE5EQXVORGc1T0NBeE1EUXVNemt5SURRMUxqWTJNallnTVRBMExqUXhOaUExTUM0NE9ETTRJREV3TkM0d016ZEROak11TWprM01pQXhNRE11TVRJNElEYzFMamN6TlRrZ09Ua3VOems1TnlBNE5pNDROREExSURrMExqUXhNamxET1RZdU5UZzROQ0E0T1M0Mk56azFJREV3TlM0MU9TQTRNeTR6TnpFeElERXhOQzR5T0RFZ056Y3VNalpETVRFMkxqWXpNeUEzTlM0Mk1EQTNJREV4T1M0d056TWdOek11T0RreU9TQXhNakV1TkRjNUlEY3lMakkxTWpKRE1UTXdMall6TVNBMk5TNDVPRFEzSURFME1DNDFNVFVnTlRrdU9ESXhPU0F4TlRFdU5EVTJJRFUyTGpFNE16bERNVFE0TGpFMU1pQTJOQzQ0T0RJNElERTBOeTR5TnlBM05DNHdOREVnTVRRNUxqQTJPQ0E0TWk0ME16VTFRekUxTUM0ek9UVWdPRGd1TmpZeU9TQXhOVE11TXpBMklEazBMalV5TWpRZ01UVTNMalEzTnlBNU9TNHpPRFExUXpFMk1TNDRJREV3TkM0ME1qZ2dNVFkzTGpFNU9DQXhNRGd1TURNNElERTNNeTR4TURFZ01UQTVMamd4TmtNeE56a3VNVFFnTVRFeExqWTBPU0F4T0RVdU9EWXhJREV4TVM0ek9Ua2dNVGt5TGpBek9DQXhNRGt1TVRVNFF6RTVPQzR6TnpZZ01UQTJMamcwTmlBeU1ETXVOVEE1SURFd01pNDFPVGtnTWpBMkxqVXhOaUE1Tnk0eU1EUXpRekl3T1M0NE16Z2dPVEV1TWpRNE9TQXlNVEF1TlRreElEZ3pMamt5TmpRZ01qQTRMall6TVNBM05pNDFPVFUwUXpJd05pNDNOemNnTmprdU5qWTFNeUF5TURJdU5UYzBJRFl6TGpJeE9UVWdNVGszTGpBNE15QTFPQzQ1TURFNVF6RTVNUzQzTmpNZ05UUXVOekkwT0NBeE9EVXVNamsxSURVeUxqQXhOalVnTVRjM0xqZzVPQ0ExTUM0NE5qVXpRekUzTVM0eU1EUWdORGt1T0RFMk5TQXhOak11T1RRMklEVXdMakV6TWpNZ01UVTJMamt4TVNBMU1TNDNOamd6UXpFMU5pNDNOVFFnTlRFdU9ERXdPQ0F4TlRZdU5UazRJRFV4TGpnek9UUWdNVFUyTGpRMElEVXhMamc0TVRsRE1UVTNMakUwTmlBMU1DNDFNREV6SURFMU55NDVNek1nTkRrdU1UUXhOeUF4TlRndU56YzBJRFEzTGpneE5EZERNVFl6TGpNd05DQTBNQzQyTkRjM0lERTJPUzQyTWpRZ016UXVORFU1TlNBeE56Y3VNRFkwSURJNUxqZzVNakZhVFRFMU55NDFNek1nTlRRdU5EWTFPRU14TmpRdU1qSTJJRFV5TGpreE1qUWdNVGN4TGpFeE9DQTFNaTQyTWpFeUlERTNOeTQwTmpZZ05UTXVOakV5TlVNeE9EUXVNemsxSURVMExqWTVOVFVnTVRrd0xqUXhOeUExTnk0eU1URTRJREU1TlM0ek5UY2dOakV1TURrd05VTXlNREF1TXpjMklEWTFMakF6TWlBeU1EUXVNak0wSURjd0xqazBORFVnTWpBMUxqa3lOeUEzTnk0ek1ERXpRekl3Tnk0Mk9UVWdPRE11T1RNd015QXlNRGN1TURNeklEa3dMalV4T1RFZ01qQTBMakEzTkNBNU5TNDRNek01UXpFNU9DNDJNaUF4TURVdU5qTTJJREU0TlM0ek5UWWdNVEV3TGpZZ01UY3pMamc1SURFd055NHhOREpETVRZNExqVXdOQ0F4TURVdU5URTVJREUyTXk0MU5UZ2dNVEF5TGpJZ01UVTVMalUzTnlBNU55NDFOak0zUXpFMU5TNDNNVElnT1RNdU1EUTVOaUF4TlRNdU1ERTFJRGczTGpZeU9ESWdNVFV4TGpjM05TQTRNUzQ0TlRVNFF6RTBPUzQ1TkRVZ056TXVNelEyTnlBeE5URXVNRGcxSURZekxqazBORGtnTVRVMExqZzNOQ0ExTlM0eE5EYzFRekUxTlM0M05qTWdOVFF1T0RnM09DQXhOVFl1TmpRNUlEVTBMalkyT1RrZ01UVTNMalV6TXlBMU5DNDBOalU0V2lJZ1ptbHNiRDBpZDJocGRHVWlMejROQ2p4d1lYUm9JR1E5SWsweU5Ea2dNekF1TXpBM1RESXlNaTQwTkRFZ05pNHdOakUxVERJeU1pNHdOVFFnTVRZdU56TTJNMHd5TkRBdU5qUTRJREkyTGpnM00wd3lNakV1T1RFeUlESXdMalkzTnpSTU1qSXhMamt4TVNBeU1DNDJPRGMyVERJeU1TNDVNVEVnTWpBdU5qYzFORXd5TVRNdU56RXlJREl6TGpNM09Vd3lNakV1TmprMUlESTJMalkyTVRWTU1qSXhMalF5TVNBek5DNHlORFE1VERJME9TQXpNQzR6TURkYUlpQm1hV3hzUFNKM2FHbDBaU0l2UGcwS1BDOW5QZzBLUEM5emRtYytEUW89XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvc3VwcG9ydC10ZWFtLTZiMjFlMGM5ZmUwMTcwMDkxMWRlNGRjYjlmYmY3ZWY2LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy9zdXBwb3J0LTkyY2VkMWU0YjUyY2EwZDE4MWQzMWIwZGU5YWIwNzk3LnBuZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCIvX25leHQvc3RhdGljL2ltYWdlcy90ZXN0aW1vbmlhbC02OWQyZTYwZTk2Y2VjZDdmZDM0YmFlYjE2MjM3NDUzMC5wbmdcIjsiLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBIZWFkaW5nIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBCc1BsdXNDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9icyc7XHJcbmltcG9ydCB7IEJhc2VBY2NvcmRpb24gfSBmcm9tICcuL2Jhc2UtYWNjb3JkaW9uJztcclxuaW1wb3J0IHtcclxuICBBY2NvcmRpb25CdXR0b24sXHJcbiAgQWNjb3JkaW9uSXRlbSxcclxuICBBY2NvcmRpb25Db250ZW50cyxcclxuICBzaW5nbGUsXHJcbiAgcHJldmVudENsb3NlLFxyXG4gIGNvbWJpbmVSZWR1Y2VycyxcclxufSBmcm9tICcuL3NoYXJlZCc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2NvcmRpb24oeyBpdGVtcywgLi4ucHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QmFzZUFjY29yZGlvblxyXG4gICAgICBzdGF0ZVJlZHVjZXI9e2NvbWJpbmVSZWR1Y2VycyhzaW5nbGUsIHByZXZlbnRDbG9zZSl9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAgeyh7IG9wZW5JbmRleGVzLCBoYW5kbGVJdGVtQ2xpY2sgfSkgPT4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICB7aXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICA8QWNjb3JkaW9uSXRlbVxyXG4gICAgICAgICAgICAgIGtleT17aXRlbS50aXRsZX1cclxuICAgICAgICAgICAgICBzeD17c3R5bGVzLmFjY29yZGlvbn1cclxuICAgICAgICAgICAgICBpc09wZW49e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KX1cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e29wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KSA/ICdpcy1vcGVuJyA6ICdpcy1jbG9zZWQnfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEFjY29yZGlvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVJdGVtQ2xpY2soaW5kZXgpfT5cclxuICAgICAgICAgICAgICAgIDxIZWFkaW5nIGFzPVwiaDRcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICAgICAgICAgICAge2l0ZW0udGl0bGV9XHJcbiAgICAgICAgICAgICAgICA8L0hlYWRpbmc+XHJcbiAgICAgICAgICAgICAgICB7IW9wZW5JbmRleGVzLmluY2x1ZGVzKGluZGV4KSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxCc1BsdXNDaXJjbGVcclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwiMjhweFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9e3JnYmEoJyMwRjIxMzcnLCAwLjMpfVxyXG4gICAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuYXJyb3d9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIDwvQWNjb3JkaW9uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxBY2NvcmRpb25Db250ZW50c1xyXG4gICAgICAgICAgICAgICAgaXNPcGVuPXtvcGVuSW5kZXhlcy5pbmNsdWRlcyhpbmRleCl9XHJcbiAgICAgICAgICAgICAgICBzeD17c3R5bGVzLmNvbnRlbnR9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uY29udGVudHN9XHJcbiAgICAgICAgICAgICAgPC9BY2NvcmRpb25Db250ZW50cz5cclxuICAgICAgICAgICAgPC9BY2NvcmRpb25JdGVtPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICA8L0Jhc2VBY2NvcmRpb24+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGFjY29yZGlvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y2RjhGQicsXHJcbiAgICBib3JkZXJSYWRpdXM6IDEwLFxyXG4gICAgcDogWycxNXB4JywgJzIwcHggMzBweCcsICczMHB4IDQ1cHgnLCAnMjBweCAyNXB4JywgJzIwcHggMzVweCddLFxyXG4gICAgJyYuaXMtb3Blbic6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2ZmZicsXHJcbiAgICAgIGJveFNoYWRvdzogJzBweCA5cHggMzBweCByZ2JhKDY5LCA4OCwgMTU3LCAwLjA4KScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgbGV0dGVyU3BhY2luZzogWzAsIG51bGwsIG51bGwsIG51bGwsICdoZWFkaW5nJ10sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS41LCAxLjhdLFxyXG4gIH0sXHJcbiAgYXJyb3c6IHtcclxuICAgIHdpZHRoOiBbMjAsIG51bGwsIG51bGwsIDI1XSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmNsYXNzIEJhc2VBY2NvcmRpb24gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XHJcbiAgICBzdGF0ZVJlZHVjZXI6IChzdGF0ZSwgY2hhbmdlcykgPT4gY2hhbmdlcyxcclxuICAgIG9uU3RhdGVDaGFuZ2U6ICgpID0+IHt9LFxyXG4gIH07XHJcbiAgc3RhdGUgPSB7IG9wZW5JbmRleGVzOiBbMF0gfTtcclxuICBnZXRTdGF0ZShzdGF0ZSA9IHRoaXMuc3RhdGUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG9wZW5JbmRleGVzOlxyXG4gICAgICAgIHRoaXMucHJvcHMub3BlbkluZGV4ZXMgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgPyBzdGF0ZS5vcGVuSW5kZXhlc1xyXG4gICAgICAgICAgOiB0aGlzLnByb3BzLm9wZW5JbmRleGVzLFxyXG4gICAgfTtcclxuICB9XHJcbiAgaW50ZXJuYWxTZXRTdGF0ZShjaGFuZ2VzLCBjYWxsYmFjayA9ICgpID0+IHt9KSB7XHJcbiAgICBsZXQgYWxsQ2hhbmdlcztcclxuICAgIHRoaXMuc2V0U3RhdGUoXHJcbiAgICAgIChzdGF0ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGFjdHVhbFN0YXRlID0gdGhpcy5nZXRTdGF0ZShzdGF0ZSk7XHJcbiAgICAgICAgY29uc3QgY2hhbmdlc09iamVjdCA9XHJcbiAgICAgICAgICB0eXBlb2YgY2hhbmdlcyA9PT0gJ2Z1bmN0aW9uJyA/IGNoYW5nZXMoYWN0dWFsU3RhdGUpIDogY2hhbmdlcztcclxuICAgICAgICBhbGxDaGFuZ2VzID0gdGhpcy5wcm9wcy5zdGF0ZVJlZHVjZXIoYWN0dWFsU3RhdGUsIGNoYW5nZXNPYmplY3QpO1xyXG4gICAgICAgIHJldHVybiBhbGxDaGFuZ2VzO1xyXG4gICAgICB9LFxyXG4gICAgICAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblN0YXRlQ2hhbmdlKGFsbENoYW5nZXMpO1xyXG4gICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgIH1cclxuICAgICk7XHJcbiAgfVxyXG4gIGhhbmRsZUl0ZW1DbGljayA9IChpbmRleCkgPT4ge1xyXG4gICAgdGhpcy5pbnRlcm5hbFNldFN0YXRlKChzdGF0ZSkgPT4ge1xyXG4gICAgICBjb25zdCBjbG9zaW5nID0gc3RhdGUub3BlbkluZGV4ZXMuaW5jbHVkZXMoaW5kZXgpO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IGNsb3NpbmcgPyAnY2xvc2luZycgOiAnb3BlbmluZycsXHJcbiAgICAgICAgb3BlbkluZGV4ZXM6IGNsb3NpbmdcclxuICAgICAgICAgID8gc3RhdGUub3BlbkluZGV4ZXMuZmlsdGVyKChpKSA9PiBpICE9PSBpbmRleClcclxuICAgICAgICAgIDogWy4uLnN0YXRlLm9wZW5JbmRleGVzLCBpbmRleF0sXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XHJcbiAgfTtcclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5wcm9wcy5jaGlsZHJlbih7XHJcbiAgICAgIG9wZW5JbmRleGVzOiB0aGlzLmdldFN0YXRlKCkub3BlbkluZGV4ZXMsXHJcbiAgICAgIGhhbmRsZUl0ZW1DbGljazogdGhpcy5oYW5kbGVJdGVtQ2xpY2ssXHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB7IEJhc2VBY2NvcmRpb24gfTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uQnV0dG9uID0gKHsgY2hpbGRyZW4sIC4uLnJlc3QgfSkgPT4gKFxyXG4gIDxkaXYgc3g9e3N0eWxlcy5idXR0b25Ub2dnbGV9IHsuLi5yZXN0fT5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBhY2NvcmRpb25JdGVtOiB7XHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAnKyAuYWNjb3JkaW9uLWl0ZW0nOiB7XHJcbiAgICAgIG10OiBbM10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uVG9nZ2xlOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2NlbnRlciddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBhY2NvcmRpb25Db250ZW50OiB7XHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBsaW5lSGVpZ2h0OiAyLFxyXG4gICAgbXQ6IFs0XSxcclxuICB9LFxyXG59O1xyXG5cclxuY29uc3QgdmFyaWFudHMgPSB7XHJcbiAgb3Blbjoge1xyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBtYXJnaW5Ub3A6IDE2LFxyXG4gIH0sXHJcbiAgY2xvc2VkOiB7IGhlaWdodDogMCwgbWFyZ2luVG9wOiAwIH0sXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQWNjb3JkaW9uQ29udGVudHMoeyBpc09wZW4sIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPG1vdGlvbi5kaXZcclxuICAgICAgaW5pdGlhbD1cImNsb3NlZFwiXHJcbiAgICAgIGFuaW1hdGU9e2lzT3BlbiA/ICdvcGVuJyA6ICdjbG9zZWQnfVxyXG4gICAgICB2YXJpYW50cz17dmFyaWFudHN9XHJcbiAgICAgIHN4PXtzdHlsZXMuYWNjb3JkaW9uQ29udGVudH1cclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgLz5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWNjb3JkaW9uSXRlbSA9ICh7IGlzT3BlbiwgY2hpbGRyZW4sIGNsYXNzTmFtZSwgLi4ucmVzdCB9KSA9PiAoXHJcbiAgPGRpdlxyXG4gICAgY2xhc3NOYW1lPXtgYWNjb3JkaW9uLWl0ZW0gJHtjbGFzc05hbWV9YH1cclxuICAgIHN4PXtzdHlsZXMuYWNjb3JkaW9uSXRlbX1cclxuICAgIHsuLi5yZXN0fVxyXG4gID5cclxuICAgIHtjaGlsZHJlbn1cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBjb25zdCBwcmV2ZW50Q2xvc2UgPSAoc3RhdGUsIGNoYW5nZXMpID0+XHJcbiAgY2hhbmdlcy50eXBlID09PSAnY2xvc2luZycgJiYgc3RhdGUub3BlbkluZGV4ZXMubGVuZ3RoIDwgMlxyXG4gICAgPyB7IC4uLmNoYW5nZXMsIG9wZW5JbmRleGVzOiBzdGF0ZS5vcGVuSW5kZXhlcyB9XHJcbiAgICA6IGNoYW5nZXM7XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlID0gKHN0YXRlLCBjaGFuZ2VzKSA9PlxyXG4gIGNoYW5nZXMudHlwZSA9PT0gJ29wZW5pbmcnXHJcbiAgICA/IHsgLi4uY2hhbmdlcywgb3BlbkluZGV4ZXM6IGNoYW5nZXMub3BlbkluZGV4ZXMuc2xpY2UoLTEpIH1cclxuICAgIDogY2hhbmdlcztcclxuXHJcbmV4cG9ydCBjb25zdCBjb21iaW5lUmVkdWNlcnMgPSAoLi4ucmVkdWNlcnMpID0+IChzdGF0ZSwgY2hhbmdlcykgPT5cclxuICByZWR1Y2Vycy5yZWR1Y2UoKGFjYywgcmVkdWNlcikgPT4gcmVkdWNlcihzdGF0ZSwgYWNjKSwgY2hhbmdlcyk7XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgRmxleCwgSW1hZ2UsIEhlYWRpbmcsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCB7IExpbmssIExlYXJuTW9yZSB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCB7IHNsdWdpZnkgfSBmcm9tICdzZXJ2aWNlcy9zbHVnaWZ5JztcclxuXHJcbmNvbnN0IEJsb2dQb3N0ID0gKHsgcG9zdCB9KSA9PiB7XHJcbiAgLy8gY29uc3Qgc2x1ZyA9IHNsdWdpZnkocG9zdC5tbl90aXR1bG8pXHJcbiAgLy8gY29uc3Qgc2x1ZyA9IFwidGVzdGVcIlxyXG4gIGNvbnN0IHNsdWcgPSBzbHVnaWZ5KHBvc3QubW5fdGl0dWxvKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cImFydGljbGVcIiBzeD17c3R5bGVzLnBvc3R9PlxyXG4gICAgICA8RmxleCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMudGh1bWJuYWlsfT5cclxuICAgICAgICA8SW1hZ2Ugc3JjPXtgaHR0cHM6Ly93d3cuYmFsYW1pbnV0LmNvbS5ici9pbWcvbm90aWNpYXMvJHtwb3N0Lm1uX2ltYWdlbTF9YH0gbG9hZGluZz1cImxhenlcIiBhbHQ9e3Bvc3Q/Lm1uX3RpdGxlfSAvPlxyXG4gICAgICA8L0ZsZXg+XHJcblxyXG4gICAgICA8Qm94IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICA8TGluayBwYXRoPXtgbm90aWNpYXMvJHtzbHVnfWB9Pntwb3N0Py5tbl90aXR1bG99PC9MaW5rPlxyXG4gICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLmV4Y2VycHR9PlxyXG4gICAgICAgICAge3Bvc3Q/Lm1uX2Rlc2NyaWNhb31cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPExlYXJuTW9yZSBwYXRoPXtgbm90aWNpYXMvJHtzbHVnfWB9IGxhYmVsPVwiTGVpYSBNYWlzXCIgc3g9e3N0eWxlcy5sZWFybk1vcmV9IC8+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJsb2dQb3N0O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHBvc3Q6IHtcclxuICAgIG14OiBbbnVsbCwgbnVsbCwgbnVsbCwgMywgJ3Vuc2V0J10sXHJcbiAgfSxcclxuICB0aHVtYm5haWw6IHtcclxuICAgIG1iOiBbNF0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBmb250U2l6ZTogWzIsIG51bGwsIG51bGwsIDMsICcxN3B4JywgM10sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxLjY4XSxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC4ycHgnLFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGV4Y2VycHQ6IHtcclxuICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgbGluZUhlaWdodDogMS44OCxcclxuICAgIG10OiBbMl0sXHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICB0ZXh0T3ZlcmZsb3c6ICdlbGxpcHNpcycsXHJcbiAgICBkaXNwbGF5OiAnLXdlYmtpdC1ib3gnLFxyXG4gICAgV2Via2l0TGluZUNsYW1wOiAnMicsXHJcbiAgICBXZWJraXRCb3hPcmllbnQ6ICd2ZXJ0aWNhbCcgXHJcbiAgfSxcclxuICBsZWFybk1vcmU6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgJzE1cHgnXSxcclxuICAgIG10OiAyLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmNvbnN0IEZhcUl0ZW0gPSAoeyBmYXEsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cImFydGljbGVcIiBzeD17c3R5bGVzPy5mYXF9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57ZmFxPy5xdWVzfTwvSGVhZGluZz5cclxuICAgICAgPFRleHQgYXM9XCJwXCI+e2ZhcT8uYW5zfTwvVGV4dD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXFJdGVtO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGZhcToge1xyXG4gICAgYm9yZGVyQm90dG9tOiAnMnB4IHNvbGlkICMwRjIxMzcnLFxyXG4gICAgbWFyZ2luQm90dG9tOiA4LFxyXG4gICAgbXg6IFtudWxsLCBudWxsLCBudWxsLCA2LCA4XSxcclxuICAgIHdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2NhbGMoNTAlIC0gNjBweCknLCAnY2FsYyg1MCUgLSA4MHB4KSddLFxyXG4gICAgaDM6IHtcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBmb250U2l6ZTogWzIsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjY4LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIGNvbG9yOiAnIzBGMjEzNycsXHJcbiAgICAgIG1iOiBbMiwgbnVsbCwgbnVsbCwgM10sXHJcbiAgICB9LFxyXG4gICAgcDoge1xyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAyLFxyXG4gICAgICBtYjogNCxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBJbWFnZSwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmNvbnN0IEZlYXR1cmUgPSAoeyBkYXRhLCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggc3g9e3N0eWxlcy5mZWF0dXJlfSB7Li4ucHJvcHN9PlxyXG4gICAgICA8Qm94IGFzPVwiZmlndXJlXCI+XHJcbiAgICAgICAgPEltYWdlIHNyYz17ZGF0YT8uaWNvbn0gYWx0PXtkYXRhPy50aXRsZX0gLz5cclxuICAgICAgPC9Cb3g+XHJcbiAgICAgIDxCb3g+XHJcbiAgICAgICAgPEhlYWRpbmcgYXM9XCJoM1wiPntkYXRhPy50aXRsZX08L0hlYWRpbmc+XHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCI+e2RhdGE/LmRlc2NyaXB0aW9ufTwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRmVhdHVyZTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBmZWF0dXJlOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGZpZ3VyZToge1xyXG4gICAgICBtaW5XaWR0aDogWzcwXSxcclxuICAgICAgbXI6IFsnMzBweCddLFxyXG4gICAgfSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMjgsXHJcbiAgICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogJzIwcHgnLFxyXG4gICAgfSxcclxuICAgIHA6IHtcclxuICAgICAgZm9udFNpemU6IDE2LFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjg4LFxyXG4gICAgICBjb2xvcjogJ3RleHQnLFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgbXQ6IFszXSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBIZWFkaW5nLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBJb01kQ2hlY2ttYXJrQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvaW8nO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgeyBMZWFybk1vcmUsIExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgeyBzbHVnaWZ5IH0gZnJvbSAnc2VydmljZXMvc2x1Z2lmeSc7XHJcblxyXG5jb25zdCBQcmljZVRhYmxlID0gKHsgaXRlbXMsIGlzUmVjb21tZW5kZWQsIHRpdGxlLCBzdWJ0aXRsZSwgbGluayB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3hcclxuICAgICAgc3g9e3N0eWxlcy5wcmljZVRhYmxlfVxyXG4gICAgICBjbGFzc05hbWU9e2Ake2lzUmVjb21tZW5kZWQgPyAncmVjb21tZW5kZWQnIDogJyd9YH1cclxuICAgID5cclxuICAgICAgey8qIHtwcmljZS5pc1JlY29tbWVuZGVkICYmIChcclxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBzeD17c3R5bGVzLnJlY29tTGFiZWx9PlxyXG4gICAgICAgICAgSGlnaGx5IFJlY29tbWVuZGVkXHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICApfSAqL31cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmhlYWRlcn0gY2xhc3NOYW1lPVwicHJpY2VIZWFkZXJcIj5cclxuICAgICAgICA8SGVhZGluZyBhcz1cImgzXCIgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICB7dGl0bGV9XHJcbiAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuc3VidGl0bGV9PlxyXG4gICAgICAgICAge3N1YnRpdGxlfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICB7LyogPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5wcmljZUFtb3VudH0+XHJcbiAgICAgICAgICAke3ByaWNlPy5wcmljZX1cclxuICAgICAgICAgIC9tb1xyXG4gICAgICAgIDwvVGV4dD4gKi99XHJcbiAgICAgICAgey8qIDxCdXR0b24gc3g9e3N0eWxlcy5idXR0b259IHZhcmlhbnQ9XCJ0ZXh0XCI+XHJcbiAgICAgICAgICB7cHJpY2UuYnV0dG9uVGV4dH1cclxuICAgICAgICA8L0J1dHRvbj4gKi99XHJcbiAgICAgIDwvQm94PlxyXG4gICAgICA8Qm94IGFzPVwidWxcIiBzeD17c3R5bGVzLmxpc3R9PlxyXG4gICAgICAgIHtpdGVtcz8ubWFwKChpdGVtLCBpKSA9PiAoICAgICAgICAgIFxyXG4gICAgICAgICAgPGxpIGtleT17aX0+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB7aXNSZWNvbW1lbmRlZCA/IChcclxuICAgICAgICAgICAgICA8TGluayBwYXRoPXtgb2JyaWdhY29lcy8ke3NsdWdpZnkoaXRlbS5Nbl9UaXR1bG8pfWB9IHN4PXtzdHlsZXMubGlua30+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPElvTWRDaGVja21hcmtDaXJjbGUgc3g9e3sgY29sb3I6ICdzZWNvbmRhcnknIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5Nbl9UaXR1bG99PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxJb01kQ2hlY2ttYXJrQ2lyY2xlIHN4PXt7IGNvbG9yOiAnc2Vjb25kYXJ5JyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e2l0ZW0ub2JyX25vbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICApfVxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgICB7bGluayA/IChcclxuICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgPExlYXJuTW9yZSBwYXRoPXtsaW5rfSBsYWJlbD1cIlNhaWJhIE1haXNcIiAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApIDogKCcnKX1cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJpY2VUYWJsZTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBwcmljZVRhYmxlOiB7XHJcbiAgICBhbGlnblNlbGY6ICdiYXNlbGluZScsXHJcbiAgICBiYWNrZ3JvdW5kOiAnd2hpdGUnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAxMCxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogW1xyXG4gICAgICAnMjBweCAxNXB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzMwcHggMjVweCcsXHJcbiAgICAgICcyNXB4IDMwcHggNDBweCAzMHB4JyxcclxuICAgICAgJzQ1cHggNjBweCA3MHB4IDQ1cHgnLFxyXG4gICAgXSxcclxuICAgIGJveFNoYWRvdzogWycwcHggMTVweCA1MHB4IHJnYmEoOTEsIDEzMiwgMTkzLCAwLjEpJywgbnVsbCwgbnVsbCwgJ25vbmUnXSxcclxuICAgICcmLnJlY29tbWVuZGVkJzoge1xyXG4gICAgICBib3hTaGFkb3c6IFtudWxsLCBudWxsLCBudWxsLCAnMHB4IDE1cHggNTBweCByZ2JhKDkxLCAxMzIsIDE5MywgMC4xKSddLFxyXG4gICAgICBidXR0b246IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICByZWNvbUxhYmVsOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBmb250U2l6ZTogWzAsIDFdLFxyXG4gICAgbGluZUhlaWdodDogMS4yOSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM1MkFDRkYnLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAnOHB4IDhweCAwcHggMHB4JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHRvcDogJy0zNXB4JyxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgbWluSGVpZ2h0OiBbMzAsIDM1XSxcclxuICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBmb250U2l6ZTogWzEsIDIsIDNdLFxyXG4gICAgbGluZUhlaWdodDogMS4zMSxcclxuICAgIGxldHRlclNwYWNpbmc6ICctMC41NXB4JyxcclxuICB9LFxyXG4gIHN1YnRpdGxlOiB7XHJcbiAgICBjb2xvcjogcmdiYSgnIzM0M0Q0OCcsIDAuNjUpLFxyXG4gICAgZm9udFNpemU6IFswLCBudWxsLCAxLCAyXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuNjIsXHJcbiAgICBtdDogJzhweCcsXHJcbiAgfSxcclxuICBwcmljZUFtb3VudDoge1xyXG4gICAgY29sb3I6ICcjMEYyMTM3JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIGZvbnRTaXplOiBbMSwgMiwgbnVsbCwgNCwgJzI2cHgnXSxcclxuICAgIGxpbmVIZWlnaHQ6IDEuMyxcclxuICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgIG10OiBbJzEycHgnLCBudWxsLCBudWxsLCAnMjZweCddLFxyXG4gIH0sXHJcbiAgbGlzdDoge1xyXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgbXQ6IFs2LCBudWxsLCBudWxsLCBudWxsLCAxMF0sXHJcbiAgICBtYXhXaWR0aDogMzQwLFxyXG4gICAgbGk6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZm9udFNpemU6IFswLCBudWxsLCAxLCBudWxsLCAyXSxcclxuICAgICAgbGluZUhlaWdodDogMS42MixcclxuICAgICAgJysgbGkgJzoge1xyXG4gICAgICAgIG10OiBbMywgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICAgIH0sXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIGhlaWdodDogWzE3LCBudWxsLCBudWxsLCBudWxsLCAyM10sXHJcbiAgICAgICAgd2lkdGg6IFsxNywgbnVsbCwgbnVsbCwgbnVsbCwgMjNdLFxyXG4gICAgICB9LFxyXG4gICAgICAnc3BhbjpmaXJzdC1vZi10eXBlJzoge1xyXG4gICAgICAgIG1yOiAnMTNweCcsXHJcbiAgICAgICAgbXQ6ICc1cHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcudW5hdmFpbGFibGUnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIGJvcmRlcjogYDEuNXB4IHNvbGlkICR7cmdiYSgnIzVCMkI5RCcsIDAuMTUpfWAsXHJcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgbWluSGVpZ2h0OiBbNDAsIG51bGwsIG51bGwsIG51bGwsIDUwXSxcclxuICAgIHBhZGRpbmc6IFsnMCAyNHB4JywgbnVsbCwgJzAgMzJweCddLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCBudWxsLCAyXSxcclxuICAgIG10OiBbMywgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICAnOmhvdmVyJzoge1xyXG4gICAgICBib3JkZXJDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGxpbms6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcidcclxuICB9XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmNvbnN0IFNlcnZpY2UgPSAoeyBjb3RhY2FvIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLnNlcnZpY2V9PlxyXG4gICAgICA8VGV4dCBhcz1cInBcIj57Y290YWNhbz8uY290ZF9ub21lfTwvVGV4dD5cclxuICAgICAgPFRleHQgYXM9XCJwXCI+Q29tcHJhOiA8VGV4dCBhcz1cInNwYW5cIiBzeD17IHN0eWxlcy5wcmljZSB9PlIkIHtjb3RhY2FvPy5jb3RkX2NvbXByYX08L1RleHQ+PC9UZXh0PlxyXG4gICAgICA8VGV4dCBhcz1cInBcIj5WZW5kYTogPFRleHQgYXM9XCJzcGFuXCIgc3g9eyBzdHlsZXMucHJpY2UgfT57IGNvdGFjYW8/LmNvdGRfdmVuZGEgIT09IDAgPyAoYFIkICR7Y290YWNhbz8uY290ZF92ZW5kYX1gKSA6ICgnLScpfTwvVGV4dD48L1RleHQ+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZTtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZXJ2aWNlOiB7XHJcbiAgICBib3JkZXI6ICh0aGVtZSkgPT4gYDFweCBzb2xpZCAke3RoZW1lLmNvbG9ycy5ib3JkZXJDb2xvcn1gLFxyXG4gICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBtaW5IZWlnaHQ6IFsxMDcsIG51bGwsIG51bGwsIDEzMF0sXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgdHJhbnNpdGlvbjogJ2FsbCAwLjNzIGVhc2UtaW4tb3V0IDBzJyxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIGJveFNoYWRvdzogJzBweCAxMXB4IDMwcHggcmdiYSg1MSwgODMsIDE0NSwgMC4wNyknLFxyXG4gICAgICBib3JkZXJDb2xvcjogJ3RyYW5zcGFyZW50JyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTdweCddLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjc3LFxyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgbGluZUhlaWdodDogMixcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgdGVsZWZvbmUgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy90ZWxlZm9uZS5wbmcnXHJcbmltcG9ydCBlbWFpbCBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2VtYWlsLnBuZydcclxuaW1wb3J0IGVuZGVyZWNvIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZW5kZXJlY28ucG5nJ1xyXG5pbXBvcnQgY2lkYWRlIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvY2lkYWRlLnBuZydcclxuaW1wb3J0IGZhY2Vib29rIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvZmFjZWJvb2sucG5nJ1xyXG5pbXBvcnQgaW5zdGFncmFtIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvaW5zdGFncmFtLnBuZydcclxuaW1wb3J0IHdoYXRzYXBwIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvd2hhdHNhcHAucG5nJ1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnYXNzZXRzL2ltYWdlcy9pY29ucy9zdG9yZS5wbmcnXHJcblxyXG5leHBvcnQgY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdDb250YXRvJyxcclxuICAgIGl0ZW1zOiBbXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAndGVsOjg4MzY2OTExNDYnLFxyXG4gICAgICAgIGljb246IHRlbGVmb25lLFxyXG4gICAgICAgIGxhYmVsOiAnKDg4KSAzNjY5LTExNDYnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ3RlbDo4ODM2NjkxNTc3JyxcclxuICAgICAgICBpY29uOiB0ZWxlZm9uZSxcclxuICAgICAgICBsYWJlbDogJyg4OCkgMzY2OS0xNTc3JyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdtYWlsdG86Z2VyZW5jaWFAc2VydmNvbjEuY29tJyxcclxuICAgICAgICBpY29uOiBlbWFpbCxcclxuICAgICAgICBsYWJlbDogJ2dlcmVuY2lhQHNlcnZjb24xLmNvbScsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9nLnBhZ2Uvc2VydmNvbmppam9jYT9zaGFyZScsXHJcbiAgICAgICAgaWNvbjogZW5kZXJlY28sXHJcbiAgICAgICAgbGFiZWw6ICdSdWEgMTcgZGUgT3V0dWJybywgMTM0MCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBwYXRoOiAnaHR0cHM6Ly9nLnBhZ2Uvc2VydmNvbmppam9jYT9zaGFyZScsXHJcbiAgICAgICAgaWNvbjogY2lkYWRlLFxyXG4gICAgICAgIGxhYmVsOiAnSmlqb2NhIGRlIEplcmljb2Fjb2FyYSAtIENFJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiAnUmVkZXMgU29jaWFpcycsXHJcbiAgICBpdGVtczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vd3d3LmZhY2Vib29rLmNvbS9zZXJ2Y29uamlqb2NhJyxcclxuICAgICAgICBpY29uOiBmYWNlYm9vayxcclxuICAgICAgICBsYWJlbDogJ0ZhY2Vib29rJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NlcnZjb25qaWpvY2EvJyxcclxuICAgICAgICBpY29uOiBpbnN0YWdyYW0sXHJcbiAgICAgICAgbGFiZWw6ICdJbnN0YWdyYW0nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGF0aDogJ2h0dHBzOi8vd2EubWUvNTU4ODk5NjY4NjUyJyxcclxuICAgICAgICBpY29uOiB3aGF0c2FwcCxcclxuICAgICAgICBsYWJlbDogJ1doYXRzYXBwJyxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIHBhdGg6ICdodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9hcHBzL2RldGFpbHM/aWQ9Y29tLnNlcnZjb24nLFxyXG4gICAgICAgIGljb246IHN0b3JlLFxyXG4gICAgICAgIGxhYmVsOiAnTm9zc28gQXBwJyxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb290ZXJOYXYgPSBbXHJcbiAge1xyXG4gICAgcGF0aDogJyMhJyxcclxuICAgIGxhYmVsOiAnSG9tZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnIyEnLFxyXG4gICAgbGFiZWw6ICdBZHZlcnRpc2UnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJyMhJyxcclxuICAgIGxhYmVsOiAnU3VwcG9ydHMnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJyMhJyxcclxuICAgIGxhYmVsOiAnTWFya2V0aW5nJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcjIScsXHJcbiAgICBsYWJlbDogJ0ZBUScsXHJcbiAgfSxcclxuXTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0LCBDb250YWluZXIsIEltYWdlIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5pbXBvcnQgTG9nbyBmcm9tICdhc3NldHMvaW1hZ2VzL2xvZ28ucG5nJztcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ2NvbXBvbmVudHMvbGluayc7XHJcbmltcG9ydCBDYWxsVG9BY3Rpb24gZnJvbSAnc2VjdGlvbnMvY2FsbC10by1hY3Rpb24nO1xyXG5pbXBvcnQgV2lkZ2V0IGZyb20gJy4vd2lkZ2V0JztcclxuaW1wb3J0IHsgbWVudUl0ZW1zIH0gZnJvbSAnLi9mb290ZXIuZGF0YSc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgPENhbGxUb0FjdGlvbiAvPlxyXG4gICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPEJveCBhcz1cImZvb3RlclwiIHN4PXtzdHlsZXMuZm9vdGVyfT5cclxuICAgICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3RlclRvcElubmVyfT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmFib3V0fT5cclxuICAgICAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMubG9nb30+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17IExvZ28gfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cIk1vZGVsbyBDb250YWJpbGlkYWRlXCIgLz5cclxuICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgICB7LyogPEJveCBzeD17c3R5bGVzLnRlcm1zfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHBhdGg9XCIjIVwiPlRlcm1zIG9mIHVzZTwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwic3BhblwiPnw8L1RleHQ+XHJcbiAgICAgICAgICAgICAgICA8TGluayBwYXRoPVwiIyFcIj5Qcml2YWN5PC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvQm94PiAqL31cclxuICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBzeD17c3R5bGVzLmNvcHlyaWdodH0+XHJcbiAgICAgICAgICAgICAgICAmY29weTsgQ29weXJpZ2h0IHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9IHBvciA8VGV4dCBhcz1cInNwYW5cIiBjb2xvcj1cInNlY29uZGFyeVwiPjxhIGhyZWY9XCJodHRwczovL3RicndlYi5jb20uYnJcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UQnJXZWI8L2E+PC9UZXh0PlxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHttZW51SXRlbXMubWFwKCh7IGlkLCB0aXRsZSwgaXRlbXMgfSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxXaWRnZXQga2V5PXtpZH0gdGl0bGU9e3RpdGxlfSBpdGVtcz17aXRlbXN9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Db250YWluZXI+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9GcmFnbWVudD5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZm9vdGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQUZDJyxcclxuICAgIHB0OiBbOCwgbnVsbCwgbnVsbCwgMTBdLFxyXG4gICAgcGI6IFs4LCBudWxsLCBudWxsLCAxNV0sXHJcbiAgfSxcclxuICBmb290ZXJUb3BJbm5lcjoge1xyXG4gICAgZ2FwOiBbMzAsIG51bGwsIDUwLCAnMjBweCA1MHB4JywgMTcsIDUwXSxcclxuICAgIGRpc3BsYXk6IFsnZ3JpZCddLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDMsIDFmciknLFxyXG4gICAgICAncmVwZWF0KDMsIDFmciknLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGZvb3RlcklubmVyOiB7XHJcbiAgICBib3JkZXJUb3A6IGAxcHggc29saWQgI0Q5RTBFN2AsXHJcbiAgICBkaXNwbGF5OiBbJ2Jsb2NrJywgbnVsbCwgJ2ZsZXgnXSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBhZGRpbmc6ICczNXB4IDAgNDBweCcsXHJcbiAgfSxcclxuICBhYm91dDoge1xyXG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsICdncmlkJywgJ2Jsb2NrJ10sXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiAnMjA1cHggMWZyIDFmcicsXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2NlbnRlciddLFxyXG4gICAgZ3JpZFJvdzogWyczLzQnLCBudWxsLCAnMS8xJywgJzMvNCcsICd1bnNldCddLFxyXG4gICAgZ3JpZENvbHVtbjogWycxLzMnLCBudWxsLCAnMS8yJywgJzEvNScsICd1bnNldCddLFxyXG4gIH0sXHJcbiAgbG9nbzoge1xyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogWydjZW50ZXInLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuICAgIGdyaWRDb2x1bW46ICcxLzInLFxyXG4gIH0sXHJcbiAgdGVybXM6IHtcclxuICAgIGRpc3BsYXk6IFsnZmxleCddLFxyXG4gICAgZ3JpZENvbHVtbjogJzMvNCcsXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2NlbnRlcicsIG51bGwsIG51bGwsIG51bGwsICdmbGV4LXN0YXJ0JywgJ2NlbnRlciddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydyb3cnLCBudWxsLCBudWxsLCBudWxsLCAnY29sdW1uJywgJ3JvdyddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFtcclxuICAgICAgJ2NlbnRlcicsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdmbGV4LXN0YXJ0JyxcclxuICAgICAgJ2NlbnRlcicsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdmbGV4LXN0YXJ0JyxcclxuICAgIF0sXHJcbiAgICBtdDogWzQsIG51bGwsIG51bGwsIDAsIDRdLFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIHNwYW46IHtcclxuICAgICAgZGlzcGxheTogWydpbmxpbmUtZmxleCcsIG51bGwsIG51bGwsIG51bGwsICdub25lJywgJ2lubGluZS1mbGV4J10sXHJcbiAgICAgIG06IFsnMCAxMHB4J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29weXJpZ2h0OiB7XHJcbiAgICBjb2xvcjogcmdiYSgnIzBGMjEzNycsIDAuNiksXHJcbiAgICBmb250U2l6ZTogWycxNHB4J10sXHJcbiAgICBtdDogWzMsIG51bGwsIG51bGwsIC0zMSwgM10sXHJcbiAgICBtcjogW251bGwsIG51bGwsIG51bGwsICdhdXRvJywgJ3Vuc2V0J10sXHJcbiAgICBncmlkQ29sdW1uOiAnMi8zJyxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCAnbGVmdCcsICdjZW50ZXInLCAnbGVmdCddLFxyXG4gICAgYToge1xyXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgICAnJjp2aXNpdGVkJzoge1xyXG4gICAgICAgIGNvbG9yOiAnaW5oZXJpdCdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgeyByZ2JhIH0gZnJvbSAncG9saXNoZWQnO1xyXG5cclxuY29uc3QgV2lkZ2V0ID0gKHsgdGl0bGUsIGl0ZW1zIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBzeD17c3R5bGVzLmZvb3RlcldpZGdldH0+XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIj57dGl0bGV9PC9IZWFkaW5nPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAge2l0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCwgaWNvbiB9LCBpKSA9PiAoXHJcbiAgICAgICAgICA8bGkga2V5PXtpfT5cclxuICAgICAgICAgICAge2ljb24gJiYgPEltYWdlIHNyYz17aWNvbn0gYWx0PXtsYWJlbH0gLz59XHJcbiAgICAgICAgICAgIDxMaW5rIHBhdGg9e3BhdGh9IGhyZWY9e3BhdGgudG9TdHJpbmcoKX0gdGFyZ2V0PVwiX2JsYW5rXCIga2V5PXtpfSBsYWJlbD17bGFiZWx9IHZhcmlhbnQ9XCJmb290ZXJcIiAvPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICApKX1cclxuICAgICAgPC91bD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXaWRnZXQ7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgZm9vdGVyV2lkZ2V0OiB7XHJcbiAgICBoMzoge1xyXG4gICAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgbGluZUhlaWdodDogMS42OCxcclxuICAgICAgbGV0dGVyU3BhY2luZzogJ2hlYWRpbmcnLFxyXG4gICAgfSxcclxuICAgIHVsOiB7XHJcbiAgICAgIGxpc3RTdHlsZTogJ25vbmUnLFxyXG4gICAgICBtYXJnaW46ICcyOHB4IDAgMCcsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIGxpOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGltZzoge1xyXG4gICAgICAgICAgbXI6ICcxNXB4JyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcclxuICAgICAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuOCksXHJcbiAgICAgICAgbGluZUhlaWdodDogMi41LFxyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgICAgY3Vyc29yOiAncG9pbnRlcidcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmNvbnN0IEJhciA9ICh7IGlzU3RpY2t5IH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPFRleHRcclxuICAgICAgYXM9XCJzcGFuXCJcclxuICAgICAgY2xhc3NOYW1lPVwiYmFyXCJcclxuICAgICAgc3g9e3sgYmFja2dyb3VuZENvbG9yOiBpc1N0aWNreSA/ICd0ZXh0JyA6ICd3aGl0ZScgfX1cclxuICAgIC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmNvbnN0IEhhbWJ1cmdlck1lbnUgPSAoeyBpc09wZW4sIGlzU3RpY2t5LCB0b2dnbGVNb2JpbGVNZW51LCAuLi5wcm9wcyB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxidXR0b25cclxuICAgICAgc3g9e3N0eWxlcy5idXR0b259XHJcbiAgICAgIG9uQ2xpY2s9e3RvZ2dsZU1vYmlsZU1lbnV9XHJcbiAgICAgIGNsYXNzTmFtZT17aXNPcGVuID8gJ29wZW4nIDogJyd9XHJcbiAgICAgIHsuLi5wcm9wc31cclxuICAgID5cclxuICAgICAge1sxLCAyLCAzLCA0XS5tYXAoKGJhciwgaSkgPT4gKFxyXG4gICAgICAgIDxCYXIga2V5PXtpfSBpc1N0aWNreT17aXNTdGlja3l9IC8+XHJcbiAgICAgICkpfVxyXG4gICAgICA8VGV4dCBhcz1cInNwYW5cIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxyXG4gICAgICAgIE1lbnVcclxuICAgICAgPC9UZXh0PlxyXG4gICAgPC9idXR0b24+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhhbWJ1cmdlck1lbnU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgYnV0dG9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICd0cmFuc3BhcmVudCcsXHJcbiAgICBib3JkZXI6IDAsXHJcbiAgICBwOiAwLFxyXG4gICAgd2lkdGg6IDIwLFxyXG4gICAgaGVpZ2h0OiAxNCxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgdHJhbnNmb3JtOiAncm90YXRlKDBkZWcpJyxcclxuICAgIHRyYW5zaXRpb246ICcuNXMgZWFzZS1pbi1vdXQnLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBvdXRsaW5lOiAwLFxyXG4gICAgbWw6IFs0LCBudWxsLCA2XSxcclxuICAgICcuYmFyJzoge1xyXG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgaGVpZ2h0OiAnMnB4JyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5LFxyXG4gICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICBsZWZ0OiAwLFxyXG4gICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoMGRlZyknLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnLjI1cyBlYXNlLWluLW91dCcsXHJcbiAgICAgICc6bnRoLW9mLXR5cGUoMSknOiB7XHJcbiAgICAgICAgdG9wOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnOm50aC1vZi10eXBlKDIpLDpudGgtb2YtdHlwZSgzKSc6IHtcclxuICAgICAgICB0b3A6ICc2cHgnLFxyXG4gICAgICB9LFxyXG4gICAgICAnOm50aC1vZi10eXBlKDQpJzoge1xyXG4gICAgICAgIHRvcDogJzEycHgnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmLm9wZW4nOiB7XHJcbiAgICAgICcuYmFyJzoge1xyXG4gICAgICAgICc6bnRoLW9mLXR5cGUoMSknOiB7XHJcbiAgICAgICAgICB0b3A6ICc2cHgnLFxyXG4gICAgICAgICAgd2lkdGg6ICcwJScsXHJcbiAgICAgICAgICBsZWZ0OiAnNTAlJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICc6bnRoLW9mLXR5cGUoMiknOiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoNDVkZWcpJyxcclxuICAgICAgICB9LFxyXG4gICAgICAgICc6bnRoLW9mLXR5cGUoMyknOiB7XHJcbiAgICAgICAgICB0cmFuc2Zvcm06ICdyb3RhdGUoLTQ1ZGVnKScsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAnOm50aC1vZi10eXBlKDQpJzoge1xyXG4gICAgICAgICAgdG9wOiAnNnB4JyxcclxuICAgICAgICAgIHdpZHRoOiAnMCUnLFxyXG4gICAgICAgICAgbGVmdDogJzUwJScsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHBhdGg6ICdob21lJyxcclxuICAgIGxhYmVsOiAnSG9tZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncXVlbS1zb21vcycsXHJcbiAgICBsYWJlbDogJ1F1ZW0gc29tb3MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3NlcnZpY29zJyxcclxuICAgIGxhYmVsOiAnU2VydmnDp29zJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdpbmZvcm1hY29lcycsXHJcbiAgICBsYWJlbDogJ0F0dWFsaXplLXNlJyxcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdjb250YXRvJyxcclxuICAgIGxhYmVsOiAnQ29udGF0bycsXHJcbiAgfSxcclxuXTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgW1xyXG4gIHtcclxuICAgIHBhdGg6ICcvJyxcclxuICAgIGxhYmVsOiAnSG9tZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsYWJlbDogJ1F1ZW0gc29tb3MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGFiZWw6ICdTZXJ2acOnb3MnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJy8nLFxyXG4gICAgbGFiZWw6ICdBdHVhbGl6ZS1zZScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnLycsXHJcbiAgICBsYWJlbDogJ0NvbnRhdG8nLFxyXG4gIH0sXHJcbl07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgRmxleCwgQ29udGFpbmVyLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IEZyYWdtZW50LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFN0aWNreSBmcm9tICdyZWFjdC1zdGlja3lub2RlJztcclxuaW1wb3J0IExvZ28gZnJvbSAnY29tcG9uZW50cy9sb2dvJztcclxuaW1wb3J0IFRvcEJhciBmcm9tICdjb21wb25lbnRzL3RvcGJhcic7XHJcbmltcG9ydCBMb2NrSWNvbiBmcm9tICdjb21wb25lbnRzL2ljb25zL2xvY2snO1xyXG5pbXBvcnQgSGFtYnVyZ2VyTWVudSBmcm9tICdjb21wb25lbnRzL2hhbWJ1cmdlcic7XHJcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi9uYXZiYXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xyXG4gIGNvbnN0IFtzdGF0ZSwgc2V0U3RhdGVdID0gdXNlU3RhdGUoe1xyXG4gICAgaXNNb2JpbGVNZW51OiBmYWxzZSxcclxuICAgIGlzU3RpY2t5OiBmYWxzZSxcclxuICB9KTtcclxuICBjb25zdCBoYW5kbGVTdGF0ZUNoYW5nZSA9IChzdGF0dXMpID0+IHtcclxuICAgIHN0YXR1cy5zdGF0dXMgPT09IFN0aWNreS5TVEFUVVNfRklYRURcclxuICAgICAgPyBzZXRTdGF0ZSh7IC4uLnN0YXRlLCBpc1N0aWNreTogdHJ1ZSB9KVxyXG4gICAgICA6IHNldFN0YXRlKHsgLi4uc3RhdGUsIGlzU3RpY2t5OiBmYWxzZSB9KTtcclxuICB9O1xyXG4gIGNvbnN0IHRvZ2dsZU1vYmlsZU1lbnUgPSAoKSA9PiB7XHJcbiAgICBzZXRTdGF0ZSgocHJldikgPT4ge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnByZXYsXHJcbiAgICAgICAgaXNNb2JpbGVNZW51OiAhcHJldi5pc01vYmlsZU1lbnUsXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUNsb3NlTWVudSA9ICgpID0+IHtcclxuICAgIHNldFN0YXRlKHtcclxuICAgICAgLi4uc3RhdGUsXHJcbiAgICAgIGlzTW9iaWxlTWVudTogZmFsc2UsXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8VG9wQmFyIC8+XHJcbiAgICAgIDxTdGlja3lcclxuICAgICAgICBlbmFibGVkPXt0cnVlfVxyXG4gICAgICAgIHRvcD17MH1cclxuICAgICAgICBhY3RpdmVDbGFzcz1cImlzLXN0aWNreVwiXHJcbiAgICAgICAgaW5uZXJaPXsxMDB9XHJcbiAgICAgICAgb25TdGF0ZUNoYW5nZT17aGFuZGxlU3RhdGVDaGFuZ2V9XHJcbiAgICAgID5cclxuICAgICAgICA8Qm94XHJcbiAgICAgICAgICBhcz1cImhlYWRlclwiXHJcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRlcn1cclxuICAgICAgICAgIGNsYXNzTmFtZT17c3RhdGUuaXNTdGlja3kgPyAnaXMtc3RpY2t5JyA6ICcnfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxDb250YWluZXIgc3g9e3N0eWxlcy5jb250YWluZXJ9PlxyXG4gICAgICAgICAgICA8TG9nbyBzeD17c3R5bGVzLmxvZ299IGlzU3RpY2t5PXtzdGF0ZS5pc1N0aWNreX0gLz5cclxuICAgICAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XHJcbiAgICAgICAgICAgICAgPE5hdmJhclxyXG4gICAgICAgICAgICAgICAgaXNTdGlja3k9e3N0YXRlLmlzU3RpY2t5fVxyXG4gICAgICAgICAgICAgICAgaXNNb2JpbGU9e3N0YXRlLmlzTW9iaWxlTWVudX1cclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsb3NlTWVudT17aGFuZGxlQ2xvc2VNZW51fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvRmxleD5cclxuXHJcbiAgICAgICAgICAgIDxIYW1idXJnZXJNZW51XHJcbiAgICAgICAgICAgICAgc3g9e3N0eWxlcy5oYW1idXJnZXJ9XHJcbiAgICAgICAgICAgICAgaXNTdGlja3k9e3N0YXRlLmlzU3RpY2t5fVxyXG4gICAgICAgICAgICAgIGlzT3Blbj17c3RhdGUuaXNNb2JpbGVNZW51fVxyXG4gICAgICAgICAgICAgIHRvZ2dsZU1vYmlsZU1lbnU9e3RvZ2dsZU1vYmlsZU1lbnV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgPC9TdGlja3k+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoZWFkZXI6IHtcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgcHk6IDQsXHJcbiAgICB0cmFuc2l0aW9uOiAnYWxsIDAuM3MgZWFzZS1pbi1vdXQgMHMnLFxyXG4gICAgJyYuaXMtc3RpY2t5Jzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJveFNoYWRvdzogJzAgNnB4IDEzcHggcmdiYSgzOCw3OCwxMTgsMC4xKScsXHJcbiAgICAgIHBhZGRpbmdUb3A6ICcxNXB4JyxcclxuICAgICAgcGFkZGluZ0JvdHRvbTogJzE1cHgnLFxyXG4gICAgfSxcclxuICAgICcmLmlzLW1vYmlsZS1tZW51Jzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgfSxcclxuICBsb2dvOiB7XHJcbiAgICBtcjogW251bGwsIG51bGwsIG51bGwsIG51bGwsIDYsIG51bGwsIDEyXSxcclxuICB9LFxyXG4gIGJ1dHRvbkdyb3VwOiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbG9naW46IHtcclxuICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHA6IDAsXHJcbiAgICBtcjogW251bGwsIG51bGwsIG51bGwsIG51bGwsIDVdLFxyXG4gICAgc3ZnOiB7XHJcbiAgICAgIG1yOiAyLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGpvaW5Db21tdW5pdHk6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcclxuICAgIG1pbkhlaWdodDogWzMwLCBudWxsLCBudWxsLCA0MF0sXHJcbiAgICBwOiBbJzAgMTJweCcsIG51bGwsIG51bGwsICcwIDE0cHgnXSxcclxuICAgIGZvbnRTaXplOiBbJzEwcHgnLCBudWxsLCBudWxsLCAxXSxcclxuICB9LFxyXG4gIGhhbWJ1cmdlcjoge1xyXG4gICAgZGlzcGxheTogW251bGwsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICdub25lJ10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBMaW5rIGFzIEEgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBOZXh0TGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBOYXZMaW5rLCBMaW5rIH0gZnJvbSAnY29tcG9uZW50cy9saW5rJztcclxuaW1wb3J0IG1lbnVJdGVtcyBmcm9tICcuL2hlYWRlci5kYXRhJztcclxuaW1wb3J0IG1lbnVJdGVtc1BhZ2VzIGZyb20gJy4vaGVhZGVyLmRhdGEucGFnZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgTmF2YmFyID0gKHsgaXNTdGlja3ksIGlzTW9iaWxlLCBoYW5kbGVDbG9zZU1lbnUgfSkgPT4ge1xyXG4gIGNvbnN0IHsgYXNQYXRoIH0gPSB1c2VSb3V0ZXIoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveFxyXG4gICAgICBhcz1cIm5hdlwiXHJcbiAgICAgIHN4PXtzdHlsZXMubmF2YmFyfVxyXG4gICAgICBjbGFzc05hbWU9e2BuYXZiYXIke2lzTW9iaWxlID8gJyBpcy1tb2JpbGUnIDogJyd9JHtcclxuICAgICAgICBpc1N0aWNreSA/ICcgaXMtc3RpY2t5JyA6ICcnXHJcbiAgICAgIH1gfVxyXG4gICAgPlxyXG4gICAgICB7YXNQYXRoID09PSAnLycgPyAoXHJcbiAgICAgICAgbWVudUl0ZW1zLm1hcCgoeyBwYXRoLCBsYWJlbCB9LCBpKSA9PiAoXHJcbiAgICAgICAgICA8TmF2TGluayBrZXk9e2l9IHBhdGg9e3BhdGh9IGxhYmVsPXtsYWJlbH0gb25DbGljaz17aGFuZGxlQ2xvc2VNZW51fSAvPlxyXG4gICAgICAgICkpXHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgbWVudUl0ZW1zUGFnZXMubWFwKCh7IHBhdGgsIGxhYmVsIH0sIGkpID0+IChcclxuICAgICAgICAgIDxMaW5rIGtleT17aX0gcGF0aD17cGF0aH0gbGFiZWw9e2xhYmVsfSBvbkNsaWNrPXtoYW5kbGVDbG9zZU1lbnV9IC8+XHJcbiAgICAgICAgKSlcclxuICAgICAgKX1cclxuXHJcbiAgICAgIDxOZXh0TGluayBwYXNzSHJlZiBocmVmPVwiaHR0cHM6Ly93d3cuYnVzaW5lc3NpbmZvcm1hdGl2b3MuY29tLmJyL2FyZWEtcmVzdHJpdGEvdmVyLXJldmlzdGFzLnBocD91aWQ9TVRrMk5RJTNEJTNEXCI+XHJcbiAgICAgICAgPEEgc3g9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwifX0gdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICBSZXZpc3RhIE9ubGluZVxyXG4gICAgICAgIDwvQT5cclxuICAgICAgPC9OZXh0TGluaz5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgbmF2YmFyOiB7XHJcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2ZsZXgnXSxcclxuICAgIGFsaWduSXRlbXM6IFtudWxsLCBudWxsLCBudWxsLCAnY2VudGVyJ10sXHJcbiAgICBmbGV4R3JvdzogW251bGwsIG51bGwsIG51bGwsIDFdLFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICcrIGEnOiB7XHJcbiAgICAgICAgbWw6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCA2XSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpJzoge1xyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBib3hTaGFkb3c6ICcwcHggMTFweCAzMHB4IHJnYmEoNTEsIDgzLCAxNDUsIDAuMDcpJyxcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgdG9wOiA3MCxcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgICAgdmlzaWJpbGl0eTogJ2hpZGRlbicsXHJcbiAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgwKScsXHJcbiAgICAgIHRyYW5zZm9ybU9yaWdpbjogJ3RvcCBsZWZ0IDAnLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnMC4zcyBlYXNlIDBzJyxcclxuICAgICAgJyYuaXMtc3RpY2t5Jzoge1xyXG4gICAgICAgIGJvcmRlclRvcDogJzFweCBzb2xpZCAjZjNmM2YzJyxcclxuICAgICAgfSxcclxuICAgICAgJyYuaXMtbW9iaWxlJzoge1xyXG4gICAgICAgIG9wYWNpdHk6IDEsXHJcbiAgICAgICAgdmlzaWJpbGl0eTogJ3Zpc2libGUnLFxyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlWSgxKScsXHJcbiAgICAgIH0sXHJcbiAgICAgIGE6IHtcclxuICAgICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgICAgbGluZUhlaWdodDogMSxcclxuICAgICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxyXG4gICAgICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICAgICAgcGFkZGluZzogMyxcclxuICAgICAgICAnKyBhJzoge1xyXG4gICAgICAgICAgYm9yZGVyVG9wOiAnMXB4IHNvbGlkICNmM2YzZjMnLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJyYuaXMtc3RpY2t5Jzoge1xyXG4gICAgICB0b3A6IDYwLFxyXG4gICAgICBhOiB7XHJcbiAgICAgICAgY29sb3I6ICd0ZXh0JyxcclxuICAgICAgfSxcclxuICAgICAgJy5hY3RpdmUnOiB7XHJcbiAgICAgICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIExvY2soeyBmaWxsLCB3aWR0aCwgaGVpZ2h0LCAuLi5wcm9wcyB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzdmdcclxuICAgICAgd2lkdGg9e3dpZHRoID8/IDE2fVxyXG4gICAgICBoZWlnaHQ9e2hlaWdodCA/PyAyMH1cclxuICAgICAgdmlld0JveD1cIjAgMCAxNiAyMFwiXHJcbiAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgey4uLnByb3BzfVxyXG4gICAgPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNMTUuMTU2IDE2Ljg5M3YtNi44MTFhMi4yMzcgMi4yMzcgMCAwMC0yLjIzMi0yLjIzM2gtLjU2MlY0LjcwN0E0LjcxMyA0LjcxMyAwIDAwNy42NTQgMGE0LjcxMiA0LjcxMiAwIDAwLTQuNzAzIDQuNzA3di41NDNjMCAuMzcuMy42NjcuNjY3LjY2Ny4zNjcgMCAuNjcyLS4zLjY3Mi0uNjY3di0uNTQzQTMuMzcyIDMuMzcyIDAgMDE3LjY1OCAxLjM0YTMuMzcyIDMuMzcyIDAgMDEzLjM2OSAzLjM2OFY3Ljg1SDIuMzg5Yy0xLjIzIDAtMi4yMzMgMS0yLjIzMyAyLjIzM3Y2LjgxMWEyLjIzNyAyLjIzNyAwIDAwMi4yMzMgMi4yMzNoMTAuNTM4YTIuMjM2IDIuMjM2IDAgMDAyLjIzLTIuMjMzem0tMTMuNjU3IDB2LTYuODExYzAtLjQ5Mi40MDItLjg5NC44OTQtLjg5NGgxMC41MzVjLjQ5MSAwIC44OTMuNDAyLjg5My44OTR2Ni44MTFhLjg5Ni44OTYgMCAwMS0uODkzLjg5NEgyLjM4OGEuODk1Ljg5NSAwIDAxLS44ODktLjg5NHpcIlxyXG4gICAgICAgIGZpbGw9e2ZpbGwgPz8gJyNmZmYnfVxyXG4gICAgICAvPlxyXG4gICAgICA8cGF0aFxyXG4gICAgICAgIGQ9XCJNNy42NTcgMTEuOTlhLjY3LjY3IDAgMDAtLjY3Mi42Njh2MS43M2MwIC4zNy4zLjY2Ny42NzIuNjY3LjM3IDAgLjY2Ny0uMy42NjctLjY2OHYtMS43MjlhLjY2Ny42NjcgMCAwMC0uNjY3LS42Njd6XCJcclxuICAgICAgICBmaWxsPXtmaWxsID8/ICcjZmZmJ31cclxuICAgICAgLz5cclxuICAgIDwvc3ZnPlxyXG4gICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvY2s7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBMb2dvID0gKHsgd2hpdGUsIC4uLnByb3BzIH0pID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDE4NS45MiAzNi42MlwiIHdpZHRoPXsxODUuOTJ9IGhlaWdodD17MzYuNjJ9IHsuLi5wcm9wc30+XHJcbiAgICAgIDxkZWZzPlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwcmVmaXhfX2JcIlxyXG4gICAgICAgICAgeDE9ezE2LjA4fVxyXG4gICAgICAgICAgeTE9ey0xNi41Mn1cclxuICAgICAgICAgIHgyPXsxMC4yNn1cclxuICAgICAgICAgIHkyPXsyMC40NH1cclxuICAgICAgICAgIGdyYWRpZW50VW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswfSBzdG9wQ29sb3I9XCIjMDA5NmQ5XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiIzAwYzE5OFwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19jXCJcclxuICAgICAgICAgIHgxPXs4Ljk1fVxyXG4gICAgICAgICAgeTE9ezEzLjQ4fVxyXG4gICAgICAgICAgeDI9ezE4LjI4fVxyXG4gICAgICAgICAgeTI9ezMyLjAyfVxyXG4gICAgICAgICAgZ3JhZGllbnRVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezB9IHN0b3BDb2xvcj1cIiMwMDJkZDlcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjMDBiMmFiXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwcmVmaXhfX2FcIlxyXG4gICAgICAgICAgeDE9ezIzLjMzfVxyXG4gICAgICAgICAgeTE9ey0zLjM5fVxyXG4gICAgICAgICAgeDI9ezUuNjZ9XHJcbiAgICAgICAgICB5Mj17MzcuNjV9XHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzM0ODJjMFwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuNDV9IHN0b3BDb2xvcj1cIiM5NmJlZGVcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjgzfSBzdG9wQ29sb3I9XCIjZTFlZGY2XCIgLz5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MX0gc3RvcENvbG9yPVwiI2ZmZlwiIC8+XHJcbiAgICAgICAgPC9saW5lYXJHcmFkaWVudD5cclxuICAgICAgICA8bGluZWFyR3JhZGllbnRcclxuICAgICAgICAgIGlkPVwicHJlZml4X19kXCJcclxuICAgICAgICAgIHgxPXsyMS42NH1cclxuICAgICAgICAgIHkxPXsxLjQyfVxyXG4gICAgICAgICAgeDI9ezYuNjN9XHJcbiAgICAgICAgICB5Mj17MzAuNDR9XHJcbiAgICAgICAgICB4bGlua0hyZWY9XCIjcHJlZml4X19hXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxsaW5lYXJHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwcmVmaXhfX2VcIlxyXG4gICAgICAgICAgeDE9ezI1LjE1fVxyXG4gICAgICAgICAgeTE9ezMuMjR9XHJcbiAgICAgICAgICB4Mj17MTAuMTR9XHJcbiAgICAgICAgICB5Mj17MzIuMjV9XHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiIzU2OWZhMVwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezAuMzZ9IHN0b3BDb2xvcj1cIiM5N2M0YzVcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXswLjh9IHN0b3BDb2xvcj1cIiNlMmVlZWZcIiAvPlxyXG4gICAgICAgICAgPHN0b3Agb2Zmc2V0PXsxfSBzdG9wQ29sb3I9XCIjZmZmXCIgLz5cclxuICAgICAgICA8L2xpbmVhckdyYWRpZW50PlxyXG4gICAgICAgIDxyYWRpYWxHcmFkaWVudFxyXG4gICAgICAgICAgaWQ9XCJwcmVmaXhfX2ZcIlxyXG4gICAgICAgICAgY3g9ezIxLjE2fVxyXG4gICAgICAgICAgY3k9ezMyLjA1fVxyXG4gICAgICAgICAgcj17MjcuMjV9XHJcbiAgICAgICAgICBncmFkaWVudFVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzdG9wIG9mZnNldD17MH0gc3RvcENvbG9yPVwiI2ZmMFwiIC8+XHJcbiAgICAgICAgICA8c3RvcCBvZmZzZXQ9ezF9IC8+XHJcbiAgICAgICAgPC9yYWRpYWxHcmFkaWVudD5cclxuICAgICAgPC9kZWZzPlxyXG4gICAgICA8ZyBkYXRhLW5hbWU9XCJMYXllciAyXCI+XHJcbiAgICAgICAgPGcgZGF0YS1uYW1lPVwiTGF5ZXIgMVwiPlxyXG4gICAgICAgICAgPHBhdGhcclxuICAgICAgICAgICAgZD1cIk0zOS42NCAyMi45aDIuODVhMS44NiAxLjg2IDAgMDAuOSAxLjQgMy42NyAzLjY3IDAgMDAyIC41MyAzLjMzIDMuMzMgMCAwMDEuOS0uNUExLjUgMS41IDAgMDA0OCAyM2ExLjMyIDEuMzIgMCAwMC0uNTQtMS4xIDQuOTEgNC45MSAwIDAwLTEuODMtLjcxbC0xLjg0LS40UTQwIDIwIDQwIDE2LjlhMy44MSAzLjgxIDAgMDExLjUtMy4xMyA2LjE0IDYuMTQgMCAwMTMuODktMS4xOSA2LjA3IDYuMDcgMCAwMTMuODkgMS4xNiAzLjg2IDMuODYgMCAwMTEuNSAzLjA4SDQ4YTEuNzcgMS43NyAwIDAwLS43OS0xLjQgMyAzIDAgMDAtMS44Mi0uNTIgMyAzIDAgMDAtMS43Ny40OCAxLjQ5IDEuNDkgMCAwMC0uNjYgMS4yNiAxLjI1IDEuMjUgMCAwMC41MyAxLjA1IDUuMjkgNS4yOSAwIDAwMS43Ny42OGwxLjcxLjM2QTYuMTggNi4xOCAwIDAxNTAgMjAuMTRhMy40MiAzLjQyIDAgMDExIDIuNTYgMy45MyAzLjkzIDAgMDEtMS41NSAzLjMgNi42MyA2LjYzIDAgMDEtNC4xNyAxLjIgNi42NSA2LjY1IDAgMDEtNC4wNi0xLjIgMy45IDMuOSAwIDAxLTEuNTgtMy4xek01My4zMyAxNGgyLjg1djIuNDJoMS45M3YyLjE4aC0xLjkzdjVjMCAuNzguNDEgMS4xOCAxLjIzIDEuMThhNC40NCA0LjQ0IDAgMDAuNjktLjA1djIuMWE2LjEyIDYuMTIgMCAwMS0xLjM2LjExIDQuMSA0LjEgMCAwMS0yLjYzLS42NiAyLjc0IDIuNzQgMCAwMS0uNzgtMi4yVjE4LjZoLTEuNDh2LTIuMTVoMS40OHptMTAuMjkgMTFhMi4zOSAyLjM5IDAgMDAxLjYtLjU1IDEuNzQgMS43NCAwIDAwLjY2LTEuMzl2LS43NmwtMi4yLjEzYTIuMyAyLjMgMCAwMC0xLjI0LjQgMS4wOSAxLjA5IDAgMDAtLjQzLjkgMS4xIDEuMSAwIDAwLjQ0LjkzIDEuODMgMS44MyAwIDAwMS4xNy4zNHptLS45NCAyLjA2YTMuNiAzLjYgMCAwMS0yLjUxLS44OSAyLjkyIDIuOTIgMCAwMS0xLTIuMjggMi42OCAyLjY4IDAgMDExLTIuMjQgNS40MyA1LjQzIDAgMDEzLS45M2wyLjYzLS4xNXYtLjdhMS40IDEuNCAwIDAwLS40Ny0xLjEzIDEuOTEgMS45MSAwIDAwLTEuMjgtLjQxIDIuMiAyLjIgMCAwMC0xLjI4LjM1IDEuNDQgMS40NCAwIDAwLS42Ljk1aC0yLjUzQTMuMjEgMy4yMSAwIDAxNjEgMTcuMTdhNS4zMSA1LjMxIDAgMDEzLjI5LTEgNS4wNSA1LjA1IDAgMDEzLjIzIDEgMy4wOSAzLjA5IDAgMDExLjIxIDIuNTR2Ny4yaC0yLjh2LTEuNmgtLjA2YTMuMDggMy4wOCAwIDAxLTEuMyAxLjMgMy44OSAzLjg5IDAgMDEtMS44OS40N3ptNy44NS0uMTZWMTYuNDVoMi43NnYxLjg4aC4wNmEyLjg2IDIuODYgMCAwMS45MS0xLjUyIDIuNDMgMi40MyAwIDAxMS41OC0uNTMgMi44OCAyLjg4IDAgMDEuODEuMTF2Mi41MWEyLjc5IDIuNzkgMCAwMC0xLS4xNyAyLjE2IDIuMTYgMCAwMC0xLjY0LjYyIDIuMzkgMi4zOSAwIDAwLS41OSAxLjcydjUuODV6bTgtMTIuODloMi44NXYyLjQyaDEuOTR2Mi4xN2gtMS44OXY1YzAgLjc4LjQxIDEuMTggMS4yMyAxLjE4YTQuNjggNC42OCAwIDAwLjctLjA1djIuMUE2LjI0IDYuMjQgMCAwMTgyIDI3YTQuMTUgNC4xNSAwIDAxLTIuNjQtLjY2IDIuNzQgMi43NCAwIDAxLS43OC0yLjJWMTguNmgtMS40N3YtMi4xNWgxLjQ3em0xNiAyLjQydjEwLjQ5aC0yLjY5VjI1aC0uMDZhMy4wNyAzLjA3IDAgMDEtMy4xMyAyLjA4IDMuNzEgMy43MSAwIDAxLTIuNzUtMSA0IDQgMCAwMS0xLTIuODd2LTYuNzZoMi44NXY2LjE1YTIuMjggMi4yOCAwIDAwLjUgMS41OSAxLjg2IDEuODYgMCAwMDEuNDUuNTUgMS45IDEuOSAwIDAwMS41MS0uNjMgMi40IDIuNCAwIDAwLjU1LTEuNjd2LTZ6bTgtLjE3YTMuNzkgMy43OSAwIDAxMy4xNCAxLjQ0IDYuMTQgNi4xNCAwIDAxMS4xNSA0IDYuMzMgNi4zMyAwIDAxLTEuMTMgNCA0LjEgNC4xIDAgMDEtNS4wOS45MiAzLjE1IDMuMTUgMCAwMS0xLjI3LTEuNDFoLS4wM3Y1LjE3aC0yLjg1VjE2LjQ1aDIuODF2MS44MmguMDZhMy4zNSAzLjM1IDAgMDExLjI3LTEuNDYgMy43IDMuNyAwIDAxMS45Ny0uNTN6bS0xIDguNTFhMiAyIDAgMDAxLjc3LS43NyAzLjcxIDMuNzEgMCAwMC42My0yLjI3IDMuNjcgMy42NyAwIDAwLS42My0yLjI2IDIgMiAwIDAwLTEuNjktLjg1IDIgMiAwIDAwLTEuNjguODYgMy42IDMuNiAwIDAwLS42NCAyLjI1IDMuNzMgMy43MyAwIDAwLjYzIDIuMjcgMiAyIDAgMDAxLjY5Ljc5em0yMi4wNy0uMzJ2Mi40NWgtOS4xMVYxMi44MmgzdjExLjY1em01LjU1LjU1YTIuMzkgMi4zOSAwIDAwMS42LS41NSAxLjc0IDEuNzQgMCAwMC42Ni0xLjM5di0uNzZsLTIuMi4xM2EyLjMgMi4zIDAgMDAtMS4yNC40IDEuMDkgMS4wOSAwIDAwLS40My45IDEuMSAxLjEgMCAwMC40NC45MyAxLjgzIDEuODMgMCAwMDEuMjUuMzR6bS0uOTQgMi4wNmEzLjU5IDMuNTkgMCAwMS0yLjUxLS44OSAyLjkyIDIuOTIgMCAwMS0xLTIuMjggMi42OCAyLjY4IDAgMDExLTIuMjQgNS40MyA1LjQzIDAgMDEzLS45M2wyLjYzLS4xNXYtLjdhMS40MyAxLjQzIDAgMDAtLjQ3LTEuMTMgMS45MSAxLjkxIDAgMDAtMS4yOC0uNDEgMi4xOCAyLjE4IDAgMDAtMS4yOC4zNSAxLjQ0IDEuNDQgMCAwMC0uNi45NWgtMi42MWEzLjIxIDMuMjEgMCAwMTEuMzItMi40OCA1LjMxIDUuMzEgMCAwMTMuMjktMSA1LjA3IDUuMDcgMCAwMTMuMjMgMSAzLjA5IDMuMDkgMCAwMTEuMjEgMi41NHY3LjJoLTIuNzZ2LTEuNThoLS4wNmEzLjA4IDMuMDggMCAwMS0xLjMgMS4zIDMuODkgMy44OSAwIDAxLTEuNzMuNDd6bTcuODUtLjE2VjE2LjQ1aDIuNzZ2MS44NmguMThhMy4yNiAzLjI2IDAgMDExLjI1LTEuNTIgMy42IDMuNiAwIDAxMi0uNTQgMy40NiAzLjQ2IDAgMDEyLjY4IDEgNC4xMiA0LjEyIDAgMDExIDIuODh2Ni43NUgxNDN2LTYuMTJhMi4zMSAyLjMxIDAgMDAtLjQ5LTEuNTkgMS44MyAxLjgzIDAgMDAtMS40NC0uNTUgMiAyIDAgMDAtMS41Mi42MyAyLjM5IDIuMzkgMCAwMC0uNTcgMS42NnY2em0xNS40MS4xNmEzLjc1IDMuNzUgMCAwMS0zLjExLTEuNDUgNi4yMSA2LjIxIDAgMDEtMS4xNS00IDYuMTEgNi4xMSAwIDAxMS4xNS0zLjkzIDMuNzkgMy43OSAwIDAxMy4xMy0xLjQ1IDMuNTMgMy41MyAwIDAxMiAuNTQgMy4xNyAzLjE3IDAgMDExLjI1IDEuNDJ2LTUuMzdoMi44NnYxNC4xaC0yLjgydi0xLjhoLS4wNWEzLjA5IDMuMDkgMCAwMS0xLjI2IDEuNDIgMy42NyAzLjY3IDAgMDEtMS45Mi41NHptMS04LjUxYTIgMiAwIDAwLTEuNy44NCAzLjc1IDMuNzUgMCAwMC0uNjEgMi4yNyAzLjc2IDMuNzYgMCAwMC42MSAyLjI4IDIuMTUgMi4xNSAwIDAwMy4zOSAwIDMuNzIgMy43MiAwIDAwLjYzLTIuMjggMy42NyAzLjY3IDAgMDAtLjYzLTIuMjYgMiAyIDAgMDAtMS42NC0uODN6bTcuMTEgOC4zNVYxNi40NWgyLjg1djEwLjQ3em0yLjUxLTEyLjA1YTEuNTIgMS41MiAwIDAxLTEuMDkuNDIgMS40OSAxLjQ5IDAgMDEtMS4wOC0uNDIgMS40NCAxLjQ0IDAgMDEtLjQ0LTEgMS4zOCAxLjM4IDAgMDEuNDQtMSAxLjQ2IDEuNDYgMCAwMTEuMDgtLjQzIDEuNDkgMS40OSAwIDAxMS4wOS40MyAxLjM4IDEuMzggMCAwMS40NCAxIDEuNDQgMS40NCAwIDAxLS4zOSAxLjAyem0yLjI0IDEyLjA1VjE2LjQ1aDIuNzZ2MS44NmguMDZhMy4yNiAzLjI2IDAgMDExLjI1LTEuNTIgMy42IDMuNiAwIDAxMi0uNTQgMy40NCAzLjQ0IDAgMDEyLjY4IDEgNC4wNyA0LjA3IDAgMDEuOTUgMi44OHY2Ljc1aC0yLjg1di02LjEyYTIuMzEgMi4zMSAwIDAwLS40OS0xLjU5IDEuNzkgMS43OSAwIDAwLTEuNDMtLjU1IDIgMiAwIDAwLTEuNTMuNjMgMi40MyAyLjQzIDAgMDAtLjU2IDEuNjZ2NnptMTYuMzYtMi4yM2EyLjA1IDIuMDUgMCAwMDEuNy0uOCAzLjQ4IDMuNDggMCAwMC42NC0yLjIzIDMuNiAzLjYgMCAwMC0uNjQtMi4yNSAyIDIgMCAwMC0xLjctLjg0IDIgMiAwIDAwLTEuNjguODQgMy42OSAzLjY5IDAgMDAtLjYxIDIuMjUgMy42IDMuNiAwIDAwLjYxIDIuMjMgMiAyIDAgMDAxLjczLjgyem0tLjA1IDYuMTdhNS44NCA1Ljg0IDAgMDEtMy4zNi0uOSAzLjE5IDMuMTkgMCAwMS0xLjQ4LTIuM2gyLjc5YTEuNTQgMS41NCAwIDAwLjc0Ljg4IDIuOCAyLjggMCAwMDEuMzkuMzQgMi40MSAyLjQxIDAgMDAxLjY5LS41NiAxLjg1IDEuODUgMCAwMC42MS0xLjQ3VjI1SDE4M2EzIDMgMCAwMS0xLjI0IDEuMzcgMy44OSAzLjg5IDAgMDEtMiAuNTEgMy44IDMuOCAwIDAxLTMuMDktMS40MSA1Ljg4IDUuODggMCAwMS0xLjE1LTMuODQgNi4wNiA2LjA2IDAgMDExLjE1LTMuOTIgMy44MiAzLjgyIDAgMDEzLjE0LTEuNDQgMy41OSAzLjU5IDAgMDEyIC41NCAzLjM3IDMuMzcgMCAwMTEuMjcgMS40NXYtMS44MWgyLjgydjEwLjMyYTMuNTggMy41OCAwIDAxLTEuNDQgMyA2IDYgMCAwMS0zLjc3IDEuMDl6XCJcclxuICAgICAgICAgICAgZmlsbD17d2hpdGUgPyAnd2hpdGUnIDogJyMwZjIxMzcnfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxwYXRoXHJcbiAgICAgICAgICAgIGQ9XCJNMTkuOC41M0ExNS43MyAxNS43MyAwIDAwNC42NSAyNi44OUwyMi4xNyA5LjM3QTUuMjkgNS4yOSAwIDAwMTkuOC41M3pcIlxyXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNwcmVmaXhfX2IpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTYuNjUgMzYuMDlBMTUuNzMgMTUuNzMgMCAwMDIxLjgxIDkuNzNMNC4yOSAyNy4yNWE1LjI4IDUuMjggMCAwMDIuMzYgOC44NHpcIlxyXG4gICAgICAgICAgICBmaWxsPVwidXJsKCNwcmVmaXhfX2MpXCJcclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTIxLjgxIDkuNzNMNC4yOSAyNy4yNWE1LjI4IDUuMjggMCAwMDIuMzYgOC44NCAxNS43MiAxNS43MiAwIDAwNS43NS40NGMtNy42OC03LjM5IDkuNDEtMjYuOCA5LjQxLTI2Ljh6XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtaXhCbGVuZE1vZGU6ICdtdWx0aXBseScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIGZpbGw9XCJ1cmwoI3ByZWZpeF9fYSlcIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxnXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnbXVsdGlwbHknLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICAgIGQ9XCJNNi4zMyAzNmMtMi40OS03LjcgMTIuNDUtMjMuMjEgMTUuMDktMjUuODdMNC4yOSAyNy4yNUE1LjI4IDUuMjggMCAwMDYuMzMgMzZ6XCJcclxuICAgICAgICAgICAgICBmaWxsPVwidXJsKCNwcmVmaXhfX2QpXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHBhdGggZD1cIk0yMS43NSA5Ljc5bC4wNi0uMDZ6XCIgZmlsbD1cInVybCgjcHJlZml4X19lKVwiIC8+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgICBkPVwiTTIzLjQ1IDcuMjlMNC42NCAyNi44OCAyMi4xNyA5LjM3YTUuMTQgNS4xNCAwIDAwMS4yOC0yLjA4elwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWl4QmxlbmRNb2RlOiAnc2NyZWVuJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgZmlsbD1cInVybCgjcHJlZml4X19mKVwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZz5cclxuICAgICAgPC9nPlxyXG4gICAgPC9zdmc+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExvZ287XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IEltYWdlIGFzIEltZyB9IGZyb20gJ3RoZW1lLXVpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEltYWdlKHsgc3JjLCAuLi5yZXN0IH0pIHtcclxuICByZXR1cm4gPEltZyBzcmM9e3NyY30gey4uLnJlc3R9IC8+O1xyXG59XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vaGVhZGVyL2hlYWRlcic7XHJcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9mb290ZXIvZm9vdGVyJztcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGF5b3V0KHsgY2hpbGRyZW4gfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPG1haW5cclxuICAgICAgICBzeD17e1xyXG4gICAgICAgICAgdmFyaWFudDogJ2xheW91dC5tYWluJyxcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICA8L21haW4+XHJcbiAgICAgIDxGb290ZXIgLz5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTGdwZCgpIHtcclxuICBjb25zdCBbaXNPcGVuLCBzZXRJc09wZW5dID0gdXNlU3RhdGUoKVxyXG4gXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGxldCBhY2VpdGVMZ3BkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnYWNlaXRlTGdwZCcpXHJcbiAgICBhY2VpdGVMZ3BkID09IG51bGwgPyBzZXRJc09wZW4odHJ1ZSkgOiBzZXRJc09wZW4oZmFsc2UpXHJcbiAgfSwgW10pO1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gY2xvc2VMZ3BkKCkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgnYWNlaXRlTGdwZCcsIHRydWUpXHJcbiAgICBzZXRJc09wZW4oZmFsc2UpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgaXNPcGVuID8gKFxyXG4gICAgICA8ZGl2IHN4PXsgc3R5bGVzLmNvb2tpZVBvcHVwfT5cclxuICAgICAgICA8cD5Fc3RlIHNpdGUgbsOjbyB1dGlsaXphIGNvb2tpZXMgZSBuw6NvIGNhcHR1cmEgZGFkb3MuPC9wPlxyXG4gICAgICAgIDxkaXYgc3g9eyBzdHlsZXMuY29va2llUG9wdXBBY3Rpb25zIH0+XHJcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2Nsb3NlTGdwZH0+T2ssIGVudGVuZGkhPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSA6IChcclxuICAgICAgPD5cclxuICAgICAgPC8+XHJcbiAgICApXHJcbiAgKTtcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIGNvb2tpZVBvcHVwIDoge1xyXG4gICAgZm9udFNpemU6ICcwLjg3NXJlbScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgYm90dG9tOiAnMS4yNXJlbScsXHJcbiAgICBwYWRkaW5nOiAnMC42MjVyZW0gMC45Mzc1cmVtJyxcclxuICAgIGJveFNoYWRvdzogJzAgMCAwLjYyNXJlbSAwIHJnYmEoMCwwLDAsIC4xNSknLFxyXG4gICAgbGluZUhlaWdodDogJzE1MCUnLFxyXG4gICAgdHJhbnNpdGlvbjogJ29wYWNpdHkgLjVzJyxcclxuICAgIG9wYWNpdHk6ICcxJyxcclxuICAgIHpJbmRleDogJzInLFxyXG4gICAgcmlnaHQ6ICc0JScsXHJcbiAgICB3aWR0aDogJzkyJScsXHJcbiAgICBiYWNrZ3JvdW5kOiAnIzAwMCcsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJ3NreWJsdWUnLFxyXG4gICAgICAnJjp2aXNpdGVkJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2t5Ymx1ZScsXHJcbiAgICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29va2llUG9wdXBBY3Rpb25zOiB7XHJcbiAgICBmbGV4OiAnMScsXHJcbiAgICB0ZXh0QWxpZ246ICdyaWdodCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnZmxleC1lbmQnLFxyXG4gICAgYnV0dG9uOiB7XHJcbiAgICAgIGNvbG9yOiAnb3JhbmdlJyxcclxuICAgICAgYm9yZGVyOiAnbm9uZScsXHJcbiAgICAgIGJhY2tncm91bmQ6ICdub25lJyxcclxuICAgICAgZm9udEZhbWlseTogJ2luaGVyaXQnLFxyXG4gICAgICBmb250U3R5bGU6ICdpbmhlcml0JyxcclxuICAgICAgZm9udFNpemU6ICdpbmhlcml0JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvbGQnLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgZm9udFNpemU6ICAnMC43NXJlbScsXHJcbiAgICAgIHBhZGRpbmc6ICcwJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgICcmOmhvdmVyJzoge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAndW5kZXJsaW5lJyxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgTmV4dExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHsganN4LCBMaW5rIGFzIEEgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgYXMgTWVudUxpbmsgfSBmcm9tICdyZWFjdC1zY3JvbGwnO1xyXG5pbXBvcnQgeyBJb0lvc0Fycm93Rm9yd2FyZCB9IGZyb20gJ3JlYWN0LWljb25zL2lvJztcclxuaW1wb3J0IHsga2V5ZnJhbWVzIH0gZnJvbSAnQGVtb3Rpb24vY29yZSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTmF2TGluayh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxNZW51TGlua1xyXG4gICAgICB0bz17cGF0aH1cclxuICAgICAgc3B5PXt0cnVlfVxyXG4gICAgICBvZmZzZXQ9ey03MH1cclxuICAgICAgc21vb3RoPXt0cnVlfVxyXG4gICAgICBkdXJhdGlvbj17NTAwfVxyXG4gICAgICBjbGFzc05hbWU9XCJuYXYtaXRlbVwiXHJcbiAgICAgIGFjdGl2ZUNsYXNzPVwiYWN0aXZlXCJcclxuICAgICAgey4uLnJlc3R9XHJcbiAgICA+XHJcbiAgICAgIHtsYWJlbH1cclxuICAgIDwvTWVudUxpbms+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExpbmsoeyBwYXRoLCBsYWJlbCwgY2hpbGRyZW4sIC4uLnJlc3QgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TmV4dExpbmsgaHJlZj17cGF0aH0+XHJcbiAgICAgIDxBIHsuLi5yZXN0fT57Y2hpbGRyZW4gPyBjaGlsZHJlbiA6IGxhYmVsfTwvQT5cclxuICAgIDwvTmV4dExpbms+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIExlYXJuTW9yZSh7IHBhdGgsIGxhYmVsLCBjaGlsZHJlbiwgLi4ucmVzdCB9KSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxOZXh0TGluayBocmVmPXtwYXRofT5cclxuICAgICAgPEEgc3g9e3N0eWxlcy5sZWFybk1vcmV9IHsuLi5yZXN0fT5cclxuICAgICAgICB7bGFiZWwgPz8gJ0xlYXJuIE1vcmUnfSA8SW9Jb3NBcnJvd0ZvcndhcmQgc2l6ZT1cIjE2cHhcIiAvPlxyXG4gICAgICA8L0E+XHJcbiAgICA8L05leHRMaW5rPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IGZhZGVSaWdodCA9IGtleWZyYW1lc2BcclxuICBmcm9tIHtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTVweCk7XHJcbiAgfVxyXG4gIHRvOiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuYDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsZWFybk1vcmU6IHtcclxuICAgIGNvbG9yOiAnbGluaycsXHJcbiAgICBjdXJzb3I6ICdwb2ludGVyJyxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHN2Zzoge1xyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDNweCknLFxyXG4gICAgfSxcclxuICAgICc6aG92ZXInOiB7XHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIGFuaW1hdGlvbjogYCR7ZmFkZVJpZ2h0fSAwLjVzIGxpbmVhcmAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdjb21wb25lbnRzL2xpbmsnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnY29tcG9uZW50cy9pbWFnZSc7XHJcbmltcG9ydCBMb2dvU3ZnIGZyb20gJ2NvbXBvbmVudHMvaWNvbnMvbG9nbyc7XHJcbmltcG9ydCBsb2dvIGZyb20gJ2Fzc2V0cy9pbWFnZXMvbG9nby5wbmcnXHJcbmltcG9ydCBsb2dvQnJhbmNvIGZyb20gJ2Fzc2V0cy9pbWFnZXMvbG9nb19icmFuY28ucG5nJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9nbyh7IGlzU3RpY2t5LCBmb290ZXIsIC4uLnByb3BzIH0pIHtcclxuICByZXR1cm4gKFxyXG4gICAgPExpbmsgcGF0aD1cIi9cIiBzeD17c3R5bGVzLmxvZ299IHsuLi5wcm9wc30+XHJcbiAgICAgIHtpc1N0aWNreSA/IChcclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ299IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICAgKSA6IChcclxuICAgICAgICAgIDxJbWFnZSBzcmM9e2xvZ29CcmFuY299IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHsvKiA8TG9nb1N2ZyB3aGl0ZT17IWlzU3RpY2t5fSAvPiAqL31cclxuICAgIDwvTGluaz5cclxuICApO1xyXG59XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBsb2dvOiB7XHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgIHN2Zzoge1xyXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICAgICAgd2lkdGg6IFsxMjgsIG51bGwsICcxMDAlJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgSGVhZGluZywgVGV4dCwgSW1hZ2UgfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5jb25zdCBTZWN0aW9uSGVhZGluZyA9ICh7IHRpdGxlLCBzbG9nYW4sIGRlc2NyaXB0aW9uLCBlbW9qaSwgLi4ucHJvcHMgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IHN4PXtzdHlsZXMuaGVhZGluZ30gey4uLnByb3BzfT5cclxuICAgICAge3Nsb2dhbiAmJiAoXHJcbiAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5zbG9nYW59PlxyXG4gICAgICAgICAge3Nsb2dhbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICl9XHJcbiAgICAgIDxIZWFkaW5nIGFzPVwiaDNcIiBzeD17c3R5bGVzLnRpdGxlfT5cclxuICAgICAgICB7ZW1vamkgPyA8c3Bhbj57dGl0bGV9PC9zcGFuPiA6IHRpdGxlfVxyXG4gICAgICAgIHtlbW9qaSAmJiA8SW1hZ2Ugc3JjPXtlbW9qaX0gYWx0PVwiZW1vamlcIiAvPn1cclxuICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICB7ZGVzY3JpcHRpb24gJiYgKFxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiIHN4PXtzdHlsZXMuZGVzY3JpcHRpb259PlxyXG4gICAgICAgICAge2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgKX1cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWN0aW9uSGVhZGluZztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBoZWFkaW5nOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgbWF4V2lkdGg6IDY2MCxcclxuICAgIG1hcmdpbjogJzAgYXV0byA1MHB4JyxcclxuICB9LFxyXG4gIHNsb2dhbjoge1xyXG4gICAgY29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIGZvbnRTaXplOiAyLFxyXG4gICAgbGluZUhlaWdodDogMi41LFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgbGluZUhlaWdodDogWzEuMzMsIDEuMzMsIDEuNV0sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2hlYWRpbmcnXSxcclxuICAgIGltZzoge1xyXG4gICAgICBtbDogWycxNXB4J10sXHJcbiAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICB0b3A6ICc4cHgnLFxyXG4gICAgICBtYXhXaWR0aDogWzI1LCBudWxsLCBudWxsLCAnMTAwJSddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRlc2NyaXB0aW9uOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFNpemU6IFsnMTRweCcsIG51bGwsICcxNnB4J10sXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS44NiwgbnVsbCwgMi4yXSxcclxuICAgIG10OiBbNV0sXHJcbiAgICBtYXhXaWR0aDogNjEwLFxyXG4gICAgbTogWycxMHB4IGF1dG8gMCddLFxyXG4gIH0sXHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTRU8oe1xyXG4gIGRlc2NyaXB0aW9uID0gJ3N0YXJ0dXAgbGFuZGluZyBkZXNjcmlwdGlvbnMnLFxyXG4gIGF1dGhvciA9ICdSZWRRLCBJbmMnLFxyXG4gIG1ldGEsXHJcbiAgdGl0bGUgPSAnc3RhcnR1cCBsYW5kaW5nIHRpdGxlJyxcclxufSkge1xyXG4gIGNvbnN0IG1ldGFEYXRhID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiBgZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6ZGVzY3JpcHRpb25gLFxyXG4gICAgICBjb250ZW50OiBkZXNjcmlwdGlvbixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHByb3BlcnR5OiBgb2c6dHlwZWAsXHJcbiAgICAgIGNvbnRlbnQ6IGB3ZWJzaXRlYCxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmNhcmRgLFxyXG4gICAgICBjb250ZW50OiBgc3VtbWFyeWAsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiBgdHdpdHRlcjpjcmVhdG9yYCxcclxuICAgICAgY29udGVudDogYXV0aG9yLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgbmFtZTogYHR3aXR0ZXI6dGl0bGVgLFxyXG4gICAgICBjb250ZW50OiB0aXRsZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6IGB0d2l0dGVyOmRlc2NyaXB0aW9uYCxcclxuICAgICAgY29udGVudDogZGVzY3JpcHRpb24sXHJcbiAgICB9LFxyXG4gIF0uY29uY2F0KG1ldGEpO1xyXG4gIHJldHVybiAoXHJcbiAgICA8SGVhZD5cclxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxyXG4gICAgICB7bWV0YURhdGEubWFwKCh7IG5hbWUsIGNvbnRlbnQgfSwgaSkgPT4gKFxyXG4gICAgICAgIDxtZXRhIGtleT17aX0gbmFtZT17bmFtZX0gY29udGVudD17Y29udGVudH0gLz5cclxuICAgICAgKSl9XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxufVxyXG5cclxuU0VPLmRlZmF1bHRQcm9wcyA9IHtcclxuICBsYW5nOiBgZW5gLFxyXG4gIG1ldGE6IFtdLFxyXG4gIGRlc2NyaXB0aW9uOiBgYCxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQnV0dG9uLCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyBCc0Fycm93TGVmdCwgQnNBcnJvd1JpZ2h0IH0gZnJvbSAncmVhY3QtaWNvbnMvYnMnO1xyXG5pbXBvcnQgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFNsaWNrQXJyb3cgPSAoeyBjbGFzc05hbWUsIG9uQ2xpY2ssIGNvbnRyb2wgfSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8QnV0dG9uXHJcbiAgICAgIHZhcmlhbnQ9XCJ0ZXh0XCJcclxuICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWV9XHJcbiAgICAgIHN4PXtzdHlsZXMucGFnaW5hdGlvbkJ1dHRvbn1cclxuICAgID5cclxuICAgICAge2NvbnRyb2wgPT09ICdwcmV2JyA/IChcclxuICAgICAgICA8RnJhZ21lbnQ+XHJcbiAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiB2YXJpYW50PVwic3R5bGVzLnNyT25seVwiPlxyXG4gICAgICAgICAgICBQcmV2XHJcbiAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICA8QnNBcnJvd0xlZnQgc2l6ZT1cIjMycHhcIiAvPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgdmFyaWFudD1cInN0eWxlcy5zck9ubHlcIj5cclxuICAgICAgICAgICAgTmV4dFxyXG4gICAgICAgICAgPC9UZXh0PlxyXG4gICAgICAgICAgPEJzQXJyb3dSaWdodCBzaXplPVwiMzJweFwiIC8+XHJcbiAgICAgICAgPC9GcmFnbWVudD5cclxuICAgICAgKX1cclxuICAgIDwvQnV0dG9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTbGlja0Fycm93O1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHBhZ2luYXRpb25CdXR0b246IHtcclxuICAgIG1pbkhlaWdodDogJzMwcHgnLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgJzpmb2N1cyc6IHtcclxuICAgICAgb3V0bGluZTogJzAgbm9uZScsXHJcbiAgICB9LFxyXG4gICAgc3ZnOiB7XHJcbiAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4ycyBlYXNlLWluLW91dCAwcycsXHJcbiAgICB9LFxyXG4gICAgJyYuc2xpY2stZGlzYWJsZWQnOiB7XHJcbiAgICAgIGNvbG9yOiAnI0JCQzdENycsXHJcbiAgICAgIHN2Zzoge1xyXG4gICAgICAgIHRyYW5zZm9ybTogJ3NjYWxlKDAuOCknLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcmLnNsaWNrLXByZXYnOiB7XHJcbiAgICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDE2cHgpJyxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICB9LFxyXG4gICAgJyYuc2xpY2stbmV4dCc6IHtcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCg1MCUpJyxcclxuICAgICAgcmlnaHQ6ICdjYWxjKDUwJSAtIDE2cHgpJyxcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBsYWJlbDogJ2dlcmVuY2lhQHNlcnZjb24xLmNvbScsXHJcbiAgICBpbmZvOiAnbWFpbHRvOmdlcmVuY2lhQHNlcnZjb24xLmNvbScsXHJcbiAgfSxcclxuICB7XHJcbiAgICBsYWJlbDogJyg4OCkgMzY2OS0xMTQ2JyxcclxuICAgIGluZm86ICd0ZWw6IDg4MzY2OTExNDYnLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICcoODgpIDM2NjktMTU3NycsXHJcbiAgICBpbmZvOiAndGVsOiA4ODM2NjkxNTc3JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnKDg4KSA5OTY2LTg2NTInLFxyXG4gICAgaW5mbzogJ2h0dHBzOi8vd2EubWUvNTU4ODk5NjY4NjUyJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgVG9wQmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMudG9wYmFyfT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cImNhcHRpb25cIj5cclxuICAgICAgICAgIE5vIG1lcmNhZG8gaMOhIG1haXMgZGUge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIwMDB9IGFub3MsIGF0ZW5kZW5kbyBhcyBleHBlY3RhdGl2YXMgZG9zIG5vc3NvcyBjbGllbnRlcy5cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgPFRleHQgYXM9XCJzcGFuXCIgY2xhc3NOYW1lPVwidGxkc1wiPlxyXG4gICAgICAgICAge2RhdGEubWFwKCh7bGFiZWwsIGluZm99LCBpKSA9PiAoXHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2luZm99IGtleT17aX0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRvcEJhcjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB0b3BiYXI6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgcHg6IFs2LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICAgIHB5OiBbJzEycHgnXSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIGRpc3BsYXk6IFsnZmxleCddLFxyXG4gICAgYWxpZ25JdGVtczogWydjZW50ZXInXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbJ3NwYWNlLWJldHdlZW4nXSxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgZm9udFNpemU6IFsxXSxcclxuICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgIG1heFdpZHRoOiAxMzY2LFxyXG4gICAgcGw6ICczMHB4JyxcclxuICAgIHByOiAnMzBweCcsXHJcbiAgICBtOiAnMCBhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBzcGFuOiB7XHJcbiAgICAgICcrIHNwYW4nOiB7XHJcbiAgICAgICAgbWw6IFs0XSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLmNhcHRpb24nOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG5cclxuICAgICAgd2lkdGg6IFsxOTksIG51bGwsIG51bGwsICdhdXRvJ10sXHJcbiAgICAgIG92ZXJmbG93OiBbJ2hpZGRlbicsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG4gICAgICB3aGl0ZVNwYWNlOiBbJ25vd3JhcCcsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG5cclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbXI6IFsyLCBudWxsLCBudWxsLCAzXSxcclxuICAgICAgICBtaW5XaWR0aDogMjAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgJy50bGRzJzoge1xyXG4gICAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCAnZmxleCddLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIH0sXHJcbiAgICBzdHJvbmc6IHtcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgJysgc3Ryb25nJzoge1xyXG4gICAgICAgIG1sOiAzLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIGE6IHtcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBmb250U2l6ZTogWycxM3B4JywgbnVsbCwgbnVsbCwgMSwgMV0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDQwMCxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZScsXHJcbiAgICAgIG1sOiBbMiwgbnVsbCwgbnVsbCwgbnVsbCwgMTAsIDEzXSxcclxuICAgICAgc3ZnOiB7XHJcbiAgICAgICAgbWw6IDEsXHJcbiAgICAgIH0sXHJcbiAgICAgICcmOm5vdCg6Zmlyc3QtY2hpbGQpJzoge1xyXG4gICAgICAgIG1sOiA0LFxyXG4gICAgICAgIHBsOiA0LFxyXG4gICAgICAgIGJvcmRlckxlZnQ6ICcycHggc29saWQgI2ZmZmZmZjIxJ1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJwYWdlcy9hcGkvYXBpXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvcm1hY29lc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmZ1bmN0aW9uIG9yZ2FuaXphck9icmlnYWNvZXNQb3JFc3RhZG8ob2JyaWdhY29lc0dlcmFsKSB7XHJcbiAgY29uc3QgZXNwaXJpdG9TYW50byA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE2OClcclxuICBjb25zdCBtYXRvR3Jvc3NvRG9TdWwgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSA1NDQzKVxyXG4gIGNvbnN0IG1pbmFzR2VyYWlzID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTY5KVxyXG4gIGNvbnN0IHJpb0dyYW5kZURvU3VsID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTU1KVxyXG4gIGNvbnN0IHBhcmFuYSA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1OClcclxuICBjb25zdCByaW9EZUphbmVpcm8gPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTMpXHJcbiAgY29uc3Qgc2FudGFDYXRhcmluYSA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1NClcclxuICBjb25zdCBzYW9QYXVsbyA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1MilcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVzcGlyaXRvU2FudG86IFsgLi4uZXNwaXJpdG9TYW50byBdLFxyXG4gICAgbWF0b0dyb3Nzb0RvU3VsOiBbIC4uLm1hdG9Hcm9zc29Eb1N1bCBdLFxyXG4gICAgbWluYXNHZXJhaXM6IFsgLi4ubWluYXNHZXJhaXMgXSxcclxuICAgIHJpb0dyYW5kZURvU3VsOiBbIC4uLnJpb0dyYW5kZURvU3VsIF0sXHJcbiAgICBwYXJhbmE6IFsgLi4ucGFyYW5hIF0sXHJcbiAgICByaW9EZUphbmVpcm86IFsgLi4ucmlvRGVKYW5laXJvIF0sXHJcbiAgICBzYW50YUNhdGFyaW5hOiBbIC4uLnNhbnRhQ2F0YXJpbmEgXSxcclxuICAgIHNhb1BhdWxvOiBbIC4uLnNhb1BhdWxvIF0sXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluZm9ybWFjb2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW25vdGljaWFzLCBzZXROb3RpY2lhc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbb2JyaWdhY29lcywgc2V0T2JyaWdhY29lc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYWdlbmRhLCBzZXRBZ2VuZGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2NvdGFjb2VzLCBzZXRDb3RhY29lc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVybDEgPSBhcGkuZ2V0KCdub3RpY2lhcycpXHJcbiAgICBjb25zdCB1cmwyID0gYXBpLmdldCgnY290YWNvZXMnKVxyXG4gICAgY29uc3QgdXJsMyA9IGFwaS5nZXQoJ29icmlnYWNvZXMnKVxyXG4gICAgY29uc3QgdXJsNCA9IGFwaS5nZXQoJ2FnZW5kYScpXHJcbiAgICBheGlvcy5hbGwoW3VybDEsIHVybDIsIHVybDMsIHVybDRdKVxyXG4gICAgICAudGhlbihheGlvcy5zcHJlYWQoKC4uLnJlc3BvbnNlcykgPT4ge1xyXG4gICAgICAgIHNldE5vdGljaWFzKHJlc3BvbnNlc1swXS5kYXRhKVxyXG4gICAgICAgIHNldENvdGFjb2VzKHJlc3BvbnNlc1sxXS5kYXRhKVxyXG4gICAgICAgIHNldE9icmlnYWNvZXMob3JnYW5pemFyT2JyaWdhY29lc1BvckVzdGFkbyhyZXNwb25zZXNbMl0uZGF0YSkpXHJcbiAgICAgICAgc2V0QWdlbmRhKHJlc3BvbnNlc1szXS5kYXRhKVxyXG4gICAgICB9KSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbmZvcm1hY29lc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbm90aWNpYXMsIG9icmlnYWNvZXMsIGFnZW5kYSwgY290YWNvZXMgfX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9JbmZvcm1hY29lc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5mb3JtYWNvZXMoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoSW5mb3JtYWNvZXNDb250ZXh0KVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn0iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnXHJcblxyXG5leHBvcnQgY29uc3QgYXBpID0gYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiAnaHR0cHM6Ly9zZXJ2Y29uMS52ZXJjZWwuYXBwL2FwaSdcclxufSlcclxuIiwiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgVGhlbWVQcm92aWRlciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHRoZW1lIGZyb20gJ3RoZW1lJztcclxuaW1wb3J0IFNFTyBmcm9tICdjb21wb25lbnRzL3Nlbyc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnY29tcG9uZW50cy9sYXlvdXQnO1xyXG5pbXBvcnQgQmFubmVyIGZyb20gJ3NlY3Rpb25zL2Jhbm5lcic7XHJcbmltcG9ydCBTZXJ2aWNlcyBmcm9tICdzZWN0aW9ucy9zZXJ2aWNlcyc7XHJcbmltcG9ydCBQcmVtaXVtRmVhdHVyZSBmcm9tICdzZWN0aW9ucy9wcmVtaXVtLWZlYXR1cmUnO1xyXG5pbXBvcnQgVWx0aW1hdGVGZWF0dXJlcyBmcm9tICdzZWN0aW9ucy91bHRpbWF0ZS1mZWF0dXJlJztcclxuaW1wb3J0IEN1c3RvbWVyU3VwcG9ydCBmcm9tICdzZWN0aW9ucy9jdXN0b21lci1zdXBwb3J0JztcclxuaW1wb3J0IFByaWNpbmcgZnJvbSAnc2VjdGlvbnMvcHJpY2luZyc7XHJcbmltcG9ydCBUZXN0aW1vbmlhbHMgZnJvbSAnc2VjdGlvbnMvdGVzdGltb25pYWxzJztcclxuaW1wb3J0IEJsb2cgZnJvbSAnc2VjdGlvbnMvYmxvZyc7XHJcbmltcG9ydCBGYXEgZnJvbSAnc2VjdGlvbnMvZmFxJztcclxuaW1wb3J0IFN1cHBvcnQgZnJvbSAnc2VjdGlvbnMvc3VwcG9ydCc7XHJcbmltcG9ydCBMZ3BkIGZyb20gJ2NvbXBvbmVudHMvbGdwZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbmRleFBhZ2UoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxUaGVtZVByb3ZpZGVyIHRoZW1lPXt0aGVtZX0+XHJcbiAgICAgIDxMYXlvdXQ+XHJcbiAgICAgICAgPFNFT1xyXG4gICAgICAgICAgdGl0bGU9XCJTRVJWQ09OIFNlcnZpw6dvcyBkZSBDb250YWJpbGlkYWRlXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiUHJlc3RhciBzZXJ2acOnb3MgY29udMOhYmVpcyBlIGFzc2Vzc29yaWEgZGUgcXVhbGlkYWRlLCBidXNjYW5kbyBhdGVuZGVyIGFzIG5lY2Vzc2lkYWRlcyBkZSBub3Nzb3MgY2xpZW50ZXMgZSBwYXJjZWlyb3NcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPEJhbm5lciAvPlxyXG4gICAgICAgIDxQcmVtaXVtRmVhdHVyZSAvPlxyXG4gICAgICAgIDxVbHRpbWF0ZUZlYXR1cmVzIC8+XHJcbiAgICAgICAgPEN1c3RvbWVyU3VwcG9ydCAvPlxyXG4gICAgICAgIDxQcmljaW5nIC8+XHJcbiAgICAgICAgey8qIDxUZXN0aW1vbmlhbHMgLz4gKi99XHJcbiAgICAgICAgPFNlcnZpY2VzIC8+XHJcbiAgICAgICAgPEJsb2cgLz5cclxuICAgICAgICA8TGdwZCAvPlxyXG4gICAgICAgIHsvKiA8U3VwcG9ydCAvPiAqL31cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgKTtcclxufVxyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHtcclxuICBqc3gsXHJcbiAgQm94LFxyXG4gIEZsZXgsXHJcbiAgVGV4dCxcclxuICBIZWFkaW5nLFxyXG4gIENvbnRhaW5lcixcclxufSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHJnYmEgfSBmcm9tICdwb2xpc2hlZCc7XHJcbmltcG9ydCBiYW5uZXIgZnJvbSAnYXNzZXRzL2ltYWdlcy9iYW5uZXIxLnBuZydcclxuaW1wb3J0IHsgQWlPdXRsaW5lV2hhdHNBcHAsIEFpT3V0bGluZVBob25lLCBBaU91dGxpbmVJbnN0YWdyYW0sIEFpT3V0bGluZUZhY2Vib29rLCBBaU91dGxpbmVNYWlsIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknXHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB7QW5pbWF0ZWR9IGZyb20gXCJyZWFjdC1hbmltYXRlZC1jc3NcIjtcclxuXHJcbmNvbnN0IEJhbm5lciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImhvbWVcIiBzeD17c3R5bGVzLnNlY3Rpb259ID5cclxuICAgICAgPENvbnRhaW5lcj5cclxuICAgICAgICA8QW5pbWF0ZWQgYW5pbWF0aW9uSW49XCJib3VuY2VJbkxlZnRcIiBhbmltYXRpb25PdXQ9XCJmYWRlT3V0XCIgaXNWaXNpYmxlPXt0cnVlfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5ncmlkfT5cclxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLmRvbWFpbkNhcmR9PlxyXG4gICAgICAgICAgICAgIDxIZWFkaW5nPlVtIG5vdm8gcGVyZmlsIGRlIDxUZXh0IGFzPVwic3BhblwiIGNvbG9yPSdzZWNvbmRhcnknPmVtcHJlc2EgY29udMOhYmlsPC9UZXh0PjwvSGVhZGluZz5cclxuICAgICAgICAgICAgICA8VGV4dCBhcz1cInBcIiBtYj17Nn0+XHJcbiAgICAgICAgICAgICAgICBRdWVyZW1vcyBlbnRlbmRlciBvIHF1ZSB2b2PDqiBwcmVjaXNhLCA8YnIgLz5cclxuICAgICAgICAgICAgICAgIEVudHJlIGVtIGNvbnRhdG9cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgPEZsZXggc3g9e3N0eWxlcy5pbnB1dEdyb3VwfT5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3dhLm1lLzU1ODg5OTY2ODY1MlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lV2hhdHNBcHAgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cInRlbDo4ODM2NjkxMTQ2XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBaU91dGxpbmVQaG9uZSBzaXplPVwiM2VtXCIvPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9zZXJ2Y29uamlqb2NhL1wiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lSW5zdGFncmFtIHNpemU9XCIzZW1cIi8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2VydmNvbmppam9jYVwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWlPdXRsaW5lRmFjZWJvb2sgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzpnZXJlbmNpYUBzZXJ2Y29uMS5jb21cIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEFpT3V0bGluZU1haWwgc2l6ZT1cIjNlbVwiLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvRmxleD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiA8Qm94IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy5pbGx1c3RyYXRpb259PlxyXG4gICAgICAgICAgICAgIDxJbWFnZSBzcmM9e3NlcnZlclJhY2t9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwic2V2ZXItcmFja1wiIC8+XHJcbiAgICAgICAgICAgIDwvQm94PiAqL31cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgIDwvQW5pbWF0ZWQ+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEJhbm5lcjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2Jhbm5lcn0pYCxcclxuICAgIHB0OiBbMTcsIG51bGwsIG51bGwsIDIwLCBudWxsXSxcclxuICAgIHBiOiBbNiwgbnVsbCwgbnVsbCwgMTIsIDE2XSxcclxuICB9LFxyXG4gIGdyaWQ6IHtcclxuICAgIGdhcDogWyczMHB4IDYwcHgnLCBudWxsLCBudWxsLCBudWxsLCAnMzBweCA0MHB4JywgJzMwcHggNjBweCddLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgbWluSGVpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzY2dmgnLCAnODF2aCddLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICcxZnInLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICBudWxsLFxyXG4gICAgICAncmVwZWF0KDIsIDFmciknLFxyXG4gICAgICAnNTEwcHggMWZyJyxcclxuICAgIF0sXHJcbiAgfSxcclxuICBkb21haW5DYXJkOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmZmZmYmMnLFxyXG4gICAgYm94U2hhZG93OiAnMHB4IDI0cHggNTBweCByZ2JhKDU0LCA5MSwgMTI1LCAwLjA1KScsXHJcbiAgICBib3JkZXJSYWRpdXM6IGAxNXB4IDMwcHhgLFxyXG4gICAgcDogWyczMHB4IDI1cHggNTBweCcsIG51bGwsIG51bGwsICc0MHB4IDQwcHggNjBweCddLFxyXG4gICAgbTogW251bGwsIG51bGwsIG51bGwsICcwIGF1dG8nLCAndW5zZXQnXSxcclxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNDgwLCAnbm9uZSddLFxyXG4gICAgaDI6IHtcclxuICAgICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgICBmb250U2l6ZTogWzgsIG51bGwsIG51bGwsIDEwLCA5LCAxNF0sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzYsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgbWI6IFs1LCBudWxsLCBudWxsLCA3LCA4XSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbnB1dEdyb3VwOiB7XHJcbiAgICBhOiB7XHJcbiAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICBjb2xvcjogJ3ByaW1hcnknLFxyXG4gICAgICAnOmhvdmVyJzoge1xyXG4gICAgICAgIGNvbG9yOiAnc2Vjb25kYXJ5JyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIHB4OiBbMywgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXI6IDAsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcclxuICAgICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgICAgcDogMCxcclxuICAgICAgJzpmb2N1cyc6IHtcclxuICAgICAgICBib3hTaGFkb3c6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgICAgJzo6cGxhY2Vob2xkZXInOiB7XHJcbiAgICAgICAgZm9udFNpemU6ICcxNXB4JyxcclxuICAgICAgICBsaW5lSGVpZ2h0OiAxLjMzLFxyXG4gICAgICAgIGNvbG9yOiByZ2JhKCcjMDIwNzNFJywgMC40KSxcclxuICAgICAgfSxcclxuICAgICAgJzotd2Via2l0LWF1dG9maWxsJzoge1xyXG4gICAgICAgIFdlYmtpdEJveFNoYWRvdzogJzAgMCAwIDMwcHggd2hpdGUgaW5zZXQgIWltcG9ydGFudCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0OiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBmb250U2l6ZTogWzAsIG51bGwsIG51bGwsICcxNXB4J10sXHJcbiAgICAgIGxpbmVIZWlnaHQ6IDEuMzMsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgICAgbWluV2lkdGg6IFs2MCwgbnVsbCwgbnVsbCwgNzVdLFxyXG4gICAgICBwOiAwLFxyXG4gICAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcclxuICAgICAgJzpmb2N1cyc6IHtcclxuICAgICAgICBvdXRsaW5lOiAwLFxyXG4gICAgICB9LFxyXG4gICAgICAnKyBzdmcnOiB7XHJcbiAgICAgICAgY29sb3I6ICcjQTZBOEJCJyxcclxuICAgICAgICBoZWlnaHQ6IDQwLFxyXG4gICAgICAgIHdpZHRoOiA0MCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBzdWJtaXQ6IHtcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICBtdDogWzRdLFxyXG4gICAgbWluSGVpZ2h0OiBbNDUsIG51bGwsIG51bGwsIDYwXSxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBub3RlOiB7XHJcbiAgICBmb250U3R5bGU6ICdpdGFsaWMnLFxyXG4gICAgZm9udFNpemU6IFswLCBudWxsLCBudWxsLCAnMTVweCddLFxyXG4gICAgbGluZUhlaWdodDogMS4zMyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogcmdiYSgnIzAyMDczRScsIDAuNSksXHJcbiAgICBtdDogWzRdLFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBCdXR0b24sIEZsZXggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTbGlkZXIgZnJvbSAncmVhY3Qtc2xpY2snO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgQmxvZ1Bvc3QgZnJvbSAnY29tcG9uZW50cy9jYXJkcy9ibG9nLXBvc3QnO1xyXG5pbXBvcnQgU2xpY2tBcnJvdyBmcm9tICdjb21wb25lbnRzL3NsaWNrLWFycm93JztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcbmltcG9ydCB7IHVzZUluZm9ybWFjb2VzIH0gZnJvbSAnaG9va3MvdXNlSW5mb3JtYWNvZXMnO1xyXG5cclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBzcGVlZDogNTAwLFxyXG4gIG5leHRBcnJvdzogPFNsaWNrQXJyb3cgY29udHJvbD1cIm5leHRcIiAvPixcclxuICBwcmV2QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJwcmV2XCIgLz4sXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDAwMDAsXHJcbiAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgc2V0dGluZ3M6ICd1bnNsaWNrJyxcclxuICAgIH0sXHJcbiAgXSxcclxufTtcclxuXHJcbmNvbnN0IEJsb2cgPSAoKSA9PiB7XHJcbiAgY29uc3QgeyBub3RpY2lhcyB9ID0gdXNlSW5mb3JtYWNvZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cImJsb2dcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgc2xvZ2FuPVwiXCJcclxuICAgICAgICAgIHRpdGxlPVwiw5psdGltYXMgTm90w61jaWFzXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwic2xpZGVJblJpZ2h0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgIDxTbGlkZXIgc3g9e3N0eWxlcy5ncmlkfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICB7bm90aWNpYXM/LnNsaWNlKDAsIDMpLm1hcCgocG9zdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxCbG9nUG9zdCBrZXk9e3Bvc3QubW5fY29kaWdvfSBwb3N0PXtwb3N0fSAvPlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgICAgPEZsZXggc3g9e3sganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgIDxCdXR0b24gc3g9e3N0eWxlcy5idXR0b259IGFzPVwiYVwiIGhyZWY9XCIvbm90aWNpYXNcIj5NYWlzIE5vdMOtY2lhczwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9GbGV4PlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBCbG9nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbMTIsIG51bGwsIG51bGwsIDEyLCAxNV0sXHJcbiAgICBwYjogWzYsIG51bGwsIG51bGwsIDE2LCAxMCwgMTRdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMF0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBnYXA6IFs2LCBudWxsLCBudWxsLCBudWxsLCA2LCAxMF0sXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1zdGFydCcsXHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIC0zLCAndW5zZXQnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFsncmVwZWF0KDEsIDFmciknLCBudWxsLCBudWxsLCBudWxsLCAncmVwZWF0KDMsIDFmciknXSxcclxuICAgICcuc2xpY2stYXJyb3cnOiB7XHJcbiAgICAgIGJvdHRvbTogW251bGwsIG51bGwsIG51bGwsIC0xNCwgJ3Vuc2V0J10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtdDogWzhdLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IENvbnRhaW5lciwgQm94LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tICd0aGVtZS11aSc7XHJcblxyXG5pbXBvcnQgQmdTaGFwZSBmcm9tICdhc3NldHMvaW1hZ2VzL3NoYXBlLTEuc3ZnJztcclxuaW1wb3J0IHNoYXBlVG9wIGZyb20gJ2Fzc2V0cy9pbWFnZXMvaWNvbnMvc2hhcGUtdG9wLnBuZyc7XHJcbmltcG9ydCBzaGFwZUJvdHRvbSBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL3NoYXBlLWJvdHRvbS5wbmcnO1xyXG5pbXBvcnQgeyBBaU91dGxpbmVXaGF0c0FwcCwgQWlPdXRsaW5lUGhvbmUsIEFpT3V0bGluZUluc3RhZ3JhbSwgQWlPdXRsaW5lTWFpbCwgQWlPdXRsaW5lRmFjZWJvb2sgfSBmcm9tICdyZWFjdC1pY29ucy9haSdcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IENhbGxUb0FjdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gaWQ9XCJjb250YXRvXCIgc3g9e3N0eWxlcy5zZWN0aW9ufT5cclxuICAgICAgPENvbnRhaW5lciBzeD17c3R5bGVzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnRCb3h9PlxyXG4gICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy5oZWFkaW5nfT5cclxuICAgICAgICAgICAgUXVlcmVtb3MgZW50ZW5kZXIgbyBxdWUgdm9jw6ogcHJlY2lzYVxyXG4gICAgICAgICAgPC9IZWFkaW5nPlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmJ0bldyYXBwZXJ9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93YS5tZS81NTg4OTk2Njg2NTJcIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVXaGF0c0FwcCBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cInRlbDo4ODM2NjkxMTQ2XCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lUGhvbmUgc2l6ZT1cIjNlbVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NlcnZjb25qaWpvY2EvXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICA8QWlPdXRsaW5lSW5zdGFncmFtIHNpemU9XCIzZW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NlcnZjb25qaWpvY2FcIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVGYWNlYm9vayBzaXplPVwiM2VtXCIgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIm1haWx0bzpnZXJlbmNpYUBzZXJ2Y29uMS5jb21cIj5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgIDxBaU91dGxpbmVNYWlsIHNpemU9XCIzZW1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IENhbGxUb0FjdGlvbjtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHpJbmRleDogMSxcclxuICAgICc6YmVmb3JlJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjlGQUZDJyxcclxuICAgICAgYm90dG9tOiAwLFxyXG4gICAgICBjb250ZW50OiBgJydgLFxyXG4gICAgICBoZWlnaHQ6ICc1MCUnLFxyXG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgICAgbGVmdDogMCxcclxuICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIHpJbmRleDogJy0xJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIHB4OiBbMCwgJzAgIWltcG9ydGFudCcsICczMHB4ICFpbXBvcnRhbnQnXSxcclxuICB9LFxyXG4gIGNvbnRlbnRCb3g6IHtcclxuICAgIHBhZGRpbmc6IFtcclxuICAgICAgJzM1cHggNjBweCA2MHB4JyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzQwcHggMzBweCA0NXB4JyxcclxuICAgICAgJzU1cHggMzBweCA2MHB4JyxcclxuICAgICAgJzU1cHggNTBweCA2MHB4JyxcclxuICAgIF0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMTgzNjU2JyxcclxuICAgIGJhY2tncm91bmRJbWFnZTogWydub25lJywgbnVsbCwgbnVsbCwgYHVybCgke0JnU2hhcGV9KWBdLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICc2MCUgY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRTaXplOiBbJzEyMHB4JywgbnVsbCwgbnVsbCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgIGJvcmRlclJhZGl1czogJzdweCcsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCBudWxsLCBudWxsLCAncm93J10sXHJcbiAgICBqdXN0aWZ5Q29udGVudDogWydjZW50ZXInLCBudWxsLCBudWxsLCAnc3BhY2UtYmV0d2VlbiddLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgZm9udFNpemU6IFszLCA3LCA4LCA3LCAxMV0sXHJcbiAgICBmb250RmFtaWx5OiAnQnJlZSBTZXJpZiwgc2VyaWYnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICBsaW5lSGVpZ2h0OiBbMS40LCAxLjUzXSxcclxuICAgIG1heFdpZHRoOiBbJzEwMCUnLCAnODAlJywgbnVsbCwgMzQwLCAnNTAlJywgJzQ1JSddLFxyXG4gICAgbWI6IFsxMSwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgfSxcclxuICBidG5XcmFwcGVyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICc6YmVmb3JlLCA6YWZ0ZXInOiB7XHJcbiAgICAgIGNvbnRlbnQ6IGAnJ2AsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgICB3aWR0aDogJzczcHgnLFxyXG4gICAgICBoZWlnaHQ6ICcyNnB4JyxcclxuICAgICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICAgIGxlZnQ6ICc1MCUnLFxyXG4gICAgICB0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKC01MCUpJyxcclxuICAgICAgYmFja2dyb3VuZFNpemU6IFsnNTUlJywgbnVsbCwgbnVsbCwgJzEwMCUnXSxcclxuICAgIH0sXHJcbiAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7c2hhcGVUb3B9KWAsXHJcbiAgICAgIHRvcDogJy0yOHB4JyxcclxuICAgIH0sXHJcbiAgICAnOmFmdGVyJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtzaGFwZUJvdHRvbX0pYCxcclxuICAgICAgYm90dG9tOiAnLTI4cHgnLFxyXG4gICAgfSxcclxuICAgIGJ1dHRvbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMCwgbnVsbCwgbnVsbCwgbnVsbCwgMl0sXHJcbiAgICAgIG1pbkhlaWdodDogWzQwLCBudWxsLCBudWxsLCA0NSwgNjBdLFxyXG4gICAgICBwYWRkaW5nOiBbJzAgMjhweCcsIG51bGwsIG51bGwsIG51bGwsICcwIDQwcHgnXSxcclxuICAgICAgdGV4dFRyYW5zZm9ybTogJ3VwcGVyY2FzZScsXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJyNhMmFlYmInLFxyXG4gICAgICAnJjpob3Zlcic6IHtcclxuICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgfSxcclxuICAgICAgbXQ6IDEsXHJcbiAgICB9XHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEdyaWQsIEJ1dHRvbiwgSGVhZGluZywgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgSW9Jb3NDaGVja21hcmtDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9pbyc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuaW1wb3J0IHN1cHBvcnQgZnJvbSAnYXNzZXRzL2ltYWdlcy9zdXBwb3J0LnBuZyc7XHJcbmltcG9ydCBjaGVjayBmcm9tICdhc3NldHMvaW1hZ2VzL2ljb25zL2NoZWNrLnBuZydcclxuXHJcbmNvbnN0IGxpc3QgPSBbXHJcbiAgJ0NhbGVuZMOhcmlvIGNvbnRlbmRvIHRvZGFzIMOgcyBvYnJpZ2HDp8O1ZXMgZGEgZW1wcmVzYSBwZXJhbnRlIGEgbGVnaXNsYcOnw6NvJyxcclxuICAnUG9zc2liaWxpZGFkZSBkZSBlbnZpYXIgc29saWNpdGHDp8O1ZXMgcGFyYSBvIEVzY3JpdMOzcmlvIENvbnTDoWJpbCBlIHRhbWLDqW0gcmVzcG9uZGVyIGFzIGRlbWFuZGFzIGVudmlhZGFzJyxcclxuICAnR2VyZW5jaWFtZW50byBFbGV0csO0bmljbyBkZSBkb2N1bWVudG9zIG9uZGUgdG9kbyBkb2N1bWVudG8gZW52aWFkbyBwZWxvIGFwcCDDqSBhcm1hemVuYWRvIGVtIENsb3VkJyxcclxuICAnUG9yIEludGVybcOpZGlvIGRvIGFwcCBhIEVtcHJlc2EgcmVjZWJlcsOhIGNvbXVuaWNhZG9zIGRvIGVzY3JpdMOzcmlvIGNvbnTDoWJpbCBlbSBkaXZlcnNhcyBvcmllbnRhw6fDtWVzIGZpc2NhaXMnLFxyXG5dO1xyXG5cclxuY29uc3QgQ3VzdG9tZXJTdXBwb3J0ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmlsbHVzdHJhdGlvbn0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3N1cHBvcnR9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwic3VwcG9ydFwiIC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5jb250ZW50fT5cclxuICAgICAgICAgICAgPEhlYWRpbmcgc3g9e3N0eWxlcy50aXRsZX0+XHJcbiAgICAgICAgICAgICAgQmFpeGUgbm9zc28gQXBwXHJcbiAgICAgICAgICAgIDwvSGVhZGluZz5cclxuICAgICAgICAgICAgPFRleHQgYXM9XCJwXCIgc3g9e3N0eWxlcy5zdW1tYXJ5fT5cclxuICAgICAgICAgICAgICBQb3NzdcOtbW9zIGRpdmVyc2FzIHZhbnRhZ2VucyBlIGZhY2lsaWRhZGVzIG5vIG5vc3NvIGFwcFxyXG4gICAgICAgICAgICA8L1RleHQ+XHJcblxyXG4gICAgICAgICAgICA8R3JpZCBzeD17c3R5bGVzLmxpc3R9IGFzPVwidWxcIj5cclxuICAgICAgICAgICAgICB7bGlzdC5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxUZXh0IGFzPVwibGlcIiBrZXk9e2l9PlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dCBhcz1cInNwYW5cIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPElvSW9zQ2hlY2ttYXJrQ2lyY2xlXHJcbiAgICAgICAgICAgICAgICAgICAgICBzeD17eyBjb2xvcjogJ3NlY29uZGFyeScsIG1yOiAyIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICBzaXplPVwiMmVtXCJcclxuICAgICAgICAgICAgICAgICAgICAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17Y2hlY2t9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW19XHJcbiAgICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEN1c3RvbWVyU3VwcG9ydDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIDYsIG51bGwsIDE0LCAxNl0sXHJcbiAgICBwYjogW251bGwsIG51bGwsIG51bGwsIDgsIDBdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzAgMTBweCddLFxyXG4gICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgJ2dyaWQnXSxcclxuICAgIGZsZXhEaXJlY3Rpb246IFsnY29sdW1uLXJldmVyc2UnLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAnMWZyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzFmcicsXHJcbiAgICAgICc0NzBweCAxZnInLFxyXG4gICAgICAnNjAwcHggMWZyJyxcclxuICAgICAgJzc2MHB4IDFmcicsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgaWxsdXN0cmF0aW9uOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG10OiBbMiwgbnVsbCwgbnVsbCwgMCwgNCwgMF0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgbWF4V2lkdGg6IFsnMTAwJScsIG51bGwsIG51bGwsIG51bGwsIG51bGwsICcxMDAlJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgbWFyZ2luVG9wOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgLTE2XSxcclxuICAgIG1heFdpZHRoOiBbbnVsbCwgbnVsbCwgbnVsbCwgNTYwLCAnbm9uZSddLFxyXG4gICAgbTogW251bGwsIG51bGwsIG51bGwsICcwIGF1dG8nLCAndW5zZXQnXSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgZm9udFNpemU6IFs1LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgbnVsbCwgMTFdLFxyXG4gICAgbGluZUhlaWdodDogMS41MyxcclxuICAgIGxldHRlclNwYWNpbmc6IFsnLTAuNXB4JywgbnVsbCwgbnVsbCwgJy0xcHgnXSxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgc3Bhbjoge1xyXG4gICAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgICAgcHg6IDIsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc3VtbWFyeToge1xyXG4gICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgIGZvbnRTaXplOiBbMSwgbnVsbCwgbnVsbCwgMiwgJzE1cHgnLCAyXSxcclxuICAgIGxpbmVIZWlnaHQ6IFsxLjg2LCBudWxsLCBudWxsLCBudWxsLCAxLjg2LCAyLjI1XSxcclxuICAgIG1heFdpZHRoOiA0NzAsXHJcbiAgICBtOiBbbnVsbCwgbnVsbCwgbnVsbCwgJzIwcHggYXV0byAwJywgJzE1cHggMCAwJywgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG4gIGxpc3Q6IHtcclxuICAgIGdhcDogJzAgMThweCcsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbJzFmcicsIG51bGwsIG51bGwsICcxZnInXSxcclxuICAgIGp1c3RpZnlDb250ZW50OiBbbnVsbCwgbnVsbCwgbnVsbCwgJ2NlbnRlcicsICd1bnNldCddLFxyXG4gICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICBtdDogWzQsIG51bGwsIG51bGwsIDUsIDQsIDVdLFxyXG4gICAgcDogMCxcclxuICAgIGxpOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMCwgMSwgbnVsbCwgMiwgJzE1cHgnLCAyXSxcclxuICAgICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCBudWxsLCBudWxsLCAxLjUsIDEuNV0sXHJcbiAgICAgIG10OiA0LFxyXG4gICAgICBzcGFuOiB7XHJcbiAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgIGdhcDogMlxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgTWFzb25yeSBmcm9tICdyZWFjdC1tYXNvbnJ5LWNvbXBvbmVudCc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBGYXFJdGVtIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvZmFxLWl0ZW0nO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICB7XHJcbiAgICBpZDogMSxcclxuICAgIHF1ZXM6ICdXaGljaCBkb21haW4gc2hvdWxkIEkgcHVyY2hhc2U/JyxcclxuICAgIGFuczogYFdlIG1ha2UgaXQgZWFzeSB0byBtb3ZlIHRvIENvbWV0TmluZS4gU2ltcGx5IGNvbnRhY3QgdXMgYW5kIHdlJ2xsIG1vdmUgeW91ciBob3N0aW5nIGFjY291bnQgZnJvbSBhbnkgb3RoZXIgcHJvdmlkZXIsIHJlZ2FyZGxlc3Mgb2YgdGhlIGNvbnRyb2wgcGFuZWwuIElmIGF0IGFueXRpbWUgeW91ciB3ZWJzaXRlIGlzIGRvd24gZm9yIG1vcmUgdGhhbiAwLjElIHJlc3VsdGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIHF1ZXM6ICdXaGF0IGFyZSBzb21lIHRpcHMgd2hlbiBjaG9vc2luZyBhIG5hbWU/JyxcclxuICAgIGFuczogYEdldCB5b3VyIHdlYnNpdGUgdGVzdHMgZGVsaXZlcmVkIGF0IHRoZSBob21lIGNvbGxlY3QgYSBzYW1wbGUgZnJvbSBtYW5hZ2VtZW50IG5ld3MuIEdldCB5b3VyIGJsb29kIHRlc3RzIGRlbGl2ZXJlZCBhdCB0aGUgaG9tZSBjb2xsZWN0IGEgc2FtcGxlIGZyb20gbWFuYWdlbWVudCBuZXdzLiBHZXQgeW91ciBibG9vZCB0ZXN0cyBkZWxpdmVyZWQgYXQgdGhlIGhvbWUgY29sbGVjdCBhIHNhbXBsZSBmcm9tIG1hbmFnZW1lbnQgbmV3cy5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBxdWVzOiAnV2hhdCBpZiBJIG5lZWQgaGVscCBjaG9vc2luZyB0aGUgcmlnaHQgZG9tYWluPycsXHJcbiAgICBhbnM6IGBDcmVhdGUgYSBodWIgZm9yIGNyb3NzLWZ1bmN0aW9uYWwgd29yayB0aGF0IGFsc28gd29ya3Mgd2l0aCBhbGwgeW91ciBvdGhlciB0b29scy4gQ2VudHJhbGl6ZSBhbmQgc3RhbmRhcmRpemUgY29tbXVuaWNhdGlvbiB3aXRoIE1pcm8uIEFsbCBwcmVtaXVtIGZ1bmN0aW9uYWwgYXJlIGluY2x1ZGVkIGhlcmUgd2l0aCB1cGRhdGVzLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNCxcclxuICAgIHF1ZXM6ICdDYW4gSSB1cGdyYWRlIG9yIGRvd25ncmFkZSBteSB3ZWIgaG9zdGluZyBwbGFuJyxcclxuICAgIGFuczogYFRoZSBwcmljaW5nIG1hZGUgbWUgYSBsaXR0bGUgaGVzaXRhbnQgYXQgZmlyc3QgYnV0IEkgaGF2ZSBiZWVuIHBsZWFzYW50bHkgc3VycHJpc2VkIGJ5IHRoZSBsZXZlbCBvZiBjYXJlIGdpdmVuIGJ5IENvbWV0TmluZS5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDUsXHJcbiAgICBxdWVzOiAnSG93IGRvIEkgdXBncmFkZSB0aGUgc3RvcmFnZSBjYXBhY2l0eSBvZiBteSBob3N0aW5nIHBsYW4/JyxcclxuICAgIGFuczogYFN0b3AgeW91ciB2aWV3ZXJzIGZyb20gZ2V0dGluZyBkaXN0cmFjdGVkLiBQdWJsaXNoIHZpZGVvcyB0byB5b3VyIG93biBDaGFubmVsIGFuZCByZXN0IGVhc3kga25vd2luZyB2aWV3ZXJzIHdvbuKAmXQgYmUgYW5ub3llZCBieSBhZHMgb3IgcHVsbGVkIGRvd24gYSByYWJiaXQgaG9sZSBvZiB1bnJlbGF0ZWQgdmlkZW9zLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNixcclxuICAgIHF1ZXM6ICdXaGF0IGlzIGluIEluTW90aW9uIEhvc3RpbmfigJlzIHVwdGltZSByYXRlPycsXHJcbiAgICBhbnM6IGBEZXNpZ25lZCB3aXRoIGJlZ2lubmVycyBpbiBtaW5kIGFuZCBwYWNrZWQgd2l0aCBhZHZhbmNlZCBmZWF0dXJlcyBkZXZlbG9wZXJzIHdpbGwgbG92ZS4gU3RhcnQgd2l0aCBhIHF1aWNrIGFuZCBzaW1wbGUgaW5zdGFsbGAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogNyxcclxuICAgIHF1ZXM6ICdMZWFybiBmcm9tIGNvbW11bml0eSBvbiBCcmFuZHdhZ29uJyxcclxuICAgIGFuczogYEJyaWFuIEhhbGxpZ2FuIGtub3dzIHRoYXQgeW91IG5lZWQgbW9yZSB0aGFuIGEgZ3JlYXQgcHJvZHVjdCB0byBoYXZlIGEgZ3JlYXQgYnJhbmQuIEhlYXIgaGlzIHRob3VnaHRzICYgc2NvcmUgYSBwZWVrIGF0IG91ciB3YWdvbi5gLFxyXG4gIH0sXHJcbl07XHJcblxyXG5jb25zdCBtYXNvbnJ5T3B0aW9ucyA9IHsgb3JpZ2luVG9wOiB0cnVlIH07XHJcblxyXG5jb25zdCBGYXEgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJmYXFcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgc3g9e3N0eWxlcy5oZWFkaW5nfVxyXG4gICAgICAgICAgc2xvZ2FuPVwiR2V0IHlvdXJzIHF1ZXN0aW9uIGFuc3dlclwiXHJcbiAgICAgICAgICB0aXRsZT1cIkZyZXF1YW50bHkgYXNrZWQgcXVlc3Rpb25cIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPE1hc29ucnkgb3B0aW9ucz17bWFzb25yeU9wdGlvbnN9IHN4PXtzdHlsZXMuZ3JpZH0+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxGYXFJdGVtIGtleT17aXRlbS5pZH0gZmFxPXtpdGVtfSBjbGFzc05hbWU9XCJmYXEtaXRlbVwiIC8+O1xyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9NYXNvbnJ5PlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYXE7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTRdLFxyXG4gICAgcGI6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAxMCwgNl0sXHJcbiAgfSxcclxuICBncmlkOiB7XHJcbiAgICBteDogW251bGwsIG51bGwsIG51bGwsIC02LCAtOCwgJ3Vuc2V0J10sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBBY2NvcmRpb24gZnJvbSAnY29tcG9uZW50cy9hY2NvcmRpb24vYWNjb3JkaW9uJztcclxuaW1wb3J0IHF1ZW1Tb21vcyBmcm9tICdhc3NldHMvaW1hZ2VzL3F1ZW0tc29tb3MucG5nJztcclxuaW1wb3J0IFNjcm9sbEFuaW1hdGlvbiBmcm9tICdyZWFjdC1hbmltYXRlLW9uLXNjcm9sbCc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiAnTWlzc8OjbycsXHJcbiAgICBjb250ZW50czogKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIFByZXN0YXIgc2VydmnDp29zIGNvbnTDoWJlaXMgZSBhc3Nlc3NvcmlhIGRlIHF1YWxpZGFkZSwgYnVzY2FuZG8gYXRlbmRlciBhcyBuZWNlc3NpZGFkZXMgZGUgbm9zc29zIGNsaWVudGVzIGUgcGFyY2Vpcm9zLCBhZ3JlZ2FuZG8gdmFsb3Jlcywgc2VndXJhbsOnYSBlIHRyYW5xdWlsaWRhZGUgbm9zIHNldXMgZW1wcmVlbmRpbWVudG9zIGUganVudG9zIHNlcm1vcyBpbnN0cnVtZW50byBkZSByZWZlcsOqbmNpYSBuYSB0cmFuc2Zvcm1hw6fDo28gZWNvbsO0bWljYSBlIHNvY2lhbCBuYSByZWdpw6NvLCBjb20gdmlzaWJpbGlkYWRlIG5hY2lvbmFsIGUgaW50ZXJuYWNpb25hbC5cclxuICAgICAgPC9kaXY+XHJcbiAgICApLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6ICdWaXPDo28nLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICBTZXIgcmVmZXLDqm5jaWEgZGUgZXhjZWzDqm5jaWEgZW0gc2VydmnDp29zIGRlIGNvbnRhYmlsaWRhZGUgZSBzZSBtYW50ZXIgZW50cmUgb3MgcHJpbmNpcGFpcyBkYSByZWdpw6NvLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYFZhbG9yZXNgLFxyXG4gICAgY29udGVudHM6IChcclxuICAgICAgPGRpdj5cclxuICAgICAgICDDiXRpY2EsIHF1YWxpZGFkZSwgY29tcHJvbWV0aW1lbnRvLCBzZXJpZWRhZGUsIGdlc3TDo28gY29tcGFydGlsaGFkYSwgcmVzcG9uc2FiaWxpZGFkZSBzb2Npb2Vjb27DtG1pY2EgZSB0cmFkacOnw6NvLlxyXG4gICAgICA8L2Rpdj5cclxuICAgICksXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFByZW1pdW1GZWF0dXJlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGlkPVwicXVlbS1zb21vc1wiIGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxCb3hcclxuICAgICAgICBhcz1cImZpZ3VyZVwiXHJcbiAgICAgICAgc3g9e3sgLi4uc3R5bGVzLmlsbHVzdHJhdGlvbiwgYmFja2dyb3VuZDogYHVybCgke3F1ZW1Tb21vc30pIG5vLXJlcGVhdGAgfX1cclxuICAgICAgLz5cclxuICAgICAgPFNjcm9sbEFuaW1hdGlvbiBhbmltYXRlSW49XCJib3VuY2VJblJpZ2h0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5hY2NvcmRpb25Hcm91cH0+XHJcbiAgICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgICAgIHN4PXtzdHlsZXMuaGVhZGluZ31cclxuICAgICAgICAgICAgICBzbG9nYW49XCJTZXJ2aWNvbiBDb250YWJpbGlkYWRlXCJcclxuICAgICAgICAgICAgICB0aXRsZT1cIkNvbmhlw6dhIHVtIHBvdXF1aW5obyBzb2JyZSBub3NzYSBoaXN0w7NyaWFcIlxyXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiU29tb3MgdW1hIGVtcHJlc2Egdm9sdGFkYSBwYXJhIG8gcmFtbyBjb250w6FiaWwsIGZpc2NhbCBlIHRyYWJhbGhpc3RhLCBjb21wb3N0YSBwb3IgcHJvZmlzc2lvbmFpcywgcHJlc3RhbmRvIHNlcnZpw6dvcyBkZSBxdWFsaWRhZGUgZSBlZmljacOqbmNpYSBjb20gdW0gc2lzdGVtYSBvcGVyYWNpb25hbCBkZSB0cmFiYWxobyB0b3RhbG1lbnRlIGluZm9ybWF0aXphZG8uIE5vIG1lcmNhZG8gZGVzZGUgRmV2ZXJlaXJvIGRlIDIwMDAsIGVzdGFtb3Mgc2VtcHJlIGJ1c2NhbmRvIG9zIHJlcXVpc2l0b3MgcGFyYSBhdGVuZGVyIGFzIGV4cGVjdGF0aXZhcyBkb3Mgbm9zc29zIGNsaWVudGVzLlwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxBY2NvcmRpb24gaXRlbXM9e2RhdGF9IC8+XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgPC9TY3JvbGxBbmltYXRpb24+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJlbWl1bUZlYXR1cmU7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcGI6IFsxMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMTQsIDE4XSxcclxuICAgIHB0OiBbNiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgNl0sXHJcbiAgICAvLyBtYXJnaW5Cb3R0b206IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnLTg1cHgnXSxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgekluZGV4OiAwLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnXSxcclxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxuICBpbGx1c3RyYXRpb246IHtcclxuICAgIGJhY2tncm91bmRTaXplOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJzYyJScsICc1MCUnLCAnNjYlJywgJzYyJSddLFxyXG4gICAgJ0BtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTYwMXB4KSc6IHtcclxuICAgICAgYmFja2dyb3VuZFNpemU6ICc2MCUnLFxyXG4gICAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdib3R0b20gbGVmdCcsXHJcbiAgICB9LFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiBbXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICctODBweCAwJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzAgMCcsXHJcbiAgICAgICctMTQwcHggMHB4JyxcclxuICAgIF0sXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBkaXNwbGF5OiBbJ25vbmUnLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnYmxvY2snXSxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGFjY29yZGlvbkdyb3VwOiB7XHJcbiAgICBtYXhXaWR0aDogW251bGwsIG51bGwsIG51bGwsIDUyMCwgNjEwLCA0MTAsIG51bGwsIDQ1MCwgNDEwXSxcclxuICAgIG06IFtudWxsLCBudWxsLCBudWxsLCAnMCBhdXRvJywgbnVsbCwgJzAnLCBudWxsXSxcclxuICAgIC8vIG1hcmdpbkxlZnQ6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsIG51bGwsIDEwLCAxMiwgMTZdLFxyXG4gICAgLy8gbWFyZ2luUmlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCAnYXV0bycsIG51bGwsICd1bnNldCddLFxyXG4gICAgLy8gcHg6IFs2LCBudWxsLCBudWxsLCBudWxsLCAwXSxcclxuICB9LFxyXG4gIGhlYWRpbmc6IHtcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA0NDAsIDQ1MCwgJ25vbmUnXSxcclxuICAgIG1iOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNiwgNCwgNl0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250U2l6ZTogWzQsIG51bGwsIG51bGwsIDgsIDEwLCA4LCAxMl0sXHJcbiAgICAgIGZvbnRXZWlnaHQ6IDUwMCxcclxuICAgICAgbGluZUhlaWdodDogMS41LFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICAgIG1heFdpZHRoOiBbMjUwLCBudWxsLCBudWxsLCAnbm9uZSddLFxyXG4gICAgICBtYXJnaW46IFsnMCBhdXRvJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICAgIG10OiAxMlxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBTZWN0aW9uSGVhZGluZyBmcm9tICdjb21wb25lbnRzL3NlY3Rpb24taGVhZGluZyc7XHJcbmltcG9ydCBQcmljZVRhYmxlIGZyb20gJ2NvbXBvbmVudHMvY2FyZHMvcHJpY2UtdGFibGUnO1xyXG5pbXBvcnQgU2xpY2tBcnJvdyBmcm9tICdjb21wb25lbnRzL3NsaWNrLWFycm93JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnXHJcbmltcG9ydCBJbWFnZUFnZW5kYSBmcm9tICdhc3NldHMvaW1hZ2VzL2FnZW5kYTMucG5nJ1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IHsgdXNlSW5mb3JtYWNvZXMgfSBmcm9tICdob29rcy91c2VJbmZvcm1hY29lcyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgdGl0bGU6ICdBZ2VuZGEgVHJpYnV0w6FyaWEnLFxyXG4gICAgc3VidGl0bGU6ICcwMi8wNy8yMDIxJyxcclxuICAgIC8vIHByaWNlOiAyNS45OSxcclxuICAgIGlzUmVjb21tZW5kZWQ6IGZhbHNlLFxyXG4gICAgLy8gYnV0dG9uVGV4dDogJ1N0YXJ0IEZyZWUgVHJpYWwnLFxyXG4gICAgZmVhdHVyZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGlzQXZhaWxhYmxlOiB0cnVlLFxyXG4gICAgICAgIHRpdGxlOiAnSUNNUy9TQ0FOQyB8IENvbnRyaWJ1aW50ZSBxdWUgdGl2ZXIgcmVjZWJpZG8gbyBjb21idXN0w612ZWwgZGUgb3V0cm8gY29udHJpYnVpbnRlIHN1YnN0aXR1w61kby4nLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBJQ01TL1NDQU5DIHwgSW1wb3J0YWRvci5gLFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6ICdPYnJpZ2HDp8O1ZXMgRmlzY2FpcycsXHJcbiAgICBzdWJ0aXRsZTogJ0ZpcXVlIHNlbXByZSBpbmZvcm1hZG8hJyxcclxuICAgIHByaWNlOiAyOS45OSxcclxuICAgIGlzUmVjb21tZW5kZWQ6IHRydWUsXHJcbiAgICBidXR0b25UZXh0OiAnU3RhcnQgRnJlZSBUcmlhbCcsXHJcbiAgICBmZWF0dXJlczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6ICdPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEp1bGhvLzIwMjEnLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEp1bmhvLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIE1haW8vMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gQWJyaWwvMjAyMWAsXHJcbiAgICAgIH0sXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICBpc0F2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICB0aXRsZTogYE9icmlnYcOnw7VlcyBGaXNjYWlzIOKAkyBFc3RhZG8gZGUgTWluYXMgR2VyYWlzIC0gTWFyw6dvLzIwMjFgLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgaXNBdmFpbGFibGU6IHRydWUsXHJcbiAgICAgICAgdGl0bGU6IGBPYnJpZ2HDp8O1ZXMgRmlzY2FpcyDigJMgRXN0YWRvIGRlIE1pbmFzIEdlcmFpcyAtIEZldmVyZWlyby8yMDIxYCxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IHNldHRpbmdzID0ge1xyXG4gIHNsaWRlc1RvU2hvdzogMyxcclxuICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICBzcGVlZDogNTAwLFxyXG4gIG5leHRBcnJvdzogPFNsaWNrQXJyb3cgY29udHJvbD1cIm5leHRcIiAvPixcclxuICBwcmV2QXJyb3c6IDxTbGlja0Fycm93IGNvbnRyb2w9XCJwcmV2XCIgLz4sXHJcbiAgcmVzcG9uc2l2ZTogW1xyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiAxMDAwMDAsXHJcbiAgICAgIHNldHRpbmdzOiAndW5zbGljaycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBicmVha3BvaW50OiA3NjgsXHJcbiAgICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxyXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMixcclxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcclxuICAgICAgc2V0dGluZ3M6IHtcclxuICAgICAgICBpbmZpbml0ZTogZmFsc2UsXHJcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICBdLFxyXG59O1xyXG5cclxuY29uc3QgUHJpY2luZyA9ICgpID0+IHtcclxuICBjb25zdCB7IG9icmlnYWNvZXMsIGFnZW5kYSB9ID0gdXNlSW5mb3JtYWNvZXMoKVxyXG4gIGNvbnN0IGRhdGEgPSBuZXcgRGF0ZSgpXHJcbiAgY29uc3QgZGlhID0gU3RyaW5nKGRhdGEuZ2V0RGF0ZSgpKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IG1lcyA9IFN0cmluZyhkYXRhLmdldE1vbnRoKCkgKyAxKS5wYWRTdGFydCgyLCAnMCcpO1xyXG4gIGNvbnN0IGFubyA9IGRhdGEuZ2V0RnVsbFllYXIoKTtcclxuICBjb25zdCBkYXRhQXR1YWwgPSBgJHtkaWF9LyR7bWVzfS8ke2Fub31gXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwiaW5mb3JtYWNvZXNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyIHN4PXtzdHlsZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cInNsaWRlSW5MZWZ0XCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgIDxTZWN0aW9uSGVhZGluZ1xyXG4gICAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICAgIHNsb2dhbj1cIkF0dWFsaXplLXNlXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJDb21wb3N0byBwb3IgdW0gY29uanVudG8gZGUgaW5mb3JtYcOnw7VlcyBxdWUgc8OjbyBhdHVhbGl6YWRhcyBkaWFyaWFtZW50ZSBwZWxhIG5vc3NhIGVxdWlwZS5cIlxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxTbGlkZXIgc3g9e3N0eWxlcy5ncmlkfSB7Li4uc2V0dGluZ3N9PlxyXG4gICAgICAgICAgICAgIDxQcmljZVRhYmxlIGl0ZW1zPXthZ2VuZGF9IGlzUmVjb21tZW5kZWQ9e2ZhbHNlfSB0aXRsZT1cIkFnZW5kYSBUcmlidXTDoXJpYVwiIHN1YnRpdGxlPXtkYXRhQXR1YWx9IC8+XHJcbiAgICAgICAgICAgICAgPFByaWNlVGFibGUgaXRlbXM9e29icmlnYWNvZXMuc2FvUGF1bG99IGlzUmVjb21tZW5kZWQ9e3RydWV9IHRpdGxlPVwiT2JyaWdhw6fDtWVzIEZpc2NhaXNcIiBzdWJ0aXRsZT1cIkZpcXVlIHNlbXByZSBpbmZvcm1hZG9cIiBsaW5rPVwib2JyaWdhY29lc1wiIC8+XHJcbiAgICAgICAgICAgICAgPEltYWdlIHN4PXtzdHlsZXMuaW1hZ2V9IHNyYz17SW1hZ2VBZ2VuZGF9IGxvYWRpbmc9XCJsYXp5XCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgIDwvU2xpZGVyPlxyXG4gICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHNlY3Rpb246IHtcclxuICAgIHB0OiBbNl0sXHJcbiAgICBwYjogWzEyLCBudWxsLCBudWxsLCAxNSwgMTddLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBwbDogMCxcclxuICAgIHByOiAwLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs3LCBudWxsLCBudWxsLCBudWxsLCAxNCwgbnVsbCwgMThdLFxyXG4gICAgcHg6IFs2LCBudWxsLCBudWxsLCAwXSxcclxuICAgIGgzOiB7XHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgOF0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgNl0sXHJcbiAgICBkaXNwbGF5OiBbbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgJ2dyaWQnXSxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAncmVwZWF0KDMsIDFmciknXSxcclxuICAgIGFsaWduSXRlbXM6IFtudWxsLCBudWxsLCBudWxsLCBudWxsLCAnZmxleC1lbmQnXSxcclxuICAgICcuc2xpY2stc2xpZGUgPiBkaXYnOiB7XHJcbiAgICAgIHA6IFsnMzVweCcsICc0MHB4JywgbnVsbCwgJzM1cHggMjNweCAyM3B4JywgMF0sXHJcbiAgICB9LFxyXG4gICAgJy5zbGljay1hcnJvdyc6IHtcclxuICAgICAgYm90dG9tOiAtNSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgYWxpZ25TZWxmOiAnY2VudGVyJyxcclxuICB9XHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgU2VydmljZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL3NlcnZpY2UnO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuaW1wb3J0IHsgdXNlSW5mb3JtYWNvZXMgfSBmcm9tICdob29rcy91c2VJbmZvcm1hY29lcyc7XHJcblxyXG5jb25zdCBTZXJ2aWNlcyA9ICgpID0+IHtcclxuICBjb25zdCB7IGNvdGFjb2VzIH0gPSB1c2VJbmZvcm1hY29lcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIGlkPVwic2VydmljZXNcIiBzeD17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8U2Nyb2xsQW5pbWF0aW9uIGFuaW1hdGVJbj1cImZhZGVJblwiIGFuaW1hdGVPdXQ9XCJmYWRlT3V0XCI+XHJcbiAgICAgICAgICA8U2VjdGlvbkhlYWRpbmdcclxuICAgICAgICAgICAgc2xvZ2FuPVwiXCJcclxuICAgICAgICAgICAgdGl0bGU9XCJJbmRpY2Fkb3JlcyBFY29uw7RtaWNvc1wiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPEJveCBzeD17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgICAgICB7Y290YWNvZXM/Lm1hcCgoY290YWNhbykgPT4gKFxyXG4gICAgICAgICAgICAgIDxTZXJ2aWNlIGtleT17Y290YWNhby5jb3RkX2NvZGlnb30gY290YWNhbz17Y290YWNhb30gLz5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICA8L1Njcm9sbEFuaW1hdGlvbj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VydmljZXM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgcHQ6IFs4LCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTJdLFxyXG4gICAgcGI6IFsxMiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgMTVdLFxyXG4gIH0sXHJcbiAgZ3JpZDoge1xyXG4gICAgZ2FwOiBbMywgbnVsbCwgbnVsbCwgNF0sXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoNCwgMWZyKScsXHJcbiAgICAgICdyZXBlYXQoNCwgMzAwcHgpJyxcclxuICAgIF0sXHJcbiAgfSxcclxufTtcclxuIiwiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IHsgQ29udGFpbmVyLCBCb3ggfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcclxuaW1wb3J0IFNlY3Rpb25IZWFkaW5nIGZyb20gJ2NvbXBvbmVudHMvc2VjdGlvbi1oZWFkaW5nJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5pbXBvcnQgc3VwcG9ydFRlYW0gZnJvbSAnYXNzZXRzL2ltYWdlcy9zdXBwb3J0LXRlYW0ucG5nJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN1cHBvcnQoKSB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGlkPVwic3VwcG9ydFwiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICB0aXRsZT1cIk1lZXQgb3VyIHN1cHBvcnQgdGVhbSB3aG8gYWx3YXlzIHdvcmsgaGFyZGx5IGJlaGluZCB0aGUgc2NlbmVzXCJcclxuICAgICAgICAgIGRlc2NyaXB0aW9uPVwiRm9jdXMgb25seSBvbiB0aGUgbWVhbmluZywgd2UgdGFrZSBjYXJlIG9mIHRoZSBkZXNpZ24uIEFzIHNvb24gYXMgdGhlIG1lZXRpbmcgZW5kIHlvdSBjYW4gZXhwb3J0IGluIG9uZSBjbGljayBpbnRvIHlvdXIgcHJlZmVycmVkLlwiXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMudGh1bWJXcmFwcGVyfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9e3N1cHBvcnRUZWFtfSBsb2FkaW5nPVwibGF6eVwiIGFsdD1cIlN1cHBvcnQgVGVhbVwiIC8+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxNF0sXHJcbiAgICBwYjogWzBdLFxyXG4gIH0sXHJcbiAgaGVhZGluZzoge1xyXG4gICAgbWI6IFs4LCBudWxsLCBudWxsLCAxMCwgbnVsbCwgMTVdLFxyXG4gICAgbWF4V2lkdGg6IFtudWxsLCBudWxsLCBudWxsLCA1MDAsIDYwMCwgbnVsbF0sXHJcbiAgICBoMzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXHJcbiAgICAgIGZvbnRTaXplOiBbMywgbnVsbCwgbnVsbCwgOCwgMTFdLFxyXG4gICAgICBsaW5lSGVpZ2h0OiAxLjQsXHJcbiAgICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgICAgY29sb3I6ICdoZWFkaW5nJyxcclxuICAgIH0sXHJcbiAgICBwOiB7XHJcbiAgICAgIG10OiBbM10sXHJcbiAgICAgIG1heFdpZHRoOiBbNTAwXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICB0aHVtYldyYXBwZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIG1iOiAnLTFweCcsXHJcbiAgICBpbWc6IHtcclxuICAgICAgaGVpZ2h0OiBbMTgwLCAnYXV0byddLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIENvbnRhaW5lciB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IFNsaWRlciBmcm9tICdyZWFjdC1zbGljayc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmNvbnN0IFRlc3RpbW9uaWFsID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJ2NvbXBvbmVudHMvY2FyZHMvdGVzdGltb25pYWwnKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pO1xyXG5pbXBvcnQgYXV0aG9yIGZyb20gJ2Fzc2V0cy9pbWFnZXMvdGVzdGltb25pYWwucG5nJztcclxuaW1wb3J0IHsgcmdiYSB9IGZyb20gJ3BvbGlzaGVkJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICBhdmF0YXI6IGF1dGhvcixcclxuICAgIGF1dGhvck5hbWU6ICdNZWxpbmEgUGV0dGVuZG9yZmVyJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIG9mIFViZXInLFxyXG4gICAgdGV4dDogYEJlc3QgaG9zdCBJJ3ZlIGhhZCBpbiAxMCB5ZWFycy4gU21vb3RoIG1pZ3JhdGlvbiwgbm8gc3RyZXNzLCBhbmQgZnJpZW5kbHkgc3VwcG9ydCBvbmUgY2xpY2sgYXdheS4gSSdtIHZlcnkgaGFwcHkgYW5kIHJlY29tbWVuZCB0aGVpciBzZXJ2aWNlc2AsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGF2YXRhcjogYXV0aG9yLFxyXG4gICAgYXV0aG9yTmFtZTogJ01lbGluYSBQZXR0ZW5kb3JmZXInLFxyXG4gICAgZGVzaWduYXRpb246ICdDRU8gb2YgR29vZ2xlJyxcclxuICAgIHRleHQ6IGBCZXN0IGhvc3QgSSd2ZSBoYWQgaW4gMTAgeWVhcnMuIFNtb290aCBtaWdyYXRpb24sIG5vIHN0cmVzcywgYW5kIGZyaWVuZGx5IHN1cHBvcnQgb25lIGNsaWNrIGF3YXkuIEknbSB2ZXJ5IGhhcHB5IGFuZCByZWNvbW1lbmQgdGhlaXIgc2VydmljZXNgLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDMsXHJcbiAgICBhdmF0YXI6IGF1dGhvcixcclxuICAgIGF1dGhvck5hbWU6ICdNZWxpbmEgUGV0dGVuZG9yZmVyJyxcclxuICAgIGRlc2lnbmF0aW9uOiAnQ0VPIG9mIE1pY3Jvc29mdCcsXHJcbiAgICB0ZXh0OiBgQmVzdCBob3N0IEkndmUgaGFkIGluIDEwIHllYXJzLiBTbW9vdGggbWlncmF0aW9uLCBubyBzdHJlc3MsIGFuZCBmcmllbmRseSBzdXBwb3J0IG9uZSBjbGljayBhd2F5LiBJJ20gdmVyeSBoYXBweSBhbmQgcmVjb21tZW5kIHRoZWlyIHNlcnZpY2VzYCxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWxzID0gKCkgPT4ge1xyXG4gIGNvbnN0IHNldHRpbmdzID0ge1xyXG4gICAgYXJyb3dzOiBmYWxzZSxcclxuICAgIGRvdHM6IHRydWUsXHJcbiAgICBmYWRlOiB0cnVlLFxyXG4gICAgaW5maW5pdGU6IHRydWUsXHJcbiAgICBzcGVlZDogNTAwLFxyXG4gICAgc2xpZGVzVG9TaG93OiAxLFxyXG4gICAgc2xpZGVzVG9TY3JvbGw6IDEsXHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cInNlY3Rpb25cIiBpZD1cInRlc3RpbW9uaWFsc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNsaWRlciB7Li4uc2V0dGluZ3N9IHN4PXtzdHlsZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgICAge2RhdGEubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxUZXN0aW1vbmlhbCBrZXk9e2l0ZW0uaWR9IHRlc3RpbW9uaWFsPXtpdGVtfSAvPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9TbGlkZXI+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFscztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBzZWN0aW9uOiB7XHJcbiAgICBwdDogWzYsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0YwRjNGOCcsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICdAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzY3cHgpJzoge1xyXG4gICAgICAnOmJlZm9yZSc6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgY29udGVudDogYCcnYCxcclxuICAgICAgICBtaW5IZWlnaHQ6IFtudWxsLCBudWxsLCBudWxsLCAzMCwgNzAsIDEwMF0sXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgcmlnaHQ6IDAsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWw6IHtcclxuICAgICcuc2xpY2stZG90cyc6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXggIWltcG9ydGFudCcsXHJcbiAgICAgIG1hcmdpbjogMCxcclxuICAgICAgcGFkZGluZzogMCxcclxuICAgICAgYm90dG9tOiBbNiwgbnVsbCwgbnVsbCwgOCwgMTBdLFxyXG4gICAgICBsaXN0U3R5bGU6ICdub25lJyxcclxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgIGxlZnQ6IFtcclxuICAgICAgICAnY2FsYyg1MCUgKyAxNHB4KScsXHJcbiAgICAgICAgbnVsbCxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDYycHgpJyxcclxuICAgICAgICAnY2FsYyg1MCUgKyAxNHB4KScsXHJcbiAgICAgICAgJ2NhbGMoNTAlICsgNjBweCknLFxyXG4gICAgICAgICdjYWxjKDUwJSArIDE0cHgpJyxcclxuICAgICAgXSxcclxuICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlWCgtNTAlKScsXHJcbiAgICAgIGJ1dHRvbjoge1xyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogcmdiYSgnIzVCMkI5RCcsIDAuMiksXHJcbiAgICAgICAgYm9yZGVyOiAwLFxyXG4gICAgICAgIG91dGxpbmU6IDAsXHJcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA1LFxyXG4gICAgICAgIGN1cnNvcjogJ3BvaW50ZXInLFxyXG4gICAgICAgIGhlaWdodDogWzMsIG51bGwsIG51bGwsIDZdLFxyXG4gICAgICAgIHdpZHRoOiBbMTAsIG51bGwsIG51bGwsIDE1XSxcclxuICAgICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICAgICAgdGV4dEluZGVudDogJy05OTk5ZW0nLFxyXG4gICAgICAgIHRyYW5zaXRpb246ICdhbGwgMC4zcyBlYXNlLWluLW91dCAwcycsXHJcbiAgICAgIH0sXHJcbiAgICAgICcuc2xpY2stYWN0aXZlIGJ1dHRvbic6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICB3aWR0aDogWzIwLCBudWxsLCBudWxsLCAzMF0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbGk6IHtcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAnKyBsaSc6IHtcclxuICAgICAgICBtbDogJzZweCcsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiIsIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyIH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgU2VjdGlvbkhlYWRpbmcgZnJvbSAnY29tcG9uZW50cy9zZWN0aW9uLWhlYWRpbmcnO1xyXG5pbXBvcnQgRmVhdHVyZSBmcm9tICdjb21wb25lbnRzL2NhcmRzL2ZlYXR1cmUnO1xyXG5pbXBvcnQgU2Nyb2xsQW5pbWF0aW9uIGZyb20gJ3JlYWN0LWFuaW1hdGUtb24tc2Nyb2xsJztcclxuXHJcbmltcG9ydCBpY29uMSBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzEucG5nJztcclxuaW1wb3J0IGljb24yIGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvMi5wbmcnO1xyXG5pbXBvcnQgaWNvbjMgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy8zLnBuZyc7XHJcbmltcG9ydCBpY29uNCBmcm9tICdhc3NldHMvaW1hZ2VzL3NlcnZpY2VzLzQucG5nJztcclxuaW1wb3J0IGljb241IGZyb20gJ2Fzc2V0cy9pbWFnZXMvc2VydmljZXMvNS5wbmcnO1xyXG5pbXBvcnQgaWNvbjYgZnJvbSAnYXNzZXRzL2ltYWdlcy9zZXJ2aWNlcy82LnBuZyc7XHJcblxyXG5jb25zdCBkYXRhID0gW1xyXG4gIHtcclxuICAgIGlkOiAxLFxyXG4gICAgaWNvbjogaWNvbjEsXHJcbiAgICB0aXRsZTogJ0RlcGFydGFtZW50byBkZSBSZWdpc3Ryb3MnLFxyXG4gICAgZGVzY3JpcHRpb246IGBTZWphIHBhcmEgcXVlbSBlc3TDoSBpbmljaWFuZG8gdW0gbm92byBuZWfDs2NpbyBvdSBwYXJhIHF1ZW0gc29tZW50ZSBwcm9jdXJhIGFsdGVyYXIgc3VhIGVtcHJlc2EgasOhIHJlZ2lzdHJhZGEsIG9mZXJlY2Vtb3MgYXBvaW8gY29uc3RhbnRlLCBlbGFib3JhbmRvIGEgZG9jdW1lbnRhw6fDo28gcGFyYSByZWdpc3RybyBlbSB0b2RvcyBvcyDDs3Jnw6NvcyBlIHJlcGFydGnDp8O1ZXMgbmVjZXNzw6FyaWFzIGNvbSBhZ2lsaWRhZGUsIHBhcmEgcXVlIG8gZW1wcmVzw6FyaW8gcG9zc2EgcmFwaWRhbWVudGUgb2J0ZXIgbyByZWdpc3Rybywgc2VtIG5lY2Vzc2lkYWRlIGRlIGF0cmFzbyBubyBpbsOtY2lvIGRhcyBhdGl2aWRhZGVzLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMixcclxuICAgIGljb246IGljb24yLFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gVHJhYmFsaGlzdGEnLFxyXG4gICAgZGVzY3JpcHRpb246IGBPcmllbnRhw6fDo28gZSBjb250cm9sZSBkYSBhcGxpY2HDp8OjbyBkb3MgcHJlY2VpdG9zIGRhIGNvbnNvbGlkYcOnw6NvIGRhcyBsZWlzIGRvIHRyYWJhbGhvLCDigJxQSVPigJ0sIOKAnEZHVFPigJ0gZSBvdXRyb3MgYXBsaWPDoXZlaXMgw6BzIHJlbGHDp8O1ZXMgZGUgZW1wcmVnbzsgTWFudXRlbsOnw6NvIGRvcyByZWdpc3Ryb3MgZGUgZW1wcmVnYWRvcyBlIHNlcnZpw6dvcyBjb3JyZWxhdG9zOyBFbGFib3Jhw6fDo28gZGEgZm9saGEgZGUgcGFnYW1lbnRvIGRvcyBlbXByZWdhZG9zIGUgZGUgUHLDsy1MYWJvcmUsIGJlbSBjb21vIGRhcyBndWlhcyBkZSByZWNvbGhpbWVudG8gZG9zIGVuY2FyZ29zIHNvY2lhaXMgZSB0cmlidXRvcyBhZmluczsgQXRlbmRpbWVudG8gZGFzIGRlbWFpcyBleGlnw6puY2lhcyBwcmV2aXN0YXMgbmEgbGVnaXNsYcOnw6NvLmAsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIGljb246IGljb24zLFxyXG4gICAgdGl0bGU6ICdEZXBhcnRhbWVudG8gRmlzY2FsJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgT3JpZW50YcOnw6NvIGUgY29udHJvbGUgZGEgYXBsaWNhw6fDo28gZG9zIGRpc3Bvc2l0aXZvcyBsZWdhaXMgdmlnZW50ZXMsIGZlZGVyYWlzLCBlc3RhZHVhaXMgb3UgbXVuaWNpcGFpczsgRXNjcml0dXJhw6fDtWVzIGRvcyByZWdpc3Ryb3MgZmlzY2FpcyBkbyBJUEksIElDTVMsIElTUyBlIGVsYWJvcmHDp8OjbyBkYXMgZ3VpYXMgZGUgaW5mb3JtYcOnw6NvIGUgZGUgcmVjb2xoaW1lbnRvIGRvcyB0cmlidXRvcyBkZXZpZG9zOyBBdGVuZGltZW50byBkYXMgZGVtYWlzIGV4aWfDqm5jaWFzIHByZXZpc3RhcyBlbSBhdG9zIG5vcm1hdGl2b3MsIGJlbSBjb21vIGRlIGV2ZW50dWFpcyBwcm9jZWRpbWVudG9zIGRlIGZpc2NhbGl6YcOnw6NvIHRyaWJ1dGFyaWEuYCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgaWNvbjogaWNvbjQsXHJcbiAgICB0aXRsZTogJ0RlcGFydGFtZW50byBDb250w6FiaWwnLFxyXG4gICAgZGVzY3JpcHRpb246IGBDbGFzc2lmaWNhw6fDo28gZSBlc2NyaXR1cmHDp8OjbyBkYSBjb250YWJpbGlkYWRlIGRlIGFjb3JkbyBjb20gYXMgbm9ybWFzIGUgcHJpbmPDrXBpb3MgY29udMOhYmVpcyB2aWdlbnRlcy4gQXB1cmHDp8OjbyBkZSBiYWxhbmNldGVzOyBFbGFib3Jhw6fDo28gZG8gYmFsYW7Dp28gYW51YWwgZSBkZW1vbnN0cmF0aXZvcyBkZSByZXN1bHRhZG87YCxcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA1LFxyXG4gICAgaWNvbjogaWNvbjUsXHJcbiAgICB0aXRsZTogJ0ltcG9zdG8gZGUgUmVuZGEgUEYvUEonLFxyXG4gICAgZGVzY3JpcHRpb246IGBPcmllbnRhw6fDo28gZSBjb250cm9sZSBkZSBhcGxpY2HDp8OjbyBkb3MgZGlzcG9zaXRpdm9zIGxlZ2FpcyB2aWdlbnRlczsgRWxhYm9yYcOnw6NvIGRhIGRlY2xhcmHDp8OjbyBhbnVhbCBkZSByZW5kaW1lbnRvcyBlIGRvY3VtZW50b3MgY29ycmVsYXRvczsgQXRlbmRpbWVudG8gZGFzIGRlbWFpcyBleGlnw6puY2lhcyBwcmV2aXN0YXMgZW0gYXRvcyBub3JtYXRpdm9zLCBiZW0gY29tbyBkZSBldmVudHVhaXMgcHJvY2VkaW1lbnRvcyBkZSBmaXNjYWxpemHDp8Ojby5gLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWQ6IDYsXHJcbiAgICBpY29uOiBpY29uNixcclxuICAgIHRpdGxlOiAnUGxhbmVqYW1lbnRvIFRyaWJ1dMOhcmlvJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgRWxhYm9yYcOnw6NvIGRlIHBsYW5vIHBhcmEgZWNvbm9taWEgVHJpYnV0w6FyaWE7IEVzdHVkbyBwYXJhIGEgY29tcGVuc2HDp8OjbyBkZSB0cmlidXRvcyBpbmNvbnN0aXR1Y2lvbmFpczsgRXN0dWRvLCBhdmFsaWHDp8OjbyBlIGVucXVhZHJhbWVudG8gZGEgZW1wcmVzYSBkaWFudGUgZGEgbGVnaXNsYcOnw6NvIEZpc2NhbCBwYXJhIG8gbWVsaG9yIGFwcm92ZWl0YW1lbnRvIG5hIGRldGVybWluYcOnw6NvIGRlIGltcG9zdG9zIGUgY29udHJpYnVpw6fDtWVzLmAsXHJcbiAgfSxcclxuXTtcclxuXHJcbmNvbnN0IFVsdGltYXRlRmVhdHVyZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJzZWN0aW9uXCIgaWQ9XCJzZXJ2aWNvc1wiIHN4PXtzdHlsZXMuc2VjdGlvbn0+XHJcbiAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgPFNlY3Rpb25IZWFkaW5nXHJcbiAgICAgICAgICBzeD17c3R5bGVzLmhlYWRpbmd9XHJcbiAgICAgICAgICBzbG9nYW49XCJTZXJ2Y29uIENvbnRhYmlsaWRhZGVcIlxyXG4gICAgICAgICAgdGl0bGU9XCLDgXJlYXMgZGUgQXR1YcOnw6NvXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mZWF0dXJlc30+XHJcbiAgICAgICAgICB7ZGF0YT8ubWFwKChpdGVtKSA9PiAoXHJcbiAgICAgICAgICAgIDxTY3JvbGxBbmltYXRpb24gYW5pbWF0ZUluPVwiYm91bmNlSW5Eb3duXCIgYW5pbWF0ZU91dD1cImZhZGVPdXRcIj5cclxuICAgICAgICAgICAgICA8RmVhdHVyZSBjbGFzc05hbWU9XCJmZWF0dXJlLWl0ZW1cIiBrZXk9e2l0ZW0uaWR9IGRhdGE9e2l0ZW19IC8+XHJcbiAgICAgICAgICAgIDwvU2Nyb2xsQW5pbWF0aW9uPlxyXG4gICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFVsdGltYXRlRmVhdHVyZXM7XHJcblxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgc2VjdGlvbjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnI0Y5RkFGQycsXHJcbiAgICBwdDogWzgsIG51bGwsIG51bGwsIG51bGwsIDEwLCAxNF0sXHJcbiAgICBwYjogWzgsIG51bGwsIG51bGwsIG51bGwsIDE1LCAxNiwgMTldLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBoZWFkaW5nOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IFs1MCwgNTAsIDgwXSxcclxuICAgIHA6IHtcclxuICAgICAgbWF4V2lkdGg6IDQ5MCxcclxuICAgICAgbWFyZ2luOiBbJzEwcHggYXV0byAwJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZmVhdHVyZXM6IHtcclxuICAgIGdhcDogWzM1LCBudWxsLCBudWxsLCA0MCwgJzUwcHggMzBweCcsIDYwXSxcclxuICAgIGRpc3BsYXk6IFsnZ3JpZCcsICdncmlkJ10sXHJcbiAgICBtYXhXaWR0aDogMTAzMCxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBncmlkVGVtcGxhdGVDb2x1bW5zOiBbXHJcbiAgICAgICdyZXBlYXQoMSwgMWZyKScsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICdyZXBlYXQoMiwgMWZyKScsXHJcbiAgICAgICdyZXBlYXQoMywgMWZyKScsXHJcbiAgICBdLFxyXG4gICAgJy5mZWF0dXJlLWl0ZW0nOiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnYmxvY2snXSxcclxuICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgbWF4V2lkdGg6IFsyOTAsIDI2MCwgbnVsbCwgMjgwLCAnbm9uZSddLFxyXG4gICAgICBtOiBbJzAgYXV0bycsICcwIGF1dG8nLCAnMCBhdXRvJywgJzAgYXV0bycsICcwIGF1dG8nLCAwXSxcclxuICAgICAgZmlndXJlOiB7XHJcbiAgICAgICAgbTogWycwIDAgMjBweCddLFxyXG4gICAgICB9LFxyXG4gICAgICBoNDoge1xyXG4gICAgICAgIG1iOiBbJzE1cHgnLCAnMTVweCcsICcyMHB4J10sXHJcbiAgICAgIH0sXHJcbiAgICAgIHA6IHtcclxuICAgICAgICBmb250U2l6ZTogWycxNHB4JywgJzE0cHgnLCAnMTZweCcsICcxNnB4JywgJzE0cHgnLCAnMTZweCddLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG59OyIsImV4cG9ydCBjb25zdCBzbHVnaWZ5ID0gKC4uLmFyZ3MpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IGFyZ3Muam9pbignICcpXHJcblxyXG4gIHJldHVybiB2YWx1ZVxyXG4gICAgICAubm9ybWFsaXplKCdORkQnKSAvLyBzcGxpdCBhbiBhY2NlbnRlZCBsZXR0ZXIgaW4gdGhlIGJhc2UgbGV0dGVyIGFuZCB0aGUgYWNlbnRcclxuICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKSAvLyByZW1vdmUgYWxsIHByZXZpb3VzbHkgc3BsaXQgYWNjZW50c1xyXG4gICAgICAudG9Mb3dlckNhc2UoKVxyXG4gICAgICAudHJpbSgpXHJcbiAgICAgIC5yZXBsYWNlKC9bXmEtejAtOSBdL2csICcnKSAvLyByZW1vdmUgYWxsIGNoYXJzIG5vdCBsZXR0ZXJzLCBudW1iZXJzIGFuZCBzcGFjZXMgKHRvIGJlIHJlcGxhY2VkKVxyXG4gICAgICAucmVwbGFjZSgvXFxzKy9nLCAnLScpIC8vIHNlcGFyYXRvclxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gIC8vIGV4YW1wbGUgY29sb3JzIHdpdGggZGFyayBtb2RlXHJcbiAgY29sb3JzOiB7XHJcbiAgICB0ZXh0OiAnIzM0M0Q0OCcsIC8vIGJvZHkgY29sb3IgYW5kIHByaW1hcnkgY29sb3JcclxuICAgIHRleHRTZWNvbmRhcnk6ICcjMDIwNzNFJywgLy8gc2Vjb25kYXJ5IGJvZHkgY29sb3JcclxuICAgIGhlYWRpbmc6ICcjMEYyMTM3JywgLy8gcHJpbWFyeSBoZWFkaW5nIGNvbG9yXHJcbiAgICBoZWFkaW5nU2Vjb25kYXJ5OiAnIzM0M0Q0OCcsIC8vIGhlYWRpbmcgY29sb3JcclxuICAgIGJhY2tncm91bmQ6ICcjRkZGRkZGJywgLy8gYm9keSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBiYWNrZ3JvdW5kU2Vjb25kYXJ5OiAnI0Y5RkFGQycsIC8vIHNlY29uZGFyeSBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBib3JkZXJDb2xvcjogJyNFREVGRjYnLCAvLyBib3JkZXIgY29sb3JcclxuICAgIHByaW1hcnk6ICcjMGM1Yzk5JywgLy8gcHJpbWFyeSBidXR0b24gYW5kIGxpbmsgY29sb3JcclxuICAgIHNlY29uZGFyeTogJyMwYTRlODInLCAvLyBzZWNvbmRhcnkgY29sb3IgLSBjYW4gYmUgdXNlZCBmb3IgaG92ZXIgc3RhdGVzXHJcbiAgICBtdXRlZDogJyM3QjgxODgnLCAvLyBtdXRlZCBjb2xvclxyXG4gICAgYWNjZW50OiAnIzBhNGU4MicsIC8vIGEgY29udHJhc3QgY29sb3IgZm9yIGVtcGhhc2l6aW5nIFVJXHJcbiAgICBkYXJrOiAnIzEwMTMyRCcsXHJcbiAgICBsaW5rOiAnIzMxODNGRicsXHJcbiAgICAvLyBoaWdobGlnaHRcdGEgYmFja2dyb3VuZCBjb2xvciBmb3IgaGlnaGxpZ2h0aW5nIHRleHRcclxuICAgIG1vZGVzOiB7XHJcbiAgICAgIGRhcms6IHtcclxuICAgICAgICB0ZXh0OiAnI2ZmZicsXHJcbiAgICAgICAgYmFja2dyb3VuZDogJyMwMDAnLFxyXG4gICAgICAgIHByaW1hcnk6ICcjMGNmJyxcclxuICAgICAgICBzZWNvbmRhcnk6ICcjMDljJyxcclxuICAgICAgICBtdXRlZDogJyMxMTEnLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZvbnRzOiB7XHJcbiAgICBib2R5OiAnRE0gU2Fucywgc2Fucy1zZXJpZicsXHJcbiAgICAvLyBib2R5OlxyXG4gICAgLy8gICAnc3lzdGVtLXVpLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIHNhbnMtc2VyaWYnLFxyXG4gICAgaGVhZGluZzogJ0RNIFNhbnMsIHNhbnMtc2VyaWYnLFxyXG4gICAgbW9ub3NwYWNlOiAnTWVubG8sIG1vbm9zcGFjZScsXHJcbiAgfSxcclxuICBmb250U2l6ZXM6IFtcclxuICAgIDEyLCAvLyAwXHJcbiAgICAxNCwgLy8gMVxyXG4gICAgMTYsIC8vIDJcclxuICAgIDE4LCAvLyAzXHJcbiAgICAyMCwgLy8gNFxyXG4gICAgMjIsIC8vIDVcclxuICAgIDI0LCAvLyA2XHJcbiAgICAyNiwgLy8gN1xyXG4gICAgMjgsIC8vIDhcclxuICAgIDMwLCAvLyA5XHJcbiAgICAzMiwgLy8gMTBcclxuICAgIDM2LCAvLyAxMVxyXG4gICAgNDAsIC8vIDEyXHJcbiAgICA0MiwgLy8gMTNcclxuICAgIDQ4LCAvLyAxNFxyXG4gICAgNTIsIC8vIDE1XHJcbiAgICA2NCwgLy8gMTZcclxuICBdLFxyXG4gIGZvbnRXZWlnaHRzOiB7XHJcbiAgICBib2R5OiAnbm9ybWFsJyxcclxuICAgIC8vIGJvZHk6IDQwMCxcclxuICAgIGhlYWRpbmc6IDUwMCxcclxuICAgIC8vIGhlYWRpbmc6IDcwMCxcclxuICAgIGJvbGQ6IDcwMCxcclxuICB9LFxyXG4gIGxpbmVIZWlnaHRzOiB7XHJcbiAgICBib2R5OiAxLjUsXHJcbiAgICAvLyBib2R5OiAxLjUsXHJcbiAgICBoZWFkaW5nOiAxLjI1LFxyXG4gICAgLy8gaGVhZGluZzogMS4xMjUsXHJcbiAgfSxcclxuICBsZXR0ZXJTcGFjaW5nczoge1xyXG4gICAgYm9keTogJ25vcm1hbCcsXHJcbiAgICBjYXBzOiAnMC4yZW0nLFxyXG4gICAgaGVhZGluZzogJy0wLjVweCcsXHJcbiAgfSxcclxuICBzcGFjZTogW1xyXG4gICAgMCwgLy8gMFxyXG4gICAgNSwgLy8gMVxyXG4gICAgMTAsIC8vIDJcclxuICAgIDE1LCAvLyAzXHJcbiAgICAyMCwgLy8gNFxyXG4gICAgMjUsIC8vIDVcclxuICAgIDMwLCAvLyA2XHJcbiAgICAzNSwgLy8gN1xyXG4gICAgNDAsIC8vIDhcclxuICAgIDQ1LCAvLyA5XHJcbiAgICA1MCwgLy8gMTBcclxuICAgIDU1LCAvLyAxMVxyXG4gICAgNjAsIC8vIDEyXHJcbiAgICA2NSwgLy8gMTNcclxuICAgIDcwLCAvLyAxNFxyXG4gICAgODAsIC8vIDE1XHJcbiAgICA5MCwgLy8gMTZcclxuICAgIDEwMCwgLy8gMTdcclxuICAgIDExMCwgLy8gMThcclxuICAgIDEyMCwgLy8gMTlcclxuICAgIDEzMCwgLy8gMjBcclxuICAgIDE0MCwgLy8gMjFcclxuICAgIDE1MCwgLy8gMjJcclxuICAgIDE2MCwgLy8gMjNcclxuICBdLFxyXG4gIHNpemVzOiB7fSxcclxuICBicmVha3BvaW50czogW1xyXG4gICAgJzQ4MHB4JyxcclxuICAgICc2NDBweCcsXHJcbiAgICAnNzY4cHgnLFxyXG4gICAgJzEwMjRweCcsXHJcbiAgICAnMTI2MHB4JyxcclxuICAgICcxMzY3cHgnLFxyXG4gICAgJzE0NDBweCcsXHJcbiAgICAnMTYwMHB4JyxcclxuICBdLFxyXG4gIC8vIHZhcmlhbnRzIGNhbiB1c2UgY3VzdG9tLCB1c2VyLWRlZmluZWQgbmFtZXNcclxuICBsYXlvdXQ6IHtcclxuICAgIGNvbnRhaW5lcjoge1xyXG4gICAgICBtYXhXaWR0aDogW1xyXG4gICAgICAgICcxMDAlJyxcclxuICAgICAgICBudWxsLFxyXG4gICAgICAgIG51bGwsXHJcbiAgICAgICAgJzcyMHB4JyxcclxuICAgICAgICAnOTcwcHgnLFxyXG4gICAgICAgICcxMTQwcHgnLFxyXG4gICAgICAgICcxMjYwcHgnLFxyXG4gICAgICAgICcxMzY2cHgnLFxyXG4gICAgICBdLFxyXG4gICAgICBwYWRkaW5nTGVmdDogWzZdLFxyXG4gICAgICBwYWRkaW5nUmlnaHQ6IFs2XSxcclxuICAgICAgbTogJzAgYXV0bycsXHJcbiAgICB9LFxyXG4gICAgbWFpbjoge30sXHJcbiAgfSxcclxuICB0ZXh0OiB7XHJcbiAgICBoZWFkaW5nOiB7XHJcbiAgICAgIGZvbnRGYW1pbHk6ICdoZWFkaW5nJyxcclxuICAgICAgbGluZUhlaWdodDogJ2hlYWRpbmcnLFxyXG4gICAgICBmb250V2VpZ2h0OiAnaGVhZGluZycsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbGlua3M6IHt9LFxyXG4gIGltYWdlczoge1xyXG4gICAgYXZhdGFyOiB7XHJcbiAgICAgIHdpZHRoOiA0OCxcclxuICAgICAgaGVpZ2h0OiA0OCxcclxuICAgICAgYm9yZGVyUmFkaXVzOiA5OTk5OSxcclxuICAgIH0sXHJcbiAgfSxcclxuICAvLyB2YXJpYW50cyBmb3IgYnV0dG9uc1xyXG4gIGJ1dHRvbnM6IHtcclxuICAgIGRlZmF1bHQ6IHtcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGRpc3BsYXk6ICdpbmxpbmUtZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgIHRyYW5zaXRpb246ICcwLjNzIGVhc2UtaW4tb3V0IDBzJyxcclxuICAgICAgd2hpdGVTcGFjZTogJ25vd3JhcCcsXHJcbiAgICB9LFxyXG4gICAgcHJpbWFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAncHJpbWFyeScsXHJcbiAgICAgIG1pbkhlaWdodDogJzYwcHgnLFxyXG4gICAgICBwYWRkaW5nOiAnMCAzMHB4JyxcclxuICAgICAgJyY6aG92ZXInOiB7XHJcbiAgICAgICAgYmc6ICdkYXJrJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBwcmltYXJ5TWQ6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMucHJpbWFyeScsXHJcbiAgICAgIG1pbkhlaWdodDogJzUwcHgnLFxyXG4gICAgICBweDogJzI1cHgnLFxyXG4gICAgfSxcclxuICAgIHNlY29uZGFyeToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5wcmltYXJ5JyxcclxuICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgIGJnOiAnc2Vjb25kYXJ5JyxcclxuICAgIH0sXHJcbiAgICBtdXRlZDoge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI0VERjBGMicsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICAgICc6aG92ZXInOiB7XHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICB3aGl0ZToge1xyXG4gICAgICB2YXJpYW50OiAnYnV0dG9ucy5kZWZhdWx0JyxcclxuICAgICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxyXG4gICAgICBjb2xvcjogJyMwMjA3MTgnLFxyXG4gICAgfSxcclxuICAgIHRleHQ6IHtcclxuICAgICAgdmFyaWFudDogJ2J1dHRvbnMuZGVmYXVsdCcsXHJcbiAgICAgIGNvbG9yOiAndGV4dCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2FyZHM6IHtcclxuICAgIHByaW1hcnk6IHtcclxuICAgICAgcGFkZGluZzogMixcclxuICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAvLyBib3hTaGFkb3c6ICcwIDAgNHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNSknLFxyXG4gICAgfSxcclxuICAgIG9mZmVyOiB7XHJcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgIGZsZXg6IFsnMSAxIGNhbGMoNTAlIC0gMTZweCknLCAnMSAxIDIwJSddLFxyXG4gICAgICBtaW5IZWlnaHQ6IDEzMCxcclxuICAgICAgbTogMixcclxuICAgICAgYmFja2dyb3VuZDogJyNGRkZGRkYnLFxyXG4gICAgICBib3JkZXI6ICcxcHggc29saWQgI0VERUZGNicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogNSxcclxuICAgIH0sXHJcbiAgICBmZWF0dXJlQ2FyZDoge1xyXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgIGFsaWduSXRlbXM6IFsnY2VudGVyJywgJ2ZsZXgtc3RhcnQnXSxcclxuICAgICAgZmxleERpcmVjdGlvbjogWydjb2x1bW4nLCAncm93J10sXHJcbiAgICAgIHA6IFswLCAzXSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3Jtczoge1xyXG4gICAgbGFiZWw6IHtcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dDoge1xyXG4gICAgICBib3JkZXJSYWRpdXM6IDgsXHJcbiAgICAgIGJvcmRlckNvbG9yOiAnYm9yZGVyQ29sb3InLFxyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIHB4OiA1LFxyXG4gICAgICBweTogMCxcclxuICAgICAgbWluSGVpZ2h0OiA2MCxcclxuICAgICAgJyY6Zm9jdXMnOiB7XHJcbiAgICAgICAgYm9yZGVyQ29sb3I6ICdwcmltYXJ5JyxcclxuICAgICAgICBib3hTaGFkb3c6ICh0KSA9PiBgMCAwIDAgMnB4ICR7dC5jb2xvcnMucHJpbWFyeX1gLFxyXG4gICAgICAgIG91dGxpbmU6ICdub25lJyxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuXHJcbiAgYmFkZ2VzOiB7XHJcbiAgICBwcmltYXJ5OiB7XHJcbiAgICAgIGNvbG9yOiAnYmFja2dyb3VuZCcsXHJcbiAgICAgIGJnOiAnIzI4QTVGRicsXHJcbiAgICAgIGJvcmRlclJhZGl1czogMzAsXHJcbiAgICAgIHA6ICczcHggMTFweCcsXHJcbiAgICAgIGZvbnRTaXplOiAxLFxyXG4gICAgICBsZXR0ZXJTcGFjaW5nOiAnLTAuNXB4JyxcclxuICAgIH0sXHJcbiAgICBvdXRsaW5lOiB7XHJcbiAgICAgIGNvbG9yOiAncHJpbWFyeScsXHJcbiAgICAgIGJnOiAndHJhbnNwYXJlbnQnLFxyXG4gICAgICBib3hTaGFkb3c6ICdpbnNldCAwIDAgMCAxcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG5cclxuICBzdHlsZXM6IHtcclxuICAgIC8vIFRvIGFkZCBiYXNlLCB0b3AtbGV2ZWwgc3R5bGVzIHRvIHRoZSA8Ym9keT4gZWxlbWVudCwgdXNlIHRoZW1lLnN0eWxlcy5yb290LlxyXG4gICAgcm9vdDoge1xyXG4gICAgICBmb250RmFtaWx5OiAnYm9keScsXHJcbiAgICAgIGxpbmVIZWlnaHQ6ICdib2R5JyxcclxuICAgICAgZm9udFdlaWdodDogJ2JvZHknLFxyXG4gICAgfSxcclxuICAgIC8vIGgxLWg2IEhlYWRpbmcgc3R5bGVzXHJcbiAgICBoMToge1xyXG4gICAgICAvLyBmb250RmFtaWx5OiAnbm9uZScsXHJcbiAgICAgIC8vIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICAvLyBmb250U2l6ZTogNixcclxuICAgIH0sXHJcbiAgICBoMjoge1xyXG4gICAgICAvLyBmb250RmFtaWx5OiAnbm9uZScsXHJcbiAgICAgIC8vIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICAvLyBmb250U2l6ZTogNSxcclxuICAgIH0sXHJcbiAgICBoMzoge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDQsXHJcbiAgICB9LFxyXG4gICAgaDQ6IHtcclxuICAgICAgdmFyaWFudDogJ3RleHQuaGVhZGluZycsXHJcbiAgICAgIGZvbnRTaXplOiAzLFxyXG4gICAgfSxcclxuICAgIGg1OiB7XHJcbiAgICAgIHZhcmlhbnQ6ICd0ZXh0LmhlYWRpbmcnLFxyXG4gICAgICBmb250U2l6ZTogMixcclxuICAgIH0sXHJcbiAgICBoNjoge1xyXG4gICAgICB2YXJpYW50OiAndGV4dC5oZWFkaW5nJyxcclxuICAgICAgZm9udFNpemU6IDEsXHJcbiAgICB9LFxyXG4gICAgLy8gRGl2aWRlciBzdHlsZXNcclxuICAgIGhyOiB7XHJcbiAgICAgIGJvcmRlcjogMCxcclxuICAgICAgYm9yZGVyQm90dG9tOiAnMXB4IHNvbGlkJyxcclxuICAgICAgYm9yZGVyQ29sb3I6ICcjRDlFMEU3JyxcclxuICAgIH0sXHJcbiAgICAvLyBhbHNvIHlvdSBjYW4gdXNlIG90aGVyIEhUTUwgZWxlbWVudHMgc3R5bGUgaGVyZVxyXG4gICAgdWw6IHtcclxuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXHJcbiAgICB9LFxyXG4gICAgc3JPbmx5OiB7XHJcbiAgICAgIGJvcmRlcjogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXA6ICdyZWN0KDFweCwgMXB4LCAxcHgsIDFweCkgIWltcG9ydGFudCcsXHJcbiAgICAgIGNsaXBQYXRoOiAnaW5zZXQoNTAlKSAhaW1wb3J0YW50JyxcclxuICAgICAgaGVpZ2h0OiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBtYXJnaW46ICctMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbiAhaW1wb3J0YW50JyxcclxuICAgICAgcGFkZGluZzogJzAgIWltcG9ydGFudCcsXHJcbiAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUgIWltcG9ydGFudCcsXHJcbiAgICAgIHdpZHRoOiAnMXB4ICFpbXBvcnRhbnQnLFxyXG4gICAgICB3aGl0ZVNwYWNlOiAnbm93cmFwICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZyYW1lci1tb3Rpb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9keW5hbWljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwb2xpc2hlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlLW9uLXNjcm9sbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1hbmltYXRlZC1jc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYWlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvYnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtbWFzb25yeS1jb21wb25lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVzcG9uc2l2ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1zY3JvbGxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc2xpY2tcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3Qtc3RpY2t5bm9kZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aGVtZS11aVwiKTsiXSwic291cmNlUm9vdCI6IiJ9