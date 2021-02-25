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
    }, "\u9AD8\u7EA7\u641C\u7D22")))))), __jsx("body", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 161,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.head,
      style: {
        backgroundColor: "white"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 162,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _css_essay_less__WEBPACK_IMPORTED_MODULE_6___default.a.nav_box,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 13
      }
    }, __jsx("ul", {
      className: ["pullLeft", "leftpart"].join(" "),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 15
      }
    }, __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "PC",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 19
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 21
      }
    }, "\u9996\u9875"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 21
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172,
        columnNumber: 17
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
        columnNumber: 19
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 174,
        columnNumber: 21
      }
    }, "\u65B0\u4E66\u8D44\u8BAF"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "PC",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180,
        columnNumber: 19
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 21
      }
    }, "\u5C0F\u8BF4"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 21
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "PC",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 187,
        columnNumber: 19
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 21
      }
    }, "\u6563\u6587"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 189,
        columnNumber: 21
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "PC",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 194,
        columnNumber: 19
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 195,
        columnNumber: 21
      }
    }, "\u968F\u7B14"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 196,
        columnNumber: 21
      }
    }))), __jsx("li", {
      style: {
        paddingLeft: "4px"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 200,
        columnNumber: 17
      }
    }, __jsx("a", {
      className: "PC",
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 201,
        columnNumber: 19
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 202,
        columnNumber: 21
      }
    }, "\u6587\u5B66"), __jsx("span", {
      className: "header_line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 21
      }
    })))))), __jsx("div", {
      className: "bottomColor",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "lunbobox",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 13
      }
    }, __jsx(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
      autoplay: true,
      className: "lunbo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 212,
        columnNumber: 15
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "../../static/images/lun5.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 19
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 221,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "../../static/images/lun.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 222,
        columnNumber: 19
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "../../static/images/lun2.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 19
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 235,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "../../static/images/lun3.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 236,
        columnNumber: 19
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 242,
        columnNumber: 17
      }
    }, __jsx("img", {
      src: "../../static/images/lun4.jpg",
      width: "1000",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 19
      }
    })))), __jsx("div", {
      className: "store-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "bodycenter",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "table-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "content-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "m_b50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 257,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "booklist_tit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 258,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 259,
        columnNumber: 27
      }
    }, "\u7279\u8272\u63A8\u8350"), __jsx("div", {
      className: "pull-right more_list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 260,
        columnNumber: 27
      }
    }, __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 261,
        columnNumber: 29
      }
    }, "\u7EBF\u88C5\u53E4\u7C4D"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 29
      }
    }, "\u56FD\u5B66\u53E4\u7C4D"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 267,
        columnNumber: 29
      }
    }, "\u6C11\u56FD\u65E7\u4E66"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 270,
        columnNumber: 29
      }
    }, "\u540D\u4EBA\u58A8\u8FF9"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 273,
        columnNumber: 29
      }
    }, "\u827A\u672F\u73CD\u672C"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 276,
        columnNumber: 29
      }
    }, "\u53F2\u5B66\u5178\u7C4D")), __jsx("div", {
      className: "book_list m_t25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 281,
        columnNumber: 27
      }
    }, __jsx("div", {
      className: "booklist_box booklist_item1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 282,
        columnNumber: 29
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 284,
        columnNumber: 31
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
            lineNumber: 288,
            columnNumber: 39
          }
        }, __jsx("div", {
          className: "pic",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 41
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/117287/2396615125/",
          target: "_blank",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 43
          }
        }, __jsx("img", {
          src: item.imgSrc,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 298,
            columnNumber: 45
          }
        }))), __jsx("div", {
          className: "book_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 301,
            columnNumber: 41
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/244804/2544650564/",
          target: "_blank" // title="曝书亭集"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 302,
            columnNumber: 43
          }
        }, item.itemName)), __jsx("div", {
          className: "shop_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 310,
            columnNumber: 41
          }
        }, __jsx("a", {
          href: "http://shop.kongfz.com/244804/",
          target: "_blank" // title="瑾秀阁"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 311,
            columnNumber: 43
          }
        }, item.producter)), __jsx("div", {
          className: "bookjuti_price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 319,
            columnNumber: 41
          }
        }, __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 320,
            columnNumber: 43
          }
        }, "\uFFE5"), item.price));
      }
    })), __jsx("div", {
      className: "look_more",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 328,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://book.kongfz.com/Cxianzhuang/",
      target: "_blank",
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 329,
        columnNumber: 33
      }
    }, "........................\u66F4\u591A")))))), __jsx("div", {
      className: "m_b50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 342,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "booklist_tit_big",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 343,
        columnNumber: 25
      }
    }, __jsx("h3", {
      className: "pull-left m_r10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 344,
        columnNumber: 27
      }
    }, "\u4E0D\u5BB9\u9519\u8FC7"), __jsx("div", {
      className: "pull-left tit_info",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 345,
        columnNumber: 27
      }
    }, __jsx("span", {
      className: "line_xie m_r10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 346,
        columnNumber: 29
      }
    }, "/"), "\u6587\u53F2\u793E\u79D1\u7C7B\u7CBE\u54C1\u63A8\u8350")), __jsx("div", {
      className: "book_list m_t25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 350,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "booklist_box booklist_item1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 351,
        columnNumber: 27
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 353,
        columnNumber: 29
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
            lineNumber: 357,
            columnNumber: 37
          }
        }, __jsx("div", {
          className: "pic",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 362,
            columnNumber: 39
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/117287/2396615125/",
          target: "_blank",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 363,
            columnNumber: 41
          }
        }, __jsx("img", {
          src: item.imgSrc,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 367,
            columnNumber: 43
          }
        }))), __jsx("div", {
          className: "book_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 370,
            columnNumber: 39
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/244804/2544650564/",
          target: "_blank" // title="曝书亭集"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 371,
            columnNumber: 41
          }
        }, item.itemName)), __jsx("div", {
          className: "shop_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 379,
            columnNumber: 39
          }
        }, __jsx("a", {
          href: "http://shop.kongfz.com/244804/",
          target: "_blank" // title="瑾秀阁"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 380,
            columnNumber: 41
          }
        }, item.producter)), __jsx("div", {
          className: "bookjuti_price",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 388,
            columnNumber: 39
          }
        }, __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 389,
            columnNumber: 41
          }
        }, "\uFFE5"), item.price));
      }
    })), __jsx("div", {
      className: "look_more",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 397,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "http://book.kongfz.com/Cxianzhuang/",
      target: "_blank",
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 398,
        columnNumber: 31
      }
    }, "........................\u66F4\u591A"))))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 411,
        columnNumber: 23
      }
    }, __jsx("div", {
      className: "chaozhidijia shop_booklist1 tiaozheng",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 412,
        columnNumber: 25
      }
    }, __jsx("div", {
      className: "clearfix booklist_tit",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 413,
        columnNumber: 27
      }
    }, __jsx("h3", {
      className: "pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 414,
        columnNumber: 29
      }
    }, "\u8D85\u503C\u4F4E\u4EF7"), __jsx("div", {
      className: "pull-right more_list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 415,
        columnNumber: 29
      }
    }, __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 416,
        columnNumber: 31
      }
    }, "10\u5143\u4E13\u533A"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 419,
        columnNumber: 31
      }
    }, "10-30\u5143\u4E13\u533A"), __jsx("a", {
      href: "",
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 422,
        columnNumber: 31
      }
    }, "30-50\u5143\u4E13\u533A")), __jsx("div", {
      className: "book_list m_t25",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 427,
        columnNumber: 29
      }
    }, __jsx("div", {
      className: "booklist_box booklist_item1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 428,
        columnNumber: 31
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 430,
        columnNumber: 33
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
            lineNumber: 434,
            columnNumber: 41
          }
        }, __jsx("div", {
          className: "pic",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 439,
            columnNumber: 43
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/117287/2396615125/",
          target: "_blank",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 440,
            columnNumber: 45
          }
        }, __jsx("img", {
          src: item.imgSrc,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 444,
            columnNumber: 47
          }
        }))), __jsx("div", {
          className: "book_name",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 447,
            columnNumber: 43
          }
        }, __jsx("a", {
          href: "http://book.kongfz.com/244804/2544650564/",
          target: "_blank" // title="曝书亭集"
          ,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 448,
            columnNumber: 45
          }
        }, item.itemName)), __jsx("div", {
          className: "bookjuti_pricechao",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 465,
            columnNumber: 43
          }
        }, __jsx("span", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 466,
            columnNumber: 45
          }
        }, "\uFFE5"), item.price));
      }
    }))))))), __jsx("div", {
      className: "no-more-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 23
      }
    }, "\u6CA1 \u6709 \u66F4 \u591A \u4E86")))), __jsx("div", {
      className: "content-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 493,
        columnNumber: 17
      }
    }, __jsx("div", {
      className: "shopLeftbar",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 494,
        columnNumber: 19
      }
    }, __jsx("div", {
      className: "border_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 495,
        columnNumber: 21
      }
    }, __jsx("div", {
      className: "allinfo_box gray6",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 23
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "fa m_r15 fa-bank iconfont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 499,
        columnNumber: 27
      }
    }), "18215 \u5BB6\u4E66\u5E97"), __jsx("div", {
      className: "m_t5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 502,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "fa m_r15 fa-life-ring iconfont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 503,
        columnNumber: 27
      }
    }), "210102 \u5BB6\u4E66\u644A"), __jsx("div", {
      className: "m_t5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 25
      }
    }, __jsx("span", {
      className: "fa m_r15 fa-book iconfont",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 27
      }
    }), "91440999 \u79CD\u56FE\u4E66")), __jsx("div", {
      className: "m_t34",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 513,
        columnNumber: 23
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 514,
        columnNumber: 25
      }
    }, "\u9500\u91CF\u6392\u884C\u699C ", __jsx("span", {
      className: "line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 33
      }
    }, "/"), " ", __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 65
      }
    }, "\u66F4\u591A")), __jsx("div", {
      className: "change_title_box clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 517,
        columnNumber: 25
      }
    }, __jsx("a", {
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 518,
        columnNumber: 27
      }
    }, "\u5468"), __jsx("a", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 519,
        columnNumber: 27
      }
    }, "\u6708"), __jsx("a", {
      className: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 520,
        columnNumber: 27
      }
    }, "\u5E74")), __jsx("div", {
      className: "change_text m_t10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 523,
        columnNumber: 25
      }
    }, __jsx("ul", {
      style: {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 27
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 526,
        columnNumber: 31
      }
    }, "1."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 529,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/73122/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 530,
        columnNumber: 33
      }
    }, "\u6D77\u4E1D\u6C49\u5B66\u82B8\u7A97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 538,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 539,
        columnNumber: 31
      }
    }, "2."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/165050/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 33
      }
    }, "\u58A8\u7B3A\u697C\u5546\u57CE"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 31
      }
    }, "3."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 555,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/233701/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 556,
        columnNumber: 33
      }
    }, "\u5149\u548C\u66F8\u623F"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 564,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 565,
        columnNumber: 31
      }
    }, "4."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 566,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/193535/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 567,
        columnNumber: 33
      }
    }, "\u61C2\u5FB7\u5584\u672C\u4E66\u9601"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 575,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 576,
        columnNumber: 31
      }
    }, "5."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 577,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/69378/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 33
      }
    }, "\u6DD8\u5B9D\u753B\u5ECA"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 586,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 31
      }
    }, "6."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/22912/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 33
      }
    }, "\u5927\u820D\u827A\u672F\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 598,
        columnNumber: 31
      }
    }, "7."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 599,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26231/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 33
      }
    }, "\u534E\u65E5\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 608,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 609,
        columnNumber: 31
      }
    }, "8."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 610,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/177675/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 611,
        columnNumber: 33
      }
    }, "\u60A6\u7136\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 620,
        columnNumber: 31
      }
    }, "9."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 621,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26986/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 622,
        columnNumber: 33
      }
    }, "\u4E00\u5F97\u4E66\u82D1"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 630,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 631,
        columnNumber: 31
      }
    }, "10."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 632,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/3669/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 33
      }
    }, "\u901A\u96C5\u8F69")))))), __jsx("div", {
      className: "m_t34",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 23
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 25
      }
    }, "\u7EFC\u5408\u6392\u884C\u699C ", __jsx("span", {
      className: "line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 33
      }
    }, "/"), " ", __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 65
      }
    }, "\u66F4\u591A")), __jsx("div", {
      className: "change_text m_t10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 657,
        columnNumber: 25
      }
    }, __jsx("ul", {
      style: {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 27
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 660,
        columnNumber: 31
      }
    }, "1."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/73122/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 33
      }
    }, "\u5B54\u9F99\u4E66\u793EA"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 672,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673,
        columnNumber: 31
      }
    }, "2."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 676,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/165050/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 677,
        columnNumber: 33
      }
    }, "\u5B66\u5230\u8001\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 685,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 686,
        columnNumber: 31
      }
    }, "3."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/233701/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 690,
        columnNumber: 33
      }
    }, "\u5B54\u9F99\u6587\u4F53\u516C\u53F8"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 31
      }
    }, "4."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 700,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/193535/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 701,
        columnNumber: 33
      }
    }, "\u9700\u914D\u4E66\u9662 (\u5357\u4EAC\u4E66\u5E97)"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 710,
        columnNumber: 31
      }
    }, "5."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/69378/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 712,
        columnNumber: 33
      }
    }, "\u7389\u749E\u4E66\u5C4B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 720,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 721,
        columnNumber: 31
      }
    }, "6."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 722,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/22912/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 33
      }
    }, "\u4E1D\u7EF8\u4E4B\u8DEF\u65E7\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 731,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 732,
        columnNumber: 31
      }
    }, "7."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26231/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 33
      }
    }, "\u54E5\u4FE9\u4E66\u5C4B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 742,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 31
      }
    }, "8."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 744,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/177675/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 745,
        columnNumber: 33
      }
    }, "\u5B66\u5230\u8001\u4E66\u57CE"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754,
        columnNumber: 31
      }
    }, "9."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 755,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26986/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 756,
        columnNumber: 33
      }
    }, "\u5317\u4EAC\u5E02\u767E\u4E0E\u6587\u5316\u4F20\u5A92"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 764,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 31
      }
    }, "10."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/3669/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 767,
        columnNumber: 33
      }
    }, "\u80B2\u5FB7\u4E66\u5E97")))))), __jsx("div", {
      className: "m_t34",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 781,
        columnNumber: 23
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 782,
        columnNumber: 25
      }
    }, "\u6BCF\u5468\u63A8\u8350\u699C"), __jsx("div", {
      className: "change_text m_t10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 789,
        columnNumber: 25
      }
    }, __jsx("ul", {
      style: {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790,
        columnNumber: 27
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 791,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 792,
        columnNumber: 31
      }
    }, "1."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/73122/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 796,
        columnNumber: 33
      }
    }, "\u8D35\u9633\u4E94\u4E4B\u5802\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 805,
        columnNumber: 31
      }
    }, "2."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 808,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/165050/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 809,
        columnNumber: 33
      }
    }, "\u4E66\u4E4B\u589F"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 817,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left c_red blod",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 818,
        columnNumber: 31
      }
    }, "3."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 821,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/233701/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 822,
        columnNumber: 33
      }
    }, "\u8303\u7279\u897F\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 830,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 831,
        columnNumber: 31
      }
    }, "4."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 832,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/193535/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 833,
        columnNumber: 33
      }
    }, "\u5E38\u5DDE\u4E07\u8C61\u53E4\u65E7\u4E66\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 841,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 842,
        columnNumber: 31
      }
    }, "5."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 843,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/69378/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 844,
        columnNumber: 33
      }
    }, "\u4E94\u6CC9\u6DD8\u4E66\u658B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 852,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 853,
        columnNumber: 31
      }
    }, "6."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 854,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/22912/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 855,
        columnNumber: 33
      }
    }, "\u897F\u6587\u6D89\u534E"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 863,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 864,
        columnNumber: 31
      }
    }, "7."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 865,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26231/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 866,
        columnNumber: 33
      }
    }, "\u7231\u8389\u4E66\u5C4B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 874,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 31
      }
    }, "8."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/177675/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 877,
        columnNumber: 33
      }
    }, "\u94A2\u94C1\u9992\u5934\u4E8C\u53F7\u5E97"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 885,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 886,
        columnNumber: 31
      }
    }, "9."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 887,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/26986/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 888,
        columnNumber: 33
      }
    }, "\u5F90\u8BB0\u4E66\u658B"))), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 896,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "w_num pull-left",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 897,
        columnNumber: 31
      }
    }, "10."), __jsx("span", {
      className: "text_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 898,
        columnNumber: 31
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/3669/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 899,
        columnNumber: 33
      }
    }, "\u4EAC\u5267\u4E66\u5E97")))))), __jsx("div", {
      className: "lm_box m_t50",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 23
      }
    }, __jsx("h3", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 914,
        columnNumber: 25
      }
    }, "\u4E66\u5E97\u8054\u76DF ", __jsx("span", {
      className: "line",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915,
        columnNumber: 32
      }
    }, "/"), " ", __jsx("a", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915,
        columnNumber: 64
      }
    }, "\u66F4\u591A")), __jsx("ul", {
      className: "list",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 917,
        columnNumber: 25
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 918,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 919,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 920,
        columnNumber: 31
      }
    }, "3210"), "\u5317\u4EAC\u5E02")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 925,
        columnNumber: 31
      }
    }, "850"), "\u4E0A\u6D77\u5E02")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 928,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 929,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 930,
        columnNumber: 31
      }
    }, "410"), "\u5929\u6D25\u5E02")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 933,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 934,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 935,
        columnNumber: 31
      }
    }, "236"), "\u91CD\u5E86\u5E02")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 938,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 940,
        columnNumber: 31
      }
    }, "494"), "\u5B89\u5FBD\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 943,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 944,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 945,
        columnNumber: 31
      }
    }, "315"), "\u798F\u5EFA\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 948,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 949,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 950,
        columnNumber: 31
      }
    }, "200"), "\u7518\u8083\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 953,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 954,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955,
        columnNumber: 31
      }
    }, "870"), "\u5E7F\u4E1C\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 958,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 959,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 960,
        columnNumber: 31
      }
    }, "180"), "\u5E7F\u897F")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 963,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 964,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 965,
        columnNumber: 31
      }
    }, "79"), "\u8D35\u5DDE\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 968,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 969,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 970,
        columnNumber: 31
      }
    }, "34"), "\u6D77\u5357\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 973,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 974,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 975,
        columnNumber: 31
      }
    }, "1257"), "\u6CB3\u5317\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 978,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 979,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980,
        columnNumber: 31
      }
    }, "899"), "\u6CB3\u5357\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 983,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 984,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 985,
        columnNumber: 31
      }
    }, "323"), "\u9ED1\u9F99\u6C5F\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 988,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 989,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 990,
        columnNumber: 31
      }
    }, "593"), "\u6E56\u5317\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 993,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 994,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 995,
        columnNumber: 31
      }
    }, "401"), "\u6E56\u5357\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 998,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 999,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1000,
        columnNumber: 31
      }
    }, "326"), "\u5409\u6797\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1005,
        columnNumber: 31
      }
    }, "1156"), "\u6C5F\u82CF\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1008,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1009,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1010,
        columnNumber: 31
      }
    }, "293"), "\u6C5F\u897F\u7701")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1013,
        columnNumber: 27
      }
    }, __jsx("a", {
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1014,
        columnNumber: 29
      }
    }, __jsx("span", {
      className: "pull-right",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1015,
        columnNumber: 31
      }
    }, "706"), "\u8FBD\u5B81\u7701"))))))))), __jsx("div", {
      className: "footer-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1028,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "footer-wrap clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1029,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "copyright-info-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1030,
        columnNumber: 15
      }
    }, "\xA9 2002-2021  Kongfz.com \u5B54\u5B50\u65E7\u4E66\u7F51  \u7248\u6743\u6240\u6709"), __jsx("div", {
      className: "link-box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1031,
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
        lineNumber: 1032,
        columnNumber: 13
      }
    }, "\u5173\u4E8E\u5B54\u7F51"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/lianxi.html",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1033,
        columnNumber: 13
      }
    }, "\u8054\u7CFB\u6211\u4EEC"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://help.kongfz.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1034,
        columnNumber: 13
      }
    }, "\u5E2E\u52A9\u4E2D\u5FC3"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/copyright.php",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035,
        columnNumber: 13
      }
    }, "\u7248\u6743\u9690\u79C1"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/guanggao.php",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1036,
        columnNumber: 13
      }
    }, "\u5E7F\u544A\u4E1A\u52A1"), __jsx("a", {
      className: "item",
      target: "_blank",
      rel: "nofollow",
      href: "http://www.kongfz.com/help/zhaopin.php",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1037,
        columnNumber: 13
      }
    }, "\u5DE5\u4F5C\u673A\u4F1A"), __jsx("a", {
      className: "item",
      target: "_blank",
      href: "https://m.kongfz.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1038,
        columnNumber: 13
      }
    }, "\u79FB\u52A8\u7248"), __jsx("a", {
      className: "item",
      target: "_blank",
      href: "http://book.kongfz.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1039,
        columnNumber: 13
      }
    }, "\u56FE\u4E66\u76EE\u5F55"), __jsx("a", {
      className: "item",
      target: "_blank",
      href: "http://bq.kongfz.com/",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1040,
        columnNumber: 13
      }
    }, "\u56FE\u4E66\u6807\u7B7E")))))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYXJvdXNlbC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3NzL2Vzc2F5Lmxlc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvaG9tZS9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiaW1nbnVtYmVyIiwiSW5kZXhQYWdlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwic2hvdyIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJzdGF0ZSIsInNlbGVjdGVkIiwicmVuZGVyIiwiY3Nzb2JqIiwiZWhlYWRlciIsImVoY2VudGVyIiwic2xvZ2FuQm94IiwidGV4dCIsInVzZXJpbmZvQm94IiwiaXRlbUluZm8iLCJpbmZvTm9ybWFsIiwiaW5mb1RleHQiLCJpbmZvTGluayIsImluZm9Ob3JtYWwyIiwibGluZVRlc3QiLCJpbmZvTm9ybWFsMyIsImhlYWRlcnNlYXJjaEJveCIsImhlYWRlclNlYXJjaCIsImxvZ29UZXh0IiwiZm9udEZhbWlseSIsImZvbnRXZWlnaHQiLCJzZWFyY2hCb3giLCJzZWFyY2hDb24iLCJzZWFyY2hUeXBlIiwiaXRlbVR5cGUiLCJpbmRpY2F0b3IiLCJzZWFyY2hpbnB1dEJveCIsInNlYXJjaHN0YXR1c0JveCIsImN1clN0YXR1cyIsImljb250YWJEb3duIiwiaWNvbnRhYlVwIiwiaW5wdXRMYWJlbCIsInNlYXJjaExhYmVsIiwiZGlzcGxheSIsImJ0biIsInNlYXJjaExpbmsiLCJhZHZzZWFyY2hCdG4iLCJoZWFkIiwiYmFja2dyb3VuZENvbG9yIiwibmF2X2JveCIsImpvaW4iLCJwYWRkaW5nTGVmdCIsInRleHREZWNvcmF0aW9uIiwibWFwIiwiaXRlbSIsImlkIiwibWFyZ2luUmlnaHQiLCJpbWdTcmMiLCJpdGVtTmFtZSIsInByb2R1Y3RlciIsInByaWNlIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUVBOztBQU9BLE1BQU1BLE1BQU0sR0FBRyxDQUFDO0FBQUVDLFVBQUY7QUFBWUMsT0FBSyxHQUFHO0FBQXBCLENBQUQs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SyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0FwQkYsRUEwQkU7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0ExQkYsRUFnQ0U7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLENBREYsQ0FoQ0YsRUFzQ0U7QUFBSyxlQUFTLEVBQUVSLHNEQUFNLENBQUNNLFFBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUFHLGVBQVMsRUFBRU4sc0RBQU0sQ0FBQ1MsUUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQU0sZUFBUyxFQUFFVCxzREFBTSxDQUFDUSxRQUF4QjtB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QUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQWhCRixFQXVCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxTQUFHLEVBQUMsOEJBRE47QUFFRSxXQUFLLEVBQUMsTUFGUjtBQUdFLFlBQU0sRUFBQyxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQXZCRixFQThCRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFDRSxTQUFHLEVBQUMsOEJBRE47QUFFRSxXQUFLLEVBQUMsTUFGUjtBQUdFLFlBQU0sRUFBQyxLQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixDQTlCRixDQURGLENBREYsRUEwQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsYUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsZUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsY0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSSxlQUFTLEVBQUMsV0FBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtDQURGLEVBRUU7QUFBSyxlQUFTLEVBQUMsc0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtB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QUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsOENBREYsQ0FGRixDQTlERixFQXlFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FGRixDQXpFRixFQW9GRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxnQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FGRixDQXBGRixFQStGRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FGRixDQS9GRixFQTBHRTtBQUFBO0FB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WUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FGRixDQW5ERixFQThERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsQ0FGRixDQTlERixFQXlFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FGRixDQXpFRixFQW9GRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxnQ0FEUDtBQUVFLFlB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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxnQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMERBREYsQ0FGRixDQXhDRixFQW1ERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREYsQ0FGRixDQW5ERixFQThERTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsQ0FGRixDQTlERixFQXlFRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBTSxlQUFTLEVBQUMsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixFQUVFO0FBQU0sZUFBUyxFQUFDLFVBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQkFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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a0M7Ozs7Ozs7Ozs7O0FDQUEsNkMiLCJmaWxlIjoicGFnZXMvaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaG9tZS9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyB9OiBQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgfHsnICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnNcIj5cbiAgICAgICAgICA8YT5Vc2VycyBMaXN0PC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgfCA8YSBocmVmPVwiL2FwaS91c2Vyc1wiPlVzZXJzIEFQSTwvYT4gKi99XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPGZvb3Rlcj5cbiAgICAgIHsvKiA8aHIgLz4gKi99XG4gICAgICB7LyogPHNwYW4+SSdtIGhlcmUgdG8gc3RheSAoRm9vdGVyKTwvc3Bhbj4gKi99XG4gICAgPC9mb290ZXI+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtcbiAgICAgICAgYFxuICAgICAgICBgXG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9zdHlsZS9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi9pbmRleC5jc3MnKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJlaGVhZGVyXCI6IFwiXzF5Q1Rkbl9nME5pbUw5MHJjUXRTNXdcIixcblx0XCJlaGNlbnRlclwiOiBcIl8xd2cwckhmT0c1MHIwaHR3R3ZUTG04XCIsXG5cdFwic2xvZ2FuQm94XCI6IFwiXzIyNmMwSlZjaUdrcXRFdVRTYUhOMGtcIixcblx0XCJ0ZXh0XCI6IFwiTVFuV2dqdElfTElQVEhWdVhJMFZxXCIsXG5cdFwidXNlcmluZm9Cb3hcIjogXCJfMnhvdVo1QUtCUXY5TGdlTzRac20wQ1wiLFxuXHRcIml0ZW1JbmZvXCI6IFwidE5HcDlFTU0wbFk0emVFZ0ZHUEFQXCIsXG5cdFwiaW5mb05vcm1hbFwiOiBcIl8xSnpvSGtDWEN1UmNBV2VOeWpKTFRUXCIsXG5cdFwiaW5mb1RleHRcIjogXCJfM1VqOTNQUGpQOTZBME5GaTlVWmlkNVwiLFxuXHRcImluZm9MaW5rXCI6IFwiXzI1VWpXeldQa05iUDkxM1Z0c3RQNG5cIixcblx0XCJpbmZvTm9ybWFsMlwiOiBcIl8ydDNWRktzQ29CXzdsanQ4bGRNOGNtXCIsXG5cdFwiaW5mb05vcm1hbDNcIjogXCJfNVFsYmJFR1IzV2dYOVpPRFJzU0NcIixcblx0XCJsaW5lVGVzdFwiOiBcIl8zQ0YtbmdUV0owQU93NE5QRFVoOVlUXCIsXG5cdFwidHViaWFvXCI6IFwiXzNkb3NqNTVFYzBqX3FoMHR5Y1hHczZcIixcblx0XCJoZWFkZXJzZWFyY2hCb3hcIjogXCJfM3lyZTI4U2o1NU0zVGN0S0tzdmtPUVwiLFxuXHRcImhlYWRlclNlYXJjaFwiOiBcIl8zLTAxTDBwUzFlbHg1b2lpb1JuTUFhXCIsXG5cdFwibG9nb1RleHRcIjogXCJfMS1UNlpabVo2NTQxaFVPUGhlbUs2a1wiLFxuXHRcInNlYXJjaEJveFwiOiBcImZtTG8yNEtoc3BJcjl4QlZWN0MxSlwiLFxuXHRcInNlYXJjaENvblwiOiBcImVNdnZGZ1lnQndFRThEaE80bzdGRVwiLFxuXHRcInNlYXJjaFR5cGVcIjogXCJfMkp0QXRsSnhoRmVJbW9hLWJXcnFUNFwiLFxuXHRcIml0ZW1UeXBlXCI6IFwiblNSTHBPRjA5cEJIaFU5ekhoallMXCIsXG5cdFwiaW5kaWNhdG9yXCI6IFwiXzFaMFpwdVlMLTE0SUxUdkh1VWNVdnlcIixcblx0XCJzZWFyY2hpbnB1dEJveFwiOiBcIl8xZ0hjMHY1SzFOamJTSnRYSTRZSXlTXCIsXG5cdFwic2VhcmNoc3RhdHVzQm94XCI6IFwiXzN1R3J4RGtzVXdJMEI4eW9talJVbEtcIixcblx0XCJjdXJTdGF0dXNcIjogXCJfM3M2MFU4Sl9rci1TS2R1ZE5oVjI1VlwiLFxuXHRcImljb250YWJEb3duXCI6IFwiXzIzUnJWZU5rNVFRbnotQVBFWVZWcDhcIixcblx0XCJpbnB1dExhYmVsXCI6IFwiXzJNS1BZM3FkN1M3cjJ4QmtYUmFmTGNcIixcblx0XCJzZWFyY2hMYWJlbFwiOiBcIl8yYWVzRWZweTdVaV91X1VtSGFNeTNEXCIsXG5cdFwiYnRuXCI6IFwidVl1SW9SZm51bmZFUXlEeXVza09KXCIsXG5cdFwic2VhcmNoTGlua1wiOiBcIl8xVmpHOF9yQzVpTzU3Y1FOWndWV1czXCIsXG5cdFwiYWR2c2VhcmNoQnRuXCI6IFwickRwNS1Yd25WV0V6U3gzbkkzTmZVXCIsXG5cdFwiaGVhZFwiOiBcIl8ya3gxTUJ3N3VvZXBsdi12ODVCc2JFXCIsXG5cdFwibmF2X2JveFwiOiBcIl8zampwbGtXOHp2Q3ZtSlZNbjZ5SHJJXCJcbn07IiwiLy8gaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL0xheW91dFwiO1xyXG4vLyBpbXBvcnQgeyB3aXRoUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFwiQC9zdGF0aWMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcclxuaW1wb3J0IFwiLi4vY3NzL2Vzc2F5LmNzc1wiO1xyXG5pbXBvcnQgY3Nzb2JqIGZyb20gXCIuLi9jc3MvZXNzYXkubGVzc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgeyBDYXJvdXNlbCB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG4vLyDlo7DmmI7nmoTlhajlsYDmlbDmja5cclxuXHJcbnR5cGUgc3RhdGUgPSB7XHJcbiAgc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbn07XHJcblxyXG50eXBlIElQcm9wcyA9IHtcclxuICBzaG93OiBbe31dO1xyXG59O1xyXG52YXIgaW1nbnVtYmVyOiBudW1iZXIgPSAwO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgc3RhdGU+IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvaG9tZVwiKTtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAvL+i/mei+uei/lOWbnueahOaVsOaNruS8muiiq+aMgui9veWIsOe7hOS7tueahHByb3Bz5LitXHJcbiAgICByZXR1cm4geyBzaG93OiBkYXRhIH07XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZDogZmFsc2UgfTtcclxuICB9XHJcblxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxMYXlvdXQgdGl0bGU9XCLpppbpobVcIj5cclxuICAgICAgICA8aGVhZGVyPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5laGVhZGVyfT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5laGNlbnRlcn0+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5zbG9nYW5Cb3h9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmoudGV4dH0+572R572X5aSp5LiL5Zu+5LmmPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+5Lyg5om/5Lit5Y2O5paH5YyWPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmoudXNlcmluZm9Cb3h9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGlkPVwibmlja05hbWVcIiBjbGFzc05hbWU9e2Nzc29iai5pbmZvTm9ybWFsfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+55m75b2VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT4vPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7ms6jlhow8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5raI5oGvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7otK3nianovaY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuaIkeeahOiuouWNlTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5Liq5Lq65Lit5b+DPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7ljZblrrbkuK3lv4M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuWuouacjTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9Ob3JtYWwyfT5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua30+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5omL5py654mIPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5saW5lVGVzdH0+fDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvTm9ybWFsM30+XHJcbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PumAgeiHsyDljJfkuqw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaGVhZGVyc2VhcmNoQm94fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5oZWFkZXJTZWFyY2h9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc29iai5sb2dvVGV4dH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRGYW1pbHk6IFwi5Y2O5paH5qW35L2TXCIsIGZvbnRXZWlnaHQ6IFwiYm9sZGVyXCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICDlrZTlrZDml6fkuabnvZFcclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5zZWFyY2hCb3h9PlxyXG4gICAgICAgICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjc3NvYmouc2VhcmNoQ29ufT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5zZWFyY2hUeXBlfT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1UeXBlfT7llYblk4E8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1UeXBlfT7mi43ljZbljLo8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmluZGljYXRvcn0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNlYXJjaGlucHV0Qm94fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNlYXJjaHN0YXR1c0JveH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmN1clN0YXR1c30+5Zyo5ZSuPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pY29udGFiRG93bn0+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaWNvbnRhYlVwfT48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwic2VhcmNoV29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc29iai5pbnB1dExhYmVsfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NvYmouc2VhcmNoTGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICBodG1sRm9yPVwic2VhcmNoSW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAg5ZWG5ZOB5ZCN56ew44CB5L2c6ICF44CB5Ye654mI56S+44CBSVNCTlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic2VhcmNoQnRuXCIgY2xhc3NOYW1lPXtjc3NvYmouYnRufT5cclxuICAgICAgICAgICAgICAgICAgICDmkJzntKJcclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNlYXJjaExpbmt9PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2Nzc29iai5hZHZzZWFyY2hCdG59IHJlbD1cIm5vZm9sbG93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAg6auY57qn5pCc57SiXHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPC9oZWFkZXI+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGJvZHk+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmhlYWR9IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLm5hdl9ib3h9PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9e1tcInB1bGxMZWZ0XCIsIFwibGVmdHBhcnRcIl0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJQQ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+6aaW6aG1PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX2xpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJQQ1wiIGhyZWY9XCIvbmV3Ym9va1wiIHRhcmdldD1cIl9ibGFua1wiIHN0eWxlPXt7dGV4dERlY29yYXRpb246XCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuaWsOS5pui1hOiurzwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiUENcIiBzdHlsZT17e3RleHREZWNvcmF0aW9uOlwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7lsI/or7Q8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfbGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICA8bGkgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IFwiNHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlBDXCIgc3R5bGU9e3t0ZXh0RGVjb3JhdGlvbjpcIm5vbmVcIn19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+5pWj5paHPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGVhZGVyX2xpbmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgPGxpIHN0eWxlPXt7IHBhZGRpbmdMZWZ0OiBcIjRweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJQQ1wiIHN0eWxlPXt7dGV4dERlY29yYXRpb246XCJub25lXCJ9fT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2Pumaj+eslDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhlYWRlcl9saW5lXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG5cclxuICAgICAgICAgICAgICAgIDxsaSBzdHlsZT17eyBwYWRkaW5nTGVmdDogXCI0cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiUENcIiBzdHlsZT17e3RleHREZWNvcmF0aW9uOlwibm9uZVwifX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj7mloflraY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJoZWFkZXJfbGluZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvdHRvbUNvbG9yXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibHVuYm9ib3hcIj5cclxuICAgICAgICAgICAgICA8Q2Fyb3VzZWwgYXV0b3BsYXkgY2xhc3NOYW1lPVwibHVuYm9cIj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8aDMgY2xhc3NOYW1lPVwiY29udGVudFN0eWxlXCI+MTwvaDM+ICovfVxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sdW41LmpwZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMDAwXCJcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9XCIyNzBcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vLi4vc3RhdGljL2ltYWdlcy9sdW4uanBnXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2x1bjIuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2x1bjMuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCIuLi8uLi9zdGF0aWMvaW1hZ2VzL2x1bjQuanBnXCJcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMDBcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjI3MFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Nhcm91c2VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLeWvvOiIquagj+mDqOWIhue7k+adny0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdG9yZS1ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHljZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtcmlnaHRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtX2I1MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tsaXN0X3RpdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJwdWxsLWxlZnRcIj7nibnoibLmjqjojZA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodCBtb3JlX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJub3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg57q/6KOF5Y+k57GNXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWbveWtpuWPpOexjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmsJHlm73ml6fkuaZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9XCJub3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5ZCN5Lq65aKo6L+5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPVwibm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOiJuuacr+ePjeacrFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlj7LlrablhbjnsY1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS3kuabnsY3lsZXnpLrljLrln58tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tfbGlzdCBtX3QyNVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbGlzdF9ib3ggYm9va2xpc3RfaXRlbTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLnNob3d9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPCAxMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGl0ZXN0aG9tZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tLzExNzI4Ny8yMzk2NjE1MTI1L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpdGVtLmltZ1NyY30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tLzI0NDgwNC8yNTQ0NjUwNTY0L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIuabneS5puS6rembhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5pdGVtTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzI0NDgwNC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGU9XCLnkb7np4DpmIFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2p1dGlfcHJpY2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+77+lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9va19tb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tL0N4aWFuemh1YW5nL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4u5pu05aSaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0t5LiN5a656ZSZ6L+H5byA5aeLLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibV9iNTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rbGlzdF90aXRfYmlnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInB1bGwtbGVmdCBtX3IxMFwiPuS4jeWuuemUmei/hzwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdWxsLWxlZnQgdGl0X2luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVfeGllIG1fcjEwXCI+Lzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIOaWh+WPsuekvuenkeexu+eyvuWTgeaOqOiNkFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29rX2xpc3QgbV90MjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tsaXN0X2JveCBib29rbGlzdF9pdGVtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLnNob3d9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPj0gMTEgJiYgaXRlbS5pZCA8IDIxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXRlc3Rob21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5SaWdodDogXCIyOHB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpY1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vMTE3Mjg3LzIzOTY2MTUxMjUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nU3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va19uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS8yNDQ4MDQvMjU0NDY1MDU2NC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIuabneS5puS6rembhlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2hvcF9uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNDQ4MDQvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGU9XCLnkb7np4DpmIFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcm9kdWN0ZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib29ranV0aV9wcmljZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+77+lPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb29rX21vcmVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS9DeGlhbnpodWFuZy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi7mm7TlpJpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0tLS0tLS3kuI3lrrnplJnov4fnu5PmnZ8tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0t6LaF5YC85L2O5Lu35byA5aeLLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhb3poaWRpamlhIHNob3BfYm9va2xpc3QxIHRpYW96aGVuZ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXggYm9va2xpc3RfdGl0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwicHVsbC1sZWZ0XCI+6LaF5YC85L2O5Lu3PC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHVsbC1yaWdodCBtb3JlX2xpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEw5YWD5LiT5Yy6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDEwLTMw5YWD5LiT5Yy6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMwLTUw5YWD5LiT5Yy6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIOS5puexjeWxleekuuaooeWdlyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va19saXN0IG1fdDI1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2xpc3RfYm94IGJvb2tsaXN0X2l0ZW0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHt0aGlzLnByb3BzLnNob3d9ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aGlzLnByb3BzLnNob3cubWFwKChpdGVtOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uaWQgPj0gMjEgJiYgaXRlbS5pZCA8IDMxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsaXRlc3Rob21lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiMjhweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aXRlbS5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vMTE3Mjg3LzIzOTY2MTUxMjUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2l0ZW0uaW1nU3JjfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va19uYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vYm9vay5rb25nZnouY29tLzI0NDgwNC8yNTQ0NjUwNTY0L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGl0bGU9XCLmm53kuabkuq3pm4ZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLml0ZW1OYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInNob3BfbmFtZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNDQ4MDQvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aXRsZT1cIueRvuengOmYgVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2l0ZW0ucHJvZHVjdGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tqdXRpX3ByaWNlY2hhb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPu+/pTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwibG9va19tb3JlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS9DeGlhbnpodWFuZy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4u5pu05aSaXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0t6LaF5YC85L2O5Lu357uT5p2fLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm8tbW9yZS1ib3hcIj7msqEg5pyJIOabtCDlpJog5LqGPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnQtbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNob3BMZWZ0YmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3JkZXJfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyog56ys5LiA5YiX5byA5aeLICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhbGxpbmZvX2JveCBncmF5NlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIG1fcjE1IGZhLWJhbmsgaWNvbmZvbnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMTgyMTUg5a625Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fdDVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmYSBtX3IxNSBmYS1saWZlLXJpbmcgaWNvbmZvbnRcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMjEwMTAyIOWutuS5puaRilxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtX3Q1XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgbV9yMTUgZmEtYm9vayBpY29uZm9udFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA5MTQ0MDk5OSDnp43lm77kuaZcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiDnrKzkuIDliJfnu5PmnZ8gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyog56ys5LqM5YiX5byA5aeLICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtX3QzNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAg6ZSA6YeP5o6S6KGM5qacIDxzcGFuIGNsYXNzTmFtZT1cImxpbmVcIj4vPC9zcGFuPiA8YT7mm7TlpJo8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2hhbmdlX3RpdGxlX2JveCBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5vd1wiPuWRqDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIj7mnIg8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiXCI+5bm0PC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VfdGV4dCBtX3QxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS83MzEyMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmtbfkuJ3msYnlraboirjnqpdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNjUwNTAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5aKo56y65qW85ZWG5Z+OXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjMzNzAxL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWFieWSjOabuOaIv1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+NC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE5MzUzNS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmh4LlvrflloTmnKzkuabpmIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjUuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS82OTM3OC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDmt5jlrp3nlLvlu4pcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjYuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yMjkxMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlpKfoiI3oibrmnK/kuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjcuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNjIzMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDljY7ml6XkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjguPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNzc2NzUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5oKm54S25Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj45Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjY5ODYvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5LiA5b6X5Lmm6IuRXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj4xMC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzM2NjkvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6YCa6ZuF6L2pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0t5YiX6KGo5pWw5o2uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyog56ys5LqM5YiX57uT5p2fICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIOesrOS4ieWIl+W8gOWniyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibV90MzRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIOe7vOWQiOaOkuihjOamnCA8c3BhbiBjbGFzc05hbWU9XCJsaW5lXCI+Lzwvc3Bhbj4gPGE+5pu05aSaPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VfdGl0bGVfYm94IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm93XCI+5ZGoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPuaciDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIj7lubQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VfdGV4dCBtX3QxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS83MzEyMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrZTpvpnkuabnpL5BXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDIuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMTY1MDUwL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWtpuWIsOiAgeS5puW6l1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0IGNfcmVkIGJsb2RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzIzMzcwMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDlrZTpvpnmlofkvZPlhazlj7hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjQuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xOTM1MzUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6ZyA6YWN5Lmm6ZmiICjljZfkuqzkuablupcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj41Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vNjkzNzgvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg546J55Ke5Lmm5bGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj42Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjI5MTIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lid57u45LmL6Lev5pen5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj43Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjYyMzEvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5ZOl5L+p5Lmm5bGLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj44Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMTc3Njc1L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWtpuWIsOiAgeS5puWfjlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+OS48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzI2OTg2L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOWMl+S6rOW4gueZvuS4juaWh+WMluS8oOWqklxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+MTAuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8zNjY5L1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOiCsuW+t+S5puW6l1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIOesrOS4ieWIl+e7k+adnyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiDnrKzlm5vliJflvIDlp4sgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1fdDM0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz7mr4/lkajmjqjojZDmppw8L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VfdGl0bGVfYm94IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibm93XCI+5ZGoPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIlwiPuaciDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJcIj7lubQ8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIC0tLS0tLeWIl+ihqOaVsOaNriAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjaGFuZ2VfdGV4dCBtX3QxMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS83MzEyMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDotLXpmLPkupTkuYvloILkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdCBjX3JlZCBibG9kXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMi5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNjUwNTAvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lmm5LmL5aKfXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnQgY19yZWQgYmxvZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjMzNzAxL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIOiMg+eJueilv+S5puW6l1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwid19udW0gcHVsbC1sZWZ0XCI+NC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzE5MzUzNS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDluLjlt57kuIfosaHlj6Tml6fkuablupdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjUuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS82OTM3OC9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDkupTms4nmt5jkuabmlotcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjYuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yMjkxMi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDopb/mlofmtonljY5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjcuPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8yNjIzMS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDniLHojonkuablsYtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIndfbnVtIHB1bGwtbGVmdFwiPjguPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0ZXh0X2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS8xNzc2NzUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg6ZKi6ZOB6aaS5aS05LqM5Y+35bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj45Ljwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dF9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vMjY5ODYvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5b6Q6K6w5Lmm5paLXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ3X251bSBwdWxsLWxlZnRcIj4xMC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHRfYm94XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tLzM2NjkvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAg5Lqs5Ymn5Lmm5bqXXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogLS0tLS0t5YiX6KGo5pWw5o2uICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyog56ys5Zub5YiX57uT5p2fICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgey8qIOesrOS6lOWIl+W8gOWniyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG1fYm94IG1fdDUwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICDkuablupfogZTnm58gPHNwYW4gY2xhc3NOYW1lPVwibGluZVwiPi88L3NwYW4+IDxhPuabtOWkmjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjMyMTA8L3NwYW4+5YyX5Lqs5biCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjg1MDwvc3Bhbj7kuIrmtbfluIJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+NDEwPC9zcGFuPuWkqea0peW4glxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4yMzY8L3NwYW4+6YeN5bqG5biCXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjQ5NDwvc3Bhbj7lronlvr3nnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MzE1PC9zcGFuPuemj+W7uuecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4yMDA8L3NwYW4+55SY6IKD55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjg3MDwvc3Bhbj7lub/kuJznnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MTgwPC9zcGFuPuW5v+ilv1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj43OTwvc3Bhbj7otLXlt57nnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MzQ8L3NwYW4+5rW35Y2X55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjEyNTc8L3NwYW4+5rKz5YyX55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjg5OTwvc3Bhbj7msrPljZfnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MzIzPC9zcGFuPum7kem+meaxn+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj41OTM8L3NwYW4+5rmW5YyX55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjQwMTwvc3Bhbj7muZbljZfnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJwdWxsLXJpZ2h0XCI+MzI2PC9zcGFuPuWQieael+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4xMTU2PC9zcGFuPuaxn+iLj+ecgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInB1bGwtcmlnaHRcIj4yOTM8L3NwYW4+5rGf6KW/55yBXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicHVsbC1yaWdodFwiPjcwNjwvc3Bhbj7ovr3lroHnnIFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7Lyog56ys5LqU5YiX57uT5p2fICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0t5Li75L2T57uT5p2fLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICAgIHsvKiDlupXpg6jlvIDlp4sgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLWJveFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXAgY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvcHlyaWdodC1pbmZvLWJveFwiPsKpIDIwMDItMjAyMSAgS29uZ2Z6LmNvbSDlrZTlrZDml6fkuabnvZEgIOeJiOadg+aJgOaciTwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluay1ib3hcIj5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9oZWxwL2Fib3V0dXMucGhwXCI+5YWz5LqO5a2U572RPC9hPlxyXG4gICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJpdGVtXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9mb2xsb3dcIiBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL2hlbHAvbGlhbnhpLmh0bWxcIj7ogZTns7vmiJHku6w8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwOi8vaGVscC5rb25nZnouY29tL1wiPuW4ruWKqeS4reW/gzwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vZm9sbG93XCIgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9oZWxwL2NvcHlyaWdodC5waHBcIj7niYjmnYPpmpDnp4E8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC9ndWFuZ2dhby5waHBcIj7lub/lkYrkuJrliqE8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub2ZvbGxvd1wiIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vaGVscC96aGFvcGluLnBocFwiPuW3peS9nOacuuS8mjwvYT5cclxuICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiaXRlbVwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwczovL20ua29uZ2Z6LmNvbS9cIj7np7vliqjniYg8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL2Jvb2sua29uZ2Z6LmNvbS9cIj7lm77kuabnm67lvZU8L2E+XHJcbiAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIml0ZW1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiaHR0cDovL2JxLmtvbmdmei5jb20vXCI+5Zu+5Lmm5qCH562+PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIHsvKiDlupXpg6jnu5PmnZ8gKi99XHJcbiAgICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9ib2R5PlxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICA8L0xheW91dD5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcblxyXG4vLyBJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ub3ZlbHRhYmxlXCIpO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuLy8gICBsZXQgbm92ZWxzaG93O1xyXG4vLyAgIHJldHVybiB7IHNob3c6IGRhdGEgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXhQYWdlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaXNvbW9ycGhpYy11bmZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdHlsZWQtanN4L3N0eWxlXCIpOyJdLCJzb3VyY2VSb290IjoiIn0=