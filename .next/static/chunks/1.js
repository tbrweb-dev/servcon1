(window["webpackJsonp_N_E"] = window["webpackJsonp_N_E"] || []).push([[1],{

/***/ "./src/components/cards/testimonial.js":
/*!*********************************************!*\
  !*** ./src/components/cards/testimonial.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "./node_modules/react-responsive/dist/react-responsive.js");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
var _this = undefined,
    _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\cards\\testimonial.js",
    _s = $RefreshSig$();


var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




var Testimonial = function Testimonial(_ref) {
  _s();

  var testimonial = _ref.testimonial;
  var isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])({
    query: '(max-width: 767px)'
  });
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "article",
    sx: styles.testimonial,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, !isMobile && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    sx: styles.avatar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: testimonial.avatar,
    loading: "lazy",
    alt: testimonial.authorName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), isMobile && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "blockquote",
    sx: styles.blockquote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, testimonial.text), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, isMobile && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    sx: styles.avatar,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: testimonial.avatar,
    alt: testimonial.authorName,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), !isMobile && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "blockquote",
    sx: styles.blockquote,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, testimonial.text), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, testimonial.authorName, ","), " ", testimonial.designation)));
};

_s(Testimonial, "7khsyUHgctuHIPa2/KlDS6LcnT0=", false, function () {
  return [react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"]];
});

_c = Testimonial;
/* harmony default export */ __webpack_exports__["default"] = (Testimonial);
var styles = {
  testimonial: {
    gap: ['0 110px', null, null, 10, 8, '0 50px', '0 110px'],
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', '370px 547px', '1fr 1fr', '521px 547px']
  },
  avatar: {
    display: 'flex',
    alignItems: 'center',
    mr: [6, null, null, 0],
    img: {
      width: [100, null, null, 'auto']
    }
  },
  content: {
    mt: [3, null, null, 6, 12],
    display: ['flex', null, null, 'block'],
    alignItems: ['flex-start', null, null, 'unset'],
    p: {
      color: 'textSecondary',
      fontSize: [0, 1, null, 3],
      mt: [9, null, null, 5, 12],
      strong: {
        display: ['block', null, null, null, 'inline-flex']
      }
    }
  },
  blockquote: {
    color: 'heading',
    fontSize: [2, null, null, 4, 8, 11],
    fontWeight: [500, null, null, 400],
    lineHeight: [null, null, null, 1.7, 1.53],
    letterSpacing: 'heading',
    textAlign: ['center', null, null, 'left']
  }
};

var _c;

$RefreshReg$(_c, "Testimonial");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY2FyZHMvdGVzdGltb25pYWwuanMiXSwibmFtZXMiOlsiVGVzdGltb25pYWwiLCJ0ZXN0aW1vbmlhbCIsImlzTW9iaWxlIiwidXNlTWVkaWFRdWVyeSIsInF1ZXJ5Iiwic3R5bGVzIiwiYXZhdGFyIiwiYXV0aG9yTmFtZSIsImJsb2NrcXVvdGUiLCJ0ZXh0IiwiY29udGVudCIsImRlc2lnbmF0aW9uIiwiZ2FwIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJncmlkVGVtcGxhdGVDb2x1bW5zIiwibXIiLCJpbWciLCJ3aWR0aCIsIm10IiwicCIsImNvbG9yIiwiZm9udFNpemUiLCJzdHJvbmciLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImxldHRlclNwYWNpbmciLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLE9BQXFCO0FBQUE7O0FBQUEsTUFBbEJDLFdBQWtCLFFBQWxCQSxXQUFrQjtBQUN2QyxNQUFNQyxRQUFRLEdBQUdDLHNFQUFhLENBQUM7QUFDN0JDLFNBQUssRUFBRTtBQURzQixHQUFELENBQTlCO0FBR0EsU0FDRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLE1BQUUsRUFBRUMsTUFBTSxDQUFDSixXQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0csQ0FBQ0MsUUFBRCxJQUNDLHFEQUFDLDRDQUFEO0FBQUssTUFBRSxFQUFDLFFBQVI7QUFBaUIsTUFBRSxFQUFFRyxNQUFNLENBQUNDLE1BQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyx3REFBRDtBQUNFLE9BQUcsRUFBRUwsV0FBVyxDQUFDSyxNQURuQjtBQUVFLFdBQU8sRUFBQyxNQUZWO0FBR0UsT0FBRyxFQUFFTCxXQUFXLENBQUNNLFVBSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQUZKLEVBVUdMLFFBQVEsSUFDUCxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxZQUFSO0FBQXFCLE1BQUUsRUFBRUcsTUFBTSxDQUFDRyxVQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLFdBQVcsQ0FBQ1EsSUFEZixDQVhKLEVBZUUscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVKLE1BQU0sQ0FBQ0ssT0FBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHUixRQUFRLElBQ1AscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsUUFBUjtBQUFpQixNQUFFLEVBQUVHLE1BQU0sQ0FBQ0MsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLHdEQUFEO0FBQU8sT0FBRyxFQUFFTCxXQUFXLENBQUNLLE1BQXhCO0FBQWdDLE9BQUcsRUFBRUwsV0FBVyxDQUFDTSxVQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGSixFQU1HLENBQUNMLFFBQUQsSUFDQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxZQUFSO0FBQXFCLE1BQUUsRUFBRUcsTUFBTSxDQUFDRyxVQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dQLFdBQVcsQ0FBQ1EsSUFEZixDQVBKLEVBV0UscURBQUMsNkNBQUQ7QUFBTSxNQUFFLEVBQUMsR0FBVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFTUixXQUFXLENBQUNNLFVBQXJCLE1BREYsT0FDOENOLFdBQVcsQ0FBQ1UsV0FEMUQsQ0FYRixDQWZGLENBREY7QUFpQ0QsQ0FyQ0Q7O0dBQU1YLFc7VUFDYUcsOEQ7OztLQURiSCxXO0FBdUNTQSwwRUFBZjtBQUVBLElBQU1LLE1BQU0sR0FBRztBQUNiSixhQUFXLEVBQUU7QUFDWFcsT0FBRyxFQUFFLENBQUMsU0FBRCxFQUFZLElBQVosRUFBa0IsSUFBbEIsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBNUIsRUFBK0IsUUFBL0IsRUFBeUMsU0FBekMsQ0FETTtBQUVYQyxXQUFPLEVBQUUsTUFGRTtBQUdYQyxjQUFVLEVBQUUsUUFIRDtBQUlYQyx1QkFBbUIsRUFBRSxDQUNuQixLQURtQixFQUVuQixJQUZtQixFQUduQixJQUhtQixFQUluQixTQUptQixFQUtuQixhQUxtQixFQU1uQixTQU5tQixFQU9uQixhQVBtQjtBQUpWLEdBREE7QUFlYlQsUUFBTSxFQUFFO0FBQ05PLFdBQU8sRUFBRSxNQURIO0FBRU5DLGNBQVUsRUFBRSxRQUZOO0FBR05FLE1BQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQUhFO0FBSU5DLE9BQUcsRUFBRTtBQUNIQyxXQUFLLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLElBQVosRUFBa0IsTUFBbEI7QUFESjtBQUpDLEdBZks7QUF1QmJSLFNBQU8sRUFBRTtBQUNQUyxNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsRUFBbUIsRUFBbkIsQ0FERztBQUVQTixXQUFPLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLElBQWYsRUFBcUIsT0FBckIsQ0FGRjtBQUdQQyxjQUFVLEVBQUUsQ0FBQyxZQUFELEVBQWUsSUFBZixFQUFxQixJQUFyQixFQUEyQixPQUEzQixDQUhMO0FBSVBNLEtBQUMsRUFBRTtBQUNEQyxXQUFLLEVBQUUsZUFETjtBQUVEQyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLElBQVAsRUFBYSxDQUFiLENBRlQ7QUFHREgsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CLEVBQW5CLENBSEg7QUFJREksWUFBTSxFQUFFO0FBQ05WLGVBQU8sRUFBRSxDQUFDLE9BQUQsRUFBVSxJQUFWLEVBQWdCLElBQWhCLEVBQXNCLElBQXRCLEVBQTRCLGFBQTVCO0FBREg7QUFKUDtBQUpJLEdBdkJJO0FBb0NiTCxZQUFVLEVBQUU7QUFDVmEsU0FBSyxFQUFFLFNBREc7QUFFVkMsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLEVBQXRCLENBRkE7QUFHVkUsY0FBVSxFQUFFLENBQUMsR0FBRCxFQUFNLElBQU4sRUFBWSxJQUFaLEVBQWtCLEdBQWxCLENBSEY7QUFJVkMsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxJQUFiLEVBQW1CLEdBQW5CLEVBQXdCLElBQXhCLENBSkY7QUFLVkMsaUJBQWEsRUFBRSxTQUxMO0FBTVZDLGFBQVMsRUFBRSxDQUFDLFFBQUQsRUFBVyxJQUFYLEVBQWlCLElBQWpCLEVBQXVCLE1BQXZCO0FBTkQ7QUFwQ0MsQ0FBZiIsImZpbGUiOiJzdGF0aWMvY2h1bmtzLzEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cclxuaW1wb3J0IHsganN4LCBCb3gsIFRleHQgfSBmcm9tICd0aGVtZS11aSc7XHJcbmltcG9ydCB7IHVzZU1lZGlhUXVlcnkgfSBmcm9tICdyZWFjdC1yZXNwb25zaXZlJztcclxuaW1wb3J0IEltYWdlIGZyb20gJ2NvbXBvbmVudHMvaW1hZ2UnO1xyXG5cclxuY29uc3QgVGVzdGltb25pYWwgPSAoeyB0ZXN0aW1vbmlhbCB9KSA9PiB7XHJcbiAgY29uc3QgaXNNb2JpbGUgPSB1c2VNZWRpYVF1ZXJ5KHtcclxuICAgIHF1ZXJ5OiAnKG1heC13aWR0aDogNzY3cHgpJyxcclxuICB9KTtcclxuICByZXR1cm4gKFxyXG4gICAgPEJveCBhcz1cImFydGljbGVcIiBzeD17c3R5bGVzLnRlc3RpbW9uaWFsfT5cclxuICAgICAgeyFpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgPEJveCBhcz1cImZpZ3VyZVwiIHN4PXtzdHlsZXMuYXZhdGFyfT5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9e3Rlc3RpbW9uaWFsLmF2YXRhcn1cclxuICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIlxyXG4gICAgICAgICAgICBhbHQ9e3Rlc3RpbW9uaWFsLmF1dGhvck5hbWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgICB7aXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxCb3ggYXM9XCJibG9ja3F1b3RlXCIgc3g9e3N0eWxlcy5ibG9ja3F1b3RlfT5cclxuICAgICAgICAgIHt0ZXN0aW1vbmlhbC50ZXh0fVxyXG4gICAgICAgIDwvQm94PlxyXG4gICAgICApfVxyXG4gICAgICA8Qm94IHN4PXtzdHlsZXMuY29udGVudH0+XHJcbiAgICAgICAge2lzTW9iaWxlICYmIChcclxuICAgICAgICAgIDxCb3ggYXM9XCJmaWd1cmVcIiBzeD17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e3Rlc3RpbW9uaWFsLmF2YXRhcn0gYWx0PXt0ZXN0aW1vbmlhbC5hdXRob3JOYW1lfSAvPlxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICB7IWlzTW9iaWxlICYmIChcclxuICAgICAgICAgIDxCb3ggYXM9XCJibG9ja3F1b3RlXCIgc3g9e3N0eWxlcy5ibG9ja3F1b3RlfT5cclxuICAgICAgICAgICAge3Rlc3RpbW9uaWFsLnRleHR9XHJcbiAgICAgICAgICA8L0JveD5cclxuICAgICAgICApfVxyXG4gICAgICAgIDxUZXh0IGFzPVwicFwiPlxyXG4gICAgICAgICAgPHN0cm9uZz57dGVzdGltb25pYWwuYXV0aG9yTmFtZX0sPC9zdHJvbmc+IHt0ZXN0aW1vbmlhbC5kZXNpZ25hdGlvbn1cclxuICAgICAgICA8L1RleHQ+XHJcbiAgICAgIDwvQm94PlxyXG4gICAgPC9Cb3g+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsO1xyXG5cclxuY29uc3Qgc3R5bGVzID0ge1xyXG4gIHRlc3RpbW9uaWFsOiB7XHJcbiAgICBnYXA6IFsnMCAxMTBweCcsIG51bGwsIG51bGwsIDEwLCA4LCAnMCA1MHB4JywgJzAgMTEwcHgnXSxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgZ3JpZFRlbXBsYXRlQ29sdW1uczogW1xyXG4gICAgICAnMWZyJyxcclxuICAgICAgbnVsbCxcclxuICAgICAgbnVsbCxcclxuICAgICAgJzFmciAxZnInLFxyXG4gICAgICAnMzcwcHggNTQ3cHgnLFxyXG4gICAgICAnMWZyIDFmcicsXHJcbiAgICAgICc1MjFweCA1NDdweCcsXHJcbiAgICBdLFxyXG4gIH0sXHJcbiAgYXZhdGFyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIG1yOiBbNiwgbnVsbCwgbnVsbCwgMF0sXHJcbiAgICBpbWc6IHtcclxuICAgICAgd2lkdGg6IFsxMDAsIG51bGwsIG51bGwsICdhdXRvJ10sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGVudDoge1xyXG4gICAgbXQ6IFszLCBudWxsLCBudWxsLCA2LCAxMl0sXHJcbiAgICBkaXNwbGF5OiBbJ2ZsZXgnLCBudWxsLCBudWxsLCAnYmxvY2snXSxcclxuICAgIGFsaWduSXRlbXM6IFsnZmxleC1zdGFydCcsIG51bGwsIG51bGwsICd1bnNldCddLFxyXG4gICAgcDoge1xyXG4gICAgICBjb2xvcjogJ3RleHRTZWNvbmRhcnknLFxyXG4gICAgICBmb250U2l6ZTogWzAsIDEsIG51bGwsIDNdLFxyXG4gICAgICBtdDogWzksIG51bGwsIG51bGwsIDUsIDEyXSxcclxuICAgICAgc3Ryb25nOiB7XHJcbiAgICAgICAgZGlzcGxheTogWydibG9jaycsIG51bGwsIG51bGwsIG51bGwsICdpbmxpbmUtZmxleCddLFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGJsb2NrcXVvdGU6IHtcclxuICAgIGNvbG9yOiAnaGVhZGluZycsXHJcbiAgICBmb250U2l6ZTogWzIsIG51bGwsIG51bGwsIDQsIDgsIDExXSxcclxuICAgIGZvbnRXZWlnaHQ6IFs1MDAsIG51bGwsIG51bGwsIDQwMF0sXHJcbiAgICBsaW5lSGVpZ2h0OiBbbnVsbCwgbnVsbCwgbnVsbCwgMS43LCAxLjUzXSxcclxuICAgIGxldHRlclNwYWNpbmc6ICdoZWFkaW5nJyxcclxuICAgIHRleHRBbGlnbjogWydjZW50ZXInLCBudWxsLCBudWxsLCAnbGVmdCddLFxyXG4gIH0sXHJcbn07XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=