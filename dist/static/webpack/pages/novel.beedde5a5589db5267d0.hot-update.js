webpackHotUpdate_N_E("pages/novel",{

/***/ "./pages/novel/index.tsx":
/*!*******************************!*\
  !*** ./pages/novel/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _novel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novel.css */ "./pages/novel/novel.css");
/* harmony import */ var _novel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_novel_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/next/dist/build/polyfills/fetch/index.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_topboxnav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/topboxnav */ "./pages/components/topboxnav.tsx");



var _this = undefined,
    _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\novel\\index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;






 // 声明的全局数据

var IndexPage = function IndexPage(props) {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u5206\u7C7B\uFF1A\u5C0F\u8BF4",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "novel-body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_components_topboxnav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "db-nav-book",
    className: "nav",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "nav-wrap",
    style: {
      height: "75.677px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "nav-primary",
    style: {
      height: "74px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "nav-logo",
    style: {
      width: "145px",
      height: "56px"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "",
    style: {
      fontSize: "30px",
      fontWeight: "bolder"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 17
    }
  }, "\u5C0F\u8BF4\u5206\u7C7B")), __jsx("div", {
    className: "nav-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "https://search.douban.com/book/subject_search",
    method: "get",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 17
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "inp-query",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "inp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }, __jsx("input", {
    id: "inp-query",
    name: "search_text",
    placeholder: "\u4E66\u540D\u3001\u4F5C\u8005\u3001ISBN",
    value: "",
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "inp-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "submit",
    value: "\u641C\u7D22",
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 23
    }
  })), __jsx("input", {
    type: "hidden",
    name: "cat",
    value: "1001",
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 21
    }
  })))))), __jsx("div", {
    className: "nav-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 11
    }
  }))));
}; // getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
// 当刷新页面(初次载入页面)，该方法会在服务器执行
// 当通过<Link>跳转路由的时候，该方法会在客户端执行


_c = IndexPage;
IndexPage.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("http://localhost:3001/novel");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            show: data
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee);
}));
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(IndexPage));

var _c, _c2;

$RefreshReg$(_c, "IndexPage");
$RefreshReg$(_c2, "%default%");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm92ZWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwic2hvdyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FCO0FBQ3JCO0NBR0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFnQjtBQUNoQyxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUMsZ0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFzQixhQUFTLEVBQUMsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQTZCLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsVUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsT0FBVDtBQUFrQkQsWUFBTSxFQUFFO0FBQTFCLEtBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUlFO0FBQUcsUUFBSSxFQUFDLEVBQVI7QUFBVyxTQUFLLEVBQUU7QUFBRUUsY0FBUSxFQUFFLE1BQVo7QUFBb0JDLGdCQUFVLEVBQUU7QUFBaEMsS0FBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FKRixDQURGLEVBU0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxVQUFNLEVBQUMsK0NBRFQ7QUFFRSxVQUFNLEVBQUMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sV0FBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBRUU7QUFBSyxhQUFTLEVBQUMsS0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxNQUFFLEVBQUMsV0FETDtBQUVFLFFBQUksRUFBQyxhQUZQO0FBR0UsZUFBVyxFQUFDLDBDQUhkO0FBSUUsU0FBSyxFQUFDLEVBSlI7QUFLRSxZQUFRLE1BTFY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBRkYsRUFXRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFNBQUssRUFBQyxjQUEzQjtBQUFnQyxZQUFRLE1BQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVhGLEVBY0U7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixRQUFJLEVBQUMsS0FBMUI7QUFBZ0MsU0FBSyxFQUFDLE1BQXRDO0FBQTZDLFlBQVEsTUFBckQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWRGLENBSkYsQ0FERixDQVRGLENBREYsQ0FERixFQW9DRTtBQUFLLGFBQVMsRUFBQyxlQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFwQ0YsQ0FGRixDQURGLENBREY7QUE2Q0QsQ0E5Q0QsQyxDQWdEQTtBQUNBO0FBQ0E7OztLQWxETUwsUztBQW1ETkEsU0FBUyxDQUFDTSxlQUFWLGlNQUE0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUNSQyx5REFBSyxDQUFDLDZCQUFELENBREc7O0FBQUE7QUFDcEJDLGFBRG9CO0FBQUE7QUFBQSxpQkFFUEEsR0FBRyxDQUFDQyxJQUFKLEVBRk87O0FBQUE7QUFFcEJDLGNBRm9CO0FBQUEsMkNBSW5CO0FBQUVDLGdCQUFJLEVBQUVEO0FBQVIsV0FKbUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBNUI7QUFPZSxxRUFBQUUsOERBQVUsQ0FBQ1osU0FBRCxDQUF6QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9ub3ZlbC5iZWVkZGU1YTU1ODlkYjUyNjdkMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIkAvc3RhdGljL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4vbm92ZWwuY3NzXCI7XHJcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XHJcbmltcG9ydCBUb3Bib3huYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9wYm94bmF2XCI7XHJcblxyXG4vLyDlo7DmmI7nmoTlhajlsYDmlbDmja5cclxuXHJcbmNvbnN0IEluZGV4UGFnZSA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCLliIbnsbvvvJrlsI/or7RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ZlbC1ib2R5XCI+XHJcbiAgICAgICAgPFRvcGJveG5hdj48L1RvcGJveG5hdj5cclxuICAgICAgICA8ZGl2IGlkPVwiZGItbmF2LWJvb2tcIiBjbGFzc05hbWU9XCJuYXZcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXdyYXBcIiBzdHlsZT17eyBoZWlnaHQ6IFwiNzUuNjc3cHhcIiB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtcHJpbWFyeVwiIHN0eWxlPXt7IGhlaWdodDogXCI3NHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibmF2LWxvZ29cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTQ1cHhcIiwgaGVpZ2h0OiBcIjU2cHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBzdHlsZT17eyBmb250U2l6ZTogXCIzMHB4XCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIOWwj+ivtOWIhuexu1xyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNlYXJjaFwiPlxyXG4gICAgICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICAgICAgYWN0aW9uPVwiaHR0cHM6Ly9zZWFyY2guZG91YmFuLmNvbS9ib29rL3N1YmplY3Rfc2VhcmNoXCJcclxuICAgICAgICAgICAgICAgICAgbWV0aG9kPVwiZ2V0XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiaW5wLXF1ZXJ5XCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiaW5wLXF1ZXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaF90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLkuablkI3jgIHkvZzogIXjgIFJU0JOXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWFkT25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucC1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLmkJzntKJcIiByZWFkT25seSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cImNhdFwiIHZhbHVlPVwiMTAwMVwiIHJlYWRPbmx5Lz5cclxuICAgICAgICAgICAgICAgICAgPC9maWVsZHNldD5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LXNlY29uZGFyeVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBnZXRJbml0aWFsUHJvcHMg5pa55rOV5pei5Y+v5Lul5Zyo5pyN5Yqh5Zmo6L+Q6KGM77yM5Y+I5Y+v5Lul5Zyo5a6i5oi356uv6L+Q6KGMKOe7hOS7tuWIm+W7uuS5i+WJjeaJp+ihjOeahClcclxuLy8g5b2T5Yi35paw6aG16Z2iKOWIneasoei9veWFpemhtemdoinvvIzor6Xmlrnms5XkvJrlnKjmnI3liqHlmajmiafooYxcclxuLy8g5b2T6YCa6L+HPExpbms+6Lez6L2s6Lev55Sx55qE5pe25YCZ77yM6K+l5pa55rOV5Lya5Zyo5a6i5oi356uv5omn6KGMXHJcbkluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbm92ZWxcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgLy/ov5novrnov5Tlm57nmoTmlbDmja7kvJrooqvmjILovb3liLDnu4Tku7bnmoRwcm9wc+S4rVxyXG4gIHJldHVybiB7IHNob3c6IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXhQYWdlKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==