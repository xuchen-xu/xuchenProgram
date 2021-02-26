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

/***/ "./pages/components/aside.css":
/*!************************************!*\
  !*** ./pages/components/aside.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/components/aside.tsx":
/*!************************************!*\
  !*** ./pages/components/aside.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _aside_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./aside.css */ "./pages/components/aside.css");
/* harmony import */ var _aside_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_aside_css__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\components\\aside.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Link from 'next/link'
// import { withRouter } from "next/router";


 // import "./css/index.css";
// import fetch from "isomorphic-unfetch";
// import Fromdemo from "./components/from"
// 声明的全局数据

let IndexPage = props => {
  return __jsx("div", {
    className: "aside",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    id: "dale_book_subject_top_right",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "asidebox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "dale_book_subject_top_right_frame",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../../static/images/\u6D4B\u8BD5test.jpg",
    style: {
      width: "271",
      height: "226"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 13
    }
  })), __jsx("div", {
    className: "guge",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, "\u7531\u8C37\u6B4C\u63D0\u4F9B\u7684\u5E7F\u544A")), __jsx("div", {
    id: "buyinfo",
    className: "gray_ad buyinfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "buyinfo-printed",
    className: "buyinfo-printed",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "\u5F53\u524D\u7248\u672C\u6709\u552E"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7"), __jsx("ul", {
    className: "bs current-version-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "cell price-btn-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "vendor-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  }, "\u4EAC\u4E1C\u5546\u57CE"))), __jsx("div", {
    className: "cell impression_track_mod_buyinfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "cell price-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "buylink-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, "276.00\u5143"))), __jsx("div", {
    className: "cell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    className: "buy-book-btn paper-book-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 23
    }
  }, __jsx("span", {
    style: {
      color: "#EB9108"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 25
    }
  }, "\u8D2D\u4E70\u7EB8\u8D28\u4E66"))))))), __jsx("h2", {
    style: {
      marginTop: "15px"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "\u73B0\u8D27\u4E8C\u624B\u4E66"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7"), __jsx("ul", {
    className: "bs current-version-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "cell price-btn-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "vendor-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 23
    }
  }, "\u591A\u6293\u9C7C"))), __jsx("div", {
    className: "cell impression_track_mod_buyinfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "cell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    className: "buy-book-btn paper-book-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "buylink-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 25
    }
  }, "\u53BB\u901B\u901B >"))))))), __jsx("ul", {
    className: "bs current-version-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 13
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 15
    }
  }, __jsx("div", {
    className: "cell price-btn-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "vendor-name",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 19
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 21
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 23
    }
  }, "\u5B54\u7F51"))), __jsx("div", {
    className: "cell impression_track_mod_buyinfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 19
    }
  }, __jsx("div", {
    className: "cell price-wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, __jsx("span", {
    className: "buylink-price",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 25
    }
  }, "276.00\u5143"))), __jsx("div", {
    className: "cell",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 21
    }
  }, __jsx("a", {
    href: "",
    className: "buy-book-btn paper-book-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 23
    }
  }, __jsx("span", {
    style: {
      color: "#EB9108"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 25
    }
  }, "\u76F4\u63A5\u8D2D\u4E70")))))))), __jsx("div", {
    className: "add2cartContainer no-border",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }
  }, __jsx("span", {
    className: "add2cartWidget ll",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 13
    }
  }, __jsx("a", {
    className: "j  add2cart a_show_login",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 15
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 17
    }
  }, "+ \u52A0\u5165\u8D2D\u4E66\u5355"))))), __jsx("div", {
    className: "gray_ad version_works",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 13
    }
  }, "\u8FD9\u672C\u4E66\u7684\u5176\u4ED6\u7248\u672C"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7 ( \u5168\u90E8 )"), __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "mb8 pl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "meta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://book.douban.com/subject/34927707/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 17
    }
  }, "Bloomsbury Publishing \uFF082019\uFF09"), __jsx("div", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 19
    }
  }, "\u6682\u65E0\u8BC4\u5206"), " 3\u4EBA\u8BFB\u8FC7"))), __jsx("li", {
    className: "mb8 pl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "meta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://book.douban.com/subject/34927707/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 17
    }
  }, "\u7687\u51A0\u51FA\u7248\u793E \uFF081976\uFF09"), __jsx("div", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139,
      columnNumber: 19
    }
  }, "9.0\u5206"), " 261120\u4EBA\u8BFB\u8FC7"))), __jsx("li", {
    className: "mb8 pl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "meta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://book.douban.com/subject/34927707/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 146,
      columnNumber: 17
    }
  }, "\u5317\u4EAC\u5341\u6708\u6587\u827A\u51FA\u7248\u793E \uFF082011\uFF09"), __jsx("div", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 19
    }
  }, "9.3\u5206"), " 67911\u4EBA\u8BFB\u8FC7"))), __jsx("li", {
    className: "mb8 pl",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "meta",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 15
    }
  }, __jsx("a", {
    href: "https://book.douban.com/subject/34927707/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 17
    }
  }, "\u5317\u4EAC\u5341\u6708\u6587\u827A\u51FA\u7248\u793E \uFF082009\uFF09"), __jsx("div", {
    className: "count",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 17
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 161,
      columnNumber: 19
    }
  }, "9.3\u5206"), " 19438\u4EBA\u8BFB\u8FC7"))))), __jsx("div", {
    className: "gray_ad",
    id: "borrowinfo",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168,
      columnNumber: 9
    }
  }, __jsx("h2", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 11
    }
  }, __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 170,
      columnNumber: 13
    }
  }, "\u5728\u54EA\u513F\u501F\u8FD9\u672C\u4E66"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7"), __jsx("ul", {
    className: "bs more-after",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 174,
      columnNumber: 11
    }
  }, __jsx("li", {
    style: {
      border: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176,
      columnNumber: 15
    }
  }, "\u5317\u4EAC\u5E02\u516C\u5171\u56FE\u4E66\u9986(5)")), __jsx("li", {
    style: {
      border: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 180,
      columnNumber: 15
    }
  }, "\u4E0A\u6D77\u5E02\u4E2D\u5FC3\u56FE\u4E66\u9986(23)")), __jsx("li", {
    style: {
      border: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 184,
      columnNumber: 15
    }
  }, "\u5E7F\u5DDE\u5176\u4ED6\u9986\u85CF(1)")), __jsx("li", {
    style: {
      border: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 188,
      columnNumber: 15
    }
  }, "\u5409\u6797\u7701\u56FE\u4E66\u9986")), __jsx("li", {
    style: {
      border: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 191,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 15
    }
  }, "\u6C5F\u9634\u5E02\u56FE\u4E66\u9986")), __jsx("li", {
    style: {
      border: "none"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 15
    }
  }, "\u91CD\u5E86\u56FE\u4E66\u9986"))), __jsx("div", {
    className: "clearfix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 11
    }
  }))));
}; //getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/users");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show: data };
// };


/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./pages/components/footerbook.tsx":
/*!*****************************************!*\
  !*** ./pages/components/footerbook.tsx ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\components\\footerbook.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Link from 'next/link'
// import { withRouter } from "next/router";



// import "./css/index.css";
// import fetch from "isomorphic-unfetch";
// import Fromdemo from "./components/from"
// 声明的全局数据
let IndexPage = props => {
  return __jsx("div", {
    className: "footer-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "footer-wrap clearfix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "copyright-info-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, "\xA9 2002-2021 Kongfz.com \u5B54\u5B50\u65E7\u4E66\u7F51 \u7248\u6743\u6240\u6709"), __jsx("div", {
    className: "link-box",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }
  }, __jsx("a", {
    className: "item",
    target: "_blank",
    rel: "nofollow",
    href: "http://www.kongfz.com/help/aboutus.php",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 9
    }
  }, "\u5173\u4E8E\u5B54\u7F51"), __jsx("a", {
    className: "item",
    target: "_blank",
    rel: "nofollow",
    href: "http://www.kongfz.com/help/lianxi.html",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, "\u8054\u7CFB\u6211\u4EEC"), __jsx("a", {
    className: "item",
    target: "_blank",
    rel: "nofollow",
    href: "http://help.kongfz.com/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, "\u5E2E\u52A9\u4E2D\u5FC3"), __jsx("a", {
    className: "item",
    target: "_blank",
    rel: "nofollow",
    href: "http://www.kongfz.com/help/copyright.php",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 9
    }
  }, "\u7248\u6743\u9690\u79C1"), __jsx("a", {
    className: "item",
    target: "_blank",
    rel: "nofollow",
    href: "http://www.kongfz.com/help/guanggao.php",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 9
    }
  }, "\u5E7F\u544A\u4E1A\u52A1"), __jsx("a", {
    className: "item",
    target: "_blank",
    rel: "nofollow",
    href: "http://www.kongfz.com/help/zhaopin.php",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 9
    }
  }, "\u5DE5\u4F5C\u673A\u4F1A"), __jsx("a", {
    className: "item",
    target: "_blank",
    href: "https://m.kongfz.com/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 9
    }
  }, "\u79FB\u52A8\u7248"), __jsx("a", {
    className: "item",
    target: "_blank",
    href: "http://book.kongfz.com/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75,
      columnNumber: 9
    }
  }, "\u56FE\u4E66\u76EE\u5F55"), __jsx("a", {
    className: "item",
    target: "_blank",
    href: "http://bq.kongfz.com/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 9
    }
  }, "\u56FE\u4E66\u6807\u7B7E"))));
}; // export default class Child extends React.Component{
//   render(){
//     return  <div>{this.props.params.msg}</div>
//   }
// }
//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/users");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show: data };
// };


/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./pages/components/topboxnav.tsx":
/*!****************************************!*\
  !*** ./pages/components/topboxnav.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\components\\topboxnav.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;
// import Link from 'next/link'
// import { withRouter } from "next/router";



// import "./css/index.css";
// import fetch from "isomorphic-unfetch";
// import Fromdemo from "./components/from"
// 声明的全局数据
let IndexPage = props => {
  return __jsx("div", {
    id: "db-global-nav",
    className: "global-nav",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "bd",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "top-nav-info",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "nav-login",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 11
    }
  }, "\u767B\u5F55/\u6CE8\u518C")), __jsx("div", {
    className: "top-nav-doubanapp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("a", {
    className: "lnk-doubanapp",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, "\u4E0B\u8F7D\u7F51\u7AD9\u5BA2\u6237\u7AEF")), __jsx("div", {
    className: "global-nav-items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, "\u5B54\u7F51")), __jsx("li", {
    className: "on",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, "\u8BFB\u4E66")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 15
    }
  }, "\u53E4\u7C4D")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 15
    }
  }, "\u58A8\u8FF9")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 15
    }
  }, "\u73CD\u672C")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 15
    }
  }, "\u5C0F\u8BF4")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 15
    }
  }, "\u6563\u6587")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 15
    }
  }, "\u968F\u7B14")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 15
    }
  }, "\u6587\u5B66")), __jsx("li", {
    className: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, "\u5B97\u6559"))))));
}; // export default class Child extends React.Component{
//   render(){
//     return  <div>{this.props.params.msg}</div>
//   }
// }
//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/users");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show: data };
// };


/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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
/* harmony import */ var _components_footerbook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/footerbook */ "./pages/components/footerbook.tsx");
/* harmony import */ var _components_aside__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/aside */ "./pages/components/aside.tsx");
/* harmony import */ var _components_topboxnav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/topboxnav */ "./pages/components/topboxnav.tsx");
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
      lineNumber: 15,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "body-newbookbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, __jsx(_components_topboxnav__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 10
    }
  }), __jsx("div", {
    className: "bookdetail-ershou",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "bookdetailbox",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "detailbook",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }
  }, "\u4E66\u672C\u8BE6\u60C5"))), props.show.map(item => {
    return __jsx("div", {
      className: "detailbox-jiuwang",
      key: item.bookName,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 13
      }
    }, __jsx("div", {
      id: "wrapper",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 15
      }
    }, __jsx("h1", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 19
      }
    }, item.bookName), __jsx("div", {
      className: "clear",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 19
      }
    })), __jsx("div", {
      id: "content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "grid-16-8 clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "article",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "indent",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "subjectwrap clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "subject clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 27
      }
    }, __jsx("div", {
      id: "mainpic",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: `../static/images/image/${item.imgPath}`,
      className: "mainpicimg",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 33
      }
    }))), __jsx("div", {
      id: "info",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 31
      }
    }, "\u4F5C\u8005:"), "\xA0", __jsx("a", {
      href: "https://book.douban.com/author/4530739/",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 31
      }
    }, item.author), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 31
      }
    }, "\u51FA\u7248\u793E:"), item.publishHouse, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 31
      }
    }, "\u51FA\u54C1\u65B9:"), "\xA0", __jsx("a", {
      href: "https://book.douban.com/series/41996?brand=1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 31
      }
    }, "\u534E\u6587\u5929\u4E0B"), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 31
      }
    }, "\u51FA\u7248\u5E74:"), " ", item.publicationYear, __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 31
      }
    }, "\u9875\u6570:"), " 217", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 66
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 31
      }
    }, "\u5B9A\u4EF7:"), " ", item.bookPrice, "\u5143", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 32
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 31
      }
    }, "\u88C5\u5E27:"), " \u5E73\u88C5", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 65
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 31
      }
    }, "\u4E1B\u4E66:"), "\xA0", __jsx("a", {
      href: "https://book.douban.com/series/744",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 31
      }
    }, "\u534E\u6587\u5929\u4E0B2003\u7248"), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 31
      }
    }), __jsx("span", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 31
      }
    }, "ISBN:"), " 9787806398791 ", __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 53
      }
    }))), __jsx("div", {
      id: "interest_sectl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "rating_wrap clearbox",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "rating_logo",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 87,
        columnNumber: 31
      }
    }, "\u4E66\u7C4D\u8BC4\u5206"), __jsx("div", {
      className: "rating_self clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 88,
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
        lineNumber: 89,
        columnNumber: 33
      }
    }, item.grade), __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 33
      }
    }, __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 35
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 35
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106,
        columnNumber: 35
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 35
      }
    }), __jsx("img", {
      src: "../../static/images/image/star.png",
      width: "20",
      height: "20",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116,
        columnNumber: 35
      }
    })))))), __jsx("div", {
      id: "interest_sect_level",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "j a_show_login colbutt ll",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 27
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "minisubmit j",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 31
      }
    }, "\u65B0\u4E66"))), __jsx("a", {
      className: "j a_show_login colbutt ll",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132,
        columnNumber: 27
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "minisubmit j",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 31
      }
    }, "\u60F3\u8BFB"))), __jsx("a", {
      className: "j a_show_login colbutt ll",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 27
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "minisubmit j",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 31
      }
    }, "\u63A8\u8350")))), __jsx("div", {
      className: "gtleft",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144,
        columnNumber: 25
      }
    }, __jsx("ul", {
      className: "ul_subject_menu bicelink color_gray pt6 clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 145,
        columnNumber: 27
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 31
      }
    }), "\xA0", __jsx("a", {
      className: "j a_show_login",
      href: "https://book.douban.com/annotation/write?sid=1060068",
      rel: "nofollow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 149,
        columnNumber: 31
      }
    }, "\u5199\u7B14\u8BB0")), __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 29
      }
    }, __jsx("img", {
      src: "https://img3.doubanio.com/f/shire/5bbf02b7b5ec12b23e214a580b6f9e481108488c/pics/add-review.gif",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 31
      }
    }), "\xA0", __jsx("a", {
      className: "j a_show_login",
      href: "https://book.douban.com/subject/1060068/new_review",
      rel: "nofollow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 31
      }
    }, "\u5199\u4E66\u8BC4")), __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 170,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "rr",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: "https://img3.doubanio.com/pics/add-cart.gif",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 33
      }
    }), __jsx("a", {
      className: "j a_show_login shoppingnewbook",
      href: "https://www.douban.com/accounts/passport/login?source=book",
      rel: "nofollow",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 33
      }
    }, "\u52A0\u5165\u8D2D\u4E66\u5355")), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 31
      }
    })), __jsx("li", {
      className: "rec",
      id: "C-1060068",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
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
        lineNumber: 185,
        columnNumber: 31
      }
    }, "\u5206\u4EAB\u5230"), " ", "\xA0\xA0")))), __jsx("br", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 23
      }
    }), __jsx("div", {
      className: "related_info",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 23
      }
    }, __jsx("h2", {
      className: "h231",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 27
      }
    }, "\u5185\u5BB9\u7B80\u4ECB"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7"), __jsx("div", {
      id: "link-report",
      className: "indent2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 25
      }
    }, __jsx("div", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
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
        lineNumber: 209,
        columnNumber: 29
      }
    }, item.contentValidity))), __jsx("h2", {
      className: "h233",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
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
        lineNumber: 219,
        columnNumber: 25
      }
    }, item.authorContent), __jsx("h2", {
      className: "h233",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 27
      }
    }, "\u539F\u6587\u6458\u5F55"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7(\u5168\u90E8)"), __jsx("ul", {
      className: "blockquote-list",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 27
      }
    }, __jsx("figure", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "tubiao-newbook",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 31
      }
    }), item.yuanwen, __jsx("a", {
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 31
      }
    }, " ( \u67E5\u770B\u539F\u6587 )"))), __jsx("li", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 27
      }
    }, __jsx("figure", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 237,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "tubiao-newbook",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 238,
        columnNumber: 31
      }
    }), item.zhailu, __jsx("a", {
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 31
      }
    }, " ( \u67E5\u770B\u539F\u6587 )")))), __jsx("h2", {
      className: "h233",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 27
      }
    }, "\u559C\u6B22\u8BFB\u300A", item.bookName, "\u300B\u7684\u4EBA\u4E5F\u559C\u6B22"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7"), __jsx("div", {
      className: "sahalao-content clearfix",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 25
      }
    }, __jsx("dl", {
      className: "dl1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 27
      }
    }, __jsx("dt", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 251,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: item.tuijian1,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 33
      }
    }))), __jsx("dd", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 29
      }
    }, item.ren1)), __jsx("dl", {
      className: "dl1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 27
      }
    }, __jsx("dt", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: item.tuijian2,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 33
      }
    }))), __jsx("dd", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 29
      }
    }, item.ren2)), __jsx("dl", {
      className: "dl1",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 27
      }
    }, __jsx("dt", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: item.tuijian3,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 33
      }
    }))), __jsx("dd", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 29
      }
    }, item.ren3)), __jsx("dl", {
      className: "dl2",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 27
      }
    }, __jsx("dt", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 279,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: item.tuijian4,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 280,
        columnNumber: 33
      }
    }))), __jsx("dd", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 283,
        columnNumber: 29
      }
    }, item.ren4)), __jsx("dl", {
      className: "dltest",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 27
      }
    }, __jsx("dt", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 29
      }
    }, __jsx("a", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 31
      }
    }, __jsx("img", {
      src: item.tuijian5,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 33
      }
    }))), __jsx("dd", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 292,
        columnNumber: 29
      }
    }, item.ren5))), __jsx("h2", {
      className: "h233",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 297,
        columnNumber: 25
      }
    }, __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 298,
        columnNumber: 27
      }
    }, "\u77ED\u8BC4"), "\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7\xA0\xB7(\u5168\u90E8)"), __jsx("div", {
      className: "nav-tab-new",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 301,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "tabs-wrapper  line",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 302,
        columnNumber: 27
      }
    }, __jsx("a", {
      className: "short-comment-tabs on-tab",
      style: {
        color: "#111",
        fontSize: "14px",
        fontWeight: "bolder"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 303,
        columnNumber: 29
      }
    }, "\u70ED\u95E8"), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 313,
        columnNumber: 29
      }
    }, " / "), __jsx("a", {
      className: "short-comment-tabs ",
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 29
      }
    }, "\u6700\u65B0"), __jsx("span", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 29
      }
    }, " / "), __jsx("a", {
      className: "j a_show_login ",
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 29
      }
    }, "\u597D\u53CB"))), __jsx("div", {
      id: "comment-list-wrapper",
      className: "indent",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 330,
        columnNumber: 25
      }
    }, __jsx("div", {
      id: "new_score",
      className: "comment-list new_score show",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 27
      }
    }, __jsx("ul", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 335,
        columnNumber: 29
      }
    }, __jsx("li", {
      className: "comment-item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: "comment",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 35
      }
    }, __jsx("span", {
      className: "comment-info",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 339,
        columnNumber: 37
      }
    }, __jsx("a", {
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 340,
        columnNumber: 39
      }
    }, item.pinglunauthor1), __jsx("span", {
      className: "user-stars allstar50 rating",
      title: "\u529B\u8350",
      style: {
        marginLeft: "5px",
        marginRight: "5px",
        lineHeight: "14px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 39
      }
    }, __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 363,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 368,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 373,
        columnNumber: 41
      }
    })), __jsx("span", {
      className: "comment-time",
      style: {
        color: "#aaa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 379,
        columnNumber: 39
      }
    }, item.pingluntime1))), __jsx("p", {
      className: "comment-content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 387,
        columnNumber: 35
      }
    }, __jsx("span", {
      className: "short",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 388,
        columnNumber: 37
      }
    }, item.pinglun1)))), __jsx("li", {
      className: "comment-item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 394,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: "comment",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 395,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 396,
        columnNumber: 35
      }
    }, __jsx("span", {
      className: "comment-info",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 37
      }
    }, __jsx("a", {
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 39
      }
    }, item.pinglunauthor2), __jsx("span", {
      className: "user-stars allstar50 rating",
      title: "\u529B\u8350",
      style: {
        marginLeft: "5px",
        marginRight: "5px",
        lineHeight: "14px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 39
      }
    }, __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 426,
        columnNumber: 41
      }
    })), __jsx("span", {
      className: "comment-time",
      style: {
        color: "#aaa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 39
      }
    }, item.pingluntime2))), __jsx("p", {
      className: "comment-content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 440,
        columnNumber: 35
      }
    }, __jsx("span", {
      className: "short",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 441,
        columnNumber: 37
      }
    }, item.pinglun2)))), __jsx("li", {
      className: "comment-item",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 31
      }
    }, __jsx("div", {
      className: "comment",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 33
      }
    }, __jsx("h3", {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 35
      }
    }, __jsx("span", {
      className: "comment-info",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 37
      }
    }, __jsx("a", {
      style: {
        color: "#3377aa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 39
      }
    }, item.pinglunauthor3), __jsx("span", {
      className: "user-stars allstar50 rating",
      title: "\u529B\u8350",
      style: {
        marginLeft: "5px",
        marginRight: "5px",
        lineHeight: "14px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 455,
        columnNumber: 39
      }
    }, __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 464,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star1.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 474,
        columnNumber: 41
      }
    }), __jsx("img", {
      src: "../../static/images/image/star.png",
      width: "15",
      height: "15",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 41
      }
    })), __jsx("span", {
      className: "comment-time",
      style: {
        color: "#aaa"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 485,
        columnNumber: 39
      }
    }, item.pingluntime3))), __jsx("p", {
      className: "comment-content",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 35
      }
    }, __jsx("span", {
      className: "short",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 37
      }
    }, item.pinglun3))))), __jsx("p", {
      className: "pl",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 501,
        columnNumber: 29
      }
    }, ">", __jsx("a", {
      href: "reviews",
      style: {
        fontSize: "13px"
      },
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 31
      }
    }, " ", "\u66F4\u591A\u4E66\u8BC4 2547\u7BC7")))))), __jsx(_components_aside__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 21
      }
    })))));
  }), __jsx(_components_footerbook__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 528,
      columnNumber: 9
    }
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

/***/ "./static/css/font-awesome.css":
/*!*************************************!*\
  !*** ./static/css/font-awesome.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvYXNpZGUudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvZm9vdGVyYm9vay50c3giLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY29tcG9uZW50cy90b3Bib3huYXYudHN4Iiwid2VicGFjazovLy8uL3BhZ2VzL25ld2Jvb2svLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3R5bGVkLWpzeC9zdHlsZVwiIl0sIm5hbWVzIjpbIkxheW91dCIsImNoaWxkcmVuIiwidGl0bGUiLCJJbmRleFBhZ2UiLCJwcm9wcyIsIndpZHRoIiwiaGVpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJib3JkZXIiLCJzaG93IiwibWFwIiwiaXRlbSIsImJvb2tOYW1lIiwiaW1nUGF0aCIsImF1dGhvciIsInB1Ymxpc2hIb3VzZSIsInB1YmxpY2F0aW9uWWVhciIsImJvb2tQcmljZSIsImZsb2F0IiwibGluZUhlaWdodCIsImdyYWRlIiwiY29udGVudFZhbGlkaXR5IiwiYXV0aG9yQ29udGVudCIsInl1YW53ZW4iLCJ6aGFpbHUiLCJ0dWlqaWFuMSIsInJlbjEiLCJ0dWlqaWFuMiIsInJlbjIiLCJ0dWlqaWFuMyIsInJlbjMiLCJ0dWlqaWFuNCIsInJlbjQiLCJ0dWlqaWFuNSIsInJlbjUiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJwaW5nbHVuYXV0aG9yMSIsIm1hcmdpbkxlZnQiLCJtYXJnaW5SaWdodCIsInBpbmdsdW50aW1lMSIsInBpbmdsdW4xIiwicGluZ2x1bmF1dGhvcjIiLCJwaW5nbHVudGltZTIiLCJwaW5nbHVuMiIsInBpbmdsdW5hdXRob3IzIiwicGluZ2x1bnRpbWUzIiwicGluZ2x1bjMiLCJnZXRJbml0aWFsUHJvcHMiLCJjb250ZXh0IiwiaWQiLCJxdWVyeSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJ3aXRoUm91dGVyIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBOztBQU9BLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsT0FBSyxHQUFHO0FBQXBCLENBQUQsS0FDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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TUFBRSxFQUFDLFlBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrREFERixxREFERixFQU1FO0FBQUksYUFBUyxFQUFDLGVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksU0FBSyxFQUFFO0FBQUVFLFlBQU0sRUFBRTtBQUFWLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyREFERixDQURGLEVBS0U7QUFBSSxTQUFLLEVBQUU7QUFBRUEsWUFBTSxFQUFFO0FBQVYsS0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDREQURGLENBTEYsRUFTRTtBQUFJLFNBQUssRUFBRTtBQUFFQSxZQUFNLEVBQUU7QUFBVixLQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0NBREYsQ0FURixFQWFFO0FBQUksU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0Q0FERixDQWJGLEVBaUJFO0FBQUksU0FBSyxFQUFFO0FBQUVBLFlBQU0sRUFBRTtBQUFWLEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FB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LEVBSUU7QUFBSSxhQUFTLEVBQUMsSUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQUpGLEVBT0U7QUFBSSxhQUFTLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENBUEYsRUFVRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FWRixFQWFFO0FBQUksYUFBUyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQWJGLEVBZ0JFO0FBQUksYUFBUyxFQUFDLEVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUcsVUFBTSxFQUFDLFFBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFERixDQWhCRixFQW1CRTtBQUFJLGFBQVMsRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFHLFVBQU0sRUFBQyxRQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBREYsQ0FuQkYsRUFzQkU7QUFBSSxhQUFTLEVBQUMsRUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBRyxVQUFNLEVBQUMsUUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURGLENB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bEQ7QUFDQSxRQUFNO0FBQUVDO0FBQUYsTUFBU0QsT0FBTyxDQUFDRSxLQUF2QjtBQUNBLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyxLQUFLLENBQUUsK0JBQThCSCxFQUFHLEVBQW5DLENBQXZCO0FBQ0EsUUFBTUksSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQixDQUprRCxDQUtsRDtBQUNBOztBQUNBLFNBQU87QUFBRTlDLFFBQUksRUFBRTZDO0FBQVIsR0FBUDtBQUNELENBUkQ7O0FBVWVFLDZIQUFVLENBQUN0RCxTQUFELENBQXpCLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvaEJBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL25ld2Jvb2svW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbmV3Ym9vay9baWRdLnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH06IFByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICAgIDxhPlVzZXJzIExpc3Q8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8IDxhIGhyZWY9XCIvYXBpL3VzZXJzXCI+VXNlcnMgQVBJPC9hPiAqL31cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Zm9vdGVyPlxuICAgICAgey8qIDxociAvPiAqL31cbiAgICAgIHsvKiA8c3Bhbj5JJ20gaGVyZSB0byBzdGF5IChGb290ZXIpPC9zcGFuPiAqL31cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge1xuICAgICAgICBgXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbi8vIGltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xyXG5pbXBvcnQgeyB3YXRjaCB9IGZyb20gXCJmc1wiO1xyXG5pbXBvcnQgXCIuL2FzaWRlLmNzc1wiO1xyXG4vLyBpbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcclxuLy8gaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuLy8gaW1wb3J0IEZyb21kZW1vIGZyb20gXCIuL2NvbXBvbmVudHMvZnJvbVwiXHJcbi8vIOWjsOaYjueahOWFqOWxgOaVsOaNrlxyXG5cclxubGV0IEluZGV4UGFnZTogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZVwiPlxyXG4gICAgICA8ZGl2IGlkPVwiZGFsZV9ib29rX3N1YmplY3RfdG9wX3JpZ2h0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhc2lkZWJveFwiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImRhbGVfYm9va19zdWJqZWN0X3RvcF9yaWdodF9mcmFtZVwiPlxyXG4gICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy/mtYvor5V0ZXN0LmpwZ1wiXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjcxXCIsIGhlaWdodDogXCIyMjZcIiB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImd1Z2VcIj7nlLHosLfmrYzmj5DkvpvnmoTlub/lkYo8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGlkPVwiYnV5aW5mb1wiIGNsYXNzTmFtZT1cImdyYXlfYWQgYnV5aW5mb1wiPlxyXG4gICAgICAgICAgPGRpdiBpZD1cImJ1eWluZm8tcHJpbnRlZFwiIGNsYXNzTmFtZT1cImJ1eWluZm8tcHJpbnRlZFwiPlxyXG4gICAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+5b2T5YmN54mI5pys5pyJ5ZSuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCt1xyXG4gICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnMgY3VycmVudC12ZXJzaW9uLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgcHJpY2UtYnRuLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZW5kb3ItbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Lqs5Lic5ZWG5Z+OPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBpbXByZXNzaW9uX3RyYWNrX21vZF9idXlpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIHByaWNlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV5bGluay1wcmljZVwiPjI3Ni4wMOWFgzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidXktYm9vay1idG4gcGFwZXItYm9vay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VCOTEwOFwiIH19Pui0reS5sOe6uOi0qOS5pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8aDIgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjE1cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8c3Bhbj7njrDotKfkuozmiYvkuaY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgJm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicyBjdXJyZW50LXZlcnNpb24tbGlzdFwiPlxyXG4gICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBwcmljZS1idG4td3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInZlbmRvci1uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lpJrmipPpsbw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIGltcHJlc3Npb25fdHJhY2tfbW9kX2J1eWluZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjZWxsIHByaWNlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV5bGluay1wcmljZVwiPjI3Ni4wMOWFgzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwiYnV5LWJvb2stYnRuIHBhcGVyLWJvb2stYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJ1eWxpbmstcHJpY2VcIj7ljrvpgJvpgJsgJmd0Ozwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnMgY3VycmVudC12ZXJzaW9uLWxpc3RcIj5cclxuICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGwgcHJpY2UtYnRuLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ2ZW5kb3ItbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5a2U572RPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2VsbCBpbXByZXNzaW9uX3RyYWNrX21vZF9idXlpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjZWxsIHByaWNlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYnV5bGluay1wcmljZVwiPjI3Ni4wMOWFgzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNlbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJidXktYm9vay1idG4gcGFwZXItYm9vay1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwiI0VCOTEwOFwiIH19PuebtOaOpei0reS5sDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkZDJjYXJ0Q29udGFpbmVyIG5vLWJvcmRlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhZGQyY2FydFdpZGdldCBsbFwiPlxyXG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImogIGFkZDJjYXJ0IGFfc2hvd19sb2dpblwiIHJlbD1cIm5vZm9sbG93XCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4rIOWKoOWFpei0reS5puWNlTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheV9hZCB2ZXJzaW9uX3dvcmtzXCI+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIDxzcGFuPui/meacrOS5pueahOWFtuS7lueJiOacrDwvc3Bhbj5cclxuICAgICAgICAgICAgJm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3ICgg5YWo6YOoIClcclxuICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtYjggcGxcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGFcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jvb2suZG91YmFuLmNvbS9zdWJqZWN0LzM0OTI3NzA3L1wiPlxyXG4gICAgICAgICAgICAgICAgICBCbG9vbXNidXJ5IFB1Ymxpc2hpbmcg77yIMjAxOe+8iVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3VudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj7mmoLml6Dor4TliIY8L3NwYW4+IDPkurror7vov4dcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICB7LyogLS0tICovfVxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWI4IHBsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ib29rLmRvdWJhbi5jb20vc3ViamVjdC8zNDkyNzcwNy9cIj5cclxuICAgICAgICAgICAgICAgICAg55qH5Yag5Ye654mI56S+IO+8iDE5NzbvvIlcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+OS4w5YiGPC9zcGFuPiAyNjExMjDkurror7vov4dcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICB7LyogLS0tLSAqL31cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1iOCBwbFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWV0YVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL3N1YmplY3QvMzQ5Mjc3MDcvXCI+XHJcbiAgICAgICAgICAgICAgICAgIOWMl+S6rOWNgeaciOaWh+iJuuWHuueJiOekviDvvIgyMDEx77yJXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPjkuM+WIhjwvc3Bhbj4gNjc5MTHkurror7vov4dcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICB7LyogLS0tLS0tICovfVxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWI4IHBsXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ib29rLmRvdWJhbi5jb20vc3ViamVjdC8zNDkyNzcwNy9cIj5cclxuICAgICAgICAgICAgICAgICAg5YyX5Lqs5Y2B5pyI5paH6Im65Ye654mI56S+IO+8iDIwMDnvvIlcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY291bnRcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+OS4z5YiGPC9zcGFuPiAxOTQzOOS6uuivu+i/h1xyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF5X2FkXCIgaWQ9XCJib3Jyb3dpbmZvXCI+XHJcbiAgICAgICAgICA8aDI+XHJcbiAgICAgICAgICAgIDxzcGFuPuWcqOWTquWEv+WAn+i/meacrOS5pjwvc3Bhbj5cclxuICAgICAgICAgICAgJm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICA8L2gyPlxyXG5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJicyBtb3JlLWFmdGVyXCI+XHJcbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyBib3JkZXI6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPuWMl+S6rOW4guWFrOWFseWbvuS5pummhig1KTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgIDxsaSBzdHlsZT17eyBib3JkZXI6IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPuS4iua1t+W4guS4reW/g+WbvuS5pummhigyMyk8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgYm9yZGVyOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7lub/lt57lhbbku5bppobol48oMSk8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgYm9yZGVyOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7lkInmnpfnnIHlm77kuabppoY8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgYm9yZGVyOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7msZ/pmLTluILlm77kuabppoY8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICA8bGkgc3R5bGU9e3sgYm9yZGVyOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7ph43luoblm77kuabppoY8L2E+XHJcbiAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG4vL2dldEluaXRpYWxQcm9wcyDmlrnms5Xml6Llj6/ku6XlnKjmnI3liqHlmajov5DooYzvvIzlj4jlj6/ku6XlnKjlrqLmiLfnq6/ov5DooYwo57uE5Lu25Yib5bu65LmL5YmN5omn6KGM55qEKVxyXG4vL+W9k+WIt+aWsOmhtemdoijliJ3mrKHovb3lhaXpobXpnaIp77yM6K+l5pa55rOV5Lya5Zyo5pyN5Yqh5Zmo5omn6KGMXHJcbi8v5b2T6YCa6L+HPExpbms+6Lez6L2s6Lev55Sx55qE5pe25YCZ77yM6K+l5pa55rOV5Lya5Zyo5a6i5oi356uv5omn6KGMXHJcbi8vIEluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXJzXCIpO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuLy8gICByZXR1cm4geyBzaG93OiBkYXRhIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiIsIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIkAvc3RhdGljL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCI7XHJcbmltcG9ydCB7IHdhdGNoIH0gZnJvbSBcImZzXCI7XHJcbi8vIGltcG9ydCBcIi4vY3NzL2luZGV4LmNzc1wiO1xyXG4vLyBpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG4vLyBpbXBvcnQgRnJvbWRlbW8gZnJvbSBcIi4vY29tcG9uZW50cy9mcm9tXCJcclxuLy8g5aOw5piO55qE5YWo5bGA5pWw5o2uXHJcblxyXG5sZXQgSW5kZXhQYWdlOiBSZWFjdC5GQz0gKHByb3BzKSA9PiB7IFxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZvb3Rlci1ib3hcIj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXAgY2xlYXJmaXhcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHQtaW5mby1ib3hcIj5cclxuICAgICAgICDCqSAyMDAyLTIwMjEgS29uZ2Z6LmNvbSDlrZTlrZDml6fkuabnvZEg54mI5p2D5omA5pyJXHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmstYm94XCI+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9hYm91dHVzLnBocFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAg5YWz5LqO5a2U572RXHJcbiAgICAgICAgPC9hPlxyXG4gICAgICAgIDxhXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcclxuICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL2hlbHAvbGlhbnhpLmh0bWxcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOiBlOezu+aIkeS7rFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHA6Ly9oZWxwLmtvbmdmei5jb20vXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDluK7liqnkuK3lv4NcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9jb3B5cmlnaHQucGhwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDniYjmnYPpmpDnp4FcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9ndWFuZ2dhby5waHBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOW5v+WRiuS4muWKoVxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9oZWxwL3poYW9waW4ucGhwXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDlt6XkvZzmnLrkvJpcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwczovL20ua29uZ2Z6LmNvbS9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOenu+WKqOeJiFxyXG4gICAgICAgIDwvYT5cclxuICAgICAgICA8YVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICDlm77kuabnm67lvZVcclxuICAgICAgICA8L2E+XHJcbiAgICAgICAgPGFcclxuICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgIGhyZWY9XCJodHRwOi8vYnEua29uZ2Z6LmNvbS9cIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIOWbvuS5puagh+etvlxyXG4gICAgICAgIDwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IGNsYXNzIENoaWxkIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50e1xyXG4gICBcclxuLy8gICByZW5kZXIoKXtcclxuLy8gICAgIHJldHVybiAgPGRpdj57dGhpcy5wcm9wcy5wYXJhbXMubXNnfTwvZGl2PlxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy9nZXRJbml0aWFsUHJvcHMg5pa55rOV5pei5Y+v5Lul5Zyo5pyN5Yqh5Zmo6L+Q6KGM77yM5Y+I5Y+v5Lul5Zyo5a6i5oi356uv6L+Q6KGMKOe7hOS7tuWIm+W7uuS5i+WJjeaJp+ihjOeahClcclxuLy/lvZPliLfmlrDpobXpnaIo5Yid5qyh6L295YWl6aG16Z2iKe+8jOivpeaWueazleS8muWcqOacjeWKoeWZqOaJp+ihjFxyXG4vL+W9k+mAmui/hzxMaW5rPui3s+i9rOi3r+eUseeahOaXtuWAme+8jOivpeaWueazleS8muWcqOWuouaIt+err+aJp+ihjFxyXG4vLyBJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS91c2Vyc1wiKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAvL+i/mei+uei/lOWbnueahOaVsOaNruS8muiiq+aMgui9veWIsOe7hOS7tueahHByb3Bz5LitXHJcbi8vICAgcmV0dXJuIHsgc2hvdzogZGF0YSB9O1xyXG4vLyB9O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXhQYWdlO1xyXG4iLCIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbi8vIGltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xyXG5pbXBvcnQgeyB3YXRjaCB9IGZyb20gXCJmc1wiO1xyXG4vLyBpbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcclxuLy8gaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuLy8gaW1wb3J0IEZyb21kZW1vIGZyb20gXCIuL2NvbXBvbmVudHMvZnJvbVwiXHJcbi8vIOWjsOaYjueahOWFqOWxgOaVsOaNrlxyXG5cclxubGV0IEluZGV4UGFnZTogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImRiLWdsb2JhbC1uYXZcIiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtaW5mb1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxvZ2luXCIgcmVsPVwibm9mb2xsb3dcIj5cclxuICAgICAgICAgICAg55m75b2VL+azqOWGjFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtZG91YmFuYXBwXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsbmstZG91YmFuYXBwXCI+5LiL6L29572R56uZ5a6i5oi356uvPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbC1uYXYtaXRlbXNcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPuWtlOe9kTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm9uXCI+XHJcbiAgICAgICAgICAgICAgPGE+6K+75LmmPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5Y+k57GNPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5aKo6L+5PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+54+N5pysPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5bCP6K+0PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5pWj5paHPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+6ZqP56yUPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5paH5a2mPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5a6X5pWZPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4vLyAgIHJlbmRlcigpe1xyXG4vLyAgICAgcmV0dXJuICA8ZGl2Pnt0aGlzLnByb3BzLnBhcmFtcy5tc2d9PC9kaXY+XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vL2dldEluaXRpYWxQcm9wcyDmlrnms5Xml6Llj6/ku6XlnKjmnI3liqHlmajov5DooYzvvIzlj4jlj6/ku6XlnKjlrqLmiLfnq6/ov5DooYwo57uE5Lu25Yib5bu65LmL5YmN5omn6KGM55qEKVxyXG4vL+W9k+WIt+aWsOmhtemdoijliJ3mrKHovb3lhaXpobXpnaIp77yM6K+l5pa55rOV5Lya5Zyo5pyN5Yqh5Zmo5omn6KGMXHJcbi8v5b2T6YCa6L+HPExpbms+6Lez6L2s6Lev55Sx55qE5pe25YCZ77yM6K+l5pa55rOV5Lya5Zyo5a6i5oi356uv5omn6KGMXHJcbi8vIEluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXJzXCIpO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuLy8gICByZXR1cm4geyBzaG93OiBkYXRhIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiIsImltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbmltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuLy8gaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBcIi4uL2Nzcy9uZXdib29rZGV0YWlsLmNzc1wiO1xyXG5pbXBvcnQgY3Nzb2JqIGZyb20gXCIuLi9jc3MvbmV3Ym9va2RldGFpbDIubGVzc1wiO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlcmJvb2tcIjtcclxuaW1wb3J0IEFzaWRlIGZyb20gXCIuLi9jb21wb25lbnRzL2FzaWRlXCI7XHJcbmltcG9ydCBUb3Bib3huYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvdG9wYm94bmF2XCJcclxuLy8gbGV0IGJvb2tpZHRlc3QgPSAwO1xyXG5jb25zdCBJbmRleFBhZ2UgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwi6K+m5oOF6aG1XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS1uZXdib29rYm94XCI+XHJcbiAgICAgICAgey8qLS0tLS0tLS0tLeWktOmDqOWvvOiIquagj+W8gOWniy0tLS0tLS0tLS0tLS0tLS0tLS0tKi99XHJcbiAgICAgICAgIDxUb3Bib3huYXY+PC9Ub3Bib3huYXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS3lpLTpg6jlr7zoiKrmoI/nu5PmnZ8tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgICB7LyotLS0tLS3kuabmnKzor6bmg4XmoYblvIDlp4stLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tkZXRhaWwtZXJzaG91XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tkZXRhaWxib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXRhaWxib29rXCI+5Lmm5pys6K+m5oOFPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyotLS0tLS3kuabmnKzor6bmg4XmoYbnu5PmnZ8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgICovfVxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLeS4u+S9k+mDqOWIhi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIHtwcm9wcy5zaG93Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRldGFpbGJveC1qaXV3YW5nXCIga2V5PXtpdGVtLmJvb2tOYW1lfT5cclxuICAgICAgICAgICAgICA8ZGl2IGlkPVwid3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGgxPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj57aXRlbS5ib29rTmFtZX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvaDE+XHJcbiAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0qL31cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC0xNi04IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImluZGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YmplY3R3cmFwIGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJqZWN0IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwibWFpbnBpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AuLi9zdGF0aWMvaW1hZ2VzL2ltYWdlLyR7aXRlbS5pbWdQYXRofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYWlucGljaW1nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsXCI+5L2c6ICFOjwvc3Bhbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL2F1dGhvci80NTMwNzM5L1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmF1dGhvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGxcIj7lh7rniYjnpL46PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wdWJsaXNoSG91c2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbFwiPuWHuuWTgeaWuTo8L3NwYW4+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jvb2suZG91YmFuLmNvbS9zZXJpZXMvNDE5OTY/YnJhbmQ9MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWNjuaWh+WkqeS4i1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbFwiPuWHuueJiOW5tDo8L3NwYW4+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wdWJsaWNhdGlvblllYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbFwiPumhteaVsDo8L3NwYW4+IDIxNzxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwbFwiPuWumuS7tzo8L3NwYW4+IHtpdGVtLmJvb2tQcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YWDPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsXCI+6KOF5binOjwvc3Bhbj4g5bmz6KOFPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsXCI+5Lib5LmmOjwvc3Bhbj4mbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL3Nlcmllcy83NDRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDljY7mloflpKnkuIsyMDAz54mIXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInBsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSVNCTjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPiA5Nzg3ODA2Mzk4NzkxIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImludGVyZXN0X3NlY3RsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJhdGluZ193cmFwIGNsZWFyYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmF0aW5nX2xvZ29cIj7kuabnsY3or4TliIY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyYXRpbmdfc2VsZiBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vdmVsZ3JhZGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZmxvYXQ6IFwibGVmdFwiLCBsaW5lSGVpZ2h0OiBcIjMwcHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmdyYWRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3RhcjEucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIyMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvaW1hZ2Uvc3Rhci5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJpbnRlcmVzdF9zZWN0X2xldmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaiBhX3Nob3dfbG9naW4gY29sYnV0dCBsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWluaXN1Ym1pdCBqXCI+5paw5LmmPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImogYV9zaG93X2xvZ2luIGNvbGJ1dHQgbGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1pbmlzdWJtaXQgalwiPuaDs+ivuzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJqIGFfc2hvd19sb2dpbiBjb2xidXR0IGxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtaW5pc3VibWl0IGpcIj7mjqjojZA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJndGxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwidWxfc3ViamVjdF9tZW51IGJpY2VsaW5rIGNvbG9yX2dyYXkgcHQ2IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiaHR0cHM6Ly9pbWczLmRvdWJhbmlvLmNvbS9mL3NoaXJlLzViYmYwMmI3YjVlYzEyYjIzZTIxNGE1ODBiNmY5ZTQ4MTEwODQ4OGMvcGljcy9hZGQtcmV2aWV3LmdpZlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImogYV9zaG93X2xvZ2luXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9ib29rLmRvdWJhbi5jb20vYW5ub3RhdGlvbi93cml0ZT9zaWQ9MTA2MDA2OFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YaZ56yU6K6wXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz1cImh0dHBzOi8vaW1nMy5kb3ViYW5pby5jb20vZi9zaGlyZS81YmJmMDJiN2I1ZWMxMmIyM2UyMTRhNTgwYjZmOWU0ODExMDg0ODhjL3BpY3MvYWRkLXJldmlldy5naWZcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJqIGFfc2hvd19sb2dpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL3N1YmplY3QvMTA2MDA2OC9uZXdfcmV2aWV3XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlhpnkuabor4RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInJyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJodHRwczovL2ltZzMuZG91YmFuaW8uY29tL3BpY3MvYWRkLWNhcnQuZ2lmXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaiBhX3Nob3dfbG9naW4gc2hvcHBpbmduZXdib29rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5kb3ViYW4uY29tL2FjY291bnRzL3Bhc3Nwb3J0L2xvZ2luP3NvdXJjZT1ib29rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDliqDlhaXotK3kuabljZVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJyZWNcIiBpZD1cIkMtMTA2MDA2OFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIjXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLXVybD1cImh0dHBzOi8vYm9vay5kb3ViYW4uY29tL3N1YmplY3QvMTA2MDA2OC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtZGVzYz1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS10aXRsZT1cIuS5puexjeOAiuaSkuWTiOaLieeahOaVheS6i+OAiyAo5p2l6Ieq6LGG55OjKSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtcGljPVwiaHR0cHM6Ly9pbWczLmRvdWJhbmlvLmNvbS92aWV3L3N1YmplY3QvbC9wdWJsaWMvczEwNjY1NzAuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibi1zaGFyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWIhuS6q+WIsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLeWGheWuueeugOS7i+mDqOWIhi0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0ZWRfaW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIzMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWGheWuueeugOS7izwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImxpbmstcmVwb3J0XCIgY2xhc3NOYW1lPVwiaW5kZW50MlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImludHJvXCIgc3R5bGU9e3sgY29sb3I6IFwiIzExMVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5jb250ZW50VmFsaWRpdHl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0t5L2c6ICF566A5LuLLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIzM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuS9nOiAheeugOS7izwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrdcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnRyb1wiIHN0eWxlPXt7IGNvbG9yOiBcIiMxMTFcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5hdXRob3JDb250ZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS3ljp/mlofmkZjlvZUtLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJoMjMzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5Y6f5paH5pGY5b2VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyjlhajpg6gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImludHJvXCIgc3R5bGU9e3tjb2xvcjogXCIjMTExXCJ9fT48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJibG9ja3F1b3RlLWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInR1Ymlhby1uZXdib29rXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnl1YW53ZW59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiBcIiMzMzc3YWFcIiB9fT4gKCDmn6XnnIvljp/mlocgKTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpZ3VyZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0dWJpYW8tbmV3Ym9va1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS56aGFpbHV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IGNvbG9yOiBcIiMzMzc3YWFcIiB9fT4gKCDmn6XnnIvljp/mlocgKTwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlndXJlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLeWWnOasouaOqOiNkCAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImgyMzNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7llpzmrKLor7vjgIp7aXRlbS5ib29rTmFtZX3jgIvnmoTkurrkuZ/llpzmrKI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2FoYWxhby1jb250ZW50IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cImRsMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS50dWlqaWFuMX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e2l0ZW0ucmVuMX08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDEgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cImRsMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS50dWlqaWFuMn0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e2l0ZW0ucmVuMn08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cImRsMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS50dWlqaWFuM30+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e2l0ZW0ucmVuM308L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDMgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cImRsMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS50dWlqaWFuNH0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e2l0ZW0ucmVuNH08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRsIGNsYXNzTmFtZT1cImRsdGVzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGR0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS50dWlqaWFuNX0+PC9pbWc+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGQ+e2l0ZW0ucmVuNX08L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7Lyog6K+E6K665byA5aeLICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiaDIzM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuefreivhDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrcmbmJzcDvCtyZuYnNwO8K3Jm5ic3A7wrco5YWo6YOoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi10YWItbmV3XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzLXdyYXBwZXIgIGxpbmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNob3J0LWNvbW1lbnQtdGFicyBvbi10YWJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMxMTFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFdlaWdodDogXCJib2xkZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg54Ot6ZeoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj4gLyA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaG9ydC1jb21tZW50LXRhYnMgXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMzNzdhYVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOacgOaWsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+IC8gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaiBhX3Nob3dfbG9naW4gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzMzNzdhYVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWlveWPi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeivhOiuuuS4u+S9k+W8gOWni+S6hiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImNvbW1lbnQtbGlzdC13cmFwcGVyXCIgY2xhc3NOYW1lPVwiaW5kZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdfc2NvcmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29tbWVudC1saXN0IG5ld19zY29yZSBzaG93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb21tZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzMzNzdhYVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucGluZ2x1bmF1dGhvcjF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1zdGFycyBhbGxzdGFyNTAgcmF0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi5Yqb6I2QXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjE0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21tZW50LXRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2FhYVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucGluZ2x1bnRpbWUxfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG9ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnBpbmdsdW4xfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb21tZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzMzNzdhYVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucGluZ2x1bmF1dGhvcjJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1zdGFycyBhbGxzdGFyNTAgcmF0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi5Yqb6I2QXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjE0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21tZW50LXRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2FhYVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucGluZ2x1bnRpbWUyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG9ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnBpbmdsdW4yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJjb21tZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiY29tbWVudC1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzMzNzdhYVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucGluZ2x1bmF1dGhvcjN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidXNlci1zdGFycyBhbGxzdGFyNTAgcmF0aW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwi5Yqb6I2QXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkxlZnQ6IFwiNXB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcIjVweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiBcIjE0cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIxLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2ltYWdlL3N0YXIucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxNVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb21tZW50LXRpbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiI2FhYVwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucGluZ2x1bnRpbWUzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImNvbW1lbnQtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzaG9ydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnBpbmdsdW4zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJmd0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwicmV2aWV3c1wiIHN0eWxlPXt7IGZvbnRTaXplOiBcIjEzcHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5pu05aSa5Lmm6K+EIDI1NDfnr4dcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWPs+WNiumDqOWIhuS4i+S4gOS4qmRpdiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS3kuIvpnaLkuIDkuKrmmK9hcnRpY2xl55qEZGl2LS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxBc2lkZT48L0FzaWRlPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZXh0cmFcIj48L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9KX1cclxuXHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0t5Li75L2T6YOo5YiG57uT5p2fLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPEZvb3Rlcj48L0Zvb3Rlcj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0xheW91dD5cclxuICApO1xyXG59O1xyXG5cclxuSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jIChjb250ZXh0OiBhbnkpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhjb250ZXh0LnF1ZXJ5KVxyXG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9lc3NheS8ke2lkfWApO1xyXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICByZXR1cm4geyBzaG93OiBkYXRhIH07XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4UGFnZSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=