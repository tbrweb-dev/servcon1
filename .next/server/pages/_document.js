module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/constants":
/*!*********************************************************!*\
  !*** external "next/dist/next-server/lib/constants.js" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/constants.js");

/***/ }),

/***/ "../next-server/lib/document-context":
/*!****************************************************************!*\
  !*** external "next/dist/next-server/lib/document-context.js" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/document-context.js");

/***/ }),

/***/ "../next-server/lib/utils":
/*!*****************************************************!*\
  !*** external "next/dist/next-server/lib/utils.js" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/utils.js");

/***/ }),

/***/ "../next-server/server/get-page-files":
/*!*****************************************************************!*\
  !*** external "next/dist/next-server/server/get-page-files.js" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/get-page-files.js");

/***/ }),

/***/ "../next-server/server/utils":
/*!********************************************************!*\
  !*** external "next/dist/next-server/server/utils.js" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/server/utils.js");

/***/ }),

/***/ "./node_modules/next/dist/pages/_document.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/pages/_document.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.Html = Html;
exports.Main = Main;
exports.NextScript = exports.Head = exports.default = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _server = _interopRequireDefault(__webpack_require__(/*! styled-jsx/server */ "styled-jsx/server"));

var _constants = __webpack_require__(/*! ../next-server/lib/constants */ "../next-server/lib/constants");

var _documentContext = __webpack_require__(/*! ../next-server/lib/document-context */ "../next-server/lib/document-context");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "../next-server/lib/utils");

exports.DocumentContext = _utils.DocumentContext;
exports.DocumentInitialProps = _utils.DocumentInitialProps;
exports.DocumentProps = _utils.DocumentProps;

var _getPageFiles = __webpack_require__(/*! ../next-server/server/get-page-files */ "../next-server/server/get-page-files");

var _utils2 = __webpack_require__(/*! ../next-server/server/utils */ "../next-server/server/utils");

var _htmlescape = __webpack_require__(/*! ../server/htmlescape */ "./node_modules/next/dist/server/htmlescape.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

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

function dedupe(bundles) {
  const files = new Set();
  const kept = [];

  for (const bundle of bundles) {
    if (files.has(bundle.file)) continue;
    files.add(bundle.file);
    kept.push(bundle);
  }

  return kept;
}

function getOptionalModernScriptVariant(path) {
  if (false) {}

  return path;
}

function getDocumentFiles(buildManifest, pathname) {
  const sharedFiles = (0, _getPageFiles.getPageFiles)(buildManifest, '/_app');
  const pageFiles = (0, _getPageFiles.getPageFiles)(buildManifest, pathname);
  return {
    sharedFiles,
    pageFiles,
    allFiles: [...new Set([...sharedFiles, ...pageFiles])]
  };
}
/**
* `Document` component handles the initial `document` markup and renders only on the server side.
* Commonly used for implementing server side rendering for `css-in-js` libraries.
*/


class Document extends _react.Component {
  /**
  * `getInitialProps` hook returns the context object with the addition of `renderPage`.
  * `renderPage` callback executes `React` rendering logic synchronously to support server-rendering wrappers
  */
  static async getInitialProps(ctx) {
    const enhanceApp = App => {
      return props => /*#__PURE__*/_react.default.createElement(App, props);
    };

    const {
      html,
      head
    } = await ctx.renderPage({
      enhanceApp
    });
    const styles = [...(0, _server.default)()];
    return {
      html,
      head,
      styles
    };
  }

  static renderDocument(DocumentComponent, props) {
    return /*#__PURE__*/_react.default.createElement(_documentContext.DocumentContext.Provider, {
      value: props
    }, /*#__PURE__*/_react.default.createElement(DocumentComponent, props));
  }

  render() {
    return /*#__PURE__*/_react.default.createElement(Html, null, /*#__PURE__*/_react.default.createElement(Head, null), /*#__PURE__*/_react.default.createElement("body", null, /*#__PURE__*/_react.default.createElement(Main, null), /*#__PURE__*/_react.default.createElement(NextScript, null)));
  }

}

exports.default = Document;
Document.headTagsMiddleware =  false ? undefined : () => [];

function Html(props) {
  const {
    inAmpMode,
    docComponentsRendered,
    locale
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Html = true;
  return /*#__PURE__*/_react.default.createElement("html", Object.assign({}, props, {
    lang: props.lang || locale || undefined,
    amp: inAmpMode ? '' : undefined,
    "data-ampdevmode": inAmpMode && true ? '' : undefined
  }));
}

class Head extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getCssLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString,
      dynamicImports
    } = this.context;
    const cssFiles = files.allFiles.filter(f => f.endsWith('.css'));
    const sharedFiles = new Set(files.sharedFiles);
    let dynamicCssFiles = dedupe(dynamicImports.filter(f => f.file.endsWith('.css'))).map(f => f.file);

    if (dynamicCssFiles.length) {
      const existing = new Set(cssFiles);
      dynamicCssFiles = dynamicCssFiles.filter(f => !(existing.has(f) || sharedFiles.has(f)));
      cssFiles.push(...dynamicCssFiles);
    }

    const cssLinkElements = [];
    cssFiles.forEach(file => {
      const isSharedFile = sharedFiles.has(file);
      cssLinkElements.push( /*#__PURE__*/_react.default.createElement("link", {
        key: `${file}-preload`,
        nonce: this.props.nonce,
        rel: "preload",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        as: "style",
        crossOrigin: this.props.crossOrigin || undefined
      }), /*#__PURE__*/_react.default.createElement("link", {
        key: file,
        nonce: this.props.nonce,
        rel: "stylesheet",
        href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-n-g": isSharedFile ? '' : undefined,
        "data-n-p": isSharedFile ? undefined : ''
      }));
    });
    return cssLinkElements.length === 0 ? null : cssLinkElements;
  }

  getPreloadDynamicChunks() {
    const {
      dynamicImports,
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      // `dynamicImports` will contain both `.js` and `.module.js` when the
      // feature is enabled. This clause will filter down to the modern
      // variants only.
      if (!bundle.file.endsWith(getOptionalModernScriptVariant('.js'))) {
        return null;
      }

      return /*#__PURE__*/_react.default.createElement("link", {
        rel: "preload",
        key: bundle.file,
        href: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        as: "script",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      });
    }) // Filter out nulled scripts
    .filter(Boolean);
  }

  getPreloadMainLinks(files) {
    const {
      assetPrefix,
      devOnlyCacheBusterQueryString
    } = this.context;
    const preloadFiles = files.allFiles.filter(file => {
      // `dynamicImports` will contain both `.js` and `.module.js` when
      // the feature is enabled. This clause will filter down to the
      // modern variants only.
      return file.endsWith(getOptionalModernScriptVariant('.js'));
    });
    return !preloadFiles.length ? null : preloadFiles.map(file => /*#__PURE__*/_react.default.createElement("link", {
      key: file,
      nonce: this.props.nonce,
      rel: "preload",
      href: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      as: "script",
      crossOrigin: this.props.crossOrigin || undefined
    }));
  }

  makeStylesheetInert(node) {
    return _react.default.Children.map(node, c => {
      if (c.type === 'link' && c.props['href'] && _constants.OPTIMIZED_FONT_PROVIDERS.some(url => c.props['href'].startsWith(url))) {
        const newProps = _objectSpread({}, c.props || {});

        newProps['data-href'] = newProps['href'];
        newProps['href'] = undefined;
        return /*#__PURE__*/_react.default.cloneElement(c, newProps);
      } else if (c.props && c.props['children']) {
        c.props['children'] = this.makeStylesheetInert(c.props['children']);
      }

      return c;
    });
  }

  render() {
    const {
      styles,
      ampPath,
      inAmpMode,
      hybridAmp,
      canonicalBase,
      __NEXT_DATA__,
      dangerousAsPath,
      headTags,
      unstable_runtimeJS
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    this.context.docComponentsRendered.Head = true;
    let {
      head
    } = this.context;
    let children = this.props.children; // show a warning if Head contains <title> (only in development)

    if (true) {
      children = _react.default.Children.map(children, child => {
        var _child$props;

        const isReactHelmet = child == null ? void 0 : (_child$props = child.props) == null ? void 0 : _child$props['data-react-helmet'];

        if (!isReactHelmet) {
          var _child$props2;

          if ((child == null ? void 0 : child.type) === 'title') {
            console.warn("Warning: <title> should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-title");
          } else if ((child == null ? void 0 : child.type) === 'meta' && (child == null ? void 0 : (_child$props2 = child.props) == null ? void 0 : _child$props2.name) === 'viewport') {
            console.warn("Warning: viewport meta tags should not be used in _document.js's <Head>. https://err.sh/next.js/no-document-viewport-meta");
          }
        }

        return child;
      });
      if (this.props.crossOrigin) console.warn('Warning: `Head` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    if (false) {}

    let hasAmphtmlRel = false;
    let hasCanonicalRel = false; // show warning and remove conflicting amp head tags

    head = _react.default.Children.map(head || [], child => {
      if (!child) return child;
      const {
        type,
        props
      } = child;

      if (inAmpMode) {
        let badProp = '';

        if (type === 'meta' && props.name === 'viewport') {
          badProp = 'name="viewport"';
        } else if (type === 'link' && props.rel === 'canonical') {
          hasCanonicalRel = true;
        } else if (type === 'script') {
          // only block if
          // 1. it has a src and isn't pointing to ampproject's CDN
          // 2. it is using dangerouslySetInnerHTML without a type or
          // a type of text/javascript
          if (props.src && props.src.indexOf('ampproject') < -1 || props.dangerouslySetInnerHTML && (!props.type || props.type === 'text/javascript')) {
            badProp = '<script';
            Object.keys(props).forEach(prop => {
              badProp += ` ${prop}="${props[prop]}"`;
            });
            badProp += '/>';
          }
        }

        if (badProp) {
          console.warn(`Found conflicting amp tag "${child.type}" with conflicting prop ${badProp} in ${__NEXT_DATA__.page}. https://err.sh/next.js/conflicting-amp-tag`);
          return null;
        }
      } else {
        // non-amp mode
        if (type === 'link' && props.rel === 'amphtml') {
          hasAmphtmlRel = true;
        }
      }

      return child;
    }); // try to parse styles from fragment for backwards compat

    const curStyles = Array.isArray(styles) ? styles : [];

    if (inAmpMode && styles && // @ts-ignore Property 'props' does not exist on type ReactElement
    styles.props && // @ts-ignore Property 'props' does not exist on type ReactElement
    Array.isArray(styles.props.children)) {
      const hasStyles = el => {
        var _el$props, _el$props$dangerously;

        return el == null ? void 0 : (_el$props = el.props) == null ? void 0 : (_el$props$dangerously = _el$props.dangerouslySetInnerHTML) == null ? void 0 : _el$props$dangerously.__html;
      }; // @ts-ignore Property 'props' does not exist on type ReactElement


      styles.props.children.forEach(child => {
        if (Array.isArray(child)) {
          child.forEach(el => hasStyles(el) && curStyles.push(el));
        } else if (hasStyles(child)) {
          curStyles.push(child);
        }
      });
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement("head", this.props, this.context.isDevelopment && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("style", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined,
      dangerouslySetInnerHTML: {
        __html: `body{display:none}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-next-hide-fouc": true,
      "data-ampdevmode": inAmpMode ? 'true' : undefined
    }, /*#__PURE__*/_react.default.createElement("style", {
      dangerouslySetInnerHTML: {
        __html: `body{display:block}`
      }
    }))), children, head, inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("meta", {
      name: "viewport",
      content: "width=device-width,minimum-scale=1,initial-scale=1"
    }), !hasCanonicalRel && /*#__PURE__*/_react.default.createElement("link", {
      rel: "canonical",
      href: canonicalBase + (0, _utils2.cleanAmpPath)(dangerousAsPath)
    }), /*#__PURE__*/_react.default.createElement("link", {
      rel: "preload",
      as: "script",
      href: "https://cdn.ampproject.org/v0.js"
    }), styles && /*#__PURE__*/_react.default.createElement("style", {
      "amp-custom": "",
      dangerouslySetInnerHTML: {
        __html: curStyles.map(style => style.props.dangerouslySetInnerHTML.__html).join('').replace(/\/\*# sourceMappingURL=.*\*\//g, '').replace(/\/\*@ sourceURL=.*?\*\//g, '')
      }
    }), /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}`
      }
    }), /*#__PURE__*/_react.default.createElement("noscript", null, /*#__PURE__*/_react.default.createElement("style", {
      "amp-boilerplate": "",
      dangerouslySetInnerHTML: {
        __html: `body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}`
      }
    })), /*#__PURE__*/_react.default.createElement("script", {
      async: true,
      src: "https://cdn.ampproject.org/v0.js"
    })), !inAmpMode && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !hasAmphtmlRel && hybridAmp && /*#__PURE__*/_react.default.createElement("link", {
      rel: "amphtml",
      href: canonicalBase + getAmpPath(ampPath, dangerousAsPath)
    }),  false ? undefined : this.getCssLinks(files), /*#__PURE__*/_react.default.createElement("noscript", {
      "data-n-css": true
    }), !disableRuntimeJS && this.getPreloadDynamicChunks(), !disableRuntimeJS && this.getPreloadMainLinks(files), this.context.isDevelopment &&
    /*#__PURE__*/
    // this element is used to mount development styles so the
    // ordering matches production
    // (by default, style-loader injects at the bottom of <head />)
    _react.default.createElement("noscript", {
      id: "__next_css__DO_NOT_USE__"
    }), styles || null), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {}, ...(headTags || [])));
  }

}

exports.Head = Head;
Head.contextType = _documentContext.DocumentContext;
Head.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};

function Main() {
  const {
    inAmpMode,
    html,
    docComponentsRendered
  } = (0, _react.useContext)(_documentContext.DocumentContext);
  docComponentsRendered.Main = true;
  if (inAmpMode) return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _constants.AMP_RENDER_TARGET);
  return /*#__PURE__*/_react.default.createElement("div", {
    id: "__next",
    dangerouslySetInnerHTML: {
      __html: html
    }
  });
}

class NextScript extends _react.Component {
  constructor(...args) {
    super(...args);
    this.context = void 0;
  }

  getDynamicChunks(files) {
    const {
      dynamicImports,
      assetPrefix,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    return dedupe(dynamicImports).map(bundle => {
      let modernProps = {};

      if (false) {}

      if (!bundle.file.endsWith('.js') || files.allFiles.includes(bundle.file)) return null;
      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        async: !isDevelopment,
        key: bundle.file,
        src: `${assetPrefix}/_next/${encodeURI(bundle.file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getScripts(files) {
    var _buildManifest$lowPri;

    const {
      assetPrefix,
      buildManifest,
      isDevelopment,
      devOnlyCacheBusterQueryString
    } = this.context;
    const normalScripts = files.allFiles.filter(file => file.endsWith('.js'));
    const lowPriorityScripts = (_buildManifest$lowPri = buildManifest.lowPriorityFiles) == null ? void 0 : _buildManifest$lowPri.filter(file => file.endsWith('.js'));
    return [...normalScripts, ...lowPriorityScripts].map(file => {
      let modernProps = {};

      if (false) {}

      return /*#__PURE__*/_react.default.createElement("script", Object.assign({
        key: file,
        src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        async: !isDevelopment,
        crossOrigin: this.props.crossOrigin || undefined
      }, modernProps));
    });
  }

  getPolyfillScripts() {
    // polyfills.js has to be rendered as nomodule without async
    // It also has to be the first script to load
    const {
      assetPrefix,
      buildManifest,
      devOnlyCacheBusterQueryString
    } = this.context;
    return buildManifest.polyfillFiles.filter(polyfill => polyfill.endsWith('.js') && !polyfill.endsWith('.module.js')).map(polyfill => /*#__PURE__*/_react.default.createElement("script", {
      key: polyfill,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      noModule: true,
      src: `${assetPrefix}/_next/${polyfill}${devOnlyCacheBusterQueryString}`
    }));
  }

  static getInlineScriptSource(documentProps) {
    const {
      __NEXT_DATA__
    } = documentProps;

    try {
      const data = JSON.stringify(__NEXT_DATA__);
      return (0, _htmlescape.htmlEscapeJsonString)(data);
    } catch (err) {
      if (err.message.indexOf('circular structure')) {
        throw new Error(`Circular structure in "getInitialProps" result of page "${__NEXT_DATA__.page}". https://err.sh/vercel/next.js/circular-structure`);
      }

      throw err;
    }
  }

  render() {
    const {
      assetPrefix,
      inAmpMode,
      buildManifest,
      unstable_runtimeJS,
      docComponentsRendered,
      devOnlyCacheBusterQueryString
    } = this.context;
    const disableRuntimeJS = unstable_runtimeJS === false;
    docComponentsRendered.NextScript = true;

    if (inAmpMode) {
      if (false) {}

      const ampDevFiles = [...buildManifest.devFiles, ...buildManifest.ampDevFiles];
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
        id: "__NEXT_DATA__",
        type: "application/json",
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        dangerouslySetInnerHTML: {
          __html: NextScript.getInlineScriptSource(this.context)
        },
        "data-ampdevmode": true
      }), ampDevFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
        key: file,
        src: `${assetPrefix}/_next/${file}${devOnlyCacheBusterQueryString}`,
        nonce: this.props.nonce,
        crossOrigin: this.props.crossOrigin || undefined,
        "data-ampdevmode": true
      })));
    }

    if (true) {
      if (this.props.crossOrigin) console.warn('Warning: `NextScript` attribute `crossOrigin` is deprecated. https://err.sh/next.js/doc-crossorigin-deprecated');
    }

    const files = getDocumentFiles(this.context.buildManifest, this.context.__NEXT_DATA__.page);
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, !disableRuntimeJS && buildManifest.devFiles ? buildManifest.devFiles.map(file => /*#__PURE__*/_react.default.createElement("script", {
      key: file,
      src: `${assetPrefix}/_next/${encodeURI(file)}${devOnlyCacheBusterQueryString}`,
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined
    })) : null, disableRuntimeJS ? null : /*#__PURE__*/_react.default.createElement("script", {
      id: "__NEXT_DATA__",
      type: "application/json",
      nonce: this.props.nonce,
      crossOrigin: this.props.crossOrigin || undefined,
      dangerouslySetInnerHTML: {
        __html: NextScript.getInlineScriptSource(this.context)
      }
    }),  false ? /*#__PURE__*/undefined : null, !disableRuntimeJS && this.getPolyfillScripts(), disableRuntimeJS ? null : this.getDynamicChunks(files), disableRuntimeJS ? null : this.getScripts(files));
  }

}

exports.NextScript = NextScript;
NextScript.contextType = _documentContext.DocumentContext;
NextScript.propTypes = {
  nonce: _propTypes.default.string,
  crossOrigin: _propTypes.default.string
};
NextScript.safariNomoduleFix = '!function(){var e=document,t=e.createElement("script");if(!("noModule"in t)&&"onbeforeload"in t){var n=!1;e.addEventListener("beforeload",function(e){if(e.target===t)n=!0;else if(!e.target.hasAttribute("nomodule")||!n)return;e.preventDefault()},!0),t.type="module",t.src=".",e.head.appendChild(t),t.remove()}}();';

function getAmpPath(ampPath, asPath) {
  return ampPath || `${asPath}${asPath.includes('?') ? '&' : '?'}amp=1`;
}

/***/ }),

/***/ "./node_modules/next/dist/server/htmlescape.js":
/*!*****************************************************!*\
  !*** ./node_modules/next/dist/server/htmlescape.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.htmlEscapeJsonString=htmlEscapeJsonString;// This utility is based on https://github.com/zertosh/htmlescape
// License: https://github.com/zertosh/htmlescape/blob/0527ca7156a524d256101bb310a9f970f63078ad/LICENSE
const ESCAPE_LOOKUP={'&':'\\u0026','>':'\\u003e','<':'\\u003c','\u2028':'\\u2028','\u2029':'\\u2029'};const ESCAPE_REGEX=/[&><\u2028\u2029]/g;function htmlEscapeJsonString(str){return str.replace(ESCAPE_REGEX,match=>ESCAPE_LOOKUP[match]);}
//# sourceMappingURL=htmlescape.js.map

/***/ }),

/***/ "./node_modules/next/document.js":
/*!***************************************!*\
  !*** ./node_modules/next/document.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_document */ "./node_modules/next/dist/pages/_document.js")


/***/ }),

/***/ "./src/assets/images/favicon.png":
/*!***************************************!*\
  !*** ./src/assets/images/favicon.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/images/favicon-aa54195b559fe51cfe1ed32196678935.png";

/***/ }),

/***/ "./src/pages/_document.js":
/*!********************************!*\
  !*** ./src/pages/_document.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "./node_modules/next/document.js");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var assets_images_favicon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! assets/images/favicon.png */ "./src/assets/images/favicon.png");
/* harmony import */ var assets_images_favicon_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(assets_images_favicon_png__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\pages\\_document.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class CustomDocument extends next_document__WEBPACK_IMPORTED_MODULE_1___default.a {
  static async getInitialProps(ctx) {
    const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_1___default.a.getInitialProps(ctx);
    return _objectSpread({}, initialProps);
  }

  render() {
    return __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Html"], {
      lang: "en-US",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 7
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }
    }, __jsx("link", {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Bree+Serif&family=DM+Sans:wght@400;500;700&display=swap",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "stylesheet",
      href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 11
      }
    }), __jsx("link", {
      rel: "shortcut icon",
      href: assets_images_favicon_png__WEBPACK_IMPORTED_MODULE_2___default.a,
      type: "image/png",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 11
      }
    })), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }
    }, __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }
    }), __jsx(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 11
      }
    })));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CustomDocument);

/***/ }),

/***/ 1:
/*!*********************************************!*\
  !*** multi private-next-pages/_document.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_document.js */"./src/pages/_document.js");


/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/server":
/*!************************************!*\
  !*** external "styled-jsx/server" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/server");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9jb25zdGFudHMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvdXRpbHMuanNcIiIsIndlYnBhY2s6Ly8vLi4vLi4vcGFnZXMvX2RvY3VtZW50LnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L3NlcnZlci9odG1sZXNjYXBlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9uZXh0L2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9wYWdlcy9fZG9jdW1lbnQuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicHJvcC10eXBlc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zZXJ2ZXJcIiJdLCJuYW1lcyI6WyJmaWxlcyIsImtlcHQiLCJidW5kbGUiLCJwcm9jZXNzIiwic2hhcmVkRmlsZXMiLCJwYWdlRmlsZXMiLCJhbGxGaWxlcyIsIkNvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsImVuaGFuY2VBcHAiLCJBcHAiLCJwcm9wcyIsImN0eCIsInN0eWxlcyIsInJlbmRlckRvY3VtZW50IiwicmVuZGVyIiwiRG9jdW1lbnQiLCJoZWFkVGFnc01pZGRsZXdhcmUiLCJEb2N1bWVudENvbXBvbmVudENvbnRleHQiLCJkb2NDb21wb25lbnRzUmVuZGVyZWQiLCJpbkFtcE1vZGUiLCJnZXRDc3NMaW5rcyIsImNzc0ZpbGVzIiwiZiIsImR5bmFtaWNDc3NGaWxlcyIsImRlZHVwZSIsImR5bmFtaWNJbXBvcnRzIiwiZXhpc3RpbmciLCJjc3NMaW5rRWxlbWVudHMiLCJmaWxlIiwiaXNTaGFyZWRGaWxlIiwiYXNzZXRQcmVmaXgiLCJlbmNvZGVVUkkiLCJkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyIsImdldFByZWxvYWREeW5hbWljQ2h1bmtzIiwiZ2V0T3B0aW9uYWxNb2Rlcm5TY3JpcHRWYXJpYW50IiwiZ2V0UHJlbG9hZE1haW5MaW5rcyIsInByZWxvYWRGaWxlcyIsIm1ha2VTdHlsZXNoZWV0SW5lcnQiLCJSZWFjdCIsImMiLCJPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMiLCJ1cmwiLCJuZXdQcm9wcyIsImRpc2FibGVSdW50aW1lSlMiLCJ1bnN0YWJsZV9ydW50aW1lSlMiLCJjaGlsZHJlbiIsImNoaWxkIiwiaXNSZWFjdEhlbG1ldCIsImNvbnNvbGUiLCJoYXNBbXBodG1sUmVsIiwiaGFzQ2Fub25pY2FsUmVsIiwiaGVhZCIsImJhZFByb3AiLCJ0eXBlIiwiT2JqZWN0IiwicHJvcCIsIl9fTkVYVF9EQVRBX18iLCJwYWdlIiwiY3VyU3R5bGVzIiwiQXJyYXkiLCJoYXNTdHlsZXMiLCJlbCIsImdldERvY3VtZW50RmlsZXMiLCJfX2h0bWwiLCJjYW5vbmljYWxCYXNlIiwic3R5bGUiLCJnZXRBbXBQYXRoIiwiaGVhZFRhZ3MiLCJIZWFkIiwiY29udGV4dFR5cGUiLCJwcm9wVHlwZXMiLCJub25jZSIsIlByb3BUeXBlcyIsImNyb3NzT3JpZ2luIiwiQU1QX1JFTkRFUl9UQVJHRVQiLCJnZXREeW5hbWljQ2h1bmtzIiwibW9kZXJuUHJvcHMiLCJnZXRTY3JpcHRzIiwibm9ybWFsU2NyaXB0cyIsImxvd1ByaW9yaXR5U2NyaXB0cyIsImJ1aWxkTWFuaWZlc3QiLCJnZXRQb2x5ZmlsbFNjcmlwdHMiLCJwb2x5ZmlsbCIsImdldElubGluZVNjcmlwdFNvdXJjZSIsImRhdGEiLCJKU09OIiwiZXJyIiwiYW1wRGV2RmlsZXMiLCJOZXh0U2NyaXB0Iiwic2FmYXJpTm9tb2R1bGVGaXgiLCJhbXBQYXRoIiwiYXNQYXRoIiwiQ3VzdG9tRG9jdW1lbnQiLCJpbml0aWFsUHJvcHMiLCJmYXZpY29uIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUN4RkEsbUU7Ozs7Ozs7Ozs7O0FDQUEsMEU7Ozs7Ozs7Ozs7O0FDQUEsK0Q7Ozs7Ozs7Ozs7O0FDQUEsMkU7Ozs7Ozs7Ozs7O0FDQUEsa0U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFJQTs7QUFD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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhGLENBREYsRUFNRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0UsTUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsRUFFRSxNQUFDLHdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGRixDQU5GLENBREY7QUFhRDs7QUFwQm1DOztBQXVCdkJGLDZFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUJBLHVDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDhDIiwiZmlsZSI6InBhZ2VzL19kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxKTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvY29uc3RhbnRzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9saWIvZG9jdW1lbnQtY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9uZXh0LXNlcnZlci9zZXJ2ZXIvZ2V0LXBhZ2UtZmlsZXMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci91dGlscy5qc1wiKTsiLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBSZWFjdE5vZGUsIHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBmbHVzaCBmcm9tICdzdHlsZWQtanN4L3NlcnZlcidcbmltcG9ydCB7XG4gIEFNUF9SRU5ERVJfVEFSR0VULFxuICBPUFRJTUlaRURfRk9OVF9QUk9WSURFUlMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL2xpYi9jb25zdGFudHMnXG5pbXBvcnQgeyBEb2N1bWVudENvbnRleHQgYXMgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL2RvY3VtZW50LWNvbnRleHQnXG5pbXBvcnQge1xuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzLFxufSBmcm9tICcuLi9uZXh0LXNlcnZlci9saWIvdXRpbHMnXG5pbXBvcnQge1xuICBCdWlsZE1hbmlmZXN0LFxuICBnZXRQYWdlRmlsZXMsXG59IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci9nZXQtcGFnZS1maWxlcydcbmltcG9ydCB7IGNsZWFuQW1wUGF0aCB9IGZyb20gJy4uL25leHQtc2VydmVyL3NlcnZlci91dGlscydcbmltcG9ydCB7IGh0bWxFc2NhcGVKc29uU3RyaW5nIH0gZnJvbSAnLi4vc2VydmVyL2h0bWxlc2NhcGUnXG5cbmV4cG9ydCB7IERvY3VtZW50Q29udGV4dCwgRG9jdW1lbnRJbml0aWFsUHJvcHMsIERvY3VtZW50UHJvcHMgfVxuXG5leHBvcnQgdHlwZSBPcmlnaW5Qcm9wcyA9IHtcbiAgbm9uY2U/OiBzdHJpbmdcbiAgY3Jvc3NPcmlnaW4/OiBzdHJpbmdcbn1cblxuZnVuY3Rpb24gZGVkdXBlPFQgZXh0ZW5kcyB7IGZpbGU6IHN0cmluZyB9PihidW5kbGVzOiBUW10pOiBUW10ge1xuICBjb25zdCBmaWxlcyA9IG5ldyBTZXQ8c3RyaW5nPigpXG4gIGNvbnN0IGtlcHQ6IFRbXSA9IFtdXG5cbiAgZm9yIChjb25zdCBidW5kbGUgb2YgYnVuZGxlcykge1xuICAgIGlmIChmaWxlcy5oYXMoYnVuZGxlLmZpbGUpKSBjb250aW51ZVxuICAgIGZpbGVzLmFkZChidW5kbGUuZmlsZSlcbiAgICBrZXB0LnB1c2goYnVuZGxlKVxuICB9XG4gIHJldHVybiBrZXB0XG59XG5cbmZ1bmN0aW9uIGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudChwYXRoOiBzdHJpbmcpOiBzdHJpbmcge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLmpzJC8sICcubW9kdWxlLmpzJylcbiAgfVxuICByZXR1cm4gcGF0aFxufVxuXG50eXBlIERvY3VtZW50RmlsZXMgPSB7XG4gIHNoYXJlZEZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxuICBwYWdlRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdXG4gIGFsbEZpbGVzOiByZWFkb25seSBzdHJpbmdbXVxufVxuXG5mdW5jdGlvbiBnZXREb2N1bWVudEZpbGVzKFxuICBidWlsZE1hbmlmZXN0OiBCdWlsZE1hbmlmZXN0LFxuICBwYXRobmFtZTogc3RyaW5nXG4pOiBEb2N1bWVudEZpbGVzIHtcbiAgY29uc3Qgc2hhcmVkRmlsZXM6IHJlYWRvbmx5IHN0cmluZ1tdID0gZ2V0UGFnZUZpbGVzKGJ1aWxkTWFuaWZlc3QsICcvX2FwcCcpXG4gIGNvbnN0IHBhZ2VGaWxlczogcmVhZG9ubHkgc3RyaW5nW10gPSBnZXRQYWdlRmlsZXMoYnVpbGRNYW5pZmVzdCwgcGF0aG5hbWUpXG5cbiAgcmV0dXJuIHtcbiAgICBzaGFyZWRGaWxlcyxcbiAgICBwYWdlRmlsZXMsXG4gICAgYWxsRmlsZXM6IFsuLi5uZXcgU2V0KFsuLi5zaGFyZWRGaWxlcywgLi4ucGFnZUZpbGVzXSldLFxuICB9XG59XG5cbi8qKlxuICogYERvY3VtZW50YCBjb21wb25lbnQgaGFuZGxlcyB0aGUgaW5pdGlhbCBgZG9jdW1lbnRgIG1hcmt1cCBhbmQgcmVuZGVycyBvbmx5IG9uIHRoZSBzZXJ2ZXIgc2lkZS5cbiAqIENvbW1vbmx5IHVzZWQgZm9yIGltcGxlbWVudGluZyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcgZm9yIGBjc3MtaW4tanNgIGxpYnJhcmllcy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRG9jdW1lbnQ8UCA9IHt9PiBleHRlbmRzIENvbXBvbmVudDxEb2N1bWVudFByb3BzICYgUD4ge1xuICBzdGF0aWMgaGVhZFRhZ3NNaWRkbGV3YXJlID0gcHJvY2Vzcy5lbnYuX19ORVhUX1BMVUdJTlNcbiAgICA/IGltcG9ydChcbiAgICAgICAgLy8gQHRzLWlnbm9yZSBsb2FkZXIgc3ludGF4XG4gICAgICAgICduZXh0LXBsdWdpbi1sb2FkZXI/bWlkZGxld2FyZT1kb2N1bWVudC1oZWFkLXRhZ3Mtc2VydmVyISdcbiAgICAgIClcbiAgICA6ICgpID0+IFtdXG5cbiAgLyoqXG4gICAqIGBnZXRJbml0aWFsUHJvcHNgIGhvb2sgcmV0dXJucyB0aGUgY29udGV4dCBvYmplY3Qgd2l0aCB0aGUgYWRkaXRpb24gb2YgYHJlbmRlclBhZ2VgLlxuICAgKiBgcmVuZGVyUGFnZWAgY2FsbGJhY2sgZXhlY3V0ZXMgYFJlYWN0YCByZW5kZXJpbmcgbG9naWMgc3luY2hyb25vdXNseSB0byBzdXBwb3J0IHNlcnZlci1yZW5kZXJpbmcgd3JhcHBlcnNcbiAgICovXG4gIHN0YXRpYyBhc3luYyBnZXRJbml0aWFsUHJvcHMoXG4gICAgY3R4OiBEb2N1bWVudENvbnRleHRcbiAgKTogUHJvbWlzZTxEb2N1bWVudEluaXRpYWxQcm9wcz4ge1xuICAgIGNvbnN0IGVuaGFuY2VBcHAgPSAoQXBwOiBhbnkpID0+IHtcbiAgICAgIHJldHVybiAocHJvcHM6IGFueSkgPT4gPEFwcCB7Li4ucHJvcHN9IC8+XG4gICAgfVxuXG4gICAgY29uc3QgeyBodG1sLCBoZWFkIH0gPSBhd2FpdCBjdHgucmVuZGVyUGFnZSh7IGVuaGFuY2VBcHAgfSlcbiAgICBjb25zdCBzdHlsZXMgPSBbLi4uZmx1c2goKV1cbiAgICByZXR1cm4geyBodG1sLCBoZWFkLCBzdHlsZXMgfVxuICB9XG5cbiAgc3RhdGljIHJlbmRlckRvY3VtZW50PFA+KFxuICAgIERvY3VtZW50Q29tcG9uZW50OiBuZXcgKCkgPT4gRG9jdW1lbnQ8UD4sXG4gICAgcHJvcHM6IERvY3VtZW50UHJvcHMgJiBQXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudCB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxEb2N1bWVudENvbXBvbmVudENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3Byb3BzfT5cbiAgICAgICAgPERvY3VtZW50Q29tcG9uZW50IHsuLi5wcm9wc30gLz5cbiAgICAgIDwvRG9jdW1lbnRDb21wb25lbnRDb250ZXh0LlByb3ZpZGVyPlxuICAgIClcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEh0bWw+XG4gICAgICAgIDxIZWFkIC8+XG4gICAgICAgIDxib2R5PlxuICAgICAgICAgIDxNYWluIC8+XG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cbiAgICAgICAgPC9ib2R5PlxuICAgICAgPC9IdG1sPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gSHRtbChcbiAgcHJvcHM6IFJlYWN0LkRldGFpbGVkSFRNTFByb3BzPFxuICAgIFJlYWN0Lkh0bWxIVE1MQXR0cmlidXRlczxIVE1MSHRtbEVsZW1lbnQ+LFxuICAgIEhUTUxIdG1sRWxlbWVudFxuICA+XG4pIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCwgbG9jYWxlIH0gPSB1c2VDb250ZXh0KFxuICAgIERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuICApXG5cbiAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLkh0bWwgPSB0cnVlXG5cbiAgcmV0dXJuIChcbiAgICA8aHRtbFxuICAgICAgey4uLnByb3BzfVxuICAgICAgbGFuZz17cHJvcHMubGFuZyB8fCBsb2NhbGUgfHwgdW5kZWZpbmVkfVxuICAgICAgYW1wPXtpbkFtcE1vZGUgPyAnJyA6IHVuZGVmaW5lZH1cbiAgICAgIGRhdGEtYW1wZGV2bW9kZT17XG4gICAgICAgIGluQW1wTW9kZSAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gJycgOiB1bmRlZmluZWRcbiAgICAgIH1cbiAgICAvPlxuICApXG59XG5cbmV4cG9ydCBjbGFzcyBIZWFkIGV4dGVuZHMgQ29tcG9uZW50PFxuICBPcmlnaW5Qcm9wcyAmXG4gICAgUmVhY3QuRGV0YWlsZWRIVE1MUHJvcHM8XG4gICAgICBSZWFjdC5IVE1MQXR0cmlidXRlczxIVE1MSGVhZEVsZW1lbnQ+LFxuICAgICAgSFRNTEhlYWRFbGVtZW50XG4gICAgPlxuPiB7XG4gIHN0YXRpYyBjb250ZXh0VHlwZSA9IERvY3VtZW50Q29tcG9uZW50Q29udGV4dFxuXG4gIHN0YXRpYyBwcm9wVHlwZXMgPSB7XG4gICAgbm9uY2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgY3Jvc3NPcmlnaW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIH1cblxuICBjb250ZXh0ITogUmVhY3QuQ29udGV4dFR5cGU8dHlwZW9mIERvY3VtZW50Q29tcG9uZW50Q29udGV4dD5cblxuICBnZXRDc3NMaW5rcyhmaWxlczogRG9jdW1lbnRGaWxlcyk6IEpTWC5FbGVtZW50W10gfCBudWxsIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGNzc0ZpbGVzID0gZmlsZXMuYWxsRmlsZXMuZmlsdGVyKChmKSA9PiBmLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgY29uc3Qgc2hhcmVkRmlsZXMgPSBuZXcgU2V0KGZpbGVzLnNoYXJlZEZpbGVzKVxuXG4gICAgbGV0IGR5bmFtaWNDc3NGaWxlcyA9IGRlZHVwZShcbiAgICAgIGR5bmFtaWNJbXBvcnRzLmZpbHRlcigoZikgPT4gZi5maWxlLmVuZHNXaXRoKCcuY3NzJykpXG4gICAgKS5tYXAoKGYpID0+IGYuZmlsZSlcbiAgICBpZiAoZHluYW1pY0Nzc0ZpbGVzLmxlbmd0aCkge1xuICAgICAgY29uc3QgZXhpc3RpbmcgPSBuZXcgU2V0KGNzc0ZpbGVzKVxuICAgICAgZHluYW1pY0Nzc0ZpbGVzID0gZHluYW1pY0Nzc0ZpbGVzLmZpbHRlcihcbiAgICAgICAgKGYpID0+ICEoZXhpc3RpbmcuaGFzKGYpIHx8IHNoYXJlZEZpbGVzLmhhcyhmKSlcbiAgICAgIClcbiAgICAgIGNzc0ZpbGVzLnB1c2goLi4uZHluYW1pY0Nzc0ZpbGVzKVxuICAgIH1cblxuICAgIGNvbnN0IGNzc0xpbmtFbGVtZW50czogSlNYLkVsZW1lbnRbXSA9IFtdXG4gICAgY3NzRmlsZXMuZm9yRWFjaCgoZmlsZSkgPT4ge1xuICAgICAgY29uc3QgaXNTaGFyZWRGaWxlID0gc2hhcmVkRmlsZXMuaGFzKGZpbGUpXG5cbiAgICAgIGNzc0xpbmtFbGVtZW50cy5wdXNoKFxuICAgICAgICA8bGlua1xuICAgICAgICAgIGtleT17YCR7ZmlsZX0tcHJlbG9hZGB9XG4gICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgcmVsPVwicHJlbG9hZFwiXG4gICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIGFzPVwic3R5bGVcIlxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgLz4sXG4gICAgICAgIDxsaW5rXG4gICAgICAgICAga2V5PXtmaWxlfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxuICAgICAgICAgIGhyZWY9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICB9XG4gICAgICAgICAgZGF0YS1uLWc9e2lzU2hhcmVkRmlsZSA/ICcnIDogdW5kZWZpbmVkfVxuICAgICAgICAgIGRhdGEtbi1wPXtpc1NoYXJlZEZpbGUgPyB1bmRlZmluZWQgOiAnJ31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICAgIHJldHVybiBjc3NMaW5rRWxlbWVudHMubGVuZ3RoID09PSAwID8gbnVsbCA6IGNzc0xpbmtFbGVtZW50c1xuICB9XG5cbiAgZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiAoXG4gICAgICBkZWR1cGUoZHluYW1pY0ltcG9ydHMpXG4gICAgICAgIC5tYXAoKGJ1bmRsZSkgPT4ge1xuICAgICAgICAgIC8vIGBkeW5hbWljSW1wb3J0c2Agd2lsbCBjb250YWluIGJvdGggYC5qc2AgYW5kIGAubW9kdWxlLmpzYCB3aGVuIHRoZVxuICAgICAgICAgIC8vIGZlYXR1cmUgaXMgZW5hYmxlZC4gVGhpcyBjbGF1c2Ugd2lsbCBmaWx0ZXIgZG93biB0byB0aGUgbW9kZXJuXG4gICAgICAgICAgLy8gdmFyaWFudHMgb25seS5cbiAgICAgICAgICBpZiAoIWJ1bmRsZS5maWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICByZWw9XCJwcmVsb2FkXCJcbiAgICAgICAgICAgICAga2V5PXtidW5kbGUuZmlsZX1cbiAgICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICAgIGJ1bmRsZS5maWxlXG4gICAgICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgICAvLyBGaWx0ZXIgb3V0IG51bGxlZCBzY3JpcHRzXG4gICAgICAgIC5maWx0ZXIoQm9vbGVhbilcbiAgICApXG4gIH1cblxuICBnZXRQcmVsb2FkTWFpbkxpbmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKTogSlNYLkVsZW1lbnRbXSB8IG51bGwge1xuICAgIGNvbnN0IHsgYXNzZXRQcmVmaXgsIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBwcmVsb2FkRmlsZXMgPSBmaWxlcy5hbGxGaWxlcy5maWx0ZXIoKGZpbGU6IHN0cmluZykgPT4ge1xuICAgICAgLy8gYGR5bmFtaWNJbXBvcnRzYCB3aWxsIGNvbnRhaW4gYm90aCBgLmpzYCBhbmQgYC5tb2R1bGUuanNgIHdoZW5cbiAgICAgIC8vIHRoZSBmZWF0dXJlIGlzIGVuYWJsZWQuIFRoaXMgY2xhdXNlIHdpbGwgZmlsdGVyIGRvd24gdG8gdGhlXG4gICAgICAvLyBtb2Rlcm4gdmFyaWFudHMgb25seS5cbiAgICAgIHJldHVybiBmaWxlLmVuZHNXaXRoKGdldE9wdGlvbmFsTW9kZXJuU2NyaXB0VmFyaWFudCgnLmpzJykpXG4gICAgfSlcblxuICAgIHJldHVybiAhcHJlbG9hZEZpbGVzLmxlbmd0aFxuICAgICAgPyBudWxsXG4gICAgICA6IHByZWxvYWRGaWxlcy5tYXAoKGZpbGU6IHN0cmluZykgPT4gKFxuICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICBrZXk9e2ZpbGV9XG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgaHJlZj17YCR7YXNzZXRQcmVmaXh9L19uZXh0LyR7ZW5jb2RlVVJJKFxuICAgICAgICAgICAgICBmaWxlXG4gICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgIGFzPVwic2NyaXB0XCJcbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgfVxuXG4gIG1ha2VTdHlsZXNoZWV0SW5lcnQobm9kZTogUmVhY3ROb2RlKTogUmVhY3ROb2RlIHtcbiAgICByZXR1cm4gUmVhY3QuQ2hpbGRyZW4ubWFwKG5vZGUsIChjOiBhbnkpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgYy50eXBlID09PSAnbGluaycgJiZcbiAgICAgICAgYy5wcm9wc1snaHJlZiddICYmXG4gICAgICAgIE9QVElNSVpFRF9GT05UX1BST1ZJREVSUy5zb21lKCh1cmwpID0+IGMucHJvcHNbJ2hyZWYnXS5zdGFydHNXaXRoKHVybCkpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgbmV3UHJvcHMgPSB7IC4uLihjLnByb3BzIHx8IHt9KSB9XG4gICAgICAgIG5ld1Byb3BzWydkYXRhLWhyZWYnXSA9IG5ld1Byb3BzWydocmVmJ11cbiAgICAgICAgbmV3UHJvcHNbJ2hyZWYnXSA9IHVuZGVmaW5lZFxuICAgICAgICByZXR1cm4gUmVhY3QuY2xvbmVFbGVtZW50KGMsIG5ld1Byb3BzKVxuICAgICAgfSBlbHNlIGlmIChjLnByb3BzICYmIGMucHJvcHNbJ2NoaWxkcmVuJ10pIHtcbiAgICAgICAgYy5wcm9wc1snY2hpbGRyZW4nXSA9IHRoaXMubWFrZVN0eWxlc2hlZXRJbmVydChjLnByb3BzWydjaGlsZHJlbiddKVxuICAgICAgfVxuICAgICAgcmV0dXJuIGNcbiAgICB9KVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0eWxlcyxcbiAgICAgIGFtcFBhdGgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBoeWJyaWRBbXAsXG4gICAgICBjYW5vbmljYWxCYXNlLFxuICAgICAgX19ORVhUX0RBVEFfXyxcbiAgICAgIGRhbmdlcm91c0FzUGF0aCxcbiAgICAgIGhlYWRUYWdzLFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcbiAgICBjb25zdCBkaXNhYmxlUnVudGltZUpTID0gdW5zdGFibGVfcnVudGltZUpTID09PSBmYWxzZVxuXG4gICAgdGhpcy5jb250ZXh0LmRvY0NvbXBvbmVudHNSZW5kZXJlZC5IZWFkID0gdHJ1ZVxuXG4gICAgbGV0IHsgaGVhZCB9ID0gdGhpcy5jb250ZXh0XG4gICAgbGV0IGNoaWxkcmVuID0gdGhpcy5wcm9wcy5jaGlsZHJlblxuICAgIC8vIHNob3cgYSB3YXJuaW5nIGlmIEhlYWQgY29udGFpbnMgPHRpdGxlPiAob25seSBpbiBkZXZlbG9wbWVudClcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY2hpbGRyZW4gPSBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIChjaGlsZDogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUmVhY3RIZWxtZXQgPSBjaGlsZD8ucHJvcHM/LlsnZGF0YS1yZWFjdC1oZWxtZXQnXVxuICAgICAgICBpZiAoIWlzUmVhY3RIZWxtZXQpIHtcbiAgICAgICAgICBpZiAoY2hpbGQ/LnR5cGUgPT09ICd0aXRsZScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiA8dGl0bGU+IHNob3VsZCBub3QgYmUgdXNlZCBpbiBfZG9jdW1lbnQuanMncyA8SGVhZD4uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvbm8tZG9jdW1lbnQtdGl0bGVcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICBjaGlsZD8udHlwZSA9PT0gJ21ldGEnICYmXG4gICAgICAgICAgICBjaGlsZD8ucHJvcHM/Lm5hbWUgPT09ICd2aWV3cG9ydCdcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgXCJXYXJuaW5nOiB2aWV3cG9ydCBtZXRhIHRhZ3Mgc2hvdWxkIG5vdCBiZSB1c2VkIGluIF9kb2N1bWVudC5qcydzIDxIZWFkPi4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9uby1kb2N1bWVudC12aWV3cG9ydC1tZXRhXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNoaWxkXG4gICAgICB9KVxuICAgICAgaWYgKHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4pXG4gICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnV2FybmluZzogYEhlYWRgIGF0dHJpYnV0ZSBgY3Jvc3NPcmlnaW5gIGlzIGRlcHJlY2F0ZWQuIGh0dHBzOi8vZXJyLnNoL25leHQuanMvZG9jLWNyb3Nzb3JpZ2luLWRlcHJlY2F0ZWQnXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX09QVElNSVpFX0ZPTlRTICYmICFpbkFtcE1vZGUpIHtcbiAgICAgIGNoaWxkcmVuID0gdGhpcy5tYWtlU3R5bGVzaGVldEluZXJ0KGNoaWxkcmVuKVxuICAgIH1cblxuICAgIGxldCBoYXNBbXBodG1sUmVsID0gZmFsc2VcbiAgICBsZXQgaGFzQ2Fub25pY2FsUmVsID0gZmFsc2VcblxuICAgIC8vIHNob3cgd2FybmluZyBhbmQgcmVtb3ZlIGNvbmZsaWN0aW5nIGFtcCBoZWFkIHRhZ3NcbiAgICBoZWFkID0gUmVhY3QuQ2hpbGRyZW4ubWFwKGhlYWQgfHwgW10sIChjaGlsZCkgPT4ge1xuICAgICAgaWYgKCFjaGlsZCkgcmV0dXJuIGNoaWxkXG4gICAgICBjb25zdCB7IHR5cGUsIHByb3BzIH0gPSBjaGlsZFxuICAgICAgaWYgKGluQW1wTW9kZSkge1xuICAgICAgICBsZXQgYmFkUHJvcDogc3RyaW5nID0gJydcblxuICAgICAgICBpZiAodHlwZSA9PT0gJ21ldGEnICYmIHByb3BzLm5hbWUgPT09ICd2aWV3cG9ydCcpIHtcbiAgICAgICAgICBiYWRQcm9wID0gJ25hbWU9XCJ2aWV3cG9ydFwiJ1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdsaW5rJyAmJiBwcm9wcy5yZWwgPT09ICdjYW5vbmljYWwnKSB7XG4gICAgICAgICAgaGFzQ2Fub25pY2FsUmVsID0gdHJ1ZVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdzY3JpcHQnKSB7XG4gICAgICAgICAgLy8gb25seSBibG9jayBpZlxuICAgICAgICAgIC8vIDEuIGl0IGhhcyBhIHNyYyBhbmQgaXNuJ3QgcG9pbnRpbmcgdG8gYW1wcHJvamVjdCdzIENETlxuICAgICAgICAgIC8vIDIuIGl0IGlzIHVzaW5nIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIHdpdGhvdXQgYSB0eXBlIG9yXG4gICAgICAgICAgLy8gYSB0eXBlIG9mIHRleHQvamF2YXNjcmlwdFxuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIChwcm9wcy5zcmMgJiYgcHJvcHMuc3JjLmluZGV4T2YoJ2FtcHByb2plY3QnKSA8IC0xKSB8fFxuICAgICAgICAgICAgKHByb3BzLmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MICYmXG4gICAgICAgICAgICAgICghcHJvcHMudHlwZSB8fCBwcm9wcy50eXBlID09PSAndGV4dC9qYXZhc2NyaXB0JykpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBiYWRQcm9wID0gJzxzY3JpcHQnXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcm9wcykuZm9yRWFjaCgocHJvcCkgPT4ge1xuICAgICAgICAgICAgICBiYWRQcm9wICs9IGAgJHtwcm9wfT1cIiR7cHJvcHNbcHJvcF19XCJgXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgYmFkUHJvcCArPSAnLz4nXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJhZFByb3ApIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgRm91bmQgY29uZmxpY3RpbmcgYW1wIHRhZyBcIiR7Y2hpbGQudHlwZX1cIiB3aXRoIGNvbmZsaWN0aW5nIHByb3AgJHtiYWRQcm9wfSBpbiAke19fTkVYVF9EQVRBX18ucGFnZX0uIGh0dHBzOi8vZXJyLnNoL25leHQuanMvY29uZmxpY3RpbmctYW1wLXRhZ2BcbiAgICAgICAgICApXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gbm9uLWFtcCBtb2RlXG4gICAgICAgIGlmICh0eXBlID09PSAnbGluaycgJiYgcHJvcHMucmVsID09PSAnYW1waHRtbCcpIHtcbiAgICAgICAgICBoYXNBbXBodG1sUmVsID0gdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gY2hpbGRcbiAgICB9KVxuXG4gICAgLy8gdHJ5IHRvIHBhcnNlIHN0eWxlcyBmcm9tIGZyYWdtZW50IGZvciBiYWNrd2FyZHMgY29tcGF0XG4gICAgY29uc3QgY3VyU3R5bGVzOiBSZWFjdC5SZWFjdEVsZW1lbnRbXSA9IEFycmF5LmlzQXJyYXkoc3R5bGVzKVxuICAgICAgPyAoc3R5bGVzIGFzIFJlYWN0LlJlYWN0RWxlbWVudFtdKVxuICAgICAgOiBbXVxuICAgIGlmIChcbiAgICAgIGluQW1wTW9kZSAmJlxuICAgICAgc3R5bGVzICYmXG4gICAgICAvLyBAdHMtaWdub3JlIFByb3BlcnR5ICdwcm9wcycgZG9lcyBub3QgZXhpc3Qgb24gdHlwZSBSZWFjdEVsZW1lbnRcbiAgICAgIHN0eWxlcy5wcm9wcyAmJlxuICAgICAgLy8gQHRzLWlnbm9yZSBQcm9wZXJ0eSAncHJvcHMnIGRvZXMgbm90IGV4aXN0IG9uIHR5cGUgUmVhY3RFbGVtZW50XG4gICAgICBBcnJheS5pc0FycmF5KHN0eWxlcy5wcm9wcy5jaGlsZHJlbilcbiAgICApIHtcbiAgICAgIGNvbnN0IGhhc1N0eWxlcyA9IChlbDogUmVhY3QuUmVhY3RFbGVtZW50KSA9PlxuICAgICAgICBlbD8ucHJvcHM/LmRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPy5fX2h0bWxcbiAgICAgIC8vIEB0cy1pZ25vcmUgUHJvcGVydHkgJ3Byb3BzJyBkb2VzIG5vdCBleGlzdCBvbiB0eXBlIFJlYWN0RWxlbWVudFxuICAgICAgc3R5bGVzLnByb3BzLmNoaWxkcmVuLmZvckVhY2goKGNoaWxkOiBSZWFjdC5SZWFjdEVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY2hpbGQpKSB7XG4gICAgICAgICAgY2hpbGQuZm9yRWFjaCgoZWwpID0+IGhhc1N0eWxlcyhlbCkgJiYgY3VyU3R5bGVzLnB1c2goZWwpKVxuICAgICAgICB9IGVsc2UgaWYgKGhhc1N0eWxlcyhjaGlsZCkpIHtcbiAgICAgICAgICBjdXJTdHlsZXMucHVzaChjaGlsZClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBjb25zdCBmaWxlczogRG9jdW1lbnRGaWxlcyA9IGdldERvY3VtZW50RmlsZXMoXG4gICAgICB0aGlzLmNvbnRleHQuYnVpbGRNYW5pZmVzdCxcbiAgICAgIHRoaXMuY29udGV4dC5fX05FWFRfREFUQV9fLnBhZ2VcbiAgICApXG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkIHsuLi50aGlzLnByb3BzfT5cbiAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgIGRhdGEtbmV4dC1oaWRlLWZvdWNcbiAgICAgICAgICAgICAgZGF0YS1hbXBkZXZtb2RlPXtpbkFtcE1vZGUgPyAndHJ1ZScgOiB1bmRlZmluZWR9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXtkaXNwbGF5Om5vbmV9YCxcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8bm9zY3JpcHRcbiAgICAgICAgICAgICAgZGF0YS1uZXh0LWhpZGUtZm91Y1xuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGU9e2luQW1wTW9kZSA/ICd0cnVlJyA6IHVuZGVmaW5lZH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7ZGlzcGxheTpibG9ja31gLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L25vc2NyaXB0PlxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIHtoZWFkfVxuICAgICAgICB7aW5BbXBNb2RlICYmIChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPG1ldGFcbiAgICAgICAgICAgICAgbmFtZT1cInZpZXdwb3J0XCJcbiAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCxtaW5pbXVtLXNjYWxlPTEsaW5pdGlhbC1zY2FsZT0xXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7IWhhc0Nhbm9uaWNhbFJlbCAmJiAoXG4gICAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgICAgcmVsPVwiY2Fub25pY2FsXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgY2xlYW5BbXBQYXRoKGRhbmdlcm91c0FzUGF0aCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgey8qIGh0dHBzOi8vd3d3LmFtcHByb2plY3Qub3JnL2RvY3MvZnVuZGFtZW50YWxzL29wdGltaXplX2FtcCNvcHRpbWl6ZS10aGUtYW1wLXJ1bnRpbWUtbG9hZGluZyAqL31cbiAgICAgICAgICAgIDxsaW5rXG4gICAgICAgICAgICAgIHJlbD1cInByZWxvYWRcIlxuICAgICAgICAgICAgICBhcz1cInNjcmlwdFwiXG4gICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2Nkbi5hbXBwcm9qZWN0Lm9yZy92MC5qc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgey8qIEFkZCBjdXN0b20gc3R5bGVzIGJlZm9yZSBBTVAgc3R5bGVzIHRvIHByZXZlbnQgYWNjaWRlbnRhbCBvdmVycmlkZXMgKi99XG4gICAgICAgICAgICB7c3R5bGVzICYmIChcbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWN1c3RvbT1cIlwiXG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogY3VyU3R5bGVzXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoKHN0eWxlKSA9PiBzdHlsZS5wcm9wcy5kYW5nZXJvdXNseVNldElubmVySFRNTC5fX2h0bWwpXG4gICAgICAgICAgICAgICAgICAgIC5qb2luKCcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqIyBzb3VyY2VNYXBwaW5nVVJMPS4qXFwqXFwvL2csICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFwvXFwqQCBzb3VyY2VVUkw9Lio/XFwqXFwvL2csICcnKSxcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxzdHlsZVxuICAgICAgICAgICAgICBhbXAtYm9pbGVycGxhdGU9XCJcIlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogYGJvZHl7LXdlYmtpdC1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDstbW96LWFuaW1hdGlvbjotYW1wLXN0YXJ0IDhzIHN0ZXBzKDEsZW5kKSAwcyAxIG5vcm1hbCBib3RoOy1tcy1hbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aDthbmltYXRpb246LWFtcC1zdGFydCA4cyBzdGVwcygxLGVuZCkgMHMgMSBub3JtYWwgYm90aH1ALXdlYmtpdC1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QC1tb3ota2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtbXMta2V5ZnJhbWVzIC1hbXAtc3RhcnR7ZnJvbXt2aXNpYmlsaXR5OmhpZGRlbn10b3t2aXNpYmlsaXR5OnZpc2libGV9fUAtby1rZXlmcmFtZXMgLWFtcC1zdGFydHtmcm9te3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyAtYW1wLXN0YXJ0e2Zyb217dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX1gLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxub3NjcmlwdD5cbiAgICAgICAgICAgICAgPHN0eWxlXG4gICAgICAgICAgICAgICAgYW1wLWJvaWxlcnBsYXRlPVwiXCJcbiAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgX19odG1sOiBgYm9keXstd2Via2l0LWFuaW1hdGlvbjpub25lOy1tb3otYW5pbWF0aW9uOm5vbmU7LW1zLWFuaW1hdGlvbjpub25lO2FuaW1hdGlvbjpub25lfWAsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvbm9zY3JpcHQ+XG4gICAgICAgICAgICA8c2NyaXB0IGFzeW5jIHNyYz1cImh0dHBzOi8vY2RuLmFtcHByb2plY3Qub3JnL3YwLmpzXCIgLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKX1cbiAgICAgICAgeyFpbkFtcE1vZGUgJiYgKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICB7IWhhc0FtcGh0bWxSZWwgJiYgaHlicmlkQW1wICYmIChcbiAgICAgICAgICAgICAgPGxpbmtcbiAgICAgICAgICAgICAgICByZWw9XCJhbXBodG1sXCJcbiAgICAgICAgICAgICAgICBocmVmPXtjYW5vbmljYWxCYXNlICsgZ2V0QW1wUGF0aChhbXBQYXRoLCBkYW5nZXJvdXNBc1BhdGgpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfT1BUSU1JWkVfRk9OVFNcbiAgICAgICAgICAgICAgPyB0aGlzLm1ha2VTdHlsZXNoZWV0SW5lcnQodGhpcy5nZXRDc3NMaW5rcyhmaWxlcykpXG4gICAgICAgICAgICAgIDogdGhpcy5nZXRDc3NMaW5rcyhmaWxlcyl9XG4gICAgICAgICAgICA8bm9zY3JpcHQgZGF0YS1uLWNzcyAvPlxuICAgICAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UHJlbG9hZER5bmFtaWNDaHVua3MoKX1cbiAgICAgICAgICAgIHshZGlzYWJsZVJ1bnRpbWVKUyAmJiB0aGlzLmdldFByZWxvYWRNYWluTGlua3MoZmlsZXMpfVxuICAgICAgICAgICAge3RoaXMuY29udGV4dC5pc0RldmVsb3BtZW50ICYmIChcbiAgICAgICAgICAgICAgLy8gdGhpcyBlbGVtZW50IGlzIHVzZWQgdG8gbW91bnQgZGV2ZWxvcG1lbnQgc3R5bGVzIHNvIHRoZVxuICAgICAgICAgICAgICAvLyBvcmRlcmluZyBtYXRjaGVzIHByb2R1Y3Rpb25cbiAgICAgICAgICAgICAgLy8gKGJ5IGRlZmF1bHQsIHN0eWxlLWxvYWRlciBpbmplY3RzIGF0IHRoZSBib3R0b20gb2YgPGhlYWQgLz4pXG4gICAgICAgICAgICAgIDxub3NjcmlwdCBpZD1cIl9fbmV4dF9jc3NfX0RPX05PVF9VU0VfX1wiIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge3N0eWxlcyB8fCBudWxsfVxuICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgICB7UmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwge30sIC4uLihoZWFkVGFncyB8fCBbXSkpfVxuICAgICAgPC9oZWFkPlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gTWFpbigpIHtcbiAgY29uc3QgeyBpbkFtcE1vZGUsIGh0bWwsIGRvY0NvbXBvbmVudHNSZW5kZXJlZCB9ID0gdXNlQ29udGV4dChcbiAgICBEb2N1bWVudENvbXBvbmVudENvbnRleHRcbiAgKVxuXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZC5NYWluID0gdHJ1ZVxuXG4gIGlmIChpbkFtcE1vZGUpIHJldHVybiA8PntBTVBfUkVOREVSX1RBUkdFVH08Lz5cbiAgcmV0dXJuIDxkaXYgaWQ9XCJfX25leHRcIiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGh0bWwgfX0gLz5cbn1cblxuZXhwb3J0IGNsYXNzIE5leHRTY3JpcHQgZXh0ZW5kcyBDb21wb25lbnQ8T3JpZ2luUHJvcHM+IHtcbiAgc3RhdGljIGNvbnRleHRUeXBlID0gRG9jdW1lbnRDb21wb25lbnRDb250ZXh0XG5cbiAgc3RhdGljIHByb3BUeXBlcyA9IHtcbiAgICBub25jZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBjcm9zc09yaWdpbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfVxuXG4gIGNvbnRleHQhOiBSZWFjdC5Db250ZXh0VHlwZTx0eXBlb2YgRG9jdW1lbnRDb21wb25lbnRDb250ZXh0PlxuXG4gIC8vIFNvdXJjZTogaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vc2FtdGhvci82NGIxMTRlNGE0ZjUzOTkxNWE5NWI5MWZmZDM0MGFjY1xuICBzdGF0aWMgc2FmYXJpTm9tb2R1bGVGaXggPVxuICAgICchZnVuY3Rpb24oKXt2YXIgZT1kb2N1bWVudCx0PWUuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtpZighKFwibm9Nb2R1bGVcImluIHQpJiZcIm9uYmVmb3JlbG9hZFwiaW4gdCl7dmFyIG49ITE7ZS5hZGRFdmVudExpc3RlbmVyKFwiYmVmb3JlbG9hZFwiLGZ1bmN0aW9uKGUpe2lmKGUudGFyZ2V0PT09dCluPSEwO2Vsc2UgaWYoIWUudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcIm5vbW9kdWxlXCIpfHwhbilyZXR1cm47ZS5wcmV2ZW50RGVmYXVsdCgpfSwhMCksdC50eXBlPVwibW9kdWxlXCIsdC5zcmM9XCIuXCIsZS5oZWFkLmFwcGVuZENoaWxkKHQpLHQucmVtb3ZlKCl9fSgpOydcblxuICBnZXREeW5hbWljQ2h1bmtzKGZpbGVzOiBEb2N1bWVudEZpbGVzKSB7XG4gICAgY29uc3Qge1xuICAgICAgZHluYW1pY0ltcG9ydHMsXG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGlzRGV2ZWxvcG1lbnQsXG4gICAgICBkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZyxcbiAgICB9ID0gdGhpcy5jb250ZXh0XG5cbiAgICByZXR1cm4gZGVkdXBlKGR5bmFtaWNJbXBvcnRzKS5tYXAoKGJ1bmRsZSkgPT4ge1xuICAgICAgbGV0IG1vZGVyblByb3BzID0ge31cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEKSB7XG4gICAgICAgIG1vZGVyblByb3BzID0gYnVuZGxlLmZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFidW5kbGUuZmlsZS5lbmRzV2l0aCgnLmpzJykgfHwgZmlsZXMuYWxsRmlsZXMuaW5jbHVkZXMoYnVuZGxlLmZpbGUpKVxuICAgICAgICByZXR1cm4gbnVsbFxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgYXN5bmM9eyFpc0RldmVsb3BtZW50fVxuICAgICAgICAgIGtleT17YnVuZGxlLmZpbGV9XG4gICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtlbmNvZGVVUkkoXG4gICAgICAgICAgICBidW5kbGUuZmlsZVxuICAgICAgICAgICl9JHtkZXZPbmx5Q2FjaGVCdXN0ZXJRdWVyeVN0cmluZ31gfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICB7Li4ubW9kZXJuUHJvcHN9XG4gICAgICAgIC8+XG4gICAgICApXG4gICAgfSlcbiAgfVxuXG4gIGdldFNjcmlwdHMoZmlsZXM6IERvY3VtZW50RmlsZXMpIHtcbiAgICBjb25zdCB7XG4gICAgICBhc3NldFByZWZpeCxcbiAgICAgIGJ1aWxkTWFuaWZlc3QsXG4gICAgICBpc0RldmVsb3BtZW50LFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuXG4gICAgY29uc3Qgbm9ybWFsU2NyaXB0cyA9IGZpbGVzLmFsbEZpbGVzLmZpbHRlcigoZmlsZSkgPT4gZmlsZS5lbmRzV2l0aCgnLmpzJykpXG4gICAgY29uc3QgbG93UHJpb3JpdHlTY3JpcHRzID0gYnVpbGRNYW5pZmVzdC5sb3dQcmlvcml0eUZpbGVzPy5maWx0ZXIoKGZpbGUpID0+XG4gICAgICBmaWxlLmVuZHNXaXRoKCcuanMnKVxuICAgIClcblxuICAgIHJldHVybiBbLi4ubm9ybWFsU2NyaXB0cywgLi4ubG93UHJpb3JpdHlTY3JpcHRzXS5tYXAoKGZpbGUpID0+IHtcbiAgICAgIGxldCBtb2Rlcm5Qcm9wcyA9IHt9XG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX01PREVSTl9CVUlMRCkge1xuICAgICAgICBtb2Rlcm5Qcm9wcyA9IGZpbGUuZW5kc1dpdGgoJy5tb2R1bGUuanMnKVxuICAgICAgICAgID8geyB0eXBlOiAnbW9kdWxlJyB9XG4gICAgICAgICAgOiB7IG5vTW9kdWxlOiB0cnVlIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIChcbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICBhc3luYz17IWlzRGV2ZWxvcG1lbnR9XG4gICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgfVxuICAgICAgICAgIHsuLi5tb2Rlcm5Qcm9wc31cbiAgICAgICAgLz5cbiAgICAgIClcbiAgICB9KVxuICB9XG5cbiAgZ2V0UG9seWZpbGxTY3JpcHRzKCkge1xuICAgIC8vIHBvbHlmaWxscy5qcyBoYXMgdG8gYmUgcmVuZGVyZWQgYXMgbm9tb2R1bGUgd2l0aG91dCBhc3luY1xuICAgIC8vIEl0IGFsc28gaGFzIHRvIGJlIHRoZSBmaXJzdCBzY3JpcHQgdG8gbG9hZFxuICAgIGNvbnN0IHtcbiAgICAgIGFzc2V0UHJlZml4LFxuICAgICAgYnVpbGRNYW5pZmVzdCxcbiAgICAgIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nLFxuICAgIH0gPSB0aGlzLmNvbnRleHRcblxuICAgIHJldHVybiBidWlsZE1hbmlmZXN0LnBvbHlmaWxsRmlsZXNcbiAgICAgIC5maWx0ZXIoXG4gICAgICAgIChwb2x5ZmlsbCkgPT5cbiAgICAgICAgICBwb2x5ZmlsbC5lbmRzV2l0aCgnLmpzJykgJiYgIXBvbHlmaWxsLmVuZHNXaXRoKCcubW9kdWxlLmpzJylcbiAgICAgIClcbiAgICAgIC5tYXAoKHBvbHlmaWxsKSA9PiAoXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICBrZXk9e3BvbHlmaWxsfVxuICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgIH1cbiAgICAgICAgICBub01vZHVsZT17dHJ1ZX1cbiAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke3BvbHlmaWxsfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgLz5cbiAgICAgICkpXG4gIH1cblxuICBzdGF0aWMgZ2V0SW5saW5lU2NyaXB0U291cmNlKGRvY3VtZW50UHJvcHM6IERvY3VtZW50UHJvcHMpOiBzdHJpbmcge1xuICAgIGNvbnN0IHsgX19ORVhUX0RBVEFfXyB9ID0gZG9jdW1lbnRQcm9wc1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gSlNPTi5zdHJpbmdpZnkoX19ORVhUX0RBVEFfXylcbiAgICAgIHJldHVybiBodG1sRXNjYXBlSnNvblN0cmluZyhkYXRhKVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5tZXNzYWdlLmluZGV4T2YoJ2NpcmN1bGFyIHN0cnVjdHVyZScpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICBgQ2lyY3VsYXIgc3RydWN0dXJlIGluIFwiZ2V0SW5pdGlhbFByb3BzXCIgcmVzdWx0IG9mIHBhZ2UgXCIke19fTkVYVF9EQVRBX18ucGFnZX1cIi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvY2lyY3VsYXItc3RydWN0dXJlYFxuICAgICAgICApXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgYXNzZXRQcmVmaXgsXG4gICAgICBpbkFtcE1vZGUsXG4gICAgICBidWlsZE1hbmlmZXN0LFxuICAgICAgdW5zdGFibGVfcnVudGltZUpTLFxuICAgICAgZG9jQ29tcG9uZW50c1JlbmRlcmVkLFxuICAgICAgZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmcsXG4gICAgfSA9IHRoaXMuY29udGV4dFxuICAgIGNvbnN0IGRpc2FibGVSdW50aW1lSlMgPSB1bnN0YWJsZV9ydW50aW1lSlMgPT09IGZhbHNlXG5cbiAgICBkb2NDb21wb25lbnRzUmVuZGVyZWQuTmV4dFNjcmlwdCA9IHRydWVcblxuICAgIGlmIChpbkFtcE1vZGUpIHtcbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFtcERldkZpbGVzID0gW1xuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmRldkZpbGVzLFxuICAgICAgICAuLi5idWlsZE1hbmlmZXN0LmFtcERldkZpbGVzLFxuICAgICAgXVxuXG4gICAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IChcbiAgICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgICAgaWQ9XCJfX05FWFRfREFUQV9fXCJcbiAgICAgICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2pzb25cIlxuICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuY3Jvc3NPcmlnaW4gfHwgcHJvY2Vzcy5lbnYuX19ORVhUX0NST1NTX09SSUdJTlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LmdldElubGluZVNjcmlwdFNvdXJjZSh0aGlzLmNvbnRleHQpLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7YW1wRGV2RmlsZXMubWFwKChmaWxlKSA9PiAoXG4gICAgICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgc3JjPXtgJHthc3NldFByZWZpeH0vX25leHQvJHtmaWxlfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgbm9uY2U9e3RoaXMucHJvcHMubm9uY2V9XG4gICAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkYXRhLWFtcGRldm1vZGVcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvPlxuICAgICAgKVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodGhpcy5wcm9wcy5jcm9zc09yaWdpbilcbiAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICdXYXJuaW5nOiBgTmV4dFNjcmlwdGAgYXR0cmlidXRlIGBjcm9zc09yaWdpbmAgaXMgZGVwcmVjYXRlZC4gaHR0cHM6Ly9lcnIuc2gvbmV4dC5qcy9kb2MtY3Jvc3NvcmlnaW4tZGVwcmVjYXRlZCdcbiAgICAgICAgKVxuICAgIH1cblxuICAgIGNvbnN0IGZpbGVzOiBEb2N1bWVudEZpbGVzID0gZ2V0RG9jdW1lbnRGaWxlcyhcbiAgICAgIHRoaXMuY29udGV4dC5idWlsZE1hbmlmZXN0LFxuICAgICAgdGhpcy5jb250ZXh0Ll9fTkVYVF9EQVRBX18ucGFnZVxuICAgIClcbiAgICByZXR1cm4gKFxuICAgICAgPD5cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXNcbiAgICAgICAgICA/IGJ1aWxkTWFuaWZlc3QuZGV2RmlsZXMubWFwKChmaWxlOiBzdHJpbmcpID0+IChcbiAgICAgICAgICAgICAgPHNjcmlwdFxuICAgICAgICAgICAgICAgIGtleT17ZmlsZX1cbiAgICAgICAgICAgICAgICBzcmM9e2Ake2Fzc2V0UHJlZml4fS9fbmV4dC8ke2VuY29kZVVSSShcbiAgICAgICAgICAgICAgICAgIGZpbGVcbiAgICAgICAgICAgICAgICApfSR7ZGV2T25seUNhY2hlQnVzdGVyUXVlcnlTdHJpbmd9YH1cbiAgICAgICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgICAgICBjcm9zc09yaWdpbj17XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApKVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgICAge2Rpc2FibGVSdW50aW1lSlMgPyBudWxsIDogKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIGlkPVwiX19ORVhUX0RBVEFfX1wiXG4gICAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vanNvblwiXG4gICAgICAgICAgICBub25jZT17dGhpcy5wcm9wcy5ub25jZX1cbiAgICAgICAgICAgIGNyb3NzT3JpZ2luPXtcbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5jcm9zc09yaWdpbiB8fCBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICBfX2h0bWw6IE5leHRTY3JpcHQuZ2V0SW5saW5lU2NyaXB0U291cmNlKHRoaXMuY29udGV4dCksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHtwcm9jZXNzLmVudi5fX05FWFRfTU9ERVJOX0JVSUxEICYmICFkaXNhYmxlUnVudGltZUpTID8gKFxuICAgICAgICAgIDxzY3JpcHRcbiAgICAgICAgICAgIG5vbmNlPXt0aGlzLnByb3BzLm5vbmNlfVxuICAgICAgICAgICAgY3Jvc3NPcmlnaW49e1xuICAgICAgICAgICAgICB0aGlzLnByb3BzLmNyb3NzT3JpZ2luIHx8IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vTW9kdWxlPXt0cnVlfVxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgX19odG1sOiBOZXh0U2NyaXB0LnNhZmFyaU5vbW9kdWxlRml4LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgICAgeyFkaXNhYmxlUnVudGltZUpTICYmIHRoaXMuZ2V0UG9seWZpbGxTY3JpcHRzKCl9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IHRoaXMuZ2V0RHluYW1pY0NodW5rcyhmaWxlcyl9XG4gICAgICAgIHtkaXNhYmxlUnVudGltZUpTID8gbnVsbCA6IHRoaXMuZ2V0U2NyaXB0cyhmaWxlcyl9XG4gICAgICA8Lz5cbiAgICApXG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0QW1wUGF0aChhbXBQYXRoOiBzdHJpbmcsIGFzUGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIGFtcFBhdGggfHwgYCR7YXNQYXRofSR7YXNQYXRoLmluY2x1ZGVzKCc/JykgPyAnJicgOiAnPyd9YW1wPTFgXG59XG4iLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLmh0bWxFc2NhcGVKc29uU3RyaW5nPWh0bWxFc2NhcGVKc29uU3RyaW5nOy8vIFRoaXMgdXRpbGl0eSBpcyBiYXNlZCBvbiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlXG4vLyBMaWNlbnNlOiBodHRwczovL2dpdGh1Yi5jb20vemVydG9zaC9odG1sZXNjYXBlL2Jsb2IvMDUyN2NhNzE1NmE1MjRkMjU2MTAxYmIzMTBhOWY5NzBmNjMwNzhhZC9MSUNFTlNFXG5jb25zdCBFU0NBUEVfTE9PS1VQPXsnJic6J1xcXFx1MDAyNicsJz4nOidcXFxcdTAwM2UnLCc8JzonXFxcXHUwMDNjJywnXFx1MjAyOCc6J1xcXFx1MjAyOCcsJ1xcdTIwMjknOidcXFxcdTIwMjknfTtjb25zdCBFU0NBUEVfUkVHRVg9L1smPjxcXHUyMDI4XFx1MjAyOV0vZztmdW5jdGlvbiBodG1sRXNjYXBlSnNvblN0cmluZyhzdHIpe3JldHVybiBzdHIucmVwbGFjZShFU0NBUEVfUkVHRVgsbWF0Y2g9PkVTQ0FQRV9MT09LVVBbbWF0Y2hdKTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1odG1sZXNjYXBlLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L3BhZ2VzL19kb2N1bWVudCcpXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiL19uZXh0L3N0YXRpYy9pbWFnZXMvZmF2aWNvbi1hYTU0MTk1YjU1OWZlNTFjZmUxZWQzMjE5NjY3ODkzNS5wbmdcIjsiLCJpbXBvcnQgRG9jdW1lbnQsIHsgSHRtbCwgSGVhZCwgTWFpbiwgTmV4dFNjcmlwdCB9IGZyb20gJ25leHQvZG9jdW1lbnQnO1xyXG5pbXBvcnQgZmF2aWNvbiBmcm9tICdhc3NldHMvaW1hZ2VzL2Zhdmljb24ucG5nJ1xyXG5cclxuY2xhc3MgQ3VzdG9tRG9jdW1lbnQgZXh0ZW5kcyBEb2N1bWVudCB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcyhjdHgpIHtcclxuICAgIGNvbnN0IGluaXRpYWxQcm9wcyA9IGF3YWl0IERvY3VtZW50LmdldEluaXRpYWxQcm9wcyhjdHgpO1xyXG4gICAgcmV0dXJuIHsgLi4uaW5pdGlhbFByb3BzIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8SHRtbCBsYW5nPVwiZW4tVVNcIj5cclxuICAgICAgICA8SGVhZD5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1CcmVlK1NlcmlmJmZhbWlseT1ETStTYW5zOndnaHRANDAwOzUwMDs3MDAmZGlzcGxheT1zd2FwXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvYW5pbWF0ZS5jc3MvMy41LjIvYW5pbWF0ZS5taW4uY3NzXCIgLz5cclxuICAgICAgICAgIDxsaW5rIHJlbD1cInNob3J0Y3V0IGljb25cIiBocmVmPXtmYXZpY29ufSB0eXBlPVwiaW1hZ2UvcG5nXCIgLz5cclxuICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8TWFpbiAvPlxyXG4gICAgICAgICAgPE5leHRTY3JpcHQgLz5cclxuICAgICAgICA8L2JvZHk+XHJcbiAgICAgIDwvSHRtbD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Eb2N1bWVudDtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicHJvcC10eXBlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3NlcnZlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9