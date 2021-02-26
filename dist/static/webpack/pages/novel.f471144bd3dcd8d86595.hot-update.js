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
      height: "56px",
      fl: fl
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm92ZWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJmbCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImdldEluaXRpYWxQcm9wcyIsImZldGNoIiwicmVzIiwianNvbiIsImRhdGEiLCJzaG93Iiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDcUI7QUFDckI7Q0FHQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQWdCO0FBQ2hDLFNBQ0UsTUFBQywwREFBRDtBQUFRLFNBQUssRUFBQyxnQ0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLE1BQUUsRUFBQyxhQUFSO0FBQXNCLGFBQVMsRUFBQyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxhQUFTLEVBQUMsVUFBZjtBQUEwQixTQUFLLEVBQUU7QUFBRUMsWUFBTSxFQUFFO0FBQVYsS0FBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLGFBQWY7QUFBNkIsU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLGFBQVMsRUFBQyxVQURaO0FBRUUsU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxPQUFUO0FBQWtCRCxZQUFNLEVBQUUsTUFBMUI7QUFBaUNFLFFBQUUsRUFBRkE7QUFBakMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBRyxRQUFJLEVBQUMsRUFBUjtBQUFXLFNBQUssRUFBRTtBQUFFQyxjQUFRLEVBQUUsTUFBWjtBQUFvQkMsZ0JBQVUsRUFBRTtBQUFoQyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFVBQU0sRUFBQywrQ0FEVDtBQUVFLFVBQU0sRUFBQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE1BQUUsRUFBQyxXQURMO0FBRUUsUUFBSSxFQUFDLGFBRlA7QUFHRSxlQUFXLEVBQUMsMENBSGQ7QUFJRSxTQUFLLEVBQUMsRUFKUjtBQUtFLFlBQVEsTUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQVdFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLGNBQTNCO0FBQWdDLFlBQVEsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsRUFjRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUksRUFBQyxLQUExQjtBQUFnQyxTQUFLLEVBQUMsTUFBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FKRixDQURGLENBVEYsQ0FERixDQURGLEVBb0NFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXBDRixDQUZGLENBREYsQ0FERjtBQTZDRCxDQTlDRCxDLENBZ0RBO0FBQ0E7QUFDQTs7O0tBbERNTixTO0FBbUROQSxTQUFTLENBQUNPLGVBQVYsaU1BQTRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1JDLHlEQUFLLENBQUMsNkJBQUQsQ0FERzs7QUFBQTtBQUNwQkMsYUFEb0I7QUFBQTtBQUFBLGlCQUVQQSxHQUFHLENBQUNDLElBQUosRUFGTzs7QUFBQTtBQUVwQkMsY0FGb0I7QUFBQSwyQ0FJbkI7QUFBRUMsZ0JBQUksRUFBRUQ7QUFBUixXQUptQjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUE1QjtBQU9lLHFFQUFBRSw4REFBVSxDQUFDYixTQUFELENBQXpCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL25vdmVsLmY0NzExNDRiZDNkY2Q4ZDg2NTk1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiQC9zdGF0aWMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9ub3ZlbC5jc3NcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IFRvcGJveG5hdiBmcm9tIFwiLi4vY29tcG9uZW50cy90b3Bib3huYXZcIjtcclxuXHJcbi8vIOWjsOaYjueahOWFqOWxgOaVsOaNrlxyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKHByb3BzOiBhbnkpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIuWIhuexu++8muWwj+ivtFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdmVsLWJvZHlcIj5cclxuICAgICAgICA8VG9wYm94bmF2PjwvVG9wYm94bmF2PlxyXG4gICAgICAgIDxkaXYgaWQ9XCJkYi1uYXYtYm9va1wiIGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcFwiIHN0eWxlPXt7IGhlaWdodDogXCI3NS42NzdweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1wcmltYXJ5XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjc0cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNDVweFwiLCBoZWlnaHQ6IFwiNTZweFwiLGZsfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMzBweFwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDlsI/or7TliIbnsbtcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vc2VhcmNoLmRvdWJhbi5jb20vYm9vay9zdWJqZWN0X3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZD1cImdldFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucC1xdWVyeVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucC1xdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hfdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5Lmm5ZCN44CB5L2c6ICF44CBSVNCTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnAtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi5pCc57SiXCIgcmVhZE9ubHkgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjYXRcIiB2YWx1ZT1cIjEwMDFcIiByZWFkT25seS8+XHJcbiAgICAgICAgICAgICAgICAgIDwvZmllbGRzZXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWNvbmRhcnlcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZ2V0SW5pdGlhbFByb3BzIOaWueazleaXouWPr+S7peWcqOacjeWKoeWZqOi/kOihjO+8jOWPiOWPr+S7peWcqOWuouaIt+err+i/kOihjCjnu4Tku7bliJvlu7rkuYvliY3miafooYznmoQpXHJcbi8vIOW9k+WIt+aWsOmhtemdoijliJ3mrKHovb3lhaXpobXpnaIp77yM6K+l5pa55rOV5Lya5Zyo5pyN5Yqh5Zmo5omn6KGMXHJcbi8vIOW9k+mAmui/hzxMaW5rPui3s+i9rOi3r+eUseeahOaXtuWAme+8jOivpeaWueazleS8muWcqOWuouaIt+err+aJp+ihjFxyXG5JbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL25vdmVsXCIpO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuICByZXR1cm4geyBzaG93OiBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4UGFnZSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=