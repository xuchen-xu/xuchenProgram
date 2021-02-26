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
      lineNumber: 18,
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
      lineNumber: 19,
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
      lineNumber: 20,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "nav-logo",
    style: {
      width: "145px",
      height: "56px",
      "float": "left"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
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
      lineNumber: 25,
      columnNumber: 17
    }
  }, "\u56FE\u4E66\u5206\u7C7B")), __jsx("div", {
    className: "nav-search",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "https://search.douban.com/book/subject_search",
    method: "get",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("fieldset", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "inp-query",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "inp",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
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
      lineNumber: 37,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "inp-btn",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "submit",
    value: "\u641C\u7D22",
    readOnly: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
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
      lineNumber: 48,
      columnNumber: 21
    }
  })))))), __jsx("div", {
    className: "nav-secondary",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "nav-items",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://book.douban.com/cart/",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, "\u8D2D\u4E66\u5355")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, "\u7535\u5B50\u56FE\u4E66")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "\u5B54\u7F51\u4E66\u5E97")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "2021\u5E74\u5EA6\u699C\u5355")), __jsx("li", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "2021\u4E66\u5F71\u97F3\u62A5\u544A")), __jsx("li", {
    className: " book-cart",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "\u8D2D\u7269\u8F66")))))), __jsx("div", {
    id: "wrapper",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "content",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "\u5B54\u7F51\u56FE\u4E66\u6807\u7B7E: \u5C0F\u8BF4"), __jsx("div", {
    className: "grid-16-8 clearfix",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "article",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "subject_list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "clearfix",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "rr greyinput",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "\u7EFC\u5408\u6392\u5E8F \xA0/\xA0", __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, "\u6309\u51FA\u7248\u65E5\u671F\u6392\u5E8F"), "\xA0/\xA0", __jsx("a", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, "\u6309\u8BC4\u4EF7\u6392\u5E8F"))), __jsx("ul", {
    className: "subject-list",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 20
    }
  }, __jsx("li", {
    className: "subject-item",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 22
    }
  }, __jsx("div", {
    className: "pic",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 24
    }
  }, __jsx("a", {
    href: "",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 26
    }
  }, __jsx("img", {
    src: "",
    alt: "",
    style: {
      width: "90"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 28
    }
  }))))))), __jsx("div", {
    className: "aside",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "extra",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 15
    }
  }))), __jsx("div", {
    id: "footer",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvbm92ZWwvaW5kZXgudHN4Il0sIm5hbWVzIjpbIkluZGV4UGFnZSIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJnZXRJbml0aWFsUHJvcHMiLCJmZXRjaCIsInJlcyIsImpzb24iLCJkYXRhIiwic2hvdyIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ3FCO0FBQ3JCO0NBR0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFnQjtBQUNoQyxTQUNFLE1BQUMsMERBQUQ7QUFBUSxTQUFLLEVBQUMsZ0NBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLEVBR0U7QUFBSyxNQUFFLEVBQUMsYUFBUjtBQUFzQixhQUFTLEVBQUMsS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFVBQWY7QUFBMEIsU0FBSyxFQUFFO0FBQUVDLFlBQU0sRUFBRTtBQUFWLEtBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxhQUFmO0FBQTZCLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFDRSxhQUFTLEVBQUMsVUFEWjtBQUVFLFNBQUssRUFBRTtBQUFFQyxXQUFLLEVBQUUsT0FBVDtBQUFrQkQsWUFBTSxFQUFFLE1BQTFCO0FBQWtDLGVBQU87QUFBekMsS0FGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBSUU7QUFBRyxRQUFJLEVBQUMsRUFBUjtBQUFXLFNBQUssRUFBRTtBQUFFRSxjQUFRLEVBQUUsTUFBWjtBQUFvQkMsZ0JBQVUsRUFBRTtBQUFoQyxLQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdDQUpGLENBREYsRUFTRTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFVBQU0sRUFBQywrQ0FEVDtBQUVFLFVBQU0sRUFBQyxLQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyxLQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLE1BQUUsRUFBQyxXQURMO0FBRUUsUUFBSSxFQUFDLGFBRlA7QUFHRSxlQUFXLEVBQUMsMENBSGQ7QUFJRSxTQUFLLEVBQUMsRUFKUjtBQUtFLFlBQVEsTUFMVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREYsQ0FGRixFQVdFO0FBQUssYUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsU0FBSyxFQUFDLGNBQTNCO0FBQWdDLFlBQVEsTUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBWEYsRUFjRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUksRUFBQyxLQUExQjtBQUFnQyxTQUFLLEVBQUMsTUFBdEM7QUFBNkMsWUFBUSxNQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZEYsQ0FKRixDQURGLENBVEYsQ0FERixDQURGLEVBb0NFO0FBQUssYUFBUyxFQUFDLGVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxRQUFJLEVBQUMsK0JBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFERixDQURGLEVBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQ0FERixDQUpGLEVBT0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0NBREYsQ0FQRixFQVVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0NBREYsQ0FWRixFQWFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMENBREYsQ0FiRixFQWdCRTtBQUFJLGFBQVMsRUFBQyxZQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsQ0FoQkYsQ0FERixDQURGLENBcENGLENBSEYsRUFrRUU7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFERixFQUVFO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLE1BQUUsRUFBQyxjQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxVQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFNLGFBQVMsRUFBQyxjQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJDQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0RBRkYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNDQUpGLENBREYsQ0FERixFQVNHO0FBQUksYUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLGNBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssYUFBUyxFQUFDLEtBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsUUFBSSxFQUFDLEVBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUssT0FBRyxFQUFDLEVBQVQ7QUFBWSxPQUFHLEVBQUMsRUFBaEI7QUFBbUIsU0FBSyxFQUFFO0FBQUNGLFdBQUssRUFBQztBQUFQLEtBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQURGLENBREYsQ0FERixDQVRILENBREYsQ0FERixFQXNCRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUF0QkYsRUF1QkU7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBdkJGLENBRkYsQ0FERixFQTZCRTtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUE3QkYsQ0FsRUYsQ0FERixDQURGO0FBc0dELENBdkdELEMsQ0F5R0E7QUFDQTtBQUNBOzs7S0EzR01ILFM7QUE0R05BLFNBQVMsQ0FBQ00sZUFBVixpTUFBNEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFDUkMseURBQUssQ0FBQyw2QkFBRCxDQURHOztBQUFBO0FBQ3BCQyxhQURvQjtBQUFBO0FBQUEsaUJBRVBBLEdBQUcsQ0FBQ0MsSUFBSixFQUZPOztBQUFBO0FBRXBCQyxjQUZvQjtBQUFBLDJDQUluQjtBQUFFQyxnQkFBSSxFQUFFRDtBQUFSLFdBSm1COztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLENBQTVCO0FBT2UscUVBQUFFLDhEQUFVLENBQUNaLFNBQUQsQ0FBekIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbm92ZWwuZmI1N2FjMjE1YjA5Zjc2YTc4ZjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xyXG5pbXBvcnQgXCIuL25vdmVsLmNzc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgVG9wYm94bmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3RvcGJveG5hdlwiO1xyXG5cclxuLy8g5aOw5piO55qE5YWo5bGA5pWw5o2uXHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwi5YiG57G777ya5bCP6K+0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm92ZWwtYm9keVwiPlxyXG4gICAgICAgIDxUb3Bib3huYXY+PC9Ub3Bib3huYXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0t56ys5LqM5bGCdG9w5a+86Iiq5qCP5byA5aeLLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJkYi1uYXYtYm9va1wiIGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcFwiIHN0eWxlPXt7IGhlaWdodDogXCI3NS42NzdweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1wcmltYXJ5XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjc0cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNDVweFwiLCBoZWlnaHQ6IFwiNTZweFwiLCBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMzBweFwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDlm77kuabliIbnsbtcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vc2VhcmNoLmRvdWJhbi5jb20vYm9vay9zdWJqZWN0X3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZD1cImdldFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucC1xdWVyeVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucC1xdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hfdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5Lmm5ZCN44CB5L2c6ICF44CBSVNCTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnAtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi5pCc57SiXCIgcmVhZE9ubHkgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjYXRcIiB2YWx1ZT1cIjEwMDFcIiByZWFkT25seSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ib29rLmRvdWJhbi5jb20vY2FydC9cIj7otK3kuabljZU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7nlLXlrZDlm77kuaY8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YT7lrZTnvZHkuablupc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj4yMDIx5bm05bqm5qac5Y2VPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+MjAyMeS5puW9semfs+aKpeWRijwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIGJvb2stY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7otK3nianovaY8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0t56ys5LqM5bGCdG9w5a+86Iiq5qCP57uT5p2fLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS3kuLvkvZPpg6jliIYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMT7lrZTnvZHlm77kuabmoIfnrb46IOWwj+ivtDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC0xNi04IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3ViamVjdF9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyciBncmV5aW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOe7vOWQiOaOkuW6jyAmbmJzcDsvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT7mjInlh7rniYjml6XmnJ/mjpLluo88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT7mjInor4Tku7fmjpLluo88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJzdWJqZWN0LWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1YmplY3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiXCIgYWx0PVwiXCIgc3R5bGU9e3t3aWR0aDpcIjkwXCJ9fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXNpZGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4dHJhXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwiZm9vdGVyXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIGdldEluaXRpYWxQcm9wcyDmlrnms5Xml6Llj6/ku6XlnKjmnI3liqHlmajov5DooYzvvIzlj4jlj6/ku6XlnKjlrqLmiLfnq6/ov5DooYwo57uE5Lu25Yib5bu65LmL5YmN5omn6KGM55qEKVxyXG4vLyDlvZPliLfmlrDpobXpnaIo5Yid5qyh6L295YWl6aG16Z2iKe+8jOivpeaWueazleS8muWcqOacjeWKoeWZqOaJp+ihjFxyXG4vLyDlvZPpgJrov4c8TGluaz7ot7Povazot6/nlLHnmoTml7blgJnvvIzor6Xmlrnms5XkvJrlnKjlrqLmiLfnq6/miafooYxcclxuSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9ub3ZlbFwiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAvL+i/mei+uei/lOWbnueahOaVsOaNruS8muiiq+aMgui9veWIsOe7hOS7tueahHByb3Bz5LitXHJcbiAgcmV0dXJuIHsgc2hvdzogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleFBhZ2UpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9