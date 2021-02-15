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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/home.tsx");
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
  className: "jsx-1350088966",
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
  className: "jsx-1350088966",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 7
  }
}, title), __jsx("meta", {
  charSet: "utf-8",
  className: "jsx-1350088966",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 7
  }
}), __jsx("meta", {
  name: "viewport",
  content: "initial-scale=1.0, width=device-width",
  className: "jsx-1350088966",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 7
  }
})), __jsx("header", {
  className: "jsx-1350088966",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17,
    columnNumber: 5
  }
}, __jsx("nav", {
  className: "jsx-1350088966",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18,
    columnNumber: 7
  }
})), children, __jsx("footer", {
  className: "jsx-1350088966",
  __self: undefined,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34,
    columnNumber: 5
  }
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "1350088966",
  __self: undefined
}, "\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxyZWFjdOavleS4muiuvuiuoVxc5a6e6Le16LWE5paZXFwyMDIxMDIwMVxcMjAyMTAyMDFcXGNvZGVcXG5leHQtdHPmqKHmnb9cXG15LWFwcFxcY29tcG9uZW50c1xcTGF5b3V0LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3Q1EiLCJmaWxlIjoiRDpcXHJlYWN05q+V5Lia6K6+6K6hXFzlrp7ot7XotYTmlplcXDIwMjEwMjAxXFwyMDIxMDIwMVxcY29kZVxcbmV4dC10c+aooeadv1xcbXktYXBwXFxjb21wb25lbnRzXFxMYXlvdXQudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IFJlYWN0Tm9kZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuXG50eXBlIFByb3BzID0ge1xuICBjaGlsZHJlbj86IFJlYWN0Tm9kZVxuICB0aXRsZT86IHN0cmluZ1xufVxuXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiwgdGl0bGUgPSAnVGhpcyBpcyB0aGUgZGVmYXVsdCB0aXRsZScgfTogUHJvcHMpID0+IChcbiAgPGRpdj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT57dGl0bGV9PC90aXRsZT5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIC8+XG4gICAgPC9IZWFkPlxuICAgIDxoZWFkZXI+XG4gICAgICA8bmF2PlxuICAgICAgICB7LyogPExpbmsgaHJlZj1cIi9cIj5cbiAgICAgICAgICA8YT5Ib21lPC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgfHsnICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICA8YT5BYm91dDwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL3VzZXJzXCI+XG4gICAgICAgICAgPGE+VXNlcnMgTGlzdDwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHwgPGEgaHJlZj1cIi9hcGkvdXNlcnNcIj5Vc2VycyBBUEk8L2E+ICovfVxuICAgICAgPC9uYXY+XG4gICAgPC9oZWFkZXI+XG4gICAge2NoaWxkcmVufVxuICAgIDxmb290ZXI+XG4gICAgICB7LyogPGhyIC8+ICovfVxuICAgICAgey8qIDxzcGFuPkknbSBoZXJlIHRvIHN0YXkgKEZvb3Rlcik8L3NwYW4+ICovfVxuICAgIDwvZm9vdGVyPlxuXG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+XG4gICAgICB7XG4gICAgICAgIGBcbiAgICAgICAgfWBcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgTGF5b3V0XG4iXX0= */\n/*@ sourceURL=D:\\\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\\\u5B9E\u8DF5\u8D44\u6599\\\\20210201\\\\20210201\\\\code\\\\next-ts\u6A21\u677F\\\\my-app\\\\components\\\\Layout.tsx */"));

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

/***/ "./pages/home.tsx":
/*!************************!*\
  !*** ./pages/home.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/carousel/style/css */ "./node_modules/antd/lib/carousel/style/css.js");
/* harmony import */ var antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/carousel */ "antd/lib/carousel");
/* harmony import */ var antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _css_home_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./css/home.less */ "./pages/css/home.less");
/* harmony import */ var _css_home_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_css_home_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./css/home.css */ "./pages/css/home.css");
/* harmony import */ var _css_home_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_css_home_css__WEBPACK_IMPORTED_MODULE_7__);


var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\home.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import Link from 'next/link'

 // import { useEffect } from "react";
// import { Button } from 'antd';
//开启css模块化之后可以这样使用样式
// import cssobj from './index.less'




// 声明的全局数据
var imgnumber = 0;

const IndexPage = props => {
  // console.log(props);
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
    title: "\u9996\u9875",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 5
    }
  }, __jsx("header", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.shortcut,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.headerWrap,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.sloganBox,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.text,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 15
    }
  }, "\u7F51\u7F57\u5929\u4E0B\u56FE\u4E66"), __jsx("span", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 15
    }
  }, "\u4F20\u627F\u4E2D\u534E\u6587\u660E"))), __jsx("div", {
    className: [_css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.userinfobox, _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.clearfix].join(" "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }, __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoNormal,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, "\u767B\u5F55"), __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, "/"), __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }, "\u6CE8\u518C"))), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "http://cart.kongfz.com/list",
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoLink,
    target: "_blank",
    rel: "nofollow",
    style: {
      color: "#fff"
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: ["fa", "fa-shopping-cart", _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.tubiao].join(" "),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }), __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, "\u8D2D\u7269\u8F66"))), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "http://shop.kongfz.com/buyer/order/order_list.html",
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoLink,
    target: "_blank",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 17
    }
  }, "\u6211\u7684\u8BA2\u5355"))), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "http://shop.kongfz.com/buyer/order/order_list.html",
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoLink,
    target: "_blank",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 17
    }
  }, "\u4E2A\u4EBA\u4E2D\u5FC3"))), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "http://shop.kongfz.com/buyer/order/order_list.html",
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoLink,
    target: "_blank",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, "\u5356\u5BB6\u4E2D\u5FC3"))), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "http://shop.kongfz.com/buyer/order/order_list.html",
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoLink,
    target: "_blank",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 17
    }
  }, "\u5BA2\u670D"))), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "http://shop.kongfz.com/buyer/order/order_list.html",
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoLink,
    target: "_blank",
    rel: "nofollow",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 15
    }
  }, __jsx("span", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.infoText,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 17
    }
  }, "\u624B\u673A\u7248"))), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 13
    }
  }), __jsx("div", {
    className: _css_home_less__WEBPACK_IMPORTED_MODULE_5___default.a.itemInfo,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 13
    }
  })))), __jsx("div", {
    className: "container clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }
  }, __jsx("div", {
    className: "nov-fir clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "code",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 11
    }
  })), __jsx("div", {
    className: "dbg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "nov-primary clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, "\u5B54\u5B50\u65E7\u4E66\u7F51"), __jsx("div", {
    className: "nov-sec",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "novel",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "novelInit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 15
    }
  }, "\u5C0F\u8BF4")), __jsx("div", {
    className: "essay",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "essayInit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130,
      columnNumber: 15
    }
  }, "\u6563\u6587")), __jsx("div", {
    className: "poetry",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "proseInit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 15
    }
  }, "\u968F\u7B14")), __jsx("div", {
    className: "work",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 13
    }
  }, __jsx("a", {
    href: "literatureInit",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 15
    }
  }, "\u6587\u5B66")))), __jsx(antd_lib_carousel__WEBPACK_IMPORTED_MODULE_1___default.a, {
    autoplay: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../static/lunbo/lun0.jpg",
    width: "1000",
    height: "270",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../static/lunbo/lun11.jpg",
    width: "1000",
    height: "270",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 150,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../static/lunbo/lun2.jpg",
    width: "1000",
    height: "270",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 151,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../static/lunbo/lun3.jpg",
    width: "1000",
    height: "270",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 13
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 11
    }
  }, __jsx("img", {
    src: "../static/lunbo/lun4.jpg",
    width: "1000",
    height: "270",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 157,
      columnNumber: 13
    }
  }))), __jsx("div", {
    className: "nov-for clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 9
    }
  }, __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 11
    }
  }, "\u65B0\u4E66\u901F\u9012"), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 166,
      columnNumber: 11
    }
  }, "\u66F4\u591A\xBB")), __jsx("div", {
    className: "nov-fif clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169,
      columnNumber: 9
    }
  }, props.show.map(item => {
    imgnumber++;

    if (imgnumber < 22) {
      return __jsx("div", {
        key: item.bookId,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174,
          columnNumber: 17
        }
      }, __jsx("img", {
        src: `../static/images/image/${item.imgPath}`,
        width: "115",
        height: "172",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 19
        }
      }), item.bookName, "\u4F5C\u8005:", item.author);
    }
  })), __jsx("div", {
    className: "nov-cal clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 189,
      columnNumber: 9
    }
  }, __jsx("img", {
    src: "../static/images/image/3.jpg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 190,
      columnNumber: 11
    }
  })), __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 9
    }
  }, __jsx("div", {
    className: "book-news clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 11
    }
  }, "\u56FE\u4E66\u8D44\u8BAF"), __jsx("div", {
    className: "book-news-content clear",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "bluetext",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195,
      columnNumber: 13
    }
  }, "\u8C46\u74E3\u4E00\u5468\u65B0\u4E66\u901F\u9012\uFF5C\u9648\u6625\u6210\u9996\u90E8\u77ED\u7BC7\u5C0F\u8BF4\u96C6\uFF0C\u5448\u73B0\u6C49\u8BED\u5C0F\u8BF4\u7684\u4E00\u79CD\u98CE\u5EA6\u4E0E\u65B0\u7684\u53EF\u80FD\u6027"), __jsx("div", {
    className: "graytext",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198,
      columnNumber: 13
    }
  }, "\u8C46\u74E3\u8BFB\u4E66"), __jsx("div", {
    className: "blacktext",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 199,
      columnNumber: 13
    }
  }, "\u865A\u6784\u7C7B *\u7279\u522B\u63A8\u8350\u4EFF\u4F5B\u9E1F\u6816\u6811\uFF0C\u9C7C\u6F5C\u6E0A\uFF0C\u4E00\u5207\u7A33\u59A5\u53C8\u5B89\u5B81\uFF0C\u591C\u665A\u8FD9\u624D\u771F\u6B63\u5730\u964D\u4E34\u3002 \u300A\u591C\u665A\u7684\u6F5C\u6C34\u8247\u300B\u662F\u4F5C\u5BB6\u9648\u6625\u6210\u7684\u9996\u90E8\u77ED\u7BC7\u5C0F\u8BF4\u96C6\u3002\u4E5D\u4E2A\u6545\u4E8B\uFF0C\u7B14\u950B\u6E38\u8D70\u4E8E\u65E7\u5C71\u6CB3\u4E0E\u672A\u77E5\u5B87\u5B99\u95F4\uFF0C\u4EE5\u7470\u5947\u98D8\u626C\u7684\u60F3\u8C61\u3001\u6E29\u539A\u6E05\u5E7D\u7684\u7B14\u6CD5\uFF0C \u5728\u73B0\u5B9E\u4E0E\u5E7B\u5883\u95F4\u8F9F\u5F00\u82E5\u5E72\u6761\u79D8\u5BC6\u7684\u901A\u9053\uFF1A\u6D77\u5E95\u6F2B\u6E38\u7684\u5C11\u5E74\u3001\u6DF1\u5C71\u9057\u843D\u7684\u53E4\u7891\u3001\u5F25\u6563\u5165\u4E07\u7269\u7684\u5B57\u53E5\u3001\u4E91\u5F69\u4FEE\u526A\u7AD9\u3001\u94F8\u5251\u4E0E\u917F\u9152\u3001\u94C1\u5E55\u4E0B\u7684\u8428\u514B\u65AF\u3001\u84DD\u9CB8\u5185\u7684\u6F14\u594F\u5385\u2026\u2026")))));
}; //getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
//当刷新页面(初次载入页面)，该方法会在服务器执行
//当通过<Link>跳转路由的时候，该方法会在客户端执行


IndexPage.getInitialProps = async () => {
  const res = await fetch("http://localhost:3001/api/essaytable");
  const data = await res.json(); //这边返回的数据会被挂载到组件的props中

  return {
    show: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_4__["withRouter"])(IndexPage));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9jYXJvdXNlbC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvY3NzL2hvbWUubGVzcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ob21lLnRzeCIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhbnRkL2xpYi9jYXJvdXNlbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsImltZ251bWJlciIsIkluZGV4UGFnZSIsInByb3BzIiwiY3Nzb2JqIiwic2hvcnRjdXQiLCJoZWFkZXJXcmFwIiwic2xvZ2FuQm94IiwidGV4dCIsInVzZXJpbmZvYm94IiwiY2xlYXJmaXgiLCJqb2luIiwiaXRlbUluZm8iLCJpbmZvTm9ybWFsIiwiaW5mb1RleHQiLCJpbmZvTGluayIsImNvbG9yIiwidHViaWFvIiwic2hvdyIsIm1hcCIsIml0ZW0iLCJib29rSWQiLCJpbWdQYXRoIiwiYm9va05hbWUiLCJhdXRob3IiLCJnZXRJbml0aWFsUHJvcHMiLCJyZXMiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwid2l0aFJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtR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Ozs7Ozs7QUNBQSxrQzs7Ozs7Ozs7Ozs7QUNBQSw2QyIsImZpbGUiOiJwYWdlcy9ob21lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ob21lLnRzeFwiKTtcbiIsImltcG9ydCBSZWFjdCwgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcblxudHlwZSBQcm9wcyA9IHtcbiAgY2hpbGRyZW4/OiBSZWFjdE5vZGVcbiAgdGl0bGU/OiBzdHJpbmdcbn1cblxuY29uc3QgTGF5b3V0ID0gKHsgY2hpbGRyZW4sIHRpdGxlID0gJ1RoaXMgaXMgdGhlIGRlZmF1bHQgdGl0bGUnIH06IFByb3BzKSA9PiAoXG4gIDxkaXY+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cImluaXRpYWwtc2NhbGU9MS4wLCB3aWR0aD1kZXZpY2Utd2lkdGhcIiAvPlxuICAgIDwvSGVhZD5cbiAgICA8aGVhZGVyPlxuICAgICAgPG5hdj5cbiAgICAgICAgey8qIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGE+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPnsnICd9XG4gICAgICAgIHx7JyAnfVxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGE+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi91c2Vyc1wiPlxuICAgICAgICAgIDxhPlVzZXJzIExpc3Q8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8IDxhIGhyZWY9XCIvYXBpL3VzZXJzXCI+VXNlcnMgQVBJPC9hPiAqL31cbiAgICAgIDwvbmF2PlxuICAgIDwvaGVhZGVyPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8Zm9vdGVyPlxuICAgICAgey8qIDxociAvPiAqL31cbiAgICAgIHsvKiA8c3Bhbj5JJ20gaGVyZSB0byBzdGF5IChGb290ZXIpPC9zcGFuPiAqL31cbiAgICA8L2Zvb3Rlcj5cblxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPlxuICAgICAge1xuICAgICAgICBgXG4gICAgICAgIH1gXG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9zdHlsZS9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi9pbmRleC5jc3MnKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJzaG9ydGN1dFwiOiBcIl8xODE5R1VzUTU0d3daS3AzZ1YwdklSXCIsXG5cdFwiaGVhZGVyV3JhcFwiOiBcIlNJME9YUmJqeUpseDNiV0VDVE5SX1wiLFxuXHRcInNsb2dhbkJveFwiOiBcIl8yZTUxekpHTVk2UDg5V0dBTmcycWxrXCIsXG5cdFwidGV4dFwiOiBcIl8yV1p0Z3Y3UGNMV2VPanFieFlzeW9sXCIsXG5cdFwidXNlcmluZm9ib3hcIjogXCJfMkF4ZnR2NFhsc2RsdE5TalpzQ0dEelwiLFxuXHRcIml0ZW1JbmZvXCI6IFwiXzNvZUxCRVMzRGdkLUlFMnJSalhRQzlcIixcblx0XCJpbmZvTm9ybWFsXCI6IFwiXzJDLTNXMUxFeUtpaWJZVmhnRWwzaGlcIixcblx0XCJpbmZvVGV4dFwiOiBcIl8zQkFKYWk3VmZYem1CTkRLUHR4MUUwXCIsXG5cdFwiaW5mb0xpbmtcIjogXCJfMnBScUo3cWtFakZYdE00QW8xbHVxN1wiLFxuXHRcImNsZWFyZml4XCI6IFwiXzN0Wjc3cmNFNkhGcFZrQi0wZEZFcVVcIixcblx0XCJ0dWJpYW9cIjogXCJfMXE1NWQ5VEM1dzY2MVNwTDR4TWszNFwiXG59OyIsIi8vIGltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG4vLyBpbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnYW50ZCc7XHJcbi8v5byA5ZCvY3Nz5qih5Z2X5YyW5LmL5ZCO5Y+v5Lul6L+Z5qC35L2/55So5qC35byPXHJcbi8vIGltcG9ydCBjc3NvYmogZnJvbSAnLi9pbmRleC5sZXNzJ1xyXG5pbXBvcnQgY3Nzb2JqIGZyb20gXCIuL2Nzcy9ob21lLmxlc3NcIjtcclxuaW1wb3J0IFwiQC9zdGF0aWMvY3NzL2ZvbnQtYXdlc29tZS5jc3NcIjtcclxuaW1wb3J0IFwiLi9jc3MvaG9tZS5jc3NcIjtcclxuXHJcbmltcG9ydCB7IENhcm91c2VsIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbi8vIOWjsOaYjueahOWFqOWxgOaVsOaNrlxyXG52YXIgaW1nbnVtYmVyOiBudW1iZXIgPSAwO1xyXG5cclxuY29uc3QgSW5kZXhQYWdlID0gKHByb3BzOiBhbnkpID0+IHtcclxuICAvLyBjb25zb2xlLmxvZyhwcm9wcyk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxMYXlvdXQgdGl0bGU9XCLpppbpobVcIj5cclxuICAgICAgPGhlYWRlcj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLnNob3J0Y3V0fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaGVhZGVyV3JhcH0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouc2xvZ2FuQm94fT5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai50ZXh0fT7nvZHnvZflpKnkuIvlm77kuaY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4+5Lyg5om/5Lit5Y2O5paH5piOPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e1tjc3NvYmoudXNlcmluZm9ib3gsIGNzc29iai5jbGVhcmZpeF0uam9pbihcIiBcIil9PlxyXG4gICAgICAgICAgICB7LyogMSAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb05vcm1hbH0+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+55m75b2VPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9Pi88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5rOo5YaMPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL2NhcnQua29uZ2Z6LmNvbS9saXN0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7Y29sb3I6XCIjZmZmXCJ9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17W1wiZmFcIiwgXCJmYS1zaG9wcGluZy1jYXJ0XCIsIGNzc29iai50dWJpYW9dLmpvaW4oXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgXCJcclxuICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgID48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+6LSt54mp6L2mPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vYnV5ZXIvb3JkZXIvb3JkZXJfbGlzdC5odG1sXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5oiR55qE6K6i5Y2VPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICB7LyogMiAqL31cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+XHJcbiAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwOi8vc2hvcC5rb25nZnouY29tL2J1eWVyL29yZGVyL29yZGVyX2xpc3QuaHRtbFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Nzc29iai5pbmZvTGlua31cclxuICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgICAgICAgICByZWw9XCJub2ZvbGxvd1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtjc3NvYmouaW5mb1RleHR9PuS4quS6uuS4reW/gzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgaHJlZj1cImh0dHA6Ly9zaG9wLmtvbmdmei5jb20vYnV5ZXIvb3JkZXIvb3JkZXJfbGlzdC5odG1sXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9MaW5rfVxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICAgICAgICAgIHJlbD1cIm5vZm9sbG93XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2Nzc29iai5pbmZvVGV4dH0+5Y2W5a625Lit5b+DPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS9idXllci9vcmRlci9vcmRlcl9saXN0Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7lrqLmnI08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgey8qIDMgKi99XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cDovL3Nob3Aua29uZ2Z6LmNvbS9idXllci9vcmRlci9vcmRlcl9saXN0Lmh0bWxcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjc3NvYmouaW5mb0xpbmt9XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgcmVsPVwibm9mb2xsb3dcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17Y3Nzb2JqLmluZm9UZXh0fT7miYvmnLrniYg8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3NvYmouaXRlbUluZm99PjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3Nzb2JqLml0ZW1JbmZvfT48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzc29iai5pdGVtSW5mb30+PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXIgY2xlYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1maXIgY2xlYXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29kZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGJnXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1wcmltYXJ5IGNsZWFyXCI+5a2U5a2Q5pen5Lmm572RPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1zZWNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3ZlbFwiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJub3ZlbEluaXRcIj7lsI/or7Q8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVzc2F5XCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cImVzc2F5SW5pdFwiPuaVo+aWhzwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9ldHJ5XCI+XHJcbiAgICAgICAgICAgICAgPGEgaHJlZj1cInByb3NlSW5pdFwiPumaj+eslDwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid29ya1wiPlxyXG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJsaXRlcmF0dXJlSW5pdFwiPuaWh+WtpjwvYT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgey8qIDxMdW5Cb0NvbXBvbmVudCBsdW5ib09iamVjdD17ZGF0YS5sdW5ib09iamVjdH0gaW1nQXJyYXk9e2RhdGEuaW1nQXJyYXl9IGxpbmtBcnJheT17ZGF0YS5saW5rQXJyYXl9Lz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3cmFwcGVyJykgKi99XHJcbiAgICAgICAgPENhcm91c2VsIGF1dG9wbGF5PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIDxoMyBjbGFzc05hbWU9XCJjb250ZW50U3R5bGVcIj4xPC9oMz4gKi99XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2x1bmJvL2x1bjAuanBnXCIgd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiMjcwXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvbHVuYm8vbHVuMTEuanBnXCIgd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiMjcwXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvbHVuYm8vbHVuMi5qcGdcIiB3aWR0aD1cIjEwMDBcIiBoZWlnaHQ9XCIyNzBcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIi4uL3N0YXRpYy9sdW5iby9sdW4zLmpwZ1wiIHdpZHRoPVwiMTAwMFwiIGhlaWdodD1cIjI3MFwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2x1bmJvL2x1bjQuanBnXCIgd2lkdGg9XCIxMDAwXCIgaGVpZ2h0PVwiMjcwXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICAgICAgey8qICwgbW91bnROb2RlLCAqL31cclxuICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJub3YtdGhpIGNsZWFyXCI+ICovfVxyXG4gICAgICAgICAgey8qIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS8yLmpwZ1wiPjwvaW1nPiAqL31cclxuICAgICAgICB7LyogPC9kaXY+ICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm92LWZvciBjbGVhclwiPlxyXG4gICAgICAgICAgPGRpdj7mlrDkuabpgJ/pgJI8L2Rpdj5cclxuICAgICAgICAgIDxkaXY+5pu05aSawrs8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJub3YtZmlmIGNsZWFyXCI+XHJcbiAgICAgICAgICB7cHJvcHMuc2hvdy5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpbWdudW1iZXIrKztcclxuICAgICAgICAgICAgaWYgKGltZ251bWJlciA8IDIyKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpdGVtLmJvb2tJZH0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2AuLi9zdGF0aWMvaW1hZ2VzL2ltYWdlLyR7aXRlbS5pbWdQYXRofWB9XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCIxMTVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD1cIjE3MlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIHtpdGVtLmJvb2tOYW1lfVxyXG4gICAgICAgICAgICAgICAgICDkvZzogIU6e2l0ZW0uYXV0aG9yfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIHsvKiA8JS0t6LGG55Oj5pel5Y6GLS0lPiAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5vdi1jYWwgY2xlYXJcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL2ltYWdlcy9pbWFnZS8zLmpwZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9vay1uZXdzIGNsZWFyXCI+5Zu+5Lmm6LWE6K6vPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvb2stbmV3cy1jb250ZW50IGNsZWFyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmx1ZXRleHRcIj5cclxuICAgICAgICAgICAgICDosYbnk6PkuIDlkajmlrDkuabpgJ/pgJLvvZzpmYjmmKXmiJDpppbpg6jnn63nr4flsI/or7Tpm4bvvIzlkYjnjrDmsYnor63lsI/or7TnmoTkuIDnp43po47luqbkuI7mlrDnmoTlj6/og73mgKdcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JheXRleHRcIj7osYbnk6Por7vkuaY8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFja3RleHRcIj5cclxuICAgICAgICAgICAgICDomZrmnoTnsbtcclxuICAgICAgICAgICAgICAq54m55Yir5o6o6I2Q5Lu/5L2b6bif5qCW5qCR77yM6bG85r2c5riK77yM5LiA5YiH56iz5aal5Y+I5a6J5a6B77yM5aSc5pma6L+Z5omN55yf5q2j5Zyw6ZmN5Li044CCXHJcbiAgICAgICAgICAgICAg44CK5aSc5pma55qE5r2c5rC06ImH44CL5piv5L2c5a626ZmI5pil5oiQ55qE6aaW6YOo55+t56+H5bCP6K+06ZuG44CC5Lmd5Liq5pWF5LqL77yM56yU6ZSL5ri46LWw5LqO5pen5bGx5rKz5LiO5pyq55+l5a6H5a6Z6Ze077yM5Lul55Gw5aWH6aOY5oms55qE5oOz6LGh44CB5rip5Y6a5riF5bm955qE56yU5rOV77yMXHJcbiAgICAgICAgICAgICAg5Zyo546w5a6e5LiO5bm75aKD6Ze06L6f5byA6Iul5bmy5p2h56eY5a+G55qE6YCa6YGT77ya5rW35bqV5ryr5ri455qE5bCR5bm044CB5rex5bGx6YGX6JC955qE5Y+k56KR44CB5byl5pWj5YWl5LiH54mp55qE5a2X5Y+l44CB5LqR5b2p5L+u5Ymq56uZ44CB6ZO45YmR5LiO6YW/6YWS44CB6ZOB5bmV5LiL55qE6JCo5YWL5pav44CB6JOd6bK45YaF55qE5ryU5aWP5Y6F4oCm4oCmXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICB7LyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vZ2V0SW5pdGlhbFByb3BzIOaWueazleaXouWPr+S7peWcqOacjeWKoeWZqOi/kOihjO+8jOWPiOWPr+S7peWcqOWuouaIt+err+i/kOihjCjnu4Tku7bliJvlu7rkuYvliY3miafooYznmoQpXHJcbi8v5b2T5Yi35paw6aG16Z2iKOWIneasoei9veWFpemhtemdoinvvIzor6Xmlrnms5XkvJrlnKjmnI3liqHlmajmiafooYxcclxuLy/lvZPpgJrov4c8TGluaz7ot7Povazot6/nlLHnmoTml7blgJnvvIzor6Xmlrnms5XkvJrlnKjlrqLmiLfnq6/miafooYxcclxuSW5kZXhQYWdlLmdldEluaXRpYWxQcm9wcyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChcImh0dHA6Ly9sb2NhbGhvc3Q6MzAwMS9hcGkvZXNzYXl0YWJsZVwiKTtcclxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcclxuICAvL+i/mei+uei/lOWbnueahOaVsOaNruS8muiiq+aMgui9veWIsOe7hOS7tueahHByb3Bz5LitXHJcbiAgcmV0dXJuIHsgc2hvdzogZGF0YSB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvdXRlcihJbmRleFBhZ2UpO1xyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhbnRkL2xpYi9jYXJvdXNlbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2hlYWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9