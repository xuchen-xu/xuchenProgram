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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home/index.tsx");
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

/***/ "./node_modules/antd/lib/carousel/style/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/carousel/style/css.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/carousel/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/carousel/style/index.css":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/carousel/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/style/index.css":
/*!***********************************************!*\
  !*** ./node_modules/antd/lib/style/index.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/essay.css":
/*!*****************************!*\
  !*** ./pages/css/essay.css ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/essay.less":
/*!******************************!*\
  !*** ./pages/css/essay.less ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"eheader": "_1yCTdn_g0NimL90rcQtS5w",
	"ehcenter": "_1wg0rHfOG50r0htwGvTLm8",
	"sloganBox": "_226c0JVciGkqtEuTSaHN0k",
	"text": "MQnWgjtI_LIPTHVuXI0Vq",
	"userinfoBox": "_2xouZ5AKBQv9LgeO4Zsm0C",
	"itemInfo": "tNGp9EMM0lY4zeEgFGPAP",
	"infoNormal": "_1JzoHkCXCuRcAWeNyjJLTT",
	"infoText": "_3Uj93PPjP96A0NFi9UZid5",
	"infoLink": "_25UjWzWPkNbP913VtstP4n",
	"infoNormal2": "_2t3VFKsCoB_7ljt8ldM8cm",
	"infoNormal3": "_5QlbbEGR3WgX9ZODRsSC",
	"lineTest": "_3CF-ngTWJ0AOw4NPDUh9YT",
	"tubiao": "_3dosj55Ec0j_qh0tycXGs6",
	"headersearchBox": "_3yre28Sj55M3TctKKsvkOQ",
	"headerSearch": "_3-01L0pS1elx5oiioRnMAa",
	"logoText": "_1-T6ZZmZ6541hUOPhemK6k",
	"searchBox": "fmLo24KhspIr9xBVV7C1J",
	"searchCon": "eMvvFgYgBwEE8DhO4o7FE",
	"searchType": "_2JtAtlJxhFeImoa-bWrqT4",
	"itemType": "nSRLpOF09pBHhU9zHhjYL",
	"indicator": "_1Z0ZpuYL-14ILTvHuUcUvy",
	"searchinputBox": "_1gHc0v5K1NjbSJtXI4YIyS",
	"searchstatusBox": "_3uGrxDksUwI0B8yomjRUlK",
	"curStatus": "_3s60U8J_kr-SKdudNhV25V",
	"icontabDown": "_23RrVeNk5QQnz-APEYVVp8",
	"inputLabel": "_2MKPY3qd7S7r2xBkXRafLc",
	"searchLabel": "_2aesEfpy7Ui_u_UmHaMy3D",
	"btn": "uYuIoRfnunfEQyDyuskOJ",
	"searchLink": "_1VjG8_rC5iO57cQNZwVWW3",
	"advsearchBtn": "rDp5-XwnVWEzSx3nI3NfU",
	"head": "_2kx1MBw7uoeplv-v85BsbE",
	"nav_box": "_3jjplkW8zvCvmJVMn6yHrI"
};

/***/ }),

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/carousel/style/css */ "./node_modules/antd/lib/carousel/style/css.js");
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_essay_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/essay.css */ "./pages/css/essay.css");
/* harmony import */ var _css_essay_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_essay_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _css_essay_less__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../css/essay.less */ "./pages/css/essay.less");
/* harmony import */ var _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_css_essay_less__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\home\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;
// import Link from 'next/link'
 // import { withRouter } from "next/router";






var imgnumber = 0;
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_3___default.a.Component {
  static async getInitialProps() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("http://localhost:3001/home");
    const data = await res.json(); // console.log(data);
    //这边返回的数据会被挂载到组件的props中

    return {
      show: data
    };
  }

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
  }

  render() {
    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      title: "\u9996\u9875",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 7
      }
    }, __jsx("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.eheader,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.ehcenter,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.sloganBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }
    }, "\u7F51\u7F57\u5929\u4E0B\u56FE\u4E66"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 17
      }
    }, "\u4F20\u627F\u4E2D\u534E\u6587\u5316")), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.userinfoBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 17
      }
    }, __jsx("span", {
      id: "nickName",
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoNormal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 21
      }
    }, "\u767B\u5F55"), __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 21
      }
    }, "/"), __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }
    }, "\u6CE8\u518C"))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }, "\u6D88\u606F"))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 21
      }
    }, "\u8D2D\u7269\u8F66"))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 66,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 21
      }
    }, "\u6211\u7684\u8BA2\u5355"))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 21
      }
    }, "\u4E2A\u4EBA\u4E2D\u5FC3"))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 21
      }
    }, "\u5356\u5BB6\u4E2D\u5FC3"))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 21
      }
    }, "\u5BA2\u670D"))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoNormal2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 23
      }
    }, "\u624B\u673A\u7248"))), __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.lineTest,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 19
      }
    }, "|")), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoNormal3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 19
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101,
        columnNumber: 21
      }
    }, __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 23
      }
    }, "\u9001\u81F3 \u5317\u4EAC"))))))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.headersearchBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.headerSearch,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.logoText,
      style: {
        fontFamily: "华文楷体",
        fontWeight: "bolder"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }, "\u5B54\u5B50\u65E7\u4E66\u7F51"), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, __jsx("form", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchCon,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121,
        columnNumber: 21
      }
    }, "\u5546\u54C1"), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.itemType,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 21
      }
    }, "\u62CD\u5356\u533A"), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.indicator,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123,
        columnNumber: 21
      }
    })), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchinputBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchstatusBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.curStatus,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 23
      }
    }, "\u5728\u552E"), __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.icontabDown,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 23
      }
    }), __jsx("span", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.icontabUp,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 23
      }
    })), __jsx("input", {
      type: "text",
      name: "searchWord",
      value: "",
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.inputLabel,
      readOnly: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 21
      }
    }), __jsx("label", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchLabel,
      htmlFor: "searchInput",
      style: {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 21
      }
    }, "\u5546\u54C1\u540D\u79F0\u3001\u4F5C\u8005\u3001\u51FA\u7248\u793E\u3001ISBN")), __jsx("div", {
      id: "searchBtn",
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.btn,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 19
      }
    }, "\u641C\u7D22")), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.searchLink,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.advsearchBtn,
      rel: "nofollow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 19
      }
    }, "\u9AD8\u7EA7\u641C\u7D22")))))), __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.head,
      style: {
        backgroundColor: "white"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.nav_box,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 11
      }
    }, __jsx("ul", {
      className: ["pullLeft", "leftpart"].join(" "),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 13
      }
    }, __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "PC",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 19
      }
    }, "\u9996\u9875"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 19
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "PC",
      href: "/newbook",
      target: "_blank",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 19
      }
    }, "\u65B0\u4E66\u8D44\u8BAF"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 19
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 184,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "PC",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 185,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 19
      }
    }, "\u5C0F\u8BF4"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 19
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "PC",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 19
      }
    }, "\u6563\u6587"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 19
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 198,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "PC",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 19
      }
    }, "\u968F\u7B14"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 19
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 205,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "PC",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206,
        columnNumber: 17
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 207,
        columnNumber: 19
      }
    }, "\u6587\u5B66"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208,
        columnNumber: 19
      }
    })))))), __jsx("div", {
      className: "bottomColor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "lunbobox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 11
      }
    }, __jsx(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
      autoplay: true,
      className: "lunbo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 218,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "../../static/images/lun5.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 220,
        columnNumber: 17
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 226,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "../../static/images/lun.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 227,
        columnNumber: 17
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "../../static/images/lun2.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 17
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "../../static/images/lun3.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 17
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 15
      }
    }, __jsx("img", {
      src: "../../static/images/lun4.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248,
        columnNumber: 17
      }
    })))), __jsx("div", {
      className: "store-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "bodycenter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "table-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "content-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "m_b50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "booklist_tit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 23
      }
    }, __jsx("h3", {
      className: "pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 25
      }
    }, "\u7279\u8272\u63A8\u8350"), __jsx("div", {
      className: "pull-right more_list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 265,
        columnNumber: 25
      }
    }, __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 27
      }
    }, "\u7EBF\u88C5\u53E4\u7C4D"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 27
      }
    }, "\u56FD\u5B66\u53E4\u7C4D"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 27
      }
    }, "\u6C11\u56FD\u65E7\u4E66"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 27
      }
    }, "\u540D\u4EBA\u58A8\u8FF9"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 27
      }
    }, "\u827A\u672F\u73CD\u672C"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 27
      }
    }, "\u53F2\u5B66\u5178\u7C4D")), __jsx("div", {
      className: "book_list m_t25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "booklist_box booklist_item1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 27
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 289,
        columnNumber: 29
      }
    }, this.props.show.map(item => {
      if (item.id < 11) {
        return __jsx("li", {
          className: "litesthome",
          style: {
            marginRight: "28px"
          },
          key: item.id,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: "pic",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 39
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/117287/2396615125/",
          target: "_blank",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 299,
            columnNumber: 41
          }
        }, __jsx("img", {
          src: item.imgSrc,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 43
          }
        }))), __jsx("div", {
          className: "book_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 306,
            columnNumber: 39
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/244804/2544650564/",
          target: "_blank" // title="曝书亭集"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 307,
            columnNumber: 41
          }
        }, item.itemName)), __jsx("div", {
          className: "shop_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 315,
            columnNumber: 39
          }
        }, __jsx("a", {
          href: "http://shop.kongfz.com/244804/",
          target: "_blank" // title="瑾秀阁"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 316,
            columnNumber: 41
          }
        }, item.producter)), __jsx("div", {
          className: "bookjuti_price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 324,
            columnNumber: 39
          }
        }, __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 325,
            columnNumber: 41
          }
        }, "\uFFE5"), item.price));
      }
    })), __jsx("div", {
      className: "look_more",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://book.kongfz.com/Cxianzhuang/",
      target: "_blank",
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 334,
        columnNumber: 31
      }
    }, "........................\u66F4\u591A")))))), __jsx("div", {
      className: "m_b50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 347,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "booklist_tit_big",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 348,
        columnNumber: 23
      }
    }, __jsx("h3", {
      className: "pull-left m_r10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 349,
        columnNumber: 25
      }
    }, "\u4E0D\u5BB9\u9519\u8FC7"), __jsx("div", {
      className: "pull-left tit_info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "line_xie m_r10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 27
      }
    }, "/"), "\u6587\u53F2\u793E\u79D1\u7C7B\u7CBE\u54C1\u63A8\u8350")), __jsx("div", {
      className: "book_list m_t25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 355,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "booklist_box booklist_item1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 356,
        columnNumber: 25
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 358,
        columnNumber: 27
      }
    }, this.props.show.map(item => {
      if (item.id >= 11 && item.id < 21) {
        return __jsx("li", {
          className: "litesthome",
          style: {
            marginRight: "28px"
          },
          key: item.id,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 35
          }
        }, __jsx("div", {
          className: "pic",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 37
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/117287/2396615125/",
          target: "_blank",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 368,
            columnNumber: 39
          }
        }, __jsx("img", {
          src: item.imgSrc,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 372,
            columnNumber: 41
          }
        }))), __jsx("div", {
          className: "book_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 375,
            columnNumber: 37
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/244804/2544650564/",
          target: "_blank" // title="曝书亭集"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 376,
            columnNumber: 39
          }
        }, item.itemName)), __jsx("div", {
          className: "shop_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 384,
            columnNumber: 37
          }
        }, __jsx("a", {
          href: "http://shop.kongfz.com/244804/",
          target: "_blank" // title="瑾秀阁"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 385,
            columnNumber: 39
          }
        }, item.producter)), __jsx("div", {
          className: "bookjuti_price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 393,
            columnNumber: 37
          }
        }, __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 394,
            columnNumber: 39
          }
        }, "\uFFE5"), item.price));
      }
    })), __jsx("div", {
      className: "look_more",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 402,
        columnNumber: 27
      }
    }, __jsx("a", {
      href: "http://book.kongfz.com/Cxianzhuang/",
      target: "_blank",
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 403,
        columnNumber: 29
      }
    }, "........................\u66F4\u591A"))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "chaozhidijia shop_booklist1 tiaozheng",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 417,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "clearfix booklist_tit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 418,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 27
      }
    }, "\u8D85\u503C\u4F4E\u4EF7"), __jsx("div", {
      className: "pull-right more_list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 420,
        columnNumber: 27
      }
    }, __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 421,
        columnNumber: 29
      }
    }, "10\u5143\u4E13\u533A"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 424,
        columnNumber: 29
      }
    }, "10-30\u5143\u4E13\u533A"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 29
      }
    }, "30-50\u5143\u4E13\u533A")), __jsx("div", {
      className: "book_list m_t25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 432,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "booklist_box booklist_item1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 433,
        columnNumber: 29
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 435,
        columnNumber: 31
      }
    }, this.props.show.map(item => {
      if (item.id >= 21 && item.id < 31) {
        return __jsx("li", {
          className: "litesthome",
          style: {
            marginRight: "28px"
          },
          key: item.id,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 39
          }
        }, __jsx("div", {
          className: "pic",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 41
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/117287/2396615125/",
          target: "_blank",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 445,
            columnNumber: 43
          }
        }, __jsx("img", {
          src: item.imgSrc,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 449,
            columnNumber: 45
          }
        }))), __jsx("div", {
          className: "book_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 452,
            columnNumber: 41
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/244804/2544650564/",
          target: "_blank" // title="曝书亭集"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 453,
            columnNumber: 43
          }
        }, item.itemName)), __jsx("div", {
          className: "bookjuti_pricechao",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 470,
            columnNumber: 41
          }
        }, __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 471,
            columnNumber: 43
          }
        }, "\uFFE5"), item.price));
      }
    }))))))), __jsx("div", {
      className: "no-more-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 21
      }
    }, "\u6CA1 \u6709 \u66F4 \u591A \u4E86")))), __jsx("div", {
      className: "content-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "shopLeftbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "border_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 500,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "allinfo_box gray6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 21
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: "fa m_r15 fa-bank iconfont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 504,
        columnNumber: 25
      }
    }), "18215 \u5BB6\u4E66\u5E97"), __jsx("div", {
      className: "m_t5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: "fa m_r15 fa-life-ring iconfont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 508,
        columnNumber: 25
      }
    }), "210102 \u5BB6\u4E66\u644A"), __jsx("div", {
      className: "m_t5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 511,
        columnNumber: 23
      }
    }, __jsx("span", {
      className: "fa m_r15 fa-book iconfont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 512,
        columnNumber: 25
      }
    }), "91440999 \u79CD\u56FE\u4E66")), __jsx("div", {
      className: "m_t34",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518,
        columnNumber: 21
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 23
      }
    }, "\u9500\u91CF\u6392\u884C\u699C ", __jsx("span", {
      className: "line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 31
      }
    }, "/"), " ", __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 63
      }
    }, "\u66F4\u591A")), __jsx("div", {
      className: "change_title_box clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 522,
        columnNumber: 23
      }
    }, __jsx("a", {
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 25
      }
    }, "\u5468"), __jsx("a", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 25
      }
    }, "\u6708"), __jsx("a", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 25
      }
    }, "\u5E74")), __jsx("div", {
      className: "change_text m_t10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 528,
        columnNumber: 23
      }
    }, __jsx("ul", {
      style: {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 29
      }
    }, "1."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/73122/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 535,
        columnNumber: 31
      }
    }, "\u6D77\u4E1D\u6C49\u5B66\u82B8\u7A97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 544,
        columnNumber: 29
      }
    }, "2."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 547,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/165050/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 548,
        columnNumber: 31
      }
    }, "\u58A8\u7B3A\u697C\u5546\u57CE"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 557,
        columnNumber: 29
      }
    }, "3."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/233701/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 31
      }
    }, "\u5149\u548C\u66F8\u623F"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570,
        columnNumber: 29
      }
    }, "4."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 571,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/193535/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 572,
        columnNumber: 31
      }
    }, "\u61C2\u5FB7\u5584\u672C\u4E66\u9601"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 580,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 29
      }
    }, "5."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 582,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/69378/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 583,
        columnNumber: 31
      }
    }, "\u6DD8\u5B9D\u753B\u5ECA"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 591,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 592,
        columnNumber: 29
      }
    }, "6."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 593,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/22912/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 594,
        columnNumber: 31
      }
    }, "\u5927\u820D\u827A\u672F\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 602,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 603,
        columnNumber: 29
      }
    }, "7."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 604,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26231/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 31
      }
    }, "\u534E\u65E5\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 613,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 614,
        columnNumber: 29
      }
    }, "8."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 615,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/177675/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 31
      }
    }, "\u60A6\u7136\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 625,
        columnNumber: 29
      }
    }, "9."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 626,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26986/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 627,
        columnNumber: 31
      }
    }, "\u4E00\u5F97\u4E66\u82D1"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 635,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 636,
        columnNumber: 29
      }
    }, "10."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 637,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/3669/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638,
        columnNumber: 31
      }
    }, "\u901A\u96C5\u8F69")))))), __jsx("div", {
      className: "m_t34",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 652,
        columnNumber: 21
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 23
      }
    }, "\u7EFC\u5408\u6392\u884C\u699C ", __jsx("span", {
      className: "line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 31
      }
    }, "/"), " ", __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 63
      }
    }, "\u66F4\u591A")), __jsx("div", {
      className: "change_text m_t10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 662,
        columnNumber: 23
      }
    }, __jsx("ul", {
      style: {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 665,
        columnNumber: 29
      }
    }, "1."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/73122/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669,
        columnNumber: 31
      }
    }, "\u5B54\u9F99\u4E66\u793EA"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 29
      }
    }, "2."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 681,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/165050/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 682,
        columnNumber: 31
      }
    }, "\u5B66\u5230\u8001\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 691,
        columnNumber: 29
      }
    }, "3."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/233701/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 695,
        columnNumber: 31
      }
    }, "\u5B54\u9F99\u6587\u4F53\u516C\u53F8"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704,
        columnNumber: 29
      }
    }, "4."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 705,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/193535/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 706,
        columnNumber: 31
      }
    }, "\u9700\u914D\u4E66\u9662 (\u5357\u4EAC\u4E66\u5E97)"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 715,
        columnNumber: 29
      }
    }, "5."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 716,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/69378/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 717,
        columnNumber: 31
      }
    }, "\u7389\u749E\u4E66\u5C4B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 725,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 726,
        columnNumber: 29
      }
    }, "6."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 727,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/22912/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728,
        columnNumber: 31
      }
    }, "\u4E1D\u7EF8\u4E4B\u8DEF\u65E7\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 736,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 737,
        columnNumber: 29
      }
    }, "7."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 738,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26231/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 739,
        columnNumber: 31
      }
    }, "\u54E5\u4FE9\u4E66\u5C4B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 747,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748,
        columnNumber: 29
      }
    }, "8."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/177675/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 750,
        columnNumber: 31
      }
    }, "\u5B66\u5230\u8001\u4E66\u57CE"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 758,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759,
        columnNumber: 29
      }
    }, "9."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 760,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26986/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 761,
        columnNumber: 31
      }
    }, "\u5317\u4EAC\u5E02\u767E\u4E0E\u6587\u5316\u4F20\u5A92"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 769,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 770,
        columnNumber: 29
      }
    }, "10."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 771,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/3669/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772,
        columnNumber: 31
      }
    }, "\u80B2\u5FB7\u4E66\u5E97")))))), __jsx("div", {
      className: "m_t34",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 786,
        columnNumber: 21
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 787,
        columnNumber: 23
      }
    }, "\u6BCF\u5468\u63A8\u8350\u699C"), __jsx("div", {
      className: "change_text m_t10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 794,
        columnNumber: 23
      }
    }, __jsx("ul", {
      style: {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 796,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 797,
        columnNumber: 29
      }
    }, "1."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 800,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/73122/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 801,
        columnNumber: 31
      }
    }, "\u8D35\u9633\u4E94\u4E4B\u5802\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 810,
        columnNumber: 29
      }
    }, "2."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 813,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/165050/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 814,
        columnNumber: 31
      }
    }, "\u4E66\u4E4B\u589F"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 823,
        columnNumber: 29
      }
    }, "3."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 826,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/233701/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 827,
        columnNumber: 31
      }
    }, "\u8303\u7279\u897F\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 835,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836,
        columnNumber: 29
      }
    }, "4."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 837,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/193535/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 838,
        columnNumber: 31
      }
    }, "\u5E38\u5DDE\u4E07\u8C61\u53E4\u65E7\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 846,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 847,
        columnNumber: 29
      }
    }, "5."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 848,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/69378/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 849,
        columnNumber: 31
      }
    }, "\u4E94\u6CC9\u6DD8\u4E66\u658B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 857,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 858,
        columnNumber: 29
      }
    }, "6."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/22912/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 31
      }
    }, "\u897F\u6587\u6D89\u534E"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 868,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 869,
        columnNumber: 29
      }
    }, "7."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 870,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26231/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 871,
        columnNumber: 31
      }
    }, "\u7231\u8389\u4E66\u5C4B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 879,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 880,
        columnNumber: 29
      }
    }, "8."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 881,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/177675/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 882,
        columnNumber: 31
      }
    }, "\u94A2\u94C1\u9992\u5934\u4E8C\u53F7\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 890,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 891,
        columnNumber: 29
      }
    }, "9."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 892,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26986/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 893,
        columnNumber: 31
      }
    }, "\u5F90\u8BB0\u4E66\u658B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 901,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 902,
        columnNumber: 29
      }
    }, "10."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 903,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/3669/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 904,
        columnNumber: 31
      }
    }, "\u4EAC\u5267\u4E66\u5E97")))))), __jsx("div", {
      className: "lm_box m_t50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 918,
        columnNumber: 21
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919,
        columnNumber: 23
      }
    }, "\u4E66\u5E97\u8054\u76DF ", __jsx("span", {
      className: "line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 920,
        columnNumber: 30
      }
    }, "/"), " ", __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 920,
        columnNumber: 62
      }
    }, "\u66F4\u591A")), __jsx("ul", {
      className: "list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 922,
        columnNumber: 23
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 925,
        columnNumber: 29
      }
    }, "3210"), "\u5317\u4EAC\u5E02")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930,
        columnNumber: 29
      }
    }, "850"), "\u4E0A\u6D77\u5E02")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 933,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935,
        columnNumber: 29
      }
    }, "410"), "\u5929\u6D25\u5E02")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 940,
        columnNumber: 29
      }
    }, "236"), "\u91CD\u5E86\u5E02")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 944,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 945,
        columnNumber: 29
      }
    }, "494"), "\u5B89\u5FBD\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 948,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 949,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 950,
        columnNumber: 29
      }
    }, "315"), "\u798F\u5EFA\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 954,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955,
        columnNumber: 29
      }
    }, "200"), "\u7518\u8083\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 958,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 959,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 960,
        columnNumber: 29
      }
    }, "870"), "\u5E7F\u4E1C\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 963,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 964,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 965,
        columnNumber: 29
      }
    }, "180"), "\u5E7F\u897F")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 968,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 969,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 970,
        columnNumber: 29
      }
    }, "79"), "\u8D35\u5DDE\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 973,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 974,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 975,
        columnNumber: 29
      }
    }, "34"), "\u6D77\u5357\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 978,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 979,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980,
        columnNumber: 29
      }
    }, "1257"), "\u6CB3\u5317\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 983,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 984,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 985,
        columnNumber: 29
      }
    }, "899"), "\u6CB3\u5357\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 988,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 989,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 29
      }
    }, "323"), "\u9ED1\u9F99\u6C5F\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 993,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 994,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 995,
        columnNumber: 29
      }
    }, "593"), "\u6E56\u5317\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 998,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 999,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1000,
        columnNumber: 29
      }
    }, "401"), "\u6E56\u5357\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1005,
        columnNumber: 29
      }
    }, "326"), "\u5409\u6797\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1008,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1009,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1010,
        columnNumber: 29
      }
    }, "1156"), "\u6C5F\u82CF\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1013,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1014,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1015,
        columnNumber: 29
      }
    }, "293"), "\u6C5F\u897F\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1018,
        columnNumber: 25
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1019,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1020,
        columnNumber: 29
      }
    }, "706"), "\u8FBD\u5B81\u7701"))))))))), __jsx("div", {
      className: "footer-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "footer-wrap clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "copyright-info-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035,
        columnNumber: 15
      }
    }, "\xA9 2002-2021 Kongfz.com \u5B54\u5B50\u65E7\u4E66\u7F51 \u7248\u6743\u6240\u6709"), __jsx("div", {
      className: "link-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1038,
        columnNumber: 15
      }
    }, __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/aboutus.php",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039,
        columnNumber: 17
      }
    }, "\u5173\u4E8E\u5B54\u7F51"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/lianxi.html",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1047,
        columnNumber: 17
      }
    }, "\u8054\u7CFB\u6211\u4EEC"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://help.kongfz.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1055,
        columnNumber: 17
      }
    }, "\u5E2E\u52A9\u4E2D\u5FC3"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/copyright.php",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1063,
        columnNumber: 17
      }
    }, "\u7248\u6743\u9690\u79C1"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/guanggao.php",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1071,
        columnNumber: 17
      }
    }, "\u5E7F\u544A\u4E1A\u52A1"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/zhaopin.php",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1079,
        columnNumber: 17
      }
    }, "\u5DE5\u4F5C\u673A\u4F1A"), __jsx("a", {
      className: "item",
      target: "_blank",
      href: "https://m.kongfz.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1087,
        columnNumber: 17
      }
    }, "\u79FB\u52A8\u7248"), __jsx("a", {
      className: "item",
      target: "_blank",
      href: "http://book.kongfz.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1094,
        columnNumber: 17
      }
    }, "\u56FE\u4E66\u76EE\u5F55"), __jsx("a", {
      className: "item",
      target: "_blank",
      href: "http://bq.kongfz.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1101,
        columnNumber: 17
      }
    }, "\u56FE\u4E66\u6807\u7B7E"))))));
  }

} // IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/noveltable");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   let novelshow;
//   return { show: data };
// };
// export default withRouter(IndexPage);

/***/ }),

/***/ "./static/css/font-awesome.css":
/*!*************************************!*\
  !*** ./static/css/font-awesome.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "antd/lib/carousel":
/*!************************************!*\
  !*** external "antd/lib/carousel" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/carousel");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYXJvdXNlbC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3NzL2Vzc2F5Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiaW1nbnVtYmVyIiwiSW5kZXhQYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic2hvdyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkIiwicmVuZGVyIiwiY3Nzb2JqIiwiZWhlYWRlciIsImVoY2VudGVyIiwic2xvZ2FuQm94IiwidGV4dCIsInVzZXJpbmZvQm94IiwiaXRlbUluZm8iLCJpbmZvTm9ybWFsIiwiaW5mb1RleHQiLCJpbmZvTGluayIsImluZm9Ob3JtYWwyIiwibGluZVRlc3QiLCJpbmZvTm9ybWFsMyIsImhlYWRlcnNlYXJjaEJveCIsImhlYWRlclNlYXJjaCIsImxvZ29UZXh0IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJzZWFyY2hCb3giLCJzZWFyY2hDb24iLCJzZWFyY2hUeXBlIiwiaXRlbVR5cGUiLCJpbmRpY2F0b3IiLCJzZWFyY2hpbnB1dEJveCIsInNlYXJjaHN0YXR1c0JveCIsImN1clN0YXR1cyIsImljb250YWJEb3duIiwiaWNvbnRhYlVwIiwiaW5wdXRMYWJlbCIsInNlYXJjaExhYmVsIiwiZGlzcGxheSIsImJ0biIsInNlYXJjaExpbmsiLCJhZHZzZWFyY2hCdG4iLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwibmF2X2JveCIsImpvaW4iLCJwYWRkaW5nTGVmdCIsInRleHREZWNvcmF0aW9uIiwibWFwIiwiaXRlbSIsImlkIiwibWFyZ2luUmlnaHQiLCJpbWdTcmMiLCJpdGVtTmFtZSIsInByb2R1Y3RlciIsInByaWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBOztBQU9BLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsT0FBSyxHQUFHO0FBQXBCLENBQUQsS0FDYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBUUEsS0FBUixDQURGLEVBRUU7QUFBTSxTQUFPLEVBQUMsT0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFGRixFQUdFO0FBQU0sTUFBSSxFQUFDLFVBQVg7QUFBc0IsU0FBTyxFQUFDLHVDQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFIRixDQURGLEVBTUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBREYsQ0FORixFQXNCR0QsUUF0QkgsRUF1QkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBdkJGO0FBQUE7QUFBQTtBQUFBLHVnRUFERjs7QUFzQ2VELHFFQUFmLEU7Ozs7Ozs7Ozs7OztBQy9DYTs7QUFFYixtQkFBTyxDQUFDLHNFQUF1Qjs7QUFFL0IsbUJBQU8sQ0FBQyxxRUFBYSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0pyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7Q0FFQTs7QUFDQTtBQUNBO0FBQzBCO0FBQzFCO0FBQ0E7QUFZQSxJQUFJRyxTQUFpQixHQUFHLENBQXhCO0FBRWUsTUFBTUMsU0FBTixTQUF3QkMsNENBQUssQ0FBQ0MsU0FBOUIsQ0FBdUQ7QUFDcEUsZUFBYUMsZUFBYixHQUErQjtBQUM3QixVQUFNQyxHQUFHLEdBQUcsTUFBTUMseURBQUssQ0FBQyw0QkFBRCxDQUF2QjtBQUNBLFVBQU1DLElBQUksR0FBRyxNQUFNRixHQUFHLENBQUNHLElBQUosRUFBbkIsQ0FGNkIsQ0FHN0I7QUFDQTs7QUFDQSxXQUFPO0FBQUVDLFVBQUksRUFBRUY7QUFBUixLQUFQO0FBQ0Q7O0FBRURHLGFBQVcsQ0FBQ0MsS0FBRCxFQUFhO0FBQ3RCLFVBQU1BLEtBQU47QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFBRUMsY0FBUSxFQUFFO0FBQVosS0FBYjtBQUNEOztBQUVEQyxRQUFNLEdBQUc7QUFDUCxXQUNFLE1BQUMsMERBQUQ7QUFBUSxXQUFLLEVBQUMsY0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFFQyxzREFBTSxDQUFDQyxPQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUVELHNEQUFNLENBQUNFLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRUYsc0RBQU0sQ0FBQ0csU0FBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFSCxzREFBTSxDQUFDSSxJQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDhDQURGLEVBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FGRixDQURGLEVBS0U7QUFBSyxlQUFTLEVBQUVKLHNEQUFNLENBQUNLLFdBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFLLGVBQVMsRUFBRUwsc0RBQU0sQ0FBQ00sUUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sUUFBRSxFQUFDLFVBQVQ7QUFBb0IsZUFBUyxFQUFFTixzREFBTSxDQUFDTyxVQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUVQLHNEQUFNLENBQUNRLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFFRTtBQUFNLGVBQVMsRUFBRVIsc0RBQU0sQ0FBQ1EsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQUZGLEVBR0U7QUFBTSxlQUFTLEVBQUVSLHNEQUFNLENBQUNRLFFBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEYsQ0FERixDQURGLEVBUUU7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQURGLENBREYsQ0FSRixFQWNFO0FBQUssZUFBUyxFQUFFUixzREFBTSxDQUFDTSxRQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBRyxlQUFTLEVBQUVOLHNEQUFNLENBQUNTLFFBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBRVQsc0RBQU0sQ0FBQ1EsUUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw0QkFERixDQURGLENBZEYsRUFvQkU7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0FwQkYsRUEwQkU7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0ExQkYsRUFnQ0U7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0FoQ0YsRUFzQ0U7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtB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QUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUpGLENBM0JGLEVBd0NFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixDQUZGLENBeENGLEVBbURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBbkRGLEVBOERFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4Q0FERixDQUZGLENBOURGLEVBeUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBekVGLEVBb0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBcEZGLEVBK0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBL0ZGLEVBMEdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMs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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBbkRGLEVBOERFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvREFERixDQUZGLENBOURGLEVBeUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBekVGLEVBb0ZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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SSxFQUFDLGdDQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwREFERixDQUZGLENBeENGLEVBbURFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx3Q0FERixDQUZGLENBbkRGLEVBOERFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBOURGLEVBeUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFNLGVBQVMsRUFBQyxpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUU7QUFBTSxlQUFTLEVBQUMsVUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQ0UsVUFBSSxFQUFDLCtCQURQO0FBRUUsWUFBTSxFQUFDLFFBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQ0FERixDQUZGLENBekVGLEVBb0ZFO0FBQUE7QUFB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Y2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2hvbWUvaW5kZXgudHN4XCIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxuICB0aXRsZT86IHN0cmluZ1xufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfTogUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2PlxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgfHsnICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzXCI+XG4gICAgICAgICAgPGE+VXNlcnMgTGlzdDwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHwgPGEgaHJlZj1cIi9hcGkvdXNlcnNcIj5Vc2VycyBBUEk8L2E+ICovfVxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAge2NoaWxkcmVufVxuICAgIDxmb290ZXI+XG4gICAgICB7LyogPGhyIC8+ICovfVxuICAgICAgey8qIDxzcGFuPkknbSBoZXJlIHRvIHN0YXkgKEZvb3Rlcik8L3NwYW4+ICovfVxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7XG4gICAgICAgIGBcbiAgICAgICAgYFxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvZGl2PlxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXRcbiIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vc3R5bGUvaW5kZXguY3NzJyk7XG5cbnJlcXVpcmUoJy4vaW5kZXguY3NzJyk7IiwibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiZWhlYWRlclwiOiBcIl8xeUNUZG5fZzBOaW1MOTByY1F0UzV3XCIsXG5cdFwiZWhjZW50ZXJcIjogXCJfMXdnMHJIZk9HNTByMGh0d0d2VExtOFwiLFxuXHRcInNsb2dhbkJveFwiOiBcIl8yMjZjMEpWY2lHa3F0RXVUU2FITjBrXCIsXG5cdFwidGV4dFwiOiBcIk1RbldnanRJX0xJUFRIVnVYSTBWcVwiLFxuXHRcInVzZXJpbmZvQm94XCI6IFwiXzJ4b3VaNUFLQlF2OUxnZU80WnNtMENcIixcblx0XCJpdGVtSW5mb1wiOiBcInROR3A5RU1NMGxZNHplRWdGR1BBUFwiLFxuXHRcImluZm9Ob3JtYWxcIjogXCJfMUp6b0hrQ1hDdVJjQVdlTnlqSkxUVFwiLFxuXHRcImluZm9UZXh0XCI6IFwiXzNVajkzUFBqUDk2QTBORmk5VVppZDVcIixcblx0XCJpbmZvTGlua1wiOiBcIl8yNVVqV3pXUGtOYlA5MTNWdHN0UDRuXCIsXG5cdFwiaW5mb05vcm1hbDJcIjogXCJfMnQzVkZLc0NvQl83bGp0OGxkTThjbVwiLFxuXHRcImluZm9Ob3JtYWwzXCI6IFwiXzVRbGJiRUdSM1dnWDlaT0RSc1NDXCIsXG5cdFwibGluZVRlc3RcIjogXCJfM0NGLW5nVFdKMEFPdzROUERVaDlZVFwiLFxuXHRcInR1Ymlhb1wiOiBcIl8zZG9zajU1RWMwal9xaDB0eWNYR3M2XCIsXG5cdFwiaGVhZGVyc2VhcmNoQm94XCI6IFwiXzN5cmUyOFNqNTVNM1RjdEtLc3ZrT1FcIixcblx0XCJoZWFkZXJTZWFyY2hcIjogXCJfMy0wMUwwcFMxZWx4NW9paW9Sbk1BYVwiLFxuXHRcImxvZ29UZXh0XCI6IFwiXzEtVDZaWm1aNjU0MWhVT1BoZW1LNmtcIixcblx0XCJzZWFyY2hCb3hcIjogXCJmbUxvMjRLaHNwSXI5eEJWVjdDMUpcIixcblx0XCJzZWFyY2hDb25cIjogXCJlTXZ2RmdZZ0J3RUU4RGhPNG83RkVcIixcblx0XCJzZWFyY2hUeXBlXCI6IFwiXzJKdEF0bEp4aEZlSW1vYS1iV3JxVDRcIixcblx0XCJpdGVtVHlwZVwiOiBcIm5TUkxwT0YwOXBCSGhVOXpIaGpZTFwiLFxuXHRcImluZGljYXRvclwiOiBcIl8xWjBacHVZTC0xNElMVHZIdVVjVXZ5XCIsXG5cdFwic2VhcmNoaW5wdXRCb3hcIjogXCJfMWdIYzB2NUsxTmpiU0p0WEk0WUl5U1wiLFxuXHRcInNlYXJjaHN0YXR1c0JveFwiOiBcIl8zdUdyeERrc1V3STBCOHlvbWpSVWxLXCIsXG5cdFwiY3VyU3RhdHVzXCI6IFwiXzNzNjBVOEpfa3ItU0tkdWROaFYyNVZcIixcblx0XCJpY29udGFiRG93blwiOiBcIl8yM1JyVmVOazVRUW56LUFQRVlWVnA4XCIsXG5cdFwiaW5wdXRMYWJlbFwiOiBcIl8yTUtQWTNxZDdTN3IyeEJrWFJhZkxjXCIsXG5cdFwic2VhcmNoTGFiZWxcIjogXCJfMmFlc0VmcHk3VWlfdV9VbUhhTXkzRFwiLFxuXHRcImJ0blwiOiBcInVZdUlvUmZudW5mRVF5RHl1c2tPSlwiLFxuXHRcInNlYXJjaExpbmtcIjogXCJfMVZqRzhfckM1aU81N2NRTlp3VldXM1wiLFxuXHRcImFkdnNlYXJjaEJ0blwiOiBcInJEcDUtWHduVldFelN4M25JM05mVVwiLFxuXHRcImhlYWRcIjogXCJfMmt4MU1Cdzd1b2VwbHYtdjg1QnNiRVwiLFxuXHRcIm5hdl9ib3hcIjogXCJfM2pqcGxrVzh6dkN2bUpWTW42eUhySVwiXG59OyIsIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBcIkAvc3RhdGljL2Nzcy9mb250LWF3ZXNvbWUuY3NzXCI7XHJcbmltcG9ydCBcIi4uL2Nzcy9lc3NheS5jc3NcIjtcclxuaW1wb3J0IGNzc29iaiBmcm9tIFwiLi4vY3NzL2Vzc2F5Lmxlc3NcIjtcclxuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuLy8g5aOw5piO55qE5YWo5bGA5pWw5o2uXHJcblxyXG50eXBlIHN0YXRlID0ge1xyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBJUHJvcHMgPSB7XHJcbiAgc2hvdzogW3t9XTtcclxufTtcclxudmFyIGltZ251bWJlcjogbnVtYmVyID0gMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4UGFnZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudDxJUHJvcHMsIHN0YXRlPiB7XHJcbiAgc3RhdGljIGFzeW5jIGdldEluaXRpYWxQcm9wcygpIHtcclxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2hvbWVcIik7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy/ov5novrnov5Tlm57nmoTmlbDmja7kvJrooqvmjILovb3liLDnu4Tku7bnmoRwcm9wc+S4rVxyXG4gICAgcmV0dXJuIHsgc2hvdzogZGF0YSB9O1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IocHJvcHM6IGFueSkge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgc2VsZWN0ZWQ6IGZhbHNlIH07XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHRpdGxlPVwi6aaW6aG1XCI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouZWhlYWRlcn0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouZWhjZW50ZXJ9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2xvZ2FuQm94fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLnRleHR9Pue9kee9l+WkqeS4i+WbvuS5pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuS8oOaJv+S4reWNjuaWh+WMljwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnVzZXJpbmZvQm94fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBpZD1cIm5pY2tOYW1lXCIgY2xhc3NOYW1lPXtjc3NvYmouaW5mb05vcm1hbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PueZu+W9lTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+Lzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5rOo5YaMPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9Pua2iOaBrzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+6LSt54mp6L2mPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7miJHnmoTorqLljZU8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuS4quS6uuS4reW/gzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5Y2W5a625Lit5b+DPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7lrqLmnI08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvTm9ybWFsMn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuaJi+acuueJiDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmoubGluZVRlc3R9Pnw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb05vcm1hbDN9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7pgIHoh7Mg5YyX5LqsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmhlYWRlcnNlYXJjaEJveH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaGVhZGVyU2VhcmNofT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NvYmoubG9nb1RleHR9XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyBmb250RmFtaWx5OiBcIuWNjuaWh+alt+S9k1wiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAg5a2U5a2Q5pen5Lmm572RXHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2VhcmNoQm94fT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y3Nzb2JqLnNlYXJjaENvbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2VhcmNoVHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtVHlwZX0+5ZWG5ZOBPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtVHlwZX0+5ouN5Y2W5Yy6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pbmRpY2F0b3J9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5zZWFyY2hpbnB1dEJveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5zZWFyY2hzdGF0dXNCb3h9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5jdXJTdGF0dXN9PuWcqOWUrjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaWNvbnRhYkRvd259Pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmljb250YWJVcH0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInNlYXJjaFdvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NvYmouaW5wdXRMYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICAgIHJlYWRPbmx5XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3Nzb2JqLnNlYXJjaExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgaHRtbEZvcj1cInNlYXJjaElucHV0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIOWVhuWTgeWQjeensOOAgeS9nOiAheOAgeWHuueJiOekvuOAgUlTQk5cclxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cInNlYXJjaEJ0blwiIGNsYXNzTmFtZT17Y3Nzb2JqLmJ0bn0+XHJcbiAgICAgICAgICAgICAgICAgICAg5pCc57SiXHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5zZWFyY2hMaW5rfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouYWR2c2VhcmNoQnRufSByZWw9XCJub2ZvbGxvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIOmrmOe6p+aQnOe0olxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmhlYWR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5uYXZfYm94fT5cclxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT17W1wicHVsbExlZnRcIiwgXCJsZWZ0cGFydFwiXS5qb2luKFwiIFwiKX0+XHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiUENcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdj7pppbpobU8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX2xpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiUENcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiL25ld2Jvb2tcIlxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPGRpdj7mlrDkuabotYTorq88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX2xpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiUENcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+5bCP6K+0PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlBDXCIgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PuaVo+aWhzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfbGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiNHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJQQ1wiIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGRpdj7pmo/nrJQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX2xpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiUENcIiBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+5paH5a2mPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbUNvbG9yXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImx1bmJvYm94XCI+XHJcbiAgICAgICAgICAgIDxDYXJvdXNlbCBhdXRvcGxheSBjbGFzc05hbWU9XCJsdW5ib1wiPlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImNvbnRlbnRTdHlsZVwiPjE8L2gzPiAqL31cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sdW41LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbHVuLmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIHNyYz1cIi4uLy4uL3N0YXRpYy9pbWFnZXMvbHVuMi5qcGdcIlxyXG4gICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNzBcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2x1bjMuanBnXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMjcwXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sdW40LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTAwMFwiXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5a+86Iiq5qCP6YOo5YiG57uT5p2fLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yZS1ib3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5Y2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fYjUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tsaXN0X3RpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+54m56Imy5o6o6I2QPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0IG1vcmVfbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJub3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOe6v+ijheWPpOexjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDlm73lrablj6TnsY1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5rCR5Zu95pen5LmmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJub3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWQjeS6uuWiqOi/uVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICDoibrmnK/nj43mnKxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAg5Y+y5a2m5YW457GNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0t5Lmm57GN5bGV56S65Yy65Z+fLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va19saXN0IG1fdDI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbGlzdF9ib3ggYm9va2xpc3RfaXRlbTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5wcm9wcy5zaG93fSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkIDwgMTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxpdGVzdGhvbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS8xMTcyODcvMjM5NjYxNTEyNS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17aXRlbS5pbWdTcmN9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tLzI0NDgwNC8yNTQ0NjUwNTY0L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlPVwi5pud5Lmm5Lqt6ZuGXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0uaXRlbU5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wX25hbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzI0NDgwNC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIueRvuengOmYgVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByb2R1Y3Rlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tqdXRpX3ByaWNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7vv6U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvb2tfbW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tL0N4aWFuemh1YW5nL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLuabtOWkmlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS3kuI3lrrnplJnov4flvIDlp4stLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibV9iNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2xpc3RfdGl0X2JpZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHVsbC1sZWZ0IG1fcjEwXCI+5LiN5a656ZSZ6L+HPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnQgdGl0X2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJsaW5lX3hpZSBtX3IxMFwiPi88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg5paH5Y+y56S+56eR57G757K+5ZOB5o6o6I2QXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tfbGlzdCBtX3QyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tsaXN0X2JveCBib29rbGlzdF9pdGVtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiB7dGhpcy5wcm9wcy5zaG93fSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmlkID49IDExICYmIGl0ZW0uaWQgPCAyMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGl0ZXN0aG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tLzExNzI4Ny8yMzk2NjE1MTI1L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ1NyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS8yNDQ4MDQvMjU0NDY1MDU2NC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlPVwi5pud5Lmm5Lqt6ZuGXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNDQ4MDQvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIueRvuengOmYgVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2p1dGlfcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7vv6U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9va19tb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS9DeGlhbnpodWFuZy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4u5pu05aSaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0t5LiN5a656ZSZ6L+H57uT5p2fLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS3otoXlgLzkvY7ku7flvIDlp4stLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoYW96aGlkaWppYSBzaG9wX2Jvb2tsaXN0MSB0aWFvemhlbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeCBib29rbGlzdF90aXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+6LaF5YC85L2O5Lu3PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB1bGwtcmlnaHQgbW9yZV9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEw5YWD5LiT5Yy6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwLTMw5YWD5LiT5Yy6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwLTUw5YWD5LiT5Yy6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIOS5puexjeWxleekuuaooeWdlyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tfbGlzdCBtX3QyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbGlzdF9ib3ggYm9va2xpc3RfaXRlbTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLnNob3d9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPj0gMjEgJiYgaXRlbS5pZCA8IDMxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXRlc3Rob21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjI4cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vMTE3Mjg3LzIzOTY2MTUxMjUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nU3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va19uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vMjQ0ODA0LzI1NDQ2NTA1NjQvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRpdGxlPVwi5pud5Lmm5Lqt6ZuGXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNob3BfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNDQ4MDQvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIueRvuengOmYgVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29ranV0aV9wcmljZWNoYW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+77+lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImxvb2tfbW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vQ3hpYW56aHVhbmcvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLuabtOWkmlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLei2heWAvOS9juS7t+e7k+adny0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuby1tb3JlLWJveFwiPuayoSDmnIkg5pu0IOWkmiDkuoY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaG9wTGVmdGJhclwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvcmRlcl9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog56ys5LiA5YiX5byA5aeLICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxsaW5mb19ib3ggZ3JheTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIG1fcjE1IGZhLWJhbmsgaWNvbmZvbnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDE4MjE1IOWutuS5puW6l1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fdDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgbV9yMTUgZmEtbGlmZS1yaW5nIGljb25mb250XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAyMTAxMDIg5a625Lmm5pGKXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibV90NVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBtX3IxNSBmYS1ib29rIGljb25mb250XCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA5MTQ0MDk5OSDnp43lm77kuaZcclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDnrKzkuIDliJfnu5PmnZ8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOesrOS6jOWIl+W8gOWniyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fdDM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOmUgOmHj+aOkuihjOamnCA8c3BhbiBjbGFzc05hbWU9XCJsaW5lXCI+Lzwvc3Bhbj4gPGE+5pu05aSaPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlX3RpdGxlX2JveCBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJub3dcIj7lkag8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPuaciDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCI+5bm0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0t5YiX6KGo5pWw5o2uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VfdGV4dCBtX3QxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzczMTIyL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOa1t+S4neaxieWtpuiKuOeql1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNjUwNTAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5aKo56y65qW85ZWG5Z+OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzIzMzcwMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlhYnlkozmm7jmiL9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+NC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE5MzUzNS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmh4LlvrflloTmnKzkuabpmIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+NS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzY5Mzc4L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOa3mOWuneeUu+W7ilxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj42Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjI5MTIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5aSn6IiN6Im65pyv5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjcuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNjIzMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDljY7ml6XkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+OC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE3NzY3NS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmgqbnhLbkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+OS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzI2OTg2L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS4gOW+l+S5puiLkVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj4xMC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzM2NjkvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YCa6ZuF6L2pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0t5YiX6KGo5pWw5o2uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDnrKzkuozliJfnu5PmnZ8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOesrOS4ieWIl+W8gOWniyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fdDM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOe7vOWQiOaOkuihjOamnCA8c3BhbiBjbGFzc05hbWU9XCJsaW5lXCI+Lzwvc3Bhbj4gPGE+5pu05aSaPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImNoYW5nZV90aXRsZV9ib3ggY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJub3dcIj7lkag8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCI+5pyIPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPuW5tDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlX3RleHQgbV90MTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS83MzEyMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrZTpvpnkuabnpL5BXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE2NTA1MC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrabliLDogIHkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0IGNfcmVkIGJsb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjMzNzAxL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWtlOm+meaWh+S9k+WFrOWPuFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj40Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMTkzNTM1L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOmcgOmFjeS5pumZoiAo5Y2X5Lqs5Lmm5bqXKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj41Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vNjkzNzgvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg546J55Ke5Lmm5bGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjYuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yMjkxMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkuJ3nu7jkuYvot6/ml6fkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+Ny48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzI2MjMxL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWTpeS/qeS5puWxi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj44Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMTc3Njc1L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWtpuWIsOiAgeS5puWfjlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj45Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjY5ODYvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5YyX5Lqs5biC55m+5LiO5paH5YyW5Lyg5aqSXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjEwLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMzY2OS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDogrLlvrfkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiAtLS0tLS3liJfooajmlbDmja4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOesrOS4ieWIl+e7k+adnyAqL31cclxuICAgICAgICAgICAgICAgICAgICB7Lyog56ys5Zub5YiX5byA5aeLICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibV90MzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMz7mr4/lkajmjqjojZDmppw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlX3RpdGxlX2JveCBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vd1wiPuWRqDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIj7mnIg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCI+5bm0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0t5YiX6KGo5pWw5o2uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VfdGV4dCBtX3QxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzczMTIyL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOi0temYs+S6lOS5i+WgguS5puW6l1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNjUwNTAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lmm5LmL5aKfXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzIzMzcwMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDojIPnibnopb/kuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+NC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE5MzUzNS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDluLjlt57kuIfosaHlj6Tml6fkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+NS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzY5Mzc4L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOS6lOaziea3mOS5puaWi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj42Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjI5MTIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6KW/5paH5raJ5Y2OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjcuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNjIzMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDniLHojonkuablsYtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+OC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE3NzY3NS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDpkqLpk4HpppLlpLTkuozlj7flupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+OS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzI2OTg2L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOW+kOiusOS5puaWi1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj4xMC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzM2NjkvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lqs5Ymn5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0t5YiX6KGo5pWw5o2uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiDnrKzlm5vliJfnu5PmnZ8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIOesrOS6lOWIl+W8gOWniyAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxtX2JveCBtX3Q1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDkuablupfogZTnm58gPHNwYW4gY2xhc3NOYW1lPVwibGluZVwiPi88L3NwYW4+IDxhPuabtOWkmjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MzIxMDwvc3Bhbj7ljJfkuqzluIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj44NTA8L3NwYW4+5LiK5rW35biCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+NDEwPC9zcGFuPuWkqea0peW4glxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjIzNjwvc3Bhbj7ph43luobluIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj40OTQ8L3NwYW4+5a6J5b6955yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MzE1PC9zcGFuPuemj+W7uuecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjIwMDwvc3Bhbj7nlJjogoPnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj44NzA8L3NwYW4+5bm/5Lic55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MTgwPC9zcGFuPuW5v+ilv1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjc5PC9zcGFuPui0teW3nuecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjM0PC9zcGFuPua1t+WNl+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjEyNTc8L3NwYW4+5rKz5YyX55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+ODk5PC9zcGFuPuays+WNl+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjMyMzwvc3Bhbj7pu5HpvpnmsZ/nnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj41OTM8L3NwYW4+5rmW5YyX55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+NDAxPC9zcGFuPua5luWNl+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjMyNjwvc3Bhbj7lkInmnpfnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4xMTU2PC9zcGFuPuaxn+iLj+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjI5Mzwvc3Bhbj7msZ/opb/nnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj43MDY8L3NwYW4+6L695a6B55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICB7Lyog56ys5LqU5YiX57uT5p2fICovfVxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Li75L2T57uT5p2fLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICB7Lyog5bqV6YOo5byA5aeLICovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb290ZXItYm94XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXAgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1pbmZvLWJveFwiPlxyXG4gICAgICAgICAgICAgICAgwqkgMjAwMi0yMDIxIEtvbmdmei5jb20g5a2U5a2Q5pen5Lmm572RIOeJiOadg+aJgOaciVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1ib3hcIj5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9hYm91dHVzLnBocFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIOWFs+S6juWtlOe9kVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9oZWxwL2xpYW54aS5odG1sXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg6IGU57O75oiR5LusXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2hlbHAua29uZ2Z6LmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDluK7liqnkuK3lv4NcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9jb3B5cmlnaHQucGhwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg54mI5p2D6ZqQ56eBXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL2hlbHAvZ3VhbmdnYW8ucGhwXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg5bm/5ZGK5Lia5YqhXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL2hlbHAvemhhb3Bpbi5waHBcIlxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICDlt6XkvZzmnLrkvJpcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9tLmtvbmdmei5jb20vXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg56e75Yqo54mIXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vXCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAg5Zu+5Lmm55uu5b2VXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtXCJcclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9icS5rb25nZnouY29tL1wiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIOWbvuS5puagh+etvlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIHsvKiDlupXpg6jnu5PmnZ8gKi99XHJcbiAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgPC9MYXlvdXQ+XHJcbiAgICApO1xyXG4gIH1cclxufVxyXG5cclxuLy8gSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvbm92ZWx0YWJsZVwiKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAvL+i/mei+uei/lOWbnueahOaVsOaNruS8muiiq+aMgui9veWIsOe7hOS7tueahHByb3Bz5LitXHJcbi8vICAgbGV0IG5vdmVsc2hvdztcclxuLy8gICByZXR1cm4geyBzaG93OiBkYXRhIH07XHJcbi8vIH07XHJcblxyXG4vLyBleHBvcnQgZGVmYXVsdCB3aXRoUm91dGVyKEluZGV4UGFnZSk7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGQvbGliL2Nhcm91c2VsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImlzb21vcnBoaWMtdW5mZXRjaFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9