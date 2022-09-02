exports.ids = [0];
exports.modules = {

/***/ "./src/components/cards/testimonial.js":
/*!*********************************************!*\
  !*** ./src/components/cards/testimonial.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "theme-ui");
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(theme_ui__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-responsive */ "react-responsive");
/* harmony import */ var react_responsive__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_responsive__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/image */ "./src/components/image.js");
var _jsxFileName = "C:\\Users\\suporte02\\Desktop\\github\\servcon1\\src\\components\\cards\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




const Testimonial = ({
  testimonial
}) => {
  const isMobile = Object(react_responsive__WEBPACK_IMPORTED_MODULE_2__["useMediaQuery"])({
    query: '(max-width: 767px)'
  });
  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "article",
    sx: styles.testimonial,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 5
    }
  }, !isMobile && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    sx: styles.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: testimonial.avatar,
    loading: "lazy",
    alt: testimonial.authorName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 11
    }
  })), isMobile && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "blockquote",
    sx: styles.blockquote,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, testimonial.text), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }
  }, isMobile && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "figure",
    sx: styles.avatar,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_image__WEBPACK_IMPORTED_MODULE_3__["default"], {
    src: testimonial.avatar,
    alt: testimonial.authorName,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  })), !isMobile && Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    as: "blockquote",
    sx: styles.blockquote,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 11
    }
  }, testimonial.text), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Text"], {
    as: "p",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("strong", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }
  }, testimonial.authorName, ","), " ", testimonial.designation)));
};

/* harmony default export */ __webpack_exports__["default"] = (Testimonial);
const styles = {
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

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jYXJkcy90ZXN0aW1vbmlhbC5qcyJdLCJuYW1lcyI6WyJUZXN0aW1vbmlhbCIsInRlc3RpbW9uaWFsIiwiaXNNb2JpbGUiLCJ1c2VNZWRpYVF1ZXJ5IiwicXVlcnkiLCJzdHlsZXMiLCJhdmF0YXIiLCJhdXRob3JOYW1lIiwiYmxvY2txdW90ZSIsInRleHQiLCJjb250ZW50IiwiZGVzaWduYXRpb24iLCJnYXAiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImdyaWRUZW1wbGF0ZUNvbHVtbnMiLCJtciIsImltZyIsIndpZHRoIiwibXQiLCJwIiwiY29sb3IiLCJmb250U2l6ZSIsInN0cm9uZyIsImZvbnRXZWlnaHQiLCJsaW5lSGVpZ2h0IiwibGV0dGVyU3BhY2luZyIsInRleHRBbGlnbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBcUI7QUFDdkMsUUFBTUMsUUFBUSxHQUFHQyxzRUFBYSxDQUFDO0FBQzdCQyxTQUFLLEVBQUU7QUFEc0IsR0FBRCxDQUE5QjtBQUdBLFNBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixNQUFFLEVBQUVDLE1BQU0sQ0FBQ0osV0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNHLENBQUNDLFFBQUQsSUFDQyxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQWlCLE1BQUUsRUFBRUcsTUFBTSxDQUFDQyxNQUE1QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsd0RBQUQ7QUFDRSxPQUFHLEVBQUVMLFdBQVcsQ0FBQ0ssTUFEbkI7QUFFRSxXQUFPLEVBQUMsTUFGVjtBQUdFLE9BQUcsRUFBRUwsV0FBVyxDQUFDTSxVQUhuQjtBQUFBO0FB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QUFELEVBQVUsSUFBVixFQUFnQixJQUFoQixFQUFzQixJQUF0QixFQUE0QixhQUE1QjtBQURIO0FBSlA7QUFKSSxHQXZCSTtBQW9DYkwsWUFBVSxFQUFFO0FBQ1ZhLFNBQUssRUFBRSxTQURHO0FBRVZDLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixFQUFtQixDQUFuQixFQUFzQixFQUF0QixDQUZBO0FBR1ZFLGNBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksSUFBWixFQUFrQixHQUFsQixDQUhGO0FBSVZDLGNBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsSUFBYixFQUFtQixHQUFuQixFQUF3QixJQUF4QixDQUpGO0FBS1ZDLGlCQUFhLEVBQUUsU0FMTDtBQU1WQyxhQUFTLEVBQUUsQ0FBQyxRQUFELEVBQVcsSUFBWCxFQUFpQixJQUFqQixFQUF1QixNQUF2QjtBQU5EO0FBcENDLENBQWYsQyIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXHJcbmltcG9ydCB7IGpzeCwgQm94LCBUZXh0IH0gZnJvbSAndGhlbWUtdWknO1xyXG5pbXBvcnQgeyB1c2VNZWRpYVF1ZXJ5IH0gZnJvbSAncmVhY3QtcmVzcG9uc2l2ZSc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICdjb21wb25lbnRzL2ltYWdlJztcclxuXHJcbmNvbnN0IFRlc3RpbW9uaWFsID0gKHsgdGVzdGltb25pYWwgfSkgPT4ge1xyXG4gIGNvbnN0IGlzTW9iaWxlID0gdXNlTWVkaWFRdWVyeSh7XHJcbiAgICBxdWVyeTogJyhtYXgtd2lkdGg6IDc2N3B4KScsXHJcbiAgfSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb3ggYXM9XCJhcnRpY2xlXCIgc3g9e3N0eWxlcy50ZXN0aW1vbmlhbH0+XHJcbiAgICAgIHshaXNNb2JpbGUgJiYgKFxyXG4gICAgICAgIDxCb3ggYXM9XCJmaWd1cmVcIiBzeD17c3R5bGVzLmF2YXRhcn0+XHJcbiAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgc3JjPXt0ZXN0aW1vbmlhbC5hdmF0YXJ9XHJcbiAgICAgICAgICAgIGxvYWRpbmc9XCJsYXp5XCJcclxuICAgICAgICAgICAgYWx0PXt0ZXN0aW1vbmlhbC5hdXRob3JOYW1lfVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgICAge2lzTW9iaWxlICYmIChcclxuICAgICAgICA8Qm94IGFzPVwiYmxvY2txdW90ZVwiIHN4PXtzdHlsZXMuYmxvY2txdW90ZX0+XHJcbiAgICAgICAgICB7dGVzdGltb25pYWwudGV4dH1cclxuICAgICAgICA8L0JveD5cclxuICAgICAgKX1cclxuICAgICAgPEJveCBzeD17c3R5bGVzLmNvbnRlbnR9PlxyXG4gICAgICAgIHtpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgICA8Qm94IGFzPVwiZmlndXJlXCIgc3g9e3N0eWxlcy5hdmF0YXJ9PlxyXG4gICAgICAgICAgICA8SW1hZ2Ugc3JjPXt0ZXN0aW1vbmlhbC5hdmF0YXJ9IGFsdD17dGVzdGltb25pYWwuYXV0aG9yTmFtZX0gLz5cclxuICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICl9XHJcbiAgICAgICAgeyFpc01vYmlsZSAmJiAoXHJcbiAgICAgICAgICA8Qm94IGFzPVwiYmxvY2txdW90ZVwiIHN4PXtzdHlsZXMuYmxvY2txdW90ZX0+XHJcbiAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC50ZXh0fVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgKX1cclxuICAgICAgICA8VGV4dCBhcz1cInBcIj5cclxuICAgICAgICAgIDxzdHJvbmc+e3Rlc3RpbW9uaWFsLmF1dGhvck5hbWV9LDwvc3Ryb25nPiB7dGVzdGltb25pYWwuZGVzaWduYXRpb259XHJcbiAgICAgICAgPC9UZXh0PlxyXG4gICAgICA8L0JveD5cclxuICAgIDwvQm94PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbDtcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICB0ZXN0aW1vbmlhbDoge1xyXG4gICAgZ2FwOiBbJzAgMTEwcHgnLCBudWxsLCBudWxsLCAxMCwgOCwgJzAgNTBweCcsICcwIDExMHB4J10sXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGdyaWRUZW1wbGF0ZUNvbHVtbnM6IFtcclxuICAgICAgJzFmcicsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgIG51bGwsXHJcbiAgICAgICcxZnIgMWZyJyxcclxuICAgICAgJzM3MHB4IDU0N3B4JyxcclxuICAgICAgJzFmciAxZnInLFxyXG4gICAgICAnNTIxcHggNTQ3cHgnLFxyXG4gICAgXSxcclxuICB9LFxyXG4gIGF2YXRhcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBtcjogWzYsIG51bGwsIG51bGwsIDBdLFxyXG4gICAgaW1nOiB7XHJcbiAgICAgIHdpZHRoOiBbMTAwLCBudWxsLCBudWxsLCAnYXV0byddLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbnRlbnQ6IHtcclxuICAgIG10OiBbMywgbnVsbCwgbnVsbCwgNiwgMTJdLFxyXG4gICAgZGlzcGxheTogWydmbGV4JywgbnVsbCwgbnVsbCwgJ2Jsb2NrJ10sXHJcbiAgICBhbGlnbkl0ZW1zOiBbJ2ZsZXgtc3RhcnQnLCBudWxsLCBudWxsLCAndW5zZXQnXSxcclxuICAgIHA6IHtcclxuICAgICAgY29sb3I6ICd0ZXh0U2Vjb25kYXJ5JyxcclxuICAgICAgZm9udFNpemU6IFswLCAxLCBudWxsLCAzXSxcclxuICAgICAgbXQ6IFs5LCBudWxsLCBudWxsLCA1LCAxMl0sXHJcbiAgICAgIHN0cm9uZzoge1xyXG4gICAgICAgIGRpc3BsYXk6IFsnYmxvY2snLCBudWxsLCBudWxsLCBudWxsLCAnaW5saW5lLWZsZXgnXSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBibG9ja3F1b3RlOiB7XHJcbiAgICBjb2xvcjogJ2hlYWRpbmcnLFxyXG4gICAgZm9udFNpemU6IFsyLCBudWxsLCBudWxsLCA0LCA4LCAxMV0sXHJcbiAgICBmb250V2VpZ2h0OiBbNTAwLCBudWxsLCBudWxsLCA0MDBdLFxyXG4gICAgbGluZUhlaWdodDogW251bGwsIG51bGwsIG51bGwsIDEuNywgMS41M10sXHJcbiAgICBsZXR0ZXJTcGFjaW5nOiAnaGVhZGluZycsXHJcbiAgICB0ZXh0QWxpZ246IFsnY2VudGVyJywgbnVsbCwgbnVsbCwgJ2xlZnQnXSxcclxuICB9LFxyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9