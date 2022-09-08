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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/css/react-slick.css":
/*!****************************************!*\
  !*** ./src/assets/css/react-slick.css ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CustomApp; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_css_react_slick_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! assets/css/react-slick.css */ "./src/assets/css/react-slick.css");
/* harmony import */ var assets_css_react_slick_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(assets_css_react_slick_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var hooks_useInformacoes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hooks/useInformacoes */ "./src/hooks/useInformacoes.jsx");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\pages\\_app.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/** Uncomment the below codeblock if you want to add google analytics for more info please visit our docs analytics section */

/** 
import { useEffect } from 'react';
import Router from 'next/router';
import { initGA, logPageView } from 'analytics';
*/



function CustomApp({
  Component,
  pageProps
}) {
  /** 
   useEffect(() => {
     initGA();
     logPageView();
     Router.events.on('routeChangeComplete', logPageView);
   }, []);
   */
  return __jsx(hooks_useInformacoes__WEBPACK_IMPORTED_MODULE_2__["InformacoesProvider"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 5
    }
  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1, shrink-to-fit=no",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }), __jsx("title", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, "Servcon Contabilidade"), __jsx("link", {
    rel: "icon",
    href: "assets/images/favicon.png",
    type: "image/x-icon",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "description",
    content: "Prestar servi\xE7os cont\xE1beis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "author",
    content: "TBrWeb - Cria\xE7\xE3o e Desenvolvimento de Sites",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:title",
    content: "Servcon Contabilidade",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:url",
    content: "https://www.servcon1.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:image",
    content: "https://www.servcon1.com/assets/images/logo.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 9
    }
  }), __jsx("meta", {
    property: "og:description",
    content: "Prestar servi\xE7os cont\xE1beis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:card",
    content: "summary",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "Servcon Contabilidade",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:site",
    content: "https://www.servcon1.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:image",
    content: "https://www.servcon1.com/assets/images/logo.png",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:domain",
    content: "servcon1.com",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:title",
    content: "Servcon Contabilidade",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 9
    }
  }), __jsx("meta", {
    name: "twitter:description",
    content: "Prestar servi\xE7os cont\xE1beis e assessoria de qualidade, buscando atender as necessidades de nossos clientes e parceiros",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  })), __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  })));
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

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./src/pages/_app.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUluZm9ybWFjb2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiSW5mb3JtYWNvZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm9yZ2FuaXphck9icmlnYWNvZXNQb3JFc3RhZG8iLCJvYnJpZ2Fjb2VzR2VyYWwiLCJlc3Bpcml0b1NhbnRvIiwiZmlsdGVyIiwib2JyIiwibW5fZXN1YnBhc3RhIiwibWF0b0dyb3Nzb0RvU3VsIiwibWluYXNHZXJhaXMiLCJyaW9HcmFuZGVEb1N1bCIsInBhcmFuYSIsInJpb0RlSmFuZWlybyIsInNhbnRhQ2F0YXJpbmEiLCJzYW9QYXVsbyIsIkluZm9ybWFjb2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsIm5vdGljaWFzIiwic2V0Tm90aWNpYXMiLCJ1c2VTdGF0ZSIsIm9icmlnYWNvZXMiLCJzZXRPYnJpZ2Fjb2VzIiwiYWdlbmRhIiwic2V0QWdlbmRhIiwiY290YWNvZXMiLCJzZXRDb3RhY29lcyIsInVzZUVmZmVjdCIsInVybDEiLCJhcGkiLCJnZXQiLCJ1cmwyIiwidXJsMyIsInVybDQiLCJheGlvcyIsImFsbCIsInRoZW4iLCJzcHJlYWQiLCJyZXNwb25zZXMiLCJkYXRhIiwidXNlSW5mb3JtYWNvZXMiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkN1c3RvbUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZSIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFD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QVg7QUFBMkIsV0FBTyxFQUFDLHVCQUFuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBckJGLEVBc0JFO0FBQU0sUUFBSSxFQUFDLHFCQUFYO0FBQWlDLFdBQU8sRUFBQyw2SEFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXRCRixDQURGLEVBeUJFLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0F6QkYsQ0FERjtBQTZCRCxDOzs7Ozs7Ozs7Ozs7QUNoREQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVPLE1BQU1oQixHQUFHLEdBQUdLLDRDQUFLLENBQUNZLE1BQU4sQ0FBYTtBQUM5QkMsU0FBTyxFQUFFO0FBRHFCLENBQWIsQ0FBWixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZQLGtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLGtDIiwiZmlsZSI6InBhZ2VzL19hcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcbmltcG9ydCB7IGFwaSB9IGZyb20gXCJwYWdlcy9hcGkvYXBpXCI7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBJbmZvcm1hY29lc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KClcclxuXHJcbmZ1bmN0aW9uIG9yZ2FuaXphck9icmlnYWNvZXNQb3JFc3RhZG8ob2JyaWdhY29lc0dlcmFsKSB7XHJcbiAgY29uc3QgZXNwaXJpdG9TYW50byA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE2OClcclxuICBjb25zdCBtYXRvR3Jvc3NvRG9TdWwgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSA1NDQzKVxyXG4gIGNvbnN0IG1pbmFzR2VyYWlzID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTY5KVxyXG4gIGNvbnN0IHJpb0dyYW5kZURvU3VsID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTU1KVxyXG4gIGNvbnN0IHBhcmFuYSA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1OClcclxuICBjb25zdCByaW9EZUphbmVpcm8gPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTMpXHJcbiAgY29uc3Qgc2FudGFDYXRhcmluYSA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1NClcclxuICBjb25zdCBzYW9QYXVsbyA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1MilcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGVzcGlyaXRvU2FudG86IFsgLi4uZXNwaXJpdG9TYW50byBdLFxyXG4gICAgbWF0b0dyb3Nzb0RvU3VsOiBbIC4uLm1hdG9Hcm9zc29Eb1N1bCBdLFxyXG4gICAgbWluYXNHZXJhaXM6IFsgLi4ubWluYXNHZXJhaXMgXSxcclxuICAgIHJpb0dyYW5kZURvU3VsOiBbIC4uLnJpb0dyYW5kZURvU3VsIF0sXHJcbiAgICBwYXJhbmE6IFsgLi4ucGFyYW5hIF0sXHJcbiAgICByaW9EZUphbmVpcm86IFsgLi4ucmlvRGVKYW5laXJvIF0sXHJcbiAgICBzYW50YUNhdGFyaW5hOiBbIC4uLnNhbnRhQ2F0YXJpbmEgXSxcclxuICAgIHNhb1BhdWxvOiBbIC4uLnNhb1BhdWxvIF0sXHJcblxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEluZm9ybWFjb2VzUHJvdmlkZXIoeyBjaGlsZHJlbiB9KSB7XHJcbiAgY29uc3QgW25vdGljaWFzLCBzZXROb3RpY2lhc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbb2JyaWdhY29lcywgc2V0T2JyaWdhY29lc10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbYWdlbmRhLCBzZXRBZ2VuZGFdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2NvdGFjb2VzLCBzZXRDb3RhY29lc10gPSB1c2VTdGF0ZShbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHVybDEgPSBhcGkuZ2V0KCdub3RpY2lhcycpXHJcbiAgICBjb25zdCB1cmwyID0gYXBpLmdldCgnY290YWNvZXMnKVxyXG4gICAgY29uc3QgdXJsMyA9IGFwaS5nZXQoJ29icmlnYWNvZXMnKVxyXG4gICAgY29uc3QgdXJsNCA9IGFwaS5nZXQoJ2FnZW5kYScpXHJcbiAgICBheGlvcy5hbGwoW3VybDEsIHVybDIsIHVybDMsIHVybDRdKVxyXG4gICAgICAudGhlbihheGlvcy5zcHJlYWQoKC4uLnJlc3BvbnNlcykgPT4ge1xyXG4gICAgICAgIHNldE5vdGljaWFzKHJlc3BvbnNlc1swXS5kYXRhKVxyXG4gICAgICAgIHNldENvdGFjb2VzKHJlc3BvbnNlc1sxXS5kYXRhKVxyXG4gICAgICAgIHNldE9icmlnYWNvZXMob3JnYW5pemFyT2JyaWdhY29lc1BvckVzdGFkbyhyZXNwb25zZXNbMl0uZGF0YSkpXHJcbiAgICAgICAgc2V0QWdlbmRhKHJlc3BvbnNlc1szXS5kYXRhKVxyXG4gICAgICB9KSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxJbmZvcm1hY29lc0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgbm90aWNpYXMsIG9icmlnYWNvZXMsIGFnZW5kYSwgY290YWNvZXMgfX0+XHJcbiAgICAgIHsgY2hpbGRyZW4gfVxyXG4gICAgPC9JbmZvcm1hY29lc0NvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXNlSW5mb3JtYWNvZXMoKSB7XHJcbiAgY29uc3QgY29udGV4dCA9IHVzZUNvbnRleHQoSW5mb3JtYWNvZXNDb250ZXh0KVxyXG4gIHJldHVybiBjb250ZXh0XHJcbn0iLCIvKiogVW5jb21tZW50IHRoZSBiZWxvdyBjb2RlYmxvY2sgaWYgeW91IHdhbnQgdG8gYWRkIGdvb2dsZSBhbmFseXRpY3MgZm9yIG1vcmUgaW5mbyBwbGVhc2UgdmlzaXQgb3VyIGRvY3MgYW5hbHl0aWNzIHNlY3Rpb24gKi9cclxuLyoqIFxyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5pbXBvcnQgeyBpbml0R0EsIGxvZ1BhZ2VWaWV3IH0gZnJvbSAnYW5hbHl0aWNzJztcclxuKi9cclxuaW1wb3J0ICdhc3NldHMvY3NzL3JlYWN0LXNsaWNrLmNzcyc7XHJcbmltcG9ydCB7IEluZm9ybWFjb2VzUHJvdmlkZXIgfSBmcm9tICdob29rcy91c2VJbmZvcm1hY29lcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b21BcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XHJcbiAgLyoqIFxyXG4gICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgIGluaXRHQSgpO1xyXG4gICAgIGxvZ1BhZ2VWaWV3KCk7XHJcbiAgICAgUm91dGVyLmV2ZW50cy5vbigncm91dGVDaGFuZ2VDb21wbGV0ZScsIGxvZ1BhZ2VWaWV3KTtcclxuICAgfSwgW10pO1xyXG4gICAqL1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEluZm9ybWFjb2VzUHJvdmlkZXI+XHJcbiAgICAgIDxIZWFkPlxyXG4gICAgICAgIDxtZXRhXHJcbiAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLCBzaHJpbmstdG8tZml0PW5vXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDx0aXRsZT5TZXJ2Y29uIENvbnRhYmlsaWRhZGU8L3RpdGxlPlxyXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiYXNzZXRzL2ltYWdlcy9mYXZpY29uLnBuZ1wiIHR5cGU9XCJpbWFnZS94LWljb25cIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQcmVzdGFyIHNlcnZpw6dvcyBjb250w6FiZWlzIGUgYXNzZXNzb3JpYSBkZSBxdWFsaWRhZGUsIGJ1c2NhbmRvIGF0ZW5kZXIgYXMgbmVjZXNzaWRhZGVzIGRlIG5vc3NvcyBjbGllbnRlcyBlIHBhcmNlaXJvc1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cImF1dGhvclwiIGNvbnRlbnQ9XCJUQnJXZWIgLSBDcmlhw6fDo28gZSBEZXNlbnZvbHZpbWVudG8gZGUgU2l0ZXNcIiAvPlxyXG5cclxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD1cIlNlcnZjb24gQ29udGFiaWxpZGFkZVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vd3d3LnNlcnZjb24xLmNvbVwiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3d3dy5zZXJ2Y29uMS5jb20vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQcmVzdGFyIHNlcnZpw6dvcyBjb250w6FiZWlzIGUgYXNzZXNzb3JpYSBkZSBxdWFsaWRhZGUsIGJ1c2NhbmRvIGF0ZW5kZXIgYXMgbmVjZXNzaWRhZGVzIGRlIG5vc3NvcyBjbGllbnRlcyBlIHBhcmNlaXJvc1wiIC8+XHJcblxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJTZXJ2Y29uIENvbnRhYmlsaWRhZGVcIiAvPlxyXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiaHR0cHM6Ly93d3cuc2VydmNvbjEuY29tXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZVwiIGNvbnRlbnQ9XCJodHRwczovL3d3dy5zZXJ2Y29uMS5jb20vYXNzZXRzL2ltYWdlcy9sb2dvLnBuZ1wiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZG9tYWluXCIgY29udGVudD1cInNlcnZjb24xLmNvbVwiIC8+XHJcbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PVwiU2VydmNvbiBDb250YWJpbGlkYWRlXCIgLz5cclxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQcmVzdGFyIHNlcnZpw6dvcyBjb250w6FiZWlzIGUgYXNzZXNzb3JpYSBkZSBxdWFsaWRhZGUsIGJ1c2NhbmRvIGF0ZW5kZXIgYXMgbmVjZXNzaWRhZGVzIGRlIG5vc3NvcyBjbGllbnRlcyBlIHBhcmNlaXJvc1wiIC8+XHJcbiAgICAgIDwvSGVhZD5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9JbmZvcm1hY29lc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vc2VydmNvbjEudmVyY2VsLmFwcC9hcGknXHJcbn0pXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9