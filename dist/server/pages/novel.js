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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/novel/index.tsx");
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

/***/ "./node_modules/antd/lib/input/style/css.js":
/*!**************************************************!*\
  !*** ./node_modules/antd/lib/input/style/css.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/input/style/index.css");

__webpack_require__(/*! ../../button/style/css */ "./node_modules/antd/lib/button/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/input/style/index.css":
/*!*****************************************************!*\
  !*** ./node_modules/antd/lib/input/style/index.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/pagination/style/css.js":
/*!*******************************************************!*\
  !*** ./node_modules/antd/lib/pagination/style/css.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/pagination/style/index.css");

__webpack_require__(/*! ../../select/style/css */ "./node_modules/antd/lib/select/style/css.js");

__webpack_require__(/*! ../../input/style/css */ "./node_modules/antd/lib/input/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/pagination/style/index.css":
/*!**********************************************************!*\
  !*** ./node_modules/antd/lib/pagination/style/index.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/antd/lib/select/style/css.js":
/*!***************************************************!*\
  !*** ./node_modules/antd/lib/select/style/css.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(/*! ../../style/index.css */ "./node_modules/antd/lib/style/index.css");

__webpack_require__(/*! ./index.css */ "./node_modules/antd/lib/select/style/index.css");

__webpack_require__(/*! ../../input/style/css */ "./node_modules/antd/lib/input/style/css.js");

/***/ }),

/***/ "./node_modules/antd/lib/select/style/index.css":
/*!******************************************************!*\
  !*** ./node_modules/antd/lib/select/style/index.css ***!
  \******************************************************/
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

/***/ "./pages/novel/index.tsx":
/*!*******************************!*\
  !*** ./pages/novel/index.tsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/pagination/style/css */ "./node_modules/antd/lib/pagination/style/css.js");
/* harmony import */ var antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/pagination */ "antd/lib/pagination");
/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ "./components/Layout.tsx");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../static/css/font-awesome.css */ "./static/css/font-awesome.css");
/* harmony import */ var _static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_static_css_font_awesome_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _novel_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./novel.css */ "./pages/novel/novel.css");
/* harmony import */ var _novel_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_novel_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_topboxnav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/topboxnav */ "./pages/components/topboxnav.tsx");


var _jsxFileName = "D:\\react\u6BD5\u4E1A\u8BBE\u8BA1\\\u5B9E\u8DF5\u8D44\u6599\\20210201\\20210201\\code\\next-ts\u6A21\u677F\\my-app\\pages\\novel\\index.tsx";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








// 声明的全局数据
const IndexPage = props => {
  return __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
    title: "\u5206\u7C7B\uFF1A\u5C0F\u8BF4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, __jsx("div", {
    className: "novel-body",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }
  }, __jsx(_components_topboxnav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 9
    }
  }), __jsx("div", {
    id: "db-nav-book",
    className: "nav",
    __self: undefined,
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
    __self: undefined,
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
    __self: undefined,
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
      float: "left"
    },
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 17
    }
  }, "\u56FE\u4E66\u5206\u7C7B")), __jsx("div", {
    className: "nav-search",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 15
    }
  }, __jsx("form", {
    action: "https://search.douban.com/book/subject_search",
    method: "get",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }, __jsx("fieldset", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 19
    }
  }, __jsx("label", {
    htmlFor: "inp-query",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), __jsx("div", {
    className: "inp",
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 23
    }
  })), __jsx("div", {
    className: "inp-btn",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 21
    }
  }, __jsx("input", {
    type: "submit",
    value: "\u641C\u7D22",
    readOnly: true,
    __self: undefined,
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
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 21
    }
  })))))), __jsx("div", {
    className: "nav-secondary",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }
  }, __jsx("div", {
    className: "nav-items",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 13
    }
  }, __jsx("ul", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 15
    }
  }, __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 17
    }
  }, __jsx("a", {
    href: "https://book.douban.com/cart/",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 19
    }
  }, "\u8D2D\u4E66\u5355")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 19
    }
  }, "\u7535\u5B50\u56FE\u4E66")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 19
    }
  }, "\u5B54\u7F51\u4E66\u5E97")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 19
    }
  }, "2021\u5E74\u5EA6\u699C\u5355")), __jsx("li", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 19
    }
  }, "2021\u4E66\u5F71\u97F3\u62A5\u544A")), __jsx("li", {
    className: " book-cart",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 17
    }
  }, __jsx("a", {
    target: "_blank",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 19
    }
  }, "\u8D2D\u7269\u8F66")))))), __jsx("div", {
    id: "wrapper",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 9
    }
  }, __jsx("div", {
    id: "content",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 11
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 13
    }
  }, "\u5B54\u7F51\u56FE\u4E66\u6807\u7B7E: \u5C0F\u8BF4"), __jsx("div", {
    className: "grid-16-8 clearfix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "article",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 15
    }
  }, __jsx("div", {
    id: "subject_list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "clearfix",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87,
      columnNumber: 19
    }
  }, __jsx("span", {
    className: "rr greyinput",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 21
    }
  }, "\u7EFC\u5408\u6392\u5E8F \xA0/\xA0", __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 23
    }
  }, "\u6309\u51FA\u7248\u65E5\u671F\u6392\u5E8F"), "\xA0/\xA0", __jsx("a", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92,
      columnNumber: 23
    }
  }, "\u6309\u8BC4\u4EF7\u6392\u5E8F"))), __jsx("ul", {
    className: "subject-list",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 19
    }
  }, props.show.map(item => {
    if (item.bookId < 3) {
      return __jsx("li", {
        className: "subject-item",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 27
        }
      }, __jsx("div", {
        className: "pic",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 31
        }
      }, __jsx("img", {
        src: `../static/images/image/${item.imgPath}`,
        style: {
          width: "90",
          height: "133"
        },
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 33
        }
      }))));
    }
  })))), __jsx("div", {
    className: "aside",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115,
      columnNumber: 15
    }
  }), __jsx("div", {
    className: "extra",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 15
    }
  }))), __jsx("div", {
    id: "footer",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 11
    }
  }, __jsx(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {
    total: 85,
    showSizeChanger: true,
    showQuickJumper: true,
    showTotal: total => `Total ${total} items`,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 13
    }
  })))));
}; // getInitialProps 方法既可以在服务器运行，又可以在客户端运行(组件创建之前执行的)
// 当刷新页面(初次载入页面)，该方法会在服务器执行
// 当通过<Link>跳转路由的时候，该方法会在客户端执行


IndexPage.getInitialProps = async () => {
  const res = await isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_7___default()("http://localhost:3001/novel");
  const data = await res.json(); //这边返回的数据会被挂载到组件的props中

  return {
    show: data
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_3__["withRouter"])(IndexPage));

/***/ }),

/***/ "./pages/novel/novel.css":
/*!*******************************!*\
  !*** ./pages/novel/novel.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./static/css/font-awesome.css":
/*!*************************************!*\
  !*** ./static/css/font-awesome.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "antd/lib/pagination":
/*!**************************************!*\
  !*** external "antd/lib/pagination" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd/lib/pagination");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9MYXlvdXQudHN4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9idXR0b24vc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9pbnB1dC9zdHlsZS9jc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2FudGQvbGliL3BhZ2luYXRpb24vc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9hbnRkL2xpYi9zZWxlY3Qvc3R5bGUvY3NzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL2NvbXBvbmVudHMvdG9wYm94bmF2LnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9ub3ZlbC9pbmRleC50c3giLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZC9saWIvcGFnaW5hdGlvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImlzb21vcnBoaWMtdW5mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCIiXSwibmFtZXMiOlsiTGF5b3V0IiwiY2hpbGRyZW4iLCJ0aXRsZSIsIkluZGV4UGFnZSIsInByb3BzIiwiaGVpZ2h0Iiwid2lkdGgiLCJmbG9hdCIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInNob3ciLCJtYXAiLCJpdGVtIiwiYm9va0lkIiwiaW1nUGF0aCIsInRvdGFsIiwiZ2V0SW5pdGlhbFByb3BzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsIndpdGhSb3V0ZXIiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVB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QStCRTtBQUFLLGFBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUEvQkYsRUFnQ0U7QUFBSyxhQUFTLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENGLENBRkYsQ0FERixFQXNDRTtBQUFLLE1BQUUsRUFBQyxRQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUNFLFNBQUssRUFBRSxFQURUO0FBRUUsbUJBQWUsTUFGakI7QUFHRSxtQkFBZSxNQUhqQjtBQUlFLGFBQVMsRUFBR1UsS0FBRCxJQUFZLFNBQVFBLEtBQU0sUUFKdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBdENGLENBbEVGLENBREYsQ0FERjtBQXNIRCxDQXZIRCxDLENBeUhBO0FBQ0E7QUFDQTs7O0FBQ0FaLFNBQVMsQ0FBQ2EsZUFBVixHQUE0QixZQUFZO0FBQ3RDLFFBQU1DLEdBQUcsR0FBRyxNQUFNQyx5REFBSyxDQUFDLDZCQUFELENBQXZCO0FBQ0EsUUFBTUMsSUFBSSxHQUFHLE1BQU1GLEdBQUcsQ0FBQ0csSUFBSixFQUFuQixDQUZzQyxDQUd0Qzs7QUFDQSxTQUFPO0FBQUVWLFFBQUksRUFBRVM7QUFBUixHQUFQO0FBQ0QsQ0FMRDs7QUFPZUUsNkhBQVUsQ0FBQ2xCLFNBQUQsQ0FBekIsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBLGdEOzs7Ozs7Ozs7OztBQ0FBLCtDOzs7Ozs7Ozs7OztBQ0FBLHNDOzs7Ozs7Ozs7OztBQ0FBLHdDOzs7Ozs7Ozs7OztBQ0FBLGtDOzs7Ozs7Ozs7OztBQ0FBLDZDIiwiZmlsZSI6InBhZ2VzL25vdmVsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9ub3ZlbC9pbmRleC50c3hcIik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgUmVhY3ROb2RlIH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5cbnR5cGUgUHJvcHMgPSB7XG4gIGNoaWxkcmVuPzogUmVhY3ROb2RlXG4gIHRpdGxlPzogc3RyaW5nXG59XG5cbmNvbnN0IExheW91dCA9ICh7IGNoaWxkcmVuLCB0aXRsZSA9ICdUaGlzIGlzIHRoZSBkZWZhdWx0IHRpdGxlJyB9OiBQcm9wcykgPT4gKFxuICA8ZGl2PlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPnt0aXRsZX08L3RpdGxlPlxuICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJpbml0aWFsLXNjYWxlPTEuMCwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cbiAgICA8L0hlYWQ+XG4gICAgPGhlYWRlcj5cbiAgICAgIDxuYXY+XG4gICAgICAgIHsvKiA8TGluayBocmVmPVwiL1wiPlxuICAgICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvTGluaz57JyAnfVxuICAgICAgICB8eycgJ31cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPlxuICAgICAgICAgIDxhPkFib3V0PC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgfHsnICd9XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvdXNlcnNcIj5cbiAgICAgICAgICA8YT5Vc2VycyBMaXN0PC9hPlxuICAgICAgICA8L0xpbms+eycgJ31cbiAgICAgICAgfCA8YSBocmVmPVwiL2FwaS91c2Vyc1wiPlVzZXJzIEFQSTwvYT4gKi99XG4gICAgICA8L25hdj5cbiAgICA8L2hlYWRlcj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPGZvb3Rlcj5cbiAgICAgIHsvKiA8aHIgLz4gKi99XG4gICAgICB7LyogPHNwYW4+SSdtIGhlcmUgdG8gc3RheSAoRm9vdGVyKTwvc3Bhbj4gKi99XG4gICAgPC9mb290ZXI+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD5cbiAgICAgIHtcbiAgICAgICAgYFxuICAgICAgICBgXG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9zdHlsZS9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi9pbmRleC5jc3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL3N0eWxlL2luZGV4LmNzcycpO1xuXG5yZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuXG5yZXF1aXJlKCcuLi8uLi9idXR0b24vc3R5bGUvY3NzJyk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5yZXF1aXJlKCcuLi8uLi9zdHlsZS9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi9pbmRleC5jc3MnKTtcblxucmVxdWlyZSgnLi4vLi4vc2VsZWN0L3N0eWxlL2NzcycpO1xuXG5yZXF1aXJlKCcuLi8uLi9pbnB1dC9zdHlsZS9jc3MnKTsiLCIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJy4uLy4uL3N0eWxlL2luZGV4LmNzcycpO1xuXG5yZXF1aXJlKCcuL2luZGV4LmNzcycpO1xuXG5yZXF1aXJlKCcuLi8uLi9pbnB1dC9zdHlsZS9jc3MnKTsiLCIvLyBpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvTGF5b3V0XCI7XHJcbi8vIGltcG9ydCB7IHdpdGhSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xyXG5pbXBvcnQgeyB3YXRjaCB9IGZyb20gXCJmc1wiO1xyXG4vLyBpbXBvcnQgXCIuL2Nzcy9pbmRleC5jc3NcIjtcclxuLy8gaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcclxuLy8gaW1wb3J0IEZyb21kZW1vIGZyb20gXCIuL2NvbXBvbmVudHMvZnJvbVwiXHJcbi8vIOWjsOaYjueahOWFqOWxgOaVsOaNrlxyXG5cclxubGV0IEluZGV4UGFnZTogUmVhY3QuRkMgPSAocHJvcHMpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBpZD1cImRiLWdsb2JhbC1uYXZcIiBjbGFzc05hbWU9XCJnbG9iYWwtbmF2XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtaW5mb1wiPlxyXG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxvZ2luXCIgcmVsPVwibm9mb2xsb3dcIj5cclxuICAgICAgICAgICAg55m75b2VL+azqOWGjFxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1uYXYtZG91YmFuYXBwXCI+XHJcbiAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsbmstZG91YmFuYXBwXCI+5LiL6L29572R56uZ5a6i5oi356uvPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdsb2JhbC1uYXYtaXRlbXNcIj5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgIDxhIHRhcmdldD1cIl9ibGFua1wiPuWtlOe9kTwvYT5cclxuICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm9uXCI+XHJcbiAgICAgICAgICAgICAgPGE+6K+75LmmPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5Y+k57GNPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5aKo6L+5PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+54+N5pysPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5bCP6K+0PC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5pWj5paHPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+6ZqP56yUPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5paH5a2mPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+5a6X5pWZPC9hPlxyXG4gICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hpbGQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnR7XHJcblxyXG4vLyAgIHJlbmRlcigpe1xyXG4vLyAgICAgcmV0dXJuICA8ZGl2Pnt0aGlzLnByb3BzLnBhcmFtcy5tc2d9PC9kaXY+XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vL2dldEluaXRpYWxQcm9wcyDmlrnms5Xml6Llj6/ku6XlnKjmnI3liqHlmajov5DooYzvvIzlj4jlj6/ku6XlnKjlrqLmiLfnq6/ov5DooYwo57uE5Lu25Yib5bu65LmL5YmN5omn6KGM55qEKVxyXG4vL+W9k+WIt+aWsOmhtemdoijliJ3mrKHovb3lhaXpobXpnaIp77yM6K+l5pa55rOV5Lya5Zyo5pyN5Yqh5Zmo5omn6KGMXHJcbi8v5b2T6YCa6L+HPExpbms+6Lez6L2s6Lev55Sx55qE5pe25YCZ77yM6K+l5pa55rOV5Lya5Zyo5a6i5oi356uv5omn6KGMXHJcbi8vIEluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpL3VzZXJzXCIpO1xyXG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xyXG4vLyAgIC8v6L+Z6L656L+U5Zue55qE5pWw5o2u5Lya6KKr5oyC6L295Yiw57uE5Lu255qEcHJvcHPkuK1cclxuLy8gICByZXR1cm4geyBzaG93OiBkYXRhIH07XHJcbi8vIH07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleFBhZ2U7XHJcbiIsImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcclxuaW1wb3J0IExheW91dCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgd2l0aFJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgXCJAL3N0YXRpYy9jc3MvZm9udC1hd2Vzb21lLmNzc1wiO1xyXG5pbXBvcnQgXCIuL25vdmVsLmNzc1wiO1xyXG5pbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtdW5mZXRjaFwiO1xyXG5pbXBvcnQgVG9wYm94bmF2IGZyb20gXCIuLi9jb21wb25lbnRzL3RvcGJveG5hdlwiO1xyXG5pbXBvcnQgeyBQYWdpbmF0aW9uIH0gZnJvbSBcImFudGRcIjtcclxuLy8g5aOw5piO55qE5YWo5bGA5pWw5o2uXHJcblxyXG5jb25zdCBJbmRleFBhZ2UgPSAocHJvcHM6IGFueSkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0IHRpdGxlPVwi5YiG57G777ya5bCP6K+0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibm92ZWwtYm9keVwiPlxyXG4gICAgICAgIDxUb3Bib3huYXY+PC9Ub3Bib3huYXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0t56ys5LqM5bGCdG9w5a+86Iiq5qCP5byA5aeLLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIDxkaXYgaWQ9XCJkYi1uYXYtYm9va1wiIGNsYXNzTmFtZT1cIm5hdlwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtd3JhcFwiIHN0eWxlPXt7IGhlaWdodDogXCI3NS42NzdweFwiIH19PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1wcmltYXJ5XCIgc3R5bGU9e3sgaGVpZ2h0OiBcIjc0cHhcIiB9fT5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJuYXYtbG9nb1wiXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxNDVweFwiLCBoZWlnaHQ6IFwiNTZweFwiLCBmbG9hdDogXCJsZWZ0XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8YSBocmVmPVwiXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMzBweFwiLCBmb250V2VpZ2h0OiBcImJvbGRlclwiIH19PlxyXG4gICAgICAgICAgICAgICAgICDlm77kuabliIbnsbtcclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdi1zZWFyY2hcIj5cclxuICAgICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICAgIGFjdGlvbj1cImh0dHBzOi8vc2VhcmNoLmRvdWJhbi5jb20vYm9vay9zdWJqZWN0X3NlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZD1cImdldFwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxmaWVsZHNldD5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImlucC1xdWVyeVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImlucC1xdWVyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJzZWFyY2hfdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5Lmm5ZCN44CB5L2c6ICF44CBSVNCTlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZE9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnAtYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi5pCc57SiXCIgcmVhZE9ubHkgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJjYXRcIiB2YWx1ZT1cIjEwMDFcIiByZWFkT25seSAvPlxyXG4gICAgICAgICAgICAgICAgICA8L2ZpZWxkc2V0PlxyXG4gICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXYtc2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2LWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9ib29rLmRvdWJhbi5jb20vY2FydC9cIj7otK3kuabljZU8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7nlLXlrZDlm77kuaY8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YT7lrZTnvZHkuablupc8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj4yMDIx5bm05bqm5qac5Y2VPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgdGFyZ2V0PVwiX2JsYW5rXCI+MjAyMeS5puW9semfs+aKpeWRijwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiIGJvb2stY2FydFwiPlxyXG4gICAgICAgICAgICAgICAgICA8YSB0YXJnZXQ9XCJfYmxhbmtcIj7otK3nianovaY8L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qIC0tLS0tLS0tLS0t56ys5LqM5bGCdG9w5a+86Iiq5qCP57uT5p2fLS0tLS0tLS0tLS0tLS0tICovfVxyXG4gICAgICAgIHsvKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS3kuLvkvZPpg6jliIYtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi99XHJcbiAgICAgICAgPGRpdiBpZD1cIndyYXBwZXJcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxoMT7lrZTnvZHlm77kuabmoIfnrb46IOWwj+ivtDwvaDE+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZC0xNi04IGNsZWFyZml4XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwic3ViamVjdF9saXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2xlYXJmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJyciBncmV5aW5wdXRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIOe7vOWQiOaOkuW6jyAmbmJzcDsvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT7mjInlh7rniYjml6XmnJ/mjpLluo88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAmbmJzcDsvJm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YT7mjInor4Tku7fmjpLluo88L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cInN1YmplY3QtbGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9wcy5zaG93Lm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5ib29rSWQgPCAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInN1YmplY3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC4uL3N0YXRpYy9pbWFnZXMvaW1hZ2UvJHtpdGVtLmltZ1BhdGh9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjkwXCIsIGhlaWdodDogXCIxMzNcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSl9XHJcbiAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFzaWRlXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleHRyYVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cImZvb3RlclwiPlxyXG4gICAgICAgICAgICA8UGFnaW5hdGlvblxyXG4gICAgICAgICAgICAgIHRvdGFsPXs4NX1cclxuICAgICAgICAgICAgICBzaG93U2l6ZUNoYW5nZXJcclxuICAgICAgICAgICAgICBzaG93UXVpY2tKdW1wZXJcclxuICAgICAgICAgICAgICBzaG93VG90YWw9eyh0b3RhbCkgPT4gYFRvdGFsICR7dG90YWx9IGl0ZW1zYH1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBnZXRJbml0aWFsUHJvcHMg5pa55rOV5pei5Y+v5Lul5Zyo5pyN5Yqh5Zmo6L+Q6KGM77yM5Y+I5Y+v5Lul5Zyo5a6i5oi356uv6L+Q6KGMKOe7hOS7tuWIm+W7uuS5i+WJjeaJp+ihjOeahClcclxuLy8g5b2T5Yi35paw6aG16Z2iKOWIneasoei9veWFpemhtemdoinvvIzor6Xmlrnms5XkvJrlnKjmnI3liqHlmajmiafooYxcclxuLy8g5b2T6YCa6L+HPExpbms+6Lez6L2s6Lev55Sx55qE5pe25YCZ77yM6K+l5pa55rOV5Lya5Zyo5a6i5oi356uv5omn6KGMXHJcbkluZGV4UGFnZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvbm92ZWxcIik7XHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgLy/ov5novrnov5Tlm57nmoTmlbDmja7kvJrooqvmjILovb3liLDnu4Tku7bnmoRwcm9wc+S4rVxyXG4gIHJldHVybiB7IHNob3c6IGRhdGEgfTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb3V0ZXIoSW5kZXhQYWdlKTtcclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYW50ZC9saWIvcGFnaW5hdGlvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLXVuZmV0Y2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInN0eWxlZC1qc3gvc3R5bGVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==