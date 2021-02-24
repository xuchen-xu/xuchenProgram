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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/newbook.tsx");
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

/***/ "./node_modules/antd/lib/button/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/button/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/button/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/button/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/button/style/index.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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

/***/ "./node_modules/antd/lib/dropdown/style/css.js":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/style/css.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/dropdown/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/dropdown/style/index.css":
/*!********************************************************!*\
  !*** ./node_modules/antd/lib/dropdown/style/index.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/menu/style/css.js":
/*!*************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/css.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/menu/style/index.css");

__webpack_require__(/*! ../../tooltip/style/css */ "./node_modules/antd/lib/tooltip/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/menu/style/index.css":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/menu/style/index.css ***!
  \****************************************************/
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

/***/ "./node_modules/antd/lib/tooltip/style/css.js":
/*!****************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/css.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/tooltip/style/index.css");

/***/ }),

/***/ "./node_modules/antd/lib/tooltip/style/index.css":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/tooltip/style/index.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/home.css":
/*!****************************!*\
  !*** ./pages/css/home.css ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/css/home.less":
/*!*****************************!*\
  !*** ./pages/css/home.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
	"shortcut": "_1819GUsQ54wwZKp3gV0vIR",
	"headerWrap": "SI0OXRbjyJlx3bWECTNR_",
	"sloganBox": "_2e51zJGMY6P89WGANg2qlk",
	"text": "_2WZtgv7PcLWeOjqbxYsyol",
	"userinfobox": "_2Axftv4XlsdltNSjZsCGDz",
	"itemInfo": "_3oeLBES3Dgd-IE2rRjXQC9",
	"infoNormal": "_2C-3W1LEyKiibYVhgEl3hi",
	"infoText": "_3BAJai7VfXzmBNDKPtx1E0",
	"infoLink": "_2pRqJ7qkEjFXtM4Ao1luq7",
	"clearfix": "_3tZ77rcE6HFpVkB-0dFEqU",
	"tubiao": "_1q55d9TC5w661SpL4xMk34"
};

/***/ }),

/***/ "./pages/newbook.tsx":
/*!***************************!*\
  !*** ./pages/newbook.tsx ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IndexPage; });
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/carousel/style/css */ "./node_modules/antd/lib/carousel/style/css.js");
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/dropdown/style/css */ "./node_modules/antd/lib/dropdown/style/css.js");
/* harmony import */ var antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown_style_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/dropdown */ "antd/lib/dropdown");
/* harmony import */ var antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/menu/style/css */ "./node_modules/antd/lib/menu/style/css.js");
/* harmony import */ var antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu_style_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/menu */ "antd/lib/menu");
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _css_home_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./css/home.less */ "./pages/css/home.less");
/* harmony import */ var _css_home_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_css_home_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./css/home.css */ "./pages/css/home.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_home_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11__);






var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\newbook.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import Link from 'next/link'
 // import { withRouter } from "next/router";

 // import { useEffect } from "react";
// import { Button } from 'antd';
//开启css模块化之后可以这样使用样式
// import cssobj from './index.less'





const {
  SubMenu
} = antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a; // 声明的全局数据

const menu1 = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23,
    columnNumber: 3
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }
}, __jsx("a", {
  target: "_blank",
  rel: "noopener noreferrer" // href="http://www.alipay.com/"
  ,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 7
  }
}, "\u6211\u7684\u597D\u53CB")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33,
    columnNumber: 5
  }
}, __jsx("a", {
  target: "_blank",
  rel: "noopener noreferrer" // href="http://www.taobao.com/"
  ,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 7
  }
}, "\u8D44\u91D1\u8D26\u6237")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }
}, __jsx("a", {
  target: "_blank",
  rel: "noopener noreferrer",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 7
  }
}, "\u56FE\u4E66\u6536\u85CF")), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  danger: true,
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }
}, "\u62CD\u5356\u4EA4\u6613"));

const menu2 = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 3
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.ItemGroup, {
  title: "\u5E97\u94FA",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 7
  }
}, "\u514D\u8D39\u6446\u5730\u644A"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 7
  }
}, "\u7533\u8BF7\u5F00\u5E97")), __jsx(SubMenu, {
  title: "\u62CD\u5356",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57,
    columnNumber: 5
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58,
    columnNumber: 7
  }
}, "\u7533\u8BF7\u62CD\u5356\u4F1A\u5458"), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.Item, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 7
  }
}, "\u62CD\u5356\u4FE1\u606F")));

const menu3 = __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69,
    columnNumber: 3
  }
}, __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.ItemGroup, {
  title: "APP\u5BA2\u6237\u7AEF",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70,
    columnNumber: 5
  }
}), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.ItemGroup, {
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 5
  }
}, __jsx("img", {
  src: "../static/images/app.jpg",
  width: "150",
  height: "150",
  style: {
    marginRight: "10px",
    marginLeft: "10px"
  },
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76,
    columnNumber: 21
  }
})), __jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_5___default.a.ItemGroup, {
  title: "iOS \u2022 Android",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }
})); // 声明的全局数据


var imgnumber = 0;
class IndexPage extends react__WEBPACK_IMPORTED_MODULE_7___default.a.Component {
  static async getInitialProps() {
    const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_11___default()("http://localhost:3001/essaytable");
    const show = await res.json(); //这边返回的数据会被挂载到组件的props中

    return {
      show
    };
  }

  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", e => {
      this.setState({
        selected: !this.state.selected
      }, () => {
        if (!this.state.selected) {// this.clearAll();
        }
      });
    });

    _defineProperty(this, "rightBtnStyle", {
      display: "block",
      color: "blue"
    });

    _defineProperty(this, "rightBtnStyle2", {
      display: "none",
      color: "red"
    });

    this.state = {
      selected: false
    };
  }

  render() {
    var currentstyle;

    if (this.state.selected) {
      currentstyle = this.rightBtnStyle2;
    } else {
      currentstyle = this.rightBtnStyle;
    }

    return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      title: "\u9996\u9875",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125,
        columnNumber: 7
      }
    }, __jsx("header", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.shortcut,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.headerWrap,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.sloganBox,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 129,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.text,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 17
      }
    }, "\u7F51\u7F57\u5929\u4E0B\u56FE\u4E66"), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131,
        columnNumber: 17
      }
    }, "\u4F20\u627F\u4E2D\u534E\u6587\u660E"))), __jsx("div", {
      className: [_css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.userinfobox, _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.clearfix].join(" "),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 136,
        columnNumber: 15
      }
    }, __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoNormal,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 137,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 138,
        columnNumber: 19
      }
    }, "\u767B\u5F55"), __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 139,
        columnNumber: 19
      }
    }, "/"), __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 140,
        columnNumber: 19
      }
    }, "\u6CE8\u518C"))), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 150,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "http://cart.kongfz.com/list",
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoLink,
      target: "_blank",
      rel: "nofollow",
      style: {
        color: "#fff"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 151,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: ["fa", "fa-shopping-cart", _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.tubiao].join(" "),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 158,
        columnNumber: 19
      }
    }), __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 19
      }
    }, "\u8D2D\u7269\u8F66"))), __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      overlay: menu1,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 166,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/buyer/order/order_list.html",
      className: [_css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoLink, "ant-dropdown-link"].join(" "),
      target: "_blank",
      rel: "nofollow",
      onClick: e => e.preventDefault(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 168,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 175,
        columnNumber: 21
      }
    }, "\u4E2A\u4EBA\u4E2D\u5FC3")))), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 181,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/buyer/order/order_list.html",
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoLink,
      target: "_blank",
      rel: "nofollow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 182,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 188,
        columnNumber: 19
      }
    }, "\u6211\u7684\u8BA2\u5355"))), __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      overlay: menu2,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 191,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 192,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/buyer/order/order_list.html",
      className: [_css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoLink, "ant-dropdown-link"].join(" "),
      target: "_blank",
      rel: "nofollow",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 193,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 199,
        columnNumber: 21
      }
    }, "\u5356\u5BB6\u4E2D\u5FC3")))), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/buyer/order/order_list.html",
      className: [_css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoLink, "ant-dropdown-link"].join(" "),
      target: "_blank",
      rel: "nofollow",
      onClick: e => e.preventDefault(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 204,
        columnNumber: 17
      }
    }, __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 211,
        columnNumber: 19
      }
    }, "\u5BA2\u670D"))), __jsx(antd_lib_dropdown__WEBPACK_IMPORTED_MODULE_3___default.a, {
      overlay: menu3,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }
    }, __jsx("a", {
      href: "http://shop.kongfz.com/buyer/order/order_list.html",
      className: [_css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoLink, "ant-dropdown-link"].join(" "),
      target: "_blank",
      rel: "nofollow",
      onClick: e => e.preventDefault(),
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 19
      }
    }, __jsx("span", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.infoText,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 224,
        columnNumber: 21
      }
    }, "\u624B\u673A\u7248")))), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 228,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 229,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 230,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 231,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 232,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 233,
        columnNumber: 15
      }
    }), __jsx("div", {
      className: _css_home_less__WEBPACK_IMPORTED_MODULE_8___default.a.itemInfo,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 234,
        columnNumber: 15
      }
    })))), __jsx("div", {
      className: "container clear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 239,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "nov-fir clear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 240,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "code",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 241,
        columnNumber: 13
      }
    })), __jsx("div", {
      className: "dbg",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 243,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "nov-primary clear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 244,
        columnNumber: 13
      }
    }, "\u65B0\u4E66\u8D44\u8BAF"), __jsx("div", {
      className: "nov-sec",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 245,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "novel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 246,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "/novel",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 17
      }
    }, "\u5C0F\u8BF4")), __jsx("div", {
      className: "essay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 249,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "/essay",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 17
      }
    }, "\u6563\u6587")), __jsx("div", {
      className: "poetry",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "/prose",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 17
      }
    }, "\u968F\u7B14")), __jsx("div", {
      className: "work",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 255,
        columnNumber: 15
      }
    }, __jsx("a", {
      href: "/literature",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 256,
        columnNumber: 17
      }
    }, "\u6587\u5B66")))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 262,
        columnNumber: 11
      }
    }, __jsx(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
      autoplay: true,
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 263,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 264,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "../static/lunbo/lun0.jpg",
      width: "1200",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 266,
        columnNumber: 15
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 268,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "../static/lunbo/lun11.jpg",
      width: "1200",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 269,
        columnNumber: 15
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 271,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "../static/lunbo/lun2.jpg",
      width: "1200",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 272,
        columnNumber: 15
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 274,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "../static/lunbo/lun3.jpg",
      width: "1200",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 275,
        columnNumber: 15
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 277,
        columnNumber: 13
      }
    }, __jsx("img", {
      src: "../static/lunbo/lun4.jpg",
      width: "1200",
      height: "270",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 278,
        columnNumber: 15
      }
    })))), __jsx("div", {
      className: "nov-for clear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 286,
        columnNumber: 11
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 287,
        columnNumber: 13
      }
    }, "\u65B0\u4E66\u901F\u9012"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 288,
        columnNumber: 13
      }
    }, "\u66F4\u591A\xBB")), __jsx("div", {
      className: "nov-fif clear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 11
      }
    }, this.props.show.map(item => {
      imgnumber++;

      if (imgnumber < 22) {
        return __jsx("div", {
          key: item.bookId,
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 296,
            columnNumber: 19
          }
        }, __jsx("img", {
          src: `../static/images/image/${item.imgPath}`,
          width: "115",
          height: "172",
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 21
          }
        }), item.bookName, __jsx("div", {
          __self: this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 303,
            columnNumber: 21
          }
        }, "\u4F5C\u8005:", item.author));
      }
    })), __jsx("div", {
      className: "nov-cal clear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 311,
        columnNumber: 11
      }
    }, __jsx("img", {
      src: "../static/images/mulu.jpg",
      width: "675",
      height: "120",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 312,
        columnNumber: 13
      }
    })), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 314,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "book-news clear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 315,
        columnNumber: 13
      }
    }, "\u56FE\u4E66\u8D44\u8BAF"), __jsx("div", {
      className: "book-news-content clear",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 316,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "bluetext",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 317,
        columnNumber: 15
      }
    }, "\u5B54\u7F51\u4E00\u5468\u65B0\u4E66\u901F\u9012\uFF5C\u9648\u6625\u6210\u9996\u90E8\u77ED\u7BC7\u5C0F\u8BF4\u96C6\uFF0C\u5448\u73B0\u6C49\u8BED\u5C0F\u8BF4\u7684\u4E00\u79CD\u98CE\u5EA6\u4E0E\u65B0\u7684\u53EF\u80FD\u6027"), __jsx("div", {
      className: "graytext",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 320,
        columnNumber: 15
      }
    }, "\u8BFB\u4E66\u63A8\u8350"), __jsx("div", {
      className: "blacktext",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 321,
        columnNumber: 15
      }
    }, "\u865A\u6784\u7C7B *\u7279\u522B\u63A8\u8350\u4EFF\u4F5B\u9E1F\u6816\u6811\uFF0C\u9C7C\u6F5C\u6E0A\uFF0C\u4E00\u5207\u7A33\u59A5\u53C8\u5B89\u5B81\uFF0C\u591C\u665A\u8FD9\u624D\u771F\u6B63\u5730\u964D\u4E34\u3002 \u300A\u591C\u665A\u7684\u6F5C\u6C34\u8247\u300B\u662F\u4F5C\u5BB6\u9648\u6625\u6210\u7684\u9996\u90E8\u77ED\u7BC7\u5C0F\u8BF4\u96C6\u3002\u4E5D\u4E2A\u6545\u4E8B\uFF0C\u7B14\u950B\u6E38\u8D70\u4E8E\u65E7\u5C71\u6CB3\u4E0E\u672A\u77E5\u5B87\u5B99\u95F4\uFF0C\u4EE5\u7470\u5947\u98D8\u626C\u7684\u60F3\u8C61\u3001\u6E29\u539A\u6E05\u5E7D\u7684\u7B14\u6CD5\uFF0C \u5728\u73B0\u5B9E\u4E0E\u5E7B\u5883\u95F4\u8F9F\u5F00\u82E5\u5E72\u6761\u79D8\u5BC6\u7684\u901A\u9053\uFF1A\u6D77\u5E95\u6F2B\u6E38\u7684\u5C11\u5E74\u3001\u6DF1\u5C71\u9057\u843D\u7684\u53E4\u7891\u3001\u5F25\u6563\u5165\u4E07\u7269\u7684\u5B57\u53E5\u3001\u4E91\u5F69\u4FEE\u526A\u7AD9\u3001\u94F8\u5251\u4E0E\u917F\u9152\u3001\u94C1\u5E55\u4E0B\u7684\u8428\u514B\u65AF\u3001\u84DD\u9CB8\u5185\u7684\u6F14\u594F\u5385\u2026\u2026")))), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 331,
        columnNumber: 9
      }
    }, __jsx("div", {
      className: "most-like",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 332,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "like",
      style: {
        marginLeft: 168
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 333,
        columnNumber: 13
      }
    }, "\u6700\u53D7\u5173\u6CE8\u56FE\u4E66\u699C"), __jsx("div", {
      className: "like1",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 336,
        columnNumber: 13
      }
    }, __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 337,
        columnNumber: 15
      }
    }, "\u865A\u6784\u7C7B\xBB"), __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 338,
        columnNumber: 15
      }
    }, "\u975E\u865A\u6784\u7C7B\xBB"))), __jsx("div", {
      className: "like-content clear",
      style: {
        marginLeft: 250
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 341,
        columnNumber: 11
      }
    }, this.props.show.map(item => {
      // let grade = item.grade;
      if (item.bookId < 32 && item.bookId > 22) {
        if (item.grade < 9) {
          return __jsx("div", {
            key: item.bookId,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 347,
              columnNumber: 21
            }
          }, __jsx("img", {
            src: `../static/images/image/${item.imgPath}`,
            width: "85",
            height: "120",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 348,
              columnNumber: 23
            }
          }), __jsx("br", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 353,
              columnNumber: 23
            }
          }), __jsx("div", {
            className: "bk clear",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 354,
              columnNumber: 23
            }
          }, __jsx("div", {
            className: "bookname",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 355,
              columnNumber: 25
            }
          }, item.bookName), __jsx("br", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 356,
              columnNumber: 25
            }
          }), __jsx("div", {
            className: "dbgrade",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 357,
              columnNumber: 25
            }
          }, __jsx("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 358,
              columnNumber: 27
            }
          }, "\u8BC4\u5206\uFF1A"), __jsx("div", {
            className: "cl",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 359,
              columnNumber: 27
            }
          }, __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 360,
              columnNumber: 29
            }
          }, __jsx("div", {
            className: "grade",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 361,
              columnNumber: 31
            }
          }, item.grade), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 362,
              columnNumber: 31
            }
          }), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 367,
              columnNumber: 31
            }
          }), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 372,
              columnNumber: 31
            }
          }), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 377,
              columnNumber: 31
            }
          })))), __jsx("div", {
            className: "bookau",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 385,
              columnNumber: 25
            }
          }, "\u4F5C\u8005:", item.author), __jsx("br", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 386,
              columnNumber: 25
            }
          })));
        } else {
          return __jsx("div", {
            key: item.bookId,
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 392,
              columnNumber: 21
            }
          }, __jsx("img", {
            src: `../static/images/image/${item.imgPath}`,
            width: "85",
            height: "120",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 393,
              columnNumber: 23
            }
          }), __jsx("br", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 398,
              columnNumber: 23
            }
          }), __jsx("div", {
            className: "bk clear",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 399,
              columnNumber: 23
            }
          }, __jsx("div", {
            className: "bookname",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 400,
              columnNumber: 25
            }
          }, item.bookName), __jsx("br", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 401,
              columnNumber: 25
            }
          }), __jsx("div", {
            className: "dbgrade",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 402,
              columnNumber: 25
            }
          }, __jsx("div", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 403,
              columnNumber: 27
            }
          }, "\u8BC4\u5206\uFF1A"), __jsx("div", {
            className: "cl",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 404,
              columnNumber: 27
            }
          }, __jsx(react__WEBPACK_IMPORTED_MODULE_7___default.a.Fragment, {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 405,
              columnNumber: 29
            }
          }, __jsx("div", {
            className: "grade",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 406,
              columnNumber: 31
            }
          }, item.grade), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 407,
              columnNumber: 31
            }
          }), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 412,
              columnNumber: 31
            }
          }), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 417,
              columnNumber: 31
            }
          }), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 422,
              columnNumber: 31
            }
          }), __jsx("img", {
            src: "../static/images/image/star1.png",
            height: "11",
            width: "11",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 427,
              columnNumber: 31
            }
          })))), __jsx("div", {
            className: "bookau",
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 435,
              columnNumber: 25
            }
          }, "\u4F5C\u8005:", item.author), __jsx("br", {
            __self: this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 436,
              columnNumber: 25
            }
          })));
        }
      }
    }))), __jsx("footer", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 446,
        columnNumber: 9
      }
    }, __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 447,
        columnNumber: 11
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 448,
        columnNumber: 11
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 449,
        columnNumber: 11
      }
    }), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 450,
        columnNumber: 11
      }
    }), __jsx("div", {
      className: "content",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 451,
        columnNumber: 11
      }
    }, __jsx("div", {
      className: "friend_link_box",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 452,
        columnNumber: 13
      }
    }, __jsx("div", {
      className: "friend_link_tit clearfix",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 453,
        columnNumber: 15
      }
    }, __jsx("a", {
      style: {
        textDecoration: "none"
      },
      className: "now",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 454,
        columnNumber: 17
      }
    }, "\u5408\u4F5C\u4F19\u4F34"), __jsx("a", {
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 458,
        columnNumber: 17
      }
    }, "\u53CB\u60C5\u94FE\u63A5"), __jsx("a", {
      style: {
        textDecoration: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 462,
        columnNumber: 17
      }
    }, "\u63A8\u8350\u4E13\u9898")), __jsx("div", {
      className: "friend_link_list clearfix m_t10",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 467,
        columnNumber: 15
      }
    }, __jsx("div", {
      className: "f_box",
      style: {
        display: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 468,
        columnNumber: 17
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 469,
        columnNumber: 19
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 470,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://history.sohu.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 471,
        columnNumber: 23
      }
    }, "\u641C\u72D0\u5386\u53F2")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 479,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.xilu.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 480,
        columnNumber: 23
      }
    }, "\u897F\u9646\u519B\u4E8B\u7F51")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 488,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.koolearn.com",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 489,
        columnNumber: 23
      }
    }, "\u65B0\u4E1C\u65B9\u5728\u7EBF")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 497,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kaoyan.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 498,
        columnNumber: 23
      }
    }, "\u8003\u7814\u5E2E")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 506,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.banbijiang.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 507,
        columnNumber: 23
      }
    }, "\u534A\u58C1\u6C5F\u4E2D\u6587\u7F51")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 515,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.tianyancha.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 516,
        columnNumber: 23
      }
    }, "\u5929\u773C\u67E5")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 524,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.zjguji.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 525,
        columnNumber: 23
      }
    }, "\u6D59\u6C5F\u53E4\u7C4D\u51FA\u7248\u793E")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 533,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.tuniu.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 534,
        columnNumber: 23
      }
    }, "\u9014\u725B\u65C5\u6E38\u7F51")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.cmr.com.cn/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 543,
        columnNumber: 23
      }
    }, "\u7F51\u7EDC\u6559\u80B2")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 551,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.rongbaozhai.cn/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 552,
        columnNumber: 23
      }
    }, "\u8363\u5B9D\u658B")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 560,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.ooopic.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 561,
        columnNumber: 23
      }
    }, "\u6211\u56FE\u7F51")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 569,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.hjenglish.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 570,
        columnNumber: 23
      }
    }, "\u6CAA\u6C5F\u82F1\u8BED")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 578,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.ximalaya.com/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 579,
        columnNumber: 23
      }
    }, "\u6709\u58F0\u5C0F\u8BF4")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 587,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://book.kongfz.com/newbook/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 588,
        columnNumber: 23
      }
    }, "\u6BCF\u65E5\u4E0A\u4E66")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 596,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.zashuguan.cn/",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 597,
        columnNumber: 23
      }
    }, "\u6742\u4E66\u9986")), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 605,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/community/links.php",
      target: "_blank",
      className: "black333",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 606,
        columnNumber: 23
      }
    }, "\u66F4\u591A\u53CB\u94FE >>")))), __jsx("div", {
      className: "f_box",
      style: {
        display: "none"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 616,
        columnNumber: 17
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 617,
        columnNumber: 19
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 618,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.cn/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 619,
        columnNumber: 23
      }
    }, "\u62CD\u5356\u7F51\u7AD9"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 623,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.smzdm.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 624,
        columnNumber: 23
      }
    }, "\u4EC0\u4E48\u503C\u5F97\u4E70"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 628,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.qcc.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 629,
        columnNumber: 23
      }
    }, "\u4F01\u67E5\u67E5"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 633,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://book.tiexue.net/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 634,
        columnNumber: 23
      }
    }, "\u519B\u4E8B\u8BFB\u4E66"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 638,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.canet.com.cn/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 23
      }
    }, "\u4E2D\u56FD\u4F1A\u8BA1\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 643,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.huatu.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 644,
        columnNumber: 23
      }
    }, "\u516C\u52A1\u5458\u8003\u8BD5\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 648,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kekenet.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 649,
        columnNumber: 23
      }
    }, "\u53EF\u53EF\u82F1\u8BED"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 653,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.02516.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 654,
        columnNumber: 23
      }
    }, "\u7F51\u5740\u5BFC\u822A"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 658,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.bookschina.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 659,
        columnNumber: 23
      }
    }, "\u4E2D\u56FD\u56FE\u4E66\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 663,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.63243.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 664,
        columnNumber: 23
      }
    }, "\u7F51\u5740\u5927\u5168"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 668,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.zhipin.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 669,
        columnNumber: 23
      }
    }, "\u62DB\u8058\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 673,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.jmw.com.cn/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 674,
        columnNumber: 23
      }
    }, "\u52A0\u76DF"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 678,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.qianlima.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 679,
        columnNumber: 23
      }
    }, "\u5343\u91CC\u9A6C\u62DB\u6295\u6807"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 683,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.chexun.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 684,
        columnNumber: 23
      }
    }, "\u8F66\u8BAF\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 688,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.cifnews.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 689,
        columnNumber: 23
      }
    }, "\u8DE8\u5883\u7535\u5546"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 693,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.ebrun.com",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 23
      }
    }, "\u4EBF\u90A6\u52A8\u529B\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 698,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.aoshu.com",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 699,
        columnNumber: 23
      }
    }, "\u5965\u6570"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 703,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.959.cn/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 704,
        columnNumber: 23
      }
    }, "959\u54C1\u724C\u5546\u673A\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 708,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.51bi.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 709,
        columnNumber: 23
      }
    }, "\u8FD4\u5229\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 713,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.southmoney.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 714,
        columnNumber: 23
      }
    }, "\u80A1\u7968"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 718,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.lvye.cn/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 719,
        columnNumber: 23
      }
    }, "\u7EFF\u91CE\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 723,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.wed114.cn/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 724,
        columnNumber: 23
      }
    }, "wed114\u7ED3\u5A5A\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 728,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.zbird.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 729,
        columnNumber: 23
      }
    }, "\u94BB\u77F3\u5C0F\u9E1F"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.zhifang.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 734,
        columnNumber: 23
      }
    }, "\u667A\u623F\u65C5\u6E38\u5730\u4EA7"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 738,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.zhulong.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 739,
        columnNumber: 23
      }
    }, "\u5EFA\u7B51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 743,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.anzhi.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 744,
        columnNumber: 23
      }
    }, "\u5B89\u5353\u5E02\u573A"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 748,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://office.fang.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 749,
        columnNumber: 23
      }
    }, "\u5317\u4EAC\u5199\u5B57\u697C\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 753,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://www.kanzhun.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 754,
        columnNumber: 23
      }
    }, "\u770B\u51C6\u7F51"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 758,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.rbz1672.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 759,
        columnNumber: 23
      }
    }, "\u8363\u5B9D\u658B\u5728\u7EBF"), " "))), __jsx("div", {
      className: "f_box",
      style: {
        display: "block"
      },
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 17
      }
    }, __jsx("ul", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 766,
        columnNumber: 19
      }
    }, __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 767,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://bq.kongfz.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 768,
        columnNumber: 23
      }
    }, "\u56FE\u4E66\u5927\u5168"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 772,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/topic/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 773,
        columnNumber: 23
      }
    }, "\u70ED\u641C\u4E13\u9898"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 777,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 778,
        columnNumber: 23
      }
    }, "\u51FA\u7248\u793E\u5927\u5168"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 785,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 786,
        columnNumber: 23
      }
    }, "\u4F5C\u5BB6\u5927\u5168"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 790,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "https://shoushu.kongfz.com/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 791,
        columnNumber: 23
      }
    }, "\u4E0A\u95E8\u6536\u4E66"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 795,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/kexuechubanshe/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 796,
        columnNumber: 23
      }
    }, "\u79D1\u5B66\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 803,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/qinghuadaxue/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 804,
        columnNumber: 23
      }
    }, "\u6E05\u534E\u5927\u5B66\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 811,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/zhongguobiaozhun/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 812,
        columnNumber: 23
      }
    }, "\u4E2D\u56FD\u6807\u51C6\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 819,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/dianzigongye/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 820,
        columnNumber: 23
      }
    }, "\u7535\u5B50\u5DE5\u4E1A\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 827,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/huaxuegongye/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 828,
        columnNumber: 23
      }
    }, "\u5316\u5B66\u5DE5\u4E1A\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 835,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/beijingdaxuechubanshe/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 836,
        columnNumber: 23
      }
    }, "\u5317\u4EAC\u5927\u5B66\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 843,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/renminweisheng/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 844,
        columnNumber: 23
      }
    }, "\u4EBA\u6C11\u536B\u751F\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 851,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/zhongguojianzhugongye/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 852,
        columnNumber: 23
      }
    }, "\u4E2D\u56FD\u5EFA\u7B51\u5DE5\u4E1A\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 859,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/zhongguorenmindaxue/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 860,
        columnNumber: 23
      }
    }, "\u4E2D\u56FD\u4EBA\u6C11\u5927\u5B66\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 867,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/shangwuyinshuguan",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 868,
        columnNumber: 23
      }
    }, "\u5546\u52A1\u5370\u4E66\u9986"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 875,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/zhongguotiedao/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 876,
        columnNumber: 23
      }
    }, "\u4E2D\u56FD\u94C1\u9053\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 883,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/renminchubanshe/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 884,
        columnNumber: 23
      }
    }, "\u4EBA\u6C11\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 891,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/zhongguodianli/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 892,
        columnNumber: 23
      }
    }, "\u4E2D\u56FD\u7535\u529B\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 899,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/zhonghuashuju/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 900,
        columnNumber: 23
      }
    }, "\u4E2D\u534E\u4E66\u5C40"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 907,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/falvchubanshe/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 908,
        columnNumber: 23
      }
    }, "\u6CD5\u5F8B\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 915,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/gaodengjiaoyu/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 916,
        columnNumber: 23
      }
    }, "\u9AD8\u7B49\u6559\u80B2\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 923,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/publisher/jixiegongye/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 924,
        columnNumber: 23
      }
    }, "\u673A\u68B0\u5DE5\u4E1A\u51FA\u7248\u793E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 931,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/jinyong/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 932,
        columnNumber: 23
      }
    }, "\u91D1\u5EB8"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 939,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/cunshangchunshu/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 940,
        columnNumber: 23
      }
    }, "\u6751\u4E0A\u6625\u6811"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 947,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/maodun/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 948,
        columnNumber: 23
      }
    }, "\u8305\u76FE"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 955,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/zhangxiaoxian/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 956,
        columnNumber: 23
      }
    }, "\u5F20\u5C0F\u5A34"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 963,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/wangxiaobo/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 964,
        columnNumber: 23
      }
    }, "\u738B\u5C0F\u6CE2"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 971,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/laoshe/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 972,
        columnNumber: 23
      }
    }, "\u8001\u820D"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 979,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/moyan/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 980,
        columnNumber: 23
      }
    }, "\u83AB\u8A00"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 987,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/luxun/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 988,
        columnNumber: 23
      }
    }, "\u9C81\u8FC5"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 995,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/j-k-luolin/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 996,
        columnNumber: 23
      }
    }, "J.K.\u7F57\u7433"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1003,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/zhangailing/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1004,
        columnNumber: 23
      }
    }, "\u5F20\u7231\u73B2"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1011,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/yuhua/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1012,
        columnNumber: 23
      }
    }, "\u4F59\u534E"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1019,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/qiongyao/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1020,
        columnNumber: 23
      }
    }, "\u743C\u7476"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1027,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/zhangdaqian/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1028,
        columnNumber: 23
      }
    }, "\u5F20\u5927\u5343"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1035,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/xubeihong/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1036,
        columnNumber: 23
      }
    }, "\u5F90\u60B2\u9E3F"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1043,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/dafenqi/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1044,
        columnNumber: 23
      }
    }, "\u8FBE\u82AC\u5947"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1051,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/annibaobei/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1052,
        columnNumber: 23
      }
    }, "\u5B89\u59AE\u5B9D\u8D1D"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1059,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/bingxin/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1060,
        columnNumber: 23
      }
    }, "\u51B0\u5FC3"), " "), __jsx("li", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1067,
        columnNumber: 21
      }
    }, __jsx("a", {
      href: "http://www.kongfz.com/writer/haiyan/",
      target: "_blank",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1068,
        columnNumber: 23
      }
    }, "\u6D77\u5CA9"), " ")))))), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1080,
        columnNumber: 11
      }
    }, "\xA9 2020\uFF0D2020 baofu.com, all rights reserved \u5B54\u5B50\u65E7\u4E66\u7F51"), __jsx("br", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1081,
        columnNumber: 11
      }
    }), __jsx("span", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 1082,
        columnNumber: 11
      }
    }, "\u8054\u7CFB\u6211\u4EEC xinguan@weibo.com")));
  }

} // const IndexPage = (props: any) => {
//   let [state, setState] = useState(false);
//  let handleClick = (e:any) => {
// }
//   // console.log(props);
//   return (
//
//   );
// };
//getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行
// IndexPage.getInitialProps = async () => {
//   const res = await fetch("http://localhost:3001/api/essaytable");
//   const data = await res.json();
//   //这边返回的数据会被挂载到组件的props中
//   return { show: data };
// };
// http://localhost:3001/api/noveltable
// IndexPage.getInitialProps = async () => {
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

/***/ "antd/lib/dropdown":
/*!************************************!*\
  !*** external "antd/lib/dropdown" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),

/***/ "antd/lib/menu":
/*!********************************!*\
  !*** external "antd/lib/menu" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYXJvdXNlbC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL2Ryb3Bkb3duL3N0eWxlL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYW50ZC9saWIvbWVudS9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3Rvb2x0aXAvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2Nzcy9ob21lLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvbmV3Ym9vay50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvY2Fyb3VzZWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9kcm9wZG93blwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFudGQvbGliL21lbnVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLXVuZmV0Y2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0eWxlZC1qc3gvc3R5bGVcIiJdLCJuYW1lcyI6WyJMYXlvdXQiLCJjaGlsZHJlbiIsInRpdGxlIiwiU3ViTWVudSIsIm1lbnUxIiwibWVudTIiLCJtZW51MyIsIm1hcmdpblJpZ2h0IiwibWFyZ2luTGVmdCIsImltZ251bWJlciIsIkluZGV4UGFnZSIsIlJlYWN0IiwiQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZmV0Y2giLCJzaG93IiwianNvbiIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJlIiwic2V0U3RhdGUiLCJzZWxlY3RlZCIsInN0YXRlIiwiZGlzcGxheSIsImNvbG9yIiwicmVuZGVyIiwiY3VycmVudHN0eWxlIiwicmlnaHRCdG5TdHlsZTIiLCJyaWdodEJ0blN0eWxlIiwiY3Nzb2JqIiwic2hvcnRjdXQiLCJoZWFkZXJXcmFwIiwic2xvZ2FuQm94IiwidGV4dCIsInVzZXJpbmZvYm94IiwiY2xlYXJmaXgiLCJqb2luIiwiaXRlbUluZm8iLCJpbmZvTm9ybWFsIiwiaW5mb1RleHQiLCJpbmZvTGluayIsInR1YmlhbyIsInByZXZlbnREZWZhdWx0IiwibWFwIiwiaXRlbSIsImJvb2tJZCIsImltZ1BhdGgiLCJib29rTmFtZSIsImF1dGhvciIsImdyYWRlIiwidGV4dERlY29yYXRpb24iXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7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O0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsRUFNTyxHQU5QLENBckRGLEVBNkRFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsRUFNTyxHQU5QLENBN0RGLEVBcUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyx3REFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsRUFNTyxHQU5QLENBckVGLEVBNkVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxpREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsRUFNTyxHQU5QLENBN0VGLEVBcUZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyx3REFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBREYsRUFNTyxHQU5QLENBckZGLEVBNkZFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxzREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0VBREYsRUFNTyxHQU5QLENBN0ZGLEVBcUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxtREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREYsRUFNTyxHQU5QLENBckdGLEVBNkdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxpREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsRUFNTyxHQU5QLENBN0dGLEVBcUhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxrREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREYsRUFNTyxHQU5QLENBckhGLEVBNkhFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxpREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsRUFNTyxHQU5QLENBN0hGLEVBcUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxnREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFNTyxHQU5QLENBcklGLEVBNklFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxnREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0NBREYsRUFNTyxHQU5QLENBN0lGLEVBcUpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxnREFEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsRUFNTyxHQU5QLENBckpGLEVBNkpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyw4Q0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBREYsRUFNTyxHQU5QLENBN0pGLEVBcUtFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyx1Q0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBcktGLEVBNktFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywrQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFNTyxHQU5QLENBN0tGLEVBcUxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxzQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBckxGLEVBNkxFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyw2Q0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFNTyxHQU5QLENBN0xGLEVBcU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywwQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFNTyxHQU5QLENBck1GLEVBNk1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxzQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBN01GLEVBcU5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxxQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBck5GLEVBNk5FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxxQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBN05GLEVBcU9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywwQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBREYsRUFNTyxHQU5QLENBck9GLEVBNk9FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywyQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFNTyxHQU5QLENBN09GLEVBcVBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxxQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBclBGLEVBNlBFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyx3Q0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBN1BGLEVBcVFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywyQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFNTyxHQU5QLENBclFGLEVBNlFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyx5Q0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFNTyxHQU5QLENBN1FGLEVBcVJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyx1Q0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREYsRUFNTyxHQU5QLENBclJGLEVBNlJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQywwQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0NBREYsRUFNTyxHQU5QLENBN1JGLEVBcVNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyx1Q0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBclNGLEVBNlNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDRTtBQUNFLFVBQUksRUFBQyxzQ0FEUDtBQUVFLFlBQU0sRUFBQyxRQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREYsRUFNTyxHQU5QLENBN1NGLENBREYsQ0ExU0YsQ0FmRixDQURGLENBTEYsRUEwbkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkZBMW5CRixFQTJuQkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQTNuQkYsRUE0bkJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0RBNW5CRixDQWpVRixDQURGO0FBbThCRDs7QUFwK0JtRSxDLENBcytCdEU7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLHdDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaG1DQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwwQzs7Ozs7Ozs7Ozs7QUNBQSwrQzs7Ozs7Ozs7Ozs7QUNBQSxzQzs7Ozs7Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9uZXdib29rLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9uZXdib29rLnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH06IFByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICAgIDxhPlVzZXJzIExpc3Q8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8IDxhIGhyZWY9XCIvYXBpL3VzZXJzXCI+VXNlcnMgQVBJPC9hPiAqL31cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Zm9vdGVyPlxuICAgICAgey8qIDxociAvPiAqL31cbiAgICAgIHsvKiA8c3Bhbj5JJ20gaGVyZSB0byBzdGF5IChGb290ZXIpPC9zcGFuPiAqL31cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge1xuICAgICAgICBgXG4gICAgICAgIGBcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL3N0eWxlL2luZGV4LmNzcycpO1xuXG5yZXF1aXJlKCcuL2luZGV4LmNzcycpOyIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vc3R5bGUvaW5kZXguY3NzJyk7XG5cbnJlcXVpcmUoJy4vaW5kZXguY3NzJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9zdHlsZS9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi4vLi4vYnV0dG9uL3N0eWxlL2NzcycpOyIsIid1c2Ugc3RyaWN0JztcblxucmVxdWlyZSgnLi4vLi4vc3R5bGUvaW5kZXguY3NzJyk7XG5cbnJlcXVpcmUoJy4vaW5kZXguY3NzJyk7XG5cbnJlcXVpcmUoJy4uLy4uL3Rvb2x0aXAvc3R5bGUvY3NzJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9zdHlsZS9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi9pbmRleC5jc3MnKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaG9ydGN1dFwiOiBcIl8xODE5R1VzUTU0d3daS3AzZ1YwdklSXCIsXG5cdFwiaGVhZGVyV3JhcFwiOiBcIlNJME9YUmJqeUpseDNiV0VDVE5SX1wiLFxuXHRcInNsb2dhbkJveFwiOiBcIl8yZTUxekpHTVk2UDg5V0dBTmcycWxrXCIsXG5cdFwidGV4dFwiOiBcIl8yV1p0Z3Y3UGNMV2VPanFieFlzeW9sXCIsXG5cdFwidXNlcmluZm9ib3hcIjogXCJfMkF4ZnR2NFhsc2RsdE5TalpzQ0dEelwiLFxuXHRcIml0ZW1JbmZvXCI6IFwiXzNvZUxCRVMzRGdkLUlFMnJSalhRQzlcIixcblx0XCJpbmZvTm9ybWFsXCI6IFwiXzJDLTNXMUxFeUtpaWJZVmhnRWwzaGlcIixcblx0XCJpbmZvVGV4dFwiOiBcIl8zQkFKYWk3VmZYem1CTkRLUHR4MUUwXCIsXG5cdFwiaW5mb0xpbmtcIjogXCJfMnBScUo3cWtFakZYdE00QW8xbHVxN1wiLFxuXHRcImNsZWFyZml4XCI6IFwiXzN0Wjc3cmNFNkhGcFZrQi0wZEZFcVVcIixcblx0XCJ0dWJpYW9cIjogXCJfMXE1NWQ5VEM1dzY2MVNwTDR4TWszNFwiXG59OyIsIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuLy8gaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbi8vIGltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG4vLyBpbXBvcnQgeyBCdXR0b24gfSBmcm9tICdhbnRkJztcclxuLy/lvIDlkK9jc3PmqKHlnZfljJbkuYvlkI7lj6/ku6Xov5nmoLfkvb/nlKjmoLflvI9cclxuLy8gaW1wb3J0IGNzc29iaiBmcm9tICcuL2luZGV4Lmxlc3MnXHJcbmltcG9ydCBjc3NvYmogZnJvbSBcIi4vY3NzL2hvbWUubGVzc1wiO1xyXG5pbXBvcnQgXCJAL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xyXG5pbXBvcnQgXCIuL2Nzcy9ob21lLmNzc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5cclxuaW1wb3J0IHsgQ2Fyb3VzZWwgfSBmcm9tIFwiYW50ZFwiO1xyXG4vLyBpbXBvcnQgQ29sdW1uR3JvdXAgZnJvbSBcImFudGQvbGliL3RhYmxlL0NvbHVtbkdyb3VwXCI7XHJcbi8vIGltcG9ydCB7IHR5cGUgfSBmcm9tIFwib3NcIjtcclxuaW1wb3J0IHsgTWVudSwgRHJvcGRvd24gfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgeyBEb3duT3V0bGluZSB9IGZyb20gXCJAYW50LWRlc2lnbi9pY29uc1wiO1xyXG5jb25zdCB7IFN1Yk1lbnUgfSA9IE1lbnU7XHJcblxyXG4vLyDlo7DmmI7nmoTlhajlsYDmlbDmja5cclxuY29uc3QgbWVudTEgPSAoXHJcbiAgPE1lbnU+XHJcbiAgICA8TWVudS5JdGVtID5cclxuICAgICAgPGFcclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgIC8vIGhyZWY9XCJodHRwOi8vd3d3LmFsaXBheS5jb20vXCJcclxuICAgICAgPlxyXG4gICAgICAgIOaIkeeahOWlveWPi1xyXG4gICAgICA8L2E+XHJcbiAgICA8L01lbnUuSXRlbT5cclxuICAgIDxNZW51Lkl0ZW0+XHJcbiAgICAgIDxhXHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAvLyBocmVmPVwiaHR0cDovL3d3dy50YW9iYW8uY29tL1wiXHJcbiAgICAgID5cclxuICAgICAgICDotYTph5HotKbmiLdcclxuICAgICAgPC9hPlxyXG4gICAgPC9NZW51Lkl0ZW0+XHJcbiAgICA8TWVudS5JdGVtPlxyXG4gICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCI+XHJcbiAgICAgICAg5Zu+5Lmm5pS26JePXHJcbiAgICAgIDwvYT5cclxuICAgIDwvTWVudS5JdGVtPlxyXG4gICAgPE1lbnUuSXRlbSBkYW5nZXI+5ouN5Y2W5Lqk5piTPC9NZW51Lkl0ZW0+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5cclxuY29uc3QgbWVudTIgPSAoXHJcbiAgPE1lbnU+XHJcbiAgICA8TWVudS5JdGVtR3JvdXAgdGl0bGU9XCLlupfpk7pcIj5cclxuICAgICAgPE1lbnUuSXRlbT7lhY3otLnmkYblnLDmkYo8L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbT7nlLPor7flvIDlupc8L01lbnUuSXRlbT5cclxuICAgIDwvTWVudS5JdGVtR3JvdXA+XHJcbiAgICA8U3ViTWVudSB0aXRsZT1cIuaLjeWNllwiPlxyXG4gICAgICA8TWVudS5JdGVtPueUs+ivt+aLjeWNluS8muWRmDwvTWVudS5JdGVtPlxyXG4gICAgICA8TWVudS5JdGVtPuaLjeWNluS/oeaBrzwvTWVudS5JdGVtPlxyXG4gICAgPC9TdWJNZW51PlxyXG4gICAgey8qIDxTdWJNZW51IHRpdGxlPVwiZGlzYWJsZWQgc3ViIG1lbnVcIiBkaXNhYmxlZD5cclxuICAgICAgPE1lbnUuSXRlbT41ZCBtZW51IGl0ZW08L01lbnUuSXRlbT5cclxuICAgICAgPE1lbnUuSXRlbT42dGggbWVudSBpdGVtPC9NZW51Lkl0ZW0+XHJcbiAgICA8L1N1Yk1lbnU+ICovfVxyXG4gIDwvTWVudT5cclxuKTtcclxuXHJcbmNvbnN0IG1lbnUzID0gKFxyXG4gIDxNZW51PlxyXG4gICAgPE1lbnUuSXRlbUdyb3VwIHRpdGxlPVwiQVBQ5a6i5oi356uvXCI+XHJcbiAgICAgIHsvKiA8TWVudS5JdGVtPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9hcHAuanBnXCIgd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxNTBcIiAvPlxyXG4gICAgICA8L01lbnUuSXRlbT4gKi99XHJcbiAgICAgIHsvKiA8TWVudS5JdGVtPmlPUyDigKIgQW5kcm9pZDwvTWVudS5JdGVtPiAqL31cclxuICAgIDwvTWVudS5JdGVtR3JvdXA+XHJcbiAgICA8TWVudS5JdGVtR3JvdXA+PGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2FwcC5qcGdcIiB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjE1MFwiIHN0eWxlPXt7bWFyZ2luUmlnaHQ6XCIxMHB4XCIsbWFyZ2luTGVmdDpcIjEwcHhcIn19IC8+PC9NZW51Lkl0ZW1Hcm91cD5cclxuICAgIDxNZW51Lkl0ZW1Hcm91cCB0aXRsZT1cImlPUyDigKIgQW5kcm9pZFwiPjwvTWVudS5JdGVtR3JvdXA+XHJcbiAgPC9NZW51PlxyXG4pO1xyXG5cclxuLy8g5aOw5piO55qE5YWo5bGA5pWw5o2uXHJcbnZhciBpbWdudW1iZXI6IG51bWJlciA9IDA7XHJcblxyXG50eXBlIHN0YXRlID0ge1xyXG4gIHNlbGVjdGVkOiBib29sZWFuO1xyXG59O1xyXG5cclxudHlwZSBJUHJvcHMgPSB7XHJcbiAgc2hvdzogW3t9XTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5kZXhQYWdlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50PElQcm9wcywgc3RhdGU+IHtcclxuICBzdGF0aWMgYXN5bmMgZ2V0SW5pdGlhbFByb3BzKCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvZXNzYXl0YWJsZVwiKTtcclxuICAgIGNvbnN0IHNob3cgPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgLy/ov5novrnov5Tlm57nmoTmlbDmja7kvJrooqvmjILovb3liLDnu4Tku7bnmoRwcm9wc+S4rVxyXG4gICAgcmV0dXJuIHsgc2hvdyB9O1xyXG4gIH1cclxuICBjb25zdHJ1Y3Rvcihwcm9wczogYW55KSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgICB0aGlzLnN0YXRlID0geyBzZWxlY3RlZDogZmFsc2UgfTtcclxuICB9XHJcbiAgaGFuZGxlQ2xpY2sgPSAoZTogYW55KSA9PiB7XHJcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6ICF0aGlzLnN0YXRlLnNlbGVjdGVkIH0sICgpID0+IHtcclxuICAgICAgaWYgKCF0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XHJcbiAgICAgICAgLy8gdGhpcy5jbGVhckFsbCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG4gIHByaXZhdGUgcmlnaHRCdG5TdHlsZSA9IHtcclxuICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcclxuICAgIGNvbG9yOiBcImJsdWVcIixcclxuICB9O1xyXG4gIHByaXZhdGUgcmlnaHRCdG5TdHlsZTIgPSB7XHJcbiAgICBkaXNwbGF5OiBcIm5vbmVcIixcclxuICAgIGNvbG9yOiBcInJlZFwiLFxyXG4gIH07XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgdmFyIGN1cnJlbnRzdHlsZTtcclxuICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdGVkKSB7XHJcbiAgICAgIGN1cnJlbnRzdHlsZSA9IHRoaXMucmlnaHRCdG5TdHlsZTI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdXJyZW50c3R5bGUgPSB0aGlzLnJpZ2h0QnRuU3R5bGU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8TGF5b3V0IHRpdGxlPVwi6aaW6aG1XCI+XHJcbiAgICAgICAgPGhlYWRlcj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2hvcnRjdXR9PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLmhlYWRlcldyYXB9PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2xvZ2FuQm94fT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLnRleHR9Pue9kee9l+WkqeS4i+WbvuS5pjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuS8oOaJv+S4reWNjuaWh+aYjjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtbY3Nzb2JqLnVzZXJpbmZvYm94LCBjc3NvYmouY2xlYXJmaXhdLmpvaW4oXCIgXCIpfT5cclxuICAgICAgICAgICAgICB7LyogMSAqL31cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9Ob3JtYWx9PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+55m75b2VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+Lzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuazqOWGjDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIHsvKiBcclxuICAgICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17bWVudX0+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJhbnQtZHJvcGRvd24tbGlua1wiIG9uQ2xpY2s9e2UgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfT5cclxuICAgICAgSG92ZXIgbWUgPERvd25PdXRsaW5lZCAvPlxyXG4gICAgPC9hPlxyXG4gIDwvRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAqL31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vY2FydC5rb25nZnouY29tL2xpc3RcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua31cclxuICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjZmZmXCIgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tcImZhXCIsIFwiZmEtc2hvcHBpbmctY2FydFwiLCBjc3NvYmoudHViaWFvXS5qb2luKFxyXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICA+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+6LSt54mp6L2mPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxEcm9wZG93biBvdmVybGF5PXttZW51MX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS9idXllci9vcmRlci9vcmRlcl9saXN0Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W2Nzc29iai5pbmZvTGluaywgXCJhbnQtZHJvcGRvd24tbGlua1wiXS5qb2luKFwiIFwiKX1cclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoZSkgPT4gZS5wcmV2ZW50RGVmYXVsdCgpfVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuS4quS6uuS4reW/gzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9Ecm9wZG93bj5cclxuICAgICAgICAgICAgICB7LyogICovfVxyXG4gICAgICAgICAgICAgIHsvKiAyICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vYnV5ZXIvb3JkZXIvb3JkZXJfbGlzdC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9XHJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuaIkeeahOiuouWNlTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8RHJvcGRvd24gb3ZlcmxheT17bWVudTJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vYnV5ZXIvb3JkZXIvb3JkZXJfbGlzdC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e1tjc3NvYmouaW5mb0xpbmssIFwiYW50LWRyb3Bkb3duLWxpbmtcIl0uam9pbihcIiBcIil9XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5Y2W5a625Lit5b+DPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vYnV5ZXIvb3JkZXIvb3JkZXJfbGlzdC5odG1sXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY3Nzb2JqLmluZm9MaW5rLCBcImFudC1kcm9wZG93bi1saW5rXCJdLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7lrqLmnI08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qIDMgKi99XHJcbiAgICAgICAgICAgICAgPERyb3Bkb3duIG92ZXJsYXk9e21lbnUzfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tL2J1eWVyL29yZGVyL29yZGVyX2xpc3QuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtbY3Nzb2JqLmluZm9MaW5rLCBcImFudC1kcm9wZG93bi1saW5rXCJdLmpvaW4oXCIgXCIpfVxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eyhlKSA9PiBlLnByZXZlbnREZWZhdWx0KCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5omL5py654mIPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0Ryb3Bkb3duPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBjbGVhclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3YtZmlyIGNsZWFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRiZ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1wcmltYXJ5IGNsZWFyXCI+5paw5Lmm6LWE6K6vPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm92LXNlY1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm92ZWxcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbm92ZWxcIj7lsI/or7Q8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlc3NheVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9lc3NheVwiPuaVo+aWhzwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvZXRyeVwiPlxyXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9wcm9zZVwiPumaj+eslDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndvcmtcIj5cclxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvbGl0ZXJhdHVyZVwiPuaWh+WtpjwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgIHsvKiA8THVuQm9Db21wb25lbnQgbHVuYm9PYmplY3Q9e2RhdGEubHVuYm9PYmplY3R9IGltZ0FycmF5PXtkYXRhLmltZ0FycmF5fSBsaW5rQXJyYXk9e2RhdGEubGlua0FycmF5fS8+LCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd3JhcHBlcicpICovfVxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxDYXJvdXNlbCBhdXRvcGxheT5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICB7LyogPGgzIGNsYXNzTmFtZT1cImNvbnRlbnRTdHlsZVwiPjE8L2gzPiAqL31cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9sdW5iby9sdW4wLmpwZ1wiIHdpZHRoPVwiMTIwMFwiIGhlaWdodD1cIjI3MFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2x1bmJvL2x1bjExLmpwZ1wiIHdpZHRoPVwiMTIwMFwiIGhlaWdodD1cIjI3MFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2x1bmJvL2x1bjIuanBnXCIgd2lkdGg9XCIxMjAwXCIgaGVpZ2h0PVwiMjcwXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvbHVuYm8vbHVuMy5qcGdcIiB3aWR0aD1cIjEyMDBcIiBoZWlnaHQ9XCIyNzBcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9sdW5iby9sdW40LmpwZ1wiIHdpZHRoPVwiMTIwMFwiIGhlaWdodD1cIjI3MFwiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9DYXJvdXNlbD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qICwgbW91bnROb2RlLCAqL31cclxuICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cIm5vdi10aGkgY2xlYXJcIj4gKi99XHJcbiAgICAgICAgICB7LyogPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL2ltYWdlLzIuanBnXCI+PC9pbWc+ICovfVxyXG4gICAgICAgICAgey8qIDwvZGl2PiAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm92LWZvciBjbGVhclwiPlxyXG4gICAgICAgICAgICA8ZGl2PuaWsOS5pumAn+mAkjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PuabtOWkmsK7PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm92LWZpZiBjbGVhclwiPlxyXG4gICAgICAgICAgICB7dGhpcy5wcm9wcy5zaG93Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgaW1nbnVtYmVyKys7XHJcbiAgICAgICAgICAgICAgaWYgKGltZ251bWJlciA8IDIyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aXRlbS5ib29rSWR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uL3N0YXRpYy9pbWFnZXMvaW1hZ2UvJHtpdGVtLmltZ1BhdGh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiMTE1XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE3MlwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICB7aXRlbS5ib29rTmFtZX1cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PuS9nOiAhTp7aXRlbS5hdXRob3J9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgICB7LyogPCUtLeixhueTo+aXpeWOhi0tJT4gKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1jYWwgY2xlYXJcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvaW1hZ2VzL211bHUuanBnXCIgd2lkdGg9XCI2NzVcIiBoZWlnaHQ9XCIxMjBcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stbmV3cyBjbGVhclwiPuWbvuS5pui1hOiurzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stbmV3cy1jb250ZW50IGNsZWFyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibHVldGV4dFwiPlxyXG4gICAgICAgICAgICAgICAg5a2U572R5LiA5ZGo5paw5Lmm6YCf6YCS772c6ZmI5pil5oiQ6aaW6YOo55+t56+H5bCP6K+06ZuG77yM5ZGI546w5rGJ6K+t5bCP6K+055qE5LiA56eN6aOO5bqm5LiO5paw55qE5Y+v6IO95oCnXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmF5dGV4dFwiPuivu+S5puaOqOiNkDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxhY2t0ZXh0XCI+XHJcbiAgICAgICAgICAgICAgICDomZrmnoTnsbtcclxuICAgICAgICAgICAgICAgICrnibnliKvmjqjojZDku7/kvZvpuJ/moJbmoJHvvIzpsbzmvZzmuIrvvIzkuIDliIfnqLPlpqXlj4jlronlroHvvIzlpJzmmZrov5nmiY3nnJ/mraPlnLDpmY3kuLTjgIJcclxuICAgICAgICAgICAgICAgIOOAiuWknOaZmueahOa9nOawtOiJh+OAi+aYr+S9nOWutumZiOaYpeaIkOeahOmmlumDqOefreevh+Wwj+ivtOmbhuOAguS5neS4quaVheS6i++8jOeslOmUi+a4uOi1sOS6juaXp+Wxseays+S4juacquefpeWuh+WumemXtO+8jOS7peeRsOWlh+mjmOaJrOeahOaDs+ixoeOAgea4qeWOmua4heW5veeahOeslOazle+8jFxyXG4gICAgICAgICAgICAgICAg5Zyo546w5a6e5LiO5bm75aKD6Ze06L6f5byA6Iul5bmy5p2h56eY5a+G55qE6YCa6YGT77ya5rW35bqV5ryr5ri455qE5bCR5bm044CB5rex5bGx6YGX6JC955qE5Y+k56KR44CB5byl5pWj5YWl5LiH54mp55qE5a2X5Y+l44CB5LqR5b2p5L+u5Ymq56uZ44CB6ZO45YmR5LiO6YW/6YWS44CB6ZOB5bmV5LiL55qE6JCo5YWL5pav44CB6JOd6bK45YaF55qE5ryU5aWP5Y6F4oCm4oCmXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb3N0LWxpa2VcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlXCIgc3R5bGU9e3sgbWFyZ2luTGVmdDogMTY4IH19PlxyXG4gICAgICAgICAgICAgIOacgOWPl+WFs+azqOWbvuS5puamnFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaWtlMVwiPlxyXG4gICAgICAgICAgICAgIDxkaXY+6Jma5p6E57G7wrs8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2PumdnuiZmuaehOexu8K7PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpa2UtY29udGVudCBjbGVhclwiIHN0eWxlPXt7IG1hcmdpbkxlZnQ6IDI1MCB9fT5cclxuICAgICAgICAgICAge3RoaXMucHJvcHMuc2hvdy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgIC8vIGxldCBncmFkZSA9IGl0ZW0uZ3JhZGU7XHJcbiAgICAgICAgICAgICAgaWYgKGl0ZW0uYm9va0lkIDwgMzIgJiYgaXRlbS5ib29rSWQgPiAyMikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uZ3JhZGUgPCA5KSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uYm9va0lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi4vc3RhdGljL2ltYWdlcy9pbWFnZS8ke2l0ZW0uaW1nUGF0aH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiayBjbGVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tuYW1lXCI+e2l0ZW0uYm9va05hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRiZ3JhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PuivhOWIhu+8mjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFkZVwiPntpdGVtLmdyYWRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2F1XCI+5L2c6ICFOntpdGVtLmF1dGhvcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2l0ZW0uYm9va0lkfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgLi4vc3RhdGljL2ltYWdlcy9pbWFnZS8ke2l0ZW0uaW1nUGF0aH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjg1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PVwiMTIwXCJcclxuICAgICAgICAgICAgICAgICAgICAgID48L2ltZz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJiayBjbGVhclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2tuYW1lXCI+e2l0ZW0uYm9va05hbWV9PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRiZ3JhZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PuivhOWIhu+8mjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmFkZVwiPntpdGVtLmdyYWRlfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS9zdGFyMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjExXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPjwvaW1nPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9va2F1XCI+5L2c6ICFOntpdGVtLmF1dGhvcn08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgICA8Zm9vdGVyPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8YnI+PC9icj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPGJyPjwvYnI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmllbmRfbGlua19ib3hcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZyaWVuZF9saW5rX3RpdCBjbGVhcmZpeFwiPlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19IGNsYXNzTmFtZT1cIm5vd1wiPlxyXG4gICAgICAgICAgICAgICAgICB7LyogPGEgaHJlZj1cIlwiIGNsYXNzTmFtZT17W1wiXCIsIHRoaXMuc3RhdGUuc2VsZWN0ZWQgPyBcIm5vd1wiOm51bGxdLmpvaW4oJyAnKX0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKX0+ICovfVxyXG4gICAgICAgICAgICAgICAgICDlkIjkvZzkvJnkvLRcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgey8qIDxhIGhyZWY9XCJcIiBjbGFzc05hbWU9e1tcIlwiLCB0aGlzLnN0YXRlLnNlbGVjdGVkID8gXCJub3dcIjpudWxsXS5qb2luKCcgJyl9IHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiB9fSBvbkNsaWNrPXt0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcyl9PiAqL31cclxuICAgICAgICAgICAgICAgICAg5Y+L5oOF6ZO+5o6lXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiA8YSBocmVmPVwiXCIgY2xhc3NOYW1lPXtbXCJcIiwgdGhpcy5zdGF0ZS5zZWxlY3RlZCA/IFwibm93XCI6bnVsbF0uam9pbignICcpfSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0gPiAqL31cclxuICAgICAgICAgICAgICAgICAg5o6o6I2Q5LiT6aKYXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmcmllbmRfbGlua19saXN0IGNsZWFyZml4IG1fdDEwXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZfYm94XCIgc3R5bGU9e3sgZGlzcGxheTogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2hpc3Rvcnkuc29odS5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmkJzni5Dljoblj7JcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LnhpbHUuY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6KW/6ZmG5Yab5LqL572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cua29vbGVhcm4uY29tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmlrDkuJzmlrnlnKjnur9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmthb3lhbi5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDogIPnoJTluK5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LmJhbmJpamlhbmcuY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Y2K5aOB5rGf5Lit5paH572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cudGlhbnlhbmNoYS5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlpKnnnLzmn6VcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LnpqZ3VqaS5jb20vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmtZnmsZ/lj6TnsY3lh7rniYjnpL5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3LnR1bml1LmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOmAlOeJm+aXhea4uOe9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cuY21yLmNvbS5jbi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOe9kee7nOaVmeiCslxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cucm9uZ2Jhb3poYWkuY24vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxhY2szMzNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDojaPlrp3mlotcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL3d3dy5vb29waWMuY29tL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5oiR5Zu+572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaGplbmdsaXNoLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOayquaxn+iLseivrVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vd3d3LnhpbWFsYXlhLmNvbS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOacieWjsOWwj+ivtFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9ib29rLmtvbmdmei5jb20vbmV3Ym9vay9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOavj+aXpeS4iuS5plxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cuemFzaHVndWFuLmNuL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsYWNrMzMzXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5p2C5Lmm6aaGXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL2NvbW11bml0eS9saW5rcy5waHBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibGFjazMzM1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOabtOWkmuWPi+mTviAmZ3Q7Jmd0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZl9ib3hcIiBzdHlsZT17eyBkaXNwbGF5OiBcIm5vbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5ouN5Y2W572R56uZXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnNtemRtLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5LuA5LmI5YC85b6X5LmwXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnFjYy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS8geafpeafpVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2Jvb2sudGlleHVlLm5ldC9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Yab5LqL6K+75LmmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuY2FuZXQuY29tLmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDkuK3lm73kvJrorqHnvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5odWF0dS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWFrOWKoeWRmOiAg+ivlee9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Lmtla2VuZXQuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlj6/lj6/oi7Hor61cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy4wMjUxNi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOe9keWdgOWvvOiIqlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmJvb2tzY2hpbmEuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDkuK3lm73lm77kuabnvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy42MzI0My5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOe9keWdgOWkp+WFqFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy56aGlwaW4uY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmi5vogZjnvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5qbXcuY29tLmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDliqDnm59cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5xaWFubGltYS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWNg+mHjOmprOaLm+aKleagh1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNoZXh1bi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOi9puiur+e9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmNpZm5ld3MuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDot6jlooPnlLXllYZcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5lYnJ1bi5jb21cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lq/6YKm5Yqo5Yqb572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuYW9zaHUuY29tXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWlpeaVsFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3Ljk1OS5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgOTU55ZOB54mM5ZWG5py6572RXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuNTFiaS5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOi/lOWIqee9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LnNvdXRobW9uZXkuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDogqHnpahcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5sdnllLmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnu7/ph47nvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2VkMTE0LmNuL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3ZWQxMTTnu5PlqZrnvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy56YmlyZC5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOmSu+efs+Wwj+m4n1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy56aGlmYW5nLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5pm65oi/5peF5ri45Zyw5LqnXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cuemh1bG9uZy5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOW7uuetkVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LmFuemhpLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5a6J5Y2T5biC5Zy6XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vb2ZmaWNlLmZhbmcuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDljJfkuqzlhpnlrZfmpbznvZFcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cua2Fuemh1bi5jb20vXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOeci+WHhue9kVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vd3d3LnJiejE2NzIuY29tL1wiIHRhcmdldD1cIl9ibGFua1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDojaPlrp3mlovlnKjnur9cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmX2JveFwiIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vYnEua29uZ2Z6LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Zu+5Lmm5aSn5YWoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS90b3BpYy9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg54Ot5pCc5LiT6aKYXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Ye654mI56S+5aSn5YWoXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvXCIgdGFyZ2V0PVwiX2JsYW5rXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS9nOWutuWkp+WFqFxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3Nob3VzaHUua29uZ2Z6LmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5LiK6Zeo5pS25LmmXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIva2V4dWVjaHViYW5zaGUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg56eR5a2m5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvcWluZ2h1YWRheHVlL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOa4heWNjuWkp+WtpuWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL3pob25nZ3VvYmlhb3podW4vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lit5Zu95qCH5YeG5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvZGlhbnppZ29uZ3llL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOeUteWtkOW3peS4muWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL2h1YXh1ZWdvbmd5ZS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDljJblrablt6XkuJrlh7rniYjnpL5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3B1Ymxpc2hlci9iZWlqaW5nZGF4dWVjaHViYW5zaGUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5YyX5Lqs5aSn5a2m5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvcmVubWlud2Vpc2hlbmcvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lq65rCR5Y2r55Sf5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvemhvbmdndW9qaWFuemh1Z29uZ3llL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOS4reWbveW7uuetkeW3peS4muWHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL3pob25nZ3VvcmVubWluZGF4dWUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lit5Zu95Lq65rCR5aSn5a2m5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvc2hhbmd3dXlpbnNodWd1YW5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDllYbliqHljbDkuabppoZcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3B1Ymxpc2hlci96aG9uZ2d1b3RpZWRhby9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDkuK3lm73pk4HpgZPlh7rniYjnpL5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3B1Ymxpc2hlci9yZW5taW5jaHViYW5zaGUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lq65rCR5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvemhvbmdndW9kaWFubGkvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5Lit5Zu955S15Yqb5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvemhvbmdodWFzaHVqdS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDkuK3ljY7kuablsYBcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3B1Ymxpc2hlci9mYWx2Y2h1YmFuc2hlL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOazleW+i+WHuueJiOekvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vcHVibGlzaGVyL2dhb2RlbmdqaWFveXUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6auY562J5pWZ6IKy5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS9wdWJsaXNoZXIvaml4aWVnb25neWUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5py65qKw5bel5Lia5Ye654mI56S+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvamlueW9uZy9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDph5HlurhcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3dyaXRlci9jdW5zaGFuZ2NodW5zaHUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5p2R5LiK5pil5qCRXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvbWFvZHVuL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOiMheebvlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL3poYW5neGlhb3hpYW4vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5byg5bCP5ai0XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvd2FuZ3hpYW9iby9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDnjovlsI/ms6JcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3dyaXRlci9sYW9zaGUvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6ICB6IiNXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvbW95YW4vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6I6r6KiAXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvbHV4dW4vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6bKB6L+FXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvai1rLWx1b2xpbi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBKLksu572X55CzXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvemhhbmdhaWxpbmcvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5byg54ix546yXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIveXVodWEvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5L2Z5Y2OXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvcWlvbmd5YW8vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg55C855G2XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvemhhbmdkYXFpYW4vXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg5byg5aSn5Y2DXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIveHViZWlob25nL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOW+kOaCsum4v1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL2RhZmVucWkvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAg6L6+6Iqs5aWHXHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly93d3cua29uZ2Z6LmNvbS93cml0ZXIvYW5uaWJhb2JlaS9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDlronlpq7lrp3otJ1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3d3dy5rb25nZnouY29tL3dyaXRlci9iaW5neGluL1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIOWGsOW/g1xyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPntcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vd3d3Lmtvbmdmei5jb20vd3JpdGVyL2hhaXlhbi9cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICDmtbflsqlcclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+wqkgMjAyMO+8jTIwMjAgYmFvZnUuY29tLCBhbGwgcmlnaHRzIHJlc2VydmVkIOWtlOWtkOaXp+S5pue9kTwvc3Bhbj5cclxuICAgICAgICAgIDxicj48L2JyPlxyXG4gICAgICAgICAgPHNwYW4+6IGU57O75oiR5LusIHhpbmd1YW5Ad2VpYm8uY29tPC9zcGFuPlxyXG4gICAgICAgIDwvZm9vdGVyPlxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgIDwvTGF5b3V0PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuLy8gY29uc3QgSW5kZXhQYWdlID0gKHByb3BzOiBhbnkpID0+IHtcclxuLy8gICBsZXQgW3N0YXRlLCBzZXRTdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbi8vICBsZXQgaGFuZGxlQ2xpY2sgPSAoZTphbnkpID0+IHtcclxuXHJcbi8vIH1cclxuLy8gICAvLyBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbi8vICAgcmV0dXJuIChcclxuLy9cclxuXHJcbi8vICAgKTtcclxuLy8gfTtcclxuXHJcbi8vZ2V0SW5pdGlhbFByb3BzIOaWueazleaXouWPr+S7peWcqOacjeWKoeWZqOi/kOihjO+8jOWPiOWPr+S7peWcqOWuouaIt+err+i/kOihjCjnu4Tku7bliJvlu7rkuYvliY3miafooYznmoQpXHJcbi8v5b2T5Yi35paw6aG16Z2iKOWIneasoei9veWFpemhtemdoinvvIzor6Xmlrnms5XkvJrlnKjmnI3liqHlmajmiafooYxcclxuLy/lvZPpgJrov4c8TGluaz7ot7Povazot6/nlLHnmoTml7blgJnvvIzor6Xmlrnms5XkvJrlnKjlrqLmiLfnq6/miafooYxcclxuLy8gSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuLy8gICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZXNzYXl0YWJsZVwiKTtcclxuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuLy8gICAvL+i/mei+uei/lOWbnueahOaVsOaNruS8muiiq+aMgui9veWIsOe7hOS7tueahHByb3Bz5LitXHJcbi8vICAgcmV0dXJuIHsgc2hvdzogZGF0YSB9O1xyXG4vLyB9O1xyXG5cclxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ub3ZlbHRhYmxlXHJcblxyXG4vLyBJbmRleFBhZ2UuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cDovL2xvY2FsaG9zdDozMDAxL2FwaS9ub3ZlbHRhYmxlXCIpO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuLy8gICBsZXQgbm92ZWxzaG93O1xyXG4vLyAgIHJldHVybiB7IHNob3c6IGRhdGEgfTtcclxuLy8gfTtcclxuXHJcbi8vIGV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXhQYWdlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvY2Fyb3VzZWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvZHJvcGRvd25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvbWVudVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==