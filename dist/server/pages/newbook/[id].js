module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/newbook/[id].tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.tsx":
/*!*******************************!*\
  !*** ./components/Layout.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\components\\Layout.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Layout = ({
  children,
  title = 'This is the default title'
}) => __jsx("div", {
  className: "jsx-3636536621",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 3
  }
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }
}, __jsx("title", {
  className: "jsx-3636536621",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}, title), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-3636536621",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-3636536621",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
})), __jsx("header", {
  className: "jsx-3636536621",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, __jsx("nav", {
  className: "jsx-3636536621",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
})), children, __jsx("footer", {
  className: "jsx-3636536621",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3636536621",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdOavleS4muiuvuiuoVxc5a6e6Le16LWE5paZXFwyMDIxMDIwMVxcMjAyMTAyMDFcXGNvZGVcXG5leHQtdHPmqKHmnb9cXG15LWFwcFxcY29tcG9uZW50c1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q1EiLCJmaWxlIjoiRDpcXHJlYWN05q+V5Lia6K6+6K6hXFzlrp7ot7XotYTmlplcXDIwMjEwMjAxXFwyMDIxMDIwMVxcY29kZVxcbmV4dC10c+aooeadv1xcbXktYXBwXFxjb21wb25lbnRzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxuICB0aXRsZT86IHN0cmluZ1xufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfTogUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2PlxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgfHsnICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzXCI+XG4gICAgICAgICAgPGE+VXNlcnMgTGlzdDwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHwgPGEgaHJlZj1cIi9hcGkvdXNlcnNcIj5Vc2VycyBBUEk8L2E+ICovfVxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAge2NoaWxkcmVufVxuICAgIDxmb290ZXI+XG4gICAgICB7LyogPGhyIC8+ICovfVxuICAgICAgey8qIDxzcGFuPkknbSBoZXJlIHRvIHN0YXkgKEZvb3Rlcik8L3NwYW4+ICovfVxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7XG4gICAgICAgIGBcbiAgICAgICAgYFxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiJdfQ== */\n/*@ sourceURL=D:\\\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\\\u5B9E\u8DF5\u8D44\u6599\\\\20210201\\\\20210201\\\\code\\\\next-ts\u6A21\u677F\\\\my-app\\\\components\\\\Layout.tsx */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/css/newbookdetail.css":
/*!*************************************!*\
  !*** ./pages/css/newbookdetail.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/newbook/[id].tsx":
/*!********************************!*\
  !*** ./pages/newbook/[id].tsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _css_newbookdetail_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/newbookdetail.css */ "./pages/css/newbookdetail.css");
/* harmony import */ var _css_newbookdetail_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_newbookdetail_css__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\newbook\\[id].tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;


 // import { Button } from 'antd';
// import { useEffect } from 'react'



// let bookidtest = 0;
const IndexPage = props => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "\u8BE6\u60C5\u9875",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "body-newbookbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }
  }, __jsx("div", {
    id: "db-global-nav",
    className: "global-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "top-nav-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "nav-login",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 15
    }
  }, "\u767B\u5F55/\u6CE8\u518C")), __jsx("div", {
    className: "top-nav-doubanapp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "lnk-doubanapp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "\u4E0B\u8F7D\u7F51\u7AD9\u5BA2\u6237\u7AEF")), __jsx("div", {
    className: "global-nav-items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 19
    }
  }, "\u5B54\u7F51")), __jsx("li", {
    className: "on",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, "\u8BFB\u4E66")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 19
    }
  }, "\u53E4\u7C4D")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, "\u58A8\u8FF9")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 19
    }
  }, "\u73CD\u672C")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 19
    }
  }, "\u5C0F\u8BF4")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 19
    }
  }, "\u6563\u6587")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 19
    }
  }, "\u968F\u7B14")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 19
    }
  }, "\u6587\u5B66")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, "\u5B97\u6559")))))), __jsx("div", {
    className: "bookdetail-ershou",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bookdetailbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "detailbook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 13
    }
  }, "\u4E66\u672C\u8BE6\u60C5"))), props.show.map(item => {
    return __jsx("div", {
      className: "detailbox-jiuwang",
      key: item.bookName,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "wrapper",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 15
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 19
      }
    }, item.bookName), __jsx("div", {
      className: "clear",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    })), __jsx("div", {
      id: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "grid-16-8 clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "article",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "indent",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "subjectwrap clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "subject clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 27
      }
    }, __jsx("div", {
      id: "mainpic",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 89,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: `../static/images/image/${item.imgPath}`,
      className: "mainpicimg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 33
      }
    }))), __jsx("div", {
      id: "info",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 31
      }
    }, "\u4F5C\u8005:"), "\xA0", __jsx("a", {
      href: "https://book.douban.com/author/4530739/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 31
      }
    }, item.author), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 31
      }
    }, "\u51FA\u7248\u793E:"), item.publishHouse, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107,
        columnNumber: 31
      }
    }, "\u51FA\u54C1\u65B9:"), "\xA0", __jsx("a", {
      href: "https://book.douban.com/series/41996?brand=1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 31
      }
    }, "\u534E\u6587\u5929\u4E0B"), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 31
      }
    }, "\u51FA\u7248\u5E74:"), " ", item.publicationYear, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 31
      }
    }, "\u9875\u6570:"), " 217", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115,
        columnNumber: 66
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 31
      }
    }, "\u5B9A\u4EF7:"), " ", item.bookPrice, "\u5143", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117,
        columnNumber: 32
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 31
      }
    }, "\u88C5\u5E27:"), " \u5E73\u88C5", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 65
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 31
      }
    }, "\u4E1B\u4E66:"), "\xA0", __jsx("a", {
      href: "https://book.douban.com/series/744",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 31
      }
    }, "\u534E\u6587\u5929\u4E0B2003\u7248"), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 31
      }
    }, "ISBN:"), " 9787806398791 ", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 53
      }
    }))), __jsx("div", {
      id: "interest_sectl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "rating_wrap clearbox",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "rating_logo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 31
      }
    }, "\u4E66\u7C4D\u8BC4\u5206"), __jsx("div", {
      className: "rating_self clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: "novelgrade",
      style: {
        float: "left",
        lineHeight: "30px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 33
      }
    }, item.grade), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 141,
        columnNumber: 35
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 35
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 35
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 156,
        columnNumber: 35
      }
    }), __jsx("img", {
      src: "../../static/images/image/star.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 35
      }
    })))))), __jsx("div", {
      id: "interest_sect_level",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "j a_show_login colbutt ll",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 27
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "minisubmit j",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 31
      }
    }, "\u65B0\u4E66"))), __jsx("a", {
      className: "j a_show_login colbutt ll",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177,
        columnNumber: 27
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "minisubmit j",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 31
      }
    }, "\u60F3\u8BFB"))), __jsx("a", {
      className: "j a_show_login colbutt ll",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 27
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 183,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "minisubmit j",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 31
      }
    }, "\u63A8\u8350")))), __jsx("div", {
      className: "gtleft",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 25
      }
    }, __jsx("ul", {
      className: "ul_subject_menu bicelink color_gray pt6 clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 190,
        columnNumber: 27
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 31
      }
    }), "\xA0", __jsx("a", {
      className: "j a_show_login",
      href: "https://book.douban.com/annotation/write?sid=1060068",
      rel: "nofollow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 31
      }
    }, "\u5199\u7B14\u8BB0")), __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 31
      }
    }), "\xA0", __jsx("a", {
      className: "j a_show_login",
      href: "https://book.douban.com/subject/1060068/new_review",
      rel: "nofollow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 31
      }
    }, "\u5199\u4E66\u8BC4")), __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "rr",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: "https://img3.doubanio.com/pics/add-cart.gif",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 33
      }
    }), __jsx("a", {
      className: "j a_show_login shoppingnewbook",
      href: "https://www.douban.com/accounts/passport/login?source=book",
      rel: "nofollow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 33
      }
    }, "\u52A0\u5165\u8D2D\u4E66\u5355")), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 31
      }
    })), __jsx("li", {
      className: "rec",
      id: "C-1060068",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "#",
      "data-url": "https://book.douban.com/subject/1060068/",
      "data-desc": "",
      "data-title": "\u4E66\u7C4D\u300A\u6492\u54C8\u62C9\u7684\u6545\u4E8B\u300B (\u6765\u81EA\u8C46\u74E3) ",
      "data-pic": "https://img3.doubanio.com/view/subject/l/public/s1066570.jpg",
      className: "bn-sharing",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 31
      }
    }, "\u5206\u4EAB\u5230"), " ", "\xA0\xA0")))), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "related_info",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 23
      }
    }, __jsx("h2", {
      className: "h231",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 27
      }
    }, "\u5185\u5BB9\u7B80\u4ECB"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7"), __jsx("div", {
      id: "link-report",
      className: "indent2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "intro",
      style: {
        color: "#111"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 29
      }
    }, item.contentValidity))), __jsx("h2", {
      className: "h233",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 27
      }
    }, "\u4F5C\u8005\u7B80\u4ECB"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7"), __jsx("div", {
      className: "intro",
      style: {
        color: "#111"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 25
      }
    }, item.authorContent), __jsx("h2", {
      className: "h233",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 27
      }
    }, "\u539F\u6587\u6458\u5F55"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7(\u5168\u90E8)"), __jsx("ul", {
      className: "blockquote-list",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 27
      }
    }, __jsx("figure", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "tubiao-newbook",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 31
      }
    }), item.yuanwen, __jsx("a", {
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 29
      }
    }, " ( \u67E5\u770B\u539F\u6587 )"))), __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 27
      }
    }, __jsx("figure", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "tubiao-newbook",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 31
      }
    }), item.zhailu, __jsx("a", {
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 29
      }
    }, " ( \u67E5\u770B\u539F\u6587 )"))))))), __jsx("div", {
      className: "aside",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 19
      }
    }), __jsx("div", {
      className: "extra",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 293,
        columnNumber: 19
      }
    }))));
  })));
};

IndexPage.getInitialProps = async context => {
  // console.log(context.query)
  const {
    id
  } = context.query;
  const res = await fetch(`http://localhost:3001/essay/${id}`);
  const data = await res.json(); //这边返回的数据会被挂载到组件的props中
  // console.log(data);

  return {
    show: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_1__["withRouter"])(IndexPage));

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

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL25ld2Jvb2svLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJJbmRleFBhZ2UiLCJwcm9wcyIsInNob3ciLCJtYXAiLCJpdGVtIiwiYm9va05hbWUiLCJpbWdQYXRoIiwiYXV0aG9yIiwicHVibGlzaEhvdXNlIiwicHVibGljYXRpb25ZZWFyIiwiYm9va1ByaWNlIiwiZmxvYXQiLCJsaW5lSGVpZ2h0IiwiZ3JhZGUiLCJjb2xvciIsImNvbnRlbnRWYWxpZGl0eSIsImF1dGhvckNvbnRlbnQiLCJ5dWFud2VuIiwiemhhaWx1IiwiZ2V0SW5pdGlhbFByb3BzIiwiY29udGV4dCIsImlkIiwicXVlcnkiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtR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QSxDQTNESCxDQURGLENBREY7QUFxU0QsQ0F0U0Q7O0FBd1NBZCxTQUFTLENBQUNtQixlQUFWLEdBQTRCLE1BQU9DLE9BQVAsSUFBd0I7QUFDbEQ7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0QsT0FBTyxDQUFDRSxLQUF2QjtBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsK0JBQThCSCxFQUFHLEVBQW5DLENBQXZCO0FBQ0EsUUFBTUksSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQixDQUprRCxDQUtsRDtBQUNBOztBQUNBLFNBQU87QUFBRXhCLFFBQUksRUFBRXVCO0FBQVIsR0FBUDtBQUNELENBUkQ7O0FBVWVFLDZIQUFVLENBQUMzQixTQUFELENBQXpCLEU7Ozs7Ozs7Ozs7O0FDNVRBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL25ld2Jvb2svW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbmV3Ym9vay9baWRdLnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH06IFByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICAgIDxhPlVzZXJzIExpc3Q8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8IDxhIGhyZWY9XCIvYXBpL3VzZXJzXCI+VXNlcnMgQVBJPC9hPiAqL31cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Zm9vdGVyPlxuICAgICAgey8qIDxociAvPiAqL31cbiAgICAgIHsvKiA8c3Bhbj5JJ20gaGVyZSB0byBzdGF5IChGb290ZXIpPC9zcGFuPiAqL31cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge1xuICAgICAgICBgXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCJpbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG5pbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgXCIuLi9jc3MvbmV3Ym9va2RldGFpbC5jc3NcIjtcclxuaW1wb3J0IGNzc29iaiBmcm9tIFwiLi4vY3NzL25ld2Jvb2tkZXRhaWwyLmxlc3NcIjtcclxuXHJcbi8vIGxldCBib29raWR0ZXN0ID0gMDtcclxuY29uc3QgSW5kZXhQYWdlID0gKHByb3BzOiBhbnkpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPExheW91dCB0aXRsZT1cIuivpuaDhemhtVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHktbmV3Ym9va2JveFwiPlxyXG4gICAgICAgIHsvKi0tLS0tLS0tLS3lpLTpg6jlr7zoiKrmoI/lvIDlp4stLS0tLS0tLS0tLS0tLS0tLS0tLSovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJkYi1nbG9iYWwtbmF2XCIgY2xhc3NOYW1lPVwiZ2xvYmFsLW5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiZFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtaW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1sb2dpblwiIHJlbD1cIm5vZm9sbG93XCI+XHJcbiAgICAgICAgICAgICAgICDnmbvlvZUv5rOo5YaMXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLW5hdi1kb3ViYW5hcHBcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsbmstZG91YmFuYXBwXCI+5LiL6L29572R56uZ5a6i5oi356uvPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2xvYmFsLW5hdi1pdGVtc1wiPlxyXG4gICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5a2U572RPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJvblwiPlxyXG4gICAgICAgICAgICAgICAgICA8YT7or7vkuaY8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7lj6TnsY08L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7loqjov7k8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7nj43mnKw8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7lsI/or7Q8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7mlaPmloc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7pmo/nrJQ8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7mloflraY8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7lrpfmlZk8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS3lpLTpg6jlr7zoiKrmoI/nu5PmnZ8tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgICB7LyotLS0tLS3kuabmnKzor6bmg4XmoYblvIDlp4stLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tkZXRhaWwtZXJzaG91XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tkZXRhaWxib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxib29rXCI+5Lmm5pys6K+m5oOFPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyotLS0tLS3kuabmnKzor6bmg4XmoYbnu5PmnZ8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICovfVxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLeS4u+S9k+mDqOWIhi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIHtwcm9wcy5zaG93Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbGJveC1qaXV3YW5nXCIga2V5PXtpdGVtLmJvb2tOYW1lfT5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5ib29rTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC0xNi04IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmplY3R3cmFwIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJqZWN0IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbnBpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuLi9zdGF0aWMvaW1hZ2VzL2ltYWdlLyR7aXRlbS5pbWdQYXRofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWlucGljaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsXCI+5L2c6ICFOjwvc3Bhbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL2F1dGhvci80NTMwNzM5L1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGxcIj7lh7rniYjnpL46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wdWJsaXNoSG91c2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbFwiPuWHuuWTgeaWuTo8L3NwYW4+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jvb2suZG91YmFuLmNvbS9zZXJpZXMvNDE5OTY/YnJhbmQ9MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWNjuaWh+WkqeS4i1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbFwiPuWHuueJiOW5tDo8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wdWJsaWNhdGlvblllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbFwiPumhteaVsDo8L3NwYW4+IDIxNzxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbFwiPuWumuS7tzo8L3NwYW4+IHtpdGVtLmJvb2tQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YWDPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsXCI+6KOF5binOjwvc3Bhbj4g5bmz6KOFPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsXCI+5Lib5LmmOjwvc3Bhbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL3Nlcmllcy83NDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDljY7mloflpKnkuIsyMDAz54mIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSVNCTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiA5Nzg3ODA2Mzk4NzkxIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImludGVyZXN0X3NlY3RsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ193cmFwIGNsZWFyYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nX2xvZ29cIj7kuabnsY3or4TliIY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdfc2VsZiBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdmVsZ3JhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBsaW5lSGVpZ2h0OiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmdyYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3Rhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnRlcmVzdF9zZWN0X2xldmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaiBhX3Nob3dfbG9naW4gY29sYnV0dCBsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluaXN1Ym1pdCBqXCI+5paw5LmmPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImogYV9zaG93X2xvZ2luIGNvbGJ1dHQgbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmlzdWJtaXQgalwiPuaDs+ivuzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJqIGFfc2hvd19sb2dpbiBjb2xidXR0IGxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pc3VibWl0IGpcIj7mjqjojZA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWxfc3ViamVjdF9tZW51IGJpY2VsaW5rIGNvbG9yX2dyYXkgcHQ2IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWczLmRvdWJhbmlvLmNvbS9mL3NoaXJlLzViYmYwMmI3YjVlYzEyYjIzZTIxNGE1ODBiNmY5ZTQ4MTEwODQ4OGMvcGljcy9hZGQtcmV2aWV3LmdpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImogYV9zaG93X2xvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ib29rLmRvdWJhbi5jb20vYW5ub3RhdGlvbi93cml0ZT9zaWQ9MTA2MDA2OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YaZ56yU6K6wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nMy5kb3ViYW5pby5jb20vZi9zaGlyZS81YmJmMDJiN2I1ZWMxMmIyM2UyMTRhNTgwYjZmOWU0ODExMDg0ODhjL3BpY3MvYWRkLXJldmlldy5naWZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqIGFfc2hvd19sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL3N1YmplY3QvMTA2MDA2OC9uZXdfcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlhpnkuabor4RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZzMuZG91YmFuaW8uY29tL3BpY3MvYWRkLWNhcnQuZ2lmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaiBhX3Nob3dfbG9naW4gc2hvcHBpbmduZXdib29rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5kb3ViYW4uY29tL2FjY291bnRzL3Bhc3Nwb3J0L2xvZ2luP3NvdXJjZT1ib29rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliqDlhaXotK3kuabljZVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZWNcIiBpZD1cIkMtMTA2MDA2OFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVybD1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL3N1YmplY3QvMTA2MDA2OC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVzYz1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXRsZT1cIuS5puexjeOAiuaSkuWTiOaLieeahOaVheS6i+OAiyAo5p2l6Ieq6LGG55OjKSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGljPVwiaHR0cHM6Ly9pbWczLmRvdWJhbmlvLmNvbS92aWV3L3N1YmplY3QvbC9wdWJsaWMvczEwNjY1NzAuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibi1zaGFyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIhuS6q+WIsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLeWGheWuueeugOS7i+mDqOWIhi0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWRfaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIzMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWGheWuueeugOS7izwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxpbmstcmVwb3J0XCIgY2xhc3NOYW1lPVwiaW5kZW50MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvXCIgc3R5bGU9e3tjb2xvcjogXCIjMTExXCJ9fT57aXRlbS5jb250ZW50VmFsaWRpdHl9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLeS9nOiAheeugOS7iy0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyMzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7kvZzogIXnroDku4s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW50cm9cIiBzdHlsZT17e2NvbG9yOiBcIiMxMTFcIn19PntpdGVtLmF1dGhvckNvbnRlbnR9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0t5Y6f5paH5pGY5b2VLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIzM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWOn+aWh+aRmOW9lTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrco5YWo6YOoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJpbnRyb1wiIHN0eWxlPXt7Y29sb3I6IFwiIzExMVwifX0+PC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYmxvY2txdW90ZS1saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dWJpYW8tbmV3Ym9va1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS55dWFud2VufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3tjb2xvcjogXCIjMzM3N2FhXCJ9fT4gKCDmn6XnnIvljp/mlocgKTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dWJpYW8tbmV3Ym9va1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS56aGFpbHV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17e2NvbG9yOiBcIiMzMzc3YWFcIn19PiAoIOafpeeci+WOn+aWhyApPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0t5Zac5qyi5o6o6I2QICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS3kuIvpnaLkuIDkuKrmmK9hcnRpY2xl55qEZGl2LS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmFcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSl9XHJcblxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLeS4u+S9k+mDqOWIhue7k+adny0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG5JbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKGNvbnRleHQ6IGFueSkgPT4ge1xyXG4gIC8vIGNvbnNvbGUubG9nKGNvbnRleHQucXVlcnkpXHJcbiAgY29uc3QgeyBpZCB9ID0gY29udGV4dC5xdWVyeTtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAxL2Vzc2F5LyR7aWR9YCk7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgLy/ov5novrnov5Tlm57nmoTmlbDmja7kvJrooqvmjILovb3liLDnu4Tku7bnmoRwcm9wc+S4rVxyXG4gIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIHJldHVybiB7IHNob3c6IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXhQYWdlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==