webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/topbar.js":
/*!**********************************!*\
  !*** ./src/components/topbar.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "C:\\Users\\suporte02\\Desktop\\Macsuel\\desenvolvimento\\vercel\\sites\\servcon1\\src\\components\\topbar.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */


var data = [{
  label: 'ti@servcon1.com',
  info: 'mailto:ti@servcon1.com'
}, {
  label: '(88) 3669-1146',
  info: 'tel: 8836691146'
}, {
  label: '(88) 9912-6620',
  info: 'https://wa.me/558899126620'
}];

var TopBar = function TopBar() {
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "section",
    sx: styles.topbar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    className: "caption",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 9
    }
  }, "No mercado h\xE1 mais de ", new Date().getFullYear() - 2000, " anos, estamos sempre buscando os requisitos para atender as expectativas dos nossos clientes."), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "span",
    className: "tlds",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }, data.map(function (_ref, i) {
    var label = _ref.label,
        info = _ref.info;
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
      href: info,
      key: i,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("a", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 15
      }
    }, label));
  }))));
};

_c = TopBar;
/* harmony default export */ __webpack_exports__["default"] = (TopBar);
var styles = {
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

var _c;

$RefreshReg$(_c, "TopBar");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvdG9wYmFyLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJsYWJlbCIsImluZm8iLCJUb3BCYXIiLCJzdHlsZXMiLCJ0b3BiYXIiLCJjb250ZW50IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwibWFwIiwiaSIsImJhY2tncm91bmRDb2xvciIsInB4IiwicHkiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJtYXhXaWR0aCIsInBsIiwicHIiLCJtIiwidGV4dEFsaWduIiwic3BhbiIsIm1sIiwid2lkdGgiLCJvdmVyZmxvdyIsIndoaXRlU3BhY2UiLCJzdmciLCJtciIsIm1pbldpZHRoIiwic3Ryb25nIiwidGV4dFRyYW5zZm9ybSIsImEiLCJjdXJzb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImJvcmRlckxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxPQUFLLEVBQUUsaUJBRFQ7QUFFRUMsTUFBSSxFQUFFO0FBRlIsQ0FEVyxFQUtYO0FBQ0VELE9BQUssRUFBRSxnQkFEVDtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxXLEVBU1g7QUFDRUQsT0FBSyxFQUFFLGdCQURUO0FBRUVDLE1BQUksRUFBRTtBQUZSLENBVFcsQ0FBYjs7QUFlQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxHQUFNO0FBQ25CLFNBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixNQUFFLEVBQUVDLE1BQU0sQ0FBQ0MsTUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFFRCxNQUFNLENBQUNFLE9BQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBQyxNQUFUO0FBQWdCLGFBQVMsRUFBQyxTQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQUN5QixJQUFJQyxJQUFKLEdBQVdDLFdBQVgsS0FBMkIsSUFEcEQsbUdBREYsRUFJRSxxREFBQyw2Q0FBRDtBQUFNLE1BQUUsRUFBQyxNQUFUO0FBQWdCLGFBQVMsRUFBQyxNQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dSLElBQUksQ0FBQ1MsR0FBTCxDQUFTLGdCQUFnQkMsQ0FBaEI7QUFBQSxRQUFFVCxLQUFGLFFBQUVBLEtBQUY7QUFBQSxRQUFTQyxJQUFULFFBQVNBLElBQVQ7QUFBQSxXQUNSLHFEQUFDLGdEQUFEO0FBQU0sVUFBSSxFQUFFQSxJQUFaO0FBQWtCLFNBQUcsRUFBRVEsQ0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDR1QsS0FESCxDQURGLENBRFE7QUFBQSxHQUFULENBREgsQ0FKRixDQURGLENBREY7QUFrQkQsQ0FuQkQ7O0tBQU1FLE07QUFxQlNBLHFFQUFmO0FBRUEsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNOTSxtQkFBZSxFQUFFLFNBRFg7QUFFTkMsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLENBQXRCLENBRkU7QUFHTkMsTUFBRSxFQUFFLENBQUMsTUFBRDtBQUhFLEdBREs7QUFNYlAsU0FBTyxFQUFFO0FBQ1BRLFdBQU8sRUFBRSxDQUFDLE1BQUQsQ0FERjtBQUVQQyxjQUFVLEVBQUUsQ0FBQyxRQUFELENBRkw7QUFHUEMsa0JBQWMsRUFBRSxDQUFDLGVBQUQsQ0FIVDtBQUlQQyxTQUFLLEVBQUUsT0FKQTtBQUtQQyxZQUFRLEVBQUUsQ0FBQyxDQUFELENBTEg7QUFNUEMsY0FBVSxFQUFFLEdBTkw7QUFPUEMsWUFBUSxFQUFFLElBUEg7QUFRUEMsTUFBRSxFQUFFLE1BUkc7QUFTUEMsTUFBRSxFQUFFLE1BVEc7QUFVUEMsS0FBQyxFQUFFLFFBVkk7QUFXUEMsYUFBUyxFQUFFLFFBWEo7QUFZUEMsUUFBSSxFQUFFO0FBQ0osZ0JBQVU7QUFDUkMsVUFBRSxFQUFFLENBQUMsQ0FBRDtBQURJO0FBRE4sS0FaQztBQWlCUCxnQkFBWTtBQUNWWixhQUFPLEVBQUUsYUFEQztBQUVWQyxnQkFBVSxFQUFFLFFBRkY7QUFJVlksV0FBSyxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLE1BQWxCLENBSkc7QUFLVkMsY0FBUSxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsT0FBdkIsQ0FMQTtBQU1WQyxnQkFBVSxFQUFFLENBQUMsUUFBRCxFQUFXLElBQVgsRUFBaUIsSUFBakIsRUFBdUIsT0FBdkIsQ0FORjtBQVFWQyxTQUFHLEVBQUU7QUFDSEMsVUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREQ7QUFFSEMsZ0JBQVEsRUFBRTtBQUZQO0FBUkssS0FqQkw7QUE4QlAsYUFBUztBQUNQbEIsYUFBTyxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBREY7QUFFUEMsZ0JBQVUsRUFBRTtBQUZMLEtBOUJGO0FBa0NQa0IsVUFBTSxFQUFFO0FBQ05kLGdCQUFVLEVBQUUsR0FETjtBQUVOZSxtQkFBYSxFQUFFLFdBRlQ7QUFHTixrQkFBWTtBQUNWUixVQUFFLEVBQUU7QUFETTtBQUhOLEtBbENEO0FBeUNQUyxLQUFDLEVBQUU7QUFDRGxCLFdBQUssRUFBRSxPQUROO0FBRURtQixZQUFNLEVBQUUsU0FGUDtBQUdEbEIsY0FBUSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLENBSFQ7QUFJREMsZ0JBQVUsRUFBRSxHQUpYO0FBS0RKLGdCQUFVLEVBQUUsUUFMWDtBQU1ERCxhQUFPLEVBQUUsYUFOUjtBQU9EdUIsb0JBQWMsRUFBRSxNQVBmO0FBUURYLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixFQUF0QixFQUEwQixFQUExQixDQVJIO0FBU0RJLFNBQUcsRUFBRTtBQUNISixVQUFFLEVBQUU7QUFERCxPQVRKO0FBWUQsNkJBQXVCO0FBQ3JCQSxVQUFFLEVBQUUsQ0FEaUI7QUFFckJMLFVBQUUsRUFBRSxDQUZpQjtBQUdyQmlCLGtCQUFVLEVBQUU7QUFIUztBQVp0QjtBQXpDSTtBQU5JLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZGMyYWE2NTY4OWE1MzIyYTBmZjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xyXG5pbXBvcnQgeyBqc3gsIEJveCwgVGV4dCB9IGZyb20gJ3RoZW1lLXVpJztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAge1xyXG4gICAgbGFiZWw6ICd0aUBzZXJ2Y29uMS5jb20nLFxyXG4gICAgaW5mbzogJ21haWx0bzp0aUBzZXJ2Y29uMS5jb20nLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgbGFiZWw6ICcoODgpIDM2NjktMTE0NicsXHJcbiAgICBpbmZvOiAndGVsOiA4ODM2NjkxMTQ2JyxcclxuICB9LFxyXG4gIHtcclxuICAgIGxhYmVsOiAnKDg4KSA5OTEyLTY2MjAnLFxyXG4gICAgaW5mbzogJ2h0dHBzOi8vd2EubWUvNTU4ODk5MTI2NjIwJyxcclxuICB9LFxyXG5dO1xyXG5cclxuY29uc3QgVG9wQmFyID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm94IGFzPVwic2VjdGlvblwiIHN4PXtzdHlsZXMudG9wYmFyfT5cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIDxUZXh0IGFzPVwic3BhblwiIGNsYXNzTmFtZT1cImNhcHRpb25cIj5cclxuICAgICAgICAgIE5vIG1lcmNhZG8gaMOhIG1haXMgZGUge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSAtIDIwMDB9IGFub3MsIGVzdGFtb3Mgc2VtcHJlIGJ1c2NhbmRvIG9zIHJlcXVpc2l0b3MgcGFyYSBhdGVuZGVyIGFzIGV4cGVjdGF0aXZhcyBkb3Mgbm9zc29zIGNsaWVudGVzLlxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgICA8VGV4dCBhcz1cInNwYW5cIiBjbGFzc05hbWU9XCJ0bGRzXCI+XHJcbiAgICAgICAgICB7ZGF0YS5tYXAoKHtsYWJlbCwgaW5mb30sIGkpID0+IChcclxuICAgICAgICAgICAgPExpbmsgaHJlZj17aW5mb30ga2V5PXtpfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvVGV4dD5cclxuICAgICAgPC9Cb3g+XHJcbiAgICA8L0JveD5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG9wQmFyO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHRvcGJhcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiAncHJpbWFyeScsXHJcbiAgICBweDogWzYsIG51bGwsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgcHk6IFsnMTJweCddLFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgZGlzcGxheTogWydmbGV4J10sXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2NlbnRlciddLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6IFsnc3BhY2UtYmV0d2VlbiddLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBmb250U2l6ZTogWzFdLFxyXG4gICAgZm9udFdlaWdodDogNTAwLFxyXG4gICAgbWF4V2lkdGg6IDEzNjYsXHJcbiAgICBwbDogJzMwcHgnLFxyXG4gICAgcHI6ICczMHB4JyxcclxuICAgIG06ICcwIGF1dG8nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHNwYW46IHtcclxuICAgICAgJysgc3Bhbic6IHtcclxuICAgICAgICBtbDogWzRdLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgICcuY2FwdGlvbic6IHtcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcblxyXG4gICAgICB3aWR0aDogWzE5OSwgbnVsbCwgbnVsbCwgJ2F1dG8nXSxcclxuICAgICAgb3ZlcmZsb3c6IFsnaGlkZGVuJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcbiAgICAgIHdoaXRlU3BhY2U6IFsnbm93cmFwJywgbnVsbCwgbnVsbCwgJ3Vuc2V0J10sXHJcblxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtcjogWzIsIG51bGwsIG51bGwsIDNdLFxyXG4gICAgICAgIG1pbldpZHRoOiAyMCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICAnLnRsZHMnOiB7XHJcbiAgICAgIGRpc3BsYXk6IFsnbm9uZScsIG51bGwsIG51bGwsIG51bGwsICdmbGV4J10sXHJcbiAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgfSxcclxuICAgIHN0cm9uZzoge1xyXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICAgIHRleHRUcmFuc2Zvcm06ICd1cHBlcmNhc2UnLFxyXG4gICAgICAnKyBzdHJvbmcnOiB7XHJcbiAgICAgICAgbWw6IDMsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgYToge1xyXG4gICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICAgIGZvbnRTaXplOiBbJzEzcHgnLCBudWxsLCBudWxsLCAxLCAxXSxcclxuICAgICAgZm9udFdlaWdodDogNDAwLFxyXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgZGlzcGxheTogJ2lubGluZS1mbGV4JyxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgbWw6IFsyLCBudWxsLCBudWxsLCBudWxsLCAxMCwgMTNdLFxyXG4gICAgICBzdmc6IHtcclxuICAgICAgICBtbDogMSxcclxuICAgICAgfSxcclxuICAgICAgJyY6bm90KDpmaXJzdC1jaGlsZCknOiB7XHJcbiAgICAgICAgbWw6IDQsXHJcbiAgICAgICAgcGw6IDQsXHJcbiAgICAgICAgYm9yZGVyTGVmdDogJzJweCBzb2xpZCAjZmZmZmZmMjEnXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=