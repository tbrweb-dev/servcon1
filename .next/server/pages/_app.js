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
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\pages\\_app.js";

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
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx(Component, _extends({}, pageProps, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
  baseURL: 'https://modelo-tbrweb-3.vercel.app/api'
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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2hvb2tzL3VzZUluZm9ybWFjb2VzLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFnZXMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiSW5mb3JtYWNvZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIm9yZ2FuaXphck9icmlnYWNvZXNQb3JFc3RhZG8iLCJvYnJpZ2Fjb2VzR2VyYWwiLCJlc3Bpcml0b1NhbnRvIiwiZmlsdGVyIiwib2JyIiwibW5fZXN1YnBhc3RhIiwibWF0b0dyb3Nzb0RvU3VsIiwibWluYXNHZXJhaXMiLCJyaW9HcmFuZGVEb1N1bCIsInBhcmFuYSIsInJpb0RlSmFuZWlybyIsInNhbnRhQ2F0YXJpbmEiLCJzYW9QYXVsbyIsIkluZm9ybWFjb2VzUHJvdmlkZXIiLCJjaGlsZHJlbiIsIm5vdGljaWFzIiwic2V0Tm90aWNpYXMiLCJ1c2VTdGF0ZSIsIm9icmlnYWNvZXMiLCJzZXRPYnJpZ2Fjb2VzIiwiYWdlbmRhIiwic2V0QWdlbmRhIiwiY290YWNvZXMiLCJzZXRDb3RhY29lcyIsInVzZUVmZmVjdCIsInVybDEiLCJhcGkiLCJnZXQiLCJ1cmwyIiwidXJsMyIsInVybDQiLCJheGlvcyIsImFsbCIsInRoZW4iLCJzcHJlYWQiLCJyZXNwb25zZXMiLCJkYXRhIiwidXNlSW5mb3JtYWNvZXMiLCJjb250ZXh0IiwidXNlQ29udGV4dCIsIkN1c3RvbUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsImNyZWF0ZSIsImJhc2VVUkwiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QWhDLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSVIsUUFESixDQURGO0FBS0Q7QUFFTSxTQUFTdUIsY0FBVCxHQUEwQjtBQUMvQixRQUFNQyxPQUFPLEdBQUdDLHdEQUFVLENBQUN6QyxrQkFBRCxDQUExQjtBQUNBLFNBQU93QyxPQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNERDs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVlLFNBQVNFLFNBQVQsQ0FBbUI7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQW5CLEVBQTZDO0FBQzFEO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUUsU0FDRSxNQUFDLHdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLFNBQUQsZUFBZUEsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBREYsQ0FERjtBQUtELEM7Ozs7Ozs7Ozs7OztBQ3ZCRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRU8sTUFBTWhCLEdBQUcsR0FBR0ssNENBQUssQ0FBQ1ksTUFBTixDQUFhO0FBQzlCQyxTQUFPLEVBQUU7QUFEcUIsQ0FBYixDQUFaLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRlAsa0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuaW1wb3J0IHsgYXBpIH0gZnJvbSBcInBhZ2VzL2FwaS9hcGlcIjtcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IEluZm9ybWFjb2VzQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKVxyXG5cclxuZnVuY3Rpb24gb3JnYW5pemFyT2JyaWdhY29lc1BvckVzdGFkbyhvYnJpZ2Fjb2VzR2VyYWwpIHtcclxuICBjb25zdCBlc3Bpcml0b1NhbnRvID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTY4KVxyXG4gIGNvbnN0IG1hdG9Hcm9zc29Eb1N1bCA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDU0NDMpXHJcbiAgY29uc3QgbWluYXNHZXJhaXMgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNjkpXHJcbiAgY29uc3QgcmlvR3JhbmRlRG9TdWwgPSBvYnJpZ2Fjb2VzR2VyYWwuZmlsdGVyKG9iciA9PiBvYnIubW5fZXN1YnBhc3RhID09PSAxNTUpXHJcbiAgY29uc3QgcGFyYW5hID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTU4KVxyXG4gIGNvbnN0IHJpb0RlSmFuZWlybyA9IG9icmlnYWNvZXNHZXJhbC5maWx0ZXIob2JyID0+IG9ici5tbl9lc3VicGFzdGEgPT09IDE1MylcclxuICBjb25zdCBzYW50YUNhdGFyaW5hID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTU0KVxyXG4gIGNvbnN0IHNhb1BhdWxvID0gb2JyaWdhY29lc0dlcmFsLmZpbHRlcihvYnIgPT4gb2JyLm1uX2VzdWJwYXN0YSA9PT0gMTUyKVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgZXNwaXJpdG9TYW50bzogWyAuLi5lc3Bpcml0b1NhbnRvIF0sXHJcbiAgICBtYXRvR3Jvc3NvRG9TdWw6IFsgLi4ubWF0b0dyb3Nzb0RvU3VsIF0sXHJcbiAgICBtaW5hc0dlcmFpczogWyAuLi5taW5hc0dlcmFpcyBdLFxyXG4gICAgcmlvR3JhbmRlRG9TdWw6IFsgLi4ucmlvR3JhbmRlRG9TdWwgXSxcclxuICAgIHBhcmFuYTogWyAuLi5wYXJhbmEgXSxcclxuICAgIHJpb0RlSmFuZWlybzogWyAuLi5yaW9EZUphbmVpcm8gXSxcclxuICAgIHNhbnRhQ2F0YXJpbmE6IFsgLi4uc2FudGFDYXRhcmluYSBdLFxyXG4gICAgc2FvUGF1bG86IFsgLi4uc2FvUGF1bG8gXSxcclxuXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gSW5mb3JtYWNvZXNQcm92aWRlcih7IGNoaWxkcmVuIH0pIHtcclxuICBjb25zdCBbbm90aWNpYXMsIHNldE5vdGljaWFzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtvYnJpZ2Fjb2VzLCBzZXRPYnJpZ2Fjb2VzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFthZ2VuZGEsIHNldEFnZW5kYV0gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbY290YWNvZXMsIHNldENvdGFjb2VzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgdXJsMSA9IGFwaS5nZXQoJ25vdGljaWFzJylcclxuICAgIGNvbnN0IHVybDIgPSBhcGkuZ2V0KCdjb3RhY29lcycpXHJcbiAgICBjb25zdCB1cmwzID0gYXBpLmdldCgnb2JyaWdhY29lcycpXHJcbiAgICBjb25zdCB1cmw0ID0gYXBpLmdldCgnYWdlbmRhJylcclxuICAgIGF4aW9zLmFsbChbdXJsMSwgdXJsMiwgdXJsMywgdXJsNF0pXHJcbiAgICAgIC50aGVuKGF4aW9zLnNwcmVhZCgoLi4ucmVzcG9uc2VzKSA9PiB7XHJcbiAgICAgICAgc2V0Tm90aWNpYXMocmVzcG9uc2VzWzBdLmRhdGEpXHJcbiAgICAgICAgc2V0Q290YWNvZXMocmVzcG9uc2VzWzFdLmRhdGEpXHJcbiAgICAgICAgc2V0T2JyaWdhY29lcyhvcmdhbml6YXJPYnJpZ2Fjb2VzUG9yRXN0YWRvKHJlc3BvbnNlc1syXS5kYXRhKSlcclxuICAgICAgICBzZXRBZ2VuZGEocmVzcG9uc2VzWzNdLmRhdGEpXHJcbiAgICAgIH0pKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEluZm9ybWFjb2VzQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBub3RpY2lhcywgb2JyaWdhY29lcywgYWdlbmRhLCBjb3RhY29lcyB9fT5cclxuICAgICAgeyBjaGlsZHJlbiB9XHJcbiAgICA8L0luZm9ybWFjb2VzQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VJbmZvcm1hY29lcygpIHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChJbmZvcm1hY29lc0NvbnRleHQpXHJcbiAgcmV0dXJuIGNvbnRleHRcclxufSIsIi8qKiBVbmNvbW1lbnQgdGhlIGJlbG93IGNvZGVibG9jayBpZiB5b3Ugd2FudCB0byBhZGQgZ29vZ2xlIGFuYWx5dGljcyBmb3IgbW9yZSBpbmZvIHBsZWFzZSB2aXNpdCBvdXIgZG9jcyBhbmFseXRpY3Mgc2VjdGlvbiAqL1xyXG4vKiogXHJcbmltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IGluaXRHQSwgbG9nUGFnZVZpZXcgfSBmcm9tICdhbmFseXRpY3MnO1xyXG4qL1xyXG5pbXBvcnQgJ2Fzc2V0cy9jc3MvcmVhY3Qtc2xpY2suY3NzJztcclxuaW1wb3J0IHsgSW5mb3JtYWNvZXNQcm92aWRlciB9IGZyb20gJ2hvb2tzL3VzZUluZm9ybWFjb2VzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEN1c3RvbUFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcclxuICAvKiogXHJcbiAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgaW5pdEdBKCk7XHJcbiAgICAgbG9nUGFnZVZpZXcoKTtcclxuICAgICBSb3V0ZXIuZXZlbnRzLm9uKCdyb3V0ZUNoYW5nZUNvbXBsZXRlJywgbG9nUGFnZVZpZXcpO1xyXG4gICB9LCBbXSk7XHJcbiAgICovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8SW5mb3JtYWNvZXNQcm92aWRlcj5cclxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxyXG4gICAgPC9JbmZvcm1hY29lc1Byb3ZpZGVyPlxyXG4gICk7XHJcbn1cclxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJ1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgYmFzZVVSTDogJ2h0dHBzOi8vbW9kZWxvLXRicndlYi0zLnZlcmNlbC5hcHAvYXBpJ1xyXG59KVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJheGlvc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9